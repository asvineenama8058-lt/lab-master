export const biochemistryData6 = [
  {
    id: 'bio-calcium',
    title: 'Estimation of Serum Calcium (Arsenazo III Method)',
    isImportant: true,
    definition: 'Quantitative estimation of total calcium in serum.',
    principle: 'At a neutral pH, Calcium ions bind specifically to Arsenazo III to form a blue-purple complex. The intensity of the color is directly proportional to the calcium concentration.',
    mechanism: 'Direct colorimetric metal ion chelation.',
    types: ['Arsenazo III Method', 'OCPC Method'],
    specimen: 'Serum or Lithium Heparin plasma. NOT EDTA.',
    reagents: [
      { component: 'Arsenazo III Reagent', function: 'Binds Ca+2 specifically without interfering with Magnesium.' }
    ],
    equipment: ['Spectrophotometer'],
    procedure: [
      'Mix 1.0 ml reagent with 10 µl serum.',
      'Incubate at room temperature for 1 minute.',
      'Read absorbance at 650 nm.'
    ],
    observation: 'Purple/blue color formation.',
    result: 'Calcium = Result in mg/dL.',
    interpretation: 'Hypercalcemia usually implies Hyperparathyroidism or malignancy.',
    referenceRange: '8.5 - 10.5 mg/dL.',
    clinicalSignificance: 'Evaluates bone disease and parathyroid function.',
    sourcesOfError: ['Using EDTA plasma natively binds all calcium, giving a zero result.'],
    precautions: ['Never use EDTA, Citrate, or Oxalate tubes.'],
    normalVsAbnormal: 'Values < 7.0 Mg/dL risk tetany.',
    applications: 'Electrolyte panels.',
    limitations: 'Measures TOTAL calcium, not biologically active ionized calcium.',
    examPoints: 'EDTA is strictly forbidden. Arsenazo does not react with Magnesium.',
    viva: [
      { q: 'Why is EDTA forbidden?', a: 'EDTA chelates Native Calcium completely.' }
    ],
    mcq: [
      { q: 'Dye specifically used for Serum Calcium?', options: ['Arsenazo III', 'Biuret', 'Diacetyl monoxime', 'GPO-PAP'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  },
  {
    id: 'bio-crcl',
    title: 'Creatinine Clearance Test',
    isImportant: true,
    definition: 'Test evaluating Glomerular Filtration Rate (GFR) precisely.',
    principle: 'Measures how completely the kidneys clear creatinine from the blood over exactly 24 hours. Compares urine creatinine, serum creatinine, and total urine volume to calculate GFR.',
    mechanism: 'Physiological clearance calculation.',
    types: ['24-Hour Urine Collection Protocol'],
    specimen: '24-hour pooled urine AND single serum sample.',
    reagents: [
      { component: 'Jaffe Reagents', function: 'Used to measure both serum and urine creatinine.' }
    ],
    equipment: ['24-hour urine container', 'Spectrophotometer'],
    procedure: [
      'Patient discards first morning void.',
      'Collects ALL urine for exactly 24 hours.',
      'Measure Total Urine Volume in ml.',
      'Measure Serum Creatinine (S) and Urine Creatinine (U).',
      'Calculate (U × V) / (S × 1440).'
    ],
    observation: 'N/A.',
    result: 'Reported as ml/min. Normal adult is approx 90-120 ml/min.',
    interpretation: 'Direct functional measurement of working nephrons.',
    referenceRange: '90 - 120 ml/min.',
    clinicalSignificance: 'Mandatory for chronic kidney disease staging.',
    sourcesOfError: ['Incomplete 24-hour collection entirely ruins the math.'],
    precautions: ['Ensure patient understands the exact 24h collection rule.'],
    normalVsAbnormal: '< 15 ml/min indicates terminal renal failure.',
    applications: 'Nephrology.',
    limitations: 'Requires heavy patient compliance.',
    examPoints: 'Formula is U × V / S. V is volume in ml per minute.',
    viva: [
      { q: 'Formula for clearance?', a: 'UV/S where V is ml/min.' }
    ],
    mcq: [
      { q: 'Creatinine clearance estimates:', options: ['Liver failure', 'GFR', 'Cardiac output', 'Tidal volume'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg'
    }
  }
];
