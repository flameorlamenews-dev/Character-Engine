// @ts-nocheck
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CharacterCard from "./characters/CharacterCard";
import CharacterDialog from "./characters/CharacterDialog";
import TextGenerator from "./characters/TextGenerator";
import MergeConfirmDialog from "./characters/MergeConfirmDialog";
import { DeleteCharacterDialog } from "./characters/DeleteCharacterDialog";

const CharactersView = ({ userId, projectId }: { userId: string; projectId: string }) => {
  const [characters, setCharacters] = useState<any[] | null>(null);
  const [activeTab, setActiveTab] = useState("active");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);
  const [generatorOpen, setGeneratorOpen] = useState(false);
  const [generatorCharacter, setGeneratorCharacter] = useState<any | null>(null);
  const [mergeMode, setMergeMode] = useState(false);
  const [firstMergeProfile, setFirstMergeProfile] = useState<any | null>(null);
  const [showMergeConfirm, setShowMergeConfirm] = useState(false);
  const [secondMergeProfile, setSecondMergeProfile] = useState<any | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState<any | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchCharacters();
  }, [userId, projectId]);

  const fetchCharacters = async () => {
    // Fetch all UNIQUE characters (including blocked ones)
    const { data: chars, error: charsError } = await supabase
      .from("characters")
      .select("*")
      .eq("user_id", userId)
      .eq("project_id", projectId)
      .order("created_at", { ascending: false });

    if (charsError) {
      toast({
        title: "Error fetching characters",
        description: charsError.message,
        variant: "destructive",
      });
      return;
    }


    const banned = new Set(['voice','key','brief','voice scales','key personality','brief description','notes','voice signature']);
    const filtered = (chars || []).filter((c) => {
      let n = (c.name || '').trim();
      // Strip colon-prefixed parsing artifacts (e.g. ": Praew" or "Character: Praew") but keep the name
      if (n.includes(':')) {
        n = n.split(':').pop()?.trim() || '';
        c.name = n; // fix the name in-place
      }
      if (!n) return false;
      if (banned.has(n.toLowerCase())) return false;
      const lower = n.toLowerCase();
      // Filter out common parsing artifacts
      if (lower.startsWith('here is a comprehensive') || 
          lower.startsWith('character from chapter') || 
          lower.startsWith('chapter ') ||
          lower.endsWith(' voice') ||
          lower.startsWith('analysis') ||
          lower.startsWith('comprehensive')) return false;
      return true;
    });

    // Build timelines in BULK to avoid N+1 queries
    const ids = filtered.map((c) => c.id);
    if (ids.length === 0) {
      setCharacters([]);
      return;
    }

    // Fetch timeline entries to get profile_text for rich descriptions
    const { data: timelineEntries } = await supabase
      .from("character_timeline_entries")
      .select("character_id, profile_text, chapter_number")
      .in("character_id", ids)
      .order("chapter_number", { ascending: true });

    // Create a map of character_id to their first profile_text
    const profileTextMap: Record<string, string> = {};
    (timelineEntries || []).forEach((entry) => {
      if (entry.character_id && entry.profile_text && !profileTextMap[entry.character_id]) {
        profileTextMap[entry.character_id] = entry.profile_text;
      }
    });

    const [traitsRes, scalesRes, mottosRes, lexRes, timelineRes] = await Promise.all([
      supabase.from("character_traits").select("character_id, manuscript_id").in("character_id", ids),
      supabase.from("character_voice_scales").select("character_id, manuscript_id").in("character_id", ids),
      supabase.from("character_mottos").select("character_id, manuscript_id").in("character_id", ids),
      supabase.from("character_lexicon").select("character_id, manuscript_id").in("character_id", ids),
      supabase.from("character_timeline_entries").select("character_id, manuscript_id").in("character_id", ids),
    ]);

    const byChar: Record<string, Set<string>> = {};
    const add = (rows?: any[]) => {
      (rows || []).forEach((r) => {
        if (!r?.character_id || !r?.manuscript_id) return;
        if (!byChar[r.character_id]) byChar[r.character_id] = new Set();
        byChar[r.character_id].add(r.manuscript_id);
      });
    };
    add(traitsRes.data);
    add(scalesRes.data);
    add(mottosRes.data);
    add(lexRes.data);
    add(timelineRes.data);

    const allManuscriptIds = Array.from(
      new Set([
        ...Object.values(byChar)
          .flatMap((set) => Array.from(set))
          .filter(Boolean),
        // Also include manuscript_ids from characters themselves
        ...filtered.map((c) => c.manuscript_id).filter(Boolean),
      ])
    );

    let manuscriptsMap: Record<string, any> = {};
    if (allManuscriptIds.length > 0) {
      const { data: manuscripts } = await supabase
        .from("manuscripts")
        .select("id, chapter_number, chapter_title, title")
        .in("id", allManuscriptIds)
        .order("chapter_number", { ascending: true });
      manuscriptsMap = Object.fromEntries((manuscripts || []).map((m: any) => [m.id, m]));
    }

    const enriched = filtered.map((char) => {
      const idsForChar = new Set(byChar[char.id] || []);
      
      // Also include the character's own manuscript_id so it always shows at least one chapter
      if (char.manuscript_id) {
        idsForChar.add(char.manuscript_id);
      }
      
      // Ensure we have manuscript data for all referenced IDs
      const missingIds = Array.from(idsForChar).filter(id => !manuscriptsMap[id]);
      // missingIds will be fetched if needed, but for now we just use what we have
      
      const timelineInstances = Array.from(idsForChar)
        .map((mid) => manuscriptsMap[mid])
        .filter(Boolean)
        .map((ms) => ({ ...char, manuscript: ms, id: char.id }));

      // Use profile_text as description if available, otherwise keep existing description
      const description = profileTextMap[char.id] || char.description;

      return { 
        ...char, 
        description,
        timelineInstances: timelineInstances.length > 0 ? timelineInstances : [char] 
      };
    });

    setCharacters(enriched);
  };

  const handleEdit = (character) => {
    setSelectedCharacter(character);
    setIsDialogOpen(true);
  };

  const handleBlock = async (id) => {
    const { error } = await supabase
      .from("characters")
      .update({ blocked: true })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error blocking character",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Character blocked",
        description: "The character has been moved to Blocked Profiles.",
      });
      fetchCharacters();
    }
  };

  const handleUnblock = async (id) => {
    const { error } = await supabase
      .from("characters")
      .update({ blocked: false })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error unblocking character",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Character unblocked",
        description: "The character will now be recognized during manuscript analysis.",
      });
      fetchCharacters();
    }
  };

  const handleDeletePermanently = (character: any) => {
    setCharacterToDelete(character);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!characterToDelete) return;

    const { error } = await supabase
      .from("characters")
      .delete()
      .eq("id", characterToDelete.id);

    if (error) {
      toast({
        title: "Error deleting character",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Character permanently deleted",
        description: "The character profile has been removed from the system.",
      });
      fetchCharacters();
    }

    setDeleteDialogOpen(false);
    setCharacterToDelete(null);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedCharacter(null);
    fetchCharacters();
  };

  const handleGenerate = (character) => {
    setGeneratorCharacter(character);
    setGeneratorOpen(true);
  };

  const handleMergeClick = (character: any) => {
    if (!mergeMode) {
      // Start merge mode - select first profile
      setMergeMode(true);
      setFirstMergeProfile(character);
    } else if (firstMergeProfile?.id === character.id) {
      // Cancel merge mode if clicking the same profile
      setMergeMode(false);
      setFirstMergeProfile(null);
    } else {
      // Select second profile and show confirmation
      setSecondMergeProfile(character);
      setShowMergeConfirm(true);
    }
  };

  const handleMergeCanceled = () => {
    setMergeMode(false);
    setFirstMergeProfile(null);
    setSecondMergeProfile(null);
    setShowMergeConfirm(false);
  };

  const handleMergeConfirmed = async (keepProfile: any, deleteProfile: any) => {
    try {
      // Merge all data from delete profile into keep profile
      const keepId = keepProfile.id;
      const deleteId = deleteProfile.id;

      // Update all related tables to point to keep profile. Engine tables
      // (temperament_grids, emotional_baselines, etc.) have character_id FKs
      // too — if we skip them, the kept profile loses the merged character's
      // personality data to the Producer/Player view.
      //
      // Foundation tables use UNIQUE(character_id) so we can't blindly UPDATE
      // when the keep-profile already has a row — we DELETE the duplicate
      // instead, preferring the kept profile's existing foundation data.
      const foundationTables = [
        'temperament_grids', 'emotional_baselines', 'moral_structures',
        'general_traits', 'influence_sliders',
      ];
      for (const tbl of foundationTables) {
        // Does the keep profile already have a row?
        const { data: keepRow } = await supabase.from(tbl).select('character_id').eq('character_id', keepId).maybeSingle();
        if (keepRow) {
          // Discard the delete profile's foundation — keeper wins.
          await supabase.from(tbl).delete().eq('character_id', deleteId);
        } else {
          await supabase.from(tbl).update({ character_id: keepId }).eq('character_id', deleteId);
        }
      }

      await Promise.all([
        // Author tables (safe to UPDATE — no UNIQUE on character_id alone)
        supabase.from("character_traits").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_mottos").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_voice_scales").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_lexicon").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_audience_mods").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_emotion_map").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_style_rules").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_conflict_profile").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_voice_feedback").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("character_timeline_entries").update({ character_id: keepId }).eq("character_id", deleteId),
        // Engine per-chapter tables
        supabase.from("desires").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("conditional_traits").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("emotion_drift").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("surges").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("silence_blocks").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("trait_eq_points").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("relationships").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("influence_traits").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("lingering_emotions").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("desire_pressure").update({ character_id: keepId }).eq("character_id", deleteId),
        supabase.from("habit_formation").update({ character_id: keepId }).eq("character_id", deleteId),
      ]);

      // Delete the profile
      const { error: deleteError } = await supabase
        .from("characters")
        .delete()
        .eq("id", deleteId);

      if (deleteError) throw deleteError;

      toast({
        title: "Profiles merged",
        description: `Successfully merged ${deleteProfile.name} into ${keepProfile.name}`,
      });

      // Reset merge state and refresh
      handleMergeCanceled();
      fetchCharacters();
    } catch (error: any) {
      toast({
        title: "Error merging profiles",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const activeCharacters = characters?.filter(c => !c.blocked) || [];
  const blockedCharacters = characters?.filter(c => c.blocked) || [];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-serif font-bold">Your Characters</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Create and manage character voice profiles
          </p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)} className="gap-2" size="lg">
          <Plus className="h-4 w-4" />
          New Character
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="active">
            Active Profiles ({activeCharacters.length})
          </TabsTrigger>
          <TabsTrigger value="blocked">
            Blocked Profiles ({blockedCharacters.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          {characters === null ? (
            <div className="text-center py-12 bg-card border rounded-lg">
              <p className="text-muted-foreground mb-2">Loading characters…</p>
            </div>
          ) : activeCharacters.length === 0 ? (
            <div className="text-center py-12 bg-card border rounded-lg">
              <p className="text-muted-foreground mb-4">No active characters yet</p>
              <Button onClick={() => setIsDialogOpen(true)} variant="outline">
                Create your first character
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCharacters.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onEdit={handleEdit}
                  onDelete={handleBlock}
                  onUnblock={handleUnblock}
                  onGenerate={handleGenerate}
                  onMerge={handleMergeClick}
                  mergeMode={mergeMode}
                  isFirstMergeProfile={firstMergeProfile?.id === character.id}
                  userId={userId}
                  isBlocked={false}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="blocked" className="mt-6">
          <div className="bg-muted/30 border border-muted rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">About Blocked Profiles</h3>
            <p className="text-sm text-muted-foreground">
              Blocked profiles are hidden from your active character list and will not be recreated during manuscript analysis. 
              This prevents the AI from detecting and extracting these character names even if they appear in your text. 
              Click the recycle button to unblock a profile and allow it to be recognized again.
            </p>
          </div>

          {blockedCharacters.length === 0 ? (
            <div className="text-center py-12 bg-card border rounded-lg">
              <p className="text-muted-foreground">No blocked characters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blockedCharacters.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onEdit={handleEdit}
                  onDelete={handleDeletePermanently}
                  onUnblock={handleUnblock}
                  onGenerate={handleGenerate}
                  onMerge={handleMergeClick}
                  mergeMode={mergeMode}
                  isFirstMergeProfile={firstMergeProfile?.id === character.id}
                  userId={userId}
                  isBlocked={true}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <CharacterDialog
        open={isDialogOpen}
        onOpenChange={handleDialogClose}
        character={selectedCharacter}
        timelineInstances={selectedCharacter?.timelineInstances || []}
        userId={userId}
      />

      <Dialog open={generatorOpen} onOpenChange={setGeneratorOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              AI Text Generator
            </DialogTitle>
          </DialogHeader>
          {generatorCharacter && (
            <TextGenerator
              characterId={generatorCharacter.id}
              characterName={generatorCharacter.name}
            />
          )}
        </DialogContent>
      </Dialog>

      <MergeConfirmDialog
        open={showMergeConfirm}
        onClose={handleMergeCanceled}
        firstProfile={firstMergeProfile}
        secondProfile={secondMergeProfile}
        onConfirm={handleMergeConfirmed}
      />

      <DeleteCharacterDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        characterName={characterToDelete?.name || ""}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default CharactersView;
