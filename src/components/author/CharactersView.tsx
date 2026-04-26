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
  // Per-character action lock so double-clicking Restore (or Delete) doesn't
  // fire two RPCs and produce a misleading "not currently merged" toast on
  // the second one.
  const [busyCharacterId, setBusyCharacterId] = useState<string | null>(null);
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
      // Atomic soft-merge via SQL function: row-locks the source, audits
      // every child row reassignment, and sets characters.merged_into so
      // the merge is reversible (see migration 010). Replaces the older
      // destructive delete + per-table UPDATE pattern.
      const { error } = await supabase.rpc('merge_characters', {
        source: deleteProfile.id,
        target: keepProfile.id,
      });
      if (error) throw error;

      toast({
        title: "Profiles merged",
        description: `${deleteProfile.name} moved to your Merged tab. Restore from there anytime.`,
      });

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

  const handleUnmerge = async (sourceCharacter: any) => {
    if (busyCharacterId) return; // double-click / concurrent-action guard
    const targetName = mergedTargetName(sourceCharacter);
    const when = sourceCharacter.merged_at
      ? new Date(sourceCharacter.merged_at).toLocaleDateString()
      : null;
    const confirmMsg = `Restore "${sourceCharacter.name}" as a separate character?\n\nData added to "${targetName}" since the merge${when ? ` on ${when}` : ''} stays with "${targetName}".`;
    if (!window.confirm(confirmMsg)) return;
    setBusyCharacterId(sourceCharacter.id);
    try {
      const { error } = await supabase.rpc('unmerge_character', {
        source: sourceCharacter.id,
      });
      if (error) throw error;
      toast({
        title: "Character restored",
        description: `${sourceCharacter.name} is back in your Active tab.`,
      });
      fetchCharacters();
    } catch (error: any) {
      toast({
        title: "Error unmerging",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setBusyCharacterId(null);
    }
  };

  const handleHardDelete = async (character: any) => {
    if (busyCharacterId) return;
    // Proactive check: refuse to delete a character that has merged-in
    // sources. Migration 010's ON DELETE RESTRICT would also block it at the
    // DB level, but a clear up-front message is friendlier than a 23503
    // error toast. The user must unmerge those sources first.
    const incoming = (characters || []).filter(
      (c: any) => c.merged_into === character.id
    );
    if (incoming.length > 0) {
      const names = incoming.map((c: any) => c.name).join(', ');
      toast({
        title: "Unmerge first",
        description: `"${character.name}" has ${incoming.length} merged-in profile${incoming.length === 1 ? '' : 's'} (${names}). Restore them from the Merged tab before deleting.`,
        variant: "destructive",
      });
      return;
    }
    const confirmMsg = `PERMANENTLY delete "${character.name}"?\n\nAll their voice profile, dialogue history, and analysis data will be removed. This cannot be undone.`;
    if (!window.confirm(confirmMsg)) return;
    setBusyCharacterId(character.id);
    try {
      // Migration 010 added ON DELETE CASCADE to all child FKs, so a single
      // DELETE on characters cleans up every dependent row in one statement.
      const { error } = await supabase.from('characters').delete().eq('id', character.id);
      if (error) throw error;
      toast({
        title: "Character deleted",
        description: `${character.name} has been permanently removed.`,
      });
      fetchCharacters();
    } catch (error: any) {
      toast({
        title: "Error deleting character",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setBusyCharacterId(null);
    }
  };

  // Active = not blocked AND not merged. Blocked = blocked AND not merged.
  // Merged = soft-merged into another character (visible only on its own tab).
  const activeCharacters = characters?.filter(c => !c.blocked && !c.merged_into) || [];
  const blockedCharacters = characters?.filter(c => c.blocked && !c.merged_into) || [];
  const mergedCharacters = characters?.filter(c => c.merged_into) || [];

  // Resolve "merged into X" label for a soft-merged character. Walks the chain
  // in case A→B→C: shows the live ancestor's name so the user sees where the
  // data actually lives now, not the immediate (also-merged) target.
  const mergedTargetName = (sourceChar: any): string => {
    const byId = new Map((characters || []).map((c: any) => [c.id, c]));
    let cur = byId.get(sourceChar.merged_into);
    let hops = 0;
    while (cur && cur.merged_into && hops < 10) {
      cur = byId.get(cur.merged_into);
      hops++;
    }
    return cur?.name || '(unknown)';
  };

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
          {/* Merged tab is always visible so users can discover the Restore
              flow even before they've merged anything. Earlier we hid it
              when count was 0 to avoid clutter, but that made the unmerge
              button unfindable. */}
          <TabsTrigger value="merged">
            Merged Profiles ({mergedCharacters.length})
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
                  onHardDelete={handleHardDelete}
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

        <TabsContent value="merged" className="mt-6">
          <div className="bg-muted/30 border border-muted rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">About Merged Profiles</h3>
            <p className="text-sm text-muted-foreground">
              Characters you've merged into another. Their data lives under
              the target character now. Restoring brings the original back
              with the data it had at merge time — anything added to the
              target since stays with the target.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Merges from before this update were permanent and aren't shown here.
            </p>
          </div>

          {mergedCharacters.length === 0 ? (
            <div className="text-center py-12 bg-card border rounded-lg">
              <p className="text-muted-foreground mb-2">No merged characters yet.</p>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                When you merge a duplicate character into another from the Active tab,
                the merged copy will appear here with a Restore option.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mergedCharacters.map((character) => {
                const targetName = mergedTargetName(character);
                const when = character.merged_at
                  ? new Date(character.merged_at).toLocaleDateString()
                  : null;
                return (
                  <div
                    key={character.id}
                    className="bg-card border rounded-lg p-4 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-lg font-serif font-semibold">
                        {character.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Merged into <span className="font-medium">{targetName}</span>
                        {when && <span className="text-xs"> · {when}</span>}
                      </p>
                    </div>
                    <Button
                      onClick={() => handleUnmerge(character)}
                      variant="outline"
                      className="mt-4 w-full"
                      disabled={busyCharacterId === character.id}
                    >
                      {busyCharacterId === character.id ? 'Restoring…' : 'Restore as separate character'}
                    </Button>
                  </div>
                );
              })}
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
