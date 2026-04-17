// @ts-nocheck
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Lock, Unlock, RefreshCw } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface GlossaryEntry {
  id: string;
  word: string;
  definition: string;
  word_type: string;
  curse_harshness?: number;
  category?: string;
  usage_notes?: string;
  ai_interpretation?: string;
  appears_in?: number[];
  locked?: boolean;
}

export const GlossaryManager = ({ userId, projectId }: { userId: string; projectId: string }) => {
  const [entries, setEntries] = useState<GlossaryEntry[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<GlossaryEntry | null>(null);
  const [sortBy, setSortBy] = useState<'word' | 'type' | 'category' | 'locked'>('word');
  const [formData, setFormData] = useState({
    word: "",
    definition: "",
    word_type: "noun",
    curse_harshness: 5,
    category: "",
    usage_notes: "",
    ai_interpretation: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchEntries();
    // Poll every 10s to pick up new AI-generated terms. Include projectId
    // in deps so switching projects re-fetches instead of showing the
    // previous project's glossary until the next poll.
    const interval = setInterval(fetchEntries, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, projectId]);

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from("world_glossary")
      .select("*")
      .eq("user_id", userId)
      .eq("project_id", projectId);

    if (error) {
      toast({ title: "Error fetching glossary", description: error.message, variant: "destructive" });
    } else {
      setEntries(data || []);
    }
  };

  const validWordTypes = new Set(["noun", "verb", "adjective", "curse", "proper_noun", "phrase", "other", "uncategorized"]);
  const validCategories = new Set(["uncategorized", "concept", "place", "item", "creature", "title", "motto", "magic", "technology", "organization", "custom"]);

  const getWordType = (type: string) => validWordTypes.has(type) ? type : "uncategorized";
  const getCategory = (cat: string | null | undefined) => {
    const c = cat || "uncategorized";
    return validCategories.has(c) ? c : "uncategorized";
  };

  const sortedEntries = [...entries].sort((a, b) => {
    if (sortBy === 'word') return a.word.localeCompare(b.word);
    if (sortBy === 'type') return getWordType(a.word_type).localeCompare(getWordType(b.word_type));
    if (sortBy === 'category') return getCategory(a.category).localeCompare(getCategory(b.category));
    if (sortBy === 'locked') return (b.locked ? 1 : 0) - (a.locked ? 1 : 0);
    return 0;
  });

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      user_id: userId,
      project_id: projectId || null,
      curse_harshness: formData.word_type === "curse" ? formData.curse_harshness : null,
    };

    if (editingEntry) {
      const { error } = await supabase
        .from("world_glossary")
        .update(payload)
        .eq("id", editingEntry.id);

      if (error) {
        toast({ title: "Error updating entry", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Entry updated successfully" });
        fetchEntries();
        resetForm();
      }
    } else {
      const { error } = await supabase.from("world_glossary").insert(payload);

      if (error) {
        toast({ title: "Error creating entry", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Entry created successfully" });
        fetchEntries();
        resetForm();
      }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("world_glossary").delete().eq("id", id);

    if (error) {
      toast({ title: "Error deleting entry", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Entry deleted" });
      fetchEntries();
    }
  };

  const handleQuickUpdate = async (id: string, field: 'word_type' | 'category', value: string) => {
    const { error } = await supabase
      .from("world_glossary")
      .update({ [field]: value })
      .eq("id", id);

    if (error) {
      toast({ title: "Error updating entry", description: error.message, variant: "destructive" });
    } else {
      fetchEntries();
    }
  };

  const toggleLock = async (id: string, currentLockState: boolean) => {
    const { error } = await supabase
      .from("world_glossary")
      .update({ locked: !currentLockState } as any)
      .eq("id", id);

    if (error) {
      toast({ title: "Error toggling lock", description: error.message, variant: "destructive" });
    } else {
      toast({ 
        title: !currentLockState ? "Classifications locked" : "Classifications unlocked",
        description: !currentLockState ? "AI will not modify this entry" : "AI can now modify this entry"
      });
      fetchEntries();
    }
  };

  const resetForm = () => {
    setFormData({
      word: "",
      definition: "",
      word_type: "noun",
      curse_harshness: 5,
      category: "",
      usage_notes: "",
      ai_interpretation: "",
    });
    setEditingEntry(null);
    setIsDialogOpen(false);
  };

  const openEditDialog = (entry: GlossaryEntry) => {
    setEditingEntry(entry);
    setFormData({
      word: entry.word,
      definition: entry.definition,
      word_type: entry.word_type,
      curse_harshness: entry.curse_harshness || 5,
      category: entry.category || "",
      usage_notes: entry.usage_notes || "",
      ai_interpretation: entry.ai_interpretation || "",
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold">World Glossary</h2>
          <p className="text-muted-foreground">Define custom words for your world. AI will automatically detect and classify them in your manuscripts.</p>
        </div>
        <div className="flex gap-2 items-center">
          <Select value={sortBy} onValueChange={(val: any) => setSortBy(val)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="word">Sort by Word</SelectItem>
              <SelectItem value="type">Sort by Type</SelectItem>
              <SelectItem value="category">Sort by Category</SelectItem>
              <SelectItem value="locked">Sort by Locked</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={fetchEntries} title="Refresh glossary">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" />
              Add Word
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingEntry ? "Edit" : "Add"} Glossary Entry</DialogTitle>
              <DialogDescription>Define a custom word for your world</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="word">Word</Label>
                <Input
                  id="word"
                  value={formData.word}
                  onChange={(e) => setFormData({ ...formData, word: e.target.value })}
                  placeholder="e.g., Ventus"
                />
              </div>

              <div>
                <Label htmlFor="definition">Definition</Label>
                <Textarea
                  id="definition"
                  value={formData.definition}
                  onChange={(e) => setFormData({ ...formData, definition: e.target.value })}
                  placeholder="What does this word mean?"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="word_type">Word Type</Label>
                  <Select value={formData.word_type} onValueChange={(val) => setFormData({ ...formData, word_type: val })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="noun">Noun</SelectItem>
                      <SelectItem value="verb">Verb</SelectItem>
                      <SelectItem value="adjective">Adjective</SelectItem>
                      <SelectItem value="curse">Curse Word</SelectItem>
                      <SelectItem value="proper_noun">Proper Noun</SelectItem>
                      <SelectItem value="phrase">Phrase</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="category">Category (Optional)</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Magic, Places, Titles"
                  />
                </div>
              </div>

              {formData.word_type === "curse" && (
                <div>
                  <Label>Curse Harshness: {formData.curse_harshness}/10</Label>
                  <Slider
                    value={[formData.curse_harshness]}
                    onValueChange={([val]) => setFormData({ ...formData, curse_harshness: val })}
                    min={1}
                    max={10}
                    step={1}
                    className="mt-2"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="usage_notes">Usage Notes (Optional)</Label>
                <Textarea
                  id="usage_notes"
                  value={formData.usage_notes}
                  onChange={(e) => setFormData({ ...formData, usage_notes: e.target.value })}
                  placeholder="How is this word typically used?"
                />
              </div>

              <div>
                <Label htmlFor="ai_interpretation">AI Interpretation (Optional)</Label>
                <Textarea
                  id="ai_interpretation"
                  value={formData.ai_interpretation}
                  onChange={(e) => setFormData({ ...formData, ai_interpretation: e.target.value })}
                  placeholder="What the AI might think this word means"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit}>{editingEntry ? "Update" : "Create"}</Button>
              </div>
            </div>
          </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4">
        {entries.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              No glossary entries yet. Add words unique to your world!
            </CardContent>
          </Card>
        ) : (
          sortedEntries.map((entry) => (
            <Card key={entry.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {entry.word.replace(/^[@*\s]+|[*\s]+$/g, '')}
                      {entry.locked && (
                        <Lock className="h-4 w-4 text-primary" />
                      )}
                      {entry.word_type === "curse" && entry.curse_harshness && (
                        <span className="ml-2 text-sm text-muted-foreground">
                          (Harshness: {entry.curse_harshness}/10)
                        </span>
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Select 
                        value={getWordType(entry.word_type)} 
                        onValueChange={(val) => handleQuickUpdate(entry.id, 'word_type', val)}
                        disabled={entry.locked}
                      >
                        <SelectTrigger className="h-7 w-[110px] text-[11px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="uncategorized">Select Type</SelectItem>
                          <SelectItem value="noun">Noun</SelectItem>
                          <SelectItem value="verb">Verb</SelectItem>
                          <SelectItem value="adjective">Adjective</SelectItem>
                          <SelectItem value="curse">Curse</SelectItem>
                          <SelectItem value="proper_noun">Proper Noun</SelectItem>
                          <SelectItem value="phrase">Phrase</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <span className="text-muted-foreground">•</span>
                      <Select 
                        value={getCategory(entry.category)} 
                        onValueChange={(val) => handleQuickUpdate(entry.id, 'category', val === 'uncategorized' ? '' : val)}
                        disabled={entry.locked}
                      >
                        <SelectTrigger className="h-7 w-[110px] text-[11px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="uncategorized">Select Group</SelectItem>
                          <SelectItem value="concept">Concept</SelectItem>
                          <SelectItem value="place">Place</SelectItem>
                          <SelectItem value="item">Item</SelectItem>
                          <SelectItem value="creature">Creature</SelectItem>
                          <SelectItem value="title">Title</SelectItem>
                          <SelectItem value="motto">Motto</SelectItem>
                          <SelectItem value="magic">Magic</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="organization">Organization</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => toggleLock(entry.id, entry.locked || false)}
                      title={entry.locked ? "Unlock (AI can modify)" : "Lock (AI cannot modify)"}
                    >
                      {entry.locked ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(entry)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(entry.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{entry.definition}</p>
                {entry.usage_notes && (
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Usage:</strong> {entry.usage_notes}
                  </p>
                )}
                {entry.ai_interpretation && (
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    <strong>AI might interpret as:</strong> {entry.ai_interpretation}
                  </p>
                )}
                {entry.appears_in && entry.appears_in.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    <strong>Appears In:</strong> Chapter {entry.appears_in.sort((a, b) => a - b).join(", ")}
                  </p>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
