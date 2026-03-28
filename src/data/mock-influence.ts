import type { InfluencePanelData } from '../types/influence';

export const mockInfluenceData: InfluencePanelData = {
  traits: [
    { name: 'Protective Instinct', impact: 72, effect: 'Overrides self-preservation; will risk death for those under his care' },
    { name: 'Distrust of Authority', impact: 65, effect: 'Resists orders from lighteyes; assumes worst intentions from leadership' },
    { name: 'Guilt-Driven', impact: 60, effect: 'Past failures fuel current decisions; takes on excessive responsibility' },
    { name: 'Stubbornness', impact: 58, effect: 'Refuses to abandon a course of action once committed, even when costly' },
    { name: 'Empathic Awareness', impact: 55, effect: 'Reads others\' pain and responds to it, often at his own expense' },
    { name: 'Moral Rigidity', impact: 52, effect: 'Cannot ignore injustice even when acting would be strategically unwise' },
  ],

  lingeringEmotions: [
    {
      id: 'le-tien-guilt',
      label: 'Guilt toward Tien\'s death',
      emotionType: 'sadness',
      event: 'Tien dying on the battlefield while Kaladin couldn\'t save him',
      intensity: 68,
      referencedInChapters: [1, 3, 6, 8, 9],
    },
    {
      id: 'le-betrayal-amaram',
      label: 'Rage toward Amaram\'s betrayal',
      emotionType: 'anger',
      event: 'Amaram stealing his Shardblade and branding him a slave',
      intensity: 62,
      referencedInChapters: [1, 2, 4, 7],
    },
    {
      id: 'le-bridgecrew-loss',
      label: 'Grief toward bridge crew deaths',
      emotionType: 'sadness',
      event: 'Watching bridgemen die on runs he couldn\'t prevent',
      intensity: 55,
      referencedInChapters: [2, 3, 4, 6],
    },
    {
      id: 'le-lighteyes-contempt',
      label: 'Contempt toward lighteyes privilege',
      emotionType: 'disgust',
      event: 'Repeated witnessing of lighteyes treating darkeyes as disposable',
      intensity: 50,
      referencedInChapters: [2, 3, 4, 8],
    },
    {
      id: 'le-hope-bridge4',
      label: 'Hope toward Bridge Four\'s unity',
      emotionType: 'trust',
      event: 'Bridge Four choosing to train and fight together as a unit',
      intensity: 45,
      referencedInChapters: [6, 7, 8, 9],
    },
  ],

  desirePressure: [
    {
      name: 'Protect Bridge Four',
      pressure: 72,
      effect: 'Every major decision filtered through "will this keep them alive"',
      revealedAtChapter: 3,
    },
    {
      name: 'Find Honor in a Broken World',
      pressure: 58,
      effect: 'Drives him to act justly even when survival demands otherwise',
      revealedAtChapter: 1,
    },
    {
      name: 'Prove Lighteyes Wrong',
      pressure: 48,
      effect: 'Fuels defiance and refusal to accept the caste system as natural',
      revealedAtChapter: 2,
    },
    {
      name: 'Escape Slavery',
      pressure: 42,
      effect: 'Background pressure that makes every decision feel urgent',
      revealedAtChapter: 1,
    },
    {
      name: 'Understand the Stormlight',
      pressure: 30,
      effect: 'Emerging curiosity that hasn\'t yet become a primary driver',
      revealedAtChapter: 7,
    },
  ],

  habitFormation: [
    { name: 'Jaw clenching', frequency: 62, indicates: 'Suppressed anger or frustration; holding back a confrontational response' },
    { name: 'Breaking eye contact downward', frequency: 55, indicates: 'Shame or guilt surfacing; retreating from vulnerability' },
    { name: 'Positioning himself between danger and others', frequency: 70, indicates: 'Protective instinct activating; perceives threat to someone nearby' },
    { name: 'Short clipped sentences', frequency: 48, indicates: 'Emotional containment under strain; doesn\'t trust himself to speak freely' },
    { name: 'Staring at his brands', frequency: 40, indicates: 'Identity crisis; wrestling with what he\'s become vs who he was' },
    { name: 'Counting bridge crew members', frequency: 45, indicates: 'Hypervigilance about loss; tracking who\'s still alive' },
  ],

  moralOverride: 58,
  impressionSusceptibility: 32,
  maskStrength: 45,
  personalityDrift: 28,
};
