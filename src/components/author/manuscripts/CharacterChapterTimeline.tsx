interface CharacterChapterTimelineProps {
  characterName: string;
  characterId?: string;
  chapters?: Array<{ id: string; number: number; title?: string }>;
  chapterData?: Record<string, any>;
  consistencyFlags?: string[];
  aiData?: any;
  authorData?: any;
  feedback?: any;
  onVoiceScaleChange?: (key: string, value: number) => void;
}

export const CharacterChapterTimeline = ({
  characterName,
  chapters = [],
  chapterData: _chapterData = {},
  consistencyFlags: _consistencyFlags = [],
  aiData: _aiData,
  authorData: _authorData,
  feedback: _feedback,
  onVoiceScaleChange: _onVoiceScaleChange,
}: CharacterChapterTimelineProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{characterName} - Chapter Timeline</h3>
      {chapters.length === 0 ? (
        <p className="text-sm text-muted-foreground">Timeline coming soon</p>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {chapters.map((ch) => (
            <div
              key={ch.id}
              className="px-3 py-2 rounded-lg border bg-card text-sm"
            >
              <span className="font-medium">Ch. {ch.number}</span>
              {ch.title && <span className="text-muted-foreground ml-1">- {ch.title}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
