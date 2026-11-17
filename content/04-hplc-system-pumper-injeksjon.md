---
slug: 04-hplc-system-pumper-injeksjon
title: "HPLC-systemet: løsemidler, pumper og injeksjon"
topic: hplc
exam_weight: low
exam_weight_note: "Ingen egen oppgave på H24 eller H25. Bakgrunnskunnskap for HPLC-casene (H24 1(e), 1(i); H25 oppg. 6, 8)"
builds_on: [01-retensjon-og-selektivitet, 03-bandspredning-van-deemter]
used_in: [05-kolonner-og-partikler, 06-hplc-detektorer, 08-omvendt-fase-og-ionepar, 17-kvalitativ-og-kvantifiseringsmetoder]
sources: ["HPLC-1-240925 Kopier.pdf", "chromatographgy_basics_part1.pdf", "Pensum.pdf", "koffein _ISTD_student_rev2.pdf"]
---

## Pretest
**Q:** Hvilke fem hoveddeler består et HPLC-system av?
**A:** Pumpe(r), injektor, kolonne(r), detektor og databehandling (PC) [chromatographgy_basics_part1.pdf, p. 47; HPLC-1-240925 Kopier.pdf, slide 3].

**Q:** Hvorfor fyller man injeksjonsløkka med omtrent dobbelt løkkevolum?
**A:** Da bestemmes injisert volum av løkkestørrelsen, og man får god kontroll på injisert mengde [chromatographgy_basics_part1.pdf, p. 50].

**Q:** Hvorfor må mobilfasen avgasses?
**A:** Oppløst luft kan gi problemer både i pumpene og i noen detektorer [chromatographgy_basics_part1.pdf, p. 49].

## Mental model
HPLC er klassisk kolonnekromatografi med små partikler. De gir høyt mottrykk, så mobilfasen må presses gjennom med høytrykkspumper [chromatographgy_basics_part1.pdf, p. 47; HPLC-1-240925 Kopier.pdf, slide 1–2]. Systemet er en kjede: løsemiddel → pumpe → injektor → kolonne → detektor → PC, koblet med rør av rustfritt stål eller PEEK [chromatographgy_basics_part1.pdf, p. 47; HPLC-1-240925 Kopier.pdf, slide 3]. Pumpene er stempelpumper med tilbakeslagsventiler. Ett stempel suger og pumper annenhver gang, så flowen pulserer, og to hoder eller pulsdemping glatter den ut [HPLC-1-240925 Kopier.pdf, slide 5–6; chromatographgy_basics_part1.pdf, p. 48]. Prøven fylles i en løkke ved atmosfæretrykk og «svitsjes» inn i høytrykksstrømmen med en ventil [chromatographgy_basics_part1.pdf, p. 50; HPLC-1-240925 Kopier.pdf, slide 7]. Alt mellom injektor og detektor kan gi båndspredning, så små volumer og riktig prøveløsemiddel er viktig [chromatographgy_basics_part1.pdf, p. 51–52].

## Concepts and definitions
- **Klassifisering av kromatografi**: Etter mobilfase (gass, superkritisk fluid, væske) og stasjonærfase (fast eller væske). Væske–fast gir adsorpsjon (LSC), size exclusion (SEC), ionebytte (IEC), ion (IC), affinitet (AC) og flere. Væske–væske og micellær (MEKC) er egne grener. HPLC-delen av emnet dekker væskegrenen [HPLC-1-240925 Kopier.pdf, slide 1].
- **Valg av LC-metode**: Avhenger av molekylstørrelse ($^{10}\log M_r$) og polaritet/løselighet [HPLC-1-240925 Kopier.pdf, slide 3].
  - Store molekyler ($\log M_r$ ≳ 3–6): gel-permeasjon (ikke vannløselige) eller gel-filtrering (vannløselige).
  - Mindre molekyler: adsorpsjon og omvendt fase for upolare / ikke-vannløselige, fordeling og normalfase for polare, ionebytting for ioniske / vannløselige.
- **Klassisk kolonnekromatografi**: Prøven lastes på toppen, bånd separeres etter sterke vs. svake interaksjoner, og fraksjoner samles i bunnen [HPLC-1-240925 Kopier.pdf, slide 1–2].
- **HPLC**: High-performance (tidligere high-pressure) liquid chromatography. Mindre partikler i pakkematerialet fra 1970-tallet ga høyere mottrykk og krevde høytrykkspumper [chromatographgy_basics_part1.pdf, p. 47].
- **Guard-kolonne (forkolonne)**: En kort kolonne foran den analytiske, som beskytter den [chromatographgy_basics_part1.pdf, p. 47].
- **Løsemidler**: Må ha HPLC-kvalitet, f.eks. «HiPerSolv CHROMANORM Acetonitrile for HPLC – gradient grade» [HPLC-1-240925 Kopier.pdf, slide 4]. MF med salter skal alltid filtreres etter tillaging [chromatographgy_basics_part1.pdf, p. 49].
- **Avgassing**: Oppløst luft fjernes med vakuum, ultralyd eller ved erstatning med helium. Off-line: vakuumpumpe + ultralyd. On-line: He-purging eller vakuumkammer med teflonslange. Mange instrumenter har innebygd luftfjerning [HPLC-1-240925 Kopier.pdf, slide 4; chromatographgy_basics_part1.pdf, p. 49]. Avgassing av ferdigblandede løsemidler kan endre sammensetningen [chromatographgy_basics_part1.pdf, p. 49].
- **Viskositet og trykk**: Viskositeten kan endres under en gradient, og da endres mottrykket ved konstant flow. Vann/metanol har viskositetsmaksimum ved ca. 40 % metanol. Vann/acetonitril gir lavere trykk enn vann/metanol, og høyere temperatur (40 °C) gir lavere trykk enn 25 °C [chromatographgy_basics_part1.pdf, p. 48–49; HPLC-1-240925 Kopier.pdf, slide 5].
- **Stempelpumpe (pumpehode)**: Hvert hode har et bevegelig stempel, en pakning (seal) og tilbakeslagsventiler (inlet/outlet check valve). En kam (cam) driver stempelet [chromatographgy_basics_part1.pdf, p. 48, Fig. 3.2; HPLC-1-240925 Kopier.pdf, slide 5].
  - Én syklus består av innsug, der ingen flow går ut, og faktisk pumping. Det gir pulserende flow [HPLC-1-240925 Kopier.pdf, slide 5].
- **Dobbeltvirkende / to-hode stempelpumpe**: Ett hode pumper mens det andre suger. Med sirkulær eksentrisk skive får man en sinusformet profil. Etter pulsdemping blir flowen nesten jevn, og med optimert eksenter blir den nesten jevn uten demping [HPLC-1-240925 Kopier.pdf, slide 6].
- **Flow og trykk**: Vanlig flow ca. 1–10 mL/min, avhengig av kolonnestørrelse. Miniatyriserte systemer helt ned til 1–10 nL/min, ofte med split. Konvensjonelle pumper tåler opptil 400 bar, UHPLC 1000–1200 bar med spesiallagde kolonner og koblinger [chromatographgy_basics_part1.pdf, p. 48].
- **Gradientsystemer**: Krever minst to løsemiddelreservoarer og en blandeenhet. **Lavtrykksblanding**: løsemidlene blandes før høytrykksdelen. **Høytrykksblanding**: to pumper leverer hver sitt løsemiddel under trykk til et blandekammer [chromatographgy_basics_part1.pdf, p. 48–49, Fig. 3.3].
- **Vedlikehold**: Pumper skal aldri stå over natten med sterkt sure eller basiske MF eller saltløsninger. Kolonner skylles først med vannløsning (fjerner salt), så med 70–100 % metanol/acetonitril. Filtre sjekkes, fordi partikler skader ventiler og stempler og tetter innløpsfritten. Det er bedre å la pumpene gå på lav flow enn å skru av [chromatographgy_basics_part1.pdf, p. 49–50].
- **Injeksjonsventil (loop-injektor)**: I **load-posisjon** fylles løkka med sprøyte, mens MF går direkte fra pumpe til kolonne. I **inject-posisjon** dreies rotoren, og MF skyver løkkas innhold inn på kolonnen [chromatographgy_basics_part1.pdf, p. 50, Fig. 3.4; HPLC-1-240925 Kopier.pdf, slide 7].
- **Konstant-volum-injeksjon (overfylling)**: Løkka overfylles med ca. 2 × løkkevolum, og injisert volum bestemmes av løkka. Presisjon ca. 0,5 % RSD manuelt, 0,1–0,2 % RSD med autoinjektor [chromatographgy_basics_part1.pdf, p. 50–51].
- **Variabel-volum-injeksjon (delvis fylling)**: Brukes når lite prøve er tilgjengelig. Volumet bestemmes av sprøyta, og presisjonen er ca. 1,2 % RSD. Små volumer i store løkker gir betydelig fortynning [chromatographgy_basics_part1.pdf, p. 51].
- **Typiske løkkevolumer**: 10–50 µL for konvensjonelle 4,6 mm ID-kolonner. Mikroinjektorer med spor i rotoren ned til 20–50 nL for smale kolonner [chromatographgy_basics_part1.pdf, p. 51].
- **Prøveløsemiddel og refokusering**: Med MF som prøveløsemiddel fortynnes prøven i løkka, fordi det trengs 5–10 løkkevolumer for å skyve den ut. Prøveløsemiddel med lavere elueringsstyrke enn MF refokuserer prøven på kolonnetoppen, mens høyere elueringsstyrke fortynner den ytterligere. Bedre: større volum i et svakere løsemiddel enn lite volum i et sterkere [chromatographgy_basics_part1.pdf, p. 51–52].
- **Carryover**: En lavkonsentrert prøve rett etter en høykonsentrert, uten rengjøring av løkka, får overført analytt. Sett inn blanker mellom prøver ved store konsentrasjonsforskjeller [chromatographgy_basics_part1.pdf, p. 52].
- **Automatisering**: Autoinjektor med prøvebrett (ofte temperaturkontrollert), kontrollprøver med faste intervaller, strekkoder og integrert databehandling gjør døgnkontinuerlig drift mulig [chromatographgy_basics_part1.pdf, p. 50].
- **Ikke pensum**: Timed injection, kobling med SPE/trap-kolonne, beregning av maks injeksjonsvolum og beregning av fortynning i kolonnen [Pensum.pdf; chromatographgy_basics_part1.pdf, p. 52–54].

## Visuals
- **HPLC-systemet** · prosessdiagram [HPLC-1-240925 Kopier.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 48, Fig. 3.1]
  - Fra venstre: løsemiddelflaske (Solvent) → pumpe (Pump) → injektor (Injector) → HPLC-kolonne (evt. guard-kolonne først) → detektor (Detector) → avfall (Waste). Datalinje fra detektor til PC («PC for Data Acquisition»).
  - Marker høytrykksdelen (pumpe → detektor) og hvor avgasser og blandekammer sitter ved gradient.
- **Metodevalg: $\log M_r$ mot polaritet** · tabell-som-bilde [HPLC-1-240925 Kopier.pdf, slide 3]
  - y-akse: $^{10}\log M_r$ (1–6). x-akse: polaritet (upolar → polar → ionisk), med «ikke vannløselig» til venstre og «vannløselig» til høyre.
  - Overlappende ellipser: gel-permeasjon (øverst venstre), gel-filtrering (øverst høyre), adsorpsjon og omvendt fase (nederst venstre), fordeling (midt), normalfase og ionebytting (nederst høyre).
- **Stempelpumpe og flowprofil** · tverrsnitt + kurveskisse [HPLC-1-240925 Kopier.pdf, slide 5–6; chromatographgy_basics_part1.pdf, p. 48, Fig. 3.2]
  - Tverrsnitt: kam (roterende pil) → stempel (piston) i pumpehode (head) med pakning (seal). Inlet check valve nederst, outlet check valve øverst, med kuler som ventiler.
  - Kurve: sinus over tid, med positive halvperioder merket «Faktisk pumping» og negative merket «Innsug».
  - Under: 2-hode-pumpe (A/B forskjøvet halv periode) → sum etter pulsdemping (svakt bølget) → optimert eksenter (nesten flat).
- **Injeksjonsventil: load vs. inject** · prosessdiagram, to paneler [HPLC-1-240925 Kopier.pdf, slide 7; chromatographgy_basics_part1.pdf, p. 50, Fig. 3.4]
  - Seksportsventil med sprøyte (Syringe), prøveløkke (Fixed-volume sample loop), «Solvent in», «To column» og «To waste».
  - Load: sprøyte → løkke → waste, og solvent in → direkte til kolonne.
  - Inject: rotoren dreid, solvent in → gjennom løkka → til kolonne. Uthev strømmen med rød pil.
- **Trykk vs. MF-sammensetning** · plot [HPLC-1-240925 Kopier.pdf, slide 5; chromatographgy_basics_part1.pdf, p. 48–49]
  - x-akse: 100 % vann → vann/organisk 1:1 → 100 % organisk. y-akse: trykk (kgf/cm²).
  - Fire kurver: vann/metanol 25 °C (høyest, maks rundt midten), vann/metanol 40 °C, vann/acetonitril 40 °C og vann/acetonitril 25 °C (lavere, flatere).
  - Fremhev at metanol/vann har maksimum ved ca. 40 % metanol.

## Equations
Ingen ligninger i pensumdelen av dette temaet. Beregning av maks injeksjonsvolum og fortynning (bok 3.3.3–3.3.4) er markert «ikke pensum» [Pensum.pdf; chromatographgy_basics_part1.pdf, p. 53–54].

## Worked example
**Trykkendring under en vann → metanol-gradient (bok + forelesning)** [chromatographgy_basics_part1.pdf, p. 48–49; HPLC-1-240925 Kopier.pdf, slide 5]

Spørsmål: Du kjører en gradient fra 100 % vann til 100 % metanol ved konstant flow. Hvordan endres mottrykket?
1. Ved konstant flow er mottrykket bestemt av mobilfasens viskositet. Når viskositeten endres under gradienten, endres trykket.
2. Viskositeten til vann/metanol-blandinger har maksimum ved ca. 40 % metanol.
3. Fra 0 % metanol øker derfor trykket først, mot maksimum rundt 40 %.
4. Deretter synker det, til et nivå lavere enn starttrykket ved 100 % vann.
5. Forelesningsfiguren viser i tillegg at acetonitril/vann gir lavere trykk enn metanol/vann, og at 40 °C gir lavere trykk enn 25 °C.
6. Konsekvens: Trykkgrensen (f.eks. 400 bar for konvensjonelle pumper) må sjekkes ved den mest viskøse sammensetningen, ikke ved start eller slutt.

## Faded example
**Analysebetingelser i koffeinlaben** [koffein _ISTD_student_rev2.pdf, p. 1; chromatographgy_basics_part1.pdf, p. 48, 50–51]

Oppsett: Agilent 1260 Infinity II, kolonne Poroshell 120 EC-18 4,6 × 150 mm (4 µm), flow 1,2 mL/min, 25 °C, MF 85 % vann : 15 % acetonitril med 0,1 % maursyre, isokratisk 6 min, deteksjon 254 nm, injeksjonsvolum 20 µL.
1. Er flowen innenfor vanlig HPLC-område? 1,2 mL/min ligger innenfor ca. 1–10 mL/min → ja.
2. **(try)** Trengs gradientsystem med blandeenhet? → Nei, kjøringen er isokratisk med konstant sammensetning.
3. **(try)** Er 20 µL et rimelig injeksjonsvolum for en 4,6 mm ID-kolonne? → Ja, typiske løkker er 10–50 µL.
4. **(try)** Med en autoinjektor og overfylt løkke, hvilken presisjon kan forventes? → 0,1–0,2 % RSD.
5. **(try)** Hva bør gjøres med MF før bruk, og hva med kolonnen etter dagens kjøring hvis MF hadde inneholdt salt? → Avgass MF (vakuum, ultralyd eller He). Etter kjøring: skyll først med vannløsning og så med 70–100 % metanol/acetonitril [chromatographgy_basics_part1.pdf, p. 49].

## Exam traps
- **Overfylling vs. delvis fylling**: Ved overfylling bestemmer løkka volumet og presisjonen er best. Ved delvis fylling bestemmer sprøyta volumet og presisjonen er dårligere (1,2 vs. 0,5 % RSD manuelt) [chromatographgy_basics_part1.pdf, p. 50–51].
- **Prøveløsemiddel sterkere enn MF**: Gir ekstra fortynning og bredere topper. Velg et svakere løsemiddel for refokusering [chromatographgy_basics_part1.pdf, p. 51–52].
- **Trykket er størst ved ren organisk eller rent vann**: Feil for vann/metanol, der maksimum ligger rundt 40 % metanol [chromatographgy_basics_part1.pdf, p. 48–49].
- **Lav- vs. høytrykksblanding**: Ved lavtrykksblanding blandes løsemidlene før pumpen. Ved høytrykksblanding har hver komponent sin egen pumpe og blandes etter pumpene [chromatographgy_basics_part1.pdf, p. 48–49].
- **Carryover forveksles med tailing**: Carryover kommer fra forrige injeksjon. Løsningen er blanker eller rengjøring av løkka mellom prøver [chromatographgy_basics_part1.pdf, p. 52].

## Past exam tasks
- Ingen egen oppgave om pumper, avgassing eller injeksjonsventil på H2024 eller H2025.
- Indirekte: **H2025 oppg. 8** (ISTD-kvantifisering) forutsetter injeksjon og variasjon i injeksjonsvolum, se side 17. **H2024 oppg. 1(a)** spør hva en internstandard korrigerer for (variasjoner i prøvepreparering og injeksjon).

## Test yourself
**Q:** Beskriv forskjellen mellom load- og inject-posisjon i en injeksjonsventil.
**A:** I load fylles løkka med sprøyte mens MF går direkte til kolonnen. I inject dreies rotoren, og MF skyver løkkas innhold inn på kolonnen [chromatographgy_basics_part1.pdf, p. 50].

**Q:** Hvorfor gir en enkel stempelpumpe pulserende flow, og hvordan reduseres pulsingen?
**A:** Stempelet veksler mellom innsug, uten flow ut, og pumping. Pulsingen reduseres med to-hode-pumper der hodene går i motfase, med pulsdemping eller med optimert eksenter [HPLC-1-240925 Kopier.pdf, slide 5–6].

**Q:** Nevn tre metoder for avgassing av mobilfasen.
**A:** Vakuum, ultralyd og helium-purging (erstatning med He) [chromatographgy_basics_part1.pdf, p. 49; HPLC-1-240925 Kopier.pdf, slide 4].

**Q:** Hvorfor skal en kolonne med salt i MF skylles med vann før metanol/acetonitril?
**A:** For å fjerne salter først og hindre saltutfelling, korrosjon og mikrobevekst [chromatographgy_basics_part1.pdf, p. 49].

**Q:** Hvilken LC-metode passer for et vannløselig molekyl med $\log M_r$ ≈ 5?
**A:** Gel-filtrering [HPLC-1-240925 Kopier.pdf, slide 3].

## Sources
- [HPLC-1-240925 Kopier.pdf, slide 1–7] (bare figurer, ingen notater)
- [chromatographgy_basics_part1.pdf, p. 47–54] (p. = boksidetall; PDF-side = bokside + 16)
- [Pensum.pdf, p. 1]
- [koffein _ISTD_student_rev2.pdf, p. 1]
