---
slug: 14-ms-ionisering
title: "MS: ioniseringsteknikker"
topic: ms
exam_weight: low
exam_weight_note: "H24 1(b) flervalg (hvilken ionisering brukes oftest i LC-MS: ESI), H24 1(c) (forklar ESI, 2 p). Ikke spurt på H25"
builds_on: [06-hplc-detektorer, 13-gc-detektorer]
used_in: [15-ms-analysatorer-og-detektorer, 16-ms-proteiner]
sources: ["Forelesning_MS_u_notater.pdf", "MSproteiner2026.pdf", "Proteinkarakterisering del 1 m notater.pdf", "chromatographgy_basics_part1.pdf", "chromatographgy_basics_part2.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** Hvilken ioniseringsmetode brukes oftest i LC-MS?
**A:** Elektrosprayionisering (ESI) [LF eksamen H2024 IMAK2008.pdf, p. 3, oppg. 1(b)].

**Q:** Hva er forskjellen på «hard» og «myk» ionisering?
**A:** Hvor mye molekylet fragmenteres. EI er hard (mye fragmentering), mens ESI og CI er myke [MSproteiner2026.pdf, slide 4–5; chromatographgy_basics_part1.pdf, p. 33].

**Q:** Lidokain har M = 234. Hvilken m/z ser du i positiv ESI?
**A:** $[M+H]^+$ = 235 [chromatographgy_basics_part2.pdf, p. 87].

## Mental model
Et massespektrometer kan bare veie ioner i gassfase. Første trinn er derfor å lage ioner, deretter separere dem og så detektere dem som m/z [MSproteiner2026.pdf, slide 3; Forelesning_MS_u_notater.pdf, slide 4]. Ioniseringsmetoden bestemmes av hvor prøven kommer fra og hva den er:
- **GC**: analyttene er allerede flyktige og i gassfase, så de kan bombarderes med elektroner i vakuum (EI) eller ioniseres skånsomt via en reagensgass (CI) [chromatographgy_basics_part1.pdf, p. 33].
- **LC**: væsken må fordampes og analytten ioniseres ved atmosfæretrykk. Polare og ladede molekyler sprayes ut som ladde dråper (ESI). Mindre polare fordampes og ioniseres via en korona-nål (APCI) eller UV-lys (APPI) [chromatographgy_basics_part2.pdf, p. 85–90].
- **Store biomolekyler**: kan også skytes ut fra en krystallmatriks med laser (MALDI) [Proteinkarakterisering del 1 m notater.pdf, slide 9].

Myke metoder gir hele molekylionet ($[M+H]^+$), som forteller molekylmassen. Harde metoder gir fragmenter, som forteller strukturen [chromatographgy_basics_part1.pdf, p. 33; MSproteiner2026.pdf, slide 4].

## Concepts and definitions
- **Hensikt med MS**: Bestemme vekten av et molekyl. Danner ioner ved ionisering, separerer ionene og detekterer dem som m/z [MSproteiner2026.pdf, slide 3]. Tre trinn: ionisering → analyse/separering → deteksjon [Forelesning_MS_u_notater.pdf, slide 4].
- **Ioniseringsmetoder (oversikt)**: ESI, EI, AP-CI, AP-PI, ICP og MALDI. Klassifiseres som myk vs. hard (hvor mye som fragmenteres) og vakuum vs. atmosfæretrykk [MSproteiner2026.pdf, slide 4].
- **EI (elektronionisering / electron impact)**: Vanligst i GC. Elektroner fra et filament sendes som en stråle på 70 eV gjennom ionekilden. Molekyler i gassfase ved lavt trykk ioniseres til positive molekylioner $M^{+\bullet}$. Fordi ioniseringsenergien til de fleste organiske forbindelser er 7–10 eV, har molekylionet overskuddsenergi og fragmenterer på en forbindelsesspesifikk måte. Reproduserbare spektre gjør biblioteksøk mulig [chromatographgy_basics_part1.pdf, p. 33; Forelesning_MS_u_notater.pdf, slide 3].
- **CI (kjemisk ionisering)**: Mykere enn EI. Brukes når molekylmasseinformasjon trengs. En reagensgass (metan, isobutan, ammoniakk) ioniseres ved relativt høyt trykk (0,1–2 torr) i en mer lukket kilde, og analytten ioniseres ved ion/nøytral-reaksjoner. Gir mest protonerte molekyler $MH^+$ og få fragmenter. Ammoniakk kan gi addukter $(M+NH_4)^+$ [chromatographgy_basics_part1.pdf, p. 33; Forelesning_MS_u_notater.pdf, slide 4].
- **Negativ ionisering (GC)**: Termiske elektroner fanges av analytten, noe som er nyttig for molekyler med høy elektronaffinitet, som ved ECD [chromatographgy_basics_part1.pdf, p. 33].
- **LC-MS-interface**: De vanligste er ESI, APCI, APPI og ICP. Valget avhenger av analyttens polaritet og størrelse [chromatographgy_basics_part2.pdf, p. 85–86].
  - ESI: polare forbindelser, fra små til store.
  - APCI/APPI: mindre polare, små.
  - MALDI er bare delvis LC-MS-kompatibel (+/−).
- **ESI (elektrosprayionisering)** [chromatographgy_basics_part2.pdf, p. 86–88]:
  - Ved atmosfæretrykk, for forbindelser med polare grupper (nøytrale, syrer og baser).
  - For syrer og baser skjer ioniseringen i MF via pH-justering.
  - MF går inn i en kapillær med høy spenning (typisk ±5 kV). Forstøvningsgass (N₂) hjelper dråpedannelsen, og tørkegass går motstrøms.
  - Dråpene er sterkt ladet og krymper. Når frastøtningen overstiger overflatespenningen, eksploderer dråpen i mindre dråper. Prosessen gjentas til ionene er i gassfase.
  - Positiv modus gir $[M+nH]^{n+}$, negativ modus $[M-nH]^{n-}$. Oftest er n = 1.
  - Brukes ved lav flow (< 50 µL/min), helt ned til nL/min (nanospray). Ioniseringsgraden øker ved lavere flow, og derfor brukes smale kolonner.
  - Forelesningsfiguren viser kapillærspiss med Taylor-kjegle → ladet foreldredråpe → løsemiddelfordamping → Coulomb-fisjon ved Rayleigh-grensen → «nakne» ladde analytter [Forelesning_MS_u_notater.pdf, slide 5].
  - Nobelpris 2002 (John B. Fenn, sammen med Koichi Tanaka). ESI muliggjør ionisering av biologiske makromolekyler, gir lav grad av fragmentering («soft») og kan lett kobles til LC-systemer, siden MF fordampes [MSproteiner2026.pdf, slide 5].
  - Løsningsforslaget: en ioniseringsmetode i MS (spesielt LC-MS). Prøven ioniseres ved å danne dråper med høy ladning i et elektrisk felt. Ideell for store, polare molekyler som proteiner og peptider [LF eksamen H2024 IMAK2008.pdf, p. 3–4, oppg. 1(c)].
- **Flerladde ioner**: Molekyler med flere ioniserbare grupper kan ta opp flere protoner, f.eks. $[M+2H]^{2+}$ og $[M+H]^+$ [MSproteiner2026.pdf, slide 7]. MS måler m/z, ikke masse [MSproteiner2026.pdf, slide 7]. Protein-ladningstilstander behandles på side 16.
- **APCI (atmospheric pressure chemical ionization)**: For mindre polare forbindelser. MF går gjennom en kapillær varmet til 400–500 °C, så løsemiddel og analytt fordampes. En korona-nål danner et plasma (N₂⁺•), og en kaskade av reaksjoner gir H₃O⁺ og OH⁻, som protonerer eller deprotonerer analytten til $[M+H]^+$ eller $[M-H]^-$ [chromatographgy_basics_part2.pdf, p. 88–89; Forelesning_MS_u_notater.pdf, slide 5].
  - Følsomheten avhenger av massestrøm, ikke konsentrasjon. Tåler opptil 2 mL/min, så smale kolonner gir lite gevinst.
  - Eksempel: testosteron (ingen sure eller basiske grupper) kan ikke ioniseres med ESI, men gir $[M+H]^+$ = 289 med APCI [chromatographgy_basics_part2.pdf, p. 89].
- **APPI (atmospheric pressure photoionization)**: Ligner APCI og brukes for mest upolare forbindelser. Fordamping ved ca. 500 °C. UV-fotoner ioniserer analytten direkte ($M^{+\bullet}$, som tar H fra løsemiddelet) eller via en dopant (f.eks. toluen) [chromatographgy_basics_part2.pdf, p. 89–90].
- **ICP (inductively coupled plasma)**: For grunnstoff- og metallanalyse. Et argonplasma på ca. 10 000 K atomiserer og ioniserer prøven. Spektrene viser bare enkeltgrunnstoffer (isotopmasser). Deteksjonsgrenser fra ppt til ppb [chromatographgy_basics_part2.pdf, p. 90–91].
- **MALDI (Matrix Assisted Laser Desorption Ionization)**: MS-metode for å bestemme massen til store biomolekyler (proteiner, DNA, peptider, sukkerarter) og store organiske molekyler [Proteinkarakterisering del 1 m notater.pdf, slide 8].
  - Proteinløsningen blandes med en UV-absorberende matriksløsning på en metallbærer. Løsemiddelet dampes av, og det dannes protein-«dopa»-krystaller.
  - Bæreren settes i vakuum og bombarderes med UV-laser. Matriksen absorberer lyset, og proteinene kastes ut som ioner som separeres og registreres av masseseparatoren.
  - Forelesningsfigur: laserstråle → desorpsjon fra «target plate» → desolvatisering og ionisering (protonoverføring fra matriks) → til masseanalysator [Forelesning_MS_u_notater.pdf, slide 6].
- **Fragmenter i EI-spekteret**: Tabell over vanlige tap fra molekylionet, f.eks. M−15 (CH₃), M−17 (OH, alkohol), M−18 (H₂O), M−28 (CO / C₂H₄), M−29 (CHO / C₂H₅), M−31 (OCH₃), M−44 (CO₂), M−45 (CO₂H, karboksylsyre) [Forelesning_MS_u_notater.pdf, slide 2].
- **EI vs. CI-spekter av samme stoff (M = 200)**: EI viser mange fragmenter (43, 55, 61, 97 …) og nesten ikke noe molekylion. CI (metan) viser $[M+H]^+$ = 201 tydelig, pluss noen få fragmenter (123, 141) [Forelesning_MS_u_notater.pdf, slide 4].

## Visuals
- **Velg LC-MS-interface** · plot [chromatographgy_basics_part2.pdf, p. 86, Fig. 3.28]
  - x-akse: polaritet (upolar → polar). y-akse: molekylmasse (log, 100–10 000+).
  - Tre overlappende felt: APPI (upolar, lav masse), APCI (middels polaritet, lav–middels masse) og ESI (polar, fra lav til svært høy masse).
- **ESI-prosessen** · prosessdiagram [Forelesning_MS_u_notater.pdf, slide 5; chromatographgy_basics_part2.pdf, p. 87, Fig. 3.30]
  - Kapillær (+5 kV) med MF inn → Taylor-kjegle → ladet foreldredråpe → løsemiddelfordamping (krympende dråpe) → Coulomb-fisjon ved Rayleigh-grensen → ladde datterdråper → «nakne» ladde analytter → MS-inngang.
  - Forstøvningsgass langs kapillæren og tørkegass motstrøms.
- **APCI-kilden** · tverrsnitt [Forelesning_MS_u_notater.pdf, slide 5; chromatographgy_basics_part2.pdf, p. 88, Fig. 3.32]
  - Analyttstrøm inn i oppvarmet spraynål med forstøvningsgass → dampsky → korona-nål (lilla) → ioner → kjegle (cone).
  - Innfelt reaksjonskaskade: N₂ + e⁻ → N₂⁺• → … → H₃O⁺ + M → $[M+H]^+$, og OH⁻ + M → $[M-H]^-$.
- **EI- og CI-kilde, og EI vs. CI-spekter** · tverrsnitt + plot [Forelesning_MS_u_notater.pdf, slide 3–4; chromatographgy_basics_part1.pdf, p. 33]
  - EI: filament → elektronstråle (70 eV) på tvers av prøvestrømmen → positive ioner skyves av repeller mot analysatoren. Magneter over og under.
  - CI: samme, men med reagensgassinnløp og mer lukket kilde.
  - To spektre over hverandre for M = 200: EI med mange fragmenter, CI (metan) med tydelig 201.
- **MALDI** · prosessdiagram [Forelesning_MS_u_notater.pdf, slide 6; Proteinkarakterisering del 1 m notater.pdf, slide 7–9]
  - Target-plate med grønne matriksprikker og oransje analyttprikker → UV-laserstråle → desorpsjon (sky) → H⁺ overføres fra matriks til analytt → $[M+H]^+$ → «to mass analyzer» (TOF).
- **Interactive plot: ESI-ladningstilstander**
  - Formel: $m/z = (M + n\cdot 1)/n$. Slider n = 1–5.
  - $M$ = 1673 fra neurotensin-eksempelet [chromatographgy_basics_part2.pdf, p. 88]. Vis 1674, 837,5, 558,7, 419,3 og 335,6 som linjer i et spekter.
  - Toggle for positiv/negativ modus: $(M - n)/n$.

## Equations
### m/z i ESI
$$\frac{m}{z} = \frac{M + n\cdot m_H}{n} \;\;(\text{positiv: } [M+nH]^{n+}) \qquad \frac{m}{z} = \frac{M - n\cdot m_H}{n} \;\;(\text{negativ: } [M-nH]^{n-})$$
| Symbol | Meaning | Unit |
|---|---|---|
| $M$ | monoisotopisk masse til forbindelsen | Da |
| $m_H$ | massen til et proton (≈ 1) | Da |
| $n$ | antall protoner tatt opp eller avgitt (= ladning z) | – |
Oftest er n = 1 for små molekyler [chromatographgy_basics_part2.pdf, p. 87–88].

### APCI-reaksjonskaskade
$$N_2 + e^- \rightarrow N_2^{+\bullet} + 2e^- \;\;\rightarrow\;\; \ldots \;\;\rightarrow\;\; H_3O^+ + M \rightarrow H_2O + [M+H]^+ \qquad OH^- + M \rightarrow H_2O + [M-H]^-$$
[chromatographgy_basics_part2.pdf, p. 88, Fig. 3.32]

### APPI
$$M + h\nu \rightarrow M^{+\bullet} + e^- \qquad M^{+\bullet} + S \rightarrow [M+H]^+ + (S-H)^\bullet$$
Med dopant D: $D + h\nu \rightarrow D^{+\bullet}$, så $D^{+\bullet} + S \rightarrow [S+H]^+$, og $M + [S+H]^+ \rightarrow [M+H]^+ + S$ [chromatographgy_basics_part2.pdf, p. 90, Fig. 3.34].

## Worked example
**m/z for tre forbindelser i ESI (bokas eksempler)** [chromatographgy_basics_part2.pdf, p. 86–88]
1. **Lidokain (base, M = 234), pH 5,5.** Aminen protoneres i MF, så den måles i positiv modus. $m/z = (234 + 1)/1 = 235$, altså $[M+H]^+$.
2. **Salisylsyre (syre, M = 138), pH 5,5.** Karboksylsyren deprotoneres og er negativt ladet, så den måles i negativ modus. $m/z = (138 - 1)/1 = 137$, altså $[M-H]^-$.
3. **Neurotensin (peptid, 13 aminosyrer, M ≈ 1673).** Tre aminosyrer er positivt ladet og kan ta opp ett proton hver, så n = 3.
4. $m/z = (1673 + 3)/3 = 1676/3 = 558{,}7$, altså $[M+3H]^{3+}$.
5. **Tolkning:** Takket være flere ladninger havner et molekyl på 1673 Da på m/z 558,7. ESI flytter store molekyler ned i et lite m/z-område, og det er derfor ESI egner seg for proteiner og peptider [LF eksamen H2024 IMAK2008.pdf, p. 4].

## Faded example
**EI-spekter av benzosyre (forelesning)** [Forelesning_MS_u_notater.pdf, slide 2–3]

Spekteret har topper ved m/z 122, 105, 77 og 51. Benzosyre: C₆H₅COOH.
1. Det høyeste m/z-tallet med fornuftig masse er molekylionet: $M^{+\bullet}$ = 122.
2. 122 − 105 = 17. I fragmenttabellen er M−17 lik OH, så 105 = $(M-OH)^+$, C₆H₅CO⁺.
3. **(try)** 105 − 77 = ? Hvilket nøytralt fragment er tapt (tabellen: M−28)? → 28 = CO. 77 = C₆H₅⁺.
4. **(try)** 77 − 51 = ? → 26 = C₂H₂. 51 = C₄H₃⁺.
5. **(try)** Hvorfor ser vi så mange fragmenter med EI, og hva ville CI vist i stedet? → EI på 70 eV gir mye overskuddsenergi (ioniseringsenergi 7–10 eV), og molekylet fragmenterer. CI ville gitt tydelig $[M+H]^+$ = 123 og få fragmenter [chromatographgy_basics_part1.pdf, p. 33].

## Exam traps
- **EI i LC-MS**: Den vanligste ioniseringen i LC-MS er ESI. EI brukes i GC-MS (gassfase, vakuum) [LF eksamen H2024 IMAK2008.pdf, p. 3; chromatographgy_basics_part1.pdf, p. 33].
- **ESI for upolare stoffer**: Upolare stoffer uten sure eller basiske grupper (f.eks. testosteron) ioniseres dårlig med ESI. Bruk APCI eller APPI [chromatographgy_basics_part2.pdf, p. 89].
- **m/z = masse**: Bare når z = 1. Flerladde ioner havner på (M + n)/n [chromatographgy_basics_part2.pdf, p. 87–88; MSproteiner2026.pdf, slide 7].
- **Glemme protonmassen**: $[M+H]^+$ = M + 1 og $[M-H]^-$ = M − 1, ikke M [chromatographgy_basics_part2.pdf, p. 87].
- **ESI ved høy flow**: ESI fungerer best ved lav flow (< 50 µL/min, nanospray). APCI tåler opptil 2 mL/min [chromatographgy_basics_part2.pdf, p. 88–89].
- **MALDI er vanlig LC-MS-interface**: Bare delvis kompatibel (+/−), og brukes typisk med TOF for store biomolekyler [chromatographgy_basics_part2.pdf, p. 86].
- **Myk vs. hard snudd**: EI er hard (mye fragmentering). ESI, CI og MALDI er myke [MSproteiner2026.pdf, slide 4–5; chromatographgy_basics_part1.pdf, p. 33].

## Past exam tasks
- **H2024 oppg. 1(b)** (flervalg, 1 av 5 delspørsmål): hvilken ioniseringsmetode brukes oftest i LC-MS (ESI).
- **H2024 oppg. 1(c)** (10 p totalt, 2 p hører hit): forklar kort «ESI».

## Test yourself
**Q:** Beskriv ESI-prosessen i tre trinn.
**A:** (1) MF sprayes fra en kapillær med høy spenning, og det dannes sterkt ladde dråper (forstøvningsgass hjelper). (2) Løsemiddelet fordamper og dråpene krymper. (3) Når frastøtningen overstiger overflatespenningen, eksploderer dråpen gjentatte ganger til ionene er i gassfase [chromatographgy_basics_part2.pdf, p. 86–87].

**Q:** Hvorfor kan ikke testosteron ioniseres med ESI, og hva brukes i stedet?
**A:** Den har ingen sure eller basiske grupper. APCI gir $[M+H]^+$ = 289 [chromatographgy_basics_part2.pdf, p. 89].

**Q:** Hva er hensikten med matriksen i MALDI?
**A:** Den absorberer UV-laserlyset og overfører energi og protoner, slik at proteinene desorberes og ioniseres skånsomt [Proteinkarakterisering del 1 m notater.pdf, slide 9; Forelesning_MS_u_notater.pdf, slide 6].

**Q:** Når foretrekkes CI fremfor EI i GC-MS?
**A:** Når man trenger informasjon om molekylmassen. CI er mykere og gir tydelig $MH^+$ med få fragmenter [chromatographgy_basics_part1.pdf, p. 33].

**Q:** Hva brukes ICP-MS til?
**A:** Grunnstoff- og metallanalyse, f.eks. toksikologi og miljø. Spektrene viser isotopmassene til grunnstoffene [chromatographgy_basics_part2.pdf, p. 90–91].

## Sources
- [Forelesning_MS_u_notater.pdf, slide 2–6] (bare figurer, ingen notater. Slide 1 viser instrumenter og et EI-spekter)
- [MSproteiner2026.pdf, slide 3–7]
- [Proteinkarakterisering del 1 m notater.pdf, slide 7–11]
- [chromatographgy_basics_part1.pdf, p. 33] (p. = boksidetall; PDF-side = bokside + 16)
- [chromatographgy_basics_part2.pdf, p. 85–91] (p. = boksidetall; PDF-side = bokside − 84)
- [Eksamen_IMAK2008_24.pdf, oppg. 1(b), 1(c)] / [LF eksamen H2024 IMAK2008.pdf, p. 3–4]
