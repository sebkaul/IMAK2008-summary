import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Box, Arrow, Label, Mermaid, Columns, V, tone } from '../components'

const DB = 'hele dokbio261016.pdf'
const BS = 'Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'

export const meta = {
  title: 'Biosensorer: prinsipp, bioreseptorer, transdusere og klassiske typer',
  topic: 'biosensorer',
  examWeight: { level: 'medium', note: 'H24 3(a) i–iii (del av 6 p: hvilken sensor bruker enzymer, bioreseptor, transduser) og 3(b) (4 p, fyll inn: cellebasert vs. enzymsensor). H25 oppg. 14 (5 p: fordeler og ulemper med cellebaserte sensorer). SPR-delen (H24 3a iv, H25 15) er på side 28' },
  examTasks: [
    'H2024: 3(a) i–iii; 3(b) (index: side 27)',
    'H2025: oppg. 14 (cellebaserte sensorer) (index: side 27)',
    'H2024 oppg. 3(a) i–iii (del av 6 p): enzym som bioreseptor gir elektrokjemisk sensor. Bioreseptor binder spesifikk analytt. Transduser omdanner til målbart signal. Fasit i LF. Del iv (SPR) er på side 28.',
    'H2024 oppg. 3(b) (4 p): fyll inn, cellebasert vs. enzymsensor. Fasit i LF.',
    'H2025 oppg. 14 (5 p): fordeler og ulemper med cellebaserte sensorer. Fullt LF.',
  ],
  buildsOn: ['23-immunelektroforese', '22-geldeteksjon-og-western-blot'],
  usedIn: ['28-spr-fet-aunp'],
  sources: [
    `[${DB}, p. 53–62] (kap. 5. p. = trykt sidetall; PDF-side = trykt side + 5)`,
    `[${BS}, p. 157–161] (p. = boksidetall; PDF-side = bokside − 156)`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 3a, 3b] / [${LF24}, oppg. 3a, 3b]`,
    `[${E25}, oppg. 14] / [${LF25}, oppg. 14]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilke to hovedkomponenter består en biosensor av?', a: `En bioreseptor (biologisk gjenkjenningselement) og en transduser (detektor) som omdanner gjenkjenningen til et målbart signal. De to er integrert i én enhet [${DB}, p. 54; ${BS}, p. 157].` },
    { id: 'p2', kind: 'pretest', q: 'Hvilken del av biosensoren er ansvarlig for selektiviteten?', a: `Bioreseptoren [${DB}, p. 55].` },
    { id: 'p3', kind: 'pretest', q: 'Har cellebaserte sensorer kortere eller lengre responstid enn enzymsensorer, og hvorfor?', a: `Lengre, på grunn av lang diffusjonsvei inn i cellen [${LF24}, oppg. 3b; ${LF25}, oppg. 14].` },
    { id: 't1', q: 'Nevn fire immobiliseringsmetoder for bioreseptoren.', a: `Membraninnkapsling, fysisk adsorpsjon, matriksinnkapsling og kovalent binding [${DB}, p. 55].` },
    { id: 't2', q: 'Hvilke tre elektrokjemiske transdusertyper finnes, og hva måler de?', a: `Amperometrisk (strøm fra redoks), potensiometrisk (potensial eller ionekonsentrasjon, f.eks. H⁺) og konduktometrisk (ledningsevne) [${DB}, p. 57; ${BS}, p. 158].` },
    { id: 't3', q: 'Hvorfor er en vevsbasert askorbinsyresensor billigere enn en sensor med isolert askorbinsyreoksidase?', a: `Enzymrikt plantevev (agurk) eliminerer behovet for dyre og mange rensetrinn [${DB}, p. 61].` },
    { id: 't4', q: 'Hva er forskjellen på direkte og sandwich-ELISA?', a: `I direkte ELISA adsorberes analytten på platen og bindes av enzymkonjugert Ast. I sandwich fanges analytten av et primært Ast på platen, bindes av et spesifikt Ast, og detekteres med et enzymkonjugert sekundært Ast mot Fc [${BS}, p. 159].` },
    { id: 't5', q: 'Hvordan virker probe-metoden i qPCR?', a: `Proben har fluorofor og quencher. Når den hybridiserer, kuttes den av Taq-polymerasens eksonukleaseaktivitet, fluoroforen skilles fra quencheren og fluorescerer, og signalet øker med produktet [${BS}, p. 160].` },
  ],
  equations: [
    {
      id: 'rx', label: 'Reaksjonsligningene sensorene bygger på',
      tex: String.raw`\begin{gathered}\text{Glukose} + \mathrm{O_2} \xrightarrow{\text{glukoseoksidase}} \text{glukonsyre} + \mathrm{H_2O_2} \\ \text{Etanol} + \mathrm{O_2} \xrightarrow{\textit{Acetobacter xylinum}} \text{eddiksyre} + \mathrm{H_2O} \\ 2\,\mathrm{NO_2^-} + \mathrm{O_2} \xrightarrow{\text{nitrittoksid. bakterier}} 2\,\mathrm{NO_3^-} \\ \text{L-askorbinsyre} + \mathrm{O_2} \xrightarrow{\text{askorbinsyreoksidase}} \text{dehydroaskorbat} + \mathrm{H_2O}\end{gathered}`,
      vars: [
        { sym: String.raw`\mathrm{O_2}`, desc: 'forbrukes. Måles med Clark O₂-elektrode (amperometrisk)', unit: String.raw`\mathrm{mol\,L^{-1}}` },
        { sym: String.raw`\mathrm{H_2O_2}`, desc: 'dannes. Måles med peroksidsensor (Pt-elektrode)', unit: String.raw`\mathrm{mol\,L^{-1}}` },
        { sym: String.raw`\text{glukonsyre / H}^+`, desc: 'dannes. Måles med pH-elektrode (potensiometrisk)', unit: '–' },
      ],
      note: 'Signalet er proporsjonalt med analyttkonsentrasjonen innenfor sensorens lineære område. Kursfilene gir ingen kalibreringsligninger.',
      cite: `[${DB}, p. 58–61]`,
      check: { status: 'verified', note: 'dokbio lign. (1), (3), (5), (6) på trykt p. 58–61 (PDF s. 63–66) identiske. Askorbinsyreoksidase er enzymet i agurkvev.' },
    },
  ],
}

const oppbygging = `flowchart LR
  A["Prøve<br/>analytt + forstyrrende stoffer"] --> B["Bioreseptor<br/>(bare analytten binder)"]
  B --> C["Transduser"]
  C --> D["Signalbehandling<br/>forsterker, mikroprosessor"]
  D --> E["Display"]`

/* Bioreceptor x transducer matrix */
function Matrise() {
  const rows = ['enzym', 'antistoff', 'nukleinsyre', 'celle', 'vev', 'organell/reseptor']
  const cols = ['amper.', 'potens.', 'kondukt.', 'optisk', 'piezo', 'kalori.']
  const marks = { '0-0': 'glukose', '0-1': 'penicillin', '3-0': 'etanol', '4-0': 'askorbin', '1-3': '', '0-2': 'urea' }
  return (
    <Svg w={460} h={260} label="Bioreseptor × transduser-matrise">
      {cols.map((c, j) => <Label key={c} x={150 + j * 50} y={22} size={10}>{c}</Label>)}
      {rows.map((r, i) => (
        <g key={r}>
          <Label x={118} y={52 + i * 34} anchor="end" size={11}>{r}</Label>
          {cols.map((_, j) => {
            const k = `${i}-${j}`
            const hit = k in marks
            return (
              <g key={k}>
                <rect x={128 + j * 50} y={36 + i * 34} width={44} height={28} style={{ fill: hit ? `color-mix(in srgb, ${tone('intuition')} 30%, var(--bg))` : 'none', stroke: tone('muted') }} />
                {hit && <Label x={150 + j * 50} y={54 + i * 34} size={9} t="intuition">{marks[k] || '✓'}</Label>}
              </g>
            )
          })}
        </g>
      ))}
    </Svg>
  )
}

/* Four immobilisation methods */
function Immobilisering() {
  const panel = (x, lab, kind) => (
    <g>
      <rect x={x} y={120} width={100} height={14} style={{ fill: tone('muted'), opacity: 0.6 }} />
      {kind === 'mem' && <><line x1={x} y1={90} x2={x + 100} y2={90} style={{ stroke: tone('var-c'), strokeWidth: 2, strokeDasharray: '4 3' }} />{[20, 50, 80].map((d) => <circle key={d} cx={x + d} cy={106} r={6} style={{ fill: tone('var-a') }} />)}</>}
      {kind === 'ads' && [20, 50, 80].map((d) => <circle key={d} cx={x + d} cy={113} r={6} style={{ fill: tone('var-a') }} />)}
      {kind === 'mat' && <><rect x={x + 5} y={80} width={90} height={38} rx={6} style={{ fill: tone('var-c'), opacity: 0.2 }} />{[20, 50, 80, 35, 65].map((d, i) => <circle key={d} cx={x + d} cy={92 + (i % 2) * 14} r={5} style={{ fill: tone('var-a') }} />)}</>}
      {kind === 'kov' && [20, 50, 80].map((d) => <g key={d}><line x1={x + d} y1={120} x2={x + d} y2={100} style={{ stroke: tone('ink'), strokeWidth: 2 }} /><circle cx={x + d} cy={95} r={6} style={{ fill: tone('var-a') }} /></g>)}
      <Label x={x + 50} y={156} size={10}>{lab}</Label>
    </g>
  )
  return (
    <Svg w={460} h={170} label="Fire immobiliseringsmetoder">
      {panel(5, 'membraninnkapsling', 'mem')}
      {panel(118, 'fysisk adsorpsjon', 'ads')}
      {panel(231, 'matriksinnkapsling', 'mat')}
      {panel(344, 'kovalent binding', 'kov')}
      <Label x={230} y={30} size={11}>bioreseptor (lilla) immobilisert nær transduseren (grå)</Label>
    </Svg>
  )
}

/* Clark glucose sensor */
function Clark() {
  const layer = (y, h, lab, t, op = 0.25) => <g><rect x={20} y={y} width={180} height={h} style={{ fill: tone(t), opacity: op, stroke: tone('ink') }} /><Label x={208} y={y + h / 2 + 4} anchor="start" size={10}>{lab}</Label></g>
  return (
    <Svg w={460} h={240} label="Clarks glukosesensor">
      <Label x={110} y={20} size={11}>prøve (glukose, O₂)</Label>
      <Arrow x1={110} y1={26} x2={110} y2={46} />
      {layer(50, 14, 'ytre membran', 'muted', 0.5)}
      {layer(64, 40, 'GOD: glukose + O₂ → glukons. + H₂O₂', 'var-a')}
      {layer(104, 14, 'indre membran (bare H₂O₂ / O₂)', 'muted', 0.5)}
      {layer(118, 40, 'Pt- eller O₂-elektrode', 'var-c', 0.35)}
      <Arrow x1={110} y1={158} x2={110} y2={190} t="trap" />
      <Box x={30} y={190} w={160} h={34} label="strøm → forsterker" t="ink" />
    </Svg>
  )
}

/* ELISA direct vs sandwich */
function ELISA() {
  const Y = (x, y, t, inv = false) => (
    <g transform={inv ? `rotate(180 ${x} ${y})` : undefined} style={{ stroke: tone(t), strokeWidth: 3, fill: 'none' }}>
      <line x1={x} y1={y} x2={x} y2={y - 16} />
      <line x1={x} y1={y - 16} x2={x - 9} y2={y - 28} />
      <line x1={x} y1={y - 16} x2={x + 9} y2={y - 28} />
    </g>
  )
  return (
    <Svg w={460} h={220} label="Direkte vs. sandwich-ELISA">
      <Label x={110} y={20} size={11}>(a) direkte</Label>
      <rect x={20} y={180} width={180} height={12} style={{ fill: tone('muted'), opacity: 0.6 }} />
      <rect x={100} y={166} width={20} height={14} rx={3} style={{ fill: tone('var-e') }} />
      {Y(110, 136, 'var-c', true)}
      <circle cx={110} cy={120} r={8} style={{ fill: tone('trap') }} />
      <Label x={130} y={124} anchor="start" size={9} t="trap">enzym</Label>
      <Label x={110} y={210} size={9}>analytt adsorbert på plate</Label>
      <Label x={345} y={20} size={11}>(b) sandwich</Label>
      <rect x={250} y={180} width={190} height={12} style={{ fill: tone('muted'), opacity: 0.6 }} />
      {Y(345, 180, 'var-a')}
      <rect x={335} y={136} width={20} height={14} rx={3} style={{ fill: tone('var-e') }} />
      {Y(345, 106, 'var-b', true)}
      {Y(345, 62, 'var-c', true)}
      <circle cx={345} cy={40} r={8} style={{ fill: tone('trap') }} />
      <Label x={360} y={180} anchor="start" size={9} t="var-a">fangst-Ast</Label>
      <Label x={360} y={100} anchor="start" size={9} t="var-b">deteksjons-Ast</Label>
      <Label x={360} y={58} anchor="start" size={9} t="var-c">enzymkonj. sek. Ast (Fc)</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="En biologisk nese på et måleinstrument">
        <MentalModel cite={`[${DB}, p. 54–55, 60; ${LF24}, oppg. 3b]`}>
          En biosensor er en «biologisk nese» koblet til et måleinstrument. <V c="a">Bioreseptoren</V> (enzym, antistoff, DNA, celle eller vev) gjenkjenner én bestemt analytt og står for selektiviteten. <V c="c">Transduseren</V> (elektrode, optikk, krystall eller termistor) gjør bindingen eller reaksjonen om til et elektrisk eller optisk signal. Det særegne er at de to er bygd sammen. Bioreseptoren er immobilisert tett på transduseren, så man måler direkte i prøven uten reagenser og rensetrinn. Det gjør biosensorer enkle og raske.{' '}
          Valget av bioreseptor er en avveining mellom spesifisitet og robusthet. <strong>Isolerte enzymer</strong> er spesifikke og raske, men dyre (rensetrinn) og ustabile utenfor cellen, og trenger ofte kofaktorer. <strong>Hele celler</strong> er billige og robuste, fordi enzymene sitter i sitt naturlige miljø. De reagerer tregere (diffusjon) og er mindre spesifikke, fordi cellen har mange enzymer («multireseptor»).
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Biosensor" cite={`[${DB}, p. 53–54; ${BS}, p. 157]`}>Enhet der et biologisk gjenkjenningselement er tett bundet til eller integrert med transduseren. Den bruker en biologisk eller biokjemisk komponent til å påvise kvantitative og kvalitative verdier. Måler ønsket analytt uten reagenser, i motsetning til tradisjonelle assays med mange trinn. Hovedfordelene er at de er enkle og raske. Biologiske reaksjoner omdannes f.eks. til elektrisk strøm. Moderne mål: høy sensitivitet, høy selektivitet, rask respons og lav deteksjonsgrense.</Def>
        <Mermaid title="Biosensorens oppbygging" cite={`[${DB}, p. 53, fig. 5-1; ${BS}, p. 158, fig. 4.2.1]`} chart={oppbygging} />
        <Def term="Bruksområder" cite={`[${DB}, p. 53]`}>Medisin, industriell mikrobiologi, miljøovervåking og militært. Eksempler er glukose, eddiksyre, glutaminsyre, etanol, BOD, komponenter i øl, smaksstoffer i mat og biofilm. Immunokjemiske sensorer detekterer patogener, herbicider, toksiner, proteiner og DNA. Over 60 sensorer finnes for ca. 120 analyser.</Def>
        <Def term="Historikk" cite={`[${DB}, p. 54; ${BS}, p. 158]`}>Startet i 1962 med Leland C. Clarks enzymelektrode (glukose). Clark og Lyons fanget et tynt lag glukoseoksidase (GOD) bak en glukosepermeabel membran på en oksygenelektrode og målte O₂-forbruket.</Def>
        <Def term="Konstruksjon, trinn" cite={`[${DB}, p. 54]`}>Først bestemmes analytten, deretter: (1) passende bioreseptor, (2) immobiliseringsmetode, (3) transduser, (4) måleområde, linearitet og minimering av forstyrrelser, (5) pakking. En kommersiell sensor må i tillegg møte generelle krav.</Def>
        <Columns>
          <Def term="Bioreseptor (biologisk materiale)" cite={`[${DB}, p. 55; ${BS}, p. 157]`}>Biomolekyl som gjenkjenner målanalytten, binder den, og så skjer en biokjemisk reaksjon. <strong>Ansvarlig for sensorens selektivitet.</strong> Enzymer er mest brukt. Andre er vev, mikroorganismer, organeller, cellereseptorer, antistoffer, nukleinsyrer og genmanipulerte mikroorganismer. Enzymer, antistoffer og DNA gjenkjenner selektivt og immobiliseres på sensorsubstratet.</Def>
          <Diagram title="Bioreseptor × transduser-matrise" caption="Merket: kjente kombinasjoner fra kursfilene (glukose–GOD–amperometrisk, penicillin–pH, urea–konduktometrisk/pH, etanol–Acetobacter–O₂, askorbinsyre–agurkvev–amperometrisk)." cite={`[${DB}, p. 55, fig. 5-2; p. 57, tabell 5-1]`}><Matrise /></Diagram>
        </Columns>
        <Columns>
          <Def term="Immobilisering" cite={`[${DB}, p. 55–56]`}>Hovedkrav er at bioreseptoren immobiliseres i nærheten av transduseren. Metodene er <strong>membraninnkapsling, fysisk adsorpsjon, matriksinnkapsling og kovalent binding</strong>. Bare små mengder trengs, og de kan brukes gjentatte ganger.</Def>
          <Diagram title="Fire immobiliseringsmetoder" cite={`[${DB}, p. 56, fig. 5-3]`}><Immobilisering /></Diagram>
        </Columns>
        <Def term="Transduser (detektor)" cite={`[${DB}, p. 56]`}>Omdanner den biokjemiske reaksjonen til et målbart elektrisk signal, f.eks. ved å måle endringer under reaksjonen. Signalet kan behandles videre (mikroprosessor, forsterker). De første biosensorene brukte pH-, O₂- og ioneselektive elektroder.</Def>
        <Diagram title="Vanlige transdusere (tabell 5-1)" caption="Kap 4.2 oppsummerer elektrokjemisk transduksjon som endring i strøm (amperometrisk), potensial (potensiometrisk) eller ledningsevne (konduktometrisk) [Biosensorer kap 4.2, p. 158]." cite={`[${DB}, p. 57]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td><strong>Transduser</strong></td><td><strong>Eksempler</strong></td><td><strong>Prinsipp</strong></td></tr>
              <tr><td>Elektrokjemisk: amperometrisk</td><td>Clark O₂-elektrode, medierte elektrodesystemer</td><td>Måler strømmen fra elektroner frigjort i redoksreaksjoner</td></tr>
              <tr><td>Elektrokjemisk: potensiometrisk</td><td>Redokselektroder, ioneselektive elektroder, FET, lysadresserte potensiometriske sensorer</td><td>Detekterer endringer i konsentrasjonen av valgte ioner (f.eks. H⁺)</td></tr>
              <tr><td>Elektrokjemisk: konduktometrisk</td><td>Pt- eller Au-elektroder</td><td>Måler endringer i løsningens ledningsevne fra iongenerering</td></tr>
              <tr><td>Optisk</td><td>Fotodioder, bølgelengdesystemer, integrerte optiske sensorer</td><td>Konsentrasjon via absorpsjon, kjemiluminescens, fluorescens osv.</td></tr>
              <tr><td>Akustisk/(optisk)</td><td>Piezoelektriske krystaller, overflateakustiske enheter</td><td>Piezoelektrisitet: krystaller (f.eks. kvarts) under mekanisk trykk</td></tr>
              <tr><td>Kalorimetrisk</td><td>Termistor (termofil sjelden)</td><td>Entalpiendring i enzymreaksjon som temperaturendring. Resistansen avtar når temperaturen øker</td></tr>
            </tbody>
          </table>
        </Diagram>

        <Columns>
          <Def term="Enzymsensorer" cite={`[${DB}, p. 58–60; ${BS}, p. 158]`}>Isolerte enzymer immobiliseres nær elektroden, og ved gjenkjenning dannes ES-kompleks på sensoroverflaten. <strong>De fleste er elektrokjemiske.</strong> <strong>Glukosesensor</strong> (mest kjent, glukose i blod): glukoseoksidase immobiliseres via dialysemembran. Glukose + O₂ → glukonsyre + H₂O₂. Tre mulige transdusere: O₂-sensor (O₂-forbruk), pH-sensor (glukonsyre) eller peroksidsensor (H₂O₂ på Pt-elektrode). Responstid ca. 1 min med O₂-elektrode. Membransystemet ekskluderer forstyrrende forbindelser. <strong>Penicillinsensor</strong>: penicillinase i polyakrylamidgel på pH-elektrode. Måler [H⁺] fra penicillinsyre. Respons 15–30 s. Brukes i fermenteringsløsninger. <strong>Ureasensor</strong>: urease hydrolyserer urea til ammonium, på pH- eller NH₃-elektrode eller konduktometer. Klinisk viktig (nyresvikt, kunstige nyrer). <strong>Kolesterolsensor</strong>: kolesterolesterase gir kolesterol + fettsyrer, og kolesteroloksidase (på nylonmembran, O₂-sensor) gir H₂O₂. Normalt serum er 3,1–6,7 mmol/L.</Def>
          <Diagram title="Clarks glukosesensor" cite={`[${BS}, p. 159, fig. 4.2.2; ${DB}, p. 59, fig. 5-5]`}><Clark /></Diagram>
        </Columns>
        <Def term="Cellebaserte sensorer: mikrobielle" cite={`[${DB}, p. 60–61]`}>Celler immobiliseres på elektroden med membran (amperometrisk eller potensiometrisk). <strong>Fordeler fremfor enzymsensorer</strong>: billigere produksjon, høyere katalytisk aktivitet, økt stabilitet og lengre levetid (kan regenereres i vekstmedium). <strong>Ulemper</strong>: dårligere selektivitet (mange enzymer gir <em>multireseptor-oppførsel</em>) og lengre gjenvinningstid mellom analyser (mange celler gir diffusjonsproblemer). Det er ikke et problem for engangssensorer. Bruk: medisinsk diagnostikk (intensiv, ved sengen), miljø (vannforurensning, kloakk), matkvalitet, prosesskontroll i kjemisk og farmasøytisk industri, og legemiddeldeteksjon. <strong>Etanolsensor (1975, første cellebaserte)</strong>: <em>Acetobacter xylinum</em> (etanol + O₂ → eddiksyre + H₂O) bak gasspermeabel membran på O₂-elektrode. O₂-forbruket ∝ [etanol]. <strong>NO₂-sensor</strong>: nitrittoksiderende bakterier mellom teflonmembraner på O₂-elektrode (2NO₂⁻ + O₂ → 2NO₃⁻). Økende aktivitet opp til 30 °C, avtakende over.</Def>
        <Diagram title="Cellebasert vs. enzymsensor" cite={`[${DB}, p. 60; ${LF24}, oppg. 3b; ${LF25}, oppg. 14]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td></td><td><strong>Cellebasert</strong></td><td><strong>Enzymsensor</strong></td></tr>
              <tr><td>Kostnad</td><td>billig</td><td>dyrere (isolering)</td></tr>
              <tr><td>Stabilitet / levetid</td><td>stabil, lang levetid</td><td>kan være ustabil (tatt ut av naturlig miljø)</td></tr>
              <tr><td>Responstid</td><td>lang (diffusjon)</td><td>kort</td></tr>
              <tr><td>Spesifisitet</td><td>lavere (multireseptor)</td><td>høy</td></tr>
              <tr><td>Kofaktorbehov</td><td>har egne kofaktorer</td><td>krever ofte kofaktorer</td></tr>
              <tr><td>Signal</td><td>reportergen</td><td>—</td></tr>
            </tbody>
          </table>
        </Diagram>
        <Def term="Vevsbaserte sensorer" cite={`[${DB}, p. 61]`}>Plante- eller dyrevev med flere enzymer, det nyeste tilskuddet. Eksempel: L-askorbinsyre med agurkvev (askorbinsyreoksidase) på amperometrisk sensor. Sammenlignbar med HPLC, 60 analyser uten endring, og ingen dyre rensetrinn.</Def>
        <Def term="Immunosensorer" cite={`[${DB}, p. 61–62]`}>Antistoff eller antigen immobiliseres som bioreseptor, og Ag eller Ast er analytt. Binding gir Ag-Ast immunkompleks. Utmerkede deteksjonsgrenser med små prøvevolum (elektrokjemiske). Aktuelt for pesticider i felt, som alternativ til HPLC, GC, MS og TLC. <strong>Merket</strong>: enzym, radioisotop, fluorescens eller kjemiluminescens på Ag* (eller Ast*). Med enzymmerking kombineres sensoren med ELISA-prinsippet. <strong>Umerket</strong>: dannelsen av immunkomplekset på transduserflaten detekteres direkte som fysisk (elektrisk eller optisk) endring. Rask og lite reagens. (SPR er et eksempel, se side 28.) Høy følsomhet, «ettersom antistoffer er mer stabile enn enzymer».</Def>
        <Def term="Reportergen" cite={`[${LF24}, oppg. 3b; ${LF25}, oppg. 14]`}>I moderne cellebaserte biosensorer settes det gjerne inn et reportergen, slik at cellene produserer «synlige signaler».</Def>
        <Columns>
          <Def term="ELISA (enzyme-linked immunosorbent assay)" cite={`[${BS}, p. 159]`}>Gullstandarden for proteinmengde (Perlmann og Schuurs, 1971). Kompleks mellom analytt og enzymkonjugert antistoff, og enzymreaksjonen gir signal. Typisk peroksidase med fargesubstrat (ABTS, TMB). <strong>Direkte ELISA</strong>: analytten adsorberes fysisk på mikroplaten og bindes av enzymkonjugert Ast. Ulempe: uspesifikk adsorpsjon, hemmet av serumproteiner (albumin, fibrinogen). <strong>Sandwich-ELISA</strong>: primært Ast på platen fanger analytten, et spesifikt Ast gir Ast–analytt–Ast-sandwich, og et enzymkonjugert sekundært Ast binder Fc-regionen. Dyrere og mer komplisert, men nyttig for proteiner i lave mengder.</Def>
          <Diagram title="Direkte vs. sandwich-ELISA" cite={`[${BS}, p. 160, fig. 4.2.3]`}><ELISA /></Diagram>
        </Columns>
        <Def term="qPCR" cite={`[${BS}, p. 160]`}>Interkalator (SYBR Green) gir fluorescens ∝ dsDNA-produkt, og kvantifisering skjer med standardkurve. Probe-metode: fluorofor og quencher på hver ende. Ved hybridisering kutter Taq-polymerasen (3′→5′-eksonukleaseaktivitet) proben, og fluoroforen frigjøres og lyser. Høy spesifisitet.</Def>
        <Def term="DNA-mikromatrise" cite={`[${BS}, p. 160–161]`}>Kjente DNA-fragmenter tett på glass. Hybridisering med Cy3/Cy5-merket cDNA (fra mRNA ved revers transkripsjon), skanning, og identifisering av opp- og nedregulerte gener. Ulemper: dårlig korrelasjon med qPCR og krever mye prøve (forbedret med RNA-amplifisering). Kompliserte og kostbare protokoller.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="rx" />
        <p className="muted">Ingen interaktiv graf: kursfilene har ingen kalibreringsdata eller kurveverdier for biosensorene.</p>
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 3(a) i–iii: flervalg om biosensorer (del av 6 p)"
          steps={[
            { title: 'i) Hvilken type biosensor bruker enzymer som bioreseptorer?', body: `De fleste enzymbaserte biosensorer er elektrokjemiske [${DB}, p. 58]. → **Elektrokjemiske biosensorer** (fasit).` },
            { title: 'ii) Hva er en bioreseptor?', body: 'Et biomolekyl som gjenkjenner målanalytten [p. 54]. → **En komponent som binder til en spesifikk analytt** (fasit). Distraktoren «omdanner biologisk signal til elektrisk signal» beskriver transduseren.' },
            { title: 'iii) Hovedfunksjonen til transduseren?', body: 'Transduseren oversetter gjenkjenningsreaksjonen til et målbart signal [p. 54, 56]. → **Å omdanne det biologiske signalet til et målbart signal** (fasit).' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 3a; ${LF24}, oppg. 3a]`}
        />
        <Example
          title="H24 oppg. 3(b): fyll inn (4 p, feil gir minuspoeng)"
          steps={[
            { body: '«Cellebaserte biosensorer har **lengre** responstid enn f.eks. en enzymsensor, og de vil være **mindre** spesifikke pga. **lang** diffusjonsvei for analytten.»' },
            { body: '«I moderne cellebaserte biosensorer settes det gjerne inn et **reportergen** for at cellene skal kunne produsere synlige signaler.»' },
            { body: '«Enzymsensorer vil være **dyrere** enn cellebaserte pga. isoleringstrinn. Ulempe med enzymsensorer er at enzymer kan være **ustabile** fordi de er **tatt ut av sitt naturlige miljø**, og at mange enzymer krever **kofaktorer** som også blir involvert i prosessen.»' },
            { title: 'Ubrukte ord (feller):', body: 'kortere, kort, billig, stabil, protein, «er i sitt naturlige miljø».' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 3b; ${LF24}, oppg. 3b]`}
        />
        <FadedExample
          title="H25 oppg. 14: fordeler og ulemper med cellebaserte sensorer vs. enzymbaserte (5 p)"
          steps={[
            { title: 'Fordel 1, kostnad:', body: 'billige, fordi celler er lettere å isolere enn individuelle cellekomponenter.' },
            { title: 'Fordel 2, robusthet og levetid?', body: `Enzymene og elementene er beskyttet i sitt naturlige miljø i cellen. De tåler større endringer i miljøfaktorer, og det gir lengre levetid. Cellene kan også regenereres i vekstmedium [${DB}, p. 60].`, hidden: true },
            { title: 'Fordel 3, aktivitet?', body: `Høyere katalytisk aktivitet og økt stabilitet [${DB}, p. 60].`, hidden: true },
            { title: 'Ulempe 1, tid?', body: 'Økt responstid på grunn av lang diffusjonsvei inn i cellen, og lengre gjenvinningstid mellom analyser.', hidden: true },
            { title: 'Ulempe 2, spesifisitet?', body: 'Dårligere. Cellen har mange enzymer, som gir multireseptor-oppførsel.', hidden: true },
            { title: 'Hvordan får man et målbart signal fra cellen?', body: 'Reportergen i genmanipulerte celler.', hidden: true },
          ]}
          cite={`[${E25}, oppg. 14; ${LF25}, oppg. 14]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Bioreseptor vs. transduser" cite={`[${DB}, p. 54–55; ${LF24}, oppg. 3a]`}>Bioreseptoren <em>binder</em> analytten og gir selektiviteten. Transduseren <em>omdanner</em> til målbart signal. H24 3a bruker nettopp disse som distraktorer for hverandre.</Trap>
        <Trap title="Enzymsensor = elektrokjemisk" cite={`[${DB}, p. 58]`}>Oftest, ikke «termisk» eller «immunosensor».</Trap>
        <Trap title="Cellebasert er billigere, men tregere og mindre spesifikk" cite={`[${LF24}, oppg. 3b]`}>Bytter du om på dyrere og billigere i 3(b), gir det minuspoeng.</Trap>
        <Trap title="Enzymer er ustabile fordi de er tatt ut av sitt naturlige miljø" cite={`[${LF24}, oppg. 3b]`}>Ikke fordi de «er i» det (distraktor i 3b).</Trap>
        <Trap title="Kofaktorer" cite={`[${LF24}, oppg. 3b]`}>Er en ulempe for <em>enzymsensorer</em>. Celler har sine egne.</Trap>
        <Trap title="Glukosesensoren kan lese tre ting" cite={`[${DB}, p. 58]`}>O₂-forbruk, syre (pH) eller H₂O₂. Ikke bare én.</Trap>
        <Trap title="Merket vs. umerket immunosensor" cite={`[${DB}, p. 62]`}>Merket bruker enzym, fluorescens eller radioisotop (ELISA-prinsipp). Umerket måler fysisk endring direkte (f.eks. SPR).</Trap>
        <Trap title="Direkte vs. sandwich-ELISA" cite={`[${BS}, p. 159]`}>Direkte har problemer med uspesifikk adsorpsjon. Sandwich er dyrere, men egnet for lave proteinmengder.</Trap>
      </Section>
    </>
  )
}
