import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Block, Diagram, Svg, Box, Arrow, Label, Curve, Plot, Columns, V, tone } from '../components'

const K1 = 'Kapillærelektroforese del 1 m notater.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'

export const meta = {
  title: 'Kapillærelektroforese: prinsipp, elektroforetisk mobilitet og EOF',
  topic: 'ce',
  examWeight: { level: 'medium', note: 'H24 2(c) (5 p, flat vs. parabolsk flowprofil) og 2(e) (4 p, EOF-pH, CE-utsagn, elueringsrekkefølge). H25 oppg. 11 (4 p, CE vs. HPLC), oppg. 9 (linjene «EOF viktig», «platehøyder < 1 µm», «nL») og oppg. 13 iii (EOF og flat profil i CEC)' },
  examTasks: [
    'H2024: 2(c); 2(e) (index: side 24)',
    'H2025: oppg. 9 (kombiner utsagn og metode) (index: side 20–21, 23–24, 26)',
    'H2025: oppg. 11 (CE vs. HPLC) (index: side 24)',
    'H2024 oppg. 2(c) (5 p): flowprofil A (flat, EOF) vs. B (parabolsk, trykk), forskjeller og fordeler.',
    'H2024 oppg. 2(e) (4 p): optimal pH for EOF, riktige utsagn om CE, og om EOF er avgjørende for elueringsrekkefølgen.',
    'H2025 oppg. 9 (del av 5 p, automatisk rettet): linjene «Høy oppløsning og svært små prøvevolum (nL)», «Lite forbruk av prøvebuffer», «EOF viktig for separasjon» og «Kan oppnå platehøyder < 1 µm». Alle utledes til CE [UTLEDET — ingen fasit].',
    'H2025 oppg. 11 (4 p): CE vs. HPLC, hovedforskjeller og sensitivitet.',
    'H2025 oppg. 13 iii (CEC): EOF og flat flowprofil. Se side 26.',
  ],
  buildsOn: ['19-elektroforese-teori-og-geler', '02-effektivitet-og-opplosning', '03-bandspredning-van-deemter'],
  usedIn: ['25-ce-injeksjon-og-deteksjon', '26-ce-metoder-og-cec'],
  sources: [
    `[${K1}, slide 1–26]`,
    `[${B2}, p. 128–130, 136–141] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 2c, 2e] / [${LF24}, oppg. 2a, 2c, 2e]`,
    `[${E25}, oppg. 9, 11, 13] / [${LF25}, oppg. 11]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hva driver væsken gjennom kapillæret i CE, og hva driver den i HPLC?', a: `I CE gjør elektroosmotisk flow (EOF) det, skapt av påført spenning. I HPLC er det en pumpe (trykk) [${K1}, slide 15, 22; ${LF25}, oppg. 11].` },
    { id: 'p2', kind: 'pretest', q: 'I hvilken rekkefølge når kationer, nøytrale og anioner detektoren (normal polaritet, EOF mot katoden)?', a: `Først kationer, så nøytrale (sammen, med EOF-hastighet), så anioner [${K1}, slide 17–19].` },
    { id: 'p3', kind: 'pretest', q: 'Over hvilken pH får man EOF i et fused silica-kapillær?', a: `pH > 3 (kraftig over pH 5) [${K1}, slide 12; ${B2}, p. 137; ${LF24}, oppg. 2e].` },
    { id: 't1', q: 'Forklar med fire trinn hvordan EOF oppstår.', a: `(1) Silikaveggen er negativ ved pH > 3. (2) Kationer samles ved veggen i et dobbeltlag. (3) Med spenning vandrer de diffuse, solvatiserte kationene mot katoden. (4) De drar med seg hele bufferløsningen, som gir netto strøm mot katoden [${K1}, slide 15; ${B2}, p. 129].` },
    { id: 't2', q: 'Et lite, dobbelt negativt ion og et stort, enkelt negativt ion separeres med normal EOF. Hvem kommer først?', a: `Det store, enkelt ladde. Det har lavest egen mobilitet mot anoden, så EOF bærer det raskest forbi detektoren. Små, høyt ladde anioner kommer sist [${K1}, slide 18–19].` },
    { id: 't3', q: 'Hvordan kan du redusere EOF uten å endre pH?', a: `Øke elektrolyttkonsentrasjonen, tilsette organisk modifikator, bruke deaktivert (belagt) kapillær eller senke spenningen [${K1}, slide 12, 20].` },
    { id: 't4', q: 'Hvorfor gir CE høyere platetall enn HPLC?', a: `Flat EOF-profil (ingen hastighetsforskjell over tverrsnittet), ingen stasjonær fase å overføre masse til, og effektiv varmebortledning i tynne kapillærer som tillater høy spenning. I praksis er longitudinal diffusjon nesten eneste kilde til båndspredning [${K1}, slide 6, 22–23; ${B2}, p. 137, 140].` },
    { id: 't5', q: 'Ifølge lign. 6.6, hvordan påvirker økt spenning N, og hvorfor kan man ikke bare skru opp uendelig?', a: `N ∝ V, så økt spenning gir høyere N. Men Joule-varmen øker med i², og det gir temperaturgradienter (båndspredning) og mulig nedbrytning [${B2}, p. 128, 140].` },
  ],
  equations: [
    {
      id: 'F', label: "Kraft på ladd partikkel og Stokes' friksjon",
      tex: String.raw`F = q\vb{E},\qquad F_f = 6\pi\eta r \ve{u}`,
      vars: [
        { sym: 'F', desc: 'elektrisk kraft', unit: String.raw`\mathrm{N}` },
        { sym: 'q', desc: 'ionets ladning', unit: String.raw`\mathrm{C}` },
        { sym: String.raw`\vb{E}`, desc: 'feltstyrke ($= V/L$)', unit: String.raw`\mathrm{V\,m^{-1}}` },
        { sym: 'F_f', desc: 'friksjonskraft', unit: String.raw`\mathrm{N}` },
        { sym: String.raw`\eta`, desc: 'viskositet', unit: String.raw`\mathrm{Pa\,s}` },
        { sym: 'r', desc: 'Stokes-radius', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\ve{u}`, desc: 'migrasjonshastighet', unit: String.raw`\mathrm{m\,s^{-1}}` },
      ],
      note: 'Ved likevekt er $F = F_f$. Forenklet beskrivelse som antar kuleform. Se side 19.',
      cite: `[${B2}, p. 128; ${LF24}, oppg. 2a]`,
      check: { status: 'verified', note: 'Bok del 2 Fig. 6.1 og p. 128 (PDF s. 44).' },
    },
    {
      id: 'mu', label: 'Elektroforetisk mobilitet',
      tex: String.raw`\va{\mu_e} = \frac{\ve{u}}{\vb{E}} = \frac{q}{6\pi\eta r}`,
      vars: [{ sym: String.raw`\va{\mu_e}`, desc: 'elektroforetisk mobilitet', unit: String.raw`\mathrm{m^2\,V^{-1}\,s^{-1}}` }],
      note: 'Feltuavhengig parameter for å sammenligne ioner. $u$ øker med $q$ og $E$ og avtar med $r$.',
      cite: `[${B2}, p. 128]`,
      check: { status: 'verified', note: 'Bok del 2 p. 128: µ = u/E og lign. 6.1 u = qE/6rπη.' },
    },
    {
      id: 'u', label: 'Tilsynelatende migrasjonshastighet med EOF (lign. 6.7)',
      tex: String.raw`\ve{u} = u_e + u_{eo} = \frac{(\va{\mu_e} + \vc{\mu_{eo}})\,V}{L}`,
      vars: [
        { sym: 'u_e,\\ u_{eo}', desc: 'elektroforetisk hastighet og EOF-hastighet', unit: String.raw`\mathrm{m\,s^{-1}}` },
        { sym: String.raw`\vc{\mu_{eo}}`, desc: 'elektroosmotisk mobilitet', unit: String.raw`\mathrm{m^2\,V^{-1}\,s^{-1}}` },
        { sym: 'V', desc: 'påført spenning', unit: String.raw`\mathrm{V}` },
        { sym: 'L', desc: 'total kapillærlengde', unit: String.raw`\mathrm{m}` },
      ],
      note: '$\\mu_e$ er positiv for kationer, negativ for anioner og 0 for nøytrale. Er $\\mu_{eo} > |\\mu_e|$ for alle anioner, migrerer alle i samme retning. Nøytrale går med $u_{eo} = \\mu_{eo}V/L$.',
      cite: `[${B2}, p. 141]`,
      check: { status: 'verified', note: 'Bok lign. 6.7 (p. 141, PDF s. 57) identisk.' },
    },
    {
      id: 'N', label: 'Maksimalt platetall i CE (lign. 6.6)',
      tex: String.raw`N = \frac{(\va{\mu_e} + \vc{\mu_{eo}})\,L_D\,V}{2DL}`,
      vars: [
        { sym: 'N', desc: 'platetall', unit: '–' },
        { sym: 'L_D', desc: 'effektiv lengde (innløp → detektor)', unit: String.raw`\mathrm{m}` },
        { sym: 'D', desc: 'analyttens diffusjonskoeffisient', unit: String.raw`\mathrm{m^2\,s^{-1}}` },
      ],
      note: 'Antar at bare longitudinal diffusjon gir båndspredning. Høy $V$ og lav $D$ (store molekyler) gir høy $N$.',
      cite: `[${B2}, p. 140]`,
      check: { status: 'verified', note: 'Bok lign. 6.6 (p. 140, PDF s. 56): N = (µ_e + µ_eo)·L_D·V / (L·2D).' },
    },
    {
      id: 'rs', label: 'Oppløsning i CE',
      tex: String.raw`R_s = \frac{\sqrt{N}}{4}\cdot\frac{\Delta\mu}{\bar\mu}`,
      vars: [
        { sym: String.raw`\Delta\mu`, desc: '$\\mu_1 - \\mu_2$', unit: String.raw`\mathrm{m^2\,V^{-1}\,s^{-1}}` },
        { sym: String.raw`\bar\mu`, desc: 'gjennomsnittet av $\\mu_1$ og $\\mu_2$', unit: String.raw`\mathrm{m^2\,V^{-1}\,s^{-1}}` },
      ],
      note: 'Samme form som for gelteknikkene, med $\\mu = u/E = uL/V$.',
      cite: `[${B2}, p. 141]`,
      check: { status: 'verified', note: 'Bok p. 141: R_s = √N(Δu/4u) der Δu = µ₁ − µ₂ og u = gjennomsnittet av µ₁ og µ₂ (boka bruker u-symbolet for mobilitetene her).' },
    },
    {
      id: 'W', label: 'Varmeutvikling',
      tex: String.raw`W = \frac{V\cdot i}{L\cdot A} = \frac{\vb{E}\cdot i}{A} = \frac{i^2}{\ell\cdot A^2}`,
      vars: [
        { sym: 'W', desc: 'varme per volum', unit: String.raw`\mathrm{W\,mL^{-1}}` },
        { sym: 'i', desc: 'strøm', unit: String.raw`\mathrm{A}` },
        { sym: 'A', desc: 'tverrsnittsareal', unit: String.raw`\mathrm{m^2}` },
        { sym: String.raw`\ell`, desc: 'spesifikk ledningsevne', unit: String.raw`\mathrm{S\,m^{-1}}` },
      ],
      note: 'Feltstyrken er ∝ $i$, men varmen er ∝ $i^2$. Det begrenser hvor høy spenning man kan bruke.',
      cite: `[${B2}, p. 128]`,
      check: { status: 'verified', note: 'Bok lign. 6.2 (PDF s. 44) identisk.' },
    },
  ],
}

const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>
const U = '**[UTLEDET — ingen fasit i LF]** '

/* CE instrument */
function Instrument() {
  return (
    <Svg w={460} h={260} label="CE-instrument">
      <rect x={20} y={150} width={70} height={70} rx={6} style={{ fill: `color-mix(in srgb, ${tone('definition')} 15%, var(--bg))`, stroke: tone('ink') }} />
      <rect x={370} y={150} width={70} height={70} rx={6} style={{ fill: `color-mix(in srgb, ${tone('definition')} 15%, var(--bg))`, stroke: tone('ink') }} />
      <Label x={55} y={240} size={10}>(3) inlet</Label>
      <Label x={405} y={240} size={10}>(4) outlet</Label>
      <line x1={40} y1={130} x2={40} y2={200} style={{ stroke: tone('var-a'), strokeWidth: 3 }} />
      <Label x={40} y={124} size={11} t="var-a">(6) anode +</Label>
      <line x1={420} y1={130} x2={420} y2={200} style={{ stroke: tone('var-c'), strokeWidth: 3 }} />
      <Label x={420} y={124} size={11} t="var-c">(7) katode −</Label>
      <path d="M 65 200 C 65 60, 395 60, 395 200" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 3 }} />
      <Label x={230} y={60} size={11}>(1) fused silica-kapillær</Label>
      <rect x={300} y={70} width={26} height={22} style={{ fill: tone('var-e'), opacity: 0.6 }} />
      <Label x={313} y={108} size={10}>(2) detektor</Label>
      <rect x={68} y={150} width={10} height={14} style={{ fill: tone('trap') }} />
      <Label x={110} y={170} anchor="start" size={10} t="trap">(5) prøveplugg</Label>
      <Box x={170} y={190} w={120} h={34} label="(10) HV 10–30 kV" t="muted" />
      <Arrow x1={120} y1={120} x2={200} y2={92} t="var-c" head={7} />
      <Label x={150} y={140} size={10}>ioner + → −</Label>
      <Label x={230} y={252} size={9}>(8) termostatering · (9) systemkontroll</Label>
    </Svg>
  )
}

/* Double layer and EOF */
function Dobbeltlag() {
  return (
    <Svg w={460} h={240} label="Elektrisk dobbeltlag og EOF">
      <rect x={20} y={20} width={420} height={20} style={{ fill: tone('muted'), opacity: 0.5 }} />
      <Label x={230} y={34} size={10}>silikavegg</Label>
      {Array.from({ length: 14 }, (_, i) => <Label key={i} x={35 + i * 30} y={52} size={12} t="var-a">−</Label>)}
      {Array.from({ length: 13 }, (_, i) => <Label key={`f${i}`} x={35 + i * 30} y={70} size={12} t="var-c">+</Label>)}
      <Label x={445} y={70} anchor="end" size={9} t="var-c">fast lag</Label>
      {Array.from({ length: 7 }, (_, i) => <Label key={`d${i}`} x={50 + i * 50} y={95 + (i % 2) * 10} size={12} t="var-c">+</Label>)}
      <Label x={445} y={104} anchor="end" size={9} t="var-c">diffust lag</Label>
      <Label x={230} y={150} size={11}>bulk</Label>
      <Arrow x1={140} y1={180} x2={330} y2={180} t="var-c" />
      <Label x={235} y={200} size={12} t="var-c">EOF → katode</Label>
      <Label x={230} y={228} size={10} t="trap">(b) kationisk surfaktant på veggen → ← EOF (reversert)</Label>
    </Svg>
  )
}

/* Flat vs parabolic */
function Profiler() {
  return (
    <Svg w={460} h={250} label="Flat vs. parabolsk flowprofil">
      {[[20, 'A: flat (EOF, CE)', 'var-c', false], [140, 'B: parabolsk (trykk, HPLC)', 'trap', true]].map(([y, lab, t, para]) => (
        <g key={y}>
          <Label x={20} y={y} anchor="start" size={12} t={t}>{lab}</Label>
          <line x1={20} y1={y + 12} x2={260} y2={y + 12} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
          <line x1={20} y1={y + 82} x2={260} y2={y + 82} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
          {[30, 47, 64].map((dy) => {
            const len = para ? 80 - Math.abs(dy - 47) * 2.2 : 80
            return <Arrow key={dy} x1={80} y1={y + dy} x2={80 + len} y2={y + dy} t={t} head={7} />
          })}
          <Curve t={t} points={para ? [[300, y + 80], [340, y + 76], [370, y + 30], [400, y + 76], [440, y + 80]] : [[330, y + 80], [360, y + 76], [370, y + 18], [380, y + 76], [410, y + 80]]} />
        </g>
      ))}
      <Label x={370} y={242} size={10}>flat → smal topp, mindre båndspredning</Label>
    </Svg>
  )
}

/* Vector sum and elution order */
function Vektorsum() {
  const row = (y, lab, egen, t) => (
    <g>
      <Label x={14} y={y + 4} anchor="start" size={11} t={t}>{lab}</Label>
      <Arrow x1={110} y1={y} x2={200} y2={y} t="var-c" head={6} />
      {egen !== 0 && <Arrow x1={210} y1={y} x2={210 + egen} y2={y} t={t} head={6} />}
      <Label x={286} y={y + 4} size={11}>=</Label>
      <Arrow x1={300} y1={y} x2={300 + 90 + egen} y2={y} t={t} head={6} />
    </g>
  )
  return (
    <Svg w={460} h={250} label="Vektorsum og elueringsrekkefølge">
      <Label x={155} y={16} size={10} t="var-c">EOF</Label>
      <Label x={230} y={16} size={10}>+ egen</Label>
      <Label x={350} y={16} size={10}>netto</Label>
      {row(40, 'kation', 60, 'var-a')}
      {row(80, 'nøytral', 0, 'muted')}
      {row(120, 'anion', -50, 'var-e')}
      <line x1={20} y1={180} x2={440} y2={180} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <Label x={20} y={170} anchor="start" size={9}>INJECTION</Label>
      <Label x={440} y={170} anchor="end" size={9}>DETECTION</Label>
      {[['⊕⊕ små', 'var-a', 400], ['⊕ store', 'var-a', 340], ['N N N', 'muted', 270], ['⊖ store', 'var-e', 200], ['⊖⊖ små', 'var-e', 130]].map(([l, t, x]) => <Label key={l} x={x} y={200} size={11} t={t}>{l}</Label>)}
      <Label x={230} y={232} size={10}>først ut: små høyt ladde kationer · sist: små høyt ladde anioner</Label>
    </Svg>
  )
}

const MU0 = 2e-3 / 3e4 // typical: u_eo ≈ 2 mm/s at 300 V/cm
const tmig = (k, p) => { const u = (k + p.eo) * MU0 * p.E * 100; return u > 0 ? 0.5 / u / 60 : null }

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Et transportbånd av buffer">
        <MentalModel cite={`[${K1}, slide 14–25; ${B2}, p. 137, 141]`}>
          Silikaveggen i kapillæret er negativt ladet. Kationer fra bufferen samler seg langs den, og når spenningen settes på, vandrer de mot katoden og drar hele væskesøylen med seg. Det er <V c="c">EOF</V>. Fordi drivkraften virker langs hele veggen og ikke som trykk fra én ende, får strømmen en <em>flat</em> profil. Det gir lite båndspredning og ekstremt høye platetall.{' '}
          Oppå denne «transportbåndet»-strømmen har hver analytt sin egen <V c="a">elektroforetiske mobilitet</V>, bestemt av ladning/størrelse. Kationer går med EOF, anioner mot den, og nøytrale går ikke selv. Den tilsynelatende hastigheten er summen, så når EOF er sterkere enn anionenes egen vandring, passerer <em>alt</em> detektoren i rekkefølgen kationer → nøytrale → anioner. CE er ikke kromatografi, for det finnes ingen fordeling mellom mobil og stasjonær fase.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Kapillærelektroforese (CE)" cite={`[${K1}, slide 4]`}>Kombinerer elektroforetiske prinsipper og kromatografisk praksis. Analyserer spormengder av ladde forbindelser (aminosyrer, narkotiske stoffer, fettsyrer, nukleinsyrer, f.eks. Sanger-sekvensering). Pålitelig, med høy oppløsning og høy sensitivitet. Varianter gir tilpasset selektivitet, f.eks. kombinasjon med MS.</Def>
        <Def term="Bruksområder" cite={`[${K1}, slide 5; ${B2}, p. 136]`}>Farmasøytisk analyse (legemidler og metabolitter), kjemi og biokjemi (proteiner, peptider, DNA, små molekyler) og klinisk diagnostikk (blod, urin). CE var svært viktig for karakteriseringen av det humane genomet.</Def>
        <Def term="Prinsipp" cite={`[${K1}, slide 13]`}>Separasjon av ioner og molekyler i et elektrisk felt, bestemt av (1) elektroforetisk mobilitet og (2) EOF. Molekylene detekteres etter ulik migrasjonstid.</Def>
        <Def term="Elektroferogram" cite={`[${K1}, slide 7; ${B2}, p. 139]`}>Detektorsignalet som funksjon av tid.</Def>
        <Columns>
          <Def term="Instrumentering" cite={`[${K1}, slide 7–8; ${B2}, p. 136]`}>(1) Kapillærrør. (2) Detektor. (3) Inlet-elektrolyttreservoar og (4) outlet-elektrolyttreservoar. (5) Prøve. (6) Anode og (7) katode, begge av platina. Polariteten er byttbar. (8) Termostatering (luft eller væske). (9) Systemkontroll. (10) Strømkilde (høyspenning). Kapillæret fylles med elektrolytt med trykk før analysen. Systemet må være isolert av sikkerhetshensyn.</Def>
          <Diagram title="CE-instrument" cite={`[${K1}, slide 7–8; ${B2}, p. 136]`}><Instrument /></Diagram>
        </Columns>
        <Def term="Driftsparametre" cite={`[${K1}, slide 10–11; ${B2}, p. 136–137]`}>Spenning 10–30 kV, feltstyrke typisk 200–400 V/cm og strøm ca. 100 µA ved 30 kV. Konstant potensial foretrekkes. Høy elektrisk motstand i kapillæret begrenser strøm og <em>Joule heating</em>. Større diameter gir mer varme. Varme produseres når en elektrisk ladning passerer en trang passasje (notat, slide 10). N = 100 000–1 000 000, H ≤ 1 µm (pga. EOF-profilen), og analysetid typisk 5–30 min. Kapillær: ID typisk 50–75 µm (20–100 µm) og 20–100 cm lang. Spenningsforskjellen i feltet justeres med spenningen eller kapillærlengden. <strong>Effektiv lengde L_D</strong>: fra innløp til deteksjonspunktet.</Def>
        <Def term="Hvorfor tynne kapillærer" cite={`[${K1}, slide 6; ${B2}, p. 136–137]`}>Effektiv varmespredning gjør at man kan bruke høye spenninger, som gir effektiv separasjon og kort tid. ID-valg er et kompromiss: UV-veilengden = ID, så cLOD ∝ 1/ID, men båndbredden øker med ID. 50–75 µm er et godt kompromiss.</Def>
        <Def term="Fordeler" cite={`[${K1}, slide 9]`}>Høy oppløsning (ofte &gt; 100 000 plater), rask analyse, lite prøvevolum, lite prøvepreparering og lite forbruk av prøvebuffer.</Def>
        <Def term="Kapillærer/kolonner" cite={`[${K1}, slide 12; ${B2}, p. 136–137]`}>Nesten alltid fused silica med polyimidbelegg eller UV-transparent teflonbelegg. Fleksible og elektrisk isolerende. Negativt ladet ved pH &gt; 3, som gir EOF. EOF kan minskes med deaktivert overflate (kjemisk bundet ligand eller additiv), som også hindrer uønsket adsorpsjon av analytter (særlig basiske) til veggen. EOF kan <em>reverseres</em> ved å binde en positivt ladet forbindelse til overflaten.</Def>
        <Avvik>EOF-pH: pH &gt; 3 (forelesning, slide 12, og LF H24 2e) vs. «spesielt &gt; pH 5» (bok, p. 137). Eksamen godtar pH &gt; 3.</Avvik>
        <Def term="Elektroforetisk mobilitet (µ_e)" cite={`[${K1}, slide 11, 14, 18; ${B2}, p. 128]`}>Beskriver hvor raskt et ladet molekyl beveger seg i et elektrisk felt. Høyere ladning gir raskere vandring. Større molekyl gir mer friksjon og langsommere vandring. Avhenger av buffer-pH, ionisk styrke, buffersammensetning og viskositet. Notat (slide 11, 14): ioner med høyest ladning vandrer raskere enn de med mindre ladning. Positive ioner eluerer raskere enn negative. Små +-ioner er raskere enn store, og store −-ioner raskere enn små. Nøytrale påvirkes ikke av feltet og er avhengige av EOF for forflytning. Notat (slide 18): ved konstant feltstyrke beveger hver partikkel seg med konstant hastighet, bestemt av feltstyrke, viskositet og partikkelens ladning, form og størrelse. Det gir vandring med ulik hastighet.</Def>
        <Columns>
          <Def term="Elektroosmose / EOF" cite={`[${K1}, slide 15, 21; ${B2}, p. 129, 137]`}>(1) Kapillærveggen er negativt ladet (deprotonerte silanolgrupper). (2) Positive ioner i bufferen samles nær veggen i et elektrisk dobbeltlag. Det faste laget er tett bundne kationer, og det diffuse laget har bevegelige kationer. (3) Med spenning beveger de diffuse kationene seg mot katoden. De er solvatisert og drar med seg løsemidlet via hydrogenbindinger. (4) Resultatet er netto væskestrøm (hele bufferløsningen) mot katoden. Skjer bare i overflateladde kapillærer med ganske smal ID. Positivt ladet overflate gir EOF mot anoden. Typisk størrelse er ca. 2 mm/s. Notat (slide 21): høy pH (&gt; 3) gir flere negative ladninger på kapillærveggen og sterk EOF. Lav pH (&lt; 3) gir færre deprotonerte silanolgrupper, og EOF reduseres eller forsvinner nesten.</Def>
          <Diagram title="Elektrisk dobbeltlag og EOF" cite={`[${K1}, slide 15, 21; ${B2}, p. 129]`}><Dobbeltlag /></Diagram>
        </Columns>
        <Columns>
          <Def term="Samspill EOF og mobilitet" cite={`[${K1}, slide 17–19; ${B2}, p. 141]`}>EOF driver hele løsningen mot katoden. Kationer beveger seg raskest, nøytrale følger EOF, og anioner når detektoren hvis EOF er sterkere enn deres egen vandring mot anoden. Tilsynelatende mobilitet = EOF + elektroforetisk mobilitet. Nøytrale har ingen elektroforetisk mobilitet og går med EOF. Kationer og anioner separeres etter ladning/størrelse-forhold. <strong>Elueringsrekkefølge</strong>: små høyt ladde kationer → store kationer → nøytrale (alle samtidig, ikke separert) → store anioner → små høyt ladde anioner.</Def>
          <Diagram title="Vektorsum og elueringsrekkefølge" cite={`[${K1}, slide 18–19; ${B2}, p. 141, Fig. 6.9]`}><Vektorsum /></Diagram>
        </Columns>
        <Diagram title="Faktorer som påvirker EOF" cite={`[${K1}, slide 20]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td><strong>Faktor</strong></td><td><strong>Effekt på EOF</strong></td></tr>
              <tr><td>Økt elektrolyttkonsentrasjon</td><td>EOF reduseres</td></tr>
              <tr><td>Økt andel organisk modifikator (organiske løsemidler)</td><td>EOF reduseres</td></tr>
              <tr><td>pH</td><td>Styrer ioniseringsgraden til kapillærveggen <em>og</em> ioniseringen av syrer og baser, og dermed også µ_e</td></tr>
              <tr><td>Ioniske surfaktanter</td><td>Sterk påvirkning, kan reversere EOF-retningen</td></tr>
              <tr><td>Økt spenning</td><td>EOF øker</td></tr>
            </tbody>
          </table>
        </Diagram>
        <Columns>
          <Def term="Flowprofil: flat vs. parabolsk" cite={`[${K1}, slide 22–23; ${LF24}, oppg. 2c; ${B2}, p. 137]`}><strong>Flat (EOF, CE)</strong>: drives av ladninger langs kapillærveggen, uten trykkfall, så hastigheten er jevn over hele tverrsnittet. <strong>Parabolsk (trykkindusert, HPLC)</strong>: drives av trykkforskjeller. Friksjonskrefter gir ulik hastighet over tverrsnittet. Flat profil gir mindre båndspredning, bedre toppoppløsning og bedre separasjonseffektivitet. Det er en av grunnene til de høye platetallene i CE.</Def>
          <Diagram title="Flat vs. parabolsk flowprofil" cite={`[${K1}, slide 22–23]`}><Profiler /></Diagram>
        </Columns>
        <Def term="Gelelektroforese vs. elektroosmose" cite={`[${K1}, slide 25]`}>Ved elektroforese flyttes partikler (nukleinsyrer, proteiner) av feltet mens bufferen står stille (gel). Ved elektroosmose flyttes væsken (buffer inkl. analytter) av feltet (gel, membran, kapillærrør). CE er ikke kromatografi, for separasjonen skyldes forskjeller i elektroforetisk mobilitet og ikke fordeling mellom mobil og stasjonær fase.</Def>
        <Def term="Varmegenerering (sekundæreffekt)" cite={`[${B2}, p. 128–129]`}>Varmen W ∝ i², og en radiell temperaturgradient gir båndspredning (opptil 2–3 % hastighetsendring per °C). Elektrolytt med lav ionestyrke og ledningsevne (men nok bufferkapasitet) og kjøling reduserer dette. Varme kan også bryte ned termolabile forbindelser.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="F" />
        <Eq id="mu" />
        <Eq id="u" />
        <Plot
          title="Tilsynelatende hastighet og migrasjonstid"
          caption="$t = L_D/u$ med $u = (\mu_e + \mu_{eo})E$ og fast $L_D$ = 50 cm. x-aksen er µ_eo relativt til «typisk» (1 = u_eo ≈ 2 mm/s ved 300 V/cm; negativ = reversert EOF, f.eks. kationisk surfaktant). Tre analytter: kation µ_e = +0,5·µ_eo,typisk, nøytral 0, anion −0,5·µ_eo,typisk (relative, illustrative verdier — kursfilene gir bare EOF ≈ 2 mm/s). Der en kurve mangler, når analytten aldri detektoren (u ≤ 0): f.eks. anionen når µ_eo < 0,5."
          cite={`[${B2}, p. 137, 141; ${K1}, slide 10–11, 20]`}
          x={{ min: -1, max: 2, label: 'µ_eo (relativ til typisk)' }}
          y={{ label: 'migrasjonstid (min)', min: 0, max: 30 }}
          samples={300}
          params={[{ key: 'E', label: '$E$', min: 200, max: 400, step: 10, value: 300, unit: 'V/cm' }]}
          series={[
            { key: 'k', label: 'kation', t: 'var-a', fn: (eo, p) => tmig(0.5, { eo, E: p.E }) },
            { key: 'n', label: 'nøytral', t: 'muted', fn: (eo, p) => tmig(0, { eo, E: p.E }) },
            { key: 'a', label: 'anion', t: 'var-e', fn: (eo, p) => tmig(-0.5, { eo, E: p.E }) },
          ]}
          marks={[{ x: 1, label: 'typisk EOF' }]}
        />
        <Eq id="N" />
        <Eq id="rs" />
        <Eq id="W" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 2(e): tre flervalg om CE (4 p)"
          steps={[
            { title: 'i) Optimal pH for EOF? (pH > 3 / pH < 3 / pH < 5 / pH > 5)', body: `Silikaveggen er negativt ladet ved pH > 3, og det er det som gir EOF [${K1}, slide 12]. → **pH > 3** (fasit). Distraktor: boka sier «spesielt over pH 5» [${B2}, p. 137], men forelesningen og LF bruker grensen pH > 3.` },
            { title: 'ii) Riktige utsagn om CE?', body: '«Separasjon skyldes kun elektroforetisk mobilitet»: feil. Separasjonen bestemmes av både µ_e og EOF [slide 13].' },
            { body: '«Ikke mulig å justere spenningsforskjeller»: feil. Den justeres med spenning eller kapillærlengde [slide 11].' },
            { body: '«Kapillæret må fylles med elektrolyttløsning»: riktig [slide 11].' },
            { body: '«ID 50–75 µm og lengde 20–100 cm»: riktig [slide 11]. → **De to siste** (fasit).' },
            { title: 'iii) «EOF er avgjørende for elueringsrekkefølgen» (ja/nei)', body: 'EOF drar alle ioner mot katoden. Uten tilstrekkelig EOF når anioner aldri detektoren, og rekkefølgen kation → nøytral → anion følger av at EOF overgår anionenes egen mobilitet [slide 17–19]. → **Ja** (fasit).' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 2e; ${LF24}, oppg. 2e]`}
        />
        <Example
          title="H24 oppg. 2(c): flowprofiler (5 p)"
          steps={[
            { body: 'Figuren sammenligner flowprofilene i CE og LC.' },
            { body: 'A er flat, skyldes EOF, drives av ladninger langs kapillæret, uten trykkfall og med jevn hastighet.' },
            { body: 'B er parabolsk og trykkindusert (LC), drives av trykkforskjeller, og friksjon gir ulik hastighet.' },
            { body: 'Fordelen ligger hos A: mindre båndspredning, bedre toppoppløsning og bedre separasjonseffektivitet.' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 2c; ${LF24}, oppg. 2c]`}
        />
        <FadedExample
          title="H25 oppg. 11: CE sammenlignet med kromatografi (4 p)"
          steps={[
            { title: 'Hvilken kromatografisk metode?', body: 'HPLC.' },
            { title: 'Hva driver transporten?', body: 'HPLC bruker en pumpe (trykk). CE bruker spenning (påført elektrisk felt) via EOF.', hidden: true },
            { title: 'Flowprofil og konsekvens?', body: 'CE har flat profil (EOF, ingen trykkfall, jevn hastighet). HPLC har parabolsk profil (trykkdrevet, friksjon). CE gir derfor mye høyere platetall, smalere topper og mindre båndspredning.', hidden: true },
            { title: 'Andre forskjeller?', body: `CE bruker mindre injeksjonsvolum og har kortere kolonner. Ingen stasjonær fase og fordeling i CE [${K1}, slide 25].`, hidden: true },
            { title: 'Hvilken er mest sensitiv?', body: `I utgangspunktet HPLC. CE har kort optisk veilengde (= ID) og små injeksjonsvolumer [${B2}, p. 141]. Avhengig av deteksjon (f.eks. LIF) kan CE likevel bli mer følsom.`, hidden: true },
          ]}
          cite={`[${E25}, oppg. 11; ${LF25}, oppg. 11]`}
        />
        <Example
          title="H25 oppg. 9 (delvis) — [UTLEDET, ingen fasit i LF]"
          steps={[
            { title: '«Høy oppløsning og svært små prøvevolum (nL)», «Lite forbruk av prøvebuffer»', body: `${U}→ CE [${K1}, slide 9].` },
            { title: '«EOF viktig for separasjon», «Kan oppnå platehøyder < 1 µm»', body: `${U}→ CE [${K1}, slide 10–11, 13].` },
          ]}
          cite={`[${E25}, oppg. 9]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="«Separasjon skyldes kun elektroforetisk mobilitet»" cite={`[${K1}, slide 13; ${LF24}, oppg. 2e]`}>Feil. Både µ_e og EOF bestemmer migrasjonen.</Trap>
        <Trap title="Nøytrale separeres ikke i CZE" cite={`[${K1}, slide 17, 19]`}>De kommer ut samlet med EOF (dette er grunnen til MEKC og CEC, se side 26).</Trap>
        <Trap title="Anioner kommer sist, men de kommer" cite={`[${K1}, slide 17, 20–21]`}>Bare så lenge µ_eo &gt; |µ_e,anion|. Ved lav pH (svak EOF) eller reversert EOF snus bildet.</Trap>
        <Trap title="EOF-retning" cite={`[${K1}, slide 20–21; ${B2}, p. 129, 137]`}>Mot <em>katoden</em> ved negativ vegg. Positivt ladet vegg (kationisk surfaktant eller bundet positiv gruppe) gir EOF mot anoden.</Trap>
        <Trap title="Elektrolytt, organisk modifikator og spenning" cite={`[${K1}, slide 20]`}>Mer elektrolytt eller mer organisk modifikator gir <em>mindre</em> EOF. Høyere spenning gir <em>mer</em>.</Trap>
        <Trap title="pH-grensen" cite={`[${LF24}, oppg. 2e]`}>Eksamen (H24) godtar pH &gt; 3, ikke pH &gt; 5.</Trap>
        <Trap title="H < 1 µm og N opptil 10⁶" cite={`[${K1}, slide 10–11]`}>Skyldes den flate profilen (og ingen massetransportledd mot stasjonærfase). Ikke forveksle med HPLC-tall. H25 oppg. 9: «Kan oppnå platehøyder &lt; 1 µm», «EOF viktig» og «nL prøvevolum» hører til CE.</Trap>
        <Trap title="CE er ikke kromatografi" cite={`[${K1}, slide 25]`}>Men CEC er det (side 26).</Trap>
        <Trap title="Større ID er ikke bedre deteksjon uten pris" cite={`[${K1}, slide 10; ${B2}, p. 136]`}>Større veilengde, men mer Joule-varme og bredere bånd.</Trap>
      </Section>
    </>
  )
}
