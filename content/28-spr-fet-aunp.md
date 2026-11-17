---
slug: 28-spr-fet-aunp
title: "Moderne biosensorer: SPR, FET og gullnanopartikler (AuNP)"
topic: biosensorer
exam_weight: medium
exam_weight_note: "H24 3(a) iv (del av 6 p: riktige påstander om SPR). H25 oppg. 15 (3 p: SPR-transduser og åtte SPR-utsagn, automatisk rettet uten fasit). Ingen eksamensoppgaver om FET eller AuNP-kolorimetri utover AuNP i SPR"
builds_on: [27-biosensorer-prinsipp-og-typer, 23-immunelektroforese]
used_in: []
sources: ["Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf", "hele dokbio261016.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** Hva måler en SPR-sensor egentlig?
**A:** Endringer i permittivitet (brytningsindeks) nær gulloverflaten på sensorchipen, når analytt binder til eller dissosierer fra immobiliserte ligander. Det avleses som en forskyvning av resonansvinkelen [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 161].

**Q:** Krever SPR merking av analytten?
**A:** Nei. SPR karakteriserer bindingsreaksjoner i sanntid uten merking [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 161].

**Q:** Hvorfor blir en AuNP-løsning blå når partiklene aggregerer?
**A:** Plasmonkobling mellom partiklene rødforskyver SPR-absorpsjonsmaksimum, og fargen går fra rød til blå [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 171].

## Mental model
Alle tre teknikkene er *umerkede* transdusere. De registrerer bindingen direkte som en fysisk endring på eller nær en overflate (jf. «umerket immunosensor») [hele dokbio261016.pdf, p. 62]:
- **SPR** (optisk): lys reflekteres fra en tynn gullfilm under en prisme. Ved én bestemt vinkel kobles lyset til elektronsvingningene i gullet, og refleksjonen faller. Binder molekyler seg på gullet, endres brytningsindeksen ved overflaten, og vinkelen forskyves [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 161–162].
- **FET** (elektrisk): bindingen endrer *ladningen* på gate-elektroden, og det endrer strømmen gjennom transistorkanalen [p. 168].
- **AuNP** (optisk og kolorimetrisk): bindingen får gullpartikler til å klumpe seg eller løse seg opp, og fargen skifter fra rød til blå eller omvendt [p. 171].

Hovedbegrensningen er den samme for alle: signalet kommer bare fra en tynn sone ved overflaten. SPR ser < 300 nm. FET ser bare innenfor Debye-lengden (noen få nm), og SPR gir lite signal for små molekyler (Mw < 5000). Forbedringene i kurset handler derfor om å forsterke signalet med AuNP-«merker» og sandwich, eller om å fylle sonen smartere med hydrogellag av optimal tykkelse, molekylær preging og responsive geler [p. 162–164, 169–171].

## Concepts and definitions
**Surface Plasmon Resonance (SPR)**
- **Prinsipp**: Konvensjonelle SPR-sensorer detekterer endringer i permittivitet nær gulloverflaten på sensorchipen, forårsaket av binding eller dissosiasjon av analytt til ligander på overflaten. Signalet er en **forskyvning av resonansvinkelen** [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 161].
- **Oppsett (fig. 4.2.5)**: Innfallende lys gjennom prisme mot sensorchip, reflektert lys til detektor, og analytt i flowcelle over chipen. Plott av reflektans mot vinkel har et minimum, og minimum flyttes mot høyere vinkel med analytt [p. 162].
- **Egenskaper**:
  - Mest brukt som sensitivt og *kvantitativt* verktøy for å følge bindinger og dynamiske interaksjoner mellom biomolekyler.
  - Gir **sanntid** uten **merking**. Instrumenter og funksjonelle chips er kommersielt tilgjengelige.
  - Brukes i kjemi, biologi, medisin, matvitenskap og miljøanalyse. Egnet til å måle **bindingskonstanter** for makromolekyler (antistoffer, proteiner, DNA, RNA, polysakkarider) [p. 161–162].
- **Transdusertype**: optisk (resonansvinkel og brytningsindeks) [p. 161; hele dokbio261016.pdf, p. 57].
- **Begrensninger** [p. 162–163]:
  - Resonansvinkelskiftet er **proporsjonalt med massen** som binder til overflaten. Analytter med **Mw < 5000** gir derfor ofte for liten brytningsindeksendring.
  - Ligandmengden er begrenset av det todimensjonale arealet, fordi standard aminkobling binder ligandene direkte til overflaten.
  - SPR detekterer bare permittivitetsendringer **innenfor < 300 nm** fra gulloverflaten.
  - Biomolekylære ligander har dårlig kjemisk og fysisk stabilitet (syre, base, høy temperatur) [p. 164].
- **Strategier for økt sensitivitet** [p. 162–164]:
  1. **«Merking» med høy-Mw- eller høy-brytningsindeks-agenter**, f.eks. **AuNP**:
     - hIgG–AuNP-kompleks binder anti-hIgG på chipen og gir **ca. 15 ganger** økt sensitivitet.
     - **Sandwich-ELISA-lignende**: hIgG binder først chipen, deretter AuNP konjugert med sekundært anti-hIgG. Gir **ca. 25 ganger** økt sensitivitet.
     - Forsterkningen skyldes sterk optisk kobling mellom Au-filmen og AuNP. Fungerer også for inhiberingsanalyser.
     - Lateks- og polyakrylamid-hydrogelmikrosfærer virker på samme måte.
  2. **Mer ligand per areal**: polymerbørster eller tynne hydrogellag med ligander, laget med **SI-ATRP** (overflateinitiert atomoverførings-radikalpolymerisasjon, kontrollert/«levende» polymerisasjon).
     - Lagtykkelsen styres med polymerisasjonstiden. Et 3D antistoff-hydrogellag gir større skift enn direkte immobilisert antistoff.
     - **Skiftet øker opp til ca. 225 nm** lagtykkelse og faller ved tykkere lag, til nivå med direkte immobilisert chip, fordi endringer langt fra gullet ikke registreres (< 300 nm-grensen). Det finnes altså en **optimal tykkelse**.
  3. **Molekylært pregede lag (molecular imprinting)** [p. 164–167]:
     - Polymeriserbare funksjonelle grupper ordnes rundt et templatmolekyl, kopolymeriseres med mye tverrbinder, og templatet ekstraheres. Igjen står et komplementært hulrom (fig. 4.2.8).
     - Stabilt mot temperatur og pH, i motsetning til biomolekylære ligander.
     - Eksempler:
       - Lai et al. (1998): teofyllin-, koffein- og xantinpregede polymerer på **sølvfilm**. God linearitet mellom konsentrasjon og vinkelskift, og nesten ingen kryssgjenkjenning.
       - Proteiner krever lett tverrbundne **pregede hydrogeler**. AFP-preget hydrogel (lektin ConA + anti-AFP) **krymper** med økende [AFP] fordi lektin–AFP–antistoff-«sandwicher» virker som dynamiske tverrbindinger. Ikke-preget hydrogel sveller bare litt.
       - ConA-preget hydrogellag (GEMA-ligand, SI-ATRP) gir mye større skift og høyere affinitetskonstant enn ikke-preget lag.
- **Sensorchip-metall**: gull i konvensjonelle chips, sølvfilm i Lais pregede chips [p. 161, 165].
- **Ikke i kursfilene**: at «et plasmon er en kvasipartikkel» (fasitsvar på H24 3a iv).
  > GAP: definisjonen av et plasmon som kvasipartikkel står ikke i noen kursfil, bare som riktig alternativ i LF H24.

**Felteffekttransistor-baserte biosensorer (FET)** [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 168–171]
- **Bakgrunn**: Nanoteknologi gir miniatyrisering og integrasjon, som muliggjør **POCT** (point-of-care testing) med høy sensitivitet og enkel håndtering.
- **Oppbygning**: source-, drain- og gate-elektrode. Et elektrisk felt styrer ledningsevnen i source–drain-«kanalen» i en halvleder. Ledningsevnen avhenger av potensialendringer på gate-elektroden (fig. 4.2.11: Si-substrat, gate-isolator, vandig løsning og referanseelektrode).
- **ISFET (ionesensitiv FET)** er den mest grunnleggende og mest studerte.
- **Prinsipp**: Gate-elektroden modifiseres med enzymer, antistoffer eller DNA. Biogjenkjenning endrer overflateladningstettheten, og **V_DS–I_D-kurven forskyves langs spenningsaksen** i forhold til [analytt]. Ladningsbærertettheten er følsom for feltet vinkelrett på gate-overflaten.
- **En-FET (enzymkoblet FET)** er mest populær. Enzym på gate-overflaten av en ISFET, og enzymreaksjonen gir ladningsbærere i forhold til [analytt]. Kan detektere sakkarider, urea, penicillin, etanol, formaldehyd, organofosfatpesticider, askorbinsyre, acetylkolin og kreatinin.
- **Debye-lengden**: FET detekterer bare ladningsendringer innenfor noen få nm (under fysiologisk ionestyrke), fordi motioner skjermer ladningen.
  - Store proteiner (f.eks. fibrinogen, større enn Debye-lengden) kan ikke kvantifiseres. Små proteiner (BSA, lysozym på alkantiol-SAM på gull-gate) kan detekteres sensitivt uten merking.
  - Tiltak: dynamiske assays med trinnvis tilsetting og kinetisk analyse.
- **DNA/RNA**: negativt ladd DNA og RNA detekteres **uten merking** (i motsetning til qPCR og DNA-chips, som trenger fluorescens). Hybridisering avleses som skift i V_DS–I_D eller terskelspenning V_T.
  - **DNA-sekvensering**: primerforlengelse på gate. Hver innbygd base gir mer negativ ladning og et V_T-skift, så sekvensen og SNP-er kan leses.
- **«Debye-lengdefri» FET**: glukoseresponsiv hydrogel med fenylboronsyre (50 µm) på gate. Glukose kompleksbinder og gir flere negative grupper, så gelen sveller. Permittivitetsendringen forplanter seg gjennom laget og detekterer også *uladde* molekyler som glukose.
  > Boka skriver «50 mm» om lagtykkelsen. Sammenhengen tyder på µm-skala, men kursfilene avklarer det ikke.
- **Fordeler**: umerket overvåking og integrerbar med nanofabrikasjon [p. 171].

**Gullnanopartikkel-baserte (AuNP) optiske biosensorer** [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 171–174]
- AuNP har unike optiske egenskaper basert på **SPR fra kollektiv oscillasjon av ledningselektronene**.
- **Monodisperse AuNP er røde**: SPR absorberer blågrønt (~450 nm) og reflekterer rødt (~700 nm).
- **Aggregering** gir interpartikkel-plasmonkobling og en kraftig **rødforskyvning** av absorpsjonsmaksimum, så fargen går **rød → blå** (ved nM-konsentrasjoner). Det er grunnlaget for **kolorimetriske sensorer**, likt lateksagglutinasjon.
- **DNA-AuNP (Mirkin 1996)**: to typer tiolert ssDNA, komplementære til hver ende av mål-oligonukleotidet. Mål-ssDNA tverrbinder partiklene, som aggregerer, og fargen går rød → blå. Varme dissosierer dsDNA og redispergerer partiklene.
  - Smeltekurven (absorbans mot temperatur) skiller perfekt match fra **ett-basepar-mismatch**.
  - Fordeler mot qPCR og mikromatrise: «quick and easy» og optisk avlesning.
- **Aptamer-AuNP**: aptamerer er enkelttrådede nukleinsyrer som binder et mål med høy affinitet og spesifisitet, utviklet med **SELEX**.
  - Adenosinsensor: adenosin binder aptameret, aggregatene dissosierer, og fargen går **blå → rød**. Ingen respons på cytidin, uridin eller guanosin. Dynamisk område **0,3–2 mM**.
  - Også demonstrert for kokain, teofyllin, okratoksin A og PDGF.
- **Karbohydrat-AuNP**:
  - Dekstran-AuNP aggregerer med lektin ConA. Glukose konkurrerer om ConA, aggregatene dissosierer, og glukose måles i området **1–40 mM** (UV-Vis eller resonanslysspredning).
  - Laktose-AuNP aggregerer med lektinet RCA120 i forhold til konsentrasjonen, med sensitivitet nær ELISA.
- **Fordeler**: enkel håndtering, optisk deteksjon og høy sensitivitet. Lovende for POCT [p. 174].

**Oppsummering (kap 4.2.5)**: Målet er enkle, raske, billige, svært sensitive og selektive biosensorer for individualisert medisin og ultrasensitiv POCT. Fagfeltet er tverrfaglig: overflatekjemi gir nye gjenkjenningssystemer, og nanofabrikasjon gir nye transdusere, miniatyrisering og integrasjon [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 174].

## Visuals
- **SPR-oppsett og vinkelskift** · skjematisk + plott [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 162, fig. 4.2.5]
  - Venstre: prisme på gullbelagt sensorchip, innfallende og reflektert lys, og flowkanal med analytt.
  - Høyre: reflektans mot vinkel. Stiplet kurve (uten analytt) har minimum ved θ₁, heltrukket (med analytt) har minimum ved θ₂ > θ₁, med rød pil for «resonance angle shift».
- **AuNP-forsterkning av SPR** · to panel [p. 163, fig. 4.2.6]
  - (a) hIgG–AuNP binder anti-hIgG på chipen: ca. 15× signal. (b) hIgG binder chipen, så binder anti-hIgG–AuNP (sandwich-ELISA-lignende): ca. 25× signal.
- **Interaktiv graf: lagtykkelse vs. maks resonansvinkelskift** [p. 164, fig. 4.2.7]
  - Linjeplott (x: hydrogellagtykkelse i nm, brutt akse til 1000; y: maks skift i grader).
  - Omtrentlige punkter avlest fra figuren: (0; ≈0,14, åpen firkant), (≈5; ≈0,29), (≈20; ≈0,32), (≈50; ≈0,41), (≈110; ≈0,42), (225; ≈0,51), (≈470; ≈0,22), (1000; ≈0,16). x-aksen er lineær 0–500 nm og brutt fram til 1000.
  - Slider for tykkelse, med markør ved optimum 225 nm og skyggelagt «SPR-deteksjonssone < 300 nm».
  - Verdiene er avlest fra figuren og bare omtrentlige. Bare 225 nm og < 300 nm står i teksten.
- **Molekylær preging** · tre trinn [p. 165, fig. 4.2.8]
  - Monomerer ordner seg rundt templat → kopolymerisering med tverrbinder → templat fjernet gir et komplementært hulrom → målmolekyl binder selektivt.
- **FET-biosensor** · tverrsnitt [p. 169, fig. 4.2.11]
  - Si med source og drain, gate-isolator, vandig løsning og referanseelektrode (V_G). Innfelling: ion, protein og DNA på gate-overflaten endrer ladningen og påvirker elektronene i kanalen. V_DS–I_D-kurve som forskyves langs V-aksen.
- **AuNP-kolorimetri** · fargeskjema [p. 171–173, fig. 4.2.13–4.2.14]
  - Dispergert = rødt (absorberer ~450 nm). Aggregert = blått (rødforskjøvet).
  - Piler: DNA-mål gir aggregering (rød → blå), og adenosin + aptamer gir dissosiasjon (blå → rød).

## Equations
> Ingen ligninger i kursmaterialet. Kvalitative proporsjonaliteter: SPR-resonansvinkelskiftet ∝ massen som binder til overflaten [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 162]. FET-kurveforskyvningen avhenger av analyttkonsentrasjonen [p. 168]. AuNP-aggregeringsgraden ∝ [RCA120] [p. 173].

## Worked example
**H24 oppg. 3(a) iv: riktige påstander om SPR** (del av 6 p) [Eksamen_IMAK2008_24.pdf, oppg. 3a iv; fasit: LF eksamen H2024 IMAK2008.pdf, oppg. 3a iv]
1. «SPR står for surface plasmon resonans»: **riktig** [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 161]. «Structure plasmon resonans» er feil.
2. «Basert på overvåking av en brytningsindeks»: **riktig**. SPR detekterer permittivitetsendringer (brytningsindeks) ved gulloverflaten [p. 161–162].
3. «Et plasmon er en kvasipartikkel»: **riktig** ifølge fasit (står ikke i kursfilene, se GAP).
4. «Bruk av gull nanopartikler påvirker ikke følsomheten»: **feil**. AuNP gir ca. 15–25 ganger økt sensitivitet [p. 162].
5. «Analytten må alltid være merka»: **feil**. SPR er merkingsfri [p. 161].

## Faded example
**H25 oppg. 15: SPR-transduser og åtte utsagn** (3 p) [IMAK2008 eksamen H2025.pdf, oppg. 15]
> Automatisk rettet, uten fasit i LF [Løsningsforslag IMAK2008 H25.pdf]. Svarene er utledet fra kap 4.2.

*i) Hvilken transduser brukes i SPR?* (enzymatisk / piezoelektrisk / elektrokjemisk / optisk)
1. SPR leser av en lysrefleksjonsvinkel (resonansvinkel), så → **optisk** [p. 161–162; hele dokbio261016.pdf, p. 57].

*ii) Riktige utsagn?*
2. **(try)** «SPR kombinert med gullnanopartikler gir økt følsomhet» → **Riktig** (ca. 15× og ca. 25×) [p. 162].
3. **(try)** «Sensorchipen er belagt med et metall» → **Riktig** (gull, eventuelt sølv) [p. 161, 165].
4. **(try)** «SPR kan kombineres med ELISA for økt følsomhet» → **Riktig** («sandwich ELISA-like» AuNP-forsterkning, ca. 25×) [p. 162].
5. **(try)** «SPR kan ikke benyttes til real-time analyser» → **Feil**. SPR gir sanntid [p. 161].
6. **(try)** «Er avhengig av merking med fluorescens» → **Feil**. Merkingsfri [p. 161].
7. **(try)** «Resonansshiftet er konstant» → **Feil**. Skiftet øker med bundet masse og avhenger av lagtykkelse [p. 162–164].
8. **(try)** «Analyse med høy spesifisitet» → Sannsynlig **riktig**. Spesifisiteten kommer fra liganden, og pregede lag viser nesten ingen kryssgjenkjenning [p. 165]. Kursfilene sier ikke dette ordrett om SPR generelt.
9. **(try)** «Plasmon oppstår når metalloverflata blir belyst ved en bestemt sekvens» → Usikker. Resonansen oppstår ved en bestemt *vinkel* [p. 162]. «Sekvens» er trolig en distraktor eller skrivefeil.
   > GAP: hvordan et plasmon oppstår er ikke beskrevet i kursfilene ut over «kollektiv oscillasjon av ledningselektronene» for AuNP [p. 171].

## Exam traps
- **SPR er merkingsfri og i sanntid**, men AuNP-«merking» brukes *valgfritt* for å forsterke [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 161–162].
- **SPR-transduser = optisk**, ikke elektrokjemisk eller piezoelektrisk. FET er elektrisk (potensiometrisk) [p. 161, 168; hele dokbio261016.pdf, p. 57].
- **Små molekyler (Mw < 5000) gir svakt SPR-signal**, fordi skiftet er ∝ bundet masse [p. 162].
- **Tykkere hydrogellag er ikke alltid bedre.** Optimum er ca. 225 nm, og over 300 nm fra gullet ser SPR ingenting [p. 163–164].
- **Debye-lengden** (noen nm) begrenser FET, ikke SPR. SPR-grensen er ca. 300 nm [p. 163, 169].
- **AuNP-farge**: dispergert = rød, aggregert = blå. Aptamersensoren går *blå → rød* (dissosiasjon), DNA-sensoren *rød → blå* (aggregering) [p. 171–172].
- **«SPR står for structure plasmon resonans»**: feil. Det er *surface* [LF eksamen H2024 IMAK2008.pdf, oppg. 3a iv].

## Past exam tasks
- **H2024 oppg. 3(a) iv** (del av 6 p): riktige påstander om SPR. Fasit: kvasipartikkel, surface plasmon resonans, brytningsindeks.
- **H2025 oppg. 15** (3 p, automatisk rettet, ingen fasit): SPR-transduser (optisk) og åtte utsagn. Svarene er utledet.
- FET og AuNP-kolorimetri er ikke spurt direkte.

## Test yourself
**Q:** Nevn tre måter kap 4.2 bruker for å øke SPR-sensitiviteten.
**A:** (1) AuNP- eller polymerpartikkel-«merking», direkte eller sandwich-ELISA-lignende. (2) 3D ligand-hydrogellag via SI-ATRP med optimal tykkelse. (3) Molekylært pregede lag med stabile, selektive hulrom [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 162–166].

**Q:** Hvorfor faller SPR-signalet når antistoff-hydrogellaget blir tykkere enn ca. 225 nm?
**A:** SPR detekterer bare permittivitetsendringer innenfor < 300 nm fra gulloverflaten. Bindingen som skjer lenger ute i et tykt lag, gir liten endring nær gullet [p. 163–164].

**Q:** Hva er fordelen med FET for DNA-deteksjon sammenlignet med qPCR og DNA-chips?
**A:** FET detekterer negativt ladet DNA og RNA direkte uten fluorescensmerking (som ellers gir tap av analytt), og kan sekvensere via V_T-skift per innbygd base [p. 169–170].

**Q:** Hvordan kan en AuNP-basert sensor skille en fullstendig komplementær DNA-tråd fra en med én mismatch?
**A:** Ved å måle absorbans mot temperatur (smeltekurve). Mismatch-dupleksen dissosierer ved lavere temperatur [p. 171–172].

**Q:** Hva er et aptamer, og hvordan lages det?
**A:** En enkelttrådet nukleinsyre som binder et mål med høy affinitet og spesifisitet, utviklet med SELEX (systematisk evolusjon av ligander ved eksponentiell anrikning) [p. 172].

## Sources
- [Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf, p. 161–174] (p. = boksidetall; PDF-side = bokside − 156)
- [hele dokbio261016.pdf, p. 57, 62] (p. = trykt side; PDF-side = trykt side + 5)
- [Eksamen_IMAK2008_24.pdf, oppg. 3a iv] / [LF eksamen H2024 IMAK2008.pdf, oppg. 3a iv]
- [IMAK2008 eksamen H2025.pdf, oppg. 15] / [Løsningsforslag IMAK2008 H25.pdf] (oppg. 15 ikke dekket)
