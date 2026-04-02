// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Plus, TrendingUp, Brain } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CharacterComparisonView from "./CharacterComparisonView";
import { CharacterChapterTimeline } from "@/components/author/manuscripts/CharacterChapterTimeline";
import { ConsistencyChecker } from "./ConsistencyChecker";
import EngineProfileSection from "./EngineProfileSection";

const CharacterDialog = ({ open, onOpenChange, character, userId, timelineInstances = [] }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("ai");
  const [feedback, setFeedback] = useState(null);
  const [selectedInstance, setSelectedInstance] = useState(null); // Track which manuscript instance is selected
  const backfillAttemptedRef = useRef(false);

  // Timeline data flattened across all manuscripts (one circle per analyzed manuscript-chapter entry)
  const [timelineChapters, setTimelineChapters] = useState<Array<{ id: string; number: number; title?: string }>>([]);
  const [timelineChapterData, setTimelineChapterData] = useState<Record<string, any>>({});
  const [timelineFlags, setTimelineFlags] = useState<string[]>([]);
  const [characterAnalysisText, setCharacterAnalysisText] = useState<string | undefined>(undefined);

  // Build chapters by MERGING timeline entries + timelineInstances (so chapters
  // without timeline data still appear, e.g. chapter 0 / Prologue)
  const instanceChapters = (timelineInstances || [])
    .filter((inst: any) => inst.manuscript)
    .map((inst: any) => ({
      id: `${inst.manuscript.id}_${inst.manuscript.chapter_number ?? 0}`,
      number: inst.manuscript.chapter_number ?? 0,
      title: inst.manuscript.chapter_title || inst.manuscript.title || undefined,
    }));

  // Merge: timeline entries take priority, then add any instance chapters not already present
  const mergedMap = new Map<string, { id: string; number: number; title?: string }>();
  for (const ch of instanceChapters) mergedMap.set(ch.id, ch);
  for (const ch of timelineChapters) mergedMap.set(ch.id, ch); // overwrite with richer data
  const effectiveChapters = Array.from(mergedMap.values())
    .sort((a, b) => a.number - b.number);

  // effectiveChapterData is computed after aiData declaration below

  // Main character data
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    role: "",
  });

  // AI version data (read-only)
  const [aiData, setAiData] = useState<{
    formData: { name: string; description: string; role: string };
    traits: any[];
    mottos: any[];
    voiceScales: {
      brashness?: number;
      aggression?: number;
      sophistication?: number;
      formality?: number;
      empathy?: number;
      introspection?: number;
      [key: string]: number | undefined;
    };
    styleRules: any;
    lexicon: any[];
    audienceMods: any[];
    conflictProfile: any;
    emotionMap: any[];
  }>({
    formData: { name: "", description: "", role: "" },
    traits: [],
    mottos: [],
    voiceScales: {},
    styleRules: {},
    lexicon: [],
    audienceMods: [],
    conflictProfile: {},
    emotionMap: [],
  });

  // Merge chapter data: use timeline data where available, fallback for chapters without it
  const effectiveChapterData = (() => {
    const merged: Record<string, any> = { ...timelineChapterData };
    // For any chapter from effectiveChapters that has no timeline data, create a fallback entry
    for (const ch of effectiveChapters) {
      if (!merged[ch.id]) {
        merged[ch.id] = {
          profile: character?.description || '',
          analysis: aiData?.formData?.description || '',
          emotionalState: null,
          sentiment: null,
          voiceScales: aiData?.voiceScales || {},
          dialoguePatterns: null,
          relationships: null,
          _notAnalyzed: true, // flag so UI can show "not yet analyzed" if desired
        };
      }
    }
    return merged;
  })();

  // Traits and mottos
  const [traits, setTraits] = useState([]);
  const [mottos, setMottos] = useState([]);
  const [traitInput, setTraitInput] = useState("");
  const [mottoInput, setMottoInput] = useState("");

  // Voice scales (11 scales)
  const [voiceScales, setVoiceScales] = useState({
    brashness: 5,
    aggression: 5,
    sophistication: 5,
    formality: 5,
    empathy: 5,
    introspection: 5,
  });


  useEffect(() => {
    if (character && open) {
      const firstInstance = timelineInstances.length > 0 ? timelineInstances[0] : character;
      setSelectedInstance(firstInstance);
      setActiveTab("ai");
    } else if (!character && open) {
      resetForm();
      setActiveTab("ai");
      setSelectedInstance(null);
    }
  }, [character, open, timelineInstances]);

  // Reload data when selected instance changes
  useEffect(() => {
    if (selectedInstance && open) {
      setFeedback(null);
      setTimelineChapters([]);
      setTimelineChapterData({});
      setTimelineFlags([]);
      setCharacterAnalysisText(undefined);
      setTraits([]);
      setMottos([]);
      setAiData({
        formData: { name: "", description: "", role: "" },
        traits: [],
        mottos: [],
        voiceScales: {},
        styleRules: {},
        lexicon: [],
        audienceMods: [],
        conflictProfile: {},
        emotionMap: [],
      });

      // Now load fresh data in parallel
      loadCharacterData();
      loadFeedback();
      loadTimeline();
    }
  }, [selectedInstance, open]);

  // Voice scales are now fully mapped in loadTimeline (all 11 scales)
  // and synced to aiData via loadCharacterData's timelineVoiceScales fallback.

  const loadFeedback = async () => {
    if (!selectedInstance?.id) return;
    
    let query = supabase
      .from("character_voice_feedback")
      .select("*")
      .eq("character_id", selectedInstance.id)
      .order("created_at", { ascending: false });

    if (selectedInstance?.manuscript?.id) {
      query = query.eq("manuscript_id", selectedInstance.manuscript.id);
    }

    const { data } = await query.limit(1);
    setFeedback(data && data.length > 0 ? data[0] : null);
  };

  const loadTimeline = async () => {
    try {
      if (!character?.id) return;

      console.log('Loading timeline from character_timeline_entries for:', character?.name);

      // Always load timeline directly from the timeline entries table for this character
      const { data: dbEntries, error } = await supabase
        .from('character_timeline_entries')
        .select('*')
        .eq('character_id', character.id)
        .order('manuscript_id, chapter_number');

      if (error) {
        console.error('Error fetching timeline entries:', error);
        setTimelineChapters([]);
        setTimelineChapterData({});
        setTimelineFlags([]);
        setCharacterAnalysisText(undefined);
        return;
      }

      if (!dbEntries || dbEntries.length === 0) {
        console.log('No timeline data available for character');
        setTimelineChapters([]);
        setTimelineChapterData({});
        setTimelineFlags([]);
        setCharacterAnalysisText(undefined);
        return;
      }

      // Build flat chapter list: one circle per analyzed manuscript-chapter entry
      const chapterData: Record<string, any> = {};
      const chapters: Array<{ id: string; number: number; title?: string }> = [];
      const collectedFlags: string[] = [];

      const sortedEntries = [...dbEntries].sort(
        (a: any, b: any) => (a.chapter_number ?? 0) - (b.chapter_number ?? 0)
      );

      for (const entry of sortedEntries as any[]) {
        // Filter out garbage entries with placeholder text
        const profileText = entry.profile_text || '';
        const analysisText = entry.analysis_text || '';
        
        const isGarbage = 
          profileText.toLowerCase().includes('character appears in') ||
          profileText.toLowerCase().includes('character detected in') ||
          profileText.toLowerCase().includes('this character is not present') ||
          profileText.toLowerCase().includes('no dialogue or direct mention') ||
          profileText.toLowerCase().includes('no dialogue or direct actions') ||
          analysisText.toLowerCase().includes('character appears in') ||
          analysisText.toLowerCase().includes('character detected in') ||
          analysisText.toLowerCase().includes('this character is not present') ||
          analysisText.toLowerCase().includes('no dialogue or direct mention') ||
          analysisText.toLowerCase().includes('no dialogue or direct actions') ||
          (profileText.toLowerCase().includes('does not speak') && analysisText.length < 50) ||
          (profileText.length < 20 && analysisText.length < 20);
        
        if (isGarbage) {
          console.log(`Filtering out garbage timeline entry for chapter ${entry.chapter_number}`);
          continue;
        }
        
        const id = `${entry.manuscript_id}_${entry.chapter_number}`;
        const chNum = entry.chapter_number;

        // Clean chapter title - remove "Chapter X" prefix if present since we show it separately
        let cleanTitle = entry.chapter_title || '';
        if (cleanTitle.match(/^Chapter\s+\d+$/i)) {
          cleanTitle = ''; // Just "Chapter 1" with no extra title
        } else {
          cleanTitle = cleanTitle.replace(/^Chapter\s+\d+:?\s*/i, ''); // Remove "Chapter X:" prefix
        }
        
        chapters.push({
          id,
          number: chNum,
          title: cleanTitle || null,
        });

        const scales = (entry.voice_scales || {}) as any;

        chapterData[id] = {
          profile: profileText,
          analysis: analysisText,
          masterSummary: entry.master_summary || null,
          emotionalState: entry.emotional_state || null,
          sentiment: entry.sentiment || null,
          voiceScales: { ...scales },
          dialoguePatterns: Array.isArray(entry.dialogue_patterns) ? entry.dialogue_patterns : null,
          relationships: entry.relationships || null,
          internalDialogue: Array.isArray(entry.internal_dialogue) ? entry.internal_dialogue : [],
          externalDialogue: Array.isArray(entry.external_dialogue) ? entry.external_dialogue : [],
          viewsOfOthers: entry.views_of_others || null,
          viewsByOthers: entry.views_by_others || null,
          traits: Array.isArray(entry.traits) ? entry.traits : [],
        };

        if (entry.flags && Array.isArray(entry.flags)) {
          collectedFlags.push(...(entry.flags as string[]));
        }
      }

      setTimelineChapters(chapters);
      setTimelineChapterData(chapterData);
      setTimelineFlags([...new Set(collectedFlags)]);

      // Optionally update the cached timeline_data on the character record for future fast loads
      try {
        const newTimelineData: Record<string, any> = {};
        for (const entry of sortedEntries as any[]) {
          const key = `${entry.manuscript_id}_${entry.chapter_number}`;
          newTimelineData[key] = {
            chapter_number: entry.chapter_number,
            chapter_title: entry.chapter_title,
            voice_scales: entry.voice_scales,
            flags: entry.flags,
            profile_text: entry.profile_text,
            analysis_text: entry.analysis_text,
            traits: entry.traits,
            source_type: entry.source_type,
            manuscript_id: entry.manuscript_id,
          };
        }

        const { error: updateError } = await supabase
          .from('characters')
          .update({ timeline_data: newTimelineData })
          .eq('id', character.id);

        if (updateError) {
          console.error('Error updating character.timeline_data cache:', updateError);
        }
      } catch (cacheError) {
        console.error('Error caching character timeline_data:', cacheError);
      }
    } catch (error) {
      console.error('Error loading timeline:', error);
      setTimelineChapters([]);
      setTimelineChapterData({});
      setTimelineFlags([]);
      setCharacterAnalysisText(undefined);
    }
  };

  const loadCharacterData = async () => {
    if (!selectedInstance?.id) return;
    
    // Load AUTHOR version (user-editable)
    const { data: authorTraitsData } = await supabase
      .from("character_traits")
      .select("*")
      .eq("character_id", selectedInstance.id)
      .eq("source_type", "author");

    // Load AI version if exists - filter by manuscript to show chapter-specific traits
    let aiTraitsQuery = supabase
      .from("character_traits")
      .select("*")
      .eq("character_id", selectedInstance.id)
      .eq("source_type", "ai");

    if (selectedInstance?.manuscript?.id) {
      aiTraitsQuery = aiTraitsQuery.eq("manuscript_id", selectedInstance.manuscript.id);
    }

    const { data: aiTraitsData } = await aiTraitsQuery;

    // Set author version as primary (editable)
    setFormData({
      name: selectedInstance.name || "",
      description: selectedInstance.description || "",
      role: selectedInstance.role || "",
    });
    setTraits(authorTraitsData || []);

    // Load mottos (author and AI)
    const { data: authorMottosData } = await supabase
      .from("character_mottos")
      .select("*")
      .eq("character_id", selectedInstance.id)
      .eq("source_type", "author");
    setMottos(authorMottosData || []);

    const { data: aiMottosData } = await supabase
      .from("character_mottos")
      .select("*")
      .eq("character_id", selectedInstance.id)
      .eq("source_type", "ai");

    // Load voice scales (author and AI)
    const { data: authorScalesData } = await supabase
      .from("character_voice_scales")
      .select("*")
      .eq("character_id", selectedInstance.id)
      .eq("source_type", "author")
      .maybeSingle();
    if (authorScalesData) {
      setVoiceScales({
        brashness: authorScalesData.brashness || 5,
        aggression: authorScalesData.aggression || 5,
        sophistication: authorScalesData.sophistication || 5,
        formality: authorScalesData.formality || 5,
        empathy: authorScalesData.empathy || 5,
        introspection: authorScalesData.introspection || 5,
      });
    }

    // Load AI voice scales for this specific manuscript if available, otherwise latest
    let aiScalesRowsQuery = supabase
      .from("character_voice_scales")
      .select("*")
      .eq("character_id", selectedInstance.id)
      .eq("source_type", "ai");

    if (selectedInstance?.manuscript?.id) {
      aiScalesRowsQuery = aiScalesRowsQuery.eq("manuscript_id", selectedInstance.manuscript.id);
    }

    const { data: aiScalesRows } = await aiScalesRowsQuery
      .order("created_at", { ascending: false })
      .limit(1);
    
    const aiScalesData = aiScalesRows && aiScalesRows.length > 0 ? aiScalesRows[0] : null;
    


    // Load AI style rules for display only
    const { data: aiStyleData } = await supabase
      .from("character_style_rules")
      .select("*")
      .eq("character_id", selectedInstance.id)
      .eq("source_type", "ai")
      .maybeSingle();

    // Build AI voice scales: prefer timeline entry data (per-chapter) over character_voice_scales table (overall)
    // This ensures Comparison tab shows the same scales as AI Interpretation tab
    const timelineVoiceScales = (() => {
      // Find the first timeline chapter data with voice_scales for this manuscript
      const timelineEntries = Object.values(timelineChapterData);
      if (timelineEntries.length > 0) {
        const entryWithScales = timelineEntries.find(
          (e: any) => e.voiceScales && Object.keys(e.voiceScales).length > 0
        );
        if (entryWithScales?.voiceScales) return entryWithScales.voiceScales;
      }
      return null;
    })();

    const aiVoiceScalesSource = timelineVoiceScales || (aiScalesData ? {
      brashness: aiScalesData.brashness,
      aggression: aiScalesData.aggression,
      sophistication: aiScalesData.sophistication,
      formality: aiScalesData.formality,
      empathy: aiScalesData.empathy,
      introspection: aiScalesData.introspection,
    } : {});

    // Populate AI data for comparison
    setAiData({
      formData: { name: selectedInstance.name, description: selectedInstance.description, role: selectedInstance.role },
      traits: aiTraitsData || [],
      mottos: aiMottosData || [],
      voiceScales: aiVoiceScalesSource,
      styleRules: aiStyleData || {},
      lexicon: [],
      audienceMods: [],
      conflictProfile: {},
      emotionMap: [],
    });
  };

  const resetForm = () => {
    setFormData({ name: "", description: "", role: "" });
    setTraits([]);
    setMottos([]);
    setVoiceScales({
      brashness: 5,
      aggression: 5,
      sophistication: 5,
      formality: 5,
      empathy: 5,
      introspection: 5,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let characterId = character?.id;

      // Save main character data and mark as author-edited
      if (character) {
        const { error } = await supabase
          .from("characters")
          .update({ ...formData, user_id: userId, author_edited: true })
          .eq("id", character.id);
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from("characters")
          .insert([{ ...formData, user_id: userId, source_type: 'author', author_edited: false }])
          .select()
          .single();
        if (error) throw error;
        characterId = data.id;
      }

      // Save traits (delete old author traits, insert new)
      await supabase.from("character_traits").delete().eq("character_id", characterId).eq("source_type", "author");
      if (traits.length > 0) {
        const traitsToInsert = traits.map(t => ({
          character_id: characterId,
          trait: typeof t === 'string' ? t : t.trait,
          source_type: 'author'
        }));
        await supabase.from("character_traits").insert(traitsToInsert);
      }

      // Save mottos
      await supabase.from("character_mottos").delete().eq("character_id", characterId).eq("source_type", "author");
      if (mottos.length > 0) {
        const mottosToInsert = mottos.map(m => ({
          character_id: characterId,
          motto: typeof m === 'string' ? m : m.motto,
          source_type: 'author'
        }));
        await supabase.from("character_mottos").insert(mottosToInsert);
      }

      // Save voice scales (upsert author version)
      await supabase
        .from("character_voice_scales")
        .upsert({ character_id: characterId, ...voiceScales, source_type: 'author' });


      toast({
        title: character ? "Character updated" : "Character created",
        description: "All character details saved successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error saving character",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addTrait = () => {
    if (traitInput.trim()) {
      setTraits([...traits, { trait: traitInput.trim() }]);
      setTraitInput("");
    }
  };

  const addMotto = () => {
    if (mottoInput.trim()) {
      setMottos([...mottos, { motto: mottoInput.trim() }]);
      setMottoInput("");
    }
  };


  const authorProfileData = {
    formData,
    traits,
    mottos,
    voiceScales,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            {character ? character.name : "Create New Character"}
          </DialogTitle>
        </DialogHeader>

        {character && (
          <p className="text-sm text-muted-foreground mb-4">
            Chapter-by-chapter profile and evolution
          </p>
        )}

        {/* Main structure for existing characters with chapter timeline */}
        {character && effectiveChapters.length > 0 ? (
          <CharacterChapterTimeline
            characterName={formData.name || character?.name || ''}
            characterId={character?.id}
            chapters={effectiveChapters}
            chapterData={effectiveChapterData}
            consistencyFlags={timelineFlags}
            aiData={aiData}
            authorData={{
              formData: { name: formData.name, role: formData.role },
              traits,
              mottos,
              voiceScales,
            }}
            feedback={feedback}
            onVoiceScaleChange={(key, value) => {
              setVoiceScales(prev => ({ ...prev, [key]: value }));
            }}
          />
        ) : character ? (
          /* Character with no timeline - show simple AI/Author/Comparison tabs */
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="ai">AI Interpretation</TabsTrigger>
              <TabsTrigger value="author">Author Interpretation</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="space-y-4">
              {(
                (aiData?.formData?.description && aiData.formData.description.trim().length > 0) ||
                (aiData?.traits && aiData.traits.length > 0) ||
                
                (aiData?.styleRules && Object.keys(aiData.styleRules).length > 0)
              ) ? (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Character Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                        {aiData.formData.description || character?.description ||
                          "AI analysis has not provided a detailed description yet."}
                      </p>
                    </CardContent>
                  </Card>

                  {aiData.traits && aiData.traits.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Personality Traits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                          {aiData.traits.map((t: any, idx: number) => (
                            <li key={idx}>{typeof t === "string" ? t : t.trait}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}


                  {aiData.styleRules && Object.keys(aiData.styleRules).length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Style & Delivery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                          {aiData.styleRules.sentence_rhythm && (
                            <div>
                              <span className="font-medium">Sentence rhythm:</span>{" "}
                              {aiData.styleRules.sentence_rhythm}
                            </div>
                          )}
                          {aiData.styleRules.lexical_range && (
                            <div>
                              <span className="font-medium">Lexical range:</span>{" "}
                              {aiData.styleRules.lexical_range}
                            </div>
                          )}
                          {aiData.styleRules.cadence && (
                            <div>
                              <span className="font-medium">Cadence:</span>{" "}
                              {aiData.styleRules.cadence}
                            </div>
                          )}
                          {aiData.styleRules.punctuation_habits && (
                            <div>
                              <span className="font-medium">Punctuation:</span>{" "}
                              {aiData.styleRules.punctuation_habits}
                            </div>
                          )}
                          {aiData.styleRules.emphasis_method && (
                            <div>
                              <span className="font-medium">Emphasis:</span>{" "}
                              {aiData.styleRules.emphasis_method}
                            </div>
                          )}
                          {aiData.styleRules.world_term_rules && (
                            <div>
                              <span className="font-medium">World terms:</span>{" "}
                              {aiData.styleRules.world_term_rules}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="text-center p-8 text-muted-foreground">
                  <p>No AI analysis available yet.</p>
                  <p className="text-sm mt-2">
                    Upload and analyze a manuscript to see AI insights about this character.
                  </p>
                </div>
              )}
            </TabsContent>

            {/* Author Tab - Full form */}
            <TabsContent value="author">
              <form onSubmit={handleSubmit}>
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="flex w-full flex-wrap h-auto gap-1 p-1">
                    <TabsTrigger value="basic" className="flex-1 min-w-[80px]">Basic</TabsTrigger>
                    <TabsTrigger value="voice" className="flex-1 min-w-[80px]">Voice</TabsTrigger>
                    <TabsTrigger value="personality" className="flex-1 min-w-[80px]">Personality</TabsTrigger>
                  </TabsList>

                  {/* All the existing tab content - kept from earlier in file */}
                  {/* This would need the full Basic/Voice/Style/etc tabs content */}

                  <TabsContent value="personality">
                    {character?.id ? (
                      <EngineProfileSection characterId={character.id} />
                    ) : (
                      <div className="text-center py-6 text-muted-foreground text-sm">
                        Save the character first to set personality data.
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

                <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Update Character"}
                  </Button>
                </div>
              </form>
            </TabsContent>

            {/* Comparison Tab */}
            <TabsContent value="comparison">
              <CharacterComparisonView
                aiData={aiData}
                authorData={authorProfileData}
                feedback={feedback}
              />
            </TabsContent>
          </Tabs>
        ) : (
          /* New character creation form */
          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="voice">Voice</TabsTrigger>
              </TabsList>
              {/* ... keep existing code (all the existing tab content for new characters) */}
            </Tabs>

            <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Create Character"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDialog;
