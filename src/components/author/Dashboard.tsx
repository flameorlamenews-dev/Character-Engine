import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, BookText, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import CharactersView from "./CharactersView";
import ManuscriptsView from "./ManuscriptsView";
import { GlossaryManager } from "./glossary/GlossaryManager";

interface ManuscriptStatus {
  id: string;
  chapter_number: number | null;
  analysis_progress: number | null;
  analysis_results: any;
  updated_at: string | null;
}

interface DashboardProps {
  session: any;
  projectId: string;
  activeView?: string;
  onNavigate?: (view: string) => void;
}

const Dashboard = ({ session, projectId, activeView: activeViewProp, onNavigate }: DashboardProps) => {
  const [internalView, setInternalView] = useState("manuscripts");
  const activeView = activeViewProp || internalView;
  const navigate = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
    } else {
      setInternalView(view);
    }
  };
  const { toast: _toast } = useToast();

  // Status indicator state
  const [uploadingChapter, setUploadingChapter] = useState<number | null>(null);
  const [analyzingChapter, setAnalyzingChapter] = useState<number | null>(null);
  const [analyzingManuscriptId, setAnalyzingManuscriptIdState] = useState<string | null>(null);
  const [completedChapter, setCompletedChapter] = useState<number | null>(null);
  const [completedManuscriptId, setCompletedManuscriptId] = useState<string | null>(null);
  const [analysisDialogOpen, setAnalysisDialogOpen] = useState(false);
  const [manuscriptStatuses, setManuscriptStatuses] = useState<ManuscriptStatus[]>([]);

  // Fetch lightweight manuscript statuses
  const fetchManuscriptStatuses = useCallback(async () => {
    const { data } = await supabase
      .from("manuscripts")
      .select("id, chapter_number, analysis_progress, analysis_results, updated_at")
      .eq("user_id", session.user.id)
      .eq("project_id", projectId)
      .order("chapter_number", { ascending: true });

    if (data) {
      setManuscriptStatuses(data);

      // Check if analyzing manuscript hit 100
      if (analyzingManuscriptId) {
        const ms = data.find((m: any) => m.id === analyzingManuscriptId);
        if (ms && ms.analysis_progress === 100) {
          setCompletedChapter(ms.chapter_number);
          setCompletedManuscriptId(ms.id);
          setAnalyzingChapter(null);
          setAnalyzingManuscriptIdState(null);
        } else if (ms && ms.analysis_progress === -1) {
          setAnalyzingChapter(null);
          setAnalyzingManuscriptIdState(null);
        }
      } else {
        // Re-arm the indicator from DB state if any manuscript is in-flight
        // and recently touched. analyzingManuscriptId is purely component
        // state and resets to null on every page refresh; without this
        // recovery, the bottom-right indicator stays silent for the entire
        // remaining duration of the in-flight chapter, even though backend
        // writes are still landing in the DB. The 5-min recency window
        // matches ManuscriptsView's staleness wipe so we never re-arm a
        // long-stuck row that's about to be cleared.
        const STALE_MS = 5 * 60 * 1000;
        const now = Date.now();
        const inflight = data.find((m: any) =>
          m.analysis_progress !== null &&
          m.analysis_progress > 0 &&
          m.analysis_progress < 100 &&
          m.updated_at &&
          (now - new Date(m.updated_at).getTime() <= STALE_MS)
        );
        if (inflight) {
          setAnalyzingChapter(inflight.chapter_number);
          setAnalyzingManuscriptIdState(inflight.id);
        }
      }
    }
  }, [session.user.id, analyzingManuscriptId, projectId]);

  // Initial fetch
  useEffect(() => {
    fetchManuscriptStatuses();
  }, [fetchManuscriptStatuses]);

  // Poll when analyzing
  useEffect(() => {
    if (!analyzingManuscriptId) return;
    const id = setInterval(fetchManuscriptStatuses, 3000);
    return () => clearInterval(id);
  }, [analyzingManuscriptId, fetchManuscriptStatuses]);

  // Callbacks for ManuscriptsView
  const handleAnalysisStart = useCallback((chapterNum: number, manuscriptId: string) => {
    setAnalyzingChapter(chapterNum);
    setAnalyzingManuscriptIdState(manuscriptId);
    setCompletedChapter(null);
    setCompletedManuscriptId(null);
    // Optimistically reset local status so the first poll doesn't see stale progress=100
    setManuscriptStatuses(prev => prev.map(m =>
      m.id === manuscriptId
        ? { ...m, analysis_progress: 0, analysis_results: null }
        : m
    ));
  }, []);

  const handleUploadStart = useCallback((chapterNum: number) => {
    setUploadingChapter(chapterNum);
  }, []);

  const handleUploadComplete = useCallback(() => {
    setUploadingChapter(null);
    fetchManuscriptStatuses();
  }, [fetchManuscriptStatuses]);

  const handleAnalysisDialogOpen = useCallback(() => {
    setAnalysisDialogOpen(true);
  }, []);

  const handleAnalysisDialogClose = useCallback(() => {
    setAnalysisDialogOpen(false);
  }, []);

  const handleIndicatorClick = () => {
    if (completedChapter !== null || analyzingChapter !== null) {
      navigate("manuscripts");
      setAnalysisDialogOpen(true);
    } else {
      navigate("manuscripts");
    }
    // Clear completed state when user interacts
    if (completedChapter !== null) {
      setCompletedChapter(null);
      setCompletedManuscriptId(null);
    }
  };

  // Determine indicator content
  const unanalyzedChapters = manuscriptStatuses
    .filter(m => m.chapter_number !== null && (m.analysis_progress === null || m.analysis_progress === 0) && !m.analysis_results)
    .map(m => m.chapter_number as number)
    .sort((a, b) => a - b);

  const showUploading = uploadingChapter !== null;
  const showAnalyzing = analyzingChapter !== null && !analysisDialogOpen;
  const showCompleted = completedChapter !== null;
  const showUnanalyzed = unanalyzedChapters.length > 0 && !showUploading && !showAnalyzing && !showCompleted;

  const showIndicator = showUploading || showAnalyzing || showCompleted || showUnanalyzed;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-serif font-semibold">
              Character Voice
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
              <Button
                variant={activeView === "manuscripts" ? "default" : "ghost"}
                onClick={() => navigate("manuscripts")}
                className="gap-2 font-semibold"
                size="lg"
              >
                <BookOpen className="h-5 w-5" />
                <span className="hidden sm:inline">Manuscripts</span>
              </Button>
              <Button
                variant={activeView === "characters" ? "default" : "ghost"}
                onClick={() => navigate("characters")}
                className="gap-2 font-semibold"
                size="lg"
              >
                <Users className="h-5 w-5" />
                <span className="hidden sm:inline">Characters</span>
              </Button>
              <Button
                variant={activeView === "glossary" ? "default" : "ghost"}
                onClick={() => navigate("glossary")}
                className="gap-2 font-semibold"
                size="lg"
              >
                <BookText className="h-5 w-5" />
                <span className="hidden sm:inline">Glossary</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 pb-24">
        <div style={{ display: activeView === "manuscripts" ? "block" : "none" }}>
          <ManuscriptsView
            userId={session.user.id}
            projectId={projectId}
            onAnalysisStart={handleAnalysisStart}
            onUploadStart={handleUploadStart}
            onUploadComplete={handleUploadComplete}
            onAnalysisDialogOpen={handleAnalysisDialogOpen}
            onAnalysisDialogClose={handleAnalysisDialogClose}
            openAnalysisForManuscriptId={analysisDialogOpen ? (completedManuscriptId || analyzingManuscriptId) : null}
          />
        </div>
        <div style={{ display: activeView === "characters" ? "block" : "none" }}>
          <CharactersView userId={session.user.id} projectId={projectId} />
        </div>
        <div style={{ display: activeView === "glossary" ? "block" : "none" }}>
          <GlossaryManager userId={session.user.id} projectId={projectId} />
        </div>
      </main>

      {/* Persistent Status Indicator */}
      {showIndicator && (
        <div
          onClick={handleIndicatorClick}
          className="fixed bottom-6 right-6 z-50 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="bg-card border shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 max-w-xs hover:shadow-xl transition-shadow">
            {showUploading && (
              <>
                <Loader2 className="h-5 w-5 animate-spin text-primary shrink-0" />
                <span className="text-sm font-medium">Uploading Chapter {uploadingChapter} manuscript...</span>
              </>
            )}
            {showAnalyzing && !showUploading && (
              <>
                <Loader2 className="h-5 w-5 animate-spin text-primary shrink-0" />
                <span className="text-sm font-medium">Chapter {analyzingChapter} analysis in progress...</span>
              </>
            )}
            {showCompleted && !showUploading && !showAnalyzing && (
              <>
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium">Chapter {completedChapter} analysis complete</span>
              </>
            )}
            {showUnanalyzed && (
              <>
                <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0" />
                <span className="text-sm font-medium">
                  Chapter {unanalyzedChapters.join(", ")} {unanalyzedChapters.length === 1 ? "manuscript" : "manuscripts"} not analyzed
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
