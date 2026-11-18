import { Section, MentalModel, Def, Example, FadedExample, Trap, Gap, Block, Diagram, Svg, Arrow, Label, Curve, Plot, Columns, V, tone } from '../components'

const P2 = 'Proteinkarakterisering del 2 m notater.pdf'
const DB = 'hele dokbio261016.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const U = '**[UTLEDET — ingen fasit i LF]** '

export const meta = {
  title: 'Immunologiske metoder og immunelektroforese',
  topic: 'elektroforese',
  examWeight: { level: 'low', note: 'H25 oppg. 9: 2 av 10 linjer (≈1 av 5 p) gjelder immunologisk elektroforese («utfellingsbuer», «Ag-Ast kompleks»). Ikke spurt på H24 eller i øvingen. Western-delen av prinsippet ble spurt i H25 oppg. 10 (side 22)' },
  examTasks: [
    'H2025: oppg. 9 (kombiner utsagn og metode) (index: side 20–21, 23–24, 26)',
    'H2025 oppg. 9 (5 p totalt, automatisk rettet, ingen fasit i LF): «Resultat vises som utfellingsbuer» og «Dannelse av Ag-Ast kompleks» → immunologisk elektroforese [UTLEDET — ingen fasit].',
    'H2025 oppg. 10: Western blotting, se side 22.',
    'Ikke spurt på H2024 eller i øvingen. Slide 34 er gruppediskusjon med utdelte kort, og spørsmålene finnes ikke i filene. GAP: spørsmålene fra gruppediskusjonen (slide 34) er ikke lagt ut.',
  ],
  buildsOn: ['19-elektroforese-teori-og-geler', '22-geldeteksjon-og-western-blot'],
  usedIn: ['27-biosensorer-prinsipp-og-typer'],
  sources: [
    `[${P2}, slide 17–34]`,
    `[${DB}, p. 35–44] (p. = trykt sidetall; PDF-side = trykt side + 5): ervervet immunitet, Ag/epitop/hapten, antistoffstruktur og -klasser, poly- og monoklonale Ast`,
    `[${E25}, oppg. 9] / [${LF25}, oppg. 9]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hva skjer når et antistoff møter «sitt» antigen i en agarosegel ved omtrent ekvivalente mengder?', a: `Det dannes et Ag-Ast kompleks som feller ut og blir synlig som en utfellingsbue eller -ring. Ag er løselig, men Ast gjør det uløselig [${P2}, slide 23–24].` },
    { id: 'p2', kind: 'pretest', q: 'Hvilke av de immunologiske gelmetodene er kvantitative?', a: `Enkel radial immundiffusjon (RID/Mancini) og rakettelektroforese. Begge bruker en standardkurve. Motstrømselektroforese og immunelektroforese er kvalitative [${P2}, slide 26, 28, 30–31].` },
    { id: 'p3', kind: 'pretest', q: 'Hvilken del av antistoffet binder antigenet?', a: `Fab-delen (armene), som har variable områder ytterst. Fc (halen) er konstant [${P2}, slide 19; ${DB}, p. 39].` },
    { id: 't1', q: 'Hvorfor kan et antistoff danne et nettverk (kompleks) med antigenet?', a: `Det har to identiske antigenbindingsseter og kan derfor fungere som bro mellom to Ag-molekyler [${DB}, p. 39].` },
    { id: 't2', q: 'Hvordan velges pH i rakettelektroforese, og hvorfor?', a: `Slik at Ast i gelen er ubevegelig mens Ag er negativt ladet og vandrer. Da «skyves» Ag inn i Ast-gelen og danner en rakett med høyde ∝ [Ag] [${P2}, slide 31].` },
    { id: 't3', q: 'En Ag-løsning inneholder to proteiner som begge gjenkjennes av antiserumet. Hva ser du i en dobbelimmunodiffusjon?', a: `To utfellingsbuer [${P2}, slide 25].` },
    { id: 't4', q: 'Hva er IFE brukt til, og hvilke Ast tilsettes?', a: `Til å identifisere M-komponent eller immunglobulintype, f.eks. i utredning av beinmargskreft. Ast mot IgG, IgA, IgM, kappa og lambda tilsettes etter elektroforese [${P2}, slide 33].` },
    { id: 't5', q: 'Hvilken immunologisk gelmetode er «mest kjent og anvendt», og hva måles?', a: `RID (Mancini). Diameteren på utfellingsringen måles, og den er proporsjonal med [Ag] [${P2}, slide 30].` },
  ],
  equations: [],
}

/* Antibody Y-structure */
function Antistoff() {
  return (
    <Svg w={460} h={290} label="Antistoffets Y-struktur">
      {/* heavy chains */}
      <path d="M 220 270 L 220 150 L 140 60" style={{ fill: 'none', stroke: tone('var-a'), strokeWidth: 10, strokeLinecap: 'round' }} />
      <path d="M 240 270 L 240 150 L 320 60" style={{ fill: 'none', stroke: tone('var-a'), strokeWidth: 10, strokeLinecap: 'round' }} />
      {/* light chains */}
      <path d="M 196 140 L 120 70" style={{ fill: 'none', stroke: tone('var-e'), strokeWidth: 8, strokeLinecap: 'round' }} />
      <path d="M 264 140 L 340 70" style={{ fill: 'none', stroke: tone('var-e'), strokeWidth: 8, strokeLinecap: 'round' }} />
      <line x1={220} y1={170} x2={240} y2={170} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={220} y1={180} x2={240} y2={180} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={196} y1={140} x2={212} y2={146} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <line x1={264} y1={140} x2={248} y2={146} style={{ stroke: tone('ink'), strokeWidth: 2 }} />
      <circle cx={128} cy={58} r={14} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2, strokeDasharray: '4 3' }} />
      <circle cx={332} cy={58} r={14} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2, strokeDasharray: '4 3' }} />
      <Label x={128} y={30} size={10} t="trap">antigen binding site</Label>
      <Label x={332} y={30} size={10} t="trap">antigen binding site</Label>
      <Label x={90} y={120} size={12} t="var-b">Fab</Label>
      <Label x={370} y={120} size={12} t="var-b">Fab</Label>
      <Label x={290} y={240} anchor="start" size={12} t="var-b">Fc (konstant)</Label>
      <Label x={70} y={90} size={10}>variable ytterst</Label>
      <Label x={250} y={200} anchor="start" size={10}>S–S</Label>
      <Label x={20} y={262} anchor="start" size={10} t="var-a">tung kjede ~450 as</Label>
      <Label x={20} y={278} anchor="start" size={10} t="var-e">lett kjede ~220 as</Label>
      <Label x={440} y={278} anchor="end" size={10}>totalt ~1340 as</Label>
    </Svg>
  )
}

/* Antibody classes */
function Klasser() {
  const y = (cx, cy, s, rot = 0) => (
    <g transform={`rotate(${rot} ${cx} ${cy})`} style={{ stroke: tone('var-a'), strokeWidth: 3, fill: 'none' }}>
      <line x1={cx} y1={cy} x2={cx} y2={cy - 18 * s} />
      <line x1={cx} y1={cy - 18 * s} x2={cx - 12 * s} y2={cy - 32 * s} />
      <line x1={cx} y1={cy - 18 * s} x2={cx + 12 * s} y2={cy - 32 * s} />
    </g>
  )
  return (
    <Svg w={460} h={170} label="De fem antistoffklassene">
      {y(40, 90, 1)}<Label x={40} y={120} size={11}>IgG</Label>
      {y(110, 90, 1)}<Label x={110} y={120} size={11}>IgE</Label>
      {y(180, 90, 1)}<Label x={180} y={120} size={11}>IgD</Label>
      <Label x={110} y={140} size={10}>monomerer</Label>
      {y(250, 90, 1, -30)}{y(285, 90, 1, 30)}
      <Label x={268} y={120} size={11}>IgA</Label>
      <Label x={268} y={140} size={10}>dimer</Label>
      {[0, 72, 144, 216, 288].map((r) => <g key={r}>{y(380, 75, 0.9, r)}</g>)}
      <Label x={380} y={140} size={11}>IgM</Label>
      <Label x={380} y={156} size={10}>pentamer</Label>
    </Svg>
  )
}

/* Four methods side by side */
function FireMetoder() {
  const gel = (x, y, w, h, t = 'muted') => <rect x={x} y={y} width={w} height={h} style={{ fill: `color-mix(in srgb, ${tone(t)} 12%, var(--bg))`, stroke: tone('ink') }} />
  return (
    <Svg w={460} h={400} label="Fire immunologiske gelmetoder">
      {/* counter-current */}
      {gel(10, 30, 210, 150)}
      <Label x={115} y={22} size={12}>Motstrøm</Label>
      <circle cx={50} cy={105} r={9} style={{ fill: tone('var-e') }} />
      <circle cx={180} cy={105} r={9} style={{ fill: tone('var-a') }} />
      <Label x={50} y={130} size={10}>Ag (−)</Label>
      <Label x={180} y={130} size={10}>Ast (+)</Label>
      <Arrow x1={62} y1={90} x2={100} y2={90} t="var-e" head={6} />
      <Arrow x1={168} y1={90} x2={130} y2={90} t="var-a" head={6} />
      <Curve t="trap" width={3} points={[[115, 75], [118, 105], [115, 135]]} />
      <Label x={115} y={170} size={9} t="trap">utfellingsbue</Label>
      {/* immunoelectrophoresis */}
      {gel(240, 30, 210, 150)}
      <Label x={345} y={22} size={12}>Immunelektroforese</Label>
      <line x1={250} y1={80} x2={440} y2={80} style={{ stroke: tone('muted'), strokeDasharray: '4 3' }} />
      {[290, 340, 400].map((x) => <circle key={x} cx={x} cy={80} r={6} style={{ fill: tone('var-e') }} />)}
      <rect x={250} y={130} width={190} height={8} style={{ fill: tone('var-a'), opacity: 0.6 }} />
      <Label x={345} y={154} size={9} t="var-a">renne med antiserum</Label>
      {[290, 340, 400].map((x) => <Curve key={x} t="trap" width={2} points={[[x - 22, 112], [x, 100], [x + 22, 112]]} />)}
      <Label x={250} y={72} anchor="start" size={9}>+</Label>
      <Label x={440} y={72} anchor="end" size={9}>−</Label>
      {/* RID */}
      {gel(10, 220, 210, 160, 'var-a')}
      <Label x={115} y={212} size={12}>RID (Mancini)</Label>
      {[[50, 4], [100, 7], [160, 10]].map(([x, k]) => (
        <g key={x}>
          <circle cx={x} cy={300} r={k * 3} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2.5 }} />
          <circle cx={x} cy={300} r={4} style={{ fill: tone('var-e') }} />
        </g>
      ))}
      <Label x={115} y={366} size={9}>Ast i gel · diameter ∝ [Ag]</Label>
      {/* Rocket */}
      {gel(240, 220, 210, 160, 'var-a')}
      <Label x={345} y={212} size={12}>Rakett</Label>
      {[[290, 110, '1/1'], [345, 70, '1/2'], [400, 40, '1/4']].map(([x, h, f]) => (
        <g key={x}>
          <path d={`M ${x - 10} 350 L ${x} ${350 - h} L ${x + 10} 350`} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 2.5 }} />
          <circle cx={x} cy={352} r={4} style={{ fill: tone('var-e') }} />
          <Label x={x} y={372} size={9}>{f}</Label>
        </g>
      ))}
      <Label x={250} y={232} anchor="start" size={9}>høyde ∝ [Ag]</Label>
    </Svg>
  )
}

/* Equivalence zone */
function Ekvivalens() {
  return (
    <Svg w={460} h={200} label="Ekvivalenssone">
      <rect x={20} y={20} width={420} height={150} style={{ fill: `color-mix(in srgb, ${tone('muted')} 12%, var(--bg))`, stroke: tone('ink') }} />
      <circle cx={80} cy={95} r={14} style={{ fill: tone('var-e') }} />
      <circle cx={380} cy={95} r={14} style={{ fill: tone('var-a') }} />
      <Label x={80} y={130} size={11}>Ag</Label>
      <Label x={380} y={130} size={11}>Ast</Label>
      {[25, 40, 55].map((r) => <circle key={`a${r}`} cx={80} cy={95} r={r} style={{ fill: 'none', stroke: tone('var-e'), opacity: 0.3 }} />)}
      {[25, 40, 55, 70].map((r) => <circle key={`b${r}`} cx={380} cy={95} r={r} style={{ fill: 'none', stroke: tone('var-a'), opacity: 0.3 }} />)}
      <line x1={200} y1={40} x2={200} y2={150} style={{ stroke: tone('trap'), strokeWidth: 3 }} />
      <line x1={220} y1={40} x2={220} y2={150} style={{ stroke: tone('trap'), strokeWidth: 3, strokeDasharray: '5 3' }} />
      <Label x={210} y={190} size={10} t="trap">utfellingsbue(r) ved ekvivalens · 2 Ag gjenkjent → 2 buer</Label>
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Antistoff + antigen = synlig utfelling">
        <MentalModel cite={`[${P2}, slide 18, 21, 23–25, 30–31; ${DB}, p. 39]`}>
          Immunforsvaret lager antistoffer som gjenkjenner ett bestemt antigen, og det utnytter man analytisk. Når <V c="e">Ag</V> og <V c="a">Ast</V> møtes i en gel (agarose eller agar) i omtrent ekvivalente mengder, kobler antistoffene antigenene sammen til et nettverk. Komplekset feller ut og blir synlig som en bue, ring eller «rakett». Metodene er altså presipitasjonsmetoder.{' '}
          De skiller seg bare i hvordan Ag og Ast bringes sammen. <strong>Diffusjon alene</strong>: Ouchterlony og RID. <strong>Strøm som hjelper</strong>: motstrøm og rakett. <strong>Elektroforese først, så diffusjon</strong>: immunelektroforese og immunfiksering. Er Ast fordelt jevnt i gelen og Ag lagt i brønner (RID og rakett), blir størrelsen på utfellingen et mål for [Ag] via en standardkurve.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Antigen (Ag)" cite={`[${P2}, slide 18; ${DB}, p. 37]`}>Kroppsfremmed (ukjent) stoff som trenger inn i kroppen og aktiverer immunforsvaret. Mer presist er det alle forbindelser eller strukturer som kan gjenkjennes av et antistoff (proteiner, polysakkarider, lipider, hormoner, nukleinsyrer m.m.). Mw &lt; 1000 er sjelden komplette antigener, 1000–10 000 gir svake antigener og opp mot 100 000 gir full antigeneffekt. Størrelsen alene avgjør likevel ikke: glykogen (&gt; 100 000) er ikke immunogent, mens insulin (6000) er et antigen.</Def>
        <Def term="Epitop (antigen determinant)" cite={`[${DB}, p. 37–38]`}>Den lille delen av antigenets overflate som gjenkjennes og bindes. Den må passe «som hånd i hanske» med Ast-bindingssetet. Store Ag (proteiner) har gjerne flere epitoper.</Def>
        <Def term="Hapten" cite={`[${DB}, p. 38]`}>Lite molekyl med én determinant som er for lite til å gi immunrespons alene, men som gir respons koblet til et større bærermolekyl.</Def>
        <Def term="Antistoff (Ast) = immunoglobulin (Ig)" cite={`[${P2}, slide 18–19; ${DB}, p. 37]`}>Proteiner kroppen produserer som forsvar mot inntrengende Ag, laget av B-lymfocytter. Det er plasmacellene (aktiverte B-celler) som produserer antistoffene, ca. 2000 molekyler/s per celle.</Def>
        <Def term="Ast-spesifisitet" cite={`[${P2}, slide 18; ${DB}, p. 39]`}>Ag gjenkjennes på utseende, dvs. monomerstruktur og/eller konformasjon. Ast kan skille strukturforskjeller på noen få atomer, sammenlignbart med enzym-substrat-spesifisitet.</Def>
        <Columns>
          <Def term="Antistoffstruktur" cite={`[${P2}, slide 19; ${DB}, p. 38–39]`}>Alle har Y-struktur som grunnstruktur: to tunge og to lette kjeder, parvis identiske og bundet med disulfidbindinger. Tunge kjeder er ca. 450 aminosyrer hver og lette ca. 220 hver, totalt ca. 1340 aminosyrer (håndskrevet notat). <strong>Fab</strong> (fragment antigen binding): armene, med variable områder ytterst. Gjenkjenner Ag. <strong>Fc</strong> (krystalliserbart fragment): konstant område. Kan binde andre Ast og celler i immunforsvaret (f.eks. fagocytter). Ett Ast har to bindingsseter og kan derfor fungere som en <strong>bro</strong> mellom to Ag-molekyler. Slik dannes Ag-Ast komplekser.</Def>
          <Diagram title="Antistoffets Y-struktur" cite={`[${P2}, slide 19; ${DB}, p. 38–39]`}><Antistoff /></Diagram>
        </Columns>
        <Columns>
          <Def term="Antistoffklasser (isotyper)" cite={`[${DB}, p. 39; ${P2}, slide 20]`}>IgG (monomer), IgA (dimer, monomer), IgM (pentamer), IgD (monomer) og IgE (monomer).</Def>
          <Diagram title="De fem antistoffklassene" cite={`[${P2}, slide 20; ${DB}, p. 39]`}><Klasser /></Diagram>
        </Columns>
        <Def term="Polyklonale vs. monoklonale Ast" cite={`[${DB}, p. 43–44]`}><strong>Polyklonale</strong> (antiserum fra immuniserte dyr) kommer fra mange B-cellekloner og reagerer med mange epitoper på et Ag. <strong>Monoklonale (Mabs)</strong> kommer fra én klon og reagerer med én eneste epitop. De lages med hybridomteknikk: musemiltcelle (B-celle) fusjonert med myelomcelle gir en udødelig cellelinje.</Def>
        <Def term="Immunologiske metoder, prinsipp" cite={`[${P2}, slide 21, 23]`}>Gjenkjennelsen mellom Ast og Ag brukes til å <em>identifisere og kvantifisere</em> ukjente proteiner i en prøve. Bruksområder er deteksjon, kvantifisering og anriking/isolering av makromolekyler og celler, f.eks. å identifisere smittestoffer.</Def>
        <Columns>
          <Def term="Bakgrunn for gelmetodene" cite={`[${P2}, slide 23–25]`}>Ag-Ast komplekset feller ut i gelen nær eller ved ekvivalenspunktet («ekvivalente mengder av Ag og Ast → kompleks»). Ag er løselig, men gjøres uløselig av Ast. Gelmediet er typisk agarose eller agar. Inneholder Ag-løsningen 2 Ag og begge gjenkjennes av Ast, gir det 2 utfellingsbuer. «Dette er presipitasjonsmetoder (utfelling).»</Def>
          <Diagram title="Ekvivalenssone" cite={`[${P2}, slide 23–25]`}><Ekvivalens /></Diagram>
        </Columns>
        <Def term="Dobbelimmunodiffusjon (DID, Ouchterlony)" cite={`[${P2}, slide 24, håndskrevet]`}>Ag og Ast i hver sin brønn diffunderer mot hverandre, og det blir en utfellingsbue der de møtes. Kvalitativ og holdbarvende(?) metode der Ag testes mot ett eller flere Ast.</Def>
        <Gap>ett håndskrevet ord på slide 24 (etter «Kvalitativ metode,») er uleselig.</Gap>
        <Def term="Immunologisk gelelektroforese, metodeliste" cite={`[${P2}, slide 22, 33]`}>(1) motstrømselektroforese, (2) immunelektroforese, (3) enkel radial immundiffusjon, (4) rakettelektroforese og (5) immunfiksering (IFE). NB: deteksjonen i Western blotting er også en immunologisk metode.</Def>
        <Columns>
          <div>
            <Def term="1. Motstrømselektroforese" cite={`[${P2}, slide 26–27]`}>Kvalitativ. Gelen har én brønn for Ag og én for Ast. pH velges slik at <strong>Ast er positivt ladet og Ag negativt ladet</strong>. Strømmen «hjelper» Ag og Ast å vandre mot hverandre (motstrøms). Ved gjenkjenning dannes en <strong>utfellingsbue (presipitasjonslinje)</strong> mellom brønnene.</Def>
            <Def term="2. Immunelektroforese" cite={`[${P2}, slide 28–29]`}>Kvalitativ. En kompleks blanding av Ag separeres etter ladning før de synliggjøres ved utfelling. (1) Vanlig elektroforetisk separasjon av Ag-ene. pH velges slik at positivt ladde Ag går mot negativ elektrode og omvendt. (2) En renne (brønn) skjæres ut langs Ag-sporet, og Ast-blanding (antiserum) tilsettes. (3) Dobbelimmunodiffusjon (Ouchterlony): både Ag og Ast diffunderer ut i gelen. (4) Der de møtes og Ast gjenkjenner Ag, dannes en <strong>utfellingsbue</strong> (Ag-Ast kompleks). Hvert gjenkjent Ag gir sin egen bue.</Def>
            <Def term="3. Enkel (single) radial immundiffusjon (RID, Mancini-teknikk)" cite={`[${P2}, slide 30]`}>Mest kjent og anvendt. Kvalitativ <strong>og kvantitativ</strong>. <strong>Ast er inkorporert i gelen</strong>, Ag tilsettes i brønner. Ag diffunderer ut, og det dannes <strong>utfellingsringer</strong> rundt brønnene der Ag og Ast er ekvivalente. <strong>Ringdiameteren er proporsjonal med Ag-konsentrasjonen.</strong> Kvantifiseres med standardkurve. Ingen strøm, bare diffusjon.</Def>
            <Def term="4. Rakettelektroforese" cite={`[${P2}, slide 31–32]`}>Kvalitativ og kvantitativ. Som RID, men med strøm i tillegg. Ast inkorporert i gelen og Ag i brønner. pH velges slik at <strong>Ast i gelen er ubevegelig</strong> og <strong>Ag er negativt ladet og vandrer</strong>. Utfellingen får rakettform. <strong>Rakettens høyde er proporsjonal med [Ag]</strong>, og man bruker standardkurve. Eksempler (håndskrevet, slide 32): <em>næringsmiddel</em>, f.eks. teste ovalbumin (eggprotein) i «eggfrie» kaker eller teste deig og stekeoverflate. <em>Forskning</em>: teste etter spesifikke proteiner i biologiske væsker, eller kvantifisere nivå av Ast/proteiner i blodprøver.</Def>
          </div>
          <Diagram title="Fire metoder side om side" caption="Motstrøm (slide 27), immunelektroforese (slide 29), RID (slide 30) og rakett med fortynning 1/1 → 1/2 → 1/4 (slide 32). Skjematisk." cite={`[${P2}, slide 26–32]`}><FireMetoder /></Diagram>
        </Columns>
        <Def term="5. Immunfiksering (IFE)" cite={`[${P2}, slide 33]`}>Proteinene i prøven skilles først med gelelektroforese. Spesifikke antistoffer tilsettes for å binde bestemte typer immunglobuliner (IgG, IgA, IgM, kappa eller lambda). Resultatet viser nøyaktig hvilken type protein eller M-komponent som er til stede. Brukes i utredning av kreftformer (f.eks. beinmargskreft). Panelet tester 4 pasienter samtidig med 6 baner hver. Banen lengst til venstre er vanlig serumproteinelektroforese.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Block kind="equation" title="Ingen ligninger i kursmaterialet" cite={`[${P2}, slide 30–31]`}>Den eneste kvantitative relasjonen er proporsjonalitet: ringdiameter (RID) ∝ [Ag] og raketthøyde ∝ [Ag], lest av en standardkurve.</Block>
        <Plot
          title="Rakettelektroforese: standardkurve"
          caption="Kvalitativ graf: raketthøyde ∝ [Ag]. Stiplet: fortynningene 1/4, 1/2 og 1/1 fra slide 32. Slideren viser en prøve; den røde vannrette linjen er dens raketthøyde, og der den krysser standardkurven leses [Ag] av. Kursfilene oppgir ingen tallverdier for høyder."
          cite={`[${P2}, slide 31–32]`}
          x={{ min: 0, max: 1.1, label: '[Ag] (relativ, 1/1 = 1)' }}
          y={{ label: 'raketthøyde (relativ)', min: 0, max: 1.2 }}
          params={[{ key: 'c', label: 'prøve [Ag]', min: 0, max: 1, step: 0.01, value: 0.5 }]}
          series={[
            { key: 'std', label: 'standardkurve', t: 'var-a', fn: (c) => c },
            { key: 'p', label: 'prøvens raketthøyde', t: 'trap', fn: (c, p) => p.c },
          ]}
          marks={[{ x: 0.25, label: '1/4' }, { x: 0.5, label: '1/2' }, { x: 1, label: '1/1' }]}
        />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 9: kombiner utsagn og analysemetode (5 p totalt) — [UTLEDET, ingen fasit i LF]"
          given={`Kolonner: CE, SDS-PAGE, IEF, 2D-elektroforese og immunologisk elektroforese. Oppgaven ble automatisk rettet, og LF gir ingen fasit [${LF25}, oppg. 9]. **Svarene under er utledet fra forelesningen.**`}
          steps={[
            { title: '«Resultat vises som utfellingsbuer»', body: `${U}Utfellingsbuer dannes når Ag-Ast kompleks feller ut i gelen. Det er resultatet i motstrøms- og immunelektroforese [${P2}, slide 23, 26, 28]. → **Immunologisk elektroforese.**` },
            { title: '«Dannelse av Ag-Ast kompleks»', body: `${U}Alle immunologiske gelmetoder bygger på Ag-Ast kompleksdannelse [slide 18, 23]. → **Immunologisk elektroforese.**` },
            { title: 'Kontroll mot distraktorene:', body: `${U}Ingen av de andre kolonnene bruker antistoffer. SDS-PAGE denaturerer, IEF bruker amfolytter, 2D er vertikal + horisontal, og CE har EOF og nL-volum (sidene 20, 21, 24). Immunologisk er altså eneste mulige kolonne for linje 1–2.` },
          ]}
          cite={`[${E25}, oppg. 9]`}
        />
        <FadedExample
          title="Rakettelektroforese av ovalbumin (bilde på slide 32)"
          given="Konstruert fra eksempelbildet og notatene på slide 32. Ingen tallverdier i kildene. Oppgave: Et «eggfritt» kakeprodukt skal testes for ovalbumin (eggprotein). Planlegg og tolk analysen."
          steps={[
            { body: 'Gelen støpes med anti-ovalbumin-Ast jevnt fordelt. pH velges slik at Ast er ubevegelig og Ag (ovalbumin) er negativt ladet og vandrer [slide 31].' },
            { title: 'Hva legges i brønnene?', body: 'Standardløsninger med kjent [ovalbumin] i fortynninger (1/1, 1/2, 1/4) og et ekstrakt av prøven.', hidden: true },
            { title: 'Hva skjer når strømmen settes på?', body: 'Ag vandrer inn i Ast-gelen og feller ut som en rakett. Utfellingen «brenner» seg fremover til Ag er oppbrukt ved ekvivalens.', hidden: true },
            { title: 'Hvordan finnes [ovalbumin] i prøven?', body: 'Mål raketthøyden for hver standard, lag en standardkurve (høyde ∝ [Ag]) og les av prøvens høyde.', hidden: true },
            { title: 'Ingen rakett i prøvebrønnen. Konklusjon?', body: 'Ingen påvisbar ovalbumin, altså under deteksjonsgrensen. Standardene må samtidig gi raketter, ellers er analysen ugyldig.', hidden: true },
          ]}
          cite={`[${P2}, slide 31–32]`}
        />
        <Gap>spørsmålene fra gruppediskusjonen (slide 34) er ikke lagt ut.</Gap>
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Hvilke er kvantitative?" cite={`[${P2}, slide 26, 28, 30–31]`}>Bare RID og rakett (pluss kvalitative). Motstrøm og immunelektroforese er kun kvalitative.</Trap>
        <Trap title="RID vs. rakett" cite={`[${P2}, slide 30–31]`}>Samme oppsett (Ast i gel, Ag i brønner), men rakett har strøm. RID måler <em>ringdiameter</em>, rakett måler <em>høyde</em>.</Trap>
        <Trap title="Ladning og pH" cite={`[${P2}, slide 26, 31]`}>Motstrøm har Ast positiv og Ag negativ (de vandrer mot hverandre). Rakett har Ast ubevegelig og Ag negativ. Ikke bland dem.</Trap>
        <Trap title="Utfelling krever ekvivalens" cite={`[${P2}, slide 23]`}>Komplekset feller ut nær eller ved ekvivalenspunktet, ikke ved stort overskudd av den ene komponenten.</Trap>
        <Trap title="Immunelektroforese er to trinn" cite={`[${P2}, slide 28]`}>Først elektroforese av Ag, <em>så</em> diffusjon mot Ast i renne. Ast er ikke med under separasjonen.</Trap>
        <Trap title="Fab vs. Fc" cite={`[${P2}, slide 19; ${DB}, p. 39]`}>Fab binder Ag (variabelt område). Fc er konstant og binder celler i immunforsvaret eller andre Ast.</Trap>
        <Trap title="Polyklonal vs. monoklonal" cite={`[${DB}, p. 43]`}>Poly gir mange epitoper og mange kloner. Mono gir én epitop og én klon (hybridom).</Trap>
        <Trap title="Western blot er også immunologisk" cite={`[${P2}, slide 22]`}>Men deteksjonen skjer på membran med merket sekundært Ast, ikke ved utfelling i gel (side 22).</Trap>
      </Section>
    </>
  )
}
