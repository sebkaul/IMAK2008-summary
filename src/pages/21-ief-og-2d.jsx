import { Section, MentalModel, Def, Example, FadedExample, Trap, Block, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, tone } from '../components'

const PK = 'Proteinkarakterisering del 1 m notater.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const OV = 'Øving elektroforese med LF.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'

export const meta = {
  title: 'Isoelektrisk fokusering og 2D-elektroforese',
  topic: 'elektroforese',
  examWeight: { level: 'medium', note: 'H24 2(d) (8 p: IEF-prinsipp, pH-gradient, bæreramfolytt, 2D). H25 oppg. 9 delvis (amfolytter → IEF, vertikal + horisontal → 2D). Øving oppg. 1 og 3' },
  examTasks: [
    'H2024: 2(d) (index: side 21)',
    'H2025: oppg. 9 (kombiner utsagn og metode) (index: side 20–21, 23–24, 26)',
    'H2024 oppg. 2(d) (8 p): (i) prinsippet for IEF, (ii) to metoder for stabil pH-gradient, (iii) hva er en bæreramfolytt, (iv) hva er 2D-elektroforese og når brukes den.',
    'H2025 oppg. 9 (5 p totalt, automatisk rettet, ingen fasit i LF): «Bruk av amfolytter i metoden» → IEF, og «Vertikal + horisontal separasjon/analyse» → 2D-elektroforese [UTLEDET fra slide 51 og 58 — ingen fasit].',
  ],
  buildsOn: ['09-ionebytterkromatografi', '19-elektroforese-teori-og-geler', '20-sds-page'],
  usedIn: ['22-geldeteksjon-og-western-blot', '26-ce-metoder-og-cec'],
  sources: [
    `[${PK}, slide 47–61]`,
    `[${B2}, p. 134] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[${OV}, p. 1–2]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 2(d)] / [${LF24}, p. 11–13]`,
    '[IMAK2008 eksamen H2025.pdf, oppg. 9]',
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hva er det isoelektriske punktet (pI)?', a: `pH der proteinmolekylet er elektrisk nøytralt (nettoladning = 0) [${PK}, slide 47].` },
    { id: 'p2', kind: 'pretest', q: 'Er IEF en kinetisk prosess eller en likevektsprosess?', a: `En likevektsprosess. Proteinene vandrer til sin pI og blir der [${B2}, p. 134].` },
    { id: 'p3', kind: 'pretest', q: 'Hva separeres i hver dimensjon i vanlig 2D-elektroforese?', a: `1. dimensjon: pI (IEF). 2. dimensjon: størrelse (SDS-PAGE) [${PK}, slide 58; ${OV}, p. 2].` },
    { id: 't1', q: 'Et protein med pI 6 settes på i den basiske enden av en IEF-gel (pH 9). Hvilken ladning har det, og hvilken vei vandrer det?', a: `Negativ (pH > pI), så det vandrer mot anoden til det når pH 6 og stopper [${OV}, p. 1; ${PK}, slide 48].` },
    { id: 't2', q: 'Hva er IPG-strips laget av?', a: `Akrylamidderivater med fri karboksylsyre eller tertiær aminogruppe, kopolymerisert med akrylamid og bisakrylamid, slik at gradienten er immobilisert [${PK}, slide 56].` },
    { id: 't3', q: 'Hva er fordelene med 2D-DIGE fremfor vanlig 2D?', a: `Inntil 3 prøver på samme gel (fluorescerende fargestoffer), lavere kostnader, mindre variasjon mellom geler og høyere sensitivitet og nøyaktighet (intern standard) [${PK}, slide 61].` },
    { id: 't4', q: 'Hvordan kan 2D brukes i kreftforskning?', a: `Sammenlign 2D-geler av friskt vev og tumorvev. Proteinflekker som bare finnes, eller er mye sterkere, i tumor kan være biomarkører [${PK}, slide 60].` },
    { id: 't5', q: 'Hvilken pH-oppløsning gir en naturlig amfolytt-gradient vs. en smal IPG-strip?', a: `0,02 pH vs. 0,01 pH [${B2}, p. 134].` },
  ],
  equations: [],
}

/* IEF in pH gradient */
function IEFStripe() {
  const X = (ph) => 30 + ((ph - 3) / 7) * 400
  return (
    <Svg w={460} h={200} label="IEF i en pH-gradient">
      <defs>
        <linearGradient id="ph21" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--c-trap)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--c-definition)" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect x={30} y={70} width={400} height={50} style={{ fill: 'url(#ph21)', stroke: tone('ink') }} />
      {[3, 5, 7, 8, 10].map((p) => <Label key={p} x={X(p)} y={140} size={11}>{p}</Label>)}
      <Label x={20} y={100} anchor="end" size={11}>+</Label>
      <Label x={440} y={100} anchor="start" size={11}>−</Label>
      <Label x={30} y={160} anchor="start" size={10}>anode (pH 3)</Label>
      <Label x={430} y={160} anchor="end" size={10}>katode (pH 10)</Label>
      <rect x={X(5) - 3} y={72} width={6} height={46} style={{ fill: tone('var-a') }} />
      <rect x={X(8) - 3} y={72} width={6} height={46} style={{ fill: tone('var-e') }} />
      <Arrow x1={X(9.5)} y1={50} x2={X(5.2)} y2={50} t="var-a" />
      <Label x={X(9.5)} y={42} t="var-a" size={10}>pI 5: − → 0</Label>
      <Arrow x1={X(3.3)} y1={30} x2={X(7.8)} y2={30} t="var-e" />
      <Label x={X(3.3)} y={22} anchor="start" t="var-e" size={10}>pI 8: + → 0</Label>
      <Arrow x1={X(5.6)} y1={185} x2={X(5.1)} y2={185} t="trap" head={7} />
      <Label x={X(5.7)} y={189} anchor="start" t="trap" size={10}>forbi pI → tvunget tilbake</Label>
    </Svg>
  )
}

/* Net charge vs pH */
function Ladning() {
  const X = (ph) => 50 + ((ph - 3) / 8) * 380, Y = (q) => 120 - q * 18
  return (
    <Svg w={460} h={250} label="Nettoladning mot pH">
      <Arrow x1={50} y1={120} x2={440} y2={120} />
      <Arrow x1={50} y1={230} x2={50} y2={10} />
      {[3, 5, 7, 9, 11].map((p) => <Label key={p} x={X(p)} y={136} size={11}>{p}</Label>)}
      <Label x={440} y={152} anchor="end" size={11}>pH</Label>
      <Label x={56} y={14} anchor="start" size={11}>nettoladning</Label>
      <Curve t="topic" points={Array.from({ length: 17 }, (_, i) => { const p = 3 + i * 0.5; return [X(p), Y(-1.5 * (p - 6) - 0.05 * (p - 6) ** 3)] })} />
      <circle cx={X(6)} cy={120} r={5} style={{ fill: tone('var-d') }} />
      <Label x={X(6) + 8} y={112} anchor="start" t="var-d" size={12}>pI</Label>
      <Label x={X(4)} y={40} t="var-c" size={11}>positiv → mot katoden</Label>
      <Label x={X(9)} y={210} t="var-a" size={11}>negativ → mot anoden</Label>
    </Svg>
  )
}

/* Carrier ampholytes */
function Amfolytter() {
  const cols = ['var-a', 'var-f', 'var-b', 'var-c', 'var-e', 'var-d']
  const dots = Array.from({ length: 30 }, (_, i) => [30 + ((i * 47) % 400), 50 + ((i * 13) % 30), i % 6])
  return (
    <Svg w={460} h={210} label="Bæreramfolytter danner pH-gradienten">
      <Label x={20} y={34} anchor="start" size={11}>før strøm: jevnt blandet</Label>
      <rect x={20} y={42} width={420} height={44} style={{ fill: 'none', stroke: tone('ink') }} />
      {dots.map(([x, y, c], i) => <circle key={i} cx={x} cy={y} r={4} style={{ fill: tone(cols[c]) }} />)}
      <Label x={20} y={114} anchor="start" size={11}>etter strøm: soner etter pI → trapp av pH</Label>
      {cols.map((c, i) => <rect key={c} x={20 + i * 70} y={122} width={70} height={44} style={{ fill: tone(c), opacity: 0.45, stroke: tone('ink') }} />)}
      <Label x={20} y={184} anchor="start" size={10}>anode (+)</Label>
      <Label x={440} y={184} anchor="end" size={10}>katode (−)</Label>
      <Label x={230} y={204} size={10}>surere enn pI: tar opp H⁺ → mot katoden · mer basisk: gir fra seg H⁺ → mot anoden</Label>
    </Svg>
  )
}

/* 2D */
function ToD() {
  const spots = [[140, 90, 6], [180, 130, 4], [230, 80, 5], [260, 160, 7], [300, 110, 4], [330, 200, 5], [200, 210, 3], [370, 140, 4], [160, 180, 5], [290, 230, 3], [350, 70, 4], [240, 120, 3]]
  return (
    <Svg w={460} h={290} label="2D-elektroforese">
      <rect x={20} y={20} width={80} height={14} style={{ fill: 'url(#ph21)', stroke: tone('ink') }} />
      <Label x={60} y={50} size={10}>steg 1: IPG-strip</Label>
      <Arrow x1={20} y1={64} x2={100} y2={64} t="var-a" />
      <Label x={60} y={80} size={9} t="var-a">1. dim: pI (IEF)</Label>
      <rect x={120} y={30} width={290} height={12} style={{ fill: tone('muted'), opacity: 0.5 }} />
      <rect x={120} y={42} width={290} height={230} style={{ fill: `color-mix(in srgb, ${tone('var-c')} 10%, var(--bg))`, stroke: tone('ink') }} />
      {spots.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} style={{ fill: tone('var-b'), opacity: 0.7 }} />)}
      <Arrow x1={420} y1={50} x2={420} y2={260} t="var-c" />
      <Label x={416} y={150} anchor="end" size={9} t="var-c"></Label>
      <Label x={265} y={286} size={10} t="var-c">2. dimensjon: størrelse (SDS-PAGE) — stor Mw øverst, liten nederst</Label>
      <Label x={130} y={26} anchor="start" size={9}>pH 3 → 10</Label>
    </Svg>
  )
}

const band = (x, c) => Math.exp(-((x - c) ** 2) / (2 * 0.12 * 0.12))

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Proteinet stopper der det er nøytralt">
        <MentalModel cite={`[${OV}, p. 1; ${PK}, slide 48–52, 56, 58; ${B2}, p. 134]`}>
          Et proteins nettoladning avhenger av pH: under <V c="d">pI</V> er det positivt, over pI negativt. IEF utnytter dette ved å legge en stabil pH-gradient i gelen. Et protein som står på «feil» side av sin pI er ladet og trekkes mot elektroden som skyver det mot pI. Ved pI er ladningen null, og det stopper. Vandrer det forbi, blir det ladet med motsatt fortegn og «tvinges» tilbake.{' '}
          Proteinene fokuseres derfor til skarpe bånd, og det er en likevektsprosess, ikke en kappløp-prosess. pH-gradienten lages enten av bæreramfolytter som selv vandrer til sin pI og danner buffersoner, eller av en gradient som er støpt fast i en strip (IPG). Fordi pI og størrelse er uavhengige egenskaper, gir IEF etterfulgt av SDS-PAGE i en vinkelrett retning (2D) svært høy oppløsning, og tusenvis av proteiner kan skilles på én gel.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Isoelektrisk fokusering (IEF)" cite={`[${PK}, slide 47]`}>Separasjonsteknikk der proteinene separeres elektroforetisk på grunnlag av forskjeller i isoelektrisk punkt (pI).</Def>
        <Columns>
          <div>
            <Def term="Isoelektrisk punkt (pI)" cite={`[${PK}, slide 47–48]`}>pH der proteinmolekylet er elektrisk nøytralt (ladning = 0). Avhenger av aminosyresekvensen. Proteiners pI ligger normalt mellom pH 3 og 11.</Def>
            <Def term="Ladning vs. pH" cite={`[${OV}, p. 1]`}>Ved pH lavere enn pI er proteinet positivt ladet, ved pH høyere enn pI negativt ladet. Når proteinet når pI, stopper migrasjonen. IEF gir derfor direkte informasjon om pI.</Def>
          </div>
          <Diagram title="Nettoladning mot pH" caption="Kurveskisse." cite={`[${OV}, p. 1; ${PK}, slide 47]`}><Ladning /></Diagram>
        </Columns>
        <Def term="«SDS-PAGE» + IEF" cite={`[${PK}, slide 47]`}>Elektroforesemetoden med høyest oppløsning. Eksempel på bruk: påvisning av antistoffer (f.eks. IgG).</Def>
        <Columns>
          <div>
            <Def term="Prinsipp" cite={`[${PK}, slide 48–49]`}>Polyakrylamidgel med stabil pH-gradient. Proteinene beveger seg gjennom pH-gradienten, og nettoladningen endrer seg med pH. Proteinene vandrer mot pH der nettoladning = 0, altså pI. Proteiner som beveger seg ut av pI-området blir «tvunget» tilbake. Hvert protein vandrer i riktig retning i forhold til sin ladning til det dannes et tydelig bånd ved proteinets isoelektriske pH.</Def>
            <Def term="IEF som likevektsprosess (bok)" cite={`[${B2}, p. 134]`}>pH-gradienten dannes ved en forutgående elektroforese der amfolyttene (polyaminokarboksylsyrer) fordeler seg i gelen ved sin pI. Det gir en naturlig pH-gradient med oppløsning 0,02 pH. Kommersielle strips med immobilisert gradient finnes for bredt (pH 3–10) og smalt område (oppløsning 0,01 pH). IEF gjøres oftest som horisontal tynnsjiktselektroforese.</Def>
          </div>
          <Diagram title="IEF i en pH-gradient" cite={`[${PK}, slide 48–49]`}><IEFStripe /></Diagram>
        </Columns>
        <Def term="To metoder for stabil, kontinuerlig pH-gradient" cite={`[${PK}, slide 50]`}>(1) bæreramfolytter (polyaminokarboksylsyrer) og (2) immobiliserte pH-gradient-strips (IPG). IEF er første trinn i en 2D-elektroforese.</Def>
        <Columns>
          <Def term="Bæreramfolytt" cite={`[${PK}, slide 51–52]`}>En kjemisk forbindelse som kan reagere både som syre og base. Alle har små variasjoner i pKa-verdier og molekylvekt, og pH-gradienten består av 50–100 bæreramfolytter som sprer seg under elektroforesen. I buffer surere enn amfolyttens pI tar amfolytten opp H⁺ og vandrer mot katoden. I buffer mer basisk enn pI gir den fra seg H⁺ og vandrer mot anoden. Amfolyttene danner buffersoner med ulik pH når strømmen settes på, og proteinene vandrer til sitt isoelektriske punkt. Brukes i tube-geler (kolonne- eller kapillærrør), vertikale geler (PAGE) og i løsning (væskefase-IEF).</Def>
          <Diagram title="Bæreramfolytter danner pH-gradienten" cite={`[${PK}, slide 51–52]`}><Amfolytter /></Diagram>
        </Columns>
        <Def term="IPG (immobilisert pH-gradient)" cite={`[${PK}, slide 56–57]`}>pH-gradienten er bundet til lett håndterbare strips for éndimensjonale analyser. Stort utvalg i pH-gradienter og striplengder (Bio-Rad f.eks. 7–24 cm), som passer til vertikale elektroforesesystemer. Akrylamidderivater med en fri karboksylsyre eller tertiær aminogruppe, kopolymerisert med akrylamid og bisakrylamid. NB: krever eget utstyr i tillegg til PAGE.</Def>
        <Def term="IEF med SDS-PAGE-utstyr" cite={`[${PK}, slide 54]`}>Bruker proteinelektroforeseutstyret med IEF-prøvebuffer, anode- og katodebuffer, IEF-standarder og egne spesialgeler. Katode og anode byttes om på kammeret, dvs. rød mot svart og svart mot rød når spenningen kobles til.</Def>
        <Def term="Eksempler på bruk av IEF" cite={`[${PK}, slide 53, 55]`}>Teste batcher av EPO (erytropoietin) og IEF i kolonne.</Def>
        <Def term="Begrensning ved IEF" cite={`[${OV}, p. 1]`}>Gir kun info om isoelektrisk punkt, ikke molvekt. Kan være vanskelig å skille proteiner med lik pI.</Def>
        <Columns>
          <div>
            <Def term="2D-elektroforese" cite={`[${PK}, slide 58]`}>Todimensjonal metode som skiller proteiner i to retninger basert på ladning og størrelse (molvekt). Benyttes når én metode ikke er god nok i seg selv til å separere alle komponentene i en prøve. Vanlig: (1) separasjon etter isoelektrisk punkt, (2) SDS-PAGE etter størrelse. Høyoppløsnings-2D gjør det mulig å separere tusenvis av polypeptider på en enkelt plategel. Resultatet kan visualiseres ved gelfarging og evt. overføres til membran og fremkalles med antistoffer (Western blotting, side 22).</Def>
            <Def term="2D i boka" cite={`[${B2}, p. 134; ${OV}, p. 2]`}>Ortogonal selektivitet. Etter IEF på en pH-gradientstrip legges stripen langs én side av gelen for andre dimensjon, og SDS gir separasjon kun etter størrelse. Øvingen: man får et todimensjonalt mønster av proteinflekker med betydelig bedre oppløsning enn med én metode. I gel-IEF skjer separasjonen i en gel med pH-gradient, mens kapillær-IEF gir høy oppløsning og rask analyse.</Def>
          </div>
          <Diagram title="2D-elektroforese" cite={`[${B2}, p. 134, Fig. 6.4; ${PK}, slide 58]`}><ToD /></Diagram>
        </Columns>
        <Def term="Bruksområder for 2D" cite={`[${PK}, slide 59–60]`}>Biomedisin, biokjemi og proteomikk, for å finne endringer i proteiner ved sykdom. Kreftforskning (biomarkøroppdagelse): sammenlign friskt vev med tumorvev, der flekker som bare finnes (eller er mye sterkere) i tumor kan være biomarkører. Kvalitetskontroll i matindustrien: avsløre matsvindel (proteiner fra billigere arter) eller varmeskadde proteiner.</Def>
        <Def term="2D-DIGE (differanse-gelelektroforese)" cite={`[${PK}, slide 61]`}>Videreutviklet fra vanlig 2D. Bruker inntil 3 fluorescerende fargestoffer, slik at inntil 3 prøver kan analyseres på samme gel. Sammenlignet med vanlig 2D gir det lavere kostnader, minimerer variasjon mellom geler, og gir høyere sensitivitet og nøyaktighet (intern standard).</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Block kind="equation" title="Ingen ligninger i kursmaterialet for IEF og 2D" cite={`[${B2}, p. 134]`}>
          Oppløsningen i en naturlig amfolytt-gradient er oppgitt som 0,02 pH, og for smale IPG-strips 0,01 pH.
        </Block>
        <Plot
          title="Hvor stopper proteinet?"
          caption="Lilla kurve: skisse av nettoladning mot pH (positiv under pI, negativ over). Blått bånd: der proteinet fokuseres i gelstripen — ved pH = pI, uavhengig av hvor det startet. Slideren setter pI (normalt pH 3–11). Kurveformen er illustrasjon; kursmaterialet gir ingen ligning."
          cite={`[${PK}, slide 47–49; ${OV}, p. 1]`}
          x={{ min: 3, max: 11, label: 'pH i gelstripen' }}
          y={{ label: 'nettoladning / bånd', min: -1.2, max: 1.2 }}
          params={[{ key: 'pi', label: 'pI', min: 3, max: 11, step: 0.1, value: 6 }]}
          series={[
            { key: 'q', label: 'nettoladning (skisse)', t: 'var-d', fn: (ph, p) => -Math.tanh((ph - p.pi) / 1.5) },
            { key: 'b', label: 'fokusert bånd', t: 'var-b', fn: (ph, p) => band(ph, p.pi) },
          ]}
        />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 2(d): isoelektrisk fokusering (8 p)"
          steps={[
            { title: 'i) Prinsipp:', body: 'IEF separerer proteiner elektroforetisk på grunnlag av forskjeller i pI. pI er pH der proteinet er elektrisk nøytralt (ladning = 0), og den avhenger av aminosyresekvensen.' },
            { body: 'Det brukes en polyakrylamidgel med stabil pH-gradient. Proteinets nettoladning endrer seg med pH mens det vandrer gjennom gradienten.' },
            { body: 'Proteinene vandrer mot pH der nettoladning = 0, altså pI. De som beveger seg forbi, «tvinges» tilbake. Proteiners pI ligger normalt mellom pH 3 og 11.' },
            { body: 'SDS-PAGE + IEF er elektroforesemetoden med høyest oppløsning.' },
            { title: 'ii) To metoder for stabil pH-gradient:', body: 'Bæreramfolytter (polyaminokarboksylsyrer) og immobiliserte pH-gradient-strips (IPG).' },
            { title: 'iii) Bæreramfolytt:', body: 'En kjemisk forbindelse som kan reagere som både syre og base. 50–100 amfolytter med litt ulike pKa og molekylvekt brukes.' },
            { body: 'I buffer surere enn pI tar amfolytten opp H⁺ og vandrer mot katoden. I mer basisk buffer gir den fra seg H⁺ og vandrer mot anoden.' },
            { body: 'Når strømmen settes på, danner amfolyttene buffersoner med ulik pH, og proteinene vandrer til sin pI.' },
            { title: 'iv) 2D-elektroforese:', body: 'Brukes når én metode ikke er god nok til å separere alle komponentene. Vanlig: (1) bestemmelse av pI, (2) SDS-PAGE etter størrelse.' },
            { body: 'Kan separere tusenvis av polypeptider på én plategel. Visualiseres ved gelfarging, evt. Western blotting.' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 2(d); ${LF24}, p. 12–13]`}
        />
        <FadedExample
          title="Øving oppg. 3: prinsippet bak 2D-elektroforese"
          steps={[
            { body: '2D-PAGE kombinerer to forskjellige separasjonsmetoder.' },
            { title: 'Hva skjer i 1. dimensjon, og hva separeres det etter?', body: 'IEF. Proteinene separeres etter pI, vandrer til pH der nettoladningen er null og fokuseres til smale bånd.', hidden: true },
            { title: 'Hvordan overføres prøven til 2. dimensjon?', body: `IEF-stripen legges oppå en SDS-PAGE-gel [${B2}, p. 134].`, hidden: true },
            { title: 'Hva separeres det etter i 2. dimensjon, og hvorfor bare det?', body: 'Molekylvekt. SDS gir lik ladning per størrelse, så bare størrelsen teller.', hidden: true },
            { title: 'Hva blir resultatet, og hvorfor er det bedre enn én metode?', body: 'Et todimensjonalt mønster av proteinflekker. pI og størrelse er uavhengige (ortogonale), så oppløsningen blir mye bedre.', hidden: true },
            { title: 'Hvordan skiller gel-IEF seg fra kapillær-IEF?', body: 'Gel-IEF skjer i en gel med pH-gradient, mens kapillær-IEF skjer i et kapillær og gir høy oppløsning og rask analyse (side 26).', hidden: true },
          ]}
          cite={`[${OV}, p. 2]`}
        />
        <Example
          title="H25 oppg. 9 (delvis) — [UTLEDET, ingen fasit i LF]"
          steps={[
            { title: '«Bruk av amfolytter i metoden» →', body: 'IEF (utledet fra slide 51).' },
            { title: '«Vertikal + horisontal separasjon/analyse» →', body: '2D-elektroforese (utledet fra slide 58).' },
            { title: 'NB:', body: 'Oppgaven ble automatisk rettet, og løsningsforslaget gir ingen fasit. Svarene er utledet.' },
          ]}
          cite={`[IMAK2008 eksamen H2025.pdf, oppg. 9; ${PK}, slide 51, 58]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="IEF = separasjon etter størrelse" cite={`[${LF24}, p. 11]`}>Nei. Det er pI. Størrelse er SDS-PAGE. H24 2(b) har akkurat denne distraktoren.</Trap>
        <Trap title="Amfolytt-retning feil vei" cite={`[${PK}, slide 51]`}>I buffer <em>surere</em> enn pI tar amfolytten opp H⁺ (blir positiv) og går mot <em>katoden</em> (−).</Trap>
        <Trap title="IEF er kinetisk" cite={`[${B2}, p. 134]`}>Den er en likevektsprosess. Proteinene stopper ved pI.</Trap>
        <Trap title="Rekkefølgen i 2D" cite={`[${PK}, slide 58; ${B2}, p. 134]`}>1. dimensjon er IEF (pI), 2. dimensjon er SDS-PAGE (størrelse). SDS først ville ødelagt proteinets naturlige ladning.</Trap>
        <Trap title="IPG med vanlig PAGE-utstyr" cite={`[${PK}, slide 54, 57]`}>IPG krever eget utstyr i tillegg til PAGE. IEF med SDS-PAGE-utstyr krever spesialgeler og ombyttet polaritet.</Trap>
        <Trap title="IEF gir molvekt" cite={`[${OV}, p. 1]`}>Nei. Den gir bare pI, og proteiner med lik pI er vanskelige å skille.</Trap>
      </Section>
    </>
  )
}
