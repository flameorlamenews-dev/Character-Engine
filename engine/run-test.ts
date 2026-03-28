// ============================================
// RUN TEST — Execute calculator for all characters
// ============================================
// Usage: npx tsx engine/run-test.ts

import { calculateEmotions } from './calculator';
import { ALL_EMOTIONS, type CharacterProfile, type ExtractedStimulant, type ChapterEmotionState } from './types';
import * as fs from 'fs';
import * as path from 'path';

const TOTAL_CHAPTERS = 19; // Prologue + Ch1-18

// Dynamically load all character profiles and stimulants
async function loadCharacter(name: string): Promise<{ profile: CharacterProfile; stimulants: ExtractedStimulant[] }> {
  const profileModule = await import(`./characters/${name}.ts`);
  const stimulantsModule = await import(`./stimulants/${name}-stimulants.ts`);
  return {
    profile: profileModule.default || profileModule.profile,
    stimulants: stimulantsModule.default || stimulantsModule.stimulants,
  };
}

function formatEmotionTable(results: ChapterEmotionState[]): string {
  const header = ['Ch', ...ALL_EMOTIONS.map(e => e.slice(0, 5).padStart(6))].join(' | ');
  const divider = '-'.repeat(header.length);
  const rows = results.map(r => {
    const ch = String(r.chapterIndex).padStart(2);
    const vals = ALL_EMOTIONS.map(e => {
      const v = r.emotions[e];
      const vu = r.vuEmotions[e];
      const display = vu > 75 ? `${v.toFixed(0)}!` : v.toFixed(0);
      return display.padStart(6);
    });
    return [ch, ...vals].join(' | ');
  });
  return [header, divider, ...rows].join('\n');
}

async function main() {
  const characters = ['praew', 'haldric', 'prime', 'godric', 'mai', 'asher'];
  const outputParts: string[] = [];

  outputParts.push('# Character Engine — Calculator Results\n');
  outputParts.push(`Generated: ${new Date().toISOString()}\n`);

  for (const charName of characters) {
    try {
      const { profile, stimulants } = await loadCharacter(charName);

      console.log(`\nCalculating emotions for ${profile.name}...`);
      const results = calculateEmotions(profile, stimulants, TOTAL_CHAPTERS);

      outputParts.push(`\n## ${profile.name}\n`);
      outputParts.push('### Emotion Values Per Chapter\n');
      outputParts.push('```');
      outputParts.push(formatEmotionTable(results));
      outputParts.push('```\n');

      // Output calculation breakdown
      outputParts.push('### Calculation Breakdown\n');
      outputParts.push('```');
      for (const r of results) {
        outputParts.push(r.breakdown.join('\n'));
      }
      outputParts.push('```\n');

      // Output profile reasoning
      outputParts.push('### Profile Reasoning\n');
      for (const [key, reason] of Object.entries(profile.reasoning)) {
        outputParts.push(`- **${key}**: ${reason}`);
      }
      outputParts.push('');

    } catch (err: any) {
      console.log(`Skipping ${charName}: ${err.message}`);
      outputParts.push(`\n## ${charName}\n`);
      outputParts.push(`*Skipped: ${err.message}*\n`);
    }
  }

  // Write report
  const reportPath = path.join(__dirname, 'results.md');
  fs.writeFileSync(reportPath, outputParts.join('\n'));
  console.log(`\nResults written to ${reportPath}`);
}

main().catch(console.error);
