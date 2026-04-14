export const hematologyData3 = [
  {
    id: 'hem-aptt',
    title: 'Activated Partial Thromboplastin Time (APTT)',
    isImportant: true,
    definition: 'Specific laboratory test evaluating the Intrinsic and Common pathways of the coagulation cascade.',
    principle: 'Citrated plasma is incubated with an activator (e.g., Kaolin or silica) and partial thromboplastin (phospholipid without Tissue Factor) at 37°C. Calcium chloride is then forcibly added to trigger the cascade. The time taken for fibrin formation identifies deficiencies in Factors XII, XI, IX, VIII (Intrinsic).',
    mechanism: 'The contact activator maximally activates Factor XII. Phospholipid provides the structural surface for Factor complex assembly. Calcium initiates the chain reaction to Thrombin.',
    types: ['Manual Tilt Tube', 'Automated Photo-optical'],
    specimen: 'Citrated Plasma (3.2% Sodium Citrate) strictly at a 9:1 blood-to-anticoagulant ratio.',
    reagents: [
      { component: 'APTT Reagent', function: 'Contains contact activator (Kaolin) and Phospholipid (Cephalin).' },
      { component: '0.025 M Calcium Chloride', function: 'Re-calcifies the plasma to initiate clotting.' }
    ],
    equipment: ['Water bath at 37°C', 'Stopwatch'],
    procedure: [
      'Incubate plasma and APTT reagent separately at 37°C.',
      'Mix 0.1 ml plasma with 0.1 ml APTT reagent in a glass tube.',
      'Incubate the mixture for exactly 3 to 5 minutes at 37°C to allow full contact activation.',
      'Forcibly add 0.1 ml pre-warmed Calcium Chloride and start stopwatch immediately.',
      'Observe for fibrin web formation by gentle tilting.'
    ],
    observation: 'Liquid plasma instantly solidifies into a gelatinous clot upon calcium addition.',
    result: 'APTT reported in seconds compared to a normal control.',
    interpretation: 'Prolonged APTT with normal PT implies a precise defect in the Intrinsic pathway (Hemophilia A/B).',
    referenceRange: 'Normal: 25 - 35 seconds.',
    clinicalSignificance: 'Mandatory test used to monitor Unfractionated Heparin therapy and diagnose Hemophilia.',
    sourcesOfError: ['Under-filling the citrate tube artificially prolongs APTT falsely due to excess citrate chelating the added test calcium.'],
    precautions: ['Blood must be strictly centrifuged to obtain platelet-poor plasma (PPP), as platelets contain endogenous phospholipids that alter results.'],
    normalVsAbnormal: 'A bleeding patient with normal PT but heavily prolonged APTT typically has Factor VIII deficiency.',
    applications: 'Pre-surgical screening, Heparin titration protocol.',
    limitations: 'Highly sensitive to collection trauma resulting in tissue factor contamination.',
    examPoints: 'Monitors Heparin. Tests Intrinsic pathway. Normal range 25-35s. Uses Kaolin and Phospholipid.',
    viva: [
      { q: 'Which pathways does APTT specifically monitor?', a: 'The Intrinsic and Common pathways.' },
      { q: 'Why is it called PARTIAL thromboplastin?', a: 'It lacks Tissue Factor. It only contains the pure phospholipid component (cephalin).' },
      { q: 'Which major anticoagulant drug is rigorously monitored using APTT?', a: 'Standard Unfractionated Heparin (IV).' },
      { q: 'Why do we incubate the plasma and APTT reagent for 3-5 mins before adding calcium?', a: 'To allow maximum activation of Factor XII (contact phase) by the kaolin/silica activator.' }
    ],
    mcq: [
      { q: 'APTT specifically evaluates which coagulation pathway?', options: ['Extrinsic', 'Intrinsic and Common', 'Platelet plug', 'Fibrinolysis'], answer: 1 },
      { q: 'What activator is commonly used in APTT reagents to trigger Factor XII?', options: ['Tissue Factor', 'Thrombin', 'Kaolin or Silica', 'Fibrin'], answer: 2 },
      { q: 'APTT strongly monitors the therapeutic dose of which drug?', options: ['Warfarin', 'Aspirin', 'Clopidogrel', 'Unfractionated Heparin'], answer: 3 },
      { q: 'Which clinical condition classically brutally prolongs APTT but leaves PT completely normal?', options: ['Vitamin K deficiency', 'Liver failure', 'Hemophilia A', 'Warfarin toxicity'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/FreshFrozenPlasma.JPG',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Lab_glassware.jpg'
    }
  },
  {
    id: 'hem-osmotic',
    title: 'Osmotic Fragility Test (OFT)',
    isImportant: true,
    definition: 'Diagnostic test measuring the exact resistance or susceptibility of red blood cells to lysis when exposed to increasingly hypotonic saline solutions.',
    principle: 'Erythrocytes are placed in graded concentrations of hypotonic NaCl (from 0.85% down to 0.10%). In hypotonic solutions, water violently enters the RBCs via osmosis. Normal biconcave RBCs swell significantly before bursting. Spherocytes (already spherical) cannot expand further and burst rapidly at higher saline concentrations.',
    mechanism: 'Osmotic pressure differential causes water influx, breaching the physical structural limits of the red cell lipid membrane.',
    types: ['Standard Tube Dilution Method'],
    specimen: 'Heparinized venous blood.',
    reagents: [
      { component: '1% Stock NaCl Solution', function: 'Used to prepare graded serial dilutions covering 0.85% to 0.10%.' }
    ],
    equipment: ['12 Test tubes sequentially arranged', 'Spectrophotometer (540nm)'],
    procedure: [
      'Prepare 12 tubes with decreasing NaCl concentrations (e.g., 0.85, 0.75, 0.65, 0.50, 0.45, 0.40... 0.10%).',
      'Add exactly 1 drop of well-mixed fresh heparinized blood to each tube.',
      'Mix carefully and incubate at room temperature for 30 minutes.',
      'Centrifuge the tubes to firmly pellet intact RBCs at the bottom.',
      'Assess the supernatant precisely for red color visually or read absorbance at 540nm to plot a fragility curve.'
    ],
    observation: 'Tubes with 0.85% NaCl remain clear (intact cells). Tubes at 0.45% show faint red (initial lysis). Tubes at 0.10% are completely ruby red (total lysis).',
    result: 'Report concentration where Initial Lysis begins, and where Complete Lysis concludes.',
    interpretation: 'Increased fragility means cells burst easily (Spherocytosis). Decreased fragility means cells resist bursting (Thalassemia/Sickle).',
    referenceRange: 'Normal Initial Lysis: 0.45% NaCl. Normal Complete Lysis: 0.30% NaCl.',
    clinicalSignificance: 'Mandatory confirmatory test unequivocally diagnosing Hereditary Spherocytosis.',
    sourcesOfError: ['Using old blood alters membrane stability naturally.'],
    precautions: ['Blood must strictly be maximally fresh. Incubated OFT (24h at 37C) massively increases test sensitivity.'],
    normalVsAbnormal: 'Spherocytes structurally lack surface-area-to-volume ratio, bursting prematurely at 0.60%.',
    applications: 'Hemolytic anemia differential diagnosis.',
    limitations: 'Test is highly manual, tedious, and time consuming.',
    examPoints: 'Spherocytosis = INCREASED fragility. Thalassemia/Iron Deficiency = DECREASED fragility.',
    viva: [
      { q: 'Why do Spherocytes heavily show increased fragility?', a: 'They are already spherical. When water enters, they have absolutely zero extra surface area to safely expand, so they violently rupture immediately.' },
      { q: 'Why do Target cells (Thalassemia) show severely decreased fragility?', a: 'They possess massive excess membrane relative to their hemoglobin volume, allowing them to swell massively before bursting.' },
      { q: 'At what exact NaCl concentration does normal blood naturally begin to hemolyze?', a: 'Approximately 0.45%.' }
    ],
    mcq: [
      { q: 'What strongly dictates the osmotic fragility of a red blood cell?', options: ['Hemoglobin type', 'Number of mitochondria', 'Surface area to volume ratio', 'Nuclear size'], answer: 2 },
      { q: 'Which disease classically exhibits heavily increased osmotic fragility?', options: ['Iron Deficiency Anemia', 'Thalassemia', 'Sickle Cell Trait', 'Hereditary Spherocytosis'], answer: 3 },
      { q: 'Normal Complete Lysis routinely occurs at what precise saline concentration?', options: ['0.85%', '0.65%', '0.45%', '0.30%'], answer: 3 },
      { q: 'In Osmotic Fragility, the 0.85% NaCl tube predictably serves as:', options: ['The completely totally lysed tube', 'The blank/Negative Control (no lysis)', 'The buffer', 'The positive control'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  }
];
