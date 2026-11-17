import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, tone } from '../components'

const A = 'Forelesning ads.krom m notater 3.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const KOF = 'koffein _ISTD_student_rev2.pdf'
const DIM = String.raw`\text{dimensjonsløs}`

export const meta = {
  title: 'Omvendt fase og ionepar',
  topic: 'lc-separasjon',
  examWeight: {
    level: 'high',
    note: 'H25 oppg. 6 (8 p, benzosyre/toluen på C18) + oppg. 2 flervalg (RP, C18). H24 1(h) (6 p, NP vs. RP, delt med side 07) + 1(i)ii (gjett SF)',
  },
  examTasks: [
    'H2024: 1-serien NP/RP/IEX/SEC (index: side 07–10)',
    'H2025: oppg. 5–7 (index: side 07–10)',
    'H2025 oppg. 2 (flervalg, 2 av 5 delspørsmål): hvilken påstand om RP stemmer (SF upolar, MF mer polar), og hva en C18-kolonne er (omvendt fase med oktadekylgrupper).',
    'H2025 oppg. 6 (8 p): retensjon av benzosyre vs. toluen på C18 ved pH 7,0, effekten av pH 2,5 og hvordan toluens retensjon reduseres uten pH-endring.',
    'H2024 oppg. 1(h) (6 p, delt med side 07): forskjellene på normalfase og omvendt fase HPLC, med eksempler på faser.',
    'H2024 oppg. 1(i)ii (del av 14 p): hvilken stasjonærfase er sannsynlig ut fra strukturene til pseudoephedrine og brompheniramine (MF vann:acetonitril 75:25, pH 3,2). GAP: løsningsforslaget gir ikke svar på 1(i)ii.',
  ],
  buildsOn: ['01-retensjon-og-selektivitet', '07-adsorpsjon-normalfase'],
  usedIn: ['09-ionebytterkromatografi', '17-kvalitativ-og-kvantifiseringsmetoder', '26-ce-metoder-og-cec'],
  sources: [
    `[${A}, slide 3, 7–11, 13]`,
    `[${B1}, p. 65, 68–73] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Pensum.pdf, p. 1]',
    `[${E25}, oppg. 2, 6] / [${LF25}, oppg. 2, 6]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(h), 1(i)] / [${LF24}, p. 6]`,
    `[${KOF}, p. 1]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'På en C18-kolonne med vann/acetonitril: eluerer den mest polare eller den minst polare analytten først?', a: `Den mest polare (minst retardert) [${A}, slide 9; ${B1}, p. 68].` },
    { id: 'p2', kind: 'pretest', q: 'Du vil ha kortere retensjonstid i RP. Øker eller senker du andelen acetonitril?', a: `Øker. Organisk løsemiddel er den sterke eluenten i RP [${LF25}, oppg. 6c; ${B1}, p. 69].` },
    { id: 'p3', kind: 'pretest', q: 'Hva gjør en svak syre (pKa ≈ 4) med retensjonen på C18 hvis pH senkes fra 7 til 2,5?', a: `Retensjonen øker markant, fordi syren blir protonert (uladet, mer hydrofob) [${LF25}, oppg. 6b].` },
    { id: 't1', q: 'H24 1(i): MF er vann:acetonitril 75:25 ved pH 3,2. Hvilken type stasjonærfase tyder MF på?', a: `Omvendt fase. Vandig MF blandet med acetonitril og pH-kontroll er typisk for RP [${B1}, p. 68]. Løsningsforslaget gir ikke fasit på denne deloppgaven.` },
    { id: 't2', q: 'Hvorfor tilsettes TFA i vannfasen i cannabiseksempelet?', a: `For å holde lav pH, slik at CBGA og THC-A er protonert og uladet [${A}, slide 10].` },
    { id: 't3', q: 'Nevn tre faktorer som regulerer retensjonen i ionepar-kromatografi.', a: `Type mot-ion, konsentrasjon av mot-ion og konsentrasjon av organisk løsemiddel. Også salt og pH [${B1}, p. 73; ${A}, slide 13].` },
    { id: 't4', q: 'Hva er end-capping, og hvorfor gjøres det?', a: `Ekstra derivatisering med små grupper i tillegg til C18, slik at ingen frie silanolgrupper blir igjen. Det gir færre sekundære interaksjoner [${A}, slide 8].` },
    { id: 't5', q: 'Hvilket mot-ion brukes for en analytt med aminogruppe?', a: `Et negativt, hydrofobt mot-ion som oktylsulfonat (oktansulfonsyre) eller SDS [${B1}, p. 72; ${A}, slide 13].` },
  ],
  equations: [
    {
      id: 'logk', label: 'Retensjon i RP (smalt sammensetningsområde)',
      tex: String.raw`\log \va{k} = \log \vb{k_w} - \vc{S}\,\vd{\varphi}`,
      vars: [
        { sym: String.raw`\va{k}`, desc: 'retensjonsfaktor', unit: DIM },
        { sym: String.raw`\vb{k_w}`, desc: 'retensjonsfaktor med rent vann som MF', unit: DIM },
        { sym: String.raw`\vd{\varphi}`, desc: 'volumfraksjon av organisk løsemiddel', unit: '0\\text{–}1' },
        { sym: String.raw`\vc{S}`, desc: 'mål på elueringsstyrken til det organiske løsemiddelet', unit: DIM },
      ],
      note: 'Gjelder grovt innenfor et smalt område av MF-sammensetning. Vann er svakeste eluent, og upolare løsemidler er sterkest.',
      cite: `[${B1}, p. 69, lign. 3.5]`,
      check: { status: 'verified', note: 'Bok lign. 3.5 (p. 69, PDF s. 85): log k = log k_w − Sφ.' },
    },
    {
      id: 'ionepar', label: 'Ionepar-dannelse',
      tex: String.raw`Q^+_{aq} + X^-_{aq} \rightleftharpoons QX_{org}`,
      vars: [
        { sym: String.raw`Q^+_{aq}`, desc: 'polart (ladet) analyttion i vannfasen', unit: '–' },
        { sym: String.raw`X^-_{aq}`, desc: 'hydrofobt mot-ion', unit: '–' },
        { sym: String.raw`QX_{org}`, desc: 'ionepar, mer hydrofobt enn $Q^+$, retardert på RP', unit: '–' },
      ],
      cite: `[${B1}, p. 72; ${A}, slide 13]`,
      check: { status: 'mismatch', note: 'Bok p. 72 (PDF s. 88) skriver Q_aq + X_aq = QX_org: uten ladningstegn (+/−) og med «=» i stedet for likevektspil. Innholdet har lagt til ladninger og ⇌.' },
    },
  ],
}


/* NP vs RP table + two chromatograms */
function NPvsRP() {
  const rows = [
    ['SF', 'polar: silika, alumina', 'upolar: C18-silika'],
    ['MF', 'upolar organisk', 'vann + polart organisk'],
    ['først ut', 'minst polar', 'mest polar'],
    ['sterk eluent', 'mer polar', 'mer organisk/upolar'],
    ['gradient', 'lav → høy polaritet', 'høy → lav polaritet'],
  ]
  const cols = ['var-a', 'var-c', 'var-e', 'var-b']
  const chrom = (y, order) => order.map((ci, i) => {
    const cx = 120 + i * 90
    return <Curve key={i} t={cols[ci]} points={[[cx - 16, y], [cx - 5, y - 8], [cx, y - 40], [cx + 5, y - 8], [cx + 16, y]]} />
  })
  return (
    <Svg w={460} h={380} label="NP og RP side om side">
      <Label x={180} y={20} t="var-a">NP</Label>
      <Label x={360} y={20} t="var-b">RP</Label>
      {rows.map(([h, np, rp], i) => (
        <g key={h}>
          <line x1={10} y1={30 + i * 34} x2={450} y2={30 + i * 34} style={{ stroke: tone('muted') }} />
          <Label x={14} y={52 + i * 34} anchor="start" size={12}>{h}</Label>
          <Label x={180} y={52 + i * 34} size={12}>{np}</Label>
          <Label x={360} y={52 + i * 34} size={12}>{rp}</Label>
        </g>
      ))}
      <Label x={14} y={226} anchor="start" size={12} t="var-a">NP</Label>
      <line x1={60} y1={270} x2={450} y2={270} style={{ stroke: tone('muted') }} />
      {chrom(270, [0, 1, 2, 3])}
      <Label x={14} y={316} anchor="start" size={12} t="var-b">RP</Label>
      <line x1={60} y1={360} x2={450} y2={360} style={{ stroke: tone('muted') }} />
      {chrom(360, [3, 2, 1, 0])}
      <Label x={120} y={376} size={11} t="var-b">polar</Label>
      <Label x={390} y={376} size={11} t="var-a">upolar</Label>
    </Svg>
  )
}

/* C18 surface with end-capping and phase collapse */
function C18() {
  const chain = (x, up = true) => up
    ? <path d={`M ${x} 150 l 0 -16 ${Array.from({ length: 8 }, (_, i) => `l ${i % 2 ? 6 : -6} -12`).join(' ')}`} style={{ fill: 'none', stroke: tone('var-c'), strokeWidth: 2.5 }} />
    : <path d={`M ${x} 150 l 0 -10 ${Array.from({ length: 8 }, (_, i) => `l 12 ${i % 2 ? 4 : -4}`).join(' ')}`} style={{ fill: 'none', stroke: tone('var-c'), strokeWidth: 2.5 }} />
  return (
    <Svg w={460} h={220} label="C18-overflate, end-capping og fasekollaps">
      <rect x={10} y={150} width={210} height={30} style={{ fill: `color-mix(in srgb, ${tone('muted')} 35%, var(--bg))` }} />
      <Label x={115} y={170} size={11}>silika (Si–O–Si)</Label>
      {chain(30)}{chain(80)}{chain(180)}
      <circle cx={130} cy={140} r={7} style={{ fill: tone('var-e') }} />
      <Label x={130} y={124} t="var-e" size={11}>fri Si–OH</Label>
      <rect x={150} y={130} width={18} height={18} rx={4} style={{ fill: tone('var-a') }} />
      <Label x={160} y={200} t="var-a" size={11}>end-capped –O–Si(CH₃)₃</Label>
      <Label x={20} y={20} anchor="start" size={12} t="var-c">C18-kjeder (Si(CH₃)₂–C18) stikker ut</Label>
      <rect x={240} y={150} width={210} height={30} style={{ fill: `color-mix(in srgb, ${tone('muted')} 35%, var(--bg))` }} />
      {chain(250, false)}{chain(350, false)}
      <Label x={345} y={60} t="trap" size={13}>fasekollaps</Label>
      <Label x={345} y={80} size={12}>nesten rent vann:</Label>
      <Label x={345} y={98} size={12}>kjedene ligger flatt</Label>
      <Label x={345} y={200} t="trap" size={12}>kapasitet tapt</Label>
    </Svg>
  )
}

/* pH effect benzoic acid vs toluene */
function PHEffekt() {
  const panel = (x, ph, acidIn) => (
    <g>
      <Label x={x + 105} y={18} size={13}>pH {ph}</Label>
      <rect x={x} y={30} width={210} height={70} style={{ fill: `color-mix(in srgb, ${tone('definition')} 10%, var(--bg))`, stroke: tone('muted') }} />
      <Label x={x + 6} y={46} anchor="start" size={11}>MF (vann/ACN)</Label>
      <rect x={x} y={100} width={210} height={40} style={{ fill: `color-mix(in srgb, ${tone('var-c')} 25%, var(--bg))`, stroke: tone('muted') }} />
      <Label x={x + 6} y={134} anchor="start" size={11}>C18</Label>
      <Label x={x + 150} y={122} t="var-b" size={12}>toluen</Label>
      {acidIn
        ? <Label x={x + 80} y={122} t="var-a" size={12}>–COOH</Label>
        : <Label x={x + 105} y={74} t="var-a" size={12}>–COO⁻ (benzoat)</Label>}
      <line x1={x} y1={210} x2={x + 210} y2={210} style={{ stroke: tone('muted') }} />
      {(acidIn ? [[x + 140, 'var-a'], [x + 175, 'var-b']] : [[x + 30, 'var-a'], [x + 160, 'var-b']]).map(([cx, t], i) => (
        <Curve key={i} t={t} points={[[cx - 12, 210], [cx - 4, 202], [cx, 168], [cx + 4, 202], [cx + 12, 210]]} />
      ))}
      <Label x={x + 105} y={228} size={11}>{acidIn ? 'benzosyre flyttet kraftig mot høyre' : 'benzosyre først, toluen sist'}</Label>
    </g>
  )
  return (
    <Svg w={460} h={280} label="Effekt av pH på benzosyre og toluen">
      {panel(10, '7,0', false)}
      {panel(240, '2,5', true)}
      <Label x={230} y={268} t="var-d" size={12}>↓ mer acetonitril → begge eluerer tidligere</Label>
    </Svg>
  )
}

/* Ion pair mechanism */
function Ionepar() {
  return (
    <Svg w={460} h={240} label="Ionepar-mekanisme">
      <rect x={10} y={180} width={440} height={40} style={{ fill: `color-mix(in srgb, ${tone('muted')} 35%, var(--bg))` }} />
      <Label x={230} y={205} size={12}>silika</Label>
      {[40, 120, 200, 280, 360, 430].map((x) => <line key={x} x1={x} y1={180} x2={x} y2={120} style={{ stroke: tone('var-c'), strokeWidth: 3 }} />)}
      <Label x={20} y={112} anchor="start" t="var-c" size={12}>C18</Label>
      <line x1={160} y1={150} x2={160} y2={92} style={{ stroke: tone('var-e'), strokeWidth: 4 }} />
      <circle cx={160} cy={84} r={10} style={{ fill: tone('var-e') }} />
      <Label x={160} y={88} size={11}>–</Label>
      <Label x={160} y={60} t="var-e" size={12}>C₈H₁₇SO₃⁻</Label>
      <circle cx={186} cy={80} r={12} style={{ fill: tone('var-a') }} />
      <Label x={186} y={84} size={11}>+</Label>
      <Label x={220} y={84} anchor="start" t="var-a" size={12}>BH⁺ (analytt)</Label>
      <Label x={360} y={40} size={12}>Na⁺</Label>
      <Label x={400} y={60} size={12}>Cl⁻</Label>
      <Arrow x1={320} y1={110} x2={200} y2={96} t="trap" />
      <Label x={445} y={100} anchor="end" t="trap" size={12}>RP-retarderte ion-par</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Upolar SF, polar MF — alt snur">
        <MentalModel cite={`[${A}, slide 7, 9, 13; ${B1}, p. 68–69, 72; ${LF25}, oppg. 6]`}>
          RP har motsatt elueringsrekkefølge og motsatt polaritet på SF og MF sammenlignet med NP: upolar SF (derivatisert silika, f.eks. C18) og polar MF (vann, polare organiske løsemidler). Mekanismen er ikke klart definert. Det er mer naturlig å se det som fordelingskromatografi, der analytten «løses» i det upolare C18-laget, enn som adsorpsjon.{' '}
          Jo mer hydrofob (upolar) analytten er, jo mer trives den i SF og jo senere eluerer den. Jo mer <V c="d">organisk løsemiddel</V> MF inneholder, jo mer «lik» analytten blir MF, og jo raskere eluerer alt.{' '}
          Ioniserbare analytter styres i tillegg av pH: ladet form er polar og eluerer tidlig, uladet form er hydrofob og holdes igjen. Er analytten ionisk og holdes for dårlig igjen, tilsettes et hydrofobt mot-ion som danner et ionepar som C18 kan holde på.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="Omvendt fase (RP)" cite={`[${A}, slide 7; ${B1}, p. 68]`}>Motsatt elueringsrekkefølge av NP-LC og motsatt polaritet på SF og MF. SF er upolar (derivatisert silika), MF er polar (vann, polare organiske løsemidler). Navnet kommer av at rekkefølgen er omtrent omvendt av adsorpsjonskromatografi på polare materialer.</Def>
            <Def term="RP-HPLC" cite={`[${B1}, p. 69; ${A}, slide 3; ${LF25}, oppg. 2]`}>Det mest brukte separasjonsprinsippet i HPLC. I H25-flervalget: stasjonær fase upolar, mobil fase mer polar.</Def>
            <Def term="Retensjonsmekanisme i RP" cite={`[${A}, slide 7, 9; ${B1}, p. 69]`}>Ikke klart definert. Forelesningen foreslår å se det som fordelingskromatografi (analytten løses i SF) heller enn adsorpsjon, og retensjonen kan ikke beregnes på samme måte som i NP. Mest polar = minst retardert. Boka: silikabaserte RP-faser har et solvatiseringslag av organisk løsemiddel og vann på overflaten, inkludert rest-silanoler.</Def>
          </div>
          <Diagram title="NP vs. RP side om side" caption="Samme fire topper i NP-rekkefølge og omvendt i RP. Skisse." cite={`[${A}, slide 7–8]`}>
            <NPvsRP />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="C18 / ODS" cite={`[${A}, slide 8; ${LF25}, oppg. 2; ${B1}, p. 71]`}>Den vanligste RP-fasen er derivatisert silika med oktadekylgrupper (C18), også kalt «C18-silika». En C18-kolonne er omvendt fase med oktadekylgrupper. Kjeder fra C1 til C30 finnes, men C18 (oktadekylsilan, ODS) dominerer. Hydrofobiteten øker med kjedelengden. C30 brukes mest for konfigurasjonsisomerer.</Def>
            <Def term="End-capping" cite={`[${A}, slide 8–9]`}>Små grupper (f.eks. trimetylsilyl) derivatiseres i tillegg til C18, slik at ingen frie Si-OH-grupper blir igjen.</Def>
            <Def term="Fasekollaps" cite={`[${A}, slide 8; ${B1}, p. 68]`}>Med for mye vann i MF kan man få «fasekollaps»: kjedene legger seg tett inntil Si-partikkelen, og man mister kapasitet. Boka: starter man en silikabasert C18 med 0 % organisk løsemiddel, risikerer C18-kjedene å bli flatet ut, med lavere kapasitet og retensjon. Gradienter starter derfor typisk på 5 % acetonitril eller metanol.</Def>
          </div>
          <Diagram title="C18-overflate med end-capping og fasekollaps" cite={`[${A}, slide 8–9; ${B1}, p. 69, Fig. 3.17]`}>
            <C18 />
          </Diagram>
        </Columns>
        <Def term="Monomer vs. polymer fase" cite={`[${B1}, p. 71, Fig. 3.17]`}>Monomer lages med monoklorsilan, polymer med triklorsilan. Polymere faser beskytter silikaoverflaten bedre og tåler høy og lav pH bedre, men skal likevel aldri lagres ved basisk pH.</Def>
        <Def term="Rest-silanoler" cite={`[${B1}, p. 71, Info-box 3.10]`}>Silaniseringen blir aldri fullstendig, så alle materialer har rest-silanoler som kan gi sekundære interaksjoner. Ulike C18-materialer kan derfor oppføre seg svært forskjellig, særlig mot aminer.</Def>
        <Def term="Andre RP-faser" cite={`[${A}, slide 9; ${B1}, p. 71]`}>Cyano (cyanopropyl), også brukt som NP-SF sammen med upolar MF. Fenyl, heksyl-fenyl, PFP (pentafluorfenyl) og bifenyl. Fenylfaser er litt mindre hydrofobe enn C18 og kan gi bedre oppløsning av aromater. Fluorerte faser gir bedre oppløsning av baser. Silikabaserte RP-faser er svært stive og stabile til over 1000 bar.</Def>
        <Def term="Mobilfase i RP" cite={`[${B1}, p. 68; ${A}, slide 11]`}>Vanligvis acetonitril–vann eller metanol–vann, oftest med buffer eller syre for pH-kontroll. Eluering kan være isokratisk eller gradient. I RP går gradienten fra høy til lav polaritet (økende andel organisk).</Def>
        <Def term="Eluentstyrke i RP" cite={`[${B1}, p. 69]`}>Vann er den svakeste eluenten. Upolare løsemidler er de sterkeste.</Def>

        <Columns>
          <div>
            <Def term="Effekt av pH på ioniserbare analytter (H25 oppg. 6)" cite={`[${LF25}, oppg. 6]`}>Benzosyre (pKa ≈ 4,2) er ved pH 7 hovedsakelig deprotonert, altså ladet og mer polar, og får lavere affinitet til C18. Ved pH 2,5 er den hovedsakelig protonert, altså uladet og mer hydrofob, og retensjonen øker markant.</Def>
            <Def term="Syre i MF for å kontrollere ladning" cite={`[${A}, slide 10; ${KOF}, p. 1]`}>I cannabiseksempelet tilsettes TFA til vannfasen for å holde pH lav, slik at de sure cannabinoidene (CBGA, THC-A) er protonert og uladet. Koffeinlaben bruker 0,1 % maursyre i 85 % vann / 15 % acetonitril på en EC-18-kolonne.</Def>
          </div>
          <Diagram title="Effekt av pH på benzosyre vs. toluen (C18)" cite={`[${E25}, oppg. 6; ${LF25}, oppg. 6]`}>
            <PHEffekt />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Ionepar-kromatografi" cite={`[${A}, slide 13; ${B1}, p. 72]`}>Når analytten er ionisk, tilsettes et mot-ion (f.eks. oktansulfonsyre) som bindes til analytten og gir retensjon på vanlige RP-kolonner. Mot-ionet tilsettes i prøven eller i MF. Retensjonen avhenger av hvilket mot-ion som brukes, konsentrasjonen og sammensetningen av MF. Boka: lav konsentrasjon (ca. 5 mM) hydrofobt mot-ion i MF. Ioneparet er mer hydrofobt enn ionet alene.</Def>
            <Def term="Ionepar: mot-ioner og styring" cite={`[${B1}, p. 72–73, Info-box 3.11]`}>Karboksylsyrer bruker positive mot-ioner (tetrabutylammonium). Aminer bruker oktylsulfonat eller SDS. Mer mot-ion og større hydrofob gruppe gir mer retensjon, mer organisk løsemiddel gir mindre. 0,1–0,2 M buffer gir stabilitet. <strong>Begrensninger</strong>: kan ikke brukes med gradienteluering og ikke med MS-deteksjon.</Def>
          </div>
          <Diagram title="Ionepar-mekanisme" cite={`[${A}, slide 13]`}>
            <Ionepar />
          </Diagram>
        </Columns>
        <Def term="Ikke pensum" cite={`[Pensum.pdf; ${B1}, p. 70, 72]`}>Solvatiseringsparametermodellen, hybrid- og hydrosilerte materialer og organiske polymerfaser.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="logk" />
        <Plot
          title="Retensjon vs. andel organisk: $\log k = \log k_w - S\varphi$"
          caption="Kursmaterialet gir ingen tallverdier for $k_w$ eller $S$, så verdiene er illustrative: toluen $\log k_w$ = 3, benzosyre pH 2,5 $\log k_w$ = 2,4, benzosyre pH 7 $\log k_w$ = 1. Poenget er bare at alle linjene synker med økende $\varphi$, og at pH flytter benzosyrelinjen. Slideren endrer $S$ (elueringsstyrken til det organiske løsemiddelet) for alle linjene."
          cite={`[${B1}, p. 69, lign. 3.5]`}
          x={{ min: 0.05, max: 0.9, label: 'φ (andel organisk)' }}
          y={{ label: 'log k' }}
          params={[{ key: 'S', label: '$S$', min: 2, max: 6, step: 0.1, value: 4 }]}
          series={[
            { key: 'tol', label: 'toluen', t: 'var-b', fn: (f, p) => 3 - p.S * f },
            { key: 'b25', label: 'benzosyre pH 2,5', t: 'var-a', fn: (f, p) => 2.4 - p.S * f },
            { key: 'b7', label: 'benzosyre pH 7', t: 'var-e', fn: (f, p) => 1 - p.S * f },
          ]}
        />
        <Eq id="ionepar" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 6: benzosyre og toluen på C18 (8 p)"
          given="Analytt A er benzosyre (pKa ≈ 4,2), analytt B er toluen (ikke-ioniserbar, upolar). MF er vann/acetonitril 60/40 (v/v), og pH justeres."
          steps={[
            { title: 'a) Hvilken har størst retensjon ved pH 7,0? Bestem ladning:', body: 'pH 7,0 ligger godt over pKa 4,2, så benzosyre er hovedsakelig deprotonert (benzoat, ladet).' },
            { body: 'Ladet = mer polar = lavere affinitet til upolar C18.' },
            { body: 'Toluen er upolar og uladet og binder sterkere til C18.' },
            { title: 'Svar:', body: 'Toluen har størst retensjon.' },
            { title: 'b) Hvordan endres retensjonen til benzosyre ved pH 2,5?', body: 'pH 2,5 ligger under pKa, så benzosyre er hovedsakelig protonert (–COOH, uladet).' },
            { body: 'Uladet = mer hydrofob = mer lik toluen i polaritet.' },
            { title: 'Svar:', body: 'Retensjonen øker markant (senere eluering).' },
            { title: 'c) Redusere retensjonstiden til toluen uten å endre pH?', body: 'Parameteren er andelen organisk løsemiddel i MF.' },
            { body: 'Mer acetonitril gjør MF mer «lik» analyttene (mer hydrofob), så begge får svakere retensjon og kortere retensjonstid, særlig toluen.' },
          ]}
          cite={`[${E25}, oppg. 6; ${LF25}, oppg. 6]`}
        />
        <FadedExample
          title="H24 oppg. 1(h): forskjellene på NP og RP HPLC (6 p)"
          steps={[
            { title: 'Start med SF:', body: 'valg av SF bestemmer hvilke interaksjoner som dominerer mellom analytt og kolonne.' },
            { title: 'RP-HPLC: hvilken SF, med eksempler?', body: 'Ikke-polare SF (f.eks. C18, C8).', hidden: true },
            { title: 'Hvilke interaksjoner, og hvem eluerer først?', body: 'Hydrofobe interaksjoner, sterkest med ikke-polare analytter. Polare analytter elueres raskere.', hidden: true },
            { title: 'NP-HPLC: hvilken SF, med eksempel?', body: 'Polar SF (f.eks. silika).', hidden: true },
            { title: 'Hvilke interaksjoner?', body: 'Med polare analytter via hydrogenbindinger og dipol–dipol-interaksjoner.', hidden: true },
            { title: 'Legg til MF for full uttelling:', body: `RP har polar MF (vann + acetonitril/metanol), NP har upolar MF (heksan, pentan osv.) [${A}, slide 3, 7].`, hidden: true },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(h); ${LF24}, p. 6]`}
        />
        <Gap>løsningsforslaget gir ikke svar på H24 oppg. 1(i)ii (hvilken stasjonærfase er sannsynlig ut fra strukturene til pseudoephedrine og brompheniramine).</Gap>
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Eluentstyrke snus mellom NP og RP" cite={`[${B1}, p. 65, 69]`}>I RP er vann svakest og organisk sterkest. I NP er polar sterkest.</Trap>
        <Trap title="RP behandles som adsorpsjon" cite={`[${A}, slide 7, 9]`}>Forelesningen understreker at mekanismen ikke er klart definert og at RP heller bør ses som fordelingskromatografi. Snyder-ligningen fra NP gjelder ikke.</Trap>
        <Trap title="pH og ladning feil vei" cite={`[${LF25}, oppg. 6]`}>Syrer er uladet under pKa og ladet over. Ladet form eluerer tidlig i RP.</Trap>
        <Trap title="0 % organisk i RP-gradient" cite={`[${B1}, p. 68; ${A}, slide 8]`}>Risiko for fasekollaps og tap av kapasitet. Start på ca. 5 % organisk.</Trap>
        <Trap title="Ionepar med gradient eller MS" cite={`[${B1}, p. 73]`}>Går ikke.</Trap>
        <Trap title="Aminer og rest-silanoler" cite={`[${B1}, p. 71; ${A}, slide 8]`}>Ulike C18-kolonner kan gi svært ulik retensjon og tailing for aminer pga. rest-silanoler. End-capping reduserer dette.</Trap>
        <Trap title="CN-kolonne bare som NP" cite={`[${A}, slide 9]`}>Cyanopropyl kan brukes i RP, og også som NP-SF sammen med upolar MF.</Trap>
      </Section>
    </>
  )
}
