import type { AIEmotionGuess } from '../types';

export const guesses: AIEmotionGuess[] = [
  {
    chapterIndex: 0,
    emotions: { joy: 0, sadness: 20, anger: 10, fear: 15, disgust: 0, surprise: 45, trust: 15, anticipation: 20 },
    reasoning: "Ten stimulants across a dense prologue. Facing Boltrax alone (danger_cue, safety, stakes 3) and suppressing fear (threat, competence) — his high riskAppetite (70) and low fear baseline (13) mean fear is present but managed. Getting struck and dropping his spear (harm + failure, stakes 3) produces self-directed anger at the rookie mistake. Srevlis appearing and fighting impossibly (two surprise_reveals, stakes 3 and 2) — this is genuinely shocking even for an unflappable veteran, making surprise the dominant emotion. Being dragged inside (constraint, autonomy) adds frustration. Srevlis's rejection of his offer (rejection, belonging) and the humiliation of being outfought by a child (humiliation, competence) produce sadness and shame — but his containment (70) keeps them moderate. Srevlis's haunting words (reminder_cue, morality) and finding renewed purpose (moral_cue, morality) close the chapter with anticipation and budding trust in a new mission. Surprise peaks as the chapter's defining emotion."
  },
  {
    chapterIndex: 4,
    emotions: { joy: 0, sadness: 0, anger: 0, fear: 0, disgust: 0, surprise: 0, trust: 0, anticipation: 10 },
    reasoning: "Two low-stakes stimulants. Praew calling him 'Stone Face' (insult, status, stakes 0) — zero stakes, and he adopts it himself, so no real emotional impact. Confronting recruits about failure and channeling second chances (moral_cue, morality, stakes 1) is low-intensity teaching mode. His containment and gruffness suppress everything. Barely any anticipation as he evaluates the new class. This is Godric on autopilot."
  },
  {
    chapterIndex: 6,
    emotions: { joy: 0, sadness: 0, anger: 10, fear: 0, disgust: 0, surprise: 0, trust: 0, anticipation: 0 },
    reasoning: "Single stimulant: Mai reveals his identity against his wishes (surprise_reveal, autonomy, stakes 1). Low stakes but it violates his preference for anonymity. Mild anger at Mai for overriding his choice. His containment and low prideSensitivity (35) keep this nearly flat. Not truly surprised — he knows Mai is unpredictable."
  },
  {
    chapterIndex: 8,
    emotions: { joy: 0, sadness: 0, anger: 15, fear: 0, disgust: 15, surprise: 0, trust: 0, anticipation: 15 },
    reasoning: "Three stimulants. Revealing territory marks (reminder_cue, competence, stakes 1) — showing scars is deliberate, not emotional for him. Snapping at hero-worshipping students (moral_cue, morality, stakes 1) — disgust at their naivety about death and mild anger. Warning Praew and Wannii about dangerous investigations (danger_cue, safety, stakes 2) — protective instinct kicks in as anticipation; he's watching the situation develop. Everything is low-stakes, contained, and professional."
  },
  {
    chapterIndex: 9,
    emotions: { joy: 0, sadness: 0, anger: 50, fear: 15, disgust: 35, surprise: 0, trust: 0, anticipation: 0 },
    reasoning: "Three stimulants centered on confrontation with The Prime. Unusual agitation in class (obstacle, autonomy, stakes 2) shows the turmoil is bleeding through containment. The furious confrontation itself (injustice, morality, stakes 3) — shouting about what The Prime is 'doing to them' — anger is dominant, fueled by his high confrontationalTendency (65) and moral disgust. Storming out with clenched fists (failure, autonomy, stakes 2) — the confrontation failed to resolve anything, compounding anger and adding disgust. Fear is mild — he's beginning to grasp the scope of what's happening. His containment holds but is visibly strained."
  },
  {
    chapterIndex: 13,
    emotions: { joy: 0, sadness: 15, anger: 35, fear: 10, disgust: 25, surprise: 0, trust: 0, anticipation: 20 },
    reasoning: "Five stimulants. Mai calling him 'Madman Godric, the Deadly Scientist' (insult, status, stakes 2) hits his shameSensitivity (45) — anger and disgust at his past being dredged up. His threatening response (reminder_cue, morality, stakes 2) shows the shame is active. Praew saying he 'was' one of her heroes in past tense (rejection, belonging, stakes 1) — low stakes but stings, producing mild sadness. Mai stabbing his foot (harm, safety, stakes 2) — pain but no emotional spike from a veteran. Missing students (loss, morality, stakes 3) — this is the heaviest stimulus; his protective drive and empathy (50) create real concern. Fear about what's happened to them, anger at the authority responsible, anticipation as he resolves to search the Fourth Floor."
  },
  {
    chapterIndex: 15,
    emotions: { joy: 0, sadness: 0, anger: 10, fear: 0, disgust: 10, surprise: 0, trust: 0, anticipation: 0 },
    reasoning: "Single low-stakes stimulant: finding falsified medical records covering up his fight with Mai (harm, safety, stakes 1). The cover-up suggests institutional deception. Mild anger and disgust at the system, but stakes 1 and immediacy 1 mean this barely registers for a man focused on larger concerns."
  },
  {
    chapterIndex: 16,
    emotions: { joy: 0, sadness: 25, anger: 30, fear: 20, disgust: 30, surprise: 15, trust: 0, anticipation: 30 },
    reasoning: "Three stimulants. Hearing screaming from below the Fourth Floor (danger_cue, morality, stakes 3) — confirms his worst suspicions about the missing students, producing anger, disgust, and fear. Mai being put in a coma by an unknown attacker (surprise_reveal, safety, stakes 2, certainty 1) — genuinely unexpected, creating surprise and unease. Haldric confronting him with a surged stone (threat, safety, stakes 1) — low stakes for Godric; he catches it casually. Sadness at what's being done to people, anger at The Prime's regime, disgust at the moral horror, anticipation as he commits to the rescue. Fear is moderate — he's a man with riskAppetite 70 heading toward danger."
  },
  {
    chapterIndex: 17,
    emotions: { joy: 0, sadness: 45, anger: 45, fear: 10, disgust: 50, surprise: 25, trust: 15, anticipation: 30 },
    reasoning: "Three stimulants, all stakes 3 and devastating. Seeing Praew on the slab with an embedded stone (injustice, morality, stakes 3) — disgust peaks as the atrocity is confirmed firsthand. Two dead bodies including his student Junya (loss, morality, stakes 3) — profound sadness and anger at his brother's crimes. Recognizing Wannii and Jorpen among the masked Embedded warriors (betrayal, morality, stakes 3) — his own students turned into weapons. This is surprising even to him, adding shock. Sadness and anger compete as dominant. Disgust at the system that did this. Trust in Haldric as they coordinate the rescue. Anticipation for the escape plan. Fear is contained by his riskAppetite — he's resolved to act, not flee. Even with containment (70), the moral horror pushes emotions higher than usual."
  },
  {
    chapterIndex: 18,
    emotions: { joy: 0, sadness: 50, anger: 25, fear: 30, disgust: 15, surprise: 0, trust: 30, anticipation: 0 },
    reasoning: "Eleven stimulants in Godric's final chapter. Saying goodbye to his brother (separation, attachment, stakes 3) — deep sadness at severing the familial bond. The Prime's death threat (threat, safety, stakes 3) — fear registers but doesn't dominate; he's already committed. Praew quoting his book back to him (connection, morality, stakes 2) — a moment of warmth and validation; trust surges as his life's purpose is affirmed. Facing six Embedded warriors alone (danger_cue, safety, stakes 3) — his riskAppetite (70) handles this; fear is present but controlled. Decapitating Wannii and Jorpen (moral_cue, morality, stakes 3) and praying for them (loss, morality, stakes 3) — these are the heaviest emotional blows; sadness peaks. Renwick slashing his throat (harm, stakes 3), shattered ribs (harm, stakes 3), collapsing at the gate (loss, stakes 3) — physical destruction but emotional acceptance. Worry about Praew's compassion (moral_cue, morality) and his 'greatest shame' (reminder_cue, morality, stakes 3) add moral weight. Reflecting on shared weakness with his brother (reminder_cue, morality) brings final sadness. Sadness dominates as the man dies having done his duty. Trust in Praew to carry on. Fear of death is real but contained. Anger has burned out — only grief and acceptance remain. Anticipation is zero; his story ends here."
  },
];
