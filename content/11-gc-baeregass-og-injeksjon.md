---
slug: 11-gc-baeregass-og-injeksjon
title: "GC: bæregass og injeksjon"
topic: gc
exam_weight: medium
exam_weight_note: "H25 oppg. 4b (del av 12 p-case: split vs. splitless), H25 oppg. 3 (GLC, 2 p). H24 1(f) delvis (bæregassens strømningshastighet påvirker retensjonstid)"
builds_on: [02-effektivitet-og-opplosning, 03-bandspredning-van-deemter]
used_in: [12-gc-kolonner-og-stasjonaerfaser, 13-gc-detektorer]
sources: ["Gasskromatografi m notater.pdf", "chromatographgy_basics_part1.pdf", "Pensum.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** Vekselvirker bæregassen med analyttene i GC?
**A:** Nei. Bæregassen har ingen interaksjon med prøven og er bare transportmiddel [Gasskromatografi m notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 3].

**Q:** Hvorfor kan man ikke injisere 1 µL væske rett inn i en kapillærkolonne uten split?
**A:** 1 µL væske blir ca. 1 mL gass, nesten hele kolonnevolumet, så det blir ingen separasjon [Gasskromatografi m notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 21].

**Q:** Hvilken injeksjonsteknikk brukes for sporanalyse?
**A:** Splitless, slik at hele prøven kommer inn på kolonnen [chromatographgy_basics_part1.pdf, p. 22].

## Mental model
I GC er mobilfasen en gass, og SF er nesten alltid en væske (GLC). Fast SF (GSC) er sjelden [Gasskromatografi m notater.pdf, slide 1]. Gassen er bare et inert transportmiddel uten interaksjon med prøven. Derfor er det SF og temperaturen som styrer separasjonen, og gassvalget handler om effektivitet, analysetid, sikkerhet og pris [Gasskromatografi m notater.pdf, slide 1–2; chromatographgy_basics_part1.pdf, p. 3, 18–19]. Prøven må være (eller kunne bli) en gass og tåle temperaturen [Gasskromatografi m notater.pdf, slide 3]. Injektoren har to oppgaver: fordampe prøven og overføre en «riktig» mengde analytt til kolonnen [Gasskromatografi m notater.pdf, slide 3]. Fordi væske utvider seg ca. 1000 ganger ved fordamping og kapillærkolonner har lite volum, må mesteparten kastes (split), eller så må prøven fokuseres på kolonnetoppen (splitless, on-column, PTV) [chromatographgy_basics_part1.pdf, p. 20–23].

## Concepts and definitions
- **GC-oppsett**: (1) bæregass, (2) injektor, (3) kolonneovn, (4) kolonne, (5) detektor [Gasskromatografi m notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 18, Fig. 2.1]. Kolonneovn og kolonne er på side 12, detektorer på side 13.
- **GLC vs. GSC**: GLC (gas–liquid) har en ikke-flyktig væske som SF, og separasjonen bygger på fordeling. GSC (gas–solid) har fast SF, bygger på adsorpsjon og brukes hovedsakelig for permanente gasser [chromatographgy_basics_part1.pdf, p. 17; Gasskromatografi m notater.pdf, slide 1]. Løsningsforslaget definerer GLC som GC der SF er en væske immobilisert på et fast bæremateriale [Løsningsforslag IMAK2008 H25.pdf, oppg. 3].
- **Krav til bæregass**: Ingen interaksjon med prøven, inert og ren. Hydrokarboner, O₂ og H₂O må fjernes, fordi O₂ og H₂O ødelegger SF [Gasskromatografi m notater.pdf, slide 1]. Adsorbentrør med trekull og molekylsikt fjerner hydrokarboner og vann, og en katalysator fjerner O₂, som kan bryte ned SF og gi ustabil baselinje med ECD [chromatographgy_basics_part1.pdf, p. 18].
- **Renhet («5.0»-notasjon)**: He 5.0 → 99,999 %, 4.5 → 99,995 %, 4.0 → 99,99 %. Ved lavere renhet kan O₂-, H₂O- og HC-filtre brukes [Gasskromatografi m notater.pdf, slide 1].
- **Valg av bæregass** [Gasskromatografi m notater.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 18–19]:
  - **He**: god effektivitet, inert. Ulempe: dyrt. Ofte foretrukket fordi den gir god effektivitet selv ved ganske høy flow.
  - **H₂**: god effektivitet, lett tilgjengelig, kortest analysetid. Ulempe: eksplosjonsfare, kan reagere med prøven, metaller og SF.
  - **N₂**: best effektivitet (marginalt lavest H), billig. Ulempe: veldig lav optimal flow og sterk økning av H ved høyere flow, så lang analysetid.
- **Van Deemter for bæregasser**: N₂ har laveste minimum, men ved lav $u$ (~10–12 cm/s), og kurven stiger bratt. He og H₂ har flatere kurver, med optimum ved høyere $u$ (~20–40 cm/s) [Gasskromatografi m notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 19, Fig. 2.2].
- **Eksempel, pesticider med GC-ECD**: He 30 cm/s gir 19 min. H₂ 45 cm/s gir 13 min. N₂ 12 cm/s gir 48,5 min, med tilsvarende separasjon [Gasskromatografi m notater.pdf, slide 2].
- **Flow-kontroll**: Konstant gasstrøm er nødvendig. Isotermt kan konstant innløpstrykk brukes. Med temperaturprogram trengs en flowregulator, fordi gassens viskositet endres med T [chromatographgy_basics_part1.pdf, p. 19].
- **Krav til prøven**: Den må være en gass (ha et damptrykk), være termisk stabil og ha litt affinitet til SF. Damptrykket kan økes med derivatisering [Gasskromatografi m notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 17].
- **Injektorens to oppgaver**: (1) fordampe prøven, (2) overføre en «riktig» mengde analytt til kolonnen [Gasskromatografi m notater.pdf, slide 3].
- **Utvidelse ved fordamping**: 1 µL væske → ca. 1 mL gass, som gir problemer i kapillærkolonner [Gasskromatografi m notater.pdf, slide 3]. Boka: ca. 1000 ganger større volum, og 1–2 µL blir 1–2 mL gass, mens en 30 m × 0,32 mm kolonne har totalvolum ca. 2,4 mL [chromatographgy_basics_part1.pdf, p. 20–21].
- **Injektortemperatur**: Høyere enn kolonnen, nok til rask fordamping. Tommelfingerregel: 50 °C over kokepunktet hvis det er kjent, ellers 50 °C over kolonnetemperaturen. Injeksjonstemperaturen bestemmer valg av septummateriale [chromatographgy_basics_part1.pdf, p. 20].
- **Pakket-kolonne-injektor (fordampningsinjektor)**: 2–10 µL injiseres gjennom septum rett inn i kolonneinnløpet eller en liner i en oppvarmet metallblokk [chromatographgy_basics_part1.pdf, p. 20].
- **Liner**: Inert (glass) overflate og lett å skifte. Krymper det interne volumet («dødvolumet») i injektoren og begrenser båndspredning [Gasskromatografi m notater.pdf, slide 4]. Kan være delvis fylt med kvartsull [chromatographgy_basics_part1.pdf, p. 21].
- **Split-injeksjon**: Prøven fordampes i lineren, og bare en del går til kolonnen, mens resten går til avfall gjennom splitventilen. Split ratio f.eks. 1:50, dvs. 1 del til kolonnen og 50 deler til «waste» [Gasskromatografi m notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 21].
  - Split ratio 1:10 til 1:100. Brukes når analyttkonsentrasjonen er høy nok. Enkel, og kan brukes isotermt og med temperaturprogram. Kan ikke brukes for lave konsentrasjoner [chromatographgy_basics_part1.pdf, p. 22].
  - I H25-casen brukes split for å redusere prøvemengden på kolonnen, noe som gir smalere topper, mindre overbelastning og bedre separasjon [Løsningsforslag IMAK2008 H25.pdf, oppg. 4b].
- **Splitless-injeksjon**: Injeksjon med stengt split, som åpnes etter «x» sekunder. Kan benyttes for sporanalyser [Gasskromatografi m notater.pdf, slide 3].
  - Hele prøven (1–2 mL gass) overføres. Kolonneinnløpet holdes 20–50 °C under løsemiddelets kokepunkt, så løsemiddelet kondenserer som en tykk film. Overføringen tar ca. 2 min ved 2 µL og 1 mL/min. Splitventilen åpnes etterpå for å skylle ut rester [chromatographgy_basics_part1.pdf, p. 22].
  - Kan bare brukes med temperaturprogram [chromatographgy_basics_part1.pdf, p. 22].
  - Alternativ: «cold trapping», der kolonnen kjøles > 150 °C under prøvekomponentenes kokepunkt [chromatographgy_basics_part1.pdf, p. 22].
- **«Solvent effects» (løsemiddeleffekt)**: En ekstra effekt som hjelper injeksjonen. Ved lav starttemperatur kondenseres løsemiddel og prøve til en «ekstra» SF. Ved økt temperatur fordamper løsemiddelet, og prøven oppkonsentreres. Den vandrer så videre ut som ved «normal» kromatografi. Kombineres med splitless, PTV og on-column-injeksjon [Gasskromatografi m notater.pdf, slide 5].
  - Krever en homogen løsemiddelfilm, dvs. løsemiddelets polaritet må passe SF. Ellers dannes dråper og båndspredning, noe som kan unngås med retention gap [chromatographgy_basics_part1.pdf, p. 22].
  - Forelesningseksempel: med starttemperatur 115 °C gir n-heksan (kp 68 °C) som løsemiddel brede n-C₁₁/C₁₂-topper, mens n-oktan (kp 125 °C) gir smale, fokuserte topper [Gasskromatografi m notater.pdf, slide 5].
- **On-column-injeksjon**: Ingen fordampningskammer, bare væske på kolonnen. Ellers likt PTV-oppsettet [Gasskromatografi m notater.pdf, slide 4].
  - Brukes når analyttene er temperaturlabile. Væsken føres ved romtemperatur rett inn i kolonneinnløpet eller via retention gap, med stoppet gasstrøm [chromatographgy_basics_part1.pdf, p. 22–23].
  - Fordeler: repeterbar og uten diskriminering, godt egnet for høytkokende forbindelser. Ulemper: lite robust, vanskelig å automatisere, og prøven må ikke inneholde ikke-flyktige komponenter [chromatographgy_basics_part1.pdf, p. 23].
- **Retention gap**: Et stykke fused silica-kapillær med eller uten SF, som gir svært lav eller ingen retensjon [chromatographgy_basics_part1.pdf, p. 23, Info-box 2.1].
- **PTV-injektor (Programmable Temperature Vaporising)**: Oppvarming og nedkjøling av injektoren. Ellers samme maskinvare som split/splitless. Gir injeksjon på kald kolonne og mulighet for oppkonsentrering av prøven [Gasskromatografi m notater.pdf, slide 4].
  - Liner med lav termisk masse. Prøven introduseres ved lav temperatur, uten diskriminering og termisk nedbrytning. Muliggjør store volumer (kald splitless solvent vent, opptil 250 µL). Ulempen er tap av flyktige forbindelser [chromatographgy_basics_part1.pdf, p. 23].
- **Ikke pensum**: Headspace-teknikker [Pensum.pdf; chromatographgy_basics_part1.pdf, p. 23–24].

## Visuals
- **GC-instrumentet** · prosessdiagram [Gasskromatografi m notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 18, Fig. 2.1]
  - (1) Gassflaske «Carrier gas» → reduksjonsventil / flowregulator → (2) «Sample injector» → (4) kolonne (spiral) i (3) «Column oven» → (5) «Detector» → «Waste», med signal til PC.
  - Merk at injektor, ovn og detektor har hver sin temperaturkontroll.
- **Van Deemter for N₂, He og H₂** · plot [Gasskromatografi m notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 19, Fig. 2.2]
  - x-akse: lineær gasshastighet $u$ (cm/s, 10–90). y-akse: HETP (mm, 0,2–1,2).
  - N₂: dypt minimum ved ca. 10–12 cm/s, deretter bratt stigning. He: minimum ved ca. 20–25 cm/s, slak stigning. H₂: flatest kurve, minimum ved ca. 35–40 cm/s.
  - Fremhev at H₂ tåler høy $u$ med liten effektivitetstap, altså kortest analysetid.
- **Split/splitless-injektor** · tverrsnitt [Gasskromatografi m notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 21, Fig. 2.4]
  - Sprøyte gjennom gummiseptum (Rubber septum) → oppvarmet metallblokk med glass-liner (Vapourisation chamber) → kolonne ut i bunnen.
  - Piler: «Carrier gas inlet», «Septum purge outlet» (f.eks. 5 mL/min), «Split outlet» (f.eks. 50 mL/min, sirklet rødt) og kolonne (f.eks. 2 mL/min).
  - Toggle split / splitless: i splitless er split outlet stengt i «x» sekunder.
- **Løsemiddeleffekt i fire trinn** · prosessdiagram [Gasskromatografi m notater.pdf, slide 5]
  - Fire bilder av kolonneinnløpet: (1) løsemiddel og prøve kondensert som et grønt film-lag med gule prøveprikker («ekstra SF»), (2) løsemiddel fordamper bakfra, (3) prøven samles i en smal sone, (4) normal kromatografi videre.
  - Under: to kromatogrammer ved starttemperatur 115 °C. n-heksan (kp 68 °C) gir brede C₁₁/C₁₂-topper, n-oktan (kp 125 °C) skarpe topper.
- **Interactive plot: hvor mye havner på kolonnen?**
  - Formel: $V_{kolonne} \approx V_{inj}\cdot F_{col}/(F_{split}+F_{col})$.
  - Slider: split ratio 1:10–1:100 (bok). Startverdi 1:20 og $V_{inj}$ = 1,0 µL fra H25 oppg. 4 [IMAK2008 eksamen H2025.pdf, oppg. 4]. Toggle «splitless» (ratio 1:0).
  - Vis µL væske på kolonnen og omtrentlig gassvolum (× 1000) mot kolonnevolumet 2,4 mL (30 m × 0,32 mm) [chromatographgy_basics_part1.pdf, p. 21].

## Equations
### Split ratio
$$\text{split ratio} = \frac{F_{col}}{F_{split} + F_{col}} \approx \frac{F_{col}}{F_{split}} \qquad (F_{split} \gg F_{col})$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F_{col}$ | volumetrisk gasstrøm gjennom kolonnen | mL/min |
| $F_{split}$ | volumetrisk gasstrøm ut gjennom splitventilen | mL/min |
$F_{split}$ kan måles med såpebobleflowmeter. $F_{col}$ finnes fra $t_M$ og kolonnedimensjoner. Brukes split ratio 1:10–1:100 [chromatographgy_basics_part1.pdf, p. 21–22].

### Tommelfingerregel for injektortemperatur
$$T_{inj} \approx T_{b} + 50\,^\circ\text{C} \quad \text{(ellers } T_{kolonne} + 50\,^\circ\text{C)}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $T_b$ | kokepunkt for prøvekomponentene | °C |
[chromatographgy_basics_part1.pdf, p. 20]

## Worked example
**H25 oppg. 4b: split vs. splitless** [IMAK2008 eksamen H2025.pdf, oppg. 4; Løsningsforslag IMAK2008 H25.pdf, oppg. 4b]

Oppsett: heksan, etylacetat og metanol på 30 m × 0,25 mm × 0,25 µm dimetylpolysiloksan. He 1,2 mL/min, split 1:20, 1,0 µL, FID.
1. **Hvorfor split?** Prøven er en blanding av rene løsemidler, altså svært høy konsentrasjon, ikke sporanalyse. Split ratio 1:20 betyr at ca. 1 del av 21 går til kolonnen [chromatographgy_basics_part1.pdf, p. 21–22].
2. Mengden på kolonnen blir ca. 1,0 µL / 21 ≈ 0,05 µL. Det gir smalere topper, mindre overbelastning og bedre separasjon.
3. **Bytte til splitless med samme volum:** Hele 1,0 µL (~1 mL gass) går inn på kolonnen.
4. **Konsekvens:** Kolonneoverbelastning, fronting eller brede topper og mulig tap av oppløsning.
5. **Kobling til boka:** Splitless er laget for sporanalyse og krever temperaturprogram med løsemiddeleffekt eller cold trapping. Det er ikke en fordel for konsentrerte prøver [chromatographgy_basics_part1.pdf, p. 22].

## Faded example
**Split-ratio fra flowene i bokas injektorfigur** [chromatographgy_basics_part1.pdf, p. 21–22, Fig. 2.4]

Gitt: splitter outlet 50 mL/min, kolonne 2 mL/min, septumspyling 5 mL/min. Injeksjon 1 µL væske.
1. Septumspylingen går ikke via lineren til kolonnen, så den er ikke med i split ratio.
2. Eksakt: split ratio = $F_{col}/(F_{split}+F_{col}) = 2/(50+2) = 2/52$.
3. **(try)** Hva blir den forenklede formen $F_{col}/F_{split}$? → 2/50 = 1:25.
4. **(try)** Hvor mye væske havner på kolonnen? → ca. 1 µL × 2/52 ≈ 0,04 µL.
5. **(try)** Ca. hvor stort gassvolum er det, og er det nå trygt mot kolonnevolumet (ca. 2,4 mL)? → ca. 0,04 mL gass, langt under kolonnevolumet [chromatographgy_basics_part1.pdf, p. 20–21].
6. **(try)** Prøven inneholder spormengder pesticider. Hvilken injeksjonsteknikk bør du heller velge, og hva krever den av ovnsprogrammet? → Splitless, som krever temperaturprogram.

## Exam traps
- **Splitless er «bedre» fordi alt går inn**: Bare for sporanalyse. For konsentrerte prøver gir det overbelastning og brede topper eller fronting [Løsningsforslag IMAK2008 H25.pdf, oppg. 4b; chromatographgy_basics_part1.pdf, p. 22].
- **Bæregassen bestemmer selektiviteten**: Nei. Den er inert og har ingen interaksjon med prøven. Gassen påvirker effektivitet og analysetid, ikke selektivitet [Gasskromatografi m notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 3].
- **N₂ er dårligst fordi effektiviteten er dårligst**: Feil. N₂ har marginalt laveste $H$, men bare ved svært lav flow. Problemet er lang analysetid [chromatographgy_basics_part1.pdf, p. 18–19].
- **Splitless isotermt**: Går ikke. Splitless krever temperaturprogram [chromatographgy_basics_part1.pdf, p. 22].
- **Split ratio feil vei**: 1:50 betyr 1 del til kolonnen og 50 til waste, ikke omvendt [Gasskromatografi m notater.pdf, slide 3].
- **Løsemiddeleffekten med feil løsemiddel**: Krever lav starttemperatur under løsemiddelets kokepunkt og et løsemiddel med polaritet som passer SF [chromatographgy_basics_part1.pdf, p. 22; Gasskromatografi m notater.pdf, slide 5].
- **On-column for alt**: Bare for temperaturlabile analytter og rene prøver uten ikke-flyktige komponenter [chromatographgy_basics_part1.pdf, p. 22–23].

## Past exam tasks
- **H2025 oppg. 4b** (del av 12 p): hvorfor split-injeksjon brukes i analysen av heksan/etylacetat/metanol, og hva som skjer med kromatogrammet ved splitless med samme injeksjonsvolum.
- **H2025 oppg. 3** (10 p totalt, 2 p hører hit): forklar «GLC».
- **H2024 oppg. 1(f)** (4 p, delvis): faktorer som påvirker retensjonstiden i GC. Bæregassens strømningshastighet er én av dem, og høyere hastighet gir kortere retensjonstid [LF eksamen H2024 IMAK2008.pdf, p. 6]. Resten av oppgaven er på side 12.

## Test yourself
**Q:** Hvilke tre forurensninger må fjernes fra bæregassen, og hvorfor?
**A:** Hydrokarboner, O₂ og H₂O. O₂ og H₂O ødelegger SF, og vann og hydrokarboner kan gi detektorproblemer [Gasskromatografi m notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 18].

**Q:** Hvorfor kan H₂ gi kortest analysetid?
**A:** Van Deemter-kurven er flatest, så den kan kjøres ved høy lineær hastighet med liten økning i $H$ [chromatographgy_basics_part1.pdf, p. 19; Gasskromatografi m notater.pdf, slide 1–2].

**Q:** Beskriv løsemiddeleffekten med egne ord.
**A:** Ved lav starttemperatur kondenserer løsemiddelet som en film på kolonnetoppen og fungerer som ekstra SF der analyttene løses. Når temperaturen økes, fordamper løsemiddelet og analyttene samles i en smal sone før separasjonen [Gasskromatografi m notater.pdf, slide 5; chromatographgy_basics_part1.pdf, p. 22].

**Q:** Når brukes on-column-injeksjon, og hva er ulempene?
**A:** Når analyttene er temperaturlabile. Ulempene er lav robusthet, vanskelig automatisering og at retention gap må byttes ofte ved komplekse prøver [chromatographgy_basics_part1.pdf, p. 22–23].

**Q:** Hva er fordelen med en PTV-injektor?
**A:** Injektoren kan varmes og kjøles raskt, så prøven kan injiseres kaldt (ingen diskriminering eller termisk nedbrytning) og oppkonsentreres. Den tillater store volumer [Gasskromatografi m notater.pdf, slide 4; chromatographgy_basics_part1.pdf, p. 23].

## Sources
- [Gasskromatografi m notater.pdf, slide 1–5]
- [chromatographgy_basics_part1.pdf, p. 3, 17–23] (p. = boksidetall; PDF-side = bokside + 16)
- [Pensum.pdf, p. 1]
- [IMAK2008 eksamen H2025.pdf, oppg. 3, 4] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 3, 4b]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(f)] / [LF eksamen H2024 IMAK2008.pdf, p. 6]
