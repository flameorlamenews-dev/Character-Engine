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
export async function analyzeManuscript(
  chapterText: string,
  chapterNumber: number,
  chapterTitle: string,
  existingCharacters: string[] = []
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
  }>;
  glossaryTerms: Array<{ word: string; definition: string; wordType: string }>;
}> {
  const systemPrompt = `You are a literary character analyst. You read manuscript chapters and extract detailed character data. Respond in valid JSON only — no markdown, no code fences.`;

  const userMessage = `Analyze this manuscript chapter and extract character data.

Chapter ${chapterNumber}: "${chapterTitle}"

${existingCharacters.length > 0 ? `Known characters from previous chapters: ${existingCharacters.join(', ')}` : 'This is the first chapter being analyzed.'}

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
      "internalDialogue": ["Exact or near-exact internal thoughts from the text"],
      "externalDialogue": ["Exact or near-exact spoken lines from the text"]
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
- internalDialogue: 2-5 key internal thoughts (exact quotes preferred)
- externalDialogue: 2-5 key spoken lines (exact quotes preferred)
- Glossary terms should only include invented/world-specific words, not common English`;

  const responseText = await callClaude(systemPrompt, userMessage, 8000);

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
}

export async function analyzeManuscriptEngine(
  characterContext: string,
  chapterNumber: number,
  chapterTitle: string,
  characterNames: string[],
  isFirstAnalysis: boolean,
  existingContext?: string
): Promise<{ characters: EngineCharacterData[] }> {
  const systemPrompt = `You are a character psychometrics engine for fiction manuscripts. You read chapter text and produce numerical personality profiles. All scores use a 0-75 integer scale where: 0=none/absent, 12=very low, 25=low, 37=moderate/default, 50=high, 62=very high, 75=extreme/maximum. Respond in valid JSON only — no markdown, no code fences.`;

  const foundationBlock = isFirstAnalysis ? `
This is the FIRST chapter analysis — produce FULL personality foundations for each character.
Include: temperament, emotional_baseline, moral_structure, general_traits, desires, conditional_traits, influence_sliders.` : `
This is Chapter ${chapterNumber} (NOT the first). Engine data already exists.
${existingContext ? `Existing personality context:\n${existingContext}` : ''}
DO NOT include foundation fields (temperament, emotional_baseline, moral_structure, general_traits, desires, conditional_traits, influence_sliders) UNLESS this chapter shows a significant personality shift. If included, values represent the UPDATED state.`;

  const userMessage = `Produce Character Engine data for Chapter ${chapterNumber}: "${chapterTitle}".

Characters to profile (use these exact names): ${characterNames.join(', ')}
${foundationBlock}

You MUST always include: emotion_drift, surges, and relationships for this chapter.

CHARACTER CONTEXT FROM LITERARY ANALYSIS:
${characterContext}

Respond with this exact JSON structure:
{
  "characters": [
    {
      "name": "Exact Character Name",
      ${isFirstAnalysis ? `"temperament": {
        "patience": 37, "impulsiveness": 37, "confrontational_tendency": 37,
        "agreeableness": 37, "emotional_containment": 37, "risk_appetite": 37,
        "curiosity": 37, "pride_sensitivity": 37, "shame_sensitivity": 37,
        "empathy_baseline": 37, "dominance_vs_deference": 37, "adaptability_vs_rigidity": 37
      },
      "emotional_baseline": {
        "joy": 37, "sadness": 37, "anger": 37, "fear": 37,
        "disgust": 37, "surprise": 37, "trust": 37, "anticipation": 37
      },
      "moral_structure": {
        "primary_driver": "fairness",
        "moral_rigidity": 37, "guilt_sensitivity": 37, "justification_tendency": 37
      },
      "general_traits": {
        "stubbornness": 37, "warmth": 37, "skepticism": 37, "humor_style": 37,
        "competitiveness": 37, "orderliness": 37, "compassion": 37, "reservedness": 37
      },
      "desires": [{ "name": "desire name", "score": 50, "rank": 1 }],
      "conditional_traits": [{
        "trait_label": "Trait Name", "trigger_condition": "when X happens",
        "target_scope": "who it applies to", "intensity_score": 60, "override_strength": 55
      }],
      "influence_sliders": {
        "moral_override": 0, "impression_susceptibility": 37,
        "mask_strength": 0, "personality_drift": 0
      },` : ''}
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
      }]
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
- Base all scores on observable behavior in the text`;

  const responseText = await callClaude(systemPrompt, userMessage, 8000);

  try {
    const cleaned = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleaned);
  } catch (e) {
    console.error('Failed to parse engine analysis response:', responseText.substring(0, 500));
    return { characters: [] };
  }
}

