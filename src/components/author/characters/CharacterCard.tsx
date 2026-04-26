// @ts-nocheck

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Trash2, Sparkles, Link, Recycle, MoreVertical } from "lucide-react";

const CharacterCard = ({
  character,
  onEdit,
  onDelete,
  onUnblock,
  onGenerate,
  onMerge,
  onHardDelete,
  mergeMode = false,
  isFirstMergeProfile = false,
  userId,
  isBlocked = false
}: {
  character: any;
  onEdit: any;
  onDelete?: any;
  onUnblock?: any;
  onGenerate: any;
  onMerge: any;
  // Active-card "Delete permanently" callback. Optional so blocked-card
  // rendering (which has its own delete via onDelete) is unaffected.
  onHardDelete?: (character: any) => void;
  mergeMode?: boolean;
  isFirstMergeProfile?: boolean;
  userId: any;
  isBlocked?: boolean;
}) => {
  const [overflowOpen, setOverflowOpen] = useState(false);
  const overflowRef = useRef<HTMLDivElement | null>(null);

  // Close the overflow menu on outside click. Listener attached only while
  // the menu is open to keep the cost negligible.
  useEffect(() => {
    if (!overflowOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (overflowRef.current && !overflowRef.current.contains(e.target as Node)) {
        setOverflowOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [overflowOpen]);
  const timelineInstances = character.timelineInstances || [character];
  
  // Get chapter numbers from actual manuscript instances
  const chapterData = timelineInstances
    .filter(inst => inst.manuscript)
    .map(inst => ({
      number: inst.manuscript.chapter_number || 0,
      title: inst.manuscript.chapter_title || inst.manuscript.title,
      manuscriptId: inst.manuscript.id,
      characterId: inst.id
    }))
    .sort((a, b) => a.number - b.number);

  return (
    <Card className={`hover:shadow-lg transition-all ${isFirstMergeProfile ? 'ring-4 ring-destructive bg-destructive/5' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl">{character.name}</CardTitle>
            {chapterData.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-medium">
                  Appears in chapter{chapterData.length > 1 ? 's' : ''}: {chapterData.map(c => c.number).join(', ')}
                </span>
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onMerge(character)}
                    aria-label="Merge profiles"
                  >
                    <Link className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Merge profiles</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {isBlocked ? (
              <>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onUnblock(character.id)}
                        aria-label="Unblock character"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:text-green-300 dark:hover:bg-green-950"
                      >
                        <Recycle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="font-semibold mb-1">Unblock Profile</p>
                      <p className="text-xs">This will restore the character to your active list and allow the AI to detect and extract this character during manuscript analysis.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDelete(character)}
                        aria-label="Delete character permanently"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="font-semibold mb-1">Delete Permanently</p>
                      <p className="text-xs">This will permanently remove this character profile. Re-analyzing may recreate it with different interpretation.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(character.id)}
                  aria-label="Block character"
                  title="Block character"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                {/* Overflow menu — adds "Delete permanently" without
                    regressing the one-click Block path above. Only renders
                    if the parent passes onHardDelete (preserves backwards
                    compatibility with any caller that doesn't supply it). */}
                {onHardDelete && (
                  <div className="relative" ref={overflowRef}>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setOverflowOpen((v) => !v)}
                      aria-label="More actions"
                      aria-haspopup="menu"
                      aria-expanded={overflowOpen}
                      title="More actions"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                    {overflowOpen && (
                      <div
                        role="menu"
                        className="absolute right-0 top-full mt-1 w-48 bg-popover border rounded shadow-lg overflow-hidden z-50"
                      >
                        <button
                          role="menuitem"
                          onClick={() => { setOverflowOpen(false); onHardDelete(character); }}
                          className="w-full text-left px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          Delete permanently
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {character.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {character.description}
          </p>
        )}

        <div className="flex gap-2">
          <Button
            onClick={() => onEdit(character)}
            className="flex-1"
            variant="outline"
          >
            View Profile
          </Button>
          <Button
            onClick={() => onGenerate(character)}
            className="flex-1"
            variant="outline"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Text
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
