import { useState, useEffect } from 'react';
import { TopBar } from '../components/topbar/TopBar';
import Dashboard from '../components/author/Dashboard';
import { supabase } from '@/integrations/supabase/client';

export function AuthorLayout() {
  const [session, setSession] = useState<any>(null);
  const [projectId, setProjectId] = useState<string | null>(null);

  useEffect(() => {
    // Get the real auth session
    (supabase as any).auth.getSession().then(({ data }: any) => {
      setSession(data?.session);
      if (data?.session?.user?.id) {
        ensureProject(data.session.user.id);
      }
    });
  }, []);

  const ensureProject = async (userId: string) => {
    // Check if user has a project, create one if not
    const { data: projects } = await (supabase as any)
      .from('projects')
      .select('id')
      .eq('user_id', userId)
      .limit(1);

    if (projects && projects.length > 0) {
      setProjectId(projects[0].id);
    } else {
      // Create a default project
      const { data: newProject } = await (supabase as any)
        .from('projects')
        .insert({ name: 'My Project', description: 'Default project', user_id: userId })
        .select('id')
        .single();

      if (newProject) {
        setProjectId(newProject.id);
      }
    }
  };

  if (!session || !projectId) {
    return (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 flex items-center justify-center bg-ce-body">
          <div className="text-ce-text-muted text-sm">Loading project...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex-1 overflow-hidden author-panel">
        <Dashboard session={session} projectId={projectId} />
      </div>
    </div>
  );
}
