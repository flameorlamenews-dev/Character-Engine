// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
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
          !analyzingManuscriptId &&
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
    // Find character by name
    let charQuery = supabase
      .from("characters")
      .select("*")
      .eq("user_id", userId)
      .ilike("name", characterName);
    if (projectId) {
      charQuery = charQuery.eq("project_id", projectId);
    }
    const { data: char } = await charQuery.maybeSingle();

    if (char) {
      // Build timeline instances for this character (aggregate appearances across multiple tables)
      const [traits, scales, mottos, lex] = await Promise.all([
        supabase.from("character_traits").select("manuscript_id").eq("character_id", char.id),
        supabase.from("character_voice_scales").select("manuscript_id").eq("character_id", char.id),
        supabase.from("character_mottos").select("manuscript_id").eq("character_id", char.id),
        supabase.from("character_lexicon").select("manuscript_id").eq("character_id", char.id),
      ]);

      const manuscriptIds = [
        ...new Set(
          [
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

    try {
      if (deleteAllData) {
        // Delete all associated data (characters, glossary, etc.)
        const { error: charError } = await supabase
          .from("characters")
          .delete()
          .eq("manuscript_id", manuscriptToDelete.id);

        if (charError) throw charError;

        // Delete character-related data
        await supabase.from("character_traits").delete().eq("manuscript_id", manuscriptToDelete.id);
        await supabase.from("character_voice_scales").delete().eq("manuscript_id", manuscriptToDelete.id);
        await supabase.from("character_lexicon").delete().eq("manuscript_id", manuscriptToDelete.id);
        await supabase.from("character_mottos").delete().eq("manuscript_id", manuscriptToDelete.id);
        await supabase.from("character_emotion_map").delete().eq("manuscript_id", manuscriptToDelete.id);
        await supabase.from("character_audience_mods").delete().eq("manuscript_id", manuscriptToDelete.id);
        await supabase.from("character_conflict_profile").delete().eq("manuscript_id", manuscriptToDelete.id);
        await supabase.from("character_style_rules").delete().eq("manuscript_id", manuscriptToDelete.id);
        await supabase.from("character_voice_feedback").delete().eq("manuscript_id", manuscriptToDelete.id);
        
        // Handle locked glossary entries - only update appears_in, don't delete
        const { data: lockedGlossary } = await supabase
          .from("world_glossary")
          .select("id, appears_in")
          .eq("manuscript_id", manuscriptToDelete.id)
          .eq("locked", true);
        
        if (lockedGlossary) {
          for (const entry of lockedGlossary) {
            const updatedAppears = (entry.appears_in || []).filter(
              (chNum: number) => chNum !== (manuscriptToDelete.chapter_number || 0)
            );
            await supabase
              .from("world_glossary")
              .update({ appears_in: updatedAppears })
              .eq("id", entry.id);
          }
        }
        
        // Delete only unlocked glossary entries
        await supabase.from("world_glossary").delete().eq("manuscript_id", manuscriptToDelete.id).eq("locked", false);
      } else {
        // Even if not deleting data, update appears_in for all glossary entries
        const { data: allGlossary } = await supabase
          .from("world_glossary")
          .select("id, appears_in")
          .eq("manuscript_id", manuscriptToDelete.id);
        
        if (allGlossary) {
          for (const entry of allGlossary) {
            const updatedAppears = (entry.appears_in || []).filter(
              (chNum: number) => chNum !== (manuscriptToDelete.chapter_number || 0)
            );
            await supabase
              .from("world_glossary")
              .update({ appears_in: updatedAppears })
              .eq("id", entry.id);
          }
        }
      }

      // Always delete the manuscript itself
      const { error } = await supabase
        .from("manuscripts")
        .delete()
        .eq("id", manuscriptToDelete.id);

      if (error) throw error;

      toast({
        title: "Chapter deleted",
        description: deleteAllData
          ? "The chapter and all associated data have been removed."
          : "The chapter has been removed. Extracted data preserved.",
      });

      fetchManuscripts();
    } catch (error: any) {
      toast({
        title: "Error deleting chapter",
        description: error.message,
        variant: "destructive",
      });
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
