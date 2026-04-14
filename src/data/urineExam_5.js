export const urineExamData5 = [
  {
    id: 'urn-bjp',
    title: 'Bence Jones Protein (BJP) Test',
    isImportant: true,
    definition: 'Laboratory test to detect monochromatic light chains of immunoglobulins in urine.',
    principle: 'Bence Jones proteins have unique thermal solubility. They precipitate when heated to 40-60°C, but unlike other proteins, they completely re-dissolve upon boiling (100°C) and reappear when cooled.',
    mechanism: 'Thermal solubility inversion.',
    types: ['Heat Precipitation Method'],
    specimen: 'Early morning fresh urine (concentrated).',
    reagents: [{ component: '10% Acetic Acid', function: 'Adjust pH to 5.0 (optimal).' }],
    equipment: ['Water bath (equipped with thermometer)', 'Test tubes'],
    procedure: [
      'Filter the urine if it is turbid.',
      'Adjust pH to 5.0 using 10% acetic acid.',
      'Heat the urine slowly in a water bath starting from room temperature.',
      'Observe for precipitation between 40-60°C.',
      'Increase the heat to boiling (100°C) and observe for re-dissolving.',
      'Cool back to 60°C and observe for reappearance.'
    ],
    observation: 'Turbidity at 60°C disappearing at 100°C.',
    result: 'Positive = Reversible thermal precipitation.',
    interpretation: 'Identification of BJP is highly suggestive of Multiple Myeloma or light-chain disease.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Mandatory screen for patients with suspected plasma cell dyscrasias (Multiple Myeloma) and unexplained renal failure.',
    sourcesOfError: ['Presence of albumin (covers up the BJP). Filter out albumin at boiling before testing for BJP.'],
    precautions: ['Monitor the temperature carefully with a thermometer.'],
    normalVsAbnormal: 'Confirmed with Urine Protein Electrophoresis (UPEP) showing a "M-spike".',
    applications: 'Hematology and Nephrology.',
    limitations: 'Lacks sensitivity; identifies only significantly high loads of light chains.',
    examPoints: 'Result: Precipitates 60°C, Dissolves 100°C. Association: Multiple Myeloma.',
    viva: [
      { q: 'In which condition is Bence Jones Protein found in the urine?', a: 'Multiple Myeloma.' },
      { q: 'How does BJP behave differently from routine albumin when boiled?', a: 'Albumin coagulates when boiled and stays coagulated. BJP precipitates at 60°C but re-dissolves completely at 100°C.' }
    ],
    mcq: [
      { q: 'Bence Jones proteins are?', options: ['Heavy chains', 'Light chains', 'Albumin', 'Fibrinogen'], answer: 1 },
      { q: 'BJP re-dissolves at what temperature?', options: ['40°C', '60°C', '100°C', '0°C'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'urn-esbach',
    title: '24-hour Urinary Protein (Esbach\'s)',
    isImportant: false,
    definition: 'Quantitative estimation of total protein excreted in the urine over 24 hours.',
    principle: 'Esbach\'s reagent (Picric acid + Citric acid) precipitates proteins. In a specialized Esbach\'s tube, the volume of the precipitate is measured after 24 hours of settling, and the depth of the precipitate correlates with the protein concentration.',
    mechanism: 'Gravimetric precipitation.',
    types: ['Esbach\'s Albuminometer'],
    specimen: '24-hour accumulated urine.',
    reagents: [{ component: 'Esbach\'s Reagent', function: 'Contains 1.0g Picric acid and 2.0g Citric acid.' }],
    equipment: ['Esbach\'s Tube (Albuminometer)'],
    procedure: [
      'Acidify the urine (if alkaline).',
      'Fill the Esbach\'s tube up to the mark "U" with urine.',
      'Add Esbach\'s reagent up to the mark "R".',
      'Stopper the tube and mix by slow inversion.',
      'Keep the tube vertically in a stand for 24 hours at room temperature.',
      'Read the level of precipitate on the graduated scale.'
    ],
    observation: 'Yellow precipitate settling at the bottom of the tube.',
    result: 'Report in grams per liter (g/L).',
    interpretation: 'Significant proteinuria (>3.5 g/day) defines Nephrotic Syndrome.',
    referenceRange: '< 150 mg per 24 hours.',
    clinicalSignificance: 'Quantifying protein loss to monitor the progression of renal disease or pre-eclampsia in pregnancy.',
    sourcesOfError: ['High specific gravity (dilute the urine first).', 'Temperature fluctuations.'],
    precautions: ['The tube must remain perfectly still for the full 24 hours.'],
    normalVsAbnormal: 'Modern labs use automated chemistry analyzers for much faster results.',
    applications: 'Renal monitoring.',
    limitations: 'Takes 24 hours to obtain a result.',
    examPoints: 'Reagent: Picric + Citric acid. Result: g/L. Settling time: 24 hours.',
    viva: [
      { q: 'What is the composition of Esbach\'s reagent?', a: 'Picric acid (precipitant) and Citric acid (prevents non-protein precipitation).' },
      { q: 'How long must you wait before taking a reading from an Esbach\'s tube?', a: '24 hours.' }
    ],
    mcq: [
      { q: 'Esbach\'s reagent contains which acid?', options: ['Acetic', 'Nitric', 'Picric', 'Hydrochloric'], answer: 2 },
      { q: 'Esbach\'s method measures protein in?', options: ['mg/dl', 'g/L', 'mmol/L', 'Percentage'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'urn-microalbumin',
    title: 'Microalbuminuria Test',
    isImportant: true,
    definition: 'Highly sensitive test detecting very small amounts of albumin in the urine, not detectable by routine chemical tests.',
    principle: 'Specifically detects albumin levels between 30-300 mg/day. Most common method is Immunoturbidimetry or specialized sensitive dry-chemistry dipsticks.',
    mechanism: 'Enhanced antibody-antigen signaling.',
    types: ['Dipstick', 'Latex Agglutination'],
    specimen: 'Random or timed Urine collection.',
    reagents: [{ component: 'Anti-human albumin antibodies', function: 'Specific detection.' }],
    equipment: ['Analyzer or visual dipstick chart'],
    procedure: [
      'Dip the specialized microalbumin strip into the urine.',
      'Wait for the specified time (60-90 seconds).',
      'Compare color change with the provided color chart.',
      'Perform ACR (Albumin-to-Creatinine Ratio) for better accuracy.'
    ],
    observation: 'Incremental color shifts depending on albumin concentration.',
    result: 'Report in mg/L or ACR ratio.',
    interpretation: '30-300 mg/24h = Microalbuminuria. >300 mg/24h = Macroalbuminuria.',
    referenceRange: '< 30 mg/24 hours.',
    clinicalSignificance: 'The earliest possible clinical sign of Diabetic Nephropathy. Detecting this allows for intervention to prevent future kidney failure.',
    sourcesOfError: ['High physical exertion or fever (causes transient microalbuminuria).'],
    precautions: ['Confirm positive results with at least 2 more samples over 3-6 months.'],
    normalVsAbnormal: 'Vital early-warning system in Diabetes and Hypertension management.',
    applications: 'Chronic disease management.',
    limitations: 'Requires specialized, more expensive strips than routine urinalysis.',
    examPoints: 'Early sign of diabetic kidney damage. Normal: <30 mg/day.',
    viva: [
      { q: 'What is the clinical importance of microalbuminuria?', a: 'It is the earliest marker of damage to the filtration barrier in the kidney, especially in diabetic patients.' },
      { q: 'Define the range for microalbuminuria.', a: '30 to 300 mg per 24 hours.' }
    ],
    mcq: [
      { q: 'Earliest sign of diabetic nephropathy is?', options: ['Glycosuria', 'Macroalbuminuria', 'Microalbuminuria', 'Hematuria'], answer: 2 },
      { q: 'Which ratio is more accurate for assessing protein loss?', options: ['A/G ratio', 'Albumin-to-Creatinine ratio (ACR)', 'Urea-to-Creatinine', 'Sugar-to-Protein'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'urn-upgt',
    title: 'Pregnancy Test (HCG - Rapid)',
    isImportant: true,
    definition: 'Rapid immunological test used to detect Human Chorionic Gonadotropin (HCG) in the urine.',
    principle: 'Utilizes a sandwich-type Lateral Flow Immunoassay. The strip contains antibodies to HCG. If HCG is present, it binds to the antibodies, creating a colored line (Test line). A second control line (C) appears to confirm the test is valid.',
    mechanism: 'Immunochromatography.',
    types: ['Urine Pregnancy Test (UPT)'],
    specimen: 'Early morning urine (highest HCG concentration).',
    reagents: [{ component: 'HCG test kit (ICT strip)', function: 'Detection device.' }],
    equipment: ['Dropper (included in kit)'],
    procedure: [
      'Collect fresh urine (first morning preferred).',
      'Place 2-3 drops of urine into the sample well (S) of the test cassette.',
      'Read the result exactly at 5 minutes.',
      'Observe for lines at the "T" (Test) and "C" (Control) regions.'
    ],
    observation: 'Appearance of one or two colored bands.',
    result: 'Two lines (C + T) = Positive (Pregnant). One line (C only) = Negative.',
    interpretation: 'Detection of pregnancy as early as the first day of a missed period.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Rapid confirmation of pregnancy or HCG-producing tumors.',
    sourcesOfError: ['"Hook Effect" (extremely high HCG levels gives false negative).', 'Reading after >10 mins (Evaporation lines).'],
    precautions: ['If a "T" line appears without a "C" line, the test is invalid and must be repeated.'],
    normalVsAbnormal: 'Can detect HCG levels as low as 10-25 mIU/ml.',
    applications: 'Obstetrics and Emergency triage.',
    limitations: 'Certain tumors (e.g., Hydatidiform mole) also produce HCG.',
    examPoints: 'Detects hormone: HCG. Method: Immunochromatography. Sample: Early morning urine.',
    viva: [
      { q: 'Which hormone is detected by a pregnancy test?', a: 'Human Chorionic Gonadotropin (HCG).' },
      { q: 'Why is the first morning urine preferred for a pregnancy test?', a: 'Because it is the most concentrated, and HCG levels will be highest and easiest to detect.' }
    ],
    mcq: [
      { q: 'UPT kits use the principle of?', options: ['Agglutination', 'Immunochromatography', 'Electrophoresis', 'Neutralization'], answer: 1 },
      { q: 'HCG is produced by?', options: ['Liver', 'Trophoblastic cells of placenta', 'Pituitary', 'Kidney'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Home_pregnancy_test_kit.jpg/640px-Home_pregnancy_test_kit.jpg'
    }
  }
];
