export const biochemistryData1 = [
  {
    id: 'bio-glucose',
    title: 'Estimation of Blood Glucose (GOD-POD Method)',
    isImportant: true,
    definition: 'Quantitative estimation of glucose concentration in the blood using specific enzymatic reactions.',
    principle: 'Glucose is oxidized by Glucose Oxidase (GOD) yielding gluconic acid and H2O2. H2O2 reacts with phenol and 4-aminoantipyrine in the presence of Peroxidase (POD) to form a red quinoneimine dye. The intensity is proportional to glucose concentration.',
    mechanism: 'Enzymatic oxidation couples sequentially with peroxidase-catalyzed chromogenic structural dye formation.',
    types: ['Enzymatic Colorimetric Method'],
    specimen: 'Plasma drawn into Sodium Fluoride / Potassium Oxalate tubes.',
    reagents: [
      { component: 'Glucose Oxidase (GOD)', function: 'Oxidizes purely Beta-D-glucose.' },
      { component: 'Peroxidase (POD)', function: 'Catalyzes dye coupling using H2O2.' },
      { component: '4-Aminoantipyrine & Phenol', function: 'Chromogenic coupling agents.' }
    ],
    equipment: ['Spectrophotometer', 'Micropipettes', 'Water bath at 37°C', 'Test tubes'],
    procedure: [
      'Assemble exactly three tubes marked Blank (B), Standard (S), Test (T).',
      'Add 1000 µl Working Reagent into all.',
      'Add 10 µl distilled water to B, 10 µl standard to S, and 10 µl plasma into Test.',
      'Mix thoroughly uniformly.',
      'Incubate exactly 10 minutes at 37°C.',
      'Read absorbance at 505nm against Blank.'
    ],
    observation: 'Bright pink/red color forms.',
    result: 'Blood Glucose = (Abs Test / Abs Std) * Standard Conc = mg/dl.',
    interpretation: 'Levels > 126 mg/dL fasting indicates Diabetes Mellitus.',
    referenceRange: 'Fasting: 70 - 110 mg/dl | Post-Prandial: < 140 mg/dl',
    clinicalSignificance: 'Mandatory for diabetes screening, monitoring, and hypoglycemic emergencies.',
    sourcesOfError: ['Using plain tubes instead of fluoride allows glycolysis, artificially dropping values.'],
    precautions: ['Fluoride inhibits enolase specifically to stop glycolysis.', 'Strict pipetting is required.'],
    normalVsAbnormal: 'Normal patients regulate glucose effectively via insulin.',
    applications: 'Diabetes diagnostics.',
    limitations: 'Severely hemolyzed or icteric samples interfere with colorimetry.',
    examPoints: 'Fluoride tube is mandatory. Enzyme is highly specific (GOD).',
    viva: [
      { q: 'Why use Sodium Fluoride?', a: 'Fluoride inhibits enolase, preventing RBCs from consuming glucose via glycolysis.' },
      { q: 'What enzymes are used?', a: 'Glucose oxidase (GOD) and Peroxidase (POD).' },
      { q: 'What wavelength is used?', a: '505 nm (Green filter).' },
      { q: 'Diagnostic value of fasting > 126 mg/dl?', a: 'Strongly indicates Diabetes Mellitus.' },
      { q: 'Why is GOD-POD superior to Folin-Wu?', a: 'Highly specific for glucose, won\'t react with other reducing sugars.' }
    ],
    mcq: [
      { q: 'Glucose oxidase converts glucose into?', options: ['Fructose', 'Gluconic acid & H2O2', 'Ethanol', 'Lactic acid'], answer: 1 },
      { q: 'What acts as the oxygen acceptor for dye?', options: ['Sodium fluoride', 'Phenol & 4-aminoantipyrine', 'NAD+', 'Hexokinase'], answer: 1 },
      { q: 'Best anticoagulant for blood glucose?', options: ['EDTA', 'Sodium Fluoride + Potassium Oxalate', 'Heparin', 'Citrate'], answer: 1 },
      { q: 'Normal FBS range?', options: ['40-60', '70-110 mg/dl', '120-160', '200+'], answer: 1 },
      { q: 'Step catalyzed by Peroxidase?', options: ['Glucose to H2O2', 'H2O2 reacting with dye precursors', 'Lysis of RBCs', 'Stoppage of glycolysis'], answer: 1 },
      { q: 'Fluoride preserves glucose by inhibiting:', options: ['Hexokinase', 'Amylase', 'Enolase', 'Phosphofructokinase'], answer: 2 },
      { q: 'Random blood sugar indicative of diabetes?', options: ['>100', '>140', '>200 mg/dl', '>50'], answer: 2 },
      { q: 'Formula uses Absorbance of Test divided by:', options: ['Blank', '100', 'Absorbance of Standard', 'Standard Concentration'], answer: 2 },
      { q: 'Wavelength for Quinoneimine dye?', options: ['340', '505 nm', '630', '450'], answer: 1 },
      { q: 'Unlike GOD-POD, Benedict qualitative reacts with:', options: ['Only Glucose', 'Only Sucrose', 'All reducing substances', 'Only Proteins'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AutoColorimeter.jpg/960px-AutoColorimeter.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'bio-urea',
    title: 'Estimation of Blood Urea (DAM Method)',
    isImportant: true,
    definition: 'Quantitative estimation of blood urea nitrogen to assess renal function.',
    principle: 'Diacetyl monoxime (DAM) reacts with urea in acidic conditions (sulfuric/phosphoric acid) with an oxidizing agent (thiosemicarbazide and ferric ions) to form a pink colored complex (diazine). The intensity is proportional to urea concentration.',
    mechanism: 'Urea + DAM -> Pink Diazine derivative (heat/acid catalyzed).',
    types: ['Colorimetric End-Point Method'],
    specimen: 'Serum or Heparinized Plasma.',
    reagents: [
      { component: 'DAM Reagent', function: 'Reacts directly with urea to form diazine.' },
      { component: 'Acid Reagent', function: 'Provides low pH necessary for condensation.' },
      { component: 'Ferric Ions', function: 'Oxidizing agent catalyst/color enhancer.' }
    ],
    equipment: ['Spectrophotometer', 'Boiling water bath', 'Test tubes'],
    procedure: [
      'Take 3 tubes: Blank (B), Standard (S), Test (T).',
      'Add 10 µl distilled water (B), 10 µl standard (S), and 10 µl serum (T).',
      'Add 1000 µl acid reagent to all.',
      'Add 1000 µl DAM reagent to all and mix.',
      'Incubate in boiling water bath strictly for 10 minutes.',
      'Cool under tap water and read at 520 nm.'
    ],
    observation: 'Distinct pink color development.',
    result: 'Blood Urea = (Abs Test / Abs Std) × 30 = mg/dl.',
    interpretation: 'Elevated values indicate renal failure or high protein breakdown.',
    referenceRange: '15 - 40 mg/dl',
    clinicalSignificance: 'Urea is the end product of protein metabolism. High levels indicate impaired glomerular filtration rate (GFR).',
    sourcesOfError: ['Over-boiling degrades complex.', 'Ammonium heparin causes false elevations.'],
    precautions: ['Boiling time must be exact (10m).', 'Cool immediately to arrest reaction.'],
    normalVsAbnormal: 'Abnormal: >40 mg/dl (Uremia).',
    applications: 'Renal function panels.',
    limitations: 'Less specific than enzymatic Urease methods.',
    examPoints: 'Requires physical boiling. BUN = Urea / 2.14.',
    viva: [
      { q: 'End product of protein metabolism?', a: 'Urea, formed in the liver via the Urea Cycle.' },
      { q: 'Why is DAM non-enzymatic?', a: 'Relies on chemical condensation, not urease.' },
      { q: 'Elevated blood urea signifies?', a: 'Renal failure, dehydration, high protein intake.' },
      { q: 'Why cool immediately?', a: 'Pink complex is heat-labile and fades.' },
      { q: 'What is BUN?', a: 'Blood Urea Nitrogen.' }
    ],
    mcq: [
      { q: 'What does DAM stand for?', options: ['Dimethyl Acetic', 'Diacetyl monoxime', 'Direct Amino Methane', 'Diamine oxidase'], answer: 1 },
      { q: 'Colored complex formed?', options: ['Blue', 'Green', 'Pink', 'Yellow'], answer: 2 },
      { q: 'Reaction requires what physical step?', options: ['Freezing', 'Boiling water bath for 10 mins', 'Incubation at 37°C for 24h', 'UV Light exposure'], answer: 1 },
      { q: 'Absorbance read at:', options: ['340 nm', '405 nm', '520 nm', '630 nm'], answer: 2 },
      { q: 'Normal level:', options: ['5-10', '15-40 mg/dl', '80-120', '2-6'], answer: 1 },
      { q: 'Where is Urea synthesized?', options: ['Kidneys', 'Stomach', 'Liver', 'Spleen'], answer: 2 },
      { q: 'High level in blood termed:', options: ['Uremia', 'Glycosuria', 'Proteinuria', 'Hypernatremia'], answer: 0 },
      { q: 'Formula for BUN to Urea?', options: ['BUN x 2.14', 'BUN / 2.14', 'BUN x 10', 'BUN x 0.5'], answer: 0 },
      { q: 'Enzymatic method uses:', options: ['Catalase', 'Amylase', 'Urease', 'Lipase'], answer: 2 },
      { q: 'Anticoagulant causing false elevated urea?', options: ['EDTA', 'Ammonium heparin', 'Sodium citrate', 'Lithium heparin'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/H2O_2D_labelled.svg/960px-H2O_2D_labelled.svg.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ammonia-2D.svg/960px-Ammonia-2D.svg.png'
    }
  },
  {
    id: 'bio-creatinine',
    title: 'Estimation of Serum Creatinine (Jaffe\'s Reaction)',
    isImportant: true,
    definition: 'Test used to estimate GFR using the muscle waste product creatinine.',
    principle: 'Creatinine in serum reacts with picric acid in an alkaline medium (Sodium Hydroxide) to form an orange-red compound (Creatinine picrate complex). Absorbance is proportional to concentration.',
    mechanism: 'Creatinine + Picric Acid -> Creatinine Picrate (Alkaline pH).',
    types: ['End-point colorimetric', 'Kinetic Jaffe'],
    specimen: 'Serum.',
    reagents: [
      { component: 'Picric Acid Reagent', function: 'Chromogenic binding agent.' },
      { component: 'NaOH Buffer', function: 'Provides alkaline medium for picrate formation.' }
    ],
    equipment: ['Spectrophotometer', 'Micropipettes'],
    procedure: [
      'Take 3 tubes: Blank, Standard, Test.',
      'Add 1 ml alkaline picrate reagent to all.',
      'Add 100 µl D.W. to Blank, 100 µl Std to Standard, 100 µl Serum to Test.',
      'Mix and incubate at Room Temperature for exactly 15 minutes.',
      'Read absorbance at 520 nm.'
    ],
    observation: 'Development of orange-red color.',
    result: 'Serum Creatinine = (Abs Test / Abs Std) × 2 = mg/dl.',
    interpretation: 'Elevated levels directly indicate severely reduced kidney filtration.',
    referenceRange: 'Male: 0.7-1.4 mg/dl | Female: 0.6-1.2 mg/dl',
    clinicalSignificance: 'Gold standard endogenous biomarker for tracking kidney failure and computing GFR.',
    sourcesOfError: ['Glucose and Vitamin C act as non-creatinine chromogens.'],
    precautions: ['Use kinetic method to bypass slow chromogens.', 'Rigid timing in end-point.'],
    normalVsAbnormal: 'Elevated >1.5 mg/dl is abnormal.',
    applications: 'Renal panels, pre-CT scan clearance.',
    limitations: 'Overestimated in severe hyperbilirubinemia.',
    examPoints: 'Picric acid + NaOH = Jaffe reagent.',
    viva: [
      { q: 'What is creatinine?', a: 'Metabolic waste product of muscle creatine phosphate.' },
      { q: 'Why is it a better marker than urea?', a: 'Doesn\'t fluctuate with diet; purely filtered.' },
      { q: 'What is Jaffe\'s reaction?', a: 'Creatinine + alkaline picrate forming orange-red complex.' },
      { q: 'What are non-creatinine chromogens?', a: 'Glucose, ascorbic acid reacting with picric acid falsely elevating results.' },
      { q: 'Why Kinetic Jaffe preferred?', a: 'Measures actively between 30 and 90 seconds, avoiding slow interferents.' }
    ],
    mcq: [
      { q: 'Jaffe method estimates:', options: ['Urea', 'Uric Acid', 'Glucose', 'Creatinine'], answer: 3 },
      { q: 'Main reagent is:', options: ['Diacetyl monoxime', 'Picric Acid', 'Biuret reagent', 'Phosphotungstic acid'], answer: 1 },
      { q: 'Reaction requires what pH?', options: ['Acidic', 'Neutral', 'Alkaline (NaOH)', 'Pure Water'], answer: 2 },
      { q: 'Color formed?', options: ['Blue', 'Purple', 'Orange-Red', 'Green'], answer: 2 },
      { q: 'Creatinine is waste from:', options: ['Liver protein', 'Muscle creatine phosphate', 'RBC destruction', 'Brain'], answer: 1 },
      { q: 'Normal male level:', options: ['0.7-1.4 mg/dl', '5-10', '15-40', '0.1-0.5'], answer: 0 },
      { q: 'Common non-creatinine chromogen?', options: ['Sodium', 'Glucose and Ascorbic Acid', 'Potassium', 'Calcium'], answer: 1 },
      { q: 'If GFR drops rapidly, serum creatinine will:', options: ['Decrease', 'Increase', 'Remain unchanged', 'Turn urine blue'], answer: 1 },
      { q: 'Wavelength used?', options: ['340 nm', '520 nm', '630 nm', '280 nm'], answer: 1 },
      { q: 'Kinetic Jaffe measures at what intervals?', options: ['1h and 2h', '10s and 20s', '30s and 90s', '10m and 15m'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Sample_vs._Target_Distribution.png'
    }
  },
  {
    id: 'bio-uricacid',
    title: 'Estimation of Serum Uric Acid (Uricase Method)',
    isImportant: false,
    definition: 'Quantitative estimation of uric acid to evaluate gout and renal calculi.',
    principle: 'Uricase enzyme oxidizes uric acid to allantoin and H2O2. H2O2 reacts with a chromogen in the presence of peroxidase yielding a red-colored compound. Absorbance is proportional to uric acid concentration.',
    mechanism: 'Uric Acid + Uricase -> Allantoin + H2O2. H2O2 + Phenol -> Red Dye.',
    types: ['Enzymatic Colorimetric Method'],
    specimen: 'Serum (avoid EDTA for enzymatic methods as it may interfere).',
    reagents: [
      { component: 'Uricase', function: 'Specifically oxidizes uric acid into soluble allantoin.' },
      { component: 'Peroxidase', function: 'Catalyzes chromogenic reaction.' }
    ],
    equipment: ['Spectrophotometer (520nm)', '37°C Incubator'],
    procedure: [
      'Take 3 tubes: Blank, Standard, Test.',
      'Add 1.0 ml working reagent to all.',
      'Add 25 µl D.W. (B), Standard (S), and Serum (T).',
      'Mix and incubate for 10 minutes at 37°C.',
      'Read absorbance at 520 nm.'
    ],
    observation: 'Red compound formation.',
    result: 'Serum Uric Acid = (Abs Test / Abs Std) × 6 = mg/dl.',
    interpretation: 'Hyperuricemia causes Gout and kidney stones.',
    referenceRange: 'Male: 3.4-7.0 mg/dl | Female: 2.4-6.0 mg/dl',
    clinicalSignificance: 'Tracks purine metabolism disorders and massive cellular breakdown (tumor lysis syndrome).',
    sourcesOfError: ['Highly lipemic samples scatter light.'],
    precautions: ['Do not use serum with crystals; store properly.'],
    normalVsAbnormal: 'Elevations typically >7.0 result in urate crystal tissue deposition.',
    applications: 'Gout diagnostics.',
    limitations: 'Classical Caraway method suffers from ascorbic acid interference.',
    examPoints: 'Uric acid is purine waste. Uricase converts it to allantoin.',
    viva: [
      { q: 'What is uric acid?', a: 'End product of purine (adenine, guanine) metabolism.' },
      { q: 'What disease is caused by high serum uric acid?', a: 'Gout, causing monosodium urate precipitation in joints.' },
      { q: 'What enzyme catalyzes the test?', a: 'Uricase.' },
      { q: 'Products of Uricase reaction?', a: 'Allantoin and Hydrogen Peroxide.' },
      { q: 'Food increasing uric acid?', a: 'Purine-rich foods like red meat and liver.' }
    ],
    mcq: [
      { q: 'Uric acid is end product of which metabolism?', options: ['Carbs', 'Proteins', 'Purines', 'Pyrimidines'], answer: 2 },
      { q: 'Disease hallmarked by elevated uric acid?', options: ['Rheumatoid', 'Osteoarthritis', 'Gout', 'Rickets'], answer: 2 },
      { q: 'Uricase converts uric acid to:', options: ['Urea', 'Allantoin', 'Ammonia', 'Creatinine'], answer: 1 },
      { q: 'Classical Caraway method utilized what acid?', options: ['Picric', 'Glacial acetic', 'Phosphotungstic acid', 'Sulfuric'], answer: 2 },
      { q: 'Color in enzymatic Uricase-POD method?', options: ['Blue', 'Pink/Red', 'Yellow', 'Green'], answer: 1 },
      { q: 'Purine bases leading to uric acid?', options: ['Cytosine & Thymine', 'Adenine & Guanine', 'Uracil', 'Choline'], answer: 1 },
      { q: 'Normal range for males?', options: ['0.1-0.5', '3.4-7.0', '10-20', '30-40'], answer: 1 },
      { q: 'To prevent uric acid crystallization in tubes:', options: ['Freeze immediately', 'Store at room temperature', 'Boil', 'Add acid'], answer: 1 },
      { q: 'Most uric acid is excreted via:', options: ['Sweat', 'Feces', 'Lungs', 'Kidneys (Urine)'], answer: 3 },
      { q: 'Uricase reaction occurs optimally at?', options: ['4°C', '25°C', '37°C', '56°C'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Wasserstoffperoxid.svg/960px-Wasserstoffperoxid.svg.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Breast_invasive_scirrhous_carcinoma_histopathology_%281%29.jpg'
    }
  }
];
