import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, BookOpen } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CharacterComparisonView = ({ 
  aiData, 
  authorData, 
  feedback, 
  timelineInconsistencies, 
  timelineChapterData, 
  timelineChapters 
}: {
  aiData: any;
  authorData: any;
  feedback: any;
  timelineInconsistencies?: string;
  timelineChapterData?: Record<number, any>;
  timelineChapters?: Array<{ number: number; title?: string; summary?: string }>;
}) => {
  const compareSlider = (field, label, aiValue, authorValue) => {
    const difference = Math.abs(aiValue - authorValue);
    const divergence = (difference / 10) * 100;

    return (
      <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">{label}</span>
          <Badge variant={difference > 3 ? "destructive" : "default"} className={difference <= 3 ? "bg-green-600 hover:bg-green-700 text-white" : ""}>
            {difference > 3 ? "High divergence" : "Within range"}
          </Badge>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-muted-foreground">AI Detected</span>
            <span className="text-xs font-medium">{aiValue}/10</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${aiValue * 10}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-muted-foreground">Author Intent</span>
            <span className="text-xs font-medium">{authorValue}/10</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${authorValue * 10}%` }} />
          </div>
        </div>
        {difference > 3 && (
          <p className="text-xs text-muted-foreground">
            Δ {difference} points - This may affect voice consistency
          </p>
        )}
      </div>
    );
  };

  const compareTextArray = (label, aiItems, authorItems) => {
    const aiSet = new Set(aiItems || []);
    const authorSet = new Set(authorItems || []);
    const onlyAI = [...aiSet].filter(x => !authorSet.has(x));
    const onlyAuthor = [...authorSet].filter(x => !aiSet.has(x));
    const shared = [...aiSet].filter(x => authorSet.has(x));

    return (
      <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-medium text-sm">{label}</h4>
        
        {shared.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">Shared</p>
            <div className="flex flex-wrap gap-1">
              {shared.map((item, i) => (
                <Badge key={i} variant="secondary">{String(item)}</Badge>
              ))}
            </div>
          </div>
        )}

        {onlyAI.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">AI Only</p>
            <div className="flex flex-wrap gap-1">
              {onlyAI.map((item, i) => (
                <Badge key={i} variant="outline" className="bg-blue-500/10">{String(item)}</Badge>
              ))}
            </div>
          </div>
        )}

        {onlyAuthor.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">Author Only</p>
            <div className="flex flex-wrap gap-1">
              {onlyAuthor.map((item, i) => (
                <Badge key={i} variant="outline" className="bg-green-500/10">{String(item)}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Manuscript Accuracy to Author Vision */}
      {feedback && feedback.accuracy_score !== undefined && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Voice Consistency Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Manuscript Accuracy to Author Vision</span>
              <span className="text-sm font-bold">{feedback.accuracy_score}%</span>
            </div>
            <Progress value={feedback.accuracy_score} className="h-3" />
          </CardContent>
        </Card>
      )}

      {/* Voice Scales Comparison */}
      {aiData?.voiceScales && authorData?.voiceScales && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Voice Scales Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {compareSlider("brashness", "Brashness", aiData.voiceScales.brashness || 5, authorData.voiceScales.brashness || 5)}
            {compareSlider("aggression", "Aggression", aiData.voiceScales.aggression || 5, authorData.voiceScales.aggression || 5)}
            {compareSlider("sophistication", "Sophistication", aiData.voiceScales.sophistication || 5, authorData.voiceScales.sophistication || 5)}
            {compareSlider("formality", "Formality", aiData.voiceScales.formality || 5, authorData.voiceScales.formality || 5)}
            {compareSlider("empathy", "Empathy", aiData.voiceScales.empathy || 5, authorData.voiceScales.empathy || 5)}
            {compareSlider("introspection", "Introspection", aiData.voiceScales.introspection || 5, authorData.voiceScales.introspection || 5)}
          </CardContent>
        </Card>
      )}


      {/* Mottos Comparison */}
      {(aiData?.mottos?.length > 0 || authorData?.mottos?.length > 0) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Character Mottos</CardTitle>
          </CardHeader>
          <CardContent>
            {compareTextArray(
              "Mottos",
              aiData?.mottos?.map(m => typeof m === 'string' ? m : m.motto) || [],
              authorData?.mottos?.map(m => typeof m === 'string' ? m : m.motto) || []
            )}
          </CardContent>
        </Card>
      )}

      {/* Full Chapter-by-Chapter Voice Consistency Analysis */}
      {timelineInconsistencies && (
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-amber-900 dark:text-amber-100">
              <BookOpen className="h-5 w-5" />
              Detailed Voice Consistency Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                {timelineInconsistencies}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chapter-by-Chapter Details */}
      {timelineChapters && timelineChapters.length > 0 && timelineChapterData && Object.keys(timelineChapterData).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Chapter-by-Chapter Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {timelineChapters.map((chapter) => {
                const chapterData = timelineChapterData[chapter.number];
                if (!chapterData) return null;
                
                return (
                  <AccordionItem key={chapter.number} value={`chapter-${chapter.number}`}>
                    <AccordionTrigger className="text-sm">
                      Chapter {chapter.number}{chapter.title && `: ${chapter.title}`}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {chapterData.profile && (
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <p className="text-sm whitespace-pre-wrap">{chapterData.profile}</p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 gap-3">
                          {chapterData.emotionalState && (
                            <div>
                              <span className="text-xs font-medium text-muted-foreground">Emotional State</span>
                              <Badge variant="secondary" className="mt-1 block w-fit">{chapterData.emotionalState}</Badge>
                            </div>
                          )}
                        </div>

                        {typeof chapterData.formality === 'number' && (
                          <div>
                            <span className="text-xs font-medium text-muted-foreground">Formality</span>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden mt-1">
                              <div className="h-full bg-primary transition-all" style={{ width: `${chapterData.formality * 10}%` }} />
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">{chapterData.formality}/10</div>
                          </div>
                        )}


                        {chapterData.relationships && (
                          <div>
                            <span className="text-xs font-medium text-muted-foreground">Relationships</span>
                            <p className="text-sm text-muted-foreground mt-1">{chapterData.relationships}</p>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CharacterComparisonView;
