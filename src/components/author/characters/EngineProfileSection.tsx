// @ts-nocheck
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Save, Loader2 } from "lucide-react";
import { fetchAllEngineData, saveAllEngineData, type InfluenceSliders } from "@/services/engine-data";
import { useToast } from "@/hooks/use-toast";
import type { TemperamentGrid, MoralStructure, MoralDriver, GeneralTraits, DesireEntry, ConditionalTrait } from "@/types/personality";
import type { EmotionType } from "@/theme/colors";
import type { Score75 } from "@/types/emotions";

const EMOTIONS: EmotionType[] = ['joy', 'sadness', 'anger', 'fear', 'disgust', 'surprise', 'trust', 'anticipation'];

const TEMPERAMENT_LABELS: Record<keyof TemperamentGrid, string> = {
  patience: "Patience", impulsiveness: "Impulsiveness",
  confrontationalTendency: "Confrontational Tendency", agreeableness: "Agreeableness",
  emotionalContainment: "Emotional Containment", riskAppetite: "Risk Appetite",
  curiosity: "Curiosity", prideSensitivity: "Pride Sensitivity",
  shameSensitivity: "Shame Sensitivity", empathyBaseline: "Empathy Baseline",
  dominanceVsDeference: "Dominance vs Deference", adaptabilityVsRigidity: "Adaptability vs Rigidity",
};

const GENERAL_TRAIT_LABELS: Record<keyof GeneralTraits, string> = {
  stubbornness: "Stubbornness", warmth: "Warmth", skepticism: "Skepticism",
  humorStyle: "Humor Style", competitiveness: "Competitiveness",
  orderliness: "Orderliness", compassion: "Compassion", reservedness: "Reservedness",
};

const MORAL_DRIVERS: MoralDriver[] = ['protection', 'fairness', 'loyalty', 'autonomy', 'order'];

interface EngineProfileSectionProps {
  characterId: string;
}

function SliderRow({ label, value, max = 75, onChange }: { label: string; value: number; max?: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="text-sm w-44 shrink-0">{label}</span>
      <Slider value={[value]} min={0} max={max} step={1} onValueChange={([v]) => onChange(v)} className="flex-1" />
      <span className="text-sm font-mono w-8 text-right tabular-nums text-muted-foreground">{value}</span>
    </div>
  );
}

export default function EngineProfileSection({ characterId }: EngineProfileSectionProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [temperament, setTemperament] = useState<TemperamentGrid | null>(null);
  const [emotionalBaseline, setEmotionalBaseline] = useState<Record<EmotionType, Score75> | null>(null);
  const [moralStructure, setMoralStructure] = useState<MoralStructure | null>(null);
  const [generalTraits, setGeneralTraits] = useState<GeneralTraits | null>(null);
  const [desires, setDesires] = useState<DesireEntry[]>([]);
  const [conditionalTraits, setConditionalTraits] = useState<ConditionalTrait[]>([]);
  const [influenceSliders, setInfluenceSliders] = useState<InfluenceSliders | null>(null);

  useEffect(() => {
    if (!characterId) return;
    setLoading(true);
    fetchAllEngineData(characterId).then(data => {
      setTemperament(data.temperament);
      setEmotionalBaseline(data.emotionalBaseline);
      setMoralStructure(data.moralStructure);
      setGeneralTraits(data.generalTraits);
      setDesires(data.desires);
      setConditionalTraits(data.conditionalTraits);
      setInfluenceSliders(data.influenceSliders);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [characterId]);

  const handleSave = async () => {
    if (!temperament || !emotionalBaseline || !moralStructure || !generalTraits || !influenceSliders) return;
    setSaving(true);
    try {
      await saveAllEngineData(characterId, {
        temperament, emotionalBaseline, moralStructure, generalTraits, desires, conditionalTraits, influenceSliders,
      });
      toast({ title: "Personality profile saved" });
    } catch (err) {
      toast({ title: "Save failed", description: String(err), variant: "destructive" });
    } finally { setSaving(false); }
  };

  if (loading || !temperament || !emotionalBaseline || !moralStructure || !generalTraits || !influenceSliders) {
    return <div className="flex justify-center py-8"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>;
  }

  return (
    <div className="space-y-4">
      {/* Emotional Baseline */}
      <Card>
        <CardHeader className="py-3 px-4"><CardTitle className="text-sm">Emotional Baseline (0-75)</CardTitle></CardHeader>
        <CardContent className="px-4 pb-3">
          {EMOTIONS.map(e => (
            <SliderRow key={e} label={e.charAt(0).toUpperCase() + e.slice(1)} value={emotionalBaseline[e]}
              onChange={v => setEmotionalBaseline(prev => ({ ...prev!, [e]: v as Score75 }))} />
          ))}
        </CardContent>
      </Card>

      {/* Temperament Grid */}
      <Card>
        <CardHeader className="py-3 px-4"><CardTitle className="text-sm">Temperament Grid (0-75)</CardTitle></CardHeader>
        <CardContent className="px-4 pb-3">
          {(Object.keys(TEMPERAMENT_LABELS) as (keyof TemperamentGrid)[]).map(key => (
            <SliderRow key={key} label={TEMPERAMENT_LABELS[key]} value={temperament[key]}
              onChange={v => setTemperament(prev => ({ ...prev!, [key]: v as Score75 }))} />
          ))}
        </CardContent>
      </Card>

      {/* Moral Structure */}
      <Card>
        <CardHeader className="py-3 px-4"><CardTitle className="text-sm">Moral Structure</CardTitle></CardHeader>
        <CardContent className="px-4 pb-3 space-y-3">
          <div className="flex items-center gap-3">
            <Label className="text-sm w-44 shrink-0">Primary Driver</Label>
            <Select value={moralStructure.primaryDriver}
              onValueChange={v => setMoralStructure(prev => ({ ...prev!, primaryDriver: v as MoralDriver }))}>
              <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
              <SelectContent>
                {MORAL_DRIVERS.map(d => <SelectItem key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <SliderRow label="Moral Rigidity" value={moralStructure.moralRigidity}
            onChange={v => setMoralStructure(prev => ({ ...prev!, moralRigidity: v as Score75 }))} />
          <SliderRow label="Guilt Sensitivity" value={moralStructure.guiltSensitivity}
            onChange={v => setMoralStructure(prev => ({ ...prev!, guiltSensitivity: v as Score75 }))} />
          <SliderRow label="Justification Tendency" value={moralStructure.justificationTendency}
            onChange={v => setMoralStructure(prev => ({ ...prev!, justificationTendency: v as Score75 }))} />
        </CardContent>
      </Card>

      {/* General Traits */}
      <Card>
        <CardHeader className="py-3 px-4"><CardTitle className="text-sm">General Traits (0-75)</CardTitle></CardHeader>
        <CardContent className="px-4 pb-3">
          {(Object.keys(GENERAL_TRAIT_LABELS) as (keyof GeneralTraits)[]).map(key => (
            <SliderRow key={key} label={GENERAL_TRAIT_LABELS[key]} value={generalTraits[key]}
              onChange={v => setGeneralTraits(prev => ({ ...prev!, [key]: v as Score75 }))} />
          ))}
        </CardContent>
      </Card>

      {/* Desires */}
      <Card>
        <CardHeader className="py-3 px-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm">Desire Hierarchy</CardTitle>
            <Button variant="outline" size="sm" className="h-7 text-xs"
              onClick={() => setDesires(prev => [...prev, { name: '', score: 37 as Score75, rank: prev.length + 1 }])}>
              <Plus className="h-3 w-3 mr-1" /> Add
            </Button>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-3 space-y-2">
          {desires.length === 0 && <p className="text-xs text-muted-foreground text-center py-2">No desires yet</p>}
          {desires.map((d, i) => (
            <div key={i} className="flex items-center gap-2">
              <Badge variant="secondary" className="shrink-0 text-xs">#{d.rank}</Badge>
              <Input value={d.name} onChange={e => { const u = [...desires]; u[i] = { ...u[i], name: e.target.value }; setDesires(u); }}
                placeholder="Desire name" className="flex-1 h-7 text-xs" />
              <div className="w-24 shrink-0">
                <Slider value={[d.score]} min={0} max={75} step={1}
                  onValueChange={([v]) => { const u = [...desires]; u[i] = { ...u[i], score: v as Score75 }; setDesires(u); }} />
              </div>
              <span className="text-xs tabular-nums w-6 text-right">{d.score}</span>
              <button className="text-muted-foreground hover:text-foreground"
                onClick={() => setDesires(prev => prev.filter((_, j) => j !== i).map((d, j) => ({ ...d, rank: j + 1 })))}>
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Conditional Traits */}
      <Card>
        <CardHeader className="py-3 px-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm">Conditional Traits</CardTitle>
            <Button variant="outline" size="sm" className="h-7 text-xs"
              onClick={() => setConditionalTraits(prev => [...prev, {
                traitLabel: '', triggerCondition: '', targetScope: '',
                intensityScore: 37 as Score75, overrideStrength: 37 as Score75,
              }])}>
              <Plus className="h-3 w-3 mr-1" /> Add
            </Button>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-3 space-y-2">
          {conditionalTraits.length === 0 && <p className="text-xs text-muted-foreground text-center py-2">No conditional traits yet</p>}
          {conditionalTraits.map((t, i) => (
            <div key={i} className="p-2 bg-muted/50 rounded space-y-1.5">
              <div className="flex items-center gap-2">
                <Input value={t.traitLabel} onChange={e => { const u = [...conditionalTraits]; u[i] = { ...u[i], traitLabel: e.target.value }; setConditionalTraits(u); }}
                  placeholder="Trait label" className="flex-1 h-7 text-xs" />
                <button className="text-muted-foreground hover:text-foreground"
                  onClick={() => setConditionalTraits(prev => prev.filter((_, j) => j !== i))}>
                  <X className="h-3 w-3" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <Input value={t.triggerCondition} onChange={e => { const u = [...conditionalTraits]; u[i] = { ...u[i], triggerCondition: e.target.value }; setConditionalTraits(u); }}
                  placeholder="Trigger condition" className="h-7 text-xs" />
                <Input value={t.targetScope} onChange={e => { const u = [...conditionalTraits]; u[i] = { ...u[i], targetScope: e.target.value }; setConditionalTraits(u); }}
                  placeholder="Target scope" className="h-7 text-xs" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <SliderRow label="Intensity" value={t.intensityScore}
                  onChange={v => { const u = [...conditionalTraits]; u[i] = { ...u[i], intensityScore: v as Score75 }; setConditionalTraits(u); }} />
                <SliderRow label="Override" value={t.overrideStrength}
                  onChange={v => { const u = [...conditionalTraits]; u[i] = { ...u[i], overrideStrength: v as Score75 }; setConditionalTraits(u); }} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Influence Sliders */}
      <Card>
        <CardHeader className="py-3 px-4"><CardTitle className="text-sm">Influence Modifiers (0-75)</CardTitle></CardHeader>
        <CardContent className="px-4 pb-3">
          <SliderRow label="Moral Override" value={influenceSliders.moralOverride}
            onChange={v => setInfluenceSliders(prev => ({ ...prev!, moralOverride: v as Score75 }))} />
          <SliderRow label="Impression Susceptibility" value={influenceSliders.impressionSusceptibility}
            onChange={v => setInfluenceSliders(prev => ({ ...prev!, impressionSusceptibility: v as Score75 }))} />
          <SliderRow label="Mask Strength" value={influenceSliders.maskStrength}
            onChange={v => setInfluenceSliders(prev => ({ ...prev!, maskStrength: v as Score75 }))} />
          <SliderRow label="Personality Drift" value={influenceSliders.personalityDrift}
            onChange={v => setInfluenceSliders(prev => ({ ...prev!, personalityDrift: v as Score75 }))} />
        </CardContent>
      </Card>

      {/* Save */}
      <div className="flex justify-end pb-2">
        <Button onClick={handleSave} disabled={saving} size="sm" className="gap-1.5">
          {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
          {saving ? "Saving..." : "Save Personality"}
        </Button>
      </div>
    </div>
  );
}
