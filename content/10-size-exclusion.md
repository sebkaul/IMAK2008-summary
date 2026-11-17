---
slug: 10-size-exclusion
title: "Eksklusjonskromatografi (SEC)"
topic: lc-separasjon
exam_weight: medium
exam_weight_note: "På begge eksamener: H25 oppg. 7 (6 p, Ve-tolkning) + oppg. 3 (fraksjoneringsområdet, 2 p), H24 1(j) (5 p, Mw-estimering og SF-materialer)"
builds_on: [01-retensjon-og-selektivitet, 05-kolonner-og-partikler, 09-ionebytterkromatografi]
used_in: [19-elektroforese-teori-og-geler, 20-sds-page]
sources: ["Eksklusjonskrom_m_notater.pdf", "chromatographgy_basics_part1.pdf", "Manuals-Sephadex-G-100-gelen-kollone-kromotografi.pdf", "Prosjektoppgave IMAK2008 H26.pdf", "Pensum.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** Et stort og et lite protein kjøres på SEC. Hvilket eluerer først?
**A:** Det store. Det ekskluderes fra porene og retarderes ikke [Eksklusjonskrom_m_notater.pdf, slide 1].

**Q:** Ved hvilket volum eluerer et molekyl som er for stort til å gå inn i noen porer?
**A:** Ved void-volumet $V_0$ ($K = 0$) [Eksklusjonskrom_m_notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 76].

**Q:** Er SEC basert på interaksjon mellom analytt og SF?
**A:** Nei. I prinsippet separeres det rent etter størrelse (hydrodynamisk volum), uten interaksjoner [chromatographgy_basics_part1.pdf, p. 76; Løsningsforslag IMAK2008 H25.pdf, oppg. 7a].

## Mental model
SEC (size exclusion chromatography) samler alle metodene som baserer seg på molekylstørrelse og $M_w$ [Eksklusjonskrom_m_notater.pdf, slide 1]. SF består av en porøs struktur med en definert porestørrelse, og porene er fylt med stillestående mobilfase [Eksklusjonskrom_m_notater.pdf, slide 1–2]. Store molekyler får ikke plass i porene og går den korteste veien, mellom partiklene. De eluerer først, ved $V_0$. Små molekyler kommer inn i alle porene og bruker lengst tid, til $V_0 + V_i$. Mellomstore kommer inn i noen av porene og havner imellom [Eksklusjonskrom_m_notater.pdf, slide 1, 3]. Siden elueringsvolumet henger sammen med størrelse, og innenfor et område med $\log M$, kan en kalibreringskurve med standarder brukes til å estimere molekylvekten til et ukjent protein [chromatographgy_basics_part1.pdf, p. 76; LF eksamen H2024 IMAK2008.pdf, p. 9]. Alt eluerer innenfor ett kolonnevolum, så separasjonsvinduet er smalt, og porestørrelsen må velges slik at fraksjoneringsområdet passer prøven [chromatographgy_basics_part1.pdf, p. 77; Eksklusjonskrom_m_notater.pdf, slide 4].

## Concepts and definitions
- **SEC / gelfiltrering / gelpermeasjon**: Gelfiltrering har vandig MF/SF (vann/buffer). Gelpermeasjon (GPC) har SF/MF i et organisk løsemiddel [Eksklusjonskrom_m_notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 76].
- **SF i SEC**: Porøs struktur med definert porestørrelse. SF er den «stillestående» mobilfasen i porene (sMF) [Eksklusjonskrom_m_notater.pdf, slide 1–2].
  - Store molekyler ekskluderes fra alle porene og retarderes ikke. Mellomstore passer i noen av porene og retarderes. Små molekyler (mindre enn porene) bruker maks tid [Eksklusjonskrom_m_notater.pdf, slide 1].
- **Lage SF**: (1) svelle en naturlig (bio)polymer i vann/buffer, eller (2) fylle porene i en stiv syntetisk polymer med et organisk løsemiddel [Eksklusjonskrom_m_notater.pdf, slide 2].
- **HPLC-SEC vs. lavtrykkskolonner**: HPLC-egnede materialer er hardt faststoff og trykkstabile (noe begrenset trykk). Myke, svellbare polymerkjeder brukes i lavtrykkskolonner med lite trykkfasthet [Eksklusjonskrom_m_notater.pdf, slide 2].
- **Volumer i SEC** [Eksklusjonskrom_m_notater.pdf, slide 3]:
  - $V_t$ = totalvolum ($= \pi r^2 h$).
  - $V_0$ = void-volum, volumet «rundt» partiklene = mobil MF (utenompartikkel-MF, interstitiell eller interpartikkel-MF).
  - $V_i$ = volum av MF inne i partiklene = stillestående MF (innompartikkel-, intrastitiell eller intrapartikkel-MF), dvs. «SF».
  - $V_m$ = volum av gelmatriks (≈ $V_{tørr\,gel}$).
- **Eluering** [Eksklusjonskrom_m_notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 76]:
  - Store molekyler: $V_e = V_0$ ($K = 0$).
  - Små molekyler: $V_e = V_0 + V_i$ ($K = 1{,}0$).
  - Mellomstore: $V_e = V_0 + K\cdot V_i$.
- **Fordelingskoeffisient i SEC ($K$)**: Begrenset til verdier mellom 0 og 1. Innenfor et begrenset område er $K$ en funksjon av molekylmassen ($K = A - B\log M$). For proteiner er $M$ størrelsen på det solvatiserte molekylet, gitt som Stokes-radius [chromatographgy_basics_part1.pdf, p. 76].
- **Eksklusjonsgrense og permeasjonsgrense**: Eksklusjonsgrensen er molmassen der alt større ekskluderes ($K = 0$, eksempel ~5·10⁵). Permeasjonsgrensen er molmassen der alt mindre trenger inn i alle porer ($K = 1$, eksempel ~10³) [Eksklusjonskrom_m_notater.pdf, slide 3]. Prosjektoppgaven spør nettopp hvordan disse finnes, altså start og slutt på separasjonen [Prosjektoppgave IMAK2008 H26.pdf, p. 3].
- **Fraksjoneringsområdet**: Området mellom eksklusjons- og permeasjonsgrensen, der kalibreringskurven er lineær («selektivt permeasjonsområde») [Eksklusjonskrom_m_notater.pdf, slide 3]. Løsningsforslaget definerer det som størrelsesområdet der forbindelser faktisk kan separeres, særlig i SEC/GPC, der det angir hvilke molekylstørrelser gelen gir effektiv separasjon for [Løsningsforslag IMAK2008 H25.pdf, oppg. 3].
- **Porestørrelsen bestemmer fraksjoneringsområdet**: Kolonnespesifikke kalibreringskurver ($\log M$ mot $V_e$) for porestørrelser fra 5 nm til 100 µm, alle mellom $V_0$ og $V_0 + V_i$ [Eksklusjonskrom_m_notater.pdf, slide 4]. Materialer finnes med porestørrelse fra 6 til 100 nm, og riktig porestørrelse er viktig [chromatographgy_basics_part1.pdf, p. 77].
- **Kolonnetabell (eksempel)**: PolyPore (øvre grense 2 000 000 Da), ResiPore (500 000 Da), MesoPore (25 000 Da) og OligoPore (3300 Da), med maks trykk 150 bar [Eksklusjonskrom_m_notater.pdf, slide 4].
- **Matrikstyper i SEC** [Eksklusjonskrom_m_notater.pdf, slide 4–6]:
  1. **Syntetiske polymerer («resiner»)**: polystyren kryssbundet med divinylbenzen (PS-DVB).
  2. **Karbohydratbaserte, «bløte» geler**: f.eks. dekstran kryssbundet med epiklorhydrin (Sephadex).
  3. **Polyakrylamid**: akrylamid kryssbundet med N,N'-metylen-bis-akrylamid.
  - Boka: før HPLC ble gelfiltrering gjort på dekstraner, agaroser, polyakrylamider eller polystyrener. De fleste tåler ikke trykket fra små partikler, så moderne SEC-materialer er silika- eller polystyrenbaserte [chromatographgy_basics_part1.pdf, p. 76].
- **Sephadex-tabell (forelesning)**: G-10 ≤ 700, G-25 1000–5000, G-50 1500–30 000, G-75 3000–80 000, G-100 4000–150 000 og G-200 5000–600 000 (fraksjoneringsområde for globulære proteiner, Da). Høyere G-tall gir lavere maks trykk (G-200: 16 cm H₂O) [Eksklusjonskrom_m_notater.pdf, slide 7].
- **Sephadex G-100 DNA Grade (produktark)**: Tørr partikkelstørrelse 20–50 µm. Fraksjoneringsområde 4000–10 000 (globulære proteiner). Svelletid 72 t ved 20 °C eller 5 t ved 90 °C. Ionestyrke ≥ 0,02 anbefales mot ioniske interaksjoner med gelmatriksen [Manuals-Sephadex-G-100-gelen-kollone-kromotografi.pdf, p. 1]. Forelesningstabellen gir 4000–150 000 for vanlig G-100, så tallene gjelder ulike produkter.
- **MF i SEC**: Velges etter analyttenes løselighet (organisk eller vandig). Med vandig MF er det alltid fare for hydrofobe eller ioniske interaksjoner, og salt eller organisk løsemiddel kan redusere dem [chromatographgy_basics_part1.pdf, p. 77].
- **Bruk av SEC**: Proteinrensing og fjerning av salter og ioner (avsalting). Ofte nødvendig før elektroforese, IEC og affinitetskromatografi. Estimere ukjent masse på et protein ($\log M_w$ mot $V_e$) [Eksklusjonskrom_m_notater.pdf, slide 7]. I polymerindustrien er SEC den vanligste separasjonsmetoden for massefordeling [chromatographgy_basics_part1.pdf, p. 77].
- **Begrensning**: Smalt separasjonsvindu, så toppkapasiteten er lav (typisk 10–20) [chromatographgy_basics_part1.pdf, p. 77].

## Visuals
- **Tre molekylstørrelser gjennom kolonnen** · prosessdiagram, tre tidspunkt [Eksklusjonskrom_m_notater.pdf, slide 1]
  - Kolonner fylt med grå porøse partikler. Røde (store), grønne (mellomstore) og blå (små) molekyler.
  - Tid 1: alle på toppen. Tid 2: røde langt ned (går mellom partiklene), grønne midt i, blå øverst (inne i porene). Tid 3: røde ute først.
  - Under: kromatogram med glutamatdehydrogenase (290 000), laktatdehydrogenase (140 000), enolase (67 000), adenylatkinase (32 000) og cytokrom c (12 400), som eluerer i den rekkefølgen.
- **Volumdefinisjoner** · tverrsnitt [Eksklusjonskrom_m_notater.pdf, slide 3]
  - Kolonne med porøse partikler. Klammer og piler: $V_t$ (hele kolonnen, $\pi r^2 h$), $V_0$ (mellom partiklene, mMF), $V_i$ (inne i porene, sMF) og $V_m$ (gelmatriksen).
  - Boks: $V_t = V_0 + V_i + V_m$.
- **Kalibreringskurve og fraksjoneringsområde** · plot [Eksklusjonskrom_m_notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 76, Fig. 3.19]
  - y-akse: log(molmasse) (10²–10⁷). x-akse: elueringsvolum $V_e$, med $V_0$ og $V_0 + V_i$ markert.
  - Vertikal del ved $V_0$ over eksklusjonsgrensen (~5·10⁵, $K$ = 0). Lineær fallende del «selektivt permeasjonsområde = fraksjoneringsområde». Vertikal del ved $V_0 + V_i$ under permeasjonsgrensen (~10³, $K$ = 1,0).
  - Under: kromatogram med topp A ved $V_0$, B og C i området og D ved $V_0 + V_i$.
- **Porestørrelse → fraksjoneringsområde** · plot [Eksklusjonskrom_m_notater.pdf, slide 4]
  - Samme akser. En familie av kurver for 5 nm, 10 nm, 50 nm, 100 nm, 1 µm, 10 µm og 100 µm porer, der større porer flytter det lineære området opp i molmasse.
- **Interactive plot: elueringsvolum vs. K**
  - Ligning: $V_e = V_0 + K\cdot V_i$, med slider $K$ 0–1.
  - Verdier fra H25 oppg. 7: $V_0$ = 7 mL, $V_t$ = 20 mL. $V_i$ ≈ 13 mL antatt ($V_m$ neglisjert, ikke oppgitt i oppgaven).
  - Marker protein (9,5 mL) og peptid (14,8 mL) som faste punkter, og vis $K$ for slideren.

## Equations
### Volumbalanse i SEC-kolonnen
$$V_t = V_0 + V_i + V_m$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V_t$ | totalvolum ($\pi r^2 h$) | mL |
| $V_0$ | void-volum (MF mellom partiklene) | mL |
| $V_i$ | volum av MF inne i partiklene (porevolum) | mL |
| $V_m$ | volum av gelmatriksen | mL |
[Eksklusjonskrom_m_notater.pdf, slide 3]

### Elueringsvolum
$$V_e = V_0 + K\,V_i \qquad 0 \le K \le 1$$
| Symbol | Meaning | Unit |
|---|---|---|
| $V_e$ | elueringsvolum | mL |
| $K$ | fordelingskoeffisient (andel av porevolumet som er tilgjengelig) | dimensjonsløs |
$K = 0$: total eksklusjon ($V_e = V_0$). $K = 1$: total permeasjon ($V_e = V_0 + V_i$). Forutsetter ingen interaksjon med SF [chromatographgy_basics_part1.pdf, p. 76, lign. 3.6; Eksklusjonskrom_m_notater.pdf, slide 3].

### Fordelingskoeffisient og molekylmasse
$$K = A - B\log M$$
| Symbol | Meaning | Unit |
|---|---|---|
| $A$, $B$ | kolonnespesifikke konstanter | – |
| $M$ | molekylmasse (for proteiner: solvatisert, Stokes-radius) | Da |
Gjelder bare innenfor fraksjoneringsområdet. Grunnlaget for Mw-estimering med kalibreringskurve [chromatographgy_basics_part1.pdf, p. 76, lign. 3.7].

## Worked example
**H25 oppg. 7: protein og peptid på SEC** (6 p) [IMAK2008 eksamen H2025.pdf, oppg. 7; Løsningsforslag IMAK2008 H25.pdf, oppg. 7]

Gitt: protein $V_e$ = 9,5 mL, peptid $V_e$ = 14,8 mL, $V_t$ = 20 mL, $V_0$ = 7 mL. Ingen ionebytte- eller adsorpsjonsinteraksjoner.

*a) Hva skiller SEC fra andre teknikker?*
1. SEC separerer utelukkende på hydrodynamisk størrelse, via hvor mye analytten kan trenge inn i porevolumet. Ideelt sett er det ingen likevektsfordeling eller adsorpsjon. Større molekyler ekskluderes mer og får kortere oppholdstid.

*b) Hvilken analytt er størst?*
2. Sammenlign med $V_0$: proteinet (9,5 mL) ligger nærmere $V_0$ (7 mL) enn peptidet (14,8 mL).
3. Lavere $V_e$ betyr at analytten går inn i færre porer (mer ekskludert) og eluerer tidligere.
4. **Svar:** Proteinet er størst.

*c) Hvor eluerer et veldig stort protein?*
5. Det ekskluderes i stor grad fra porene og får minimal ekstra «vei» gjennom porevolumet.
6. **Svar:** Nær $V_0$.

*Utvidelse (ikke spurt om, og ikke i LF):*
7. Anta $V_m$ ≈ 0, så $V_i \approx V_t - V_0 = 13$ mL.
8. $K_{protein} = (9{,}5 - 7)/13 \approx 0{,}19$ og $K_{peptid} = (14{,}8 - 7)/13 \approx 0{,}60$. Begge ligger mellom 0 og 1, altså innenfor fraksjoneringsområdet.

## Faded example
**H24 oppg. 1(j): Mw-estimering og SF-materialer** (5 p) [Eksamen_IMAK2008_24.pdf, oppg. 1(j); LF eksamen H2024 IMAK2008.pdf, p. 9–10]

*i) Hvordan kan SEC estimere molekylvekten til en polymer?*
1. Separasjonsprinsipp: store molekyler kan ikke diffundere inn i porene og eluerer raskere. Små diffunderer inn og bruker lengre tid.
2. **(try)** Hva korrelerer med molekylstørrelsen? → Elusjonsvolumet.
3. **(try)** Hvordan lages kalibreringskurven? → Standarder med kjente molekylvekter kjøres, og elusjonsvolumet registreres for hver ($\log M$ mot $V_e$).
4. **(try)** Hvordan finnes ukjent Mw? → Prøvens elusjonsvolum sammenlignes med kalibreringskurven. Det må ligge innenfor fraksjoneringsområdet.

*ii) Tre egenskaper som skiller SF-materialer:*
5. **(try)** Porøsitet og porestørrelse → bestemmer hvilke molekyler som kan diffundere inn, og må matche analyttstørrelsen.
6. **(try)** Kjemisk sammensetning → polysakkarider (dekstran, agarose) for biopolymerer, PS/DVB for organiske molekyler og polymerer i organiske løsemidler, silika for høyt trykk.
7. **(try)** Kjemisk og mekanisk stabilitet → agarose og dekstran er mindre stabile ved ekstrem pH eller høyt trykk, PS-baserte tåler organiske løsemidler og høyere trykk, og silika er svært mekanisk stabil, men løses opp ved høy pH.

## Exam traps
- **Rekkefølgen snudd**: I SEC eluerer *store* molekyler først. Det er motsatt intuisjonen om at «store sitter fast» [Eksklusjonskrom_m_notater.pdf, slide 1].
- **Lav $V_e$ = lite molekyl**: Feil. Lav $V_e$ (nær $V_0$) betyr stort molekyl [Løsningsforslag IMAK2008 H25.pdf, oppg. 7b].
- **$K$ utenfor 0–1**: I ideell SEC er $0 \le K \le 1$. Eluerer noe etter $V_0 + V_i$, skyldes det interaksjoner (hydrofobe eller ioniske) med SF, ikke størrelse [chromatographgy_basics_part1.pdf, p. 76–77].
- **Mw utenfor fraksjoneringsområdet**: Alt over eksklusjonsgrensen eluerer ved $V_0$, og alt under permeasjonsgrensen ved $V_0 + V_i$. Da kan ikke Mw bestemmes [Eksklusjonskrom_m_notater.pdf, slide 3].
- **SEC-$K$ forveksles med $k$**: Fordelingskoeffisienten $K$ i SEC (0–1, andel tilgjengelig porevolum) er ikke retensjonsfaktoren $k$ fra side 01. Forelesningsnotatet skriver «k» i $V_e = V_0 + k\cdot V_i$, men boka bruker $K$ [Eksklusjonskrom_m_notater.pdf, slide 3; chromatographgy_basics_part1.pdf, p. 76].
- **Ingen salt i vandig MF**: Uten ionestyrke ≥ 0,02 kan ioniske interaksjoner med gelmatriksen forstyrre [Manuals-Sephadex-G-100-gelen-kollone-kromotografi.pdf, p. 1; chromatographgy_basics_part1.pdf, p. 77].
- **Proteiners «størrelse»**: For proteiner er det størrelsen på det solvatiserte molekylet (Stokes-radius) som teller, ikke bare $M$ [chromatographgy_basics_part1.pdf, p. 76].

## Past exam tasks
- **H2025 oppg. 7** (6 p): SEC av protein og peptid. Hva skiller SEC fra andre teknikker, hvilken analytt er størst ut fra $V_e$, og hvor et veldig stort protein eluerer.
- **H2025 oppg. 3** (10 p totalt, 2 p hører hit): forklar «fraksjoneringsområdet».
- **H2024 oppg. 1(j)** (5 p): hvordan SEC estimerer molekylvekten til en polymer, og minst tre egenskaper som skiller SF-materialer.

## Test yourself
**Q:** Skriv volumbalansen i en SEC-kolonne og forklar $V_0$ og $V_i$.
**A:** $V_t = V_0 + V_i + V_m$. $V_0$ er MF mellom partiklene (void-volum), $V_i$ er MF inne i porene (stillestående MF, «SF») [Eksklusjonskrom_m_notater.pdf, slide 3].

**Q:** Hvorfor er toppkapasiteten lav i SEC?
**A:** Alt eluerer mellom $V_0$ og $V_0 + V_i$ ($0 \le K \le 1$), så separasjonsvinduet er smalt. Typisk toppkapasitet er 10–20 [chromatographgy_basics_part1.pdf, p. 77].

**Q:** Hvilke to typer molekyler brukes i prosjektet for å finne start og slutt på separasjonen, og hva markerer de?
**A:** Et svært stort molekyl markerer eksklusjonsgrensen ($V_0$), og et svært lite molekyl markerer permeasjonsgrensen ($V_0 + V_i$) [Prosjektoppgave IMAK2008 H26.pdf, p. 3; Eksklusjonskrom_m_notater.pdf, slide 3].

**Q:** Nevn tre bruksområder for SEC fra forelesningen.
**A:** Proteinrensing, avsalting (fjerne salter/ioner, ofte før elektroforese, IEC eller affinitetskromatografi) og estimering av ukjent molmasse på et protein [Eksklusjonskrom_m_notater.pdf, slide 7].

**Q:** Hva er forskjellen på gelfiltrering og gelpermeasjon?
**A:** Gelfiltrering bruker vandig MF/SF. Gelpermeasjon bruker et organisk løsemiddel [Eksklusjonskrom_m_notater.pdf, slide 1; chromatographgy_basics_part1.pdf, p. 76].

## Sources
- [Eksklusjonskrom_m_notater.pdf, slide 1–7] (slide 8 er bare en artikkeltittel, slide 9 er tom. `Eksklusjonk_u_notater.pdf` er samme forelesning uten notater)
- [chromatographgy_basics_part1.pdf, p. 76–77] (p. = boksidetall; PDF-side = bokside + 16)
- [Manuals-Sephadex-G-100-gelen-kollone-kromotografi.pdf, p. 1]
- [Prosjektoppgave IMAK2008 H26.pdf, p. 3]
- [Pensum.pdf, p. 1]
- [IMAK2008 eksamen H2025.pdf, oppg. 3, 7] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 3, 7]
- [Eksamen_IMAK2008_24.pdf, oppg. 1(j)] / [LF eksamen H2024 IMAK2008.pdf, p. 9–10]
