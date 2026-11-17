import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const A = 'Forelesning ads.krom m notater 3.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const REL = String.raw`\text{relativ}`

export const meta = {
  title: 'Adsorpsjonskromatografi og normalfase',
  topic: 'lc-separasjon',
  examWeight: {
    level: 'medium',
    note: 'H24 1(b) flervalg (MF-polaritet i NP, hva påvirker adsorpsjonsstyrke), H24 1(h) 6 p (NP vs. RP, delt med side 08). H25 oppg. 2 bare indirekte',
  },
  examTasks: [
    'H2024: 1-serien NP/RP/IEX/SEC (index: side 07–10)',
    'H2025: oppg. 5–7 (index: side 07–10)',
    'H2024 oppg. 1(b) (flervalg, 2 av 5 delspørsmål): effekten av mobilfasens polaritet i normalfase-adsorpsjonskromatografi, og hva som påvirker styrken av adsorpsjonen.',
    'H2024 oppg. 1(h) (6 p, delt med side 08): forskjellene på normalfase og omvendt fase HPLC, med eksempler på faser. Løsningsforslaget: NP har polar SF (f.eks. silika) som interagerer med polare analytter via hydrogenbindinger og dipol–dipol-interaksjoner [LF eksamen H2024 IMAK2008.pdf, p. 6].',
  ],
  buildsOn: ['01-retensjon-og-selektivitet', '05-kolonner-og-partikler'],
  usedIn: ['08-omvendt-fase-og-ionepar', '12-gc-kolonner-og-stasjonaerfaser'],
  sources: [
    `[${A}, slide 1–8, 11–12] (mest annoterte versjon. \`Forelesning ads.krom m notater.pdf\` og \`u notater 2\` er samme forelesning)`,
    `[${B1}, p. 64–68] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Pensum.pdf, p. 1]',
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(b), 1(h)] / [${LF24}, p. 2, 6]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'I normalfase-HPLC på silika: hvilken analytt eluerer sist, den mest polare eller den minst polare?', a: `Den mest polare får høyest retensjon [${A}, slide 3].` },
    { id: 'p2', kind: 'pretest', q: 'Hva skjer med retensjonen i NP hvis du tilsetter mer metanol til en heksan-mobilfase?', a: `Den synker. Metanol er en sterk eluent (høy ε°) som konkurrerer om adsorpsjonssetene [${A}, slide 6; ${B1}, p. 65–66].` },
    { id: 'p3', kind: 'pretest', q: 'Hva er forskjellen på absorpsjon og adsorpsjon?', a: `Ved adsorpsjon bindes analytten til **overflaten** av stasjonærfasen. Ved absorpsjon tas den opp **i** fasen [${A}, slide 1].` },
    { id: 't1', q: 'Ranger etter økende retensjon på silika (NP): ester, mettet hydrokarbon, alkohol, eter.', a: `Mettet hydrokarbon < eter < ester < alkohol [${A}, slide 3].` },
    { id: 't2', q: 'Hvilke to egenskaper i retensjonsligningen beskriver analytten, og hvilken beskriver MF?', a: `Analytten: $S^\\circ$ (adsorpsjonsenergi) og $A_s$ (molekylareal). MF: $\\varepsilon^\\circ$ (eluentstyrke) [${A}, slide 5].` },
    { id: 't3', q: 'Hvorfor kan man ikke bruke aceton i NP-HPLC med UV-deteksjon?', a: `Aceton har høy UV-cutoff (330 nm) [${B1}, p. 65–66].` },
    { id: 't4', q: 'Hva er fordelen med alumina fremfor silika?', a: `pH kan justeres til sur, basisk eller nøytral, og alumina er stabil i basisk miljø, mens silika brytes ned ved pH > 8 [${A}, slide 4].` },
    { id: 't5', q: 'Hvorfor kalles det «normalfase»?', a: `Fordi den ble utviklet først og ble kalt «normal». RP ble kalt «omvendt» fordi elueringsrekkefølgen er omtrent omvendt [${A}, slide 3; ${B1}, p. 68].` },
  ],
  equations: [
    {
      id: 'likevekt', label: 'Adsorpsjonslikevekt og fordelingskoeffisient',
      tex: String.raw`\begin{gathered}X_n + m\,E_a \rightleftharpoons X_a + m\,E_n \\ \va{K} = \frac{[X_a]}{[X_n]}\end{gathered}`,
      vars: [
        { sym: 'X_n,\\ X_a', desc: 'ikke-adsorbert og adsorbert analytt', unit: String.raw`\mathrm{mol/L}` },
        { sym: 'E_a,\\ E_n', desc: 'adsorberte og ikke-adsorberte MF-molekyler', unit: '–' },
        { sym: 'm', desc: 'antall MF-molekyler som fortrenges', unit: '–' },
        { sym: String.raw`\va{K}`, desc: 'fordelingskoeffisient', unit: String.raw`\text{dimensjonsløs}` },
      ],
      note: '$K$ konstant gir lineær isoterm og ideell, symmetrisk topp.',
      cite: `[${A}, slide 1]`,
      check: { status: 'verified', note: 'Slide 1: X_n + m·E_a ⇌ X_a + m·E_n og K = [X_a]/[X_n], identisk.' },
    },
    {
      id: 'snyder', label: 'Retensjon i normalfase (Snyder)',
      tex: String.raw`\log \va{K} = \log \vf{V_a} + \ve{\alpha}\,(\vd{S^\circ} - \vc{A_s}\,\vb{\varepsilon^\circ})`,
      vars: [
        { sym: String.raw`\vf{V_a}`, desc: 'adsorbentens overflatevolum (monomolekylært lag av eluent)', unit: String.raw`\mathrm{mL/g}` },
        { sym: String.raw`\ve{\alpha}`, desc: 'adsorbentaktivitet (styrken til adsorpsjonsmiddelet)', unit: '–' },
        { sym: String.raw`\vd{S^\circ}`, desc: 'analyttens adsorpsjonsenergi fra pentan, $\\sum Q_i$', unit: REL },
        { sym: String.raw`\vc{A_s}`, desc: 'arealet analytten trenger på SF', unit: REL },
        { sym: String.raw`\vb{\varepsilon^\circ}`, desc: 'eluentstyrke til MF', unit: REL },
      ],
      note: 'Stor $\\varepsilon^\\circ$ gir liten $K$. I forelesningen noteres $k = [X_n]/[X_a]$ ved siden av ligningen.',
      cite: `[${A}, slide 5; ${B1}, p. 64–65, lign. 3.4]`,
      check: { status: 'verified', note: 'Slide 5 og bok lign. 3.4 (p. 64, PDF s. 80) identiske.' },
    },
    {
      id: 'S', label: 'Adsorpsjonsenergi for analytten',
      tex: String.raw`\vd{S^\circ} = \sum Q_i`,
      vars: [{ sym: 'Q_i', desc: 'adsorpsjonsenergi for funksjonell gruppe $i$ (tabell)', unit: REL }],
      cite: `[${A}, slide 7; ${B1}, p. 65]`,
      check: { status: 'verified', note: 'Bok p. 65 (PDF s. 81): «S° is ΣQ_i». Slide 5: summen av adsorpsjonsenergiene (Q_i).' },
    },
    {
      id: 'binar', label: 'Eluentstyrke for binær blanding',
      tex: String.raw`\begin{gathered}\vb{\varepsilon^\circ_{AB}} = \vb{\varepsilon^\circ_A} + \frac{\log\left(x_B\,10^{\ve{\alpha} n_B(\varepsilon^\circ_B - \varepsilon^\circ_A)} + 1 - x_B\right)}{\ve{\alpha}\, n_B} \\ (\varepsilon^\circ_B > \varepsilon^\circ_A)\end{gathered}`,
      vars: [
        { sym: String.raw`\vb{\varepsilon^\circ_{AB}}`, desc: 'eluentstyrke til blandingen', unit: REL },
        { sym: String.raw`\varepsilon^\circ_A,\ \varepsilon^\circ_B`, desc: 'eluentstyrke til svak (A) og sterk (B) komponent', unit: REL },
        { sym: 'x_B', desc: 'molfraksjon av B', unit: '–' },
        { sym: 'n_B', desc: 'arealet B-molekylet tar på overflaten', unit: REL },
        { sym: String.raw`\ve{\alpha}`, desc: 'adsorbentaktivitet', unit: '–' },
      ],
      note: 'I praksis brukes tabellen eller nomogrammet («Bruk tabellen!»).',
      cite: `[${A}, slide 11–12]`,
      check: { status: 'verified', note: 'Slide 11 identisk (med betingelsen ε°_B > ε°_A).' },
    },
  ],
}

const Sb = ({ b, s, p = '' }) => <>{b}<tspan baselineShift="sub" fontSize="72%">{s}</tspan>{p}</>

/* Competition for adsorption sites */
function Konkurranse() {
  const surf = 'M 40 40 Q 70 70 50 100 Q 90 120 60 150 Q 95 175 55 200 Q 90 225 50 260 L 20 260 L 20 40 Z'
  const mf = [[80, 60], [100, 95], [85, 135], [110, 160], [90, 195], [100, 235], [150, 70], [170, 130], [160, 200], [200, 100], [210, 170], [190, 240]]
  const an = [[72, 112], [74, 178], [240, 130], [250, 210]]
  return (
    <Svg w={460} h={290} label="Adsorpsjon som konkurranse om setene">
      <path d={surf} style={{ fill: `color-mix(in srgb, ${tone('definition')} 30%, var(--bg))`, stroke: tone('definition') }} />
      <Label x={24} y={280} anchor="start" size={12} t="definition">SF-overflate</Label>
      {mf.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6} style={{ fill: tone('intuition') }} />)}
      {an.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={8} style={{ fill: tone('muted'), stroke: tone('ink') }} />)}
      <circle cx={300} cy={40} r={6} style={{ fill: tone('intuition') }} />
      <Label x={312} y={44} anchor="start" size={12}>MF-molekyl (E)</Label>
      <circle cx={300} cy={64} r={8} style={{ fill: tone('muted'), stroke: tone('ink') }} />
      <Label x={312} y={68} anchor="start" size={12}>analytt (X)</Label>
      <Label x={330} y={130} size={14}><Sb b="X" s="n" p=" + m" /><Sb b="E" s="a" p=" ⇌ " /><Sb b="X" s="a" p=" + m" /><Sb b="E" s="n" /></Label>
      <Arrow x1={400} y1={160} x2={260} y2={160} t="var-b" />
      <Label x={330} y={182} t="var-b" size={12}>sterkere eluent (høy ε°)</Label>
      <Label x={330} y={230} size={12}>én adsorbert analytt</Label>
      <Label x={330} y={246} size={12}>fortrenger m MF-molekyler</Label>
    </Svg>
  )
}

/* Linear vs non-linear isotherm, 2 x 4 panels */
function Isotermer() {
  const W = 100, H = 80
  const panel = (col, row, title, draw) => {
    const x = 20 + col * 110, y = 34 + row * 130
    return (
      <g key={`${col}-${row}`}>
        <line x1={x} y1={y + H} x2={x + W} y2={y + H} style={{ stroke: tone('ink') }} />
        <line x1={x} y1={y + H} x2={x} y2={y} style={{ stroke: tone('ink') }} />
        {draw(x, y)}
        <Label x={x + W / 2} y={y + H + 16} size={11}>{title}</Label>
      </g>
    )
  }
  const rows = [
    { name: 'Lineær', t: 'intuition', iso: (x, y) => <line x1={x} y1={y + H} x2={x + W - 5} y2={y + 5} style={{ stroke: tone('intuition'), strokeWidth: 2.5 }} />,
      peak: (x, y) => <Curve t="intuition" points={[[x + 10, y + H], [x + 35, y + H - 3], [x + 50, y + 15], [x + 65, y + H - 3], [x + 90, y + H]]} />,
      rf: (x, y) => <line x1={x + 5} y1={y + 40} x2={x + W - 5} y2={y + 40} style={{ stroke: tone('intuition'), strokeWidth: 2.5 }} />,
      tr: (x, y) => <line x1={x + 5} y1={y + 40} x2={x + W - 5} y2={y + 40} style={{ stroke: tone('intuition'), strokeWidth: 2.5 }} /> },
    { name: 'Ikke-lineær', t: 'trap', iso: (x, y) => <Curve t="trap" points={[[x, y + H], [x + 25, y + 30], [x + 55, y + 15], [x + 95, y + 10]]} />,
      peak: (x, y) => <Curve t="trap" points={[[x + 10, y + H], [x + 28, y + 30], [x + 34, y + 15], [x + 50, y + 55], [x + 70, y + 72], [x + 95, y + H]]} />,
      rf: (x, y) => <line x1={x + 5} y1={y + 65} x2={x + W - 5} y2={y + 20} style={{ stroke: tone('trap'), strokeWidth: 2.5 }} />,
      tr: (x, y) => <line x1={x + 5} y1={y + 20} x2={x + W - 5} y2={y + 65} style={{ stroke: tone('trap'), strokeWidth: 2.5 }} /> },
  ]
  return (
    <Svg w={460} h={300} label="Lineær og ikke-lineær isoterm">
      {rows.map((r, row) => (
        <g key={r.name}>
          <Label x={20} y={26 + row * 130} anchor="start" t={r.t} size={13}>{r.name}</Label>
          {panel(0, row, '[Xa] mot [Xn]', r.iso)}
          {panel(1, row, 'elueringsprofil', r.peak)}
          {panel(2, row, 'Rf mot mengde', r.rf)}
          {panel(3, row, 'tR mot mengde', r.tr)}
        </g>
      ))}
    </Svg>
  )
}

const Tx = ({ x, y, children, t = 'ink', s = 13 }) => <Label x={x} y={y} t={t} size={s}>{children}</Label>

/* Silica and alumina surface */
function Overflate() {
  return (
    <Svg w={460} h={330} label="Silika- og aluminaoverflaten">
      <Label x={10} y={20} anchor="start" size={13}>Silika</Label>
      <line x1={20} y1={110} x2={440} y2={110} style={{ stroke: tone('muted'), strokeWidth: 2 }} />
      {[60, 150, 250, 350].map((x) => <Tx key={x} x={x} y={130}>Si</Tx>)}
      <Tx x={60} y={70} t="var-a">OH</Tx><line x1={60} y1={76} x2={60} y2={112} style={{ stroke: tone('ink') }} />
      <Tx x={60} y={50} t="var-a" s={12}>a: reaktiv</Tx>
      <Tx x={140} y={70} t="var-e">OH</Tx><Tx x={170} y={70} t="var-e">HO</Tx>
      <Tx x={155} y={50} t="var-e" s={12}>b: bundet</Tx>
      <Tx x={250} y={70} t="var-c">OH</Tx><line x1={250} y1={76} x2={250} y2={112} style={{ stroke: tone('ink') }} />
      <Tx x={250} y={50} t="var-c" s={12}>c: «fri»</Tx>
      <Tx x={350} y={70}>O</Tx>
      <Tx x={350} y={50} s={12}>d: siloksan</Tx>
      <Label x={10} y={176} anchor="start" size={12}>Derivatisering: Si–OH + Cl–Si(CH₃)₂–R → Si–O–Si(CH₃)₂–R + HCl</Label>
      <Label x={10} y={196} anchor="start" size={12}>R = cyanopropyl («nitril»), diol eller amino</Label>
      <Label x={10} y={236} anchor="start" size={13}>Alumina</Label>
      <Label x={10} y={262} anchor="start" size={13}>–Al–O–Al–O–Al–  med –OH og –O⁻</Label>
      <Label x={10} y={288} anchor="start" size={12} t="var-b">Sur: –Al–OH</Label>
      <Label x={130} y={288} anchor="start" size={12}>Nøytral: –Al–OH + –Al–O⁻</Label>
      <Label x={330} y={288} anchor="start" size={12} t="var-c">Basisk: –Al–O⁻</Label>
    </Svg>
  )
}

/* NP vs RP elution order */
function NPRP() {
  const cols = ['var-a', 'var-c', 'var-e', 'var-b']
  const names = ['upolar', '', '', 'polar']
  const row = (y, order, title) => (
    <g>
      <Label x={10} y={y - 60} anchor="start" size={13}>{title}</Label>
      <line x1={20} y1={y} x2={440} y2={y} style={{ stroke: tone('muted') }} />
      {order.map((ci, i) => {
        const cx = 80 + i * 95
        return <Curve key={i} t={cols[ci]} points={[[cx - 18, y], [cx - 6, y - 10], [cx, y - 46], [cx + 6, y - 10], [cx + 18, y]]} />
      })}
      {order.map((ci, i) => names[ci] && <Label key={`l${i}`} x={80 + i * 95} y={y + 18} t={cols[ci]} size={12}>{names[ci]}</Label>)}
    </g>
  )
  return (
    <Svg w={460} h={250} label="NP og RP: elueringsrekkefølge">
      {row(100, [0, 1, 2, 3], 'NP-LC: upolar først, polar sist')}
      {row(220, [3, 2, 1, 0], 'RP-LC: samme fire topper, omvendt rekkefølge')}
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Konkurranse om setene">
        <MentalModel cite={`[${A}, slide 1, 3, 5–6; ${B1}, p. 64–65]`}>
          I adsorpsjonskromatografi holdes analytten igjen fordi den binder seg reversibelt til spesifikke bindingsseter på overflaten av stasjonærfasen. Setene er aldri tomme: de er dekket av mobilfasemolekyler, så analytten må <em>fortrenge</em> MF-molekyler for å adsorbere. Retensjon er derfor en konkurranse mellom analytt og MF om setene.{' '}
          I normalfase er SF polar (silika, alumina) og MF upolar, så polare grupper på analytten binder sterkt, og jo mer polar MF du bruker, jo bedre konkurrerer den og jo raskere eluerer analytten.{' '}
          Ligningen <T text="$\log K = \log V_a + \alpha(S^\circ - A_s\varepsilon^\circ)$" /> sier det samme kvantitativt: analyttens <V c="d">adsorpsjonsenergi S°</V> trekker retensjonen opp, og <V c="b">eluentstyrken ε°</V> ganget med analyttens <V c="c">areal</V> <T text="$A_s$" /> trekker den ned.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="Adsorpsjonskromatografi" cite={`[${A}, slide 1]`}>Retensjon basert på interaksjon mellom analytt og spesifikke bindingsseter på overflaten av SF. Prosessen er reversibel, og det er konkurranse mellom MF og analytt om setene på SF.</Def>
            <Def term="Adsorpsjonslikevekten" cite={`[${A}, slide 1]`}>{'$X_n + m\\,E_a \\rightleftharpoons X_a + m\\,E_n$. $X_n$ er ikke-adsorbert analytt, $X_a$ adsorbert analytt, $E_a$ adsorberte MF-molekyler og $E_n$ ikke-adsorberte MF-molekyler.'}</Def>
            <Def term="Fordelingskoeffisient i adsorpsjon" cite={`[${A}, slide 1; ${B1}, p. 64]`}>{'$K = [X_a]/[X_n]$. Beskriver fordelingen av analytt mellom SF og MF.'}</Def>
          </div>
          <Diagram title="Adsorpsjon som konkurranse om setene" cite={`[${A}, slide 1–2]`}>
            <Konkurranse />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Lineær adsorpsjonsisoterm" cite={`[${A}, slide 1–2]`}>{'$K$ konstant gir lineær isoterm. Det er ideelt: symmetrisk topp og konstant $R_f$ / $t_R$ uansett prøvemengde.'}</Def>
            <Def term="Ikke-lineær isoterm" cite={`[${A}, slide 3]`}>{'Kurven flater ut ved høy konsentrasjon (setene mettes). Det gir asymmetrisk (hale-) topp, $R_f$ som øker med påsatt mengde og $t_R$ som synker med injisert mengde. Husk: stor $R_f$ = lite retensjon, men stor $t_R$ ($V_r$) = mye retensjon.'}</Def>
          </div>
          <Diagram title="Lineær vs. ikke-lineær isoterm" caption="Husk! Stor $R_f$ = lite retensjon, men stor $t_R$ ($V_r$) = mye retensjon." cite={`[${A}, slide 2–3]`}>
            <Isotermer />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Normalfase (NP)" cite={`[${A}, slide 3]`}>Polar SF og upolar MF. Omvendt fase (RP) er det motsatte: upolar SF og polar MF. «Normalfase» ble utviklet først og ble derfor kalt «normal», men RP-LC er vanligst i LC i dag. RP behandles på side 08.</Def>
            <Def term="NP-stasjonærfaser" cite={`[${A}, slide 3]`}>Silika, aluminiumoksid og derivatisert silika. MF er upolare organiske løsemidler (pentan, heksan osv.). De mest polare analyttene får høyest retensjon.</Def>
            <Def term="Elueringsrekkefølge på NP (minst → mest polar)" cite={`[${A}, slide 3; ${B1}, p. 65]`}>mettede hydrokarboner &lt; aromatiske hydrokarboner &lt; etere &lt; estere &lt; aldehyder/ketoner &lt; alkoholer &lt; karboksylsyrer. Analytter med polare grupper (OH, NH, SH, CO, NO, SO osv.) holdes sterkere igjen enn analytter uten.</Def>
          </div>
          <Diagram title="NP vs. RP: elueringsrekkefølge" caption="Felles farge per analytt, så rekkefølgen tydelig snur. Skisse." cite={`[${A}, slide 8]`}>
            <NPRP />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Silika (silikagel)" cite={`[${A}, slide 4; ${B1}, p. 65]`}>Vanligst SF i NP-LC. Overflaten har silanolgrupper (a: reaktiv, b: bundet, c: «fri») og siloksangrupper (d). Vann brukes til å modifisere silika ved å binde opp, eller «fjerne», frie silanolgrupper. Lages ved sol-gel-prosesser til sfæriske porøse kuler. Porer 6–30 nm. Stiv og ikke-kompressibel.</Def>
            <Def term="Silika: syre og typer" cite={`[${B1}, p. 65, Info-box 3.7]`}>Silanolene har pKa fra 6 til under 3. Silika er sur og gir ekstra sterk retensjon av aminer. Type A har lavere silanolkonsentrasjon. Type B er fullt hydroksylert og har mindre metallurenheter.</Def>
          </div>
          <Diagram title="Silika- og aluminaoverflaten" cite={`[${A}, slide 4–5]`}>
            <Overflate />
          </Diagram>
        </Columns>
        <Def term="Silika: mobilfase" cite={`[${B1}, p. 65]`}>Typisk MF er heksan blandet med et mer polart løsemiddel (diklormetan, etylacetat), ofte med 0,1–0,5 % metanol eller acetonitril. Aceton kan ikke brukes med UV pga. høy UV-cutoff. Alkoholer, vann og acetonitril binder til silanolene og deaktiverer silika, noe som forhindrer sterk tailing. Fordi polare molekyler bindes, kan silika ikke brukes med gradient: re-ekvilibrering tar for lang tid. God SF for separasjon av posisjonsisomerer.</Def>
        <Def term="Aluminiumoksid (alumina)" cite={`[${A}, slide 4; ${B1}, p. 65–66]`}>Veldig like egenskaper som silika. Separerer etter polaritet, men har litt lavere kapasitet og litt svakere adsorpsjonsstyrke. pH på alumina kan justeres til sur, basisk eller nøytral (sur: –Al–OH, nøytral: –Al–OH + –Al–O⁻, basisk: –Al–O⁻). Alumina er stabil i basisk miljø, mens silika brytes ned ved pH &gt; 8. Alumina og titania har basiske funksjoner som gir sterk retensjon av sure analytter. Al-, Ti- og Zr-atomene er Lewis-syrer som holder igjen Lewis-baser (etere, ketoner, sulfoksider, fosfater, aromater).</Def>
        <Def term="Derivatisert silika («bonded phase»)" cite={`[${A}, slide 5; ${B1}, p. 66–67]`}>Silika der elueringsegenskapene justeres ved å derivatisere silanolgruppene med klorsilaner, f.eks. cyanopropyl («nitril», –CN), diol og amino. Fungerer som polare adsorbenter og kan brukes med gradient, men bruksområdet er vanligvis smalt.</Def>

        <Def term="Parametere i retensjonsligningen" cite={`[${A}, slide 5; ${B1}, p. 64–65]`}>{'Egenskaper ved SF: $V_a$ (adsorbentens overflatevolum, «volum av et monomolekylært lag av eluent») og $\\alpha$ (adsorbentaktiviteten, styrken til adsorpsjonsmiddelet). Egenskaper ved analytten: $S^\\circ$ (summen av adsorpsjonsenergiene $Q_i$ for hver funksjonelle gruppe, relativt til pentan) og $A_s$ (analyttens «molekylareal», arealet den trenger på SF). Egenskap ved MF: $\\varepsilon^\\circ$ (adsorpsjonsenergien til MF, «løsemiddelstyrke/eluentstyrke»).'}</Def>
        <Def term="Eluentstyrke ($\varepsilon^\circ$)" cite={`[${A}, slide 6; ${B1}, p. 65]`}>{'MF-ens evne til å fortrenge analytten på SF. En mer polar eluent konkurrerer lettere ut bundet analytt fra adsorpsjonssetene, og er altså en sterkere eluent (i NP!). Stor $\\varepsilon^\\circ$ gir liten $K$.'}</Def>
        <Diagram title="Eluotrop serie (ε° på silika, bok Tabell 3.2)" caption="Forelesningstabellen gir også verdier på alumina (f.eks. pentan 0, heksan 0,01, metanol 0,95, vann ≫ 1). Alkaner er svake eluenter, alkoholer sterke." cite={`[${B1}, p. 65–66; ${A}, slide 6]`}>
          <Svg w={460} h={300} label="Eluotrop serie">
            {[['heksan', 0], ['toluen', 0.22], ['kloroform', 0.26], ['diklormetan', 0.30], ['dietyleter', 0.38], ['MTBE', 0.48], ['etylacetat', 0.48], ['acetonitril', 0.52], ['THF', 0.53], ['aceton', 0.53], ['2-propanol', 0.60], ['metanol', 0.70]].map(([n, e], i) => (
              <g key={n}>
                <Label x={100} y={20 + i * 22} anchor="end" size={12}>{n}</Label>
                <rect x={108} y={10 + i * 22} width={Math.max(2, (e / 0.7) * 290)} height={14} style={{ fill: tone('var-b'), opacity: 0.25 + (e / 0.7) * 0.6 }} />
                <Label x={112 + Math.max(2, (e / 0.7) * 290)} y={21 + i * 22} anchor="start" size={11}>{String(e).replace('.', ',')}</Label>
              </g>
            ))}
            <Label x={108} y={292} anchor="start" size={12}>svak eluent</Label>
            <Label x={440} y={292} anchor="end" size={12} t="var-b">sterk eluent (NP) →</Label>
          </Svg>
        </Diagram>
        <Def term="Optimal $R_f$ i TLC" cite={`[${A}, slide 6]`}>0,2–0,5. TLC-eksempelet viser at 100 % heksan gir flekker ved startlinjen, 100 % etylacetat gir flekker ved fronten og 1:1 etylacetat/heksan gir god spredning.</Def>
        <Def term="Analyttens areal $A_s$" cite={`[${A}, slide 6]`}>Arealet analytten trenger på SF for å adsorberes. Det øker generelt med størrelsen, og store analytter påvirkes derfor mer av eluentstyrken.</Def>
        <Def term="$S^\circ = \sum Q_i$" cite={`[${A}, slide 7]`}>{'Summen av adsorpsjonsenergiene til hver funksjonelle gruppe. $Q_i$ er tabellert for alifatiske og aromatiske grupper på silika, f.eks. hydroksyl aromatisk 4,20 og nitro aromatisk 2,77.'}</Def>
        <Def term="Eluering i NP" cite={`[${A}, slide 11]`}>Isokratisk (samme sammensetning) eller gradient (polaritet). I NP går gradienten fra lav til høy polaritet.</Def>
        <Def term="Binære eluentblandinger" cite={`[${A}, slide 11–12]`}>Hvis isokratisk analyse gir gode k-verdier, men dårlig separasjon: bruk et annet (binært) eluent med samme elueringsstyrke, og bruk tabellen (nomogram over ε° for binære blandinger på silika).</Def>
        <Def term="To regler for valg av eluent" cite={`[${A}, slide 12]`}><strong>B-konsentrasjonsregelen</strong>: Maksimal selektivitet for en løsemiddelblanding A–B oppnås når konsentrasjonen av B er enten stor eller liten. <strong>Hydrogenbindingsregelen</strong>: En forbindelse i MF som gir hydrogenbinding mellom prøve og eluent, gir store forandringer i separasjonen.</Def>
        <Def term="Ikke pensum" cite={`[Pensum.pdf; ${B1}, p. 67–68]`}>HILIC og karbonmaterialer.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="likevekt" />
        <Eq id="snyder" />
        <Plot
          title="Retensjon vs. eluentstyrke: $\log K$ mot $\varepsilon^\circ$"
          caption="Linjer forankret i forelesningsdata: 2,6-dimetylpyridin ($A_s$ = 8, $K$ = 46 ved $\varepsilon^\circ$ = 0) og dibenzopyren ($A_s$ = 15, $K$ = 365 ved $\varepsilon^\circ$ = 0). For hver analytt er $\log K = \log K_{pentan} - \alpha A_s \varepsilon^\circ$. Startverdi $\alpha$ = 0,55 (worked example). Stiplet: pentan (0) og benzen (0,32). Den største analytten (høyest $A_s$) faller brattest, så linjene krysser."
          cite={`[${A}, slide 6]`}
          x={{ min: 0, max: 0.7, label: 'ε°' }}
          y={{ label: 'log K' }}
          params={[{ key: 'a', label: '$\\alpha$', min: 0.3, max: 0.8, step: 0.01, value: 0.55 }]}
          series={[
            { key: 'dmp', label: '2,6-dimetylpyridin (A_s = 8)', t: 'var-a', fn: (e, p) => Math.log10(46) - p.a * 8 * e },
            { key: 'dbp', label: 'dibenzopyren (A_s = 15)', t: 'var-c', fn: (e, p) => Math.log10(365) - p.a * 15 * e },
          ]}
          marks={[{ x: 0, label: 'pentan' }, { x: 0.32, label: 'benzen' }]}
        />
        <Eq id="S" />
        <Eq id="binar" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="Hvor følsom er retensjonen for eluentstyrken? (forelesningsdata)"
          given="Data: 2,6-dimetylpyridin ($A_s$ = 8) har $K$ = 46 i pentan ($\varepsilon^\circ$ = 0) og $K$ = 2 i benzen ($\varepsilon^\circ$ = 0,32). Dibenzopyren ($A_s$ = 15) har $K$ = 365 i pentan og $K$ = 0,6 i benzen."
          steps={[
            { body: 'Skriv ligningen for begge løsemidler og trekk den ene fra den andre. $V_a$ og $S^\\circ$ faller bort: $\\log K_{pentan} - \\log K_{benzen} = \\alpha\\, A_s\\,(\\varepsilon^\\circ_{benzen} - \\varepsilon^\\circ_{pentan})$' },
            { body: '2,6-dimetylpyridin: $\\log(46/2) = \\log 23 = 1{,}36$' },
            { body: 'Løs for $\\alpha$: $\\alpha = 1{,}36 / (8 \\times 0{,}32) = 1{,}36/2{,}56 \\approx 0{,}53$' },
            { body: 'Dibenzopyren: $\\log(365/0{,}6) = \\log 608 = 2{,}78$, så $\\alpha = 2{,}78/(15 \\times 0{,}32) = 2{,}78/4{,}8 \\approx 0{,}58$' },
            { title: 'Sjekk:', body: 'De to estimatene av $\\alpha$ er nesten like (≈ 0,55), som de skal være, siden det er samme adsorbent.' },
            { title: 'Tolkning:', body: 'I pentan holdes dibenzopyren sterkest igjen ($K$ = 365 > 46). I benzen er rekkefølgen snudd ($K$ = 0,6 < 2), fordi den store analytten (stor $A_s$) påvirkes mest av økt $\\varepsilon^\\circ$. Elueringsrekkefølgen kan altså endres ved å bytte eluent.' },
          ]}
          cite={`[${A}, slide 6]`}
        />
        <FadedExample
          title="$S^\circ$ for nitrofenol og valg av likeverdig eluent"
          given="Del A: Beregn $S^\circ$ for nitrofenol på silika. Del B: Du har 20 % CH₂Cl₂ i heksan og vil prøve en annen eluent med samme styrke."
          steps={[
            { title: 'Identifiser funksjonelle grupper:', body: 'én aromatisk –OH og én aromatisk –NO₂.' },
            { title: 'Slå opp $Q_i$ (aromatisk kolonne):', body: 'hydroksyl 4,20, nitro 2,77.' },
            { title: '$S^\\circ = \\sum Q_i = \\;?$', body: '4,2 + 2,77 = 6,97', hidden: true },
            { title: 'Del B. Les av nomogrammet:', body: '20 % CH₂Cl₂ i heksan gir $\\varepsilon^\\circ$ = 0,16.' },
            { title: 'Følg $\\varepsilon^\\circ$ = 0,16 loddrett ned til linjen «tBME in hexane». Hvilken prosent?', body: 'ca. 1,3 % tBME i heksan.', hidden: true },
            { title: 'Hvorfor skulle man bytte, når styrken er den samme?', body: 'For å endre selektiviteten. Etter hydrogenbindingsregelen kan en eluent som gir H-binding med prøven endre separasjonen mye.', hidden: true },
          ]}
          cite={`[${A}, slide 7, 12]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Eluentstyrke i NP vs. RP" cite={`[${A}, slide 6]`}>I NP er en <em>mer polar</em> MF en sterkere eluent. I RP er det motsatt (side 08). Notatet setter «(N.P.!)» bak definisjonen.</Trap>
        <Trap title="«Høyere MF-polaritet øker interaksjonen med SF»" cite={`[${LF24}, p. 2]`}>Feil. I NP reduserer høyere MF-polaritet interaksjonene mellom analytt og SF (H24 1(b)).</Trap>
        <Trap title="Bare ett svar på «hva påvirker adsorpsjonsstyrken»" cite={`[${LF24}, p. 2]`}>Riktig svar på H24 1(b) var «alle disse»: overflateareal og polaritet til SF, kolonnetemperatur og MF-polaritet.</Trap>
        <Trap title="$R_f$ og $t_R$ forveksles" cite={`[${A}, slide 3]`}>Stor <T text="$R_f$" /> betyr <em>lite</em> retensjon, mens stor <T text="$t_R$" /> betyr <em>mye</em>.</Trap>
        <Trap title="Gradient på ren silika" cite={`[${B1}, p. 65, 67]`}>Fungerer dårlig. Polare MF-molekyler binder til silanolene, og re-ekvilibrering tar for lang tid. Derivatisert silika tåler gradient.</Trap>
        <Trap title="Aminer på silika" cite={`[${B1}, p. 65]`}>Silika er sur (silanol-pKa 3–6) og gir ekstra sterk retensjon og tailing av aminer.</Trap>
        <Trap title="Silika ved høy pH" cite={`[${A}, slide 4]`}>Brytes ned ved pH &gt; 8. Alumina er stabil i basisk miljø.</Trap>
      </Section>
    </>
  )
}
