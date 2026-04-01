// @ts-nocheck
// Builds comprehensive AI prompts from character profile data

interface CharacterData {
  character: any;
  traits: any[];
  mottos: any[];
  voiceScales: any;
  styleRules: any;
  lexicon: any[];
  audienceMods: any[];
  conflictProfile: any;
  emotionMap: any[];
  glossary?: any[];
}

interface GenerationContext {
  audience?: string;
  emotionalState?: string;
  situation?: string;
}

export const buildCharacterPrompt = (data: CharacterData, context?: GenerationContext): string => {
  const { character, traits, mottos, voiceScales, styleRules, lexicon, audienceMods, conflictProfile, emotionMap, glossary } = data;

  let prompt = `# Character Voice Profile: ${character.name}\n\n`;

  // Basic Info
  prompt += `## Overview\n`;
  prompt += `Role: ${character.role || 'Unspecified'}\n`;
  if (character.description) {
    prompt += `Description: ${character.description}\n`;
  }
  prompt += `\n`;

  // Traits and Mottos
  if (traits.length > 0) {
    prompt += `## Personality Traits\n`;
    prompt += traits.map(t => `- ${t.trait}`).join('\n');
    prompt += `\n\n`;
  }

  if (mottos.length > 0) {
    prompt += `## Character Mottos & Oaths\n`;
    mottos.forEach(m => {
      prompt += `- "${m.motto}"\n`;
    });
    prompt += `\n`;
  }

  // Voice Scales
  if (voiceScales) {
    prompt += `## Voice Scales (0-10)\n`;
    prompt += `These scales define how this character speaks and thinks:\n`;
    prompt += `- Brashness: ${voiceScales.brashness}/10 (0=Timid, 10=Bold)\n`;
    prompt += `- Aggression: ${voiceScales.aggression}/10 (0=Passive, 10=Aggressive)\n`;
    prompt += `- Sophistication: ${voiceScales.sophistication}/10 (0=Simple, 10=Refined)\n`;
    prompt += `- Internal/External Focus: ${voiceScales.internal_external}/10 (0=External, 10=Internal)\n`;
    prompt += `- Free Indirect Discourse Level: ${voiceScales.fid_level}/10\n`;
    prompt += `- Formality: ${voiceScales.formality}/10 (0=Casual, 10=Formal)\n`;
    prompt += `- Empathy: ${voiceScales.empathy}/10 (0=Cold, 10=Empathetic)\n`;
    prompt += `- Introspection: ${voiceScales.introspection}/10 (0=Reactive, 10=Reflective)\n`;
    prompt += `- Emotional Masking: ${voiceScales.masking}/10 (0=Open, 10=Guarded)\n`;
    prompt += `- Subtext Density: ${voiceScales.subtext_density}/10 (0=Direct, 10=Layered)\n`;
    prompt += `- Humor Style: ${voiceScales.humor_dryness}/10 (0=Slapstick, 10=Bone Dry)\n`;
    prompt += `\n`;
  }

  // Style Rules
  if (styleRules) {
    prompt += `## Style Rules\n`;
    prompt += `**CRITICAL: These rules must be followed at all times:**\n\n`;
    
    if (styleRules.sentence_rhythm) {
      prompt += `- Sentence Rhythm: ${styleRules.sentence_rhythm}\n`;
    }
    if (styleRules.lexical_range) {
      prompt += `- Lexical Range: ${styleRules.lexical_range}\n`;
    }
    if (styleRules.cadence) {
      prompt += `- Cadence: ${styleRules.cadence}\n`;
    }
    if (styleRules.punctuation_habits) {
      prompt += `- Punctuation Habits: ${styleRules.punctuation_habits}\n`;
    }
    if (styleRules.emphasis_method) {
      prompt += `- Emphasis Method: ${styleRules.emphasis_method}\n`;
    }
    if (styleRules.forbidden_patterns) {
      prompt += `- **FORBIDDEN PATTERNS (DO NOT USE)**: ${styleRules.forbidden_patterns}\n`;
    }
    if (styleRules.world_term_rules) {
      prompt += `- World Term Rules: ${styleRules.world_term_rules}\n`;
    }
    prompt += `\n`;
  }

  // Lexicon
  if (lexicon.length > 0) {
    prompt += `## Character Lexicon\n`;
    prompt += `Prefer these phrases for oaths and emphasis:\n`;
    lexicon.forEach(item => {
      prompt += `- "${item.phrase}"`;
      if (item.meaning) {
        prompt += ` - ${item.meaning}`;
      }
      prompt += `\n`;
    });
    prompt += `\n`;
  }

  // Audience Modifiers
  if (context?.audience && audienceMods.length > 0) {
    const audienceMod = audienceMods.find(a => a.audience_tag === context.audience);
    if (audienceMod) {
      prompt += `## Audience Modifier (Speaking to: ${context.audience})\n`;
      prompt += `Adjust tone accordingly:\n`;
      prompt += `- Defiance: ${audienceMod.defiance}/10\n`;
      prompt += `- Deference: ${audienceMod.deference}/10\n`;
      prompt += `- Warmth: ${audienceMod.warmth}/10\n`;
      prompt += `- Brevity: ${audienceMod.brevity}/10\n`;
      prompt += `\n`;
    }
  }

  // Conflict Profile
  if (conflictProfile) {
    prompt += `## Conflict & Ethics\n`;
    if (conflictProfile.conflict_strategy) {
      prompt += `- Conflict Strategy: ${conflictProfile.conflict_strategy}\n`;
    }
    if (conflictProfile.morality_axis) {
      prompt += `- Morality Axis: ${conflictProfile.morality_axis}\n`;
    }
    if (conflictProfile.truth_bias !== null) {
      prompt += `- Truth Bias: ${conflictProfile.truth_bias}/10 (0=Lies often, 10=Brutally honest)\n`;
    }
    prompt += `\n`;
  }

  // Emotion Map
  if (context?.emotionalState && emotionMap.length > 0) {
    const emotion = emotionMap.find(e => 
      e.trigger.toLowerCase().includes(context.emotionalState.toLowerCase())
    );
    if (emotion) {
      prompt += `## Active Emotional State: ${emotion.trigger}\n`;
      prompt += `**Voice Shift Applied**: ${emotion.voice_shift}\n`;
      prompt += `\n`;
    }
  }

  // Generation Instructions
  prompt += `## Generation Instructions\n`;
  prompt += `1. Use voice_scales to shape syntax and vocabulary\n`;
  prompt += `2. Apply audience_mods that match the listener\n`;
  
  if (voiceScales?.fid_level >= 7) {
    prompt += `3. Since fid_level is high (${voiceScales.fid_level}/10), blend narration with internal voice\n`;
  }
  
  prompt += `4. Respect forbidden_patterns and world_term_rules at ALL times\n`;
  prompt += `5. Use emotion_map voice_shift if emotional trigger is present\n`;
  prompt += `6. Prefer character's lexicon and mottos for oaths and emphasis\n`;

  // World Glossary
  if (glossary && glossary.length > 0) {
    prompt += `\n## World Glossary\n`;
    prompt += `These are custom world-specific terms with their definitions:\n`;
    glossary.forEach(entry => {
      prompt += `- **${entry.word}** (${entry.word_type})`;
      if (entry.category) prompt += ` [${entry.category}]`;
      prompt += `: ${entry.definition}\n`;
      if (entry.usage_notes) {
        prompt += `  Usage: ${entry.usage_notes}\n`;
      }
    });
    prompt += `\n`;
  }

  if (context?.situation) {
    prompt += `\n## Current Situation\n${context.situation}\n`;
  }

  return prompt;
};

export const buildAnalysisPrompt = (
  manuscriptText: string, 
  characterData: CharacterData
): string => {
  const characterPrompt = buildCharacterPrompt(characterData);
  
  return `${characterPrompt}

## Analysis Task

Analyze the following manuscript text and check if it adheres to this character's voice profile.

Identify:
1. **Voice Scale Violations**: Where the text doesn't match the character's established scales
2. **Forbidden Pattern Usage**: Any use of patterns listed in forbidden_patterns
3. **Style Inconsistencies**: Deviations from sentence rhythm, cadence, or lexical range
4. **Missing Lexicon**: Opportunities where character's unique phrases should be used
5. **Audience Mismatch**: If tone doesn't match the audience modifier settings
6. **Emotion Map Issues**: Emotional moments that don't reflect the proper voice_shift

Provide specific examples with quotes.

Manuscript Text:
${manuscriptText.substring(0, 40000)}`;
};
