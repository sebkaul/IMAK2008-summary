import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Block, Diagram, Svg, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const S = 'Eksklusjonskrom_m_notater.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const SEP = 'Manuals-Sephadex-G-100-gelen-kollone-kromotografi.pdf'
const PRO = 'Prosjektoppgave IMAK2008 H26.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const ML = String.raw`\mathrm{mL}`

export const meta = {
  title: 'Eksklusjonskromatografi (SEC)',
  topic: 'lc-separasjon',
  examWeight: { level: 'medium', note: 'På begge eksamener: H25 oppg. 7 (6 p, Ve-tolkning) + oppg. 3 (fraksjoneringsområdet, 2 p), H24 1(j) (5 p, Mw-estimering og SF-materialer)' },
  examTasks: [
    'H2024: 1-serien NP/RP/IEX/SEC (index: side 07–10)',
    'H2025: oppg. 5–7 (index: side 07–10)',
    'H2025 oppg. 7 (6 p): SEC av protein og peptid. Hva skiller SEC fra andre teknikker, hvilken analytt er størst ut fra Ve, og hvor et veldig stort protein eluerer.',
    'H2025 oppg. 3 (10 p totalt, 2 p hører hit): forklar «fraksjoneringsområdet».',
    'H2024 oppg. 1(j) (5 p): hvordan SEC estimerer molekylvekten til en polymer, og minst tre egenskaper som skiller SF-materialer.',
  ],
  buildsOn: ['01-retensjon-og-selektivitet', '05-kolonner-og-partikler', '09-ionebytterkromatografi'],
  usedIn: ['19-elektroforese-teori-og-geler', '20-sds-page'],
  sources: [
    `[${S}, slide 1–7] (slide 8 er bare en artikkeltittel, slide 9 er tom. \`Eksklusjonk_u_notater.pdf\` er samme forelesning uten notater)`,
    `[${B1}, p. 76–77] (p. = boksidetall; PDF-side = bokside + 16)`,
    `[${SEP}, p. 1]`,
    `[${PRO}, p. 3]`,
    '[Pensum.pdf, p. 1]',
    `[${E25}, oppg. 3, 7] / [${LF25}, oppg. 3, 7]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(j)] / [${LF24}, p. 9–10]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Et stort og et lite protein kjøres på SEC. Hvilket eluerer først?', a: `Det store. Det ekskluderes fra porene og retarderes ikke [${S}, slide 1].` },
    { id: 'p2', kind: 'pretest', q: 'Ved hvilket volum eluerer et molekyl som er for stort til å gå inn i noen porer?', a: `Ved void-volumet $V_0$ ($K = 0$) [${S}, slide 3; ${B1}, p. 76].` },
    { id: 'p3', kind: 'pretest', q: 'Er SEC basert på interaksjon mellom analytt og SF?', a: `Nei. I prinsippet separeres det rent etter størrelse (hydrodynamisk volum), uten interaksjoner [${B1}, p. 76; ${LF25}, oppg. 7a].` },
    { id: 't1', q: 'Skriv volumbalansen i en SEC-kolonne og forklar $V_0$ og $V_i$.', a: `$V_t = V_0 + V_i + V_m$. $V_0$ er MF mellom partiklene (void-volum), $V_i$ er MF inne i porene (stillestående MF, «SF») [${S}, slide 3].` },
    { id: 't2', q: 'Hvorfor er toppkapasiteten lav i SEC?', a: `Alt eluerer mellom $V_0$ og $V_0 + V_i$ ($0 \\le K \\le 1$), så separasjonsvinduet er smalt. Typisk toppkapasitet er 10–20 [${B1}, p. 77].` },
    { id: 't3', q: 'Hvilke to typer molekyler brukes i prosjektet for å finne start og slutt på separasjonen, og hva markerer de?', a: `Et svært stort molekyl markerer eksklusjonsgrensen ($V_0$), og et svært lite molekyl markerer permeasjonsgrensen ($V_0 + V_i$) [${PRO}, p. 3; ${S}, slide 3].` },
    { id: 't4', q: 'Nevn tre bruksområder for SEC fra forelesningen.', a: `Proteinrensing, avsalting (fjerne salter/ioner, ofte før elektroforese, IEC eller affinitetskromatografi) og estimering av ukjent molmasse på et protein [${S}, slide 7].` },
    { id: 't5', q: 'Hva er forskjellen på gelfiltrering og gelpermeasjon?', a: `Gelfiltrering bruker vandig MF/SF. Gelpermeasjon bruker et organisk løsemiddel [${S}, slide 1; ${B1}, p. 76].` },
  ],
  equations: [
    {
      id: 'vt', label: 'Volumbalanse i SEC-kolonnen',
      tex: String.raw`V_t = \va{V_0} + \vb{V_i} + V_m`,
      vars: [
        { sym: 'V_t', desc: 'totalvolum ($\\pi r^2 h$)', unit: ML },
        { sym: String.raw`\va{V_0}`, desc: 'void-volum (MF mellom partiklene)', unit: ML },
        { sym: String.raw`\vb{V_i}`, desc: 'volum av MF inne i partiklene (porevolum)', unit: ML },
        { sym: 'V_m', desc: 'volum av gelmatriksen', unit: ML },
      ],
      cite: `[${S}, slide 3]`,
      check: { status: 'verified', note: 'Slide 3: V_t = V_0 + V_i + V_m, identisk.' },
    },
    {
      id: 've', label: 'Elueringsvolum',
      tex: String.raw`\vc{V_e} = \va{V_0} + \vd{K}\,\vb{V_i} \qquad 0 \le \vd{K} \le 1`,
      vars: [
        { sym: String.raw`\vc{V_e}`, desc: 'elueringsvolum', unit: ML },
        { sym: String.raw`\vd{K}`, desc: 'fordelingskoeffisient (andel av porevolumet som er tilgjengelig)', unit: String.raw`\text{dimensjonsløs}` },
      ],
      note: '$K = 0$: total eksklusjon ($V_e = V_0$). $K = 1$: total permeasjon ($V_e = V_0 + V_i$). Forutsetter ingen interaksjon med SF.',
      cite: `[${B1}, p. 76, lign. 3.6; ${S}, slide 3]`,
      check: { status: 'verified', note: 'Bok lign. 3.6 (p. 76, PDF s. 92): V_e = V_0 + KV_i, K mellom 0 og 1. Slide 3 skriver liten «k».' },
    },
    {
      id: 'k', label: 'Fordelingskoeffisient og molekylmasse',
      tex: String.raw`\vd{K} = A - B\log \ve{M}`,
      vars: [
        { sym: 'A,\\ B', desc: 'kolonnespesifikke konstanter', unit: '–' },
        { sym: String.raw`\ve{M}`, desc: 'molekylmasse (for proteiner: solvatisert, Stokes-radius)', unit: String.raw`\mathrm{Da}` },
      ],
      note: 'Gjelder bare innenfor fraksjoneringsområdet. Grunnlaget for Mw-estimering med kalibreringskurve.',
      cite: `[${B1}, p. 76, lign. 3.7]`,
      check: { status: 'verified', note: 'Bok lign. 3.7 (p. 76, PDF s. 92): K = A − B log M.' },
    },
  ],
}

const Sb = ({ b, s, p = '' }) => <>{b}<tspan baselineShift="sub" fontSize="72%">{s}</tspan>{p}</>
const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>

/* Three sizes through the column at three times */
function TreStorrelser() {
  const col = (x, red, green, blue, lab) => (
    <g>
      <rect x={x} y={20} width={70} height={200} style={{ fill: 'none', stroke: tone('ink') }} />
      {Array.from({ length: 24 }, (_, i) => <circle key={i} cx={x + 12 + (i % 3) * 23} cy={32 + Math.floor(i / 3) * 25} r={9} style={{ fill: `color-mix(in srgb, ${tone('muted')} 35%, var(--bg))` }} />)}
      {[[red, 'trap', 7], [green, 'intuition', 5], [blue, 'definition', 3.5]].map(([y, t, r], k) => y != null && <circle key={k} cx={x + 24 + k * 12} cy={y} r={r} style={{ fill: tone(t) }} />)}
      <Label x={x + 35} y={240} size={12}>{lab}</Label>
    </g>
  )
  return (
    <Svg w={460} h={250} label="Tre molekylstørrelser gjennom kolonnen">
      {col(30, 30, 30, 30, 'tid 1')}
      {col(150, 170, 110, 50, 'tid 2')}
      {col(270, null, 190, 90, 'tid 3: rød ute')}
      <circle cx={390} cy={60} r={7} style={{ fill: tone('trap') }} /><Label x={402} y={64} anchor="start" size={12}>stor</Label>
      <circle cx={390} cy={90} r={5} style={{ fill: tone('intuition') }} /><Label x={402} y={94} anchor="start" size={12}>middels</Label>
      <circle cx={390} cy={120} r={3.5} style={{ fill: tone('definition') }} /><Label x={402} y={124} anchor="start" size={12}>liten</Label>
    </Svg>
  )
}

/* Protein standards chromatogram */
function Standarder() {
  const prots = [['GDH 290 000', 1], ['LDH 140 000', 2], ['enolase 67 000', 3], ['adenylatkinase 32 000', 4], ['cytokrom c 12 400', 5]]
  const X = (i) => 40 + i * 75
  return (
    <Svg w={460} h={200} label="Kromatogram av proteinstandarder">
      <line x1={20} y1={150} x2={450} y2={150} style={{ stroke: tone('ink') }} />
      {prots.map(([n, i]) => (
        <g key={n}>
          <Curve t="topic" points={[[X(i) - 18, 150], [X(i) - 6, 140], [X(i), 70], [X(i) + 6, 140], [X(i) + 18, 150]]} />
          <Label x={i === 5 ? X(i) + 18 : X(i)} y={i % 2 ? 60 : 44} anchor={i === 5 ? 'end' : 'middle'} size={11}>{n}</Label>
        </g>
      ))}
      <Label x={450} y={172} anchor="end" size={12}>elueringsvolum →</Label>
      <Label x={20} y={192} anchor="start" size={11}>stor først → liten sist</Label>
    </Svg>
  )
}

/* Volume definitions */
function Volumer() {
  return (
    <Svg w={460} h={270} label="Volumdefinisjoner i SEC">
      <rect x={40} y={20} width={110} height={230} style={{ fill: `color-mix(in srgb, ${tone('var-a')} 10%, var(--bg))`, stroke: tone('ink') }} />
      {Array.from({ length: 27 }, (_, i) => <circle key={i} cx={58 + (i % 3) * 37} cy={36 + Math.floor(i / 3) * 25} r={11} style={{ fill: `color-mix(in srgb, ${tone('var-b')} 30%, var(--bg))`, stroke: tone('muted'), strokeDasharray: '3 2' }} />)}
      <path d="M 160 20 q 12 0 12 12 l 0 206 q 0 12 -12 12" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <Label x={180} y={250} anchor="start" size={13}><Sb b="V" s="t" p=" (= πr²h): hele kolonnen" /></Label>
      <Label x={240} y={40} anchor="start" t="var-a" size={13}><Sb b="V" s="0" p=": mellom partiklene (mMF)" /></Label>
      <Label x={240} y={80} anchor="start" t="var-b" size={13}><Sb b="V" s="i" p=": inne i porene (sMF = «SF»)" /></Label>
      <Label x={240} y={120} anchor="start" size={13}><Sb b="V" s="m" p=": gelmatriksen" /></Label>
      <rect x={236} y={180} width={200} height={34} rx={6} style={{ fill: 'none', stroke: tone('intuition'), strokeWidth: 2 }} />
      <Label x={336} y={202} size={14}><Sb b="V" s="t" p=" = " /><Sb b="V" s="0" p=" + " /><Sb b="V" s="i" p=" + " /><Sb b="V" s="m" /></Label>
    </Svg>
  )
}

/* Calibration curve with fractionation range */
function Kalibrering() {
  const X = (v) => 70 + v * 300, Y = (lm) => 230 - (lm - 2) * 40 // log M 2..7
  return (
    <Svg w={460} h={330} label="Kalibreringskurve og fraksjoneringsområde">
      <line x1={70} y1={30} x2={70} y2={230} style={{ stroke: tone('ink') }} />
      <line x1={70} y1={230} x2={440} y2={230} style={{ stroke: tone('ink') }} />
      {[2, 3, 4, 5, 6, 7].map((l) => <Label key={l} x={62} y={Y(l) + 4} anchor="end" size={11}>10{['²', '³', '⁴', '⁵', '⁶', '⁷'][l - 2]}</Label>)}
      <Label x={74} y={26} anchor="start" size={12}>log(molmasse)</Label>
      <rect x={X(0.15)} y={Y(Math.log10(5e5))} width={X(0.85) - X(0.15)} height={Y(3) - Y(Math.log10(5e5))} style={{ fill: `color-mix(in srgb, ${tone('intuition')} 14%, transparent)` }} />
      <line x1={X(0.15)} y1={Y(6.8)} x2={X(0.15)} y2={Y(Math.log10(5e5))} style={{ stroke: tone('var-a'), strokeWidth: 2.5 }} />
      <line x1={X(0.15)} y1={Y(Math.log10(5e5))} x2={X(0.85)} y2={Y(3)} style={{ stroke: tone('topic'), strokeWidth: 2.5 }} />
      <line x1={X(0.85)} y1={Y(3)} x2={X(0.85)} y2={Y(2.2)} style={{ stroke: tone('var-b'), strokeWidth: 2.5 }} />
      <Label x={X(0.15) + 6} y={Y(Math.log10(5e5)) - 6} anchor="start" size={11}>eksklusjonsgrense ~5·10⁵ (K = 0)</Label>
      <Label x={X(0.85) - 6} y={Y(3) + 16} anchor="end" size={11}>permeasjonsgrense ~10³ (K = 1,0)</Label>
      <Label x={X(0.5)} y={Y(4.3)} t="intuition" size={12}>fraksjoneringsområde</Label>
      <Label x={X(0.15)} y={246} t="var-a" size={12}><Sb b="V" s="0" /></Label>
      <Label x={X(0.85)} y={246} t="var-b" size={12}><Sb b="V" s="0" p=" + " /><Sb b="V" s="i" /></Label>
      <line x1={70} y1={300} x2={440} y2={300} style={{ stroke: tone('ink') }} />
      {[['A', 0.15], ['B', 0.4], ['C', 0.65], ['D', 0.85]].map(([n, v]) => (
        <g key={n}>
          <Curve t="topic" points={[[X(v) - 12, 300], [X(v) - 4, 292], [X(v), 262], [X(v) + 4, 292], [X(v) + 12, 300]]} />
          <Label x={X(v)} y={318} size={12}>{n}</Label>
        </g>
      ))}
      <Label x={440} y={246} anchor="end" size={12}><Sb b="V" s="e" /></Label>
    </Svg>
  )
}

/* Pore-size family */
function Porer() {
  const X = (v) => 60 + v * 330, Y = (lm) => 220 - (lm - 2) * 36
  const pores = ['5 nm', '10 nm', '50 nm', '100 nm', '1 µm', '10 µm', '100 µm']
  return (
    <Svg w={460} h={260} label="Porestørrelse og fraksjoneringsområde">
      <line x1={60} y1={20} x2={60} y2={220} style={{ stroke: tone('ink') }} />
      <line x1={60} y1={220} x2={430} y2={220} style={{ stroke: tone('ink') }} />
      {pores.map((p, i) => {
        const hi = 3.2 + i * 0.6, lo = hi - 1.6
        return (
          <g key={p}>
            <polyline points={`${X(0.1)},${Y(hi + 0.5)} ${X(0.1)},${Y(hi)} ${X(0.9)},${Y(lo)} ${X(0.9)},${Y(lo - 0.4)}`} style={{ fill: 'none', stroke: tone(['var-a', 'var-b', 'var-c', 'var-d', 'var-e', 'var-f', 'topic'][i]), strokeWidth: 2 }} />
            <Label x={X(0.92)} y={Y(lo) + 4} anchor="start" size={10}>{p}</Label>
          </g>
        )
      })}
      <Label x={66} y={18} anchor="start" size={12}>log M</Label>
      <Label x={X(0.1)} y={238} size={12}><Sb b="V" s="0" /></Label>
      <Label x={X(0.9)} y={238} size={12}><Sb b="V" s="0" p=" + " /><Sb b="V" s="i" /></Label>
      <Label x={245} y={256} size={11}>større porer → området flyttes opp i molmasse</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Store først, små sist">
        <MentalModel cite={`[${S}, slide 1–4; ${B1}, p. 76–77; ${LF24}, p. 9]`}>
          SEC (size exclusion chromatography) samler alle metodene som baserer seg på molekylstørrelse og <T text="$M_w$." /> SF består av en porøs struktur med en definert porestørrelse, og porene er fylt med stillestående mobilfase.{' '}
          Store molekyler får ikke plass i porene og går den korteste veien, mellom partiklene. De eluerer først, ved <V c="a">V₀</V>. Små molekyler kommer inn i alle porene og bruker lengst tid, til <V c="a">V₀</V> + <V c="b">Vᵢ</V>. Mellomstore kommer inn i noen av porene og havner imellom.{' '}
          Siden <V c="c">elueringsvolumet</V> henger sammen med størrelse, og innenfor et område med log M, kan en kalibreringskurve med standarder brukes til å estimere molekylvekten til et ukjent protein. Alt eluerer innenfor ett kolonnevolum, så separasjonsvinduet er smalt, og porestørrelsen må velges slik at fraksjoneringsområdet passer prøven.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="SEC / gelfiltrering / gelpermeasjon" cite={`[${S}, slide 1; ${B1}, p. 76]`}>Gelfiltrering har vandig MF/SF (vann/buffer). Gelpermeasjon (GPC) har SF/MF i et organisk løsemiddel.</Def>
            <Def term="SF i SEC" cite={`[${S}, slide 1–2]`}>Porøs struktur med definert porestørrelse. SF er den «stillestående» mobilfasen i porene (sMF). Store molekyler ekskluderes fra alle porene og retarderes ikke. Mellomstore passer i noen av porene og retarderes. Små molekyler (mindre enn porene) bruker maks tid.</Def>
          </div>
          <div>
            <Diagram title="Tre molekylstørrelser gjennom kolonnen" cite={`[${S}, slide 1]`}>
              <TreStorrelser />
            </Diagram>
            <Diagram title="Proteinstandarder" caption="Glutamatdehydrogenase (290 000), laktatdehydrogenase (140 000), enolase (67 000), adenylatkinase (32 000) og cytokrom c (12 400) eluerer i den rekkefølgen." cite={`[${S}, slide 1]`}>
              <Standarder />
            </Diagram>
          </div>
        </Columns>
        <Def term="Lage SF" cite={`[${S}, slide 2]`}>(1) svelle en naturlig (bio)polymer i vann/buffer, eller (2) fylle porene i en stiv syntetisk polymer med et organisk løsemiddel.</Def>
        <Def term="HPLC-SEC vs. lavtrykkskolonner" cite={`[${S}, slide 2]`}>HPLC-egnede materialer er hardt faststoff og trykkstabile (noe begrenset trykk). Myke, svellbare polymerkjeder brukes i lavtrykkskolonner med lite trykkfasthet.</Def>

        <Columns>
          <div>
            <Def term="Volumer i SEC" cite={`[${S}, slide 3]`}>{'$V_t$ = totalvolum ($= \\pi r^2 h$). $V_0$ = void-volum, volumet «rundt» partiklene = mobil MF (utenompartikkel-MF, interstitiell eller interpartikkel-MF). $V_i$ = volum av MF inne i partiklene = stillestående MF (innompartikkel-, intrastitiell eller intrapartikkel-MF), dvs. «SF». $V_m$ = volum av gelmatriks (≈ $V_{tørr\\,gel}$).'}</Def>
            <Def term="Eluering" cite={`[${S}, slide 3; ${B1}, p. 76]`}>{'Store molekyler: $V_e = V_0$ ($K = 0$). Små molekyler: $V_e = V_0 + V_i$ ($K = 1{,}0$). Mellomstore: $V_e = V_0 + K\\cdot V_i$.'}</Def>
          </div>
          <Diagram title="Volumdefinisjoner" cite={`[${S}, slide 3]`}>
            <Volumer />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Fordelingskoeffisient i SEC ($K$)" cite={`[${B1}, p. 76]`}>{'Begrenset til verdier mellom 0 og 1. Innenfor et begrenset område er $K$ en funksjon av molekylmassen ($K = A - B\\log M$). For proteiner er $M$ størrelsen på det solvatiserte molekylet, gitt som Stokes-radius.'}</Def>
            <Def term="Eksklusjonsgrense og permeasjonsgrense" cite={`[${S}, slide 3; ${PRO}, p. 3]`}>{'Eksklusjonsgrensen er molmassen der alt større ekskluderes ($K = 0$, eksempel ~5·10⁵). Permeasjonsgrensen er molmassen der alt mindre trenger inn i alle porer ($K = 1$, eksempel ~10³). Prosjektoppgaven spør nettopp hvordan disse finnes, altså start og slutt på separasjonen.'}</Def>
            <Def term="Fraksjoneringsområdet" cite={`[${S}, slide 3; ${LF25}, oppg. 3]`}>Området mellom eksklusjons- og permeasjonsgrensen, der kalibreringskurven er lineær («selektivt permeasjonsområde»). Løsningsforslaget definerer det som størrelsesområdet der forbindelser faktisk kan separeres, særlig i SEC/GPC, der det angir hvilke molekylstørrelser gelen gir effektiv separasjon for.</Def>
          </div>
          <Diagram title="Kalibreringskurve og fraksjoneringsområde" caption="Under: topp A ved $V_0$, B og C i området og D ved $V_0 + V_i$." cite={`[${S}, slide 3; ${B1}, p. 76, Fig. 3.19]`}>
            <Kalibrering />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Porestørrelsen bestemmer fraksjoneringsområdet" cite={`[${S}, slide 4; ${B1}, p. 77]`}>{'Kolonnespesifikke kalibreringskurver ($\\log M$ mot $V_e$) for porestørrelser fra 5 nm til 100 µm, alle mellom $V_0$ og $V_0 + V_i$. Materialer finnes med porestørrelse fra 6 til 100 nm, og riktig porestørrelse er viktig.'}</Def>
            <Def term="Kolonnetabell (eksempel)" cite={`[${S}, slide 4]`}>PolyPore (øvre grense 2 000 000 Da), ResiPore (500 000 Da), MesoPore (25 000 Da) og OligoPore (3300 Da), med maks trykk 150 bar.</Def>
          </div>
          <Diagram title="Porestørrelse → fraksjoneringsområde" caption="Kurveskisse: større porer flytter det lineære området opp i molmasse." cite={`[${S}, slide 4]`}>
            <Porer />
          </Diagram>
        </Columns>

        <Def term="Matrikstyper i SEC" cite={`[${S}, slide 4–6; ${B1}, p. 76]`}>(1) <strong>Syntetiske polymerer («resiner»)</strong>: polystyren kryssbundet med divinylbenzen (PS-DVB). (2) <strong>Karbohydratbaserte, «bløte» geler</strong>: f.eks. dekstran kryssbundet med epiklorhydrin (Sephadex). (3) <strong>Polyakrylamid</strong>: akrylamid kryssbundet med N,N&apos;-metylen-bis-akrylamid. Boka: før HPLC ble gelfiltrering gjort på dekstraner, agaroser, polyakrylamider eller polystyrener. De fleste tåler ikke trykket fra små partikler, så moderne SEC-materialer er silika- eller polystyrenbaserte.</Def>
        <Def term="Sephadex-tabell (forelesning)" cite={`[${S}, slide 7]`}>G-10 ≤ 700, G-25 1000–5000, G-50 1500–30 000, G-75 3000–80 000, G-100 4000–150 000 og G-200 5000–600 000 (fraksjoneringsområde for globulære proteiner, Da). Høyere G-tall gir lavere maks trykk (G-200: 16 cm H₂O).</Def>
        <Def term="Sephadex G-100 DNA Grade (produktark)" cite={`[${SEP}, p. 1]`}>Tørr partikkelstørrelse 20–50 µm. Fraksjoneringsområde 4000–10 000 (globulære proteiner). Svelletid 72 t ved 20 °C eller 5 t ved 90 °C. Ionestyrke ≥ 0,02 anbefales mot ioniske interaksjoner med gelmatriksen. Forelesningstabellen gir 4000–150 000 for vanlig G-100, så tallene gjelder ulike produkter.</Def>
        <Avvik>Sephadex G-100 fraksjoneringsområde 4000–10 000 (manual) vs. 4000–150 000 (forelesning).</Avvik>
        <Def term="MF i SEC" cite={`[${B1}, p. 77]`}>Velges etter analyttenes løselighet (organisk eller vandig). Med vandig MF er det alltid fare for hydrofobe eller ioniske interaksjoner, og salt eller organisk løsemiddel kan redusere dem.</Def>
        <Def term="Bruk av SEC" cite={`[${S}, slide 7; ${B1}, p. 77]`}>{'Proteinrensing og fjerning av salter og ioner (avsalting). Ofte nødvendig før elektroforese, IEC og affinitetskromatografi. Estimere ukjent masse på et protein ($\\log M_w$ mot $V_e$). I polymerindustrien er SEC den vanligste separasjonsmetoden for massefordeling.'}</Def>
        <Def term="Begrensning" cite={`[${B1}, p. 77]`}>Smalt separasjonsvindu, så toppkapasiteten er lav (typisk 10–20).</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="vt" />
        <Eq id="ve" />
        <Plot
          title="Elueringsvolum vs. K: $V_e = V_0 + K\cdot V_i$"
          caption="Verdier fra H25 oppg. 7: $V_0$ = 7 mL, $V_t$ = 20 mL. $V_i$ ≈ 13 mL er antatt ($V_m$ neglisjert, ikke oppgitt i oppgaven); slideren lar deg se hvordan $K$ endres hvis $V_m$ ikke er null. Stiplet: proteinet (9,5 mL) og peptidet (14,8 mL). Hold musen over linjen for å lese $K$ ved et gitt $V_e$."
          cite={`[${E25}, oppg. 7; ${B1}, p. 76, lign. 3.6]`}
          x={{ min: 0, max: 1, label: 'K' }}
          y={{ label: 'Ve (mL)', min: 0, max: 22 }}
          params={[{ key: 'Vi', label: '$V_i$', min: 10, max: 13, step: 0.1, value: 13, unit: 'mL' }]}
          series={[{ key: 've', label: 'Ve', t: 'var-c', fn: (K, p) => 7 + K * p.Vi }]}
          marks={[{ y: 9.5, label: 'protein 9,5 mL' }, { y: 14.8, label: 'peptid 14,8 mL' }, { y: 7, label: 'V₀' }]}
        />
        <Eq id="k" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 7: protein og peptid på SEC (6 p)"
          given="Gitt: protein $V_e$ = 9,5 mL, peptid $V_e$ = 14,8 mL, $V_t$ = 20 mL, $V_0$ = 7 mL. Ingen ionebytte- eller adsorpsjonsinteraksjoner."
          steps={[
            { title: 'a) Hva skiller SEC fra andre teknikker?', body: 'SEC separerer utelukkende på hydrodynamisk størrelse, via hvor mye analytten kan trenge inn i porevolumet. Ideelt sett er det ingen likevektsfordeling eller adsorpsjon. Større molekyler ekskluderes mer og får kortere oppholdstid.' },
            { title: 'b) Hvilken analytt er størst? Sammenlign med $V_0$:', body: 'proteinet (9,5 mL) ligger nærmere $V_0$ (7 mL) enn peptidet (14,8 mL).' },
            { body: 'Lavere $V_e$ betyr at analytten går inn i færre porer (mer ekskludert) og eluerer tidligere.' },
            { title: 'Svar:', body: 'Proteinet er størst.' },
            { title: 'c) Hvor eluerer et veldig stort protein?', body: 'Det ekskluderes i stor grad fra porene og får minimal ekstra «vei» gjennom porevolumet.' },
            { title: 'Svar:', body: 'Nær $V_0$.' },
            { title: 'Utvidelse (ikke spurt om, og ikke i LF):', body: 'Anta $V_m$ ≈ 0, så $V_i \\approx V_t - V_0 = 13$ mL.' },
            { body: '$K_{protein} = (9{,}5 - 7)/13 \\approx 0{,}19$ og $K_{peptid} = (14{,}8 - 7)/13 \\approx 0{,}60$. Begge ligger mellom 0 og 1, altså innenfor fraksjoneringsområdet.' },
          ]}
          cite={`[${E25}, oppg. 7; ${LF25}, oppg. 7]`}
        />
        <FadedExample
          title="H24 oppg. 1(j): Mw-estimering og SF-materialer (5 p)"
          given="i) Hvordan kan SEC estimere molekylvekten til en polymer? ii) Tre egenskaper som skiller SF-materialer."
          steps={[
            { title: 'Separasjonsprinsipp:', body: 'store molekyler kan ikke diffundere inn i porene og eluerer raskere. Små diffunderer inn og bruker lengre tid.' },
            { title: 'Hva korrelerer med molekylstørrelsen?', body: 'Elusjonsvolumet.', hidden: true },
            { title: 'Hvordan lages kalibreringskurven?', body: 'Standarder med kjente molekylvekter kjøres, og elusjonsvolumet registreres for hver ($\\log M$ mot $V_e$).', hidden: true },
            { title: 'Hvordan finnes ukjent Mw?', body: 'Prøvens elusjonsvolum sammenlignes med kalibreringskurven. Det må ligge innenfor fraksjoneringsområdet.', hidden: true },
            { title: 'ii) Porøsitet og porestørrelse →', body: 'bestemmer hvilke molekyler som kan diffundere inn, og må matche analyttstørrelsen.', hidden: true },
            { title: 'Kjemisk sammensetning →', body: 'polysakkarider (dekstran, agarose) for biopolymerer, PS/DVB for organiske molekyler og polymerer i organiske løsemidler, silika for høyt trykk.', hidden: true },
            { title: 'Kjemisk og mekanisk stabilitet →', body: 'agarose og dekstran er mindre stabile ved ekstrem pH eller høyt trykk, PS-baserte tåler organiske løsemidler og høyere trykk, og silika er svært mekanisk stabil, men løses opp ved høy pH.', hidden: true },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(j); ${LF24}, p. 9–10]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Rekkefølgen snudd" cite={`[${S}, slide 1]`}>I SEC eluerer <em>store</em> molekyler først. Det er motsatt intuisjonen om at «store sitter fast».</Trap>
        <Trap title="Lav $V_e$ = lite molekyl" cite={`[${LF25}, oppg. 7b]`}>{'Feil. Lav $V_e$ (nær $V_0$) betyr stort molekyl.'}</Trap>
        <Trap title="$K$ utenfor 0–1" cite={`[${B1}, p. 76–77]`}>{'I ideell SEC er $0 \\le K \\le 1$. Eluerer noe etter $V_0 + V_i$, skyldes det interaksjoner (hydrofobe eller ioniske) med SF, ikke størrelse.'}</Trap>
        <Trap title="Mw utenfor fraksjoneringsområdet" cite={`[${S}, slide 3]`}>{'Alt over eksklusjonsgrensen eluerer ved $V_0$, og alt under permeasjonsgrensen ved $V_0 + V_i$. Da kan ikke Mw bestemmes.'}</Trap>
        <Trap title="SEC-$K$ forveksles med $k$" cite={`[${S}, slide 3; ${B1}, p. 76]`}>{'Fordelingskoeffisienten $K$ i SEC (0–1, andel tilgjengelig porevolum) er ikke retensjonsfaktoren $k$ fra side 01. Forelesningsnotatet skriver «k» i $V_e = V_0 + k\\cdot V_i$, men boka bruker $K$.'}</Trap>
        <Trap title="Ingen salt i vandig MF" cite={`[${SEP}, p. 1; ${B1}, p. 77]`}>Uten ionestyrke ≥ 0,02 kan ioniske interaksjoner med gelmatriksen forstyrre.</Trap>
        <Trap title="Proteiners «størrelse»" cite={`[${B1}, p. 76]`}>{'For proteiner er det størrelsen på det solvatiserte molekylet (Stokes-radius) som teller, ikke bare $M$.'}</Trap>
      </Section>
    </>
  )
}
