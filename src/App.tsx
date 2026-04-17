import { useState, useEffect } from 'react';
import { SessionProvider, useSession } from './context/SessionContext';
import { InspectorProvider } from './context/InspectorContext';
import { ProducerLayout } from './layouts/ProducerLayout';
import { PlayerLayout } from './layouts/PlayerLayout';
import { AuthorLayout } from './layouts/AuthorLayout';
import { LoginPage } from './components/auth/LoginPage';
import { supabase } from '@/integrations/supabase/client';

function AuthSync({ authSession }: { authSession: any }) {
  const { setUserContext } = useSession();

  useEffect(() => {
    if (!authSession?.user?.id) return;
    const userId = authSession.user.id;
    let cancelled = false;

    // Fetch or create the user's project, then sync to session context.
    // Previously, if the user had no projects yet, setUserContext was never
    // called and the Producer/Player TopBar was stuck with userId=null even
    // after AuthorLayout later created a project.
    (async () => {
      try {
        const { data: projects } = await (supabase as any)
          .from('projects').select('id').eq('user_id', userId);
        if (cancelled) return;

        if (projects && projects.length > 0) {
          setUserContext(userId, projects[0].id);
          return;
        }

        // No project yet. Before we insert one, make sure the profiles row
        // exists — projects.user_id is an FK to profiles(id), and if the
        // Postgres signup trigger hasn't run yet the insert would blow up
        // with a constraint violation.
        const { data: profile } = await (supabase as any)
          .from('profiles').select('id').eq('id', userId).maybeSingle();
        if (cancelled) return;
        if (!profile) {
          const email = authSession?.user?.email || '';
          await (supabase as any).from('profiles').insert({
            id: userId, email, full_name: '',
          });
          if (cancelled) return;
        }

        // Create the default project. Use maybeSingle so an unexpected zero
        // rows (e.g. RLS blocked the insert) surfaces cleanly instead of
        // throwing from .single() and crashing the whole auth flow.
        const { data: newProject, error: insertErr } = await (supabase as any)
          .from('projects')
          .insert({ name: 'My Project', description: 'Default project', user_id: userId })
          .select('id')
          .maybeSingle();
        if (cancelled) return;
        if (insertErr) {
          console.error('AuthSync: default-project insert failed', insertErr.message);
          setUserContext(userId, '');
          return;
        }
        if (newProject?.id) {
          setUserContext(userId, newProject.id);
        } else {
          // Last-resort: set userId with empty projectId so TopBar at least
          // knows who's logged in. AuthorLayout will try to recover.
          setUserContext(userId, '');
        }
      } catch (err: any) {
        if (cancelled) return;
        console.error('AuthSync bootstrap failed:', err?.message || err);
        setUserContext(userId, '');
      }
    })();

    return () => { cancelled = true; };
  }, [authSession?.user?.id]);

  return null;
}

function AppContent() {
  const { session } = useSession();

  if (session.viewMode === 'player') {
    return <PlayerLayout />;
  }

  if (session.viewMode === 'author') {
    return <AuthorLayout />;
  }

  return <ProducerLayout />;
}

function App() {
  const [authSession, setAuthSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (supabase as any).auth.getSession()
      .then(({ data }: any) => {
        if (!cancelled) {
          setAuthSession(data?.session || null);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    const { data } = (supabase as any).auth.onAuthStateChange(
      (_event: string, session: any) => {
        if (!cancelled) setAuthSession(session);
      }
    ) || { data: null };

    return () => {
      cancelled = true;
      data?.subscription?.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-ce-body flex items-center justify-center">
        <div className="text-ce-text-muted text-sm animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!authSession) {
    return <LoginPage />;
  }

  return (
    <SessionProvider>
      <AuthSync authSession={authSession} />
      <InspectorProvider>
        <AppContent />
      </InspectorProvider>
    </SessionProvider>
  );
}

export default App;
