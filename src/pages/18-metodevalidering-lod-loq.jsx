import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Block, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const KK = 'Kval og kvant analyse.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'

export const meta = {
  title: 'Metodevalidering, LOD og LOQ',
  topic: 'kvantifisering',
  examWeight: { level: 'low', note: 'H24 1(c): forklar «LOQ» (2 av 10 p). Ikke spurt direkte på H25 (lineært område ligger implisitt i oppg. 8)' },
  examTasks: [
    'Ingen tasks_by_page-oppføring for side 18 i 00-index.md.',
    'H2024 oppg. 1(c) (10 p totalt, 2 p hører hit): forklar kort «LOQ».',
    'H2025 oppg. 8 (indirekte): kalibreringsområdet 2,5–20 mg/L, der den ukjente prøven må ligge innenfor det lineære området (se side 17).',
  ],
  buildsOn: ['17-kvalitativ-og-kvantifiseringsmetoder'],
  usedIn: [],
  sources: [
    `[${KK}, p. 2, 10–11]`,
    `[${B2}, p. 190–191, 196–199] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(c)] / [${LF24}, p. 3]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilket signal/støy-forhold definerer deteksjonsgrensen (LOD)?', a: `S/N > 3 [${KK}, p. 10; ${B2}, p. 190].` },
    { id: 'p2', kind: 'pretest', q: 'Er LOQ høyere eller lavere enn LOD?', a: `Alltid høyere [${LF24}, p. 3].` },
    { id: 'p3', kind: 'pretest', q: 'Hva betyr det at en metode er «robust»?', a: `At små endringer i driftsparametere (pH, flow, % organisk, temperatur) ikke endrer analyseresultatet vesentlig [${B2}, p. 197–198].` },
    { id: 't1', q: 'En topp har høyde H = 12 og støybåndet h = 4 (samme enhet). Er den kvantifiserbar?', a: `S/N = 2H/h = 2·12/4 = 6. Den er over LOD (3), men under LOQ (10), så den er detekterbar, men ikke kvantifiserbar [${KK}, p. 10].` },
    { id: 't2', q: 'Nevn sju parametere som undersøkes i metodevalidering.', a: `LOD/LOQ, linearitet og område, repeterbarhet (innen og mellom), nøyaktighet, selektivitet, robusthet og stabilitet [${KK}, p. 11; ${B2}, p. 196].` },
    { id: 't3', q: 'Hvordan kan nøyaktigheten bestemmes når referansemateriale mangler?', a: `Spike blank matriks på tre nivåer, kvantifiser mot kalibreringskurven og regn funnet/teoretisk (ca. 100 %). Alternativt sammenlign med en annen, etablert metode [${B2}, p. 197].` },
    { id: 't4', q: 'Hvordan testes robusthet mot MF-pH?', a: `Analyser ved litt høyere og lavere pH (f.eks. 5,3 og 5,7 når metoden bruker 5,5). Ingen signifikant endring betyr at pH ikke er kritisk [${B2}, p. 197–198].` },
    { id: 't5', q: 'Hvorfor gir bedre kromatografisk effektivitet lavere deteksjonsgrense?', a: `Smalere topp med samme areal er høyere, så S/N blir høyere [${B2}, p. 191].` },
  ],
  equations: [
    {
      id: 'sn', label: 'Signal/støy (forelesningens anbefalte metode)',
      tex: String.raw`\frac{S}{N} = \frac{2\va{H}}{\vb{h}}`,
      vars: [
        { sym: String.raw`\va{H}`, desc: 'topphøyde (fra midten av støybåndet)', unit: String.raw`\text{signalenhet}` },
        { sym: String.raw`\vb{h}`, desc: 'bredde på støybåndet (topp til topp)', unit: String.raw`\text{signalenhet}` },
      ],
      note: 'Måles over et vindu på ca. 20 × $w_{0,5}$ rundt toppen.',
      cite: `[${KK}, p. 10]`,
      check: { status: 'verified', note: 'Forelesning p. 10: «Anbefalt metode S/N = 2·H/h», med figur som viser H, h og 20 × w_0,5.' },
    },
    {
      id: 'lodloq', label: 'Deteksjons- og kvantifiseringsgrense',
      tex: String.raw`\text{LOD: } \frac{S}{N} \geq 3 \qquad\qquad \text{LOQ: } \frac{S}{N} \geq 10`,
      vars: [],
      cite: `[${KK}, p. 10; ${B2}, p. 190]`,
      check: { status: 'mismatch', note: 'Kun notasjon: forelesningen (p. 10) skriver S/N > 3 og > 10; boka (p. 190, PDF s. 106) definerer cLOD og cLOQ ved S/N = 3 og = 10. Innholdet skriver ≥.' },
    },
    {
      id: 'acc', label: 'Nøyaktighet',
      tex: String.raw`\text{nøyaktighet} = \frac{c_{funnet}}{c_{teoretisk}} \times 100\,\%`,
      vars: [
        { sym: 'c_{funnet}', desc: 'konsentrasjon funnet med kalibreringskurven', unit: String.raw`\mathrm{\mu g/mL}` },
        { sym: 'c_{teoretisk}', desc: 'konsentrasjon tilsatt (spiket)', unit: String.raw`\mathrm{\mu g/mL}` },
      ],
      note: 'Skal være nær 100 %.',
      cite: `[${B2}, p. 197]`,
      check: { status: 'verified', note: 'Bok del 2 p. 197 (PDF s. 113): «dividing the found concentration by the theoretical concentration … should be close to 100%» (i ord).' },
    },
    {
      id: 'rsd', label: 'Relativt standardavvik (presisjon)',
      tex: String.raw`RSD = \frac{s}{\bar{x}} \times 100\,\%`,
      vars: [],
      note: 'Brukes for repeterbarhet.',
      cite: `[${KK}, p. 2]`,
      check: { status: 'verified', note: 'Forelesning p. 2: RSD = std / gjennomsnitt × 100 %.' },
    },
  ],
}

const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>

/* Three noise levels + measurement */
function SNPaneler() {
  const noisy = (x0, y, amp, ph) => Array.from({ length: 60 }, (_, i) => { const x = x0 + i * 2.2; const pk = 50 * Math.exp(-((i - 30) ** 2) / 30); return `${x},${y - pk - amp * Math.sin(i * 2.3 + ph) * Math.cos(i * 1.1)}` }).join(' ')
  return (
    <Svg w={460} h={300} label="S/N, LOD og LOQ">
      {[['High S/N', 1, 10], ['Low S/N', 6, 160], ['Too low S/N', 22, 310]].map(([lab, a, x0]) => (
        <g key={lab}>
          <polyline points={noisy(x0, 100, a, x0)} style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 1.5 }} />
          <Label x={x0 + 66} y={124} size={11}>{lab}</Label>
        </g>
      ))}
      {/* measurement */}
      <rect x={30} y={244} width={300} height={16} style={{ fill: tone('muted'), opacity: 0.25 }} />
      <polyline points={Array.from({ length: 100 }, (_, i) => { const x = 30 + i * 4; const pk = 90 * Math.exp(-((i - 85) ** 2) / 6); return `${x},${252 - pk - 7 * Math.sin(i * 2.9)}` }).join(' ')} style={{ fill: 'none', stroke: tone('ink'), strokeWidth: 1.5 }} />
      <Arrow x1={400} y1={252} x2={400} y2={164} t="var-a" />
      <Label x={408} y={210} anchor="start" t="var-a" size={12}>H</Label>
      <line x1={20} y1={244} x2={20} y2={260} style={{ stroke: tone('var-b'), strokeWidth: 3 }} />
      <Label x={14} y={256} anchor="end" t="var-b" size={12}>h</Label>
      <Label x={180} y={280} size={11}>måle-vindu ≈ 20 × w₀,₅  ·  h = N₍p‑p₎ (topp til topp)</Label>
      <line x1={30} y1={252 - 3 * 8} x2={440} y2={252 - 3 * 8} style={{ stroke: tone('var-e'), strokeDasharray: '4 3' }} />
      <Label x={34} y={252 - 3 * 8 - 4} anchor="start" size={10} t="var-e">3 × støy (LOD)</Label>
      <line x1={30} y1={252 - 10 * 8} x2={440} y2={252 - 10 * 8} style={{ stroke: tone('var-d'), strokeDasharray: '4 3' }} />
      <Label x={34} y={252 - 10 * 8 - 4} anchor="start" size={10} t="var-d">10 × støy (LOQ)</Label>
    </Svg>
  )
}

/* Efficiency vs detection limit */
function Effektivitet() {
  const g = (x0, s, h) => Array.from({ length: 41 }, (_, i) => { const x = x0 - 60 + i * 3; return [x, 160 - h * Math.exp(-((x - x0) ** 2) / (2 * s * s))] })
  const noise = (x0) => Array.from({ length: 50 }, (_, i) => `${x0 - 90 + i * 3.6},${160 + 4 * Math.sin(i * 2.7)}`).join(' ')
  return (
    <Svg w={460} h={210} label="Effektivitet og deteksjonsgrense">
      <polyline points={noise(110)} style={{ fill: 'none', stroke: tone('muted') }} />
      <polyline points={noise(340)} style={{ fill: 'none', stroke: tone('muted') }} />
      <Curve t="var-a" points={g(110, 6, 120)} />
      <Curve t="var-a" points={g(340, 22, 33)} />
      <Label x={110} y={190} size={11}>(a) smal, høy topp</Label>
      <Label x={340} y={190} size={11}>(b) bred, lav topp nær støyen</Label>
      <Label x={230} y={20} size={12} t="intuition">bedre effektivitet → bedre deteksjonsgrense</Label>
      <Label x={230} y={206} size={10}>samme konsentrasjon, samme areal</Label>
    </Svg>
  )
}

/* Linear, dynamic, forbidden */
function Omrader() {
  const X = (c) => 50 + c * 360, Y = (r) => 220 - r * 180
  return (
    <Svg w={460} h={260} label="Lineært, dynamisk og forbudt område">
      <rect x={X(0)} y={20} width={X(0.45) - X(0)} height={200} style={{ fill: tone('intuition'), opacity: 0.14 }} />
      <rect x={X(0.45)} y={20} width={X(0.75) - X(0.45)} height={200} style={{ fill: tone('example'), opacity: 0.18 }} />
      <rect x={X(0.75)} y={20} width={X(1.05) - X(0.75)} height={200} style={{ fill: tone('trap'), opacity: 0.14 }} />
      <Arrow x1={50} y1={220} x2={440} y2={220} />
      <Arrow x1={50} y1={220} x2={50} y2={14} />
      <Curve t="ink" points={[[X(0), Y(0)], [X(0.45), Y(0.6)], [X(0.6), Y(0.75)], [X(0.75), Y(0.82)], [X(0.9), Y(0.83)], [X(1.05), Y(0.83)]]} />
      <Label x={X(0.22)} y={36} t="intuition" size={11}>Linear range</Label>
      <Label x={X(0.6)} y={36} size={11}>ikke-lineær</Label>
      <Label x={X(0.9)} y={36} t="trap" size={10}>forbudt område</Label>
      <Label x={X(0.9)} y={50} t="trap" size={10}>(detektor i metning)</Label>
      <line x1={X(0)} y1={64} x2={X(0.75)} y2={64} style={{ stroke: tone('ink') }} />
      <Label x={X(0.37)} y={78} size={10}>Dynamic range</Label>
      <Label x={X(0.45)} y={238} size={11}>c₁</Label>
      <Label x={X(0.75)} y={238} size={11}>c₂</Label>
      <Label x={440} y={256} anchor="end" size={11}>analyttkonsentrasjon</Label>
      <Label x={56} y={16} anchor="start" size={11}>respons</Label>
    </Svg>
  )
}

const sn = (H, h) => (2 * H) / h

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Se det, måle det, stole på det">
        <MentalModel cite={`[${KK}, p. 10–11; ${B2}, p. 190–191, 196]`}>
          Et detektorsignal består av det analytten gir pluss støy, som er tilfeldige signaler som ikke kommer fra prøven. Toppen må være tydelig større enn støyen. S/N &gt; 3: du kan <em>se</em> at stoffet er der (<V c="e">LOD</V>). S/N &gt; 10: du kan <em>måle</em> hvor mye det er med akseptabel presisjon (<V c="d">LOQ</V>).{' '}
          Smale topper gir høyere topp for samme mengde, og dermed lavere deteksjonsgrense. Over LOQ må signalet øke lineært med konsentrasjonen for at kalibreringen skal gjelde (lineært område). Over dette flater responsen ut, og til slutt metter detektoren. Metodevalidering betyr å dokumentere alt dette, sammen med repeterbarhet, nøyaktighet, selektivitet, robusthet og stabilitet, slik at man vet at metoden er god nok for formålet.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="Støy" cite={`[${KK}, p. 10; ${B2}, p. 190–191]`}>{'Tilfeldige detektorsignaler som ikke kommer fra prøven. Forelesningsfiguren viser høy S/N (lite systemstøy), lav S/N (mye systemstøy) og «too low» S/N. Boka måler støyen som topp-til-topp-støy $N_{p\\text{-}p}$.'}</Def>
            <Def term="LOD (Limit of Detection)" cite={`[${KK}, p. 10; ${B2}, p. 190]`}>S/N &gt; 3. Boka: en topp regnes som detekterbar når høyden er tre ganger støyen. Konsentrasjonen som gir S/N = 3 kalles cLOD.</Def>
            <Def term="LOQ (Limit of Quantification)" cite={`[${KK}, p. 10; ${B2}, p. 190; ${LF24}, p. 3]`}>S/N &gt; 10. Konsentrasjonen som gir S/N = 10 er cLOQ. Topphøyden må være mer enn 10 × støyen for pålitelig kvantifisering. Løsningsforslaget: den laveste konsentrasjonen av et stoff som kan kvantifiseres med akseptabel nøyaktighet og presisjon. LOQ er alltid høyere enn LOD og definerer nivået der en analytt kan måles pålitelig.</Def>
            <Avvik>LOQ = 3 × LOD (bok p. 198, valideringsprosedyren) vs. S/N = 10 (bok p. 190), som gir ≈ 3,3 × LOD.</Avvik>
            <Def term="Anbefalt måling av S/N" cite={`[${KK}, p. 10]`}>{'$S/N = 2H/h$, der H er topphøyden og h er støybåndets bredde (topp til topp), målt over et vindu på ca. 20 × $w_{0,5}$.'}</Def>
          </div>
          <Diagram title="S/N, LOD og LOQ" caption="Øverst: samme topp på tre støynivåer. Under: H, h og hjelpelinjer ved 3 × og 10 × støy. Skisse." cite={`[${KK}, p. 10; ${B2}, p. 191, Fig. 10.3]`}><SNPaneler /></Diagram>
        </Columns>
        <Columns>
          <Def term="cLOD avhenger av kromatografien" cite={`[${B2}, p. 191, Fig. 10.4]`}>Samme konsentrasjon gir lavere deteksjonsgrense med bedre effektivitet (smalere, høyere topp).</Def>
          <Diagram title="Effektivitet og deteksjonsgrense" cite={`[${B2}, p. 191, Fig. 10.4]`}><Effektivitet /></Diagram>
        </Columns>
        <Def term="Selektiviteten i hele metoden" cite={`[${B2}, p. 191]`}>Prøveopparbeiding, kromatografisk separasjon og deteksjon bidrar alle til metodens selektivitet. Hele metoden må kalibreres.</Def>
        <Columns>
          <Def term="Lineært område og dynamisk område" cite={`[${KK}, p. 11]`}>{'Konsentrasjonen må være i det lineære området for detektoren. Dette gjelder alle detektorer. Over $c_1$ er responsen ikke lenger lineær, men fortsatt i det dynamiske området. Over $c_2$ er det «forbudt område» (detektor i metning).'}</Def>
          <Diagram title="Lineært, dynamisk og forbudt område" cite={`[${KK}, p. 11]`}><Omrader /></Diagram>
        </Columns>
        <Def term="Metodevalidering" cite={`[${KK}, p. 11]`}>Bekrefte at en metode er «god nok» for formålet. Mange faktorer testes og dokumenteres: LOD og LOQ, lineært område, repeterbarhet/reproduserbarhet, nøyaktighet («round robin»), robusthet, selektivitet og stabilitet.</Def>
        <Def term="Valideringsparametere (bok)" cite={`[${B2}, p. 196]`}>cLOD, cLOQ, linearitet, område (range), repeterbarhet (innen og mellom serier / dager), nøyaktighet, selektivitet, robusthet og stabilitet. cLOD og cLOQ skal bestemmes ved å analysere prøver med analytt på disse nivåene, ikke ved ekstrapolering fra høyere konsentrasjoner.</Def>
        <Def term="Før validering (metodeutvikling)" cite={`[${B2}, p. 196]`}>Behov for oppkonsentrering og opprensing, løsemiddelvalg kompatibelt med kromatografien, og analyttens stabilitet. Baselinjeseparasjon, uten tailing og overlasting, og repeterbare retensjonstider. Detektor med langtidsstabil baselinje, stort lineært område og lave deteksjonsgrenser.</Def>
        <Diagram title="Valideringsparametere" cite={`[${KK}, p. 11; ${B2}, p. 196–198]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td><strong>Parameter</strong></td><td><strong>Hva betyr det</strong></td><td><strong>Hvordan testes det</strong></td></tr>
              <tr><td>LOD/LOQ</td><td>laveste konsentrasjon som kan detekteres / kvantifiseres</td><td>prøver på nivået, S/N = 3 / 10</td></tr>
              <tr><td>Linearitet og område</td><td>respons proporsjonal med konsentrasjon; fra cLOQ til høyeste undersøkte</td><td>spiking av blank prøve</td></tr>
              <tr><td>Repeterbarhet</td><td>spredning innen og mellom serier</td><td>&gt; 5 replikater på cLOQ, ½ c_max, c_max; &gt; 5 dager</td></tr>
              <tr><td>Nøyaktighet</td><td>hvor nær sann verdi (bias)</td><td>referansemateriale, annen metode, eller spiking: funnet/teoretisk</td></tr>
              <tr><td>Selektivitet</td><td>måle analytten i nærvær av interferenser</td><td>kjør sannsynlige interferenter</td></tr>
              <tr><td>Robusthet</td><td>effekt av driftsparametere</td><td>f.eks. pH 5,3 og 5,7 rundt 5,5</td></tr>
              <tr><td>Stabilitet</td><td>analytt uendret under lagring/analyse</td><td>frys/tin, romtemperatur, fryser, stamløsninger</td></tr>
            </tbody>
          </table>
        </Diagram>
        <Def term="Linearitet" cite={`[${B2}, p. 197]`}>Konsentrasjonsområdet der detektorresponsen er direkte proporsjonal med konsentrasjonen, fra cLOD. Undersøkes ved spiking av blank prøve.</Def>
        <Def term="Område (range)" cite={`[${B2}, p. 197]`}>Vanligvis fra cLOQ til høyeste konsentrasjon som er undersøkt for presisjon og nøyaktighet. Skal dekke konsentrasjonene som forventes i prøvene.</Def>
        <Def term="Repeterbarhet" cite={`[${B2}, p. 197]`}>{'Bestemmes på tre nivåer: cLOQ, f.eks. 50 × cLOQ (= $c_{max}$), og ½ $c_{max}$. Innen serie: > 5 replikater per nivå samme dag. Mellom serier: ett replikat per nivå over > 5 påfølgende dager.'}</Def>
        <Def term="Nøyaktighet (accuracy, bias)" cite={`[${B2}, p. 197]`}>Best med referansemateriale. Nest best er å sammenligne med en annen, etablert metode. Ellers spikes blank matriks på tre nivåer (lav, middels, høy), og funnet konsentrasjon deles på teoretisk. Svaret skal være nær 100 %.</Def>
        <Def term="Selektivitet / spesifisitet" cite={`[${B2}, p. 197]`}>Metoden er spesifikk hvis den er helt selektiv for én analytt. Selektivitet er evnen til å måle analytten nøyaktig i nærvær av forventede interferenser. Vises ved å kjøre sannsynlige interferenter og vise at de er separert eller ikke gir signal.</Def>
        <Def term="Robusthet" cite={`[${B2}, p. 197–198]`}>Effekten av driftsparametere på resultatet: MF-pH, flow, % organisk modifikator og kolonnetemperatur. Eksempel: MF-pH 5,5 testes ved 5,3 og 5,7. Ingen signifikant endring betyr at pH ikke er kritisk, ellers kreves streng pH-kontroll.</Def>
        <Def term="Stabilitet" cite={`[${B2}, p. 198]`}>At analyttkonsentrasjonen ikke endres under lagring, opparbeiding og analyse. Tester frys/tin, korttid ved romtemperatur, langtid i fryser, og stam- og arbeidsløsninger av analytt og IS.</Def>
        <Def term="Retningslinjer" cite={`[${B2}, p. 198]`}>Ingen universell metode. Eksempler er ISO/IEC 17025 og FDA CGMP, og kravene avhenger av bruk (f.eks. juridiske konsekvenser).</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="sn" />
        <Eq id="lodloq" />
        <Plot
          title="S/N-simulator: $S/N = 2H/h$"
          caption="Kurven viser S/N som funksjon av topphøyden H for valgt støybåndbredde h. Stiplede linjer: S/N = 3 (LOD) og 10 (LOQ). Under 3: ikke detektert. 3–10: detektert, ikke kvantifiserbar. Over 10: kvantifiserbar. Kursmaterialet har ingen numeriske støydata, så verdiene er illustrative. Hold musen over kurven ved din H."
          cite={`[${KK}, p. 10]`}
          x={{ min: 0, max: 30, label: 'H (topphøyde)' }}
          y={{ label: 'S/N', min: 0, max: 20 }}
          params={[{ key: 'h', label: '$h$ (støybånd)', min: 1, max: 10, step: 0.5, value: 4 }]}
          series={[{ key: 'sn', label: 'S/N', t: 'var-a', fn: (H, p) => sn(H, p.h) }]}
          marks={[{ y: 3, label: 'LOD (3)' }, { y: 10, label: 'LOQ (10)' }]}
        />
        <Eq id="acc" />
        <Eq id="rsd" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 1(c): forklar «LOQ» (2 p)"
          steps={[
            { title: 'Skriv ut forkortelsen:', body: 'Limit of Quantification, kvantifiseringsgrensen.' },
            { title: 'Definer i ord:', body: 'Den laveste konsentrasjonen av et stoff som kan kvantifiseres med akseptabel nøyaktighet og presisjon.' },
            { title: 'Gi kriteriet:', body: `Signal/støy ≥ 10 (mot ≥ 3 for LOD) [${KK}, p. 10; ${B2}, p. 190].` },
            { title: 'Sett i forhold til LOD:', body: 'LOQ er alltid høyere enn LOD. LOD sier «stoffet er der», LOQ sier «vi kan måle hvor mye».' },
            { title: '(Bonus) Hvordan den bestemmes i validering:', body: `Ved å analysere prøver med analytt på dette nivået, ikke ved å ekstrapolere fra høyere konsentrasjoner [${B2}, p. 196].` },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(c); ${LF24}, p. 3]`}
        />
        <FadedExample
          title="Planlegg en enkel validering (bokas prosedyre)"
          given="Anta at cLOD for metoden er funnet til 0,03 µg/mL (illustrativt tall, ikke fra kursfilene)."
          steps={[
            { title: 'cLOQ:', body: 'Prosedyren i boka bruker cLOQ = 3 × cLOD = 0,09 µg/mL. (NB: bokas S/N-definisjon gir 10/3 × cLOD, se «Eksamensfeller» og den røde avviksboksen over.)' },
            { title: '$c_{max}$:', body: 'F.eks. 50 × cLOQ = 4,5 µg/mL.' },
            { title: 'Hvilke spikede nivåer, og hvor mange replikater?', body: 'cLOQ (n = 6), ¼ $c_{max}$ = 1,125 (n = 1), ½ $c_{max}$ = 2,25 (n = 6), ¾ $c_{max}$ = 3,375 (n = 1), $c_{max}$ = 4,5 (n = 6). Alle analyseres samme dag, med IS ved ca. 20–40 % av signalet ved $c_{max}$.', hidden: true },
            { title: 'Hvordan sjekkes lineariteten?', body: 'Ett tilfeldig replikat fra hver av cLOQ, ½ $c_{max}$ og $c_{max}$, pluss ¼ og ¾ $c_{max}$, altså fem punkter.', hidden: true },
            { title: 'Hvordan finnes repeterbarheten innen serie?', body: 'RSD av de seks replikatene på hvert av de tre nivåene.', hidden: true },
            { title: 'Og mellom serier?', body: 'Én prøve per nivå hver dag i 5 påfølgende dager, pluss ett tilfeldig replikat fra dag 1 (n = 6).', hidden: true },
            { title: 'Nøyaktighet?', body: 'Nye spikede prøver på cLOQ, ½ $c_{max}$ og $c_{max}$ (n = 6 hver), kvantifisert mot kalibreringskurven. Funnet/teoretisk skal være ca. 100 %.', hidden: true },
          ]}
          cite={`[${B2}, p. 198–199]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="LOD og LOQ byttet om" cite={`[${KK}, p. 10; ${LF24}, p. 3]`}>LOD er S/N = 3 (detekterbar), LOQ er S/N = 10 (kvantifiserbar). LOQ &gt; LOD.</Trap>
        <Trap title="LOQ = 3 × LOD eller 10/3 × LOD?" cite={`[${B2}, p. 190, 198]`}>Boka definerer cLOQ ved S/N = 10 (dvs. ≈ 3,3 × cLOD), men det enkle valideringseksempelet regner cLOQ = 3 × cLOD. På eksamen er det tryggest å oppgi S/N-kriteriene.</Trap>
        <Trap title="Ekstrapolere LOD fra høye konsentrasjoner" cite={`[${B2}, p. 196]`}>Skal unngås. Analyser prøver på nivået.</Trap>
        <Trap title="Nøyaktighet og presisjon forveksles" cite={`[${B2}, p. 197]`}>Presisjon (repeterbarhet) er spredning mellom replikater (RSD). Nøyaktighet er hvor nær sann verdi man treffer (funnet/teoretisk ≈ 100 %).</Trap>
        <Trap title="Kvantifisering utenfor lineært område" cite={`[${KK}, p. 11]`}><T text="Over $c_1$ er responsen ikke-lineær, og over $c_2$ er detektoren mettet." /></Trap>
        <Trap title="Bred topp med samme areal er like bra" cite={`[${B2}, p. 191]`}>Nei. Bredere og lavere topp gir lavere S/N og dårligere deteksjonsgrense.</Trap>
      </Section>
    </>
  )
}
