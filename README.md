# IMAK2008 — study site

A visual, interactive summary of **IMAK2008**: one page per subtopic, with diagrams, interactive plots, colored equations, worked and faded examples, exam traps and self-tests. There's also a review queue, mixed practice, an equation sheet and an Anki export.

Built from [study-template](https://github.com/sebkaul/study-template). See `CLAUDE.md` for the workflow.

## Topics

| Slug | Title | Topic | Weight |
|---|---|---|---|
| `01-retensjon-og-selektivitet` | Retensjon og selektivitet (k, α) | Kromatografisk teori | high |
| `02-effektivitet-og-opplosning` | Effektivitet og oppløsning (N, H, Rs) | Kromatografisk teori | high |
| `03-bandspredning-van-deemter` | Båndspredning og van Deemter | Kromatografisk teori | high |
| `04-hplc-system-pumper-injeksjon` | HPLC-systemet: løsemidler, pumper og injeksjon | HPLC-instrumentering | low |
| `05-kolonner-og-partikler` | Kolonner og partikler | HPLC-instrumentering | low |
| `06-hplc-detektorer` | HPLC-detektorer | HPLC-instrumentering | low |
| `07-adsorpsjon-normalfase` | Adsorpsjonskromatografi og normalfase | Separasjonsprinsipper i væskekromatografi | high |
| `08-omvendt-fase-og-ionepar` | Omvendt fase og ionepar | Separasjonsprinsipper i væskekromatografi | high |
| `09-ionebytterkromatografi` | Ionebytterkromatografi | Separasjonsprinsipper i væskekromatografi | high |
| `10-size-exclusion` | Eksklusjonskromatografi (SEC) | Separasjonsprinsipper i væskekromatografi | high |
| `11-gc-baeregass-og-injeksjon` | GC: bæregass og injeksjon | Gasskromatografi | high |
| `12-gc-kolonner-og-stasjonaerfaser` | GC: kolonner, stasjonærfaser og temperaturprogram | Gasskromatografi | high |
| `13-gc-detektorer` | GC-detektorer | Gasskromatografi | high |
| `14-ms-ionisering` | MS: ioniseringsteknikker | Massespektrometri | low |
| `15-ms-analysatorer-og-detektorer` | MS: analysatorer og detektorer | Massespektrometri | low |
| `16-ms-proteiner` | Proteinmassespektrometri | Massespektrometri | low |
| `17-kvalitativ-og-kvantifiseringsmetoder` | Kvalitativ analyse og kalibreringsmetoder | Kvalitativ og kvantitativ analyse, validering | medium |
| `18-metodevalidering-lod-loq` | Metodevalidering, LOD og LOQ | Kvalitativ og kvantitativ analyse, validering | medium |
| `19-elektroforese-teori-og-geler` | Elektroforese: teori og geler | Gelelektroforese og immunologiske metoder | medium |
| `20-sds-page` | SDS-PAGE | Gelelektroforese og immunologiske metoder | medium |
| `21-ief-og-2d` | Isoelektrisk fokusering og 2D-elektroforese | Gelelektroforese og immunologiske metoder | medium |
| `22-geldeteksjon-og-western-blot` | Geldeteksjon og Western blotting | Gelelektroforese og immunologiske metoder | medium |
| `23-immunelektroforese` | Immunologiske metoder og immunelektroforese | Gelelektroforese og immunologiske metoder | medium |
| `24-ce-mobilitet-og-eof` | Kapillærelektroforese: prinsipp, elektroforetisk mobilitet og EOF | Kapillærelektroforese og elektrokromatografi | medium |
| `25-ce-injeksjon-og-deteksjon` | CE: prøveapplisering (injeksjon) og deteksjon | Kapillærelektroforese og elektrokromatografi | medium |
| `26-ce-metoder-og-cec` | CE-varianter (CZE, CGE, cIEF, cITP, MEKC, gelfri sikting) og elektrokromatografi (CEC) | Kapillærelektroforese og elektrokromatografi | medium |
| `27-biosensorer-prinsipp-og-typer` | Biosensorer: prinsipp, bioreseptorer, transdusere og klassiske typer | Biosensorer | medium |
| `28-spr-fet-aunp` | Moderne biosensorer: SPR, FET og gullnanopartikler (AuNP) | Biosensorer | medium |

## Run

```bash
npm install
npm run dev      # → http://localhost:5173
```

Progress (checkboxes, grades) is saved in your browser only. Use **Export → Progress backup** to move it between devices. Course PDFs go in `sources/` (gitignored).
