// @ts-nocheck
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ChapterDataPoint {
  chapter: number;
  formality?: number;
  emotionalIntensity?: number;
}

interface CharacterEvolutionChartProps {
  characterName: string;
  chapterData: Record<number, {
    formality?: number;
    emotionalState?: string;
  }>;
  chapters: Array<{ number: number }>;
}

export const CharacterEvolutionChart = ({ characterName, chapterData, chapters }: CharacterEvolutionChartProps) => {
  // Convert emotional state to intensity scale
  const emotionalIntensity = (state: string | undefined): number => {
    if (!state) return 5;
    const s = state.toLowerCase();
    if (s.includes('intense') || s.includes('extreme') || s.includes('overwhelming')) return 9;
    if (s.includes('strong') || s.includes('heightened')) return 7;
    if (s.includes('moderate') || s.includes('balanced')) return 5;
    if (s.includes('mild') || s.includes('subdued')) return 3;
    if (s.includes('minimal') || s.includes('detached')) return 1;
    return 5;
  };

  const chartData: ChapterDataPoint[] = chapters
    .filter(ch => chapterData[ch.number])
    .map(ch => ({
      chapter: ch.number,
      formality: chapterData[ch.number]?.formality,
      emotionalIntensity: emotionalIntensity(chapterData[ch.number]?.emotionalState),
    }));

  if (chartData.length === 0) {
    return null;
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Character Evolution: {characterName}</span>
        </CardTitle>
        <CardDescription>
          Track how formality and emotional intensity change across chapters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="chapter" 
              label={{ value: 'Chapter', position: 'insideBottom', offset: -5 }}
              className="text-muted-foreground"
            />
            <YAxis 
              domain={[0, 10]}
              label={{ value: 'Scale (0-10)', angle: -90, position: 'insideLeft' }}
              className="text-muted-foreground"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="formality" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              name="Formality"
              dot={{ fill: 'hsl(var(--primary))', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="emotionalIntensity" 
              stroke="hsl(var(--foreground))" 
              strokeWidth={2}
              name="Emotional Intensity"
              dot={{ fill: 'hsl(var(--foreground))', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
