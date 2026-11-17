---
slug: 21-ief-og-2d
title: "Isoelektrisk fokusering og 2D-elektroforese"
topic: elektroforese
exam_weight: medium
exam_weight_note: "H24 2(d) (8 p: IEF-prinsipp, pH-gradient, bæreramfolytt, 2D). H25 oppg. 9 delvis (amfolytter → IEF, vertikal + horisontal → 2D). Øving oppg. 1 og 3"
builds_on: [09-ionebytterkromatografi, 19-elektroforese-teori-og-geler, 20-sds-page]
used_in: [22-geldeteksjon-og-western-blot, 26-ce-metoder-og-cec]
sources: ["Proteinkarakterisering del 1 m notater.pdf", "chromatographgy_basics_part2.pdf", "Øving elektroforese med LF.pdf", "Eksamen_IMAK2008_24.pdf", "LF eksamen H2024 IMAK2008.pdf", "IMAK2008 eksamen H2025.pdf"]
---

## Pretest
**Q:** Hva er det isoelektriske punktet (pI)?
**A:** pH der proteinmolekylet er elektrisk nøytralt (nettoladning = 0) [Proteinkarakterisering del 1 m notater.pdf, slide 47].

**Q:** Er IEF en kinetisk prosess eller en likevektsprosess?
**A:** En likevektsprosess. Proteinene vandrer til sin pI og blir der [chromatographgy_basics_part2.pdf, p. 134].

**Q:** Hva separeres i hver dimensjon i vanlig 2D-elektroforese?
**A:** 1. dimensjon: pI (IEF). 2. dimensjon: størrelse (SDS-PAGE) [Proteinkarakterisering del 1 m notater.pdf, slide 58; Øving elektroforese med LF.pdf, p. 2].

## Mental model
Et proteins nettoladning avhenger av pH: under pI er det positivt, over pI negativt [Øving elektroforese med LF.pdf, p. 1]. IEF utnytter dette ved å legge en stabil pH-gradient i gelen [Proteinkarakterisering del 1 m notater.pdf, slide 48–49]:
- Et protein som står på «feil» side av sin pI er ladet og trekkes mot elektroden som skyver det mot pI.
- Ved pI er ladningen null, og det stopper.
- Vandrer det forbi, blir det ladet med motsatt fortegn og «tvinges» tilbake.

Proteinene fokuseres derfor til skarpe bånd, og det er en likevektsprosess, ikke en kappløp-prosess [chromatographgy_basics_part2.pdf, p. 134]. pH-gradienten lages enten av bæreramfolytter som selv vandrer til sin pI og danner buffersoner, eller av en gradient som er støpt fast i en strip (IPG) [Proteinkarakterisering del 1 m notater.pdf, slide 50–52, 56]. Fordi pI og størrelse er uavhengige egenskaper, gir IEF etterfulgt av SDS-PAGE i en vinkelrett retning (2D) svært høy oppløsning, og tusenvis av proteiner kan skilles på én gel [Proteinkarakterisering del 1 m notater.pdf, slide 58; chromatographgy_basics_part2.pdf, p. 134].

## Concepts and definitions
- **Isoelektrisk fokusering (IEF)**: Separasjonsteknikk der proteinene separeres elektroforetisk på grunnlag av forskjeller i isoelektrisk punkt (pI) [Proteinkarakterisering del 1 m notater.pdf, slide 47].
- **Isoelektrisk punkt (pI)**: pH der proteinmolekylet er elektrisk nøytralt (ladning = 0). Avhenger av aminosyresekvensen [Proteinkarakterisering del 1 m notater.pdf, slide 47]. Proteiners pI ligger normalt mellom pH 3 og 11 [Proteinkarakterisering del 1 m notater.pdf, slide 48].
- **«SDS-PAGE» + IEF**: Elektroforesemetoden med høyest oppløsning. Eksempel på bruk: påvisning av antistoffer (f.eks. IgG) [Proteinkarakterisering del 1 m notater.pdf, slide 47].
- **Prinsipp** [Proteinkarakterisering del 1 m notater.pdf, slide 48–49]:
  - Polyakrylamidgel med stabil pH-gradient.
  - Proteinene beveger seg gjennom pH-gradienten, og nettoladningen endrer seg med pH.
  - Proteinene vandrer mot pH der nettoladning = 0, altså pI.
  - Proteiner som beveger seg ut av pI-området blir «tvunget» tilbake.
  - Hvert protein vandrer i riktig retning i forhold til sin ladning til det dannes et tydelig bånd ved proteinets isoelektriske pH.
- **Ladning vs. pH**: Ved pH lavere enn pI er proteinet positivt ladet, ved pH høyere enn pI negativt ladet. Når proteinet når pI, stopper migrasjonen. IEF gir derfor direkte informasjon om pI [Øving elektroforese med LF.pdf, p. 1].
- **IEF som likevektsprosess (bok)**: pH-gradienten dannes ved en forutgående elektroforese der amfolyttene (polyaminokarboksylsyrer) fordeler seg i gelen ved sin pI. Det gir en naturlig pH-gradient med oppløsning 0,02 pH. Kommersielle strips med immobilisert gradient finnes for bredt (pH 3–10) og smalt område (oppløsning 0,01 pH). IEF gjøres oftest som horisontal tynnsjiktselektroforese [chromatographgy_basics_part2.pdf, p. 134].
- **To metoder for stabil, kontinuerlig pH-gradient**: (1) bæreramfolytter (polyaminokarboksylsyrer) og (2) immobiliserte pH-gradient-strips (IPG). IEF er første trinn i en 2D-elektroforese [Proteinkarakterisering del 1 m notater.pdf, slide 50].
- **Bæreramfolytt** [Proteinkarakterisering del 1 m notater.pdf, slide 51–52]:
  - En kjemisk forbindelse som kan reagere både som syre og base.
  - Alle har små variasjoner i pKa-verdier og molekylvekt, og pH-gradienten består av 50–100 bæreramfolytter som sprer seg under elektroforesen.
  - I buffer surere enn amfolyttens pI tar amfolytten opp H⁺ og vandrer mot katoden. I buffer mer basisk enn pI gir den fra seg H⁺ og vandrer mot anoden.
  - Amfolyttene danner buffersoner med ulik pH når strømmen settes på, og proteinene vandrer til sitt isoelektriske punkt.
  - Brukes i tube-geler (kolonne- eller kapillærrør), vertikale geler (PAGE) og i løsning (væskefase-IEF).
- **IPG (immobilisert pH-gradient)** [Proteinkarakterisering del 1 m notater.pdf, slide 56–57]:
  - pH-gradienten er bundet til lett håndterbare strips for éndimensjonale analyser.
  - Stort utvalg i pH-gradienter og striplengder (Bio-Rad f.eks. 7–24 cm), som passer til vertikale elektroforesesystemer.
  - Akrylamidderivater med en fri karboksylsyre eller tertiær aminogruppe, kopolymerisert med akrylamid og bisakrylamid.
  - NB: krever eget utstyr i tillegg til PAGE.
- **IEF med SDS-PAGE-utstyr**: Bruker proteinelektroforeseutstyret med IEF-prøvebuffer, anode- og katodebuffer, IEF-standarder og egne spesialgeler. Katode og anode byttes om på kammeret, dvs. rød mot svart og svart mot rød når spenningen kobles til [Proteinkarakterisering del 1 m notater.pdf, slide 54].
- **Eksempler på bruk av IEF**: Teste batcher av EPO (erytropoietin) og IEF i kolonne [Proteinkarakterisering del 1 m notater.pdf, slide 53, 55].
- **Begrensning ved IEF**: Gir kun info om isoelektrisk punkt, ikke molvekt. Kan være vanskelig å skille proteiner med lik pI [Øving elektroforese med LF.pdf, p. 1].
- **2D-elektroforese** [Proteinkarakterisering del 1 m notater.pdf, slide 58]:
  - Todimensjonal metode som skiller proteiner i to retninger basert på ladning og størrelse (molvekt).
  - Benyttes når én metode ikke er god nok i seg selv til å separere alle komponentene i en prøve.
  - Vanlig: (1) separasjon etter isoelektrisk punkt, (2) SDS-PAGE etter størrelse.
  - Høyoppløsnings-2D gjør det mulig å separere tusenvis av polypeptider på en enkelt plategel.
  - Resultatet kan visualiseres ved gelfarging og evt. overføres til membran og fremkalles med antistoffer (Western blotting, side 22).
- **2D i boka**: Ortogonal selektivitet. Etter IEF på en pH-gradientstrip legges stripen langs én side av gelen for andre dimensjon, og SDS gir separasjon kun etter størrelse [chromatographgy_basics_part2.pdf, p. 134]. Øvingen: man får et todimensjonalt mønster av proteinflekker med betydelig bedre oppløsning enn med én metode. I gel-IEF skjer separasjonen i en gel med pH-gradient, mens kapillær-IEF gir høy oppløsning og rask analyse [Øving elektroforese med LF.pdf, p. 2].
- **Bruksområder for 2D**: Biomedisin, biokjemi og proteomikk, for å finne endringer i proteiner ved sykdom [Proteinkarakterisering del 1 m notater.pdf, slide 59]. Eksempler [Proteinkarakterisering del 1 m notater.pdf, slide 60]:
  - Kreftforskning (biomarkøroppdagelse): sammenlign friskt vev med tumorvev, der flekker som bare finnes (eller er mye sterkere) i tumor kan være biomarkører.
  - Kvalitetskontroll i matindustrien: avsløre matsvindel (proteiner fra billigere arter) eller varmeskadde proteiner.
- **2D-DIGE (differanse-gelelektroforese)**: Videreutviklet fra vanlig 2D. Bruker inntil 3 fluorescerende fargestoffer, slik at inntil 3 prøver kan analyseres på samme gel. Sammenlignet med vanlig 2D gir det lavere kostnader, minimerer variasjon mellom geler, og gir høyere sensitivitet og nøyaktighet (intern standard) [Proteinkarakterisering del 1 m notater.pdf, slide 61].

## Visuals
- **IEF i en pH-gradient** · prosessdiagram [Proteinkarakterisering del 1 m notater.pdf, slide 48–49]
  - Horisontal gelstripe med pH-gradient fra 3 (anode +, venstre) til 10 (katode −, høyre), farget fra rødt til blått.
  - To proteiner (pI 5 og pI 8) starter i hver sin ende med pil mot sin pI. Ladningssymbolet (+/−) krymper til 0 ved pI.
  - Ved pI står de som smale bånd. En liten pil viser «tvunget tilbake» hvis de vandrer forbi.
- **Nettoladning mot pH** · kurveskisse [Øving elektroforese med LF.pdf, p. 1; Proteinkarakterisering del 1 m notater.pdf, slide 47]
  - x-akse: pH (3–11). y-akse: nettoladning.
  - Synkende kurve som krysser 0 ved pI. Over aksen «positiv, vandrer mot katoden», under «negativ, vandrer mot anoden».
- **Bæreramfolytter danner pH-gradienten** · prosessdiagram [Proteinkarakterisering del 1 m notater.pdf, slide 51–52]
  - Før strøm: amfolytter (mange farger) jevnt blandet. Etter strøm: sortert i soner etter pI fra anode til katode, som gir en trapp av pH-verdier.
  - Etikett: «i surere buffer enn pI: tar opp H⁺ → mot katoden. I mer basisk buffer: gir fra seg H⁺ → mot anoden».
- **2D-elektroforese** · prosessdiagram [chromatographgy_basics_part2.pdf, p. 134, Fig. 6.4; Proteinkarakterisering del 1 m notater.pdf, slide 58]
  - Steg 1: IPG-strip med horisontal pil «1. dimensjon: pI (IEF)», pH 3 → 10.
  - Steg 2: stripen lagt langs toppen av en SDS-PAGE-gel, med vertikal pil «2. dimensjon: størrelse (SDS-PAGE)», stor Mw øverst og liten nederst.
  - Resultat: gel med mange flekker spredt i to dimensjoner.
- **Interactive plot: hvor stopper proteinet?**
  - Slider pI 3–11 (forelesning: normalt pH 3–11) og startposisjon (anode- eller katodeende).
  - Animer et bånd som vandrer i pH-gradienten og stopper ved valgt pI, med ladningsetikett (+/0/−) som oppdateres.
  - Toggle «legg til SDS-PAGE»: flekken flyttes også vertikalt etter Mw-slider (10–250 kD).

## Equations
> Ingen ligninger i kursmaterialet for IEF og 2D. Oppløsningen i en naturlig amfolytt-gradient er oppgitt som 0,02 pH, og for smale IPG-strips 0,01 pH [chromatographgy_basics_part2.pdf, p. 134].

## Worked example
**H24 oppg. 2(d): isoelektrisk fokusering** (8 p) [Eksamen_IMAK2008_24.pdf, oppg. 2(d); LF eksamen H2024 IMAK2008.pdf, p. 12–13]

*i) Prinsippet for IEF*
1. IEF separerer proteiner elektroforetisk på grunnlag av forskjeller i pI. pI er pH der proteinet er elektrisk nøytralt (ladning = 0), og den avhenger av aminosyresekvensen.
2. Det brukes en polyakrylamidgel med stabil pH-gradient. Proteinets nettoladning endrer seg med pH mens det vandrer gjennom gradienten.
3. Proteinene vandrer mot pH der nettoladning = 0, altså pI. De som beveger seg forbi, «tvinges» tilbake. Proteiners pI ligger normalt mellom pH 3 og 11.
4. SDS-PAGE + IEF er elektroforesemetoden med høyest oppløsning.

*ii) To metoder for stabil pH-gradient*
5. Bæreramfolytter (polyaminokarboksylsyrer) og immobiliserte pH-gradient-strips (IPG).

*iii) Hva er en bæreramfolytt?*
6. En kjemisk forbindelse som kan reagere som både syre og base. 50–100 amfolytter med litt ulike pKa og molekylvekt brukes.
7. I buffer surere enn pI tar amfolytten opp H⁺ og vandrer mot katoden. I mer basisk buffer gir den fra seg H⁺ og vandrer mot anoden.
8. Når strømmen settes på, danner amfolyttene buffersoner med ulik pH, og proteinene vandrer til sin pI.

*iv) 2D-elektroforese*
9. Brukes når én metode ikke er god nok til å separere alle komponentene. Vanlig: (1) bestemmelse av pI, (2) SDS-PAGE etter størrelse.
10. Kan separere tusenvis av polypeptider på én plategel. Visualiseres ved gelfarging, evt. Western blotting.

## Faded example
**Øving oppg. 3: prinsippet bak 2D-elektroforese** [Øving elektroforese med LF.pdf, p. 2]
1. 2D-PAGE kombinerer to forskjellige separasjonsmetoder.
2. **(try)** Hva skjer i 1. dimensjon, og hva separeres det etter? → IEF. Proteinene separeres etter pI, vandrer til pH der nettoladningen er null og fokuseres til smale bånd.
3. **(try)** Hvordan overføres prøven til 2. dimensjon? → IEF-stripen legges oppå en SDS-PAGE-gel [chromatographgy_basics_part2.pdf, p. 134].
4. **(try)** Hva separeres det etter i 2. dimensjon, og hvorfor bare det? → Molekylvekt. SDS gir lik ladning per størrelse, så bare størrelsen teller.
5. **(try)** Hva blir resultatet, og hvorfor er det bedre enn én metode? → Et todimensjonalt mønster av proteinflekker. pI og størrelse er uavhengige (ortogonale), så oppløsningen blir mye bedre.
6. **(try)** Hvordan skiller gel-IEF seg fra kapillær-IEF? → Gel-IEF skjer i en gel med pH-gradient, mens kapillær-IEF skjer i et kapillær og gir høy oppløsning og rask analyse (side 26).

## Exam traps
- **IEF = separasjon etter størrelse**: Nei. Det er pI. Størrelse er SDS-PAGE. H24 2(b) har akkurat denne distraktoren [LF eksamen H2024 IMAK2008.pdf, p. 11].
- **Amfolytt-retning feil vei**: I buffer *surere* enn pI tar amfolytten opp H⁺ (blir positiv) og går mot *katoden* (−) [Proteinkarakterisering del 1 m notater.pdf, slide 51].
- **IEF er kinetisk**: Den er en likevektsprosess. Proteinene stopper ved pI [chromatographgy_basics_part2.pdf, p. 134].
- **Rekkefølgen i 2D**: 1. dimensjon er IEF (pI), 2. dimensjon er SDS-PAGE (størrelse). SDS først ville ødelagt proteinets naturlige ladning [Proteinkarakterisering del 1 m notater.pdf, slide 58; chromatographgy_basics_part2.pdf, p. 134].
- **IPG med vanlig PAGE-utstyr**: IPG krever eget utstyr i tillegg til PAGE. IEF med SDS-PAGE-utstyr krever spesialgeler og ombyttet polaritet [Proteinkarakterisering del 1 m notater.pdf, slide 54, 57].
- **IEF gir molvekt**: Nei. Den gir bare pI, og proteiner med lik pI er vanskelige å skille [Øving elektroforese med LF.pdf, p. 1].

## Past exam tasks
- **H2024 oppg. 2(d)** (8 p): (i) prinsippet for IEF, (ii) to metoder for stabil pH-gradient, (iii) hva er en bæreramfolytt, (iv) hva er 2D-elektroforese og når brukes den.
- **H2025 oppg. 9** (5 p totalt, automatisk rettet, ingen fasit i LF): «Bruk av amfolytter i metoden» → IEF, og «Vertikal + horisontal separasjon/analyse» → 2D-elektroforese (utledet fra slide 51 og 58).

## Test yourself
**Q:** Et protein med pI 6 settes på i den basiske enden av en IEF-gel (pH 9). Hvilken ladning har det, og hvilken vei vandrer det?
**A:** Negativ (pH > pI), så det vandrer mot anoden til det når pH 6 og stopper [Øving elektroforese med LF.pdf, p. 1; Proteinkarakterisering del 1 m notater.pdf, slide 48].

**Q:** Hva er IPG-strips laget av?
**A:** Akrylamidderivater med fri karboksylsyre eller tertiær aminogruppe, kopolymerisert med akrylamid og bisakrylamid, slik at gradienten er immobilisert [Proteinkarakterisering del 1 m notater.pdf, slide 56].

**Q:** Hva er fordelene med 2D-DIGE fremfor vanlig 2D?
**A:** Inntil 3 prøver på samme gel (fluorescerende fargestoffer), lavere kostnader, mindre variasjon mellom geler og høyere sensitivitet og nøyaktighet (intern standard) [Proteinkarakterisering del 1 m notater.pdf, slide 61].

**Q:** Hvordan kan 2D brukes i kreftforskning?
**A:** Sammenlign 2D-geler av friskt vev og tumorvev. Proteinflekker som bare finnes, eller er mye sterkere, i tumor kan være biomarkører [Proteinkarakterisering del 1 m notater.pdf, slide 60].

**Q:** Hvilken pH-oppløsning gir en naturlig amfolytt-gradient vs. en smal IPG-strip?
**A:** 0,02 pH vs. 0,01 pH [chromatographgy_basics_part2.pdf, p. 134].

## Sources
- [Proteinkarakterisering del 1 m notater.pdf, slide 47–61]
- [chromatographgy_basics_part2.pdf, p. 134] (p. = boksidetall; PDF-side = bokside − 84)
- [Øving elektroforese med LF.pdf, p. 1–2]
- [Eksamen_IMAK2008_24.pdf, oppg. 2(d)] / [LF eksamen H2024 IMAK2008.pdf, p. 11–13]
- [IMAK2008 eksamen H2025.pdf, oppg. 9]
