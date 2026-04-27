// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
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
    // Poll if we have an active analysis (progress between 1-99) or local state says analyzing
    const hasActiveAnalysis = analyzingManuscriptId !== null && manuscripts.some(
      m => m.analysis_progress !== null && m.analysis_progress > 0 && m.analysis_progress < 100
    );
    
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
        } else if (analyzingMs.analysis_progress === -1) {
          // Analysis failed — clear blocking so user can retry
          console.log('❌ Analysis failed, clearing blocking');
          setAnalyzingManuscriptId(null);
          isAnalyzingRef.current = false;
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
      // Clean up stale analysis_progress only if user didn't initiate analysis this session
      const cleaned = (data || []).map(m => {
        if (
          !isAnalyzingRef.current &&
          m.analysis_progress !== null &&
          m.analysis_progress > 0 &&
          m.analysis_progress < 100
        ) {
          // No active analysis this session — reset stuck progress
          supabase.from("manuscripts").update({ analysis_progress: 0 }).eq("id", m.id);
          return { ...m, analysis_progress: 0 };
        }
        return m;
      });
      setManuscripts(cleaned);
      // Keep analysis dialog in sync with latest data
      if (showAnalysis && selectedManuscript) {
        const updated = cleaned.find((m) => m.id === selectedManuscript.id);
        if (updated) setSelectedManuscript(updated);
      }
    }
    setIsLoadingManuscripts(false);
  };

  const handleAnalyze = async (manuscriptId: string) => {
    // SYNCHRONOUS BLOCK: Check ref immediately before anything else
    if (isAnalyzingRef.current) {
      console.log('🚫 BLOCKED: Analysis already in progress');
      sonnerToast.info("An analysis is already in progress for another chapter. Please wait.", {
        duration: 4000,
      });
      return;
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
          {(() => {
            const isAnyAnalyzing = manuscripts.some(
              m => m.analysis_progress !== null && m.analysis_progress > 0 && m.analysis_progress < 100
            ) || analyzingManuscriptId !== null;
            return (
              <div onClick={() => {
                if (isAnyAnalyzing) {
                  sonnerToast.info("Please wait until the current analysis is complete before uploading a new chapter.", { duration: 4000 });
                }
              }}>
                <Button
                  onClick={() => !isAnyAnalyzing && setIsDialogOpen(true)}
                  className={`gap-2 ${isAnyAnalyzing ? 'opacity-40 bg-muted text-muted-foreground pointer-events-none' : ''}`}
                  size="lg"
                >
                  <Plus className="h-5 w-5" />
                  Upload Manuscript
                </Button>
              </div>
            );
          })()}
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
