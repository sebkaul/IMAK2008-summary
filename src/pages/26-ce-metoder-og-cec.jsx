import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Block, Diagram, Svg, Arrow, Label, Columns, V, tone } from '../components'

const K2 = 'Kapillærelektroforese del 2 m notater.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const U = '**[UTLEDET — ingen fasit i LF]** '

export const meta = {
  title: 'CE-varianter (CZE, CGE, cIEF, cITP, MEKC, gelfri sikting) og elektrokromatografi (CEC)',
  topic: 'ce',
  examWeight: { level: 'medium', note: 'H25 oppg. 13 (3 p, fire flervalg om CEC). H25 oppg. 9: linjene «Bruk av amfolytter», «EOF viktig» og «platehøyder < 1 µm» skiller CE og (c)IEF. Ikke spurt på H24' },
  examTasks: [
    'H2025: oppg. 9 (kombiner utsagn og metode) (index: side 20–21, 23–24, 26)',
    'H2025: oppg. 13 (CEC) (index: side 26) — automatisk rettet uten fasit, svarene er utledet',
    'H2025 oppg. 13 (3 p, automatisk rettet, ingen fasit): CEC = CE + HPLC, kolonnetyper, EOF og flat profil, og separasjonsmekanisme for nøytrale og ioner [UTLEDET].',
    'H2025 oppg. 9 (del av 5 p, automatisk rettet): «Bruk av amfolytter i metoden» → IEF. «EOF viktig for separasjon» og «platehøyder < 1 µm» → CE. Se sidene 21 og 24 [UTLEDET].',
    'Ikke spurt på H2024.',
  ],
  buildsOn: ['24-ce-mobilitet-og-eof', '25-ce-injeksjon-og-deteksjon', '21-ief-og-2d', '08-omvendt-fase-og-ionepar'],
  usedIn: [],
  sources: [
    `[${K2}, slide 15, 20–37]`,
    `[${B2}, p. 140–147] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[${E25}, oppg. 9, 13] / [${LF25}, oppg. 13]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hva er CEC en kombinasjon av?', a: `HPLC og CE. Den har selektiviteten og toppkapasiteten til HPLC og effektiviteten og oppløsningen til CE [${K2}, slide 33].` },
    { id: 'p2', kind: 'pretest', q: 'I hvilke CE-varianter er EOF **uønsket**?', a: `I kapillær-IEF (cIEF) og kapillærisotakoforese (cITP) [${K2}, slide 25, 32; ${B2}, p. 142–143].` },
    { id: 'p3', kind: 'pretest', q: 'Hvordan kan nøytrale forbindelser separeres med CE-utstyr?', a: `Med en fordelingsmekanisme: mellom stasjonær og mobil fase i CEC, eller mellom miceller og elektrolytt i MEKC [slide 33; ${B2}, p. 144].` },
    { id: 't1', q: 'Nevn tre forskjeller mellom CEC og HPLC.', a: `CEC drives av spenning (10–30 kV) i stedet for pumpe, flyten er EOF med flat profil og uten trykkfall i stedet for parabolsk, og CEC gir høyere effektivitet og kan bruke mindre partikler. Ladde analytter separeres i tillegg etter elektroforetisk mobilitet [${K2}, slide 33; ${B2}, p. 145–146].` },
    { id: 't2', q: 'Hvorfor har gelfri sikting i stor grad erstattet CGE?', a: `Gelkapillærer er vanskelige å holde fuktige og har kort levetid. Gelfri sikting har lang levetid, tillater begge injeksjonsmetoder og UV ved lav bølgelengde [${K2}, slide 24; ${B2}, p. 142–143].` },
    { id: 't3', q: 'Hva er en pseudostasjonær fase i MEKC?', a: `Ladde miceller (surfaktant over cmc) som analyttene fordeler seg til. De oppfører seg som en stasjonær fase, men beveger seg selv i feltet [${B2}, p. 144].` },
    { id: 't4', q: 'Hvordan identifiseres og kvantifiseres ioner i cITP?', a: `Identitet fra feltstyrken i båndet, mengde fra båndets lengde [${K2}, slide 32].` },
    { id: 't5', q: 'Hvorfor må kolonnematerialet i CEC ha ladde overflategrupper?', a: `Uten ladde grupper (f.eks. silanoler) dannes ingen EOF, og da er det ingenting som driver mobilfasen gjennom kolonnen [${B2}, p. 145, 147].` },
  ],
  equations: [
    {
      id: 'cze', label: 'CZE: platetall og migrasjonshastighet',
      tex: String.raw`\begin{gathered}N = \frac{(\mu_e + \mu_{eo})\,L_D\,V}{2DL} \\ u = u_e + u_{eo} = \frac{(\mu_e + \mu_{eo})\,V}{L}\end{gathered}`,
      vars: [],
      note: 'Se side 24 for symboler. Gjelder CZE.',
      cite: `[${K2}, slide 23; ${B2}, p. 140–141]`,
      check: { status: 'verified', note: 'Bok lign. 6.6 og 6.7 (PDF s. 56–57), som side 24.' },
    },
    {
      id: 'mekc', label: 'MEKC: retensjonsfaktor for nøytral analytt',
      tex: String.raw`\va{k} = \frac{\vb{t_R} - \vc{t_0}}{\vc{t_0}\left(1 - \vc{t_0}/\vd{t_{mc}}\right)}`,
      vars: [
        { sym: String.raw`\va{k}`, desc: 'retensjonsfaktor', unit: '–' },
        { sym: String.raw`\vb{t_R}`, desc: 'analyttens migrasjonstid', unit: String.raw`\mathrm{s}` },
        { sym: String.raw`\vc{t_0}`, desc: 'migrasjonstid for polar nøytral (går med EOF)', unit: String.raw`\mathrm{s}` },
        { sym: String.raw`\vd{t_{mc}}`, desc: 'migrasjonstid for micellen (hydrofob nøytral)', unit: String.raw`\mathrm{s}` },
      ],
      note: 'Gjelder nøytrale analytter med $t_0 < t_R < t_{mc}$.',
      cite: `[${B2}, p. 144]`,
      check: { status: 'verified', note: 'Bok p. 144 (PDF s. 60) identisk som trykt — se avviksmerknaden om nevneren.' },
    },
  ],
}

const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>

/* cIEF three steps */
function CIEF() {
  return (
    <Svg w={460} h={300} label="cIEF i tre trinn">
      <Label x={10} y={20} anchor="start" size={12}>(1) applikasjon: prøve + amfolytt + pI-markør (trykk)</Label>
      <rect x={20} y={30} width={420} height={22} style={{ fill: tone('muted'), opacity: 0.3, stroke: tone('ink') }} />
      {Array.from({ length: 30 }, (_, i) => <circle key={i} cx={30 + ((i * 37) % 400)} cy={41} r={3} style={{ fill: tone(['var-a', 'var-b', 'var-c'][i % 3]) }} />)}
      <Label x={10} y={88} anchor="start" size={12}>(2) fokusering</Label>
      <defs>
        <linearGradient id="ph26" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--c-trap)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--c-definition)" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect x={20} y={98} width={420} height={22} style={{ fill: 'url(#ph26)', stroke: tone('ink') }} />
      {[[120, 'var-c', 'pI₃'], [230, 'var-b', 'pI₂'], [340, 'var-a', 'pI₁']].map(([x, t, l]) => <g key={l}><rect x={x - 3} y={98} width={6} height={22} style={{ fill: tone(t) }} /><Label x={x} y={136} size={10}>{l}</Label></g>)}
      <Label x={20} y={152} anchor="start" size={10} t="trap">anode + : H₃PO₄ (pH 3)</Label>
      <Label x={440} y={152} anchor="end" size={10} t="definition">katode − : NaOH (pH 10)</Label>
      <Label x={10} y={186} anchor="start" size={12}>(3) mobilisering</Label>
      <line x1={40} y1={280} x2={430} y2={280} style={{ stroke: tone('ink') }} />
      <line x1={40} y1={280} x2={40} y2={200} style={{ stroke: tone('ink') }} />
      <polyline points="40,205 80,215 120,240 180,262 250,268 300,268" style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2.5 }} />
      <Arrow x1={300} y1={240} x2={300} y2={265} t="trap" head={6} />
      <Label x={296} y={226} anchor="end" size={10} t="trap">mobilisering (katodebuffer → lavere pH)</Label>
      <Label x={46} y={200} anchor="start" size={10}>strøm</Label>
      <Label x={430} y={296} anchor="end" size={10}>tid</Label>
    </Svg>
  )
}

/* cITP zone train */
function CITP() {
  const z = (x, w, lab, t) => <g><rect x={x} y={60} width={w} height={40} style={{ fill: tone(t), opacity: 0.4, stroke: tone('ink') }} /><Label x={x + w / 2} y={85} size={11}>{lab}</Label></g>
  return (
    <Svg w={460} h={150} label="cITP-sonetog">
      <Label x={20} y={30} anchor="start" size={11}>−</Label>
      <Label x={440} y={30} anchor="end" size={11}>+</Label>
      {z(20, 90, 'trailing', 'muted')}{z(110, 50, 'C', 'var-e')}{z(160, 80, 'B', 'var-c')}{z(240, 40, 'A', 'var-a')}{z(280, 160, 'leading', 'definition')}
      <Arrow x1={200} y1={125} x2={340} y2={125} t="ink" />
      <Label x={230} y={145} size={10}>skarpe, tilstøtende soner · båndlengde ∝ mengde</Label>
    </Svg>
  )
}

/* MEKC window */
function MEKC() {
  return (
    <Svg w={460} h={240} label="MEKC-migrasjonsvindu">
      <Label x={20} y={30} anchor="start" size={11} t="var-c">EOF</Label>
      <Arrow x1={130} y1={26} x2={330} y2={26} t="var-c" />
      <Label x={20} y={60} anchor="start" size={11} t="var-e">micellens egen</Label>
      <Arrow x1={330} y1={56} x2={240} y2={56} t="var-e" />
      <Label x={20} y={90} anchor="start" size={11}>netto micelle</Label>
      <Arrow x1={130} y1={86} x2={240} y2={86} t="ink" />
      <circle cx={380} cy={70} r={22} style={{ fill: 'none', stroke: tone('var-d'), strokeWidth: 2 }} />
      <circle cx={380} cy={70} r={5} style={{ fill: tone('var-b') }} />
      <circle cx={420} cy={95} r={4} style={{ fill: tone('var-b') }} />
      <Label x={380} y={110} size={9}>nøytral fordelt</Label>
      <line x1={30} y1={190} x2={440} y2={190} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={120} y1={180} x2={120} y2={200} style={{ stroke: tone('var-c'), strokeWidth: 3 }} />
      <line x1={360} y1={180} x2={360} y2={200} style={{ stroke: tone('var-d'), strokeWidth: 3 }} />
      <rect x={120} y={172} width={240} height={36} style={{ fill: tone('intuition'), opacity: 0.12 }} />
      <Label x={120} y={222} size={11} t="var-c">t₀ (EOF, polar)</Label>
      <Label x={360} y={222} size={11} t="var-d">t_mc (micelle, hydrofob)</Label>
      <Label x={240} y={166} size={10} t="intuition">migrasjonsvindu</Label>
    </Svg>
  )
}

/* CEC columns */
function CEC() {
  const tube = (cx, lab, kind) => (
    <g>
      <circle cx={cx} cy={150} r={50} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeWidth: 3 }} />
      {kind === 'ot' && <circle cx={cx} cy={150} r={45} style={{ fill: 'none', stroke: tone('var-c'), strokeWidth: 5 }} />}
      {kind === 'p' && Array.from({ length: 19 }, (_, i) => { const a = i * 2.4, r = 6 + (i * 13) % 36; return <circle key={i} cx={cx + r * Math.cos(a)} cy={150 + r * Math.sin(a)} r={7} style={{ fill: tone('muted') }} /> })}
      {kind === 'm' && Array.from({ length: 9 }, (_, i) => <path key={i} d={`M ${cx - 40 + i * 10} ${120 + (i % 3) * 8} q 10 20 0 40 q -8 10 4 20`} style={{ fill: 'none', stroke: tone('var-c'), strokeWidth: 3 }} />)}
      <Label x={cx} y={222} size={11}>{lab}</Label>
    </g>
  )
  return (
    <Svg w={460} h={240} label="CEC-kolonnetyper">
      <Arrow x1={140} y1={40} x2={320} y2={40} t="var-c" />
      <Label x={230} y={30} size={11} t="var-c">+ → EOF → − (10–30 kV, flat profil)</Label>
      {tube(80, '(a) åpent rør', 'ot')}{tube(230, '(b) pakket', 'p')}{tube(380, '(c) monolitt', 'm')}
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Samme utstyr, nytt innhold i kapillæret">
        <MentalModel cite={`[${K2}, slide 20, 22, 33; ${B2}, p. 145]`}>
          Alle variantene bruker samme utstyr (kapillær, høyspenning, detektor), men skifter ut innholdet i kapillæret for å endre <em>hva</em> som separerer. <strong>Ren buffer (CZE)</strong>: ladning/størrelse. <strong>Sikt (CGE eller gelfri polymer)</strong>: størrelse. <strong>pH-gradient fra amfolytter (cIEF)</strong>: pI. <strong>Ledende og terminerende elektrolytt (cITP)</strong>: mobilitet i ett «tog» av soner. <strong>Miceller (MEKC)</strong>: en bevegelig pseudostasjonær fase, slik at også nøytrale fordeler seg og separeres.{' '}
          CEC går lengst. Kapillæret pakkes med en ekte stasjonær fase, og pumpen i HPLC byttes med spenning, så <V c="c">EOF</V> driver mobilfasen. Da får man kromatografiens selektivitet (nøytrale separeres etter fordeling) med EOF-ens flate profil og høye effektivitet. Ladde stoffer separeres av både mobilitet og fordeling. Tommelregel for EOF: variantene som bygger på en <em>stabil sone</em> (fokusering i cIEF, likevektssoner i cITP) vil ikke ha EOF. Variantene som må <em>transportere</em> alt forbi detektoren (CZE, MEKC, CEC) trenger den.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Viktige metoder innen CE" cite={`[${K2}, slide 20]`}>Soneelektroforese (CZE), gelelektroforese (CGE), isoelektrisk fokusering (cIEF), isotakoforese (CITP), elektrokromatografi (CEC), micellær elektrokinetisk kapillærkromatografi (MEKC/MECC) og gelfri separasjon («gel-free sieving»).</Def>
        <Diagram title="Variantoversikt" cite={`[${K2}, slide 20–35; ${B2}, p. 140–146]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td></td><td><strong>Kapillærinnhold</strong></td><td><strong>Separerer etter</strong></td><td><strong>EOF</strong></td><td><strong>Injeksjon</strong></td><td><strong>Typisk bruk</strong></td></tr>
              <tr><td>CZE</td><td>buffer (0,01–0,1 M fosfat)</td><td>ladning/størrelse (µ_e)</td><td>med eller uten</td><td>begge</td><td>små molekyler, peptider, proteiner, enantiomerer</td></tr>
              <tr><td>CGE</td><td>gel</td><td>størrelse</td><td>–</td><td>kun elektrokinetisk</td><td>DNA, proteiner</td></tr>
              <tr><td>Gelfri</td><td>lineær hydrofil polymer (PEG)</td><td>størrelse</td><td>–</td><td>begge</td><td>DNA-sekvensering</td></tr>
              <tr><td>cIEF</td><td>amfolytter, pH-gradient</td><td>pI</td><td>uønsket</td><td>trykk (fylling)</td><td>proteiner</td></tr>
              <tr><td>cITP</td><td>ledende + terminerende elektrolytt</td><td>mobilitet</td><td>uønsket</td><td>mellom elektrolyttene</td><td>mest injeksjonsteknikk</td></tr>
              <tr><td>MEKC</td><td>surfaktant &gt; cmc</td><td>fordeling til micelle + µ_e</td><td>nødvendig</td><td>–</td><td>nøytrale + ioner</td></tr>
              <tr><td>CEC</td><td>stasjonærfase (pakket, monolitt, åpent rør)</td><td>fordeling + µ_e</td><td>nødvendig (driver flow)</td><td>elektrokinetisk</td><td>nøytrale + ladde</td></tr>
            </tbody>
          </table>
        </Diagram>

        <Def term="Kapillær soneelektroforese (CZE)" cite={`[${K2}, slide 21–23; ${B2}, p. 140–141]`}>Enkleste og mest kjente form for CE og den mest brukte teknikken. Separasjon etter forskjell i ladning og størrelse, dvs. ulik elektroforetisk mobilitet. Analyttene separeres i soner/bånd (notat). Kan utføres med eller uten EOF. Er µ_eo &gt; |µ_e| for alle anioner, vandrer alle anioner og kationer i samme retning. Standard CE-utstyr og en enkel bufferløsning uten tilsetningsstoffer. Elektrolytten er 0,01–0,1 M, oftest fosfatbuffer, og bør ha høyere konsentrasjon enn prøven for å unngå lokale potensialgradienter (ujevn migrasjon og asymmetriske soner). Bruksområder: små molekyler, peptider, proteiner (f.eks. monoklonale antistoffer), nukleinsyrer og enantiomerseparasjon. Enantiomerseparasjon får man ved å tilsette en kompleksdanner, f.eks. cyklodekstrin. CE-metoder er med i European Pharmacopoeia. cLOD/cLOQ: se side 25.</Def>
        <Avvik>cLOD CE vs. LC: håndskrevet notat på slide 21 sier «cLOD og cLOQ er høyere i LC enn i CE pga kortere optisk bane og små injeksjonsvolum». Boka (p. 141, Info-box 6.8) sier det motsatte: de er høyere i CE enn i LC. Begrunnelsen (kort veilengde, små volum) passer bare med bokas versjon.</Avvik>
        <Def term="Kapillær gelelektroforese (CGE)" cite={`[${K2}, slide 24; ${B2}, p. 142]`}>Kapillæret er fylt med en gel som fungerer som en molekylsikt. Separerer etter størrelse (og ladning) når strøm påsettes. Egnet til DNA-sekvensering, proteinanalyse og farmasøytiske analyser. <strong>Kun elektrokinetisk injeksjon.</strong> UV ved lav bølgelengde kan ikke brukes på grunn av gelen. Notat: det er vanskelig å holde gelmaterialet fuktig, og gelkapillærer har begrenset levetid. Derfor har man gått over til gelfrie systemer, og CGE er lite brukt i dag.</Def>
        <Def term="Gelfri sikting (gel-free sieving)" cite={`[${K2}, slide 15, 24; ${B2}, p. 142–143]`}>Bufferløsning med lineære hydrofile polymerer (f.eks. polyetylenglykol). Sammenfiltrede polymerer gir størrelsesseparasjon. Lang levetid. Både hydrodynamisk og elektrokinetisk injeksjon kan brukes, og UV ved lav bølgelengde fungerer. Høy spenning er mulig. Kan ikke brukes i kapillærer &lt; 50 µm ID på grunn av viskositeten. Svært viktig for DNA-sekvensering: fluorescensmerkede fragmenter, elektrokinetisk injeksjon og vandring mot + elektroden, med separasjon etter antall basepar (oppløsning ned til ett nukleotid) og LIF-deteksjon. Fire fargestoffer for de fire basene gir sekvensen i én analyse.</Def>

        <Columns>
          <Def term="Kapillær isoelektrisk fokusering (cIEF)" cite={`[${K2}, slide 25–30; ${B2}, p. 142]`}>Kombinerer prinsippene for kapillær gelelektroforese og IEF. Høy følsomhet. Separasjon etter forskjell i isoelektrisk punkt (pI). Brukes for proteiner. <strong>EOF er uønsket</strong>: den kan forstyrre pH-gradienten og fokuseringen. Man bruker kapillærer med overflate uten ladning for å eliminere EOF, og det hindrer også adsorpsjon. pH-gradienten oppnås med amfolyttløsning. Amfolytt: blanding av mange amfotere stoffer med ulik pI. pI-markør: lett detekterbart stoff med kjent pI (f.eks. ribonuklease, myoglobin). Stabiliserende gel, f.eks. cellulose. <strong>Trinn 1, prøveapplikasjon</strong>: en blanding av prøve og amfolytter fylles i røret med høyt trykk. <strong>Trinn 2, fokusering</strong>: amfolyttene danner en pH-gradient. Ved høy spenning beveger analyttene seg til pH = pI og fokuseres der. <strong>Anoden står i lav-pH-elektrolytt</strong> (f.eks. H₃PO₄, anolytt) og <strong>katoden i høy-pH-løsning</strong> (f.eks. NaOH, katolytt). Eksempelgradient: pH 3 → pH 10. Advarsel på slide 28: løseligheten er lavest ved pI, og analytten kan felle ut. Løselighetsfremmere (f.eks. urea) kan være nødvendig. <strong>Trinn 3, mobilisering</strong>: etter fokusering må sonene passere detektoren. Katodebufferen endres til lavere pH, og analyttene migrerer mot katoden forbi detektoren, så fokuseringen registreres som et elektroferogram. Strømmen faller under fokusering og flater ut. Mobiliseringen settes i gang når strømmen er lav. Ampholyttene absorberer UV ved lave bølgelengder, så &lt; 280 nm kan ikke brukes (deteksjon ved 280 nm).</Def>
          <Diagram title="cIEF i tre trinn" cite={`[${K2}, slide 27–29]`}><CIEF /></Diagram>
        </Columns>
        <Def term="Eksempel: ErA (Erwinia chrysanthemi L-asparaginase)" cite={`[${K2}, slide 30]`}>Tvungen deamidering. Kontroll har hovedtopp ved pI 7,35. Behandlet prøve får nye, surere topper (7,0, 6,8, 6,6) mellom pI-markørene.</Def>
        <Gap>at deamidering (Asn → Asp) gir lavere pI og derfor surere topper står ikke forklart i kursfilene. Bare spørsmålet «som vil si?» står på slide 30.</Gap>

        <Columns>
          <Def term="Kapillærisotakoforese (cITP)" cite={`[${K2}, slide 31–32; ${B2}, p. 143]`}>Separerer ioner, anioner <em>eller</em> kationer (én type om gangen), etter elektroforetisk mobilitet. To elektrolytter: <strong>ledende (leading) elektrolytt</strong> med ioner med <em>høyere</em> mobilitet enn analyttene, og <strong>terminerende elektrolytt</strong> med <em>lavere</em> mobilitet. Analyttene injiseres mellom de to løsningene. I feltet beveger ionene seg med hastighet proporsjonal med mobiliteten. Ioner med høy mobilitet danner lederfronten. Det etableres en likevekt der individuelle ioner beveger seg som skarpe bånd/soner. <strong>EOF ikke ønsket.</strong> Ionet i et bånd identifiseres fra feltstyrken på stedet. <strong>Kvantitativ informasjon hentes fra lengden på båndet.</strong> Notat: en form for soneelektroforese som brukes mer som injeksjonsmetode enn separasjonsmetode. Boka sier at prinsippet brukes til spesielle injeksjonsteknikker.</Def>
          <Diagram title="cITP-sonetog" cite={`[${K2}, slide 31–32]`}><CITP /></Diagram>
        </Columns>
        <Columns>
          <Def term="Micellær elektrokinetisk kapillærkromatografi (MEKC)" cite={`[${B2}, p. 143–145; ${K2}, slide 20]`}>Kan separere både ioniske og ikke-ioniske forbindelser. Elektrolytt (f.eks. fosfat) med ionisk surfaktant over <strong>kritisk micellekonsentrasjon (cmc)</strong>. Micellene (f.eks. natriumdodecylsulfat, SDS) er kuleformede aggregater med hydrofil ende ut og hydrofob hale inn. Nøytrale forbindelser fordeler seg mellom micelle og elektrolytt etter hydrofobisitet. Det er altså kromatografi. Micellen er en <strong>pseudostasjonær fase</strong> (en bevegelig «stasjonær» fase). Micellene er ladde og migrerer i feltet. Med EOF &gt; |micellenes egen mobilitet| går de mot katoden, så alt passerer detektoren. Polar nøytral går med EOF (t₀). Hydrofob nøytral går med micellen (t_mc). <strong>Migrasjonsvinduet</strong> ligger mellom t₀ og t_mc. Antall forbindelser per analyse er begrenset. Anioner og kationer påvirkes i tillegg av sin egen mobilitet. Forelesningen nevner MEKC bare i listen (slide 20). Detaljene er fra boka.</Def>
          <Diagram title="MEKC-migrasjonsvindu" cite={`[${B2}, p. 144–145]`}><MEKC /></Diagram>
        </Columns>

        <Def term="Elektrokromatografi (CEC), potensialdrevet kromatografi" cite={`[${K2}, slide 33–35; ${B2}, p. 145–147]`}>Kombinasjon av HPLC og CE. Har selektiviteten og toppkapasiteten til HPLC og effektiviteten og oppløsningen til CE. Høyere kolonneeffektivitet enn HPLC, og høyere prøvekapasitet enn CE. <strong>Forskjell fra LC</strong>: den mekaniske pumpen byttes ut med en strømkilde (10–30 kV). Mobilfasen (inkl. analytter) flyttes gjennom kolonnen med EOF (0,2–1 mm/s), <strong>uten trykkfall</strong> og med <strong>flat profil</strong>. Det gir mindre båndspredning og høyere effektivitet. <strong>Nøytrale</strong> forbindelser separeres etter fordeling mellom stasjonær og mobil fase. <strong>Ladde</strong> forbindelser separeres etter elektroforetisk mobilitet <em>og</em> kromatografisk fordeling. For å få EOF må kolonnematerialet ha ladde overflategrupper (silanoler eller andre). Den stasjonære fasen må velges nøye, fordi den også må generere EOF. Mekanisk pumpe kan likevel brukes til ca. 5 bar overtrykk (mot bobler) og til bytte av mobilfase og vasking.</Def>
        <Columns>
          <Def term="Tre hovedtyper kolonner (fused silica)" cite={`[${K2}, slide 34; ${B2}, p. 146]`}>(a) <strong>Åpen rørformet</strong> (open tubular): ladet veggbelegg, best effektivitet ved &lt; 25 µm ID (notat). (b) <strong>Pakket kapillærkolonne</strong>: 50–100 µm ID × 20–50 cm, med silikapartikler som i LC eller <em>mindre</em> (ingen trykkfall). Ingen metallfritter, fordi de forstyrrer feltet og gir bobler, så frittene sintres i silikaen. (c) <strong>Monolitter</strong>: polymerisert (f.eks. akrylater) i 50–100 µm ID silikakapillær.</Def>
          <Diagram title="CEC-kolonnetyper" cite={`[${K2}, slide 33–35]`}><CEC /></Diagram>
        </Columns>
        <Def term="CEC: mobilfase, injeksjon og deteksjon" cite={`[${B2}, p. 145–146; ${K2}, slide 34]`}>Mobilfase: vann + organisk modifikator + buffer (elektrolytt) med lav ionestyrke for å redusere varme. Retensjon styres av modifikatorandel, pH, ionestyrke, potensial og temperatur. Gradient er mulig, men krever mer komplisert utstyr. <strong>Prøveapplisering</strong>: elektrokinetisk injeksjon (5–10 kV), eller i boka også storvolumsinjeksjon med fokusering som i LC. <strong>Deteksjon</strong>: UV, fluorescens eller MS, ofte i et kapillær etter kolonneutløpet.</Def>
        <Def term="Hvorfor CEC er lite brukt" cite={`[${B2}, p. 146–147]`}>Ingen dedikerte kommersielle instrumenter eller kolonner, ingen «killer application», vanskelig å lage reproduserbare kolonner, og EOF kan endre seg over tid ved adsorpsjon fra komplekse prøver. Potensialet ligger i proteomikk og metabolomikk.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="cze" />
        <Eq id="mekc" />
        <Avvik>MEKC k-formel trykt med t₀/t_mc i nevneren (bok p. 144). Med det leddet blir nevneren lik for alle analytter. Kursfilene har ingen regneeksempel som kan bekrefte formen; formelen er gjengitt slik boka trykker den.</Avvik>
        <p className="muted">Ingen interaktiv graf: kursfilene har ingen tallverdier for t₀, t_mc eller mobiliteter for disse variantene.</p>
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 13: fire spørsmål om elektrokromatografi (CEC) (3 p) — [UTLEDET, ingen fasit i LF]"
          given={`Automatisk rettet, uten fasit i LF [${LF25}, oppg. 13]. **Svarene er utledet fra forelesningen.**`}
          steps={[
            { title: 'i) Elektrokromatografi er en … (CE + HPLC / MS-type / GC + CE / gelelektroforese / MS + GC)', body: `${U}«Kombinasjon av HPLC og CE» [${K2}, slide 33]. → **Kombinasjon av CE og HPLC.**` },
            { title: 'ii) Hvilken kolonnetype kan benyttes? (alle tre / monolitt / åpent rør / pakket)', body: `${U}Tre hovedtyper: åpen rørformet, pakket kapillær og monolitt [slide 34]. → **Alle de tre alternativene er korrekt.**` },
            { title: 'iii) I elektrokromatografi oppstår …', body: `${U}Mobilfasen flyttes med EOF [slide 33]. EOF gir flat profil uten trykkfall [${B2}, p. 145]. → **EOF og en flat flowprofil.**` },
            { title: 'iv) To korrekte utsagn om CEC', body: `${U}«Nøytrale forbindelser separeres utfra fordeling mellom SF–MF» → **riktig** (ordrett på slide 33).` },
            { body: `${U}«Ioner separeres utfra elektroforetisk mobilitet og kromatografisk fordeling» → **riktig** (slide 33: «lada forbindelser … elektroforetisk mobilitet og kromatografisk fordeling»).` },
            { body: `${U}Nøytrale har ingen elektroforetisk mobilitet, så «nøytrale … etter elektroforetisk mobilitet» er feil. «Ioner kun etter mobilitet» og «kun etter fordeling» er feil fordi begge mekanismene virker.` },
          ]}
          cite={`[${E25}, oppg. 13]`}
        />
        <FadedExample
          title="Gjennomfør en cIEF-analyse av et protein"
          steps={[
            { title: 'Kapillærvalg:', body: 'overflatemodifisert kapillær uten ladning, fordi EOF ville forstyrre pH-gradienten og fokuseringen.' },
            { title: 'Trinn 1, applikasjon: hva fylles i kapillæret, og hvordan?', body: 'Prøve + amfolytter (+ pI-markører) fylles med trykk.', hidden: true },
            { title: 'Trinn 2, fokusering: hvor står anode og katode?', body: 'Anode i lav-pH-elektrolytt (f.eks. H₃PO₄), katode i høy-pH (f.eks. NaOH). Amfolyttene danner gradienten, og proteinene vandrer til pH = pI og stopper.', hidden: true },
            { title: 'Hva kan gå galt ved pI, og hvordan motvirkes det?', body: 'Løseligheten er lavest ved pI, så proteinet kan felle ut. Tilsett løselighetsfremmer, f.eks. urea.', hidden: true },
            { title: 'Trinn 3, mobilisering: hvordan får du sonene forbi detektoren?', body: 'Katodebufferen byttes til lavere pH, og sonene migrerer mot katoden forbi detektoren. Det gir et elektroferogram.', hidden: true },
            { title: 'Deteksjonsbølgelengde?', body: '280 nm. Amfolyttene absorberer under 280 nm.', hidden: true },
          ]}
          cite={`[${K2}, slide 25–30; ${B2}, p. 142]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="EOF ønsket eller ikke?" cite={`[${K2}, slide 21, 25, 32–33]`}>CZE kan gå med eller uten. I MEKC og CEC er EOF nødvendig (driver transporten). I cIEF og cITP er EOF <strong>uønsket</strong>.</Trap>
        <Trap title="CEC-flowprofil" cite={`[${B2}, p. 145; ${E25}, oppg. 13iii]`}>Flat (EOF), ikke parabolsk. Det er hele poenget.</Trap>
        <Trap title="Nøytrale separeres ikke i CZE" cite={`[${K2}, slide 33; ${B2}, p. 144]`}>Men de gjør det i MEKC (micelle-fordeling) og CEC (SF–MF-fordeling).</Trap>
        <Trap title="«Bruk av amfolytter» = IEF/cIEF" cite={`[${K2}, slide 27–28]`}>Ikke CZE (H25 oppg. 9).</Trap>
        <Trap title="Injeksjon per variant" cite={`[${K2}, slide 24, 27, 34; ${B2}, p. 142–143]`}>CGE og CEC bruker elektrokinetisk injeksjon. Gelfri sikting kan bruke begge. cIEF fylles med trykk.</Trap>
        <Trap title="cITP" cite={`[${K2}, slide 31–32]`}>Ledende elektrolytt har <em>høyere</em> mobilitet enn analyttene, terminerende har <em>lavere</em>. Kvantitativ info gis av båndets <em>lengde</em>, ikke høyde.</Trap>
        <Trap title="CEC-pakning" cite={`[${B2}, p. 146]`}>Partiklene kan være <em>mindre</em> enn i LC fordi det ikke er trykkfall. Metallfritter unngås.</Trap>
        <Trap title="cIEF-polaritet" cite={`[${K2}, slide 28]`}>Anoden står i <em>lav</em> pH og katoden i <em>høy</em> pH. Snus dette, får man ingen stabil gradient.</Trap>
      </Section>
    </>
  )
}
