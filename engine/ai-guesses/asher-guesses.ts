import type { AIEmotionGuess } from '../types';

export const guesses: AIEmotionGuess[] = [
  {
    chapterIndex: 1,
    emotions: { joy: 10, sadness: 40, anger: 30, fear: 10, disgust: 15, surprise: 0, trust: 0, anticipation: 35 },
    reasoning: "Asher gives up his beloved book (minor loss), defends Praew against Renwick (moral satisfaction, brief warmth), and passes the Hunter exam (success at stakes 3, yielding some satisfaction). But he realizes the test is rigged by his father to make him and Haldric fail — a betrayal that triggers anger at his father's manipulation. He then deliberately takes both stones, betraying his best friend to pass. Afterward he cannot meet Haldric's furious gaze, consumed by silent guilt. Sadness is strong from the guilt of betrayal — his moderate-high guilt sensitivity means this weighs heavily. Anger at his father for engineering the impossible situation. Mild disgust at the rigged system. Anticipation is notable — he's pragmatic and forward-looking, focused on what comes next despite the cost. Minimal joy despite the success; it's hollow. No trust left — he's just broken his closest bond. No surprise — he read the situation and made a calculated choice."
  },
  {
    chapterIndex: 2,
    emotions: { joy: 0, sadness: 45, anger: 40, fear: 25, disgust: 25, surprise: 20, trust: 0, anticipation: 40 },
    reasoning: "Asher is announced as Beast Hunter (highest prestige), but Haldric's hatred radiates toward him and he turns his back on both friends without a word. He coldly confronts his father about the rigged test. Renwick's 'all Rivers run cold' stings because Asher internally admits it's true — feeding shame and sadness. He silently apologizes to Haldric and Praew, clenching his fists with guilt. Then he's overwhelmed by sunlight and surface air — physically vulnerable, crying and panicking (fear, surprise). Azel mocks his reaction as hazing. Sadness deepens from guilt and separation from friends. Anger remains strong toward his father. Fear from the disorienting surface exposure. Disgust at his father's manipulations and at himself. Surprise at the overwhelming sensory experience. Anticipation drives him forward — he's finally on the surface, pursuing twelve years of planning. No joy — success is tainted by what it cost. No trust — isolated from everyone he cared about."
  },
  {
    chapterIndex: 3,
    emotions: { joy: 0, sadness: 45, anger: 35, fear: 30, disgust: 30, surprise: 25, trust: 10, anticipation: 15 },
    reasoning: "Asher nearly dies on his first surface step (BoltStone eruption, stakes 3 — sharp fear). Azel berates him for being distracted, and he nearly gets them killed by almost drawing on a passive beast. His surname 'Rivers' creates uncomfortable tension with his team (rejection, belonging). He discovers beasts can be farmed and the food shortage is manufactured — a morality-shaking revelation that amplifies disgust at the system his father leads. Then he's handed a shovel to clean manure — his prestigious Beast Hunter role is actually degrading labor, his father's final humiliation. The flashback compounds everything: eight-year-old Asher told never to call his father 'Father' again, his father slamming a table in rage, something cracking permanently inside him. But childhood Praew and Haldric comfort him, offering a brief thread of warmth and trust. Sadness remains high from compounding family wounds and lost friendships. Anger at his father's cruelty across both timelines. Fear from near-death and his father's violence. Disgust at manufactured famine and the manure humiliation. Surprise at the food shortage revelation. A sliver of trust from the childhood memory. Reduced anticipation — reality is setting in that escape from his father's shadow may be impossible."
  },
];
