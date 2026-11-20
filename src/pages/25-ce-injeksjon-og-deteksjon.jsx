import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Block, Diagram, Svg, Box, Arrow, Label, Plot, Columns, V, tone } from '../components'

const K2 = 'Kapillærelektroforese del 2 m notater.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'

export const meta = {
  title: 'CE: prøveapplisering (injeksjon) og deteksjon',
  topic: 'ce',
  examWeight: { level: 'medium', note: 'H25 oppg. 12 (6 p): de to vanligste injeksjonsmetodene, prinsipper, og sammenligning av selektivitet og sensitivitet. H25 oppg. 11 (sensitivitet CE vs. HPLC) og oppg. 9 («nL prøvevolum») berører også siden' },
  examTasks: [
    'H2025: oppg. 12 (injeksjon) (index: side 25)',
    'H2025 oppg. 12 (6 p): to vanligste injeksjonsmetoder, prinsipper, og sammenligning av selektivitet og sensitivitet. Fullt LF.',
    'H2025 oppg. 11 (4 p): sensitivitet CE vs. HPLC (se side 24).',
    'H2025 oppg. 9: «Høy oppløsning og svært små prøvevolum (nL)» → CE [UTLEDET — ingen fasit].',
    'Ikke spurt på H2024.',
  ],
  buildsOn: ['24-ce-mobilitet-og-eof', '06-hplc-detektorer', '14-ms-ionisering'],
  usedIn: ['26-ce-metoder-og-cec'],
  sources: [
    `[${K2}, slide 3–19]`,
    `[${B2}, p. 136–141] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[${E25}, oppg. 9, 11, 12] / [${LF25}, oppg. 11, 12]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilke to injeksjonsmetoder er de vanligste i CE?', a: `Hydrodynamisk (hydrostatisk) og elektrokinetisk [${K2}, slide 5; ${LF25}, oppg. 12i].` },
    { id: 'p2', kind: 'pretest', q: 'Hvilken av dem gir høyest sensitivitet, og hvilken er mest representativ for prøvesammensetningen?', a: `Elektrokinetisk gir høyest sensitivitet, men favoriserer ioner med høy mobilitet. Hydrodynamisk injiserer alle komponenter omtrent proporsjonalt med konsentrasjonen [slide 7, 10; ${LF25}, oppg. 12iii].` },
    { id: 'p3', kind: 'pretest', q: 'Hvorfor er UV-deteksjon i CE relativt lite følsom?', a: `Optisk veilengde = kapillærets indre diameter (50–75 µm), og injeksjonsvolumene er bare nL [${B2}, p. 140–141].` },
    { id: 't1', q: 'Nevn tre måter å oppnå hydrodynamisk injeksjon på.', a: `Overtrykk på prøvevial, vakuum på utløpet, eller høydeforskjell mellom inlet og outlet (gravitasjon/hevert) [${K2}, slide 6–7; ${B2}, p. 138].` },
    { id: 't2', q: 'Du skal kvantifisere en blanding av ioner med svært ulik mobilitet og trenger riktig forhold mellom dem. Hvilken injeksjon velger du?', a: `Hydrodynamisk. Alle komponenter injiseres proporsjonalt med konsentrasjonen, mens elektrokinetisk overrepresenterer ionene med høy mobilitet [slide 7, 10].` },
    { id: 't3', q: 'Hvorfor øker en bubble cell følsomheten i CE-UV?', a: `Den øker den optiske veilengden i deteksjonsområdet. Ellers er veilengden lik kapillærets ID, og absorbansen er proporsjonal med veilengden [${B2}, p. 140].` },
    { id: 't4', q: 'Hvilken ioniseringsteknikk brukes vanligvis i CE-MS, og hvilket praktisk problem må grensesnittet løse?', a: `ESI. CE-høyspenningen og ESI-høyspenningen er to separate kretser som må separeres i grensesnittet (sheath flow eller sheathless) [${K2}, slide 16; ${B2}, p. 140].` },
    { id: 't5', q: 'Hvordan detekteres uorganiske ioner uten UV-absorpsjon i CE?', a: `Med indirekte UV-Vis-deteksjon [${B2}, p. 140].` },
  ],
  equations: [
    {
      id: 'N', label: 'Maksimalt platetall begrenset av injeksjonsbåndet',
      tex: String.raw`\va{N} = \frac{\vb{L_D}^2}{\vc{L_i}^2}`,
      vars: [
        { sym: String.raw`\va{N}`, desc: 'maks oppnåelig platetall', unit: '–' },
        { sym: String.raw`\vb{L_D}`, desc: 'effektiv kapillærlengde (innløp → detektor)', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\vc{L_i}`, desc: 'lengde på injeksjonsbåndet', unit: String.raw`\mathrm{m}` },
      ],
      note: 'Gjelder når injeksjonen er eneste bidrag til båndbredden. Gir kravet om nL-injeksjon.',
      cite: `[${K2}, slide 4; ${B2}, p. 137]`,
      check: { status: 'verified', note: 'Bok del 2 p. 137 (PDF s. 53): N = L_D²/L_i².' },
    },
    {
      id: 'hd', label: 'Hydrodynamisk injeksjon (lign. 6.4)',
      tex: String.raw`\vc{L_i} = v\cdot t,\qquad v = \frac{\rho g \pi r^4 \Delta h\, t}{8\eta L}`,
      vars: [
        { sym: 'v', desc: '«hydrodynamisk hastighet» (se merknad)', unit: '–' },
        { sym: 't', desc: 'injeksjonstid', unit: String.raw`\mathrm{s}` },
        { sym: String.raw`\rho`, desc: 'elektrolyttens tetthet', unit: String.raw`\mathrm{kg\,m^{-3}}` },
        { sym: String.raw`\eta`, desc: 'elektrolyttens viskositet', unit: String.raw`\mathrm{Pa\,s}` },
        { sym: 'g', desc: 'tyngdeakselerasjon', unit: String.raw`\mathrm{m\,s^{-2}}` },
        { sym: 'r', desc: 'kapillærradius', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\Delta h`, desc: 'høydeforskjell inlet–outlet', unit: String.raw`\mathrm{m}` },
        { sym: 'L', desc: 'total kapillærlengde', unit: String.raw`\mathrm{m}` },
      ],
      note: 'Gjelder gravitasjons- og siphoninjeksjon.',
      cite: `[${B2}, p. 138]`,
      check: { status: 'verified', note: 'Bok lign. 6.4 (p. 138, PDF s. 54) identisk som trykt — men se avviksmerknaden: uttrykket har enhet volum, ikke hastighet.' },
    },
    {
      id: 'ek', label: 'Elektrokinetisk injisert mengde (lign. 6.5)',
      tex: String.raw`Q = \frac{(\vd{\mu_e} + \mu_{eo})\,V_i\,\pi r^2\, t\, C}{L}`,
      vars: [
        { sym: 'Q', desc: 'injisert analyttmengde', unit: String.raw`\mathrm{mol}` },
        { sym: String.raw`\vd{\mu_e},\ \mu_{eo}`, desc: 'elektroforetisk og elektroosmotisk mobilitet', unit: String.raw`\mathrm{m^2\,V^{-1}\,s^{-1}}` },
        { sym: 'V_i', desc: 'injeksjonsspenning', unit: String.raw`\mathrm{V}` },
        { sym: 'C', desc: 'analyttkonsentrasjon', unit: String.raw`\mathrm{mol\,m^{-3}}` },
      ],
      note: '$Q \\propto \\mu_e$, så analytter med høy mobilitet (små, høyt ladde) injiseres i større mengde. Det er kilden til diskrimineringen.',
      cite: `[${B2}, p. 139]`,
      check: { status: 'verified', note: 'Bok lign. 6.5 (p. 139, PDF s. 55) identisk.' },
    },
  ],
}

const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>

/* Four injection variants */
function Injeksjon() {
  const vial = (x, y, lab) => (
    <g>
      <rect x={x} y={y} width={40} height={40} rx={4} style={{ fill: `color-mix(in srgb, ${tone('definition')} 18%, var(--bg))`, stroke: tone('ink') }} />
      <Label x={x + 20} y={y + 56} size={9}>{lab}</Label>
    </g>
  )
  const panel = (ox, title, extra) => (
    <g>
      <Label x={ox + 100} y={18} size={11}>{title}</Label>
      {extra}
    </g>
  )
  return (
    <Svg w={460} h={360} label="Injeksjonsvarianter">
      {panel(0, '(a) trykk', <>{vial(20, 80, 'inlet')}{vial(170, 80, 'outlet')}<path d="M 40 90 C 40 40, 190 40, 190 90" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} /><Arrow x1={40} y1={50} x2={40} y2={78} t="trap" /><Label x={40} y={44} size={9} t="trap">Δp · 50 mbar, 3–5 s</Label></>)}
      {panel(230, '(b) vakuum', <>{vial(250, 80, 'inlet')}{vial(400, 80, 'outlet')}<path d="M 270 90 C 270 40, 420 40, 420 90" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} /><Arrow x1={420} y1={78} x2={420} y2={50} t="trap" /><Label x={420} y={44} size={9} t="trap">Δp</Label></>)}
      {panel(0, '', <>{<Label x={100} y={190} size={11}>(c) gravitasjon</Label>}{vial(20, 210, 'inlet (hevet)')}{vial(170, 270, 'outlet')}<path d="M 40 220 C 40 180, 190 200, 190 280" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} /><line x1={70} y1={250} x2={70} y2={310} style={{ stroke: tone('trap') }} /><Label x={78} y={284} anchor="start" size={10} t="trap">Δh</Label></>)}
      {panel(230, '', <>{<Label x={330} y={190} size={11}>(d) elektrokinetisk</Label>}{vial(250, 230, 'prøve (+)')}{vial(400, 230, 'outlet (−)')}<path d="M 270 240 C 270 200, 420 200, 420 240" style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} /><Arrow x1={290} y1={212} x2={330} y2={205} t="var-c" head={6} /><Label x={345} y={300} size={9} t="var-c">EOF · 3–5 kV, 3–10 s</Label></>)}
    </Svg>
  )
}

/* Discrimination */
function Diskriminering() {
  const ions = (x, y, smallN, bigN) => (
    <g>
      {Array.from({ length: smallN }, (_, i) => <circle key={`s${i}`} cx={x + (i % 4) * 14} cy={y + Math.floor(i / 4) * 14} r={4} style={{ fill: tone('var-a') }} />)}
      {Array.from({ length: bigN }, (_, i) => <circle key={`b${i}`} cx={x + 70 + (i % 3) * 18} cy={y + Math.floor(i / 3) * 18} r={7} style={{ fill: tone('var-e') }} />)}
    </g>
  )
  return (
    <Svg w={460} h={240} label="Diskriminering ved elektrokinetisk injeksjon">
      <rect x={20} y={30} width={140} height={100} rx={6} style={{ fill: 'none', stroke: tone('ink') }} />
      <Label x={90} y={20} size={11}>prøvevial (1 : 1)</Label>
      {ions(30, 50, 6, 6)}
      <rect x={210} y={40} width={230} height={50} style={{ fill: 'none', stroke: tone('ink') }} />
      <Label x={325} y={30} size={11}>plugg etter elektrokinetisk</Label>
      {ions(220, 52, 12, 2)}
      <rect x={210} y={150} width={230} height={50} style={{ fill: 'none', stroke: tone('ink') }} />
      <Label x={325} y={140} size={11}>plugg etter hydrodynamisk</Label>
      {ions(220, 162, 6, 6)}
      <circle cx={40} cy={220} r={4} style={{ fill: tone('var-a') }} /><Label x={50} y={224} anchor="start" size={10}>små, høyt ladde</Label>
      <circle cx={160} cy={220} r={7} style={{ fill: tone('var-e') }} /><Label x={172} y={224} anchor="start" size={10}>store, lavt ladde</Label>
    </Svg>
  )
}

/* S/N comparison */
function SNSammenligning() {
  const trace = (y, peak, noise) => Array.from({ length: 80 }, (_, i) => { const x = 20 + i * 2.6; return `${x},${y - peak * Math.exp(-((i - 40) ** 2) / 6) - noise * Math.sin(i * 2.7) * Math.cos(i * 1.3)}` }).join(' ')
  return (
    <Svg w={460} h={190} label="S/N hydrodynamisk vs. elektrokinetisk">
      <polyline points={trace(140, 18, 6)} style={{ fill: 'none', stroke: tone('var-b'), strokeWidth: 1.5 }} />
      <Label x={125} y={170} size={11}>(a) hydrodynamisk, S/N = 7,7</Label>
      <polyline points={trace(140, 110, 0.5).replace(/(\d+\.?\d*),/g, (m, x) => `${+x + 220},`)} style={{ fill: 'none', stroke: tone('var-c'), strokeWidth: 1.5 }} />
      <Label x={345} y={170} size={11}>(b) elektrokinetisk (FESI), S/N = 340</Label>
      <Label x={230} y={186} size={9}>triptorelin 0,5 µg/mL</Label>
    </Svg>
  )
}

/* CE-ESI-MS */
function CEMS() {
  return (
    <Svg w={460} h={180} label="CE-ESI-MS-oppsett">
      <Box x={4} y={70} w={86} h={40} label="buffervial" sub="anode" t="definition" />
      <line x1={90} y1={90} x2={250} y2={90} style={{ stroke: tone('ink'), strokeWidth: 3 }} />
      <Label x={165} y={82} size={10}>CE-kapillær</Label>
      <Box x={250} y={74} w={70} h={32} label="ESI-nål" t="var-e" />
      <path d="M 320 90 L 350 75 M 320 90 L 350 105 M 320 90 L 355 90" style={{ stroke: tone('var-e'), strokeWidth: 1.5 }} />
      <Box x={360} y={66} w={90} h={48} label="MS" sub="m/z" t="ink" />
      <Box x={60} y={130} w={110} h={30} label="CE-HV" t="trap" />
      <Box x={240} y={130} w={110} h={30} label="ESI-HV" t="trap" />
      <Label x={205} y={176} size={10} t="trap">to separate HV-kretser (sheath / sheathless)</Label>
    </Svg>
  )
}

const nmax = (vnl, p) => { const r = p.id * 1e-6 / 2; const Li = (vnl * 1e-12) / (Math.PI * r * r); return (p.ld / Li) ** 2 }

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Små plugger, kort lysvei">
        <MentalModel cite={`[${K2}, slide 4, 7, 10, 14, 16; ${B2}, p. 139–140]`}>
          Kapillæret rommer bare ca. 1 µL, så prøvepluggen må være i nL-området. Ellers blir båndet bredt allerede ved start, og de høye <V c="a">platetallene</V> går tapt (<V c="a">N</V> = <V c="b">L_D</V>²/<V c="c">L_i</V>²). Prøven kan presses inn mekanisk (trykk, vakuum, høydeforskjell = hydrodynamisk) eller trekkes inn med spenning (elektrokinetisk).{' '}
          Mekanisk innføring er «blind» for ladning: alt kommer inn i forhold til konsentrasjonen. Det elektriske feltet derimot trekker inn mest av de raske, høyt ladde ionene (høy <V c="d">µ_e</V>). Det gir høy følsomhet for ioner, men skjev og mindre reproduserbar injeksjon. På deteksjonssiden er problemet den korte lysveien: UV er standard men middels følsom, LIF er svært følsom, og MS (via ESI) gir identitet i tillegg.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Prøvevolum" cite={`[${K2}, slide 4; ${B2}, p. 137]`}>Små volum (nL eller mindre) for å unngå at injeksjonsvolumet bidrar til båndbredden. Typisk 1–50 nL (= 0,001–0,05 µL). Eksempel: kapillærvolumet er 1 µL for et kapillær på 50 cm × 50 µm ID. Injeksjon &lt; 10 nL er nok til å oppnå 1 000 000 plater i et kapillær på 50 µm ID × 1 m. <strong>Injeksjonsbånd (L_i)</strong>: lengden på prøvepluggen i kapillæret. Notat (slide 4): «smalt og definert, jevnt fordelt, uten konsentrasjonsforskjeller».</Def>
        <Avvik>Slide 4 (CE del 2): «1–50 nL (= 0,001–0,005 µL)» — 50 nL er 0,05 µL, ikke 0,005 µL.</Avvik>
        <Def term="Injeksjonsmetoder" cite={`[${K2}, slide 5; ${B2}, p. 138]`}>To hovedmetoder er (1) hydrodynamisk (hydrostatisk) og (2) elektrokinetisk. I tillegg finnes isotakoforese, spesielle loop-teknikker og stacking.</Def>
        <Columns>
          <div>
            <Def term="1. Hydrodynamisk injeksjon" cite={`[${K2}, slide 6–9; ${B2}, p. 138]`}>Prøveglasset plasseres ved kapillærinngangen, og en prøvealikvot tas opp ved trykkforskjell: <strong>overtrykk</strong> på prøveglasset (notat: typisk 50 mbar, injeksjonstid 3–5 s, eventuelt opp mot 10–30 s), <strong>vakuum</strong> på utløpet, eller <strong>nivåforskjell (Δh)</strong> mellom inngang og utgang (væsken flyttes fra høyt til lavt punkt med gravitasjon, heverts-/siphonsystem, «gravitasjonsinjeksjon»). Fordeler: enkelt og krever ikke elektrisk utstyr. Notat (slide 6): høy reproduserbarhet, men mindre følsom enn elektrokinetisk. Ulemper: kan være mindre presist. Gravitasjonsvarianten gjør det vanskelig å kontrollere nøyaktig prøvemengde, og notatet sier den er lite egnet for viskøse prøver. <strong>Oppsummert: prøven presses inn, og alle komponenter injiseres omtrent proporsjonalt med konsentrasjonen.</strong> Eksempler: katekolaminer (hydrodynamisk 5 s, 20 kV, pH 5,5 fosfat-borat, 205 nm, slide 8). Sorbinsyreisomerer med β-CD (1 s ved 0,169 bar, 15 kV, pH 9,3 tetraborat, 254 nm, slide 9). Bokas fig. 6.7–6.8: 0,5 psi i 5 s.</Def>
            <Def term="2. Elektrokinetisk injeksjon" cite={`[${K2}, slide 10; ${B2}, p. 139]`}>Prøveglasset plasseres ved kapillærinngangen, og prøven tas opp ved å tilføre spenning. Spenningen mellom prøveglass og kapillær skaper elektroosmose, og prøven trekkes inn. Notat: lav spenning, 3–5 kV (1–10 kV), og injeksjonstid 3–10 s. Analyttene føres inn med en <strong>kombinasjon av egen migrasjonshastighet og EOF</strong>. Uten EOF kalles det <strong>elektroforetisk injeksjon</strong>. Forbedret følsomhet, men dårligere reproduserbarhet enn andre metoder. <strong>Diskriminering</strong>: små, høyt ladde ioner vandrer raskere inn enn store. <strong>Oppsummert: komponenter med høy mobilitet favoriseres.</strong> Etter injeksjonen flyttes inletenden til en vial med separasjonselektrolytt, og separasjonsspenningen settes på.</Def>
          </div>
          <div>
            <Diagram title="Tre hydrodynamiske varianter og elektrokinetisk" cite={`[${K2}, slide 6–7, 10]`}><Injeksjon /></Diagram>
            <Diagram title="Diskriminering ved elektrokinetisk injeksjon" cite={`[${K2}, slide 10–11; ${B2}, p. 139]`}><Diskriminering /></Diagram>
          </div>
        </Columns>
        <Columns>
          <Def term="Hydrodynamisk vs. elektrokinetisk" cite={`[${K2}, slide 11–13]`}>Hydrodynamisk: prøvevialen omsluttes sammen med kapillærenden, og trykk legges på kammeret en fast tid. Elektrokinetisk: elektroden står i prøvevialen og feltet driver prøven inn. <strong>Signaleksempel (triptorelin 0,5 µg/mL)</strong>: (a) hydrodynamisk, 50 mbar i 20 s: S/N = 7,7. (b) Elektrokinetisk (FESI, 10 kV i 20 s etter en kort vannplugg): S/N = 340.</Def>
          <Diagram title="S/N hydrodynamisk vs. elektrokinetisk" caption="Skisse etter slide 12." cite={`[${K2}, slide 12]`}><SNSammenligning /></Diagram>
        </Columns>

        <Def term="Elektroferogram og on-line deteksjon" cite={`[${K2}, slide 14; ${B2}, p. 137, 139]`}>Detektorsignalet som funksjon av separasjonstid. Deteksjon skjer on-line, med detektoren nær utløpet. Lengden innløp → deteksjonspunkt er den effektive lengden L_D.</Def>
        <Def term="UV-Vis" cite={`[${K2}, slide 14, 18; ${B2}, p. 136, 140]`}>Standard i kommersielle instrumenter og mest brukt. Polyimidlaget må fjernes i deteksjonsområdet, som gir et optisk vindu på noen mm. Fiberoptikk brukes i de fleste detektorer. Dårlige deteksjonsgrenser fordi veilengden = kapillærets ID. <strong>cLOD ∝ 1/ID</strong>. Bubble cell eller høysensitivitetscelle gir lengre veilengde, men er dyrere. <strong>Indirekte UV-Vis</strong> brukes for forbindelser uten absorpsjon, f.eks. uorganiske ioner (slide 18 viser kationanalyse og kation + amingruppe-analyse med UV-Vis).</Def>
        <Def term="Fluorescens" cite={`[${K2}, slide 14–15; ${B2}, p. 140]`}>For prøver som er naturlig fluorescerende eller fluorescensmerket. Gode deteksjonsgrenser og følsom. <strong>LIF (laserindusert fluorescens)</strong> gir enda bedre deteksjonsgrenser. Notat: kort analysetid og god kvantifisering, godt egnet til immunoassays og enzymassays. Eksempel: Sanger-sekvensering med fluorescensmerkede ddNTP-er, kapillær-gelelektroforese og laser/fluorescensdeteksjon.</Def>
        <Def term="Elektrokjemisk detektor" cite={`[${B2}, p. 140]`}>Mulig, men krever et spesielt grensesnitt som separerer de to elektriske kretsene.</Def>
        <Columns>
          <Def term="CE-MS" cite={`[${K2}, slide 16; ${B2}, p. 140]`}>Høy separasjonsoppløsning kombinert med følsomhet og spesifisitet gjør det mulig å analysere komplekse prøver nøyaktig med svært små prøvemengder. Viktig i bioanalyse, med økende bruk for proteiner, peptider og andre biomolekyler. Ioner dannes vanligvis ved ESI. De to elektriske kretsene (CE-HV og ESI-HV) må separeres i grensesnittet. Finnes med sheath flow (make-up flow) eller sheathless. Notat: identifisering basert på masse/ladning-forhold, m/z.</Def>
          <Diagram title="CE-ESI-MS-oppsett" cite={`[${K2}, slide 16]`}><CEMS /></Diagram>
        </Columns>
        <Def term="Sensitivitet CE vs. LC" cite={`[${B2}, p. 141; ${LF25}, oppg. 11]`}>cLOD/cLOQ i sone-CE (ikke lavere enn ca. 10⁻⁶ M) er generelt høyere enn i LC, på grunn av kort optisk vei (50–100 µm) og små injeksjonsvolumer (2–20 nL). LF H25: i utgangspunktet er HPLC mer følsom, men med riktig deteksjon kan CE bli mer følsom.</Def>
        <Def term="Sammenligning med HPLC (slide 17)" cite={`[${K2}, slide 17]`}>CE gir smalere topp og høyere platetall enn HPLC for samme analytt. Elektroferogram vs. kromatogram for koffein, aspartam og benzoat.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="N" />
        <Plot
          title="Injeksjonsbånd vs. maks platetall"
          caption="$L_i = V_{inj}/(\pi r^2)$ og $N_{max} = L_D^2/L_i^2$ (log-akse). Kursets område 1–50 nL; ID 50–75 µm; L_D 0,4–1 m. Stiplet: 10⁶ plater og 10 nL. Ankerpunkt fra kurset: 50 µm × 1 m gir 10⁶ plater ved ca. 2 nL — «< 10 nL» er en øvre grense."
          cite={`[${K2}, slide 4; ${B2}, p. 137]`}
          x={{ min: 1, max: 50, label: 'V_inj (nL)', log: true }}
          y={{ label: 'N_max', log: true, min: 1e3, max: 1e8 }}
          params={[
            { key: 'id', label: 'ID', min: 50, max: 75, step: 25, value: 50, unit: 'µm' },
            { key: 'ld', label: '$L_D$', min: 0.4, max: 1, step: 0.05, value: 1, unit: 'm' },
          ]}
          series={[{ key: 'n', label: 'N_max', t: 'var-a', fn: (v, p) => nmax(v, p) }]}
          marks={[{ y: 1e6, label: '10⁶' }, { x: 10, label: '10 nL' }]}
        />
        <Eq id="hd" />
        <Avvik>Bok lign. 6.4 (p. 138) er trykt som hastighet, men har enhet volum: med πr⁴ og t er uttrykket Hagen–Poiseuilles injiserte volum (m³). Pluggens lengde blir da L_i = V_inj/(πr²). Kursfilene oppklarer ikke dette — bruk ligningen kvalitativt: mer injeksjon ved større Δh, r og t, mindre ved høyere η og L.</Avvik>
        <Eq id="ek" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 12: injeksjon i CE (6 p)"
          steps={[
            { title: 'i) De to vanligste appliseringsmetodene?', body: `→ **Hydrodynamisk og elektrokinetisk** [${K2}, slide 5].` },
            { title: 'ii) Hydrodynamisk:', body: 'Prøveglasset plasseres ved kapillærinngangen, og prøven tas opp ved trykkforskjell. Det gjøres med positivt trykk på prøveglasset, vakuum eller et hevertsystem (høydeforskjell). Krever ikke elektrisk utstyr og er enkel [slide 6–7].' },
            { title: 'Elektrokinetisk:', body: `Prøveglasset plasseres ved kapillærinngangen, og prøven tas opp ved å tilføre spenning. Det skapes elektroosmose, og prøven trekkes inn. Analyttene transporteres med en kombinasjon av migrasjonshastighet og EOF. Uten EOF kalles det elektroforetisk injeksjon. Dårligere reproduserbarhet [slide 10; ${B2}, p. 139].` },
            { title: 'iii) Elektrokinetisk:', body: 'relativt høy sensitivitet (avhengig av ion) og selektiv for ioner, fordi Q ∝ (µ_e + µ_eo).' },
            { title: 'Hydrodynamisk:', body: 'relativt lav sensitivitet og ikke selektiv for ioner, fordi alle komponenter går inn proporsjonalt med konsentrasjonen [LF oppg. 12iii; slide 7, 10].' },
            { title: 'Tallfest gjerne:', body: 'samme prøve ga S/N 7,7 (hydrodynamisk) mot 340 (elektrokinetisk), dvs. ca. 44 ganger høyere [slide 12]. 340/7,7 = 44,2.' },
          ]}
          cite={`[${E25}, oppg. 12; ${LF25}, oppg. 12]`}
        />
        <FadedExample
          title="Hvor lite må injeksjonen være for 10⁶ plater?"
          given="Kapillær 50 µm ID × 1 m. Anta L_D ≈ 1 m."
          steps={[
            { body: 'Sett $N = L_D^2/L_i^2 = 10^6$, som gir $L_i = L_D/\\sqrt{10^6} = L_D/1000$.' },
            { title: '$L_i$ = ?', body: '1 m / 1000 = **1 mm**.', hidden: true },
            { title: 'Tverrsnitt: $r$ = 25 µm, så $\\pi r^2$ = ?', body: 'π·(25·10⁻⁶ m)² = **1,96·10⁻⁹ m²**.', hidden: true },
            { title: 'Pluggvolum $V = \\pi r^2 L_i$ = ?', body: '1,96·10⁻⁹ m² · 10⁻³ m = 1,96·10⁻¹² m³ ≈ **2 nL**.', hidden: true },
            { title: 'Stemmer det med kursets «< 10 nL»?', body: 'Ja. 2 nL er godt under grensen. 10 nL ville i dette kapillæret gitt $L_i$ ≈ 5 mm og N ≈ 4·10⁴, så «< 10 nL» er en øvre grense og ikke målet.', hidden: true },
            { title: 'Kontroll: totalvolum av 50 cm × 50 µm = ?', body: '1,96·10⁻⁹ · 0,5 ≈ 0,98·10⁻⁹ m³ ≈ **1 µL** (som på slide 4).', hidden: true },
          ]}
          cite={`[${K2}, slide 4; ${B2}, p. 137]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Elektrokinetisk = «bedre»" cite={`[${K2}, slide 7, 10]`}>Høyere følsomhet, men diskriminerende (favoriserer høy mobilitet) og dårligere reproduserbarhet. Hydrodynamisk er representativ.</Trap>
        <Trap title="Elektrokinetisk vs. elektroforetisk injeksjon" cite={`[${B2}, p. 139; ${LF25}, oppg. 12ii]`}>Uten EOF heter det <em>elektroforetisk</em> injeksjon.</Trap>
        <Trap title="Hydrodynamisk er ikke bare trykk" cite={`[${K2}, slide 6–7]`}>Vakuum og høydeforskjell (gravitasjon, hevert) teller også.</Trap>
        <Trap title="CE er ikke automatisk mer følsom enn HPLC" cite={`[${B2}, p. 141; ${LF25}, oppg. 11]`}>UV-veilengden = ID, og injeksjonsvolumet er nL, så HPLC er i utgangspunktet mer følsom. LIF og MS kan snu dette.</Trap>
        <Trap title="Polyimidbelegget må fjernes" cite={`[${K2}, slide 14; ${B2}, p. 140]`}>I deteksjonsvinduet for UV.</Trap>
        <Trap title="CE-MS og CE-EC" cite={`[${B2}, p. 140]`}>Krever separasjon av de to elektriske kretsene i grensesnittet.</Trap>
        <Trap title="Gel-CE (CGE) og CEC bruker bare elektrokinetisk injeksjon" cite={`[${K2}, slide 24, 34]`}>Se side 26.</Trap>
        <Trap title="Større ID" cite={`[${B2}, p. 136]`}>Gir lavere cLOD (mer lys), men bredere bånd og mer Joule-varme. 50–75 µm er kompromisset.</Trap>
      </Section>
    </>
  )
}
