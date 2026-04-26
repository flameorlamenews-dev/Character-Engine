// @ts-nocheck
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface NewProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  // Called with the newly-created project's id after a successful insert.
  onCreated?: (projectId: string) => void;
}

// NewProjectDialog — collects a book title and optional description, inserts
// a row into `projects`, and reports the new id back to the caller. The
// project's `name` field IS the book title (consumed by the `books` view as
// `title` for Book Buddy iOS).
export function NewProjectDialog({ open, onOpenChange, userId, onCreated }: NewProjectDialogProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setTitle('');
    setDescription('');
  };

  const handleCreate = async () => {
    const trimmed = title.trim();
    if (!trimmed) {
      toast.error('Book title is required');
      return;
    }
    setLoading(true);
    const { data, error } = await (supabase as any)
      .from('projects')
      .insert({
        user_id: userId,
        name: trimmed,
        description: description.trim() || null,
      })
      .select('id')
      .single();
    setLoading(false);
    if (error || !data?.id) {
      toast.error('Could not create project: ' + (error?.message || 'unknown error'));
      return;
    }
    toast.success(`Created "${trimmed}"`);
    reset();
    onOpenChange(false);
    onCreated?.(data.id);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New book</DialogTitle>
          <DialogDescription>
            Each project holds the chapters and characters for one book. The title shows as the book's name in the Character Engine and on the Book Buddy iOS app.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="book-title">Book title</Label>
            <Input
              id="book-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="The Hunter Exam"
              autoFocus
              maxLength={120}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="book-desc">Short description <span className="text-xs text-muted-foreground">(optional)</span></Label>
            <Textarea
              id="book-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="One-line summary or working note."
              rows={3}
              maxLength={500}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" onClick={() => handleOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleCreate} disabled={!title.trim() || loading}>
            {loading ? 'Creating…' : 'Create book'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
