---
slug: 08-omvendt-fase-og-ionepar
title: "Omvendt fase og ionepar"
topic: lc-separasjon
exam_weight: high
exam_weight_note: "H25 oppg. 6 (8 p, benzosyre/toluen på C18) + oppg. 2 flervalg (RP, C18). H24 1(h) (6 p, NP vs. RP, delt med side 07) + 1(i)ii (gjett SF)"
builds_on: [01-retensjon-og-selektivitet, 07-adsorpsjon-normalfase]
used_in: [09-ionebytterkromatografi, 17-kvalitativ-og-kvantifiseringsmetoder, 26-ce-metoder-og-cec]
sources: ["Forelesning ads.krom m notater 3.pdf", "chromatographgy_basics_part1.pdf", "Pensum.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "koffein _ISTD_student_rev2.pdf"]
---

## Pretest
**Q:** På en C18-kolonne med vann/acetonitril: eluerer den mest polare eller den minst polare analytten først?
**A:** Den mest polare (minst retardert) [Forelesning ads.krom m notater 3.pdf, slide 9; chromatographgy_basics_part1.pdf, p. 68].

**Q:** Du vil ha kortere retensjonstid i RP. Øker eller senker du andelen acetonitril?
**A:** Øker. Organisk løsemiddel er den sterke eluenten i RP [Løsningsforslag IMAK2008 H25.pdf, oppg. 6c; chromatographgy_basics_part1.pdf, p. 69].

**Q:** Hva gjør en svak syre (pKa ≈ 4) med retensjonen på C18 hvis pH senkes fra 7 til 2,5?
**A:** Retensjonen øker markant, fordi syren blir protonert (uladet, mer hydrofob) [Løsningsforslag IMAK2008 H25.pdf, oppg. 6b].

## Mental model
RP har motsatt elueringsrekkefølge og motsatt polaritet på SF og MF sammenlignet med NP: upolar SF (derivatisert silika, f.eks. C18) og polar MF (vann, polare organiske løsemidler) [Forelesning ads.krom m notater 3.pdf, slide 7]. Mekanismen er ikke klart definert. Det er mer naturlig å se det som fordelingskromatografi, der analytten «løses» i det upolare C18-laget, enn som adsorpsjon [Forelesning ads.krom m notater 3.pdf, slide 7, 9]. Jo mer hydrofob (upolar) analytten er, jo mer trives den i SF og jo senere eluerer den. Jo mer organisk løsemiddel MF inneholder, jo mer «lik» analytten blir MF, og jo raskere eluerer alt [chromatographgy_basics_part1.pdf, p. 68–69; Løsningsforslag IMAK2008 H25.pdf, oppg. 6c]. Ioniserbare analytter styres i tillegg av pH: ladet form er polar og eluerer tidlig, uladet form er hydrofob og holdes igjen [Løsningsforslag IMAK2008 H25.pdf, oppg. 6a–b]. Er analytten ionisk og holdes for dårlig igjen, tilsettes et hydrofobt mot-ion som danner et ionepar som C18 kan holde på [Forelesning ads.krom m notater 3.pdf, slide 13; chromatographgy_basics_part1.pdf, p. 72].

## Concepts and definitions
- **Omvendt fase (RP)**: Motsatt elueringsrekkefølge av NP-LC og motsatt polaritet på SF og MF. SF er upolar (derivatisert silika), MF er polar (vann, polare organiske løsemidler) [Forelesning ads.krom m notater 3.pdf, slide 7]. Navnet kommer av at rekkefølgen er omtrent omvendt av adsorpsjonskromatografi på polare materialer [chromatographgy_basics_part1.pdf, p. 68].
- **RP-HPLC**: Det mest brukte separasjonsprinsippet i HPLC [chromatographgy_basics_part1.pdf, p. 69; Forelesning ads.krom m notater 3.pdf, slide 3]. I H25-flervalget: stasjonær fase upolar, mobil fase mer polar [Løsningsforslag IMAK2008 H25.pdf, oppg. 2].
- **Retensjonsmekanisme i RP**: Ikke klart definert. Forelesningen foreslår å se det som fordelingskromatografi (analytten løses i SF) heller enn adsorpsjon, og retensjonen kan ikke beregnes på samme måte som i NP. Mest polar = minst retardert [Forelesning ads.krom m notater 3.pdf, slide 7, 9]. Boka: silikabaserte RP-faser har et solvatiseringslag av organisk løsemiddel og vann på overflaten, inkludert rest-silanoler [chromatographgy_basics_part1.pdf, p. 69].
- **C18 / ODS**: Den vanligste RP-fasen er derivatisert silika med oktadekylgrupper (C18), også kalt «C18-silika» [Forelesning ads.krom m notater 3.pdf, slide 8]. En C18-kolonne er omvendt fase med oktadekylgrupper [Løsningsforslag IMAK2008 H25.pdf, oppg. 2].
  - Kjeder fra C1 til C30 finnes, men C18 (oktadekylsilan, ODS) dominerer. Hydrofobiteten øker med kjedelengden. C30 brukes mest for konfigurasjonsisomerer [chromatographgy_basics_part1.pdf, p. 71].
- **Monomer vs. polymer fase**: Monomer lages med monoklorsilan, polymer med triklorsilan. Polymere faser beskytter silikaoverflaten bedre og tåler høy og lav pH bedre, men skal likevel aldri lagres ved basisk pH [chromatographgy_basics_part1.pdf, p. 71, Fig. 3.17].
- **Rest-silanoler**: Silaniseringen blir aldri fullstendig, så alle materialer har rest-silanoler som kan gi sekundære interaksjoner. Ulike C18-materialer kan derfor oppføre seg svært forskjellig, særlig mot aminer [chromatographgy_basics_part1.pdf, p. 71, Info-box 3.10].
- **End-capping**: Små grupper (f.eks. trimetylsilyl) derivatiseres i tillegg til C18, slik at ingen frie Si-OH-grupper blir igjen [Forelesning ads.krom m notater 3.pdf, slide 8–9].
- **Fasekollaps**: Med for mye vann i MF kan man få «fasekollaps»: kjedene legger seg tett inntil Si-partikkelen, og man mister kapasitet [Forelesning ads.krom m notater 3.pdf, slide 8]. Boka: starter man en silikabasert C18 med 0 % organisk løsemiddel, risikerer C18-kjedene å bli flatet ut, med lavere kapasitet og retensjon. Gradienter starter derfor typisk på 5 % acetonitril eller metanol [chromatographgy_basics_part1.pdf, p. 68].
- **Andre RP-faser** [Forelesning ads.krom m notater 3.pdf, slide 9; chromatographgy_basics_part1.pdf, p. 71]:
  - Cyano (cyanopropyl), også brukt som NP-SF sammen med upolar MF.
  - Fenyl, heksyl-fenyl, PFP (pentafluorfenyl) og bifenyl.
  - Fenylfaser er litt mindre hydrofobe enn C18 og kan gi bedre oppløsning av aromater. Fluorerte faser gir bedre oppløsning av baser.
  - Silikabaserte RP-faser er svært stive og stabile til over 1000 bar.
- **Mobilfase i RP**: Vanligvis acetonitril–vann eller metanol–vann, oftest med buffer eller syre for pH-kontroll [chromatographgy_basics_part1.pdf, p. 68]. Eluering kan være isokratisk eller gradient. I RP går gradienten fra høy til lav polaritet (økende andel organisk) [Forelesning ads.krom m notater 3.pdf, slide 11].
- **Eluentstyrke i RP**: Vann er den svakeste eluenten. Upolare løsemidler er de sterkeste [chromatographgy_basics_part1.pdf, p. 69].
- **Effekt av pH på ioniserbare analytter** (H25 oppg. 6) [Løsningsforslag IMAK2008 H25.pdf, oppg. 6]:
  - Benzosyre (pKa ≈ 4,2) er ved pH 7 hovedsakelig deprotonert, altså ladet og mer polar, og får lavere affinitet til C18.
  - Ved pH 2,5 er den hovedsakelig protonert, altså uladet og mer hydrofob, og retensjonen øker markant.
- **Syre i MF for å kontrollere ladning**: I cannabiseksempelet tilsettes TFA til vannfasen for å holde pH lav, slik at de sure cannabinoidene (CBGA, THC-A) er protonert og uladet [Forelesning ads.krom m notater 3.pdf, slide 10]. Koffeinlaben bruker 0,1 % maursyre i 85 % vann / 15 % acetonitril på en EC-18-kolonne [koffein _ISTD_student_rev2.pdf, p. 1].
- **Ionepar-kromatografi**: Når analytten er ionisk, tilsettes et mot-ion (f.eks. oktansulfonsyre) som bindes til analytten og gir retensjon på vanlige RP-kolonner. Mot-ionet tilsettes i prøven eller i MF. Retensjonen avhenger av hvilket mot-ion som brukes, konsentrasjonen og sammensetningen av MF [Forelesning ads.krom m notater 3.pdf, slide 13].
  - Boka: lav konsentrasjon (ca. 5 mM) hydrofobt mot-ion i MF. Ioneparet er mer hydrofobt enn ionet alene [chromatographgy_basics_part1.pdf, p. 72].
  - Karboksylsyrer bruker positive mot-ioner (tetrabutylammonium). Aminer bruker oktylsulfonat eller SDS [chromatographgy_basics_part1.pdf, p. 72].
  - Mer mot-ion og større hydrofob gruppe gir mer retensjon, mer organisk løsemiddel gir mindre. 0,1–0,2 M buffer gir stabilitet [chromatographgy_basics_part1.pdf, p. 72–73].
  - **Begrensninger**: Kan ikke brukes med gradienteluering og ikke med MS-deteksjon [chromatographgy_basics_part1.pdf, p. 73, Info-box 3.11].
- **Ikke pensum**: Solvatiseringsparametermodellen, hybrid- og hydrosilerte materialer og organiske polymerfaser [Pensum.pdf; chromatographgy_basics_part1.pdf, p. 70, 72].

## Visuals
- **NP vs. RP side om side** · tabell-som-bilde + to kromatogrammer [Forelesning ads.krom m notater 3.pdf, slide 7–8]
  - Tabell med kolonnene NP | RP og radene SF (polar: silika, alumina | upolar: C18-silika), MF (upolar organisk | vann + polart organisk), først ut (minst polar | mest polar), sterk eluent (mer polar | mer organisk/upolar) og gradient (lav → høy polaritet | høy → lav polaritet).
  - Under: fire fargede topper i NP-rekkefølge og samme fire i omvendt rekkefølge i RP.
- **C18-overflate med end-capping og fasekollaps** · tverrsnitt [Forelesning ads.krom m notater 3.pdf, slide 8–9; chromatographgy_basics_part1.pdf, p. 69, Fig. 3.17]
  - Venstre: silikaoverflate (Si–O–Si) med C18-kjeder (Si(CH₃)₂–C18) som stikker ut, én fri Si–OH (gul) og én end-capped (–O–Si(CH₃)₃).
  - Høyre: «fasekollaps», der C18-kjedene ligger flatt på overflaten i nesten rent vann, merket «kapasitet tapt».
- **Effekt av pH på benzosyre vs. toluen (C18)** · prosessdiagram [IMAK2008 eksamen H2025.pdf, oppg. 6; Løsningsforslag IMAK2008 H25.pdf, oppg. 6]
  - To paneler, pH 7,0 og pH 2,5, hver med en C18-overflate.
  - pH 7: benzoat (–COO⁻) i MF, toluen i C18-laget. Kromatogram: benzosyre først, toluen sist.
  - pH 2,5: benzosyre (–COOH) i C18-laget sammen med toluen. Kromatogram: benzosyretoppen flyttet kraftig mot høyre.
  - Pil ned: «mer acetonitril → begge eluerer tidligere».
- **Ionepar-mekanisme** · tverrsnitt [Forelesning ads.krom m notater 3.pdf, slide 13]
  - Silika med bundne C18-grupper. Anionisk mot-ion C₈H₁₇SO₃⁻ (oktansulfonat) med hydrofob hale inn i C18-laget og ladet hode ut. Na⁺ og Cl⁻ i løsning.
  - Kationisk analytt BH⁺ som parer seg med mot-ionet. Rød pil merket «RP-retarderte ion-par».
- **Interactive plot: retensjon vs. andel organisk**
  - Ligning: $\log k = \log k_w - S\varphi$, med $\varphi$ 0,05–0,9 [chromatographgy_basics_part1.pdf, p. 69, lign. 3.5].
  - To linjer: «toluen» (høy $\log k_w$) og «benzosyre» (to varianter: lav $\log k_w$ ved pH 7, høyere ved pH 2,5), med toggle for pH.
  - Merknad: kursmaterialet gir ingen tallverdier for $k_w$ eller $S$, så verdiene er illustrative. Poenget er bare at begge linjene synker med økende $\varphi$, og at pH flytter benzosyrelinjen.

## Equations
### Retensjon i RP (smalt sammensetningsområde)
$$\log k = \log k_w - S\,\varphi$$
| Symbol | Meaning | Unit |
|---|---|---|
| $k$ | retensjonsfaktor | dimensjonsløs |
| $k_w$ | retensjonsfaktor med rent vann som MF | dimensjonsløs |
| $\varphi$ | volumfraksjon av organisk løsemiddel | 0–1 |
| $S$ | mål på elueringsstyrken til det organiske løsemiddelet | dimensjonsløs |
Gjelder grovt innenfor et smalt område av MF-sammensetning. Vann er svakeste eluent, og upolare løsemidler er sterkest [chromatographgy_basics_part1.pdf, p. 69, lign. 3.5].

### Ionepar-dannelse
$$Q^+_{aq} + X^-_{aq} \rightleftharpoons QX_{org}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $Q^+_{aq}$ | polart (ladet) analyttion i vannfasen | – |
| $X^-_{aq}$ | hydrofobt mot-ion | – |
| $QX_{org}$ | ionepar, mer hydrofobt enn $Q^+$, retardert på RP | – |
[chromatographgy_basics_part1.pdf, p. 72; Forelesning ads.krom m notater 3.pdf, slide 13]

## Worked example
**H25 oppg. 6: benzosyre og toluen på C18** (8 p) [IMAK2008 eksamen H2025.pdf, oppg. 6; Løsningsforslag IMAK2008 H25.pdf, oppg. 6]

Analytt A er benzosyre (pKa ≈ 4,2), analytt B er toluen (ikke-ioniserbar, upolar). MF er vann/acetonitril 60/40 (v/v), og pH justeres.

*a) Hvilken har størst retensjon ved pH 7,0?*
1. Bestem ladning: pH 7,0 ligger godt over pKa 4,2, så benzosyre er hovedsakelig deprotonert (benzoat, ladet).
2. Ladet = mer polar = lavere affinitet til upolar C18.
3. Toluen er upolar og uladet og binder sterkere til C18.
4. **Svar:** Toluen har størst retensjon.

*b) Hvordan endres retensjonen til benzosyre ved pH 2,5?*
5. pH 2,5 ligger under pKa, så benzosyre er hovedsakelig protonert (–COOH, uladet).
6. Uladet = mer hydrofob = mer lik toluen i polaritet.
7. **Svar:** Retensjonen øker markant (senere eluering).

*c) Redusere retensjonstiden til toluen uten å endre pH?*
8. Parameteren er andelen organisk løsemiddel i MF.
9. Mer acetonitril gjør MF mer «lik» analyttene (mer hydrofob), så begge får svakere retensjon og kortere retensjonstid, særlig toluen.

## Faded example
**H24 oppg. 1(h): forskjellene på NP og RP HPLC** (6 p) [Eksamen_IMAK2008_24.pdf, oppg. 1(h); LF eksamen H2024 IMAK2008.pdf, p. 6]
1. Start med SF: valg av SF bestemmer hvilke interaksjoner som dominerer mellom analytt og kolonne.
2. **(try)** RP-HPLC: hvilken SF, med eksempler? → Ikke-polare SF (f.eks. C18, C8).
3. **(try)** Hvilke interaksjoner, og hvem eluerer først? → Hydrofobe interaksjoner, sterkest med ikke-polare analytter. Polare analytter elueres raskere.
4. **(try)** NP-HPLC: hvilken SF, med eksempel? → Polar SF (f.eks. silika).
5. **(try)** Hvilke interaksjoner? → Med polare analytter via hydrogenbindinger og dipol–dipol-interaksjoner.
6. **(try)** Legg til MF for full uttelling: RP har polar MF (vann + acetonitril/metanol), NP har upolar MF (heksan, pentan osv.) [Forelesning ads.krom m notater 3.pdf, slide 3, 7].

## Exam traps
- **Eluentstyrke snus mellom NP og RP**: I RP er vann svakest og organisk sterkest. I NP er polar sterkest [chromatographgy_basics_part1.pdf, p. 65, 69].
- **RP behandles som adsorpsjon**: Forelesningen understreker at mekanismen ikke er klart definert og at RP heller bør ses som fordelingskromatografi. Snyder-ligningen fra NP gjelder ikke [Forelesning ads.krom m notater 3.pdf, slide 7, 9].
- **pH og ladning feil vei**: Syrer er uladet under pKa og ladet over. Ladet form eluerer tidlig i RP [Løsningsforslag IMAK2008 H25.pdf, oppg. 6].
- **0 % organisk i RP-gradient**: Risiko for fasekollaps og tap av kapasitet. Start på ca. 5 % organisk [chromatographgy_basics_part1.pdf, p. 68; Forelesning ads.krom m notater 3.pdf, slide 8].
- **Ionepar med gradient eller MS**: Går ikke [chromatographgy_basics_part1.pdf, p. 73].
- **Aminer og rest-silanoler**: Ulike C18-kolonner kan gi svært ulik retensjon og tailing for aminer pga. rest-silanoler. End-capping reduserer dette [chromatographgy_basics_part1.pdf, p. 71; Forelesning ads.krom m notater 3.pdf, slide 8].
- **CN-kolonne bare som NP**: Cyanopropyl kan brukes i RP, og også som NP-SF sammen med upolar MF [Forelesning ads.krom m notater 3.pdf, slide 9].

## Past exam tasks
- **H2025 oppg. 2** (flervalg, 2 av 5 delspørsmål): hvilken påstand om RP stemmer (SF upolar, MF mer polar), og hva en C18-kolonne er (omvendt fase med oktadekylgrupper).
- **H2025 oppg. 6** (8 p): retensjon av benzosyre vs. toluen på C18 ved pH 7,0, effekten av pH 2,5 og hvordan toluens retensjon reduseres uten pH-endring.
- **H2024 oppg. 1(h)** (6 p, delt med side 07): forskjellene på normalfase og omvendt fase HPLC, med eksempler på faser.
- **H2024 oppg. 1(i)ii** (del av 14 p): hvilken stasjonærfase er sannsynlig ut fra strukturene til pseudoephedrine og brompheniramine (MF vann:acetonitril 75:25, pH 3,2).
  > GAP: løsningsforslaget gir ikke svar på 1(i)ii.

## Test yourself
**Q:** H24 1(i): MF er vann:acetonitril 75:25 ved pH 3,2. Hvilken type stasjonærfase tyder MF på?
**A:** Omvendt fase. Vandig MF blandet med acetonitril og pH-kontroll er typisk for RP [chromatographgy_basics_part1.pdf, p. 68]. Løsningsforslaget gir ikke fasit på denne deloppgaven.

**Q:** Hvorfor tilsettes TFA i vannfasen i cannabiseksempelet?
**A:** For å holde lav pH, slik at CBGA og THC-A er protonert og uladet [Forelesning ads.krom m notater 3.pdf, slide 10].

**Q:** Nevn tre faktorer som regulerer retensjonen i ionepar-kromatografi.
**A:** Type mot-ion, konsentrasjon av mot-ion og konsentrasjon av organisk løsemiddel. Også salt og pH [chromatographgy_basics_part1.pdf, p. 73; Forelesning ads.krom m notater 3.pdf, slide 13].

**Q:** Hva er end-capping, og hvorfor gjøres det?
**A:** Ekstra derivatisering med små grupper i tillegg til C18, slik at ingen frie silanolgrupper blir igjen. Det gir færre sekundære interaksjoner [Forelesning ads.krom m notater 3.pdf, slide 8].

**Q:** Hvilket mot-ion brukes for en analytt med aminogruppe?
**A:** Et negativt, hydrofobt mot-ion som oktylsulfonat (oktansulfonsyre) eller SDS [chromatographgy_basics_part1.pdf, p. 72; Forelesning ads.krom m notater 3.pdf, slide 13].

## Sources
- [Forelesning ads.krom m notater 3.pdf, slide 3, 7–11, 13]
- [chromatographgy_basics_part1.pdf, p. 65, 68–73] (p. = boksidetall; PDF-side = bokside + 16)
- [Pensum.pdf, p. 1]
- [IMAK2008 eksamen H2025.pdf, oppg. 2, 6] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 2, 6]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(h), 1(i)] / [LF eksamen H2024 IMAK2008.pdf, p. 6]
- [koffein _ISTD_student_rev2.pdf, p. 1]
