import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Box, Arrow, Label, Plot, Columns, V, T, tone } from '../components'

const MS = 'Forelesning_MS_u_notater.pdf'
const MSP = 'MSproteiner2026.pdf'
const PK = 'Proteinkarakterisering del 1 m notater.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'

export const meta = {
  title: 'MS: ioniseringsteknikker',
  topic: 'ms',
  examWeight: { level: 'low', note: 'H24 1(b) flervalg (hvilken ionisering brukes oftest i LC-MS: ESI), H24 1(c) (forklar ESI, 2 p). Ikke spurt på H25' },
  examTasks: [
    'H2024: definisjoner ESI (index: side 14)',
    'H2024 oppg. 1(b) (flervalg, 1 av 5 delspørsmål): hvilken ioniseringsmetode brukes oftest i LC-MS (ESI).',
    'H2024 oppg. 1(c) (10 p totalt, 2 p hører hit): forklar kort «ESI».',
  ],
  buildsOn: ['06-hplc-detektorer', '13-gc-detektorer'],
  usedIn: ['15-ms-analysatorer-og-detektorer', '16-ms-proteiner'],
  sources: [
    `[${MS}, slide 2–6] (bare figurer, ingen notater. Slide 1 viser instrumenter og et EI-spekter)`,
    `[${MSP}, slide 3–7]`,
    `[${PK}, slide 7–11]`,
    `[${B1}, p. 33] (p. = boksidetall; PDF-side = bokside + 16)`,
    `[${B2}, p. 85–91] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(b), 1(c)] / [${LF24}, p. 3–4]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilken ioniseringsmetode brukes oftest i LC-MS?', a: `Elektrosprayionisering (ESI) [${LF24}, p. 3, oppg. 1(b)].` },
    { id: 'p2', kind: 'pretest', q: 'Hva er forskjellen på «hard» og «myk» ionisering?', a: `Hvor mye molekylet fragmenteres. EI er hard (mye fragmentering), mens ESI og CI er myke [${MSP}, slide 4–5; ${B1}, p. 33].` },
    { id: 'p3', kind: 'pretest', q: 'Lidokain har M = 234. Hvilken m/z ser du i positiv ESI?', a: `$[M+H]^+$ = 235 [${B2}, p. 87].` },
    { id: 't1', q: 'Beskriv ESI-prosessen i tre trinn.', a: `(1) MF sprayes fra en kapillær med høy spenning, og det dannes sterkt ladde dråper (forstøvningsgass hjelper). (2) Løsemiddelet fordamper og dråpene krymper. (3) Når frastøtningen overstiger overflatespenningen, eksploderer dråpen gjentatte ganger til ionene er i gassfase [${B2}, p. 86–87].` },
    { id: 't2', q: 'Hvorfor kan ikke testosteron ioniseres med ESI, og hva brukes i stedet?', a: `Den har ingen sure eller basiske grupper. APCI gir $[M+H]^+$ = 289 [${B2}, p. 89].` },
    { id: 't3', q: 'Hva er hensikten med matriksen i MALDI?', a: `Den absorberer UV-laserlyset og overfører energi og protoner, slik at proteinene desorberes og ioniseres skånsomt [${PK}, slide 9; ${MS}, slide 6].` },
    { id: 't4', q: 'Når foretrekkes CI fremfor EI i GC-MS?', a: `Når man trenger informasjon om molekylmassen. CI er mykere og gir tydelig $MH^+$ med få fragmenter [${B1}, p. 33].` },
    { id: 't5', q: 'Hva brukes ICP-MS til?', a: `Grunnstoff- og metallanalyse, f.eks. toksikologi og miljø. Spektrene viser isotopmassene til grunnstoffene [${B2}, p. 90–91].` },
  ],
  equations: [
    {
      id: 'mz', label: 'm/z i ESI',
      tex: String.raw`\begin{gathered}\frac{m}{z} = \frac{\va{M} + \vb{n}\cdot m_H}{\vb{n}} \;\;(\text{positiv: } [M+nH]^{n+}) \\ \frac{m}{z} = \frac{\va{M} - \vb{n}\cdot m_H}{\vb{n}} \;\;(\text{negativ: } [M-nH]^{n-})\end{gathered}`,
      vars: [
        { sym: String.raw`\va{M}`, desc: 'monoisotopisk masse til forbindelsen', unit: String.raw`\mathrm{Da}` },
        { sym: 'm_H', desc: 'massen til et proton (≈ 1)', unit: String.raw`\mathrm{Da}` },
        { sym: String.raw`\vb{n}`, desc: 'antall protoner tatt opp eller avgitt (= ladning z)', unit: '–' },
      ],
      note: 'Oftest er n = 1 for små molekyler.',
      cite: `[${B2}, p. 87–88]`,
      check: { status: 'verified', note: 'Bok del 2 p. 87 (PDF s. 3) definerer [M + nH]ⁿ⁺ og [M − nH]ⁿ⁻ i tekst, med eksemplene (234 + 1)/1 = 235 og (138 − 1)/1 = 137; p. 88: (1673 + 3)/3 = 558,7. Brøkformen er ikke trykt generelt, men følger eksemplene.' },
    },
    {
      id: 'apci', label: 'APCI-reaksjonskaskade',
      tex: String.raw`\begin{gathered}N_2 + e^- \rightarrow N_2^{+\bullet} + 2e^- \;\rightarrow\; \ldots \\ H_3O^+ + M \rightarrow H_2O + [M+H]^+ \\ OH^- + M \rightarrow H_2O + [M-H]^-\end{gathered}`,
      vars: [],
      cite: `[${B2}, p. 88, Fig. 3.32]`,
      check: { status: 'verified', note: 'Bok del 2 Fig. 3.32 (PDF s. 4) viser kaskaden N₂ → N₂⁺• → N₄⁺• → H₂O⁺• → H₃O⁺ + OH• og de to sluttreaksjonene, identisk.' },
    },
    {
      id: 'appi', label: 'APPI',
      tex: String.raw`\begin{gathered}M + h\nu \rightarrow M^{+\bullet} + e^- \\ M^{+\bullet} + S \rightarrow [M+H]^+ + (S-H)^\bullet\end{gathered}`,
      vars: [],
      note: 'Med dopant D: $D + h\\nu \\rightarrow D^{+\\bullet}$, så $D^{+\\bullet} + S \\rightarrow [S+H]^+$, og $M + [S+H]^+ \\rightarrow [M+H]^+ + S$.',
      cite: `[${B2}, p. 90, Fig. 3.34]`,
      check: { status: 'mismatch', note: 'Bok del 2 Fig. 3.34 (PDF s. 6) skriver M⁺• + S → [M+H]⁺ + (S−H)⁻ (tegnet ser ut som minus, ikke radikalprikk), og D⁺• + S → [S+H]⁺ + (D−H)•; innholdet utelater (D−H)• i dopant-trinnet.' },
    },
  ],
}

const Ell = ({ cx, cy, rx, ry, t, lab }) => (
  <g>
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} style={{ fill: `color-mix(in srgb, ${tone(t)} 15%, transparent)`, stroke: tone(t), strokeWidth: 2 }} />
    <Label x={cx} y={cy + 5} t={t} size={14}>{lab}</Label>
  </g>
)

/* Choose LC-MS interface: polarity vs mass */
function Interface() {
  return (
    <Svg w={460} h={290} label="Velg LC-MS-interface">
      <Arrow x1={50} y1={250} x2={440} y2={250} />
      <Arrow x1={50} y1={250} x2={50} y2={20} />
      <Label x={60} y={268} anchor="start" size={12}>upolar</Label>
      <Label x={440} y={268} anchor="end" size={12}>polar</Label>
      <Label x={56} y={22} anchor="start" size={12}>molekylmasse (log)</Label>
      {['100', '1000', '10 000+'].map((m, i) => <Label key={m} x={44} y={230 - i * 90} anchor="end" size={11}>{m}</Label>)}
      <Ell cx={120} cy={210} rx={70} ry={34} t="var-c" lab="APPI" />
      <Ell cx={215} cy={185} rx={90} ry={50} t="var-e" lab="APCI" />
      <Ell cx={350} cy={140} rx={80} ry={110} t="var-a" lab="ESI" />
    </Svg>
  )
}

/* ESI process */
function ESI() {
  const drop = (cx, cy, r, n) => (
    <g>
      <circle cx={cx} cy={cy} r={r} style={{ fill: `color-mix(in srgb, ${tone('definition')} 18%, var(--bg))`, stroke: tone('definition') }} />
      {Array.from({ length: n }, (_, i) => { const a = (i / n) * 2 * Math.PI; return <Label key={i} x={cx + (r - 5) * Math.cos(a)} y={cy + 4 + (r - 5) * Math.sin(a)} size={9} t="trap">+</Label> })}
    </g>
  )
  return (
    <Svg w={460} h={250} label="ESI-prosessen">
      <rect x={10} y={110} width={90} height={20} style={{ fill: `color-mix(in srgb, ${tone('muted')} 40%, var(--bg))`, stroke: tone('ink') }} />
      <path d="M 100 110 L 130 120 L 100 130 Z" style={{ fill: tone('definition'), opacity: 0.5 }} />
      <Label x={55} y={102} size={11}>kapillær +5 kV</Label>
      <Label x={55} y={150} size={10}>MF inn →</Label>
      <Label x={130} y={196} size={10}>Taylor-kjegle</Label>
      {drop(175, 120, 22, 10)}
      <Label x={175} y={160} size={10}>foreldre-</Label>
      <Label x={175} y={172} size={10}>dråpe</Label>
      {drop(245, 120, 15, 10)}
      <Label x={245} y={160} size={10}>fordamping</Label>
      <Label x={245} y={176} size={10}>(krymper)</Label>
      {drop(305, 100, 8, 3)}{drop(318, 130, 8, 3)}{drop(298, 142, 7, 3)}
      <Label x={310} y={176} size={10}>Coulomb-fisjon</Label>
      <Label x={310} y={190} size={10}>(Rayleigh-grense)</Label>
      {[[370, 105], [385, 130], [372, 145], [395, 112]].map(([x, y], i) => <Label key={i} x={x} y={y} t="trap" size={13}>⊕</Label>)}
      <Label x={385} y={204} size={10}>«nakne» ioner</Label>
      <Box x={420} y={100} w={36} h={40} label="MS" t="ink" />
      <Arrow x1={10} y1={70} x2={130} y2={70} t="muted" />
      <Label x={70} y={62} size={10}>forstøvningsgass (N₂)</Label>
      <Arrow x1={400} y1={220} x2={200} y2={220} t="muted" />
      <Label x={300} y={240} size={10}>tørkegass motstrøms</Label>
    </Svg>
  )
}

/* APCI source */
function APCI() {
  return (
    <Svg w={460} h={250} label="APCI-kilden">
      <rect x={20} y={90} width={170} height={30} rx={6} style={{ fill: `color-mix(in srgb, ${tone('trap')} 18%, var(--bg))`, stroke: tone('trap') }} />
      <Label x={105} y={110} size={11}>oppvarmet spraynål 400–500 °C</Label>
      <Arrow x1={0} y1={105} x2={20} y2={105} />
      <Label x={20} y={80} anchor="start" size={10}>analyttstrøm + forstøvningsgass</Label>
      <ellipse cx={240} cy={105} rx={45} ry={30} style={{ fill: tone('muted'), opacity: 0.3 }} />
      <Label x={240} y={109} size={10}>dampsky</Label>
      <line x1={250} y1={200} x2={265} y2={140} style={{ stroke: tone('var-e'), strokeWidth: 4 }} />
      <Label x={255} y={218} t="var-e" size={11}>korona-nål</Label>
      <path d="M 330 60 L 380 105 L 330 150" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 3 }} />
      <Label x={360} y={170} size={11}>cone → MS</Label>
      <Arrow x1={290} y1={105} x2={370} y2={105} t="trap" />
      <Label x={330} y={98} t="trap" size={10}>ioner</Label>
      <Label x={10} y={20} anchor="start" size={11}>N₂ + e⁻ → N₂⁺• → … → H₃O⁺ + M → [M+H]⁺</Label>
      <Label x={10} y={38} anchor="start" size={11}>OH⁻ + M → [M−H]⁻</Label>
    </Svg>
  )
}

/* EI vs CI spectra for M = 200 */
function EICI() {
  const X = (mz) => 40 + (mz / 210) * 400
  const bars = (y, list, t) => list.map(([mz, h]) => (
    <g key={mz}>
      <line x1={X(mz)} y1={y} x2={X(mz)} y2={y - h} style={{ stroke: tone(t), strokeWidth: 4 }} />
      <Label x={X(mz)} y={y - h - 4} size={10}>{mz}</Label>
    </g>
  ))
  return (
    <Svg w={460} h={270} label="EI vs. CI-spekter">
      <Label x={10} y={20} anchor="start" size={12}>EI (70 eV): mange fragmenter, nesten ikke M⁺•</Label>
      <line x1={40} y1={110} x2={440} y2={110} style={{ stroke: tone('ink') }} />
      {bars(110, [[43, 80], [55, 60], [61, 50], [97, 40], [200, 4]], 'var-a')}
      <Label x={10} y={150} anchor="start" size={12}>CI (metan): tydelig [M+H]⁺ = 201</Label>
      <line x1={40} y1={240} x2={440} y2={240} style={{ stroke: tone('ink') }} />
      {bars(240, [[123, 20], [141, 30], [201, 80]], 'var-b')}
      <Label x={440} y={262} anchor="end" size={11}>m/z</Label>
    </Svg>
  )
}

/* EI source */
function EIKilde() {
  return (
    <Svg w={460} h={200} label="EI- og CI-kilde">
      <rect x={140} y={40} width={180} height={120} rx={8} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <Box x={170} y={10} w={120} h={22} label="magnet" t="muted" rx={4} />
      <Box x={170} y={168} w={120} h={22} label="magnet" t="muted" rx={4} />
      <Label x={110} y={104} anchor="end" size={11}>filament</Label>
      <Arrow x1={140} y1={100} x2={320} y2={100} t="var-c" />
      <Label x={230} y={92} t="var-c" size={11}>e⁻ 70 eV</Label>
      <Arrow x1={230} y1={150} x2={230} y2={110} t="muted" />
      <Label x={236} y={145} anchor="start" size={10}>prøve (gass)</Label>
      <Label x={150} y={130} anchor="start" size={10}>repeller</Label>
      <Arrow x1={320} y1={130} x2={420} y2={130} t="trap" />
      <Label x={430} y={120} anchor="end" t="trap" size={10}>M⁺• → analysator</Label>
      <Label x={10} y={190} anchor="start" size={10}>CI: samme, men reagensgassinnløp og mer lukket kilde</Label>
    </Svg>
  )
}

/* MALDI */
function MALDI() {
  return (
    <Svg w={460} h={230} label="MALDI">
      <rect x={20} y={180} width={260} height={18} style={{ fill: tone('muted'), opacity: 0.6 }} />
      <Label x={150} y={216} size={11}>target-plate</Label>
      {Array.from({ length: 12 }, (_, i) => <circle key={i} cx={40 + i * 20} cy={172} r={6} style={{ fill: i % 3 === 1 ? tone('var-e') : tone('intuition') }} />)}
      <Arrow x1={40} y1={30} x2={140} y2={160} t="var-c" />
      <Label x={60} y={26} t="var-c" size={11}>UV-laser</Label>
      <ellipse cx={170} cy={120} rx={50} ry={26} style={{ fill: tone('muted'), opacity: 0.25 }} />
      <Label x={170} y={124} size={10}>desorpsjon</Label>
      <Label x={250} y={100} size={11}>H⁺: matriks → analytt</Label>
      <Arrow x1={220} y1={120} x2={380} y2={120} t="trap" />
      <Label x={320} y={140} t="trap" size={11}>[M+H]⁺</Label>
      <Box x={380} y={98} w={70} h={44} label="TOF" sub="analysator" t="ink" />
      <circle cx={300} cy={180} r={6} style={{ fill: tone('intuition') }} /><Label x={312} y={184} anchor="start" size={10}>matriks</Label>
      <circle cx={370} cy={180} r={6} style={{ fill: tone('var-e') }} /><Label x={382} y={184} anchor="start" size={10}>analytt</Label>
    </Svg>
  )
}

const stick = (x, c) => Math.exp(-((x - c) ** 2) / (2 * 3 * 3))

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Først ioner, så vekt">
        <MentalModel cite={`[${MSP}, slide 3–4; ${MS}, slide 4; ${B1}, p. 33; ${B2}, p. 85–90; ${PK}, slide 9]`}>
          Et massespektrometer kan bare veie ioner i gassfase. Første trinn er derfor å lage ioner, deretter separere dem og så detektere dem som m/z. Ioniseringsmetoden bestemmes av hvor prøven kommer fra og hva den er.{' '}
          <strong>GC</strong>: analyttene er allerede flyktige og i gassfase, så de kan bombarderes med elektroner i vakuum (EI) eller ioniseres skånsomt via en reagensgass (CI). <strong>LC</strong>: væsken må fordampes og analytten ioniseres ved atmosfæretrykk. Polare og ladede molekyler sprayes ut som ladde dråper (ESI). Mindre polare fordampes og ioniseres via en korona-nål (APCI) eller UV-lys (APPI). <strong>Store biomolekyler</strong>: kan også skytes ut fra en krystallmatriks med laser (MALDI).{' '}
          Myke metoder gir hele molekylionet (<T text="$[M+H]^+$" />), som forteller <V c="a">molekylmassen</V>. Harde metoder gir fragmenter, som forteller strukturen.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Hensikt med MS" cite={`[${MSP}, slide 3; ${MS}, slide 4]`}>Bestemme vekten av et molekyl. Danner ioner ved ionisering, separerer ionene og detekterer dem som m/z. Tre trinn: ionisering → analyse/separering → deteksjon.</Def>
        <Def term="Ioniseringsmetoder (oversikt)" cite={`[${MSP}, slide 4]`}>ESI, EI, AP-CI, AP-PI, ICP og MALDI. Klassifiseres som myk vs. hard (hvor mye som fragmenteres) og vakuum vs. atmosfæretrykk.</Def>
        <Columns>
          <div>
            <Def term="EI (elektronionisering / electron impact)" cite={`[${B1}, p. 33; ${MS}, slide 3]`}>{'Vanligst i GC. Elektroner fra et filament sendes som en stråle på 70 eV gjennom ionekilden. Molekyler i gassfase ved lavt trykk ioniseres til positive molekylioner $M^{+\\bullet}$. Fordi ioniseringsenergien til de fleste organiske forbindelser er 7–10 eV, har molekylionet overskuddsenergi og fragmenterer på en forbindelsesspesifikk måte. Reproduserbare spektre gjør biblioteksøk mulig.'}</Def>
            <Def term="CI (kjemisk ionisering)" cite={`[${B1}, p. 33; ${MS}, slide 4]`}>{'Mykere enn EI. Brukes når molekylmasseinformasjon trengs. En reagensgass (metan, isobutan, ammoniakk) ioniseres ved relativt høyt trykk (0,1–2 torr) i en mer lukket kilde, og analytten ioniseres ved ion/nøytral-reaksjoner. Gir mest protonerte molekyler $MH^+$ og få fragmenter. Ammoniakk kan gi addukter $(M+NH_4)^+$.'}</Def>
            <Def term="Negativ ionisering (GC)" cite={`[${B1}, p. 33]`}>Termiske elektroner fanges av analytten, noe som er nyttig for molekyler med høy elektronaffinitet, som ved ECD.</Def>
          </div>
          <div>
            <Diagram title="EI- og CI-kilde" cite={`[${MS}, slide 3–4; ${B1}, p. 33]`}><EIKilde /></Diagram>
            <Diagram title="EI vs. CI-spekter av samme stoff (M = 200)" caption="EI viser mange fragmenter (43, 55, 61, 97 …) og nesten ikke noe molekylion. CI (metan) viser $[M+H]^+$ = 201 tydelig, pluss noen få fragmenter (123, 141). Søylehøyder er illustrasjon." cite={`[${MS}, slide 4]`}><EICI /></Diagram>
          </div>
        </Columns>
        <Def term="Fragmenter i EI-spekteret" cite={`[${MS}, slide 2]`}>Tabell over vanlige tap fra molekylionet, f.eks. M−15 (CH₃), M−17 (OH, alkohol), M−18 (H₂O), M−28 (CO / C₂H₄), M−29 (CHO / C₂H₅), M−31 (OCH₃), M−44 (CO₂), M−45 (CO₂H, karboksylsyre).</Def>

        <Columns>
          <Def term="LC-MS-interface" cite={`[${B2}, p. 85–86]`}>De vanligste er ESI, APCI, APPI og ICP. Valget avhenger av analyttens polaritet og størrelse. ESI: polare forbindelser, fra små til store. APCI/APPI: mindre polare, små. MALDI er bare delvis LC-MS-kompatibel (+/−).</Def>
          <Diagram title="Velg LC-MS-interface" cite={`[${B2}, p. 86, Fig. 3.28]`}><Interface /></Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="ESI (elektrosprayionisering)" cite={`[${B2}, p. 86–88; ${MS}, slide 5]`}>{'Ved atmosfæretrykk, for forbindelser med polare grupper (nøytrale, syrer og baser). For syrer og baser skjer ioniseringen i MF via pH-justering. MF går inn i en kapillær med høy spenning (typisk ±5 kV). Forstøvningsgass (N₂) hjelper dråpedannelsen, og tørkegass går motstrøms. Dråpene er sterkt ladet og krymper. Når frastøtningen overstiger overflatespenningen, eksploderer dråpen i mindre dråper. Prosessen gjentas til ionene er i gassfase. Positiv modus gir $[M+nH]^{n+}$, negativ modus $[M-nH]^{n-}$. Oftest er n = 1. Brukes ved lav flow (< 50 µL/min), helt ned til nL/min (nanospray). Ioniseringsgraden øker ved lavere flow, og derfor brukes smale kolonner. Forelesningsfiguren viser kapillærspiss med Taylor-kjegle → ladet foreldredråpe → løsemiddelfordamping → Coulomb-fisjon ved Rayleigh-grensen → «nakne» ladde analytter.'}</Def>
            <Def term="ESI: betydning" cite={`[${MSP}, slide 5; ${LF24}, p. 3–4, oppg. 1(c)]`}>Nobelpris 2002 (John B. Fenn, sammen med Koichi Tanaka). ESI muliggjør ionisering av biologiske makromolekyler, gir lav grad av fragmentering («soft») og kan lett kobles til LC-systemer, siden MF fordampes. Løsningsforslaget: en ioniseringsmetode i MS (spesielt LC-MS). Prøven ioniseres ved å danne dråper med høy ladning i et elektrisk felt. Ideell for store, polare molekyler som proteiner og peptider.</Def>
          </div>
          <Diagram title="ESI-prosessen" cite={`[${MS}, slide 5; ${B2}, p. 87, Fig. 3.30]`}><ESI /></Diagram>
        </Columns>
        <Def term="Flerladde ioner" cite={`[${MSP}, slide 7]`}>{'Molekyler med flere ioniserbare grupper kan ta opp flere protoner, f.eks. $[M+2H]^{2+}$ og $[M+H]^+$. MS måler m/z, ikke masse. Protein-ladningstilstander behandles på side 16.'}</Def>

        <Columns>
          <div>
            <Def term="APCI (atmospheric pressure chemical ionization)" cite={`[${B2}, p. 88–89; ${MS}, slide 5]`}>{'For mindre polare forbindelser. MF går gjennom en kapillær varmet til 400–500 °C, så løsemiddel og analytt fordampes. En korona-nål danner et plasma (N₂⁺•), og en kaskade av reaksjoner gir H₃O⁺ og OH⁻, som protonerer eller deprotonerer analytten til $[M+H]^+$ eller $[M-H]^-$. Følsomheten avhenger av massestrøm, ikke konsentrasjon. Tåler opptil 2 mL/min, så smale kolonner gir lite gevinst. Eksempel: testosteron (ingen sure eller basiske grupper) kan ikke ioniseres med ESI, men gir $[M+H]^+$ = 289 med APCI.'}</Def>
            <Def term="APPI (atmospheric pressure photoionization)" cite={`[${B2}, p. 89–90]`}>{'Ligner APCI og brukes for mest upolare forbindelser. Fordamping ved ca. 500 °C. UV-fotoner ioniserer analytten direkte ($M^{+\\bullet}$, som tar H fra løsemiddelet) eller via en dopant (f.eks. toluen).'}</Def>
          </div>
          <Diagram title="APCI-kilden" cite={`[${MS}, slide 5; ${B2}, p. 88, Fig. 3.32]`}><APCI /></Diagram>
        </Columns>
        <Def term="ICP (inductively coupled plasma)" cite={`[${B2}, p. 90–91]`}>For grunnstoff- og metallanalyse. Et argonplasma på ca. 10 000 K atomiserer og ioniserer prøven. Spektrene viser bare enkeltgrunnstoffer (isotopmasser). Deteksjonsgrenser fra ppt til ppb.</Def>
        <Columns>
          <Def term="MALDI (Matrix Assisted Laser Desorption Ionization)" cite={`[${PK}, slide 8–9; ${MS}, slide 6]`}>MS-metode for å bestemme massen til store biomolekyler (proteiner, DNA, peptider, sukkerarter) og store organiske molekyler. Proteinløsningen blandes med en UV-absorberende matriksløsning på en metallbærer. Løsemiddelet dampes av, og det dannes protein-«dopa»-krystaller. Bæreren settes i vakuum og bombarderes med UV-laser. Matriksen absorberer lyset, og proteinene kastes ut som ioner som separeres og registreres av masseseparatoren. Forelesningsfigur: laserstråle → desorpsjon fra «target plate» → desolvatisering og ionisering (protonoverføring fra matriks) → til masseanalysator.</Def>
          <Diagram title="MALDI" cite={`[${MS}, slide 6; ${PK}, slide 7–9]`}><MALDI /></Diagram>
        </Columns>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="mz" />
        <Plot
          title="ESI-ladningstilstander for neurotensin (M = 1673)"
          caption="$m/z = (M + n)/n$ i positiv modus, $(M - n)/n$ i negativ. Slideren $n_{maks}$ viser ladningstilstandene n = 1 … $n_{maks}$ som topper (1674, 837,5, 558,7, 419,3, 335,6 i positiv modus). Modus-slideren: +1 = positiv, −1 = negativ. Topphøydene er like (illustrasjon)."
          cite={`[${B2}, p. 87–88]`}
          x={{ min: 300, max: 1700, label: 'm/z' }}
          y={{ label: 'signal', min: 0, max: 1.1 }}
          params={[
            { key: 'n', label: '$n_{maks}$', min: 1, max: 5, step: 1, value: 3 },
            { key: 's', label: 'modus', min: -1, max: 1, step: 2, value: 1 },
          ]}
          series={[{ key: 'sp', label: 'spekter', t: 'var-a', fn: (x, p) => { let v = 0; for (let k = 1; k <= p.n; k++) v += stick(x, (1673 + p.s * k) / k); return v } }]}
          samples={1400}
          marks={[{ x: 558.7, label: '[M+3H]³⁺ 558,7' }]}
        />
        <Eq id="apci" />
        <Eq id="appi" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="m/z for tre forbindelser i ESI (bokas eksempler)"
          steps={[
            { title: 'Lidokain (base, M = 234), pH 5,5.', body: 'Aminen protoneres i MF, så den måles i positiv modus. $m/z = (234 + 1)/1 = 235$, altså $[M+H]^+$.' },
            { title: 'Salisylsyre (syre, M = 138), pH 5,5.', body: 'Karboksylsyren deprotoneres og er negativt ladet, så den måles i negativ modus. $m/z = (138 - 1)/1 = 137$, altså $[M-H]^-$.' },
            { title: 'Neurotensin (peptid, 13 aminosyrer, M ≈ 1673).', body: 'Tre aminosyrer er positivt ladet og kan ta opp ett proton hver, så n = 3.' },
            { body: '$m/z = (1673 + 3)/3 = 1676/3 = 558{,}7$, altså $[M+3H]^{3+}$.' },
            { title: 'Tolkning:', body: `Takket være flere ladninger havner et molekyl på 1673 Da på m/z 558,7. ESI flytter store molekyler ned i et lite m/z-område, og det er derfor ESI egner seg for proteiner og peptider [${LF24}, p. 4].` },
          ]}
          cite={`[${B2}, p. 86–88]`}
        />
        <FadedExample
          title="EI-spekter av benzosyre (forelesning)"
          given="Spekteret har topper ved m/z 122, 105, 77 og 51. Benzosyre: C₆H₅COOH."
          steps={[
            { body: 'Det høyeste m/z-tallet med fornuftig masse er molekylionet: $M^{+\\bullet}$ = 122.' },
            { body: '122 − 105 = 17. I fragmenttabellen er M−17 lik OH, så 105 = $(M-OH)^+$, C₆H₅CO⁺.' },
            { title: '105 − 77 = ? Hvilket nøytralt fragment er tapt (tabellen: M−28)?', body: '28 = CO. 77 = C₆H₅⁺.', hidden: true },
            { title: '77 − 51 = ?', body: '26 = C₂H₂. 51 = C₄H₃⁺.', hidden: true },
            { title: 'Hvorfor ser vi så mange fragmenter med EI, og hva ville CI vist i stedet?', body: `EI på 70 eV gir mye overskuddsenergi (ioniseringsenergi 7–10 eV), og molekylet fragmenterer. CI ville gitt tydelig $[M+H]^+$ = 123 og få fragmenter [${B1}, p. 33].`, hidden: true },
          ]}
          cite={`[${MS}, slide 2–3]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="EI i LC-MS" cite={`[${LF24}, p. 3; ${B1}, p. 33]`}>Den vanligste ioniseringen i LC-MS er ESI. EI brukes i GC-MS (gassfase, vakuum).</Trap>
        <Trap title="ESI for upolare stoffer" cite={`[${B2}, p. 89]`}>Upolare stoffer uten sure eller basiske grupper (f.eks. testosteron) ioniseres dårlig med ESI. Bruk APCI eller APPI.</Trap>
        <Trap title="m/z = masse" cite={`[${B2}, p. 87–88; ${MSP}, slide 7]`}>Bare når z = 1. Flerladde ioner havner på (M + n)/n.</Trap>
        <Trap title="Glemme protonmassen" cite={`[${B2}, p. 87]`}>{'$[M+H]^+$ = M + 1 og $[M-H]^-$ = M − 1, ikke M.'}</Trap>
        <Trap title="ESI ved høy flow" cite={`[${B2}, p. 88–89]`}>ESI fungerer best ved lav flow (&lt; 50 µL/min, nanospray). APCI tåler opptil 2 mL/min.</Trap>
        <Trap title="MALDI er vanlig LC-MS-interface" cite={`[${B2}, p. 86]`}>Bare delvis kompatibel (+/−), og brukes typisk med TOF for store biomolekyler.</Trap>
        <Trap title="Myk vs. hard snudd" cite={`[${MSP}, slide 4–5; ${B1}, p. 33]`}>EI er hard (mye fragmentering). ESI, CI og MALDI er myke.</Trap>
      </Section>
    </>
  )
}
