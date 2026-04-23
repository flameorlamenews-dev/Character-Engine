-- =============================================
-- CHARACTER ENGINE — Psychology tables retrofit
-- =============================================
-- Migration 001 was authored in Apr 2026 but never applied to live Supabase.
-- Pass 2 of the analyzer has been silently failing for weeks because these
-- 18 tables didn't exist. This migration creates them defensively (IF NOT
-- EXISTS) and mirrors the permissive RLS pattern used by migration 002.
--
-- Flame pasted an inline version of this SQL on 2026-04-23 after the Drop 1
-- verification query returned zero rows. Committing it to the repo so the
-- schema history is truthful.
--
-- NOTE: books/chapters/characters from original 001 are intentionally omitted.
-- Migration 002 already created `characters` with a different (multi-tenant)
-- schema, and books/chapters were not used by the live engine writer.

CREATE TABLE IF NOT EXISTS temperament_grids (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
  patience INTEGER DEFAULT 37,
  impulsiveness INTEGER DEFAULT 37,
  confrontational_tendency INTEGER DEFAULT 37,
  agreeableness INTEGER DEFAULT 37,
  emotional_containment INTEGER DEFAULT 37,
  risk_appetite INTEGER DEFAULT 37,
  curiosity INTEGER DEFAULT 37,
  pride_sensitivity INTEGER DEFAULT 37,
  shame_sensitivity INTEGER DEFAULT 37,
  empathy_baseline INTEGER DEFAULT 37,
  dominance_vs_deference INTEGER DEFAULT 37,
  adaptability_vs_rigidity INTEGER DEFAULT 37
);

CREATE TABLE IF NOT EXISTS emotional_baselines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
  joy INTEGER DEFAULT 37,
  sadness INTEGER DEFAULT 37,
  anger INTEGER DEFAULT 37,
  fear INTEGER DEFAULT 37,
  disgust INTEGER DEFAULT 37,
  surprise INTEGER DEFAULT 37,
  trust INTEGER DEFAULT 37,
  anticipation INTEGER DEFAULT 37
);

CREATE TABLE IF NOT EXISTS moral_structures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
  primary_driver TEXT DEFAULT 'fairness',
  moral_rigidity INTEGER DEFAULT 37,
  guilt_sensitivity INTEGER DEFAULT 37,
  justification_tendency INTEGER DEFAULT 37
);

CREATE TABLE IF NOT EXISTS desires (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  score INTEGER DEFAULT 37,
  rank INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS general_traits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
  stubbornness INTEGER DEFAULT 37,
  warmth INTEGER DEFAULT 37,
  skepticism INTEGER DEFAULT 37,
  humor_style INTEGER DEFAULT 37,
  competitiveness INTEGER DEFAULT 37,
  orderliness INTEGER DEFAULT 37,
  compassion INTEGER DEFAULT 37,
  reservedness INTEGER DEFAULT 37
);

CREATE TABLE IF NOT EXISTS conditional_traits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  trait_label TEXT NOT NULL,
  trigger_condition TEXT NOT NULL,
  target_scope TEXT NOT NULL,
  intensity_score INTEGER DEFAULT 37,
  override_strength INTEGER DEFAULT 37
);

CREATE TABLE IF NOT EXISTS emotion_drift (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  emotion_type TEXT NOT NULL,
  chapter_index INTEGER NOT NULL,
  value INTEGER NOT NULL,
  UNIQUE(character_id, emotion_type, chapter_index)
);

CREATE TABLE IF NOT EXISTS surges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  emotion_type TEXT NOT NULL,
  chapter_index INTEGER NOT NULL,
  scene_position REAL NOT NULL,
  peak_intensity INTEGER NOT NULL,
  decay_rate REAL DEFAULT 0.3,
  duration REAL DEFAULT 0.3,
  event_type TEXT,
  trigger_subject TEXT,
  trigger_source TEXT,
  trigger_domain TEXT,
  stakes INTEGER DEFAULT 0,
  immediacy INTEGER DEFAULT 0,
  certainty INTEGER DEFAULT 0,
  description TEXT
);

CREATE TABLE IF NOT EXISTS silence_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  emotion_type TEXT NOT NULL,
  start_chapter INTEGER NOT NULL,
  end_chapter INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS trait_eq_points (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  emotion_type TEXT NOT NULL,
  trait_name TEXT NOT NULL,
  label TEXT NOT NULL,
  chapter_position REAL NOT NULL,
  boost_cut INTEGER NOT NULL,
  trait_score INTEGER DEFAULT 37
);

CREATE TABLE IF NOT EXISTS relationships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  target_name TEXT NOT NULL,
  trust INTEGER DEFAULT 0,
  threat INTEGER DEFAULT 0,
  admiration INTEGER DEFAULT 0,
  envy INTEGER DEFAULT 0,
  suspicion INTEGER DEFAULT 0,
  perception_care INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS influence_traits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  impact INTEGER DEFAULT 37,
  effect TEXT
);

CREATE TABLE IF NOT EXISTS lingering_emotions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  emotion_type TEXT NOT NULL,
  event TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS lingering_emotion_chapters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lingering_emotion_id UUID REFERENCES lingering_emotions(id) ON DELETE CASCADE,
  chapter_index INTEGER NOT NULL,
  intensity INTEGER NOT NULL,
  UNIQUE(lingering_emotion_id, chapter_index)
);

CREATE TABLE IF NOT EXISTS lingering_emotion_growth (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lingering_emotion_id UUID REFERENCES lingering_emotions(id) ON DELETE CASCADE,
  chapter INTEGER NOT NULL,
  growth_type TEXT NOT NULL,
  description TEXT,
  intensity_delta INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS desire_pressure (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  pressure INTEGER DEFAULT 37,
  effect TEXT,
  revealed_at_chapter INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS habit_formation (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  frequency INTEGER DEFAULT 37,
  indicates TEXT
);

CREATE TABLE IF NOT EXISTS influence_sliders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
  moral_override INTEGER DEFAULT 37,
  impression_susceptibility INTEGER DEFAULT 37,
  mask_strength INTEGER DEFAULT 37,
  personality_drift INTEGER DEFAULT 37
);

-- Enable RLS on all 18 tables
ALTER TABLE temperament_grids ENABLE ROW LEVEL SECURITY;
ALTER TABLE emotional_baselines ENABLE ROW LEVEL SECURITY;
ALTER TABLE moral_structures ENABLE ROW LEVEL SECURITY;
ALTER TABLE desires ENABLE ROW LEVEL SECURITY;
ALTER TABLE general_traits ENABLE ROW LEVEL SECURITY;
ALTER TABLE conditional_traits ENABLE ROW LEVEL SECURITY;
ALTER TABLE emotion_drift ENABLE ROW LEVEL SECURITY;
ALTER TABLE surges ENABLE ROW LEVEL SECURITY;
ALTER TABLE silence_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE trait_eq_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE relationships ENABLE ROW LEVEL SECURITY;
ALTER TABLE influence_traits ENABLE ROW LEVEL SECURITY;
ALTER TABLE lingering_emotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE lingering_emotion_chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE lingering_emotion_growth ENABLE ROW LEVEL SECURITY;
ALTER TABLE desire_pressure ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_formation ENABLE ROW LEVEL SECURITY;
ALTER TABLE influence_sliders ENABLE ROW LEVEL SECURITY;

-- Permissive policies mirroring migration 002's pattern
DROP POLICY IF EXISTS "Public read access" ON temperament_grids;
CREATE POLICY "Public read access" ON temperament_grids FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON temperament_grids;
CREATE POLICY "Public write access" ON temperament_grids FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON emotional_baselines;
CREATE POLICY "Public read access" ON emotional_baselines FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON emotional_baselines;
CREATE POLICY "Public write access" ON emotional_baselines FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON moral_structures;
CREATE POLICY "Public read access" ON moral_structures FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON moral_structures;
CREATE POLICY "Public write access" ON moral_structures FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON desires;
CREATE POLICY "Public read access" ON desires FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON desires;
CREATE POLICY "Public write access" ON desires FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON general_traits;
CREATE POLICY "Public read access" ON general_traits FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON general_traits;
CREATE POLICY "Public write access" ON general_traits FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON conditional_traits;
CREATE POLICY "Public read access" ON conditional_traits FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON conditional_traits;
CREATE POLICY "Public write access" ON conditional_traits FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON emotion_drift;
CREATE POLICY "Public read access" ON emotion_drift FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON emotion_drift;
CREATE POLICY "Public write access" ON emotion_drift FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON surges;
CREATE POLICY "Public read access" ON surges FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON surges;
CREATE POLICY "Public write access" ON surges FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON silence_blocks;
CREATE POLICY "Public read access" ON silence_blocks FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON silence_blocks;
CREATE POLICY "Public write access" ON silence_blocks FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON trait_eq_points;
CREATE POLICY "Public read access" ON trait_eq_points FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON trait_eq_points;
CREATE POLICY "Public write access" ON trait_eq_points FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON relationships;
CREATE POLICY "Public read access" ON relationships FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON relationships;
CREATE POLICY "Public write access" ON relationships FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON influence_traits;
CREATE POLICY "Public read access" ON influence_traits FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON influence_traits;
CREATE POLICY "Public write access" ON influence_traits FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON lingering_emotions;
CREATE POLICY "Public read access" ON lingering_emotions FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON lingering_emotions;
CREATE POLICY "Public write access" ON lingering_emotions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON lingering_emotion_chapters;
CREATE POLICY "Public read access" ON lingering_emotion_chapters FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON lingering_emotion_chapters;
CREATE POLICY "Public write access" ON lingering_emotion_chapters FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON lingering_emotion_growth;
CREATE POLICY "Public read access" ON lingering_emotion_growth FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON lingering_emotion_growth;
CREATE POLICY "Public write access" ON lingering_emotion_growth FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON desire_pressure;
CREATE POLICY "Public read access" ON desire_pressure FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON desire_pressure;
CREATE POLICY "Public write access" ON desire_pressure FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON habit_formation;
CREATE POLICY "Public read access" ON habit_formation FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON habit_formation;
CREATE POLICY "Public write access" ON habit_formation FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read access" ON influence_sliders;
CREATE POLICY "Public read access" ON influence_sliders FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON influence_sliders;
CREATE POLICY "Public write access" ON influence_sliders FOR ALL USING (true) WITH CHECK (true);
