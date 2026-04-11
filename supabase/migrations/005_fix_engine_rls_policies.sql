-- Fix RLS policies for engine tables (001_initial_schema)
-- Same issue as 003: missing WITH CHECK prevents inserts/upserts

-- Drop old write policies
DROP POLICY IF EXISTS "Public write access" ON books;
DROP POLICY IF EXISTS "Public write access" ON chapters;
DROP POLICY IF EXISTS "Public write access" ON temperament_grids;
DROP POLICY IF EXISTS "Public write access" ON emotional_baselines;
DROP POLICY IF EXISTS "Public write access" ON moral_structures;
DROP POLICY IF EXISTS "Public write access" ON desires;
DROP POLICY IF EXISTS "Public write access" ON general_traits;
DROP POLICY IF EXISTS "Public write access" ON conditional_traits;
DROP POLICY IF EXISTS "Public write access" ON emotion_drift;
DROP POLICY IF EXISTS "Public write access" ON surges;
DROP POLICY IF EXISTS "Public write access" ON silence_blocks;
DROP POLICY IF EXISTS "Public write access" ON trait_eq_points;
DROP POLICY IF EXISTS "Public write access" ON relationships;
DROP POLICY IF EXISTS "Public write access" ON influence_traits;
DROP POLICY IF EXISTS "Public write access" ON lingering_emotions;
DROP POLICY IF EXISTS "Public write access" ON lingering_emotion_chapters;
DROP POLICY IF EXISTS "Public write access" ON lingering_emotion_growth;
DROP POLICY IF EXISTS "Public write access" ON desire_pressure;
DROP POLICY IF EXISTS "Public write access" ON habit_formation;
DROP POLICY IF EXISTS "Public write access" ON influence_sliders;

-- Recreate with both USING and WITH CHECK
CREATE POLICY "Public write access" ON books FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON chapters FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON temperament_grids FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON emotional_baselines FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON moral_structures FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON desires FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON general_traits FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON conditional_traits FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON emotion_drift FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON surges FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON silence_blocks FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON trait_eq_points FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON relationships FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON influence_traits FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON lingering_emotions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON lingering_emotion_chapters FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON lingering_emotion_growth FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON desire_pressure FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON habit_formation FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public write access" ON influence_sliders FOR ALL USING (true) WITH CHECK (true);
