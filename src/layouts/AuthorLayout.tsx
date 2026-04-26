import { useState, useEffect, useRef } from 'react';
import { TopBar } from '../components/topbar/TopBar';
import Dashboard from '../components/author/Dashboard';
import { ProjectsPage } from '../components/author/projects/ProjectsPage';
import { ProfileSettingsDialog } from '../components/author/profile/ProfileSettingsDialog';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from '../context/SessionContext';

// AuthorLayout — gates between the projects landing page and the per-project
// Dashboard.
//
// First-login flow: profile is created (or topped up) here, then the user is
// prompted to set their author name if `full_name` is empty. While the
// profile prompt is required, all other UI is hidden.
//
// Project flow: if no project is selected in session context, render the
// ProjectsPage landing. Once the user picks a project, set it on the session
// and render Dashboard. The TopBar's "Switch book" affordance clears the
// project from session, returning to the landing.
export function AuthorLayout() {
  const { userId, projectId, setUserContext } = useSession();
  const [authSession, setAuthSession] = useState<any>(null);
  const [profileReady, setProfileReady] = useState(false);
  const [needsProfile, setNeedsProfile] = useState(false);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Bootstrap token bumps each time auth changes. Async work tied to a stale
  // token is dropped before any setState, preventing user-A's profile read
  // from clobbering user-B's session after a fast user switch.
  const bootstrapTokenRef = useRef(0);

  // Re-runs whenever the auth session changes so that user A → user B
  // switches in the same browser tab re-bootstrap the profile and reset
  // the gating state. Without the deps, profileReady/needsProfile from the
  // previous user would silently persist for the next sign-in.
  useEffect(() => {
    let cancelled = false;
    const startBootstrap = (s: any) => {
      if (cancelled) return;
      setAuthSession(s);
      // Reset local gating state on every auth resolution so a user switch
      // doesn't leak prior session's profileReady/needsProfile.
      setProfileReady(false);
      setNeedsProfile(false);
      setProfileDialogOpen(false);
      if (s?.user?.id) {
        const myToken = ++bootstrapTokenRef.current;
        bootstrapProfile(s.user.id, s.user.email, myToken);
      } else {
        // Auth gone — invalidate any in-flight bootstrap.
        bootstrapTokenRef.current++;
      }
    };

    (supabase as any).auth.getSession().then(({ data }: any) => {
      startBootstrap(data?.session);
    });

    const { data: subData } = (supabase as any).auth.onAuthStateChange(
      (_event: string, s: any) => {
        startBootstrap(s);
      }
    ) || { data: null };

    return () => {
      cancelled = true;
      subData?.subscription?.unsubscribe?.();
    };
  }, []);

  const bootstrapProfile = async (uid: string, email: string, token: number) => {
    // Token check after every await — if a newer bootstrap kicked in (user
    // switch, sign-out), bail without writing any state for the stale user.
    const stillValid = () => token === bootstrapTokenRef.current;
    try {
      const { data: existing } = await (supabase as any)
        .from('profiles')
        .select('id, full_name')
        .eq('id', uid)
        .maybeSingle();
      if (!stillValid()) return;

      let fullName = '';
      if (!existing) {
        const { error: insertErr } = await (supabase as any)
          .from('profiles')
          .insert({ id: uid, email: email || '', full_name: '' });
        if (insertErr) console.error('Profile creation failed:', insertErr);
        if (!stillValid()) return;
      } else {
        fullName = existing.full_name || '';
      }

      // Hand userId off to session context so the rest of the app can use it.
      // projectId stays null until the user picks one on the ProjectsPage.
      setUserContext(uid, null);

      // First-login prompt: if full_name is empty, force the profile dialog
      // open. The dialog itself enforces required-mode dismiss-blocking.
      const trimmed = fullName.trim();
      if (!trimmed) {
        setNeedsProfile(true);
        setProfileDialogOpen(true);
      }

      setProfileReady(true);
    } catch (err: any) {
      if (!stillValid()) return;
      console.error('Setup failed:', err);
      setError(err.message || 'Failed to initialize');
    }
  };

  const handleProfileSaved = () => {
    setNeedsProfile(false);
    setProfileDialogOpen(false);
  };

  const handleSelectProject = (newProjectId: string) => {
    if (!userId) return;
    setUserContext(userId, newProjectId);
  };

  const handleBackToProjects = () => {
    if (!userId) return;
    setUserContext(userId, null);
  };

  if (error) {
    return (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 flex items-center justify-center bg-ce-body">
          <div className="text-center">
            <div className="text-red-400 text-sm mb-2">Setup error</div>
            <div className="text-ce-text-muted text-xs mb-4">{error}</div>
            <button
              onClick={() => { setError(null); window.location.reload(); }}
              className="px-4 py-2 text-xs bg-ce-accent text-white rounded"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!authSession || !profileReady) {
    return (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 flex items-center justify-center bg-ce-body">
          <div className="text-ce-text-muted text-sm animate-pulse">Loading…</div>
        </div>
      </div>
    );
  }

  // Required-mode profile dialog blocks all content behind it. We still
  // render the TopBar so the auth menu / sign-out is reachable.
  if (needsProfile && userId) {
    return (
      <div className="flex flex-col h-screen">
        <TopBar
          onOpenProfile={() => setProfileDialogOpen(true)}
          onBackToProjects={handleBackToProjects}
        />
        <div className="flex-1 flex items-center justify-center bg-ce-body">
          <div className="text-ce-text-muted text-sm">Set your author name to continue.</div>
        </div>
        <ProfileSettingsDialog
          open={profileDialogOpen}
          onOpenChange={setProfileDialogOpen}
          userId={userId}
          required
          onSaved={handleProfileSaved}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar
        onOpenProfile={() => setProfileDialogOpen(true)}
        onBackToProjects={projectId ? handleBackToProjects : undefined}
      />
      <div className="flex-1 overflow-auto author-panel">
        {!projectId ? (
          userId ? (
            <ProjectsPage userId={userId} onSelectProject={handleSelectProject} />
          ) : null
        ) : (
          <Dashboard session={authSession} projectId={projectId} />
        )}
      </div>
      {userId && (
        <ProfileSettingsDialog
          open={profileDialogOpen}
          onOpenChange={setProfileDialogOpen}
          userId={userId}
          onSaved={handleProfileSaved}
        />
      )}
    </div>
  );
}
