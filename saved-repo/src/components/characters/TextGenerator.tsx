import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Copy } from "lucide-react";

interface TextGeneratorProps {
  characterId: string;
  characterName: string;
}

const TextGenerator = ({ characterId, characterName }: TextGeneratorProps) => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [audience, setAudience] = useState("");
  const [emotionalState, setEmotionalState] = useState("");
  const [situation, setSituation] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt required",
        description: "Please enter what you want the character to say or do.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-character-text', {
        body: {
          characterId,
          prompt: prompt.trim(),
          audience: audience || undefined,
          emotionalState: emotionalState || undefined,
          situation: situation || undefined,
        },
      });

      if (error) throw error;

      setGeneratedText(data.text);
      toast({
        title: "Text generated!",
        description: `Generated in ${characterName}'s voice`,
      });
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: "Generation failed",
        description: error instanceof Error ? error.message : 'Could not generate text',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Generate Text as {characterName}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prompt">What should {characterName} say or do? *</Label>
            <Textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={`e.g., "Respond to an insult from a rival" or "React to discovering a betrayal"`}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="audience">Speaking to (optional)</Label>
              <Select value={audience} onValueChange={setAudience}>
                <SelectTrigger>
                  <SelectValue placeholder="Select audience..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No specific audience</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="rival">Rival</SelectItem>
                  <SelectItem value="superior">Superior</SelectItem>
                  <SelectItem value="subordinate">Subordinate</SelectItem>
                  <SelectItem value="stranger">Stranger</SelectItem>
                  <SelectItem value="love_interest">Love Interest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emotion">Emotional State (optional)</Label>
              <Select value={emotionalState} onValueChange={setEmotionalState}>
                <SelectTrigger>
                  <SelectValue placeholder="Select emotion..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Neutral</SelectItem>
                  <SelectItem value="fear">Fear</SelectItem>
                  <SelectItem value="anger">Anger</SelectItem>
                  <SelectItem value="grief">Grief</SelectItem>
                  <SelectItem value="joy">Joy</SelectItem>
                  <SelectItem value="jealousy">Jealousy</SelectItem>
                  <SelectItem value="triumph">Triumph</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="situation">Context (optional)</Label>
              <Textarea
                id="situation"
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                placeholder="Brief scene context..."
                rows={1}
              />
            </div>
          </div>

          <Button 
            onClick={handleGenerate} 
            disabled={loading || !prompt.trim()}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Text
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedText && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Generated Text</CardTitle>
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg whitespace-pre-wrap">
              {generatedText}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TextGenerator;
