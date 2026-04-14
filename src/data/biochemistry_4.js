export const biochemistryData4 = [
  {
    id: 'bio-triglycerides',
    title: 'Estimation of Triglycerides (GPO-PAP)',
    isImportant: true,
    definition: 'Assay measuring circulating serum triglycerides.',
    principle: 'Lipoprotein lipase hydrolyzes triglycerides into glycerol and fatty acids. Glycerol kinase phosphorylates glycerol. Glycerol-3-phosphate oxidase (GPO) oxidizes it creating H2O2. H2O2 reacts with a dye to form a red chromogen.',
    mechanism: 'Enzymatic cascade culminating in colorimetric oxidation.',
    types: ['Enzymatic Colorimetric'],
    specimen: '12-hour Fasting Serum.',
    reagents: [
      { component: 'Lipase & Kinase', function: 'Hydrolyzes TG and phosphorylates glycerol.' },
      { component: 'GPO & POD', function: 'Oxidizes and creates dye.' }
    ],
    equipment: ['Spectrophotometer'],
    procedure: [
      'Mix 1.0 ml reagent with 10 µl serum.',
      'Incubate 10 minutes at 37°C.',
      'Read absorbance at 505 nm.'
    ],
    observation: 'Formation of red complex.',
    result: 'TG = Result in mg/dL.',
    interpretation: 'Elevated values indicate high risk for atherosclerosis and pancreatitis.',
    referenceRange: '< 150 mg/dL.',
    clinicalSignificance: 'Mandatory lipid profile component.',
    sourcesOfError: ['Free endogenous glycerol falsely elevates results.'],
    precautions: ['Patient strictly must fast 12 hours.'],
    normalVsAbnormal: 'Values > 500 mg/dL risk acute pancreatitis.',
    applications: 'Cardiology lipid panels.',
    limitations: 'Severe lipemia totally scatters light.',
    examPoints: 'GPO specifically oxidizes Glycerol-3-Phosphate.',
    viva: [
      { q: 'Why fast 12 hours?', a: 'To clear dietary chylomicrons.' }
    ],
    mcq: [
      { q: 'Primary enzyme breaking TG into glycerol?', options: ['Esterase', 'Lipase', 'Oxidase', 'Kinase'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  },
  {
    id: 'bio-hdl',
    title: 'Estimation of HDL & LDL Cholesterol',
    isImportant: true,
    definition: 'Specific measurement of high and low-density lipoproteins.',
    principle: 'For HDL, chylomicrons, VLDL, and LDL are precipitated using Phosphotungstic acid and MgCl2. After centrifugation, HDL remains in the clear supernatant and is measured using the CHOD-PAP method. LDL is typically calculated using the Friedewald formula.',
    mechanism: 'Selective polyanion precipitation of apoB-containing lipoproteins.',
    types: ['Precipitation & Calculation Method'],
    specimen: 'Fasting Serum.',
    reagents: [
      { component: 'Precipitating Reagent', function: 'Contains Phosphotungstic acid and MgCl2.' }
    ],
    equipment: ['Centrifuge', 'Spectrophotometer'],
    procedure: [
      'Mix exactly 200 µl serum with 200 µl precipitating reagent.',
      'Centrifuge at 3000 RPM for 10 minutes.',
      'Carefully collect the clear supernatant.',
      'Test supernatant strictly for cholesterol using CHOD-PAP.'
    ],
    observation: 'Supernatant entirely clear post-centrifugation.',
    result: 'HDL = Result × 2. LDL = Total Chol - HDL - (Triglyceride/5).',
    interpretation: 'High HDL is cardioprotective. High LDL causes plaque.',
    referenceRange: 'HDL: > 40 mg/dL. LDL: < 100 mg/dL.',
    clinicalSignificance: 'Separates protective from destructive lipids.',
    sourcesOfError: ['Friedewald formula is completely invalid if Triglycerides > 400 mg/dL.'],
    precautions: ['Centrifuge forcefully to pellet all LDL/VLDL.'],
    normalVsAbnormal: 'HDL > 60 is natively protective.',
    applications: 'Cardiology.',
    limitations: 'Direct LDL assays preferred if TG is high.',
    examPoints: 'VLDL is estimated as TG/5.',
    viva: [
      { q: 'What is Friedewald formula?', a: 'LDL = Total Chol - HDL - (TG/5).' }
    ],
    mcq: [
      { q: 'Reagent used to precipitate LDL/VLDL?', options: ['Acetic acid', 'Phosphotungstic acid + MgCl2', 'Biuret', 'Ethanol'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg'
    }
  }
];
