---
slug: 02-effektivitet-og-opplosning
title: "Effektivitet og oppløsning (N, H, Rs)"
topic: krom-teori
exam_weight: high
exam_weight_note: "På begge eksamener: H24 1(e) 6 p og 1(i) 14 p (beregning av Rs, N, H), H25 oppg. 1 flervalg og oppg. 3 begrepsforklaring (HETP, halvhøydebredde)"
builds_on: [01-retensjon-og-selektivitet]
used_in: [03-bandspredning-van-deemter, 05-kolonner-og-partikler, 12-gc-kolonner-og-stasjonaerfaser, 26-ce-metoder-og-cec]
sources: ["Krom. Teori - Innledning og repetisjon 190826.pdf", "chromatographgy_basics_part1.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** To topper har god avstand ($\alpha$ stor), men toppene er svært brede. Er de nødvendigvis godt separert?
**A:** Nei. Oppløsningen avhenger både av avstanden mellom toppene og av toppbredden. $R_s$ bestemmes av $k$, $N$ og $\alpha$ [chromatographgy_basics_part1.pdf, p. 12].

**Q:** Betyr høy platehøyde $H$ en god eller en dårlig kolonne?
**A:** Dårlig. Lav HETP tilsvarer høy effektivitet [Løsningsforslag IMAK2008 H25.pdf, oppg. 3].

**Q:** Hvilken $R_s$-verdi regnes som grensen for baselinjeseparasjon?
**A:** $R_s = 1{,}5$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11; chromatographgy_basics_part1.pdf, p. 12].

## Mental model
I et ideelt system ville prøven kommet ut som like smale streker som da den ble injisert, men i virkeligheten sprer båndet seg på veien gjennom kolonnen. Båndspredning er uunngåelig, og lite båndspredning betyr et effektivt system [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 7]. Prøven får en normalfordeling (Gauss-kurve) med midtpunkt i $t_R$. Platetallet $N$ sier hvor smal toppen er i forhold til hvor langt den har vandret, og platehøyden $H = L/N$ uttrykker det samme per kolonnelengde [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 7–8 og 10; chromatographgy_basics_part1.pdf, p. 5–6]. Oppløsningen $R_s$ kombinerer avstand og bredde: avstanden mellom toppene delt på gjennomsnittlig toppbredde [chromatographgy_basics_part1.pdf, p. 11–12]. Purnell-ligningen viser at $R_s$ kan forbedres på tre uavhengige måter: bedre selektivitet ($\alpha$), flere plater ($N$) eller mer retensjon ($k$) [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11; chromatographgy_basics_part1.pdf, p. 13].

## Concepts and definitions
- **Båndspredning**: At båndet blir bredere fra injeksjon til deteksjon. Den er uunngåelig, og må kvantifiseres for å vurdere hvor effektivt systemet er [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 7; chromatographgy_basics_part1.pdf, p. 5]. Kildene behandles på side 03.
- **Gauss-topp**: Toppen antas å være normalfordelt med midtpunkt i $t_R$ og standardavvik $\sigma$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 7; chromatographgy_basics_part1.pdf, p. 5–6].
- **Platetall / kolonneeffektivitet ($N$)**: Mål på båndspredningen, $N = (t_R/\sigma)^2$ [chromatographgy_basics_part1.pdf, p. 5, 9; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 8].
- **Toppbredder på en Gauss-kurve**: Ved vendepunktene (0,607 h) er bredden $w_i = 2\sigma$. Ved halv høyde (0,500 h) er $w_h = w_{0,5} = 2{,}354\sigma$. Ved basis, mellom tangentene (0,134 h), er $w_b = 4\sigma$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 8; chromatographgy_basics_part1.pdf, p. 9–10].
- **Halvhøydebredde ($w_{0,5}$ eller $w_h$)**: Bredden av en topp målt ved halv maksimal høyde, brukt i beregning av effektivitet og oppløsning [Løsningsforslag IMAK2008 H25.pdf, oppg. 3]. Er ikke representativ for den reelle bredden hvis toppen haler. Alternativet er basisbredden mellom tangentene [chromatographgy_basics_part1.pdf, p. 9].
- **Typiske platetall**: GC 10⁴–10⁶ (kapillærkolonner, ca. 25 m). HPLC 0,5–5·10⁴ (15–25 cm, partikkelstørrelse 3–5 µm) [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 9].
- **Måling av N krever konstante betingelser**: $N$ er konstant bare for konstante systemer (isokratisk/isoterm). I LC må effektivitet alltid måles isokratisk, ved konstant temperatur og med prøven løst i mobilfasen. Gradienteluering kan aldri brukes til å måle platetall [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 9; chromatographgy_basics_part1.pdf, p. 10].
- **Platehøyde / HETP ($H$)**: «Høyden» av en teoretisk plate i en litt kolonne, $H = L/N$ (Height Equivalent to a Theoretical Plate). Et mål på kolonneeffektivitet: lav HETP gir høy effektivitet [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 10; chromatographgy_basics_part1.pdf, p. 6, 10–11; Løsningsforslag IMAK2008 H25.pdf, oppg. 3].
- **Typiske platehøyder**: Godt pakkede HPLC-kolonner 5–10 µm, kapillær-GC 0,2–0,25 mm [chromatographgy_basics_part1.pdf, p. 11].
- **Lengre kolonne**: Gir høyere platetall, siden $N = L/H$ [chromatographgy_basics_part1.pdf, p. 10]. Oppløsningen øker likevel bare med $\sqrt{N}$, så dobbelt så mange plater gir bare $\sqrt{2}$ ganger bedre oppløsning [chromatographgy_basics_part1.pdf, p. 13].
- **Oppløsning ($R_s$)**: Forskjellen mellom bånd-sentrene delt på gjennomsnittlig båndbredde, målt i samme enheter [chromatographgy_basics_part1.pdf, p. 11–12; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 10].
- **Overlapp ved ulik $R_s$**: Forelesningen oppgir $R_s = 1{,}0$ → 2,3 % overlapp, og $R_s = 1{,}5$ → 0,15 % overlapp, som er grensen for baselinjeseparasjon [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11]. Boka oppgir ca. 2 % overlapp ved $R_s = 1$ for perfekte Gauss-topper [chromatographgy_basics_part1.pdf, p. 12].
- **Asymmetri ($A_s$)**: De fleste topper er ikke perfekt Gauss-formet. Noen haler (tailing), andre fronter (fronting). Asymmetrifaktoren måles ved 10 % av topphøyden, og gode kolonner skal ha $A_s$ så nær 1 som mulig [chromatographgy_basics_part1.pdf, p. 11–12; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11].
- **Isokratisk/isoterm vs. gradient/temperaturprogram**: Ved konstante betingelser kan det være vanskelig å få både god separasjon *og* kort analyse. I GC-eksempelet: høy isoterm temperatur gir 15 min, men topp 1 og 2 overlapper. Lav isoterm temperatur gir god separasjon, men tar 60 min og gir brede sene topper. Temperaturprogram (lav → høy T) gir god separasjon på 20 min [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 12]. Ved isokratisk eluering øker toppbredden med elueringstiden [chromatographgy_basics_part1.pdf, p. 3].

## Visuals
- **Ideell vs. reell båndspredning** · prosessdiagram, 2×2 paneler [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 7]
  - Øverste rad «IDEELT»: ved t = 0 én prikk ved startlinjen. Ved $t_{slutt}$ fire like små prikker (TLC) og fire like smale streker i kromatogrammet mellom $t_0$ og $t_R$.
  - Nederste rad «REALITET»: samme, men prikkene og toppene blir gradvis bredere og lavere jo senere de eluerer.
  - Etikett: «Båndspredning er uunngåelig. Lite båndspredning = effektivt system».
- **Gauss-topp med tre breddemål** · kurveskisse [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 8; chromatographgy_basics_part1.pdf, p. 10, Fig. 1.4]
  - x-akse: bredde i enheter av $\sigma$ (−5 til 5). y-akse: relativ amplitude (0–1).
  - Horisontale linjer ved 0,607 ($w_i = 2\sigma$, vendepunkter), 0,500 ($w_h = 2{,}354\sigma = w_{0,5}$) og 0,134 ($w_b = 4\sigma$, der tangentene treffer basislinjen). Stiplede tangenter gjennom vendepunktene ned til basislinjen.
  - Ved hver linje: tilhørende formel, $N = 16(t_R/w_b)^2$ eller $N = 5{,}54(t_R/w_{0,5})^2$.
- **To topper med oppløsning $R_s$** · plot [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 10–11; chromatographgy_basics_part1.pdf, p. 12, Fig. 1.6]
  - Pil fra 0 til $t_{R1}$ og fra 0 til $t_{R2}$, og pil $t_{R2}-t_{R1}$ mellom toppunktene. Basisbreddene $w_{b1}$ og $w_{b2}$ markert med tangenter.
  - To varianter side om side: $R_s = 1{,}0$ (merket «2,3 % overlapp», overlappsområdet skyggelagt) og $R_s = 1{,}5$ (merket «0,15 % overlapp, baselinjeseparasjon»).
- **Asymmetri: tailing, fronting og måling av $A_s$** · kurveskisse [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11; chromatographgy_basics_part1.pdf, p. 12, Fig. 1.5]
  - Én topp med hale mot høyre («Tailing») og én med skrå front mot venstre («Fronting»).
  - Måleskisse: topphøyde $h$, horisontal linje ved $c = 0{,}1h$, loddrett linje fra toppunktet. $a$ = fremre halvbredde, $b$ = bakre halvbredde ved 10 % høyde, og $A_s = b/a$.
- **Interactive plot: Purnell-ligningen** · plot
  - Ligning: $R_s = \frac{1}{4}(\alpha-1)\sqrt{N}\left(\frac{k}{1+k}\right)$.
  - Slidere: $\alpha$ 1,00–2,00 (start 1,63), $N$ 100–20 000 (start 1645) og $k$ 0,5–15 (start 3,33). Startverdiene er fra H24 oppg. 1(i) [LF eksamen H2024 IMAK2008.pdf, p. 8].
  - Vis to Gauss-topper som flytter seg fra hverandre eller smelter sammen. Merk linjen $R_s = 1{,}5$.
  - Pedagogisk poeng: $\alpha$ har størst effekt, $N$ virker bare som $\sqrt{N}$, og $k/(1+k)$ flater ut når $k$ blir stor.
  - Merknad på siden: ligningen gjelder for to nært eluerende forbindelser [chromatographgy_basics_part1.pdf, p. 13], så den gir ikke nøyaktig samme tall som den direkte målingen i eksempelet (3,67).

## Equations
### Platetall (definisjon)
$$N = \left(\frac{t_R}{\sigma}\right)^2$$
| Symbol | Meaning | Unit |
|---|---|---|
| $N$ | platetall (kolonneeffektivitet) | dimensjonsløs |
| $t_R$ | retensjonstid | min |
| $\sigma$ | standardavvik for Gauss-toppen (i tidsenheter) | min |
Forutsetter Gauss-fordelt topp. $t_R$ og $\sigma$ må ha samme enhet [chromatographgy_basics_part1.pdf, p. 5–6, 9, lign. 1.5; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 8].

### Platetall fra basisbredde
$$N = 16\left(\frac{t_R}{w_b}\right)^2 \qquad (w_b = 4\sigma)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $w_b$ | toppbredde ved basis, mellom tangentene | min |
[Krom. Teori - Innledning og repetisjon 190826.pdf, slide 8; chromatographgy_basics_part1.pdf, p. 9, lign. 1.7]

### Platetall fra halvhøydebredde
$$N = 5{,}54\left(\frac{t_R}{w_{0,5}}\right)^2 \qquad (w_{0,5} = 2{,}354\sigma)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $w_{0,5}$ ($w_h$) | toppbredde ved halv høyde | min |
Vanlig å bruke, men ikke representativ ved tailing [chromatographgy_basics_part1.pdf, p. 9, lign. 1.6; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 8].

### Platehøyde (HETP)
$$H = \frac{L}{N}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $H$ | platehøyde, HETP | µm, mm eller cm |
| $L$ | kolonnelengde | cm |
| $N$ | platetall | dimensjonsløs |
Lav $H$ = effektiv kolonne. Bidragene til $H$ beskrives av van Deemter, se side 03 [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 10; chromatographgy_basics_part1.pdf, p. 6, 10, lign. 1.10].

### Oppløsning (fra kromatogrammet)
$$R_s = \frac{t_{R_2}-t_{R_1}}{0{,}5\,(w_{b_1}+w_{b_2})} = \frac{2\,(t_{R_2}-t_{R_1})}{w_{b_1}+w_{b_2}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $R_s$ | oppløsning | dimensjonsløs |
| $t_{R_1}, t_{R_2}$ | retensjonstider, topp 1 og 2 | min |
| $w_{b_1}, w_{b_2}$ | basisbredder | min |
De to formene er identiske. Forelesningen bruker den første, boka og løsningsforslaget den andre. $R_s = 1{,}5$ er grensen for baselinjeseparasjon [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 10–11; chromatographgy_basics_part1.pdf, p. 12; LF eksamen H2024 IMAK2008.pdf, p. 5].

### Oppløsningsligningen (Purnell)
$$R_s = \frac{1}{4}\,(\alpha-1)\,\sqrt{N}\left(\frac{k}{1+k}\right)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\alpha$ | separasjonsfaktor | dimensjonsløs |
| $N$ | platetall | dimensjonsløs |
| $k$ | retensjonsfaktor, gjennomsnitt av $k_1$ og $k_2$ | dimensjonsløs |
Gjelder for to nært eluerende forbindelser. Ifølge boka er dette en fundamental ligning i kromatografien: $R_s$ kan forbedres ved å øke $\alpha$, $N$ eller $k$ [chromatographgy_basics_part1.pdf, p. 13, lign. 1.11; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11].

### Asymmetrifaktor
$$A_s = \frac{b}{a} \qquad \text{målt ved } c = 0{,}1\,h$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A_s$ | asymmetrifaktor | dimensjonsløs |
| $a$ | fremre halvbredde ved 10 % av topphøyden | min |
| $b$ | bakre halvbredde ved 10 % av topphøyden | min |
| $h$ | topphøyde | signalenhet |
Ideelt $A_s \approx 1$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11; chromatographgy_basics_part1.pdf, p. 11–12].

## Worked example
**H24 oppg. 1(i), del 2: $R_s$, $N$ og $H$** [Eksamen_IMAK2008_24.pdf, oppg. 1(i); LF eksamen H2024 IMAK2008.pdf, p. 8–9]

Samme kromatogram som på side 01. Pseudoephedrine har $t_{R1}$ = 1,521 min og brompheniramine $t_{R2}$ = 2,164 min. Kolonnelengden er 25 cm.

1. **Estimer basisbreddene fra figuren:** $w_{b1} = 0{,}15$ min og $w_{b2} = 0{,}2$ min.
2. **Oppløsning:** $R_s = \dfrac{2(2{,}164 - 1{,}521)}{0{,}15 + 0{,}2} = \dfrac{2(0{,}643)}{0{,}35} = \dfrac{1{,}286}{0{,}35} \approx 3{,}67$
3. **Tolk:** $3{,}67 > 1{,}5$, så toppene er baselinjeseparert [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11].
4. **Platetall for topp 1 (basisbredde):** $N_1 = 16\left(\dfrac{1{,}521}{0{,}15}\right)^2 = 16 \times (10{,}14)^2 = 16 \times 102{,}82 \approx 1645$
5. **Platetall for topp 2:** $N_2 = 16\left(\dfrac{2{,}164}{0{,}2}\right)^2 = 16 \times (10{,}82)^2 = 16 \times 117{,}08 \approx 1873$
6. **Sjekk:** Løsningsforslaget kommenterer at $N_1$ og $N_2$ burde vært omtrent like, siden det er samme kolonne og samme betingelser. Forskjellen skyldes unøyaktig avlesning av bredder.
7. **Platehøyde:** $H_1 = \dfrac{25}{1645} \approx 0{,}0152$ cm og $H_2 = \dfrac{25}{1873} \approx 0{,}0133$ cm.
8. **Sammenlign med boka:** 0,0152 cm = 152 µm, mye høyere enn de 5–10 µm som gode pakkede HPLC-kolonner skal ha [chromatographgy_basics_part1.pdf, p. 11]. Breddene er grovt avlest fra en liten figur.

## Faded example
**Laktose-topp og platehøyde (forelesningseksempler)** [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 9–10]

Del A: Laktose (47,9 g/L) eluerer ved $t_R$ = 2,76 min. Halvhøydebredden er avlest til $w_{0,5} \approx 0{,}17$ min.
1. Velg formel: siden bredden er målt ved halv høyde, bruk $N = 5{,}54\,(t_R/w_{0,5})^2$.
2. Sett inn: $N = 5{,}54\left(\dfrac{2{,}76}{0{,}17}\right)^2$
3. **(try)** Regn ut $N$. → ca. 1460
4. **(try)** Ligger dette innenfor typisk HPLC-område (0,5–5·10⁴)? → Nei, det er lavt [slide 9].

Del B: En HPLC-kolonne på 10 cm har 2500 plater.
5. **(try)** Regn platehøyden $H = L/N$. → $H = 10\text{ cm}/2500 = 0{,}004$ cm (= 40 µm) [slide 10]

## Exam traps
- **Feil breddefaktor**: 16 hører til basisbredde ($w_b = 4\sigma$), 5,54 til halvhøydebredde ($w_{0,5} = 2{,}354\sigma$). Blander du dem, blir $N$ feil med nesten faktor 3 [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 8; chromatographgy_basics_part1.pdf, p. 9].
- **Ulike enheter for $t_R$ og $w$**: Begge må være i samme tidsenhet [chromatographgy_basics_part1.pdf, p. 10].
- **$R_s$-formelen uten faktor 2 / 0,5**: $R_s = (t_{R2}-t_{R1})/(w_1+w_2)$ blir halvparten for liten. Husk at nevneren er *gjennomsnittlig* bredde [chromatographgy_basics_part1.pdf, p. 11–12; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 10].
- **Høy $H$ = god kolonne**: Feil. Lav HETP gir høy effektivitet [Løsningsforslag IMAK2008 H25.pdf, oppg. 3].
- **Dobbel kolonnelengde → dobbel oppløsning**: Feil. $R_s \propto \sqrt{N}$, så dobbel lengde gir bare $\sqrt{2}$ ganger bedre oppløsning [chromatographgy_basics_part1.pdf, p. 13].
- **Platetall fra gradientkjøring**: $N$ kan aldri måles med gradienteluering [chromatographgy_basics_part1.pdf, p. 10; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 9].
- **Ulik $N$ for topper på samme kolonne**: Er avlesningen god, skal $N$ være omtrent lik for toppene. Store forskjeller tyder på avlesningsfeil [LF eksamen H2024 IMAK2008.pdf, p. 8].
- **«Forbedre oppløsning» besvart bare med «lengre kolonne»**: H24 1(e) forventer flere parametere: mobilfasesammensetning (polaritet, pH, modifikatorer), strømningshastighet, kolonnetemperatur, stasjonærfase (partikkelstørrelse, porestørrelse, kjemi) og kolonnelengde/diameter [LF eksamen H2024 IMAK2008.pdf, p. 5].
- **Halvhøydebredde ved tailing**: Gir ikke en god representasjon av den reelle toppbredden [chromatographgy_basics_part1.pdf, p. 9].

## Past exam tasks
- **H2024 oppg. 1(e)** (6 p): definer oppløsning, og forklar hvilke parametere som kan justeres i HPLC for å forbedre oppløsningen mellom to nært eluerende topper.
- **H2024 oppg. 1(i)** (14 p, delt med side 01): beregn $R_s$, $N$ og $H$ (og $k'$, $\alpha$) fra et HPLC-kromatogram med oppgitt kolonnelengde 25 cm.
- **H2025 oppg. 1** (flervalg): hva en reduksjon i partikkelstørrelse i pakkede kolonner normalt fører til (høyere platetall og bedre separasjon).
- **H2025 oppg. 3** (10 p totalt, 2 av 5 begreper hører hit): forklar HETP og halvhøydebredde.

## Test yourself
**Q:** En topp har $t_R$ = 2,164 min og basisbredde 0,2 min. Hva er $N$, og hva blir $H$ for en 25 cm kolonne?
**A:** $N = 16(2{,}164/0{,}2)^2 \approx 1873$, og $H = 25/1873 \approx 0{,}0133$ cm [LF eksamen H2024 IMAK2008.pdf, p. 8–9].

**Q:** Hvilke tre variabler bestemmer oppløsningen, og hvordan inngår $N$?
**A:** $\alpha$, $N$ og $k$. $N$ inngår som $\sqrt{N}$ [chromatographgy_basics_part1.pdf, p. 12–13; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11].

**Q:** Hvorfor bruker man ofte temperaturprogram i GC heller enn isoterm kjøring?
**A:** Ved konstante betingelser er det vanskelig å få både god separasjon og kort analyse. Høy isoterm T gir overlapp i starten, lav isoterm T gir lang analyse og brede sene topper. Temperaturprogram fra lav til høy T gir begge deler [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 12].

**Q:** Hvor på toppen måles asymmetrifaktoren, og hvilken verdi ønsker man?
**A:** Ved 10 % av topphøyden, som $A_s = b/a$. Den bør være så nær 1 som mulig [chromatographgy_basics_part1.pdf, p. 11–12; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 11].

**Q:** Hvilke typiske platetall forventes i kapillær-GC og i HPLC?
**A:** GC 10⁴–10⁶, HPLC 0,5–5·10⁴ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 9].

## Sources
- [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 7–12]
- [chromatographgy_basics_part1.pdf, p. 3, 5–6, 9–13] (p. = boksidetall; PDF-side = bokside + 16)
- [Eksamen_IMAK2008_24.pdf, oppg. 1(e), 1(i)]
- [LF eksamen H2024 IMAK2008.pdf, p. 5, 8–9]
- [IMAK2008 eksamen H2025.pdf, oppg. 1, 3]
- [Løsningsforslag IMAK2008 H25.pdf, p. 1, oppg. 1 og 3]
