export const biochemistryData10 = [
  {
    id: 'bio-ise',
    title: 'Electrolytes Analysis (ISE Method)',
    isImportant: true,
    definition: 'Potentiometric measurement of circulating ions (Na+, K+, Cl-).',
    principle: 'Ion Selective Electrodes (ISE) use a specialized ion-selective membrane (e.g., Valinomycin for Potassium) that interacts exclusively with one specific ion. This creates a measurable electrical potential difference (voltage) proportional to the ion concentration compared to a reference electrode.',
    mechanism: 'Potentiometric voltage generation across a semi-permeable membrane.',
    types: ['Direct ISE', 'Indirect ISE'],
    specimen: 'Serum or Plasma.',
    reagents: [
      { component: 'Calibrator Fluids', function: 'Establishes the standard Nernst voltage slope.' }
    ],
    equipment: ['ISE Autoanalyzer'],
    procedure: [
      'Machine aspirates the serum sample.',
      'Sample passes over the specific Na, K, and Cl electrodes.',
      'Voltages are continually measured against a reference electrode.',
      'Concentration is calculated using the Nernst equation.'
    ],
    observation: 'Machine outputs digital values natively.',
    result: 'Reported in mEq/L or mmol/L.',
    interpretation: 'Hyperkalemia (>5.5 mmol/L) risks lethal cardiac arrest.',
    referenceRange: 'Na: 135-145 | K: 3.5-5.1 | Cl: 98-107 mmol/L.',
    clinicalSignificance: 'Mandatory daily test for fluid balance and cardiac stability in ICU.',
    sourcesOfError: ['Hemolysis violently spikes Potassium (K+ is intracellular).'],
    precautions: ['Use exactly unhemolyzed serum or heparin plasma.'],
    normalVsAbnormal: 'Abnormal K+ alters the ECG dramatically.',
    applications: 'Critical Care.',
    limitations: 'Indirect ISE suffers from pseudohyponatremia in high protein/lipid states.',
    examPoints: 'Valinomycin membrane is completely specific for Potassium.',
    viva: [
      { q: 'Why does hemolysis ruin a Potassium test?', a: 'RBCs contain 40x more potassium than serum. Lysis leaks it.' }
    ],
    mcq: [
      { q: 'Antibiotic heavily used in Potassium ISE membranes?', options: ['Penicillin', 'Valinomycin', 'Tetracycline', 'Gentamicin'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg'
    }
  },
  {
    id: 'bio-qc',
    title: 'Quality Control in Biochemistry (L-J Charts)',
    isImportant: true,
    definition: 'Statistical process ensuring exact accuracy and precision of lab results.',
    principle: 'Known control samples (Normal and Abnormal) are run exactly like patient samples daily. The results are plotted on a Levey-Jennings (L-J) chart. Westgard Rules are applied to detect random errors (spread) or systematic errors (shift/trend).',
    mechanism: 'Statistical variance tracking.',
    types: ['Internal QC', 'External Quality Assessment (EQAS)'],
    specimen: 'Lyophilized control serum strictly reconstituted.',
    reagents: [
      { component: 'Level 1 Control', function: 'Normal physiological range.' },
      { component: 'Level 2 Control', function: 'Pathological abnormal range.' }
    ],
    equipment: ['Autoanalyzer', 'L-J Chart Software'],
    procedure: [
      'Reconstitute control precisely with D.W.',
      'Run assay.',
      'Plot value on L-J chart.',
      'Apply Westgard Rules (1-2s, 1-3s, 2-2s, R-4s).'
    ],
    observation: 'Points should natively cluster around the Mean.',
    result: 'Accepted or Rejected run.',
    interpretation: 'A 1-3s rule violation strictly requires halting testing and recalibration.',
    referenceRange: 'Target Mean +/- 2 Standard Deviations (SD).',
    clinicalSignificance: 'Legally guarantees patient results are not strictly analyzer errors.',
    sourcesOfError: ['Using expired or improperly reconstituted controls entirely fails the run.'],
    precautions: ['Always run controls after major maintenance strictly.'],
    normalVsAbnormal: 'A trend is 6 consecutive points exactly moving strictly up or strictly down.',
    applications: 'Total Quality Management.',
    limitations: 'Controls cost heavily.',
    examPoints: '1-3s detects Random Error. 2-2s detects Systematic error.',
    viva: [
      { q: 'What is a Shift?', a: '6 consecutive points falling perfectly on one side of the mean.' }
    ],
    mcq: [
      { q: 'Which Westgard rule primarily indicates Random Error?', options: ['2-2s', '4-1s', '10x', 'R-4s'], answer: 3 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg'
    }
  }
];
