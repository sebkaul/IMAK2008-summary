---
slug: 25-ce-injeksjon-og-deteksjon
title: "CE: prøveapplisering (injeksjon) og deteksjon"
topic: ce
exam_weight: medium
exam_weight_note: "H25 oppg. 12 (6 p): de to vanligste injeksjonsmetodene, prinsipper, og sammenligning av selektivitet og sensitivitet. H25 oppg. 11 (sensitivitet CE vs. HPLC) og oppg. 9 («nL prøvevolum») berører også siden"
builds_on: [24-ce-mobilitet-og-eof, 06-hplc-detektorer, 14-ms-ionisering]
used_in: [26-ce-metoder-og-cec]
sources: ["Kapillærelektroforese del 2 m notater.pdf", "chromatographgy_basics_part2.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** Hvilke to injeksjonsmetoder er de vanligste i CE?
**A:** Hydrodynamisk (hydrostatisk) og elektrokinetisk [Kapillærelektroforese del 2 m notater.pdf, slide 5; Løsningsforslag IMAK2008 H25.pdf, oppg. 12i].

**Q:** Hvilken av dem gir høyest sensitivitet, og hvilken er mest representativ for prøvesammensetningen?
**A:** Elektrokinetisk gir høyest sensitivitet, men favoriserer ioner med høy mobilitet. Hydrodynamisk injiserer alle komponenter omtrent proporsjonalt med konsentrasjonen [slide 7, 10; Løsningsforslag IMAK2008 H25.pdf, oppg. 12iii].

**Q:** Hvorfor er UV-deteksjon i CE relativt lite følsom?
**A:** Optisk veilengde = kapillærets indre diameter (50–75 µm), og injeksjonsvolumene er bare nL [chromatographgy_basics_part2.pdf, p. 140–141].

## Mental model
Kapillæret rommer bare ca. 1 µL, så prøvepluggen må være i nL-området. Ellers blir båndet bredt allerede ved start, og de høye platetallene går tapt (N = L_D²/L_i²) [Kapillærelektroforese del 2 m notater.pdf, slide 4]. Prøven kan presses inn mekanisk (trykk, vakuum, høydeforskjell = hydrodynamisk) eller trekkes inn med spenning (elektrokinetisk).

Mekanisk innføring er «blind» for ladning: alt kommer inn i forhold til konsentrasjonen. Det elektriske feltet derimot trekker inn mest av de raske, høyt ladde ionene. Det gir høy følsomhet for ioner, men skjev og mindre reproduserbar injeksjon [slide 7, 10; chromatographgy_basics_part2.pdf, p. 139].

På deteksjonssiden er problemet den korte lysveien: UV er standard men middels følsom, LIF er svært følsom, og MS (via ESI) gir identitet i tillegg [slide 14, 16; chromatographgy_basics_part2.pdf, p. 140].

## Concepts and definitions
- **Prøvevolum** [Kapillærelektroforese del 2 m notater.pdf, slide 4; chromatographgy_basics_part2.pdf, p. 137]:
  - Små volum (nL eller mindre) for å unngå at injeksjonsvolumet bidrar til båndbredden. Typisk 1–50 nL (= 0,001–0,05 µL).
  - Eksempel: kapillærvolumet er 1 µL for et kapillær på 50 cm × 50 µm ID.
  - Injeksjon < 10 nL er nok til å oppnå 1 000 000 plater i et kapillær på 50 µm ID × 1 m.
  - **Injeksjonsbånd (L_i)**: lengden på prøvepluggen i kapillæret. Notat (slide 4): «smalt og definert, jevnt fordelt, uten konsentrasjonsforskjeller».
  > Merk: slide 4 skriver «1–50 nL (= 0,001–0,005 µL)». Riktig omregning av 50 nL er 0,05 µL.
- **Injeksjonsmetoder**: To hovedmetoder er (1) hydrodynamisk (hydrostatisk) og (2) elektrokinetisk. I tillegg finnes isotakoforese [slide 5], spesielle loop-teknikker og stacking [chromatographgy_basics_part2.pdf, p. 138].

**1. Hydrodynamisk injeksjon** [Kapillærelektroforese del 2 m notater.pdf, slide 6–9; chromatographgy_basics_part2.pdf, p. 138]
- Prøveglasset plasseres ved kapillærinngangen, og en prøvealikvot tas opp ved trykkforskjell:
  - **Overtrykk** på prøveglasset. Notat: typisk 50 mbar, injeksjonstid 3–5 s, eventuelt opp mot 10–30 s.
  - **Vakuum** på utløpet.
  - **Nivåforskjell (Δh)** mellom inngang og utgang. Væsken flyttes fra høyt til lavt punkt med gravitasjon (heverts-/siphonsystem), «gravitasjonsinjeksjon».
- Fordeler: enkelt og krever ikke elektrisk utstyr. Notat (slide 6): høy reproduserbarhet, men mindre følsom enn elektrokinetisk.
- Ulemper: kan være mindre presist. Gravitasjonsvarianten gjør det vanskelig å kontrollere nøyaktig prøvemengde, og notatet sier den er lite egnet for viskøse prøver.
- **Oppsummert: prøven presses inn, og alle komponenter injiseres omtrent proporsjonalt med konsentrasjonen** [slide 7].
- Eksempler: katekolaminer (hydrodynamisk 5 s, 20 kV, pH 5,5 fosfat-borat, 205 nm, slide 8). Sorbinsyreisomerer med β-CD (1 s ved 0,169 bar, 15 kV, pH 9,3 tetraborat, 254 nm, slide 9). Bokas fig. 6.7–6.8: 0,5 psi i 5 s [chromatographgy_basics_part2.pdf, p. 138–139].

**2. Elektrokinetisk injeksjon** [Kapillærelektroforese del 2 m notater.pdf, slide 10; chromatographgy_basics_part2.pdf, p. 139]
- Prøveglasset plasseres ved kapillærinngangen, og prøven tas opp ved å tilføre spenning. Spenningen mellom prøveglass og kapillær skaper elektroosmose, og prøven trekkes inn.
  - Notat: lav spenning, 3–5 kV (1–10 kV), og injeksjonstid 3–10 s.
- Analyttene føres inn med en **kombinasjon av egen migrasjonshastighet og EOF**. Uten EOF kalles det **elektroforetisk injeksjon**.
- Forbedret følsomhet, men dårligere reproduserbarhet enn andre metoder.
- **Diskriminering**: små, høyt ladde ioner vandrer raskere inn enn store. **Oppsummert: komponenter med høy mobilitet favoriseres.**
- Etter injeksjonen flyttes inletenden til en vial med separasjonselektrolytt, og separasjonsspenningen settes på [chromatographgy_basics_part2.pdf, p. 139].

**Hydrodynamisk vs. elektrokinetisk** [Kapillærelektroforese del 2 m notater.pdf, slide 11–13]
- Hydrodynamisk: prøvevialen omsluttes sammen med kapillærenden, og trykk legges på kammeret en fast tid. Elektrokinetisk: elektroden står i prøvevialen og feltet driver prøven inn [slide 11, tabell].
- **Signaleksempel (triptorelin 0,5 µg/mL)** [slide 12]:
  - (a) Hydrodynamisk, 50 mbar i 20 s: S/N = 7,7.
  - (b) Elektrokinetisk (FESI, 10 kV i 20 s etter en kort vannplugg): S/N = 340.

**Deteksjon** [Kapillærelektroforese del 2 m notater.pdf, slide 14–18; chromatographgy_basics_part2.pdf, p. 139–141]
- **Elektroferogram**: detektorsignalet som funksjon av separasjonstid.
- Deteksjon skjer on-line, med detektoren nær utløpet. Lengden innløp → deteksjonspunkt er den effektive lengden L_D [chromatographgy_basics_part2.pdf, p. 137].
- **UV-Vis**: standard i kommersielle instrumenter og mest brukt.
  - Polyimidlaget må fjernes i deteksjonsområdet, som gir et optisk vindu på noen mm. Fiberoptikk brukes i de fleste detektorer.
  - Dårlige deteksjonsgrenser fordi veilengden = kapillærets ID. **cLOD ∝ 1/ID** [chromatographgy_basics_part2.pdf, p. 136, 140].
  - Bubble cell eller høysensitivitetscelle gir lengre veilengde, men er dyrere.
  - **Indirekte UV-Vis** brukes for forbindelser uten absorpsjon, f.eks. uorganiske ioner (slide 18 viser kationanalyse og kation + amingruppe-analyse med UV-Vis) [chromatographgy_basics_part2.pdf, p. 140].
- **Fluorescens**: for prøver som er naturlig fluorescerende eller fluorescensmerket. Gode deteksjonsgrenser og følsom.
  - **LIF (laserindusert fluorescens)** gir enda bedre deteksjonsgrenser [slide 14; chromatographgy_basics_part2.pdf, p. 140].
  - Notat: kort analysetid og god kvantifisering, godt egnet til immunoassays og enzymassays.
  - Eksempel: Sanger-sekvensering med fluorescensmerkede ddNTP-er, kapillær-gelelektroforese og laser/fluorescensdeteksjon [slide 15].
- **Elektrokjemisk detektor**: mulig, men krever et spesielt grensesnitt som separerer de to elektriske kretsene [chromatographgy_basics_part2.pdf, p. 140].
- **CE-MS** [Kapillærelektroforese del 2 m notater.pdf, slide 16; chromatographgy_basics_part2.pdf, p. 140]:
  - Høy separasjonsoppløsning kombinert med følsomhet og spesifisitet gjør det mulig å analysere komplekse prøver nøyaktig med svært små prøvemengder.
  - Viktig i bioanalyse, med økende bruk for proteiner, peptider og andre biomolekyler.
  - Ioner dannes vanligvis ved ESI. De to elektriske kretsene (CE-HV og ESI-HV) må separeres i grensesnittet. Finnes med sheath flow (make-up flow) eller sheathless.
  - Notat: identifisering basert på masse/ladning-forhold, m/z.
- **Sensitivitet CE vs. LC**: cLOD/cLOQ i sone-CE (ikke lavere enn ca. 10⁻⁶ M) er generelt høyere enn i LC, på grunn av kort optisk vei (50–100 µm) og små injeksjonsvolumer (2–20 nL) [chromatographgy_basics_part2.pdf, p. 141]. LF H25: i utgangspunktet er HPLC mer følsom, men med riktig deteksjon kan CE bli mer følsom [Løsningsforslag IMAK2008 H25.pdf, oppg. 11].
  > Kontrollert mot boka (Info-boks 6.8): 10⁻⁶ M [chromatographgy_basics_part2.pdf, p. 141].
- **Sammenligning med HPLC (slide 17)**: CE gir smalere topp og høyere platetall enn HPLC for samme analytt. Elektroferogram vs. kromatogram for koffein, aspartam og benzoat [Kapillærelektroforese del 2 m notater.pdf, slide 17].

## Visuals
- **Tre hydrodynamiske varianter og elektrokinetisk** · fire panel [Kapillærelektroforese del 2 m notater.pdf, slide 6–7, 10]
  - (a) Trykk: Δp-pil ned på inlet-vial. (b) Vakuum: Δp-pil opp på outlet-vial. (c) Gravitasjon: inlet-vial hevet Δh over outlet. (d) Elektrokinetisk: + elektrode i prøvevial og − i outlet, med «EOF»-pil inn i kapillæret.
  - Etiketter: «50 mbar, 3–5 s» på (a), «3–5 kV, 3–10 s» på (d).
- **Diskriminering ved elektrokinetisk injeksjon** · skjematisk [Kapillærelektroforese del 2 m notater.pdf, slide 10–11; chromatographgy_basics_part2.pdf, p. 139]
  - Prøvevial med like mange små høyt ladde og store lavt ladde ioner. I kapillærpluggen etter elektrokinetisk injeksjon er det overvekt av små høyt ladde ioner, mens hydrodynamisk injeksjon beholder samme forhold som i vialen.
- **S/N hydrodynamisk vs. elektrokinetisk** · to elektroferogrammer [Kapillærelektroforese del 2 m notater.pdf, slide 12]
  - (a) Støyete basislinje og liten topp, S/N = 7,7. (b) Flat basislinje og høy topp, S/N = 340. Samme triptorelinprøve, 0,5 µg/mL.
- **CE-ESI-MS-oppsett** · skjematisk [Kapillærelektroforese del 2 m notater.pdf, slide 16]
  - Buffervial ved anoden og CE-kapillær til ESI-grensesnitt (nål) med egen ESI-høyspenning. Spray inn i MS-inntak og deretter massespektrometer. To separate HV-kretser.
- **Interaktiv graf: injeksjonsbånd vs. maks platetall** [Kapillærelektroforese del 2 m notater.pdf, slide 4; chromatographgy_basics_part2.pdf, p. 137]
  - Slidere: ID 50 / 75 µm, L_D 0,4–1 m og injisert volum 1–50 nL (kursets område).
  - Beregn $L_i = V_{inj}/(\pi r^2)$ og $N_{max} = L_D^2/L_i^2$, og vis N på log-akse med referanselinje ved 10⁶.
  - Ankerpunkt fra kurset: 50 µm × 1 m og < 10 nL → 10⁶ plater.

## Equations
### Maksimalt platetall begrenset av injeksjonsbåndet
$$N = \frac{L_D^2}{L_i^2}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $N$ | maks oppnåelig platetall | – |
| $L_D$ | effektiv kapillærlengde (innløp → detektor) | m |
| $L_i$ | lengde på injeksjonsbåndet | m |

Gjelder når injeksjonen er eneste bidrag til båndbredden. Gir kravet om nL-injeksjon [Kapillærelektroforese del 2 m notater.pdf, slide 4; chromatographgy_basics_part2.pdf, p. 137].

### Hydrodynamisk injeksjon (lign. 6.4)
$$L_i = v\cdot t,\qquad v = \frac{\rho g \pi r^4 \Delta h\, t}{8\eta L}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $v$ | «hydrodynamisk hastighet» (se merknad) | – |
| $t$ | injeksjonstid | s |
| $\rho$ | elektrolyttens tetthet | kg m⁻³ |
| $\eta$ | elektrolyttens viskositet | Pa s |
| $g$ | tyngdeakselerasjon | m s⁻² |
| $r$ | kapillærradius | m |
| $\Delta h$ | høydeforskjell inlet–outlet | m |
| $L$ | total kapillærlengde | m |

Gjelder gravitasjons- og siphoninjeksjon [chromatographgy_basics_part2.pdf, p. 138].
> Merknad: Slik den er trykt (med $\pi r^4$ og $t$), har uttrykket enheten volum (m³) og er Hagen–Poiseuilles injiserte volum, ikke en hastighet. Pluggens lengde blir da $L_i = V_{inj}/(\pi r^2)$. Kursfilene oppklarer ikke dette. Bruk ligningen kvalitativt: mer injeksjon ved større $\Delta h$, $r$ og $t$, mindre ved høyere $\eta$ og $L$.

### Elektrokinetisk injisert mengde (lign. 6.5)
$$Q = \frac{(\mu_e + \mu_{eo})\,V_i\,\pi r^2\, t\, C}{L}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $Q$ | injisert analyttmengde | mol |
| $\mu_e,\ \mu_{eo}$ | elektroforetisk og elektroosmotisk mobilitet | m² V⁻¹ s⁻¹ |
| $V_i$ | injeksjonsspenning | V |
| $C$ | analyttkonsentrasjon | mol m⁻³ |

$Q \propto \mu_e$, så analytter med høy mobilitet (små, høyt ladde) injiseres i større mengde. Det er kilden til diskrimineringen [chromatographgy_basics_part2.pdf, p. 139].

## Worked example
**H25 oppg. 12: injeksjon i CE** (6 p) [IMAK2008 eksamen H2025.pdf, oppg. 12; Løsningsforslag IMAK2008 H25.pdf, oppg. 12]

*i) De to vanligste appliseringsmetodene?*
1. → **Hydrodynamisk og elektrokinetisk** [Kapillærelektroforese del 2 m notater.pdf, slide 5].

*ii) Beskriv prinsippene*
2. **Hydrodynamisk**: Prøveglasset plasseres ved kapillærinngangen, og prøven tas opp ved trykkforskjell. Det gjøres med positivt trykk på prøveglasset, vakuum eller et hevertsystem (høydeforskjell). Krever ikke elektrisk utstyr og er enkel [slide 6–7].
3. **Elektrokinetisk**: Prøveglasset plasseres ved kapillærinngangen, og prøven tas opp ved å tilføre spenning. Det skapes elektroosmose, og prøven trekkes inn. Analyttene transporteres med en kombinasjon av migrasjonshastighet og EOF. Uten EOF kalles det elektroforetisk injeksjon. Dårligere reproduserbarhet [slide 10; chromatographgy_basics_part2.pdf, p. 139].

*iii) Sammenlign selektivitet og sensitivitet*
4. Elektrokinetisk: relativt høy sensitivitet (avhengig av ion) og selektiv for ioner, fordi Q ∝ (µ_e + µ_eo).
5. Hydrodynamisk: relativt lav sensitivitet og ikke selektiv for ioner, fordi alle komponenter går inn proporsjonalt med konsentrasjonen [LF oppg. 12iii; slide 7, 10].
6. Tallfest gjerne med kurseksempelet: samme prøve ga S/N 7,7 (hydrodynamisk) mot 340 (elektrokinetisk), dvs. ca. 44 ganger høyere [slide 12]. 340/7,7 = 44,2.

## Faded example
**Hvor lite må injeksjonen være for 10⁶ plater?** [Kapillærelektroforese del 2 m notater.pdf, slide 4; chromatographgy_basics_part2.pdf, p. 137]
*Kapillær 50 µm ID × 1 m. Anta L_D ≈ 1 m.*
1. Sett $N = L_D^2/L_i^2 = 10^6$, som gir $L_i = L_D/\sqrt{10^6} = L_D/1000$.
2. **(try)** $L_i$ = ? → 1 m / 1000 = **1 mm**.
3. **(try)** Tverrsnitt: $r$ = 25 µm, så $\pi r^2$ = ? → π·(25·10⁻⁶ m)² = **1,96·10⁻⁹ m²**.
4. **(try)** Pluggvolum $V = \pi r^2 L_i$ = ? → 1,96·10⁻⁹ m² · 10⁻³ m = 1,96·10⁻¹² m³ ≈ **2 nL**.
5. **(try)** Stemmer det med kursets «< 10 nL»? → Ja. 2 nL er godt under grensen. 10 nL ville i dette kapillæret gitt $L_i$ ≈ 5 mm og N ≈ 4·10⁴, så «< 10 nL» er en øvre grense og ikke målet.
6. **(try)** Kontroll: totalvolum av 50 cm × 50 µm = ? → 1,96·10⁻⁹ · 0,5 ≈ 0,98·10⁻⁹ m³ ≈ **1 µL** (som på slide 4).

## Exam traps
- **Elektrokinetisk = «bedre»**: Høyere følsomhet, men diskriminerende (favoriserer høy mobilitet) og dårligere reproduserbarhet. Hydrodynamisk er representativ [Kapillærelektroforese del 2 m notater.pdf, slide 7, 10].
- **Elektrokinetisk vs. elektroforetisk injeksjon**: Uten EOF heter det *elektroforetisk* injeksjon [chromatographgy_basics_part2.pdf, p. 139; Løsningsforslag IMAK2008 H25.pdf, oppg. 12ii].
- **Hydrodynamisk er ikke bare trykk**: Vakuum og høydeforskjell (gravitasjon, hevert) teller også [slide 6–7].
- **CE er ikke automatisk mer følsom enn HPLC**: UV-veilengden = ID, og injeksjonsvolumet er nL, så HPLC er i utgangspunktet mer følsom. LIF og MS kan snu dette [chromatographgy_basics_part2.pdf, p. 141; Løsningsforslag IMAK2008 H25.pdf, oppg. 11].
- **Polyimidbelegget må fjernes** i deteksjonsvinduet for UV [slide 14; chromatographgy_basics_part2.pdf, p. 140].
- **CE-MS og CE-EC krever separasjon av de to elektriske kretsene** i grensesnittet [chromatographgy_basics_part2.pdf, p. 140].
- **Gel-CE (CGE) og CEC bruker bare elektrokinetisk injeksjon** [Kapillærelektroforese del 2 m notater.pdf, slide 24, 34]. Se side 26.
- **Større ID gir lavere cLOD (mer lys), men bredere bånd og mer Joule-varme**. 50–75 µm er kompromisset [chromatographgy_basics_part2.pdf, p. 136].

## Past exam tasks
- **H2025 oppg. 12** (6 p): to vanligste injeksjonsmetoder, prinsipper, og sammenligning av selektivitet og sensitivitet. Fullt LF.
- **H2025 oppg. 11** (4 p): sensitivitet CE vs. HPLC (se side 24).
- **H2025 oppg. 9**: «Høy oppløsning og svært små prøvevolum (nL)» → CE.
- Ikke spurt på H2024.

## Test yourself
**Q:** Nevn tre måter å oppnå hydrodynamisk injeksjon på.
**A:** Overtrykk på prøvevial, vakuum på utløpet, eller høydeforskjell mellom inlet og outlet (gravitasjon/hevert) [Kapillærelektroforese del 2 m notater.pdf, slide 6–7; chromatographgy_basics_part2.pdf, p. 138].

**Q:** Du skal kvantifisere en blanding av ioner med svært ulik mobilitet og trenger riktig forhold mellom dem. Hvilken injeksjon velger du?
**A:** Hydrodynamisk. Alle komponenter injiseres proporsjonalt med konsentrasjonen, mens elektrokinetisk overrepresenterer ionene med høy mobilitet [slide 7, 10].

**Q:** Hvorfor øker en bubble cell følsomheten i CE-UV?
**A:** Den øker den optiske veilengden i deteksjonsområdet. Ellers er veilengden lik kapillærets ID, og absorbansen er proporsjonal med veilengden [chromatographgy_basics_part2.pdf, p. 140].

**Q:** Hvilken ioniseringsteknikk brukes vanligvis i CE-MS, og hvilket praktisk problem må grensesnittet løse?
**A:** ESI. CE-høyspenningen og ESI-høyspenningen er to separate kretser som må separeres i grensesnittet (sheath flow eller sheathless) [Kapillærelektroforese del 2 m notater.pdf, slide 16; chromatographgy_basics_part2.pdf, p. 140].

**Q:** Hvordan detekteres uorganiske ioner uten UV-absorpsjon i CE?
**A:** Med indirekte UV-Vis-deteksjon [chromatographgy_basics_part2.pdf, p. 140].

## Sources
- [Kapillærelektroforese del 2 m notater.pdf, slide 3–19]
- [chromatographgy_basics_part2.pdf, p. 136–141] (p. = boksidetall; PDF-side = bokside − 84)
- [IMAK2008 eksamen H2025.pdf, oppg. 9, 11, 12] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 11, 12]
