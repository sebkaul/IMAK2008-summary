import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, tone } from '../components'

const KK = 'Kval og kvant analyse.pdf'
const KOF = 'koffein _ISTD_student_rev2.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const REL = String.raw`\text{relativ}`

export const meta = {
  title: 'Kvalitativ analyse og kalibreringsmetoder',
  topic: 'kvantifisering',
  examWeight: { level: 'medium', note: 'H25 oppg. 8 (14 p, intern standard med kalibreringskurve). H24 1(a) flervalg (hva ISTD korrigerer for)' },
  examTasks: [
    'H2025: oppg. 8 (kalibrering, y = 0.1152x − 0.0022) (index: side 17)',
    'H2025 oppg. 8 (14 p): koffein i drikke med HPLC og IS. (a) Hensikt med IS, (b) estimer konsentrasjonen fra kalibreringsdata (forhold 0,75 falt ut av oppgaven), (c) hvorfor tilsette IS før prøvepreparering, (d) én begrensning.',
    'H2024 oppg. 1(a) (flervalg, 1 av 5 delspørsmål): hva en intern standard korrigerer for (variasjoner i prøvepreparering og injeksjon).',
  ],
  buildsOn: ['01-retensjon-og-selektivitet', '04-hplc-system-pumper-injeksjon', '06-hplc-detektorer', '13-gc-detektorer'],
  usedIn: ['18-metodevalidering-lod-loq'],
  sources: [
    `[${KK}, p. 1–4, 6–9, 11] (håndskrevet forelesning. p. 10, støy/LOD/LOQ, er brukt på side 18)`,
    `[${KOF}, p. 1–4]`,
    `[${B1}, p. 44] (p. = boksidetall; PDF-side = bokside + 16)`,
    `[${B2}, p. 189–195] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[${E25}, oppg. 8] / [${LF25}, oppg. 8]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(a)] / [${LF24}, p. 1–2]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvorfor kan man ikke bruke ekstern standard i GC?', a: `GC mangler volumkontroll ved injeksjon [${B2}, p. 193; ${B1}, p. 44].` },
    { id: 'p2', kind: 'pretest', q: 'Hva antar man når man kvantifiserer ved enkel normalisering (areal%)?', a: `At alle analyttene har lik responsfaktor [${KK}, p. 6; ${B2}, p. 192].` },
    { id: 'p3', kind: 'pretest', q: 'Når i prosessen bør intern standard tilsettes?', a: `Før prøveopparbeidingen, slik at den korrigerer for tap under opparbeiding [${LF25}, oppg. 8c].` },
    { id: 't1', q: 'Tre topper har areal 20, 70 og 150. Hva er areal% for hver ved enkel normalisering?', a: `Total 240: A = 8,3 %, B = 29,2 %, C = 62,5 % [${KK}, p. 6].` },
    { id: 't2', q: 'Kalibrering med IS (500 µM i alle): [A] = 200, 400, 800 µM gir signal A / signal IS = 0,8, 1,6, 3,2. En prøve tilsatt 500 µM IS gir signal A = 8000 og IS = 4000. Hva er [A]?', a: `A/IS = 2, så [A]/[IS] = 1 og [A] = 500 µM [${KK}, p. 8].` },
    { id: 't3', q: 'Nevn fire krav til en intern standard.', a: `Ikke finnes i prøven, lignende egenskaper som analytten, separert fra andre stoffer men med $t_R$ nær analytten, og stabil og tilgjengelig med høy renhet. Isotopmerket er best [${KK}, p. 9; ${B2}, p. 193–194].` },
    { id: 't4', q: 'Når foretrekkes standardtilsetning?', a: `Når man ikke har en blank prøve (uten analytt over LOD) å lage kalibreringsprøver i [${B2}, p. 194–195].` },
    { id: 't5', q: 'Hvorfor bør man bruke minst to ulike kromatografiske teknikker for å identifisere en ukjent analytt?', a: `Retensjonstid alene er bare en indikasjon. To ortogonale teknikker (eller GC-MS) gir sikrere identifikasjon [${KK}, p. 1–2; ${B1}, p. 44].` },
  ],
  equations: [
    {
      id: 'norm', label: 'Normalisering',
      tex: String.raw`\begin{gathered}\text{areal\%}_i = \frac{A_i}{\sum A}\times 100\,\% \\ \text{(korrigert: } A_i \rightarrow A_i/f_i\text{)}\end{gathered}`,
      vars: [
        { sym: 'A_i', desc: 'areal (eller høyde) av topp $i$', unit: REL },
        { sym: String.raw`\sum A`, desc: 'totalt areal av alle topper', unit: REL },
        { sym: 'f_i', desc: 'relativ responsfaktor for komponent $i$', unit: '–' },
      ],
      cite: `[${KK}, p. 6; ${B2}, p. 192]`,
      check: { status: 'verified', note: 'Forelesning p. 6: %A = 20/240 = 8,3 % osv., og korrigert normalisering 1000/2 + 2000/3 + 500/2 + 1000/1 = 2417.' },
    },
    {
      id: 'resp', label: 'Responsfaktor',
      tex: String.raw`C = \frac{dy}{dc}\;\;\text{(kons.-følsom)} \qquad C = \frac{dy}{dm}\;\;\text{(massefølsom)}`,
      vars: [
        { sym: 'y', desc: 'detektorsignal', unit: REL },
        { sym: 'c\\ /\\ m', desc: 'konsentrasjon / masse', unit: String.raw`\mathrm{mg/L}\ /\ \mathrm{ng}` },
      ],
      note: 'Enheten avhenger av detektoren.',
      cite: `[${KK}, p. 4]`,
      check: { status: 'verified', note: 'Forelesning p. 4: C = dy/dc (kons. følsom), dy/dm (massefølsom).' },
    },
    {
      id: 'ext', label: 'Ekstern standard',
      tex: String.raw`\vb{y} = \vc{a}\,\va{x} + b \quad\Rightarrow\quad \va{x_{prøve}} = \frac{\vb{y_{prøve}} - b}{\vc{a}}`,
      vars: [
        { sym: String.raw`\vb{y}`, desc: 'toppareal eller høyde', unit: REL },
        { sym: String.raw`\va{x}`, desc: 'konsentrasjon av analytt', unit: String.raw`\mathrm{mg/L}` },
        { sym: String.raw`\vc{a},\ b`, desc: 'stigningstall og konstantledd fra regresjon', unit: '–' },
      ],
      cite: `[${B2}, p. 193]`,
      check: { status: 'verified', note: 'Bok del 2 p. 193 (PDF s. 109): «calibration equation y = ax + b». Den løste formen for x er innholdets omforming.' },
    },
    {
      id: 'is', label: 'Intern standard',
      tex: String.raw`\begin{gathered}\frac{A_A}{A_{IS}} = \vc{a}\,\frac{c_A}{c_{IS}} + b \\ \Rightarrow\quad c_A = c_{IS}\cdot\frac{(A_A/A_{IS}) - b}{\vc{a}}\end{gathered}`,
      vars: [
        { sym: 'A_A,\\ A_{IS}', desc: 'toppareal for analytt og IS', unit: REL },
        { sym: 'c_A,\\ c_{IS}', desc: 'konsentrasjon av analytt og IS', unit: String.raw`\mathrm{\mu g/mL}` },
      ],
      note: 'Holdes $c_{IS}$ lik i alle kalibreringsprøver og prøver, kan $c_A$ brukes direkte på x-aksen.',
      cite: `[${B2}, p. 194; ${KK}, p. 8]`,
      check: { status: 'mismatch', note: 'Boka (p. 194, PDF s. 110, Fig. 10.7) og forelesningen (p. 8) beskriver plottet A/IS mot c_A/c_IS i ord og figur, men skriver ikke ligningen. Formen over er innholdets.' },
    },
  ],
}

/* Qualitative identification by tR */
function Identifikasjon() {
  const row = (y, peaks, lab) => (
    <g>
      <Label x={10} y={y - 44} anchor="start" size={11}>{lab}</Label>
      <line x1={10} y1={y} x2={450} y2={y} style={{ stroke: tone('muted') }} />
      {peaks.map(([x, h, t], i) => <Curve key={i} t={t} points={[[x - 12, y], [x - 4, y - 8], [x, y - h], [x + 4, y - 8], [x + 12, y]]} />)}
    </g>
  )
  return (
    <Svg w={460} h={270} label="Kvalitativ identifikasjon via retensjonstid">
      {row(70, [[150, 40, 'var-a']], 'Component A standard sample')}
      {row(140, [[300, 40, 'var-e']], 'Component B standard sample')}
      {row(210, [[80, 30, 'ink'], [150, 35, 'var-a'], [230, 25, 'ink'], [300, 38, 'var-e'], [380, 20, 'ink']], 'Unknown sample')}
      <line x1={150} y1={70} x2={150} y2={210} style={{ stroke: tone('var-a'), strokeDasharray: '4 4' }} />
      <line x1={300} y1={140} x2={300} y2={210} style={{ stroke: tone('var-e'), strokeDasharray: '4 4' }} />
      <Label x={230} y={238} size={11}>retensjonstiden må være stabil:</Label>
      <Label x={230} y={256} size={11}>GC = trykk/temp, LC = MF-sammensetning/flow</Label>
    </Svg>
  )
}

/* Response factor */
function Respons() {
  return (
    <Svg w={460} h={260} label="Responsfaktor for tre detektorer">
      <Arrow x1={50} y1={220} x2={440} y2={220} />
      <Arrow x1={50} y1={220} x2={50} y2={20} />
      <Label x={440} y={240} anchor="end" size={12}>mengdeenhet (kons.)</Label>
      <Label x={56} y={22} anchor="start" size={12}>signalstyrke</Label>
      <line x1={50} y1={220} x2={260} y2={30} style={{ stroke: tone('var-b'), strokeWidth: 2.5 }} />
      <line x1={50} y1={220} x2={420} y2={60} style={{ stroke: tone('ink'), strokeWidth: 2.5 }} />
      <line x1={50} y1={220} x2={420} y2={150} style={{ stroke: tone('var-e'), strokeWidth: 2.5 }} />
      <Label x={264} y={30} anchor="start" t="var-b" size={12}>det. B — mer følsom</Label>
      <Label x={424} y={56} anchor="end" size={12}>det. A</Label>
      <Label x={424} y={146} anchor="end" t="var-e" size={12}>det. C — mindre følsom</Label>
      <line x1={120} y1={225} x2={170} y2={225} style={{ stroke: tone('intuition'), strokeWidth: 3 }} />
      <Label x={145} y={250} t="intuition" size={11}>samme Δ-mengde</Label>
    </Svg>
  )
}

/* Standard addition */
function Standardtilsetning() {
  const X = (v) => 180 + v * 70, Y = (s) => 210 - s * 40
  const pts = [[0, 1], [1, 2], [2, 3], [3, 4]]
  return (
    <Svg w={460} h={250} label="Standardtilsetning">
      <line x1={20} y1={210} x2={440} y2={210} style={{ stroke: tone('ink') }} />
      <line x1={180} y1={210} x2={180} y2={20} style={{ stroke: tone('ink') }} />
      <line x1={X(-1.2)} y1={Y(-0.2)} x2={X(3.4)} y2={Y(4.4)} style={{ stroke: tone('topic'), strokeWidth: 2 }} />
      <line x1={X(-1)} y1={Y(0)} x2={X(0)} y2={Y(1)} style={{ stroke: tone('topic'), strokeWidth: 2, strokeDasharray: '5 4' }} />
      {pts.map(([v, s], i) => <g key={i}><circle cx={X(v)} cy={Y(s)} r={6} style={{ fill: tone('var-b') }} /><Label x={X(v)} y={230} size={11}>{['A', 'A+S', 'A+2S', 'A+3S'][i]}</Label></g>)}
      <circle cx={X(-1)} cy={210} r={10} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2 }} />
      <Label x={X(-1)} y={190} t="trap" size={11}>startkons.</Label>
      <Label x={440} y={246} anchor="end" size={11}>tilsatt mengde</Label>
      <Label x={186} y={24} anchor="start" size={11}>signal</Label>
    </Svg>
  )
}

/* External vs internal standard curves */
function EksInt() {
  const panel = (ox, xs, ys, xmax, ymax, xlab, ylab, readY, t) => {
    const X = (v) => ox + 20 + (v / xmax) * 170, Y = (v) => 200 - (v / ymax) * 170
    const a = (ys[ys.length - 1] - ys[0]) / (xs[xs.length - 1] - xs[0]), b = ys[0] - a * xs[0]
    const rx = (readY - b) / a
    return (
      <g>
        <Arrow x1={ox + 20} y1={200} x2={ox + 200} y2={200} />
        <Arrow x1={ox + 20} y1={200} x2={ox + 20} y2={20} />
        <line x1={X(0)} y1={Y(b)} x2={X(xmax)} y2={Y(a * xmax + b)} style={{ stroke: tone(t), strokeWidth: 2 }} />
        {xs.map((x, i) => <g key={x}><circle cx={X(x)} cy={Y(ys[i])} r={4} style={{ fill: tone('ink') }} /><Label x={X(x)} y={214} size={9}>{String(x).replace('.', ',')}</Label></g>)}
        <polyline points={`${ox + 20},${Y(readY)} ${X(rx)},${Y(readY)} ${X(rx)},200`} style={{ fill: 'none', stroke: tone('trap'), strokeDasharray: '4 3' }} />
        <Label x={ox + 200} y={232} anchor="end" size={10}>{xlab}</Label>
        <Label x={ox + 26} y={22} anchor="start" size={10}>{ylab}</Label>
      </g>
    )
  }
  return (
    <Svg w={460} h={240} label="Ekstern og intern standard-kurve">
      {panel(0, [5, 10, 15, 20], [23.6, 48.8, 72.5, 97.2], 22, 105, 'konsentrasjon', 'signal (ekstern)', 68, 'var-c')}
      {panel(230, [0.4, 0.8, 1.6], [0.8, 1.6, 3.2], 1.8, 3.6, '[A]/[IS]', 'signal A / IS (intern)', 2, 'var-d')}
    </Svg>
  )
}

const ratios = [[2.5, 0.28], [5, 0.58], [10, 1.15], [20, 2.3]]

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Hva er det, og hvor mye?">
        <MentalModel cite={`[${KK}, p. 1–9; ${B1}, p. 44; ${B2}, p. 189–195]`}>
          <strong>Kvalitativ analyse</strong> svarer på «hva?», og <strong>kvantitativ analyse</strong> på «hvor mye?». I kromatografi identifiseres en analytt ved retensjonstiden. Det krever stabil retensjon, og for en ukjent analytt bør minst to ulike (ortogonale) teknikker brukes, f.eks. to SF eller GC-MS.{' '}
          Kvantitativ analyse bygger på at toppareal eller topphøyde er proporsjonal med mengden. Proporsjonalitetskonstanten (<V c="c">responsfaktoren</V>) er ulik for ulike stoffer og detektorer, så detektoren må kalibreres. Fire kalibreringsmetoder: <strong>normalisering</strong> (forutsetter lik respons), <strong>ekstern standard</strong> (krever nøyaktig injeksjonsvolum), <strong>intern standard</strong> (et kjent stoff i fast mengde i alle prøver og standarder, slik at forholdet analytt/IS korrigerer for variasjon i injeksjon og prøveopparbeiding) og <strong>standardtilsetning</strong> (kalibrerer i selve prøven, brukes når man ikke har en blank prøve).
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="Kvalitativ analyse" cite={`[${KK}, p. 1]`}>Bestemme ukjent analytt i prøven. Benytter retensjonstiden som indikasjon, men må ofte benytte andre teknikker i tillegg.</Def>
            <Def term="Stabil retensjonstid" cite={`[${KK}, p. 1]`}>Retensjonstiden må være stabil. I GC påvirkes den av trykk og temperatur, i LC av MF-sammensetning og flow.</Def>
            <Def term="Kromatografisk effektivitet og gjentagelse" cite={`[${KK}, p. 2]`}>{'Effektivitet er også viktig for kvalitativ analyse. Gjentagelse sjekker at $R_t$ er stabil, og man oppgir $R_t$ med usikkerhet, f.eks. RSD.'}</Def>
            <Def term="Ny eller ukjent analytt" cite={`[${KK}, p. 2; ${B1}, p. 44]`}>{'Kvalitativ identifikasjon med minst 2 ulike (ortogonale) kromatografiske teknikker. Boka: sammenligning av $t_R$ med standarder på minst to ulike SF, men GC-MS er mest brukt.'}</Def>
            <Def term="RSD (relativt standardavvik)" cite={`[${KK}, p. 2]`}>std / gjennomsnitt × 100 %.</Def>
          </div>
          <Diagram title="Kvalitativ identifikasjon via retensjonstid" cite={`[${KK}, p. 1]`}><Identifikasjon /></Diagram>
        </Columns>
        <Def term="Kvantitativ analyse" cite={`[${KK}, p. 3]`}>Hvor mye av en analytt finnes i en prøve. Metoder: normalisering, ekstern standard, intern standard og standardaddisjon.</Def>
        <Def term="Topphøyde vs. areal" cite={`[${KK}, p. 3; ${B2}, p. 189–190]`}>Topphøyde er en enkel parameter, som ikke påvirkes av asymmetri eller litt overlappende topper. Areal påvirkes av overlapp og asymmetri (gir grensene vanskelig). Boka: topphøyden kan variere med flow for både konsentrasjons- og massefølsomme detektorer, mens arealet bare varierer med flow for konsentrasjonsfølsomme. FID og areal tåler altså flowvariasjon.</Def>
        <Def term="Krav for pålitelig kvantifisering" cite={`[${B2}, p. 189–190]`}>Toppen må være tilstrekkelig stor mot støyen, godt separert fra nabotopper og tilstrekkelig smal. LOD og LOQ behandles på side 18.</Def>
        <Columns>
          <Def term="Responsfaktor" cite={`[${KK}, p. 4; ${B2}, p. 192]`}>{'Endring i signalstyrke per endring i konsentrasjon (konsentrasjonsfølsom detektor) eller mengde (massefølsom). $C = dy/dc$ eller $dy/dm$. Ulike stoffer kan ha ulike responsfaktorer: ofte på ulike detektorer, men også på samme detektor ved ulike analysebetingelser. Responsfaktoren er stigningstallet på kurven for detektorrespons mot konsentrasjon.'}</Def>
          <Diagram title="Responsfaktor for tre detektorer" cite={`[${KK}, p. 4]`}><Respons /></Diagram>
        </Columns>
        <Columns>
          <div>
            <Def term="Normalisering (areal%)" cite={`[${KK}, p. 6; ${B2}, p. 192]`}>Summer arealet av alle toppene og regn ut hver som andel. Enkelt, men kan være unøyaktig, fordi det forutsetter lik responsfaktor for alle analyttene. Forutsetter at alle komponentene eluerer.</Def>
            <Def term="«Skikkelig» normalisering" cite={`[${KK}, p. 6]`}>Bestem responsfaktoren for alle analyttene med en standardprøve (like deler av hver), og korriger arealene (høydene) med responsfaktoren før normalisering.</Def>
          </div>
          <Diagram title="Normalisering med og uten responsfaktor" cite={`[${KK}, p. 6]`}>
            <table className="eq-vars">
              <tbody>
                <tr><td colSpan={4}><strong>Enkel:</strong> A = 20, B = 70, C = 150 → total 240</td></tr>
                <tr><td><strong>Standardprøve (like deler)</strong></td><td>1000</td><td>1500</td><td>1000 · 500</td></tr>
                <tr><td>relativ følsomhet</td><td>2</td><td>3</td><td>2 · 1</td></tr>
                <tr><td><strong>Ukjent prøve</strong></td><td>1000/2</td><td>2000/3</td><td>500/2 · 1000/1</td></tr>
                <tr><td colSpan={4}>korrigert total = 2417</td></tr>
              </tbody>
            </table>
          </Diagram>
        </Columns>
        <Def term="Ekstern standard («klassisk kalibrering»)" cite={`[${KK}, p. 7–8; ${B2}, p. 192–193]`}>Analyser standarder med kjent konsentrasjon og lag en kalibreringskurve (signal mot konsentrasjon). Den ukjente prøven leses av. <strong>Fordeler</strong>: gir korrekt (nøyaktig) resultat i motsetning til «forenklet» normalisering, og man slipper å kalibrere for stoffer som ikke er av interesse. <strong>Ulempe</strong>: kritisk med injeksjonsvolum. Gir stor variasjon i resultat ved variasjon i injeksjonsvolum. Kan bedres med autoinjektor eller loop-injeksjon (HPLC). Med prøveopparbeiding må kalibreringsløsningene lages ved spiking av blank prøve, behandlet likt som prøvene. Krever streng volumkontroll. Kan brukes i HPLC, men ikke i GC (ingen volumkontroll ved injeksjon). Kan brukes med enkel opparbeiding (proteinfelling), men ikke med SPE eller LLE. Forskjellen i stigningstall mellom spiket blank og ren standard reflekterer gjenvinningen.</Def>
        <Columns>
          <Def term="Intern standard (IS)" cite={`[${KK}, p. 8–9; ${B2}, p. 193–194; ${LF25}, oppg. 8a; ${B1}, p. 44]`}>Et kjent stoff i kjent mengde tilsettes prøven og alle kalibreringsløsningene. Kalibreringskurven plottes som signal A / signal IS mot [A]/[IS]. Eliminerer effekten av variasjon i injeksjonsvolum og tar også hensyn til tap i prøveopparbeidingen. Fordel: ved prøveopparbeiding «tapes» like mye av A og IS. Kompenserer for variasjon i injeksjonsvolum, deteksjon og prøvepreparering ved å normalisere signalet. Kvantitativ GC gjøres alltid med IS, fordi repeterbare injeksjoner er nesten umulige.</Def>
          <Diagram title="Ekstern vs. intern standard-kurve" caption="Ekstern: 5/10/15/20 → 23,6/48,8/72,5/97,2. Intern: [A]/[IS] = 0,4/0,8/1,6 → 0,8/1,6/3,2, avlest ved A/IS = 2. Rød stiplet: avlesning." cite={`[${KK}, p. 7–8; ${B2}, p. 192, 194]`}><EksInt /></Diagram>
        </Columns>
        <Def term="Krav til IS" cite={`[${KK}, p. 9; ${B2}, p. 193–194; ${B1}, p. 44]`}>Ikke finnes i prøven fra før. Lignende kjemiske og fysikalske egenskaper som analytten, og oppføre seg likt i prøveopparbeiding, ekstraksjon og derivatisering. Separert fra andre stoffer (unntatt med MS-deteksjon), men med retensjonstid nær analyttene. Tilsatt i konsentrasjon som gir omtrent lik topp som forventet analytt. Stabil, tilgjengelig og med høy renhet. Isotopmerkede standarder (¹³C, ²H …) er best. Med MS kan f.eks. deutererte IS brukes.</Def>
        <Def term="Koffeinlaben" cite={`[${KOF}, p. 1–4]`}>Sammenligner ekstern og intern standard for koffein i drikke på HPLC-UV, og ber studentene velge en egnet IS ut fra kriteriene over.</Def>
        <Columns>
          <Def term="Standardtilsetning (standardaddisjon)" cite={`[${KK}, p. 9; ${B2}, p. 194–195]`}>Først analyseres prøven. Så tilsettes kjente mengder analytt til prøven, og den analyseres igjen. Standardkurven ekstrapoleres for å finne startkonsentrasjonen. Brukes mest når man ikke har en blank prøve. Lite brukt i kromatografi, fordi det trengs flere analyser per prøve.</Def>
          <Diagram title="Standardtilsetning" caption="Linjen ekstrapoleres ned til x-aksen på negativ side; skjæringspunktet (sirklet) er startkonsentrasjonen." cite={`[${KK}, p. 9]`}><Standardtilsetning /></Diagram>
        </Columns>
        <Def term="Lineært område" cite={`[${KK}, p. 11]`}>Pass på at konsentrasjonen er i det lineære området for detektoren. Over det lineære området ligger dynamisk område, og helt øverst et «forbudt område» (detektor i metning).</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="norm" />
        <Eq id="resp" />
        <Eq id="ext" />
        <Eq id="is" />
        <Plot
          title="ISTD-kalibrering (H25 oppg. 8)"
          caption="Regresjonslinje $y = 0{,}1152x - 0{,}0022$ ($R^2$ = 0,99997) beregnet fra kalibreringspunktene 2,5 / 5,0 / 10,0 / 20,0 mg/L → $A_{koffein}/A_{IS}$ = 0,28 / 0,58 / 1,15 / 2,3 (punktene markert som stiplede linjer). Slideren er det ukjente forholdet (start 0,75 fra LF); den røde vannrette linjen krysser kurven ved avlest konsentrasjon (6,5 mg/L ved 0,75). Er forholdet over 2,3 eller under 0,28, ligger prøven utenfor kalibreringsområdet."
          cite={`[${E25}, oppg. 8; ${LF25}, oppg. 8]`}
          x={{ min: 0, max: 22, label: 'koffein (mg/L)' }}
          y={{ label: 'A_koffein / A_IS', min: 0, max: 2.6 }}
          params={[{ key: 'r', label: 'ukjent forhold', min: 0, max: 2.5, step: 0.01, value: 0.75 }]}
          series={[
            { key: 'cal', label: 'kalibrering', t: 'var-c', fn: (x) => 0.1152 * x - 0.0022 },
            { key: 'u', label: 'ukjent prøve', t: 'trap', fn: (x, p) => p.r },
          ]}
          marks={ratios.map(([x]) => ({ x, label: `${String(x).replace('.', ',')}` }))}
        />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 8: koffein med intern standard (14 p)"
          given="Kalibrering (fast IS-konsentrasjon): 2,5 / 5,0 / 10,0 / 20,0 mg/L koffein gir $A_{koffein}/A_{IS}$ = 0,28 / 0,58 / 1,15 / 2,3. Opplysningen «en ukjent prøve gir forholdet 0,75» falt ut av eksamensoppgaven, og det ble tatt hensyn til i poengsettingen."
          steps={[
            { title: 'a) Hensikt med IS?', body: 'IS kompenserer for variasjon i injeksjonsvolum, deteksjon og prøvepreparering ved å normalisere signalet.' },
            { title: 'b) Konsentrasjon i ukjent prøve (forhold 0,75):', body: `IS-konsentrasjonen er fast, så x-aksen kan være koffein (mg/L) direkte [${B2}, p. 194].` },
            { body: 'Lineær regresjon på de fire punktene gir $y = 0{,}1152\\,x - 0{,}0022$ ($R^2$ ≈ 1,000). Raskt alternativ: stigningstall ≈ 2,3/20 = 0,115.' },
            { title: 'Løs for x:', body: '$x = (0{,}75 + 0{,}0022)/0{,}1152 \\approx 6{,}5$ mg/L.' },
            { title: 'Sjekk:', body: '6,5 mg/L ligger innenfor kalibreringsområdet (2,5–20 mg/L), så det er ingen ekstrapolering.' },
            { title: 'c) Hvorfor tilsette IS før prøvepreparering?', body: `Det korrigerer for tap under opparbeiding og variasjoner mellom prøver, fordi like mye av A og IS «tapes» [${KK}, p. 9].` },
            { title: 'd) Én begrensning:', body: 'IS må ha lignende kromatografiske egenskaper som analytten og ikke være naturlig til stede i prøven.' },
          ]}
          cite={`[${E25}, oppg. 8; ${LF25}, oppg. 8]`}
        />
        <FadedExample
          title="Bokas IS-eksempel (Tabell 10.1)"
          given="Kalibreringskurve: $A_A/A_{IS} = 1{,}0617\,(c_A/c_{IS}) - 0{,}0202$ (IS = 0,3000 µg/mL i kalibreringsprøvene). Prøvene er tilsatt IS = 0,3200 µg/mL, ulikt kalibreringsprøvene. Replikat 1: $A_A$ = 74 555, $A_{IS}$ = 59 760."
          steps={[
            { title: 'Arealforhold:', body: '$74\\,555/59\\,760 = 1{,}248$.' },
            { title: 'Løs for konsentrasjonsforholdet:', body: '$c_A/c_{IS} = (1{,}248 + 0{,}0202)/1{,}0617 = 1{,}194$.' },
            { title: 'Gang med IS-konsentrasjonen i prøven:', body: '$c_A = 1{,}194 \\times 0{,}3200 = 0{,}382$ µg/mL.' },
            { title: 'Replikat 2 ($A_A$ = 76 321, $A_{IS}$ = 69 222):', body: 'forhold 1,103, $c_A/c_{IS}$ = 1,058, $c_A$ = 0,338 µg/mL.', hidden: true },
            { title: 'Replikat 3 ($A_A$ = 65 348, $A_{IS}$ = 53 803):', body: 'forhold 1,215, $c_A/c_{IS}$ = 1,163, $c_A$ = 0,372 µg/mL.', hidden: true },
            { title: 'Gjennomsnitt og standardavvik:', body: '0,36 µg/mL (s ≈ 0,02), som er bokas svar.', hidden: true },
            { title: 'Hvorfor er det viktig å bruke 0,3200 og ikke 0,3000 i trinn 3?', body: 'Konsentrasjonsforholdet må ganges med IS-konsentrasjonen i **prøven**.', hidden: true },
          ]}
          cite={`[${B2}, p. 194–195]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Ekstern standard i GC" cite={`[${B2}, p. 193; ${B1}, p. 44]`}>Ikke egnet, fordi GC mangler volumkontroll ved injeksjon. Bruk IS.</Trap>
        <Trap title="Normalisering uten responsfaktor" cite={`[${KK}, p. 6]`}>Gir feil hvis stoffene har ulik respons, så areal% ≠ masse%.</Trap>
        <Trap title="IS tilsatt etter opparbeiding" cite={`[${LF25}, oppg. 8c; ${KK}, p. 9]`}>Korrigerer da bare for injeksjon, ikke for tap i opparbeidingen.</Trap>
        <Trap title="IS som finnes i prøven fra før" cite={`[${KK}, p. 9]`}>Ubrukelig. Den kjente mengden blir feil.</Trap>
        <Trap title="Ekstrapolere utenfor kalibreringsområdet / det lineære området" cite={`[${KK}, p. 11]`}>Konsentrasjonen må være i det lineære området for detektoren.</Trap>
        <Trap title="Topphøyde og flow" cite={`[${B2}, p. 190]`}>Høyden kan variere med flow for begge detektortyper. Areal med massefølsom detektor (FID) gjør ikke det.</Trap>
        <Trap title="Standardtilsetning brukes rutinemessig" cite={`[${B2}, p. 194–195]`}>Den er tidkrevende (flere analyser per prøve) og brukes mest når blank prøve mangler.</Trap>
      </Section>
    </>
  )
}
