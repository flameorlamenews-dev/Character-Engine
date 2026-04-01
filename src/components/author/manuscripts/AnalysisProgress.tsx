// @ts-nocheck
import { useEffect, useState, useRef } from "react";
import { ProgressWithLabel } from "@/components/ui/progress-with-label";
import { Laugh, HeartCrack, Frown, Sparkles, BookOpen, Eye, Users, MessageCircle, BookText, Layers, Target, Zap, Star, ThumbsUp, Heart, AlertTriangle, XCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface AnalysisProgressProps {
  progress: number;
  manuscriptTitle: string;
  manuscriptId: string;
}

interface ReaderReaction {
  icon: string;
  text: string;
  timestamp?: number;
  threshold?: number; // Legacy support
}

const iconMap = {
  BookOpen,
  Eye,
  Sparkles,
  Laugh,
  HeartCrack,
  Frown,
  Users,
  MessageCircle,
  BookText,
  Layers,
  Target,
  Zap,
  Star,
  ThumbsUp,
  Heart,
  AlertTriangle,
  XCircle,
};

const AnalysisProgress = ({ progress, manuscriptTitle, manuscriptId }: AnalysisProgressProps) => {
  const [reactions, setReactions] = useState<ReaderReaction[]>([]);
  const [isStopping, setIsStopping] = useState(false);
  const { toast } = useToast();
  const listRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleStop = async () => {
    setIsStopping(true);
    try {
      await supabase
        .from('manuscripts')
        .update({ 
          analysis_progress: 100,
          reader_reactions: [
            ...(reactions || []),
            { icon: 'XCircle', text: 'Analysis manually stopped by user', timestamp: Date.now() }
          ] as any
        })
        .eq('id', manuscriptId);
      
      toast({
        title: "Analysis stopped",
        description: "The analysis has been stopped. You can retry it anytime.",
      });
    } catch (error: any) {
      toast({
        title: "Error stopping analysis",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsStopping(false);
    }
  };

  useEffect(() => {
    // Fetch stored reactions from the database
    const fetchReactions = async () => {
      const { data } = await supabase
        .from('manuscripts')
        .select('reader_reactions')
        .eq('id', manuscriptId)
        .maybeSingle();

      if (data?.reader_reactions && Array.isArray(data.reader_reactions)) {
        const reactionList = data.reader_reactions as unknown as ReaderReaction[];
        setReactions(reactionList);
        
        // Auto-scroll to bottom after reactions update (skip first two and final)
        setTimeout(() => {
          if (bottomRef.current && reactionList.length > 2 && progress < 100) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
        }, 100);
      }
    };

    fetchReactions();

    // Poll every 3 seconds to catch reactions as they appear
    const pollId = setInterval(() => {
      fetchReactions();
    }, 3000);

    // Subscribe to realtime updates
    const channel = supabase
      .channel(`manuscript-${manuscriptId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'manuscripts',
          filter: `id=eq.${manuscriptId}`,
        },
        (payload) => {
          if (payload.new?.reader_reactions && Array.isArray(payload.new.reader_reactions)) {
            const newReactions = payload.new.reader_reactions as unknown as ReaderReaction[];
            setReactions(newReactions);
            
            // Auto-scroll on realtime update too
            setTimeout(() => {
              if (bottomRef.current && newReactions.length > 2 && progress < 100) {
                bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
              }
            }, 100);
          }
        }
      )
      .subscribe();

    return () => {
      clearInterval(pollId);
      supabase.removeChannel(channel);
    };
  }, [manuscriptId]);

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Analyzing your manuscript...</h3>
            <p className="text-sm text-muted-foreground">
              The AI is reading through "{manuscriptTitle}" and analyzing character voices
            </p>
          </div>
          {progress < 100 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleStop}
              disabled={isStopping}
            >
              <XCircle className="h-4 w-4 mr-2" />
              {isStopping ? "Stopping..." : "Stop Analysis"}
            </Button>
          )}
        </div>
      </div>

      <ProgressWithLabel 
        value={progress} 
        className="w-full"
        label="Analysis Progress"
      />

      {reactions.length > 0 && (
        <div className="space-y-3 pt-4 border-t">
          <h4 className="text-sm font-medium text-muted-foreground">
            {progress === 100 ? "Analysis Highlights" : "Reader Reactions"}
          </h4>
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2" ref={listRef}>
            {reactions.map((reaction, index) => {
              const Icon = iconMap[reaction.icon as keyof typeof iconMap] || Eye;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 bg-muted/50 rounded-md animate-in fade-in slide-in-from-bottom-2 duration-500"
                  style={{ animationDelay: `${Math.min(index * 50, 1000)}ms` }}
                >
                  <Icon className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">{reaction.text}</p>
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>
        </div>
      )}

      {progress === 100 && (
        <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-md border border-primary/20">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="text-sm font-medium">Analysis complete! Check the Summary tab for full results.</p>
        </div>
      )}
    </div>
  );
};

export default AnalysisProgress;
