// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Loader2, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { hasClaudeKey } from "@/services/claude-api";
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";
import ManuscriptCard from "./manuscripts/ManuscriptCard";
import ManuscriptDialog from "./manuscripts/ManuscriptDialog";
import DeleteManuscriptDialog from "./manuscripts/DeleteManuscriptDialog";
import CharacterDialog from "./characters/CharacterDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import AnalysisResults from "./manuscripts/AnalysisResults";
import HighlightedManuscript from "./manuscripts/HighlightedManuscript";
import AnalysisProgress from "./manuscripts/AnalysisProgress";

interface ManuscriptsViewProps {
  userId: string;
  projectId: string;
  onAnalysisStart?: (chapterNum: number, manuscriptId: string) => void;
  onUploadStart?: (chapterNum: number) => void;
  onUploadComplete?: () => void;
  onAnalysisDialogOpen?: () => void;
  onAnalysisDialogClose?: () => void;
  openAnalysisForManuscriptId?: string | null;
}

const ManuscriptsView = ({ 
  userId, 
  projectId,
  onAnalysisStart, 
  onUploadStart, 
  onUploadComplete, 
  onAnalysisDialogOpen, 
  onAnalysisDialogClose,
  openAnalysisForManuscriptId,
}: ManuscriptsViewProps) => {
  const [manuscripts, setManuscripts] = useState([]);
  const [isLoadingManuscripts, setIsLoadingManuscripts] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [analyzingManuscriptId, setAnalyzingManuscriptId] = useState<string | null>(null);
  const isAnalyzingRef = useRef(false); // Synchronous blocking - prevents race conditions
  // Auto-chain: once the user manually clicks Analyze on any chapter, every
  // subsequent chapter (in ascending chapter_number order) auto-analyzes when
  // the previous one finishes. Stops when no higher-numbered un-analyzed
  // chapter remains, OR when the user clicks Stop Auto-Analysis. Lives only
  // in component state — closing the tab breaks the chain (the analyzer is
  // client-side via the Proxy shim), but in-flight chapter completes its DB
  // writes; user just clicks Analyze again on resume.
  //
  // chainActiveRef mirrors chainActive for SYNCHRONOUS reads inside async
  // callbacks (setTimeout). React state reads inside a setTimeout closure are
  // stale — they reflect the value at the time the setTimeout was scheduled,
  // not when it fires. So if the user clicks Stop after a chain transition
  // setTimeout was already queued, a state-only check would still see
  // chainActive=true and fire handleAnalyze anyway. The ref read is current.
  const [chainActive, setChainActive] = useState(false);
  const chainActiveRef = useRef(false);
  const queuedChainTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Single helper so chainActive state and chainActiveRef can never drift.
  const setChain = (active: boolean) => {
    chainActiveRef.current = active;
    setChainActive(active);
  };

  // Clear any queued chain transition if the component unmounts (route
  // change, tab close). Without this, a setTimeout queued during the 1s
  // settle window could fire on an unmounted component and trigger React
  // setState warnings.
  useEffect(() => {
    return () => {
      if (queuedChainTimeoutRef.current !== null) {
        clearTimeout(queuedChainTimeoutRef.current);
        queuedChainTimeoutRef.current = null;
      }
    };
  }, []);
  const [selectedManuscript, setSelectedManuscript] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [dialogTab, setDialogTab] = useState<'manuscript' | 'analysis'>('manuscript');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [manuscriptToDelete, setManuscriptToDelete] = useState<any>(null);
  const [characterDialogOpen, setCharacterDialogOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchManuscripts();
  }, [userId]);

  // Open analysis dialog when Dashboard requests it
  useEffect(() => {
    if (openAnalysisForManuscriptId && manuscripts.length > 0) {
      const ms = manuscripts.find(m => m.id === openAnalysisForManuscriptId);
      if (ms) {
        handleViewAnalysis(ms, 'analysis');
      }
    }
  }, [openAnalysisForManuscriptId, manuscripts.length]);

  // Controlled polling: refresh when analysis is running OR document is still processing
  useEffect(() => {
    // Poll if any manuscript is mid-analysis (1-99) and recently touched —
    // independent of analyzingManuscriptId, which is null after a refresh.
    // The recency gate prevents polling on long-stuck rows from a crashed
    // prior session; the staleness threshold matches the cleanup above.
    const STALE_MS = 5 * 60 * 1000;
    const now = Date.now();
    const hasActiveAnalysis = manuscripts.some(m => {
      if (m.analysis_progress === null || m.analysis_progress <= 0 || m.analysis_progress >= 100) return false;
      const lastTouched = m.updated_at ? new Date(m.updated_at).getTime() : 0;
      return now - lastTouched <= STALE_MS;
    });
    
    // Also poll if any manuscript is still being processed (text extraction)
    const hasProcessingManuscript = manuscripts.some(
      m => m.content?.includes("Processing document") || 
           m.content?.includes("Extracting text") ||
           m.content?.includes("Downloading document") ||
           (m.processing_progress !== null && m.processing_progress > 0 && m.processing_progress < 100)
    );
    
    // Clear analyzingManuscriptId and ref if that manuscript's analysis is complete or failed
    if (analyzingManuscriptId) {
      const analyzingMs = manuscripts.find(m => m.id === analyzingManuscriptId);
      if (analyzingMs) {
        if (analyzingMs.analysis_progress === 100) {
          console.log('✅ Analysis complete, clearing blocking');
          setAnalyzingManuscriptId(null);
          isAnalyzingRef.current = false;
          if (chainActiveRef.current) {
            const next = triggerChainNext(analyzingMs.chapter_number ?? 0, manuscripts);
            if (next) {
              sonnerToast.info(
                `Auto-analyzing Ch ${next.chapter_number ?? '?'}${next.title ? ` - ${next.title}` : ''}…`,
                { duration: 3000 }
              );
            } else {
              sonnerToast.success('No more upcoming chapters to analyze.', { duration: 5000 });
            }
          }
        } else if (analyzingMs.analysis_progress === -1) {
          // Failure path here is mostly defensive — handleAnalyze's own error
          // handler clears analyzingManuscriptId before the next poll runs,
          // so this block usually never fires for a chained failure. Kept
          // as a fallback for failures that bypass the invoke result path
          // (e.g., progress=-1 written by some external process).
          console.log('❌ Analysis failed, clearing blocking');
          setAnalyzingManuscriptId(null);
          isAnalyzingRef.current = false;
          if (chainActiveRef.current) {
            const next = triggerChainNext(analyzingMs.chapter_number ?? 0, manuscripts);
            if (next) {
              sonnerToast.warning(
                `Ch ${analyzingMs.chapter_number ?? '?'} failed; continuing to Ch ${next.chapter_number ?? '?'}…`,
                { duration: 4000 }
              );
            }
          }
        }
      }
    }
    
    if (!hasActiveAnalysis && !analyzingManuscriptId && !hasProcessingManuscript) return;
    
    console.log('📊 Active analysis/processing detected, polling for updates...');
    const intervalId = setInterval(() => {
      fetchManuscripts();
    }, 3000);
    
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analyzingManuscriptId, manuscripts.map(m => `${m.id}:${m.analysis_progress}:${m.processing_progress}:${m.content?.substring(0,20)}`).join(',')]);

  const fetchManuscripts = async () => {
    const { data, error } = await supabase
      .from("manuscripts")
      .select("*")
      .eq("user_id", userId)
      .eq("project_id", projectId)
      .order("chapter_number", { ascending: true });

    if (error) {
      toast({
        title: "Error fetching manuscripts",
        description: error.message,
        variant: "destructive",
      });
    } else {
      // Clean up stale analysis_progress: a row is stuck if its progress is
      // mid-flight (1-99) AND its updated_at hasn't moved in 5+ minutes.
      // Previously this was gated on !isAnalyzingRef.current, which
      // resets to false on every component remount (page refresh,
      // navigate-away-and-back). That caused the cleanup to wipe genuinely
      // in-flight rows whose analysis was running in the background, which
      // is what produced "card shows Analyze with AI but character data is
      // already populated" after a refresh during analysis. The 5-min
      // staleness window matches the threshold used in
      // ManuscriptCard.tsx:41-45.
      //
      // Critical for this to work: every progress UPDATE in client.ts must
      // also bump updated_at, since manuscripts has no UPDATE trigger.
      const STALE_MS = 5 * 60 * 1000;
      const now = Date.now();
      const cleaned = (data || []).map(m => {
        if (
          m.analysis_progress !== null &&
          m.analysis_progress > 0 &&
          m.analysis_progress < 100
        ) {
          const lastTouched = m.updated_at ? new Date(m.updated_at).getTime() : 0;
          const isStale = now - lastTouched > STALE_MS;
          if (isStale) {
            // Genuinely stuck — wipe to 0 so the user can re-trigger.
            // Bump updated_at so the wiped row doesn't immediately re-qualify
            // as stale on the next fetch (idempotency).
            supabase.from("manuscripts")
              .update({ analysis_progress: 0, updated_at: new Date().toISOString() } as any)
              .eq("id", m.id);
            return { ...m, analysis_progress: 0, updated_at: new Date().toISOString() };
          }
        }
        return m;
      });
      setManuscripts(cleaned);
      // Keep analysis dialog in sync with latest data
      if (showAnalysis && selectedManuscript) {
        const updated = cleaned.find((m) => m.id === selectedManuscript.id);
        if (updated) setSelectedManuscript(updated);
      }
      // Re-arm the analyzing indicator from DB state. After a page refresh,
      // analyzingManuscriptId resets to null but the proxy shim's writes may
      // still be landing on an in-flight chapter. Without this, the polling
      // completion detector (gated on analyzingManuscriptId) never fires, the
      // 100/-1 transition is missed, and the user sees no indicator update.
      // Only re-arm when the in-flight row has been touched recently —
      // otherwise we'd light up the indicator for a long-stuck row that the
      // staleness wipe above is about to clear.
      if (!analyzingManuscriptId) {
        const inflight = cleaned.find(m =>
          m.analysis_progress !== null &&
          m.analysis_progress > 0 &&
          m.analysis_progress < 100 &&
          m.updated_at &&
          (now - new Date(m.updated_at).getTime() <= STALE_MS)
        );
        if (inflight) {
          isAnalyzingRef.current = true;
          setAnalyzingManuscriptId(inflight.id);
          // Notify Dashboard's persistent indicator so the bottom-right badge
          // re-arms immediately rather than waiting for the next user click.
          onAnalysisStart?.(inflight.chapter_number, inflight.id);
        }
      }
    }
    setIsLoadingManuscripts(false);
  };

  // Find the next un-analyzed chapter strictly above the just-finished one
  // (ascending chapter_number). Skips chapters whose content is still being
  // extracted. Returns null when nothing higher remains — the chain naturally
  // ends. We deliberately don't fall back to lower-numbered un-analyzed
  // chapters; the user can manually trigger those if they want.
  const findNextChapterToAnalyze = (justFinishedChapterNum: number, msList: any[]): any | null => {
    const candidates = msList
      .filter(m =>
        (m.analysis_progress ?? 0) === 0 &&
        (m.processing_progress === null || m.processing_progress === undefined || m.processing_progress >= 100) &&
        !m.content?.includes('Processing document') &&
        !m.content?.includes('Extracting text') &&
        !m.content?.includes('Downloading document')
      )
      .sort((a, b) => (a.chapter_number ?? 0) - (b.chapter_number ?? 0));
    return candidates.find(m => (m.chapter_number ?? 0) > justFinishedChapterNum) || null;
  };

  // Queue the next chapter in the chain. Idempotent: if a chain transition
  // is already queued, this is a no-op (prevents double-trigger when both
  // the polling effect AND handleAnalyze's error path try to chain on the
  // same failure). Caller is responsible for the user-facing toast since
  // the wording differs between success ("Auto-analyzing…") and failure
  // ("Ch X failed; continuing…").
  const triggerChainNext = (justFinishedChapNum: number, msList: any[]): any | null => {
    // Diagnostic snapshot of chain state at trigger time. If the chain
    // silently dies, this line tells us exactly which gate rejected.
    const unanalyzedCount = msList.filter(m => (m.analysis_progress ?? 0) === 0).length;
    console.log(
      `[chain] triggerChainNext: chainActive=${chainActiveRef.current} queued=${queuedChainTimeoutRef.current !== null} justFinishedChap=${justFinishedChapNum} totalMs=${msList.length} unanalyzedCount=${unanalyzedCount}`
    );
    // Per-chapter state dump so we can see whether "not analyzed" cards
    // are at progress=null/0 (eligible for chain), progress=-1 (failed,
    // currently skipped), progress=100 with no results (broken complete),
    // or some other state. Only logged when the chain has nothing
    // eligible — keeps the noise down on healthy runs.
    if (unanalyzedCount === 0) {
      console.log(
        '[chain] manuscripts state dump:',
        msList
          .slice()
          .sort((a, b) => (a.chapter_number ?? 0) - (b.chapter_number ?? 0))
          .map(m => ({
            ch: m.chapter_number,
            progress: m.analysis_progress,
            hasResults: !!(m.analysis_results && Object.keys(m.analysis_results || {}).length > 0),
            updated_at: m.updated_at,
          }))
      );
    }
    if (!chainActiveRef.current) {
      console.log('[chain] SKIP: chainActiveRef is false');
      return null;
    }
    if (queuedChainTimeoutRef.current !== null) {
      console.log('[chain] SKIP: queuedChainTimeoutRef already set');
      return null;
    }
    const next = findNextChapterToAnalyze(justFinishedChapNum, msList);
    if (!next) {
      console.log(`[chain] no eligible next chapter > ${justFinishedChapNum}; ending chain`);
      setChain(false);
      return null;
    }
    console.log(`[chain] queuing handleAnalyze for Ch ${next.chapter_number} (${next.id}) in 10s`);
    // 10-second pause between chained analyses. Two reasons:
    //
    //   1. Anthropic rate-limit windows: OTPM (output tokens per minute,
    //      8000 on Tier 1) and ITPM (input, 30000) are evaluated on a
    //      rolling per-minute window. Back-to-back analyses with no gap
    //      can trip a 429 even though each call individually stays under
    //      the per-request cap. The pause lets the windows drain.
    //
    //   2. DB write tail: the just-finished analysis's final progress=100
    //      write and any per-character writes still settling have time
    //      to commit before the next chapter starts pulling state.
    //
    // 10s is a generous-but-not-painful default. For a 10-chapter chain,
    // adds 90s of total wall-clock — negligible vs the 5-10 min per
    // chapter generation time.
    queuedChainTimeoutRef.current = setTimeout(() => {
      queuedChainTimeoutRef.current = null;
      console.log(`[chain] setTimeout fired for Ch ${next.chapter_number}; chainActive=${chainActiveRef.current}`);
      if (!chainActiveRef.current) return;
      handleAnalyze(next.id, true);
    }, 10000);
    return next;
  };

  const handleStopChain = () => {
    setChain(false);
    // Cancel any pending chain transition that was waiting for the 1s
    // settle delay. Without this, a setTimeout queued before the user
    // clicked Stop would still fire its callback — and although the
    // callback now also checks chainActiveRef.current, cancelling
    // outright is cleaner.
    if (queuedChainTimeoutRef.current !== null) {
      clearTimeout(queuedChainTimeoutRef.current);
      queuedChainTimeoutRef.current = null;
    }
    sonnerToast.info('Auto-analysis stopped. The current chapter will still finish.', {
      duration: 4000,
    });
  };

  // _fromChain: true when this call is a chain continuation from the polling
  // effect. Chain calls must NOT re-arm chainActive — if a stale setTimeout
  // races with a Stop click and slips past the ref check, an unconditional
  // re-arm would reactivate the chain against the user's intent. Manual
  // clicks (default _fromChain=false) arm the chain.
  const handleAnalyze = async (manuscriptId: string, _fromChain = false) => {
    // SYNCHRONOUS BLOCK: Check ref immediately before anything else
    if (isAnalyzingRef.current) {
      console.log('🚫 BLOCKED: Analysis already in progress');
      sonnerToast.info("An analysis is already in progress for another chapter. Please wait.", {
        duration: 4000,
      });
      return;
    }

    if (!_fromChain) {
      // Manual click — arm the chain so subsequent chapters auto-trigger.
      setChain(true);
    }

    // Set ref IMMEDIATELY (synchronous) to block any subsequent clicks
    isAnalyzingRef.current = true;
    console.log('✅ Starting analysis, blocking enabled');
    
    const current = manuscripts.find((m) => m.id === manuscriptId) || null;
    
    setAnalyzingManuscriptId(manuscriptId);
    if (current) {
      const resetCurrent = { ...current, analysis_progress: 0, reader_reactions: [], analysis_results: null };
      setSelectedManuscript(resetCurrent);
      setManuscripts(prev => prev.map(m => m.id === manuscriptId ? resetCurrent : m));
      setDialogTab('analysis');
      setShowAnalysis(true);
      onAnalysisDialogOpen?.();
      onAnalysisStart?.(current.chapter_number, manuscriptId);
    }

    try {
      // Use AI-powered analyzer with direct execution
      const { error } = await supabase.functions.invoke("ai-analyze-manuscript", {
        body: { manuscriptId, userId, executeImmediately: true },
      });

      if (error) {
        console.error("Analysis error:", error);
        toast({
          title: "Analysis failed",
          description: error.message || "Could not analyze manuscript",
          variant: "destructive",
        });
        setAnalyzingManuscriptId(null);
        isAnalyzingRef.current = false; // Clear blocking on error
        // Continue auto-chain past this failure. The polling effect's
        // failure-chain block can't fire here because we just cleared
        // analyzingManuscriptId — the next poll's `if (analyzingManuscriptId)`
        // guard skips. So the chain has to continue from this synchronous
        // path, otherwise a single bad chapter kills the whole chain.
        if (chainActiveRef.current) {
          const failedMs = manuscripts.find(m => m.id === manuscriptId);
          const failedChapNum = failedMs?.chapter_number ?? 0;
          const next = triggerChainNext(failedChapNum, manuscripts);
          if (next) {
            sonnerToast.warning(
              `Ch ${failedChapNum} failed; continuing to Ch ${next.chapter_number ?? '?'}…`,
              { duration: 4000 }
            );
          }
        }
      } else {
        // Toast removed - persistent indicator handles this now
        
        // Refresh to see progress - keep analyzingManuscriptId set until DB shows progress
        setTimeout(() => {
          fetchManuscripts();
        }, 2000);
      }
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast({
        title: "Analysis failed",
        description: error.message || "Unexpected error",
        variant: "destructive",
      });
      setAnalyzingManuscriptId(null);
      isAnalyzingRef.current = false; // Clear blocking on error
      // Continue chain past this failure (same reason as the error branch
      // above — polling's failure-chain block won't fire).
      if (chainActiveRef.current) {
        const failedMs = manuscripts.find(m => m.id === manuscriptId);
        const failedChapNum = failedMs?.chapter_number ?? 0;
        const next = triggerChainNext(failedChapNum, manuscripts);
        if (next) {
          sonnerToast.warning(
            `Ch ${failedChapNum} failed; continuing to Ch ${next.chapter_number ?? '?'}…`,
            { duration: 4000 }
          );
        }
      }
    }
  };

  const handleViewAnalysis = (manuscript, tab: 'manuscript' | 'analysis' = 'analysis') => {
    setSelectedManuscript(manuscript);
    setDialogTab(tab);
    setShowAnalysis(true);
  };

  const handleDeleteClick = (manuscript: any) => {
    setManuscriptToDelete(manuscript);
    setDeleteDialogOpen(true);
  };

  const handleCharacterClick = async (characterName: string) => {
    // Find character by name. Exclude soft-merged sources — without this filter,
    // a name shared between an active character and its merged duplicate makes
    // .maybeSingle() throw "multiple rows" and the click silently fails.
    let charQuery = supabase
      .from("characters")
      .select("*")
      .eq("user_id", userId)
      .ilike("name", characterName)
      .is("merged_into", null);
    if (projectId) {
      charQuery = charQuery.eq("project_id", projectId);
    }
    const { data: char } = await charQuery.maybeSingle();

    if (char) {
      // Build timeline instances from character_timeline_entries (the primary per-chapter data source)
      const [timeline, traits, scales, mottos, lex] = await Promise.all([
        supabase.from("character_timeline_entries").select("manuscript_id").eq("character_id", char.id),
        supabase.from("character_traits").select("manuscript_id").eq("character_id", char.id),
        supabase.from("character_voice_scales").select("manuscript_id").eq("character_id", char.id),
        supabase.from("character_mottos").select("manuscript_id").eq("character_id", char.id),
        supabase.from("character_lexicon").select("manuscript_id").eq("character_id", char.id),
      ]);

      const manuscriptIds = [
        ...new Set(
          [
            ...(timeline.data || []),
            ...(traits.data || []),
            ...(scales.data || []),
            ...(mottos.data || []),
            ...(lex.data || []),
          ]
            .map((a: any) => a?.manuscript_id)
            .filter(Boolean)
        ),
      ];

      if (manuscriptIds.length > 0) {
        const { data: manuscripts } = await supabase
          .from("manuscripts")
          .select("id, chapter_number, chapter_title, title")
          .in("id", manuscriptIds)
          .order("chapter_number", { ascending: true });

        const timelineInstances = (manuscripts || []).map(ms => ({
          ...char,
          manuscript: ms,
        }));

        setSelectedCharacter({ ...char, timelineInstances });
      } else {
        setSelectedCharacter({ ...char, timelineInstances: [char] });
      }

      setCharacterDialogOpen(true);
    } else {
      toast({
        title: "Character not found",
        description: `Could not find profile for "${characterName}"`,
        variant: "destructive",
      });
    }
  };

  const handleDeleteConfirm = async (deleteAllData: boolean) => {
    if (!manuscriptToDelete) return;

    const mid = manuscriptToDelete.id;
    const chNum = manuscriptToDelete.chapter_number || 0;

    try {
      // Every per-chapter table has a FK to manuscripts(id) with default
      // RESTRICT semantics, so the manuscript delete fails unless those rows
      // are either removed or detached first. character_timeline_entries and
      // analysis_queue are NOT NULL FKs — those silent blockers made delete
      // appear to do nothing before the Toaster was mounted to surface the
      // error. character_verbal_tics has ON DELETE CASCADE but we delete it
      // explicitly for clarity.
      //
      // Per-chapter / chapter-specific rows are always wiped (they have no
      // meaning without their chapter). Foundation tables (voice_scales,
      // style_rules, conflict_profile) are character-global one-row-per-char
      // — on "Keep Data" we just NULL their manuscript_id so the character's
      // voice/style/conflict foundation survives the chapter deletion. On
      // "Delete All Data" we delete those rows too.
      const perChapterDeletes = [
        supabase.from("character_timeline_entries").delete().eq("manuscript_id", mid),
        supabase.from("character_traits").delete().eq("manuscript_id", mid),
        supabase.from("character_mottos").delete().eq("manuscript_id", mid),
        supabase.from("character_lexicon").delete().eq("manuscript_id", mid),
        supabase.from("character_audience_mods").delete().eq("manuscript_id", mid),
        supabase.from("character_emotion_map").delete().eq("manuscript_id", mid),
        supabase.from("character_voice_feedback").delete().eq("manuscript_id", mid),
        supabase.from("character_verbal_tics").delete().eq("manuscript_id", mid),
        supabase.from("analysis_queue").delete().eq("manuscript_id", mid),
      ];

      const foundationOps = deleteAllData
        ? [
            supabase.from("character_voice_scales").delete().eq("manuscript_id", mid),
            supabase.from("character_style_rules").delete().eq("manuscript_id", mid),
            supabase.from("character_conflict_profile").delete().eq("manuscript_id", mid),
          ]
        : [
            supabase.from("character_voice_scales").update({ manuscript_id: null } as any).eq("manuscript_id", mid),
            supabase.from("character_style_rules").update({ manuscript_id: null } as any).eq("manuscript_id", mid),
            supabase.from("character_conflict_profile").update({ manuscript_id: null } as any).eq("manuscript_id", mid),
          ];

      // Run all per-chapter operations and capture per-table errors. Without
      // this, Promise.all completed "successfully" even when individual
      // .delete() calls returned a {error} (Supabase doesn't throw on
      // those — it returns the error in the response). The manuscript
      // delete then proceeded, the toast said "Chapter deleted", and any
      // failed child rows orphaned silently. Now we surface every failure
      // with its table name so the user knows the cleanup wasn't complete.
      const allOps = [...perChapterDeletes, ...foundationOps];
      const opLabels = [
        'character_timeline_entries', 'character_traits', 'character_mottos',
        'character_lexicon', 'character_audience_mods', 'character_emotion_map',
        'character_voice_feedback', 'character_verbal_tics', 'analysis_queue',
        ...(deleteAllData
          ? ['character_voice_scales', 'character_style_rules', 'character_conflict_profile']
          : ['character_voice_scales (null manuscript_id)', 'character_style_rules (null manuscript_id)', 'character_conflict_profile (null manuscript_id)']),
      ];
      const opResults = await Promise.all(allOps);
      const opFailures = opResults
        .map((r: any, i: number) => ({ table: opLabels[i], error: r?.error }))
        .filter(x => x.error);
      if (opFailures.length > 0) {
        const detail = opFailures.map(f => `${f.table}: ${f.error.message}`).join('; ');
        throw new Error(`Per-chapter cleanup partially failed (${opFailures.length} table${opFailures.length === 1 ? '' : 's'}): ${detail}`);
      }

      // Glossary: drop this chapter from `appears_in` for every term. Then,
      // on Delete All Data, also remove unlocked terms entirely.
      const { data: glossary } = await supabase
        .from("world_glossary")
        .select("id, appears_in, locked")
        .eq("manuscript_id", mid);

      if (glossary && glossary.length > 0) {
        await Promise.all(
          glossary.map((entry: any) => {
            const updatedAppears = (entry.appears_in || []).filter(
              (n: number) => n !== chNum
            );
            if (entry.locked || !deleteAllData) {
              return supabase
                .from("world_glossary")
                .update({ appears_in: updatedAppears })
                .eq("id", entry.id);
            }
            return supabase.from("world_glossary").delete().eq("id", entry.id);
          })
        );
      }

      // "Delete All Data" also wipes characters whose manuscript_id matches.
      // The current writer doesn't set manuscript_id on characters (they're
      // project-scoped by name), so this is a no-op in practice today but
      // future-proofs the path if that scoping ever tightens.
      if (deleteAllData) {
        // Soft-merged sources are owned by the Merged tab — never auto-delete
        // them here even on a "Delete All Data" manuscript wipe. Their data
        // already lives under the merge target.
        const { error: charsErr } = await supabase
          .from("characters")
          .delete()
          .eq("manuscript_id", mid)
          .is("merged_into", null);
        if (charsErr) {
          throw new Error(`character cleanup failed: ${charsErr.message}`);
        }
      }

      const { error } = await supabase.from("manuscripts").delete().eq("id", mid);
      if (error) throw error;

      // If the analysis dialog was open on this manuscript, close it — the
      // row no longer exists and continuing to render its data is misleading.
      if (selectedManuscript?.id === mid) {
        setShowAnalysis(false);
        setSelectedManuscript(null);
      }

      toast({
        title: "Chapter deleted",
        description: deleteAllData
          ? "The chapter and all chapter-scoped data were removed."
          : "The chapter was removed. Character profiles, voice foundation, and glossary preserved.",
      });

      fetchManuscripts();
    } catch (error: any) {
      toast({
        title: "Error deleting chapter",
        description: error.message,
        variant: "destructive",
      });
      // Refresh anyway so the UI reflects whatever partial deletion landed
      // — otherwise the user sees a misleadingly intact manuscript card.
      fetchManuscripts();
    } finally {
      // Close the dialog and clear the staged manuscript on BOTH success and
      // failure paths. Without this, an error left the confirmation dialog
      // stuck open behind the toast (forcing the user to click Cancel) and
      // kept the previous target in state for the next delete attempt.
      setDeleteDialogOpen(false);
      setManuscriptToDelete(null);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold">Your Manuscripts</h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Upload and analyze manuscript character consistency
            </p>
          </div>
        </div>
        {!hasClaudeKey() && (
          <div className="rounded-md border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-200">
            <strong className="font-semibold">Analysis is disabled:</strong>{" "}
            <span className="text-red-300">
              VITE_CLAUDE_API_KEY is not set, so clicking Analyze will fail and consume zero Claude tokens. Add the key to{" "}
              <code className="rounded bg-red-950/60 px-1">.env</code> (local) or your hosting environment variables, then redeploy.
            </span>
          </div>
        )}
        <div className="flex justify-end gap-2">
          {/* Stop Auto-Analysis appears only while the chain is armed. Stops
              future chapters from being auto-triggered; the in-flight chapter
              still completes its DB writes. */}
          {chainActive && (
            <Button
              onClick={handleStopChain}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <X className="h-5 w-5" />
              Stop Auto-Analysis
            </Button>
          )}
          {/* Upload is independent of analysis — it's just a manuscripts INSERT.
              The previous gate here was UX-only (discouraging upload because
              the user couldn't analyze yet); the actual analysis launch still
              has its own concurrent-run guard via isAnalyzingRef.current at
              the top of handleAnalyze, which is what stops a second analysis
              from racing the first on character creation / foundation refetch. */}
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="gap-2"
            size="lg"
          >
            <Plus className="h-5 w-5" />
            Upload Manuscript
          </Button>
        </div>
      </div>

      {/* Banner removed - persistent indicator in Dashboard handles this */}

      {isLoadingManuscripts ? (
        <div className="text-center py-12 bg-card border rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" />
          </div>
          <p className="text-muted-foreground text-lg">Loading manuscript data...</p>
        </div>
      ) : manuscripts.length === 0 ? (
        <div className="text-center py-12 bg-card border rounded-lg">
          <p className="text-muted-foreground text-lg">No manuscripts yet</p>
          <p className="text-muted-foreground text-sm mt-2">Click the Upload Manuscript button above to get started</p>
        </div>
      ) : (
        (() => {
          // Check if ANY analysis is in progress - either from DB or from local state
          const anyAnalyzing = manuscripts.some(
            m => m.analysis_progress !== null && m.analysis_progress > 0 && m.analysis_progress < 100
          ) || analyzingManuscriptId !== null;
          
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manuscripts.map((manuscript) => (
                <ManuscriptCard
                  key={manuscript.id}
                  manuscript={manuscript}
                  onDelete={() => handleDeleteClick(manuscript)}
                  onAnalyze={handleAnalyze}
                  onViewAnalysis={handleViewAnalysis}
                  isAnyAnalyzing={anyAnalyzing}
                />
              ))}
            </div>
          );
        })()
      )}

      <ManuscriptDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) fetchManuscripts();
        }}
        userId={userId}
        projectId={projectId}
        onUploadStart={onUploadStart}
        onUploadComplete={onUploadComplete}
      />

      <DeleteManuscriptDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        manuscriptTitle={manuscriptToDelete?.title || ""}
        chapterNumber={manuscriptToDelete?.chapter_number}
        onConfirm={handleDeleteConfirm}
      />

      <Dialog open={showAnalysis} onOpenChange={(open) => {
        setShowAnalysis(open);
        if (open) {
          onAnalysisDialogOpen?.();
        } else {
          onAnalysisDialogClose?.();
        }
      }}>
        <DialogContent className="max-w-[98vw] md:max-w-[95vw] w-full h-[90vh] md:h-[95vh] flex flex-col p-3 md:p-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {selectedManuscript?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedManuscript?.analysis_progress === 100
                ? "Switch between tabs to view the manuscript or analysis results."
                : "Watch the manuscript tab as each section is analyzed and highlighted."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto">
            {selectedManuscript && (
              <>
                {dialogTab === 'manuscript' ? (
                  <Tabs defaultValue="content" className="w-full h-full">
                    <TabsList className="grid w-full grid-cols-1 mb-4">
                      <TabsTrigger value="content">Manuscript</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="content" className="w-full h-full overflow-y-auto">
                      <HighlightedManuscript
                        content={selectedManuscript.content}
                        analysis={selectedManuscript.analysis_results || {}}
                        analysisProgress={selectedManuscript.analysis_progress || 0}
                        userId={userId}
                        onCharacterClick={handleCharacterClick}
                      />
                    </TabsContent>
                  </Tabs>
                ) : (
                  <Tabs defaultValue={selectedManuscript.analysis_progress === 100 ? "summary" : "progress"} className="w-full h-full flex flex-col">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="progress">
                        Analysis Progress
                        {selectedManuscript.analysis_progress < 100 && (
                          <span className="ml-2 text-xs">
                            ({selectedManuscript.analysis_progress}%)
                          </span>
                        )}
                      </TabsTrigger>
                      <TabsTrigger value="summary">Analysis Summary</TabsTrigger>
                    </TabsList>
                    
                    <div className="flex-1 overflow-y-auto">
                      <TabsContent value="progress" className="w-full mt-0">
                        <AnalysisProgress 
                          progress={selectedManuscript.analysis_progress || 0}
                          manuscriptTitle={selectedManuscript.title}
                          manuscriptId={selectedManuscript.id}
                        />
                      </TabsContent>
                      
                      <TabsContent value="summary" className="w-full mt-0">
                        {selectedManuscript.analysis_results && 
                         selectedManuscript.analysis_progress === 100 ? (
                          <AnalysisResults analysis={selectedManuscript.analysis_results} />
                        ) : (
                          <div className="text-center py-12 text-muted-foreground">
                            {selectedManuscript.analysis_progress > 0
                              ? "Analysis in progress. Full results will appear here when complete."
                              : "Click Analyze to start analyzing this manuscript."}
                          </div>
                        )}
                      </TabsContent>
                    </div>
                  </Tabs>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Character Profile Dialog */}
      {selectedCharacter && (
        <CharacterDialog
          open={characterDialogOpen}
          onOpenChange={setCharacterDialogOpen}
          character={selectedCharacter}
          timelineInstances={selectedCharacter.timelineInstances || []}
          userId={userId}
        />
      )}

    </div>
  );
};

export default ManuscriptsView;
