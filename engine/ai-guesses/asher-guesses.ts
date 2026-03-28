import type { AIEmotionGuess } from '../types';

export const guesses: AIEmotionGuess[] = [
  {
    chapterIndex: 1,
    emotions: { joy: 0, sadness: 25, anger: 25, fear: 0, disgust: 0, surprise: 0, trust: 0, anticipation: 25 },
    reasoning: "Asher passes the Hunter test but only by betraying Haldric — grabbing both stones and leaving his best friend hanging. He shows subdued confidence, guilt-tinged silence, and refuses to meet anyone's eyes afterward. Mild anger (at the rigged test/his father), sadness (knowing he hurt Haldric), and anticipation (of what comes next)."
  },
  {
    chapterIndex: 2,
    emotions: { joy: 0, sadness: 50, anger: 50, fear: 25, disgust: 25, surprise: 25, trust: 0, anticipation: 50 },
    reasoning: "Asher is named Beast Hunter — the most prestigious role — but walks away from Praew and Haldric without a word or apology. He confronts his father The Prime with cold fury, revealing the test was rigged. Renwick's 'All Rivers run cold' stings because it's true. He feels deep guilt (sadness), rage at his father (anger), disgust at the manipulation, fear and awe at the surface approach (blinding light, new air), but also intense anticipation as he finally leaves the city. Meets his new team lead Azel and is humbled/nervous."
  },
  {
    chapterIndex: 3,
    emotions: { joy: 0, sadness: 50, anger: 25, fear: 25, disgust: 25, surprise: 25, trust: 0, anticipation: 0 },
    reasoning: "Chapter 3 flashes back to 8-year-old Asher deciding to become a Hunter after his father becomes Prime and turns cold. In the present, Asher is shoveling beast manure — realizing his father got the last laugh. He reflects on why he betrayed Haldric (saw his father's smug face, realized the test was rigged to fail them both). Deep sadness and regret about his friends, anger at his father's cruelty and manipulation, disgust at his current degrading assignment, and lingering surprise at learning beasts can be farmed while people starve."
  },
];
