export const microbiologyData5 = [
  {
    id: 'mic-spore',
    title: 'Endospore Staining (Schaeffer-Fulton)',
    isImportant: true,
    definition: 'Staining method separating endospores from vegetative cells.',
    principle: 'Spores possess a tough keratin coat. Malachite green is forced into the spore using steam. Safranin counterstains the vegetative cells.',
    mechanism: 'Thermal disruption allows primary stain penetration.',
    types: ['Schaeffer-Fulton', 'Dorner'],
    specimen: 'Bacterial smear.',
    reagents: [
      { component: 'Malachite Green', function: 'Primary stain.' },
      { component: 'Safranin', function: 'Counterstain.' }
    ],
    equipment: ['Bunsen burner', 'Microscope'],
    procedure: [
      'Flood smear with Malachite Green.',
      'Steam slide over boiling water for 5 mins.',
      'Rinse with water.',
      'Counterstain with Safranin for 1 min.',
      'Rinse, dry, and observe.'
    ],
    observation: 'Green oval structures inside pink cells.',
    result: 'Endospores = Green. Cells = Pink.',
    interpretation: 'Confirms endospore-formers.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Identifies Bacillus and Clostridium.',
    sourcesOfError: ['Insufficient steaming.'],
    precautions: ['Do not boil dry.'],
    normalVsAbnormal: 'Spores indicate extreme endurance natively.',
    applications: 'Anaerobic identification.',
    limitations: 'Fresh cultures show poor sporulation.',
    examPoints: 'Heat acts as a physical mordant.',
    viva: [
      { q: 'Why use steam?', a: 'To penetrate keratin coat.' }
    ],
    mcq: [
      { q: 'Primary stain is:', options: ['Carbol Fuchsin', 'Crystal Violet', 'Malachite Green', 'Methylene Blue'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bunsen_burner_flame_types.jpg/960px-Bunsen_burner_flame_types.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Bacillus_subtilis_Spore.jpg'
    }
  },
  {
    id: 'mic-capsule',
    title: 'Capsule Staining (Negative Staining)',
    isImportant: true,
    definition: 'Used to visibly demonstrate bacterial capsules.',
    principle: 'Capsules are non-ionic and repel stains. India Ink stains the background dark while Crystal Violet stains the cell. Capsule remains as a clear halo.',
    mechanism: 'Ionic repulsion creates a clear gradient halo.',
    types: ['India Ink Method'],
    specimen: 'Bacterial isolate.',
    reagents: [
      { component: 'India Ink', function: 'Stains background.' },
      { component: 'Crystal Violet', function: 'Stains cell body.' }
    ],
    equipment: ['Glass slides', 'Microscope'],
    procedure: [
      'Blend loopful of bacteria into India Ink drop.',
      'Use spreader slide to drag thin film.',
      'Air dry WITHOUT heat fixing.',
      'Flood with Crystal Violet for 1 min.',
      'Rinse lightly.'
    ],
    observation: 'Clear distinct halos surrounding blue cells.',
    result: 'Capsule present or absent.',
    interpretation: 'Visualizes protective polysaccharide layers.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Identifies Cryptococcus strictly.',
    sourcesOfError: ['Heat fixing falsely shrinks cells creating false halos.'],
    precautions: ['Do NOT heat fix.'],
    normalVsAbnormal: 'Capsule dictates virulence natively.',
    applications: 'Meningitis diagnostics.',
    limitations: 'Artifacts can mimic capsules.',
    examPoints: 'India ink is an acidic negatively charged dye.',
    viva: [
      { q: 'Why no heat fixing?', a: 'Heat shrinks cell creating false halo.' }
    ],
    mcq: [
      { q: 'India ink acts as a:', options: ['Primary stain', 'Counterstain', 'Negative background stain', 'Mordant'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Cryptococcus_neoformans.jpg'
    }
  }
];
