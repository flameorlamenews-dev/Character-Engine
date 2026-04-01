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

interface DeleteManuscriptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  manuscriptTitle?: string;
  chapterNumber?: number;
  onConfirm: (deleteAllData: boolean) => void;
}

const DeleteManuscriptDialog = ({
  open,
  onOpenChange,
  manuscriptTitle,
  chapterNumber,
  onConfirm,
}: DeleteManuscriptDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Manuscript</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete{" "}
            {chapterNumber !== undefined ? `Chapter ${chapterNumber}` : ""}{" "}
            {manuscriptTitle ? `"${manuscriptTitle}"` : "this manuscript"}? This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onConfirm(false);
              onOpenChange(false);
            }}
          >
            Delete (Keep Data)
          </AlertDialogAction>
          <AlertDialogAction
            onClick={() => {
              onConfirm(true);
              onOpenChange(false);
            }}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete All Data
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteManuscriptDialog;
