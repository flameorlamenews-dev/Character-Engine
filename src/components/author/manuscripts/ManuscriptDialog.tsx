// @ts-nocheck
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, Loader2 } from "lucide-react";
import ReplaceChapterDialog from "./ReplaceChapterDialog";
import LossPreventionDialog from "./LossPreventionDialog";

const ManuscriptDialog = ({ open, onOpenChange, userId, projectId, onUploadStart, onUploadComplete }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  projectId?: string;
  onUploadStart?: (chapterNum: number) => void;
  onUploadComplete?: () => void;
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [textContent, setTextContent] = useState("");
  const [chapterNumber, setChapterNumber] = useState<string>("");
  const [chapterExists, setChapterExists] = useState(false);
  const [replaceDialogOpen, setReplaceDialogOpen] = useState(false);
  const [existingChapter, setExistingChapter] = useState<any>(null);
  const [pendingUpload, setPendingUpload] = useState<any>(null);
  const [lossPreventionDialogOpen, setLossPreventionDialogOpen] = useState(false);
  const [charactersToDelete, setCharactersToDelete] = useState<Array<{ id: string; name: string }>>([]);
  const [glossaryToDelete, setGlossaryToDelete] = useState<Array<{ id: string; word: string; definition: string }>>([]);

  // Check if chapter exists in real-time
  useEffect(() => {
    const checkChapterExists = async () => {
      if (!chapterNumber || isNaN(parseInt(chapterNumber)) || parseInt(chapterNumber) < 0 || parseInt(chapterNumber) > 200) {
        setChapterExists(false);
        return;
      }

      let query = supabase
        .from("manuscripts")
        .select("id, title")
        .eq("user_id", userId)
        .eq("chapter_number", parseInt(chapterNumber));
      if (projectId) {
        query = query.eq("project_id", projectId);
      }
      const { data: existingChapters } = await query;

      setChapterExists(existingChapters && existingChapters.length > 0);
      if (existingChapters && existingChapters.length > 0) {
        setExistingChapter(existingChapters[0]);
      } else {
        setExistingChapter(null);
      }
    };

    const debounceTimer = setTimeout(checkChapterExists, 300);
    return () => clearTimeout(debounceTimer);
  }, [chapterNumber, userId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check file type
      const validTypes = [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
        "application/msword", // .doc
        "application/pdf",
        "text/plain",
      ];
      
      if (!validTypes.includes(selectedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a Word document (.docx, .doc), PDF, or text file.",
          variant: "destructive",
        });
        return;
      }

      // Check file size (max 20MB)
      if (selectedFile.size > 20 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Maximum file size is 20MB.",
          variant: "destructive",
        });
        return;
      }

      setFile(selectedFile);
      // Auto-populate title from filename if empty
      if (!title) {
        const nameWithoutExt = selectedFile.name.replace(/\.[^/.]+$/, "");
        setTitle(nameWithoutExt);
      }
    }
  };

  const extractTextFromFile = async (file: File): Promise<string> => {
    // For text files, read directly
    if (file.type === "text/plain") {
      return await file.text();
    }

    // For Word docs and PDFs, return placeholder - edge function will extract text
    return "Processing document...";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file && !textContent.trim()) {
      toast({
        title: "No content",
        description: "Please upload a file or paste text.",
        variant: "destructive",
      });
      return;
    }

    if (!chapterNumber || isNaN(parseInt(chapterNumber)) || parseInt(chapterNumber) < 0 || parseInt(chapterNumber) > 200) {
      toast({
        title: "Chapter number required",
        description: "Please enter a valid chapter number (0-200).",
        variant: "destructive",
      });
      return;
    }

    // If chapter exists, open replace dialog directly
    if (chapterExists && existingChapter) {
      setPendingUpload({ file, title, textContent: textContent.trim(), chapterNumber: parseInt(chapterNumber) });
      setReplaceDialogOpen(true);
      return;
    }

    onUploadStart?.(parseInt(chapterNumber));
    setLoading(true);

    try {
      await performUpload(file, title, textContent.trim(), parseInt(chapterNumber), false, null);

      toast({
        title: "Manuscript uploaded",
        description: "Your manuscript has been saved successfully.",
      });

      setFile(null);
      setTitle("");
      setTextContent("");
      setChapterNumber("");
      onOpenChange(false);
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error.message || "Could not upload manuscript",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      onUploadComplete?.();
    }
  };

  const waitForProcessingComplete = async (manuscriptId: string) => {
    const maxWaitMs = 30 * 1000; // 30 seconds — parsing typically takes 2-5 seconds
    const pollIntervalMs = 1000;
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWaitMs) {
      await new Promise(resolve => setTimeout(resolve, pollIntervalMs));
      
      const { data } = await supabase
        .from("manuscripts")
        .select("content, processing_progress")
        .eq("id", manuscriptId)
        .single();
      
      if (!data) break;
      
      // Check if content indicates failure
      if (data.content?.includes("extraction failed") || data.content?.includes("parsing failed")) {
        throw new Error("Text extraction failed. Please try a different file format.");
      }
      
      const stillProcessing = data.content?.includes("Processing document") ||
                              data.content?.includes("Extracting text") ||
                              data.content?.includes("Downloading document");
      
      if (!stillProcessing || data.processing_progress === 100) {
        return; // Done!
      }
    }
    
    throw new Error("Document processing timed out. Please try again.");
  };

  const performUpload = async (
    uploadFile: File | null,
    uploadTitle: string,
    uploadContent: string,
    uploadChapterNumber: number,
    isReplacement: boolean,
    existingManuscriptId: string | null
  ) => {
    try {
      let fileName = null;
      let content = uploadContent;

      // Handle file upload if present
      if (uploadFile) {
        const fileExt = uploadFile.name.split(".").pop();
        fileName = `${userId}/${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("manuscripts")
          .upload(fileName, uploadFile);

        if (uploadError) throw uploadError;

        // Extract text from file
        content = await extractTextFromFile(uploadFile);
      }

      if (isReplacement && existingManuscriptId) {
        // Update existing manuscript
        const { data: manuscript, error: updateError } = await supabase
          .from("manuscripts")
          .update({
            title: uploadTitle || uploadFile?.name || "Untitled Manuscript",
            content: content || "Document uploaded. Text extraction in progress...",
            file_path: fileName,
            analysis_progress: 0,
            analysis_results: null,
          })
          .eq("id", existingManuscriptId)
          .select()
          .single();

        if (updateError) throw updateError;

        // For non-text files, trigger parsing via edge function and wait for completion
        if (uploadFile && uploadFile.type !== "text/plain" && manuscript) {
          await supabase.functions.invoke("parse-manuscript", {
            body: { filePath: fileName, manuscriptId: manuscript.id },
          });
          
          // Poll until processing completes
          await waitForProcessingComplete(manuscript.id);
        }
      } else {
        // Insert new manuscript record
        const { data: manuscript, error: insertError } = await supabase
          .from("manuscripts")
          .insert([
            {
              title: uploadTitle || uploadFile?.name || "Untitled Manuscript",
              content: content || "Document uploaded. Text extraction in progress...",
              file_path: fileName,
              user_id: userId,
              chapter_number: uploadChapterNumber,
              project_id: projectId || null,
            },
          ])
          .select()
          .single();

        if (insertError) throw insertError;

        // For non-text files, trigger parsing via edge function and wait for completion
        if (uploadFile && uploadFile.type !== "text/plain" && manuscript) {
          await supabase.functions.invoke("parse-manuscript", {
            body: { filePath: fileName, manuscriptId: manuscript.id },
          });
          
          // Poll until processing completes
          await waitForProcessingComplete(manuscript.id);
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const handleReplaceConfirm = async (action: "delete" | "compare") => {
    if (!pendingUpload || !existingChapter) return;

    setReplaceDialogOpen(false);

    try {
      if (action === "compare") {
        // TODO: Implement comparison logic
        toast({
          title: "Compare feature coming soon",
          description: "This feature is under development. Please use Delete All Data for now.",
          variant: "destructive",
        });
        return;
      }

      // "Delete All Data" action - First check what will be permanently deleted
      setLoading(true);

      // Find characters that ONLY appear in this chapter
      const { data: allCharacters } = await supabase
        .from("characters")
        .select("id, name, manuscript_id")
        .eq("user_id", userId)
        .eq("source_type", "ai");

      const charsToDelete: Array<{ id: string; name: string }> = [];
      
      if (allCharacters) {
        for (const char of allCharacters) {
          // Check if this character only appears in the chapter being replaced
          const { data: characterManuscripts } = await supabase
            .from("characters")
            .select("manuscript_id")
            .eq("id", char.id);

          const uniqueManuscriptIds = [...new Set(characterManuscripts?.map(c => c.manuscript_id))];
          
          // If character only appears in this manuscript, mark for deletion
          if (uniqueManuscriptIds.length === 1 && uniqueManuscriptIds[0] === existingChapter.id) {
            charsToDelete.push({ id: char.id, name: char.name });
          }
        }
      }

      // Find glossary terms that ONLY appear in this chapter (excluding locked ones)
      const { data: allGlossary } = await supabase
        .from("world_glossary")
        .select("id, word, definition, appears_in, locked")
        .eq("user_id", userId)
        .eq("source_type", "ai");

      const glossaryToDeleteList: Array<{ id: string; word: string; definition: string }> = [];

      if (allGlossary) {
        for (const term of allGlossary) {
          // Skip locked entries - they should never be deleted
          if (term.locked) continue;
          
          // If appears_in only contains this chapter number, mark for deletion
          if (term.appears_in && 
              term.appears_in.length === 1 && 
              term.appears_in[0] === pendingUpload.chapterNumber) {
            glossaryToDeleteList.push({ 
              id: term.id, 
              word: term.word, 
              definition: term.definition 
            });
          }
        }
      }

      setCharactersToDelete(charsToDelete);
      setGlossaryToDelete(glossaryToDeleteList);
      setLoading(false);

      // Show Loss Prevention dialog
      setLossPreventionDialogOpen(true);

    } catch (error: any) {
      console.error("Error checking for deletions:", error);
      toast({
        title: "Error",
        description: "Could not check for data loss. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const handleLossPreventionConfirm = async () => {
    if (!pendingUpload || !existingChapter) return;

    onUploadStart?.(pendingUpload.chapterNumber);
    setLoading(true);
    setLossPreventionDialogOpen(false);

    try {
      // Delete All Data: Remove all AI-extracted data for this chapter
      await supabase
        .from("characters")
        .delete()
        .eq("manuscript_id", existingChapter.id)
        .eq("source_type", "ai");

      // Delete all related AI data
      await supabase.from("character_traits").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai");
      await supabase.from("character_voice_scales").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai");
      await supabase.from("character_lexicon").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai");
      await supabase.from("character_mottos").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai");
      await supabase.from("character_emotion_map").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai");
      await supabase.from("character_audience_mods").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai");
      await supabase.from("character_conflict_profile").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai");
      await supabase.from("character_style_rules").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai");
      
      // Delete AI-extracted glossary entries (excluding locked ones)
      // For locked entries, only update appears_in to remove this chapter
      const { data: lockedGlossary } = await supabase
        .from("world_glossary")
        .select("id, appears_in")
        .eq("manuscript_id", existingChapter.id)
        .eq("source_type", "ai")
        .eq("locked", true);
      
      if (lockedGlossary) {
        for (const entry of lockedGlossary) {
          const updatedAppears = (entry.appears_in || []).filter(
            (chNum: number) => chNum !== (existingChapter.chapter_number || 0)
          );
          await supabase
            .from("world_glossary")
            .update({ appears_in: updatedAppears })
            .eq("id", entry.id);
        }
      }
      
      // Delete unlocked AI-extracted glossary entries
      await supabase.from("world_glossary").delete().eq("manuscript_id", existingChapter.id).eq("source_type", "ai").eq("locked", false);

      // Perform the upload/replacement
      await performUpload(
        pendingUpload.file,
        pendingUpload.title,
        pendingUpload.textContent,
        pendingUpload.chapterNumber,
        true,
        existingChapter.id
      );

      toast({
        title: "Chapter replaced",
        description: "All AI-extracted data removed. New analysis will begin shortly.",
      });

      setFile(null);
      setTitle("");
      setTextContent("");
      setChapterNumber("");
      setPendingUpload(null);
      setExistingChapter(null);
      setCharactersToDelete([]);
      setGlossaryToDelete([]);
      onOpenChange(false);
    } catch (error: any) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error.message || "Could not upload manuscript",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      onUploadComplete?.();
    }
  };

  return (
    <>
      <ReplaceChapterDialog
        open={replaceDialogOpen}
        onOpenChange={setReplaceDialogOpen}
        chapterNumber={parseInt(chapterNumber) || 0}
        existingTitle={existingChapter?.title || ""}
        onConfirm={handleReplaceConfirm}
      />
      <LossPreventionDialog
        open={lossPreventionDialogOpen}
        onOpenChange={setLossPreventionDialogOpen}
        chapterNumber={parseInt(chapterNumber) || 0}
        charactersToDelete={charactersToDelete}
        glossaryToDelete={glossaryToDelete}
        onConfirm={handleLossPreventionConfirm}
      />
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Upload Manuscript</DialogTitle>
          <p className="text-sm text-muted-foreground">Upload a chapter file or paste text content for analysis.</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 overflow-y-auto flex-1">
          <div className="space-y-4 px-1">
            <div className="bg-muted/50 border border-primary/20 rounded-lg p-4 mb-2">
              <p className="text-sm font-medium text-foreground">
                📖 Upload one chapter at a time for more accurate analysis
              </p>
            </div>

            <div className="space-y-2">
              <Label 
                htmlFor="chapterNumber" 
                className={chapterExists ? "text-destructive" : ""}
              >
                Chapter Number *
              </Label>
              <Input
                id="chapterNumber"
                type="number"
                min="0"
                max="200"
                value={chapterNumber}
                onChange={(e) => setChapterNumber(e.target.value)}
                placeholder="Enter chapter number (e.g., 0, 1, 2...)"
                className={chapterExists ? "border-destructive text-destructive focus-visible:ring-destructive" : ""}
                required
              />
              {chapterExists && (
                <p className="text-sm text-destructive">
                  Chapter {chapterNumber} already exists
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Manuscript File</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  accept=".docx,.doc,.pdf,.txt"
                  className="hidden"
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer flex flex-col items-center gap-3"
                >
                  {file ? (
                    <>
                      <FileText className="h-10 w-10 text-primary" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Click to upload</p>
                        <p className="text-sm text-muted-foreground">
                          Word (.docx, .doc), PDF, or Text files
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Maximum size: 20MB
                        </p>
                      </div>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter manuscript title..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="text">Or Paste Text Directly</Label>
              <Textarea
                id="text"
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="Paste your manuscript text here..."
                rows={6}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                AI will analyze the text to identify characters and their unique speech patterns
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t sticky bottom-0 bg-background">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading || (!file && !textContent.trim())}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default ManuscriptDialog;
