import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Arrow, Label, Plot, Columns, V, tone } from '../components'

const PK = 'Proteinkarakterisering del 1 m notater.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const OV = 'Øving elektroforese med LF.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const PRO = 'Prosjektoppgave IMAK2008 H26.pdf'

export const meta = {
  title: 'SDS-PAGE',
  topic: 'elektroforese',
  examWeight: { level: 'medium', note: 'H24 2(b) (4 p, fire flervalg om SDS og stacking-gel). H25 oppg. 9 delvis («denaturering og utfolding» → SDS-PAGE). Øving oppg. 1' },
  examTasks: [
    'H2024: 2(b) (index: side 20)',
    'H2025: oppg. 9 (kombiner utsagn og metode) (index: side 20–21, 23–24, 26)',
    'H2024 oppg. 2(b) (4 p): fire flervalg. Viktigste egenskap til SDS, stacking-gelens rolle, hvorfor pH-forskjellen er viktig, og korrekt utsagn om separasjonsgelen.',
    'H2025 oppg. 9 (5 p totalt, automatisk rettet, ingen fasit i LF): utsagnet «Involverer denaturering og utfolding av proteinene» → SDS-PAGE [UTLEDET fra slide 39 — ingen fasit].',
  ],
  buildsOn: ['19-elektroforese-teori-og-geler'],
  usedIn: ['21-ief-og-2d', '22-geldeteksjon-og-western-blot'],
  sources: [
    `[${PK}, slide 34, 36, 38–44]`,
    `[${B2}, p. 131, 134] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[${OV}, p. 1]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 2(b)] / [${LF24}, p. 11]`,
    '[IMAK2008 eksamen H2025.pdf, oppg. 9]',
    `[${PRO}, p. 1]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvorfor separeres proteiner etter størrelse, og ikke etter ladning, i SDS-PAGE?', a: `SDS maskerer proteinets egen ladning og gir alle proteinene omtrent lik ladning per masse, så bare silingseffekten i gelen skiller dem [${PK}, slide 39; ${B2}, p. 134].` },
    { id: 'p2', kind: 'pretest', q: 'I hvilken retning vandrer proteinene i SDS-PAGE?', a: `Mot anoden (+) i bunnen av gelen, fordi SDS-proteinkompleksene er negativt ladet [${PK}, slide 40].` },
    { id: 'p3', kind: 'pretest', q: 'Hva er oppgaven til stacking-gelen?', a: `Å samle proteinene i smale bånd før de går inn i separasjonsgelen [${LF24}, p. 11].` },
    { id: 't1', q: 'Et bånd ligger 30 mm fra toppen, og fargefronten er 67 mm. Bruk forelesningens standardkurve til å finne Mw.', a: `$R_f$ = 0,448. log Mw = −1,9944·0,448 + 2,7824 = 1,889, så Mw ≈ 77 kD [${PK}, slide 42].` },
    { id: 't2', q: 'Hvorfor er SDS-proteinkompleksene stive staver, og hvorfor er det viktig?', a: `SDS denaturerer og folder ut proteinet. Da er formen lik for alle, og vandringen avhenger bare av størrelse [${PK}, slide 39].` },
    { id: 't3', q: 'Hvilke tre faktorer bestemmer vandringshastigheten i PAGE?', a: `Molekylstørrelsen, spenningen over gelen, og porestørrelse og gelkonsentrasjon [${PK}, slide 38].` },
    { id: 't4', q: 'Hvordan unngår du prøvedegradering?', a: `Ferskt lysat, prøvene på is til de kokes, og protease- og fosfataseinhibitorer i loading buffer [${PK}, slide 44].` },
    { id: 't5', q: 'Hvorfor foretrekkes MS fremfor SDS-PAGE for molvekt, og hvorfor brukes SDS-PAGE likevel?', a: `MS er langt mer presis (SDS-PAGE har 5–10 % usikkerhet). SDS-PAGE er enkel og billig, og gir info om renhet og subenheter [${OV}, p. 1; ${PK}, slide 41].` },
  ],
  equations: [
    {
      id: 'rf', label: 'Relativ vandringslengde',
      tex: String.raw`\va{R_f} = \frac{\text{avstand til bånd (vandringslengde)}}{\text{avstand til fargefront (vandringslengde)}}`,
      vars: [{ sym: String.raw`\va{R_f}`, desc: 'relativ vandringslengde', unit: String.raw`\text{dimensjonsløs (0–1)}` }],
      note: 'Begge avstander måles fra brønnen (toppen av resolving-gelen).',
      cite: `[${PK}, slide 41–42]`,
      check: { status: 'verified', note: 'Slide 41 identisk.' },
    },
    {
      id: 'mw', label: 'Standardkurve for molvekt',
      tex: String.raw`\log \vb{M_w} = m\,\va{R_f} + b`,
      vars: [
        { sym: String.raw`\vb{M_w}`, desc: 'molvekt', unit: String.raw`\mathrm{kD}` },
        { sym: 'm,\\ b', desc: 'stigningstall og konstantledd fra standardene', unit: '–' },
      ],
      note: 'Gjelder i det lineære området, med nøyaktighet 5–10 %.',
      cite: `[${PK}, slide 41–42]`,
      check: { status: 'verified', note: 'Slide 42: «log Mw = m Rf + b» (håndskrevet) og y = −1,9944x + 2,7824, r² = 0,997.' },
    },
    {
      id: 'tc', label: 'Gelens porestørrelse',
      tex: String.raw`\%T = \frac{a+b}{m}\times 100\,\% \qquad \%C = \frac{b}{a+b}\times 100\,\%`,
      vars: [],
      note: 'Se side 19.',
      cite: `[${PK}, slide 34]`,
      check: { status: 'verified', note: 'Som side 19: bok del 2 p. 130 (PDF s. 46).' },
    },
  ],
}

/* Discontinuous SDS-PAGE: six panels A–F */
function Diskontinuerlig() {
  const panels = 'ABCDEF'.split('')
  const proteins = [
    [[0, 30], [0, 34], [0, 38]],
    [[0, 92], [0, 96], [0, 100]],
    [[0, 112], [0, 114], [0, 116]],
    [[0, 128], [0, 130], [0, 132]],
    [[0, 160], [0, 180], [0, 205]],
    [[0, 175], [0, 210], [0, 250]],
  ]
  return (
    <Svg w={460} h={320} label="Diskontinuerlig SDS-PAGE">
      {panels.map((p, i) => {
        const x = 20 + i * 72
        return (
          <g key={p}>
            <rect x={x} y={20} width={50} height={100} style={{ fill: `color-mix(in srgb, ${tone('var-c')} 10%, var(--bg))`, stroke: tone('ink') }} />
            <rect x={x} y={120} width={50} height={160} style={{ fill: `color-mix(in srgb, ${tone('var-c')} 28%, var(--bg))`, stroke: tone('ink') }} />
            {i === 1 && <><Label x={x + 25} y={86} size={9} t="var-a">Cl⁻</Label><Label x={x + 25} y={114} size={9} t="var-e">Gly⁻</Label></>}
            {proteins[i].map(([, y], k) => <rect key={k} x={x + 10} y={y} width={30} height={3} style={{ fill: tone(['var-a', 'var-b', 'var-d'][k]) }} />)}
            <Label x={x + 25} y={298} size={12}>{p}</Label>
          </g>
        )
      })}
      <circle cx={117} cy={96} r={18} style={{ fill: 'none', stroke: tone('intuition'), strokeWidth: 2 }} />
      <Label x={10} y={14} anchor="start" size={10}>katode (−)</Label>
      <Label x={10} y={316} anchor="start" size={10}>anode (+)</Label>
      <Label x={450} y={70} anchor="end" size={9}>stacking 4 %T, pH 6,8</Label>
      <Label x={450} y={316} anchor="end" size={9}>resolving 7,5–15 %T, pH 8,8</Label>
    </Svg>
  )
}

/* SDS treatment */
function SDSBehandling() {
  return (
    <Svg w={460} h={210} label="SDS-behandling av et protein">
      <path d="M 30 100 q 20 -40 40 0 q 20 40 40 0 q -10 -30 -30 -10" style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 3 }} />
      <Label x={60} y={50} size={10}>S–S</Label>
      <Label x={60} y={150} size={10}>+ / − blandet</Label>
      <Arrow x1={120} y1={100} x2={170} y2={100} />
      <Label x={145} y={86} size={9}>merkapto-</Label>
      <Label x={145} y={120} size={9}>etanol</Label>
      <path d="M 180 100 q 15 -20 30 0 q 15 20 30 0" style={{ fill: 'none', stroke: tone('topic'), strokeWidth: 3 }} />
      <Arrow x1={250} y1={100} x2={300} y2={100} />
      <Label x={275} y={88} size={9}>SDS</Label>
      <line x1={310} y1={100} x2={450} y2={100} style={{ stroke: tone('topic'), strokeWidth: 4 }} />
      {Array.from({ length: 10 }, (_, i) => <Label key={i} x={315 + i * 14} y={i % 2 ? 122 : 88} size={10} t="var-a">−</Label>)}
      <Label x={380} y={150} size={10}>stiv, utfoldet stav</Label>
      <Label x={230} y={194} size={12} t="var-a">1,4 g SDS / g protein → lik ladning per masse</Label>
    </Svg>
  )
}

/* Gel with ladder */
function Gel() {
  const ladder = [250, 150, 100, 75, 50, 37, 25, 20, 15, 10]
  const y = (mw) => 30 + ((2.7824 - Math.log10(mw)) / 1.9944) * 200
  return (
    <Svg w={380} h={270} label="Gel med standardstige">
      <rect x={40} y={30} width={200} height={200} style={{ fill: `color-mix(in srgb, ${tone('definition')} 8%, var(--bg))`, stroke: tone('ink') }} />
      {ladder.map((mw) => y(mw) < 230 && y(mw) > 30 && <g key={mw}><rect x={50} y={y(mw)} width={40} height={3} style={{ fill: tone('var-b') }} /><Label x={36} y={y(mw) + 4} anchor="end" size={10}>{mw}</Label></g>)}
      <rect x={140} y={30 + (45 / 67) * 200} width={40} height={4} style={{ fill: tone('trap') }} />
      <Label x={250} y={30 + (45 / 67) * 200 + 4} anchor="start" size={10} t="trap">ukjent (45 mm)</Label>
      <line x1={40} y1={230} x2={240} y2={230} style={{ stroke: tone('var-e'), strokeWidth: 2, strokeDasharray: '4 3' }} />
      <Label x={250} y={234} anchor="start" size={10} t="var-e">fargefront (67 mm)</Label>
      <Label x={250} y={34} anchor="start" size={10}>topp resolving</Label>
      <Label x={70} y={252} size={10}>kD</Label>
    </Svg>
  )
}

/* Gradient vs stacking+resolving */
function Gradientgel() {
  return (
    <Svg w={300} h={240} label="Gradientgel vs. stacking + resolving">
      <defs>
        <linearGradient id="grad20" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--var-c)" stopOpacity="0.1" />
          <stop offset="1" stopColor="var(--var-c)" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <rect x={30} y={30} width={90} height={180} style={{ fill: 'url(#grad20)', stroke: tone('ink') }} />
      <Label x={75} y={22} size={11}>A: gradient</Label>
      <Label x={75} y={46} size={10}>4 %</Label>
      <Label x={75} y={204} size={10}>15 %</Label>
      <rect x={170} y={30} width={90} height={50} style={{ fill: tone('var-c'), opacity: 0.12, stroke: tone('ink') }} />
      <rect x={170} y={80} width={90} height={130} style={{ fill: tone('var-c'), opacity: 0.45, stroke: tone('ink') }} />
      <Label x={215} y={22} size={11}>B</Label>
      <Label x={215} y={52} size={9}>stacking 4 %</Label>
      <Label x={215} y={66} size={9}>pH 6,8</Label>
      <Label x={215} y={140} size={9}>resolving 15 %</Label>
      <Label x={215} y={154} size={9}>pH 8,8</Label>
    </Svg>
  )
}

const mwOf = (d) => 10 ** (-1.9944 * (d / 67) + 2.7824)

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Samme form, samme ladning per masse — bare størrelsen igjen">
        <MentalModel cite={`[${PK}, slide 36, 39–42; ${B2}, p. 134; ${LF24}, p. 11]`}>
          Et protein har både egen ladning og egen form, som begge påvirker hvor fort det vandrer. SDS-PAGE fjerner begge deler. Merkaptoetanol bryter disulfidbindingene. SDS (et negativt ladet detergent) denaturerer proteinet til en stiv polypeptidstav og binder seg i et fast forhold (1,4 g SDS per g protein).{' '}
          Alle proteinene får da samme ladning per masse og samme form. Når de dras mot anoden gjennom polyakrylamidgelen, er det bare <V c="b">størrelsen</V> som teller: små proteiner slipper lettere gjennom porene og kommer lengst. For å få skarpe bånd brukes et diskontinuerlig system. En stacking-gel med store porer og lav pH lager en ionegradient som presser proteinene sammen til en tynn sone, før de separeres i resolving-gelen med små porer og høyere pH. Molekylvekten finnes fra en standardkurve av log Mw mot <V c="a">relativ vandringslengde</V>.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="SDS-PAGE" cite={`[${B2}, p. 134]`}>Natriumdodecylsulfat–polyakrylamid-gelelektroforese. Mye brukt for proteinseparasjon.</Def>
        <Columns>
          <div>
            <Def term="SDS sin oppgave" cite={`[${PK}, slide 39]`}>Proteinene blir fullstendig denaturert, folder seg ut til stive polypeptidstaver og deles opp i separate subenheter. Gir proteinet en negativ ladning, dvs. maskerer den opprinnelige ladningen. Gir lik «ladning til masse»-fordeling for alle proteinene: SDS bindes med 1,4 g per g protein, ca. 1 molekyl SDS per 2 aminosyrer. Proteinene separeres derfor etter størrelse i stedet for ladning.</Def>
            <Def term="Merkaptoetanol og SDS (bok)" cite={`[${B2}, p. 134]`}>Proteinene denatureres først av 2-merkaptoetanol, som bryter disulfidbindingene. SDS binder til polypeptidkjeden ved hydrofobe interaksjoner. Komplekser med tilnærmet lik ladning/størrelse vandrer med en hastighet som bare avhenger av størrelse, pga. silingseffekten.</Def>
            <Def term="Viktigste egenskap til SDS (H24 2(b))" cite={`[${LF24}, p. 11]`}>Det gir proteinene en negativ ladning proporsjonal med størrelsen.</Def>
          </div>
          <Diagram title="SDS-behandling av et protein" cite={`[${PK}, slide 39; ${B2}, p. 134]`}><SDSBehandling /></Diagram>
        </Columns>
        <Def term="Oppsett" cite={`[${PK}, slide 40]`}>Vertikalt system. Proteinene avsettes på toppen av en polyakrylamidgel med katode (−) øverst og anode (+) nederst. De negativt ladde proteinene vandrer mot anoden med en hastighet som er den inverse av størrelsen, dvs. de minste går fortest. Etterpå farges gelen, f.eks. med Coomassie brilliant blue eller sølvnitrat (se side 22).</Def>
        <Columns>
          <div>
            <Def term="Diskontinuerlig buffersystem" cite={`[${PK}, slide 36, 38]`}><strong>Stacking-gel</strong>: store porer (f.eks. 4 %T), pH 6,8. Konsentrerer prøven. <strong>Resolving-gel (separasjonsgel)</strong>: små porer (f.eks. 7,5–15 %T), pH 8,8. Separerer proteinene. Cl⁻ er ledende ioner og glysinat (Gly⁻) etterfølgende ioner. De danner en «sandwich» med proteinene imellom. I stacking-gelen samles proteinene i et tynt bånd mellom Cl⁻ og Gly⁻, og i resolving-gelen separeres de. Alternativ: gradientgel, f.eks. 4–15 %, med stacking-gel (4 %) over en resolving-gel (15 %).</Def>
            <Def term="Stacking-gelens rolle (H24 2(b))" cite={`[${LF24}, p. 11]`}>Samle proteinene i smale bånd før de går inn i separasjonsgelen.</Def>
            <Def term="pH-forskjellen mellom stacking- og separasjonsgel (H24 2(b))" cite={`[${LF24}, p. 11]`}>Skaper en ionisk gradient som konsentrerer proteinene før separasjon.</Def>
            <Def term="Separasjonsgelen (H24 2(b))" cite={`[${LF24}, p. 11]`}>Har høyere akrylamidkonsentrasjon enn stacking-gelen.</Def>
          </div>
          <Diagram title="Diskontinuerlig SDS-PAGE: stacking → resolving" caption="A: prøve i brønn. B: Cl⁻ foran og Gly⁻ bak, proteinene presset sammen (grønn sirkel: konsentrering). C–D: tynt bånd ved overgangen. E–F: båndene separerer i resolving-gelen." cite={`[${PK}, slide 36]`}><Diskontinuerlig /></Diagram>
        </Columns>
        <Columns>
          <Def term="Hvorfor ulik porestørrelse?" cite={`[${PK}, slide 36; ${B2}, p. 131]`}>Store porer i stacking-gelen gjør at proteinene ikke separeres der, men konsentreres. Små porer i resolving-gelen gir separasjon etter størrelse. Boka: en diskontinuitet i gel eller pH konsentrerer startbåndet og gir bedre effektivitet og oppløsning.</Def>
          <Diagram title="Gradientgel vs. stacking + resolving" cite={`[${PK}, slide 38]`}><Gradientgel /></Diagram>
        </Columns>
        <Def term="Vandringshastigheten avhenger av" cite={`[${PK}, slide 38]`}>(1) størrelsen til molekylene, (2) spenningen over gelen, (3) porestørrelse og konsentrasjon av gelmateriale.</Def>
        <Columns>
          <div>
            <Def term="Molvekt og kvantitet" cite={`[${PK}, slide 41]`}>Resultater fra PAGE kan brukes til å bestemme både størrelse (molvekt) og kvantitet. Nøyaktigheten for molvekt er 5–10 %. For nøyaktig molvekt bør betingelsene gi et lineært forhold mellom log Mw og migrering innenfor det forventede Mw-området.</Def>
            <Def term="Relativ vandringslengde ($R_f$)" cite={`[${PK}, slide 41–42]`}>{'Avstand fra brønn til bånd delt på avstand til fargefronten. Standardkurven er $\\log M_w = m R_f + b$.'}</Def>
          </div>
          <Diagram title="Mw-bestemmelse fra gel" caption="Standardstige 250 … 10 kD, ukjent bånd 45 mm, fargefront 67 mm. Båndposisjonene er tegnet etter standardkurven y = −1,9944x + 2,7824." cite={`[${PK}, slide 42]`}><Gel /></Diagram>
        </Columns>
        <Def term="Hva SDS-PAGE gir og ikke gir" cite={`[${OV}, p. 1]`}>Info om molvekt (omtrentlig) og renhet, og kan også gi info om antall subenheter. Kan ikke si noe om identiteten til proteinet, bare tilstedeværelse. MS gir langt mer presis molvekt.</Def>
        <Def term="Troubleshooting" cite={`[${PK}, slide 44]`}>Overlastet prøve: sett mindre proteinmengde (konsentrasjon) i brønnene. For rask migrering: senk spenningen. For varm: senk temperaturen (kaldere rom). Prøvedegradering: bruk ferskt lysat, hold prøvene på is til buffer tilsettes og de skal kokes, og bruk alltid protease- og fosfataseinhibitorer i loading buffer.</Def>
        <Def term="Arbeidsflyt" cite={`[${PK}, slide 43]`}>metodevalg → prøveopparbeiding → gel- og bufferforberedelse → kjøre elektroforese → deteksjon og analyse.</Def>
        <Def term="I prosjektet" cite={`[${PRO}, p. 1]`}>Proteinet (4–150 kDa) skal identifiseres bl.a. med elektroforese. SDS-PAGE etter SEC gir molvekt.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="rf" />
        <Eq id="mw" />
        <Plot
          title="Molvekt fra båndavstand"
          caption="Standardkurve fra forelesningen: $\log M_w = -1{,}9944 R_f + 2{,}7824$, med $R_f$ = avstand/67 mm (fargefront). Hold musen over kurven for Mw ved en gitt avstand. Stiplet: $R_f$ = 0,2 (13,4 mm) og 0,9 (60,3 mm) — utenfor dette ligger man utenfor standardene (ekstrapolering). Slideren markerer et bånd (start 45 mm → ca. 27,7 kD)."
          cite={`[${PK}, slide 42]`}
          x={{ min: 0, max: 67, label: 'båndavstand (mm)' }}
          y={{ label: 'Mw (kD)', log: true, min: 5, max: 700 }}
          params={[{ key: 'd', label: 'bånd', min: 0, max: 67, step: 0.5, value: 45, unit: 'mm' }]}
          series={[
            { key: 'mw', label: 'standardkurve', t: 'var-b', fn: (d) => mwOf(d) },
            { key: 'b', label: 'Mw ved valgt bånd', t: 'trap', fn: (d, p) => mwOf(p.d) },
          ]}
          marks={[{ x: 13.4, label: 'Rf 0,2' }, { x: 60.3, label: 'Rf 0,9' }]}
        />
        <Eq id="tc" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="Molvekt til et ukjent protein (forelesningseksempel)"
          given="Ukjent bånd 45 mm fra toppen av resolving-gelen, fargefront 67 mm. Standardkurve: $\log M_w = -1{,}9944 R_f + 2{,}7824$ ($r^2$ = 0,997)."
          steps={[
            { body: '$R_f = 45/67 = 0{,}672$' },
            { body: '$\\log M_w = -1{,}9944 \\times 0{,}672 + 2{,}7824 = -1{,}340 + 2{,}782 = 1{,}443$' },
            { body: '$M_w = 10^{1{,}443} \\approx 27{,}7$ kD' },
            { title: 'Sjekk mot gelen:', body: 'båndet ligger mellom 25 og 37 kD-markørene, nærmest 25, som stemmer.' },
            { title: 'Usikkerhet:', body: 'ca. 5–10 % [slide 41], altså ca. 25–30 kD.' },
          ]}
          cite={`[${PK}, slide 42]`}
        />
        <FadedExample
          title="H24 oppg. 2(b): fire flervalg om SDS-PAGE (4 p)"
          given="i) Viktigste egenskap til SDS? (bryter disulfidbindinger / katalyserer polymerisering / polymer for gelmatriksen / gir negativ ladning proporsjonal med størrelsen). ii) Stacking-gelens rolle? iii) Hvorfor er pH-forskjellen viktig? iv) Korrekt om separasjonsgelen? (bare samle / lavere pH / separerer etter pI / høyere akrylamidkonsentrasjon)"
          steps={[
            { title: 'i)', body: `Disulfidbindingene brytes av merkaptoetanol, ikke SDS [${B2}, p. 134]. Polymeriseringen katalyseres av TEMED [${PK}, slide 34]. Gelmatriksen er polyakrylamid.` },
            { title: 'Svar i):', body: 'gir proteiner en negativ ladning proporsjonal med størrelsen.' },
            { title: 'ii) Stacking-gelens rolle?', body: 'Å samle proteiner i smale bånd før de går inn i separasjonsgelen.', hidden: true },
            { title: 'iii) Hvorfor er pH-forskjellen viktig?', body: 'For å skape en ionisk gradient som konsentrerer proteinene før separasjon (Cl⁻ og glysinat «sandwich»).', hidden: true },
            { title: 'iv) Korrekt om separasjonsgelen?', body: 'Den har høyere akrylamidkonsentrasjon (mindre porer) enn stacking-gelen. Den har **høyere** pH (8,8 vs. 6,8), og separasjon etter pI er IEF.', hidden: true },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 2(b); ${LF24}, p. 11]`}
        />
        <Example
          title="H25 oppg. 9 (delvis) — [UTLEDET, ingen fasit i LF]"
          steps={[
            { title: 'Utsagn:', body: '«Involverer denaturering og utfolding av proteinene».' },
            { title: 'Svar (utledet fra slide 39, ikke fra fasit):', body: 'SDS-PAGE. Oppgaven ble automatisk rettet, og løsningsforslaget gir ingen fasit.' },
          ]}
          cite={`[IMAK2008 eksamen H2025.pdf, oppg. 9; ${PK}, slide 39]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="SDS bryter disulfidbroer" cite={`[${B2}, p. 134; ${LF24}, p. 11]`}>Nei, det gjør merkaptoetanol. SDS denaturerer og gir negativ ladning.</Trap>
        <Trap title="Stacking-gelen separerer" cite={`[${PK}, slide 36]`}>Nei. Den har store porer og konsentrerer prøven. Separasjonen skjer i resolving-gelen.</Trap>
        <Trap title="pH feil vei" cite={`[${PK}, slide 36]`}>Stacking-gelen har <em>lavere</em> pH (6,8) enn resolving-gelen (8,8).</Trap>
        <Trap title="Store proteiner kommer lengst" cite={`[${PK}, slide 40]`}>Motsatt. De minste går fortest.</Trap>
        <Trap title="SDS-PAGE gir identitet" cite={`[${OV}, p. 1]`}>Den gir omtrentlig molvekt og renhet, ikke identitet.</Trap>
        <Trap title="$R_f$ fra feil startpunkt" cite={`[${PK}, slide 41–42]`}>Mål fra toppen av resolving-gelen (brønnen), og del på fargefronten.</Trap>
        <Trap title="Ekstrapolering av standardkurven" cite={`[${PK}, slide 41]`}>Krever et lineært forhold innenfor det forventede Mw-området.</Trap>
      </Section>
    </>
  )
}
