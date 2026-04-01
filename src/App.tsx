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

  useEffect(() => {
    // Check current session
    (supabase as any).auth.getSession().then(({ data }: any) => {
      setAuthSession(data?.session || null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = (supabase as any).auth.onAuthStateChange(
      (_event: string, session: any) => {
        setAuthSession(session);
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-ce-body flex items-center justify-center">
        <div className="text-ce-text-muted text-sm">Loading...</div>
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
