export const EMOTION_COLORS = {
  joy: '#f0b232',
  sadness: '#3b6cbf',
  anger: '#dc3545',
  fear: '#7b42c8',
  disgust: '#6b8e23',
  surprise: '#00c8d4',
  trust: '#2aad8e',
  anticipation: '#e08a2e',
} as const;

export const EMOTION_COLORS_BRIGHT = {
  joy: '#ffd666',
  sadness: '#5a9aff',
  anger: '#ff5a6a',
  fear: '#a66aff',
  disgust: '#8fb842',
  surprise: '#33e8f0',
  trust: '#44d4b0',
  anticipation: '#ffaa44',
} as const;

export type EmotionType = keyof typeof EMOTION_COLORS;

export const EMOTION_LIST: EmotionType[] = [
  'joy',
  'sadness',
  'anger',
  'fear',
  'disgust',
  'surprise',
  'trust',
  'anticipation',
];

export const EMOTION_LABELS: Record<EmotionType, string> = {
  joy: 'Joy',
  sadness: 'Sadness',
  anger: 'Anger',
  fear: 'Fear',
  disgust: 'Disgust',
  surprise: 'Surprise',
  trust: 'Trust',
  anticipation: 'Anticipation',
};
