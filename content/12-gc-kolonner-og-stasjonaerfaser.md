---
slug: 12-gc-kolonner-og-stasjonaerfaser
title: "GC: kolonner, stasjonærfaser og temperaturprogram"
topic: gc
exam_weight: high
exam_weight_note: "H25 oppg. 4 (12 p-case: elueringsrekkefølge, temperaturprogram, Carbowax, starttemperatur) + oppg. 3 (PLOT). H24 1(f) (4 p), 1(c) (kolonneblødning, WCOT), 1(b) (PDMS)"
builds_on: [01-retensjon-og-selektivitet, 02-effektivitet-og-opplosning, 03-bandspredning-van-deemter, 11-gc-baeregass-og-injeksjon]
used_in: [13-gc-detektorer, 17-kvalitativ-og-kvantifiseringsmetoder]
sources: ["Gasskromatografi m notater.pdf", "Krom. Teori - Innledning og repetisjon 190826.pdf", "chromatographgy_basics_part1.pdf", "Pensum.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** Hva skjer med retensjonen i GC når kolonnetemperaturen økes?
**A:** Den synker. Høyere temperatur øker analyttens damptrykk [LF eksamen H2024 IMAK2008.pdf, p. 6; chromatographgy_basics_part1.pdf, p. 41].

**Q:** Hvilken type kapillærkolonne er vanligst: WCOT, SCOT eller PLOT?
**A:** WCOT [Gasskromatografi m notater.pdf, slide 8; chromatographgy_basics_part1.pdf, p. 26].

**Q:** Hva separerer en helt upolar SF (100 % dimetylpolysiloksan) hovedsakelig etter?
**A:** Kokepunkt [chromatographgy_basics_part1.pdf, p. 37].

## Mental model
I GC har bæregassen ingen interaksjon med analyttene. Retensjonen bestemmes av to ting: hvor flyktig analytten er ved kolonnetemperaturen (damptrykk $p^\circ$), og hvor godt den løser seg i SF (aktivitetskoeffisient $\gamma^\infty$) [chromatographgy_basics_part1.pdf, p. 37]. På en upolar SF blir analyttene nesten ikke «likt» av fasen, så rekkefølgen følger kokepunkt. På en polar SF (PEG, cyano) kommer polaritet og hydrogenbinding i tillegg, så stoffer med samme kokepunkt men ulike funksjonelle grupper kan skilles [chromatographgy_basics_part1.pdf, p. 37–38; Gasskromatografi m notater.pdf, slide 9]. Temperaturen er GCs «gradient». Lav temperatur gir god separasjon av flyktige stoffer, men tregt for tunge. Et temperaturprogram fra lav til høy gir både separasjon og kort analysetid [Gasskromatografi m notater.pdf, slide 6; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 12]. Kolonnen er nesten alltid en lang, tynn kapillær med en tynn væskefilm på veggen (WCOT), som gir svært høye platetall [Gasskromatografi m notater.pdf, slide 7–8; chromatographgy_basics_part1.pdf, p. 25–26].

## Concepts and definitions
- **Kolonneovn**: En enkel, men kritisk del. Temperaturen må reguleres svært nøyaktig, og en vifte gir god sirkulasjon. Den kan kjøres isotermt eller med gradient (temperaturprogram) [Gasskromatografi m notater.pdf, slide 6].
- **Temperatur og retensjon**: Kolonnetemperaturen styrer retensjonen gjennom damptrykket $p^\circ$. Temperaturen bør være så høy som mulig for kort analysetid, men fortsatt gi separasjon [chromatographgy_basics_part1.pdf, p. 41]. Høyere temperatur øker damptrykket og reduserer retensjonstiden [LF eksamen H2024 IMAK2008.pdf, p. 6].
- **Isotermt vs. temperaturprogram**: Isotermt passer best for komponenter med like kokepunkter. Temperaturprogram brukes for komplekse prøver med stort kokepunktsspenn, og må brukes ved splitless injeksjon [chromatographgy_basics_part1.pdf, p. 41]. Forelesningseksempel: isotermt 45 °C gir god separasjon av tidlige topper, men sene topper er brede og kommer etter ca. 30 min. Isotermt 145 °C gir raskt resultat, men tidlige topper overlapper. Temperaturprogram 30 → 180 °C med 5 °C/min gir alle topper skarpe og separert [Gasskromatografi m notater.pdf, slide 6].
- **Pakkede kolonner**: Fylt med partikler som kan være dekket med SF. Høy kapasitet, lengde 2–3 m, ID 2–3 mm [Gasskromatografi m notater.pdf, slide 7]. Typisk 2000–3000 plater/m. I GLC: < 10 % (w/w) SF for analytiske, 20–30 % for preparative [chromatographgy_basics_part1.pdf, p. 25].
- **Åpne rør / kapillærkolonner (OT)**: Vanligst. 25–50 m lange, ID 0,1–0,5 mm [Gasskromatografi m notater.pdf, slide 7]. Boka: ID 0,1–0,5 mm, 10–100 m, ca. 3000 plater/m for 0,25 mm ID, så 30 m gir ca. 90 000 plater. Laget av fused silica med polyimidbelegg utenpå for mekanisk styrke (polyimid brytes ned ved 300–350 °C) [chromatographgy_basics_part1.pdf, p. 25].
- **WCOT (Wall Coated Open Tubular)**: Vanligst. Høy effektivitet, der ID og sjikttykkelse påvirker $H$ [Gasskromatografi m notater.pdf, slide 8]. Flytende SF som tynn film (0,1–0,5 µm, typisk 0,25 µm) på innerveggen, brukt til GLC [chromatographgy_basics_part1.pdf, p. 26]. Løsningsforslaget: en type kapillærkolonne i GC med tynn film av SF belagt direkte på innsiden av kapillæren (uten fyllmateriale), som gir høy effektivitet og brukes ofte for flyktige forbindelser [LF eksamen H2024 IMAK2008.pdf, p. 3].
- **SCOT (Support Coated Open Tubular)**: Væske-SF belagt på et porøst lag eller porøse partikler på innerveggen. Høyere prøvekapasitet, men lavere effektivitet [Gasskromatografi m notater.pdf, slide 8; chromatographgy_basics_part1.pdf, p. 26].
- **PLOT (Porous Layer Open Tubular)**: Faste porøse partikler på innerveggen, altså en «pakket» kapillærkolonne [Gasskromatografi m notater.pdf, slide 8]. Brukes til GSC, der det porøse laget er SF [chromatographgy_basics_part1.pdf, p. 26]. Løsningsforslaget: kapillærkolonner der SF er et porøst fast lag på kolonneveggen, ofte brukt i GC [Løsningsforslag IMAK2008 H25.pdf, oppg. 3].
- **Filmtykkelse**: Tynn film gir lav $H$, mindre blødning og kort analysetid. Tykk film gir mindre adsorpsjon til matriks og tåler større prøvemengder [chromatographgy_basics_part1.pdf, p. 40–41]. Forelesningsfiguren for en 0,53 mm wide-bore kolonne viser at 1,0 µm film gir lavere HETP enn 5,0 µm [Gasskromatografi m notater.pdf, slide 8].
- **Bærematerialet (pakkede kolonner, SCOT)**: Kjemisk inert, termisk stabilt og med stor overflate, f.eks. kiselgur fra kiselalger [Gasskromatografi m notater.pdf, slide 9]. Kolonnematerialet (veggene) er glass eller metall for pakkede kolonner og fused silica for kapillærer [Gasskromatografi m notater.pdf, slide 9]. (Bokas 2.6.2.1 «Matrix» er ikke pensum [Pensum.pdf].)
- **SF i GLC**: En væske med lavt smeltepunkt og høyt kokepunkt. Retensjonen avhenger av affiniteten (løseligheten) til prøven i væskefasen: polaritet, H-bindinger osv. [Gasskromatografi m notater.pdf, slide 9].
- **Kolonneblødning**: SF løsner, treffer detektoren og gir støy. Signalet øker med tid og temperatur [Gasskromatografi m notater.pdf, slide 9]. Løsningsforslaget: lekkasje eller fordamping av SF fra GC-kolonnen, ofte ved høye temperaturer eller pga. nedbrytning over tid. Gir bakgrunnsstøy, dårligere analysekvalitet og kortere kolonnelevetid [LF eksamen H2024 IMAK2008.pdf, p. 3].
- **Silikoner (polysiloksaner)**: De vanligste SF, ofte silikonoljer (lange polymerer) [Gasskromatografi m notater.pdf, slide 10; chromatographgy_basics_part1.pdf, p. 38]. Polariteten justeres via sidegruppene [chromatographgy_basics_part1.pdf, p. 39, Tabell 2.5]:
  - Metylsilikon (100 % dimetylpolysiloksan, PDMS) er upolar.
  - Metylfenylsilikon, f.eks. 5 % fenyl («Equity-5, SLB-5, DB-5»), er middels polar.
  - Cyano-silikon, f.eks. DB-1701 (50 % cyanopropylfenyl / 50 % dimetylsiloksan), er polar [Gasskromatografi m notater.pdf, slide 10].
  - Polydimetylsiloksan (PDMS) er typisk SF for ikke-polare forbindelser i GC [LF eksamen H2024 IMAK2008.pdf, p. 2].
- **Polyetylenglykol (PEG, «Carbowax»)**: Polar fase for analyse av polare analytter [Gasskromatografi m notater.pdf, slide 11; chromatographgy_basics_part1.pdf, p. 38]. Squalan er en upolar ikke-silikonfase [chromatographgy_basics_part1.pdf, p. 38].
- **Polaritetsskala**: 100 % dimetylpolysiloksan < 5 % fenyl < 35 % fenyl < 50 % fenyl < 50 % cyanopropylfenyl < PEG < 70 % cyanopropylfenyl < 90 % cyanopropylfenyl [Gasskromatografi m notater.pdf, slide 12].
- **Kjemisk bundet SF («CB»)**: OH-gruppene på siloksanen reagerer med støttematerialet (silika) ved oppvarming [Gasskromatografi m notater.pdf, slide 12]. Immobiliserte faser (kjemisk bundet til veggen og/eller kryssbundet til gummi) har økt stabilitet og levetid og er nå vanligst [chromatographgy_basics_part1.pdf, p. 39].
- **GSC (adsorpsjon)**: Brukes for (natur)gassanalyse. SF er alumina/silika, aktivt kull eller molekylsikter («molecular sieves») [Gasskromatografi m notater.pdf, slide 14]. Boka: aktivt kull (CO, CH₄, CO₂, N₂), molekylsikter (H₂, O₂, N₂, CH₄, CO) og porøse polymerer (Porapak, små polare forbindelser), med TCD som detektor for permanente gasser [chromatographgy_basics_part1.pdf, p. 36].
- **Valg av SF etter analytt** [chromatographgy_basics_part1.pdf, p. 44]:
  - Permanente gasser: faste adsorbenter (GSC).
  - Upolare: metylsilikoner.
  - Dobbeltbindinger, karbonyl: metylfenylsilikoner.
  - OH-grupper: PEG eller cyano-polysiloksaner.
  - Svært komplekse prøver: metylfenylsilikoner.
  - Enantiomerer: syklodekstrin.
- **Valg av kolonnedimensjon** [chromatographgy_basics_part1.pdf, p. 44]:
  - Høy effektivitet: lang (30–100 m), smal (0,1–0,25 mm), tynn film (0,1–0,25 µm).
  - Høy hastighet: kort, smal, tynn film.
  - Store prøvevolum: vid ID (0,53–0,7 mm), tykk film (1–5 µm) eller SCOT.
- **Retensjonsindeks (Kovats, I)**: Brukes for å sammenligne SF. Man analyserer n-alkaner isotermt og plotter $\log t_R'$ mot antall C. I = 100 × antall C, f.eks. butan = 400. $t_R'$ må justeres for stoffet X og for alkanene før og etter (n og n+1). Gjør det mulig å sammenligne I for ulike standarder på ulike SF [Gasskromatografi m notater.pdf, slide 13; chromatographgy_basics_part1.pdf, p. 40].
- **McReynolds-systemet**: 5 stoffer analyseres på SF, og I beregnes for alle. Det gjentas på maks upolar standardfase (squalan), og ΔI = I_SF − I_sq beregnes. De 5 McReynolds-konstantene karakteriserer SF. Teststoffene er benzen, 2-butanol (bok: 1-butanol), 2-pentanon, nitropropan og pyridin [Gasskromatografi m notater.pdf, slide 14; chromatographgy_basics_part1.pdf, p. 40].
- **Faktorer som påvirker retensjonstiden i GC (H24 1(f))**: Kolonnetemperatur, bæregassens strømningshastighet, stasjonær fase, analyttens flyktighet og polaritet, og kolonnelengde og diameter [LF eksamen H2024 IMAK2008.pdf, p. 6].
- **Kvalitativ og kvantitativ GC**: Identifikasjon ved å sammenligne $t_R$ med standarder på minst to ulike SF, men GC-MS er mest brukt. Kvantitativ GC gjøres alltid med intern standard, fordi repeterbare injeksjoner er nesten umulige [chromatographgy_basics_part1.pdf, p. 44].
- **2D GC (GC × GC)**: To kolonner med ulik (ortogonal) separasjonsmekanisme, koblet via en modulator. Total toppkapasitet er produktet av hver dimensjon. Comprehensive betyr at hele prøven overføres, heart-cut at bare én fraksjon overføres [chromatographgy_basics_part1.pdf, p. 42–43].
- **Derivatisering**: Ikke-flyktige stoffer med –COOH, –OH eller –NH₂ gjøres flyktige og termisk stabile, f.eks. fettsyrer til estere. Kan også øke detekterbarheten (f.eks. ECD-responsive reagenser) [chromatographgy_basics_part1.pdf, p. 17, 44].

## Visuals
- **Tre kapillærkolonnetyper** · tverrsnitt [Gasskromatografi m notater.pdf, slide 7–8; chromatographgy_basics_part1.pdf, p. 26, Fig. 2.6]
  - Tre sirkler side om side. WCOT: tynn væskefilm på veggen. PLOT: faste porøse partikler på veggen. SCOT: bærepartikler på veggen med væskefilm på.
  - Under hver: «GLC» / «GSC» / «GLC», og «høyest effektivitet» / «gasser» / «høyere kapasitet, lavere effektivitet».
  - WCOT-snitt fra innsiden: SF-film (0,1–0,5 µm) → fused silica → polyimid-lag.
- **Temperaturprogram vs. isotermt** · plot, tre stablede kromatogrammer + temperaturprofil [Gasskromatografi m notater.pdf, slide 6; Krom. Teori - Innledning og repetisjon 190826.pdf, slide 12]
  - (a) Isotermt 45 °C: tidlige topper separert, sene topper brede, ca. 30 min. (b) Isotermt 145 °C: tidlige topper klumpet sammen. (c) 30 → 180 °C med 5 °C/min: ni jevnt fordelte, skarpe topper.
  - Til høyre: temperatur mot tid, med en lineær rampe (rød) og en trinnvis rampe (svart) fra ca. 30 °C til 180 °C.
- **Kolonneblødning** · kurveskisse [Gasskromatografi m notater.pdf, slide 9]
  - x-akse: tid (temperatur). y-akse: signal. Baselinjen stiger og blir mer støyete når temperaturen øker.
- **Polaritetsskala for SF** · tabell-som-bilde [Gasskromatografi m notater.pdf, slide 12]
  - Horisontal pil «Low polarity → High polarity» med de åtte fasene i rekkefølge. Merk «DB-5 / 5 % fenyl», «DB-1701 / cyano» og «PEG (Carbowax)».
- **Kovats retensjonsindeks** · plot [Gasskromatografi m notater.pdf, slide 13; chromatographgy_basics_part1.pdf, p. 40, Fig. 2.15]
  - x-akse: antall karbon (1–8), og parallelt retensjonsindeks (0–800). y-akse: $\log t_R'$. Rette linje gjennom alkanpunktene.
  - Et ukjent stoff X legges inn mellom to alkaner, og I leses av.
- **Interactive plot: Kovats-kalkulator**
  - Ligning: $I(X) = 100n + 100\,\dfrac{\log t_R'(X) - \log t_R'(n)}{\log t_R'(n+1) - \log t_R'(n)}$.
  - Inputfelt: $n$, $t_R'(n)$, $t_R'(n+1)$, $t_R'(X)$. Slider for $t_R'(X)$ mellom de to alkanene.
  - Kursmaterialet gir ingen numerisk Kovats-oppgave, så standardverdiene er illustrative (f.eks. n = 10).

## Equations
### Netto retensjonsvolum (hva retensjonen avhenger av)
$$V_N = V_R - V_M = \frac{273 \times R \cdot W_s}{\gamma^\infty \cdot p^\circ \cdot M_s} \sim t_R - t_M = t_R'$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V_N$ | netto retensjonsvolum | mL |
| $V_R$ | retensjonsvolum ($t_R \cdot F$) | mL |
| $V_M$ | elueringsvolum for ikke-retardert forbindelse | mL |
| $R$ | gasskonstanten | J mol⁻¹ K⁻¹ |
| $W_s$, $M_s$ | vekt og molekylmasse av SF | g, g/mol |
| $\gamma^\infty$ | aktivitetskoeffisient i SF (synker med økt interaksjon) | – |
| $p^\circ$ | metningstrykk for forbindelsen ved kolonnetemperaturen | Pa |
Upolar SF: $\gamma^\infty \approx 1$, og separasjonen skjer etter kokepunkt. Polar SF: både polaritet og kokepunkt. Høy $p^\circ$ (flyktig) gir lav retensjon [chromatographgy_basics_part1.pdf, p. 37, lign. 2.4].

### Temperaturavhengighet
$$\log V = \frac{b}{T} + d$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V$ | retensjonsvolum | mL |
| $T$ | kolonnetemperatur | K |
| $b$, $d$ | konstanter | – |
Gjelder innenfor et begrenset temperaturområde [chromatographgy_basics_part1.pdf, p. 41, lign. 2.8].

### Kovats retensjonsindeks
$$I(X) = 100\,n + 100\left[\frac{\log t_R'(X) - \log t_R'(n)}{\log t_R'(n+1) - \log t_R'(n)}\right]$$
| Symbol | Meaning | Unit |
|---|---|---|
| $I(X)$ | retensjonsindeks for stoff X | – |
| $n$ | antall C i n-alkanet som eluerer rett før X | – |
| $t_R'$ | justert retensjonstid | min |
Isoterm analyse. I = 100 × antall C for n-alkaner [Gasskromatografi m notater.pdf, slide 13; chromatographgy_basics_part1.pdf, p. 40].

### McReynolds og kolonnepolaritet
$$\Delta I = I_{SF} - I_{sq} \qquad CP = \frac{\sum_{5} \Delta I_{SF}}{\sum_{5} \Delta I_{OV\text{-}275}} \times 100$$
| Symbol | Meaning | Unit |
|---|---|---|
| $I_{SF}$, $I_{sq}$ | retensjonsindeks på aktuell SF og på squalan | – |
| $OV$-275 | polar referansefase (dicyanoetylsilikon, «maks polar fase») | – |
| $CP$ | kolonnepolaritet | % |
Summert over de 5 McReynolds-stoffene [Gasskromatografi m notater.pdf, slide 14; chromatographgy_basics_part1.pdf, p. 40, lign. 2.5].

### Platehøyde for filmtykkelse (kapillær)
$$H = \frac{2D_m}{u} + f_g\frac{d_c^2\,u}{D_m} + f_s\frac{d_f^2\,u}{D_s}$$
Golay-ligningen fra side 03. For tynne filmer (≤ 0,25 µm) kan SF-leddet neglisjeres [chromatographgy_basics_part1.pdf, p. 7–8, 41].

## Worked example
**H25 oppg. 4a og 4c: elueringsrekkefølge og temperaturprogram** [IMAK2008 eksamen H2025.pdf, oppg. 4; Løsningsforslag IMAK2008 H25.pdf, oppg. 4]

Blanding: heksan (kp 69 °C), etylacetat (kp 77 °C) og metanol (kp 65 °C). Kolonne 30 m × 0,25 mm × 0,25 µm, ikke-polar dimetylpolysiloksan. Program 40 °C (2 min) → 15 °C/min → 200 °C (5 min). He 1,2 mL/min, split 1:20, FID.

*a) Kortest retensjonstid?*
1. SF er upolar, så retensjonen styres i stor grad av flyktighet og svake dispersjonskrefter ($\gamma^\infty \approx 1$, separasjon etter kokepunkt) [chromatographgy_basics_part1.pdf, p. 37].
2. Metanol har lavest kokepunkt (65 °C), altså høyest damptrykk ved gitt T.
3. Metanol er polar og interagerer dårligst med den upolare fasen.
4. **Svar:** Metanol får lavest $k$ og eluerer først. Løsningsforslaget påpeker at kokepunkt alene ikke forklarer alt, og at polaritet og fase-match betyr mye.

*c) Fordelen med temperaturprogram i stedet for isotermt 40 °C?*
5. De flyktige komponentene eluerer raskt ved lav starttemperatur.
6. De mindre flyktige eluerer innen rimelig tid når temperaturen økes.
7. **Svar:** Kortere total analysetid, bedre separasjon over et bredt kokepunktsområde og skarpere topper enn isotermt 40 °C. Samme prinsipp som forelesningseksempelet med 30 → 180 °C [Gasskromatografi m notater.pdf, slide 6].

## Faded example
**H25 oppg. 4d (to deloppgaver): bytte SF og høyere starttemperatur** [IMAK2008 eksamen H2025.pdf, oppg. 4d; Løsningsforslag IMAK2008 H25.pdf, oppg. 4d]

*Del 1: Bytte til polyetylenglykol («Carbowax»).*
1. PEG er en polar fase for polare analytter [Gasskromatografi m notater.pdf, slide 11]. Polar SF separerer etter både polaritet og kokepunkt [chromatographgy_basics_part1.pdf, p. 38].
2. **(try)** Hvilken av de tre har sterkest interaksjon (H-binding) med PEG? → Metanol (–OH). PEG er SF-valget for OH-analytter [chromatographgy_basics_part1.pdf, p. 44].
3. **(try)** Hva skjer med metanols retensjon og heksans retensjon? → Metanol holdes mye sterkere igjen. Heksan (upolar) holdes lite igjen og kan komme først.
   > GAP: løsningsforslaget gir ikke svar på deloppgaven om Carbowax. Svaret over er utledet fra forelesning og bok.

*Del 2: Starttemperatur 40 → 60 °C, ellers likt.*
4. **(try)** Hva skjer med de tidlig eluerte toppene (metanol, etylacetat)? → Kortere retensjonstid, nærmere $t_M$ (dødtid), og risiko for dårligere separasjon av de tidligste toppene.
5. **(try)** Hva skjer med de senere toppene? → De påvirkes mindre relativt, men eluerer også noe tidligere.
6. **(try)** Netto effekt? → Kortere analysetid, men mulig tap av oppløsning i «fronten» av kromatogrammet.

## Exam traps
- **«Kortest retensjon = lavest kokepunkt» alene**: Gjelder bare på upolar SF. På polar SF spiller polaritet og H-binding inn, og løsningsforslaget påpeker at fase-match betyr mye selv på upolar fase [Løsningsforslag IMAK2008 H25.pdf, oppg. 4a; chromatographgy_basics_part1.pdf, p. 37–38].
- **PLOT og SCOT forveksles**: PLOT har porøst *fast* lag og brukes i GSC. SCOT har væske-SF *på* porøse partikler og brukes i GLC [chromatographgy_basics_part1.pdf, p. 26].
- **Kolonneblødning = lekkasje i koblinger**: Det er SF som fordamper eller brytes ned, særlig ved høy temperatur. Det gir stigende baselinje og støy [LF eksamen H2024 IMAK2008.pdf, p. 3; Gasskromatografi m notater.pdf, slide 9].
- **Høyere starttemperatur gir alltid bedre analyse**: Kortere tid, men de tidlige toppene kan bli for dårlig separert [Løsningsforslag IMAK2008 H25.pdf, oppg. 4d].
- **PDMS for polare analytter**: PDMS er typisk for *ikke-polare* forbindelser. Polare (–OH) trenger PEG eller cyano-polysiloksan [LF eksamen H2024 IMAK2008.pdf, p. 2; chromatographgy_basics_part1.pdf, p. 44].
- **Tykk film gir bedre separasjon**: Nei. Tykk film gir høyere $H$ og mer blødning, men større kapasitet [chromatographgy_basics_part1.pdf, p. 40–41; Gasskromatografi m notater.pdf, slide 8].
- **Kovats med $t_R$ i stedet for $t_R'$**: Formelen bruker justerte retensjonstider [Gasskromatografi m notater.pdf, slide 13].

## Past exam tasks
- **H2025 oppg. 4** (12 p): GC-case med heksan/etylacetat/metanol på dimetylpolysiloksan. (a) Kortest retensjonstid, (b) split vs. splitless (side 11), (c) fordel med temperaturprogram, (d) effekt av Carbowax, og (d) effekt av starttemperatur 60 °C.
- **H2025 oppg. 3** (10 p totalt, 2 p hører hit): forklar «PLOT».
- **H2024 oppg. 1(f)** (4 p): hvilke faktorer påvirker retensjonstiden i GC.
- **H2024 oppg. 1(c)** (10 p totalt, 4 p hører hit): forklar «kolonneblødning» og «WCOT».
- **H2024 oppg. 1(b)** (flervalg, 1 av 5 delspørsmål): typisk SF for ikke-polare forbindelser i GC (PDMS).

## Test yourself
**Q:** Nevn fem faktorer som påvirker retensjonstiden i GC.
**A:** Kolonnetemperatur, bæregassens strømningshastighet, stasjonær fase, analyttens flyktighet og polaritet, og kolonnelengde og diameter [LF eksamen H2024 IMAK2008.pdf, p. 6].

**Q:** Hvilken SF velger du for alkoholer, og hvilken for upolare hydrokarboner?
**A:** Alkoholer: PEG eller cyano-polysiloksan. Upolare: metylsilikon (PDMS) [chromatographgy_basics_part1.pdf, p. 44].

**Q:** Hva er McReynolds-systemet brukt til?
**A:** Å karakterisere polariteten til en SF. Retensjonsindeksen til 5 teststoffer sammenlignes med på squalan (ΔI = I_SF − I_sq) [Gasskromatografi m notater.pdf, slide 14; chromatographgy_basics_part1.pdf, p. 39–40].

**Q:** Hvorfor er GC-kvantifisering alltid basert på intern standard?
**A:** Fordi det er nesten umulig å få repeterbare injeksjoner [chromatographgy_basics_part1.pdf, p. 44].

**Q:** Hvilken kolonne velger du for høyest effektivitet, og hvilken for store prøvevolum?
**A:** Effektivitet: lang (30–100 m), smal (0,1–0,25 mm) med tynn film (0,1–0,25 µm). Store volum: vid ID (0,53–0,7 mm) med tykk film (1–5 µm) eller SCOT [chromatographgy_basics_part1.pdf, p. 44].

## Sources
- [Gasskromatografi m notater.pdf, slide 6–14]
- [Krom. Teori - Innledning og repetisjon 190826.pdf, slide 12]
- [chromatographgy_basics_part1.pdf, p. 17, 24–26, 36–44] (p. = boksidetall; PDF-side = bokside + 16)
- [Pensum.pdf, p. 1]
- [IMAK2008 eksamen H2025.pdf, oppg. 3, 4] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 3, 4]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(b), 1(c), 1(f)] / [LF eksamen H2024 IMAK2008.pdf, p. 2–3, 6]
