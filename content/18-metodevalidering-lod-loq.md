---
slug: 18-metodevalidering-lod-loq
title: "Metodevalidering, LOD og LOQ"
topic: kvantifisering
exam_weight: low
exam_weight_note: "H24 1(c): forklar «LOQ» (2 av 10 p). Ikke spurt direkte på H25 (lineært område ligger implisitt i oppg. 8)"
builds_on: [17-kvalitativ-og-kvantifiseringsmetoder]
used_in: []
sources: ["Kval og kvant analyse.pdf", "chromatographgy_basics_part2.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf"]
---

## Pretest
**Q:** Hvilket signal/støy-forhold definerer deteksjonsgrensen (LOD)?
**A:** S/N > 3 [Kval og kvant analyse.pdf, p. 10; chromatographgy_basics_part2.pdf, p. 190].

**Q:** Er LOQ høyere eller lavere enn LOD?
**A:** Alltid høyere [LF eksamen H2024 IMAK2008.pdf, p. 3].

**Q:** Hva betyr det at en metode er «robust»?
**A:** At små endringer i driftsparametere (pH, flow, % organisk, temperatur) ikke endrer analyseresultatet vesentlig [chromatographgy_basics_part2.pdf, p. 197–198].

## Mental model
Et detektorsignal består av det analytten gir pluss støy, som er tilfeldige signaler som ikke kommer fra prøven [Kval og kvant analyse.pdf, p. 10]. Toppen må være tydelig større enn støyen:
- S/N > 3: du kan *se* at stoffet er der (LOD).
- S/N > 10: du kan *måle* hvor mye det er med akseptabel presisjon (LOQ).

[Kval og kvant analyse.pdf, p. 10; chromatographgy_basics_part2.pdf, p. 190]

Smale topper gir høyere topp for samme mengde, og dermed lavere deteksjonsgrense [chromatographgy_basics_part2.pdf, p. 191]. Over LOQ må signalet øke lineært med konsentrasjonen for at kalibreringen skal gjelde (lineært område). Over dette flater responsen ut, og til slutt metter detektoren [Kval og kvant analyse.pdf, p. 11]. Metodevalidering betyr å dokumentere alt dette, sammen med repeterbarhet, nøyaktighet, selektivitet, robusthet og stabilitet, slik at man vet at metoden er god nok for formålet [Kval og kvant analyse.pdf, p. 11; chromatographgy_basics_part2.pdf, p. 196].

## Concepts and definitions
- **Støy**: Tilfeldige detektorsignaler som ikke kommer fra prøven [Kval og kvant analyse.pdf, p. 10]. Forelesningsfiguren viser høy S/N (lite systemstøy), lav S/N (mye systemstøy) og «too low» S/N [Kval og kvant analyse.pdf, p. 10]. Boka måler støyen som topp-til-topp-støy $N_{p\text{-}p}$ [chromatographgy_basics_part2.pdf, p. 190–191].
- **LOD (Limit of Detection)**: S/N > 3 [Kval og kvant analyse.pdf, p. 10]. Boka: en topp regnes som detekterbar når høyden er tre ganger støyen. Konsentrasjonen som gir S/N = 3 kalles cLOD [chromatographgy_basics_part2.pdf, p. 190].
- **LOQ (Limit of Quantification)**: S/N > 10 [Kval og kvant analyse.pdf, p. 10]. Konsentrasjonen som gir S/N = 10 er cLOQ. Topphøyden må være mer enn 10 × støyen for pålitelig kvantifisering [chromatographgy_basics_part2.pdf, p. 190].
  - Løsningsforslaget: den laveste konsentrasjonen av et stoff som kan kvantifiseres med akseptabel nøyaktighet og presisjon. LOQ er alltid høyere enn LOD og definerer nivået der en analytt kan måles pålitelig [LF eksamen H2024 IMAK2008.pdf, p. 3].
- **Anbefalt måling av S/N**: $S/N = 2H/h$, der H er topphøyden og h er støybåndets bredde (topp til topp), målt over et vindu på ca. 20 × $w_{0,5}$ [Kval og kvant analyse.pdf, p. 10].
- **cLOD avhenger av kromatografien**: Samme konsentrasjon gir lavere deteksjonsgrense med bedre effektivitet (smalere, høyere topp) [chromatographgy_basics_part2.pdf, p. 191, Fig. 10.4].
- **Selektiviteten i hele metoden**: Prøveopparbeiding, kromatografisk separasjon og deteksjon bidrar alle til metodens selektivitet. Hele metoden må kalibreres [chromatographgy_basics_part2.pdf, p. 191].
- **Lineært område og dynamisk område**: Konsentrasjonen må være i det lineære området for detektoren. Dette gjelder alle detektorer. Over $c_1$ er responsen ikke lenger lineær, men fortsatt i det dynamiske området. Over $c_2$ er det «forbudt område» (detektor i metning) [Kval og kvant analyse.pdf, p. 11].
- **Metodevalidering**: Bekrefte at en metode er «god nok» for formålet. Mange faktorer testes og dokumenteres: LOD og LOQ, lineært område, repeterbarhet/reproduserbarhet, nøyaktighet («round robin»), robusthet, selektivitet og stabilitet [Kval og kvant analyse.pdf, p. 11].
- **Valideringsparametere (bok)**: cLOD, cLOQ, linearitet, område (range), repeterbarhet (innen og mellom serier / dager), nøyaktighet, selektivitet, robusthet og stabilitet. cLOD og cLOQ skal bestemmes ved å analysere prøver med analytt på disse nivåene, ikke ved ekstrapolering fra høyere konsentrasjoner [chromatographgy_basics_part2.pdf, p. 196].
- **Før validering (metodeutvikling)** [chromatographgy_basics_part2.pdf, p. 196]:
  - Behov for oppkonsentrering og opprensing, løsemiddelvalg kompatibelt med kromatografien, og analyttens stabilitet.
  - Baselinjeseparasjon, uten tailing og overlasting, og repeterbare retensjonstider.
  - Detektor med langtidsstabil baselinje, stort lineært område og lave deteksjonsgrenser.
- **Linearitet**: Konsentrasjonsområdet der detektorresponsen er direkte proporsjonal med konsentrasjonen, fra cLOD. Undersøkes ved spiking av blank prøve [chromatographgy_basics_part2.pdf, p. 197].
- **Område (range)**: Vanligvis fra cLOQ til høyeste konsentrasjon som er undersøkt for presisjon og nøyaktighet. Skal dekke konsentrasjonene som forventes i prøvene [chromatographgy_basics_part2.pdf, p. 197].
- **Repeterbarhet**: Bestemmes på tre nivåer: cLOQ, f.eks. 50 × cLOQ (= $c_{max}$), og ½ $c_{max}$. Innen serie: > 5 replikater per nivå samme dag. Mellom serier: ett replikat per nivå over > 5 påfølgende dager [chromatographgy_basics_part2.pdf, p. 197].
- **Nøyaktighet (accuracy, bias)**: Best med referansemateriale. Nest best er å sammenligne med en annen, etablert metode. Ellers spikes blank matriks på tre nivåer (lav, middels, høy), og funnet konsentrasjon deles på teoretisk. Svaret skal være nær 100 % [chromatographgy_basics_part2.pdf, p. 197].
- **Selektivitet / spesifisitet**: Metoden er spesifikk hvis den er helt selektiv for én analytt. Selektivitet er evnen til å måle analytten nøyaktig i nærvær av forventede interferenser. Vises ved å kjøre sannsynlige interferenter og vise at de er separert eller ikke gir signal [chromatographgy_basics_part2.pdf, p. 197].
- **Robusthet**: Effekten av driftsparametere på resultatet: MF-pH, flow, % organisk modifikator og kolonnetemperatur. Eksempel: MF-pH 5,5 testes ved 5,3 og 5,7. Ingen signifikant endring betyr at pH ikke er kritisk, ellers kreves streng pH-kontroll [chromatographgy_basics_part2.pdf, p. 197–198].
- **Stabilitet**: At analyttkonsentrasjonen ikke endres under lagring, opparbeiding og analyse. Tester frys/tin, korttid ved romtemperatur, langtid i fryser, og stam- og arbeidsløsninger av analytt og IS [chromatographgy_basics_part2.pdf, p. 198].
- **Retningslinjer**: Ingen universell metode. Eksempler er ISO/IEC 17025 og FDA CGMP, og kravene avhenger av bruk (f.eks. juridiske konsekvenser) [chromatographgy_basics_part2.pdf, p. 198].

## Visuals
- **S/N, LOD og LOQ** · kurveskisse, tre paneler [Kval og kvant analyse.pdf, p. 10; chromatographgy_basics_part2.pdf, p. 191, Fig. 10.3]
  - Samme topp på tre støynivåer: «High S/N» (glatt baselinje), «Low S/N» (synlig støy) og «Too low S/N» (toppen druknet i støy).
  - Under: én topp med H (topphøyde fra midten av støybåndet), h (støybåndets bredde topp til topp, $N_{p\text{-}p}$) og et måle-vindu merket «20 × $w_{0,5}$».
  - Horisontale hjelpelinjer ved 3 × støy («LOD») og 10 × støy («LOQ»).
- **Effektivitet og deteksjonsgrense** · plot, to paneler [chromatographgy_basics_part2.pdf, p. 191, Fig. 10.4]
  - Samme konsentrasjon, samme areal: (a) smal, høy topp godt over støyen, (b) bred, lav topp nær støyen. Etikett: «bedre effektivitet → bedre deteksjonsgrense».
- **Lineært, dynamisk og forbudt område** · kurveskisse [Kval og kvant analyse.pdf, p. 11]
  - x-akse: analyttkonsentrasjon. y-akse: respons.
  - Kurve som er rett fra origo til $c_1$ (grønt felt «Linear range»), flater ut mellom $c_1$ og $c_2$ (gult felt, del av «Dynamic range»), og er helt flat over $c_2$ (rødt felt «Forbudt område – detektor i metning»).
- **Valideringsparametere** · tabell-som-bilde [Kval og kvant analyse.pdf, p. 11; chromatographgy_basics_part2.pdf, p. 196–198]
  - Rader: LOD/LOQ, linearitet og område, repeterbarhet (innen og mellom), nøyaktighet, selektivitet, robusthet og stabilitet. Kolonner: «Hva betyr det» og «Hvordan testes det» (én linje hver, fra bokteksten).
- **Interactive plot: S/N-simulator**
  - Gauss-topp med høyde H på en baselinje med tilfeldig støy (bredde h). Slider H og h.
  - Viser $S/N = 2H/h$ [Kval og kvant analyse.pdf, p. 10] og fargekoder «ikke detektert» (< 3), «detektert, ikke kvantifiserbar» (3–10) og «kvantifiserbar» (> 10).
  - Kursmaterialet har ingen numeriske støydata, så verdiene er illustrative.

## Equations
### Signal/støy (forelesningens anbefalte metode)
$$\frac{S}{N} = \frac{2H}{h}$$
| Symbol | Meaning | Unit |
|---|---|---|
| $H$ | topphøyde (fra midten av støybåndet) | signalenhet |
| $h$ | bredde på støybåndet (topp til topp) | signalenhet |
Måles over et vindu på ca. 20 × $w_{0,5}$ rundt toppen [Kval og kvant analyse.pdf, p. 10].

### Deteksjons- og kvantifiseringsgrense
$$\text{LOD: } \frac{S}{N} \geq 3 \qquad\qquad \text{LOQ: } \frac{S}{N} \geq 10$$
[Kval og kvant analyse.pdf, p. 10; chromatographgy_basics_part2.pdf, p. 190]

### Nøyaktighet
$$\text{nøyaktighet} = \frac{c_{funnet}}{c_{teoretisk}} \times 100\,\%$$
| Symbol | Meaning | Unit |
|---|---|---|
| $c_{funnet}$ | konsentrasjon funnet med kalibreringskurven | µg/mL |
| $c_{teoretisk}$ | konsentrasjon tilsatt (spiket) | µg/mL |
Skal være nær 100 % [chromatographgy_basics_part2.pdf, p. 197].

### Relativt standardavvik (presisjon)
$$RSD = \frac{s}{\bar{x}} \times 100\,\%$$
Brukes for repeterbarhet [Kval og kvant analyse.pdf, p. 2].

## Worked example
**H24 oppg. 1(c): forklar «LOQ»** (2 p) [Eksamen_IMAK2008_24.pdf, oppg. 1(c); LF eksamen H2024 IMAK2008.pdf, p. 3]
1. **Skriv ut forkortelsen:** Limit of Quantification, kvantifiseringsgrensen.
2. **Definer i ord:** Den laveste konsentrasjonen av et stoff som kan kvantifiseres med akseptabel nøyaktighet og presisjon.
3. **Gi kriteriet:** Signal/støy ≥ 10 (mot ≥ 3 for LOD) [Kval og kvant analyse.pdf, p. 10; chromatographgy_basics_part2.pdf, p. 190].
4. **Sett i forhold til LOD:** LOQ er alltid høyere enn LOD. LOD sier «stoffet er der», LOQ sier «vi kan måle hvor mye».
5. **(Bonus) Hvordan den bestemmes i validering:** Ved å analysere prøver med analytt på dette nivået, ikke ved å ekstrapolere fra høyere konsentrasjoner [chromatographgy_basics_part2.pdf, p. 196].

## Faded example
**Planlegg en enkel validering (bokas prosedyre)** [chromatographgy_basics_part2.pdf, p. 198–199]

Anta at cLOD for metoden er funnet til 0,03 µg/mL (illustrativt tall, ikke fra kursfilene).
1. **cLOQ:** Prosedyren i boka bruker cLOQ = 3 × cLOD = 0,09 µg/mL. (NB: bokas S/N-definisjon gir 10/3 × cLOD, se «Exam traps».)
2. **$c_{max}$:** F.eks. 50 × cLOQ = 4,5 µg/mL.
3. **(try)** Hvilke spikede nivåer, og hvor mange replikater? → cLOQ (n = 6), ¼ $c_{max}$ = 1,125 (n = 1), ½ $c_{max}$ = 2,25 (n = 6), ¾ $c_{max}$ = 3,375 (n = 1), $c_{max}$ = 4,5 (n = 6). Alle analyseres samme dag, med IS ved ca. 20–40 % av signalet ved $c_{max}$.
4. **(try)** Hvordan sjekkes lineariteten? → Ett tilfeldig replikat fra hver av cLOQ, ½ $c_{max}$ og $c_{max}$, pluss ¼ og ¾ $c_{max}$, altså fem punkter.
5. **(try)** Hvordan finnes repeterbarheten innen serie? → RSD av de seks replikatene på hvert av de tre nivåene.
6. **(try)** Og mellom serier? → Én prøve per nivå hver dag i 5 påfølgende dager, pluss ett tilfeldig replikat fra dag 1 (n = 6).
7. **(try)** Nøyaktighet? → Nye spikede prøver på cLOQ, ½ $c_{max}$ og $c_{max}$ (n = 6 hver), kvantifisert mot kalibreringskurven. Funnet/teoretisk skal være ca. 100 %.

## Exam traps
- **LOD og LOQ byttet om**: LOD er S/N = 3 (detekterbar), LOQ er S/N = 10 (kvantifiserbar). LOQ > LOD [Kval og kvant analyse.pdf, p. 10; LF eksamen H2024 IMAK2008.pdf, p. 3].
- **LOQ = 3 × LOD eller 10/3 × LOD?** Boka definerer cLOQ ved S/N = 10 (dvs. ≈ 3,3 × cLOD) [chromatographgy_basics_part2.pdf, p. 190], men det enkle valideringseksempelet regner cLOQ = 3 × cLOD [chromatographgy_basics_part2.pdf, p. 198]. På eksamen er det tryggest å oppgi S/N-kriteriene.
- **Ekstrapolere LOD fra høye konsentrasjoner**: Skal unngås. Analyser prøver på nivået [chromatographgy_basics_part2.pdf, p. 196].
- **Nøyaktighet og presisjon forveksles**: Presisjon (repeterbarhet) er spredning mellom replikater (RSD). Nøyaktighet er hvor nær sann verdi man treffer (funnet/teoretisk ≈ 100 %) [chromatographgy_basics_part2.pdf, p. 197].
- **Kvantifisering utenfor lineært område**: Over $c_1$ er responsen ikke-lineær, og over $c_2$ er detektoren mettet [Kval og kvant analyse.pdf, p. 11].
- **Bred topp med samme areal er like bra**: Nei. Bredere og lavere topp gir lavere S/N og dårligere deteksjonsgrense [chromatographgy_basics_part2.pdf, p. 191].

## Past exam tasks
- **H2024 oppg. 1(c)** (10 p totalt, 2 p hører hit): forklar kort «LOQ».
- **H2025 oppg. 8** (indirekte): kalibreringsområdet 2,5–20 mg/L, der den ukjente prøven må ligge innenfor det lineære området (se side 17).

## Test yourself
**Q:** En topp har høyde H = 12 og støybåndet h = 4 (samme enhet). Er den kvantifiserbar?
**A:** S/N = 2H/h = 2·12/4 = 6. Den er over LOD (3), men under LOQ (10), så den er detekterbar, men ikke kvantifiserbar [Kval og kvant analyse.pdf, p. 10].

**Q:** Nevn sju parametere som undersøkes i metodevalidering.
**A:** LOD/LOQ, linearitet og område, repeterbarhet (innen og mellom), nøyaktighet, selektivitet, robusthet og stabilitet [Kval og kvant analyse.pdf, p. 11; chromatographgy_basics_part2.pdf, p. 196].

**Q:** Hvordan kan nøyaktigheten bestemmes når referansemateriale mangler?
**A:** Spike blank matriks på tre nivåer, kvantifiser mot kalibreringskurven og regn funnet/teoretisk (ca. 100 %). Alternativt sammenlign med en annen, etablert metode [chromatographgy_basics_part2.pdf, p. 197].

**Q:** Hvordan testes robusthet mot MF-pH?
**A:** Analyser ved litt høyere og lavere pH (f.eks. 5,3 og 5,7 når metoden bruker 5,5). Ingen signifikant endring betyr at pH ikke er kritisk [chromatographgy_basics_part2.pdf, p. 197–198].

**Q:** Hvorfor gir bedre kromatografisk effektivitet lavere deteksjonsgrense?
**A:** Smalere topp med samme areal er høyere, så S/N blir høyere [chromatographgy_basics_part2.pdf, p. 191].

## Sources
- [Kval og kvant analyse.pdf, p. 2, 10–11]
- [chromatographgy_basics_part2.pdf, p. 190–191, 196–199] (p. = boksidetall; PDF-side = bokside − 84)
- [Eksamen_IMAK2008_24.pdf, oppg. 1(c)] / [LF eksamen H2024 IMAK2008.pdf, p. 3]
