-- =============================================
-- SEED DATA: Kaladin Stormblessed
-- =============================================

-- Book
INSERT INTO books (id, title, series_name, series_order) VALUES
  ('00000000-0000-0000-0000-000000000001', 'The Way of Kings', 'The Stormlight Archive', 1);

-- Chapters
INSERT INTO chapters (book_id, index, title, character_present) VALUES
  ('00000000-0000-0000-0000-000000000001', 0, 'Prelude', false),
  ('00000000-0000-0000-0000-000000000001', 1, 'Stormblessed', true),
  ('00000000-0000-0000-0000-000000000001', 2, 'Honor is Dead', true),
  ('00000000-0000-0000-0000-000000000001', 3, 'The Bridgeman', true),
  ('00000000-0000-0000-0000-000000000001', 4, 'The Shattered Plains', true),
  ('00000000-0000-0000-0000-000000000001', 5, 'Interlude: Szeth', false),
  ('00000000-0000-0000-0000-000000000001', 6, 'Bridge Four', true),
  ('00000000-0000-0000-0000-000000000001', 7, 'Highstorms', true),
  ('00000000-0000-0000-0000-000000000001', 8, 'The Tower', true),
  ('00000000-0000-0000-0000-000000000001', 9, 'Unite Them', true);

-- Character
INSERT INTO characters (id, book_id, name, avatar_color) VALUES
  ('00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'Kaladin Stormblessed', '#3b6cbf');

-- Temperament Grid
INSERT INTO temperament_grids (character_id, patience, impulsiveness, confrontational_tendency, agreeableness, emotional_containment, risk_appetite, curiosity, pride_sensitivity, shame_sensitivity, empathy_baseline, dominance_vs_deference, adaptability_vs_rigidity) VALUES
  ('00000000-0000-0000-0000-000000000010', 38, 42, 55, 30, 28, 60, 35, 52, 48, 62, 55, 40);

-- Emotional Baseline
INSERT INTO emotional_baselines (character_id, joy, sadness, anger, fear, disgust, surprise, trust, anticipation) VALUES
  ('00000000-0000-0000-0000-000000000010', 18, 42, 35, 22, 28, 12, 15, 25);

-- Moral Structure
INSERT INTO moral_structures (character_id, primary_driver, moral_rigidity, guilt_sensitivity, justification_tendency) VALUES
  ('00000000-0000-0000-0000-000000000010', 'protection', 68, 72, 25);

-- Desires
INSERT INTO desires (character_id, name, score, rank) VALUES
  ('00000000-0000-0000-0000-000000000010', 'Protecting Others', 72, 1),
  ('00000000-0000-0000-0000-000000000010', 'Honor', 65, 2),
  ('00000000-0000-0000-0000-000000000010', 'Fairness', 60, 3),
  ('00000000-0000-0000-0000-000000000010', 'Acceptance', 48, 4),
  ('00000000-0000-0000-0000-000000000010', 'Independence', 45, 5),
  ('00000000-0000-0000-0000-000000000010', 'Self-Preservation', 20, 6);

-- General Traits
INSERT INTO general_traits (character_id, stubbornness, warmth, skepticism, humor_style, competitiveness, orderliness, compassion, reservedness) VALUES
  ('00000000-0000-0000-0000-000000000010', 65, 40, 58, 22, 45, 50, 60, 55);

-- Conditional Traits
INSERT INTO conditional_traits (character_id, trait_label, trigger_condition, target_scope, intensity_score, override_strength) VALUES
  ('00000000-0000-0000-0000-000000000010', 'Protective Rage', 'Bridge Four member threatened', 'Bridge Four', 70, 68),
  ('00000000-0000-0000-0000-000000000010', 'Authority Defiance', 'Lighteyes abusing darkeyes', 'Lighteyes authority', 62, 55);

-- Emotion Drift Lines (per chapter per emotion)
-- Joy
INSERT INTO emotion_drift (character_id, emotion_type, chapter_index, value) VALUES
  ('00000000-0000-0000-0000-000000000010', 'joy', 0, 18), ('00000000-0000-0000-0000-000000000010', 'joy', 1, 15), ('00000000-0000-0000-0000-000000000010', 'joy', 2, 12), ('00000000-0000-0000-0000-000000000010', 'joy', 3, 14), ('00000000-0000-0000-0000-000000000010', 'joy', 4, 16), ('00000000-0000-0000-0000-000000000010', 'joy', 5, 18), ('00000000-0000-0000-0000-000000000010', 'joy', 6, 22), ('00000000-0000-0000-0000-000000000010', 'joy', 7, 28), ('00000000-0000-0000-0000-000000000010', 'joy', 8, 32), ('00000000-0000-0000-0000-000000000010', 'joy', 9, 38);
-- Sadness
INSERT INTO emotion_drift (character_id, emotion_type, chapter_index, value) VALUES
  ('00000000-0000-0000-0000-000000000010', 'sadness', 0, 42), ('00000000-0000-0000-0000-000000000010', 'sadness', 1, 48), ('00000000-0000-0000-0000-000000000010', 'sadness', 2, 52), ('00000000-0000-0000-0000-000000000010', 'sadness', 3, 50), ('00000000-0000-0000-0000-000000000010', 'sadness', 4, 45), ('00000000-0000-0000-0000-000000000010', 'sadness', 5, 42), ('00000000-0000-0000-0000-000000000010', 'sadness', 6, 38), ('00000000-0000-0000-0000-000000000010', 'sadness', 7, 35), ('00000000-0000-0000-0000-000000000010', 'sadness', 8, 30), ('00000000-0000-0000-0000-000000000010', 'sadness', 9, 25);
-- Anger
INSERT INTO emotion_drift (character_id, emotion_type, chapter_index, value) VALUES
  ('00000000-0000-0000-0000-000000000010', 'anger', 0, 35), ('00000000-0000-0000-0000-000000000010', 'anger', 1, 40), ('00000000-0000-0000-0000-000000000010', 'anger', 2, 48), ('00000000-0000-0000-0000-000000000010', 'anger', 3, 52), ('00000000-0000-0000-0000-000000000010', 'anger', 4, 50), ('00000000-0000-0000-0000-000000000010', 'anger', 5, 35), ('00000000-0000-0000-0000-000000000010', 'anger', 6, 42), ('00000000-0000-0000-0000-000000000010', 'anger', 7, 38), ('00000000-0000-0000-0000-000000000010', 'anger', 8, 45), ('00000000-0000-0000-0000-000000000010', 'anger', 9, 40);
-- Fear
INSERT INTO emotion_drift (character_id, emotion_type, chapter_index, value) VALUES
  ('00000000-0000-0000-0000-000000000010', 'fear', 0, 22), ('00000000-0000-0000-0000-000000000010', 'fear', 1, 28), ('00000000-0000-0000-0000-000000000010', 'fear', 2, 35), ('00000000-0000-0000-0000-000000000010', 'fear', 3, 30), ('00000000-0000-0000-0000-000000000010', 'fear', 4, 25), ('00000000-0000-0000-0000-000000000010', 'fear', 5, 22), ('00000000-0000-0000-0000-000000000010', 'fear', 6, 20), ('00000000-0000-0000-0000-000000000010', 'fear', 7, 18), ('00000000-0000-0000-0000-000000000010', 'fear', 8, 22), ('00000000-0000-0000-0000-000000000010', 'fear', 9, 15);
-- Disgust
INSERT INTO emotion_drift (character_id, emotion_type, chapter_index, value) VALUES
  ('00000000-0000-0000-0000-000000000010', 'disgust', 0, 28), ('00000000-0000-0000-0000-000000000010', 'disgust', 1, 32), ('00000000-0000-0000-0000-000000000010', 'disgust', 2, 38), ('00000000-0000-0000-0000-000000000010', 'disgust', 3, 35), ('00000000-0000-0000-0000-000000000010', 'disgust', 4, 30), ('00000000-0000-0000-0000-000000000010', 'disgust', 5, 28), ('00000000-0000-0000-0000-000000000010', 'disgust', 6, 25), ('00000000-0000-0000-0000-000000000010', 'disgust', 7, 22), ('00000000-0000-0000-0000-000000000010', 'disgust', 8, 20), ('00000000-0000-0000-0000-000000000010', 'disgust', 9, 18);
-- Surprise
INSERT INTO emotion_drift (character_id, emotion_type, chapter_index, value) VALUES
  ('00000000-0000-0000-0000-000000000010', 'surprise', 0, 12), ('00000000-0000-0000-0000-000000000010', 'surprise', 1, 14), ('00000000-0000-0000-0000-000000000010', 'surprise', 2, 12), ('00000000-0000-0000-0000-000000000010', 'surprise', 3, 10), ('00000000-0000-0000-0000-000000000010', 'surprise', 4, 12), ('00000000-0000-0000-0000-000000000010', 'surprise', 5, 12), ('00000000-0000-0000-0000-000000000010', 'surprise', 6, 18), ('00000000-0000-0000-0000-000000000010', 'surprise', 7, 15), ('00000000-0000-0000-0000-000000000010', 'surprise', 8, 20), ('00000000-0000-0000-0000-000000000010', 'surprise', 9, 25);
-- Trust
INSERT INTO emotion_drift (character_id, emotion_type, chapter_index, value) VALUES
  ('00000000-0000-0000-0000-000000000010', 'trust', 0, 15), ('00000000-0000-0000-0000-000000000010', 'trust', 1, 12), ('00000000-0000-0000-0000-000000000010', 'trust', 2, 10), ('00000000-0000-0000-0000-000000000010', 'trust', 3, 12), ('00000000-0000-0000-0000-000000000010', 'trust', 4, 15), ('00000000-0000-0000-0000-000000000010', 'trust', 5, 15), ('00000000-0000-0000-0000-000000000010', 'trust', 6, 28), ('00000000-0000-0000-0000-000000000010', 'trust', 7, 35), ('00000000-0000-0000-0000-000000000010', 'trust', 8, 40), ('00000000-0000-0000-0000-000000000010', 'trust', 9, 48);
-- Anticipation
INSERT INTO emotion_drift (character_id, emotion_type, chapter_index, value) VALUES
  ('00000000-0000-0000-0000-000000000010', 'anticipation', 0, 25), ('00000000-0000-0000-0000-000000000010', 'anticipation', 1, 20), ('00000000-0000-0000-0000-000000000010', 'anticipation', 2, 18), ('00000000-0000-0000-0000-000000000010', 'anticipation', 3, 22), ('00000000-0000-0000-0000-000000000010', 'anticipation', 4, 28), ('00000000-0000-0000-0000-000000000010', 'anticipation', 5, 25), ('00000000-0000-0000-0000-000000000010', 'anticipation', 6, 32), ('00000000-0000-0000-0000-000000000010', 'anticipation', 7, 35), ('00000000-0000-0000-0000-000000000010', 'anticipation', 8, 40), ('00000000-0000-0000-0000-000000000010', 'anticipation', 9, 50);

-- Relationships
INSERT INTO relationships (character_id, target_name, trust, threat, admiration, envy, suspicion, perception_care) VALUES
  ('00000000-0000-0000-0000-000000000010', 'Syl', 65, 0, 40, 0, 8, 55),
  ('00000000-0000-0000-0000-000000000010', 'Dalinar', 18, 15, 35, 0, 42, 30),
  ('00000000-0000-0000-0000-000000000010', 'Sadeas', 2, 68, 0, 0, 70, 5),
  ('00000000-0000-0000-0000-000000000010', 'Teft', 52, 0, 20, 0, 10, 40),
  ('00000000-0000-0000-0000-000000000010', 'Rock', 48, 0, 15, 0, 8, 35);

-- Influence Sliders
INSERT INTO influence_sliders (character_id, moral_override, impression_susceptibility, mask_strength, personality_drift) VALUES
  ('00000000-0000-0000-0000-000000000010', 58, 32, 45, 28);

-- Influence Traits
INSERT INTO influence_traits (character_id, name, impact, effect) VALUES
  ('00000000-0000-0000-0000-000000000010', 'Protective Instinct', 72, 'Overrides self-preservation; will risk death for those under his care'),
  ('00000000-0000-0000-0000-000000000010', 'Distrust of Authority', 65, 'Resists orders from lighteyes; assumes worst intentions from leadership'),
  ('00000000-0000-0000-0000-000000000010', 'Guilt-Driven', 60, 'Past failures fuel current decisions; takes on excessive responsibility'),
  ('00000000-0000-0000-0000-000000000010', 'Stubbornness', 58, 'Refuses to abandon a course of action once committed, even when costly'),
  ('00000000-0000-0000-0000-000000000010', 'Empathic Awareness', 55, 'Reads others'' pain and responds to it, often at his own expense'),
  ('00000000-0000-0000-0000-000000000010', 'Moral Rigidity', 52, 'Cannot ignore injustice even when acting would be strategically unwise');

-- Desire Pressure
INSERT INTO desire_pressure (character_id, name, pressure, effect, revealed_at_chapter) VALUES
  ('00000000-0000-0000-0000-000000000010', 'Protect Bridge Four', 72, 'Every major decision filtered through "will this keep them alive"', 3),
  ('00000000-0000-0000-0000-000000000010', 'Find Honor in a Broken World', 58, 'Drives him to act justly even when survival demands otherwise', 1),
  ('00000000-0000-0000-0000-000000000010', 'Prove Lighteyes Wrong', 48, 'Fuels defiance and refusal to accept the caste system as natural', 2),
  ('00000000-0000-0000-0000-000000000010', 'Escape Slavery', 42, 'Background pressure that makes every decision feel urgent', 1),
  ('00000000-0000-0000-0000-000000000010', 'Understand the Stormlight', 30, 'Emerging curiosity that hasn''t yet become a primary driver', 7);

-- Habit Formation
INSERT INTO habit_formation (character_id, name, frequency, indicates) VALUES
  ('00000000-0000-0000-0000-000000000010', 'Jaw clenching', 62, 'Suppressed anger or frustration; holding back a confrontational response'),
  ('00000000-0000-0000-0000-000000000010', 'Breaking eye contact downward', 55, 'Shame or guilt surfacing; retreating from vulnerability'),
  ('00000000-0000-0000-0000-000000000010', 'Positioning himself between danger and others', 70, 'Protective instinct activating; perceives threat to someone nearby'),
  ('00000000-0000-0000-0000-000000000010', 'Short clipped sentences', 48, 'Emotional containment under strain; doesn''t trust himself to speak freely'),
  ('00000000-0000-0000-0000-000000000010', 'Staring at his brands', 40, 'Identity crisis; wrestling with what he''s become vs who he was'),
  ('00000000-0000-0000-0000-000000000010', 'Counting bridge crew members', 45, 'Hypervigilance about loss; tracking who''s still alive');

-- Lingering Emotions
INSERT INTO lingering_emotions (id, character_id, label, emotion_type, event) VALUES
  ('00000000-0000-0000-0000-000000000100', '00000000-0000-0000-0000-000000000010', 'Guilt toward Tien''s death', 'sadness', 'Tien dying on the battlefield while Kaladin couldn''t save him'),
  ('00000000-0000-0000-0000-000000000101', '00000000-0000-0000-0000-000000000010', 'Rage toward Amaram''s betrayal', 'anger', 'Amaram stealing his Shardblade and branding him a slave'),
  ('00000000-0000-0000-0000-000000000102', '00000000-0000-0000-0000-000000000010', 'Grief toward bridge crew deaths', 'sadness', 'Watching bridgemen die on runs he couldn''t prevent'),
  ('00000000-0000-0000-0000-000000000103', '00000000-0000-0000-0000-000000000010', 'Contempt toward lighteyes privilege', 'disgust', 'Repeated witnessing of lighteyes treating darkeyes as disposable'),
  ('00000000-0000-0000-0000-000000000104', '00000000-0000-0000-0000-000000000010', 'Hope toward Bridge Four''s unity', 'trust', 'Bridge Four choosing to train and fight together as a unit');

-- Lingering Emotion Chapters (per-chapter intensity)
INSERT INTO lingering_emotion_chapters (lingering_emotion_id, chapter_index, intensity) VALUES
  -- Guilt toward Tien's death
  ('00000000-0000-0000-0000-000000000100', 1, 30), ('00000000-0000-0000-0000-000000000100', 2, 30), ('00000000-0000-0000-0000-000000000100', 3, 42), ('00000000-0000-0000-0000-000000000100', 4, 42), ('00000000-0000-0000-0000-000000000100', 6, 52), ('00000000-0000-0000-0000-000000000100', 7, 52), ('00000000-0000-0000-0000-000000000100', 8, 62), ('00000000-0000-0000-0000-000000000100', 9, 68),
  -- Rage toward Amaram
  ('00000000-0000-0000-0000-000000000101', 1, 25), ('00000000-0000-0000-0000-000000000101', 2, 35), ('00000000-0000-0000-0000-000000000101', 3, 35), ('00000000-0000-0000-0000-000000000101', 4, 45), ('00000000-0000-0000-0000-000000000101', 6, 45), ('00000000-0000-0000-0000-000000000101', 7, 52), ('00000000-0000-0000-0000-000000000101', 8, 52), ('00000000-0000-0000-0000-000000000101', 9, 52),
  -- Grief toward bridge crew
  ('00000000-0000-0000-0000-000000000102', 2, 18), ('00000000-0000-0000-0000-000000000102', 3, 32), ('00000000-0000-0000-0000-000000000102', 4, 42), ('00000000-0000-0000-0000-000000000102', 6, 50), ('00000000-0000-0000-0000-000000000102', 7, 50), ('00000000-0000-0000-0000-000000000102', 8, 50), ('00000000-0000-0000-0000-000000000102', 9, 42),
  -- Contempt toward lighteyes
  ('00000000-0000-0000-0000-000000000103', 2, 15), ('00000000-0000-0000-0000-000000000103', 3, 28), ('00000000-0000-0000-0000-000000000103', 4, 38), ('00000000-0000-0000-0000-000000000103', 6, 38), ('00000000-0000-0000-0000-000000000103', 7, 38), ('00000000-0000-0000-0000-000000000103', 8, 48), ('00000000-0000-0000-0000-000000000103', 9, 48),
  -- Hope toward Bridge Four
  ('00000000-0000-0000-0000-000000000104', 6, 28), ('00000000-0000-0000-0000-000000000104', 7, 38), ('00000000-0000-0000-0000-000000000104', 8, 48), ('00000000-0000-0000-0000-000000000104', 9, 60);

-- Lingering Emotion Growth Events
INSERT INTO lingering_emotion_growth (lingering_emotion_id, chapter, growth_type, description, intensity_delta) VALUES
  -- Guilt toward Tien's death
  ('00000000-0000-0000-0000-000000000100', 1, 'memory', 'Memory of Tien resurfaces during slave march', 30),
  ('00000000-0000-0000-0000-000000000100', 3, 'behavior_change', 'Hesitates to lead bridgemen — fears he''ll fail them like he failed Tien', 12),
  ('00000000-0000-0000-0000-000000000100', 6, 'refelt', 'Watching Bridge Four trust him triggers the guilt again — he doesn''t deserve it', 10),
  ('00000000-0000-0000-0000-000000000100', 8, 'behavior_change', 'Refuses to let anyone sacrifice themselves for the group; takes all risk himself', 10),
  ('00000000-0000-0000-0000-000000000100', 9, 'refelt', 'Speaking the Second Ideal forces him to confront that he can''t save everyone', 6),
  -- Rage toward Amaram
  ('00000000-0000-0000-0000-000000000101', 1, 'memory', 'Thinks of Amaram while looking at his brands', 25),
  ('00000000-0000-0000-0000-000000000101', 2, 'refelt', 'Seeing lighteyes in power re-triggers the rage at what Amaram did', 10),
  ('00000000-0000-0000-0000-000000000101', 4, 'behavior_change', 'Refuses to trust any lighteyes offer of help — Amaram taught him that lesson', 10),
  ('00000000-0000-0000-0000-000000000101', 7, 'refelt', 'Dalinar''s honor reminds him of what Amaram pretended to be', 7),
  -- Grief toward bridge crew
  ('00000000-0000-0000-0000-000000000102', 2, 'refelt', 'First bridge run — watches men die and feels the helplessness', 18),
  ('00000000-0000-0000-0000-000000000102', 3, 'refelt', 'Another run, more deaths — the grief compounds', 14),
  ('00000000-0000-0000-0000-000000000102', 4, 'behavior_change', 'Stops learning names of new bridgemen — can''t bear more loss', 10),
  ('00000000-0000-0000-0000-000000000102', 6, 'memory', 'Training Bridge Four forces him to remember those who didn''t make it', 8),
  -- Contempt toward lighteyes
  ('00000000-0000-0000-0000-000000000103', 2, 'refelt', 'Sadeas sends bridgemen to die without hesitation — contempt ignites', 15),
  ('00000000-0000-0000-0000-000000000103', 3, 'behavior_change', 'Openly defiant to lighteyes guards — contempt leaking into action', 13),
  ('00000000-0000-0000-0000-000000000103', 4, 'refelt', 'Sees lighteyes feast while bridgemen starve', 10),
  ('00000000-0000-0000-0000-000000000103', 8, 'refelt', 'Sadeas abandons Dalinar — even good lighteyes get betrayed by their own', 10),
  -- Hope toward Bridge Four
  ('00000000-0000-0000-0000-000000000104', 6, 'refelt', 'Bridge Four volunteers to train — hope stirs for the first time', 28),
  ('00000000-0000-0000-0000-000000000104', 7, 'refelt', 'They protect each other on a run — hope solidifies', 10),
  ('00000000-0000-0000-0000-000000000104', 8, 'behavior_change', 'Kaladin risks everything to save Dalinar because Bridge Four showed him people are worth saving', 10),
  ('00000000-0000-0000-0000-000000000104', 9, 'refelt', 'Bridge Four stands with him — the hope is now conviction', 12);
