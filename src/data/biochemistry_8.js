export const biochemistryData8 = [
  {
    id: 'bio-ldh',
    title: 'Estimation of Lactate Dehydrogenase (LDH)',
    isImportant: true,
    definition: 'Enzyme assay detecting non-specific massive tissue destruction.',
    principle: 'LDH catalyzes the conversion of Pyruvate to Lactate with the simultaneous oxidation of NADH to NAD+. The rate of decrease in absorbance at 340 nm (disappearance of NADH) is measured kinetically.',
    mechanism: 'Kinetic UV measurement of a coenzyme oxidation.',
    types: ['Kinetic UV Method (Pyruvate to Lactate)'],
    specimen: 'Serum heavily unhemolyzed.',
    reagents: [
      { component: 'NADH & Pyruvate', function: 'Substrate and coenzyme for the reaction.' }
    ],
    equipment: ['UV Spectrophotometer (340nm)'],
    procedure: [
      'Mix 1.0 ml reagent with 20 µl serum.',
      'Read absorbance kinetically at 340 nm for 3 minutes.',
      'Calculate ΔA/min and multiply by factor.'
    ],
    observation: 'Decrease in absorbance over time.',
    result: 'LDH Activity in U/L.',
    interpretation: 'Elevated heavily in MI, Hemolysis, and extensive tumors.',
    referenceRange: '140 - 280 U/L.',
    clinicalSignificance: 'Late marker for Myocardial Infarction. Tumor burden marker.',
    sourcesOfError: ['Hemolysis violently elevates LDH (RBCs are packed with it).'],
    precautions: ['Process immediately; LDH is cold sensitive (do not freeze).'],
    normalVsAbnormal: 'Isoenzymes (LDH1 to LDH5) identify specific damaged organs.',
    applications: 'Cardiac panels, Oncology.',
    limitations: 'Highly non-specific (present in almost all cells).',
    examPoints: 'Reaction measured at 340nm uniquely detects NADH/NAD+ shift.',
    viva: [
      { q: 'Why measure at 340nm?', a: 'NADH absorbs strongly at 340nm, NAD+ does not.' }
    ],
    mcq: [
      { q: 'LDH converts Pyruvate to Lactate by oxidizing:', options: ['ATP', 'FADH2', 'NADH', 'GTP'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  },
  {
    id: 'bio-ckmb',
    title: 'Estimation of Creatine Kinase MB (CK-MB)',
    isImportant: true,
    definition: 'Specific cardiac marker assay detecting acute myocardial infarction (Heart Attack).',
    principle: 'Anti-CK-M antibodies completely inhibit the M subunit of CK. The remaining B subunit (from CK-MB) activity is measured. The B activity is doubled to calculate total CK-MB mass.',
    mechanism: 'Immunoinhibition coupled with kinetic UV assay.',
    types: ['Immunoinhibition Kinetic Method'],
    specimen: 'Serum.',
    reagents: [
      { component: 'Anti-CK-M antibody', function: 'Neutralizes CK-MM entirely.' }
    ],
    equipment: ['UV Spectrophotometer (340nm)'],
    procedure: [
      'Incubate serum with Anti-CK-M reagent.',
      'Read remaining CK-B activity kinetically at 340nm.',
      'Multiply B activity by 2 to get CK-MB.'
    ],
    observation: 'Decrease in absorbance via NADH shift.',
    result: 'CK-MB Activity in U/L.',
    interpretation: 'Rises within 4-6 hours of a heart attack.',
    referenceRange: '< 24 U/L.',
    clinicalSignificance: 'Diagnostic standard for early MI detection.',
    sourcesOfError: ['Macro-CK complexes can falsely inflate values.'],
    precautions: ['Ensure skeletal muscle damage (CK-MM) is fully inhabited.'],
    normalVsAbnormal: 'CK-MB fraction > 5% of Total CK implies Myocardial Infarction.',
    applications: 'Emergency Cardiology.',
    limitations: 'Troponin is natively more sensitive than CK-MB.',
    examPoints: 'CK-MB is a dimer specific to cardiac muscle.',
    viva: [
      { q: 'Why is Troponin preferred over CK-MB now?', a: 'Troponin stays elevated longer and is entirely cardiac-specific.' }
    ],
    mcq: [
      { q: 'Antibody used in CK-MB assay inhibits which subunit?', options: ['B', 'M', 'C', 'K'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg'
    }
  }
];
