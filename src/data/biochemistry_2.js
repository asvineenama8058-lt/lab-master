export const biochemistryData2 = [
  {
    id: 'bio-totalprotein',
    title: 'Estimation of Serum Total Protein (Biuret Method)',
    isImportant: true,
    definition: 'Quantitative assay of total proteins (albumin and globulins) in serum.',
    principle: 'Cupric ions (Cu2+) in an alkaline medium interact specifically with peptide bonds of proteins to form a violet/purple-colored coordination complex. The intensity of the color is directly proportional to the number of peptide bonds present.',
    mechanism: 'Copper binds to peptide nitrogen groups in an alkaline pH causing an electron shift that absorbs light at 546 nm.',
    types: ['Colorimetric Peptide Reaction'],
    specimen: 'Serum avoids fibrinogen which is present in plasma.',
    reagents: [
      { component: 'Cupric Sulfate (CuSO4)', function: 'Provides Cu+2 ions for the complex.' },
      { component: 'NaOH / KOH', function: 'Creates massive alkaline environment.' },
      { component: 'Rochelle Salt (Na-K Tartrate)', function: 'Chelating agent preventing Cu+2 precipitation.' }
    ],
    equipment: ['Spectrophotometer', 'Water bath'],
    procedure: [
      'Take 3 tubes: Blank, Standard, Test.',
      'Add 1.0 ml Biuret Reagent to all.',
      'Add 20 µl D.W. (Blank), 20 µl Standard (S), and 20 µl Serum (T).',
      'Mix and incubate at 37°C for 10 minutes.',
      'Read absorbance at 546 nm.'
    ],
    observation: 'Formation of violet/purple color.',
    result: 'Serum Total Protein = (Abs Test / Abs Std) × 6 = g/dl.',
    interpretation: 'Hypoproteinemia involves liver disease/malnutrition. Hyperproteinemia occurs in multiple myeloma.',
    referenceRange: '6.0 - 8.3 g/dl',
    clinicalSignificance: 'General health indicator spanning liver synthetic function, kidney loss, and chronic inflammation.',
    sourcesOfError: ['Hemolysis falsely elevates results (Hb is a protein).'],
    precautions: ['Properly clear serum to avoid turbidity scatter.'],
    normalVsAbnormal: 'A/G ratio inversion typically flags pathology.',
    applications: 'Routine metabolic panels.',
    limitations: 'Insensitive to trace urine or CSF proteins.',
    examPoints: 'Requires at least two peptide bonds (a tripeptide) to produce color.',
    viva: [
      { q: 'What does Biuret specifically detect?', a: 'Peptide bonds.' },
      { q: 'Minimum requirement for positive Biuret?', a: 'At least two peptide bonds (tripeptide molecule).' },
      { q: 'Role of Rochelle salt?', a: 'Chelating agent preventing cupric hydroxide precipitation.' },
      { q: 'Two main serum proteins?', a: 'Albumin and Globulins.' },
      { q: 'What happens to protein in severe liver disease?', a: 'Decreases due to dropped albumin synthesis.' }
    ],
    mcq: [
      { q: 'Biuret method measures:', options: ['Amino acids', 'Peptide bonds', 'Lipoproteins', 'Disulfide bonds'], answer: 1 },
      { q: 'Color formed?', options: ['Yellow', 'Red', 'Violet/Purple', 'Green'], answer: 2 },
      { q: 'Metal ion involved?', options: ['Iron', 'Magnesium', 'Copper (Cu+2)', 'Calcium'], answer: 2 },
      { q: 'Provides alkaline pH?', options: ['HCl', 'NaOH or KOH', 'Acetic acid', 'Sulfuric acid'], answer: 1 },
      { q: 'Prevents copper precipitating?', options: ['Sodium chloride', 'Rochelle salt', 'Potassium Iodide', 'Lithium'], answer: 1 },
      { q: 'Minimum peptide bonds required?', options: ['One', 'Two', 'Ten', 'Fifty'], answer: 1 },
      { q: 'Normal Total Protein range?', options: ['1-3', '6.0-8.3 g/dl', '10-15', '15-40 mg'], answer: 1 },
      { q: 'Hemolysis affects assay by:', options: ['Lowering reading', 'Causing false elevation (Hb)', 'Precipitating Cu', 'No effect'], answer: 1 },
      { q: 'Which is NOT a normal serum protein?', options: ['Albumin', 'Globulin', 'Hemoglobin', 'Fibrinogen'], answer: 3 },
      { q: 'Absorbance ideally read at:', options: ['340 nm', '546 nm', '280 nm', '405 nm'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pipette_gallery.jpg/960px-Pipette_gallery.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Biuret_test.png/640px-Biuret_test.png'
    }
  },
  {
    id: 'bio-albumin',
    title: 'Estimation of Serum Albumin (BCG Method)',
    isImportant: false,
    definition: 'Specific measurement of albumin to assess liver synthesis and oncotic pressure.',
    principle: 'Bromocresol Green (BCG) strongly and specifically binds to albumin at an acidic pH (4.2). The binding shifts the color of the dye indicator from yellow-green to an intense blue-green complex. Absorbance is directly proportional to albumin concentration.',
    mechanism: 'Anion dye electrostatically bonds uniquely to albumin at specific isoelectric points.',
    types: ['Dye Binding Method'],
    specimen: 'Serum.',
    reagents: [
      { component: 'BCG Reagent (pH 4.2)', function: 'Acidic dye reacting instantly with albumin.' }
    ],
    equipment: ['Spectrophotometer'],
    procedure: [
      'Take 3 tubes: Blank, Standard, Test.',
      'Add 1000 µl of BCG reagent to all.',
      'Add 10 µl D.W. to Blank, 10 µl Standard to Standard, 10 µl Serum to Test.',
      'Mix and incubate at Room Temp for exactly 1 minute.',
      'Read absorbance at 630 nm.'
    ],
    observation: 'Immediate change to blue-green color.',
    result: 'Serum Albumin = (Abs Test / Abs Std) × 4 = g/dl.',
    interpretation: 'Hypoalbuminemia causes severe tissue edema due to lost oncotic pressure.',
    referenceRange: '3.5 - 5.2 g/dl',
    clinicalSignificance: 'Assesses chronic liver failure, malnutrition, and nephrotic syndrome.',
    sourcesOfError: ['A delay > 1 minute allows slow-reacting globulins to bind, falsely elevating results.'],
    precautions: ['Read quickly at 1 minute exactly.'],
    normalVsAbnormal: 'Globulins calculated by (Total Protein - Albumin).',
    applications: 'Liver function test panels.',
    limitations: 'BCG overestimates albumin at very low concentrations.',
    examPoints: 'BCG requires pH 4.2. Exact timing of 1 minute is crucial to avoid globulins.',
    viva: [
      { q: 'Dye used for Albumin estimation?', a: 'Bromocresol Green (BCG).' },
      { q: 'Reaction pH of BCG?', a: 'Acidic, pH 4.2.' },
      { q: 'Why read at exactly 1 minute?', a: 'Albumin binds rapidly. Globulins bind slowly over time.' },
      { q: 'Where is albumin synthesized?', a: 'Exclusively in the liver.' },
      { q: 'Significance of low albumin?', a: 'Edema, chronic liver failure, or kidney loss (Nephrotic Syndrome).' }
    ],
    mcq: [
      { q: 'Dye used for Serum Albumin?', options: ['Methyl Red', 'Bromocresol Green (BCG)', 'Phenol Red', 'Biuret'], answer: 1 },
      { q: 'pH of BCG reagent?', options: ['2.0', '4.2', '7.4', '10.5'], answer: 1 },
      { q: 'Color of Albumin-BCG complex?', options: ['Red', 'Yellow', 'Blue-Green', 'Purple'], answer: 2 },
      { q: 'Why read quickly (1 min)?', options: ['Color fades', 'Globulins begin to slowly react', 'Reagent evaporates', 'Tube melts'], answer: 1 },
      { q: 'Where is Albumin produced?', options: ['Kidneys', 'Spleen', 'Bone Marrow', 'Liver'], answer: 3 },
      { q: 'Normal reference range?', options: ['1-2', '3.5-5.2 g/dl', '6-8', '10-15'], answer: 1 },
      { q: 'Albumin maintains:', options: ['Blood pressure', 'Colloid oncotic pressure', 'Glucose', 'Bone density'], answer: 1 },
      { q: 'Condition massively depleting albumin via urine?', options: ['Liver cirrhosis', 'Nephrotic Syndrome', 'Gout', 'Anemia'], answer: 1 },
      { q: 'Formula for Globulins?', options: ['Alb minus Protein', 'Total Protein minus Albumin', 'Total Protein * Albumin', 'Cannot calculate'], answer: 1 },
      { q: 'Wavelength for BCG?', options: ['340', '520', '630', '405'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cristobal_Rojas_37a.JPG/960px-Cristobal_Rojas_37a.JPG'
    }
  },
  {
    id: 'bio-sgot',
    title: 'Estimation of SGOT / AST (Reitman-Frankel Method)',
    isImportant: true,
    definition: 'Assay of Aspartate Aminotransferase (AST) enzyme activity indicating tissue damage.',
    principle: 'AST transfers an amino group from L-Aspartate to Alpha-ketoglutarate forming Oxaloacetate. Oxaloacetate reacts with 2,4-DNPH to form a hydrazone, which turns deep brown/red in an alkaline medium (NaOH).',
    mechanism: 'Transamination forms an intermediate that chemically condenses with a phenylhydrazine dye.',
    types: ['End-point Colorimetric Enzymatic Method'],
    specimen: 'Unhemolyzed Serum.',
    reagents: [
      { component: 'AST Substrate', function: 'Provides L-Aspartate and Alpha-Ketoglutarate.' },
      { component: '2,4-DNPH Reagent', function: 'Reacts with Oxaloacetate forming color.' },
      { component: '0.4 N NaOH', function: 'Develops terminal brown/red color.' }
    ],
    equipment: ['Spectrophotometer', 'Water bath strictly at 37°C'],
    procedure: [
      'Incubate 0.5 ml AST substrate at 37°C for 5 mins.',
      'Add 100 µl serum, mix and incubate safely at 37°C for exactly 60 minutes.',
      'Add 0.5 ml 2,4-DNPH, mix and let stand at RT for 20 mins.',
      'Add 5 ml 0.4 N NaOH, wait 5 mins for color development.',
      'Read absorbance at 505 nm.'
    ],
    observation: 'Formation of deep brown/red color in alkaline tube.',
    result: 'SGOT Activity = U/L using a standard curve.',
    interpretation: 'Elevations typically correspond to liver or cardiac injury.',
    referenceRange: '5 - 40 U/L',
    clinicalSignificance: 'Marks hepatocellular necrosis (Hepatitis) and Myocardial Infarction.',
    sourcesOfError: ['Hemolysis violently elevates AST because RBCs store massive enzyme levels.'],
    precautions: ['Incubation of exactly 60 minutes is fundamental to valid kinetics.'],
    normalVsAbnormal: 'AST > ALT in alcoholic liver disease (De Ritis ratio usually >2).',
    applications: 'Liver/Cardiac Function Panels.',
    limitations: 'Labor intensive compared to automated UV kinetic methods (340nm).',
    examPoints: 'AST requires Pyridoxal-5-Phosphate (Vitamin B6) as coenzyme. Reaction forms oxaloacetate.',
    viva: [
      { q: 'SGOT stands for?', a: 'Serum Glutamic Oxaloacetic Transaminase.' },
      { q: 'Organs with highest AST?', a: 'Heart, Liver, Skeletal Muscle.' },
      { q: 'Why does hemolysis affect AST heavily?', a: 'RBCs contain high AST intrinsically; rupturing dumps it into serum.' },
      { q: 'Role of 2,4-DNPH?', a: 'Reacts with oxaloacetate forming a detectable hydrazone.' },
      { q: 'Disease causing elevated AST?', a: 'Myocardial Infarction and viral hepatitis.' }
    ],
    mcq: [
      { q: 'SGOT is also known as:', options: ['ALT', 'AST', 'ALP', 'GGT'], answer: 1 },
      { q: 'Two substrates for AST?', options: ['Alanine+aKG', 'Aspartate+aKG', 'Pyruvate+Glu', 'Tyrosine+aKG'], answer: 1 },
      { q: 'Product formed reacting with DNPH?', options: ['Pyruvate', 'Oxaloacetate', 'Glucose', 'Urea'], answer: 1 },
      { q: 'Color reagent in Reitman-Frankel?', options: ['Biuret', 'BCG', '2,4-DNPH', 'Phenol Red'], answer: 2 },
      { q: 'Alkaline medium for color development?', options: ['HCl', 'H2SO4', 'NaOH', 'Water'], answer: 2 },
      { q: 'Normal SGOT level?', options: ['5-40 U/L', '100-200', '1-5', '500+'], answer: 0 },
      { q: 'Tissue containing MOST AST?', options: ['Lungs', 'Heart', 'Brain', 'Skin'], answer: 1 },
      { q: 'Hemolysis causes SGOT levels to:', options: ['Decrease', 'Increase drastically', 'Remain same', 'Zero'], answer: 1 },
      { q: 'Incubation duration for AST?', options: ['10 mins', '30 mins', '60 mins', '2 hours'], answer: 2 },
      { q: 'Coenzyme required?', options: ['Vit B12', 'Pyridoxal-5-Phosphate (Vit B6)', 'Vit C', 'Biotin'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/H2O_2D_labelled.svg/960px-H2O_2D_labelled.svg.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tartrazine-3D-vdW.png/960px-Tartrazine-3D-vdW.png'
    }
  },
  {
    id: 'bio-lipid-chol',
    title: 'Estimation of Total Cholesterol (CHOD-PAP)',
    isImportant: true,
    definition: 'Quantitative estimation of overall circulating cholesterol for cardiovascular risk.',
    principle: 'Cholesterol esters are hydrolyzed by Cholesterol Esterase. Free cholesterol is oxidized by Cholesterol Oxidase (CHOD) generating H2O2. H2O2 + Phenol + 4-aminoantipyrine, catalyzed by Peroxidase (POD), yields a red Quinoneimine dye.',
    mechanism: 'De-esterification couples with dual enzymatic oxidation to generate a measurable terminal dye.',
    types: ['Enzymatic Colorimetric (CHOD-PAP)'],
    specimen: '10-12 hour Fasting Serum.',
    reagents: [
      { component: 'Esterase & CHOD', function: 'Substrate-specific enzymic unbinding and oxidation.' },
      { component: 'Peroxidase', function: 'Catalyzes dye synthesis.' }
    ],
    equipment: ['Spectrophotometer'],
    procedure: [
      'Take 3 tubes: B, S, T.',
      'Add 1000 µl working reagent to all.',
      'Add 10 µl D.W (B), 10 µl Std (S), 10 µl Serum (T).',
      'Mix and incubate exactly 10 min at 37°C.',
      'Measure absorbance at 505 nm.'
    ],
    observation: 'Light red/pink development.',
    result: 'Total Cholesterol = (Abs Test / Abs Std) × 200 = mg/dl.',
    interpretation: 'Elevated values strongly correlate to atherosclerosis risks.',
    referenceRange: 'Desirable: < 200 mg/dl | Borderline: 200-239 mg/dl',
    clinicalSignificance: 'Mandatory lipid profile marker for preventing coronary artery disease (CAD).',
    sourcesOfError: ['Non-fasting samples severely misrepresent true baseline.'],
    precautions: ['Strict 12-hour fast is crucial before blood collection.'],
    normalVsAbnormal: 'High cholesterol >240 indicates aggressive lifestyle or pharmacological interventions.',
    applications: 'Cardiology lipid panels.',
    limitations: 'High dose vitamin C heavily interferes with POD reaction.',
    examPoints: 'Atherosclerosis occurs in arterial walls. Esterase unbinds fatty acids.',
    viva: [
      { q: 'Function of Cholesterol Esterase?', a: 'Unbinds fatty acids to create free cholesterol for CHOD oxidation.' },
      { q: 'What is CHOD?', a: 'Cholesterol Oxidase.' },
      { q: 'Wavelength used?', a: '505 nm.' },
      { q: 'Hypercholesterolemia risk?', a: 'Atherosclerosis and CAD.' },
      { q: 'Does hemolysis affect results?', a: 'Yes, RBC membranes contain structural cholesterol.' }
    ],
    mcq: [
      { q: 'CHOD-PAP method estimates:', options: ['Glucose', 'Triglycerides', 'Total Cholesterol', 'Urea'], answer: 2 },
      { q: 'Enzyme freeing esterified cholesterol?', options: ['Esterase', 'Oxidase', 'Peroxidase', 'Lipase'], answer: 0 },
      { q: 'Colored dye formed at end?', options: ['Blue', 'Quinoneimine (Red/Pink)', 'Green', 'Yellow'], answer: 1 },
      { q: 'Desirable Total Cholesterol?', options: ['< 200 mg/dl', '> 240 mg/dl', '< 100 mg/dl', '250-300'], answer: 0 },
      { q: 'Hours of fasting recommended?', options: ['2 hours', '4 hours', '10-12 hours', 'None'], answer: 2 },
      { q: 'Cholesterol is a precursor for:', options: ['Proteins', 'Steroid hormones', 'Carbohydrates', 'Nucleic acids'], answer: 1 },
      { q: 'Standard concentration provided?', options: ['50', '100', '200 mg/dl', '500'], answer: 2 },
      { q: 'Endogenous cholesterol synthesized in:', options: ['Liver', 'Heart', 'Stomach', 'Bones'], answer: 0 },
      { q: 'Cholesterol builds up mainly in:', options: ['Capillaries', 'Veins', 'Arterial walls', 'Lymph'], answer: 2 },
      { q: 'H2O2 broken down by:', options: ['Oxidase', 'Esterase', 'Peroxidase', 'Catalase'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  }
];
