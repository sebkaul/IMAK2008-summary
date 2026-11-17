import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const K = 'Kilder til Båndspredning 200826.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const DIM = '–'
const UM = String.raw`\mathrm{\mu m}`

export const meta = {
  title: 'Båndspredning og van Deemter',
  topic: 'krom-teori',
  examWeight: {
    level: 'high',
    note: 'Flervalg på begge eksamener: H24 1(a) (hva van Deemter beskriver, hva C-leddet er), H25 oppg. 1 (partikkelstørrelse, økt MF-hastighet). Ligger også under H24 1(e) og H25 oppg. 3 (HETP)',
  },
  examTasks: [
    'H2024: 1(a)–1(i) (index: side 01–03)',
    'H2025: oppg. 1–3 (definisjoner, beregninger) (index: side 01–03)',
    'H2024 oppg. 1(a) (flervalg, 2 av 5 delspørsmål): hva van Deemter-ligningen beskriver, og hva C-leddet er.',
    'H2024 oppg. 1(e) (6 p, delvis): parametere som forbedrer oppløsning i HPLC, inkl. partikkelstørrelse, strømningshastighet og kolonnelengde/diameter (bakgrunnen er van Deemter).',
    'H2025 oppg. 1 (flervalg, 2 av 5 delspørsmål): effekt av redusert partikkelstørrelse og av økt MF-hastighet.',
    'H2025 oppg. 3 (begrepsforklaring, delvis): HETP, som er platehøyden van Deemter beskriver.',
  ],
  buildsOn: ['02-effektivitet-og-opplosning'],
  usedIn: ['05-kolonner-og-partikler', '11-gc-baeregass-og-injeksjon', '12-gc-kolonner-og-stasjonaerfaser', '24-ce-mobilitet-og-eof', '26-ce-metoder-og-cec'],
  sources: [
    `[${K}, slide 1–4, 6–11] (slide 5, 12 og 13 er tomme)`,
    `[${B1}, p. 5–10, 13] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Eksamen_IMAK2008_24.pdf, oppg. 1(a), 1(e)]',
    `[${LF24}, p. 1–2, 5]`,
    '[IMAK2008 eksamen H2025.pdf, oppg. 1, 3]',
    `[${LF25}, p. 1–2]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilket av van Deemter-leddene finnes ikke i en åpen kapillærkolonne?', a: `A-leddet (eddy-diffusjon). Det finnes bare i pakkede kolonner [${K}, slide 3; ${B1}, p. 6].` },
    { id: 'p2', kind: 'pretest', q: 'Hva skjer med platehøyden når du øker mobilfasehastigheten godt over optimum?', a: `C·u-leddet øker, og toppene blir bredere [${LF25}, oppg. 1; ${K}, slide 10].` },
    { id: 'p3', kind: 'pretest', q: 'Er longitudinal diffusjon viktigst i GC eller i HPLC?', a: `I GC. Diffusjon i gass er ca. 10⁴ ganger raskere enn i væske [${B1}, p. 6].` },
    { id: 't1', q: 'Hvorfor gir halvering av partikkeldiameteren større effekt på C-leddet enn på A-leddet?', a: `$A \\propto d_p$, mens $C_{MF}$ og $C_{sMF} \\propto d_p^2$. Halvering gir halvert A, men bare en firedel av C [${K}, slide 3, 9].` },
    { id: 't2', q: 'Hvilke to effekter påvirker B-leddet?', a: `Tid (hvor lenge analytten oppholder seg i kolonnen) og diffusjonshastigheten i MF ($D_M$) [${K}, slide 6].` },
    { id: 't3', q: 'Hvorfor kan masseoverføring i MF neglisjeres i GC, men ikke i HPLC?', a: `I GC er $D_M$ stor, så $C_{MF} \\propto d^2/D_M$ blir lite. I væske er $D_M$ ~10⁴ ganger mindre [${B1}, p. 6, 8].` },
    { id: 't4', q: 'Nevn tre kilder til båndspredning utenfor kolonnen.', a: `Injektor, koblingsslanger/overganger (dødvolum) og detektor, evt. treg elektronikk eller datasystem [${B1}, p. 9; ${K}, slide 11].` },
    { id: 't5', q: 'Hva er «ønskelisten» for lav platehøyde?', a: `Liten $d_p$, $d_f$, $d_c$, høy $D_M$/$D_S$, og «riktig» $u$ [${K}, slide 10].` },
  ],
  equations: [
    {
      id: 'vd', label: 'Van Deemter-ligningen',
      tex: String.raw`\va{H} = \vb{A} + \frac{\vc{B}}{\ve{u}} + \vd{C}\cdot \ve{u}`,
      vars: [
        { sym: String.raw`\va{H}`, desc: 'platehøyde', unit: UM },
        { sym: String.raw`\vb{A}`, desc: 'eddy-diffusjon', unit: UM },
        { sym: String.raw`\vc{B}`, desc: 'longitudinal diffusjon i MF', unit: String.raw`\mathrm{\mu m\cdot mm/s}` },
        { sym: String.raw`\vd{C}`, desc: 'motstand mot masseoverføring', unit: String.raw`\mathrm{\mu m\cdot s/mm}` },
        { sym: String.raw`\ve{u}`, desc: 'lineær MF-hastighet', unit: String.raw`\mathrm{mm/s}` },
      ],
      note: 'Forenklet ligning. Stillestående MF neglisjeres vanligvis, og C gjelder SF i GC og begge fasene i LC.',
      cite: `[${B1}, p. 8, lign. 1.2; ${K}, slide 2]`,
      check: { status: 'verified', note: 'Bok lign. 1.2 (p. 8, PDF s. 24): H = A + B/u + Cu. Slide 2: H = A + B/u + C*u.' },
    },
    {
      id: 'A', label: 'A-leddet',
      tex: String.raw`\vb{A} = c_e \cdot \vf{d_p}`,
      vars: [
        { sym: 'c_e', desc: 'proporsjonalitetsfaktor (konstant)', unit: DIM },
        { sym: String.raw`\vf{d_p}`, desc: 'diameter på partikkel i kolonnematerialet', unit: UM },
      ],
      note: 'Bare pakkede kolonner, og bare for partikler av én størrelse.',
      cite: `[${K}, slide 3; ${B1}, p. 6]`,
      check: { status: 'verified', note: 'Slide 3: A = c_e * d_p, med samme symbolforklaring.' },
    },
    {
      id: 'B', label: 'B-leddet',
      tex: String.raw`\frac{\vc{B}}{\ve{u}} = \frac{c_L \cdot D_M}{\ve{u}}`,
      vars: [
        { sym: 'c_L', desc: 'proporsjonalitetsfaktor (konstant)', unit: DIM },
        { sym: 'D_M', desc: 'diffusjonskonstant for analytt i MF', unit: String.raw`\mathrm{m^2/s}` },
        { sym: String.raw`\ve{u}`, desc: 'lineær MF-hastighet', unit: String.raw`\mathrm{mm/s}` },
      ],
      cite: `[${K}, slide 7; ${B1}, p. 7]`,
      check: { status: 'verified', note: 'Slide 7: B/u = c_L * D_M/u. Bok p. 7 (PDF s. 23) skriver samme ledd som H_l = c_l D_m/u.' },
    },
    {
      id: 'C', label: 'C-leddet og delbidragene',
      tex: String.raw`\begin{gathered}\vd{C}\cdot \ve{u} = (C_{MF} + C_{SF} + C_{sMF})\cdot \ve{u} \\ C_x = c \cdot \frac{d^2}{D_x} \\ C_{MF} = c_m\frac{d_{c/p}^2}{D_M} \qquad C_{SF} = c_s\frac{d_f^2}{D_S} \\ C_{sMF} = c_{stm}\frac{\vf{d_p}^2}{D_M}\end{gathered}`,
      vars: [
        { sym: String.raw`c_m, c_s, c_{stm}`, desc: 'proporsjonalitetskonstanter', unit: DIM },
        { sym: String.raw`\vf{d_p}`, desc: 'partikkeldiameter', unit: UM },
        { sym: 'd_c', desc: 'diameter på åpen kolonne (MF)', unit: UM },
        { sym: 'd_f', desc: 'tykkelse på SF-film', unit: UM },
        { sym: 'D_M, D_S', desc: 'diffusjonskonstanter i MF og SF', unit: String.raw`\mathrm{m^2/s}` },
      ],
      note: 'Alle C-bidrag går som (lengde)² delt på diffusjonskonstant, så det lønner seg mye å halvere en dimensjon. For åpen kolonne er $c_m = (1+6k+11k^2)/96(1+k)^2$.',
      cite: `[${K}, slide 9; ${B1}, p. 7]`,
      check: { status: 'verified', note: 'Slide 8: C*u = (C_MF + C_SF + C_sMF)*u. Slide 9: C_X = c*d²/D_X og de tre delleddene identiske. c_m for åpen kolonne: bok p. 7 (PDF s. 23).' },
    },
    {
      id: 'vd-full', label: 'Full van Deemter (forelesningsform)',
      tex: String.raw`\begin{gathered}\va{H} = c_e \vf{d_p} + \frac{c_L D_M}{\ve{u}} \\ + \left(\frac{c_{m/mp}\, d_{c/p}^2}{D_M} + \frac{c_s\, d_f^2}{D_S} + \frac{c_{stm}\, \vf{d_p}^2}{D_M}\right) \ve{u}\end{gathered}`,
      vars: [],
      note: 'Fremhevet i forelesningen. Ønskelisten følger av ligningen: liten $d_{p,f,c}$, høy $D_{M/S}$ og «riktig» $u$.',
      cite: `[${K}, slide 10]`,
      check: { status: 'verified', note: 'Slide 10 identisk.' },
    },
    {
      id: 'golay', label: 'Golay-ligningen (åpne rørkolonner)',
      tex: String.raw`\begin{gathered}\va{H} = \frac{2D_m}{\ve{u}} + f_g\frac{d_c^2\,\ve{u}}{D_m} + f_s\frac{d_f^2\,\ve{u}}{D_s} \\ f_g = \frac{1+6k+11k^2}{96(1+k)^2} \qquad f_s = \frac{(2/3)\,k}{(1+k)^2}\end{gathered}`,
      vars: [
        { sym: 'd_c', desc: 'kolonnens indre diameter', unit: UM },
        { sym: 'd_f', desc: 'filmtykkelse', unit: UM },
        { sym: 'k', desc: 'retensjonsfaktor', unit: DIM },
      ],
      note: 'Ingen A-ledd, siden det ikke er eddy-diffusjon i åpne rør.',
      cite: `[${B1}, p. 8, lign. 1.3]`,
      check: { status: 'verified', note: 'Bok lign. 1.3 (PDF s. 24) med f_g og f_s identiske.' },
    },
    {
      id: 'slange', label: 'Ekstrakolonne: båndspredning i tom slange',
      tex: String.raw`\sigma^2 = \frac{\pi r^2 L}{24 D_m F} \qquad \va{H} = \frac{r^2 \ve{u}}{24 D_m}`,
      vars: [
        { sym: String.raw`\sigma^2`, desc: 'variansbidrag', unit: String.raw`\mathrm{s^2}` },
        { sym: 'r', desc: 'slangens radius', unit: String.raw`\mathrm{mm}` },
        { sym: 'L', desc: 'slangelengde', unit: String.raw`\mathrm{mm}` },
        { sym: 'F', desc: 'volumetrisk flow', unit: String.raw`\mathrm{mL/min}` },
        { sym: String.raw`\ve{u}`, desc: 'lineær hastighet $L/t$', unit: String.raw`\mathrm{mm/s}` },
      ],
      note: 'Forårsaket av parabolsk flowprofil i røret.',
      cite: `[${B1}, p. 9, lign. 1.4]`,
      check: { status: 'verified', note: 'Bok p. 9 (PDF s. 25): σ² = πr²L/24D_mF og lign. 1.4 H = r²u/24D_m.' },
    },
  ],
}

const Sb = ({ b, s, p = '' }) => <>{b}<tspan baselineShift="sub" fontSize="72%">{s}</tspan>{p}</>

/* Static van Deemter sketch with B- and C-dominated regions */
function VanDeemterSkisse() {
  const x0 = 50, y0 = 250, sx = 48, sy = 55 // u 0..8 mm/s, H 0..4 µm
  const X = (u) => x0 + u * sx, Y = (h) => y0 - h * sy
  const A = 0.5, B = 0.45, C = 0.2
  const pts = (f, from = 0.12) => Array.from({ length: 50 }, (_, i) => { const u = from + ((8 - from) * i) / 49; return [X(u), Y(Math.min(4.2, f(u)))] })
  const uopt = Math.sqrt(B / C)
  return (
    <Svg w={460} h={300} label="Van Deemter-plott">
      <rect x={X(0)} y={Y(4.2)} width={X(uopt) - X(0)} height={y0 - Y(4.2)} style={{ fill: `color-mix(in srgb, ${tone('var-c')} 10%, transparent)` }} />
      <rect x={X(uopt)} y={Y(4.2)} width={X(8) - X(uopt)} height={y0 - Y(4.2)} style={{ fill: `color-mix(in srgb, ${tone('var-d')} 10%, transparent)` }} />
      <Arrow x1={x0} y1={y0} x2={X(8.3)} y2={y0} />
      <Arrow x1={x0} y1={y0} x2={x0} y2={Y(4.4)} />
      {[0, 2, 4, 6, 8].map((u) => <Label key={u} x={X(u)} y={y0 + 18} size={12}>{u}</Label>)}
      {[1, 2, 3, 4].map((h) => <Label key={h} x={x0 - 8} y={Y(h) + 4} anchor="end" size={12}>{h}</Label>)}
      <Label x={X(8.3)} y={y0 + 36} anchor="end" size={13}>u (mm/s)</Label>
      <Label x={x0 + 6} y={Y(4.3)} anchor="start" size={13}>H (µm)</Label>
      <line x1={X(0)} y1={Y(A)} x2={X(8)} y2={Y(A)} style={{ stroke: tone('var-b'), strokeWidth: 2, strokeDasharray: '2 4' }} />
      <Curve t="var-c" dashed points={pts((u) => B / u, 0.11)} />
      <line x1={X(0)} y1={Y(0)} x2={X(8)} y2={Y(C * 8)} style={{ stroke: tone('var-d'), strokeWidth: 2, strokeDasharray: '8 4 2 4' }} />
      <Curve t="var-a" width={3} points={pts((u) => A + B / u + C * u, 0.18)} />
      <line x1={X(uopt)} y1={y0} x2={X(uopt)} y2={Y(A + 2 * Math.sqrt(B * C))} style={{ stroke: tone('ink'), strokeDasharray: '3 3' }} />
      <Label x={X(uopt)} y={y0 - 6} size={12}><Sb b="u" s="opt" /></Label>
      <Label x={X(8)} y={Y(A + B / 8 + C * 8) - 6} anchor="end" t="var-a">H</Label>
      <Label x={X(8)} y={Y(C * 8) + 16} anchor="end" t="var-d" size={13}>C·u</Label>
      <Label x={X(8)} y={Y(A) - 6} anchor="end" t="var-b" size={13}>A</Label>
      <Label x={X(8)} y={Y(B / 8) - 4} anchor="end" t="var-c" size={13}>B/u</Label>
      <Label x={X(0.15)} y={Y(3.9)} anchor="start" t="var-c" size={12}>B-dom.</Label>
      <Label x={X(5)} y={Y(3.9)} t="var-d" size={12}>C-dominert</Label>
    </Svg>
  )
}

/* Eddy diffusion: three paths through packed particles */
function Eddy() {
  const parts = []
  for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) parts.push([60 + c * 38 + (r % 2) * 19, 50 + r * 36])
  return (
    <Svg w={440} h={210} label="Eddy-diffusjon i pakket kolonne">
      <rect x={40} y={28} width={320} height={110} style={{ fill: 'none', stroke: tone('ink') }} />
      {parts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={16} style={{ fill: `color-mix(in srgb, ${tone('muted')} 30%, var(--bg))`, stroke: tone('muted') }} />)}
      <Curve t="var-b" points={[[40, 82], [70, 32], [110, 34], [150, 30], [200, 34], [250, 30], [300, 34], [360, 32], [410, 32]]} />
      <Curve t="trap" points={[[40, 82], [80, 70], [120, 88], [170, 66], [220, 90], [270, 70], [330, 86], [360, 76], [395, 76]]} />
      <Curve t="intuition" points={[[40, 82], [70, 132], [110, 134], [150, 128], [200, 136], [250, 128], [300, 134], [360, 120], [380, 120]]} />
      <Arrow x1={40} y1={180} x2={40} y2={148} t="definition" />
      <Label x={14} y={198} anchor="start" size={13}>Samlet ved start</Label>
      <Label x={395} y={160} size={13}>Spredd ut</Label>
      <Label x={395} y={176} size={13}>etter kolonna</Label>
      <Label x={250} y={198} t="var-b" size={14}>A = <Sb b="c" s="e" p=" · " /><Sb b="d" s="p" /></Label>
    </Svg>
  )
}

/* Longitudinal diffusion: two panels */
function Longitudinal() {
  const tube = (y, w, label) => (
    <g>
      <rect x={20} y={y} width={400} height={44} rx={8} style={{ fill: 'none', stroke: tone('ink') }} />
      <rect x={220 - w / 2} y={y + 4} width={w} height={36} rx={6} style={{ fill: tone('var-c'), opacity: 0.55 }} />
      <Label x={20} y={y - 8} anchor="start" size={13}>{label}</Label>
    </g>
  )
  return (
    <Svg w={440} h={230} label="Longitudinal diffusjon">
      {tube(26, 30, 'Høy konsentrasjon i midten, lav på hver side')}
      {tube(110, 130, 'Etter litt tid')}
      <Arrow x1={200} y1={132} x2={110} y2={132} t="var-c" />
      <Arrow x1={240} y1={132} x2={330} y2={132} t="var-c" />
      <Label x={220} y={190} t="var-c" size={14}>B/u = <Sb b="c" s="L" p=" · " /><Sb b="D" s="M" p="/u" /></Label>
      <Label x={220} y={214} size={13}>øker med tid og <Sb b="D" s="M" />;  <Sb b="D" s="M" p="(gass) ≫ " /><Sb b="D" s="M" p="(væske)" /></Label>
    </Svg>
  )
}

/* Mass transfer between phases (a–d) */
function Masseoverforing() {
  const g = (cx, s, h, y, dir) => Array.from({ length: 41 }, (_, i) => { const x = cx - 60 + i * 3; return [x, y + dir * h * Math.exp(-((x - cx) ** 2) / (2 * s * s))] })
  const rows = [
    { l: '(a)', mf: 200, sf: 200, s: 14 },
    { l: '(b)', mf: 222, sf: 200, s: 14, arr: true },
    { l: '(c)', mf: 232, sf: 210, s: 18, arr: true },
    { l: '(d)', mf: 222, sf: 222, s: 22 },
  ]
  return (
    <Svg w={440} h={330} label="Masseoverføring mellom faser">
      {rows.map((r, i) => {
        const y = 40 + i * 72
        return (
          <g key={r.l}>
            <Label x={20} y={y + 5} anchor="start" size={13}>{r.l}</Label>
            <Arrow x1={60} y1={y} x2={360} y2={y} />
            <Curve t="definition" points={g(r.mf, r.s, 26, y, -1)} />
            <Curve t="var-d" points={g(r.sf, r.s, 26, y, 1)} />
            {r.arr && <>
              <Arrow x1={r.sf - 18} y1={y + 2} x2={r.sf - 18} y2={y - 24} t="trap" head={7} />
              <Arrow x1={r.mf + 22} y1={y - 2} x2={r.mf + 22} y2={y + 24} t="trap" head={7} />
            </>}
          </g>
        )
      })}
      <Label x={368} y={34} anchor="start" t="definition" size={12}>MF</Label>
      <Label x={368} y={56} anchor="start" t="var-d" size={12}>SF</Label>
      <Label x={220} y={318} t="var-d" size={14}>C·u = (<Sb b="C" s="MF" p=" + " /><Sb b="C" s="SF" p=" + " /><Sb b="C" s="sMF" p=")·u" /></Label>
    </Svg>
  )
}

/* Film and diameter: short vs long diffusion path */
function FilmDiameter() {
  return (
    <Svg w={440} h={290} label="Kort og lang diffusjonsvei">
      <rect x={20} y={20} width={230} height={14} style={{ fill: tone('intuition'), opacity: 0.8 }} />
      <rect x={20} y={74} width={230} height={14} style={{ fill: tone('intuition'), opacity: 0.8 }} />
      <rect x={20} y={20} width={230} height={68} style={{ fill: 'none', stroke: tone('definition'), strokeWidth: 2 }} />
      <Arrow x1={130} y1={74} x2={145} y2={38} t="definition" />
      <Label x={262} y={50} anchor="start" size={13}>tynn film,</Label>
      <Label x={262} y={68} anchor="start" size={13}>tynn kolonne-</Label>
      <Label x={262} y={86} anchor="start" size={13}>diameter</Label>
      <rect x={20} y={130} width={230} height={30} style={{ fill: tone('intuition'), opacity: 0.8 }} />
      <rect x={20} y={240} width={230} height={30} style={{ fill: tone('intuition'), opacity: 0.8 }} />
      <rect x={20} y={130} width={230} height={140} style={{ fill: 'none', stroke: tone('definition'), strokeWidth: 2 }} />
      <Arrow x1={120} y1={240} x2={150} y2={164} t="definition" />
      <Arrow x1={80} y1={268} x2={88} y2={244} t="trap" head={7} />
      <Label x={262} y={196} anchor="start" size={13}>tykk diameter,</Label>
      <Label x={262} y={214} anchor="start" size={13}>tykk film</Label>
      <Label x={160} y={288} size={12}>blå pil: vei i MF · rød pil: vei i SF-filmen</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Tre grunner til at båndet blir bredt">
        <MentalModel cite={`[${K}, slide 1–8, 10–11; ${B1}, p. 5–6, 8–9]`}>
          Båndspredning er uunngåelig. <V c="a">Platehøyden H</V> samler alle bidragene til at et smalt injisert bånd blir bredt. Van Deemter deler bidragene i tre.{' '}
          <V c="b"><strong>A</strong></V>: molekylene tar ulike veier rundt partiklene. <V c="c"><strong>B/u</strong></V>: molekylene diffunderer fra høy til lav konsentrasjon langs kolonnen, og jo lenger de oppholder seg, jo mer.{' '}
          <V c="d"><strong>C·u</strong></V>: overføringen mellom MF og SF tar tid, så noen molekyler henger etter mens andre går foran, og det blir verre jo raskere MF strømmer.{' '}
          B-leddet dominerer ved lav hastighet og C-leddet ved høy, så <T text="$H(u)$" /> har et minimum. Små partikler, tynne filmer, smale kolonner og rask diffusjon gir lav <T text="$H$." /> I tillegg sprer båndet seg <em>utenfor</em> kolonnen, i injektor, slanger og detektor.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="Modeller for båndspredning" cite={`[${K}, slide 1]`}>Teoretisk platemodell, «ikke-likevektsmodell» og random walk.</Def>
            <Def term="Van Deemter-ligningen" cite={`[${LF24}, p. 1, oppg. 1(a); ${B1}, p. 8]`}>Beskriver forholdet mellom platehøyde og lineær strømningshastighet.</Def>
            <Def term="Optimal u" cite={`[${K}, slide 11]`}>{'$u$ der $H$ har minimum. Optimal $u$ for metoden trenger ikke være den som gir lavest $H$, for det kan være bedre med en raskere analyse.'}</Def>
          </div>
          <Diagram title="Van Deemter-plott" caption="A som vannrett linje, B/u som fallende hyperbel, C·u som rett linje gjennom origo, og summen H med minimum ved $u_{opt}$. Skyggelagt: B-dominert (venstre) og C-dominert (høyre). Kurvene er tegnet med verdiene tilpasset bokas Fig. 1.3." cite={`[${K}, slide 10; ${B1}, p. 8, Fig. 1.3]`}>
            <VanDeemterSkisse />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="A, eddy-diffusjon (multiple path diffusion)" cite={`[${K}, slide 3; ${B1}, p. 6]`}>Molekyler tar kanaler med ulik bredde og lengde gjennom porøse strukturer, så de som var samlet ved start er spredd ut etter kolonnen. Finnes bare i pakkede kolonner.</Def>
            <Def term="A: partikler" cite={`[${B1}, p. 6; ${K}, slide 3]`}>Store, inhomogene partikler gir stort bidrag, og bidraget er proporsjonalt med partikkelstørrelsen. Bred partikkelstørrelsesfordeling øker også eddy-diffusjonen. Tiltak: minst mulige partikler (ulempe: økt trykk) og mest mulig lik form, altså «monodisperse» partikler.</Def>
            <Def term="A i LC" cite={`[${B1}, p. 6, Info-box 1.2]`}>I LC står eddy-diffusjon for en stor del av båndspredningen i kolonnen. «Eddy dispersion» er et mer korrekt navn.</Def>
          </div>
          <Diagram title="Eddy-diffusjon i pakket kolonne" cite={`[${K}, slide 3]`}>
            <Eddy />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="B, longitudinal diffusjon" cite={`[${K}, slide 6; ${B1}, p. 6]`}>{'«Vanlig» diffusjon fra høy til lav konsentrasjon langs kolonneaksen. To effekter påvirker B: (1) tid, og (2) diffusjonshastighet i MF, der $D_M$(gass) ≫ $D_M$(væske).'}</Def>
            <Def term="B: gass vs. væske" cite={`[${K}, slide 7; ${B1}, p. 6]`}>Typiske diffusjonskoeffisienter: væsker ~10⁻⁹ m²/s, gasser ~10⁻⁵ m²/s. Boka sier at diffusjonen i gass er ca. 10⁴ ganger høyere, så bidraget er mye viktigere i GC enn i HPLC. Viktig for både pakkede og åpne kolonner.</Def>
          </div>
          <Diagram title="Longitudinal diffusjon" cite={`[${K}, slide 6]`}>
            <Longitudinal />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="C, motstand mot masseoverføring" cite={`[${K}, slide 8; ${B1}, p. 7; ${LF24}, p. 2, oppg. 1(a)]`}>Fordi diffusjonen mellom fasene ikke går uendelig raskt, innstilles likevekten mellom fasene ikke umiddelbart. Det gir forsinkelse av deler av prøvekomponenten. Man ønsker så rask faseovergang MF → SF → MF som mulig. Boka: transport av analytter ved diffusjon og konveksjon fra én fase til en annen, generelt omvendt proporsjonal med diffusjonskonstantene i hver fase. C-leddet kvantifiserer tidsforsinkelsen for analyttens likevekt mellom fasene.</Def>
            <Def term="C: tre bidrag" cite={`[${K}, slide 8–9; ${B1}, p. 7]`}>{'Deles i tre bidrag: mobilfase ($C_{MF}$), stasjonærfase ($C_{SF}$) og stillestående mobilfase ($C_{sMF}$).'}</Def>
          </div>
          <Diagram title="Masseoverføring mellom faser" caption="(a) i likevekt. (b, c) MF-delen flytter seg fremover; røde piler viser molekyler som går opp og ned mellom fasene. (d) bredere fordeling." cite={`[${K}, slide 8]`}>
            <Masseoverforing />
          </Diagram>
        </Columns>

        <Columns>
          <Def term="C: film og diameter" cite={`[${K}, slide 9]`}>Tynn film og tynn kolonnediameter gir kort diffusjonsvei og lite C-bidrag. Tykk film og tykk diameter gir lang vei.</Def>
          <Diagram title="Film og diameter: kort vs. lang diffusjonsvei" cite={`[${K}, slide 9]`}>
            <FilmDiameter />
          </Diagram>
        </Columns>

        <Def term="Forenklinger i van Deemter" cite={`[${B1}, p. 7–8]`}>{'Stillestående MF gjelder bare store partikler og neglisjeres vanligvis i høyytelsessystemer. Masseoverføring i MF kan neglisjeres i GC, men ikke i HPLC. C står for SF i GC og for begge fasene i LC. Med tynne filmer (≤ 0,25 µm i GC) kan $H_s$ neglisjeres.'}</Def>
        <Def term="Ønskeliste for lav H" cite={`[${K}, slide 10]`}>{'liten $d_p$, $d_f$, $d_c$, høy $D_M$ og $D_S$, og «riktig» $u$.'}</Def>
        <Def term="Partikkelstørrelse (UHPLC)" cite={`[${K}, slide 4; ${LF25}, oppg. 1]`}>{'Mindre partikler gir bedre oppløsning, men høyere trykk. 5 µm: 165 bar, $R_s$ = 5,04. 3,0 µm: 280 bar, $R_s$ = 6,44. 1,9 µm (UHPLC): 655 bar, $R_s$ = 7,54. En reduksjon i partikkelstørrelse gir normalt høyere platetall og bedre separasjon.'}</Def>
        <Def term="Golay-ligningen" cite={`[${B1}, p. 8]`}>Beskriver båndspredningen i åpne rørkolonner, der det ikke er eddy-diffusjon.</Def>
        <Def term="Ekstrakolonne-båndspredning" cite={`[${B1}, p. 9; ${K}, slide 11]`}>Skjer i injektor, koblingsslanger til og fra kolonnen, detektor og noen ganger treg elektronikk eller datasystem. I slangene skyldes den parabolsk flowprofil forårsaket av friksjon mot veggene. «Dødvolum» i koblinger lar prøve henge igjen og blande seg. Ekstrakolonnebidraget skal utgjøre &lt; 10 % av sonespredningen.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="vd" />
        <Plot
          title="Van Deemter med partikkelstørrelse"
          caption="$H = A + B/u + C\,u$ med $A \propto d_p$ og $C \propto d_p^2$ (fra $A = c_e d_p$ og $C_{MF} = c_m d_p^2/D_M$). Startverdier tilpasset bokas Fig. 1.3 (ikke kursdata): $A$ = 0,5 µm, $B$ = 0,45 µm·mm/s, $C$ = 0,2 µm·s/mm ved 5 µm, som gir minimum ≈ 1,1 µm ved $u$ ≈ 1,5 mm/s. $u_{opt} = \sqrt{B/C}$: hold musen over H-kurven for å finne minimum. Prøv $d_p$ = 5 / 3,0 / 1,9 µm fra UHPLC-eksempelet: kurven synker og blir flatere i C-området."
          cite={`[${K}, slide 3, 4 og 9; ${B1}, p. 8, Fig. 1.3]`}
          x={{ min: 0.1, max: 8, label: 'u (mm/s)' }}
          y={{ label: 'H (µm)', min: 0, max: 4 }}
          params={[{ key: 'dp', label: '$d_p$', min: 1.9, max: 5, step: 0.1, value: 5, unit: 'µm' }]}
          series={[
            { key: 'H', label: 'H', t: 'var-a', fn: (u, p) => 0.5 * (p.dp / 5) + 0.45 / u + 0.2 * (p.dp / 5) ** 2 * u },
            { key: 'A', label: 'A', t: 'var-b', fn: (u, p) => 0.5 * (p.dp / 5) },
            { key: 'B', label: 'B/u', t: 'var-c', fn: (u) => 0.45 / u },
            { key: 'C', label: 'C·u', t: 'var-d', fn: (u, p) => 0.2 * (p.dp / 5) ** 2 * u },
          ]}
        />
        <Diagram title="Trykk og oppløsning per partikkelstørrelse (UHPLC-eksempelet)" cite={`[${K}, slide 4]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td><T text="$d_p$" /></td><td><strong>trykk</strong></td><td><T text="$R_s$" /></td></tr>
              <tr><td>5 µm</td><td>165 bar</td><td>5,04</td></tr>
              <tr><td>3,0 µm</td><td>280 bar</td><td>6,44</td></tr>
              <tr><td>1,9 µm (UHPLC)</td><td>655 bar</td><td>7,54</td></tr>
            </tbody>
          </table>
        </Diagram>
        <Eq id="A" />
        <Eq id="B" />
        <Eq id="C" />
        <Eq id="vd-full" />
        <Eq id="golay" />
        <Eq id="slange" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 1, to av flervalgene forklart med van Deemter — a) «En reduksjon i partikkelstørrelse i pakkede kolonner vil normalt føre til …»"
          steps={[
            { body: `Finn leddene som avhenger av $d_p$: $A = c_e d_p$ og $C_{MF}$, $C_{sMF} \\propto d_p^2$ [${K}, slide 3, 9].` },
            { body: 'Mindre $d_p$ gir mindre $A$ og mye mindre C-ledd (kvadratisk), så $H$ synker.' },
            { body: `$N = L/H$, så $N$ øker [${B1}, p. 10].` },
            { body: `$R_s \\propto \\sqrt{N}$, så separasjonen blir bedre [${B1}, p. 13]. Bekreftet av forelesningseksempelet: 5 µm gir $R_s$ = 5,04 og 1,9 µm gir 7,54 [${K}, slide 4].` },
            { title: 'Svar:', body: 'høyere plateantall og bedre separasjon. Pris: mye høyere trykk (165 → 655 bar).' },
          ]}
          cite={`[IMAK2008 eksamen H2025.pdf, oppg. 1; ${LF25}, p. 1–2]`}
        />
        <Example
          title="b) «Økt mobilfasehastighet i HPLC gir typisk …»"
          steps={[
            { body: `Over $u_{opt}$ dominerer $C\\cdot u$, som vokser lineært med $u$, mens $B/u$ allerede er lite [${K}, slide 10].` },
            { body: `Analytten rekker ikke å innstille likevekt mellom fasene, så mer av båndet henger etter eller løper foran [${K}, slide 8].` },
            { title: 'Svar:', body: 'økt C-term og bredere topper.' },
          ]}
          cite={`[IMAK2008 eksamen H2025.pdf, oppg. 1; ${LF25}, p. 1–2]`}
        />
        <FadedExample
          title="H24 oppg. 1(a), to flervalg om van Deemter"
          given="a) «Hva beskriver Van Deemter-ligningen?» b) «Hva er hovedformålet med masseoverføringsmotstand (C-term)?»"
          steps={[
            { title: 'a) Skriv ligningen:', body: '$H = A + B/u + C\\cdot u$.' },
            { title: 'Identifiser variablene:', body: 'venstresiden er platehøyde, og den uavhengige variabelen er $u$.' },
            { title: 'Velg alternativ.', body: 'Forholdet mellom platehøyde og lineær strømningshastighet.', hidden: true },
            { title: 'b) Hvilket fysisk fenomen ligger bak C?', body: `At diffusjonen mellom fasene ikke er uendelig rask, så likevekten ikke innstilles umiddelbart [${K}, slide 8].`, hidden: true },
            { title: 'Eliminer distraktorene: «turbulens/ujevnheter i kolonnen» og «diffusjon av analytt i MF» → hvilke ledd?', body: 'A og B.', hidden: true },
            { title: 'Velg alternativ.', body: 'Å kvantifisere tidsforsinkelsen for analyttens likevekt mellom faser.', hidden: true },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(a); ${LF24}, p. 1–2]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="A, B og C blandet sammen i flervalg" cite={`[${LF24}, p. 2]`}>Ujevnheter/flere veier = A, diffusjon langs kolonnen i MF = B, forsinket likevekt mellom faser = C. Distraktorene på H24 bygger nettopp på dette.</Trap>
        <Trap title="Eddy-diffusjon i kapillær-GC" cite={`[${B1}, p. 6, 8; ${K}, slide 3]`}>Finnes ikke. Åpne rørkolonner har ikke A-ledd, og der gjelder Golay.</Trap>
        <Trap title="Longitudinal diffusjon «bare i GC»" cite={`[${K}, slide 7; ${B1}, p. 6]`}>{'Den er viktig for både pakkede og åpne kolonner, men størst i GC fordi $D_M$ i gass er ~10⁴ ganger større.'}</Trap>
        <Trap title="«Høyere u gir alltid bredere topper»" cite={`[${K}, slide 10; ${LF25}, oppg. 1]`}>{'Under $u_{opt}$ synker $H$ når $u$ øker, fordi B/u minker. Flervalget på H25 forutsetter normal drift over optimum.'}</Trap>
        <Trap title="«C-termen øker»" cite={`[${LF25}, oppg. 1]`}>{'Konstanten $C$ endres ikke med $u$. Det er bidraget $C\\cdot u$ som øker. Løsningsforslaget skriver «økt C-term» i betydningen bidraget.'}</Trap>
        <Trap title="Minste partikler alltid best" cite={`[${K}, slide 3–4]`}>{'Mindre $d_p$ gir lavere $H$, men ulempen er økt trykk (655 bar ved 1,9 µm).'}</Trap>
        <Trap title="$u_{opt}$ = beste driftshastighet" cite={`[${K}, slide 11]`}>{'Ikke nødvendigvis. Litt høyere $u$ kan gi raskere analyse med akseptabel effektivitet.'}</Trap>
        <Trap title="Glemme ekstrakolonne-effekter" cite={`[${K}, slide 11; ${B1}, p. 9]`}>Injeksjon, detektor, koblinger og dødvolum gir også båndspredning, og bør være &lt; 10 % av total sonespredning.</Trap>
      </Section>
    </>
  )
}
