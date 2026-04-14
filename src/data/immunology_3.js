export const immunologyData3 = [
  {
    id: 'imm-widal-slide',
    title: 'Widal Test (Slide Method)',
    isImportant: true,
    definition: 'Rapid screening agglutination test used for the presumptive diagnosis of enteric (typhoid) fever.',
    principle: 'Detects presence of antibodies (agglutinins) against Salmonella typhi and S. paratyphi antigens. In the slide method, antigens are mixed with patient serum on a tile. Macroscopic clumping occurs when specific antibodies against O (somatic) or H (flagellar) antigens are present.',
    mechanism: 'Direct agglutination forming visible lattice between antibodies and particulate bacterial antigens.',
    types: ['Slide Method'],
    specimen: 'Serum (Freshly prepared).',
    reagents: [
      { component: 'S. typhi O antigen', function: 'Detects Anti-TO antibodies.' },
      { component: 'S. typhi H antigen', function: 'Detects Anti-TH antibodies.' },
      { component: 'S. paratyphi AH antigen', function: 'Detects Anti-AH antibodies.' },
      { component: 'S. paratyphi BH antigen', function: 'Detects Anti-BH antibodies.' }
    ],
    equipment: ['Widal slide (Tile)', 'Applicator sticks', 'Stopwatch'],
    procedure: [
      'Clean the Widal tile thoroughly.',
      'Place 1 drop of patient serum into each of the 4 circles.',
      'Add one drop of O, H, AH, and BH antigen to the respective circles.',
      'Mix each drop using separate applicator sticks.',
      'Rock the slide gently for 1 minute.',
      'Observe for macroscopic agglutination.'
    ],
    observation: 'Distinct granular clumping against a clear background.',
    result: 'Agglutination seen: Positive. No agglutination: Negative.',
    interpretation: 'Rapid screen only; positive slide tests MUST be followed by the quantitative Tube Method for titer estimation.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Diagnostic aid in typhoid and paratyphoid fever. O antibodies appear early; H antibodies appear later and persist longer.',
    sourcesOfError: ['False positives in patients with previous immunization (TAB vaccine).', 'Prozone effect in high antibody concentrations.'],
    precautions: ['Do not read after 1 minute (drying mimics agglutination).', 'Use fresh serum, not plasma.'],
    normalVsAbnormal: 'Endemic areas may show low baseline titers (Anamnestic response).',
    applications: 'Rapid screening in fever cases.',
    limitations: 'Low specificity; cross-reactivity with other infections is common.',
    examPoints: 'O = Somatic (early). H = Flagellar (late). Widal is a direct agglutination test.',
    viva: [
      { q: 'What does the Widal test detect?', a: 'Serum antibodies against Salmonella typhi and paratyphi antigens.' },
      { q: 'Which antibody appears first in typhoid fever?', a: 'Anti-O antibodies (indicate active infection).' }
    ],
    mcq: [
      { q: 'Widal test is used for the diagnosis of?', options: ['Malaria', 'Typhoid', 'Tuberculosis', 'Syphilis'], answer: 1 },
      { q: 'Widal slide test should be read within how many minutes?', options: ['1 min', '5 mins', '10 mins', '30 mins'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-widal-tube',
    title: 'Widal Test (Quantitative Tube Method)',
    isImportant: true,
    definition: 'Quantitative serological test determining the exact titer of antibodies in typhoid fever.',
    principle: 'Standardized bacterial antigens are added to serial dilutions of patient serum in a row of tubes. The highest dilution showing visible agglutination is defined as the Titer. O-antigen produces granular/chalky clumps; H-antigen produces loose/fluffy clumps.',
    mechanism: 'Visible lattice formation in a liquid medium.',
    types: ['Felix-Dreyer Method'],
    specimen: 'Serum.',
    reagents: [{ component: 'Standardized O and H antigens (Suspensions)', function: 'Specific detection targets.' }],
    equipment: ['Widal water bath (37°C)', 'Kahn tubes or Dreyer tubes', 'Serological pipettes'],
    procedure: [
      'Prepare serial dilutions of serum (1:20, 1:40, 1:80, 1:160, 1:320) in saline.',
      'Set up two rows (O and H).',
      'Add 0.5 ml of diluted serum to each tube.',
      'Add 0.5 ml of respective antigen to each tube.',
      'Set up a "Saline Control" (Saline + Antigen only).',
      'Incubate: O-tubes for 4-24 hrs; H-tubes for 2-4 hrs at 37°C.',
      'Examine for agglutination.'
    ],
    observation: 'O-agglutination: Granular, looks like chalk dust. H-agglutination: Large, wooly, loose flakes.',
    result: 'The Titer is the reciprocal of the highest dilution showing visible agglutination.',
    interpretation: 'Clinically significant titers in non-endemic areas: O > 1:80, H > 1:160. A rising titer (four-fold) between two samples is diagnostic.',
    referenceRange: 'O < 1:80 | H < 1:160.',
    clinicalSignificance: 'Confirmation and monitoring of enteric fever. High O-titer suggests active infection; High H-titer suggests past infection or vaccination.',
    sourcesOfError: ['Incorrect incubation temperature.', 'Degraded/low-sensitivity antigens.'],
    precautions: ['Observe the H-tubes very carefully as fluffy clumps break easily.', 'Check the Control tube first; it must be clear.'],
    normalVsAbnormal: 'A rising titer is more important than a single high titer.',
    applications: 'Secondary hospital diagnostic confirmation.',
    limitations: 'Takes 24 hours for final reading.',
    examPoints: 'O-clumps = Granular. H-clumps = Fluffy. 4-fold rise is diagnostic.',
    viva: [
      { q: 'What is a "titer"?', a: 'The reciprocal of the highest dilution of serum that shows a visible reaction.' },
      { q: 'Define anamnestic response in Widal.', a: 'A non-specific rise in typhoid antibodies during a completely unrelated febrile infection in a previously sensitized person.' }
    ],
    mcq: [
      { q: 'H-agglutination is characterized by what appearance?', options: ['Granular', 'Fluffy/Wooly', 'Punctate', 'Lysis'], answer: 1 },
      { q: 'Diagnostic rising titer is defined as?', options: ['2-fold', '4-fold', '10-fold', 'No change'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-vdrl',
    title: 'VDRL Test (Venereal Disease Research Laboratory)',
    isImportant: true,
    definition: 'Non-treponemal screening flocculation test used for the detection of Reagin antibodies in syphilis.',
    principle: 'Detects Anti-cardiolipin (Reagin) antibodies. Patient serum is mixed with VDRL antigen (Cardiolipin-Lecithin-Cholesterol mixture). If antibodies are present, they combine with the antigen to form microscopic particles called floccules.',
    mechanism: 'Flocculation (a type of precipitation where aggregated particles remain suspended).',
    types: ['Qualitative', 'Semi-quantitative'],
    specimen: 'Heated/Inactive Serum (56°C for 30 mins) or CSF.',
    reagents: [{ component: 'VDRL Antigen', function: 'Cardiolipin-lecithin buffered solution.' }],
    equipment: ['VDRL glass slide (with depressions)', 'VDRL rotator (180 rpm)', 'Light microscope (10x)'],
    procedure: [
      'Inactivate patient serum at 56°C for 30 minutes (to destroy complement).',
      'Pipette 50 µl of serum onto a VDRL slide circle.',
      'Add exactly 1 drop (1/60 ml) of freshly prepared VDRL antigen.',
      'Rotate the slide for 4 minutes at 180 rpm.',
      'Examine under the microscope (10x objective).'
    ],
    observation: 'Reactive: Large or medium black clumps (floccules). Non-reactive: Uniform fine greyish suspension.',
    result: 'Report as Reactive (Large/Medium) or Non-Reactive.',
    interpretation: 'A "Reactive" result suggests syphilis but requires confirmation with specific treponemal tests (like TPHA).',
    referenceRange: 'Non-Reactive.',
    clinicalSignificance: 'Screening for Syphilis (Treponema pallidum). Excellent marker for monitoring treatment (titer declines rapidly after successful therapy).',
    sourcesOfError: ['Serum not properly inactivated.', 'Prozone sensation causing false non-reactivity.'],
    precautions: ['Antigen must be used within 24 hours of preparation.', 'Rotation speed must be strictly 180 rpm.'],
    normalVsAbnormal: 'Biological False Positive (BFP) can occur in pregnancy, leprosy, and malaria.',
    applications: 'Routine screening in antenatal clinics and donor centers.',
    limitations: 'Low specificity in late latent syphilis.',
    examPoints: 'Type of test: Flocculation. Antigen: Cardiolipin. False +: BFP.',
    viva: [
      { q: 'What is the antigen used in the VDRL test?', a: 'Cardiolipin-Lecithin-Cholesterol mixture.' },
      { q: 'Why is the serum heated to 56°C for 30 minutes?', a: 'To inactivate complement, which can interfere with the flocculation reaction and cause false positives.' }
    ],
    mcq: [
      { q: 'VDRL test is an example of?', options: ['Agglutination', 'Precipitation', 'Flocculation', 'Lysis'], answer: 2 },
      { q: 'Biological False Positive (BFP) in VDRL is common in?', options: ['HIV', 'Malaria', 'Pregnancy', 'All of the above'], answer: 3 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'imm-crp',
    title: 'C-Reactive Protein (CRP) Latex Test',
    isImportant: true,
    definition: 'Rapid slide agglutination test used to detect C-reactive protein, a non-specific marker of inflammation.',
    principle: 'The reagent contains latex particles coated with specific antibodies against human CRP. When mixed with patient serum containing CRP, the particles agglutinate into visible clumps.',
    mechanism: 'Reverse Passive Agglutination (Antibody is bound to the particle to find the antigen).',
    types: ['Qualitative', 'Semi-quantitative Titer'],
    specimen: 'Serum.',
    reagents: [{ component: 'CRP Latex Reagent', function: 'Latex sensitized with Anti-human CRP.' }],
    equipment: ['Tile/Slide', 'Applicator sticks'],
    procedure: [
      'Bring reagents and serum to room temperature.',
      'Place 1 drop of serum on a slide circle.',
      'Add 1 drop of well-mixed Latex reagent.',
      'Mix and rock gently for 2 minutes.',
      'Observe for agglutination.'
    ],
    observation: 'Macroscopic clumping of latex particles.',
    result: 'Agglutination: Positive (>6 mg/L). No agglutination: Negative (<6 mg/L).',
    interpretation: 'Positive result indicates acute inflammation, infection, or tissue injury.',
    referenceRange: '< 6 mg/L.',
    clinicalSignificance: 'One of the first "Acute Phase Reactants" to rise during inflammation. Used to monitor response to therapy in infections and autoimmune disorders.',
    sourcesOfError: ['Over-reading after 2 minutes (drying artifact).', 'Lipemic serum interference.'],
    precautions: ['Do not freeze the latex reagent.', 'Use only serum, as fibrinogen in plasma can cause false agglutination.'],
    normalVsAbnormal: 'High levels (>100 mg/L) suggest severe bacterial infection.',
    applications: 'Emergency and routine screening for inflammation.',
    limitations: 'Non-specific; does not identify the "cause" of inflammation.',
    examPoints: 'CRP is an acute phase reactant. Sensitivity of latex is ~6 mg/L.',
    viva: [
      { q: 'What is CRP?', a: 'An acute-phase protein produced by the liver in response to IL-6 during inflammation.' },
      { q: 'What kind of agglutination is the CRP latex test?', a: 'Reverse Passive Agglutination.' }
    ],
    mcq: [
      { q: 'CRP is synthesized mainly in the?', options: ['Spleen', 'Kidney', 'Liver', 'Marrow'], answer: 2 },
      { q: 'Latex CRP test is positive if concentration is above?', options: ['0.1 mg/L', '6 mg/L', '15 mg/L', '100 mg/L'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-rpr',
    title: 'Rapid Plasma Reagin (RPR) Card Test',
    isImportant: false,
    definition: 'Modern, modified VDRL test for syphilis using macroscopic charcoal particles for easier reading.',
    principle: 'Detects reagin antibodies like VDRL, but the antigen is stabilized and contains charcoal particles. This allows the reaction to be read with the naked eye without a microscope.',
    mechanism: 'Macroscopic Flocculation.',
    types: ['Qualitative screening'],
    specimen: 'Serum or Plasma (does not require heat inactivation).',
    reagents: [{ component: 'RPR Antigen (Charcoal suspended)', function: 'Visualizing flocculation.' }],
    equipment: ['RPR card', 'Plastic dispensers', 'Rotator'],
    procedure: [
      'Dispense 50 µl patient serum onto the plastic card.',
      'Add 1 drop of RPR antigen to the serum.',
      'Mix and spread across the entire circle.',
      'Rotate the card for 8 minutes at 100 rpm.',
      'Observe macroscopically for black clumps.'
    ],
    observation: 'Distinct black clumps in a clear fluid.',
    result: 'Reactive (clumping) or Non-Reactive.',
    interpretation: 'Equivalent to VDRL but technically simpler. Useful for mass screening.',
    referenceRange: 'Non-Reactive.',
    clinicalSignificance: 'Primary screening for Syphilis.',
    sourcesOfError: ['Incorrect rotation speed.', 'Drying of card.'],
    precautions: ['Check the expiration in the antigen; charcoal settles, must be shaken well.'],
    normalVsAbnormal: 'Like VDRL, can show biological false positives.',
    applications: 'Antenatal and large scale blood camps.',
    limitations: 'Not suitable for CSF (unlike VDRL).',
    examPoints: 'Charcoal makes it macroscopic. No heat inactivation needed.',
    viva: [
      { q: 'What is the advantage of RPR over VDRL?', a: 'Can be read with the naked eye (no microscope needed) and serum does not require heat inactivation.' },
      { q: 'Why is RPR not done on CSF?', a: 'RPR antigen contains substances that interfere with the thin nature of CSF; VDRL is the only non-treponemal test for Neurosyphilis.' }
    ],
    mcq: [
      { q: 'Charcoal particles in RPR serve what purpose?', options: ['Catalyst', 'Antigen', 'Visualizing agent', 'Preservative'], answer: 2 },
      { q: 'RPR test result is read after how many minutes?', options: ['1 min', '4 mins', '8 mins', '15 mins'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
