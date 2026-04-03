// @ts-nocheck
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, User, TrendingUp, Users, MessageSquare, BookOpen, UserPlus, UserCheck } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AnalysisResultsProps {
  analysis: {
    characterAnalysis?: string;
    characterImpressions?: string;
    consistencyAnalysis?: string;
    character_chapter_analysis?: string;
    chapters?: Array<{
      number: number;
      title?: string;
      summary?: string;
      chapterNumber?: number | string;
      chapterTitle?: string;
      characters?: Array<{
        name: string;
        dialogueCount?: number;
        dialogueExamples?: string[];
        speechPatterns?: {
          emotionalTone?: string;
          sentenceStructure?: string;
          vocabulary?: string;
          distinctivePhrases?: string[];
        };
        traits?: {
          brashness?: number;
          aggression?: number;
          sophistication?: number;
          personalityTraits?: string[];
        };
        development?: string;
      }>;
    }>;
    characterArcs?: Array<{
      character: string;
      overallDevelopment: string;
      keyMoments?: string[];
    }>;
    consistencyIssues?: Array<{
      character: string;
      chapter?: number | string;
      issue: string;
      examples?: string[];
    }>;
    summary?: string;
    newCharacters?: Array<{ name: string; description: string }>;
    recurringCharacters?: Array<{ name: string; evolution: string }>;
    // Legacy format support
    detectedCharacters?: Array<{
      name: string;
      dialogueCount?: number;
      speechPatterns?: {
        emotionalTone?: string;
        sentenceStructure?: string;
        vocabulary?: string;
        distinctivePhrases?: string[];
      };
      estimatedTraits?: {
        brashness?: number;
        aggression?: number;
        sophistication?: number;
        personalityTraits?: string[];
      };
    }>;
  };
}

const sanitizeAnalysisText = (text?: string) => {
  if (!text) return "";
  return text
    .split("\n")
    .filter((line) => {
      // Remove lines that contain glossary entries or glossary sections
      return (
        !/^\s*\*\s*\*\*WORD:/i.test(line) && 
        !/\bGLOSSARY\b/i.test(line) &&
        !/^\s*\d+\.\s*GLOSSARY/i.test(line) &&
        !/^\s*##\s*GLOSSARY/i.test(line) &&
        !/^\s*###\s*GLOSSARY/i.test(line)
      );
    })
    .join("\n")
    .trim();
};

const AnalysisResults = ({ analysis }: AnalysisResultsProps) => {
  const hasIssues = analysis.consistencyIssues && analysis.consistencyIssues.length > 0;
  const hasChapters = analysis.chapters && analysis.chapters.length > 0;
  const hasAIAnalysis = analysis.characterAnalysis || analysis.consistencyAnalysis;

  return (
    <div className="space-y-6">
      {/* AI Character Impressions */}
      {analysis.characterImpressions && (
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              AI's First Impressions
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              The AI's take on each character after reading the manuscript
            </p>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-wrap space-y-6">
                {analysis.characterImpressions.split('###').filter(section => section.trim()).map((section, idx) => {
                  const lines = section.trim().split('\n');
                  const characterName = lines[0].trim();
                  const impression = lines.slice(1).join('\n').trim();
                  
                  return (
                    <div key={idx} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
                      <h4 className="text-lg font-semibold mb-3 text-primary">{characterName}</h4>
                      <div className="text-sm leading-relaxed space-y-3">
                        {impression.split('\n\n').map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-muted-foreground">{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      )}


      {/* AI Voice Consistency Analysis - Brief Summary Per Character */}
      {analysis.consistencyAnalysis && (
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-accent" />
              Voice Consistency Overview
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Brief voice consistency summary for each character
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {(() => {
                const text = sanitizeAnalysisText(analysis.consistencyAnalysis || "");
                
                // Try multiple section patterns in order of likelihood
                let sections: string[] = [];
                
                // 1) '## Character Name' style
                const h2Sections = text.split(/(?:^|\n)##\s+/gm)
                  .filter(s => s.trim())
                  .filter(s => {
                    // Skip sections that are just headers (like "Profile-Based Voice Consistency Check")
                    const firstLine = s.split('\n')[0].trim();
                    return !firstLine.match(/^#\s+/) &&
                           !firstLine.toLowerCase().includes('profile-based') &&
                           !firstLine.toLowerCase().includes('consistency check');
                  });
                if (h2Sections.length > 0) sections = h2Sections;
                
                // 2) '### Character Name' style
                if (sections.length === 0) {
                  const h3Sections = text.split(/###\s+/g)
                    .filter(s => s.trim())
                    .filter(s => {
                      const firstLine = s.split('\n')[0].trim();
                      return !firstLine.match(/^#\s+/);
                    });
                  if (h3Sections.length > 0) sections = h3Sections;
                }
                
                // 3) 'CHARACTER: Name' style (observed in edge function logs)
                if (sections.length === 0) {
                  const charParts = text.split(/(?:^|\n)\s*(?:CHARACTER|Character)\s*:\s+/g);
                  if (charParts.length > 1) {
                    sections = charParts.slice(1).filter(s => s.trim());
                  }
                }
                
                if (sections.length === 0) {
                  // Fallback if no character sections found
                  return (
                    <div className="text-sm text-muted-foreground">
                      <p>{text.split('\n').slice(0, 3).join('\n')}</p>
                    </div>
                  );
                }
                
                return sections.map((section, idx) => renderCharacterSection(section, idx));
                
                function renderCharacterSection(section: string, idx: number) {
                  const lines = section.split('\n').filter(l => l.trim());
                  
                  // Extract character name (remove "Voice Analysis" suffix if present)
                  let characterName = lines[0].trim().replace(/\s+Voice Analysis\s*$/i, '');
                  
                  // Clean up markdown formatting in character name
                  characterName = characterName.replace(/\*\*/g, '').replace(/##/g, '').trim();
                  
                  const content = lines.slice(1).join('\n');
                  
                  // Find consistency rating or score
                  const ratingMatch = content.match(/(?:consistency|rating|score|accuracy)[:\s]*(\d+(?:\.\d+)?(?:%|\/10)?)/i);
                  const ratingText = ratingMatch ? ratingMatch[0] : null;
                  
                  // Get first substantive paragraph (skip markdown headers and formatting)
                  const substantiveLines = lines.slice(1)
                    .filter(l => {
                      const cleaned = l.trim().replace(/\*\*/g, '');
                      return cleaned && 
                             !cleaned.startsWith('#') && 
                             !cleaned.match(/^\*\*[^*]+:\*\*\s*$/) && // Skip standalone markdown headers
                             cleaned.length > 20; // Skip very short lines
                    });
                  
                  const summaryParagraph = substantiveLines.slice(0, 2).join(' ').replace(/\*\*/g, '');
                  
                  // Look for key issues
                  const issuesMatch = content.match(/(?:key|main|specific|noted)\s+(?:issues?|inconsistencies|problems?|violations)[:\s]*(.*?)(?:\n\n|$)/is);
                  const keyIssues = issuesMatch 
                    ? issuesMatch[1].split('\n')
                        .filter(l => l.trim() && l.trim().length > 10)
                        .slice(0, 3)
                        .map(l => l.replace(/^[-•*]\s*/, '').replace(/\*\*/g, '').trim())
                    : [];
                  
                  return (
                    <div key={idx} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
                      <h4 className="text-lg font-semibold mb-3 text-primary">{characterName}</h4>
                      
                      <div className="space-y-3">
                        {ratingText && (
                          <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                            <p className="text-sm font-medium capitalize">{ratingText}</p>
                          </div>
                        )}
                        
                        {summaryParagraph && (
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            <p>{summaryParagraph}</p>
                          </div>
                        )}
                        
                        {keyIssues.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              Key Issues:
                            </p>
                            <ul className="space-y-1">
                              {keyIssues.map((issue, i) => (
                                <li key={i} className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0">
                                  {issue}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
              })()}
              
              <div className="pt-2 border-t mt-6">
                <p className="text-xs text-muted-foreground italic">
                  View the full detailed analysis in each character's Compare tab.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chapter Summary Section - Always shown when summary exists */}
      {analysis.summary && (
        <div className="space-y-4">
          {/* Chapter Synopsis */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Chapter Synopsis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{sanitizeAnalysisText(analysis.summary)}</p>
            </CardContent>
          </Card>

          {/* Newly Introduced Characters */}
          {analysis.newCharacters && analysis.newCharacters.length > 0 && (
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-accent" />
                  Newly Introduced Characters
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Characters appearing for the first time in this chapter
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {analysis.newCharacters.map((char, idx) => (
                  <div key={idx} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <h4 className="text-base font-semibold mb-2 text-primary">{char.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{char.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Recurring Characters */}
          {analysis.recurringCharacters && analysis.recurringCharacters.length > 0 && (
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-accent" />
                  Recurring Characters
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Characters returning from earlier chapters
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {analysis.recurringCharacters.map((char, idx) => (
                  <div key={idx} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <h4 className="text-base font-semibold mb-2 text-primary">{char.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{char.evolution}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Character Arcs */}
      {analysis.characterArcs && analysis.characterArcs.length > 0 && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Character Development Arcs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {analysis.characterArcs.map((arc, idx) => (
              <div key={idx} className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-semibold text-lg mb-2">{arc.character}</h4>
                <p className="text-sm text-muted-foreground mb-2">{arc.overallDevelopment}</p>
                {arc.keyMoments && arc.keyMoments.length > 0 && (
                  <div className="space-y-1 mt-2">
                    <div className="text-xs font-medium text-muted-foreground">Key Moments:</div>
                    {arc.keyMoments.map((moment, i) => (
                      <div key={i} className="text-xs bg-accent/10 p-2 rounded">
                        {moment}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Chapter-by-Chapter Character Analysis */}
      {hasChapters && analysis.chapters?.some(ch => ch.characters && ch.characters.length > 0) && (
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-4">Character Analysis by Chapter</h3>
          <div className="space-y-6">
            {analysis.chapters!.filter(ch => ch.characters && ch.characters.length > 0).map((chapter) => (
              <Card key={chapter.number}>
                <CardHeader>
                  <CardTitle>Chapter {chapter.chapterNumber || chapter.number}{chapter.chapterTitle || chapter.title ? `: ${chapter.chapterTitle || chapter.title}` : ''}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {chapter.characters!.map((char, idx) => (
                    <div key={idx} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-semibold text-lg mb-1">{char.name}</h4>
                      {char.development && (
                        <p className="text-sm text-muted-foreground mb-2">{char.development}</p>
                      )}
                      {char.traits?.personalityTraits && char.traits.personalityTraits.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {char.traits.personalityTraits.map((trait, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{trait}</Badge>
                          ))}
                        </div>
                      )}
                      {char.dialogueCount != null && (
                        <p className="text-xs text-muted-foreground mt-1">{char.dialogueCount} dialogue lines</p>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Legacy format support - show old detected characters if no new format */}
      {analysis.detectedCharacters && analysis.detectedCharacters.length > 0 && (
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-4">Detected Characters</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {analysis.detectedCharacters.map((char, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <User className="h-4 w-4 text-primary" />
                    {char.name}
                    {char.dialogueCount && (
                      <Badge variant="secondary" className="ml-auto">
                        {char.dialogueCount} lines
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {char.speechPatterns && (
                    <div className="space-y-2">
                      {char.speechPatterns.emotionalTone && (
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Tone:{" "}
                          </span>
                          <span className="text-sm">{char.speechPatterns.emotionalTone}</span>
                        </div>
                      )}
                      {char.speechPatterns.sentenceStructure && (
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Structure:{" "}
                          </span>
                          <span className="text-sm">
                            {char.speechPatterns.sentenceStructure}
                          </span>
                        </div>
                      )}
                      {char.speechPatterns.distinctivePhrases &&
                        char.speechPatterns.distinctivePhrases.length > 0 && (
                          <div>
                            <span className="text-sm font-medium text-muted-foreground block mb-1">
                              Distinctive Phrases:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {char.speechPatterns.distinctivePhrases.map((phrase, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  "{phrase}"
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  )}

                  {char.estimatedTraits && (
                    <div className="pt-2 border-t space-y-1">
                      <div className="text-xs text-muted-foreground font-medium">
                        Estimated Traits
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {char.estimatedTraits.brashness && (
                          <div>
                            <span className="text-muted-foreground">Brashness: </span>
                            <span className="font-medium">
                              {char.estimatedTraits.brashness}/10
                            </span>
                          </div>
                        )}
                        {char.estimatedTraits.aggression && (
                          <div>
                            <span className="text-muted-foreground">Aggression: </span>
                            <span className="font-medium">
                              {char.estimatedTraits.aggression}/10
                            </span>
                          </div>
                        )}
                        {char.estimatedTraits.sophistication && (
                          <div>
                            <span className="text-muted-foreground">Sophistication: </span>
                            <span className="font-medium">
                              {char.estimatedTraits.sophistication}/10
                            </span>
                          </div>
                        )}
                      </div>
                      {char.estimatedTraits.personalityTraits &&
                        char.estimatedTraits.personalityTraits.length > 0 && (
                          <div className="flex flex-wrap gap-1 pt-1">
                            {char.estimatedTraits.personalityTraits.map((trait, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {trait}
                              </Badge>
                            ))}
                          </div>
                        )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Consistency Issues */}
      {hasIssues && (
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-4 text-destructive flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Voice Consistency Issues
          </h3>
          <div className="space-y-3">
            {analysis.consistencyIssues!.map((issue, idx) => (
              <Alert key={idx} variant="destructive">
                <AlertDescription>
                  <div className="font-semibold mb-1">
                    {issue.character}
                    {issue.chapter && ` - Chapter ${issue.chapter}`}
                  </div>
                  <p className="text-sm mb-2">{issue.issue}</p>
                  {issue.examples && issue.examples.length > 0 && (
                    <div className="space-y-1">
                      {issue.examples.map((example, i) => (
                        <div
                          key={i}
                          className="text-xs bg-background/50 p-2 rounded italic"
                        >
                          "{example}"
                        </div>
                      ))}
                    </div>
                  )}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisResults;