// ============================================
// COMPARE — Math Results vs AI Guesses
// ============================================
// Usage: npx tsx engine/compare.ts

import { calculateEmotions } from './calculator';
import { ALL_EMOTIONS, type CharacterProfile, type ExtractedStimulant, type AIEmotionGuess, type ComparisonResult } from './types';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TOTAL_CHAPTERS = 19;
const GAP_THRESHOLD = 15; // Flag if gap > 15

async function loadCharacter(name: string): Promise<{ profile: CharacterProfile; stimulants: ExtractedStimulant[] }> {
  const profileModule = await import(`./characters/${name}.ts`);
  const stimulantsModule = await import(`./stimulants/${name}-stimulants.ts`);
  return {
    profile: profileModule.default || profileModule.profile,
    stimulants: stimulantsModule.default || stimulantsModule.stimulants,
  };
}

async function loadGuesses(name: string): Promise<AIEmotionGuess[]> {
  const guessModule = await import(`./ai-guesses/${name}-guesses.ts`);
  return guessModule.default || guessModule.guesses;
}

async function main() {
  const characters = ['praew', 'haldric', 'prime', 'godric', 'mai', 'asher'];
  const output: string[] = [];
  const allComparisons: ComparisonResult[] = [];

  output.push('# Character Engine — Math vs AI Comparison Report\n');
  output.push(`Generated: ${new Date().toISOString()}\n`);

  for (const charName of characters) {
    try {
      const { profile, stimulants } = await loadCharacter(charName);
      const guesses = await loadGuesses(charName);
      const results = calculateEmotions(profile, stimulants, TOTAL_CHAPTERS);

      output.push(`\n## ${profile.name}\n`);
      output.push('| Ch | Emotion | Math | AI Guess | Gap | Flag |');
      output.push('|----|---------|------|----------|-----|------|');

      for (let ch = 0; ch < TOTAL_CHAPTERS; ch++) {
        const mathResult = results[ch];
        const aiGuess = guesses.find(g => g.chapterIndex === ch);

        if (!aiGuess) continue;
        if (!profile.presentInChapters.includes(ch)) continue;

        for (const emotion of ALL_EMOTIONS) {
          const mathVal = Math.round(mathResult.emotions[emotion]);
          const aiVal = aiGuess.emotions[emotion];
          const gap = Math.abs(mathVal - aiVal);
          const flag = gap > GAP_THRESHOLD;

          allComparisons.push({
            character: profile.name,
            chapterIndex: ch,
            emotion,
            mathValue: mathVal,
            aiGuess: aiVal,
            gap,
            flag,
          });

          if (flag) {
            output.push(`| ${ch} | ${emotion} | ${mathVal} | ${aiVal} | **${gap}** | ⚠️ |`);
          }
        }
      }

      // Summary stats
      const charComps = allComparisons.filter(c => c.character === profile.name);
      const flagged = charComps.filter(c => c.flag);
      const avgGap = charComps.reduce((sum, c) => sum + c.gap, 0) / Math.max(charComps.length, 1);
      output.push(`\n**${profile.name} Summary**: ${charComps.length} comparisons, ${flagged.length} flagged (>${GAP_THRESHOLD}), avg gap: ${avgGap.toFixed(1)}\n`);

    } catch (err: any) {
      output.push(`\n## ${charName}\n*Skipped: ${err.message}*\n`);
    }
  }

  // Overall summary
  output.push('\n## Overall Summary\n');
  const totalFlagged = allComparisons.filter(c => c.flag);
  const totalAvg = allComparisons.reduce((sum, c) => sum + c.gap, 0) / Math.max(allComparisons.length, 1);
  output.push(`- Total comparisons: ${allComparisons.length}`);
  output.push(`- Flagged (gap >${GAP_THRESHOLD}): ${totalFlagged.length} (${((totalFlagged.length / Math.max(allComparisons.length, 1)) * 100).toFixed(1)}%)`);
  output.push(`- Average gap: ${totalAvg.toFixed(1)}`);
  output.push(`- Largest gap: ${Math.max(...allComparisons.map(c => c.gap), 0)}`);

  if (totalFlagged.length > 0) {
    output.push('\n### Top 10 Largest Gaps\n');
    output.push('| Character | Ch | Emotion | Math | AI | Gap |');
    output.push('|-----------|-----|---------|------|-----|-----|');
    totalFlagged
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 10)
      .forEach(c => {
        output.push(`| ${c.character} | ${c.chapterIndex} | ${c.emotion} | ${c.mathValue} | ${c.aiGuess} | **${c.gap}** |`);
      });
  }

  const reportPath = path.join(__dirname, 'comparison-report.md');
  fs.writeFileSync(reportPath, output.join('\n'));
  console.log(`\nComparison report written to ${reportPath}`);
}

main().catch(console.error);
