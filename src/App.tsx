import { SessionProvider, useSession } from './context/SessionContext';
import { InspectorProvider } from './context/InspectorContext';
import { ProducerLayout } from './layouts/ProducerLayout';
import { PlayerLayout } from './layouts/PlayerLayout';
import { AuthorTab } from './components/author/AuthorTab';
import { TopBar } from './components/topbar/TopBar';

function AppContent() {
  const { session } = useSession();

  if (session.viewMode === 'manuscript') {
    return (
      <div className="flex flex-col h-screen">
        <TopBar />
        <AuthorTab />
      </div>
    );
  }

  if (session.viewMode === 'player') {
    return <PlayerLayout />;
  }

  return <ProducerLayout />;
}

function App() {
  return (
    <SessionProvider>
      <InspectorProvider>
        <AppContent />
      </InspectorProvider>
    </SessionProvider>
  );
}

export default App;
