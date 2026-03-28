# Character Engine — Calculator Results

Generated: 2026-03-28T06:38:46.278Z


## Praew

### Emotion Values Per Chapter

```
Ch |    joy |  sadne |  anger |   fear |  disgu |  surpr |  trust |  antic
--------------------------------------------------------------------------
 0 |      0 |     20 |      6 |      3 |      0 |     13 |      0 |      9
 1 |      0 |    75! |    75! |      9 |     27 |      0 |      0 |      0
 2 |      0 |     68 |     54 |     11 |     11 |      5 |      0 |      0
 3 |      0 |     17 |     13 |      3 |      3 |      1 |      0 |      0
 4 |      0 |     64 |     33 |     15 |     11 |      0 |      6 |      0
 5 |      0 |     42 |     27 |      8 |     13 |      6 |      0 |      0
 6 |      0 |     40 |     48 |     16 |     10 |     10 |      0 |      0
 7 |      0 |     48 |     49 |     21 |     28 |      4 |      0 |      2
 8 |      0 |     52 |     32 |     19 |      7 |      5 |      0 |      0
 9 |      8 |     13 |     10 |     11 |      2 |     14 |     12 |      9
10 |     25 |      3 |      3 |     13 |      0 |     16 |      9 |      5
11 |      6 |      1 |      1 |      3 |      0 |      4 |      2 |      1
12 |      2 |     48 |     20 |      6 |      7 |     12 |      1 |      5
13 |      0 |    75! |    75! |     13 |     11 |      4 |      0 |      0
14 |      0 |     75 |     75 |     13 |     11 |      4 |      0 |      0
15 |      0 |    75! |     68 |     10 |      3 |      0 |      0 |      0
16 |      0 |    75! |     59 |     10 |      9 |      0 |      0 |      0
17 |      0 |     33 |     38 |      4 |      2 |     11 |      9 |      3
18 |      0 |     71 |     53 |     11 |     16 |      5 |      2 |      0
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
    sadness: base=40 × trig=0.85 × weight=0.5 → raw=17.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 17.00 × (1 + 0.720) = 29.24
    Final delta: 29.24 × 1 × 0.7 = 20.47
    fear: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 6.88 × (1 + -0.360) = 4.41
    Final delta: 4.41 × 1 × 0.7 = 3.08
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.453) = 7.91
    Final delta: 7.91 × 1 × 0.7 = 5.53
  Ambient surprise: avg_trigger(0.85) × 15 = +12.8
  Ambient anticipation: extreme event detected → +8.5

  Emotion updates:
    sadness: carry(0.0 × 0.25) + delta(20.47) = 20.47
    anger: carry(0.0 × 0.25) + delta(5.53) = 5.53
    fear: carry(0.0 × 0.25) + delta(3.08) = 3.08
    surprise: carry(0.0 × 0.25) + delta(12.75) = 12.75
    anticipation: carry(0.0 × 0.25) + delta(8.50) = 8.50

=== Chapter 1 ===
Stimulants this chapter: 9

  Stimulant: "Praew closes the book for the last time as part of a pact with her friends, saying goodbye to the story that raised her."
    Event: separation | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=40 × trig=0.85 × weight=0.6 → raw=20.40
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 20.40 × (1 + 0.720) = 35.09
    Final delta: 35.09 × 1 × 1.1 = 38.60
    fear: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.59 × (1 + -0.360) = 2.94
    Final delta: 2.94 × 1 × 1.1 = 3.23
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.453) = 7.91
    Final delta: 7.91 × 1 × 1.1 = 8.70

  Stimulant: "Praew feels tense and anxious in the waiting hall before the Hunter Test, doubting herself and spiraling with negative thoughts."
    Event: threat | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=1 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=27 × trig=0.85 × weight=0.7 → raw=16.06
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 16.06 × (1 + -0.360) = 10.28
    Final delta: 10.28 × 1 × 1.1 = 11.31
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.453) = 7.91
    Final delta: 7.91 × 1 × 1.1 = 8.70
    anticipation: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.72 × (1 + 0.087) = 2.96
    Final delta: 2.96 × 1 × 1.1 = 3.25

  Stimulant: "Praew catches herself using her height and gender as excuses and angrily refuses to accept them as reasons for potential failure."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=31 × trig=0.85 × weight=0.4 → raw=10.54
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 10.54 × (1 + 0.140) = 12.02
    Final delta: 12.02 × 1 × 1.1 = 13.22
    anger: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 8.16 × (1 + 0.453) = 11.86
    Final delta: 11.86 × 1 × 1.1 = 13.05
    sadness: base=40 × trig=0.85 × weight=0.3 → raw=10.20
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.20 × (1 + 0.720) = 17.54
    Final delta: 17.54 × 1 × 1.1 = 19.30

  Stimulant: "Renwick mocks Praew for being emotional about the book and says women should not be Hunters."
    Event: insult | Subject: self | Source: enemy_caused | Domain: status
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=32 × trig=0.85 × weight=0.6 → raw=16.32
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 16.32 × (1 + 0.453) = 23.72
    Final delta: 23.72 × 1 × 0.8 = 18.97
    disgust: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 5.27 × (1 + 0.140) = 6.01
    Final delta: 6.01 × 1 × 0.8 = 4.81
    sadness: base=40 × trig=0.85 × weight=0.2 → raw=6.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.80 × (1 + 0.720) = 11.70
    Final delta: 11.70 × 1 × 0.8 = 9.36

  Stimulant: "Haldric and Asher perform their triangle hand gesture and recite their bond phrase, giving Praew reassurance before her test."
    Event: connection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=36 × trig=1 × weight=0.5 → raw=18.00
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 18.00 × (1 + -0.100) = 16.20
    Final delta: 16.20 × 0.8 × 1.3 = 16.85
    joy: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 9.60 × (1 + 0.100) = 10.56
    Final delta: 10.56 × 0.8 × 1.3 = 10.98
    anticipation: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 6.40 × (1 + 0.087) = 6.95
    Final delta: 6.95 × 0.8 × 1.3 = 7.23

  Stimulant: "During the knowledge exam, a mysterious red-glowing stone overwhelms Praew with alien emotions: alarm, fear, hatred, longing, sadness, and defiance."
    Event: surprise_reveal | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    surprise: base=23 × trig=0.85 × weight=0.7 → raw=13.69
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 13.69 × (1 + -0.143) = 11.72
    Final delta: 11.72 × 1 × 0.7 = 8.21
    fear: base=27 × trig=0.85 × weight=0.15 → raw=3.44
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.44 × (1 + -0.360) = 2.20
    Final delta: 2.20 × 1 × 0.7 = 1.54
    anticipation: base=32 × trig=0.85 × weight=0.15 → raw=4.08
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 4.08 × (1 + 0.087) = 4.43
    Final delta: 4.43 × 1 × 0.7 = 3.10

  Stimulant: "Praew watches Asher abandon Haldric during the practical test, choosing to take both stones instead of helping his friend."
    Event: betrayal | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=40 × trig=1 × weight=0.4 → raw=16.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.00 × (1 + 0.720) = 27.52
    Final delta: 27.52 × 0.8 × 1.3 = 28.62
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 0.8 × 1.3 = 14.51
    trust (COLLAPSE): base=36 × trig=1 × weight=0.3 → raw=10.80
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 10.80 × (1 + -0.100) = 9.72
    Final delta: 9.72 × 0.8 × 1.3 = 10.11
    → Trust COLLAPSED by -10.11

  Stimulant: "Renwick sexually harasses Praew during the practical test, causing her to hesitate and stumble, losing the competition."
    Event: humiliation | Subject: self | Source: enemy_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    sadness: base=40 × trig=1 × weight=0.4 → raw=16.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.00 × (1 + 0.720) = 27.52
    Final delta: 27.52 × 1 × 0.8 = 22.02
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 1 × 0.8 = 11.16
    disgust: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 9.30 × (1 + 0.140) = 10.60
    Final delta: 10.60 × 1 × 0.8 = 8.48

  Stimulant: "Praew fails the Hunter Test permanently with no second chances, losing her lifelong dream."
    Event: failure | Subject: self | Source: enemy_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    sadness: base=40 × trig=1 × weight=0.5 → raw=20.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 20.00 × (1 + 0.720) = 34.40
    Final delta: 34.40 × 1 × 0.8 = 27.52
    fear: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.10 × (1 + -0.360) = 5.18
    Final delta: 5.18 × 1 × 0.8 = 4.15
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.453) = 9.30
    Final delta: 9.30 × 1 × 0.8 = 7.44

  Suppression applied:
  Suppression: anger(88.1) suppresses joy by -41.26 (50% of anger delta)
  Suppression: anger(88.1) suppresses trust by -24.76 (30% of anger delta)
  Suppression: anger(88.1) suppresses fear by -12.38 (15% of anger delta)
  Suppression: sadness(165.9) suppresses joy by -87.25 (60% of sadness delta)
  Suppression: sadness(165.9) suppresses anticipation by -43.62 (30% of sadness delta)
  Suppression: sadness(165.9) suppresses surprise by -29.08 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-117.53) = -117.53
    sadness: carry(20.5 × 0.25) + delta(145.41) = 150.53
    *** sadness in RED ZONE: VU=100.0 (track capped at 75) ***
    anger: carry(5.5 × 0.25) + delta(82.53) = 83.91
    *** anger in RED ZONE: VU=83.9 (track capped at 75) ***
    fear: carry(3.1 × 0.25) + delta(7.85) = 8.62
    disgust: carry(0.0 × 0.25) + delta(26.51) = 26.51
    surprise: carry(12.8 × 0.25) + delta(-20.88) = -17.69
    trust: carry(0.0 × 0.25) + delta(-18.02) = -18.02
    anticipation: carry(8.5 × 0.25) + delta(-30.03) = -27.91

=== Chapter 2 ===
Stimulants this chapter: 4

  Stimulant: "Praew is assigned to Special Forces under the constable, an unexpectedly good position that surprises her."
    Event: success | Subject: self | Source: authority_caused | Domain: future_security
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=32 × trig=1 × weight=0.7 → raw=22.40
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 22.40 × (1 + 0.100) = 24.64
    Final delta: 24.64 × 1 × 1 = 24.64
    trust: base=36 × trig=1 × weight=0.2 → raw=7.20
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 7.20 × (1 + -0.100) = 6.48
    Final delta: 6.48 × 1 × 1 = 6.48
    anticipation: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.20 × (1 + 0.087) = 3.48
    Final delta: 3.48 × 1 × 1 = 3.48

  Stimulant: "Praew watches Haldric shake with rage as Asher is named Beast Hunter, feeling the tension between her friends."
    Event: danger_cue | Subject: friend | Source: authority_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    fear: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 18.90 × (1 + -0.360) = 12.10
    Final delta: 12.10 × 0.8 × 1 = 9.68
    anticipation: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 6.40 × (1 + 0.087) = 6.95
    Final delta: 6.95 × 0.8 × 1 = 5.56
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.453) = 4.65
    Final delta: 4.65 × 0.8 × 1 = 3.72

  Stimulant: "Asher leaves without saying goodbye or apologizing, turning his back on Praew and Haldric."
    Event: rejection | Subject: self | Source: ally_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=40 × trig=1 × weight=0.6 → raw=24.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 24.00 × (1 + 0.720) = 41.28
    Final delta: 41.28 × 1 × 1.3 = 53.66
    Capped: 53.66 → 40.00 (max 40 per stimulant)
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.453) = 9.30
    Final delta: 9.30 × 1 × 1.3 = 12.09
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.360) = 3.46
    Final delta: 3.46 × 1 × 1.3 = 4.49

  Stimulant: "Renwick makes a vulgar parting comment telling Praew to keep his bed warm, humiliating her publicly."
    Event: insult | Subject: self | Source: enemy_caused | Domain: status
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=32 × trig=0.85 × weight=0.6 → raw=16.32
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 16.32 × (1 + 0.453) = 23.72
    Final delta: 23.72 × 1 × 0.8 = 18.97
    disgust: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 5.27 × (1 + 0.140) = 6.01
    Final delta: 6.01 × 1 × 0.8 = 4.81
    sadness: base=40 × trig=0.85 × weight=0.2 → raw=6.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.80 × (1 + 0.720) = 11.70
    Final delta: 11.70 × 1 × 0.8 = 9.36
  Ambient surprise: avg_trigger(0.96) × 15 = +14.4

  Suppression applied:
  Suppression: anger(109.8) suppresses joy by -17.39 (50% of anger delta)
  Suppression: anger(109.8) suppresses trust by -10.44 (30% of anger delta)
  Suppression: anger(109.8) suppresses fear by -5.22 (15% of anger delta)
  Suppression: sadness(124.4) suppresses joy by -29.61 (60% of sadness delta)
  Suppression: sadness(124.4) suppresses anticipation by -14.81 (30% of sadness delta)
  Suppression: sadness(124.4) suppresses surprise by -9.87 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-22.37) = -22.37
    sadness: carry(75.0 × 0.25) + delta(49.36) = 68.11
    anger: carry(75.0 × 0.25) + delta(34.79) = 53.54
    fear: carry(8.6 × 0.25) + delta(8.95) = 11.11
    disgust: carry(26.5 × 0.25) + delta(4.81) = 11.43
    surprise: carry(0.0 × 0.25) + delta(4.57) = 4.57
    trust: carry(0.0 × 0.25) + delta(-3.96) = -3.96
    anticipation: carry(0.0 × 0.25) + delta(-5.77) = -5.77

=== Chapter 3 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(68.1 × 0.25) + delta(0.00) = 17.03
    anger: carry(53.5 × 0.25) + delta(0.00) = 13.38
    fear: carry(11.1 × 0.25) + delta(0.00) = 2.78
    disgust: carry(11.4 × 0.25) + delta(0.00) = 2.86
    surprise: carry(4.6 × 0.25) + delta(0.00) = 1.14

=== Chapter 4 ===
Stimulants this chapter: 4

  Stimulant: "Praew accidentally calls her drill instructor 'Stone Face' out loud, embarrassing herself in front of the class."
    Event: humiliation | Subject: self | Source: self_caused | Domain: status
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=40 × trig=0.85 × weight=0.4 → raw=13.60
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.60 × (1 + 0.720) = 23.39
    Final delta: 23.39 × 1 × 1.1 = 25.73
    anger: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 8.16 × (1 + 0.453) = 11.86
    Final delta: 11.86 × 1 × 1.1 = 13.05
    disgust: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 7.90 × (1 + 0.140) = 9.01
    Final delta: 9.01 × 1 × 1.1 = 9.91

  Stimulant: "Professor Stone tells the recruits they were given a second chance and could still go to the surface, reigniting Praew's buried hope."
    Event: reward | Subject: self | Source: authority_caused | Domain: future_security
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=32 × trig=0.6 × weight=0.6 → raw=11.52
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 11.52 × (1 + 0.100) = 12.67
    Final delta: 12.67 × 1 × 1 = 12.67
    trust: base=36 × trig=0.6 × weight=0.3 → raw=6.48
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 6.48 × (1 + -0.100) = 5.83
    Final delta: 5.83 × 1 × 1 = 5.83
    anticipation: base=32 × trig=0.6 × weight=0.1 → raw=1.92
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.92 × (1 + 0.087) = 2.09
    Final delta: 2.09 × 1 × 1 = 2.09

  Stimulant: "Praew worries about her parents' declining health and reduced rations, realizing the food shortage is worsening for them."
    Event: threat | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    fear: base=27 × trig=0.85 × weight=0.7 → raw=16.06
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 16.06 × (1 + -0.360) = 10.28
    Final delta: 10.28 × 0.9 × 1 = 9.25
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.453) = 7.91
    Final delta: 7.91 × 0.9 × 1 = 7.12
    anticipation: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.72 × (1 + 0.087) = 2.96
    Final delta: 2.96 × 0.9 × 1 = 2.66

  Stimulant: "Praew kneels on her bed and traces the carved words from her parents, feeling grateful for their sacrifices."
    Event: reminder_cue | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    sadness: base=40 × trig=0.85 × weight=0.5 → raw=17.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 17.00 × (1 + 0.720) = 29.24
    Final delta: 29.24 × 0.9 × 1.3 = 34.21
    fear: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 6.88 × (1 + -0.360) = 4.41
    Final delta: 4.41 × 0.9 × 1.3 = 5.16
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.453) = 7.91
    Final delta: 7.91 × 0.9 × 1.3 = 9.25
  Ambient surprise: avg_trigger(0.79) × 15 = +11.8

  Suppression applied:
  Suppression: sadness(77.0) suppresses joy by -35.97 (60% of sadness delta)
  Suppression: sadness(77.0) suppresses anticipation by -17.98 (30% of sadness delta)
  Suppression: sadness(77.0) suppresses surprise by -11.99 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-23.29) = -23.29
    sadness: carry(17.0 × 0.25) + delta(59.94) = 64.20
    anger: carry(13.4 × 0.25) + delta(29.41) = 32.76
    fear: carry(2.8 × 0.25) + delta(14.41) = 15.10
    disgust: carry(2.9 × 0.25) + delta(9.91) = 10.63
    surprise: carry(1.1 × 0.25) + delta(-0.18) = 0.11
    trust: carry(0.0 × 0.25) + delta(5.83) = 5.83
    anticipation: carry(0.0 × 0.25) + delta(-13.24) = -13.24

=== Chapter 5 ===
Stimulants this chapter: 2

  Stimulant: "Praew reads the terrifying silent course test rules including water crossing with BoltStones and wonders if this is a death sentence."
    Event: threat | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=27 × trig=0.6 × weight=0.7 → raw=11.34
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 11.34 × (1 + -0.360) = 7.26
    Final delta: 7.26 × 1 × 1 = 7.26
    anger: base=32 × trig=0.6 × weight=0.2 → raw=3.84
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.84 × (1 + 0.453) = 5.58
    Final delta: 5.58 × 1 × 1 = 5.58
    anticipation: base=32 × trig=0.6 × weight=0.1 → raw=1.92
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 1.92 × (1 + 0.087) = 2.09
    Final delta: 2.09 × 1 × 1 = 2.09

  Stimulant: "Praew trips and falls during the silent movement practice in front of her classmates, who barely contain their laughter."
    Event: humiliation | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=40 × trig=0.85 × weight=0.4 → raw=13.60
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.60 × (1 + 0.720) = 23.39
    Final delta: 23.39 × 1 × 1.1 = 25.73
    anger: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 8.16 × (1 + 0.453) = 11.86
    Final delta: 11.86 × 1 × 1.1 = 13.05
    disgust: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 7.90 × (1 + 0.140) = 9.01
    Final delta: 9.01 × 1 × 1.1 = 9.91
  Ambient surprise: avg_trigger(0.72) × 15 = +10.9

  Suppression applied:
  Suppression: anger(51.4) suppresses joy by -9.31 (50% of anger delta)
  Suppression: anger(51.4) suppresses trust by -5.59 (30% of anger delta)
  Suppression: anger(51.4) suppresses fear by -2.79 (15% of anger delta)
  Suppression: sadness(89.9) suppresses joy by -15.44 (60% of sadness delta)
  Suppression: sadness(89.9) suppresses anticipation by -7.72 (30% of sadness delta)
  Suppression: sadness(89.9) suppresses surprise by -5.15 (20% of sadness delta)

  Emotion updates:
    sadness: carry(64.2 × 0.25) + delta(25.73) = 41.78
    anger: carry(32.8 × 0.25) + delta(18.63) = 26.82
    fear: carry(15.1 × 0.25) + delta(4.46) = 8.24
    disgust: carry(10.6 × 0.25) + delta(9.91) = 12.57
    surprise: carry(0.1 × 0.25) + delta(5.73) = 5.76
    trust: carry(5.8 × 0.25) + delta(-5.59) = -4.13
    anticipation: carry(0.0 × 0.25) + delta(-5.63) = -5.63

=== Chapter 6 ===
Stimulants this chapter: 4

  Stimulant: "Mai Azadi poisons the entire class with needles through their ears as an opening lesson in assassination."
    Event: danger_cue | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 18.90 × (1 + -0.360) = 12.10
    Final delta: 12.10 × 1 × 1 = 12.10
    anticipation: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 6.40 × (1 + 0.087) = 6.95
    Final delta: 6.95 × 1 × 1 = 6.95
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.453) = 4.65
    Final delta: 4.65 × 1 × 1 = 4.65

  Stimulant: "Praew is ordered to kill a bound, begging man and refuses, choosing death over murder."
    Event: moral_cue | Subject: principle | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: principle → ×0.5
    Source mult: authority_caused → ×1
    disgust: base=31 × trig=1 × weight=0.4 → raw=12.40
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 12.40 × (1 + 0.140) = 14.14
    Final delta: 14.14 × 0.5 × 1 = 7.07
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 0.5 × 1 = 6.98
    sadness: base=40 × trig=1 × weight=0.3 → raw=12.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 12.00 × (1 + 0.720) = 20.64
    Final delta: 20.64 × 0.5 × 1 = 10.32

  Stimulant: "Mai slits the bound man's throat in front of Praew, spraying blood on her face."
    Event: harm | Subject: stranger | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: authority_caused → ×1
    fear: base=27 × trig=1 × weight=0.5 → raw=13.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 13.50 × (1 + -0.360) = 8.64
    Final delta: 8.64 × 0.3 × 1 = 2.59
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 0.3 × 1 = 4.19
    sadness: base=40 × trig=1 × weight=0.2 → raw=8.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.00 × (1 + 0.720) = 13.76
    Final delta: 13.76 × 0.3 × 1 = 4.13

  Stimulant: "Mai fails Praew from Ghost Operations class, meaning she must now pass both remaining classes or face reassignment."
    Event: constraint | Subject: self | Source: ally_caused | Domain: future_security
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=32 × trig=0.85 × weight=0.5 → raw=13.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 13.60 × (1 + 0.453) = 19.77
    Final delta: 19.77 × 1 × 1.3 = 25.69
    fear: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 6.88 × (1 + -0.360) = 4.41
    Final delta: 4.41 × 1 × 1.3 = 5.73
    sadness: base=40 × trig=0.85 × weight=0.2 → raw=6.80
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.80 × (1 + 0.720) = 11.70
    Final delta: 11.70 × 1 × 1.3 = 15.20
  Ambient surprise: avg_trigger(0.96) × 15 = +14.4

  Suppression applied:
  Suppression: anger(68.3) suppresses joy by -20.75 (50% of anger delta)
  Suppression: anger(68.3) suppresses trust by -12.45 (30% of anger delta)
  Suppression: anger(68.3) suppresses fear by -6.23 (15% of anger delta)
  Suppression: sadness(71.4) suppresses joy by -17.79 (60% of sadness delta)
  Suppression: sadness(71.4) suppresses anticipation by -8.90 (30% of sadness delta)
  Suppression: sadness(71.4) suppresses surprise by -5.93 (20% of sadness delta)

  Emotion updates:
    sadness: carry(41.8 × 0.25) + delta(29.65) = 40.10
    anger: carry(26.8 × 0.25) + delta(41.51) = 48.21
    fear: carry(8.2 × 0.25) + delta(14.19) = 16.25
    disgust: carry(12.6 × 0.25) + delta(7.07) = 10.21
    surprise: carry(5.8 × 0.25) + delta(8.51) = 9.95
    anticipation: carry(0.0 × 0.25) + delta(-1.94) = -1.94

=== Chapter 7 ===
Stimulants this chapter: 5

  Stimulant: "Junya tells Praew about her parents' suspicious disappearance from the mines, pulling Praew into a dangerous investigation."
    Event: moral_cue | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    disgust: base=31 × trig=0.85 × weight=0.4 → raw=10.54
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 10.54 × (1 + 0.140) = 12.02
    Final delta: 12.02 × 0.8 × 1.3 = 12.50
    anger: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 8.16 × (1 + 0.453) = 11.86
    Final delta: 11.86 × 0.8 × 1.3 = 12.33
    sadness: base=40 × trig=0.85 × weight=0.3 → raw=10.20
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.20 × (1 + 0.720) = 17.54
    Final delta: 17.54 × 0.8 × 1.3 = 18.25

  Stimulant: "Praew notices her own parents growing weaker and too tired to fuss over her, realizing the food shortage is taking a toll."
    Event: threat | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    fear: base=27 × trig=0.85 × weight=0.7 → raw=16.06
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 16.06 × (1 + -0.360) = 10.28
    Final delta: 10.28 × 0.9 × 1 = 9.25
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.453) = 7.91
    Final delta: 7.91 × 0.9 × 1 = 7.12
    anticipation: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.72 × (1 + 0.087) = 2.96
    Final delta: 2.96 × 0.9 × 1 = 2.66

  Stimulant: "Mai Azadi appears at Praew's home uninvited, sitting with her parents while armed with a dagger, terrifying Praew."
    Event: danger_cue | Subject: family | Source: ally_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    fear: base=27 × trig=0.85 × weight=0.7 → raw=16.06
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 16.06 × (1 + -0.360) = 10.28
    Final delta: 10.28 × 0.9 × 1.3 = 12.03
    anticipation: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 5.44 × (1 + 0.087) = 5.91
    Final delta: 5.91 × 0.9 × 1.3 = 6.92
    anger: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 2.72 × (1 + 0.453) = 3.95
    Final delta: 3.95 × 0.9 × 1.3 = 4.63

  Stimulant: "Praew harshly rejects Mai's friendship and calls her a psychopathic murderer, later feeling deep guilt about it."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=31 × trig=0.85 × weight=0.4 → raw=10.54
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 10.54 × (1 + 0.140) = 12.02
    Final delta: 12.02 × 1 × 1.1 = 13.22
    anger: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 8.16 × (1 + 0.453) = 11.86
    Final delta: 11.86 × 1 × 1.1 = 13.05
    sadness: base=40 × trig=0.85 × weight=0.3 → raw=10.20
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.20 × (1 + 0.720) = 17.54
    Final delta: 17.54 × 1 × 1.1 = 19.30

  Stimulant: "Mai reveals the bound man was a cannibal who murdered and ate his wife and daughter, shattering Praew's moral certainty."
    Event: surprise_reveal | Subject: principle | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: principle → ×0.5
    Source mult: ally_caused → ×1.3
    surprise: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 16.10 × (1 + -0.143) = 13.79
    Final delta: 13.79 × 0.5 × 1.3 = 8.97
    fear: base=27 × trig=1 × weight=0.15 → raw=4.05
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.05 × (1 + -0.360) = 2.59
    Final delta: 2.59 × 0.5 × 1.3 = 1.68
    anticipation: base=32 × trig=1 × weight=0.15 → raw=4.80
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 4.80 × (1 + 0.087) = 5.22
    Final delta: 5.22 × 0.5 × 1.3 = 3.39

  Suppression applied:
  Suppression: anger(85.3) suppresses joy by -18.56 (50% of anger delta)
  Suppression: anger(85.3) suppresses trust by -11.14 (30% of anger delta)
  Suppression: anger(85.3) suppresses fear by -5.57 (15% of anger delta)
  Suppression: sadness(77.6) suppresses joy by -22.53 (60% of sadness delta)
  Suppression: sadness(77.6) suppresses anticipation by -11.26 (30% of sadness delta)
  Suppression: sadness(77.6) suppresses surprise by -7.51 (20% of sadness delta)

  Emotion updates:
    sadness: carry(40.1 × 0.25) + delta(37.54) = 47.57
    anger: carry(48.2 × 0.25) + delta(37.12) = 49.17
    fear: carry(16.3 × 0.25) + delta(17.40) = 21.46
    disgust: carry(10.2 × 0.25) + delta(25.71) = 28.27
    surprise: carry(9.9 × 0.25) + delta(1.46) = 3.94
    anticipation: carry(0.0 × 0.25) + delta(1.70) = 1.70

=== Chapter 8 ===
Stimulants this chapter: 3

  Stimulant: "Wannii confronts Praew for endangering Junya by sharing her investigation with someone in the Prime's office."
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=40 × trig=1 × weight=0.6 → raw=24.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 24.00 × (1 + 0.720) = 41.28
    Final delta: 41.28 × 1 × 1.3 = 53.66
    Capped: 53.66 → 40.00 (max 40 per stimulant)
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.453) = 9.30
    Final delta: 9.30 × 1 × 1.3 = 12.09
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.360) = 3.46
    Final delta: 3.46 × 1 × 1.3 = 4.49

  Stimulant: "Wannii reveals she deliberately failed the Hunter test to stay with Junya, making Praew realize the depth of their bond and her own recklessness."
    Event: surprise_reveal | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    surprise: base=23 × trig=0.85 × weight=0.7 → raw=13.69
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 13.69 × (1 + -0.143) = 11.72
    Final delta: 11.72 × 0.8 × 1.3 = 12.19
    fear: base=27 × trig=0.85 × weight=0.15 → raw=3.44
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 3.44 × (1 + -0.360) = 2.20
    Final delta: 2.20 × 0.8 × 1.3 = 2.29
    anticipation: base=32 × trig=0.85 × weight=0.15 → raw=4.08
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 4.08 × (1 + 0.087) = 4.43
    Final delta: 4.43 × 0.8 × 1.3 = 4.61

  Stimulant: "Godric catches Praew and Wannii arguing about classified matters near a government facility and ominously warns about people going missing."
    Event: threat | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=27 × trig=0.85 × weight=0.7 → raw=16.06
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 16.06 × (1 + -0.360) = 10.28
    Final delta: 10.28 × 1 × 1 = 10.28
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.453) = 7.91
    Final delta: 7.91 × 1 × 1 = 7.91
    anticipation: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.72 × (1 + 0.087) = 2.96
    Final delta: 2.96 × 1 × 1 = 2.96

  Suppression applied:
  Suppression: anger(69.2) suppresses joy by -10.00 (50% of anger delta)
  Suppression: anger(69.2) suppresses trust by -6.00 (30% of anger delta)
  Suppression: anger(69.2) suppresses fear by -3.00 (15% of anger delta)
  Suppression: sadness(87.6) suppresses joy by -24.00 (60% of sadness delta)
  Suppression: sadness(87.6) suppresses anticipation by -12.00 (30% of sadness delta)
  Suppression: sadness(87.6) suppresses surprise by -8.00 (20% of sadness delta)

  Emotion updates:
    sadness: carry(47.6 × 0.25) + delta(40.00) = 51.89
    anger: carry(49.2 × 0.25) + delta(20.00) = 32.29
    fear: carry(21.5 × 0.25) + delta(14.07) = 19.43
    disgust: carry(28.3 × 0.25) + delta(0.00) = 7.07
    surprise: carry(3.9 × 0.25) + delta(4.19) = 5.18
    anticipation: carry(1.7 × 0.25) + delta(-4.43) = -4.01

=== Chapter 9 ===
Stimulants this chapter: 2

  Stimulant: "Praew apologizes to Mai and they reconcile, forming a genuine friendship with agreed-upon boundaries."
    Event: connection | Subject: friend | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=36 × trig=0.85 × weight=0.5 → raw=15.30
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 15.30 × (1 + -0.100) = 13.77
    Final delta: 13.77 × 0.8 × 1.1 = 12.12
    joy: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 8.16 × (1 + 0.100) = 8.98
    Final delta: 8.98 × 0.8 × 1.1 = 7.90
    anticipation: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 5.44 × (1 + 0.087) = 5.91
    Final delta: 5.91 × 0.8 × 1.1 = 5.20

  Stimulant: "Praew learns Junya and Wannii are missing after failing to show up to class, realizing they may have acted on their dangerous plan."
    Event: danger_cue | Subject: friend | Source: world_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: world_caused → ×0.7
    fear: base=27 × trig=0.85 × weight=0.7 → raw=16.06
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 16.06 × (1 + -0.360) = 10.28
    Final delta: 10.28 × 0.8 × 0.7 = 5.76
    anticipation: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 5.44 × (1 + 0.087) = 5.91
    Final delta: 5.91 × 0.8 × 0.7 = 3.31
    anger: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 2.72 × (1 + 0.453) = 3.95
    Final delta: 3.95 × 0.8 × 0.7 = 2.21
  Ambient surprise: avg_trigger(0.85) × 15 = +12.8

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(7.90) = 7.90
    sadness: carry(51.9 × 0.25) + delta(0.00) = 12.97
    anger: carry(32.3 × 0.25) + delta(2.21) = 10.29
    fear: carry(19.4 × 0.25) + delta(5.76) = 10.62
    disgust: carry(7.1 × 0.25) + delta(0.00) = 1.77
    surprise: carry(5.2 × 0.25) + delta(12.75) = 14.04
    trust: carry(0.0 × 0.25) + delta(12.12) = 12.12
    anticipation: carry(0.0 × 0.25) + delta(8.51) = 8.51

=== Chapter 10 ===
Stimulants this chapter: 1

  Stimulant: "Praew teases Haldric's grandparents into thinking they are dating, creating a cover story for their secret meetings."
    Event: success | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=0 imm=3 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=32 × trig=0.85 × weight=0.7 → raw=19.04
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 19.04 × (1 + 0.100) = 20.94
    Final delta: 20.94 × 1 × 1.1 = 23.04
    trust: base=36 × trig=0.85 × weight=0.2 → raw=6.12
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 6.12 × (1 + -0.100) = 5.51
    Final delta: 5.51 × 1 × 1.1 = 6.06
    anticipation: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 2.72 × (1 + 0.087) = 2.96
    Final delta: 2.96 × 1 × 1.1 = 3.25
  Ambient surprise: avg_trigger(0.85) × 15 = +12.8
  Ambient fear: extreme event detected → +10.2

  Emotion updates:
    joy: carry(7.9 × 0.25) + delta(23.04) = 25.01
    sadness: carry(13.0 × 0.25) + delta(0.00) = 3.24
    anger: carry(10.3 × 0.25) + delta(0.00) = 2.57
    fear: carry(10.6 × 0.25) + delta(10.20) = 12.85
    disgust: carry(1.8 × 0.25) + delta(0.00) = 0.44
    surprise: carry(14.0 × 0.25) + delta(12.75) = 16.26
    trust: carry(12.1 × 0.25) + delta(6.06) = 9.09
    anticipation: carry(8.5 × 0.25) + delta(3.25) = 5.38

=== Chapter 11 ===
Stimulants this chapter: 0

  Emotion updates:
    joy: carry(25.0 × 0.25) + delta(0.00) = 6.25
    sadness: carry(3.2 × 0.25) + delta(0.00) = 0.81
    anger: carry(2.6 × 0.25) + delta(0.00) = 0.64
    fear: carry(12.9 × 0.25) + delta(0.00) = 3.21
    surprise: carry(16.3 × 0.25) + delta(0.00) = 4.07
    trust: carry(9.1 × 0.25) + delta(0.00) = 2.27
    anticipation: carry(5.4 × 0.25) + delta(0.00) = 1.34

=== Chapter 12 ===
Stimulants this chapter: 3

  Stimulant: "Praew witnesses the Fourth Floor: enslaved people being whipped, children eating raw Ratrods, and horrific conditions."
    Event: injustice | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    anger: base=32 × trig=1 × weight=0.5 → raw=16.00
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 16.00 × (1 + 0.453) = 23.25
    Final delta: 23.25 × 0.7 × 1 = 16.28
    disgust: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 9.30 × (1 + 0.140) = 10.60
    Final delta: 10.60 × 0.7 × 1 = 7.42
    sadness: base=40 × trig=1 × weight=0.2 → raw=8.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.00 × (1 + 0.720) = 13.76
    Final delta: 13.76 × 0.7 × 1 = 9.63

  Stimulant: "Praew recognizes her missing classmate Jorpen working as an enforcer-slave in the Fourth Floor identification program."
    Event: surprise_reveal | Subject: friend | Source: authority_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    surprise: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 16.10 × (1 + -0.143) = 13.79
    Final delta: 13.79 × 0.8 × 1 = 11.03
    fear: base=27 × trig=1 × weight=0.15 → raw=4.05
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.05 × (1 + -0.360) = 2.59
    Final delta: 2.59 × 0.8 × 1 = 2.07
    anticipation: base=32 × trig=1 × weight=0.15 → raw=4.80
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 4.80 × (1 + 0.087) = 5.22
    Final delta: 5.22 × 0.8 × 1 = 4.17

  Stimulant: "Note reveals that Junya's parents were likely murdered for discovering the Fourth Floor, and that Junya and Wannii may also be dead."
    Event: loss | Subject: friend | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    sadness: base=40 × trig=1 × weight=0.7 → raw=28.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 28.00 × (1 + 0.720) = 48.16
    Final delta: 48.16 × 0.8 × 1 = 38.53
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.360) = 3.46
    Final delta: 3.46 × 0.8 × 1 = 2.76
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.453) = 4.65
    Final delta: 4.65 × 0.8 × 1 = 3.72

  Emotion updates:
    joy: carry(6.3 × 0.25) + delta(0.00) = 1.56
    sadness: carry(0.8 × 0.25) + delta(48.16) = 48.36
    anger: carry(0.6 × 0.25) + delta(20.00) = 20.16
    fear: carry(3.2 × 0.25) + delta(4.84) = 5.64
    disgust: carry(0.1 × 0.25) + delta(7.42) = 7.45
    surprise: carry(4.1 × 0.25) + delta(11.03) = 12.05
    trust: carry(2.3 × 0.25) + delta(0.00) = 0.57
    anticipation: carry(1.3 × 0.25) + delta(4.17) = 4.51

=== Chapter 13 ===
Stimulants this chapter: 5

  Stimulant: "Haldric grabs Praew's wrist with inhuman strength, hurting her and revealing he has been hiding his acclimation from her."
    Event: betrayal | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=40 × trig=1 × weight=0.4 → raw=16.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.00 × (1 + 0.720) = 27.52
    Final delta: 27.52 × 1 × 1.3 = 35.78
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 1 × 1.3 = 18.14
    trust (COLLAPSE): base=36 × trig=1 × weight=0.3 → raw=10.80
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 10.80 × (1 + -0.100) = 9.72
    Final delta: 9.72 × 1 × 1.3 = 12.64
    → Trust COLLAPSED by -12.64

  Stimulant: "Haldric cruelly tells Praew she is not as smart as she pretends to be and that she belongs in Special Forces, not Administration."
    Event: insult | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=32 × trig=1 × weight=0.6 → raw=19.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 19.20 × (1 + 0.453) = 27.90
    Final delta: 27.90 × 1 × 1.3 = 36.28
    disgust: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 6.20 × (1 + 0.140) = 7.07
    Final delta: 7.07 × 1 × 1.3 = 9.19
    sadness: base=40 × trig=1 × weight=0.2 → raw=8.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.00 × (1 + 0.720) = 13.76
    Final delta: 13.76 × 1 × 1.3 = 17.89

  Stimulant: "Mai reveals she was born on the Fourth Floor, her family was destroyed, and she does not age, deepening the bond and shocking Praew."
    Event: surprise_reveal | Subject: friend | Source: ally_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    surprise: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 16.10 × (1 + -0.143) = 13.79
    Final delta: 13.79 × 0.8 × 1.3 = 14.34
    fear: base=27 × trig=1 × weight=0.15 → raw=4.05
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.05 × (1 + -0.360) = 2.59
    Final delta: 2.59 × 0.8 × 1.3 = 2.70
    anticipation: base=32 × trig=1 × weight=0.15 → raw=4.80
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 4.80 × (1 + 0.087) = 5.22
    Final delta: 5.22 × 0.8 × 1.3 = 5.42

  Stimulant: "Godric arrives and threatens Mai; Mai stabs his foot and tells Praew to run, forcing Praew to flee in fear for both their lives."
    Event: danger_cue | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 18.90 × (1 + -0.360) = 12.10
    Final delta: 12.10 × 1 × 1 = 12.10
    anticipation: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 6.40 × (1 + 0.087) = 6.95
    Final delta: 6.95 × 1 × 1 = 6.95
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.453) = 4.65
    Final delta: 4.65 × 1 × 1 = 4.65

  Stimulant: "A mysterious attacker intercepts Praew just before she reaches Haldric's home, and she is captured."
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=27 × trig=1 × weight=0.5 → raw=13.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 13.50 × (1 + -0.360) = 8.64
    Final delta: 8.64 × 1 × 0.8 = 6.91
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 1 × 0.8 = 11.16
    sadness: base=40 × trig=1 × weight=0.2 → raw=8.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.00 × (1 + 0.720) = 13.76
    Final delta: 13.76 × 1 × 0.8 = 11.01

  Suppression applied:
  Suppression: anger(90.4) suppresses joy by -35.11 (50% of anger delta)
  Suppression: anger(90.4) suppresses trust by -21.07 (30% of anger delta)
  Suppression: anger(90.4) suppresses fear by -10.53 (15% of anger delta)
  Suppression: sadness(113.0) suppresses joy by -38.80 (60% of sadness delta)
  Suppression: sadness(113.0) suppresses anticipation by -19.40 (30% of sadness delta)
  Suppression: sadness(113.0) suppresses surprise by -12.93 (20% of sadness delta)

  Emotion updates:
    joy: carry(1.6 × 0.25) + delta(-73.92) = -73.52
    sadness: carry(48.4 × 0.25) + delta(64.67) = 76.76
    *** sadness in RED ZONE: VU=76.8 (track capped at 75) ***
    anger: carry(20.2 × 0.25) + delta(70.23) = 75.26
    *** anger in RED ZONE: VU=75.3 (track capped at 75) ***
    fear: carry(5.6 × 0.25) + delta(11.17) = 12.58
    disgust: carry(7.4 × 0.25) + delta(9.19) = 11.05
    surprise: carry(12.1 × 0.25) + delta(1.41) = 4.42
    trust: carry(0.6 × 0.25) + delta(-33.70) = -33.56
    anticipation: carry(4.5 × 0.25) + delta(-7.02) = -5.90

=== Chapter 14 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 15 ===
Stimulants this chapter: 5

  Stimulant: "Praew wakes up imprisoned in a narrow, abrasive cell with no way out, struggling to breathe."
    Event: constraint | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=32 × trig=1 × weight=0.5 → raw=16.00
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 16.00 × (1 + 0.453) = 23.25
    Final delta: 23.25 × 1 × 0.8 = 18.60
    fear: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.10 × (1 + -0.360) = 5.18
    Final delta: 5.18 × 1 × 0.8 = 4.15
    sadness: base=40 × trig=1 × weight=0.2 → raw=8.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.00 × (1 + 0.720) = 13.76
    Final delta: 13.76 × 1 × 0.8 = 11.01

  Stimulant: "Renwick reveals himself as her captor and jailer, having feigned being a fellow prisoner to manipulate her emotions."
    Event: betrayal | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    sadness: base=40 × trig=1 × weight=0.4 → raw=16.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.00 × (1 + 0.720) = 27.52
    Final delta: 27.52 × 1 × 0.8 = 22.02
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 1 × 0.8 = 11.16
    trust (COLLAPSE): base=36 × trig=1 × weight=0.3 → raw=10.80
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 10.80 × (1 + -0.100) = 9.72
    Final delta: 9.72 × 1 × 0.8 = 7.78
    → Trust COLLAPSED by -7.78

  Stimulant: "Praew discovers Wannii's burnt, bloated corpse in her shared cell with Junya."
    Event: loss | Subject: friend | Source: enemy_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    sadness: base=40 × trig=1 × weight=0.7 → raw=28.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 28.00 × (1 + 0.720) = 48.16
    Final delta: 48.16 × 0.8 × 0.8 = 30.82
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.360) = 3.46
    Final delta: 3.46 × 0.8 × 0.8 = 2.21
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.453) = 4.65
    Final delta: 4.65 × 0.8 × 0.8 = 2.98

  Stimulant: "Junya is dragged away screaming by the guard while Praew fails to hold onto her, losing her grip on Junya's bracelet."
    Event: separation | Subject: friend | Source: enemy_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    sadness: base=40 × trig=1 × weight=0.6 → raw=24.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 24.00 × (1 + 0.720) = 41.28
    Final delta: 41.28 × 0.8 × 0.8 = 26.42
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.360) = 3.46
    Final delta: 3.46 × 0.8 × 0.8 = 2.21
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.453) = 9.30
    Final delta: 9.30 × 0.8 × 0.8 = 5.95

  Stimulant: "Praew accepts she cannot save her friends and puts on Junya's bracelet as a reminder of her failure to protect them."
    Event: failure | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=40 × trig=1 × weight=0.5 → raw=20.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 20.00 × (1 + 0.720) = 34.40
    Final delta: 34.40 × 1 × 1.1 = 37.84
    fear: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.10 × (1 + -0.360) = 5.18
    Final delta: 5.18 × 1 × 1.1 = 5.70
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.453) = 9.30
    Final delta: 9.30 × 1 × 1.1 = 10.23
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0
  Ambient anticipation: extreme event detected → +10.0

  Suppression applied:
  Suppression: anger(123.9) suppresses joy by -24.46 (50% of anger delta)
  Suppression: anger(123.9) suppresses trust by -14.68 (30% of anger delta)
  Suppression: anger(123.9) suppresses fear by -7.34 (15% of anger delta)
  Suppression: sadness(203.1) suppresses joy by -76.86 (60% of sadness delta)
  Suppression: sadness(203.1) suppresses anticipation by -38.43 (30% of sadness delta)
  Suppression: sadness(203.1) suppresses surprise by -25.62 (20% of sadness delta)

  Emotion updates:
    sadness: carry(75.0 × 0.25) + delta(128.11) = 146.86
    *** sadness in RED ZONE: VU=100.0 (track capped at 75) ***
    anger: carry(75.0 × 0.25) + delta(48.93) = 67.68
    fear: carry(12.6 × 0.25) + delta(6.93) = 10.08
    disgust: carry(11.1 × 0.25) + delta(0.00) = 2.76
    surprise: carry(4.4 × 0.25) + delta(-10.62) = -9.52
    anticipation: carry(0.0 × 0.25) + delta(-28.43) = -28.43

=== Chapter 16 ===
Stimulants this chapter: 6

  Stimulant: "Praew sees Junya dead on a stone slab with a Sifaralith embedded in her skull."
    Event: loss | Subject: friend | Source: enemy_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    sadness: base=40 × trig=1 × weight=0.7 → raw=28.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 28.00 × (1 + 0.720) = 48.16
    Final delta: 48.16 × 0.8 × 0.8 = 30.82
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.360) = 3.46
    Final delta: 3.46 × 0.8 × 0.8 = 2.21
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.453) = 4.65
    Final delta: 4.65 × 0.8 × 0.8 = 2.98

  Stimulant: "The scientist grabs Praew's hair and invades her personal space while she is strapped down, making her feel violated and powerless."
    Event: humiliation | Subject: self | Source: enemy_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    sadness: base=40 × trig=1 × weight=0.4 → raw=16.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.00 × (1 + 0.720) = 27.52
    Final delta: 27.52 × 1 × 0.8 = 22.02
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 1 × 0.8 = 11.16
    disgust: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 9.30 × (1 + 0.140) = 10.60
    Final delta: 10.60 × 1 × 0.8 = 8.48

  Stimulant: "The Prime Archon kills the scientist but then reveals he will not release Praew and instead begins the embedding process."
    Event: betrayal | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    sadness: base=40 × trig=1 × weight=0.4 → raw=16.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.00 × (1 + 0.720) = 27.52
    Final delta: 27.52 × 1 × 1 = 27.52
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 1 × 1 = 13.95
    trust (COLLAPSE): base=36 × trig=1 × weight=0.3 → raw=10.80
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 10.80 × (1 + -0.100) = 9.72
    Final delta: 9.72 × 1 × 1 = 9.72
    → Trust COLLAPSED by -9.72

  Stimulant: "The Prime slams a Mythical BoltStone into Praew's chest, causing agonizing pain as electricity tears through her body."
    Event: harm | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=27 × trig=1 × weight=0.5 → raw=13.50
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 13.50 × (1 + -0.360) = 8.64
    Final delta: 8.64 × 1 × 1 = 8.64
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 1 × 1 = 13.95
    sadness: base=40 × trig=1 × weight=0.2 → raw=8.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.00 × (1 + 0.720) = 13.76
    Final delta: 13.76 × 1 × 1 = 13.76

  Stimulant: "Praew realizes the Hunter Test was actually a screening to find people compatible with rare stones, reframing her entire life."
    Event: surprise_reveal | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    surprise: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for surprise (total: -0.143):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(65/75 × -0.2) = -0.173 [Adaptable = recovers from surprise faster]
  impulsiveness(65/75 × 0.15) = +0.130 [Impulsive = reacts more to surprises]
    Modified delta: 16.10 × (1 + -0.143) = 13.79
    Final delta: 13.79 × 1 × 1 = 13.79
    fear: base=27 × trig=1 × weight=0.15 → raw=4.05
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 4.05 × (1 + -0.360) = 2.59
    Final delta: 2.59 × 1 × 1 = 2.59
    anticipation: base=32 × trig=1 × weight=0.15 → raw=4.80
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 4.80 × (1 + 0.087) = 5.22
    Final delta: 5.22 × 1 × 1 = 5.22

  Stimulant: "Praew survives the Mythical BoltStone embedding by figuring out the trigger is sound and silently enduring the agony."
    Event: success | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=32 × trig=1 × weight=0.7 → raw=22.40
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 22.40 × (1 + 0.100) = 24.64
    Final delta: 24.64 × 1 × 1.1 = 27.10
    trust: base=36 × trig=1 × weight=0.2 → raw=7.20
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 7.20 × (1 + -0.100) = 6.48
    Final delta: 6.48 × 1 × 1.1 = 7.13
    anticipation: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.20 × (1 + 0.087) = 3.48
    Final delta: 3.48 × 1 × 1.1 = 3.83

  Suppression applied:
  Suppression: anger(109.7) suppresses joy by -21.02 (50% of anger delta)
  Suppression: anger(109.7) suppresses trust by -12.61 (30% of anger delta)
  Suppression: anger(109.7) suppresses fear by -6.31 (15% of anger delta)
  Suppression: sadness(169.1) suppresses joy by -56.47 (60% of sadness delta)
  Suppression: sadness(169.1) suppresses anticipation by -28.24 (30% of sadness delta)
  Suppression: sadness(169.1) suppresses surprise by -18.82 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-50.39) = -50.39
    sadness: carry(75.0 × 0.25) + delta(94.12) = 112.87
    *** sadness in RED ZONE: VU=100.0 (track capped at 75) ***
    anger: carry(67.7 × 0.25) + delta(42.04) = 58.96
    fear: carry(10.1 × 0.25) + delta(7.14) = 9.66
    disgust: carry(2.8 × 0.25) + delta(8.48) = 9.17
    surprise: carry(0.0 × 0.25) + delta(-5.03) = -5.03
    trust: carry(0.0 × 0.25) + delta(-15.20) = -15.20
    anticipation: carry(0.0 × 0.25) + delta(-19.19) = -19.19

=== Chapter 17 ===
Stimulants this chapter: 2

  Stimulant: "The Prime begins the BoltStone recorrection program on Praew, using pulses to make her mind impressionable against her will."
    Event: constraint | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=32 × trig=1 × weight=0.5 → raw=16.00
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 16.00 × (1 + 0.453) = 23.25
    Final delta: 23.25 × 1 × 1 = 23.25
    fear: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.10 × (1 + -0.360) = 5.18
    Final delta: 5.18 × 1 × 1 = 5.18
    sadness: base=40 × trig=1 × weight=0.2 → raw=8.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.00 × (1 + 0.720) = 13.76
    Final delta: 13.76 × 1 × 1 = 13.76

  Stimulant: "Praew experiences a vision of her parents telling her to leave the city and go on her adventure, giving her emotional comfort."
    Event: connection | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    trust: base=36 × trig=0.85 × weight=0.5 → raw=15.30
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 15.30 × (1 + -0.100) = 13.77
    Final delta: 13.77 × 0.9 × 1.3 = 16.11
    joy: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 8.16 × (1 + 0.100) = 8.98
    Final delta: 8.98 × 0.9 × 1.3 = 10.50
    anticipation: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 5.44 × (1 + 0.087) = 5.91
    Final delta: 5.91 × 0.9 × 1.3 = 6.92
  Ambient surprise: avg_trigger(0.93) × 15 = +13.9

  Suppression applied:
  Suppression: anger(82.2) suppresses joy by -11.63 (50% of anger delta)
  Suppression: anger(82.2) suppresses trust by -6.98 (30% of anger delta)
  Suppression: anger(82.2) suppresses fear by -3.49 (15% of anger delta)
  Suppression: sadness(88.8) suppresses joy by -8.26 (60% of sadness delta)
  Suppression: sadness(88.8) suppresses anticipation by -4.13 (30% of sadness delta)
  Suppression: sadness(88.8) suppresses surprise by -2.75 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-9.38) = -9.38
    sadness: carry(75.0 × 0.25) + delta(13.76) = 32.51
    anger: carry(59.0 × 0.25) + delta(23.25) = 37.99
    fear: carry(9.7 × 0.25) + delta(1.70) = 4.11
    disgust: carry(9.2 × 0.25) + delta(0.00) = 2.29
    surprise: carry(0.0 × 0.25) + delta(11.12) = 11.12
    trust: carry(0.0 × 0.25) + delta(9.13) = 9.13
    anticipation: carry(0.0 × 0.25) + delta(2.79) = 2.79

=== Chapter 18 ===
Stimulants this chapter: 5

  Stimulant: "Praew wakes to find Godric has rescued her from The Prime and is taking her to the surface to escape."
    Event: reward | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    joy: base=32 × trig=1 × weight=0.6 → raw=19.20
    Trait modifiers for joy (total: +0.100):
  empathyBaseline(75/75 × 0.2) = +0.200 [Empathic joy — shares in others' happiness]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 19.20 × (1 + 0.100) = 21.12
    Final delta: 21.12 × 1 × 1.3 = 27.46
    trust: base=36 × trig=1 × weight=0.3 → raw=10.80
    Trait modifiers for trust (total: -0.100):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
    Modified delta: 10.80 × (1 + -0.100) = 9.72
    Final delta: 9.72 × 1 × 1.3 = 12.64
    anticipation: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 3.20 × (1 + 0.087) = 3.48
    Final delta: 3.48 × 1 × 1.3 = 4.52

  Stimulant: "Renwick and six Embedded warriors block the final gate to the surface, threatening to end her escape."
    Event: obstacle | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=32 × trig=1 × weight=0.4 → raw=12.80
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 12.80 × (1 + 0.453) = 18.60
    Final delta: 18.60 × 1 × 0.8 = 14.88
    anticipation: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 9.60 × (1 + 0.087) = 10.43
    Final delta: 10.43 × 1 × 0.8 = 8.35
    fear: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 8.10 × (1 + -0.360) = 5.18
    Final delta: 5.18 × 1 × 0.8 = 4.15

  Stimulant: "Godric sacrifices himself to hold back the warriors so Praew can escape, and she realizes she may never see her hero again."
    Event: separation | Subject: friend | Source: ally_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=40 × trig=1 × weight=0.6 → raw=24.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 24.00 × (1 + 0.720) = 41.28
    Final delta: 41.28 × 0.8 × 1.3 = 42.93
    Capped: 42.93 → 40.00 (max 40 per stimulant)
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.360) = 3.46
    Final delta: 3.46 × 0.8 × 1.3 = 3.59
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.453) = 9.30
    Final delta: 9.30 × 0.8 × 1.3 = 9.67

  Stimulant: "Praew runs across the deadly surface alone, triggering dangerous stones and suffering electricity from her own BoltStone, nearly dying."
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for fear (total: -0.360):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  riskAppetite(65/75 × -0.3) = -0.260 [High risk appetite = fear hits less hard]
    Modified delta: 18.90 × (1 + -0.360) = 12.10
    Final delta: 12.10 × 1 × 0.7 = 8.47
    anticipation: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anticipation (total: +0.087):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  curiosity(70/75 × 0.2) = +0.187 [Curious = heightened anticipation for new info]
    Modified delta: 6.40 × (1 + 0.087) = 6.95
    Final delta: 6.95 × 1 × 0.7 = 4.87
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.453) = 4.65
    Final delta: 4.65 × 1 × 0.7 = 3.26

  Stimulant: "Praew accepts her likely death on the surface with a smile, finding peace in dying free rather than as a prisoner."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=31 × trig=1 × weight=0.4 → raw=12.40
    Trait modifiers for disgust (total: +0.140):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  moralRigidity(60/75 × 0.3) = +0.240 [Rigid morals = stronger moral disgust]
    Modified delta: 12.40 × (1 + 0.140) = 14.14
    Final delta: 14.14 × 1 × 1.1 = 15.55
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.453):
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  confrontationalTendency(60/75 × 0.3) = +0.240 [Confrontational = anger rises faster in conflict]
  prideSensitivity(50/75 × 0.2) = +0.133 [Sensitive pride = anger when status/competence challenged]
  patience(25/75 × -0.2) = -0.067 [Patient = slower to anger]
  impulsiveness(65/75 × 0.1) = +0.087 [Impulsive = anger flares quickly]
  moralRigidity(60/75 × 0.2) = +0.160 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.453) = 13.95
    Final delta: 13.95 × 1 × 1.1 = 15.35
    sadness: base=40 × trig=1 × weight=0.3 → raw=12.00
    Trait modifiers for sadness (total: +0.720):
  empathyBaseline(75/75 × 0.4) = +0.400 [High empathy = feels loss/pain more deeply]
  emotionalContainment(25/75 × -0.3) = -0.100 [High containment = suppresses emotional expression]
  shameSensitivity(40/75 × 0.3) = +0.160 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(65/75 × 0.3) = +0.260 [High guilt = sadness from moral self-judgment]
    Modified delta: 12.00 × (1 + 0.720) = 20.64
    Final delta: 20.64 × 1 × 1.1 = 22.70
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0

  Suppression applied:
  Suppression: anger(81.2) suppresses joy by -21.58 (50% of anger delta)
  Suppression: anger(81.2) suppresses trust by -12.95 (30% of anger delta)
  Suppression: anger(81.2) suppresses fear by -6.47 (15% of anger delta)
  Suppression: sadness(95.2) suppresses joy by -37.62 (60% of sadness delta)
  Suppression: sadness(95.2) suppresses anticipation by -18.81 (30% of sadness delta)
  Suppression: sadness(95.2) suppresses surprise by -12.54 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-31.75) = -31.75
    sadness: carry(32.5 × 0.25) + delta(62.70) = 70.83
    anger: carry(38.0 × 0.25) + delta(43.16) = 52.66
    fear: carry(4.1 × 0.25) + delta(9.73) = 10.76
    disgust: carry(2.3 × 0.25) + delta(15.55) = 16.12
    surprise: carry(11.1 × 0.25) + delta(2.46) = 5.24
    trust: carry(9.1 × 0.25) + delta(-0.31) = 1.97
    anticipation: carry(2.8 × 0.25) + delta(-1.08) = -0.38
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
 1 |      5 |     32 |     50 |     11 |     10 |     14 |      0 |      5
 2 |      0 |     60 |    75! |      0 |     13 |      8 |      0 |      0
 3 |      0 |     15 |     19 |      0 |      3 |      2 |      0 |      0
 4 |      0 |     15 |     19 |      0 |      3 |      2 |      0 |      0
 5 |      0 |     15 |     19 |      0 |      3 |      2 |      0 |      0
 6 |      0 |     15 |     19 |      0 |      3 |      2 |      0 |      0
 7 |      0 |     23 |     43 |      4 |     21 |     13 |      0 |      9
 8 |      0 |      6 |     17 |      9 |      5 |     16 |      0 |      9
 9 |      3 |     37 |     22 |      9 |      1 |      7 |      7 |      6
10 |     13 |      9 |     41 |     16 |      0 |     17 |      5 |     24
11 |      2 |     55 |     61 |      3 |     33 |      6 |     18 |     10
12 |      0 |     34 |     74 |      0 |     30 |     12 |      0 |      5
13 |      0 |     50 |     61 |     12 |     18 |      6 |      0 |      0
14 |      6 |     13 |     28 |     19 |      4 |      9 |      4 |     15
15 |      0 |     42 |     41 |     11 |     16 |      1 |      0 |      0
16 |      0 |     10 |     10 |      6 |      4 |     18 |      0 |      8
17 |      0 |     75 |     62 |      7 |     16 |      5 |      0 |      0
18 |      0 |     52 |     44 |      9 |      4 |     10 |      0 |      0
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
    trust: base=32 × trig=0.85 × weight=0.5 → raw=13.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 13.60 × (1 + -0.160) = 11.42
    Final delta: 11.42 × 0.8 × 1.1 = 10.05
    joy: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 5.61 × (1 + -0.013) = 5.54
    Final delta: 5.54 × 0.8 × 1.1 = 4.87
    anticipation: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 5.27 × (1 + -0.027) = 5.13
    Final delta: 5.13 × 0.8 × 1.1 = 4.51

  Stimulant: "Asher hesitates and then abandons Haldric dangling over a pit during the practical test, choosing to take both stones."
    Event: betrayal | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=27 × trig=1 × weight=0.4 → raw=10.80
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.80 × (1 + 0.633) = 17.64
    Final delta: 17.64 × 1 × 1.3 = 22.93
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 1 × 1.3 = 21.75
    trust (COLLAPSE): base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 9.60 × (1 + -0.160) = 8.06
    Final delta: 8.06 × 1 × 1.3 = 10.48
    → Trust COLLAPSED by -10.48

  Stimulant: "Haldric screams that it's not fair as the Hunter dismisses his protest, leaving him shaking with barely contained rage."
    Event: injustice | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=41 × trig=1 × weight=0.5 → raw=20.50
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 20.50 × (1 + 0.360) = 27.88
    Final delta: 27.88 × 1 × 1 = 27.88
    disgust: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 9.60 × (1 + 0.060) = 10.18
    Final delta: 10.18 × 1 × 1 = 10.18
    sadness: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.40 × (1 + 0.633) = 8.82
    Final delta: 8.82 × 1 × 1 = 8.82
  Ambient surprise: avg_trigger(0.95) × 15 = +14.3
  Ambient fear: extreme event detected → +11.4

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(4.87) = 4.87
    sadness: carry(0.0 × 0.25) + delta(31.75) = 31.75
    anger: carry(0.0 × 0.25) + delta(49.63) = 49.63
    fear: carry(0.0 × 0.25) + delta(11.40) = 11.40
    disgust: carry(0.0 × 0.25) + delta(10.18) = 10.18
    surprise: carry(0.0 × 0.25) + delta(14.25) = 14.25
    trust: carry(0.0 × 0.25) + delta(-0.43) = -0.43
    anticipation: carry(0.0 × 0.25) + delta(4.51) = 4.51

=== Chapter 2 ===
Stimulants this chapter: 3

  Stimulant: "Haldric is assigned to government administration in the Prime Archon's office, not a poor job but not the Hunter role he wanted."
    Event: constraint | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=41 × trig=1 × weight=0.5 → raw=20.50
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 20.50 × (1 + 0.360) = 27.88
    Final delta: 27.88 × 1 × 1 = 27.88
    fear: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.60 × (1 + -0.380) = 4.09
    Final delta: 4.09 × 1 × 1 = 4.09
    sadness: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.40 × (1 + 0.633) = 8.82
    Final delta: 8.82 × 1 × 1 = 8.82

  Stimulant: "Asher is named Beast Hunter, the most prestigious role, while Haldric is left with a desk job, intensifying his fury."
    Event: injustice | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=41 × trig=1 × weight=0.5 → raw=20.50
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 20.50 × (1 + 0.360) = 27.88
    Final delta: 27.88 × 1 × 1 = 27.88
    disgust: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 9.60 × (1 + 0.060) = 10.18
    Final delta: 10.18 × 1 × 1 = 10.18
    sadness: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.40 × (1 + 0.633) = 8.82
    Final delta: 8.82 × 1 × 1 = 8.82

  Stimulant: "Asher walks away without saying goodbye or apologizing, completing his betrayal of Haldric and Praew."
    Event: rejection | Subject: self | Source: ally_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=27 × trig=1 × weight=0.6 → raw=16.20
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.20 × (1 + 0.633) = 26.46
    Final delta: 26.46 × 1 × 1.3 = 34.40
    anger: base=41 × trig=1 × weight=0.2 → raw=8.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.20 × (1 + 0.360) = 11.15
    Final delta: 11.15 × 1 × 1.3 = 14.50
    fear: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 4.40 × (1 + -0.380) = 2.73
    Final delta: 2.73 × 1 × 1.3 = 3.55
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0
  Ambient anticipation: extreme event detected → +10.0

  Suppression applied:
  Suppression: anger(119.9) suppresses joy by -35.13 (50% of anger delta)
  Suppression: anger(119.9) suppresses trust by -21.08 (30% of anger delta)
  Suppression: anger(119.9) suppresses fear by -10.54 (15% of anger delta)
  Suppression: sadness(83.8) suppresses joy by -31.22 (60% of sadness delta)
  Suppression: sadness(83.8) suppresses anticipation by -15.61 (30% of sadness delta)
  Suppression: sadness(83.8) suppresses surprise by -10.41 (20% of sadness delta)

  Emotion updates:
    joy: carry(4.9 × 0.25) + delta(-66.35) = -65.13
    sadness: carry(31.8 × 0.25) + delta(52.04) = 59.98
    anger: carry(49.6 × 0.25) + delta(70.26) = 82.66
    *** anger in RED ZONE: VU=82.7 (track capped at 75) ***
    fear: carry(11.4 × 0.25) + delta(-2.90) = -0.05
    disgust: carry(10.2 × 0.25) + delta(10.18) = 12.72
    surprise: carry(14.3 × 0.25) + delta(4.59) = 8.15
    anticipation: carry(4.5 × 0.25) + delta(-5.61) = -4.48

=== Chapter 3 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(60.0 × 0.25) + delta(0.00) = 14.99
    anger: carry(75.0 × 0.25) + delta(0.00) = 18.75
    disgust: carry(12.7 × 0.25) + delta(0.00) = 3.18
    surprise: carry(8.2 × 0.25) + delta(0.00) = 2.04

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
    anger: base=41 × trig=0.85 × weight=0.5 → raw=17.43
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 17.43 × (1 + 0.360) = 23.70
    Final delta: 23.70 × 1 × 1 = 23.70
    disgust: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 8.16 × (1 + 0.060) = 8.65
    Final delta: 8.65 × 1 × 1 = 8.65
    sadness: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.59 × (1 + 0.633) = 7.50
    Final delta: 7.50 × 1 × 1 = 7.50

  Stimulant: "Praew asks Haldric to help investigate the suspicious disappearance of Junya's parents, pulling him into a risky mission."
    Event: moral_cue | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    disgust: base=32 × trig=0.85 × weight=0.4 → raw=10.88
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 10.88 × (1 + 0.060) = 11.53
    Final delta: 11.53 × 0.8 × 1.3 = 11.99
    anger: base=41 × trig=0.85 × weight=0.3 → raw=10.46
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 10.46 × (1 + 0.360) = 14.22
    Final delta: 14.22 × 0.8 × 1.3 = 14.79
    sadness: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.88 × (1 + 0.633) = 11.25
    Final delta: 11.25 × 0.8 × 1.3 = 11.70
  Ambient surprise: avg_trigger(0.85) × 15 = +12.8
  Ambient anticipation: extreme event detected → +8.5
  Ambient fear: extreme event detected → +10.2

  Suppression applied:
  Suppression: anger(57.2) suppresses joy by -19.24 (50% of anger delta)
  Suppression: anger(57.2) suppresses trust by -11.55 (30% of anger delta)
  Suppression: anger(57.2) suppresses fear by -5.77 (15% of anger delta)

  Emotion updates:
    sadness: carry(15.0 × 0.25) + delta(19.19) = 22.94
    anger: carry(18.8 × 0.25) + delta(38.49) = 43.17
    fear: carry(0.0 × 0.25) + delta(4.43) = 4.43
    disgust: carry(3.2 × 0.25) + delta(20.64) = 21.44
    surprise: carry(2.0 × 0.25) + delta(12.75) = 13.26
    anticipation: carry(0.0 × 0.25) + delta(8.50) = 8.50

=== Chapter 8 ===
Stimulants this chapter: 2

  Stimulant: "Haldric discovers his Grayparents have been secretly skipping meals to save food for him, leaving them gaunt and weak."
    Event: surprise_reveal | Subject: family | Source: ally_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    surprise: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 12.60 × (1 + -0.170) = 10.46
    Final delta: 10.46 × 0.9 × 1.3 = 12.24
    fear: base=22 × trig=1 × weight=0.15 → raw=3.30
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.30 × (1 + -0.380) = 2.05
    Final delta: 2.05 × 0.9 × 1.3 = 2.39
    anticipation: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.65 × (1 + -0.027) = 4.53
    Final delta: 4.53 × 0.9 × 1.3 = 5.30

  Stimulant: "Haldric tells his Grayparents he cannot lose them too after already losing his parents, feeling desperate fear for their health."
    Event: threat | Subject: family | Source: world_caused | Domain: attachment
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: world_caused → ×0.7
    fear: base=22 × trig=0.85 × weight=0.7 → raw=13.09
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 13.09 × (1 + -0.380) = 8.12
    Final delta: 8.12 × 0.9 × 0.7 = 5.11
    anger: base=41 × trig=0.85 × weight=0.2 → raw=6.97
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.97 × (1 + 0.360) = 9.48
    Final delta: 9.48 × 0.9 × 0.7 = 5.97
    anticipation: base=31 × trig=0.85 × weight=0.1 → raw=2.63
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.63 × (1 + -0.027) = 2.56
    Final delta: 2.56 × 0.9 × 0.7 = 1.62

  Emotion updates:
    sadness: carry(22.9 × 0.25) + delta(0.00) = 5.74
    anger: carry(43.2 × 0.25) + delta(5.97) = 16.77
    fear: carry(4.4 × 0.25) + delta(7.51) = 8.61
    disgust: carry(21.4 × 0.25) + delta(0.00) = 5.36
    surprise: carry(13.3 × 0.25) + delta(12.24) = 15.55
    anticipation: carry(8.5 × 0.25) + delta(6.91) = 9.04

=== Chapter 9 ===
Stimulants this chapter: 4

  Stimulant: "Haldric overhears Godric furiously confronting The Prime about something involving 'them,' sparking his suspicion."
    Event: surprise_reveal | Subject: authority | Source: world_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=1 → total=5 → Medium (×0.6)
    Subject mult: authority → ×0.6
    Source mult: world_caused → ×0.7
    surprise: base=18 × trig=0.6 × weight=0.7 → raw=7.56
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 7.56 × (1 + -0.170) = 6.27
    Final delta: 6.27 × 0.6 × 0.7 = 2.64
    fear: base=22 × trig=0.6 × weight=0.15 → raw=1.98
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 1.98 × (1 + -0.380) = 1.23
    Final delta: 1.23 × 0.6 × 0.7 = 0.52
    anticipation: base=31 × trig=0.6 × weight=0.15 → raw=2.79
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.79 × (1 + -0.027) = 2.72
    Final delta: 2.72 × 0.6 × 0.7 = 1.14

  Stimulant: "Haldric accidentally asks The Prime if he is okay, revealing he overheard the argument and compromising his position."
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=0.85 × weight=0.5 → raw=11.47
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.47 × (1 + 0.633) = 18.74
    Final delta: 18.74 × 1 × 1.1 = 20.62
    fear: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 5.61 × (1 + -0.380) = 3.48
    Final delta: 3.48 × 1 × 1.1 = 3.83
    anger: base=41 × trig=0.85 × weight=0.2 → raw=6.97
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.97 × (1 + 0.360) = 9.48
    Final delta: 9.48 × 1 × 1.1 = 10.43

  Stimulant: "The Prime apologizes for Asher's betrayal during the test and shows unexpected vulnerability, confusing Haldric's view of him."
    Event: connection | Subject: authority | Source: authority_caused | Domain: belonging
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: authority → ×0.6
    Source mult: authority_caused → ×1
    trust: base=32 × trig=0.85 × weight=0.5 → raw=13.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 13.60 × (1 + -0.160) = 11.42
    Final delta: 11.42 × 0.6 × 1 = 6.85
    joy: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 5.61 × (1 + -0.013) = 5.54
    Final delta: 5.54 × 0.6 × 1 = 3.32
    anticipation: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 5.27 × (1 + -0.027) = 5.13
    Final delta: 5.13 × 0.6 × 1 = 3.08

  Stimulant: "Haldric feels the thrill of the hunt for the first time since starting his desk job, reignited by the mysteries around the Prime."
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=2 cert=2 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=0.6 × weight=0.5 → raw=8.10
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.10 × (1 + 0.633) = 13.23
    Final delta: 13.23 × 1 × 1.1 = 14.55
    fear: base=22 × trig=0.6 × weight=0.3 → raw=3.96
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.96 × (1 + -0.380) = 2.46
    Final delta: 2.46 × 1 × 1.1 = 2.70
    anger: base=41 × trig=0.6 × weight=0.2 → raw=4.92
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.92 × (1 + 0.360) = 6.69
    Final delta: 6.69 × 1 × 1.1 = 7.36

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(3.32) = 3.32
    sadness: carry(5.7 × 0.25) + delta(35.17) = 36.60
    anger: carry(16.8 × 0.25) + delta(17.79) = 21.98
    fear: carry(8.6 × 0.25) + delta(7.04) = 9.20
    disgust: carry(5.4 × 0.25) + delta(0.00) = 1.34
    surprise: carry(15.6 × 0.25) + delta(2.64) = 6.52
    trust: carry(0.0 × 0.25) + delta(6.85) = 6.85
    anticipation: carry(9.0 × 0.25) + delta(4.22) = 6.48

=== Chapter 10 ===
Stimulants this chapter: 5

  Stimulant: "Haldric is assigned to personally deliver the retirement notice to War Claw Bresdin, a Mythical Beast Hunter."
    Event: obstacle | Subject: self | Source: authority_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=41 × trig=1 × weight=0.4 → raw=16.40
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 16.40 × (1 + 0.360) = 22.30
    Final delta: 22.30 × 1 × 1 = 22.30
    anticipation: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 9.30 × (1 + -0.027) = 9.05
    Final delta: 9.05 × 1 × 1 = 9.05
    fear: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.60 × (1 + -0.380) = 4.09
    Final delta: 4.09 × 1 × 1 = 4.09

  Stimulant: "Hunters at the office threaten and shove Haldric when he announces the honorable discharge of their legend."
    Event: threat | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 15.40 × (1 + -0.380) = 9.55
    Final delta: 9.55 × 1 × 0.8 = 7.64
    anger: base=41 × trig=1 × weight=0.2 → raw=8.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.20 × (1 + 0.360) = 11.15
    Final delta: 11.15 × 1 × 0.8 = 8.92
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 1 × 0.8 = 2.41

  Stimulant: "Bresdin flees and opens the surface gate to blind Haldric, then attacks him with a weapon while Haldric is unable to see."
    Event: danger_cue | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 15.40 × (1 + -0.380) = 9.55
    Final delta: 9.55 × 1 × 0.8 = 7.64
    anticipation: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 6.20 × (1 + -0.027) = 6.03
    Final delta: 6.03 × 1 × 0.8 = 4.83
    anger: base=41 × trig=1 × weight=0.1 → raw=4.10
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.10 × (1 + 0.360) = 5.58
    Final delta: 5.58 × 1 × 0.8 = 4.46

  Stimulant: "Haldric successfully fights Bresdin while blind using childhood training, and The Prime intervenes to stop the Hunter."
    Event: success | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 15.40 × (1 + -0.013) = 15.19
    Final delta: 15.19 × 1 × 1.1 = 16.71
    trust: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 6.40 × (1 + -0.160) = 5.38
    Final delta: 5.38 × 1 × 1.1 = 5.91
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 1 × 1.1 = 3.32

  Stimulant: "The Prime Archon checks Haldric for injuries with paternal concern, and praises his fighting ability."
    Event: reward | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=22 × trig=1 × weight=0.6 → raw=13.20
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 13.20 × (1 + -0.013) = 13.02
    Final delta: 13.02 × 1 × 1 = 13.02
    trust: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 9.60 × (1 + -0.160) = 8.06
    Final delta: 8.06 × 1 × 1 = 8.06
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 1 × 1 = 3.02
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0

  Suppression applied:
  Suppression: anger(57.7) suppresses joy by -17.84 (50% of anger delta)
  Suppression: anger(57.7) suppresses trust by -10.71 (30% of anger delta)
  Suppression: anger(57.7) suppresses fear by -5.35 (15% of anger delta)

  Emotion updates:
    joy: carry(3.3 × 0.25) + delta(11.89) = 12.73
    sadness: carry(36.6 × 0.25) + delta(0.00) = 9.15
    anger: carry(22.0 × 0.25) + delta(35.69) = 41.18
    fear: carry(9.2 × 0.25) + delta(14.02) = 16.31
    disgust: carry(1.3 × 0.25) + delta(0.00) = 0.33
    surprise: carry(6.5 × 0.25) + delta(15.00) = 16.63
    trust: carry(6.9 × 0.25) + delta(3.27) = 4.99
    anticipation: carry(6.5 × 0.25) + delta(22.63) = 24.25

=== Chapter 11 ===
Stimulants this chapter: 10

  Stimulant: "Haldric's body has acclimated to the surface, gaining enhanced strength, stamina, and senses overnight."
    Event: success | Subject: self | Source: world_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    joy: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 15.40 × (1 + -0.013) = 15.19
    Final delta: 15.19 × 1 × 0.7 = 10.64
    trust: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 6.40 × (1 + -0.160) = 5.38
    Final delta: 5.38 × 1 × 0.7 = 3.76
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 1 × 0.7 = 2.11

  Stimulant: "The Prime tells Haldric that it should have been him who became a Hunter, acknowledging the injustice of the test."
    Event: reward | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=22 × trig=1 × weight=0.6 → raw=13.20
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 13.20 × (1 + -0.013) = 13.02
    Final delta: 13.02 × 1 × 1 = 13.02
    trust: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 9.60 × (1 + -0.160) = 8.06
    Final delta: 8.06 × 1 × 1 = 8.06
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 1 × 1 = 3.02

  Stimulant: "The Prime tells Haldric he is fired, causing a moment of panic before Haldric realizes it may be a joke leading to something bigger."
    Event: surprise_reveal | Subject: self | Source: authority_caused | Domain: future_security
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    surprise: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 12.60 × (1 + -0.170) = 10.46
    Final delta: 10.46 × 1 × 1 = 10.46
    fear: base=22 × trig=1 × weight=0.15 → raw=3.30
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.30 × (1 + -0.380) = 2.05
    Final delta: 2.05 × 1 × 1 = 2.05
    anticipation: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.65 × (1 + -0.027) = 4.53
    Final delta: 4.53 × 1 × 1 = 4.53

  Stimulant: "Haldric sees the surface for the first time in full beauty but turns away, choosing to stay and serve rather than become a Hunter."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=32 × trig=1 × weight=0.4 → raw=12.80
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 12.80 × (1 + 0.060) = 13.57
    Final delta: 13.57 × 1 × 1.1 = 14.92
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 1 × 1.1 = 18.40
    sadness: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.10 × (1 + 0.633) = 13.23
    Final delta: 13.23 × 1 × 1.1 = 14.55

  Stimulant: "The Prime Archon publicly announces Haldric as the Heir Archon, his chosen successor, shocking the entire administration."
    Event: success | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 15.40 × (1 + -0.013) = 15.19
    Final delta: 15.19 × 1 × 1 = 15.19
    trust: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 6.40 × (1 + -0.160) = 5.38
    Final delta: 5.38 × 1 × 1 = 5.38
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 1 × 1 = 3.02

  Stimulant: "The administration erupts in cheers for Haldric and he feels belonging for the first time in the building."
    Event: connection | Subject: group | Source: world_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    trust: base=32 × trig=1 × weight=0.5 → raw=16.00
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 16.00 × (1 + -0.160) = 13.44
    Final delta: 13.44 × 0.7 × 0.7 = 6.59
    joy: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 6.60 × (1 + -0.013) = 6.51
    Final delta: 6.51 × 0.7 × 0.7 = 3.19
    anticipation: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 6.20 × (1 + -0.027) = 6.03
    Final delta: 6.03 × 0.7 × 0.7 = 2.96

  Stimulant: "The Prime gives Haldric the Master Key and the book of the previous Archon, entrusting him with the city's deepest secrets."
    Event: reward | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=22 × trig=1 × weight=0.6 → raw=13.20
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 13.20 × (1 + -0.013) = 13.02
    Final delta: 13.02 × 1 × 1 = 13.02
    trust: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 9.60 × (1 + -0.160) = 8.06
    Final delta: 8.06 × 1 × 1 = 8.06
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 1 × 1 = 3.02

  Stimulant: "A mysterious white-haired girl appears to Haldric that no one else can see, speaking to him and then vanishing through a door."
    Event: surprise_reveal | Subject: stranger | Source: world_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: stranger → ×0.3
    Source mult: world_caused → ×0.7
    surprise: base=18 × trig=0.85 × weight=0.7 → raw=10.71
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 10.71 × (1 + -0.170) = 8.89
    Final delta: 8.89 × 0.3 × 0.7 = 1.87
    fear: base=22 × trig=0.85 × weight=0.15 → raw=2.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 2.80 × (1 + -0.380) = 1.74
    Final delta: 1.74 × 0.3 × 0.7 = 0.37
    anticipation: base=31 × trig=0.85 × weight=0.15 → raw=3.95
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.95 × (1 + -0.027) = 3.85
    Final delta: 3.85 × 0.3 × 0.7 = 0.81

  Stimulant: "Praew confronts Haldric about his new power and The Prime, urging him to use his position to uncover the truth."
    Event: moral_cue | Subject: self | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    disgust: base=32 × trig=1 × weight=0.4 → raw=12.80
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 12.80 × (1 + 0.060) = 13.57
    Final delta: 13.57 × 1 × 1.3 = 17.64
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 1 × 1.3 = 21.75
    sadness: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.10 × (1 + 0.633) = 13.23
    Final delta: 13.23 × 1 × 1.3 = 17.20

  Stimulant: "Haldric accidentally smashes a stone table with his fist while defending The Prime, revealing his new strength to Praew."
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=0.85 × weight=0.5 → raw=11.47
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.47 × (1 + 0.633) = 18.74
    Final delta: 18.74 × 1 × 1.1 = 20.62
    fear: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 5.61 × (1 + -0.380) = 3.48
    Final delta: 3.48 × 1 × 1.1 = 3.83
    anger: base=41 × trig=0.85 × weight=0.2 → raw=6.97
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.97 × (1 + 0.360) = 9.48
    Final delta: 9.48 × 1 × 1.1 = 10.43

  Suppression applied:
  Suppression: anger(91.8) suppresses joy by -25.29 (50% of anger delta)
  Suppression: anger(91.8) suppresses trust by -15.17 (30% of anger delta)
  Suppression: anger(91.8) suppresses fear by -7.59 (15% of anger delta)
  Suppression: sadness(61.5) suppresses joy by -31.42 (60% of sadness delta)
  Suppression: sadness(61.5) suppresses anticipation by -15.71 (30% of sadness delta)
  Suppression: sadness(61.5) suppresses surprise by -10.47 (20% of sadness delta)

  Emotion updates:
    joy: carry(12.7 × 0.25) + delta(-1.64) = 1.54
    sadness: carry(9.2 × 0.25) + delta(52.37) = 54.66
    anger: carry(41.2 × 0.25) + delta(50.57) = 60.87
    fear: carry(16.3 × 0.25) + delta(-1.35) = 2.73
    disgust: carry(0.3 × 0.25) + delta(32.56) = 32.65
    surprise: carry(16.6 × 0.25) + delta(1.85) = 6.01
    trust: carry(5.0 × 0.25) + delta(16.68) = 17.93
    anticipation: carry(24.2 × 0.25) + delta(3.74) = 9.81

=== Chapter 12 ===
Stimulants this chapter: 3

  Stimulant: "Haldric witnesses the Fourth Floor's slavery, whippings, and horrific conditions, shattering his image of The Prime as a benevolent leader."
    Event: injustice | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    anger: base=41 × trig=1 × weight=0.5 → raw=20.50
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 20.50 × (1 + 0.360) = 27.88
    Final delta: 27.88 × 0.7 × 1 = 19.52
    disgust: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 9.60 × (1 + 0.060) = 10.18
    Final delta: 10.18 × 0.7 × 1 = 7.12
    sadness: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.40 × (1 + 0.633) = 8.82
    Final delta: 8.82 × 0.7 × 1 = 6.17

  Stimulant: "Haldric desperately insists The Prime doesn't know about the Fourth Floor atrocities, his voice cracking as denial battles with what he has witnessed."
    Event: obstacle | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    anger: base=41 × trig=0.85 × weight=0.4 → raw=13.94
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 13.94 × (1 + 0.360) = 18.96
    Final delta: 18.96 × 1 × 1.1 = 20.85
    anticipation: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 7.90 × (1 + -0.027) = 7.69
    Final delta: 7.69 × 1 × 1.1 = 8.46
    fear: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 5.61 × (1 + -0.380) = 3.48
    Final delta: 3.48 × 1 × 1.1 = 3.83

  Stimulant: "Haldric steals two Sifaralith stones and a ledger from the Fourth Floor identification area, committing a dangerous act of rebellion."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=32 × trig=1 × weight=0.4 → raw=12.80
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 12.80 × (1 + 0.060) = 13.57
    Final delta: 13.57 × 1 × 1.1 = 14.92
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 1 × 1.1 = 18.40
    sadness: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.10 × (1 + 0.633) = 13.23
    Final delta: 13.23 × 1 × 1.1 = 14.55
  Ambient surprise: avg_trigger(0.95) × 15 = +14.3

  Suppression applied:
  Suppression: anger(119.6) suppresses joy by -29.39 (50% of anger delta)
  Suppression: anger(119.6) suppresses trust by -17.63 (30% of anger delta)
  Suppression: anger(119.6) suppresses fear by -8.82 (15% of anger delta)
  Suppression: sadness(75.4) suppresses joy by -12.44 (60% of sadness delta)
  Suppression: sadness(75.4) suppresses anticipation by -6.22 (30% of sadness delta)
  Suppression: sadness(75.4) suppresses surprise by -4.15 (20% of sadness delta)
  Suppression: disgust(54.7) suppresses joy by -8.82 (40% of disgust delta)
  Suppression: disgust(54.7) suppresses trust by -11.02 (50% of disgust delta)

  Emotion updates:
    joy: carry(1.5 × 0.25) + delta(-50.64) = -50.26
    sadness: carry(54.7 × 0.25) + delta(20.73) = 34.39
    anger: carry(60.9 × 0.25) + delta(58.77) = 73.99
    fear: carry(2.7 × 0.25) + delta(-4.99) = -4.31
    disgust: carry(32.6 × 0.25) + delta(22.05) = 30.21
    surprise: carry(6.0 × 0.25) + delta(10.10) = 11.61
    trust: carry(17.9 × 0.25) + delta(-28.66) = -24.17
    anticipation: carry(9.8 × 0.25) + delta(2.25) = 4.70

=== Chapter 13 ===
Stimulants this chapter: 5

  Stimulant: "Note reveals he is a rebel and accuses The Prime of holding Hunter families hostage, further eroding Haldric's trust."
    Event: surprise_reveal | Subject: authority | Source: enemy_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: authority → ×0.6
    Source mult: enemy_caused → ×0.8
    surprise: base=18 × trig=0.85 × weight=0.7 → raw=10.71
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 10.71 × (1 + -0.170) = 8.89
    Final delta: 8.89 × 0.6 × 0.8 = 4.27
    fear: base=22 × trig=0.85 × weight=0.15 → raw=2.80
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 2.80 × (1 + -0.380) = 1.74
    Final delta: 1.74 × 0.6 × 0.8 = 0.83
    anticipation: base=31 × trig=0.85 × weight=0.15 → raw=3.95
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.95 × (1 + -0.027) = 3.85
    Final delta: 3.85 × 0.6 × 0.8 = 1.85

  Stimulant: "Haldric realizes being seen with a rebel could get his entire family executed, and he panics about Praew's recklessness."
    Event: threat | Subject: family | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    fear: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 15.40 × (1 + -0.380) = 9.55
    Final delta: 9.55 × 0.9 × 1.3 = 11.17
    anger: base=41 × trig=1 × weight=0.2 → raw=8.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.20 × (1 + 0.360) = 11.15
    Final delta: 11.15 × 0.9 × 1.3 = 13.05
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 0.9 × 1.3 = 3.53

  Stimulant: "Haldric hurts Praew with his enhanced grip and cruelly insults her intelligence, then watches her walk away without looking back."
    Event: failure | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=1 × weight=0.5 → raw=13.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.50 × (1 + 0.633) = 22.05
    Final delta: 22.05 × 1 × 1.1 = 24.26
    fear: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.60 × (1 + -0.380) = 4.09
    Final delta: 4.09 × 1 × 1.1 = 4.50
    anger: base=41 × trig=1 × weight=0.2 → raw=8.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.20 × (1 + 0.360) = 11.15
    Final delta: 11.15 × 1 × 1.1 = 12.27

  Stimulant: "Haldric breaks into The Prime's office and discovers the BoltStone Recorrection Program documents signed by Godric, and breeding ledgers proving the food shortage is manufactured."
    Event: surprise_reveal | Subject: authority | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: self_caused → ×1.1
    surprise: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 12.60 × (1 + -0.170) = 10.46
    Final delta: 10.46 × 0.6 × 1.1 = 6.90
    fear: base=22 × trig=1 × weight=0.15 → raw=3.30
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.30 × (1 + -0.380) = 2.05
    Final delta: 2.05 × 0.6 × 1.1 = 1.35
    anticipation: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.65 × (1 + -0.027) = 4.53
    Final delta: 4.53 × 0.6 × 1.1 = 2.99

  Stimulant: "The Prime catches Haldric snooping in his office with classified documents exposed, expressing deep disappointment."
    Event: humiliation | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    sadness: base=27 × trig=1 × weight=0.4 → raw=10.80
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.80 × (1 + 0.633) = 17.64
    Final delta: 17.64 × 1 × 1 = 17.64
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 1 × 1 = 16.73
    disgust: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 9.60 × (1 + 0.060) = 10.18
    Final delta: 10.18 × 1 × 1 = 10.18

  Suppression applied:
  Suppression: anger(116.0) suppresses joy by -21.02 (50% of anger delta)
  Suppression: anger(116.0) suppresses trust by -12.61 (30% of anger delta)
  Suppression: anger(116.0) suppresses fear by -6.31 (15% of anger delta)
  Suppression: sadness(76.3) suppresses joy by -25.14 (60% of sadness delta)
  Suppression: sadness(76.3) suppresses anticipation by -12.57 (30% of sadness delta)
  Suppression: sadness(76.3) suppresses surprise by -8.38 (20% of sadness delta)

  Emotion updates:
    sadness: carry(34.4 × 0.25) + delta(41.90) = 50.49
    anger: carry(74.0 × 0.25) + delta(42.04) = 60.54
    fear: carry(0.0 × 0.25) + delta(11.55) = 11.55
    disgust: carry(30.2 × 0.25) + delta(10.18) = 17.73
    surprise: carry(11.6 × 0.25) + delta(2.79) = 5.69
    anticipation: carry(4.7 × 0.25) + delta(-4.20) = -3.03

=== Chapter 14 ===
Stimulants this chapter: 5

  Stimulant: "The Prime takes Haldric to the Noble Quarter and systematically dismantles his assumptions about the upper class being pampered."
    Event: surprise_reveal | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    surprise: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 12.60 × (1 + -0.170) = 10.46
    Final delta: 10.46 × 0.7 × 1 = 7.32
    fear: base=22 × trig=1 × weight=0.15 → raw=3.30
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.30 × (1 + -0.380) = 2.05
    Final delta: 2.05 × 0.7 × 1 = 1.43
    anticipation: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.65 × (1 + -0.027) = 4.53
    Final delta: 4.53 × 0.7 × 1 = 3.17

  Stimulant: "The Prime reveals the planet Ravour is dying and that everyone must eventually acclimate to survive evacuation through portals."
    Event: threat | Subject: group | Source: authority_caused | Domain: future_security
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    fear: base=22 × trig=0.85 × weight=0.7 → raw=13.09
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 13.09 × (1 + -0.380) = 8.12
    Final delta: 8.12 × 0.7 × 1 = 5.68
    anger: base=41 × trig=0.85 × weight=0.2 → raw=6.97
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.97 × (1 + 0.360) = 9.48
    Final delta: 9.48 × 0.7 × 1 = 6.64
    anticipation: base=31 × trig=0.85 × weight=0.1 → raw=2.63
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.63 × (1 + -0.027) = 2.56
    Final delta: 2.56 × 0.7 × 1 = 1.80

  Stimulant: "The Prime reveals the ten Beasts of Legend have learned to reproduce, potentially spelling human extinction."
    Event: danger_cue | Subject: group | Source: authority_caused | Domain: future_security
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    fear: base=22 × trig=0.85 × weight=0.7 → raw=13.09
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 13.09 × (1 + -0.380) = 8.12
    Final delta: 8.12 × 0.7 × 1 = 5.68
    anticipation: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 5.27 × (1 + -0.027) = 5.13
    Final delta: 5.13 × 0.7 × 1 = 3.59
    anger: base=41 × trig=0.85 × weight=0.1 → raw=3.49
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.49 × (1 + 0.360) = 4.74
    Final delta: 4.74 × 0.7 × 1 = 3.32

  Stimulant: "The mysterious white-haired girl reappears on the surface, getting terrifyingly close to Haldric and whispering that he looks like someone."
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=1 imm=3 cert=2 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=22 × trig=0.85 × weight=0.7 → raw=13.09
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 13.09 × (1 + -0.380) = 8.12
    Final delta: 8.12 × 1 × 0.7 = 5.68
    anticipation: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 5.27 × (1 + -0.027) = 5.13
    Final delta: 5.13 × 1 × 0.7 = 3.59
    anger: base=41 × trig=0.85 × weight=0.1 → raw=3.49
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.49 × (1 + 0.360) = 4.74
    Final delta: 4.74 × 1 × 0.7 = 3.32

  Stimulant: "The Prime tells Haldric the world needs a kind heart willing to risk everything, and that he chose Haldric for that quality."
    Event: reward | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=22 × trig=1 × weight=0.6 → raw=13.20
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 13.20 × (1 + -0.013) = 13.02
    Final delta: 13.02 × 1 × 1 = 13.02
    trust: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 9.60 × (1 + -0.160) = 8.06
    Final delta: 8.06 × 1 × 1 = 8.06
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.027) = 3.02
    Final delta: 3.02 × 1 × 1 = 3.02

  Suppression applied:
  Suppression: anger(73.8) suppresses joy by -6.64 (50% of anger delta)
  Suppression: anger(73.8) suppresses trust by -3.98 (30% of anger delta)
  Suppression: anger(73.8) suppresses fear by -1.99 (15% of anger delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(6.39) = 6.39
    sadness: carry(50.5 × 0.25) + delta(0.00) = 12.62
    anger: carry(60.5 × 0.25) + delta(13.27) = 28.41
    fear: carry(11.6 × 0.25) + delta(16.48) = 19.37
    disgust: carry(17.7 × 0.25) + delta(0.00) = 4.43
    surprise: carry(5.7 × 0.25) + delta(7.32) = 8.74
    trust: carry(0.0 × 0.25) + delta(4.08) = 4.08
    anticipation: carry(0.0 × 0.25) + delta(15.16) = 15.16

=== Chapter 15 ===
Stimulants this chapter: 4

  Stimulant: "Haldric realizes Praew was right about The Prime and is consumed by guilt for how he treated her, resolving to apologize."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=32 × trig=1 × weight=0.4 → raw=12.80
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 12.80 × (1 + 0.060) = 13.57
    Final delta: 13.57 × 1 × 1.1 = 14.92
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 1 × 1.1 = 18.40
    sadness: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.10 × (1 + 0.633) = 13.23
    Final delta: 13.23 × 1 × 1.1 = 14.55

  Stimulant: "Praew's parents reveal she has been missing since yesterday and no one can find her, sending Haldric into a panic."
    Event: danger_cue | Subject: friend | Source: world_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: world_caused → ×0.7
    fear: base=22 × trig=1 × weight=0.7 → raw=15.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 15.40 × (1 + -0.380) = 9.55
    Final delta: 9.55 × 0.8 × 0.7 = 5.35
    anticipation: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 6.20 × (1 + -0.027) = 6.03
    Final delta: 6.03 × 0.8 × 0.7 = 3.38
    anger: base=41 × trig=1 × weight=0.1 → raw=4.10
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 4.10 × (1 + 0.360) = 5.58
    Final delta: 5.58 × 0.8 × 0.7 = 3.12

  Stimulant: "Haldric finds classified medical records showing Godric was injured in suspicious late-night combat and another patient is redacted and in a coma."
    Event: surprise_reveal | Subject: authority | Source: self_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: self_caused → ×1.1
    surprise: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 12.60 × (1 + -0.170) = 10.46
    Final delta: 10.46 × 0.6 × 1.1 = 6.90
    fear: base=22 × trig=1 × weight=0.15 → raw=3.30
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.30 × (1 + -0.380) = 2.05
    Final delta: 2.05 × 0.6 × 1.1 = 1.35
    anticipation: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.65 × (1 + -0.027) = 4.53
    Final delta: 4.53 × 0.6 × 1.1 = 2.99

  Stimulant: "Haldric confronts Godric in the training center, attacks him with surged ForceStone, and is easily defeated and thrown into a wall."
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=1 × weight=0.5 → raw=13.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.50 × (1 + 0.633) = 22.05
    Final delta: 22.05 × 1 × 1.1 = 24.26
    fear: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.60 × (1 + -0.380) = 4.09
    Final delta: 4.09 × 1 × 1.1 = 4.50
    anger: base=41 × trig=1 × weight=0.2 → raw=8.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.20 × (1 + 0.360) = 11.15
    Final delta: 11.15 × 1 × 1.1 = 12.27

  Suppression applied:
  Suppression: anger(62.2) suppresses joy by -16.90 (50% of anger delta)
  Suppression: anger(62.2) suppresses trust by -10.14 (30% of anger delta)
  Suppression: anger(62.2) suppresses fear by -5.07 (15% of anger delta)
  Suppression: sadness(51.4) suppresses joy by -23.28 (60% of sadness delta)
  Suppression: sadness(51.4) suppresses anticipation by -11.64 (30% of sadness delta)
  Suppression: sadness(51.4) suppresses surprise by -7.76 (20% of sadness delta)

  Emotion updates:
    joy: carry(6.4 × 0.25) + delta(-40.18) = -38.58
    sadness: carry(12.6 × 0.25) + delta(38.81) = 41.96
    anger: carry(28.4 × 0.25) + delta(33.79) = 40.89
    fear: carry(19.4 × 0.25) + delta(6.13) = 10.97
    disgust: carry(4.4 × 0.25) + delta(14.92) = 16.03
    surprise: carry(8.7 × 0.25) + delta(-0.86) = 1.33
    trust: carry(4.1 × 0.25) + delta(-10.14) = -9.12
    anticipation: carry(15.2 × 0.25) + delta(-5.28) = -1.49

=== Chapter 16 ===
Stimulants this chapter: 2

  Stimulant: "Godric reveals he did not kidnap Praew's friends but has been trying to find them, and that he heard screaming below the Fourth Floor."
    Event: surprise_reveal | Subject: friend | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    surprise: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 12.60 × (1 + -0.170) = 10.46
    Final delta: 10.46 × 0.8 × 1.3 = 10.88
    fear: base=22 × trig=1 × weight=0.15 → raw=3.30
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.30 × (1 + -0.380) = 2.05
    Final delta: 2.05 × 0.8 × 1.3 = 2.13
    anticipation: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.65 × (1 + -0.027) = 4.53
    Final delta: 4.53 × 0.8 × 1.3 = 4.71

  Stimulant: "Haldric realizes the entrance to the Fifth Floor is hidden in The Prime's own office, confirming The Prime's involvement."
    Event: surprise_reveal | Subject: authority | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: self_caused → ×1.1
    surprise: base=18 × trig=1 × weight=0.7 → raw=12.60
    Trait modifiers for surprise (total: -0.170):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(45/75 × -0.2) = -0.120 [Adaptable = recovers from surprise faster]
  impulsiveness(55/75 × 0.15) = +0.110 [Impulsive = reacts more to surprises]
    Modified delta: 12.60 × (1 + -0.170) = 10.46
    Final delta: 10.46 × 0.6 × 1.1 = 6.90
    fear: base=22 × trig=1 × weight=0.15 → raw=3.30
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 3.30 × (1 + -0.380) = 2.05
    Final delta: 2.05 × 0.6 × 1.1 = 1.35
    anticipation: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.65 × (1 + -0.027) = 4.53
    Final delta: 4.53 × 0.6 × 1.1 = 2.99

  Emotion updates:
    sadness: carry(42.0 × 0.25) + delta(0.00) = 10.49
    anger: carry(40.9 × 0.25) + delta(0.00) = 10.22
    fear: carry(11.0 × 0.25) + delta(3.48) = 6.22
    disgust: carry(16.0 × 0.25) + delta(0.00) = 4.01
    surprise: carry(1.3 × 0.25) + delta(17.78) = 18.11
    anticipation: carry(0.0 × 0.25) + delta(7.69) = 7.69

=== Chapter 17 ===
Stimulants this chapter: 5

  Stimulant: "Haldric sees Praew strapped to a slab, covered in blood with a stone embedded in her chest, and two dead bodies nearby."
    Event: harm | Subject: friend | Source: authority_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    fear: base=22 × trig=1 × weight=0.5 → raw=11.00
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 11.00 × (1 + -0.380) = 6.82
    Final delta: 6.82 × 0.8 × 1 = 5.46
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 0.8 × 1 = 13.38
    sadness: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.40 × (1 + 0.633) = 8.82
    Final delta: 8.82 × 0.8 × 1 = 7.06

  Stimulant: "Haldric blames himself for believing The Prime's lies instead of trusting Praew, realizing his denial may have cost lives."
    Event: failure | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=1 × weight=0.5 → raw=13.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.50 × (1 + 0.633) = 22.05
    Final delta: 22.05 × 1 × 1.1 = 24.26
    fear: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.60 × (1 + -0.380) = 4.09
    Final delta: 4.09 × 1 × 1.1 = 4.50
    anger: base=41 × trig=1 × weight=0.2 → raw=8.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.20 × (1 + 0.360) = 11.15
    Final delta: 11.15 × 1 × 1.1 = 12.27

  Stimulant: "Haldric confesses to Godric that he loves Praew, knowing he may never see her again after the rescue."
    Event: separation | Subject: friend | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=1 × weight=0.6 → raw=16.20
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.20 × (1 + 0.633) = 26.46
    Final delta: 26.46 × 0.8 × 1.1 = 23.28
    fear: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 4.40 × (1 + -0.380) = 2.73
    Final delta: 2.73 × 0.8 × 1.1 = 2.40
    anger: base=41 × trig=1 × weight=0.2 → raw=8.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.20 × (1 + 0.360) = 11.15
    Final delta: 11.15 × 0.8 × 1.1 = 9.81

  Stimulant: "Haldric uses the Master Key to release every prisoner in the city jail as a distraction, an act of treason to save Praew."
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=32 × trig=1 × weight=0.4 → raw=12.80
    Trait modifiers for disgust (total: +0.060):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 12.80 × (1 + 0.060) = 13.57
    Final delta: 13.57 × 1 × 1.1 = 14.92
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 1 × 1.1 = 18.40
    sadness: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.10 × (1 + 0.633) = 13.23
    Final delta: 13.23 × 1 × 1.1 = 14.55

  Stimulant: "A freed prisoner murders a woman in front of her child as a direct consequence of Haldric's jailbreak, devastating him with guilt."
    Event: harm | Subject: stranger | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: self_caused → ×1.1
    fear: base=22 × trig=1 × weight=0.5 → raw=11.00
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 11.00 × (1 + -0.380) = 6.82
    Final delta: 6.82 × 0.3 × 1.1 = 2.25
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 0.3 × 1.1 = 5.52
    sadness: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.40 × (1 + 0.633) = 8.82
    Final delta: 8.82 × 0.3 × 1.1 = 2.91
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0
  Ambient anticipation: extreme event detected → +10.0

  Suppression applied:
  Suppression: anger(69.6) suppresses joy by -29.69 (50% of anger delta)
  Suppression: anger(69.6) suppresses trust by -17.82 (30% of anger delta)
  Suppression: anger(69.6) suppresses fear by -8.91 (15% of anger delta)
  Suppression: sadness(82.6) suppresses joy by -43.24 (60% of sadness delta)
  Suppression: sadness(82.6) suppresses anticipation by -21.62 (30% of sadness delta)
  Suppression: sadness(82.6) suppresses surprise by -14.41 (20% of sadness delta)

  Emotion updates:
    sadness: carry(10.5 × 0.25) + delta(72.06) = 74.68
    anger: carry(10.2 × 0.25) + delta(59.38) = 61.94
    fear: carry(6.2 × 0.25) + delta(5.70) = 7.26
    disgust: carry(4.0 × 0.25) + delta(14.92) = 15.93
    surprise: carry(18.1 × 0.25) + delta(0.59) = 5.12
    anticipation: carry(7.7 × 0.25) + delta(-11.62) = -9.69

=== Chapter 18 ===
Stimulants this chapter: 3

  Stimulant: "The Prime Archon beats Haldric with kicks and backhands, calling him a fool who doomed everyone."
    Event: harm | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=22 × trig=1 × weight=0.5 → raw=11.00
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 11.00 × (1 + -0.380) = 6.82
    Final delta: 6.82 × 1 × 1 = 6.82
    anger: base=41 × trig=1 × weight=0.3 → raw=12.30
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 12.30 × (1 + 0.360) = 16.73
    Final delta: 16.73 × 1 × 1 = 16.73
    sadness: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.40 × (1 + 0.633) = 8.82
    Final delta: 8.82 × 1 × 1 = 8.82

  Stimulant: "Haldric involuntarily calls The Prime 'Father' while being beaten, revealing his deep conflicted attachment despite everything."
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=1 × weight=0.5 → raw=13.50
    Trait modifiers for sadness (total: +0.633):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(70/75 × 0.3) = +0.280 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.50 × (1 + 0.633) = 22.05
    Final delta: 22.05 × 1 × 1.1 = 24.26
    fear: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for fear (total: -0.380):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  riskAppetite(55/75 × -0.3) = -0.220 [High risk appetite = fear hits less hard]
    Modified delta: 6.60 × (1 + -0.380) = 4.09
    Final delta: 4.09 × 1 × 1.1 = 4.50
    anger: base=41 × trig=1 × weight=0.2 → raw=8.20
    Trait modifiers for anger (total: +0.360):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(65/75 × 0.2) = +0.173 [Sensitive pride = anger when status/competence challenged]
  patience(35/75 × -0.2) = -0.093 [Patient = slower to anger]
  impulsiveness(55/75 × 0.1) = +0.073 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 8.20 × (1 + 0.360) = 11.15
    Final delta: 11.15 × 1 × 1.1 = 12.27

  Stimulant: "The Prime immediately softens after being called Father, asking if Haldric is alright, creating a whiplash of conflicting emotions."
    Event: connection | Subject: authority | Source: authority_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: authority_caused → ×1
    trust: base=32 × trig=1 × weight=0.5 → raw=16.00
    Trait modifiers for trust (total: -0.160):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 16.00 × (1 + -0.160) = 13.44
    Final delta: 13.44 × 0.6 × 1 = 8.06
    joy: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for joy (total: -0.013):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
    Modified delta: 6.60 × (1 + -0.013) = 6.51
    Final delta: 6.51 × 0.6 × 1 = 3.91
    anticipation: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anticipation (total: -0.027):
  emotionalContainment(40/75 × -0.3) = -0.160 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 6.20 × (1 + -0.027) = 6.03
    Final delta: 6.03 × 0.6 × 1 = 3.62
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0

  Suppression applied:
  Suppression: anger(90.9) suppresses joy by -14.50 (50% of anger delta)
  Suppression: anger(90.9) suppresses trust by -8.70 (30% of anger delta)
  Suppression: anger(90.9) suppresses fear by -4.35 (15% of anger delta)
  Suppression: sadness(107.8) suppresses joy by -19.85 (60% of sadness delta)
  Suppression: sadness(107.8) suppresses anticipation by -9.92 (30% of sadness delta)
  Suppression: sadness(107.8) suppresses surprise by -6.62 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-30.44) = -30.44
    sadness: carry(74.7 × 0.25) + delta(33.08) = 51.75
    anger: carry(61.9 × 0.25) + delta(29.00) = 44.48
    fear: carry(7.3 × 0.25) + delta(6.97) = 8.79
    disgust: carry(15.9 × 0.25) + delta(0.00) = 3.98
    surprise: carry(5.1 × 0.25) + delta(8.38) = 9.66
    trust: carry(0.0 × 0.25) + delta(-0.63) = -0.63
    anticipation: carry(0.0 × 0.25) + delta(-6.30) = -6.30
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
 1 |      0 |      8 |     10 |     12 |     14 |     15 |      0 |     10
 2 |      0 |     41 |     42 |     14 |     12 |     17 |      0 |      3
 3 |      0 |     49 |    75! |     18 |     11 |      1 |      0 |      0
 4 |      0 |     49 |     75 |     18 |     11 |      1 |      0 |      0
 5 |      0 |     49 |     75 |     18 |     11 |      1 |      0 |      0
 6 |      0 |     49 |     75 |     18 |     11 |      1 |      0 |      0
 7 |      0 |     12 |     19 |      5 |      3 |      0 |      0 |      0
 8 |      0 |     12 |     19 |      5 |      3 |      0 |      0 |      0
 9 |      1 |     34 |     31 |     20 |     13 |     13 |      2 |      4
10 |      0 |     20 |     17 |     15 |      3 |     17 |      0 |      2
11 |      0 |     39 |     23 |     11 |     15 |     11 |      0 |      0
12 |      0 |     10 |      6 |      3 |      4 |      3 |      0 |      0
13 |      0 |     33 |     29 |      4 |      7 |     15 |      0 |     10
14 |      0 |     38 |     55 |     11 |     29 |     10 |      0 |      0
15 |      0 |      9 |     14 |      3 |      7 |      3 |      0 |      0
16 |      4 |      8 |     10 |     13 |     11 |     16 |      1 |      2
17 |      1 |     13 |     17 |     15 |      3 |     18 |      0 |      5
18 |      0 |    75! |     53 |     35 |     15 |      2 |      0 |      0
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
    disgust: base=36 × trig=1 × weight=0.4 → raw=14.40
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 14.40 × (1 + 0.000) = 14.40
    Final delta: 14.40 × 0.9 × 1.1 = 14.26
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.053) = 10.11
    Final delta: 10.11 × 0.9 × 1.1 = 10.01
    sadness: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.90 × (1 + 0.140) = 7.87
    Final delta: 7.87 × 0.9 × 1.1 = 7.79
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0
  Ambient anticipation: extreme event detected → +10.0
  Ambient fear: extreme event detected → +12.0

  Emotion updates:
    sadness: carry(0.0 × 0.25) + delta(7.79) = 7.79
    anger: carry(0.0 × 0.25) + delta(10.01) = 10.01
    fear: carry(0.0 × 0.25) + delta(12.00) = 12.00
    disgust: carry(0.0 × 0.25) + delta(14.26) = 14.26
    surprise: carry(0.0 × 0.25) + delta(15.00) = 15.00
    anticipation: carry(0.0 × 0.25) + delta(10.00) = 10.00

=== Chapter 2 ===
Stimulants this chapter: 4

  Stimulant: "The Prime tries to speak to Asher before he leaves and is coldly cut off as Asher walks right past him, refusing any fatherly connection"
    Event: rejection | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.6 → raw=13.80
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.80 × (1 + 0.140) = 15.73
    Final delta: 15.73 × 0.9 × 1.3 = 18.41
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.9 × 1.3 = 7.89
    fear: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 6.20 × (1 + -0.460) = 3.35
    Final delta: 3.35 × 0.9 × 1.3 = 3.92

  Stimulant: "Asher publicly accuses The Prime of sabotaging his Hunter test by pitting him against his best friend"
    Event: insult | Subject: family | Source: ally_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    anger: base=32 × trig=1 × weight=0.6 → raw=19.20
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 19.20 × (1 + 0.053) = 20.22
    Final delta: 20.22 × 0.9 × 1.3 = 23.66
    disgust: base=36 × trig=1 × weight=0.2 → raw=7.20
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 7.20 × (1 + 0.000) = 7.20
    Final delta: 7.20 × 0.9 × 1.3 = 8.42
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.140) = 5.24
    Final delta: 5.24 × 0.9 × 1.3 = 6.14

  Stimulant: "The Prime sputters and fails to find words as Asher walks away, left speechless by his son's rejection"
    Event: failure | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.50 × (1 + 0.140) = 13.11
    Final delta: 13.11 × 1 × 1.1 = 14.42
    fear: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 9.30 × (1 + -0.460) = 5.02
    Final delta: 5.02 × 1 × 1.1 = 5.52
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 1 × 1.1 = 7.42

  Stimulant: "Renwick makes a veiled, suspicious comment about "a prime contribution" that alarms Arthur, but Renwick deflects before Arthur can press further"
    Event: danger_cue | Subject: stranger | Source: enemy_caused | Domain: safety
    Trigger: stakes=1 imm=2 cert=1 → total=4 → Medium (×0.6)
    Subject mult: stranger → ×0.3
    Source mult: enemy_caused → ×0.8
    fear: base=31 × trig=0.6 × weight=0.7 → raw=13.02
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 13.02 × (1 + -0.460) = 7.03
    Final delta: 7.03 × 0.3 × 0.8 = 1.69
    anticipation: base=31 × trig=0.6 × weight=0.2 → raw=3.72
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.72 × (1 + -0.187) = 3.03
    Final delta: 3.03 × 0.3 × 0.8 = 0.73
    anger: base=32 × trig=0.6 × weight=0.1 → raw=1.92
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 1.92 × (1 + 0.053) = 2.02
    Final delta: 2.02 × 0.3 × 0.8 = 0.49
  Ambient surprise: avg_trigger(0.90) × 15 = +13.5

  Emotion updates:
    sadness: carry(7.8 × 0.25) + delta(38.96) = 40.91
    anger: carry(10.0 × 0.25) + delta(39.45) = 41.95
    fear: carry(12.0 × 0.25) + delta(11.13) = 14.13
    disgust: carry(14.3 × 0.25) + delta(8.42) = 11.99
    surprise: carry(15.0 × 0.25) + delta(13.50) = 17.25
    anticipation: carry(10.0 × 0.25) + delta(0.73) = 3.23

=== Chapter 3 ===
Stimulants this chapter: 7

  Stimulant: "Arthur learns the previous Prime has died and he must immediately assume the title, receiving the news while children play nearby"
    Event: loss | Subject: authority | Source: world_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: world_caused → ×0.7
    sadness: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.10 × (1 + 0.140) = 18.35
    Final delta: 18.35 × 0.6 × 0.7 = 7.71
    fear: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 6.20 × (1 + -0.460) = 3.35
    Final delta: 3.35 × 0.6 × 0.7 = 1.41
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.053) = 3.37
    Final delta: 3.37 × 0.6 × 0.7 = 1.42

  Stimulant: "Arthur learns a mythical beast threatens Stormhaven and the only willing defender, Godric, has already gone to the surface to likely die"
    Event: threat | Subject: group | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    fear: base=31 × trig=1 × weight=0.7 → raw=21.70
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 21.70 × (1 + -0.460) = 11.72
    Final delta: 11.72 × 0.7 × 0.7 = 5.74
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.7 × 0.7 = 3.30
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.187) = 2.52
    Final delta: 2.52 × 0.7 × 0.7 = 1.24

  Stimulant: "Newly-made Prime Arthur is visibly shaken, sweating, bloodshot-eyed and terrified after learning the secrets shown only to the Prime Archon"
    Event: surprise_reveal | Subject: self | Source: authority_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    surprise: base=9 × trig=1 × weight=0.7 → raw=6.30
    Trait modifiers for surprise (total: -0.343):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(35/75 × -0.2) = -0.093 [Adaptable = recovers from surprise faster]
  impulsiveness(15/75 × 0.15) = +0.030 [Impulsive = reacts more to surprises]
    Modified delta: 6.30 × (1 + -0.343) = 4.14
    Final delta: 4.14 × 1 × 1 = 4.14
    fear: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 4.65 × (1 + -0.460) = 2.51
    Final delta: 2.51 × 1 × 1 = 2.51
    anticipation: base=31 × trig=1 × weight=0.15 → raw=4.65
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 4.65 × (1 + -0.187) = 3.78
    Final delta: 3.78 × 1 × 1 = 3.78

  Stimulant: "Arthur harshly tells young Asher to never call him "Father" in public again, squeezing his arm hard enough to hurt, terrified of public vulnerability"
    Event: constraint | Subject: family | Source: self_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    anger: base=32 × trig=1 × weight=0.5 → raw=16.00
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 16.00 × (1 + 0.053) = 16.85
    Final delta: 16.85 × 0.9 × 1.1 = 16.68
    fear: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 9.30 × (1 + -0.460) = 5.02
    Final delta: 5.02 × 0.9 × 1.1 = 4.97
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.140) = 5.24
    Final delta: 5.24 × 0.9 × 1.1 = 5.19

  Stimulant: "Young Asher calls Arthur a coward hiding underground while real heroes sacrifice themselves, directly challenging his honor"
    Event: insult | Subject: family | Source: ally_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    anger: base=32 × trig=1 × weight=0.6 → raw=19.20
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 19.20 × (1 + 0.053) = 20.22
    Final delta: 20.22 × 0.9 × 1.3 = 23.66
    disgust: base=36 × trig=1 × weight=0.2 → raw=7.20
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 7.20 × (1 + 0.000) = 7.20
    Final delta: 7.20 × 0.9 × 1.3 = 8.42
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.140) = 5.24
    Final delta: 5.24 × 0.9 × 1.3 = 6.14

  Stimulant: "Arthur slams the stone table so hard he leaves a permanent palm print, losing control of his enhanced strength in front of Asher"
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.50 × (1 + 0.140) = 13.11
    Final delta: 13.11 × 1 × 1.1 = 14.42
    fear: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 9.30 × (1 + -0.460) = 5.02
    Final delta: 5.02 × 1 × 1.1 = 5.52
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 1 × 1.1 = 7.42

  Stimulant: "Arthur forbids Asher from becoming a Hunter, declaring it too dangerous, but Asher reminds him the law prevents the Prime from blocking the test"
    Event: constraint | Subject: family | Source: ally_caused | Domain: autonomy
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    anger: base=32 × trig=0.85 × weight=0.5 → raw=13.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 13.60 × (1 + 0.053) = 14.33
    Final delta: 14.33 × 0.9 × 1.3 = 16.76
    fear: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 7.90 × (1 + -0.460) = 4.27
    Final delta: 4.27 × 0.9 × 1.3 = 4.99
    sadness: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.91 × (1 + 0.140) = 4.46
    Final delta: 4.46 × 0.9 × 1.3 = 5.22

  Suppression applied:
  Suppression: anger(111.2) suppresses joy by -34.62 (50% of anger delta)
  Suppression: anger(111.2) suppresses trust by -20.77 (30% of anger delta)
  Suppression: anger(111.2) suppresses fear by -10.39 (15% of anger delta)
  Suppression: sadness(79.6) suppresses joy by -23.20 (60% of sadness delta)
  Suppression: sadness(79.6) suppresses anticipation by -11.60 (30% of sadness delta)
  Suppression: sadness(79.6) suppresses surprise by -7.73 (20% of sadness delta)

  Emotion updates:
    sadness: carry(40.9 × 0.25) + delta(38.67) = 48.90
    anger: carry(42.0 × 0.25) + delta(69.24) = 79.73
    *** anger in RED ZONE: VU=79.7 (track capped at 75) ***
    fear: carry(14.1 × 0.25) + delta(14.76) = 18.30
    disgust: carry(12.0 × 0.25) + delta(8.42) = 11.42
    surprise: carry(17.3 × 0.25) + delta(-3.60) = 0.72
    anticipation: carry(3.2 × 0.25) + delta(-6.58) = -5.78

=== Chapter 4 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 5 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 6 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 7 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(48.9 × 0.25) + delta(0.00) = 12.22
    anger: carry(75.0 × 0.25) + delta(0.00) = 18.75
    fear: carry(18.3 × 0.25) + delta(0.00) = 4.57
    disgust: carry(11.4 × 0.25) + delta(0.00) = 2.86
    surprise: carry(0.7 × 0.25) + delta(0.00) = 0.18

=== Chapter 8 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 9 ===
Stimulants this chapter: 5

  Stimulant: "Godric storms into The Prime's office furious, screaming accusations about what Arthur is doing to people, physically confronting him"
    Event: threat | Subject: authority | Source: ally_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: ally_caused → ×1.3
    fear: base=31 × trig=1 × weight=0.7 → raw=21.70
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 21.70 × (1 + -0.460) = 11.72
    Final delta: 11.72 × 0.6 × 1.3 = 9.14
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.6 × 1.3 = 5.26
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.187) = 2.52
    Final delta: 2.52 × 0.6 × 1.3 = 1.97

  Stimulant: "After Godric leaves, The Prime mutters "blasted Hunters" with open disdain before catching himself, revealing a rare crack in his composure"
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.78 × (1 + 0.140) = 11.14
    Final delta: 11.14 × 1 × 1.1 = 12.26
    fear: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 7.90 × (1 + -0.460) = 4.27
    Final delta: 4.27 × 1 × 1.1 = 4.70
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.053) = 5.73
    Final delta: 5.73 × 1 × 1.1 = 6.30

  Stimulant: "Haldric unexpectedly asks "Are you okay?" after overhearing the confrontation, and The Prime is moved that someone cares about his wellbeing"
    Event: connection | Subject: stranger | Source: ally_caused | Domain: belonging
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: stranger → ×0.3
    Source mult: ally_caused → ×1.3
    trust: base=13 × trig=0.85 × weight=0.5 → raw=5.52
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 5.52 × (1 + -0.280) = 3.98
    Final delta: 3.98 × 0.3 × 1.3 = 1.55
    joy: base=9 × trig=0.85 × weight=0.3 → raw=2.29
    Trait modifiers for joy (total: -0.200):
  empathyBaseline(30/75 × 0.2) = +0.080 [Empathic joy — shares in others' happiness]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 2.29 × (1 + -0.200) = 1.84
    Final delta: 1.84 × 0.3 × 1.3 = 0.72
    anticipation: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 5.27 × (1 + -0.187) = 4.29
    Final delta: 4.29 × 0.3 × 1.3 = 1.67

  Stimulant: "The Prime admits that Haldric may be the first person to worry about his wellbeing since he became Prime, revealing deep loneliness"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.78 × (1 + 0.140) = 11.14
    Final delta: 11.14 × 1 × 1.1 = 12.26
    fear: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 7.90 × (1 + -0.460) = 4.27
    Final delta: 4.27 × 1 × 1.1 = 4.70
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.053) = 5.73
    Final delta: 5.73 × 1 × 1.1 = 6.30

  Stimulant: "The Prime apologizes to Haldric for Asher's betrayal during the test, admitting it was not supposed to happen that way"
    Event: moral_cue | Subject: family | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    disgust: base=36 × trig=0.85 × weight=0.4 → raw=12.24
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 12.24 × (1 + 0.000) = 12.24
    Final delta: 12.24 × 0.9 × 1.1 = 12.12
    anger: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 8.16 × (1 + 0.053) = 8.60
    Final delta: 8.60 × 0.9 × 1.1 = 8.51
    sadness: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.87 × (1 + 0.140) = 6.69
    Final delta: 6.69 × 0.9 × 1.1 = 6.62
  Ambient surprise: avg_trigger(0.88) × 15 = +13.2

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(0.72) = 0.72
    sadness: carry(12.2 × 0.25) + delta(31.13) = 34.19
    anger: carry(18.8 × 0.25) + delta(26.37) = 31.06
    fear: carry(4.6 × 0.25) + delta(18.53) = 19.67
    disgust: carry(2.9 × 0.25) + delta(12.12) = 12.83
    surprise: carry(0.2 × 0.25) + delta(13.20) = 13.24
    trust: carry(0.0 × 0.25) + delta(1.55) = 1.55
    anticipation: carry(0.0 × 0.25) + delta(3.64) = 3.64

=== Chapter 10 ===
Stimulants this chapter: 2

  Stimulant: "The Prime orchestrates the capture of rebel Bresdin by letting Haldric unknowingly serve as bait, then cuts off Bresdin's hand with a sword"
    Event: threat | Subject: authority | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: authority → ×0.6
    Source mult: enemy_caused → ×0.8
    fear: base=31 × trig=1 × weight=0.7 → raw=21.70
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 21.70 × (1 + -0.460) = 11.72
    Final delta: 11.72 × 0.6 × 0.8 = 5.62
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.6 × 0.8 = 3.24
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.187) = 2.52
    Final delta: 2.52 × 0.6 × 0.8 = 1.21

  Stimulant: "Arthur feels satisfaction watching Hunters admire Haldric, but also disgust, recognizing Haldric as the bridge Asher was supposed to be"
    Event: reminder_cue | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.78 × (1 + 0.140) = 11.14
    Final delta: 11.14 × 0.9 × 1.1 = 11.03
    fear: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 7.90 × (1 + -0.460) = 4.27
    Final delta: 4.27 × 0.9 × 1.1 = 4.23
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.053) = 5.73
    Final delta: 5.73 × 0.9 × 1.1 = 5.67
  Ambient surprise: avg_trigger(0.93) × 15 = +13.9

  Emotion updates:
    joy: carry(0.7 × 0.25) + delta(0.00) = 0.18
    sadness: carry(34.2 × 0.25) + delta(11.03) = 19.58
    anger: carry(31.1 × 0.25) + delta(8.91) = 16.67
    fear: carry(19.7 × 0.25) + delta(9.85) = 14.77
    disgust: carry(12.8 × 0.25) + delta(0.00) = 3.21
    surprise: carry(13.2 × 0.25) + delta(13.88) = 17.19
    trust: carry(1.6 × 0.25) + delta(0.00) = 0.39
    anticipation: carry(3.6 × 0.25) + delta(1.21) = 2.12

=== Chapter 11 ===
Stimulants this chapter: 3

  Stimulant: "The Prime reveals to Haldric that he doesn't know where he went wrong with Asher, admitting his son had everything and threw it away to be a Hunter"
    Event: loss | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.85 × weight=0.7 → raw=13.69
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.69 × (1 + 0.140) = 15.60
    Final delta: 15.60 × 0.9 × 1.1 = 15.44
    fear: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 5.27 × (1 + -0.460) = 2.85
    Final delta: 2.85 × 0.9 × 1.1 = 2.82
    anger: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 2.72 × (1 + 0.053) = 2.87
    Final delta: 2.87 × 0.9 × 1.1 = 2.84

  Stimulant: "The Prime tells Haldric "it should have been you" as a Hunter, implicitly acknowledging Asher's failure and his own parenting failure"
    Event: failure | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.78 × (1 + 0.140) = 11.14
    Final delta: 11.14 × 0.9 × 1.1 = 11.03
    fear: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 7.90 × (1 + -0.460) = 4.27
    Final delta: 4.27 × 0.9 × 1.1 = 4.23
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.053) = 5.73
    Final delta: 5.73 × 0.9 × 1.1 = 5.67

  Stimulant: "The Prime names Haldric as Heir Archon, publicly choosing someone else's child over his own son as his successor"
    Event: moral_cue | Subject: family | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    disgust: base=36 × trig=1 × weight=0.4 → raw=14.40
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 14.40 × (1 + 0.000) = 14.40
    Final delta: 14.40 × 0.9 × 1.1 = 14.26
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.053) = 10.11
    Final delta: 10.11 × 0.9 × 1.1 = 10.01
    sadness: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.90 × (1 + 0.140) = 7.87
    Final delta: 7.87 × 0.9 × 1.1 = 7.79
  Ambient surprise: avg_trigger(0.90) × 15 = +13.5
  Ambient anticipation: extreme event detected → +9.0

  Suppression applied:
  Suppression: sadness(53.8) suppresses joy by -20.56 (60% of sadness delta)
  Suppression: sadness(53.8) suppresses anticipation by -10.28 (30% of sadness delta)
  Suppression: sadness(53.8) suppresses surprise by -6.85 (20% of sadness delta)

  Emotion updates:
    sadness: carry(19.6 × 0.25) + delta(34.26) = 39.16
    anger: carry(16.7 × 0.25) + delta(18.52) = 22.69
    fear: carry(14.8 × 0.25) + delta(7.04) = 10.74
    disgust: carry(3.2 × 0.25) + delta(14.26) = 15.06
    surprise: carry(17.2 × 0.25) + delta(6.65) = 10.94
    anticipation: carry(2.1 × 0.25) + delta(-1.28) = -0.75

=== Chapter 12 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(39.2 × 0.25) + delta(0.00) = 9.79
    anger: carry(22.7 × 0.25) + delta(0.00) = 5.67
    fear: carry(10.7 × 0.25) + delta(0.00) = 2.68
    disgust: carry(15.1 × 0.25) + delta(0.00) = 3.76
    surprise: carry(10.9 × 0.25) + delta(0.00) = 2.74

=== Chapter 13 ===
Stimulants this chapter: 3

  Stimulant: "The Prime catches Haldric snooping in his office looking through classified documents, feeling deep disappointment at the betrayal of trust"
    Event: betrayal | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.4 → raw=9.20
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.20 × (1 + 0.140) = 10.49
    Final delta: 10.49 × 0.8 × 1.3 = 10.91
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.053) = 10.11
    Final delta: 10.11 × 0.8 × 1.3 = 10.52
    trust (COLLAPSE): base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 3.90 × (1 + -0.280) = 2.81
    Final delta: 2.81 × 0.8 × 1.3 = 2.92
    → Trust COLLAPSED by -2.92

  Stimulant: "The Prime tells Haldric "My fault for believing in you," expressing that even his chosen successor has turned against him"
    Event: rejection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.6 → raw=13.80
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.80 × (1 + 0.140) = 15.73
    Final delta: 15.73 × 0.8 × 1.3 = 16.36
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.8 × 1.3 = 7.01
    fear: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 6.20 × (1 + -0.460) = 3.35
    Final delta: 3.35 × 0.8 × 1.3 = 3.48

  Stimulant: "The Prime laments that the whole city blames him for everything and he thought Haldric would be different, revealing his isolation"
    Event: injustice | Subject: self | Source: world_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    anger: base=32 × trig=0.85 × weight=0.5 → raw=13.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 13.60 × (1 + 0.053) = 14.33
    Final delta: 14.33 × 1 × 0.7 = 10.03
    disgust: base=36 × trig=0.85 × weight=0.3 → raw=9.18
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 9.18 × (1 + 0.000) = 9.18
    Final delta: 9.18 × 1 × 0.7 = 6.43
    sadness: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.91 × (1 + 0.140) = 4.46
    Final delta: 4.46 × 1 × 0.7 = 3.12
  Ambient surprise: avg_trigger(0.95) × 15 = +14.3
  Ambient anticipation: extreme event detected → +9.5

  Emotion updates:
    sadness: carry(9.8 × 0.25) + delta(30.39) = 32.84
    anger: carry(5.7 × 0.25) + delta(27.56) = 28.97
    fear: carry(2.7 × 0.25) + delta(3.48) = 4.15
    disgust: carry(3.8 × 0.25) + delta(6.43) = 7.37
    surprise: carry(2.7 × 0.25) + delta(14.25) = 14.93
    anticipation: carry(0.0 × 0.25) + delta(9.50) = 9.50

=== Chapter 14 ===
Stimulants this chapter: 8

  Stimulant: "The Prime walks with heavy, exhausted strides when no one of importance is watching, revealing the burden of carrying the city alone"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.6 × weight=0.5 → raw=6.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.90 × (1 + 0.140) = 7.87
    Final delta: 7.87 × 1 × 1.1 = 8.65
    fear: base=31 × trig=0.6 × weight=0.3 → raw=5.58
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 5.58 × (1 + -0.460) = 3.01
    Final delta: 3.01 × 1 × 1.1 = 3.31
    anger: base=32 × trig=0.6 × weight=0.2 → raw=3.84
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.84 × (1 + 0.053) = 4.04
    Final delta: 4.04 × 1 × 1.1 = 4.45

  Stimulant: "The Prime flushes with rage when the Noble Quarter's original meaning is twisted by rumors into a sign of privilege and corruption"
    Event: injustice | Subject: self | Source: world_caused | Domain: status
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    anger: base=32 × trig=0.85 × weight=0.5 → raw=13.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 13.60 × (1 + 0.053) = 14.33
    Final delta: 14.33 × 1 × 0.7 = 10.03
    disgust: base=36 × trig=0.85 × weight=0.3 → raw=9.18
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 9.18 × (1 + 0.000) = 9.18
    Final delta: 9.18 × 1 × 0.7 = 6.43
    sadness: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.91 × (1 + 0.140) = 4.46
    Final delta: 4.46 × 1 × 0.7 = 3.12

  Stimulant: "The Prime reveals Ravour is dying and acclimation is getting harder each year, confessing the species faces extinction"
    Event: threat | Subject: group | Source: world_caused | Domain: future_security
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    fear: base=31 × trig=1 × weight=0.7 → raw=21.70
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 21.70 × (1 + -0.460) = 11.72
    Final delta: 11.72 × 0.7 × 0.7 = 5.74
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.7 × 0.7 = 3.30
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.187) = 2.52
    Final delta: 2.52 × 0.7 × 0.7 = 1.24

  Stimulant: "The Prime reveals the noble beasts have learned to reproduce, meaning ten have become eleven, an existential threat he cannot stop"
    Event: danger_cue | Subject: group | Source: world_caused | Domain: future_security
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    fear: base=31 × trig=1 × weight=0.7 → raw=21.70
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 21.70 × (1 + -0.460) = 11.72
    Final delta: 11.72 × 0.7 × 0.7 = 5.74
    anticipation: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 6.20 × (1 + -0.187) = 5.04
    Final delta: 5.04 × 0.7 × 0.7 = 2.47
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.053) = 3.37
    Final delta: 3.37 × 0.7 × 0.7 = 1.65

  Stimulant: "The Prime admits he has tried to form alliances with other cities to find the portals but they either don't believe him or suspect invasion"
    Event: failure | Subject: group | Source: world_caused | Domain: future_security
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: world_caused → ×0.7
    sadness: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.78 × (1 + 0.140) = 11.14
    Final delta: 11.14 × 0.7 × 0.7 = 5.46
    fear: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 7.90 × (1 + -0.460) = 4.27
    Final delta: 4.27 × 0.7 × 0.7 = 2.09
    anger: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.44 × (1 + 0.053) = 5.73
    Final delta: 5.73 × 0.7 × 0.7 = 2.81

  Stimulant: "The Prime confronts the white-haired phantom girl, telling her he will never forgive her and that they are not allies"
    Event: moral_cue | Subject: stranger | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: stranger → ×0.3
    Source mult: self_caused → ×1.1
    disgust: base=36 × trig=0.6 × weight=0.4 → raw=8.64
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 8.64 × (1 + 0.000) = 8.64
    Final delta: 8.64 × 0.3 × 1.1 = 2.85
    anger: base=32 × trig=0.6 × weight=0.3 → raw=5.76
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 5.76 × (1 + 0.053) = 6.07
    Final delta: 6.07 × 0.3 × 1.1 = 2.00
    sadness: base=23 × trig=0.6 × weight=0.3 → raw=4.14
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.14 × (1 + 0.140) = 4.72
    Final delta: 4.72 × 0.3 × 1.1 = 1.56

  Stimulant: "The phantom girl accuses The Prime of lying by omission to Haldric, cutting through his justifications"
    Event: insult | Subject: self | Source: enemy_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=32 × trig=0.85 × weight=0.6 → raw=16.32
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 16.32 × (1 + 0.053) = 17.19
    Final delta: 17.19 × 1 × 0.8 = 13.75
    disgust: base=36 × trig=0.85 × weight=0.2 → raw=6.12
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 6.12 × (1 + 0.000) = 6.12
    Final delta: 6.12 × 1 × 0.8 = 4.90
    sadness: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.91 × (1 + 0.140) = 4.46
    Final delta: 4.46 × 1 × 0.8 = 3.57

  Stimulant: "The Prime confesses "The world needs you, Haldric. It needs a kind heart. I will not suffice," admitting his own moral insufficiency"
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=36 × trig=0.85 × weight=0.4 → raw=12.24
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 12.24 × (1 + 0.000) = 12.24
    Final delta: 12.24 × 1 × 1.1 = 13.46
    anger: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 8.16 × (1 + 0.053) = 8.60
    Final delta: 8.60 × 1 × 1.1 = 9.45
    sadness: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.87 × (1 + 0.140) = 6.69
    Final delta: 6.69 × 1 × 1.1 = 7.35
  Ambient surprise: avg_trigger(0.82) × 15 = +12.4

  Suppression applied:
  Suppression: anger(76.4) suppresses joy by -23.72 (50% of anger delta)
  Suppression: anger(76.4) suppresses trust by -14.23 (30% of anger delta)
  Suppression: anger(76.4) suppresses fear by -7.12 (15% of anger delta)
  Suppression: sadness(62.5) suppresses joy by -17.83 (60% of sadness delta)
  Suppression: sadness(62.5) suppresses anticipation by -8.91 (30% of sadness delta)
  Suppression: sadness(62.5) suppresses surprise by -5.94 (20% of sadness delta)

  Emotion updates:
    sadness: carry(32.8 × 0.25) + delta(29.71) = 37.92
    anger: carry(29.0 × 0.25) + delta(47.45) = 54.69
    fear: carry(4.2 × 0.25) + delta(9.77) = 10.81
    disgust: carry(7.4 × 0.25) + delta(27.64) = 29.48
    surprise: carry(14.9 × 0.25) + delta(6.43) = 10.17
    anticipation: carry(9.5 × 0.25) + delta(-5.21) = -2.83

=== Chapter 15 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(37.9 × 0.25) + delta(0.00) = 9.48
    anger: carry(54.7 × 0.25) + delta(0.00) = 13.67
    fear: carry(10.8 × 0.25) + delta(0.00) = 2.70
    disgust: carry(29.5 × 0.25) + delta(0.00) = 7.37
    surprise: carry(10.2 × 0.25) + delta(0.00) = 2.54

=== Chapter 16 ===
Stimulants this chapter: 3

  Stimulant: "The Prime kills the sadistic scientist who was torturing Praew, stabbing a sword through his throat with visible disgust"
    Event: moral_cue | Subject: stranger | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: self_caused → ×1.1
    disgust: base=36 × trig=1 × weight=0.4 → raw=14.40
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 14.40 × (1 + 0.000) = 14.40
    Final delta: 14.40 × 0.3 × 1.1 = 4.75
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.053) = 10.11
    Final delta: 10.11 × 0.3 × 1.1 = 3.34
    sadness: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.90 × (1 + 0.140) = 7.87
    Final delta: 7.87 × 0.3 × 1.1 = 2.60

  Stimulant: "The Prime's hands tremble with awe as he sees the Mythical BoltStone successfully embed into Praew, whispering "Finally, after fourteen years""
    Event: success | Subject: group | Source: self_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    joy: base=9 × trig=1 × weight=0.7 → raw=6.30
    Trait modifiers for joy (total: -0.200):
  empathyBaseline(30/75 × 0.2) = +0.080 [Empathic joy — shares in others' happiness]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 6.30 × (1 + -0.200) = 5.04
    Final delta: 5.04 × 0.7 × 1.1 = 3.88
    trust: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 2.60 × (1 + -0.280) = 1.87
    Final delta: 1.87 × 0.7 × 1.1 = 1.44
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.187) = 2.52
    Final delta: 2.52 × 0.7 × 1.1 = 1.94

  Stimulant: "Praew begs The Prime not to use the recorrection program on her, asking "Why must everything be decided for me?" as he overrides her will"
    Event: moral_cue | Subject: stranger | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: self_caused → ×1.1
    disgust: base=36 × trig=1 × weight=0.4 → raw=14.40
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 14.40 × (1 + 0.000) = 14.40
    Final delta: 14.40 × 0.3 × 1.1 = 4.75
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.053) = 10.11
    Final delta: 10.11 × 0.3 × 1.1 = 3.34
    sadness: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.90 × (1 + 0.140) = 7.87
    Final delta: 7.87 × 0.3 × 1.1 = 2.60
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0
  Ambient fear: extreme event detected → +12.0

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(3.88) = 3.88
    sadness: carry(9.5 × 0.25) + delta(5.19) = 7.56
    anger: carry(13.7 × 0.25) + delta(6.67) = 10.09
    fear: carry(2.7 × 0.25) + delta(12.00) = 12.68
    disgust: carry(7.4 × 0.25) + delta(9.50) = 11.35
    surprise: carry(2.5 × 0.25) + delta(15.00) = 15.64
    trust: carry(0.0 × 0.25) + delta(1.44) = 1.44
    anticipation: carry(0.0 × 0.25) + delta(1.94) = 1.94

=== Chapter 17 ===
Stimulants this chapter: 3

  Stimulant: "Renwick draws a sword on The Prime after witnessing the embedding, but The Prime uses a voice command to force Renwick to stand down and obey"
    Event: threat | Subject: stranger | Source: enemy_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: enemy_caused → ×0.8
    fear: base=31 × trig=1 × weight=0.7 → raw=21.70
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 21.70 × (1 + -0.460) = 11.72
    Final delta: 11.72 × 0.3 × 0.8 = 2.81
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.3 × 0.8 = 1.62
    anticipation: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 3.10 × (1 + -0.187) = 2.52
    Final delta: 2.52 × 0.3 × 0.8 = 0.61

  Stimulant: "The Prime warns that Renwick has "doomed us all" by threatening him instead of supporting the embedding that could save the species"
    Event: danger_cue | Subject: group | Source: ally_caused | Domain: future_security
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: ally_caused → ×1.3
    fear: base=31 × trig=0.85 × weight=0.7 → raw=18.44
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 18.44 × (1 + -0.460) = 9.96
    Final delta: 9.96 × 0.7 × 1.3 = 9.06
    anticipation: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 5.27 × (1 + -0.187) = 4.29
    Final delta: 4.29 × 0.7 × 1.3 = 3.90
    anger: base=32 × trig=0.85 × weight=0.1 → raw=2.72
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 2.72 × (1 + 0.053) = 2.87
    Final delta: 2.87 × 0.7 × 1.3 = 2.61

  Stimulant: "Haldric releases every prisoner in the city jail as a distraction, causing chaos, murder, and destruction throughout Stormhaven"
    Event: betrayal | Subject: friend | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.4 → raw=9.20
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.20 × (1 + 0.140) = 10.49
    Final delta: 10.49 × 0.8 × 1.3 = 10.91
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.053) = 10.11
    Final delta: 10.11 × 0.8 × 1.3 = 10.52
    trust (COLLAPSE): base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 3.90 × (1 + -0.280) = 2.81
    Final delta: 2.81 × 0.8 × 1.3 = 2.92
    → Trust COLLAPSED by -2.92
  Ambient surprise: avg_trigger(0.95) × 15 = +14.3

  Emotion updates:
    joy: carry(3.9 × 0.25) + delta(0.00) = 0.97
    sadness: carry(7.6 × 0.25) + delta(10.91) = 12.80
    anger: carry(10.1 × 0.25) + delta(14.74) = 17.26
    fear: carry(12.7 × 0.25) + delta(11.88) = 15.05
    disgust: carry(11.3 × 0.25) + delta(0.00) = 2.84
    surprise: carry(15.6 × 0.25) + delta(14.25) = 18.16
    trust: carry(1.4 × 0.25) + delta(-2.92) = -2.56
    anticipation: carry(1.9 × 0.25) + delta(4.51) = 4.99

=== Chapter 18 ===
Stimulants this chapter: 7

  Stimulant: "Godric ties up The Prime and rescues Praew, calling it a crime punishable by death while The Prime is helpless on the floor"
    Event: humiliation | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.4 → raw=9.20
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.20 × (1 + 0.140) = 10.49
    Final delta: 10.49 × 1 × 1.3 = 13.63
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.053) = 10.11
    Final delta: 10.11 × 1 × 1.3 = 13.15
    disgust: base=36 × trig=1 × weight=0.3 → raw=10.80
    Trait modifiers for disgust (total: 0.000):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(70/75 × 0.3) = +0.280 [Rigid morals = stronger moral disgust]
    Modified delta: 10.80 × (1 + 0.000) = 10.80
    Final delta: 10.80 × 1 × 1.3 = 14.04

  Stimulant: "The Prime screams at Godric to bring Praew back, threatening to hunt him to the ends of the world, losing all composure"
    Event: loss | Subject: group | Source: ally_caused | Domain: future_security
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.10 × (1 + 0.140) = 18.35
    Final delta: 18.35 × 0.7 × 1.3 = 16.70
    fear: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 6.20 × (1 + -0.460) = 3.35
    Final delta: 3.35 × 0.7 × 1.3 = 3.05
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.053) = 3.37
    Final delta: 3.37 × 0.7 × 1.3 = 3.07

  Stimulant: "Godric says "Goodbye, brother" as he takes Praew away, severing his familial bond with Arthur permanently"
    Event: separation | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.6 → raw=13.80
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.80 × (1 + 0.140) = 15.73
    Final delta: 15.73 × 0.9 × 1.3 = 18.41
    fear: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 6.20 × (1 + -0.460) = 3.35
    Final delta: 3.35 × 0.9 × 1.3 = 3.92
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.9 × 1.3 = 7.89

  Stimulant: "The Prime beats Haldric viciously, kicking him repeatedly on the floor, screaming "You doomed us all" and "Why must you ruin everything?""
    Event: harm | Subject: friend | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    fear: base=31 × trig=1 × weight=0.5 → raw=15.50
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 15.50 × (1 + -0.460) = 8.37
    Final delta: 8.37 × 0.8 × 1.1 = 7.37
    anger: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 9.60 × (1 + 0.053) = 10.11
    Final delta: 10.11 × 0.8 × 1.1 = 8.90
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.140) = 5.24
    Final delta: 5.24 × 0.8 × 1.1 = 4.61

  Stimulant: "The Prime learns that Haldric freed Bresdin, his most dangerous enemy, causing Arthur visible fear for the first time"
    Event: danger_cue | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    fear: base=31 × trig=1 × weight=0.7 → raw=21.70
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 21.70 × (1 + -0.460) = 11.72
    Final delta: 11.72 × 1 × 1.3 = 15.23
    anticipation: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anticipation (total: -0.187):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(35/75 × 0.2) = +0.093 [Curious = heightened anticipation for new info]
    Modified delta: 6.20 × (1 + -0.187) = 5.04
    Final delta: 5.04 × 1 × 1.3 = 6.56
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.053) = 3.37
    Final delta: 3.37 × 1 × 1.3 = 4.38

  Stimulant: "Haldric calls out "Father, please!" to stop The Prime from kicking him, and Arthur freezes, momentarily confronted with the parental bond he craves"
    Event: reminder_cue | Subject: family | Source: ally_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.50 × (1 + 0.140) = 13.11
    Final delta: 13.11 × 0.9 × 1.3 = 15.34
    fear: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 9.30 × (1 + -0.460) = 5.02
    Final delta: 5.02 × 0.9 × 1.3 = 5.88
    anger: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 6.40 × (1 + 0.053) = 6.74
    Final delta: 6.74 × 0.9 × 1.3 = 7.89

  Stimulant: "The Prime must imprison his own brother Godric as a result of the night's events, losing his last remaining familial ally"
    Event: loss | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for sadness (total: +0.140):
  empathyBaseline(30/75 × 0.4) = +0.160 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(30/75 × 0.3) = +0.120 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(35/75 × 0.3) = +0.140 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.10 × (1 + 0.140) = 18.35
    Final delta: 18.35 × 0.9 × 1.1 = 18.17
    fear: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for fear (total: -0.460):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(45/75 × -0.3) = -0.180 [High risk appetite = fear hits less hard]
    Modified delta: 6.20 × (1 + -0.460) = 3.35
    Final delta: 3.35 × 0.9 × 1.1 = 3.31
    anger: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anger (total: +0.053):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(35/75 × 0.3) = +0.140 [Confrontational = anger rises faster in conflict]
  prideSensitivity(60/75 × 0.2) = +0.160 [Sensitive pride = anger when status/competence challenged]
  patience(65/75 × -0.2) = -0.173 [Patient = slower to anger]
  impulsiveness(15/75 × 0.1) = +0.020 [Impulsive = anger flares quickly]
  moralRigidity(70/75 × 0.2) = +0.187 [Rigid morals = anger at injustice]
    Modified delta: 3.20 × (1 + 0.053) = 3.37
    Final delta: 3.37 × 0.9 × 1.1 = 3.34
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0

  Suppression applied:
  Suppression: anger(65.9) suppresses joy by -24.30 (50% of anger delta)
  Suppression: anger(65.9) suppresses trust by -14.58 (30% of anger delta)
  Suppression: anger(65.9) suppresses fear by -7.29 (15% of anger delta)
  Suppression: sadness(99.7) suppresses joy by -52.12 (60% of sadness delta)
  Suppression: sadness(99.7) suppresses anticipation by -26.06 (30% of sadness delta)
  Suppression: sadness(99.7) suppresses surprise by -17.37 (20% of sadness delta)

  Emotion updates:
    joy: carry(1.0 × 0.25) + delta(-76.42) = -76.18
    sadness: carry(12.8 × 0.25) + delta(86.87) = 90.07
    *** sadness in RED ZONE: VU=90.1 (track capped at 75) ***
    anger: carry(17.3 × 0.25) + delta(48.61) = 52.92
    fear: carry(15.0 × 0.25) + delta(31.46) = 35.22
    disgust: carry(2.8 × 0.25) + delta(14.04) = 14.75
    surprise: carry(18.2 × 0.25) + delta(-2.37) = 2.17
    anticipation: carry(5.0 × 0.25) + delta(-19.50) = -18.26
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
 0 |      0 |     59 |     69 |      5 |     10 |      0 |      0 |      0
 1 |      0 |     59 |     69 |      5 |     10 |      0 |      0 |      0
 2 |      0 |     59 |     69 |      5 |     10 |      0 |      0 |      0
 3 |      0 |     15 |     17 |      1 |      3 |      0 |      0 |      0
 4 |      0 |     13 |     26 |      0 |      9 |      9 |      0 |      0
 5 |      0 |     13 |     26 |      0 |      9 |      9 |      0 |      0
 6 |      0 |      3 |      6 |      1 |      2 |      7 |      0 |      2
 7 |      0 |      3 |      6 |      1 |      2 |      7 |      0 |      2
 8 |      0 |     16 |     13 |      3 |      5 |     11 |      0 |      2
 9 |      0 |     21 |     28 |      3 |      6 |     14 |      0 |      3
10 |      0 |     21 |     28 |      3 |      6 |     14 |      0 |      3
11 |      0 |     21 |     28 |      3 |      6 |     14 |      0 |      3
12 |      0 |     21 |     28 |      3 |      6 |     14 |      0 |      3
13 |      0 |    75! |     68 |      0 |      8 |      3 |      0 |      0
14 |      0 |     75 |     68 |      0 |      8 |      3 |      0 |      0
15 |      0 |     22 |     22 |      1 |      2 |      9 |      0 |      0
16 |      0 |      5 |     15 |      7 |      1 |      4 |      0 |      4
17 |      0 |     31 |     28 |      3 |      6 |     16 |      0 |     11
18 |      0 |    75! |     75 |      8 |     15 |      0 |      0 |      0
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
    fear: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 9.10 × (1 + -0.560) = 4.00
    Final delta: 4.00 × 1 × 0.7 = 2.80
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + -0.213) = 2.83
    Final delta: 2.83 × 1 × 0.7 = 1.98
    anger: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.10 × (1 + 0.147) = 3.55
    Final delta: 3.55 × 1 × 0.7 = 2.49

  Stimulant: "Godric suppresses his fear before the battle, forcing himself to abandon the instinct that would not help when retreat is impossible"
    Event: threat | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 9.10 × (1 + -0.560) = 4.00
    Final delta: 4.00 × 1 × 1.1 = 4.40
    anger: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.20 × (1 + 0.147) = 7.11
    Final delta: 7.11 × 1 × 1.1 = 7.82
    anticipation: base=18 × trig=1 × weight=0.1 → raw=1.80
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.80 × (1 + -0.213) = 1.42
    Final delta: 1.42 × 1 × 1.1 = 1.56

  Stimulant: "Boltrax strikes Godric with bone-crushing force, sending him flying into the gates and leaving him unable to reach his dropped spear"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 6.50 × (1 + -0.560) = 2.86
    Final delta: 2.86 × 1 × 0.8 = 2.29
    anger: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 9.30 × (1 + 0.147) = 10.66
    Final delta: 10.66 × 1 × 0.8 = 8.53
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.387) = 6.38
    Final delta: 6.38 × 1 × 0.8 = 5.10

  Stimulant: "Godric drops his spear during combat and berates himself for the rookie mistake, believing he will not survive"
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.50 × (1 + 0.387) = 15.95
    Final delta: 15.95 × 1 × 1.1 = 17.54
    fear: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.90 × (1 + -0.560) = 1.72
    Final delta: 1.72 × 1 × 1.1 = 1.89
    anger: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.20 × (1 + 0.147) = 7.11
    Final delta: 7.11 × 1 × 1.1 = 7.82

  Stimulant: "An eight-year-old boy (Srevlis) walks calmly toward the mythical beast, ignoring Godric's desperate orders to get back inside"
    Event: surprise_reveal | Subject: stranger | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: stranger → ×0.3
    Source mult: world_caused → ×0.7
    surprise: base=9 × trig=1 × weight=0.7 → raw=6.30
    Trait modifiers for surprise (total: -0.337):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(40/75 × -0.2) = -0.107 [Adaptable = recovers from surprise faster]
  impulsiveness(25/75 × 0.15) = +0.050 [Impulsive = reacts more to surprises]
    Modified delta: 6.30 × (1 + -0.337) = 4.18
    Final delta: 4.18 × 0.3 × 0.7 = 0.88
    fear: base=13 × trig=1 × weight=0.15 → raw=1.95
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.95 × (1 + -0.560) = 0.86
    Final delta: 0.86 × 0.3 × 0.7 = 0.18
    anticipation: base=18 × trig=1 × weight=0.15 → raw=2.70
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 2.70 × (1 + -0.213) = 2.12
    Final delta: 2.12 × 0.3 × 0.7 = 0.45

  Stimulant: "Godric watches in awe as Srevlis fights with impossible mastery, wielding the spear as if born to it, surpassing anything Godric has ever seen"
    Event: surprise_reveal | Subject: stranger | Source: world_caused | Domain: competence
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: stranger → ×0.3
    Source mult: world_caused → ×0.7
    surprise: base=9 × trig=0.85 × weight=0.7 → raw=5.35
    Trait modifiers for surprise (total: -0.337):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(40/75 × -0.2) = -0.107 [Adaptable = recovers from surprise faster]
  impulsiveness(25/75 × 0.15) = +0.050 [Impulsive = reacts more to surprises]
    Modified delta: 5.35 × (1 + -0.337) = 3.55
    Final delta: 3.55 × 0.3 × 0.7 = 0.75
    fear: base=13 × trig=0.85 × weight=0.15 → raw=1.66
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.66 × (1 + -0.560) = 0.73
    Final delta: 0.73 × 0.3 × 0.7 = 0.15
    anticipation: base=18 × trig=0.85 × weight=0.15 → raw=2.29
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 2.29 × (1 + -0.213) = 1.81
    Final delta: 1.81 × 0.3 × 0.7 = 0.38

  Stimulant: "Guards drag Godric inside and slam the gates shut against his will, cutting him off from the fight and the boy"
    Event: constraint | Subject: self | Source: ally_caused | Domain: autonomy
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=31 × trig=1 × weight=0.5 → raw=15.50
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 15.50 × (1 + 0.147) = 17.77
    Final delta: 17.77 × 1 × 1.3 = 23.11
    fear: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.90 × (1 + -0.560) = 1.72
    Final delta: 1.72 × 1 × 1.3 = 2.23
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.387) = 6.38
    Final delta: 6.38 × 1 × 1.3 = 8.29

  Stimulant: "Srevlis rejects Godric's offer of a home in Stormhaven and says "Do you think you're the only victim?" before disappearing into the storm"
    Event: rejection | Subject: stranger | Source: world_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: stranger → ×0.3
    Source mult: world_caused → ×0.7
    sadness: base=23 × trig=0.85 × weight=0.6 → raw=11.73
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.73 × (1 + 0.387) = 16.27
    Final delta: 16.27 × 0.3 × 0.7 = 3.42
    anger: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.27 × (1 + 0.147) = 6.04
    Final delta: 6.04 × 0.3 × 0.7 = 1.27
    fear: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.21 × (1 + -0.560) = 0.97
    Final delta: 0.97 × 0.3 × 0.7 = 0.20

  Stimulant: "Godric is left humiliated by the realization that a wild-born eight-year-old did what he, a veteran Hunter, could not"
    Event: humiliation | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.85 × weight=0.4 → raw=7.82
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 7.82 × (1 + 0.387) = 10.84
    Final delta: 10.84 × 1 × 1.1 = 11.93
    anger: base=31 × trig=0.85 × weight=0.3 → raw=7.90
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 7.90 × (1 + 0.147) = 9.06
    Final delta: 9.06 × 1 × 1.1 = 9.97
    disgust: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 6.88 × (1 + -0.060) = 6.47
    Final delta: 6.47 × 1 × 1.1 = 7.12

  Stimulant: "Srevlis's words "Do you think you're the only victim?" gnaw at Godric, carving a permanent place in his mind and reminding him of his failure"
    Event: reminder_cue | Subject: self | Source: world_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    sadness: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.78 × (1 + 0.387) = 13.55
    Final delta: 13.55 × 1 × 0.7 = 9.49
    fear: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.31 × (1 + -0.560) = 1.46
    Final delta: 1.46 × 1 × 0.7 = 1.02
    anger: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.27 × (1 + 0.147) = 6.04
    Final delta: 6.04 × 1 × 0.7 = 4.23

  Stimulant: "Godric finds renewed purpose from the encounter with Srevlis, recommitting to fight and protect others"
    Event: moral_cue | Subject: principle | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: principle → ×0.5
    Source mult: self_caused → ×1.1
    disgust: base=27 × trig=0.6 × weight=0.4 → raw=6.48
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 6.48 × (1 + -0.060) = 6.09
    Final delta: 6.09 × 0.5 × 1.1 = 3.35
    anger: base=31 × trig=0.6 × weight=0.3 → raw=5.58
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.58 × (1 + 0.147) = 6.40
    Final delta: 6.40 × 0.5 × 1.1 = 3.52
    sadness: base=23 × trig=0.6 × weight=0.3 → raw=4.14
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.14 × (1 + 0.387) = 5.74
    Final delta: 5.74 × 0.5 × 1.1 = 3.16

  Suppression applied:
  Suppression: anger(68.8) suppresses joy by -34.38 (50% of anger delta)
  Suppression: anger(68.8) suppresses trust by -20.63 (30% of anger delta)
  Suppression: anger(68.8) suppresses fear by -10.31 (15% of anger delta)
  Suppression: sadness(58.9) suppresses joy by -35.36 (60% of sadness delta)
  Suppression: sadness(58.9) suppresses anticipation by -17.68 (30% of sadness delta)
  Suppression: sadness(58.9) suppresses surprise by -11.79 (20% of sadness delta)

  Emotion updates:
    sadness: carry(0.0 × 0.25) + delta(58.93) = 58.93
    anger: carry(0.0 × 0.25) + delta(68.75) = 68.75
    fear: carry(0.0 × 0.25) + delta(4.86) = 4.86
    disgust: carry(0.0 × 0.25) + delta(10.47) = 10.47
    surprise: carry(0.0 × 0.25) + delta(-10.16) = -10.16
    anticipation: carry(0.0 × 0.25) + delta(-13.31) = -13.31

=== Chapter 1 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 2 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 3 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(58.9 × 0.25) + delta(0.00) = 14.73
    anger: carry(68.8 × 0.25) + delta(0.00) = 17.19
    fear: carry(4.9 × 0.25) + delta(0.00) = 1.21
    disgust: carry(10.5 × 0.25) + delta(0.00) = 2.62

=== Chapter 4 ===
Stimulants this chapter: 2

  Stimulant: "Praew accidentally calls him "Stone Face" out loud in front of the whole class, prompting him to adopt the nickname as his title"
    Event: insult | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=0 imm=2 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=31 × trig=0.6 × weight=0.6 → raw=11.16
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 11.16 × (1 + 0.147) = 12.80
    Final delta: 12.80 × 1 × 1.3 = 16.64
    disgust: base=27 × trig=0.6 × weight=0.2 → raw=3.24
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 3.24 × (1 + -0.060) = 3.05
    Final delta: 3.05 × 1 × 1.3 = 3.96
    sadness: base=23 × trig=0.6 × weight=0.2 → raw=2.76
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.76 × (1 + 0.387) = 3.83
    Final delta: 3.83 × 1 × 1.3 = 4.98

  Stimulant: "Godric confronts the recruits about their failure at the Hunter test and tells them to get over it, channeling his own understanding of purpose and second chances"
    Event: moral_cue | Subject: group | Source: self_caused | Domain: morality
    Trigger: stakes=1 imm=1 cert=2 → total=4 → Medium (×0.6)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    disgust: base=27 × trig=0.6 × weight=0.4 → raw=6.48
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 6.48 × (1 + -0.060) = 6.09
    Final delta: 6.09 × 0.7 × 1.1 = 4.69
    anger: base=31 × trig=0.6 × weight=0.3 → raw=5.58
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.58 × (1 + 0.147) = 6.40
    Final delta: 6.40 × 0.7 × 1.1 = 4.93
    sadness: base=23 × trig=0.6 × weight=0.3 → raw=4.14
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.14 × (1 + 0.387) = 5.74
    Final delta: 5.74 × 0.7 × 1.1 = 4.42
  Ambient surprise: avg_trigger(0.60) × 15 = +9.0

  Emotion updates:
    sadness: carry(14.7 × 0.25) + delta(9.40) = 13.08
    anger: carry(17.2 × 0.25) + delta(21.56) = 25.86
    fear: carry(1.2 × 0.25) + delta(0.00) = 0.30
    disgust: carry(2.6 × 0.25) + delta(8.65) = 9.30
    surprise: carry(0.0 × 0.25) + delta(9.00) = 9.00

=== Chapter 5 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 6 ===
Stimulants this chapter: 1

  Stimulant: "Mai reveals to the students that their instructor "Stone Face" is actually Silverwing Godric, the Mythical Beast Hunter, against his wishes"
    Event: surprise_reveal | Subject: self | Source: ally_caused | Domain: autonomy
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    surprise: base=9 × trig=0.85 × weight=0.7 → raw=5.35
    Trait modifiers for surprise (total: -0.337):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(40/75 × -0.2) = -0.107 [Adaptable = recovers from surprise faster]
  impulsiveness(25/75 × 0.15) = +0.050 [Impulsive = reacts more to surprises]
    Modified delta: 5.35 × (1 + -0.337) = 3.55
    Final delta: 3.55 × 1 × 1.3 = 4.62
    fear: base=13 × trig=0.85 × weight=0.15 → raw=1.66
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.66 × (1 + -0.560) = 0.73
    Final delta: 0.73 × 1 × 1.3 = 0.95
    anticipation: base=18 × trig=0.85 × weight=0.15 → raw=2.29
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 2.29 × (1 + -0.213) = 1.81
    Final delta: 1.81 × 1 × 1.3 = 2.35

  Emotion updates:
    sadness: carry(13.1 × 0.25) + delta(0.00) = 3.27
    anger: carry(25.9 × 0.25) + delta(0.00) = 6.46
    fear: carry(0.3 × 0.25) + delta(0.95) = 1.02
    disgust: carry(9.3 × 0.25) + delta(0.00) = 2.33
    surprise: carry(9.0 × 0.25) + delta(4.62) = 6.87
    anticipation: carry(0.0 × 0.25) + delta(2.35) = 2.35

=== Chapter 7 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 8 ===
Stimulants this chapter: 3

  Stimulant: "Godric reveals his three territory marks (Boltrax wing, Tarnox horns, bite mark) to the class, exposing his deeply personal battle scars"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.6 × weight=0.5 → raw=6.90
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.90 × (1 + 0.387) = 9.57
    Final delta: 9.57 × 1 × 1.1 = 10.52
    fear: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.34 × (1 + -0.560) = 1.03
    Final delta: 1.03 × 1 × 1.1 = 1.13
    anger: base=31 × trig=0.6 × weight=0.2 → raw=3.72
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.72 × (1 + 0.147) = 4.27
    Final delta: 4.27 × 1 × 1.1 = 4.69

  Stimulant: "Students look at Godric with hero worship after seeing his marks, and he snaps at them that there is no glory in death"
    Event: moral_cue | Subject: group | Source: self_caused | Domain: morality
    Trigger: stakes=1 imm=1 cert=2 → total=4 → Medium (×0.6)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    disgust: base=27 × trig=0.6 × weight=0.4 → raw=6.48
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 6.48 × (1 + -0.060) = 6.09
    Final delta: 6.09 × 0.7 × 1.1 = 4.69
    anger: base=31 × trig=0.6 × weight=0.3 → raw=5.58
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.58 × (1 + 0.147) = 6.40
    Final delta: 6.40 × 0.7 × 1.1 = 4.93
    sadness: base=23 × trig=0.6 × weight=0.3 → raw=4.14
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.14 × (1 + 0.387) = 5.74
    Final delta: 5.74 × 0.7 × 1.1 = 4.42

  Stimulant: "Godric overhears Praew and Wannii arguing about the investigation near a government facility and warns them with a veiled threat about letting stones slip"
    Event: danger_cue | Subject: group | Source: self_caused | Domain: safety
    Trigger: stakes=2 imm=1 cert=1 → total=4 → Medium (×0.6)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    fear: base=13 × trig=0.6 × weight=0.7 → raw=5.46
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 5.46 × (1 + -0.560) = 2.40
    Final delta: 2.40 × 0.7 × 1.1 = 1.85
    anticipation: base=18 × trig=0.6 × weight=0.2 → raw=2.16
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 2.16 × (1 + -0.213) = 1.70
    Final delta: 1.70 × 0.7 × 1.1 = 1.31
    anger: base=31 × trig=0.6 × weight=0.1 → raw=1.86
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 1.86 × (1 + 0.147) = 2.13
    Final delta: 2.13 × 0.7 × 1.1 = 1.64
  Ambient surprise: avg_trigger(0.60) × 15 = +9.0

  Emotion updates:
    sadness: carry(3.3 × 0.25) + delta(14.95) = 15.76
    anger: carry(6.5 × 0.25) + delta(11.26) = 12.88
    fear: carry(1.0 × 0.25) + delta(2.98) = 3.24
    disgust: carry(2.3 × 0.25) + delta(4.69) = 5.27
    surprise: carry(6.9 × 0.25) + delta(9.00) = 10.72
    anticipation: carry(2.3 × 0.25) + delta(1.31) = 1.90

=== Chapter 9 ===
Stimulants this chapter: 3

  Stimulant: "Godric is unusually agitated and grouchy in class, stomping and slamming his fist on the desk, hinting at internal turmoil after his confrontation with The Prime"
    Event: obstacle | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=1 cert=2 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=31 × trig=0.6 × weight=0.4 → raw=7.44
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 7.44 × (1 + 0.147) = 8.53
    Final delta: 8.53 × 1 × 1 = 8.53
    anticipation: base=18 × trig=0.6 × weight=0.3 → raw=3.24
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 3.24 × (1 + -0.213) = 2.55
    Final delta: 2.55 × 1 × 1 = 2.55
    fear: base=13 × trig=0.6 × weight=0.3 → raw=2.34
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.34 × (1 + -0.560) = 1.03
    Final delta: 1.03 × 1 × 1 = 1.03

  Stimulant: "Godric confronts The Prime Archon in a furious argument, shouting about what The Prime is "doing to them" and threatening him"
    Event: injustice | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    anger: base=31 × trig=0.85 × weight=0.5 → raw=13.17
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 13.17 × (1 + 0.147) = 15.11
    Final delta: 15.11 × 0.7 × 1 = 10.58
    disgust: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 6.88 × (1 + -0.060) = 6.47
    Final delta: 6.47 × 0.7 × 1 = 4.53
    sadness: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 3.91 × (1 + 0.387) = 5.42
    Final delta: 5.42 × 0.7 × 1 = 3.80

  Stimulant: "Godric storms out of The Prime's office with clenched fists, visibly disheveled, after the confrontation fails to resolve his concerns"
    Event: failure | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    sadness: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.78 × (1 + 0.387) = 13.55
    Final delta: 13.55 × 1 × 1 = 13.55
    fear: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.31 × (1 + -0.560) = 1.46
    Final delta: 1.46 × 1 × 1 = 1.46
    anger: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.27 × (1 + 0.147) = 6.04
    Final delta: 6.04 × 1 × 1 = 6.04
  Ambient surprise: avg_trigger(0.77) × 15 = +11.5

  Emotion updates:
    sadness: carry(15.8 × 0.25) + delta(17.35) = 21.29
    anger: carry(12.9 × 0.25) + delta(25.15) = 28.37
    fear: carry(3.2 × 0.25) + delta(2.49) = 3.30
    disgust: carry(5.3 × 0.25) + delta(4.53) = 5.85
    surprise: carry(10.7 × 0.25) + delta(11.50) = 14.18
    anticipation: carry(1.9 × 0.25) + delta(2.55) = 3.02

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
    anger: base=31 × trig=1 × weight=0.6 → raw=18.60
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 18.60 × (1 + 0.147) = 21.33
    Final delta: 21.33 × 1 × 1.3 = 27.73
    disgust: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 5.40 × (1 + -0.060) = 5.08
    Final delta: 5.08 × 1 × 1.3 = 6.60
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.387) = 6.38
    Final delta: 6.38 × 1 × 1.3 = 8.29

  Stimulant: "Godric threatens Mai for calling him by his former Ghost title, showing his sensitivity about his past as a scientist"
    Event: reminder_cue | Subject: self | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.50 × (1 + 0.387) = 15.95
    Final delta: 15.95 × 1 × 1.3 = 20.73
    fear: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.90 × (1 + -0.560) = 1.72
    Final delta: 1.72 × 1 × 1.3 = 2.23
    anger: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.20 × (1 + 0.147) = 7.11
    Final delta: 7.11 × 1 × 1.3 = 9.24

  Stimulant: "Praew tells Godric he was one of her heroes, using past tense, showing she has lost faith in him"
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=23 × trig=0.85 × weight=0.6 → raw=11.73
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.73 × (1 + 0.387) = 16.27
    Final delta: 16.27 × 1 × 1.3 = 21.15
    anger: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.27 × (1 + 0.147) = 6.04
    Final delta: 6.04 × 1 × 1.3 = 7.86
    fear: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.21 × (1 + -0.560) = 0.97
    Final delta: 0.97 × 1 × 1.3 = 1.26

  Stimulant: "Mai stabs a dagger through Godric's foot when he takes his eyes off her during the confrontation"
    Event: harm | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    fear: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 6.50 × (1 + -0.560) = 2.86
    Final delta: 2.86 × 1 × 1.3 = 3.72
    anger: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 9.30 × (1 + 0.147) = 10.66
    Final delta: 10.66 × 1 × 1.3 = 13.86
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.387) = 6.38
    Final delta: 6.38 × 1 × 1.3 = 8.29

  Stimulant: "Godric discovers that his students (Wannii, Junya, Jorpen) have been disappearing and he cannot find them, leading him to search the Fourth Floor"
    Event: loss | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    sadness: base=23 × trig=0.85 × weight=0.7 → raw=13.69
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.69 × (1 + 0.387) = 18.98
    Final delta: 18.98 × 0.7 × 1 = 13.28
    fear: base=13 × trig=0.85 × weight=0.2 → raw=2.21
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.21 × (1 + -0.560) = 0.97
    Final delta: 0.97 × 0.7 × 1 = 0.68
    anger: base=31 × trig=0.85 × weight=0.1 → raw=2.63
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.63 × (1 + 0.147) = 3.02
    Final delta: 3.02 × 0.7 × 1 = 2.12
  Ambient surprise: avg_trigger(0.94) × 15 = +14.1
  Ambient anticipation: extreme event detected → +9.4

  Suppression applied:
  Suppression: anger(89.2) suppresses joy by -30.40 (50% of anger delta)
  Suppression: anger(89.2) suppresses trust by -18.24 (30% of anger delta)
  Suppression: anger(89.2) suppresses fear by -9.12 (15% of anger delta)
  Suppression: sadness(93.0) suppresses joy by -43.05 (60% of sadness delta)
  Suppression: sadness(93.0) suppresses anticipation by -21.52 (30% of sadness delta)
  Suppression: sadness(93.0) suppresses surprise by -14.35 (20% of sadness delta)

  Emotion updates:
    sadness: carry(21.3 × 0.25) + delta(71.74) = 77.07
    *** sadness in RED ZONE: VU=77.1 (track capped at 75) ***
    anger: carry(28.4 × 0.25) + delta(60.80) = 67.89
    fear: carry(3.3 × 0.25) + delta(-1.23) = -0.40
    disgust: carry(5.8 × 0.25) + delta(6.60) = 8.06
    surprise: carry(14.2 × 0.25) + delta(-0.25) = 3.30
    anticipation: carry(3.0 × 0.25) + delta(-12.12) = -11.37

=== Chapter 14 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 15 ===
Stimulants this chapter: 1

  Stimulant: "Godric finds classified medical records show he was injured (dislocated shoulder, impaled foot) in "combat training" — evidence of his fight with Mai"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=13 × trig=0.6 × weight=0.5 → raw=3.90
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.90 × (1 + -0.560) = 1.72
    Final delta: 1.72 × 1 × 0.8 = 1.37
    anger: base=31 × trig=0.6 × weight=0.3 → raw=5.58
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.58 × (1 + 0.147) = 6.40
    Final delta: 6.40 × 1 × 0.8 = 5.12
    sadness: base=23 × trig=0.6 × weight=0.2 → raw=2.76
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 2.76 × (1 + 0.387) = 3.83
    Final delta: 3.83 × 1 × 0.8 = 3.06
  Ambient surprise: avg_trigger(0.60) × 15 = +9.0

  Suppression applied:
  Suppression: anger(73.0) suppresses joy by -2.56 (50% of anger delta)
  Suppression: anger(73.0) suppresses trust by -1.54 (30% of anger delta)
  Suppression: anger(73.0) suppresses fear by -0.77 (15% of anger delta)
  Suppression: sadness(78.1) suppresses joy by -1.84 (60% of sadness delta)
  Suppression: sadness(78.1) suppresses anticipation by -0.92 (30% of sadness delta)
  Suppression: sadness(78.1) suppresses surprise by -0.61 (20% of sadness delta)

  Emotion updates:
    sadness: carry(75.0 × 0.25) + delta(3.06) = 21.81
    anger: carry(67.9 × 0.25) + delta(5.12) = 22.09
    fear: carry(0.0 × 0.25) + delta(0.60) = 0.60
    disgust: carry(8.1 × 0.25) + delta(0.00) = 2.02
    surprise: carry(3.3 × 0.25) + delta(8.39) = 9.21

=== Chapter 16 ===
Stimulants this chapter: 3

  Stimulant: "Godric reveals he has been searching for the missing students and heard screaming from below the Fourth Floor, confirming a hidden Fifth Floor"
    Event: danger_cue | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    fear: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 7.73 × (1 + -0.560) = 3.40
    Final delta: 3.40 × 0.7 × 1 = 2.38
    anticipation: base=18 × trig=0.85 × weight=0.2 → raw=3.06
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 3.06 × (1 + -0.213) = 2.41
    Final delta: 2.41 × 0.7 × 1 = 1.69
    anger: base=31 × trig=0.85 × weight=0.1 → raw=2.63
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 2.63 × (1 + 0.147) = 3.02
    Final delta: 3.02 × 0.7 × 1 = 2.12

  Stimulant: "Godric admits the deadliest person in the city (Mai) was put into a coma by an unknown attacker, and he does not know who did it"
    Event: surprise_reveal | Subject: friend | Source: enemy_caused | Domain: safety
    Trigger: stakes=2 imm=1 cert=1 → total=4 → Medium (×0.6)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    surprise: base=9 × trig=0.6 × weight=0.7 → raw=3.78
    Trait modifiers for surprise (total: -0.337):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(40/75 × -0.2) = -0.107 [Adaptable = recovers from surprise faster]
  impulsiveness(25/75 × 0.15) = +0.050 [Impulsive = reacts more to surprises]
    Modified delta: 3.78 × (1 + -0.337) = 2.51
    Final delta: 2.51 × 0.8 × 0.8 = 1.60
    fear: base=13 × trig=0.6 × weight=0.15 → raw=1.17
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 1.17 × (1 + -0.560) = 0.51
    Final delta: 0.51 × 0.8 × 0.8 = 0.33
    anticipation: base=18 × trig=0.6 × weight=0.15 → raw=1.62
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.62 × (1 + -0.213) = 1.27
    Final delta: 1.27 × 0.8 × 0.8 = 0.82

  Stimulant: "Haldric confronts Godric with a surged ForceStone demanding to know where Praew is, forcing Godric into a fight with an ally"
    Event: threat | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    fear: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 7.73 × (1 + -0.560) = 3.40
    Final delta: 3.40 × 1 × 1.3 = 4.42
    anger: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.27 × (1 + 0.147) = 6.04
    Final delta: 6.04 × 1 × 1.3 = 7.86
    anticipation: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.53 × (1 + -0.213) = 1.20
    Final delta: 1.20 × 1 × 1.3 = 1.56

  Emotion updates:
    sadness: carry(21.8 × 0.25) + delta(0.00) = 5.45
    anger: carry(22.1 × 0.25) + delta(9.97) = 15.49
    fear: carry(0.6 × 0.25) + delta(7.14) = 7.29
    disgust: carry(2.0 × 0.25) + delta(0.00) = 0.50
    surprise: carry(9.2 × 0.25) + delta(1.60) = 3.91
    anticipation: carry(0.0 × 0.25) + delta(4.07) = 4.07

=== Chapter 17 ===
Stimulants this chapter: 3

  Stimulant: "Godric and Haldric discover Praew strapped to a slab with a stone embedded in her chest, bloodied and barely conscious, confirming The Prime's atrocities"
    Event: injustice | Subject: friend | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: authority_caused → ×1
    anger: base=31 × trig=1 × weight=0.5 → raw=15.50
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 15.50 × (1 + 0.147) = 17.77
    Final delta: 17.77 × 0.8 × 1 = 14.22
    disgust: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 8.10 × (1 + -0.060) = 7.61
    Final delta: 7.61 × 0.8 × 1 = 6.09
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.387) = 6.38
    Final delta: 6.38 × 0.8 × 1 = 5.10

  Stimulant: "Godric sees two dead bodies (including Junya) in The Prime's recorrection chamber — his own students murdered in experiments"
    Event: loss | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    sadness: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.10 × (1 + 0.387) = 22.33
    Final delta: 22.33 × 0.7 × 1 = 15.63
    fear: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.60 × (1 + -0.560) = 1.14
    Final delta: 1.14 × 0.7 × 1 = 0.80
    anger: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.10 × (1 + 0.147) = 3.55
    Final delta: 3.55 × 0.7 × 1 = 2.49

  Stimulant: "Godric recognizes that his missing students Wannii and Jorpen are among the six masked Embedded warriors he must fight, turned into mind-controlled soldiers"
    Event: betrayal | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    sadness: base=23 × trig=1 × weight=0.4 → raw=9.20
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.20 × (1 + 0.387) = 12.76
    Final delta: 12.76 × 0.7 × 1 = 8.93
    anger: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 9.30 × (1 + 0.147) = 10.66
    Final delta: 10.66 × 0.7 × 1 = 7.46
    trust (COLLAPSE): base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 6.60 × (1 + -0.280) = 4.75
    Final delta: 4.75 × 0.7 × 1 = 3.33
    → Trust COLLAPSED by -3.33
  Ambient surprise: avg_trigger(1.00) × 15 = +15.0
  Ambient anticipation: extreme event detected → +10.0

  Emotion updates:
    sadness: carry(5.5 × 0.25) + delta(29.66) = 31.02
    anger: carry(15.5 × 0.25) + delta(24.17) = 28.05
    fear: carry(7.3 × 0.25) + delta(0.80) = 2.62
    disgust: carry(0.5 × 0.25) + delta(6.09) = 6.22
    surprise: carry(3.9 × 0.25) + delta(15.00) = 15.98
    anticipation: carry(4.1 × 0.25) + delta(10.00) = 11.02

=== Chapter 18 ===
Stimulants this chapter: 12

  Stimulant: "Godric calls The Prime "brother" as he says goodbye, acknowledging the personal betrayal of fighting his own sibling"
    Event: separation | Subject: family | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=1 × weight=0.6 → raw=13.80
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.80 × (1 + 0.387) = 19.14
    Final delta: 19.14 × 0.9 × 1.1 = 18.94
    fear: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.60 × (1 + -0.560) = 1.14
    Final delta: 1.14 × 0.9 × 1.1 = 1.13
    anger: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.20 × (1 + 0.147) = 7.11
    Final delta: 7.11 × 0.9 × 1.1 = 7.04

  Stimulant: "The Prime shouts that Godric will be hunted to the ends of the world for taking Praew, threatening his life and freedom"
    Event: threat | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=13 × trig=0.85 × weight=0.7 → raw=7.73
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 7.73 × (1 + -0.560) = 3.40
    Final delta: 3.40 × 1 × 1 = 3.40
    anger: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.27 × (1 + 0.147) = 6.04
    Final delta: 6.04 × 1 × 1 = 6.04
    anticipation: base=18 × trig=0.85 × weight=0.1 → raw=1.53
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 1.53 × (1 + -0.213) = 1.20
    Final delta: 1.20 × 1 × 1 = 1.20

  Stimulant: "Praew quotes his own book back to him — "Thank you for picking up your spear to face the storm!" — validating his lifelong purpose"
    Event: connection | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=22 × trig=1 × weight=0.5 → raw=11.00
    Trait modifiers for trust (total: -0.280):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 11.00 × (1 + -0.280) = 7.92
    Final delta: 7.92 × 0.8 × 1.3 = 8.24
    joy: base=9 × trig=1 × weight=0.3 → raw=2.70
    Trait modifiers for joy (total: -0.147):
  empathyBaseline(50/75 × 0.2) = +0.133 [Empathic joy — shares in others' happiness]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
    Modified delta: 2.70 × (1 + -0.147) = 2.30
    Final delta: 2.30 × 0.8 × 1.3 = 2.40
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + -0.213) = 2.83
    Final delta: 2.83 × 0.8 × 1.3 = 2.95

  Stimulant: "Godric faces six Embedded warriors alone to buy Praew time to escape, knowing he will likely die"
    Event: danger_cue | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=13 × trig=1 × weight=0.7 → raw=9.10
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 9.10 × (1 + -0.560) = 4.00
    Final delta: 4.00 × 1 × 0.8 = 3.20
    anticipation: base=18 × trig=1 × weight=0.2 → raw=3.60
    Trait modifiers for anticipation (total: -0.213):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  curiosity(25/75 × 0.2) = +0.067 [Curious = heightened anticipation for new info]
    Modified delta: 3.60 × (1 + -0.213) = 2.83
    Final delta: 2.83 × 1 × 0.8 = 2.27
    anger: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.10 × (1 + 0.147) = 3.55
    Final delta: 3.55 × 1 × 0.8 = 2.84

  Stimulant: "Godric is forced to decapitate his own students Wannii and Jorpen, who have been turned into mindless Embedded warriors"
    Event: moral_cue | Subject: group | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    disgust: base=27 × trig=1 × weight=0.4 → raw=10.80
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 10.80 × (1 + -0.060) = 10.15
    Final delta: 10.15 × 0.7 × 1.1 = 7.82
    anger: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 9.30 × (1 + 0.147) = 10.66
    Final delta: 10.66 × 0.7 × 1.1 = 8.21
    sadness: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.90 × (1 + 0.387) = 9.57
    Final delta: 9.57 × 0.7 × 1.1 = 7.37

  Stimulant: "Godric prays for his students' mercy in their next life before killing them, revealing deep moral anguish"
    Event: loss | Subject: group | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: group → ×0.7
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.10 × (1 + 0.387) = 22.33
    Final delta: 22.33 × 0.7 × 1.1 = 17.19
    fear: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.60 × (1 + -0.560) = 1.14
    Final delta: 1.14 × 0.7 × 1.1 = 0.88
    anger: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.10 × (1 + 0.147) = 3.55
    Final delta: 3.55 × 0.7 × 1.1 = 2.74

  Stimulant: "Renwick slashes Godric's throat from behind after the battle, leaving him bleeding out"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 6.50 × (1 + -0.560) = 2.86
    Final delta: 2.86 × 1 × 0.8 = 2.29
    anger: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 9.30 × (1 + 0.147) = 10.66
    Final delta: 10.66 × 1 × 0.8 = 8.53
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.387) = 6.38
    Final delta: 6.38 × 1 × 0.8 = 5.10

  Stimulant: "Godric's ribs shatter from a surged strike during the battle, and his body is failing from multiple wounds and surge overuse"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=13 × trig=1 × weight=0.5 → raw=6.50
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 6.50 × (1 + -0.560) = 2.86
    Final delta: 2.86 × 1 × 0.8 = 2.29
    anger: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 9.30 × (1 + 0.147) = 10.66
    Final delta: 10.66 × 1 × 0.8 = 8.53
    sadness: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.60 × (1 + 0.387) = 6.38
    Final delta: 6.38 × 1 × 0.8 = 5.10

  Stimulant: "Godric collapses at the gate after the battle, driving his spear into the ground one final time as the world dims around him"
    Event: loss | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.10 × (1 + 0.387) = 22.33
    Final delta: 22.33 × 1 × 1.1 = 24.56
    fear: base=13 × trig=1 × weight=0.2 → raw=2.60
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 2.60 × (1 + -0.560) = 1.14
    Final delta: 1.14 × 1 × 1.1 = 1.26
    anger: base=31 × trig=1 × weight=0.1 → raw=3.10
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 3.10 × (1 + 0.147) = 3.55
    Final delta: 3.55 × 1 × 1.1 = 3.91

  Stimulant: "Godric worries that Praew will view her own compassion as weakness if the Embedded warriors track her down using her empathy against her"
    Event: moral_cue | Subject: friend | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=1 cert=1 → total=5 → Medium (×0.6)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    disgust: base=27 × trig=0.6 × weight=0.4 → raw=6.48
    Trait modifiers for disgust (total: -0.060):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  moralRigidity(55/75 × 0.3) = +0.220 [Rigid morals = stronger moral disgust]
    Modified delta: 6.48 × (1 + -0.060) = 6.09
    Final delta: 6.09 × 0.8 × 1.1 = 5.36
    anger: base=31 × trig=0.6 × weight=0.3 → raw=5.58
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.58 × (1 + 0.147) = 6.40
    Final delta: 6.40 × 0.8 × 1.1 = 5.63
    sadness: base=23 × trig=0.6 × weight=0.3 → raw=4.14
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.14 × (1 + 0.387) = 5.74
    Final delta: 5.74 × 0.8 × 1.1 = 5.05

  Stimulant: "Godric acknowledges his "greatest shame" — the burn mark on the back of his neck — connecting him to the recorrection program that enslaved his students"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 11.50 × (1 + 0.387) = 15.95
    Final delta: 15.95 × 1 × 1.1 = 17.54
    fear: base=13 × trig=1 × weight=0.3 → raw=3.90
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.90 × (1 + -0.560) = 1.72
    Final delta: 1.72 × 1 × 1.1 = 1.89
    anger: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 6.20 × (1 + 0.147) = 7.11
    Final delta: 7.11 × 1 × 1.1 = 7.82

  Stimulant: "Godric reflects that he and his brother (The Prime) share the same weakness — growing more callous while growing more calloused"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for sadness (total: +0.387):
  empathyBaseline(50/75 × 0.4) = +0.267 [High empathy = feels loss/pain more deeply]
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  shameSensitivity(45/75 × 0.3) = +0.180 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.78 × (1 + 0.387) = 13.55
    Final delta: 13.55 × 1 × 1.1 = 14.91
    fear: base=13 × trig=0.85 × weight=0.3 → raw=3.31
    Trait modifiers for fear (total: -0.560):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  riskAppetite(70/75 × -0.3) = -0.280 [High risk appetite = fear hits less hard]
    Modified delta: 3.31 × (1 + -0.560) = 1.46
    Final delta: 1.46 × 1 × 1.1 = 1.60
    anger: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for anger (total: +0.147):
  emotionalContainment(70/75 × -0.3) = -0.280 [High containment = suppresses emotional expression]
  confrontationalTendency(65/75 × 0.3) = +0.260 [Confrontational = anger rises faster in conflict]
  prideSensitivity(35/75 × 0.2) = +0.093 [Sensitive pride = anger when status/competence challenged]
  patience(40/75 × -0.2) = -0.107 [Patient = slower to anger]
  impulsiveness(25/75 × 0.1) = +0.033 [Impulsive = anger flares quickly]
  moralRigidity(55/75 × 0.2) = +0.147 [Rigid morals = anger at injustice]
    Modified delta: 5.27 × (1 + 0.147) = 6.04
    Final delta: 6.04 × 1 × 1.1 = 6.65
  Ambient surprise: avg_trigger(0.94) × 15 = +14.1

  Suppression applied:
  Suppression: anger(96.0) suppresses joy by -33.97 (50% of anger delta)
  Suppression: anger(96.0) suppresses trust by -20.38 (30% of anger delta)
  Suppression: anger(96.0) suppresses fear by -10.19 (15% of anger delta)
  Suppression: sadness(146.8) suppresses joy by -69.46 (60% of sadness delta)
  Suppression: sadness(146.8) suppresses anticipation by -34.73 (30% of sadness delta)
  Suppression: sadness(146.8) suppresses surprise by -23.15 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-101.04) = -101.04
    sadness: carry(31.0 × 0.25) + delta(115.77) = 123.53
    *** sadness in RED ZONE: VU=100.0 (track capped at 75) ***
    anger: carry(28.0 × 0.25) + delta(67.94) = 74.96
    fear: carry(2.6 × 0.25) + delta(7.75) = 8.41
    disgust: carry(6.2 × 0.25) + delta(13.18) = 14.73
    surprise: carry(16.0 × 0.25) + delta(-9.03) = -5.03
    trust: carry(0.0 × 0.25) + delta(-12.15) = -12.15
    anticipation: carry(11.0 × 0.25) + delta(-28.32) = -25.56
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
 6 |      0 |    75! |     50 |      8 |     13 |      0 |      0 |      0
 7 |      0 |    75! |     74 |      0 |     25 |      0 |      1 |      0
 8 |      0 |     19 |     18 |      0 |      6 |      0 |      0 |      0
 9 |      8 |     26 |     20 |     12 |      2 |      6 |     12 |     12
10 |      8 |     26 |     20 |     12 |      2 |      6 |     12 |     12
11 |      8 |     26 |     20 |     12 |      2 |      6 |     12 |     12
12 |      2 |      6 |      5 |      3 |      0 |      1 |      3 |      3
13 |      0 |    75! |     70 |     41 |      3 |      0 |      0 |      0
14 |      0 |     75 |     70 |     41 |      3 |      0 |      0 |      0
15 |      0 |     75 |     70 |     41 |      3 |      0 |      0 |      0
16 |      0 |     75 |     70 |     41 |      3 |      0 |      0 |      0
17 |      0 |     75 |     70 |     41 |      3 |      0 |      0 |      0
18 |      0 |     75 |     70 |     41 |      3 |      0 |      0 |      0
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
    fear: base=23 × trig=0.85 × weight=0.7 → raw=13.69
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 13.69 × (1 + -0.480) = 7.12
    Final delta: 7.12 × 0.7 × 1.1 = 5.48
    anger: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.113) = 5.11
    Final delta: 5.11 × 0.7 × 1.1 = 3.93
    anticipation: base=23 × trig=0.85 × weight=0.1 → raw=1.96
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 1.96 × (1 + -0.107) = 1.75
    Final delta: 1.75 × 0.7 × 1.1 = 1.34

  Stimulant: "Bpen challenges Mai's authority by calling assassination cowardly and questioning her age, forcing her to assert dominance with a second poison needle"
    Event: insult | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=27 × trig=0.85 × weight=0.6 → raw=13.77
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 13.77 × (1 + 0.113) = 15.33
    Final delta: 15.33 × 1 × 1.3 = 19.93
    disgust: base=22 × trig=0.85 × weight=0.2 → raw=3.74
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.74 × (1 + -0.100) = 3.37
    Final delta: 3.37 × 1 × 1.3 = 4.38
    sadness: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.27 × (1 + 0.453) = 7.66
    Final delta: 7.66 × 1 × 1.3 = 9.96

  Stimulant: "Mai kills the bound man in front of Praew after Praew refuses to do it, performing the execution to save Praew's life despite Praew's moral condemnation"
    Event: moral_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    disgust: base=22 × trig=1 × weight=0.4 → raw=8.80
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 8.80 × (1 + -0.100) = 7.92
    Final delta: 7.92 × 1 × 1.1 = 8.71
    anger: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 8.10 × (1 + 0.113) = 9.02
    Final delta: 9.02 × 1 × 1.1 = 9.92
    sadness: base=31 × trig=1 × weight=0.3 → raw=9.30
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.30 × (1 + 0.453) = 13.52
    Final delta: 13.52 × 1 × 1.1 = 14.87

  Stimulant: "Mai hesitates when Praew defiantly tells her to "get it over with" rather than cower, revealing a flurry of conflicting emotions breaking through her mask"
    Event: surprise_reveal | Subject: friend | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=2 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    surprise: base=18 × trig=0.85 × weight=0.7 → raw=10.71
    Trait modifiers for surprise (total: -0.320):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(60/75 × -0.2) = -0.160 [Adaptable = recovers from surprise faster]
  impulsiveness(40/75 × 0.15) = +0.080 [Impulsive = reacts more to surprises]
    Modified delta: 10.71 × (1 + -0.320) = 7.28
    Final delta: 7.28 × 0.8 × 1.3 = 7.57
    fear: base=23 × trig=0.85 × weight=0.15 → raw=2.93
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.93 × (1 + -0.480) = 1.52
    Final delta: 1.52 × 0.8 × 1.3 = 1.59
    anticipation: base=23 × trig=0.85 × weight=0.15 → raw=2.93
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.93 × (1 + -0.107) = 2.62
    Final delta: 2.62 × 0.8 × 1.3 = 2.72

  Stimulant: "Mai acknowledges the trauma of what her students went through, admitting the worst beasts she ever fought were human, revealing her own haunted past"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=31 × trig=0.85 × weight=0.5 → raw=13.17
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.17 × (1 + 0.453) = 19.15
    Final delta: 19.15 × 1 × 1.1 = 21.06
    fear: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 5.87 × (1 + -0.480) = 3.05
    Final delta: 3.05 × 1 × 1.1 = 3.35
    anger: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.113) = 5.11
    Final delta: 5.11 × 1 × 1.1 = 5.62

  Stimulant: "Mai accidentally reveals Godric's true identity as Silverwing Godric to her class despite being told not to, showing her difficulty with secrets"
    Event: failure | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=31 × trig=0.6 × weight=0.5 → raw=9.30
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.30 × (1 + 0.453) = 13.52
    Final delta: 13.52 × 1 × 1.1 = 14.87
    fear: base=23 × trig=0.6 × weight=0.3 → raw=4.14
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 4.14 × (1 + -0.480) = 2.15
    Final delta: 2.15 × 1 × 1.1 = 2.37
    anger: base=27 × trig=0.6 × weight=0.2 → raw=3.24
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.24 × (1 + 0.113) = 3.61
    Final delta: 3.61 × 1 × 1.1 = 3.97

  Stimulant: "Mai fails Praew from Ghost Operations class to protect her from having to kill again, and tells Praew she has earned her respect"
    Event: connection | Subject: friend | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=36 × trig=0.85 × weight=0.5 → raw=15.30
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 15.30 × (1 + -0.240) = 11.63
    Final delta: 11.63 × 0.8 × 1.1 = 10.23
    joy: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 8.16 × (1 + -0.093) = 7.40
    Final delta: 7.40 × 0.8 × 1.1 = 6.51
    anticipation: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.91 × (1 + -0.107) = 3.49
    Final delta: 3.49 × 0.8 × 1.1 = 3.07

  Stimulant: "Praew dismisses Mai coldly after class with "Can I go now?" leaving Mai sounding dejected after her attempt at friendship"
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=31 × trig=0.85 × weight=0.6 → raw=15.81
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 15.81 × (1 + 0.453) = 22.98
    Final delta: 22.98 × 1 × 1.3 = 29.87
    anger: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.113) = 5.11
    Final delta: 5.11 × 1 × 1.3 = 6.64
    fear: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 3.91 × (1 + -0.480) = 2.03
    Final delta: 2.03 × 1 × 1.3 = 2.64

  Suppression applied:
  Suppression: anger(50.0) suppresses joy by -25.01 (50% of anger delta)
  Suppression: anger(50.0) suppresses trust by -15.01 (30% of anger delta)
  Suppression: anger(50.0) suppresses fear by -7.50 (15% of anger delta)
  Suppression: sadness(90.6) suppresses joy by -54.37 (60% of sadness delta)
  Suppression: sadness(90.6) suppresses anticipation by -27.19 (30% of sadness delta)
  Suppression: sadness(90.6) suppresses surprise by -18.12 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-72.87) = -72.87
    sadness: carry(0.0 × 0.25) + delta(90.62) = 90.62
    *** sadness in RED ZONE: VU=90.6 (track capped at 75) ***
    anger: carry(0.0 × 0.25) + delta(50.02) = 50.02
    fear: carry(0.0 × 0.25) + delta(7.93) = 7.93
    disgust: carry(0.0 × 0.25) + delta(13.09) = 13.09
    surprise: carry(0.0 × 0.25) + delta(-10.55) = -10.55
    trust: carry(0.0 × 0.25) + delta(-4.77) = -4.77
    anticipation: carry(0.0 × 0.25) + delta(-20.04) = -20.04

=== Chapter 7 ===
Stimulants this chapter: 7

  Stimulant: "Mai follows Praew home and shows up uninvited at her parents' house, sitting casually with them despite being a trained assassin"
    Event: connection | Subject: friend | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=2 cert=2 → total=5 → Medium (×0.6)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=36 × trig=0.6 × weight=0.5 → raw=10.80
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 10.80 × (1 + -0.240) = 8.21
    Final delta: 8.21 × 0.8 × 1.1 = 7.22
    joy: base=32 × trig=0.6 × weight=0.3 → raw=5.76
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 5.76 × (1 + -0.093) = 5.22
    Final delta: 5.22 × 0.8 × 1.1 = 4.60
    anticipation: base=23 × trig=0.6 × weight=0.2 → raw=2.76
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.76 × (1 + -0.107) = 2.47
    Final delta: 2.47 × 0.8 × 1.1 = 2.17

  Stimulant: "Praew calls Mai a "psychopathic murderer" and says she would never be friends with her, telling her to stay away from her parents"
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=31 × trig=1 × weight=0.6 → raw=18.60
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 18.60 × (1 + 0.453) = 27.03
    Final delta: 27.03 × 1 × 1.3 = 35.14
    anger: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.113) = 6.01
    Final delta: 6.01 × 1 × 1.3 = 7.82
    fear: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 4.60 × (1 + -0.480) = 2.39
    Final delta: 2.39 × 1 × 1.3 = 3.11

  Stimulant: "Mai breaks down crying and reveals she is Stormhaven's best assassin only because she was raised to kill, not because she enjoys it"
    Event: humiliation | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=31 × trig=1 × weight=0.4 → raw=12.40
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 12.40 × (1 + 0.453) = 18.02
    Final delta: 18.02 × 1 × 1.3 = 23.43
    anger: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 8.10 × (1 + 0.113) = 9.02
    Final delta: 9.02 × 1 × 1.3 = 11.72
    disgust: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 6.60 × (1 + -0.100) = 5.94
    Final delta: 5.94 × 1 × 1.3 = 7.72

  Stimulant: "Mai reveals she was only allowed to make a single friend after five years of maintaining a flawless kill record, and Praew is the first person she chose"
    Event: connection | Subject: friend | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    trust: base=36 × trig=1 × weight=0.5 → raw=18.00
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 18.00 × (1 + -0.240) = 13.68
    Final delta: 13.68 × 0.8 × 1.1 = 12.04
    joy: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 9.60 × (1 + -0.093) = 8.70
    Final delta: 8.70 × 0.8 × 1.1 = 7.66
    anticipation: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.60 × (1 + -0.107) = 4.11
    Final delta: 4.11 × 0.8 × 1.1 = 3.62

  Stimulant: "Mai reveals she would have killed herself long ago if not for staying positive, exposing the depth of her suffering and isolation"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=31 × trig=0.85 × weight=0.5 → raw=13.17
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.17 × (1 + 0.453) = 19.15
    Final delta: 19.15 × 1 × 1.1 = 21.06
    fear: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 5.87 × (1 + -0.480) = 3.05
    Final delta: 3.05 × 1 × 1.1 = 3.35
    anger: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.113) = 5.11
    Final delta: 5.11 × 1 × 1.1 = 5.62

  Stimulant: "Mai reveals the man she killed was a cannibal who murdered and ate his own wife and daughter, defending her actions against Praew's moral judgment"
    Event: injustice | Subject: self | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=27 × trig=0.85 × weight=0.5 → raw=11.47
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 11.47 × (1 + 0.113) = 12.78
    Final delta: 12.78 × 1 × 1.3 = 16.61
    disgust: base=22 × trig=0.85 × weight=0.3 → raw=5.61
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 5.61 × (1 + -0.100) = 5.05
    Final delta: 5.05 × 1 × 1.3 = 6.56
    sadness: base=31 × trig=0.85 × weight=0.2 → raw=5.27
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.27 × (1 + 0.453) = 7.66
    Final delta: 7.66 × 1 × 1.3 = 9.96

  Stimulant: "Mai confronts Praew with "You condemn me but protect people like that?" before walking away, devastated by the injustice of being judged"
    Event: injustice | Subject: self | Source: ally_caused | Domain: morality
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=27 × trig=1 × weight=0.5 → raw=13.50
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 13.50 × (1 + 0.113) = 15.03
    Final delta: 15.03 × 1 × 1.3 = 19.54
    disgust: base=22 × trig=1 × weight=0.3 → raw=6.60
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 6.60 × (1 + -0.100) = 5.94
    Final delta: 5.94 × 1 × 1.3 = 7.72
    sadness: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.20 × (1 + 0.453) = 9.01
    Final delta: 9.01 × 1 × 1.3 = 11.71
  Ambient surprise: avg_trigger(0.90) × 15 = +13.5

  Suppression applied:
  Suppression: anger(111.3) suppresses joy by -30.65 (50% of anger delta)
  Suppression: anger(111.3) suppresses trust by -18.39 (30% of anger delta)
  Suppression: anger(111.3) suppresses fear by -9.20 (15% of anger delta)
  Suppression: sadness(176.3) suppresses joy by -60.78 (60% of sadness delta)
  Suppression: sadness(176.3) suppresses anticipation by -30.39 (30% of sadness delta)
  Suppression: sadness(176.3) suppresses surprise by -20.26 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-79.18) = -79.18
    sadness: carry(75.0 × 0.25) + delta(101.30) = 120.05
    *** sadness in RED ZONE: VU=100.0 (track capped at 75) ***
    anger: carry(50.0 × 0.25) + delta(61.31) = 73.81
    fear: carry(7.9 × 0.25) + delta(-2.73) = -0.75
    disgust: carry(13.1 × 0.25) + delta(22.01) = 25.28
    surprise: carry(0.0 × 0.25) + delta(-6.76) = -6.76
    trust: carry(0.0 × 0.25) + delta(0.87) = 0.87
    anticipation: carry(0.0 × 0.25) + delta(-24.60) = -24.60

=== Chapter 8 ===
Stimulants this chapter: 0

  Emotion updates:
    sadness: carry(75.0 × 0.25) + delta(0.00) = 18.75
    anger: carry(73.8 × 0.25) + delta(0.00) = 18.45
    disgust: carry(25.3 × 0.25) + delta(0.00) = 6.32
    trust: carry(0.9 × 0.25) + delta(0.00) = 0.22

=== Chapter 9 ===
Stimulants this chapter: 5

  Stimulant: "Praew returns to apologize to Mai, admitting she was wrong and offering to try being friends with boundaries"
    Event: connection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=36 × trig=0.85 × weight=0.5 → raw=15.30
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 15.30 × (1 + -0.240) = 11.63
    Final delta: 11.63 × 0.8 × 1.3 = 12.09
    joy: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 8.16 × (1 + -0.093) = 7.40
    Final delta: 7.40 × 0.8 × 1.3 = 7.69
    anticipation: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.91 × (1 + -0.107) = 3.49
    Final delta: 3.49 × 0.8 × 1.3 = 3.63

  Stimulant: "Mai anxiously asks if Praew is going to "break up" with her, revealing how much their friendship means and how fragile it feels to her"
    Event: danger_cue | Subject: self | Source: self_caused | Domain: attachment
    Trigger: stakes=2 imm=2 cert=1 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=23 × trig=0.6 × weight=0.7 → raw=9.66
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 9.66 × (1 + -0.480) = 5.02
    Final delta: 5.02 × 1 × 1.1 = 5.53
    anticipation: base=23 × trig=0.6 × weight=0.2 → raw=2.76
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.76 × (1 + -0.107) = 2.47
    Final delta: 2.47 × 1 × 1.1 = 2.71
    anger: base=27 × trig=0.6 × weight=0.1 → raw=1.62
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.62 × (1 + 0.113) = 1.80
    Final delta: 1.80 × 1 × 1.1 = 1.98

  Stimulant: "Mai reveals she has been studying a romance guide book to learn how friendships work, not even knowing the difference between courting and friendship"
    Event: surprise_reveal | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=1 cert=3 → total=5 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    surprise: base=18 × trig=0.6 × weight=0.7 → raw=7.56
    Trait modifiers for surprise (total: -0.320):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(60/75 × -0.2) = -0.160 [Adaptable = recovers from surprise faster]
  impulsiveness(40/75 × 0.15) = +0.080 [Impulsive = reacts more to surprises]
    Modified delta: 7.56 × (1 + -0.320) = 5.14
    Final delta: 5.14 × 1 × 1.1 = 5.65
    fear: base=23 × trig=0.6 × weight=0.15 → raw=2.07
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.07 × (1 + -0.480) = 1.08
    Final delta: 1.08 × 1 × 1.1 = 1.18
    anticipation: base=23 × trig=0.6 × weight=0.15 → raw=2.07
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.07 × (1 + -0.107) = 1.85
    Final delta: 1.85 × 1 × 1.1 = 2.03

  Stimulant: "Mai tries to painfully force a reassuring smile when Praew performs poorly, her eye twitching as she struggles to express unfamiliar empathy"
    Event: obstacle | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=1 imm=1 cert=2 → total=4 → Medium (×0.6)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    anger: base=27 × trig=0.6 × weight=0.4 → raw=6.48
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 6.48 × (1 + 0.113) = 7.21
    Final delta: 7.21 × 1 × 1.1 = 7.94
    anticipation: base=23 × trig=0.6 × weight=0.3 → raw=4.14
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.14 × (1 + -0.107) = 3.70
    Final delta: 3.70 × 1 × 1.1 = 4.07
    fear: base=23 × trig=0.6 × weight=0.3 → raw=4.14
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 4.14 × (1 + -0.480) = 2.15
    Final delta: 2.15 × 1 × 1.1 = 2.37

  Stimulant: "When Praew asks Mai to train her the way she was trained, Mai reflexively punches her, revealing her traumatic upbringing through instinct"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=31 × trig=0.85 × weight=0.5 → raw=13.17
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.17 × (1 + 0.453) = 19.15
    Final delta: 19.15 × 1 × 1.1 = 21.06
    fear: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 5.87 × (1 + -0.480) = 3.05
    Final delta: 3.05 × 1 × 1.1 = 3.35
    anger: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.113) = 5.11
    Final delta: 5.11 × 1 × 1.1 = 5.62

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(7.69) = 7.69
    sadness: carry(18.8 × 0.25) + delta(21.06) = 25.75
    anger: carry(18.5 × 0.25) + delta(15.54) = 20.15
    fear: carry(0.0 × 0.25) + delta(12.43) = 12.43
    disgust: carry(6.3 × 0.25) + delta(0.00) = 1.58
    surprise: carry(0.0 × 0.25) + delta(5.65) = 5.65
    trust: carry(0.2 × 0.25) + delta(12.09) = 12.15
    anticipation: carry(0.0 × 0.25) + delta(12.45) = 12.45

=== Chapter 10 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 11 ===
Character NOT PRESENT — values frozen, no line drawn

=== Chapter 12 ===
Stimulants this chapter: 0

  Emotion updates:
    joy: carry(7.7 × 0.25) + delta(0.00) = 1.92
    sadness: carry(25.7 × 0.25) + delta(0.00) = 6.44
    anger: carry(20.2 × 0.25) + delta(0.00) = 5.04
    fear: carry(12.4 × 0.25) + delta(0.00) = 3.11
    disgust: carry(1.6 × 0.25) + delta(0.00) = 0.39
    surprise: carry(5.7 × 0.25) + delta(0.00) = 1.41
    trust: carry(12.1 × 0.25) + delta(0.00) = 3.04
    anticipation: carry(12.4 × 0.25) + delta(0.00) = 3.11

=== Chapter 13 ===
Stimulants this chapter: 15

  Stimulant: "Mai learns about the Fourth Floor from Praew, and her eyes glaze over with terror as she relives traumatic memories of growing up there"
    Event: reminder_cue | Subject: self | Source: ally_caused | Domain: safety
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=31 × trig=1 × weight=0.5 → raw=15.50
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 15.50 × (1 + 0.453) = 22.53
    Final delta: 22.53 × 1 × 1.3 = 29.28
    fear: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 6.90 × (1 + -0.480) = 3.59
    Final delta: 3.59 × 1 × 1.3 = 4.66
    anger: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.113) = 6.01
    Final delta: 6.01 × 1 × 1.3 = 7.82

  Stimulant: "Mai grabs Praew and desperately begs her to never return to the Fourth Floor, her eyes wide with genuine terror"
    Event: danger_cue | Subject: friend | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    fear: base=23 × trig=0.85 × weight=0.7 → raw=13.69
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 13.69 × (1 + -0.480) = 7.12
    Final delta: 7.12 × 0.8 × 1.1 = 6.26
    anticipation: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 3.91 × (1 + -0.107) = 3.49
    Final delta: 3.49 × 0.8 × 1.1 = 3.07
    anger: base=27 × trig=0.85 × weight=0.1 → raw=2.29
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.29 × (1 + 0.113) = 2.56
    Final delta: 2.56 × 0.8 × 1.1 = 2.25

  Stimulant: "Mai reveals she was born on the Fourth Floor and her entire family worked in the Sifaralith Identification Program"
    Event: reminder_cue | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=31 × trig=0.85 × weight=0.5 → raw=13.17
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.17 × (1 + 0.453) = 19.15
    Final delta: 19.15 × 1 × 1.1 = 21.06
    fear: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 5.87 × (1 + -0.480) = 3.05
    Final delta: 3.05 × 1 × 1.1 = 3.35
    anger: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.113) = 5.11
    Final delta: 5.11 × 1 × 1.1 = 5.62

  Stimulant: "Mai reveals her two older brothers blamed her for their father's death, saying she should never have been born"
    Event: rejection | Subject: self | Source: ally_caused | Domain: belonging
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=31 × trig=0.85 × weight=0.6 → raw=15.81
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 15.81 × (1 + 0.453) = 22.98
    Final delta: 22.98 × 1 × 1.3 = 29.87
    anger: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.59 × (1 + 0.113) = 5.11
    Final delta: 5.11 × 1 × 1.3 = 6.64
    fear: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 3.91 × (1 + -0.480) = 2.03
    Final delta: 2.03 × 1 × 1.3 = 2.64

  Stimulant: "Mai recounts her mother losing all her fingers in a stone accident and the family being sentenced to disposal, the moment that destroyed her childhood"
    Event: loss | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=31 × trig=1 × weight=0.7 → raw=21.70
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 21.70 × (1 + 0.453) = 31.54
    Final delta: 31.54 × 0.9 × 1 = 28.38
    fear: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 4.60 × (1 + -0.480) = 2.39
    Final delta: 2.39 × 0.9 × 1 = 2.15
    anger: base=27 × trig=1 × weight=0.1 → raw=2.70
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.70 × (1 + 0.113) = 3.01
    Final delta: 3.01 × 0.9 × 1 = 2.71

  Stimulant: "Mai watches her mother and two brothers being dragged away by guards and never sees them again"
    Event: separation | Subject: family | Source: authority_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=31 × trig=1 × weight=0.6 → raw=18.60
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 18.60 × (1 + 0.453) = 27.03
    Final delta: 27.03 × 0.9 × 1 = 24.33
    fear: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 4.60 × (1 + -0.480) = 2.39
    Final delta: 2.39 × 0.9 × 1 = 2.15
    anger: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.113) = 6.01
    Final delta: 6.01 × 0.9 × 1 = 5.41

  Stimulant: "Mai is struck by a guard so hard she flies into a pile of stones and blacks out during the struggle for her family"
    Event: harm | Subject: self | Source: authority_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    fear: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 11.50 × (1 + -0.480) = 5.98
    Final delta: 5.98 × 1 × 1 = 5.98
    anger: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 8.10 × (1 + 0.113) = 9.02
    Final delta: 9.02 × 1 × 1 = 9.02
    sadness: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.20 × (1 + 0.453) = 9.01
    Final delta: 9.01 × 1 × 1 = 9.01

  Stimulant: "Mai hunts down and kills the three guards who took her family, slitting their throats and stabbing through the last one's foot in an act of vengeance"
    Event: success | Subject: self | Source: self_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=32 × trig=1 × weight=0.7 → raw=22.40
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 22.40 × (1 + -0.093) = 20.31
    Final delta: 20.31 × 1 × 1.1 = 22.34
    trust: base=36 × trig=1 × weight=0.2 → raw=7.20
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 7.20 × (1 + -0.240) = 5.47
    Final delta: 5.47 × 1 × 1.1 = 6.02
    anticipation: base=23 × trig=1 × weight=0.1 → raw=2.30
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.30 × (1 + -0.107) = 2.05
    Final delta: 2.05 × 1 × 1.1 = 2.26

  Stimulant: "The previous Prime Archon watches Mai kill the guards with amusement instead of stopping her, then recruits her into Ghost Operations"
    Event: surprise_reveal | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    surprise: base=18 × trig=0.85 × weight=0.7 → raw=10.71
    Trait modifiers for surprise (total: -0.320):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(60/75 × -0.2) = -0.160 [Adaptable = recovers from surprise faster]
  impulsiveness(40/75 × 0.15) = +0.080 [Impulsive = reacts more to surprises]
    Modified delta: 10.71 × (1 + -0.320) = 7.28
    Final delta: 7.28 × 1 × 1 = 7.28
    fear: base=23 × trig=0.85 × weight=0.15 → raw=2.93
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.93 × (1 + -0.480) = 1.52
    Final delta: 1.52 × 1 × 1 = 1.52
    anticipation: base=23 × trig=0.85 × weight=0.15 → raw=2.93
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.93 × (1 + -0.107) = 2.62
    Final delta: 2.62 × 1 × 1 = 2.62

  Stimulant: "Godric confronts Mai about revealing Fourth Floor secrets to Praew and calls her behavior "sick" for imitating a young person to experience missed youth"
    Event: insult | Subject: self | Source: enemy_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=27 × trig=1 × weight=0.6 → raw=16.20
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 16.20 × (1 + 0.113) = 18.04
    Final delta: 18.04 × 1 × 0.8 = 14.43
    disgust: base=22 × trig=1 × weight=0.2 → raw=4.40
    Trait modifiers for disgust (total: -0.100):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 4.40 × (1 + -0.100) = 3.96
    Final delta: 3.96 × 1 × 0.8 = 3.17
    sadness: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.20 × (1 + 0.453) = 9.01
    Final delta: 9.01 × 1 × 0.8 = 7.21

  Stimulant: "Godric accuses Mai of making Praew her "next victim" and threatens her for committing treason by sharing classified information"
    Event: threat | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 16.10 × (1 + -0.480) = 8.37
    Final delta: 8.37 × 1 × 0.8 = 6.70
    anger: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.40 × (1 + 0.113) = 6.01
    Final delta: 6.01 × 1 × 0.8 = 4.81
    anticipation: base=23 × trig=1 × weight=0.1 → raw=2.30
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.30 × (1 + -0.107) = 2.05
    Final delta: 2.05 × 1 × 0.8 = 1.64

  Stimulant: "Praew declares Mai her best friend and says she doesn't care about Mai's age, validating their bond in the face of Godric's hostility"
    Event: connection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=36 × trig=1 × weight=0.5 → raw=18.00
    Trait modifiers for trust (total: -0.240):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 18.00 × (1 + -0.240) = 13.68
    Final delta: 13.68 × 0.8 × 1.3 = 14.23
    joy: base=32 × trig=1 × weight=0.3 → raw=9.60
    Trait modifiers for joy (total: -0.093):
  empathyBaseline(55/75 × 0.2) = +0.147 [Empathic joy — shares in others' happiness]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
    Modified delta: 9.60 × (1 + -0.093) = 8.70
    Final delta: 8.70 × 0.8 × 1.3 = 9.05
    anticipation: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.60 × (1 + -0.107) = 4.11
    Final delta: 4.11 × 0.8 × 1.3 = 4.27

  Stimulant: "Mai stabs Godric through the foot and shouts for Praew to run, sacrificing her own safety to protect her friend"
    Event: danger_cue | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=23 × trig=1 × weight=0.7 → raw=16.10
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 16.10 × (1 + -0.480) = 8.37
    Final delta: 8.37 × 1 × 1.1 = 9.21
    anticipation: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 4.60 × (1 + -0.107) = 4.11
    Final delta: 4.11 × 1 × 1.1 = 4.52
    anger: base=27 × trig=1 × weight=0.1 → raw=2.70
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.70 × (1 + 0.113) = 3.01
    Final delta: 3.01 × 1 × 1.1 = 3.31

  Stimulant: "Godric casually kicks Mai across the training hall like a child's toy, demonstrating the massive power gap between them"
    Event: harm | Subject: self | Source: enemy_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    fear: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 11.50 × (1 + -0.480) = 5.98
    Final delta: 5.98 × 1 × 0.8 = 4.78
    anger: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for anger (total: +0.113):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  confrontationalTendency(55/75 × 0.3) = +0.220 [Confrontational = anger rises faster in conflict]
  prideSensitivity(40/75 × 0.2) = +0.107 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(40/75 × 0.1) = +0.053 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 8.10 × (1 + 0.113) = 9.02
    Final delta: 9.02 × 1 × 0.8 = 7.21
    sadness: base=31 × trig=1 × weight=0.2 → raw=6.20
    Trait modifiers for sadness (total: +0.453):
  empathyBaseline(55/75 × 0.4) = +0.293 [High empathy = feels loss/pain more deeply]
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  shameSensitivity(55/75 × 0.3) = +0.220 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(45/75 × 0.3) = +0.180 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.20 × (1 + 0.453) = 9.01
    Final delta: 9.01 × 1 × 0.8 = 7.21

  Stimulant: "Mai reveals she does not age due to something that happened on the Fourth Floor, exposing her deepest secret and isolation"
    Event: surprise_reveal | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=1 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    surprise: base=18 × trig=0.85 × weight=0.7 → raw=10.71
    Trait modifiers for surprise (total: -0.320):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(60/75 × -0.2) = -0.160 [Adaptable = recovers from surprise faster]
  impulsiveness(40/75 × 0.15) = +0.080 [Impulsive = reacts more to surprises]
    Modified delta: 10.71 × (1 + -0.320) = 7.28
    Final delta: 7.28 × 1 × 1.1 = 8.01
    fear: base=23 × trig=0.85 × weight=0.15 → raw=2.93
    Trait modifiers for fear (total: -0.480):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  riskAppetite(60/75 × -0.3) = -0.240 [High risk appetite = fear hits less hard]
    Modified delta: 2.93 × (1 + -0.480) = 1.52
    Final delta: 1.52 × 1 × 1.1 = 1.68
    anticipation: base=23 × trig=0.85 × weight=0.15 → raw=2.93
    Trait modifiers for anticipation (total: -0.107):
  emotionalContainment(60/75 × -0.3) = -0.240 [High containment = suppresses emotional expression]
  curiosity(50/75 × 0.2) = +0.133 [Curious = heightened anticipation for new info]
    Modified delta: 2.93 × (1 + -0.107) = 2.62
    Final delta: 2.62 × 1 × 1.1 = 2.88

  Suppression applied:
  Suppression: anger(74.3) suppresses joy by -34.61 (50% of anger delta)
  Suppression: anger(74.3) suppresses trust by -20.77 (30% of anger delta)
  Suppression: anger(74.3) suppresses fear by -10.38 (15% of anger delta)
  Suppression: sadness(162.8) suppresses joy by -93.81 (60% of sadness delta)
  Suppression: sadness(162.8) suppresses anticipation by -46.91 (30% of sadness delta)
  Suppression: sadness(162.8) suppresses surprise by -31.27 (20% of sadness delta)

  Emotion updates:
    joy: carry(1.9 × 0.25) + delta(-97.03) = -96.55
    sadness: carry(6.4 × 0.25) + delta(156.36) = 157.97
    *** sadness in RED ZONE: VU=100.0 (track capped at 75) ***
    anger: carry(5.0 × 0.25) + delta(69.22) = 70.48
    fear: carry(3.1 × 0.25) + delta(40.72) = 41.50
    disgust: carry(0.4 × 0.25) + delta(3.17) = 3.27
    surprise: carry(1.4 × 0.25) + delta(-15.98) = -15.62
    trust: carry(3.0 × 0.25) + delta(-0.52) = 0.24
    anticipation: carry(3.1 × 0.25) + delta(-25.63) = -24.86

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
 1 |      0 |     73 |     29 |      3 |     19 |      0 |      0 |      0
 2 |      0 |    75! |     63 |      8 |     27 |      0 |      0 |      0
 3 |      0 |    75! |     71 |     44 |     13 |      0 |      0 |      0
 4 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
 5 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
 6 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
 7 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
 8 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
 9 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
10 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
11 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
12 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
13 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
14 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
15 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
16 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
17 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
18 |      0 |     75 |     71 |     44 |     13 |      0 |      0 |      0
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
    sadness: base=27 × trig=0.85 × weight=0.7 → raw=16.06
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.06 × (1 + 0.440) = 23.13
    Final delta: 23.13 × 1 × 1.1 = 25.45
    fear: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 4.59 × (1 + -0.420) = 2.66
    Final delta: 2.66 × 1 × 1.1 = 2.93
    anger: base=23 × trig=0.85 × weight=0.1 → raw=1.96
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 1.96 × (1 + 0.127) = 2.20
    Final delta: 2.20 × 1 × 1.1 = 2.42

  Stimulant: "Asher defends Praew against Renwick's sexist mockery, snapping his book shut and verbally lashing Renwick"
    Event: moral_cue | Subject: friend | Source: enemy_caused | Domain: morality
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: enemy_caused → ×0.8
    disgust: base=23 × trig=0.85 × weight=0.4 → raw=7.82
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 7.82 × (1 + -0.080) = 7.19
    Final delta: 7.19 × 0.8 × 0.8 = 4.60
    anger: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.87 × (1 + 0.127) = 6.61
    Final delta: 6.61 × 0.8 × 0.8 = 4.23
    sadness: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.88 × (1 + 0.440) = 9.91
    Final delta: 9.91 × 0.8 × 0.8 = 6.35

  Stimulant: "Asher passes the knowledge portion of the Hunter exam, hearing his name called last among the six survivors"
    Event: success | Subject: self | Source: self_caused | Domain: competence
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    joy: base=14 × trig=1 × weight=0.7 → raw=9.80
    Trait modifiers for joy (total: -0.100):
  empathyBaseline(45/75 × 0.2) = +0.120 [Empathic joy — shares in others' happiness]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 9.80 × (1 + -0.100) = 8.82
    Final delta: 8.82 × 1 × 1.1 = 9.70
    trust: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 4.60 × (1 + -0.220) = 3.59
    Final delta: 3.59 × 1 × 1.1 = 3.95
    anticipation: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 3.20 × (1 + -0.100) = 2.88
    Final delta: 2.88 × 1 × 1.1 = 3.17

  Stimulant: "Asher glances up at The Prime Archon watching from above and realizes the test is rigged so both he and Haldric will fail"
    Event: betrayal | Subject: family | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=27 × trig=1 × weight=0.4 → raw=10.80
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.80 × (1 + 0.440) = 15.55
    Final delta: 15.55 × 0.9 × 1 = 14.00
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.127) = 7.77
    Final delta: 7.77 × 0.9 × 1 = 7.00
    trust (COLLAPSE): base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 6.90 × (1 + -0.220) = 5.38
    Final delta: 5.38 × 0.9 × 1 = 4.84
    → Trust COLLAPSED by -4.84

  Stimulant: "Asher hesitates at the ledge, then deliberately turns away from Haldric and takes both stones, betraying his best friend to pass the test"
    Event: moral_cue | Subject: friend | Source: self_caused | Domain: morality
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    disgust: base=23 × trig=1 × weight=0.4 → raw=9.20
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 9.20 × (1 + -0.080) = 8.46
    Final delta: 8.46 × 0.8 × 1.1 = 7.45
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.127) = 7.77
    Final delta: 7.77 × 0.8 × 1.1 = 6.84
    sadness: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 8.10 × (1 + 0.440) = 11.66
    Final delta: 11.66 × 0.8 × 1.1 = 10.26

  Stimulant: "Asher refuses to meet Haldric's furious gaze after stealing both stones, consumed by silent guilt"
    Event: humiliation | Subject: self | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=1 × weight=0.4 → raw=10.80
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.80 × (1 + 0.440) = 15.55
    Final delta: 15.55 × 1 × 1.1 = 17.11
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.127) = 7.77
    Final delta: 7.77 × 1 × 1.1 = 8.55
    disgust: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 6.90 × (1 + -0.080) = 6.35
    Final delta: 6.35 × 1 × 1.1 = 6.98
  Ambient surprise: avg_trigger(0.95) × 15 = +14.3

  Suppression applied:
  Suppression: sadness(73.2) suppresses joy by -43.90 (60% of sadness delta)
  Suppression: sadness(73.2) suppresses anticipation by -21.95 (30% of sadness delta)
  Suppression: sadness(73.2) suppresses surprise by -14.63 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-34.19) = -34.19
    sadness: carry(0.0 × 0.25) + delta(73.16) = 73.16
    anger: carry(0.0 × 0.25) + delta(29.04) = 29.04
    fear: carry(0.0 × 0.25) + delta(2.93) = 2.93
    disgust: carry(0.0 × 0.25) + delta(19.04) = 19.04
    surprise: carry(0.0 × 0.25) + delta(-0.38) = -0.38
    trust: carry(0.0 × 0.25) + delta(-0.90) = -0.90
    anticipation: carry(0.0 × 0.25) + delta(-18.78) = -18.78

=== Chapter 2 ===
Stimulants this chapter: 10

  Stimulant: "Asher is announced as a Beast Hunter, the most prestigious role aside from Mythical Beast Hunter, triggering gasps across the hall"
    Event: success | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    joy: base=14 × trig=1 × weight=0.7 → raw=9.80
    Trait modifiers for joy (total: -0.100):
  empathyBaseline(45/75 × 0.2) = +0.120 [Empathic joy — shares in others' happiness]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 9.80 × (1 + -0.100) = 8.82
    Final delta: 8.82 × 1 × 1 = 8.82
    trust: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 4.60 × (1 + -0.220) = 3.59
    Final delta: 3.59 × 1 × 1 = 3.59
    anticipation: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 3.20 × (1 + -0.100) = 2.88
    Final delta: 2.88 × 1 × 1 = 2.88

  Stimulant: "Asher feels Haldric's blazing hatred radiating from him after the role announcements, knowing his friend despises him"
    Event: rejection | Subject: friend | Source: self_caused | Domain: belonging
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=1 × weight=0.6 → raw=16.20
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.20 × (1 + 0.440) = 23.33
    Final delta: 23.33 × 0.8 × 1.1 = 20.53
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.127) = 5.18
    Final delta: 5.18 × 0.8 × 1.1 = 4.56
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.420) = 3.13
    Final delta: 3.13 × 0.8 × 1.1 = 2.76

  Stimulant: "Asher turns his back on Praew and Haldric without saying goodbye or apologizing, walking away like a coward"
    Event: separation | Subject: friend | Source: self_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=1 × weight=0.6 → raw=16.20
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.20 × (1 + 0.440) = 23.33
    Final delta: 23.33 × 0.8 × 1.1 = 20.53
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.420) = 3.13
    Final delta: 3.13 × 0.8 × 1.1 = 2.76
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.127) = 5.18
    Final delta: 5.18 × 0.8 × 1.1 = 4.56

  Stimulant: "Asher walks past The Prime and coldly accuses his father of trying to sabotage him by pitting him against his best friend"
    Event: betrayal | Subject: family | Source: authority_caused | Domain: autonomy
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=27 × trig=0.85 × weight=0.4 → raw=9.18
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.18 × (1 + 0.440) = 13.22
    Final delta: 13.22 × 0.9 × 1 = 11.90
    anger: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.87 × (1 + 0.127) = 6.61
    Final delta: 6.61 × 0.9 × 1 = 5.95
    trust (COLLAPSE): base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 5.87 × (1 + -0.220) = 4.57
    Final delta: 4.57 × 0.9 × 1 = 4.12
    → Trust COLLAPSED by -4.12

  Stimulant: "Renwick taunts Asher with "all Rivers run cold," and Asher internally admits Renwick is right about his cruelty"
    Event: insult | Subject: self | Source: enemy_caused | Domain: morality
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: enemy_caused → ×0.8
    anger: base=23 × trig=0.85 × weight=0.6 → raw=11.73
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 11.73 × (1 + 0.127) = 13.22
    Final delta: 13.22 × 1 × 0.8 = 10.57
    disgust: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 3.91 × (1 + -0.080) = 3.60
    Final delta: 3.60 × 1 × 0.8 = 2.88
    sadness: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.59 × (1 + 0.440) = 6.61
    Final delta: 6.61 × 1 × 0.8 = 5.29

  Stimulant: "Asher silently apologizes to Haldric and Praew in his mind, clenching his fists with guilt while walking away"
    Event: moral_cue | Subject: friend | Source: self_caused | Domain: morality
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: self_caused → ×1.1
    disgust: base=23 × trig=0.85 × weight=0.4 → raw=7.82
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 7.82 × (1 + -0.080) = 7.19
    Final delta: 7.19 × 0.8 × 1.1 = 6.33
    anger: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.87 × (1 + 0.127) = 6.61
    Final delta: 6.61 × 0.8 × 1.1 = 5.81
    sadness: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 6.88 × (1 + 0.440) = 9.91
    Final delta: 9.91 × 0.8 × 1.1 = 8.72

  Stimulant: "Both Asher and Renwick are overwhelmed and blinded by the sun on their first surface exposure, crying and panicking"
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 18.90 × (1 + -0.420) = 10.96
    Final delta: 10.96 × 1 × 0.7 = 7.67
    anticipation: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 6.40 × (1 + -0.100) = 5.76
    Final delta: 5.76 × 1 × 0.7 = 4.03
    anger: base=23 × trig=1 × weight=0.1 → raw=2.30
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.30 × (1 + 0.127) = 2.59
    Final delta: 2.59 × 1 × 0.7 = 1.81

  Stimulant: "Asher discovers the air on the surface is richer and thicker, coughing violently as his lungs burn from the unfamiliar sensation"
    Event: obstacle | Subject: self | Source: world_caused | Domain: competence
    Trigger: stakes=1 imm=3 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    anger: base=23 × trig=0.85 × weight=0.4 → raw=7.82
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 7.82 × (1 + 0.127) = 8.81
    Final delta: 8.81 × 1 × 0.7 = 6.17
    anticipation: base=32 × trig=0.85 × weight=0.3 → raw=8.16
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 8.16 × (1 + -0.100) = 7.34
    Final delta: 7.34 × 1 × 0.7 = 5.14
    fear: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 6.88 × (1 + -0.420) = 3.99
    Final delta: 3.99 × 1 × 0.7 = 2.80

  Stimulant: "Asher meets his team lead Azel and is immediately embarrassed for speaking rudely to a superior"
    Event: humiliation | Subject: self | Source: self_caused | Domain: status
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    sadness: base=27 × trig=0.85 × weight=0.4 → raw=9.18
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.18 × (1 + 0.440) = 13.22
    Final delta: 13.22 × 1 × 1.1 = 14.54
    anger: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.87 × (1 + 0.127) = 6.61
    Final delta: 6.61 × 1 × 1.1 = 7.27
    disgust: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 5.87 × (1 + -0.080) = 5.40
    Final delta: 5.40 × 1 × 1.1 = 5.94

  Stimulant: "Azel mocks Asher for crying and screaming during his first exposure to sunlight, revealing other Hunters watched as hazing tradition"
    Event: humiliation | Subject: self | Source: ally_caused | Domain: status
    Trigger: stakes=1 imm=2 cert=3 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    sadness: base=27 × trig=0.85 × weight=0.4 → raw=9.18
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 9.18 × (1 + 0.440) = 13.22
    Final delta: 13.22 × 1 × 1.3 = 17.18
    anger: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 5.87 × (1 + 0.127) = 6.61
    Final delta: 6.61 × 1 × 1.3 = 8.59
    disgust: base=23 × trig=0.85 × weight=0.3 → raw=5.87
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 5.87 × (1 + -0.080) = 5.40
    Final delta: 5.40 × 1 × 1.3 = 7.01
  Ambient surprise: avg_trigger(0.91) × 15 = +13.6

  Suppression applied:
  Suppression: anger(84.3) suppresses joy by -27.65 (50% of anger delta)
  Suppression: anger(84.3) suppresses trust by -16.59 (30% of anger delta)
  Suppression: anger(84.3) suppresses fear by -8.29 (15% of anger delta)
  Suppression: sadness(171.9) suppresses joy by -59.22 (60% of sadness delta)
  Suppression: sadness(171.9) suppresses anticipation by -29.61 (30% of sadness delta)
  Suppression: sadness(171.9) suppresses surprise by -19.74 (20% of sadness delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-78.04) = -78.04
    sadness: carry(73.2 × 0.25) + delta(98.69) = 116.98
    *** sadness in RED ZONE: VU=100.0 (track capped at 75) ***
    anger: carry(29.0 × 0.25) + delta(55.30) = 62.56
    fear: carry(2.9 × 0.25) + delta(7.69) = 8.42
    disgust: carry(19.0 × 0.25) + delta(22.16) = 26.92
    surprise: carry(0.0 × 0.25) + delta(-6.09) = -6.09
    trust: carry(0.0 × 0.25) + delta(-17.12) = -17.12
    anticipation: carry(0.0 × 0.25) + delta(-17.56) = -17.56

=== Chapter 3 ===
Stimulants this chapter: 12

  Stimulant: "Asher nearly dies on his very first step on the surface when a BoltStone erupts where he stood; Azel yanks him back just in time"
    Event: danger_cue | Subject: self | Source: world_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    fear: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 18.90 × (1 + -0.420) = 10.96
    Final delta: 10.96 × 1 × 0.7 = 7.67
    anticipation: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 6.40 × (1 + -0.100) = 5.76
    Final delta: 5.76 × 1 × 0.7 = 4.03
    anger: base=23 × trig=1 × weight=0.1 → raw=2.30
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.30 × (1 + 0.127) = 2.59
    Final delta: 2.59 × 1 × 0.7 = 1.81

  Stimulant: "Azel berates Asher for being distracted by the beauty of the surface, shattering his sense of awe"
    Event: constraint | Subject: self | Source: ally_caused | Domain: competence
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: ally_caused → ×1.3
    anger: base=23 × trig=1 × weight=0.5 → raw=11.50
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 11.50 × (1 + 0.127) = 12.96
    Final delta: 12.96 × 1 × 1.3 = 16.84
    fear: base=27 × trig=1 × weight=0.3 → raw=8.10
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 8.10 × (1 + -0.420) = 4.70
    Final delta: 4.70 × 1 × 1.3 = 6.11
    sadness: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 5.40 × (1 + 0.440) = 7.78
    Final delta: 7.78 × 1 × 1.3 = 10.11

  Stimulant: "Asher nearly draws his blade on a non-aggressive beast, almost getting both himself and Azel killed"
    Event: danger_cue | Subject: self | Source: self_caused | Domain: safety
    Trigger: stakes=3 imm=3 cert=2 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: self_caused → ×1.1
    fear: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 18.90 × (1 + -0.420) = 10.96
    Final delta: 10.96 × 1 × 1.1 = 12.06
    anticipation: base=32 × trig=1 × weight=0.2 → raw=6.40
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 6.40 × (1 + -0.100) = 5.76
    Final delta: 5.76 × 1 × 1.1 = 6.34
    anger: base=23 × trig=1 × weight=0.1 → raw=2.30
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.30 × (1 + 0.127) = 2.59
    Final delta: 2.59 × 1 × 1.1 = 2.85

  Stimulant: "Asher reveals his surname Rivers and the team reacts with an unspoken, uncomfortable tension upon learning he is The Prime Archon's son"
    Event: rejection | Subject: self | Source: world_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: self → ×1
    Source mult: world_caused → ×0.7
    sadness: base=27 × trig=0.85 × weight=0.6 → raw=13.77
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 13.77 × (1 + 0.440) = 19.83
    Final delta: 19.83 × 1 × 0.7 = 13.88
    anger: base=23 × trig=0.85 × weight=0.2 → raw=3.91
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 3.91 × (1 + 0.127) = 4.41
    Final delta: 4.41 × 1 × 0.7 = 3.08
    fear: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 4.59 × (1 + -0.420) = 2.66
    Final delta: 2.66 × 1 × 0.7 = 1.86

  Stimulant: "Asher learns beasts can be farmed and food shortage is manufactured, questioning everything he was taught"
    Event: surprise_reveal | Subject: group | Source: authority_caused | Domain: morality
    Trigger: stakes=3 imm=2 cert=2 → total=7 → High (×0.85)
    Subject mult: group → ×0.7
    Source mult: authority_caused → ×1
    surprise: base=22 × trig=0.85 × weight=0.7 → raw=13.09
    Trait modifiers for surprise (total: -0.283):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(50/75 × -0.2) = -0.133 [Adaptable = recovers from surprise faster]
  impulsiveness(35/75 × 0.15) = +0.070 [Impulsive = reacts more to surprises]
    Modified delta: 13.09 × (1 + -0.283) = 9.38
    Final delta: 9.38 × 0.7 × 1 = 6.57
    fear: base=27 × trig=0.85 × weight=0.15 → raw=3.44
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 3.44 × (1 + -0.420) = 2.00
    Final delta: 2.00 × 0.7 × 1 = 1.40
    anticipation: base=32 × trig=0.85 × weight=0.15 → raw=4.08
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 4.08 × (1 + -0.100) = 3.67
    Final delta: 3.67 × 0.7 × 1 = 2.57

  Stimulant: "Asher is given a shovel and told his Beast Hunter job is shoveling manure, realizing his father got the last laugh"
    Event: humiliation | Subject: self | Source: authority_caused | Domain: status
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    sadness: base=27 × trig=1 × weight=0.4 → raw=10.80
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 10.80 × (1 + 0.440) = 15.55
    Final delta: 15.55 × 1 × 1 = 15.55
    anger: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 6.90 × (1 + 0.127) = 7.77
    Final delta: 7.77 × 1 × 1 = 7.77
    disgust: base=23 × trig=1 × weight=0.3 → raw=6.90
    Trait modifiers for disgust (total: -0.080):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  moralRigidity(35/75 × 0.3) = +0.140 [Rigid morals = stronger moral disgust]
    Modified delta: 6.90 × (1 + -0.080) = 6.35
    Final delta: 6.35 × 1 × 1 = 6.35

  Stimulant: "Asher reflects on the flashback where his father forbade him from becoming a Hunter, remembering the original wound that drove his defiance"
    Event: constraint | Subject: self | Source: authority_caused | Domain: autonomy
    Trigger: stakes=3 imm=1 cert=3 → total=7 → High (×0.85)
    Subject mult: self → ×1
    Source mult: authority_caused → ×1
    anger: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 9.78 × (1 + 0.127) = 11.01
    Final delta: 11.01 × 1 × 1 = 11.01
    fear: base=27 × trig=0.85 × weight=0.3 → raw=6.88
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 6.88 × (1 + -0.420) = 3.99
    Final delta: 3.99 × 1 × 1 = 3.99
    sadness: base=27 × trig=0.85 × weight=0.2 → raw=4.59
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 4.59 × (1 + 0.440) = 6.61
    Final delta: 6.61 × 1 × 1 = 6.61

  Stimulant: "Eight-year-old Asher is harshly told by his father never to call him "Father" in public again, and to only use "Prime Archon""
    Event: rejection | Subject: family | Source: authority_caused | Domain: attachment
    Trigger: stakes=3 imm=3 cert=3 → total=9 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=27 × trig=1 × weight=0.6 → raw=16.20
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 16.20 × (1 + 0.440) = 23.33
    Final delta: 23.33 × 0.9 × 1 = 21.00
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.127) = 5.18
    Final delta: 5.18 × 0.9 × 1 = 4.66
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.420) = 3.13
    Final delta: 3.13 × 0.9 × 1 = 2.82

  Stimulant: "Young Asher sees his father visibly shaken and terrified after becoming Prime, seeing a stone embedded in his chest, and is sworn to secrecy"
    Event: surprise_reveal | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=2 cert=2 → total=6 → High (×0.85)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    surprise: base=22 × trig=0.85 × weight=0.7 → raw=13.09
    Trait modifiers for surprise (total: -0.283):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  adaptabilityVsRigidity(50/75 × -0.2) = -0.133 [Adaptable = recovers from surprise faster]
  impulsiveness(35/75 × 0.15) = +0.070 [Impulsive = reacts more to surprises]
    Modified delta: 13.09 × (1 + -0.283) = 9.38
    Final delta: 9.38 × 0.9 × 1 = 8.44
    fear: base=27 × trig=0.85 × weight=0.15 → raw=3.44
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 3.44 × (1 + -0.420) = 2.00
    Final delta: 2.00 × 0.9 × 1 = 1.80
    anticipation: base=32 × trig=0.85 × weight=0.15 → raw=4.08
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 4.08 × (1 + -0.100) = 3.67
    Final delta: 3.67 × 0.9 × 1 = 3.30

  Stimulant: "Young Asher's father slams his palm so hard it dents a stone table when Asher says he'd rather be a Hunter than end up like him"
    Event: threat | Subject: family | Source: authority_caused | Domain: safety
    Trigger: stakes=2 imm=3 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    fear: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 18.90 × (1 + -0.420) = 10.96
    Final delta: 10.96 × 0.9 × 1 = 9.87
    anger: base=23 × trig=1 × weight=0.2 → raw=4.60
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 4.60 × (1 + 0.127) = 5.18
    Final delta: 5.18 × 0.9 × 1 = 4.66
    anticipation: base=32 × trig=1 × weight=0.1 → raw=3.20
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 3.20 × (1 + -0.100) = 2.88
    Final delta: 2.88 × 0.9 × 1 = 2.59

  Stimulant: "Young Asher feels something crack inside him as his father demands to only be called Prime Archon, knowing the damage is permanent"
    Event: loss | Subject: family | Source: authority_caused | Domain: attachment
    Trigger: stakes=3 imm=2 cert=3 → total=8 → Extreme (×1)
    Subject mult: family → ×0.9
    Source mult: authority_caused → ×1
    sadness: base=27 × trig=1 × weight=0.7 → raw=18.90
    Trait modifiers for sadness (total: +0.440):
  empathyBaseline(45/75 × 0.4) = +0.240 [High empathy = feels loss/pain more deeply]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  shameSensitivity(50/75 × 0.3) = +0.200 [Shame-sensitive = sadness from exposure/failure]
  guiltSensitivity(55/75 × 0.3) = +0.220 [High guilt = sadness from moral self-judgment]
    Modified delta: 18.90 × (1 + 0.440) = 27.22
    Final delta: 27.22 × 0.9 × 1 = 24.49
    fear: base=27 × trig=1 × weight=0.2 → raw=5.40
    Trait modifiers for fear (total: -0.420):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  riskAppetite(50/75 × -0.3) = -0.200 [High risk appetite = fear hits less hard]
    Modified delta: 5.40 × (1 + -0.420) = 3.13
    Final delta: 3.13 × 0.9 × 1 = 2.82
    anger: base=23 × trig=1 × weight=0.1 → raw=2.30
    Trait modifiers for anger (total: +0.127):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  confrontationalTendency(45/75 × 0.3) = +0.180 [Confrontational = anger rises faster in conflict]
  prideSensitivity(55/75 × 0.2) = +0.147 [Sensitive pride = anger when status/competence challenged]
  patience(45/75 × -0.2) = -0.120 [Patient = slower to anger]
  impulsiveness(35/75 × 0.1) = +0.047 [Impulsive = anger flares quickly]
  moralRigidity(35/75 × 0.2) = +0.093 [Rigid morals = anger at injustice]
    Modified delta: 2.30 × (1 + 0.127) = 2.59
    Final delta: 2.59 × 0.9 × 1 = 2.33

  Stimulant: "Young Asher is comforted by Praew and Haldric who mock the idea of being Prime Archon and invite him to become a Hunter with them instead"
    Event: connection | Subject: friend | Source: ally_caused | Domain: belonging
    Trigger: stakes=2 imm=2 cert=3 → total=7 → High (×0.85)
    Subject mult: friend → ×0.8
    Source mult: ally_caused → ×1.3
    trust: base=23 × trig=0.85 × weight=0.5 → raw=9.78
    Trait modifiers for trust (total: -0.220):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 9.78 × (1 + -0.220) = 7.62
    Final delta: 7.62 × 0.8 × 1.3 = 7.93
    joy: base=14 × trig=0.85 × weight=0.3 → raw=3.57
    Trait modifiers for joy (total: -0.100):
  empathyBaseline(45/75 × 0.2) = +0.120 [Empathic joy — shares in others' happiness]
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
    Modified delta: 3.57 × (1 + -0.100) = 3.21
    Final delta: 3.21 × 0.8 × 1.3 = 3.34
    anticipation: base=32 × trig=0.85 × weight=0.2 → raw=5.44
    Trait modifiers for anticipation (total: -0.100):
  emotionalContainment(55/75 × -0.3) = -0.220 [High containment = suppresses emotional expression]
  curiosity(45/75 × 0.2) = +0.120 [Curious = heightened anticipation for new info]
    Modified delta: 5.44 × (1 + -0.100) = 4.90
    Final delta: 4.90 × 0.8 × 1.3 = 5.09

  Suppression applied:
  Suppression: anger(117.6) suppresses joy by -27.52 (50% of anger delta)
  Suppression: anger(117.6) suppresses trust by -16.51 (30% of anger delta)
  Suppression: anger(117.6) suppresses fear by -8.26 (15% of anger delta)
  Suppression: sadness(166.6) suppresses joy by -54.98 (60% of sadness delta)
  Suppression: sadness(166.6) suppresses anticipation by -27.49 (30% of sadness delta)
  Suppression: sadness(166.6) suppresses surprise by -18.33 (20% of sadness delta)
  Suppression: fear(50.6) suppresses joy by -16.86 (40% of fear delta)
  Suppression: fear(50.6) suppresses trust by -12.64 (30% of fear delta)
  Suppression: fear(50.6) suppresses anticipation by -8.43 (20% of fear delta)

  Emotion updates:
    joy: carry(0.0 × 0.25) + delta(-96.02) = -96.02
    sadness: carry(75.0 × 0.25) + delta(91.64) = 110.39
    *** sadness in RED ZONE: VU=100.0 (track capped at 75) ***
    anger: carry(62.6 × 0.25) + delta(55.04) = 70.68
    fear: carry(8.4 × 0.25) + delta(42.14) = 44.24
    disgust: carry(26.9 × 0.25) + delta(6.35) = 13.08
    surprise: carry(0.0 × 0.25) + delta(-3.32) = -3.32
    trust: carry(0.0 × 0.25) + delta(-21.22) = -21.22
    anticipation: carry(0.0 × 0.25) + delta(-11.99) = -11.99

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
