---
slug: 01-retensjon-og-selektivitet
title: "Retensjon og selektivitet (k, α)"
topic: krom-teori
exam_weight: high
exam_weight_note: "På begge eksamener: H24 1(a) flervalg, 1(d) 6 p, 1(i) 14 p (beregning, delt med side 02); H25 oppg. 1 flervalg"
builds_on: []
used_in: [02-effektivitet-og-opplosning, 03-bandspredning-van-deemter, 07-adsorpsjon-normalfase, 08-omvendt-fase-og-ionepar, 12-gc-kolonner-og-stasjonaerfaser]
sources: ["Krom. Teori - Innledning og repetisjon 190826.pdf", "chromatographgy_basics_part1.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** To topper i et kromatogram: den ene eluerer etter 2 min, den andre etter 5 min. Hvilken har størst retensjonsfaktor, og hvorfor?
**A:** Toppen ved 5 min. Den har tilbrakt mest tid i stasjonærfasen i forhold til tiden i mobilfasen [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2].

**Q:** To forbindelser har α = 1,0. Kan de separeres ved å bruke en lengre kolonne?
**A:** Nei. De har like retensjonsfaktorer og vil koeluere [Løsningsforslag IMAK2008 H25.pdf, oppg. 1].

**Q:** Hva er $t_0$?
**A:** Oppholdstiden i mobilfasen, altså tiden en komponent uten interaksjon med stasjonærfasen bruker gjennom systemet [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 5].

## Mental model
En analytt fordeler seg hele tiden mellom mobilfase (MF) og stasjonærfase (SF), og den beveger seg bare framover mens den er i MF [chromatographgy_basics_part1.pdf, p. 2–3]. Alle komponenter bruker derfor minst $t_0$, tiden det tar å bli fraktet gjennom kolonnen i MF. Det som skiller dem er hvor mye *ekstra* tid de blir holdt igjen i SF, den korrigerte retensjonstiden $t_R'$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2]. Retensjonsfaktoren $k$ er forholdet mellom antall molekyler i SF og i MF, og det er det samme som $t_R'/t_0$. Den er uavhengig av flowhastighet og kolonnedimensjoner [chromatographgy_basics_part1.pdf, p. 3–5]. Selektiviteten $\alpha$ sammenligner $k$ for to stoffer. Er $\alpha = 1$, oppfører stoffene seg likt i systemet og følger hverandre uansett hvor lang kolonnen er [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 5; Løsningsforslag IMAK2008 H25.pdf, oppg. 1].

## Concepts and definitions
- **Retensjonstid ($t_R$)**: Tiden fra prøveinnføring til eluering fra kolonnen (toppmaksimum), dvs. oppholdstid i MF + SF [chromatographgy_basics_part1.pdf, p. 2; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2; Løsningsforslag IMAK2008 H25.pdf, oppg. 1].
- **Dødtid / oppholdstid i MF ($t_0$; boka skriver $t_M$)**: Migrasjonstiden for en komponent som bare går i mobilfasen, uten interaksjon med SF. Bestemmes ved å injisere en komponent som er kjent for å ikke ha interaksjoner med SF [chromatographgy_basics_part1.pdf, p. 5; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2].
- **Korrigert retensjonstid ($t_R'$)**: $t_R - t_0$, tiden analytten faktisk holdes tilbake i SF [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 11].
- **Retensjonsfaktor ($k$, på eksamen ofte $k'$)**: $n_s/n_m$, forholdet mellom antall molekyler av komponenten i SF og MF. Beskriver fordelingen av analytt mellom mobil og stasjonær fase. Anbefalt av IUPAC og uavhengig av flowhastighet og kolonnedimensjoner [chromatographgy_basics_part1.pdf, p. 3–5; Løsningsforslag IMAK2008 H25.pdf, oppg. 1]. Det eldre navnet «kapasitetsfaktor» bør unngås [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 3].
- **«God» retensjonsfaktor**: Anbefalt $0{,}5 < k < 15$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2]. For stor $k$ gir lang elueringstid og brede, fortynnede topper. For liten $k$ gir kort elueringstid, men for lite separasjon [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 3].
- **Fordelingskoeffisient ($K$)**: Forholdet mellom analyttens konsentrasjon i stasjonær fase og i mobil fase [LF eksamen H2024 IMAK2008.pdf, p. 1, oppg. 1(a)]. Boka bruker «partition coefficient K» om fordelingen mellom SF og MF i adsorpsjonskromatografi [chromatographgy_basics_part1.pdf, p. 64].
- **Separasjonsfaktor / selektivitetsfaktor ($\alpha$)**: Forholdet mellom retensjonsfaktorene til to komponenter, med $k_2 > k_1$ per definisjon, slik at $\alpha > 1$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 5; chromatographgy_basics_part1.pdf, p. 12]. Høyere $\alpha$ gir bedre separasjon. Er $\alpha$ nær 1, er separasjonen dårlig [LF eksamen H2024 IMAK2008.pdf, p. 4, oppg. 1(d)].
- **Hva påvirker $\alpha$**: Mobilfasesammensetning (polaritet, pH, modifikatorer), stasjonærfase (kolonnekjemi) og temperatur [LF eksamen H2024 IMAK2008.pdf, p. 4, oppg. 1(d)]. Den mest effektive måten å øke $\alpha$ på er ofte å bytte stasjonærfase eller mobilfase (det siste ikke i GC) [chromatographgy_basics_part1.pdf, p. 13].
- **Øke $k$**: I GC ved å senke kolonnetemperaturen, i HPLC vanligvis ved å senke elueringsstyrken til mobilfasen [chromatographgy_basics_part1.pdf, p. 13].
- **$R_f$ (tynnsjiktskromatografi)**: Vandringsavstand for prøven delt på vandringsavstand for MF-fronten. Anbefalt $0{,}2 < R_f < 0{,}5$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 5]. TLC som eget kapittel er ikke pensum [Pensum.pdf].
- **Isokratisk vs. gradienteluering**: Isokratisk betyr konstant MF-sammensetning, og da øker toppbredden med økende elueringstid. Gradient betyr at MF-sammensetningen endres, noe som kan redusere analysetiden [chromatographgy_basics_part1.pdf, p. 3–4, Fig. 1.2].

## Visuals
- **Kromatogrammets anatomi: $t_0$, $t_R$ og $t_R'$** · plot [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2]
  - x-akse: tid (min), y-akse: detektorsignal (mAU). En liten topp ved $t_0$ (ikke-retardert komponent) og en stor topp ved $t_R$.
  - Pil fra injeksjon (t = 0) til $t_0$ merket «oppholdstid i MF». Pil fra $t_0$ til $t_R$ merket «$t_R'$ = korrigert retensjonstid». Pil fra 0 til $t_R$ merket «$t_R$ = oppholdstid i MF + SF».
  - Fremhev at $k = t_R'/t_0$, dvs. hvor mange «$t_0$-er» ekstra stoffet bruker.
- **Fordeling av molekyler mellom SF og MF** · tverrsnitt [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 3–5]
  - En kolonnebit med MF øverst (pil mot høyre, «Mobil fase») og SF nederst («Stasjonær fase»). Tre komponenter A, B og C som bånd ved L = 0 og $t_R = 0$.
  - For hver komponent vises noen molekyler i MF og noen i SF. Komponenten med flest i SF ($n_s \gg n_m$) får stor $k$ og vandrer saktest.
- **Stor vs. liten k** · kurveskisse, tre + to stablede kromatogrammer [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 3]
  - Felles x-akse markert både som tid ($t_R = 0, t_0, 2t_0, \ldots$) og som $k = 0, 1, 2, \ldots, 10$.
  - Panel 1: topper ved $k = 1$, $k = 3$ og $k = 8$, der toppene blir lavere og bredere når $k$ øker. Etikett: «stor k: lang elueringstid, brede/fortynnede topper».
  - Panel 2: $k = 0{,}1$ og $k = 0{,}25$ som overlapper rett etter $t_0$. Etikett: «liten k: kort tid, for lite separasjon».
  - Fremhev det anbefalte området $0{,}5 < k < 15$ som et skyggelagt bånd [slide 2].
- **TLC-plate med $R_f$** · tverrsnitt [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 5]
  - Rektangulær plate med «Startlinje» nederst og «MF-front» øverst. Tre flekker (blå, gul, grønn).
  - Målepil $L_{MF}$ fra startlinje til MF-front. Målepil $L_p$ fra startlinje til den grønne flekken.
- **Interactive plot: $t_R = t_0(1+k)$ og $\alpha$** · plot
  - Bruk $t_0 = 0{,}75$ min fra solkrem-eksempelet [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 4].
  - Slider 1: $k_1$ fra 0 til 15, startverdi 5,67. Viser topp 1 ved $t_R = t_0(1+k_1)$.
  - Slider 2: $\alpha$ fra 1,00 til 2,00, startverdi 1,23. Topp 2 plasseres ved $t_0(1 + \alpha k_1)$.
  - Vis $t_R$, $t_R'$ og $k$ som tall. Ved $\alpha = 1{,}00$ ligger toppene oppå hverandre (koeluering). Skyggelegg $0{,}5 < k < 15$.

## Equations
### Retensjonsfaktor (definisjon)
$$k = \frac{n_s(x)}{n_m(x)}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $k$ | retensjonsfaktor for komponent $x$ | dimensjonsløs |
| $n_s(x)$ | antall molekyler av $x$ i stasjonærfasen | – |
| $n_m(x)$ | antall molekyler av $x$ i mobilfasen | – |
Gjelder ved et gitt tidspunkt under migrasjonen. Når $n_s \gg n_m$ går migrasjonen sakte, og analytten får høy retensjon [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 3–5].

### Retensjonsfaktor fra kromatogrammet
$$k = \frac{t_R - t_0}{t_0} = \frac{t_R'}{t_0}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $t_R$ | retensjonstid (oppholdstid i MF + SF) | min |
| $t_0$ | oppholdstid i MF (boka: $t_M$) | min |
| $t_R'$ | korrigert retensjonstid | min |
Måten $k$ måles på i praksis. $t_0$ må bestemmes først, f.eks. med en komponent uten interaksjon med SF [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2 og 4; chromatographgy_basics_part1.pdf, p. 5, lign. 1.1].

### Retensjonstid uttrykt med k
$$t_R = t_0 + t_0 k = t_0(1+k) \qquad V_R = V_M(1+k)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V_R$ | retensjonsvolum | mL |
| $V_M$ | volum av mobilfase i kolonnen | mL |
Tidsenheter kan erstattes med volumenheter [chromatographgy_basics_part1.pdf, p. 5].

### Korrigert retensjonstid
$$t_R' = t_R - t_0$$
Tiden analytten faktisk tilbringer i SF [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 11].

### Separasjonsfaktor (selektivitet)
$$\alpha = \frac{k_2}{k_1} = \frac{\dfrac{t_{R_2}-t_0}{t_0}}{\dfrac{t_{R_1}-t_0}{t_0}} = \frac{t_{R_2}-t_0}{t_{R_1}-t_0} = \frac{t_{R_2}'}{t_{R_1}'}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\alpha$ | separasjonsfaktor | dimensjonsløs, $\geq 1$ |
| $k_1, k_2$ | retensjonsfaktor for første og andre topp, $k_2 > k_1$ | dimensjonsløs |
| $t_{R_1}', t_{R_2}'$ | korrigerte retensjonstider | min |
$t_0$ kan forkortes bort, så $\alpha$ kan regnes direkte fra korrigerte retensjonstider. Per definisjon er $k_2 > k_1$, slik at $\alpha > 1$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 5; chromatographgy_basics_part1.pdf, p. 12; LF eksamen H2024 IMAK2008.pdf, p. 4].

### Fordelingskoeffisient
$$K = \frac{c_{SF}}{c_{MF}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $K$ | fordelingskoeffisient | dimensjonsløs |
| $c_{SF}, c_{MF}$ | analyttens konsentrasjon i stasjonær og mobil fase | mol/L |
Definert i ord i løsningsforslaget [LF eksamen H2024 IMAK2008.pdf, p. 1, oppg. 1(a)]. For adsorpsjon gir boka $\log K$ som funksjon av adsorbent og elueringsstyrke, se side 07 [chromatographgy_basics_part1.pdf, p. 64–65].
> GAP: Den generelle sammenhengen mellom $K$ og $k$ (via faseforholdet $V_S/V_M$) er ikke gitt i noen av kursfilene.

### $R_f$ i tynnsjiktskromatografi
$$R_f = \frac{L_p}{L_{MF}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $L_p$ | vandringsavstand for prøven fra startlinjen | cm |
| $L_{MF}$ | vandringsavstand for MF-fronten fra startlinjen | cm |
Anbefalt $0{,}2 < R_f < 0{,}5$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 5].

## Worked example
**H24 oppg. 1(i), del 1: k' og α for tre legemidler** [Eksamen_IMAK2008_24.pdf, oppg. 1(i); LF eksamen H2024 IMAK2008.pdf, p. 7–8]

HPLC-kromatogram av pseudoephedrine HCl ($t_R$ = 1,521 min), brompheniramine maleat ($t_R$ = 2,164 min) og paracetamol ($t_R$ = 3,414 min). Mobilfase vann:acetonitril (75:25, v/v), pH 3,2. Beregn $k'$ for pseudoephedrine og brompheniramine, og $\alpha$.

1. **Finn $t_0$.** $t_0$-toppen var ikke synlig på det trykte kromatogrammet, så løsningsforslaget bruker $t_0 = 0{,}5$ min. Alle besvarelser som brukte en annen $t_0$, men riktige formler, fikk full uttelling.
2. **Les av retensjonstidene:** $t_{R1} = 1{,}521$ min (pseudoephedrine), $t_{R2} = 2{,}164$ min (brompheniramine).
3. **Regn $k'_1$:** $k'_1 = \dfrac{1{,}521 - 0{,}5}{0{,}5} = \dfrac{1{,}021}{0{,}5} = 2{,}042$
4. **Regn $k'_2$:** $k'_2 = \dfrac{2{,}164 - 0{,}5}{0{,}5} = \dfrac{1{,}664}{0{,}5} = 3{,}328$
5. **Sjekk området:** Begge ligger innenfor $0{,}5 < k < 15$ [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2].
6. **Regn $\alpha$**, med den sist eluerende i telleren: $\alpha = \dfrac{k'_2}{k'_1} = \dfrac{3{,}328}{2{,}042} \approx 1{,}63$
7. **Tolkning:** $\alpha > 1$ betyr at stoffene har ulik retensjon og kan separeres. Hvor godt toppene faktisk skilles avhenger også av toppbredden, se $R_s$ og $N$ på side 02.

## Faded example
**Solkrem med UV-filtre (forelesningseksempel)** [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 4]

HPLC-kromatogram av UV-filtre: 1 octocrylene, 2 octinoxate, 3 avobenzone, 4 cis-homosalate, 5 octisalate, 6 trans-homosalate. Oppgave: finn $k$ for topp 1–3 og $\alpha$ mellom nabotoppene.

1. **Finn $t_0$ først:** forstyrrelsen ved injeksjonstoppen (pil i figuren) gir $t_0 \approx 0{,}75$ min.
2. **Les av $t_R$:** topp 1 = 5 min, topp 2 = 6 min, topp 3 = 6,75 min.
3. $k_1 = \dfrac{5 - 0{,}75}{0{,}75} = 5{,}67$
4. **(try)** $k_2 = \dfrac{6 - 0{,}75}{0{,}75} = \;?$ → 7,0
5. **(try)** $k_3 = \;?$ → 8,0
6. **(try)** $\alpha_{2/1} = k_2/k_1 = \;?$ → 1,23
7. **(try)** $\alpha_{3/2} = \;?$ → 1,14. Hvilket par er vanskeligst å separere? → topp 2/3, fordi $\alpha$ er minst.

## Exam traps
- **$K$ vs. $k$**: $K$ er konsentrasjonsforholdet SF/MF, mens $k$ er forholdet mellom antall molekyler (eller tid) i SF og MF. Begge eksamenene spør om dette i flervalg, med litt ulike formuleringer [LF eksamen H2024 IMAK2008.pdf, p. 1; Løsningsforslag IMAK2008 H25.pdf, oppg. 1].
- **$k'$ på eksamen = $k$ i boka**: Eksamen skriver $k'$, boka og forelesningen $k$. Det er samme størrelse [Eksamen_IMAK2008_24.pdf, oppg. 1(a), 1(i); chromatographgy_basics_part1.pdf, p. 5].
- **Bruke $t_R$ i stedet for $t_R'$ i α**: $\alpha = t_{R2}'/t_{R1}'$, ikke $t_{R2}/t_{R1}$. Uten å trekke fra $t_0$ blir $\alpha$ for liten [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 5].
- **α < 1**: Per definisjon står den sist eluerende i telleren, så $\alpha > 1$ [chromatographgy_basics_part1.pdf, p. 12].
- **Glemme å finne $t_0$**: Forelesningen understreker at $t_0$ må finnes først. På H24 var $t_0$ ikke synlig, og da må du anta en verdi og skrive det eksplisitt [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 4; LF eksamen H2024 IMAK2008.pdf, p. 7].
- **α = 1 «fikses» med lengre kolonne**: Feil. Like $k$ betyr koeluering, og man må endre selektiviteten (SF, MF eller temperatur) [Løsningsforslag IMAK2008 H25.pdf, oppg. 1; chromatographgy_basics_part1.pdf, p. 13].
- **Større k er alltid bedre**: Feil. $k$ over ca. 15 gir lang analysetid og brede, fortynnede topper [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 2–3].
- **«Kapasitetsfaktor»**: Gammelt navn på $k$ som bør unngås [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 3].

## Past exam tasks
- **H2024 oppg. 1(a)** (flervalg, 5 p totalt): hva beskriver fordelingskoeffisienten $K$, og hva beskriver retensjonsfaktoren $k'$ (to av fem delspørsmål).
- **H2024 oppg. 1(d)** (6 p): definer selektivitetsfaktoren og forklar dens innflytelse på separasjonen.
- **H2024 oppg. 1(i)** (14 p, delt med side 02): beregn $k'$, $\alpha$, $R_s$, $N$ og $H$ fra et HPLC-kromatogram av tre legemidler. Del ii, om hvilken stasjonærfase som er brukt, hører til side 08.
- **H2025 oppg. 1** (flervalg, 5 p totalt): hvilken faktor beskriver fordelingen mellom MF og SF ($k$), hva $t_R$ er tiden fram til (toppmaksimum), og hva $\alpha = 1{,}0$ betyr (koeluering).

## Test yourself
**Q:** I H24 1(i) eluerer paracetamol ved 3,414 min. Med $t_0$ = 0,5 min, hva blir $k$ for paracetamol og $\alpha$ mot brompheniramine ($k$ = 3,328)?
**A:** $k = (3{,}414 - 0{,}5)/0{,}5 = 5{,}83$, og $\alpha = 5{,}83/3{,}328 \approx 1{,}75$ [Eksamen_IMAK2008_24.pdf, oppg. 1(i)].

**Q:** Hvorfor brukes $k$ heller enn $t_R$ for å beskrive retensjon?
**A:** $k$ er uavhengig av flowhastighet og kolonnedimensjoner, mens $t_R$ ikke er det [chromatographgy_basics_part1.pdf, p. 5].

**Q:** To topper koeluerer med liten $k$. Hva er den enkleste måten å bedre separasjonen på i GC og i HPLC?
**A:** Øk $k$: i GC ved å senke kolonnetemperaturen, i HPLC ved å senke elueringsstyrken til mobilfasen [chromatographgy_basics_part1.pdf, p. 13].

**Q:** Hvilke tre parametere kan endre $\alpha$?
**A:** Mobilfasesammensetning (polaritet, pH, modifikatorer), stasjonærfase og temperatur [LF eksamen H2024 IMAK2008.pdf, p. 4].

**Q:** Hvordan bestemmer man $t_0$ eksperimentelt?
**A:** Ved å injisere en komponent som er kjent for å ikke ha interaksjoner med stasjonærfasen [chromatographgy_basics_part1.pdf, p. 5].

## Sources
- [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 1–5]
- [chromatographgy_basics_part1.pdf, p. 2–5, 11–13, 64–65] (p. = boksidetall; PDF-side = bokside + 16)
- [Pensum.pdf, p. 1]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(a), 1(d), 1(i)]
- [LF eksamen H2024 IMAK2008.pdf, p. 1, 4, 7–8]
- [IMAK2008 eksamen H2025.pdf, oppg. 1]
- [Løsningsforslag IMAK2008 H25.pdf, p. 1–2, oppg. 1]
