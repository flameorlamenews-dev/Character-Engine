-- Fix RLS policies to allow inserts (WITH CHECK was missing)
-- Run this in your Supabase SQL Editor

-- Drop the old write policies that only had USING (no WITH CHECK)
DROP POLICY IF EXISTS "Public write access" ON profiles;
DROP POLICY IF EXISTS "Public write access" ON projects;
DROP POLICY IF EXISTS "Public write access" ON manuscripts;
DROP POLICY IF EXISTS "Public write access" ON analysis_queue;
DROP POLICY IF EXISTS "Public write access" ON characters;
DROP POLICY IF EXISTS "Public write access" ON character_audience_mods;
DROP POLICY IF EXISTS "Public write access" ON character_conflict_profile;
DROP POLICY IF EXISTS "Public write access" ON character_emotion_map;
DROP POLICY IF EXISTS "Public write access" ON character_lexicon;
DROP POLICY IF EXISTS "Public write access" ON character_mottos;
DROP POLICY IF EXISTS "Public write access" ON character_style_rules;
DROP POLICY IF EXISTS "Public write access" ON character_timeline_entries;
DROP POLICY IF EXISTS "Public write access" ON character_traits;
DROP POLICY IF EXISTS "Public write access" ON character_voice_feedback;
DROP POLICY IF EXISTS "Public write access" ON character_voice_scales;
DROP POLICY IF EXISTS "Public write access" ON world_glossary;

-- Recreate with both USING and WITH CHECK
CREATE POLICY "Public write access" ON profiles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON projects FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON manuscripts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON analysis_queue FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON characters FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_audience_mods FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_conflict_profile FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_emotion_map FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_lexicon FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_mottos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_style_rules FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_timeline_entries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_traits FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_voice_feedback FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON character_voice_scales FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON world_glossary FOR ALL USING (true) WITH CHECK (true);
