---
subject: IMAK2008
name: "Instrumentell analyse og biopolymerer"
language: nb
textbook: "Lundanes, Reubsaet, Greibrokk: Chromatography – Basic Principles, Sample Preparations and Related Methods (Wiley-VCH 2014), kap. 1–10 (chromatographgy_basics_part1/2.pdf)"
supplementary: ["hele dokbio261016.pdf (kap. 3 immunologi, kap. 5 biosensorer)", "Biosensorer kap 4.2 Biomaterials Nanoarchtectonics.pdf", "Ionebyttekromatografi GE Healthcare introduksjon og kapittel 1.pdf"]
citation_convention: "[fil, slide N] for forelesninger; [fil, p. N] med boksidetall. Bok del 1: PDF-side = bokside + 16; del 2: PDF-side = bokside − 84. dokbio: PDF-side = trykt side + 5. Biosensorer kap 4.2: PDF-side = bokside − 156"
exam_weighting_method: "Poeng per deloppgave i H2024 og H2025 (100 p hver) fordelt på temaene. high ≥ 25 p samlet, medium 10–24 p, low < 10 p"

topics:
  - id: krom-teori
    title: "Kromatografisk teori"
    weight: high
    weight_note: "H24 ≈ 30 p, H25 ≈ 9 p. Beregning av k, α, N, H, Rs og van Deemter kommer hvert år"
    summary: "Retensjon (t_R, t_M, k), selektivitet (α), effektivitet (N, H) og oppløsning (Rs, renseligningen), samt kilder til båndspredning (A-, B- og C-ledd, van Deemter/Golay) og optimal lineærhastighet."
    pages:
      - 01-retensjon-og-selektivitet
      - 02-effektivitet-og-opplosning
      - 03-bandspredning-van-deemter

  - id: hplc
    title: "HPLC-instrumentering"
    weight: low
    weight_note: "H24 ≈ 2 p, H25 ≈ 1 p. Mest begreper (DAD, pumper) i definisjonsoppgaver"
    summary: "Pumper og gradientsystemer, injektorer (loop), kolonnedimensjoner og partikler (porøse, kjerne-skall, monolitter, UHPLC), og detektorer (UV/DAD, fluorescens, RI, elektrokjemisk, MS) med følsomhet og lineært område."
    pages:
      - 04-hplc-system-pumper-injeksjon
      - 05-kolonner-og-partikler
      - 06-hplc-detektorer

  - id: lc-separasjon
    title: "Separasjonsprinsipper i væskekromatografi"
    weight: high
    weight_note: "H24 ≈ 16 p, H25 ≈ 28 p. NP/RP-valg, ionebytter (lab 1) og SEC (prosjekt) går igjen"
    summary: "Adsorpsjon og normalfase (eluotrop styrke), omvendt fase og ionepar (C18, organisk modifikator, pH), ionebytterkromatografi (sterk/svak, pI, salt- og pH-gradient) og size-exclusion (eksklusjon, totalpermeering, kalibrering log Mw mot V_e, Sephadex)."
    pages:
      - 07-adsorpsjon-normalfase
      - 08-omvendt-fase-og-ionepar
      - 09-ionebytterkromatografi
      - 10-size-exclusion

  - id: gc
    title: "Gasskromatografi"
    weight: high
    weight_note: "H24 ≈ 9 p, H25 ≈ 18 p (H25 oppg. 4: elueringsrekkefølge, split, temperaturprogram, FID)"
    summary: "Bæregass (He, H₂, N₂ og van Deemter-forskjeller), injeksjon (split/splitless, on-column, PTV), kolonner (pakket, WCOT, PLOT), stasjonærfaser og polaritet (Kovats-indeks, McReynolds), temperaturprogrammering, og detektorer (FID, TCD, ECD, NPD, MS) med selektivitet og lineært område."
    pages:
      - 11-gc-baeregass-og-injeksjon
      - 12-gc-kolonner-og-stasjonaerfaser
      - 13-gc-detektorer

  - id: ms
    title: "Massespektrometri"
    weight: low
    weight_note: "H24 ≈ 4 p, H25 ≈ 0 p. Mest definisjoner (ESI, MALDI) og proteinkontekst"
    summary: "Ionisering (EI, CI, ESI, APCI, APPI, ICP, MALDI), analysatorer (kvadrupol, ionefelle, TOF, FTMS/Orbitrap), detektorer, MS/MS, TIC/SIM, og protein-MS (ladningstilstander, bottom-up/top-down, MALDI-TOF peptidkartlegging)."
    pages:
      - 14-ms-ionisering
      - 15-ms-analysatorer-og-detektorer
      - 16-ms-proteiner

  - id: kvantifisering
    title: "Kvalitativ og kvantitativ analyse, validering"
    weight: medium
    weight_note: "H24 ≈ 3 p, H25 ≈ 14 p (oppg. 8: kalibreringskurve og intern standard)"
    summary: "Identifisering (t_R, spiking, MS), arealnormalisering, ekstern og intern standard (responsfaktor), standardaddisjon, og validering (linearitet, presisjon, nøyaktighet, LOD med S/N = 3, LOQ med S/N = 10, S/N = 2H/h)."
    pages:
      - 17-kvalitativ-og-kvantifiseringsmetoder
      - 18-metodevalidering-lod-loq

  - id: elektroforese
    title: "Gelelektroforese og immunologiske metoder"
    weight: medium
    weight_note: "H24 ≈ 17 p (2a, 2b, 2d), H25 ≈ 7 p (oppg. 9–10). Øvingen dekker SDS-PAGE og farging"
    summary: "Teori (F = qE, Stokes, mobilitet), polyakrylamid- og agarosegeler (%T/%C), diskontinuerlig buffer, SDS-PAGE (Rf mot log Mw), IEF (amfolytter, IPG), 2D og DIGE, totalproteinfarging (Coomassie, sølv, fluorescens), Western blotting, antistoffer og immunologisk gelelektroforese (motstrøm, immunelektroforese, RID, rakett, IFE)."
    pages:
      - 19-elektroforese-teori-og-geler
      - 20-sds-page
      - 21-ief-og-2d
      - 22-geldeteksjon-og-western-blot
      - 23-immunelektroforese

  - id: ce
    title: "Kapillærelektroforese og elektrokromatografi"
    weight: medium
    weight_note: "H24 ≈ 9 p (2c, 2e), H25 ≈ 15 p (oppg. 9, 11, 12, 13)"
    summary: "Elektroforetisk mobilitet, EOF (dobbeltlag, pH, faktorer, flat vs. parabolsk profil), elueringsrekkefølge, N og Rs i CE, injeksjon (hydrodynamisk vs. elektrokinetisk), deteksjon (UV, LIF, CE-MS), varianter (CZE, CGE, gelfri, cIEF, cITP, MEKC) og CEC."
    pages:
      - 24-ce-mobilitet-og-eof
      - 25-ce-injeksjon-og-deteksjon
      - 26-ce-metoder-og-cec

  - id: biosensorer
    title: "Biosensorer"
    weight: medium
    weight_note: "H24 ≈ 10 p (3a, 3b), H25 ≈ 8 p (oppg. 14–15)"
    summary: "Bioreseptor og transduser, immobilisering, transdusertyper, enzym-, celle-, vevs- og immunosensorer, ELISA/qPCR/mikromatrise, samt moderne umerkede sensorer: SPR (resonansvinkel, AuNP-forsterkning, hydrogellag, molekylær preging), FET (Debye-lengde) og AuNP-kolorimetri."
    pages:
      - 27-biosensorer-prinsipp-og-typer
      - 28-spr-fet-aunp

past_exams:
  - id: h2024
    file: "Eksamen_IMAK2008_24.pdf"
    solution: "LF eksamen H2024 IMAK2008.pdf"
    note: "Full LF inkl. skjermbilder av flervalgsfasit. Deloppgave 1(i)ii mangler LF"
    tasks_by_page:
      "01–03": ["1(a)–1(i)"]
      "07–10": ["1-serien NP/RP/IEX/SEC"]
      "11–13": ["1-serien GC"]
      "14": ["definisjoner ESI"]
      "06": ["definisjoner DAD"]
      "19": ["2(a)"]
      "20": ["2(b)"]
      "21": ["2(d)"]
      "24": ["2(c)", "2(e)"]
      "27": ["3(a) i–iii", "3(b)"]
      "28": ["3(a) iv"]
  - id: h2025
    file: "IMAK2008 eksamen H2025.pdf"
    solution: "Løsningsforslag IMAK2008 H25.pdf"
    note: "Oppg. 9, 10 og 13 automatisk rettet uten fasit; oppg. 4d (Carbowax) og 15 (SPR) uten LF. Svar på disse er utledet og merket"
    tasks_by_page:
      "01–03": ["oppg. 1–3 (definisjoner, beregninger)"]
      "11–13": ["oppg. 4"]
      "07–10": ["oppg. 5–7"]
      "17": ["oppg. 8 (kalibrering, y = 0.1152x − 0.0022)"]
      "20–21, 23–24, 26": ["oppg. 9 (kombiner utsagn og metode)"]
      "22": ["oppg. 10 (Western blotting)"]
      "24": ["oppg. 11 (CE vs. HPLC)"]
      "25": ["oppg. 12 (injeksjon)"]
      "26": ["oppg. 13 (CEC)"]
      "27": ["oppg. 14 (cellebaserte sensorer)"]
      "28": ["oppg. 15 (SPR)"]
  - id: oving-elektroforese
    file: "Øving elektroforese.pdf"
    solution: "Øving elektroforese med LF.pdf"
    note: "Eneste (frivillige) øving. Dekker side 19–22"

known_discrepancies:
  - "Bok p. 128: u avtar med økende temperatur – motsier lign. 6.1 (η avtar ⇒ u øker) [side 19]"
  - "LOQ = 3×LOD (bok p. 198) vs. S/N = 10 (bok p. 190) [side 18]"
  - "ECD lineært område 10² (forelesning) vs. 10⁴ (bok) [side 13]"
  - "Rs = 1 overlapp 2,3 % vs. 2 % [side 02]"
  - "Sephadex G-100 fraksjoneringsområde 4000–10 000 (manual) vs. 4000–150 000 (forelesning) [side 10]"
  - "McReynolds-probe 2-butanol vs. 1-butanol [side 12]"
  - "Forelesningens LOD-tabell vs. bokas tabell 3.5 [side 06/13]"
  - "EOF-pH: pH > 3 (forelesning og LF) vs. 'spesielt > pH 5' (bok) [side 24]"
  - "cLOD CE vs. LC: notat slide 21 vs. bok p. 141 (motsatt) [side 26]"
  - "Bok lign. 6.4 trykt som hastighet, men har enhet volum [side 25]"
  - "Slide 4 (CE del 2): 50 nL = 0,005 µL (skal være 0,05 µL) [side 25]"
  - "MEKC k-formel trykt med t₀/t_mc i nevneren [side 26]"
---

## Topic map

```mermaid
graph TD
  subgraph Kromatografisk teori
    P01[01 Retensjon og selektivitet] --> P02[02 Effektivitet og oppløsning]
    P02 --> P03[03 Båndspredning / van Deemter]
  end

  subgraph HPLC
    P04[04 System, pumper, injeksjon] --> P05[05 Kolonner og partikler]
    P04 --> P06[06 HPLC-detektorer]
  end

  subgraph LC-separasjon
    P07[07 Adsorpsjon / normalfase] --> P08[08 Omvendt fase og ionepar]
    P09[09 Ionebytterkromatografi]
    P10[10 Size-exclusion]
  end

  subgraph GC
    P11[11 Bæregass og injeksjon] --> P12[12 Kolonner og stasjonærfaser]
    P11 --> P13[13 GC-detektorer]
  end

  subgraph MS
    P14[14 Ionisering] --> P15[15 Analysatorer og detektorer]
    P15 --> P16[16 MS av proteiner]
  end

  subgraph Kvantifisering
    P17[17 Kvalitativ og kvantitativ analyse] --> P18[18 Validering, LOD/LOQ]
  end

  subgraph Elektroforese
    P19[19 Teori og geler] --> P20[20 SDS-PAGE]
    P20 --> P21[21 IEF og 2D]
    P20 --> P22[22 Farging og Western blot]
    P21 --> P22
    P22 --> P23[23 Immunologiske metoder]
  end

  subgraph CE
    P24[24 Mobilitet og EOF] --> P25[25 Injeksjon og deteksjon]
    P25 --> P26[26 CE-varianter og CEC]
  end

  subgraph Biosensorer
    P27[27 Prinsipp og typer] --> P28[28 SPR, FET, AuNP]
  end

  P03 --> P05
  P03 --> P11
  P01 --> P07
  P01 --> P09
  P01 --> P10
  P01 --> P12
  P02 --> P17
  P06 --> P17
  P13 --> P18
  P06 --> P25
  P14 --> P25
  P14 --> P16
  P21 --> P16
  P19 --> P24
  P02 --> P24
  P03 --> P24
  P21 --> P26
  P08 --> P26
  P23 --> P27
  P22 --> P27
  P10 -. prosjekt: Sephadex G-100 .-> P20
  P09 -. lab 1: IC .-> P17
  P17 -. lab 2: koffein ISTD .-> P18
```

**Anbefalt leserekkefølge for eksamen (etter vekt):** 01 → 02 → 03 → 07 → 08 → 09 → 10 → 11 → 12 → 13 → 17 → 18 → 19 → 20 → 21 → 22 → 24 → 25 → 26 → 27 → 28 → 23 → 04 → 05 → 06 → 14 → 15 → 16.

**Labkobling:** Lab 1 (ionekromatografi) → side 09 og 17. Lab 2 (koffein med intern standard, HPLC) → side 08, 17 og 18. Prosjektoppgave (proteinidentifisering: SEC med Sephadex G-100 → SDS-PAGE → MS) → side 10, 20, 16 og 22.
