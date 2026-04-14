export const hematologyData6 = [
  {
    id: 'hem-g6pd',
    title: 'G6PD Screening (Fluorescent Spot Test)',
    isImportant: true,
    definition: 'Rapid visual screening assay for Glucose-6-Phosphate Dehydrogenase enzyme deficiency.',
    principle: 'Blood is spotted onto filter paper with a reagent mixture containing G6P substrate and NADP. If G6PD is present, it oxidizes G6P and reduces NADP to NADPH. NADPH strongly fluoresces under UV light.',
    mechanism: 'Enzymatic generation of fluorescent NADPH.',
    types: ['Fluorescent Spot Test'],
    specimen: 'EDTA blood or dry blood spot.',
    reagents: [{ component: 'NADP and G6P Substrate', function: 'Reaction precursors.' }],
    equipment: ['UV Lamp (365nm)', 'Filter Paper'],
    procedure: ['Mix blood and reagent.', 'Spot on paper.', 'Incubate.', 'Examine under UV light.'],
    observation: 'Normal blood spots fluoresce brightly. Deficient blood shows NO fluorescence.',
    result: 'Fluorescent (Normal) or Non-fluorescent (Deficient).',
    interpretation: 'Non-fluorescence dictates high risk for severe hemolytic anemia upon oxidant drug exposure.',
    referenceRange: 'Fluorescence Present.',
    clinicalSignificance: 'Mandatory before prescribing Primaquine for malaria.',
    sourcesOfError: ['Severe anemia requires adjusted blood volumes.'],
    precautions: ['Do not read after 24 hours.'],
    normalVsAbnormal: 'Absence of fluorescence is pathological.',
    applications: 'Antenatal and pre-medication screening.',
    limitations: 'Heterozygous females may show false normal fluorescence.',
    examPoints: 'Requires UV light at 365nm to detect NADPH.',
    viva: [{ q: 'What molecule fluoresces?', a: 'NADPH.' }],
    mcq: [{ q: 'The G6PD screening test visually detects the presence of:', options: ['NADP', 'NADPH', 'G6P', 'HbF'], answer: 1 }],
    images: { instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg', reaction: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Complete_blood_count_and_differential.jpg' }
  },
  {
    id: 'hem-rbc-morph',
    title: 'Red Cell Morphology: Classification of Size and Color',
    isImportant: true,
    definition: 'Systematic microscopic evaluation and classification of erythrocytes based on their physical dimensions and hemoglobinization intensity.',
    principle: 'Normal RBCs are biconcave discs of roughly 7.2 µm diameter with a central pallor occupying one-third of the cell. Variations in size (anisocytosis) and hemoglobin concentration (hypochromia/polychromasia) are assessed on a well-stained peripheral blood smear under oil immersion.',
    mechanism: 'Defects in hemoglobin synthesis lead to hypochromia; defects in DNA maturation lead to macrocytosis.',
    types: ['Normocytic Normochromic', 'Microcytic Hypochromic', 'Macrocytic'],
    specimen: 'Leishman-stained peripheral blood smear.',
    reagents: [{ component: 'Leishman\'s Stain', function: 'Colors the hemoglobin (pink) and cellular structures.' }],
    equipment: ['Microscope (100x Oil Immersion)', 'Cedarwood oil'],
    procedure: [
      'Prepare a thin peripheral blood smear.',
      'Stain with Leishman stain using standard protocol.',
      'Identify the "ideal zone" where RBCs are distributed evenly without overlapping.',
      'Observe RBCs for size (compare with a small lymphocyte nucleus (~7-8µm)).',
      'Observe for central pallor (should be ~1/3rd of the diameter).'
    ],
    observation: 'Normocytic cells match the small lymphocyte nucleus size. Hypochromic cells show an expanded central pallor (>1/3rd).',
    result: 'Report as [Size Pattern] and [Color Pattern]. Example: Microcytic Hypochromic.',
    interpretation: 'Microcytic hypochromic cells strongly suggest Iron Deficiency Anemia. Macrocytic cells suggest B12/Folate deficiency.',
    referenceRange: 'Normocytic Normochromic.',
    clinicalSignificance: 'The foundational first step in the morphological classification of all clinical anemias.',
    sourcesOfError: ['Evaluating thick areas where cells appear falsely hyperchromic.', 'Incorrect buffer pH affecting staining color.'],
    precautions: ['Always use the nucleus of a small lymphocyte as a built-in "internal ruler" for size comparison.'],
    normalVsAbnormal: 'Abnormal morphology directs further specialized testing like Ferritin or Vitamin B12 levels.',
    applications: 'Routine CBC followup.',
    limitations: 'Subjective; requires significant technician expertise.',
    examPoints: 'Normal central pallor is 1/3 cell diameter. Internal ruler is the small lymphocyte nucleus.',
    viva: [
      { q: 'What is the "internal ruler" for measuring RBC size?', a: 'The nucleus of a small lymphocyte.' },
      { q: 'Define Hypochromia.', a: 'Increased central pallor of RBCs (>1/3 of diameter) due to low hemoglobin.' }
    ],
    mcq: [
      { q: 'RBCs with central pallor greater than 1/3rd are called?', options: ['Hyperchromic', 'Normochromic', 'Hypochromic', 'Polychromatic'], answer: 2 },
      { q: 'Which cell nucleus is used to estimate RBC size?', options: ['Monocyte', 'Neutrophil', 'Small Lymphocyte', 'Eosinophil'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'hem-anisopoik',
    title: 'Anisocytosis and Poikilocytosis Interpretation',
    isImportant: true,
    definition: 'Microscopic identification and clinical interpretation of variations in erythrocyte size (Anisocytosis) and shape (Poikilocytosis).',
    principle: 'Pathological erythropoiesis or mechanical destruction causes RBCs to adopt abnormal shapes or sizes. These are qualitatively graded (1+ to 4+) and the specific shape (e.g., Target cells, Schistocytes) points to the underlying etiology.',
    mechanism: 'Membrane defects, enzyme deficiencies, or microangiopathy physically distorts the cell.',
    types: ['Size Variation (Anisocytosis)', 'Shape Variation (Poikilocytosis)'],
    specimen: 'Peripheral Blood Smear.',
    reagents: [{ component: 'Leishman Stain', function: 'Differential staining.' }],
    equipment: ['Microscope (100x)'],
    procedure: [
      'Examine the blood smear under 100x oil immersion.',
      'Grade anisocytosis: mild, moderate, or marked.',
      'Identify specific shape abnormalities: Target cells, Spherocytes, Schistocytes, Teardrop cells, Burr cells, Acanthocytes, Sickle cells.'
    ],
    observation: 'Target cells: bullseye appearance. Schistocytes: fragmented "helmet" shapes. Teardrop cells: pear-shaped (Dacrocytes).',
    result: 'Report specific shapes seen and degree of anisocytosis.',
    interpretation: 'Schistocytes = Microangiopathic Hemolytic Anemia (DIC/TTP). Teardrop cells = Myelofibrosis. Target cells = Thalassemia/Liver disease.',
    referenceRange: 'Minimal variation expected.',
    clinicalSignificance: 'Crucial for narrowing down the diagnosis of specific hemolytic and non-hemolytic anemias.',
    sourcesOfError: ['Crenated cells appearing like Burr cells due to slow drying or old EDTA blood.', 'Pseudohypochromia in thick areas.'],
    precautions: ['Distinguish true Poikilocytes from staining artifacts (e.g., water artifact).'],
    normalVsAbnormal: 'Presence of even few Schistocytes is a medical emergency (DIC).',
    applications: 'Emergency diagnosis of DIC/TTP.',
    limitations: 'Grading is semi-quantitative and varies between observers.',
    examPoints: 'Anisocytosis = Size. Poikilocytosis = Shape. Schistocytes indicate mechanical hemolysis.',
    viva: [
      { q: 'What is Poikilocytosis?', a: 'Variation in the shape of red blood cells.' },
      { q: 'In which condition are Teardrop cells (Dacrocytes) classically seen?', a: 'Myelofibrosis and Thalassemia.' },
      { q: 'What do Schistocytes signify?', a: 'Fragmented cells indicating mechanical damage to RBCs (Microangiopathic hemolysis).' }
    ],
    mcq: [
      { q: 'Variation in red cell shape is termed?', options: ['Anisocytosis', 'Poikilocytosis', 'Polychromasia', 'Pancytopenia'], answer: 1 },
      { q: 'Helmet cells are another name for?', options: ['Target cells', 'Schistocytes', 'Sickle cells', 'Stomatocytes'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Peripheral_blood_smear_of_a_patient_with_beta-thalassemia.jpg/640px-Peripheral_blood_smear_of_a_patient_with_beta-thalassemia.jpg'
    }
  },
  {
    id: 'hem-inclusions',
    title: 'RBC Inclusion Bodies: Morphology and Stains',
    isImportant: true,
    definition: 'Identification of abnormal intracellular structures within erythrocytes that indicate specifically impaired red cell maturation or metabolic defects.',
    principle: 'Residual DNA, RNA, or denatured protein particles form visible "inclusions" inside RBCs. Some are visible on Leishman stain (basophilic stippling, Howell-Jolly bodies), while others requires supravital stains (Heinz bodies).',
    mechanism: 'Loss of splenic function (asplenia) prevents the removal of these inclusions.',
    types: ['Nuclear Remnants (Howell-Jolly)', 'RNA Precipitates (Basophilic stippling)', 'Iron Granules (Pappenheimer)', 'Denatured Hb (Heinz)'],
    specimen: 'Peripheral smear or supravital mount.',
    reagents: [{ component: 'Leishman or New Methylene Blue', function: 'Visualizing distinct inclusions.' }],
    equipment: ['Microscope (100x)'],
    procedure: [
      'Examine a well-stained peripheral smear for dark dots within RBCs.',
      'Howell-Jolly bodies: single, large, dark purple round dot (DNA).',
      'Basophilic stippling: multiple fine blue granules across the cell (RNA).',
      'Pappenheimer bodies: small, irregular granules in clusters (Iron).'
    ],
    observation: 'Distinct dots or granules inside the erythrocyte cytoplasm.',
    result: 'Report specific inclusion type seen.',
    interpretation: 'Basophilic stippling = Lead poisoning or Thalassemia. Howell-Jolly bodies = Post-splenectomy or Megaloblastic anemia.',
    referenceRange: 'Normally absent.',
    clinicalSignificance: 'Provides specific diagnostic evidence for heavy metal poisoning, asplenia, or specific anemias.',
    sourcesOfError: ['Confusing overlying platelets or stain precipitate for inclusions.'],
    precautions: ['Always correlate with clinical history (e.g., history of splenectomy).'],
    normalVsAbnormal: 'The spleen usually "pits" these out; their presence in circulation indicates splenic dysfunction.',
    applications: 'Toxicology and hematology staging.',
    limitations: 'Requires high-power magnification and clear staining.',
    examPoints: 'Howell-Jolly = DNA. Basophilic stippling = RNA precipitating (Lead poisoning).',
    viva: [
      { q: 'What is the composition of Howell-Jolly bodies?', a: 'Residual nuclear DNA.' },
      { q: 'Basophilic stippling is characteristic of which toxicity?', a: 'Lead poisoning.' },
      { q: 'Which organ normally removes inclusion-containing cells?', a: 'The Spleen (via pitting).' }
    ],
    mcq: [
      { q: 'Pappenheimer bodies consist of?', options: ['DNA', 'RNA', 'Hemoglobin', 'Iron'], answer: 3 },
      { q: 'Basophilic stippling is seen in?', options: ['Iron deficiency', 'Lead poisoning', 'B12 deficiency', 'Viral fever'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Basophilic_stippling_smear.jpg/640px-Basophilic_stippling_smear.jpg'
    }
  }
];
