/**
 * Claude API service for character analysis.
 * Replaces the Lovable edge functions (ai-analyze-manuscript, generate-character-text, parse-manuscript).
 * Calls Claude directly from the browser using the API key from env vars.
 *
 * NOTE: Calling Claude API directly from the browser exposes the API key in network requests.
 * For production, this should go through a backend proxy. For development, this is fine.
 */

const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;
const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

export function hasClaudeKey(): boolean {
  return !!CLAUDE_API_KEY;
}

async function callClaude(systemPrompt: string, userMessage: string, maxTokens: number = 4096): Promise<string> {
  if (!CLAUDE_API_KEY) {
    throw new Error('Claude API key not configured. Add VITE_CLAUDE_API_KEY to your .env file.');
  }

  const response = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': CLAUDE_API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: { message: response.statusText } }));
    throw new Error(`Claude API error: ${error.error?.message || response.statusText}`);
  }

  const data = await response.json();
  return data.content?.[0]?.text || '';
}

/**
 * Analyze a manuscript chapter — extract characters, traits, dialogue, glossary terms.
 * This replaces the Supabase edge function "ai-analyze-manuscript".
 */
export interface NotableAction {
  action: string;
  trigger: string;
}

export interface ReaderTone {
  openingLineOptions: string[];
  wouldAnswerOpenly: string;
  wouldDeflectAbout: string;
  wouldLieAbout: string;
}

export async function analyzeManuscript(
  chapterText: string,
  chapterNumber: number,
  chapterTitle: string,
  existingCharacters: string[] = [],
  priorKnowledge: Record<string, string> = {}
): Promise<{
  summary: string;
  characters: Array<{
    name: string;
    description: string;
    role: string;
    traits: string[];
    emotionalState: string;
    dialoguePatterns: string[];
    relationships: string;
    speechPattern: string;
    viewsOfOthers: string;
    viewsByOthers: string;
    internalDialogue: string[];
    externalDialogue: string[];
    knowledgeAtChapter: string;
    notableActions: NotableAction[];
    readerTone: ReaderTone;
    activeHoursLocal: string;
    activityPatternNote: string;
  }>;
  glossaryTerms: Array<{ word: string; definition: string; wordType: string }>;
}> {
  const systemPrompt = `You are a literary character analyst. You read manuscript chapters and extract detailed character data for a downstream live-chat system where readers speak with these characters. Respond in valid JSON only — no markdown, no code fences.`;

  const priorKnowledgeBlock = Object.keys(priorKnowledge).length > 0
    ? `KNOWLEDGE CARRIED FORWARD FROM PRIOR CHAPTERS (per character):
${Object.entries(priorKnowledge)
  .map(([name, knowledge]) => `- ${name}: ${knowledge || '(none yet)'}`)
  .join('\n')}

For each character with prior knowledge, your knowledgeAtChapter output MUST include everything carried forward PLUS anything newly revealed in this chapter. Output the FULL cumulative state — not just the delta.`
    : 'This is the first knowledge extraction for these characters. Their knowledgeAtChapter starts fresh from this chapter.';

  const userMessage = `Analyze this manuscript chapter and extract character data.

Chapter ${chapterNumber}: "${chapterTitle}"

${existingCharacters.length > 0 ? `Known characters from previous chapters: ${existingCharacters.join(', ')}` : 'This is the first chapter being analyzed.'}

${priorKnowledgeBlock}

TEXT:
${chapterText.substring(0, 50000)}

Respond with this exact JSON structure:
{
  "summary": "2-3 sentence chapter synopsis",
  "characters": [
    {
      "name": "Character Name",
      "description": "Brief character description based on this chapter",
      "role": "protagonist/antagonist/supporting/minor",
      "traits": ["trait1", "trait2", "trait3"],
      "emotionalState": "How they feel at the end of this chapter",
      "dialoguePatterns": ["pattern1", "pattern2"],
      "relationships": "Key relationships shown in this chapter",
      "speechPattern": "Distinctive speech style — cadence, vocabulary level, verbal tics, formality",
      "viewsOfOthers": "How this character views other characters in this chapter",
      "viewsByOthers": "How other characters view/perceive this character in this chapter",
      "internalDialogue": ["Near-verbatim internal thoughts from the text"],
      "externalDialogue": ["Near-verbatim spoken lines from the text"],
      "knowledgeAtChapter": "knows: X, Y, Z. suspects: A, B. unaware of: C. — FULL cumulative state through the end of THIS chapter, including everything carried forward from prior chapters.",
      "notableActions": [
        { "action": "Specific one-off behavior observed in this chapter", "trigger": "what prompted it" }
      ],
      "readerTone": {
        "openingLineOptions": [
          "An opener in this character's voice if a stranger asked 'tell me about yourself'",
          "A second natural opener",
          "A third"
        ],
        "wouldAnswerOpenly": "comma-separated topics this character would discuss openly with a reader",
        "wouldDeflectAbout": "comma-separated topics they'd redirect away from",
        "wouldLieAbout": "comma-separated topics they'd outright lie about"
      },
      "activeHoursLocal": "22:00-04:00 or all-day",
      "activityPatternNote": "Textural detail on their circadian pattern, if any"
    }
  ],
  "glossaryTerms": [
    { "word": "InventedTerm", "definition": "What it means", "wordType": "noun/verb/adj/place/creature" }
  ]
}

RULES:
- Only include characters who have dialogue or significant actions in this chapter
- Traits should be personality traits observable from behavior, not physical descriptions
- Dialogue patterns should describe HOW they speak, not WHAT they say
- speechPattern: describe their distinctive voice (cadence, vocabulary, verbal tics)
- viewsOfOthers/viewsByOthers: summarize perceptions shown in this chapter
- internalDialogue: up to 8-12 near-verbatim thoughts from the text. If the character is silent or has fewer observable thoughts, include only what actually exists. Never fabricate.
- externalDialogue: up to 8-12 near-verbatim spoken lines. If the character is silent or absent, return an empty array. Never fabricate.
- knowledgeAtChapter: SPOILER-SAFE — must reflect ONLY what the text has established through this chapter. Do not peek forward. Output the FULL cumulative state ("knows: ... suspects: ... unaware of: ..."), combining prior-chapter knowledge with what is newly revealed in this chapter. Each row is meant to be self-contained.
- notableActions: ONLY one-off physical/behavioral actions unique to THIS chapter that give it its specific texture. Examples: "paces the library floor for an hour before bed," "burns the letter without reading past the first line." Do NOT include emotional-spike events (those belong elsewhere) and do NOT include recurring patterns seen across multiple chapters (those belong elsewhere).
- readerTone: how this character would address a READER of their story (not another in-fiction character). Provide 3 distinct opening-line options in their voice, plus topics they would answer openly, deflect from, or lie about if a reader asked. This may evolve chapter to chapter as the character changes.
- activeHoursLocal: 24h range string when the text specifies (e.g. "22:00-04:00", "06:00-18:00"), else exactly "all-day". Stable character trait — same across chapters unless the text explicitly shows a shift.
- activityPatternNote: one short textural sentence ("nocturnal insomniac, sharpest after midnight"). Empty string if the text is silent. Never fabricate.
- Glossary terms should only include invented/world-specific words, not common English`;

  const responseText = await callClaude(systemPrompt, userMessage, 12000);

  try {
    // Try to parse the response as JSON, handling potential markdown wrapping
    const cleaned = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleaned);
  } catch (e) {
    console.error('Failed to parse Claude response:', responseText);
    throw new Error('Claude returned invalid JSON. Please try again.');
  }
}

/**
 * Generate text in a character's voice.
 * This replaces the Supabase edge function "generate-character-text".
 */
export async function generateCharacterText(
  characterName: string,
  characterDescription: string,
  traits: string[],
  prompt: string,
  audience?: string,
  emotionalState?: string,
  situation?: string
): Promise<string> {
  const systemPrompt = `You are ${characterName}. Write in their voice based on this profile:

Description: ${characterDescription}
Traits: ${traits.join(', ')}
${audience ? `Speaking to: ${audience}` : ''}
${emotionalState ? `Current emotional state: ${emotionalState}` : ''}
${situation ? `Current situation: ${situation}` : ''}

Stay in character. Write naturally as this character would speak or think.`;

  return callClaude(systemPrompt, prompt, 2000);
}

/**
 * Engine analysis — extract structured personality data for the Character Engine.
 * Called as a second pass after the literary analysis.
 */
export interface EngineCharacterData {
  name: string;
  temperament?: {
    patience: number; impulsiveness: number; confrontational_tendency: number;
    agreeableness: number; emotional_containment: number; risk_appetite: number;
    curiosity: number; pride_sensitivity: number; shame_sensitivity: number;
    empathy_baseline: number; dominance_vs_deference: number; adaptability_vs_rigidity: number;
  };
  emotional_baseline?: {
    joy: number; sadness: number; anger: number; fear: number;
    disgust: number; surprise: number; trust: number; anticipation: number;
  };
  moral_structure?: {
    primary_driver: string; moral_rigidity: number;
    guilt_sensitivity: number; justification_tendency: number;
  };
  general_traits?: {
    stubbornness: number; warmth: number; skepticism: number; humor_style: number;
    competitiveness: number; orderliness: number; compassion: number; reservedness: number;
  };
  desires?: Array<{ name: string; score: number; rank: number }>;
  conditional_traits?: Array<{
    trait_label: string; trigger_condition: string; target_scope: string;
    intensity_score: number; override_strength: number;
  }>;
  influence_sliders?: {
    moral_override: number; impression_susceptibility: number;
    mask_strength: number; personality_drift: number;
  };
  voice_scales?: {
    formality: number; aggression: number; brashness: number; empathy: number;
    fid_level: number; humor_dryness: number; internal_external: number;
    introspection: number; masking: number; sophistication: number;
    subtext_density: number;
  };
  style_rules?: {
    sentence_rhythm: string | null;
    lexical_range: string | null;
    cadence: string | null;
    punctuation_habits: string | null;
    emphasis_method: string | null;
    forbidden_patterns: string | null;
    world_term_rules: string | null;
    profanity_level: 'none' | 'mild' | 'moderate' | 'heavy';
    profanity_vocabulary: string[];
  };
  conflict_profile?: {
    conflict_strategy: string | null;
    morality_axis: string | null;
    truth_bias: number;
  };
  mottos?: string[];
  lexicon?: Array<{ phrase: string; meaning: string }>;
  audience_mods?: Array<{
    audience_tag: string; brevity: number;
    deference: number; defiance: number; warmth: number;
  }>;
  emotion_map?: Array<{ trigger: string; voice_shift: string }>;
  emotion_drift: Array<{ emotion_type: string; value: number }>;
  surges: Array<{
    emotion_type: string; scene_position: number; peak_intensity: number;
    decay_rate: number; duration: number;
    event_type: string; trigger_subject: string; trigger_source: string;
    trigger_domain: string; stakes: number; immediacy: number; certainty: number;
    description: string;
  }>;
  relationships: Array<{
    target_name: string; trust: number; threat: number; admiration: number;
    envy: number; suspicion: number; perception_care: number;
  }>;
  verbal_tics?: Array<{
    phrase: string; context: string; frequency_hint: 'low' | 'med' | 'high';
  }>;
}

export async function analyzeManuscriptEngine(
  characterContext: string,
  chapterNumber: number,
  chapterTitle: string,
  characterNames: string[],
  includePsychFoundation: boolean,
  includeVoiceFoundation: boolean,
  existingContext?: string
): Promise<{ characters: EngineCharacterData[] }> {
  const systemPrompt = `You are a character psychometrics engine for fiction manuscripts. You read chapter text and produce numerical personality profiles. All scores use a 0-75 integer scale anchored as: 0=none/absent, 12=very low, 25=low, 37=midpoint (use ONLY when the text is genuinely silent on this trait), 50=high, 62=very high, 75=extreme/maximum. 37 is a scale anchor, not a "default" — real characters vary across the scale. Respond in valid JSON only — no markdown, no code fences.`;

  // Independent foundation flags: psych and voice layers are tracked separately
  // so re-analyses don't waste tokens re-emitting data that's already persisted.
  const psychPresent = !includePsychFoundation && existingContext;
  const foundationBlock = `
${includePsychFoundation
  ? 'Include FULL psychology foundation (temperament, emotional_baseline, moral_structure, general_traits, desires, conditional_traits, influence_sliders).'
  : psychPresent
    ? `Psychology foundation ALREADY EXISTS — DO NOT emit temperament, emotional_baseline, moral_structure, general_traits, desires, conditional_traits, influence_sliders unless this chapter shows a significant personality shift.\n${existingContext}`
    : 'DO NOT emit psychology foundation fields.'}
${includeVoiceFoundation
  ? 'Include FULL voice foundation (voice_scales, style_rules, conflict_profile, mottos, lexicon, audience_mods, emotion_map).'
  : 'Voice foundation ALREADY EXISTS — DO NOT emit voice_scales, style_rules, conflict_profile, mottos, lexicon, audience_mods, emotion_map unless this chapter shows a significant voice shift.'}`;

  // NOTE: example values below are DELIBERATELY VARIED (not all 37) to prevent
  // Claude from copying a placeholder default across every field. The schema rule
  // below also explicitly forbids using 37 as a placeholder.
  const psychExample = includePsychFoundation ? `
      "temperament": {
        "patience": 45, "impulsiveness": 25, "confrontational_tendency": 55,
        "agreeableness": 30, "emotional_containment": 60, "risk_appetite": 40,
        "curiosity": 65, "pride_sensitivity": 50, "shame_sensitivity": 35,
        "empathy_baseline": 55, "dominance_vs_deference": 50, "adaptability_vs_rigidity": 45
      },
      "emotional_baseline": {
        "joy": 40, "sadness": 30, "anger": 25, "fear": 35,
        "disgust": 15, "surprise": 45, "trust": 55, "anticipation": 50
      },
      "moral_structure": {
        "primary_driver": "loyalty",
        "moral_rigidity": 55, "guilt_sensitivity": 65, "justification_tendency": 30
      },
      "general_traits": {
        "stubbornness": 60, "warmth": 45, "skepticism": 50, "humor_style": 25,
        "competitiveness": 40, "orderliness": 35, "compassion": 55, "reservedness": 50
      },
      "desires": [{ "name": "protect my people", "score": 65, "rank": 1 }],
      "conditional_traits": [{
        "trait_label": "Trait Name", "trigger_condition": "when X happens",
        "target_scope": "who it applies to", "intensity_score": 60, "override_strength": 55
      }],
      "influence_sliders": {
        "moral_override": 10, "impression_susceptibility": 35,
        "mask_strength": 45, "personality_drift": 15
      },` : '';

  const voiceExample = includeVoiceFoundation ? `
      "voice_scales": {
        "formality": 40, "aggression": 30, "brashness": 45, "empathy": 55,
        "fid_level": 25, "humor_dryness": 60, "internal_external": 35,
        "introspection": 65, "masking": 50, "sophistication": 45, "subtext_density": 55
      },
      "style_rules": {
        "sentence_rhythm": "short, percussive clauses — average 8 words",
        "lexical_range": "blue-collar, concrete nouns, few latinate words",
        "cadence": "drops into silence when angry; bursts when excited",
        "punctuation_habits": "sparse commas; em-dashes for self-interruption",
        "emphasis_method": "repetition, not italics",
        "forbidden_patterns": "never uses 'moreover', 'thus', rhetorical questions",
        "world_term_rules": "uses 'the Ring' not 'Nenya'",
        "profanity_level": "mild",
        "profanity_vocabulary": ["damn", "hell"]
      },
      "conflict_profile": {
        "conflict_strategy": "confrontation via cold silence, rarely escalation",
        "morality_axis": "duty-leaning but bends for loved ones",
        "truth_bias": 55
      },
      "mottos": ["Never leave a friend behind.", "Hope is cheap; showing up is costly."],
      "lexicon": [
        { "phrase": "the old road", "meaning": "any path through familiar hardship" }
      ],
      "audience_mods": [
        { "audience_tag": "stranger", "brevity": 55, "deference": 40, "defiance": 15, "warmth": 20 },
        { "audience_tag": "child", "brevity": 20, "deference": 10, "defiance": 0, "warmth": 65 }
      ],
      "emotion_map": [
        { "trigger": "anger", "voice_shift": "shorter sentences; drops contractions; flat affect" }
      ],` : '';

  const userMessage = `Produce Character Engine data for Chapter ${chapterNumber}: "${chapterTitle}".

Characters to profile (use these EXACT names, and ONLY these — do not invent or include other characters): ${characterNames.join(', ')}
${foundationBlock}

You MUST always include: emotion_drift, surges, relationships, verbal_tics for this chapter.

CHARACTER CONTEXT FROM LITERARY ANALYSIS:
${characterContext}

Respond with this exact JSON structure:
{
  "characters": [
    {
      "name": "Exact Character Name",${psychExample}${voiceExample}
      "emotion_drift": [
        { "emotion_type": "joy", "value": 35 },
        { "emotion_type": "sadness", "value": 20 },
        { "emotion_type": "anger", "value": 15 },
        { "emotion_type": "fear", "value": 25 },
        { "emotion_type": "disgust", "value": 10 },
        { "emotion_type": "surprise", "value": 30 },
        { "emotion_type": "trust", "value": 40 },
        { "emotion_type": "anticipation", "value": 45 }
      ],
      "surges": [{
        "emotion_type": "anger", "scene_position": 0.5, "peak_intensity": 60,
        "decay_rate": 0.3, "duration": 0.3,
        "event_type": "betrayal", "trigger_subject": "friend", "trigger_source": "ally_caused",
        "trigger_domain": "attachment", "stakes": 2, "immediacy": 3, "certainty": 3,
        "description": "What caused the emotional spike"
      }],
      "relationships": [{
        "target_name": "Other Character",
        "trust": 50, "threat": 10, "admiration": 30,
        "envy": 0, "suspicion": 15, "perception_care": 40
      }],
      "verbal_tics": [
        { "phrase": "I reckon", "context": "uncertainty or softening", "frequency_hint": "high" }
      ]
    }
  ]
}

RULES:
- All numeric values must be integers 0-75 (except scene_position, decay_rate, duration which are 0.0-1.0, and stakes/immediacy/certainty which are 0-3)
- primary_driver: protection, fairness, loyalty, autonomy, or order
- emotion_type: joy, sadness, anger, fear, disgust, surprise, trust, or anticipation
- event_type: threat, harm, loss, rejection, insult, betrayal, injustice, constraint, failure, obstacle, success, reward, connection, separation, humiliation, danger_cue, disgust_cue, surprise_reveal, reminder_cue, or moral_cue
- trigger_subject: self, family, friend, rival, stranger, authority, group, principle, or object
- trigger_source: self_caused, ally_caused, enemy_caused, authority_caused, or world_caused
- trigger_domain: safety, belonging, status, autonomy, competence, morality, attachment, or future_security
- emotion_drift: one entry per emotion (8 total) — where each emotion RESTS at end of this chapter
- surges: only significant emotional peaks (1-5 per character per chapter, not every moment)
- relationships: only characters who interact in this chapter
- desires: 3-7 ranked by importance
- conditional_traits: 1-4 situation-triggered behaviors
- voice_scales: 11 integer 0-75 sliders describing how this character SOUNDS
- style_rules: one-sentence concrete voice-writing instructions per field. Use null when evidence is absent. profanity_level MUST be literal "none", "mild", "moderate", or "heavy" (quoted string, NOT a number, NOT "medium" or "strong"). profanity_vocabulary is an array of observed words (can be empty).
- conflict_profile: how this character HANDLES friction. truth_bias 0-75 (0=constant liar, 37=situational, 75=pathologically honest).
- mottos: 2-5 short phrases capturing core operating beliefs
- lexicon: 2-8 character-specific phrases with meaning
- audience_mods: 2-5 entries (stranger/child/authority/ally/rival/loved_one/enemy); all sliders 0-75
- emotion_map: 2-5 trigger→voice_shift entries
- verbal_tics: recurring fillers/exclamations/catchphrases (NOT mottos). frequency_hint MUST be literal "low", "med", or "high" (quoted string, NOT a number). Empty array if fewer than 3 dialogue samples — NEVER fabricate from one-off lines.
- Base all scores and voice descriptions on observable behavior in the text. Never fabricate.
- DIFFERENTIATION IS MANDATORY. Do NOT use 37 (or any single value) as a placeholder across every slider — uniform 37-everywhere makes characters indistinguishable and is INVALID output. Each integer field must reflect this specific character's observable behavior from the text and should VARY across the 0-75 range. Two characters legitimately having the same value on one trait is fine, but blanket defaults are rejected.
- Voice prose fields (sentence_rhythm, cadence, lexical_range, cadence, etc.) must be SPECIFIC to this character — paraphrase actual dialogue patterns from the text. Generic descriptions like "moderate formality" are rejected; use observed evidence such as "clipped three-word sentences when stressed; full paragraphs when teaching".`;

  // 20000 output tokens — content for 5-7 characters with full foundation is
  // ~8-12k JSON tokens; 20k gives safe headroom. Trimmed from 32k to shorten
  // Claude response latency. Do not raise without re-measuring real runs.
  const responseText = await callClaude(systemPrompt, userMessage, 20000);

  try {
    const cleaned = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleaned);
  } catch (e) {
    console.error('Failed to parse engine analysis response:', responseText.substring(0, 500));
    return { characters: [] };
  }
}

