export const biochemistryData5 = [
  {
    id: 'bio-hba1c',
    title: 'Estimation of HbA1c (Glycosylated Hemoglobin)',
    isImportant: true,
    definition: 'Test measuring average blood glucose over 3 months.',
    principle: 'Glucose binds to the N-terminal of hemoglobin. Ion exchange resin binds HbA0 but allows HbA1c to elute freely. Absorbance is measured.',
    mechanism: 'Cation exchange chromatography.',
    types: ['Ion Exchange', 'HPLC'],
    specimen: 'EDTA Whole Blood.',
    reagents: [
      { component: 'Hemolyzing Reagent', function: 'Lyses RBCs.' },
      { component: 'Cation Resin', function: 'Binds non-glycosylated HbA0.' }
    ],
    equipment: ['Resin tubes', 'Spectrophotometer'],
    procedure: [
      'Mix 50 µl whole blood with hemolyzing reagent.',
      'Add 100 µl hemolysate into resin tube.',
      'Mix 5 minutes.',
      'Allow resin to settle.',
      'Read absorbance of supernatant at 415 nm.'
    ],
    observation: 'Clear red supernatant.',
    result: 'Calculate % of Total Hemoglobin.',
    interpretation: 'Reflects long-term glycemic control.',
    referenceRange: 'Normal: 4.0 - 5.6%. Diabetic: > 6.5%.',
    clinicalSignificance: 'Monitors Diabetic patients.',
    sourcesOfError: ['Anemia causes false low.'],
    precautions: ['Use whole blood.'],
    normalVsAbnormal: '> 6.5% confirms diabetes.',
    applications: 'Endocrinology.',
    limitations: 'Variants (HbS) alter readings.',
    examPoints: 'Reflects RBC lifespan.',
    viva: [
      { q: 'Why 3 months?', a: 'Based on RBC 120-day lifespan.' }
    ],
    mcq: [
      { q: 'HbA1c measures:', options: ['Glucose', 'Glycosylated Hemoglobin', 'Albumin', 'Lipid'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  },
  {
    id: 'bio-ogtt',
    title: 'Oral Glucose Tolerance Test (OGTT)',
    isImportant: true,
    definition: 'Test evaluating body clearance of a glucose load.',
    principle: 'Patient drinks 75g of anhydrous glucose. Blood is drawn fasting and 2 hours post-load. In normal patients, insulin rapidly clears glucose.',
    mechanism: 'Dynamic test of pancreatic beta-cell function.',
    types: ['2-Hour OGTT', 'Gestational OGTT'],
    specimen: 'Fluoride Plasma.',
    reagents: [
      { component: '75g Glucose Powder', function: 'Standardized load.' }
    ],
    equipment: ['Glucose assay kits'],
    procedure: [
      'Draw fasting sample.',
      'Give 75g glucose in 300ml water.',
      'Draw blood at exactly 2 hours post load.',
      'Assay using GOD-POD.'
    ],
    observation: 'Glucose dynamics mapped.',
    result: 'Report Fasting and 2-Hour values.',
    interpretation: 'Diagnoses Diabetes and Impaired Glucose Tolerance.',
    referenceRange: '2-hr < 140 mg/dL.',
    clinicalSignificance: 'Definitive diagnostic for Diabetes.',
    sourcesOfError: ['Vomiting glucose invalidates test.'],
    precautions: ['Patient must sit quietly.'],
    normalVsAbnormal: '2-hr > 200 mg/dL confirms Diabetes.',
    applications: 'Endocrinology.',
    limitations: 'Requires patient compliance.',
    examPoints: 'Load is 75g anhydrous glucose.',
    viva: [
      { q: 'What is the standard load?', a: '75g.' }
    ],
    mcq: [
      { q: 'Glucose load for adult OGTT?', options: ['50g', '75g', '100g', '150g'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  }
];
