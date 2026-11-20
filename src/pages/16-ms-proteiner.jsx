import { Section, MentalModel, Def, Eq, Example, FadedExample, Trap, Diagram, Svg, Arrow, Label, Curve, Mermaid, Plot, Columns, V, tone } from '../components'

const MSP = 'MSproteiner2026.pdf'
const PK = 'Proteinkarakterisering del 1 m notater.pdf'
const PRO = 'Prosjektoppgave IMAK2008 H26.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'

export const meta = {
  title: 'Proteinmassespektrometri',
  topic: 'ms',
  examWeight: { level: 'low', note: 'Ikke spurt på H24 eller H25. Brukes i prosjektoppgaven (MS-delen av proteinidentifikasjonen)' },
  examTasks: [
    'Ingen tasks_by_page-oppføring for side 16 i 00-index.md.',
    'Ingen oppgaver om protein-MS på H2024 eller H2025.',
    'Prosjektoppgaven bruker metoden: regn m/z manuelt fra et ESI-QTOF-spekter og sammenlign med dekonvolutert spekter [MSproteiner2026.pdf, slide 30; Prosjektoppgave IMAK2008 H26.pdf, p. 1].',
  ],
  buildsOn: ['14-ms-ionisering', '15-ms-analysatorer-og-detektorer'],
  usedIn: ['19-elektroforese-teori-og-geler', '21-ief-og-2d'],
  sources: [
    `[${MSP}, slide 3, 11–19, 21–28, 30]`,
    `[${PK}, slide 4–5, 10–11]`,
    `[${PRO}, p. 1]`,
    `[${B2}, p. 87–88] (p. = boksidetall; PDF-side = bokside − 84)`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hva er forskjellen på «bottom up» og «top down» protein-MS?', a: `Bottom up kutter proteinet i peptider før analyse. Top down analyserer hele det intakte proteinet [${MSP}, slide 13].` },
    { id: 'p2', kind: 'pretest', q: 'Hvorfor ser et ESI-spekter av et protein ut som en «kam» av mange topper?', a: `Proteinet får mange ulike ladningstilstander (+z), og hver gir sin egen m/z-topp [${MSP}, slide 21–22].` },
    { id: 'p3', kind: 'pretest', q: 'Hvilke to ioniseringsmetoder gjorde protein-MS mulig?', a: `MALDI og ESI [${MSP}, slide 11].` },
    { id: 't1', q: 'Rho-proteinet har $M_p$ = 47 004,33 Da. Hvilken m/z har $[M+50H]^{50+}$?', a: `$(47\\,004{,}33 + 50 \\times 1)/50 \\approx 941{,}1$. Med formelen fra forelesningen [${MSP}, slide 24–25].` },
    { id: 't2', q: 'Nevn tre fordeler og tre ulemper med bottom up.', a: `Fordeler: mange protokoller, robust, «billig» / plug and play. Ulemper: taper informasjon, ikke alle peptider blir med, lite PTM-info og krever deglykosylering [${MSP}, slide 15].` },
    { id: 't3', q: 'Hvorfor ble bottom up historisk populært?', a: `Kvadrupolens masseområde var < 2000, så proteinet måtte kuttes i peptider på 1–3 kDa [${MSP}, slide 14].` },
    { id: 't4', q: 'Hva gjør dekonvolusjon med et ESI-spekter?', a: `Gjør et flerladet spekter om til et zero-charge, gjennomsnittlig molekylvektspekter ved å søke etter beste fit (regresjon) [${MSP}, slide 27].` },
    { id: 't5', q: 'Hvilke krav stilles til mobilfasen i LC-MS av proteiner?', a: `Den må kunne fordampes, og den tilsettes typisk en H⁺-kilde eller pH-justeres for ionisering ved 1 atm [${MSP}, slide 12].` },
  ],
  equations: [
    {
      id: 'mz', label: 'm/z for en ladningstilstand',
      tex: String.raw`\frac{m}{z} = \frac{\va{M_p} + \vb{z}\cdot M_H}{\vb{z}}`,
      vars: [
        { sym: String.raw`\va{M_p}`, desc: 'massen til «parent»-molekylet (nøytralt protein)', unit: String.raw`\mathrm{Da}` },
        { sym: String.raw`\vb{z}`, desc: 'ladning (antall protoner)', unit: '–' },
        { sym: 'M_H', desc: 'massen til ett proton (≈ 1)', unit: String.raw`\mathrm{Da}` },
      ],
      cite: `[${MSP}, slide 22, 24; ${B2}, p. 87–88]`,
      check: { status: 'verified', note: 'Følger av slide 24 (X(m/z₁ − M_H) = M_p) og bok del 2 p. 87–88 ([M + nH]ⁿ⁺, (1673 + 3)/3). Slide 22 skriver bare «m/z = x».' },
    },
    {
      id: 'to', label: 'Ladning og masse fra to nabotopper',
      tex: String.raw`\begin{gathered}\vb{X}\left(\frac{m}{z_1} - M_H\right) = \va{M_p} \qquad (\vb{X}+1)\left(\frac{m}{z_2} - M_H\right) = \va{M_p} \\ \Rightarrow\quad \vb{X} = \frac{\dfrac{m}{z_2} - M_H}{\dfrac{m}{z_1} - \dfrac{m}{z_2}}\end{gathered}`,
      vars: [
        { sym: String.raw`\vb{X}`, desc: 'ladningen til toppen med høyest m/z ($m/z_1$)', unit: '–' },
        { sym: String.raw`\vb{X}+1`, desc: 'ladningen til nabotoppen med lavere m/z ($m/z_2$)', unit: '–' },
        { sym: 'm/z_1,\\ m/z_2', desc: 'm/z for toppene ($m/z_1 > m/z_2$)', unit: '–' },
        { sym: 'M_H', desc: 'massen til ett proton', unit: String.raw`\mathrm{Da}` },
        { sym: String.raw`\va{M_p}`, desc: 'massen til parent-molekylet', unit: String.raw`\mathrm{Da}` },
      ],
      note: 'Antar at nabotoppene skiller seg med nøyaktig én ladning.',
      cite: `[${MSP}, slide 23–24]`,
      check: { status: 'verified', note: 'Slide 24 identisk, bortsett fra at sliden skriver «X + 1 (m/z₂ − M_H)» uten parentes rundt X + 1.' },
    },
  ],
}

const buChart = `flowchart LR
  subgraph BU["Bottom up"]
    A1[Protein] --> A2[Enzymatisk fordøyelse] --> A3[Peptider] --> A4["LC/MALDI-MS"] --> A5["PMF og MS/MS"] --> A6["Databasesøk / sekvens-tag"]
  end
  subgraph TD["Top down"]
    B1[Protein] --> B2["MW-måling (intakt)"] --> B3["MS/MS"] --> B4["Proteinkarakterisering (PTM)"]
  end`

/* Charge-state spectrum (Mw = 8000) */
function Ladningsspekter() {
  const X = (mz) => 40 + (mz / 8500) * 400
  const pk = [[2004, '+4'], [2663, '+3'], [4002, '+2'], [8001, '+1']]
  return (
    <Svg w={460} h={230} label="ESI-spekter med ladningstilstander">
      <Arrow x1={40} y1={190} x2={445} y2={190} />
      <Arrow x1={40} y1={190} x2={40} y2={20} />
      {pk.map(([mz, z]) => (
        <g key={mz}>
          <line x1={X(mz)} y1={190} x2={X(mz)} y2={70} style={{ stroke: tone('var-a'), strokeWidth: 3 }} />
          <Label x={X(mz)} y={64} size={11}>{mz}</Label>
          <Label x={X(mz)} y={50} size={11} t="var-b">{z}</Label>
        </g>
      ))}
      <path d={`M ${X(2663)} 100 Q ${(X(2663) + X(2004)) / 2} 80 ${X(2004)} 100`} style={{ fill: 'none', stroke: tone('trap'), strokeWidth: 1.5 }} />
      <Label x={X(1800)} y={130} anchor="end" size={10} t="trap">X → X+1</Label>
      <Label x={X(1800)} y={144} anchor="end" size={10} t="trap">(én ladning mer)</Label>
      <Label x={300} y={30} size={13}>Mw = 8000</Label>
      <Label x={445} y={208} anchor="end" size={11}>m/z</Label>
      <Label x={46} y={22} anchor="start" size={11}>intensitet</Label>
    </Svg>
  )
}

/* Deconvolution */
function Dekonvolusjon() {
  return (
    <Svg w={460} h={210} label="Fra ladningsserie til dekonvolutert spekter">
      <line x1={10} y1={160} x2={200} y2={160} style={{ stroke: tone('ink') }} />
      {Array.from({ length: 14 }, (_, i) => { const x = 25 + i * 12.5; const h = 100 * Math.exp(-((i - 6) ** 2) / 18); return <line key={i} x1={x} y1={160} x2={x} y2={160 - h} style={{ stroke: tone('var-a'), strokeWidth: 2.5 }} /> })}
      <Label x={20} y={40} anchor="start" size={10}>[M+56H]⁵⁶⁺</Label>
      <Label x={200} y={40} anchor="end" size={10}>[M+50H]⁵⁰⁺</Label>
      <Label x={105} y={180} size={11}>m/z</Label>
      <Arrow x1={215} y1={110} x2={275} y2={110} t="var-d" />
      <Label x={245} y={100} size={11} t="var-d">deconvolution</Label>
      <line x1={290} y1={160} x2={450} y2={160} style={{ stroke: tone('ink') }} />
      <Curve t="var-d" points={[[350, 160], [362, 150], [370, 50], [378, 150], [390, 160]]} />
      <Label x={370} y={42} size={11}>47 004 Da</Label>
      <Label x={370} y={180} size={11}>masse (zero-charge)</Label>
      <Label x={105} y={200} size={10}>Rho-protein</Label>
    </Svg>
  )
}

const stick = (x, c, w) => Math.exp(-((x - c) ** 2) / (2 * w * w))

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Store molekyler, mange ladninger">
        <MentalModel cite={`[${MSP}, slide 11, 13–17, 22–25, 27; ${B2}, p. 87–88]`}>
          Proteiner er store (10–200 kDa), har mange ioniserbare grupper og kan bære sukkerkjeder (glykaner). Det gir mange varianter av «samme» protein og gjør MS vanskeligere enn for små molekyler. Det finnes to strategier. <strong>Bottom up</strong>: kutt proteinet i forutsigbare peptider med trypsin, separer dem med RP-HPLC, fragmenter med MS/MS og «bygg opp» proteinet ved databasesøk. <strong>Top down</strong>: mål hele proteinet direkte med MALDI-TOF eller UHPLC-QTOF.{' '}
          Med ESI tar et protein opp mange protoner og gir en serie topper med ulik <V c="b">ladning</V>. Det betyr at selv en kvadrupol eller QTOF med begrenset m/z-område kan måle et stort molekyl. Kjenner man avstanden mellom to nabotopper (ladningen er ett tall forskjellig), kan både ladning og <V c="a">molekylvekt</V> regnes ut. Programvare gjør dette automatisk ved dekonvolusjon.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Proteomikk og proteom" cite={`[${PK}, slide 4–5]`}>Proteomikk er studiet av alle proteiner i en celle, et vev eller en organisme. Proteomet er den totale mengden proteiner der, og det varierer med celletype og cellens tilstand, så det er komplekst.</Def>
        <Def term="Hensikt med MS" cite={`[${MSP}, slide 3]`}>Bestemme vekten av ett molekyl: danne ioner, separere dem og detektere dem som m/z.</Def>
        <Def term="Proteiner vs. «små» molekyler" cite={`[${MSP}, slide 11]`}>Store, kompliserte molekyler med masser fra 10 til 200 kDa og flere ioniserbare grupper. Kan bære sukkere (glykaner), N-bundet via asparagin eller O-bundet via serin/treonin. Det gir glykoformer. Protein-MS ble først mulig med utviklingen av MALDI og ESI.</Def>
        <Def term="LC-MS av proteiner" cite={`[${MSP}, slide 12]`}>Forbehold om stabilitet og ionisering. Mobilfasen må kunne fordampes, og analytten må «gå» inn i gassfasen. Ionisering ved 1 atm, typisk med tilsatt H⁺-kilde eller pH-justering. Muliggjør separasjon av komplekse proteinblandinger.</Def>
        <Def term="MALDI-TOF for proteiner" cite={`[${PK}, slide 10–11]`}>Flytidsmassespektrometer (mest brukt). Flytiden korresponderer med m/z til proteinet. MS er meget sensitiv og presis, og kan detektere massen til proteiner isolert fra f.eks. SDS-PAGE helt ned i pikomol-mengder. Prinsippet for MALDI er på side 14, TOF på side 15.</Def>
        <Mermaid title="Bottom up vs. top down" cite={`[${MSP}, slide 13]`} chart={buChart} />
        <Columns>
          <Def term="Bottom up («klassisk protein-MS»)" cite={`[${MSP}, slide 14–15]`}>Proteinet kuttes opp til peptider på 1–3 kDa. Historisk populært pga. instrumentelle begrensninger (kvadrupolens masseområde &lt; 2000). Kombineres med HPLC, typisk RP, som gir enkel og forutsigbar separasjon av peptider. MS/MS av peptidfragmenter muliggjør peptid- og proteinidentifikasjon. Proteinet «bygges opp» peptid for peptid. Fordøyelse med trypsin er en forutsigbar og standardisert teknikk. Resultatet sammenlignes med database. <strong>Fordeler</strong>: populær (lett å finne protokoller), mindre komplisert, relativt «plug and play», robust, «billig». <strong>Ulemper</strong>: taper mye informasjon, ikke alle peptider «blir med», lite info om PTM (posttranslasjonelle modifikasjoner, f.eks. konjugering), «krever» deglykosylering, og mer problematisk på «ukjente» proteiner (grad av glykosylering, isoformer/glykoformer, stabilitet, fragmenter).</Def>
          <Def term="Top down" cite={`[${MSP}, slide 16–17]`}>Analyse av «intakte» proteiner, typisk med MALDI eller UHPLC-QTOF. Det er dette som gjøres på labben. <strong>Fordeler</strong>: «komplett» bilde av proteinet, kan karakterisere PTM, info om glyko- og isoformer, ingen prøveopparbeidelse, i teorien meget fleksibel og «simplere». <strong>Utfordringer</strong>: dyr og utfordrende instrumentering, tidkrevende, krever mer metodeutvikling, mer kompleks dataanalyse, lite protokoller, og store molekyler kan være problematiske.</Def>
        </Columns>
        <Diagram title="Fordeler/ulemper side om side" cite={`[${MSP}, slide 14–17]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td></td><td><strong>Bottom up</strong></td><td><strong>Top down</strong></td></tr>
              <tr><td>Prøveprep</td><td>trypsinfordøyelse, ofte deglykosylering</td><td>ingen prøveopparbeidelse</td></tr>
              <tr><td>Instrument</td><td>«plug and play», «billig»</td><td>dyr og utfordrende</td></tr>
              <tr><td>Info om PTM/glykoformer</td><td>lite</td><td>kan karakteriseres</td></tr>
              <tr><td>Robusthet/protokoller</td><td>robust, mange protokoller</td><td>lite protokoller, mer metodeutvikling</td></tr>
              <tr><td>Dataanalyse</td><td>databasesøk</td><td>mer kompleks</td></tr>
              <tr><td>Typisk teknikk</td><td>trypsin + RP-LC-MS/MS</td><td>MALDI eller UHPLC-QTOF</td></tr>
            </tbody>
          </table>
        </Diagram>
        <Def term="Hvorfor kjører ikke alle top down?" cite={`[${MSP}, slide 18]`}>Fraksjonering og separasjon på proteinnivå er krevende pga. ulike fysikalsk-kjemiske egenskaper og et stort dynamisk område.</Def>
        <Def term="Workflow (labben)" cite={`[${MSP}, slide 19]`}>Selve kjøringen er lik «vanlig» LC-MS. Proteinet løses i buffer til 1 mg/mL og fortynnes 1/10, 1/100 og 1/1000. Ion key UHPLC-system: ekstremt sensitivt, «low flow», og sikrer ionisering av store molekyler.</Def>

        <Columns>
          <div>
            <Def term="ESI og ladningstilstander («charge states»)" cite={`[${MSP}, slide 22]`}>{'Kjenner man molekylvekten, er det enkelt: m/z = x, så kjenner man x og m og kan finne ladningen. Eksempel med Mw = 8000: topper ved 8001 ($[M+H]^+$), 4002 (+2), 2663 (+3) og 2004 (+4).'}</Def>
            <Def term="Ukjent molekylvekt" cite={`[${MSP}, slide 23–24]`}>Hver topp er separert med 1 ladning. To nabotopper gir to ligninger med to ukjente (ladning og Mw).</Def>
          </div>
          <Diagram title="ESI-spekter med ladningstilstander" cite={`[${MSP}, slide 21–22]`}><Ladningsspekter /></Diagram>
        </Columns>
        <Columns>
          <div>
            <Def term="Fordel med flerladning" cite={`[${MSP}, slide 25; ${B2}, p. 88]`}>{'Muliggjør identifisering av store molekyler basert på et «lite» masseområde. «Lett» i en ideell verden. Eksempel: Rho-protein 47 004,33 Da med topper merket $[M+56H]^{56+}$ og $[M+50H]^{50+}$. Boka viser det samme for neurotensin, $[M+3H]^{3+}$ = 558,7.'}</Def>
            <Def term="Isoformer og glykoformer = trøbbel" cite={`[${MSP}, slide 26]`}>Ikke nødvendigvis lette å separere på kolonne, og de gir overlappende, brede spektre.</Def>
            <Def term="Dekonvolusjon (deconvoluting)" cite={`[${MSP}, slide 27–28]`}>En algoritme søker etter «beste» fit (regresjonsmodell). Den «takes a multiply charged spectrum and produces a zero-charge, average molecular weight spectrum». Innstillinger: smalest mulig output-masseområde, og valg mellom «Uniform Gaussian» (adduktbidrag og heterogenitet) og «Simulated Isotope Pattern» (isotoper dominerer toppbredden).</Def>
          </div>
          <Diagram title="Fra ladningsserie til dekonvolutert spekter" cite={`[${MSP}, slide 25, 27]`}><Dekonvolusjon /></Diagram>
        </Columns>
        <Def term="Prosjektoppgaven" cite={`[${PRO}, p. 1; ${MSP}, slide 30]`}>Proteinet skal også analyseres på MS, som gir informasjon om molvekt og styrker konklusjonen. Kort forklaring av instrumentet (LC-separasjon – Ion key – Synapt QTOF). Dere får et spekter: regn dere fram til m/z manuelt og sammenlign med dekonvolutert spekter.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Eq id="mz" />
        <Plot
          title="Ladningstilstander for et protein"
          caption="$m/z = (M_p + z)/z$ for z = 1 … $z_{maks}$. Masse-slideren: 8000 Da (forelesning, slide 22) eller 47 004,33 Da (Rho-protein, slide 25) — sett den til en av disse. Med 47 004 Da og $z_{maks}$ ≈ 60 vises «kammen». Topphøyder er like (illustrasjon). Regn baklengs fra to nabotopper med formelen under."
          cite={`[${MSP}, slide 22, 25]`}
          x={{ min: 300, max: 8500, label: 'm/z' }}
          y={{ label: 'signal', min: 0, max: 1.1 }}
          samples={2400}
          params={[
            { key: 'M', label: '$M_p$', min: 8000, max: 47004.33, step: 39004.33, value: 8000, unit: 'Da' },
            { key: 'z', label: '$z_{maks}$', min: 1, max: 60, step: 1, value: 4 },
          ]}
          series={[{ key: 's', label: 'spekter', t: 'var-a', fn: (x, p) => { let v = 0; for (let k = 1; k <= p.z; k++) { const c = (p.M + k) / k; if (Math.abs(x - c) < 60) v += stick(x, c, 12) } return v } }]}
        />
        <Eq id="to" />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="Ukjent Mw fra to nabotopper (forelesningseksempel)"
          given="To nabotopper i et ESI-spekter: $m/z_1$ = 2663 (ladning X) og $m/z_2$ = 2004 (ladning X+1). $M_H$ ≈ 1."
          steps={[
            { body: 'Toppen med lavest m/z har én ladning mer, så 2004 har ladning X+1 og 2663 har ladning X.' },
            { title: 'Sett opp:', body: '$X(2663 - 1) = M_p$ og $(X+1)(2004 - 1) = M_p$.' },
            { title: 'Løs for X:', body: String.raw`$X = \dfrac{2004 - 1}{2663 - 2004} = \dfrac{2003}{659} = 3{,}04 \approx 3$` },
            { body: 'Altså er 2663 en +3-topp og 2004 en +4-topp.' },
            { title: 'Masse fra +3-toppen:', body: '$M_p = 3(2663 - 1) = 7986$ Da. Fra +4-toppen: $M_p = 4(2004 - 1) = 8012$ Da.' },
            { body: 'Begge ≈ 8000 Da, som stemmer med forelesningens Mw = 8000. Avviket skyldes avrundede m/z-verdier i figuren.' },
          ]}
          cite={`[${MSP}, slide 23–24]`}
        />
        <FadedExample
          title="Kjent Mw: forutsi ladningsserien"
          given="Protein med $M_p$ = 8000 Da."
          steps={[
            { title: 'Formel:', body: '$m/z = (8000 + z)/z$.' },
            { body: 'z = 1 gir $8001/1 = 8001$, altså $[M+H]^+$.' },
            { title: 'z = 2:', body: '8002/2 = 4001 (forelesningen viser 4002).', hidden: true },
            { title: 'z = 3:', body: '8003/3 ≈ 2668 (forelesningen viser 2663).', hidden: true },
            { title: 'z = 4:', body: '8004/4 = 2001 (forelesningen viser 2004).', hidden: true },
            { title: 'Hvorfor er det en fordel for en QTOF eller kvadrupol at proteinet får høy ladning?', body: `Store molekyler havner i et lite m/z-område som instrumentet kan måle [${MSP}, slide 25].`, hidden: true },
          ]}
          cite={`[${MSP}, slide 22]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Lav m/z = lav ladning" cite={`[${MSP}, slide 22–24]`}>Motsatt. I en ladningsserie har toppen med <em>lavest</em> m/z <em>høyest</em> ladning.</Trap>
        <Trap title="Glemme protonmassen" cite={`[${MSP}, slide 24]`}>{'$M_p = z(m/z - M_H)$, ikke $z \\cdot m/z$. Ved z = 56 gir det et feil på 56 Da.'}</Trap>
        <Trap title="Bottom up gir hele bildet" cite={`[${MSP}, slide 15]`}>Nei. Den taper informasjon, ikke alle peptider blir med, og den gir lite info om PTM.</Trap>
        <Trap title="Top down er alltid bedre" cite={`[${MSP}, slide 17]`}>Den er dyr, krevende, har få protokoller, og store molekyler kan være problematiske.</Trap>
        <Trap title="Glykoformer blir én skarp topp" cite={`[${MSP}, slide 26]`}>Isoformer og glykoformer gir brede, overlappende spektre og er ikke nødvendigvis lette å separere på kolonne.</Trap>
      </Section>
    </>
  )
}
