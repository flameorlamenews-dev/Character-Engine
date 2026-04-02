import { useState, useEffect } from 'react';
import { TopBar } from '../components/topbar/TopBar';
import Dashboard from '../components/author/Dashboard';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from '../context/SessionContext';

export function AuthorLayout() {
  const { setUserContext } = useSession();
  const [session, setSession] = useState<any>(null);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (supabase as any).auth.getSession().then(({ data }: any) => {
      const s = data?.session;
      setSession(s);
      if (s?.user?.id) {
        setupUserAndProject(s.user.id, s.user.email);
      }
    });
  }, []);

  const setupUserAndProject = async (userId: string, email: string) => {
    try {
      // 1. Ensure profile exists for this auth user
      const { data: existingProfile } = await (supabase as any)
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .maybeSingle();

      if (!existingProfile) {
        const { error: profileErr } = await (supabase as any)
          .from('profiles')
          .insert({ id: userId, email: email || '', full_name: '' });

        if (profileErr) {
          console.error('Profile creation failed:', profileErr);
          // Don't block — profile might already exist or FK might not require it
        }
      }

      // 2. Check if user has a project
      const { data: projects, error: projErr } = await (supabase as any)
        .from('projects')
        .select('id')
        .eq('user_id', userId);

      if (projErr) {
        console.error('Project fetch failed:', projErr);
        setError('Failed to load projects: ' + projErr.message);
        return;
      }

      if (projects && projects.length > 0) {
        setProjectId(projects[0].id);
      } else {
        // Create a default project
        const { data: newProject, error: createErr } = await (supabase as any)
          .from('projects')
          .insert({ name: 'My Project', description: 'Default project', user_id: userId })
          .select('id')
          .single();

        if (createErr) {
          console.error('Project creation failed:', createErr);
          setError('Failed to create project: ' + createErr.message);
          return;
        }

        if (newProject) {
          setProjectId(newProject.id);
        }
      }
    } catch (err: any) {
      console.error('Setup failed:', err);
      setError(err.message || 'Failed to initialize');
    }
  };

  // Sync userId + projectId to SessionContext so the engine TopBar dropdown works
  useEffect(() => {
    if (session?.user?.id && projectId) {
      setUserContext(session.user.id, projectId);
    }
  }, [session?.user?.id, projectId]);

  if (error) {
    return (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 flex items-center justify-center bg-ce-body">
          <div className="text-center">
            <div className="text-red-400 text-sm mb-2">Setup error</div>
            <div className="text-ce-text-muted text-xs mb-4">{error}</div>
            <button
              onClick={() => { setError(null); window.location.reload(); }}
              className="px-4 py-2 text-xs bg-ce-accent text-white rounded"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!session || !projectId) {
    return (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 flex items-center justify-center bg-ce-body">
          <div className="text-ce-text-muted text-sm animate-pulse">Loading project...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex-1 overflow-auto author-panel">
        <Dashboard session={session} projectId={projectId} />
      </div>
    </div>
  );
}
