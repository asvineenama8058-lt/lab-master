export const serologyData5 = [
  {
    id: 'ser-dsdna',
    title: 'Anti-dsDNA Antibody Test',
    isImportant: true,
    definition: 'Specific autoimmune assay used for the diagnosis and monitoring of Systemic Lupus Erythematosus (SLE).',
    principle: 'Detects high-affinity antibodies directed against double-stranded DNA. In the ELISA method, purified dsDNA is coated on micro-wells. Patient serum is added, and bound anti-dsDNA is detected using an enzyme-linked secondary antibody.',
    mechanism: 'Solid-phase Enzyme Immunoassay (ELISA).',
    types: ['ELISA', 'Farr Assay (Radioimmunoassay)', 'Crithidia luciliae IIF'],
    specimen: 'Serum.',
    reagents: [{ component: 'Native dsDNA coated wells', function: 'Capture antigen.' }],
    equipment: ['ELISA Reader', 'Plate washer'],
    procedure: [
      'Dilute patient serum and add to antigen-coated wells.',
      'Incubate for 30 minutes to allow binding.',
      'Wash thoroughly with buffer.',
      'Add enzyme-conjugated secondary antibody (Anti-human IgG).',
      'Wash again and add chromogenic substrate.',
      'Read absorbance (OD) after stopping the reaction.'
    ],
    observation: 'Colored product formation proportional to antibody concentration.',
    result: 'Report in IU/ml.',
    interpretation: 'Elevated levels (>30 IU/ml) are highly specific for Systemic Lupus Erythematosus (SLE).',
    referenceRange: '< 25 IU/ml (Negative).',
    clinicalSignificance: 'Diagnostic criterion for SLE. It is also a marker for disease activity, particularly Lupus Nephritis (kidney involvement).',
    sourcesOfError: ['Contamination with single-stranded DNA (ssDNA) reducing specificity.', 'High background absorbance.'],
    precautions: ['Monitor titers over time to assess clinical flare-ups or response to therapy.'],
    normalVsAbnormal: 'A rising titer often precedes a clinical flare of SLE.',
    applications: 'Rheumatology monitoring.',
    limitations: 'Negative result does not entirely exclude SLE.',
    examPoints: 'Highly specific for SLE. Marker for Lupus Nephritis.',
    viva: [
      { q: 'Which disease is Anti-dsDNA most specific for?', a: 'Systemic Lupus Erythematosus (SLE).' },
      { q: 'What is the "Farr Assay" for dsDNA?', a: 'An ultra-specific radioimmunoassay using ammonium sulfate to precipitate Ag-Ab complexes; it is the historical gold standard.' }
    ],
    mcq: [
      { q: 'Anti-dsDNA antibodies are highly specific for which disease?', options: ['Rheumatoid Arthritis', 'SLE', 'Diabetes', 'Syphilis'], answer: 1 },
      { q: 'High titers of Anti-dsDNA are associated with which complication in SLE?', options: ['Skin rash', 'Lupus Nephritis', 'Hair loss', 'Joint pain'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microplate_reader.jpg/960px-Microplate_reader.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ELISA.svg/640px-ELISA.svg.png'
    }
  },
  {
    id: 'ser-torch',
    title: 'TORCH Panel Overview',
    isImportant: true,
    definition: 'Group of serological tests used to screen pregnant women and newborns for infections that can cause congenital birth defects.',
    principle: 'Acronym for: Toxoplasma gondii, Others (Syphilis, Varicella), Rubella, Cytomegalovirus (CMV), and Herpes Simplex Virus (HSV). The panel detects IgM (current infection) and IgG (past exposure or immunity).',
    mechanism: 'Multiplex ELISA or CLIA for respective pathogens.',
    types: ['Prenatal Screening'],
    specimen: 'Maternal Serum or Cord Blood.',
    reagents: [{ component: 'Pathogen-specific recombinant antigens', function: 'Specific capture ligands.' }],
    equipment: ['Automated Immunoassay Analyzer (CLIA)'],
    procedure: [
      'Perform quantitative assays for IgM and IgG for each pathogen in the panel.',
      'Interpret results based on the combination of M/G reactivity.'
    ],
    observation: 'Concentration values for each antibody type.',
    result: 'Profile of immunity and acute risk across all pathogens.',
    interpretation: 'IgM Positive + IgG Negative = Recent Primary infection (High risk to fetus). IgG Positive + IgM Negative = Immune (Low risk).',
    referenceRange: 'Negative for IgM.',
    clinicalSignificance: 'Essential for managing pregnancy risk. Primary infection during pregnancy can lead to miscarriage, stillbirth, or severe malformations in the infant.',
    sourcesOfError: ['Cross-reactivity between different Herpes viruses.', 'Interference by Rheumatoid Factor causing false IgM positives.'],
    precautions: ['If maternal IgM is positive, confirm with "Avidity Testing" to determine the timing of the infection.'],
    normalVsAbnormal: 'Abnormal: Primary infection during the first trimester.',
    applications: 'Antenatal care.',
    limitations: 'Does not prove fetal infection; only maternal exposure.',
    examPoints: 'T: Toxoplasma. O: Others. R: Rubella. C: CMV. H: Herpes.',
    viva: [
      { q: 'What does the acronym TORCH stand for?', a: 'Toxoplasma, Others (e.g. Syphilis), Rubella, CMV, and Herpes.' },
      { q: 'Why is Rubella screening critical in pregnancy?', a: 'Because primary infection can cause Congenital Rubella Syndrome (CRS), leading to deafness, cataracts, and heart defects.' }
    ],
    mcq: [
      { q: 'In TORCH, "R" stands for?', options: ['Rubeola', 'Rubella', 'Rabies', 'Rotavirus'], answer: 1 },
      { q: 'Which antibody signifies a high acute risk to the fetus?', options: ['IgG', 'IgM', 'IgA', 'IgE'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-covid-ag',
    title: 'COVID-19 Rapid Antigen Test',
    isImportant: true,
    definition: 'Rapid point-of-care test for the qualitative detection of SARS-CoV-2 viral nucleocapsid antigens.',
    principle: 'Lateral flow assay. Respiratory sample (nasal/throat) contains viral particles. Lysis buffer releases antigens. Gold-labeled antibodies bind to the nucleocapsid (N) protein. This complex is captured at the Test (T) line.',
    mechanism: 'Sandwich Lateral Flow Immunoassay.',
    types: ['Point of Care (POC)'],
    specimen: 'Nasopharyngeal or Nasal Swab.',
    reagents: [{ component: 'Lysis Buffer', function: 'Dissolves viral envelope and releases antigens.' }],
    equipment: ['Test Kit', 'Sterile Swab'],
    procedure: [
      'Insert swab into the nasal cavity, rotate and collect sample.',
      'Place swab into the buffer tube, rotate for 15 seconds.',
      'Squeeze the tube to extract as much liquid as possible.',
      'Apply 2-3 drops of extract to the test cassette sample well.',
      'Read result at 15-20 minutes.'
    ],
    observation: 'Colored line at C = Valid; Colored line at T = Positive.',
    result: 'Positive or Negative for COVID-19 antigen.',
    interpretation: 'High specificity but lower sensitivity than RT-PCR. Useful for identifying highly infectious individuals during the peak viral load (Day 0-7).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Rapid triage tool during pandemic outbreaks. Allows immediate isolation of positive cases.',
    sourcesOfError: ['Poor swab technique (inadequate viral load).', 'Test performed too early or too late in the disease course.'],
    precautions: ['Perform under strict biosafety conditions (PPE).', 'Dispose of used kits as infectious waste.'],
    normalVsAbnormal: 'A positive result confirms infection; a negative result does not rule it out.',
    applications: 'Travel screening, Emergency triage.',
    limitations: 'False negatives occur when viral load is low.',
    examPoints: 'Detects Nucleocapsid (N) protein. Fast (15-20 mins). High Specificity.',
    viva: [
      { q: 'What part of the virus does the COVID rapid antigen test detect?', a: 'The Nucleocapsid (N) protein.' },
      { q: 'What is the "Gold Standard" test for COVID-19 diagnosis?', a: 'RT-PCR (Real-Time Reverse Transcription Polymerase Chain Reaction).' }
    ],
    mcq: [
      { q: 'COVID-19 rapid test detects viral?', options: ['RNA', 'Antigen', 'Antibody', 'Enzyme'], answer: 1 },
      { q: 'The most common sample used for COVID rapid testing is?', options: ['Blood', 'Urine', 'Nasopharyngeal swab', 'Stool'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-covid-ab',
    title: 'COVID-19 Antibody Test (IgG/IgM)',
    isImportant: false,
    definition: 'Serological test for the detection of antibodies produced by the immune system in response to SARS-CoV-2 infection or vaccination.',
    principle: 'Lateral flow or ELISA assay using SARS-CoV-2 Spike (S) or Nucleocapsid (N) proteins to capture human IgG/IgM antibodies. These are labeled with fluorescent or gold-conjugated ligands.',
    mechanism: 'Antibody capture immunoassay.',
    types: ['Total Ab', 'Differential IgG/IgM'],
    specimen: 'Serum or Whole Blood.',
    reagents: [{ component: 'Recombinant Spike protein antigen', function: 'Specific capture ligand.' }],
    equipment: ['Test Kit or Automated Immunoassay analyzer'],
    procedure: [
      'Dispense sample into well.',
      'Add buffer.',
      'Interpret results after 15 minutes.'
    ],
    observation: 'Lines at C, M, and G markers.',
    result: 'IgM+: Recent/Active infection. IgG+: Past infection or post-vaccination immunity.',
    interpretation: 'Helps determine exposure history and prevalence in a population.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Useful for epidemiological surveillance and for identifying potential convalescent plasma donors.',
    sourcesOfError: ['Cross-reactivity with common cold coronaviruses.', 'Testing before seroconversion (usually <14 days).'],
    precautions: ['Should NOT be used for the diagnosis of acute infection.'],
    normalVsAbnormal: 'IgG indicates long-term humoral immunity.',
    applications: 'Sero-surveys and immunity check.',
    limitations: 'Does not prove "Neutralizing" (protective) immunity unless neutralizing assays are done.',
    examPoints: 'Detects IgG/IgM. Useful for survey. Not for acute diagnosis.',
    viva: [
      { q: 'When do antibodies against COVID-19 usually develop?', a: 'Typically 1 to 3 weeks after infection.' },
      { q: 'Can this test distinguish between a vaccine response and a natural infection?', a: 'If the test detects only Anti-Spike antibodies, it could be from either. If it detects Anti-Nucleocapsid, it usually signifies a natural infection (as most vaccines only contain the Spike protein).' }
    ],
    mcq: [
      { q: 'COVID-19 antibody test is most useful for?', options: ['Diagnosing emergency', 'Checking past exposure', 'Treating the patient', 'None'], answer: 1 },
      { q: 'Which antibody appears first after COVID infection?', options: ['IgG', 'IgM', 'IgA', 'IgE'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-amoebic',
    title: 'Amoebic Serology (IHA/ELISA)',
    isImportant: false,
    definition: 'Diagnostic test used for the detection of antibodies against Entamoeba histolytica.',
    principle: 'Detects circulating antibodies in serum formed against the invasive form of the parasite. Indirect Hemagglutination (IHA) uses antigen-coated RBCs. ELISA uses antigen-coated wells. Agglutination or color change indicates a positive result.',
    mechanism: 'Antigen-antibody lattice (IHA) or enzymatic signaling (ELISA).',
    types: ['Qualitative and Quantitative'],
    specimen: 'Serum.',
    reagents: [{ component: 'Entamoeba histolytica HK9 strain antigen', function: 'Specific capture antigen.' }],
    equipment: ['Micro-plate', 'ELISA Reader'],
    procedure: [
      'Dilute serum and incubate with sensitized RBCs or Ag-coated wells.',
      'Follow standard IHA settling or ELISA wash/detect steps.',
      'Determine the titer.'
    ],
    observation: 'Specific patterns in micro-wells.',
    result: 'Titer determination.',
    interpretation: 'High titers (>1:128 in IHA) are highly suggestive of Invasive Amoebiasis (like Liver Abscess).',
    referenceRange: '< 1:128 (IHA).',
    clinicalSignificance: 'Very useful for diagnosing extra-intestinal amoebiasis (Liver Abscess), where stool examination is usually negative.',
    sourcesOfError: ['Persistent positive antibodies for years after a resolved infection.'],
    precautions: ['A single positive result should be interpreted in light of clinical symptoms (fever, liver pain).'],
    normalVsAbnormal: 'Abnormal: Significant titer in a patient with a liver mass on ultrasound.',
    applications: 'Tropical medicine, Gastroenterology.',
    limitations: 'Positive in endemic areas even in healthy individuals due to past exposure.',
    examPoints: 'Diagnostic for Liver Abscess. Carrier: RBC (for IHA). Stays positive for years.',
    viva: [
      { q: 'When is amoebic serology more useful than stool examination?', a: 'In cases of extra-intestinal amoebiasis, like an Amoebic Liver Abscess, where the parasite is not present in the stool.' },
      { q: 'How long do amoebic antibodies persist in the blood?', a: 'They can persist for several months to years after successful treatment.' }
    ],
    mcq: [
      { q: 'Amoebic Liver Abscess is best diagnosed by?', options: ['Stool exam', 'Amoebic Serology', 'Urine exam', 'Skin test'], answer: 1 },
      { q: 'Method used for quantitative amoebic serology historically?', options: ['Widal', 'IHA', 'VDRL', 'RPR'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
