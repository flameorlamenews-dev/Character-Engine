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
      //              Ch0  Ch1  Ch2  Ch3  Ch4  Ch5  Ch6  Ch7  Ch8  Ch9
      intensityByChapter: [0, 30, 30, 42, 42, 0, 52, 52, 62, 68],
      growthEvents: [
        { chapter: 1, type: 'memory', description: 'Memory of Tien resurfaces during slave march', intensityDelta: 30 },
        { chapter: 3, type: 'behavior_change', description: 'Hesitates to lead bridgemen — fears he\'ll fail them like he failed Tien', intensityDelta: 12 },
        { chapter: 6, type: 'refelt', description: 'Watching Bridge Four trust him triggers the guilt again — he doesn\'t deserve it', intensityDelta: 10 },
        { chapter: 8, type: 'behavior_change', description: 'Refuses to let anyone sacrifice themselves for the group; takes all risk himself', intensityDelta: 10 },
        { chapter: 9, type: 'refelt', description: 'Speaking the Second Ideal forces him to confront that he can\'t save everyone', intensityDelta: 6 },
      ],
    },
    {
      id: 'le-betrayal-amaram',
      label: 'Rage toward Amaram\'s betrayal',
      emotionType: 'anger',
      event: 'Amaram stealing his Shardblade and branding him a slave',
      intensityByChapter: [0, 25, 35, 35, 45, 0, 45, 52, 52, 52],
      growthEvents: [
        { chapter: 1, type: 'memory', description: 'Thinks of Amaram while looking at his brands', intensityDelta: 25 },
        { chapter: 2, type: 'refelt', description: 'Seeing lighteyes in power re-triggers the rage at what Amaram did', intensityDelta: 10 },
        { chapter: 4, type: 'behavior_change', description: 'Refuses to trust any lighteyes offer of help — Amaram taught him that lesson', intensityDelta: 10 },
        { chapter: 7, type: 'refelt', description: 'Dalinar\'s honor reminds him of what Amaram pretended to be', intensityDelta: 7 },
      ],
    },
    {
      id: 'le-bridgecrew-loss',
      label: 'Grief toward bridge crew deaths',
      emotionType: 'sadness',
      event: 'Watching bridgemen die on runs he couldn\'t prevent',
      intensityByChapter: [0, 0, 18, 32, 42, 0, 50, 50, 50, 42],
      growthEvents: [
        { chapter: 2, type: 'refelt', description: 'First bridge run — watches men die and feels the helplessness', intensityDelta: 18 },
        { chapter: 3, type: 'refelt', description: 'Another run, more deaths — the grief compounds', intensityDelta: 14 },
        { chapter: 4, type: 'behavior_change', description: 'Stops learning names of new bridgemen — can\'t bear more loss', intensityDelta: 10 },
        { chapter: 6, type: 'memory', description: 'Training Bridge Four forces him to remember those who didn\'t make it', intensityDelta: 8 },
      ],
    },
    {
      id: 'le-lighteyes-contempt',
      label: 'Contempt toward lighteyes privilege',
      emotionType: 'disgust',
      event: 'Repeated witnessing of lighteyes treating darkeyes as disposable',
      intensityByChapter: [0, 0, 15, 28, 38, 0, 38, 38, 48, 48],
      growthEvents: [
        { chapter: 2, type: 'refelt', description: 'Sadeas sends bridgemen to die without hesitation — contempt ignites', intensityDelta: 15 },
        { chapter: 3, type: 'behavior_change', description: 'Openly defiant to lighteyes guards — contempt leaking into action', intensityDelta: 13 },
        { chapter: 4, type: 'refelt', description: 'Sees lighteyes feast while bridgemen starve', intensityDelta: 10 },
        { chapter: 8, type: 'refelt', description: 'Sadeas abandons Dalinar — even "good" lighteyes get betrayed by their own', intensityDelta: 10 },
      ],
    },
    {
      id: 'le-hope-bridge4',
      label: 'Hope toward Bridge Four\'s unity',
      emotionType: 'trust',
      event: 'Bridge Four choosing to train and fight together as a unit',
      intensityByChapter: [0, 0, 0, 0, 0, 0, 28, 38, 48, 60],
      growthEvents: [
        { chapter: 6, type: 'refelt', description: 'Bridge Four volunteers to train — hope stirs for the first time', intensityDelta: 28 },
        { chapter: 7, type: 'refelt', description: 'They protect each other on a run — hope solidifies', intensityDelta: 10 },
        { chapter: 8, type: 'behavior_change', description: 'Kaladin risks everything to save Dalinar because Bridge Four showed him people are worth saving', intensityDelta: 10 },
        { chapter: 9, type: 'refelt', description: 'Bridge Four stands with him — the hope is now conviction', intensityDelta: 12 },
      ],
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
