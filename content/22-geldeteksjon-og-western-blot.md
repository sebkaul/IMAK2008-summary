---
slug: 22-geldeteksjon-og-western-blot
title: "Geldeteksjon og Western blotting"
topic: elektroforese
exam_weight: medium
exam_weight_note: "H25 oppg. 10 (4 p, fem flervalg om Western blotting). Øving oppg. 2 (Coomassie vs. sølv vs. fluorescens)"
builds_on: [20-sds-page, 21-ief-og-2d]
used_in: [23-immunelektroforese, 27-biosensorer-prinsipp-og-typer]
sources: ["Proteinkarakterisering del 2 m notater.pdf", "Proteinkarakterisering del 1 m notater.pdf", "chromatographgy_basics_part2.pdf", "Øving elektroforese med LF.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** Hvilken totalproteinfarging har høyest sensitivitet: Coomassie eller sølv?
**A:** Sølv. Den er ca. 100 ganger mer sensitiv enn Coomassie [Proteinkarakterisering del 2 m notater.pdf, slide 8–9; Øving elektroforese med LF.pdf, p. 2].

**Q:** Hva er hovedformålet med Western blotting?
**A:** Å identifisere spesifikke proteiner i en prøve ved hjelp av antistoffer [Proteinkarakterisering del 2 m notater.pdf, slide 11].

**Q:** Hvorfor blokkeres membranen før antistoffet tilsettes?
**A:** For å unngå uspesifikk binding av antistoff til membranen [Proteinkarakterisering del 2 m notater.pdf, slide 12].

## Mental model
Proteiner er usynlige i en gel, så etter elektroforesen må de gjøres synlige. Det gjøres enten ved å farge gelen direkte (totalproteinfarging), eller ved å overføre proteinene til en membran og lete etter ett bestemt protein med antistoffer (Western blotting) [Proteinkarakterisering del 2 m notater.pdf, slide 3, 11].

Fargingen er en avveining [Proteinkarakterisering del 2 m notater.pdf, slide 4–8]:
- **Coomassie**: enkel, billig og robust, men middels følsom.
- **Sølv**: ekstremt følsom, men dårlig for kvantifisering.
- **Fluorescens**: både følsom og kvantitativ, men krever skanner.

Western blotting er en annen type deteksjon. Den viser ikke «alle proteiner», bare det ene som et spesifikt primært antistoff binder, og et merket sekundært antistoff gir signalet [Proteinkarakterisering del 2 m notater.pdf, slide 11–13; chromatographgy_basics_part2.pdf, p. 132]. Membranen trengs fordi antistoffene ikke kommer inn i gelen. På en åpen membranoverflate kan de nå proteinene [Proteinkarakterisering del 2 m notater.pdf, slide 11–12].

## Concepts and definitions
- **Deteksjon av geler (PAGE / SDS-PAGE)**: Vanlig metode er farging av gelen direkte, eller at gelresultatet overføres til en membran for videre deteksjon (blotting) [Proteinkarakterisering del 2 m notater.pdf, slide 3].
- **Ønskede egenskaper ved gelfarging**: Høy sensitivitet, bredt lineært dynamisk område, kompatibilitet med nedstrømsprosesser (ekstraksjon og assay, blotting, MS), og en robust, rask og ukomplisert prosedyre [Proteinkarakterisering del 2 m notater.pdf, slide 3].
- **Fargeprosedyre**: (1) proteinfiksering, (2) tilføre fargeløsning, (3) vasking for å fjerne overskuddsfarge [Proteinkarakterisering del 2 m notater.pdf, slide 3]. Boka kaller det farging og avfarging (destaining) [chromatographgy_basics_part2.pdf, p. 132].
- **Coomassie-farger** [Proteinkarakterisering del 2 m notater.pdf, slide 4]:
  - Farger (nesten) alle typer proteiner med medium sensitivitet. «Ready to use», «ufarlig» og krever bare vann til rensing og avfarging.
  - **Coomassie Brilliant Blue R-250**: klassiske fargeprotokoller, brukervennlig, kompatibel med MS.
  - **Coomassie Brilliant Blue G-250**: nyere protokoller, raskere farging, brukes i Bradford assay og krever ikke avfargingstrinn.
  - Øvingen: binder seg til proteiner, særlig basiske og aromatiske aminosyrer. Gelen legges i fargeløsningen, overskudd vaskes bort, og proteinene blir blå bånd mot lys bakgrunn. Enkel, rimelig og reproduserbar, og passer til rutine, men har relativt lav følsomhet [Øving elektroforese med LF.pdf, p. 2].
- **Fluorescensfarger**: Tilfredsstiller så og si alle krav til proteinfarging, med høy sensitivitet og MS-kompatibilitet. Dyrere enn Coomassie og sølv, og krever CCD-kamera eller fluorescensskanner. Brukes ofte i proteomikk og 2D-geler [Proteinkarakterisering del 2 m notater.pdf, slide 6].
  - Bedre alternativ når man ønsker høy sensitivitet, analyserer flere proteiner samtidig, skal kvantifisere nøyaktig, skal analysere gelen videre med MS, eller vil merke flere prøver med ulike fargestoffer og sammenligne direkte (DIGE) [Øving elektroforese med LF.pdf, p. 2].
- **Sølvfarger**: Høyest sensitivitet, men lavt lineært dynamisk område, så reproduserbarheten er ikke god nok for kvantitative analyser. Kan ha dårligere MS-kompatibilitet (i gamle systemer) [Proteinkarakterisering del 2 m notater.pdf, slide 8]. Eksempelkit: ca. 100 ganger mer sensitiv enn Coomassie, 0,2–0,6 ng [Proteinkarakterisering del 2 m notater.pdf, slide 9].
  - Øvingen: sølvioner bindes til proteinene og reduseres til metallisk sølv, som gir mørke bånd (sølvnitrat → bindes → utviklingsløsning). Mer tidkrevende og følsom for feil, og kvantifisering er vanskeligere [Øving elektroforese med LF.pdf, p. 2].
- **Spesifikk proteinfarging**: Visualisering av bestemte proteinklasser, f.eks. glykoproteiner, fluorescent eller kolorimetrisk. Det finnes også fargefrie systemer for direkte visualisering i PAGE-geler [Proteinkarakterisering del 2 m notater.pdf, slide 10].
- **Andre deteksjonsmåter (bok)**: Fluorescensmerking av DNA eller proteiner før separasjon og UV-belysning etterpå (krever fotodokumentasjon). Densitometer skanner gelen og kan brukes kvantitativt [chromatographgy_basics_part2.pdf, p. 132–133].
- **Western blotting (immunoblotting)**: Molekylærbiologisk metode der gelen blottes (overføres) til en membran for deteksjon og identifisering av proteinene ved hjelp av antistoffer. Meget spesifikk og sensitiv for å identifisere og verifisere målprotein [Proteinkarakterisering del 2 m notater.pdf, slide 11]. Brukes etter SDS-PAGE (denaturerte proteiner), men kan også brukes for native proteiner [chromatographgy_basics_part2.pdf, p. 132].
- **Prosedyre** [Proteinkarakterisering del 2 m notater.pdf, slide 12–13]:
  1. Preparering av «antigen»-løsning (proteinprøver).
  2. Separering av Ag-komponentene ved gelelektroforese.
  3. Overføring av separerte proteiner til membran (blotting), der de immobiliseres. Nitrocellulose- eller PVDF-membran.
  4. Blokkering av membranen med irrelevant protein (f.eks. tørrmelk) for å unngå uspesifikk binding av antistoff.
  5. Tilsetning av primært antistoff, spesifikt for proteinet av interesse.
  6. Tilsetning av sekundært antistoff, spesifikt for det primære og merket med enzym, radioaktivitet, fluorescens, luminescens eller lignende.
  7. Deteksjon: det sekundære antistoffet bindes til det primære og gir en farge- eller lysreaksjon. Metoden avhenger av merkingen. Båndene sammenlignes med kjente standarder.
- **Detaljer fra boka (Info-box 6.3)**: Overføring ved kapillærvirkning eller elektrisk. Overføringseffektiviteten sjekkes ofte ved å farge gelen (Coomassie). Blokkering med fortynnet protein (BSA, tørrmelk) i buffer med lite surfaktant. Primært antistoff inkuberes 30 min–natten over, deretter skylles membranen. Sekundært antistoff er ofte koblet til HRP (pepperrotperoksidase), som oksiderer luminol med peroksid og gir luminescens. Navnet er en hyllest til Edwin Southern [chromatographgy_basics_part2.pdf, p. 132].
- **Arbeidsflyt (forelesningsfigur)**: (1) prøveopparbeiding (lyse, redusere og denaturere i prøvebuffer med SDS og β-merkaptoetanol, varme til 95 °C i 5 min) → (2) gelelektroforese → (3) membranoverføring (overføringssandwich med gel nær katoden og membran nær anoden, f.eks. 30 V natten over ved 4 °C eller 100 V i 1 t) → (4) immunodeteksjon (blokking, primært antistoff 1 t RT eller 4 °C natten over, sekundært antistoff 1 t RT, kjemiluminescens) [Proteinkarakterisering del 2 m notater.pdf, slide 15].
- **SDS-PAGE vs. Western blot**: SDS-PAGE viser mange bånd (alle proteiner). Western blot av samme prøver viser bare ett bånd, målproteinet [Proteinkarakterisering del 2 m notater.pdf, slide 16].
- **Andre blot-typer**: Southern (DNA) og Northern (RNA). Forelesningen spør «hva heter det hvis DNA eller RNA skal blottes?» [Proteinkarakterisering del 2 m notater.pdf, slide 11].
  > GAP: svaret (Southern/Northern) står ikke eksplisitt i kursfilene. Boka nevner bare Edwin Southern som opphav til navnet «Western» [chromatographgy_basics_part2.pdf, p. 132].

## Visuals
- **Western blotting: fire trinn** · flytdiagram [Proteinkarakterisering del 2 m notater.pdf, slide 15]
  - (1) Prøve → lysat → lysat + prøvebuffer (SDS, β-merkaptoetanol, 95 °C). (2) Vertikal gel, katode øverst og anode nederst, høy Mw øverst og lav Mw nederst. (3) Overføringssandwich: svamp – filterpapir – gel – membran – filterpapir – svamp, med − på gelsiden og + på membransiden, og proteinene vandrer fra gel til membran. (4) Membran → blokking → primært Ast → HRP-sekundært Ast → substrat → kjemiluminescens.
- **Antistoffkjeden på membranen** · tverrsnitt [Proteinkarakterisering del 2 m notater.pdf, slide 14]
  - Membran nederst med målprotein (rødt) og blokkeringsmiddel (blå kuler) rundt. Primært antistoff (Y) bundet til målet, sekundært antistoff bundet til det primære, med detektormolekyl (rød sirkel) eller fluorescerende merkelapp.
  - Til høyre: fluorescensblot med flere bånd i hver bane.
- **SDS-PAGE vs. Western blot av samme prøve** · plot (gelbilde) [Proteinkarakterisering del 2 m notater.pdf, slide 16]
  - Venstre: «SDS-PAGE» med markør M og bane 1–2 fulle av blå bånd. Høyre: «Western blot» av bane 1–2 med ett skarpt bånd i samme høyde.
- **Sammenligning av fargemetoder** · tabell-som-bilde [Proteinkarakterisering del 2 m notater.pdf, slide 4–9; Øving elektroforese med LF.pdf, p. 2]
  - Rader: Coomassie R-250, Coomassie G-250, sølv og fluorescens.
  - Kolonner: sensitivitet (medium / medium / høyest, 0,2–0,6 ng / høy), lineært område (godt / godt / lavt / bredt), MS-kompatibel (ja / ja / dårligere i gamle systemer / ja), kost og utstyr (billig / billig / middels / dyrt + skanner), egnet for kvantifisering (ja / ja / nei / ja).

> Ingen interaktiv graf: temaet har ingen ligninger eller tallverdier som egner seg for en slider.

## Equations
> Ingen ligninger i kursmaterialet for geldeteksjon og Western blotting.

## Worked example
**H25 oppg. 10: fem spørsmål om Western blotting** (4 p) [IMAK2008 eksamen H2025.pdf, oppg. 10]
> Oppgaven ble automatisk rettet, og løsningsforslaget gir ingen fasit [Løsningsforslag IMAK2008 H25.pdf, oppg. 10]. Svarene under er utledet fra forelesningen og boka.

*i) Hovedformål?* (måle enzymaktivitet / separere DNA etter størrelse / forberede prøven til elektroforese / identifisere spesifikke proteiner)
1. Western blotting identifiserer og verifiserer målprotein ved hjelp av antistoffer [Proteinkarakterisering del 2 m notater.pdf, slide 11]. → **Identifisere spesifikke proteiner i en prøve.**

*ii) Hvorfor overføres proteinene til en membran?*
2. Proteinene immobiliseres på membranen, der antistoffene kan nå dem [Proteinkarakterisering del 2 m notater.pdf, slide 11–12]. → **For å kunne detektere dem med antistoffer.**

*iii) Rollen til det primære antistoffet?*
3. Det primære antistoffet er spesifikt for proteinet av interesse. Signalet kommer fra det merkede sekundære, og blokkering gjøres med irrelevant protein [Proteinkarakterisering del 2 m notater.pdf, slide 12–13]. → **Binde spesifikt til målproteinet.**

*iv) Trinn som reduserer uspesifikk binding?* (flere svar)
4. Blokkering av membranen med irrelevant protein (tørrmelk, BSA) er nettopp for å unngå uspesifikk binding [Proteinkarakterisering del 2 m notater.pdf, slide 12; chromatographgy_basics_part2.pdf, p. 132]. → **Blokking med BSA eller melk.**
5. Et primært antistoff som binder spesifikt til målet reduserer også feilbinding [slide 13]. → **Primært antistoff med høy affinitet** (rimelig, men ikke formulert ordrett i kursfilene).
6. SDS-, buffer- og sample buffer-konsentrasjon handler om elektroforesen, ikke antistoffbindingen. «Unngå å vaske» er feil, for membranen skylles for å fjerne ubundet antistoff [chromatographgy_basics_part2.pdf, p. 132].

*v) Deteksjonsmetoder?* (flere svar)
7. Det sekundære antistoffet merkes med enzym, radioaktivitet, fluorescens, luminescens eller lignende [Proteinkarakterisering del 2 m notater.pdf, slide 13]. HRP gir kjemiluminescens [chromatographgy_basics_part2.pdf, p. 132]. → **Radioaktiv merking, fluorescens og kjemiluminescens.** Spektrofotometri direkte på membranen er ikke nevnt.

## Faded example
**Øving oppg. 2: Coomassie, sølv og fluorescens** [Øving elektroforese med LF.pdf, p. 2]

*a) Prinsipper*
1. Coomassie Brilliant Blue binder til proteiner (særlig basiske og aromatiske aminosyrer). Gelen farges, overskudd vaskes bort, og proteinene blir blå bånd.
2. **(try)** Sølvfarging? → Sølvioner (sølvnitrat) binder til proteinene og reduseres av en utviklingsløsning til metallisk sølv, som gir mørke bånd.

*b) Mest sensitiv?*
3. **(try)** → Sølv, ned mot nanogramområdet (kit: 0,2–0,6 ng, ca. 100 ganger mer sensitiv enn Coomassie) [Proteinkarakterisering del 2 m notater.pdf, slide 9].

*c) Når er fluorescens bedre?*
4. **(try)** → Ved høy sensitivitet kombinert med nøyaktig kvantifisering, når mange proteiner analyseres samtidig, når gelen skal videre til MS, eller ved sammenligning av flere prøver med ulike fargestoffer.

*d) Proteinet i svært lav konsentrasjon?*
5. **(try)** → Sølv (standardutstyr) eller fluorescens (hvis skanner finnes og man også vil kvantifisere).

## Exam traps
- **Sølv er best til alt**: Høyest sensitivitet, men lavt lineært område. Den egner seg dårlig til kvantifisering [Proteinkarakterisering del 2 m notater.pdf, slide 8].
- **Primært antistoff gir signalet**: Nei. Det binder målet. Signalet kommer fra det *merkede sekundære* antistoffet [Proteinkarakterisering del 2 m notater.pdf, slide 13].
- **Blokkering = vasking**: Blokkering gjøres med irrelevant protein (tørrmelk/BSA) *før* antistoffet. Vasking fjerner ubundet antistoff etterpå [Proteinkarakterisering del 2 m notater.pdf, slide 12; chromatographgy_basics_part2.pdf, p. 132].
- **Western blotting for DNA**: Western er for proteiner. DNA og RNA blottes med andre metoder [Proteinkarakterisering del 2 m notater.pdf, slide 11].
- **Coomassie G-250 vs. R-250**: G-250 krever ikke avfarging og brukes i Bradford. R-250 er den klassiske [Proteinkarakterisering del 2 m notater.pdf, slide 4].
- **Membranen gjør proteinene «mer stabile»**: Distraktor på H25. Hovedpoenget er at antistoffene kan nå de immobiliserte proteinene [IMAK2008 eksamen H2025.pdf, oppg. 10ii; Proteinkarakterisering del 2 m notater.pdf, slide 11–12].

## Past exam tasks
- **H2025 oppg. 10** (4 p, automatisk rettet, ingen fasit i LF): Western blotting. Hovedformål, hvorfor membran, primært antistoffs rolle, hva reduserer uspesifikk binding, og deteksjonsmetoder.
- Ikke spurt på H2024. Øvingen (oppg. 2) dekker fargemetodene.

## Test yourself
**Q:** Nevn de tre trinnene i en fargeprosedyre for geler.
**A:** Proteinfiksering, tilsetting av fargeløsning, og vasking for å fjerne overskuddsfarge [Proteinkarakterisering del 2 m notater.pdf, slide 3].

**Q:** Hvilke to membrantyper brukes i Western blotting?
**A:** Nitrocellulose og PVDF (polyvinylidenfluorid) [Proteinkarakterisering del 2 m notater.pdf, slide 12; chromatographgy_basics_part2.pdf, p. 132].

**Q:** Hvordan gir HRP et signal?
**A:** HRP på det sekundære antistoffet katalyserer oksidasjon av luminol med peroksid, som gir luminescens. Lyset fanges med film eller kamera [chromatographgy_basics_part2.pdf, p. 132].

**Q:** Hvorfor viser en Western blot bare ett bånd når SDS-PAGE av samme prøve viser mange?
**A:** Det primære antistoffet binder bare målproteinet. SDS-PAGE med totalproteinfarging viser alle proteinene [Proteinkarakterisering del 2 m notater.pdf, slide 16].

**Q:** Hvilken Coomassie-type brukes i Bradford assay?
**A:** G-250 [Proteinkarakterisering del 2 m notater.pdf, slide 4].

## Sources
- [Proteinkarakterisering del 2 m notater.pdf, slide 3–16]
- [Proteinkarakterisering del 1 m notater.pdf, slide 40, 58] (farging etter SDS-PAGE, Western etter 2D)
- [chromatographgy_basics_part2.pdf, p. 132–133] (p. = boksidetall; PDF-side = bokside − 84)
- [Øving elektroforese med LF.pdf, p. 2]
- [IMAK2008 eksamen H2025.pdf, oppg. 10] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 10]
