import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { BookOpen, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProjectCard from "@/components/projects/ProjectCard";
import NewProjectCard from "@/components/projects/NewProjectCard";

interface ProjectWithCounts {
  id: string;
  name: string;
  description: string | null;
  updated_at: string;
  chapterCount: number;
  characterCount: number;
}

const ProjectsPage = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectWithCounts[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    let mounted = true;

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setSession(session);
      if (!session) navigate("/", { replace: true });
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (mounted) {
        setSession(session);
        if (!session) navigate("/", { replace: true });
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    if (!session) return;
    fetchProjects();
  }, [session]);

  const fetchProjects = async () => {
    if (!session) return;
    setLoading(true);

    const { data: projectsData, error } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", session.user.id)
      .order("updated_at", { ascending: false });

    if (error) {
      toast({ title: "Error loading projects", description: error.message, variant: "destructive" });
      setLoading(false);
      return;
    }

    if (!projectsData || projectsData.length === 0) {
      // Auto-create a default project for new users
      const { data: newProject, error: createError } = await supabase
        .from("projects")
        .insert({ user_id: session.user.id, name: "My First Project" })
        .select()
        .single();

      if (createError) {
        toast({ title: "Error creating project", description: createError.message, variant: "destructive" });
        setLoading(false);
        return;
      }

      setProjects([{ ...newProject, chapterCount: 0, characterCount: 0 }]);
      setLoading(false);
      return;
    }

    // Fetch counts for each project
    const projectIds = projectsData.map(p => p.id);
    
    const [manuscriptsRes, charactersRes] = await Promise.all([
      supabase.from("manuscripts").select("id, project_id").in("project_id", projectIds),
      supabase.from("characters").select("id, project_id").in("project_id", projectIds),
    ]);

    const chapterCounts: Record<string, number> = {};
    const characterCounts: Record<string, number> = {};

    (manuscriptsRes.data || []).forEach(m => {
      if (m.project_id) chapterCounts[m.project_id] = (chapterCounts[m.project_id] || 0) + 1;
    });
    (charactersRes.data || []).forEach(c => {
      if (c.project_id) characterCounts[c.project_id] = (characterCounts[c.project_id] || 0) + 1;
    });

    setProjects(projectsData.map(p => ({
      ...p,
      chapterCount: chapterCounts[p.id] || 0,
      characterCount: characterCounts[p.id] || 0,
    })));
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (!session || loading) return null;

  // Free users: show 2 grayed-out placeholder cards
  const placeholderCount = Math.max(0, 2 - (projects.length - 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-serif font-semibold">Character Voice</h1>
          </div>
          <Button variant="outline" onClick={handleSignOut} className="gap-2">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-serif font-bold">Your Projects</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Select a project to work on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              chapterCount={project.chapterCount}
              characterCount={project.characterCount}
              onClick={() => navigate(`/projects/${project.id}/manuscripts`)}
            />
          ))}
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <NewProjectCard key={`placeholder-${i}`} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
