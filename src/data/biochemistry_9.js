export const biochemistryData9 = [
  {
    id: 'bio-calc-bun',
    title: 'Biomarker Calculations: BUN, Globulin & VLDL',
    isImportant: true,
    definition: 'Essential diagnostic calculations derived from direct biochemical assays.',
    principle: 'Instead of direct chemical assay, these values are mathematically derived from parent tests using molecular weight conversions or physiological ratios.',
    mechanism: 'Algorithmic clinical chemistry derivations.',
    types: ['Derived Parameters'],
    specimen: 'Requires prior completion of primary assays (Urea, TP, Alb, TG).',
    reagents: [
      { component: 'None', function: 'Pure mathematical derivation.' }
    ],
    equipment: ['Calculator / LIS System'],
    procedure: [
      'For BUN: Multiply Blood Urea by 0.467 (or divide by 2.14).',
      'For Globulin: Total Protein - Serum Albumin.',
      'For A/G Ratio: Albumin ÷ Globulin.',
      'For VLDL: Triglycerides ÷ 5.'
    ],
    observation: 'Numerical values computed.',
    result: 'Derived metrics.',
    interpretation: 'A/G ratio inversion (< 1.0) signifies massive liver disease or Multiple Myeloma.',
    referenceRange: 'BUN: 7-20 mg/dL. A/G Ratio: 1.2 to 2.0. VLDL: < 30 mg/dL.',
    clinicalSignificance: 'Mandatory clinical markers extracted without extra reagent costs.',
    sourcesOfError: ['Errors in primary tests multiply extensively in derived tests.'],
    precautions: ['VLDL formula is strictly invalid if Triglyceride > 400 mg/dL.'],
    normalVsAbnormal: 'A/G inversion is a classic pathological hallmark.',
    applications: 'Comprehensive Metabolic Panels (CMP).',
    limitations: 'Calculations fail fundamentally in severe extreme pathologies.',
    examPoints: 'BUN = Urea / 2.14. Albumin is primarily higher than Globulin.',
    viva: [
      { q: 'Why does Urea divide by 2.14?', a: 'Ratio of molecular weight of Urea (60) to its Nitrogen content (28).' }
    ],
    mcq: [
      { q: 'Formula for VLDL?', options: ['LDL/5', 'Triglycerides/5', 'Cholesterol/2', 'HDL/3'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg'
    }
  },
  {
    id: 'bio-acp',
    title: 'Estimation of Acid Phosphatase (ACP)',
    isImportant: false,
    definition: 'Enzyme assay primarily diagnosing prostatic carcinoma.',
    principle: 'ACP hydrolyzes 1-Naphthyl phosphate in an acidic medium (pH 5.0) to release 1-naphthol, which couples with Fast Red TR dye to form a colored azo compound.',
    mechanism: 'Hydrolase cleavage at strictly acidic pH.',
    types: ['Colorimetric Kinetic'],
    specimen: 'Serum stabilized with citrate.',
    reagents: [
      { component: 'Citrate Buffer pH 5.0', function: 'Maintains optimal acidic condition.' },
      { component: 'Tartrate', function: 'Used to identify Prostatic Acid Phosphatase (PAP).' }
    ],
    equipment: ['Spectrophotometer'],
    procedure: [
      'Mix reagent with serum.',
      'Measure absorbance kinetically.'
    ],
    observation: 'Color formation measured.',
    result: 'ACP Activity in U/L.',
    interpretation: 'Highly elevated strongly in metastatic prostate cancer.',
    referenceRange: '< 6 U/L.',
    clinicalSignificance: 'Largely replaced by PSA testing today.',
    sourcesOfError: ['RBCs contain ACP; hemolysis ruins the test.'],
    precautions: ['Must be tested strictly within 1 hour or acidified.'],
    normalVsAbnormal: 'Prostate ACP is specifically inhibited by L-Tartrate.',
    applications: 'Oncology.',
    limitations: 'Unstable enzyme.',
    examPoints: 'Optimal pH is 5.0. Inhibited by Tartrate.',
    viva: [
      { q: 'What inhibitor isolates the prostate fraction?', a: 'L-Tartrate.' }
    ],
    mcq: [
      { q: 'Acid Phosphatase optimally works at pH?', options: ['2.0', '5.0', '7.4', '10.5'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  }
];
