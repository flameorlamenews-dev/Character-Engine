import { TopBar } from '../components/topbar/TopBar';
import Dashboard from '../components/author/Dashboard';

export function AuthorLayout() {
  // Mock session for the Lovable Dashboard
  // These IDs match the seed data in 002_author_tables.sql
  const mockSession = { user: { id: '00000000-0000-0000-0000-000000000001', email: 'author@local' } };
  const mockProjectId = '00000000-0000-0000-0000-000000000002';

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex-1 overflow-hidden author-panel">
        <Dashboard session={mockSession} projectId={mockProjectId} />
      </div>
    </div>
  );
}
