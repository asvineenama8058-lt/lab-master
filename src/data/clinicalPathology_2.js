export const clinicalPathologyData2 = [
  {
    id: 'cpa-trans-exud',
    title: 'Body Fluids: Transudate vs. Exudate',
    isImportant: false,
    definition: 'Diagnostic categorization of abnormal pathological fluid accumulations.',
    principle: 'Fluid accumulates due to pathology. A Transudate forms strictly due to mechanical pressure imbalances (heart failure) resulting in low protein. An Exudate forms from inflammation causing vascular leakage resulting in high protein and cells.',
    mechanism: 'Hydrostatic forced filtration vs. inflammatory fenestrated capillary leakage.',
    types: ['Pleural fluid', 'Ascitic fluid', 'Synovial fluid'],
    specimen: 'Strictly collected fluid via fine needle aspiration.',
    reagents: [
      { component: 'Dilute Acetic Acid', function: 'Vital for historical Rivalta Test.' }
    ],
    equipment: ['Biochemistry analyzer', 'Neubauer chamber', 'Microscope'],
    procedure: [
      'Note physical appearance (Transudate clear. Exudate cloudy).',
      'Measure Total Protein and LDH in the fluid and compare with serum.',
      'Perform Total and Differential Cell counts.',
      'Optional Rivalta Test: Add fluid drop to acid. Heavy cloud = exudate.'
    ],
    observation: 'Milky, bloody, or highly purulent fluid heavily signifies an exudative process.',
    result: 'Transudate: Protein < 3 g/dl. Exudate: Protein > 3 g/dl.',
    interpretation: 'Light\'s criteria definitively separates them using fluid/serum ratios.',
    referenceRange: 'Cavities normally contain marginal trace fluid (< 20 ml) exclusively for lubrication.',
    clinicalSignificance: 'Directs whether a patient needs heart medication vs powerful broad-spectrum antibiotics.',
    sourcesOfError: ['Clots heavily interfere with automated cell counts.'],
    precautions: ['Use an anticoagulant (EDTA/Heparin) during collection.'],
    normalVsAbnormal: 'High neutrophil count universally suggests acute bacterial empyema.',
    applications: 'Emergency pulmonology.',
    limitations: 'Light\'s criteria mistakenly labels some transudates as exudates after heavy diuretic use.',
    examPoints: 'Exudates have high protein and high LDH. Transudates are ultrafiltrates.',
    viva: [
      { q: 'Define Transudate.', a: 'Clear ultrafiltrate of plasma due to systemic hydrodynamic imbalances.' },
      { q: 'What is Light\'s Criteria used for?', a: 'To definitively separate transudates from exudates.' }
    ],
    mcq: [
      { q: 'Fluid characterized by low protein (<3 g/dl) and clear appearance is a:', options: ['Exudate', 'Transudate', 'Pus', 'Chyle'], answer: 1 },
      { q: 'An exudate is typically natively caused by:', options: ['Heart failure', 'Cirrhosis', 'Inflammation/Infection', 'Nephrotic syndrome'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/MesotheliomaCT.jpg/960px-MesotheliomaCT.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  }
];
