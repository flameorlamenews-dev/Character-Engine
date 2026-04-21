-- Test seed for Book Buddy integration — migration 006 verification.
--
-- Run AFTER applying supabase/migrations/006_audio_extensions.sql.
-- Inserts a sample character_timeline_entries row with the three new
-- columns populated, then selects it back so the Worker-side reviewer
-- can confirm schema + shape are correct.
--
-- Safe to re-run: uses a deterministic test character_id and cleans up first.

DO $$
DECLARE
  test_user_id    UUID := '00000000-0000-0000-0000-000000000001';
  test_project_id UUID := '00000000-0000-0000-0000-000000000002';
  test_char_id    UUID := '00000000-0000-0000-0000-00000000000a';
BEGIN
  -- Clean up any prior run
  DELETE FROM character_timeline_entries WHERE character_id = test_char_id;
  DELETE FROM characters                 WHERE id = test_char_id;
  DELETE FROM projects                   WHERE id = test_project_id;
  DELETE FROM profiles                   WHERE id = test_user_id;

  -- Minimal parents so FKs hold
  INSERT INTO profiles (id) VALUES (test_user_id);
  INSERT INTO projects (id, user_id, name) VALUES (test_project_id, test_user_id, 'Book Buddy Test');
  INSERT INTO characters (id, user_id, project_id, name, description, role, source_type)
  VALUES (
    test_char_id, test_user_id, test_project_id,
    'Victor Frankenstein (test)',
    'Test character row for migration 006 verification.',
    'protagonist', 'ai'
  );

  -- The row the Book Buddy Worker will read.
  INSERT INTO character_timeline_entries (
    character_id, user_id, chapter_number,
    emotional_state, traits, dialogue_patterns, relationships,
    internal_dialogue, external_dialogue,
    knowledge_at_chapter, notable_actions, reader_tone,
    source_type
  ) VALUES (
    test_char_id, test_user_id, 5,
    'Obsessive and sleep-deprived, haunted by the scale of what he is attempting.',
    ARRAY['ambitious', 'secretive', 'self-isolating'],
    ARRAY['formal, Romantic-era cadence', 'breaks into awed exclamation when discussing science'],
    'Estranged from Elizabeth and his father; entirely consumed by his work.',
    ARRAY[
      'What can stop the determined heart and resolved will of man?',
      'I must not fail.',
      'The moon gazed on my midnight labors.'
    ],
    ARRAY[
      'One secret which I alone possessed was the hope to which I had dedicated myself.',
      'I must return home soon.'
    ],
    'knows: the principle of animating inert matter, that he alone possesses this secret, that his health is failing from overwork. suspects: that his project carries moral weight he has not fully reckoned with. unaware of: what the creature will look like when complete, his family''s growing concern for him, any consequences beyond the scientific.',
    '[
      {"action": "Works through the night by candlelight, forgetting meals for days at a stretch", "trigger": "Breakthrough in reanimation theory"},
      {"action": "Refuses all letters from home without reading them", "trigger": "Fear of being pulled back to domestic concerns"}
    ]'::jsonb,
    '{
      "openingLineOptions": [
        "You wish to know of my work? Few have the stomach for such inquiry.",
        "I am Victor Frankenstein. And you — you have come at a singular moment.",
        "Speak plainly. My hours are precious and my mind is elsewhere."
      ],
      "wouldAnswerOpenly": "natural philosophy, Ingolstadt, his mother''s death, his love of reading",
      "wouldDeflectAbout": "the exact nature of his current project, his health, how long since he last slept",
      "wouldLieAbout": "whether the work is safe, whether he has considered stopping"
    }'::jsonb,
    'ai'
  );
END $$;

-- Verify: confirm the three new columns are populated and readable.
SELECT
  chapter_number,
  length(knowledge_at_chapter)      AS knowledge_len,
  jsonb_array_length(notable_actions) AS notable_actions_count,
  reader_tone->'openingLineOptions' AS opening_lines,
  reader_tone->>'wouldDeflectAbout' AS deflect_topics
FROM character_timeline_entries
WHERE character_id = '00000000-0000-0000-0000-00000000000a';
