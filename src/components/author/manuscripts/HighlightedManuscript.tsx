interface HighlightedManuscriptProps {
  content: string;
  analysis?: Record<string, unknown>;
  analysisProgress?: number;
  userId?: string;
  onCharacterClick?: (characterName: string) => void;
}

const HighlightedManuscript = ({
  content,
  analysis: _analysis,
  analysisProgress: _analysisProgress,
  userId: _userId,
  onCharacterClick: _onCharacterClick,
}: HighlightedManuscriptProps) => {
  return (
    <div className="prose prose-sm max-w-none">
      <div className="whitespace-pre-wrap text-foreground leading-relaxed p-4 bg-card rounded-lg border">
        {content}
      </div>
    </div>
  );
};

export default HighlightedManuscript;
