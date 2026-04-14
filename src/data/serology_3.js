export const serologyData3 = [
  {
    id: 'ser-typhidot',
    title: 'Typhidot (IgM/IgG Rapid Test)',
    isImportant: true,
    definition: 'Rapid immunochromatographic assay used for the qualitative detection and differentiation of IgM and IgG antibodies to Salmonella typhi.',
    principle: 'Uses specific 50kDa Outer Membrane Protein (OMP) antigens of S. typhi. In the test, IgM antibodies indicate recent/acute infection, while IgG indicates past infection or a secondary booster response. Uses lateral flow technology.',
    mechanism: 'Sandwich-based immunochromatography capture.',
    types: ['Rapid Diagnostic Test (RDT)'],
    specimen: 'Serum or Plasma.',
    reagents: [{ component: 'Dye-conjugated S. typhi OMP antigen', function: 'Detection ligand.' }],
    equipment: ['Test Kit', 'Buffer'],
    procedure: [
      'Dispense 5 µl of serum into the sample well.',
      'Add 2 drops of assay buffer.',
      'Wait for 15 minutes.',
      'Observe for colored lines at M, G, and C positions.'
    ],
    observation: 'C line must be present for validity. T-lines at M and G indicate antibody types.',
    result: 'M+ only: Acute Typhoid. G+ only: Past infection. Both: Acute secondary or late primary.',
    interpretation: 'Faster than Widal and more specific (less cross-reactivity with other fevers).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Early detection of typhoid fever (IgM appears as early as Day 2-3 of fever).',
    sourcesOfError: ['Reading too late (false positives).', 'Low titer in very early stage.'],
    precautions: ['Always correlate with clinical symptoms as antibody persistence varies.'],
    normalVsAbnormal: 'A "Positive" result typically warrants initiation of antibiotic therapy.',
    applications: 'Rapid screening in outpatient departments.',
    limitations: 'Cannot determine antibiotic sensitivity; doesn\'t replace blood culture (Gold Standard).',
    examPoints: 'Antigen used: 50kDa OMP. M = Acute. G = Past.',
    viva: [
      { q: 'What is the advantage of Typhidot over Widal?', a: 'Typhidot is faster, can differentiate between acute and past infection, and is more specific as it uses purified OMP antigens.' },
      { q: 'What does a positive IgG-only result mean?', a: 'It usually indicates a previous typhoid infection or a secondary immune response in an endemic area.' }
    ],
    mcq: [
      { q: 'Typhidot test detects antibodies against which part of Salmonella?', options: ['Flagella', 'Outer Membrane Protein (OMP)', 'DNA', 'Capsule'], answer: 1 },
      { q: 'Positive IgM in Typhidot indicates?', options: ['Acute infection', 'Past infection', 'Carrier state', 'No infection'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-leptospira',
    title: 'Leptospira Serology (Rapid Test)',
    isImportant: true,
    definition: 'Qualitative screening for IgM and IgG antibodies to Leptospira interrogans in human serum.',
    principle: 'Lateral flow assay using recombinant Leptospira antigens. IgM antibodies appear in the first week of infection (leptospiremic phase). Detection helps in the early diagnosis of Weil\'s disease.',
    mechanism: 'Immunochromatographic capture of specific antibodies.',
    types: ['Lepto RDT'],
    specimen: 'Serum.',
    reagents: [{ component: 'Recombinant Leptospira antigen-gold conjugate', function: 'Capture signaling.' }],
    equipment: ['Test Cassette'],
    procedure: [
      'Pipette 10 µl of serum into the sample well.',
      'Add 2 drops of buffer.',
      'Wait for 15 minutes.',
      'Read in a well-lit area.'
    ],
    observation: 'C line (Control) and T line (Test) appearance.',
    result: 'Reactive (C+T) or Non-Reactive (C only).',
    interpretation: 'A reactive result in a fever patient during monsoon suggests Leptospirosis.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Diagnosis of Leptospirosis, characterized by high fever, jaundice, and renal failure. Early diagnosis is life-saving as it responds well to Penicillin/Doxycycline.',
    sourcesOfError: ['Prozone effect.', 'Wait time > 20 mins.'],
    precautions: ['Always confirm with MAT (Microscopic Agglutination Test) if possible.'],
    normalVsAbnormal: 'Provides rapid triage in endemic areas during flood seasons.',
    applications: 'Emergency room and tropical medicine clinics.',
    limitations: 'Cross-reactivity with Syphilis or other spirochetes can occur.',
    examPoints: 'Target: Leptospirosis (Weil\'s disease). IgM appears in first week.',
    viva: [
      { q: 'Name the severe form of Leptospirosis.', a: 'Weil\'s Disease (characterized by jaundice, hemorrhage, and renal failure).' },
      { q: 'What is the Gold Standard test for Leptospirosis?', a: 'Microscopic Agglutination Test (MAT).' }
    ],
    mcq: [
      { q: 'Leptospirosis is commonly transmitted through?', options: ['Air', 'Snake bite', 'Rat urine contaminated water', 'Mosquito'], answer: 2 },
      { q: 'IgM antibodies in Leptospirosis usually appear on which day?', options: ['Day 1', 'Day 4-7', 'After 1 month', 'Never'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-tpha',
    title: 'TPHA (Treponema Pallidum Hemagglutination)',
    isImportant: true,
    definition: 'Specific treponemal test used for the confirmation of syphilis by detecting antibodies to T. pallidum using sensitized red blood cells.',
    principle: 'Avian (usually Turkey) or Sheep red blood cells are coated with T. pallidum antigens. When mixed with patient serum containing specific anti-treponemal antibodies, the cells agglutinate to form a characteristic mat at the bottom of a micro-well.',
    mechanism: 'Indirect/Passive Hemagglutination.',
    types: ['Confirmatory Treponemal Test'],
    specimen: 'Serum.',
    reagents: [
      { component: 'Sensitized RBCs', function: 'Antigen-coated carrier cells.' },
      { component: 'Unsensitized RBCs', function: 'Negative control carrier.' }
    ],
    equipment: ['U-bottom micro-well plate'],
    procedure: [
      'Dilute patient serum in the micro-well plate.',
      'Add sensitized cells to the test well.',
      'Add unsensitized cells to the control well.',
      'Incubate for 45-60 minutes without disturbance.',
      'Read the settling pattern.'
    ],
    observation: 'Reactive: Smooth mat covering the well bottom. Non-reactive: Clear tight button.',
    result: 'Agglutination at > 1:80 is considered positive.',
    interpretation: 'Confirms syphilis in a patient with a reactive VDRL/RPR. Unlike VDRL, TPHA remains positive for life even after treatment.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'The standard confirmatory test to rule out biological false positives seen in VDRL screening.',
    sourcesOfError: ['Vibrations of the plate during settling.', 'Auto-agglutination of cells.'],
    precautions: ['Read exactly as described in the settling pattern chart.'],
    normalVsAbnormal: 'Provides high specificity (>99%) for Treponema pallidum.',
    applications: 'Confirmation of Syphilis.',
    limitations: 'Cannot distinguish between current and successfully treated past infection.',
    examPoints: 'Carrier: RBC. Specific for Syphilis. Stays positive for life.',
    viva: [
      { q: 'What is the purpose of TPHA?', a: 'To confirm the diagnosis of syphilis after a reactive VDRL test.' },
      { q: 'Does TPHA become negative after successful treatment?', a: 'No, it usually remains positive for life.' }
    ],
    mcq: [
      { q: 'TPHA is what type of test?', options: ['Non-treponemal', 'Treponemal specific', 'Flocculation', 'Precipitation'], answer: 1 },
      { q: 'The pattern indicating a positive TPHA in a micro-well is?', options: ['Tight button', 'Clear liquid', 'Diffuse mat', 'Black ring'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-brucella-stt',
    title: 'Brucella Standard Tube Test (STT)',
    isImportant: false,
    definition: 'Quantitative agglutination test for the diagnosis of human brucellosis (Malta fever).',
    principle: 'Standardized killed suspension of Brucella abortus (and sometimes B. melitensis) is mixed with serial dilutions of patient serum. Agglutination (clumping and settling) indicates the presence of specific antibodies.',
    mechanism: 'Direct bacterial agglutination.',
    types: ['Wright\'s Agglutination Test'],
    specimen: 'Serum.',
    reagents: [{ component: 'Killed B. abortus antigen (S-19 strain)', function: 'Stable bacterial suspension.' }],
    equipment: ['Water bath (37°C)', 'Agglutination tubes'],
    procedure: [
      'Prepare serial dilutions of serum (1:20 to 1:640) in phenol-saline.',
      'Add a constant volume of Brucella antigen to each tube.',
      'Incubate at 37°C for 24-48 hours.',
      'Observe for clearing of the supernatant and sediment at the bottom.'
    ],
    observation: 'Grainy sediment with complete or partial clearing of the liquid.',
    result: 'Highest dilution showing 50% agglutination is the titer.',
    interpretation: 'Titers > 1:80 to 1:160 are considered clinically significant in non-endemic areas.',
    referenceRange: 'Titer < 1:80.',
    clinicalSignificance: 'Diagnosis of Brucellosis (undulant fever), common in livestock handlers and consumers of unpasteurized milk.',
    sourcesOfError: ['Prozone effect (very common in Brucella).', 'Cross-reaction with Yersinia or S. typhi.'],
    precautions: ['Always include a "Saline Control" to rule out auto-agglutination of the antigen.'],
    normalVsAbnormal: 'Chronic brucellosis may show low titers but high blocking antibodies.',
    applications: 'Veterinary and human diagnosis.',
    limitations: 'Takes 48 hours for results; misses non-agglutinating antibodies.',
    examPoints: 'Detects Brucella. Prozone is common. Incubation: 48 hours.',
    viva: [
      { q: 'What is the "Prozone effect" in the Brucella STT?', a: 'False negative results in low dilutions because of an antibody excess. Testing higher dilutions solves this.' },
      { q: 'How is Brucellosis commonly transmitted?', a: 'Consumption of unpasteurized milk and dairy products or contact with infected livestock.' }
    ],
    mcq: [
      { q: 'Incubation period for the Brucella Standard Tube Test is?', options: ['1 hour', '4 hours', '24-48 hours', '1 week'], answer: 2 },
      { q: 'Prozone phenomenon is most prominently seen in which test?', options: ['Widal', 'Brucella STT', 'ASO', 'CRP'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-rose-bengal',
    title: 'Rose Bengal Plate Test (RBPT)',
    isImportant: false,
    definition: 'Rapid screening test for the detection of Brucella antibodies using a colored antigen at acid pH.',
    principle: 'Uses Brucella abortus antigen stained with Rose Bengal dye and buffered to pH 3.6. At this low pH, non-specific agglutinins are inhibited, making the test more specific for Brucella antibodies.',
    mechanism: 'Direct agglutination in acidic medium.',
    types: ['Rapid slide test'],
    specimen: 'Serum.',
    reagents: [{ component: 'Rose Bengal Antigen (pH 3.6)', function: 'Stained acidified Brucella suspension.' }],
    equipment: ['Enamel/Glass plate', 'Applicator sticks', 'Rotator'],
    procedure: [
      'Mix 30 µl of patient serum with 30 µl of Rose Bengal antigen on a plate.',
      'Rotate or rock gently for 4 minutes.',
      'Check for distinct pink agglutination.'
    ],
    observation: 'Pink clumps against a pinkish background.',
    result: 'Positive or Negative.',
    interpretation: 'Sensitive screening tool; all positives should be confirmed by STT.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Rapid triage of livestock and high-risk human patients.',
    sourcesOfError: ['Reading after 4 minutes (drying).'],
    precautions: ['Ensure the pH of the antigen is correctly maintained, as the acid pH is key to its specificity.'],
    normalVsAbnormal: 'Simple to perform in field conditions.',
    applications: 'Field screening for Brucellosis.',
    limitations: 'Qualitative only.',
    examPoints: 'Dye: Rose Bengal. pH: 3.6. Time: 4 mins.',
    viva: [
      { q: 'Why is the Rose Bengal test done at an acid pH (3.6)?', a: 'The acid pH inhibits non-specific antibodies and promotes the binding of specific Brucella antibodies.' },
      { q: 'What dye is used in the Brucella plate test?', a: 'Rose Bengal (giving it a pink color).' }
    ],
    mcq: [
      { q: 'The Rose Bengal Plate Test is performed at which pH?', options: ['2.0', '3.6', '7.0', '9.0'], answer: 1 },
      { q: 'Total time to perform a Rose Bengal test is?', options: ['1 min', '4 mins', '30 mins', '1 hour'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
