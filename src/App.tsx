import { useState, useEffect } from 'react';
import { SessionProvider, useSession } from './context/SessionContext';
import { InspectorProvider } from './context/InspectorContext';
import { ProducerLayout } from './layouts/ProducerLayout';
import { PlayerLayout } from './layouts/PlayerLayout';
import { AuthorLayout } from './layouts/AuthorLayout';
import { LoginPage } from './components/auth/LoginPage';
import { supabase } from '@/integrations/supabase/client';

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
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    let subscription: any = null;

    const init = async () => {
      try {
        const { data, error } = await (supabase as any).auth.getSession();
        if (error) {
          console.error('Auth session error:', error);
          setAuthError(error.message);
        }
        setAuthSession(data?.session || null);
      } catch (err: any) {
        console.error('Auth init failed:', err);
        setAuthError(err.message || 'Failed to connect to auth service');
      } finally {
        setLoading(false);
      }

      try {
        const result = (supabase as any).auth.onAuthStateChange(
          (_event: string, session: any) => {
            setAuthSession(session);
          }
        );
        subscription = result?.data?.subscription;
      } catch (err) {
        console.error('Auth listener failed:', err);
      }
    };

    init();

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-ce-body flex items-center justify-center">
        <div className="text-ce-text-muted text-sm">Loading...</div>
      </div>
    );
  }

  if (authError) {
    return (
      <div className="min-h-screen bg-ce-body flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-sm mb-2">Connection error</div>
          <div className="text-ce-text-muted text-xs mb-4">{authError}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 text-xs bg-ce-accent text-white rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!authSession) {
    return <LoginPage />;
  }

  return (
    <SessionProvider>
      <InspectorProvider>
        <AppContent />
      </InspectorProvider>
    </SessionProvider>
  );
}

export default App;
