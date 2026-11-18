import { Section, MentalModel, Def, Example, FadedExample, Trap, Gap, Block, Diagram, Svg, Box, Arrow, Label, Curve, Plot, Columns, V, tone } from '../components'

const BS = 'Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf'
const DB = 'hele dokbio261016.pdf'
const LF24 = 'LF eksamen H2024 IMAK2008.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const U = '**[UTLEDET — ingen fasit i LF]** '

export const meta = {
  title: 'Moderne biosensorer: SPR, FET og gullnanopartikler (AuNP)',
  topic: 'biosensorer',
  examWeight: { level: 'medium', note: 'H24 3(a) iv (del av 6 p: riktige påstander om SPR). H25 oppg. 15 (3 p: SPR-transduser og åtte SPR-utsagn, automatisk rettet uten fasit). Ingen eksamensoppgaver om FET eller AuNP-kolorimetri utover AuNP i SPR' },
  examTasks: [
    'H2024: 3(a) iv (index: side 28)',
    'H2025: oppg. 15 (SPR) (index: side 28) — uten LF, svarene er utledet',
    'H2024 oppg. 3(a) iv (del av 6 p): riktige påstander om SPR. Fasit: kvasipartikkel, surface plasmon resonans, brytningsindeks.',
    'H2025 oppg. 15 (3 p, automatisk rettet, ingen fasit): SPR-transduser (optisk) og åtte utsagn [UTLEDET].',
    'FET og AuNP-kolorimetri er ikke spurt direkte.',
  ],
  buildsOn: ['27-biosensorer-prinsipp-og-typer', '23-immunelektroforese'],
  usedIn: [],
  sources: [
    `[${BS}, p. 161–174] (p. = boksidetall; PDF-side = bokside − 156)`,
    `[${DB}, p. 57, 62] (p. = trykt side; PDF-side = trykt side + 5)`,
    `[Eksamen_IMAK2008_24.pdf, oppg. 3a iv] / [${LF24}, oppg. 3a iv]`,
    `[${E25}, oppg. 15] / [${LF25}] (oppg. 15 ikke dekket)`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hva måler en SPR-sensor egentlig?', a: `Endringer i permittivitet (brytningsindeks) nær gulloverflaten på sensorchipen, når analytt binder til eller dissosierer fra immobiliserte ligander. Det avleses som en forskyvning av resonansvinkelen [${BS}, p. 161].` },
    { id: 'p2', kind: 'pretest', q: 'Krever SPR merking av analytten?', a: `Nei. SPR karakteriserer bindingsreaksjoner i sanntid uten merking [${BS}, p. 161].` },
    { id: 'p3', kind: 'pretest', q: 'Hvorfor blir en AuNP-løsning blå når partiklene aggregerer?', a: `Plasmonkobling mellom partiklene rødforskyver SPR-absorpsjonsmaksimum, og fargen går fra rød til blå [${BS}, p. 171].` },
    { id: 't1', q: 'Nevn tre måter kap 4.2 bruker for å øke SPR-sensitiviteten.', a: `(1) AuNP- eller polymerpartikkel-«merking», direkte eller sandwich-ELISA-lignende. (2) 3D ligand-hydrogellag via SI-ATRP med optimal tykkelse. (3) Molekylært pregede lag med stabile, selektive hulrom [${BS}, p. 162–166].` },
    { id: 't2', q: 'Hvorfor faller SPR-signalet når antistoff-hydrogellaget blir tykkere enn ca. 225 nm?', a: `SPR detekterer bare permittivitetsendringer innenfor < 300 nm fra gulloverflaten. Bindingen som skjer lenger ute i et tykt lag, gir liten endring nær gullet [p. 163–164].` },
    { id: 't3', q: 'Hva er fordelen med FET for DNA-deteksjon sammenlignet med qPCR og DNA-chips?', a: `FET detekterer negativt ladet DNA og RNA direkte uten fluorescensmerking (som ellers gir tap av analytt), og kan sekvensere via V_T-skift per innbygd base [p. 169–170].` },
    { id: 't4', q: 'Hvordan kan en AuNP-basert sensor skille en fullstendig komplementær DNA-tråd fra en med én mismatch?', a: `Ved å måle absorbans mot temperatur (smeltekurve). Mismatch-dupleksen dissosierer ved lavere temperatur [p. 171–172].` },
    { id: 't5', q: 'Hva er et aptamer, og hvordan lages det?', a: `En enkelttrådet nukleinsyre som binder et mål med høy affinitet og spesifisitet, utviklet med SELEX (systematisk evolusjon av ligander ved eksponentiell anrikning) [p. 172].` },
  ],
  equations: [],
}

/* SPR set-up and angle shift */
function SPR() {
  const X = (a) => 250 + (a / 10) * 190
  const dip = (c) => Array.from({ length: 41 }, (_, i) => { const a = i * 0.25; return [X(a), 180 - 130 * (1 - 0.85 * Math.exp(-((a - c) ** 2) / 0.8))] })
  return (
    <Svg w={460} h={230} label="SPR-oppsett og vinkelskift">
      <path d="M 40 110 L 200 110 L 120 40 Z" style={{ fill: `color-mix(in srgb, ${tone('definition')} 20%, var(--bg))`, stroke: tone('ink') }} />
      <rect x={40} y={110} width={160} height={8} style={{ fill: tone('example'), opacity: 0.8 }} />
      <Label x={120} y={132} size={10}>gullfilm (sensorchip)</Label>
      <rect x={40} y={140} width={160} height={30} style={{ fill: tone('var-c'), opacity: 0.15, stroke: tone('muted') }} />
      <Label x={120} y={160} size={10}>flowcelle med analytt</Label>
      <Arrow x1={10} y1={40} x2={115} y2={108} t="trap" />
      <Label x={14} y={30} anchor="start" size={10} t="trap">innfallende lys</Label>
      <Arrow x1={125} y1={108} x2={225} y2={40} t="var-b" />
      <Label x={225} y={30} anchor="end" size={10} t="var-b">reflektert → detektor</Label>
      <line x1={250} y1={180} x2={445} y2={180} style={{ stroke: tone('ink') }} />
      <line x1={250} y1={180} x2={250} y2={30} style={{ stroke: tone('ink') }} />
      <Curve t="muted" dashed points={dip(4)} />
      <Curve t="var-a" points={dip(5.5)} />
      <Arrow x1={X(4)} y1={195} x2={X(5.5)} y2={195} t="trap" head={6} />
      <Label x={X(4.75)} y={214} size={10} t="trap">resonance angle shift</Label>
      <Label x={445} y={226} anchor="end" size={10}>vinkel</Label>
      <Label x={256} y={30} anchor="start" size={10}>reflektans</Label>
      <Label x={X(4) - 4} y={170} anchor="end" size={9}>θ₁</Label>
      <Label x={X(5.5) + 4} y={170} anchor="start" size={9} t="var-a">θ₂</Label>
    </Svg>
  )
}

/* AuNP enhancement */
function AuNPForsterkning() {
  const Y = (x, y, t, inv = false) => (
    <g transform={inv ? `rotate(180 ${x} ${y})` : undefined} style={{ stroke: tone(t), strokeWidth: 3, fill: 'none' }}>
      <line x1={x} y1={y} x2={x} y2={y - 16} />
      <line x1={x} y1={y - 16} x2={x - 9} y2={y - 28} />
      <line x1={x} y1={y - 16} x2={x + 9} y2={y - 28} />
    </g>
  )
  const au = (x, y) => <circle cx={x} cy={y} r={12} style={{ fill: tone('example') }} />
  return (
    <Svg w={460} h={200} label="AuNP-forsterkning av SPR">
      <Label x={110} y={18} size={11}>(a) ≈ 15×</Label>
      <rect x={20} y={160} width={180} height={10} style={{ fill: tone('example'), opacity: 0.7 }} />
      {Y(110, 160, 'var-a')}
      <rect x={100} y={116} width={20} height={14} rx={3} style={{ fill: tone('var-e') }} />
      {au(110, 100)}
      <Label x={135} y={100} anchor="start" size={9}>hIgG–AuNP</Label>
      <Label x={135} y={150} anchor="start" size={9} t="var-a">anti-hIgG</Label>
      <Label x={340} y={18} size={11}>(b) sandwich ≈ 25×</Label>
      <rect x={250} y={160} width={190} height={10} style={{ fill: tone('example'), opacity: 0.7 }} />
      <rect x={330} y={146} width={20} height={14} rx={3} style={{ fill: tone('var-e') }} />
      {Y(340, 116, 'var-c', true)}
      {au(340, 76)}
      <Label x={360} y={150} anchor="start" size={9} t="var-e">hIgG</Label>
      <Label x={360} y={110} anchor="start" size={9} t="var-c">anti-hIgG–AuNP</Label>
      <Label x={230} y={194} size={10}>sterk optisk kobling Au-film ↔ AuNP</Label>
    </Svg>
  )
}

/* Molecular imprinting */
function Preging() {
  return (
    <Svg w={460} h={150} label="Molekylær preging">
      {[0, 1, 2, 3].map((i) => {
        const x = 20 + i * 112
        return (
          <g key={i}>
            <rect x={x} y={30} width={90} height={80} rx={8} style={{ fill: i === 0 ? 'none' : `color-mix(in srgb, ${tone('var-c')} 20%, var(--bg))`, stroke: tone('ink') }} />
            {i !== 2 && <circle cx={x + 45} cy={70} r={14} style={{ fill: tone(i === 3 ? 'var-a' : 'var-e') }} />}
            {i === 2 && <circle cx={x + 45} cy={70} r={14} style={{ fill: 'var(--bg)', stroke: tone('ink'), strokeDasharray: '3 2' }} />}
            {[0, 1, 2, 3].map((k) => { const a = k * Math.PI / 2; return <circle key={k} cx={x + 45 + 24 * Math.cos(a)} cy={70 + 24 * Math.sin(a)} r={4} style={{ fill: tone('var-b') }} /> })}
            {i < 3 && <Arrow x1={x + 92} y1={70} x2={x + 110} y2={70} head={6} />}
          </g>
        )
      })}
      {['monomerer rundt templat', 'kopolymerisering + tverrbinder', 'templat fjernet: hulrom', 'mål binder selektivt'].map((t, i) => <Label key={t} x={65 + i * 112} y={130} size={9}>{t}</Label>)}
    </Svg>
  )
}

/* FET */
function FET() {
  return (
    <Svg w={460} h={240} label="FET-biosensor">
      <rect x={20} y={160} width={260} height={50} style={{ fill: tone('muted'), opacity: 0.4, stroke: tone('ink') }} />
      <Label x={150} y={196} size={10}>Si-substrat · kanal</Label>
      <Box x={20} y={140} w={60} h={22} label="source" t="var-b" rx={3} />
      <Box x={220} y={140} w={60} h={22} label="drain" t="var-b" rx={3} />
      <rect x={80} y={148} width={140} height={12} style={{ fill: tone('var-c'), opacity: 0.4 }} />
      <Label x={150} y={142} size={9}>gate-isolator</Label>
      <rect x={60} y={60} width={180} height={80} style={{ fill: tone('definition'), opacity: 0.1, stroke: tone('muted') }} />
      <Label x={150} y={74} size={9}>vandig løsning</Label>
      {[100, 140, 180].map((x) => <circle key={x} cx={x} cy={128} r={6} style={{ fill: tone('var-a') }} />)}
      <Label x={150} y={112} size={9} t="var-a">ion / protein / DNA på gate</Label>
      <line x1={200} y1={60} x2={200} y2={30} style={{ stroke: tone('ink'), strokeWidth: 3 }} />
      <Label x={206} y={30} anchor="start" size={9}>referanseelektrode (V_G)</Label>
      <line x1={310} y1={210} x2={450} y2={210} style={{ stroke: tone('ink') }} />
      <line x1={310} y1={210} x2={310} y2={80} style={{ stroke: tone('ink') }} />
      <Curve t="muted" dashed points={[[310, 210], [350, 205], [380, 170], [400, 120], [430, 100]]} />
      <Curve t="var-a" points={[[330, 210], [370, 205], [400, 170], [420, 120], [450, 100]]} />
      <Label x={450} y={226} anchor="end" size={9}>V</Label>
      <Label x={316} y={84} anchor="start" size={9}>I_D</Label>
      <Label x={380} y={236} size={9} t="var-a">kurven forskyves langs V</Label>
    </Svg>
  )
}

/* AuNP colorimetry */
function AuNPFarge() {
  const disp = (x) => [0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={x + (i % 3) * 30} cy={60 + Math.floor(i / 3) * 30} r={8} style={{ fill: tone('trap') }} />)
  const agg = (x) => [0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={x + (i % 3) * 14} cy={66 + Math.floor(i / 3) * 14} r={8} style={{ fill: tone('definition') }} />)
  return (
    <Svg w={460} h={170} label="AuNP-kolorimetri">
      {disp(40)}
      <Label x={70} y={130} size={11} t="trap">dispergert = rød</Label>
      <Label x={70} y={146} size={9}>absorberer ~450 nm</Label>
      {agg(330)}
      <Label x={345} y={130} size={11} t="definition">aggregert = blå</Label>
      <Label x={345} y={146} size={9}>rødforskjøvet</Label>
      <Arrow x1={150} y1={60} x2={300} y2={60} t="ink" />
      <Label x={225} y={50} size={10}>DNA-mål: aggregering (rød → blå)</Label>
      <Arrow x1={300} y1={100} x2={150} y2={100} t="ink" />
      <Label x={225} y={118} size={10}>adenosin + aptamer: dissosiasjon (blå → rød)</Label>
    </Svg>
  )
}

const pts = [[0, 0.14], [5, 0.29], [20, 0.32], [50, 0.41], [110, 0.42], [225, 0.51], [470, 0.22], [1000, 0.16]]
const interp = (x) => { for (let i = 0; i < pts.length - 1; i++) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1]; if (x >= x0 && x <= x1) return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0) } return null }

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Umerket: bindingen sees direkte på overflaten">
        <MentalModel cite={`[${DB}, p. 62; ${BS}, p. 161–171]`}>
          Alle tre teknikkene er <em>umerkede</em> transdusere. De registrerer bindingen direkte som en fysisk endring på eller nær en overflate. <strong>SPR</strong> (optisk): lys reflekteres fra en tynn gullfilm under en prisme. Ved én bestemt vinkel kobles lyset til elektronsvingningene i gullet, og refleksjonen faller. Binder molekyler seg på gullet, endres brytningsindeksen ved overflaten, og <V c="a">resonansvinkelen</V> forskyves. <strong>FET</strong> (elektrisk): bindingen endrer <em>ladningen</em> på gate-elektroden, og det endrer strømmen gjennom transistorkanalen. <strong>AuNP</strong> (optisk og kolorimetrisk): bindingen får gullpartikler til å klumpe seg eller løse seg opp, og fargen skifter fra rød til blå eller omvendt.{' '}
          Hovedbegrensningen er den samme for alle: signalet kommer bare fra en tynn sone ved overflaten. SPR ser &lt; 300 nm. FET ser bare innenfor Debye-lengden (noen få nm), og SPR gir lite signal for små molekyler (Mw &lt; 5000). Forbedringene handler derfor om å forsterke signalet med AuNP-«merker» og sandwich, eller om å fylle sonen smartere med hydrogellag av optimal tykkelse, molekylær preging og responsive geler.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Columns>
          <div>
            <Def term="SPR: prinsipp" cite={`[${BS}, p. 161–162]`}>Konvensjonelle SPR-sensorer detekterer endringer i permittivitet nær gulloverflaten på sensorchipen, forårsaket av binding eller dissosiasjon av analytt til ligander på overflaten. Signalet er en <strong>forskyvning av resonansvinkelen</strong>. Oppsett (fig. 4.2.5): innfallende lys gjennom prisme mot sensorchip, reflektert lys til detektor, og analytt i flowcelle over chipen. Plott av reflektans mot vinkel har et minimum, og minimum flyttes mot høyere vinkel med analytt.</Def>
            <Def term="SPR: egenskaper" cite={`[${BS}, p. 161–162; ${DB}, p. 57]`}>Mest brukt som sensitivt og <em>kvantitativt</em> verktøy for å følge bindinger og dynamiske interaksjoner mellom biomolekyler. Gir <strong>sanntid</strong> uten <strong>merking</strong>. Instrumenter og funksjonelle chips er kommersielt tilgjengelige. Brukes i kjemi, biologi, medisin, matvitenskap og miljøanalyse. Egnet til å måle <strong>bindingskonstanter</strong> for makromolekyler (antistoffer, proteiner, DNA, RNA, polysakkarider). <strong>Transdusertype</strong>: optisk (resonansvinkel og brytningsindeks).</Def>
          </div>
          <Diagram title="SPR-oppsett og vinkelskift" cite={`[${BS}, p. 162, fig. 4.2.5]`}><SPR /></Diagram>
        </Columns>
        <Def term="SPR: begrensninger" cite={`[${BS}, p. 162–164]`}>Resonansvinkelskiftet er <strong>proporsjonalt med massen</strong> som binder til overflaten. Analytter med <strong>Mw &lt; 5000</strong> gir derfor ofte for liten brytningsindeksendring. Ligandmengden er begrenset av det todimensjonale arealet, fordi standard aminkobling binder ligandene direkte til overflaten. SPR detekterer bare permittivitetsendringer <strong>innenfor &lt; 300 nm</strong> fra gulloverflaten. Biomolekylære ligander har dårlig kjemisk og fysisk stabilitet (syre, base, høy temperatur).</Def>
        <Columns>
          <Def term="Strategi 1: «merking» med AuNP" cite={`[${BS}, p. 162–163]`}>hIgG–AuNP-kompleks binder anti-hIgG på chipen og gir <strong>ca. 15 ganger</strong> økt sensitivitet. <strong>Sandwich-ELISA-lignende</strong>: hIgG binder først chipen, deretter AuNP konjugert med sekundært anti-hIgG. Gir <strong>ca. 25 ganger</strong> økt sensitivitet. Forsterkningen skyldes sterk optisk kobling mellom Au-filmen og AuNP. Fungerer også for inhiberingsanalyser. Lateks- og polyakrylamid-hydrogelmikrosfærer virker på samme måte.</Def>
          <Diagram title="AuNP-forsterkning av SPR" cite={`[${BS}, p. 163, fig. 4.2.6]`}><AuNPForsterkning /></Diagram>
        </Columns>
        <Def term="Strategi 2: mer ligand per areal (SI-ATRP)" cite={`[${BS}, p. 163–164]`}>Polymerbørster eller tynne hydrogellag med ligander, laget med <strong>SI-ATRP</strong> (overflateinitiert atomoverførings-radikalpolymerisasjon, kontrollert/«levende» polymerisasjon). Lagtykkelsen styres med polymerisasjonstiden. Et 3D antistoff-hydrogellag gir større skift enn direkte immobilisert antistoff. <strong>Skiftet øker opp til ca. 225 nm</strong> lagtykkelse og faller ved tykkere lag, til nivå med direkte immobilisert chip, fordi endringer langt fra gullet ikke registreres (&lt; 300 nm-grensen). Det finnes altså en <strong>optimal tykkelse</strong>.</Def>
        <Columns>
          <Def term="Strategi 3: molekylært pregede lag" cite={`[${BS}, p. 164–167]`}>Polymeriserbare funksjonelle grupper ordnes rundt et templatmolekyl, kopolymeriseres med mye tverrbinder, og templatet ekstraheres. Igjen står et komplementært hulrom (fig. 4.2.8). Stabilt mot temperatur og pH, i motsetning til biomolekylære ligander. Eksempler: Lai et al. (1998): teofyllin-, koffein- og xantinpregede polymerer på <strong>sølvfilm</strong>. God linearitet mellom konsentrasjon og vinkelskift, og nesten ingen kryssgjenkjenning. Proteiner krever lett tverrbundne <strong>pregede hydrogeler</strong>. AFP-preget hydrogel (lektin ConA + anti-AFP) <strong>krymper</strong> med økende [AFP] fordi lektin–AFP–antistoff-«sandwicher» virker som dynamiske tverrbindinger. Ikke-preget hydrogel sveller bare litt. ConA-preget hydrogellag (GEMA-ligand, SI-ATRP) gir mye større skift og høyere affinitetskonstant enn ikke-preget lag.</Def>
          <Diagram title="Molekylær preging" cite={`[${BS}, p. 165, fig. 4.2.8]`}><Preging /></Diagram>
        </Columns>
        <Def term="Sensorchip-metall" cite={`[${BS}, p. 161, 165]`}>Gull i konvensjonelle chips, sølvfilm i Lais pregede chips.</Def>
        <Gap>definisjonen av et plasmon som kvasipartikkel står ikke i noen kursfil, bare som riktig alternativ i LF H24 (3a iv).</Gap>

        <Columns>
          <Def term="Felteffekttransistor-baserte biosensorer (FET)" cite={`[${BS}, p. 168–169]`}>Nanoteknologi gir miniatyrisering og integrasjon, som muliggjør <strong>POCT</strong> (point-of-care testing) med høy sensitivitet og enkel håndtering. Oppbygning: source-, drain- og gate-elektrode. Et elektrisk felt styrer ledningsevnen i source–drain-«kanalen» i en halvleder. Ledningsevnen avhenger av potensialendringer på gate-elektroden (fig. 4.2.11). <strong>ISFET</strong> (ionesensitiv FET) er den mest grunnleggende og mest studerte. Prinsipp: gate-elektroden modifiseres med enzymer, antistoffer eller DNA. Biogjenkjenning endrer overflateladningstettheten, og <strong>V_DS–I_D-kurven forskyves langs spenningsaksen</strong> i forhold til [analytt]. Ladningsbærertettheten er følsom for feltet vinkelrett på gate-overflaten.</Def>
          <Diagram title="FET-biosensor" cite={`[${BS}, p. 169, fig. 4.2.11]`}><FET /></Diagram>
        </Columns>
        <Def term="En-FET (enzymkoblet FET)" cite={`[${BS}, p. 168]`}>Mest populær. Enzym på gate-overflaten av en ISFET, og enzymreaksjonen gir ladningsbærere i forhold til [analytt]. Kan detektere sakkarider, urea, penicillin, etanol, formaldehyd, organofosfatpesticider, askorbinsyre, acetylkolin og kreatinin.</Def>
        <Def term="Debye-lengden" cite={`[${BS}, p. 169]`}>FET detekterer bare ladningsendringer innenfor noen få nm (under fysiologisk ionestyrke), fordi motioner skjermer ladningen. Store proteiner (f.eks. fibrinogen, større enn Debye-lengden) kan ikke kvantifiseres. Små proteiner (BSA, lysozym på alkantiol-SAM på gull-gate) kan detekteres sensitivt uten merking. Tiltak: dynamiske assays med trinnvis tilsetting og kinetisk analyse.</Def>
        <Def term="FET: DNA/RNA" cite={`[${BS}, p. 169–170]`}>Negativt ladd DNA og RNA detekteres <strong>uten merking</strong> (i motsetning til qPCR og DNA-chips, som trenger fluorescens). Hybridisering avleses som skift i V_DS–I_D eller terskelspenning V_T. <strong>DNA-sekvensering</strong>: primerforlengelse på gate. Hver innbygd base gir mer negativ ladning og et V_T-skift, så sekvensen og SNP-er kan leses.</Def>
        <Def term="«Debye-lengdefri» FET" cite={`[${BS}, p. 170–171]`}>Glukoseresponsiv hydrogel med fenylboronsyre (50 µm) på gate. Glukose kompleksbinder og gir flere negative grupper, så gelen sveller. Permittivitetsendringen forplanter seg gjennom laget og detekterer også <em>uladde</em> molekyler som glukose. Boka skriver «50 mm» om lagtykkelsen; sammenhengen tyder på µm-skala, men kursfilene avklarer det ikke. Fordeler med FET: umerket overvåking og integrerbar med nanofabrikasjon.</Def>

        <Columns>
          <Def term="Gullnanopartikkel-baserte (AuNP) optiske biosensorer" cite={`[${BS}, p. 171]`}>AuNP har unike optiske egenskaper basert på <strong>SPR fra kollektiv oscillasjon av ledningselektronene</strong>. <strong>Monodisperse AuNP er røde</strong>: SPR absorberer blågrønt (~450 nm) og reflekterer rødt (~700 nm). <strong>Aggregering</strong> gir interpartikkel-plasmonkobling og en kraftig <strong>rødforskyvning</strong> av absorpsjonsmaksimum, så fargen går <strong>rød → blå</strong> (ved nM-konsentrasjoner). Det er grunnlaget for <strong>kolorimetriske sensorer</strong>, likt lateksagglutinasjon.</Def>
          <Diagram title="AuNP-kolorimetri" cite={`[${BS}, p. 171–173, fig. 4.2.13–4.2.14]`}><AuNPFarge /></Diagram>
        </Columns>
        <Def term="DNA-AuNP (Mirkin 1996)" cite={`[${BS}, p. 171–172]`}>To typer tiolert ssDNA, komplementære til hver ende av mål-oligonukleotidet. Mål-ssDNA tverrbinder partiklene, som aggregerer, og fargen går rød → blå. Varme dissosierer dsDNA og redispergerer partiklene. Smeltekurven (absorbans mot temperatur) skiller perfekt match fra <strong>ett-basepar-mismatch</strong>. Fordeler mot qPCR og mikromatrise: «quick and easy» og optisk avlesning.</Def>
        <Def term="Aptamer-AuNP" cite={`[${BS}, p. 172]`}>Aptamerer er enkelttrådede nukleinsyrer som binder et mål med høy affinitet og spesifisitet, utviklet med <strong>SELEX</strong>. Adenosinsensor: adenosin binder aptameret, aggregatene dissosierer, og fargen går <strong>blå → rød</strong>. Ingen respons på cytidin, uridin eller guanosin. Dynamisk område <strong>0,3–2 mM</strong>. Også demonstrert for kokain, teofyllin, okratoksin A og PDGF.</Def>
        <Def term="Karbohydrat-AuNP" cite={`[${BS}, p. 173–174]`}>Dekstran-AuNP aggregerer med lektin ConA. Glukose konkurrerer om ConA, aggregatene dissosierer, og glukose måles i området <strong>1–40 mM</strong> (UV-Vis eller resonanslysspredning). Laktose-AuNP aggregerer med lektinet RCA120 i forhold til konsentrasjonen, med sensitivitet nær ELISA. Fordeler med AuNP: enkel håndtering, optisk deteksjon og høy sensitivitet. Lovende for POCT.</Def>
        <Def term="Oppsummering (kap 4.2.5)" cite={`[${BS}, p. 174]`}>Målet er enkle, raske, billige, svært sensitive og selektive biosensorer for individualisert medisin og ultrasensitiv POCT. Fagfeltet er tverrfaglig: overflatekjemi gir nye gjenkjenningssystemer, og nanofabrikasjon gir nye transdusere, miniatyrisering og integrasjon.</Def>
      </Section>

      <Section kind="equation" title="Likninger">
        <Block kind="equation" title="Ingen ligninger i kursmaterialet" cite={`[${BS}, p. 162, 168, 173]`}>Kvalitative proporsjonaliteter: SPR-resonansvinkelskiftet ∝ massen som binder til overflaten. FET-kurveforskyvningen avhenger av analyttkonsentrasjonen. AuNP-aggregeringsgraden ∝ [RCA120].</Block>
        <Plot
          title="Hydrogellagtykkelse vs. maks resonansvinkelskift"
          caption="**Verdiene er avlest fra fig. 4.2.7 i innholdsfila og bare omtrentlige** — bare optimum ca. 225 nm og < 300 nm-grensen står i teksten. Linjen er lineær interpolasjon mellom de avleste punktene (figurens x-akse er brutt mellom 500 og 1000 nm; her er den kontinuerlig). Stiplet: optimum 225 nm og SPR-deteksjonsgrensen 300 nm. Hold musen over kurven for å lese skiftet ved en gitt tykkelse."
          cite={`[${BS}, p. 163–164, fig. 4.2.7]`}
          x={{ min: 0, max: 1000, label: 'hydrogellagtykkelse (nm)' }}
          y={{ label: 'maks skift (°)', min: 0, max: 0.6 }}
          samples={400}
          series={[{ key: 's', label: 'maks skift', t: 'var-a', fn: (x) => interp(x) }]}
          marks={[{ x: 225, label: 'optimum 225 nm' }, { x: 300, label: '< 300 nm' }]}
        />
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H24 oppg. 3(a) iv: riktige påstander om SPR (del av 6 p)"
          steps={[
            { body: `«SPR står for surface plasmon resonans»: **riktig** [${BS}, p. 161]. «Structure plasmon resonans» er feil.` },
            { body: '«Basert på overvåking av en brytningsindeks»: **riktig**. SPR detekterer permittivitetsendringer (brytningsindeks) ved gulloverflaten [p. 161–162].' },
            { body: '«Et plasmon er en kvasipartikkel»: **riktig** ifølge fasit (står ikke i kursfilene, se GAP).' },
            { body: '«Bruk av gull nanopartikler påvirker ikke følsomheten»: **feil**. AuNP gir ca. 15–25 ganger økt sensitivitet [p. 162].' },
            { body: '«Analytten må alltid være merka»: **feil**. SPR er merkingsfri [p. 161].' },
          ]}
          cite={`[Eksamen_IMAK2008_24.pdf, oppg. 3a iv; ${LF24}, oppg. 3a iv]`}
        />
        <FadedExample
          title="H25 oppg. 15: SPR-transduser og åtte utsagn (3 p) — [UTLEDET, ingen fasit i LF]"
          given={`Automatisk rettet, uten fasit i LF [${LF25}]. **Alle svarene er utledet fra kap 4.2.**`}
          steps={[
            { title: 'i) Hvilken transduser brukes i SPR? (enzymatisk / piezoelektrisk / elektrokjemisk / optisk)', body: `${U}SPR leser av en lysrefleksjonsvinkel (resonansvinkel), så → **optisk** [p. 161–162; ${DB}, p. 57].` },
            { title: `${U}«SPR kombinert med gullnanopartikler gir økt følsomhet»`, body: '**Riktig** (ca. 15× og ca. 25×) [p. 162].', hidden: true },
            { title: `${U}«Sensorchipen er belagt med et metall»`, body: '**Riktig** (gull, eventuelt sølv) [p. 161, 165].', hidden: true },
            { title: `${U}«SPR kan kombineres med ELISA for økt følsomhet»`, body: '**Riktig** («sandwich ELISA-like» AuNP-forsterkning, ca. 25×) [p. 162].', hidden: true },
            { title: `${U}«SPR kan ikke benyttes til real-time analyser»`, body: '**Feil**. SPR gir sanntid [p. 161].', hidden: true },
            { title: `${U}«Er avhengig av merking med fluorescens»`, body: '**Feil**. Merkingsfri [p. 161].', hidden: true },
            { title: `${U}«Resonansshiftet er konstant»`, body: '**Feil**. Skiftet øker med bundet masse og avhenger av lagtykkelse [p. 162–164].', hidden: true },
            { title: `${U}«Analyse med høy spesifisitet»`, body: 'Sannsynlig **riktig**. Spesifisiteten kommer fra liganden, og pregede lag viser nesten ingen kryssgjenkjenning [p. 165]. Kursfilene sier ikke dette ordrett om SPR generelt.', hidden: true },
            { title: `${U}«Plasmon oppstår når metalloverflata blir belyst ved en bestemt sekvens»`, body: 'Usikker. Resonansen oppstår ved en bestemt **vinkel** [p. 162]. «Sekvens» er trolig en distraktor eller skrivefeil.', hidden: true },
          ]}
          cite={`[${E25}, oppg. 15]`}
        />
        <Gap>hvordan et plasmon oppstår er ikke beskrevet i kursfilene ut over «kollektiv oscillasjon av ledningselektronene» for AuNP [Biosensorer kap 4.2, p. 171].</Gap>
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="SPR er merkingsfri og i sanntid" cite={`[${BS}, p. 161–162]`}>Men AuNP-«merking» brukes <em>valgfritt</em> for å forsterke.</Trap>
        <Trap title="SPR-transduser = optisk" cite={`[${BS}, p. 161, 168; ${DB}, p. 57]`}>Ikke elektrokjemisk eller piezoelektrisk. FET er elektrisk (potensiometrisk).</Trap>
        <Trap title="Små molekyler (Mw < 5000) gir svakt SPR-signal" cite={`[${BS}, p. 162]`}>Fordi skiftet er ∝ bundet masse.</Trap>
        <Trap title="Tykkere hydrogellag er ikke alltid bedre" cite={`[${BS}, p. 163–164]`}>Optimum er ca. 225 nm, og over 300 nm fra gullet ser SPR ingenting.</Trap>
        <Trap title="Debye-lengden" cite={`[${BS}, p. 163, 169]`}>(Noen nm) begrenser FET, ikke SPR. SPR-grensen er ca. 300 nm.</Trap>
        <Trap title="AuNP-farge" cite={`[${BS}, p. 171–172]`}>Dispergert = rød, aggregert = blå. Aptamersensoren går <em>blå → rød</em> (dissosiasjon), DNA-sensoren <em>rød → blå</em> (aggregering).</Trap>
        <Trap title="«SPR står for structure plasmon resonans»" cite={`[${LF24}, oppg. 3a iv]`}>Feil. Det er <em>surface</em>.</Trap>
      </Section>
    </>
  )
}
