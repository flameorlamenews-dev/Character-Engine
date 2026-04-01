import { createClient } from '@supabase/supabase-js';
import { analyzeManuscript, generateCharacterText, hasClaudeKey } from '../../services/claude-api';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found in .env — database features will not work.');
}

// Create the real Supabase client for database operations
const realSupabase = createClient(
  supabaseUrl || 'http://localhost:54321',
  supabaseAnonKey || 'missing-key'
);

// Export the real client for Auth UI (Proxy doesn't work with auth-ui-react)
export const supabaseAuth = realSupabase;

// Wrap the client to intercept edge function calls and route them to Claude API
export const supabase = new Proxy(realSupabase, {
  get(target, prop) {
    if (prop === 'functions') {
      return {
        invoke: async (functionName: string, options?: { body?: any }) => {
          const body = options?.body || {};

          if (functionName === 'ai-analyze-manuscript') {
            if (!hasClaudeKey()) {
              return { data: null, error: { message: 'Claude API key not configured' } };
            }
            try {
              // The ManuscriptsView passes manuscriptId and userId
              // We need to fetch the manuscript content first, then analyze
              const { data: manuscript } = await realSupabase
                .from('manuscripts')
                .select('*')
                .eq('id', body.manuscriptId)
                .single();

              if (!manuscript) {
                return { data: null, error: { message: 'Manuscript not found' } };
              }

              // Update progress to show analysis started
              await realSupabase
                .from('manuscripts')
                .update({ analysis_progress: 10 })
                .eq('id', body.manuscriptId);

              // Get existing characters for context
              const { data: existingChars } = await realSupabase
                .from('characters')
                .select('name')
                .eq('project_id', manuscript.project_id);

              const charNames = (existingChars || []).map((c: any) => c.name);

              // Call Claude to analyze
              const analysis = await analyzeManuscript(
                manuscript.content || '',
                manuscript.chapter_number || 0,
                manuscript.title || `Chapter ${manuscript.chapter_number}`,
                charNames
              );

              // Update progress
              await realSupabase
                .from('manuscripts')
                .update({ analysis_progress: 50 })
                .eq('id', body.manuscriptId);

              // Save characters to database
              for (const char of analysis.characters) {
                // Check if character already exists
                const { data: existing } = await realSupabase
                  .from('characters')
                  .select('id')
                  .eq('name', char.name)
                  .eq('project_id', manuscript.project_id)
                  .maybeSingle();

                let characterId: string;
                if (existing) {
                  characterId = existing.id;
                  // Update existing character
                  await realSupabase
                    .from('characters')
                    .update({
                      description: char.description,
                      role: char.role,
                      source_type: 'ai',
                    })
                    .eq('id', characterId);
                } else {
                  // Create new character
                  const { data: newChar } = await realSupabase
                    .from('characters')
                    .insert({
                      name: char.name,
                      description: char.description,
                      role: char.role,
                      user_id: body.userId || manuscript.user_id,
                      project_id: manuscript.project_id,
                      source_type: 'ai',
                    })
                    .select('id')
                    .single();
                  characterId = newChar?.id;
                }

                if (characterId) {
                  // Save timeline entry
                  await realSupabase
                    .from('character_timeline_entries')
                    .insert({
                      character_id: characterId,
                      manuscript_id: body.manuscriptId,
                      chapter_number: manuscript.chapter_number,
                      emotional_state: char.emotionalState,
                      traits: char.traits,
                      dialogue_patterns: char.dialoguePatterns,
                      relationships: char.relationships,
                      source_type: 'ai',
                    });

                  // Save traits
                  for (const trait of char.traits) {
                    await realSupabase
                      .from('character_traits')
                      .insert({
                        character_id: characterId,
                        manuscript_id: body.manuscriptId,
                        trait,
                        source_type: 'ai',
                      });
                  }
                }
              }

              // Save glossary terms
              for (const term of analysis.glossaryTerms) {
                const { data: existingTerm } = await realSupabase
                  .from('world_glossary')
                  .select('id')
                  .eq('word', term.word)
                  .eq('project_id', manuscript.project_id)
                  .maybeSingle();

                if (!existingTerm) {
                  await realSupabase
                    .from('world_glossary')
                    .insert({
                      word: term.word,
                      definition: term.definition,
                      word_type: term.wordType,
                      project_id: manuscript.project_id,
                      user_id: body.userId || manuscript.user_id,
                      manuscript_id: body.manuscriptId,
                      source_type: 'ai',
                    });
                }
              }

              // Save analysis results and mark complete
              await realSupabase
                .from('manuscripts')
                .update({
                  analysis_progress: 100,
                  analysis_results: {
                    summary: analysis.summary,
                    characterImpressions: analysis.characters.map(c => `${c.name}: ${c.firstImpressions || c.description}`).join('\n\n'),
                    consistencyAnalysis: analysis.consistencyNotes,
                    newCharacters: analysis.characters
                      .filter(c => !charNames.includes(c.name))
                      .map(c => ({ name: c.name, firstImpressions: c.firstImpressions || c.description })),
                    recurringCharacters: analysis.characters
                      .filter(c => charNames.includes(c.name))
                      .map(c => ({ name: c.name, evolution: c.emotionalState })),
                  },
                })
                .eq('id', body.manuscriptId);

              return { data: { success: true }, error: null };
            } catch (err: any) {
              console.error('Analysis failed:', err);
              await realSupabase
                .from('manuscripts')
                .update({ analysis_progress: -1 })
                .eq('id', body.manuscriptId);
              return { data: null, error: { message: err.message } };
            }
          }

          if (functionName === 'generate-character-text') {
            if (!hasClaudeKey()) {
              return { data: null, error: { message: 'Claude API key not configured' } };
            }
            try {
              // Fetch character data
              const { data: character } = await realSupabase
                .from('characters')
                .select('*')
                .eq('id', body.characterId)
                .single();

              if (!character) {
                return { data: null, error: { message: 'Character not found' } };
              }

              const { data: traits } = await realSupabase
                .from('character_traits')
                .select('trait')
                .eq('character_id', body.characterId);

              const text = await generateCharacterText(
                character.name,
                character.description || '',
                (traits || []).map((t: any) => t.trait),
                body.prompt || '',
                body.audience,
                body.emotionalState,
                body.situation
              );

              return { data: { generatedText: text }, error: null };
            } catch (err: any) {
              return { data: null, error: { message: err.message } };
            }
          }

          if (functionName === 'parse-manuscript') {
            // Parsing is handled client-side via mammoth — just return success
            return { data: { success: true }, error: null };
          }

          // Unknown function
          return { data: null, error: { message: `Unknown function: ${functionName}` } };
        },
      };
    }

    // Auth passes through to real Supabase Auth (login/signup/logout)
    return (target as any)[prop];
  },
});
