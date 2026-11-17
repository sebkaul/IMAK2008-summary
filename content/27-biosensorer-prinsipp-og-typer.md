---
slug: 27-biosensorer-prinsipp-og-typer
title: "Biosensorer: prinsipp, bioreseptorer, transdusere og klassiske typer"
topic: biosensorer
exam_weight: medium
exam_weight_note: "H24 3(a) i–iii (del av 6 p: hvilken sensor bruker enzymer, bioreseptor, transduser) og 3(b) (4 p, fyll inn: cellebasert vs. enzymsensor). H25 oppg. 14 (5 p: fordeler og ulemper med cellebaserte sensorer). SPR-delen (H24 3a iv, H25 15) er på side 28"
builds_on: [23-immunelektroforese, 22-geldeteksjon-og-western-blot]
used_in: [28-spr-fet-aunp]
sources: ["hele dokbio261016.pdf", "Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** Hvilke to hovedkomponenter består en biosensor av?
**A:** En bioreseptor (biologisk gjenkjenningselement) og en transduser (detektor) som omdanner gjenkjenningen til et målbart signal. De to er integrert i én enhet [hele dokbio261016.pdf, p. 54; Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 157].

**Q:** Hvilken del av biosensoren er ansvarlig for selektiviteten?
**A:** Bioreseptoren [hele dokbio261016.pdf, p. 55].

**Q:** Har cellebaserte sensorer kortere eller lengre responstid enn enzymsensorer, og hvorfor?
**A:** Lengre, på grunn av lang diffusjonsvei inn i cellen [LF eksamen H2024 IMAK2008.pdf, oppg. 3b; Løsningsforslag IMAK2008 H25.pdf, oppg. 14].

## Mental model
En biosensor er en «biologisk nese» koblet til et måleinstrument [hele dokbio261016.pdf, p. 54–55]:
- **Bioreseptoren** (enzym, antistoff, DNA, celle eller vev) gjenkjenner én bestemt analytt og står for selektiviteten.
- **Transduseren** (elektrode, optikk, krystall eller termistor) gjør bindingen eller reaksjonen om til et elektrisk eller optisk signal.

Det særegne er at de to er bygd sammen. Bioreseptoren er immobilisert tett på transduseren, så man måler direkte i prøven uten reagenser og rensetrinn. Det gjør biosensorer enkle og raske [hele dokbio261016.pdf, p. 54].

Valget av bioreseptor er en avveining mellom spesifisitet og robusthet:
- **Isolerte enzymer** er spesifikke og raske, men dyre (rensetrinn) og ustabile utenfor cellen, og trenger ofte kofaktorer.
- **Hele celler** er billige og robuste, fordi enzymene sitter i sitt naturlige miljø. De reagerer tregere (diffusjon) og er mindre spesifikke, fordi cellen har mange enzymer («multireseptor») [hele dokbio261016.pdf, p. 60; LF eksamen H2024 IMAK2008.pdf, oppg. 3b].

## Concepts and definitions
- **Biosensor**: Enhet der et biologisk gjenkjenningselement er tett bundet til eller integrert med transduseren. Den bruker en biologisk eller biokjemisk komponent til å påvise kvantitative og kvalitative verdier [hele dokbio261016.pdf, p. 54].
  - Måler ønsket analytt uten reagenser, i motsetning til tradisjonelle assays med mange trinn. Hovedfordelene er at de er enkle og raske.
  - Biologiske reaksjoner omdannes f.eks. til elektrisk strøm [p. 53].
  - Moderne mål: høy sensitivitet, høy selektivitet, rask respons og lav deteksjonsgrense [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 157].
- **Bruksområder**: Medisin, industriell mikrobiologi, miljøovervåking og militært. Eksempler er glukose, eddiksyre, glutaminsyre, etanol, BOD, komponenter i øl, smaksstoffer i mat og biofilm. Immunokjemiske sensorer detekterer patogener, herbicider, toksiner, proteiner og DNA. Over 60 sensorer finnes for ca. 120 analyser [hele dokbio261016.pdf, p. 53].
- **Historikk**: Startet i 1962 med Leland C. Clarks enzymelektrode (glukose) [hele dokbio261016.pdf, p. 54]. Clark og Lyons fanget et tynt lag glukoseoksidase (GOD) bak en glukosepermeabel membran på en oksygenelektrode og målte O₂-forbruket [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 158].
- **Konstruksjon, trinn** [hele dokbio261016.pdf, p. 54]: Først bestemmes analytten, deretter:
  1. Passende bioreseptor.
  2. Immobiliseringsmetode.
  3. Transduser.
  4. Måleområde, linearitet og minimering av forstyrrelser.
  5. Pakking. En kommersiell sensor må i tillegg møte generelle krav.
- **Bioreseptor (biologisk materiale)** [hele dokbio261016.pdf, p. 55]:
  - Biomolekyl som gjenkjenner målanalytten, binder den, og så skjer en biokjemisk reaksjon. **Ansvarlig for sensorens selektivitet.**
  - Enzymer er mest brukt. Andre er vev, mikroorganismer, organeller, cellereseptorer, antistoffer, nukleinsyrer og genmanipulerte mikroorganismer.
  - Enzymer, antistoffer og DNA gjenkjenner selektivt og immobiliseres på sensorsubstratet [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 157].
- **Immobilisering**: Hovedkrav er at bioreseptoren immobiliseres i nærheten av transduseren. Metodene er **membraninnkapsling, fysisk adsorpsjon, matriksinnkapsling og kovalent binding**. Bare små mengder trengs, og de kan brukes gjentatte ganger [hele dokbio261016.pdf, p. 55–56].
- **Transduser (detektor)**: Omdanner den biokjemiske reaksjonen til et målbart elektrisk signal, f.eks. ved å måle endringer under reaksjonen. Signalet kan behandles videre (mikroprosessor, forsterker). De første biosensorene brukte pH-, O₂- og ioneselektive elektroder [hele dokbio261016.pdf, p. 56].
- **Vanlige transdusere (tabell 5-1)** [hele dokbio261016.pdf, p. 57]:

  | Transduser | Eksempler | Prinsipp |
  |---|---|---|
  | Elektrokjemisk: amperometrisk | Clark O₂-elektrode, medierte elektrodesystemer | Måler strømmen fra elektroner frigjort i redoksreaksjoner |
  | Elektrokjemisk: potensiometrisk | Redokselektroder, ioneselektive elektroder, felteffekttransistorer (FET), lysadresserte potensiometriske sensorer | Detekterer endringer i konsentrasjonen av valgte ioner (f.eks. H⁺) |
  | Elektrokjemisk: konduktometrisk | Pt- eller Au-elektroder | Måler endringer i løsningens ledningsevne fra iongenerering |
  | Optisk | Fotodioder, bølgelengdesystemer, integrerte optiske sensorer | Konsentrasjon via absorpsjon, kjemiluminescens, fluorescens osv. |
  | Akustisk/(optisk) | Piezoelektriske krystaller, overflateakustiske enheter | Piezoelektrisitet: krystaller (f.eks. kvarts) under mekanisk trykk |
  | Kalorimetrisk | Termistor (termofil sjelden) | Måler entalpiendring i enzymreaksjon som temperaturendring. Termistorens resistans avtar når temperaturen øker |

  Kap 4.2 oppsummerer elektrokjemisk transduksjon som endring i strøm (amperometrisk), potensial (potensiometrisk) eller ledningsevne (konduktometrisk) [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 158].

**Klassifisering etter biologisk element**

- **Enzymsensorer** [hele dokbio261016.pdf, p. 58–60; Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 158]:
  - Isolerte enzymer immobiliseres nær elektroden, og ved gjenkjenning dannes ES-kompleks på sensoroverflaten. **De fleste er elektrokjemiske.**
  - **Glukosesensor** (mest kjent, glukose i blod): glukoseoksidase immobiliseres via dialysemembran. Glukose + O₂ → glukonsyre + H₂O₂. Tre mulige transdusere: O₂-sensor (O₂-forbruk), pH-sensor (glukonsyre) eller peroksidsensor (H₂O₂ på Pt-elektrode). Responstid ca. 1 min med O₂-elektrode. Membransystemet ekskluderer forstyrrende forbindelser.
  - **Penicillinsensor**: penicillinase i polyakrylamidgel på pH-elektrode. Måler [H⁺] fra penicillinsyre. Respons 15–30 s. Brukes i fermenteringsløsninger.
  - **Ureasensor**: urease hydrolyserer urea til ammonium, på pH- eller NH₃-elektrode eller konduktometer. Klinisk viktig (nyresvikt, kunstige nyrer).
  - **Kolesterolsensor**: kolesterolesterase gir kolesterol + fettsyrer, og kolesteroloksidase (på nylonmembran, O₂-sensor) gir H₂O₂. Normalt serum er 3,1–6,7 mmol/L.
- **Cellebaserte sensorer: mikrobielle** [hele dokbio261016.pdf, p. 60–61]:
  - Celler immobiliseres på elektroden med membran (amperometrisk eller potensiometrisk).
  - **Fordeler fremfor enzymsensorer**: billigere produksjon, høyere katalytisk aktivitet, økt stabilitet og lengre levetid (kan regenereres i vekstmedium).
  - **Ulemper**: dårligere selektivitet (mange enzymer gir *multireseptor-oppførsel*) og lengre gjenvinningstid mellom analyser (mange celler gir diffusjonsproblemer). Det er ikke et problem for engangssensorer.
  - Bruk: medisinsk diagnostikk (intensiv, ved sengen), miljø (vannforurensning, kloakk), matkvalitet, prosesskontroll i kjemisk og farmasøytisk industri, og legemiddeldeteksjon.
  - **Etanolsensor (1975, første cellebaserte)**: *Acetobacter xylinum* (etanol + O₂ → eddiksyre + H₂O) bak gasspermeabel membran på O₂-elektrode. O₂-forbruket ∝ [etanol].
  - **NO₂-sensor**: nitrittoksiderende bakterier mellom teflonmembraner på O₂-elektrode (2NO₂⁻ + O₂ → 2NO₃⁻). Økende aktivitet opp til 30 °C, avtakende over.
- **Vevsbaserte sensorer** [hele dokbio261016.pdf, p. 61]: plante- eller dyrevev med flere enzymer, det nyeste tilskuddet. Eksempel: L-askorbinsyre med agurkvev (askorbinsyreoksidase) på amperometrisk sensor. Sammenlignbar med HPLC, 60 analyser uten endring, og ingen dyre rensetrinn.
- **Immunosensorer** [hele dokbio261016.pdf, p. 61–62]:
  - Antistoff eller antigen immobiliseres som bioreseptor, og Ag eller Ast er analytt. Binding gir Ag-Ast immunkompleks.
  - Utmerkede deteksjonsgrenser med små prøvevolum (elektrokjemiske). Aktuelt for pesticider i felt, som alternativ til HPLC, GC, MS og TLC.
  - **Merket**: enzym, radioisotop, fluorescens eller kjemiluminescens på Ag* (eller Ast*). Med enzymmerking kombineres sensoren med ELISA-prinsippet.
  - **Umerket**: dannelsen av immunkomplekset på transduserflaten detekteres direkte som fysisk (elektrisk eller optisk) endring. Rask og lite reagens. (SPR er et eksempel, se side 28.)
  - Høy følsomhet, «ettersom antistoffer er mer stabile enn enzymer».
- **Reportergen**: I moderne cellebaserte biosensorer settes det gjerne inn et reportergen, slik at cellene produserer «synlige signaler» [LF eksamen H2024 IMAK2008.pdf, oppg. 3b; Løsningsforslag IMAK2008 H25.pdf, oppg. 14].

**Konvensjonelle bioanalytiske teknikker (kap 4.2.1)**
- **ELISA (enzyme-linked immunosorbent assay)**: gullstandarden for proteinmengde (Perlmann og Schuurs, 1971). Kompleks mellom analytt og enzymkonjugert antistoff, og enzymreaksjonen gir signal. Typisk peroksidase med fargesubstrat (ABTS, TMB) [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 159].
  - **Direkte ELISA**: analytten adsorberes fysisk på mikroplaten og bindes av enzymkonjugert Ast. Ulempe: uspesifikk adsorpsjon, hemmet av serumproteiner (albumin, fibrinogen).
  - **Sandwich-ELISA**: primært Ast på platen fanger analytten, et spesifikt Ast gir Ast–analytt–Ast-sandwich, og et enzymkonjugert sekundært Ast binder Fc-regionen. Dyrere og mer komplisert, men nyttig for proteiner i lave mengder.
- **qPCR** [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 160]:
  - Interkalator (SYBR Green) gir fluorescens ∝ dsDNA-produkt, og kvantifisering skjer med standardkurve.
  - Probe-metode: fluorofor og quencher på hver ende. Ved hybridisering kutter Taq-polymerasen (3′→5′-eksonukleaseaktivitet) proben, og fluoroforen frigjøres og lyser. Høy spesifisitet.
- **DNA-mikromatrise** [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 160–161]:
  - Kjente DNA-fragmenter tett på glass. Hybridisering med Cy3/Cy5-merket cDNA (fra mRNA ved revers transkripsjon), skanning, og identifisering av opp- og nedregulerte gener.
  - Ulemper: dårlig korrelasjon med qPCR og krever mye prøve (forbedret med RNA-amplifisering). Kompliserte og kostbare protokoller.

## Visuals
- **Biosensorens oppbygging** · blokkdiagram [hele dokbio261016.pdf, p. 53, fig. 5-1; Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 158, fig. 4.2.1]
  - Prøve med analytt + forstyrrende stoffer → bioreseptor (bare analytten binder) → transduser → signalbehandling (forsterker, mikroprosessor) → display.
- **Bioreseptor × transduser-matrise** · rutenett [hele dokbio261016.pdf, p. 55, fig. 5-2; p. 57, tabell 5-1]
  - Rader: enzym, antistoff, nukleinsyre, celle, vev og organell/reseptor. Kolonner: amperometrisk, potensiometrisk, konduktometrisk, optisk, piezoelektrisk og kalorimetrisk.
  - Merk kjente kombinasjoner: glukose–GOD–amperometrisk O₂ eller H₂O₂, penicillin–penicillinase–pH, etanol–*Acetobacter*–O₂, askorbinsyre–agurkvev–amperometrisk.
- **Fire immobiliseringsmetoder** · fire panel [hele dokbio261016.pdf, p. 56, fig. 5-3]
  - Membraninnkapsling (bioreseptor bak membran), fysisk adsorpsjon (på overflaten), matriksinnkapsling (fanget i gel) og kovalent binding (lenker til overflaten).
- **Clarks glukosesensor** · tverrsnitt [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 159, fig. 4.2.2; hele dokbio261016.pdf, p. 59, fig. 5-5]
  - Prøve → ytre membran → GOD-lag (glukose + O₂ → glukonsyre + H₂O₂) → indre membran (slipper bare H₂O₂ eller O₂ gjennom) → Pt- eller O₂-elektrode → strøm → forsterker.
- **Direkte vs. sandwich-ELISA** · to panel [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 160, fig. 4.2.3]
  - (a) Mikroplate med adsorbert analytt og enzymkonjugert Ast. (b) Fangst-Ast på plate, analytt, deteksjons-Ast, og enzymkonjugert sekundært Ast på Fc, med fargeomslag.
- **Cellebasert vs. enzymsensor** · sammenligningstabell [hele dokbio261016.pdf, p. 60; LF eksamen H2024 IMAK2008.pdf, oppg. 3b; Løsningsforslag IMAK2008 H25.pdf, oppg. 14]
  - Rader: kostnad, stabilitet/levetid, responstid, spesifisitet, kofaktorbehov og signal.
  - Cellebasert: billig, stabil og lang levetid, lang respons (diffusjon), lavere spesifisitet (multireseptor), har egne kofaktorer, reportergen.
  - Enzymsensor: dyrere (isolering), kan være ustabil (tatt ut av naturlig miljø), kort respons, høy spesifisitet, krever ofte kofaktorer.
- > Ingen interaktiv graf: kursfilene har ingen kalibreringsdata eller kurveverdier for biosensorene.

## Equations
### Reaksjonsligningene sensorene bygger på
$$\text{Glukose} + \mathrm{O_2} \xrightarrow{\text{glukoseoksidase}} \text{glukonsyre} + \mathrm{H_2O_2}$$
$$\text{Etanol} + \mathrm{O_2} \xrightarrow{\textit{Acetobacter xylinum}} \text{eddiksyre} + \mathrm{H_2O}$$
$$2\,\mathrm{NO_2^-} + \mathrm{O_2} \xrightarrow{\text{nitrittoksiderende bakterier}} 2\,\mathrm{NO_3^-}$$
$$\text{L-askorbinsyre} + \mathrm{O_2} \xrightarrow{\text{askorbinsyreoksidase (agurkvev)}} \text{dehydroaskorbat} + \mathrm{H_2O}$$

| Symbol | Meaning | Unit |
|---|---|---|
| O₂ | forbrukes. Måles med Clark O₂-elektrode (amperometrisk) | mol L⁻¹ |
| H₂O₂ | dannes. Måles med peroksidsensor (Pt-elektrode) | mol L⁻¹ |
| glukonsyre / H⁺ | dannes. Måles med pH-elektrode (potensiometrisk) | – |

Signalet er proporsjonalt med analyttkonsentrasjonen innenfor sensorens lineære område [hele dokbio261016.pdf, p. 58–61]. Kursfilene gir ingen kalibreringsligninger.

## Worked example
**H24 oppg. 3(a) i–iii: flervalg om biosensorer** (del av 6 p) [Eksamen_IMAK2008_24.pdf, oppg. 3a; fasit: LF eksamen H2024 IMAK2008.pdf, oppg. 3a]
1. *i) Hvilken type biosensor bruker enzymer som bioreseptorer?* De fleste enzymbaserte biosensorer er elektrokjemiske [hele dokbio261016.pdf, p. 58]. → **Elektrokjemiske biosensorer** (fasit).
2. *ii) Hva er en bioreseptor?* Et biomolekyl som gjenkjenner målanalytten [p. 54]. → **En komponent som binder til en spesifikk analytt** (fasit). Distraktoren «omdanner biologisk signal til elektrisk signal» beskriver transduseren.
3. *iii) Hovedfunksjonen til transduseren?* Transduseren oversetter gjenkjenningsreaksjonen til et målbart signal [p. 54, 56]. → **Å omdanne det biologiske signalet til et målbart signal** (fasit).

**H24 oppg. 3(b): fyll inn** (4 p, feil gir minuspoeng) [Eksamen_IMAK2008_24.pdf, oppg. 3b; fasit: LF eksamen H2024 IMAK2008.pdf, oppg. 3b]
4. «Cellebaserte biosensorer har **lengre** responstid enn f.eks. en enzymsensor, og de vil være **mindre** spesifikke pga. **lang** diffusjonsvei for analytten.»
5. «I moderne cellebaserte biosensorer settes det gjerne inn et **reportergen** for at cellene skal kunne produsere synlige signaler.»
6. «Enzymsensorer vil være **dyrere** enn cellebaserte pga. isoleringstrinn. Ulempe med enzymsensorer er at enzymer kan være **ustabile** fordi de er **tatt ut av sitt naturlige miljø**, og at mange enzymer krever **kofaktorer** som også blir involvert i prosessen.»
7. Ubrukte ord (feller): kortere, kort, billig, stabil, protein, «er i sitt naturlige miljø».

## Faded example
**H25 oppg. 14: fordeler og ulemper med cellebaserte sensorer vs. enzymbaserte** (5 p) [IMAK2008 eksamen H2025.pdf, oppg. 14; Løsningsforslag IMAK2008 H25.pdf, oppg. 14]
1. *Fordel 1, kostnad*: billige, fordi celler er lettere å isolere enn individuelle cellekomponenter.
2. **(try)** *Fordel 2, robusthet og levetid?* → Enzymene og elementene er beskyttet i sitt naturlige miljø i cellen. De tåler større endringer i miljøfaktorer, og det gir lengre levetid. Cellene kan også regenereres i vekstmedium [hele dokbio261016.pdf, p. 60].
3. **(try)** *Fordel 3, aktivitet?* → Høyere katalytisk aktivitet og økt stabilitet [hele dokbio261016.pdf, p. 60].
4. **(try)** *Ulempe 1, tid?* → Økt responstid på grunn av lang diffusjonsvei inn i cellen, og lengre gjenvinningstid mellom analyser.
5. **(try)** *Ulempe 2, spesifisitet?* → Dårligere. Cellen har mange enzymer, som gir multireseptor-oppførsel.
6. **(try)** *Hvordan får man et målbart signal fra cellen?* → Reportergen i genmanipulerte celler.

## Exam traps
- **Bioreseptor vs. transduser**: Bioreseptoren *binder* analytten og gir selektiviteten. Transduseren *omdanner* til målbart signal. H24 3a bruker nettopp disse som distraktorer for hverandre [hele dokbio261016.pdf, p. 54–55; LF eksamen H2024 IMAK2008.pdf, oppg. 3a].
- **Enzymsensor = elektrokjemisk** (oftest), ikke «termisk» eller «immunosensor» [hele dokbio261016.pdf, p. 58].
- **Cellebasert er *billigere*, men *tregere* og *mindre spesifikk*.** Bytter du om på dyrere og billigere i 3(b), gir det minuspoeng [LF eksamen H2024 IMAK2008.pdf, oppg. 3b].
- **Enzymer er ustabile fordi de er *tatt ut* av sitt naturlige miljø**, ikke fordi de «er i» det (distraktor i 3b).
- **Kofaktorer** er en ulempe for *enzymsensorer*. Celler har sine egne [LF eksamen H2024 IMAK2008.pdf, oppg. 3b].
- **Glukosesensoren kan lese tre ting**: O₂-forbruk, syre (pH) eller H₂O₂. Ikke bare én [hele dokbio261016.pdf, p. 58].
- **Merket vs. umerket immunosensor**: Merket bruker enzym, fluorescens eller radioisotop (ELISA-prinsipp). Umerket måler fysisk endring direkte (f.eks. SPR) [hele dokbio261016.pdf, p. 62].
- **Direkte vs. sandwich-ELISA**: Direkte har problemer med uspesifikk adsorpsjon. Sandwich er dyrere, men egnet for lave proteinmengder [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 159].

## Past exam tasks
- **H2024 oppg. 3(a) i–iii** (del av 6 p): enzym som bioreseptor gir elektrokjemisk sensor. Bioreseptor binder spesifikk analytt. Transduser omdanner til målbart signal. Fasit i LF. Del iv (SPR) er på side 28.
- **H2024 oppg. 3(b)** (4 p): fyll inn, cellebasert vs. enzymsensor. Fasit i LF.
- **H2025 oppg. 14** (5 p): fordeler og ulemper med cellebaserte sensorer. Fullt LF.

## Test yourself
**Q:** Nevn fire immobiliseringsmetoder for bioreseptoren.
**A:** Membraninnkapsling, fysisk adsorpsjon, matriksinnkapsling og kovalent binding [hele dokbio261016.pdf, p. 55].

**Q:** Hvilke tre elektrokjemiske transdusertyper finnes, og hva måler de?
**A:** Amperometrisk (strøm fra redoks), potensiometrisk (potensial eller ionekonsentrasjon, f.eks. H⁺) og konduktometrisk (ledningsevne) [hele dokbio261016.pdf, p. 57; Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 158].

**Q:** Hvorfor er en vevsbasert askorbinsyresensor billigere enn en sensor med isolert askorbinsyreoksidase?
**A:** Enzymrikt plantevev (agurk) eliminerer behovet for dyre og mange rensetrinn [hele dokbio261016.pdf, p. 61].

**Q:** Hva er forskjellen på direkte og sandwich-ELISA?
**A:** I direkte ELISA adsorberes analytten på platen og bindes av enzymkonjugert Ast. I sandwich fanges analytten av et primært Ast på platen, bindes av et spesifikt Ast, og detekteres med et enzymkonjugert sekundært Ast mot Fc [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 159].

**Q:** Hvordan virker probe-metoden i qPCR?
**A:** Proben har fluorofor og quencher. Når den hybridiserer, kuttes den av Taq-polymerasens eksonukleaseaktivitet, fluoroforen skilles fra quencheren og fluorescerer, og signalet øker med produktet [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 160].

## Sources
- [hele dokbio261016.pdf, p. 53–62] (kap. 5. p. = trykt sidetall; PDF-side = trykt side + 5)
- [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 157–161] (p. = boksidetall; PDF-side = bokside − 156)
- [Eksamen_IMAK2008_24.pdf, oppg. 3a, 3b] / [LF eksamen H2024 IMAK2008.pdf, oppg. 3a, 3b]
- [IMAK2008 eksamen H2025.pdf, oppg. 14] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 14]
