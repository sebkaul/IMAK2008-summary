import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Diagram, Svg, Box, Arrow, Label, Curve, Mermaid, Plot, Columns, V, tone } from '../components'

const MS = 'Forelesning_MS_u_notater.pdf'
const MSP = 'MSproteiner2026.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'

export const meta = {
  title: 'MS: analysatorer og detektorer',
  topic: 'ms',
  examWeight: { level: 'low', note: 'H24 1(b) flervalg (formålet med MS/MS i LC-MS). Ikke spurt på H25' },
  examTasks: [
    'Ingen tasks_by_page-oppføring for side 15 i 00-index.md.',
    'H2024 oppg. 1(b) (flervalg, 1 av 5 delspørsmål): hva er hovedformålet med å bruke tandem-MS (MS/MS) i LC-MS?',
  ],
  buildsOn: ['14-ms-ionisering'],
  usedIn: ['16-ms-proteiner', '17-kvalitativ-og-kvantifiseringsmetoder'],
  sources: [
    `[${MS}, slide 5, 7–9] (bare figurer, ingen notater)`,
    `[${MSP}, slide 8–10]`,
    `[${B1}, p. 34] (p. = boksidetall; PDF-side = bokside + 16)`,
    `[${B2}, p. 91–95] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(b)] / [${LF24}, p. 3]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'I en TOF-analysator: kommer tunge eller lette ioner først til detektoren?', a: `Lette. Tunge ioner har lengre flytid [${B2}, p. 93; ${MSP}, slide 9].` },
    { id: 'p2', kind: 'pretest', q: 'Hva er hovedformålet med tandem-MS (MS/MS) i LC-MS?', a: `Å fragmentere ioner og analysere fragmentene for strukturinformasjon [${LF24}, p. 3].` },
    { id: 'p3', kind: 'pretest', q: 'Hvorfor må et massespektrometer ha vakuum?', a: `Luft (gassmolekyler) hindrer ionene i å fly fram til analysatoren [${B2}, p. 91].` },
    { id: 't1', q: 'Forklar hvordan en kvadrupol skiller ioner.', a: `Fire stenger med motsatt ladde par får en DC (U) og en RF (V cos ωt). Ved gitte U/RF har bare bestemte m/z stabil bane gjennom til detektoren, mens de andre kolliderer med stengene. Hele spekteret fås ved å variere U og RF [${B2}, p. 91–92].` },
    { id: 't2', q: 'Hva skjer i hver av de tre kvadrupolene i en trippel-kvadrupol?', a: `Q1 velger precursor-ion, q2 fragmenterer det ved kollisjon (CID), og Q3 analyserer produkt-ionene [${MS}, slide 7; ${B2}, p. 94].` },
    { id: 't3', q: 'Hvordan forsterker en elektronmultiplikator signalet?', a: `Ionet treffer en konverteringsdynode og slår løs elektroner. Hver påfølgende dynode (lavere negativ spenning) slår løs flere sekundærelektroner, så signalet forsterkes trinnvis [${MS}, slide 9].` },
    { id: 't4', q: 'Hvilken analysator er vanligst i GC-MS, og hvorfor?', a: `Kvadrupol. Masseområdet dekker forbindelser som kan kjøres på GC, og den er billig og robust [${B1}, p. 34; ${MSP}, slide 10].` },
    { id: 't5', q: 'Hva er forskjellen på masseoppløsning og massenøyaktighet?', a: `Oppløsning er evnen til å skille nære m/z-verdier. Nøyaktighet er hvor nær målt m/z er den teoretiske [${B2}, p. 91].` },
  ],
  equations: [
    {
      id: 'tof', label: 'Kinetisk energi i TOF',
      tex: String.raw`\begin{gathered}\va{E_k} = \frac{1}{2} \vb{m} \vc{v}^2 \quad\Rightarrow\quad \vc{v} = \sqrt{\frac{2\va{E_k}}{\vb{m}}} \\ \Rightarrow\quad \vd{t} = \frac{L}{\vc{v}}\end{gathered}`,
      vars: [
        { sym: String.raw`\va{E_k}`, desc: 'kinetisk energi (lik for alle ioner etter akselerasjon)', unit: String.raw`\mathrm{J}` },
        { sym: String.raw`\vb{m}`, desc: 'ionets masse', unit: String.raw`\mathrm{kg}` },
        { sym: String.raw`\vc{v}`, desc: 'hastighet i drift-røret', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`\vd{t}`, desc: 'flytid', unit: String.raw`\mathrm{\mu s}` },
        { sym: 'L', desc: 'lengde på drift-røret', unit: String.raw`\mathrm{m}` },
      ],
      note: 'Forelesningen gir $E_k = mv^2/2$, og at hastigheten avhenger av kinetisk energi slik at store molekyler er «trege». Boka: alle ioner får lik kinetisk energi, og flytiden øker med m/z. Uttrykket $t \\propto \\sqrt{m/z}$ er **utledet** i innholdsfila fra disse to (ikke gitt i kursfilene).',
      cite: `[${MSP}, slide 9; ${B2}, p. 93]`,
      check: { status: 'mismatch', note: 'Bare E_k = mv²/2 står på slide 9. Uttrykkene for v og t er utledet i innholdsfila, ikke kildene. Merk: boka (p. 93, PDF s. 9) skriver at hastigheten er «inversely proportional to their m/z value», mens utledningen her gir v ∝ 1/√m.' },
    },
    {
      id: 'quad', label: 'Kvadrupol-spenning',
      tex: String.raw`\pm(U - V\cos\omega t)`,
      vars: [
        { sym: 'U', desc: 'likestrømskomponent (DC)', unit: String.raw`\mathrm{V}` },
        { sym: String.raw`V\cos\omega t`, desc: 'radiofrekvenskomponent (RF)', unit: String.raw`\mathrm{V}` },
      ],
      note: 'Bare én m/z har stabil bane for et gitt U/V-forhold.',
      cite: `[${B2}, p. 92]`,
      check: { status: 'verified', note: 'Bok del 2 Fig. 3.36 og tekst p. 92 (PDF s. 8): (U − V cos ωt) og −(U − V cos ωt).' },
    },
  ],
}

const msmsChart = `flowchart LR
  A[HPLC] --> B["Ionekilde ESI/APCI<br/>Ionization"]
  B --> C["Q1 massefilter<br/>Precursor ion"]
  C --> D["q2 kollisjonscelle<br/>Fragmentation (CID)"]
  D --> E["Q3 massefilter<br/>Product ion"]
  E --> F[Detektor]`

/* Quadrupole */
function Kvadrupol() {
  const stable = Array.from({ length: 41 }, (_, i) => [60 + i * 8, 100 + 10 * Math.sin(i * 0.9)])
  const unstable = Array.from({ length: 22 }, (_, i) => [60 + i * 8, 100 + i * 2.5 * Math.sin(i * 0.9)])
  return (
    <Svg w={460} h={230} label="Kvadrupol">
      {[70, 130].map((y) => <rect key={y} x={60} y={y - 8} width={330} height={16} rx={8} style={{ fill: `color-mix(in srgb, ${tone('muted')} 40%, var(--bg))`, stroke: tone('ink') }} />)}
      <Label x={30} y={104} size={11}>kilde</Label>
      <Curve t="intuition" points={stable} />
      <Curve t="trap" points={unstable} />
      <Box x={395} y={84} w={60} h={32} label="detektor" t="ink" />
      <Label x={220} y={50} t="intuition" size={11}>stabil bane → detektor</Label>
      <Label x={150} y={170} t="trap" size={11}>ustabil → treffer stengene</Label>
      <g transform="translate(330,170)">
        {[[0, -20], [-20, 0], [20, 0], [0, 20]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={9} style={{ fill: tone(i % 3 === 0 ? 'var-a' : 'var-b'), opacity: 0.7 }} />)}
      </g>
      <Label x={300} y={222} size={10} t="var-a">+(U − V cos ωt)</Label>
      <Label x={400} y={222} size={10} t="var-b">−(U − V cos ωt)</Label>
    </Svg>
  )
}

/* TOF linear and reflectron */
function TOF() {
  return (
    <Svg w={460} h={260} label="TOF lineær og reflektron">
      <Label x={10} y={20} anchor="start" size={12}>Lineær</Label>
      <Box x={10} y={40} w={70} h={36} label="ionisering" t="muted" />
      <Box x={85} y={40} w={70} h={36} label="akselerasjon" t="var-a" />
      <rect x={160} y={46} width={230} height={24} style={{ fill: 'none', stroke: tone('ink'), strokeDasharray: '5 4' }} />
      <Label x={275} y={88} size={10}>feltfritt drift-rør</Label>
      <circle cx={300} cy={58} r={4} style={{ fill: tone('trap') }} />
      <circle cx={210} cy={58} r={8} style={{ fill: tone('intuition') }} />
      <Label x={300} y={42} size={10} t="trap">lett, foran</Label>
      <Label x={210} y={38} size={10} t="intuition">tung</Label>
      <Box x={395} y={40} w={60} h={36} label="detektor" t="ink" />
      <Arrow x1={160} y1={104} x2={395} y2={104} t="muted" />
      <Label x={275} y={120} size={10}>time measurement</Label>
      <Label x={10} y={150} anchor="start" size={12}>Reflektron</Label>
      <Box x={10} y={170} w={70} h={36} label="kilde" t="muted" />
      <polyline points="80,188 380,175 380,215 120,240" style={{ fill: 'none', stroke: tone('var-c'), strokeWidth: 2 }} />
      <rect x={380} y={160} width={40} height={70} style={{ fill: `color-mix(in srgb, ${tone('var-c')} 20%, var(--bg))`, stroke: tone('var-c') }} />
      <Label x={400} y={250} size={10} t="var-c">reflektron</Label>
      <Box x={60} y={222} w={60} h={30} label="detektor" t="ink" />
      <Label x={240} y={170} size={10} t="var-c">høyere oppløsning (opptil 50 000)</Label>
    </Svg>
  )
}

/* TIC vs SIM */
function TICSIM() {
  const row = (y, peaks, lab, noise) => (
    <g>
      <Label x={10} y={y - 40} anchor="start" size={11}>{lab}</Label>
      <polyline points={Array.from({ length: 80 }, (_, i) => { const x = 60 + i * 4.8; let v = noise ? 3 + 3 * Math.abs(Math.sin(i * 1.7)) : 0.5; for (const [px, h] of peaks) v += h * Math.exp(-((x - px) ** 2) / 30); return `${x},${y - v}` }).join(' ')} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 1.8 }} />
    </g>
  )
  return (
    <Svg w={460} h={290} label="TIC vs. SIM">
      {row(60, [[120, 30], [160, 25], [210, 35], [260, 20], [300, 30], [350, 22], [400, 18]], 'TIC: mange topper og bakgrunn', true)}
      {row(130, [[160, 35]], 'SIM m/z 162', false)}
      {row(200, [[260, 35]], 'SIM m/z 176', false)}
      {row(270, [[350, 35]], 'SIM m/z 169', false)}
      {[[160, 90], [260, 160], [350, 230]].map(([x, y]) => <Label key={x} x={x} y={y} size={12} t="trap">*</Label>)}
    </Svg>
  )
}

/* Electron multiplier */
function Multiplikator() {
  const dyn = [[60, 60, '−1,5 kV'], [120, 140, '−1,4'], [180, 60, '−1,3'], [240, 140, '−1,2'], [300, 60, '…'], [360, 140, '−900 V']]
  return (
    <Svg w={460} h={210} label="Elektronmultiplikator">
      {dyn.map(([x, y, v]) => <g key={x}><rect x={x - 20} y={y - 5} width={40} height={10} style={{ fill: tone('ink') }} /><Label x={x} y={y + (y < 100 ? -12 : 24)} size={10}>{v}</Label></g>)}
      <Arrow x1={10} y1={20} x2={40} y2={54} t="trap" />
      <Label x={10} y={14} anchor="start" t="trap" size={11}>ion⁺</Label>
      {dyn.slice(0, -1).map(([x, y], i) => {
        const [nx, ny] = dyn[i + 1]
        return Array.from({ length: i + 1 }, (_, k) => <line key={`${i}-${k}`} x1={x + (k - i / 2) * 3} y1={y} x2={nx + (k - i / 2) * 5} y2={ny} style={{ stroke: tone('definition'), strokeWidth: 1.2 }} />)
      })}
      <Arrow x1={380} y1={140} x2={440} y2={140} t="definition" />
      <Label x={440} y={128} anchor="end" size={10} t="definition">forsterket strøm</Label>
      <Label x={230} y={196} size={10}>flere sekundærelektroner for hvert trinn · diskret vs. kontinuerlig dynode</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Sortere etter m/z, så telle">
        <MentalModel cite={`[${MSP}, slide 3, 8–10; ${B2}, p. 91–94; ${MS}, slide 5, 7, 9]`}>
          Etter ioniseringen må ionene sorteres etter m/z og telles. Alle analysatorer bruker elektriske (eller magnetiske) felt, men på ulike måter. <strong>Kvadrupol</strong>: et filter der bare én m/z har stabil bane ved gitte spenninger. <strong>Ionefelle</strong>: fanger alle ionene og slipper dem ut i rekkefølge. <strong>TOF</strong>: gir alle ionene samme <V c="a">energi</V> og måler hvor lang <V c="d">tid</V> de bruker gjennom et feltfritt rør. <strong>Orbitrap og ICR</strong>: måler frekvensen ionene svinger med. <strong>Magnetisk sektor</strong>: bøyer ionene i et magnetfelt.{' '}
          Analysatorene skiller seg i oppløsning, nøyaktighet, hastighet og pris. Kobler man to analysatorer med en kollisjonscelle imellom (MS/MS), kan man velge ut ett ion, knuse det og se fragmentene. Det gir både strukturinformasjon og lavere deteksjonsgrense. Til slutt treffer ionene en elektronmultiplikator som forsterker hvert ion til en målbar strøm.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Masseanalysatorer (oversikt)" cite={`[${MSP}, slide 8]`}>TOF, QMS (kvadrupol), ionefelle, ICR (syklotron), Orbitrap og ionemobilitet. Valget avhenger av masseområde, oppløsning, MS/MS, LC-separasjon og skann eller total.</Def>
        <Def term="Ionebane inn i analysatoren" cite={`[${B2}, p. 91]`}>Ionene går gjennom linser og skimmere som fokuserer ionestrålen og deler MS-en i kamre med gradvis lavere trykk. Vakuum er essensielt.</Def>
        <Def term="Ytelsesparametere" cite={`[${B2}, p. 91]`}><strong>Masseoppløsning (R)</strong>: evnen til å skille m/z-verdier fra hverandre. Høyere R er bedre. <strong>Massenøyaktighet (E)</strong>: forskjellen mellom målt og teoretisk m/z. Lavere E er bedre. <strong>Skannehastighet (Hz)</strong>: det trengs minst 12–15 datapunkter per topp, så smale topper (UHPLC) krever rask skanning. <strong>Følsomhet</strong>: signal/støy. I SIM- eller MRM-modus helt ned på femtogramnivå.</Def>
        <Columns>
          <Def term="Kvadrupol (QMS)" cite={`[${B2}, p. 91–92; ${MSP}, slide 10; ${B1}, p. 34]`}>Fire parallelle stenger, koblet to og to med motsatt ladning. Hvert par har en likestrømskomponent (U) og en radiofrekvens (RF, V cos ωt). Ionene går inn i z-retning og oscillerer i x og y. Ustabile baner kolliderer med stengene, stabile når detektoren. Ved bestemte U/RF passerer bare bestemte m/z. Ved å variere U og RF kontrollert fås hele spekteret («skanner» ~0–3000 Da). Enhetsoppløsning (R &lt; 1000), moderat nøyaktighet (E &gt; 100 ppm), høy skannehastighet, pg-følsomhet. Billig, enkel og robust, men lav oppløsning og lite masseområde. Vanligst i GC-MS, fordi masseområdet dekker forbindelser som kan kjøres på GC.</Def>
          <Diagram title="Kvadrupol" caption="Fire stenger langs z-aksen. Grønn bane går stabilt gjennom; rød spiraliserer ut. Innfelt: x/y-snitt." cite={`[${B2}, p. 92, Fig. 3.36; ${MSP}, slide 10]`}><Kvadrupol /></Diagram>
        </Columns>
        <Def term="Ionefelle (ion trap)" cite={`[${B2}, p. 92–93]`}>Ringelektrode og to endekapselelektroder med AC/DC-spenning. Ionene kommer inn gjennom én endekapsel, kjøles av He og fanges i feltet. Ved å endre spenningene slippes ionene ut, de lette først og de tunge sist.</Def>
        <Columns>
          <Def term="TOF (time-of-flight)" cite={`[${B2}, p. 92–94; ${MSP}, slide 9; ${MS}, slide 7]`}>En pulset kilde med stor spenningsforskjell gir ionene lik kinetisk energi. I det feltfrie drift-røret bestemmer bare den kinetiske energien bevegelsen. Hastigheten er omvendt proporsjonal med m/z, så tunge ioner har lengre flytid. Store molekyler er «trege». Lineær TOF har ofte enhetsoppløsning. Reflektron-TOF har to drift-rør og oppløsning opptil 50 000. Kompatibel med pulserende metoder (MALDI, ESI-QTOF). Rask, sensitiv, trygg og billig.</Def>
          <Diagram title="TOF: lineær og reflektron" cite={`[${MS}, slide 7; ${B2}, p. 94, Fig. 3.38]`}><TOF /></Diagram>
        </Columns>
        <Def term="FTMS (FT-ICR og Orbitrap)" cite={`[${B2}, p. 93–94]`}>Måler svake elektriske pulser fra ionenes bevegelse i høyvakuum. Hver m/z gir en bestemt frekvens: lavere frekvens betyr høyere m/z. Fourier-transform skiller ut frekvensene. Orbitrap gir oppløsning opptil 200 000, FT-ICR over 1 000 000.</Def>
        <Def term="Magnetisk sektor" cite={`[${MS}, slide 5]`}>Ionisering → akselerasjon → avbøyning i elektromagnet → deteksjon, der bare ioner med riktig m/z når detektoren.</Def>
        <Def term="Fragmentering og MS/MS (CID)" cite={`[${B2}, p. 94; ${MS}, slide 7; ${LF24}, p. 3]`}>{'Molekylionet $[M+nH]^{n+}$ gir spesifikk deteksjon, men fragmentering kan gi mer informasjon eller lavere deteksjonsgrense. Collision-induced dissociation (CID): (1) velg ut ionet, (2) la det kollidere med gassmolekyler slik at det fragmenterer, (3) detekter fragmentene. Systemer: trippel-kvadrupol, ionefelle, ionefelle-TOF, TOF-TOF, ionefelle-Orbitrap og kvadrupol-Orbitrap. Hovedformål i LC-MS: fragmentere ioner og analysere fragmentene for strukturinformasjon.'}</Def>
        <Mermaid title="Trippel-kvadrupol MS/MS" caption="Q1 velger ett precursor-ion, q2 fragmenterer, Q3 analyserer produkt-ionene." cite={`[${MS}, slide 7]`} chart={msmsChart} />
        <Columns>
          <Def term="TIC vs. SIM" cite={`[${MS}, slide 8; ${B1}, p. 34]`}><strong>TIC (total ion chromatogram)</strong>: summen av alle ioner i full scan. Mange topper og mye bakgrunn. <strong>SIM (selected ion monitoring)</strong>: bare utvalgte m/z (f.eks. 162, 176, 169), noe som gir renere kromatogram og lavere deteksjonsgrense. Boka: typisk minste detekterbare mengde i GC-MS (EI) er 10 pg i full scan og 1 pg i SIM.</Def>
          <Diagram title="TIC vs. SIM" caption="Felles tidsakse. Hvert SIM-spor viser én tydelig topp (*) og lav bakgrunn. Skisse." cite={`[${MS}, slide 8]`}><TICSIM /></Diagram>
        </Columns>
        <Columns>
          <Def term="Detektor: elektronmultiplikator" cite={`[${MS}, slide 9]`}>Ion⁺ treffer første dynode (konverteringsdynode: ion → elektron, f.eks. −1,5 kV). Elektronene akselereres mot neste dynode (−1,4, −1,3 … −900 V) og slår ut flere sekundærelektroner ved hvert trinn, slik at signalet forsterkes. Finnes som diskret dynode (separate plater) og kontinuerlig dynode (ett buet rør). En dynode er en elektrode i et vakuumrør som fungerer som elektronmultiplikator gjennom sekundæremisjon.</Def>
          <Diagram title="Elektronmultiplikator" cite={`[${MS}, slide 9]`}><Multiplikator /></Diagram>
        </Columns>
        <Def term="MCP (microchannel plate) detector" cite={`[${MSP}, slide 10]`}>Ladde partikler treffer en halvleder, som gir sekundærelektroner.</Def>
        <Def term="MS koblet med UV" cite={`[${B2}, p. 95, Info-box 3.21]`}>UV- eller fluorescensdetektor må stå før MS, eller flowen splittes. Kvantitativ analyse på ng-nivå kan gjøres med relativt billige enkle kvadrupoler.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="tof" />
        <Gap>{String.raw`den eksplisitte formelen for flytid ($t = L\sqrt{m/(2zeU)}$) står ikke i kursfilene.`}</Gap>
        <Plot
          title="TOF-flytid (relativ)"
          caption="Lik $E_k$ for alle ioner gir $t = L/v \propto \sqrt{m/z}$ — **utledet** i innholdsfila fra $E_k = \tfrac{1}{2}mv^2$ (slide 9), ikke gitt i kursfilene. Kurven viser flytid relativt til m/z = 100. Stiplet: m/z 1000 og 4000 — firedobbelt m/z gir dobbelt flytid."
          cite={`[${MSP}, slide 9; ${B2}, p. 93]`}
          x={{ min: 100, max: 10000, label: 'm/z' }}
          y={{ label: 't / t(m/z = 100)', min: 0 }}
          series={[{ key: 't', label: 'relativ flytid', t: 'var-d', fn: (mz) => Math.sqrt(mz / 100) }]}
          marks={[{ x: 1000, label: '1000' }, { x: 4000, label: '4000' }]}
        />
        <Eq id="quad" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 1(b): «Hva er hovedformålet med å bruke tandem-MS (MS/MS) i LC-MS?»"
          given="Alternativer: (a) redusere prøvemengden som trengs, (b) fragmentere ioner og analysere fragmentene for strukturinformasjon, (c) måle molekylvekt med høy presisjon uten fragmentering, (d) erstatte kromatografisk separasjon."
          steps={[
            { title: 'Skisser oppsettet:', body: `Q1 velger ett precursor-ion, q2 er kollisjonscelle, Q3 analyserer produkt-ionene [${MS}, slide 7].` },
            { body: `Det som skjer i q2 er CID: ionet kolliderer med gassmolekyler og fragmenterer [${B2}, p. 94].` },
            { title: '(c) er feil:', body: 'MS/MS innebærer nettopp fragmentering. Høy massenøyaktighet uten fragmentering er en jobb for FTMS (Orbitrap/ICR).' },
            { title: '(d) er feil:', body: 'MS/MS kobles **etter** LC og erstatter ikke separasjonen.' },
            { title: '(a) er ikke hovedformålet.', body: `Lavere deteksjonsgrense er en bonus, men handler om selektivitet, ikke prøvemengde [${B2}, p. 91, 94].` },
            { title: 'Svar:', body: '(b), fragmentering for strukturinformasjon.' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(b); ${LF24}, p. 3]`}
        />
        <FadedExample
          title="Flytid i TOF og valg av analysator"
          given="To ioner med z = 1: m/z 1000 og m/z 4000, med samme kinetiske energi."
          steps={[
            { body: 'Lik $E_k$ gir $v \\propto 1/\\sqrt{m}$, så $t \\propto \\sqrt{m}$ (utledet, se likningen over).' },
            { title: 'Forhold mellom flytidene: $t_{4000}/t_{1000} = \\sqrt{4000/1000} = \\;?$', body: '2. Det tunge ionet bruker dobbelt så lang tid.', hidden: true },
            { title: 'Hvilken TOF-type gir best oppløsning, og hvorfor?', body: 'Reflektron, siden en lengre flyvebane gir høyere oppløsning og nøyaktighet (opptil 50 000).', hidden: true },
            { title: 'Du skal kvantifisere ett kjent legemiddel på ng-nivå billig og robust. Hvilken analysator, og i hvilken modus?', body: `En enkel kvadrupol i SIM-modus [${B2}, p. 95; ${B1}, p. 34].`, hidden: true },
            { title: 'Du trenger svært høy massenøyaktighet for et ukjent protein.', body: 'FTMS (Orbitrap, opptil 200 000) eller QTOF.', hidden: true },
          ]}
          cite={`[${MSP}, slide 8–10; ${B2}, p. 92–94]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Kvadrupolen fanger ionene" cite={`[${B2}, p. 92]`}>Nei. Kvadrupolen er et <em>filter</em> (stabil eller ustabil bane). Det er <em>ionefellen</em> som fanger ionene og slipper dem ut i rekkefølge.</Trap>
        <Trap title="TOF: tunge ioner raskest" cite={`[${B2}, p. 93]`}>Feil. Med lik kinetisk energi er lette ioner raskest.</Trap>
        <Trap title="FTMS: høy frekvens = høy m/z" cite={`[${B2}, p. 93]`}>Omvendt. Lavere frekvens betyr høyere m/z.</Trap>
        <Trap title="SIM gir mer informasjon enn full scan" cite={`[${MS}, slide 8; ${B1}, p. 34]`}>SIM gir lavere deteksjonsgrense, men bare for de valgte ionene. Full scan (TIC) gir hele spekteret.</Trap>
        <Trap title="MS/MS erstatter LC" cite={`[${LF24}, p. 3]`}>Nei. MS/MS gir strukturinformasjon, men LC trengs fortsatt for separasjon.</Trap>
        <Trap title="For lav skannehastighet ved UHPLC" cite={`[${B2}, p. 91]`}>Det trengs 12–15 punkter per topp, så smale UHPLC-topper krever rask MS.</Trap>
      </Section>
    </>
  )
}
