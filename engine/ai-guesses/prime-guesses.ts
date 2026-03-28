import type { AIEmotionGuess } from '../types';

export const guesses: AIEmotionGuess[] = [
  {
    chapterIndex: 1,
    emotions: { joy: 0, sadness: 0, anger: 0, fear: 0, disgust: 0, surprise: 0, trust: 0, anticipation: 20 },
    reasoning: "Single stimulant: he watches Asher betray Haldric in a scenario he orchestrated. This is a moral_cue he caused himself — but his high justificationTendency (75) and emotional containment (70) mean guilt is minimal. He planned this, so no surprise. Mild anticipation as he evaluates the outcome of his scheme. All else suppressed."
  },
  {
    chapterIndex: 2,
    emotions: { joy: 0, sadness: 30, anger: 20, fear: 0, disgust: 0, surprise: 15, trust: 0, anticipation: 10 },
    reasoning: "Four stimulants: Asher's cold rejection (stakes 3, attachment domain), Asher publicly accusing him of sabotage (insult, status), his own speechlessness at being cut off (failure, attachment), and Renwick's suspicious comment (danger_cue, low certainty). The rejection and speechlessness hit his attachment needs — sadness is primary but contained. The public accusation triggers pride sensitivity (60) producing some anger. His speechlessness is a rare failure of composure causing mild surprise at himself. Renwick's comment is low-stakes/low-certainty but seeds anticipation. Fear stays low — the danger_cue is vague."
  },
  {
    chapterIndex: 3,
    emotions: { joy: 0, sadness: 30, anger: 40, fear: 50, disgust: 0, surprise: 35, trust: 0, anticipation: 25 },
    reasoning: "Seven stimulants in a pivotal flashback. The surprise_reveal of secret Prime knowledge (stakes 3, future_security) leaves him visibly shaken — this is genuine fear and surprise piercing even his containment. Learning a mythical beast threatens Stormhaven (threat, stakes 3) compounds the fear. The loss of the previous Prime forces sudden responsibility. He hurts young Asher by forbidding 'Father' — a self-caused constraint reflecting fear-driven harshness. Asher calling him a coward (insult, status) triggers prideSensitivity producing anger. Slamming the table (failure, competence) — losing control angers him at himself. Being legally unable to block Asher's Hunter test (constraint, autonomy) adds frustration. Fear is highest because existential secrets dominate. Anger from Asher's defiance and his own loss of control. Sadness at the father-son rupture he caused. Surprise at the revelations. Anticipation from the weight of new responsibility."
  },
  {
    chapterIndex: 9,
    emotions: { joy: 0, sadness: 15, anger: 35, fear: 0, disgust: 30, surprise: 0, trust: 15, anticipation: 10 },
    reasoning: "Five stimulants. Godric's furious confrontation (threat, status, stakes 3) triggers anger and his pride sensitivity. His slip — 'blasted Hunters' (failure, competence) — reveals disgust at Hunters breaking through containment, and irritation at himself. Haldric asking 'Are you okay?' (connection, belonging) is an unexpected moment of warmth — mild trust surfaces. His admission of loneliness (reminder_cue, belonging) brings subdued sadness. Apologizing for Asher's betrayal (moral_cue) engages his low guilt sensitivity. Containment keeps everything moderate; Godric's storm has passed and he's regaining composure."
  },
  {
    chapterIndex: 10,
    emotions: { joy: 0, sadness: 10, anger: 0, fear: 0, disgust: 15, surprise: 0, trust: 20, anticipation: 35 },
    reasoning: "Two stimulants. Orchestrating Bresdin's capture (threat from enemy, safety, stakes 3) — he planned this, so anticipation is primary as the trap works. Watching Hunters admire Haldric while recognizing Haldric as 'the bridge Asher was supposed to be' (reminder_cue, attachment) produces complex feelings: growing trust in Haldric as a tool, but disgust/sadness at the reminder of Asher's failure. His high containment and strategic mindset keep emotions operational rather than personal."
  },
  {
    chapterIndex: 11,
    emotions: { joy: 0, sadness: 30, anger: 0, fear: 0, disgust: 0, surprise: 0, trust: 30, anticipation: 35 },
    reasoning: "Three stimulants. Admitting he doesn't know where he went wrong with Asher (loss, attachment, stakes 3) carries real grief — this is one of his few genuine confessions. Telling Haldric 'it should have been you' (failure, attachment) reinforces sadness at Asher while channeling attachment toward Haldric. Naming Haldric as Heir Archon (moral_cue, morality, stakes 3) is a monumental decision — choosing another's child over his own. Trust in Haldric rises as he invests his succession plan. Strong anticipation as he grooms his new instrument. Sadness underlies it all — this is a man mourning his son while building a replacement."
  },
  {
    chapterIndex: 13,
    emotions: { joy: 0, sadness: 25, anger: 30, fear: 0, disgust: 25, surprise: 0, trust: 0, anticipation: 0 },
    reasoning: "Three stimulants focused on betrayal. Catching Haldric snooping (betrayal, belonging, stakes 2) triggers anger — his chosen successor violated trust. 'My fault for believing in you' (rejection, belonging, stakes 3) is deeply bitter — sadness and disgust at being let down again. Lamenting that the whole city blames him (injustice, belonging) feeds his sense of isolation. No surprise — he likely suspected. Trust collapses to zero. Anger and sadness compete as his containment holds them at moderate levels. The pattern of everyone turning on him reinforces his fundamental loneliness."
  },
  {
    chapterIndex: 14,
    emotions: { joy: 0, sadness: 20, anger: 30, fear: 40, disgust: 20, surprise: 0, trust: 0, anticipation: 30 },
    reasoning: "Eight stimulants across a heavy chapter. Physical exhaustion (reminder_cue, autonomy) shows the toll. Rage at reputation distortion (injustice, status) — his pride sensitivity triggers anger. The existential reveals dominate: Ravour dying (threat, future_security, stakes 3), beasts reproducing (danger_cue, future_security, stakes 3), failed alliances (failure, future_security, stakes 3) — these compound into significant fear about species extinction. Confronting the phantom girl (moral_cue) and being accused of lying by omission (insult, morality) produce disgust at the manipulation and residual anger. His confession of moral insufficiency (moral_cue, morality) carries sadness. Anticipation from his ongoing planning and the portal search. Fear is highest given three extinction-level stimulants."
  },
  {
    chapterIndex: 16,
    emotions: { joy: 30, sadness: 0, anger: 0, fear: 15, disgust: 30, surprise: 0, trust: 0, anticipation: 50 },
    reasoning: "Three stimulants. Killing the sadistic scientist (moral_cue, morality) brings disgust — 'absolutely deplorable.' The BoltStone successfully embedding into Praew (success, future_security, stakes 3) is the culmination of 14 years of work — his hands tremble with awe. This is the closest The Prime gets to joy, and anticipation surges as his plan materializes. Praew begging not to be recorrected (moral_cue, morality, stakes 3) is a severe moral stimulus but his justificationTendency (75) and moral rigidity (70) allow him to override it — only a flicker of fear that she might resist. Joy from success, peak anticipation, disgust at the scientist, mild fear about control."
  },
  {
    chapterIndex: 17,
    emotions: { joy: 0, sadness: 15, anger: 30, fear: 40, disgust: 0, surprise: 20, trust: 0, anticipation: 20 },
    reasoning: "Three stimulants. Renwick drawing a sword (threat, safety, stakes 2) — The Prime handles it with his voice command, but anger at the insubordination. His warning that Renwick has 'doomed us all' (danger_cue, future_security, stakes 3) reflects genuine fear for the plan. Haldric releasing every prisoner (betrayal, safety, stakes 3) is a major blow — surprise at the scale of chaos, fear for safety, anger at the destruction. His plans are unraveling. Fear dominates as the species-survival mission is jeopardized. Sadness at the betrayals accumulating. Trust is gone."
  },
  {
    chapterIndex: 18,
    emotions: { joy: 0, sadness: 35, anger: 55, fear: 45, disgust: 20, surprise: 20, trust: 0, anticipation: 0 },
    reasoning: "Seven stimulants in a catastrophic chapter — The Prime's worst moment. Godric tying him up (humiliation, status, stakes 3) is a direct assault on his dominance (70) and pride sensitivity (60) — fury erupts. His screaming at Godric (loss, future_security, stakes 3) shows containment shattering — raw anger and fear as Praew, his 14-year investment, is taken. Godric's 'Goodbye, brother' (separation, attachment, stakes 3) severs his last family bond — deep sadness. Beating Haldric (harm, morality, stakes 3) — his anger peaks here, but the moral weight produces disgust at himself. Learning Bresdin is free (danger_cue, safety, stakes 3) causes genuine fear. Haldric calling 'Father, please!' (reminder_cue, attachment, stakes 3) pierces his rage with surprise and sadness. Imprisoning Godric (loss, attachment, stakes 3) adds to the grief. This is the one chapter where his containment (70) breaks — anger reaches 55, fear 45 — still capped below what a low-containment character would show. Anticipation drops to zero as all plans collapse."
  },
];
