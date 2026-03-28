import type { InfluencePanelData } from '../types/influence';

export const mockInfluenceData: InfluencePanelData = {
  traits: [
    { name: 'Impulsive Honesty', impact: 68, effect: 'Speaks her mind and acts on instinct before considering consequences' },
    { name: 'Protective Instinct', impact: 65, effect: 'Positions herself between danger and loved ones automatically' },
    { name: 'Cornered-Beast Defiance', impact: 62, effect: 'When backed into a corner, becomes most dangerous and resolute' },
    { name: 'Guilt-Driven Self-Improvement', impact: 58, effect: 'Past failures fuel current determination; takes full blame for mistakes' },
    { name: 'Empathic Intuition', impact: 55, effect: 'Reads emotional states and responds before thinking — hugs, comforts, intervenes' },
    { name: 'Stubborn Loyalty', impact: 52, effect: 'Won\'t abandon friends even when it\'s the smart thing to do' },
  ],

  lingeringEmotions: [
    {
      id: 'le-mai-guilt',
      label: 'Guilt toward misjudging Mai',
      emotionType: 'sadness',
      event: 'Called Mai a psychopathic murderer, later realizes Mai saved her life',
      //              Ch0  Ch1  Ch2  Ch3  Ch4  Ch5  Ch6  Ch7  Ch8  Ch9  Ch10 Ch11 Ch12 Ch13 Ch14 Ch15 Ch16 Ch17 Ch18
      intensityByChapter: [0, 0, 0, 0, 0, 0, 35, 42, 32, 25, 22, 20, 18, 15, 12, 10, 8, 8, 8],
      growthEvents: [
        { chapter: 6, type: 'memory', description: 'Realizes Mai\'s kill test was a lesson, not cruelty — guilt surfaces', intensityDelta: 35 },
        { chapter: 7, type: 'behavior_change', description: 'Confronts Mai with stolen dagger, driven by guilt and confusion', intensityDelta: 7 },
        { chapter: 9, type: 'refelt', description: 'Apologizes to Mai — guilt reduces as relationship rebuilds', intensityDelta: -10 },
      ],
    },
    {
      id: 'le-asher-betrayal',
      label: 'Betrayal pain from Asher walking away',
      emotionType: 'sadness',
      event: 'Asher took both stones, abandoned Haldric, left without goodbye',
      intensityByChapter: [0, 30, 28, 25, 22, 20, 18, 15, 15, 15, 12, 12, 10, 10, 10, 8, 8, 8, 8],
      growthEvents: [
        { chapter: 1, type: 'refelt', description: 'Asher betrays them during the Hunter test — pain of abandonment', intensityDelta: 30 },
      ],
    },
    {
      id: 'le-junya-wannii-grief',
      label: 'Grief toward Junya/Wannii\'s disappearance then death',
      emotionType: 'sadness',
      event: 'Friends vanish, then Wannii found dead, Junya killed on a slab',
      intensityByChapter: [0, 0, 0, 0, 0, 0, 0, 0, 18, 22, 28, 35, 42, 45, 15, 65, 70, 60, 55],
      growthEvents: [
        { chapter: 8, type: 'memory', description: 'First signs that Junya and Wannii are missing — worry sets in', intensityDelta: 18 },
        { chapter: 10, type: 'behavior_change', description: 'Begins actively investigating their disappearance', intensityDelta: 10 },
        { chapter: 12, type: 'refelt', description: 'Fourth Floor horrors — recognizes Jorpen as a slave, fears the worst', intensityDelta: 7 },
        { chapter: 13, type: 'behavior_change', description: 'Guilt intensifies — "like I failed them"', intensityDelta: 3 },
        { chapter: 15, type: 'refelt', description: 'Discovers Wannii\'s burnt corpse — grief explodes', intensityDelta: 20 },
        { chapter: 16, type: 'refelt', description: 'Sees Junya dead on the slab — devastation', intensityDelta: 5 },
      ],
    },
    {
      id: 'le-renwick-rage',
      label: 'Rage toward Renwick\'s harassment and betrayal',
      emotionType: 'anger',
      event: 'Sexual comments during Hunter test, stole her stones, later becomes her captor',
      intensityByChapter: [0, 22, 20, 18, 15, 12, 10, 10, 10, 10, 10, 10, 10, 10, 10, 55, 65, 58, 50],
      growthEvents: [
        { chapter: 1, type: 'refelt', description: 'Renwick\'s sexual harassment and stone theft during Hunter test', intensityDelta: 22 },
        { chapter: 15, type: 'refelt', description: 'Discovers Renwick is her captor — rage reignites at full force', intensityDelta: 45 },
        { chapter: 16, type: 'refelt', description: 'Renwick oversees BoltStone embedding — hatred compounds', intensityDelta: 10 },
      ],
    },
    {
      id: 'le-helplessness-fear',
      label: 'Fear of helplessness / things being decided for her',
      emotionType: 'fear',
      event: 'Failed test wasn\'t fair, embedded without consent, mind controlled',
      intensityByChapter: [0, 15, 12, 10, 10, 10, 10, 8, 8, 8, 8, 8, 8, 8, 8, 40, 55, 60, 45],
      growthEvents: [
        { chapter: 1, type: 'refelt', description: 'Hunter test rigged against her — helplessness takes root', intensityDelta: 15 },
        { chapter: 15, type: 'refelt', description: 'Captured and held against her will — fear of lost autonomy surges', intensityDelta: 32 },
        { chapter: 16, type: 'refelt', description: 'BoltStone embedded without consent — body violated', intensityDelta: 15 },
        { chapter: 17, type: 'refelt', description: 'The Prime attempts mind control — "Why must everything be decided for me?!"', intensityDelta: 5 },
      ],
    },
  ],

  desirePressure: [
    {
      name: 'Protect Parents',
      pressure: 72,
      effect: '"I don\'t care if I eat less. But my parents?" — every decision filtered through their survival',
      revealedAtChapter: 1,
    },
    {
      name: 'Become a Hunter / See the Surface',
      pressure: 60,
      effect: 'Drives all training effort and fuels her willingness to endure pain',
      revealedAtChapter: 1,
    },
    {
      name: 'Find Junya and Wannii',
      pressure: 55,
      effect: '"What am I supposed to do? Pretend I didn\'t fail them?" — launches her investigation',
      revealedAtChapter: 8,
    },
    {
      name: 'Freedom / Self-Determination',
      pressure: 50,
      effect: '"Why must everything be decided for me?!" — drives defiance against captors and the Prime',
      revealedAtChapter: 17,
    },
    {
      name: 'Uncover Food Shortage Truth',
      pressure: 45,
      effect: '"Something doesn\'t add up about the food shortage" — fuels her investigation instinct',
      revealedAtChapter: 4,
    },
  ],

  habitFormation: [
    { name: 'Blurting thoughts out loud', frequency: 65, indicates: 'Impulsive honesty surfacing — "Stone Face!", "I\'m not a killer"' },
    { name: 'Clenching fists when determined', frequency: 58, indicates: 'Bracing for confrontation or steeling resolve' },
    { name: 'Right eye twitch then pats three times', frequency: 55, indicates: 'Superstitious bad omen indicator — anxiety about what\'s coming' },
    { name: 'Tapping fingers on knee or table', frequency: 50, indicates: 'Anxious energy seeking outlet; thinking through a problem' },
    { name: 'Pink curl brushed behind ear', frequency: 45, indicates: 'Self-conscious or nervous; trying to compose herself' },
    { name: 'Forcing a smile to hide pain', frequency: 40, indicates: 'Emotional pain she\'s trying to mask — low mask strength means it rarely works' },
  ],

  moralOverride: 65,
  impressionSusceptibility: 38,
  maskStrength: 25,
  personalityDrift: 42,
};
