import { useCallback } from 'react';
import { toast as sonnerToast } from 'sonner';

// Thin adapter over sonner so the ~40 existing
// `toast({ title, description, variant })` callers render visibly.
// Previously this hook stored toasts in local state that no component rendered
// — which silently swallowed every error-toast in the app, including the
// "Claude API key not configured" message that made analysis look like a no-op.
interface Toast {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

export function useToast() {
  const toast = useCallback(({ title, description, variant }: Toast) => {
    const opts = description ? { description } : undefined;
    if (variant === 'destructive') {
      sonnerToast.error(title ?? 'Error', opts);
    } else {
      sonnerToast(title ?? '', opts);
    }
  }, []);

  return { toast };
}
