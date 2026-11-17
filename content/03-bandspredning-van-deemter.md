---
slug: 03-bandspredning-van-deemter
title: "Båndspredning og van Deemter"
topic: krom-teori
exam_weight: high
exam_weight_note: "Flervalg på begge eksamener: H24 1(a) (hva van Deemter beskriver, hva C-leddet er), H25 oppg. 1 (partikkelstørrelse, økt MF-hastighet). Ligger også under H24 1(e) og H25 oppg. 3 (HETP)"
builds_on: [02-effektivitet-og-opplosning]
used_in: [05-kolonner-og-partikler, 11-gc-baeregass-og-injeksjon, 12-gc-kolonner-og-stasjonaerfaser, 24-ce-mobilitet-og-eof, 26-ce-metoder-og-cec]
sources: ["Kilder til Båndspredning 200826.pdf", "chromatographgy_basics_part1.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** Hvilket av van Deemter-leddene finnes ikke i en åpen kapillærkolonne?
**A:** A-leddet (eddy-diffusjon). Det finnes bare i pakkede kolonner [Kilder til Båndspredning 200826.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 6].

**Q:** Hva skjer med platehøyden når du øker mobilfasehastigheten godt over optimum?
**A:** C·u-leddet øker, og toppene blir bredere [Løsningsforslag IMAK2008 H25.pdf, oppg. 1; Kilder til Båndspredning 200826.pdf, slide 10].

**Q:** Er longitudinal diffusjon viktigst i GC eller i HPLC?
**A:** I GC. Diffusjon i gass er ca. 10⁴ ganger raskere enn i væske [chromatographgy_basics_part1.pdf, p. 6].

## Mental model
Båndspredning er uunngåelig. Platehøyden $H$ samler alle bidragene til at et smalt injisert bånd blir bredt [Kilder til Båndspredning 200826.pdf, slide 1–2; chromatographgy_basics_part1.pdf, p. 5–6]. Van Deemter deler bidragene i tre. **A**: molekylene tar ulike veier rundt partiklene. **B/u**: molekylene diffunderer fra høy til lav konsentrasjon langs kolonnen, og jo lenger de oppholder seg, jo mer. **C·u**: overføringen mellom MF og SF tar tid, så noen molekyler henger etter mens andre går foran, og det blir verre jo raskere MF strømmer [Kilder til Båndspredning 200826.pdf, slide 2–8]. B-leddet dominerer ved lav hastighet og C-leddet ved høy, så $H(u)$ har et minimum. Små partikler, tynne filmer, smale kolonner og rask diffusjon gir lav $H$ [Kilder til Båndspredning 200826.pdf, slide 10; chromatographgy_basics_part1.pdf, p. 8]. I tillegg sprer båndet seg *utenfor* kolonnen, i injektor, slanger og detektor [chromatographgy_basics_part1.pdf, p. 9; Kilder til Båndspredning 200826.pdf, slide 11].

## Concepts and definitions
- **Modeller for båndspredning**: Teoretisk platemodell, «ikke-likevektsmodell» og random walk [Kilder til Båndspredning 200826.pdf, slide 1].
- **Van Deemter-ligningen**: Beskriver forholdet mellom platehøyde og lineær strømningshastighet [LF eksamen H2024 IMAK2008.pdf, p. 1, oppg. 1(a); chromatographgy_basics_part1.pdf, p. 8].
- **A, eddy-diffusjon (multiple path diffusion)**: Molekyler tar kanaler med ulik bredde og lengde gjennom porøse strukturer, så de som var samlet ved start er spredd ut etter kolonnen. Finnes bare i pakkede kolonner [Kilder til Båndspredning 200826.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 6].
  - Store, inhomogene partikler gir stort bidrag, og bidraget er proporsjonalt med partikkelstørrelsen. Bred partikkelstørrelsesfordeling øker også eddy-diffusjonen [chromatographgy_basics_part1.pdf, p. 6].
  - Tiltak: minst mulige partikler (ulempe: økt trykk) og mest mulig lik form, altså «monodisperse» partikler [Kilder til Båndspredning 200826.pdf, slide 3].
  - I LC står eddy-diffusjon for en stor del av båndspredningen i kolonnen. «Eddy dispersion» er et mer korrekt navn [chromatographgy_basics_part1.pdf, p. 6, Info-box 1.2].
- **B, longitudinal diffusjon**: «Vanlig» diffusjon fra høy til lav konsentrasjon langs kolonneaksen [Kilder til Båndspredning 200826.pdf, slide 6; chromatographgy_basics_part1.pdf, p. 6].
  - To effekter påvirker B: (1) tid, og (2) diffusjonshastighet i MF, der $D_M$(gass) ≫ $D_M$(væske) [Kilder til Båndspredning 200826.pdf, slide 6].
  - Typiske diffusjonskoeffisienter: væsker ~10⁻⁹ m²/s, gasser ~10⁻⁵ m²/s [Kilder til Båndspredning 200826.pdf, slide 7]. Boka sier at diffusjonen i gass er ca. 10⁴ ganger høyere, så bidraget er mye viktigere i GC enn i HPLC [chromatographgy_basics_part1.pdf, p. 6].
  - Viktig for både pakkede og åpne kolonner [Kilder til Båndspredning 200826.pdf, slide 7].
- **C, motstand mot masseoverføring**: Fordi diffusjonen mellom fasene ikke går uendelig raskt, innstilles likevekten mellom fasene ikke umiddelbart. Det gir forsinkelse av deler av prøvekomponenten. Man ønsker så rask faseovergang MF → SF → MF som mulig [Kilder til Båndspredning 200826.pdf, slide 8].
  - Boka: transport av analytter ved diffusjon og konveksjon fra én fase til en annen, generelt omvendt proporsjonal med diffusjonskonstantene i hver fase [chromatographgy_basics_part1.pdf, p. 7].
  - C-leddet kvantifiserer tidsforsinkelsen for analyttens likevekt mellom fasene [LF eksamen H2024 IMAK2008.pdf, p. 2, oppg. 1(a)].
  - Deles i tre bidrag: mobilfase ($C_{MF}$), stasjonærfase ($C_{SF}$) og stillestående mobilfase ($C_{sMF}$) [Kilder til Båndspredning 200826.pdf, slide 8–9; chromatographgy_basics_part1.pdf, p. 7].
  - Tynn film og tynn kolonnediameter gir kort diffusjonsvei og lite C-bidrag. Tykk film og tykk diameter gir lang vei [Kilder til Båndspredning 200826.pdf, slide 9].
- **Forenklinger i van Deemter**: Stillestående MF gjelder bare store partikler og neglisjeres vanligvis i høyytelsessystemer. Masseoverføring i MF kan neglisjeres i GC, men ikke i HPLC. C står for SF i GC og for begge fasene i LC [chromatographgy_basics_part1.pdf, p. 8]. Med tynne filmer (≤ 0,25 µm i GC) kan $H_s$ neglisjeres [chromatographgy_basics_part1.pdf, p. 7].
- **Ønskeliste for lav H**: liten $d_p$, $d_f$, $d_c$, høy $D_M$ og $D_S$, og «riktig» $u$ [Kilder til Båndspredning 200826.pdf, slide 10].
- **Optimal u**: $u$ der $H$ har minimum. Optimal $u$ for metoden trenger ikke være den som gir lavest $H$, for det kan være bedre med en raskere analyse [Kilder til Båndspredning 200826.pdf, slide 11].
- **Partikkelstørrelse (UHPLC)**: Mindre partikler gir bedre oppløsning, men høyere trykk. 5 µm: 165 bar, $R_s$ = 5,04. 3,0 µm: 280 bar, $R_s$ = 6,44. 1,9 µm (UHPLC): 655 bar, $R_s$ = 7,54 [Kilder til Båndspredning 200826.pdf, slide 4]. En reduksjon i partikkelstørrelse gir normalt høyere platetall og bedre separasjon [Løsningsforslag IMAK2008 H25.pdf, oppg. 1].
- **Golay-ligningen**: Beskriver båndspredningen i åpne rørkolonner, der det ikke er eddy-diffusjon [chromatographgy_basics_part1.pdf, p. 8].
- **Ekstrakolonne-båndspredning**: Skjer i injektor, koblingsslanger til og fra kolonnen, detektor og noen ganger treg elektronikk eller datasystem [chromatographgy_basics_part1.pdf, p. 9; Kilder til Båndspredning 200826.pdf, slide 11].
  - I slangene skyldes den parabolsk flowprofil forårsaket av friksjon mot veggene [chromatographgy_basics_part1.pdf, p. 9].
  - «Dødvolum» i koblinger lar prøve henge igjen og blande seg [Kilder til Båndspredning 200826.pdf, slide 11].
  - Ekstrakolonnebidraget skal utgjøre < 10 % av sonespredningen [Kilder til Båndspredning 200826.pdf, slide 11].

## Visuals
- **Van Deemter-plott** · plot [Kilder til Båndspredning 200826.pdf, slide 10; chromatographgy_basics_part1.pdf, p. 8, Fig. 1.3]
  - x-akse: lineær MF-hastighet $u$ (mm/s, 0–8). y-akse: platehøyde $H$ (µm, 0–4).
  - Fire kurver: A som vannrett linje, B/u som hyperbel som faller bratt, C·u som rett linje gjennom origo, og summen $H$ med minimum.
  - Marker $u_{opt}$ ved minimum. Skyggelegg til venstre «B-dominert» og til høyre «C-dominert».
- **Eddy-diffusjon i pakket kolonne** · tverrsnitt [Kilder til Båndspredning 200826.pdf, slide 3]
  - Rektangel fylt med sirkulære partikler. Tre fargede molekylbaner (blå, rød, grønn) starter i samme punkt («Samlet ved start») og går ulike veier rundt partiklene.
  - De kommer ut på ulike steder («Spredd ut etter kolonna»). Etikett: $A = c_e \cdot d_p$.
- **Longitudinal diffusjon** · prosessdiagram, to paneler [Kilder til Båndspredning 200826.pdf, slide 6]
  - Panel 1: rør med et konsentrert bånd i midten («Høy konsentrasjon»), lav konsentrasjon på hver side.
  - Panel 2, «Etter litt tid»: båndet er bredere, med piler ut mot begge ender.
  - Etikett: $B/u = c_L D_M/u$, og «øker med tid og $D_M$, $D_M$(gass) ≫ $D_M$(væske)».
- **Masseoverføring mellom faser** · prosessdiagram, fire trinn (a–d) [Kilder til Båndspredning 200826.pdf, slide 8]
  - To parallelle akser, «mobile phase» over og «stationary phase» under, med en Gauss-fordeling på hver.
  - (a) i likevekt. (b, c) MF-delen flytter seg fremover, og røde piler viser molekyler som går opp og ned mellom fasene. (d) bredere fordeling.
  - Under: $C\cdot u = (C_{MF} + C_{SF} + C_{sMF})\cdot u$ med pilene «mobilfase», «stasjonær», «stillestående MF».
- **Film og diameter: kort vs. lang diffusjonsvei** · tverrsnitt [Kilder til Båndspredning 200826.pdf, slide 9]
  - Øverst en kapillær med tynn grønn SF-film og liten diameter, og en kort blå pil fra midten til filmen. Etikett: «tynn film, tynn kolonnediameter».
  - Nederst en kapillær med tykk film og stor diameter, og lang pil. Etikett: «tykk diameter, tykk film».
- **Interactive plot: van Deemter med partikkelstørrelse** · plot
  - Ligning: $H = A + B/u + C\,u$, med $A \propto d_p$ og $C \propto d_p^2$ (fra $A = c_e d_p$ og $C_{MF} = c_m d_p^2/D_M$) [Kilder til Båndspredning 200826.pdf, slide 3 og 9].
  - Slider $d_p$ med verdiene 5 / 3,0 / 1,9 µm, fra UHPLC-eksempelet [Kilder til Båndspredning 200826.pdf, slide 4].
  - Startverdier tilpasset bokas Fig. 1.3 (ikke kursdata): $A$ = 0,5 µm, $B$ = 0,45 µm·mm/s, $C$ = 0,2 µm·s/mm ved 5 µm, som gir minimum ≈ 1,1 µm ved $u$ ≈ 1,5 mm/s.
  - Vis $u_{opt} = \sqrt{B/C}$ og $H_{min}$ som tall. Når $d_p$ minker, skal kurven synke og bli flatere i C-området. Tekstboks med trykk/$R_s$ fra slide 4 for hver $d_p$.

## Equations
### Van Deemter-ligningen
$$H = A + \frac{B}{u} + C\cdot u$$
| Symbol | Meaning | Unit |
|---|---|---|
| $H$ | platehøyde | µm |
| $A$ | eddy-diffusjon | µm |
| $B$ | longitudinal diffusjon i MF | µm·mm/s |
| $C$ | motstand mot masseoverføring | µm·s/mm |
| $u$ | lineær MF-hastighet | mm/s |
Forenklet ligning. Stillestående MF neglisjeres vanligvis, og C gjelder SF i GC og begge fasene i LC [chromatographgy_basics_part1.pdf, p. 8, lign. 1.2; Kilder til Båndspredning 200826.pdf, slide 2].

### A-leddet
$$A = c_e \cdot d_p$$
| Symbol | Meaning | Unit |
|---|---|---|
| $c_e$ | proporsjonalitetsfaktor (konstant) | – |
| $d_p$ | diameter på partikkel i kolonnematerialet | µm |
Bare pakkede kolonner, og bare for partikler av én størrelse [Kilder til Båndspredning 200826.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 6].

### B-leddet
$$\frac{B}{u} = \frac{c_L \cdot D_M}{u}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $c_L$ | proporsjonalitetsfaktor (konstant) | – |
| $D_M$ | diffusjonskonstant for analytt i MF | m²/s |
| $u$ | lineær MF-hastighet | mm/s |
[Kilder til Båndspredning 200826.pdf, slide 7; chromatographgy_basics_part1.pdf, p. 7]

### C-leddet og delbidragene
$$C\cdot u = (C_{MF} + C_{SF} + C_{sMF})\cdot u \qquad C_x = c \cdot \frac{d^2}{D_x}$$
$$C_{MF} = c_m\frac{d_{c/p}^2}{D_M} \qquad C_{SF} = c_s\frac{d_f^2}{D_S} \qquad C_{sMF} = c_{stm}\frac{d_p^2}{D_M}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $c_m, c_s, c_{stm}$ | proporsjonalitetskonstanter | – |
| $d_p$ | partikkeldiameter | µm |
| $d_c$ | diameter på åpen kolonne (MF) | µm |
| $d_f$ | tykkelse på SF-film | µm |
| $D_M, D_S$ | diffusjonskonstanter i MF og SF | m²/s |
Alle C-bidrag går som (lengde)² delt på diffusjonskonstant, så det lønner seg mye å halvere en dimensjon [Kilder til Båndspredning 200826.pdf, slide 9; chromatographgy_basics_part1.pdf, p. 7]. For åpen kolonne er $c_m = (1+6k+11k^2)/96(1+k)^2$ [chromatographgy_basics_part1.pdf, p. 7].

### Full van Deemter (forelesningsform)
$$H = c_e d_p + \frac{c_L D_M}{u} + \left(\frac{c_{m/mp}\, d_{c/p}^2}{D_M} + \frac{c_s\, d_f^2}{D_S} + \frac{c_{stm}\, d_p^2}{D_M}\right) u$$
Fremhevet i forelesningen. Ønskelisten følger av ligningen: liten $d_{p,f,c}$, høy $D_{M/S}$ og «riktig» $u$ [Kilder til Båndspredning 200826.pdf, slide 10].

### Golay-ligningen (åpne rørkolonner)
$$H = \frac{2D_m}{u} + f_g\frac{d_c^2\,u}{D_m} + f_s\frac{d_f^2\,u}{D_s}$$
$$f_g = \frac{1+6k+11k^2}{96(1+k)^2} \qquad f_s = \frac{(2/3)\,k}{(1+k)^2}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $d_c$ | kolonnens indre diameter | µm |
| $d_f$ | filmtykkelse | µm |
| $k$ | retensjonsfaktor | – |
Ingen A-ledd, siden det ikke er eddy-diffusjon i åpne rør [chromatographgy_basics_part1.pdf, p. 8, lign. 1.3].

### Ekstrakolonne: båndspredning i tom slange
$$\sigma^2 = \frac{\pi r^2 L}{24 D_m F} \qquad H = \frac{r^2 u}{24 D_m}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\sigma^2$ | variansbidrag | s² |
| $r$ | slangens radius | mm |
| $L$ | slangelengde | mm |
| $F$ | volumetrisk flow | mL/min |
| $u$ | lineær hastighet $L/t$ | mm/s |
Forårsaket av parabolsk flowprofil i røret [chromatographgy_basics_part1.pdf, p. 9, lign. 1.4].

## Worked example
**H25 oppg. 1, to av flervalgene forklart med van Deemter** [IMAK2008 eksamen H2025.pdf, oppg. 1; Løsningsforslag IMAK2008 H25.pdf, p. 1–2]

*a) «En reduksjon i partikkelstørrelse i pakkede kolonner vil normalt føre til …»*
1. Finn leddene som avhenger av $d_p$: $A = c_e d_p$ og $C_{MF}$, $C_{sMF} \propto d_p^2$ [Kilder til Båndspredning 200826.pdf, slide 3, 9].
2. Mindre $d_p$ gir mindre $A$ og mye mindre C-ledd (kvadratisk), så $H$ synker.
3. $N = L/H$, så $N$ øker [chromatographgy_basics_part1.pdf, p. 10].
4. $R_s \propto \sqrt{N}$, så separasjonen blir bedre [chromatographgy_basics_part1.pdf, p. 13]. Bekreftet av forelesningseksempelet: 5 µm gir $R_s$ = 5,04 og 1,9 µm gir 7,54 [Kilder til Båndspredning 200826.pdf, slide 4].
5. **Svar:** høyere plateantall og bedre separasjon. Pris: mye høyere trykk (165 → 655 bar).

*b) «Økt mobilfasehastighet i HPLC gir typisk …»*
1. Over $u_{opt}$ dominerer $C\cdot u$, som vokser lineært med $u$, mens $B/u$ allerede er lite [Kilder til Båndspredning 200826.pdf, slide 10].
2. Analytten rekker ikke å innstille likevekt mellom fasene, så mer av båndet henger etter eller løper foran [Kilder til Båndspredning 200826.pdf, slide 8].
3. **Svar:** økt C-term og bredere topper.

## Faded example
**H24 oppg. 1(a), to flervalg om van Deemter** [Eksamen_IMAK2008_24.pdf, oppg. 1(a); LF eksamen H2024 IMAK2008.pdf, p. 1–2]

*a) «Hva beskriver Van Deemter-ligningen?»*
1. Skriv ligningen: $H = A + B/u + C\cdot u$.
2. Identifiser variablene: venstresiden er platehøyde, og den uavhengige variabelen er $u$.
3. **(try)** Velg alternativ. → Forholdet mellom platehøyde og lineær strømningshastighet.

*b) «Hva er hovedformålet med masseoverføringsmotstand (C-term)?»*
4. **(try)** Hvilket fysisk fenomen ligger bak C? → At diffusjonen mellom fasene ikke er uendelig rask, så likevekten ikke innstilles umiddelbart [Kilder til Båndspredning 200826.pdf, slide 8].
5. **(try)** Eliminer distraktorene: «turbulens/ujevnheter i kolonnen» → hvilket ledd? (A). «diffusjon av analytt i MF» → hvilket ledd? (B).
6. **(try)** Velg alternativ. → Å kvantifisere tidsforsinkelsen for analyttens likevekt mellom faser.

## Exam traps
- **A, B og C blandet sammen i flervalg**: Ujevnheter/flere veier = A, diffusjon langs kolonnen i MF = B, forsinket likevekt mellom faser = C. Distraktorene på H24 bygger nettopp på dette [LF eksamen H2024 IMAK2008.pdf, p. 2].
- **Eddy-diffusjon i kapillær-GC**: Finnes ikke. Åpne rørkolonner har ikke A-ledd, og der gjelder Golay [chromatographgy_basics_part1.pdf, p. 6, 8; Kilder til Båndspredning 200826.pdf, slide 3].
- **Longitudinal diffusjon «bare i GC»**: Den er viktig for både pakkede og åpne kolonner, men størst i GC fordi $D_M$ i gass er ~10⁴ ganger større [Kilder til Båndspredning 200826.pdf, slide 7; chromatographgy_basics_part1.pdf, p. 6].
- **«Høyere u gir alltid bredere topper»**: Under $u_{opt}$ synker $H$ når $u$ øker, fordi B/u minker. Flervalget på H25 forutsetter normal drift over optimum [Kilder til Båndspredning 200826.pdf, slide 10; Løsningsforslag IMAK2008 H25.pdf, oppg. 1].
- **«C-termen øker»**: Konstanten $C$ endres ikke med $u$. Det er bidraget $C\cdot u$ som øker. Løsningsforslaget skriver «økt C-term» i betydningen bidraget [Løsningsforslag IMAK2008 H25.pdf, oppg. 1].
- **Minste partikler alltid best**: Mindre $d_p$ gir lavere $H$, men ulempen er økt trykk (655 bar ved 1,9 µm) [Kilder til Båndspredning 200826.pdf, slide 3–4].
- **$u_{opt}$ = beste driftshastighet**: Ikke nødvendigvis. Litt høyere $u$ kan gi raskere analyse med akseptabel effektivitet [Kilder til Båndspredning 200826.pdf, slide 11].
- **Glemme ekstrakolonne-effekter**: Injeksjon, detektor, koblinger og dødvolum gir også båndspredning, og bør være < 10 % av total sonespredning [Kilder til Båndspredning 200826.pdf, slide 11; chromatographgy_basics_part1.pdf, p. 9].

## Past exam tasks
- **H2024 oppg. 1(a)** (flervalg, 2 av 5 delspørsmål): hva van Deemter-ligningen beskriver, og hva C-leddet er.
- **H2024 oppg. 1(e)** (6 p, delvis): parametere som forbedrer oppløsning i HPLC, inkl. partikkelstørrelse, strømningshastighet og kolonnelengde/diameter (bakgrunnen er van Deemter).
- **H2025 oppg. 1** (flervalg, 2 av 5 delspørsmål): effekt av redusert partikkelstørrelse og av økt MF-hastighet.
- **H2025 oppg. 3** (begrepsforklaring, delvis): HETP, som er platehøyden van Deemter beskriver.

## Test yourself
**Q:** Hvorfor gir halvering av partikkeldiameteren større effekt på C-leddet enn på A-leddet?
**A:** $A \propto d_p$, mens $C_{MF}$ og $C_{sMF} \propto d_p^2$. Halvering gir halvert A, men bare en firedel av C [Kilder til Båndspredning 200826.pdf, slide 3, 9].

**Q:** Hvilke to effekter påvirker B-leddet?
**A:** Tid (hvor lenge analytten oppholder seg i kolonnen) og diffusjonshastigheten i MF ($D_M$) [Kilder til Båndspredning 200826.pdf, slide 6].

**Q:** Hvorfor kan masseoverføring i MF neglisjeres i GC, men ikke i HPLC?
**A:** I GC er $D_M$ stor, så $C_{MF} \propto d^2/D_M$ blir lite. I væske er $D_M$ ~10⁴ ganger mindre [chromatographgy_basics_part1.pdf, p. 6, 8].

**Q:** Nevn tre kilder til båndspredning utenfor kolonnen.
**A:** Injektor, koblingsslanger/overganger (dødvolum) og detektor, evt. treg elektronikk eller datasystem [chromatographgy_basics_part1.pdf, p. 9; Kilder til Båndspredning 200826.pdf, slide 11].

**Q:** Hva er «ønskelisten» for lav platehøyde?
**A:** Liten $d_p$, $d_f$, $d_c$, høy $D_M$/$D_S$, og «riktig» $u$ [Kilder til Båndspredning 200826.pdf, slide 10].

## Sources
- [Kilder til Båndspredning 200826.pdf, slide 1–4, 6–11] (slide 5, 12 og 13 er tomme)
- [chromatographgy_basics_part1.pdf, p. 5–10, 13] (p. = boksidetall; PDF-side = bokside + 16)
- [Eksamen_IMAK2008_24.pdf, oppg. 1(a), 1(e)]
- [LF eksamen H2024 IMAK2008.pdf, p. 1–2, 5]
- [IMAK2008 eksamen H2025.pdf, oppg. 1, 3]
- [Løsningsforslag IMAK2008 H25.pdf, p. 1–2]
