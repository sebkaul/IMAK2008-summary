---
slug: 07-adsorpsjon-normalfase
title: "Adsorpsjonskromatografi og normalfase"
topic: lc-separasjon
exam_weight: medium
exam_weight_note: "H24 1(b) flervalg (MF-polaritet i NP, hva påvirker adsorpsjonsstyrke), H24 1(h) 6 p (NP vs. RP, delt med side 08). H25 oppg. 2 bare indirekte"
builds_on: [01-retensjon-og-selektivitet, 05-kolonner-og-partikler]
used_in: [08-omvendt-fase-og-ionepar, 12-gc-kolonner-og-stasjonaerfaser]
sources: ["Forelesning ads.krom m notater 3.pdf", "chromatographgy_basics_part1.pdf", "Pensum.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** I normalfase-HPLC på silika: hvilken analytt eluerer sist, den mest polare eller den minst polare?
**A:** Den mest polare får høyest retensjon [Forelesning ads.krom m notater 3.pdf, slide 3].

**Q:** Hva skjer med retensjonen i NP hvis du tilsetter mer metanol til en heksan-mobilfase?
**A:** Den synker. Metanol er en sterk eluent (høy ε°) som konkurrerer om adsorpsjonssetene [Forelesning ads.krom m notater 3.pdf, slide 6; chromatographgy_basics_part1.pdf, p. 65–66].

**Q:** Hva er forskjellen på absorpsjon og adsorpsjon?
**A:** Ved adsorpsjon bindes analytten til *overflaten* av stasjonærfasen. Ved absorpsjon tas den opp *i* fasen [Forelesning ads.krom m notater 3.pdf, slide 1].

## Mental model
I adsorpsjonskromatografi holdes analytten igjen fordi den binder seg reversibelt til spesifikke bindingsseter på overflaten av stasjonærfasen [Forelesning ads.krom m notater 3.pdf, slide 1]. Setene er aldri tomme: de er dekket av mobilfasemolekyler, så analytten må *fortrenge* MF-molekyler for å adsorbere. Retensjon er derfor en konkurranse mellom analytt og MF om setene [Forelesning ads.krom m notater 3.pdf, slide 1, 6]. I normalfase er SF polar (silika, alumina) og MF upolar, så polare grupper på analytten binder sterkt, og jo mer polar MF du bruker, jo bedre konkurrerer den og jo raskere eluerer analytten [Forelesning ads.krom m notater 3.pdf, slide 3, 6; chromatographgy_basics_part1.pdf, p. 65]. Ligningen $\log K = \log V_a + \alpha(S^\circ - A_s\varepsilon^\circ)$ sier det samme kvantitativt: analyttens adsorpsjonsenergi $S^\circ$ trekker retensjonen opp, og eluentstyrken $\varepsilon^\circ$ ganget med analyttens areal $A_s$ trekker den ned [Forelesning ads.krom m notater 3.pdf, slide 5; chromatographgy_basics_part1.pdf, p. 64–65].

## Concepts and definitions
- **Adsorpsjonskromatografi**: Retensjon basert på interaksjon mellom analytt og spesifikke bindingsseter på overflaten av SF. Prosessen er reversibel, og det er konkurranse mellom MF og analytt om setene på SF [Forelesning ads.krom m notater 3.pdf, slide 1].
- **Adsorpsjonslikevekten**: $X_n + m\,E_a \rightleftharpoons X_a + m\,E_n$. $X_n$ er ikke-adsorbert analytt, $X_a$ adsorbert analytt, $E_a$ adsorberte MF-molekyler og $E_n$ ikke-adsorberte MF-molekyler [Forelesning ads.krom m notater 3.pdf, slide 1].
- **Fordelingskoeffisient i adsorpsjon**: $K = [X_a]/[X_n]$ [Forelesning ads.krom m notater 3.pdf, slide 1]. Beskriver fordelingen av analytt mellom SF og MF [chromatographgy_basics_part1.pdf, p. 64].
- **Lineær adsorpsjonsisoterm**: $K$ konstant gir lineær isoterm. Det er ideelt: symmetrisk topp og konstant $R_f$ / $t_R$ uansett prøvemengde [Forelesning ads.krom m notater 3.pdf, slide 1–2].
- **Ikke-lineær isoterm**: Kurven flater ut ved høy konsentrasjon (setene mettes). Det gir asymmetrisk (hale-) topp, $R_f$ som øker med påsatt mengde og $t_R$ som synker med injisert mengde. Husk: stor $R_f$ = lite retensjon, men stor $t_R$ ($V_r$) = mye retensjon [Forelesning ads.krom m notater 3.pdf, slide 3].
- **Normalfase (NP)**: Polar SF og upolar MF. Omvendt fase (RP) er det motsatte: upolar SF og polar MF. «Normalfase» ble utviklet først og ble derfor kalt «normal», men RP-LC er vanligst i LC i dag [Forelesning ads.krom m notater 3.pdf, slide 3]. RP behandles på side 08.
- **NP-stasjonærfaser**: Silika, aluminiumoksid og derivatisert silika. MF er upolare organiske løsemidler (pentan, heksan osv.). De mest polare analyttene får høyest retensjon [Forelesning ads.krom m notater 3.pdf, slide 3].
- **Elueringsrekkefølge på NP (minst → mest polar)**: mettede hydrokarboner < aromatiske hydrokarboner < etere < estere < aldehyder/ketoner < alkoholer < karboksylsyrer [Forelesning ads.krom m notater 3.pdf, slide 3]. Analytter med polare grupper (OH, NH, SH, CO, NO, SO osv.) holdes sterkere igjen enn analytter uten [chromatographgy_basics_part1.pdf, p. 65].
- **Silika (silikagel)**: Vanligst SF i NP-LC [Forelesning ads.krom m notater 3.pdf, slide 4; chromatographgy_basics_part1.pdf, p. 65].
  - Overflaten har silanolgrupper (a: reaktiv, b: bundet, c: «fri») og siloksangrupper (d) [Forelesning ads.krom m notater 3.pdf, slide 4].
  - Vann brukes til å modifisere silika ved å binde opp, eller «fjerne», frie silanolgrupper [Forelesning ads.krom m notater 3.pdf, slide 4].
  - Lages ved sol-gel-prosesser til sfæriske porøse kuler. Porer 6–30 nm. Stiv og ikke-kompressibel [chromatographgy_basics_part1.pdf, p. 65].
  - Silanolene har pKa fra 6 til under 3. Silika er sur og gir ekstra sterk retensjon av aminer [chromatographgy_basics_part1.pdf, p. 65].
  - Type A har lavere silanolkonsentrasjon. Type B er fullt hydroksylert og har mindre metallurenheter [chromatographgy_basics_part1.pdf, p. 65, Info-box 3.7].
  - Typisk MF er heksan blandet med et mer polart løsemiddel (diklormetan, etylacetat), ofte med 0,1–0,5 % metanol eller acetonitril. Aceton kan ikke brukes med UV pga. høy UV-cutoff [chromatographgy_basics_part1.pdf, p. 65].
  - Alkoholer, vann og acetonitril binder til silanolene og deaktiverer silika, noe som forhindrer sterk tailing. Fordi polare molekyler bindes, kan silika ikke brukes med gradient: re-ekvilibrering tar for lang tid [chromatographgy_basics_part1.pdf, p. 65].
  - God SF for separasjon av posisjonsisomerer [chromatographgy_basics_part1.pdf, p. 65].
- **Aluminiumoksid (alumina)**: Veldig like egenskaper som silika. Separerer etter polaritet, men har litt lavere kapasitet og litt svakere adsorpsjonsstyrke [Forelesning ads.krom m notater 3.pdf, slide 4]. pH på alumina kan justeres til sur, basisk eller nøytral (sur: –Al–OH, nøytral: –Al–OH + –Al–O⁻, basisk: –Al–O⁻). Alumina er stabil i basisk miljø, mens silika brytes ned ved pH > 8 [Forelesning ads.krom m notater 3.pdf, slide 4]. Alumina og titania har basiske funksjoner som gir sterk retensjon av sure analytter. Al-, Ti- og Zr-atomene er Lewis-syrer som holder igjen Lewis-baser (etere, ketoner, sulfoksider, fosfater, aromater) [chromatographgy_basics_part1.pdf, p. 65–66].
- **Derivatisert silika («bonded phase»)**: Silika der elueringsegenskapene justeres ved å derivatisere silanolgruppene med klorsilaner, f.eks. cyanopropyl («nitril», –CN), diol og amino [Forelesning ads.krom m notater 3.pdf, slide 5]. Fungerer som polare adsorbenter og kan brukes med gradient, men bruksområdet er vanligvis smalt [chromatographgy_basics_part1.pdf, p. 66–67].
- **Parametere i retensjonsligningen** [Forelesning ads.krom m notater 3.pdf, slide 5; chromatographgy_basics_part1.pdf, p. 64–65]:
  - Egenskaper ved SF: $V_a$ (adsorbentens overflatevolum, «volum av et monomolekylært lag av eluent») og $\alpha$ (adsorbentaktiviteten, styrken til adsorpsjonsmiddelet).
  - Egenskaper ved analytten: $S^\circ$ (summen av adsorpsjonsenergiene $Q_i$ for hver funksjonelle gruppe, relativt til pentan) og $A_s$ (analyttens «molekylareal», arealet den trenger på SF).
  - Egenskap ved MF: $\varepsilon^\circ$ (adsorpsjonsenergien til MF, «løsemiddelstyrke/eluentstyrke»).
- **Eluentstyrke ($\varepsilon^\circ$)**: MF-ens evne til å fortrenge analytten på SF. En mer polar eluent konkurrerer lettere ut bundet analytt fra adsorpsjonssetene, og er altså en sterkere eluent (i NP!). Stor $\varepsilon^\circ$ gir liten $K$ [Forelesning ads.krom m notater 3.pdf, slide 6; chromatographgy_basics_part1.pdf, p. 65].
- **Eluotrop serie (ε° på silika, bok Tabell 3.2)**: heksan 0,00, toluen 0,22, kloroform 0,26, diklormetan 0,30, dietyleter 0,38, MTBE 0,48, etylacetat 0,48, acetonitril 0,52, THF 0,53, aceton 0,53, 2-propanol 0,60, metanol 0,70 [chromatographgy_basics_part1.pdf, p. 66]. Forelesningstabellen gir også verdier på alumina (f.eks. pentan 0, heksan 0,01, metanol 0,95, vann ≫ 1) [Forelesning ads.krom m notater 3.pdf, slide 6]. Alkaner er svake eluenter, alkoholer sterke [chromatographgy_basics_part1.pdf, p. 65].
- **Optimal $R_f$ i TLC**: 0,2–0,5. TLC-eksempelet viser at 100 % heksan gir flekker ved startlinjen, 100 % etylacetat gir flekker ved fronten og 1:1 etylacetat/heksan gir god spredning [Forelesning ads.krom m notater 3.pdf, slide 6].
- **Analyttens areal $A_s$**: Arealet analytten trenger på SF for å adsorberes. Det øker generelt med størrelsen, og store analytter påvirkes derfor mer av eluentstyrken [Forelesning ads.krom m notater 3.pdf, slide 6].
- **$S^\circ = \sum Q_i$**: Summen av adsorpsjonsenergiene til hver funksjonelle gruppe. $Q_i$ er tabellert for alifatiske og aromatiske grupper på silika, f.eks. hydroksyl aromatisk 4,20 og nitro aromatisk 2,77 [Forelesning ads.krom m notater 3.pdf, slide 7].
- **Eluering i NP**: Isokratisk (samme sammensetning) eller gradient (polaritet). I NP går gradienten fra lav til høy polaritet [Forelesning ads.krom m notater 3.pdf, slide 11].
- **Binære eluentblandinger**: Hvis isokratisk analyse gir gode k-verdier, men dårlig separasjon: bruk et annet (binært) eluent med samme elueringsstyrke, og bruk tabellen (nomogram over ε° for binære blandinger på silika) [Forelesning ads.krom m notater 3.pdf, slide 11–12].
- **To regler for valg av eluent** [Forelesning ads.krom m notater 3.pdf, slide 12]:
  - **B-konsentrasjonsregelen**: Maksimal selektivitet for en løsemiddelblanding A–B oppnås når konsentrasjonen av B er enten stor eller liten.
  - **Hydrogenbindingsregelen**: En forbindelse i MF som gir hydrogenbinding mellom prøve og eluent, gir store forandringer i separasjonen.
- **Ikke pensum**: HILIC og karbonmaterialer [Pensum.pdf; chromatographgy_basics_part1.pdf, p. 67–68].

## Visuals
- **Adsorpsjon som konkurranse om setene** · prosessdiagram [Forelesning ads.krom m notater 3.pdf, slide 1–2]
  - Lyseblå uregelmessig SF-overflate med mange adsorpsjonsseter. Grønne prikker (MF-molekyler) og grå prikker (prøvemolekyler) sitter på og rundt overflaten.
  - Likevekten $X_n + mE_a \rightleftharpoons X_a + mE_n$ over: én analytt som adsorberes fortrenger $m$ MF-molekyler. Pil mot venstre merket «sterkere eluent (høy ε°)».
- **Lineær vs. ikke-lineær isoterm** · kurveskisse, 2 × 4 paneler [Forelesning ads.krom m notater 3.pdf, slide 2–3]
  - Lineær: $[X_a]$ mot $[X_n]$ som rett linje → symmetrisk elueringsprofil → $R_f$ konstant mot påsatt mengde → $t_R$ konstant mot injisert mengde.
  - Ikke-lineær: kurve som flater ut → elueringsprofil med hale → $R_f$ stiger med påsatt mengde → $t_R$ synker med injisert mengde.
  - Merk under: «Husk! Stor $R_f$ = lite retensjon, men stor $t_R$ ($V_r$) = mye retensjon».
- **Silika- og aluminaoverflaten** · tverrsnitt [Forelesning ads.krom m notater 3.pdf, slide 4–5]
  - Silika: Si–O-nettverk med silanolgrupper merket a (reaktiv, blå), b (bundet, rød), c («fri», grønn) og d (siloksan).
  - Derivatisering: Si–OH + Cl–Si(CH₃)₂–R → Si–O–Si(CH₃)₂–R + HCl, med R = cyanopropyl, diol eller amino.
  - Alumina: –Al–O–-kjede med –OH og –O⁻, merket «Sur: –Al–OH, Nøytral: –Al–OH + –Al–O⁻, Basisk: –Al–O⁻».
- **NP vs. RP: elueringsrekkefølge** · plot, to kromatogrammer [Forelesning ads.krom m notater 3.pdf, slide 8]
  - NP-LC: upolar topp først (ved $t_0$), polar topp sist. RP-LC: samme fire topper i motsatt rekkefølge.
  - Felles fargekoding per analytt, slik at rekkefølgen tydelig snur.
- **Interactive plot: retensjon vs. eluentstyrke**
  - Ligning: $\log K = \log V_a + \alpha(S^\circ - A_s\varepsilon^\circ)$, plottet som $\log K$ mot $\varepsilon^\circ$ (0–0,7).
  - To linjer forankret i forelesningsdata: 2,6-dimetylpyridin ($A_s$ = 8, $K$ = 46 ved $\varepsilon^\circ$ = 0) og dibenzopyren ($A_s$ = 15, $K$ = 365 ved $\varepsilon^\circ$ = 0) [Forelesning ads.krom m notater 3.pdf, slide 6].
  - Slider: $\alpha$ 0,3–0,8 (start 0,55, beregnet i worked example).
  - Marker benzen ($\varepsilon^\circ$ = 0,32) og pentan (0). Poeng: den største analytten (høyest $A_s$) får brattest fall, så linjene krysser.

## Equations
### Adsorpsjonslikevekt og fordelingskoeffisient
$$X_n + m\,E_a \rightleftharpoons X_a + m\,E_n \qquad K = \frac{[X_a]}{[X_n]}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $X_n$, $X_a$ | ikke-adsorbert og adsorbert analytt | mol/L |
| $E_a$, $E_n$ | adsorberte og ikke-adsorberte MF-molekyler | – |
| $m$ | antall MF-molekyler som fortrenges | – |
| $K$ | fordelingskoeffisient | dimensjonsløs |
$K$ konstant gir lineær isoterm og ideell, symmetrisk topp [Forelesning ads.krom m notater 3.pdf, slide 1].

### Retensjon i normalfase (Snyder)
$$\log K = \log V_a + \alpha\,(S^\circ - A_s\,\varepsilon^\circ)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V_a$ | adsorbentens overflatevolum (monomolekylært lag av eluent) | mL/g |
| $\alpha$ | adsorbentaktivitet (styrken til adsorpsjonsmiddelet) | – |
| $S^\circ$ | analyttens adsorpsjonsenergi fra pentan, $\sum Q_i$ | relativ |
| $A_s$ | arealet analytten trenger på SF | relativ |
| $\varepsilon^\circ$ | eluentstyrke til MF | relativ |
Stor $\varepsilon^\circ$ gir liten $K$. I forelesningen noteres $k = [X_n]/[X_a]$ ved siden av ligningen [Forelesning ads.krom m notater 3.pdf, slide 5; chromatographgy_basics_part1.pdf, p. 64–65, lign. 3.4].

### Adsorpsjonsenergi for analytten
$$S^\circ = \sum Q_i$$
| Symbol | Meaning | Unit |
|---|---|---|
| $Q_i$ | adsorpsjonsenergi for funksjonell gruppe $i$ (tabell) | relativ |
[Forelesning ads.krom m notater 3.pdf, slide 7; chromatographgy_basics_part1.pdf, p. 65]

### Eluentstyrke for binær blanding
$$\varepsilon^\circ_{AB} = \varepsilon^\circ_A + \frac{\log\left(x_B\,10^{\alpha n_B(\varepsilon^\circ_B - \varepsilon^\circ_A)} + 1 - x_B\right)}{\alpha\, n_B} \qquad (\varepsilon^\circ_B > \varepsilon^\circ_A)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\varepsilon^\circ_{AB}$ | eluentstyrke til blandingen | relativ |
| $\varepsilon^\circ_A$, $\varepsilon^\circ_B$ | eluentstyrke til svak (A) og sterk (B) komponent | relativ |
| $x_B$ | molfraksjon av B | – |
| $n_B$ | arealet B-molekylet tar på overflaten | relativ |
| $\alpha$ | adsorbentaktivitet | – |
I praksis brukes tabellen eller nomogrammet («Bruk tabellen!») [Forelesning ads.krom m notater 3.pdf, slide 11–12].

## Worked example
**Hvor følsom er retensjonen for eluentstyrken? (forelesningsdata)** [Forelesning ads.krom m notater 3.pdf, slide 6]

Data: 2,6-dimetylpyridin ($A_s$ = 8) har $K$ = 46 i pentan ($\varepsilon^\circ$ = 0) og $K$ = 2 i benzen ($\varepsilon^\circ$ = 0,32). Dibenzopyren ($A_s$ = 15) har $K$ = 365 i pentan og $K$ = 0,6 i benzen.
1. Skriv ligningen for begge løsemidler og trekk den ene fra den andre. $V_a$ og $S^\circ$ faller bort: $\log K_{pentan} - \log K_{benzen} = \alpha\, A_s\,(\varepsilon^\circ_{benzen} - \varepsilon^\circ_{pentan})$
2. 2,6-dimetylpyridin: $\log(46/2) = \log 23 = 1{,}36$
3. Løs for $\alpha$: $\alpha = 1{,}36 / (8 \times 0{,}32) = 1{,}36/2{,}56 \approx 0{,}53$
4. Dibenzopyren: $\log(365/0{,}6) = \log 608 = 2{,}78$, så $\alpha = 2{,}78/(15 \times 0{,}32) = 2{,}78/4{,}8 \approx 0{,}58$
5. **Sjekk:** De to estimatene av $\alpha$ er nesten like (≈ 0,55), som de skal være, siden det er samme adsorbent.
6. **Tolkning:** I pentan holdes dibenzopyren sterkest igjen ($K$ = 365 > 46). I benzen er rekkefølgen snudd ($K$ = 0,6 < 2), fordi den store analytten (stor $A_s$) påvirkes mest av økt $\varepsilon^\circ$. Elueringsrekkefølgen kan altså endres ved å bytte eluent.

## Faded example
**$S^\circ$ for nitrofenol og valg av likeverdig eluent** [Forelesning ads.krom m notater 3.pdf, slide 7, 12]

Del A: Beregn $S^\circ$ for nitrofenol på silika.
1. Identifiser funksjonelle grupper: én aromatisk –OH og én aromatisk –NO₂.
2. Slå opp $Q_i$ (aromatisk kolonne): hydroksyl 4,20, nitro 2,77.
3. **(try)** $S^\circ = \sum Q_i = \;?$ → 4,2 + 2,77 = 6,97

Del B: Du har 20 % CH₂Cl₂ i heksan og vil prøve en annen eluent med *samme* styrke.
4. Les av nomogrammet: 20 % CH₂Cl₂ i heksan gir $\varepsilon^\circ$ = 0,16.
5. **(try)** Følg $\varepsilon^\circ$ = 0,16 loddrett ned til linjen «tBME in hexane». Hvilken prosent? → ca. 1,3 % tBME i heksan.
6. **(try)** Hvorfor skulle man bytte, når styrken er den samme? → For å endre selektiviteten. Etter hydrogenbindingsregelen kan en eluent som gir H-binding med prøven endre separasjonen mye.

## Exam traps
- **Eluentstyrke i NP vs. RP**: I NP er en *mer polar* MF en sterkere eluent. I RP er det motsatt (side 08). Notatet setter «(N.P.!)» bak definisjonen [Forelesning ads.krom m notater 3.pdf, slide 6].
- **«Høyere MF-polaritet øker interaksjonen med SF»**: Feil. I NP reduserer høyere MF-polaritet interaksjonene mellom analytt og SF (H24 1(b)) [LF eksamen H2024 IMAK2008.pdf, p. 2].
- **Bare ett svar på «hva påvirker adsorpsjonsstyrken»**: Riktig svar på H24 1(b) var «alle disse»: overflateareal og polaritet til SF, kolonnetemperatur og MF-polaritet [LF eksamen H2024 IMAK2008.pdf, p. 2].
- **$R_f$ og $t_R$ forveksles**: Stor $R_f$ betyr *lite* retensjon, mens stor $t_R$ betyr *mye* [Forelesning ads.krom m notater 3.pdf, slide 3].
- **Gradient på ren silika**: Fungerer dårlig. Polare MF-molekyler binder til silanolene, og re-ekvilibrering tar for lang tid. Derivatisert silika tåler gradient [chromatographgy_basics_part1.pdf, p. 65, 67].
- **Aminer på silika**: Silika er sur (silanol-pKa 3–6) og gir ekstra sterk retensjon og tailing av aminer [chromatographgy_basics_part1.pdf, p. 65].
- **Silika ved høy pH**: Brytes ned ved pH > 8. Alumina er stabil i basisk miljø [Forelesning ads.krom m notater 3.pdf, slide 4].

## Past exam tasks
- **H2024 oppg. 1(b)** (flervalg, 2 av 5 delspørsmål): effekten av mobilfasens polaritet i normalfase-adsorpsjonskromatografi, og hva som påvirker styrken av adsorpsjonen.
- **H2024 oppg. 1(h)** (6 p, delt med side 08): forskjellene på normalfase og omvendt fase HPLC, med eksempler på faser. Løsningsforslaget: NP har polar SF (f.eks. silika) som interagerer med polare analytter via hydrogenbindinger og dipol–dipol-interaksjoner [LF eksamen H2024 IMAK2008.pdf, p. 6].

## Test yourself
**Q:** Ranger etter økende retensjon på silika (NP): ester, mettet hydrokarbon, alkohol, eter.
**A:** Mettet hydrokarbon < eter < ester < alkohol [Forelesning ads.krom m notater 3.pdf, slide 3].

**Q:** Hvilke to egenskaper i retensjonsligningen beskriver analytten, og hvilken beskriver MF?
**A:** Analytten: $S^\circ$ (adsorpsjonsenergi) og $A_s$ (molekylareal). MF: $\varepsilon^\circ$ (eluentstyrke) [Forelesning ads.krom m notater 3.pdf, slide 5].

**Q:** Hvorfor kan man ikke bruke aceton i NP-HPLC med UV-deteksjon?
**A:** Aceton har høy UV-cutoff (330 nm) [chromatographgy_basics_part1.pdf, p. 65–66].

**Q:** Hva er fordelen med alumina fremfor silika?
**A:** pH kan justeres til sur, basisk eller nøytral, og alumina er stabil i basisk miljø, mens silika brytes ned ved pH > 8 [Forelesning ads.krom m notater 3.pdf, slide 4].

**Q:** Hvorfor kalles det «normalfase»?
**A:** Fordi den ble utviklet først og ble kalt «normal». RP ble kalt «omvendt» fordi elueringsrekkefølgen er omtrent omvendt [Forelesning ads.krom m notater 3.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 68].

## Sources
- [Forelesning ads.krom m notater 3.pdf, slide 1–8, 11–12] (mest annoterte versjon. `Forelesning ads.krom m notater.pdf` og `u notater 2` er samme forelesning)
- [chromatographgy_basics_part1.pdf, p. 64–68] (p. = boksidetall; PDF-side = bokside + 16)
- [Pensum.pdf, p. 1]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(b), 1(h)] / [LF eksamen H2024 IMAK2008.pdf, p. 2, 6]
