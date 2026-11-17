---
slug: 15-ms-analysatorer-og-detektorer
title: "MS: analysatorer og detektorer"
topic: ms
exam_weight: low
exam_weight_note: "H24 1(b) flervalg (formålet med MS/MS i LC-MS). Ikke spurt på H25"
builds_on: [14-ms-ionisering]
used_in: [16-ms-proteiner, 17-kvalitativ-og-kvantifiseringsmetoder]
sources: ["Forelesning_MS_u_notater.pdf", "MSproteiner2026.pdf", "chromatographgy_basics_part1.pdf", "chromatographgy_basics_part2.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** I en TOF-analysator: kommer tunge eller lette ioner først til detektoren?
**A:** Lette. Tunge ioner har lengre flytid [chromatographgy_basics_part2.pdf, p. 93; MSproteiner2026.pdf, slide 9].

**Q:** Hva er hovedformålet med tandem-MS (MS/MS) i LC-MS?
**A:** Å fragmentere ioner og analysere fragmentene for strukturinformasjon [LF eksamen H2024 IMAK2008.pdf, p. 3].

**Q:** Hvorfor må et massespektrometer ha vakuum?
**A:** Luft (gassmolekyler) hindrer ionene i å fly fram til analysatoren [chromatographgy_basics_part2.pdf, p. 91].

## Mental model
Etter ioniseringen må ionene sorteres etter m/z og telles [MSproteiner2026.pdf, slide 3, 8]. Alle analysatorer bruker elektriske (eller magnetiske) felt, men på ulike måter [chromatographgy_basics_part2.pdf, p. 91–94; Forelesning_MS_u_notater.pdf, slide 5]:
- **Kvadrupol**: et filter der bare én m/z har stabil bane ved gitte spenninger.
- **Ionefelle**: fanger alle ionene og slipper dem ut i rekkefølge.
- **TOF**: gir alle ionene samme energi og måler hvor lang tid de bruker gjennom et feltfritt rør.
- **Orbitrap og ICR**: måler frekvensen ionene svinger med.
- **Magnetisk sektor**: bøyer ionene i et magnetfelt.

Analysatorene skiller seg i oppløsning, nøyaktighet, hastighet og pris [MSproteiner2026.pdf, slide 8–10; chromatographgy_basics_part2.pdf, p. 91–94]. Kobler man to analysatorer med en kollisjonscelle imellom (MS/MS), kan man velge ut ett ion, knuse det og se fragmentene. Det gir både strukturinformasjon og lavere deteksjonsgrense [chromatographgy_basics_part2.pdf, p. 94; Forelesning_MS_u_notater.pdf, slide 7]. Til slutt treffer ionene en elektronmultiplikator som forsterker hvert ion til en målbar strøm [Forelesning_MS_u_notater.pdf, slide 9].

## Concepts and definitions
- **Masseanalysatorer (oversikt)**: TOF, QMS (kvadrupol), ionefelle, ICR (syklotron), Orbitrap og ionemobilitet. Valget avhenger av masseområde, oppløsning, MS/MS, LC-separasjon og skann eller total [MSproteiner2026.pdf, slide 8].
- **Ionebane inn i analysatoren**: Ionene går gjennom linser og skimmere som fokuserer ionestrålen og deler MS-en i kamre med gradvis lavere trykk. Vakuum er essensielt [chromatographgy_basics_part2.pdf, p. 91].
- **Ytelsesparametere** [chromatographgy_basics_part2.pdf, p. 91]:
  - **Masseoppløsning (R)**: Evnen til å skille m/z-verdier fra hverandre. Høyere R er bedre.
  - **Massenøyaktighet (E)**: Forskjellen mellom målt og teoretisk m/z. Lavere E er bedre.
  - **Skannehastighet (Hz)**: Det trengs minst 12–15 datapunkter per topp, så smale topper (UHPLC) krever rask skanning.
  - **Følsomhet**: Signal/støy. I SIM- eller MRM-modus helt ned på femtogramnivå.
- **Kvadrupol (QMS)** [chromatographgy_basics_part2.pdf, p. 91–92; MSproteiner2026.pdf, slide 10]:
  - Fire parallelle stenger, koblet to og to med motsatt ladning. Hvert par har en likestrømskomponent (U) og en radiofrekvens (RF, V cos ωt).
  - Ionene går inn i z-retning og oscillerer i x og y. Ustabile baner kolliderer med stengene, stabile når detektoren.
  - Ved bestemte U/RF passerer bare bestemte m/z. Ved å variere U og RF kontrollert fås hele spekteret («skanner» ~0–3000 Da).
  - Enhetsoppløsning (R < 1000), moderat nøyaktighet (E > 100 ppm), høy skannehastighet, pg-følsomhet. Billig, enkel og robust, men lav oppløsning og lite masseområde.
  - Vanligst i GC-MS, fordi masseområdet dekker forbindelser som kan kjøres på GC [chromatographgy_basics_part1.pdf, p. 34].
- **Ionefelle (ion trap)**: Ringelektrode og to endekapselelektroder med AC/DC-spenning. Ionene kommer inn gjennom én endekapsel, kjøles av He og fanges i feltet. Ved å endre spenningene slippes ionene ut, de lette først og de tunge sist [chromatographgy_basics_part2.pdf, p. 92–93].
- **TOF (time-of-flight)** [chromatographgy_basics_part2.pdf, p. 92–94; MSproteiner2026.pdf, slide 9; Forelesning_MS_u_notater.pdf, slide 7]:
  - En pulset kilde med stor spenningsforskjell gir ionene lik kinetisk energi. I det feltfrie drift-røret bestemmer bare den kinetiske energien bevegelsen.
  - Hastigheten er omvendt proporsjonal med m/z, så tunge ioner har lengre flytid. Store molekyler er «trege».
  - Lineær TOF har ofte enhetsoppløsning. Reflektron-TOF har to drift-rør og oppløsning opptil 50 000.
  - Kompatibel med pulserende metoder (MALDI, ESI-QTOF). Rask, sensitiv, trygg og billig.
- **FTMS (FT-ICR og Orbitrap)**: Måler svake elektriske pulser fra ionenes bevegelse i høyvakuum. Hver m/z gir en bestemt frekvens: lavere frekvens betyr høyere m/z. Fourier-transform skiller ut frekvensene. Orbitrap gir oppløsning opptil 200 000, FT-ICR over 1 000 000 [chromatographgy_basics_part2.pdf, p. 93–94].
- **Magnetisk sektor**: Ionisering → akselerasjon → avbøyning i elektromagnet → deteksjon, der bare ioner med riktig m/z når detektoren [Forelesning_MS_u_notater.pdf, slide 5].
- **Fragmentering og MS/MS (CID)**: Molekylionet $[M+nH]^{n+}$ gir spesifikk deteksjon, men fragmentering kan gi mer informasjon eller lavere deteksjonsgrense. Collision-induced dissociation (CID): (1) velg ut ionet, (2) la det kollidere med gassmolekyler slik at det fragmenterer, (3) detekter fragmentene. Systemer: trippel-kvadrupol, ionefelle, ionefelle-TOF, TOF-TOF, ionefelle-Orbitrap og kvadrupol-Orbitrap [chromatographgy_basics_part2.pdf, p. 94].
  - **Trippel-kvadrupol (forelesningsfigur)**: HPLC → ionekilde (ESI/APCI, ionisering) → Q1 massefilter (precursor-ion) → q2 kollisjonscelle (fragmentering) → Q3 massefilter (produkt-ion) → detektor [Forelesning_MS_u_notater.pdf, slide 7].
  - Hovedformål i LC-MS: fragmentere ioner og analysere fragmentene for strukturinformasjon [LF eksamen H2024 IMAK2008.pdf, p. 3].
- **TIC vs. SIM** [Forelesning_MS_u_notater.pdf, slide 8; chromatographgy_basics_part1.pdf, p. 34]:
  - **TIC (total ion chromatogram)**: summen av alle ioner i full scan. Mange topper og mye bakgrunn.
  - **SIM (selected ion monitoring)**: bare utvalgte m/z (f.eks. 162, 176, 169), noe som gir renere kromatogram og lavere deteksjonsgrense.
  - Boka: typisk minste detekterbare mengde i GC-MS (EI) er 10 pg i full scan og 1 pg i SIM.
- **Detektor: elektronmultiplikator** [Forelesning_MS_u_notater.pdf, slide 9]:
  - Ion⁺ treffer første dynode (konverteringsdynode: ion → elektron, f.eks. −1,5 kV).
  - Elektronene akselereres mot neste dynode (−1,4, −1,3 … −900 V) og slår ut flere sekundærelektroner ved hvert trinn, slik at signalet forsterkes.
  - Finnes som diskret dynode (separate plater) og kontinuerlig dynode (ett buet rør).
  - En dynode er en elektrode i et vakuumrør som fungerer som elektronmultiplikator gjennom sekundæremisjon.
- **MCP (microchannel plate) detector**: Ladde partikler treffer en halvleder, som gir sekundærelektroner [MSproteiner2026.pdf, slide 10].
- **MS koblet med UV**: UV- eller fluorescensdetektor må stå før MS, eller flowen splittes. Kvantitativ analyse på ng-nivå kan gjøres med relativt billige enkle kvadrupoler [chromatographgy_basics_part2.pdf, p. 95, Info-box 3.21].

## Visuals
- **Kvadrupol** · tverrsnitt [chromatographgy_basics_part2.pdf, p. 92, Fig. 3.36; MSproteiner2026.pdf, slide 10]
  - Fire stenger langs z-aksen, kilde til venstre og detektor til høyre. Motstående par merket +(U − V cos ωt) og −(U − V cos ωt).
  - Én ionebane (grønn) går stabilt gjennom til detektoren. To ionebaner (røde) spiraliserer ut og treffer stengene.
  - Innfelt x/y-snitt med de fire stengene som sirkler.
- **TOF: lineær og reflektron** · prosessdiagram [Forelesning_MS_u_notater.pdf, slide 7; chromatographgy_basics_part2.pdf, p. 94, Fig. 3.38]
  - Lineær: prøveinnløp → ioniseringsområde → akselerasjonsområde (pulset kilde) → flyvebane (feltfritt) → iondetektor. Små røde (lette) foran store grønne (tunge). Pil under: «time measurement».
  - Reflektron: samme, men ionene snus av en reflektron og går en lengre bane tilbake til detektoren. Etikett: «høyere oppløsning (opptil 50 000)».
- **Trippel-kvadrupol MS/MS** · flytdiagram [Forelesning_MS_u_notater.pdf, slide 7]
  - HPLC → ionekilde (ESI/APCI) «Ionization» → Q1 «Precursor ion» (ett ion velges, mini-spekter med én uthevet topp) → q2 kollisjonscelle «Fragmentation» → Q3 «Product ion» (mini-spekter med fragmenter) → detektor.
- **TIC vs. SIM** · plot, fire stablede kromatogrammer [Forelesning_MS_u_notater.pdf, slide 8]
  - Øverst TIC med mange topper og bakgrunn. Under tre SIM-spor (m/z 162, 176, 169), hvert med én tydelig topp (markert *) og lav bakgrunn. Felles tidsakse.
- **Elektronmultiplikator** · tverrsnitt [Forelesning_MS_u_notater.pdf, slide 9]
  - Ion⁺ inn → første dynode (−1,5 kV) → elektroner sikksakker nedover dynoder med −1,4, −1,3, −1,2 … −900 V, og blir flere for hvert trinn (vifte av blå linjer).
  - Under: diskret dynode (rekke plater) og kontinuerlig dynode (buet horn).
- **Interactive plot: TOF-flytid**
  - $E_k = \tfrac{1}{2}mv^2$ (lik for alle ioner), så $t = L/v \propto \sqrt{m/z}$ [MSproteiner2026.pdf, slide 9; chromatographgy_basics_part2.pdf, p. 93].
  - Slider m/z 100–10 000. Vis relativ flytid mot m/z = 100.
  - Merk at firedobbelt m/z gir dobbelt flytid.

## Equations
### Kinetisk energi i TOF
$$E_k = \frac{1}{2} m v^2 \quad\Rightarrow\quad v = \sqrt{\frac{2E_k}{m}} \quad\Rightarrow\quad t = \frac{L}{v}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $E_k$ | kinetisk energi (lik for alle ioner etter akselerasjon) | J |
| $m$ | ionets masse | kg |
| $v$ | hastighet i drift-røret | m/s |
| $t$ | flytid | µs |
| $L$ | lengde på drift-røret | m |
Forelesningen gir $E_k = mv^2/2$, og at hastigheten avhenger av kinetisk energi slik at store molekyler er «trege» [MSproteiner2026.pdf, slide 9]. Boka: alle ioner får lik kinetisk energi, og flytiden øker med m/z [chromatographgy_basics_part2.pdf, p. 93]. Uttrykket $t \propto \sqrt{m/z}$ er utledet her fra disse to.
> GAP: den eksplisitte formelen for flytid ($t = L\sqrt{m/(2zeU)}$) står ikke i kursfilene.

### Kvadrupol-spenning
$$\pm(U - V\cos\omega t)$$
| Symbol | Meaning | Unit |
|---|---|---|
| $U$ | likestrømskomponent (DC) | V |
| $V\cos\omega t$ | radiofrekvenskomponent (RF) | V |
Bare én m/z har stabil bane for et gitt U/V-forhold [chromatographgy_basics_part2.pdf, p. 92].

## Worked example
**H24 oppg. 1(b): «Hva er hovedformålet med å bruke tandem-MS (MS/MS) i LC-MS?»** [Eksamen_IMAK2008_24.pdf, oppg. 1(b); LF eksamen H2024 IMAK2008.pdf, p. 3]

Alternativer: (a) redusere prøvemengden som trengs, (b) fragmentere ioner og analysere fragmentene for strukturinformasjon, (c) måle molekylvekt med høy presisjon uten fragmentering, (d) erstatte kromatografisk separasjon.
1. Skisser oppsettet: Q1 velger ett precursor-ion, q2 er kollisjonscelle, Q3 analyserer produkt-ionene [Forelesning_MS_u_notater.pdf, slide 7].
2. Det som skjer i q2 er CID: ionet kolliderer med gassmolekyler og fragmenterer [chromatographgy_basics_part2.pdf, p. 94].
3. (c) er feil: MS/MS innebærer nettopp fragmentering. Høy massenøyaktighet uten fragmentering er en jobb for FTMS (Orbitrap/ICR).
4. (d) er feil: MS/MS kobles *etter* LC og erstatter ikke separasjonen.
5. (a) er ikke hovedformålet. Lavere deteksjonsgrense er en bonus, men handler om selektivitet, ikke prøvemengde [chromatographgy_basics_part2.pdf, p. 91, 94].
6. **Svar:** (b), fragmentering for strukturinformasjon.

## Faded example
**Flytid i TOF og valg av analysator** [MSproteiner2026.pdf, slide 8–10; chromatographgy_basics_part2.pdf, p. 92–94]

To ioner med z = 1: m/z 1000 og m/z 4000, med samme kinetiske energi.
1. Lik $E_k$ gir $v \propto 1/\sqrt{m}$, så $t \propto \sqrt{m}$.
2. **(try)** Forhold mellom flytidene: $t_{4000}/t_{1000} = \sqrt{4000/1000} = \;?$ → 2. Det tunge ionet bruker dobbelt så lang tid.
3. **(try)** Hvilken TOF-type gir best oppløsning, og hvorfor? → Reflektron, siden en lengre flyvebane gir høyere oppløsning og nøyaktighet (opptil 50 000).
4. **(try)** Du skal kvantifisere ett kjent legemiddel på ng-nivå billig og robust. Hvilken analysator, og i hvilken modus? → En enkel kvadrupol i SIM-modus [chromatographgy_basics_part2.pdf, p. 95; chromatographgy_basics_part1.pdf, p. 34].
5. **(try)** Du trenger svært høy massenøyaktighet for et ukjent protein. → FTMS (Orbitrap, opptil 200 000) eller QTOF.

## Exam traps
- **Kvadrupolen fanger ionene**: Nei. Kvadrupolen er et *filter* (stabil eller ustabil bane). Det er *ionefellen* som fanger ionene og slipper dem ut i rekkefølge [chromatographgy_basics_part2.pdf, p. 92].
- **TOF: tunge ioner raskest**: Feil. Med lik kinetisk energi er lette ioner raskest [chromatographgy_basics_part2.pdf, p. 93].
- **FTMS: høy frekvens = høy m/z**: Omvendt. Lavere frekvens betyr høyere m/z [chromatographgy_basics_part2.pdf, p. 93].
- **SIM gir mer informasjon enn full scan**: SIM gir lavere deteksjonsgrense, men bare for de valgte ionene. Full scan (TIC) gir hele spekteret [Forelesning_MS_u_notater.pdf, slide 8; chromatographgy_basics_part1.pdf, p. 34].
- **MS/MS erstatter LC**: Nei. MS/MS gir strukturinformasjon, men LC trengs fortsatt for separasjon [LF eksamen H2024 IMAK2008.pdf, p. 3].
- **For lav skannehastighet ved UHPLC**: Det trengs 12–15 punkter per topp, så smale UHPLC-topper krever rask MS [chromatographgy_basics_part2.pdf, p. 91].

## Past exam tasks
- **H2024 oppg. 1(b)** (flervalg, 1 av 5 delspørsmål): hva er hovedformålet med å bruke tandem-MS (MS/MS) i LC-MS?

## Test yourself
**Q:** Forklar hvordan en kvadrupol skiller ioner.
**A:** Fire stenger med motsatt ladde par får en DC (U) og en RF (V cos ωt). Ved gitte U/RF har bare bestemte m/z stabil bane gjennom til detektoren, mens de andre kolliderer med stengene. Hele spekteret fås ved å variere U og RF [chromatographgy_basics_part2.pdf, p. 91–92].

**Q:** Hva skjer i hver av de tre kvadrupolene i en trippel-kvadrupol?
**A:** Q1 velger precursor-ion, q2 fragmenterer det ved kollisjon (CID), og Q3 analyserer produkt-ionene [Forelesning_MS_u_notater.pdf, slide 7; chromatographgy_basics_part2.pdf, p. 94].

**Q:** Hvordan forsterker en elektronmultiplikator signalet?
**A:** Ionet treffer en konverteringsdynode og slår løs elektroner. Hver påfølgende dynode (lavere negativ spenning) slår løs flere sekundærelektroner, så signalet forsterkes trinnvis [Forelesning_MS_u_notater.pdf, slide 9].

**Q:** Hvilken analysator er vanligst i GC-MS, og hvorfor?
**A:** Kvadrupol. Masseområdet dekker forbindelser som kan kjøres på GC, og den er billig og robust [chromatographgy_basics_part1.pdf, p. 34; MSproteiner2026.pdf, slide 10].

**Q:** Hva er forskjellen på masseoppløsning og massenøyaktighet?
**A:** Oppløsning er evnen til å skille nære m/z-verdier. Nøyaktighet er hvor nær målt m/z er den teoretiske [chromatographgy_basics_part2.pdf, p. 91].

## Sources
- [Forelesning_MS_u_notater.pdf, slide 5, 7–9] (bare figurer, ingen notater)
- [MSproteiner2026.pdf, slide 8–10]
- [chromatographgy_basics_part1.pdf, p. 34] (p. = boksidetall; PDF-side = bokside + 16)
- [chromatographgy_basics_part2.pdf, p. 91–95] (p. = boksidetall; PDF-side = bokside − 84)
- [Eksamen_IMAK2008_24.pdf, oppg. 1(b)] / [LF eksamen H2024 IMAK2008.pdf, p. 3]
