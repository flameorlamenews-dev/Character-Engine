-- =============================================
-- CHARACTER ENGINE — AUTHOR / LOVABLE TABLES
-- Generated from src/integrations/supabase/types.ts
-- =============================================

-- =============================================
-- 1. PROFILES (no FK dependencies)
-- =============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 2. PROJECTS (depends on profiles)
-- =============================================
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  name TEXT NOT NULL DEFAULT '',
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 3. MANUSCRIPTS (depends on profiles, projects)
-- =============================================
CREATE TABLE IF NOT EXISTS manuscripts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  project_id UUID REFERENCES projects(id),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  file_path TEXT,
  chapter_number INTEGER,
  chapter_title TEXT,
  analysis_progress INTEGER,
  analysis_results JSONB,
  processing_progress INTEGER,
  queue_position INTEGER,
  reader_reactions JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 4. CHARACTERS (depends on profiles, projects, manuscripts)
--    NOTE: drops the old 001 characters table reference;
--    uses IF NOT EXISTS so it won't collide if already present.
-- =============================================
CREATE TABLE IF NOT EXISTS characters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  project_id UUID REFERENCES projects(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  name TEXT NOT NULL,
  description TEXT,
  role TEXT,
  source_type TEXT,
  author_edited BOOLEAN,
  blocked BOOLEAN,
  aggression_level REAL,
  brashness_scale REAL,
  sophistication_scale REAL,
  free_indirect_discourse_level REAL,
  internal_external_filter REAL,
  ai_version_id TEXT,
  mottos TEXT[],
  personality_traits TEXT[],
  speech_patterns JSONB,
  timeline_data JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 5. ANALYSIS_QUEUE (depends on manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS analysis_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  manuscript_id UUID NOT NULL REFERENCES manuscripts(id),
  status TEXT NOT NULL DEFAULT 'pending',
  priority INTEGER NOT NULL DEFAULT 0,
  retry_count INTEGER NOT NULL DEFAULT 0,
  error_message TEXT,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 6. CHARACTER_AUDIENCE_MODS (depends on characters, manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS character_audience_mods (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID NOT NULL REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  audience_tag TEXT NOT NULL,
  warmth REAL,
  brevity REAL,
  deference REAL,
  defiance REAL,
  source_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 7. CHARACTER_CONFLICT_PROFILE (depends on characters, manuscripts)
--    character_id is the PK (one-to-one with characters)
-- =============================================
CREATE TABLE IF NOT EXISTS character_conflict_profile (
  character_id UUID PRIMARY KEY REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  conflict_strategy TEXT,
  morality_axis TEXT,
  truth_bias REAL,
  source_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 8. CHARACTER_EMOTION_MAP (depends on characters, manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS character_emotion_map (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID NOT NULL REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  trigger TEXT NOT NULL,
  voice_shift TEXT NOT NULL,
  source_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 9. CHARACTER_LEXICON (depends on characters, manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS character_lexicon (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID NOT NULL REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  phrase TEXT NOT NULL,
  meaning TEXT,
  source_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 10. CHARACTER_MOTTOS (depends on characters, manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS character_mottos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID NOT NULL REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  motto TEXT NOT NULL,
  source_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 11. CHARACTER_STYLE_RULES (depends on characters, manuscripts)
--     character_id is the PK (one-to-one with characters)
-- =============================================
CREATE TABLE IF NOT EXISTS character_style_rules (
  character_id UUID PRIMARY KEY REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  cadence TEXT,
  emphasis_method TEXT,
  forbidden_patterns TEXT,
  lexical_range TEXT,
  punctuation_habits TEXT,
  sentence_rhythm TEXT,
  world_term_rules TEXT,
  source_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 12. CHARACTER_TIMELINE_ENTRIES (depends on characters, manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS character_timeline_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  character_id UUID NOT NULL REFERENCES characters(id),
  manuscript_id UUID NOT NULL REFERENCES manuscripts(id),
  chapter_number INTEGER NOT NULL,
  chapter_title TEXT,
  source_type TEXT NOT NULL DEFAULT 'ai',
  analysis_text TEXT,
  profile_text TEXT,
  master_summary TEXT,
  emotional_state TEXT,
  sentiment TEXT,
  relationships TEXT,
  views_by_others TEXT,
  views_of_others TEXT,
  dialogue_patterns TEXT[],
  external_dialogue TEXT[],
  internal_dialogue TEXT[],
  traits TEXT[],
  flags JSONB,
  voice_scales JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 13. CHARACTER_TRAITS (depends on characters, manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS character_traits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID NOT NULL REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  trait TEXT NOT NULL,
  source_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 14. CHARACTER_VOICE_FEEDBACK (depends on characters, manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS character_voice_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID NOT NULL REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  feedback_text TEXT NOT NULL,
  accuracy_score REAL,
  divergence_areas JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 15. CHARACTER_VOICE_SCALES (depends on characters, manuscripts)
--     character_id is the PK (one-to-one with characters)
-- =============================================
CREATE TABLE IF NOT EXISTS character_voice_scales (
  character_id UUID PRIMARY KEY REFERENCES characters(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  formality REAL,
  humor_dryness REAL,
  empathy REAL,
  aggression REAL,
  brashness REAL,
  sophistication REAL,
  introspection REAL,
  masking REAL,
  fid_level REAL,
  internal_external REAL,
  subtext_density REAL,
  source_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- 16. WORLD_GLOSSARY (depends on projects, manuscripts)
-- =============================================
CREATE TABLE IF NOT EXISTS world_glossary (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  project_id UUID REFERENCES projects(id),
  manuscript_id UUID REFERENCES manuscripts(id),
  word TEXT NOT NULL,
  word_type TEXT NOT NULL,
  definition TEXT NOT NULL,
  category TEXT,
  source_type TEXT NOT NULL DEFAULT 'manual',
  usage_notes TEXT,
  ai_interpretation TEXT,
  curse_harshness REAL,
  locked BOOLEAN,
  appears_in INTEGER[],
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- ENABLE ROW LEVEL SECURITY
-- =============================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE manuscripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE analysis_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_audience_mods ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_conflict_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_emotion_map ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_lexicon ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_mottos ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_style_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_timeline_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_traits ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_voice_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_voice_scales ENABLE ROW LEVEL SECURITY;
ALTER TABLE world_glossary ENABLE ROW LEVEL SECURITY;

-- =============================================
-- PUBLIC READ POLICIES
-- =============================================
CREATE POLICY "Public read access" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON manuscripts FOR SELECT USING (true);
CREATE POLICY "Public read access" ON analysis_queue FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_audience_mods FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_conflict_profile FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_emotion_map FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_lexicon FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_mottos FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_style_rules FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_timeline_entries FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_traits FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_voice_feedback FOR SELECT USING (true);
CREATE POLICY "Public read access" ON character_voice_scales FOR SELECT USING (true);
CREATE POLICY "Public read access" ON world_glossary FOR SELECT USING (true);

-- =============================================
-- PUBLIC WRITE POLICIES
-- =============================================
CREATE POLICY "Public write access" ON profiles FOR ALL USING (true);
CREATE POLICY "Public write access" ON projects FOR ALL USING (true);
CREATE POLICY "Public write access" ON manuscripts FOR ALL USING (true);
CREATE POLICY "Public write access" ON analysis_queue FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_audience_mods FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_conflict_profile FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_emotion_map FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_lexicon FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_mottos FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_style_rules FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_timeline_entries FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_traits FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_voice_feedback FOR ALL USING (true);
CREATE POLICY "Public write access" ON character_voice_scales FOR ALL USING (true);
CREATE POLICY "Public write access" ON world_glossary FOR ALL USING (true);

-- =============================================
-- SEED DATA FOR LOCAL DEVELOPMENT
-- =============================================
INSERT INTO profiles (id, email, full_name) VALUES ('00000000-0000-0000-0000-000000000001', 'author@local', 'Local Author') ON CONFLICT DO NOTHING;
INSERT INTO projects (id, user_id, name, description) VALUES ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Default Project', 'Local development project') ON CONFLICT DO NOTHING;
