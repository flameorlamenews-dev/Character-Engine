// @ts-nocheck
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle } from "lucide-react";

const CharacterComparisonView = ({
  aiData,
  authorData,
  feedback,
}: {
  aiData: any;
  authorData: any;
  feedback: any;
}) => {
  // Canonical voice-scale domain is 0-75 (engine-wide lock). Divergence threshold
  // scales with domain: 3/10 ≈ 22/75 (~29% of range). Keep same proportional feel.
  const DIVERGENCE_THRESHOLD = 22;

  const compareSlider = (field, label, aiValue, authorValue) => {
    const difference = Math.abs(aiValue - authorValue);

    return (
      <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">{label}</span>
          <Badge variant={difference > DIVERGENCE_THRESHOLD ? "destructive" : "default"} className={difference <= DIVERGENCE_THRESHOLD ? "bg-green-600 hover:bg-green-700 text-white" : ""}>
            {difference > DIVERGENCE_THRESHOLD ? "High divergence" : "Within range"}
          </Badge>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-muted-foreground">AI Detected</span>
            <span className="text-xs font-medium">{aiValue}/75</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${(aiValue / 75) * 100}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-muted-foreground">Author Intent</span>
            <span className="text-xs font-medium">{authorValue}/75</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${(authorValue / 75) * 100}%` }} />
          </div>
        </div>
        {difference > DIVERGENCE_THRESHOLD && (
          <p className="text-xs text-muted-foreground">
            Δ {difference} points - This may affect voice consistency
          </p>
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
            {compareSlider("brashness", "Brashness", aiData.voiceScales.brashness ?? 37, authorData.voiceScales.brashness ?? 37)}
            {compareSlider("aggression", "Aggression", aiData.voiceScales.aggression ?? 37, authorData.voiceScales.aggression ?? 37)}
            {compareSlider("sophistication", "Sophistication", aiData.voiceScales.sophistication ?? 37, authorData.voiceScales.sophistication ?? 37)}
            {compareSlider("formality", "Formality", aiData.voiceScales.formality ?? 37, authorData.voiceScales.formality ?? 37)}
            {compareSlider("empathy", "Empathy", aiData.voiceScales.empathy ?? 37, authorData.voiceScales.empathy ?? 37)}
            {compareSlider("introspection", "Introspection", aiData.voiceScales.introspection ?? 37, authorData.voiceScales.introspection ?? 37)}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CharacterComparisonView;
