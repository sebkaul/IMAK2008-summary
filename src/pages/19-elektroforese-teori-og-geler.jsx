import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Block, Diagram, Svg, Box, Arrow, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const PK = 'Proteinkarakterisering del 1 m notater.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const OV = 'Øving elektroforese med LF.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'

export const meta = {
  title: 'Elektroforese: teori og geler',
  topic: 'elektroforese',
  examWeight: { level: 'medium', note: 'H24 2(a) (5 p, generelle prinsipper for elektroforese). H25 oppg. 9 (5 p, koble utsagn til metode, delvis). Grunnlag for alle elektroforesesidene' },
  examTasks: [
    'H2024: 2(a) (index: side 19)',
    'H2024 oppg. 2(a) (5 p): forklar de generelle prinsippene for elektroforese.',
    'H2025 oppg. 9 (5 p, automatisk rettet): koble utsagn til metode (CE, SDS-PAGE, IEF, 2D, immunologisk elektroforese). Løsningsforslaget gir ingen fasit. Utsagnene fordeles på sidene 20–26.',
  ],
  buildsOn: ['10-size-exclusion'],
  usedIn: ['20-sds-page', '21-ief-og-2d', '22-geldeteksjon-og-western-blot', '23-immunelektroforese', '24-ce-mobilitet-og-eof'],
  sources: [
    `[${PK}, slide 13–36, 38]`,
    `[${B2}, p. 127–133] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[${OV}, p. 1]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 2(a)] / [${LF24}, p. 10–11]`,
    '[IMAK2008 eksamen H2025.pdf, oppg. 9]',
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilke to krefter virker på et ion i elektroforese, og hva skjer når de er like store?', a: `Den elektriske kraften $F = qE$ og friksjonskraften $F_f = 6\\pi\\eta r u$. Når de er like, beveger ionet seg med konstant hastighet [${PK}, slide 20–22; ${B2}, p. 127–128].` },
    { id: 'p2', kind: 'pretest', q: 'Hvorfor kan man ikke bare skru opp spenningen for å få raskere separasjon?', a: `Varmeutviklingen øker med kvadratet av strømmen, og temperaturgradienter gir båndspredning [${PK}, slide 25; ${B2}, p. 128].` },
    { id: 'p3', kind: 'pretest', q: 'Hvilken gel har størst porer: agarose eller polyakrylamid?', a: `Agarose [${PK}, slide 35; ${B2}, p. 131].` },
    { id: 't1', q: 'Utled migreringshastigheten fra kraftbalansen.', a: `Ved konstant hastighet er $qE = 6\\pi\\eta r u$, så $u = qE/6\\pi\\eta r$ [${PK}, slide 22].` },
    { id: 't2', q: 'Hva er elektroforesebufferens tre oppgaver?', a: `Forflytte applisert prøve, lede strømmen og stabilisere pH [${PK}, slide 18].` },
    { id: 't3', q: 'Hvilke stoffer brukes for å starte og katalysere polymeriseringen av polyakrylamid?', a: `Ammoniumpersulfat (initiator) og TEMED (katalysator), med N,N'-metylenbisakrylamid som kryssbinder [${PK}, slide 34].` },
    { id: 't4', q: 'Hvorfor brukes lavspennings-elektroforese for store molekyler?', a: `Store molekyler har lave diffusjonskoeffisienter, så lang analysetid gir lite longitudinal diffusjon, og lav spenning gir mindre varme og enklere utstyr [${B2}, p. 133].` },
    { id: 't5', q: 'Hva er forskjellen på en kinetisk prosess og en likevektsprosess i elektroforese? Gi ett eksempel på hver.', a: `Kinetisk: komponentene vandrer med ulik hastighet hele tiden (soneelektroforese). Likevekt: komponentene stopper der de er nøytrale (IEF) [${PK}, slide 28; ${B2}, p. 130].` },
  ],
  equations: [
    {
      id: 'F', label: 'Elektrisk kraft',
      tex: String.raw`F = \va{q}\cdot \vb{E} \qquad \vb{E} = \frac{V}{L}`,
      vars: [
        { sym: 'F', desc: 'kraft på ionet', unit: String.raw`\mathrm{N}` },
        { sym: String.raw`\va{q}`, desc: 'ioneladning', unit: String.raw`\mathrm{C}` },
        { sym: String.raw`\vb{E}`, desc: 'feltstyrke', unit: String.raw`\mathrm{V/m}` },
        { sym: 'V', desc: 'pålagt spenning', unit: String.raw`\mathrm{V}` },
        { sym: 'L', desc: 'avstand mellom anode og katode', unit: String.raw`\mathrm{m}` },
      ],
      cite: `[${PK}, slide 20; ${B2}, p. 127]`,
      check: { status: 'verified', note: 'Bok del 2 Fig. 6.1 (p. 128, PDF s. 44): F = q·E; E = V/L på p. 127.' },
    },
    {
      id: 'stokes', label: "Friksjon (Stokes' lov)",
      tex: String.raw`F_f = 6\pi\vd{\eta} \vc{r} \ve{u}`,
      vars: [
        { sym: String.raw`\vd{\eta}`, desc: 'viskositet i bufferen', unit: String.raw`\mathrm{Pa\cdot s}` },
        { sym: String.raw`\vc{r}`, desc: '(Stokes-) ioneradius', unit: String.raw`\mathrm{m}` },
        { sym: String.raw`\ve{u}`, desc: 'migreringshastighet', unit: String.raw`\mathrm{m/s}` },
      ],
      note: 'Forenklet. Kan modifiseres for ikke-sfærisk form, mot-ioneffekter osv.',
      cite: `[${B2}, p. 128; ${PK}, slide 21]`,
      check: { status: 'verified', note: 'Bok del 2 p. 128 (PDF s. 44): F_f = 6πηru.' },
    },
    {
      id: 'u', label: 'Migreringshastighet og mobilitet',
      tex: String.raw`\begin{gathered}\ve{u} = \frac{\va{q}\vb{E}}{6\pi\vd{\eta} \vc{r}} \qquad \ve{u} = \vf{\mu} \vb{E} \\ \Rightarrow\;\; \vf{\mu} = \frac{\ve{u}}{\vb{E}} = \frac{\va{q}}{6\pi\vd{\eta} \vc{r}}\end{gathered}`,
      vars: [{ sym: String.raw`\vf{\mu}`, desc: 'elektroforetisk mobilitet', unit: String.raw`\mathrm{m^2\,V^{-1}\,s^{-1}}` }],
      note: 'Gjelder når $F_f = F$ (konstant hastighet).',
      cite: `[${PK}, slide 22; ${B2}, p. 128, lign. 6.1]`,
      check: { status: 'verified', note: 'Bok lign. 6.1 (PDF s. 44): u = qE/6rπη; µ = u/E. Siste ledd µ = q/6πηr følger direkte.' },
    },
    {
      id: 'W', label: 'Varmeutvikling',
      tex: String.raw`W = \frac{V\cdot i}{L\cdot A} = \frac{\vb{E}\cdot i}{A} = \frac{i^2}{\ell\cdot A^2}`,
      vars: [
        { sym: 'W', desc: 'varme per volum', unit: String.raw`\mathrm{W/mL}` },
        { sym: 'i', desc: 'strøm', unit: String.raw`\mathrm{A}` },
        { sym: 'A', desc: 'tverrsnittsareal', unit: String.raw`\mathrm{cm^2}` },
        { sym: String.raw`\ell`, desc: 'spesifikk ledningsevne for elektrolytten', unit: String.raw`\mathrm{S/cm}` },
      ],
      cite: `[${B2}, p. 128, lign. 6.2]`,
      check: { status: 'verified', note: 'Bok lign. 6.2 (PDF s. 44) identisk.' },
    },
    {
      id: 'TC', label: 'Gelens porestørrelse',
      tex: String.raw`\%T = \frac{a + b}{m}\times 100\,\% \qquad \%C = \frac{b}{a + b}\times 100\,\%`,
      vars: [
        { sym: 'a', desc: 'gram akrylamid', unit: String.raw`\mathrm{g}` },
        { sym: 'b', desc: "gram N,N'-metylenbisakrylamid", unit: String.raw`\mathrm{g}` },
        { sym: 'm', desc: 'totalt gelvolum', unit: String.raw`\mathrm{mL}` },
      ],
      note: '%T er total akrylamidkonsentrasjon, %C er andelen kryssbinder.',
      cite: `[${PK}, slide 34; ${B2}, p. 130–131]`,
      check: { status: 'verified', note: 'Bok del 2 p. 130 (PDF s. 46) identisk.' },
    },
    {
      id: 'rs', label: 'Oppløsning i sonelektroforese',
      tex: String.raw`R_s = \sqrt{N}\,\frac{\Delta \ve{u}}{4\bar{\ve{u}}}`,
      vars: [
        { sym: 'N', desc: 'platetall', unit: '–' },
        { sym: String.raw`\Delta \ve{u}`, desc: '$u_1 - u_2$', unit: String.raw`\mathrm{m/s}` },
        { sym: String.raw`\bar{\ve{u}}`, desc: 'gjennomsnitt av $u_1$ og $u_2$', unit: String.raw`\mathrm{m/s}` },
      ],
      note: 'Båndene er tilnærmet Gauss-formet.',
      cite: `[${B2}, p. 133, lign. 6.3]`,
      check: { status: 'verified', note: 'Bok lign. 6.3 (PDF s. 49): R_s = √N·Δu/4u, der u er gjennomsnittet (boka skriver u uten strek).' },
    },
  ],
}

const Avvik = ({ children }) => <Block kind="trap" title="Known discrepancy between sources (00-index.md)">{children}</Block>

/* Forces on an ion */
function Krefter() {
  return (
    <Svg w={460} h={290} label="Krefter på et ion i elektrisk felt">
      <Box x={4} y={40} w={70} h={60} label="anode" sub="+" t="var-a" />
      <Box x={386} y={40} w={70} h={60} label="katode" sub="−" t="var-c" />
      <rect x={70} y={50} width={320} height={40} style={{ fill: `color-mix(in srgb, ${tone('definition')} 10%, var(--bg))`, stroke: tone('muted') }} />
      <Label x={230} y={30} size={12}>elektrolyttløsning</Label>
      <circle cx={230} cy={70} r={12} style={{ fill: tone('var-e') }} />
      <Label x={230} y={75} size={13}>+</Label>
      <Arrow x1={246} y1={70} x2={360} y2={70} t="var-b" />
      <Label x={300} y={110} t="var-b" size={12}>F = qE</Label>
      <Arrow x1={214} y1={70} x2={110} y2={70} t="trap" />
      <Label x={160} y={110} t="trap" size={12}>Fƒ = 6πηru</Label>
      <Arrow x1={60} y1={270} x2={440} y2={270} />
      <Arrow x1={60} y1={270} x2={60} y2={140} />
      <Curve t="var-e" points={[[60, 270], [70, 200], [85, 172], [110, 165], [200, 164], [430, 164]]} />
      <Label x={430} y={156} anchor="end" t="var-e" size={12}>u = qE/6πηr  (Fƒ = F)</Label>
      <Label x={440} y={286} anchor="end" size={11}>tid</Label>
      <Label x={66} y={146} anchor="start" size={11}>hastighet</Label>
    </Svg>
  )
}

/* Charge and size → speed */
function LadningStorrelse() {
  const ions = [[14, 3, 300, 'var-a', 'lite, høy ladning'], [26, 3, 200, 'var-c', 'stort, høy ladning'], [26, 1, 100, 'var-e', 'stort, lav ladning']]
  return (
    <Svg w={460} h={230} label="Ladning og størrelse gir hastighet">
      {ions.map(([r, q, len, t, lab], i) => {
        const y = 40 + i * 60
        return (
          <g key={lab}>
            <circle cx={50} cy={y} r={r / 2 + 4} style={{ fill: tone(t), opacity: 0.8 }} />
            <Label x={50} y={y + 4} size={11}>{'+'.repeat(q)}</Label>
            <Arrow x1={70} y1={y} x2={70 + len} y2={y} t={t} />
            <Label x={74} y={y - 10} anchor="start" size={11}>{lab}</Label>
          </g>
        )
      })}
      <rect x={60} y={190} width={340} height={30} rx={6} style={{ fill: 'none', stroke: tone('ink') }} />
      <Label x={230} y={210} size={12}>Ladning ↑ → u ↑ · Størrelse ↑ → u ↓ · Friksjon ↑ → u ↓</Label>
    </Svg>
  )
}

/* Gel apparatus */
function Apparat() {
  return (
    <Svg w={460} h={260} label="Gelelektroforese-apparat">
      <Label x={110} y={16} size={12}>Vertikal PAGE</Label>
      <rect x={50} y={40} width={120} height={180} style={{ fill: `color-mix(in srgb, ${tone('definition')} 12%, var(--bg))`, stroke: tone('ink') }} />
      {[0, 1, 2, 3].map((i) => <rect key={i} x={60 + i * 28} y={40} width={18} height={12} style={{ fill: 'var(--bg)', stroke: tone('ink') }} />)}
      {[[0, 90], [1, 120], [1, 160], [2, 110], [3, 140], [3, 190]].map(([i, y], k) => <rect key={k} x={60 + i * 28} y={y} width={18} height={4} style={{ fill: tone('var-c') }} />)}
      <Label x={110} y={34} size={10}>katode (−) · brønner</Label>
      <Label x={110} y={238} size={10}>anode (+)</Label>
      <Arrow x1={30} y1={60} x2={30} y2={210} t="var-c" />
      <Label x={340} y={16} size={12}>Horisontal agarose</Label>
      <rect x={250} y={90} width={190} height={80} style={{ fill: `color-mix(in srgb, ${tone('intuition')} 12%, var(--bg))`, stroke: tone('ink') }} />
      {[0, 1, 2].map((i) => <rect key={i} x={340} y={100 + i * 24} width={6} height={14} style={{ fill: 'var(--bg)', stroke: tone('ink') }} />)}
      <rect x={290} y={102} width={4} height={10} style={{ fill: tone('var-a') }} />
      <rect x={400} y={126} width={4} height={10} style={{ fill: tone('var-e') }} />
      <Label x={250} y={190} anchor="start" size={10}>− katode</Label>
      <Label x={440} y={190} anchor="end" size={10}>anode +</Label>
      <Label x={345} y={214} size={10}>brønner i midten, bånd går begge veier</Label>
    </Svg>
  )
}

/* Polyacrylamide polymerisation */
function PAG() {
  const net = (ox, step) => {
    const lines = []
    for (let x = 0; x <= 150; x += step) lines.push(<line key={`v${x}`} x1={ox + x} y1={130} x2={ox + x} y2={240} style={{ stroke: tone('var-c'), strokeWidth: 1.5 }} />)
    for (let y = 0; y <= 110; y += step) lines.push(<line key={`h${y}`} x1={ox} y1={130 + y} x2={ox + 150} y2={130 + y} style={{ stroke: tone('var-c'), strokeWidth: 1.5 }} />)
    return lines
  }
  return (
    <Svg w={460} h={270} label="Polyakrylamid-gelen">
      <Box x={10} y={20} w={110} h={44} label="akrylamid" t="muted" />
      <Label x={140} y={47} size={14}>+</Label>
      <Box x={160} y={20} w={140} h={44} label="bisakrylamid" sub="(kryssbinder)" t="muted" />
      <Arrow x1={310} y1={42} x2={360} y2={42} />
      <Box x={360} y={20} w={95} h={44} label="nettverk" t="var-c" />
      <Label x={230} y={90} size={11}>APS (initiator) · TEMED (katalysator) · frie radikaler</Label>
      {net(40, 14)}
      {net(260, 30)}
      <Label x={115} y={258} size={11}>høy %T: tett, små porer</Label>
      <Label x={335} y={258} size={11}>lav %T: åpent, store porer</Label>
    </Svg>
  )
}

const ions = [{ q: 3, r: 1, t: 'var-a' }, { q: 3, r: 3, t: 'var-c' }, { q: 1, r: 3, t: 'var-e' }]
const band = (x, c) => Math.exp(-((x - c) ** 2) / (2 * 0.25 * 0.25))

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Kraft mot friksjon">
        <MentalModel cite={`[${PK}, slide 15, 20–25, 33; ${B2}, p. 128, 130, 133]`}>
          Elektroforese er separasjon av ladde molekyler i et elektrisk felt i et væskemedium (buffer). Feltet trekker ionet med kraften <T text="$qE$" />, mens bufferen bremser det med en friksjon som øker med hastigheten og størrelsen (Stokes). Etter et øyeblikk er kreftene like, og ionet glir med konstant fart <T text="$u = qE/6\pi\eta r$." />{' '}
          Høy <V c="a">ladning</V> og liten <V c="c">størrelse</V> gir høy <V c="e">fart</V>, så molekyler med ulikt forhold mellom ladning og størrelse ender opp på ulike steder. I fri løsning ville varme og konveksjon blande båndene, derfor gjøres det i en gel. Gelen virker i tillegg som en sil: porestørrelsen avgjør hvor mye store molekyler bremses. Strømmen gir varme, så spenningen kan ikke økes ubegrenset.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Elektroforese" cite={`[${PK}, slide 15; ${B2}, p. 127]`}>Separasjonsteknikk der ladde, løste partikler eller molekyler beveger seg under påvirkning av et elektrisk felt i et væskemedium. I praksis er det forflytning av ioner i elektrisk ledende væsker (elektrolytter, som regel vandige saltoppløsninger, dvs. buffere).</Def>
        <Def term="Historikk" cite={`[${PK}, slide 13–14]`}>Først observert i 1807 (Strakhov og Reuss), oppfunnet og døpt av Michaelis i 1909 (bestemte pI til proteiner). Tiselius fikk Nobelpris i 1948 for moving boundary-metoden. Gel-elektroforese kom på 40-tallet, cellulose-acetat og immunelektroforese på 50-tallet, polyakrylamid og de første forsøkene med kapillærsone-elektroforese på 60-tallet, og CZE «tok av» på 80-tallet.</Def>
        <Def term="Anvendelser" cite={`[${PK}, slide 16]`}>Separering av biomolekyler (peptider, proteiner, nukleinsyrer), bakterier og virus, og analyse og ren fremstilling av enkeltkomponenter. Brukes innen biokjemi, medisin, molekylærbiologi, diagnostikk, landbruk og næringsmiddelkontroll.</Def>
        <Def term="Milde betingelser" cite={`[${PK}, slide 17; ${B2}, p. 127, 130]`}>Elektroforese består av en væskefase og et bæremateriale. Forholdene er nær fysiologiske og derfor «snille» mot følsomme, biologisk aktive stoffer, som beholder aktiviteten. I motsetning til kromatografi er det ingen mobil eller stasjonær fase.</Def>
        <Def term="Elektroforesebufferens oppgaver" cite={`[${PK}, slide 18]`}>Forflytte applisert prøve, lede strømmen (bestemmer ladningen) og stabilisere pH.</Def>
        <Def term="Retning" cite={`[${PK}, slide 19]`}>I et elektrisk felt vandrer kationer mot katoden og anioner mot anoden. Molekylene må fås til å vandre i samme retning. Netto transportretning bestemmes av ladningen til analyttene (f.eks. SDS-PAGE).</Def>
        <Columns>
          <div>
            <Def term="Drivkraften" cite={`[${PK}, slide 20; ${B2}, p. 127]`}>{'$F = qE$ med $E = V/L$, så $F = q(V/L)$. Høyere ladning gir større kraft.'}</Def>
            <Def term="Motkraften (Stokes' lov)" cite={`[${PK}, slide 21; ${B2}, p. 128]`}>{'$F_f = 6\\pi\\eta r u$. Friksjonen øker med hastigheten. Store molekyler får større friksjon og lavere hastighet, små molekyler mindre friksjon og høyere hastighet.'}</Def>
            <Def term="Migreringshastighet" cite={`[${PK}, slide 22; ${B2}, p. 128]`}>{'Når $F_f = F$ beveger ionet seg med konstant hastighet $u = qE/6\\pi\\eta r$. Hastigheten øker med ladning og feltstyrke, og avtar med ioneradius. Den øker med temperaturen, fordi viskositeten synker.'}</Def>
            <Avvik>Bok p. 128: u avtar med økende temperatur — motsier lign. 6.1 (η avtar ⇒ u øker). Boka skriver at u «decreases with increasing temperature, since the viscosity η decreases». Ligningen (u ∝ 1/η) gir at u <em>øker</em> når η synker; teksten i boka ser ut til å være feil.</Avvik>
            <Def term="Elektroforetisk mobilitet (µ)" cite={`[${PK}, slide 22; ${B2}, p. 128]`}>{'Hastighet per feltstyrkeenhet, $u = \\mu E$. Den er uavhengig av feltstyrken og brukes til å sammenligne ioner.'}</Def>
          </div>
          <Diagram title="Krefter på et ion i elektrisk felt" caption="Under: hastighet mot tid stiger brått og flater ut ved u = qE/6πηr (der Fƒ = F)." cite={`[${B2}, p. 128, Fig. 6.1; ${PK}, slide 20–22]`}><Krefter /></Diagram>
        </Columns>
        <Columns>
          <Def term="Hvorfor separeres molekylene?" cite={`[${PK}, slide 23–24]`}>Elektrisk kraft → friksjon → konstant hastighet → ulik migreringshastighet → separasjon. Ladning ↑ gir hastighet ↑, størrelse ↑ gir hastighet ↓, friksjon ↑ gir hastighet ↓. Forholdet mellom elektrisk kraft og friksjon er forskjellig for ulike molekyler. Ioner med ulik størrelse, form og evt. ladning har ulik mobilitet og får ulik vandringslengde.</Def>
          <Diagram title="Ladning og størrelse → hastighet" cite={`[${PK}, slide 23]`}><LadningStorrelse /></Diagram>
        </Columns>
        <Def term="Varmeutvikling (bieffekt)" cite={`[${PK}, slide 25; ${B2}, p. 128–129]`}>Skyldes strøm i systemet. Den begrenser bruk av høy spenning, fordi feltstyrken er proporsjonal med strømstyrken (i), mens varmen er proporsjonal med i². Temperaturgradienter kan oppstå og bidra til båndspredning. Boka: migrasjonshastigheten varierer 2–3 % per °C. Svake syrer og baser med lav ionestyrke, kjøling og rektangulære kanaler reduserer problemet. Varmen kan bryte ned termolabile stoffer.</Def>
        <Def term="Tre hovedgrupper" cite={`[${PK}, slide 27; ${B2}, p. 127]`}>(1) gelelektroforese (DNA og protein), (2) kapillærelektroforese (CE) og (3) potensialdrevet kromatografi (elektrokromatografi). CE og CEC er på sidene 24–26.</Def>
        <Def term="Soneelektroforese" cite={`[${PK}, slide 28; ${B2}, p. 130, 133]`}>En kinetisk prosess som kan sammenlignes med kromatografi. Komponentene vandrer med ulik hastighet og separeres i soner eller bånd. Vandringslengden er proporsjonal med pålagt spenning og tid. Andre varianter: isoelektrisk fokusering (likevektsprosess), moving boundary og isotachoforese (kinetiske prosesser). Sone-elektroforese og IEF er mest brukt analytisk. Høyspennings-sonelektroforese (50–200 V/cm) brukes for små molekyler, fordi rask migrasjon gir mindre longitudinal diffusjon. Lavspennings (2–10 V/cm) brukes for store molekyler, som diffunderer lite, og krever enklere utstyr fordi det dannes mindre varme.</Def>
        <Def term="Gel" cite={`[${B2}, p. 130]`}>En totalt porøs, fast matriks som bærer elektrolyttløsningen og reduserer konveksjon. I gelen kan eddy-diffusjon og adsorpsjon bidra til båndspredning, i tillegg til longitudinal diffusjon.</Def>
        <Columns>
          <div>
            <Def term="Gelelektroforese" cite={`[${PK}, slide 30, 32]`}>Metode for å skille og identifisere proteiner eller DNA/RNA-fragmenter på en gel av agarose eller polyakrylamid mellom tynne glassplater, med tilhørende buffersystem. Proteinene vandrer som bånd (soner) med ulik hastighet mot elektroden med motsatt ladning.</Def>
            <Def term="Silingseffekt (sieving)" cite={`[${B2}, p. 133]`}>I gelen kan man i tillegg separere etter størrelse, avhengig av porestørrelsen. Ioner med samme ladning/størrelse-forhold kan dermed skilles hvis de er ulike store.</Def>
            <Def term="Instrumentering" cite={`[${B2}, p. 131–132]`}>Kolonner (vertikalt) eller tynne lag (vertikalt eller horisontalt), med vannkjøling. Tynnsjikt er 5–20 × 5–20 cm, tykkelse 0,1–2 mm for polyakrylamid og 5–10 mm for agarose. Brønner ca. 1 × 5 mm, prøvevolum 5–50 µL. Identifikasjon skjer ved å sammenligne vandringslengden med standarder på samme gel.</Def>
          </div>
          <Diagram title="Gelelektroforese-apparat" cite={`[${B2}, p. 131, Fig. 6.3; ${PK}, slide 32–33]`}><Apparat /></Diagram>
        </Columns>
        <Columns>
          <Def term="Polyakrylamid (PAGE)" cite={`[${PK}, slide 33–34; ${B2}, p. 130–131]`}>Polymerisering av akrylamid (giftig) med kryssbinderen N,N&apos;-metylenbisakrylamid i nærvær av frie radikaler. Ammoniumpersulfat initierer, og TEMED er katalysator. Dekker best proteiner på 5–250 kD. Boka: mindre egnet over 300 kDa. Porestørrelsen bestemmes av %T og %C. Små porer gir lite eddy-diffusjon. Stabil, inert, mekanisk sterk og gjennomsiktig. Vertikalt system med prøver i brønner. Begge geltypene er størrelsesselektive, der porestørrelsen bestemmer separasjonsrekkefølgen: små proteiner vandrer raskere enn store.</Def>
          <Diagram title="Polyakrylamid-gelen" cite={`[${PK}, slide 34; ${B2}, p. 130]`}><PAG /></Diagram>
        </Columns>
        <Def term="Agarose" cite={`[${PK}, slide 35; ${B2}, p. 131]`}>Naturlig lineært polysakkarid med større porer og dårligere mekanisk styrke enn polyakrylamid. Brukes for veldig store proteiner, men mest til DNA/RNA. Horisontalt system. Typisk ca. 1 %, løses i kokende vann og stivner ved 35–43 °C.</Def>
        <Def term="Buffersystem" cite={`[${PK}, slide 36; ${B2}, p. 131]`}>Kontinuerlig betyr samme buffer (konstant pH) i gel, prøve og elektrodereservoar. Diskontinuerlig betyr at gelen består av to deler, med ulik buffer i gel og elektroder. Diskontinuitet i gel eller pH konsentrerer startbåndet før separasjonen og gir bedre oppløsning. Detaljer på side 20.</Def>
        <Def term="Vandringshastigheten i PAGE avhenger av" cite={`[${PK}, slide 38]`}>(1) molekylenes størrelse, (2) spenningen over gelen og (3) porestørrelse og konsentrasjon av gelmateriale.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="F" />
        <Eq id="stokes" />
        <Eq id="u" />
        <Plot
          title="Migrering i elektrisk felt: tre bånd i en gelstripe"
          caption="$u = qE/(6\pi\eta r)$ og vandringslengde $L = u\cdot t$ (relative enheter, η og t faste). Bånd 1 (blågrønn): ladning og radius styres med sliderne. Grønn: q = 3, r = 3. Lilla: q = 1, r = 3. Feltstyrke E fra lavspenning (2 V/cm) til høyspenning (200 V/cm). Se plottet under for varmen."
          cite={`[${PK}, slide 22; ${B2}, p. 128, 133]`}
          x={{ min: 0, max: 10, label: 'vandringslengde (relativ)' }}
          y={{ label: 'signal', min: 0, max: 1.1 }}
          samples={500}
          params={[
            { key: 'q', label: '$q$ (bånd 1)', min: 1, max: 10, step: 1, value: 3, unit: 'e' },
            { key: 'r', label: '$r$ (bånd 1)', min: 1, max: 10, step: 0.5, value: 1 },
            { key: 'E', label: '$E$', min: 2, max: 200, step: 1, value: 50, unit: 'V/cm' },
          ]}
          series={[
            { key: 'b1', label: 'bånd 1', t: 'var-a', fn: (x, p) => band(x, (p.q / p.r) * (p.E / 200) * 3) },
            { key: 'b2', label: 'q = 3, r = 3', t: 'var-c', fn: (x, p) => band(x, (ions[1].q / ions[1].r) * (p.E / 200) * 3) },
            { key: 'b3', label: 'q = 1, r = 3', t: 'var-e', fn: (x, p) => band(x, (ions[2].q / ions[2].r) * (p.E / 200) * 3) },
          ]}
        />
        <Eq id="W" />
        <Plot
          title="Relativ varme mot feltstyrke"
          caption="Feltstyrken er proporsjonal med strømmen i, mens varmen W ∝ i². Kurven viser derfor relativ varme ∝ E², normalisert til 1 ved 2 V/cm (lavspenning). Ved 200 V/cm er varmen 10 000 ganger større — derfor trengs kjøling ved høyspenning."
          cite={`[${B2}, p. 128, lign. 6.2; ${PK}, slide 25]`}
          x={{ min: 2, max: 200, label: 'E (V/cm)' }}
          y={{ label: 'relativ varme', log: true, min: 1 }}
          series={[{ key: 'w', label: 'W (relativ)', t: 'trap', fn: (E) => (E / 2) ** 2 }]}
        />
        <Eq id="TC" />
        <Eq id="rs" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 2(a): generelle prinsipper for elektroforese (5 p)"
          steps={[
            { title: 'Prinsipp:', body: 'Separasjon av molekyler med et elektrisk felt. DNA, RNA eller proteiner beveger seg gjennom en porøs gel (agarose eller polyakrylamid).' },
            { title: 'Ladning:', body: 'Molekylene vandrer mot elektroden med motsatt ladning. DNA og RNA (negative pga. fosfatgruppene) går mot anoden (+), og positive molekyler mot katoden (−).' },
            { title: 'Størrelse:', body: 'Mindre molekyler går raskere gjennom porene, mens større møter mer motstand. Det gir størrelsesbasert separasjon.' },
            { title: 'Feltet:', body: 'Kraften er proporsjonal med ladning og feltstyrke: $F = qE$, med $E = V/L$. Ionene akselererer til de bremses av friksjon, og den elektroforetiske mobiliteten beskriver hvor raskt et ion beveger seg. Ulik størrelse og form gir ulik mobilitet. Sterkere felt gir raskere separasjon, men kan gi overoppheting eller forvrengte bånd.' },
            { title: 'Gelen:', body: 'Gelen er et fysisk medium som bremser molekylene etter størrelse. Agarose brukes for store molekyler (DNA), polyakrylamid for mindre molekyler (proteiner).' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 2(a); ${LF24}, p. 10–11]`}
        />
        <FadedExample
          title="Gelsammensetning og metodevalg"
          given="Del A: En gel lages av 19 g akrylamid + 1 g bisakrylamid. Del B (Øving oppg. 1): Et ukjent protein fra blodplasma — bestem molekylvekt og pI."
          steps={[
            { title: '%C:', body: '$b/(a+b) = 1/20 \\times 100\\,\\% = 5\\,\\%$.' },
            { title: 'Boka oppgir %T = 8 %. Hvilket gelvolum m gir det?', body: '$(19+1)/m = 0{,}08$, så m = 250 mL.', hidden: true },
            { title: 'Økes %T, blir porene større eller mindre, og hva skjer med store proteiner?', body: 'Mindre porer, og store proteiner bremses mer.', hidden: true },
            { title: 'Del B. Metode for molekylvekt?', body: 'SDS-PAGE (omtrentlig, mot standard) eller MS (langt mer presis).', hidden: true },
            { title: 'Metode for pI?', body: 'Isoelektrisk fokusering (IEF).', hidden: true },
            { title: 'Én begrensning ved hver?', body: 'SDS-PAGE gir ikke identitet, IEF gir ikke molvekt (og proteiner med lik pI er vanskelige å skille), MS er kostbart og krever kompetanse.', hidden: true },
          ]}
          cite={`[${B2}, p. 131; ${OV}, p. 1]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Bare «ladning»" cite={`[${LF24}, p. 10–11]`}>{'H24 2(a) forventer ladning, størrelse, feltstyrke og gelens rolle, helst med $F = qE$ og mobilitet.'}</Trap>
        <Trap title="Ubegrenset spenning" cite={`[${PK}, slide 25]`}>Varmen øker med i², og temperaturgradienter gir båndspredning.</Trap>
        <Trap title="Agarose og polyakrylamid forveksles" cite={`[${PK}, slide 33–35]`}>Agarose har store porer, er horisontal og brukes mest for DNA/RNA og veldig store proteiner. Polyakrylamid har små, justerbare porer, er vertikal og dekker proteiner på 5–250 kD.</Trap>
        <Trap title="%T og %C forveksles" cite={`[${B2}, p. 130–131]`}>%T er total akrylamid (a+b) per volum, %C er andelen kryssbinder av totalen.</Trap>
        <Trap title="Elektroforese = kromatografi" cite={`[${B2}, p. 130; ${PK}, slide 28]`}>Det er ingen mobil eller stasjonær fase i elektroforese, men soneelektroforese <em>kan sammenlignes</em> med kromatografi.</Trap>
        <Trap title="Temperatureffekt" cite={`[${B2}, p. 128]`}>Lavere viskositet ved høyere T gir høyere u etter ligningen. Bokas tekst sier det motsatte, så stol på ligningen og forklar.</Trap>
      </Section>
    </>
  )
}
