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
    const { characterId, prompt, audience, emotionalState, situation } = await req.json();

    if (!characterId || !prompt) {
      throw new Error('characterId and prompt are required');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Loading character data...');

    // Load all character data
    const { data: character, error: charError } = await supabase
      .from('characters')
      .select('*')
      .eq('id', characterId)
      .maybeSingle();

    if (charError || !character) {
      throw new Error('Character not found');
    }

    // Load all related data
    const [traitsRes, mottosRes, scalesRes, styleRes, lexiconRes, audienceRes, conflictRes, emotionRes, glossaryRes] = await Promise.all([
      supabase.from('character_traits').select('*').eq('character_id', characterId),
      supabase.from('character_mottos').select('*').eq('character_id', characterId),
      supabase.from('character_voice_scales').select('*').eq('character_id', characterId).maybeSingle(),
      supabase.from('character_style_rules').select('*').eq('character_id', characterId).maybeSingle(),
      supabase.from('character_lexicon').select('*').eq('character_id', characterId),
      supabase.from('character_audience_mods').select('*').eq('character_id', characterId),
      supabase.from('character_conflict_profile').select('*').eq('character_id', characterId).maybeSingle(),
      supabase.from('character_emotion_map').select('*').eq('character_id', characterId),
      supabase.from('world_glossary').select('*').eq('user_id', character.user_id),
    ]);

    // Build comprehensive character prompt
    let systemPrompt = `# Character Voice Profile: ${character.name}\n\n`;
    
    systemPrompt += `## Overview\n`;
    systemPrompt += `Role: ${character.role || 'Unspecified'}\n`;
    if (character.description) {
      systemPrompt += `Description: ${character.description}\n`;
    }
    systemPrompt += `\n`;

    // Traits
    if (traitsRes.data && traitsRes.data.length > 0) {
      systemPrompt += `## Personality Traits\n`;
      systemPrompt += traitsRes.data.map((t: any) => `- ${t.trait}`).join('\n');
      systemPrompt += `\n\n`;
    }

    // Mottos
    if (mottosRes.data && mottosRes.data.length > 0) {
      systemPrompt += `## Character Mottos & Oaths\n`;
      mottosRes.data.forEach((m: any) => {
        systemPrompt += `- "${m.motto}"\n`;
      });
      systemPrompt += `\n`;
    }

    // Voice Scales
    if (scalesRes.data) {
      const scales = scalesRes.data;
      systemPrompt += `## Voice Scales (0-10)\n`;
      systemPrompt += `- Brashness: ${scales.brashness}/10\n`;
      systemPrompt += `- Aggression: ${scales.aggression}/10\n`;
      systemPrompt += `- Sophistication: ${scales.sophistication}/10\n`;
      systemPrompt += `- Internal/External: ${scales.internal_external}/10\n`;
      systemPrompt += `- Free Indirect Discourse: ${scales.fid_level}/10\n`;
      systemPrompt += `- Formality: ${scales.formality}/10\n`;
      systemPrompt += `- Empathy: ${scales.empathy}/10\n`;
      systemPrompt += `- Introspection: ${scales.introspection}/10\n`;
      systemPrompt += `- Masking: ${scales.masking}/10\n`;
      systemPrompt += `- Subtext: ${scales.subtext_density}/10\n`;
      systemPrompt += `- Humor Dryness: ${scales.humor_dryness}/10\n\n`;
    }

    // Style Rules
    if (styleRes.data) {
      const style = styleRes.data;
      systemPrompt += `## Style Rules (CRITICAL - MUST FOLLOW)\n`;
      if (style.sentence_rhythm) systemPrompt += `- Sentence Rhythm: ${style.sentence_rhythm}\n`;
      if (style.lexical_range) systemPrompt += `- Lexical Range: ${style.lexical_range}\n`;
      if (style.cadence) systemPrompt += `- Cadence: ${style.cadence}\n`;
      if (style.punctuation_habits) systemPrompt += `- Punctuation: ${style.punctuation_habits}\n`;
      if (style.emphasis_method) systemPrompt += `- Emphasis: ${style.emphasis_method}\n`;
      if (style.forbidden_patterns) systemPrompt += `- FORBIDDEN: ${style.forbidden_patterns}\n`;
      if (style.world_term_rules) systemPrompt += `- World Terms: ${style.world_term_rules}\n`;
      systemPrompt += `\n`;
    }

    // Lexicon
    if (lexiconRes.data && lexiconRes.data.length > 0) {
      systemPrompt += `## Lexicon (Use these phrases)\n`;
      lexiconRes.data.forEach((l: any) => {
        systemPrompt += `- "${l.phrase}"`;
        if (l.meaning) systemPrompt += ` (${l.meaning})`;
        systemPrompt += `\n`;
      });
      systemPrompt += `\n`;
    }

    // Audience Modifier
    if (audience && audienceRes.data) {
      const audienceMod = audienceRes.data.find((a: any) => a.audience_tag === audience);
      if (audienceMod) {
        systemPrompt += `## Audience: ${audience}\n`;
        systemPrompt += `- Defiance: ${audienceMod.defiance}/10\n`;
        systemPrompt += `- Deference: ${audienceMod.deference}/10\n`;
        systemPrompt += `- Warmth: ${audienceMod.warmth}/10\n`;
        systemPrompt += `- Brevity: ${audienceMod.brevity}/10\n\n`;
      }
    }

    // Conflict Profile
    if (conflictRes.data) {
      const conflict = conflictRes.data;
      systemPrompt += `## Conflict Approach\n`;
      if (conflict.conflict_strategy) systemPrompt += `- Strategy: ${conflict.conflict_strategy}\n`;
      if (conflict.morality_axis) systemPrompt += `- Morality: ${conflict.morality_axis}\n`;
      if (conflict.truth_bias !== null) systemPrompt += `- Truth Bias: ${conflict.truth_bias}/10\n`;
      systemPrompt += `\n`;
    }

    // Emotion Map
    if (emotionalState && emotionRes.data) {
      const emotion = emotionRes.data.find((e: any) => 
        e.trigger.toLowerCase().includes(emotionalState.toLowerCase())
      );
      if (emotion) {
        systemPrompt += `## Emotional State: ${emotion.trigger}\n`;
        systemPrompt += `Voice Shift: ${emotion.voice_shift}\n\n`;
      }
    }

    // World Glossary
    if (glossaryRes.data && glossaryRes.data.length > 0) {
      systemPrompt += `## World Glossary\n`;
      systemPrompt += `Custom world-specific terms:\n`;
      glossaryRes.data.forEach((g: any) => {
        systemPrompt += `- **${g.word}** (${g.word_type})`;
        if (g.category) systemPrompt += ` [${g.category}]`;
        systemPrompt += `: ${g.definition}\n`;
        if (g.usage_notes) {
          systemPrompt += `  Usage: ${g.usage_notes}\n`;
        }
      });
      systemPrompt += `\n`;
    }

    systemPrompt += `## Instructions\n`;
    systemPrompt += `1. Write in this character's voice following ALL rules\n`;
    systemPrompt += `2. Use voice scales to shape syntax and vocabulary\n`;
    systemPrompt += `3. Apply audience modifiers if specified\n`;
    systemPrompt += `4. Respect forbidden patterns absolutely\n`;
    systemPrompt += `5. Use lexicon phrases naturally\n`;
    systemPrompt += `6. Apply emotion voice shifts if triggered\n`;

    if (situation) {
      systemPrompt += `\nSituation: ${situation}\n`;
    }

    console.log('Calling AI to generate text...');

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-lite',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API error:', errorText);
      throw new Error('Text generation failed');
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content;

    console.log('Text generated successfully');

    return new Response(
      JSON.stringify({ 
        text: generatedText,
        characterName: character.name 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
