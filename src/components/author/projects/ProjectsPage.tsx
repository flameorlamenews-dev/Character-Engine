// @ts-nocheck
import { useEffect, useState, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Plus, Users, FileText, Trash2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import { NewProjectDialog } from './NewProjectDialog';

interface ProjectWithCounts {
  id: string;
  name: string;
  description: string | null;
  updated_at: string;
  chapterCount: number;
  characterCount: number;
}

interface ProjectsPageProps {
  userId: string;
  // Selecting a project hands off to the parent to set session.projectId and
  // unmount this view in favour of the per-project Dashboard.
  onSelectProject: (projectId: string) => void;
}

// ProjectsPage — landing page after login. Lists every project owned by the
// user as a card (title, chapter count, character count, last edited), with
// a "New book" affordance. Replaces the old auto-route-into-first-project
// flow so users with multiple books can switch between them.
export function ProjectsPage({ userId, onSelectProject }: ProjectsPageProps) {
  const [projects, setProjects] = useState<ProjectWithCounts[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  // Track mounted-state so async setState calls after unmount are skipped.
  // The user can pick a project (unmounting this page) before the initial
  // fetch resolves; without this guard React warns about setState on
  // unmounted components.
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const loadProjects = useCallback(async () => {
    if (!mountedRef.current) return;
    setLoading(true);
    const { data: projectsData, error } = await (supabase as any)
      .from('projects')
      .select('id, name, description, updated_at')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });

    if (!mountedRef.current) return;
    if (error) {
      toast.error('Could not load projects: ' + error.message);
      setLoading(false);
      return;
    }

    const list = projectsData || [];
    if (list.length === 0) {
      setProjects([]);
      setLoading(false);
      return;
    }

    // Fan out chapter + character counts in parallel. Counts come from the
    // existing engine tables: each row in `manuscripts` IS a chapter, and
    // characters are project-scoped via project_id.
    const projectIds = list.map((p: any) => p.id);
    const [manuscriptsRes, charactersRes] = await Promise.all([
      (supabase as any).from('manuscripts').select('id, project_id').in('project_id', projectIds),
      (supabase as any).from('characters').select('id, project_id').in('project_id', projectIds),
    ]);
    if (!mountedRef.current) return;

    const chapterCounts: Record<string, number> = {};
    const characterCounts: Record<string, number> = {};
    (manuscriptsRes.data || []).forEach((m: any) => {
      if (m.project_id) chapterCounts[m.project_id] = (chapterCounts[m.project_id] || 0) + 1;
    });
    (charactersRes.data || []).forEach((c: any) => {
      if (c.project_id) characterCounts[c.project_id] = (characterCounts[c.project_id] || 0) + 1;
    });

    setProjects(list.map((p: any) => ({
      ...p,
      chapterCount: chapterCounts[p.id] || 0,
      characterCount: characterCounts[p.id] || 0,
    })));
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    loadProjects();
  }, [userId, loadProjects]);

  const handleCreated = (newProjectId: string) => {
    // Don't call loadProjects() here — onSelectProject unmounts ProjectsPage
    // immediately, and a setState on the unmounted component would fire as a
    // React warning. The next mount of ProjectsPage (when the user hits
    // "Switch book") will re-fetch fresh data anyway.
    onSelectProject(newProjectId);
  };

  const handleDelete = async (project: ProjectWithCounts) => {
    const confirmMsg = project.chapterCount > 0 || project.characterCount > 0
      ? `Delete "${project.name}"? This will remove ${project.chapterCount} chapter(s) and ${project.characterCount} character(s) and cannot be undone.`
      : `Delete "${project.name}"? This cannot be undone.`;
    if (!window.confirm(confirmMsg)) return;
    setDeletingId(project.id);
    const { error } = await (supabase as any).from('projects').delete().eq('id', project.id);
    setDeletingId(null);
    if (error) {
      toast.error('Delete failed: ' + error.message);
      return;
    }
    toast.success(`Deleted "${project.name}"`);
    loadProjects();
  };

  return (
    <div className="min-h-screen bg-ce-body">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-4xl font-serif font-bold text-ce-text">Your books</h2>
            <p className="text-ce-text-muted mt-2 text-lg">
              Select a book to work on, or start a new one.
            </p>
          </div>
          <Button onClick={() => setNewProjectOpen(true)} size="lg" className="gap-2">
            <Plus className="h-4 w-4" />
            New book
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-16 text-ce-text-muted text-sm animate-pulse">
            Loading your books…
          </div>
        ) : projects.length === 0 ? (
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer border-dashed border-2 hover:border-primary"
            onClick={() => setNewProjectOpen(true)}
          >
            <CardContent className="flex flex-col items-center justify-center py-20 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">No books yet</h3>
              <p className="text-sm text-ce-text-muted mb-6 max-w-sm">
                Start your first book to begin uploading chapters and analyzing characters.
              </p>
              <Button size="lg" className="gap-2">
                <Plus className="h-4 w-4" />
                Create your first book
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow cursor-pointer group relative"
                onClick={() => onSelectProject(project.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold leading-tight flex-1">
                      {project.name}
                    </h3>
                  </div>
                  {project.description && (
                    <p className="text-sm text-ce-text-muted line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-ce-text-muted mb-2">
                    <span className="inline-flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5" />
                      {project.chapterCount} chapter{project.chapterCount === 1 ? '' : 's'}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      {project.characterCount} character{project.characterCount === 1 ? '' : 's'}
                    </span>
                  </div>
                  <p className="text-xs text-ce-text-muted">
                    Last edited {(() => {
                      // Defend against corrupt/missing updated_at (which would
                      // otherwise throw "Invalid time value" from date-fns and
                      // crash the entire list render).
                      try {
                        const d = new Date(project.updated_at);
                        if (isNaN(d.getTime())) return 'recently';
                        return formatDistanceToNow(d, { addSuffix: true });
                      } catch {
                        return 'recently';
                      }
                    })()}
                  </p>

                  {/* Delete affordance — partially visible on touch devices
                      (no hover state available there); fades to full opacity
                      on pointer hover or keyboard focus. Confirms via a
                      window.confirm before destructive action. */}
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleDelete(project); }}
                    disabled={deletingId === project.id}
                    aria-label={`Delete ${project.name}`}
                    className="absolute top-3 right-3 p-1.5 rounded text-ce-text-muted opacity-30 group-hover:opacity-100 focus-visible:opacity-100 hover:text-red-500 focus-visible:ring-2 focus-visible:ring-red-500/40 transition-opacity disabled:opacity-50"
                    title="Delete book"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <NewProjectDialog
        open={newProjectOpen}
        onOpenChange={setNewProjectOpen}
        userId={userId}
        onCreated={handleCreated}
      />
    </div>
  );
}
