export const clinicalPathologyData5 = [
  {
    id: 'cpa-csf-chemical',
    title: 'Chemical Analysis of Cerebrospinal Fluid (CSF)',
    isImportant: true,
    definition: 'Laboratory evaluation of biochemical components (Protein and Glucose) in CSF.',
    principle: 'CSF protein levels reflect the integrity of the blood-brain barrier. Glucose levels reflect the metabolic activity of cells and bacteria in the subarachnoid space.',
    mechanism: 'Colorimetric and turbidimetric assays.',
    types: ['Routine Biochemistry'],
    specimen: 'CSF (Tube 2 or 3 of a lumbar puncture).',
    reagents: [
      { component: 'Pandy Reagent (Phenol)', function: 'Detects increased globulins.' },
      { component: 'Sulfosalicylic acid', function: 'Detects total protein.' }
    ],
    equipment: ['Spectrophotometer / Biochemistry analyzer', 'Test tubes'],
    procedure: [
      'Total Protein: Mix CSF with Sulfosalicylic acid and measure turbidity.',
      'Globulin (Pandy\'s): Add 1 drop of CSF to 1 ml Pandy reagent. Look for immediate cloudiness.',
      'Glucose: Perform standard GOD-POD enzymatic estimation.',
      'Chlorides: Titrate against silver nitrate (historical).'
    ],
    observation: 'Normal CSF shows no cloudiness in Pandy\'s test.',
    result: 'Protein (mg/dl) and Glucose (mg/dl).',
    interpretation: 'Meningitis Profile: Bacterial (High protein, Very low glucose). Viral (Moderate protein, Normal glucose). TB (Very high protein, Low glucose).',
    referenceRange: 'Protein: 15-45 mg/dl | Glucose: 45-80 mg/dl (2/3 of blood glucose).',
    clinicalSignificance: 'Critical for diagnosing different types of meningitis and Multiple Sclerosis (Oligoclonal bands).',
    sourcesOfError: ['Contamination with blood (artificially raises protein).', 'Delayed analysis (cells consume glucose).'],
    precautions: ['Always correlate CSF glucose with a concurrent blood glucose level.'],
    normalVsAbnormal: 'A "Positive" Pandy\'s test indicates a significant rise in globulins.',
    applications: 'Emergency neurology panels.',
    limitations: 'Biochemistry alone cannot identify the specific pathogen.',
    examPoints: 'Bacterial: Protein up, Glucose down. Viral: Protein slightly up, Glucose normal.',
    viva: [
      { q: 'What is the "Pandy test" used for?', a: 'To detect elevated levels of globulins in the CSF, which is common in meningitis and other inflammatory neurological conditions.' },
      { q: 'Why is CSF glucose lower than blood glucose normally?', a: 'Because it is derived from blood via active transport and facilitated diffusion, maintained at roughly 60-70% of the plasma level.' }
    ],
    mcq: [
      { q: 'CSF glucose is significantly decreased in which type of meningitis?', options: ['Viral', 'Bacterial', 'Aseptic', 'Healthy individual'], answer: 1 },
      { q: 'Normally, CSF protein concentration is?', options: ['2-4 g/dl', '15-45 mg/dl', '100-200 mg/dl', 'Zero'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-pleural-exam',
    title: 'Pleural Fluid Examination',
    isImportant: true,
    definition: 'Analysis of the fluid collected from the pleural cavity (surrounding the lungs).',
    principle: 'Evaluation involves physical appearance, cell count, and biochemical markers (Light\'s criteria) to determine the cause of pleural effusion.',
    mechanism: 'Assesment of pleural permeability and oncotic pressure.',
    types: ['Thoracentesis fluid'],
    specimen: 'Pleural fluid (minimum 10-20 ml).',
    reagents: [{ component: 'Normal Saline / Turk\'s fluid', function: 'For cell count.' }],
    equipment: ['Neubauer chamber', 'Biochemistry analyzer', 'Centrifuge'],
    procedure: [
      'Record physical appearance (Clear, Straw-colored, Bloody, or Turbid).',
      'Measure Total Protein and LDH in fluid and serum.',
      'Perform Total and Differential WBC count.',
      'Perform Gram stain, ZN stain, and Cytology for malignant cells.'
    ],
    observation: 'Serosanguinous (bloody) fluid often suggests malignancy.',
    result: 'Report as Transudate or Exudate using Light\'s criteria.',
    interpretation: 'Exudate (Ratio protein > 0.5, LDH > 0.6) suggests infection or cancer. Transudate suggests heart or liver failure.',
    referenceRange: 'Minor clear fluid (<15ml) is normal.',
    clinicalSignificance: 'Differentiation between congestive heart failure (transudate) and pneumonia/malignancy (exudate).',
    sourcesOfError: ['Using non-heparinized tubes (fluid may clot).'],
    precautions: ['Send samples for culture and cytology immediately.'],
    normalVsAbnormal: 'Presence of pus cells (Empyema) is an emergency.',
    applications: 'Pulmonology workup.',
    limitations: 'May require pleural biopsy for definitive diagnosis in tuberculosis.',
    examPoints: 'Light\'s criteria: Protein Ratio > 0.5 = Exudate. LDH Ratio > 0.6 = Exudate.',
    viva: [
      { q: 'What is "Empyema"?', a: 'The accumulation of pus (purulent fluid) in the pleural cavity, usually due to a severe infection.' },
      { q: 'Identify a cause for a bloody (hemorrhagic) pleural effusion.', a: 'Malignancy (cancer) or Pulmonary Infarction.' }
    ],
    mcq: [
      { q: 'According to Light\'s criteria, a pleural fluid/serum protein ratio > 0.5 indicates?', options: ['Transudate', 'Exudate', 'Normal', 'Milk'], answer: 1 },
      { q: 'Most common cause of a transudative pleural effusion is?', options: ['TB', 'Pneumonia', 'Congestive Heart Failure', 'Lung Cancer'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/MesotheliomaCT.jpg/960px-MesotheliomaCT.jpg'
    }
  },
  {
    id: 'cpa-ascitic-exam',
    title: 'Ascitic Fluid Examination',
    isImportant: true,
    definition: 'Laboratory evaluation of peritoneal fluid (Ascites) to determine the cause of abdominal swelling.',
    principle: 'The Serum-Ascites Albumin Gradient (SAAG) is calculated to differentiate between portal hypertension and other causes.',
    mechanism: 'Measurement of the osmotic pressure gradient between blood and the peritoneal cavity.',
    types: ['Paracentesis fluid'],
    specimen: 'Peritoneal (Ascitic) fluid.',
    reagents: [{ component: 'Albumin assay reagents', function: 'Measure protein.' }],
    equipment: ['Chemistry analyzer', 'Microscope'],
    procedure: [
      'Determine fluid appearance.',
      'Measure Albumin in both Serum and Ascitic fluid (collected on the same day).',
      'Calculate SAAG = Serum Albumin - Ascitic Fluid Albumin.',
      'Perform absolute cell count and culture.'
    ],
    observation: 'Milky appearance (Chylous) indicates lymphatic obstruction.',
    result: 'SAAG value (g/dl).',
    interpretation: 'SAAG > 1.1 g/dl = Portal Hypertension (Cirrhosis, Heart failure). SAAG < 1.1 g/dl = Non-portal hypertension (Cancer, TB, Pancreatitis).',
    referenceRange: 'Normal peritoneal fluid is < 50 ml.',
    clinicalSignificance: 'Crucial for managing patients with liver cirrhosis and identifying Spontaneous Bacterial Peritonitis (SBP).',
    sourcesOfError: ['Serum and fluid samples taken at significantly different times.'],
    precautions: ['A neutrophil count > 250/µl in ascitic fluid defines SBP and requires immediate antibiotics.'],
    normalVsAbnormal: 'Bloody ascitic fluid often indicates Hepatoma (liver cancer).',
    applications: 'Hepatology and Gastroenterology.',
    limitations: 'Low SAAG does not rule out portal hypertension in some cases of combined disease.',
    examPoints: 'SAAG: Serum Albumin - Ascitic Albumin. Gradient > 1.1 = Portal Hypertension.',
    viva: [
      { q: 'How do you calculate the SAAG?', a: 'By subtracting the albumin concentration of the ascitic fluid from the albumin concentration of the serum (measured on the same day).' },
      { q: 'What does a SAAG > 1.1 g/dl signify?', a: 'It signifies portal hypertension, most commonly due to liver cirrhosis.' }
    ],
    mcq: [
      { q: 'Which SAAG value indicates portal hypertension?', options: ['< 0.5', '< 1.1', '> 1.1', 'Zero'], answer: 2 },
      { q: 'A neutrophil count above what level in ascitic fluid indicates SBP?', options: ['100/µl', '250/µl', '1000/µl', '5000/µl'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-synovial-crystal',
    title: 'Synovial Fluid & Crystal ID',
    isImportant: true,
    definition: 'Microscopic examination of joint fluid for the presence of crystals that cause arthritis.',
    principle: 'Synovial fluid is examined under polarized light. Different crystals have unique shapes and refractive properties (birefringence), allowing for the definitive diagnosis of Gout and Pseudo-gout.',
    mechanism: 'Polarized light refractometry.',
    types: ['Arthrocentesis fluid'],
    specimen: 'Joint fluid.',
    reagents: [{ component: 'None (Plain mount)', function: 'Microscopy.' }],
    equipment: ['Polarizing Microscope with a Red Compensator'],
    procedure: [
      'Note the volume and viscosity of the joint fluid.',
      'Place a drop of fluid on a slide and cover with a coverslip.',
      'Examine under polarized light.',
      'Search for needle-shaped or rhomboid-shaped crystals.'
    ],
    observation: 'Needle-like crystals showing brilliant yellow-blue colors.',
    result: 'Identification of MSU or CPPD crystals.',
    interpretation: 'MSU (Monosodium Urate) = Gout. CPPD (Calcium Pyrophosphate) = Pseudo-gout.',
    referenceRange: 'No crystals in healthy joints.',
    clinicalSignificance: 'Definitive diagnosis of mechanical vs. inflammatory vs. crystal-induced joint pain.',
    sourcesOfError: ['Presence of corticosteroid crystals from recent injections (can be mistaken for MSU).'],
    precautions: ['Examine the fluid quickly; MSU crystals may dissolve or change over time.'],
    normalVsAbnormal: 'Strong negative birefringence (yellow when parallel) defines Gout.',
    applications: 'Rheumatology diagnostics.',
    limitations: 'Small crystals can be missed without a high-quality polarizing lens.',
    examPoints: 'Gout: Needles, Negative Birefringence. Pseudo-gout: Rhomboids, Positive Birefringence.',
    viva: [
      { q: 'Which crystals are seen in Gout?', a: 'Monosodium Urate (MSU) crystals.' },
      { q: 'What is the characteristic appearance of MSU crystals under a polarizing microscope?', a: 'They are needle-shaped and show strong negative birefringence (appearing yellow when aligned parallel to the compensator axis).' }
    ],
    mcq: [
      { q: 'Rhomboid-shaped crystals in synovial fluid indicate?', options: ['Gout', 'Pseudo-gout', 'RA', 'Infection'], answer: 1 },
      { q: 'Negative birefringence is characteristic of?', options: ['Urate crystals (Gout)', 'Pyrophosphate crystals', 'Cholesterol', 'Starch'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-amniotic-fluid',
    title: 'Amniotic Fluid Examination (L/S Ratio)',
    isImportant: false,
    definition: 'Evaluation of the fluid surrounding the fetus to assess lung maturity.',
    principle: 'Sperm-derived or fetal-derived phospholipids (Lecithin and Sphingomyelin) are produced by the developing fetal lungs. As the lungs mature (after 35 weeks), Lecithin levels rise significantly relative to Sphingomyelin.',
    mechanism: 'Lipid surfactant profiling.',
    types: ['Lecithin-Sphingomyelin (L/S) Ratio'],
    specimen: 'Amniotic fluid (Amniocentesis).',
    reagents: [{ component: 'Solvents for Chromatography', function: 'Lipid separation.' }],
    equipment: ['Thin Layer Chromatography (TLC) apparatus'],
    procedure: [
      'Extract lipids from amniotic fluid using chloroform-methanol.',
      'Perform Thin Layer Chromatography (TLC).',
      'Determine the density of the Lecithin and Sphingomyelin spots.',
      'Calculate the L/S ratio.'
    ],
    observation: 'Lecithin spot becomes larger and darker than Sphingomyelin spot as pregnancy progresses.',
    result: 'Ratio (e.g., 2:1).',
    interpretation: 'L/S ratio > 2.0 indicates fetal lung maturity (low risk of Respiratory Distress Syndrome).',
    referenceRange: 'Pre-term (<1.5). Full-term (>2.0).',
    clinicalSignificance: 'Used to decide if an early delivery (pre-term) is safe for the baby\'s lungs.',
    sourcesOfError: ['Contamination with blood or meconium (contains phospholipids).'],
    precautions: ['Protect the sample from light and analyze immediately.'],
    normalVsAbnormal: 'L/S < 1.5 indicates a high risk of "Hyaline Membrane Disease" at birth.',
    applications: 'High-risk obstetrics.',
    limitations: 'Largely replaced by "Lamellar Body Count" in modern automated labs.',
    examPoints: 'Mature: > 2.0. Immature: < 1.5. Determines lung maturity.',
    viva: [
      { q: 'What does the L/S ratio stand for?', a: 'Lecithin-Sphingomyelin ratio.' },
      { q: 'At what L/S ratio are the fetal lungs considered mature?', a: 'Ratio of 2.0 or higher.' }
    ],
    mcq: [
      { q: 'L/S ratio is used to assess maturity of which organ?', options: ['Heart', 'Lungs', 'Liver', 'Brain'], answer: 1 },
      { q: 'Which phospholipid increases significantly towards the end of pregnancy?', options: ['Sphingomyelin', 'Lecithin', 'Cholesterol', 'Albumin'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Amniocentesis.png/640px-Amniocentesis.png'
    }
  }
];
