export const hematologyData7 = [
  {
    id: 'hem-bm',
    title: 'Bone Marrow Smear Preparation Principles',
    isImportant: true,
    definition: 'Methodology strictly guiding the preparation of bone marrow aspirates for histological examination.',
    principle: 'Bone marrow aspirate containing spicules is expelled onto a slide. Spicules are isolated, gently crushed, and smeared using Romanowsky stains to evaluate megakaryocytes, M:E ratio, and cellular morphology.',
    mechanism: 'Visual microscopic evaluation of hematopoiesis.',
    types: ['Aspiration Smear', 'Trephine Biopsy Touch Imprint'],
    specimen: 'Bone marrow aspirate.',
    reagents: [{ component: 'Leishman / May-Grunwald Giemsa Stain', function: 'Cellular differentiation.' }],
    equipment: ['Slides', 'Microscope'],
    procedure: ['Isolate marrow fragments (spicules).', 'Make crush smears.', 'Air dry and fix.', 'Stain.'],
    observation: 'Various developmental stages of myeloid, erythroid, and megakaryocytic lineages.',
    result: 'Report Myeloid:Erythroid (M:E) ratio.',
    interpretation: 'Aids in diagnosing Leukemias and Aplastic Anemia.',
    referenceRange: 'Normal M:E ratio is 3:1 to 4:1.',
    clinicalSignificance: 'Ultimate diagnostic arbiter for complex hematological malignancies.',
    sourcesOfError: ['Aspirating too much blood physically dilutes the marrow (dry tap).'],
    precautions: ['Process immediately to prevent clotting.'],
    normalVsAbnormal: 'Reversed M:E ratio safely indicates erythroid hyperplasia.',
    applications: 'Oncology diagnostics.',
    limitations: 'Highly painful and invasive procedure.',
    examPoints: 'Normal M:E ratio safely remains 3:1.',
    viva: [{ q: 'What is a dry tap?', a: 'Clinical failure to aspirate liquid marrow safely.' }],
    mcq: [{ q: 'The normal M:E safely ratio heavily is roughly:', options: ['1:1', '3:1', '10:1', '1:3'], answer: 1 }],
    images: { instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg', reaction: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Complete_blood_count_and_differential.jpg' }
  },
  {
    id: 'hem-aec',
    title: 'Absolute Eosinophil Count (AEC)',
    isImportant: true,
    definition: 'A specialized direct counting method to determine the exact number of eosinophils per microliter of blood.',
    principle: 'Blood is diluted with a specific fluid (e.g., Dunger\'s or Pilot\'s fluid) that contains a dye (Eosin or Phloxine) to stain eosinophil granules and a chemical (acetone or propylene glycol) to lyse all other leukocytes and erythrocytes. The eosinophils are then counted using a Neubauer chamber.',
    mechanism: 'Selective staining of acidophilic granules and osmotic lysis of non-target cells.',
    types: ['Direct Method (Dunger\'s)', 'Indirect Calculation (DLC x TLC)'],
    specimen: 'EDTA blood.',
    reagents: [
      { component: 'Eosin/Phloxine', function: 'Stains eosinophil granules a bright red/pink.' },
      { component: 'Acetone', function: 'Lyses RBCs and all other WBCs except eosinophils.' },
      { component: 'Distilled Water', function: 'Diluent volume.' }
    ],
    equipment: ['Neubauer Counting Chamber', 'WBC Pipette', 'Microscope'],
    procedure: [
      'Draw blood to the 0.5 mark in a WBC pipette.',
      'Draw Dunger\'s fluid to the 11 mark (1:20 dilution).',
      'Mix thoroughly for 2-3 minutes.',
      'Charge the Neubauer chamber and allow cells to settle for 5-10 minutes in a moist chamber.',
      'Count all eosinophils in the entire 9 large squares of the chamber under 10x objective.'
    ],
    observation: 'Bright pink/red granular cells visible against a clear background.',
    result: 'AEC = (Number of cells x Dilution) / Volume. AEC = (N x 20) / 0.9 = N x 22.2.',
    interpretation: 'AEC = Total WBC count x % of Eosinophils (if calculated indirectly).',
    referenceRange: '40 - 440 cells/cu.mm',
    clinicalSignificance: 'Diagnostic for allergic disorders, parasitic infestations, and eosinophilic leukemias.',
    sourcesOfError: ['Inadequate settling time.', 'Using expired Dunger\'s fluid (acetone evaporates).'],
    precautions: ['Count within 30 minutes as eosinophils eventually disintegrate in the diluent.'],
    normalVsAbnormal: 'Eosinophilia (>500) indicates allergic/parasitic response. Eosinopenia seen in acute stress or Cushing\'s.',
    applications: 'Monitoring asthma and tropical eosinophilia.',
    limitations: 'Direct method is more accurate but requires specialized reagents.',
    examPoints: 'AEC = (Cells x 20) / 0.9. Formula unit is cells/cu.mm.',
    viva: [
      { q: 'What is the function of acetone in Dunger’s fluid?', a: 'To lyse all WBCs and RBCs, leaving only eosinophils behind.' },
      { q: 'Mention two conditions causing Eosinophilia.', a: 'Bronchial asthma and Parasitic infestations (like Ascariasis).' }
    ],
    mcq: [
      { q: 'Which fluid is used for direct AEC count?', options: ['Turk\'s fluid', 'Dunger\'s fluid', 'Hayem\'s fluid', 'Rees-Ecker'], answer: 1 },
      { q: 'Which dye in AEC fluid specifically stains the granules red?', options: ['Gentian violet', 'Eosin', 'Methylene blue', 'Safranin'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'hem-anc',
    title: 'Absolute Neutrophil Count (ANC)',
    isImportant: true,
    definition: 'The absolute number of circulating neutrophils per microliter of blood, used to assess infection risk.',
    principle: 'Calculated mathematically using the Total Leukocyte Count (TLC) and the percentage of neutrophils (Bands + Segmented) from the Differential Leukocyte Count (DLC).',
    mechanism: 'Mathematical derivation of leukocyte subpopulations.',
    types: ['Calculated Parameter'],
    specimen: 'Computed from CBC data.',
    reagents: [{ component: 'None', function: 'Calculated value.' }],
    equipment: ['Calculator'],
    procedure: [
      'Perform a Total Leukocyte Count (TLC).',
      'Perform a Differential Leukocyte Count (DLC) to find % of Neutrophils.',
      'Multiply TLC by the neutrophil percentage.',
      'ANC = [TLC x (% Neutrophils + % Band cells)] / 100.'
    ],
    observation: 'Numerical value indicating immune competence.',
    result: 'ANC = ______ cells/cu.mm.',
    interpretation: 'Used to grade the severity of neutropenia.',
    referenceRange: '1500 - 8000 cells/cu.mm',
    clinicalSignificance: 'Critical marker for patients undergoing chemotherapy. ANC < 500 indicates "Medical Emergency" due to high risk of life-threatening sepsis.',
    sourcesOfError: ['Inaccurate DLC due to counting too few cells (count 200 cells in severe neutropenia).'],
    precautions: ['Always include Band cells in the calculation.'],
    normalVsAbnormal: 'Mild Neutropenia (1000-1500), Moderate (500-1000), Severe (<500).',
    applications: 'Chemotherapy dosing, screening for agranulocytosis.',
    limitations: 'Relies on the accuracy of both manual TLC and DLC.',
    examPoints: 'ANC < 500 = Severe Neutropenia risk. Formula: (TLC x % Neutrophils) / 100.',
    viva: [
      { q: 'What is the formula for ANC?', a: 'ANC = (WBC count × % Neutrophils) / 100.' },
      { q: 'What is the clinical significance of an ANC < 500?', a: 'It indicates a very high risk of life-threatening infections.' }
    ],
    mcq: [
      { q: 'Which level of ANC is considered critical for infection risk?', options: ['< 2000', '< 1500', '< 500', '< 1000'], answer: 2 },
      { q: 'ANC calculation includes which cell types?', options: ['Lymphocytes', 'Band cells and Segmented Neutrophils', 'Monocytes', 'Basophils'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'hem-iron-stain',
    title: 'Iron Staining (Prussian Blue Reaction)',
    isImportant: true,
    definition: 'A cytochemical stain used to demonstrate ferric iron (hemosiderin) in bone marrow or peripheral blood cells.',
    principle: 'Ionic iron (ferric state) reacts with Acidified Potassium Ferrocyanide to form an insoluble bright blue compound called ferric ferrocyanide (Prussian Blue).',
    mechanism: 'Chemical reaction: 4Fe+++ + 3K4Fe(CN)6 → Fe4[Fe(CN)6]3 (Prussian Blue).',
    types: ['Perls\' Reaction'],
    specimen: 'Bone marrow smears (preferred) or peripheral blood smears.',
    reagents: [
      { component: 'Potassium Ferrocyanide (2%)', function: 'Reacts with iron.' },
      { component: 'Hydrochloric Acid (2%)', function: 'Releases ferric iron from proteins.' },
      { component: 'Safranin or Neutral Red', function: 'Counterstain for nuclei.' }
    ],
    equipment: ['Glass slides', 'Water bath (optional for speed)'],
    procedure: [
      'Fix the air-dried smear in methanol for 10-20 minutes.',
      'Immerse in a freshly prepared mixture of equal parts 2% HCl and 2% Potassium Ferrocyanide.',
      'Leave for 20-30 minutes.',
      'Wash thoroughly with distilled water.',
      'Counterstain with Safranin for 1-2 minutes.',
      'Observe under oil immersion.'
    ],
    observation: 'Iron granules appear as bright blue dots or clumps. Nuclei appear red/pink.',
    result: 'Iron stores graded from 0 to 6+ based on intensity.',
    interpretation: 'Sideroblasts are nucleated RBCs with iron granules. Ring Sideroblasts have iron encircling the nucleus (>1/3 circumference).',
    referenceRange: 'Normal marrow shows 1+ to 3+ iron stores.',
    clinicalSignificance: 'Gold standard for assessing iron stores. Absent in Iron Deficiency Anemia. High in Sideroblastic Anemia (Ring Sideroblasts) and Hemochromatosis.',
    sourcesOfError: ['Contamination by iron-containing dust or tap water.', 'Fading over time if not stored properly.'],
    precautions: ['Use iron-free glassware (wash with HCl).', 'Always run a known positive control slide.'],
    normalVsAbnormal: 'Absence of iron in marrow confirms iron deficiency regardless of serum levels.',
    applications: 'Differential diagnosis of anemia.',
    limitations: 'Invasive (requires bone marrow).',
    examPoints: 'Prussian Blue = Ferric Ferrocyanide. Used to diagnose Sideroblastic Anemia.',
    viva: [
      { q: 'What is the chemical name of the blue color formed?', a: 'Ferric Ferrocyanide.' },
      { q: 'What are Ring Sideroblasts?', a: 'Erythroblasts with iron granules arranged in a ring around at least one-third of the nucleus.' },
      { q: 'In which anemia is bone marrow iron completely absent?', a: 'Iron Deficiency Anemia.' }
    ],
    mcq: [
      { q: 'Prussian blue reaction detects which metal?', options: ['Copper', 'Iron', 'Lead', 'Zinc'], answer: 1 },
      { q: 'Which disease is characterized by "Ring Sideroblasts"?', options: ['IDA', 'Sideroblastic anemia', 'Thalassemia', 'Hemolytic anemia'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sideroblast_with_Prussian_blue_stain.jpg/640px-Sideroblast_with_Prussian_blue_stain.jpg'
    }
  }
];
