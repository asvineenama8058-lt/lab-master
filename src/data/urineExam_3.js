export const urineExamData3 = [
  {
    id: 'urn-rothera',
    title: 'Rothera\'s Test for Ketone Bodies',
    isImportant: true,
    definition: 'Chemical test used to detect acetone and acetoacetic acid in the urine.',
    principle: 'In the presence of ammonia, acetoacetic acid and acetone react with sodium nitroprusside to form a purple-colored complex.',
    mechanism: 'Complex formation with alkaline nitroprusside.',
    types: ['Qualitative Chemical Test'],
    specimen: 'Fresh Urine (acetone is volatile).',
    reagents: [
      { component: 'Rothera\'s Mixture', function: 'Contains Sodium Nitroprusside and Ammonium Sulfate.' },
      { component: 'Liquor Ammonia (Strong)', function: 'Provides alkaline environment.' }
    ],
    equipment: ['Test tubes'],
    procedure: [
      'Take 5 ml of urine in a test tube.',
      'Saturate the urine with Rothera\'s mixture (ammonium sulfate) by shaking well.',
      'Add 1 ml of strong liquor ammonia carefully along the side of the tube to form a layer.',
      'Observe the interface (ring) for color change.'
    ],
    observation: 'Appearance of a purple or permanganate-colored ring at the junction of the two liquids.',
    result: 'Purple ring = Positive for Ketone bodies.',
    interpretation: 'A positive result indicates Ketonuria, common in diabetic ketoacidosis or starvation.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Critical marker for monitoring uncontrolled Diabetes Mellitus and identifying metabolic acidosis.',
    sourcesOfError: ['Using old urine (acetone evaporates).', 'False positive from drugs containing sulfhydryl groups (e.g., Captopril).'],
    precautions: ['Always use a fresh sample.', 'Read the result exactly at 3-5 minutes.'],
    normalVsAbnormal: 'A "Positive" result in a diabetic patient is a medical emergency.',
    applications: 'Emergency triage and diabetic monitoring.',
    limitations: 'Does not detect beta-hydroxybutyrate (the most common ketone in early DKA).',
    examPoints: 'Detects: Acetone & Acetoacetic acid. Indicator: Sodium Nitroprusside. Result: Purple Ring.',
    viva: [
      { q: 'Which ketone bodies are detected by Rothera\'s test?', a: 'Acetone and Acetoacetic acid.' },
      { q: 'What is the function of ammonium sulfate in the test?', a: 'It saturates the urine, making the reaction more sensitive by increasing the concentration of reactants at the interface.' }
    ],
    mcq: [
      { q: 'Indicator used in Rothera\'s test is?', options: ['Ferric chloride', 'Sodium Nitroprusside', 'Copper sulfate', 'Barium chloride'], answer: 1 },
      { q: 'What color ring indicates a positive ketone test?', options: ['Yellow', 'Green', 'Purple/Permanganate', 'Brick Red'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'urn-gerhardt',
    title: 'Gerhardt\'s Ferric Chloride Test',
    isImportant: false,
    definition: 'Specific chemical test for acetoacetic acid in the urine.',
    principle: 'Ferric chloride reacts with acetoacetic acid to form a wine-red or bordeaux-red color. Unlike Rothera\'s, it does not detect acetone.',
    mechanism: 'Complexation with ferric ions.',
    types: ['Qualitative Test'],
    specimen: 'Urine.',
    reagents: [{ component: '10% Ferric Chloride solution', function: 'Color forming reagent.' }],
    equipment: ['Test tubes'],
    procedure: [
      'Take 5 ml of urine in a tube.',
      'Add ferric chloride solution drop by drop until no more precipitate forms.',
      'Color change is observed.',
      'If positive, boil the urine and repeat (to differentiate from drug interference).'
    ],
    observation: 'Development of a wine-red color.',
    result: 'Wine-red color = Positive for Acetoacetic acid.',
    interpretation: 'Indicates severe ketonuria.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Specific confirmation of acetoacetic acid presence.',
    sourcesOfError: ['False positives with salicylates (Aspirin) and phenols. Boiling the sample makes the acetoacetic acid color disappear, but the salicylate color persists.'],
    precautions: ['Always include a boiling step to rule out drug interference.'],
    normalVsAbnormal: 'Less sensitive than Rothera\'s test.',
    applications: 'Secondary ketone confirmation.',
    limitations: 'Detects ONLY acetoacetic acid.',
    examPoints: 'Positive: Wine-red. Specific for Acetoacetic Acid. Boiled: Negative (destroys acetoacetic acid).',
    viva: [
      { q: 'How do you distinguish between acetoacetic acid and salicylates using Gerhardt\'s test?', a: 'Boil the urine. Acetoacetic acid will be destroyed and the color will disappear on re-testing, whereas salicylates are heat-stable and the color will remain.' },
      { q: 'What is the color of a positive Gerhardt\'s test?', a: 'Wine-red (Bordeaux-red).' }
    ],
    mcq: [
      { q: 'Gerhardt\'s test detects which specific ketone body?', options: ['Acetone', 'Acetoacetic acid', 'Beta-hydroxybutyrate', 'All of them'], answer: 1 },
      { q: 'Which reagent is used in Gerhardt\'s test?', options: ['Sulfur', 'Copper', 'Ferric Chloride', 'Barium'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'urn-ehrlich',
    title: 'Ehrlich\'s Aldehyde Test (Urobilinogen)',
    isImportant: true,
    definition: 'Laboratory test used to detect urobilinogen in the urine.',
    principle: 'Urobilinogen reacts with p-dimethylaminobenzaldehyde in an acidic medium (Ehrlich\'s reagent) to form a pink-colored complex.',
    mechanism: 'Aldehyde-pyrrole condensation reaction.',
    types: ['Qualitative Screening'],
    specimen: 'Freshly voided Urine (urobilinogen oxidizes to urobilin quickly).',
    reagents: [{ component: 'Ehrlich\'s Reagent', function: 'Contains p-dimethylaminobenzaldehyde in HCl.' }],
    equipment: ['Test tubes'],
    procedure: [
      'Take 5 ml of fresh urine in a tube.',
      'Add 0.5 ml of Ehrlich\'s reagent.',
      'Wait for 3-5 minutes and observe for a reddish or pink color.',
      'If positive, perform dilutions to determine highest reactive titer.'
    ],
    observation: 'Development of a distinct pink to cherry-red color.',
    result: 'Pink color = Positive (increased urobilinogen).',
    interpretation: 'Increased in Hemolytic Jaundice and early liver disease. Absent in Obstructive Jaundice.',
    referenceRange: 'Normal: Trace pink (Positive up to 1:20 dilution).',
    clinicalSignificance: 'Differentiation of Jaundice: High in Hemolytic; Absent in Obstructive.',
    sourcesOfError: ['False positives with porphobilinogen (Watson-Schwartz test is needed to differentiate).', 'Using old urine (gives false negative).'],
    precautions: ['Examine the sample immediately after collection.'],
    normalVsAbnormal: 'Abnormal: Bright cherry-red color with high titer (>1:40).',
    applications: 'Hereditary hemolytic disease panels.',
    limitations: 'Lacks high specificity; reacts with sulfonamides.',
    examPoints: 'Result: Pink/Red. Increased: Hemolytic. Absent: Obstructive. Reagent: p-dimethylaminobenzaldehyde.',
    viva: [
      { q: 'What does a complete absence of urobilinogen in the urine indicate?', a: 'Complete biliary obstruction (obstructive jaundice), as no bilirubin is reaching the intestine to be converted into urobilinogen.' },
      { q: 'In which condition is urinary urobilinogen most significantly increased?', a: 'Hemolytic Jaundice.' }
    ],
    mcq: [
      { q: 'Ehrlich\'s reagent contains which main chemical?', options: ['Ferric chloride', 'p-dimethylaminobenzaldehyde', 'Copper sulfate', 'Sulfur'], answer: 1 },
      { q: 'Urinary urobilinogen is absent in?', options: ['Normal health', 'Hemolytic anemia', 'Obstructive Jaundice', 'Hepatitis'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venous_and_arterial_blood.jpg/960px-Venous_and_arterial_blood.jpg'
    }
  },
  {
    id: 'urn-schlesinger',
    title: 'Schlesinger\'s Test (Urobilin)',
    isImportant: false,
    definition: 'Chemical test to detect urobilin (the oxidized form of urobilinogen) in the urine.',
    principle: 'Barium chloride is used to remove interfering bile pigments. Urobilin reacts with Zinc Acetate in an alcoholic solution to produce a characteristic green fluorescence.',
    mechanism: 'Complex formation with zinc ions inducing fluorescence.',
    types: ['Fluorescence Test'],
    specimen: 'Urine.',
    reagents: [
      { component: 'Zinc Acetate (10% in Alcohol)', function: 'Induces green fluorescence.' },
      { component: 'Lugol\'s Iodine', function: 'Oxidizer (to convert remaining urobilinogen to urobilin).' }
    ],
    equipment: ['UV light or bright beam of light'],
    procedure: [
      'Take 5 ml of urine.',
      'Add a few drops of Lugol\'s iodine to oxidize everything to urobilin.',
      'Add 5 ml of saturated zinc acetate solution.',
      'Filter the mixture.',
      'Observe the filtrate under a bright beam of light against a dark background.'
    ],
    observation: 'Bright green fluorescence in the filtrate.',
    result: 'Green fluorescence = Positive for Urobilin.',
    interpretation: 'Similar significance to urobilinogen; reflects liver and hemolytic status.',
    referenceRange: 'Moderate fluorescence is normal.',
    clinicalSignificance: 'Confirmation of urobilin presence.',
    sourcesOfError: ['Presence of eosin (from drugs) can also produce fluorescence.'],
    precautions: ['Always use an alcoholic solution of zinc acetate.'],
    normalVsAbnormal: 'Intensified fluorescence seen in liver disease.',
    applications: 'Hepatopathology.',
    limitations: 'Tedious procedure compared to Ehrlich\'s.',
    examPoints: 'Result: Green Fluorescence. Reagent: Zinc Acetate.',
    viva: [
      { q: 'What is the characteristic observation in a positive Schlesinger\'s test?', a: 'Bright green fluorescence.' },
      { q: 'Why is Lugol\'s iodine added sometimes?', a: 'To ensure all urobilinogen is oxidized to urobilin before testing.' }
    ],
    mcq: [
      { q: 'Schlesinger\'s test detects?', options: ['Bilirubin', 'Urobilin', 'Ketones', 'Protein'], answer: 1 },
      { q: 'Which metal ion is used in the Schlesinger reaction?', options: ['Iron', 'Zinc', 'Copper', 'Lead'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'urn-benzidine',
    title: 'Benzidine Test for Hematuria',
    isImportant: true,
    definition: 'Chemical test used to detect the presence of blood (hemoglobin) in the urine.',
    principle: 'Peroxidase-like activity of hemoglobin decomposes hydrogen peroxide to release nascent oxygen. This oxygen oxidizes benzidine into a blue colored compound.',
    mechanism: 'Catalytic oxidation of chromogen.',
    types: ['Qualitative Screen'],
    specimen: 'Centrifuged Urine sediment (or whole urine).',
    reagents: [
      { component: 'Benzidine powder in Glacial Acetic Acid', function: 'Chromogen.' },
      { component: 'Hydrogen Peroxide (3%)', function: 'Substrate/Oxidizer.' }
    ],
    equipment: ['Test tubes'],
    procedure: [
      'Take 2 ml of urine in a tube.',
      'Add 2 ml of Benzidine reagent.',
      'Add a few drops of Hydrogen Peroxide.',
      'Observe for immediate color change.'
    ],
    observation: 'Immediate appearance of a blue or dark green color.',
    result: 'Positive Blue color = Presence of Blood.',
    interpretation: 'Hematuria (intact RBCs) or Hemoglobinuria (free Hb) causes a positive result.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Detection of urinary tract infections, renal stones, glomerulonephritis, or tumors (bladder cancer).',
    sourcesOfError: ['Presence of myoglobin (from muscle injury) also gives a positive result.', 'Contamination with bleach/oxidizing cleaners.'],
    precautions: ['Differentiate between Hematuria and Hemoglobinuria by centrifuging and looking for RBCs in the sediment.'],
    normalVsAbnormal: 'A "Positive" result requires careful microscopic examination for RBCs.',
    applications: 'Emergency screening and urology.',
    limitations: 'Extremely sensitive; can detect trace amounts of no clinical significance.',
    examPoints: 'Result: Blue. Detects: Hemoglobin. Principle: Peroxidase-like activity.',
    viva: [
      { q: 'What is the difference between Hematuria and Hemoglobinuria?', a: 'Hematuria is the presence of intact Red Blood Cells in the urine (makes it cloudy), while Hemoglobinuria is the presence of free hemoglobin (makes it clear and red) due to lysis of RBCs.' },
      { q: 'Can this test distinguish between Hemoglobin and Myoglobin?', a: 'No, both give a positive peroxidase-like reaction.' }
    ],
    mcq: [
      { q: 'Benzidine test for blood appears as which color?', options: ['Yellow', 'Green/Blue', 'White', 'Pink'], answer: 1 },
      { q: 'Urinary blood with intact RBCs is called?', options: ['Hemoglobinuria', 'Hematuria', 'Alcaptonuria', 'Myoglobinuria'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
