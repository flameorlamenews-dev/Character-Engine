import { useState, useEffect } from 'react';
import { SessionProvider, useSession } from './context/SessionContext';
import { InspectorProvider } from './context/InspectorContext';
import { ProducerLayout } from './layouts/ProducerLayout';
import { PlayerLayout } from './layouts/PlayerLayout';
import { AuthorLayout } from './layouts/AuthorLayout';
import { LoginPage } from './components/auth/LoginPage';
import { Toaster } from './components/ui/sonner';
import { supabase } from '@/integrations/supabase/client';

function AuthSync({ authSession }: { authSession: any }) {
  const { setUserContext, userId: currentUserId, projectId } = useSession();

  useEffect(() => {
    if (!authSession?.user?.id) return;
    const userId = authSession.user.id;
    // Sync userId on auth change, but DO NOT auto-pick a project. Project
    // selection is the user's decision via the ProjectsPage landing.
    // Preserve any already-selected project if it belongs to this user.
    if (currentUserId === userId) return;
    // undefined preserves whatever projectId localStorage hydrated. If the
    // session is brand new (no localStorage value), projectId stays null
    // and the user lands on ProjectsPage as expected.
    setUserContext(userId, undefined);
    // Suppress lint: projectId intentionally not in deps — we only want this
    // to fire on auth change, not on user-driven project switches.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authSession?.user?.id]);

  // Reference to satisfy TS that projectId is read; never actually used here.
  void projectId;

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

  // Toaster mounted ONCE outside the auth branches so it isn't unmounted on
  // loading→login→authed transitions. Without this mount at all, every
  // toast() call silently no-ops — which is what hid "Claude API key not
  // configured" errors on Analyze.
  const body = loading ? (
    <div className="min-h-screen bg-ce-body flex items-center justify-center">
      <div className="text-ce-text-muted text-sm animate-pulse">Loading...</div>
    </div>
  ) : !authSession ? (
    <LoginPage />
  ) : (
    <SessionProvider>
      <AuthSync authSession={authSession} />
      <InspectorProvider>
        <AppContent />
      </InspectorProvider>
    </SessionProvider>
  );

  return (
    <>
      {body}
      <Toaster />
    </>
  );
}

export default App;
