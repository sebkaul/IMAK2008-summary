import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Block, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const G = 'Gasskromatografi m notater.pdf'
const KT = 'Krom. Teori - Innledning og repetisjon 190826.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const ML = String.raw`\mathrm{mL}`

export const meta = {
  title: 'GC: kolonner, stasjonærfaser og temperaturprogram',
  topic: 'gc',
  examWeight: { level: 'high', note: 'H25 oppg. 4 (12 p-case: elueringsrekkefølge, temperaturprogram, Carbowax, starttemperatur) + oppg. 3 (PLOT). H24 1(f) (4 p), 1(c) (kolonneblødning, WCOT), 1(b) (PDMS)' },
  examTasks: [
    'H2024: 1-serien GC (index: side 11–13)',
    'H2025: oppg. 4 (index: side 11–13)',
    'H2025 oppg. 4 (12 p): GC-case med heksan/etylacetat/metanol på dimetylpolysiloksan. (a) Kortest retensjonstid, (b) split vs. splitless (side 11), (c) fordel med temperaturprogram, (d) effekt av Carbowax [utledet — ingen LF], og (d) effekt av starttemperatur 60 °C.',
    'H2025 oppg. 3 (10 p totalt, 2 p hører hit): forklar «PLOT».',
    'H2024 oppg. 1(f) (4 p): hvilke faktorer påvirker retensjonstiden i GC.',
    'H2024 oppg. 1(c) (10 p totalt, 4 p hører hit): forklar «kolonneblødning» og «WCOT».',
    'H2024 oppg. 1(b) (flervalg, 1 av 5 delspørsmål): typisk SF for ikke-polare forbindelser i GC (PDMS).',
  ],
  buildsOn: ['01-retensjon-og-selektivitet', '02-effektivitet-og-opplosning', '03-bandspredning-van-deemter', '11-gc-baeregass-og-injeksjon'],
  usedIn: ['13-gc-detektorer', '17-kvalitativ-og-kvantifiseringsmetoder'],
  sources: [
    `[${G}, slide 6–14]`,
    `[${KT}, slide 12]`,
    `[${B1}, p. 17, 24–26, 36–44] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Pensum.pdf, p. 1]',
    `[${E25}, oppg. 3, 4] / [${LF25}, oppg. 3, 4]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(b), 1(c), 1(f)] / [${LF24}, p. 2–3, 6]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hva skjer med retensjonen i GC når kolonnetemperaturen økes?', a: `Den synker. Høyere temperatur øker analyttens damptrykk [${LF24}, p. 6; ${B1}, p. 41].` },
    { id: 'p2', kind: 'pretest', q: 'Hvilken type kapillærkolonne er vanligst: WCOT, SCOT eller PLOT?', a: `WCOT [${G}, slide 8; ${B1}, p. 26].` },
    { id: 'p3', kind: 'pretest', q: 'Hva separerer en helt upolar SF (100 % dimetylpolysiloksan) hovedsakelig etter?', a: `Kokepunkt [${B1}, p. 37].` },
    { id: 't1', q: 'Nevn fem faktorer som påvirker retensjonstiden i GC.', a: `Kolonnetemperatur, bæregassens strømningshastighet, stasjonær fase, analyttens flyktighet og polaritet, og kolonnelengde og diameter [${LF24}, p. 6].` },
    { id: 't2', q: 'Hvilken SF velger du for alkoholer, og hvilken for upolare hydrokarboner?', a: `Alkoholer: PEG eller cyano-polysiloksan. Upolare: metylsilikon (PDMS) [${B1}, p. 44].` },
    { id: 't3', q: 'Hva er McReynolds-systemet brukt til?', a: `Å karakterisere polariteten til en SF. Retensjonsindeksen til 5 teststoffer sammenlignes med på squalan (ΔI = I_SF − I_sq) [${G}, slide 14; ${B1}, p. 39–40].` },
    { id: 't4', q: 'Hvorfor er GC-kvantifisering alltid basert på intern standard?', a: `Fordi det er nesten umulig å få repeterbare injeksjoner [${B1}, p. 44].` },
    { id: 't5', q: 'Hvilken kolonne velger du for høyest effektivitet, og hvilken for store prøvevolum?', a: `Effektivitet: lang (30–100 m), smal (0,1–0,25 mm) med tynn film (0,1–0,25 µm). Store volum: vid ID (0,53–0,7 mm) med tykk film (1–5 µm) eller SCOT [${B1}, p. 44].` },
  ],
  equations: [
    {
      id: 'vn', label: 'Netto retensjonsvolum (hva retensjonen avhenger av)',
      tex: String.raw`\begin{gathered}V_N = V_R - V_M = \frac{273 \times R \cdot W_s}{\va{\gamma^\infty} \cdot \vb{p^\circ} \cdot M_s} \\ \sim t_R - t_M = t_R'\end{gathered}`,
      vars: [
        { sym: 'V_N', desc: 'netto retensjonsvolum', unit: ML },
        { sym: 'V_R', desc: 'retensjonsvolum ($t_R \\cdot F$)', unit: ML },
        { sym: 'V_M', desc: 'elueringsvolum for ikke-retardert forbindelse', unit: ML },
        { sym: 'R', desc: 'gasskonstanten', unit: String.raw`\mathrm{J\,mol^{-1}\,K^{-1}}` },
        { sym: 'W_s,\\ M_s', desc: 'vekt og molekylmasse av SF', unit: String.raw`\mathrm{g},\ \mathrm{g/mol}` },
        { sym: String.raw`\va{\gamma^\infty}`, desc: 'aktivitetskoeffisient i SF (synker med økt interaksjon)', unit: '–' },
        { sym: String.raw`\vb{p^\circ}`, desc: 'metningstrykk for forbindelsen ved kolonnetemperaturen', unit: String.raw`\mathrm{Pa}` },
      ],
      note: 'Upolar SF: $\\gamma^\\infty \\approx 1$, og separasjonen skjer etter kokepunkt. Polar SF: både polaritet og kokepunkt. Høy $p^\\circ$ (flyktig) gir lav retensjon.',
      cite: `[${B1}, p. 37, lign. 2.4]`,
      check: { status: 'verified', note: 'Bok lign. 2.4 (p. 37, PDF s. 53) identisk.' },
    },
    {
      id: 'logv', label: 'Temperaturavhengighet',
      tex: String.raw`\log V = \frac{b}{\vc{T}} + d`,
      vars: [
        { sym: 'V', desc: 'retensjonsvolum', unit: ML },
        { sym: String.raw`\vc{T}`, desc: 'kolonnetemperatur', unit: String.raw`\mathrm{K}` },
        { sym: 'b,\\ d', desc: 'konstanter', unit: '–' },
      ],
      note: 'Gjelder innenfor et begrenset temperaturområde.',
      cite: `[${B1}, p. 41, lign. 2.8]`,
      check: { status: 'verified', note: 'Bok lign. 2.8 (p. 41, PDF s. 57) identisk.' },
    },
    {
      id: 'kovats', label: 'Kovats retensjonsindeks',
      tex: String.raw`\begin{gathered}\vd{I(X)} = 100\,n \\ + 100\left[\frac{\log t_R'(X) - \log t_R'(n)}{\log t_R'(n+1) - \log t_R'(n)}\right]\end{gathered}`,
      vars: [
        { sym: String.raw`\vd{I(X)}`, desc: 'retensjonsindeks for stoff X', unit: '–' },
        { sym: 'n', desc: 'antall C i n-alkanet som eluerer rett før X', unit: '–' },
        { sym: "t_R'", desc: 'justert retensjonstid', unit: String.raw`\mathrm{min}` },
      ],
      note: 'Isoterm analyse. I = 100 × antall C for n-alkaner.',
      cite: `[${G}, slide 13; ${B1}, p. 40]`,
      check: { status: 'verified', note: 'Slide 13 identisk. Boka (p. 40, PDF s. 56) definerer I = 100 × C-tall i ord og Fig. 2.15.' },
    },
    {
      id: 'mcr', label: 'McReynolds og kolonnepolaritet',
      tex: String.raw`\begin{gathered}\Delta I = I_{SF} - I_{sq} \\ CP = \frac{\sum_{5} \Delta I_{SF}}{\sum_{5} \Delta I_{OV\text{-}275}} \times 100\end{gathered}`,
      vars: [
        { sym: 'I_{SF},\\ I_{sq}', desc: 'retensjonsindeks på aktuell SF og på squalan', unit: '–' },
        { sym: String.raw`OV\text{-}275`, desc: 'polar referansefase (dicyanoetylsilikon, «maks polar fase»)', unit: '–' },
        { sym: 'CP', desc: 'kolonnepolaritet', unit: String.raw`\%` },
      ],
      note: 'Summert over de 5 McReynolds-stoffene.',
      cite: `[${G}, slide 14; ${B1}, p. 40, lign. 2.5]`,
      check: { status: 'verified', note: 'Slide 14: ΔI = I_SF − I_SQ og CP-index = ΣΔI_SF/ΣΔI_OV-275 · 100, identisk. Bok lign. 2.5 skriver SP for SF og har ikke «× 100».' },
    },
    {
      id: 'golay', label: 'Platehøyde for filmtykkelse (kapillær)',
      tex: String.raw`H = \frac{2D_m}{u} + f_g\frac{d_c^2\,u}{D_m} + f_s\frac{d_f^2\,u}{D_s}`,
      vars: [],
      note: 'Golay-ligningen fra side 03. For tynne filmer (≤ 0,25 µm) kan SF-leddet neglisjeres.',
      cite: `[${B1}, p. 7–8, 41]`,
      check: { status: 'verified', note: 'Identisk med bok lign. 1.3 (p. 8). Merk: bok lign. 2.7 (p. 41) er trykt som «2D_m · u» og med SF-leddet overstreket.' },
    },
  ],
}

const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>
const Utledet = () => <strong className="utledet" style={{ color: tone('trap') }}>[UTLEDET — ingen fasit i LF] </strong>

/* Three capillary column types */
function Kolonnetyper() {
  const ring = (cx, kind) => (
    <g>
      <circle cx={cx} cy={80} r={52} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeWidth: 3 }} />
      {kind === 'wcot' && <circle cx={cx} cy={80} r={47} style={{ fill: 'none', stroke: tone('var-c'), strokeWidth: 5 }} />}
      {(kind === 'plot' || kind === 'scot') && Array.from({ length: 18 }, (_, i) => { const a = (i / 18) * 2 * Math.PI; return <circle key={i} cx={cx + 44 * Math.cos(a)} cy={80 + 44 * Math.sin(a)} r={6} style={{ fill: tone('muted'), stroke: kind === 'scot' ? tone('var-c') : 'none', strokeWidth: 3 }} /> })}
    </g>
  )
  return (
    <Svg w={460} h={270} label="Tre kapillærkolonnetyper">
      {ring(80, 'wcot')}{ring(230, 'plot')}{ring(380, 'scot')}
      {[['WCOT', 'GLC', 'høyest effektivitet', 80], ['PLOT', 'GSC', 'gasser', 230], ['SCOT', 'GLC', 'høyere kapasitet,', 380]].map(([n, g, d, x]) => (
        <g key={n}><Label x={x} y={156} size={14}>{n}</Label><Label x={x} y={174} size={12}>{g}</Label><Label x={x} y={190} size={11}>{d}</Label></g>
      ))}
      <Label x={380} y={204} size={11}>lavere effektivitet</Label>
      <Label x={10} y={232} anchor="start" size={12}>WCOT-snitt innenfra:</Label>
      <rect x={10} y={240} width={60} height={14} style={{ fill: tone('var-c') }} />
      <rect x={70} y={240} width={150} height={14} style={{ fill: `color-mix(in srgb, ${tone('muted')} 40%, var(--bg))` }} />
      <rect x={220} y={240} width={70} height={14} style={{ fill: tone('var-e'), opacity: 0.7 }} />
      <Label x={40} y={268} size={10}>SF 0,1–0,5 µm</Label>
      <Label x={145} y={268} size={10}>fused silica</Label>
      <Label x={255} y={268} size={10}>polyimid</Label>
    </Svg>
  )
}

/* Temperature program vs isothermal */
function Temperaturprogram() {
  const row = (y, peaks, lab) => (
    <g>
      <Label x={10} y={y - 46} anchor="start" size={12}>{lab}</Label>
      <line x1={10} y1={y} x2={290} y2={y} style={{ stroke: tone('muted') }} />
      {peaks.map(([x, w, h], i) => <Curve key={i} t="topic" width={2} points={[[x - 3 * w, y], [x - w, y - h * 0.4], [x, y - h], [x + w, y - h * 0.4], [x + 3 * w, y]]} />)}
    </g>
  )
  return (
    <Svg w={460} h={300} label="Temperaturprogram vs. isotermt">
      {row(80, [[20, 1.5, 35], [30, 1.5, 35], [42, 2, 32], [60, 3, 28], [90, 5, 22], [130, 7, 18], [180, 10, 14], [230, 13, 11], [280, 16, 9]], '(a) isotermt 45 °C: sene topper brede, ~30 min')}
      {row(170, [[15, 1, 38], [18, 1, 38], [21, 1, 38], [25, 1, 36], [30, 1.5, 34], [38, 2, 32], [48, 2, 30], [60, 3, 28], [75, 3, 26]], '(b) isotermt 145 °C: tidlige topper klumpet')}
      {row(260, [[25, 3, 30], [55, 3, 30], [85, 3, 30], [115, 3, 30], [145, 3, 30], [175, 3, 30], [205, 3, 30], [235, 3, 30], [265, 3, 30]], '(c) 30 → 180 °C, 5 °C/min: alle skarpe')}
      <line x1={310} y1={260} x2={450} y2={260} style={{ stroke: tone('ink') }} />
      <line x1={310} y1={260} x2={310} y2={120} style={{ stroke: tone('ink') }} />
      <polyline points="310,240 330,240 430,140 450,140" style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2.5 }} />
      <polyline points="310,240 340,240 340,215 370,215 370,190 400,190 400,165 430,165 430,140 450,140" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 1.5 }} />
      <Label x={316} y={116} anchor="start" size={11}>T (°C)</Label>
      <Label x={450} y={278} anchor="end" size={11}>tid</Label>
      <Label x={304} y={244} anchor="end" size={10}>30</Label>
      <Label x={304} y={144} anchor="end" size={10}>180</Label>
    </Svg>
  )
}

/* Column bleed */
function Blodning() {
  const pts = Array.from({ length: 60 }, (_, i) => { const x = 40 + i * 6.5; const base = 160 - Math.pow(i / 59, 3) * 100; return [x, base + Math.sin(i * 2.7) * (1 + i / 12)] })
  return (
    <Svg w={460} h={200} label="Kolonneblødning">
      <Arrow x1={40} y1={180} x2={440} y2={180} />
      <Arrow x1={40} y1={180} x2={40} y2={20} />
      <polyline points={pts.map((p) => p.join(',')).join(' ')} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2 }} />
      <Label x={440} y={196} anchor="end" size={12}>tid (temperatur ↑)</Label>
      <Label x={46} y={22} anchor="start" size={12}>signal</Label>
      <Label x={300} y={60} t="trap" size={12}>baselinjen stiger, mer støy</Label>
    </Svg>
  )
}

/* Polarity scale */
function Polaritet() {
  const ph = ['100 % dimetyl-polysiloksan', '5 % fenyl (DB-5)', '35 % fenyl', '50 % fenyl', '50 % cyanopropylfenyl (DB-1701 / cyano)', 'PEG (Carbowax)', '70 % cyanopropylfenyl', '90 % cyanopropylfenyl']
  return (
    <Svg w={460} h={250} label="Polaritetsskala for SF">
      <Arrow x1={30} y1={230} x2={30} y2={14} t="var-e" />
      <Label x={40} y={244} anchor="start" size={12}>Low polarity</Label>
      <Label x={40} y={14} anchor="start" size={12} t="var-e">High polarity</Label>
      {ph.map((n, i) => (
        <g key={n}>
          <rect x={44} y={204 - i * 26} width={20 + i * 22} height={18} style={{ fill: tone('var-e'), opacity: 0.2 + i * 0.1 }} />
          <Label x={72 + i * 22} y={218 - i * 26} anchor="start" size={11}>{n}</Label>
        </g>
      ))}
    </Svg>
  )
}

/* Kovats plot */
function KovatsSkisse() {
  const X = (c) => 50 + (c - 1) * 52, Y = (c) => 200 - (c - 1) * 24
  return (
    <Svg w={460} h={270} label="Kovats retensjonsindeks">
      <Arrow x1={50} y1={220} x2={440} y2={220} />
      <Arrow x1={50} y1={220} x2={50} y2={20} />
      <line x1={X(1)} y1={Y(1)} x2={X(8)} y2={Y(8)} style={{ stroke: tone('topic'), strokeWidth: 2 }} />
      {[1, 2, 3, 4, 5, 6, 7].map((c) => <g key={c}><circle cx={X(c)} cy={Y(c)} r={5} style={{ fill: tone('topic') }} /><Label x={X(c)} y={236} size={11}>{c}</Label><Label x={X(c)} y={254} size={10}>{c * 100}</Label></g>)}
      <circle cx={X(4.6)} cy={Y(4.6)} r={7} style={{ fill: tone('var-d') }} />
      <line x1={X(4.6)} y1={Y(4.6)} x2={X(4.6)} y2={220} style={{ stroke: tone('var-d'), strokeDasharray: '4 3' }} />
      <Label x={X(4.6) + 10} y={Y(4.6) - 6} anchor="start" t="var-d" size={12}>X → I ≈ 460</Label>
      <Label x={440} y={236} anchor="end" size={11}>antall C</Label>
      <Label x={440} y={268} anchor="end" size={11}>retensjonsindeks</Label>
      <Label x={56} y={22} anchor="start" size={12}>log t′R</Label>
    </Svg>
  )
}

const kov = (x, p) => 100 * 10 + 100 * (Math.log10(x) - Math.log10(p.a)) / (Math.log10(p.b) - Math.log10(p.a))

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Flyktighet og løselighet i SF">
        <MentalModel cite={`[${B1}, p. 25–26, 37–38; ${G}, slide 6–9; ${KT}, slide 12]`}>
          I GC har bæregassen ingen interaksjon med analyttene. Retensjonen bestemmes av to ting: hvor flyktig analytten er ved kolonnetemperaturen (<V c="b">damptrykk p°</V>), og hvor godt den løser seg i SF (<V c="a">aktivitetskoeffisient γ∞</V>). På en upolar SF blir analyttene nesten ikke «likt» av fasen, så rekkefølgen følger kokepunkt. På en polar SF (PEG, cyano) kommer polaritet og hydrogenbinding i tillegg, så stoffer med samme kokepunkt men ulike funksjonelle grupper kan skilles.{' '}
          <V c="c">Temperaturen</V> er GCs «gradient». Lav temperatur gir god separasjon av flyktige stoffer, men tregt for tunge. Et temperaturprogram fra lav til høy gir både separasjon og kort analysetid. Kolonnen er nesten alltid en lang, tynn kapillær med en tynn væskefilm på veggen (WCOT), som gir svært høye platetall.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Kolonneovn" cite={`[${G}, slide 6]`}>En enkel, men kritisk del. Temperaturen må reguleres svært nøyaktig, og en vifte gir god sirkulasjon. Den kan kjøres isotermt eller med gradient (temperaturprogram).</Def>
        <Columns>
          <div>
            <Def term="Temperatur og retensjon" cite={`[${B1}, p. 41; ${LF24}, p. 6]`}>{'Kolonnetemperaturen styrer retensjonen gjennom damptrykket $p^\\circ$. Temperaturen bør være så høy som mulig for kort analysetid, men fortsatt gi separasjon. Høyere temperatur øker damptrykket og reduserer retensjonstiden.'}</Def>
            <Def term="Isotermt vs. temperaturprogram" cite={`[${B1}, p. 41; ${G}, slide 6]`}>Isotermt passer best for komponenter med like kokepunkter. Temperaturprogram brukes for komplekse prøver med stort kokepunktsspenn, og må brukes ved splitless injeksjon. Forelesningseksempel: isotermt 45 °C gir god separasjon av tidlige topper, men sene topper er brede og kommer etter ca. 30 min. Isotermt 145 °C gir raskt resultat, men tidlige topper overlapper. Temperaturprogram 30 → 180 °C med 5 °C/min gir alle topper skarpe og separert.</Def>
          </div>
          <Diagram title="Temperaturprogram vs. isotermt" caption="Til høyre: temperatur mot tid, lineær rampe (rød) og trinnvis rampe (svart) fra ca. 30 til 180 °C. Skisse." cite={`[${G}, slide 6; ${KT}, slide 12]`}>
            <Temperaturprogram />
          </Diagram>
        </Columns>

        <Def term="Pakkede kolonner" cite={`[${G}, slide 7; ${B1}, p. 25]`}>Fylt med partikler som kan være dekket med SF. Høy kapasitet, lengde 2–3 m, ID 2–3 mm. Typisk 2000–3000 plater/m. I GLC: &lt; 10 % (w/w) SF for analytiske, 20–30 % for preparative.</Def>
        <Def term="Åpne rør / kapillærkolonner (OT)" cite={`[${G}, slide 7; ${B1}, p. 25]`}>Vanligst. 25–50 m lange, ID 0,1–0,5 mm. Boka: ID 0,1–0,5 mm, 10–100 m, ca. 3000 plater/m for 0,25 mm ID, så 30 m gir ca. 90 000 plater. Laget av fused silica med polyimidbelegg utenpå for mekanisk styrke (polyimid brytes ned ved 300–350 °C).</Def>
        <Columns>
          <div>
            <Def term="WCOT (Wall Coated Open Tubular)" cite={`[${G}, slide 8; ${B1}, p. 26; ${LF24}, p. 3]`}>Vanligst. Høy effektivitet, der ID og sjikttykkelse påvirker <T text="$H$." /> Flytende SF som tynn film (0,1–0,5 µm, typisk 0,25 µm) på innerveggen, brukt til GLC. Løsningsforslaget: en type kapillærkolonne i GC med tynn film av SF belagt direkte på innsiden av kapillæren (uten fyllmateriale), som gir høy effektivitet og brukes ofte for flyktige forbindelser.</Def>
            <Def term="SCOT (Support Coated Open Tubular)" cite={`[${G}, slide 8; ${B1}, p. 26]`}>Væske-SF belagt på et porøst lag eller porøse partikler på innerveggen. Høyere prøvekapasitet, men lavere effektivitet.</Def>
            <Def term="PLOT (Porous Layer Open Tubular)" cite={`[${G}, slide 8; ${B1}, p. 26; ${LF25}, oppg. 3]`}>Faste porøse partikler på innerveggen, altså en «pakket» kapillærkolonne. Brukes til GSC, der det porøse laget er SF. Løsningsforslaget: kapillærkolonner der SF er et porøst fast lag på kolonneveggen, ofte brukt i GC.</Def>
          </div>
          <Diagram title="Tre kapillærkolonnetyper" cite={`[${G}, slide 7–8; ${B1}, p. 26, Fig. 2.6]`}>
            <Kolonnetyper />
          </Diagram>
        </Columns>
        <Def term="Filmtykkelse" cite={`[${B1}, p. 40–41; ${G}, slide 8]`}>{'Tynn film gir lav $H$, mindre blødning og kort analysetid. Tykk film gir mindre adsorpsjon til matriks og tåler større prøvemengder. Forelesningsfiguren for en 0,53 mm wide-bore kolonne viser at 1,0 µm film gir lavere HETP enn 5,0 µm.'}</Def>
        <Def term="Bærematerialet (pakkede kolonner, SCOT)" cite={`[${G}, slide 9; Pensum.pdf]`}>Kjemisk inert, termisk stabilt og med stor overflate, f.eks. kiselgur fra kiselalger. Kolonnematerialet (veggene) er glass eller metall for pakkede kolonner og fused silica for kapillærer. (Bokas 2.6.2.1 «Matrix» er ikke pensum.)</Def>
        <Def term="SF i GLC" cite={`[${G}, slide 9]`}>En væske med lavt smeltepunkt og høyt kokepunkt. Retensjonen avhenger av affiniteten (løseligheten) til prøven i væskefasen: polaritet, H-bindinger osv.</Def>
        <Columns>
          <Def term="Kolonneblødning" cite={`[${G}, slide 9; ${LF24}, p. 3]`}>SF løsner, treffer detektoren og gir støy. Signalet øker med tid og temperatur. Løsningsforslaget: lekkasje eller fordamping av SF fra GC-kolonnen, ofte ved høye temperaturer eller pga. nedbrytning over tid. Gir bakgrunnsstøy, dårligere analysekvalitet og kortere kolonnelevetid.</Def>
          <Diagram title="Kolonneblødning" cite={`[${G}, slide 9]`}><Blodning /></Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Silikoner (polysiloksaner)" cite={`[${G}, slide 10; ${B1}, p. 38–39, Tabell 2.5; ${LF24}, p. 2]`}>De vanligste SF, ofte silikonoljer (lange polymerer). Polariteten justeres via sidegruppene. Metylsilikon (100 % dimetylpolysiloksan, PDMS) er upolar. Metylfenylsilikon, f.eks. 5 % fenyl («Equity-5, SLB-5, DB-5»), er middels polar. Cyano-silikon, f.eks. DB-1701 (50 % cyanopropylfenyl / 50 % dimetylsiloksan), er polar. Polydimetylsiloksan (PDMS) er typisk SF for ikke-polare forbindelser i GC.</Def>
            <Def term="Polyetylenglykol (PEG, «Carbowax»)" cite={`[${G}, slide 11; ${B1}, p. 38]`}>Polar fase for analyse av polare analytter. Squalan er en upolar ikke-silikonfase.</Def>
          </div>
          <Diagram title="Polaritetsskala for SF" cite={`[${G}, slide 12]`}><Polaritet /></Diagram>
        </Columns>
        <Def term="Kjemisk bundet SF («CB»)" cite={`[${G}, slide 12; ${B1}, p. 39]`}>OH-gruppene på siloksanen reagerer med støttematerialet (silika) ved oppvarming. Immobiliserte faser (kjemisk bundet til veggen og/eller kryssbundet til gummi) har økt stabilitet og levetid og er nå vanligst.</Def>
        <Def term="GSC (adsorpsjon)" cite={`[${G}, slide 14; ${B1}, p. 36]`}>Brukes for (natur)gassanalyse. SF er alumina/silika, aktivt kull eller molekylsikter («molecular sieves»). Boka: aktivt kull (CO, CH₄, CO₂, N₂), molekylsikter (H₂, O₂, N₂, CH₄, CO) og porøse polymerer (Porapak, små polare forbindelser), med TCD som detektor for permanente gasser.</Def>
        <Def term="Valg av SF etter analytt" cite={`[${B1}, p. 44]`}>Permanente gasser: faste adsorbenter (GSC). Upolare: metylsilikoner. Dobbeltbindinger, karbonyl: metylfenylsilikoner. OH-grupper: PEG eller cyano-polysiloksaner. Svært komplekse prøver: metylfenylsilikoner. Enantiomerer: syklodekstrin.</Def>
        <Def term="Valg av kolonnedimensjon" cite={`[${B1}, p. 44]`}>Høy effektivitet: lang (30–100 m), smal (0,1–0,25 mm), tynn film (0,1–0,25 µm). Høy hastighet: kort, smal, tynn film. Store prøvevolum: vid ID (0,53–0,7 mm), tykk film (1–5 µm) eller SCOT.</Def>

        <Columns>
          <Def term="Retensjonsindeks (Kovats, I)" cite={`[${G}, slide 13; ${B1}, p. 40]`}>{"Brukes for å sammenligne SF. Man analyserer n-alkaner isotermt og plotter $\\log t_R'$ mot antall C. I = 100 × antall C, f.eks. butan = 400. $t_R'$ må justeres for stoffet X og for alkanene før og etter (n og n+1). Gjør det mulig å sammenligne I for ulike standarder på ulike SF."}</Def>
          <Diagram title="Kovats retensjonsindeks" caption="Rett linje gjennom alkanpunktene; et ukjent stoff X legges inn mellom to alkaner, og I leses av. Skisse." cite={`[${G}, slide 13; ${B1}, p. 40, Fig. 2.15]`}><KovatsSkisse /></Diagram>
        </Columns>
        <Def term="McReynolds-systemet" cite={`[${G}, slide 14; ${B1}, p. 40]`}>5 stoffer analyseres på SF, og I beregnes for alle. Det gjentas på maks upolar standardfase (squalan), og ΔI = I_SF − I_sq beregnes. De 5 McReynolds-konstantene karakteriserer SF. Teststoffene er benzen, 2-butanol (bok: 1-butanol), 2-pentanon, nitropropan og pyridin.</Def>
        <Avvik>McReynolds-probe 2-butanol (forelesning, slide 14) vs. 1-butanol (bok, p. 40).</Avvik>
        <Def term="Faktorer som påvirker retensjonstiden i GC (H24 1(f))" cite={`[${LF24}, p. 6]`}>Kolonnetemperatur, bæregassens strømningshastighet, stasjonær fase, analyttens flyktighet og polaritet, og kolonnelengde og diameter.</Def>
        <Def term="Kvalitativ og kvantitativ GC" cite={`[${B1}, p. 44]`}>{'Identifikasjon ved å sammenligne $t_R$ med standarder på minst to ulike SF, men GC-MS er mest brukt. Kvantitativ GC gjøres alltid med intern standard, fordi repeterbare injeksjoner er nesten umulige.'}</Def>
        <Def term="2D GC (GC × GC)" cite={`[${B1}, p. 42–43]`}>To kolonner med ulik (ortogonal) separasjonsmekanisme, koblet via en modulator. Total toppkapasitet er produktet av hver dimensjon. Comprehensive betyr at hele prøven overføres, heart-cut at bare én fraksjon overføres.</Def>
        <Def term="Derivatisering" cite={`[${B1}, p. 17, 44]`}>Ikke-flyktige stoffer med –COOH, –OH eller –NH₂ gjøres flyktige og termisk stabile, f.eks. fettsyrer til estere. Kan også øke detekterbarheten (f.eks. ECD-responsive reagenser).</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="vn" />
        <Eq id="logv" />
        <Eq id="kovats" />
        <Plot
          title="Kovats-kalkulator"
          caption="$I(X)$ for $n$ = 10 (alkanet før X), mot justert retensjonstid for X. Sliderne setter $t_R'(n)$ og $t_R'(n+1)$. Kursmaterialet gir ingen numerisk Kovats-oppgave, så verdiene er illustrative. Hold musen over kurven for å lese av I. Utenfor intervallet mellom de to alkanene er formelen ikke ment brukt."
          cite={`[${G}, slide 13; ${B1}, p. 40]`}
          x={{ min: 5, max: 30, label: "t'R(X) (min)" }}
          y={{ label: 'I(X)' }}
          params={[
            { key: 'a', label: "$t_R'(n)$", min: 5, max: 14, step: 0.1, value: 10, unit: 'min' },
            { key: 'b', label: "$t_R'(n+1)$", min: 15, max: 30, step: 0.1, value: 18, unit: 'min' },
          ]}
          series={[{ key: 'I', label: 'I(X)', t: 'var-d', fn: (x, p) => kov(x, p) }]}
          marks={[{ y: 1000, label: 'I = 1000 (C₁₀)' }, { y: 1100, label: 'I = 1100 (C₁₁)' }]}
        />
        <Eq id="mcr" />
        <Eq id="golay" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 4a og 4c: elueringsrekkefølge og temperaturprogram"
          given="Blanding: heksan (kp 69 °C), etylacetat (kp 77 °C) og metanol (kp 65 °C). Kolonne 30 m × 0,25 mm × 0,25 µm, ikke-polar dimetylpolysiloksan. Program 40 °C (2 min) → 15 °C/min → 200 °C (5 min). He 1,2 mL/min, split 1:20, FID."
          steps={[
            { title: 'a) Kortest retensjonstid?', body: `SF er upolar, så retensjonen styres i stor grad av flyktighet og svake dispersjonskrefter ($\\gamma^\\infty \\approx 1$, separasjon etter kokepunkt) [${B1}, p. 37].` },
            { body: 'Metanol har lavest kokepunkt (65 °C), altså høyest damptrykk ved gitt T.' },
            { body: 'Metanol er polar og interagerer dårligst med den upolare fasen.' },
            { title: 'Svar:', body: 'Metanol får lavest $k$ og eluerer først. Løsningsforslaget påpeker at kokepunkt alene ikke forklarer alt, og at polaritet og fase-match betyr mye.' },
            { title: 'c) Fordelen med temperaturprogram i stedet for isotermt 40 °C?', body: 'De flyktige komponentene eluerer raskt ved lav starttemperatur.' },
            { body: 'De mindre flyktige eluerer innen rimelig tid når temperaturen økes.' },
            { title: 'Svar:', body: `Kortere total analysetid, bedre separasjon over et bredt kokepunktsområde og skarpere topper enn isotermt 40 °C. Samme prinsipp som forelesningseksempelet med 30 → 180 °C [${G}, slide 6].` },
          ]}
          cite={`[${E25}, oppg. 4; ${LF25}, oppg. 4]`}
        />
        <FadedExample
          title="H25 oppg. 4d (to deloppgaver): bytte SF og høyere starttemperatur"
          given="Del 1: Bytte til polyetylenglykol («Carbowax»). Del 2: Starttemperatur 40 → 60 °C, ellers likt."
          steps={[
            { title: 'Del 1:', body: `PEG er en polar fase for polare analytter [${G}, slide 11]. Polar SF separerer etter både polaritet og kokepunkt [${B1}, p. 38].` },
            { title: '**[UTLEDET — ingen fasit i LF]** Hvilken av de tre har sterkest interaksjon (H-binding) med PEG?', body: <><Utledet />Metanol (–OH). PEG er SF-valget for OH-analytter [{B1}, p. 44].</>, hidden: true },
            { title: '**[UTLEDET — ingen fasit i LF]** Hva skjer med metanols retensjon og heksans retensjon?', body: <><Utledet />Metanol holdes mye sterkere igjen. Heksan (upolar) holdes lite igjen og kan komme først.</>, hidden: true },
            { title: 'Del 2: Hva skjer med de tidlig eluerte toppene (metanol, etylacetat)?', body: 'Kortere retensjonstid, nærmere $t_M$ (dødtid), og risiko for dårligere separasjon av de tidligste toppene.', hidden: true },
            { title: 'Hva skjer med de senere toppene?', body: 'De påvirkes mindre relativt, men eluerer også noe tidligere.', hidden: true },
            { title: 'Netto effekt?', body: 'Kortere analysetid, men mulig tap av oppløsning i «fronten» av kromatogrammet.', hidden: true },
          ]}
          cite={`[${E25}, oppg. 4d; ${LF25}, oppg. 4d]`}
        />
        <Gap>løsningsforslaget gir ikke svar på deloppgaven om Carbowax. Svaret over er utledet fra forelesning og bok.</Gap>
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="«Kortest retensjon = lavest kokepunkt» alene" cite={`[${LF25}, oppg. 4a; ${B1}, p. 37–38]`}>Gjelder bare på upolar SF. På polar SF spiller polaritet og H-binding inn, og løsningsforslaget påpeker at fase-match betyr mye selv på upolar fase.</Trap>
        <Trap title="PLOT og SCOT forveksles" cite={`[${B1}, p. 26]`}>PLOT har porøst <em>fast</em> lag og brukes i GSC. SCOT har væske-SF <em>på</em> porøse partikler og brukes i GLC.</Trap>
        <Trap title="Kolonneblødning = lekkasje i koblinger" cite={`[${LF24}, p. 3; ${G}, slide 9]`}>Det er SF som fordamper eller brytes ned, særlig ved høy temperatur. Det gir stigende baselinje og støy.</Trap>
        <Trap title="Høyere starttemperatur gir alltid bedre analyse" cite={`[${LF25}, oppg. 4d]`}>Kortere tid, men de tidlige toppene kan bli for dårlig separert.</Trap>
        <Trap title="PDMS for polare analytter" cite={`[${LF24}, p. 2; ${B1}, p. 44]`}>PDMS er typisk for <em>ikke-polare</em> forbindelser. Polare (–OH) trenger PEG eller cyano-polysiloksan.</Trap>
        <Trap title="Tykk film gir bedre separasjon" cite={`[${B1}, p. 40–41; ${G}, slide 8]`}>{'Nei. Tykk film gir høyere $H$ og mer blødning, men større kapasitet.'}</Trap>
        <Trap title="Kovats med $t_R$ i stedet for $t_R'$" cite={`[${G}, slide 13]`}>Formelen bruker justerte retensjonstider.</Trap>
      </Section>
    </>
  )
}
