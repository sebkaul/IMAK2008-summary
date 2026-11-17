---
slug: 16-ms-proteiner
title: "Proteinmassespektrometri"
topic: ms
exam_weight: low
exam_weight_note: "Ikke spurt på H24 eller H25. Brukes i prosjektoppgaven (MS-delen av proteinidentifikasjonen)"
builds_on: [14-ms-ionisering, 15-ms-analysatorer-og-detektorer]
used_in: [19-elektroforese-teori-og-geler, 21-ief-og-2d]
sources: ["MSproteiner2026.pdf", "Proteinkarakterisering del 1 m notater.pdf", "Prosjektoppgave IMAK2008 H26.pdf", "chromatographgy_basics_part2.pdf"]
---

## Pretest
**Q:** Hva er forskjellen på «bottom up» og «top down» protein-MS?
**A:** Bottom up kutter proteinet i peptider før analyse. Top down analyserer hele det intakte proteinet [MSproteiner2026.pdf, slide 13].

**Q:** Hvorfor ser et ESI-spekter av et protein ut som en «kam» av mange topper?
**A:** Proteinet får mange ulike ladningstilstander (+z), og hver gir sin egen m/z-topp [MSproteiner2026.pdf, slide 21–22].

**Q:** Hvilke to ioniseringsmetoder gjorde protein-MS mulig?
**A:** MALDI og ESI [MSproteiner2026.pdf, slide 11].

## Mental model
Proteiner er store (10–200 kDa), har mange ioniserbare grupper og kan bære sukkerkjeder (glykaner). Det gir mange varianter av «samme» protein og gjør MS vanskeligere enn for små molekyler [MSproteiner2026.pdf, slide 11]. Det finnes to strategier [MSproteiner2026.pdf, slide 13–17]:
- **Bottom up**: kutt proteinet i forutsigbare peptider med trypsin, separer dem med RP-HPLC, fragmenter med MS/MS og «bygg opp» proteinet ved databasesøk.
- **Top down**: mål hele proteinet direkte med MALDI-TOF eller UHPLC-QTOF.

Med ESI tar et protein opp mange protoner og gir en serie topper med ulik ladning. Det betyr at selv en kvadrupol eller QTOF med begrenset m/z-område kan måle et stort molekyl. Kjenner man avstanden mellom to nabotopper (ladningen er ett tall forskjellig), kan både ladning og molekylvekt regnes ut [MSproteiner2026.pdf, slide 22–25; chromatographgy_basics_part2.pdf, p. 87–88]. Programvare gjør dette automatisk ved dekonvolusjon [MSproteiner2026.pdf, slide 27].

## Concepts and definitions
- **Proteomikk og proteom**: Proteomikk er studiet av alle proteiner i en celle, et vev eller en organisme. Proteomet er den totale mengden proteiner der, og det varierer med celletype og cellens tilstand, så det er komplekst [Proteinkarakterisering del 1 m notater.pdf, slide 4–5].
- **Hensikt med MS**: Bestemme vekten av ett molekyl: danne ioner, separere dem og detektere dem som m/z [MSproteiner2026.pdf, slide 3].
- **Proteiner vs. «små» molekyler** [MSproteiner2026.pdf, slide 11]:
  - Store, kompliserte molekyler med masser fra 10 til 200 kDa og flere ioniserbare grupper.
  - Kan bære sukkere (glykaner), N-bundet via asparagin eller O-bundet via serin/treonin. Det gir glykoformer.
  - Protein-MS ble først mulig med utviklingen av MALDI og ESI.
- **LC-MS av proteiner** [MSproteiner2026.pdf, slide 12]:
  - Forbehold om stabilitet og ionisering.
  - Mobilfasen må kunne fordampes, og analytten må «gå» inn i gassfasen.
  - Ionisering ved 1 atm, typisk med tilsatt H⁺-kilde eller pH-justering.
  - Muliggjør separasjon av komplekse proteinblandinger.
- **MALDI-TOF for proteiner**: Flytidsmassespektrometer (mest brukt). Flytiden korresponderer med m/z til proteinet. MS er meget sensitiv og presis, og kan detektere massen til proteiner isolert fra f.eks. SDS-PAGE helt ned i pikomol-mengder [Proteinkarakterisering del 1 m notater.pdf, slide 10–11]. Prinsippet for MALDI er på side 14, TOF på side 15.
- **Bottom up («klassisk protein-MS»)** [MSproteiner2026.pdf, slide 14–15]:
  - Proteinet kuttes opp til peptider på 1–3 kDa. Historisk populært pga. instrumentelle begrensninger (kvadrupolens masseområde < 2000).
  - Kombineres med HPLC, typisk RP, som gir enkel og forutsigbar separasjon av peptider.
  - MS/MS av peptidfragmenter muliggjør peptid- og proteinidentifikasjon. Proteinet «bygges opp» peptid for peptid.
  - Fordøyelse med trypsin er en forutsigbar og standardisert teknikk. Resultatet sammenlignes med database.
  - **Fordeler**: populær (lett å finne protokoller), mindre komplisert, relativt «plug and play», robust, «billig».
  - **Ulemper**: taper mye informasjon, ikke alle peptider «blir med», lite info om PTM (posttranslasjonelle modifikasjoner, f.eks. konjugering), «krever» deglykosylering, og mer problematisk på «ukjente» proteiner (grad av glykosylering, isoformer/glykoformer, stabilitet, fragmenter).
- **Top down** [MSproteiner2026.pdf, slide 16–17]:
  - Analyse av «intakte» proteiner, typisk med MALDI eller UHPLC-QTOF. Det er dette som gjøres på labben.
  - **Fordeler**: «komplett» bilde av proteinet, kan karakterisere PTM, info om glyko- og isoformer, ingen prøveopparbeidelse, i teorien meget fleksibel og «simplere».
  - **Utfordringer**: dyr og utfordrende instrumentering, tidkrevende, krever mer metodeutvikling, mer kompleks dataanalyse, lite protokoller, og store molekyler kan være problematiske.
- **Hvorfor kjører ikke alle top down?** Fraksjonering og separasjon på proteinnivå er krevende pga. ulike fysikalsk-kjemiske egenskaper og et stort dynamisk område [MSproteiner2026.pdf, slide 18].
- **Workflow (labben)**: Selve kjøringen er lik «vanlig» LC-MS. Proteinet løses i buffer til 1 mg/mL og fortynnes 1/10, 1/100 og 1/1000. Ion key UHPLC-system: ekstremt sensitivt, «low flow», og sikrer ionisering av store molekyler [MSproteiner2026.pdf, slide 19].
- **ESI og ladningstilstander («charge states»)**: Kjenner man molekylvekten, er det enkelt: m/z = x, så kjenner man x og m og kan finne ladningen. Eksempel med Mw = 8000: topper ved 8001 ($[M+H]^+$), 4002 (+2), 2663 (+3) og 2004 (+4) [MSproteiner2026.pdf, slide 22].
- **Ukjent molekylvekt**: Hver topp er separert med 1 ladning. To nabotopper gir to ligninger med to ukjente (ladning og Mw) [MSproteiner2026.pdf, slide 23–24].
- **Fordel med flerladning**: Muliggjør identifisering av store molekyler basert på et «lite» masseområde. «Lett» i en ideell verden. Eksempel: Rho-protein 47 004,33 Da med topper merket $[M+56H]^{56+}$ og $[M+50H]^{50+}$ [MSproteiner2026.pdf, slide 25]. Boka viser det samme for neurotensin, $[M+3H]^{3+}$ = 558,7 [chromatographgy_basics_part2.pdf, p. 88].
- **Isoformer og glykoformer = trøbbel**: Ikke nødvendigvis lette å separere på kolonne, og de gir overlappende, brede spektre [MSproteiner2026.pdf, slide 26].
- **Dekonvolusjon (deconvoluting)**: En algoritme søker etter «beste» fit (regresjonsmodell). Den «takes a multiply charged spectrum and produces a zero-charge, average molecular weight spectrum» [MSproteiner2026.pdf, slide 27]. Innstillinger: smalest mulig output-masseområde, og valg mellom «Uniform Gaussian» (adduktbidrag og heterogenitet) og «Simulated Isotope Pattern» (isotoper dominerer toppbredden) [MSproteiner2026.pdf, slide 28].
- **Prosjektoppgaven**: Proteinet skal også analyseres på MS, som gir informasjon om molvekt og styrker konklusjonen [Prosjektoppgave IMAK2008 H26.pdf, p. 1]. Kort forklaring av instrumentet (LC-separasjon – Ion key – Synapt QTOF). Dere får et spekter: regn dere fram til m/z manuelt og sammenlign med dekonvolutert spekter [MSproteiner2026.pdf, slide 30].

## Visuals
- **Bottom up vs. top down** · flytdiagram [MSproteiner2026.pdf, slide 13]
  - Bottom up: protein → enzymatisk fordøyelse → peptider → (LC/MALDI-MS) → peptide mass fingerprinting (PMF) og MS/MS → databasesøk / sekvens-tag.
  - Top down: protein → MW-måling (intakt) → MS/MS → proteinkarakterisering (PTM).
- **Fordeler/ulemper side om side** · tabell-som-bilde [MSproteiner2026.pdf, slide 14–17]
  - To kolonner (Bottom up | Top down) med radene Prøveprep, Instrument, Info om PTM/glykoformer, Robusthet/protokoller, Dataanalyse og Typisk teknikk (trypsin + RP-LC-MS/MS | MALDI eller UHPLC-QTOF).
- **ESI-spekter med ladningstilstander** · plot [MSproteiner2026.pdf, slide 21–22]
  - x-akse: m/z. y-akse: intensitet.
  - Topper ved 2004 (+4), 2663 (+3), 4002 (+2) og 8001 (+1), med en innfelt proteinstruktur og «Mw = 8000».
  - Pil fra 2663 til 2004 merket «X → X+1 (én ladning mer)».
- **Fra ladningsserie til dekonvolutert spekter** · prosessdiagram [MSproteiner2026.pdf, slide 25, 27]
  - Venstre: bred «kam» av topper (Rho-protein, merket [M+56H]⁵⁶⁺ og [M+50H]⁵⁰⁺). Pil «deconvolution». Høyre: én topp ved 47 004 Da på en masseakse (zero-charge).
- **Interactive plot: ladningstilstander for et protein**
  - Formel: $m/z = (M + z\cdot M_H)/z$, med slider z = 1–60.
  - $M$ = 8000 Da (forelesning) eller 47 004,33 Da (Rho-protein) som toggle [MSproteiner2026.pdf, slide 22, 25].
  - Tegn toppene for z = 1 til valgt maks, så «kammen» vises. Klikk på to nabotopper for å regne baklengs (formelen under).

## Equations
### m/z for en ladningstilstand
$$\frac{m}{z} = \frac{M_p + z\cdot M_H}{z}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $M_p$ | massen til «parent»-molekylet (nøytralt protein) | Da |
| $z$ | ladning (antall protoner) | – |
| $M_H$ | massen til ett proton (≈ 1) | Da |
[MSproteiner2026.pdf, slide 22, 24; chromatographgy_basics_part2.pdf, p. 87–88]

### Ladning og masse fra to nabotopper
$$X\left(\frac{m}{z_1} - M_H\right) = M_p \qquad (X+1)\left(\frac{m}{z_2} - M_H\right) = M_p$$
$$\Rightarrow\quad X = \frac{\dfrac{m}{z_2} - M_H}{\dfrac{m}{z_1} - \dfrac{m}{z_2}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $X$ | ladningen til toppen med høyest m/z ($m/z_1$) | – |
| $X+1$ | ladningen til nabotoppen med lavere m/z ($m/z_2$) | – |
| $m/z_1$, $m/z_2$ | m/z for toppene ($m/z_1 > m/z_2$) | – |
| $M_H$ | massen til ett proton | Da |
| $M_p$ | massen til parent-molekylet | Da |
Antar at nabotoppene skiller seg med nøyaktig én ladning [MSproteiner2026.pdf, slide 23–24].

## Worked example
**Ukjent Mw fra to nabotopper (forelesningseksempel)** [MSproteiner2026.pdf, slide 23–24]

To nabotopper i et ESI-spekter: $m/z_1$ = 2663 (ladning X) og $m/z_2$ = 2004 (ladning X+1). $M_H$ ≈ 1.
1. Toppen med lavest m/z har én ladning mer, så 2004 har ladning X+1 og 2663 har ladning X.
2. Sett opp: $X(2663 - 1) = M_p$ og $(X+1)(2004 - 1) = M_p$.
3. Løs for X: $X = \dfrac{2004 - 1}{2663 - 2004} = \dfrac{2003}{659} = 3{,}04 \approx 3$
4. Altså er 2663 en +3-topp og 2004 en +4-topp.
5. Masse fra +3-toppen: $M_p = 3(2663 - 1) = 7986$ Da. Fra +4-toppen: $M_p = 4(2004 - 1) = 8012$ Da.
6. Begge ≈ 8000 Da, som stemmer med forelesningens Mw = 8000. Avviket skyldes avrundede m/z-verdier i figuren.

## Faded example
**Kjent Mw: forutsi ladningsserien** [MSproteiner2026.pdf, slide 22]

Protein med $M_p$ = 8000 Da.
1. Formel: $m/z = (8000 + z)/z$.
2. z = 1 gir $8001/1 = 8001$, altså $[M+H]^+$.
3. **(try)** z = 2: → 8002/2 = 4001 (forelesningen viser 4002).
4. **(try)** z = 3: → 8003/3 ≈ 2668 (forelesningen viser 2663).
5. **(try)** z = 4: → 8004/4 = 2001 (forelesningen viser 2004).
6. **(try)** Hvorfor er det en fordel for en QTOF eller kvadrupol at proteinet får høy ladning? → Store molekyler havner i et lite m/z-område som instrumentet kan måle [MSproteiner2026.pdf, slide 25].

## Exam traps
- **Lav m/z = lav ladning**: Motsatt. I en ladningsserie har toppen med *lavest* m/z *høyest* ladning [MSproteiner2026.pdf, slide 22–24].
- **Glemme protonmassen**: $M_p = z(m/z - M_H)$, ikke $z \cdot m/z$. Ved z = 56 gir det et feil på 56 Da [MSproteiner2026.pdf, slide 24].
- **Bottom up gir hele bildet**: Nei. Den taper informasjon, ikke alle peptider blir med, og den gir lite info om PTM [MSproteiner2026.pdf, slide 15].
- **Top down er alltid bedre**: Den er dyr, krevende, har få protokoller, og store molekyler kan være problematiske [MSproteiner2026.pdf, slide 17].
- **Glykoformer blir én skarp topp**: Isoformer og glykoformer gir brede, overlappende spektre og er ikke nødvendigvis lette å separere på kolonne [MSproteiner2026.pdf, slide 26].

## Past exam tasks
- Ingen oppgaver om protein-MS på H2024 eller H2025.
- Prosjektoppgaven bruker metoden: regn m/z manuelt fra et ESI-QTOF-spekter og sammenlign med dekonvolutert spekter [MSproteiner2026.pdf, slide 30; Prosjektoppgave IMAK2008 H26.pdf, p. 1].

## Test yourself
**Q:** Rho-proteinet har $M_p$ = 47 004,33 Da. Hvilken m/z har $[M+50H]^{50+}$?
**A:** $(47\,004{,}33 + 50 \times 1)/50 \approx 941{,}1$. Med formelen fra forelesningen [MSproteiner2026.pdf, slide 24–25].

**Q:** Nevn tre fordeler og tre ulemper med bottom up.
**A:** Fordeler: mange protokoller, robust, «billig» / plug and play. Ulemper: taper informasjon, ikke alle peptider blir med, lite PTM-info og krever deglykosylering [MSproteiner2026.pdf, slide 15].

**Q:** Hvorfor ble bottom up historisk populært?
**A:** Kvadrupolens masseområde var < 2000, så proteinet måtte kuttes i peptider på 1–3 kDa [MSproteiner2026.pdf, slide 14].

**Q:** Hva gjør dekonvolusjon med et ESI-spekter?
**A:** Gjør et flerladet spekter om til et zero-charge, gjennomsnittlig molekylvektspekter ved å søke etter beste fit (regresjon) [MSproteiner2026.pdf, slide 27].

**Q:** Hvilke krav stilles til mobilfasen i LC-MS av proteiner?
**A:** Den må kunne fordampes, og den tilsettes typisk en H⁺-kilde eller pH-justeres for ionisering ved 1 atm [MSproteiner2026.pdf, slide 12].

## Sources
- [MSproteiner2026.pdf, slide 3, 11–19, 21–28, 30]
- [Proteinkarakterisering del 1 m notater.pdf, slide 4–5, 10–11]
- [Prosjektoppgave IMAK2008 H26.pdf, p. 1]
- [chromatographgy_basics_part2.pdf, p. 87–88] (p. = boksidetall; PDF-side = bokside − 84)
