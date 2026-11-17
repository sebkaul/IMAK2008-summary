import { Section, MentalModel, Def, Example, FadedExample, Trap, Block, Diagram, Svg, Box, Arrow, Label, Curve, Columns, tone } from '../components'

const H1 = 'HPLC-1-240925 Kopier.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const KOF = 'koffein _ISTD_student_rev2.pdf'

export const meta = {
  title: 'HPLC-systemet: løsemidler, pumper og injeksjon',
  topic: 'hplc',
  examWeight: {
    level: 'low',
    note: 'Ingen egen oppgave på H24 eller H25. Bakgrunnskunnskap for HPLC-casene (H24 1(e), 1(i); H25 oppg. 6, 8)',
  },
  examTasks: [
    'Ingen tasks_by_page-oppføring for side 04 i 00-index.md.',
    'Ingen egen oppgave om pumper, avgassing eller injeksjonsventil på H2024 eller H2025.',
    'Indirekte: H2025 oppg. 8 (ISTD-kvantifisering) forutsetter injeksjon og variasjon i injeksjonsvolum, se side 17. H2024 oppg. 1(a) spør hva en internstandard korrigerer for (variasjoner i prøvepreparering og injeksjon).',
  ],
  buildsOn: ['01-retensjon-og-selektivitet', '03-bandspredning-van-deemter'],
  usedIn: ['05-kolonner-og-partikler', '06-hplc-detektorer', '08-omvendt-fase-og-ionepar', '17-kvalitativ-og-kvantifiseringsmetoder'],
  sources: [
    `[${H1}, slide 1–7] (bare figurer, ingen notater)`,
    `[${B1}, p. 47–54] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Pensum.pdf, p. 1]',
    `[${KOF}, p. 1]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilke fem hoveddeler består et HPLC-system av?', a: `Pumpe(r), injektor, kolonne(r), detektor og databehandling (PC) [${B1}, p. 47; ${H1}, slide 3].` },
    { id: 'p2', kind: 'pretest', q: 'Hvorfor fyller man injeksjonsløkka med omtrent dobbelt løkkevolum?', a: `Da bestemmes injisert volum av løkkestørrelsen, og man får god kontroll på injisert mengde [${B1}, p. 50].` },
    { id: 'p3', kind: 'pretest', q: 'Hvorfor må mobilfasen avgasses?', a: `Oppløst luft kan gi problemer både i pumpene og i noen detektorer [${B1}, p. 49].` },
    { id: 't1', q: 'Beskriv forskjellen mellom load- og inject-posisjon i en injeksjonsventil.', a: `I load fylles løkka med sprøyte mens MF går direkte til kolonnen. I inject dreies rotoren, og MF skyver løkkas innhold inn på kolonnen [${B1}, p. 50].` },
    { id: 't2', q: 'Hvorfor gir en enkel stempelpumpe pulserende flow, og hvordan reduseres pulsingen?', a: `Stempelet veksler mellom innsug, uten flow ut, og pumping. Pulsingen reduseres med to-hode-pumper der hodene går i motfase, med pulsdemping eller med optimert eksenter [${H1}, slide 5–6].` },
    { id: 't3', q: 'Nevn tre metoder for avgassing av mobilfasen.', a: `Vakuum, ultralyd og helium-purging (erstatning med He) [${B1}, p. 49; ${H1}, slide 4].` },
    { id: 't4', q: 'Hvorfor skal en kolonne med salt i MF skylles med vann før metanol/acetonitril?', a: `For å fjerne salter først og hindre saltutfelling, korrosjon og mikrobevekst [${B1}, p. 49].` },
    { id: 't5', q: 'Hvilken LC-metode passer for et vannløselig molekyl med $\\log M_r$ ≈ 5?', a: `Gel-filtrering [${H1}, slide 3].` },
  ],
  equations: [],
}

/* HPLC system chain */
function System() {
  return (
    <Svg w={460} h={300} label="HPLC-systemet">
      <rect x={110} y={20} width={340} height={150} rx={12} style={{ fill: `color-mix(in srgb, ${tone('trap')} 7%, transparent)`, stroke: tone('trap'), strokeDasharray: '6 5' }} />
      <Label x={440} y={40} anchor="end" t="trap" size={13}>høytrykksdel</Label>
      <Box x={10} y={60} w={80} h={50} label="Solvent" sub="+ avgasser" t="muted" />
      <Box x={125} y={60} w={80} h={50} label="Pump" sub="(+ blander)" />
      <Box x={235} y={60} w={80} h={50} label="Injector" />
      <Box x={345} y={60} w={95} h={50} label="Kolonne" sub="(guard først)" />
      <Box x={345} y={200} w={95} h={50} label="Detector" />
      <Box x={200} y={200} w={100} h={50} label="PC" sub="data acquisition" t="muted" />
      <Box x={60} y={200} w={90} h={50} label="Waste" t="muted" />
      <Arrow x1={90} y1={85} x2={125} y2={85} />
      <Arrow x1={205} y1={85} x2={235} y2={85} />
      <Arrow x1={315} y1={85} x2={345} y2={85} />
      <Arrow x1={392} y1={110} x2={392} y2={200} />
      <Arrow x1={345} y1={238} x2={150} y2={238} />
      <Arrow x1={345} y1={212} x2={300} y2={212} dashed />
      <Label x={230} y={290} size={12}>rør av rustfritt stål eller PEEK</Label>
    </Svg>
  )
}

/* ellipse with label */
const Ell = ({ cx, cy, rx, ry, label, t }) => (
  <g>
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} style={{ fill: `color-mix(in srgb, ${tone(t)} 14%, transparent)`, stroke: tone(t), strokeWidth: 2 }} />
    <Label x={cx} y={cy + 5} size={13} t={t}>{label}</Label>
  </g>
)

/* Method selection: log Mr vs polarity */
function Metodevalg() {
  const X = (p) => 70 + p * 360, Y = (m) => 270 - (m - 1) * 48
  return (
    <Svg w={460} h={330} label="Metodevalg logMr mot polaritet">
      <Arrow x1={60} y1={280} x2={440} y2={280} />
      <Arrow x1={60} y1={280} x2={60} y2={20} />
      {[1, 2, 3, 4, 5, 6].map((m) => <Label key={m} x={50} y={Y(m) + 4} anchor="end" size={12}>{m}</Label>)}
      <Label x={66} y={20} anchor="start" size={13}><tspan baselineShift="super" fontSize="70%">10</tspan>log M<tspan baselineShift="sub" fontSize="72%">r</tspan></Label>
      <Label x={X(0.1)} y={298} size={12}>upolar</Label>
      <Label x={X(0.5)} y={298} size={12}>polar</Label>
      <Label x={X(0.9)} y={298} size={12}>ionisk</Label>
      <Label x={X(0.2)} y={320} t="muted" size={12}>← ikke vannløselig</Label>
      <Label x={X(0.8)} y={320} t="muted" size={12}>vannløselig →</Label>
      <Ell cx={X(0.25)} cy={Y(5)} rx={95} ry={42} label="gel-permeasjon" t="var-a" />
      <Ell cx={X(0.75)} cy={Y(5)} rx={95} ry={42} label="gel-filtrering" t="var-b" />
      <Ell cx={X(0.17)} cy={Y(2)} rx={70} ry={50} label="adsorpsjon / RP" t="var-c" />
      <Ell cx={X(0.5)} cy={Y(2.4)} rx={60} ry={40} label="fordeling" t="var-d" />
      <Ell cx={X(0.84)} cy={Y(1.8)} rx={70} ry={42} label="NP / ionebytting" t="var-e" />
    </Svg>
  )
}

/* Piston pump cross-section + flow profiles */
function Pumpe() {
  const sine = (x0, w, y, a, f = (t) => Math.sin(t)) => Array.from({ length: 61 }, (_, i) => [x0 + (w * i) / 60, y - a * f((i / 60) * 4 * Math.PI)])
  return (
    <Svg w={460} h={420} label="Stempelpumpe og flowprofil">
      {/* cross-section */}
      <circle cx={50} cy={90} r={30} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <path d="M 50 60 A 30 30 0 0 1 80 90" style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2 }} />
      <Label x={50} y={140} size={12}>kam (cam)</Label>
      <rect x={80} y={80} width={150} height={20} style={{ fill: `color-mix(in srgb, ${tone('muted')} 40%, var(--bg))`, stroke: tone('ink') }} />
      <Label x={140} y={74} size={12}>stempel (piston)</Label>
      <rect x={200} y={70} width={10} height={40} style={{ fill: tone('trap'), opacity: 0.7 }} />
      <Label x={205} y={130} t="trap" size={12}>seal</Label>
      <rect x={210} y={55} width={110} height={70} rx={6} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <Label x={290} y={50} size={12}>pumpehode (head)</Label>
      <line x1={300} y1={125} x2={300} y2={165} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <circle cx={300} cy={150} r={7} style={{ fill: tone('definition') }} />
      <Label x={312} y={168} anchor="start" size={12}>inlet check valve</Label>
      <line x1={300} y1={55} x2={300} y2={15} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <circle cx={300} cy={30} r={7} style={{ fill: tone('definition') }} />
      <Label x={312} y={30} anchor="start" size={12}>outlet check valve</Label>
      {/* single head profile */}
      <Label x={20} y={190} anchor="start" size={13}>Ett hode: sinus over tid</Label>
      <line x1={20} y1={250} x2={440} y2={250} style={{ stroke: tone('muted') }} />
      <Curve t="topic" points={sine(20, 420, 250, 28)} />
      <Label x={72} y={212} t="intuition" size={12}>Faktisk pumping</Label>
      <Label x={177} y={296} t="trap" size={12}>Innsug</Label>
      {/* two heads */}
      <Label x={20} y={318} anchor="start" size={13}>2 hoder (A/B forskjøvet ½ periode):</Label>
      <Curve t="var-b" points={sine(20, 130, 380, 22, (t) => Math.abs(Math.sin(t)))} />
      <Label x={85} y={404} size={12}>uten demping</Label>
      <Curve t="var-c" points={sine(170, 130, 370, 5, (t) => Math.abs(Math.sin(t)) - 0.6)} />
      <Label x={235} y={404} size={12}>etter pulsdemping</Label>
      <line x1={320} y1={370} x2={440} y2={370} style={{ stroke: tone('var-d'), strokeWidth: 2.5 }} />
      <Label x={380} y={404} size={12}>optimert eksenter</Label>
    </Svg>
  )
}

/* Six-port valve, load vs inject. Ports 1–6 clockwise from top; loop joins 1 and 4.
   Load: 2–3 (solvent → column), 4–5 (syringe → loop), 1–6 (loop → waste).
   Inject: 1–2 (solvent → loop), 3–4 (loop → column), 5–6 (syringe → waste). */
function Ventil({ inject }) {
  const cx = 170, cy = 130, r = 55
  const P = {}
  ;[1, 2, 3, 4, 5, 6].forEach((n) => { const a = (-90 + (n - 1) * 60) * (Math.PI / 180); P[n] = [cx + r * Math.cos(a), cy + r * Math.sin(a)] })
  const pairs = inject ? [[1, 2], [3, 4], [5, 6]] : [[2, 3], [4, 5], [1, 6]]
  const red = inject ? ['1-2', '3-4'] : ['2-3']
  const line = ([a, b]) => {
    const hot = red.includes(`${a}-${b}`)
    return <line key={`${a}-${b}`} x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]} style={{ stroke: hot ? tone('trap') : tone('ink'), strokeWidth: hot ? 4 : 2 }} />
  }
  const loopHot = inject
  return (
    <Svg w={320} h={270} label={inject ? 'Inject-posisjon' : 'Load-posisjon'}>
      <Label x={cx} y={20} t={inject ? 'trap' : 'definition'}>{inject ? 'INJECT' : 'LOAD'}</Label>
      <circle cx={cx} cy={cy} r={r + 14} style={{ fill: 'none', stroke: tone('muted'), strokeWidth: 2 }} />
      <path d={`M ${P[1][0]} ${P[1][1]} C ${cx} ${cy - r - 40}, 20 ${cy - r - 30}, 20 ${cy} S ${cx} ${cy + r + 40}, ${P[4][0]} ${P[4][1]}`}
        style={{ fill: 'none', stroke: loopHot ? tone('trap') : tone('var-c'), strokeWidth: 3 }} />
      <Label x={14} y={cy + 4} anchor="start" size={12} t="var-c">loop</Label>
      {pairs.map(line)}
      {Object.entries(P).map(([n, [x, y]]) => <circle key={n} cx={x} cy={y} r={6} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeWidth: 2 }} />)}
      <Label x={P[2][0] + 10} y={P[2][1] - 6} anchor="start" size={12}>Solvent in</Label>
      <Label x={P[3][0] + 10} y={P[3][1] + 14} anchor="start" size={12} t="trap">To column</Label>
      <Label x={P[5][0] - 10} y={P[5][1] + 6} anchor="end" size={12}>Syringe</Label>
      <Label x={P[6][0] - 10} y={P[6][1] + 2} anchor="end" size={12}>Waste</Label>
      <Label x={cx - 10} y={258} size={12}>{inject ? 'MF skyver løkka inn på kolonnen' : 'løkka fylles; MF går rett til kolonnen'}</Label>
    </Svg>
  )
}

/* Pressure vs composition (sketch) */
function Trykk() {
  const X = (f) => 60 + f * 360, base = 250
  const c = (peak, at, end, start) => Array.from({ length: 41 }, (_, i) => { const f = i / 40; const y = start + (end - start) * f + peak * Math.exp(-((f - at) ** 2) / 0.06); return [X(f), base - y] })
  return (
    <Svg w={460} h={310} label="Trykk mot MF-sammensetning">
      <Arrow x1={60} y1={base} x2={440} y2={base} />
      <Arrow x1={60} y1={base} x2={60} y2={20} />
      <Label x={66} y={22} anchor="start" size={13}>trykk (kgf/cm²)</Label>
      <Label x={X(0)} y={base + 20} size={12}>100 % vann</Label>
      <Label x={X(0.5)} y={base + 20} size={12}>1:1</Label>
      <Label x={X(1) - 10} y={base + 20} size={12}>100 % org.</Label>
      <Curve t="var-a" points={c(110, 0.4, 70, 120)} />
      <Curve t="var-b" points={c(80, 0.4, 50, 90)} />
      <Curve t="var-c" points={c(20, 0.3, 30, 60)} />
      <Curve t="var-d" points={c(25, 0.3, 40, 80)} />
      <line x1={X(0.4)} y1={base} x2={X(0.4)} y2={40} style={{ stroke: tone('muted'), strokeDasharray: '4 4' }} />
      <Label x={X(0.4)} y={34} size={12}>≈ 40 % metanol</Label>
      <Label x={60} y={286} anchor="start" t="var-a" size={12}>vann/MeOH 25 °C</Label>
      <Label x={250} y={286} anchor="start" t="var-b" size={12}>vann/MeOH 40 °C</Label>
      <Label x={60} y={304} anchor="start" t="var-d" size={12}>vann/ACN 25 °C</Label>
      <Label x={250} y={304} anchor="start" t="var-c" size={12}>vann/ACN 40 °C</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="En kjede under høyt trykk">
        <MentalModel cite={`[${B1}, p. 47–52; ${H1}, slide 1–3, 5–7]`}>
          HPLC er klassisk kolonnekromatografi med små partikler. De gir høyt mottrykk, så mobilfasen må presses gjennom med høytrykkspumper. Systemet er en kjede: løsemiddel → pumpe → injektor → kolonne → detektor → PC, koblet med rør av rustfritt stål eller PEEK.{' '}
          Pumpene er stempelpumper med tilbakeslagsventiler. Ett stempel suger og pumper annenhver gang, så flowen pulserer, og to hoder eller pulsdemping glatter den ut.{' '}
          Prøven fylles i en løkke ved atmosfæretrykk og «svitsjes» inn i høytrykksstrømmen med en ventil. Alt mellom injektor og detektor kan gi båndspredning, så små volumer og riktig prøveløsemiddel er viktig.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="HPLC" cite={`[${B1}, p. 47]`}>High-performance (tidligere high-pressure) liquid chromatography. Mindre partikler i pakkematerialet fra 1970-tallet ga høyere mottrykk og krevde høytrykkspumper.</Def>
            <Def term="Klassisk kolonnekromatografi" cite={`[${H1}, slide 1–2]`}>Prøven lastes på toppen, bånd separeres etter sterke vs. svake interaksjoner, og fraksjoner samles i bunnen.</Def>
            <Def term="Guard-kolonne (forkolonne)" cite={`[${B1}, p. 47]`}>En kort kolonne foran den analytiske, som beskytter den.</Def>
          </div>
          <Diagram title="HPLC-systemet" caption="Løsemiddel → pumpe → injektor → (guard-kolonne) → kolonne → detektor → avfall, med datalinje til PC. Avgasser ved løsemidlet, blandekammer ved pumpen ved gradient. Stiplet ramme: høytrykksdelen (pumpe → detektor)." cite={`[${H1}, slide 3; ${B1}, p. 48, Fig. 3.1]`}>
            <System />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Klassifisering av kromatografi" cite={`[${H1}, slide 1]`}>Etter mobilfase (gass, superkritisk fluid, væske) og stasjonærfase (fast eller væske). Væske–fast gir adsorpsjon (LSC), size exclusion (SEC), ionebytte (IEC), ion (IC), affinitet (AC) og flere. Væske–væske og micellær (MEKC) er egne grener. HPLC-delen av emnet dekker væskegrenen.</Def>
            <Def term="Valg av LC-metode" cite={`[${H1}, slide 3]`}>{'Avhenger av molekylstørrelse ($^{10}\\log M_r$) og polaritet/løselighet. Store molekyler ($\\log M_r$ ≳ 3–6): gel-permeasjon (ikke vannløselige) eller gel-filtrering (vannløselige). Mindre molekyler: adsorpsjon og omvendt fase for upolare / ikke-vannløselige, fordeling og normalfase for polare, ionebytting for ioniske / vannløselige.'}</Def>
          </div>
          <Diagram title="Metodevalg: $\log M_r$ mot polaritet" cite={`[${H1}, slide 3]`}>
            <Metodevalg />
          </Diagram>
        </Columns>

        <Def term="Løsemidler" cite={`[${H1}, slide 4; ${B1}, p. 49]`}>Må ha HPLC-kvalitet, f.eks. «HiPerSolv CHROMANORM Acetonitrile for HPLC – gradient grade». MF med salter skal alltid filtreres etter tillaging.</Def>
        <Def term="Avgassing" cite={`[${H1}, slide 4; ${B1}, p. 49]`}>Oppløst luft fjernes med vakuum, ultralyd eller ved erstatning med helium. Off-line: vakuumpumpe + ultralyd. On-line: He-purging eller vakuumkammer med teflonslange. Mange instrumenter har innebygd luftfjerning. Avgassing av ferdigblandede løsemidler kan endre sammensetningen.</Def>

        <Columns>
          <Def term="Viskositet og trykk" cite={`[${B1}, p. 48–49; ${H1}, slide 5]`}>Viskositeten kan endres under en gradient, og da endres mottrykket ved konstant flow. Vann/metanol har viskositetsmaksimum ved ca. 40 % metanol. Vann/acetonitril gir lavere trykk enn vann/metanol, og høyere temperatur (40 °C) gir lavere trykk enn 25 °C.</Def>
          <Diagram title="Trykk vs. MF-sammensetning" caption="Kurveskisse (ikke målte tall): vann/metanol 25 °C høyest med maksimum rundt midten, så vann/metanol 40 °C; vann/acetonitril lavere og flatere." cite={`[${H1}, slide 5; ${B1}, p. 48–49]`}>
            <Trykk />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Stempelpumpe (pumpehode)" cite={`[${B1}, p. 48, Fig. 3.2; ${H1}, slide 5]`}>Hvert hode har et bevegelig stempel, en pakning (seal) og tilbakeslagsventiler (inlet/outlet check valve). En kam (cam) driver stempelet. Én syklus består av innsug, der ingen flow går ut, og faktisk pumping. Det gir pulserende flow.</Def>
            <Def term="Dobbeltvirkende / to-hode stempelpumpe" cite={`[${H1}, slide 6]`}>Ett hode pumper mens det andre suger. Med sirkulær eksentrisk skive får man en sinusformet profil. Etter pulsdemping blir flowen nesten jevn, og med optimert eksenter blir den nesten jevn uten demping.</Def>
            <Def term="Flow og trykk" cite={`[${B1}, p. 48]`}>Vanlig flow ca. 1–10 mL/min, avhengig av kolonnestørrelse. Miniatyriserte systemer helt ned til 1–10 nL/min, ofte med split. Konvensjonelle pumper tåler opptil 400 bar, UHPLC 1000–1200 bar med spesiallagde kolonner og koblinger.</Def>
          </div>
          <Diagram title="Stempelpumpe og flowprofil" cite={`[${H1}, slide 5–6; ${B1}, p. 48, Fig. 3.2]`}>
            <Pumpe />
          </Diagram>
        </Columns>

        <Def term="Gradientsystemer" cite={`[${B1}, p. 48–49, Fig. 3.3]`}>Krever minst to løsemiddelreservoarer og en blandeenhet. <strong>Lavtrykksblanding</strong>: løsemidlene blandes før høytrykksdelen. <strong>Høytrykksblanding</strong>: to pumper leverer hver sitt løsemiddel under trykk til et blandekammer.</Def>
        <Def term="Vedlikehold" cite={`[${B1}, p. 49–50]`}>Pumper skal aldri stå over natten med sterkt sure eller basiske MF eller saltløsninger. Kolonner skylles først med vannløsning (fjerner salt), så med 70–100 % metanol/acetonitril. Filtre sjekkes, fordi partikler skader ventiler og stempler og tetter innløpsfritten. Det er bedre å la pumpene gå på lav flow enn å skru av.</Def>

        <Def term="Injeksjonsventil (loop-injektor)" cite={`[${B1}, p. 50, Fig. 3.4; ${H1}, slide 7]`}>I <strong>load-posisjon</strong> fylles løkka med sprøyte, mens MF går direkte fra pumpe til kolonne. I <strong>inject-posisjon</strong> dreies rotoren, og MF skyver løkkas innhold inn på kolonnen.</Def>
        <Diagram title="Injeksjonsventil: load vs. inject" caption="Seksportsventil med sprøyte, fast prøveløkke, «Solvent in», «To column» og «To waste». Rød: strømmen som går til kolonnen." cite={`[${H1}, slide 7; ${B1}, p. 50, Fig. 3.4]`}>
          <Columns>
            <Ventil inject={false} />
            <Ventil inject />
          </Columns>
        </Diagram>
        <Def term="Konstant-volum-injeksjon (overfylling)" cite={`[${B1}, p. 50–51]`}>Løkka overfylles med ca. 2 × løkkevolum, og injisert volum bestemmes av løkka. Presisjon ca. 0,5 % RSD manuelt, 0,1–0,2 % RSD med autoinjektor.</Def>
        <Def term="Variabel-volum-injeksjon (delvis fylling)" cite={`[${B1}, p. 51]`}>Brukes når lite prøve er tilgjengelig. Volumet bestemmes av sprøyta, og presisjonen er ca. 1,2 % RSD. Små volumer i store løkker gir betydelig fortynning.</Def>
        <Def term="Typiske løkkevolumer" cite={`[${B1}, p. 51]`}>10–50 µL for konvensjonelle 4,6 mm ID-kolonner. Mikroinjektorer med spor i rotoren ned til 20–50 nL for smale kolonner.</Def>
        <Def term="Prøveløsemiddel og refokusering" cite={`[${B1}, p. 51–52]`}>Med MF som prøveløsemiddel fortynnes prøven i løkka, fordi det trengs 5–10 løkkevolumer for å skyve den ut. Prøveløsemiddel med lavere elueringsstyrke enn MF refokuserer prøven på kolonnetoppen, mens høyere elueringsstyrke fortynner den ytterligere. Bedre: større volum i et svakere løsemiddel enn lite volum i et sterkere.</Def>
        <Def term="Carryover" cite={`[${B1}, p. 52]`}>En lavkonsentrert prøve rett etter en høykonsentrert, uten rengjøring av løkka, får overført analytt. Sett inn blanker mellom prøver ved store konsentrasjonsforskjeller.</Def>
        <Def term="Automatisering" cite={`[${B1}, p. 50]`}>Autoinjektor med prøvebrett (ofte temperaturkontrollert), kontrollprøver med faste intervaller, strekkoder og integrert databehandling gjør døgnkontinuerlig drift mulig.</Def>
        <Def term="Ikke pensum" cite={`[Pensum.pdf; ${B1}, p. 52–54]`}>Timed injection, kobling med SPE/trap-kolonne, beregning av maks injeksjonsvolum og beregning av fortynning i kolonnen.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Block kind="equation" title="Ingen ligninger i pensumdelen" cite={`[Pensum.pdf; ${B1}, p. 53–54]`}>
          Ingen ligninger i pensumdelen av dette temaet. Beregning av maks injeksjonsvolum og fortynning (bok 3.3.3–3.3.4) er markert «ikke pensum».
        </Block>
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="Trykkendring under en vann → metanol-gradient (bok + forelesning)"
          given="Spørsmål: Du kjører en gradient fra 100 % vann til 100 % metanol ved konstant flow. Hvordan endres mottrykket?"
          steps={[
            { body: 'Ved konstant flow er mottrykket bestemt av mobilfasens viskositet. Når viskositeten endres under gradienten, endres trykket.' },
            { body: 'Viskositeten til vann/metanol-blandinger har maksimum ved ca. 40 % metanol.' },
            { body: 'Fra 0 % metanol øker derfor trykket først, mot maksimum rundt 40 %.' },
            { body: 'Deretter synker det, til et nivå lavere enn starttrykket ved 100 % vann.' },
            { body: 'Forelesningsfiguren viser i tillegg at acetonitril/vann gir lavere trykk enn metanol/vann, og at 40 °C gir lavere trykk enn 25 °C.' },
            { title: 'Konsekvens:', body: 'Trykkgrensen (f.eks. 400 bar for konvensjonelle pumper) må sjekkes ved den mest viskøse sammensetningen, ikke ved start eller slutt.' },
          ]}
          cite={`[${B1}, p. 48–49; ${H1}, slide 5]`}
        />
        <FadedExample
          title="Analysebetingelser i koffeinlaben"
          given="Oppsett: Agilent 1260 Infinity II, kolonne Poroshell 120 EC-18 4,6 × 150 mm (4 µm), flow 1,2 mL/min, 25 °C, MF 85 % vann : 15 % acetonitril med 0,1 % maursyre, isokratisk 6 min, deteksjon 254 nm, injeksjonsvolum 20 µL."
          steps={[
            { title: 'Er flowen innenfor vanlig HPLC-område?', body: '1,2 mL/min ligger innenfor ca. 1–10 mL/min → ja.' },
            { title: 'Trengs gradientsystem med blandeenhet?', body: 'Nei, kjøringen er isokratisk med konstant sammensetning.', hidden: true },
            { title: 'Er 20 µL et rimelig injeksjonsvolum for en 4,6 mm ID-kolonne?', body: 'Ja, typiske løkker er 10–50 µL.', hidden: true },
            { title: 'Med en autoinjektor og overfylt løkke, hvilken presisjon kan forventes?', body: '0,1–0,2 % RSD.', hidden: true },
            { title: 'Hva bør gjøres med MF før bruk, og hva med kolonnen etter dagens kjøring hvis MF hadde inneholdt salt?', body: `Avgass MF (vakuum, ultralyd eller He). Etter kjøring: skyll først med vannløsning og så med 70–100 % metanol/acetonitril [${B1}, p. 49].`, hidden: true },
          ]}
          cite={`[${KOF}, p. 1; ${B1}, p. 48, 50–51]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Overfylling vs. delvis fylling" cite={`[${B1}, p. 50–51]`}>Ved overfylling bestemmer løkka volumet og presisjonen er best. Ved delvis fylling bestemmer sprøyta volumet og presisjonen er dårligere (1,2 vs. 0,5 % RSD manuelt).</Trap>
        <Trap title="Prøveløsemiddel sterkere enn MF" cite={`[${B1}, p. 51–52]`}>Gir ekstra fortynning og bredere topper. Velg et svakere løsemiddel for refokusering.</Trap>
        <Trap title="Trykket er størst ved ren organisk eller rent vann" cite={`[${B1}, p. 48–49]`}>Feil for vann/metanol, der maksimum ligger rundt 40 % metanol.</Trap>
        <Trap title="Lav- vs. høytrykksblanding" cite={`[${B1}, p. 48–49]`}>Ved lavtrykksblanding blandes løsemidlene før pumpen. Ved høytrykksblanding har hver komponent sin egen pumpe og blandes etter pumpene.</Trap>
        <Trap title="Carryover forveksles med tailing" cite={`[${B1}, p. 52]`}>Carryover kommer fra forrige injeksjon. Løsningen er blanker eller rengjøring av løkka mellom prøver.</Trap>
      </Section>
    </>
  )
}
