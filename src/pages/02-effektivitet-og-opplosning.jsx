import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Block, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const L = 'Krom. Teori - Innledning og repetisjon 190826.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const DIM = String.raw`\text{dimensjonsløs}`
const MIN = String.raw`\mathrm{min}`

export const meta = {
  title: 'Effektivitet og oppløsning (N, H, Rs)',
  topic: 'krom-teori',
  examWeight: {
    level: 'high',
    note: 'På begge eksamener: H24 1(e) 6 p og 1(i) 14 p (beregning av Rs, N, H), H25 oppg. 1 flervalg og oppg. 3 begrepsforklaring (HETP, halvhøydebredde)',
  },
  examTasks: [
    'H2024: 1(a)–1(i) (index: side 01–03)',
    'H2025: oppg. 1–3 (definisjoner, beregninger) (index: side 01–03)',
    'H2024 oppg. 1(e) (6 p): definer oppløsning, og forklar hvilke parametere som kan justeres i HPLC for å forbedre oppløsningen mellom to nært eluerende topper.',
    'H2024 oppg. 1(i) (14 p, delt med side 01): beregn Rs, N og H (og k′, α) fra et HPLC-kromatogram med oppgitt kolonnelengde 25 cm.',
    'H2025 oppg. 1 (flervalg): hva en reduksjon i partikkelstørrelse i pakkede kolonner normalt fører til (høyere platetall og bedre separasjon).',
    'H2025 oppg. 3 (10 p totalt, 2 av 5 begreper hører hit): forklar HETP og halvhøydebredde.',
  ],
  buildsOn: ['01-retensjon-og-selektivitet'],
  usedIn: ['03-bandspredning-van-deemter', '05-kolonner-og-partikler', '12-gc-kolonner-og-stasjonaerfaser', '26-ce-metoder-og-cec'],
  sources: [
    `[${L}, slide 7–12]`,
    `[${B1}, p. 3, 5–6, 9–13] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Eksamen_IMAK2008_24.pdf, oppg. 1(e), 1(i)]',
    `[${LF24}, p. 5, 8–9]`,
    '[IMAK2008 eksamen H2025.pdf, oppg. 1, 3]',
    `[${LF25}, p. 1, oppg. 1 og 3]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'To topper har god avstand ($\\alpha$ stor), men toppene er svært brede. Er de nødvendigvis godt separert?', a: `Nei. Oppløsningen avhenger både av avstanden mellom toppene og av toppbredden. $R_s$ bestemmes av $k$, $N$ og $\\alpha$ [${B1}, p. 12].` },
    { id: 'p2', kind: 'pretest', q: 'Betyr høy platehøyde $H$ en god eller en dårlig kolonne?', a: `Dårlig. Lav HETP tilsvarer høy effektivitet [${LF25}, oppg. 3].` },
    { id: 'p3', kind: 'pretest', q: 'Hvilken $R_s$-verdi regnes som grensen for baselinjeseparasjon?', a: `$R_s = 1{,}5$ [${L}, slide 11; ${B1}, p. 12].` },
    { id: 't1', q: 'En topp har $t_R$ = 2,164 min og basisbredde 0,2 min. Hva er $N$, og hva blir $H$ for en 25 cm kolonne?', a: `$N = 16(2{,}164/0{,}2)^2 \\approx 1873$, og $H = 25/1873 \\approx 0{,}0133$ cm [${LF24}, p. 8–9].` },
    { id: 't2', q: 'Hvilke tre variabler bestemmer oppløsningen, og hvordan inngår $N$?', a: `$\\alpha$, $N$ og $k$. $N$ inngår som $\\sqrt{N}$ [${B1}, p. 12–13; ${L}, slide 11].` },
    { id: 't3', q: 'Hvorfor bruker man ofte temperaturprogram i GC heller enn isoterm kjøring?', a: `Ved konstante betingelser er det vanskelig å få både god separasjon og kort analyse. Høy isoterm T gir overlapp i starten, lav isoterm T gir lang analyse og brede sene topper. Temperaturprogram fra lav til høy T gir begge deler [${L}, slide 12].` },
    { id: 't4', q: 'Hvor på toppen måles asymmetrifaktoren, og hvilken verdi ønsker man?', a: `Ved 10 % av topphøyden, som $A_s = b/a$. Den bør være så nær 1 som mulig [${B1}, p. 11–12; ${L}, slide 11].` },
    { id: 't5', q: 'Hvilke typiske platetall forventes i kapillær-GC og i HPLC?', a: `GC 10⁴–10⁶, HPLC 0,5–5·10⁴ [${L}, slide 9].` },
  ],
  equations: [
    {
      id: 'N-def', label: 'Platetall (definisjon)',
      tex: String.raw`\va{N} = \left(\frac{\vb{t_R}}{\vc{\sigma}}\right)^2`,
      vars: [
        { sym: String.raw`\va{N}`, desc: 'platetall (kolonneeffektivitet)', unit: DIM },
        { sym: String.raw`\vb{t_R}`, desc: 'retensjonstid', unit: MIN },
        { sym: String.raw`\vc{\sigma}`, desc: 'standardavvik for Gauss-toppen (i tidsenheter)', unit: MIN },
      ],
      note: 'Forutsetter Gauss-fordelt topp. $t_R$ og $\\sigma$ må ha samme enhet.',
      cite: `[${B1}, p. 5–6, 9, lign. 1.5; ${L}, slide 8]`,
      check: { status: 'verified', note: 'Bok lign. 1.5 (p. 9, PDF s. 25) og slide 8 identiske.' },
    },
    {
      id: 'N-wb', label: 'Platetall fra basisbredde',
      tex: String.raw`\begin{gathered}\va{N} = 16\left(\frac{\vb{t_R}}{\vc{w_b}}\right)^2 \\ (\vc{w_b} = 4\vc{\sigma})\end{gathered}`,
      vars: [{ sym: String.raw`\vc{w_b}`, desc: 'toppbredde ved basis, mellom tangentene', unit: MIN }],
      cite: `[${L}, slide 8; ${B1}, p. 9, lign. 1.7]`,
      check: { status: 'verified', note: 'Slide 8 identisk (w_b = 4σ). Bok lign. 1.7 skriver w uten indeks.' },
    },
    {
      id: 'N-wh', label: 'Platetall fra halvhøydebredde',
      tex: String.raw`\begin{gathered}\va{N} = 5{,}54\left(\frac{\vb{t_R}}{\vc{w_{0,5}}}\right)^2 \\ (\vc{w_{0,5}} = 2{,}354\vc{\sigma})\end{gathered}`,
      vars: [{ sym: String.raw`\vc{w_{0,5}}\ (\vc{w_h})`, desc: 'toppbredde ved halv høyde', unit: MIN }],
      note: 'Vanlig å bruke, men ikke representativ ved tailing.',
      cite: `[${B1}, p. 9, lign. 1.6; ${L}, slide 8]`,
      check: { status: 'verified', note: 'Bok lign. 1.6 (PDF s. 25) og slide 8: N = 5,54(t_R/w_0,5)², w_h = 2,354σ.' },
    },
    {
      id: 'H', label: 'Platehøyde (HETP)',
      tex: String.raw`\vd{H} = \frac{L}{\va{N}}`,
      vars: [
        { sym: String.raw`\vd{H}`, desc: 'platehøyde, HETP', unit: String.raw`\mathrm{\mu m},\ \mathrm{mm}\ \text{eller}\ \mathrm{cm}` },
        { sym: 'L', desc: 'kolonnelengde', unit: String.raw`\mathrm{cm}` },
        { sym: String.raw`\va{N}`, desc: 'platetall', unit: DIM },
      ],
      note: 'Lav $H$ = effektiv kolonne. Bidragene til $H$ beskrives av van Deemter, se side 03.',
      cite: `[${L}, slide 10; ${B1}, p. 6, 10, lign. 1.10]`,
      check: { status: 'verified', note: 'Slide 10 og bok lign. 1.10 (PDF s. 26): H = L/N.' },
    },
    {
      id: 'Rs', label: 'Oppløsning (fra kromatogrammet)',
      tex: String.raw`\begin{gathered}\ve{R_s} = \frac{\vb{t_{R_2}}-\vb{t_{R_1}}}{0{,}5\,(\vc{w_{b_1}}+\vc{w_{b_2}})} \\ = \frac{2\,(\vb{t_{R_2}}-\vb{t_{R_1}})}{\vc{w_{b_1}}+\vc{w_{b_2}}}\end{gathered}`,
      vars: [
        { sym: String.raw`\ve{R_s}`, desc: 'oppløsning', unit: DIM },
        { sym: String.raw`\vb{t_{R_1}}, \vb{t_{R_2}}`, desc: 'retensjonstider, topp 1 og 2', unit: MIN },
        { sym: String.raw`\vc{w_{b_1}}, \vc{w_{b_2}}`, desc: 'basisbredder', unit: MIN },
      ],
      note: 'De to formene er identiske. Forelesningen bruker den første, boka og løsningsforslaget den andre. $R_s = 1{,}5$ er grensen for baselinjeseparasjon.',
      cite: `[${L}, slide 10–11; ${B1}, p. 12; ${LF24}, p. 5]`,
      check: { status: 'verified', note: 'Slide 10: første form. Bok p. 12 (PDF s. 28): R_s = 2(t₂ − t₁)/(w₁ + w₂), med t og w uten R/b-indeks.' },
    },
    {
      id: 'purnell', label: 'Oppløsningsligningen (Purnell)',
      tex: String.raw`\ve{R_s} = \frac{1}{4}\,(\vf{\alpha}-1)\,\sqrt{\va{N}}\left(\frac{k}{1+k}\right)`,
      vars: [
        { sym: String.raw`\vf{\alpha}`, desc: 'separasjonsfaktor', unit: DIM },
        { sym: String.raw`\va{N}`, desc: 'platetall', unit: DIM },
        { sym: 'k', desc: 'retensjonsfaktor, gjennomsnitt av $k_1$ og $k_2$', unit: DIM },
      ],
      note: 'Gjelder for to nært eluerende forbindelser. Ifølge boka er dette en fundamental ligning i kromatografien: $R_s$ kan forbedres ved å øke $\\alpha$, $N$ eller $k$.',
      cite: `[${B1}, p. 13, lign. 1.11; ${L}, slide 11]`,
      check: { status: 'verified', note: 'Bok lign. 1.11 (PDF s. 29) og slide 11 identiske; slide 11 sier k = gjennomsnitt av k₁ og k₂.' },
    },
    {
      id: 'As', label: 'Asymmetrifaktor',
      tex: String.raw`\begin{gathered}A_s = \frac{b}{a} \\ \text{målt ved } c = 0{,}1\,h\end{gathered}`,
      vars: [
        { sym: 'A_s', desc: 'asymmetrifaktor', unit: DIM },
        { sym: 'a', desc: 'fremre halvbredde ved 10 % av topphøyden', unit: MIN },
        { sym: 'b', desc: 'bakre halvbredde ved 10 % av topphøyden', unit: MIN },
        { sym: 'h', desc: 'topphøyde', unit: String.raw`\text{signalenhet}` },
      ],
      note: 'Ideelt $A_s \\approx 1$.',
      cite: `[${L}, slide 11; ${B1}, p. 11–12]`,
      check: { status: 'verified', note: 'Slide 11: A_s = b/a (c = 0,1·h). Bok Fig. 1.5 (p. 12): a og b målt ved 10 % av h.' },
    },
  ],
}

const Sb = ({ b, s, p = '' }) => <>{b}<tspan baselineShift="sub" fontSize="72%">{s}</tspan>{p}</>
const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>

/* points of a Gaussian in SVG coords */
const gpts = (cx, sd, h, base, x0, x1, n = 60) =>
  Array.from({ length: n + 1 }, (_, i) => { const x = x0 + ((x1 - x0) * i) / n; return [x, base - h * Math.exp(-((x - cx) ** 2) / (2 * sd * sd))] })

/* Ideal vs real band broadening (2×2 panels) */
function IdeellReell() {
  const cols = ['var-e', 'var-b', 'var-c', 'var-a']
  const pos = [70, 120, 170, 220]
  const panel = (y, real) => (
    <g>
      <Label x={10} y={y + 14} anchor="start" t={real ? 'trap' : 'intuition'}>{real ? 'REALITET' : 'IDEELT'}</Label>
      {/* t = 0 */}
      <rect x={10} y={y + 24} width={150} height={44} style={{ fill: 'none', stroke: tone('muted') }} />
      <line x1={28} y1={y + 24} x2={28} y2={y + 68} style={{ stroke: tone('muted') }} />
      <circle cx={28} cy={y + 46} r={3} style={{ fill: tone('ink') }} />
      <rect x={10} y={y + 74} width={150} height={50} style={{ fill: 'none', stroke: tone('muted') }} />
      {real ? <Curve t="ink" width={2} points={gpts(28, 2.5, 40, y + 124, 16, 40, 20)} /> : <line x1={28} y1={y + 124} x2={28} y2={y + 82} style={{ stroke: tone('ink'), strokeWidth: 2.5 }} />}
      <Label x={14} y={y + 140} anchor="start" size={12}>t = 0</Label>
      {/* t = t_slutt */}
      <rect x={180} y={y + 24} width={250} height={44} style={{ fill: 'none', stroke: tone('muted') }} />
      <line x1={196} y1={y + 24} x2={196} y2={y + 68} style={{ stroke: tone('muted') }} />
      {pos.map((p, i) => real
        ? <ellipse key={i} cx={180 + p} cy={y + 46} rx={3 + i * 3} ry={3 + i * 1.5} style={{ fill: tone(cols[i]) }} />
        : <circle key={i} cx={180 + p} cy={y + 46} r={3} style={{ fill: tone(cols[i]) }} />)}
      <rect x={180} y={y + 74} width={250} height={50} style={{ fill: 'none', stroke: tone('muted') }} />
      {pos.map((p, i) => real
        ? <Curve key={i} t={cols[i]} width={2} points={gpts(180 + p, 2.5 + i * 2.5, 40 - i * 7, y + 124, 180 + p - 25, 180 + p + 25, 30)} />
        : <line key={i} x1={180 + p} y1={y + 124} x2={180 + p} y2={y + 82} style={{ stroke: tone(cols[i]), strokeWidth: 2.5 }} />)}
      <Label x={184} y={y + 140} anchor="start" size={12}><Sb b="t = t" s="slutt" p=" · TLC øverst, kromatogram nederst" /></Label>
    </g>
  )
  return (
    <Svg w={440} h={330} label="Ideell og reell båndspredning">
      {panel(0, false)}
      {panel(165, true)}
    </Svg>
  )
}

/* Gaussian with the three width measures */
function GaussBredder() {
  const cx = 220, s = 36, base = 250, H = 200
  const y = (f) => base - H * f
  const lvl = [
    { f: 0.607, half: 1, lab: <><Sb b="w" s="i" p=" = 2σ (vendepunkter)" /></>, t: 'var-b' },
    { f: 0.5, half: 1.177, lab: <><Sb b="w" s="h" p=" = 2,354σ = " /><Sb b="w" s="0,5" /></>, t: 'var-a' },
    { f: 0.134, half: 2, lab: <><Sb b="w" s="b" p=" = 4σ (tangenter)" /></>, t: 'var-c' },
  ]
  return (
    <Svg w={440} h={330} label="Gauss-topp med tre breddemål">
      <line x1={20} y1={base} x2={420} y2={base} style={{ stroke: tone('ink') }} />
      {/* tangents through inflection points to baseline (±2σ) */}
      <line x1={cx - 2 * s} y1={base} x2={cx} y2={y(1.213)} style={{ stroke: tone('muted'), strokeDasharray: '5 4' }} />
      <line x1={cx + 2 * s} y1={base} x2={cx} y2={y(1.213)} style={{ stroke: tone('muted'), strokeDasharray: '5 4' }} />
      <Curve t="topic" points={gpts(cx, s, H, base, cx - 5 * s, cx + 5 * s, 80)} />
      {lvl.map((l) => (
        <g key={l.f}>
          <line x1={cx - l.half * s} y1={y(l.f)} x2={cx + l.half * s} y2={y(l.f)} style={{ stroke: tone(l.t), strokeWidth: 2.5 }} />
          <Label x={cx - l.half * s - 6} y={y(l.f) + 5} anchor="end" size={13}>{l.f.toFixed(3).replace('.', ',')}</Label>
          <Label x={cx + l.half * s + 6} y={y(l.f) + 5} anchor="start" t={l.t} size={13}>{l.lab}</Label>
        </g>
      ))}
      {[-4, -2, 0, 2, 4].map((k) => <Label key={k} x={cx + k * s} y={base + 18} size={12}>{k}</Label>)}
      <Label x={420} y={base + 36} anchor="end" size={13}>bredde (σ)</Label>
      <Label x={20} y={base + 58} anchor="start" t="var-c" size={13}>N = 16(<Sb b="t" s="R" p="/" /><Sb b="w" s="b" p=")²" /></Label>
      <Label x={420} y={base + 58} anchor="end" t="var-a" size={13}>N = 5,54(<Sb b="t" s="R" p="/" /><Sb b="w" s="0,5" p=")²" /></Label>
    </Svg>
  )
}

/* Two peaks with Rs; overlap shaded */
function ToTopper({ rs, title, note }) {
  const base = 190, s = 18, wb = 4 * s, c1 = 110, c2 = c1 + rs * wb, H = 120
  const g = (x, c) => H * Math.exp(-((x - c) ** 2) / (2 * s * s))
  const mid = (c1 + c2) / 2
  const ov = Array.from({ length: 41 }, (_, i) => { const x = c1 + ((c2 - c1) * i) / 40; return [x, base - Math.min(g(x, c1), g(x, c2))] })
  return (
    <Svg w={300} h={270} label={title}>
      <Label x={150} y={18} t="var-e">{title}</Label>
      <line x1={10} y1={base} x2={290} y2={base} style={{ stroke: tone('ink') }} />
      <path d={`M${c1},${base} ${ov.map((p) => p.join(',')).join(' ')} L${c2},${base} Z`} style={{ fill: tone('trap'), opacity: 0.45 }} />
      <Curve t="var-b" points={gpts(c1, s, H, base, 20, 290, 60)} />
      <Curve t="var-b" points={gpts(c2, s, H, base, 20, 290, 60)} />
      <Arrow x1={c1} y1={base - H - 14} x2={c2} y2={base - H - 14} t="var-b" />
      <Label x={mid} y={base - H - 22} size={12}><Sb b="t" s="R2" p=" − " /><Sb b="t" s="R1" /></Label>
      <line x1={c1 - 2 * s} y1={base + 10} x2={c1 + 2 * s} y2={base + 10} style={{ stroke: tone('var-c'), strokeWidth: 2.5 }} />
      <line x1={c2 - 2 * s} y1={base + 18} x2={c2 + 2 * s} y2={base + 18} style={{ stroke: tone('var-c'), strokeWidth: 2.5 }} />
      <Label x={c1} y={base + 28} t="var-c" size={12}><Sb b="w" s="b1" /></Label>
      <Label x={c2} y={base + 36} t="var-c" size={12}><Sb b="w" s="b2" /></Label>
      <Label x={150} y={262} t="trap" size={13}>{note}</Label>
    </Svg>
  )
}

/* Tailing, fronting, As measurement */
function Asymmetri() {
  return (
    <Svg w={440} h={260} label="Tailing, fronting og måling av As">
      <Label x={70} y={18} t="var-a">Tailing</Label>
      <Curve t="var-a" points={[[10, 120], [40, 118], [52, 60], [62, 30], [78, 50], [100, 90], [130, 112], [150, 118]]} />
      <line x1={10} y1={120} x2={150} y2={120} style={{ stroke: tone('muted') }} />
      <Label x={230} y={18} t="var-b">Fronting</Label>
      <Curve t="var-b" points={[[170, 120], [190, 116], [220, 100], [245, 70], [260, 32], [268, 60], [276, 118], [300, 120]]} />
      <line x1={170} y1={120} x2={300} y2={120} style={{ stroke: tone('muted') }} />
      {/* measurement */}
      <g>
        <Curve t="ink" points={[[60, 240], [110, 239], [125, 200], [140, 155], [150, 160], [165, 205], [190, 232], [230, 239]]} />
        <line x1={20} y1={240} x2={240} y2={240} style={{ stroke: tone('muted') }} />
        <line x1={143} y1={154} x2={143} y2={240} style={{ stroke: tone('muted'), strokeDasharray: '4 3' }} />
        <line x1={40} y1={154} x2={40} y2={240} style={{ stroke: tone('ink') }} />
        <Label x={32} y={200} anchor="end" size={13}>h</Label>
        <line x1={110} y1={231} x2={200} y2={231} style={{ stroke: tone('trap'), strokeWidth: 2 }} />
        <Label x={126} y={226} t="trap" size={13}>a</Label>
        <Label x={168} y={226} t="trap" size={13}>b</Label>
        <Label x={250} y={200} anchor="start" size={14}><Sb b="A" s="s" p=" = b / a" /></Label>
        <Label x={250} y={222} anchor="start" size={13}>målt ved c = 0,1·h</Label>
      </g>
    </Svg>
  )
}

const purnell = (p, k) => 0.25 * (p.alpha - 1) * Math.sqrt(p.N) * (k / (1 + k))
const peak = (x, c) => Math.exp(-((x - c) ** 2) / (2 * 0.25 * 0.25))

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Smale topper, god avstand">
        <MentalModel cite={`[${L}, slide 7–8, 10–11; ${B1}, p. 5–6, 11–13]`}>
          I et ideelt system ville prøven kommet ut som like smale streker som da den ble injisert, men i virkeligheten sprer båndet seg på veien gjennom kolonnen. Båndspredning er uunngåelig, og lite båndspredning betyr et effektivt system.{' '}
          Prøven får en normalfordeling (Gauss-kurve) med midtpunkt i <T text="$t_R$." /> <V c="a">Platetallet N</V> sier hvor smal toppen er i forhold til hvor langt den har vandret, og <V c="d">platehøyden H</V> <T text="$= L/N$" /> uttrykker det samme per kolonnelengde.{' '}
          <V c="e">Oppløsningen Rs</V> kombinerer avstand og bredde: avstanden mellom toppene delt på gjennomsnittlig toppbredde. Purnell-ligningen viser at <T text="$R_s$" /> kan forbedres på tre uavhengige måter: bedre selektivitet (<V c="f">α</V>), flere plater (<V c="a">N</V>) eller mer retensjon (k).
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="Båndspredning" cite={`[${L}, slide 7; ${B1}, p. 5]`}>At båndet blir bredere fra injeksjon til deteksjon. Den er uunngåelig, og må kvantifiseres for å vurdere hvor effektivt systemet er. Kildene behandles på side 03.</Def>
            <Def term="Gauss-topp" cite={`[${L}, slide 7; ${B1}, p. 5–6]`}>{'Toppen antas å være normalfordelt med midtpunkt i $t_R$ og standardavvik $\\sigma$.'}</Def>
            <Def term="Platetall / kolonneeffektivitet ($N$)" cite={`[${B1}, p. 5, 9; ${L}, slide 8]`}>{'Mål på båndspredningen, $N = (t_R/\\sigma)^2$.'}</Def>
          </div>
          <Diagram title="Ideell vs. reell båndspredning" caption="Båndspredning er uunngåelig. Lite båndspredning = effektivt system. I realiteten blir prikkene og toppene bredere og lavere jo senere de eluerer." cite={`[${L}, slide 7]`}>
            <IdeellReell />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Toppbredder på en Gauss-kurve" cite={`[${L}, slide 8; ${B1}, p. 9–10]`}>{'Ved vendepunktene (0,607 h) er bredden $w_i = 2\\sigma$. Ved halv høyde (0,500 h) er $w_h = w_{0,5} = 2{,}354\\sigma$. Ved basis, mellom tangentene (0,134 h), er $w_b = 4\\sigma$.'}</Def>
            <Def term="Halvhøydebredde ($w_{0,5}$ eller $w_h$)" cite={`[${LF25}, oppg. 3; ${B1}, p. 9]`}>Bredden av en topp målt ved halv maksimal høyde, brukt i beregning av effektivitet og oppløsning. Er ikke representativ for den reelle bredden hvis toppen haler. Alternativet er basisbredden mellom tangentene.</Def>
          </div>
          <Diagram title="Gauss-topp med tre breddemål" caption="Stiplede tangenter gjennom vendepunktene treffer basislinjen ved ±2σ." cite={`[${L}, slide 8; ${B1}, p. 10, Fig. 1.4]`}>
            <GaussBredder />
          </Diagram>
        </Columns>

        <Def term="Typiske platetall" cite={`[${L}, slide 9]`}>GC 10⁴–10⁶ (kapillærkolonner, ca. 25 m). HPLC 0,5–5·10⁴ (15–25 cm, partikkelstørrelse 3–5 µm).</Def>
        <Def term="Måling av N krever konstante betingelser" cite={`[${L}, slide 9; ${B1}, p. 10]`}>{'$N$ er konstant bare for konstante systemer (isokratisk/isoterm). I LC må effektivitet alltid måles isokratisk, ved konstant temperatur og med prøven løst i mobilfasen. Gradienteluering kan aldri brukes til å måle platetall.'}</Def>
        <Def term="Platehøyde / HETP ($H$)" cite={`[${L}, slide 10; ${B1}, p. 6, 10–11; ${LF25}, oppg. 3]`}>{'«Høyden» av en teoretisk plate i en litt kolonne, $H = L/N$ (Height Equivalent to a Theoretical Plate). Et mål på kolonneeffektivitet: lav HETP gir høy effektivitet.'}</Def>
        <Def term="Typiske platehøyder" cite={`[${B1}, p. 11]`}>Godt pakkede HPLC-kolonner 5–10 µm, kapillær-GC 0,2–0,25 mm.</Def>
        <Def term="Lengre kolonne" cite={`[${B1}, p. 10, 13]`}>{'Gir høyere platetall, siden $N = L/H$. Oppløsningen øker likevel bare med $\\sqrt{N}$, så dobbelt så mange plater gir bare $\\sqrt{2}$ ganger bedre oppløsning.'}</Def>

        <Def term="Oppløsning ($R_s$)" cite={`[${B1}, p. 11–12; ${L}, slide 10]`}>Forskjellen mellom bånd-sentrene delt på gjennomsnittlig båndbredde, målt i samme enheter.</Def>
        <Def term="Overlapp ved ulik $R_s$" cite={`[${L}, slide 11; ${B1}, p. 12]`}>{'Forelesningen oppgir $R_s = 1{,}0$ → 2,3 % overlapp, og $R_s = 1{,}5$ → 0,15 % overlapp, som er grensen for baselinjeseparasjon. Boka oppgir ca. 2 % overlapp ved $R_s = 1$ for perfekte Gauss-topper.'}</Def>
        <Avvik><T text="$R_s = 1$: overlapp 2,3 % vs. 2 %" /> — forelesningen (slide 11) sier 2,3 %, boka (p. 12) sier ca. 2 %.</Avvik>
        <Diagram title="To topper med oppløsning $R_s$" caption="Overlappsområdet er skyggelagt. Pilene viser $t_{R2} - t_{R1}$; strekene under viser basisbreddene $w_{b1}$ og $w_{b2}$ (mellom tangentene)." cite={`[${L}, slide 10–11; ${B1}, p. 12, Fig. 1.6]`}>
          <Columns>
            <ToTopper rs={1.0} title="Rs = 1,0" note="2,3 % overlapp (forelesning)" />
            <ToTopper rs={1.5} title="Rs = 1,5" note="0,15 % overlapp, baselinjeseparasjon" />
          </Columns>
        </Diagram>

        <Columns>
          <Def term="Asymmetri ($A_s$)" cite={`[${B1}, p. 11–12; ${L}, slide 11]`}>{'De fleste topper er ikke perfekt Gauss-formet. Noen haler (tailing), andre fronter (fronting). Asymmetrifaktoren måles ved 10 % av topphøyden, og gode kolonner skal ha $A_s$ så nær 1 som mulig.'}</Def>
          <Diagram title="Tailing, fronting og måling av $A_s$" cite={`[${L}, slide 11; ${B1}, p. 12, Fig. 1.5]`}>
            <Asymmetri />
          </Diagram>
        </Columns>
        <Def term="Isokratisk/isoterm vs. gradient/temperaturprogram" cite={`[${L}, slide 12; ${B1}, p. 3]`}>Ved konstante betingelser kan det være vanskelig å få både god separasjon <em>og</em> kort analyse. I GC-eksempelet: høy isoterm temperatur gir 15 min, men topp 1 og 2 overlapper. Lav isoterm temperatur gir god separasjon, men tar 60 min og gir brede sene topper. Temperaturprogram (lav → høy T) gir god separasjon på 20 min. Ved isokratisk eluering øker toppbredden med elueringstiden.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="N-def" />
        <Eq id="N-wb" />
        <Eq id="N-wh" />
        <Eq id="H" />
        <Eq id="Rs" />
        <Eq id="purnell" />
        <Plot
          title="Purnell: to topper som skilles eller smelter sammen"
          caption="Topp 1 ligger fast ved 10 min med $w_b = 1$ min; topp 2 ligger $R_s \cdot w_b$ lenger ut, med $R_s$ fra Purnell-ligningen. Stiplet linje: der topp 2 står ved $R_s = 1{,}5$. Startverdier fra H24 oppg. 1(i): $\alpha = 1{,}63$, $N = 1645$, $k = 3{,}33$. Ligningen gjelder for to nært eluerende forbindelser, så den gir ikke nøyaktig samme tall som den direkte målingen i eksempelet (3,67)."
          cite={`[${LF24}, p. 8; ${B1}, p. 13]`}
          x={{ min: 8, max: 18, label: 'tid (min)' }}
          y={{ label: 'signal', min: 0, max: 1.2 }}
          params={[
            { key: 'alpha', label: '$\\alpha$', min: 1, max: 2, step: 0.01, value: 1.63 },
            { key: 'N', label: '$N$', min: 100, max: 20000, step: 5, value: 1645 },
            { key: 'k', label: '$k$', min: 0.5, max: 15, step: 0.01, value: 3.33 },
          ]}
          series={[
            { key: 'p1', label: 'topp 1', t: 'var-b', fn: (x) => peak(x, 10) },
            { key: 'p2', label: 'topp 2', t: 'var-e', fn: (x, p) => peak(x, 10 + purnell(p, p.k)) },
          ]}
          marks={[{ x: 11.5, label: 'Rs=1,5' }]}
        />
        <Plot
          title="$R_s$ mot $k$: $\alpha$ har størst effekt, $N$ virker som $\sqrt{N}$, $k/(1+k)$ flater ut"
          caption="Samme ligning, med $R_s$ på y-aksen. Hold musen over kurven for å lese av $R_s$. Stiplet linje: $R_s = 1{,}5$."
          cite={`[${B1}, p. 13, lign. 1.11; ${L}, slide 11]`}
          x={{ min: 0.5, max: 15, label: 'k' }}
          y={{ label: 'Rs', min: 0 }}
          params={[
            { key: 'alpha', label: '$\\alpha$', min: 1, max: 2, step: 0.01, value: 1.63 },
            { key: 'N', label: '$N$', min: 100, max: 20000, step: 5, value: 1645 },
          ]}
          series={[{ key: 'rs', label: 'Rs', t: 'var-e', fn: (k, p) => purnell(p, k) }]}
          marks={[{ y: 1.5, label: 'Rs = 1,5' }, { x: 3.33, label: 'k = 3,33' }]}
        />
        <Eq id="As" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 1(i), del 2: $R_s$, $N$ og $H$"
          given="Samme kromatogram som på side 01. Pseudoephedrine har $t_{R1}$ = 1,521 min og brompheniramine $t_{R2}$ = 2,164 min. Kolonnelengden er 25 cm."
          steps={[
            { title: 'Estimer basisbreddene fra figuren:', body: '$w_{b1} = 0{,}15$ min og $w_{b2} = 0{,}2$ min.' },
            { title: 'Oppløsning:', body: String.raw`$R_s = \dfrac{2(2{,}164 - 1{,}521)}{0{,}15 + 0{,}2} = \dfrac{2(0{,}643)}{0{,}35} = \dfrac{1{,}286}{0{,}35} \approx 3{,}67$` },
            { title: 'Tolk:', body: `$3{,}67 > 1{,}5$, så toppene er baselinjeseparert [${L}, slide 11].` },
            { title: 'Platetall for topp 1 (basisbredde):', body: String.raw`$N_1 = 16\left(\dfrac{1{,}521}{0{,}15}\right)^2 = 16 \times (10{,}14)^2 = 16 \times 102{,}82 \approx 1645$` },
            { title: 'Platetall for topp 2:', body: String.raw`$N_2 = 16\left(\dfrac{2{,}164}{0{,}2}\right)^2 = 16 \times (10{,}82)^2 = 16 \times 117{,}08 \approx 1873$` },
            { title: 'Sjekk:', body: 'Løsningsforslaget kommenterer at $N_1$ og $N_2$ burde vært omtrent like, siden det er samme kolonne og samme betingelser. Forskjellen skyldes unøyaktig avlesning av bredder.' },
            { title: 'Platehøyde:', body: String.raw`$H_1 = \dfrac{25}{1645} \approx 0{,}0152$ cm og $H_2 = \dfrac{25}{1873} \approx 0{,}0133$ cm.` },
            { title: 'Sammenlign med boka:', body: `0,0152 cm = 152 µm, mye høyere enn de 5–10 µm som gode pakkede HPLC-kolonner skal ha [${B1}, p. 11]. Breddene er grovt avlest fra en liten figur.` },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(i); ${LF24}, p. 8–9]`}
        />
        <FadedExample
          title="Laktose-topp og platehøyde (forelesningseksempler)"
          given="Del A: Laktose (47,9 g/L) eluerer ved $t_R$ = 2,76 min. Halvhøydebredden er avlest til $w_{0,5} \approx 0{,}17$ min. Del B: En HPLC-kolonne på 10 cm har 2500 plater."
          steps={[
            { title: 'Velg formel:', body: 'siden bredden er målt ved halv høyde, bruk $N = 5{,}54\\,(t_R/w_{0,5})^2$.' },
            { title: 'Sett inn:', body: String.raw`$N = 5{,}54\left(\dfrac{2{,}76}{0{,}17}\right)^2$` },
            { title: 'Regn ut $N$.', body: 'ca. 1460', hidden: true },
            { title: 'Ligger dette innenfor typisk HPLC-område (0,5–5·10⁴)?', body: 'Nei, det er lavt [slide 9].', hidden: true },
            { title: 'Del B: regn platehøyden $H = L/N$.', body: '$H = 10\\text{ cm}/2500 = 0{,}004$ cm (= 40 µm) [slide 10]', hidden: true },
          ]}
          cite={`[${L}, slide 9–10]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Feil breddefaktor" cite={`[${L}, slide 8; ${B1}, p. 9]`}>{'16 hører til basisbredde ($w_b = 4\\sigma$), 5,54 til halvhøydebredde ($w_{0,5} = 2{,}354\\sigma$). Blander du dem, blir $N$ feil med nesten faktor 3.'}</Trap>
        <Trap title="Ulike enheter for $t_R$ og $w$" cite={`[${B1}, p. 10]`}>Begge må være i samme tidsenhet.</Trap>
        <Trap title="$R_s$-formelen uten faktor 2 / 0,5" cite={`[${B1}, p. 11–12; ${L}, slide 10]`}><T text="$R_s = (t_{R2}-t_{R1})/(w_1+w_2)$ blir halvparten for liten. Husk at nevneren er " /><em>gjennomsnittlig</em> bredde.</Trap>
        <Trap title="Høy $H$ = god kolonne" cite={`[${LF25}, oppg. 3]`}>Feil. Lav HETP gir høy effektivitet.</Trap>
        <Trap title="Dobbel kolonnelengde → dobbel oppløsning" cite={`[${B1}, p. 13]`}>{'Feil. $R_s \\propto \\sqrt{N}$, så dobbel lengde gir bare $\\sqrt{2}$ ganger bedre oppløsning.'}</Trap>
        <Trap title="Platetall fra gradientkjøring" cite={`[${B1}, p. 10; ${L}, slide 9]`}>{'$N$ kan aldri måles med gradienteluering.'}</Trap>
        <Trap title="Ulik $N$ for topper på samme kolonne" cite={`[${LF24}, p. 8]`}>{'Er avlesningen god, skal $N$ være omtrent lik for toppene. Store forskjeller tyder på avlesningsfeil.'}</Trap>
        <Trap title="«Forbedre oppløsning» besvart bare med «lengre kolonne»" cite={`[${LF24}, p. 5]`}>H24 1(e) forventer flere parametere: mobilfasesammensetning (polaritet, pH, modifikatorer), strømningshastighet, kolonnetemperatur, stasjonærfase (partikkelstørrelse, porestørrelse, kjemi) og kolonnelengde/diameter.</Trap>
        <Trap title="Halvhøydebredde ved tailing" cite={`[${B1}, p. 9]`}>Gir ikke en god representasjon av den reelle toppbredden.</Trap>
      </Section>
    </>
  )
}
