import { Section, MentalModel, Def, Example, FadedExample, Trap, Gap, Block, Diagram, Svg, Label, Mermaid, Columns, tone } from '../components'

const P2 = 'Proteinkarakterisering del 2 m notater.pdf'
const B2 = 'chromatographgy_basics_part2.pdf'
const OV = 'Øving elektroforese med LF.pdf'
const E25 = 'IMAK2008 eksamen H2025.pdf'
const LF25 = 'Løsningsforslag IMAK2008 H25.pdf'
const U = '**[UTLEDET — ingen fasit i LF]** '

export const meta = {
  title: 'Geldeteksjon og Western blotting',
  topic: 'elektroforese',
  examWeight: { level: 'medium', note: 'H25 oppg. 10 (4 p, fem flervalg om Western blotting). Øving oppg. 2 (Coomassie vs. sølv vs. fluorescens)' },
  examTasks: [
    'H2025: oppg. 10 (Western blotting) (index: side 22) — automatisk rettet uten fasit, svarene er utledet',
    'H2025 oppg. 10 (4 p, automatisk rettet, ingen fasit i LF): Western blotting. Hovedformål, hvorfor membran, primært antistoffs rolle, hva reduserer uspesifikk binding, og deteksjonsmetoder.',
    'Ikke spurt på H2024. Øvingen (oppg. 2) dekker fargemetodene.',
  ],
  buildsOn: ['20-sds-page', '21-ief-og-2d'],
  usedIn: ['23-immunelektroforese', '27-biosensorer-prinsipp-og-typer'],
  sources: [
    `[${P2}, slide 3–16]`,
    '[Proteinkarakterisering del 1 m notater.pdf, slide 40, 58] (farging etter SDS-PAGE, Western etter 2D)',
    `[${B2}, p. 132–133] (p. = boksidetall; PDF-side = bokside − 84)`,
    `[${OV}, p. 2]`,
    `[${E25}, oppg. 10] / [${LF25}, oppg. 10]`,
  ],
  questions: [
    { id: 'p1', kind: 'pretest', q: 'Hvilken totalproteinfarging har høyest sensitivitet: Coomassie eller sølv?', a: `Sølv. Den er ca. 100 ganger mer sensitiv enn Coomassie [${P2}, slide 8–9; ${OV}, p. 2].` },
    { id: 'p2', kind: 'pretest', q: 'Hva er hovedformålet med Western blotting?', a: `Å identifisere spesifikke proteiner i en prøve ved hjelp av antistoffer [${P2}, slide 11].` },
    { id: 'p3', kind: 'pretest', q: 'Hvorfor blokkeres membranen før antistoffet tilsettes?', a: `For å unngå uspesifikk binding av antistoff til membranen [${P2}, slide 12].` },
    { id: 't1', q: 'Nevn de tre trinnene i en fargeprosedyre for geler.', a: `Proteinfiksering, tilsetting av fargeløsning, og vasking for å fjerne overskuddsfarge [${P2}, slide 3].` },
    { id: 't2', q: 'Hvilke to membrantyper brukes i Western blotting?', a: `Nitrocellulose og PVDF (polyvinylidenfluorid) [${P2}, slide 12; ${B2}, p. 132].` },
    { id: 't3', q: 'Hvordan gir HRP et signal?', a: `HRP på det sekundære antistoffet katalyserer oksidasjon av luminol med peroksid, som gir luminescens. Lyset fanges med film eller kamera [${B2}, p. 132].` },
    { id: 't4', q: 'Hvorfor viser en Western blot bare ett bånd når SDS-PAGE av samme prøve viser mange?', a: `Det primære antistoffet binder bare målproteinet. SDS-PAGE med totalproteinfarging viser alle proteinene [${P2}, slide 16].` },
    { id: 't5', q: 'Hvilken Coomassie-type brukes i Bradford assay?', a: `G-250 [${P2}, slide 4].` },
  ],
  equations: [],
}

const wbChart = `flowchart LR
  A["1 Prøve → lysat<br/>+ prøvebuffer (SDS, β-ME)<br/>95 °C 5 min"] --> B["2 Gelelektroforese<br/>katode øverst, anode nederst"]
  B --> C["3 Overføringssandwich<br/>svamp–filter–gel–membran–filter–svamp<br/>(− gel, + membran)"]
  C --> D["4 Blokking → primært Ast<br/>→ HRP-sekundært Ast<br/>→ substrat → kjemiluminescens"]`

/* Antibody chain on membrane */
function Antistoffkjede() {
  const Y = (x, y, t, s = 1) => (
    <g style={{ stroke: tone(t), strokeWidth: 3, fill: 'none' }}>
      <line x1={x} y1={y} x2={x} y2={y - 26 * s} />
      <line x1={x} y1={y - 26 * s} x2={x - 14 * s} y2={y - 44 * s} />
      <line x1={x} y1={y - 26 * s} x2={x + 14 * s} y2={y - 44 * s} />
    </g>
  )
  return (
    <Svg w={460} h={240} label="Antistoffkjeden på membranen">
      <rect x={20} y={200} width={300} height={16} style={{ fill: tone('muted'), opacity: 0.5 }} />
      <Label x={170} y={232} size={11}>membran</Label>
      {[40, 70, 230, 260, 290].map((x) => <circle key={x} cx={x} cy={192} r={7} style={{ fill: tone('definition'), opacity: 0.6 }} />)}
      <Label x={60} y={176} size={10} t="definition">blokkering</Label>
      <rect x={150} y={180} width={30} height={20} rx={4} style={{ fill: tone('trap') }} />
      <Label x={165} y={194} size={9}>mål</Label>
      <g transform="rotate(180 165 180)">{Y(165, 180, 'var-a')}</g>
      <Label x={196} y={150} anchor="start" size={10} t="var-a">primært Ast</Label>
      {Y(165, 122, 'var-c', 0.9)}
      <circle cx={165} cy={74} r={9} style={{ fill: tone('trap') }} />
      <Label x={196} y={100} anchor="start" size={10} t="var-c">sekundært Ast</Label>
      <Label x={180} y={70} anchor="start" size={10} t="trap">detektor (HRP / fluor)</Label>
      <rect x={350} y={30} width={90} height={180} style={{ fill: 'var(--bg)', stroke: tone('ink') }} />
      {[[365, 70], [395, 70], [365, 120], [395, 120], [425, 120], [395, 160]].map(([x, y], i) => <rect key={i} x={x - 10} y={y} width={20} height={4} style={{ fill: tone(i % 2 ? 'var-a' : 'var-c') }} />)}
      <Label x={395} y={226} size={10}>fluorescensblot</Label>
    </Svg>
  )
}

/* SDS-PAGE vs Western */
function SDSvsWB() {
  const lane = (x, bands, t, w = 22) => bands.map((y, i) => <rect key={i} x={x} y={y} width={w} height={3} style={{ fill: tone(t), opacity: 0.85 }} />)
  const many = [40, 52, 60, 70, 78, 90, 102, 112, 125, 138, 150, 165, 180]
  return (
    <Svg w={460} h={230} label="SDS-PAGE vs. Western blot">
      <rect x={20} y={30} width={180} height={170} style={{ fill: `color-mix(in srgb, ${tone('definition')} 8%, var(--bg))`, stroke: tone('ink') }} />
      <rect x={260} y={30} width={130} height={170} style={{ fill: 'var(--bg)', stroke: tone('ink') }} />
      <Label x={110} y={20} size={12}>SDS-PAGE</Label>
      <Label x={325} y={20} size={12}>Western blot</Label>
      {lane(35, [45, 62, 85, 110, 140, 170], 'var-b', 18)}
      {lane(80, many, 'var-b')}
      {lane(140, many, 'var-b')}
      {lane(285, [102], 'ink', 30)}
      {lane(335, [102], 'ink', 30)}
      {['M', '1', '2'].map((l, i) => <Label key={l} x={[44, 91, 151][i]} y={216} size={11}>{l}</Label>)}
      {['1', '2'].map((l, i) => <Label key={l} x={[300, 350][i]} y={216} size={11}>{l}</Label>)}
    </Svg>
  )
}

export default function Page() {
  return (
    <>
      <Section kind="intuition" title="Gjøre proteinene synlige">
        <MentalModel cite={`[${P2}, slide 3–8, 11–13; ${B2}, p. 132]`}>
          Proteiner er usynlige i en gel, så etter elektroforesen må de gjøres synlige. Det gjøres enten ved å farge gelen direkte (totalproteinfarging), eller ved å overføre proteinene til en membran og lete etter ett bestemt protein med antistoffer (Western blotting). Fargingen er en avveining. <strong>Coomassie</strong>: enkel, billig og robust, men middels følsom. <strong>Sølv</strong>: ekstremt følsom, men dårlig for kvantifisering. <strong>Fluorescens</strong>: både følsom og kvantitativ, men krever skanner.{' '}
          Western blotting er en annen type deteksjon. Den viser ikke «alle proteiner», bare det ene som et spesifikt primært antistoff binder, og et merket sekundært antistoff gir signalet. Membranen trengs fordi antistoffene ikke kommer inn i gelen. På en åpen membranoverflate kan de nå proteinene.
        </MentalModel>
      </Section>

      <Section kind="definition" title="Begreper">
        <Def term="Deteksjon av geler (PAGE / SDS-PAGE)" cite={`[${P2}, slide 3]`}>Vanlig metode er farging av gelen direkte, eller at gelresultatet overføres til en membran for videre deteksjon (blotting).</Def>
        <Def term="Ønskede egenskaper ved gelfarging" cite={`[${P2}, slide 3]`}>Høy sensitivitet, bredt lineært dynamisk område, kompatibilitet med nedstrømsprosesser (ekstraksjon og assay, blotting, MS), og en robust, rask og ukomplisert prosedyre.</Def>
        <Def term="Fargeprosedyre" cite={`[${P2}, slide 3; ${B2}, p. 132]`}>(1) proteinfiksering, (2) tilføre fargeløsning, (3) vasking for å fjerne overskuddsfarge. Boka kaller det farging og avfarging (destaining).</Def>
        <Def term="Coomassie-farger" cite={`[${P2}, slide 4; ${OV}, p. 2]`}>Farger (nesten) alle typer proteiner med medium sensitivitet. «Ready to use», «ufarlig» og krever bare vann til rensing og avfarging. <strong>Coomassie Brilliant Blue R-250</strong>: klassiske fargeprotokoller, brukervennlig, kompatibel med MS. <strong>Coomassie Brilliant Blue G-250</strong>: nyere protokoller, raskere farging, brukes i Bradford assay og krever ikke avfargingstrinn. Øvingen: binder seg til proteiner, særlig basiske og aromatiske aminosyrer. Gelen legges i fargeløsningen, overskudd vaskes bort, og proteinene blir blå bånd mot lys bakgrunn. Enkel, rimelig og reproduserbar, og passer til rutine, men har relativt lav følsomhet.</Def>
        <Def term="Fluorescensfarger" cite={`[${P2}, slide 6; ${OV}, p. 2]`}>Tilfredsstiller så og si alle krav til proteinfarging, med høy sensitivitet og MS-kompatibilitet. Dyrere enn Coomassie og sølv, og krever CCD-kamera eller fluorescensskanner. Brukes ofte i proteomikk og 2D-geler. Bedre alternativ når man ønsker høy sensitivitet, analyserer flere proteiner samtidig, skal kvantifisere nøyaktig, skal analysere gelen videre med MS, eller vil merke flere prøver med ulike fargestoffer og sammenligne direkte (DIGE).</Def>
        <Def term="Sølvfarger" cite={`[${P2}, slide 8–9; ${OV}, p. 2]`}>Høyest sensitivitet, men lavt lineært dynamisk område, så reproduserbarheten er ikke god nok for kvantitative analyser. Kan ha dårligere MS-kompatibilitet (i gamle systemer). Eksempelkit: ca. 100 ganger mer sensitiv enn Coomassie, 0,2–0,6 ng. Øvingen: sølvioner bindes til proteinene og reduseres til metallisk sølv, som gir mørke bånd (sølvnitrat → bindes → utviklingsløsning). Mer tidkrevende og følsom for feil, og kvantifisering er vanskeligere.</Def>
        <Diagram title="Sammenligning av fargemetoder" cite={`[${P2}, slide 4–9; ${OV}, p. 2]`}>
          <table className="eq-vars">
            <tbody>
              <tr><td></td><td><strong>Sensitivitet</strong></td><td><strong>Lineært område</strong></td><td><strong>MS-kompatibel</strong></td><td><strong>Kost / utstyr</strong></td><td><strong>Kvantifisering</strong></td></tr>
              <tr><td>Coomassie R-250</td><td>medium</td><td>godt</td><td>ja</td><td>billig</td><td>ja</td></tr>
              <tr><td>Coomassie G-250</td><td>medium</td><td>godt</td><td>ja</td><td>billig</td><td>ja</td></tr>
              <tr><td>Sølv</td><td>høyest (0,2–0,6 ng)</td><td>lavt</td><td>dårligere (gamle systemer)</td><td>middels</td><td>nei</td></tr>
              <tr><td>Fluorescens</td><td>høy</td><td>bredt</td><td>ja</td><td>dyrt + skanner</td><td>ja</td></tr>
            </tbody>
          </table>
        </Diagram>
        <Def term="Spesifikk proteinfarging" cite={`[${P2}, slide 10]`}>Visualisering av bestemte proteinklasser, f.eks. glykoproteiner, fluorescent eller kolorimetrisk. Det finnes også fargefrie systemer for direkte visualisering i PAGE-geler.</Def>
        <Def term="Andre deteksjonsmåter (bok)" cite={`[${B2}, p. 132–133]`}>Fluorescensmerking av DNA eller proteiner før separasjon og UV-belysning etterpå (krever fotodokumentasjon). Densitometer skanner gelen og kan brukes kvantitativt.</Def>

        <Def term="Western blotting (immunoblotting)" cite={`[${P2}, slide 11; ${B2}, p. 132]`}>Molekylærbiologisk metode der gelen blottes (overføres) til en membran for deteksjon og identifisering av proteinene ved hjelp av antistoffer. Meget spesifikk og sensitiv for å identifisere og verifisere målprotein. Brukes etter SDS-PAGE (denaturerte proteiner), men kan også brukes for native proteiner.</Def>
        <Columns>
          <Def term="Prosedyre" cite={`[${P2}, slide 12–13]`}>(1) Preparering av «antigen»-løsning (proteinprøver). (2) Separering av Ag-komponentene ved gelelektroforese. (3) Overføring av separerte proteiner til membran (blotting), der de immobiliseres. Nitrocellulose- eller PVDF-membran. (4) Blokkering av membranen med irrelevant protein (f.eks. tørrmelk) for å unngå uspesifikk binding av antistoff. (5) Tilsetning av primært antistoff, spesifikt for proteinet av interesse. (6) Tilsetning av sekundært antistoff, spesifikt for det primære og merket med enzym, radioaktivitet, fluorescens, luminescens eller lignende. (7) Deteksjon: det sekundære antistoffet bindes til det primære og gir en farge- eller lysreaksjon. Metoden avhenger av merkingen. Båndene sammenlignes med kjente standarder.</Def>
          <Diagram title="Antistoffkjeden på membranen" cite={`[${P2}, slide 14]`}><Antistoffkjede /></Diagram>
        </Columns>
        <Def term="Detaljer fra boka (Info-box 6.3)" cite={`[${B2}, p. 132]`}>Overføring ved kapillærvirkning eller elektrisk. Overføringseffektiviteten sjekkes ofte ved å farge gelen (Coomassie). Blokkering med fortynnet protein (BSA, tørrmelk) i buffer med lite surfaktant. Primært antistoff inkuberes 30 min–natten over, deretter skylles membranen. Sekundært antistoff er ofte koblet til HRP (pepperrotperoksidase), som oksiderer luminol med peroksid og gir luminescens. Navnet er en hyllest til Edwin Southern.</Def>
        <Def term="Arbeidsflyt (forelesningsfigur)" cite={`[${P2}, slide 15]`}>(1) prøveopparbeiding (lyse, redusere og denaturere i prøvebuffer med SDS og β-merkaptoetanol, varme til 95 °C i 5 min) → (2) gelelektroforese → (3) membranoverføring (overføringssandwich med gel nær katoden og membran nær anoden, f.eks. 30 V natten over ved 4 °C eller 100 V i 1 t) → (4) immunodeteksjon (blokking, primært antistoff 1 t RT eller 4 °C natten over, sekundært antistoff 1 t RT, kjemiluminescens).</Def>
        <Mermaid title="Western blotting: fire trinn" cite={`[${P2}, slide 15]`} chart={wbChart} />
        <Columns>
          <Def term="SDS-PAGE vs. Western blot" cite={`[${P2}, slide 16]`}>SDS-PAGE viser mange bånd (alle proteiner). Western blot av samme prøver viser bare ett bånd, målproteinet.</Def>
          <Diagram title="SDS-PAGE vs. Western blot av samme prøve" cite={`[${P2}, slide 16]`}><SDSvsWB /></Diagram>
        </Columns>
        <Def term="Andre blot-typer" cite={`[${P2}, slide 11]`}>Southern (DNA) og Northern (RNA). Forelesningen spør «hva heter det hvis DNA eller RNA skal blottes?»</Def>
        <Gap>svaret (Southern/Northern) står ikke eksplisitt i kursfilene. Boka nevner bare Edwin Southern som opphav til navnet «Western» [chromatographgy_basics_part2.pdf, p. 132].</Gap>
      </Section>

      <Section kind="equation" title="Likninger">
        <Block kind="equation" title="Ingen ligninger">Ingen ligninger i kursmaterialet for geldeteksjon og Western blotting. Ingen interaktiv graf: temaet har ingen ligninger eller tallverdier som egner seg for en slider.</Block>
      </Section>

      <Section kind="example" title="Eksempler">
        <Example
          title="H25 oppg. 10: fem spørsmål om Western blotting (4 p) — [UTLEDET, ingen fasit i LF]"
          given={`Oppgaven ble automatisk rettet, og løsningsforslaget gir ingen fasit [${LF25}, oppg. 10]. **Alle svarene under er utledet fra forelesningen og boka.**`}
          steps={[
            { title: 'i) Hovedformål? (måle enzymaktivitet / separere DNA etter størrelse / forberede prøven til elektroforese / identifisere spesifikke proteiner)', body: `${U}Western blotting identifiserer og verifiserer målprotein ved hjelp av antistoffer [${P2}, slide 11]. → **Identifisere spesifikke proteiner i en prøve.**` },
            { title: 'ii) Hvorfor overføres proteinene til en membran?', body: `${U}Proteinene immobiliseres på membranen, der antistoffene kan nå dem [${P2}, slide 11–12]. → **For å kunne detektere dem med antistoffer.**` },
            { title: 'iii) Rollen til det primære antistoffet?', body: `${U}Det primære antistoffet er spesifikt for proteinet av interesse. Signalet kommer fra det merkede sekundære, og blokkering gjøres med irrelevant protein [${P2}, slide 12–13]. → **Binde spesifikt til målproteinet.**` },
            { title: 'iv) Trinn som reduserer uspesifikk binding? (flere svar)', body: `${U}Blokkering av membranen med irrelevant protein (tørrmelk, BSA) er nettopp for å unngå uspesifikk binding [${P2}, slide 12; ${B2}, p. 132]. → **Blokking med BSA eller melk.**` },
            { body: `${U}Et primært antistoff som binder spesifikt til målet reduserer også feilbinding [slide 13]. → **Primært antistoff med høy affinitet** (rimelig, men ikke formulert ordrett i kursfilene).` },
            { body: `${U}SDS-, buffer- og sample buffer-konsentrasjon handler om elektroforesen, ikke antistoffbindingen. «Unngå å vaske» er feil, for membranen skylles for å fjerne ubundet antistoff [${B2}, p. 132].` },
            { title: 'v) Deteksjonsmetoder? (flere svar)', body: `${U}Det sekundære antistoffet merkes med enzym, radioaktivitet, fluorescens, luminescens eller lignende [${P2}, slide 13]. HRP gir kjemiluminescens [${B2}, p. 132]. → **Radioaktiv merking, fluorescens og kjemiluminescens.** Spektrofotometri direkte på membranen er ikke nevnt.` },
          ]}
          cite={`[${E25}, oppg. 10]`}
        />
        <FadedExample
          title="Øving oppg. 2: Coomassie, sølv og fluorescens"
          steps={[
            { title: 'a) Prinsipper — Coomassie:', body: 'Coomassie Brilliant Blue binder til proteiner (særlig basiske og aromatiske aminosyrer). Gelen farges, overskudd vaskes bort, og proteinene blir blå bånd.' },
            { title: 'Sølvfarging?', body: 'Sølvioner (sølvnitrat) binder til proteinene og reduseres av en utviklingsløsning til metallisk sølv, som gir mørke bånd.', hidden: true },
            { title: 'b) Mest sensitiv?', body: `Sølv, ned mot nanogramområdet (kit: 0,2–0,6 ng, ca. 100 ganger mer sensitiv enn Coomassie) [${P2}, slide 9].`, hidden: true },
            { title: 'c) Når er fluorescens bedre?', body: 'Ved høy sensitivitet kombinert med nøyaktig kvantifisering, når mange proteiner analyseres samtidig, når gelen skal videre til MS, eller ved sammenligning av flere prøver med ulike fargestoffer.', hidden: true },
            { title: 'd) Proteinet i svært lav konsentrasjon?', body: 'Sølv (standardutstyr) eller fluorescens (hvis skanner finnes og man også vil kvantifisere).', hidden: true },
          ]}
          cite={`[${OV}, p. 2]`}
        />
      </Section>

      <Section kind="trap" title="Eksamensfeller">
        <Trap title="Sølv er best til alt" cite={`[${P2}, slide 8]`}>Høyest sensitivitet, men lavt lineært område. Den egner seg dårlig til kvantifisering.</Trap>
        <Trap title="Primært antistoff gir signalet" cite={`[${P2}, slide 13]`}>Nei. Det binder målet. Signalet kommer fra det <em>merkede sekundære</em> antistoffet.</Trap>
        <Trap title="Blokkering = vasking" cite={`[${P2}, slide 12; ${B2}, p. 132]`}>Blokkering gjøres med irrelevant protein (tørrmelk/BSA) <em>før</em> antistoffet. Vasking fjerner ubundet antistoff etterpå.</Trap>
        <Trap title="Western blotting for DNA" cite={`[${P2}, slide 11]`}>Western er for proteiner. DNA og RNA blottes med andre metoder.</Trap>
        <Trap title="Coomassie G-250 vs. R-250" cite={`[${P2}, slide 4]`}>G-250 krever ikke avfarging og brukes i Bradford. R-250 er den klassiske.</Trap>
        <Trap title="Membranen gjør proteinene «mer stabile»" cite={`[${E25}, oppg. 10ii; ${P2}, slide 11–12]`}>Distraktor på H25. Hovedpoenget er at antistoffene kan nå de immobiliserte proteinene.</Trap>
      </Section>
    </>
  )
}
