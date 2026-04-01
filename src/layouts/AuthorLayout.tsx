import { TopBar } from '../components/topbar/TopBar';
import Dashboard from '../components/author/Dashboard';

export function AuthorLayout() {
  // Mock session for the Lovable Dashboard
  const mockSession = { user: { id: 'local-user', email: 'author@local' } };
  const mockProjectId = 'default-project';

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex-1 overflow-hidden author-panel">
        <Dashboard session={mockSession} projectId={mockProjectId} />
      </div>
    </div>
  );
}
