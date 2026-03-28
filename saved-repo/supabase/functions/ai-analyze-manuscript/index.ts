import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.75.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { manuscriptId, userId, executeImmediately } = await req.json();

    if (!manuscriptId || !userId) {
      throw new Error('manuscriptId and userId are required');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // If called from queue processor, execute immediately
    if (executeImmediately) {
      console.log(`🚀 Executing immediate analysis for manuscript: ${manuscriptId}`);
      
      const { data: manuscript, error: fetchError } = await supabase
        .from('manuscripts')
        .select('*')
        .eq('id', manuscriptId)
        .maybeSingle();

      if (fetchError || !manuscript) {
        throw new Error('Manuscript not found');
      }

      await executeAnalysis(supabase, manuscript);

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Analysis completed'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch manuscript
    const { data: manuscript, error: fetchError } = await supabase
      .from('manuscripts')
      .select('*')
      .eq('id', manuscriptId)
      .eq('user_id', userId)
      .maybeSingle();

    if (fetchError || !manuscript) {
      throw new Error('Manuscript not found');
    }

    console.log(`Queueing AI analysis for manuscript: ${manuscript.title}`);

    // Check if already in queue
    const { data: existingQueue } = await supabase
      .from('analysis_queue')
      .select('id, status')
      .eq('manuscript_id', manuscriptId)
      .in('status', ['pending', 'processing'])
      .maybeSingle();

    if (existingQueue) {
      console.log('Manuscript already in queue:', existingQueue.status);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: `Analysis ${existingQueue.status}`,
          queue_id: existingQueue.id,
          status: existingQueue.status
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Add to queue
    const { data: queueEntry, error: queueError } = await supabase
      .from('analysis_queue')
      .insert({
        manuscript_id: manuscriptId,
        user_id: userId,
        status: 'pending',
        priority: 0
      })
      .select()
      .single();

    if (queueError) {
      console.error('Error adding to queue:', queueError);
      throw queueError;
    }

    console.log('✅ Added to analysis queue:', queueEntry.id);

    // Return immediately - queue processor will handle the analysis
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Added to analysis queue',
        queue_id: queueEntry.id
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

    // Note: analyzeInBackground is no longer called here
    // The queue processor will call this function when ready
  } catch (error) {
    console.error('Error queueing analysis:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});

// New entry point called by queue processor
export async function executeAnalysis(supabase: any, manuscript: any) {
  const analysisStartTime = Date.now();
  const TIME_BUDGET_MS = 120_000; // 120 seconds — leave 30s buffer before edge function timeout
  const hasTimeBudget = () => (Date.now() - analysisStartTime) < TIME_BUDGET_MS;
  console.log(`Executing queued analysis for: ${manuscript.title}`);
  
  const manuscriptId = manuscript.id;
  const userId = manuscript.user_id;
  
  {
  // Reset progress and reactions on start
  await supabase
    .from('manuscripts')
      .update({ analysis_progress: 1, reader_reactions: [] })
      .eq('id', manuscriptId);

    // Clean up old AI-extracted data for THIS manuscript before re-analysis
    // Only for characters explicitly @tagged in the manuscript content
    console.log(`Selective cleanup for manuscript ${manuscriptId} using @tags...`);

    const textContent = manuscript.content || '';
    // Local helpers (request scope)
    const toHandleLocal = (s: string) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const hasAtTagLocal = (name: string, text: string) => {
      const handle = toHandleLocal(name);
      const display = (name || '').replace(/\s+/g, '');
      const re = new RegExp(`@(${handle}|${display})\\b`, 'i');
      return re.test(text || '');
    };

    // Fetch user's characters and find which are mentioned via @tag
    // Also include unblocked characters (blocked=false) to clean up their old data
    const { data: userCharsForCleanup } = await supabase
      .from('characters')
      .select('id, name, blocked')
      .eq('user_id', userId);

    const mentionedCharIds = (userCharsForCleanup || [])
      .filter((c: any) => {
        // Include character if @tagged OR if it's unblocked (to clean up old data)
        const isTagged = hasAtTagLocal(c.name, textContent);
        const isUnblocked = c.blocked === false;
        return isTagged || isUnblocked;
      })
      .map((c: any) => c.id);

    if (mentionedCharIds.length > 0) {
      await Promise.all([
        supabase.from('character_traits').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
        supabase.from('character_voice_scales').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
        supabase.from('character_mottos').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
        supabase.from('character_lexicon').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
        supabase.from('character_voice_feedback').delete().eq('manuscript_id', manuscriptId).in('character_id', mentionedCharIds),
        supabase.from('character_style_rules').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
        supabase.from('character_emotion_map').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
        supabase.from('character_audience_mods').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
        supabase.from('character_conflict_profile').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
        supabase.from('character_timeline_entries').delete().eq('manuscript_id', manuscriptId).eq('source_type', 'ai').in('character_id', mentionedCharIds),
      ]);
      console.log(`Cleaned AI data for ${mentionedCharIds.length} @tagged or unblocked characters in this manuscript`);
    } else {
      console.log('No @tagged or unblocked characters found in manuscript; skipping AI cleanup.');
    }
  } // end cleanup

     // Start background analysis and return
     await analyzeInBackground(supabase, manuscript);
}

async function analyzeInBackground(supabase: any, manuscript: any) {
  const analysisStartTime = Date.now();
  const TIME_BUDGET_MS = 120_000; // 120 seconds
  const hasTimeBudget = () => (Date.now() - analysisStartTime) < TIME_BUDGET_MS;
  
  let progressInterval: number | undefined;
  let reactionInterval: number | undefined;
  
  // FAIL-SAFE: If the function is about to be killed by the runtime (~150s),
  // force-set progress to -1 so the UI never stays stuck at 95%.
  let failSafeTriggered = false;
  const failSafeTimeout = setTimeout(async () => {
    failSafeTriggered = true;
    console.error('⚠️ FAIL-SAFE: Analysis approaching runtime limit, marking as failed');
    if (progressInterval) clearInterval(progressInterval);
    if (reactionInterval) clearInterval(reactionInterval);
    try {
      await supabase
        .from('manuscripts')
        .update({ 
          analysis_results: { error: 'Analysis timed out. Try re-analyzing — the manuscript may be too long for a single pass.' },
          analysis_progress: -1 
        })
        .eq('id', manuscript.id);
    } catch (e) {
      console.error('Fail-safe DB update failed:', e);
    }
  }, 140_000); // 140s — 10s before typical 150s edge function kill
  
  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Helpers
    const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const nameAppearsInText = (name: string, text: string) => {
      if (!name) return false;
      const re = new RegExp(`\\b${escapeRegExp(name)}\\b`, 'i');
      return re.test(text || '');
    };
    const isValidCharacterName = (name: string) => {
      if (!name) return false;
      const bannedStarts = [
        'here is a comprehensive',
        'character from chapter',
        'chapter',
      ];
      const lower = name.toLowerCase();
      if (bannedStarts.some((p) => lower.startsWith(p))) return false;
      if (/[\n:\t]/.test(name)) return false;
      if (name.length < 2 || name.length > 60) return false;
      // Allow letters, numbers, spaces, apostrophes, hyphens, parentheses, and common punctuation
      // Must contain at least one letter
      if (!/[A-Za-z]/.test(name)) return false;
      // Reject if contains only invalid characters
      if (/^[^A-Za-z0-9'\-\s()#,."]+$/.test(name)) return false;
      const invalidNames = new Set([
        'voice','key','brief','voice scales','voice signature','key personality','brief description',
        'personality traits','traits','scales','description','analysis','character analysis',
        'brashness','aggression','sophistication','formality','empathy','introspection','role'
      ]);
      if (invalidNames.has(lower)) return false;
      return true;
    };

    // Tag helpers for @character gating
    const toHandle = (name: string) => (name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const hasAtTagForName = (name: string, text: string) => {
      const handle = toHandle(name);
      const display = (name || '').replace(/\s+/g, '');
      const re = new RegExp(`@(${handle}|${display})\\b`, 'i');
      return re.test(text || '');
    };

    // Helper to add reader reactions WITHOUT affecting progress
    const addReaction = async (icon: string, text: string) => {
      const { data: current } = await supabase
        .from('manuscripts')
        .select('reader_reactions')
        .eq('id', manuscript.id)
        .maybeSingle();

      const existingReactions = Array.isArray(current?.reader_reactions) ? current.reader_reactions : [];
      const updatedReactions = [...existingReactions, { icon, text, timestamp: Date.now() }];

      await supabase
        .from('manuscripts')
        .update({ reader_reactions: updatedReactions })
        .eq('id', manuscript.id);
    };
    
    // Helper to smoothly update progress independently
    const updateProgress = async (progress: number) => {
      await supabase
        .from('manuscripts')
        .update({ analysis_progress: Math.min(100, Math.max(0, progress)) })
        .eq('id', manuscript.id);
    };

    // --- Progress infrastructure ---
    const progressCap = 95;
    progressInterval = setInterval(async () => {
      const { data: current } = await supabase
        .from('manuscripts')
        .select('analysis_progress')
        .eq('id', manuscript.id)
        .maybeSingle();
      
      const currentProgress = current?.analysis_progress ?? 0;
      if (currentProgress < progressCap) {
        await updateProgress(currentProgress + 1);
      }
    }, 420);

    // Queue-based reaction scheduler
    type QueuedReaction = { icon: string; text: string };
    const reactionQueue: QueuedReaction[] = [];
    let posting = false;
    reactionInterval = setInterval(async () => {
      if (posting) return;
      const next = reactionQueue.shift();
      if (!next) return;
      posting = true;
      try {
        await addReaction(next.icon, next.text);
      } finally {
        posting = false;
      }
    }, 7000) as unknown as number;

    let structuredData: any = null;
    let characterAnalysis = '';
    const extractedNames = new Set<string>();

    {
    // === PHASE 1: Character Extraction ===
    
    // Add initial reactions immediately (no progress impact)
    await addReaction('BookOpen', "Let's see what we've got here...");
    await addReaction('Eye', 'Reading through your pages...');

    // Third combined update is queued (not immediate)
    reactionQueue.push({ icon: 'Sparkles', text: "Analyzing character voices, personality traits, dialogue patterns, world terminology and— wait, hold on..." });

    // Kick off a quick moments extraction on a short excerpt to seed early reactions
    (async () => {
      try {
        const quickText = manuscript.content.substring(0, 12000);
        const quickPrompt = `Extract 8-12 short bullet reactions to the MOST DRAMATIC moments from this excerpt. Use a casual, excited tone.

PRIORITIZE (in order):
1. **Character conflicts/confrontations** - arguments, fights, tensions
2. **Betrayals and revelations** - shocking discoveries, lies exposed
3. **Emotional moments** - breakdowns, confessions, vulnerability
4. **Moral choices** - difficult decisions, ethical dilemmas
5. **Power dynamics** - insults, put-downs, dominance displays

AVOID:
- World-building exposition (magic systems, setting descriptions)
- Terminology explanations
- General observations about the world

CRITICAL RULES:
- ALWAYS include the actual quote or paraphrase in your reaction
- Never say "this sentence", "this thought", "this line" without showing what it is
- Reference specific dialogue or actions with quotes
- Focus on CHARACTER INTERACTIONS and EMOTIONAL MOMENTS

Examples:
- "Wait, when she said 'I never wanted this' - the delivery was heartbreaking!"
- "Him casually mentioning 'death doesn't scare me anymore' like that's NORMAL?!"
- "NOT him calling her 'too emotional to be a hunter' - the AUDACITY!"
- "The betrayal when he smiled and said 'I was never on your side' - I'm shook!"

Format as simple list with '-' bullets.\n\n${quickText}`;
        const resp = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${LOVABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-flash-lite',
            messages: [
              { role: 'system', content: 'You are a lively reader reacting to vivid dialogue moments. Be concise and specific.' },
              { role: 'user', content: quickPrompt }
            ],
            max_tokens: 800,
          }),
        });
        if (resp.ok) {
          let data;
          try { const t = await resp.text(); data = t ? JSON.parse(t) : null; } catch { data = null; }
          if (!data) { console.warn('Quick moments response empty'); return; }
          const text = data.choices?.[0]?.message?.content || '';
          const lines = text.split('\n').map((l: string) => l.replace(/^[-•*]\s*/, '').trim()).filter((l: string) => l.length > 10);
          const icons = ['Laugh', 'Heart', 'Sparkles', 'Eye', 'Zap', 'MessageCircle', 'Star', 'ThumbsUp', 'HeartCrack', 'Frown'];
          lines.slice(0, 12).forEach((line: string, i: number) => {
            reactionQueue.push({ icon: icons[i % icons.length], text: line });
          });
        } else {
          console.warn('Quick moments fetch failed:', await resp.text());
        }
      } catch (e) {
        console.error('Quick moments error:', e);
      }
    })();

    console.log('Calling AI for character extraction from manuscript text...');

    // Fetch existing user-created characters - these are corrections/additions user wants AI to find
    let existingCharsQuery = supabase
      .from('characters')
      .select('id, name, source_type')
      .eq('user_id', manuscript.user_id);
    if (manuscript.project_id) {
      existingCharsQuery = existingCharsQuery.eq('project_id', manuscript.project_id);
    }
    const { data: existingChars } = await existingCharsQuery;
    
    const userCreatedChars = (existingChars || []).filter((c: any) => c.source_type === 'author');
    const userCharNames = userCreatedChars.map((c: any) => c.name);
    
    
    
    // Fetch existing user-created glossary terms - these guide AI on what to look for
    const { data: existingGlossary } = await supabase
      .from('world_glossary')
      .select('word')
      .eq('user_id', manuscript.user_id);
    
    const userGlossaryWords = (existingGlossary || []).map((g: any) => g.word);
    
    console.log('User-created characters to search for:', userCharNames.join(', '));
    console.log('User-created glossary terms to prioritize:', userGlossaryWords.join(', '));
    
    

    // Build prompt that tells AI to search for user-identified characters and terms
    const characterPrompt = `Analyze this manuscript chapter and provide THREE outputs.

CRITICAL CHAPTER ISOLATION RULE:
You are analyzing Chapter ${manuscript.chapter_number ?? 0}${manuscript.chapter_title ? ` ("${manuscript.chapter_title}")` : ''} ONLY.
- Base ALL analysis EXCLUSIVELY on the text provided below
- Do NOT use knowledge from other chapters, prior context, or assumptions about what happens elsewhere
- Every trait, emotion, dialogue quote, and relationship MUST come from THIS chapter's text alone
- If you cannot find evidence for something in THIS text, do not include it

1. CHARACTER ANALYSIS: List characters who ACTIVELY PARTICIPATE in this chapter. For EACH character provide:

   ⚠️ ACTIVE PARTICIPATION REQUIREMENT — THIS IS THE #1 RULE:
   - ONLY include characters who have at least ONE of: dialogue (spoken or internal), physical actions, or emotional reactions IN THIS TEXT
   - Do NOT include characters who are merely MENTIONED by name, referenced as legends, or talked about by others without being present
   - If a character is only referenced in passing (e.g., "like the legendary Srevlis" or "Godric's old mentor"), do NOT create a profile for them
   - A character must DO something or SAY something in the actual scene to qualify
   - If a character is referenced as a figure in a book, legend, or story-within-a-story, they are NOT active participants
   
   ⚠️ CHAPTER-UNIQUE ANALYSIS REQUIREMENT:
   - Each field (Description, Traits, Dialogue, etc.) MUST reflect ONLY what happens in THIS specific chapter
   - The Description for Chapter 1 MUST be completely different from Chapter 0 — it covers different events!
   - If a character has no spoken dialogue in this chapter, set external_dialogue to ["No spoken dialogue in this chapter"]
   - If a character has no internal thoughts in this chapter, set internal_dialogue to ["No internal thoughts shown in this chapter"]
   - If no personality traits are evidenced in this chapter, set traits to ["No new personality traits identified in this chapter"]
   - NEVER copy or paraphrase data from other chapters — you only have THIS chapter's text
   
    Format EXACTLY like this for each character:
   
   **[Character Name]**
   
   * **Description:** [Write a comprehensive 4-6 sentence analysis covering: their background, role in the story, personality, motivations, internal conflicts, and key relationships AS SHOWN IN THIS CHAPTER ONLY. Include specific examples and quotes from THIS text. Be detailed and analytical, not just descriptive.]
   
   * **Key personality traits:** [List 6-8 specific traits with brief evidence FROM THIS CHAPTER: "Competitive - constantly compares himself to others", "Resentful - harbors deep anger about failing the test", etc.]
   
   * **Emotional State:** [Primary emotional state in THIS chapter, e.g. "Calm, observant, and subtly challenging" or "Angry, defensive, masking vulnerability"]
   
   * **Sentiment:** [Overall sentiment: Positive, Negative, Neutral, Conflicted, Dark, Hopeful, etc.]
   
   * **Dialogue Patterns:** [List 4-6 key dialogue quotes FROM THIS CHAPTER that define this character's voice]
   
   * **Relationships:** [Key relationship dynamics with other characters IN THIS CHAPTER]
   
   * **Internal Dialogue:** [Extract exact internal thoughts, inner monologue, and narration from this character IN THIS TEXT. List each thought as a separate item.]
   
   * **External Dialogue:** [Extract exact spoken dialogue lines from this character IN THIS TEXT. List each spoken line as a separate item.]
   
   * **Views of Others:** [How this character perceives other characters, situations, or things IN THIS CHAPTER. What is their perspective based on THIS text?]
   
   * **Views by Others:** [How other characters perceive this character IN THIS CHAPTER. What do others think or say about them IN THIS TEXT?]
   
   * **Voice Scales:** Brashness: [0-10], Aggression: [0-10], Sophistication: [0-10], Formality: [0-10], Empathy: [0-10], Introspection: [0-10]
   
   CRITICAL: The **Description** field must be comprehensive and analytical, but ONLY based on THIS chapter's text. Think of it as a character study covering:
   - Who they are and their background AS REVEALED IN THIS CHAPTER
   - Their goals and what drives them IN THIS CHAPTER
   - Their internal struggles and conflicts IN THIS CHAPTER
   - How they relate to other characters IN THIS CHAPTER
   - Specific memorable moments, quotes, or actions FROM THIS CHAPTER
   
   Write 150-200 words minimum for the Description field. Use specific examples from THIS text only.
   
   CRITICAL FORMATTING RULES:
   - Start each character with **[Name]** on its own line
   - Use the EXACT spelling from the manuscript
   - ONLY include characters who ACTIVELY PARTICIPATE (have dialogue, actions, or emotional reactions in THIS text)
   - Do NOT include characters who are merely mentioned, referenced as legends, or talked about without being present in the scene
   - If a character only appears as a reference or memory (e.g., "like the legendary X"), they do NOT get a profile
   
   CHARACTER NAME MATCHING RULES - CRITICAL:
   ⚠️ BE EXTREMELY CONSERVATIVE about considering two names to be the same person:
   
   ONLY consider characters the SAME if ONE of these is explicitly TRUE in the text:
   1. **Explicit self-introduction**: Character introduces themselves with multiple names (e.g., "I'm Hunter Steel")
   2. **Explicit alias statement**: Text explicitly says they're the same (e.g., "My name is Praewphan but everyone calls me Praew")
   3. **Full name match**: If given full name like "Haldric Tosa", the first name must match EXACTLY for all references
   4. **Name with title**: Titles added don't change identity (e.g., "Godric" = "Silver Wing Godric" = "Legendary Beast Hunter Godric") - but at least ONE substantive name word must match 100%
   
   DO NOT merge characters based on:
   - Similar-sounding names (Haldric ≠ Godric even if they sound similar)
   - Shared titles (multiple people can be "Legendary Beast Hunter")
   - Assumptions or inferences
   - Common words like "the", "a", or generic titles
   
    WHEN IN DOUBT: Keep characters SEPARATE. Better to have duplicates than incorrectly merge different people.
    
    Examples:
    ✅ SAME PERSON: "Hunter Steel" when character says "I'm Hunter Steel" OR "My name is Hunter, last name Steel"
    ✅ SAME PERSON: "Praewphan" and "Praew" when text says "no one pronounces Praewphan right, that's why I go by Praew"
    ✅ SAME PERSON: "Godric" and "Silver Wing Godric" (title added, but "Godric" matches exactly)
    ❌ DIFFERENT PEOPLE: "Haldric" and "Godric" (similar names, but NO explicit connection in text)
    ❌ DIFFERENT PEOPLE: "Legendary Beast Hunter" mentioned twice (title, no specific name match)
    
    ⚠️ CRITICAL: DO NOT CREATE CHARACTER PROFILES FOR LOCATIONS/PLACES:
    
    BEFORE creating a character profile, CHECK if the name is actually a PLACE, PLANET, LOCATION, OBJECT, or WORLD:
    
    LOCATION INDICATORS (these are NOT characters):
    - Phrases like: "on [Name]", "in [Name]", "from [Name]", "to [Name]", "at [Name]"
    - Context words: "planet [Name]", "world of [Name]", "[Name] system", "city of [Name]", "kingdom of [Name]"
    - Possessive forms referring to place attributes: "[Name]'s surface", "[Name]'s atmosphere", "[Name]'s cities"
    - Geographic/locational descriptions: "arrived at [Name]", "orbiting [Name]", "landed on [Name]"
    
    IF a name appears with location indicators, DO NOT create a character profile for it!
    
    Examples of LOCATIONS (NOT characters):
    ❌ "Ravour" in "on planet Ravour" or "from Ravour" or "Ravour's surface"
    ❌ "Nexus" in "the Nexus system" or "arrived at Nexus"
    ❌ "Haven" in "Haven's gates" or "city of Haven" 
    ❌ "The Wastes" in geographical context
    ❌ Any name preceded by "planet", "world", "city", "kingdom", "system"
    
    Examples of CHARACTERS (with dialogue/actions):
    ✅ "[Name] said" or "[Name] thought" or "[Name] felt"
    ✅ "[Name] grabbed" or "[Name] walked" or "[Name] smiled"
    ✅ Has dialogue: "He turned to [Name]. 'What do you think?'"
    ✅ Internal thoughts: "[Name] wondered if..."
    
    VALIDATION RULES BEFORE CREATING CHARACTER:
    1. Must have at least ONE instance of dialogue OR action verbs (said, thought, felt, grabbed, etc.)
    2. Must NOT appear primarily in location context ("on X", "in X", "from X")
    3. If mentioned fewer than 3 times AND no dialogue, likely not a character
    4. Generic titles without specific names should not be characters unless they have significant presence
    
    ${userCharNames.length > 0 ? `\n   PRIORITY: These characters have existing profiles - SEARCH FOR THEM FIRST: ${userCharNames.join(', ')}` : ''}

2. GLOSSARY TERMS: Find 10-20 INVENTED, FICTIONAL words/terms that DO NOT exist in the real world. These must be terms the AUTHOR MADE UP for their story world.

   INCLUDE:
   - Made-up words, neologisms, or invented terminology (e.g., "BoltStone", "NullStone", "SolarStones")
   - Fictional place names (e.g., "Stormhaven")
   - Fictional creature/species names (e.g., "Boltrax", "Zephyrs")
   - Invented titles/ranks unique to this world (e.g., "Prime", "Heir Archon")
   - Made-up curses or exclamations (e.g., "Zephyrs take me!")
   - Any term with unique consistent capitalization suggesting special in-world meaning
   
   DO NOT INCLUDE:
   - CHARACTER NAMES (these belong in the character profiles above, NOT the glossary)
   - Character titles that are just "[Title] [Character Name]" (e.g., "Silver Wing Godric" is a CHARACTER, not a glossary term)
   - Real English words used with their normal meaning (e.g., "humans", "rodents", "king", "hunter")
   - Common concepts that exist in the real world (e.g., "betrayal", "magic", "war")
   - Words that any English speaker would already know
   
   TEST: Before including a term, ask: "Would a reader need to look this up because it's INVENTED?" If it's a real word used normally, EXCLUDE it.
   
   ${userGlossaryWords.length > 0 ? `\n   PRIORITY: User has identified these terms - INCLUDE ANALYSIS: ${userGlossaryWords.join(', ')}` : ''}
   For each term provide:
   - The word/phrase
   - AI guess at the definition based on context
   - Type: curse, place, item, concept, creature, title, motto, etc.
   Format: "WORD: [word] | TYPE: [type] | DEFINITION: [guess]"

3. MEMORABLE MOMENTS: Find 8-12 of the MOST DRAMATIC, EMOTIONAL, or PLOT-CRITICAL moments that made you react as a reader. Write like an excited book lover reacting to these moments - be genuine, enthusiastic, and conversational.

**CRITICAL: Jump STRAIGHT into your reactions. NO introductory phrases like "Here are some dramatic reaction points" or "These moments stood out" or ANY meta-commentary. Start IMMEDIATELY with your first reaction using a dash (-).**

PRIORITIZE THESE TYPES OF MOMENTS (in order):
1. **Character conflicts** - arguments, insults, confrontations, power struggles
2. **Betrayals & revelations** - backstabbing, lies exposed, shocking truths
3. **Emotional breakdowns** - crying, anger explosions, vulnerability, confessions
4. **Failures & losses** - characters failing tests, losing fights, being rejected
5. **Moral dilemmas** - difficult choices, ethical conflicts, character being tested
6. **Relationship dynamics** - romantic tension, friendship strain, family drama
7. **Character development moments** - growth, realizations, pivotal decisions

AVOID REACTING TO:
- World-building exposition (magic systems, lore dumps, setting descriptions)
- Terminology explanations (unless tied to a dramatic reveal)
- General observations about the world or magic
- Info-dumps about how things work

CRITICAL CONTENT GUIDELINES:
- If a character says something sexist, racist, or otherwise bigoted, clearly condemn it
- Do NOT use irony or ambiguous phrasing when reacting to problematic statements
- Make your moral stance crystal clear when characters cross ethical lines

For each moment:
   - ALWAYS include the actual quote or paraphrase what was said/thought
   - Mention the character and what they said/did
   - React naturally - NO "this is interesting because" language!
   - Never say "this sentence", "this thought", "this sequence" without showing what it actually is
   - Sound human and excited
   - NO PREAMBLES - start immediately with "- [your reaction]"

Examples of natural reader reactions WITH QUOTES (note: start immediately with the dash):
- "Wait, when he said 'women shouldn't be hunters, too emotional' - absolutely NOT. That's disgusting and he needs to be called out!"
- "Marcus claiming he 'never lies' - dude, we JUST watched you deceive everyone?!"
- "The way she FAILED the test and everyone watched... when she whispered 'I'm not good enough' - my heart broke!"
- "Him smiling while saying 'I was never on your side' - THE BETRAYAL! I gasped!"
- "NOT him calling her weak right after she saved his life?! The disrespect!"
- "When she broke down crying after losing everything - that whole moment destroyed me"

Focus on CHARACTER EMOTIONS, CONFLICTS, and PLOT TURNING POINTS. Never reference "this" or "that" without showing what you mean. Sound like you're texting a friend about the most intense parts of a book you can't put down. Remember: NO introductory text - jump straight into reactions with dashes.

Manuscript text:
${manuscript.content.substring(0, 50000)}

Return in order: character analysis, glossary terms, then memorable dialogue moments.`;

    // Start AI analysis with immediate progress update
    
    
    const characterResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { 
            role: 'system', 
            content: 'You are an expert literary analyst specializing in character voice analysis. Provide detailed, evidence-based ratings and descriptions. Use actual dialogue quotes and specific examples. Be precise with numerical ratings based on the text, not defaults.' 
          },
          { role: 'user', content: characterPrompt }
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'extract_characters',
              description: 'Extract character information from manuscript analysis',
              parameters: {
                type: 'object',
                properties: {
                  characters: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: { type: 'string', description: 'Character full name — ONLY characters who actively participate (have dialogue/actions) in THIS chapter' },
                        description: { type: 'string', description: 'Detailed character description (150-200 words minimum) based ONLY on what happens in THIS chapter text' },
                        traits: { type: 'array', items: { type: 'string' }, description: 'Key personality traits with evidence, e.g. "Competitive - constantly compares himself to others"' },
                        emotional_state: { type: 'string', description: 'Primary emotional state in this chapter, e.g. "Calm, observant, and subtly challenging"' },
                        sentiment: { type: 'string', description: 'Overall sentiment, e.g. "Neutral", "Positive", "Dark", "Conflicted"' },
                        dialogue_patterns: { type: 'array', items: { type: 'string' }, description: 'Key dialogue quotes or speech patterns, e.g. "You know you can\'t win"' },
                        relationships: { type: 'string', description: 'Key relationships and dynamics with other characters in this chapter' },
                        internal_dialogue: { type: 'array', items: { type: 'string' }, description: 'Internal thoughts, inner monologue, and narration from this character. Extract exact quotes of their thoughts.' },
                        external_dialogue: { type: 'array', items: { type: 'string' }, description: 'Spoken dialogue lines from this character. Extract exact quotes they say out loud.' },
                        views_of_others: { type: 'string', description: 'How this character perceives and views other characters, situations, or things in this chapter. Summarize their perspective.' },
                        views_by_others: { type: 'string', description: 'How other characters perceive and view this character in this chapter. Summarize others\' perspectives of them.' },
                        voice_scales: {
                          type: 'object',
                          properties: {
                            brashness: { type: 'integer', minimum: 0, maximum: 10 },
                            aggression: { type: 'integer', minimum: 0, maximum: 10 },
                            sophistication: { type: 'integer', minimum: 0, maximum: 10 },
                            formality: { type: 'integer', minimum: 0, maximum: 10 },
                            empathy: { type: 'integer', minimum: 0, maximum: 10 },
                            introspection: { type: 'integer', minimum: 0, maximum: 10 }
                          },
                          required: ['brashness', 'aggression', 'sophistication', 'formality', 'empathy', 'introspection']
                        }
                      },
                      required: ['name', 'description', 'traits', 'voice_scales', 'emotional_state', 'relationships', 'internal_dialogue', 'external_dialogue', 'views_of_others', 'views_by_others']
                    }
                  },
                  glossary_terms: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        word: { type: 'string' },
                        definition: { type: 'string' },
                        word_type: { type: 'string', enum: ['place', 'object', 'concept', 'curse', 'other'] }
                      },
                      required: ['word', 'definition', 'word_type']
                    }
                  },
                  memorable_moments: {
                    type: 'array',
                    items: { type: 'string' }
                  }
                },
                required: ['characters', 'glossary_terms', 'memorable_moments']
              }
            }
          }
        ],
        tool_choice: { type: 'function', function: { name: 'extract_characters' } },
        max_tokens: 16000,
      }),
    });

    if (!characterResponse.ok) {
      const errorText = await characterResponse.text();
      console.error('AI API error:', errorText);
      throw new Error('Character analysis failed');
    }

    let characterData;
    try {
      const responseText = await characterResponse.text();
      if (!responseText || responseText.trim().length === 0) {
        throw new Error('AI returned empty response body');
      }
      characterData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('❌ Failed to parse character extraction response:', parseError);
      throw new Error(`Character extraction returned invalid JSON: ${parseError.message}`);
    }
    
    // Try structured output first (tool calling), fallback to regex parsing
    structuredData = null;
    characterAnalysis = '';
    
    // CRITICAL NULL-CHECKING: Validate AI response structure
    const choices = characterData?.choices || [];
    console.log('📊 AI Response structure:', JSON.stringify({ 
      hasChoices: choices.length > 0,
      firstChoice: choices[0] ? {
        hasMessage: !!choices[0].message,
        hasToolCalls: !!choices[0].message?.tool_calls,
        hasContent: !!choices[0].message?.content
      } : null
    }));
    
    if (choices.length === 0) {
      console.error('❌ No choices in AI response:', JSON.stringify(characterData));
      throw new Error('AI response missing choices array');
    }
    
    const firstChoice = choices[0];
    if (!firstChoice || !firstChoice.message) {
      console.error('❌ Invalid first choice structure:', JSON.stringify(firstChoice));
      throw new Error('AI response missing message in first choice');
    }
    
    if (choices[0].message.tool_calls && choices[0].message.tool_calls.length > 0) {
      try {
        const toolCall = choices[0].message.tool_calls[0];
        structuredData = JSON.parse(toolCall.function.arguments);
        console.log(`✅ Using structured output: ${structuredData.characters?.length || 0} characters extracted`);
      } catch (e) {
        console.error('Failed to parse structured output:', e);
      }
    }
    
    // Fallback to text parsing if no structured data
    if (!structuredData) {
      characterAnalysis = choices[0].message.content || '';
      console.log('⚠️ Falling back to regex parsing');
    }

    // Track all extracted character names for later use
    extractedNames.clear();
    
    // STRUCTURED DATA PATH (preferred)
    if (structuredData && structuredData.characters) {
      console.log(`Processing ${structuredData.characters.length} characters from structured output`);
      
      // POST-PROCESSING: Validate each character actually participates in the chapter text
      const textContent = manuscript.content || '';
      const textLower = textContent.toLowerCase();
      const actionVerbs = ['said', 'thought', 'felt', 'asked', 'replied', 'whispered', 'shouted', 'yelled', 'muttered', 'screamed', 'cried', 'laughed', 'smiled', 'frowned', 'grabbed', 'walked', 'ran', 'looked', 'turned', 'nodded', 'shook', 'sighed', 'gasped', 'grinned', 'glared', 'stared', 'spoke', 'answered', 'demanded', 'exclaimed', 'murmured', 'growled', 'snapped', 'hissed', 'called', 'told', 'explained'];
      
      const validatedCharacters = structuredData.characters.filter((char: any) => {
        const name = (char.name || '').trim();
        if (!name) return false;
        
        // Check if character name appears near action verbs (dialogue/action context)
        const nameEsc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const hasDialogue = new RegExp(`${nameEsc}\\s+(said|thought|felt|asked|replied|whispered|shouted|spoke|answered|demanded|told|exclaimed|murmured)`, 'i').test(textContent);
        const hasAction = new RegExp(`${nameEsc}\\s+(grabbed|walked|ran|looked|turned|nodded|smiled|frowned|laughed|sighed|grinned|glared|stared|shook|gasped|growled|snapped|hissed|called)`, 'i').test(textContent);
        const hasQuotedSpeech = new RegExp(`${nameEsc}[^.]*["'\u201C\u201D]`, 'i').test(textContent);
        // Also check if name appears as subject performing actions via comma patterns
        const hasSubjectAction = new RegExp(`${nameEsc},?\\s+(who|then|quickly|slowly|carefully|suddenly|immediately)`, 'i').test(textContent);
        
        const participates = hasDialogue || hasAction || hasQuotedSpeech || hasSubjectAction;
        
        if (!participates) {
          console.log(`⛔ POST-FILTER: Rejecting "${name}" — no dialogue or actions found in chapter text. Likely only mentioned/referenced.`);
        } else {
          console.log(`✅ POST-FILTER: "${name}" confirmed active participant in chapter`);
        }
        
        return participates;
      });
      
      console.log(`Post-filter: ${structuredData.characters.length} → ${validatedCharacters.length} characters`);
      structuredData.characters = validatedCharacters;
      
      let createdCount = 0;
      
      for (const char of structuredData.characters) {
        const name = char.name?.trim();
        
        if (!name || name.length < 2 || name.length > 40) {
          console.log(`Skipping invalid length name: ${name}`);
          continue;
        }
        
        if (!isValidCharacterName(name) || extractedNames.has(name.toLowerCase())) {
          console.log(`Skipping invalid/duplicate name: ${name}`);
          continue;
        }
        extractedNames.add(name.toLowerCase());
        
        const description = char.description || `Character from ${manuscript.title}`;
        const traits = Array.isArray(char.traits) ? char.traits.filter((t: string) => t.length > 2 && t.length < 100) : [];
        
        console.log(`━━━ Processing character: "${name}" with ${traits.length} traits (structured) ━━━`);
        
        // Check if character has existing profile - use smart fuzzy matching
        // to link characters across chapters (e.g. "Godric" from Ch0 found in Ch1)
        let matchQuery = supabase
          .from('characters')
          .select('id, name, blocked')
          .eq('user_id', manuscript.user_id);
        if (manuscript.project_id) {
          matchQuery = matchQuery.eq('project_id', manuscript.project_id);
        }
        const { data: allUserCharsForMatch } = await matchQuery;

        let existingProfile: { id: string; name: string; blocked: boolean } | null = null;

        if (allUserCharsForMatch && allUserCharsForMatch.length > 0) {
          // Exact case-insensitive match first
          const exactMatch = allUserCharsForMatch.find(
            (c: any) => c.name.toLowerCase() === name.toLowerCase()
          );
          if (exactMatch) {
            existingProfile = exactMatch;
          } else {
            // Fuzzy match: substring, first-name match, title stripping
            const stripTitle = (s: string) => s.replace(/^(the|a|an)\s+/i, '').trim();
            let bestMatch: { id: string; name: string; blocked: boolean; score: number } | null = null;

            for (const c of allUserCharsForMatch) {
              const n1 = name.toLowerCase().trim();
              const n2 = c.name.toLowerCase().trim();
              let score = 0;

              if (n1.includes(n2) || n2.includes(n1)) score = 90;
              else {
                const s1 = stripTitle(n1);
                const s2 = stripTitle(n2);
                if (s1.includes(s2) || s2.includes(s1)) score = 85;
                else {
                  const w1 = s1.split(/\s+/);
                  const w2 = s2.split(/\s+/);
                  const shorter = w1.length < w2.length ? w1 : w2;
                  const longer = w1.length < w2.length ? s2 : s1;
                  const matching = shorter.filter(w => w.length > 2 && longer.includes(w));
                  if (matching.length === shorter.length && shorter.length > 0) score = 75;
                }
              }

              if (score >= 75 && (!bestMatch || score > bestMatch.score)) {
                bestMatch = { ...c, score };
              }
            }

            if (bestMatch) {
              existingProfile = bestMatch;
              console.log(`  ✓ Fuzzy-matched "${name}" → "${bestMatch.name}" (score: ${bestMatch.score})`);
            }
          }
        }

        if (existingProfile?.blocked) {
          console.log(`Character "${name}" is blocked - skipping`);
          continue;
        }

        const voiceScales = {
          brashness: char.voice_scales?.brashness || 5,
          aggression: char.voice_scales?.aggression || 5,
          sophistication: char.voice_scales?.sophistication || 5,
          formality: char.voice_scales?.formality || 5,
          empathy: char.voice_scales?.empathy || 5,
          introspection: char.voice_scales?.introspection || 5
        };

        let characterId = existingProfile?.id;

        if (!existingProfile) {
          const { data: newChar, error: charError } = await supabase
            .from('characters')
            .insert({
              user_id: manuscript.user_id,
              manuscript_id: manuscript.id,
              project_id: manuscript.project_id || null,
              name,
              description,
              source_type: 'ai',
              personality_traits: traits,
            })
            .select('id')
            .single();

          if (charError) {
            console.error(`Error creating character ${name}:`, charError);
            continue;
          }

          characterId = newChar.id;
          createdCount++;
          console.log(`✅ Created new character profile: ${name}`);
        } else {
          console.log(`Found existing profile for: ${name}`);
        }

        // Save voice scales, traits, AND timeline entry
        if (characterId) {
          await supabase.from('character_voice_scales').upsert({
            character_id: characterId,
            manuscript_id: manuscript.id,
            source_type: 'ai',
            ...voiceScales
          });

          if (traits.length > 0) {
            await supabase.from('character_traits').delete()
              .eq('character_id', characterId)
              .eq('manuscript_id', manuscript.id)
              .eq('source_type', 'ai');

            await supabase.from('character_traits').insert(
              traits.map((trait: string) => ({
                character_id: characterId,
                manuscript_id: manuscript.id,
                source_type: 'ai',
                trait
              }))
            );
          }

          // CRITICAL: Create timeline entry so the character shows up in the chapter timeline UI
          const msChapterNum = manuscript.chapter_number ?? 0;
          const profileText = description.length > 200 ? description.substring(0, 200) + '...' : description;
          
          const timelinePayload = {
            user_id: manuscript.user_id,
            character_id: characterId,
            manuscript_id: manuscript.id,
            chapter_number: msChapterNum,
            chapter_title: manuscript.chapter_title || manuscript.title || `Chapter ${msChapterNum}`,
            voice_scales: voiceScales,
            flags: [],
            profile_text: profileText,
            analysis_text: description,
            master_summary: description,
            traits: traits.slice(0, 8),
            emotional_state: char.emotional_state || null,
            sentiment: char.sentiment || null,
            dialogue_patterns: Array.isArray(char.dialogue_patterns) ? char.dialogue_patterns.slice(0, 10) : null,
            relationships: char.relationships || null,
            internal_dialogue: Array.isArray(char.internal_dialogue) ? char.internal_dialogue.slice(0, 20) : [],
            external_dialogue: Array.isArray(char.external_dialogue) ? char.external_dialogue.slice(0, 20) : [],
            views_of_others: char.views_of_others || null,
            views_by_others: char.views_by_others || null,
            source_type: 'ai',
            updated_at: new Date().toISOString(),
          };

          // Upsert: update if exists, create if not
          const { data: existingTimelineEntry } = await supabase
            .from('character_timeline_entries')
            .select('id')
            .eq('character_id', characterId)
            .eq('manuscript_id', manuscript.id)
            .eq('chapter_number', msChapterNum)
            .eq('source_type', 'ai')
            .maybeSingle();

          if (existingTimelineEntry) {
            await supabase
              .from('character_timeline_entries')
              .update(timelinePayload)
              .eq('id', existingTimelineEntry.id);
            console.log(`  ✓ Updated timeline entry for ${name} ch${msChapterNum}`);
          } else {
            await supabase
              .from('character_timeline_entries')
              .insert(timelinePayload);
            console.log(`  ✓ Created timeline entry for ${name} ch${msChapterNum}`);
          }

          // Update character.timeline_data cache with all entries
          try {
            const { data: allEntries } = await supabase
              .from('character_timeline_entries')
              .select('*')
              .eq('character_id', characterId)
              .order('chapter_number');

            if (allEntries && allEntries.length > 0) {
              const timelineData: Record<string, any> = {};
              for (const entry of allEntries) {
                const key = `${entry.manuscript_id}_${entry.chapter_number}`;
                timelineData[key] = {
                  chapter_number: entry.chapter_number,
                  chapter_title: entry.chapter_title,
                  voice_scales: entry.voice_scales,
                  flags: entry.flags,
                  profile_text: entry.profile_text,
                  analysis_text: entry.analysis_text,
                  traits: entry.traits,
                  source_type: entry.source_type,
                  manuscript_id: entry.manuscript_id,
                };
              }
              await supabase
                .from('characters')
                .update({ timeline_data: timelineData })
                .eq('id', characterId);
            }
          } catch (cacheErr) {
            console.error('Error caching timeline_data:', cacheErr);
          }
        }
      }
      
      console.log(`Created ${createdCount} new character profiles from structured output`);
      
    } else if (characterAnalysis) {
      // REGEX FALLBACK PATH
      const characterMatch = characterAnalysis.match(/CHARACTER ANALYSIS:?\s*([\s\S]*?)(?=GLOSSARY TERMS|MEMORABLE MOMENTS|$)/i);
      console.log('Character analysis section found:', !!characterMatch);
      
      if (characterMatch) {
        const charText = characterMatch[1];
        console.log('Character text length:', charText.length);
        
        // FIXED REGEX: Don't require leading newline, capture names 1-38 chars
        const charBlocks = charText.split(/\*\*([A-Z][a-zA-Z'\- ]{1,38})\*\*/g).filter((b: string) => b.trim());
        
        console.log(`Found ${Math.floor(charBlocks.length / 2)} potential character blocks`);
        
        let createdCount = 0;
        
        // Process pairs: name, content, name, content, etc.
        for (let i = 0; i < charBlocks.length - 1; i += 2) {
          const name = charBlocks[i].trim();
          const block = charBlocks[i + 1];
          
          // Skip if this looks like a section header, not a character name
          if (!name || name.length < 2 || name.length > 40) {
            console.log(`Skipping invalid length name: ${name}`);
            continue;
          }
          
          // Validate character name
          if (!isValidCharacterName(name) || extractedNames.has(name.toLowerCase())) {
            console.log(`Skipping invalid/duplicate name: ${name}`);
            continue;
          }
          extractedNames.add(name.toLowerCase());
          
          // Extract description, traits, and voice scales
          const descMatch = block.match(/(?:Description|Role|Brief description):\s*([^\n]+(?:\n(?!\w+:)[^\n]+)*)/i);
          const traitsMatch = block.match(/(?:Traits|Personality traits|Key personality traits):\s*([^\n]+(?:\n[-*\s]+[^\n]+)*)/i);
          
          // Extract voice scales
          const brashnessMatch = block.match(/Brashness:\s*(\d+)/i);
          const aggressionMatch = block.match(/Aggression:\s*(\d+)/i);
          const sophisticationMatch = block.match(/Sophistication:\s*(\d+)/i);
          const formalityMatch = block.match(/Formality:\s*(\d+)/i);
          const empathyMatch = block.match(/Empathy:\s*(\d+)/i);
          const introspectionMatch = block.match(/Introspection:\s*(\d+)/i);
          
          if (name) {
            
            const description = descMatch ? descMatch[1].trim().replace(/\n/g, ' ') : `Character from ${manuscript.title}`;
            
            // Parse traits more flexibly - handle bullets, dashes, commas, or newlines
            let traits: string[] = [];
            if (traitsMatch) {
              const traitsText = traitsMatch[1];
              // Split on commas, bullets, dashes, or newlines
              traits = traitsText
                .split(/[,\n]|[-*]\s+/)
                .map((t: string) => t.trim())
                .filter((t: string) => t.length > 2 && t.length < 100);
            }
            
            console.log(`━━━ Processing character: "${name}" with ${traits.length} traits (regex) ━━━`);
            
            // Check if character has existing profile - if so, always process them (even with 1 mention)
            const { data: existingProfile } = await supabase
              .from('characters')
            .select('id')
            .eq('user_id', manuscript.user_id)
            .or(`name.eq.${name},name.ilike.%${name}%`)
            .limit(1);
          
          const hasExistingProfile = existingProfile && existingProfile.length > 0;
          
          // Check appearance metrics for logging purposes
          const hasTag = hasAtTagForName(name, manuscript.content);
          const nameRegex = new RegExp(`\\b${name}\\b`, 'gi');
          const appearances = (manuscript.content.match(nameRegex) || []).length;
          
          console.log(`  ✓ Processing "${name}" (@tagged: ${hasTag}, appears: ${appearances} times, has profile: ${hasExistingProfile})`);


          // Smart character matching - handles aliases, partial names, and title reveals
          let characterId: string | null = null;
          let matchedCharName = '';
          
          // Fetch all existing characters for this user for smart matching
          let allCharsQuery = supabase
            .from('characters')
            .select('id, name, source_type')
            .eq('user_id', manuscript.user_id);
          if (manuscript.project_id) {
            allCharsQuery = allCharsQuery.eq('project_id', manuscript.project_id);
          }
          const { data: allChars } = await allCharsQuery;
          
          if (allChars && allChars.length > 0) {
            // Helper: Calculate name similarity score (0-100)
            const calculateNameSimilarity = (name1: string, name2: string): number => {
              const n1 = name1.toLowerCase().trim();
              const n2 = name2.toLowerCase().trim();
              
              // Exact match
              if (n1 === n2) return 100;
              
              // One is substring of the other (e.g., "Haldric" in "Haldric Tosa")
              if (n1.includes(n2) || n2.includes(n1)) return 90;
              
              // Check for title patterns: "The Hunter" → "Hunter Steel"
              const stripTitle = (s: string) => s.replace(/^(the|a|an)\s+/i, '');
              const n1NoTitle = stripTitle(n1);
              const n2NoTitle = stripTitle(n2);
              
              // After stripping titles, check if one contains the other
              if (n1NoTitle !== n1 || n2NoTitle !== n2) {
                if (n1NoTitle.includes(n2NoTitle) || n2NoTitle.includes(n1NoTitle)) return 85;
                
                // Check if first word matches (e.g., "Hunter" in both "The Hunter" and "Hunter Steel")
                const n1FirstWord = n1NoTitle.split(/\s+/)[0];
                const n2FirstWord = n2NoTitle.split(/\s+/)[0];
                if (n1FirstWord === n2FirstWord && n1FirstWord.length > 2) return 80;
              }
              
              // Check if all words from shorter name appear in longer name
              const words1 = n1.split(/\s+/);
              const words2 = n2.split(/\s+/);
              const shorter = words1.length < words2.length ? words1 : words2;
              const longer = words1.length < words2.length ? n2 : n1;
              
              const matchingWords = shorter.filter(w => w.length > 2 && longer.includes(w));
              if (matchingWords.length === shorter.length && shorter.length > 0) return 75;
              
              return 0;
            };
            
            // Find best matching character
            let bestMatch: { id: string; name: string; score: number } | null = null;
            
            for (const char of allChars) {
              const similarity = calculateNameSimilarity(name, char.name);
              
              // Consider it a match if similarity >= 75%
              if (similarity >= 75) {
                if (!bestMatch || similarity > bestMatch.score) {
                  bestMatch = { id: char.id, name: char.name, score: similarity };
                }
              }
            }
            
            if (bestMatch) {
              characterId = bestMatch.id;
              matchedCharName = bestMatch.name;
              console.log(`  ✓ MATCHED "${name}" to existing character "${matchedCharName}" (similarity: ${bestMatch.score}%)`);
            }
          }
          
          if (characterId) {
            // Character already exists - use their ID
            console.log(`✓ REUSING existing character profile for "${name}"`);
            console.log(`  Character ID: ${characterId}`);
            console.log(`  Now adding timeline entry for manuscript: ${manuscript.id}`);
            // DO NOT UPDATE the main character row - it's the master profile
            // We only ADD timeline entries below
          } else {
            // New character - create master profile
            console.log(`✓ Creating NEW character profile for "${name}"`);
            const { data: newChar, error: charError } = await supabase
              .from('characters')
              .insert({
                user_id: manuscript.user_id,
                manuscript_id: manuscript.id,
                project_id: manuscript.project_id || null,
                name,
                description,
                personality_traits: traits.slice(0, 5),
                source_type: 'ai'
              })
              .select('id')
              .single();
            
            if (charError || !newChar) {
              console.error(`✗ Error creating character "${name}":`, charError);
              continue;
            }
            
            characterId = newChar.id;
            createdCount++;
            console.log(`  Character ID: ${characterId}`);
            console.log(`  First appearance: ${manuscript.title} (${manuscript.id})`);
          }
          
          // NOW: Always INSERT new timeline entry for this chapter/manuscript
          // Check if we already have data for this character in THIS manuscript
          console.log(`  Checking for existing timeline data in manuscript ${manuscript.id}...`);
          const { data: existingTraits } = await supabase
            .from('character_traits')
            .select('id')
            .eq('character_id', characterId)
            .eq('manuscript_id', manuscript.id)
            .eq('source_type', 'ai')
            .limit(1);
          
          // Only add traits if we haven't analyzed this character in this manuscript yet
          if (!existingTraits || existingTraits.length === 0) {
            console.log(`  ↳ Adding NEW timeline entry for this manuscript`);
            
            // Add AI-extracted traits as NEW timeline entry for this manuscript
            if (traits.length > 0) {
              console.log(`    • Inserting ${traits.length} traits`);
              const traitRows = traits.slice(0, 5).map((trait) => ({
                character_id: characterId,
                manuscript_id: manuscript.id,
                trait,
                source_type: 'ai'
              }));
              if (traitRows.length > 0) {
                await supabase.from('character_traits').insert(traitRows);
              }
            }
            
            // Add AI voice scales as NEW timeline entry for this manuscript (avoid duplicates)
            const { data: existingScalesCheck } = await supabase
              .from('character_voice_scales')
              .select('character_id')
              .eq('character_id', characterId)
              .eq('manuscript_id', manuscript.id)
              .eq('source_type', 'ai')
              .limit(1);
            if (!existingScalesCheck || existingScalesCheck.length === 0) {
              if (brashnessMatch || aggressionMatch || sophisticationMatch) {
                console.log(`    • Inserting voice scales`);
                await supabase.from('character_voice_scales').upsert({
                  character_id: characterId,
                  manuscript_id: manuscript.id,
                  brashness: brashnessMatch ? parseInt(brashnessMatch[1]) : 5,
                  aggression: aggressionMatch ? parseInt(aggressionMatch[1]) : 5,
                  sophistication: sophisticationMatch ? parseInt(sophisticationMatch[1]) : 5,
                  formality: formalityMatch ? parseInt(formalityMatch[1]) : 5,
                  empathy: empathyMatch ? parseInt(empathyMatch[1]) : 5,
                  introspection: introspectionMatch ? parseInt(introspectionMatch[1]) : 5,
                  source_type: 'ai'
                });
              }
            } else {
              console.log(`    • Voice scales already present for this manuscript, skipping`);
            }
            
            console.log(`  ✓ Timeline entry added successfully`);
          } else {
            console.log(`  ⊘ Timeline entry already exists - skipping duplicate`);
          }
          console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
          console.log('');
        }
      }
      console.log('');
      console.log('═══════════════════════════════════════════════════════════════');
      console.log(`CHARACTER PROCESSING COMPLETE`);
      console.log(`  New character profiles created: ${createdCount}`);
      console.log(`  Total characters processed: ${charBlocks.length}`);
      console.log(`  Manuscript: ${manuscript.title}`);
      console.log('═══════════════════════════════════════════════════════════════');
      console.log('');
      
    } else {
      console.log('No CHARACTER ANALYSIS section found in AI response');
    }
  }  // Close the character processing block

    

    // Extract and save glossary terms
    // First try structured data, then fall back to regex
    let glossaryTermsToProcess: Array<{ word: string; wordType: string; definition: string }> = [];
    
    if (structuredData && structuredData.glossary_terms && structuredData.glossary_terms.length > 0) {
      console.log(`📖 Processing ${structuredData.glossary_terms.length} glossary terms from structured output`);
      glossaryTermsToProcess = structuredData.glossary_terms.map((t: any) => ({
        word: (t.word || '').trim().replace(/[\s]+/g, ' ').replace(/[.,;:!?]+$/, '').trim(),
        wordType: (t.word_type || 'other').toLowerCase(),
        definition: (t.definition || '').trim(),
      })).filter((t: { word: string }) => t.word.length >= 2);
    } else {
      // Regex fallback
      const glossaryMatch = characterAnalysis.match(/GLOSSARY TERMS:?\s*([\s\S]*?)(?=MEMORABLE MOMENTS|$)/i);
      console.log('Glossary section found:', !!glossaryMatch);
      
      if (glossaryMatch) {
        const glossaryText = glossaryMatch[1];
        console.log('Glossary text length:', glossaryText.length);
        
        let termLines = glossaryText.split('\n').filter((line: string) => 
          line.includes('WORD:') && line.includes('TYPE:') && line.includes('DEFINITION:')
        );
        if (termLines.length === 0) {
          const alt = glossaryText.split('\n').filter((line: string) => 
            /^[-*]?\s*([^:|]{3,})\s*:\s*(.+)$/i.test(line)
          );
          termLines = alt;
        }
        
        for (const rawLine of termLines.slice(0, 20)) {
          const line = rawLine.replace(/\s+/g, ' ').trim();
          const wordMatch = line.match(/WORD:\s*([^|]+)/i);
          const typeMatch = line.match(/TYPE:\s*([^|]+)/i);
          const defMatch = line.match(/DEFINITION:\s*(.+)/i);

          if (wordMatch && typeMatch && defMatch) {
            glossaryTermsToProcess.push({
              word: wordMatch[1].trim().replace(/[\s]+/g, ' ').replace(/[.,;:!?]+$/,'').trim(),
              wordType: typeMatch[1].trim().toLowerCase(),
              definition: defMatch[1].trim(),
            });
          } else {
            const altMatch = line.match(/^[-*]?\s*([^:|]{3,})\s*:\s*(.+)$/i);
            if (altMatch) {
              glossaryTermsToProcess.push({
                word: altMatch[1].trim(),
                wordType: 'other',
                definition: altMatch[2].trim(),
              });
            }
          }
        }
      }
    }

    // Post-extraction filtering: remove character names and common English words
    const extractedCharacterNames = new Set(
      (structuredData?.characters || []).map((c: any) => (c.name || '').toLowerCase().trim())
    );
    // Also include existing character names from DB
    const allCharNames = new Set([
      ...extractedCharacterNames,
      ...(existingChars || []).map((c: any) => (c.name || '').toLowerCase().trim())
    ]);
    
    // Common English words that should never be glossary terms
    const commonWords = new Set([
      'humans', 'human', 'people', 'person', 'man', 'woman', 'men', 'women', 'child', 'children',
      'king', 'queen', 'prince', 'princess', 'lord', 'lady', 'knight', 'soldier', 'guard', 'captain',
      'hunter', 'warrior', 'priest', 'priestess', 'elder', 'chief', 'leader',
      'animal', 'animals', 'beast', 'beasts', 'creature', 'creatures', 'bird', 'birds',
      'rodent', 'rodents', 'snake', 'wolf', 'bear', 'dragon', 'horse',
      'sword', 'spear', 'shield', 'bow', 'arrow', 'armor', 'weapon',
      'magic', 'spell', 'curse', 'power', 'energy', 'force',
      'mountain', 'river', 'forest', 'ocean', 'sea', 'lake', 'island', 'city', 'village', 'town',
      'war', 'battle', 'fight', 'death', 'life', 'love', 'hate', 'fear', 'hope',
      'fire', 'water', 'earth', 'air', 'wind', 'storm', 'lightning', 'thunder',
      'god', 'gods', 'goddess', 'spirit', 'spirits', 'soul', 'demon', 'angel',
      'day', 'night', 'sun', 'moon', 'star', 'stars', 'sky', 'world',
      'prologue', 'epilogue', 'chapter',
    ]);
    
    glossaryTermsToProcess = glossaryTermsToProcess.filter(term => {
      const lower = term.word.toLowerCase().trim();
      
      // Filter out character names (exact match or contained in term)
      if (allCharNames.has(lower)) {
        console.log(`Filtering glossary term "${term.word}" - matches character name`);
        return false;
      }
      // Filter "[Title] [CharName]" patterns like "Silver Wing Godric"
      for (const charName of allCharNames) {
        if (lower.includes(charName) && lower !== charName) {
          console.log(`Filtering glossary term "${term.word}" - contains character name "${charName}"`);
          return false;
        }
      }
      // Filter common English words
      if (commonWords.has(lower)) {
        console.log(`Filtering glossary term "${term.word}" - common English word`);
        return false;
      }
      return true;
    });
    
    console.log(`Found ${glossaryTermsToProcess.length} glossary terms to process (after filtering)`);
    let glossaryCreatedCount = 0;
    let glossaryLinkedCount = 0;
    
    for (const parsed of glossaryTermsToProcess.slice(0, 20)) {
      const { word, wordType, definition } = parsed;
      console.log(`Processing glossary term: ${word}`);

      let glossaryLookupQuery = supabase
        .from('world_glossary')
        .select('id, definition, appears_in, created_at, locked, word_type, category')
        .eq('user_id', manuscript.user_id)
        .ilike('word', word);
      if (manuscript.project_id) {
        glossaryLookupQuery = glossaryLookupQuery.eq('project_id', manuscript.project_id);
      }
      const { data: existingList } = await glossaryLookupQuery
        .order('created_at', { ascending: true })
        .limit(5);

      if (existingList && existingList.length > 0) {
        const canonical = existingList[0];
        
        if (canonical.locked) {
          console.log(`  ⚠️  Glossary term "${word}" is locked - skipping AI modifications`);
          const currentAppears = Array.isArray(canonical.appears_in) ? canonical.appears_in : [];
          const nextAppears = Array.from(new Set([...(currentAppears || []), (manuscript.chapter_number || 1)]));
          await supabase
            .from('world_glossary')
            .update({ appears_in: nextAppears })
            .eq('id', canonical.id);
          continue;
        }
        
        const currentAppears = Array.isArray(canonical.appears_in) ? canonical.appears_in : [];
        const nextAppears = Array.from(new Set([...(currentAppears || []), (manuscript.chapter_number || 1)]));
        const shouldUpdateDef = definition && (!canonical.definition || definition.length > (canonical.definition || '').length);

        const updatePayload: any = { appears_in: nextAppears };
        if (shouldUpdateDef) updatePayload.definition = definition;
        
        if (!canonical.word_type || canonical.word_type === 'other') {
          updatePayload.word_type = wordType;
        }
        if (!canonical.category) {
          updatePayload.category = wordType;
        }

        const { error: updErr } = await supabase
          .from('world_glossary')
          .update(updatePayload)
          .eq('id', canonical.id);
        if (updErr) {
          console.error(`Error updating glossary term ${word}:`, updErr);
        } else {
          glossaryLinkedCount++;
          console.log(`Updated existing glossary term: ${word}`);
        }
      } else {
        const { error: glossaryError } = await supabase.from('world_glossary').insert({
          user_id: manuscript.user_id,
          manuscript_id: manuscript.id,
          project_id: manuscript.project_id || null,
          source_type: 'ai',
          word,
          definition,
          word_type: wordType,
          ai_interpretation: definition,
          category: wordType,
          appears_in: [manuscript.chapter_number || 1]
        });
        if (glossaryError) {
          console.error(`Error creating glossary term ${word}:`, glossaryError);
        } else {
          glossaryCreatedCount++;
          console.log(`Added new AI glossary term: ${word}`);
        }
      }
    }
    console.log(`Successfully created ${glossaryCreatedCount} new glossary terms, reused ${glossaryLinkedCount} existing`);

    

    // Add the "getting started" combined reaction is already queued earlier
    
    // Extract memorable moments from the AI response
    const momentsMatch = characterAnalysis.match(/MEMORABLE MOMENTS:?\s*([\s\S]*?)(?=\n\n#|$)/i);
    const momentsText = momentsMatch ? momentsMatch[1] : '';
    
    // Parse moments into reactions and enqueue them (5s scheduler will post)
    const momentLines = momentsText.split('\n').filter((line: string) => line.trim() && line.includes('-'));
    const mmIcons = ['Laugh', 'Heart', 'Sparkles', 'Eye', 'Zap', 'MessageCircle', 'Star', 'ThumbsUp', 'HeartCrack', 'Frown'];
    momentLines.slice(0, 12).forEach((raw: string, i: number) => {
      const moment = raw.trim().replace(/^[-•*]\s*/, '');
      if (moment.length > 10) {
        reactionQueue.push({ icon: mmIcons[i % mmIcons.length], text: moment });
      }
    });

    } // end character extraction block

    // Chapter-by-chapter character analysis
    
    // Use the chapter_number from the manuscript record (no auto-detection)
    const chapterNum = manuscript.chapter_number ?? 1;
    const chapterTitle = manuscript.chapter_title || manuscript.title;
    
    const chaptersInfo = [
      {
        number: chapterNum,
        title: chapterTitle,
        summary: `Chapter ${chapterNum} of the manuscript`
      }
    ];
    
    console.log(`Treating this manuscript as Chapter ${chapterNum}: ${chapterTitle}`);

    

    // Get ALL user characters for analysis (not just ones with traits in this manuscript)
    // This ensures we analyze all relevant characters even in new chapters
    let allUserCharsQuery = supabase
      .from('characters')
      .select('id, name, blocked')
      .eq('user_id', manuscript.user_id);
    if (manuscript.project_id) {
      allUserCharsQuery = allUserCharsQuery.eq('project_id', manuscript.project_id);
    }
    const { data: allUserChars } = await allUserCharsQuery
      .order('created_at', { ascending: false });
    
    console.log(`Found ${allUserChars?.length || 0} total user characters for analysis`);

    // === PRIOR CHAPTER CONTEXT: Query characters from earlier chapters (chronological isolation) ===
    let priorChapterCharacterNames: string[] = [];
    if (chapterNum > 0) {
      // Find all manuscripts with a lower chapter number for this user
      let priorMsQuery = supabase
        .from('manuscripts')
        .select('id, chapter_number')
        .eq('user_id', manuscript.user_id)
        .lt('chapter_number', chapterNum)
        .not('chapter_number', 'is', null);
      if (manuscript.project_id) {
        priorMsQuery = priorMsQuery.eq('project_id', manuscript.project_id);
      }
      const { data: priorManuscripts } = await priorMsQuery;

      if (priorManuscripts && priorManuscripts.length > 0) {
        const priorManuscriptIds = priorManuscripts.map((m: any) => m.id);
        
        // Strategy 1: Get characters that have timeline entries in those prior manuscripts
        const { data: priorTimelineEntries } = await supabase
          .from('character_timeline_entries')
          .select('character_id')
          .in('manuscript_id', priorManuscriptIds);
        
        const priorCharIdsFromTimeline = new Set(
          (priorTimelineEntries || []).map((e: any) => e.character_id)
        );
        
        // Strategy 2: Also get characters directly linked to prior manuscripts via characters.manuscript_id
        const { data: priorDirectChars } = await supabase
          .from('characters')
          .select('id, name')
          .eq('user_id', manuscript.user_id)
          .in('manuscript_id', priorManuscriptIds)
          .eq('blocked', false);
        
        // Merge both sets
        const allPriorCharIds = new Set([
          ...priorCharIdsFromTimeline,
          ...(priorDirectChars || []).map((c: any) => c.id),
        ]);
        
        if (allPriorCharIds.size > 0) {
          const { data: priorChars } = await supabase
            .from('characters')
            .select('name')
            .in('id', [...allPriorCharIds]);
          
          priorChapterCharacterNames = (priorChars || []).map((c: any) => c.name);
        }
        
        console.log(`Found ${priorChapterCharacterNames.length} characters from chapters before ${chapterNum}: ${priorChapterCharacterNames.join(', ')}`);
        reactionQueue.push({ icon: 'Search', text: `Cross-referencing with ${priorManuscripts.length} earlier chapter${priorManuscripts.length > 1 ? 's' : ''}...` });
      } else {
        console.log(`No prior chapters found before chapter ${chapterNum}`);
      }
    }
    
    // Call 3 (Character Chapter Analysis) was removed — it was redundant with Call 2's structured extraction.
    // Call 2 already extracts voice scales, emotional state, sentiment, dialogue patterns, and relationships
    // via structured tool calling (more accurate than Call 3's regex parsing).
    // Call 3 was also overwriting timeline entries created by Call 2 with worse data.
    let characterChapterAnalysis = '';
    
    // Ensure all extracted characters have profiles (no @tag requirement)
    console.log('Ensuring all extracted characters have profiles...');
    
    // Get all character names we just extracted from CHARACTER ANALYSIS
    const allExtractedNames = Array.from(extractedNames);
    
    for (const charName of allExtractedNames) {
      // Check if profile exists for this character
      let profileQuery = supabase
        .from('characters')
        .select('id, name')
        .eq('user_id', manuscript.user_id)
        .ilike('name', charName);
      if (manuscript.project_id) {
        profileQuery = profileQuery.eq('project_id', manuscript.project_id);
      }
      const { data: existingProfile } = await profileQuery.limit(1);
      
      if (!existingProfile || existingProfile.length === 0) {
        console.log(`Creating profile for extracted character: ${charName}`);
        
        await supabase.from('characters').insert({
          user_id: manuscript.user_id,
          manuscript_id: manuscript.id,
          project_id: manuscript.project_id || null,
          name: charName,
          description: `Character from ${manuscript.title}`,
          personality_traits: [],
          source_type: 'ai'
        });
      }
    }

    console.log('Analyzing voice consistency across manuscript...');

    // Fetch ALL characters (user-created AND AI-extracted) for voice consistency check
    let consistencyQuery = supabase
      .from('characters')
      .select(`
        id, 
        name, 
        description,
        source_type
      `)
      .eq('user_id', manuscript.user_id);
    if (manuscript.project_id) {
      consistencyQuery = consistencyQuery.eq('project_id', manuscript.project_id);
    }
    const { data: allCharsForConsistency } = await consistencyQuery;

    // Fetch user's world glossary for reference
    let glossaryDataQuery = supabase
      .from('world_glossary')
      .select('*')
      .eq('user_id', manuscript.user_id);
    if (manuscript.project_id) {
      glossaryDataQuery = glossaryDataQuery.eq('project_id', manuscript.project_id);
    }
    const { data: glossaryData } = await glossaryDataQuery;

    let consistencyAnalysis = '';

    // ALWAYS run voice consistency check if we have ANY characters
    if (allCharsForConsistency && allCharsForConsistency.length > 0 && hasTimeBudget()) {
      console.log(`Found ${allCharsForConsistency.length} character profiles - performing detailed voice consistency check (time remaining: ${Math.round((TIME_BUDGET_MS - (Date.now() - analysisStartTime)) / 1000)}s)`);
      
      const consistencyPrompt = `Review this manuscript for voice consistency. 

CRITICAL REQUIREMENT: You MUST provide a voice assessment for EVERY character listed below. If a character has limited or no dialogue, state: "Not enough dialogue in this section to assess [Character Name]'s voice consistency yet."

Characters to assess: ${allCharsForConsistency.map((c: any) => c.name).join(', ')}

For each character:
- If they have dialogue: Note consistency, tone shifts, distinctive patterns (2-3 sentences)
- If they lack dialogue: State "Not enough dialogue in this section to assess [Character Name]'s voice consistency yet."

Manuscript:
${manuscript.content.substring(0, 40000)}

Character context:
${allCharsForConsistency.map((c: any) => `${c.name}: ${c.description || 'New character'}`).join('\n')}

Format EXACTLY as:
## Voice Consistency Overview

### [Character Name]
[Assessment or "Not enough dialogue" statement]

### [Next Character]
...

Remember: EVERY character above must get a section, no exceptions.`;

      const consistencyResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            { 
              role: 'system', 
              content: 'You are a literary analyst reviewing character voice consistency. You MUST mention every character requested, even if just to say there is not enough data.' 
            },
            { role: 'user', content: consistencyPrompt }
          ],
          max_tokens: 3000,
        }),
      });

      if (consistencyResponse.ok) {
        let cData;
        try { const t = await consistencyResponse.text(); cData = t ? JSON.parse(t) : null; } catch { cData = null; }
        consistencyAnalysis = cData?.choices?.[0]?.message?.content || '';
      }
    }

    // If no character profiles or fallback needed
    if (!consistencyAnalysis && hasTimeBudget()) {
      const consistencyPrompt = `Based on this manuscript, analyze voice consistency for each character.
For each character identified, check for:
1. Speech pattern inconsistencies
2. Vocabulary inconsistencies
3. Tone/personality shifts
4. Specific examples with quotes

Previous character analysis:
${characterAnalysis}

Manuscript:
${manuscript.content.substring(0, 50000)}`;

      const consistencyResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash-lite',
          messages: [
            { 
              role: 'system', 
              content: 'You are a literary analyst specializing in character voice consistency. Identify specific inconsistencies in how characters speak throughout the manuscript.' 
            },
            { role: 'user', content: consistencyPrompt }
          ],
          max_tokens: 3000,
        }),
      });

      if (!consistencyResponse.ok) {
        console.warn('Fallback consistency analysis failed:', consistencyResponse.status);
      }

      let consistencyData;
      try {
        const cText = await consistencyResponse.text();
        consistencyData = cText ? JSON.parse(cText) : null;
      } catch { consistencyData = null; }
      consistencyAnalysis = consistencyData?.choices?.[0]?.message?.content || '';
    }

    
    
    // Call 6 (Character Impressions) was removed — it was redundant with Call 7's
    // firstImpressions/evolution data which is already copied into character profile_text.
    let characterImpressions = '';
    

    // === AI-GENERATED CHAPTER SUMMARY with new vs recurring characters ===
    let chapterSynopsis = `Chapter ${chapterNum} of the manuscript.`;
    let newCharacters: Array<{ name: string; firstImpressions: string }> = [];
    let recurringCharacters: Array<{ name: string; evolution: string }> = [];

    // Summary is CRITICAL — never skip due to time budget
    try {
      // Re-fetch characters to include any newly created during this analysis
      const { data: freshUserChars } = await supabase
        .from('characters')
        .select('id, name, blocked')
        .eq('user_id', manuscript.user_id);
      
      // Build the list of character names found in this chapter from the analysis
      const charsInThisChapter = (freshUserChars || [])
        .filter((c: any) => !c.blocked && nameAppearsInText(c.name, manuscript.content))
        .map((c: any) => c.name);

      const priorCharNamesLower = new Set(priorChapterCharacterNames.map(n => n.toLowerCase()));
      
      const summaryPrompt = `You have just read Chapter ${chapterNum}${chapterTitle ? ` ("${chapterTitle}")` : ''} of a manuscript.

The following characters appear in this chapter: ${charsInThisChapter.join(', ') || 'None identified'}

${priorChapterCharacterNames.length > 0 
  ? `Characters known from EARLIER chapters (chapters 1-${chapterNum - 1}): ${priorChapterCharacterNames.join(', ')}` 
  : `This is the first chapter analyzed — all characters are newly introduced.`}

Based on the manuscript text below, provide your analysis using the generate_chapter_summary function.

RULES:
- The synopsis should be 3-5 sentences covering plot events, conflicts, tone, and key moments
- A character is "new" if they are NOT in the list of characters from earlier chapters
- A character is "recurring" if they ARE in the list of characters from earlier chapters
- For new characters: write a "first impressions" blurb — what would a reader assume about them from this chapter alone?
- For recurring characters: note how they appear or evolve in THIS chapter compared to earlier appearances
- NEVER reference chapters with numbers higher than ${chapterNum}

MANUSCRIPT TEXT:
${manuscript.content.substring(0, 30000)}`;

      {
      const summaryResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            { role: 'system', content: 'You are a literary analyst providing structured chapter summaries.' },
            { role: 'user', content: summaryPrompt }
          ],
          tools: [{
            type: 'function',
            function: {
              name: 'generate_chapter_summary',
              description: 'Generate a structured chapter summary with character classifications',
              parameters: {
                type: 'object',
                properties: {
                  synopsis: {
                    type: 'string',
                    description: '3-5 sentence narrative summary of the chapter plot, conflicts, and key moments'
                  },
                  newCharacters: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: { type: 'string' },
                        firstImpressions: { type: 'string', description: 'What a reader would assume about this character from this chapter alone' }
                      },
                      required: ['name', 'firstImpressions'],
                      additionalProperties: false
                    }
                  },
                  recurringCharacters: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: { type: 'string' },
                        evolution: { type: 'string', description: 'How this character appears or evolves in this chapter compared to earlier' }
                      },
                      required: ['name', 'evolution'],
                      additionalProperties: false
                    }
                  }
                },
                required: ['synopsis', 'newCharacters', 'recurringCharacters'],
                additionalProperties: false
              }
            }
          }],
          tool_choice: { type: 'function', function: { name: 'generate_chapter_summary' } },
          max_tokens: 3000,
        }),
      });

      if (summaryResponse.ok) {
        let summaryData;
        try {
          const sText = await summaryResponse.text();
          summaryData = sText ? JSON.parse(sText) : null;
        } catch { summaryData = null; }
        if (!summaryData) { console.warn('Summary response was empty/invalid'); }
        const toolCall = summaryData.choices?.[0]?.message?.tool_calls?.[0];
        if (toolCall?.function?.arguments) {
          const parsed = JSON.parse(toolCall.function.arguments);
          chapterSynopsis = parsed.synopsis || chapterSynopsis;
          newCharacters = parsed.newCharacters || [];
          recurringCharacters = parsed.recurringCharacters || [];
          console.log(`Chapter summary generated: ${newCharacters.length} new chars, ${recurringCharacters.length} recurring chars`);
        }
      } else {
        console.warn('Chapter summary AI call failed:', await summaryResponse.text());
      }
      } // end summary block
    } catch (summaryError) {
      console.error('Error generating chapter summary:', summaryError);
    }

    // === BUILD characterSummaryMap from manuscript summary ===
    // This ensures profile_text uses the SAME chapter-specific text from the summary
    const characterSummaryMap: Record<string, string> = {};
    const recurringCharNameSet = new Set<string>();

    for (const nc of newCharacters) {
      if (nc.name && nc.firstImpressions) {
        characterSummaryMap[nc.name.toLowerCase().trim()] = nc.firstImpressions;
      }
    }
    for (const rc of recurringCharacters) {
      if (rc.name && rc.evolution) {
        characterSummaryMap[rc.name.toLowerCase().trim()] = rc.evolution;
        recurringCharNameSet.add(rc.name.toLowerCase().trim());
      }
    }
    console.log(`Built characterSummaryMap with ${Object.keys(characterSummaryMap).length} entries: ${Object.keys(characterSummaryMap).join(', ')}`);

    // === UPDATE timeline entries for this manuscript with summary-sourced profile_text ===
    if (Object.keys(characterSummaryMap).length > 0) {
      const { data: timelineEntries } = await supabase
        .from('character_timeline_entries')
        .select('id, character_id, traits')
        .eq('manuscript_id', manuscript.id)
        .eq('source_type', 'ai');

      // Get character names for matching
      const timelineCharIds = (timelineEntries || []).map((e: any) => e.character_id);
      let charIdToName: Record<string, string> = {};
      if (timelineCharIds.length > 0) {
        const { data: chars } = await supabase
          .from('characters')
          .select('id, name')
          .in('id', timelineCharIds);
        for (const c of (chars || [])) {
          charIdToName[c.id] = c.name;
        }
      }

      // For recurring characters, fetch their PREVIOUS chapter traits to detect duplicates
      let previousTraitsMap: Record<string, Set<string>> = {};
      if (recurringCharNameSet.size > 0) {
        const recurringCharIds = Object.entries(charIdToName)
          .filter(([_, name]) => recurringCharNameSet.has(name.toLowerCase().trim()))
          .map(([id]) => id);
        
        if (recurringCharIds.length > 0) {
          const { data: prevEntries } = await supabase
            .from('character_timeline_entries')
            .select('character_id, traits')
            .in('character_id', recurringCharIds)
            .neq('manuscript_id', manuscript.id)
            .eq('source_type', 'ai');
          
          for (const entry of (prevEntries || [])) {
            if (!previousTraitsMap[entry.character_id]) {
              previousTraitsMap[entry.character_id] = new Set();
            }
            for (const t of (entry.traits || [])) {
              previousTraitsMap[entry.character_id].add(t.toLowerCase().trim());
            }
          }
        }
      }

      for (const entry of (timelineEntries || [])) {
        const charName = charIdToName[entry.character_id];
        if (!charName) continue;
        const key = charName.toLowerCase().trim();
        const summaryText = characterSummaryMap[key];
        
        const updatePayload: any = {};

        if (summaryText) {
          updatePayload.profile_text = summaryText.length > 200 ? summaryText.substring(0, 200) + '...' : summaryText;
          updatePayload.analysis_text = summaryText;
          console.log(`  ✓ Updating profile_text for "${charName}" from manuscript summary`);
        }

        // For recurring characters, check if traits are duplicated from previous chapters
        if (recurringCharNameSet.has(key) && previousTraitsMap[entry.character_id]) {
          const prevTraits = previousTraitsMap[entry.character_id];
          const currentTraits: string[] = entry.traits || [];
          const newTraits = currentTraits.filter((t: string) => !prevTraits.has(t.toLowerCase().trim()));
          
          if (newTraits.length === 0 && currentTraits.length > 0) {
            updatePayload.traits = ['No new personality traits identified in this chapter'];
            console.log(`  ✓ Replacing duplicated traits for recurring character "${charName}"`);
          } else if (newTraits.length < currentTraits.length) {
            updatePayload.traits = newTraits;
            console.log(`  ✓ Filtered ${currentTraits.length - newTraits.length} duplicate traits for "${charName}"`);
          }
        }

        if (Object.keys(updatePayload).length > 0) {
          await supabase
            .from('character_timeline_entries')
            .update(updatePayload)
            .eq('id', entry.id);
        }
      }
      console.log('✓ Timeline entries updated with manuscript summary data');
    }

    // Update chaptersInfo with the real synopsis
    chaptersInfo[0].summary = chapterSynopsis;

    const analysisResults = {
      summary: chapterSynopsis,
      newCharacters,
      recurringCharacters,
      characterAnalysis,
      consistencyAnalysis,
      chapters: chaptersInfo,
      detectedCharacters: [], // Legacy field for compatibility
    };

    // Clear the progress and reaction intervals
    if (progressInterval) clearInterval(progressInterval);
    if (reactionInterval) clearInterval(reactionInterval);
    
    // Randomized completion messages
    const completionMessages = [
      { icon: 'Sparkles', text: "Oh! Analysis is complete! Check the Summary tab for full results." },
      { icon: 'BookOpen', text: "Pardon me, the analysis was completed a while ago. I just got so drawn in!" },
      { icon: 'Star', text: "And... done! That was quite a read. Check the Summary tab!" },
      { icon: 'Heart', text: "Wow, finished! I got completely absorbed in your story. Results are ready in the Summary tab." },
      { icon: 'Eye', text: "Analysis complete! Sorry, I got a bit distracted by some excellent scenes there." },
      { icon: 'ThumbsUp', text: "All done! Your manuscript had me hooked. Check out the results!" },
      { icon: 'Zap', text: "Finished analyzing! Though I admit I was reading more than analyzing at some points..." },
      { icon: 'Laugh', text: "Analysis complete! I may have gotten carried away with the story. Results await in the Summary tab!" },
      { icon: 'MessageCircle', text: "Done! Your characters really came alive on the page. Check the Summary for details." },
      { icon: 'Sparkles', text: "All finished! What a journey that was. Head to the Summary tab for the full breakdown!" }
    ];
    
    const randomCompletion = completionMessages[Math.floor(Math.random() * completionMessages.length)];
    
    // Fetch current reactions and append completion message
    const { data: currentData } = await supabase
      .from('manuscripts')
      .select('reader_reactions')
      .eq('id', manuscript.id)
      .maybeSingle();
    
    const currentReactions = Array.isArray(currentData?.reader_reactions) ? currentData.reader_reactions : [];
    
    // Set progress to 100% and add final completion message
    await supabase
      .from('manuscripts')
      .update({ 
        analysis_results: analysisResults, 
        analysis_progress: 100,
        reader_reactions: [
          ...currentReactions,
          { icon: randomCompletion.icon, text: randomCompletion.text, timestamp: Date.now() }
        ]
      })
      .eq('id', manuscript.id);

    // Cancel fail-safe since we completed successfully
    clearTimeout(failSafeTimeout);
    console.log('Analysis complete');

  } catch (error) {
    console.error('Background analysis error:', error);
    if (progressInterval) clearInterval(progressInterval);
    if (reactionInterval) clearInterval(reactionInterval);
    if (!failSafeTriggered) {
      await supabase
        .from('manuscripts')
        .update({ 
          analysis_results: { error: error instanceof Error ? error.message : 'Unknown error' },
          analysis_progress: -1 
        })
        .eq('id', manuscript.id);
    }
  } finally {
    clearTimeout(failSafeTimeout);
  }
}
