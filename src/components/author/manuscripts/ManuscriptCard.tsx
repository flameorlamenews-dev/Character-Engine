// @ts-nocheck
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, FileText, Sparkles, Eye, Loader2, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ManuscriptCardProps {
  manuscript: {
    id: string;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    analysis_results: Record<string, unknown> | null;
    processing_progress: number | null;
    analysis_progress: number | null;
  };
  onDelete: (manuscriptOrId: any) => void;
  onAnalyze: (id: string) => void;
  onViewAnalysis: (manuscript: any, tab: 'manuscript' | 'analysis') => void;
  isAnyAnalyzing?: boolean;
}

const ManuscriptCard = ({ 
  manuscript, 
  onDelete, 
  onAnalyze, 
  onViewAnalysis, 
  isAnyAnalyzing = false 
}: ManuscriptCardProps) => {
  const hasAnalysis = manuscript.analysis_results && Object.keys(manuscript.analysis_results).length > 0;
  const isProcessing = manuscript.content.includes("Processing document") || 
                       manuscript.content.includes("Extracting text") ||
                       manuscript.content.includes("Downloading document");
  const processingProgress = manuscript.processing_progress || 0;
  
  // Check if processing is stale (stuck for more than 5 minutes)
  const isStaleProcessing = isProcessing && manuscript.updated_at && 
    (Date.now() - new Date(manuscript.updated_at).getTime() > 5 * 60 * 1000);
  const analysisProgress = manuscript.analysis_progress || 0;
  const isThisAnalyzing = analysisProgress > 0 && analysisProgress < 100;
  const showProcessingProgress = isProcessing && processingProgress > 0 && processingProgress < 100;
  
  // This card should be blocked if ANY analysis is running but THIS card is not the one being analyzed
  const isBlockedByOtherAnalysis = isAnyAnalyzing && !isThisAnalyzing && !isProcessing;
  
  // Button should be completely disabled (no click at all) when this card is processing/analyzing
  const isFullyDisabled = isProcessing || isThisAnalyzing;

  const handleWrapperClick = (e: React.MouseEvent) => {
    if (isBlockedByOtherAnalysis) {
      e.preventDefault();
      e.stopPropagation();
      toast.info("An analysis is already in progress for another chapter. Please wait.", {
        duration: 4000,
      });
    }
  };

  const handleAnalyzeClick = () => {
    if (!isBlockedByOtherAnalysis && !isFullyDisabled) {
      onAnalyze(manuscript.id);
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 flex-1">
            <FileText className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl">{manuscript.title}</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(manuscript.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {manuscript.content.substring(0, 150)}...
          </p>
          
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              {format(new Date(manuscript.created_at), "MMM d, yyyy")}
            </p>
            {isProcessing && isStaleProcessing && (
              <Badge variant="destructive" className="gap-1">
                Processing failed
              </Badge>
            )}
            {isProcessing && !isStaleProcessing && showProcessingProgress && (
              <Badge variant="outline" className="gap-1">
                <Loader2 className="h-3 w-3 animate-spin" />
                Processing ({processingProgress}%)
              </Badge>
            )}
            {isProcessing && !isStaleProcessing && !showProcessingProgress && (
              <Badge variant="outline" className="gap-1">
                <Loader2 className="h-3 w-3 animate-spin" />
                Processing
              </Badge>
            )}
            {isThisAnalyzing && (
              <Badge variant="outline" className="gap-1">
                <Loader2 className="h-3 w-3 animate-spin" />
                Analyzing ({analysisProgress}%)
              </Badge>
            )}
            {!isProcessing && !isThisAnalyzing && hasAnalysis && (
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="h-3 w-3" />
                Analyzed
              </Badge>
            )}
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <div className="flex gap-2">
              {/* Wrapper div to catch clicks when blocked */}
              <div 
                className="flex-1"
                onClick={handleWrapperClick}
              >
                <Button
                  onClick={handleAnalyzeClick}
                  variant="default"
                  size="sm"
                  className={`w-full gap-2 transition-all ${
                    isBlockedByOtherAnalysis 
                      ? 'opacity-40 bg-muted text-muted-foreground border-muted pointer-events-none' 
                      : ''
                  }`}
                  disabled={isFullyDisabled}
                >
                  {isProcessing && isStaleProcessing ? (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Re-upload
                    </>
                  ) : isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : isThisAnalyzing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      {hasAnalysis && analysisProgress === 100 ? "Re-analyze" : "Analyze with AI"}
                    </>
                  )}
                </Button>
              </div>
              {hasAnalysis && !isProcessing && !isThisAnalyzing && (
                <Button
                  onClick={() => onViewAnalysis(manuscript, 'analysis')}
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2"
                >
                  <Eye className="h-4 w-4" />
                  View Analysis
                </Button>
              )}
              {isThisAnalyzing && (
                <Button
                  onClick={() => onViewAnalysis(manuscript, 'analysis')}
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2"
                >
                  <Eye className="h-4 w-4" />
                  View Progress
                </Button>
              )}
            </div>
            
            <Button
              onClick={() => onViewAnalysis(manuscript, 'manuscript')}
              variant="secondary"
              size="sm"
              className="w-full gap-2"
            >
              <BookOpen className="h-4 w-4" />
              View Manuscript
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManuscriptCard;
