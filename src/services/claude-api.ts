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
    firstImpressions?: string;
  }>;
  glossaryTerms: Array<{ word: string; definition: string; wordType: string }>;
  consistencyNotes: string;
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
      "firstImpressions": "Only for NEW characters — reader's first impression"
    }
  ],
  "glossaryTerms": [
    { "word": "InventedTerm", "definition": "What it means", "wordType": "noun/verb/adj/place/creature" }
  ],
  "consistencyNotes": "Any consistency observations about characters compared to known data"
}

RULES:
- Only include characters who have dialogue or significant actions in this chapter
- Traits should be personality traits observable from behavior, not physical descriptions
- Dialogue patterns should describe HOW they speak, not WHAT they say
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
