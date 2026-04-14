export const urineExamData1 = [
  {
    id: 'urn-physical',
    title: 'Physical Examination & Specific Gravity',
    isImportant: true,
    definition: 'Baseline test measuring the macroscopic appearance and concentration of urine.',
    principle: 'Physical appearance (Volume, Color, Clarity, Odor) gives systemic clues. Specific Gravity measures density of dissolved solutes compared to distilled water, indicating renal concentrating ability.',
    mechanism: 'Kidneys reabsorb water increasing specific gravity via ADH mediation.',
    types: ['Visual Exam', 'Urinometer', 'Refractometer'],
    specimen: 'Random or 24-hour collected urine.',
    reagents: [
      { component: 'None', function: 'Physical metric analysis.' }
    ],
    equipment: ['Urinometer or Refractometer', 'Measuring cylinder'],
    procedure: [
      'Volume: Measure 24-hour collection if applicable.',
      'Color & Appearance: Observe visually against a white background.',
      'Odor: Note any distinct smells.',
      'Specific Gravity: Float the urinometer in 20 ml urine freely. Read at lower meniscus.',
      'Alternative: Place 1 drop of urine on refractometer prism and read scale.'
    ],
    observation: 'Light shining through pale yellow fluid.',
    result: 'Report Color, Appearance, Odor, and Specific Gravity value.',
    interpretation: 'Hyposthenuria implies poor concentration. Isosthenuria implies renal failure.',
    referenceRange: 'Color: Pale yellow. Clarity: Clear. Specific Gravity: 1.010 - 1.025.',
    clinicalSignificance: 'Fundamental test directing subsequent chemical and microscopic analysis.',
    sourcesOfError: ['Urinometer touching cylinder walls gives false high surface tension reading.'],
    precautions: ['Correct urinometer readings based explicitly on temperature calibration.'],
    normalVsAbnormal: 'A sweet fruity odor specifically indicates Diabetic Ketoacidosis.',
    applications: 'Routine Urinalysis.',
    limitations: 'Highly diluted urine obscures chemical reactions.',
    examPoints: 'Isosthenuria is fixed 1.010 S.G.',
    viva: [
      { q: 'What pigment gives normal urine its pale yellow color?', a: 'Urochrome.' },
      { q: 'What is Isosthenuria?', a: 'Fixed specific gravity of exactly 1.010 regardless of hydration.' }
    ],
    mcq: [
      { q: 'Normal pale yellow color is primarily due to:', options: ['Bilirubin', 'Urochrome', 'Urea', 'Creatinine'], answer: 1 },
      { q: 'A fixed specific gravity of 1.010 is termed:', options: ['Hypersthenuria', 'Hyposthenuria', 'Isosthenuria', 'Hematuria'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Jaundice08.jpg/960px-Jaundice08.jpg'
    }
  },
  {
    id: 'urn-benedict',
    title: 'Benedict\'s Test for Reducing Sugars',
    isImportant: true,
    definition: 'Qualitative test for detecting glucose and other reducing sugars.',
    principle: 'In an alkaline-heated medium, reducing sugars convert cupric ions (Cu2+) in Benedict\'s reagent into insoluble cuprous oxide (Cu+), yielding a colored precipitate.',
    mechanism: 'Redox reaction driven by free aldehyde or ketone groups.',
    types: ['Qualitative Benedicts', 'Quantitative Benedicts'],
    specimen: 'Fresh Urine.',
    reagents: [
      { component: 'Benedict Qualitative Reagent', function: 'Contains Copper Sulfate and Sodium Carbonate.' }
    ],
    equipment: ['Test tubes', 'Boiling water bath'],
    procedure: [
      'Take exactly 5 ml of Benedict reagent in a test tube.',
      'Add exactly 8 drops (approx. 0.5 ml) of well-mixed urine.',
      'Boil the mixture strictly for 2 minutes.',
      'Allow tube to cool slowly at room temperature.',
      'Observe the color change of the precipitate.'
    ],
    observation: 'Solution turns from clear blue to an opaque colored precipitate.',
    result: 'Blue (Negative), Green (Trace), Yellow (2+), Orange (3+), Brick Red (4+).',
    interpretation: 'Severity of color indicates degree of glycosuria.',
    referenceRange: 'Negative (Blue).',
    clinicalSignificance: 'Classic historical test for Diabetes Mellitus.',
    sourcesOfError: ['False positive from Ascorbic Acid (Vitamin C).'],
    precautions: ['Do strictly adhere to the 5ml : 8 drops ratio to avoid uric acid false positives.'],
    normalVsAbnormal: 'Glycosuria indicates blood glucose exceeded the renal threshold (~180 mg/dl).',
    applications: 'Diabetes screening.',
    limitations: 'Not specific for glucose (detects fructose, lactose). Cannot detect sucrose.',
    examPoints: 'Copper directly reduced from Cu2+ to Cu+.',
    viva: [
      { q: 'Is Benedict\'s test strictly specific for Glucose?', a: 'No, tests any reducing substance. Does NOT detect Sucrose.' },
      { q: 'What maintains alkaline pH?', a: 'Sodium Carbonate.' }
    ],
    mcq: [
      { q: 'The metal ion actively reduced is:', options: ['Iron', 'Silver', 'Copper (Cu2+ to Cu+)', 'Zinc'], answer: 2 },
      { q: 'Which sugar gives a NEGATIVE test?', options: ['Glucose', 'Galactose', 'Fructose', 'Sucrose'], answer: 3 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Benedicts_test.png/640px-Benedicts_test.png'
    }
  },
  {
    id: 'urn-heat-acetic',
    title: 'Heat and Acetic Acid Test',
    isImportant: true,
    definition: 'Test detecting albumin/protein in urine via thermal denaturation.',
    principle: 'Proteins (albumin) denature and coagulate when exposed to heat. Dilute acetic acid is added to dissolve false precipitates (like phosphates) ensuring remaining cloudiness is strictly protein.',
    mechanism: 'Thermal disruption of tertiary protein bonds.',
    types: ['Qualitative Denaturation Test'],
    specimen: 'Centrifuged Clear Urine.',
    reagents: [
      { component: '10% Acetic Acid', function: 'Dissolves inorganic phosphate precipitates.' }
    ],
    equipment: ['Test tubes', 'Spirit lamp'],
    procedure: [
      'Fill a test tube 2/3 full with clear centrifuged urine.',
      'Boil strictly the upper 1/3 over a flame for 1-2 minutes.',
      'Observe for turbidity/cloudiness in the heated area.',
      'If cloudy, add 1-3 drops 10% Acetic Acid drop by drop.',
      'Re-boil briefly and read.'
    ],
    observation: 'Opaque white cloudiness forming in the heated upper zone.',
    result: 'Cloudiness persisting after acid = Positive for Protein.',
    interpretation: 'Degree of turbidity correlates with proteinuria severity (Trace to 4+).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Identifies glomerular filtration damage.',
    sourcesOfError: ['Testing uncentrifuged natively turbid urine completely obscures results.'],
    precautions: ['Do not add excess acid, it falsely redissolves small protein traces.'],
    normalVsAbnormal: 'Massive proteinuria defines Nephrotic Syndrome.',
    applications: 'Renal pathology screening.',
    limitations: 'Less sensitive than modern microalbuminuria assays.',
    examPoints: 'Lower 2/3 acts as a control. Acetic acid dissolves phosphates.',
    viva: [
      { q: 'Why boil the upper one-third?', a: 'To maintain the unheated lower two-thirds as a direct visual control.' },
      { q: 'What typically causes false cloudiness?', a: 'Precipitation of dissolved earthy phosphates.' }
    ],
    mcq: [
      { q: 'Which part of the tube is boiled?', options: ['Bottom', 'Middle', 'Upper 1/3', 'Entire tube'], answer: 2 },
      { q: 'Addition of 10% Acetic Acid effectively dissolves:', options: ['Proteins', 'Phosphates', 'RBCs', 'Ketones'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Underfloor_heating_pipes.jpg/960px-Underfloor_heating_pipes.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Caoutchouc_naturel.jpg/960px-Caoutchouc_naturel.jpg'
    }
  }
];
