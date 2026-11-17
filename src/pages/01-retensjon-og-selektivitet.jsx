import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Diagram, Svg, Arrow, Label, Axes, Curve, Plot, Columns, V, T, tone } from '../components'

const L = 'Krom. Teori - Innledning og repetisjon 190826.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'

export const meta = {
  title: 'Retensjon og selektivitet (k, α)',
  topic: 'krom-teori',
  examWeight: {
    level: 'high',
    note: 'På begge eksamener: H24 1(a) flervalg, 1(d) 6 p, 1(i) 14 p (beregning, delt med side 02); H25 oppg. 1 flervalg',
  },
  examTasks: [
    'H2024: 1(a)–1(i) (index: side 01–03)',
    'H2025: oppg. 1–3 (definisjoner, beregninger) (index: side 01–03)',
    'H2024 oppg. 1(a) (flervalg, 5 p totalt): hva beskriver fordelingskoeffisienten K, og hva beskriver retensjonsfaktoren k′ (to av fem delspørsmål).',
    'H2024 oppg. 1(d) (6 p): definer selektivitetsfaktoren og forklar dens innflytelse på separasjonen.',
    'H2024 oppg. 1(i) (14 p, delt med side 02): beregn k′, α, Rs, N og H fra et HPLC-kromatogram av tre legemidler. Del ii, om hvilken stasjonærfase som er brukt, hører til side 08.',
    'H2025 oppg. 1 (flervalg, 5 p totalt): hvilken faktor beskriver fordelingen mellom MF og SF (k), hva tR er tiden fram til (toppmaksimum), og hva α = 1,0 betyr (koeluering).',
  ],
  buildsOn: [],
  usedIn: ['02-effektivitet-og-opplosning', '03-bandspredning-van-deemter', '07-adsorpsjon-normalfase', '08-omvendt-fase-og-ionepar', '12-gc-kolonner-og-stasjonaerfaser'],
  sources: [
    `[${L}, slide 1–5]`,
    `[${B1}, p. 2–5, 11–13, 64–65] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Pensum.pdf, p. 1]',
    '[Eksamen_IMAK2008_24.pdf, oppg. 1(a), 1(d), 1(i)]',
    `[${LF24}, p. 1, 4, 7–8]`,
    '[IMAK2008 eksamen H2025.pdf, oppg. 1]',
    `[${LF25}, p. 1–2, oppg. 1]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'To topper i et kromatogram: den ene eluerer etter 2 min, den andre etter 5 min. Hvilken har størst retensjonsfaktor, og hvorfor?', a: `Toppen ved 5 min. Den har tilbrakt mest tid i stasjonærfasen i forhold til tiden i mobilfasen [${L}, slide 2].` },
    { id: 'p2', kind: 'pretest', q: 'To forbindelser har α = 1,0. Kan de separeres ved å bruke en lengre kolonne?', a: `Nei. De har like retensjonsfaktorer og vil koeluere [${LF25}, oppg. 1].` },
    { id: 'p3', kind: 'pretest', q: 'Hva er $t_0$?', a: `Oppholdstiden i mobilfasen, altså tiden en komponent uten interaksjon med stasjonærfasen bruker gjennom systemet [${L}, slide 2; ${B1}, p. 5].` },
    { id: 't1', q: 'I H24 1(i) eluerer paracetamol ved 3,414 min. Med $t_0$ = 0,5 min, hva blir $k$ for paracetamol og $\\alpha$ mot brompheniramine ($k$ = 3,328)?', a: '$k = (3{,}414 - 0{,}5)/0{,}5 = 5{,}83$, og $\\alpha = 5{,}83/3{,}328 \\approx 1{,}75$ [Eksamen_IMAK2008_24.pdf, oppg. 1(i)].' },
    { id: 't2', q: 'Hvorfor brukes $k$ heller enn $t_R$ for å beskrive retensjon?', a: `$k$ er uavhengig av flowhastighet og kolonnedimensjoner, mens $t_R$ ikke er det [${B1}, p. 5].` },
    { id: 't3', q: 'To topper koeluerer med liten $k$. Hva er den enkleste måten å bedre separasjonen på i GC og i HPLC?', a: `Øk $k$: i GC ved å senke kolonnetemperaturen, i HPLC ved å senke elueringsstyrken til mobilfasen [${B1}, p. 13].` },
    { id: 't4', q: 'Hvilke tre parametere kan endre $\\alpha$?', a: `Mobilfasesammensetning (polaritet, pH, modifikatorer), stasjonærfase og temperatur [${LF24}, p. 4].` },
    { id: 't5', q: 'Hvordan bestemmer man $t_0$ eksperimentelt?', a: `Ved å injisere en komponent som er kjent for å ikke ha interaksjoner med stasjonærfasen [${B1}, p. 5].` },
  ],
  equations: [
    {
      id: 'k-def', label: 'Retensjonsfaktor (definisjon)',
      tex: String.raw`\va{k} = \frac{n_s(x)}{n_m(x)}`,
      vars: [
        { sym: String.raw`\va{k}`, desc: 'retensjonsfaktor for komponent $x$', unit: String.raw`\text{dimensjonsløs}` },
        { sym: String.raw`n_s(x)`, desc: 'antall molekyler av $x$ i stasjonærfasen', unit: '–' },
        { sym: String.raw`n_m(x)`, desc: 'antall molekyler av $x$ i mobilfasen', unit: '–' },
      ],
      note: 'Gjelder ved et gitt tidspunkt under migrasjonen. Når $n_s \\gg n_m$ går migrasjonen sakte, og analytten får høy retensjon.',
      cite: `[${L}, slide 2; ${B1}, p. 3–5]`,
      check: { status: 'verified', note: 'Slide 2: k = n_s(x)/n_m(x). Bok p. 5 (PDF s. 21): k = n_s/n_m.' },
    },
    {
      id: 'k-tid', label: 'Retensjonsfaktor fra kromatogrammet',
      tex: String.raw`\va{k} = \frac{\vb{t_R} - \vc{t_0}}{\vc{t_0}} = \frac{\vd{t_R'}}{\vc{t_0}}`,
      vars: [
        { sym: String.raw`\vb{t_R}`, desc: 'retensjonstid (oppholdstid i MF + SF)', unit: String.raw`\mathrm{min}` },
        { sym: String.raw`\vc{t_0}`, desc: 'oppholdstid i MF (boka: $t_M$)', unit: String.raw`\mathrm{min}` },
        { sym: String.raw`\vd{t_R'}`, desc: 'korrigert retensjonstid', unit: String.raw`\mathrm{min}` },
      ],
      note: 'Måten $k$ måles på i praksis. $t_0$ må bestemmes først, f.eks. med en komponent uten interaksjon med SF.',
      cite: `[${L}, slide 2 og 4; ${B1}, p. 5, lign. 1.1]`,
      check: { status: 'verified', note: 'Slide 2 identisk. Bok lign. 1.1 (PDF s. 21) skriver k = (t_R − t_M)/t_M, dvs. t_M for t_0.' },
    },
    {
      id: 'tR-k', label: 'Retensjonstid uttrykt med k',
      tex: String.raw`\begin{gathered}\vb{t_R} = \vc{t_0} + \vc{t_0}\va{k} = \vc{t_0}(1+\va{k}) \\ V_R = V_M(1+\va{k})\end{gathered}`,
      vars: [
        { sym: String.raw`V_R`, desc: 'retensjonsvolum', unit: String.raw`\mathrm{mL}` },
        { sym: String.raw`V_M`, desc: 'volum av mobilfase i kolonnen', unit: String.raw`\mathrm{mL}` },
      ],
      note: 'Tidsenheter kan erstattes med volumenheter.',
      cite: `[${B1}, p. 5]`,
      check: { status: 'mismatch', note: 'Kun notasjon: boka (p. 5, PDF s. 21) skriver t_R = t_M + t_M k = t_M(1 + k) med t_M der innholdet har t_0. V_R = V_M(1 + k) er identisk.' },
    },
    {
      id: 'tR-korr', label: 'Korrigert retensjonstid',
      tex: String.raw`\vd{t_R'} = \vb{t_R} - \vc{t_0}`,
      vars: [],
      note: 'Tiden analytten faktisk tilbringer i SF.',
      cite: `[${L}, slide 2; ${B1}, p. 11]`,
      check: { status: 'verified', note: 'Slide 2: t_R − t_0 = t_R′ («korrigert retensjonstid»). Bok p. 11 (PDF s. 27): t′_R = (t_R − t_M).' },
    },
    {
      id: 'alpha', label: 'Separasjonsfaktor (selektivitet)',
      tex: String.raw`\ve{\alpha} = \frac{\va{k_2}}{\va{k_1}} = \frac{\dfrac{t_{R_2}-\vc{t_0}}{\vc{t_0}}}{\dfrac{t_{R_1}-\vc{t_0}}{\vc{t_0}}} = \frac{t_{R_2}-\vc{t_0}}{t_{R_1}-\vc{t_0}} = \frac{\vd{t_{R_2}'}}{\vd{t_{R_1}'}}`,
      vars: [
        { sym: String.raw`\ve{\alpha}`, desc: 'separasjonsfaktor', unit: String.raw`\text{dimensjonsløs, }\geq 1` },
        { sym: String.raw`\va{k_1}, \va{k_2}`, desc: 'retensjonsfaktor for første og andre topp, $k_2 > k_1$', unit: String.raw`\text{dimensjonsløs}` },
        { sym: String.raw`\vd{t_{R_1}'}, \vd{t_{R_2}'}`, desc: 'korrigerte retensjonstider', unit: String.raw`\mathrm{min}` },
      ],
      note: '$t_0$ kan forkortes bort, så $\\alpha$ kan regnes direkte fra korrigerte retensjonstider. Per definisjon er $k_2 > k_1$, slik at $\\alpha > 1$.',
      cite: `[${L}, slide 5; ${B1}, p. 12; ${LF24}, p. 4]`,
      check: { status: 'verified', note: 'Slide 5: hele kjeden er identisk. Bok p. 12 (PDF s. 28): α = k2/k1 (k2 > k1).' },
    },
    {
      id: 'K', label: 'Fordelingskoeffisient',
      tex: String.raw`\vf{K} = \frac{c_{SF}}{c_{MF}}`,
      vars: [
        { sym: String.raw`\vf{K}`, desc: 'fordelingskoeffisient', unit: String.raw`\text{dimensjonsløs}` },
        { sym: String.raw`c_{SF}, c_{MF}`, desc: 'analyttens konsentrasjon i stasjonær og mobil fase', unit: String.raw`\mathrm{mol/L}` },
      ],
      note: 'Definert i ord i løsningsforslaget. For adsorpsjon gir boka $\\log K$ som funksjon av adsorbent og elueringsstyrke, se side 07.',
      cite: `[${LF24}, p. 1, oppg. 1(a); ${B1}, p. 64–65]`,
      check: { status: 'verified', note: 'LF H24 p. 1, 1(a): «Forholdet mellom analyttens konsentrasjon i stasjonær fase og mobil fase». Kun i ord, ikke som formel.' },
    },
    {
      id: 'Rf', label: 'Rf i tynnsjiktskromatografi',
      tex: String.raw`R_f = \frac{L_p}{L_{MF}}`,
      vars: [
        { sym: String.raw`L_p`, desc: 'vandringsavstand for prøven fra startlinjen', unit: String.raw`\mathrm{cm}` },
        { sym: String.raw`L_{MF}`, desc: 'vandringsavstand for MF-fronten fra startlinjen', unit: String.raw`\mathrm{cm}` },
      ],
      note: 'Anbefalt $0{,}2 < R_f < 0{,}5$.',
      cite: `[${L}, slide 5]`,
      check: { status: 'verified', note: 'Slide 5: R_f = L_p/L_MF, 0,2 < R_f < 0,5.' },
    },
  ],
}

/* subscript inside SVG text */
const Sb = ({ b, s, p = '' }) => <>{b}<tspan baselineShift="sub" fontSize="72%">{s}</tspan>{p}</>

/* Chromatogram anatomy: t0, tR, tR' */
function Anatomy() {
  const x0 = 40, base = 230, t0 = 130, tR = 330
  return (
    <Svg w={440} h={290} label="Kromatogram med t0, tR og tR'">
      <Axes x={x0} y={60} w={390} h={170} />
      <Label x={430} y={256} anchor="end" size={14}>tid (min)</Label>
      <Label x={x0 + 8} y={74} anchor="start" size={14}>signal (mAU)</Label>
      <Curve t="var-c" points={[[x0, base], [t0 - 22, base], [t0 - 7, base - 15], [t0, base - 45], [t0 + 7, base - 15], [t0 + 22, base], [tR - 35, base]]} />
      <Curve t="var-b" points={[[tR - 35, base], [tR - 18, base - 40], [tR, base - 130], [tR + 18, base - 40], [tR + 40, base], [425, base]]} />
      <Label x={t0} y={base - 52} t="var-c"><Sb b="t" s="0" /></Label>
      <Label x={tR + 14} y={base - 120} anchor="start" t="var-b"><Sb b="t" s="R" /></Label>
      <Arrow x1={x0} y1={262} x2={t0} y2={262} t="var-c" />
      <Label x={x0} y={284} anchor="start" size={14} t="var-c">oppholdstid i MF</Label>
      <Arrow x1={t0} y1={150} x2={tR} y2={150} t="var-d" />
      <Label x={(t0 + tR) / 2} y={140} t="var-d" size={14}><Sb b="t" s="R" p="′ = korrigert ret.tid" /></Label>
      <Arrow x1={x0} y1={34} x2={tR} y2={34} t="var-b" />
      <Label x={x0} y={22} anchor="start" t="var-b" size={14}><Sb b="t" s="R" p=" = oppholdstid i MF + SF" /></Label>
    </Svg>
  )
}

/* Molecules in MF and SF for components A, B, C */
function Fordeling() {
  const comps = [
    { n: 'A', x: 80, mf: 4, sf: 1, t: 'var-c' },
    { n: 'B', x: 220, mf: 2, sf: 3, t: 'var-b' },
    { n: 'C', x: 360, mf: 1, sf: 5, t: 'var-a' },
  ]
  return (
    <Svg w={440} h={290} label="Fordeling av molekyler mellom MF og SF">
      <rect x={10} y={40} width={420} height={80} style={{ fill: `color-mix(in srgb, ${tone('definition')} 10%, var(--bg))`, stroke: tone('muted') }} />
      <rect x={10} y={120} width={420} height={80} style={{ fill: `color-mix(in srgb, ${tone('muted')} 22%, var(--bg))`, stroke: tone('muted') }} />
      <Arrow x1={14} y1={24} x2={150} y2={24} t="definition" />
      <Label x={160} y={30} anchor="start">Mobil fase (MF)</Label>
      <Label x={425} y={192} anchor="end" size={14}>Stasjonær fase (SF)</Label>
      {comps.map((c) => (
        <g key={c.n}>
          {Array.from({ length: c.mf }, (_, i) => <circle key={`m${i}`} cx={c.x - 30 + (i % 3) * 24} cy={68 + Math.floor(i / 3) * 24} r={8} style={{ fill: tone(c.t) }} />)}
          {Array.from({ length: c.sf }, (_, i) => <circle key={`s${i}`} cx={c.x - 30 + (i % 3) * 24} cy={142 + Math.floor(i / 3) * 24} r={8} style={{ fill: tone(c.t) }} />)}
          <Label x={c.x - 6} y={226} t={c.t}>{c.n}: {c.sf}/{c.mf}</Label>
        </g>
      ))}
      <Label x={220} y={254} size={14}><Sb b="n" s="s" />/<Sb b="n" s="m" /> per komponent</Label>
      <Label x={220} y={280} size={14} t="var-a">C: flest i SF → størst k → saktest</Label>
    </Svg>
  )
}

/* Large vs small k: stacked sketch chromatograms */
function StorLitenK() {
  const x0 = 30, sx = 38
  const X = (k) => x0 + k * sx
  const tri = (k, h, w, y, t) => <Curve key={`${k}-${y}`} t={t} width={2.5} points={[[X(k) - w, y], [X(k), y - h], [X(k) + w, y]]} />
  const rows = [80, 150, 220]
  return (
    <Svg w={440} h={380} label="Stor og liten k">
      <rect x={X(0.5)} y={24} width={X(10.6) - X(0.5)} height={300} style={{ fill: `color-mix(in srgb, ${tone('intuition')} 14%, transparent)` }} />
      <Label x={X(10.5)} y={42} anchor="end" t="intuition" size={14}>anbefalt 0,5 &lt; k &lt; 15 →</Label>
      {rows.map((y) => <line key={y} x1={x0} y1={y} x2={X(10.6)} y2={y} style={{ stroke: tone('muted') }} />)}
      {tri(1, 30, 5, rows[0], 'var-a')}
      {tri(3, 20, 12, rows[1], 'var-a')}
      {tri(8, 10, 32, rows[2], 'var-a')}
      <Label x={X(1) + 12} y={rows[0] - 14} anchor="start" size={14}>k = 1</Label>
      <Label x={X(3) + 18} y={rows[1] - 8} anchor="start" size={14}>k = 3</Label>
      <Label x={X(8)} y={rows[2] - 16} size={14}>k = 8</Label>
      <line x1={x0} y1={300} x2={X(10.6)} y2={300} style={{ stroke: tone('muted') }} />
      {tri(0.1, 40, 3, 300, 'var-a')}
      {tri(0.25, 34, 3, 300, 'var-e')}
      <Label x={X(0.8)} y={275} anchor="start" size={14}>k = 0,1 og 0,25</Label>
      {Array.from({ length: 11 }, (_, k) => <Label key={k} x={X(k)} y={320} size={13}>{k}</Label>)}
      <Label x={X(10.6)} y={344} anchor="end" size={14}>k  (0 ≙ t₀, 1 ≙ 2t₀, …)</Label>
      <Label x={x0} y={372} anchor="start" t="trap" size={14}>øverst: stor k · nederst: liten k</Label>
    </Svg>
  )
}

/* TLC plate */
function TLC() {
  return (
    <Svg w={320} h={300} label="TLC-plate med Rf">
      <rect x={20} y={20} width={130} height={260} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={20} y1={45} x2={150} y2={45} style={{ stroke: tone('ink') }} />
      <line x1={20} y1={250} x2={150} y2={250} style={{ stroke: tone('ink') }} />
      <Label x={156} y={50} anchor="start">MF-front</Label>
      <Label x={156} y={255} anchor="start">Startlinje</Label>
      <circle cx={70} cy={95} r={10} style={{ fill: tone('var-c') }} />
      <circle cx={70} cy={185} r={7} style={{ fill: tone('var-e') }} />
      <circle cx={70} cy={220} r={5} style={{ fill: tone('var-b') }} />
      <circle cx={70} cy={250} r={3} style={{ fill: tone('ink') }} />
      <Arrow x1={110} y1={250} x2={110} y2={98} t="var-c" />
      <Label x={118} y={170} anchor="start" t="var-c"><Sb b="L" s="p" /></Label>
      <Arrow x1={260} y1={250} x2={260} y2={48} t="definition" />
      <Label x={268} y={150} anchor="start" t="definition"><Sb b="L" s="MF" /></Label>
    </Svg>
  )
}

const gauss = (x, mu, h) => { const s = 0.04 * mu; return h * Math.exp(-((x - mu) ** 2) / (2 * s * s)) }

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Hvorfor stoffer kommer ut til ulik tid">
        <MentalModel cite={`[${B1}, p. 2–5; ${L}, slide 2 og 5; ${LF25}, oppg. 1]`}>
          <T text="En analytt fordeler seg hele tiden mellom mobilfase (MF) og stasjonærfase (SF), og den beveger seg bare framover mens den er i MF. Alle komponenter bruker derfor minst $t_0$, tiden det tar å bli fraktet gjennom kolonnen i MF." />{' '}
          Det som skiller dem er hvor mye <em>ekstra</em> tid de blir holdt igjen i SF, den <V c="d">korrigerte retensjonstiden</V> <T text="$t_R'$." />{' '}
          <V c="a">Retensjonsfaktoren k</V> er forholdet mellom antall molekyler i SF og i MF, og det er det samme som <T text="$t_R'/t_0$." /> Den er uavhengig av flowhastighet og kolonnedimensjoner.{' '}
          <V c="e">Selektiviteten α</V> sammenligner <T text="$k$" /> for to stoffer. Er <T text="$\alpha = 1$" />, oppfører stoffene seg likt i systemet og følger hverandre uansett hvor lang kolonnen er.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="Retensjonstid ($t_R$)" cite={`[${B1}, p. 2; ${L}, slide 2; ${LF25}, oppg. 1]`}>Tiden fra prøveinnføring til eluering fra kolonnen (toppmaksimum), dvs. oppholdstid i MF + SF.</Def>
            <Def term="Dødtid / oppholdstid i MF ($t_0$; boka skriver $t_M$)" cite={`[${B1}, p. 5; ${L}, slide 2]`}>Migrasjonstiden for en komponent som bare går i mobilfasen, uten interaksjon med SF. Bestemmes ved å injisere en komponent som er kjent for å ikke ha interaksjoner med SF.</Def>
            <Def term="Korrigert retensjonstid ($t_R'$)" cite={`[${L}, slide 2; ${B1}, p. 11]`}>{'$t_R - t_0$, tiden analytten faktisk holdes tilbake i SF.'}</Def>
          </div>
          <Diagram title="Kromatogrammets anatomi" caption="$k = t_R'/t_0$: hvor mange «$t_0$-er» ekstra stoffet bruker." cite={`[${L}, slide 2]`}>
            <Anatomy />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Retensjonsfaktor ($k$, på eksamen ofte $k'$)" cite={`[${B1}, p. 3–5; ${LF25}, oppg. 1; ${L}, slide 3]`}>{'$n_s/n_m$, forholdet mellom antall molekyler av komponenten i SF og MF. Beskriver fordelingen av analytt mellom mobil og stasjonær fase. Anbefalt av IUPAC og uavhengig av flowhastighet og kolonnedimensjoner. Det eldre navnet «kapasitetsfaktor» bør unngås.'}</Def>
            <Def term="Fordelingskoeffisient ($K$)" cite={`[${LF24}, p. 1, oppg. 1(a); ${B1}, p. 64]`}>Forholdet mellom analyttens konsentrasjon i stasjonær fase og i mobil fase. Boka bruker «partition coefficient K» om fordelingen mellom SF og MF i adsorpsjonskromatografi.</Def>
          </div>
          <Diagram title="Fordeling av molekyler mellom SF og MF" caption="Bånd A, B og C ved $L = 0$, $t_R = 0$. Komponenten med flest molekyler i SF får størst $k$ og vandrer saktest." cite={`[${L}, slide 2; ${B1}, p. 3–5]`}>
            <Fordeling />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="«God» retensjonsfaktor" cite={`[${L}, slide 2–3]`}>{'Anbefalt $0{,}5 < k < 15$. For stor $k$ gir lang elueringstid og brede, fortynnede topper. For liten $k$ gir kort elueringstid, men for lite separasjon.'}</Def>
            <Def term="Øke $k$" cite={`[${B1}, p. 13]`}>I GC ved å senke kolonnetemperaturen, i HPLC vanligvis ved å senke elueringsstyrken til mobilfasen.</Def>
            <Def term="Isokratisk vs. gradienteluering" cite={`[${B1}, p. 3–4, Fig. 1.2]`}>Isokratisk betyr konstant MF-sammensetning, og da øker toppbredden med økende elueringstid. Gradient betyr at MF-sammensetningen endres, noe som kan redusere analysetiden.</Def>
          </div>
          <Diagram title="Stor vs. liten k" caption="Øverst: $k = 1$, $3$ og $8$ — stor $k$ gir lang elueringstid og brede/fortynnede topper. Nederst: $k = 0{,}1$ og $0{,}25$ overlapper rett etter $t_0$ — liten $k$ gir kort tid, men for lite separasjon. Skyggelagt: anbefalt $0{,}5 < k < 15$." cite={`[${L}, slide 3; slide 2 for området]`}>
            <StorLitenK />
          </Diagram>
        </Columns>

        <Def term="Separasjonsfaktor / selektivitetsfaktor ($\alpha$)" cite={`[${L}, slide 5; ${B1}, p. 12; ${LF24}, p. 4, oppg. 1(d)]`}>{'Forholdet mellom retensjonsfaktorene til to komponenter, med $k_2 > k_1$ per definisjon, slik at $\\alpha > 1$. Høyere $\\alpha$ gir bedre separasjon. Er $\\alpha$ nær 1, er separasjonen dårlig.'}</Def>
        <Def term="Hva påvirker $\alpha$" cite={`[${LF24}, p. 4, oppg. 1(d); ${B1}, p. 13]`}>{'Mobilfasesammensetning (polaritet, pH, modifikatorer), stasjonærfase (kolonnekjemi) og temperatur. Den mest effektive måten å øke $\\alpha$ på er ofte å bytte stasjonærfase eller mobilfase (det siste ikke i GC).'}</Def>

        <Columns>
          <Def term="$R_f$ (tynnsjiktskromatografi)" cite={`[${L}, slide 5; Pensum.pdf]`}>{'Vandringsavstand for prøven delt på vandringsavstand for MF-fronten. Anbefalt $0{,}2 < R_f < 0{,}5$. TLC som eget kapittel er ikke pensum.'}</Def>
          <Diagram title="TLC-plate med $R_f$" caption="$R_f = L_p/L_{MF}$ for den største flekken." cite={`[${L}, slide 5]`}>
            <TLC />
          </Diagram>
        </Columns>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="k-def" />
        <Eq id="k-tid" />
        <Eq id="tR-k" />
        <Plot
          title="$t_R = t_0(1+k)$ og $\alpha$: to topper"
          caption="$t_0 = 0{,}75$ min fra solkrem-eksempelet. Topp 1 ved $t_0(1+k_1)$, topp 2 ved $t_0(1+\alpha k_1)$. Startverdier $k_1 = 5{,}67$ og $\alpha = 1{,}23$. Ved $\alpha = 1{,}00$ ligger toppene oppå hverandre (koeluering). Stiplede linjer: grensene for $0{,}5 < k < 15$. Toppbredden er bare illustrasjon (øker med $t_R$, isokratisk). Hold musen over kurven for $t_R$."
          cite={`[${L}, slide 4; slide 2 for området]`}
          x={{ min: 0, max: 25, label: 'tid (min)' }}
          y={{ label: 'signal', min: 0, max: 1.1 }}
          params={[
            { key: 'k1', label: '$k_1$', min: 0, max: 15, step: 0.01, value: 5.67 },
            { key: 'alpha', label: '$\\alpha$', min: 1, max: 2, step: 0.01, value: 1.23 },
          ]}
          series={[
            { key: 'p1', label: 'topp 1', t: 'var-a', fn: (x, p) => gauss(x, 0.75 * (1 + p.k1), 1) },
            { key: 'p2', label: 'topp 2', t: 'var-e', fn: (x, p) => gauss(x, 0.75 * (1 + p.alpha * p.k1), 0.8) },
          ]}
          marks={[{ x: 0.75 * 1.5, label: 'k=0,5' }, { x: 0.75 * 16, label: 'k=15' }]}
        />
        <Eq id="tR-korr" />
        <Eq id="alpha" />
        <Eq id="K" />
        <Gap>{'Den generelle sammenhengen mellom $K$ og $k$ (via faseforholdet $V_S/V_M$) er ikke gitt i noen av kursfilene.'}</Gap>
        <Eq id="Rf" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 1(i), del 1: $k'$ og $\alpha$ for tre legemidler"
          given="HPLC-kromatogram av pseudoephedrine HCl ($t_R$ = 1,521 min), brompheniramine maleat ($t_R$ = 2,164 min) og paracetamol ($t_R$ = 3,414 min). Mobilfase vann:acetonitril (75:25, v/v), pH 3,2. Beregn $k'$ for pseudoephedrine og brompheniramine, og $\alpha$."
          steps={[
            { title: 'Finn $t_0$.', body: '$t_0$-toppen var ikke synlig på det trykte kromatogrammet, så løsningsforslaget bruker $t_0 = 0{,}5$ min. Alle besvarelser som brukte en annen $t_0$, men riktige formler, fikk full uttelling.' },
            { title: 'Les av retensjonstidene:', body: '$t_{R1} = 1{,}521$ min (pseudoephedrine), $t_{R2} = 2{,}164$ min (brompheniramine).' },
            { title: "Regn $k'_1$:", body: String.raw`$k'_1 = \dfrac{1{,}521 - 0{,}5}{0{,}5} = \dfrac{1{,}021}{0{,}5} = 2{,}042$` },
            { title: "Regn $k'_2$:", body: String.raw`$k'_2 = \dfrac{2{,}164 - 0{,}5}{0{,}5} = \dfrac{1{,}664}{0{,}5} = 3{,}328$` },
            { title: 'Sjekk området:', body: `Begge ligger innenfor $0{,}5 < k < 15$ [${L}, slide 2].` },
            { title: 'Regn $\\alpha$', body: String.raw`med den sist eluerende i telleren: $\alpha = \dfrac{k'_2}{k'_1} = \dfrac{3{,}328}{2{,}042} \approx 1{,}63$` },
            { title: 'Tolkning:', body: '$\\alpha > 1$ betyr at stoffene har ulik retensjon og kan separeres. Hvor godt toppene faktisk skilles avhenger også av toppbredden, se $R_s$ og $N$ på side 02.' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(i); ${LF24}, p. 7–8]`}
        />
        <FadedExample
          title="Solkrem med UV-filtre (forelesningseksempel)"
          given="HPLC-kromatogram av UV-filtre: 1 octocrylene, 2 octinoxate, 3 avobenzone, 4 cis-homosalate, 5 octisalate, 6 trans-homosalate. Oppgave: finn $k$ for topp 1–3 og $\alpha$ mellom nabotoppene."
          steps={[
            { title: 'Finn $t_0$ først:', body: 'forstyrrelsen ved injeksjonstoppen (pil i figuren) gir $t_0 \\approx 0{,}75$ min.' },
            { title: 'Les av $t_R$:', body: 'topp 1 = 5 min, topp 2 = 6 min, topp 3 = 6,75 min.' },
            { body: String.raw`$k_1 = \dfrac{5 - 0{,}75}{0{,}75} = 5{,}67$` },
            { body: String.raw`$k_2 = \dfrac{6 - 0{,}75}{0{,}75} = 7{,}0$`, hidden: true },
            { body: '$k_3 = 8{,}0$', hidden: true },
            { body: '$\\alpha_{2/1} = k_2/k_1 = 1{,}23$', hidden: true },
            { body: '$\\alpha_{3/2} = 1{,}14$. Vanskeligst å separere: topp 2/3, fordi $\\alpha$ er minst.', hidden: true },
          ]}
          cite={`[${L}, slide 4]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="$K$ vs. $k$" cite={`[${LF24}, p. 1; ${LF25}, oppg. 1]`}>{'$K$ er konsentrasjonsforholdet SF/MF, mens $k$ er forholdet mellom antall molekyler (eller tid) i SF og MF. Begge eksamenene spør om dette i flervalg, med litt ulike formuleringer.'}</Trap>
        <Trap title="$k'$ på eksamen = $k$ i boka" cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(a), 1(i); ${B1}, p. 5]`}>{"Eksamen skriver $k'$, boka og forelesningen $k$. Det er samme størrelse."}</Trap>
        <Trap title="Bruke $t_R$ i stedet for $t_R'$ i α" cite={`[${L}, slide 5]`}>{"$\\alpha = t_{R2}'/t_{R1}'$, ikke $t_{R2}/t_{R1}$. Uten å trekke fra $t_0$ blir $\\alpha$ for liten."}</Trap>
        <Trap title="α < 1" cite={`[${B1}, p. 12]`}>{'Per definisjon står den sist eluerende i telleren, så $\\alpha > 1$.'}</Trap>
        <Trap title="Glemme å finne $t_0$" cite={`[${L}, slide 4; ${LF24}, p. 7]`}>{'Forelesningen understreker at $t_0$ må finnes først. På H24 var $t_0$ ikke synlig, og da må du anta en verdi og skrive det eksplisitt.'}</Trap>
        <Trap title="α = 1 «fikses» med lengre kolonne" cite={`[${LF25}, oppg. 1; ${B1}, p. 13]`}>Feil. Like <T text="$k$" /> betyr koeluering, og man må endre selektiviteten (SF, MF eller temperatur).</Trap>
        <Trap title="Større k er alltid bedre" cite={`[${L}, slide 2–3]`}>{'Feil. $k$ over ca. 15 gir lang analysetid og brede, fortynnede topper.'}</Trap>
        <Trap title="«Kapasitetsfaktor»" cite={`[${L}, slide 3]`}>{'Gammelt navn på $k$ som bør unngås.'}</Trap>
      </Section>
    </>
  )
}
