import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, T, tone } from '../components'

const H2 = 'HPLC_2_u_notater.pdf'
const K = 'Kilder til Båndspredning 200826.pdf'
const B1 = 'chromatographgy_basics_part1.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const DIM = '–'

export const meta = {
  title: 'Kolonner og partikler',
  topic: 'hplc',
  examWeight: {
    level: 'low',
    note: 'H25 oppg. 1 flervalg (mindre partikler → høyere N), H24 1(e) delvis (partikkelstørrelse, kolonnelengde/diameter, temperatur som parametere for oppløsning)',
  },
  examTasks: [
    'Ingen tasks_by_page-oppføring for side 05 i 00-index.md.',
    'H2025 oppg. 1 (flervalg, 1 av 5 delspørsmål): «En reduksjon i partikkelstørrelse i pakkede kolonner vil normalt føre til …» → høyere plateantall og bedre separasjon.',
    'H2024 oppg. 1(e) (6 p, delvis): parametere for bedre oppløsning i HPLC. Løsningsforslaget nevner kolonnetemperatur, stasjonærfase (partikkelstørrelse, porestørrelse, kjemi) og kolonnelengde/diameter [LF eksamen H2024 IMAK2008.pdf, p. 5].',
  ],
  buildsOn: ['02-effektivitet-og-opplosning', '03-bandspredning-van-deemter', '04-hplc-system-pumper-injeksjon'],
  usedIn: ['07-adsorpsjon-normalfase', '08-omvendt-fase-og-ionepar', '12-gc-kolonner-og-stasjonaerfaser'],
  sources: [
    `[${H2}, slide 1–3] (\`HPLC_2_m_delvisnotater.pdf\` er identisk)`,
    `[${K}, slide 2–4]`,
    `[${B1}, p. 11, 13, 48, 54–63] (p. = boksidetall; PDF-side = bokside + 16)`,
    '[Pensum.pdf, p. 1]',
    `[IMAK2008 eksamen H2025.pdf, oppg. 1] / [${LF25}, oppg. 1]`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 1(e)] / [${LF24}, p. 5]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hva skjer med mottrykket hvis partikkelstørrelsen reduseres fra 5 til 3 µm ved samme kolonnelengde?', a: `Det øker nesten tre ganger, fordi $\\Delta p \\propto 1/d_p^2$ [${B1}, p. 58].` },
    { id: 'p2', kind: 'pretest', q: 'Hva er en core-shell-partikkel?', a: `En partikkel med hard, ikke-porøs kjerne og et tynt porøst overflatelag [${H2}, slide 3; ${B1}, p. 58–59].` },
    { id: 'p3', kind: 'pretest', q: 'Hva gjør økt kolonnetemperatur normalt med retensjonen i omvendt fase?', a: `Den reduseres, for de fleste forbindelser [${B1}, p. 61].` },
    { id: 't1', q: 'Hvorfor gir en smalere kolonne (mindre ID) lavere deteksjonsgrense med UV-detektor når prøvemengden er begrenset?', a: `Mindre ID gir mindre fortynning og mer konsentrerte bånd, og UV er konsentrasjonsfølsom [${B1}, p. 55].` },
    { id: 't2', q: 'Hva er fordelen med monolittiske kolonner, og hva er ulempen?', a: `Store gjennomstrømningsporer gir lavt mottrykk og høy flow eller lange kolonner, og ingen fritter. Ulempen er generelt lavere effektivitet per meter enn pakkede kolonner, unntatt ved høy flow [${B1}, p. 60].` },
    { id: 't3', q: 'Hvilken porestørrelse anbefales for molekyler med $M$ > 2000, og hvorfor?', a: `30 nm, for å unngå at analyttene ekskluderes fra porene [${B1}, p. 58].` },
    { id: 't4', q: 'Gi to grunner til at høyere kolonnetemperatur kan gi bedre toppform og raskere analyse.', a: `Høyere $D$ (Stokes–Einstein) gir bedre masseoverføring, og lavere viskositet gir lavere mottrykk [${B1}, p. 61–62].` },
    { id: 't5', q: 'Hva skiller flash-kromatografi fra preparativ HPLC?', a: `Flash bruker korte, vide kolonner med 40–60 µm irregulære partikler drevet av N₂-trykk. Det er raskt og billig, men har lav effektivitet [${B1}, p. 63].` },
  ],
  equations: [
    {
      id: 'dp', label: 'Mottrykk over kolonnen',
      tex: String.raw`\va{\Delta p} = \frac{\kappa\, \vb{u}\, \vc{\eta}\, \vd{L}}{\ve{d_p}^2}`,
      vars: [
        { sym: String.raw`\va{\Delta p}\ (P)`, desc: 'mottrykk', unit: String.raw`\mathrm{bar}` },
        { sym: String.raw`\kappa`, desc: 'konstant', unit: DIM },
        { sym: String.raw`\vb{u}`, desc: 'lineær MF-hastighet', unit: String.raw`\mathrm{mm/s}` },
        { sym: String.raw`\vc{\eta}`, desc: 'viskositet til MF', unit: String.raw`\mathrm{kg\,m^{-1}\,s^{-1}}` },
        { sym: String.raw`\vd{L}`, desc: 'kolonnelengde', unit: String.raw`\mathrm{cm}` },
        { sym: String.raw`\ve{d_p}`, desc: 'partikkeldiameter', unit: String.raw`\mathrm{\mu m}` },
      ],
      note: 'Dobbel kolonnelengde gir dobbelt trykk, og 5 → 3 µm partikler gir nesten tre ganger trykket.',
      cite: `[${H2}, slide 2; ${B1}, p. 58, lign. 3.2]`,
      check: { status: 'mismatch', note: 'Kun notasjon: både slide 2 og bok lign. 3.2 (p. 58, PDF s. 74) skriver P = κuηL/d_p², ikke Δp. Ellers identisk.' },
    },
    {
      id: 'se', label: 'Stokes–Einstein (temperaturavhengighet av D)',
      tex: String.raw`\vf{D} = \frac{RT}{6\pi \vc{\eta} N r}`,
      vars: [
        { sym: String.raw`\vf{D}`, desc: 'diffusjonskoeffisient', unit: String.raw`\mathrm{m^2/s}` },
        { sym: 'R', desc: 'gasskonstanten', unit: String.raw`\mathrm{J\,mol^{-1}\,K^{-1}}` },
        { sym: 'T', desc: 'temperatur', unit: String.raw`\mathrm{K}` },
        { sym: String.raw`\vc{\eta}`, desc: 'viskositet', unit: String.raw`\mathrm{kg\,m^{-1}\,s^{-1}}` },
        { sym: 'N', desc: 'Avogadros tall', unit: String.raw`\mathrm{mol^{-1}}` },
        { sym: 'r', desc: 'molekylradius', unit: String.raw`\mathrm{m}` },
      ],
      note: 'Høyere T gir høyere $D$ og lavere $\\eta$, og dermed bedre masseoverføring (lavere C-ledd). B-leddet har liten betydning i HPLC, så nettoeffekten er positiv.',
      cite: `[${B1}, p. 61, lign. 3.3, Info-box 3.6]`,
      check: { status: 'verified', note: 'Bok lign. 3.3 (p. 61, PDF s. 77): D = RT/6πηNr.' },
    },
    {
      id: 'Nm', label: 'Platetall fra plater per meter',
      tex: String.raw`N = (\text{plater/m}) \times \vd{L}`,
      vars: [],
      note: 'Bokas eksempel: 2,5 µm partikler (> 200 000 plater/m) i en 10 cm kolonne gir 20 000 plater. Følger av $H = L/N$ (side 02).',
      cite: `[${B1}, p. 56]`,
      check: { status: 'verified', note: 'Bok p. 56 (PDF s. 72) gir sammenhengen i tekst (> 200 000 plater/m, 10 cm → 20 000 plater), ikke som egen formel.' },
    },
  ],
}


/* Three particle types */
function Partikler() {
  const pores = (cx, cy, rin, rout) => {
    const out = []
    for (let dx = -rout; dx <= rout; dx += 11) for (let dy = -rout; dy <= rout; dy += 11) {
      const d = Math.hypot(dx, dy)
      if (d >= rin && d <= rout) out.push(<circle key={`${dx},${dy}`} cx={cx + dx} cy={cy + dy} r={3} style={{ fill: 'var(--bg)', stroke: tone('muted') }} />)
    }
    return out
  }
  return (
    <Svg w={460} h={300} label="Partikkeltyper">
      {/* totally porous */}
      <circle cx={80} cy={100} r={60} style={{ fill: `color-mix(in srgb, ${tone('var-e')} 25%, var(--bg))`, stroke: tone('var-e'), strokeWidth: 2 }} />
      {pores(80, 100, 0, 54)}
      <Label x={80} y={185} size={13}>totalt porøs</Label>
      <Label x={80} y={203} size={12}>porer 10–30 nm</Label>
      {/* core-shell */}
      <circle cx={230} cy={100} r={60} style={{ fill: `color-mix(in srgb, ${tone('var-e')} 25%, var(--bg))`, stroke: tone('var-e'), strokeWidth: 2 }} />
      {pores(230, 100, 46, 56)}
      <circle cx={230} cy={100} r={42} style={{ fill: `color-mix(in srgb, ${tone('muted')} 60%, var(--bg))`, stroke: tone('ink') }} />
      <Label x={230} y={104} size={11}>solid kjerne</Label>
      <Label x={230} y={185} size={13}>core-shell</Label>
      <Label x={230} y={203} size={12}>kjerne 1,3–2,6 µm</Label>
      <Label x={230} y={219} size={12}>skall 0,2–0,5 µm</Label>
      {/* non-porous */}
      <circle cx={380} cy={100} r={60} style={{ fill: `color-mix(in srgb, ${tone('muted')} 45%, var(--bg))`, stroke: tone('ink'), strokeWidth: 2 }} />
      <Label x={380} y={185} size={13}>ikke-porøs</Label>
      <Label x={380} y={203} size={12}>liten SF-overflate,</Label>
      <Label x={380} y={219} size={12}>lav kapasitet</Label>
      {/* diffusion paths */}
      <Label x={20} y={256} anchor="start" size={13}>diffusjonsvei (→ C-leddet, side 03):</Label>
      <Arrow x1={20} y1={280} x2={170} y2={280} t="var-c" />
      <Label x={95} y={296} size={12}>lang (helt porøs)</Label>
      <Arrow x1={220} y1={280} x2={262} y2={280} t="intuition" />
      <Label x={241} y={296} size={12}>kort (core-shell)</Label>
    </Svg>
  )
}

/* Stacked chromatograms, n peaks with given width; labels */
function Stablet({ rows, xmax, xlabel }) {
  const X = (t) => 60 + (t / xmax) * 360
  return (
    <Svg w={460} h={rows.length * 90 + 40} label="Stablede kromatogrammer">
      {rows.map((r, i) => {
        const base = 80 + i * 90
        return (
          <g key={i}>
            <line x1={X(0)} y1={base} x2={X(xmax)} y2={base} style={{ stroke: tone('muted') }} />
            {r.peaks.map((t, j) => (
              <Curve key={j} t={r.t} width={2} points={Array.from({ length: 21 }, (_, k) => { const x = t - 3 * r.s + (6 * r.s * k) / 20; return [X(x), base - r.h[j % r.h.length] * Math.exp(-((x - t) ** 2) / (2 * r.s * r.s))] })} />
            ))}
            <Label x={X(0) - 6} y={base - 4} anchor="end" t={r.t} size={13}>{r.left}</Label>
            <Label x={X(xmax)} y={base - 52} anchor="end" t={r.t} size={13}>{r.right}</Label>
          </g>
        )
      })}
      {Array.from({ length: Math.floor(xmax) + 1 }, (_, k) => <Label key={k} x={X(k)} y={rows.length * 90 + 14} size={11}>{k}</Label>)}
      <Label x={X(xmax)} y={rows.length * 90 + 34} anchor="end" size={12}>{xlabel}</Label>
    </Svg>
  )
}

/* Van Deemter for three particle sizes (sketch after Fig. 3.9) */
function VD3() {
  const X = (u) => 60 + (u / 1.5) * 360, Y = (h) => 230 - (h / 40) * 200
  const c = (A, B, C, t, lab) => {
    const pts = Array.from({ length: 40 }, (_, i) => { const u = 0.02 + (1.4 * i) / 39; return [X(u), Y(Math.min(40, A + B / u + C * u))] })
    return <g><Curve t={t} points={pts} /><Label x={X(1.42) + 4} y={Y(A + B / 1.42 + C * 1.42) + 4} anchor="start" t={t} size={12}>{lab}</Label></g>
  }
  return (
    <Svg w={460} h={270} label="Van Deemter for tre partikkelstørrelser">
      <Arrow x1={60} y1={230} x2={430} y2={230} />
      <Arrow x1={60} y1={230} x2={60} y2={20} />
      {[0, 10, 20, 30, 40].map((h) => <Label key={h} x={52} y={Y(h) + 4} anchor="end" size={11}>{h}</Label>)}
      {[0, 0.5, 1, 1.5].map((u) => <Label key={u} x={X(u)} y={248} size={11}>{String(u).replace('.', ',')}</Label>)}
      <Label x={430} y={266} anchor="end" size={12}>u (cm/s)</Label>
      <Label x={66} y={22} anchor="start" size={12}>H (µm)</Label>
      {c(4, 0.15, 9, 'var-a', '5,0 µm')}
      {c(3, 0.12, 5, 'var-b', '3,5 µm')}
      {c(2.5, 0.1, 0.8, 'var-e', '1,8 µm')}
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Partiklene bestemmer effektivitet og trykk">
        <MentalModel cite={`[${B1}, p. 55–62; ${K}, slide 3–4; ${H2}, slide 2]`}>
          Kolonnen er der separasjonen skjer, og det er partiklene som bestemmer både hvor effektiv den er og hvor mye trykk den krever. Små partikler gir korte diffusjonsveier og lite eddy-diffusjon, altså lav <T text="$H$" /> og flat van Deemter-kurve, slik at man kan kjøre raskt uten å miste mye effektivitet.{' '}
          Prisen er trykket: <V c="a">Δp</V> øker med <T text="$1/d_p^2$" />, og derfor krever partikler under 2 µm UHPLC-pumper. Core-shell-partikler og monolitter er to måter å få kort diffusjonsvei eller lavt trykk uten å gå hele veien ned i partikkelstørrelse.{' '}
          Smalere kolonner fortynner prøven mindre og sparer løsemiddel, og temperaturen påvirker både retensjon, toppform og trykk.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Analytisk kolonne og guard-kolonne" cite={`[${H2}, slide 1; ${B1}, p. 57]`}>En kort, utskiftbar guard-kolonne foran den analytiske beskytter den. Anbefales hvis prøven inneholder komponenter som adsorberes irreversibelt, og godt laget gir den ingen betydelig reduksjon i effektivitet.</Def>
        <Def term="Kolonnemateriale og frit" cite={`[${B1}, p. 54–55]`}>Vanligvis rustfritt stål (noen med glassinnervegg). Kapillær- og nanokolonner er av fused silica. Partiklene holdes på plass av fritter i hver ende.</Def>
        <Diagram title="Kolonnedimensjoner (Tabell 3.1)" cite={`[${B1}, p. 55, Tabell 3.1]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td><strong>Type</strong></td><td><strong>ID (mm)</strong></td><td><strong>L (cm)</strong></td><td><T text="$d_p$ (µm)" /></td><td><strong>Flow (µL/min)</strong></td></tr>
              <tr><td>Konvensjonell</td><td>2–5</td><td>3–25</td><td>3–5</td><td>100–2000</td></tr>
              <tr><td>UHPLC</td><td>1–2</td><td>3–15</td><td>1,7–1,9</td><td>100–1000</td></tr>
              <tr><td>Microbore</td><td>0,5–1</td><td>3–25</td><td>3–5</td><td>20–100</td></tr>
              <tr><td>Kapillær</td><td>0,1–0,5</td><td>3–25</td><td>3–5</td><td>1–20</td></tr>
              <tr><td>Nanoflow</td><td>0,01–0,10</td><td>5–25</td><td>3–5</td><td>0,02–0,20</td></tr>
            </tbody>
          </table>
        </Diagram>
        <Def term="Effekt av ID på deteksjon" cite={`[${B1}, p. 55]`}>Mindre ID gir mer konsentrerte bånd (mindre fortynning). Det forbedrer deteksjonsgrensen med konsentrasjonsfølsomme detektorer (UV, fluorescens, ESI-MS) når prøvemengden er begrenset.</Def>
        <Def term="Løsemiddelbesparelse" cite={`[${B1}, p. 55]`}>Ved samme lineære flow reduserer 4,6 → 1 mm ID forbruket fra 1 til 0,05 mL/min. Ikke hvis flowen reduseres med split ved pumpen.</Def>

        <Columns>
          <div>
            <Def term="Totalt porøse partikler" cite={`[${B1}, p. 58; ${H2}, slide 3]`}>{'Porøse hele veien gjennom, med porer normalt 10–30 nm (100–300 Å), og noen 50 nm eller ned til 6–8 nm. For små molekyler anbefales 6–10 nm (høyere overflate, ca. 400 m²/g). For $M$ > 2000 gir 30 nm porer sikkerhet mot eksklusjon fra porene.'}</Def>
            <Def term="Core-shell-partikler" cite={`[${H2}, slide 3; ${B1}, p. 58–59]`}>Hard kjerne med porøs overflate. Moderne versjoner har en solid kjerne på 1,3–2,6 µm og et porøst skall på 0,2–0,5 µm (standard pore 10 nm, ca. 200 m²/g). Korte diffusjonsveier gir 5 cm kolonner opptil 15 000 plater (≈ 300 000 plater/m), og rask masseoverføring tillater høy flow.</Def>
            <Def term="Ikke-porøse (pellikulære) partikler" cite={`[${H2}, slide 3; ${B1}, p. 58]`}>Liten SF-overflate og lav kapasitet. Brukes av og til for makromolekyler pga. kort diffusjon, men har mye lavere lastekapasitet enn totalt porøse partikler.</Def>
          </div>
          <Diagram title="Partikkeltyper" cite={`[${H2}, slide 3; ${K}, slide 2; ${B1}, p. 58–59]`}>
            <Partikler />
          </Diagram>
        </Columns>

        <Columns>
          <div>
            <Def term="Kolonneeffektivitet vs. partikkelstørrelse" cite={`[${B1}, p. 56–57, Fig. 3.9]`}>{'5 µm porøse partikler gir ca. 75–80 000 plater/m, 2,5 µm > 200 000 plater/m og 1,8 µm > 250 000 plater/m. Små partikler tåler høy lineær flow uten stor økning i $H$ (flate van Deemter-kurver). Store molekyler gir lavere effektivitet pga. lavere diffusjonshastighet.'}</Def>
          </div>
          <Diagram title="Van Deemter for tre partikkelstørrelser" caption="Skisse etter bokas Fig. 3.9: 5,0 µm høyest og bratt stigende, 1,8 µm lavest og nesten flat ved høy $u$." cite={`[${B1}, p. 57, Fig. 3.9]`}>
            <VD3 />
          </Diagram>
        </Columns>

        <Columns>
          <Def term="Partikkelstørrelse, trykk og oppløsning (forelesning)" cite={`[${H2}, slide 2; ${K}, slide 4]`}>{'5 µm ved 165 bar gir $R_s$ = 5,04. 3,0 µm ved 280 bar gir $R_s$ = 6,44. 1,9 µm (UHPLC) ved 655 bar gir $R_s$ = 7,54.'}</Def>
          <Diagram title="Partikkelstørrelse: trykk vs. oppløsning" caption="Samme seks-topps separasjon. Toppene blir smalere og trykket stiger når $d_p$ minker. Skisse; toppbredder er illustrasjon." cite={`[${H2}, slide 2; ${K}, slide 4]`}>
            <Stablet xmax={3} xlabel="tid (min)" rows={[
              { left: '1,9 µm', right: '655 bar · Rs = 7,54 · UHPLC', t: 'var-a', s: 0.02, peaks: [1.2, 1.45, 1.7, 1.95, 2.2, 2.45], h: [45, 40, 30, 30, 30, 40] },
              { left: '3,0 µm', right: '280 bar · Rs = 6,44', t: 'var-b', s: 0.028, peaks: [1.2, 1.45, 1.7, 1.95, 2.2, 2.45], h: [45, 40, 30, 30, 30, 40] },
              { left: '5 µm', right: '165 bar · Rs = 5,04', t: 'var-e', s: 0.036, peaks: [1.2, 1.45, 1.7, 1.95, 2.2, 2.45], h: [45, 40, 30, 30, 30, 40] },
            ]} />
          </Diagram>
        </Columns>

        <Columns>
          <Def term="Kolonnelengde og oppløsning (forelesning)" cite={`[${H2}, slide 2]`}>{'2,1 mm ID med 2,4 µm partikler. 50 mm gir $R_s$ = 4,6, 100 mm gir 8,5 og 150 mm gir 9,6.'}</Def>
          <Diagram title="Kolonnelengde vs. oppløsning" caption="Lengre kolonne gir bedre $R_s$, men lengre tid. Alle med 2,4 µm partikler, 2,1 mm ID." cite={`[${H2}, slide 2]`}>
            <Stablet xmax={6} xlabel="tid (min)" rows={[
              { left: '50 mm', right: 'Rs = 4,6', t: 'var-a', s: 0.05, peaks: [0.9, 1.1, 1.3, 1.6], h: [50, 35, 40, 22] },
              { left: '100 mm', right: 'Rs = 8,5', t: 'var-b', s: 0.06, peaks: [1.8, 2.1, 2.6, 3.5], h: [50, 35, 40, 22] },
              { left: '150 mm', right: 'Rs = 9,6', t: 'var-d', s: 0.07, peaks: [2.5, 3.0, 3.5, 4.7], h: [50, 35, 40, 22] },
            ]} />
          </Diagram>
        </Columns>

        <Def term="UHPLC/UPLC" cite={`[${B1}, p. 59, Fig. 3.11]`}>Små partikler og lange kolonner gir høyt trykk. Siden små partikler gir lite ekstra båndspredning ved høy hastighet, oppnås kortere analysetid og høyere topper. Trykkgrensen er økt fra 400 til 700, 1000 og 1200 bar, og det kreves detektorer med rask elektronikk (≥ 40 kHz).</Def>
        <Def term="Monolittiske kolonner" cite={`[${B1}, p. 59–60]`}>Ingen partikler, men en kontinuerlig porøs struktur polymerisert inne i kolonnen (organisk polymer eller silikat). Den har makroporer (noen µm), mesoporer (2–50 nm) og mikroporer (&lt; 2 nm). Store gjennomstrømningsporer gir lavere mottrykk og tillater høyere flow eller lengre kolonner, og det trengs ingen fritter. Effektiviteten per meter er generelt lavere enn for pakkede kolonner, unntatt ved høy flow.</Def>
        <Def term="Åpne rørkolonner (OTC) i HPLC" cite={`[${B1}, p. 61]`}>{'Dominerer i GC, men ikke i HPLC. Golay-ligningen viser hvorfor: C-leddet dominerer, og fordi $D_m$ er mye mindre i væske, må $d_c$ ned til ≤ 10 µm. Ulempen er svært lav lastekapasitet. Fordelene er bedre følsomhet med konsentrasjonsfølsom deteksjon, mindre adsorpsjon av proteiner og ingen fritter. De krever ekte «zero dead volume»-koblinger.'}</Def>
        <Def term="Kolonnelevetid" cite={`[${B1}, p. 57]`}>Måneder opptil 1 år med god beskyttelse og vedlikehold. En ny kolonne kan trenge flere prøveinjeksjoner før elueringen blir stabil (adsorptive seter må dekkes). En tilstoppet innløpsfrit gir høyere mottrykk. Backflushing kan av og til redde kolonnen, men ikke hvis innløpet er tettet med proteiner.</Def>
        <Def term="Toppformer og årsaker" cite={`[${B1}, p. 57]`}>Tidlig eluerende topper med fronting og lavere N skyldes ofte overlasting. Tidlige topper med tailing kan skyldes hulrom (voids) ved innløpet. Tailing av retarderte analytter kan skyldes interaksjon med ubelagte seter på pakkingen, noe som kan motvirkes ved å endre MF.</Def>
        <Def term="Temperaturkontroll" cite={`[${B1}, p. 61–62]`}>{'Retensjon, særlig i omvendt fase, avhenger av temperatur. Økt T reduserer retensjonen for de fleste forbindelser (unntak bl.a. polyetylenglykoler) og forbedrer ofte asymmetriske topper. Forklaringen er at $D$ øker med T (Stokes–Einstein) og viskositeten synker, noe som gir bedre masseoverføring og lavere trykk. Kolonner bør derfor stå i kolonneovn.'}</Def>
        <Def term="Temperatur vs. løsemiddel" cite={`[${B1}, p. 63]`}>Generelt, og særlig for små molekyler, påvirker løsemiddelendringer retensjonen mer enn temperatur, så løsemiddelgradienter foretrekkes.</Def>
        <Def term="Preparativ LC og flash" cite={`[${B1}, p. 63]`}>Målet er å fraksjonere mest mulig prøve raskt. Overlasting (volum eller masse) gir båndspredning og overlappende topper. Flash bruker korte, vide kolonner (15–20 cm) med 40–60 µm irregulære partikler og N₂-trykk. Det er raskt og billig, men har lav effektivitet.</Def>
        <Def term="Ikke pensum" cite="[Pensum.pdf]">Mikrochip-kolonner (3.4.3).</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="dp" />
        <Plot
          title="Relativt mottrykk mot partikkelstørrelse"
          caption="$\Delta p/\Delta p_{ref} = (L/15\,\text{cm})\cdot(5\,\mu\text{m}/d_p)^2$, relativt til referansen 5 µm og $L$ = 15 cm, med samme $u$ og $\eta$. Områdene for $d_p$ og $L$ er fra Tabell 3.1. Stiplede linjer: $d_p$ = 3 µm (faktor ≈ 2,8 ved 15 cm) og 1,7 µm. Hold musen over kurven for å lese faktoren. Grensene 400 bar (konvensjonell) og 1000–1200 bar (UHPLC) kan ikke tegnes inn, fordi innholdet ikke gir et absolutt referansetrykk."
          cite={`[${B1}, p. 48, 55, 58]`}
          x={{ min: 1.7, max: 5, label: 'd_p (µm)' }}
          y={{ label: 'Δp / Δp_ref', min: 0 }}
          params={[{ key: 'L', label: '$L$', min: 5, max: 25, step: 1, value: 15, unit: 'cm' }]}
          series={[{ key: 'p', label: 'Δp/Δp_ref', t: 'var-a', fn: (d, p) => (p.L / 15) * (5 / d) ** 2 }]}
          marks={[{ x: 3, label: '3 µm' }, { x: 1.7, label: '1,7 µm' }]}
        />
        <Eq id="se" />
        <Eq id="Nm" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="Partikkelstørrelse, trykk og plater (bokas tallene)"
          steps={[
            { title: 'Trykkøkning 5 → 3 µm.', body: String.raw`Med samme $u$, $\eta$ og $L$ er $\Delta p \propto 1/d_p^2$, så $\dfrac{\Delta p_{3}}{\Delta p_{5}} = \left(\dfrac{5}{3}\right)^2 = \dfrac{25}{9} \approx 2{,}8$. Det er «nesten tre ganger», som boka skriver.` },
            { title: 'Dobbel kolonnelengde.', body: '$\\Delta p \\propto L$, så trykket dobles.' },
            { title: 'Platetall for en 10 cm kolonne med 2,5 µm partikler.', body: '> 200 000 plater/m × 0,10 m = 20 000 plater.' },
            { title: 'Sammenlign med 5 µm.', body: '75–80 000 plater/m × 0,10 m ≈ 7500–8000 plater.' },
            { title: 'Hva betyr det for oppløsningen?', body: '$R_s \\propto \\sqrt{N}$ (side 02), så $\\sqrt{20\\,000/7750} \\approx 1{,}6$ ganger bedre oppløsning, mot ca. 2,8 ganger høyere trykk ved 3 µm (enda mer ved 2,5 µm).' },
            { title: 'Konklusjon.', body: `Mindre partikler gir høyere platetall og bedre separasjon, som er riktig svar på H25 oppg. 1 [${LF25}, oppg. 1], men trykket begrenser hvor langt man kan gå uten UHPLC.` },
          ]}
          cite={`[${B1}, p. 56, 58]`}
        />
        <FadedExample
          title="Core-shell-kolonne"
          given="Gitt: En 5 cm core-shell-kolonne gir opptil 15 000 plater."
          steps={[
            { title: 'Plater per meter:', body: '$15\\,000 / 0{,}05\\text{ m} = 300\\,000$ plater/m.' },
            { title: 'Platehøyde: $H = L/N = 5\\text{ cm}/15\\,000 = \\;?$', body: '3,3·10⁻⁴ cm = 3,3 µm.', hidden: true },
            { title: 'Er dette bedre eller dårligere enn de 5–10 µm boka forventer for godt pakkede HPLC-kolonner?', body: `Bedre (lavere $H$) [${B1}, p. 11].`, hidden: true },
            { title: 'Hvilket van Deemter-ledd forklarer at core-shell-partikler tåler høy flow?', body: 'C-leddet, siden kort diffusjonsvei i det tynne porøse skallet gir rask masseoverføring.', hidden: true },
            { title: 'Hvorfor er ikke helt ikke-porøse partikler like gode for analytisk bruk?', body: `Mye lavere lastekapasitet [${B1}, p. 58].`, hidden: true },
          ]}
          cite={`[${B1}, p. 59]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Mindre partikler gir lavere trykk" cite={`[${B1}, p. 58]`}>{'Motsatt. $\\Delta p \\propto 1/d_p^2$.'}</Trap>
        <Trap title="Trykket skalerer lineært med partikkelstørrelse" cite={`[${B1}, p. 58]`}>Feil. Det skalerer kvadratisk, så 5 → 3 µm gir ~2,8 ganger trykket, ikke 1,7.</Trap>
        <Trap title="Dobbel lengde gir dobbel oppløsning" cite={`[${B1}, p. 13, 58]`}>{'Den gir dobbelt $N$ og dobbelt trykk, men bare $\\sqrt{2}$ ganger bedre $R_s$.'}</Trap>
        <Trap title="Platetall fra gradientkjøring" cite={`[${B1}, p. 56, Info-box 3.3]`}>Kan bare måles isokratisk. Ved gradient brukes toppkapasitet.</Trap>
        <Trap title="Fronting = kolonnen er ødelagt" cite={`[${B1}, p. 57]`}>Fronting av tidlige topper skyldes ofte overlasting. Tailing kan skyldes hulrom ved innløpet eller interaksjon med ubelagte seter.</Trap>
        <Trap title="Høyere temperatur øker retensjonen" cite={`[${B1}, p. 61]`}>For de fleste forbindelser reduseres den.</Trap>
        <Trap title="Åpne rør er like gode i HPLC som i GC" cite={`[${B1}, p. 61]`}>{'Nei. $D_m$ i væske er mye mindre, så $d_c$ må ned til ≤ 10 µm, og kapasiteten blir svært lav.'}</Trap>
      </Section>
    </>
  )
}
