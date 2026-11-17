---
slug: 06-hplc-detektorer
title: "HPLC-detektorer"
topic: hplc
exam_weight: low
exam_weight_note: "H24 1(c): forklar diode-array-detektor (2 av 10 p). H25 oppg. 2: hvorfor UV-detektor brukes (flervalg, 1 av 5 p)"
builds_on: [04-hplc-system-pumper-injeksjon, 05-kolonner-og-partikler]
used_in: [14-ms-ionisering, 17-kvalitativ-og-kvantifiseringsmetoder, 18-metodevalidering-lod-loq]
sources: ["HPLC_2_u_notater.pdf", "chromatographgy_basics_part1.pdf", "chromatographgy_basics_part2.pdf", "Pensum.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf", "koffein _ISTD_student_rev2.pdf"]
---

## Pretest
**Q:** Hvilken egenskap må en analytt ha for å kunne detekteres med UV-detektor?
**A:** Den må absorbere synlig eller UV-lys, dvs. ha en kromofor [HPLC_2_u_notater.pdf, slide 4; chromatographgy_basics_part1.pdf, p. 81].

**Q:** Hva er den store fordelen med en diode-array-detektor fremfor en vanlig UV-detektor?
**A:** Den måler mange bølgelengder samtidig [chromatographgy_basics_part1.pdf, p. 83–84; LF eksamen H2024 IMAK2008.pdf, p. 4].

**Q:** Hvilken HPLC-detektor kan ikke brukes med gradienteluering?
**A:** RI-detektoren, og også amperometrisk elektrokjemisk detektor [chromatographgy_basics_part1.pdf, p. 81, Tabell 3.5; chromatographgy_basics_part2.pdf, p. 99, 101–102].

## Mental model
En detektor gjør om det som eluerer fra kolonnen til et signal. Valget avhenger av hva analytten «har» [chromatographgy_basics_part1.pdf, p. 80–81]. Absorberer den lys (kromofor), er UV-detektoren det enkle og billige førstevalget [chromatographgy_basics_part1.pdf, p. 80; HPLC_2_u_notater.pdf, slide 3]. Fluorescerer den, gir fluorescens mye lavere deteksjonsgrense. Kan den oksideres eller reduseres, brukes elektrokjemisk detektor. Har den ingen av delene, brukes en universell detektor: lysspredning, RI eller MS [chromatographgy_basics_part1.pdf, p. 81; chromatographgy_basics_part2.pdf, p. 95–102]. Nesten alle disse er konsentrasjonsfølsomme: signalet følger konsentrasjonen i cella, så smale, konsentrerte bånd gir lavest deteksjonsgrense [chromatographgy_basics_part1.pdf, p. 55, 81]. Detektorene skiller seg også i om de tåler gradient og hvor stort lineært område de har [chromatographgy_basics_part1.pdf, p. 81; HPLC_2_u_notater.pdf, slide 7].

## Concepts and definitions
- **Detektortyper i HPLC**: UV, fluorescens, ledningsevne, elektrokjemisk, lysspredning, brytningsindeks og MS [HPLC_2_u_notater.pdf, slide 3]. UV var tradisjonelt viktigst, men benkeplassert MS er blitt en seriøs konkurrent. UV er fortsatt enklere og foretrekkes når det ikke trengs mer følsom eller selektiv deteksjon [chromatographgy_basics_part1.pdf, p. 80].
- **Universell vs. selektiv**: Noen detektorer er universelle, andre mer eller mindre selektive. Mest selektiv er MS [chromatographgy_basics_part1.pdf, p. 81].
- **Egenskaper (bok, Tabell 3.5)** [chromatographgy_basics_part1.pdf, p. 81]:

| Detektor | Selektivitet | Masse-LOD | Gradient |
|---|---|---|---|
| UV | kromoforer | 0,1–1 ng | ja |
| MS | svært høy | fg–pg (med SIM) | ja, med begrensninger |
| Fluorescens | fluorescerende grupper | < 10 pg | ja |
| Elektrokjemisk | oks./red.-grupper | < 10 pg | begrensninger |
| Lysspredning | nesten universell | 0,1–10 ng | ja |
| RI | universell | 0,1–1 µg | nei |

- **Ytelse (forelesning, «Performance of HPLC detectors»)**, masse-LOD og lineært område i dekader: absorbans 10 pg / 3–4, fluorescens 10 fg / 5, elektrokjemisk 100 pg / 4–5, RI 1 ng / 3, ledningsevne 100 pg–1 ng / 5, MS < 1 pg / 5, lysspredning 1 µg / 5 [HPLC_2_u_notater.pdf, slide 7]. Tallene avviker fra bokas tabell, så bruk forholdene mellom detektorene, ikke de eksakte verdiene.
- **UV-Vis-detektor**: Den vanligste og billigste [HPLC_2_u_notater.pdf, slide 3]. Lys sendes gjennom en spalte, splittes i bølgelengder i en monokromator, og valgt bølgelengde går gjennom prøvecella. Alle forbindelser som absorberer ved den bølgelengden gir signal [chromatographgy_basics_part1.pdf, p. 81]. Kan brukes fra 190 nm og inn i synlig område [chromatographgy_basics_part1.pdf, p. 82].
  - Brukes fordi den er billig og følsom for aromater og karbonylgrupper [Løsningsforslag IMAK2008 H25.pdf, oppg. 2].
- **Vanlige kromoforer**: Aromater absorberer rundt 240–260 nm (og sterkere rundt 200 nm). Alifater rundt 200 nm, alkener rundt 215 nm. Hver ekstra konjugert dobbeltbinding legger til ca. 15–30 nm. Fenoler absorberer rundt 260–280 nm [chromatographgy_basics_part1.pdf, p. 82; HPLC_2_u_notater.pdf, slide 4].
- **Valg av bølgelengde**: Velg en bølgelengde ved $\lambda_{maks}$ [HPLC_2_u_notater.pdf, slide 4]. Selv om høyest $\varepsilon$ ofte er ved lav bølgelengde, er et høyere absorpsjonsmaksimum bedre pga. høyere selektivitet, fordi forstyrrelser fra andre forbindelser og fra MF alltid er sterkere ved lave bølgelengder. Gradient kan ikke kjøres ved 200 nm, og acetonitril foretrekkes fremfor metanol ved lave bølgelengder [chromatographgy_basics_part1.pdf, p. 82].
- **Flowceller**: Dobbeltstrålings-instrumenter har prøvecelle og referansecelle med stående MF. Enstrålings-instrumenter bruker en elektronisk referanse. Cellevolumet må tilpasses kolonnen for å unngå båndspredning. Z-celler og U-celler gir lengre lysvei og høyere følsomhet med smale kolonner, siden absorbansen er proporsjonal med lysveien [chromatographgy_basics_part1.pdf, p. 82–83; HPLC_2_u_notater.pdf, slide 4].
- **Filterfotometrisk detektor**: Lyskilde med noen få diskrete bølgelengder. Hg-lampe gir 254, 313, 365, 405, 436 og 546 nm (280 nm med fluorescerende belegg). 254 nm er den mest brukte pga. absorpsjonsmaksimumet til mange aromater [chromatographgy_basics_part1.pdf, p. 83; HPLC_2_u_notater.pdf, slide 4].
- **Spektrofotometrisk detektor**: Deuteriumlampe (190 → ca. 600 nm) eller wolframlampe (synlig, opptil 950 nm, billigere og lengre levetid). En monokromator velger bølgelengden nærmest analyttens absorpsjonsmaksimum [chromatographgy_basics_part1.pdf, p. 83; HPLC_2_u_notater.pdf, slide 4].
- **Diode-array-detektor (DAD)**: Hvitt lys sendes gjennom prøven og splittes etterpå av et holografisk gitter mot en rekke på flere hundre fotodioder. Den måler altså polykromatisk lys, med alle bølgelengder samtidig [chromatographgy_basics_part1.pdf, p. 83–84; HPLC_2_u_notater.pdf, slide 5].
  - Gir 3D-plott (absorbans vs. tid og bølgelengde) [chromatographgy_basics_part1.pdf, p. 84; HPLC_2_u_notater.pdf, slide 5].
  - **Topprenhet**: Mål ulike deler av toppen ved ulike bølgelengder. Er de relative absorbansene forskjellige, er toppen ikke ren [chromatographgy_basics_part1.pdf, p. 84].
  - Nyttig for identifikasjon og kvantifisering av analytter [LF eksamen H2024 IMAK2008.pdf, p. 4].
- **Fluorescensdetektor**: For naturlig fluorescerende forbindelser eller forbindelser derivatisert til fluorescerende. Analytten eksiteres ved absorpsjonsmaksimum. Når den går tilbake til grunntilstanden, tapes en del energi som vibrasjon, så emittert lys har lengre bølgelengde enn eksitasjonslyset. Emisjonen måles vanligvis 90° på eksitasjonslyset [chromatographgy_basics_part2.pdf, p. 95–96; HPLC_2_u_notater.pdf, slide 6].
  - Kvanteutbytte $\Phi$ mellom 0 og 1, over 0,5 for sterkt fluorescerende. Oppløst O₂ kan redusere det. LOD i pg–fg-området [chromatographgy_basics_part2.pdf, p. 97].
  - Fluorescerende forbindelser har ofte kondenserte aromatiske ringer med elektrondonerende substituenter (f.eks. PAH). Rigide strukturer gir bedre signal enn fleksible [chromatographgy_basics_part2.pdf, p. 97].
  - Lyskilder: deuteriumlampe (190–400 nm), xenonlampe (200–850 nm) eller laser. Kjemiluminescens er et alternativ, der en kjemisk reaksjon i en postkolonnereaktor eksiterer [chromatographgy_basics_part2.pdf, p. 97].
- **Elektrokjemisk detektor**: Signal fra forbindelser som kan oksideres eller reduseres. Fenoler er de vanligste (oksidasjon), og katekolaminer de vanligste analyttene. MF må inneholde salt for å lede strøm [chromatographgy_basics_part2.pdf, p. 98]. Elektrokjemisk aktive grupper: fenol, katekol, kinon, amin, metoksyl, hydroksyl, tiol, nukleobase/nukleosid m.fl. [HPLC_2_u_notater.pdf, slide 6].
  - **Amperometrisk**: Tre elektroder (arbeidselektrode av glassy carbon, referanse Ag/AgCl, hjelpeelektrode = stål-utløpsrøret). Strømmen øker kraftig ved halvbølgepotensialet og er proporsjonal med konsentrasjonen. Bruker < 10 % av analytten, LOD i pg-området, og tåler ikke gradient [chromatographgy_basics_part2.pdf, p. 98–99].
  - Bakgrunnsstøy er et problem særlig i reduksjonsmodus (O₂ må fjernes). Arbeidselektroden «forgiftes» og må rengjøres [chromatographgy_basics_part2.pdf, p. 99].
  - Coulometrisk detektor er ikke pensum [Pensum.pdf]. Merk likevel at boka oppgir den som eneste elektrokjemiske detektor som tåler gradient [chromatographgy_basics_part2.pdf, p. 100].
- **Lysspredningsdetektor (ELSD)**: Eluatet forstøves med gass til en aerosol. Dråpene konsentreres i et oppvarmet drift-rør og treffer en lysstråle, og spredt lys måles. Gradient er mulig, men dråpestørrelsen kan endres og påvirke responsen. LOD 0,1–10 ng for ikke-flyktige analytter, og den er ofte valget for analytter uten kromofor [chromatographgy_basics_part2.pdf, p. 100–101; HPLC_2_u_notater.pdf, slide 6].
- **Brytningsindeks-detektor (RI)**: Måler lysbrytningen i en flowcelle mot en referansecelle. Universell, men begrenset følsomhet (0,1–10 µg), krever streng temperaturkontroll og tåler ikke gradient. Er nå i stor grad erstattet av lysspredning eller MS, men nyttig i preparativ skala [chromatographgy_basics_part2.pdf, p. 100–102; HPLC_2_u_notater.pdf, slide 7].
- **Ledningsevnedetektor**: Brukes bare i ionekromatografi. Måler ledningsevnen med Wheatstone-bro og pulsede teknikker, og krever streng temperaturkontroll [chromatographgy_basics_part2.pdf, p. 102].
- **MS som HPLC-detektor**: Kobles via et interface (ESI, APCI, APPI). Detaljer på side 14–15 [chromatographgy_basics_part2.pdf, p. 85–86]. UV eller fluorescens kan stå før MS, eller flowen kan splittes [chromatographgy_basics_part2.pdf, p. 95, Info-box 3.21].
- **Konsentrasjonsfølsomme detektorer**: UV, fluorescens og ESI-MS. Smale kolonner øker følsomheten [chromatographgy_basics_part1.pdf, p. 55; chromatographgy_basics_part2.pdf, p. 103].
- **Ikke pensum**: Coulometrisk, corona discharge, radioaktivitet, ionemobilitet, kjemiluminescent nitrogendetektor og kiralitetsdeteksjon [Pensum.pdf].

## Visuals
- **Detektorvalg: beslutningstre** · flytdiagram [chromatographgy_basics_part1.pdf, p. 81, Tabell 3.5; chromatographgy_basics_part2.pdf, p. 95–102]
  - Start: «Har analytten kromofor?» → ja: UV/DAD. «Fluorescerende eller kan derivatiseres?» → fluorescens (lavere LOD). «Kan oksideres/reduseres?» → elektrokjemisk (salt i MF, ikke gradient for amperometrisk). «Ingen av delene, ikke-flyktig?» → ELSD (gradient OK) eller RI (isokratisk, lav følsomhet). «Ioner i IC?» → ledningsevne. «Trenger struktur/høyest selektivitet?» → MS.
  - Hver node merket med LOD-område og «gradient: ja/nei».
- **UV-detektor og Hg-lampe** · prosessdiagram + plot [HPLC_2_u_notater.pdf, slide 4; chromatographgy_basics_part1.pdf, p. 81–83]
  - Diagram: lampe → spalte → bevegelig diffraksjonsgitter → valgt λ → beam splitter → flowcelle → fotodetektor, pluss referansefotodetektor.
  - Plot: Hg-lampespekter, x-akse bølgelengde (nm, 250–800), y-akse intensitet, med linjer ved 254, 313, 365, 405, 436, 546 og 579 nm. Uthev 254 nm.
- **DAD og 3D-plott** · prosessdiagram + 3D-plot [HPLC_2_u_notater.pdf, slide 5; chromatographgy_basics_part1.pdf, p. 84, Fig. 3.25–3.26]
  - Diagram: deuteriumlampe → (hvitt lys) prøvecelle → gitter → spektrum spredt over diodearray → forsterker. Fremhev at gitteret sitter *etter* prøven, i motsetning til UV.
  - 3D-plot: tid (min) × bølgelengde (nm, 200–400) × absorbans (AU), med topper merket 280 nm og 304 nm.
- **Z-celle vs. U-celle** · tverrsnitt [HPLC_2_u_notater.pdf, slide 4; chromatographgy_basics_part1.pdf, p. 82]
  - U-celle: «eluate in» ned, horisontal lysvei langs bunnen, «eluate out» opp, lyskilde og detektor i hver ende.
  - Z-celle: eluat inn nedenfra, langt horisontalt stykke langs lysveien, ut oppe.
  - Etikett: «lengre lysvei b → høyere A (Beer)».
- **Fluorescens: energidiagram og detektor** · prosessdiagram [chromatographgy_basics_part2.pdf, p. 96, Fig. 3.40; HPLC_2_u_notater.pdf, slide 6]
  - Energinivåer: grunntilstand S₀ og eksitert S₁. Opp-pil «absorbans», bølget pil (vibrasjonstap), kortere ned-pil «fluorescens» (lengre λ).
  - Detektor: lyskilde → eksitasjonsmonokromator → flowcelle → emisjon målt 90° → emisjonsmonokromator → fotomultiplikator.

> Ingen interaktiv graf: kursmaterialet har ingen tallverdier (ε, lysvei) som egner seg for en slider.

## Equations
### Beers lov (UV-absorbans)
$$A = \varepsilon\, b\, c$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A$ | absorbans | dimensjonsløs |
| $\varepsilon$ | molar absorptivitet (molar ekstinksjonskoeffisient) | L mol⁻¹ cm⁻¹ |
| $b$ | lysveiens lengde i cella | cm |
| $c$ | konsentrasjon | mol/L |
Absorbansen er konsentrasjonsrelatert, så lav deteksjonsgrense krever et så konsentrert kromatografisk bånd som mulig [chromatographgy_basics_part1.pdf, p. 81, lign. 3.8]. Forelesningen skriver $A = \lambda\cdot c\cdot\varepsilon$ med «molar ekstinksjonskoeffisient», der lysveien er notert som λ [HPLC_2_u_notater.pdf, slide 3].

### Fluorescensintensitet
$$F = k\,\Phi\, I_0\, \varepsilon\, b\, c$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F$ | fluorescensintensitet | relativ |
| $k$ | instrumentkonstant | – |
| $\Phi$ | kvanteutbytte (emitterte/eksiterte fotoner) | 0–1 |
| $I_0$ | intensitet av eksitasjonslyset | relativ |
| $\varepsilon, b, c$ | som i Beers lov | – |
Signalet øker med eksitasjonsintensiteten, og derfor foretrekkes lasere [chromatographgy_basics_part2.pdf, p. 97, lign. 3.9].

### Lysspredning (ELSD)
$$A = a\, m^b$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A$ | mengde spredt lys | relativ |
| $a, b$ | konstanter | – |
| $m$ | analyttmasse | ng |
Ikke-lineær. Lineær sammenheng mellom log A og log m innenfor et begrenset område [chromatographgy_basics_part2.pdf, p. 100, lign. 3.10].

## Worked example
**H25 oppg. 2: «UV-detektor brukes primært fordi …»** [IMAK2008 eksamen H2025.pdf, oppg. 2; Løsningsforslag IMAK2008 H25.pdf, p. 2]

Alternativer: (a) Den kan ikke brukes med gradient. (b) Den krever ingen løsemidler. (c) Alle forbindelser absorberer UV. (d) Den er billig og følsom for aromater og karbonylgrupper.
1. **(a)** Feil. UV tåler gradient (Tabell 3.5), med unntak ved 200 nm [chromatographgy_basics_part1.pdf, p. 81–82].
2. **(b)** Feil. Ingen HPLC-detektor «krever ingen løsemidler». MF går alltid gjennom cella, og MF-valget er faktisk mer begrenset ved lave bølgelengder [chromatographgy_basics_part1.pdf, p. 82].
3. **(c)** Feil. Bare forbindelser med kromofor absorberer. For analytter uten kromofor velges ELSD, RI eller MS [chromatographgy_basics_part1.pdf, p. 81; chromatographgy_basics_part2.pdf, p. 100].
4. **(d)** Riktig. UV er den vanligste og billigste [HPLC_2_u_notater.pdf, slide 3]. Aromater absorberer ved 240–260 nm, og 254 nm fra Hg-lampa treffer mange aromater [chromatographgy_basics_part1.pdf, p. 82–83].
5. **Kobling til koffeinlaben:** deteksjon ved 254 nm av koffein, en aromatisk heterosyklisk forbindelse [koffein _ISTD_student_rev2.pdf, p. 1].

## Faded example
**H24 oppg. 1(c): forklar «diode-array-detektor»** (2 av 10 p) [Eksamen_IMAK2008_24.pdf, oppg. 1(c); LF eksamen H2024 IMAK2008.pdf, p. 4]
1. Hva slags detektor er det? En absorbansdetektor brukt i HPLC.
2. **(try)** Hva skiller den fra en vanlig UV-detektor i lysveien? → Hvitt (polykromatisk) lys går gjennom prøven og splittes etterpå av et gitter mot hundrevis av fotodioder [chromatographgy_basics_part1.pdf, p. 83–84].
3. **(try)** Hva gir det i praksis? → Absorpsjon over et bredt spektrum, målt samtidig.
4. **(try)** Hvilke to bruksområder nevner løsningsforslaget? → Analyttidentifikasjon og kvantifisering.
5. **(try)** Hvilken ekstra kontroll gjør DAD mulig ifølge boka? → Topprenhet, ved å sammenligne relative absorbanser over toppen [chromatographgy_basics_part1.pdf, p. 84].

## Exam traps
- **«Alle forbindelser absorberer UV»**: Feil. Krever kromofor [chromatographgy_basics_part1.pdf, p. 81; Løsningsforslag IMAK2008 H25.pdf, oppg. 2].
- **Velge laveste bølgelengde fordi ε er størst der**: Gir mer interferens fra MF og andre forbindelser. Velg et høyere $\lambda_{maks}$ for selektivitet [chromatographgy_basics_part1.pdf, p. 82].
- **DAD vs. UV-detektor**: Ved DAD splittes lyset *etter* prøvecella, og alle λ måles samtidig. Ved en vanlig spektrofotometrisk detektor velges én λ *før* cella [chromatographgy_basics_part1.pdf, p. 81, 83–84].
- **RI med gradient**: Går ikke. RI krever isokratisk kjøring og streng temperaturkontroll [chromatographgy_basics_part2.pdf, p. 101–102].
- **Elektrokjemisk detektor uten salt**: MF må inneholde salt for å lede strøm [chromatographgy_basics_part2.pdf, p. 98].
- **Fluorescens har kortere bølgelengde enn eksitasjon**: Motsatt. Energitap til vibrasjon gir lengre emisjonsbølgelengde [chromatographgy_basics_part2.pdf, p. 95–96].
- **GC-detektorer på HPLC-spørsmål**: FID, TCD, ECD og NPD er GC-detektorer (side 13). H25 oppg. 2 blander UV (HPLC) med GC-detektorer i samme sett [IMAK2008 eksamen H2025.pdf, oppg. 2].

## Past exam tasks
- **H2024 oppg. 1(c)** (10 p totalt, 2 p hører hit): forklar kort «diode-array detektor».
- **H2025 oppg. 2** (flervalg, 1 av 5 delspørsmål): «UV-detektor brukes primært fordi …» → billig og følsom for aromater og karbonylgrupper.

## Test yourself
**Q:** Hvorfor er 254 nm den mest brukte bølgelengden i filterfotometriske UV-detektorer?
**A:** Det er den sterkeste linjen fra Hg-lampa i UV, og mange aromater har absorpsjonsmaksimum i dette området [chromatographgy_basics_part1.pdf, p. 83].

**Q:** Hvordan kan en DAD avsløre at en topp ikke er ren?
**A:** Ved å måle ulike deler av toppen ved ulike bølgelengder samtidig. Er de relative absorbansene forskjellige, inneholder toppen mer enn én forbindelse [chromatographgy_basics_part1.pdf, p. 84].

**Q:** Hvilken detektor velger du for polyetylenglykoler uten kromofor med gradienteluering?
**A:** Lysspredningsdetektor (ELSD). Den er nesten universell for ikke-flyktige analytter og tåler gradient. RI tåler ikke gradient [chromatographgy_basics_part2.pdf, p. 100–102, Fig. 3.46].

**Q:** Hvorfor gir rigide aromatiske strukturer sterkere fluorescens enn fleksible?
**A:** Fleksible strukturer taper mer energi som vibrasjon [chromatographgy_basics_part2.pdf, p. 97].

**Q:** Hvorfor øker en Z-celle følsomheten til en UV-detektor?
**A:** Den gir lengre lysvei, og absorbansen er proporsjonal med lysveien ($A = \varepsilon b c$) [chromatographgy_basics_part1.pdf, p. 81–82].

## Sources
- [HPLC_2_u_notater.pdf, slide 3–7] (slide 8–9 er tomme. `HPLC_2_m_delvisnotater.pdf` er identisk)
- [chromatographgy_basics_part1.pdf, p. 55, 80–84] (p. = boksidetall; PDF-side = bokside + 16)
- [chromatographgy_basics_part2.pdf, p. 85–86, 95–103] (p. = boksidetall; PDF-side = bokside − 84)
- [Pensum.pdf, p. 1]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(c)] / [LF eksamen H2024 IMAK2008.pdf, p. 3–4]
- [IMAK2008 eksamen H2025.pdf, oppg. 2] / [Løsningsforslag IMAK2008 H25.pdf, p. 2]
- [koffein _ISTD_student_rev2.pdf, p. 1]
