export const serologyData1 = [
  {
    id: 'ser-widal',
    title: 'Widal Test',
    isImportant: true,
    definition: 'Test detecting antibodies against Salmonella causing Enteric Fever.',
    principle: 'Patient serum possesses specific antibodies against Salmonella antigens (O and H). Mixed with colored suspensions of known antigens, visual agglutination occurs due to lattice formation.',
    mechanism: 'IgM and IgG bind polyvalent bacterial antigens to form macroscopic clumps.',
    types: ['Slide Method', 'Tube Method'],
    specimen: 'Serum exclusively.',
    reagents: [
      { component: 'Widal Antigens (O, H, AH, BH)', function: 'Known colored bacterial antigens.' },
      { component: 'Saline', function: 'Diluent for tube method.' }
    ],
    equipment: ['Widal Slide', 'Test tubes'],
    procedure: [
      'Slide: Place 1 drop of serum in 4 slide circles.',
      'Add 1 drop of O, H, AH, BH antigens to respective circles.',
      'Mix thoroughly with applicator sticks.',
      'Rock slide gently for 1 minute.',
      'Tube: Prepare serial dilutions of serum in saline.',
      'Add 1 drop antigen to each tube.',
      'Incubate at 37°C overnight.',
      'Read highest dilution showing visible agglutination (Titre).'
    ],
    observation: 'Colored granular clumps floating in clear fluid.',
    result: 'Slide: Reactive or Non-reactive. Tube: Titre determination.',
    interpretation: 'Titre > 1:80 for O or > 1:160 for H suggests typhoid infection.',
    referenceRange: 'Titre <= 1:40 is normal.',
    clinicalSignificance: 'Diagnostic test for Typhoid and Paratyphoid Fever.',
    sourcesOfError: ['Cross-reactivity with Malarial antibodies causes false positives.'],
    precautions: ['Do not read slide after 2 minutes.'],
    normalVsAbnormal: 'Elevated O antigen titre signifies acute infection.',
    applications: 'Fever of unknown origin panels.',
    limitations: 'Relies on local baseline endemic titres.',
    examPoints: 'O forms granular clumps. H forms fluffy clumps.',
    viva: [
      { q: 'What does Widal diagnose?', a: 'Typhoid and Paratyphoid fever.' },
      { q: 'What are O and H antigens?', a: 'O is Somatic. H is Flagellar.' }
    ],
    mcq: [
      { q: 'Widal test uses principle of:', options: ['Precipitation', 'Agglutination', 'Flocculation', 'Complement'], answer: 1 },
      { q: 'H antigen produces what type of agglutination?', options: ['Compact granular', 'Loose fluffy', 'Milky', 'No clump'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lab_glassware.jpg/960px-Lab_glassware.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Staphylococcus_aureus_VISA_2.jpg/960px-Staphylococcus_aureus_VISA_2.jpg'
    }
  },
  {
    id: 'ser-vdrl',
    title: 'VDRL Test',
    isImportant: true,
    definition: 'Non-treponemal flocculation test screening for Syphilis.',
    principle: 'Patient serum contains reagin antibodies directed against host lipid tissue damage. Mixed with VDRL antigen, the antibodies bind lipid droplets, visibly flocculating.',
    mechanism: 'Lipid-antibody complexing forms fluffy floccules.',
    types: ['Microscopic Flocculation Screening'],
    specimen: 'Heat-inactivated Serum.',
    reagents: [
      { component: 'VDRL Antigen Emulsion', function: 'Contains Cardiolipin determining reactivity.' },
      { component: 'Saline', function: 'Buffer for emulsion.' }
    ],
    equipment: ['Mechanical Rotator', 'Microscope (10x)'],
    procedure: [
      'Inactivate patient serum at 56°C for 30 minutes.',
      'Place 50 µl inactivated serum onto the VDRL slide.',
      'Add 1 drop freshly prepared VDRL antigen.',
      'Place slide on rotator at exactly 180 RPM for 4 minutes.',
      'Read under microscope using 10x objective.'
    ],
    observation: 'Aggregated crystalline lipid clumps distinct from background.',
    result: 'Reactive (clumps) or Non-reactive (smooth).',
    interpretation: 'Screening positive demands Treponemal specific confirmation.',
    referenceRange: 'Non-Reactive.',
    clinicalSignificance: 'Screening for Syphilis preventing neurosyphilis.',
    sourcesOfError: ['False negative Prozone effect rapidly occurs in secondary syphilis.'],
    precautions: ['Serum MUST be inactivated to kill native complement.', 'Rotator MUST be 180 RPM.'],
    normalVsAbnormal: 'Biological False Positive occurs in Malaria or SLE.',
    applications: 'Pregnancy screening, Blood bank screening.',
    limitations: 'Lacks absolute specificity.',
    examPoints: 'Requires microscope. Antigen is Cardiolipin lipid.',
    viva: [
      { q: 'Antigen used in VDRL?', a: 'Lipid extract of Cardiolipin, Lecithin, and Cholesterol.' },
      { q: 'Why natively heat the serum to 56°C?', a: 'To entirely inactivate complement.' }
    ],
    mcq: [
      { q: 'VDRL test relies on what mechanism?', options: ['Agglutination', 'Flocculation', 'Precipitation', 'Neutralization'], answer: 1 },
      { q: 'Temperature and time for inactivation?', options: ['37C, 10m', '56C, 30m', '100C, 1m', 'Not needed'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/0/09/C60-rods.png'
    }
  },
  {
    id: 'ser-rpr',
    title: 'RPR Test (Rapid Plasma Reagin)',
    isImportant: false,
    definition: 'Macroscopic rapid non-treponemal screening tool for Syphilis.',
    principle: 'Modified VDRL test using charcoal particles bound to lipid antigen. Mixed with unheated plasma, flocculation occurs, with charcoal rendering clumps black.',
    mechanism: 'Charcoal trapping within lipid-reagin complex creates macroscopic contrast.',
    types: ['Macroscopic Flocculation'],
    specimen: 'Unheated Plasma or Serum.',
    reagents: [
      { component: 'RPR Antigen', function: 'Charcoal-labeled Cardiolipin suspension with Choline Chloride.' }
    ],
    equipment: ['Plastic RPR Cards', 'Rotator'],
    procedure: [
      'Place 1 drop of unheated patient sample on card.',
      'Spread completely within the circle.',
      'Dispense exactly 1 drop of RPR antigen.',
      'Place on rotator at 100 RPM for 8 minutes.',
      'Read macroscopically under bright light.'
    ],
    observation: 'Distinct black clumps against a white card background.',
    result: 'Reactive (clumps) vs Non-reactive.',
    interpretation: 'Rapid primary indicator of Treponemal damage.',
    referenceRange: 'Non-Reactive.',
    clinicalSignificance: 'Extremely fast clinic screening mechanism.',
    sourcesOfError: ['Drying of the card before 8 minutes falsely triggers pseudo-flocculation.'],
    precautions: ['Humidifying cover prevents evaporation.'],
    normalVsAbnormal: 'Must be verified via FTA-ABS if positive.',
    applications: 'Mass routing screening.',
    limitations: 'Biological False Positive occurs.',
    examPoints: 'Does not require heating due to Choline Chloride. Read by naked eye.',
    viva: [
      { q: 'How does RPR differ from VDRL?', a: 'Uses charcoal for naked-eye reading, and serum does NOT need heat-inactivation.' },
      { q: 'Chemical inactivating complement in RPR?', a: 'Choline Chloride.' }
    ],
    mcq: [
      { q: 'RPR stands for:', options: ['Rapid Pathogen Reagin', 'Rapid Plasma Reagin', 'Reactive Plasma', 'Random Patient'], answer: 1 },
      { q: 'RPR test is read:', options: ['Microscopically', 'Macroscopically', 'Spectrophotometer', 'Electron microscope'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rapid_plasma_reagin.jpg/640px-Rapid_plasma_reagin.jpg'
    }
  }
];
