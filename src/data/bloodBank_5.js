export const bloodBankData5 = [
  {
    id: 'bb-ahtr',
    title: 'Acute Hemolytic Transfusion Reaction (AHTR)',
    isImportant: true,
    definition: 'A life-threatening medical emergency caused by the rapid destruction of transfused red blood cells by the recipient\'s pre-existing antibodies, usually due to ABO incompatibility.',
    principle: 'Immediate intravascular hemolysis. Recipient IgM antibodies (Anti-A or Anti-B) bind to donor RBC antigens, activating the classical complement pathway (C1-C9), leading to holes in the cell membrane (membrane attack complex) and instant cell lysis.',
    mechanism: 'Complement-mediated intravascular hemolysis triggered by IgM-Antigen interaction.',
    types: ['Immune-mediated (mismatch)', 'Non-immune (thermal/chemical damage)'],
    specimen: 'Post-transfusion blood and urine.',
    reagents: [{ component: 'Manual check', function: 'Comparing donor and recipient registries.' }],
    equipment: ['None (Clinical diagnosis)'],
    procedure: [
      'Stop the transfusion immediately!',
      'Maintain IV access with normal saline.',
      'Check all labels and records for clerical errors.',
      'Collect blood samples from the patient (EDTA and Clotted).',
      'Collect the first voided urine sample.',
      'Return the blood bag and administration set to the blood bank.'
    ],
    observation: 'Clinical: Fever, chills, hypotension, flank pain, "feeling of impending doom". Lab: Hemoglobinemia (pink plasma) and Hemoglobinuria (dark urine).',
    result: 'Immediate laboratory notification of a mismatch.',
    interpretation: 'A single ABO-incompatible unit can be fatal due to disseminated intravascular coagulation (DIC) and acute renal failure.',
    referenceRange: 'N/A',
    clinicalSignificance: 'The most avoided disaster in hematology; almost always due to clerical/administrative error ("Wrong blood to wrong patient").',
    sourcesOfError: ['Incorrect patient identification at the bedside.', 'Mislabeling of tubes in the ward.'],
    precautions: ['Always perform a bedside "Time Out" checking ID and blood bag before spiking the bag.'],
    normalVsAbnormal: 'A "Positive" reaction is an extreme medical emergency.',
    applications: 'Emergency medicine and critical care.',
    limitations: 'Symptoms can be masked in anesthetized surgical patients.',
    examPoints: 'Usually IgM mediated. Causes "Impending Doom". Key lab finding: Pink plasma (hemoglobinemia).',
    viva: [
      { q: 'What is the first and most important step when a transfusion reaction is suspected?', a: 'Stop the transfusion immediately!' },
      { q: 'What cause is most commonly responsible for acute hemolytic reactions?', a: 'Clerical error resulting in ABO incompatibility.' }
    ],
    mcq: [
      { q: 'Which antibody class is typically involved in acute intravascular hemolysis?', options: ['IgG', 'IgM', 'IgE', 'IgA'], answer: 1 },
      { q: 'Visible pink color in post-transfusion plasma indicates?', options: ['Lipemia', 'Hemoglobinemia', 'Icterus', 'Normal result'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'bb-febrile-reaction',
    title: 'Febrile Non-Hemolytic and Allergic Reactions',
    isImportant: false,
    definition: 'Common, usually non-lethal adverse effects of blood transfusion characterized by fever or skin rashes.',
    principle: 'Febrile (FNHTR): Caused by cytokines released from donor leukocytes during storage or recipient antibodies reacting against donor WBCs. Allergic: Recipient IgE reacting against donor plasma proteins.',
    mechanism: 'Cytokine release (Febrile) or Type-I Hypersensitivity (Allergic).',
    types: ['Febrile Non-Hemolytic (FNHTR)', 'Allergic / Urticarial', 'Anaphylactic (Rare/Severe)'],
    specimen: 'None (Primarily clinical diagnosis).',
    reagents: [{ component: 'Antihistamines / Antipyretics', function: 'Symptomatic relief.' }],
    equipment: ['Thermometer'],
    procedure: [
      'Stop transfusion and evaluate for hemolysis (ruling out AHTR).',
      'Febrile: Rise in temperature >1°C during or shortly after transfusion.',
      'Allergic: Development of hives (urticaria), itching (pruritus), or wheezing.',
      'Administer Paracetamol for FNHTR or Promethazine for allergic reactions.'
    ],
    observation: 'Monitoring baseline and hourly vitals during transfusion.',
    result: 'Clinical resolution after symptomatic treatment.',
    interpretation: 'Usually benign but must be distinguished from more severe reactions.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Most frequent types of transfusion reactions seen in hospital practice.',
    sourcesOfError: ['Existing fever in patient due to infection falsely attributed to transfusion.'],
    precautions: ['Use of Leuko-reduced blood components significantly reduces the incidence of FNHTR.'],
    normalVsAbnormal: 'Urticaria (Hives) is not an emergency; Anaphylaxis is.',
    applications: 'Bedside monitoring.',
    limitations: 'Difficult to predict without a prior history.',
    examPoints: 'FNHTR = 1°C temp rise. Allergic = IgE mediated. Leuko-reduction prevents FNHTR.',
    viva: [
      { q: 'Define a Febrile Non-Hemolytic Transfusion Reaction (FNHTR).', a: 'A rise in body temperature of 1°C or more occurring during or within 4 hours of transfusion without any other cause.' },
      { q: 'How can FNHTR be prevented in multi-transfused patients?', a: 'By using Leuko-depleted (leukocyte reduced) blood components.' }
    ],
    mcq: [
      { q: 'Most common cause of FNHTR is?', options: ['Donor RBCs', 'Donor WBCs and cytokines', 'Donor Platelets', 'Recipient RBCs'], answer: 1 },
      { q: 'Urticaria (hives) during transfusion is what type of reaction?', options: ['Hemolytic', 'Febrile', 'Allergic', 'Infectious'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'bb-rx-investigation',
    title: 'Investigation of Transfusion Reactions (Protocol)',
    isImportant: true,
    definition: 'The standardized laboratory workup performed once a transfusion reaction is reported to identify the cause and type of reaction.',
    principle: 'Comparison of pre-transfusion and post-transfusion samples. The protocol primarily focuses on ruling out ABO incompatibility (Hemolytic reaction) and septicemia (Infected unit).',
    mechanism: 'Serological and biochemical re-validation.',
    types: ['Immediate Workup', 'Extended Workup'],
    specimen: 'Blood Bag, Recipient Post-Transfusion EDTA blood, Post-Transfusion Urine.',
    reagents: [{ component: 'AHG Reagent', function: 'For post-transfusion DAT.' }],
    equipment: ['Microscope', 'Centrifuge', 'Bacteriology culture media'],
    procedure: [
      'Clerical Check: Re-verify all names and numbers on bag and forms.',
      'Visual Check: Centrifuge post-transfusion blood and look for pink/red serum (hemolysis).',
      'DAT: Perform a Direct Coombs Test on post-transfusion sample (Check for sensitized donor cells in patient).',
      'ABO/Rh re-typing: Re-test both pre and post-transfusion samples and the blood bag.',
      'Crossmatch: Re-perform the crossmatch through AHG phase.',
      'Urine Analysis: Check for free hemoglobin (Hemoglobinuria).',
      'Culture: If sepsis suspected, culture the remaining blood in the bag.'
    ],
    observation: 'Positive DAT or visible hemolysis suggests a hemolytic reaction.',
    result: 'Report justifying the reaction type (e.g., "Confirmed ABO Mismatch").',
    interpretation: 'A positive post-transfusion DAT that was negative pre-transfusion is diagnostic of an immune-mediated reaction.',
    referenceRange: 'Pre and Post results should be identical.',
    clinicalSignificance: 'Mandatory documentation for clinical safety and legal records.',
    sourcesOfError: ['Over-dilution of post-transfusion sample with IV fluids.', 'Late reporting (hemolysis may clear within a few hours).'],
    precautions: ['Always treat every suspected reaction as a hemolytic emergency until proven otherwise.'],
    normalVsAbnormal: 'Abnormal: Any discrepancy between pre and post-transfusion results.',
    applications: 'Quality assurance and troubleshooting.',
    limitations: 'Mild allergic reactions may show no laboratory abnormalities.',
    examPoints: 'First lab step: Visual check for hemolysis. Key test: Post-transfusion DAT.',
    viva: [
      { q: 'What is the most important laboratory test for investigating a hemolytic reaction?', a: 'Direct Antiglobulin Test (DAT) on the post-transfusion sample.' },
      { q: 'Why is urine examined after a reaction?', a: 'To check for Hemoglobinuria, which signifies severe intravascular hemolysis.' }
    ],
    mcq: [
      { q: 'Presence of free hemoglobin in the post-transfusion urine suggests?', options: ['Normal result', 'Intravascular hemolysis', 'Liver disease', 'Dehydration'], answer: 1 },
      { q: 'Correct procedure for a suspected reaction is?', options: ['Slow down', 'Stop and return bag to lab', 'Give aspirin', 'Continue'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tabletop_centrifuge.jpg/960px-Tabletop_centrifuge.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blood_typing_by_manual_tube_method_-_type_O_positive.jpg/960px-Blood_typing_by_manual_tube_method_-_type_O_positive.jpg'
    }
  },
  {
    id: 'bb-compatibility-logic',
    title: 'Compatibility Matrix and Interpretation',
    isImportant: true,
    definition: 'Scientific logical framework determining which blood groups can safely donate to or receive from each other.',
    principle: 'Compatibility depends on the absence of corresponding antibodies in the recipient\'s plasma against the donor\'s RBC antigens. Transfusion of whole blood requires an EXACT match (A to A); PRBC requires a compatible match (O can give to A).',
    mechanism: 'Antigen-Antibody non-interaction logic.',
    types: ['RBC Compatibility', 'Plasma Compatibility'],
    specimen: 'N/A (Theoretical framework).',
    reagents: [{ component: 'None', function: 'Logic based.' }],
    equipment: ['None'],
    procedure: [
      'For RBCs: O can give to all (Universal Donor); AB can receive from all (Universal Recipient).',
      'For Plasma: AB can give to all (Universal Donor); O can receive from all (Universal Recipient).',
      'For Rh: Rh- can give to Rh+; Rh+ should not give to Rh-.'
    ],
    observation: 'Matrix table visualization.',
    result: 'Correct unit selection for any patient group.',
    interpretation: 'Universal donor refers to Group O NEGATIVE for RBCs.',
    referenceRange: 'N/A',
    clinicalSignificance: 'The foundational logic of all transfusion medicine.',
    sourcesOfError: ['Confusing Plasma compatibility rules with RBC compatibility rules (they are opposites).'],
    precautions: ['In emergencies, O-Positive can often be given to males and post-menopausal females to save O-Negative stocks.'],
    normalVsAbnormal: 'Giving A cells to a B patient causes instant death.',
    applications: 'Emergency triage and routine inventory management.',
    limitations: 'Does not account for rare "minor" antigens like Kell or Kidd.',
    examPoints: 'Universal RBC Donor: O Neg. Universal Plasma Donor: AB. Rule: Receive antigens you already have.',
    viva: [
      { q: 'Why is Group O considered the universal donor for red cells?', a: 'Because O-type red cells lack both A and B antigens, so they cannot be attacked by Anti-A or Anti-B antibodies in the recipient.' },
      { q: 'Who is the universal donor for Fresh Frozen Plasma (FFP)?', a: 'Group AB (their plasma lacks both Anti-A and Anti-B antibodies).' }
    ],
    mcq: [
      { q: 'Universal donor for PRBC is?', options: ['O Pos', 'O Neg', 'AB Pos', 'AB Neg'], answer: 1 },
      { q: 'A group B recipient can receive red cells from?', options: ['Group A', 'Group B and O', 'Group AB', 'None of these'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/ABO_blood_type.svg/640px-ABO_blood_type.svg.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Compatibility_testing_concerning_RBCs_2014-02-01_00-42.jpg/960px-Compatibility_testing_concerning_RBCs_2014-02-01_00-42.jpg'
    }
  },
  {
    id: 'bb-emergency-protocol',
    title: 'Emergency Transfusion Protocol',
    isImportant: true,
    definition: 'Standard operating procedure for the immediate release of uncrossmatched or partially crossmatched blood in life-threatening hemorrhage.',
    principle: 'The risk of patient death from hemorrhage outweights the risk of a hemolytic reaction. Priority order: Uncrossmatched O-Negative > Uncrossmatched Group Specific > Saline Crossmatched > Full AHG Crossmatched.',
    mechanism: 'Risk minimization during clinical crisis.',
    types: ['Level 1 (Immediate - O Neg)', 'Level 2 (Group specific)', 'Level 3 (Saline XM)'],
    specimen: 'Patient blood sample (if available).',
    reagents: [{ component: 'None', function: 'Emergency supply.' }],
    equipment: ['Blood warmer', 'Rapid infuser'],
    procedure: [
      'Clinician signs "Emergency Release / Waiver of Crossmatch" form.',
      'Step 1: Instantly issue O-Negative PRBC (if female of childbearing age) or O-Positive (if male/older female).',
      'Step 2: Rapidly type the patient (ABO/Rh) and switch to group-specific uncrossmatched blood.',
      'Step 3: Perform "Immediate Spin" saline crossmatch and issue if negative.',
      'Step 4: Continue full AHG crossmatch in the background; notify physician immediately if any incompatibility is found later.'
    ],
    observation: 'Monitoring donor for signs of shock or reaction.',
    result: 'Fastest possible restoration of circulating volume and oxygen-delivery.',
    interpretation: 'Balance of probability favors immediate action in Grade IV shock.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Standard in trauma centers and labor rooms (postpartum hemorrhage).',
    sourcesOfError: ['Using cold blood too fast (causes cardiac arrhythmia).'],
    precautions: ['Always require a signed clinical waiver.', 'Use a blood warmer for high-volume rapid infusion.'],
    normalVsAbnormal: 'Protocol successful if patient stabilizes without delayed hemolysis.',
    applications: 'Trauma, Surgery, Obstetrics.',
    limitations: 'High risk of alloimmunization (Anti-D, Anti-Kell) in survivors.',
    examPoints: 'First choice: O Negative. Must have signed waiver. Background crossmatch is mandatory.',
    viva: [
      { q: 'What kind of blood is issued in a massive trauma if the group is unknown?', a: 'O-Negative PRBCs.' },
      { q: 'What is a "signed waiver" in emergency transfusion?', a: 'A document where the doctor takes responsibility for using uncrossmatched blood due to the severity of the patient\'s condition.' }
    ],
    mcq: [
      { q: 'Best blood for immediate release in a bleeding woman of 25 years?', options: ['O Positive', 'O Negative', 'AB Negative', 'Group Specific'], answer: 1 },
      { q: 'When can uncrossmatched blood be used?', options: ['When tech is tired', 'In life-threatening emergency only', 'For mild anemia', 'Always'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  }
];
