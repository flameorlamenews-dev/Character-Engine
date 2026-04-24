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
  const { setUserContext } = useSession();

  useEffect(() => {
    if (!authSession?.user?.id) return;
    const userId = authSession.user.id;

    // Fetch the user's project and sync to session context
    (supabase as any).from('projects').select('id').eq('user_id', userId).then(({ data }: any) => {
      if (data && data.length > 0) {
        setUserContext(userId, data[0].id);
      }
    });
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
