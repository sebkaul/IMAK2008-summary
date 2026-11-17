---
slug: 19-elektroforese-teori-og-geler
title: "Elektroforese: teori og geler"
topic: elektroforese
exam_weight: medium
exam_weight_note: "H24 2(a) (5 p, generelle prinsipper for elektroforese). H25 oppg. 9 (5 p, koble utsagn til metode, delvis). Grunnlag for alle elektroforesesidene"
builds_on: [10-size-exclusion]
used_in: [20-sds-page, 21-ief-og-2d, 22-geldeteksjon-og-western-blot, 23-immunelektroforese, 24-ce-mobilitet-og-eof]
sources: ["Proteinkarakterisering del 1 m notater.pdf", "chromatographgy_basics_part2.pdf", "Øving elektroforese med LF.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf"]
---

## Pretest
**Q:** Hvilke to krefter virker på et ion i elektroforese, og hva skjer når de er like store?
**A:** Den elektriske kraften $F = qE$ og friksjonskraften $F_f = 6\pi\eta r u$. Når de er like, beveger ionet seg med konstant hastighet [Proteinkarakterisering del 1 m notater.pdf, slide 20–22; chromatographgy_basics_part2.pdf, p. 127–128].

**Q:** Hvorfor kan man ikke bare skru opp spenningen for å få raskere separasjon?
**A:** Varmeutviklingen øker med kvadratet av strømmen, og temperaturgradienter gir båndspredning [Proteinkarakterisering del 1 m notater.pdf, slide 25; chromatographgy_basics_part2.pdf, p. 128].

**Q:** Hvilken gel har størst porer: agarose eller polyakrylamid?
**A:** Agarose [Proteinkarakterisering del 1 m notater.pdf, slide 35; chromatographgy_basics_part2.pdf, p. 131].

## Mental model
Elektroforese er separasjon av ladde molekyler i et elektrisk felt i et væskemedium (buffer) [Proteinkarakterisering del 1 m notater.pdf, slide 15]. Feltet trekker ionet med kraften $qE$, mens bufferen bremser det med en friksjon som øker med hastigheten og størrelsen (Stokes). Etter et øyeblikk er kreftene like, og ionet glir med konstant fart $u = qE/6\pi\eta r$ [Proteinkarakterisering del 1 m notater.pdf, slide 20–22; chromatographgy_basics_part2.pdf, p. 128].

Høy ladning og liten størrelse gir høy fart, så molekyler med ulikt forhold mellom ladning og størrelse ender opp på ulike steder [Proteinkarakterisering del 1 m notater.pdf, slide 23–24]. I fri løsning ville varme og konveksjon blande båndene, derfor gjøres det i en gel. Gelen virker i tillegg som en sil: porestørrelsen avgjør hvor mye store molekyler bremses [chromatographgy_basics_part2.pdf, p. 130, 133; Proteinkarakterisering del 1 m notater.pdf, slide 33]. Strømmen gir varme, så spenningen kan ikke økes ubegrenset [Proteinkarakterisering del 1 m notater.pdf, slide 25].

## Concepts and definitions
- **Elektroforese**: Separasjonsteknikk der ladde, løste partikler eller molekyler beveger seg under påvirkning av et elektrisk felt i et væskemedium. I praksis er det forflytning av ioner i elektrisk ledende væsker (elektrolytter, som regel vandige saltoppløsninger, dvs. buffere) [Proteinkarakterisering del 1 m notater.pdf, slide 15; chromatographgy_basics_part2.pdf, p. 127].
- **Historikk**: Først observert i 1807 (Strakhov og Reuss), oppfunnet og døpt av Michaelis i 1909 (bestemte pI til proteiner). Tiselius fikk Nobelpris i 1948 for moving boundary-metoden. Gel-elektroforese kom på 40-tallet, cellulose-acetat og immunelektroforese på 50-tallet, polyakrylamid og de første forsøkene med kapillærsone-elektroforese på 60-tallet, og CZE «tok av» på 80-tallet [Proteinkarakterisering del 1 m notater.pdf, slide 13–14].
- **Anvendelser**: Separering av biomolekyler (peptider, proteiner, nukleinsyrer), bakterier og virus, og analyse og ren fremstilling av enkeltkomponenter. Brukes innen biokjemi, medisin, molekylærbiologi, diagnostikk, landbruk og næringsmiddelkontroll [Proteinkarakterisering del 1 m notater.pdf, slide 16].
- **Milde betingelser**: Elektroforese består av en væskefase og et bæremateriale. Forholdene er nær fysiologiske og derfor «snille» mot følsomme, biologisk aktive stoffer, som beholder aktiviteten [Proteinkarakterisering del 1 m notater.pdf, slide 17; chromatographgy_basics_part2.pdf, p. 127]. I motsetning til kromatografi er det ingen mobil eller stasjonær fase [chromatographgy_basics_part2.pdf, p. 130].
- **Elektroforesebufferens oppgaver**: Forflytte applisert prøve, lede strømmen (bestemmer ladningen) og stabilisere pH [Proteinkarakterisering del 1 m notater.pdf, slide 18].
- **Retning**: I et elektrisk felt vandrer kationer mot katoden og anioner mot anoden. Molekylene må fås til å vandre i samme retning. Netto transportretning bestemmes av ladningen til analyttene (f.eks. SDS-PAGE) [Proteinkarakterisering del 1 m notater.pdf, slide 19].
- **Drivkraften**: $F = qE$ med $E = V/L$, så $F = q(V/L)$. Høyere ladning gir større kraft [Proteinkarakterisering del 1 m notater.pdf, slide 20; chromatographgy_basics_part2.pdf, p. 127].
- **Motkraften (Stokes' lov)**: $F_f = 6\pi\eta r u$. Friksjonen øker med hastigheten. Store molekyler får større friksjon og lavere hastighet, små molekyler mindre friksjon og høyere hastighet [Proteinkarakterisering del 1 m notater.pdf, slide 21; chromatographgy_basics_part2.pdf, p. 128].
- **Migreringshastighet**: Når $F_f = F$ beveger ionet seg med konstant hastighet $u = qE/6\pi\eta r$ [Proteinkarakterisering del 1 m notater.pdf, slide 22]. Hastigheten øker med ladning og feltstyrke, og avtar med ioneradius. Den øker med temperaturen, fordi viskositeten synker [chromatographgy_basics_part2.pdf, p. 128].
  > Merk: boka skriver at u «decreases with increasing temperature, since the viscosity η decreases» [chromatographgy_basics_part2.pdf, p. 128]. Ligningen ($u \propto 1/\eta$) gir at u *øker* når η synker. Teksten i boka ser ut til å være feil.
- **Elektroforetisk mobilitet (µ)**: Hastighet per feltstyrkeenhet, $u = \mu E$. Den er uavhengig av feltstyrken og brukes til å sammenligne ioner [Proteinkarakterisering del 1 m notater.pdf, slide 22; chromatographgy_basics_part2.pdf, p. 128].
- **Hvorfor separeres molekylene?** Elektrisk kraft → friksjon → konstant hastighet → ulik migreringshastighet → separasjon. Ladning ↑ gir hastighet ↑, størrelse ↑ gir hastighet ↓, friksjon ↑ gir hastighet ↓. Forholdet mellom elektrisk kraft og friksjon er forskjellig for ulike molekyler [Proteinkarakterisering del 1 m notater.pdf, slide 23]. Ioner med ulik størrelse, form og evt. ladning har ulik mobilitet og får ulik vandringslengde [Proteinkarakterisering del 1 m notater.pdf, slide 24].
- **Varmeutvikling (bieffekt)**: Skyldes strøm i systemet. Den begrenser bruk av høy spenning, fordi feltstyrken er proporsjonal med strømstyrken (i), mens varmen er proporsjonal med i². Temperaturgradienter kan oppstå og bidra til båndspredning [Proteinkarakterisering del 1 m notater.pdf, slide 25]. Boka: migrasjonshastigheten varierer 2–3 % per °C. Svake syrer og baser med lav ionestyrke, kjøling og rektangulære kanaler reduserer problemet. Varmen kan bryte ned termolabile stoffer [chromatographgy_basics_part2.pdf, p. 128–129].
- **Tre hovedgrupper**: (1) gelelektroforese (DNA og protein), (2) kapillærelektroforese (CE) og (3) potensialdrevet kromatografi (elektrokromatografi) [Proteinkarakterisering del 1 m notater.pdf, slide 27; chromatographgy_basics_part2.pdf, p. 127]. CE og CEC er på sidene 24–26.
- **Soneelektroforese**: En kinetisk prosess som kan sammenlignes med kromatografi. Komponentene vandrer med ulik hastighet og separeres i soner eller bånd. Vandringslengden er proporsjonal med pålagt spenning og tid [Proteinkarakterisering del 1 m notater.pdf, slide 28; chromatographgy_basics_part2.pdf, p. 130, 133].
  - Andre varianter: isoelektrisk fokusering (likevektsprosess), moving boundary og isotachoforese (kinetiske prosesser). Sone-elektroforese og IEF er mest brukt analytisk [Proteinkarakterisering del 1 m notater.pdf, slide 28; chromatographgy_basics_part2.pdf, p. 130].
  - Høyspennings-sonelektroforese (50–200 V/cm) brukes for små molekyler, fordi rask migrasjon gir mindre longitudinal diffusjon. Lavspennings (2–10 V/cm) brukes for store molekyler, som diffunderer lite, og krever enklere utstyr fordi det dannes mindre varme [chromatographgy_basics_part2.pdf, p. 133].
- **Gel**: En totalt porøs, fast matriks som bærer elektrolyttløsningen og reduserer konveksjon. I gelen kan eddy-diffusjon og adsorpsjon bidra til båndspredning, i tillegg til longitudinal diffusjon [chromatographgy_basics_part2.pdf, p. 130].
- **Gelelektroforese**: Metode for å skille og identifisere proteiner eller DNA/RNA-fragmenter på en gel av agarose eller polyakrylamid mellom tynne glassplater, med tilhørende buffersystem [Proteinkarakterisering del 1 m notater.pdf, slide 30]. Proteinene vandrer som bånd (soner) med ulik hastighet mot elektroden med motsatt ladning [Proteinkarakterisering del 1 m notater.pdf, slide 32].
- **Silingseffekt (sieving)**: I gelen kan man i tillegg separere etter størrelse, avhengig av porestørrelsen. Ioner med samme ladning/størrelse-forhold kan dermed skilles hvis de er ulike store [chromatographgy_basics_part2.pdf, p. 133].
- **Polyakrylamid (PAGE)** [Proteinkarakterisering del 1 m notater.pdf, slide 33–34; chromatographgy_basics_part2.pdf, p. 130–131]:
  - Polymerisering av akrylamid (giftig) med kryssbinderen N,N'-metylenbisakrylamid i nærvær av frie radikaler.
  - Ammoniumpersulfat initierer, og TEMED er katalysator.
  - Dekker best proteiner på 5–250 kD. Boka: mindre egnet over 300 kDa.
  - Porestørrelsen bestemmes av %T og %C. Små porer gir lite eddy-diffusjon.
  - Stabil, inert, mekanisk sterk og gjennomsiktig. Vertikalt system med prøver i brønner.
  - Begge geltypene er størrelsesselektive, der porestørrelsen bestemmer separasjonsrekkefølgen: små proteiner vandrer raskere enn store.
- **Agarose**: Naturlig lineært polysakkarid med større porer og dårligere mekanisk styrke enn polyakrylamid. Brukes for veldig store proteiner, men mest til DNA/RNA. Horisontalt system [Proteinkarakterisering del 1 m notater.pdf, slide 35]. Typisk ca. 1 %, løses i kokende vann og stivner ved 35–43 °C [chromatographgy_basics_part2.pdf, p. 131].
- **Buffersystem**: Kontinuerlig betyr samme buffer (konstant pH) i gel, prøve og elektrodereservoar. Diskontinuerlig betyr at gelen består av to deler, med ulik buffer i gel og elektroder [Proteinkarakterisering del 1 m notater.pdf, slide 36]. Diskontinuitet i gel eller pH konsentrerer startbåndet før separasjonen og gir bedre oppløsning [chromatographgy_basics_part2.pdf, p. 131]. Detaljer på side 20.
- **Vandringshastigheten i PAGE avhenger av**: (1) molekylenes størrelse, (2) spenningen over gelen og (3) porestørrelse og konsentrasjon av gelmateriale [Proteinkarakterisering del 1 m notater.pdf, slide 38].
- **Instrumentering**: Kolonner (vertikalt) eller tynne lag (vertikalt eller horisontalt), med vannkjøling. Tynnsjikt er 5–20 × 5–20 cm, tykkelse 0,1–2 mm for polyakrylamid og 5–10 mm for agarose. Brønner ca. 1 × 5 mm, prøvevolum 5–50 µL. Identifikasjon skjer ved å sammenligne vandringslengden med standarder på samme gel [chromatographgy_basics_part2.pdf, p. 131–132].

## Visuals
- **Krefter på et ion i elektrisk felt** · prosessdiagram [chromatographgy_basics_part2.pdf, p. 128, Fig. 6.1; Proteinkarakterisering del 1 m notater.pdf, slide 20–22]
  - Rør med elektrolyttløsning, anode (+) til venstre og katode (−) til høyre.
  - Et kation med pil $F = qE$ mot katoden og motpil $F_f = 6\pi\eta r u$ bakover.
  - Under: hastighet mot tid som stiger brått og flater ut ved $u = qE/6\pi\eta r$ (der $F_f = F$).
- **Ladning og størrelse → hastighet** · prosessdiagram [Proteinkarakterisering del 1 m notater.pdf, slide 23]
  - Tre ioner i samme felt: lite med høy ladning (lang pil), stort med høy ladning (middels pil) og stort med lav ladning (kort pil).
  - Boks: «Ladning ↑ → u ↑, Størrelse ↑ → u ↓, Friksjon ↑ → u ↓».
- **Gelelektroforese-apparat** · tverrsnitt [chromatographgy_basics_part2.pdf, p. 131, Fig. 6.3; Proteinkarakterisering del 1 m notater.pdf, slide 32–33]
  - Vertikal PAGE: glassplater med gel, brønner øverst (prøver + standard), katode (−) øverst og anode (+) nederst, buffer i begge reservoarer, lokk og kjøling.
  - Horisontal agarose ved siden av, med brønner i midten og bånd som går begge veier.
- **Polyakrylamid-gelen** · prosessdiagram [Proteinkarakterisering del 1 m notater.pdf, slide 34; chromatographgy_basics_part2.pdf, p. 130]
  - Akrylamid + N,N'-metylenbisakrylamid → (APS initiator, TEMED katalysator, frie radikaler) → kryssbundet nettverk.
  - To nettverk side om side: høy %T (tett, små porer) og lav %T (åpent, store porer).
- **Interactive plot: migrering i elektrisk felt**
  - Ligning: $u = qE/(6\pi\eta r)$ og vandringslengde $L = u \cdot t$.
  - Slidere: ladning q (1–10 e), radius r (1–10 relativ), feltstyrke E 2–200 V/cm (lav- vs. høyspenning, bok p. 133).
  - Tre fargede «bånd» som flytter seg i en gelstripe. Vis også relativ varme ∝ i² (fra $W \propto i^2$).

## Equations
### Elektrisk kraft
$$F = q\cdot E \qquad E = \frac{V}{L}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $F$ | kraft på ionet | N |
| $q$ | ioneladning | C |
| $E$ | feltstyrke | V/m |
| $V$ | pålagt spenning | V |
| $L$ | avstand mellom anode og katode | m |
[Proteinkarakterisering del 1 m notater.pdf, slide 20; chromatographgy_basics_part2.pdf, p. 127]

### Friksjon (Stokes' lov)
$$F_f = 6\pi\eta r u$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\eta$ | viskositet i bufferen | Pa·s |
| $r$ | (Stokes-) ioneradius | m |
| $u$ | migreringshastighet | m/s |
Forenklet. Kan modifiseres for ikke-sfærisk form, mot-ioneffekter osv. [chromatographgy_basics_part2.pdf, p. 128; Proteinkarakterisering del 1 m notater.pdf, slide 21]

### Migreringshastighet og mobilitet
$$u = \frac{qE}{6\pi\eta r} \qquad u = \mu E \;\;\Rightarrow\;\; \mu = \frac{u}{E} = \frac{q}{6\pi\eta r}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $\mu$ | elektroforetisk mobilitet | m² V⁻¹ s⁻¹ |
Gjelder når $F_f = F$ (konstant hastighet) [Proteinkarakterisering del 1 m notater.pdf, slide 22; chromatographgy_basics_part2.pdf, p. 128, lign. 6.1].

### Varmeutvikling
$$W = \frac{V\cdot i}{L\cdot A} = \frac{E\cdot i}{A} = \frac{i^2}{\ell\cdot A^2}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $W$ | varme per volum | W/mL |
| $i$ | strøm | A |
| $A$ | tverrsnittsareal | cm² |
| $\ell$ | spesifikk ledningsevne for elektrolytten | S/cm |
[chromatographgy_basics_part2.pdf, p. 128, lign. 6.2]

### Gelens porestørrelse
$$\%T = \frac{a + b}{m}\times 100\,\% \qquad \%C = \frac{b}{a + b}\times 100\,\%$$
| Symbol | Meaning | Unit |
|---|---|---|
| $a$ | gram akrylamid | g |
| $b$ | gram N,N'-metylenbisakrylamid | g |
| $m$ | totalt gelvolum | mL |
%T er total akrylamidkonsentrasjon, %C er andelen kryssbinder [Proteinkarakterisering del 1 m notater.pdf, slide 34; chromatographgy_basics_part2.pdf, p. 130–131].

### Oppløsning i sonelektroforese
$$R_s = \sqrt{N}\,\frac{\Delta u}{4\bar{u}}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $N$ | platetall | – |
| $\Delta u$ | $u_1 - u_2$ | m/s |
| $\bar{u}$ | gjennomsnitt av $u_1$ og $u_2$ | m/s |
Båndene er tilnærmet Gauss-formet [chromatographgy_basics_part2.pdf, p. 133, lign. 6.3].

## Worked example
**H24 oppg. 2(a): generelle prinsipper for elektroforese** (5 p) [Eksamen_IMAK2008_24.pdf, oppg. 2(a); LF eksamen H2024 IMAK2008.pdf, p. 10–11]
1. **Prinsipp:** Separasjon av molekyler med et elektrisk felt. DNA, RNA eller proteiner beveger seg gjennom en porøs gel (agarose eller polyakrylamid).
2. **Ladning:** Molekylene vandrer mot elektroden med motsatt ladning. DNA og RNA (negative pga. fosfatgruppene) går mot anoden (+), og positive molekyler mot katoden (−).
3. **Størrelse:** Mindre molekyler går raskere gjennom porene, mens større møter mer motstand. Det gir størrelsesbasert separasjon.
4. **Feltet:** Kraften er proporsjonal med ladning og feltstyrke: $F = qE$, med $E = V/L$. Ionene akselererer til de bremses av friksjon, og den elektroforetiske mobiliteten beskriver hvor raskt et ion beveger seg. Ulik størrelse og form gir ulik mobilitet. Sterkere felt gir raskere separasjon, men kan gi overoppheting eller forvrengte bånd.
5. **Gelen:** Gelen er et fysisk medium som bremser molekylene etter størrelse. Agarose brukes for store molekyler (DNA), polyakrylamid for mindre molekyler (proteiner).

## Faded example
**Gelsammensetning og metodevalg** [chromatographgy_basics_part2.pdf, p. 131; Øving elektroforese med LF.pdf, p. 1]

*Del A: En gel lages av 19 g akrylamid + 1 g bisakrylamid.*
1. %C: $b/(a+b) = 1/20 \times 100\,\% = 5\,\%$.
2. **(try)** Boka oppgir %T = 8 %. Hvilket gelvolum m gir det? → $(19+1)/m = 0{,}08$, så m = 250 mL.
3. **(try)** Økes %T, blir porene større eller mindre, og hva skjer med store proteiner? → Mindre porer, og store proteiner bremses mer.

*Del B: Øving oppg. 1. Et ukjent protein fra blodplasma: bestem molekylvekt og pI.*
4. **(try)** Metode for molekylvekt? → SDS-PAGE (omtrentlig, mot standard) eller MS (langt mer presis).
5. **(try)** Metode for pI? → Isoelektrisk fokusering (IEF).
6. **(try)** Én begrensning ved hver? → SDS-PAGE gir ikke identitet, IEF gir ikke molvekt (og proteiner med lik pI er vanskelige å skille), MS er kostbart og krever kompetanse.

## Exam traps
- **Bare «ladning»**: H24 2(a) forventer ladning, størrelse, feltstyrke og gelens rolle, helst med $F = qE$ og mobilitet [LF eksamen H2024 IMAK2008.pdf, p. 10–11].
- **Ubegrenset spenning**: Varmen øker med i², og temperaturgradienter gir båndspredning [Proteinkarakterisering del 1 m notater.pdf, slide 25].
- **Agarose og polyakrylamid forveksles**: Agarose har store porer, er horisontal og brukes mest for DNA/RNA og veldig store proteiner. Polyakrylamid har små, justerbare porer, er vertikal og dekker proteiner på 5–250 kD [Proteinkarakterisering del 1 m notater.pdf, slide 33–35].
- **%T og %C forveksles**: %T er total akrylamid (a+b) per volum, %C er andelen kryssbinder av totalen [chromatographgy_basics_part2.pdf, p. 130–131].
- **Elektroforese = kromatografi**: Det er ingen mobil eller stasjonær fase i elektroforese, men soneelektroforese *kan sammenlignes* med kromatografi [chromatographgy_basics_part2.pdf, p. 130; Proteinkarakterisering del 1 m notater.pdf, slide 28].
- **Temperatureffekt**: Lavere viskositet ved høyere T gir høyere u etter ligningen. Bokas tekst sier det motsatte, så stol på ligningen og forklar [chromatographgy_basics_part2.pdf, p. 128].

## Past exam tasks
- **H2024 oppg. 2(a)** (5 p): forklar de generelle prinsippene for elektroforese.
- **H2025 oppg. 9** (5 p, automatisk rettet): koble utsagn til metode (CE, SDS-PAGE, IEF, 2D, immunologisk elektroforese). Løsningsforslaget gir ingen fasit. Utsagnene fordeles på sidene 20–26.

## Test yourself
**Q:** Utled migreringshastigheten fra kraftbalansen.
**A:** Ved konstant hastighet er $qE = 6\pi\eta r u$, så $u = qE/6\pi\eta r$ [Proteinkarakterisering del 1 m notater.pdf, slide 22].

**Q:** Hva er elektroforesebufferens tre oppgaver?
**A:** Forflytte applisert prøve, lede strømmen og stabilisere pH [Proteinkarakterisering del 1 m notater.pdf, slide 18].

**Q:** Hvilke stoffer brukes for å starte og katalysere polymeriseringen av polyakrylamid?
**A:** Ammoniumpersulfat (initiator) og TEMED (katalysator), med N,N'-metylenbisakrylamid som kryssbinder [Proteinkarakterisering del 1 m notater.pdf, slide 34].

**Q:** Hvorfor brukes lavspennings-elektroforese for store molekyler?
**A:** Store molekyler har lave diffusjonskoeffisienter, så lang analysetid gir lite longitudinal diffusjon, og lav spenning gir mindre varme og enklere utstyr [chromatographgy_basics_part2.pdf, p. 133].

**Q:** Hva er forskjellen på en kinetisk prosess og en likevektsprosess i elektroforese? Gi ett eksempel på hver.
**A:** Kinetisk: komponentene vandrer med ulik hastighet hele tiden (soneelektroforese). Likevekt: komponentene stopper der de er nøytrale (IEF) [Proteinkarakterisering del 1 m notater.pdf, slide 28; chromatographgy_basics_part2.pdf, p. 130].

## Sources
- [Proteinkarakterisering del 1 m notater.pdf, slide 13–36, 38]
- [chromatographgy_basics_part2.pdf, p. 127–133] (p. = boksidetall; PDF-side = bokside − 84)
- [Øving elektroforese med LF.pdf, p. 1]
- [Eksamen_IMAK2008_24.pdf, oppg. 2(a)] / [LF eksamen H2024 IMAK2008.pdf, p. 10–11]
- [IMAK2008 eksamen H2025.pdf, oppg. 9]
