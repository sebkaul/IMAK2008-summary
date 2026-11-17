---
slug: 24-ce-mobilitet-og-eof
title: "Kapillærelektroforese: prinsipp, elektroforetisk mobilitet og EOF"
topic: ce
exam_weight: medium
exam_weight_note: "H24 2(c) (5 p, flat vs. parabolsk flowprofil) og 2(e) (4 p, EOF-pH, CE-utsagn, elueringsrekkefølge). H25 oppg. 11 (4 p, CE vs. HPLC), oppg. 9 (linjene «EOF viktig», «platehøyder < 1 µm», «nL») og oppg. 13 iii (EOF og flat profil i CEC)"
builds_on: [19-elektroforese-teori-og-geler, 02-effektivitet-og-opplosning, 03-bandspredning-van-deemter]
used_in: [25-ce-injeksjon-og-deteksjon, 26-ce-metoder-og-cec]
sources: ["Kapillærelektroforese del 1 m notater.pdf", "chromatographgy_basics_part2.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** Hva driver væsken gjennom kapillæret i CE, og hva driver den i HPLC?
**A:** I CE gjør elektroosmotisk flow (EOF) det, skapt av påført spenning. I HPLC er det en pumpe (trykk) [Kapillærelektroforese del 1 m notater.pdf, slide 15, 22; Løsningsforslag IMAK2008 H25.pdf, oppg. 11].

**Q:** I hvilken rekkefølge når kationer, nøytrale og anioner detektoren (normal polaritet, EOF mot katoden)?
**A:** Først kationer, så nøytrale (sammen, med EOF-hastighet), så anioner [Kapillærelektroforese del 1 m notater.pdf, slide 17–19].

**Q:** Over hvilken pH får man EOF i et fused silica-kapillær?
**A:** pH > 3 (kraftig over pH 5) [Kapillærelektroforese del 1 m notater.pdf, slide 12; chromatographgy_basics_part2.pdf, p. 137; LF eksamen H2024 IMAK2008.pdf, oppg. 2e].

## Mental model
Silikaveggen i kapillæret er negativt ladet. Kationer fra bufferen samler seg langs den, og når spenningen settes på, vandrer de mot katoden og drar hele væskesøylen med seg. Det er EOF [Kapillærelektroforese del 1 m notater.pdf, slide 15]. Fordi drivkraften virker langs hele veggen og ikke som trykk fra én ende, får strømmen en *flat* profil. Det gir lite båndspredning og ekstremt høye platetall [slide 22–23; chromatographgy_basics_part2.pdf, p. 137].

Oppå denne «transportbåndet»-strømmen har hver analytt sin egen elektroforetiske mobilitet, bestemt av ladning/størrelse. Kationer går med EOF, anioner mot den, og nøytrale går ikke selv [slide 14, 17]. Den tilsynelatende hastigheten er summen, så når EOF er sterkere enn anionenes egen vandring, passerer *alt* detektoren i rekkefølgen kationer → nøytrale → anioner [slide 17–19; chromatographgy_basics_part2.pdf, p. 141]. CE er ikke kromatografi, for det finnes ingen fordeling mellom mobil og stasjonær fase [slide 25].

## Concepts and definitions
- **Kapillærelektroforese (CE)**: Kombinerer elektroforetiske prinsipper og kromatografisk praksis. Analyserer spormengder av ladde forbindelser (aminosyrer, narkotiske stoffer, fettsyrer, nukleinsyrer, f.eks. Sanger-sekvensering). Pålitelig, med høy oppløsning og høy sensitivitet. Varianter gir tilpasset selektivitet, f.eks. kombinasjon med MS [Kapillærelektroforese del 1 m notater.pdf, slide 4].
- **Bruksområder**: Farmasøytisk analyse (legemidler og metabolitter), kjemi og biokjemi (proteiner, peptider, DNA, små molekyler) og klinisk diagnostikk (blod, urin) [slide 5]. CE var svært viktig for karakteriseringen av det humane genomet [chromatographgy_basics_part2.pdf, p. 136].
- **Prinsipp**: Separasjon av ioner og molekyler i et elektrisk felt, bestemt av (1) elektroforetisk mobilitet og (2) EOF. Molekylene detekteres etter ulik migrasjonstid [slide 13].
- **Elektroferogram**: Detektorsignalet som funksjon av tid [slide 7; chromatographgy_basics_part2.pdf, p. 139].
- **Instrumentering** [slide 7–8; chromatographgy_basics_part2.pdf, p. 136]:
  1. Kapillærrør.
  2. Detektor.
  3. Inlet-elektrolyttreservoar og 4. outlet-elektrolyttreservoar.
  5. Prøve.
  6. Anode og 7. katode, begge av platina. Polariteten er byttbar.
  8. Termostatering (luft eller væske).
  9. Systemkontroll.
  10. Strømkilde (høyspenning).
  - Kapillæret fylles med elektrolytt med trykk før analysen. Systemet må være isolert av sikkerhetshensyn.
- **Driftsparametre** [slide 10–11; chromatographgy_basics_part2.pdf, p. 136–137]:
  - Spenning 10–30 kV, feltstyrke typisk 200–400 V/cm og strøm ca. 100 µA ved 30 kV. Konstant potensial foretrekkes.
  - Høy elektrisk motstand i kapillæret begrenser strøm og *Joule heating*. Større diameter gir mer varme. Varme produseres når en elektrisk ladning passerer en trang passasje (notat, slide 10).
  - N = 100 000–1 000 000, H ≤ 1 µm (pga. EOF-profilen), og analysetid typisk 5–30 min.
  - Kapillær: ID typisk 50–75 µm (20–100 µm) og 20–100 cm lang.
  - Spenningsforskjellen i feltet justeres med spenningen eller kapillærlengden.
  - **Effektiv lengde L_D**: fra innløp til deteksjonspunktet.
- **Hvorfor tynne kapillærer**: Effektiv varmespredning gjør at man kan bruke høye spenninger, som gir effektiv separasjon og kort tid [slide 6; chromatographgy_basics_part2.pdf, p. 137].
  - ID-valg er et kompromiss: UV-veilengden = ID, så cLOD ∝ 1/ID, men båndbredden øker med ID. 50–75 µm er et godt kompromiss [chromatographgy_basics_part2.pdf, p. 136].
- **Fordeler** [slide 9]: Høy oppløsning (ofte > 100 000 plater), rask analyse, lite prøvevolum, lite prøvepreparering og lite forbruk av prøvebuffer.
- **Kapillærer/kolonner** [slide 12; chromatographgy_basics_part2.pdf, p. 136–137]:
  - Nesten alltid fused silica med polyimidbelegg eller UV-transparent teflonbelegg. Fleksible og elektrisk isolerende.
  - Negativt ladet ved pH > 3, som gir EOF.
  - EOF kan minskes med deaktivert overflate (kjemisk bundet ligand eller additiv), som også hindrer uønsket adsorpsjon av analytter (særlig basiske) til veggen.
  - EOF kan *reverseres* ved å binde en positivt ladet forbindelse til overflaten.
- **Elektroforetisk mobilitet (µ_e)** [slide 11, 14; chromatographgy_basics_part2.pdf, p. 128]:
  - Beskriver hvor raskt et ladet molekyl beveger seg i et elektrisk felt.
  - Høyere ladning gir raskere vandring. Større molekyl gir mer friksjon og langsommere vandring.
  - Avhenger av buffer-pH, ionisk styrke, buffersammensetning og viskositet.
  - Notat (slide 11, 14): ioner med høyest ladning vandrer raskere enn de med mindre ladning. Positive ioner eluerer raskere enn negative. Små +-ioner er raskere enn store, og store −-ioner raskere enn små. Nøytrale påvirkes ikke av feltet og er avhengige av EOF for forflytning.
  - Notat (slide 18): ved konstant feltstyrke beveger hver partikkel seg med konstant hastighet, bestemt av feltstyrke, viskositet og partikkelens ladning, form og størrelse. Det gir vandring med ulik hastighet.
- **Elektroosmose / EOF** [slide 15, 21; chromatographgy_basics_part2.pdf, p. 129]:
  1. Kapillærveggen er negativt ladet (deprotonerte silanolgrupper).
  2. Positive ioner i bufferen samles nær veggen i et elektrisk dobbeltlag. Det faste laget er tett bundne kationer, og det diffuse laget har bevegelige kationer.
  3. Med spenning beveger de diffuse kationene seg mot katoden. De er solvatisert og drar med seg løsemidlet via hydrogenbindinger.
  4. Resultatet er netto væskestrøm (hele bufferløsningen) mot katoden.
  - Skjer bare i overflateladde kapillærer med ganske smal ID. Positivt ladet overflate gir EOF mot anoden [chromatographgy_basics_part2.pdf, p. 129].
  - Typisk størrelse er ca. 2 mm/s [chromatographgy_basics_part2.pdf, p. 137].
  - Notat (slide 21): høy pH (> 3) gir flere negative ladninger på kapillærveggen og sterk EOF. Lav pH (< 3) gir færre deprotonerte silanolgrupper, og EOF reduseres eller forsvinner nesten.
- **Samspill EOF og mobilitet** [slide 17–19; chromatographgy_basics_part2.pdf, p. 141]:
  - EOF driver hele løsningen mot katoden. Kationer beveger seg raskest, nøytrale følger EOF, og anioner når detektoren hvis EOF er sterkere enn deres egen vandring mot anoden.
  - Tilsynelatende mobilitet = EOF + elektroforetisk mobilitet. Nøytrale har ingen elektroforetisk mobilitet og går med EOF. Kationer og anioner separeres etter ladning/størrelse-forhold.
  - **Elueringsrekkefølge**: små høyt ladde kationer → store kationer → nøytrale (alle samtidig, ikke separert) → store anioner → små høyt ladde anioner.
- **Faktorer som påvirker EOF** [slide 20]:

  | Faktor | Effekt på EOF |
  |---|---|
  | Økt elektrolyttkonsentrasjon | EOF reduseres |
  | Økt andel organisk modifikator (organiske løsemidler) | EOF reduseres |
  | pH | Styrer ioniseringsgraden til kapillærveggen *og* ioniseringen av syrer og baser, og dermed også µ_e |
  | Ioniske surfaktanter | Sterk påvirkning, kan reversere EOF-retningen |
  | Økt spenning | EOF øker |

- **Flowprofil: flat vs. parabolsk** [slide 22–23; LF eksamen H2024 IMAK2008.pdf, oppg. 2c; chromatographgy_basics_part2.pdf, p. 137]:
  - **Flat (EOF, CE)**: drives av ladninger langs kapillærveggen, uten trykkfall, så hastigheten er jevn over hele tverrsnittet.
  - **Parabolsk (trykkindusert, HPLC)**: drives av trykkforskjeller. Friksjonskrefter gir ulik hastighet over tverrsnittet.
  - Flat profil gir mindre båndspredning, bedre toppoppløsning og bedre separasjonseffektivitet. Det er en av grunnene til de høye platetallene i CE.
- **Gelelektroforese vs. elektroosmose** [slide 25]:
  - Ved elektroforese flyttes partikler (nukleinsyrer, proteiner) av feltet mens bufferen står stille (gel).
  - Ved elektroosmose flyttes væsken (buffer inkl. analytter) av feltet (gel, membran, kapillærrør).
  - CE er ikke kromatografi, for separasjonen skyldes forskjeller i elektroforetisk mobilitet og ikke fordeling mellom mobil og stasjonær fase.
- **Varmegenerering (sekundæreffekt)**: Varmen W ∝ i², og en radiell temperaturgradient gir båndspredning (opptil 2–3 % hastighetsendring per °C). Elektrolytt med lav ionestyrke og ledningsevne (men nok bufferkapasitet) og kjøling reduserer dette. Varme kan også bryte ned termolabile forbindelser [chromatographgy_basics_part2.pdf, p. 128–129].

## Visuals
- **CE-instrument** · skjematisk [Kapillærelektroforese del 1 m notater.pdf, slide 7–8; chromatographgy_basics_part2.pdf, p. 136]
  - To elektrolyttvialer (inlet ved anode +, outlet ved katode −) og et buet fused silica-kapillær med prøveplugg ved innløpet.
  - Detektorvindu (laser/UV) nær utløpet og elektroferogram-innfelling. Strøm av ioner fra + mot −.
  - HV-forsyning og termostatisert boks. Etiketter med nummerering 1–10 fra slide 8.
- **Elektrisk dobbeltlag og EOF** · tverrsnitt [Kapillærelektroforese del 1 m notater.pdf, slide 15, 21; chromatographgy_basics_part2.pdf, p. 129]
  - Silikavegg med − ladninger, fast lag av kationer, diffust lag og bulk. Pil «EOF → katode».
  - (b)-variant med kationisk surfaktant på veggen og «← EOF» (reversert) [slide 21].
- **Flat vs. parabolsk flowprofil** · sammenligning [Kapillærelektroforese del 1 m notater.pdf, slide 22–23]
  - Øverst: kapillær med flat front (EOF, CE) og smal gaussisk topp. Nederst: parabolsk front (trykk, LC/HPLC) og bred topp.
  - Notater: flat gir mindre båndspredning, bedre oppløsning og høyere effektivitet.
- **Vektorsum og elueringsrekkefølge** · vektordiagram [Kapillærelektroforese del 1 m notater.pdf, slide 18–19; chromatographgy_basics_part2.pdf, p. 141]
  - Rader: kation (EOF → + egen → = lang pil), nøytral (EOF → + 0 = middels pil), anion (EOF → + ← egen = kort pil).
  - Under: kapillær fra INJECTION til DETECTION med rekkefølgen ⊕⊕ små, ⊕ store, N N N, ⊖ store, ⊖⊖ små.
- **Interaktiv graf: tilsynelatende hastighet og migrasjonstid** [chromatographgy_basics_part2.pdf, p. 137, 141; Kapillærelektroforese del 1 m notater.pdf, slide 10–11, 20]
  - Slider for µ_eo: 0 → «typisk» (u_eo ≈ 2 mm/s) → reversert (negativ, f.eks. kationisk surfaktant).
  - Slider for E: 200–400 V/cm. Fast L_D = 50 cm (innen 20–100 cm).
  - Tre analytter med egen µ_e: +, 0 og − (relative verdier, f.eks. +0,5·µ_eo, 0, −0,5·µ_eo).
  - Plott: u = (µ_e + µ_eo)E og t = L_D/u som søylediagram. Viser at anionen aldri når detektoren når |µ_e,anion| > µ_eo.
  - Kursfilene gir bare EOF ≈ 2 mm/s. Analyttmobilitetene er relative og illustrative.

## Equations
### Kraft på ladd partikkel og Stokes' friksjon
$$F = qE,\qquad F_f = 6\pi\eta r u$$

| Symbol | Meaning | Unit |
|---|---|---|
| $F$ | elektrisk kraft | N |
| $q$ | ionets ladning | C |
| $E$ | feltstyrke ($= V/L$) | V m⁻¹ |
| $F_f$ | friksjonskraft | N |
| $\eta$ | viskositet | Pa s |
| $r$ | Stokes-radius | m |
| $u$ | migrasjonshastighet | m s⁻¹ |

Ved likevekt er $F = F_f$. Forenklet beskrivelse som antar kuleform [chromatographgy_basics_part2.pdf, p. 128; LF eksamen H2024 IMAK2008.pdf, oppg. 2a]. Se side 19.

### Elektroforetisk mobilitet
$$\mu_e = \frac{u}{E} = \frac{q}{6\pi\eta r}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $\mu_e$ | elektroforetisk mobilitet | m² V⁻¹ s⁻¹ |

Feltuavhengig parameter for å sammenligne ioner. $u$ øker med $q$ og $E$ og avtar med $r$ [chromatographgy_basics_part2.pdf, p. 128].

### Tilsynelatende migrasjonshastighet med EOF (lign. 6.7)
$$u = u_e + u_{eo} = \frac{(\mu_e + \mu_{eo})\,V}{L}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $u_e,\ u_{eo}$ | elektroforetisk hastighet og EOF-hastighet | m s⁻¹ |
| $\mu_{eo}$ | elektroosmotisk mobilitet | m² V⁻¹ s⁻¹ |
| $V$ | påført spenning | V |
| $L$ | total kapillærlengde | m |

$\mu_e$ er positiv for kationer, negativ for anioner og 0 for nøytrale. Er $\mu_{eo} > |\mu_e|$ for alle anioner, migrerer alle i samme retning. Nøytrale går med $u_{eo} = \mu_{eo}V/L$ [chromatographgy_basics_part2.pdf, p. 141].

### Maksimalt platetall i CE (lign. 6.6)
$$N = \frac{(\mu_e + \mu_{eo})\,L_D\,V}{2DL}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $N$ | platetall | – |
| $L_D$ | effektiv lengde (innløp → detektor) | m |
| $D$ | analyttens diffusjonskoeffisient | m² s⁻¹ |

Antar at bare longitudinal diffusjon gir båndspredning. Høy $V$ og lav $D$ (store molekyler) gir høy $N$ [chromatographgy_basics_part2.pdf, p. 140].

### Oppløsning i CE
$$R_s = \frac{\sqrt{N}}{4}\cdot\frac{\Delta\mu}{\bar\mu}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $\Delta\mu$ | $\mu_1 - \mu_2$ | m² V⁻¹ s⁻¹ |
| $\bar\mu$ | gjennomsnittet av $\mu_1$ og $\mu_2$ | m² V⁻¹ s⁻¹ |

Samme form som for gelteknikkene, med $\mu = u/E = uL/V$ [chromatographgy_basics_part2.pdf, p. 141].

### Varmeutvikling
$$W = \frac{V\cdot i}{L\cdot A} = \frac{E\cdot i}{A} = \frac{i^2}{\ell\cdot A^2}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $W$ | varme per volum | W mL⁻¹ |
| $i$ | strøm | A |
| $A$ | tverrsnittsareal | m² |
| $\ell$ | spesifikk ledningsevne | S m⁻¹ |

Feltstyrken er ∝ $i$, men varmen er ∝ $i^2$. Det begrenser hvor høy spenning man kan bruke [chromatographgy_basics_part2.pdf, p. 128]. Kontrollert mot boka: lign. 6.2, der ledningsevnen har symbolet ℓ [chromatographgy_basics_part2.pdf, p. 128].

## Worked example
**H24 oppg. 2(e): tre flervalg om CE** (4 p) [Eksamen_IMAK2008_24.pdf, oppg. 2e; fasit: LF eksamen H2024 IMAK2008.pdf, oppg. 2e]

*i) Optimal pH for EOF?* (pH > 3 / pH < 3 / pH < 5 / pH > 5)
1. Silikaveggen er negativt ladet ved pH > 3, og det er det som gir EOF [Kapillærelektroforese del 1 m notater.pdf, slide 12]. → **pH > 3** (fasit). Distraktor: boka sier «spesielt over pH 5» [chromatographgy_basics_part2.pdf, p. 137], men forelesningen og LF bruker grensen pH > 3.

*ii) Riktige utsagn om CE?*
2. «Separasjon skyldes kun elektroforetisk mobilitet»: feil. Separasjonen bestemmes av både µ_e og EOF [slide 13].
3. «Ikke mulig å justere spenningsforskjeller»: feil. Den justeres med spenning eller kapillærlengde [slide 11].
4. «Kapillæret må fylles med elektrolyttløsning»: riktig [slide 11].
5. «ID 50–75 µm og lengde 20–100 cm»: riktig [slide 11]. → **De to siste** (fasit).

*iii) «EOF er avgjørende for elueringsrekkefølgen» (ja/nei)*
6. EOF drar alle ioner mot katoden. Uten tilstrekkelig EOF når anioner aldri detektoren, og rekkefølgen kation → nøytral → anion følger av at EOF overgår anionenes egen mobilitet [slide 17–19]. → **Ja** (fasit).

**H24 oppg. 2(c): flowprofiler** (5 p) [Eksamen_IMAK2008_24.pdf, oppg. 2c; LF eksamen H2024 IMAK2008.pdf, oppg. 2c]
7. Figuren sammenligner flowprofilene i CE og LC.
8. A er flat, skyldes EOF, drives av ladninger langs kapillæret, uten trykkfall og med jevn hastighet.
9. B er parabolsk og trykkindusert (LC), drives av trykkforskjeller, og friksjon gir ulik hastighet.
10. Fordelen ligger hos A: mindre båndspredning, bedre toppoppløsning og bedre separasjonseffektivitet.

## Faded example
**H25 oppg. 11: CE sammenlignet med kromatografi** (4 p) [IMAK2008 eksamen H2025.pdf, oppg. 11; Løsningsforslag IMAK2008 H25.pdf, oppg. 11]
1. *Hvilken kromatografisk metode?* → HPLC.
2. **(try)** *Hva driver transporten?* → HPLC bruker en pumpe (trykk). CE bruker spenning (påført elektrisk felt) via EOF.
3. **(try)** *Flowprofil og konsekvens?* → CE har flat profil (EOF, ingen trykkfall, jevn hastighet). HPLC har parabolsk profil (trykkdrevet, friksjon). CE gir derfor mye høyere platetall, smalere topper og mindre båndspredning.
4. **(try)** *Andre forskjeller?* → CE bruker mindre injeksjonsvolum og har kortere kolonner. Ingen stasjonær fase og fordeling i CE [Kapillærelektroforese del 1 m notater.pdf, slide 25].
5. **(try)** *Hvilken er mest sensitiv?* → I utgangspunktet HPLC. CE har kort optisk veilengde (= ID) og små injeksjonsvolumer [chromatographgy_basics_part2.pdf, p. 141]. Avhengig av deteksjon (f.eks. LIF) kan CE likevel bli mer følsom.

## Exam traps
- **«Separasjon skyldes kun elektroforetisk mobilitet»**: Feil. Både µ_e og EOF bestemmer migrasjonen [Kapillærelektroforese del 1 m notater.pdf, slide 13; LF eksamen H2024 IMAK2008.pdf, oppg. 2e].
- **Nøytrale separeres ikke i CZE**: De kommer ut samlet med EOF (dette er grunnen til MEKC og CEC, se side 26) [slide 17, 19].
- **Anioner kommer sist, men de kommer**: bare så lenge µ_eo > |µ_e,anion|. Ved lav pH (svak EOF) eller reversert EOF snus bildet [slide 17, 20–21].
- **EOF-retning**: Mot *katoden* ved negativ vegg. Positivt ladet vegg (kationisk surfaktant eller bundet positiv gruppe) gir EOF mot anoden [slide 20–21; chromatographgy_basics_part2.pdf, p. 129, 137].
- **Mer elektrolytt eller mer organisk modifikator gir *mindre* EOF.** Høyere spenning gir *mer* [slide 20].
- **pH-grensen**: Eksamen (H24) godtar pH > 3, ikke pH > 5 [LF eksamen H2024 IMAK2008.pdf, oppg. 2e].
- **H < 1 µm og N opptil 10⁶ skyldes den flate profilen** (og ingen massetransportledd mot stasjonærfase). Ikke forveksle med HPLC-tall [slide 10–11]. H25 oppg. 9: «Kan oppnå platehøyder < 1 µm», «EOF viktig» og «nL prøvevolum» hører til CE.
- **CE er ikke kromatografi** [slide 25]. Men CEC er det (side 26).
- **Større ID er ikke bedre deteksjon uten pris**: større veilengde, men mer Joule-varme og bredere bånd [slide 10; chromatographgy_basics_part2.pdf, p. 136].

## Past exam tasks
- **H2024 oppg. 2(c)** (5 p): flowprofil A (flat, EOF) vs. B (parabolsk, trykk), forskjeller og fordeler.
- **H2024 oppg. 2(e)** (4 p): optimal pH for EOF, riktige utsagn om CE, og om EOF er avgjørende for elueringsrekkefølgen.
- **H2025 oppg. 9** (del av 5 p, automatisk rettet): linjene «Høy oppløsning og svært små prøvevolum (nL)», «Lite forbruk av prøvebuffer», «EOF viktig for separasjon» og «Kan oppnå platehøyder < 1 µm». Alle utledes til CE [slide 9–11].
- **H2025 oppg. 11** (4 p): CE vs. HPLC, hovedforskjeller og sensitivitet.
- **H2025 oppg. 13 iii** (CEC): EOF og flat flowprofil. Se side 26.

## Test yourself
**Q:** Forklar med fire trinn hvordan EOF oppstår.
**A:** (1) Silikaveggen er negativ ved pH > 3. (2) Kationer samles ved veggen i et dobbeltlag. (3) Med spenning vandrer de diffuse, solvatiserte kationene mot katoden. (4) De drar med seg hele bufferløsningen, som gir netto strøm mot katoden [Kapillærelektroforese del 1 m notater.pdf, slide 15; chromatographgy_basics_part2.pdf, p. 129].

**Q:** Et lite, dobbelt negativt ion og et stort, enkelt negativt ion separeres med normal EOF. Hvem kommer først?
**A:** Det store, enkelt ladde. Det har lavest egen mobilitet mot anoden, så EOF bærer det raskest forbi detektoren. Små, høyt ladde anioner kommer sist [Kapillærelektroforese del 1 m notater.pdf, slide 18–19].

**Q:** Hvordan kan du redusere EOF uten å endre pH?
**A:** Øke elektrolyttkonsentrasjonen, tilsette organisk modifikator, bruke deaktivert (belagt) kapillær eller senke spenningen [Kapillærelektroforese del 1 m notater.pdf, slide 12, 20].

**Q:** Hvorfor gir CE høyere platetall enn HPLC?
**A:** Flat EOF-profil (ingen hastighetsforskjell over tverrsnittet), ingen stasjonær fase å overføre masse til, og effektiv varmebortledning i tynne kapillærer som tillater høy spenning. I praksis er longitudinal diffusjon nesten eneste kilde til båndspredning [Kapillærelektroforese del 1 m notater.pdf, slide 6, 22–23; chromatographgy_basics_part2.pdf, p. 137, 140].

**Q:** Ifølge lign. 6.6, hvordan påvirker økt spenning N, og hvorfor kan man ikke bare skru opp uendelig?
**A:** N ∝ V, så økt spenning gir høyere N. Men Joule-varmen øker med i², og det gir temperaturgradienter (båndspredning) og mulig nedbrytning [chromatographgy_basics_part2.pdf, p. 128, 140].

## Sources
- [Kapillærelektroforese del 1 m notater.pdf, slide 1–26]
- [chromatographgy_basics_part2.pdf, p. 128–130, 136–141] (p. = boksidetall; PDF-side = bokside − 84)
- [Eksamen_IMAK2008_24.pdf, oppg. 2c, 2e] / [LF eksamen H2024 IMAK2008.pdf, oppg. 2a, 2c, 2e]
- [IMAK2008 eksamen H2025.pdf, oppg. 9, 11, 13] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 11]
