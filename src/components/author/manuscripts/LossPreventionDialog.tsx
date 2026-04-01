import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface LossPreventionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  chapterNumber?: number;
  charactersToDelete?: Array<{ id: string; name: string }>;
  glossaryToDelete?: Array<{ id: string; word: string; definition: string }>;
  onConfirm: () => void;
}

const LossPreventionDialog = ({
  open,
  onOpenChange,
  chapterNumber,
  charactersToDelete = [],
  glossaryToDelete = [],
  onConfirm,
}: LossPreventionDialogProps) => {
  const hasDataToLose = charactersToDelete.length > 0 || glossaryToDelete.length > 0;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {hasDataToLose ? "Warning: Data Will Be Lost" : "Confirm Replacement"}
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-3">
              <p>
                Replacing Chapter {chapterNumber} will permanently delete the following
                AI-extracted data:
              </p>
              {charactersToDelete.length > 0 && (
                <div>
                  <p className="font-medium text-foreground">Characters:</p>
                  <ul className="list-disc list-inside text-sm">
                    {charactersToDelete.map((c) => (
                      <li key={c.id}>{c.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              {glossaryToDelete.length > 0 && (
                <div>
                  <p className="font-medium text-foreground">Glossary Terms:</p>
                  <ul className="list-disc list-inside text-sm">
                    {glossaryToDelete.map((g) => (
                      <li key={g.id}>{g.word}</li>
                    ))}
                  </ul>
                </div>
              )}
              {!hasDataToLose && <p>No additional data will be lost.</p>}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onConfirm();
            }}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Confirm & Replace
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LossPreventionDialog;
