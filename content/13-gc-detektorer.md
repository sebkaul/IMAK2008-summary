---
slug: 13-gc-detektorer
title: "GC-detektorer"
topic: gc
exam_weight: low
exam_weight_note: "H25 oppg. 2 flervalg (2 av 5 p: hvilken GC-detektor gir strukturinformasjon, hva ECD er følsom for). FID inngår i H25 oppg. 4-oppsettet"
builds_on: [11-gc-baeregass-og-injeksjon, 12-gc-kolonner-og-stasjonaerfaser]
used_in: [14-ms-ionisering, 18-metodevalidering-lod-loq]
sources: ["Gasskromatografi m notater.pdf", "chromatographgy_basics_part1.pdf", "Pensum.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** Hvilken GC-detektor er mest brukt?
**A:** FID (flammeionisasjonsdetektor) [Gasskromatografi m notater.pdf, slide 15; chromatographgy_basics_part1.pdf, p. 28].

**Q:** Hvilken GC-detektor er spesielt følsom for halogenerte forbindelser?
**A:** ECD (elektroninnfangningsdetektor) [Løsningsforslag IMAK2008 H25.pdf, oppg. 2; chromatographgy_basics_part1.pdf, p. 31].

**Q:** Hva skjer med signalet fra en massefølsom detektor hvis gasstrømmen stoppes?
**A:** Det blir ingen massestrøm, og dermed ikke noe signal [Gasskromatografi m notater.pdf, slide 16].

## Mental model
GC-detektoren sitter rett på kolonneutløpet og må være varm (minst 20 °C over høyeste kolonnetemperatur), slik at ingenting kondenserer [chromatographgy_basics_part1.pdf, p. 27]. Detektorene skiller seg på tre akser [Gasskromatografi m notater.pdf, slide 15–16; chromatographgy_basics_part1.pdf, p. 27]:
- **Hva de reagerer på**: universell (TCD) eller selektiv (ECD for elektronegative grupper, NPD for N/P).
- **Hva signalet er proporsjonalt med**: massestrøm eller konsentrasjon.
- **Om analytten ødelegges**: destruktiv eller ikke-destruktiv.

FID brenner prøven i en H₂-flamme og måler ionene som dannes. Den ser nesten alt organisk, er svært følsom og har stort lineært område [Gasskromatografi m notater.pdf, slide 16; chromatographgy_basics_part1.pdf, p. 30]. MS er den eneste som gir strukturinformasjon [Løsningsforslag IMAK2008 H25.pdf, oppg. 2; chromatographgy_basics_part1.pdf, p. 33].

## Concepts and definitions
- **Vanligste GC-detektorer**: FID (vanligst!), TCD, ECD, NPD og MS [Gasskromatografi m notater.pdf, slide 15].
- **Viktige parametere for detektorer**: følsomhet, støy, LOD/LOQ, lineært område, selektiv/spesifikk/universell, og massesensitiv/konsentrasjonssensitiv [Gasskromatografi m notater.pdf, slide 15]. LOD og LOQ behandles på side 18.
- **Detektortemperatur**: Minst 20 °C over høyeste kolonnetemperatur, for å unngå kondensasjon [chromatographgy_basics_part1.pdf, p. 27].
- **Massesensitiv detektor**: Signalet er proporsjonalt med mengde analytt per tidsenhet, dvs. den «teller» antall molekyler [Gasskromatografi m notater.pdf, slide 16]. Toppareal er uavhengig av gasstrømmen. Massesensitive detektorer er typisk destruktive [chromatographgy_basics_part1.pdf, p. 27].
- **Konsentrasjonsfølsom detektor**: Signalet er proporsjonalt med konsentrasjonen av analytt i MF [Gasskromatografi m notater.pdf, slide 16]. Toppareal avhenger omvendt av gasstrømmen, så god flowkontroll trengs for kvantifisering [chromatographgy_basics_part1.pdf, p. 27].
- **Stopp i MF-flow (forelesningsfigur)**: Massefølsom detektor gir ingen massestrøm, så signalet går til null og kommer tilbake ved restart. Konsentrasjonsfølsom detektor ser konstant konsentrasjon, så signalet blir stående konstant [Gasskromatografi m notater.pdf, slide 16].
- **Destruktiv vs. ikke-destruktiv**: FID er destruktiv. UV (i HPLC) er ikke-destruktiv. Ikke-destruktive detektorer kan kobles i serie [Gasskromatografi m notater.pdf, slide 16].
- **FID (flammeionisasjonsdetektor)**: Selektiv, men tilnærmet universell. Prøven forbrennes i en H₂-flamme, og ionene som dannes detekteres. Destruktiv, massesensitiv, stort lineært område og lav LOD [Gasskromatografi m notater.pdf, slide 16].
  - Oppsett: bæregass blandes med H₂ i en oppvarmet sone (300–350 °C) og går gjennom en dyse (jet). Luft kommer i egen kanal. Forhold bæregass : H₂ : luft ≈ 1 : 1 : 10 [chromatographgy_basics_part1.pdf, p. 28].
  - Mekanisme i reduserende sone: CH-radikaler dannes fra hydrokarboner og gir formylkationer (CHO⁺) + e⁻. 300 V mellom dyse og kollektor gir en strøm proporsjonal med mengden forbrent forbindelse, som forsterkes i et elektrometer [chromatographgy_basics_part1.pdf, p. 30].
  - Detekterer alle organiske forbindelser med C og H, unntatt maursyre og metan. Minste detekterbare mengde 0,01–0,1 ng, dynamisk område 10⁷ [chromatographgy_basics_part1.pdf, p. 30].
- **TCD (varmetrådsdetektor)**: Motstanden måles på to oppvarmede filamenter. Når prøvemolekyler passerer, endres varmeledningsevnen og temperaturen (og dermed motstanden), og det gir signal. Universell, konsentrasjonssensitiv, ikke-destruktiv, middels følsom, godt lineært område. Brukes kun for pakkede kolonner [Gasskromatografi m notater.pdf, slide 17].
  - Boka: to kanaler, én med ren bæregass (referanse) og én med eluat, koblet i en Wheatstone-bro. He og H₂ har høy varmeledningsevne, N₂ lavere. Alle forbindelser med lavere ledningsevne enn bæregassen detekteres. Minste detekterbare mengde ca. 10 ng. Brukes for lette og permanente gasser i pakkede eller PLOT-kolonner, og egner seg i bærbare GC-er [chromatographgy_basics_part1.pdf, p. 28].
- **NPD (nitrogen-fosfor-detektor)**: En selektiv versjon av FID. Bruker en oppvarmet perle (pellet) av et alkalisk salt (rubidiumsilikat). Selektiv for P og N (S og B) [Gasskromatografi m notater.pdf, slide 17; chromatographgy_basics_part1.pdf, p. 30–31].
  - Minste detekterbare ca. 10 pg N og 5 pg P. Brukes f.eks. for pesticider i mat og miljø [chromatographgy_basics_part1.pdf, p. 31].
- **ECD (elektroninnfangningsdetektor)**: En β-emitter reagerer med bæregassen og produserer e⁻, som gir en strøm som måles. Analytter som fanger e⁻ endrer strømmen og gir opphav til signal. Selektiv, konsentrasjonssensitiv, ikke-destruktiv, lite lineært område (10²) [Gasskromatografi m notater.pdf, slide 18].
  - Selektiv for organiske forbindelser med elektroninnfangende grupper: halogener, nitrogrupper, konjugerte karbonyler [chromatographgy_basics_part1.pdf, p. 31].
  - β-kilde ³H eller ⁶³Ni. Med N₂ som bæregass dannes termiske elektroner. Med He tilsettes reagensgass (argon/metan 95/5) [chromatographgy_basics_part1.pdf, p. 32].
  - Minste detekterbare ca. 1 pg. Svært følsom for forurensning, og kan ikke brukes med prøver løst i klorerte løsemidler. Boka oppgir lineært område 10⁴. Brukes til sporanalyse av pesticider og legemidler med elektronegative grupper [chromatographgy_basics_part1.pdf, p. 32].
  - Mest følsom for halogenerte forbindelser [Løsningsforslag IMAK2008 H25.pdf, oppg. 2].
- **MS som GC-detektor**: Ionekilde, masseanalysator (m/z) og iondetektor. Massesensitiv. Gir strukturinformasjon i tillegg til kvantifisering [chromatographgy_basics_part1.pdf, p. 32–33]. Er den GC-detektoren som gir strukturell informasjon [Løsningsforslag IMAK2008 H25.pdf, oppg. 2].
  - Vanligst er EI (70 eV), som gir fragmentering og reproduserbare spektre for biblioteksøk. CI er mykere og gir mest MH⁺, brukt når molekylmasse trengs [chromatographgy_basics_part1.pdf, p. 33]. Detaljer på side 14.
  - Interface: trykkforskjellen mellom GC (760 torr) og MS (10⁻⁵–10⁻⁷ torr) er eneste problem. Kapillær-GC (1–2 mL/min) passer, og ofte brukes split-interface. Kvadrupol er vanligst i GC-MS. Typisk minste detekterbare mengde med EI er 10 pg i full scan og 1 pg i SIM [chromatographgy_basics_part1.pdf, p. 33–34].
- **Andre detektorer (oversikt)** [chromatographgy_basics_part1.pdf, p. 35; Gasskromatografi m notater.pdf, slide 18]:
  - FPD: optisk, destruktiv, selektiv for S og P.
  - Kjemiluminescens: optisk, destruktiv, selektiv for S eller N.
  - ELCD: selektiv for halogener, S, N.
  - PID: ionisering, ikke-destruktiv, mulig selektiv, egner seg i bærbare GC-er.
  - Atomemisjonsdetektor (AED) og FTIR-detektor er ikke pensum [Pensum.pdf].
- **Oppsummeringstabell (forelesning)** [Gasskromatografi m notater.pdf, slide 18]:
  - FID: ionisering, destruktiv, universell (-ish).
  - NPD/TID: ionisering, destruktiv, selektiv for N, P (S og B).
  - TCD: fysikalsk, ikke-destruktiv, universell.
  - ECD: ionisering, ikke-destruktiv, struktur-selektiv.
  - MS: ionisering, destruktiv, universell.

## Visuals
- **Masse- vs. konsentrasjonsfølsom detektor ved stopp i flow** · kurveskisse, to paneler [Gasskromatografi m notater.pdf, slide 16]
  - x-akse: tid ($t_R$). y-akse: signal. Markører «MF stop» og «restart» midt i en topp.
  - Øverst (massefølsom): toppen kuttes til null mellom stop og restart, merket «Ingen massestrøm – ikke noe signal».
  - Nederst (konsentrasjonsfølsom): signalet flater ut og holdes konstant mellom stop og restart, merket «konstant konsentrasjon – konstant signal».
- **FID** · tverrsnitt [Gasskromatografi m notater.pdf, slide 16; chromatographgy_basics_part1.pdf, p. 30, Fig. 2.8]
  - Nedenfra: bæregass + hydrogen inn → flammespiss (jet) → flamme. Luft i egen kanal. Tennspiral ved siden av. Kollektor over flammen, 200–300 V mot jet, og elektrometer → skriver.
  - Innfelt tekst: CH• → CHO⁺ + e⁻ i flammens reduserende sone.
- **ECD** · tverrsnitt [Gasskromatografi m notater.pdf, slide 18; chromatographgy_basics_part1.pdf, p. 31, Fig. 2.10]
  - Gass fra kolonnen + evt. hjelpegass («make-up gas») inn nedenfra → kammer med β-emitter (⁶³Ni) på veggen → anode øverst → elektrometer.
  - Piler: β⁻ ioniserer N₂ og gir e⁻ (stående strøm). En halogenert analytt fanger e⁻, og strømmen synker, som gir signalet.
- **TCD** · tverrsnitt [Gasskromatografi m notater.pdf, slide 17; chromatographgy_basics_part1.pdf, p. 28, Fig. 2.7]
  - Metallblokk med to kanaler og et filament i hver. Venstre: referansegass-strøm (ren bæregass). Høyre: bæregass fra kolonnen. Begge koblet i Wheatstone-bro.
- **Detektortabell** · tabell-som-bilde [Gasskromatografi m notater.pdf, slide 18]
  - Kolonnene Navn | forkortelse | type | destruktiv/ikke | universell/selektiv | lineært område | eksempel-LOD, for FID, TCD, ECD, NPD og MS, med tall fra bok p. 28–34.
- **Interactive plot: toppareal vs. bæregasstrøm**
  - Massefølsom: $A = R_m k\, m$ (flat linje). Konsentrasjonsfølsom: $A = R_c k\, m / F$ (synkende hyperbel) [chromatographgy_basics_part1.pdf, p. 27, lign. 2.1–2.2].
  - Slider $F$ 0,5–3 mL/min, startverdi 1,2 mL/min fra H25 oppg. 4 [IMAK2008 eksamen H2025.pdf, oppg. 4].
  - Vis relativt areal for FID (masse) og TCD/ECD (konsentrasjon) samtidig.

## Equations
### Massesensitiv detektor
$$S = R_m \frac{dm}{dt} \qquad A = R_m\, k\, m$$
| Symbol | Meaning | Unit |
|---|---|---|
| $S$ | signal | relativ |
| $R_m$ | responsfaktor (varierer mellom analytter) | – |
| $dm/dt$ | massestrøm av analytt | ng/s |
| $A$ | toppareal | relativ |
| $k$ | systemkonstant | – |
| $m$ | analyttmasse | ng |
Arealet er uavhengig av gasstrømmen [chromatographgy_basics_part1.pdf, p. 27, lign. 2.1].

### Konsentrasjonsfølsom detektor
$$S = R_c\, x_A \qquad x_A = \frac{F_A}{F_A + F_M} \qquad A = R_c\, k\, \frac{m}{F}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $R_c$ | responsfaktor | – |
| $x_A$ | molfraksjon analytt i MF | – |
| $F_A$, $F_M$ | mol analytt og mol MF per tidsenhet | mol/s |
| $F$ | total strøm ($F_A + F_M$, ≈ $F_M$) | mL/min |
Arealet avhenger omvendt av strømmen, så god flowkontroll trengs [chromatographgy_basics_part1.pdf, p. 27, lign. 2.2].

### MS-signal i GC
$$S = \frac{dm}{dt} = C \cdot F \cdot R$$
| Symbol | Meaning | Unit |
|---|---|---|
| $C$ | konsentrasjon | ng/mL |
| $F$ | MF-strøm | mL/min |
| $R$ | split ratio (hvis split brukes) | – |
[chromatographgy_basics_part1.pdf, p. 33, lign. 2.3]

## Worked example
**H25 oppg. 2, de to GC-detektorspørsmålene** [IMAK2008 eksamen H2025.pdf, oppg. 2; Løsningsforslag IMAK2008 H25.pdf, oppg. 2]

*a) «Hvilken detektor i GC gir strukturell informasjon?»* (FID, TCD, MS, ECD)
1. FID gir et ionestrøm-signal proporsjonalt med mengden forbrent organisk materiale, uten informasjon om hva molekylet er [chromatographgy_basics_part1.pdf, p. 30].
2. TCD måler bare endret varmeledningsevne [chromatographgy_basics_part1.pdf, p. 28].
3. ECD måler fall i strøm når elektroner fanges, så den er selektiv, men gir ingen struktur [chromatographgy_basics_part1.pdf, p. 32].
4. MS gir et massespekter med molekylion og fragmenter, som kan sammenlignes med bibliotek [chromatographgy_basics_part1.pdf, p. 33].
5. **Svar:** MS.

*b) «ECD-detektor (GC) er mest følsom for …»* (halogenerte forbindelser, hydrokarboner, enkle alkoholer, alkalimetaller)
6. ECD responderer på forbindelser med høy elektronaffinitet som fanger termiske elektroner: halogener, nitro, konjugerte karbonyler [chromatographgy_basics_part1.pdf, p. 31–32].
7. Hydrokarboner og enkle alkoholer har ingen elektroninnfangende grupper. Alkalimetaller er ikke GC-analytter (og alkalisalt er tvert imot perlen i NPD).
8. **Svar:** Halogenerte forbindelser.

## Faded example
**Velg detektor (forelesning + bok)** [Gasskromatografi m notater.pdf, slide 15–18; chromatographgy_basics_part1.pdf, p. 28–32]
1. Case A: Permanente gasser (H₂, O₂, N₂, CH₄, CO) på molekylsikt-kolonne. FID ser ikke disse (ikke organiske C–H, unntatt metan), så det trengs en universell detektor → TCD [chromatographgy_basics_part1.pdf, p. 28, 36].
2. **(try)** Case B: Spormengder klorholdige pesticider i miljøprøve. → ECD. Hva må du ikke bruke som prøveløsemiddel? → Klorerte løsemidler.
3. **(try)** Case C: N-holdige legemidler i en kompleks matriks der FID gir for mye bakgrunn. → NPD.
4. **(try)** Case D: Generell analyse av hydrokarboner og løsemidler (som H25 oppg. 4). → FID: tilnærmet universell for organiske forbindelser, lav LOD og stort lineært område.
5. **(try)** Hvilken av detektorene over kan kobles foran en annen i serie, og hvorfor? → TCD eller ECD (ikke-destruktive). FID og MS ødelegger analytten [Gasskromatografi m notater.pdf, slide 16–18].

## Exam traps
- **FID detekterer «alt»**: Ikke maursyre, metan eller permanente uorganiske gasser. FID krever C–H som kan forbrennes [chromatographgy_basics_part1.pdf, p. 30].
- **ECD er destruktiv**: Nei. ECD er ikke-destruktiv. FID, NPD og MS er destruktive [Gasskromatografi m notater.pdf, slide 18].
- **Masse- og konsentrasjonsfølsom forveksles**: FID og MS er massesensitive (areal uavhengig av flow). TCD og ECD er konsentrasjonsfølsomme (areal avhenger av flow) [Gasskromatografi m notater.pdf, slide 16–18; chromatographgy_basics_part1.pdf, p. 27].
- **ECDs lineære område**: Forelesningen skriver 10², boka 10⁴. Uansett er det lite sammenlignet med FID (10⁷) [Gasskromatografi m notater.pdf, slide 18; chromatographgy_basics_part1.pdf, p. 30, 32].
- **NPD er en helt egen type**: Den er en selektiv versjon av FID med en oppvarmet alkalisalt-perle [Gasskromatografi m notater.pdf, slide 17].
- **HPLC- og GC-detektorer blandes**: UV, RI og fluorescens er HPLC-detektorer. FID, TCD, ECD og NPD er GC-detektorer. H25 oppg. 2 blander begge i samme flervalgssett [IMAK2008 eksamen H2025.pdf, oppg. 2].

## Past exam tasks
- **H2025 oppg. 2** (flervalg, 2 av 5 delspørsmål): hvilken GC-detektor gir strukturell informasjon (MS), og hva ECD er mest følsom for (halogenerte forbindelser).
- **H2025 oppg. 4** (indirekte): FID er detektoren i GC-casen. Ingen deloppgave spør om detektoren.

## Test yourself
**Q:** Forklar kort hvordan FID gir signal.
**A:** Prøven forbrennes i en H₂/luft-flamme. CH-radikaler danner CHO⁺ + e⁻, og med 300 V mellom dyse og kollektor gir ionene en strøm proporsjonal med mengden forbrent forbindelse [chromatographgy_basics_part1.pdf, p. 30; Gasskromatografi m notater.pdf, slide 16].

**Q:** Hvorfor kreves god flowkontroll for kvantifisering med TCD, men ikke med FID?
**A:** TCD er konsentrasjonsfølsom, så arealet avhenger omvendt av flowen. FID er massesensitiv, så arealet er uavhengig av flowen [chromatographgy_basics_part1.pdf, p. 27].

**Q:** Hvorfor tilsettes argon/metan som reagensgass i ECD når He er bæregass?
**A:** He ioniseres ikke lett. Reagensgassen gir de termiske elektronene som trengs til den stående strømmen [chromatographgy_basics_part1.pdf, p. 32].

**Q:** Hvorfor brukes ofte et split-interface mellom GC og MS?
**A:** Hvis kolonneenden går rett inn i ionekilden, kan varierende trykk gi varierende retensjonstider. Split-interfacet holder forholdene stabile [chromatographgy_basics_part1.pdf, p. 34].

**Q:** Hvilken detektor brukes for lette og permanente gasser, og hvorfor?
**A:** TCD. Den er universell og detekterer alle forbindelser med lavere varmeledningsevne enn bæregassen [chromatographgy_basics_part1.pdf, p. 28].

## Sources
- [Gasskromatografi m notater.pdf, slide 15–18]
- [chromatographgy_basics_part1.pdf, p. 27–35] (p. = boksidetall; PDF-side = bokside + 16. Tabell 2.4 på p. 29 er skannet rotert og ikke lesbar i OCR, så verdiene er hentet fra brødteksten)
- [Pensum.pdf, p. 1]
- [IMAK2008 eksamen H2025.pdf, oppg. 2, 4] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 2]
