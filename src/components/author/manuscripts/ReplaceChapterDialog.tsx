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

interface ReplaceChapterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  chapterNumber: number;
  existingTitle?: string;
  onConfirm: (action: "delete" | "compare") => void;
}

const ReplaceChapterDialog = ({
  open,
  onOpenChange,
  chapterNumber,
  existingTitle,
  onConfirm,
}: ReplaceChapterDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Replace Chapter {chapterNumber}?</AlertDialogTitle>
          <AlertDialogDescription>
            Chapter {chapterNumber}
            {existingTitle ? ` ("${existingTitle}")` : ""} already exists. What
            would you like to do?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onConfirm("delete");
              onOpenChange(false);
            }}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete All Data & Replace
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ReplaceChapterDialog;
