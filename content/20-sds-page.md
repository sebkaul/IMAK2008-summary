---
slug: 20-sds-page
title: "SDS-PAGE"
topic: elektroforese
exam_weight: medium
exam_weight_note: "H24 2(b) (4 p, fire flervalg om SDS og stacking-gel). H25 oppg. 9 delvis («denaturering og utfolding» → SDS-PAGE). Øving oppg. 1"
builds_on: [19-elektroforese-teori-og-geler]
used_in: [21-ief-og-2d, 22-geldeteksjon-og-western-blot]
sources: ["Proteinkarakterisering del 1 m notater.pdf", "chromatographgy_basics_part2.pdf", "Øving elektroforese med LF.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf", "Prosjektoppgave IMAK2008 H26.pdf"]
---

## Pretest
**Q:** Hvorfor separeres proteiner etter størrelse, og ikke etter ladning, i SDS-PAGE?
**A:** SDS maskerer proteinets egen ladning og gir alle proteinene omtrent lik ladning per masse, så bare silingseffekten i gelen skiller dem [Proteinkarakterisering del 1 m notater.pdf, slide 39; chromatographgy_basics_part2.pdf, p. 134].

**Q:** I hvilken retning vandrer proteinene i SDS-PAGE?
**A:** Mot anoden (+) i bunnen av gelen, fordi SDS-proteinkompleksene er negativt ladet [Proteinkarakterisering del 1 m notater.pdf, slide 40].

**Q:** Hva er oppgaven til stacking-gelen?
**A:** Å samle proteinene i smale bånd før de går inn i separasjonsgelen [LF eksamen H2024 IMAK2008.pdf, p. 11].

## Mental model
Et protein har både egen ladning og egen form, som begge påvirker hvor fort det vandrer. SDS-PAGE fjerner begge deler [Proteinkarakterisering del 1 m notater.pdf, slide 39; chromatographgy_basics_part2.pdf, p. 134]:
- Merkaptoetanol bryter disulfidbindingene.
- SDS (et negativt ladet detergent) denaturerer proteinet til en stiv polypeptidstav og binder seg i et fast forhold (1,4 g SDS per g protein).

Alle proteinene får da samme ladning per masse og samme form. Når de dras mot anoden gjennom polyakrylamidgelen, er det bare størrelsen som teller: små proteiner slipper lettere gjennom porene og kommer lengst [Proteinkarakterisering del 1 m notater.pdf, slide 40]. For å få skarpe bånd brukes et diskontinuerlig system. En stacking-gel med store porer og lav pH lager en ionegradient som presser proteinene sammen til en tynn sone, før de separeres i resolving-gelen med små porer og høyere pH [Proteinkarakterisering del 1 m notater.pdf, slide 36; LF eksamen H2024 IMAK2008.pdf, p. 11]. Molekylvekten finnes fra en standardkurve av log Mw mot relativ vandringslengde [Proteinkarakterisering del 1 m notater.pdf, slide 41–42].

## Concepts and definitions
- **SDS-PAGE**: Natriumdodecylsulfat–polyakrylamid-gelelektroforese. Mye brukt for proteinseparasjon [chromatographgy_basics_part2.pdf, p. 134].
- **SDS sin oppgave** [Proteinkarakterisering del 1 m notater.pdf, slide 39]:
  - Proteinene blir fullstendig denaturert, folder seg ut til stive polypeptidstaver og deles opp i separate subenheter.
  - Gir proteinet en negativ ladning, dvs. maskerer den opprinnelige ladningen.
  - Gir lik «ladning til masse»-fordeling for alle proteinene: SDS bindes med 1,4 g per g protein, ca. 1 molekyl SDS per 2 aminosyrer.
  - Proteinene separeres derfor etter størrelse i stedet for ladning.
- **Merkaptoetanol og SDS (bok)**: Proteinene denatureres først av 2-merkaptoetanol, som bryter disulfidbindingene. SDS binder til polypeptidkjeden ved hydrofobe interaksjoner. Komplekser med tilnærmet lik ladning/størrelse vandrer med en hastighet som bare avhenger av størrelse, pga. silingseffekten [chromatographgy_basics_part2.pdf, p. 134].
- **Viktigste egenskap til SDS (H24 2(b))**: Det gir proteinene en negativ ladning proporsjonal med størrelsen [LF eksamen H2024 IMAK2008.pdf, p. 11].
- **Oppsett** [Proteinkarakterisering del 1 m notater.pdf, slide 40]:
  - Vertikalt system. Proteinene avsettes på toppen av en polyakrylamidgel med katode (−) øverst og anode (+) nederst.
  - De negativt ladde proteinene vandrer mot anoden med en hastighet som er den inverse av størrelsen, dvs. de minste går fortest.
  - Etterpå farges gelen, f.eks. med Coomassie brilliant blue eller sølvnitrat (se side 22).
- **Diskontinuerlig buffersystem** [Proteinkarakterisering del 1 m notater.pdf, slide 36, 38]:
  - **Stacking-gel**: store porer (f.eks. 4 %T), pH 6,8. Konsentrerer prøven.
  - **Resolving-gel (separasjonsgel)**: små porer (f.eks. 7,5–15 %T), pH 8,8. Separerer proteinene.
  - Cl⁻ er ledende ioner og glysinat (Gly⁻) etterfølgende ioner. De danner en «sandwich» med proteinene imellom. I stacking-gelen samles proteinene i et tynt bånd mellom Cl⁻ og Gly⁻, og i resolving-gelen separeres de.
  - Alternativ: gradientgel, f.eks. 4–15 %, med stacking-gel (4 %) over en resolving-gel (15 %).
- **Stacking-gelens rolle (H24 2(b))**: Samle proteinene i smale bånd før de går inn i separasjonsgelen [LF eksamen H2024 IMAK2008.pdf, p. 11].
- **pH-forskjellen mellom stacking- og separasjonsgel (H24 2(b))**: Skaper en ionisk gradient som konsentrerer proteinene før separasjon [LF eksamen H2024 IMAK2008.pdf, p. 11].
- **Separasjonsgelen (H24 2(b))**: Har høyere akrylamidkonsentrasjon enn stacking-gelen [LF eksamen H2024 IMAK2008.pdf, p. 11].
- **Hvorfor ulik porestørrelse?** Store porer i stacking-gelen gjør at proteinene ikke separeres der, men konsentreres. Små porer i resolving-gelen gir separasjon etter størrelse [Proteinkarakterisering del 1 m notater.pdf, slide 36]. Boka: en diskontinuitet i gel eller pH konsentrerer startbåndet og gir bedre effektivitet og oppløsning [chromatographgy_basics_part2.pdf, p. 131].
- **Vandringshastigheten avhenger av**: (1) størrelsen til molekylene, (2) spenningen over gelen, (3) porestørrelse og konsentrasjon av gelmateriale [Proteinkarakterisering del 1 m notater.pdf, slide 38].
- **Molvekt og kvantitet** [Proteinkarakterisering del 1 m notater.pdf, slide 41]:
  - Resultater fra PAGE kan brukes til å bestemme både størrelse (molvekt) og kvantitet.
  - Nøyaktigheten for molvekt er 5–10 %.
  - For nøyaktig molvekt bør betingelsene gi et lineært forhold mellom log Mw og migrering innenfor det forventede Mw-området.
- **Relativ vandringslengde ($R_f$)**: Avstand fra brønn til bånd delt på avstand til fargefronten [Proteinkarakterisering del 1 m notater.pdf, slide 41]. Standardkurven er $\log M_w = m R_f + b$ [Proteinkarakterisering del 1 m notater.pdf, slide 42].
- **Hva SDS-PAGE gir og ikke gir**: Info om molvekt (omtrentlig) og renhet, og kan også gi info om antall subenheter. Kan ikke si noe om identiteten til proteinet, bare tilstedeværelse. MS gir langt mer presis molvekt [Øving elektroforese med LF.pdf, p. 1].
- **Troubleshooting** [Proteinkarakterisering del 1 m notater.pdf, slide 44]:
  - Overlastet prøve: sett mindre proteinmengde (konsentrasjon) i brønnene.
  - For rask migrering: senk spenningen. For varm: senk temperaturen (kaldere rom).
  - Prøvedegradering: bruk ferskt lysat, hold prøvene på is til buffer tilsettes og de skal kokes, og bruk alltid protease- og fosfataseinhibitorer i loading buffer.
- **Arbeidsflyt**: metodevalg → prøveopparbeiding → gel- og bufferforberedelse → kjøre elektroforese → deteksjon og analyse [Proteinkarakterisering del 1 m notater.pdf, slide 43].
- **I prosjektet**: Proteinet (4–150 kDa) skal identifiseres bl.a. med elektroforese. SDS-PAGE etter SEC gir molvekt [Prosjektoppgave IMAK2008 H26.pdf, p. 1].

## Visuals
- **Diskontinuerlig SDS-PAGE: stacking → resolving** · prosessdiagram, seks paneler A–F [Proteinkarakterisering del 1 m notater.pdf, slide 36]
  - Hver kolonne er en gelbrønn. Øverst stacking-gel (4 %T, pH 6,8, «store porer»), nederst resolving-gel (7,5–15 %T, pH 8,8, «små porer»). Katode (−) øverst, anode (+) nederst.
  - A: prøve i brønn. B: Cl⁻ foran og Gly⁻ bak, med proteinene presset sammen imellom (grønn sirkel «konsentrering av prøve»). C–D: tynt bånd ved overgangen. E–F: båndene separerer i resolving-gelen («separasjon av prøve»).
- **SDS-behandling av et protein** · prosessdiagram [Proteinkarakterisering del 1 m notater.pdf, slide 39; chromatographgy_basics_part2.pdf, p. 134]
  - Foldet protein med S–S-bro og blandet +/− ladning → (merkaptoetanol: S–S brytes) → (SDS: mange negative SO₄⁻-haler langs kjeden) → stiv, utfoldet stav med jevn negativ ladning.
  - Etikett: «1,4 g SDS / g protein → lik ladning per masse».
- **Mw-bestemmelse fra gel og standardkurve** · plot, to paneler [Proteinkarakterisering del 1 m notater.pdf, slide 42]
  - Venstre: gel med standardstige (250, 150, 100, 75, 50, 37, 25, 20, 15, 10 kD), toppen av resolving-gelen, fargefronten (67 mm) og ukjent bånd (45 mm).
  - Høyre: log Mw (0–3) mot $R_f$ (0–1), lineær linje $y = -1{,}9944x + 2{,}7824$ ($r^2$ = 0,997), standarder (blå) og ukjent (rød).
- **Gradientgel vs. stacking + resolving** · tverrsnitt [Proteinkarakterisering del 1 m notater.pdf, slide 38]
  - A: gradientgel 4 % (topp) → 15 % (bunn). B: stacking-gel (4 %, pH 6,8) over resolving-gel (15 %, pH 8,8).
- **Interactive plot: molvekt fra $R_f$**
  - Standardkurve fra forelesningen: $\log M_w = -1{,}9944 R_f + 2{,}7824$ [Proteinkarakterisering del 1 m notater.pdf, slide 42].
  - Slider: båndavstand 0–67 mm (fargefront 67 mm). Vis $R_f$ og Mw (kD).
  - Skyggelegg $R_f$ < 0,2 og > 0,9 som utenfor standardene (ekstrapolering).

## Equations
### Relativ vandringslengde
$$R_f = \frac{\text{avstand til bånd (vandringslengde)}}{\text{avstand til fargefront (vandringslengde)}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $R_f$ | relativ vandringslengde | dimensjonsløs (0–1) |
Begge avstander måles fra brønnen (toppen av resolving-gelen) [Proteinkarakterisering del 1 m notater.pdf, slide 41–42].

### Standardkurve for molvekt
$$\log M_w = m\,R_f + b$$
| Symbol | Meaning | Unit |
|---|---|---|
| $M_w$ | molvekt | kD |
| $m$, $b$ | stigningstall og konstantledd fra standardene | – |
Gjelder i det lineære området, med nøyaktighet 5–10 % [Proteinkarakterisering del 1 m notater.pdf, slide 41–42].

### Gelens porestørrelse
$$\%T = \frac{a+b}{m}\times 100\,\% \qquad \%C = \frac{b}{a+b}\times 100\,\%$$
Se side 19 [Proteinkarakterisering del 1 m notater.pdf, slide 34].

## Worked example
**Molvekt til et ukjent protein (forelesningseksempel)** [Proteinkarakterisering del 1 m notater.pdf, slide 42]

Ukjent bånd 45 mm fra toppen av resolving-gelen, fargefront 67 mm. Standardkurve: $\log M_w = -1{,}9944 R_f + 2{,}7824$ ($r^2$ = 0,997).
1. $R_f = 45/67 = 0{,}672$
2. $\log M_w = -1{,}9944 \times 0{,}672 + 2{,}7824 = -1{,}340 + 2{,}782 = 1{,}443$
3. $M_w = 10^{1{,}443} \approx 27{,}7$ kD
4. **Sjekk mot gelen:** båndet ligger mellom 25 og 37 kD-markørene, nærmest 25, som stemmer.
5. **Usikkerhet:** ca. 5–10 % [slide 41], altså ca. 25–30 kD.

## Faded example
**H24 oppg. 2(b): fire flervalg om SDS-PAGE** (4 p) [Eksamen_IMAK2008_24.pdf, oppg. 2(b); LF eksamen H2024 IMAK2008.pdf, p. 11]

*i) Viktigste egenskap til SDS?* (bryter disulfidbindinger / katalyserer polymerisering / polymer for gelmatriksen / gir negativ ladning proporsjonal med størrelsen)
1. Disulfidbindingene brytes av merkaptoetanol, ikke SDS [chromatographgy_basics_part2.pdf, p. 134]. Polymeriseringen katalyseres av TEMED [Proteinkarakterisering del 1 m notater.pdf, slide 34]. Gelmatriksen er polyakrylamid.
2. **Svar:** gir proteiner en negativ ladning proporsjonal med størrelsen.

*ii) Stacking-gelens rolle?*
3. **(try)** → Å samle proteiner i smale bånd før de går inn i separasjonsgelen.

*iii) Hvorfor er pH-forskjellen mellom stacking- og separasjonsgel viktig?*
4. **(try)** → For å skape en ionisk gradient som konsentrerer proteinene før separasjon (Cl⁻ og glysinat «sandwich»).

*iv) Korrekt om separasjonsgelen?* (bare samle / lavere pH / separerer etter pI / høyere akrylamidkonsentrasjon)
5. **(try)** → Den har høyere akrylamidkonsentrasjon (mindre porer) enn stacking-gelen. Den har *høyere* pH (8,8 vs. 6,8), og separasjon etter pI er IEF.

## Exam traps
- **SDS bryter disulfidbroer**: Nei, det gjør merkaptoetanol. SDS denaturerer og gir negativ ladning [chromatographgy_basics_part2.pdf, p. 134; LF eksamen H2024 IMAK2008.pdf, p. 11].
- **Stacking-gelen separerer**: Nei. Den har store porer og konsentrerer prøven. Separasjonen skjer i resolving-gelen [Proteinkarakterisering del 1 m notater.pdf, slide 36].
- **pH feil vei**: Stacking-gelen har *lavere* pH (6,8) enn resolving-gelen (8,8) [Proteinkarakterisering del 1 m notater.pdf, slide 36].
- **Store proteiner kommer lengst**: Motsatt. De minste går fortest [Proteinkarakterisering del 1 m notater.pdf, slide 40].
- **SDS-PAGE gir identitet**: Den gir omtrentlig molvekt og renhet, ikke identitet [Øving elektroforese med LF.pdf, p. 1].
- **$R_f$ fra feil startpunkt**: Mål fra toppen av resolving-gelen (brønnen), og del på fargefronten [Proteinkarakterisering del 1 m notater.pdf, slide 41–42].
- **Ekstrapolering av standardkurven**: Krever et lineært forhold innenfor det forventede Mw-området [Proteinkarakterisering del 1 m notater.pdf, slide 41].

## Past exam tasks
- **H2024 oppg. 2(b)** (4 p): fire flervalg. Viktigste egenskap til SDS, stacking-gelens rolle, hvorfor pH-forskjellen er viktig, og korrekt utsagn om separasjonsgelen.
- **H2025 oppg. 9** (5 p totalt, automatisk rettet, ingen fasit i LF): utsagnet «Involverer denaturering og utfolding av proteinene» → SDS-PAGE (utledet fra slide 39).

## Test yourself
**Q:** Et bånd ligger 30 mm fra toppen, og fargefronten er 67 mm. Bruk forelesningens standardkurve til å finne Mw.
**A:** $R_f$ = 0,448. log Mw = −1,9944·0,448 + 2,7824 = 1,889, så Mw ≈ 77 kD [Proteinkarakterisering del 1 m notater.pdf, slide 42].

**Q:** Hvorfor er SDS-proteinkompleksene stive staver, og hvorfor er det viktig?
**A:** SDS denaturerer og folder ut proteinet. Da er formen lik for alle, og vandringen avhenger bare av størrelse [Proteinkarakterisering del 1 m notater.pdf, slide 39].

**Q:** Hvilke tre faktorer bestemmer vandringshastigheten i PAGE?
**A:** Molekylstørrelsen, spenningen over gelen, og porestørrelse og gelkonsentrasjon [Proteinkarakterisering del 1 m notater.pdf, slide 38].

**Q:** Hvordan unngår du prøvedegradering?
**A:** Ferskt lysat, prøvene på is til de kokes, og protease- og fosfataseinhibitorer i loading buffer [Proteinkarakterisering del 1 m notater.pdf, slide 44].

**Q:** Hvorfor foretrekkes MS fremfor SDS-PAGE for molvekt, og hvorfor brukes SDS-PAGE likevel?
**A:** MS er langt mer presis (SDS-PAGE har 5–10 % usikkerhet). SDS-PAGE er enkel og billig, og gir info om renhet og subenheter [Øving elektroforese med LF.pdf, p. 1; Proteinkarakterisering del 1 m notater.pdf, slide 41].

## Sources
- [Proteinkarakterisering del 1 m notater.pdf, slide 34, 36, 38–44]
- [chromatographgy_basics_part2.pdf, p. 131, 134] (p. = boksidetall; PDF-side = bokside − 84)
- [Øving elektroforese med LF.pdf, p. 1]
- [Eksamen_IMAK2008_24.pdf, oppg. 2(b)] / [LF eksamen H2024 IMAK2008.pdf, p. 11]
- [IMAK2008 eksamen H2025.pdf, oppg. 9]
- [Prosjektoppgave IMAK2008 H26.pdf, p. 1]
