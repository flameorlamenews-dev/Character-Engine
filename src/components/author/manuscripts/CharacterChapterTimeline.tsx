// @ts-nocheck
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Brain, MessageSquare, Users } from "lucide-react";
import CharacterComparisonView from "@/components/author/characters/CharacterComparisonView";
import EngineProfileSection from "@/components/author/characters/EngineProfileSection";

const VOICE_SCALE_KEYS = ["brashness", "aggression", "sophistication", "formality", "empathy", "introspection"] as const;

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
  characterId,
  chapters = [],
  chapterData = {},
  consistencyFlags = [],
  aiData,
  authorData,
  feedback,
  onVoiceScaleChange,
}: CharacterChapterTimelineProps) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("ai");

  const selectedChapter = chapters.find(ch => ch.id === selectedChapterId);
  const selectedData = selectedChapterId ? chapterData[selectedChapterId] : null;

  return (
    <div className="space-y-4">
      {/* Circular timeline chapter selector */}
      <div className="flex items-center gap-0 flex-wrap">
        {chapters.map((ch, idx) => {
          const isSelected = ch.id === selectedChapterId;
          const hasData = chapterData[ch.id] && !chapterData[ch.id]._notAnalyzed;
          return (
            <div key={ch.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setSelectedChapterId(ch.id)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all cursor-pointer
                    ${isSelected
                      ? "bg-primary text-primary-foreground border-primary scale-110"
                      : hasData
                        ? "bg-card hover:bg-accent border-border"
                        : "bg-muted/30 border-dashed border-muted-foreground/30 text-muted-foreground"
                    }`}
                >
                  {ch.number}
                </button>
                {isSelected && (
                  <span className="text-xs text-primary font-medium mt-1">Ch {ch.number}</span>
                )}
              </div>
              {idx < chapters.length - 1 && (
                <div className="w-4 h-0.5 bg-border mx-0.5" />
              )}
            </div>
          );
        })}
      </div>

      {/* Chapter header */}
      {selectedChapter && (
        <div className="bg-muted/50 rounded-lg px-4 py-3">
          <h3 className="font-semibold text-sm">
            Chapter {selectedChapter.number}{selectedChapter.title ? `: ${selectedChapter.title}` : ''}
          </h3>
        </div>
      )}

      {/* Content area */}
      {!selectedChapterId ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            Select a chapter above to view profile data
          </CardContent>
        </Card>
      ) : !selectedData || selectedData._notAnalyzed ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            Chapter {selectedChapter?.number} has not been analyzed yet.
          </CardContent>
        </Card>
      ) : (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="ai">AI Interpretation</TabsTrigger>
            <TabsTrigger value="author">Author Interpretation</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
          </TabsList>

          {/* ── AI Interpretation Tab ──────────────────────────────── */}
          <TabsContent value="ai" className="space-y-4">
            <p className="text-sm italic text-muted-foreground">
              AI analysis from Chapter {selectedChapter?.number}
            </p>

            {/* Master Summary */}
            {(selectedData.profile || selectedData.masterSummary) && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Master Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {aiData?.formData?.role && (
                    <p className="text-sm"><span className="font-medium">Role:</span> {aiData.formData.role || "—"}</p>
                  )}
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {selectedData.profile || selectedData.masterSummary}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Speech Pattern */}
            {selectedData.analysis && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Speech Pattern
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">AI-detected speech and voice patterns</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {selectedData.analysis}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Emotional State */}
            {selectedData.emotionalState && (
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Emotional State</h4>
                <Badge variant="secondary" className="text-sm">{selectedData.emotionalState}</Badge>
              </div>
            )}

            {/* Personality Traits */}
            {selectedData.traits && selectedData.traits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Personality Traits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    {selectedData.traits.map((t: any, i: number) => (
                      <li key={i}>{typeof t === "string" ? t : `${t.trait}${t.evidence ? ` - '${t.evidence}'` : ''}`}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Relationships */}
            {selectedData.relationships && (
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Relationships</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{selectedData.relationships}</p>
              </div>
            )}

            {/* Dialogue Patterns */}
            {selectedData.dialoguePatterns && selectedData.dialoguePatterns.length > 0 && (
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Dialogue Patterns</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedData.dialoguePatterns.map((p: string, i: number) => (
                    <Badge key={i} variant="secondary">{p}</Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Views */}
            {selectedData.viewsOfOthers && (
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">How {characterName} Sees Others</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{selectedData.viewsOfOthers}</p>
              </div>
            )}
            {selectedData.viewsByOthers && (
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">How Others See {characterName}</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{selectedData.viewsByOthers}</p>
              </div>
            )}

            {/* Mottos */}
            {aiData?.mottos && aiData.mottos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Character Mottos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {aiData.mottos.map((m: any, i: number) => (
                      <p key={i} className="text-sm italic text-muted-foreground border-l-2 border-primary/40 pl-3">
                        "{typeof m === 'string' ? m : m.motto}"
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

          </TabsContent>

          {/* ── Author Interpretation Tab ──────────────────────────── */}
          <TabsContent value="author">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="voice">Voice</TabsTrigger>
                <TabsTrigger value="personality">Personality</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                {authorData?.formData && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Author Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {authorData.formData.role && (
                        <p className="text-sm"><span className="font-medium">Role:</span> {authorData.formData.role}</p>
                      )}
                      {authorData.formData.name && (
                        <p className="text-sm"><span className="font-medium">Name:</span> {authorData.formData.name}</p>
                      )}
                    </CardContent>
                  </Card>
                )}

                {authorData?.traits && authorData.traits.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Author-Defined Traits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                        {authorData.traits.map((t: any, i: number) => (
                          <li key={i}>{typeof t === "string" ? t : t.trait}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {authorData?.mottos && authorData.mottos.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Character Mottos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {authorData.mottos.map((m: any, i: number) => (
                          <p key={i} className="text-sm italic text-muted-foreground border-l-2 border-primary/40 pl-3">
                            "{typeof m === 'string' ? m : m.motto}"
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {(!authorData || (!authorData.traits?.length && !authorData.mottos?.length)) && (
                  <Card>
                    <CardContent className="py-8 text-center text-muted-foreground">
                      No author interpretation data set yet. Edit the character to add traits and mottos.
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="voice" className="space-y-3">
                {VOICE_SCALE_KEYS.map((key) => {
                  // Canonical engine scale is 0-75 (locked by audio Claude, see migration 008 header).
                  // Midpoint 37 = "moderate". Default to 37 when author hasn't set a value.
                  const value = Number(authorData?.voiceScales?.[key] ?? 37);
                  const label = key.charAt(0).toUpperCase() + key.slice(1);
                  return (
                    <div key={key} className="p-4 bg-muted/50 rounded-lg space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{label}</span>
                        <span className="text-sm font-medium">{value}/75</span>
                      </div>
                      <Slider
                        value={[value]}
                        min={0}
                        max={75}
                        step={1}
                        onValueChange={([v]) => onVoiceScaleChange?.(key, v)}
                      />
                    </div>
                  );
                })}
              </TabsContent>

              <TabsContent value="personality">
                {characterId ? (
                  <EngineProfileSection characterId={characterId} />
                ) : (
                  <div className="text-center py-6 text-muted-foreground text-sm">
                    Character ID not available.
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* ── Comparison Tab ─────────────────────────────────────── */}
          <TabsContent value="comparison">
            <CharacterComparisonView
              aiData={{
                ...aiData,
                voiceScales: selectedData.voiceScales || aiData?.voiceScales,
              }}
              authorData={authorData}
              feedback={feedback}
            />
          </TabsContent>

          {/* ── Interactions Tab ───────────────────────────────────── */}
          <TabsContent value="interactions">
            <Tabs defaultValue="dialogue" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="dialogue" className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  Dialogue
                </TabsTrigger>
                <TabsTrigger value="relationships" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  Relationships
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dialogue" className="space-y-4">
                {/* Internal Thoughts */}
                {selectedData.internalDialogue && selectedData.internalDialogue.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Internal Thoughts
                    </h4>
                    <div className="space-y-2">
                      {selectedData.internalDialogue.map((q: string, i: number) => (
                        <div key={i} className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm italic text-muted-foreground">{q}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Spoken Dialogue */}
                {selectedData.externalDialogue && selectedData.externalDialogue.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Spoken Dialogue
                    </h4>
                    <div className="space-y-2">
                      {selectedData.externalDialogue.map((q: string, i: number) => (
                        <div key={i} className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">"{q}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(!selectedData.internalDialogue?.length && !selectedData.externalDialogue?.length) && (
                  <Card>
                    <CardContent className="py-8 text-center text-muted-foreground">
                      No dialogue data available for this chapter.
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="relationships" className="space-y-4">
                {selectedData.relationships && (
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{selectedData.relationships}</p>
                  </div>
                )}
                {selectedData.viewsOfOthers && (
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm">Their View of Others</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{selectedData.viewsOfOthers}</p>
                  </div>
                )}
                {selectedData.viewsByOthers && (
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm">How Others See Them</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{selectedData.viewsByOthers}</p>
                  </div>
                )}
                {!selectedData.relationships && !selectedData.viewsOfOthers && !selectedData.viewsByOthers && (
                  <Card>
                    <CardContent className="py-8 text-center text-muted-foreground">
                      No relationship data available for this chapter.
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};
