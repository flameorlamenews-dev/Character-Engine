import { SessionProvider, useSession } from './context/SessionContext';
import { InspectorProvider } from './context/InspectorContext';
import { ProducerLayout } from './layouts/ProducerLayout';
import { PlayerLayout } from './layouts/PlayerLayout';

function AppContent() {
  const { session } = useSession();

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
