import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Block, Diagram, Svg, Box, Arrow, Label, Curve, Mermaid, Columns, V, T, tone } from '../components'

const H2 = 'HPLC_2_u_notater.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const KOF = 'koffein _ISTD_student_rev2.pdf'

export const meta = {
  title: 'HPLC-detektorer',
  topic: 'hplc',
  examWeight: {
    level: 'low',
    note: 'H24 1(c): forklar diode-array-detektor (2 av 10 p). H25 oppg. 2: hvorfor UV-detektor brukes (flervalg, 1 av 5 p)',
  },
  examTasks: [
    'H2024: definisjoner DAD (index: side 06)',
    'H2024 oppg. 1(c) (10 p totalt, 2 p hører hit): forklar kort «diode-array detektor».',
    'H2025 oppg. 2 (flervalg, 1 av 5 delspørsmål): «UV-detektor brukes primært fordi …» → billig og følsom for aromater og karbonylgrupper.',
  ],
  buildsOn: ['04-hplc-system-pumper-injeksjon', '05-kolonner-og-partikler'],
  usedIn: ['14-ms-ionisering', '17-kvalitativ-og-kvantifiseringsmetoder', '18-metodevalidering-lod-loq'],
  sources: [
    `[${H2}, slide 3–7] (slide 8–9 er tomme. \`HPLC_2_m_delvisnotater.pdf\` er identisk)`,
    `[${B1}, p. 55, 80–84] (p. = boksidetall; PDF-side = bokside + 16)`,
    `[${B2}, p. 85–86, 95–103] (p. = boksidetall; PDF-side = bokside − 84)`,
    '[Pensum.pdf, p. 1]',
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(c)] / [${LF24}, p. 3–4]`,
    `[IMAK2008 eksamen H2025.pdf, oppg. 2] / [${LF25}, p. 2]`,
    `[${KOF}, p. 1]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilken egenskap må en analytt ha for å kunne detekteres med UV-detektor?', a: `Den må absorbere synlig eller UV-lys, dvs. ha en kromofor [${H2}, slide 4; ${B1}, p. 81].` },
    { id: 'p2', kind: 'pretest', q: 'Hva er den store fordelen med en diode-array-detektor fremfor en vanlig UV-detektor?', a: `Den måler mange bølgelengder samtidig [${B1}, p. 83–84; ${LF24}, p. 4].` },
    { id: 'p3', kind: 'pretest', q: 'Hvilken HPLC-detektor kan ikke brukes med gradienteluering?', a: `RI-detektoren, og også amperometrisk elektrokjemisk detektor [${B1}, p. 81, Tabell 3.5; ${B2}, p. 99, 101–102].` },
    { id: 't1', q: 'Hvorfor er 254 nm den mest brukte bølgelengden i filterfotometriske UV-detektorer?', a: `Det er den sterkeste linjen fra Hg-lampa i UV, og mange aromater har absorpsjonsmaksimum i dette området [${B1}, p. 83].` },
    { id: 't2', q: 'Hvordan kan en DAD avsløre at en topp ikke er ren?', a: `Ved å måle ulike deler av toppen ved ulike bølgelengder samtidig. Er de relative absorbansene forskjellige, inneholder toppen mer enn én forbindelse [${B1}, p. 84].` },
    { id: 't3', q: 'Hvilken detektor velger du for polyetylenglykoler uten kromofor med gradienteluering?', a: `Lysspredningsdetektor (ELSD). Den er nesten universell for ikke-flyktige analytter og tåler gradient. RI tåler ikke gradient [${B2}, p. 100–102, Fig. 3.46].` },
    { id: 't4', q: 'Hvorfor gir rigide aromatiske strukturer sterkere fluorescens enn fleksible?', a: `Fleksible strukturer taper mer energi som vibrasjon [${B2}, p. 97].` },
    { id: 't5', q: 'Hvorfor øker en Z-celle følsomheten til en UV-detektor?', a: `Den gir lengre lysvei, og absorbansen er proporsjonal med lysveien ($A = \\varepsilon b c$) [${B1}, p. 81–82].` },
  ],
  equations: [
    {
      id: 'beer', label: 'Beers lov (UV-absorbans)',
      tex: String.raw`\va{A} = \vb{\varepsilon}\, \vc{b}\, \vd{c}`,
      vars: [
        { sym: String.raw`\va{A}`, desc: 'absorbans', unit: String.raw`\text{dimensjonsløs}` },
        { sym: String.raw`\vb{\varepsilon}`, desc: 'molar absorptivitet (molar ekstinksjonskoeffisient)', unit: String.raw`\mathrm{L\,mol^{-1}\,cm^{-1}}` },
        { sym: String.raw`\vc{b}`, desc: 'lysveiens lengde i cella', unit: String.raw`\mathrm{cm}` },
        { sym: String.raw`\vd{c}`, desc: 'konsentrasjon', unit: String.raw`\mathrm{mol/L}` },
      ],
      note: 'Absorbansen er konsentrasjonsrelatert, så lav deteksjonsgrense krever et så konsentrert kromatografisk bånd som mulig. Forelesningen skriver $A = \\lambda\\cdot c\\cdot\\varepsilon$ med «molar ekstinksjonskoeffisient», der lysveien er notert som λ.',
      cite: `[${B1}, p. 81, lign. 3.8; ${H2}, slide 3]`,
      check: { status: 'verified', note: 'Bok lign. 3.8 (p. 81, PDF s. 97): A = εbc. Slide 3 skriver A = λ·c·ε (lysvei som λ), som innholdet selv påpeker.' },
    },
    {
      id: 'fluo', label: 'Fluorescensintensitet',
      tex: String.raw`F = k\,\Phi\, I_0\, \vb{\varepsilon}\, \vc{b}\, \vd{c}`,
      vars: [
        { sym: 'F', desc: 'fluorescensintensitet', unit: String.raw`\text{relativ}` },
        { sym: 'k', desc: 'instrumentkonstant', unit: '–' },
        { sym: String.raw`\Phi`, desc: 'kvanteutbytte (emitterte/eksiterte fotoner)', unit: '0\\text{–}1' },
        { sym: 'I_0', desc: 'intensitet av eksitasjonslyset', unit: String.raw`\text{relativ}` },
        { sym: String.raw`\vb{\varepsilon}, \vc{b}, \vd{c}`, desc: 'som i Beers lov', unit: '–' },
      ],
      note: 'Signalet øker med eksitasjonsintensiteten, og derfor foretrekkes lasere.',
      cite: `[${B2}, p. 97, lign. 3.9]`,
      check: { status: 'verified', note: 'Bok del 2 lign. 3.9 (p. 97, PDF s. 13): F = kΦI₀εbc.' },
    },
    {
      id: 'elsd', label: 'Lysspredning (ELSD)',
      tex: String.raw`\va{A} = a\, m^b`,
      vars: [
        { sym: String.raw`\va{A}`, desc: 'mengde spredt lys', unit: String.raw`\text{relativ}` },
        { sym: 'a, b', desc: 'konstanter', unit: '–' },
        { sym: 'm', desc: 'analyttmasse', unit: String.raw`\mathrm{ng}` },
      ],
      note: 'Ikke-lineær. Lineær sammenheng mellom log A og log m innenfor et begrenset område.',
      cite: `[${B2}, p. 100, lign. 3.10]`,
      check: { status: 'verified', note: 'Bok del 2 lign. 3.10 (p. 100, PDF s. 16): A = am^b.' },
    },
  ],
}

const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>

const treChart = `flowchart TD
  A{"Har analytten kromofor?"} -->|ja| UV["UV/DAD<br/>0,1–1 ng · gradient: ja"]
  A -->|nei| F{"Fluorescerende eller<br/>kan derivatiseres?"}
  UV -.-> F
  F -->|ja| FL["Fluorescens (lavere LOD)<br/>< 10 pg · gradient: ja"]
  F -->|nei| E{"Kan oksideres/reduseres?"}
  E -->|ja| EC["Elektrokjemisk<br/>< 10 pg · salt i MF<br/>amperometrisk: ikke gradient"]
  E -->|nei| N{"Ingen av delene,<br/>ikke-flyktig?"}
  N --> EL["ELSD<br/>0,1–10 ng · gradient: ja"]
  N --> RI["RI<br/>0,1–1 µg · gradient: nei"]
  I{"Ioner i IC?"} --> LE["Ledningsevne"]
  S{"Trenger struktur /<br/>høyest selektivitet?"} --> MS["MS<br/>fg–pg (SIM) · gradient: ja, m/ begrensninger"]`

/* UV detector schematic */
function UVDetektor() {
  return (
    <Svg w={460} h={210} label="UV-detektor">
      <Box x={10} y={80} w={60} h={40} label="lampe" t="muted" />
      <line x1={92} y1={70} x2={92} y2={92} style={{ stroke: tone('ink'), strokeWidth: 4 }} />
      <line x1={92} y1={108} x2={92} y2={130} style={{ stroke: tone('ink'), strokeWidth: 4 }} />
      <Label x={92} y={60} size={12}>spalte</Label>
      <Arrow x1={70} y1={100} x2={150} y2={100} t="var-b" />
      <line x1={140} y1={130} x2={180} y2={70} style={{ stroke: tone('ink'), strokeWidth: 3 }} />
      <Label x={160} y={150} size={12}>bevegelig gitter</Label>
      <Arrow x1={165} y1={100} x2={250} y2={100} t="var-c" />
      <Label x={208} y={90} size={12}>valgt λ</Label>
      <line x1={250} y1={85} x2={270} y2={115} style={{ stroke: tone('muted'), strokeWidth: 3 }} />
      <Label x={260} y={140} size={12}>beam splitter</Label>
      <Arrow x1={262} y1={100} x2={330} y2={100} t="var-c" />
      <Box x={330} y={82} w={56} h={36} label="celle" t="definition" />
      <Arrow x1={386} y1={100} x2={410} y2={100} t="var-c" />
      <Box x={410} y={82} w={46} h={36} label="PD" t="ink" />
      <Arrow x1={260} y1={100} x2={260} y2={175} t="var-c" />
      <Box x={225} y={175} w={70} h={30} label="ref. PD" t="ink" />
    </Svg>
  )
}

/* Hg lamp lines */
function HgSpekter() {
  const X = (l) => 50 + ((l - 230) / 570) * 380
  const lines = [[254, 1], [313, 0.35], [365, 0.55], [405, 0.4], [436, 0.7], [546, 0.65], [579, 0.45]]
  return (
    <Svg w={460} h={220} label="Hg-lampespekter">
      <Arrow x1={50} y1={180} x2={440} y2={180} />
      <Arrow x1={50} y1={180} x2={50} y2={20} />
      <Label x={60} y={22} anchor="start" size={12}>intensitet</Label>
      <Label x={440} y={212} anchor="end" size={12}>bølgelengde (nm)</Label>
      {[400, 600, 800].map((l) => <Label key={l} x={X(l)} y={196} size={11}>{l}</Label>)}
      <Label x={X(254)} y={196} size={11} t="var-b">254</Label>
      {lines.map(([l, h]) => (
        <g key={l}>
          <line x1={X(l)} y1={180} x2={X(l)} y2={180 - h * 140} style={{ stroke: l === 254 ? tone('var-b') : tone('muted'), strokeWidth: l === 254 ? 4 : 2.5 }} />
          {l !== 254 && <Label x={X(l)} y={180 - h * 140 - 6} size={11}>{l}</Label>}
        </g>
      ))}
    </Svg>
  )
}

/* DAD schematic */
function DAD() {
  return (
    <Svg w={460} h={200} label="Diode-array-detektor">
      <Box x={10} y={70} w={80} h={44} label="D₂-lampe" t="muted" />
      <Arrow x1={90} y1={92} x2={150} y2={92} t="ink" />
      <Label x={120} y={82} size={12}>hvitt lys</Label>
      <Box x={150} y={74} w={60} h={36} label="celle" t="definition" />
      <Arrow x1={210} y1={92} x2={262} y2={92} t="ink" />
      <line x1={262} y1={122} x2={290} y2={62} style={{ stroke: tone('ink'), strokeWidth: 3 }} />
      <Label x={276} y={140} size={12}>gitter</Label>
      {['var-f', 'var-a', 'var-c', 'var-e', 'var-b'].map((t, i) => <Arrow key={t} x1={282} y1={92} x2={380} y2={40 + i * 26} t={t} head={7} />)}
      {Array.from({ length: 10 }, (_, i) => <rect key={i} x={384} y={32 + i * 12} width={14} height={10} style={{ fill: 'none', stroke: tone('ink') }} />)}
      <Label x={420} y={26} size={12}>diodearray</Label>
      <Label x={230} y={186} t="trap" size={13}>gitteret sitter ETTER prøven</Label>
    </Svg>
  )
}

/* Pseudo-3D DAD plot */
function DAD3D() {
  const ox = 60, oy = 200, tx = 300, ly = -60, lx = 80 // time along x, wavelength along diagonal
  const P = (t, l, a) => [ox + t * tx + l * lx, oy + l * ly - a * 120]
  const ridge = (t0, l0, h) => Array.from({ length: 9 }, (_, j) => {
    const l = j / 8
    const pts = Array.from({ length: 21 }, (_, i) => { const t = t0 - 0.08 + (0.16 * i) / 20; const a = h * Math.exp(-((t - t0) ** 2) / 0.0008) * Math.exp(-((l - l0) ** 2) / 0.04); return P(t, l, a) })
    return <Curve key={`${t0}-${j}`} t={j === Math.round(l0 * 8) ? 'var-b' : 'muted'} width={j === Math.round(l0 * 8) ? 2.5 : 1} points={pts} />
  })
  return (
    <Svg w={460} h={260} label="3D-plott: absorbans mot tid og bølgelengde">
      <Arrow x1={ox} y1={oy} x2={ox + tx + 10} y2={oy} />
      <Arrow x1={ox} y1={oy} x2={ox + lx + 10} y2={oy + ly - 10} />
      <Arrow x1={ox} y1={oy} x2={ox} y2={oy - 150} />
      <Label x={ox + tx + 10} y={oy + 18} anchor="end" size={12}>tid (min)</Label>
      <Label x={ox + lx + 14} y={oy + ly - 4} anchor="start" size={12}>λ</Label>
      <Label x={ox} y={oy + 40} anchor="start" size={12}>diagonal akse: λ (nm, 200–400)</Label>
      <Label x={ox - 6} y={oy - 150} anchor="end" size={12}>A (AU)</Label>
      {ridge(0.3, 0.4, 1)}
      {ridge(0.65, 0.52, 0.8)}
      <Label x={P(0.3, 0.4, 1)[0]} y={P(0.3, 0.4, 1)[1] - 8} t="var-b" size={12}>280 nm</Label>
      <Label x={P(0.65, 0.52, 0.8)[0]} y={P(0.65, 0.52, 0.8)[1] - 8} t="var-b" size={12}>304 nm</Label>
    </Svg>
  )
}

/* Z- and U-cell */
function Celler() {
  return (
    <Svg w={460} h={200} label="Z-celle og U-celle">
      <Label x={110} y={20}>U-celle</Label>
      <line x1={50} y1={40} x2={50} y2={120} style={{ stroke: tone('definition'), strokeWidth: 8 }} />
      <line x1={50} y1={120} x2={170} y2={120} style={{ stroke: tone('definition'), strokeWidth: 8 }} />
      <line x1={170} y1={120} x2={170} y2={40} style={{ stroke: tone('definition'), strokeWidth: 8 }} />
      <Arrow x1={30} y1={40} x2={30} y2={80} t="ink" head={7} />
      <Label x={30} y={34} size={11}>eluate in</Label>
      <Arrow x1={190} y1={80} x2={190} y2={40} t="ink" head={7} />
      <Label x={190} y={34} size={11}>out</Label>
      <Arrow x1={10} y1={120} x2={210} y2={120} t="var-c" />
      <Label x={110} y={150} size={11} t="var-c">lysvei b</Label>
      <Label x={340} y={20}>Z-celle</Label>
      <line x1={260} y1={130} x2={280} y2={110} style={{ stroke: tone('definition'), strokeWidth: 8 }} />
      <line x1={280} y1={110} x2={410} y2={110} style={{ stroke: tone('definition'), strokeWidth: 8 }} />
      <line x1={410} y1={110} x2={430} y2={60} style={{ stroke: tone('definition'), strokeWidth: 8 }} />
      <Label x={256} y={150} size={11}>inn</Label>
      <Label x={436} y={54} size={11}>ut</Label>
      <Arrow x1={250} y1={96} x2={440} y2={96} t="var-c" />
      <Label x={230} y={186} t="var-c" size={13}>lengre lysvei b → høyere A (Beer)</Label>
    </Svg>
  )
}

/* Fluorescence: energy diagram and detector */
function Fluorescens() {
  return (
    <Svg w={460} h={300} label="Fluorescens: energidiagram og detektor">
      <line x1={20} y1={150} x2={160} y2={150} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <Label x={168} y={154} anchor="start" size={13}>S₀</Label>
      <line x1={20} y1={40} x2={160} y2={40} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      {[50, 60].map((y) => <line key={y} x1={20} y1={y} x2={160} y2={y} style={{ stroke: tone('muted') }} />)}
      <Label x={168} y={44} anchor="start" size={13}>S₁</Label>
      <Arrow x1={45} y1={150} x2={45} y2={36} t="var-b" />
      <Label x={45} y={170} size={12} t="var-b">absorbans</Label>
      <path d="M 70 36 q 6 4 0 8 q -6 4 0 8 q 6 4 0 8" style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2 }} />
      <Label x={90} y={30} anchor="start" size={11} t="trap">vibrasjonstap</Label>
      <Arrow x1={125} y1={62} x2={125} y2={150} t="var-e" />
      <Label x={125} y={170} size={12} t="var-e">fluorescens</Label>
      <Label x={125} y={186} size={11} t="var-e">(lengre λ)</Label>
      {/* detector */}
      <Box x={230} y={20} w={100} h={36} label="lyskilde" t="muted" />
      <Arrow x1={280} y1={56} x2={280} y2={80} />
      <Box x={230} y={80} w={100} h={36} label="eks.-monokr." t="var-b" />
      <Arrow x1={280} y1={116} x2={280} y2={140} t="var-b" />
      <Box x={240} y={140} w={80} h={40} label="flowcelle" t="definition" />
      <Arrow x1={320} y1={160} x2={360} y2={160} t="var-e" />
      <Label x={340} y={150} size={11}>90°</Label>
      <Box x={360} y={140} w={96} h={40} label="em.-monokr." t="var-e" />
      <Arrow x1={408} y1={180} x2={408} y2={210} t="var-e" />
      <Box x={330} y={210} w={126} h={44} label="PMT" sub="fotomultiplikator" t="ink" />
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Hva har analytten?">
        <MentalModel cite={`[${B1}, p. 55, 80–81; ${B2}, p. 95–102; ${H2}, slide 3, 7]`}>
          En detektor gjør om det som eluerer fra kolonnen til et signal. Valget avhenger av hva analytten «har». Absorberer den lys (kromofor), er UV-detektoren det enkle og billige førstevalget. Fluorescerer den, gir fluorescens mye lavere deteksjonsgrense. Kan den oksideres eller reduseres, brukes elektrokjemisk detektor.{' '}
          Har den ingen av delene, brukes en universell detektor: lysspredning, RI eller MS. Nesten alle disse er konsentrasjonsfølsomme: signalet følger <V c="d">konsentrasjonen</V> i cella, så smale, konsentrerte bånd gir lavest deteksjonsgrense. Detektorene skiller seg også i om de tåler gradient og hvor stort lineært område de har.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Detektortyper i HPLC" cite={`[${H2}, slide 3; ${B1}, p. 80]`}>UV, fluorescens, ledningsevne, elektrokjemisk, lysspredning, brytningsindeks og MS. UV var tradisjonelt viktigst, men benkeplassert MS er blitt en seriøs konkurrent. UV er fortsatt enklere og foretrekkes når det ikke trengs mer følsom eller selektiv deteksjon.</Def>
        <Def term="Universell vs. selektiv" cite={`[${B1}, p. 81]`}>Noen detektorer er universelle, andre mer eller mindre selektive. Mest selektiv er MS.</Def>
        <Mermaid title="Detektorvalg: beslutningstre" caption="Hver node med masse-LOD (Tabell 3.5) og om den tåler gradient." cite={`[${B1}, p. 81, Tabell 3.5; ${B2}, p. 95–102]`} chart={treChart} />

        <Columns>
          <Diagram title="Egenskaper (bok, Tabell 3.5)" cite={`[${B1}, p. 81]`}>
            <table className="eq-vars">
              <tbody>
                <tr><td><strong>Detektor</strong></td><td><strong>Selektivitet</strong></td><td><strong>Masse-LOD</strong></td><td><strong>Gradient</strong></td></tr>
                <tr><td>UV</td><td>kromoforer</td><td>0,1–1 ng</td><td>ja</td></tr>
                <tr><td>MS</td><td>svært høy</td><td>fg–pg (med SIM)</td><td>ja, med begrensninger</td></tr>
                <tr><td>Fluorescens</td><td>fluorescerende grupper</td><td>&lt; 10 pg</td><td>ja</td></tr>
                <tr><td>Elektrokjemisk</td><td>oks./red.-grupper</td><td>&lt; 10 pg</td><td>begrensninger</td></tr>
                <tr><td>Lysspredning</td><td>nesten universell</td><td>0,1–10 ng</td><td>ja</td></tr>
                <tr><td>RI</td><td>universell</td><td>0,1–1 µg</td><td>nei</td></tr>
              </tbody>
            </table>
          </Diagram>
          <Diagram title="Ytelse (forelesning, «Performance of HPLC detectors»)" caption="Masse-LOD og lineært område i dekader. Tallene avviker fra bokas tabell, så bruk forholdene mellom detektorene, ikke de eksakte verdiene." cite={`[${H2}, slide 7]`}>
            <table className="eq-vars">
              <tbody>
                <tr><td><strong>Detektor</strong></td><td><strong>Masse-LOD</strong></td><td><strong>Lineært område</strong></td></tr>
                <tr><td>Absorbans</td><td>10 pg</td><td>3–4</td></tr>
                <tr><td>Fluorescens</td><td>10 fg</td><td>5</td></tr>
                <tr><td>Elektrokjemisk</td><td>100 pg</td><td>4–5</td></tr>
                <tr><td>RI</td><td>1 ng</td><td>3</td></tr>
                <tr><td>Ledningsevne</td><td>100 pg–1 ng</td><td>5</td></tr>
                <tr><td>MS</td><td>&lt; 1 pg</td><td>5</td></tr>
                <tr><td>Lysspredning</td><td>1 µg</td><td>5</td></tr>
              </tbody>
            </table>
          </Diagram>
        </Columns>
        <Avvik>Forelesningens LOD-tabell vs. bokas tabell 3.5 — masse-LOD-verdiene i forelesningen (slide 7) avviker fra bokas Tabell 3.5 (p. 81). Gjelder side 06 og 13.</Avvik>

        <Columns>
          <div>
            <Def term="UV-Vis-detektor" cite={`[${H2}, slide 3; ${B1}, p. 81–82; ${LF25}, oppg. 2]`}>Den vanligste og billigste. Lys sendes gjennom en spalte, splittes i bølgelengder i en monokromator, og valgt bølgelengde går gjennom prøvecella. Alle forbindelser som absorberer ved den bølgelengden gir signal. Kan brukes fra 190 nm og inn i synlig område. Brukes fordi den er billig og følsom for aromater og karbonylgrupper.</Def>
            <Def term="Vanlige kromoforer" cite={`[${B1}, p. 82; ${H2}, slide 4]`}>Aromater absorberer rundt 240–260 nm (og sterkere rundt 200 nm). Alifater rundt 200 nm, alkener rundt 215 nm. Hver ekstra konjugert dobbeltbinding legger til ca. 15–30 nm. Fenoler absorberer rundt 260–280 nm.</Def>
          </div>
          <div>
            <Diagram title="UV-detektor" caption="Lampe → spalte → bevegelig diffraksjonsgitter → valgt λ → beam splitter → flowcelle → fotodetektor (PD), pluss referansefotodetektor." cite={`[${H2}, slide 4; ${B1}, p. 81–83]`}>
              <UVDetektor />
            </Diagram>
            <Diagram title="Hg-lampespekter" caption="Linjer ved 254, 313, 365, 405, 436, 546 og 579 nm; 254 nm uthevet. Høydene er illustrasjon." cite={`[${H2}, slide 4; ${B1}, p. 83]`}>
              <HgSpekter />
            </Diagram>
          </div>
        </Columns>
        <Def term="Valg av bølgelengde" cite={`[${H2}, slide 4; ${B1}, p. 82]`}>{'Velg en bølgelengde ved $\\lambda_{maks}$. Selv om høyest $\\varepsilon$ ofte er ved lav bølgelengde, er et høyere absorpsjonsmaksimum bedre pga. høyere selektivitet, fordi forstyrrelser fra andre forbindelser og fra MF alltid er sterkere ved lave bølgelengder. Gradient kan ikke kjøres ved 200 nm, og acetonitril foretrekkes fremfor metanol ved lave bølgelengder.'}</Def>
        <Columns>
          <Def term="Flowceller" cite={`[${B1}, p. 82–83; ${H2}, slide 4]`}>Dobbeltstrålings-instrumenter har prøvecelle og referansecelle med stående MF. Enstrålings-instrumenter bruker en elektronisk referanse. Cellevolumet må tilpasses kolonnen for å unngå båndspredning. Z-celler og U-celler gir lengre lysvei og høyere følsomhet med smale kolonner, siden absorbansen er proporsjonal med lysveien.</Def>
          <Diagram title="Z-celle vs. U-celle" cite={`[${H2}, slide 4; ${B1}, p. 82]`}>
            <Celler />
          </Diagram>
        </Columns>
        <Def term="Filterfotometrisk detektor" cite={`[${B1}, p. 83; ${H2}, slide 4]`}>Lyskilde med noen få diskrete bølgelengder. Hg-lampe gir 254, 313, 365, 405, 436 og 546 nm (280 nm med fluorescerende belegg). 254 nm er den mest brukte pga. absorpsjonsmaksimumet til mange aromater.</Def>
        <Def term="Spektrofotometrisk detektor" cite={`[${B1}, p. 83; ${H2}, slide 4]`}>Deuteriumlampe (190 → ca. 600 nm) eller wolframlampe (synlig, opptil 950 nm, billigere og lengre levetid). En monokromator velger bølgelengden nærmest analyttens absorpsjonsmaksimum.</Def>

        <Columns>
          <div>
            <Def term="Diode-array-detektor (DAD)" cite={`[${B1}, p. 83–84; ${H2}, slide 5; ${LF24}, p. 4]`}>Hvitt lys sendes gjennom prøven og splittes etterpå av et holografisk gitter mot en rekke på flere hundre fotodioder. Den måler altså polykromatisk lys, med alle bølgelengder samtidig. Gir 3D-plott (absorbans vs. tid og bølgelengde). <strong>Topprenhet</strong>: mål ulike deler av toppen ved ulike bølgelengder. Er de relative absorbansene forskjellige, er toppen ikke ren. Nyttig for identifikasjon og kvantifisering av analytter.</Def>
          </div>
          <div>
            <Diagram title="DAD" caption="Deuteriumlampe → (hvitt lys) prøvecelle → gitter → spektrum spredt over diodearray → forsterker." cite={`[${H2}, slide 5; ${B1}, p. 84, Fig. 3.25]`}>
              <DAD />
            </Diagram>
            <Diagram title="DAD: 3D-plott" caption="Absorbans mot tid og bølgelengde, med topper merket 280 nm og 304 nm. Skisse." cite={`[${H2}, slide 5; ${B1}, p. 84, Fig. 3.26]`}>
              <DAD3D />
            </Diagram>
          </div>
        </Columns>

        <Columns>
          <div>
            <Def term="Fluorescensdetektor" cite={`[${B2}, p. 95–97; ${H2}, slide 6]`}>{'For naturlig fluorescerende forbindelser eller forbindelser derivatisert til fluorescerende. Analytten eksiteres ved absorpsjonsmaksimum. Når den går tilbake til grunntilstanden, tapes en del energi som vibrasjon, så emittert lys har lengre bølgelengde enn eksitasjonslyset. Emisjonen måles vanligvis 90° på eksitasjonslyset. Kvanteutbytte $\\Phi$ mellom 0 og 1, over 0,5 for sterkt fluorescerende. Oppløst O₂ kan redusere det. LOD i pg–fg-området.'}</Def>
            <Def term="Fluorescerende strukturer og lyskilder" cite={`[${B2}, p. 97]`}>Fluorescerende forbindelser har ofte kondenserte aromatiske ringer med elektrondonerende substituenter (f.eks. PAH). Rigide strukturer gir bedre signal enn fleksible. Lyskilder: deuteriumlampe (190–400 nm), xenonlampe (200–850 nm) eller laser. Kjemiluminescens er et alternativ, der en kjemisk reaksjon i en postkolonnereaktor eksiterer.</Def>
          </div>
          <Diagram title="Fluorescens: energidiagram og detektor" cite={`[${B2}, p. 96, Fig. 3.40; ${H2}, slide 6]`}>
            <Fluorescens />
          </Diagram>
        </Columns>

        <Def term="Elektrokjemisk detektor" cite={`[${B2}, p. 98; ${H2}, slide 6]`}>Signal fra forbindelser som kan oksideres eller reduseres. Fenoler er de vanligste (oksidasjon), og katekolaminer de vanligste analyttene. MF må inneholde salt for å lede strøm. Elektrokjemisk aktive grupper: fenol, katekol, kinon, amin, metoksyl, hydroksyl, tiol, nukleobase/nukleosid m.fl.</Def>
        <Def term="Amperometrisk" cite={`[${B2}, p. 98–99]`}>Tre elektroder (arbeidselektrode av glassy carbon, referanse Ag/AgCl, hjelpeelektrode = stål-utløpsrøret). Strømmen øker kraftig ved halvbølgepotensialet og er proporsjonal med konsentrasjonen. Bruker &lt; 10 % av analytten, LOD i pg-området, og tåler ikke gradient. Bakgrunnsstøy er et problem særlig i reduksjonsmodus (O₂ må fjernes). Arbeidselektroden «forgiftes» og må rengjøres.</Def>
        <Def term="Coulometrisk" cite={`[Pensum.pdf; ${B2}, p. 100]`}>Coulometrisk detektor er ikke pensum. Merk likevel at boka oppgir den som eneste elektrokjemiske detektor som tåler gradient.</Def>
        <Def term="Lysspredningsdetektor (ELSD)" cite={`[${B2}, p. 100–101; ${H2}, slide 6]`}>Eluatet forstøves med gass til en aerosol. Dråpene konsentreres i et oppvarmet drift-rør og treffer en lysstråle, og spredt lys måles. Gradient er mulig, men dråpestørrelsen kan endres og påvirke responsen. LOD 0,1–10 ng for ikke-flyktige analytter, og den er ofte valget for analytter uten kromofor.</Def>
        <Def term="Brytningsindeks-detektor (RI)" cite={`[${B2}, p. 100–102; ${H2}, slide 7]`}>Måler lysbrytningen i en flowcelle mot en referansecelle. Universell, men begrenset følsomhet (0,1–10 µg), krever streng temperaturkontroll og tåler ikke gradient. Er nå i stor grad erstattet av lysspredning eller MS, men nyttig i preparativ skala.</Def>
        <Def term="Ledningsevnedetektor" cite={`[${B2}, p. 102]`}>Brukes bare i ionekromatografi. Måler ledningsevnen med Wheatstone-bro og pulsede teknikker, og krever streng temperaturkontroll.</Def>
        <Def term="MS som HPLC-detektor" cite={`[${B2}, p. 85–86, 95, Info-box 3.21]`}>Kobles via et interface (ESI, APCI, APPI). Detaljer på side 14–15. UV eller fluorescens kan stå før MS, eller flowen kan splittes.</Def>
        <Def term="Konsentrasjonsfølsomme detektorer" cite={`[${B1}, p. 55; ${B2}, p. 103]`}>UV, fluorescens og ESI-MS. Smale kolonner øker følsomheten.</Def>
        <Def term="Ikke pensum" cite="[Pensum.pdf]">Coulometrisk, corona discharge, radioaktivitet, ionemobilitet, kjemiluminescent nitrogendetektor og kiralitetsdeteksjon.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="beer" />
        <Eq id="fluo" />
        <Eq id="elsd" />
        <p className="muted"><T text="Ingen interaktiv graf: kursmaterialet har ingen tallverdier (ε, lysvei) som egner seg for en slider." /></p>
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 2: «UV-detektor brukes primært fordi …»"
          given="Alternativer: (a) Den kan ikke brukes med gradient. (b) Den krever ingen løsemidler. (c) Alle forbindelser absorberer UV. (d) Den er billig og følsom for aromater og karbonylgrupper."
          steps={[
            { title: '(a)', body: `Feil. UV tåler gradient (Tabell 3.5), med unntak ved 200 nm [${B1}, p. 81–82].` },
            { title: '(b)', body: `Feil. Ingen HPLC-detektor «krever ingen løsemidler». MF går alltid gjennom cella, og MF-valget er faktisk mer begrenset ved lave bølgelengder [${B1}, p. 82].` },
            { title: '(c)', body: `Feil. Bare forbindelser med kromofor absorberer. For analytter uten kromofor velges ELSD, RI eller MS [${B1}, p. 81; ${B2}, p. 100].` },
            { title: '(d)', body: `Riktig. UV er den vanligste og billigste [${H2}, slide 3]. Aromater absorberer ved 240–260 nm, og 254 nm fra Hg-lampa treffer mange aromater [${B1}, p. 82–83].` },
            { title: 'Kobling til koffeinlaben:', body: `deteksjon ved 254 nm av koffein, en aromatisk heterosyklisk forbindelse [${KOF}, p. 1].` },
          ]}
          cite={`[IMAK2008 eksamen H2025.pdf, oppg. 2; ${LF25}, p. 2]`}
        />
        <FadedExample
          title="H24 oppg. 1(c): forklar «diode-array-detektor» (2 av 10 p)"
          steps={[
            { title: 'Hva slags detektor er det?', body: 'En absorbansdetektor brukt i HPLC.' },
            { title: 'Hva skiller den fra en vanlig UV-detektor i lysveien?', body: `Hvitt (polykromatisk) lys går gjennom prøven og splittes etterpå av et gitter mot hundrevis av fotodioder [${B1}, p. 83–84].`, hidden: true },
            { title: 'Hva gir det i praksis?', body: 'Absorpsjon over et bredt spektrum, målt samtidig.', hidden: true },
            { title: 'Hvilke to bruksområder nevner løsningsforslaget?', body: 'Analyttidentifikasjon og kvantifisering.', hidden: true },
            { title: 'Hvilken ekstra kontroll gjør DAD mulig ifølge boka?', body: `Topprenhet, ved å sammenligne relative absorbanser over toppen [${B1}, p. 84].`, hidden: true },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(c); ${LF24}, p. 4]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="«Alle forbindelser absorberer UV»" cite={`[${B1}, p. 81; ${LF25}, oppg. 2]`}>Feil. Krever kromofor.</Trap>
        <Trap title="Velge laveste bølgelengde fordi ε er størst der" cite={`[${B1}, p. 82]`}>{'Gir mer interferens fra MF og andre forbindelser. Velg et høyere $\\lambda_{maks}$ for selektivitet.'}</Trap>
        <Trap title="DAD vs. UV-detektor" cite={`[${B1}, p. 81, 83–84]`}>Ved DAD splittes lyset <em>etter</em> prøvecella, og alle λ måles samtidig. Ved en vanlig spektrofotometrisk detektor velges én λ <em>før</em> cella.</Trap>
        <Trap title="RI med gradient" cite={`[${B2}, p. 101–102]`}>Går ikke. RI krever isokratisk kjøring og streng temperaturkontroll.</Trap>
        <Trap title="Elektrokjemisk detektor uten salt" cite={`[${B2}, p. 98]`}>MF må inneholde salt for å lede strøm.</Trap>
        <Trap title="Fluorescens har kortere bølgelengde enn eksitasjon" cite={`[${B2}, p. 95–96]`}>Motsatt. Energitap til vibrasjon gir lengre emisjonsbølgelengde.</Trap>
        <Trap title="GC-detektorer på HPLC-spørsmål" cite="[IMAK2008 eksamen H2025.pdf, oppg. 2]">FID, TCD, ECD og NPD er GC-detektorer (side 13). H25 oppg. 2 blander UV (HPLC) med GC-detektorer i samme sett.</Trap>
      </Section>
    </>
  )
}
