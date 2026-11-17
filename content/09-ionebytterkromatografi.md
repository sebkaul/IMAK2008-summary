---
slug: 09-ionebytterkromatografi
title: "Ionebytterkromatografi"
topic: lc-separasjon
exam_weight: medium
exam_weight_note: "H25 oppg. 5 (10 p, peptider på kationbytter), H24 1(g) (3 p, «matrix» i IEX)"
builds_on: [01-retensjon-og-selektivitet, 02-effektivitet-og-opplosning, 08-omvendt-fase-og-ionepar]
used_in: [10-size-exclusion, 21-ief-og-2d]
sources: ["Forelesning 230926-u-notater.pdf", "Ionekromatografi_26_canvas.pdf", "Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf", "chromatographgy_basics_part1.pdf", "Pensum.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** Et protein har pI 5. Binder det til en anionbytter eller en kationbytter ved pH 8?
**A:** Til en anionbytter. Over pI er proteinet negativt ladet og binder til et positivt ladet medium [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 5].

**Q:** Hva betyr «sterk» i «sterk anionbytter»?
**A:** At liganden er en sterk syre eller base og er fullt ladet over hele det relevante pH-området. Det sier ikke noe om bindingsstyrken [Ionekromatografi_26_canvas.pdf, p. 2; Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 17].

**Q:** Hvilket protein eluerer sist når saltkonsentrasjonen økes: det med størst eller minst nettoladning?
**A:** Det med størst nettoladning. Det krever høyest saltkonsentrasjon for desorpsjon [Ionekromatografi_26_canvas.pdf, p. 1; Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 6].

## Mental model
Ionebytterkromatografi (IEX) separerer etter ladning. Ladede prøvemolekyler adsorberes reversibelt til motsatt ladede grupper bundet til en matriks [Ionekromatografi_26_canvas.pdf, p. 1; Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 5–6]. Proteiner er amfotere, så nettoladningen avhenger av pH: under pI er de positive (binder til kationbytter), over pI negative (binder til anionbytter) [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 5]. Molekylene slipper på to måter. Enten senkes nettoladningen ved å endre pH, eller det tilsettes et konkurrerende ion (salt) som blokkerer ladningene på ionebytteren [Ionekromatografi_26_canvas.pdf, p. 1]. Jo større nettoladning, jo sterkere binding og jo mer salt trengs. En saltgradient løsner derfor molekylene i rekkefølge etter ladning [Ionekromatografi_26_canvas.pdf, p. 1–2; Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 6].

## Concepts and definitions
- **Separasjonsprinsipp**: IEX separerer biomolekyler etter forskjeller i netto overflateladning [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 1, 5]. Kan skille molekyler som avviker med bare én ladet aminosyre [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 1]. Blant de mest presise metodene for fraksjonering av biologiske molekyler [Ionekromatografi_26_canvas.pdf, p. 1].
- **Nettoladning og pH**: Proteiner er amfotere, og hvert protein har sin egen titreringskurve (nettoladning vs. pH). Ved pI har proteinet ingen nettoladning og vekselvirker ikke med et ladet medium. Over pI binder det til en anionbytter (positivt medium), under pI til en kationbytter (negativt medium) [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 5; Ionekromatografi_26_canvas.pdf, p. 6].
- **Anionbytter / kationbytter**: Anionbytteren er positivt ladet og binder anioner. Kationbytteren er negativt ladet og binder kationer [Ionekromatografi_26_canvas.pdf, p. 2].
- **Matrix (matriks)**: Det uorganiske eller organiske bærermaterialet som utgjør hovedstrukturen i SF. Den gir en stabil fysisk plattform for de funksjonelle gruppene som står for ionebyttet, f.eks. sulfonatgrupper for kationbytte og kvartære ammoniumgrupper for anionbytte. Matrixen bestemmer kolonnens mekaniske og kjemiske egenskaper: stabilitet, trykktoleranse og kjemisk kompatibilitet [LF eksamen H2024 IMAK2008.pdf, p. 6, oppg. 1(g)].
  - Et IEX-medium består av en matriks av sfæriske partikler substituert med ladede grupper, vanligvis porøs for stort indre overflateareal [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 6].
  - Krav til matriksen: høy porøsitet (høy kapasitet, godt for store molekyler), inert (lite uspesifikk binding), høy fysisk stabilitet (konstant volum ved endringer i salt eller pH) og høy kjemisk stabilitet (tåler vask) [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 15].
  - Eksempler: polystyren/divinylbenzen (MiniBeads 3 µm ikke-porøse, MonoBeads, SOURCE) og agarose (Sepharose, Capto) [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 15–16]. I HPLC er de funksjonelle gruppene bundet til silika- eller polymerpartikler [chromatographgy_basics_part1.pdf, p. 73].
- **Funksjonelle grupper** [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 17; Forelesning 230926-u-notater.pdf, slide 2]:
  - **Sterke anionbyttere**: kvartært ammonium (Q, –CH₂–N⁺(CH₃)₃), TEAE, QAE.
  - **Svake anionbyttere**: DEAE (dietylaminoetyl), ANX.
  - **Sterke kationbyttere**: sulfopropyl (SP, –CH₂CH₂CH₂SO₃⁻), metylsulfonat (S), sulfoetyl (SE).
  - **Svake kationbyttere**: karboksymetyl (CM, –CH₂–COO⁻).
- **Sterk vs. svak**: Viser til om liganden er en sterk eller svak syre eller base, *ikke* til bindingsstyrken [Ionekromatografi_26_canvas.pdf, p. 2; Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 17].
  - Sterke ionebyttere er fullt ladet over hele pH-området som normalt brukes for proteiner og peptider. Hos svake er ladningen en funksjon av eluent-pH [Ionekromatografi_26_canvas.pdf, p. 2].
  - Fordeler med sterke: rask metodeutvikling, enkel mekanisme, kapasiteten holdes ved høy og lav pH [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 17].
  - Svake kan gi annen selektivitet, men kapasiteten varierer med pH [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 18]. Svake anionbyttere brukes i dag sjelden til proteinrensing [Ionekromatografi_26_canvas.pdf, p. 2].
- **Brukbart pH-område (bok, Tabell 3.4)**: WAX (–N(R)₂) 2–7, SAX (–N(R)₃⁺) 1–10, WCX (–COO⁻) 6–9, SCX (–SO₃⁻) 1–10 [chromatographgy_basics_part1.pdf, p. 73]. Forelesningsfiguren viser at sterk anionbytter er OK opp til ca. pH 10, svak anionbytter opp til ca. pH 6, sterk kationbytter fra ca. pH 3 og svak kationbytter fra ca. pH 8 [Forelesning 230926-u-notater.pdf, slide 2]. Ved høy eller lav pH anbefales polymere materialer fremfor silika [chromatographgy_basics_part1.pdf, p. 74].
- **Retensjon**: Avhenger av ladning og type SF, ioniseringsgrad til analytten, type og konsentrasjon av ioner i MF, og molekylstørrelse. Med sterke ionebyttere blir ioniseringsgraden til analytten viktigst: karboksylsyrer (pKa ≈ 5) er uladede ved pH 3, aminer (pKa ≈ 9) uladede ved pH 11 [chromatographgy_basics_part1.pdf, p. 74]. Hydrofobe sekundærinteraksjoner kan reduseres med 10–20 % metanol eller acetonitril i MF [chromatographgy_basics_part1.pdf, p. 74, Info-box 3.13].
- **Trinn i en IEX-separasjon** [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 6–7; Forelesning 230926-u-notater.pdf, slide 4]:
  1. **Ekvilibrering**: SF bringes til startbetingelser, og alle ladede grupper er bundet til utbyttbare mot-ioner (Cl⁻, Na⁺). pH og ionestyrke velges slik at målproteinene binder.
  2. **Prøvepåsetting og vask**: Motsatt ladede proteiner binder og oppkonsentreres. Uladede eller likt ladede går rett gjennom.
  3. **Eluering**: Ionestyrken økes (av og til endres pH). Saltionene konkurrerer om setene, og proteinene med lavest nettoladning eluerer først.
  4. **Regenerering**: Vask med høy ionestyrke fjerner det som fortsatt er bundet.
  5. **Re-ekvilibrering** i startbuffer.
- **Desorpsjon**: (1) Redusere nettoladningen ved å endre pH. Det er viktig for å påvirke nettoladningen og brukes for å kontrollere selektiviteten. (2) Tilsette et konkurrerende ion som blokkerer ladningen på ionebytteren, dvs. øke saltkonsentrasjonen [Ionekromatografi_26_canvas.pdf, p. 1].
- **Gradient- og trinnvis eluering**: Gradienteluering er mest brukt, deretter trinnvis. Gradienten lages ved å blande buffer A (lite eller ikke noe nøytralt salt) og buffer B (høy konsentrasjon av samme salt), som ellers er identiske [Ionekromatografi_26_canvas.pdf, p. 2]. Typisk ionestyrkegradient er 0,05–1 M ved konstant pH, eller en pH-gradient ved konstant ionestyrke. Ionestyrkegradient foretrekkes, fordi oppløst CO₂ påvirker den basiske delen av pH-gradienter [chromatographgy_basics_part1.pdf, p. 74]. Trinnvis eluering sparer tid og buffer når separasjonen allerede er optimalisert med gradient [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 13].
- **Gradientens stigningstall**: Oppløsningen kan økes ved å senke stigningstallet [Ionekromatografi_26_canvas.pdf, p. 2]. Stigningstallet påvirker bare avstanden mellom toppene og endrer ikke elueringsrekkefølgen [Ionekromatografi_26_canvas.pdf, p. 2].
- **Optimalisering (rekkefølge)**: pH-endring er den mest effektive metoden for proteiner og peptider. Anbefalt rekkefølge: (1) velg ionebytteren som gir best oppløsning under standard forhold (pH 5 → kationbytter, pH 8 → anionbytter), (2) finn pH med best oppløsning, (3) velg den bratteste gradienten som gir akseptable resultater, (4) finn flowen som gir smalest topper [Ionekromatografi_26_canvas.pdf, p. 2].
- **Selektivitet vs. effektivitet**: God selektivitet er viktigere enn høy effektivitet for oppløsningen. Optimal selektivitet fås ved pH der titreringskurvene til proteinene ligger lengst fra hverandre, med en ionebytter med motsatt ladning [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 11]. Oppløsning: $R_s = 2(V_{R2}-V_{R1})/(w_{b1}+w_{b2})$, som på side 02 [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 8].
- **Kapasitet**: Mediets evne til å ta opp mot-ioner (proteiner). Total ionisk kapasitet er antall ladede grupper per mL. Dynamisk bindingskapasitet er mengden protein som binder før gjennombrudd ved gitt flow [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 18].
- **Kromatofokusering**: Som isoelektrisk fokusering uten elektrisk felt. Proteiner settes på en svak anionbytter ved høy pH og elueres med polybuffere, som danner en pH-gradient i kolonnen. Hvert protein eluerer når pH i kolonnen er lik pI [chromatographgy_basics_part1.pdf, p. 74–75].
- **Ionekromatografi (IC) for uorganiske ioner**: Spesialiserte ionebyttere med ledningsevnedeteksjon og suppressor. Kationer elueres med 1–10 mM HCl, anioner med 2 mM karbonat/bikarbonat [chromatographgy_basics_part1.pdf, p. 75]. Forelesningen viser eksempler på separasjon av F⁻, Cl⁻, NO₃⁻, HPO₄²⁻, SO₄²⁻ og av Li⁺, Na⁺, NH₄⁺, K⁺, Mg²⁺, Ca²⁺ [Forelesning 230926-u-notater.pdf, slide 4].
- **Labøvelsen (oppgave 1)**: Dionex Ultimate 3000 med ProPac SAX-10 / Agilent Bio SAX NP10 (sterk anionbytter, kvartæramin, ikke-porøse 10 µm partikler). Buffer A er 0,02 M Tris/HCl pH 8,5, buffer B er 2,0 M NaCl i samme buffer. Prøven er kreatinkinase, karbonsyreanhydrase og BSA, detektert ved 214 nm. Gradientene 0–0,2 M og 0–0,5 M NaCl på 15 min, med 8 min re-ekvilibrering [Ionekromatografi_26_canvas.pdf, p. 3–5].

## Visuals
- **Prinsipp: titreringskurve og valg av ionebytter** · kurveskisse [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 5, 12; Ionekromatografi_26_canvas.pdf, p. 6]
  - x-akse: pH (2–12). y-akse: netto overflateladning (+ over, − under null).
  - Tre proteinkurver som krysser null ved hver sin pI. Over x-aksen: «binder til kationbytter», under: «binder til anionbytter».
  - Vertikal linje ved valgt pH. Skyggelegg der kurvene ligger lengst fra hverandre, merket «best selektivitet».
- **Sterke vs. svake ionebyttere: kapasitet vs. pH** · kurveskisse, 2 × 2 [Forelesning 230926-u-notater.pdf, slide 2]
  - Fire små plott med x-akse pH (2–10) og y-akse ionebytterkapasitet.
  - Sterk anionbytter: flat kapasitet, faller over pH ≈ 10. Svak anionbytter: faller allerede fra pH ≈ 6. Sterk kationbytter: full kapasitet fra pH ≈ 3. Svak kationbytter: stiger først rundt pH ≈ 8.
  - Skyggelegg de brukbare områdene, med etikettene «ok for anion-IEC» og «ok for kation-IEC».
- **De fem trinnene i en anionbytter-separasjon** · prosessdiagram [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 7, Fig. 1.2]
  - Fem rader (ekvilibrering, påsetting/vask, eluering 1–2, regenerering), hver med en partikkel med +-grupper og mot-ioner, og en saltprofil mot tid/volum ved siden av.
  - Negativt ladede proteiner (blå) binder. Nøytrale og positive (grå) går gjennom. Ved økende salt løsner først de svakest ladde, så de sterkest ladde.
- **Typisk gradienteluering** · plot [Forelesning 230926-u-notater.pdf, slide 4; Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 13, Fig. 1.9]
  - x-akse: kolonnevolumer (CV). Venstre y-akse: absorbans. Høyre y-akse: NaCl-konsentrasjon (0–1 M).
  - Rød linje: flat (ekvilibrering, 5–10 CV) → prøveinjeksjon (blå boks) → lineær gradient (10–20 CV) → trapp til 1 M (høysaltvask, 5 CV) → ned (re-ekvilibrering, 5–10 CV).
  - Blå topper: ubundne før gradienten, flere topper under gradienten, en sterkt bundet topp i høysaltvasken.
- **Interactive plot: gradientens stigningstall**
  - Parametere fra labøvelsen: NaCl-gradient fra 0 til sluttkonsentrasjon over 15 min [Ionekromatografi_26_canvas.pdf, p. 5].
  - Slider: sluttkonsentrasjon 0,1–1,0 M (start 0,2 M, andre forsøk 0,5 M).
  - Tre topper med faste (illustrative, ikke kursdata) elueringskonsentrasjoner. Elueringstiden for hver topp er $t = 15 \cdot c_{elu}/c_{slutt}$.
  - Poeng: brattere gradient gir raskere eluering og mindre avstand mellom toppene, mens rekkefølgen er uendret [Ionekromatografi_26_canvas.pdf, p. 2].

## Equations
### Oppløsning i IEX (volumform)
$$R_s = \frac{2\,(V_{R2}-V_{R1})}{w_{b1}+w_{b2}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V_{R1}, V_{R2}$ | elueringsvolum ved toppmaksimum | mL |
| $w_{b1}, w_{b2}$ | basisbredde | mL |
$R_s$ = 1,0 gir 98 % renhet ved 98 % utbytte for symmetriske, like store topper. Baselinjeseparasjon krever $R_s$ ≥ 1,5 [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 8].

> Ingen andre ligninger i kursmaterialet for IEX. Sammenhengen mellom pH, pKa og ladningsgrad (Henderson–Hasselbalch) er ikke gitt i filene.

## Worked example
**H25 oppg. 5: tre peptider på kationbytter** (10 p) [IMAK2008 eksamen H2025.pdf, oppg. 5; Løsningsforslag IMAK2008 H25.pdf, oppg. 5]

Ved pH 7,0 har peptid A netto +2, B netto +1 og C netto −1. Kolonnen er en kationbytter med sulfonsyregrupper. MF er fosfatbuffer pH 7,0, først isokratisk, deretter en NaCl-gradient 0–300 mM.

*a) Hvilket peptid eluerer først?*
1. Kolonnen har sulfonsyregrupper (–SO₃⁻), altså en sterk kationbytter med fast negativ ladning. Den binder kationer.
2. Peptid C er netto −1, et anion. Det bindes ikke (kan til og med frastøtes).
3. **Svar:** C eluerer først, ved $t_0$ (tidlig eluering).

*b) Hvorfor eluerer resten når ionestyrken øker?*
4. Na⁺ konkurrerer med de bundne peptidkationene om de negative bindingssetene.
5. Samtidig skjermes den elektrostatiske interaksjonen, så bindingsstyrken avtar og peptidene desorberer.
6. Rekkefølge: B (+1) før A (+2), siden høyere nettoladning krever høyere salt [Ionekromatografi_26_canvas.pdf, p. 1].

*c) Hva skjer ved pH 3,5?*
7. Peptidene blir generelt mer protonerte: flere basiske grupper blir BH⁺, og færre sure grupper er deprotonerte.
8. Nettoladningene blir mer positive. Bindingen til kationbytteren øker for alle.
9. C kan gå fra −1 til ~0 eller positiv, og eluerer da ikke nødvendigvis først lenger. Man får senere eluering og trenger ofte mer salt, og selektiviteten kan bli bedre eller verre.

*d) Hvorfor brede topper ved for sakte gradient?*
10. Analyttsonene rekker å diffundere (lang tid på kolonnen), og elueringen skjer over et stort MF-volum (lav «gradientstyrke»). Desorpsjonen blir mer gradvis, og båndspredningen større.

## Faded example
**H24 oppg. 1(g) + labøvelsen: matrix og anionbytter ved pH 8,5** [Eksamen_IMAK2008_24.pdf, oppg. 1(g); LF eksamen H2024 IMAK2008.pdf, p. 6; Ionekromatografi_26_canvas.pdf, p. 3–5]
1. Definer matrix: bærermaterialet (uorganisk eller organisk) som utgjør hovedstrukturen i SF og holder de funksjonelle gruppene.
2. **(try)** Gi et eksempel på en matriks og en funksjonell gruppe. → F.eks. polystyren/divinylbenzen eller agarose, med kvartært ammonium (Q, anionbytte) eller sulfonat (kationbytte) [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 15–17].
3. **(try)** Hvilke egenskaper bestemmer matrixen? → Mekanisk og kjemisk stabilitet, trykktoleranse og kjemisk kompatibilitet.
4. **(try)** Laben bruker en sterk anionbytter ved pH 8,5. Hvilke proteiner binder? → De med pI < 8,5, som er negativt ladet ved pH 8,5 [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 5].
5. **(try)** Gradient 0–0,5 M NaCl i stedet for 0–0,2 M på samme tid: hva skjer med retensjonstid og avstand mellom toppene? → Kortere retensjonstid og mindre avstand mellom toppene, samme rekkefølge [Ionekromatografi_26_canvas.pdf, p. 2].
   > GAP: pI-verdier for kreatinkinase, karbonsyreanhydrase, BSA og ovalbumin står ikke i kursfilene. Labbeskrivelsen ber studentene slå dem opp.

## Exam traps
- **«Sterk» = binder sterkt**: Feil. «Sterk» og «svak» gjelder om liganden er en sterk eller svak syre/base, altså om ladningen varierer med pH [Ionekromatografi_26_canvas.pdf, p. 2; Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 17].
- **Anion- og kationbytter forveksles**: Anionbytteren er *positivt* ladet og binder anioner (proteiner over pI). Kationbytteren er *negativt* ladet og binder kationer (proteiner under pI) [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 5].
- **Feil fortegn på analyttene**: Et anion på en kationbytter bindes ikke og eluerer ved $t_0$, ikke sist [Løsningsforslag IMAK2008 H25.pdf, oppg. 5a].
- **Bare én elueringsmekanisme**: Salt gir både konkurranse om setene og skjerming av den elektrostatiske interaksjonen [Løsningsforslag IMAK2008 H25.pdf, oppg. 5b].
- **pH-endring med fast forventet rekkefølge**: Ved ny pH endres alle nettoladninger, og rekkefølgen kan endres [Løsningsforslag IMAK2008 H25.pdf, oppg. 5c].
- **Slakere gradient er alltid bedre**: Slakere gir bedre oppløsning, men for sakte gir brede topper og lang analysetid [Ionekromatografi_26_canvas.pdf, p. 2; Løsningsforslag IMAK2008 H25.pdf, oppg. 5d].
- **Gradientstigningen endrer rekkefølgen**: Nei. Den påvirker bare avstanden mellom toppene [Ionekromatografi_26_canvas.pdf, p. 2].
- **«Matrix» besvart som «prøvematriks»**: I IEX-sammenheng (H24 1(g)) betyr det bærermaterialet i SF [LF eksamen H2024 IMAK2008.pdf, p. 6].

## Past exam tasks
- **H2025 oppg. 5** (10 p): tre peptider (+2, +1, −1) på sulfonsyre-kationbytter ved pH 7,0 med NaCl-gradient. Hvilket eluerer først, hvorfor ionestyrke gir eluering, effekten av pH 3,5, og hvorfor sakte gradient gir brede topper.
- **H2024 oppg. 1(g)** (3 p): hva er «matrix» i ionebyttekromatografi, gjerne med eksempel.

## Test yourself
**Q:** Nevn de fem trinnene i en typisk IEX-separasjon.
**A:** Ekvilibrering, prøvepåsetting og vask, eluering, regenerering og re-ekvilibrering [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 6; Forelesning 230926-u-notater.pdf, slide 4].

**Q:** Hvorfor foretrekkes ionestyrkegradient fremfor pH-gradient?
**A:** Oppløst CO₂ fra luften påvirker den basiske delen av en pH-gradient og gir dårligere repeterbarhet [chromatographgy_basics_part1.pdf, p. 74].

**Q:** Hvilken funksjonell gruppe har en sterk kationbytter, og hvilken har en svak?
**A:** Sterk: sulfonat/sulfopropyl (–SO₃⁻). Svak: karboksymetyl (–COO⁻) [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 17; chromatographgy_basics_part1.pdf, p. 73].

**Q:** Hva er den mest effektive parameteren for å optimalisere IEX av proteiner?
**A:** pH, fordi den endrer proteinenes nettoladning og dermed selektiviteten [Ionekromatografi_26_canvas.pdf, p. 2].

**Q:** Hva er kromatofokusering?
**A:** Isoelektrisk fokusering uten elektrisk felt. Proteiner elueres fra en svak anionbytter med en pH-gradient (polybuffere), og hvert protein eluerer når pH = pI [chromatographgy_basics_part1.pdf, p. 74–75].

## Sources
- [Forelesning 230926-u-notater.pdf, slide 2, 4] (slide 1 og 3 er tomme. Bare figurer, ingen notater)
- [Ionekromatografi_26_canvas.pdf, p. 1–6]
- [Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf, p. 1, 5–8, 11–13, 15–18] (PDF-sidetall, ikke håndbokas egne)
- [chromatographgy_basics_part1.pdf, p. 73–75] (p. = boksidetall; PDF-side = bokside + 16)
- [Pensum.pdf, p. 1]
- [IMAK2008 eksamen H2025.pdf, oppg. 5] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 5]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(g)] / [LF eksamen H2024 IMAK2008.pdf, p. 6]
