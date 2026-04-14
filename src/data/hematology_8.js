export const hematologyData8 = [
  {
    id: 'hem-leukemoid',
    title: 'Leukemoid Reaction vs Leukemia Differentiation',
    isImportant: true,
    definition: 'Laboratory differentiation between a high WBC count caused by extreme physiological stress (Leukemoid) and primary bone marrow malignancy (Leukemia).',
    principle: 'Extreme infections or inflammation can cause the WBC count to skyrocket (>50,000/cu.mm), mimicking leukemia. Differentiation depends on history, specific cell markers (LAP score), and presence of a "left shift" without a "leukemic gap".',
    mechanism: 'Massive mobilization of mature and immature myeloid cells from marrow stores during severe sepsis.',
    types: ['Myeloid Leukemoid Reaction', 'Lymphoid Leukemoid Reaction'],
    specimen: 'EDTA blood and Peripheral Blood Smear.',
    reagents: [{ component: 'LAP/NAP Stain', function: 'Stains alkaline phosphatase in mature neutrophils.' }],
    equipment: ['Microscope (100x)'],
    procedure: [
      'Perform a Total Leukocyte Count (TLC).',
      'Examine peripheral smear for cell maturity.',
      'Check for toxic changes (Toxic granulation, Dohle bodies).',
      'Perform LAP (Leukocyte Alkaline Phosphatase) staining.',
      'Grade the intensity of staining in 100 neutrophils.'
    ],
    observation: 'Leukemoid shows mature neutrophils with toxic changes. Leukemia (CML) shows cells at all stages (myeloblasts to neutrophils) with increased basophils.',
    result: 'Report TLC and LAP Score (Normal LAP: 20-100).',
    interpretation: 'High LAP Score (>100) favors Leukemoid reaction. Low LAP Score (<20) favors CML (Leukemia).',
    referenceRange: 'LAP Score: 20-100.',
    clinicalSignificance: 'Critical for avoiding unnecessary chemotherapy in patients with severe infections masquerading as leukemia.',
    sourcesOfError: ['Incorrect staining time for LAP.', 'Evaluating degranulated or old cells.'],
    precautions: ['Always correlate with the presence of an underlying infection (e.g., Pneumonia, Sepsis).'],
    normalVsAbnormal: 'Pathological low LAP in CML is a key diagnostic differentiator.',
    applications: 'Emergency differential diagnosis of extreme leukocytosis.',
    limitations: 'LAP score is highly subjective; largely replaced by cytogenetics (Philadelphia chromosome).',
    examPoints: 'Leukemoid = High LAP. CML = Low LAP. Toxic granulation is common in Leukemoid.',
    viva: [
      { q: 'What is a Leukemoid reaction?', a: 'A benign, high WBC count (>50,000) mimicking leukemia, caused by severe infection.' },
      { q: 'How does LAP score help in differentiation?', a: 'LAP is high in Leukemoid (stress) and low in CML (malignancy).' }
    ],
    mcq: [
      { q: 'LAP score is significantly decreased in which condition?', options: ['Leukemoid reaction', 'CML', 'Polycythemia', 'Pregnancy'], answer: 1 },
      { q: 'Which cell is counted for the LAP score?', options: ['Lymphocyte', 'Neutrophil', 'Monocyte', 'Eosinophil'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/White_blood_cells_smear.jpg/640px-White_blood_cells_smear.jpg'
    }
  },
  {
    id: 'hem-wbc-abn',
    title: 'WBC Morphological Abnormalities: Toxic Changes',
    isImportant: false,
    definition: 'Identification and grading of reactive changes in neutrophils that signify acute severe systemic inflammation or toxicity.',
    principle: 'During severe infections, neutrophil maturation is accelerated, leading to cytoplasmic defects such as coarse granules (Toxic granulation), blue cytoplasmic patches (Dohle bodies), and clear spaces (Vacuolation).',
    mechanism: 'Rapid cell production leading to persistence of primary granules and retained ribosomal RNA.',
    types: ['Toxic Granulation', 'Dohle Bodies', 'Cytoplasmic Vacuolation', 'Hypersegmentation'],
    specimen: 'Peripheral Blood Smear.',
    reagents: [{ component: 'Leishman Stain', function: 'Standard morphology visualization.' }],
    equipment: ['Microscope (100x)'],
    procedure: [
      'Examine 100 neutrophils under oil immersion.',
      'Check for coarse, dark purple granules (Toxic granulation).',
      'Check for faint blue, pear-shaped cytoplasmic inclusions (Dohle bodies).',
      'Check for clear circular "holes" in cytoplasm (Vacuoles).',
      'Grade the changes as 1+ (mild) to 4+ (severe).'
    ],
    observation: 'Neutrophils look "angry" with dark spots and bluish cytoplasm.',
    result: 'Report specific findings and their grade.',
    interpretation: 'Presence indicates severe bacterial sepsis, burns, or drug toxicity.',
    referenceRange: 'Normal neutrophils have fine pink granules and no vacuoles.',
    clinicalSignificance: 'Predictive of bacterial infection severity; absence of toxic changes in a high WBC count may suggest a non-infectious cause.',
    sourcesOfError: ['Over-staining causing normal granules to look toxic.', 'Vacuolation can occur as a storage artifact in old EDTA blood.'],
    precautions: ['Distinguish Dohle bodies from May-Hegglin inclusions.'],
    normalVsAbnormal: 'Hypersegmented neutrophils (5+ lobes) indicate B12/Folate deficiency.',
    applications: 'Sepsis monitoring.',
    limitations: 'Subjective grading.',
    examPoints: 'Toxic granules = Persistence of primary granules. Dohle bodies = Residual Ribosomal RNA.',
    viva: [
      { q: 'What is a Dohle body?', a: 'A faint blue inclusion in neutrophil cytoplasm representing residual ribosomal RNA.' },
      { q: 'What does hypersegmentation of neutrophils indicate?', a: 'Megaloblastic anemia (Vitamin B12 or Folate deficiency).' }
    ],
    mcq: [
      { q: 'Dohle bodies are composed of?', options: ['DNA', 'RNA', 'Hemoglobin', 'Iron'], answer: 1 },
      { q: 'Hypersegmented neutrophils have more than how many lobes?', options: ['3', '4', '5', '2'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'hem-plt-indices',
    title: 'Platelet Indices and Function Overview',
    isImportant: false,
    definition: 'Assessment of circulating platelet parameters and their ability to successfully initiate primary hemostasis.',
    principle: 'Automated analyzers measure platelet size distributions (Indices). Function is assessed by measuring the rate of aggregation in response to agonists (ADP, Collagen, Epinephrine).',
    mechanism: 'Large platelets (High MPV) are usually younger and more metabolically active.',
    types: ['Mean Platelet Volume (MPV)', 'Platelet Distribution Width (PDW)', 'Platelet Aggregometry'],
    specimen: 'EDTA blood for indices; Citrated Platelet Rich Plasma (PRP) for function tests.',
    reagents: [{ component: 'ADP / Epinephrine', function: 'Induce platelet aggregation in vitro.' }],
    equipment: ['Automated Analyzer', 'Aggregometer'],
    procedure: [
      'Indices: Run EDTA blood through analyzer to obtain MPV and PDW.',
      'Function: Separate PRP by slow centrifugation.',
      'Add platelet agonist (ADP) to PRP.',
      'Measure change in light transmission as platelets aggregate and clear the solution.'
    ],
    observation: 'Solution goes from turbid to clear as aggregates form and settle.',
    result: 'Indices reported in fL and %; Function reported as % aggregation.',
    interpretation: 'High MPV with low count suggests peripheral destruction (e.g., ITP). Low MPV with low count suggests bone marrow failure.',
    referenceRange: 'MPV: 7 - 11 fL | PDW: 9 - 14 %.',
    clinicalSignificance: 'Differentiation of thrombocytopenia causes and diagnosis of hereditary disorders like Glanzmann Thrombasthenia.',
    sourcesOfError: ['Platelet clumping in EDTA falsely increases indices.', 'Heparin usage inhibits aggregation.'],
    precautions: ['Avoid traumatic blood draw which pre-activates platelets.'],
    normalVsAbnormal: 'Flat aggregation curves with ADP/Collagen indicate Glanzmann\'s disease.',
    applications: 'Cardiology (monitoring anti-platelet drugs) and hematology.',
    limitations: 'Function tests are specialized and expensive.',
    examPoints: 'MPV = Average size. PDW = Size variation. High MPV in ITP.',
    viva: [
      { q: 'What is MPV?', a: 'Mean Platelet Volume - the average size of platelets.' },
      { q: 'Name a condition with very large "Giant" platelets.', a: 'Bernard-Soulier Syndrome.' }
    ],
    mcq: [
      { q: 'Which parameter indicates variation in platelet size?', options: ['MPV', 'PDW', 'PCT', 'TLC'], answer: 1 },
      { q: 'In which condition is MPV usually high despite a low count?', options: ['Aplastic anemia', 'ITP', 'Chemotherapy', 'Viral fever'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'hem-clot-retract',
    title: 'Clot Retraction Test',
    isImportant: false,
    definition: 'A simple qualitative or semi-quantitative test measuring the ability of a blood clot to shrink and express serum.',
    principle: 'When whole blood clots, the contractile protein "thrombosthenin" in platelets causes the fibrin mesh to contract. This contraction squeezes out serum. The degree of contraction is directly proportional to the number and quality of platelets.',
    mechanism: 'Physiological contraction of fibrin-platelet meshwork.',
    types: ['Macfarlane Method (Quantitative)', 'Tube Method (Qualitative)'],
    specimen: 'Venous whole blood (no anticoagulant).',
    reagents: [{ component: 'None', function: 'Uses native clotting mechanisms.' }],
    equipment: ['Graduated test tube', 'Wire coil / glass rod', 'Water bath (37°C)'],
    procedure: [
      'Take 5 ml of venous blood in a graduated test tube.',
      'Place a wire coil or glass rod into the tube.',
      'Incubate at 37°C.',
      'Allow the blood to clot around the wire.',
      'After 1-2 hours, carefully lift the wire (with the attached clot) out of the tube.',
      'Measure the volume of expressed serum remaining in the tube.'
    ],
    observation: 'Clot shrinks away from the tube walls.',
    result: 'Clot Retraction % = (Volume of serum expressed / Total volume of blood) x 100.',
    interpretation: 'Normal retraction is 40-60%.',
    referenceRange: '40% to 60% of original volume.',
    clinicalSignificance: 'Screening for platelet function (Thrombasthenia) and severe fibrinogen deficiency. Poor retraction is a hallmark of Glanzmann\'s Thrombasthenia.',
    sourcesOfError: ['Hyperfibrolytic states causing the clot to dissolve before retracting.', 'Severe anemia (low RBCs leave more serum space).'],
    precautions: ['Ensure tube is clean; glass surface helps start the process.'],
    normalVsAbnormal: 'Zero or poor retraction with normal platelet count is highly suggestive of functional platelet defects.',
    applications: 'Bedside screening for bleeding disorders.',
    limitations: 'Subject to hematocrit levels (high Hct = low serum volume).',
    examPoints: 'Clot retraction is a PLATELET function test. It uses native whole blood.',
    viva: [
      { q: 'Which protein in platelets is responsible for clot retraction?', a: 'Thrombosthenin (an actomyosin-like protein).' },
      { q: 'In which condition is clot retraction severely impaired despite normal platelet count?', a: 'Glanzmann\'s Thrombasthenia.' }
    ],
    mcq: [
      { q: 'Clot retraction is primarily a test for?', options: ['Coagulation factors', 'Platelet function', 'Fibrinolysis', 'RBC count'], answer: 1 },
      { q: 'The Macfarlane method measures?', options: ['Bleeding time', 'Clotting time', 'Clot retraction', 'ESR'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lab_glassware.jpg/960px-Lab_glassware.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  }
];
