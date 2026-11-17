---
slug: 17-kvalitativ-og-kvantifiseringsmetoder
title: "Kvalitativ analyse og kalibreringsmetoder"
topic: kvantifisering
exam_weight: medium
exam_weight_note: "H25 oppg. 8 (14 p, intern standard med kalibreringskurve). H24 1(a) flervalg (hva ISTD korrigerer for)"
builds_on: [01-retensjon-og-selektivitet, 04-hplc-system-pumper-injeksjon, 06-hplc-detektorer, 13-gc-detektorer]
used_in: [18-metodevalidering-lod-loq]
sources: ["Kval og kvant analyse.pdf", "koffein _ISTD_student_rev2.pdf", "chromatographgy_basics_part1.pdf", "chromatographgy_basics_part2.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** Hvorfor kan man ikke bruke ekstern standard i GC?
**A:** GC mangler volumkontroll ved injeksjon [chromatographgy_basics_part2.pdf, p. 193; chromatographgy_basics_part1.pdf, p. 44].

**Q:** Hva antar man når man kvantifiserer ved enkel normalisering (areal%)?
**A:** At alle analyttene har lik responsfaktor [Kval og kvant analyse.pdf, p. 6; chromatographgy_basics_part2.pdf, p. 192].

**Q:** Når i prosessen bør intern standard tilsettes?
**A:** Før prøveopparbeidingen, slik at den korrigerer for tap under opparbeiding [Løsningsforslag IMAK2008 H25.pdf, oppg. 8c].

## Mental model
**Kvalitativ analyse** svarer på «hva?», og **kvantitativ analyse** på «hvor mye?» [Kval og kvant analyse.pdf, p. 1]. I kromatografi identifiseres en analytt ved retensjonstiden. Det krever stabil retensjon, og for en ukjent analytt bør minst to ulike (ortogonale) teknikker brukes, f.eks. to SF eller GC-MS [Kval og kvant analyse.pdf, p. 1–2; chromatographgy_basics_part1.pdf, p. 44].

Kvantitativ analyse bygger på at toppareal eller topphøyde er proporsjonal med mengden. Proporsjonalitetskonstanten (responsfaktoren) er ulik for ulike stoffer og detektorer, så detektoren må kalibreres [Kval og kvant analyse.pdf, p. 3–4; chromatographgy_basics_part2.pdf, p. 189–192]. Det finnes fire kalibreringsmetoder [Kval og kvant analyse.pdf, p. 6–9; chromatographgy_basics_part2.pdf, p. 192–195]:
- **Normalisering**: forutsetter lik respons.
- **Ekstern standard**: krever nøyaktig injeksjonsvolum.
- **Intern standard**: et kjent stoff i fast mengde i alle prøver og standarder, slik at forholdet analytt/IS korrigerer for variasjon i injeksjon og prøveopparbeiding.
- **Standardtilsetning**: kalibrerer i selve prøven og brukes når man ikke har en blank prøve.

## Concepts and definitions
- **Kvalitativ analyse**: Bestemme ukjent analytt i prøven. Benytter retensjonstiden som indikasjon, men må ofte benytte andre teknikker i tillegg [Kval og kvant analyse.pdf, p. 1].
- **Stabil retensjonstid**: Retensjonstiden må være stabil. I GC påvirkes den av trykk og temperatur, i LC av MF-sammensetning og flow [Kval og kvant analyse.pdf, p. 1].
- **Kromatografisk effektivitet og gjentagelse**: Effektivitet er også viktig for kvalitativ analyse. Gjentagelse sjekker at $R_t$ er stabil, og man oppgir $R_t$ med usikkerhet, f.eks. RSD [Kval og kvant analyse.pdf, p. 2].
- **Ny eller ukjent analytt**: Kvalitativ identifikasjon med minst 2 ulike (ortogonale) kromatografiske teknikker [Kval og kvant analyse.pdf, p. 2]. Boka: sammenligning av $t_R$ med standarder på minst to ulike SF, men GC-MS er mest brukt [chromatographgy_basics_part1.pdf, p. 44].
- **RSD (relativt standardavvik)**: std / gjennomsnitt × 100 % [Kval og kvant analyse.pdf, p. 2].
- **Kvantitativ analyse**: Hvor mye av en analytt finnes i en prøve. Metoder: normalisering, ekstern standard, intern standard og standardaddisjon [Kval og kvant analyse.pdf, p. 3].
- **Topphøyde vs. areal** [Kval og kvant analyse.pdf, p. 3; chromatographgy_basics_part2.pdf, p. 189–190]:
  - Topphøyde er en enkel parameter, som ikke påvirkes av asymmetri eller litt overlappende topper.
  - Areal påvirkes av overlapp og asymmetri (gir grensene vanskelig).
  - Boka: topphøyden kan variere med flow for både konsentrasjons- og massefølsomme detektorer, mens arealet bare varierer med flow for konsentrasjonsfølsomme. FID og areal tåler altså flowvariasjon.
- **Krav for pålitelig kvantifisering**: Toppen må være tilstrekkelig stor mot støyen, godt separert fra nabotopper og tilstrekkelig smal [chromatographgy_basics_part2.pdf, p. 189–190]. LOD og LOQ behandles på side 18.
- **Responsfaktor**: Endring i signalstyrke per endring i konsentrasjon (konsentrasjonsfølsom detektor) eller mengde (massefølsom). $C = dy/dc$ eller $dy/dm$ [Kval og kvant analyse.pdf, p. 4].
  - Ulike stoffer kan ha ulike responsfaktorer: ofte på ulike detektorer, men også på samme detektor ved ulike analysebetingelser [Kval og kvant analyse.pdf, p. 4].
  - Responsfaktoren er stigningstallet på kurven for detektorrespons mot konsentrasjon [chromatographgy_basics_part2.pdf, p. 192].
- **Normalisering (areal%)**: Summer arealet av alle toppene og regn ut hver som andel. Enkelt, men kan være unøyaktig, fordi det forutsetter lik responsfaktor for alle analyttene [Kval og kvant analyse.pdf, p. 6; chromatographgy_basics_part2.pdf, p. 192]. Forutsetter at alle komponentene eluerer [chromatographgy_basics_part2.pdf, p. 192].
- **«Skikkelig» normalisering**: Bestem responsfaktoren for alle analyttene med en standardprøve (like deler av hver), og korriger arealene (høydene) med responsfaktoren før normalisering [Kval og kvant analyse.pdf, p. 6].
- **Ekstern standard («klassisk kalibrering»)**: Analyser standarder med kjent konsentrasjon og lag en kalibreringskurve (signal mot konsentrasjon). Den ukjente prøven leses av [Kval og kvant analyse.pdf, p. 7; chromatographgy_basics_part2.pdf, p. 192–193].
  - **Fordeler**: gir korrekt (nøyaktig) resultat i motsetning til «forenklet» normalisering, og man slipper å kalibrere for stoffer som ikke er av interesse.
  - **Ulempe**: kritisk med injeksjonsvolum. Gir stor variasjon i resultat ved variasjon i injeksjonsvolum. Kan bedres med autoinjektor eller loop-injeksjon (HPLC) [Kval og kvant analyse.pdf, p. 7–8].
  - Med prøveopparbeiding må kalibreringsløsningene lages ved spiking av blank prøve, behandlet likt som prøvene. Krever streng volumkontroll. Kan brukes i HPLC, men ikke i GC (ingen volumkontroll ved injeksjon). Kan brukes med enkel opparbeiding (proteinfelling), men ikke med SPE eller LLE. Forskjellen i stigningstall mellom spiket blank og ren standard reflekterer gjenvinningen [chromatographgy_basics_part2.pdf, p. 193].
- **Intern standard (IS)**: Et kjent stoff i kjent mengde tilsettes prøven og alle kalibreringsløsningene. Kalibreringskurven plottes som signal A / signal IS mot [A]/[IS] [Kval og kvant analyse.pdf, p. 8; chromatographgy_basics_part2.pdf, p. 193–194].
  - Eliminerer effekten av variasjon i injeksjonsvolum og tar også hensyn til tap i prøveopparbeidingen [Kval og kvant analyse.pdf, p. 8]. Fordel: ved prøveopparbeiding «tapes» like mye av A og IS [Kval og kvant analyse.pdf, p. 9].
  - Kompenserer for variasjon i injeksjonsvolum, deteksjon og prøvepreparering ved å normalisere signalet [Løsningsforslag IMAK2008 H25.pdf, oppg. 8a].
  - Kvantitativ GC gjøres alltid med IS, fordi repeterbare injeksjoner er nesten umulige [chromatographgy_basics_part1.pdf, p. 44].
- **Krav til IS** [Kval og kvant analyse.pdf, p. 9; chromatographgy_basics_part2.pdf, p. 193–194]:
  - Ikke finnes i prøven fra før.
  - Lignende kjemiske og fysikalske egenskaper som analytten, og oppføre seg likt i prøveopparbeiding, ekstraksjon og derivatisering.
  - Separert fra andre stoffer (unntatt med MS-deteksjon), men med retensjonstid nær analyttene.
  - Tilsatt i konsentrasjon som gir omtrent lik topp som forventet analytt.
  - Stabil, tilgjengelig og med høy renhet.
  - Isotopmerkede standarder (¹³C, ²H …) er best [Kval og kvant analyse.pdf, p. 9]. Med MS kan f.eks. deutererte IS brukes [chromatographgy_basics_part1.pdf, p. 44].
- **Koffeinlaben**: Sammenligner ekstern og intern standard for koffein i drikke på HPLC-UV, og ber studentene velge en egnet IS ut fra kriteriene over [koffein _ISTD_student_rev2.pdf, p. 1–4].
- **Standardtilsetning (standardaddisjon)**: Først analyseres prøven. Så tilsettes kjente mengder analytt til prøven, og den analyseres igjen. Standardkurven ekstrapoleres for å finne startkonsentrasjonen [Kval og kvant analyse.pdf, p. 9]. Brukes mest når man ikke har en blank prøve. Lite brukt i kromatografi, fordi det trengs flere analyser per prøve [chromatographgy_basics_part2.pdf, p. 194–195].
- **Lineært område**: Pass på at konsentrasjonen er i det lineære området for detektoren. Over det lineære området ligger dynamisk område, og helt øverst et «forbudt område» (detektor i metning) [Kval og kvant analyse.pdf, p. 11].

## Visuals
- **Kvalitativ identifikasjon via retensjonstid** · plot, tre stablede kromatogrammer [Kval og kvant analyse.pdf, p. 1]
  - «Component A standard sample» (én rød topp), «Component B standard sample» (én oransje topp) og «Unknown sample» med flere topper, der to faller på samme $t_R$ som A og B.
  - Stiplede vertikale linjer fra standardene ned til den ukjente. Etikett: «retensjonstiden må være stabil: GC = trykk/temp, LC = MF-sammensetning/flow».
- **Responsfaktor for tre detektorer** · plot [Kval og kvant analyse.pdf, p. 4]
  - x-akse: mengdeenhet (konsentrasjon). y-akse: signalstyrke.
  - Tre rette linjer gjennom origo: det. B (brattest, «mer følsom»), det. A og det. C (slakest, «mindre følsom»). Samme Δ-mengde gir stor Δ-signal for B og liten for C.
- **Normalisering med og uten responsfaktor** · tabell-som-bilde + plot [Kval og kvant analyse.pdf, p. 6]
  - Øverst: tre topper A, B og C med areal 20, 70 og 150, og «Total 240».
  - Nederst: standardprøve (like deler) med arealer 1000, 1500, 1000 og 500 → relativ følsomhet 2 : 3 : 2 : 1. Ukjent prøve med arealer 1000, 2000, 500 og 1000 → korrigert total 2417.
- **Ekstern vs. intern standard-kurve** · plot, to paneler [Kval og kvant analyse.pdf, p. 7–8; chromatographgy_basics_part2.pdf, p. 192, 194]
  - Ekstern: x = konsentrasjon (5, 10, 15, 20), y = signal (23,6, 48,8, 72,5, 97,2), med en rød stiplet avlesning av ukjent prøve.
  - Intern: x = [A]/[IS] (0,4, 0,8, 1,6), y = signal A / signal IS (0,8, 1,6, 3,2), med en rød stiplet avlesning ved A/IS = 2.
- **Standardtilsetning** · plot [Kval og kvant analyse.pdf, p. 9]
  - x-akse: tilsatt mengde (A, A+S, A+2S, A+3S). y-akse: signal.
  - Fire punkter på en linje som ekstrapoleres ned til x-aksen på negativ side. Skjæringspunktet (sirklet) er startkonsentrasjonen.
- **Interactive plot: ISTD-kalibrering (H25 oppg. 8)**
  - Datapunkter: koffein 2,5 / 5,0 / 10,0 / 20,0 mg/L mot $A_{koffein}/A_{IS}$ = 0,28 / 0,58 / 1,15 / 2,3 [IMAK2008 eksamen H2025.pdf, oppg. 8].
  - Regresjonslinje (beregnet: $y = 0{,}1152x - 0{,}0022$, $R^2$ = 0,99997).
  - Slider: ukjent forhold 0–2,5 (start 0,75, fra LF). Vis avlest konsentrasjon og marker hvis den ligger utenfor kalibreringsområdet.

## Equations
### Normalisering
$$\text{areal\%}_i = \frac{A_i}{\sum A}\times 100\,\% \qquad \text{(korrigert: } A_i \rightarrow A_i/f_i\text{)}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A_i$ | areal (eller høyde) av topp $i$ | relativ |
| $\sum A$ | totalt areal av alle topper | relativ |
| $f_i$ | relativ responsfaktor for komponent $i$ | – |
[Kval og kvant analyse.pdf, p. 6; chromatographgy_basics_part2.pdf, p. 192]

### Responsfaktor
$$C = \frac{dy}{dc}\;\;\text{(kons.-følsom)} \qquad C = \frac{dy}{dm}\;\;\text{(massefølsom)}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $y$ | detektorsignal | relativ |
| $c$ / $m$ | konsentrasjon / masse | mg/L / ng |
Enheten avhenger av detektoren [Kval og kvant analyse.pdf, p. 4].

### Ekstern standard
$$y = a\,x + b \quad\Rightarrow\quad x_{prøve} = \frac{y_{prøve} - b}{a}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $y$ | toppareal eller høyde | relativ |
| $x$ | konsentrasjon av analytt | mg/L |
| $a$, $b$ | stigningstall og konstantledd fra regresjon | – |
[chromatographgy_basics_part2.pdf, p. 193]

### Intern standard
$$\frac{A_A}{A_{IS}} = a\,\frac{c_A}{c_{IS}} + b \quad\Rightarrow\quad c_A = c_{IS}\cdot\frac{(A_A/A_{IS}) - b}{a}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A_A$, $A_{IS}$ | toppareal for analytt og IS | relativ |
| $c_A$, $c_{IS}$ | konsentrasjon av analytt og IS | µg/mL |
Holdes $c_{IS}$ lik i alle kalibreringsprøver og prøver, kan $c_A$ brukes direkte på x-aksen [chromatographgy_basics_part2.pdf, p. 194; Kval og kvant analyse.pdf, p. 8].

## Worked example
**H25 oppg. 8: koffein med intern standard** (14 p) [IMAK2008 eksamen H2025.pdf, oppg. 8; Løsningsforslag IMAK2008 H25.pdf, oppg. 8]

Kalibrering (fast IS-konsentrasjon): 2,5 / 5,0 / 10,0 / 20,0 mg/L koffein gir $A_{koffein}/A_{IS}$ = 0,28 / 0,58 / 1,15 / 2,3. Opplysningen «en ukjent prøve gir forholdet 0,75» falt ut av eksamensoppgaven, og det ble tatt hensyn til i poengsettingen.

*a) Hensikt med IS?*
1. IS kompenserer for variasjon i injeksjonsvolum, deteksjon og prøvepreparering ved å normalisere signalet.

*b) Konsentrasjon i ukjent prøve (forhold 0,75)*
2. IS-konsentrasjonen er fast, så x-aksen kan være koffein (mg/L) direkte [chromatographgy_basics_part2.pdf, p. 194].
3. Lineær regresjon på de fire punktene gir $y = 0{,}1152\,x - 0{,}0022$ ($R^2$ ≈ 1,000). Raskt alternativ: stigningstall ≈ 2,3/20 = 0,115.
4. Løs for x: $x = (0{,}75 + 0{,}0022)/0{,}1152 \approx 6{,}5$ mg/L.
5. Sjekk: 6,5 mg/L ligger innenfor kalibreringsområdet (2,5–20 mg/L), så det er ingen ekstrapolering.

*c) Hvorfor tilsette IS før prøvepreparering?*
6. Det korrigerer for tap under opparbeiding og variasjoner mellom prøver, fordi like mye av A og IS «tapes» [Kval og kvant analyse.pdf, p. 9].

*d) Én begrensning*
7. IS må ha lignende kromatografiske egenskaper som analytten og ikke være naturlig til stede i prøven.

## Faded example
**Bokas IS-eksempel (Tabell 10.1)** [chromatographgy_basics_part2.pdf, p. 194–195]

Kalibreringskurve: $A_A/A_{IS} = 1{,}0617\,(c_A/c_{IS}) - 0{,}0202$ (IS = 0,3000 µg/mL i kalibreringsprøvene). Prøvene er tilsatt IS = 0,3200 µg/mL, ulikt kalibreringsprøvene. Replikat 1: $A_A$ = 74 555, $A_{IS}$ = 59 760.
1. Arealforhold: $74\,555/59\,760 = 1{,}248$.
2. Løs for konsentrasjonsforholdet: $c_A/c_{IS} = (1{,}248 + 0{,}0202)/1{,}0617 = 1{,}194$.
3. Gang med IS-konsentrasjonen *i prøven*: $c_A = 1{,}194 \times 0{,}3200 = 0{,}382$ µg/mL.
4. **(try)** Replikat 2 ($A_A$ = 76 321, $A_{IS}$ = 69 222): → forhold 1,103, $c_A/c_{IS}$ = 1,058, $c_A$ = 0,338 µg/mL.
5. **(try)** Replikat 3 ($A_A$ = 65 348, $A_{IS}$ = 53 803): → forhold 1,215, $c_A/c_{IS}$ = 1,163, $c_A$ = 0,372 µg/mL.
6. **(try)** Gjennomsnitt og standardavvik: → 0,36 µg/mL (s ≈ 0,02), som er bokas svar.
7. **(try)** Hvorfor er det viktig å bruke 0,3200 og ikke 0,3000 i trinn 3? → Konsentrasjonsforholdet må ganges med IS-konsentrasjonen i *prøven*.

## Exam traps
- **Ekstern standard i GC**: Ikke egnet, fordi GC mangler volumkontroll ved injeksjon. Bruk IS [chromatographgy_basics_part2.pdf, p. 193; chromatographgy_basics_part1.pdf, p. 44].
- **Normalisering uten responsfaktor**: Gir feil hvis stoffene har ulik respons, så areal% ≠ masse% [Kval og kvant analyse.pdf, p. 6].
- **IS tilsatt etter opparbeiding**: Korrigerer da bare for injeksjon, ikke for tap i opparbeidingen [Løsningsforslag IMAK2008 H25.pdf, oppg. 8c; Kval og kvant analyse.pdf, p. 9].
- **IS som finnes i prøven fra før**: Ubrukelig. Den kjente mengden blir feil [Kval og kvant analyse.pdf, p. 9].
- **Ekstrapolere utenfor kalibreringsområdet / det lineære området**: Konsentrasjonen må være i det lineære området for detektoren [Kval og kvant analyse.pdf, p. 11].
- **Topphøyde og flow**: Høyden kan variere med flow for begge detektortyper. Areal med massefølsom detektor (FID) gjør ikke det [chromatographgy_basics_part2.pdf, p. 190].
- **Standardtilsetning brukes rutinemessig**: Den er tidkrevende (flere analyser per prøve) og brukes mest når blank prøve mangler [chromatographgy_basics_part2.pdf, p. 194–195].

## Past exam tasks
- **H2025 oppg. 8** (14 p): koffein i drikke med HPLC og IS. (a) Hensikt med IS, (b) estimer konsentrasjonen fra kalibreringsdata (forhold 0,75 falt ut av oppgaven), (c) hvorfor tilsette IS før prøvepreparering, (d) én begrensning.
- **H2024 oppg. 1(a)** (flervalg, 1 av 5 delspørsmål): hva en intern standard korrigerer for (variasjoner i prøvepreparering og injeksjon).

## Test yourself
**Q:** Tre topper har areal 20, 70 og 150. Hva er areal% for hver ved enkel normalisering?
**A:** Total 240: A = 8,3 %, B = 29,2 %, C = 62,5 % [Kval og kvant analyse.pdf, p. 6].

**Q:** Kalibrering med IS (500 µM i alle): [A] = 200, 400, 800 µM gir signal A / signal IS = 0,8, 1,6, 3,2. En prøve tilsatt 500 µM IS gir signal A = 8000 og IS = 4000. Hva er [A]?
**A:** A/IS = 2, så [A]/[IS] = 1 og [A] = 500 µM [Kval og kvant analyse.pdf, p. 8].

**Q:** Nevn fire krav til en intern standard.
**A:** Ikke finnes i prøven, lignende egenskaper som analytten, separert fra andre stoffer men med $t_R$ nær analytten, og stabil og tilgjengelig med høy renhet. Isotopmerket er best [Kval og kvant analyse.pdf, p. 9; chromatographgy_basics_part2.pdf, p. 193–194].

**Q:** Når foretrekkes standardtilsetning?
**A:** Når man ikke har en blank prøve (uten analytt over LOD) å lage kalibreringsprøver i [chromatographgy_basics_part2.pdf, p. 194–195].

**Q:** Hvorfor bør man bruke minst to ulike kromatografiske teknikker for å identifisere en ukjent analytt?
**A:** Retensjonstid alene er bare en indikasjon. To ortogonale teknikker (eller GC-MS) gir sikrere identifikasjon [Kval og kvant analyse.pdf, p. 1–2; chromatographgy_basics_part1.pdf, p. 44].

## Sources
- [Kval og kvant analyse.pdf, p. 1–4, 6–9, 11] (håndskrevet forelesning. p. 10, støy/LOD/LOQ, er brukt på side 18)
- [koffein _ISTD_student_rev2.pdf, p. 1–4]
- [chromatographgy_basics_part1.pdf, p. 44] (p. = boksidetall; PDF-side = bokside + 16)
- [chromatographgy_basics_part2.pdf, p. 189–195] (p. = boksidetall; PDF-side = bokside − 84)
- [IMAK2008 eksamen H2025.pdf, oppg. 8] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 8]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(a)] / [LF eksamen H2024 IMAK2008.pdf, p. 1–2]
