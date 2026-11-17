import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Gap, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const F = 'Forelesning 230926-u-notater.pdf'
const IC = 'Ionekromatografi_26_canvas.pdf'
const GE = 'Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'

export const meta = {
  title: 'Ionebytterkromatografi',
  topic: 'lc-separasjon',
  examWeight: { level: 'medium', note: 'H25 oppg. 5 (10 p, peptider på kationbytter), H24 1(g) (3 p, «matrix» i IEX)' },
  examTasks: [
    'H2024: 1-serien NP/RP/IEX/SEC (index: side 07–10)',
    'H2025: oppg. 5–7 (index: side 07–10)',
    'H2025 oppg. 5 (10 p): tre peptider (+2, +1, −1) på sulfonsyre-kationbytter ved pH 7,0 med NaCl-gradient. Hvilket eluerer først, hvorfor ionestyrke gir eluering, effekten av pH 3,5, og hvorfor sakte gradient gir brede topper.',
    'H2024 oppg. 1(g) (3 p): hva er «matrix» i ionebyttekromatografi, gjerne med eksempel.',
  ],
  buildsOn: ['01-retensjon-og-selektivitet', '02-effektivitet-og-opplosning', '08-omvendt-fase-og-ionepar'],
  usedIn: ['10-size-exclusion', '21-ief-og-2d'],
  sources: [
    `[${F}, slide 2, 4] (slide 1 og 3 er tomme. Bare figurer, ingen notater)`,
    `[${IC}, p. 1–6]`,
    `[${GE}, p. 1, 5–8, 11–13, 15–18] (PDF-sidetall, ikke håndbokas egne)`,
    `[${B1}, p. 73–75] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Pensum.pdf, p. 1]',
    `[${E25}, oppg. 5] / [${LF25}, oppg. 5]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(g)] / [${LF24}, p. 6]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Et protein har pI 5. Binder det til en anionbytter eller en kationbytter ved pH 8?', a: `Til en anionbytter. Over pI er proteinet negativt ladet og binder til et positivt ladet medium [${GE}, p. 5].` },
    { id: 'p2', kind: 'pretest', q: 'Hva betyr «sterk» i «sterk anionbytter»?', a: `At liganden er en sterk syre eller base og er fullt ladet over hele det relevante pH-området. Det sier ikke noe om bindingsstyrken [${IC}, p. 2; ${GE}, p. 17].` },
    { id: 'p3', kind: 'pretest', q: 'Hvilket protein eluerer sist når saltkonsentrasjonen økes: det med størst eller minst nettoladning?', a: `Det med størst nettoladning. Det krever høyest saltkonsentrasjon for desorpsjon [${IC}, p. 1; ${GE}, p. 6].` },
    { id: 't1', q: 'Nevn de fem trinnene i en typisk IEX-separasjon.', a: `Ekvilibrering, prøvepåsetting og vask, eluering, regenerering og re-ekvilibrering [${GE}, p. 6; ${F}, slide 4].` },
    { id: 't2', q: 'Hvorfor foretrekkes ionestyrkegradient fremfor pH-gradient?', a: `Oppløst CO₂ fra luften påvirker den basiske delen av en pH-gradient og gir dårligere repeterbarhet [${B1}, p. 74].` },
    { id: 't3', q: 'Hvilken funksjonell gruppe har en sterk kationbytter, og hvilken har en svak?', a: `Sterk: sulfonat/sulfopropyl (–SO₃⁻). Svak: karboksymetyl (–COO⁻) [${GE}, p. 17; ${B1}, p. 73].` },
    { id: 't4', q: 'Hva er den mest effektive parameteren for å optimalisere IEX av proteiner?', a: `pH, fordi den endrer proteinenes nettoladning og dermed selektiviteten [${IC}, p. 2].` },
    { id: 't5', q: 'Hva er kromatofokusering?', a: `Isoelektrisk fokusering uten elektrisk felt. Proteiner elueres fra en svak anionbytter med en pH-gradient (polybuffere), og hvert protein eluerer når pH = pI [${B1}, p. 74–75].` },
  ],
  equations: [
    {
      id: 'rs', label: 'Oppløsning i IEX (volumform)',
      tex: String.raw`\ve{R_s} = \frac{2\,(\vb{V_{R2}}-\vb{V_{R1}})}{\vc{w_{b1}}+\vc{w_{b2}}}`,
      vars: [
        { sym: String.raw`\vb{V_{R1}}, \vb{V_{R2}}`, desc: 'elueringsvolum ved toppmaksimum', unit: String.raw`\mathrm{mL}` },
        { sym: String.raw`\vc{w_{b1}}, \vc{w_{b2}}`, desc: 'basisbredde', unit: String.raw`\mathrm{mL}` },
      ],
      note: '$R_s$ = 1,0 gir 98 % renhet ved 98 % utbytte for symmetriske, like store topper. Baselinjeseparasjon krever $R_s$ ≥ 1,5.',
      cite: `[${GE}, p. 8]`,
      check: { status: 'verified', note: 'GE-håndboka PDF s. 8, Fig. 1.3: R_s = 2(V_R2 − V_R1)/(w_b1 + w_b2); R_s = 1,0 → 98 % renhet/98 % utbytte; ≥ 1,5 baselinje.' },
    },
  ],
}

/* Titration curves */
function Titrering() {
  const X = (ph) => 50 + ((ph - 2) / 10) * 380, Y = (q) => 150 - q * 22
  const curve = (pI, t) => <Curve t={t} points={Array.from({ length: 21 }, (_, i) => { const ph = 2 + i * 0.5; return [X(ph), Y(Math.max(-5.5, Math.min(5.5, -1.2 * (ph - pI) - 0.08 * (ph - pI) ** 3)))] })} />
  return (
    <Svg w={460} h={300} label="Titreringskurver og valg av ionebytter">
      <rect x={X(6.4)} y={20} width={X(7.6) - X(6.4)} height={260} style={{ fill: `color-mix(in srgb, ${tone('intuition')} 14%, transparent)` }} />
      <Label x={X(7)} y={16} t="intuition" size={12}>best selektivitet</Label>
      <Arrow x1={50} y1={150} x2={440} y2={150} />
      <Arrow x1={50} y1={280} x2={50} y2={20} />
      {[2, 4, 6, 8, 10, 12].map((p) => <Label key={p} x={X(p)} y={168} size={11}>{p}</Label>)}
      <Label x={440} y={186} anchor="end" size={12}>pH</Label>
      <Label x={56} y={34} anchor="start" size={12}>netto ladning +</Label>
      <Label x={56} y={276} anchor="start" size={12}>−</Label>
      {curve(5, 'var-a')}{curve(7, 'var-c')}{curve(9, 'var-e')}
      <Label x={X(5)} y={142} t="var-a" size={11}>pI₁</Label>
      <Label x={X(7) + 14} y={142} t="var-c" size={11}>pI₂</Label>
      <Label x={X(9) + 14} y={142} t="var-e" size={11}>pI₃</Label>
      <line x1={X(7)} y1={20} x2={X(7)} y2={280} style={{ stroke: tone('ink'), strokeDasharray: '4 4' }} />
      <Label x={X(11)} y={60} t="definition" size={12}>binder til</Label>
      <Label x={X(11)} y={76} t="definition" size={12}>kationbytter</Label>
      <Label x={X(3.3)} y={236} t="definition" size={12}>binder til</Label>
      <Label x={X(3.3)} y={252} t="definition" size={12}>anionbytter</Label>
    </Svg>
  )
}

/* Strong vs weak exchanger capacity vs pH */
function Kapasitet() {
  const panels = [
    { t: 'Sterk anionbytter', f: (p) => (p < 10 ? 1 : Math.max(0, 1 - (p - 10) * 0.8)), ok: [2, 10], lab: 'ok for anion-IEC' },
    { t: 'Svak anionbytter', f: (p) => (p < 6 ? 1 : Math.max(0, 1 - (p - 6) * 0.35)), ok: [2, 6], lab: 'ok for anion-IEC' },
    { t: 'Sterk kationbytter', f: (p) => (p > 3 ? 1 : Math.max(0, 1 - (3 - p) * 0.8)), ok: [3, 10], lab: 'ok for kation-IEC' },
    { t: 'Svak kationbytter', f: (p) => (p > 8 ? 1 : Math.max(0, 1 - (8 - p) * 0.35)), ok: [8, 10], lab: 'ok for kation-IEC' },
  ]
  return (
    <Svg w={460} h={300} label="Kapasitet mot pH">
      {panels.map((pn, i) => {
        const ox = 20 + (i % 2) * 225, oy = 30 + Math.floor(i / 2) * 140
        const X = (p) => ox + ((p - 2) / 8) * 190, Y = (c) => oy + 90 - c * 80
        return (
          <g key={pn.t}>
            <rect x={X(pn.ok[0])} y={oy} width={X(pn.ok[1]) - X(pn.ok[0])} height={90} style={{ fill: `color-mix(in srgb, ${tone('intuition')} 14%, transparent)` }} />
            <line x1={ox} y1={oy + 90} x2={ox + 195} y2={oy + 90} style={{ stroke: tone('ink') }} />
            <line x1={ox} y1={oy + 90} x2={ox} y2={oy} style={{ stroke: tone('ink') }} />
            <Curve t="topic" points={Array.from({ length: 33 }, (_, k) => { const p = 2 + k * 0.25; return [X(p), Y(pn.f(p))] })} />
            <Label x={ox + 95} y={oy - 8} size={12}>{pn.t}</Label>
            <Label x={(X(pn.ok[0]) + X(pn.ok[1])) / 2} y={oy + 60} t="intuition" size={10}>{pn.lab}</Label>
            {[2, 6, 10].map((p) => <Label key={p} x={X(p)} y={oy + 104} size={10}>{p}</Label>)}
          </g>
        )
      })}
      <Label x={440} y={296} anchor="end" size={11}>x: pH · y: kapasitet</Label>
    </Svg>
  )
}

/* Five steps */
function FemTrinn() {
  const steps = [
    { n: '1 Ekvilibrering', bound: [], salt: 'lav' },
    { n: '2 Påsetting/vask', bound: ['var-b', 'var-b', 'var-e'], salt: 'lav', through: true },
    { n: '3 Eluering 1', bound: ['var-e'], salt: 'økende', out: 'var-b' },
    { n: '4 Eluering 2', bound: [], salt: 'høyere', out: 'var-e' },
    { n: '5 Regenerering', bound: [], salt: 'høy' },
  ]
  return (
    <Svg w={460} h={340} label="Fem trinn i en anionbytter-separasjon">
      {steps.map((s, i) => {
        const y = 20 + i * 64
        return (
          <g key={s.n}>
            <Label x={10} y={y + 28} anchor="start" size={12}>{s.n}</Label>
            <circle cx={180} cy={y + 24} r={22} style={{ fill: `color-mix(in srgb, ${tone('muted')} 30%, var(--bg))`, stroke: tone('ink') }} />
            {[0, 1, 2, 3, 4, 5].map((k) => { const a = (k * Math.PI) / 3; return <Label key={k} x={180 + 15 * Math.cos(a)} y={y + 28 + 15 * Math.sin(a)} size={10} t="definition">+</Label> })}
            {s.bound.map((t, k) => { const a = (k * 2 * Math.PI) / 3 + 0.5; return <circle key={k} cx={180 + 30 * Math.cos(a)} cy={y + 24 + 30 * Math.sin(a)} r={6} style={{ fill: tone(t) }} /> })}
            {s.through && <><circle cx={240} cy={y + 24} r={6} style={{ fill: tone('muted') }} /><Arrow x1={250} y1={y + 24} x2={290} y2={y + 24} t="muted" head={6} /></>}
            {s.out && <><circle cx={240} cy={y + 24} r={6} style={{ fill: tone(s.out) }} /><Arrow x1={250} y1={y + 24} x2={290} y2={y + 24} t={s.out} head={6} /></>}
            <Label x={380} y={y + 28} size={12} t="trap">salt: {s.salt}</Label>
          </g>
        )
      })}
      <Label x={230} y={336} size={11}>blå/lilla = negativt ladet protein · grå = nøytral/positiv (går gjennom)</Label>
    </Svg>
  )
}

/* Typical gradient elution */
function Gradient() {
  const X = (cv) => 40 + cv * 8.5, base = 210, Yc = (c) => base - c * 170
  const salt = [[0, 0], [8, 0], [10, 0], [25, 0.6], [26, 1], [31, 1], [32, 0], [42, 0]]
  const pk = (cv, h, w) => <Curve key={cv} t="definition" points={Array.from({ length: 21 }, (_, i) => { const x = cv - 3 * w + (6 * w * i) / 20; return [X(x), base - h * Math.exp(-((x - cv) ** 2) / (2 * w * w))] })} />
  return (
    <Svg w={460} h={270} label="Typisk gradienteluering">
      <line x1={40} y1={base} x2={X(42)} y2={base} style={{ stroke: tone('ink') }} />
      <polyline points={salt.map(([c, s]) => `${X(c)},${Yc(s)}`).join(' ')} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2.5 }} />
      <rect x={X(8)} y={base - 20} width={X(10) - X(8)} height={20} style={{ fill: tone('definition'), opacity: 0.35 }} />
      {pk(4.5, 70, 0.6)}{pk(13, 60, 0.6)}{pk(16.5, 90, 0.7)}{pk(20, 70, 0.7)}{pk(23, 50, 0.6)}{pk(27.5, 80, 0.5)}
      <Label x={X(4)} y={base + 18} size={10}>ekv./ubundne</Label>
      <Label x={X(4)} y={base + 30} size={10}>5–10 CV</Label>
      <Label x={X(9)} y={base - 26} size={10}>prøve</Label>
      <Label x={X(17.5)} y={base + 18} size={10}>lineær gradient 10–20 CV</Label>
      <Label x={X(28.5)} y={base + 30} size={10}>høysalt 5 CV</Label>
      <Label x={X(37)} y={base + 18} size={10}>re-ekv. 5–10 CV</Label>
      <Label x={X(42)} y={Yc(1) - 6} anchor="end" t="trap" size={11}>1 M NaCl</Label>
      <Label x={44} y={22} anchor="start" t="definition" size={11}>absorbans (blå)</Label>
      <Label x={X(42)} y={262} anchor="end" size={11}>kolonnevolumer (CV)</Label>
    </Svg>
  )
}

const cElu = [0.05, 0.1, 0.15]
const pk = (x, c) => Math.exp(-((x - c) ** 2) / (2 * 0.35 * 0.35))

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Separasjon etter ladning">
        <MentalModel cite={`[${IC}, p. 1–2; ${GE}, p. 5–6]`}>
          Ionebytterkromatografi (IEX) separerer etter ladning. Ladede prøvemolekyler adsorberes reversibelt til motsatt ladede grupper bundet til en matriks. Proteiner er amfotere, så <V c="a">nettoladningen</V> avhenger av <V c="d">pH</V>: under pI er de positive (binder til kationbytter), over pI negative (binder til anionbytter).{' '}
          Molekylene slipper på to måter. Enten senkes nettoladningen ved å endre pH, eller det tilsettes et konkurrerende ion (<V c="f">salt</V>) som blokkerer ladningene på ionebytteren. Jo større nettoladning, jo sterkere binding og jo mer salt trengs. En saltgradient løsner derfor molekylene i rekkefølge etter ladning.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="Separasjonsprinsipp" cite={`[${GE}, p. 1, 5; ${IC}, p. 1]`}>IEX separerer biomolekyler etter forskjeller i netto overflateladning. Kan skille molekyler som avviker med bare én ladet aminosyre. Blant de mest presise metodene for fraksjonering av biologiske molekyler.</Def>
            <Def term="Nettoladning og pH" cite={`[${GE}, p. 5; ${IC}, p. 6]`}>Proteiner er amfotere, og hvert protein har sin egen titreringskurve (nettoladning vs. pH). Ved pI har proteinet ingen nettoladning og vekselvirker ikke med et ladet medium. Over pI binder det til en anionbytter (positivt medium), under pI til en kationbytter (negativt medium).</Def>
            <Def term="Anionbytter / kationbytter" cite={`[${IC}, p. 2]`}>Anionbytteren er positivt ladet og binder anioner. Kationbytteren er negativt ladet og binder kationer.</Def>
          </div>
          <Diagram title="Prinsipp: titreringskurve og valg av ionebytter" caption="Tre proteiner med hver sin pI. Over null: binder til kationbytter; under null: binder til anionbytter. Skyggelagt: der kurvene ligger lengst fra hverandre." cite={`[${GE}, p. 5, 12; ${IC}, p. 6]`}>
            <Titrering />
          </Diagram>
        </Columns>

        <Def term="Matrix (matriks)" cite={`[${LF24}, p. 6, oppg. 1(g); ${GE}, p. 6, 15–16; ${B1}, p. 73]`}>Det uorganiske eller organiske bærermaterialet som utgjør hovedstrukturen i SF. Den gir en stabil fysisk plattform for de funksjonelle gruppene som står for ionebyttet, f.eks. sulfonatgrupper for kationbytte og kvartære ammoniumgrupper for anionbytte. Matrixen bestemmer kolonnens mekaniske og kjemiske egenskaper: stabilitet, trykktoleranse og kjemisk kompatibilitet. Et IEX-medium består av en matriks av sfæriske partikler substituert med ladede grupper, vanligvis porøs for stort indre overflateareal. Krav til matriksen: høy porøsitet (høy kapasitet, godt for store molekyler), inert (lite uspesifikk binding), høy fysisk stabilitet (konstant volum ved endringer i salt eller pH) og høy kjemisk stabilitet (tåler vask). Eksempler: polystyren/divinylbenzen (MiniBeads 3 µm ikke-porøse, MonoBeads, SOURCE) og agarose (Sepharose, Capto). I HPLC er de funksjonelle gruppene bundet til silika- eller polymerpartikler.</Def>
        <Diagram title="Funksjonelle grupper" cite={`[${GE}, p. 17; ${F}, slide 2]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td><strong>Sterke anionbyttere</strong></td><td>kvartært ammonium (Q, –CH₂–N⁺(CH₃)₃), TEAE, QAE</td></tr>
              <tr><td><strong>Svake anionbyttere</strong></td><td>DEAE (dietylaminoetyl), ANX</td></tr>
              <tr><td><strong>Sterke kationbyttere</strong></td><td>sulfopropyl (SP, –CH₂CH₂CH₂SO₃⁻), metylsulfonat (S), sulfoetyl (SE)</td></tr>
              <tr><td><strong>Svake kationbyttere</strong></td><td>karboksymetyl (CM, –CH₂–COO⁻)</td></tr>
            </tbody>
          </table>
        </Diagram>

        <Columns>
          <div>
            <Def term="Sterk vs. svak" cite={`[${IC}, p. 2; ${GE}, p. 17–18]`}>Viser til om liganden er en sterk eller svak syre eller base, <em>ikke</em> til bindingsstyrken. Sterke ionebyttere er fullt ladet over hele pH-området som normalt brukes for proteiner og peptider. Hos svake er ladningen en funksjon av eluent-pH. Fordeler med sterke: rask metodeutvikling, enkel mekanisme, kapasiteten holdes ved høy og lav pH. Svake kan gi annen selektivitet, men kapasiteten varierer med pH. Svake anionbyttere brukes i dag sjelden til proteinrensing.</Def>
            <Def term="Brukbart pH-område (bok, Tabell 3.4)" cite={`[${B1}, p. 73–74; ${F}, slide 2]`}>WAX (–N(R)₂) 2–7, SAX (–N(R)₃⁺) 1–10, WCX (–COO⁻) 6–9, SCX (–SO₃⁻) 1–10. Forelesningsfiguren viser at sterk anionbytter er OK opp til ca. pH 10, svak anionbytter opp til ca. pH 6, sterk kationbytter fra ca. pH 3 og svak kationbytter fra ca. pH 8. Ved høy eller lav pH anbefales polymere materialer fremfor silika.</Def>
          </div>
          <Diagram title="Sterke vs. svake ionebyttere: kapasitet vs. pH" caption="Skyggelagt: brukbare områder. Kurveskisse." cite={`[${F}, slide 2]`}>
            <Kapasitet />
          </Diagram>
        </Columns>

        <Def term="Retensjon" cite={`[${B1}, p. 74, Info-box 3.13]`}>Avhenger av ladning og type SF, ioniseringsgrad til analytten, type og konsentrasjon av ioner i MF, og molekylstørrelse. Med sterke ionebyttere blir ioniseringsgraden til analytten viktigst: karboksylsyrer (pKa ≈ 5) er uladede ved pH 3, aminer (pKa ≈ 9) uladede ved pH 11. Hydrofobe sekundærinteraksjoner kan reduseres med 10–20 % metanol eller acetonitril i MF.</Def>

        <Columns>
          <div>
            <Def term="Trinn i en IEX-separasjon" cite={`[${GE}, p. 6–7; ${F}, slide 4]`}>(1) <strong>Ekvilibrering</strong>: SF bringes til startbetingelser, og alle ladede grupper er bundet til utbyttbare mot-ioner (Cl⁻, Na⁺). pH og ionestyrke velges slik at målproteinene binder. (2) <strong>Prøvepåsetting og vask</strong>: motsatt ladede proteiner binder og oppkonsentreres. Uladede eller likt ladede går rett gjennom. (3) <strong>Eluering</strong>: ionestyrken økes (av og til endres pH). Saltionene konkurrerer om setene, og proteinene med lavest nettoladning eluerer først. (4) <strong>Regenerering</strong>: vask med høy ionestyrke fjerner det som fortsatt er bundet. (5) <strong>Re-ekvilibrering</strong> i startbuffer.</Def>
            <Def term="Desorpsjon" cite={`[${IC}, p. 1]`}>(1) Redusere nettoladningen ved å endre pH. Det er viktig for å påvirke nettoladningen og brukes for å kontrollere selektiviteten. (2) Tilsette et konkurrerende ion som blokkerer ladningen på ionebytteren, dvs. øke saltkonsentrasjonen.</Def>
          </div>
          <Diagram title="Trinnene i en anionbytter-separasjon" caption="Partikkel med +-grupper. Negativt ladede proteiner binder; nøytrale og positive går gjennom. Ved økende salt løsner først de svakest ladde, så de sterkest ladde. Høysaltvask regenererer." cite={`[${GE}, p. 7, Fig. 1.2]`}>
            <FemTrinn />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Gradient- og trinnvis eluering" cite={`[${IC}, p. 2; ${B1}, p. 74; ${GE}, p. 13]`}>Gradienteluering er mest brukt, deretter trinnvis. Gradienten lages ved å blande buffer A (lite eller ikke noe nøytralt salt) og buffer B (høy konsentrasjon av samme salt), som ellers er identiske. Typisk ionestyrkegradient er 0,05–1 M ved konstant pH, eller en pH-gradient ved konstant ionestyrke. Ionestyrkegradient foretrekkes, fordi oppløst CO₂ påvirker den basiske delen av pH-gradienter. Trinnvis eluering sparer tid og buffer når separasjonen allerede er optimalisert med gradient.</Def>
            <Def term="Gradientens stigningstall" cite={`[${IC}, p. 2]`}>Oppløsningen kan økes ved å senke stigningstallet. Stigningstallet påvirker bare avstanden mellom toppene og endrer ikke elueringsrekkefølgen.</Def>
          </div>
          <Diagram title="Typisk gradienteluering" caption="Rød: NaCl. Blå: absorbans. Ubundne topper før gradienten, flere topper under gradienten, en sterkt bundet topp i høysaltvasken. Skisse." cite={`[${F}, slide 4; ${GE}, p. 13, Fig. 1.9]`}>
            <Gradient />
          </Diagram>
        </Columns>

        <Def term="Optimalisering (rekkefølge)" cite={`[${IC}, p. 2]`}>pH-endring er den mest effektive metoden for proteiner og peptider. Anbefalt rekkefølge: (1) velg ionebytteren som gir best oppløsning under standard forhold (pH 5 → kationbytter, pH 8 → anionbytter), (2) finn pH med best oppløsning, (3) velg den bratteste gradienten som gir akseptable resultater, (4) finn flowen som gir smalest topper.</Def>
        <Def term="Selektivitet vs. effektivitet" cite={`[${GE}, p. 8, 11]`}>{'God selektivitet er viktigere enn høy effektivitet for oppløsningen. Optimal selektivitet fås ved pH der titreringskurvene til proteinene ligger lengst fra hverandre, med en ionebytter med motsatt ladning. Oppløsning: $R_s = 2(V_{R2}-V_{R1})/(w_{b1}+w_{b2})$, som på side 02.'}</Def>
        <Def term="Kapasitet" cite={`[${GE}, p. 18]`}>Mediets evne til å ta opp mot-ioner (proteiner). Total ionisk kapasitet er antall ladede grupper per mL. Dynamisk bindingskapasitet er mengden protein som binder før gjennombrudd ved gitt flow.</Def>
        <Def term="Kromatofokusering" cite={`[${B1}, p. 74–75]`}>Som isoelektrisk fokusering uten elektrisk felt. Proteiner settes på en svak anionbytter ved høy pH og elueres med polybuffere, som danner en pH-gradient i kolonnen. Hvert protein eluerer når pH i kolonnen er lik pI.</Def>
        <Def term="Ionekromatografi (IC) for uorganiske ioner" cite={`[${B1}, p. 75; ${F}, slide 4]`}>Spesialiserte ionebyttere med ledningsevnedeteksjon og suppressor. Kationer elueres med 1–10 mM HCl, anioner med 2 mM karbonat/bikarbonat. Forelesningen viser eksempler på separasjon av F⁻, Cl⁻, NO₃⁻, HPO₄²⁻, SO₄²⁻ og av Li⁺, Na⁺, NH₄⁺, K⁺, Mg²⁺, Ca²⁺.</Def>
        <Def term="Labøvelsen (oppgave 1)" cite={`[${IC}, p. 3–5]`}>Dionex Ultimate 3000 med ProPac SAX-10 / Agilent Bio SAX NP10 (sterk anionbytter, kvartæramin, ikke-porøse 10 µm partikler). Buffer A er 0,02 M Tris/HCl pH 8,5, buffer B er 2,0 M NaCl i samme buffer. Prøven er kreatinkinase, karbonsyreanhydrase og BSA, detektert ved 214 nm. Gradientene 0–0,2 M og 0–0,5 M NaCl på 15 min, med 8 min re-ekvilibrering.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="rs" />
        <p className="muted">Ingen andre ligninger i kursmaterialet for IEX. Sammenhengen mellom pH, pKa og ladningsgrad (Henderson–Hasselbalch) er ikke gitt i filene.</p>
        <Plot
          title="Gradientens stigningstall"
          caption="NaCl-gradient fra 0 til sluttkonsentrasjon over 15 min, som i labøvelsen. Tre topper med faste elueringskonsentrasjoner 0,05 / 0,10 / 0,15 M (illustrative, ikke kursdata). Elueringstid $t = 15 \cdot c_{elu}/c_{slutt}$. Brattere gradient gir raskere eluering og mindre avstand mellom toppene; rekkefølgen er uendret. Start 0,2 M (andre forsøk 0,5 M)."
          cite={`[${IC}, p. 2, 5]`}
          x={{ min: 0, max: 25, label: 'tid (min)' }}
          y={{ label: 'absorbans', min: 0, max: 1.1 }}
          params={[{ key: 'c', label: '$c_{slutt}$', min: 0.1, max: 1, step: 0.01, value: 0.2, unit: 'M NaCl' }]}
          series={cElu.map((ce, i) => ({ key: `p${i}`, label: `c_elu = ${String(ce).replace('.', ',')} M`, t: ['var-a', 'var-c', 'var-e'][i], fn: (x, p) => pk(x, (15 * ce) / p.c) }))}
          marks={[{ x: 15, label: 'gradient slutt' }]}
        />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 5: tre peptider på kationbytter (10 p)"
          given="Ved pH 7,0 har peptid A netto +2, B netto +1 og C netto −1. Kolonnen er en kationbytter med sulfonsyregrupper. MF er fosfatbuffer pH 7,0, først isokratisk, deretter en NaCl-gradient 0–300 mM."
          steps={[
            { title: 'a) Hvilket peptid eluerer først?', body: 'Kolonnen har sulfonsyregrupper (–SO₃⁻), altså en sterk kationbytter med fast negativ ladning. Den binder kationer.' },
            { body: 'Peptid C er netto −1, et anion. Det bindes ikke (kan til og med frastøtes).' },
            { title: 'Svar:', body: 'C eluerer først, ved $t_0$ (tidlig eluering).' },
            { title: 'b) Hvorfor eluerer resten når ionestyrken øker?', body: 'Na⁺ konkurrerer med de bundne peptidkationene om de negative bindingssetene.' },
            { body: 'Samtidig skjermes den elektrostatiske interaksjonen, så bindingsstyrken avtar og peptidene desorberer.' },
            { title: 'Rekkefølge:', body: `B (+1) før A (+2), siden høyere nettoladning krever høyere salt [${IC}, p. 1].` },
            { title: 'c) Hva skjer ved pH 3,5?', body: 'Peptidene blir generelt mer protonerte: flere basiske grupper blir BH⁺, og færre sure grupper er deprotonerte.' },
            { body: 'Nettoladningene blir mer positive. Bindingen til kationbytteren øker for alle.' },
            { body: 'C kan gå fra −1 til ~0 eller positiv, og eluerer da ikke nødvendigvis først lenger. Man får senere eluering og trenger ofte mer salt, og selektiviteten kan bli bedre eller verre.' },
            { title: 'd) Hvorfor brede topper ved for sakte gradient?', body: 'Analyttsonene rekker å diffundere (lang tid på kolonnen), og elueringen skjer over et stort MF-volum (lav «gradientstyrke»). Desorpsjonen blir mer gradvis, og båndspredningen større.' },
          ]}
          cite={`[${E25}, oppg. 5; ${LF25}, oppg. 5]`}
        />
        <FadedExample
          title="H24 oppg. 1(g) + labøvelsen: matrix og anionbytter ved pH 8,5"
          steps={[
            { title: 'Definer matrix:', body: 'bærermaterialet (uorganisk eller organisk) som utgjør hovedstrukturen i SF og holder de funksjonelle gruppene.' },
            { title: 'Gi et eksempel på en matriks og en funksjonell gruppe.', body: `F.eks. polystyren/divinylbenzen eller agarose, med kvartært ammonium (Q, anionbytte) eller sulfonat (kationbytte) [${GE}, p. 15–17].`, hidden: true },
            { title: 'Hvilke egenskaper bestemmer matrixen?', body: 'Mekanisk og kjemisk stabilitet, trykktoleranse og kjemisk kompatibilitet.', hidden: true },
            { title: 'Laben bruker en sterk anionbytter ved pH 8,5. Hvilke proteiner binder?', body: `De med pI < 8,5, som er negativt ladet ved pH 8,5 [${GE}, p. 5].`, hidden: true },
            { title: 'Gradient 0–0,5 M NaCl i stedet for 0–0,2 M på samme tid: hva skjer med retensjonstid og avstand mellom toppene?', body: `Kortere retensjonstid og mindre avstand mellom toppene, samme rekkefølge [${IC}, p. 2].`, hidden: true },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 1(g); ${LF24}, p. 6; ${IC}, p. 3–5]`}
        />
        <Gap>pI-verdier for kreatinkinase, karbonsyreanhydrase, BSA og ovalbumin står ikke i kursfilene. Labbeskrivelsen ber studentene slå dem opp.</Gap>
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="«Sterk» = binder sterkt" cite={`[${IC}, p. 2; ${GE}, p. 17]`}>Feil. «Sterk» og «svak» gjelder om liganden er en sterk eller svak syre/base, altså om ladningen varierer med pH.</Trap>
        <Trap title="Anion- og kationbytter forveksles" cite={`[${GE}, p. 5]`}>Anionbytteren er <em>positivt</em> ladet og binder anioner (proteiner over pI). Kationbytteren er <em>negativt</em> ladet og binder kationer (proteiner under pI).</Trap>
        <Trap title="Feil fortegn på analyttene" cite={`[${LF25}, oppg. 5a]`}>Et anion på en kationbytter bindes ikke og eluerer ved <T text="$t_0$" />, ikke sist.</Trap>
        <Trap title="Bare én elueringsmekanisme" cite={`[${LF25}, oppg. 5b]`}>Salt gir både konkurranse om setene og skjerming av den elektrostatiske interaksjonen.</Trap>
        <Trap title="pH-endring med fast forventet rekkefølge" cite={`[${LF25}, oppg. 5c]`}>Ved ny pH endres alle nettoladninger, og rekkefølgen kan endres.</Trap>
        <Trap title="Slakere gradient er alltid bedre" cite={`[${IC}, p. 2; ${LF25}, oppg. 5d]`}>Slakere gir bedre oppløsning, men for sakte gir brede topper og lang analysetid.</Trap>
        <Trap title="Gradientstigningen endrer rekkefølgen" cite={`[${IC}, p. 2]`}>Nei. Den påvirker bare avstanden mellom toppene.</Trap>
        <Trap title="«Matrix» besvart som «prøvematriks»" cite={`[${LF24}, p. 6]`}>I IEX-sammenheng (H24 1(g)) betyr det bærermaterialet i SF.</Trap>
      </Section>
    </>
  )
}
