import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Block, Diagram, Svg, Box, Arrow, Label, Plot, Columns, V, tone } from '../components'

const G = 'Gasskromatografi m notater.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const REL = String.raw`\text{relativ}`

export const meta = {
  title: 'GC-detektorer',
  topic: 'gc',
  examWeight: { level: 'low', note: 'H25 oppg. 2 flervalg (2 av 5 p: hvilken GC-detektor gir strukturinformasjon, hva ECD er følsom for). FID inngår i H25 oppg. 4-oppsettet' },
  examTasks: [
    'H2024: 1-serien GC (index: side 11–13)',
    'H2025: oppg. 4 (index: side 11–13)',
    'H2025 oppg. 2 (flervalg, 2 av 5 delspørsmål): hvilken GC-detektor gir strukturell informasjon (MS), og hva ECD er mest følsom for (halogenerte forbindelser).',
    'H2025 oppg. 4 (indirekte): FID er detektoren i GC-casen. Ingen deloppgave spør om detektoren.',
  ],
  buildsOn: ['11-gc-baeregass-og-injeksjon', '12-gc-kolonner-og-stasjonaerfaser'],
  usedIn: ['14-ms-ionisering', '18-metodevalidering-lod-loq'],
  sources: [
    `[${G}, slide 15–18]`,
    `[${B1}, p. 27–35] (p. = boksidetall; PDF-side = bokside + 16. Tabell 2.4 på p. 29 er skannet rotert og ikke lesbar i OCR, så verdiene er hentet fra brødteksten)`,
    '[Pensum.pdf, p. 1]',
    `[${E25}, oppg. 2, 4] / [${LF25}, oppg. 2]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilken GC-detektor er mest brukt?', a: `FID (flammeionisasjonsdetektor) [${G}, slide 15; ${B1}, p. 28].` },
    { id: 'p2', kind: 'pretest', q: 'Hvilken GC-detektor er spesielt følsom for halogenerte forbindelser?', a: `ECD (elektroninnfangningsdetektor) [${LF25}, oppg. 2; ${B1}, p. 31].` },
    { id: 'p3', kind: 'pretest', q: 'Hva skjer med signalet fra en massefølsom detektor hvis gasstrømmen stoppes?', a: `Det blir ingen massestrøm, og dermed ikke noe signal [${G}, slide 16].` },
    { id: 't1', q: 'Forklar kort hvordan FID gir signal.', a: `Prøven forbrennes i en H₂/luft-flamme. CH-radikaler danner CHO⁺ + e⁻, og med 300 V mellom dyse og kollektor gir ionene en strøm proporsjonal med mengden forbrent forbindelse [${B1}, p. 30; ${G}, slide 16].` },
    { id: 't2', q: 'Hvorfor kreves god flowkontroll for kvantifisering med TCD, men ikke med FID?', a: `TCD er konsentrasjonsfølsom, så arealet avhenger omvendt av flowen. FID er massesensitiv, så arealet er uavhengig av flowen [${B1}, p. 27].` },
    { id: 't3', q: 'Hvorfor tilsettes argon/metan som reagensgass i ECD når He er bæregass?', a: `He ioniseres ikke lett. Reagensgassen gir de termiske elektronene som trengs til den stående strømmen [${B1}, p. 32].` },
    { id: 't4', q: 'Hvorfor brukes ofte et split-interface mellom GC og MS?', a: `Hvis kolonneenden går rett inn i ionekilden, kan varierende trykk gi varierende retensjonstider. Split-interfacet holder forholdene stabile [${B1}, p. 34].` },
    { id: 't5', q: 'Hvilken detektor brukes for lette og permanente gasser, og hvorfor?', a: `TCD. Den er universell og detekterer alle forbindelser med lavere varmeledningsevne enn bæregassen [${B1}, p. 28].` },
  ],
  equations: [
    {
      id: 'masse', label: 'Massesensitiv detektor',
      tex: String.raw`S = R_m \frac{dm}{dt} \qquad \va{A} = R_m\, k\, \vb{m}`,
      vars: [
        { sym: 'S', desc: 'signal', unit: REL },
        { sym: 'R_m', desc: 'responsfaktor (varierer mellom analytter)', unit: '–' },
        { sym: 'dm/dt', desc: 'massestrøm av analytt', unit: String.raw`\mathrm{ng/s}` },
        { sym: String.raw`\va{A}`, desc: 'toppareal', unit: REL },
        { sym: 'k', desc: 'systemkonstant', unit: '–' },
        { sym: String.raw`\vb{m}`, desc: 'analyttmasse', unit: String.raw`\mathrm{ng}` },
      ],
      note: 'Arealet er uavhengig av gasstrømmen.',
      cite: `[${B1}, p. 27, lign. 2.1]`,
      check: { status: 'verified', note: 'Bok p. 27 (PDF s. 43): S = R_m·dm/dt og lign. 2.1 A = R_m·k·m.' },
    },
    {
      id: 'kons', label: 'Konsentrasjonsfølsom detektor',
      tex: String.raw`\begin{gathered}S = R_c\, x_A \qquad x_A = \frac{F_A}{F_A + F_M} \\ \va{A} = R_c\, k\, \frac{\vb{m}}{\vc{F}}\end{gathered}`,
      vars: [
        { sym: 'R_c', desc: 'responsfaktor', unit: '–' },
        { sym: 'x_A', desc: 'molfraksjon analytt i MF', unit: '–' },
        { sym: 'F_A,\\ F_M', desc: 'mol analytt og mol MF per tidsenhet', unit: String.raw`\mathrm{mol/s}` },
        { sym: String.raw`\vc{F}`, desc: 'total strøm ($F_A + F_M$, ≈ $F_M$)', unit: String.raw`\mathrm{mL/min}` },
      ],
      note: 'Arealet avhenger omvendt av strømmen, så god flowkontroll trengs.',
      cite: `[${B1}, p. 27, lign. 2.2]`,
      check: { status: 'verified', note: 'Bok p. 27: S = R_c·x_A, x_A = F_A/(F_M + F_A), lign. 2.2 A = R_c·k·m/F.' },
    },
    {
      id: 'ms', label: 'MS-signal i GC',
      tex: String.raw`S = \frac{dm}{dt} = C \cdot \vc{F} \cdot R`,
      vars: [
        { sym: 'C', desc: 'konsentrasjon', unit: String.raw`\mathrm{ng/mL}` },
        { sym: String.raw`\vc{F}`, desc: 'MF-strøm', unit: String.raw`\mathrm{mL/min}` },
        { sym: 'R', desc: 'split ratio (hvis split brukes)', unit: '–' },
      ],
      cite: `[${B1}, p. 33, lign. 2.3]`,
      check: { status: 'verified', note: 'Bok lign. 2.3 (p. 33, PDF s. 49) identisk.' },
    },
  ],
}

const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>

/* Flow stop: mass vs concentration sensitive */
function FlowStopp() {
  const peak = (x) => 70 * Math.exp(-((x - 230) ** 2) / (2 * 40 * 40))
  const row = (y, mode, lab, note) => {
    const pts = []
    for (let x = 30; x <= 430; x += 4) {
      let v
      if (x < 200) v = peak(x)
      else if (x < 300) v = mode === 'm' ? 0 : peak(200)
      else v = peak(x - 100)
      pts.push(`${x},${y - v}`)
    }
    return (
      <g>
        <Label x={10} y={y - 84} anchor="start" size={12}>{lab}</Label>
        <line x1={30} y1={y} x2={430} y2={y} style={{ stroke: tone('muted') }} />
        <polyline points={pts.join(' ')} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2.5 }} />
        <line x1={200} y1={y + 6} x2={200} y2={y - 80} style={{ stroke: tone('trap'), strokeDasharray: '4 3' }} />
        <line x1={300} y1={y + 6} x2={300} y2={y - 80} style={{ stroke: tone('intuition'), strokeDasharray: '4 3' }} />
        <Label x={250} y={y + 18} size={11}>{note}</Label>
      </g>
    )
  }
  return (
    <Svg w={460} h={290} label="Stopp i flow: masse- vs. konsentrasjonsfølsom">
      <Label x={200} y={14} t="trap" size={11}>MF stop</Label>
      <Label x={300} y={14} t="intuition" size={11}>restart</Label>
      {row(120, 'm', 'Massefølsom', 'Ingen massestrøm – ikke noe signal')}
      {row(260, 'c', 'Konsentrasjonsfølsom', 'konstant konsentrasjon – konstant signal')}
    </Svg>
  )
}

/* FID */
function FID() {
  return (
    <Svg w={320} h={300} label="FID">
      <rect x={130} y={180} width={20} height={90} style={{ fill: `color-mix(in srgb, ${tone('muted')} 40%, var(--bg))`, stroke: tone('ink') }} />
      <Arrow x1={140} y1={295} x2={140} y2={270} />
      <Label x={140} y={292} size={10} anchor="start">  bæregass + H₂</Label>
      <Arrow x1={60} y1={240} x2={128} y2={240} />
      <Label x={56} y={236} anchor="end" size={11}>luft</Label>
      <path d="M 140 180 q -18 -30 0 -60 q 18 30 0 60" style={{ fill: tone('var-e'), opacity: 0.7 }} />
      <Label x={176} y={160} anchor="start" size={11}>flamme</Label>
      <rect x={110} y={70} width={60} height={14} rx={4} style={{ fill: tone('ink') }} />
      <Label x={140} y={62} size={11}>kollektor</Label>
      <line x1={170} y1={77} x2={240} y2={77} style={{ stroke: tone('ink') }} />
      <Box x={230} y={60} w={80} h={36} label="elektrometer" t="muted" />
      <Label x={260} y={130} size={10}>200–300 V</Label>
      <Label x={260} y={146} size={10}>mot jet</Label>
      <Label x={140} y={24} size={12} t="var-e">CH• → CHO⁺ + e⁻</Label>
      <Label x={140} y={40} size={10}>(reduserende sone)</Label>
    </Svg>
  )
}

/* ECD */
function ECD() {
  return (
    <Svg w={320} h={300} label="ECD">
      <rect x={90} y={60} width={140} height={180} rx={10} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 2 }} />
      <rect x={90} y={100} width={10} height={100} style={{ fill: tone('var-c') }} />
      <rect x={220} y={100} width={10} height={100} style={{ fill: tone('var-c') }} />
      <Label x={160} y={258} size={11} t="var-c">β-emitter (⁶³Ni) på veggene</Label>
      <line x1={160} y1={60} x2={160} y2={30} style={{ stroke: tone('ink'), strokeWidth: 3 }} />
      <Label x={176} y={44} anchor="start" size={11}>anode → elektrometer</Label>
      <Arrow x1={160} y1={290} x2={160} y2={242} />
      <Label x={170} y={290} anchor="start" size={10}>fra kolonnen + make-up gas</Label>
      <Arrow x1={104} y1={130} x2={140} y2={130} t="var-c" head={6} />
      <Label x={150} y={134} anchor="start" size={10}>β⁻ + N₂ → e⁻</Label>
      <Label x={160} y={160} size={10}>(stående strøm)</Label>
      <circle cx={120} cy={186} r={6} style={{ fill: tone('trap') }} />
      <Label x={130} y={190} anchor="start" size={10} t="trap">halogen fanger e⁻</Label>
      <Label x={160} y={210} size={10} t="trap">→ strømmen synker</Label>
    </Svg>
  )
}

/* TCD */
function TCD() {
  return (
    <Svg w={320} h={240} label="TCD">
      <rect x={40} y={40} width={240} height={140} rx={8} style={{ fill: `color-mix(in srgb, ${tone('muted')} 30%, var(--bg))`, stroke: tone('ink') }} />
      <rect x={80} y={40} width={30} height={140} style={{ fill: 'var(--bg)', stroke: tone('ink') }} />
      <rect x={210} y={40} width={30} height={140} style={{ fill: 'var(--bg)', stroke: tone('ink') }} />
      <path d="M 95 70 l 0 10 l 6 6 l -12 6 l 12 6 l -12 6 l 12 6 l -6 6 l 0 40" style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2 }} />
      <path d="M 225 70 l 0 10 l 6 6 l -12 6 l 12 6 l -12 6 l 12 6 l -6 6 l 0 40" style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2 }} />
      <Arrow x1={95} y1={215} x2={95} y2={182} />
      <Arrow x1={225} y1={215} x2={225} y2={182} />
      <Label x={95} y={232} size={10}>referansegass</Label>
      <Label x={225} y={232} size={10}>fra kolonnen</Label>
      <Label x={160} y={24} size={11}>filament i hver kanal → Wheatstone-bro</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Tre akser: hva, proporsjonalt med hva, ødelegges den?">
        <MentalModel cite={`[${G}, slide 15–16; ${B1}, p. 27, 30, 33; ${LF25}, oppg. 2]`}>
          GC-detektoren sitter rett på kolonneutløpet og må være varm (minst 20 °C over høyeste kolonnetemperatur), slik at ingenting kondenserer. Detektorene skiller seg på tre akser: <strong>hva de reagerer på</strong> (universell TCD, eller selektiv: ECD for elektronegative grupper, NPD for N/P), <strong>hva signalet er proporsjonalt med</strong> (<V c="b">massestrøm</V> eller konsentrasjon), og <strong>om analytten ødelegges</strong> (destruktiv eller ikke-destruktiv).{' '}
          FID brenner prøven i en H₂-flamme og måler ionene som dannes. Den ser nesten alt organisk, er svært følsom og har stort lineært område. MS er den eneste som gir strukturinformasjon.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Vanligste GC-detektorer" cite={`[${G}, slide 15]`}>FID (vanligst!), TCD, ECD, NPD og MS.</Def>
        <Def term="Viktige parametere for detektorer" cite={`[${G}, slide 15]`}>Følsomhet, støy, LOD/LOQ, lineært område, selektiv/spesifikk/universell, og massesensitiv/konsentrasjonssensitiv. LOD og LOQ behandles på side 18.</Def>
        <Def term="Detektortemperatur" cite={`[${B1}, p. 27]`}>Minst 20 °C over høyeste kolonnetemperatur, for å unngå kondensasjon.</Def>
        <Columns>
          <div>
            <Def term="Massesensitiv detektor" cite={`[${G}, slide 16; ${B1}, p. 27]`}>Signalet er proporsjonalt med mengde analytt per tidsenhet, dvs. den «teller» antall molekyler. Toppareal er uavhengig av gasstrømmen. Massesensitive detektorer er typisk destruktive.</Def>
            <Def term="Konsentrasjonsfølsom detektor" cite={`[${G}, slide 16; ${B1}, p. 27]`}>Signalet er proporsjonalt med konsentrasjonen av analytt i MF. Toppareal avhenger omvendt av gasstrømmen, så god flowkontroll trengs for kvantifisering.</Def>
            <Def term="Stopp i MF-flow (forelesningsfigur)" cite={`[${G}, slide 16]`}>Massefølsom detektor gir ingen massestrøm, så signalet går til null og kommer tilbake ved restart. Konsentrasjonsfølsom detektor ser konstant konsentrasjon, så signalet blir stående konstant.</Def>
            <Def term="Destruktiv vs. ikke-destruktiv" cite={`[${G}, slide 16]`}>FID er destruktiv. UV (i HPLC) er ikke-destruktiv. Ikke-destruktive detektorer kan kobles i serie.</Def>
          </div>
          <Diagram title="Masse- vs. konsentrasjonsfølsom detektor ved stopp i flow" cite={`[${G}, slide 16]`}>
            <FlowStopp />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="FID (flammeionisasjonsdetektor)" cite={`[${G}, slide 16; ${B1}, p. 28, 30]`}>Selektiv, men tilnærmet universell. Prøven forbrennes i en H₂-flamme, og ionene som dannes detekteres. Destruktiv, massesensitiv, stort lineært område og lav LOD. Oppsett: bæregass blandes med H₂ i en oppvarmet sone (300–350 °C) og går gjennom en dyse (jet). Luft kommer i egen kanal. Forhold bæregass : H₂ : luft ≈ 1 : 1 : 10. Mekanisme i reduserende sone: CH-radikaler dannes fra hydrokarboner og gir formylkationer (CHO⁺) + e⁻. 300 V mellom dyse og kollektor gir en strøm proporsjonal med mengden forbrent forbindelse, som forsterkes i et elektrometer. Detekterer alle organiske forbindelser med C og H, unntatt maursyre og metan. Minste detekterbare mengde 0,01–0,1 ng, dynamisk område 10⁷.</Def>
          </div>
          <Diagram title="FID" cite={`[${G}, slide 16; ${B1}, p. 30, Fig. 2.8]`}><FID /></Diagram>
        </Columns>

        <Columns>
          <Def term="TCD (varmetrådsdetektor)" cite={`[${G}, slide 17; ${B1}, p. 28]`}>Motstanden måles på to oppvarmede filamenter. Når prøvemolekyler passerer, endres varmeledningsevnen og temperaturen (og dermed motstanden), og det gir signal. Universell, konsentrasjonssensitiv, ikke-destruktiv, middels følsom, godt lineært område. Brukes kun for pakkede kolonner. Boka: to kanaler, én med ren bæregass (referanse) og én med eluat, koblet i en Wheatstone-bro. He og H₂ har høy varmeledningsevne, N₂ lavere. Alle forbindelser med lavere ledningsevne enn bæregassen detekteres. Minste detekterbare mengde ca. 10 ng. Brukes for lette og permanente gasser i pakkede eller PLOT-kolonner, og egner seg i bærbare GC-er.</Def>
          <Diagram title="TCD" cite={`[${G}, slide 17; ${B1}, p. 28, Fig. 2.7]`}><TCD /></Diagram>
        </Columns>
        <Def term="NPD (nitrogen-fosfor-detektor)" cite={`[${G}, slide 17; ${B1}, p. 30–31]`}>En selektiv versjon av FID. Bruker en oppvarmet perle (pellet) av et alkalisk salt (rubidiumsilikat). Selektiv for P og N (S og B). Minste detekterbare ca. 10 pg N og 5 pg P. Brukes f.eks. for pesticider i mat og miljø.</Def>

        <Columns>
          <div>
            <Def term="ECD (elektroninnfangningsdetektor)" cite={`[${G}, slide 18; ${B1}, p. 31–32; ${LF25}, oppg. 2]`}>En β-emitter reagerer med bæregassen og produserer e⁻, som gir en strøm som måles. Analytter som fanger e⁻ endrer strømmen og gir opphav til signal. Selektiv, konsentrasjonssensitiv, ikke-destruktiv, lite lineært område (10²). Selektiv for organiske forbindelser med elektroninnfangende grupper: halogener, nitrogrupper, konjugerte karbonyler. β-kilde ³H eller ⁶³Ni. Med N₂ som bæregass dannes termiske elektroner. Med He tilsettes reagensgass (argon/metan 95/5). Minste detekterbare ca. 1 pg. Svært følsom for forurensning, og kan ikke brukes med prøver løst i klorerte løsemidler. Boka oppgir lineært område 10⁴. Brukes til sporanalyse av pesticider og legemidler med elektronegative grupper. Mest følsom for halogenerte forbindelser.</Def>
            <Avvik>ECD lineært område 10² (forelesning, slide 18) vs. 10⁴ (bok, p. 32).</Avvik>
          </div>
          <Diagram title="ECD" cite={`[${G}, slide 18; ${B1}, p. 31, Fig. 2.10]`}><ECD /></Diagram>
        </Columns>

        <Def term="MS som GC-detektor" cite={`[${B1}, p. 32–34; ${LF25}, oppg. 2]`}>Ionekilde, masseanalysator (m/z) og iondetektor. Massesensitiv. Gir strukturinformasjon i tillegg til kvantifisering. Er den GC-detektoren som gir strukturell informasjon. Vanligst er EI (70 eV), som gir fragmentering og reproduserbare spektre for biblioteksøk. CI er mykere og gir mest MH⁺, brukt når molekylmasse trengs. Detaljer på side 14. Interface: trykkforskjellen mellom GC (760 torr) og MS (10⁻⁵–10⁻⁷ torr) er eneste problem. Kapillær-GC (1–2 mL/min) passer, og ofte brukes split-interface. Kvadrupol er vanligst i GC-MS. Typisk minste detekterbare mengde med EI er 10 pg i full scan og 1 pg i SIM.</Def>
        <Def term="Andre detektorer (oversikt)" cite={`[${B1}, p. 35; ${G}, slide 18; Pensum.pdf]`}>FPD: optisk, destruktiv, selektiv for S og P. Kjemiluminescens: optisk, destruktiv, selektiv for S eller N. ELCD: selektiv for halogener, S, N. PID: ionisering, ikke-destruktiv, mulig selektiv, egner seg i bærbare GC-er. Atomemisjonsdetektor (AED) og FTIR-detektor er ikke pensum.</Def>

        <Diagram title="Detektortabell" caption="Type, destruktiv og universell/selektiv fra forelesningens oppsummeringstabell (slide 18); lineært område og minste detekterbare mengde fra bokas brødtekst (p. 28–34)." cite={`[${G}, slide 18; ${B1}, p. 28–34]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td><strong>Detektor</strong></td><td><strong>Type</strong></td><td><strong>Destruktiv?</strong></td><td><strong>Selektivitet</strong></td><td><strong>Lineært område</strong></td><td><strong>Min. detekterbar</strong></td></tr>
              <tr><td>FID</td><td>ionisering</td><td>ja</td><td>universell (-ish)</td><td>10⁷</td><td>0,01–0,1 ng</td></tr>
              <tr><td>NPD/TID</td><td>ionisering</td><td>ja</td><td>N, P (S og B)</td><td>—</td><td>~10 pg N, 5 pg P</td></tr>
              <tr><td>TCD</td><td>fysikalsk</td><td>nei</td><td>universell</td><td>«godt»</td><td>~10 ng</td></tr>
              <tr><td>ECD</td><td>ionisering</td><td>nei</td><td>struktur-selektiv</td><td>10² (forel.) / 10⁴ (bok)</td><td>~1 pg</td></tr>
              <tr><td>MS</td><td>ionisering</td><td>ja</td><td>universell</td><td>—</td><td>10 pg (scan), 1 pg (SIM)</td></tr>
            </tbody>
          </table>
        </Diagram>
        <Avvik>Forelesningens LOD-tabell vs. bokas tabell 3.5 (gjelder side 06 og 13). Her er minste detekterbare mengder hentet fra bokas brødtekst, siden bokas GC-tabell 2.4 ikke er lesbar.</Avvik>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="masse" />
        <Eq id="kons" />
        <Plot
          title="Toppareal vs. bæregasstrøm"
          caption="Massefølsom: $A = R_m k\, m$ (flat). Konsentrasjonsfølsom: $A = R_c k\, m / F$ (synkende hyperbel). Begge normalisert til 1 ved $F$ = 1,2 mL/min (H25 oppg. 4). Slideren endrer analyttmassen $m$ relativt."
          cite={`[${B1}, p. 27, lign. 2.1–2.2; ${E25}, oppg. 4]`}
          x={{ min: 0.5, max: 3, label: 'F (mL/min)' }}
          y={{ label: 'relativt areal', min: 0 }}
          params={[{ key: 'm', label: '$m$ (relativ)', min: 0.5, max: 2, step: 0.05, value: 1 }]}
          series={[
            { key: 'fid', label: 'massefølsom (FID, MS)', t: 'var-b', fn: (F, p) => p.m },
            { key: 'tcd', label: 'konsentrasjonsfølsom (TCD, ECD)', t: 'var-c', fn: (F, p) => (p.m * 1.2) / F },
          ]}
          marks={[{ x: 1.2, label: '1,2 mL/min' }]}
        />
        <Eq id="ms" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 2, de to GC-detektorspørsmålene"
          given="a) «Hvilken detektor i GC gir strukturell informasjon?» (FID, TCD, MS, ECD). b) «ECD-detektor (GC) er mest følsom for …» (halogenerte forbindelser, hydrokarboner, enkle alkoholer, alkalimetaller)."
          steps={[
            { title: 'a) FID:', body: `gir et ionestrøm-signal proporsjonalt med mengden forbrent organisk materiale, uten informasjon om hva molekylet er [${B1}, p. 30].` },
            { title: 'TCD:', body: `måler bare endret varmeledningsevne [${B1}, p. 28].` },
            { title: 'ECD:', body: `måler fall i strøm når elektroner fanges, så den er selektiv, men gir ingen struktur [${B1}, p. 32].` },
            { title: 'MS:', body: `gir et massespekter med molekylion og fragmenter, som kan sammenlignes med bibliotek [${B1}, p. 33].` },
            { title: 'Svar a):', body: 'MS.' },
            { title: 'b)', body: `ECD responderer på forbindelser med høy elektronaffinitet som fanger termiske elektroner: halogener, nitro, konjugerte karbonyler [${B1}, p. 31–32].` },
            { body: 'Hydrokarboner og enkle alkoholer har ingen elektroninnfangende grupper. Alkalimetaller er ikke GC-analytter (og alkalisalt er tvert imot perlen i NPD).' },
            { title: 'Svar b):', body: 'Halogenerte forbindelser.' },
          ]}
          cite={`[${E25}, oppg. 2; ${LF25}, oppg. 2]`}
        />
        <FadedExample
          title="Velg detektor (forelesning + bok)"
          steps={[
            { title: 'Case A: Permanente gasser (H₂, O₂, N₂, CH₄, CO) på molekylsikt-kolonne.', body: `FID ser ikke disse (ikke organiske C–H, unntatt metan), så det trengs en universell detektor → TCD [${B1}, p. 28, 36].` },
            { title: 'Case B: Spormengder klorholdige pesticider i miljøprøve. Hvilken detektor, og hva må du ikke bruke som prøveløsemiddel?', body: 'ECD. Ikke klorerte løsemidler.', hidden: true },
            { title: 'Case C: N-holdige legemidler i en kompleks matriks der FID gir for mye bakgrunn.', body: 'NPD.', hidden: true },
            { title: 'Case D: Generell analyse av hydrokarboner og løsemidler (som H25 oppg. 4).', body: 'FID: tilnærmet universell for organiske forbindelser, lav LOD og stort lineært område.', hidden: true },
            { title: 'Hvilken av detektorene over kan kobles foran en annen i serie, og hvorfor?', body: `TCD eller ECD (ikke-destruktive). FID og MS ødelegger analytten [${G}, slide 16–18].`, hidden: true },
          ]}
          cite={`[${G}, slide 15–18; ${B1}, p. 28–32]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="FID detekterer «alt»" cite={`[${B1}, p. 30]`}>Ikke maursyre, metan eller permanente uorganiske gasser. FID krever C–H som kan forbrennes.</Trap>
        <Trap title="ECD er destruktiv" cite={`[${G}, slide 18]`}>Nei. ECD er ikke-destruktiv. FID, NPD og MS er destruktive.</Trap>
        <Trap title="Masse- og konsentrasjonsfølsom forveksles" cite={`[${G}, slide 16–18; ${B1}, p. 27]`}>FID og MS er massesensitive (areal uavhengig av flow). TCD og ECD er konsentrasjonsfølsomme (areal avhenger av flow).</Trap>
        <Trap title="ECDs lineære område" cite={`[${G}, slide 18; ${B1}, p. 30, 32]`}>Forelesningen skriver 10², boka 10⁴. Uansett er det lite sammenlignet med FID (10⁷).</Trap>
        <Trap title="NPD er en helt egen type" cite={`[${G}, slide 17]`}>Den er en selektiv versjon av FID med en oppvarmet alkalisalt-perle.</Trap>
        <Trap title="HPLC- og GC-detektorer blandes" cite={`[${E25}, oppg. 2]`}>UV, RI og fluorescens er HPLC-detektorer. FID, TCD, ECD og NPD er GC-detektorer. H25 oppg. 2 blander begge i samme flervalgssett.</Trap>
      </Section>
    </>
  )
}
