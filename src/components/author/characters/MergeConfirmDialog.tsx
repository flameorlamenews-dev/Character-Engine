import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface MergeConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  firstProfile?: { id: string; name: string } | null;
  secondProfile?: { id: string; name: string } | null;
  onConfirm: (keepProfile: any, deleteProfile: any) => void;
}

const MergeConfirmDialog = ({
  open,
  onClose,
  firstProfile,
  secondProfile,
  onConfirm,
}: MergeConfirmDialogProps) => {
  if (!firstProfile || !secondProfile) return null;

  return (
    <AlertDialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Merge Character Profiles</AlertDialogTitle>
          <AlertDialogDescription>
            Choose which profile to keep. The other profile's data will be merged
            into it and moved to your <strong>Merged Profiles</strong> tab. You
            can restore the merged profile from there anytime.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-2 py-4">
          <Button
            variant="outline"
            onClick={() => onConfirm(firstProfile, secondProfile)}
            className="justify-start"
          >
            Keep "{firstProfile.name}", merge "{secondProfile.name}" into it
          </Button>
          <Button
            variant="outline"
            onClick={() => onConfirm(secondProfile, firstProfile)}
            className="justify-start"
          >
            Keep "{secondProfile.name}", merge "{firstProfile.name}" into it
          </Button>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MergeConfirmDialog;
