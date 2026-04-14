export const immunologyData4 = [
  {
    id: 'imm-rf',
    title: 'Rheumatoid Factor (RF) Latex Test',
    isImportant: true,
    definition: 'Rapid slide agglutination screening for the detection of Rheumatoid Factor (RF), an autoantibody directed against the Fc fragment of IgG.',
    principle: 'The reagent consists of latex particles coated with purified human IgG. When mixed with patient serum containing FR, the particles agglutinate. It detects predominantly IgM-class rheumatoid factors.',
    mechanism: 'Passive Agglutination (Antigen is bound to the particle to find the antibody).',
    types: ['Qualitative', 'Semi-quantitative Titer'],
    specimen: 'Serum (Fresh).',
    reagents: [{ component: 'RF Latex Reagent', function: 'IgG-sensitized latex particles.' }],
    equipment: ['Tile/Slide', 'Applicator sticks'],
    procedure: [
      'Bring all reagents to room temperature.',
      'Place 1 drop (40 µl) of serum on the test slide.',
      'Add 1 drop of well-mixed RF reagent.',
      'Mix and spread across the entire circle.',
      'Rock the slide gently for 2 minutes.',
      'Observe for macroscopic agglutination.'
    ],
    observation: 'Distinct clumping of latex particles.',
    result: 'Agglutination: Positive (>8 IU/ml). No agglutination: Negative (<8 IU/ml).',
    interpretation: 'A positive result suggests Rheumatoid Arthritis but is not diagnostic alone (can be seen in SLE, Sjogren\'s, and Chronic Infections).',
    referenceRange: '< 8 IU/ml (Sensitivity of the latex reagent).',
    clinicalSignificance: 'Supportive evidence for the diagnosis of Rheumatoid Arthritis (RA). Higher titers often correlate with more severe disease and extra-articular manifestations.',
    sourcesOfError: ['Serum not properly stored (RF is heat-labile).', 'Reading after 2 minutes.'],
    precautions: ['Do not use plasma (fibrinogen causes false positives).', 'Always confirm positive results with quantitative assays.'],
    normalVsAbnormal: 'Positive results in ~75-80% of adult RA patients.',
    applications: 'Rheumatology screening panels.',
    limitations: 'Negative result does not rule out RA (Seronegative RA).',
    examPoints: 'RF is an antibody against the Fc part of IgG. Test detects IgM-type RF.',
    viva: [
      { q: 'What is Rheumatoid Factor?', a: 'An autoantibody, usually IgM, directed against the Fc portion of the patient\'s own IgG.' },
      { q: 'Is the RF test specific for Rheumatoid Arthritis?', a: 'No, it can be positive in other autoimmune diseases (SLE) and chronic infections (TB, Hepatitis).' }
    ],
    mcq: [
      { q: 'Rheumatoid Factor is primarily directed against?', options: ['Antigen', 'Fc portion of IgG', 'Fab portion of IgM', 'Cells'], answer: 1 },
      { q: 'The RF latex test primarily detects which class of RF?', options: ['IgG', 'IgM', 'IgA', 'IgE'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-aso',
    title: 'Antistreptolysin O (ASO) Titer',
    isImportant: true,
    definition: 'Laboratory test used to measure antibodies against Streptolysin O, a toxin produced by Group A Streptococci.',
    principle: 'ASO antibodies in patient serum neutralize the hemolytic activity of the bacterial toxin Streptolysin O. In the latex method, particles coated with Streptolysin O agglutinate when mixed with serum containing specific antibodies.',
    mechanism: 'Latex Agglutination (Screen) and Neutralization Assay (Quantitative).',
    types: ['Slide Method (Qualitative)', 'Tube Method (Quantitative Titer)'],
    specimen: 'Serum.',
    reagents: [{ component: 'ASO Latex Reagent', function: 'Streptolysin O-coated latex particles.' }],
    equipment: ['Tile', 'Test tubes', 'Incubator'],
    procedure: [
      'Slide Screen: Mix 1 drop serum + 1 drop Latex reagent. Rock for 2 mins.',
      'Tube Titer: Prepare serial dilutions of serum.',
      'Add a constant amount of Streptolysin O antigen to each tube.',
      'Add 5% RBC suspension (as indicator).',
      'The highest dilution showing NO hemolysis is the ASO titer.'
    ],
    observation: 'Latex clumping (Slide) or inhibition of red cell lysis (Tube).',
    result: 'Report in Todd Units or IU/ml.',
    interpretation: 'Titers > 200 IU/ml suggest a recent or ongoing Group A Streptococcal infection.',
    referenceRange: '< 200 IU/ml (Adults).',
    clinicalSignificance: 'Crucial for diagnosing post-streptococcal complications: Rheumatic Fever and Glomerulonephritis.',
    sourcesOfError: ['Contamination with Bacillus cereus (produces similar toxins).', 'Hemolyzed samples.'],
    precautions: ['Wait at least 2 weeks after initial infection for peak titer.'],
    normalVsAbnormal: 'A "Rising Titer" is the most significant clinical evidence.',
    applications: 'Pediatric rheumatology and nephrology workups.',
    limitations: 'Skin infections (impetigo) may not cause a high ASO rise because the skin lipids neutralize the toxin.',
    examPoints: 'Detects recent Strep infection. Todd Units = Quantitative. Positive > 200.',
    viva: [
      { q: 'What is Streptolysin O?', a: 'A protein toxin produced by Group A Streptococcus that causes lysis of red blood cells.' },
      { q: 'What is the diagnostic significance of a high ASO titer?', a: 'It suggests a recent Group A Streptococcus infection, which could lead to Acute Rheumatic Fever.' }
    ],
    mcq: [
      { q: 'ASO titer is considered clinically significant above?', options: ['50 IU/ml', '100 IU/ml', '200 IU/ml', '500 IU/ml'], answer: 2 },
      { q: 'Which disease is commonly followed up with the ASO test?', options: ['Malaria', 'Rheumatic Fever', 'AIDS', 'Syphilis'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-pt-rapid',
    title: 'Rapid Pregnancy Test (hCG)',
    isImportant: true,
    definition: 'A point-of-care immunochromatographic assay for the detection of human chorionic gonadotropin (hCG) in urine or serum.',
    principle: 'Uses "Lateral Flow" technology. Urine migrates along a nitrocellulose membrane. It meets gold-conjugated Anti-hCG antibodies. This complex is captured by a second fixed antibody at the "Test" (T) line, forming a colored band. Always contains a "Control" (C) line with Anti-IgG.',
    mechanism: 'Immunochromatography (Capture-Conjugate Sandwiched).',
    types: ['Lateral Flow Immunoassay'],
    specimen: 'Early Morning Urine (highest hCG concentration) or Serum.',
    reagents: [{ component: 'Colloidal Gold-Conjugated Antibodies', function: 'Visualize the reaction line.' }],
    equipment: ['Test Cassette / Strip'],
    procedure: [
      'Collect first-morning urine sample.',
      'Place 2-3 drops of urine into the sample well of the cassette.',
      'Wait for exactly 3-5 minutes.',
      'Read the results.'
    ],
    observation: 'Colored line at C = Valid; Colored line at T = Positive for hCG.',
    result: 'Two lines (C & T): Positive. One line (C only): Negative. No lines or T-only: Invalid.',
    interpretation: 'Detects pregnancy as early as 7-10 days after conception.',
    referenceRange: 'Negative (Normally < 5 IU/L).',
    clinicalSignificance: 'Confirmation of pregnancy; also a tumor marker for certain germ cell tumors and gestational trophoblastic disease.',
    sourcesOfError: ['Test done too early (before hCG rises).', 'Diluted urine (low specific gravity).', 'Hook Effect (extremely high hCG levels giving false negatives).'],
    precautions: ['Always check the Control line to ensure test validity.', 'Do not read after 10 minutes (evaporation lines).'],
    normalVsAbnormal: 'Abnormally high hCG without pregnancy suggests Hydatidiform Mole.',
    applications: 'Routine clinical screening and self-testing.',
    limitations: 'Cannot determine if pregnancy is ectopic or viable (requires ultrasound).',
    examPoints: 'Detects hCG (human chorionic gonadotropin). Uses lateral flow technology.',
    viva: [
      { q: 'Which hormone is detected in the pregnancy test?', a: 'hCG (Human Chorionic Gonadotropin).' },
      { q: 'Why is first-morning urine preferred?', a: 'Because it is the most concentrated and contains the highest levels of hCG.' }
    ],
    mcq: [
      { q: 'What is the "indicator" usually used in rapid pregnancy tests?', options: ['Fluorescence', 'Colloidal Gold', 'Isotope', 'Iron'], answer: 1 },
      { q: 'HCG is produced by?', options: ['Pituitary', 'Thyroid', 'Trophoblastic cells of placenta', 'Ovary'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pregnancy_test.jpg/640px-Pregnancy_test.jpg'
    }
  },
  {
    id: 'imm-malaria-rdt',
    title: 'Malaria Rapid Diagnostic Test (RDT)',
    isImportant: true,
    definition: 'Immunochromatographic assay for the qualitative detection of Plasmodium-specific antigens in whole blood.',
    principle: 'Detects specific antigens released by parasites: HRP-2 (specific for P. falciparum) and pLDH or Aldolase (common to all species). Uses lateral flow with dye-labeled antibodies.',
    mechanism: 'Capture of labeled immune complexes on a nitrocellulose membrane.',
    types: ['Bivalent (Pf/Pv)', 'Monovalent (Pf only)'],
    specimen: 'Whole blood (finger prick).',
    reagents: [{ component: 'Lysis Buffer', function: 'Releases malaria antigens from RBCs.' }],
    equipment: ['Test Kit', 'Buffer solution'],
    procedure: [
      'Take 5-10 µl of blood using a pipette/loop.',
      'Place blood in the sample well.',
      'Add 2-3 drops of lysis buffer to the buffer well.',
      'Wait for 15-20 minutes.',
      'Observe for lines at Pf, Pan, and Control marks.'
    ],
    observation: 'Colored band at Pf = P. falciparum positive. Pan line = Non-falciparum (Pv/Pm/Po) positive.',
    result: 'Interpret based on specific band patterns.',
    interpretation: 'Rapid differentiation between Falciparum (potential emergency) and Vivax malaria.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Essential triage tool in fever cases, especially in areas with limited microscopy infrastructure.',
    sourcesOfError: ['Low parasitemia below detection threshold.', 'HRP-2 deletion (parasites not producing the antigen).'],
    precautions: ['Read at the strictly advised time (usually 20 mins); do not read after 30 mins.'],
    normalVsAbnormal: 'Provides immediate bedside data for starting antimalarials.',
    applications: 'Field surveys and emergency department triage.',
    limitations: 'Does not provide quantification (parasite count) or parasite stages.',
    examPoints: 'HRP-2 = Falciparum. pLDH = Pan (all species).',
    viva: [
      { q: 'What antigen is specific to Plasmodium falciparum in RDT?', a: 'HRP-2 (Histidine Rich Protein 2).' },
      { q: 'What is the role of the buffer in the Malaria RDT?', a: 'It lyses the red blood cells to release parasite antigens and assists their flow along the membrane.' }
    ],
    mcq: [
      { q: 'HRP-2 antigen is specifically produced by?', options: ['P. vivax', 'P. falciparum', 'P. malariae', 'P. ovale'], answer: 1 },
      { q: 'RDT for malaria uses which methodology?', options: ['ELISA', 'Agglutination', 'Immunochromatography', 'Electrophoresis'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-dengue-rapid',
    title: 'Dengue Rapid Test (NS1/IgG/IgM)',
    isImportant: true,
    definition: 'Differential rapid assay used for the diagnosis of acute and previous Dengue infection.',
    principle: 'Comprises two components: 1. NS1 antigen detection (for early acute phase). 2. IgG/IgM antibody detection (for recovery and past infection). Uses lateral flow immunochromatography.',
    mechanism: 'Antigen capture (NS1) and Antibody capture (IgG/IgM).',
    types: ['Dengue Duo (Ag + Ab)'],
    specimen: 'Serum, Plasma, or Whole Blood.',
    reagents: [{ component: 'Gold-conjugated antibodies/antigens', function: 'Detection signaling.' }],
    equipment: ['Test Cassette'],
    procedure: [
      'Dispense sample into sample wells (Antigen and Antibody wells).',
      'Add indicated amount of buffer.',
      'Wait for 15-20 minutes.',
      'Read result lines.'
    ],
    observation: 'Colored lines appear against labels C, NS1, IgM, and IgG.',
    result: 'NS1+ = Acute infection (Day 1-5). IgM+ = Recent infection. IgG+ = Past infection.',
    interpretation: 'Pattern NS1+ and IgM+ indicates primary acute infection. IgM+ and IgG+ suggests secondary infection.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Crucial for early detection and management of Dengue Fever to prevent complications like DHF (Dengue Hemorrhagic Fever).',
    sourcesOfError: ['Cross-reactivity with Zika or Yellow Fever viruses.'],
    precautions: ['Monitor platelet count closely in all Dengue positive cases.'],
    normalVsAbnormal: 'High IgG titers in secondary infection increase risk of severe disease.',
    applications: 'Epidemic monitoring and clinical diagnosis.',
    limitations: 'NS1 may become negative once antibodies appear.',
    examPoints: 'Day 1-5: NS1. Day 5+: IgM. IgG alone = Past infection.',
    viva: [
      { q: 'What is the clinical significance of the NS1 antigen?', a: 'It is a marker for very early dengue infection, detectable even before antibodies appear.' },
      { q: 'What does the presence of both IgM and IgG antibodies suggest?', a: 'A secondary dengue infection or the transition phase of primary infection.' }
    ],
    mcq: [
      { q: 'Dengue NS1 antigen is useful from which day of fever?', options: ['Day 1-5', 'Day 10-15', 'After 1 month', 'Never'], answer: 0 },
      { q: 'Secondary dengue infection is characterized by high levels of?', options: ['IgM', 'IgG', 'IgA', 'IgE'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
