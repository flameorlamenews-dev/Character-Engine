// @ts-nocheck
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ProfileSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  // When true, the dialog cannot be dismissed without saving — used for the
  // first-login prompt where the user must enter a name before proceeding.
  required?: boolean;
  // Called after a successful save so the parent can refresh state (e.g. mark
  // first-login flow complete) and re-fetch derived data like books.author_name.
  onSaved?: (fullName: string) => void;
}

// ProfileSettingsDialog — first/last name editor for the user's profiles row.
// The combined value is written to profiles.full_name, which feeds the
// `books.author_name` view consumed by Book Buddy iOS. New users see this
// modal automatically on first login (full_name empty); existing users open
// it from the TopBar user menu.
export function ProfileSettingsDialog({
  open,
  onOpenChange,
  userId,
  required = false,
  onSaved,
}: ProfileSettingsDialogProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  // Reset initialLoadDone whenever the dialog re-opens so the loader runs
  // fresh. ALWAYS flips true at the end (success, missing row, or fetch
  // error) so a network failure can't lock a first-login user out of the
  // required dialog with disabled inputs they can never type into.
  useEffect(() => {
    if (!open || !userId) return;
    let cancelled = false;
    setInitialLoadDone(false);
    (async () => {
      try {
        const { data, error } = await (supabase as any)
          .from('profiles')
          .select('full_name')
          .eq('id', userId)
          .maybeSingle();
        if (cancelled) return;
        if (error) {
          // Don't block typing on a transient fetch failure; the upsert at
          // save time will create or refresh the row regardless.
          console.warn('Profile load failed, defaulting to empty form:', error.message);
          setFirstName('');
          setLastName('');
        } else {
          const parts = (data?.full_name || '').trim().split(/\s+/);
          if (parts.length === 1 && parts[0] === '') {
            setFirstName('');
            setLastName('');
          } else if (parts.length === 1) {
            setFirstName(parts[0]);
            setLastName('');
          } else {
            setFirstName(parts[0]);
            setLastName(parts.slice(1).join(' '));
          }
        }
      } catch (err: any) {
        if (cancelled) return;
        console.warn('Profile load threw, defaulting to empty form:', err?.message || err);
        setFirstName('');
        setLastName('');
      } finally {
        if (!cancelled) setInitialLoadDone(true);
      }
    })();
    return () => { cancelled = true; };
  }, [open, userId]);

  const canSave = firstName.trim().length > 0;

  const handleSave = async () => {
    if (!canSave) {
      toast.error('First name is required');
      return;
    }
    setLoading(true);
    const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(' ');
    // Upsert on (id) so a missing profile row is created — UPDATE alone would
    // silently match 0 rows and toast "saved" without persisting (the
    // profiles row could be missing if bootstrap's earlier INSERT raced or
    // failed). onConflict only modifies the listed columns, so existing
    // email/created_at are preserved.
    const { error } = await (supabase as any)
      .from('profiles')
      .upsert({ id: userId, full_name: fullName }, { onConflict: 'id' });
    setLoading(false);
    if (error) {
      toast.error('Save failed: ' + error.message);
      return;
    }
    toast.success('Author name saved');
    onSaved?.(fullName);
    onOpenChange(false);
  };

  // Block dismissing the dialog when required prop is true — used for the
  // first-login prompt.
  const handleOpenChange = (next: boolean) => {
    if (!next && required && !canSave) {
      toast.info('Please enter at least your first name to continue.');
      return;
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md" onInteractOutside={(e) => required && e.preventDefault()} onEscapeKeyDown={(e) => required && e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Author name</DialogTitle>
          <DialogDescription>
            {required
              ? 'This name appears as the author on your books — both in the Character Engine and on the Book Buddy app.'
              : 'Update the name shown as author on your books.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="first-name">First name</Label>
            <Input
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Type your first name"
              autoFocus
              disabled={!initialLoadDone}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="last-name">Last name <span className="text-xs text-muted-foreground">(optional)</span></Label>
            <Input
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Type your last name (optional)"
              disabled={!initialLoadDone}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          {!required && (
            <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
              Cancel
            </Button>
          )}
          <Button onClick={handleSave} disabled={!canSave || loading || !initialLoadDone}>
            {loading ? 'Saving…' : 'Save'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
