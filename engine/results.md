# Character Engine — Calculator Results

Generated: 2026-03-28T06:00:28.020Z


## Praew

### Emotion Values Per Chapter

```
Ch |    joy |  sadne |  anger |   fear |  disgu |  surpr |  trust |  antic
--------------------------------------------------------------------------
 0 |      0 |     11 |      3 |      2 |      0 |      0 |      0 |      0
 1 |      0 |    75! |     47 |     12 |     15 |      0 |      4 |      0
 2 |      0 |     50 |     29 |      7 |      6 |      0 |      0 |      0
 3 |      0 |     10 |      6 |      1 |      1 |      0 |      0 |      0
 4 |      7 |     35 |     18 |      8 |      6 |      0 |      3 |      3
 5 |      1 |     21 |     14 |      6 |      7 |      0 |      1 |      2
 6 |      0 |     21 |     26 |     12 |      5 |      0 |      0 |      4
 7 |      0 |     25 |     26 |     15 |     15 |      5 |      0 |      8
 8 |      0 |     34 |     16 |     13 |      3 |      2 |      0 |      0
 9 |      4 |      7 |      5 |      6 |      1 |      0 |      7 |      5
10 |     14 |      1 |      1 |      1 |      0 |      0 |      5 |      3
11 |      3 |      0 |      0 |      0 |      0 |      0 |      1 |      1
12 |      1 |     27 |     11 |      3 |      4 |      6 |      0 |      2
13 |      0 |     41 |     42 |      7 |      6 |      2 |      0 |      0
14 |      0 |     41 |     42 |      7 |      6 |      2 |      0 |      0
15 |      0 |    75! |     36 |      5 |      1 |      0 |      0 |      0
16 |      0 |     67 |     31 |      5 |      5 |      0 |      0 |      0
17 |      1 |     21 |     19 |      4 |      1 |      0 |      9 |      2
18 |      0 |     40 |     28 |     10 |      9 |      0 |      9 |      0
```

### Calculation Breakdown

```

=== Chapter 0 ===
Stimulants this chapter: 1

  Stimulant: "Praew reads the story of Srevlis and feels her heart race with excitement and emotional attachment to the tale that raised her."
    Event: reminder_cue | Subject: self | Source: world_caused | Domain: attachment
    Trigger: stakes=0 imm=3 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    sadness: base=22 × trig=0.85 × weight=0.5 → raw=9.35
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.35 × (1 + 0.720) = 16.08
    Final delta: 16.08 × 1 × 0.7 = 11.26
    fear: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.82 × (1 + -0.360) = 2.45
    Final delta: 2.45 × 1 × 0.7 = 1.71
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.453) = 4.45
    Final delta: 4.45 × 1 × 0.7 = 3.11

  Emotion updates:
    sadness: carry(0.0 × 0.2) + delta(11.26) = 11.26
    anger: carry(0.0 × 0.2) + delta(3.11) = 3.11
    fear: carry(0.0 × 0.2) + delta(1.71) = 1.71

=== Chapter 1 ===
Stimulants this chapter: 9

  Stimulant: "Praew closes the book for the last time as part of a pact with her friends, saying goodbye to the story that raised her."
    Event: separation | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=22 × trig=0.85 × weight=0.6 → raw=11.22
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.22 × (1 + 0.720) = 19.30
    Final delta: 19.30 × 1 × 1.1 = 21.23
    fear: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 2.55 × (1 + -0.360) = 1.63
    Final delta: 1.63 × 1 × 1.1 = 1.80
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.453) = 4.45
    Final delta: 4.45 × 1 × 1.1 = 4.89

  Stimulant: "Praew feels tense and anxious in the waiting hall before the Hunter Test, doubting herself and spiraling with negative thoughts."
    Event: threat | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=1 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=15 × trig=0.85 × weight=0.7 → raw=8.92
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.92 × (1 + -0.360) = 5.71
    Final delta: 5.71 × 1 × 1.1 = 6.28
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.453) = 4.45
    Final delta: 4.45 × 1 × 1.1 = 4.89
    anticipation: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.53 × (1 + 0.087) = 1.66
    Final delta: 1.66 × 1 × 1.1 = 1.83

  Stimulant: "Praew catches herself using her height and gender as excuses and angrily refuses to accept them as reasons for potential failure."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=17 × trig=0.85 × weight=0.4 → raw=5.78
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 5.78 × (1 + 0.140) = 6.59
    Final delta: 6.59 × 1 × 1.1 = 7.25
    anger: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.453) = 6.67
    Final delta: 6.67 × 1 × 1.1 = 7.34
    sadness: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.61 × (1 + 0.720) = 9.65
    Final delta: 9.65 × 1 × 1.1 = 10.61

  Stimulant: "Renwick mocks Praew for being emotional about the book and says women should not be Hunters."
    Event: insult | Subject: self | Source: enemy_caused | Domain: status
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=18 × trig=0.85 × weight=0.6 → raw=9.18
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.18 × (1 + 0.453) = 13.34
    Final delta: 13.34 × 1 × 0.8 = 10.67
    disgust: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 2.89 × (1 + 0.140) = 3.29
    Final delta: 3.29 × 1 × 0.8 = 2.64
    sadness: base=22 × trig=0.85 × weight=0.2 → raw=3.74
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.74 × (1 + 0.720) = 6.43
    Final delta: 6.43 × 1 × 0.8 = 5.15

  Stimulant: "Haldric and Asher perform their triangle hand gesture and recite their bond phrase, giving Praew reassurance before her test."
    Event: connection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=20 × trig=1 × weight=0.5 → raw=10.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 10.00 × (1 + -0.100) = 9.00
    Final delta: 9.00 × 0.8 × 1.3 = 9.36
    joy: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 5.40 × (1 + 0.100) = 5.94
    Final delta: 5.94 × 0.8 × 1.3 = 6.18
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + 0.087) = 3.91
    Final delta: 3.91 × 0.8 × 1.3 = 4.07

  Stimulant: "During the knowledge exam, a mysterious red-glowing stone overwhelms Praew with alien emotions: alarm, fear, hatred, longing, sadness, and defiance."
    Event: surprise_reveal | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    surprise: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 7.73 × (1 + -0.143) = 6.63
    Final delta: 6.63 × 1 × 0.7 = 4.64
    fear: base=15 × trig=0.85 × weight=0.15 → raw=1.91
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 1.91 × (1 + -0.360) = 1.22
    Final delta: 1.22 × 1 × 0.7 = 0.86
    anticipation: base=18 × trig=0.85 × weight=0.15 → raw=2.29
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.29 × (1 + 0.087) = 2.49
    Final delta: 2.49 × 1 × 0.7 = 1.75

  Stimulant: "Praew watches Asher abandon Haldric during the practical test, choosing to take both stones instead of helping his friend."
    Event: betrayal | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=22 × trig=1 × weight=0.4 → raw=8.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.80 × (1 + 0.720) = 15.14
    Final delta: 15.14 × 0.8 × 1.3 = 15.74
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 0.8 × 1.3 = 8.16
    trust (COLLAPSE): base=20 × trig=1 × weight=0.3 → raw=6.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 6.00 × (1 + -0.100) = 5.40
    Final delta: 5.40 × 0.8 × 1.3 = 5.62
    → Trust COLLAPSED by -5.62

  Stimulant: "Renwick sexually harasses Praew during the practical test, causing her to hesitate and stumble, losing the competition."
    Event: humiliation | Subject: self | Source: enemy_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    sadness: base=22 × trig=1 × weight=0.4 → raw=8.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.80 × (1 + 0.720) = 15.14
    Final delta: 15.14 × 1 × 0.8 = 12.11
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 1 × 0.8 = 6.28
    disgust: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 5.10 × (1 + 0.140) = 5.81
    Final delta: 5.81 × 1 × 0.8 = 4.65

  Stimulant: "Praew fails the Hunter Test permanently with no second chances, losing her lifelong dream."
    Event: failure | Subject: self | Source: enemy_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    sadness: base=22 × trig=1 × weight=0.5 → raw=11.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.00 × (1 + 0.720) = 18.92
    Final delta: 18.92 × 1 × 0.8 = 15.14
    fear: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.50 × (1 + -0.360) = 2.88
    Final delta: 2.88 × 1 × 0.8 = 2.30
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.453) = 5.23
    Final delta: 5.23 × 1 × 0.8 = 4.19

  Suppression applied:
  Suppression: sadness(91.2) suppresses joy by -47.98 (60% of sadness delta)
  Suppression: sadness(91.2) suppresses anticipation by -23.99 (30% of sadness delta)
  Suppression: sadness(91.2) suppresses surprise by -15.99 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(-41.81) = -41.81
    sadness: carry(11.3 × 0.2) + delta(79.97) = 82.23
    *** sadness in RED ZONE: VU=82.2 (track capped at 75) ***
    anger: carry(3.1 × 0.2) + delta(46.42) = 47.04
    fear: carry(1.7 × 0.2) + delta(11.24) = 11.58
    disgust: carry(0.0 × 0.2) + delta(14.54) = 14.54
    surprise: carry(0.0 × 0.2) + delta(-11.36) = -11.36
    trust: carry(0.0 × 0.2) + delta(3.74) = 3.74
    anticipation: carry(0.0 × 0.2) + delta(-16.35) = -16.35

=== Chapter 2 ===
Stimulants this chapter: 4

  Stimulant: "Praew is assigned to Special Forces under the constable, an unexpectedly good position that surprises her."
    Event: success | Subject: self | Source: authority_caused | Domain: future_security
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 12.60 × (1 + 0.100) = 13.86
    Final delta: 13.86 × 1 × 1 = 13.86
    trust: base=20 × trig=1 × weight=0.2 → raw=4.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 4.00 × (1 + -0.100) = 3.60
    Final delta: 3.60 × 1 × 1 = 3.60
    anticipation: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.80 × (1 + 0.087) = 1.96
    Final delta: 1.96 × 1 × 1 = 1.96

  Stimulant: "Praew watches Haldric shake with rage as Asher is named Beast Hunter, feeling the tension between her friends."
    Event: danger_cue | Subject: friend | Source: authority_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    fear: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 10.50 × (1 + -0.360) = 6.72
    Final delta: 6.72 × 0.8 × 1 = 5.38
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + 0.087) = 3.91
    Final delta: 3.91 × 0.8 × 1 = 3.13
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.453) = 2.62
    Final delta: 2.62 × 0.8 × 1 = 2.09

  Stimulant: "Asher leaves without saying goodbye or apologizing, turning his back on Praew and Haldric."
    Event: rejection | Subject: self | Source: ally_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=22 × trig=1 × weight=0.6 → raw=13.20
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.20 × (1 + 0.720) = 22.70
    Final delta: 22.70 × 1 × 1.3 = 29.52
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.453) = 5.23
    Final delta: 5.23 × 1 × 1.3 = 6.80
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.360) = 1.92
    Final delta: 1.92 × 1 × 1.3 = 2.50

  Stimulant: "Renwick makes a vulgar parting comment telling Praew to keep his bed warm, humiliating her publicly."
    Event: insult | Subject: self | Source: enemy_caused | Domain: status
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=18 × trig=0.85 × weight=0.6 → raw=9.18
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.18 × (1 + 0.453) = 13.34
    Final delta: 13.34 × 1 × 0.8 = 10.67
    disgust: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 2.89 × (1 + 0.140) = 3.29
    Final delta: 3.29 × 1 × 0.8 = 2.64
    sadness: base=22 × trig=0.85 × weight=0.2 → raw=3.74
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.74 × (1 + 0.720) = 6.43
    Final delta: 6.43 × 1 × 0.8 = 5.15

  Suppression applied:
  Suppression: anger(66.6) suppresses joy by -9.78 (50% of anger delta)
  Suppression: anger(66.6) suppresses trust by -5.87 (30% of anger delta)
  Suppression: anger(66.6) suppresses fear by -2.94 (15% of anger delta)
  Suppression: sadness(109.7) suppresses joy by -20.80 (60% of sadness delta)
  Suppression: sadness(109.7) suppresses anticipation by -10.40 (30% of sadness delta)
  Suppression: sadness(109.7) suppresses surprise by -6.93 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(-16.72) = -16.72
    sadness: carry(75.0 × 0.2) + delta(34.66) = 49.66
    anger: carry(47.0 × 0.2) + delta(19.57) = 28.98
    fear: carry(11.6 × 0.2) + delta(4.94) = 7.25
    disgust: carry(14.5 × 0.2) + delta(2.64) = 5.54
    trust: carry(3.7 × 0.2) + delta(-2.27) = -1.52
    anticipation: carry(0.0 × 0.2) + delta(-5.31) = -5.31

=== Chapter 3 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(49.7 × 0.2) + delta(0.00) = 9.93
    anger: carry(29.0 × 0.2) + delta(0.00) = 5.80
    fear: carry(7.3 × 0.2) + delta(0.00) = 1.45
    disgust: carry(5.5 × 0.2) + delta(0.00) = 1.11

=== Chapter 4 ===
Stimulants this chapter: 4

  Stimulant: "Praew accidentally calls her drill instructor 'Stone Face' out loud, embarrassing herself in front of the class."
    Event: humiliation | Subject: self | Source: self_caused | Domain: status
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=22 × trig=0.85 × weight=0.4 → raw=7.48
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.48 × (1 + 0.720) = 12.87
    Final delta: 12.87 × 1 × 1.1 = 14.15
    anger: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.453) = 6.67
    Final delta: 6.67 × 1 × 1.1 = 7.34
    disgust: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 4.33 × (1 + 0.140) = 4.94
    Final delta: 4.94 × 1 × 1.1 = 5.44

  Stimulant: "Professor Stone tells the recruits they were given a second chance and could still go to the surface, reigniting Praew's buried hope."
    Event: reward | Subject: self | Source: authority_caused | Domain: future_security
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=18 × trig=0.6 × weight=0.6 → raw=6.48
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 6.48 × (1 + 0.100) = 7.13
    Final delta: 7.13 × 1 × 1 = 7.13
    trust: base=20 × trig=0.6 × weight=0.3 → raw=3.60
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 3.60 × (1 + -0.100) = 3.24
    Final delta: 3.24 × 1 × 1 = 3.24
    anticipation: base=18 × trig=0.6 × weight=0.1 → raw=1.08
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.08 × (1 + 0.087) = 1.17
    Final delta: 1.17 × 1 × 1 = 1.17

  Stimulant: "Praew worries about her parents' declining health and reduced rations, realizing the food shortage is worsening for them."
    Event: threat | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    fear: base=15 × trig=0.85 × weight=0.7 → raw=8.92
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.92 × (1 + -0.360) = 5.71
    Final delta: 5.71 × 0.9 × 1 = 5.14
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.453) = 4.45
    Final delta: 4.45 × 0.9 × 1 = 4.00
    anticipation: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.53 × (1 + 0.087) = 1.66
    Final delta: 1.66 × 0.9 × 1 = 1.50

  Stimulant: "Praew kneels on her bed and traces the carved words from her parents, feeling grateful for their sacrifices."
    Event: reminder_cue | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    sadness: base=22 × trig=0.85 × weight=0.5 → raw=9.35
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.35 × (1 + 0.720) = 16.08
    Final delta: 16.08 × 0.9 × 1.3 = 18.82
    fear: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.82 × (1 + -0.360) = 2.45
    Final delta: 2.45 × 0.9 × 1.3 = 2.86
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.453) = 4.45
    Final delta: 4.45 × 0.9 × 1.3 = 5.20

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(7.13) = 7.13
    sadness: carry(9.9 × 0.2) + delta(32.97) = 34.95
    anger: carry(5.8 × 0.2) + delta(16.54) = 17.70
    fear: carry(1.5 × 0.2) + delta(8.00) = 8.30
    disgust: carry(1.1 × 0.2) + delta(5.44) = 5.66
    trust: carry(0.0 × 0.2) + delta(3.24) = 3.24
    anticipation: carry(0.0 × 0.2) + delta(2.67) = 2.67

=== Chapter 5 ===
Stimulants this chapter: 2

  Stimulant: "Praew reads the terrifying silent course test rules including water crossing with BoltStones and wonders if this is a death sentence."
    Event: threat | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=15 × trig=0.6 × weight=0.7 → raw=6.30
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 6.30 × (1 + -0.360) = 4.03
    Final delta: 4.03 × 1 × 1 = 4.03
    anger: base=18 × trig=0.6 × weight=0.2 → raw=2.16
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 2.16 × (1 + 0.453) = 3.14
    Final delta: 3.14 × 1 × 1 = 3.14
    anticipation: base=18 × trig=0.6 × weight=0.1 → raw=1.08
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.08 × (1 + 0.087) = 1.17
    Final delta: 1.17 × 1 × 1 = 1.17

  Stimulant: "Praew trips and falls during the silent movement practice in front of her classmates, who barely contain their laughter."
    Event: humiliation | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=22 × trig=0.85 × weight=0.4 → raw=7.48
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.48 × (1 + 0.720) = 12.87
    Final delta: 12.87 × 1 × 1.1 = 14.15
    anger: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.453) = 6.67
    Final delta: 6.67 × 1 × 1.1 = 7.34
    disgust: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 4.33 × (1 + 0.140) = 4.94
    Final delta: 4.94 × 1 × 1.1 = 5.44

  Emotion updates:
    joy: carry(7.1 × 0.2) + delta(0.00) = 1.43
    sadness: carry(35.0 × 0.2) + delta(14.15) = 21.14
    anger: carry(17.7 × 0.2) + delta(10.48) = 14.02
    fear: carry(8.3 × 0.2) + delta(4.03) = 5.69
    disgust: carry(5.7 × 0.2) + delta(5.44) = 6.57
    trust: carry(3.2 × 0.2) + delta(0.00) = 0.65
    anticipation: carry(2.7 × 0.2) + delta(1.17) = 1.71

=== Chapter 6 ===
Stimulants this chapter: 4

  Stimulant: "Mai Azadi poisons the entire class with needles through their ears as an opening lesson in assassination."
    Event: danger_cue | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 10.50 × (1 + -0.360) = 6.72
    Final delta: 6.72 × 1 × 1 = 6.72
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + 0.087) = 3.91
    Final delta: 3.91 × 1 × 1 = 3.91
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.453) = 2.62
    Final delta: 2.62 × 1 × 1 = 2.62

  Stimulant: "Praew is ordered to kill a bound, begging man and refuses, choosing death over murder."
    Event: moral_cue | Subject: principle | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: principle → ×0.5
    Source mult: authority_caused → ×1
    disgust: base=17 × trig=1 × weight=0.4 → raw=6.80
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 6.80 × (1 + 0.140) = 7.75
    Final delta: 7.75 × 0.5 × 1 = 3.88
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 0.5 × 1 = 3.92
    sadness: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.60 × (1 + 0.720) = 11.35
    Final delta: 11.35 × 0.5 × 1 = 5.68

  Stimulant: "Mai slits the bound man's throat in front of Praew, spraying blood on her face."
    Event: harm | Subject: stranger | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: authority_caused → ×1
    fear: base=15 × trig=1 × weight=0.5 → raw=7.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 7.50 × (1 + -0.360) = 4.80
    Final delta: 4.80 × 0.3 × 1 = 1.44
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 0.3 × 1 = 2.35
    sadness: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.40 × (1 + 0.720) = 7.57
    Final delta: 7.57 × 0.3 × 1 = 2.27

  Stimulant: "Mai fails Praew from Ghost Operations class, meaning she must now pass both remaining classes or face reassignment."
    Event: constraint | Subject: self | Source: ally_caused | Domain: future_security
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=18 × trig=0.85 × weight=0.5 → raw=7.65
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 7.65 × (1 + 0.453) = 11.12
    Final delta: 11.12 × 1 × 1.3 = 14.45
    fear: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.82 × (1 + -0.360) = 2.45
    Final delta: 2.45 × 1 × 1.3 = 3.18
    sadness: base=22 × trig=0.85 × weight=0.2 → raw=3.74
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.74 × (1 + 0.720) = 6.43
    Final delta: 6.43 × 1 × 1.3 = 8.36

  Emotion updates:
    joy: carry(1.4 × 0.2) + delta(0.00) = 0.29
    sadness: carry(21.1 × 0.2) + delta(16.31) = 20.54
    anger: carry(14.0 × 0.2) + delta(23.35) = 26.15
    fear: carry(5.7 × 0.2) + delta(11.34) = 12.48
    disgust: carry(6.6 × 0.2) + delta(3.88) = 5.19
    trust: carry(0.6 × 0.2) + delta(0.00) = 0.13
    anticipation: carry(1.7 × 0.2) + delta(3.91) = 4.25

=== Chapter 7 ===
Stimulants this chapter: 5

  Stimulant: "Junya tells Praew about her parents' suspicious disappearance from the mines, pulling Praew into a dangerous investigation."
    Event: moral_cue | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    disgust: base=17 × trig=0.85 × weight=0.4 → raw=5.78
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 5.78 × (1 + 0.140) = 6.59
    Final delta: 6.59 × 0.8 × 1.3 = 6.85
    anger: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.453) = 6.67
    Final delta: 6.67 × 0.8 × 1.3 = 6.94
    sadness: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.61 × (1 + 0.720) = 9.65
    Final delta: 9.65 × 0.8 × 1.3 = 10.04

  Stimulant: "Praew notices her own parents growing weaker and too tired to fuss over her, realizing the food shortage is taking a toll."
    Event: threat | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    fear: base=15 × trig=0.85 × weight=0.7 → raw=8.92
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.92 × (1 + -0.360) = 5.71
    Final delta: 5.71 × 0.9 × 1 = 5.14
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.453) = 4.45
    Final delta: 4.45 × 0.9 × 1 = 4.00
    anticipation: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.53 × (1 + 0.087) = 1.66
    Final delta: 1.66 × 0.9 × 1 = 1.50

  Stimulant: "Mai Azadi appears at Praew's home uninvited, sitting with her parents while armed with a dagger, terrifying Praew."
    Event: danger_cue | Subject: family | Source: ally_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    fear: base=15 × trig=0.85 × weight=0.7 → raw=8.92
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.92 × (1 + -0.360) = 5.71
    Final delta: 5.71 × 0.9 × 1.3 = 6.68
    anticipation: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.06 × (1 + 0.087) = 3.33
    Final delta: 3.33 × 0.9 × 1.3 = 3.89
    anger: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.53 × (1 + 0.453) = 2.22
    Final delta: 2.22 × 0.9 × 1.3 = 2.60

  Stimulant: "Praew harshly rejects Mai's friendship and calls her a psychopathic murderer, later feeling deep guilt about it."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=17 × trig=0.85 × weight=0.4 → raw=5.78
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 5.78 × (1 + 0.140) = 6.59
    Final delta: 6.59 × 1 × 1.1 = 7.25
    anger: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.453) = 6.67
    Final delta: 6.67 × 1 × 1.1 = 7.34
    sadness: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.61 × (1 + 0.720) = 9.65
    Final delta: 9.65 × 1 × 1.1 = 10.61

  Stimulant: "Mai reveals the bound man was a cannibal who murdered and ate his wife and daughter, shattering Praew's moral certainty."
    Event: surprise_reveal | Subject: principle | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: principle → ×0.5
    Source mult: ally_caused → ×1.3
    surprise: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 9.10 × (1 + -0.143) = 7.80
    Final delta: 7.80 × 0.5 × 1.3 = 5.07
    fear: base=15 × trig=1 × weight=0.15 → raw=2.25
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 2.25 × (1 + -0.360) = 1.44
    Final delta: 1.44 × 0.5 × 1.3 = 0.94
    anticipation: base=18 × trig=1 × weight=0.15 → raw=2.70
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.70 × (1 + 0.087) = 2.93
    Final delta: 2.93 × 0.5 × 1.3 = 1.91

  Emotion updates:
    sadness: carry(20.5 × 0.2) + delta(20.65) = 24.76
    anger: carry(26.2 × 0.2) + delta(20.88) = 26.11
    fear: carry(12.5 × 0.2) + delta(12.76) = 15.26
    disgust: carry(5.2 × 0.2) + delta(14.10) = 15.14
    surprise: carry(0.0 × 0.2) + delta(5.07) = 5.07
    anticipation: carry(4.3 × 0.2) + delta(7.29) = 8.14

=== Chapter 8 ===
Stimulants this chapter: 3

  Stimulant: "Wannii confronts Praew for endangering Junya by sharing her investigation with someone in the Prime's office."
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=22 × trig=1 × weight=0.6 → raw=13.20
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.20 × (1 + 0.720) = 22.70
    Final delta: 22.70 × 1 × 1.3 = 29.52
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.453) = 5.23
    Final delta: 5.23 × 1 × 1.3 = 6.80
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.360) = 1.92
    Final delta: 1.92 × 1 × 1.3 = 2.50

  Stimulant: "Wannii reveals she deliberately failed the Hunter test to stay with Junya, making Praew realize the depth of their bond and her own recklessness."
    Event: surprise_reveal | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    surprise: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 7.73 × (1 + -0.143) = 6.63
    Final delta: 6.63 × 0.8 × 1.3 = 6.89
    fear: base=15 × trig=0.85 × weight=0.15 → raw=1.91
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 1.91 × (1 + -0.360) = 1.22
    Final delta: 1.22 × 0.8 × 1.3 = 1.27
    anticipation: base=18 × trig=0.85 × weight=0.15 → raw=2.29
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.29 × (1 + 0.087) = 2.49
    Final delta: 2.49 × 0.8 × 1.3 = 2.59

  Stimulant: "Godric catches Praew and Wannii arguing about classified matters near a government facility and ominously warns about people going missing."
    Event: threat | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=15 × trig=0.85 × weight=0.7 → raw=8.92
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.92 × (1 + -0.360) = 5.71
    Final delta: 5.71 × 1 × 1 = 5.71
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.453) = 4.45
    Final delta: 4.45 × 1 × 1 = 4.45
    anticipation: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.53 × (1 + 0.087) = 1.66
    Final delta: 1.66 × 1 × 1 = 1.66

  Suppression applied:
  Suppression: sadness(54.3) suppresses joy by -17.71 (60% of sadness delta)
  Suppression: sadness(54.3) suppresses anticipation by -8.85 (30% of sadness delta)
  Suppression: sadness(54.3) suppresses surprise by -5.90 (20% of sadness delta)

  Emotion updates:
    sadness: carry(24.8 × 0.2) + delta(29.52) = 34.47
    anger: carry(26.1 × 0.2) + delta(11.25) = 16.47
    fear: carry(15.3 × 0.2) + delta(9.48) = 12.53
    disgust: carry(15.1 × 0.2) + delta(0.00) = 3.03
    surprise: carry(5.1 × 0.2) + delta(0.99) = 2.00
    anticipation: carry(8.1 × 0.2) + delta(-4.60) = -2.97

=== Chapter 9 ===
Stimulants this chapter: 2

  Stimulant: "Praew apologizes to Mai and they reconcile, forming a genuine friendship with agreed-upon boundaries."
    Event: connection | Subject: friend | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=20 × trig=0.85 × weight=0.5 → raw=8.50
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 8.50 × (1 + -0.100) = 7.65
    Final delta: 7.65 × 0.8 × 1.1 = 6.73
    joy: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 4.59 × (1 + 0.100) = 5.05
    Final delta: 5.05 × 0.8 × 1.1 = 4.44
    anticipation: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.06 × (1 + 0.087) = 3.33
    Final delta: 3.33 × 0.8 × 1.1 = 2.93

  Stimulant: "Praew learns Junya and Wannii are missing after failing to show up to class, realizing they may have acted on their dangerous plan."
    Event: danger_cue | Subject: friend | Source: world_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: world_caused → ×0.7
    fear: base=15 × trig=0.85 × weight=0.7 → raw=8.92
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.92 × (1 + -0.360) = 5.71
    Final delta: 5.71 × 0.8 × 0.7 = 3.20
    anticipation: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.06 × (1 + 0.087) = 3.33
    Final delta: 3.33 × 0.8 × 0.7 = 1.86
    anger: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.53 × (1 + 0.453) = 2.22
    Final delta: 2.22 × 0.8 × 0.7 = 1.25

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(4.44) = 4.44
    sadness: carry(34.5 × 0.2) + delta(0.00) = 6.89
    anger: carry(16.5 × 0.2) + delta(1.25) = 4.54
    fear: carry(12.5 × 0.2) + delta(3.20) = 5.71
    disgust: carry(3.0 × 0.2) + delta(0.00) = 0.61
    surprise: carry(2.0 × 0.2) + delta(0.00) = 0.40
    trust: carry(0.0 × 0.2) + delta(6.73) = 6.73
    anticipation: carry(0.0 × 0.2) + delta(4.79) = 4.79

=== Chapter 10 ===
Stimulants this chapter: 1

  Stimulant: "Praew teases Haldric's grandparents into thinking they are dating, creating a cover story for their secret meetings."
    Event: success | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=0 imm=3 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=18 × trig=0.85 × weight=0.7 → raw=10.71
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 10.71 × (1 + 0.100) = 11.78
    Final delta: 11.78 × 1 × 1.1 = 12.96
    trust: base=20 × trig=0.85 × weight=0.2 → raw=3.40
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 3.40 × (1 + -0.100) = 3.06
    Final delta: 3.06 × 1 × 1.1 = 3.37
    anticipation: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.53 × (1 + 0.087) = 1.66
    Final delta: 1.66 × 1 × 1.1 = 1.83

  Emotion updates:
    joy: carry(4.4 × 0.2) + delta(12.96) = 13.85
    sadness: carry(6.9 × 0.2) + delta(0.00) = 1.38
    anger: carry(4.5 × 0.2) + delta(0.00) = 0.91
    fear: carry(5.7 × 0.2) + delta(0.00) = 1.14
    disgust: carry(0.6 × 0.2) + delta(0.00) = 0.12
    trust: carry(6.7 × 0.2) + delta(3.37) = 4.71
    anticipation: carry(4.8 × 0.2) + delta(1.83) = 2.79

=== Chapter 11 ===
Stimulants this chapter: 0

  Emotion updates:
    joy: carry(13.8 × 0.2) + delta(0.00) = 2.77
    sadness: carry(1.4 × 0.2) + delta(0.00) = 0.28
    anger: carry(0.9 × 0.2) + delta(0.00) = 0.18
    fear: carry(1.1 × 0.2) + delta(0.00) = 0.23
    trust: carry(4.7 × 0.2) + delta(0.00) = 0.94
    anticipation: carry(2.8 × 0.2) + delta(0.00) = 0.56

=== Chapter 12 ===
Stimulants this chapter: 3

  Stimulant: "Praew witnesses the Fourth Floor: enslaved people being whipped, children eating raw Ratrods, and horrific conditions."
    Event: injustice | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    anger: base=18 × trig=1 × weight=0.5 → raw=9.00
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.00 × (1 + 0.453) = 13.08
    Final delta: 13.08 × 0.7 × 1 = 9.16
    disgust: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 5.10 × (1 + 0.140) = 5.81
    Final delta: 5.81 × 0.7 × 1 = 4.07
    sadness: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.40 × (1 + 0.720) = 7.57
    Final delta: 7.57 × 0.7 × 1 = 5.30

  Stimulant: "Praew recognizes her missing classmate Jorpen working as an enforcer-slave in the Fourth Floor identification program."
    Event: surprise_reveal | Subject: friend | Source: authority_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    surprise: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 9.10 × (1 + -0.143) = 7.80
    Final delta: 7.80 × 0.8 × 1 = 6.24
    fear: base=15 × trig=1 × weight=0.15 → raw=2.25
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 2.25 × (1 + -0.360) = 1.44
    Final delta: 1.44 × 0.8 × 1 = 1.15
    anticipation: base=18 × trig=1 × weight=0.15 → raw=2.70
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.70 × (1 + 0.087) = 2.93
    Final delta: 2.93 × 0.8 × 1 = 2.35

  Stimulant: "Note reveals that Junya's parents were likely murdered for discovering the Fourth Floor, and that Junya and Wannii may also be dead."
    Event: loss | Subject: friend | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    sadness: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 15.40 × (1 + 0.720) = 26.49
    Final delta: 26.49 × 0.8 × 1 = 21.19
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.360) = 1.92
    Final delta: 1.92 × 0.8 × 1 = 1.54
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.453) = 2.62
    Final delta: 2.62 × 0.8 × 1 = 2.09

  Emotion updates:
    joy: carry(2.8 × 0.2) + delta(0.00) = 0.55
    sadness: carry(0.3 × 0.2) + delta(26.49) = 26.54
    anger: carry(0.2 × 0.2) + delta(11.25) = 11.29
    fear: carry(0.2 × 0.2) + delta(2.69) = 2.73
    disgust: carry(0.0 × 0.2) + delta(4.07) = 4.07
    surprise: carry(0.0 × 0.2) + delta(6.24) = 6.24
    trust: carry(0.9 × 0.2) + delta(0.00) = 0.19
    anticipation: carry(0.6 × 0.2) + delta(2.35) = 2.46

=== Chapter 13 ===
Stimulants this chapter: 5

  Stimulant: "Haldric grabs Praew's wrist with inhuman strength, hurting her and revealing he has been hiding his acclimation from her."
    Event: betrayal | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=22 × trig=1 × weight=0.4 → raw=8.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.80 × (1 + 0.720) = 15.14
    Final delta: 15.14 × 1 × 1.3 = 19.68
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 1 × 1.3 = 10.20
    trust (COLLAPSE): base=20 × trig=1 × weight=0.3 → raw=6.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 6.00 × (1 + -0.100) = 5.40
    Final delta: 5.40 × 1 × 1.3 = 7.02
    → Trust COLLAPSED by -7.02

  Stimulant: "Haldric cruelly tells Praew she is not as smart as she pretends to be and that she belongs in Special Forces, not Administration."
    Event: insult | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=18 × trig=1 × weight=0.6 → raw=10.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 10.80 × (1 + 0.453) = 15.70
    Final delta: 15.70 × 1 × 1.3 = 20.40
    disgust: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 3.40 × (1 + 0.140) = 3.88
    Final delta: 3.88 × 1 × 1.3 = 5.04
    sadness: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.40 × (1 + 0.720) = 7.57
    Final delta: 7.57 × 1 × 1.3 = 9.84

  Stimulant: "Mai reveals she was born on the Fourth Floor, her family was destroyed, and she does not age, deepening the bond and shocking Praew."
    Event: surprise_reveal | Subject: friend | Source: ally_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    surprise: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 9.10 × (1 + -0.143) = 7.80
    Final delta: 7.80 × 0.8 × 1.3 = 8.11
    fear: base=15 × trig=1 × weight=0.15 → raw=2.25
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 2.25 × (1 + -0.360) = 1.44
    Final delta: 1.44 × 0.8 × 1.3 = 1.50
    anticipation: base=18 × trig=1 × weight=0.15 → raw=2.70
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.70 × (1 + 0.087) = 2.93
    Final delta: 2.93 × 0.8 × 1.3 = 3.05

  Stimulant: "Godric arrives and threatens Mai; Mai stabs his foot and tells Praew to run, forcing Praew to flee in fear for both their lives."
    Event: danger_cue | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 10.50 × (1 + -0.360) = 6.72
    Final delta: 6.72 × 1 × 1 = 6.72
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + 0.087) = 3.91
    Final delta: 3.91 × 1 × 1 = 3.91
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.453) = 2.62
    Final delta: 2.62 × 1 × 1 = 2.62

  Stimulant: "A mysterious attacker intercepts Praew just before she reaches Haldric's home, and she is captured."
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=15 × trig=1 × weight=0.5 → raw=7.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 7.50 × (1 + -0.360) = 4.80
    Final delta: 4.80 × 1 × 0.8 = 3.84
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 1 × 0.8 = 6.28
    sadness: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.40 × (1 + 0.720) = 7.57
    Final delta: 7.57 × 1 × 0.8 = 6.05

  Suppression applied:
  Suppression: anger(50.8) suppresses joy by -19.75 (50% of anger delta)
  Suppression: anger(50.8) suppresses trust by -11.85 (30% of anger delta)
  Suppression: anger(50.8) suppresses fear by -5.93 (15% of anger delta)
  Suppression: sadness(62.1) suppresses joy by -21.34 (60% of sadness delta)
  Suppression: sadness(62.1) suppresses anticipation by -10.67 (30% of sadness delta)
  Suppression: sadness(62.1) suppresses surprise by -7.11 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.6 × 0.2) + delta(-41.09) = -40.98
    sadness: carry(26.5 × 0.2) + delta(35.57) = 40.88
    anger: carry(11.3 × 0.2) + delta(39.50) = 41.76
    fear: carry(2.7 × 0.2) + delta(6.13) = 6.68
    disgust: carry(4.1 × 0.2) + delta(5.04) = 5.85
    surprise: carry(6.2 × 0.2) + delta(0.99) = 2.24
    anticipation: carry(2.5 × 0.2) + delta(-3.71) = -3.22

=== Chapter 14 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 15 ===
Stimulants this chapter: 5

  Stimulant: "Praew wakes up imprisoned in a narrow, abrasive cell with no way out, struggling to breathe."
    Event: constraint | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=18 × trig=1 × weight=0.5 → raw=9.00
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.00 × (1 + 0.453) = 13.08
    Final delta: 13.08 × 1 × 0.8 = 10.46
    fear: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.50 × (1 + -0.360) = 2.88
    Final delta: 2.88 × 1 × 0.8 = 2.30
    sadness: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.40 × (1 + 0.720) = 7.57
    Final delta: 7.57 × 1 × 0.8 = 6.05

  Stimulant: "Renwick reveals himself as her captor and jailer, having feigned being a fellow prisoner to manipulate her emotions."
    Event: betrayal | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    sadness: base=22 × trig=1 × weight=0.4 → raw=8.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.80 × (1 + 0.720) = 15.14
    Final delta: 15.14 × 1 × 0.8 = 12.11
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 1 × 0.8 = 6.28
    trust (COLLAPSE): base=20 × trig=1 × weight=0.3 → raw=6.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 6.00 × (1 + -0.100) = 5.40
    Final delta: 5.40 × 1 × 0.8 = 4.32
    → Trust COLLAPSED by -4.32

  Stimulant: "Praew discovers Wannii's burnt, bloated corpse in her shared cell with Junya."
    Event: loss | Subject: friend | Source: enemy_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    sadness: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 15.40 × (1 + 0.720) = 26.49
    Final delta: 26.49 × 0.8 × 0.8 = 16.95
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.360) = 1.92
    Final delta: 1.92 × 0.8 × 0.8 = 1.23
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.453) = 2.62
    Final delta: 2.62 × 0.8 × 0.8 = 1.67

  Stimulant: "Junya is dragged away screaming by the guard while Praew fails to hold onto her, losing her grip on Junya's bracelet."
    Event: separation | Subject: friend | Source: enemy_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    sadness: base=22 × trig=1 × weight=0.6 → raw=13.20
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.20 × (1 + 0.720) = 22.70
    Final delta: 22.70 × 0.8 × 0.8 = 14.53
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.360) = 1.92
    Final delta: 1.92 × 0.8 × 0.8 = 1.23
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.453) = 5.23
    Final delta: 5.23 × 0.8 × 0.8 = 3.35

  Stimulant: "Praew accepts she cannot save her friends and puts on Junya's bracelet as a reminder of her failure to protect them."
    Event: failure | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=22 × trig=1 × weight=0.5 → raw=11.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.00 × (1 + 0.720) = 18.92
    Final delta: 18.92 × 1 × 1.1 = 20.81
    fear: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.50 × (1 + -0.360) = 2.88
    Final delta: 2.88 × 1 × 1.1 = 3.17
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.453) = 5.23
    Final delta: 5.23 × 1 × 1.1 = 5.76

  Suppression applied:
  Suppression: anger(69.3) suppresses joy by -13.76 (50% of anger delta)
  Suppression: anger(69.3) suppresses trust by -8.26 (30% of anger delta)
  Suppression: anger(69.3) suppresses fear by -4.13 (15% of anger delta)
  Suppression: sadness(111.3) suppresses joy by -42.27 (60% of sadness delta)
  Suppression: sadness(111.3) suppresses anticipation by -21.14 (30% of sadness delta)
  Suppression: sadness(111.3) suppresses surprise by -14.09 (20% of sadness delta)

  Emotion updates:
    sadness: carry(40.9 × 0.2) + delta(70.46) = 78.63
    *** sadness in RED ZONE: VU=78.6 (track capped at 75) ***
    anger: carry(41.8 × 0.2) + delta(27.52) = 35.87
    fear: carry(6.7 × 0.2) + delta(3.80) = 5.14
    disgust: carry(5.9 × 0.2) + delta(0.00) = 1.17
    surprise: carry(2.2 × 0.2) + delta(-14.09) = -13.64

=== Chapter 16 ===
Stimulants this chapter: 6

  Stimulant: "Praew sees Junya dead on a stone slab with a Sifaralith embedded in her skull."
    Event: loss | Subject: friend | Source: enemy_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    sadness: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 15.40 × (1 + 0.720) = 26.49
    Final delta: 26.49 × 0.8 × 0.8 = 16.95
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.360) = 1.92
    Final delta: 1.92 × 0.8 × 0.8 = 1.23
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.453) = 2.62
    Final delta: 2.62 × 0.8 × 0.8 = 1.67

  Stimulant: "The scientist grabs Praew's hair and invades her personal space while she is strapped down, making her feel violated and powerless."
    Event: humiliation | Subject: self | Source: enemy_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    sadness: base=22 × trig=1 × weight=0.4 → raw=8.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.80 × (1 + 0.720) = 15.14
    Final delta: 15.14 × 1 × 0.8 = 12.11
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 1 × 0.8 = 6.28
    disgust: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 5.10 × (1 + 0.140) = 5.81
    Final delta: 5.81 × 1 × 0.8 = 4.65

  Stimulant: "The Prime Archon kills the scientist but then reveals he will not release Praew and instead begins the embedding process."
    Event: betrayal | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    sadness: base=22 × trig=1 × weight=0.4 → raw=8.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.80 × (1 + 0.720) = 15.14
    Final delta: 15.14 × 1 × 1 = 15.14
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 1 × 1 = 7.85
    trust (COLLAPSE): base=20 × trig=1 × weight=0.3 → raw=6.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 6.00 × (1 + -0.100) = 5.40
    Final delta: 5.40 × 1 × 1 = 5.40
    → Trust COLLAPSED by -5.40

  Stimulant: "The Prime slams a Mythical BoltStone into Praew's chest, causing agonizing pain as electricity tears through her body."
    Event: harm | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=15 × trig=1 × weight=0.5 → raw=7.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 7.50 × (1 + -0.360) = 4.80
    Final delta: 4.80 × 1 × 1 = 4.80
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 1 × 1 = 7.85
    sadness: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.40 × (1 + 0.720) = 7.57
    Final delta: 7.57 × 1 × 1 = 7.57

  Stimulant: "Praew realizes the Hunter Test was actually a screening to find people compatible with rare stones, reframing her entire life."
    Event: surprise_reveal | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    surprise: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 9.10 × (1 + -0.143) = 7.80
    Final delta: 7.80 × 1 × 1 = 7.80
    fear: base=15 × trig=1 × weight=0.15 → raw=2.25
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 2.25 × (1 + -0.360) = 1.44
    Final delta: 1.44 × 1 × 1 = 1.44
    anticipation: base=18 × trig=1 × weight=0.15 → raw=2.70
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.70 × (1 + 0.087) = 2.93
    Final delta: 2.93 × 1 × 1 = 2.93

  Stimulant: "Praew survives the Mythical BoltStone embedding by figuring out the trigger is sound and silently enduring the agony."
    Event: success | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 12.60 × (1 + 0.100) = 13.86
    Final delta: 13.86 × 1 × 1.1 = 15.25
    trust: base=20 × trig=1 × weight=0.2 → raw=4.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 4.00 × (1 + -0.100) = 3.60
    Final delta: 3.60 × 1 × 1.1 = 3.96
    anticipation: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.80 × (1 + 0.087) = 1.96
    Final delta: 1.96 × 1 × 1.1 = 2.15

  Suppression applied:
  Suppression: anger(59.5) suppresses joy by -11.82 (50% of anger delta)
  Suppression: anger(59.5) suppresses trust by -7.09 (30% of anger delta)
  Suppression: anger(59.5) suppresses fear by -3.55 (15% of anger delta)
  Suppression: sadness(126.8) suppresses joy by -31.06 (60% of sadness delta)
  Suppression: sadness(126.8) suppresses anticipation by -15.53 (30% of sadness delta)
  Suppression: sadness(126.8) suppresses surprise by -10.35 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(-27.64) = -27.64
    sadness: carry(75.0 × 0.2) + delta(51.77) = 66.77
    anger: carry(35.9 × 0.2) + delta(23.65) = 30.82
    fear: carry(5.1 × 0.2) + delta(3.92) = 4.95
    disgust: carry(1.2 × 0.2) + delta(4.65) = 4.89
    surprise: carry(0.0 × 0.2) + delta(-2.56) = -2.56
    trust: carry(0.0 × 0.2) + delta(-8.53) = -8.53
    anticipation: carry(0.0 × 0.2) + delta(-10.44) = -10.44

=== Chapter 17 ===
Stimulants this chapter: 2

  Stimulant: "The Prime begins the BoltStone recorrection program on Praew, using pulses to make her mind impressionable against her will."
    Event: constraint | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=18 × trig=1 × weight=0.5 → raw=9.00
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.00 × (1 + 0.453) = 13.08
    Final delta: 13.08 × 1 × 1 = 13.08
    fear: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.50 × (1 + -0.360) = 2.88
    Final delta: 2.88 × 1 × 1 = 2.88
    sadness: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.40 × (1 + 0.720) = 7.57
    Final delta: 7.57 × 1 × 1 = 7.57

  Stimulant: "Praew experiences a vision of her parents telling her to leave the city and go on her adventure, giving her emotional comfort."
    Event: connection | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    trust: base=20 × trig=0.85 × weight=0.5 → raw=8.50
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 8.50 × (1 + -0.100) = 7.65
    Final delta: 7.65 × 0.9 × 1.3 = 8.95
    joy: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 4.59 × (1 + 0.100) = 5.05
    Final delta: 5.05 × 0.9 × 1.3 = 5.91
    anticipation: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.06 × (1 + 0.087) = 3.33
    Final delta: 3.33 × 0.9 × 1.3 = 3.89

  Suppression applied:
  Suppression: sadness(74.3) suppresses joy by -4.54 (60% of sadness delta)
  Suppression: sadness(74.3) suppresses anticipation by -2.27 (30% of sadness delta)
  Suppression: sadness(74.3) suppresses surprise by -1.51 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(1.37) = 1.37
    sadness: carry(66.8 × 0.2) + delta(7.57) = 20.92
    anger: carry(30.8 × 0.2) + delta(13.08) = 19.24
    fear: carry(4.9 × 0.2) + delta(2.88) = 3.87
    disgust: carry(4.9 × 0.2) + delta(0.00) = 0.98
    trust: carry(0.0 × 0.2) + delta(8.95) = 8.95
    anticipation: carry(0.0 × 0.2) + delta(1.62) = 1.62

=== Chapter 18 ===
Stimulants this chapter: 5

  Stimulant: "Praew wakes to find Godric has rescued her from The Prime and is taking her to the surface to escape."
    Event: reward | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    joy: base=18 × trig=1 × weight=0.6 → raw=10.80
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 10.80 × (1 + 0.100) = 11.88
    Final delta: 11.88 × 1 × 1.3 = 15.44
    trust: base=20 × trig=1 × weight=0.3 → raw=6.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 6.00 × (1 + -0.100) = 5.40
    Final delta: 5.40 × 1 × 1.3 = 7.02
    anticipation: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.80 × (1 + 0.087) = 1.96
    Final delta: 1.96 × 1 × 1.3 = 2.54

  Stimulant: "Renwick and six Embedded warriors block the final gate to the surface, threatening to end her escape."
    Event: obstacle | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=18 × trig=1 × weight=0.4 → raw=7.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 7.20 × (1 + 0.453) = 10.46
    Final delta: 10.46 × 1 × 0.8 = 8.37
    anticipation: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 5.40 × (1 + 0.087) = 5.87
    Final delta: 5.87 × 1 × 0.8 = 4.69
    fear: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.50 × (1 + -0.360) = 2.88
    Final delta: 2.88 × 1 × 0.8 = 2.30

  Stimulant: "Godric sacrifices himself to hold back the warriors so Praew can escape, and she realizes she may never see her hero again."
    Event: separation | Subject: friend | Source: ally_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=22 × trig=1 × weight=0.6 → raw=13.20
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.20 × (1 + 0.720) = 22.70
    Final delta: 22.70 × 0.8 × 1.3 = 23.61
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.360) = 1.92
    Final delta: 1.92 × 0.8 × 1.3 = 2.00
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.453) = 5.23
    Final delta: 5.23 × 0.8 × 1.3 = 5.44

  Stimulant: "Praew runs across the deadly surface alone, triggering dangerous stones and suffering electricity from her own BoltStone, nearly dying."
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 10.50 × (1 + -0.360) = 6.72
    Final delta: 6.72 × 1 × 0.7 = 4.70
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + 0.087) = 3.91
    Final delta: 3.91 × 1 × 0.7 = 2.74
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.453) = 2.62
    Final delta: 2.62 × 1 × 0.7 = 1.83

  Stimulant: "Praew accepts her likely death on the surface with a smile, finding peace in dying free rather than as a prisoner."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=17 × trig=1 × weight=0.4 → raw=6.80
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 6.80 × (1 + 0.140) = 7.75
    Final delta: 7.75 × 1 × 1.1 = 8.53
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.453) = 7.85
    Final delta: 7.85 × 1 × 1.1 = 8.63
    sadness: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.60 × (1 + 0.720) = 11.35
    Final delta: 11.35 × 1 × 1.1 = 12.49

  Suppression applied:
  Suppression: sadness(57.0) suppresses joy by -21.66 (60% of sadness delta)
  Suppression: sadness(57.0) suppresses anticipation by -10.83 (30% of sadness delta)
  Suppression: sadness(57.0) suppresses surprise by -7.22 (20% of sadness delta)

  Emotion updates:
    joy: carry(1.4 × 0.2) + delta(-6.22) = -5.94
    sadness: carry(20.9 × 0.2) + delta(36.10) = 40.28
    anger: carry(19.2 × 0.2) + delta(24.28) = 28.13
    fear: carry(3.9 × 0.2) + delta(9.00) = 9.78
    disgust: carry(1.0 × 0.2) + delta(8.53) = 8.72
    trust: carry(9.0 × 0.2) + delta(7.02) = 8.81
    anticipation: carry(1.6 × 0.2) + delta(-0.85) = -0.53
```

### Profile Reasoning

- **emotionalBaseline.joy**: Praew laughs easily, teases Haldric, finds humor in adversity (Ch7 cafeteria banter, Ch10 Grayparents scene). She lights up rooms and her laughter "cut through the dull murmur of the cafeteria." High sensitivity to joy.
- **emotionalBaseline.sadness**: Cries multiple times: tears during the Hunter test stone exposure (Ch1), tears when hearing about Junya's parents (Ch6), tears when seeing the Fourth Floor child (Ch12), tears in the cell with Renwick (Ch15). Highly reactive to loss and suffering.
- **emotionalBaseline.anger**: Snaps at Wannii, curses in front of parents when seeing Mai (Ch7), confronts Mai aggressively with a dagger (Ch7), tells Godric off by calling him "Stone Face" (Ch4). Quick to anger but it burns hot and short.
- **emotionalBaseline.fear**: Moderate fear sensitivity. She feels fear (cell scene Ch15, embedding Ch16) but actively fights through it. When cornered by Mai she chooses defiance over cowering: "Then get it over with" (Ch6). Fear is present but doesn't paralyze her.
- **emotionalBaseline.disgust**: Strong disgust reactions to moral violations: seeing the Fourth Floor slavery (Ch12), Renwick's betrayal (Ch15), the scientist's behavior (Ch16). She physically nearly collapses seeing the child eat a Ratrod.
- **emotionalBaseline.surprise**: Moderate surprise sensitivity. Gets caught off guard (Mai being her instructor Ch6, Renwick's betrayal Ch15, The Prime saving then embedding her Ch16) but recovers quickly and adapts.
- **emotionalBaseline.trust**: High trust sensitivity - she trusts deeply and is wounded by betrayal. Trusts Haldric completely, extends trust to Mai despite initial conflict, trusts Note. When Asher betrayed them she was devastated (Ch1-2).
- **emotionalBaseline.anticipation**: Moderately high. She plans ahead (creating an excuse to meet Haldric Ch10), schemes to get Haldric to help Junya (Ch7), and is always looking toward the next step. But also acts impulsively.
- **temperament.patience**: Very low patience. Blurts out "Stone Face" without meaning to (Ch4), speaks before thinking repeatedly, interrupts, rushes into situations. "I just speak my mind and act on instinct. Then worry about the consequences later" (Ch6).
- **temperament.impulsiveness**: Highly impulsive. Grabs Mai's dagger and runs (Ch7), confronts Wannii mid-hallway (Ch8), agrees to meet a rebel (Ch11), runs toward Junya's cell (Ch12). Acts first, thinks later consistently.
- **temperament.confrontationalTendency**: Will confront anyone regardless of power: calls Godric "Stone Face" (Ch4), tells Mai to shut up while holding her own dagger (Ch7), confronts Wannii (Ch8), spits in the scientist's face (Ch16). Raises chin against threats.
- **temperament.agreeableness**: Moderate-high. She hugs Junya without hesitation (Ch6), comforts Bpen (Ch4), shows compassion to everyone. But she can be sharp and combative when pushed, lowering agreeableness somewhat.
- **temperament.emotionalContainment**: Very low containment. Cries openly, laughs loudly, curses in front of parents, blurts thoughts aloud. "I just speak my mind and act on instinct" (Ch6). Her emotions are always on display.
- **temperament.riskAppetite**: High risk appetite. Visits the Fourth Floor with a rebel (Ch12), agrees to meet Note (Ch11), confronts an assassin (Ch7), chooses death over killing an innocent (Ch6). Repeatedly chooses danger over safety.
- **temperament.curiosity**: Very high curiosity. Constantly investigates: the food shortage, Junya's parents, the Fourth Floor. "Could you please stop being so nosy?" Haldric begs (Ch7). Drives the entire investigation plotline.
- **temperament.prideSensitivity**: Moderate. She hates being seen as weak ("I will not use my height or gender as an excuse" Ch1), resents being considered clumsy. But she doesn't let pride prevent apologies (apologizes to Mai Ch9).
- **temperament.shameSensitivity**: Moderate-low. She embarrasses herself regularly (calling Godric Stone Face, falling during training Ch5) but recovers quickly: "Let them laugh. It'll be that much more satisfying when I'm the first to pass" (Ch5).
- **temperament.empathyBaseline**: Maximum empathy. Hugs Junya instinctively (Ch6), comforts Bpen (Ch4), comforts Renwick despite his cruelty (Ch15), refuses to kill an innocent (Ch6). "If I were in your shoes, I'd need one. So I gave you one" (Ch6). Empathy is her defining trait.
- **temperament.dominanceVsDeference**: Slightly dominant. She leads investigations, manipulates Haldric into helping (Ch7), confronts authority figures. But she defers to expertise (follows Mai's training, follows Godric's orders on the surface Ch18).
- **temperament.adaptabilityVsRigidity**: Highly adaptable. Pivots from hating Mai to befriending her (Ch7-9), adjusts her worldview as she learns truth (Ch12), survives the embedding by figuring out the trigger mechanism (Ch16). Learns silent movement despite being naturally clumsy.
- **moralStructure.primaryDriver**: Protection of the innocent is her core driver. She refuses to kill the bound man (Ch6), investigates for Junya's sake, feels guilt for failing her friends. "I'd rather die than kill someone" (Ch7). Her moral compass points toward shielding the vulnerable.
- **moralStructure.moralRigidity**: Moderately rigid. She has firm lines (won't kill innocents) but she evolves: initially condemns Mai as a psychopath, then apologizes and befriends her. She's principled but capable of reassessing when presented with new evidence.
- **moralStructure.guiltSensitivity**: High guilt. Feels guilty about failing Junya and Wannii (Ch12, Ch15), guilty about judging Mai unfairly (Ch7), guilty about not protecting her friends. "I failed to protect Junya when she needed me most" (Ch15). Guilt is a persistent driver.
- **moralStructure.justificationTendency**: Low justification tendency. She doesn't rationalize her own failings. When she's wrong about Mai, she admits it. When Haldric calls her out, she "agreed with him" internally (Ch13). She faces her mistakes head-on rather than excusing them.


## Haldric

### Emotion Values Per Chapter

```
Ch |    joy |  sadne |  anger |   fear |  disgu |  surpr |  trust |  antic
--------------------------------------------------------------------------
 0 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 1 |      3 |     18 |     28 |      0 |      6 |      0 |      0 |      2
 2 |      0 |     32 |     45 |      0 |      7 |      0 |      0 |      0
 3 |      0 |      6 |      9 |      0 |      1 |      0 |      0 |      0
 4 |      0 |      6 |      9 |      0 |      1 |      0 |      0 |      0
 5 |      0 |      6 |      9 |      0 |      1 |      0 |      0 |      0
 6 |      0 |      6 |      9 |      0 |      1 |      0 |      0 |      0
 7 |      0 |     12 |     23 |      0 |     12 |      0 |      0 |      0
 8 |      0 |      2 |      8 |      4 |      2 |      7 |      0 |      4
 9 |      2 |     20 |     12 |      5 |      0 |      3 |      4 |      3
10 |     17 |      4 |     22 |     11 |      0 |      1 |      9 |     13
11 |     19 |     30 |     33 |      1 |     18 |      7 |     11 |     13
12 |      0 |     17 |     40 |      0 |     16 |      1 |      0 |      7
13 |      0 |     27 |     31 |      6 |      9 |      6 |      0 |      6
14 |      7 |      5 |     14 |     11 |      2 |      5 |      5 |     10
15 |      1 |     23 |     22 |      8 |      9 |      5 |      1 |      5
16 |      0 |      5 |      4 |      4 |      2 |     11 |      0 |      5
17 |      0 |     41 |     34 |      9 |      9 |      2 |      0 |      1
18 |      0 |     27 |     23 |      5 |      2 |      0 |      0 |      0
```

### Calculation Breakdown

```

=== Chapter 0 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 1 ===
Stimulants this chapter: 3

  Stimulant: "Haldric performs the triangle hand gesture with Praew and Asher, reaffirming their unbreakable bond before the test."
    Event: connection | Subject: friend | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=18 × trig=0.85 × weight=0.5 → raw=7.65
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 7.65 × (1 + -0.160) = 6.43
    Final delta: 6.43 × 0.8 × 1.1 = 5.65
    joy: base=12 × trig=0.85 × weight=0.3 → raw=3.06
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 3.06 × (1 + -0.013) = 3.02
    Final delta: 3.02 × 0.8 × 1.1 = 2.66
    anticipation: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.89 × (1 + -0.027) = 2.81
    Final delta: 2.81 × 0.8 × 1.1 = 2.48

  Stimulant: "Asher hesitates and then abandons Haldric dangling over a pit during the practical test, choosing to take both stones."
    Event: betrayal | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=15 × trig=1 × weight=0.4 → raw=6.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.00 × (1 + 0.633) = 9.80
    Final delta: 9.80 × 1 × 1.3 = 12.74
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 1 × 1.3 = 12.20
    trust (COLLAPSE): base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 5.40 × (1 + -0.160) = 4.54
    Final delta: 4.54 × 1 × 1.3 = 5.90
    → Trust COLLAPSED by -5.90

  Stimulant: "Haldric screams that it's not fair as the Hunter dismisses his protest, leaving him shaking with barely contained rage."
    Event: injustice | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 11.50 × (1 + 0.360) = 15.64
    Final delta: 15.64 × 1 × 1 = 15.64
    disgust: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 5.40 × (1 + 0.060) = 5.72
    Final delta: 5.72 × 1 × 1 = 5.72
    sadness: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.00 × (1 + 0.633) = 4.90
    Final delta: 4.90 × 1 × 1 = 4.90

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(2.66) = 2.66
    sadness: carry(0.0 × 0.2) + delta(17.64) = 17.64
    anger: carry(0.0 × 0.2) + delta(27.84) = 27.84
    disgust: carry(0.0 × 0.2) + delta(5.72) = 5.72
    trust: carry(0.0 × 0.2) + delta(-0.24) = -0.24
    anticipation: carry(0.0 × 0.2) + delta(2.48) = 2.48

=== Chapter 2 ===
Stimulants this chapter: 3

  Stimulant: "Haldric is assigned to government administration in the Prime Archon's office, not a poor job but not the Hunter role he wanted."
    Event: constraint | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 11.50 × (1 + 0.360) = 15.64
    Final delta: 15.64 × 1 × 1 = 15.64
    fear: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.60 × (1 + -0.380) = 2.23
    Final delta: 2.23 × 1 × 1 = 2.23
    sadness: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.00 × (1 + 0.633) = 4.90
    Final delta: 4.90 × 1 × 1 = 4.90

  Stimulant: "Asher is named Beast Hunter, the most prestigious role, while Haldric is left with a desk job, intensifying his fury."
    Event: injustice | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 11.50 × (1 + 0.360) = 15.64
    Final delta: 15.64 × 1 × 1 = 15.64
    disgust: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 5.40 × (1 + 0.060) = 5.72
    Final delta: 5.72 × 1 × 1 = 5.72
    sadness: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.00 × (1 + 0.633) = 4.90
    Final delta: 4.90 × 1 × 1 = 4.90

  Stimulant: "Asher walks away without saying goodbye or apologizing, completing his betrayal of Haldric and Praew."
    Event: rejection | Subject: self | Source: ally_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=15 × trig=1 × weight=0.6 → raw=9.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.00 × (1 + 0.633) = 14.70
    Final delta: 14.70 × 1 × 1.3 = 19.11
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.360) = 6.26
    Final delta: 6.26 × 1 × 1.3 = 8.13
    fear: base=12 × trig=1 × weight=0.2 → raw=2.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 2.40 × (1 + -0.380) = 1.49
    Final delta: 1.49 × 1 × 1.3 = 1.93

  Suppression applied:
  Suppression: anger(67.3) suppresses joy by -19.71 (50% of anger delta)
  Suppression: anger(67.3) suppresses trust by -11.82 (30% of anger delta)
  Suppression: anger(67.3) suppresses fear by -5.91 (15% of anger delta)

  Emotion updates:
    joy: carry(2.7 × 0.2) + delta(-19.71) = -19.18
    sadness: carry(17.6 × 0.2) + delta(28.91) = 32.44
    anger: carry(27.8 × 0.2) + delta(39.41) = 44.98
    fear: carry(0.0 × 0.2) + delta(-1.75) = -1.75
    disgust: carry(5.7 × 0.2) + delta(5.72) = 6.87
    anticipation: carry(2.5 × 0.2) + delta(0.00) = 0.50

=== Chapter 3 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(32.4 × 0.2) + delta(0.00) = 6.49
    anger: carry(45.0 × 0.2) + delta(0.00) = 9.00
    disgust: carry(6.9 × 0.2) + delta(0.00) = 1.37

=== Chapter 4 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 5 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 6 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 7 ===
Stimulants this chapter: 2

  Stimulant: "Haldric sees how small his food rations are compared to Praew's, a visible sign of the city's inequitable food distribution."
    Event: injustice | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 9.78 × (1 + 0.360) = 13.29
    Final delta: 13.29 × 1 × 1 = 13.29
    disgust: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 4.59 × (1 + 0.060) = 4.87
    Final delta: 4.87 × 1 × 1 = 4.87
    sadness: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.55 × (1 + 0.633) = 4.17
    Final delta: 4.17 × 1 × 1 = 4.17

  Stimulant: "Praew asks Haldric to help investigate the suspicious disappearance of Junya's parents, pulling him into a risky mission."
    Event: moral_cue | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    disgust: base=18 × trig=0.85 × weight=0.4 → raw=6.12
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 6.12 × (1 + 0.060) = 6.49
    Final delta: 6.49 × 0.8 × 1.3 = 6.75
    anger: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.87 × (1 + 0.360) = 7.98
    Final delta: 7.98 × 0.8 × 1.3 = 8.30
    sadness: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.82 × (1 + 0.633) = 6.25
    Final delta: 6.25 × 0.8 × 1.3 = 6.50

  Emotion updates:
    sadness: carry(6.5 × 0.2) + delta(10.66) = 11.96
    anger: carry(9.0 × 0.2) + delta(21.59) = 23.39
    disgust: carry(1.4 × 0.2) + delta(11.61) = 11.89

=== Chapter 8 ===
Stimulants this chapter: 2

  Stimulant: "Haldric discovers his Grayparents have been secretly skipping meals to save food for him, leaving them gaunt and weak."
    Event: surprise_reveal | Subject: family | Source: ally_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    surprise: base=10 × trig=1 × weight=0.7 → raw=7.00
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 7.00 × (1 + -0.170) = 5.81
    Final delta: 5.81 × 0.9 × 1.3 = 6.80
    fear: base=12 × trig=1 × weight=0.15 → raw=1.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.80 × (1 + -0.380) = 1.12
    Final delta: 1.12 × 0.9 × 1.3 = 1.31
    anticipation: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.55 × (1 + -0.027) = 2.48
    Final delta: 2.48 × 0.9 × 1.3 = 2.90

  Stimulant: "Haldric tells his Grayparents he cannot lose them too after already losing his parents, feeling desperate fear for their health."
    Event: threat | Subject: family | Source: world_caused | Domain: attachment
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: world_caused → ×0.7
    fear: base=12 × trig=0.85 × weight=0.7 → raw=7.14
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 7.14 × (1 + -0.380) = 4.43
    Final delta: 4.43 × 0.9 × 0.7 = 2.79
    anger: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.91 × (1 + 0.360) = 5.32
    Final delta: 5.32 × 0.9 × 0.7 = 3.35
    anticipation: base=17 × trig=0.85 × weight=0.1 → raw=1.45
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.45 × (1 + -0.027) = 1.41
    Final delta: 1.41 × 0.9 × 0.7 = 0.89

  Emotion updates:
    sadness: carry(12.0 × 0.2) + delta(0.00) = 2.39
    anger: carry(23.4 × 0.2) + delta(3.35) = 8.03
    fear: carry(0.0 × 0.2) + delta(4.09) = 4.09
    disgust: carry(11.9 × 0.2) + delta(0.00) = 2.38
    surprise: carry(0.0 × 0.2) + delta(6.80) = 6.80
    anticipation: carry(0.0 × 0.2) + delta(3.79) = 3.79

=== Chapter 9 ===
Stimulants this chapter: 4

  Stimulant: "Haldric overhears Godric furiously confronting The Prime about something involving 'them,' sparking his suspicion."
    Event: surprise_reveal | Subject: authority | Source: world_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=1 → total=5 → Medium (×0.6)
    Subject mult: authority → ×0.6
    Source mult: world_caused → ×0.7
    surprise: base=10 × trig=0.6 × weight=0.7 → raw=4.20
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 4.20 × (1 + -0.170) = 3.49
    Final delta: 3.49 × 0.6 × 0.7 = 1.46
    fear: base=12 × trig=0.6 × weight=0.15 → raw=1.08
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.08 × (1 + -0.380) = 0.67
    Final delta: 0.67 × 0.6 × 0.7 = 0.28
    anticipation: base=17 × trig=0.6 × weight=0.15 → raw=1.53
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.53 × (1 + -0.027) = 1.49
    Final delta: 1.49 × 0.6 × 0.7 = 0.63

  Stimulant: "Haldric accidentally asks The Prime if he is okay, revealing he overheard the argument and compromising his position."
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=0.85 × weight=0.5 → raw=6.38
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.38 × (1 + 0.633) = 10.41
    Final delta: 10.41 × 1 × 1.1 = 11.45
    fear: base=12 × trig=0.85 × weight=0.3 → raw=3.06
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.06 × (1 + -0.380) = 1.90
    Final delta: 1.90 × 1 × 1.1 = 2.09
    anger: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.91 × (1 + 0.360) = 5.32
    Final delta: 5.32 × 1 × 1.1 = 5.85

  Stimulant: "The Prime apologizes for Asher's betrayal during the test and shows unexpected vulnerability, confusing Haldric's view of him."
    Event: connection | Subject: authority | Source: authority_caused | Domain: belonging
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: authority → ×0.6
    Source mult: authority_caused → ×1
    trust: base=18 × trig=0.85 × weight=0.5 → raw=7.65
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 7.65 × (1 + -0.160) = 6.43
    Final delta: 6.43 × 0.6 × 1 = 3.86
    joy: base=12 × trig=0.85 × weight=0.3 → raw=3.06
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 3.06 × (1 + -0.013) = 3.02
    Final delta: 3.02 × 0.6 × 1 = 1.81
    anticipation: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.89 × (1 + -0.027) = 2.81
    Final delta: 2.81 × 0.6 × 1 = 1.69

  Stimulant: "Haldric feels the thrill of the hunt for the first time since starting his desk job, reignited by the mysteries around the Prime."
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=2 cert=2 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=0.6 × weight=0.5 → raw=4.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.50 × (1 + 0.633) = 7.35
    Final delta: 7.35 × 1 × 1.1 = 8.09
    fear: base=12 × trig=0.6 × weight=0.3 → raw=2.16
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 2.16 × (1 + -0.380) = 1.34
    Final delta: 1.34 × 1 × 1.1 = 1.47
    anger: base=23 × trig=0.6 × weight=0.2 → raw=2.76
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.76 × (1 + 0.360) = 3.75
    Final delta: 3.75 × 1 × 1.1 = 4.13

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(1.81) = 1.81
    sadness: carry(2.4 × 0.2) + delta(19.54) = 20.02
    anger: carry(8.0 × 0.2) + delta(9.98) = 11.58
    fear: carry(4.1 × 0.2) + delta(3.84) = 4.66
    disgust: carry(2.4 × 0.2) + delta(0.00) = 0.48
    surprise: carry(6.8 × 0.2) + delta(1.46) = 2.82
    trust: carry(0.0 × 0.2) + delta(3.86) = 3.86
    anticipation: carry(3.8 × 0.2) + delta(2.31) = 3.07

=== Chapter 10 ===
Stimulants this chapter: 5

  Stimulant: "Haldric is assigned to personally deliver the retirement notice to War Claw Bresdin, a Mythical Beast Hunter."
    Event: obstacle | Subject: self | Source: authority_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=23 × trig=1 × weight=0.4 → raw=9.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 9.20 × (1 + 0.360) = 12.51
    Final delta: 12.51 × 1 × 1 = 12.51
    anticipation: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 5.10 × (1 + -0.027) = 4.96
    Final delta: 4.96 × 1 × 1 = 4.96
    fear: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.60 × (1 + -0.380) = 2.23
    Final delta: 2.23 × 1 × 1 = 2.23

  Stimulant: "Hunters at the office threaten and shove Haldric when he announces the honorable discharge of their legend."
    Event: threat | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=12 × trig=1 × weight=0.7 → raw=8.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 8.40 × (1 + -0.380) = 5.21
    Final delta: 5.21 × 1 × 0.8 = 4.17
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.360) = 6.26
    Final delta: 6.26 × 1 × 0.8 = 5.00
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 1 × 0.8 = 1.32

  Stimulant: "Bresdin flees and opens the surface gate to blind Haldric, then attacks him with a weapon while Haldric is unable to see."
    Event: danger_cue | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=12 × trig=1 × weight=0.7 → raw=8.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 8.40 × (1 + -0.380) = 5.21
    Final delta: 5.21 × 1 × 0.8 = 4.17
    anticipation: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.40 × (1 + -0.027) = 3.31
    Final delta: 3.31 × 1 × 0.8 = 2.65
    anger: base=23 × trig=1 × weight=0.1 → raw=2.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.30 × (1 + 0.360) = 3.13
    Final delta: 3.13 × 1 × 0.8 = 2.50

  Stimulant: "Haldric successfully fights Bresdin while blind using childhood training, and The Prime intervenes to stop the Hunter."
    Event: success | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=12 × trig=1 × weight=0.7 → raw=8.40
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 8.40 × (1 + -0.013) = 8.29
    Final delta: 8.29 × 1 × 1.1 = 9.12
    trust: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 3.60 × (1 + -0.160) = 3.02
    Final delta: 3.02 × 1 × 1.1 = 3.33
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 1 × 1.1 = 1.82

  Stimulant: "The Prime Archon checks Haldric for injuries with paternal concern, and praises his fighting ability."
    Event: reward | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=12 × trig=1 × weight=0.6 → raw=7.20
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 7.20 × (1 + -0.013) = 7.10
    Final delta: 7.10 × 1 × 1 = 7.10
    trust: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 5.40 × (1 + -0.160) = 4.54
    Final delta: 4.54 × 1 × 1 = 4.54
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 1 × 1 = 1.65

  Emotion updates:
    joy: carry(1.8 × 0.2) + delta(16.22) = 16.58
    sadness: carry(20.0 × 0.2) + delta(0.00) = 4.00
    anger: carry(11.6 × 0.2) + delta(20.02) = 22.34
    fear: carry(4.7 × 0.2) + delta(10.56) = 11.50
    surprise: carry(2.8 × 0.2) + delta(0.00) = 0.56
    trust: carry(3.9 × 0.2) + delta(7.86) = 8.63
    anticipation: carry(3.1 × 0.2) + delta(12.41) = 13.02

=== Chapter 11 ===
Stimulants this chapter: 10

  Stimulant: "Haldric's body has acclimated to the surface, gaining enhanced strength, stamina, and senses overnight."
    Event: success | Subject: self | Source: world_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    joy: base=12 × trig=1 × weight=0.7 → raw=8.40
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 8.40 × (1 + -0.013) = 8.29
    Final delta: 8.29 × 1 × 0.7 = 5.80
    trust: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 3.60 × (1 + -0.160) = 3.02
    Final delta: 3.02 × 1 × 0.7 = 2.12
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 1 × 0.7 = 1.16

  Stimulant: "The Prime tells Haldric that it should have been him who became a Hunter, acknowledging the injustice of the test."
    Event: reward | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=12 × trig=1 × weight=0.6 → raw=7.20
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 7.20 × (1 + -0.013) = 7.10
    Final delta: 7.10 × 1 × 1 = 7.10
    trust: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 5.40 × (1 + -0.160) = 4.54
    Final delta: 4.54 × 1 × 1 = 4.54
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 1 × 1 = 1.65

  Stimulant: "The Prime tells Haldric he is fired, causing a moment of panic before Haldric realizes it may be a joke leading to something bigger."
    Event: surprise_reveal | Subject: self | Source: authority_caused | Domain: future_security
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    surprise: base=10 × trig=1 × weight=0.7 → raw=7.00
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 7.00 × (1 + -0.170) = 5.81
    Final delta: 5.81 × 1 × 1 = 5.81
    fear: base=12 × trig=1 × weight=0.15 → raw=1.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.80 × (1 + -0.380) = 1.12
    Final delta: 1.12 × 1 × 1 = 1.12
    anticipation: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.55 × (1 + -0.027) = 2.48
    Final delta: 2.48 × 1 × 1 = 2.48

  Stimulant: "Haldric sees the surface for the first time in full beauty but turns away, choosing to stay and serve rather than become a Hunter."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=18 × trig=1 × weight=0.4 → raw=7.20
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 7.20 × (1 + 0.060) = 7.63
    Final delta: 7.63 × 1 × 1.1 = 8.40
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 1 × 1.1 = 10.32
    sadness: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.50 × (1 + 0.633) = 7.35
    Final delta: 7.35 × 1 × 1.1 = 8.09

  Stimulant: "The Prime Archon publicly announces Haldric as the Heir Archon, his chosen successor, shocking the entire administration."
    Event: success | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=12 × trig=1 × weight=0.7 → raw=8.40
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 8.40 × (1 + -0.013) = 8.29
    Final delta: 8.29 × 1 × 1 = 8.29
    trust: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 3.60 × (1 + -0.160) = 3.02
    Final delta: 3.02 × 1 × 1 = 3.02
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 1 × 1 = 1.65

  Stimulant: "The administration erupts in cheers for Haldric and he feels belonging for the first time in the building."
    Event: connection | Subject: group | Source: world_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    trust: base=18 × trig=1 × weight=0.5 → raw=9.00
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 9.00 × (1 + -0.160) = 7.56
    Final delta: 7.56 × 0.7 × 0.7 = 3.70
    joy: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 3.60 × (1 + -0.013) = 3.55
    Final delta: 3.55 × 0.7 × 0.7 = 1.74
    anticipation: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.40 × (1 + -0.027) = 3.31
    Final delta: 3.31 × 0.7 × 0.7 = 1.62

  Stimulant: "The Prime gives Haldric the Master Key and the book of the previous Archon, entrusting him with the city's deepest secrets."
    Event: reward | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=12 × trig=1 × weight=0.6 → raw=7.20
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 7.20 × (1 + -0.013) = 7.10
    Final delta: 7.10 × 1 × 1 = 7.10
    trust: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 5.40 × (1 + -0.160) = 4.54
    Final delta: 4.54 × 1 × 1 = 4.54
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 1 × 1 = 1.65

  Stimulant: "A mysterious white-haired girl appears to Haldric that no one else can see, speaking to him and then vanishing through a door."
    Event: surprise_reveal | Subject: stranger | Source: world_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: stranger → ×0.3
    Source mult: world_caused → ×0.7
    surprise: base=10 × trig=0.85 × weight=0.7 → raw=5.95
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 5.95 × (1 + -0.170) = 4.94
    Final delta: 4.94 × 0.3 × 0.7 = 1.04
    fear: base=12 × trig=0.85 × weight=0.15 → raw=1.53
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.53 × (1 + -0.380) = 0.95
    Final delta: 0.95 × 0.3 × 0.7 = 0.20
    anticipation: base=17 × trig=0.85 × weight=0.15 → raw=2.17
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.17 × (1 + -0.027) = 2.11
    Final delta: 2.11 × 0.3 × 0.7 = 0.44

  Stimulant: "Praew confronts Haldric about his new power and The Prime, urging him to use his position to uncover the truth."
    Event: moral_cue | Subject: self | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    disgust: base=18 × trig=1 × weight=0.4 → raw=7.20
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 7.20 × (1 + 0.060) = 7.63
    Final delta: 7.63 × 1 × 1.3 = 9.92
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 1 × 1.3 = 12.20
    sadness: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.50 × (1 + 0.633) = 7.35
    Final delta: 7.35 × 1 × 1.3 = 9.55

  Stimulant: "Haldric accidentally smashes a stone table with his fist while defending The Prime, revealing his new strength to Praew."
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=0.85 × weight=0.5 → raw=6.38
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.38 × (1 + 0.633) = 10.41
    Final delta: 10.41 × 1 × 1.1 = 11.45
    fear: base=12 × trig=0.85 × weight=0.3 → raw=3.06
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.06 × (1 + -0.380) = 1.90
    Final delta: 1.90 × 1 × 1.1 = 2.09
    anger: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.91 × (1 + 0.360) = 5.32
    Final delta: 5.32 × 1 × 1.1 = 5.85

  Suppression applied:
  Suppression: anger(50.7) suppresses joy by -14.19 (50% of anger delta)
  Suppression: anger(50.7) suppresses trust by -8.51 (30% of anger delta)
  Suppression: anger(50.7) suppresses fear by -4.26 (15% of anger delta)

  Emotion updates:
    joy: carry(16.6 × 0.2) + delta(15.85) = 19.17
    sadness: carry(4.0 × 0.2) + delta(29.09) = 29.89
    anger: carry(22.3 × 0.2) + delta(28.37) = 32.84
    fear: carry(11.5 × 0.2) + delta(-0.85) = 1.45
    disgust: carry(0.1 × 0.2) + delta(18.32) = 18.34
    surprise: carry(0.6 × 0.2) + delta(6.85) = 6.96
    trust: carry(8.6 × 0.2) + delta(9.41) = 11.13
    anticipation: carry(13.0 × 0.2) + delta(10.67) = 13.27

=== Chapter 12 ===
Stimulants this chapter: 3

  Stimulant: "Haldric witnesses the Fourth Floor's slavery, whippings, and horrific conditions, shattering his image of The Prime as a benevolent leader."
    Event: injustice | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    anger: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 11.50 × (1 + 0.360) = 15.64
    Final delta: 15.64 × 0.7 × 1 = 10.95
    disgust: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 5.40 × (1 + 0.060) = 5.72
    Final delta: 5.72 × 0.7 × 1 = 4.01
    sadness: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.00 × (1 + 0.633) = 4.90
    Final delta: 4.90 × 0.7 × 1 = 3.43

  Stimulant: "Haldric desperately insists The Prime doesn't know about the Fourth Floor atrocities, his voice cracking as denial battles with what he has witnessed."
    Event: obstacle | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    anger: base=23 × trig=0.85 × weight=0.4 → raw=7.82
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 7.82 × (1 + 0.360) = 10.64
    Final delta: 10.64 × 1 × 1.1 = 11.70
    anticipation: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.33 × (1 + -0.027) = 4.22
    Final delta: 4.22 × 1 × 1.1 = 4.64
    fear: base=12 × trig=0.85 × weight=0.3 → raw=3.06
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.06 × (1 + -0.380) = 1.90
    Final delta: 1.90 × 1 × 1.1 = 2.09

  Stimulant: "Haldric steals two Sifaralith stones and a ledger from the Fourth Floor identification area, committing a dangerous act of rebellion."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=18 × trig=1 × weight=0.4 → raw=7.20
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 7.20 × (1 + 0.060) = 7.63
    Final delta: 7.63 × 1 × 1.1 = 8.40
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 1 × 1.1 = 10.32
    sadness: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.50 × (1 + 0.633) = 7.35
    Final delta: 7.35 × 1 × 1.1 = 8.09

  Suppression applied:
  Suppression: anger(65.8) suppresses joy by -16.48 (50% of anger delta)
  Suppression: anger(65.8) suppresses trust by -9.89 (30% of anger delta)
  Suppression: anger(65.8) suppresses fear by -4.95 (15% of anger delta)

  Emotion updates:
    joy: carry(19.2 × 0.2) + delta(-16.48) = -12.65
    sadness: carry(29.9 × 0.2) + delta(11.52) = 17.49
    anger: carry(32.8 × 0.2) + delta(32.97) = 39.54
    fear: carry(1.4 × 0.2) + delta(-2.86) = -2.57
    disgust: carry(18.3 × 0.2) + delta(12.40) = 16.07
    surprise: carry(7.0 × 0.2) + delta(0.00) = 1.39
    trust: carry(11.1 × 0.2) + delta(-9.89) = -7.66
    anticipation: carry(13.3 × 0.2) + delta(4.64) = 7.30

=== Chapter 13 ===
Stimulants this chapter: 5

  Stimulant: "Note reveals he is a rebel and accuses The Prime of holding Hunter families hostage, further eroding Haldric's trust."
    Event: surprise_reveal | Subject: authority | Source: enemy_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: authority → ×0.6
    Source mult: enemy_caused → ×0.8
    surprise: base=10 × trig=0.85 × weight=0.7 → raw=5.95
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 5.95 × (1 + -0.170) = 4.94
    Final delta: 4.94 × 0.6 × 0.8 = 2.37
    fear: base=12 × trig=0.85 × weight=0.15 → raw=1.53
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.53 × (1 + -0.380) = 0.95
    Final delta: 0.95 × 0.6 × 0.8 = 0.46
    anticipation: base=17 × trig=0.85 × weight=0.15 → raw=2.17
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.17 × (1 + -0.027) = 2.11
    Final delta: 2.11 × 0.6 × 0.8 = 1.01

  Stimulant: "Haldric realizes being seen with a rebel could get his entire family executed, and he panics about Praew's recklessness."
    Event: threat | Subject: family | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    fear: base=12 × trig=1 × weight=0.7 → raw=8.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 8.40 × (1 + -0.380) = 5.21
    Final delta: 5.21 × 0.9 × 1.3 = 6.09
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.360) = 6.26
    Final delta: 6.26 × 0.9 × 1.3 = 7.32
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 0.9 × 1.3 = 1.94

  Stimulant: "Haldric hurts Praew with his enhanced grip and cruelly insults her intelligence, then watches her walk away without looking back."
    Event: failure | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=1 × weight=0.5 → raw=7.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.50 × (1 + 0.633) = 12.25
    Final delta: 12.25 × 1 × 1.1 = 13.48
    fear: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.60 × (1 + -0.380) = 2.23
    Final delta: 2.23 × 1 × 1.1 = 2.46
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.360) = 6.26
    Final delta: 6.26 × 1 × 1.1 = 6.88

  Stimulant: "Haldric breaks into The Prime's office and discovers the BoltStone Recorrection Program documents signed by Godric, and breeding ledgers proving the food shortage is manufactured."
    Event: surprise_reveal | Subject: authority | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: self_caused → ×1.1
    surprise: base=10 × trig=1 × weight=0.7 → raw=7.00
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 7.00 × (1 + -0.170) = 5.81
    Final delta: 5.81 × 0.6 × 1.1 = 3.83
    fear: base=12 × trig=1 × weight=0.15 → raw=1.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.80 × (1 + -0.380) = 1.12
    Final delta: 1.12 × 0.6 × 1.1 = 0.74
    anticipation: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.55 × (1 + -0.027) = 2.48
    Final delta: 2.48 × 0.6 × 1.1 = 1.64

  Stimulant: "The Prime catches Haldric snooping in his office with classified documents exposed, expressing deep disappointment."
    Event: humiliation | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    sadness: base=15 × trig=1 × weight=0.4 → raw=6.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.00 × (1 + 0.633) = 9.80
    Final delta: 9.80 × 1 × 1 = 9.80
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 1 × 1 = 9.38
    disgust: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 5.40 × (1 + 0.060) = 5.72
    Final delta: 5.72 × 1 × 1 = 5.72

  Suppression applied:
  Suppression: anger(63.1) suppresses joy by -11.79 (50% of anger delta)
  Suppression: anger(63.1) suppresses trust by -7.08 (30% of anger delta)
  Suppression: anger(63.1) suppresses fear by -3.54 (15% of anger delta)

  Emotion updates:
    sadness: carry(17.5 × 0.2) + delta(23.28) = 26.77
    anger: carry(39.5 × 0.2) + delta(23.59) = 31.49
    fear: carry(0.0 × 0.2) + delta(6.20) = 6.20
    disgust: carry(16.1 × 0.2) + delta(5.72) = 8.94
    surprise: carry(1.4 × 0.2) + delta(6.21) = 6.48
    anticipation: carry(7.3 × 0.2) + delta(4.59) = 6.05

=== Chapter 14 ===
Stimulants this chapter: 5

  Stimulant: "The Prime takes Haldric to the Noble Quarter and systematically dismantles his assumptions about the upper class being pampered."
    Event: surprise_reveal | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    surprise: base=10 × trig=1 × weight=0.7 → raw=7.00
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 7.00 × (1 + -0.170) = 5.81
    Final delta: 5.81 × 0.7 × 1 = 4.07
    fear: base=12 × trig=1 × weight=0.15 → raw=1.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.80 × (1 + -0.380) = 1.12
    Final delta: 1.12 × 0.7 × 1 = 0.78
    anticipation: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.55 × (1 + -0.027) = 2.48
    Final delta: 2.48 × 0.7 × 1 = 1.74

  Stimulant: "The Prime reveals the planet Ravour is dying and that everyone must eventually acclimate to survive evacuation through portals."
    Event: threat | Subject: group | Source: authority_caused | Domain: future_security
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    fear: base=12 × trig=0.85 × weight=0.7 → raw=7.14
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 7.14 × (1 + -0.380) = 4.43
    Final delta: 4.43 × 0.7 × 1 = 3.10
    anger: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.91 × (1 + 0.360) = 5.32
    Final delta: 5.32 × 0.7 × 1 = 3.72
    anticipation: base=17 × trig=0.85 × weight=0.1 → raw=1.45
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.45 × (1 + -0.027) = 1.41
    Final delta: 1.41 × 0.7 × 1 = 0.98

  Stimulant: "The Prime reveals the ten Beasts of Legend have learned to reproduce, potentially spelling human extinction."
    Event: danger_cue | Subject: group | Source: authority_caused | Domain: future_security
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    fear: base=12 × trig=0.85 × weight=0.7 → raw=7.14
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 7.14 × (1 + -0.380) = 4.43
    Final delta: 4.43 × 0.7 × 1 = 3.10
    anticipation: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.89 × (1 + -0.027) = 2.81
    Final delta: 2.81 × 0.7 × 1 = 1.97
    anger: base=23 × trig=0.85 × weight=0.1 → raw=1.96
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.96 × (1 + 0.360) = 2.66
    Final delta: 2.66 × 0.7 × 1 = 1.86

  Stimulant: "The mysterious white-haired girl reappears on the surface, getting terrifyingly close to Haldric and whispering that he looks like someone."
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=1 imm=3 cert=2 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=12 × trig=0.85 × weight=0.7 → raw=7.14
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 7.14 × (1 + -0.380) = 4.43
    Final delta: 4.43 × 1 × 0.7 = 3.10
    anticipation: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.89 × (1 + -0.027) = 2.81
    Final delta: 2.81 × 1 × 0.7 = 1.97
    anger: base=23 × trig=0.85 × weight=0.1 → raw=1.96
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.96 × (1 + 0.360) = 2.66
    Final delta: 2.66 × 1 × 0.7 = 1.86

  Stimulant: "The Prime tells Haldric the world needs a kind heart willing to risk everything, and that he chose Haldric for that quality."
    Event: reward | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=12 × trig=1 × weight=0.6 → raw=7.20
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 7.20 × (1 + -0.013) = 7.10
    Final delta: 7.10 × 1 × 1 = 7.10
    trust: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 5.40 × (1 + -0.160) = 4.54
    Final delta: 4.54 × 1 × 1 = 4.54
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.027) = 1.65
    Final delta: 1.65 × 1 × 1 = 1.65

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(7.10) = 7.10
    sadness: carry(26.8 × 0.2) + delta(0.00) = 5.35
    anger: carry(31.5 × 0.2) + delta(7.44) = 13.74
    fear: carry(6.2 × 0.2) + delta(10.08) = 11.32
    disgust: carry(8.9 × 0.2) + delta(0.00) = 1.79
    surprise: carry(6.5 × 0.2) + delta(4.07) = 5.36
    trust: carry(0.0 × 0.2) + delta(4.54) = 4.54
    anticipation: carry(6.0 × 0.2) + delta(8.31) = 9.52

=== Chapter 15 ===
Stimulants this chapter: 4

  Stimulant: "Haldric realizes Praew was right about The Prime and is consumed by guilt for how he treated her, resolving to apologize."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=18 × trig=1 × weight=0.4 → raw=7.20
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 7.20 × (1 + 0.060) = 7.63
    Final delta: 7.63 × 1 × 1.1 = 8.40
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 1 × 1.1 = 10.32
    sadness: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.50 × (1 + 0.633) = 7.35
    Final delta: 7.35 × 1 × 1.1 = 8.09

  Stimulant: "Praew's parents reveal she has been missing since yesterday and no one can find her, sending Haldric into a panic."
    Event: danger_cue | Subject: friend | Source: world_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: world_caused → ×0.7
    fear: base=12 × trig=1 × weight=0.7 → raw=8.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 8.40 × (1 + -0.380) = 5.21
    Final delta: 5.21 × 0.8 × 0.7 = 2.92
    anticipation: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.40 × (1 + -0.027) = 3.31
    Final delta: 3.31 × 0.8 × 0.7 = 1.85
    anger: base=23 × trig=1 × weight=0.1 → raw=2.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.30 × (1 + 0.360) = 3.13
    Final delta: 3.13 × 0.8 × 0.7 = 1.75

  Stimulant: "Haldric finds classified medical records showing Godric was injured in suspicious late-night combat and another patient is redacted and in a coma."
    Event: surprise_reveal | Subject: authority | Source: self_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: self_caused → ×1.1
    surprise: base=10 × trig=1 × weight=0.7 → raw=7.00
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 7.00 × (1 + -0.170) = 5.81
    Final delta: 5.81 × 0.6 × 1.1 = 3.83
    fear: base=12 × trig=1 × weight=0.15 → raw=1.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.80 × (1 + -0.380) = 1.12
    Final delta: 1.12 × 0.6 × 1.1 = 0.74
    anticipation: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.55 × (1 + -0.027) = 2.48
    Final delta: 2.48 × 0.6 × 1.1 = 1.64

  Stimulant: "Haldric confronts Godric in the training center, attacks him with surged ForceStone, and is easily defeated and thrown into a wall."
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=1 × weight=0.5 → raw=7.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.50 × (1 + 0.633) = 12.25
    Final delta: 12.25 × 1 × 1.1 = 13.48
    fear: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.60 × (1 + -0.380) = 2.23
    Final delta: 2.23 × 1 × 1.1 = 2.46
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.360) = 6.26
    Final delta: 6.26 × 1 × 1.1 = 6.88

  Emotion updates:
    joy: carry(7.1 × 0.2) + delta(0.00) = 1.42
    sadness: carry(5.4 × 0.2) + delta(21.56) = 22.63
    anger: carry(13.7 × 0.2) + delta(18.96) = 21.70
    fear: carry(11.3 × 0.2) + delta(6.11) = 8.37
    disgust: carry(1.8 × 0.2) + delta(8.40) = 8.75
    surprise: carry(5.4 × 0.2) + delta(3.83) = 4.91
    trust: carry(4.5 × 0.2) + delta(0.00) = 0.91
    anticipation: carry(9.5 × 0.2) + delta(3.49) = 5.40

=== Chapter 16 ===
Stimulants this chapter: 2

  Stimulant: "Godric reveals he did not kidnap Praew's friends but has been trying to find them, and that he heard screaming below the Fourth Floor."
    Event: surprise_reveal | Subject: friend | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    surprise: base=10 × trig=1 × weight=0.7 → raw=7.00
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 7.00 × (1 + -0.170) = 5.81
    Final delta: 5.81 × 0.8 × 1.3 = 6.04
    fear: base=12 × trig=1 × weight=0.15 → raw=1.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.80 × (1 + -0.380) = 1.12
    Final delta: 1.12 × 0.8 × 1.3 = 1.16
    anticipation: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.55 × (1 + -0.027) = 2.48
    Final delta: 2.48 × 0.8 × 1.3 = 2.58

  Stimulant: "Haldric realizes the entrance to the Fifth Floor is hidden in The Prime's own office, confirming The Prime's involvement."
    Event: surprise_reveal | Subject: authority | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: self_caused → ×1.1
    surprise: base=10 × trig=1 × weight=0.7 → raw=7.00
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 7.00 × (1 + -0.170) = 5.81
    Final delta: 5.81 × 0.6 × 1.1 = 3.83
    fear: base=12 × trig=1 × weight=0.15 → raw=1.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.80 × (1 + -0.380) = 1.12
    Final delta: 1.12 × 0.6 × 1.1 = 0.74
    anticipation: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.55 × (1 + -0.027) = 2.48
    Final delta: 2.48 × 0.6 × 1.1 = 1.64

  Emotion updates:
    joy: carry(1.4 × 0.2) + delta(0.00) = 0.28
    sadness: carry(22.6 × 0.2) + delta(0.00) = 4.53
    anger: carry(21.7 × 0.2) + delta(0.00) = 4.34
    fear: carry(8.4 × 0.2) + delta(1.90) = 3.57
    disgust: carry(8.8 × 0.2) + delta(0.00) = 1.75
    surprise: carry(4.9 × 0.2) + delta(9.88) = 10.86
    trust: carry(0.9 × 0.2) + delta(0.00) = 0.18
    anticipation: carry(5.4 × 0.2) + delta(4.22) = 5.30

=== Chapter 17 ===
Stimulants this chapter: 5

  Stimulant: "Haldric sees Praew strapped to a slab, covered in blood with a stone embedded in her chest, and two dead bodies nearby."
    Event: harm | Subject: friend | Source: authority_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    fear: base=12 × trig=1 × weight=0.5 → raw=6.00
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.00 × (1 + -0.380) = 3.72
    Final delta: 3.72 × 0.8 × 1 = 2.98
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 0.8 × 1 = 7.51
    sadness: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.00 × (1 + 0.633) = 4.90
    Final delta: 4.90 × 0.8 × 1 = 3.92

  Stimulant: "Haldric blames himself for believing The Prime's lies instead of trusting Praew, realizing his denial may have cost lives."
    Event: failure | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=1 × weight=0.5 → raw=7.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.50 × (1 + 0.633) = 12.25
    Final delta: 12.25 × 1 × 1.1 = 13.48
    fear: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.60 × (1 + -0.380) = 2.23
    Final delta: 2.23 × 1 × 1.1 = 2.46
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.360) = 6.26
    Final delta: 6.26 × 1 × 1.1 = 6.88

  Stimulant: "Haldric confesses to Godric that he loves Praew, knowing he may never see her again after the rescue."
    Event: separation | Subject: friend | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=1 × weight=0.6 → raw=9.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.00 × (1 + 0.633) = 14.70
    Final delta: 14.70 × 0.8 × 1.1 = 12.94
    fear: base=12 × trig=1 × weight=0.2 → raw=2.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 2.40 × (1 + -0.380) = 1.49
    Final delta: 1.49 × 0.8 × 1.1 = 1.31
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.360) = 6.26
    Final delta: 6.26 × 0.8 × 1.1 = 5.51

  Stimulant: "Haldric uses the Master Key to release every prisoner in the city jail as a distraction, an act of treason to save Praew."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=18 × trig=1 × weight=0.4 → raw=7.20
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 7.20 × (1 + 0.060) = 7.63
    Final delta: 7.63 × 1 × 1.1 = 8.40
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 1 × 1.1 = 10.32
    sadness: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.50 × (1 + 0.633) = 7.35
    Final delta: 7.35 × 1 × 1.1 = 8.09

  Stimulant: "A freed prisoner murders a woman in front of her child as a direct consequence of Haldric's jailbreak, devastating him with guilt."
    Event: harm | Subject: stranger | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: self_caused → ×1.1
    fear: base=12 × trig=1 × weight=0.5 → raw=6.00
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.00 × (1 + -0.380) = 3.72
    Final delta: 3.72 × 0.3 × 1.1 = 1.23
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 0.3 × 1.1 = 3.10
    sadness: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.00 × (1 + 0.633) = 4.90
    Final delta: 4.90 × 0.3 × 1.1 = 1.62

  Emotion updates:
    sadness: carry(4.5 × 0.2) + delta(40.03) = 40.94
    anger: carry(4.3 × 0.2) + delta(33.31) = 34.18
    fear: carry(3.6 × 0.2) + delta(7.97) = 8.68
    disgust: carry(1.8 × 0.2) + delta(8.40) = 8.75
    surprise: carry(10.9 × 0.2) + delta(0.00) = 2.17
    anticipation: carry(5.3 × 0.2) + delta(0.00) = 1.06

=== Chapter 18 ===
Stimulants this chapter: 3

  Stimulant: "The Prime Archon beats Haldric with kicks and backhands, calling him a fool who doomed everyone."
    Event: harm | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=12 × trig=1 × weight=0.5 → raw=6.00
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.00 × (1 + -0.380) = 3.72
    Final delta: 3.72 × 1 × 1 = 3.72
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.360) = 9.38
    Final delta: 9.38 × 1 × 1 = 9.38
    sadness: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.00 × (1 + 0.633) = 4.90
    Final delta: 4.90 × 1 × 1 = 4.90

  Stimulant: "Haldric involuntarily calls The Prime 'Father' while being beaten, revealing his deep conflicted attachment despite everything."
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=1 × weight=0.5 → raw=7.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.50 × (1 + 0.633) = 12.25
    Final delta: 12.25 × 1 × 1.1 = 13.48
    fear: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.60 × (1 + -0.380) = 2.23
    Final delta: 2.23 × 1 × 1.1 = 2.46
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.360) = 6.26
    Final delta: 6.26 × 1 × 1.1 = 6.88

  Stimulant: "The Prime immediately softens after being called Father, asking if Haldric is alright, creating a whiplash of conflicting emotions."
    Event: connection | Subject: authority | Source: authority_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: authority_caused → ×1
    trust: base=18 × trig=1 × weight=0.5 → raw=9.00
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 9.00 × (1 + -0.160) = 7.56
    Final delta: 7.56 × 0.6 × 1 = 4.54
    joy: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 3.60 × (1 + -0.013) = 3.55
    Final delta: 3.55 × 0.6 × 1 = 2.13
    anticipation: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.40 × (1 + -0.027) = 3.31
    Final delta: 3.31 × 0.6 × 1 = 1.99

  Suppression applied:
  Suppression: anger(50.4) suppresses joy by -8.13 (50% of anger delta)
  Suppression: anger(50.4) suppresses trust by -4.88 (30% of anger delta)
  Suppression: anger(50.4) suppresses fear by -2.44 (15% of anger delta)
  Suppression: sadness(59.3) suppresses joy by -11.03 (60% of sadness delta)
  Suppression: sadness(59.3) suppresses anticipation by -5.51 (30% of sadness delta)
  Suppression: sadness(59.3) suppresses surprise by -3.68 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.1 × 0.2) + delta(-17.03) = -17.02
    sadness: carry(40.9 × 0.2) + delta(18.38) = 26.56
    anger: carry(34.2 × 0.2) + delta(16.27) = 23.10
    fear: carry(8.7 × 0.2) + delta(3.74) = 5.47
    disgust: carry(8.7 × 0.2) + delta(0.00) = 1.75
    surprise: carry(2.2 × 0.2) + delta(-3.68) = -3.24
    trust: carry(0.0 × 0.2) + delta(-0.34) = -0.34
    anticipation: carry(1.1 × 0.2) + delta(-3.53) = -3.31
```

### Profile Reasoning

- **emotionalBaseline.joy**: Haldric shows joy sparingly. He smiles genuinely when seeing Praew (Ch7), enjoys the banter with Grayparents (Ch10), and feels belonging when announced as Heir (Ch11). But joy is not his default state — he's more guarded.
- **emotionalBaseline.sadness**: Moderate sadness sensitivity. He's moved by his Grayparents' sacrifice (Ch8), the Fourth Floor horrors (Ch12), and Praew's capture (Ch15-17). His eyes "betray his own words" with moisture at the Fourth Floor (Ch12). But he channels sadness into action rather than dwelling.
- **emotionalBaseline.anger**: Extremely high anger sensitivity. After Asher's betrayal: "barely contained rage," "fists trembled," "jaw clenched so tight it ached" (Ch1). Slams table with acclimated strength (Ch11). Snaps at Praew cruelly (Ch13). Charges Godric in fury (Ch15). His anger is volcanic and barely controlled.
- **emotionalBaseline.fear**: Low-moderate fear sensitivity. Faces Bresdin blind and unarmed without freezing (Ch10). Enters the Hunter office alone knowing the danger (Ch10). His fear manifests as caution rather than paralysis, except with the white-haired girl apparition.
- **emotionalBaseline.disgust**: High disgust sensitivity. Reacts viscerally to the Fourth Floor ("nearly retches" Ch12), disgusted by The Prime's deception (Ch17), mutters "Blasted Hunters" with open contempt after mirroring The Prime's attitude. Strong moral disgust.
- **emotionalBaseline.surprise**: Low surprise sensitivity. He adapts quickly to shocking information: becoming Heir (Ch11), learning about portals (Ch14), discovering the Fifth Floor (Ch16). Trained to maintain composure. "Don't acknowledge it" is his instinct.
- **emotionalBaseline.trust**: Moderate-high trust sensitivity. He trusts The Prime deeply as a father figure, trusts Praew completely. When trust is broken (discovering The Prime's crimes Ch17), the devastation is enormous. His loyalty makes betrayal feel catastrophic.
- **emotionalBaseline.anticipation**: Moderate. He plans ahead (the office investigation Ch13, the prison break Ch17), calculates before acting. But he also gets swept up in moments (charging Godric, releasing prisoners impulsively).
- **temperament.patience**: Low-moderate patience. He endures tedious desk work (Ch9) but snaps easily in confrontation: yells at Praew (Ch13), charges Godric without a plan (Ch15), blurts "Are all Hunters that much of an asshole?" to The Prime (Ch9). Patience erodes quickly under emotional pressure.
- **temperament.impulsiveness**: Moderate-high. Steals stones from the Fourth Floor (Ch12), blurts inappropriate comments to The Prime (Ch9), releases ALL prisoners including dangerous ones (Ch17), charges Godric with minimal preparation (Ch15). His impulsiveness has devastating consequences.
- **temperament.confrontationalTendency**: Moderate-high. Faces Bresdin (Ch10), confronts Godric (Ch15), argues with Note (Ch12-13), snaps at Praew (Ch13). But he also defers to authority when strategic (works within The Prime's system Ch9-11).
- **temperament.agreeableness**: Low-moderate. Sarcastic, sharp-tongued, and resistant to cooperation. Immediately hostile toward Note ("most suspicious name I've ever heard" Ch11). Scoffs at rebels. But shows tenderness with Grayparents and eventually helps Praew.
- **temperament.emotionalContainment**: Low-moderate. Tries to maintain composure but fails under pressure. Breaks stone table with acclimated strength (Ch11), voice "cracked" and "barely contained rage" (Ch1), yells at Praew in public (Ch13). Better contained in professional settings but volatile in personal ones.
- **temperament.riskAppetite**: Moderate-high. Chases Bresdin to the surface (Ch10), breaks into The Prime's office (Ch13), releases prisoners (Ch17). But he also chooses the safer path when offered (declines Hunter role for Heir Ch11).
- **temperament.curiosity**: Moderate. He investigates when asked (by Praew) but his curiosity is slower to ignite than hers. He resists looking into things initially ("Could you please stop being so nosy?" Ch7) but once engaged, he's thorough.
- **temperament.prideSensitivity**: High pride sensitivity. Devastated by failing the Hunter test ("That should have been me" Ch2). Loves being celebrated as Heir (Ch11). Feels inadequate next to Note's physique (Ch12). His pride drives many decisions.
- **temperament.shameSensitivity**: Moderate-high. Embarrassed by Grayparents' teasing about Praew (Ch10), ashamed of blurting things to The Prime (Ch9), deeply ashamed when caught snooping (Ch13). Shame drives his inner critic: "Stupid, stupid, stupid" (Ch9).
- **temperament.empathyBaseline**: Moderate. He cares deeply about specific people (Grayparents, Praew) but struggles with broader empathy. Initially dismisses the Fourth Floor horrors as impossible (Ch12), is callous toward Praew's concerns (Ch13). His empathy is selective and slow to expand.
- **temperament.dominanceVsDeference**: Balanced. Defers to The Prime as a father figure but asserts dominance in other contexts (commands guards Ch15, confronts Godric). Uses his title strategically. Neither purely dominant nor submissive.
- **temperament.adaptabilityVsRigidity**: Moderate-rigid. Clings to his belief in The Prime despite mounting evidence (Ch12-14). "HE IS NOT AN ENEMY, PRAEW!" (Ch11). Slowly adapts but requires overwhelming proof. His worldview shifts are painful and reluctant.
- **moralStructure.primaryDriver**: Loyalty and leadership. He wants to protect those he loves through legitimate power. His arc moves from "trust the system" to "the system must be reformed." He chose Heir over Hunter because he believed he could do more good from within.
- **moralStructure.moralRigidity**: Moderate. He initially holds rigid loyalty to The Prime and the system ("And justice we will deliver"). But he slowly bends as evidence mounts. By Ch17, he commits treason to save Praew. His morality evolves but the shifts are wrenching.
- **moralStructure.guiltSensitivity**: Very high guilt. Guilt over his Grayparents starving (Ch8), guilt over failing Praew (Ch15-17), guilt over the woman killed by released prisoners (Ch17). "What have I done?" is his devastating realization. Guilt is his heaviest emotional burden.
- **moralStructure.justificationTendency**: Moderate. He initially justifies The Prime's actions and his own loyalty. "This wasn't betrayal. It was loyalty. Right?" (Ch13). He rationalizes to protect his worldview but eventually faces the truth. Less justification-prone than The Prime but more than Praew.


## The Prime / Arthur Rivers

### Emotion Values Per Chapter

```
Ch |    joy |  sadne |  anger |   fear |  disgu |  surpr |  trust |  antic
--------------------------------------------------------------------------
 0 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 1 |      0 |      4 |      6 |      0 |      8 |      0 |      0 |      0
 2 |      0 |     23 |     23 |      6 |      6 |      0 |      0 |      0
 3 |      0 |     26 |     44 |      9 |      6 |      2 |      0 |      3
 4 |      0 |     26 |     44 |      9 |      6 |      2 |      0 |      3
 5 |      0 |     26 |     44 |      9 |      6 |      2 |      0 |      3
 6 |      0 |     26 |     44 |      9 |      6 |      2 |      0 |      3
 7 |      0 |      5 |      9 |      2 |      1 |      0 |      0 |      1
 8 |      0 |      5 |      9 |      2 |      1 |      0 |      0 |      1
 9 |      0 |     19 |     17 |     11 |      7 |      0 |      1 |      2
10 |      0 |     10 |      8 |      8 |      1 |      0 |      0 |      1
11 |      0 |     21 |     12 |      5 |      8 |      0 |      0 |      0
12 |      0 |      4 |      2 |      1 |      2 |      0 |      0 |      0
13 |      0 |     18 |     16 |      2 |      4 |      0 |      0 |      0
14 |      0 |     20 |     30 |     10 |     16 |      0 |      0 |      2
15 |      0 |      4 |      6 |      2 |      3 |      0 |      0 |      0
16 |      2 |      4 |      5 |      0 |      6 |      0 |      1 |      1
17 |      0 |      7 |      9 |      7 |      1 |      0 |      0 |      3
18 |      0 |     50 |     29 |     23 |      8 |      0 |      0 |      0
```

### Calculation Breakdown

```

=== Chapter 0 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 1 ===
Stimulants this chapter: 1

  Stimulant: "The Prime Archon watches from above as his son Asher betrays his best friend Haldric during the Hunter test, a scenario The Prime himself orchestrated"
    Event: moral_cue | Subject: family | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    disgust: base=20 × trig=1 × weight=0.4 → raw=8.00
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 8.00 × (1 + 0.000) = 8.00
    Final delta: 8.00 × 0.9 × 1.1 = 7.92
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.053) = 5.69
    Final delta: 5.69 × 0.9 × 1.1 = 5.63
    sadness: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.90 × (1 + 0.140) = 4.45
    Final delta: 4.45 × 0.9 × 1.1 = 4.40

  Emotion updates:
    sadness: carry(0.0 × 0.2) + delta(4.40) = 4.40
    anger: carry(0.0 × 0.2) + delta(5.63) = 5.63
    disgust: carry(0.0 × 0.2) + delta(7.92) = 7.92

=== Chapter 2 ===
Stimulants this chapter: 4

  Stimulant: "The Prime tries to speak to Asher before he leaves and is coldly cut off as Asher walks right past him, refusing any fatherly connection"
    Event: rejection | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.6 → raw=7.80
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.80 × (1 + 0.140) = 8.89
    Final delta: 8.89 × 0.9 × 1.3 = 10.40
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.9 × 1.3 = 4.44
    fear: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 3.40 × (1 + -0.460) = 1.84
    Final delta: 1.84 × 0.9 × 1.3 = 2.15

  Stimulant: "Asher publicly accuses The Prime of sabotaging his Hunter test by pitting him against his best friend"
    Event: insult | Subject: family | Source: ally_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    anger: base=18 × trig=1 × weight=0.6 → raw=10.80
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 10.80 × (1 + 0.053) = 11.38
    Final delta: 11.38 × 0.9 × 1.3 = 13.31
    disgust: base=20 × trig=1 × weight=0.2 → raw=4.00
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 4.00 × (1 + 0.000) = 4.00
    Final delta: 4.00 × 0.9 × 1.3 = 4.68
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.140) = 2.96
    Final delta: 2.96 × 0.9 × 1.3 = 3.47

  Stimulant: "The Prime sputters and fails to find words as Asher walks away, left speechless by his son's rejection"
    Event: failure | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.50 × (1 + 0.140) = 7.41
    Final delta: 7.41 × 1 × 1.1 = 8.15
    fear: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 5.10 × (1 + -0.460) = 2.75
    Final delta: 2.75 × 1 × 1.1 = 3.03
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 1 × 1.1 = 4.17

  Stimulant: "Renwick makes a veiled, suspicious comment about "a prime contribution" that alarms Arthur, but Renwick deflects before Arthur can press further"
    Event: danger_cue | Subject: stranger | Source: enemy_caused | Domain: safety
    Trigger: stakes=1 imm=2 cert=1 → total=4 → Medium (×0.6)
    Subject mult: stranger → ×0.3
    Source mult: enemy_caused → ×0.8
    fear: base=17 × trig=0.6 × weight=0.7 → raw=7.14
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 7.14 × (1 + -0.460) = 3.86
    Final delta: 3.86 × 0.3 × 0.8 = 0.93
    anticipation: base=17 × trig=0.6 × weight=0.2 → raw=2.04
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 2.04 × (1 + -0.187) = 1.66
    Final delta: 1.66 × 0.3 × 0.8 = 0.40
    anger: base=18 × trig=0.6 × weight=0.1 → raw=1.08
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.08 × (1 + 0.053) = 1.14
    Final delta: 1.14 × 0.3 × 0.8 = 0.27

  Emotion updates:
    sadness: carry(4.4 × 0.2) + delta(22.02) = 22.90
    anger: carry(5.6 × 0.2) + delta(22.19) = 23.32
    fear: carry(0.0 × 0.2) + delta(6.10) = 6.10
    disgust: carry(7.9 × 0.2) + delta(4.68) = 6.26
    anticipation: carry(0.0 × 0.2) + delta(0.40) = 0.40

=== Chapter 3 ===
Stimulants this chapter: 7

  Stimulant: "Arthur learns the previous Prime has died and he must immediately assume the title, receiving the news while children play nearby"
    Event: loss | Subject: authority | Source: world_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: world_caused → ×0.7
    sadness: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.10 × (1 + 0.140) = 10.37
    Final delta: 10.37 × 0.6 × 0.7 = 4.36
    fear: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 3.40 × (1 + -0.460) = 1.84
    Final delta: 1.84 × 0.6 × 0.7 = 0.77
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.053) = 1.90
    Final delta: 1.90 × 0.6 × 0.7 = 0.80

  Stimulant: "Arthur learns a mythical beast threatens Stormhaven and the only willing defender, Godric, has already gone to the surface to likely die"
    Event: threat | Subject: group | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    fear: base=17 × trig=1 × weight=0.7 → raw=11.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 11.90 × (1 + -0.460) = 6.43
    Final delta: 6.43 × 0.7 × 0.7 = 3.15
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.7 × 0.7 = 1.86
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.187) = 1.38
    Final delta: 1.38 × 0.7 × 0.7 = 0.68

  Stimulant: "Newly-made Prime Arthur is visibly shaken, sweating, bloodshot-eyed and terrified after learning the secrets shown only to the Prime Archon"
    Event: surprise_reveal | Subject: self | Source: authority_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    surprise: base=5 × trig=1 × weight=0.7 → raw=3.50
    Trait modifiers for surprise (total: -0.343):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(35/75 × -0.2) = -0.093 [Adaptable = recovers from surprise faster]
  impulsiveness(15/75 × 0.15) = +0.030 [Impulsive = reacts more to surprises]
    Modified delta: 3.50 × (1 + -0.343) = 2.30
    Final delta: 2.30 × 1 × 1 = 2.30
    fear: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 2.55 × (1 + -0.460) = 1.38
    Final delta: 1.38 × 1 × 1 = 1.38
    anticipation: base=17 × trig=1 × weight=0.15 → raw=2.55
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 2.55 × (1 + -0.187) = 2.07
    Final delta: 2.07 × 1 × 1 = 2.07

  Stimulant: "Arthur harshly tells young Asher to never call him "Father" in public again, squeezing his arm hard enough to hurt, terrified of public vulnerability"
    Event: constraint | Subject: family | Source: self_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    anger: base=18 × trig=1 × weight=0.5 → raw=9.00
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.00 × (1 + 0.053) = 9.48
    Final delta: 9.48 × 0.9 × 1.1 = 9.39
    fear: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 5.10 × (1 + -0.460) = 2.75
    Final delta: 2.75 × 0.9 × 1.1 = 2.73
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.140) = 2.96
    Final delta: 2.96 × 0.9 × 1.1 = 2.93

  Stimulant: "Young Asher calls Arthur a coward hiding underground while real heroes sacrifice themselves, directly challenging his honor"
    Event: insult | Subject: family | Source: ally_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    anger: base=18 × trig=1 × weight=0.6 → raw=10.80
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 10.80 × (1 + 0.053) = 11.38
    Final delta: 11.38 × 0.9 × 1.3 = 13.31
    disgust: base=20 × trig=1 × weight=0.2 → raw=4.00
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 4.00 × (1 + 0.000) = 4.00
    Final delta: 4.00 × 0.9 × 1.3 = 4.68
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.140) = 2.96
    Final delta: 2.96 × 0.9 × 1.3 = 3.47

  Stimulant: "Arthur slams the stone table so hard he leaves a permanent palm print, losing control of his enhanced strength in front of Asher"
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.50 × (1 + 0.140) = 7.41
    Final delta: 7.41 × 1 × 1.1 = 8.15
    fear: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 5.10 × (1 + -0.460) = 2.75
    Final delta: 2.75 × 1 × 1.1 = 3.03
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 1 × 1.1 = 4.17

  Stimulant: "Arthur forbids Asher from becoming a Hunter, declaring it too dangerous, but Asher reminds him the law prevents the Prime from blocking the test"
    Event: constraint | Subject: family | Source: ally_caused | Domain: autonomy
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    anger: base=18 × trig=0.85 × weight=0.5 → raw=7.65
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 7.65 × (1 + 0.053) = 8.06
    Final delta: 8.06 × 0.9 × 1.3 = 9.43
    fear: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 4.33 × (1 + -0.460) = 2.34
    Final delta: 2.34 × 0.9 × 1.3 = 2.74
    sadness: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.21 × (1 + 0.140) = 2.52
    Final delta: 2.52 × 0.9 × 1.3 = 2.95

  Suppression applied:
  Suppression: anger(62.3) suppresses joy by -19.47 (50% of anger delta)
  Suppression: anger(62.3) suppresses trust by -11.68 (30% of anger delta)
  Suppression: anger(62.3) suppresses fear by -5.84 (15% of anger delta)

  Emotion updates:
    sadness: carry(22.9 × 0.2) + delta(21.86) = 26.44
    anger: carry(23.3 × 0.2) + delta(38.95) = 43.61
    fear: carry(6.1 × 0.2) + delta(7.95) = 9.17
    disgust: carry(6.3 × 0.2) + delta(4.68) = 5.93
    surprise: carry(0.0 × 0.2) + delta(2.30) = 2.30
    anticipation: carry(0.4 × 0.2) + delta(2.75) = 2.83

=== Chapter 4 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 5 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 6 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 7 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(26.4 × 0.2) + delta(0.00) = 5.29
    anger: carry(43.6 × 0.2) + delta(0.00) = 8.72
    fear: carry(9.2 × 0.2) + delta(0.00) = 1.83
    disgust: carry(5.9 × 0.2) + delta(0.00) = 1.19
    surprise: carry(2.3 × 0.2) + delta(0.00) = 0.46
    anticipation: carry(2.8 × 0.2) + delta(0.00) = 0.57

=== Chapter 8 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 9 ===
Stimulants this chapter: 5

  Stimulant: "Godric storms into The Prime's office furious, screaming accusations about what Arthur is doing to people, physically confronting him"
    Event: threat | Subject: authority | Source: ally_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: ally_caused → ×1.3
    fear: base=17 × trig=1 × weight=0.7 → raw=11.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 11.90 × (1 + -0.460) = 6.43
    Final delta: 6.43 × 0.6 × 1.3 = 5.01
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.6 × 1.3 = 2.96
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.187) = 1.38
    Final delta: 1.38 × 0.6 × 1.3 = 1.08

  Stimulant: "After Godric leaves, The Prime mutters "blasted Hunters" with open disdain before catching himself, revealing a rare crack in his composure"
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.52 × (1 + 0.140) = 6.30
    Final delta: 6.30 × 1 × 1.1 = 6.93
    fear: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 4.33 × (1 + -0.460) = 2.34
    Final delta: 2.34 × 1 × 1.1 = 2.57
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.053) = 3.22
    Final delta: 3.22 × 1 × 1.1 = 3.55

  Stimulant: "Haldric unexpectedly asks "Are you okay?" after overhearing the confrontation, and The Prime is moved that someone cares about his wellbeing"
    Event: connection | Subject: stranger | Source: ally_caused | Domain: belonging
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: stranger → ×0.3
    Source mult: ally_caused → ×1.3
    trust: base=7 × trig=0.85 × weight=0.5 → raw=2.98
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 2.98 × (1 + -0.280) = 2.14
    Final delta: 2.14 × 0.3 × 1.3 = 0.84
    joy: base=5 × trig=0.85 × weight=0.3 → raw=1.27
    Trait modifiers for joy (total: -0.200):
  empathyBaseline(30/75 × 0.2) = +0.080 [Empathic joy — shares in others' happiness]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 1.27 × (1 + -0.200) = 1.02
    Final delta: 1.02 × 0.3 × 1.3 = 0.40
    anticipation: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 2.89 × (1 + -0.187) = 2.35
    Final delta: 2.35 × 0.3 × 1.3 = 0.92

  Stimulant: "The Prime admits that Haldric may be the first person to worry about his wellbeing since he became Prime, revealing deep loneliness"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.52 × (1 + 0.140) = 6.30
    Final delta: 6.30 × 1 × 1.1 = 6.93
    fear: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 4.33 × (1 + -0.460) = 2.34
    Final delta: 2.34 × 1 × 1.1 = 2.57
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.053) = 3.22
    Final delta: 3.22 × 1 × 1.1 = 3.55

  Stimulant: "The Prime apologizes to Haldric for Asher's betrayal during the test, admitting it was not supposed to happen that way"
    Event: moral_cue | Subject: family | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    disgust: base=20 × trig=0.85 × weight=0.4 → raw=6.80
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 6.80 × (1 + 0.000) = 6.80
    Final delta: 6.80 × 0.9 × 1.1 = 6.73
    anger: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.053) = 4.83
    Final delta: 4.83 × 0.9 × 1.1 = 4.79
    sadness: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.31 × (1 + 0.140) = 3.78
    Final delta: 3.78 × 0.9 × 1.1 = 3.74

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(0.40) = 0.40
    sadness: carry(5.3 × 0.2) + delta(17.60) = 18.66
    anger: carry(8.7 × 0.2) + delta(14.84) = 16.58
    fear: carry(1.8 × 0.2) + delta(10.16) = 10.53
    disgust: carry(1.2 × 0.2) + delta(6.73) = 6.97
    trust: carry(0.0 × 0.2) + delta(0.84) = 0.84
    anticipation: carry(0.6 × 0.2) + delta(2.00) = 2.11

=== Chapter 10 ===
Stimulants this chapter: 2

  Stimulant: "The Prime orchestrates the capture of rebel Bresdin by letting Haldric unknowingly serve as bait, then cuts off Bresdin's hand with a sword"
    Event: threat | Subject: authority | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: enemy_caused → ×0.8
    fear: base=17 × trig=1 × weight=0.7 → raw=11.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 11.90 × (1 + -0.460) = 6.43
    Final delta: 6.43 × 0.6 × 0.8 = 3.08
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.6 × 0.8 = 1.82
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.187) = 1.38
    Final delta: 1.38 × 0.6 × 0.8 = 0.66

  Stimulant: "Arthur feels satisfaction watching Hunters admire Haldric, but also disgust, recognizing Haldric as the bridge Asher was supposed to be"
    Event: reminder_cue | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.52 × (1 + 0.140) = 6.30
    Final delta: 6.30 × 0.9 × 1.1 = 6.24
    fear: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 4.33 × (1 + -0.460) = 2.34
    Final delta: 2.34 × 0.9 × 1.1 = 2.32
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.053) = 3.22
    Final delta: 3.22 × 0.9 × 1.1 = 3.19

  Emotion updates:
    sadness: carry(18.7 × 0.2) + delta(6.24) = 9.97
    anger: carry(16.6 × 0.2) + delta(5.01) = 8.33
    fear: carry(10.5 × 0.2) + delta(5.40) = 7.51
    disgust: carry(7.0 × 0.2) + delta(0.00) = 1.39
    trust: carry(0.8 × 0.2) + delta(0.00) = 0.17
    anticipation: carry(2.1 × 0.2) + delta(0.66) = 1.09

=== Chapter 11 ===
Stimulants this chapter: 3

  Stimulant: "The Prime reveals to Haldric that he doesn't know where he went wrong with Asher, admitting his son had everything and threw it away to be a Hunter"
    Event: loss | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.73 × (1 + 0.140) = 8.82
    Final delta: 8.82 × 0.9 × 1.1 = 8.73
    fear: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 2.89 × (1 + -0.460) = 1.56
    Final delta: 1.56 × 0.9 × 1.1 = 1.54
    anger: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.53 × (1 + 0.053) = 1.61
    Final delta: 1.61 × 0.9 × 1.1 = 1.60

  Stimulant: "The Prime tells Haldric "it should have been you" as a Hunter, implicitly acknowledging Asher's failure and his own parenting failure"
    Event: failure | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.52 × (1 + 0.140) = 6.30
    Final delta: 6.30 × 0.9 × 1.1 = 6.24
    fear: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 4.33 × (1 + -0.460) = 2.34
    Final delta: 2.34 × 0.9 × 1.1 = 2.32
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.053) = 3.22
    Final delta: 3.22 × 0.9 × 1.1 = 3.19

  Stimulant: "The Prime names Haldric as Heir Archon, publicly choosing someone else's child over his own son as his successor"
    Event: moral_cue | Subject: family | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    disgust: base=20 × trig=1 × weight=0.4 → raw=8.00
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 8.00 × (1 + 0.000) = 8.00
    Final delta: 8.00 × 0.9 × 1.1 = 7.92
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.053) = 5.69
    Final delta: 5.69 × 0.9 × 1.1 = 5.63
    sadness: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.90 × (1 + 0.140) = 4.45
    Final delta: 4.45 × 0.9 × 1.1 = 4.40

  Emotion updates:
    sadness: carry(10.0 × 0.2) + delta(19.37) = 21.36
    anger: carry(8.3 × 0.2) + delta(10.42) = 12.08
    fear: carry(7.5 × 0.2) + delta(3.86) = 5.36
    disgust: carry(1.4 × 0.2) + delta(7.92) = 8.20
    anticipation: carry(1.1 × 0.2) + delta(0.00) = 0.22

=== Chapter 12 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(21.4 × 0.2) + delta(0.00) = 4.27
    anger: carry(12.1 × 0.2) + delta(0.00) = 2.42
    fear: carry(5.4 × 0.2) + delta(0.00) = 1.07
    disgust: carry(8.2 × 0.2) + delta(0.00) = 1.64

=== Chapter 13 ===
Stimulants this chapter: 3

  Stimulant: "The Prime catches Haldric snooping in his office looking through classified documents, feeling deep disappointment at the betrayal of trust"
    Event: betrayal | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.4 → raw=5.20
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.20 × (1 + 0.140) = 5.93
    Final delta: 5.93 × 0.8 × 1.3 = 6.17
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.053) = 5.69
    Final delta: 5.69 × 0.8 × 1.3 = 5.92
    trust (COLLAPSE): base=7 × trig=1 × weight=0.3 → raw=2.10
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 2.10 × (1 + -0.280) = 1.51
    Final delta: 1.51 × 0.8 × 1.3 = 1.57
    → Trust COLLAPSED by -1.57

  Stimulant: "The Prime tells Haldric "My fault for believing in you," expressing that even his chosen successor has turned against him"
    Event: rejection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.6 → raw=7.80
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.80 × (1 + 0.140) = 8.89
    Final delta: 8.89 × 0.8 × 1.3 = 9.25
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.8 × 1.3 = 3.94
    fear: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 3.40 × (1 + -0.460) = 1.84
    Final delta: 1.84 × 0.8 × 1.3 = 1.91

  Stimulant: "The Prime laments that the whole city blames him for everything and he thought Haldric would be different, revealing his isolation"
    Event: injustice | Subject: self | Source: world_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    anger: base=18 × trig=0.85 × weight=0.5 → raw=7.65
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 7.65 × (1 + 0.053) = 8.06
    Final delta: 8.06 × 1 × 0.7 = 5.64
    disgust: base=20 × trig=0.85 × weight=0.3 → raw=5.10
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 5.10 × (1 + 0.000) = 5.10
    Final delta: 5.10 × 1 × 0.7 = 3.57
    sadness: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.21 × (1 + 0.140) = 2.52
    Final delta: 2.52 × 1 × 0.7 = 1.76

  Emotion updates:
    sadness: carry(4.3 × 0.2) + delta(17.18) = 18.03
    anger: carry(2.4 × 0.2) + delta(15.50) = 15.98
    fear: carry(1.1 × 0.2) + delta(1.91) = 2.12
    disgust: carry(1.6 × 0.2) + delta(3.57) = 3.90

=== Chapter 14 ===
Stimulants this chapter: 8

  Stimulant: "The Prime walks with heavy, exhausted strides when no one of importance is watching, revealing the burden of carrying the city alone"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.6 × weight=0.5 → raw=3.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.90 × (1 + 0.140) = 4.45
    Final delta: 4.45 × 1 × 1.1 = 4.89
    fear: base=17 × trig=0.6 × weight=0.3 → raw=3.06
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 3.06 × (1 + -0.460) = 1.65
    Final delta: 1.65 × 1 × 1.1 = 1.82
    anger: base=18 × trig=0.6 × weight=0.2 → raw=2.16
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 2.16 × (1 + 0.053) = 2.28
    Final delta: 2.28 × 1 × 1.1 = 2.50

  Stimulant: "The Prime flushes with rage when the Noble Quarter's original meaning is twisted by rumors into a sign of privilege and corruption"
    Event: injustice | Subject: self | Source: world_caused | Domain: status
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    anger: base=18 × trig=0.85 × weight=0.5 → raw=7.65
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 7.65 × (1 + 0.053) = 8.06
    Final delta: 8.06 × 1 × 0.7 = 5.64
    disgust: base=20 × trig=0.85 × weight=0.3 → raw=5.10
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 5.10 × (1 + 0.000) = 5.10
    Final delta: 5.10 × 1 × 0.7 = 3.57
    sadness: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.21 × (1 + 0.140) = 2.52
    Final delta: 2.52 × 1 × 0.7 = 1.76

  Stimulant: "The Prime reveals Ravour is dying and acclimation is getting harder each year, confessing the species faces extinction"
    Event: threat | Subject: group | Source: world_caused | Domain: future_security
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    fear: base=17 × trig=1 × weight=0.7 → raw=11.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 11.90 × (1 + -0.460) = 6.43
    Final delta: 6.43 × 0.7 × 0.7 = 3.15
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.7 × 0.7 = 1.86
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.187) = 1.38
    Final delta: 1.38 × 0.7 × 0.7 = 0.68

  Stimulant: "The Prime reveals the noble beasts have learned to reproduce, meaning ten have become eleven, an existential threat he cannot stop"
    Event: danger_cue | Subject: group | Source: world_caused | Domain: future_security
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    fear: base=17 × trig=1 × weight=0.7 → raw=11.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 11.90 × (1 + -0.460) = 6.43
    Final delta: 6.43 × 0.7 × 0.7 = 3.15
    anticipation: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.40 × (1 + -0.187) = 2.77
    Final delta: 2.77 × 0.7 × 0.7 = 1.36
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.053) = 1.90
    Final delta: 1.90 × 0.7 × 0.7 = 0.93

  Stimulant: "The Prime admits he has tried to form alliances with other cities to find the portals but they either don't believe him or suspect invasion"
    Event: failure | Subject: group | Source: world_caused | Domain: future_security
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    sadness: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.52 × (1 + 0.140) = 6.30
    Final delta: 6.30 × 0.7 × 0.7 = 3.09
    fear: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 4.33 × (1 + -0.460) = 2.34
    Final delta: 2.34 × 0.7 × 0.7 = 1.15
    anger: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.053) = 3.22
    Final delta: 3.22 × 0.7 × 0.7 = 1.58

  Stimulant: "The Prime confronts the white-haired phantom girl, telling her he will never forgive her and that they are not allies"
    Event: moral_cue | Subject: stranger | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: stranger → ×0.3
    Source mult: self_caused → ×1.1
    disgust: base=20 × trig=0.6 × weight=0.4 → raw=4.80
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 4.80 × (1 + 0.000) = 4.80
    Final delta: 4.80 × 0.3 × 1.1 = 1.58
    anger: base=18 × trig=0.6 × weight=0.3 → raw=3.24
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.24 × (1 + 0.053) = 3.41
    Final delta: 3.41 × 0.3 × 1.1 = 1.13
    sadness: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.34 × (1 + 0.140) = 2.67
    Final delta: 2.67 × 0.3 × 1.1 = 0.88

  Stimulant: "The phantom girl accuses The Prime of lying by omission to Haldric, cutting through his justifications"
    Event: insult | Subject: self | Source: enemy_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=18 × trig=0.85 × weight=0.6 → raw=9.18
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.18 × (1 + 0.053) = 9.67
    Final delta: 9.67 × 1 × 0.8 = 7.74
    disgust: base=20 × trig=0.85 × weight=0.2 → raw=3.40
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 3.40 × (1 + 0.000) = 3.40
    Final delta: 3.40 × 1 × 0.8 = 2.72
    sadness: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.21 × (1 + 0.140) = 2.52
    Final delta: 2.52 × 1 × 0.8 = 2.02

  Stimulant: "The Prime confesses "The world needs you, Haldric. It needs a kind heart. I will not suffice," admitting his own moral insufficiency"
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=20 × trig=0.85 × weight=0.4 → raw=6.80
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 6.80 × (1 + 0.000) = 6.80
    Final delta: 6.80 × 1 × 1.1 = 7.48
    anger: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.053) = 4.83
    Final delta: 4.83 × 1 × 1.1 = 5.32
    sadness: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.31 × (1 + 0.140) = 3.78
    Final delta: 3.78 × 1 × 1.1 = 4.16

  Emotion updates:
    sadness: carry(18.0 × 0.2) + delta(16.79) = 20.40
    anger: carry(16.0 × 0.2) + delta(26.69) = 29.89
    fear: carry(2.1 × 0.2) + delta(9.26) = 9.69
    disgust: carry(3.9 × 0.2) + delta(15.35) = 16.13
    anticipation: carry(0.0 × 0.2) + delta(2.03) = 2.03

=== Chapter 15 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(20.4 × 0.2) + delta(0.00) = 4.08
    anger: carry(29.9 × 0.2) + delta(0.00) = 5.98
    fear: carry(9.7 × 0.2) + delta(0.00) = 1.94
    disgust: carry(16.1 × 0.2) + delta(0.00) = 3.23
    anticipation: carry(2.0 × 0.2) + delta(0.00) = 0.41

=== Chapter 16 ===
Stimulants this chapter: 3

  Stimulant: "The Prime kills the sadistic scientist who was torturing Praew, stabbing a sword through his throat with visible disgust"
    Event: moral_cue | Subject: stranger | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: self_caused → ×1.1
    disgust: base=20 × trig=1 × weight=0.4 → raw=8.00
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 8.00 × (1 + 0.000) = 8.00
    Final delta: 8.00 × 0.3 × 1.1 = 2.64
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.053) = 5.69
    Final delta: 5.69 × 0.3 × 1.1 = 1.88
    sadness: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.90 × (1 + 0.140) = 4.45
    Final delta: 4.45 × 0.3 × 1.1 = 1.47

  Stimulant: "The Prime's hands tremble with awe as he sees the Mythical BoltStone successfully embed into Praew, whispering "Finally, after fourteen years""
    Event: success | Subject: group | Source: self_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    joy: base=5 × trig=1 × weight=0.7 → raw=3.50
    Trait modifiers for joy (total: -0.200):
  empathyBaseline(30/75 × 0.2) = +0.080 [Empathic joy — shares in others' happiness]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 3.50 × (1 + -0.200) = 2.80
    Final delta: 2.80 × 0.7 × 1.1 = 2.16
    trust: base=7 × trig=1 × weight=0.2 → raw=1.40
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 1.40 × (1 + -0.280) = 1.01
    Final delta: 1.01 × 0.7 × 1.1 = 0.78
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.187) = 1.38
    Final delta: 1.38 × 0.7 × 1.1 = 1.06

  Stimulant: "Praew begs The Prime not to use the recorrection program on her, asking "Why must everything be decided for me?" as he overrides her will"
    Event: moral_cue | Subject: stranger | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: self_caused → ×1.1
    disgust: base=20 × trig=1 × weight=0.4 → raw=8.00
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 8.00 × (1 + 0.000) = 8.00
    Final delta: 8.00 × 0.3 × 1.1 = 2.64
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.053) = 5.69
    Final delta: 5.69 × 0.3 × 1.1 = 1.88
    sadness: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.90 × (1 + 0.140) = 4.45
    Final delta: 4.45 × 0.3 × 1.1 = 1.47

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(2.16) = 2.16
    sadness: carry(4.1 × 0.2) + delta(2.93) = 3.75
    anger: carry(6.0 × 0.2) + delta(3.75) = 4.95
    fear: carry(1.9 × 0.2) + delta(0.00) = 0.39
    disgust: carry(3.2 × 0.2) + delta(5.28) = 5.93
    trust: carry(0.0 × 0.2) + delta(0.78) = 0.78
    anticipation: carry(0.4 × 0.2) + delta(1.06) = 1.15

=== Chapter 17 ===
Stimulants this chapter: 3

  Stimulant: "Renwick draws a sword on The Prime after witnessing the embedding, but The Prime uses a voice command to force Renwick to stand down and obey"
    Event: threat | Subject: stranger | Source: enemy_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: enemy_caused → ×0.8
    fear: base=17 × trig=1 × weight=0.7 → raw=11.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 11.90 × (1 + -0.460) = 6.43
    Final delta: 6.43 × 0.3 × 0.8 = 1.54
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.3 × 0.8 = 0.91
    anticipation: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.187) = 1.38
    Final delta: 1.38 × 0.3 × 0.8 = 0.33

  Stimulant: "The Prime warns that Renwick has "doomed us all" by threatening him instead of supporting the embedding that could save the species"
    Event: danger_cue | Subject: group | Source: ally_caused | Domain: future_security
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: ally_caused → ×1.3
    fear: base=17 × trig=0.85 × weight=0.7 → raw=10.11
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 10.11 × (1 + -0.460) = 5.46
    Final delta: 5.46 × 0.7 × 1.3 = 4.97
    anticipation: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 2.89 × (1 + -0.187) = 2.35
    Final delta: 2.35 × 0.7 × 1.3 = 2.14
    anger: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.53 × (1 + 0.053) = 1.61
    Final delta: 1.61 × 0.7 × 1.3 = 1.47

  Stimulant: "Haldric releases every prisoner in the city jail as a distraction, causing chaos, murder, and destruction throughout Stormhaven"
    Event: betrayal | Subject: friend | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.4 → raw=5.20
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.20 × (1 + 0.140) = 5.93
    Final delta: 5.93 × 0.8 × 1.3 = 6.17
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.053) = 5.69
    Final delta: 5.69 × 0.8 × 1.3 = 5.92
    trust (COLLAPSE): base=7 × trig=1 × weight=0.3 → raw=2.10
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 2.10 × (1 + -0.280) = 1.51
    Final delta: 1.51 × 0.8 × 1.3 = 1.57
    → Trust COLLAPSED by -1.57

  Emotion updates:
    joy: carry(2.2 × 0.2) + delta(0.00) = 0.43
    sadness: carry(3.8 × 0.2) + delta(6.17) = 6.92
    anger: carry(4.9 × 0.2) + delta(8.29) = 9.28
    fear: carry(0.4 × 0.2) + delta(6.51) = 6.59
    disgust: carry(5.9 × 0.2) + delta(0.00) = 1.19
    trust: carry(0.8 × 0.2) + delta(-1.57) = -1.42
    anticipation: carry(1.1 × 0.2) + delta(2.47) = 2.70

=== Chapter 18 ===
Stimulants this chapter: 7

  Stimulant: "Godric ties up The Prime and rescues Praew, calling it a crime punishable by death while The Prime is helpless on the floor"
    Event: humiliation | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.4 → raw=5.20
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.20 × (1 + 0.140) = 5.93
    Final delta: 5.93 × 1 × 1.3 = 7.71
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.053) = 5.69
    Final delta: 5.69 × 1 × 1.3 = 7.39
    disgust: base=20 × trig=1 × weight=0.3 → raw=6.00
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 6.00 × (1 + 0.000) = 6.00
    Final delta: 6.00 × 1 × 1.3 = 7.80

  Stimulant: "The Prime screams at Godric to bring Praew back, threatening to hunt him to the ends of the world, losing all composure"
    Event: loss | Subject: group | Source: ally_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.10 × (1 + 0.140) = 10.37
    Final delta: 10.37 × 0.7 × 1.3 = 9.44
    fear: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 3.40 × (1 + -0.460) = 1.84
    Final delta: 1.84 × 0.7 × 1.3 = 1.67
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.053) = 1.90
    Final delta: 1.90 × 0.7 × 1.3 = 1.73

  Stimulant: "Godric says "Goodbye, brother" as he takes Praew away, severing his familial bond with Arthur permanently"
    Event: separation | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.6 → raw=7.80
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.80 × (1 + 0.140) = 8.89
    Final delta: 8.89 × 0.9 × 1.3 = 10.40
    fear: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 3.40 × (1 + -0.460) = 1.84
    Final delta: 1.84 × 0.9 × 1.3 = 2.15
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.9 × 1.3 = 4.44

  Stimulant: "The Prime beats Haldric viciously, kicking him repeatedly on the floor, screaming "You doomed us all" and "Why must you ruin everything?""
    Event: harm | Subject: friend | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    fear: base=17 × trig=1 × weight=0.5 → raw=8.50
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 8.50 × (1 + -0.460) = 4.59
    Final delta: 4.59 × 0.8 × 1.1 = 4.04
    anger: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.053) = 5.69
    Final delta: 5.69 × 0.8 × 1.1 = 5.01
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.140) = 2.96
    Final delta: 2.96 × 0.8 × 1.1 = 2.61

  Stimulant: "The Prime learns that Haldric freed Bresdin, his most dangerous enemy, causing Arthur visible fear for the first time"
    Event: danger_cue | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    fear: base=17 × trig=1 × weight=0.7 → raw=11.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 11.90 × (1 + -0.460) = 6.43
    Final delta: 6.43 × 1 × 1.3 = 8.35
    anticipation: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.40 × (1 + -0.187) = 2.77
    Final delta: 2.77 × 1 × 1.3 = 3.59
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.053) = 1.90
    Final delta: 1.90 × 1 × 1.3 = 2.46

  Stimulant: "Haldric calls out "Father, please!" to stop The Prime from kicking him, and Arthur freezes, momentarily confronted with the parental bond he craves"
    Event: reminder_cue | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.50 × (1 + 0.140) = 7.41
    Final delta: 7.41 × 0.9 × 1.3 = 8.67
    fear: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 5.10 × (1 + -0.460) = 2.75
    Final delta: 2.75 × 0.9 × 1.3 = 3.22
    anger: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.053) = 3.79
    Final delta: 3.79 × 0.9 × 1.3 = 4.44

  Stimulant: "The Prime must imprison his own brother Godric as a result of the night's events, losing his last remaining familial ally"
    Event: loss | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.10 × (1 + 0.140) = 10.37
    Final delta: 10.37 × 0.9 × 1.1 = 10.27
    fear: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 3.40 × (1 + -0.460) = 1.84
    Final delta: 1.84 × 0.9 × 1.1 = 1.82
    anger: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.053) = 1.90
    Final delta: 1.90 × 0.9 × 1.1 = 1.88

  Suppression applied:
  Suppression: sadness(56.0) suppresses joy by -29.46 (60% of sadness delta)
  Suppression: sadness(56.0) suppresses anticipation by -14.73 (30% of sadness delta)
  Suppression: sadness(56.0) suppresses surprise by -9.82 (20% of sadness delta)

  Emotion updates:
    sadness: carry(6.9 × 0.2) + delta(49.10) = 50.48
    anger: carry(9.3 × 0.2) + delta(27.34) = 29.20
    fear: carry(6.6 × 0.2) + delta(21.25) = 22.57
    disgust: carry(1.2 × 0.2) + delta(7.80) = 8.04
    anticipation: carry(2.7 × 0.2) + delta(-11.13) = -10.59
```

### Profile Reasoning

- **emotionalBaseline.joy**: Very low joy sensitivity. Arthur rarely shows genuine happiness. His only moments of warmth are calculated: the paternal smile to Haldric (Ch11), the chuckle at Haldric's bluntness (Ch9). Even these feel measured and strategic. He lives under constant burden.
- **emotionalBaseline.sadness**: Moderate sadness sensitivity. Returns from his first Prime briefing visibly shaken, "bloodshot red" eyes, trembling hands (Ch3). Mourns what he's become: "who in their right mind would want to be the most hated man in the city?" (Ch11). But he buries grief quickly.
- **emotionalBaseline.anger**: Moderate-high anger sensitivity. Slams palm into stone table hard enough to indent it (Ch3). Kicks Haldric repeatedly (Ch18). "Blasted Hunters" escapes as a visceral slur (Ch9). His anger is controlled but when it breaks through, it's terrifying and physical.
- **emotionalBaseline.fear**: Moderate fear sensitivity. Returns "pale" and "shaking" after becoming Prime (Ch3). Fears Bresdin's escape (Ch18). Admits "I fear the story that begins with my end" (Ch17). His deepest fear is human extinction. But he masks fear behind stoicism.
- **emotionalBaseline.disgust**: High disgust sensitivity. Calls the scientist "absolutely deplorable" before killing him (Ch16). Sneers at Bresdin's rebellion, at Hunters' independence, at weakness. "Blasted Hunters" carries genuine contempt. Moral disgust is a primary emotional driver.
- **emotionalBaseline.surprise**: Very low surprise sensitivity. Almost nothing catches him off guard. He anticipated Bresdin's escape (Ch10), knew Haldric was snooping (Ch13). The only genuine surprise is Godric's defection (Ch17-18). He plans for everything.
- **emotionalBaseline.trust**: Very low trust sensitivity. Trusts almost no one. Treats everyone as a potential threat or tool. Even Haldric is partly a strategic asset. His distrust stems from the burden of knowing Ravour's true state and the white-haired girl's manipulation.
- **emotionalBaseline.anticipation**: Moderate anticipation. He plans obsessively: the food shortage rationale, the embedding program, the portal search. "This must be the reason they insisted I reassign the task to Haldric. Just how far ahead can they predict?" (Ch10). Always thinking multiple steps ahead.
- **temperament.patience**: High patience. He endures years of being hated by the city, slowly builds the Noble Quarter, patiently explains his reasoning to Haldric across multiple chapters (Ch11, Ch14). Walks slowly and deliberately. "Every step measured, deliberate" (Ch14). But his patience has limits (the beating in Ch18).
- **temperament.impulsiveness**: Very low impulsiveness. Every action is calculated. He waits for Bresdin at the gate rather than blocking it (Ch10). Plans the embedding program over 14 years. "Each word sharpened before use" (Ch2). The rare impulsive moments (table slam Ch3, beating Ch18) reveal how much pressure he contains.
- **temperament.confrontationalTendency**: Low-moderate. Prefers manipulation and indirect control over direct confrontation. Uses Renwick as a proxy, lets Embedded warriors handle threats. When he confronts directly (killing the scientist Ch16), it's swift and decisive but he avoids it when possible.
- **temperament.agreeableness**: Low agreeableness. Refuses to compromise on the food shortage, the embedding program, or his authority. "I stopped talking and kept building" (Ch14). He doesn't seek approval or consensus. But he shows paternal softness with Haldric.
- **temperament.emotionalContainment**: Very high containment. His emotions slip only in extreme moments: the table indentation (Ch3), "Blasted Hunters" (Ch9), the beating of Haldric (Ch18). "In moments when anyone else might show a flicker of emotion, The Prime became as still and cold as stone" (Ch14). Master of composure.
- **temperament.riskAppetite**: Moderate. He takes calculated risks (the embedding program, choosing Haldric as Heir) but always with contingencies. He won't risk what he can't control. His risk-taking is strategic, never reckless.
- **temperament.curiosity**: Low-moderate. His curiosity is directed toward specific goals: the portals, the mural translations, the embedding research. He's not broadly curious but intensely focused on what serves his mission.
- **temperament.prideSensitivity**: High pride sensitivity. Takes personal offense at Godric's accusations (Ch9). "Lies spread like dye... a permanent mark on your reputation" (Ch14). The disconnect between his self-image as savior and public perception as tyrant clearly wounds him.
- **temperament.shameSensitivity**: Low shame sensitivity. He accepts being hated: "I would rather be despised than watch my people choke to death" (Ch14). He's hardened himself against public judgment. But Haldric's personal betrayal stings: "My fault for believing in you" (Ch13).
- **temperament.empathyBaseline**: Low empathy. He rationalizes enslaving the Fourth Floor, forcibly embedding people, and controlling minds through "necessity." He sees individuals as resources for species survival. His empathy flickers only with Haldric and in memories of young Asher.
- **temperament.dominanceVsDeference**: Highly dominant. Controls the entire city through surveillance, food rationing, hostage-keeping, and the recorrection program. Commands Renwick with voice alone and the boy obeys instantly (Ch17). Defers only to the white-haired girl, and that reluctantly.
- **temperament.adaptabilityVsRigidity**: Rigid. He has committed to a single path (embedding, portal search, species evacuation) and will not deviate. When challenged, he doubles down with more justification rather than reconsidering. His rigidity stems from genuine existential terror.
- **moralStructure.primaryDriver**: Species survival is his absolute moral north star. He will enslave, starve, torture, embed, and mind-control to prevent human extinction. "For the sake of our species, the risk must be taken" (Ch16). Everything is subordinate to this goal.
- **moralStructure.moralRigidity**: High moral rigidity. His utilitarian framework is ironclad. He's locked into "the ends justify the means" and won't accept alternatives. Even when Haldric offers simpler solutions (ration only children), he deflects rather than engage (Ch14).
- **moralStructure.guiltSensitivity**: Low-moderate guilt. He shows flickers: "I am sorry, but I must" (Ch17), the paternal gentleness with Haldric suggests some buried conscience. But he suppresses guilt with elaborate justifications. He's practiced at not feeling it.
- **moralStructure.justificationTendency**: Extremely high justification. Every atrocity has a rationalization: the food shortage prevents acclimation deaths (Ch14), the Noble Quarter is "gratitude not hostages" (Ch14), embedding is "necessity" (Ch16). He constructs airtight logical chains to defend every action.


## Godric

### Emotion Values Per Chapter

```
Ch |    joy |  sadne |  anger |   fear |  disgu |  surpr |  trust |  antic
--------------------------------------------------------------------------
 0 |      0 |     33 |     38 |      8 |      6 |      1 |      0 |      2
 1 |      0 |     33 |     38 |      8 |      6 |      1 |      0 |      2
 2 |      0 |     33 |     38 |      8 |      6 |      1 |      0 |      2
 3 |      0 |      7 |      8 |      2 |      1 |      0 |      0 |      0
 4 |      0 |      7 |     13 |      0 |      5 |      0 |      0 |      0
 5 |      0 |      7 |     13 |      0 |      5 |      0 |      0 |      0
 6 |      0 |      1 |      3 |      1 |      1 |      3 |      0 |      1
 7 |      0 |      1 |      3 |      1 |      1 |      3 |      0 |      1
 8 |      0 |      9 |      7 |      2 |      3 |      1 |      0 |      1
 9 |      0 |     12 |     15 |      2 |      3 |      0 |      0 |      2
10 |      0 |     12 |     15 |      2 |      3 |      0 |      0 |      2
11 |      0 |     12 |     15 |      2 |      3 |      0 |      0 |      2
12 |      0 |     12 |     15 |      2 |      3 |      0 |      0 |      2
13 |      0 |     43 |     36 |      5 |      4 |      0 |      0 |      0
14 |      0 |     43 |     36 |      5 |      4 |      0 |      0 |      0
15 |      0 |     10 |     10 |      2 |      1 |      0 |      0 |      0
16 |      0 |      2 |      7 |      4 |      0 |      1 |      0 |      2
17 |      0 |     17 |     15 |      1 |      3 |      0 |      0 |      0
18 |      0 |     69 |     40 |      4 |      8 |      0 |      0 |      0
```

### Calculation Breakdown

```

=== Chapter 0 ===
Stimulants this chapter: 11

  Stimulant: "Godric faces Boltrax alone at Stormhaven's gates knowing he will likely die, as no one else has the spine to stand"
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=7 × trig=1 × weight=0.7 → raw=4.90
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 4.90 × (1 + -0.560) = 2.16
    Final delta: 2.16 × 1 × 0.7 = 1.51
    anticipation: base=10 × trig=1 × weight=0.2 → raw=2.00
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 2.00 × (1 + -0.213) = 1.57
    Final delta: 1.57 × 1 × 0.7 = 1.10
    anger: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.70 × (1 + 0.147) = 1.95
    Final delta: 1.95 × 1 × 0.7 = 1.36

  Stimulant: "Godric suppresses his fear before the battle, forcing himself to abandon the instinct that would not help when retreat is impossible"
    Event: threat | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=7 × trig=1 × weight=0.7 → raw=4.90
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 4.90 × (1 + -0.560) = 2.16
    Final delta: 2.16 × 1 × 1.1 = 2.37
    anger: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.40 × (1 + 0.147) = 3.90
    Final delta: 3.90 × 1 × 1.1 = 4.29
    anticipation: base=10 × trig=1 × weight=0.1 → raw=1.00
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.00 × (1 + -0.213) = 0.79
    Final delta: 0.79 × 1 × 1.1 = 0.87

  Stimulant: "Boltrax strikes Godric with bone-crushing force, sending him flying into the gates and leaving him unable to reach his dropped spear"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=7 × trig=1 × weight=0.5 → raw=3.50
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.50 × (1 + -0.560) = 1.54
    Final delta: 1.54 × 1 × 0.8 = 1.23
    anger: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.10 × (1 + 0.147) = 5.85
    Final delta: 5.85 × 1 × 0.8 = 4.68
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.387) = 3.61
    Final delta: 3.61 × 1 × 0.8 = 2.88

  Stimulant: "Godric drops his spear during combat and berates himself for the rookie mistake, believing he will not survive"
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.50 × (1 + 0.387) = 9.01
    Final delta: 9.01 × 1 × 1.1 = 9.91
    fear: base=7 × trig=1 × weight=0.3 → raw=2.10
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.10 × (1 + -0.560) = 0.92
    Final delta: 0.92 × 1 × 1.1 = 1.02
    anger: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.40 × (1 + 0.147) = 3.90
    Final delta: 3.90 × 1 × 1.1 = 4.29

  Stimulant: "An eight-year-old boy (Srevlis) walks calmly toward the mythical beast, ignoring Godric's desperate orders to get back inside"
    Event: surprise_reveal | Subject: stranger | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: world_caused → ×0.7
    surprise: base=5 × trig=1 × weight=0.7 → raw=3.50
    Trait modifiers for surprise (total: -0.337):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(40/75 × -0.2) = -0.107 [Adaptable = recovers from surprise faster]
  impulsiveness(25/75 × 0.15) = +0.050 [Impulsive = reacts more to surprises]
    Modified delta: 3.50 × (1 + -0.337) = 2.32
    Final delta: 2.32 × 0.3 × 0.7 = 0.49
    fear: base=7 × trig=1 × weight=0.15 → raw=1.05
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.05 × (1 + -0.560) = 0.46
    Final delta: 0.46 × 0.3 × 0.7 = 0.10
    anticipation: base=10 × trig=1 × weight=0.15 → raw=1.50
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.50 × (1 + -0.213) = 1.18
    Final delta: 1.18 × 0.3 × 0.7 = 0.25

  Stimulant: "Godric watches in awe as Srevlis fights with impossible mastery, wielding the spear as if born to it, surpassing anything Godric has ever seen"
    Event: surprise_reveal | Subject: stranger | Source: world_caused | Domain: competence
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: stranger → ×0.3
    Source mult: world_caused → ×0.7
    surprise: base=5 × trig=0.85 × weight=0.7 → raw=2.97
    Trait modifiers for surprise (total: -0.337):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(40/75 × -0.2) = -0.107 [Adaptable = recovers from surprise faster]
  impulsiveness(25/75 × 0.15) = +0.050 [Impulsive = reacts more to surprises]
    Modified delta: 2.97 × (1 + -0.337) = 1.97
    Final delta: 1.97 × 0.3 × 0.7 = 0.41
    fear: base=7 × trig=0.85 × weight=0.15 → raw=0.89
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 0.89 × (1 + -0.560) = 0.39
    Final delta: 0.39 × 0.3 × 0.7 = 0.08
    anticipation: base=10 × trig=0.85 × weight=0.15 → raw=1.27
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.27 × (1 + -0.213) = 1.00
    Final delta: 1.00 × 0.3 × 0.7 = 0.21

  Stimulant: "Guards drag Godric inside and slam the gates shut against his will, cutting him off from the fight and the boy"
    Event: constraint | Subject: self | Source: ally_caused | Domain: autonomy
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=17 × trig=1 × weight=0.5 → raw=8.50
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.50 × (1 + 0.147) = 9.75
    Final delta: 9.75 × 1 × 1.3 = 12.67
    fear: base=7 × trig=1 × weight=0.3 → raw=2.10
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.10 × (1 + -0.560) = 0.92
    Final delta: 0.92 × 1 × 1.3 = 1.20
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.387) = 3.61
    Final delta: 3.61 × 1 × 1.3 = 4.69

  Stimulant: "Srevlis rejects Godric's offer of a home in Stormhaven and says "Do you think you're the only victim?" before disappearing into the storm"
    Event: rejection | Subject: stranger | Source: world_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: stranger → ×0.3
    Source mult: world_caused → ×0.7
    sadness: base=13 × trig=0.85 × weight=0.6 → raw=6.63
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.63 × (1 + 0.387) = 9.19
    Final delta: 9.19 × 0.3 × 0.7 = 1.93
    anger: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.89 × (1 + 0.147) = 3.31
    Final delta: 3.31 × 0.3 × 0.7 = 0.70
    fear: base=7 × trig=0.85 × weight=0.2 → raw=1.19
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.19 × (1 + -0.560) = 0.52
    Final delta: 0.52 × 0.3 × 0.7 = 0.11

  Stimulant: "Godric is left humiliated by the realization that a wild-born eight-year-old did what he, a veteran Hunter, could not"
    Event: humiliation | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.85 × weight=0.4 → raw=4.42
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.42 × (1 + 0.387) = 6.13
    Final delta: 6.13 × 1 × 1.1 = 6.74
    anger: base=17 × trig=0.85 × weight=0.3 → raw=4.33
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.33 × (1 + 0.147) = 4.97
    Final delta: 4.97 × 1 × 1.1 = 5.47
    disgust: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 3.82 × (1 + -0.060) = 3.60
    Final delta: 3.60 × 1 × 1.1 = 3.96

  Stimulant: "Srevlis's words "Do you think you're the only victim?" gnaw at Godric, carving a permanent place in his mind and reminding him of his failure"
    Event: reminder_cue | Subject: self | Source: world_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    sadness: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.52 × (1 + 0.387) = 7.66
    Final delta: 7.66 × 1 × 0.7 = 5.36
    fear: base=7 × trig=0.85 × weight=0.3 → raw=1.78
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.78 × (1 + -0.560) = 0.79
    Final delta: 0.79 × 1 × 0.7 = 0.55
    anger: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.89 × (1 + 0.147) = 3.31
    Final delta: 3.31 × 1 × 0.7 = 2.32

  Stimulant: "Godric finds renewed purpose from the encounter with Srevlis, recommitting to fight and protect others"
    Event: moral_cue | Subject: principle | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: principle → ×0.5
    Source mult: self_caused → ×1.1
    disgust: base=15 × trig=0.6 × weight=0.4 → raw=3.60
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 3.60 × (1 + -0.060) = 3.38
    Final delta: 3.38 × 0.5 × 1.1 = 1.86
    anger: base=17 × trig=0.6 × weight=0.3 → raw=3.06
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.147) = 3.51
    Final delta: 3.51 × 0.5 × 1.1 = 1.93
    sadness: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.34 × (1 + 0.387) = 3.24
    Final delta: 3.24 × 0.5 × 1.1 = 1.78

  Emotion updates:
    sadness: carry(0.0 × 0.2) + delta(33.31) = 33.31
    anger: carry(0.0 × 0.2) + delta(37.70) = 37.70
    fear: carry(0.0 × 0.2) + delta(8.17) = 8.17
    disgust: carry(0.0 × 0.2) + delta(5.82) = 5.82
    surprise: carry(0.0 × 0.2) + delta(0.90) = 0.90
    anticipation: carry(0.0 × 0.2) + delta(2.43) = 2.43

=== Chapter 1 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 2 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 3 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(33.3 × 0.2) + delta(0.00) = 6.66
    anger: carry(37.7 × 0.2) + delta(0.00) = 7.54
    fear: carry(8.2 × 0.2) + delta(0.00) = 1.63
    disgust: carry(5.8 × 0.2) + delta(0.00) = 1.16
    surprise: carry(0.9 × 0.2) + delta(0.00) = 0.18
    anticipation: carry(2.4 × 0.2) + delta(0.00) = 0.49

=== Chapter 4 ===
Stimulants this chapter: 2

  Stimulant: "Praew accidentally calls him "Stone Face" out loud in front of the whole class, prompting him to adopt the nickname as his title"
    Event: insult | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=0 imm=2 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=17 × trig=0.6 × weight=0.6 → raw=6.12
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.12 × (1 + 0.147) = 7.02
    Final delta: 7.02 × 1 × 1.3 = 9.12
    disgust: base=15 × trig=0.6 × weight=0.2 → raw=1.80
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 1.80 × (1 + -0.060) = 1.69
    Final delta: 1.69 × 1 × 1.3 = 2.20
    sadness: base=13 × trig=0.6 × weight=0.2 → raw=1.56
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 1.56 × (1 + 0.387) = 2.16
    Final delta: 2.16 × 1 × 1.3 = 2.81

  Stimulant: "Godric confronts the recruits about their failure at the Hunter test and tells them to get over it, channeling his own understanding of purpose and second chances"
    Event: moral_cue | Subject: group | Source: self_caused | Domain: morality
    Trigger: stakes=1 imm=1 cert=2 → total=4 → Medium (×0.6)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    disgust: base=15 × trig=0.6 × weight=0.4 → raw=3.60
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 3.60 × (1 + -0.060) = 3.38
    Final delta: 3.38 × 0.7 × 1.1 = 2.61
    anger: base=17 × trig=0.6 × weight=0.3 → raw=3.06
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.147) = 3.51
    Final delta: 3.51 × 0.7 × 1.1 = 2.70
    sadness: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.34 × (1 + 0.387) = 3.24
    Final delta: 3.24 × 0.7 × 1.1 = 2.50

  Emotion updates:
    sadness: carry(6.7 × 0.2) + delta(5.31) = 6.64
    anger: carry(7.5 × 0.2) + delta(11.82) = 13.33
    fear: carry(1.6 × 0.2) + delta(0.00) = 0.33
    disgust: carry(1.2 × 0.2) + delta(4.81) = 5.04

=== Chapter 5 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 6 ===
Stimulants this chapter: 1

  Stimulant: "Mai reveals to the students that their instructor "Stone Face" is actually Silverwing Godric, the Mythical Beast Hunter, against his wishes"
    Event: surprise_reveal | Subject: self | Source: ally_caused | Domain: autonomy
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    surprise: base=5 × trig=0.85 × weight=0.7 → raw=2.97
    Trait modifiers for surprise (total: -0.337):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(40/75 × -0.2) = -0.107 [Adaptable = recovers from surprise faster]
  impulsiveness(25/75 × 0.15) = +0.050 [Impulsive = reacts more to surprises]
    Modified delta: 2.97 × (1 + -0.337) = 1.97
    Final delta: 1.97 × 1 × 1.3 = 2.57
    fear: base=7 × trig=0.85 × weight=0.15 → raw=0.89
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 0.89 × (1 + -0.560) = 0.39
    Final delta: 0.39 × 1 × 1.3 = 0.51
    anticipation: base=10 × trig=0.85 × weight=0.15 → raw=1.27
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.27 × (1 + -0.213) = 1.00
    Final delta: 1.00 × 1 × 1.3 = 1.30

  Emotion updates:
    sadness: carry(6.6 × 0.2) + delta(0.00) = 1.33
    anger: carry(13.3 × 0.2) + delta(0.00) = 2.67
    fear: carry(0.3 × 0.2) + delta(0.51) = 0.58
    disgust: carry(5.0 × 0.2) + delta(0.00) = 1.01
    surprise: carry(0.0 × 0.2) + delta(2.57) = 2.57
    anticipation: carry(0.1 × 0.2) + delta(1.30) = 1.32

=== Chapter 7 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 8 ===
Stimulants this chapter: 3

  Stimulant: "Godric reveals his three territory marks (Boltrax wing, Tarnox horns, bite mark) to the class, exposing his deeply personal battle scars"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.6 × weight=0.5 → raw=3.90
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.90 × (1 + 0.387) = 5.41
    Final delta: 5.41 × 1 × 1.1 = 5.95
    fear: base=7 × trig=0.6 × weight=0.3 → raw=1.26
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.26 × (1 + -0.560) = 0.55
    Final delta: 0.55 × 1 × 1.1 = 0.61
    anger: base=17 × trig=0.6 × weight=0.2 → raw=2.04
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.04 × (1 + 0.147) = 2.34
    Final delta: 2.34 × 1 × 1.1 = 2.57

  Stimulant: "Students look at Godric with hero worship after seeing his marks, and he snaps at them that there is no glory in death"
    Event: moral_cue | Subject: group | Source: self_caused | Domain: morality
    Trigger: stakes=1 imm=1 cert=2 → total=4 → Medium (×0.6)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    disgust: base=15 × trig=0.6 × weight=0.4 → raw=3.60
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 3.60 × (1 + -0.060) = 3.38
    Final delta: 3.38 × 0.7 × 1.1 = 2.61
    anger: base=17 × trig=0.6 × weight=0.3 → raw=3.06
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.147) = 3.51
    Final delta: 3.51 × 0.7 × 1.1 = 2.70
    sadness: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.34 × (1 + 0.387) = 3.24
    Final delta: 3.24 × 0.7 × 1.1 = 2.50

  Stimulant: "Godric overhears Praew and Wannii arguing about the investigation near a government facility and warns them with a veiled threat about letting stones slip"
    Event: danger_cue | Subject: group | Source: self_caused | Domain: safety
    Trigger: stakes=2 imm=1 cert=1 → total=4 → Medium (×0.6)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    fear: base=7 × trig=0.6 × weight=0.7 → raw=2.94
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.94 × (1 + -0.560) = 1.29
    Final delta: 1.29 × 0.7 × 1.1 = 1.00
    anticipation: base=10 × trig=0.6 × weight=0.2 → raw=1.20
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.20 × (1 + -0.213) = 0.94
    Final delta: 0.94 × 0.7 × 1.1 = 0.73
    anger: base=17 × trig=0.6 × weight=0.1 → raw=1.02
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.02 × (1 + 0.147) = 1.17
    Final delta: 1.17 × 0.7 × 1.1 = 0.90

  Emotion updates:
    sadness: carry(1.3 × 0.2) + delta(8.45) = 8.71
    anger: carry(2.7 × 0.2) + delta(6.18) = 6.71
    fear: carry(0.6 × 0.2) + delta(1.61) = 1.72
    disgust: carry(1.0 × 0.2) + delta(2.61) = 2.81
    surprise: carry(2.6 × 0.2) + delta(0.00) = 0.51
    anticipation: carry(1.3 × 0.2) + delta(0.73) = 0.99

=== Chapter 9 ===
Stimulants this chapter: 3

  Stimulant: "Godric is unusually agitated and grouchy in class, stomping and slamming his fist on the desk, hinting at internal turmoil after his confrontation with The Prime"
    Event: obstacle | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=17 × trig=0.6 × weight=0.4 → raw=4.08
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.08 × (1 + 0.147) = 4.68
    Final delta: 4.68 × 1 × 1 = 4.68
    anticipation: base=10 × trig=0.6 × weight=0.3 → raw=1.80
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.80 × (1 + -0.213) = 1.42
    Final delta: 1.42 × 1 × 1 = 1.42
    fear: base=7 × trig=0.6 × weight=0.3 → raw=1.26
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.26 × (1 + -0.560) = 0.55
    Final delta: 0.55 × 1 × 1 = 0.55

  Stimulant: "Godric confronts The Prime Archon in a furious argument, shouting about what The Prime is "doing to them" and threatening him"
    Event: injustice | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    anger: base=17 × trig=0.85 × weight=0.5 → raw=7.22
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 7.22 × (1 + 0.147) = 8.28
    Final delta: 8.28 × 0.7 × 1 = 5.80
    disgust: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 3.82 × (1 + -0.060) = 3.60
    Final delta: 3.60 × 0.7 × 1 = 2.52
    sadness: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.21 × (1 + 0.387) = 3.06
    Final delta: 3.06 × 0.7 × 1 = 2.15

  Stimulant: "Godric storms out of The Prime's office with clenched fists, visibly disheveled, after the confrontation fails to resolve his concerns"
    Event: failure | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    sadness: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.52 × (1 + 0.387) = 7.66
    Final delta: 7.66 × 1 × 1 = 7.66
    fear: base=7 × trig=0.85 × weight=0.3 → raw=1.78
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.78 × (1 + -0.560) = 0.79
    Final delta: 0.79 × 1 × 1 = 0.79
    anger: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.89 × (1 + 0.147) = 3.31
    Final delta: 3.31 × 1 × 1 = 3.31

  Emotion updates:
    sadness: carry(8.7 × 0.2) + delta(9.81) = 11.55
    anger: carry(6.7 × 0.2) + delta(13.79) = 15.13
    fear: carry(1.7 × 0.2) + delta(1.34) = 1.68
    disgust: carry(2.8 × 0.2) + delta(2.52) = 3.08
    surprise: carry(0.5 × 0.2) + delta(0.00) = 0.10
    anticipation: carry(1.0 × 0.2) + delta(1.42) = 1.61

=== Chapter 10 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 11 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 12 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 13 ===
Stimulants this chapter: 5

  Stimulant: "Mai reveals Godric's former title "Madman Godric, the Deadly Scientist" from the Ghost operatives, striking a deeply personal nerve"
    Event: insult | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=17 × trig=1 × weight=0.6 → raw=10.20
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 10.20 × (1 + 0.147) = 11.70
    Final delta: 11.70 × 1 × 1.3 = 15.20
    disgust: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 3.00 × (1 + -0.060) = 2.82
    Final delta: 2.82 × 1 × 1.3 = 3.67
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.387) = 3.61
    Final delta: 3.61 × 1 × 1.3 = 4.69

  Stimulant: "Godric threatens Mai for calling him by his former Ghost title, showing his sensitivity about his past as a scientist"
    Event: reminder_cue | Subject: self | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.50 × (1 + 0.387) = 9.01
    Final delta: 9.01 × 1 × 1.3 = 11.72
    fear: base=7 × trig=1 × weight=0.3 → raw=2.10
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.10 × (1 + -0.560) = 0.92
    Final delta: 0.92 × 1 × 1.3 = 1.20
    anger: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.40 × (1 + 0.147) = 3.90
    Final delta: 3.90 × 1 × 1.3 = 5.07

  Stimulant: "Praew tells Godric he was one of her heroes, using past tense, showing she has lost faith in him"
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=13 × trig=0.85 × weight=0.6 → raw=6.63
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.63 × (1 + 0.387) = 9.19
    Final delta: 9.19 × 1 × 1.3 = 11.95
    anger: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.89 × (1 + 0.147) = 3.31
    Final delta: 3.31 × 1 × 1.3 = 4.31
    fear: base=7 × trig=0.85 × weight=0.2 → raw=1.19
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.19 × (1 + -0.560) = 0.52
    Final delta: 0.52 × 1 × 1.3 = 0.68

  Stimulant: "Mai stabs a dagger through Godric's foot when he takes his eyes off her during the confrontation"
    Event: harm | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    fear: base=7 × trig=1 × weight=0.5 → raw=3.50
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.50 × (1 + -0.560) = 1.54
    Final delta: 1.54 × 1 × 1.3 = 2.00
    anger: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.10 × (1 + 0.147) = 5.85
    Final delta: 5.85 × 1 × 1.3 = 7.60
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.387) = 3.61
    Final delta: 3.61 × 1 × 1.3 = 4.69

  Stimulant: "Godric discovers that his students (Wannii, Junya, Jorpen) have been disappearing and he cannot find them, leading him to search the Fourth Floor"
    Event: loss | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    sadness: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.73 × (1 + 0.387) = 10.73
    Final delta: 10.73 × 0.7 × 1 = 7.51
    fear: base=7 × trig=0.85 × weight=0.2 → raw=1.19
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.19 × (1 + -0.560) = 0.52
    Final delta: 0.52 × 0.7 × 1 = 0.37
    anger: base=17 × trig=0.85 × weight=0.1 → raw=1.45
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.45 × (1 + 0.147) = 1.66
    Final delta: 1.66 × 0.7 × 1 = 1.16

  Suppression applied:
  Suppression: sadness(52.1) suppresses joy by -24.33 (60% of sadness delta)
  Suppression: sadness(52.1) suppresses anticipation by -12.17 (30% of sadness delta)
  Suppression: sadness(52.1) suppresses surprise by -8.11 (20% of sadness delta)

  Emotion updates:
    sadness: carry(11.5 × 0.2) + delta(40.55) = 42.86
    anger: carry(15.1 × 0.2) + delta(33.34) = 36.37
    fear: carry(1.7 × 0.2) + delta(4.25) = 4.59
    disgust: carry(3.1 × 0.2) + delta(3.67) = 4.28
    anticipation: carry(1.6 × 0.2) + delta(-12.17) = -11.84

=== Chapter 14 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 15 ===
Stimulants this chapter: 1

  Stimulant: "Godric finds classified medical records show he was injured (dislocated shoulder, impaled foot) in "combat training" — evidence of his fight with Mai"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=7 × trig=0.6 × weight=0.5 → raw=2.10
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.10 × (1 + -0.560) = 0.92
    Final delta: 0.92 × 1 × 0.8 = 0.74
    anger: base=17 × trig=0.6 × weight=0.3 → raw=3.06
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.147) = 3.51
    Final delta: 3.51 × 1 × 0.8 = 2.81
    sadness: base=13 × trig=0.6 × weight=0.2 → raw=1.56
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 1.56 × (1 + 0.387) = 2.16
    Final delta: 2.16 × 1 × 0.8 = 1.73

  Emotion updates:
    sadness: carry(42.9 × 0.2) + delta(1.73) = 10.30
    anger: carry(36.4 × 0.2) + delta(2.81) = 10.08
    fear: carry(4.6 × 0.2) + delta(0.74) = 1.66
    disgust: carry(4.3 × 0.2) + delta(0.00) = 0.86

=== Chapter 16 ===
Stimulants this chapter: 3

  Stimulant: "Godric reveals he has been searching for the missing students and heard screaming from below the Fourth Floor, confirming a hidden Fifth Floor"
    Event: danger_cue | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    fear: base=7 × trig=0.85 × weight=0.7 → raw=4.17
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 4.17 × (1 + -0.560) = 1.83
    Final delta: 1.83 × 0.7 × 1 = 1.28
    anticipation: base=10 × trig=0.85 × weight=0.2 → raw=1.70
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.70 × (1 + -0.213) = 1.34
    Final delta: 1.34 × 0.7 × 1 = 0.94
    anger: base=17 × trig=0.85 × weight=0.1 → raw=1.45
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.45 × (1 + 0.147) = 1.66
    Final delta: 1.66 × 0.7 × 1 = 1.16

  Stimulant: "Godric admits the deadliest person in the city (Mai) was put into a coma by an unknown attacker, and he does not know who did it"
    Event: surprise_reveal | Subject: friend | Source: enemy_caused | Domain: safety
    Trigger: stakes=2 imm=1 cert=1 → total=4 → Medium (×0.6)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    surprise: base=5 × trig=0.6 × weight=0.7 → raw=2.10
    Trait modifiers for surprise (total: -0.337):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(40/75 × -0.2) = -0.107 [Adaptable = recovers from surprise faster]
  impulsiveness(25/75 × 0.15) = +0.050 [Impulsive = reacts more to surprises]
    Modified delta: 2.10 × (1 + -0.337) = 1.39
    Final delta: 1.39 × 0.8 × 0.8 = 0.89
    fear: base=7 × trig=0.6 × weight=0.15 → raw=0.63
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 0.63 × (1 + -0.560) = 0.28
    Final delta: 0.28 × 0.8 × 0.8 = 0.18
    anticipation: base=10 × trig=0.6 × weight=0.15 → raw=0.90
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 0.90 × (1 + -0.213) = 0.71
    Final delta: 0.71 × 0.8 × 0.8 = 0.45

  Stimulant: "Haldric confronts Godric with a surged ForceStone demanding to know where Praew is, forcing Godric into a fight with an ally"
    Event: threat | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    fear: base=7 × trig=0.85 × weight=0.7 → raw=4.17
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 4.17 × (1 + -0.560) = 1.83
    Final delta: 1.83 × 1 × 1.3 = 2.38
    anger: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.89 × (1 + 0.147) = 3.31
    Final delta: 3.31 × 1 × 1.3 = 4.31
    anticipation: base=10 × trig=0.85 × weight=0.1 → raw=0.85
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 0.85 × (1 + -0.213) = 0.67
    Final delta: 0.67 × 1 × 1.3 = 0.87

  Emotion updates:
    sadness: carry(10.3 × 0.2) + delta(0.00) = 2.06
    anger: carry(10.1 × 0.2) + delta(5.47) = 7.48
    fear: carry(1.7 × 0.2) + delta(3.84) = 4.17
    disgust: carry(0.9 × 0.2) + delta(0.00) = 0.17
    surprise: carry(0.0 × 0.2) + delta(0.89) = 0.89
    anticipation: carry(0.0 × 0.2) + delta(2.26) = 2.26

=== Chapter 17 ===
Stimulants this chapter: 3

  Stimulant: "Godric and Haldric discover Praew strapped to a slab with a stone embedded in her chest, bloodied and barely conscious, confirming The Prime's atrocities"
    Event: injustice | Subject: friend | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    anger: base=17 × trig=1 × weight=0.5 → raw=8.50
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.50 × (1 + 0.147) = 9.75
    Final delta: 9.75 × 0.8 × 1 = 7.80
    disgust: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 4.50 × (1 + -0.060) = 4.23
    Final delta: 4.23 × 0.8 × 1 = 3.38
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.387) = 3.61
    Final delta: 3.61 × 0.8 × 1 = 2.88

  Stimulant: "Godric sees two dead bodies (including Junya) in The Prime's recorrection chamber — his own students murdered in experiments"
    Event: loss | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    sadness: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.10 × (1 + 0.387) = 12.62
    Final delta: 12.62 × 0.7 × 1 = 8.83
    fear: base=7 × trig=1 × weight=0.2 → raw=1.40
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.40 × (1 + -0.560) = 0.62
    Final delta: 0.62 × 0.7 × 1 = 0.43
    anger: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.70 × (1 + 0.147) = 1.95
    Final delta: 1.95 × 0.7 × 1 = 1.36

  Stimulant: "Godric recognizes that his missing students Wannii and Jorpen are among the six masked Embedded warriors he must fight, turned into mind-controlled soldiers"
    Event: betrayal | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    sadness: base=13 × trig=1 × weight=0.4 → raw=5.20
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.20 × (1 + 0.387) = 7.21
    Final delta: 7.21 × 0.7 × 1 = 5.05
    anger: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.10 × (1 + 0.147) = 5.85
    Final delta: 5.85 × 0.7 × 1 = 4.09
    trust (COLLAPSE): base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 3.60 × (1 + -0.280) = 2.59
    Final delta: 2.59 × 0.7 × 1 = 1.81
    → Trust COLLAPSED by -1.81

  Emotion updates:
    sadness: carry(2.1 × 0.2) + delta(16.76) = 17.18
    anger: carry(7.5 × 0.2) + delta(13.26) = 14.75
    fear: carry(4.2 × 0.2) + delta(0.43) = 1.27
    disgust: carry(0.2 × 0.2) + delta(3.38) = 3.42
    surprise: carry(0.9 × 0.2) + delta(0.00) = 0.18
    anticipation: carry(2.3 × 0.2) + delta(0.00) = 0.45

=== Chapter 18 ===
Stimulants this chapter: 12

  Stimulant: "Godric calls The Prime "brother" as he says goodbye, acknowledging the personal betrayal of fighting his own sibling"
    Event: separation | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=1 × weight=0.6 → raw=7.80
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.80 × (1 + 0.387) = 10.82
    Final delta: 10.82 × 0.9 × 1.1 = 10.71
    fear: base=7 × trig=1 × weight=0.2 → raw=1.40
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.40 × (1 + -0.560) = 0.62
    Final delta: 0.62 × 0.9 × 1.1 = 0.61
    anger: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.40 × (1 + 0.147) = 3.90
    Final delta: 3.90 × 0.9 × 1.1 = 3.86

  Stimulant: "The Prime shouts that Godric will be hunted to the ends of the world for taking Praew, threatening his life and freedom"
    Event: threat | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=7 × trig=0.85 × weight=0.7 → raw=4.17
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 4.17 × (1 + -0.560) = 1.83
    Final delta: 1.83 × 1 × 1 = 1.83
    anger: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.89 × (1 + 0.147) = 3.31
    Final delta: 3.31 × 1 × 1 = 3.31
    anticipation: base=10 × trig=0.85 × weight=0.1 → raw=0.85
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 0.85 × (1 + -0.213) = 0.67
    Final delta: 0.67 × 1 × 1 = 0.67

  Stimulant: "Praew quotes his own book back to him — "Thank you for picking up your spear to face the storm!" — validating his lifelong purpose"
    Event: connection | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=12 × trig=1 × weight=0.5 → raw=6.00
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 6.00 × (1 + -0.280) = 4.32
    Final delta: 4.32 × 0.8 × 1.3 = 4.49
    joy: base=5 × trig=1 × weight=0.3 → raw=1.50
    Trait modifiers for joy (total: -0.147):
  empathyBaseline(50/75 × 0.2) = +0.133 [Empathic joy — shares in others' happiness]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 1.50 × (1 + -0.147) = 1.28
    Final delta: 1.28 × 0.8 × 1.3 = 1.33
    anticipation: base=10 × trig=1 × weight=0.2 → raw=2.00
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 2.00 × (1 + -0.213) = 1.57
    Final delta: 1.57 × 0.8 × 1.3 = 1.64

  Stimulant: "Godric faces six Embedded warriors alone to buy Praew time to escape, knowing he will likely die"
    Event: danger_cue | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=7 × trig=1 × weight=0.7 → raw=4.90
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 4.90 × (1 + -0.560) = 2.16
    Final delta: 2.16 × 1 × 0.8 = 1.72
    anticipation: base=10 × trig=1 × weight=0.2 → raw=2.00
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 2.00 × (1 + -0.213) = 1.57
    Final delta: 1.57 × 1 × 0.8 = 1.26
    anger: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.70 × (1 + 0.147) = 1.95
    Final delta: 1.95 × 1 × 0.8 = 1.56

  Stimulant: "Godric is forced to decapitate his own students Wannii and Jorpen, who have been turned into mindless Embedded warriors"
    Event: moral_cue | Subject: group | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    disgust: base=15 × trig=1 × weight=0.4 → raw=6.00
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 6.00 × (1 + -0.060) = 5.64
    Final delta: 5.64 × 0.7 × 1.1 = 4.34
    anger: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.10 × (1 + 0.147) = 5.85
    Final delta: 5.85 × 0.7 × 1.1 = 4.50
    sadness: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.90 × (1 + 0.387) = 5.41
    Final delta: 5.41 × 0.7 × 1.1 = 4.16

  Stimulant: "Godric prays for his students' mercy in their next life before killing them, revealing deep moral anguish"
    Event: loss | Subject: group | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.10 × (1 + 0.387) = 12.62
    Final delta: 12.62 × 0.7 × 1.1 = 9.72
    fear: base=7 × trig=1 × weight=0.2 → raw=1.40
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.40 × (1 + -0.560) = 0.62
    Final delta: 0.62 × 0.7 × 1.1 = 0.47
    anger: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.70 × (1 + 0.147) = 1.95
    Final delta: 1.95 × 0.7 × 1.1 = 1.50

  Stimulant: "Renwick slashes Godric's throat from behind after the battle, leaving him bleeding out"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=7 × trig=1 × weight=0.5 → raw=3.50
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.50 × (1 + -0.560) = 1.54
    Final delta: 1.54 × 1 × 0.8 = 1.23
    anger: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.10 × (1 + 0.147) = 5.85
    Final delta: 5.85 × 1 × 0.8 = 4.68
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.387) = 3.61
    Final delta: 3.61 × 1 × 0.8 = 2.88

  Stimulant: "Godric's ribs shatter from a surged strike during the battle, and his body is failing from multiple wounds and surge overuse"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=7 × trig=1 × weight=0.5 → raw=3.50
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.50 × (1 + -0.560) = 1.54
    Final delta: 1.54 × 1 × 0.8 = 1.23
    anger: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.10 × (1 + 0.147) = 5.85
    Final delta: 5.85 × 1 × 0.8 = 4.68
    sadness: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.60 × (1 + 0.387) = 3.61
    Final delta: 3.61 × 1 × 0.8 = 2.88

  Stimulant: "Godric collapses at the gate after the battle, driving his spear into the ground one final time as the world dims around him"
    Event: loss | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.10 × (1 + 0.387) = 12.62
    Final delta: 12.62 × 1 × 1.1 = 13.88
    fear: base=7 × trig=1 × weight=0.2 → raw=1.40
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.40 × (1 + -0.560) = 0.62
    Final delta: 0.62 × 1 × 1.1 = 0.68
    anger: base=17 × trig=1 × weight=0.1 → raw=1.70
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.70 × (1 + 0.147) = 1.95
    Final delta: 1.95 × 1 × 1.1 = 2.14

  Stimulant: "Godric worries that Praew will view her own compassion as weakness if the Embedded warriors track her down using her empathy against her"
    Event: moral_cue | Subject: friend | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=1 cert=1 → total=5 → Medium (×0.6)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    disgust: base=15 × trig=0.6 × weight=0.4 → raw=3.60
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 3.60 × (1 + -0.060) = 3.38
    Final delta: 3.38 × 0.8 × 1.1 = 2.98
    anger: base=17 × trig=0.6 × weight=0.3 → raw=3.06
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.06 × (1 + 0.147) = 3.51
    Final delta: 3.51 × 0.8 × 1.1 = 3.09
    sadness: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.34 × (1 + 0.387) = 3.24
    Final delta: 3.24 × 0.8 × 1.1 = 2.86

  Stimulant: "Godric acknowledges his "greatest shame" — the burn mark on the back of his neck — connecting him to the recorrection program that enslaved his students"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.50 × (1 + 0.387) = 9.01
    Final delta: 9.01 × 1 × 1.1 = 9.91
    fear: base=7 × trig=1 × weight=0.3 → raw=2.10
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.10 × (1 + -0.560) = 0.92
    Final delta: 0.92 × 1 × 1.1 = 1.02
    anger: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.40 × (1 + 0.147) = 3.90
    Final delta: 3.90 × 1 × 1.1 = 4.29

  Stimulant: "Godric reflects that he and his brother (The Prime) share the same weakness — growing more callous while growing more calloused"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.52 × (1 + 0.387) = 7.66
    Final delta: 7.66 × 1 × 1.1 = 8.43
    fear: base=7 × trig=0.85 × weight=0.3 → raw=1.78
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.78 × (1 + -0.560) = 0.79
    Final delta: 0.79 × 1 × 1.1 = 0.86
    anger: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.89 × (1 + 0.147) = 3.31
    Final delta: 3.31 × 1 × 1.1 = 3.65

  Suppression applied:
  Suppression: anger(52.0) suppresses joy by -18.63 (50% of anger delta)
  Suppression: anger(52.0) suppresses trust by -11.18 (30% of anger delta)
  Suppression: anger(52.0) suppresses fear by -5.59 (15% of anger delta)
  Suppression: sadness(82.6) suppresses joy by -39.26 (60% of sadness delta)
  Suppression: sadness(82.6) suppresses anticipation by -19.63 (30% of sadness delta)
  Suppression: sadness(82.6) suppresses surprise by -13.09 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(-56.56) = -56.56
    sadness: carry(17.2 × 0.2) + delta(65.43) = 68.87
    anger: carry(14.8 × 0.2) + delta(37.26) = 40.21
    fear: carry(1.3 × 0.2) + delta(4.07) = 4.33
    disgust: carry(3.4 × 0.2) + delta(7.32) = 8.00
    trust: carry(0.0 × 0.2) + delta(-6.69) = -6.69
    anticipation: carry(0.5 × 0.2) + delta(-16.07) = -15.98
```

### Profile Reasoning

- **emotionalBaseline.joy**: Extremely low joy sensitivity. Godric almost never shows happiness. His rare "smile" during the fight with Haldric (Ch15) is terrifying rather than warm. He makes gruff jokes ("Not so pretty now, are you?" to the beast in the prologue) but genuine joy is absent from his character.
- **emotionalBaseline.sadness**: Moderate sadness sensitivity, deeply buried. He carries grief over his failures: Srevlis's departure haunted him for years (prologue: "how those words gnawed at me"). He mourns his students silently ("May they find comfort in death" Ch18) and whispers a prayer before killing Jorpen and Wannii.
- **emotionalBaseline.anger**: Moderate-high anger sensitivity. Storms into The Prime's office furious (Ch9): "DOING TO THEM?!" Stomps around class more grouchy than usual (Ch9). But his anger is controlled and directed, not wild. He channels fury into action rather than outbursts.
- **emotionalBaseline.fear**: Very low fear sensitivity. Faces Boltrax alone knowing he'll likely die: "Fear wouldn't help him" (prologue). Faces six Embedded warriors alone (Ch18). "How long had it been since he felt fear like this?" — the question itself implies fear is nearly foreign to him.
- **emotionalBaseline.disgust**: Moderate disgust sensitivity. Disgusted by The Prime's treatment of students (Ch18: "how you've been treating my students"). His "Blasted" and "bolting" curses carry contempt. Disgusted by cowardice in his guards (prologue) and by The Prime's manipulation.
- **emotionalBaseline.surprise**: Very low surprise sensitivity. A lifetime of combat has made him nearly unflappable. He catches Haldric's surged ForceStone casually (Ch15). The only true surprise is learning his students were embedded and turned against him (Ch18).
- **emotionalBaseline.trust**: Low-moderate trust sensitivity. He trusts selectively: trusts Mai as a colleague despite antagonism, trusts Praew enough to rescue her, trusts Srevlis's words enough to reshape his life. But he's wary of The Prime and institutions generally.
- **emotionalBaseline.anticipation**: Low anticipation. Godric lives in the present moment. His pre-battle ritual is "a long deep breath" (prologue, Ch18). He doesn't plan far ahead — he reacts to what's needed. "I'm not here to think. I'm here to hold the line" (prologue).
- **temperament.patience**: Moderate-low patience. Barks at students (Ch4), doesn't tolerate interruptions (Ch9), cuts people off mid-sentence. "Spit it out, kid. You're holding up the class" (Ch8). But he endures years of teaching and years of bearing territory marks, showing strategic patience.
- **temperament.impulsiveness**: Low impulsiveness. He acts decisively but not recklessly. The prologue shows him calculating during battle. His rescue of Praew (Ch17-18) is planned with Haldric, not improvised. Even his confrontation with The Prime (Ch9) was deliberate.
- **temperament.confrontationalTendency**: High confrontational tendency. Directly challenges The Prime in his own office (Ch9). Fights Haldric without hesitation when provoked (Ch15). Tells Mai off to her face (Ch13). He never backs down from a fight, verbal or physical.
- **temperament.agreeableness**: Very low agreeableness. "Cowards, I know" to frightened guards (prologue). Calls students "Ratrods" (Ch4). "I don't give a bolting horn what you Ratrods call me" (Ch4). Dismissive, gruff, and unapologetic in every interaction.
- **temperament.emotionalContainment**: Very high containment. Hides his concern for students behind gruffness. "Oh, would you all quit that bolting look in your eyes?" when they admire his marks (Ch8). Never shows vulnerability publicly. Even dying, his concern is that Praew not see him as a hero.
- **temperament.riskAppetite**: Very high risk appetite. Faces Boltrax alone (prologue). Bears three territory marks from Beasts of Legend. Defies The Prime directly. Fights six Embedded warriors solo (Ch18). He consistently chooses the most dangerous option if duty demands it.
- **temperament.curiosity**: Low curiosity. He's not an investigator or questioner. He acts on what he knows. His teaching is practical, not theoretical. He doesn't seek new knowledge for its own sake — he imparts what's necessary for survival.
- **temperament.prideSensitivity**: Low-moderate pride. He dismisses glory: "There's no glory in death. I did what needed to be done" (Ch8). He doesn't seek recognition. But he bristles when called "Madman Godric" by Mai (Ch13), showing some sensitivity to his past.
- **temperament.shameSensitivity**: Moderate shame sensitivity. His greatest shame is the "recorrection program" — being called "The Deadly Scientist" (Ch13) clearly wounds him. He threatens Ghosts who use the name. The shame of his past scientific work drives his protective instincts now.
- **temperament.empathyBaseline**: Moderate empathy, deeply hidden. Redirects a Tarnox to save a child (Ch4 via Bpen's story). Rescues Praew at enormous personal cost (Ch17-18). Kills Jorpen and Wannii as mercy rather than let them remain enslaved. But his surface presentation is entirely unsympathetic.
- **temperament.dominanceVsDeference**: High dominance. Commands every room he enters. Guards and students obey instantly. Even The Prime is wary of him. "The moment the guards saw them approaching, their stance shifted" (Ch2 about Hunters). He defers to no one except perhaps Srevlis.
- **temperament.adaptabilityVsRigidity**: Moderate-rigid. He adapts tactically in combat (Ch18 battle sequence shows improvisation) but his core philosophy is fixed: protect the city, do what must be done. His shift from scientist to protector was a one-time adaptation, not ongoing flexibility.
- **moralStructure.primaryDriver**: Duty above all else. "I'm not here to think. I'm here to hold the line" (prologue). "Do what needs to be done" (Ch8). He stands in the gap regardless of cost. His moral code is simple: protect those who cannot protect themselves.
- **moralStructure.moralRigidity**: Moderate. He has a clear code but makes difficult exceptions. He kills his own students (Ch18) because they've been enslaved and weaponized — a moral decision that breaks rigid pacifism but serves his protective instinct. He defies The Prime when the line is crossed.
- **moralStructure.guiltSensitivity**: Moderate guilt. Carries guilt for his "Deadly Scientist" past (Ch13). Prays for Jorpen and Wannii before killing them (Ch18). Srevlis's words haunted him for years. But guilt doesn't paralyze him — it fuels his atonement through action.
- **moralStructure.justificationTendency**: Low justification. He doesn't rationalize. He acknowledges his faults: "I'm no bolting hero" (Ch13). He doesn't dress up killing as noble. He does what he must and accepts the weight of it without philosophical scaffolding.


## Mai / Mai Azadi

### Emotion Values Per Chapter

```
Ch |    joy |  sadne |  anger |   fear |  disgu |  surpr |  trust |  antic
--------------------------------------------------------------------------
 0 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 1 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 2 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 3 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 4 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 5 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 6 |      4 |     50 |     28 |      9 |      7 |      4 |      6 |      4
 7 |      0 |     65 |     40 |      0 |     13 |      0 |      2 |      0
 8 |      0 |     13 |      8 |      0 |      3 |      0 |      0 |      0
 9 |      4 |     14 |     10 |      7 |      1 |      3 |      7 |      7
10 |      4 |     14 |     10 |      7 |      1 |      3 |      7 |      7
11 |      4 |     14 |     10 |      7 |      1 |      3 |      7 |      7
12 |      1 |      3 |      2 |      1 |      0 |      1 |      1 |      1
13 |      0 |    75! |     39 |     29 |      2 |      0 |     12 |      0
14 |      0 |     75 |     39 |     29 |      2 |      0 |     12 |      0
15 |      0 |     75 |     39 |     29 |      2 |      0 |     12 |      0
16 |      0 |     75 |     39 |     29 |      2 |      0 |     12 |      0
17 |      0 |     75 |     39 |     29 |      2 |      0 |     12 |      0
18 |      0 |     75 |     39 |     29 |      2 |      0 |     12 |      0
```

### Calculation Breakdown

```

=== Chapter 0 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 1 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 2 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 3 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 4 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 5 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 6 ===
Stimulants this chapter: 8

  Stimulant: "Mai poisons all students with needles during a flicker of darkness to establish authority and test their composure on her first day as instructor"
    Event: threat | Subject: group | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    fear: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 7.73 × (1 + -0.480) = 4.02
    Final delta: 4.02 × 0.7 × 1.1 = 3.10
    anger: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.55 × (1 + 0.113) = 2.84
    Final delta: 2.84 × 0.7 × 1.1 = 2.19
    anticipation: base=13 × trig=0.85 × weight=0.1 → raw=1.10
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.10 × (1 + -0.107) = 0.99
    Final delta: 0.99 × 0.7 × 1.1 = 0.76

  Stimulant: "Bpen challenges Mai's authority by calling assassination cowardly and questioning her age, forcing her to assert dominance with a second poison needle"
    Event: insult | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=15 × trig=0.85 × weight=0.6 → raw=7.65
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 7.65 × (1 + 0.113) = 8.52
    Final delta: 8.52 × 1 × 1.3 = 11.07
    disgust: base=12 × trig=0.85 × weight=0.2 → raw=2.04
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 2.04 × (1 + -0.100) = 1.84
    Final delta: 1.84 × 1 × 1.3 = 2.39
    sadness: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.89 × (1 + 0.453) = 4.20
    Final delta: 4.20 × 1 × 1.3 = 5.46

  Stimulant: "Mai kills the bound man in front of Praew after Praew refuses to do it, performing the execution to save Praew's life despite Praew's moral condemnation"
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=12 × trig=1 × weight=0.4 → raw=4.80
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 4.80 × (1 + -0.100) = 4.32
    Final delta: 4.32 × 1 × 1.1 = 4.75
    anger: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.50 × (1 + 0.113) = 5.01
    Final delta: 5.01 × 1 × 1.1 = 5.51
    sadness: base=17 × trig=1 × weight=0.3 → raw=5.10
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.10 × (1 + 0.453) = 7.41
    Final delta: 7.41 × 1 × 1.1 = 8.15

  Stimulant: "Mai hesitates when Praew defiantly tells her to "get it over with" rather than cower, revealing a flurry of conflicting emotions breaking through her mask"
    Event: surprise_reveal | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    surprise: base=10 × trig=0.85 × weight=0.7 → raw=5.95
    Trait modifiers for surprise (total: -0.320):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(60/75 × -0.2) = -0.160 [Adaptable = recovers from surprise faster]
  impulsiveness(40/75 × 0.15) = +0.080 [Impulsive = reacts more to surprises]
    Modified delta: 5.95 × (1 + -0.320) = 4.05
    Final delta: 4.05 × 0.8 × 1.3 = 4.21
    fear: base=13 × trig=0.85 × weight=0.15 → raw=1.66
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 1.66 × (1 + -0.480) = 0.86
    Final delta: 0.86 × 0.8 × 1.3 = 0.90
    anticipation: base=13 × trig=0.85 × weight=0.15 → raw=1.66
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.66 × (1 + -0.107) = 1.48
    Final delta: 1.48 × 0.8 × 1.3 = 1.54

  Stimulant: "Mai acknowledges the trauma of what her students went through, admitting the worst beasts she ever fought were human, revealing her own haunted past"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=17 × trig=0.85 × weight=0.5 → raw=7.22
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.22 × (1 + 0.453) = 10.50
    Final delta: 10.50 × 1 × 1.1 = 11.55
    fear: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 3.31 × (1 + -0.480) = 1.72
    Final delta: 1.72 × 1 × 1.1 = 1.90
    anger: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.55 × (1 + 0.113) = 2.84
    Final delta: 2.84 × 1 × 1.1 = 3.12

  Stimulant: "Mai accidentally reveals Godric's true identity as Silverwing Godric to her class despite being told not to, showing her difficulty with secrets"
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=17 × trig=0.6 × weight=0.5 → raw=5.10
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.10 × (1 + 0.453) = 7.41
    Final delta: 7.41 × 1 × 1.1 = 8.15
    fear: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.34 × (1 + -0.480) = 1.22
    Final delta: 1.22 × 1 × 1.1 = 1.34
    anger: base=15 × trig=0.6 × weight=0.2 → raw=1.80
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.80 × (1 + 0.113) = 2.00
    Final delta: 2.00 × 1 × 1.1 = 2.20

  Stimulant: "Mai fails Praew from Ghost Operations class to protect her from having to kill again, and tells Praew she has earned her respect"
    Event: connection | Subject: friend | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=20 × trig=0.85 × weight=0.5 → raw=8.50
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 8.50 × (1 + -0.240) = 6.46
    Final delta: 6.46 × 0.8 × 1.1 = 5.68
    joy: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 4.59 × (1 + -0.093) = 4.16
    Final delta: 4.16 × 0.8 × 1.1 = 3.66
    anticipation: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.21 × (1 + -0.107) = 1.97
    Final delta: 1.97 × 0.8 × 1.1 = 1.74

  Stimulant: "Praew dismisses Mai coldly after class with "Can I go now?" leaving Mai sounding dejected after her attempt at friendship"
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=17 × trig=0.85 × weight=0.6 → raw=8.67
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.67 × (1 + 0.453) = 12.60
    Final delta: 12.60 × 1 × 1.3 = 16.38
    anger: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.55 × (1 + 0.113) = 2.84
    Final delta: 2.84 × 1 × 1.3 = 3.69
    fear: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.21 × (1 + -0.480) = 1.15
    Final delta: 1.15 × 1 × 1.3 = 1.49

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(3.66) = 3.66
    sadness: carry(0.0 × 0.2) + delta(49.70) = 49.70
    anger: carry(0.0 × 0.2) + delta(27.79) = 27.79
    fear: carry(0.0 × 0.2) + delta(8.72) = 8.72
    disgust: carry(0.0 × 0.2) + delta(7.14) = 7.14
    surprise: carry(0.0 × 0.2) + delta(4.21) = 4.21
    trust: carry(0.0 × 0.2) + delta(5.68) = 5.68
    anticipation: carry(0.0 × 0.2) + delta(4.04) = 4.04

=== Chapter 7 ===
Stimulants this chapter: 7

  Stimulant: "Mai follows Praew home and shows up uninvited at her parents' house, sitting casually with them despite being a trained assassin"
    Event: connection | Subject: friend | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=2 cert=2 → total=5 → Medium (×0.6)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=20 × trig=0.6 × weight=0.5 → raw=6.00
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 6.00 × (1 + -0.240) = 4.56
    Final delta: 4.56 × 0.8 × 1.1 = 4.01
    joy: base=18 × trig=0.6 × weight=0.3 → raw=3.24
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 3.24 × (1 + -0.093) = 2.94
    Final delta: 2.94 × 0.8 × 1.1 = 2.59
    anticipation: base=13 × trig=0.6 × weight=0.2 → raw=1.56
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.56 × (1 + -0.107) = 1.39
    Final delta: 1.39 × 0.8 × 1.1 = 1.23

  Stimulant: "Praew calls Mai a "psychopathic murderer" and says she would never be friends with her, telling her to stay away from her parents"
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=17 × trig=1 × weight=0.6 → raw=10.20
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.20 × (1 + 0.453) = 14.82
    Final delta: 14.82 × 1 × 1.3 = 19.27
    anger: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.00 × (1 + 0.113) = 3.34
    Final delta: 3.34 × 1 × 1.3 = 4.34
    fear: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.60 × (1 + -0.480) = 1.35
    Final delta: 1.35 × 1 × 1.3 = 1.76

  Stimulant: "Mai breaks down crying and reveals she is Stormhaven's best assassin only because she was raised to kill, not because she enjoys it"
    Event: humiliation | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=17 × trig=1 × weight=0.4 → raw=6.80
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.80 × (1 + 0.453) = 9.88
    Final delta: 9.88 × 1 × 1.3 = 12.85
    anger: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.50 × (1 + 0.113) = 5.01
    Final delta: 5.01 × 1 × 1.3 = 6.51
    disgust: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.60 × (1 + -0.100) = 3.24
    Final delta: 3.24 × 1 × 1.3 = 4.21

  Stimulant: "Mai reveals she was only allowed to make a single friend after five years of maintaining a flawless kill record, and Praew is the first person she chose"
    Event: connection | Subject: friend | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=20 × trig=1 × weight=0.5 → raw=10.00
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 10.00 × (1 + -0.240) = 7.60
    Final delta: 7.60 × 0.8 × 1.1 = 6.69
    joy: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 5.40 × (1 + -0.093) = 4.90
    Final delta: 4.90 × 0.8 × 1.1 = 4.31
    anticipation: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.60 × (1 + -0.107) = 2.32
    Final delta: 2.32 × 0.8 × 1.1 = 2.04

  Stimulant: "Mai reveals she would have killed herself long ago if not for staying positive, exposing the depth of her suffering and isolation"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=17 × trig=0.85 × weight=0.5 → raw=7.22
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.22 × (1 + 0.453) = 10.50
    Final delta: 10.50 × 1 × 1.1 = 11.55
    fear: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 3.31 × (1 + -0.480) = 1.72
    Final delta: 1.72 × 1 × 1.1 = 1.90
    anger: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.55 × (1 + 0.113) = 2.84
    Final delta: 2.84 × 1 × 1.1 = 3.12

  Stimulant: "Mai reveals the man she killed was a cannibal who murdered and ate his own wife and daughter, defending her actions against Praew's moral judgment"
    Event: injustice | Subject: self | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=15 × trig=0.85 × weight=0.5 → raw=6.38
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 6.38 × (1 + 0.113) = 7.10
    Final delta: 7.10 × 1 × 1.3 = 9.23
    disgust: base=12 × trig=0.85 × weight=0.3 → raw=3.06
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.06 × (1 + -0.100) = 2.75
    Final delta: 2.75 × 1 × 1.3 = 3.58
    sadness: base=17 × trig=0.85 × weight=0.2 → raw=2.89
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.89 × (1 + 0.453) = 4.20
    Final delta: 4.20 × 1 × 1.3 = 5.46

  Stimulant: "Mai confronts Praew with "You condemn me but protect people like that?" before walking away, devastated by the injustice of being judged"
    Event: injustice | Subject: self | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=15 × trig=1 × weight=0.5 → raw=7.50
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 7.50 × (1 + 0.113) = 8.35
    Final delta: 8.35 × 1 × 1.3 = 10.86
    disgust: base=12 × trig=1 × weight=0.3 → raw=3.60
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.60 × (1 + -0.100) = 3.24
    Final delta: 3.24 × 1 × 1.3 = 4.21
    sadness: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.40 × (1 + 0.453) = 4.94
    Final delta: 4.94 × 1 × 1.3 = 6.42

  Suppression applied:
  Suppression: anger(61.8) suppresses joy by -17.03 (50% of anger delta)
  Suppression: anger(61.8) suppresses trust by -10.22 (30% of anger delta)
  Suppression: anger(61.8) suppresses fear by -5.11 (15% of anger delta)
  Suppression: sadness(105.3) suppresses joy by -33.33 (60% of sadness delta)
  Suppression: sadness(105.3) suppresses anticipation by -16.67 (30% of sadness delta)
  Suppression: sadness(105.3) suppresses surprise by -11.11 (20% of sadness delta)

  Emotion updates:
    joy: carry(3.7 × 0.2) + delta(-43.47) = -42.74
    sadness: carry(49.7 × 0.2) + delta(55.55) = 65.49
    anger: carry(27.8 × 0.2) + delta(34.06) = 39.62
    fear: carry(8.7 × 0.2) + delta(-1.46) = 0.29
    disgust: carry(7.1 × 0.2) + delta(12.00) = 13.43
    surprise: carry(4.2 × 0.2) + delta(-11.11) = -10.27
    trust: carry(5.7 × 0.2) + delta(0.48) = 1.62
    anticipation: carry(4.0 × 0.2) + delta(-13.40) = -12.59

=== Chapter 8 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(65.5 × 0.2) + delta(0.00) = 13.10
    anger: carry(39.6 × 0.2) + delta(0.00) = 7.92
    disgust: carry(13.4 × 0.2) + delta(0.00) = 2.69
    trust: carry(1.6 × 0.2) + delta(0.00) = 0.32

=== Chapter 9 ===
Stimulants this chapter: 5

  Stimulant: "Praew returns to apologize to Mai, admitting she was wrong and offering to try being friends with boundaries"
    Event: connection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=20 × trig=0.85 × weight=0.5 → raw=8.50
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 8.50 × (1 + -0.240) = 6.46
    Final delta: 6.46 × 0.8 × 1.3 = 6.72
    joy: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 4.59 × (1 + -0.093) = 4.16
    Final delta: 4.16 × 0.8 × 1.3 = 4.33
    anticipation: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.21 × (1 + -0.107) = 1.97
    Final delta: 1.97 × 0.8 × 1.3 = 2.05

  Stimulant: "Mai anxiously asks if Praew is going to "break up" with her, revealing how much their friendship means and how fragile it feels to her"
    Event: danger_cue | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=2 cert=1 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=13 × trig=0.6 × weight=0.7 → raw=5.46
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 5.46 × (1 + -0.480) = 2.84
    Final delta: 2.84 × 1 × 1.1 = 3.12
    anticipation: base=13 × trig=0.6 × weight=0.2 → raw=1.56
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.56 × (1 + -0.107) = 1.39
    Final delta: 1.39 × 1 × 1.1 = 1.53
    anger: base=15 × trig=0.6 × weight=0.1 → raw=0.90
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 0.90 × (1 + 0.113) = 1.00
    Final delta: 1.00 × 1 × 1.1 = 1.10

  Stimulant: "Mai reveals she has been studying a romance guide book to learn how friendships work, not even knowing the difference between courting and friendship"
    Event: surprise_reveal | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    surprise: base=10 × trig=0.6 × weight=0.7 → raw=4.20
    Trait modifiers for surprise (total: -0.320):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(60/75 × -0.2) = -0.160 [Adaptable = recovers from surprise faster]
  impulsiveness(40/75 × 0.15) = +0.080 [Impulsive = reacts more to surprises]
    Modified delta: 4.20 × (1 + -0.320) = 2.86
    Final delta: 2.86 × 1 × 1.1 = 3.14
    fear: base=13 × trig=0.6 × weight=0.15 → raw=1.17
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 1.17 × (1 + -0.480) = 0.61
    Final delta: 0.61 × 1 × 1.1 = 0.67
    anticipation: base=13 × trig=0.6 × weight=0.15 → raw=1.17
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.17 × (1 + -0.107) = 1.05
    Final delta: 1.05 × 1 × 1.1 = 1.15

  Stimulant: "Mai tries to painfully force a reassuring smile when Praew performs poorly, her eye twitching as she struggles to express unfamiliar empathy"
    Event: obstacle | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=1 cert=2 → total=4 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    anger: base=15 × trig=0.6 × weight=0.4 → raw=3.60
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.60 × (1 + 0.113) = 4.01
    Final delta: 4.01 × 1 × 1.1 = 4.41
    anticipation: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.34 × (1 + -0.107) = 2.09
    Final delta: 2.09 × 1 × 1.1 = 2.30
    fear: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.34 × (1 + -0.480) = 1.22
    Final delta: 1.22 × 1 × 1.1 = 1.34

  Stimulant: "When Praew asks Mai to train her the way she was trained, Mai reflexively punches her, revealing her traumatic upbringing through instinct"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=17 × trig=0.85 × weight=0.5 → raw=7.22
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.22 × (1 + 0.453) = 10.50
    Final delta: 10.50 × 1 × 1.1 = 11.55
    fear: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 3.31 × (1 + -0.480) = 1.72
    Final delta: 1.72 × 1 × 1.1 = 1.90
    anger: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.55 × (1 + 0.113) = 2.84
    Final delta: 2.84 × 1 × 1.1 = 3.12

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(4.33) = 4.33
    sadness: carry(13.1 × 0.2) + delta(11.55) = 14.17
    anger: carry(7.9 × 0.2) + delta(8.63) = 10.22
    fear: carry(0.1 × 0.2) + delta(7.03) = 7.04
    disgust: carry(2.7 × 0.2) + delta(0.00) = 0.54
    surprise: carry(0.0 × 0.2) + delta(3.14) = 3.14
    trust: carry(0.3 × 0.2) + delta(6.72) = 6.78
    anticipation: carry(0.0 × 0.2) + delta(7.04) = 7.04

=== Chapter 10 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 11 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 12 ===
Stimulants this chapter: 0

  Emotion updates:
    joy: carry(4.3 × 0.2) + delta(0.00) = 0.87
    sadness: carry(14.2 × 0.2) + delta(0.00) = 2.83
    anger: carry(10.2 × 0.2) + delta(0.00) = 2.04
    fear: carry(7.0 × 0.2) + delta(0.00) = 1.41
    disgust: carry(0.5 × 0.2) + delta(0.00) = 0.11
    surprise: carry(3.1 × 0.2) + delta(0.00) = 0.63
    trust: carry(6.8 × 0.2) + delta(0.00) = 1.36
    anticipation: carry(7.0 × 0.2) + delta(0.00) = 1.41

=== Chapter 13 ===
Stimulants this chapter: 15

  Stimulant: "Mai learns about the Fourth Floor from Praew, and her eyes glaze over with terror as she relives traumatic memories of growing up there"
    Event: reminder_cue | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=17 × trig=1 × weight=0.5 → raw=8.50
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.50 × (1 + 0.453) = 12.35
    Final delta: 12.35 × 1 × 1.3 = 16.06
    fear: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 3.90 × (1 + -0.480) = 2.03
    Final delta: 2.03 × 1 × 1.3 = 2.64
    anger: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.00 × (1 + 0.113) = 3.34
    Final delta: 3.34 × 1 × 1.3 = 4.34

  Stimulant: "Mai grabs Praew and desperately begs her to never return to the Fourth Floor, her eyes wide with genuine terror"
    Event: danger_cue | Subject: friend | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    fear: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 7.73 × (1 + -0.480) = 4.02
    Final delta: 4.02 × 0.8 × 1.1 = 3.54
    anticipation: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.21 × (1 + -0.107) = 1.97
    Final delta: 1.97 × 0.8 × 1.1 = 1.74
    anger: base=15 × trig=0.85 × weight=0.1 → raw=1.28
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.28 × (1 + 0.113) = 1.42
    Final delta: 1.42 × 0.8 × 1.1 = 1.25

  Stimulant: "Mai reveals she was born on the Fourth Floor and her entire family worked in the Sifaralith Identification Program"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=17 × trig=0.85 × weight=0.5 → raw=7.22
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.22 × (1 + 0.453) = 10.50
    Final delta: 10.50 × 1 × 1.1 = 11.55
    fear: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 3.31 × (1 + -0.480) = 1.72
    Final delta: 1.72 × 1 × 1.1 = 1.90
    anger: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.55 × (1 + 0.113) = 2.84
    Final delta: 2.84 × 1 × 1.1 = 3.12

  Stimulant: "Mai reveals her two older brothers blamed her for their father's death, saying she should never have been born"
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=17 × trig=0.85 × weight=0.6 → raw=8.67
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.67 × (1 + 0.453) = 12.60
    Final delta: 12.60 × 1 × 1.3 = 16.38
    anger: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.55 × (1 + 0.113) = 2.84
    Final delta: 2.84 × 1 × 1.3 = 3.69
    fear: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.21 × (1 + -0.480) = 1.15
    Final delta: 1.15 × 1 × 1.3 = 1.49

  Stimulant: "Mai recounts her mother losing all her fingers in a stone accident and the family being sentenced to disposal, the moment that destroyed her childhood"
    Event: loss | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=17 × trig=1 × weight=0.7 → raw=11.90
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.90 × (1 + 0.453) = 17.29
    Final delta: 17.29 × 0.9 × 1 = 15.57
    fear: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.60 × (1 + -0.480) = 1.35
    Final delta: 1.35 × 0.9 × 1 = 1.22
    anger: base=15 × trig=1 × weight=0.1 → raw=1.50
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.50 × (1 + 0.113) = 1.67
    Final delta: 1.67 × 0.9 × 1 = 1.50

  Stimulant: "Mai watches her mother and two brothers being dragged away by guards and never sees them again"
    Event: separation | Subject: family | Source: authority_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=17 × trig=1 × weight=0.6 → raw=10.20
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.20 × (1 + 0.453) = 14.82
    Final delta: 14.82 × 0.9 × 1 = 13.34
    fear: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.60 × (1 + -0.480) = 1.35
    Final delta: 1.35 × 0.9 × 1 = 1.22
    anger: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.00 × (1 + 0.113) = 3.34
    Final delta: 3.34 × 0.9 × 1 = 3.01

  Stimulant: "Mai is struck by a guard so hard she flies into a pile of stones and blacks out during the struggle for her family"
    Event: harm | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 6.50 × (1 + -0.480) = 3.38
    Final delta: 3.38 × 1 × 1 = 3.38
    anger: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.50 × (1 + 0.113) = 5.01
    Final delta: 5.01 × 1 × 1 = 5.01
    sadness: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.40 × (1 + 0.453) = 4.94
    Final delta: 4.94 × 1 × 1 = 4.94

  Stimulant: "Mai hunts down and kills the three guards who took her family, slitting their throats and stabbing through the last one's foot in an act of vengeance"
    Event: success | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 12.60 × (1 + -0.093) = 11.42
    Final delta: 11.42 × 1 × 1.1 = 12.57
    trust: base=20 × trig=1 × weight=0.2 → raw=4.00
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 4.00 × (1 + -0.240) = 3.04
    Final delta: 3.04 × 1 × 1.1 = 3.34
    anticipation: base=13 × trig=1 × weight=0.1 → raw=1.30
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.30 × (1 + -0.107) = 1.16
    Final delta: 1.16 × 1 × 1.1 = 1.28

  Stimulant: "The previous Prime Archon watches Mai kill the guards with amusement instead of stopping her, then recruits her into Ghost Operations"
    Event: surprise_reveal | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    surprise: base=10 × trig=0.85 × weight=0.7 → raw=5.95
    Trait modifiers for surprise (total: -0.320):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(60/75 × -0.2) = -0.160 [Adaptable = recovers from surprise faster]
  impulsiveness(40/75 × 0.15) = +0.080 [Impulsive = reacts more to surprises]
    Modified delta: 5.95 × (1 + -0.320) = 4.05
    Final delta: 4.05 × 1 × 1 = 4.05
    fear: base=13 × trig=0.85 × weight=0.15 → raw=1.66
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 1.66 × (1 + -0.480) = 0.86
    Final delta: 0.86 × 1 × 1 = 0.86
    anticipation: base=13 × trig=0.85 × weight=0.15 → raw=1.66
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.66 × (1 + -0.107) = 1.48
    Final delta: 1.48 × 1 × 1 = 1.48

  Stimulant: "Godric confronts Mai about revealing Fourth Floor secrets to Praew and calls her behavior "sick" for imitating a young person to experience missed youth"
    Event: insult | Subject: self | Source: enemy_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=15 × trig=1 × weight=0.6 → raw=9.00
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 9.00 × (1 + 0.113) = 10.02
    Final delta: 10.02 × 1 × 0.8 = 8.02
    disgust: base=12 × trig=1 × weight=0.2 → raw=2.40
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 2.40 × (1 + -0.100) = 2.16
    Final delta: 2.16 × 1 × 0.8 = 1.73
    sadness: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.40 × (1 + 0.453) = 4.94
    Final delta: 4.94 × 1 × 0.8 = 3.95

  Stimulant: "Godric accuses Mai of making Praew her "next victim" and threatens her for committing treason by sharing classified information"
    Event: threat | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 9.10 × (1 + -0.480) = 4.73
    Final delta: 4.73 × 1 × 0.8 = 3.79
    anger: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.00 × (1 + 0.113) = 3.34
    Final delta: 3.34 × 1 × 0.8 = 2.67
    anticipation: base=13 × trig=1 × weight=0.1 → raw=1.30
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.30 × (1 + -0.107) = 1.16
    Final delta: 1.16 × 1 × 0.8 = 0.93

  Stimulant: "Praew declares Mai her best friend and says she doesn't care about Mai's age, validating their bond in the face of Godric's hostility"
    Event: connection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=20 × trig=1 × weight=0.5 → raw=10.00
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 10.00 × (1 + -0.240) = 7.60
    Final delta: 7.60 × 0.8 × 1.3 = 7.90
    joy: base=18 × trig=1 × weight=0.3 → raw=5.40
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 5.40 × (1 + -0.093) = 4.90
    Final delta: 4.90 × 0.8 × 1.3 = 5.09
    anticipation: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.60 × (1 + -0.107) = 2.32
    Final delta: 2.32 × 0.8 × 1.3 = 2.42

  Stimulant: "Mai stabs Godric through the foot and shouts for Praew to run, sacrificing her own safety to protect her friend"
    Event: danger_cue | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 9.10 × (1 + -0.480) = 4.73
    Final delta: 4.73 × 1 × 1.1 = 5.21
    anticipation: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.60 × (1 + -0.107) = 2.32
    Final delta: 2.32 × 1 × 1.1 = 2.55
    anger: base=15 × trig=1 × weight=0.1 → raw=1.50
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.50 × (1 + 0.113) = 1.67
    Final delta: 1.67 × 1 × 1.1 = 1.84

  Stimulant: "Godric casually kicks Mai across the training hall like a child's toy, demonstrating the massive power gap between them"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 6.50 × (1 + -0.480) = 3.38
    Final delta: 3.38 × 1 × 0.8 = 2.70
    anger: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.50 × (1 + 0.113) = 5.01
    Final delta: 5.01 × 1 × 0.8 = 4.01
    sadness: base=17 × trig=1 × weight=0.2 → raw=3.40
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.40 × (1 + 0.453) = 4.94
    Final delta: 4.94 × 1 × 0.8 = 3.95

  Stimulant: "Mai reveals she does not age due to something that happened on the Fourth Floor, exposing her deepest secret and isolation"
    Event: surprise_reveal | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    surprise: base=10 × trig=0.85 × weight=0.7 → raw=5.95
    Trait modifiers for surprise (total: -0.320):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(60/75 × -0.2) = -0.160 [Adaptable = recovers from surprise faster]
  impulsiveness(40/75 × 0.15) = +0.080 [Impulsive = reacts more to surprises]
    Modified delta: 5.95 × (1 + -0.320) = 4.05
    Final delta: 4.05 × 1 × 1.1 = 4.45
    fear: base=13 × trig=0.85 × weight=0.15 → raw=1.66
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 1.66 × (1 + -0.480) = 0.86
    Final delta: 0.86 × 1 × 1.1 = 0.95
    anticipation: base=13 × trig=0.85 × weight=0.15 → raw=1.66
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.66 × (1 + -0.107) = 1.48
    Final delta: 1.48 × 1 × 1.1 = 1.63

  Suppression applied:
  Suppression: sadness(88.6) suppresses joy by -51.45 (60% of sadness delta)
  Suppression: sadness(88.6) suppresses anticipation by -25.72 (30% of sadness delta)
  Suppression: sadness(88.6) suppresses surprise by -17.15 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.9 × 0.2) + delta(-33.79) = -33.62
    sadness: carry(2.8 × 0.2) + delta(85.74) = 86.31
    *** sadness in RED ZONE: VU=86.3 (track capped at 75) ***
    anger: carry(2.0 × 0.2) + delta(38.46) = 38.87
    fear: carry(1.4 × 0.2) + delta(28.88) = 29.17
    disgust: carry(0.1 × 0.2) + delta(1.73) = 1.75
    surprise: carry(0.6 × 0.2) + delta(-8.65) = -8.53
    trust: carry(1.4 × 0.2) + delta(11.25) = 11.52
    anticipation: carry(1.4 × 0.2) + delta(-13.70) = -13.42

=== Chapter 14 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 15 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 16 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 17 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 18 ===
Character NOT PRESENT — values frozen, no line drawn
```

### Profile Reasoning

- **emotionalBaseline.joy**: Moderate-high joy sensitivity. Mai presents constant cheerfulness: "Fun, right?" while teaching assassination (Ch6), claps and beams repeatedly, bounces on her heels (Ch9). Her joy is partly a survival mechanism ("I stay positive because if I don't... I would have killed myself" Ch7) but it's also genuine warmth.
- **emotionalBaseline.sadness**: Moderate sadness sensitivity. Cries when Praew rejects her friendship (Ch7): "tears ran down Mai's face." Her backstory reveals deep loss (family taken Ch13). But she suppresses sadness behind positivity. Her grief surfaces only when her defenses crack.
- **emotionalBaseline.anger**: Moderate anger sensitivity. Shows anger when Praew judges her: "What do you know?!" (Ch7). Flares when called out on her past. But anger is less dominant than for other characters — she's more hurt than furious. Her anger toward the guards who killed her family is cold and lethal, not hot.
- **emotionalBaseline.fear**: Moderate fear sensitivity. Terrified when Praew mentions the Fourth Floor: "her eyes were terrified" (Ch13). Admits she was "still pretty nervous" teaching her first class (Ch9). Her fear is situational — she fears losing the few people she has, not physical danger.
- **emotionalBaseline.disgust**: Low-moderate disgust sensitivity. She teaches arterial strikes "brightly" (Ch6), handles death clinically. Her upbringing on the Fourth Floor desensitized her to violence. She doesn't show disgust at blood or death, only at cruelty toward the innocent.
- **emotionalBaseline.surprise**: Low surprise sensitivity. She's trained to expect the unexpected. Praew's defiance surprises her briefly ("Mai Azadi hesitated" Ch6) but she recovers instantly. Very little truly catches her off guard.
- **emotionalBaseline.trust**: High trust sensitivity. She desperately wants to trust and be trusted. Earning one friend after five years of perfect kills (Ch7). She extends trust quickly to Praew and is devastated when rejected. "I've decided, you can be my friend" (Ch6). Trust is her deepest need.
- **emotionalBaseline.anticipation**: Moderate. She anticipates social dynamics clumsily (reading a dating manual for friendship Ch9) but is less forward-planning than strategic characters. Her anticipation is emotional rather than tactical.
- **temperament.patience**: Moderate patience. She waited five years for the right to have a friend (Ch7). She gives Praew space after their argument per "the book" (Ch9). But she's also chatty and restless, filling silences compulsively, struggling to wait through social interactions.
- **temperament.impulsiveness**: Moderate. She reveals Godric's identity carelessly ("Oh well!" Ch6), shows up at Praew's house uninvited (Ch7), punches Praew during training without warning (Ch9). But in combat, she's calculated and precise — her impulsiveness is social, not tactical.
- **temperament.confrontationalTendency**: Moderate-high. She confronts Godric directly (Ch13), threatens students without hesitation (Ch6), stands between Praew and danger. But she avoids emotional confrontation — she deflects with humor rather than fighting when feelings are involved.
- **temperament.agreeableness**: Moderate-high. She desperately wants to please Praew, agrees to all of Praew's friendship rules (Ch9), adjusts her behavior when told it's uncomfortable. She's accommodating because she fears rejection, not because she's naturally submissive.
- **temperament.emotionalContainment**: Moderate-high. She masks immense trauma behind constant cheerfulness. "Her smile still fixed" while discussing murder (Ch6). Her containment is a survival strategy. But it breaks in key moments: crying about her family (Ch7), terror about the Fourth Floor (Ch13).
- **temperament.riskAppetite**: High risk appetite. Stabs Godric in the foot (Ch13), tells Praew classified information despite consequences, killed four guards as a child. She's willing to risk everything for those she cares about. Physical danger barely registers.
- **temperament.curiosity**: Moderate. She asks questions about friendship mechanics (Ch9), reads books to learn social skills. Her curiosity is directed at understanding human connection rather than mysteries or investigations.
- **temperament.prideSensitivity**: Low-moderate. She calls herself "the best assassin" (Ch7) but doesn't dwell on status. She's more concerned with acceptance than recognition. Being called a psychopath wounds her, but through rejection rather than pride.
- **temperament.shameSensitivity**: Moderate-high. She's ashamed of her social inadequacy: "Yeah, maybe I am sick" (Ch7). Reading a dating manual for friendship advice (Ch9) shows acute awareness of her deficiencies. She fears being seen as "not normal."
- **temperament.empathyBaseline**: Moderate-high. She saves Praew from having to kill (Ch6), fails her from the class to protect her conscience, trains her in silent movement to keep her safe. But empathy was suppressed by her training — it emerges selectively with those she's attached to.
- **temperament.dominanceVsDeference**: Balanced. She dominates in combat and classroom settings but defers to Praew socially. She follows The Prime's orders as an assassin. She's dominant when confident (combat) but submissive when insecure (friendship).
- **temperament.adaptabilityVsRigidity**: High adaptability. She adapts her teaching style, adjusts her behavior after Praew's criticism, shifts from formal instructor to friend seamlessly. Raised in brutal conditions, she learned to adapt or die. Her social flexibility is learned but genuine.
- **moralStructure.primaryDriver**: Connection. Mai kills because that's what she was shaped to do, but her driving motivation is human attachment. She earned the right to one friend and will do anything to keep that bond. Her moral compass follows the people she loves, not abstract principles.
- **moralStructure.moralRigidity**: Low moral rigidity. She operates in moral gray areas — killing is her job but she tries to minimize harm (saving Praew, explaining the victim's crimes Ch7). She doesn't have rigid rules; she navigates by loyalty and situational ethics.
- **moralStructure.guiltSensitivity**: Moderate guilt. She carries guilt about the lives she's taken, channeled into her forced positivity. "I stay positive because if I don't..." (Ch7). But she's also been conditioned to compartmentalize guilt. It surfaces when Praew forces her to confront it.
- **moralStructure.justificationTendency**: Moderate. She justifies her kills with context (the man killed his family Ch7) but doesn't build elaborate moral frameworks. She acknowledges the ugliness of what she does rather than fully rationalizing it. "You don't have to like what I do" (Ch7).


## Asher

### Emotion Values Per Chapter

```
Ch |    joy |  sadne |  anger |   fear |  disgu |  surpr |  trust |  antic
--------------------------------------------------------------------------
 0 |      0 |      0 |      0 |      0 |      0 |      0 |      0 |      0
 1 |      6 |     41 |     16 |      2 |     11 |      0 |      0 |      2
 2 |      0 |     63 |     35 |      9 |     15 |      0 |      0 |      0
 3 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
 4 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
 5 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
 6 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
 7 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
 8 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
 9 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
10 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
11 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
12 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
13 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
14 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
15 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
16 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
17 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
18 |      0 |     64 |     38 |     25 |      7 |      0 |      0 |      0
```

### Calculation Breakdown

```

=== Chapter 0 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 1 ===
Stimulants this chapter: 6

  Stimulant: "Asher struggles to put down the book "Srevlis" for the last time, honoring a pact with his friends to never read it again before the Hunter test"
    Event: loss | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=0.85 × weight=0.7 → raw=8.92
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.92 × (1 + 0.440) = 12.85
    Final delta: 12.85 × 1 × 1.1 = 14.14
    fear: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 2.55 × (1 + -0.420) = 1.48
    Final delta: 1.48 × 1 × 1.1 = 1.63
    anger: base=13 × trig=0.85 × weight=0.1 → raw=1.10
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.10 × (1 + 0.127) = 1.24
    Final delta: 1.24 × 1 × 1.1 = 1.37

  Stimulant: "Asher defends Praew against Renwick's sexist mockery, snapping his book shut and verbally lashing Renwick"
    Event: moral_cue | Subject: friend | Source: enemy_caused | Domain: morality
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    disgust: base=13 × trig=0.85 × weight=0.4 → raw=4.42
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 4.42 × (1 + -0.080) = 4.07
    Final delta: 4.07 × 0.8 × 0.8 = 2.60
    anger: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.31 × (1 + 0.127) = 3.73
    Final delta: 3.73 × 0.8 × 0.8 = 2.39
    sadness: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.82 × (1 + 0.440) = 5.51
    Final delta: 5.51 × 0.8 × 0.8 = 3.53

  Stimulant: "Asher passes the knowledge portion of the Hunter exam, hearing his name called last among the six survivors"
    Event: success | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=8 × trig=1 × weight=0.7 → raw=5.60
    Trait modifiers for joy (total: -0.100):
  empathyBaseline(45/75 × 0.2) = +0.120 [Empathic joy — shares in others' happiness]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 5.60 × (1 + -0.100) = 5.04
    Final delta: 5.04 × 1 × 1.1 = 5.54
    trust: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 2.60 × (1 + -0.220) = 2.03
    Final delta: 2.03 × 1 × 1.1 = 2.23
    anticipation: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 1.80 × (1 + -0.100) = 1.62
    Final delta: 1.62 × 1 × 1.1 = 1.78

  Stimulant: "Asher glances up at The Prime Archon watching from above and realizes the test is rigged so both he and Haldric will fail"
    Event: betrayal | Subject: family | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=15 × trig=1 × weight=0.4 → raw=6.00
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.00 × (1 + 0.440) = 8.64
    Final delta: 8.64 × 0.9 × 1 = 7.78
    anger: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.90 × (1 + 0.127) = 4.39
    Final delta: 4.39 × 0.9 × 1 = 3.95
    trust (COLLAPSE): base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 3.90 × (1 + -0.220) = 3.04
    Final delta: 3.04 × 0.9 × 1 = 2.74
    → Trust COLLAPSED by -2.74

  Stimulant: "Asher hesitates at the ledge, then deliberately turns away from Haldric and takes both stones, betraying his best friend to pass the test"
    Event: moral_cue | Subject: friend | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    disgust: base=13 × trig=1 × weight=0.4 → raw=5.20
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 5.20 × (1 + -0.080) = 4.78
    Final delta: 4.78 × 0.8 × 1.1 = 4.21
    anger: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.90 × (1 + 0.127) = 4.39
    Final delta: 4.39 × 0.8 × 1.1 = 3.87
    sadness: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.50 × (1 + 0.440) = 6.48
    Final delta: 6.48 × 0.8 × 1.1 = 5.70

  Stimulant: "Asher refuses to meet Haldric's furious gaze after stealing both stones, consumed by silent guilt"
    Event: humiliation | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=1 × weight=0.4 → raw=6.00
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.00 × (1 + 0.440) = 8.64
    Final delta: 8.64 × 1 × 1.1 = 9.50
    anger: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.90 × (1 + 0.127) = 4.39
    Final delta: 4.39 × 1 × 1.1 = 4.83
    disgust: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.90 × (1 + -0.080) = 3.59
    Final delta: 3.59 × 1 × 1.1 = 3.95

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(5.54) = 5.54
    sadness: carry(0.0 × 0.2) + delta(40.64) = 40.64
    anger: carry(0.0 × 0.2) + delta(16.41) = 16.41
    fear: carry(0.0 × 0.2) + delta(1.63) = 1.63
    disgust: carry(0.0 × 0.2) + delta(10.76) = 10.76
    trust: carry(0.0 × 0.2) + delta(-0.51) = -0.51
    anticipation: carry(0.0 × 0.2) + delta(1.78) = 1.78

=== Chapter 2 ===
Stimulants this chapter: 10

  Stimulant: "Asher is announced as a Beast Hunter, the most prestigious role aside from Mythical Beast Hunter, triggering gasps across the hall"
    Event: success | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=8 × trig=1 × weight=0.7 → raw=5.60
    Trait modifiers for joy (total: -0.100):
  empathyBaseline(45/75 × 0.2) = +0.120 [Empathic joy — shares in others' happiness]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 5.60 × (1 + -0.100) = 5.04
    Final delta: 5.04 × 1 × 1 = 5.04
    trust: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 2.60 × (1 + -0.220) = 2.03
    Final delta: 2.03 × 1 × 1 = 2.03
    anticipation: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 1.80 × (1 + -0.100) = 1.62
    Final delta: 1.62 × 1 × 1 = 1.62

  Stimulant: "Asher feels Haldric's blazing hatred radiating from him after the role announcements, knowing his friend despises him"
    Event: rejection | Subject: friend | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=1 × weight=0.6 → raw=9.00
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.00 × (1 + 0.440) = 12.96
    Final delta: 12.96 × 0.8 × 1.1 = 11.40
    anger: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.60 × (1 + 0.127) = 2.93
    Final delta: 2.93 × 0.8 × 1.1 = 2.58
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.420) = 1.74
    Final delta: 1.74 × 0.8 × 1.1 = 1.53

  Stimulant: "Asher turns his back on Praew and Haldric without saying goodbye or apologizing, walking away like a coward"
    Event: separation | Subject: friend | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=1 × weight=0.6 → raw=9.00
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.00 × (1 + 0.440) = 12.96
    Final delta: 12.96 × 0.8 × 1.1 = 11.40
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.420) = 1.74
    Final delta: 1.74 × 0.8 × 1.1 = 1.53
    anger: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.60 × (1 + 0.127) = 2.93
    Final delta: 2.93 × 0.8 × 1.1 = 2.58

  Stimulant: "Asher walks past The Prime and coldly accuses his father of trying to sabotage him by pitting him against his best friend"
    Event: betrayal | Subject: family | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=15 × trig=0.85 × weight=0.4 → raw=5.10
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.10 × (1 + 0.440) = 7.34
    Final delta: 7.34 × 0.9 × 1 = 6.61
    anger: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.31 × (1 + 0.127) = 3.73
    Final delta: 3.73 × 0.9 × 1 = 3.36
    trust (COLLAPSE): base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 3.31 × (1 + -0.220) = 2.59
    Final delta: 2.59 × 0.9 × 1 = 2.33
    → Trust COLLAPSED by -2.33

  Stimulant: "Renwick taunts Asher with "all Rivers run cold," and Asher internally admits Renwick is right about his cruelty"
    Event: insult | Subject: self | Source: enemy_caused | Domain: morality
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=13 × trig=0.85 × weight=0.6 → raw=6.63
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 6.63 × (1 + 0.127) = 7.47
    Final delta: 7.47 × 1 × 0.8 = 5.98
    disgust: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 2.21 × (1 + -0.080) = 2.03
    Final delta: 2.03 × 1 × 0.8 = 1.63
    sadness: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.55 × (1 + 0.440) = 3.67
    Final delta: 3.67 × 1 × 0.8 = 2.94

  Stimulant: "Asher silently apologizes to Haldric and Praew in his mind, clenching his fists with guilt while walking away"
    Event: moral_cue | Subject: friend | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    disgust: base=13 × trig=0.85 × weight=0.4 → raw=4.42
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 4.42 × (1 + -0.080) = 4.07
    Final delta: 4.07 × 0.8 × 1.1 = 3.58
    anger: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.31 × (1 + 0.127) = 3.73
    Final delta: 3.73 × 0.8 × 1.1 = 3.29
    sadness: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.82 × (1 + 0.440) = 5.51
    Final delta: 5.51 × 0.8 × 1.1 = 4.85

  Stimulant: "Both Asher and Renwick are overwhelmed and blinded by the sun on their first surface exposure, crying and panicking"
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 10.50 × (1 + -0.420) = 6.09
    Final delta: 6.09 × 1 × 0.7 = 4.26
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + -0.100) = 3.24
    Final delta: 3.24 × 1 × 0.7 = 2.27
    anger: base=13 × trig=1 × weight=0.1 → raw=1.30
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.30 × (1 + 0.127) = 1.46
    Final delta: 1.46 × 1 × 0.7 = 1.03

  Stimulant: "Asher discovers the air on the surface is richer and thicker, coughing violently as his lungs burn from the unfamiliar sensation"
    Event: obstacle | Subject: self | Source: world_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    anger: base=13 × trig=0.85 × weight=0.4 → raw=4.42
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.42 × (1 + 0.127) = 4.98
    Final delta: 4.98 × 1 × 0.7 = 3.49
    anticipation: base=18 × trig=0.85 × weight=0.3 → raw=4.59
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 4.59 × (1 + -0.100) = 4.13
    Final delta: 4.13 × 1 × 0.7 = 2.89
    fear: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 3.82 × (1 + -0.420) = 2.22
    Final delta: 2.22 × 1 × 0.7 = 1.55

  Stimulant: "Asher meets his team lead Azel and is immediately embarrassed for speaking rudely to a superior"
    Event: humiliation | Subject: self | Source: self_caused | Domain: status
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=15 × trig=0.85 × weight=0.4 → raw=5.10
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.10 × (1 + 0.440) = 7.34
    Final delta: 7.34 × 1 × 1.1 = 8.08
    anger: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.31 × (1 + 0.127) = 3.73
    Final delta: 3.73 × 1 × 1.1 = 4.11
    disgust: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.31 × (1 + -0.080) = 3.05
    Final delta: 3.05 × 1 × 1.1 = 3.35

  Stimulant: "Azel mocks Asher for crying and screaming during his first exposure to sunlight, revealing other Hunters watched as hazing tradition"
    Event: humiliation | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=15 × trig=0.85 × weight=0.4 → raw=5.10
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.10 × (1 + 0.440) = 7.34
    Final delta: 7.34 × 1 × 1.3 = 9.55
    anger: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.31 × (1 + 0.127) = 3.73
    Final delta: 3.73 × 1 × 1.3 = 4.86
    disgust: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.31 × (1 + -0.080) = 3.05
    Final delta: 3.05 × 1 × 1.3 = 3.96

  Suppression applied:
  Suppression: sadness(95.5) suppresses joy by -32.90 (60% of sadness delta)
  Suppression: sadness(95.5) suppresses anticipation by -16.45 (30% of sadness delta)
  Suppression: sadness(95.5) suppresses surprise by -10.97 (20% of sadness delta)

  Emotion updates:
    joy: carry(5.5 × 0.2) + delta(-27.86) = -26.75
    sadness: carry(40.6 × 0.2) + delta(54.83) = 62.96
    anger: carry(16.4 × 0.2) + delta(31.25) = 34.54
    fear: carry(1.6 × 0.2) + delta(8.88) = 9.20
    disgust: carry(10.8 × 0.2) + delta(12.52) = 14.68
    trust: carry(0.0 × 0.2) + delta(-0.30) = -0.30
    anticipation: carry(1.8 × 0.2) + delta(-9.67) = -9.31

=== Chapter 3 ===
Stimulants this chapter: 12

  Stimulant: "Asher nearly dies on his very first step on the surface when a BoltStone erupts where he stood; Azel yanks him back just in time"
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 10.50 × (1 + -0.420) = 6.09
    Final delta: 6.09 × 1 × 0.7 = 4.26
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + -0.100) = 3.24
    Final delta: 3.24 × 1 × 0.7 = 2.27
    anger: base=13 × trig=1 × weight=0.1 → raw=1.30
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.30 × (1 + 0.127) = 1.46
    Final delta: 1.46 × 1 × 0.7 = 1.03

  Stimulant: "Azel berates Asher for being distracted by the beauty of the surface, shattering his sense of awe"
    Event: constraint | Subject: self | Source: ally_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 6.50 × (1 + 0.127) = 7.32
    Final delta: 7.32 × 1 × 1.3 = 9.52
    fear: base=15 × trig=1 × weight=0.3 → raw=4.50
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 4.50 × (1 + -0.420) = 2.61
    Final delta: 2.61 × 1 × 1.3 = 3.39
    sadness: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.00 × (1 + 0.440) = 4.32
    Final delta: 4.32 × 1 × 1.3 = 5.62

  Stimulant: "Asher nearly draws his blade on a non-aggressive beast, almost getting both himself and Azel killed"
    Event: danger_cue | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 10.50 × (1 + -0.420) = 6.09
    Final delta: 6.09 × 1 × 1.1 = 6.70
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + -0.100) = 3.24
    Final delta: 3.24 × 1 × 1.1 = 3.56
    anger: base=13 × trig=1 × weight=0.1 → raw=1.30
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.30 × (1 + 0.127) = 1.46
    Final delta: 1.46 × 1 × 1.1 = 1.61

  Stimulant: "Asher reveals his surname Rivers and the team reacts with an unspoken, uncomfortable tension upon learning he is The Prime Archon's son"
    Event: rejection | Subject: self | Source: world_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    sadness: base=15 × trig=0.85 × weight=0.6 → raw=7.65
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.65 × (1 + 0.440) = 11.02
    Final delta: 11.02 × 1 × 0.7 = 7.71
    anger: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.21 × (1 + 0.127) = 2.49
    Final delta: 2.49 × 1 × 0.7 = 1.74
    fear: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 2.55 × (1 + -0.420) = 1.48
    Final delta: 1.48 × 1 × 0.7 = 1.04

  Stimulant: "Asher learns beasts can be farmed and food shortage is manufactured, questioning everything he was taught"
    Event: surprise_reveal | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    surprise: base=12 × trig=0.85 × weight=0.7 → raw=7.14
    Trait modifiers for surprise (total: -0.283):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(50/75 × -0.2) = -0.133 [Adaptable = recovers from surprise faster]
  impulsiveness(35/75 × 0.15) = +0.070 [Impulsive = reacts more to surprises]
    Modified delta: 7.14 × (1 + -0.283) = 5.12
    Final delta: 5.12 × 0.7 × 1 = 3.58
    fear: base=15 × trig=0.85 × weight=0.15 → raw=1.91
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 1.91 × (1 + -0.420) = 1.11
    Final delta: 1.11 × 0.7 × 1 = 0.78
    anticipation: base=18 × trig=0.85 × weight=0.15 → raw=2.29
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 2.29 × (1 + -0.100) = 2.07
    Final delta: 2.07 × 0.7 × 1 = 1.45

  Stimulant: "Asher is given a shovel and told his Beast Hunter job is shoveling manure, realizing his father got the last laugh"
    Event: humiliation | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    sadness: base=15 × trig=1 × weight=0.4 → raw=6.00
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.00 × (1 + 0.440) = 8.64
    Final delta: 8.64 × 1 × 1 = 8.64
    anger: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.90 × (1 + 0.127) = 4.39
    Final delta: 4.39 × 1 × 1 = 4.39
    disgust: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.90 × (1 + -0.080) = 3.59
    Final delta: 3.59 × 1 × 1 = 3.59

  Stimulant: "Asher reflects on the flashback where his father forbade him from becoming a Hunter, remembering the original wound that drove his defiance"
    Event: constraint | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.52 × (1 + 0.127) = 6.22
    Final delta: 6.22 × 1 × 1 = 6.22
    fear: base=15 × trig=0.85 × weight=0.3 → raw=3.82
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 3.82 × (1 + -0.420) = 2.22
    Final delta: 2.22 × 1 × 1 = 2.22
    sadness: base=15 × trig=0.85 × weight=0.2 → raw=2.55
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.55 × (1 + 0.440) = 3.67
    Final delta: 3.67 × 1 × 1 = 3.67

  Stimulant: "Eight-year-old Asher is harshly told by his father never to call him "Father" in public again, and to only use "Prime Archon""
    Event: rejection | Subject: family | Source: authority_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=15 × trig=1 × weight=0.6 → raw=9.00
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.00 × (1 + 0.440) = 12.96
    Final delta: 12.96 × 0.9 × 1 = 11.66
    anger: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.60 × (1 + 0.127) = 2.93
    Final delta: 2.93 × 0.9 × 1 = 2.64
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.420) = 1.74
    Final delta: 1.74 × 0.9 × 1 = 1.57

  Stimulant: "Young Asher sees his father visibly shaken and terrified after becoming Prime, seeing a stone embedded in his chest, and is sworn to secrecy"
    Event: surprise_reveal | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    surprise: base=12 × trig=0.85 × weight=0.7 → raw=7.14
    Trait modifiers for surprise (total: -0.283):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(50/75 × -0.2) = -0.133 [Adaptable = recovers from surprise faster]
  impulsiveness(35/75 × 0.15) = +0.070 [Impulsive = reacts more to surprises]
    Modified delta: 7.14 × (1 + -0.283) = 5.12
    Final delta: 5.12 × 0.9 × 1 = 4.61
    fear: base=15 × trig=0.85 × weight=0.15 → raw=1.91
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 1.91 × (1 + -0.420) = 1.11
    Final delta: 1.11 × 0.9 × 1 = 1.00
    anticipation: base=18 × trig=0.85 × weight=0.15 → raw=2.29
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 2.29 × (1 + -0.100) = 2.07
    Final delta: 2.07 × 0.9 × 1 = 1.86

  Stimulant: "Young Asher's father slams his palm so hard it dents a stone table when Asher says he'd rather be a Hunter than end up like him"
    Event: threat | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    fear: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 10.50 × (1 + -0.420) = 6.09
    Final delta: 6.09 × 0.9 × 1 = 5.48
    anger: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.60 × (1 + 0.127) = 2.93
    Final delta: 2.93 × 0.9 × 1 = 2.64
    anticipation: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 1.80 × (1 + -0.100) = 1.62
    Final delta: 1.62 × 0.9 × 1 = 1.46

  Stimulant: "Young Asher feels something crack inside him as his father demands to only be called Prime Archon, knowing the damage is permanent"
    Event: loss | Subject: family | Source: authority_caused | Domain: attachment
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=15 × trig=1 × weight=0.7 → raw=10.50
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.50 × (1 + 0.440) = 15.12
    Final delta: 15.12 × 0.9 × 1 = 13.61
    fear: base=15 × trig=1 × weight=0.2 → raw=3.00
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 3.00 × (1 + -0.420) = 1.74
    Final delta: 1.74 × 0.9 × 1 = 1.57
    anger: base=13 × trig=1 × weight=0.1 → raw=1.30
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.30 × (1 + 0.127) = 1.46
    Final delta: 1.46 × 0.9 × 1 = 1.32

  Stimulant: "Young Asher is comforted by Praew and Haldric who mock the idea of being Prime Archon and invite him to become a Hunter with them instead"
    Event: connection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 5.52 × (1 + -0.220) = 4.31
    Final delta: 4.31 × 0.8 × 1.3 = 4.48
    joy: base=8 × trig=0.85 × weight=0.3 → raw=2.04
    Trait modifiers for joy (total: -0.100):
  empathyBaseline(45/75 × 0.2) = +0.120 [Empathic joy — shares in others' happiness]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 2.04 × (1 + -0.100) = 1.84
    Final delta: 1.84 × 0.8 × 1.3 = 1.91
    anticipation: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 3.06 × (1 + -0.100) = 2.75
    Final delta: 2.75 × 0.8 × 1.3 = 2.86

  Suppression applied:
  Suppression: anger(65.6) suppresses joy by -15.55 (50% of anger delta)
  Suppression: anger(65.6) suppresses trust by -9.33 (30% of anger delta)
  Suppression: anger(65.6) suppresses fear by -4.67 (15% of anger delta)
  Suppression: sadness(113.9) suppresses joy by -30.55 (60% of sadness delta)
  Suppression: sadness(113.9) suppresses anticipation by -15.27 (30% of sadness delta)
  Suppression: sadness(113.9) suppresses surprise by -10.18 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.2) + delta(-44.19) = -44.19
    sadness: carry(63.0 × 0.2) + delta(50.91) = 63.50
    anger: carry(34.5 × 0.2) + delta(31.11) = 38.02
    fear: carry(9.2 × 0.2) + delta(23.33) = 25.17
    disgust: carry(14.7 × 0.2) + delta(3.59) = 6.52
    surprise: carry(0.0 × 0.2) + delta(-2.00) = -2.00
    trust: carry(0.0 × 0.2) + delta(-4.85) = -4.85
    anticipation: carry(0.0 × 0.2) + delta(-1.81) = -1.81

=== Chapter 4 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 5 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 6 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 7 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 8 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 9 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 10 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 11 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 12 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 13 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 14 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 15 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 16 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 17 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 18 ===
Character NOT PRESENT — values frozen, no line drawn
```

### Profile Reasoning

- **emotionalBaseline.joy**: Low joy sensitivity. Asher's rare moments of lightness are subdued: his "easy confidence more subdued than usual" after passing the test (Ch1). As a child, he smiled at Praew and Haldric's boldness about his father (Ch3). Joy is muted by the weight he carries.
- **emotionalBaseline.sadness**: Moderate sadness sensitivity. He feels the weight of betraying his friends: "I'm sorry, Haldric. Praew" (Ch2 internal). He looked "torn" before choosing the stones over Haldric (Ch1). His sadness manifests as quiet withdrawal rather than tears.
- **emotionalBaseline.anger**: Moderate anger sensitivity. Confronts his father coldly: "You should know better than to call me that in public" (Ch2). As a child, he yells back at Arthur: "Or are you too busy hiding down here like a coward?" (Ch3). His anger is controlled and cutting, not explosive.
- **emotionalBaseline.fear**: Moderate fear sensitivity. Terrified on the surface: "I can't see! What's happening!?" (Ch2). Nervous before Azel. But he pushes through fear consistently. His fear of becoming like his father is his deepest psychological driver.
- **emotionalBaseline.disgust**: Moderate. Disgusted by his father's control and manipulations (Ch2-3). "Hated being in that bolting man's shadow" (Ch3). His disgust is directed at power abuse and hypocrisy rather than physical stimuli.
- **emotionalBaseline.surprise**: Low-moderate. He's caught off guard by the surface's blinding light (Ch2) and Renwick's insight about "all Rivers run cold" (Ch2). But he's generally composed and anticipates situations.
- **emotionalBaseline.trust**: Moderate trust sensitivity. He trusted Praew and Haldric deeply as childhood friends, making his betrayal more painful for all. His trust in others is guarded due to his father's controlling nature. Renwick's "All Rivers run cold" hits because he fears it's true.
- **emotionalBaseline.anticipation**: Moderate-high anticipation. He planned to become a Hunter for twelve years specifically to escape his father. He reads the test situation and makes a calculated choice. He's always thinking about the future implications of his actions.
- **temperament.patience**: Moderate patience. He endures years under his father's control, waits twelve years to take the Hunter test. He's patient in pursuit of long-term goals. But he's impatient with people who waste his time (snaps at Renwick Ch2).
- **temperament.impulsiveness**: Low-moderate impulsiveness. His betrayal of Haldric looks impulsive but was actually a split-second calculation: "Asher realized the ploy — they were both about to fail" (Ch3). He acts decisively but with reason, not pure impulse.
- **temperament.confrontationalTendency**: Moderate. He confronts his father directly (Ch2, Ch3) but walks away from Haldric and Praew without explanation — avoiding emotional confrontation while engaging in ideological ones. Selective confrontation.
- **temperament.agreeableness**: Low-moderate. He defends Praew against Renwick (Ch1) showing care, but ultimately prioritizes self-interest (taking both stones Ch1). He's agreeable when it costs nothing, pragmatic when it matters.
- **temperament.emotionalContainment**: Moderate-high containment. "His hands were trembling at his sides" but he doesn't react externally to being named Beast Hunter (Ch2). He doesn't cry when leaving friends. He swallows his guilt internally. Better contained than Haldric but not as locked down as The Prime.
- **temperament.riskAppetite**: Moderate. He takes the enormous risk of becoming a Hunter against his father's wishes. But his betrayal was actually risk-averse: he chose the certain outcome (both stones) over the uncertain one (both might fail). His risk calculation is pragmatic.
- **temperament.curiosity**: Moderate. He's curious about the surface world, asks questions about the food shortage (Ch3), wants to understand why beasts can be farmed. His curiosity is practical rather than investigative.
- **temperament.prideSensitivity**: Moderate-high. He hates being in his father's shadow: "he just wanted to be seen for himself" (Ch3). His voice deepens when introducing himself (Ch3). Being "The Prime's son" is a wound to his pride and identity.
- **temperament.shameSensitivity**: Moderate. He feels shame about his family name ("All Rivers run cold" stings Ch2), about the betrayal he committed, and about his father's reputation. "That bolting Ratrod. Though... he's right, isn't he?" (Ch2 about Renwick's cold accusation).
- **temperament.empathyBaseline**: Moderate empathy. He cares about Praew and Haldric (the childhood friendship was genuine). He's affected by Renwick's harassment of Praew (Ch1). But he suppresses empathy when it conflicts with survival, making him capable of the betrayal.
- **temperament.dominanceVsDeference**: Moderate-deferential. He defers to Azel immediately (Ch2-3), follows Hunter Steel's orders. His rebellion against his father is actually about autonomy rather than dominance — he wants to be free, not to rule.
- **temperament.adaptabilityVsRigidity**: Moderate adaptability. He adapts to surface life, to Azel's authority, to his new role. But his core decision (escape father, become Hunter) is rigid — he won't compromise on it even at the cost of his closest friendships.
- **moralStructure.primaryDriver**: Self-determination and pragmatic survival. Asher's primary drive is escaping his father's shadow and forging his own path. He chose betrayal not from malice but from a calculated assessment that both would fail otherwise. "A Hunter mustn't hesitate" (Ch2-3).
- **moralStructure.moralRigidity**: Low moral rigidity. He operates on situational ethics. The betrayal shows he'll break moral rules (loyalty to friends) when the situation demands pragmatic action. He doesn't have rigid principles — he adapts his morality to circumstances.
- **moralStructure.guiltSensitivity**: Moderate-high guilt. "I'm sorry, Haldric. Praew" echoes internally (Ch2). He can't meet their eyes after the betrayal. He walks away without saying goodbye because he can't face what he's done. Guilt lingers persistently but doesn't change his course of action.
- **moralStructure.justificationTendency**: Moderate-high. He rationalizes the betrayal: his father was sabotaging them both, at least one of them made it. "A Hunter mustn't hesitate" becomes his mantra (Ch2-3). He uses logic to justify emotional damage, but the justifications feel hollow even to him.
