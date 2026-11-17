---
slug: 05-kolonner-og-partikler
title: "Kolonner og partikler"
topic: hplc
exam_weight: low
exam_weight_note: "H25 oppg. 1 flervalg (mindre partikler → høyere N), H24 1(e) delvis (partikkelstørrelse, kolonnelengde/diameter, temperatur som parametere for oppløsning)"
builds_on: [02-effektivitet-og-opplosning, 03-bandspredning-van-deemter, 04-hplc-system-pumper-injeksjon]
used_in: [07-adsorpsjon-normalfase, 08-omvendt-fase-og-ionepar, 12-gc-kolonner-og-stasjonaerfaser]
sources: ["HPLC_2_u_notater.pdf", "Kilder til Båndspredning 200826.pdf", "chromatographgy_basics_part1.pdf", "Pensum.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** Hva skjer med mottrykket hvis partikkelstørrelsen reduseres fra 5 til 3 µm ved samme kolonnelengde?
**A:** Det øker nesten tre ganger, fordi $\Delta p \propto 1/d_p^2$ [chromatographgy_basics_part1.pdf, p. 58].

**Q:** Hva er en core-shell-partikkel?
**A:** En partikkel med hard, ikke-porøs kjerne og et tynt porøst overflatelag [HPLC_2_u_notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 58–59].

**Q:** Hva gjør økt kolonnetemperatur normalt med retensjonen i omvendt fase?
**A:** Den reduseres, for de fleste forbindelser [chromatographgy_basics_part1.pdf, p. 61].

## Mental model
Kolonnen er der separasjonen skjer, og det er partiklene som bestemmer både hvor effektiv den er og hvor mye trykk den krever [chromatographgy_basics_part1.pdf, p. 56, 58]. Små partikler gir korte diffusjonsveier og lite eddy-diffusjon, altså lav $H$ og flat van Deemter-kurve, slik at man kan kjøre raskt uten å miste mye effektivitet [chromatographgy_basics_part1.pdf, p. 56–57; Kilder til Båndspredning 200826.pdf, slide 3–4]. Prisen er trykket: $\Delta p$ øker med $1/d_p^2$, og derfor krever partikler under 2 µm UHPLC-pumper [HPLC_2_u_notater.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 58–59]. Core-shell-partikler og monolitter er to måter å få kort diffusjonsvei eller lavt trykk uten å gå hele veien ned i partikkelstørrelse [chromatographgy_basics_part1.pdf, p. 59–60]. Smalere kolonner fortynner prøven mindre og sparer løsemiddel, og temperaturen påvirker både retensjon, toppform og trykk [chromatographgy_basics_part1.pdf, p. 55, 61–62].

## Concepts and definitions
- **Analytisk kolonne og guard-kolonne**: En kort, utskiftbar guard-kolonne foran den analytiske beskytter den [HPLC_2_u_notater.pdf, slide 1]. Anbefales hvis prøven inneholder komponenter som adsorberes irreversibelt, og godt laget gir den ingen betydelig reduksjon i effektivitet [chromatographgy_basics_part1.pdf, p. 57].
- **Kolonnemateriale og frit**: Vanligvis rustfritt stål (noen med glassinnervegg). Kapillær- og nanokolonner er av fused silica. Partiklene holdes på plass av fritter i hver ende [chromatographgy_basics_part1.pdf, p. 54–55].
- **Kolonnedimensjoner** [chromatographgy_basics_part1.pdf, p. 55, Tabell 3.1]:

| Type | ID (mm) | L (cm) | $d_p$ (µm) | Flow (µL/min) |
|---|---|---|---|---|
| Konvensjonell | 2–5 | 3–25 | 3–5 | 100–2000 |
| UHPLC | 1–2 | 3–15 | 1,7–1,9 | 100–1000 |
| Microbore | 0,5–1 | 3–25 | 3–5 | 20–100 |
| Kapillær | 0,1–0,5 | 3–25 | 3–5 | 1–20 |
| Nanoflow | 0,01–0,10 | 5–25 | 3–5 | 0,02–0,20 |

- **Effekt av ID på deteksjon**: Mindre ID gir mer konsentrerte bånd (mindre fortynning). Det forbedrer deteksjonsgrensen med konsentrasjonsfølsomme detektorer (UV, fluorescens, ESI-MS) når prøvemengden er begrenset [chromatographgy_basics_part1.pdf, p. 55].
- **Løsemiddelbesparelse**: Ved samme lineære flow reduserer 4,6 → 1 mm ID forbruket fra 1 til 0,05 mL/min. Ikke hvis flowen reduseres med split ved pumpen [chromatographgy_basics_part1.pdf, p. 55].
- **Kolonneeffektivitet vs. partikkelstørrelse**: 5 µm porøse partikler gir ca. 75–80 000 plater/m, 2,5 µm > 200 000 plater/m og 1,8 µm > 250 000 plater/m. Små partikler tåler høy lineær flow uten stor økning i $H$ (flate van Deemter-kurver) [chromatographgy_basics_part1.pdf, p. 56–57, Fig. 3.9]. Store molekyler gir lavere effektivitet pga. lavere diffusjonshastighet [chromatographgy_basics_part1.pdf, p. 56].
- **Partikkelstørrelse, trykk og oppløsning (forelesning)**: 5 µm ved 165 bar gir $R_s$ = 5,04. 3,0 µm ved 280 bar gir $R_s$ = 6,44. 1,9 µm (UHPLC) ved 655 bar gir $R_s$ = 7,54 [HPLC_2_u_notater.pdf, slide 2; Kilder til Båndspredning 200826.pdf, slide 4].
- **Kolonnelengde og oppløsning (forelesning)**: 2,1 mm ID med 2,4 µm partikler. 50 mm gir $R_s$ = 4,6, 100 mm gir 8,5 og 150 mm gir 9,6 [HPLC_2_u_notater.pdf, slide 2].
- **Totalt porøse partikler**: Porøse hele veien gjennom, med porer normalt 10–30 nm (100–300 Å), og noen 50 nm eller ned til 6–8 nm. For små molekyler anbefales 6–10 nm (høyere overflate, ca. 400 m²/g). For $M$ > 2000 gir 30 nm porer sikkerhet mot eksklusjon fra porene [chromatographgy_basics_part1.pdf, p. 58; HPLC_2_u_notater.pdf, slide 3].
- **Core-shell-partikler**: Hard kjerne med porøs overflate [HPLC_2_u_notater.pdf, slide 3]. Moderne versjoner har en solid kjerne på 1,3–2,6 µm og et porøst skall på 0,2–0,5 µm (standard pore 10 nm, ca. 200 m²/g). Korte diffusjonsveier gir 5 cm kolonner opptil 15 000 plater (≈ 300 000 plater/m), og rask masseoverføring tillater høy flow [chromatographgy_basics_part1.pdf, p. 58–59].
- **Ikke-porøse (pellikulære) partikler**: Liten SF-overflate og lav kapasitet [HPLC_2_u_notater.pdf, slide 3]. Brukes av og til for makromolekyler pga. kort diffusjon, men har mye lavere lastekapasitet enn totalt porøse partikler [chromatographgy_basics_part1.pdf, p. 58].
- **UHPLC/UPLC**: Små partikler og lange kolonner gir høyt trykk. Siden små partikler gir lite ekstra båndspredning ved høy hastighet, oppnås kortere analysetid og høyere topper. Trykkgrensen er økt fra 400 til 700, 1000 og 1200 bar, og det kreves detektorer med rask elektronikk (≥ 40 kHz) [chromatographgy_basics_part1.pdf, p. 59, Fig. 3.11].
- **Monolittiske kolonner**: Ingen partikler, men en kontinuerlig porøs struktur polymerisert inne i kolonnen (organisk polymer eller silikat). Den har makroporer (noen µm), mesoporer (2–50 nm) og mikroporer (< 2 nm). Store gjennomstrømningsporer gir lavere mottrykk og tillater høyere flow eller lengre kolonner, og det trengs ingen fritter. Effektiviteten per meter er generelt lavere enn for pakkede kolonner, unntatt ved høy flow [chromatographgy_basics_part1.pdf, p. 59–60].
- **Åpne rørkolonner (OTC) i HPLC**: Dominerer i GC, men ikke i HPLC. Golay-ligningen viser hvorfor: C-leddet dominerer, og fordi $D_m$ er mye mindre i væske, må $d_c$ ned til ≤ 10 µm. Ulempen er svært lav lastekapasitet. Fordelene er bedre følsomhet med konsentrasjonsfølsom deteksjon, mindre adsorpsjon av proteiner og ingen fritter. De krever ekte «zero dead volume»-koblinger [chromatographgy_basics_part1.pdf, p. 61].
- **Kolonnelevetid**: Måneder opptil 1 år med god beskyttelse og vedlikehold. En ny kolonne kan trenge flere prøveinjeksjoner før elueringen blir stabil (adsorptive seter må dekkes). En tilstoppet innløpsfrit gir høyere mottrykk. Backflushing kan av og til redde kolonnen, men ikke hvis innløpet er tettet med proteiner [chromatographgy_basics_part1.pdf, p. 57].
- **Toppformer og årsaker**: Tidlig eluerende topper med fronting og lavere N skyldes ofte overlasting. Tidlige topper med tailing kan skyldes hulrom (voids) ved innløpet. Tailing av retarderte analytter kan skyldes interaksjon med ubelagte seter på pakkingen, noe som kan motvirkes ved å endre MF [chromatographgy_basics_part1.pdf, p. 57].
- **Temperaturkontroll**: Retensjon, særlig i omvendt fase, avhenger av temperatur. Økt T reduserer retensjonen for de fleste forbindelser (unntak bl.a. polyetylenglykoler) og forbedrer ofte asymmetriske topper. Forklaringen er at $D$ øker med T (Stokes–Einstein) og viskositeten synker, noe som gir bedre masseoverføring og lavere trykk. Kolonner bør derfor stå i kolonneovn [chromatographgy_basics_part1.pdf, p. 61–62].
- **Temperatur vs. løsemiddel**: Generelt, og særlig for små molekyler, påvirker løsemiddelendringer retensjonen mer enn temperatur, så løsemiddelgradienter foretrekkes [chromatographgy_basics_part1.pdf, p. 63].
- **Preparativ LC og flash**: Målet er å fraksjonere mest mulig prøve raskt. Overlasting (volum eller masse) gir båndspredning og overlappende topper. Flash bruker korte, vide kolonner (15–20 cm) med 40–60 µm irregulære partikler og N₂-trykk. Det er raskt og billig, men har lav effektivitet [chromatographgy_basics_part1.pdf, p. 63].
- **Ikke pensum**: Mikrochip-kolonner (3.4.3) [Pensum.pdf].

## Visuals
- **Partikkeltyper** · tverrsnitt, tre paneler [HPLC_2_u_notater.pdf, slide 3; Kilder til Båndspredning 200826.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 58–59]
  - (1) Totalt porøs partikkel: porer gjennom hele kulen, med etikett «porer 10–30 nm».
  - (2) Core-shell: grå solid kjerne (1,3–2,6 µm) med porøst skall (0,2–0,5 µm). Pil som viser kort diffusjonsvei inn i skallet.
  - (3) Ikke-porøs: glatt kule. Etikett «liten SF-overflate, lav kapasitet».
  - Under: kort pil (core-shell) vs. lang pil (helt porøs) for diffusjonsvei, koblet til C-leddet på side 03.
- **Partikkelstørrelse: trykk vs. oppløsning** · plot, tre stablede kromatogrammer [HPLC_2_u_notater.pdf, slide 2; Kilder til Båndspredning 200826.pdf, slide 4]
  - Samme seks-topps separasjon på 5 µm (165 bar, $R_s$ = 5,04), 3,0 µm (280 bar, $R_s$ = 6,44) og 1,9 µm (655 bar, $R_s$ = 7,54, «UHPLC»).
  - Fremhev at toppene blir smalere og trykket stiger når $d_p$ minker.
- **Kolonnelengde vs. oppløsning** · plot, tre stablede kromatogrammer [HPLC_2_u_notater.pdf, slide 2]
  - 50 × 2,1 mm ($R_s$ = 4,6), 100 × 2,1 mm ($R_s$ = 8,5), 150 × 2,1 mm ($R_s$ = 9,6), alle med 2,4 µm partikler. x-akse: tid (min, 0–6).
  - Fremhev at lengre kolonne gir bedre $R_s$, men lengre tid.
- **Van Deemter for tre partikkelstørrelser** · plot [chromatographgy_basics_part1.pdf, p. 57, Fig. 3.9]
  - x-akse: lineær hastighet (cm/s, 0–1,5). y-akse: $H$ (µm, 0–40).
  - Kurver for 5,0 µm (høyest, bratt stigende), 3,5 µm og 1,8 µm (lavest og nesten flat ved høy $u$).
- **Interactive plot: mottrykk** · plot
  - Ligning: $\Delta p = \kappa u \eta L / d_p^2$, vist som relativt trykk mot referanse (5 µm, L = 15 cm).
  - Slidere: $d_p$ 1,7–5 µm og $L$ 5–25 cm (fra Tabell 3.1) [chromatographgy_basics_part1.pdf, p. 55, 58].
  - Vis faktoren og en linje for 400 bar (konvensjonell grense) og 1000–1200 bar (UHPLC) [chromatographgy_basics_part1.pdf, p. 48].

## Equations
### Mottrykk over kolonnen
$$\Delta p = \frac{\kappa\, u\, \eta\, L}{d_p^2}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\Delta p$ ($P$) | mottrykk | bar |
| $\kappa$ | konstant | – |
| $u$ | lineær MF-hastighet | mm/s |
| $\eta$ | viskositet til MF | kg m⁻¹ s⁻¹ |
| $L$ | kolonnelengde | cm |
| $d_p$ | partikkeldiameter | µm |
Dobbel kolonnelengde gir dobbelt trykk, og 5 → 3 µm partikler gir nesten tre ganger trykket [HPLC_2_u_notater.pdf, slide 2; chromatographgy_basics_part1.pdf, p. 58, lign. 3.2].

### Stokes–Einstein (temperaturavhengighet av D)
$$D = \frac{RT}{6\pi \eta N r}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $D$ | diffusjonskoeffisient | m²/s |
| $R$ | gasskonstanten | J mol⁻¹ K⁻¹ |
| $T$ | temperatur | K |
| $\eta$ | viskositet | kg m⁻¹ s⁻¹ |
| $N$ | Avogadros tall | mol⁻¹ |
| $r$ | molekylradius | m |
Høyere T gir høyere $D$ og lavere $\eta$, og dermed bedre masseoverføring (lavere C-ledd). B-leddet har liten betydning i HPLC, så nettoeffekten er positiv [chromatographgy_basics_part1.pdf, p. 61, lign. 3.3, Info-box 3.6].

### Platetall fra plater per meter
$$N = (\text{plater/m}) \times L$$
Bokas eksempel: 2,5 µm partikler (> 200 000 plater/m) i en 10 cm kolonne gir 20 000 plater [chromatographgy_basics_part1.pdf, p. 56]. Følger av $H = L/N$ (side 02).

## Worked example
**Partikkelstørrelse, trykk og plater (bokas tallene)** [chromatographgy_basics_part1.pdf, p. 56, 58]

1. **Trykkøkning 5 → 3 µm.** Med samme $u$, $\eta$ og $L$ er $\Delta p \propto 1/d_p^2$, så $\dfrac{\Delta p_{3}}{\Delta p_{5}} = \left(\dfrac{5}{3}\right)^2 = \dfrac{25}{9} \approx 2{,}8$. Det er «nesten tre ganger», som boka skriver.
2. **Dobbel kolonnelengde.** $\Delta p \propto L$, så trykket dobles.
3. **Platetall for en 10 cm kolonne med 2,5 µm partikler.** > 200 000 plater/m × 0,10 m = 20 000 plater.
4. **Sammenlign med 5 µm.** 75–80 000 plater/m × 0,10 m ≈ 7500–8000 plater.
5. **Hva betyr det for oppløsningen?** $R_s \propto \sqrt{N}$ (side 02), så $\sqrt{20\,000/7750} \approx 1{,}6$ ganger bedre oppløsning, mot ca. 2,8 ganger høyere trykk ved 3 µm (enda mer ved 2,5 µm).
6. **Konklusjon.** Mindre partikler gir høyere platetall og bedre separasjon, som er riktig svar på H25 oppg. 1 [Løsningsforslag IMAK2008 H25.pdf, oppg. 1], men trykket begrenser hvor langt man kan gå uten UHPLC.

## Faded example
**Core-shell-kolonne** [chromatographgy_basics_part1.pdf, p. 59]

Gitt: En 5 cm core-shell-kolonne gir opptil 15 000 plater.
1. Plater per meter: $15\,000 / 0{,}05\text{ m} = 300\,000$ plater/m.
2. **(try)** Platehøyde: $H = L/N = 5\text{ cm}/15\,000 = \;?$ → 3,3·10⁻⁴ cm = 3,3 µm.
3. **(try)** Er dette bedre eller dårligere enn de 5–10 µm boka forventer for godt pakkede HPLC-kolonner? → Bedre (lavere $H$) [chromatographgy_basics_part1.pdf, p. 11].
4. **(try)** Hvilket van Deemter-ledd forklarer at core-shell-partikler tåler høy flow? → C-leddet, siden kort diffusjonsvei i det tynne porøse skallet gir rask masseoverføring.
5. **(try)** Hvorfor er ikke helt ikke-porøse partikler like gode for analytisk bruk? → Mye lavere lastekapasitet [chromatographgy_basics_part1.pdf, p. 58].

## Exam traps
- **Mindre partikler gir lavere trykk**: Motsatt. $\Delta p \propto 1/d_p^2$ [chromatographgy_basics_part1.pdf, p. 58].
- **Trykket skalerer lineært med partikkelstørrelse**: Feil. Det skalerer kvadratisk, så 5 → 3 µm gir ~2,8 ganger trykket, ikke 1,7 [chromatographgy_basics_part1.pdf, p. 58].
- **Dobbel lengde gir dobbel oppløsning**: Den gir dobbelt $N$ og dobbelt trykk, men bare $\sqrt{2}$ ganger bedre $R_s$ [chromatographgy_basics_part1.pdf, p. 13, 58].
- **Platetall fra gradientkjøring**: Kan bare måles isokratisk. Ved gradient brukes toppkapasitet [chromatographgy_basics_part1.pdf, p. 56, Info-box 3.3].
- **Fronting = kolonnen er ødelagt**: Fronting av tidlige topper skyldes ofte overlasting. Tailing kan skyldes hulrom ved innløpet eller interaksjon med ubelagte seter [chromatographgy_basics_part1.pdf, p. 57].
- **Høyere temperatur øker retensjonen**: For de fleste forbindelser reduseres den [chromatographgy_basics_part1.pdf, p. 61].
- **Åpne rør er like gode i HPLC som i GC**: Nei. $D_m$ i væske er mye mindre, så $d_c$ må ned til ≤ 10 µm, og kapasiteten blir svært lav [chromatographgy_basics_part1.pdf, p. 61].

## Past exam tasks
- **H2025 oppg. 1** (flervalg, 1 av 5 delspørsmål): «En reduksjon i partikkelstørrelse i pakkede kolonner vil normalt føre til …» → høyere plateantall og bedre separasjon.
- **H2024 oppg. 1(e)** (6 p, delvis): parametere for bedre oppløsning i HPLC. Løsningsforslaget nevner kolonnetemperatur, stasjonærfase (partikkelstørrelse, porestørrelse, kjemi) og kolonnelengde/diameter [LF eksamen H2024 IMAK2008.pdf, p. 5].

## Test yourself
**Q:** Hvorfor gir en smalere kolonne (mindre ID) lavere deteksjonsgrense med UV-detektor når prøvemengden er begrenset?
**A:** Mindre ID gir mindre fortynning og mer konsentrerte bånd, og UV er konsentrasjonsfølsom [chromatographgy_basics_part1.pdf, p. 55].

**Q:** Hva er fordelen med monolittiske kolonner, og hva er ulempen?
**A:** Store gjennomstrømningsporer gir lavt mottrykk og høy flow eller lange kolonner, og ingen fritter. Ulempen er generelt lavere effektivitet per meter enn pakkede kolonner, unntatt ved høy flow [chromatographgy_basics_part1.pdf, p. 60].

**Q:** Hvilken porestørrelse anbefales for molekyler med $M$ > 2000, og hvorfor?
**A:** 30 nm, for å unngå at analyttene ekskluderes fra porene [chromatographgy_basics_part1.pdf, p. 58].

**Q:** Gi to grunner til at høyere kolonnetemperatur kan gi bedre toppform og raskere analyse.
**A:** Høyere $D$ (Stokes–Einstein) gir bedre masseoverføring, og lavere viskositet gir lavere mottrykk [chromatographgy_basics_part1.pdf, p. 61–62].

**Q:** Hva skiller flash-kromatografi fra preparativ HPLC?
**A:** Flash bruker korte, vide kolonner med 40–60 µm irregulære partikler drevet av N₂-trykk. Det er raskt og billig, men har lav effektivitet [chromatographgy_basics_part1.pdf, p. 63].

## Sources
- [HPLC_2_u_notater.pdf, slide 1–3] (`HPLC_2_m_delvisnotater.pdf` er identisk)
- [Kilder til Båndspredning 200826.pdf, slide 2–4]
- [chromatographgy_basics_part1.pdf, p. 11, 13, 48, 54–63] (p. = boksidetall; PDF-side = bokside + 16)
- [Pensum.pdf, p. 1]
- [IMAK2008 eksamen H2025.pdf, oppg. 1] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 1]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(e)] / [LF eksamen H2024 IMAK2008.pdf, p. 5]
