import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Box, Arrow, Label, Curve, Plot, Columns, V, tone } from '../components'

const G = 'Gasskromatografi m notater.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const FL = String.raw`\mathrm{mL/min}`

export const meta = {
  title: 'GC: bæregass og injeksjon',
  topic: 'gc',
  examWeight: { level: 'medium', note: 'H25 oppg. 4b (del av 12 p-case: split vs. splitless), H25 oppg. 3 (GLC, 2 p). H24 1(f) delvis (bæregassens strømningshastighet påvirker retensjonstid)' },
  examTasks: [
    'H2024: 1-serien GC (index: side 11–13)',
    'H2025: oppg. 4 (index: side 11–13)',
    'H2025 oppg. 4b (del av 12 p): hvorfor split-injeksjon brukes i analysen av heksan/etylacetat/metanol, og hva som skjer med kromatogrammet ved splitless med samme injeksjonsvolum.',
    'H2025 oppg. 3 (10 p totalt, 2 p hører hit): forklar «GLC».',
    'H2024 oppg. 1(f) (4 p, delvis): faktorer som påvirker retensjonstiden i GC. Bæregassens strømningshastighet er én av dem, og høyere hastighet gir kortere retensjonstid [LF eksamen H2024 IMAK2008.pdf, p. 6]. Resten av oppgaven er på side 12.',
  ],
  buildsOn: ['02-effektivitet-og-opplosning', '03-bandspredning-van-deemter'],
  usedIn: ['12-gc-kolonner-og-stasjonaerfaser', '13-gc-detektorer'],
  sources: [
    `[${G}, slide 1–5]`,
    `[${B1}, p. 3, 17–23] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Pensum.pdf, p. 1]',
    `[${E25}, oppg. 3, 4] / [${LF25}, oppg. 3, 4b]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(f)] / [${LF24}, p. 6]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Vekselvirker bæregassen med analyttene i GC?', a: `Nei. Bæregassen har ingen interaksjon med prøven og er bare transportmiddel [${G}, slide 1; ${B1}, p. 3].` },
    { id: 'p2', kind: 'pretest', q: 'Hvorfor kan man ikke injisere 1 µL væske rett inn i en kapillærkolonne uten split?', a: `1 µL væske blir ca. 1 mL gass, nesten hele kolonnevolumet, så det blir ingen separasjon [${G}, slide 3; ${B1}, p. 21].` },
    { id: 'p3', kind: 'pretest', q: 'Hvilken injeksjonsteknikk brukes for sporanalyse?', a: `Splitless, slik at hele prøven kommer inn på kolonnen [${B1}, p. 22].` },
    { id: 't1', q: 'Hvilke tre forurensninger må fjernes fra bæregassen, og hvorfor?', a: `Hydrokarboner, O₂ og H₂O. O₂ og H₂O ødelegger SF, og vann og hydrokarboner kan gi detektorproblemer [${G}, slide 1; ${B1}, p. 18].` },
    { id: 't2', q: 'Hvorfor kan H₂ gi kortest analysetid?', a: `Van Deemter-kurven er flatest, så den kan kjøres ved høy lineær hastighet med liten økning i $H$ [${B1}, p. 19; ${G}, slide 1–2].` },
    { id: 't3', q: 'Beskriv løsemiddeleffekten med egne ord.', a: `Ved lav starttemperatur kondenserer løsemiddelet som en film på kolonnetoppen og fungerer som ekstra SF der analyttene løses. Når temperaturen økes, fordamper løsemiddelet og analyttene samles i en smal sone før separasjonen [${G}, slide 5; ${B1}, p. 22].` },
    { id: 't4', q: 'Når brukes on-column-injeksjon, og hva er ulempene?', a: `Når analyttene er temperaturlabile. Ulempene er lav robusthet, vanskelig automatisering og at retention gap må byttes ofte ved komplekse prøver [${B1}, p. 22–23].` },
    { id: 't5', q: 'Hva er fordelen med en PTV-injektor?', a: `Injektoren kan varmes og kjøles raskt, så prøven kan injiseres kaldt (ingen diskriminering eller termisk nedbrytning) og oppkonsentreres. Den tillater store volumer [${G}, slide 4; ${B1}, p. 23].` },
  ],
  equations: [
    {
      id: 'split', label: 'Split ratio',
      tex: String.raw`\begin{gathered}\text{split ratio} = \frac{\va{F_{col}}}{\vb{F_{split}} + \va{F_{col}}} \approx \frac{\va{F_{col}}}{\vb{F_{split}}} \\ (\vb{F_{split}} \gg \va{F_{col}})\end{gathered}`,
      vars: [
        { sym: String.raw`\va{F_{col}}`, desc: 'volumetrisk gasstrøm gjennom kolonnen', unit: FL },
        { sym: String.raw`\vb{F_{split}}`, desc: 'volumetrisk gasstrøm ut gjennom splitventilen', unit: FL },
      ],
      note: '$F_{split}$ kan måles med såpebobleflowmeter. $F_{col}$ finnes fra $t_M$ og kolonnedimensjoner. Brukes split ratio 1:10–1:100.',
      cite: `[${B1}, p. 21–22]`,
      check: { status: 'verified', note: 'Bok p. 21 (PDF s. 37): split ratio = F_col/(F_split + F_col); p. 22: «Since F_split > F_col», split ratio = F_col/F_split. Boka skriver «>», innholdet «≫».' },
    },
    {
      id: 'tinj', label: 'Tommelfingerregel for injektortemperatur',
      tex: String.raw`\begin{gathered}T_{inj} \approx T_{b} + 50\,^\circ\text{C} \\ \text{(ellers } T_{kolonne} + 50\,^\circ\text{C)}\end{gathered}`,
      vars: [{ sym: 'T_b', desc: 'kokepunkt for prøvekomponentene', unit: String.raw`{}^\circ\mathrm{C}` }],
      cite: `[${B1}, p. 20]`,
      check: { status: 'mismatch', note: 'Bok p. 20 (PDF s. 36) gir regelen bare i ord, med kokepunkt skrevet B_p: «50 °C above the boiling point (B_p) … or 50 °C above the column temperature». Formelen og symbolet T_b er innholdets.' },
    },
  ],
}


/* GC instrument */
function Instrument() {
  return (
    <Svg w={460} h={260} label="GC-instrumentet">
      <rect x={10} y={40} width={40} height={110} rx={14} style={{ fill: `color-mix(in srgb, ${tone('muted')} 30%, var(--bg))`, stroke: tone('ink') }} />
      <Label x={6} y={170} anchor="start" size={11}>(1) Carrier gas</Label>
      <Label x={6} y={186} anchor="start" size={10}>+ flowregulator</Label>
      <Arrow x1={50} y1={70} x2={95} y2={70} />
      <Box x={95} y={50} w={90} h={40} label="(2) Injector" t="var-a" />
      <rect x={170} y={100} width={150} height={120} rx={8} style={{ fill: `color-mix(in srgb, ${tone('trap')} 8%, var(--bg))`, stroke: tone('trap'), strokeDasharray: '5 4' }} />
      <Label x={245} y={236} t="trap" size={11}>(3) Column oven</Label>
      <path d="M 200 160 a 45 30 0 1 0 90 0 a 45 30 0 1 0 -90 0 M 205 165 a 40 25 0 1 0 80 0" style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 2.5 }} />
      <Label x={245} y={164} size={11}>(4) kolonne</Label>
      <Arrow x1={140} y1={90} x2={200} y2={155} />
      <Arrow x1={290} y1={160} x2={340} y2={90} />
      <Box x={335} y={50} w={110} h={40} label="(5) Detector" t="var-c" />
      <Arrow x1={390} y1={90} x2={390} y2={130} />
      <Label x={390} y={146} size={11}>Waste</Label>
      <Arrow x1={445} y1={70} x2={445} y2={20} dashed />
      <Label x={440} y={14} anchor="end" size={11}>signal → PC</Label>
      <Label x={230} y={30} size={11}>injektor, ovn og detektor har hver sin temperaturkontroll</Label>
    </Svg>
  )
}

/* Van Deemter N2, He, H2 sketch */
function VDGass() {
  const X = (u) => 50 + ((u - 5) / 85) * 380, Y = (h) => 230 - ((h - 0.1) / 1.1) * 200
  const c = (A, B, C, t, lab) => {
    const pts = Array.from({ length: 50 }, (_, i) => { const u = 6 + (84 * i) / 49; return [X(u), Y(Math.min(1.2, A + B / u + C * u))] })
    return <g><Curve t={t} points={pts} /><Label x={X(88)} y={Y(Math.min(1.2, A + B / 88 + C * 88)) - 6} anchor="end" t={t} size={12}>{lab}</Label></g>
  }
  return (
    <Svg w={460} h={270} label="Van Deemter for N2, He og H2">
      <Arrow x1={50} y1={230} x2={440} y2={230} />
      <Arrow x1={50} y1={230} x2={50} y2={20} />
      {[10, 30, 50, 70, 90].map((u) => <Label key={u} x={X(u)} y={248} size={11}>{u}</Label>)}
      {[0.2, 0.6, 1.0].map((h) => <Label key={h} x={44} y={Y(h) + 4} anchor="end" size={11}>{String(h).replace('.', ',')}</Label>)}
      <Label x={440} y={266} anchor="end" size={12}>u (cm/s)</Label>
      <Label x={56} y={22} anchor="start" size={12}>HETP (mm)</Label>
      {c(0.02, 1.265, 0.01045, 'var-a', 'N₂')}
      {c(0.05, 2.75, 0.00568, 'var-b', 'He')}
      {c(0.05, 5.13, 0.00355, 'var-c', 'H₂')}
      <Label x={X(11)} y={Y(0.25) + 18} t="var-a" size={11}>~11</Label>
      <Label x={X(22)} y={Y(0.3) + 22} t="var-b" size={11}>~22</Label>
      <Label x={X(38)} y={Y(0.32) + 26} t="var-c" size={11}>~38</Label>
    </Svg>
  )
}

/* Split/splitless injector cross-section */
function Injektor({ splitless }) {
  return (
    <Svg w={300} h={300} label={splitless ? 'Splitless' : 'Split'}>
      <Label x={150} y={16} t={splitless ? 'var-e' : 'var-b'}>{splitless ? 'SPLITLESS' : 'SPLIT'}</Label>
      <rect x={110} y={30} width={80} height={20} rx={6} style={{ fill: tone('ink'), opacity: 0.7 }} />
      <Label x={200} y={44} anchor="start" size={11}>gummiseptum</Label>
      <line x1={150} y1={20} x2={150} y2={110} style={{ stroke: tone('muted'), strokeWidth: 2 }} />
      <rect x={120} y={50} width={60} height={170} style={{ fill: `color-mix(in srgb, ${tone('trap')} 12%, var(--bg))`, stroke: tone('ink') }} />
      <rect x={135} y={60} width={30} height={150} style={{ fill: `color-mix(in srgb, ${tone('definition')} 14%, var(--bg))`, stroke: tone('definition') }} />
      <Label x={150} y={140} size={10}>liner</Label>
      <Arrow x1={40} y1={70} x2={120} y2={70} />
      <Label x={10} y={62} anchor="start" size={11}>carrier gas in</Label>
      <Arrow x1={180} y1={60} x2={260} y2={60} />
      <Label x={295} y={80} anchor="end" size={10}>septum purge ~5 mL/min</Label>
      {splitless
        ? <><line x1={180} y1={200} x2={250} y2={200} style={{ stroke: tone('muted'), strokeWidth: 2, strokeDasharray: '4 3' }} /><Label x={295} y={192} anchor="end" t="var-e" size={10}>split outlet stengt</Label><Label x={295} y={216} anchor="end" t="var-e" size={10}>i «x» s</Label></>
        : <><Arrow x1={180} y1={200} x2={260} y2={200} t="trap" /><circle cx={235} cy={200} r={18} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2 }} /><Label x={295} y={230} anchor="end" t="trap" size={10}>split outlet ~50 mL/min</Label></>}
      <line x1={150} y1={210} x2={150} y2={280} style={{ stroke: tone('topic'), strokeWidth: 4 }} />
      <Arrow x1={150} y1={270} x2={150} y2={292} t="topic" />
      <Label x={160} y={268} anchor="start" size={10}>kolonne ~2 mL/min</Label>
    </Svg>
  )
}

/* Solvent effect in four steps */
function Losemiddeleffekt() {
  const step = (x, n, film, dots, lab) => (
    <g>
      <rect x={x} y={30} width={90} height={60} style={{ fill: 'none', stroke: tone('ink') }} />
      {film > 0 && <rect x={x + (90 - film)} y={78} width={film} height={12} style={{ fill: tone('intuition'), opacity: 0.6 }} />}
      {dots.map((dx, i) => <circle key={i} cx={x + dx} cy={74} r={3} style={{ fill: tone('var-e') }} />)}
      <Label x={x + 45} y={22} size={12}>({n})</Label>
      <Label x={x + 45} y={108} size={10}>{lab}</Label>
    </g>
  )
  const chrom = (y, wide, lab) => (
    <g>
      <line x1={20} y1={y} x2={440} y2={y} style={{ stroke: tone('muted') }} />
      {[250, 320].map((cx) => <Curve key={cx} t="topic" points={[[cx - (wide ? 30 : 8), y], [cx - (wide ? 10 : 3), y - 8], [cx, y - (wide ? 25 : 45)], [cx + (wide ? 10 : 3), y - 8], [cx + (wide ? 30 : 8), y]]} />)}
      <Label x={20} y={y - 30} anchor="start" size={12}>{lab}</Label>
      <Label x={250} y={y + 14} size={10}>C₁₁</Label>
      <Label x={320} y={y + 14} size={10}>C₁₂</Label>
    </g>
  )
  return (
    <Svg w={460} h={290} label="Løsemiddeleffekt i fire trinn">
      {step(10, 1, 90, [20, 35, 50, 65, 80], 'film = «ekstra SF»')}
      {step(125, 2, 50, [55, 65, 75], 'løsemiddel fordamper')}
      {step(240, 3, 12, [82, 84, 86], 'prøven samles')}
      {step(355, 4, 0, [40], 'normal kromatografi')}
      <Label x={230} y={140} size={12}>starttemperatur 115 °C:</Label>
      {chrom(200, true, 'n-heksan (kp 68 °C): brede topper')}
      {chrom(270, false, 'n-oktan (kp 125 °C): smale topper')}
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Gassen frakter, injektoren doserer">
        <MentalModel cite={`[${G}, slide 1–3; ${B1}, p. 3, 18–23]`}>
          I GC er mobilfasen en gass, og SF er nesten alltid en væske (GLC). Fast SF (GSC) er sjelden. Gassen er bare et inert transportmiddel uten interaksjon med prøven. Derfor er det SF og temperaturen som styrer separasjonen, og gassvalget handler om effektivitet, analysetid, sikkerhet og pris. Prøven må være (eller kunne bli) en gass og tåle temperaturen.{' '}
          Injektoren har to oppgaver: fordampe prøven og overføre en «riktig» mengde analytt til kolonnen. Fordi væske utvider seg ca. 1000 ganger ved fordamping og kapillærkolonner har lite volum, må mesteparten kastes (<V c="b">split</V>), eller så må prøven fokuseres på kolonnetoppen (splitless, on-column, PTV).
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="GC-oppsett" cite={`[${G}, slide 1; ${B1}, p. 18, Fig. 2.1]`}>(1) bæregass, (2) injektor, (3) kolonneovn, (4) kolonne, (5) detektor. Kolonneovn og kolonne er på side 12, detektorer på side 13.</Def>
            <Def term="GLC vs. GSC" cite={`[${B1}, p. 17; ${G}, slide 1; ${LF25}, oppg. 3]`}>GLC (gas–liquid) har en ikke-flyktig væske som SF, og separasjonen bygger på fordeling. GSC (gas–solid) har fast SF, bygger på adsorpsjon og brukes hovedsakelig for permanente gasser. Løsningsforslaget definerer GLC som GC der SF er en væske immobilisert på et fast bæremateriale.</Def>
          </div>
          <Diagram title="GC-instrumentet" cite={`[${G}, slide 1; ${B1}, p. 18, Fig. 2.1]`}>
            <Instrument />
          </Diagram>
        </Columns>
        <Def term="Krav til bæregass" cite={`[${G}, slide 1; ${B1}, p. 18]`}>Ingen interaksjon med prøven, inert og ren. Hydrokarboner, O₂ og H₂O må fjernes, fordi O₂ og H₂O ødelegger SF. Adsorbentrør med trekull og molekylsikt fjerner hydrokarboner og vann, og en katalysator fjerner O₂, som kan bryte ned SF og gi ustabil baselinje med ECD.</Def>
        <Def term="Renhet («5.0»-notasjon)" cite={`[${G}, slide 1]`}>He 5.0 → 99,999 %, 4.5 → 99,995 %, 4.0 → 99,99 %. Ved lavere renhet kan O₂-, H₂O- og HC-filtre brukes.</Def>

        <Columns>
          <div>
            <Def term="Valg av bæregass" cite={`[${G}, slide 2; ${B1}, p. 18–19]`}><strong>He</strong>: god effektivitet, inert. Ulempe: dyrt. Ofte foretrukket fordi den gir god effektivitet selv ved ganske høy flow. <strong>H₂</strong>: god effektivitet, lett tilgjengelig, kortest analysetid. Ulempe: eksplosjonsfare, kan reagere med prøven, metaller og SF. <strong>N₂</strong>: best effektivitet (marginalt lavest H), billig. Ulempe: veldig lav optimal flow og sterk økning av H ved høyere flow, så lang analysetid.</Def>
            <Def term="Van Deemter for bæregasser" cite={`[${G}, slide 1; ${B1}, p. 19, Fig. 2.2]`}>{'N₂ har laveste minimum, men ved lav $u$ (~10–12 cm/s), og kurven stiger bratt. He og H₂ har flatere kurver, med optimum ved høyere $u$ (~20–40 cm/s).'}</Def>
            <Def term="Eksempel, pesticider med GC-ECD" cite={`[${G}, slide 2]`}>He 30 cm/s gir 19 min. H₂ 45 cm/s gir 13 min. N₂ 12 cm/s gir 48,5 min, med tilsvarende separasjon.</Def>
          </div>
          <Diagram title="Van Deemter for N₂, He og H₂" caption="Kurveskisse etter Fig. 2.2: N₂ dypt minimum ved ca. 10–12 cm/s og bratt stigning; He minimum ved ca. 20–25 cm/s; H₂ flatest, minimum ved ca. 35–40 cm/s. H₂ tåler høy $u$ med lite effektivitetstap → kortest analysetid." cite={`[${G}, slide 1; ${B1}, p. 19, Fig. 2.2]`}>
            <VDGass />
          </Diagram>
        </Columns>
        <Def term="Flow-kontroll" cite={`[${B1}, p. 19]`}>Konstant gasstrøm er nødvendig. Isotermt kan konstant innløpstrykk brukes. Med temperaturprogram trengs en flowregulator, fordi gassens viskositet endres med T.</Def>
        <Def term="Krav til prøven" cite={`[${G}, slide 3; ${B1}, p. 17]`}>Den må være en gass (ha et damptrykk), være termisk stabil og ha litt affinitet til SF. Damptrykket kan økes med derivatisering.</Def>
        <Def term="Injektorens to oppgaver" cite={`[${G}, slide 3]`}>(1) fordampe prøven, (2) overføre en «riktig» mengde analytt til kolonnen.</Def>
        <Def term="Utvidelse ved fordamping" cite={`[${G}, slide 3; ${B1}, p. 20–21]`}>1 µL væske → ca. 1 mL gass, som gir problemer i kapillærkolonner. Boka: ca. 1000 ganger større volum, og 1–2 µL blir 1–2 mL gass, mens en 30 m × 0,32 mm kolonne har totalvolum ca. 2,4 mL.</Def>
        <Def term="Injektortemperatur" cite={`[${B1}, p. 20]`}>Høyere enn kolonnen, nok til rask fordamping. Tommelfingerregel: 50 °C over kokepunktet hvis det er kjent, ellers 50 °C over kolonnetemperaturen. Injeksjonstemperaturen bestemmer valg av septummateriale.</Def>
        <Def term="Pakket-kolonne-injektor (fordampningsinjektor)" cite={`[${B1}, p. 20]`}>2–10 µL injiseres gjennom septum rett inn i kolonneinnløpet eller en liner i en oppvarmet metallblokk.</Def>
        <Def term="Liner" cite={`[${G}, slide 4; ${B1}, p. 21]`}>Inert (glass) overflate og lett å skifte. Krymper det interne volumet («dødvolumet») i injektoren og begrenser båndspredning. Kan være delvis fylt med kvartsull.</Def>

        <Columns>
          <div>
            <Def term="Split-injeksjon" cite={`[${G}, slide 3; ${B1}, p. 21–22; ${LF25}, oppg. 4b]`}>Prøven fordampes i lineren, og bare en del går til kolonnen, mens resten går til avfall gjennom splitventilen. Split ratio f.eks. 1:50, dvs. 1 del til kolonnen og 50 deler til «waste». Split ratio 1:10 til 1:100. Brukes når analyttkonsentrasjonen er høy nok. Enkel, og kan brukes isotermt og med temperaturprogram. Kan ikke brukes for lave konsentrasjoner. I H25-casen brukes split for å redusere prøvemengden på kolonnen, noe som gir smalere topper, mindre overbelastning og bedre separasjon.</Def>
            <Def term="Splitless-injeksjon" cite={`[${G}, slide 3; ${B1}, p. 22]`}>Injeksjon med stengt split, som åpnes etter «x» sekunder. Kan benyttes for sporanalyser. Hele prøven (1–2 mL gass) overføres. Kolonneinnløpet holdes 20–50 °C under løsemiddelets kokepunkt, så løsemiddelet kondenserer som en tykk film. Overføringen tar ca. 2 min ved 2 µL og 1 mL/min. Splitventilen åpnes etterpå for å skylle ut rester. Kan bare brukes med temperaturprogram. Alternativ: «cold trapping», der kolonnen kjøles &gt; 150 °C under prøvekomponentenes kokepunkt.</Def>
          </div>
          <Diagram title="Split/splitless-injektor" caption="Sprøyte gjennom gummiseptum → oppvarmet blokk med glass-liner → kolonne ut i bunnen. I splitless er split outlet stengt i «x» sekunder." cite={`[${G}, slide 3; ${B1}, p. 21, Fig. 2.4]`}>
            <Columns>
              <Injektor />
              <Injektor splitless />
            </Columns>
          </Diagram>
        </Columns>

        <Columns>
          <Def term="«Solvent effects» (løsemiddeleffekt)" cite={`[${G}, slide 5; ${B1}, p. 22]`}>En ekstra effekt som hjelper injeksjonen. Ved lav starttemperatur kondenseres løsemiddel og prøve til en «ekstra» SF. Ved økt temperatur fordamper løsemiddelet, og prøven oppkonsentreres. Den vandrer så videre ut som ved «normal» kromatografi. Kombineres med splitless, PTV og on-column-injeksjon. Krever en homogen løsemiddelfilm, dvs. løsemiddelets polaritet må passe SF. Ellers dannes dråper og båndspredning, noe som kan unngås med retention gap. Forelesningseksempel: med starttemperatur 115 °C gir n-heksan (kp 68 °C) som løsemiddel brede n-C₁₁/C₁₂-topper, mens n-oktan (kp 125 °C) gir smale, fokuserte topper.</Def>
          <Diagram title="Løsemiddeleffekt i fire trinn" cite={`[${G}, slide 5]`}>
            <Losemiddeleffekt />
          </Diagram>
        </Columns>
        <Def term="On-column-injeksjon" cite={`[${G}, slide 4; ${B1}, p. 22–23]`}>Ingen fordampningskammer, bare væske på kolonnen. Ellers likt PTV-oppsettet. Brukes når analyttene er temperaturlabile. Væsken føres ved romtemperatur rett inn i kolonneinnløpet eller via retention gap, med stoppet gasstrøm. Fordeler: repeterbar og uten diskriminering, godt egnet for høytkokende forbindelser. Ulemper: lite robust, vanskelig å automatisere, og prøven må ikke inneholde ikke-flyktige komponenter.</Def>
        <Def term="Retention gap" cite={`[${B1}, p. 23, Info-box 2.1]`}>Et stykke fused silica-kapillær med eller uten SF, som gir svært lav eller ingen retensjon.</Def>
        <Def term="PTV-injektor (Programmable Temperature Vaporising)" cite={`[${G}, slide 4; ${B1}, p. 23]`}>Oppvarming og nedkjøling av injektoren. Ellers samme maskinvare som split/splitless. Gir injeksjon på kald kolonne og mulighet for oppkonsentrering av prøven. Liner med lav termisk masse. Prøven introduseres ved lav temperatur, uten diskriminering og termisk nedbrytning. Muliggjør store volumer (kald splitless solvent vent, opptil 250 µL). Ulempen er tap av flyktige forbindelser.</Def>
        <Def term="Ikke pensum" cite={`[Pensum.pdf; ${B1}, p. 23–24]`}>Headspace-teknikker.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="split" />
        <Plot
          title="Hvor mye havner på kolonnen?"
          caption="$V_{kolonne} \approx V_{inj}\cdot F_{col}/(F_{split}+F_{col})$, med split ratio 1:n (1 del til kolonnen, n til waste). Startverdi $V_{inj}$ = 1,0 µL fra H25 oppg. 4; den stiplede linjen viser 1:20. n = 0 tilsvarer splitless (alt på kolonnen). Fordi væske blir ca. 1000 ganger mer gass, er y-verdien i µL væske samtidig omtrent gassvolumet i mL. Stiplet vannrett: kolonnevolumet ca. 2,4 mL (30 m × 0,32 mm). Boka bruker n = 10–100."
          cite={`[${B1}, p. 20–22; ${E25}, oppg. 4]`}
          x={{ min: 0, max: 100, label: 'n (split ratio 1:n)' }}
          y={{ label: 'µL væske ≈ mL gass', min: 0, max: 2.6 }}
          params={[{ key: 'v', label: '$V_{inj}$', min: 0.5, max: 2, step: 0.1, value: 1, unit: 'µL' }]}
          series={[{ key: 'vc', label: 'på kolonnen', t: 'var-a', fn: (n, p) => p.v / (n + 1) }]}
          marks={[{ x: 20, label: '1:20' }, { y: 2.4, label: 'kolonnevolum 2,4 mL' }]}
        />
        <Eq id="tinj" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 4b: split vs. splitless"
          given="Oppsett: heksan, etylacetat og metanol på 30 m × 0,25 mm × 0,25 µm dimetylpolysiloksan. He 1,2 mL/min, split 1:20, 1,0 µL, FID."
          steps={[
            { title: 'Hvorfor split?', body: `Prøven er en blanding av rene løsemidler, altså svært høy konsentrasjon, ikke sporanalyse. Split ratio 1:20 betyr at ca. 1 del av 21 går til kolonnen [${B1}, p. 21–22].` },
            { body: 'Mengden på kolonnen blir ca. 1,0 µL / 21 ≈ 0,05 µL. Det gir smalere topper, mindre overbelastning og bedre separasjon.' },
            { title: 'Bytte til splitless med samme volum:', body: 'Hele 1,0 µL (~1 mL gass) går inn på kolonnen.' },
            { title: 'Konsekvens:', body: 'Kolonneoverbelastning, fronting eller brede topper og mulig tap av oppløsning.' },
            { title: 'Kobling til boka:', body: `Splitless er laget for sporanalyse og krever temperaturprogram med løsemiddeleffekt eller cold trapping. Det er ikke en fordel for konsentrerte prøver [${B1}, p. 22].` },
          ]}
          cite={`[${E25}, oppg. 4; ${LF25}, oppg. 4b]`}
        />
        <FadedExample
          title="Split-ratio fra flowene i bokas injektorfigur"
          given="Gitt: splitter outlet 50 mL/min, kolonne 2 mL/min, septumspyling 5 mL/min. Injeksjon 1 µL væske."
          steps={[
            { body: 'Septumspylingen går ikke via lineren til kolonnen, så den er ikke med i split ratio.' },
            { title: 'Eksakt:', body: 'split ratio = $F_{col}/(F_{split}+F_{col}) = 2/(50+2) = 2/52$.' },
            { title: 'Hva blir den forenklede formen $F_{col}/F_{split}$?', body: '2/50 = 1:25.', hidden: true },
            { title: 'Hvor mye væske havner på kolonnen?', body: 'ca. 1 µL × 2/52 ≈ 0,04 µL.', hidden: true },
            { title: 'Ca. hvor stort gassvolum er det, og er det nå trygt mot kolonnevolumet (ca. 2,4 mL)?', body: `ca. 0,04 mL gass, langt under kolonnevolumet [${B1}, p. 20–21].`, hidden: true },
            { title: 'Prøven inneholder spormengder pesticider. Hvilken injeksjonsteknikk bør du heller velge, og hva krever den av ovnsprogrammet?', body: 'Splitless, som krever temperaturprogram.', hidden: true },
          ]}
          cite={`[${B1}, p. 21–22, Fig. 2.4]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Splitless er «bedre» fordi alt går inn" cite={`[${LF25}, oppg. 4b; ${B1}, p. 22]`}>Bare for sporanalyse. For konsentrerte prøver gir det overbelastning og brede topper eller fronting.</Trap>
        <Trap title="Bæregassen bestemmer selektiviteten" cite={`[${G}, slide 1; ${B1}, p. 3]`}>Nei. Den er inert og har ingen interaksjon med prøven. Gassen påvirker effektivitet og analysetid, ikke selektivitet.</Trap>
        <Trap title="N₂ er dårligst fordi effektiviteten er dårligst" cite={`[${B1}, p. 18–19]`}>{'Feil. N₂ har marginalt laveste $H$, men bare ved svært lav flow. Problemet er lang analysetid.'}</Trap>
        <Trap title="Splitless isotermt" cite={`[${B1}, p. 22]`}>Går ikke. Splitless krever temperaturprogram.</Trap>
        <Trap title="Split ratio feil vei" cite={`[${G}, slide 3]`}>1:50 betyr 1 del til kolonnen og 50 til waste, ikke omvendt.</Trap>
        <Trap title="Løsemiddeleffekten med feil løsemiddel" cite={`[${B1}, p. 22; ${G}, slide 5]`}>Krever lav starttemperatur under løsemiddelets kokepunkt og et løsemiddel med polaritet som passer SF.</Trap>
        <Trap title="On-column for alt" cite={`[${B1}, p. 22–23]`}>Bare for temperaturlabile analytter og rene prøver uten ikke-flyktige komponenter.</Trap>
      </Section>
    </>
  )
}
