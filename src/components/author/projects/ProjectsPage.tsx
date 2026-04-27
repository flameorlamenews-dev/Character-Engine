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
      // Pull merged_into too so we can filter soft-merged characters out of
      // the count in JS. Doing the filter in JS (instead of SQL via .is()
      // makes the query resilient to migration 010 not being applied yet —
      // pre-migration the column doesn't exist and a SQL filter would error
      // and silently zero the count.
      (supabase as any).from('characters').select('id, project_id, merged_into').in('project_id', projectIds),
    ]);
    if (charactersRes.error) {
      console.error('Characters count query failed:', charactersRes.error.message);
    }
    if (!mountedRef.current) return;

    const chapterCounts: Record<string, number> = {};
    const characterCounts: Record<string, number> = {};
    (manuscriptsRes.data || []).forEach((m: any) => {
      if (m.project_id) chapterCounts[m.project_id] = (chapterCounts[m.project_id] || 0) + 1;
    });
    (charactersRes.data || []).forEach((c: any) => {
      // Skip soft-merged characters (when the column exists) — they're hidden
      // in their own tab in the character view and shouldn't inflate counts.
      // Pre-migration-010 the field is undefined and !undefined === true,
      // so the count includes all characters as expected.
      if (c.merged_into) return;
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
    // Double-click / parallel-project guard. setDeletingId only disables the
    // specific row's button, but reads the React state on the next render —
    // so a fast double-click on the same row, or a click on row B mid-delete
    // of row A, can both fire handleDelete in parallel and cause overlapping
    // cleanup writes. Cheap belt-and-suspenders.
    if (deletingId) return;
    const confirmMsg = project.chapterCount > 0 || project.characterCount > 0
      ? `Delete "${project.name}"?\n\nThis permanently removes ${project.chapterCount} chapter${project.chapterCount === 1 ? '' : 's'}, ${project.characterCount} character${project.characterCount === 1 ? '' : 's'}, all voice profiles, all dialogue history, all glossary terms, and all engine analysis. This cannot be undone.`
      : `Delete "${project.name}"? This cannot be undone.`;
    if (!window.confirm(confirmMsg)) return;
    setDeletingId(project.id);
    try {
      // Migration 011 cascades projects → manuscripts/characters/glossary, but
      // manuscript_id child FKs (character_timeline_entries, analysis_queue,
      // per-chapter mottos/lexicon/etc.) deliberately do NOT cascade — that
      // would break the per-chapter "Keep Data" semantic on individual chapter
      // delete. So we have to clear those child rows ourselves before the
      // project cascade fires, otherwise it 23503-blocks on manuscript delete.
      const { data: projectManuscripts, error: msErr } = await (supabase as any)
        .from('manuscripts')
        .select('id')
        .eq('project_id', project.id);
      if (msErr) throw msErr;
      const mids = (projectManuscripts || []).map((m: any) => m.id);

      if (mids.length > 0) {
        // Clear every manuscript_id child table in one shot (.in() across all
        // chapters of this project). Track per-table errors so silent
        // failures surface.
        //
        // world_glossary is included here because it has manuscript_id
        // REFERENCES manuscripts(id) with NO ACTION (migration 002:269) and
        // would 23503-block the manuscript delete otherwise. Project-scoped
        // glossary rows (manuscript_id = NULL) are handled by the project
        // CASCADE on world_glossary.project_id from migration 011.
        const cleanupSpecs: Array<[string, any]> = [
          ['character_timeline_entries', (supabase as any).from('character_timeline_entries').delete().in('manuscript_id', mids)],
          ['analysis_queue', (supabase as any).from('analysis_queue').delete().in('manuscript_id', mids)],
          ['character_traits', (supabase as any).from('character_traits').delete().in('manuscript_id', mids)],
          ['character_mottos', (supabase as any).from('character_mottos').delete().in('manuscript_id', mids)],
          ['character_lexicon', (supabase as any).from('character_lexicon').delete().in('manuscript_id', mids)],
          ['character_audience_mods', (supabase as any).from('character_audience_mods').delete().in('manuscript_id', mids)],
          ['character_emotion_map', (supabase as any).from('character_emotion_map').delete().in('manuscript_id', mids)],
          ['character_voice_feedback', (supabase as any).from('character_voice_feedback').delete().in('manuscript_id', mids)],
          ['character_verbal_tics', (supabase as any).from('character_verbal_tics').delete().in('manuscript_id', mids)],
          ['world_glossary', (supabase as any).from('world_glossary').delete().in('manuscript_id', mids)],
          // Foundation tables — project delete = nuke everything, so delete
          // these too (vs. NULL on individual chapter delete with Keep Data).
          ['character_voice_scales', (supabase as any).from('character_voice_scales').delete().in('manuscript_id', mids)],
          ['character_style_rules', (supabase as any).from('character_style_rules').delete().in('manuscript_id', mids)],
          ['character_conflict_profile', (supabase as any).from('character_conflict_profile').delete().in('manuscript_id', mids)],
        ];
        const cleanupResults = await Promise.all(cleanupSpecs.map(([, q]) => q));
        const cleanupFailures = cleanupResults
          .map((r: any, i: number) => ({ table: cleanupSpecs[i][0], error: r?.error }))
          .filter((x: any) => x.error);
        if (cleanupFailures.length > 0) {
          const detail = cleanupFailures.map((f: any) => `${f.table}: ${f.error.message}`).join('; ');
          throw new Error(`Pre-delete cleanup failed (${cleanupFailures.length} table${cleanupFailures.length === 1 ? '' : 's'}): ${detail}`);
        }
      }

      // Break merged_into pointers BEFORE the cascade fires.
      // characters.merged_into is ON DELETE RESTRICT (migration 010:35).
      //
      // Two sub-cases must be handled, so we issue two updates:
      //   (a) Sources WITHIN this project pointing AT targets (anywhere) —
      //       the source's pointer is irrelevant once the source is deleted,
      //       but PG checks RESTRICT on a per-row basis during cascade and
      //       order is non-deterministic, so null up-front.
      //   (b) Sources OUTSIDE this project pointing AT targets WITHIN this
      //       project — the cross-project source survives, but its pointer
      //       to the about-to-be-deleted in-project target would RESTRICT
      //       the cascade. Null those too. (Cross-project merges aren't a
      //       documented user flow but the schema doesn't forbid them, so
      //       defend against the case rather than crash.)
      // Project delete = nuke everything inside; we accept that any external
      // merge chains pointing in lose their pointer.
      // Throw on select error — silently dropping it (.data?.map ?? []) would
      // skip Pass B of the merged_into null-sweep below and leave external
      // merge chains pointing at about-to-be-deleted in-project targets,
      // which then RESTRICT-block the project cascade with a cryptic 23503.
      const inProjectCharsRes = await (supabase as any)
        .from('characters')
        .select('id')
        .eq('project_id', project.id);
      if (inProjectCharsRes.error) throw inProjectCharsRes.error;
      const inProjectCharIds = (inProjectCharsRes.data || []).map((c: any) => c.id);

      const unmergeOps: Promise<any>[] = [
        (supabase as any)
          .from('characters')
          .update({ merged_into: null, merged_at: null })
          .eq('project_id', project.id)
          .not('merged_into', 'is', null),
      ];
      if (inProjectCharIds.length > 0) {
        unmergeOps.push(
          (supabase as any)
            .from('characters')
            .update({ merged_into: null, merged_at: null })
            .in('merged_into', inProjectCharIds)
        );
      }
      const unmergeResults = await Promise.all(unmergeOps);
      const unmergeErr = unmergeResults.find((r: any) => r?.error)?.error;
      if (unmergeErr) throw unmergeErr;

      // Now delete the project. Cascade handles manuscripts (children just
      // cleared above), characters (CASCADE chain via migration 010 handles
      // character_id child rows), and world_glossary.
      const { error } = await (supabase as any).from('projects').delete().eq('id', project.id);
      if (error) throw error;
      toast.success(`Deleted "${project.name}"`);
      loadProjects();
    } catch (error: any) {
      toast.error('Delete failed: ' + error.message);
    } finally {
      setDeletingId(null);
    }
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
