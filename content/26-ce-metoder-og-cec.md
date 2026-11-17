---
slug: 26-ce-metoder-og-cec
title: "CE-varianter (CZE, CGE, cIEF, cITP, MEKC, gelfri sikting) og elektrokromatografi (CEC)"
topic: ce
exam_weight: medium
exam_weight_note: "H25 oppg. 13 (3 p, fire flervalg om CEC). H25 oppg. 9: linjene «Bruk av amfolytter», «EOF viktig» og «platehøyder < 1 µm» skiller CE og (c)IEF. Ikke spurt på H24"
builds_on: [24-ce-mobilitet-og-eof, 25-ce-injeksjon-og-deteksjon, 21-ief-og-2d, 08-omvendt-fase-og-ionepar]
used_in: []
sources: ["Kapillærelektroforese del 2 m notater.pdf", "chromatographgy_basics_part2.pdf", "IMAK2008 eksamen H2025.pdf", "Løsningsforslag IMAK2008 H25.pdf"]
---

## Pretest
**Q:** Hva er CEC en kombinasjon av?
**A:** HPLC og CE. Den har selektiviteten og toppkapasiteten til HPLC og effektiviteten og oppløsningen til CE [Kapillærelektroforese del 2 m notater.pdf, slide 33].

**Q:** I hvilke CE-varianter er EOF *uønsket*?
**A:** I kapillær-IEF (cIEF) og kapillærisotakoforese (cITP) [Kapillærelektroforese del 2 m notater.pdf, slide 25, 32; chromatographgy_basics_part2.pdf, p. 142–143].

**Q:** Hvordan kan nøytrale forbindelser separeres med CE-utstyr?
**A:** Med en fordelingsmekanisme: mellom stasjonær og mobil fase i CEC, eller mellom miceller og elektrolytt i MEKC [slide 33; chromatographgy_basics_part2.pdf, p. 144].

## Mental model
Alle variantene bruker samme utstyr (kapillær, høyspenning, detektor), men skifter ut innholdet i kapillæret for å endre *hva* som separerer [Kapillærelektroforese del 2 m notater.pdf, slide 20, 22]:
- **Ren buffer (CZE)**: ladning/størrelse.
- **Sikt (CGE eller gelfri polymer)**: størrelse.
- **pH-gradient fra amfolytter (cIEF)**: pI.
- **Ledende og terminerende elektrolytt (cITP)**: mobilitet i ett «tog» av soner.
- **Miceller (MEKC)**: en bevegelig pseudostasjonær fase, slik at også nøytrale fordeler seg og separeres.

CEC går lengst. Kapillæret pakkes med en ekte stasjonær fase, og pumpen i HPLC byttes med spenning, så EOF driver mobilfasen [slide 33]. Da får man kromatografiens selektivitet (nøytrale separeres etter fordeling) med EOF-ens flate profil og høye effektivitet. Ladde stoffer separeres av både mobilitet og fordeling [slide 33; chromatographgy_basics_part2.pdf, p. 145].

Tommelregel for EOF: variantene som bygger på en *stabil sone* (fokusering i cIEF, likevektssoner i cITP) vil ikke ha EOF. Variantene som må *transportere* alt forbi detektoren (CZE, MEKC, CEC) trenger den.

## Concepts and definitions
- **Viktige metoder innen CE** [Kapillærelektroforese del 2 m notater.pdf, slide 20]: soneelektroforese (CZE), gelelektroforese (CGE), isoelektrisk fokusering (cIEF), isotakoforese (CITP), elektrokromatografi (CEC), micellær elektrokinetisk kapillærkromatografi (MEKC/MECC) og gelfri separasjon («gel-free sieving»).

**Kapillær soneelektroforese (CZE)** [Kapillærelektroforese del 2 m notater.pdf, slide 21–23; chromatographgy_basics_part2.pdf, p. 140–141]
- Enkleste og mest kjente form for CE og den mest brukte teknikken.
- Separasjon etter forskjell i ladning og størrelse, dvs. ulik elektroforetisk mobilitet. Analyttene separeres i soner/bånd (notat).
- Kan utføres med eller uten EOF. Er µ_eo > |µ_e| for alle anioner, vandrer alle anioner og kationer i samme retning.
- Standard CE-utstyr og en enkel bufferløsning uten tilsetningsstoffer. Elektrolytten er 0,01–0,1 M, oftest fosfatbuffer, og bør ha høyere konsentrasjon enn prøven for å unngå lokale potensialgradienter (ujevn migrasjon og asymmetriske soner).
- Bruksområder: små molekyler, peptider, proteiner (f.eks. monoklonale antistoffer), nukleinsyrer og enantiomerseparasjon.
  - Enantiomerseparasjon får man ved å tilsette en kompleksdanner, f.eks. cyklodekstrin. CE-metoder er med i European Pharmacopoeia [chromatographgy_basics_part2.pdf, p. 141].
- cLOD/cLOQ: se side 25.
  > Motstrid: slide 21 (håndskrevet) sier «cLOD og cLOQ er høyere i LC enn i CE pga kortere optisk bane og små injeksjonsvolum». Boka sier det motsatte, at de er høyere i CE enn i LC [chromatographgy_basics_part2.pdf, p. 141]. Begrunnelsen (kort veilengde, små volum) passer bare med bokas versjon.

**Kapillær gelelektroforese (CGE)** [Kapillærelektroforese del 2 m notater.pdf, slide 24; chromatographgy_basics_part2.pdf, p. 142]
- Kapillæret er fylt med en gel som fungerer som en molekylsikt. Separerer etter størrelse (og ladning) når strøm påsettes.
- Egnet til DNA-sekvensering, proteinanalyse og farmasøytiske analyser.
- **Kun elektrokinetisk injeksjon.** UV ved lav bølgelengde kan ikke brukes på grunn av gelen.
- Notat: det er vanskelig å holde gelmaterialet fuktig, og gelkapillærer har begrenset levetid. Derfor har man gått over til gelfrie systemer, og CGE er lite brukt i dag.

**Gelfri sikting (gel-free sieving)** [Kapillærelektroforese del 2 m notater.pdf, slide 24, notat; chromatographgy_basics_part2.pdf, p. 142–143]
- Bufferløsning med lineære hydrofile polymerer (f.eks. polyetylenglykol). Sammenfiltrede polymerer gir størrelsesseparasjon.
- Lang levetid. Både hydrodynamisk og elektrokinetisk injeksjon kan brukes, og UV ved lav bølgelengde fungerer. Høy spenning er mulig.
- Kan ikke brukes i kapillærer < 50 µm ID på grunn av viskositeten.
- Svært viktig for DNA-sekvensering: fluorescensmerkede fragmenter, elektrokinetisk injeksjon og vandring mot + elektroden, med separasjon etter antall basepar (oppløsning ned til ett nukleotid) og LIF-deteksjon. Fire fargestoffer for de fire basene gir sekvensen i én analyse [Kapillærelektroforese del 2 m notater.pdf, slide 15].

**Kapillær isoelektrisk fokusering (cIEF)** [Kapillærelektroforese del 2 m notater.pdf, slide 25–30; chromatographgy_basics_part2.pdf, p. 142]
- Kombinerer prinsippene for kapillær gelelektroforese og IEF. Høy følsomhet. Separasjon etter forskjell i isoelektrisk punkt (pI). Brukes for proteiner.
- **EOF er uønsket**: den kan forstyrre pH-gradienten og fokuseringen. Man bruker kapillærer med overflate uten ladning for å eliminere EOF, og det hindrer også adsorpsjon (notat og bok).
- pH-gradienten oppnås med amfolyttløsning (notat). Amfolytt: blanding av mange amfotere stoffer med ulik pI. pI-markør: lett detekterbart stoff med kjent pI (f.eks. ribonuklease, myoglobin). Stabiliserende gel, f.eks. cellulose [slide 27].
- **Trinn 1, prøveapplikasjon**: en blanding av prøve og amfolytter fylles i røret med høyt trykk.
- **Trinn 2, fokusering**: amfolyttene danner en pH-gradient. Ved høy spenning beveger analyttene seg til pH = pI og fokuseres der. **Anoden står i lav-pH-elektrolytt** (f.eks. H₃PO₄, anolytt) og **katoden i høy-pH-løsning** (f.eks. NaOH, katolytt). Eksempelgradient: pH 3 → pH 10.
  - Advarsel på slide 28: løseligheten er lavest ved pI, og analytten kan felle ut. Løselighetsfremmere (f.eks. urea) kan være nødvendig.
- **Trinn 3, mobilisering**: etter fokusering må sonene passere detektoren. Katodebufferen endres til lavere pH, og analyttene migrerer mot katoden forbi detektoren, så fokuseringen registreres som et elektroferogram. Strømmen faller under fokusering og flater ut. Mobiliseringen settes i gang når strømmen er lav [slide 29].
- Ampholyttene absorberer UV ved lave bølgelengder, så < 280 nm kan ikke brukes (deteksjon ved 280 nm) [chromatographgy_basics_part2.pdf, p. 142; slide 30].
- Eksempel: ErA (*Erwinia chrysanthemi* L-asparaginase), tvungen deamidering. Kontroll har hovedtopp ved pI 7,35. Behandlet prøve får nye, surere topper (7,0, 6,8, 6,6) mellom pI-markørene [slide 30].
  > GAP: at deamidering (Asn → Asp) gir lavere pI og derfor surere topper står ikke forklart i kursfilene. Bare spørsmålet «som vil si?» står på slide 30.

**Kapillærisotakoforese (cITP)** [Kapillærelektroforese del 2 m notater.pdf, slide 31–32; chromatographgy_basics_part2.pdf, p. 143]
- Separerer ioner, anioner *eller* kationer (én type om gangen), etter elektroforetisk mobilitet.
- To elektrolytter: **ledende (leading) elektrolytt** med ioner med *høyere* mobilitet enn analyttene, og **terminerende elektrolytt** med *lavere* mobilitet. Analyttene injiseres mellom de to løsningene.
- I feltet beveger ionene seg med hastighet proporsjonal med mobiliteten. Ioner med høy mobilitet danner lederfronten. Det etableres en likevekt der individuelle ioner beveger seg som skarpe bånd/soner.
- **EOF ikke ønsket.**
- Ionet i et bånd identifiseres fra feltstyrken på stedet. **Kvantitativ informasjon hentes fra lengden på båndet.**
- Notat: en form for soneelektroforese som brukes mer som injeksjonsmetode enn separasjonsmetode. Boka sier at prinsippet brukes til spesielle injeksjonsteknikker.

**Micellær elektrokinetisk kapillærkromatografi (MEKC)** [chromatographgy_basics_part2.pdf, p. 143–145; Kapillærelektroforese del 2 m notater.pdf, slide 20]
- Kan separere både ioniske og ikke-ioniske forbindelser.
- Elektrolytt (f.eks. fosfat) med ionisk surfaktant over **kritisk micellekonsentrasjon (cmc)**. Micellene (f.eks. natriumdodecylsulfat, SDS) er kuleformede aggregater med hydrofil ende ut og hydrofob hale inn.
- Nøytrale forbindelser fordeler seg mellom micelle og elektrolytt etter hydrofobisitet. Det er altså kromatografi. Micellen er en **pseudostasjonær fase** (en bevegelig «stasjonær» fase).
- Micellene er ladde og migrerer i feltet. Med EOF > |micellenes egen mobilitet| går de mot katoden, så alt passerer detektoren.
- Polar nøytral går med EOF (t₀). Hydrofob nøytral går med micellen (t_mc). **Migrasjonsvinduet** ligger mellom t₀ og t_mc. Antall forbindelser per analyse er begrenset.
- Anioner og kationer påvirkes i tillegg av sin egen mobilitet.
- Forelesningen nevner MEKC bare i listen (slide 20). Detaljene er fra boka.

**Elektrokromatografi (CEC), potensialdrevet kromatografi** [Kapillærelektroforese del 2 m notater.pdf, slide 33–35; chromatographgy_basics_part2.pdf, p. 145–147]
- Kombinasjon av HPLC og CE. Har selektiviteten og toppkapasiteten til HPLC og effektiviteten og oppløsningen til CE. Høyere kolonneeffektivitet enn HPLC, og høyere prøvekapasitet enn CE.
- **Forskjell fra LC**: den mekaniske pumpen byttes ut med en strømkilde (10–30 kV). Mobilfasen (inkl. analytter) flyttes gjennom kolonnen med EOF (0,2–1 mm/s), **uten trykkfall** og med **flat profil**. Det gir mindre båndspredning og høyere effektivitet.
  - **Nøytrale** forbindelser separeres etter fordeling mellom stasjonær og mobil fase.
  - **Ladde** forbindelser separeres etter elektroforetisk mobilitet *og* kromatografisk fordeling.
- For å få EOF må kolonnematerialet ha ladde overflategrupper (silanoler eller andre). Den stasjonære fasen må velges nøye, fordi den også må generere EOF [chromatographgy_basics_part2.pdf, p. 145, 147].
- Mekanisk pumpe kan likevel brukes til ca. 5 bar overtrykk (mot bobler) og til bytte av mobilfase og vasking [chromatographgy_basics_part2.pdf, p. 145].
- **Tre hovedtyper kolonner**, alle av fused silica [slide 34; chromatographgy_basics_part2.pdf, p. 146]:
  - (a) **Åpen rørformet** (open tubular): ladet veggbelegg, best effektivitet ved < 25 µm ID (notat).
  - (b) **Pakket kapillærkolonne**: 50–100 µm ID × 20–50 cm, med silikapartikler som i LC eller *mindre* (ingen trykkfall). Ingen metallfritter, fordi de forstyrrer feltet og gir bobler, så frittene sintres i silikaen.
  - (c) **Monolitter**: polymerisert (f.eks. akrylater) i 50–100 µm ID silikakapillær.
- Mobilfase: vann + organisk modifikator + buffer (elektrolytt) med lav ionestyrke for å redusere varme. Retensjon styres av modifikatorandel, pH, ionestyrke, potensial og temperatur. Gradient er mulig, men krever mer komplisert utstyr [chromatographgy_basics_part2.pdf, p. 145–146].
- **Prøveapplisering**: elektrokinetisk injeksjon (5–10 kV), eller i boka også storvolumsinjeksjon med fokusering som i LC. **Deteksjon**: UV, fluorescens eller MS, ofte i et kapillær etter kolonneutløpet [slide 34; chromatographgy_basics_part2.pdf, p. 145].
- **Hvorfor lite brukt**: ingen dedikerte kommersielle instrumenter eller kolonner, ingen «killer application», vanskelig å lage reproduserbare kolonner, og EOF kan endre seg over tid ved adsorpsjon fra komplekse prøver. Potensialet ligger i proteomikk og metabolomikk [chromatographgy_basics_part2.pdf, p. 146–147].

## Visuals
- **Variantoversikt** · tabell [Kapillærelektroforese del 2 m notater.pdf, slide 20–35; chromatographgy_basics_part2.pdf, p. 140–146]
  - Kolonner: Kapillærinnhold, Separerer etter, EOF, Injeksjon, Typisk bruk.
  - CZE: buffer (0,01–0,1 M fosfat) · ladning/størrelse (µ_e) · med eller uten · begge · små molekyler, peptider, proteiner, enantiomerer.
  - CGE: gel · størrelse · – · kun elektrokinetisk · DNA, proteiner.
  - Gelfri: lineær hydrofil polymer (PEG) · størrelse · – · begge · DNA-sekvensering.
  - cIEF: amfolytter, pH-gradient · pI · uønsket · trykk (fylling) · proteiner.
  - cITP: ledende + terminerende elektrolytt · mobilitet · uønsket · mellom elektrolyttene · mest injeksjonsteknikk.
  - MEKC: surfaktant > cmc · fordeling til micelle + µ_e · nødvendig · – · nøytrale + ioner.
  - CEC: stasjonærfase (pakket, monolitt, åpen rør) · fordeling + µ_e · nødvendig (driver flow) · elektrokinetisk · nøytrale + ladde.
- **cIEF i tre trinn** · skjematisk [Kapillærelektroforese del 2 m notater.pdf, slide 27–29]
  - (1) Kapillær fylt med prøve + amfolytt + pI-markør. (2) Anolytt H₃PO₄ (pH 3) til venstre og katolytt NaOH (pH 10) til høyre, med økende pH og fokuserte bånd pI₃ < pI₂ < pI₁. (3) Strøm–tid-kurve som faller og flater ut, med pil ved «mobilisering».
- **cITP-sonetog** · skjematisk [Kapillærelektroforese del 2 m notater.pdf, slide 31–32]
  - Fra − til +: leading electrolyte | sample (A, B, C) | trailing electrolyte → etter likevekt skarpe, tilstøtende soner A | B | C bak lederfronten. Båndlengde ∝ mengde.
- **MEKC-migrasjonsvindu** · vektordiagram [chromatographgy_basics_part2.pdf, p. 144–145]
  - EOF-pil →, micellens egen mobilitet ←, netto micelle →. Nøytral analytt fordelt mellom micelle og elektrolytt. Tidsakse med t₀ (EOF-markør) og t_mc (micelle), og vindu mellom.
- **CEC-kolonnetyper og oppsett** · tverrsnitt [Kapillærelektroforese del 2 m notater.pdf, slide 33–35]
  - Pakket kolonne med inlet- og outletfritt, pakkemateriale, deteksjonsvindu, «EOF →» fra + til −, og zoom på partikkel med ladet dobbeltlag.
  - Tre tverrsnitt: (a) åpent rør med stasjonærfase på veggen, (b) pakket med fritt, (c) monolitt (SEM-bilde).
- > Ingen interaktiv graf: kursfilene har ingen tallverdier for t₀, t_mc eller mobiliteter for disse variantene.

## Equations
### CZE: platetall og migrasjonshastighet
$$N = \frac{(\mu_e + \mu_{eo})\,L_D\,V}{2DL},\qquad u = u_e + u_{eo} = \frac{(\mu_e + \mu_{eo})\,V}{L}$$
Se side 24 for symboler. Gjelder CZE [Kapillærelektroforese del 2 m notater.pdf, slide 23; chromatographgy_basics_part2.pdf, p. 140–141].

### MEKC: retensjonsfaktor for nøytral analytt
$$k = \frac{t_R - t_0}{t_0\left(1 - t_0/t_{mc}\right)}$$

| Symbol | Meaning | Unit |
|---|---|---|
| $k$ | retensjonsfaktor | – |
| $t_R$ | analyttens migrasjonstid | s |
| $t_0$ | migrasjonstid for polar nøytral (går med EOF) | s |
| $t_{mc}$ | migrasjonstid for micellen (hydrofob nøytral) | s |

Gjelder nøytrale analytter med $t_0 < t_R < t_{mc}$ [chromatographgy_basics_part2.pdf, p. 144].
> Merknad: Boka skriver $t_0/t_{mc}$ i nevneren, og det er gjengitt slik. Med det leddet blir nevneren lik for alle analytter. Kursfilene har ingen regneeksempel som kan bekrefte formen.

## Worked example
**H25 oppg. 13: fire spørsmål om elektrokromatografi (CEC)** (3 p) [IMAK2008 eksamen H2025.pdf, oppg. 13]
> Automatisk rettet, uten fasit i LF [Løsningsforslag IMAK2008 H25.pdf, oppg. 13]. Svarene er utledet fra forelesningen.

*i) Elektrokromatografi er en …* (CE + HPLC / MS-type / GC + CE / gelelektroforese / MS + GC)
1. «Kombinasjon av HPLC og CE» [Kapillærelektroforese del 2 m notater.pdf, slide 33]. → **Kombinasjon av CE og HPLC.**

*ii) Hvilken kolonnetype kan benyttes?* (alle tre / monolitt / åpent rør / pakket)
2. Tre hovedtyper: åpen rørformet, pakket kapillær og monolitt [slide 34]. → **Alle de tre alternativene er korrekt.**

*iii) I elektrokromatografi oppstår …*
3. Mobilfasen flyttes med EOF [slide 33]. EOF gir flat profil uten trykkfall [chromatographgy_basics_part2.pdf, p. 145]. → **EOF og en flat flowprofil.**

*iv) To korrekte utsagn om CEC*
4. «Nøytrale forbindelser separeres utfra fordeling mellom SF–MF» → **riktig** (ordrett på slide 33).
5. «Ioner separeres utfra elektroforetisk mobilitet og kromatografisk fordeling» → **riktig** (slide 33: «lada forbindelser … elektroforetisk mobilitet og kromatografisk fordeling»).
6. Nøytrale har ingen elektroforetisk mobilitet, så «nøytrale … etter elektroforetisk mobilitet» er feil. «Ioner kun etter mobilitet» og «kun etter fordeling» er feil fordi begge mekanismene virker.

## Faded example
**Gjennomfør en cIEF-analyse av et protein** [Kapillærelektroforese del 2 m notater.pdf, slide 25–30; chromatographgy_basics_part2.pdf, p. 142]
1. *Kapillærvalg*: overflatemodifisert kapillær uten ladning, fordi EOF ville forstyrre pH-gradienten og fokuseringen.
2. **(try)** *Trinn 1, applikasjon*: hva fylles i kapillæret, og hvordan? → Prøve + amfolytter (+ pI-markører) fylles med trykk.
3. **(try)** *Trinn 2, fokusering*: hvor står anode og katode? → Anode i lav-pH-elektrolytt (f.eks. H₃PO₄), katode i høy-pH (f.eks. NaOH). Amfolyttene danner gradienten, og proteinene vandrer til pH = pI og stopper.
4. **(try)** *Hva kan gå galt ved pI, og hvordan motvirkes det?* → Løseligheten er lavest ved pI, så proteinet kan felle ut. Tilsett løselighetsfremmer, f.eks. urea.
5. **(try)** *Trinn 3, mobilisering*: hvordan får du sonene forbi detektoren? → Katodebufferen byttes til lavere pH, og sonene migrerer mot katoden forbi detektoren. Det gir et elektroferogram.
6. **(try)** *Deteksjonsbølgelengde?* → 280 nm. Amfolyttene absorberer under 280 nm.

## Exam traps
- **EOF ønsket eller ikke?** CZE kan gå med eller uten. I MEKC og CEC er EOF nødvendig (driver transporten). I cIEF og cITP er EOF **uønsket** [Kapillærelektroforese del 2 m notater.pdf, slide 21, 25, 32–33].
- **CEC-flowprofil**: flat (EOF), ikke parabolsk. Det er hele poenget [chromatographgy_basics_part2.pdf, p. 145; IMAK2008 eksamen H2025.pdf, oppg. 13iii].
- **Nøytrale separeres ikke i CZE**, men de gjør det i MEKC (micelle-fordeling) og CEC (SF–MF-fordeling) [slide 33; chromatographgy_basics_part2.pdf, p. 144].
- **«Bruk av amfolytter» = IEF/cIEF**, ikke CZE (H25 oppg. 9) [slide 27–28].
- **CGE og CEC bruker elektrokinetisk injeksjon**. Gelfri sikting kan bruke begge. cIEF fylles med trykk [slide 24, 27, 34; chromatographgy_basics_part2.pdf, p. 142–143].
- **cITP**: ledende elektrolytt har *høyere* mobilitet enn analyttene, terminerende har *lavere*. Kvantitativ info gis av båndets *lengde*, ikke høyde [slide 31–32].
- **CEC-pakning**: partiklene kan være *mindre* enn i LC fordi det ikke er trykkfall. Metallfritter unngås [chromatographgy_basics_part2.pdf, p. 146].
- **cIEF-polaritet**: anoden står i *lav* pH og katoden i *høy* pH. Snus dette, får man ingen stabil gradient [slide 28].

## Past exam tasks
- **H2025 oppg. 13** (3 p, automatisk rettet, ingen fasit): CEC = CE + HPLC, kolonnetyper, EOF og flat profil, og separasjonsmekanisme for nøytrale og ioner.
- **H2025 oppg. 9** (del av 5 p, automatisk rettet): «Bruk av amfolytter i metoden» → IEF. «EOF viktig for separasjon» og «platehøyder < 1 µm» → CE. Se sidene 21 og 24.
- Ikke spurt på H2024.

## Test yourself
**Q:** Nevn tre forskjeller mellom CEC og HPLC.
**A:** CEC drives av spenning (10–30 kV) i stedet for pumpe, flyten er EOF med flat profil og uten trykkfall i stedet for parabolsk, og CEC gir høyere effektivitet og kan bruke mindre partikler. Ladde analytter separeres i tillegg etter elektroforetisk mobilitet [Kapillærelektroforese del 2 m notater.pdf, slide 33; chromatographgy_basics_part2.pdf, p. 145–146].

**Q:** Hvorfor har gelfri sikting i stor grad erstattet CGE?
**A:** Gelkapillærer er vanskelige å holde fuktige og har kort levetid. Gelfri sikting har lang levetid, tillater begge injeksjonsmetoder og UV ved lav bølgelengde [Kapillærelektroforese del 2 m notater.pdf, slide 24; chromatographgy_basics_part2.pdf, p. 142–143].

**Q:** Hva er en pseudostasjonær fase i MEKC?
**A:** Ladde miceller (surfaktant over cmc) som analyttene fordeler seg til. De oppfører seg som en stasjonær fase, men beveger seg selv i feltet [chromatographgy_basics_part2.pdf, p. 144].

**Q:** Hvordan identifiseres og kvantifiseres ioner i cITP?
**A:** Identitet fra feltstyrken i båndet, mengde fra båndets lengde [Kapillærelektroforese del 2 m notater.pdf, slide 32].

**Q:** Hvorfor må kolonnematerialet i CEC ha ladde overflategrupper?
**A:** Uten ladde grupper (f.eks. silanoler) dannes ingen EOF, og da er det ingenting som driver mobilfasen gjennom kolonnen [chromatographgy_basics_part2.pdf, p. 145, 147].

## Sources
- [Kapillærelektroforese del 2 m notater.pdf, slide 15, 20–37]
- [chromatographgy_basics_part2.pdf, p. 140–147] (p. = boksidetall; PDF-side = bokside − 84)
- [IMAK2008 eksamen H2025.pdf, oppg. 9, 13] / [Løsningsforslag IMAK2008 H25.pdf, oppg. 13]
