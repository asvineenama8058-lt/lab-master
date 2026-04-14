export const bloodBankData1 = [
  {
    id: 'bb-abo-slide',
    title: 'ABO Blood Grouping (Forward Slide Method)',
    isImportant: true,
    definition: 'Rapid screening technique identifying A and B antigens on patient red blood cells.',
    principle: 'Based on direct macroscopic agglutination. When RBCs carrying specific antigens (A or B) on their surface are mixed with their corresponding specific antibodies (Anti-A, Anti-B), visual clumping/agglutination occurs due to lattice formation.',
    mechanism: 'IgM pentameric antibodies simultaneously bind multiple RBC antigens, overcoming the zeta potential to form visible macroscopic lattices.',
    types: ['Forward/Cell Grouping'],
    specimen: 'Capillary blood or EDTA whole blood.',
    reagents: [
      { component: 'Anti-A Reagent (Blue)', function: 'Contains Trypan Blue dye and Anti-A IgM to detect A-antigens.' },
      { component: 'Anti-B Reagent (Yellow)', function: 'Contains Acriflavin dye and Anti-B IgM to detect B-antigens.' }
    ],
    equipment: ['Clean glass slides', 'Mixing sticks / toothpicks'],
    procedure: [
      'Place 3 distinct drops of patient blood on a clean glass slide (A, B, and D).',
      'Add one drop of Anti-A reagent to the first blood drop.',
      'Add one drop of Anti-B reagent to the second blood drop.',
      'Mix each drop thoroughly using a separate clean toothpick for each.',
      'Rock the slide gently back and forth for 1-2 minutes.',
      'Observe for macroscopic agglutination immediately.'
    ],
    observation: 'Visible coarse red clumps floating in clear fluid.',
    result: 'Agglutination with Anti-A = Blood Group A. Both = AB. Neither = O.',
    interpretation: 'Identifies major blood group to prevent fatal incompatible transfusions.',
    referenceRange: 'N/A',
    clinicalSignificance: 'ABO incompatibility is the leading cause of lethal acute intravascular hemolytic transfusion reactions.',
    sourcesOfError: ['Drying causes Rouleaux formation, mimicking pseudo-agglutination.'],
    precautions: ['Never use the same mixing stick across different drops to avoid false positives.', 'Read within 2 minutes.'],
    normalVsAbnormal: 'O+ is the most common phenotype globally.',
    applications: 'Emergency blood screening prior to trauma transfusion.',
    limitations: 'Cannot detect weak subgroups (like A2 or Ax) and does not perform reverse serum grouping.',
    examPoints: 'Acriflavin is the yellow dye in Anti-B. Rouleaux causes false positives in slide methods.',
    viva: [
      { q: 'Landsteiner\'s law?', a: 'If an agglutinogen is present on the RBC, the corresponding agglutinin is absent in the plasma, and vice versa.' },
      { q: 'What causes physical clumping?', a: 'IgM pentamers bridging multiple RBCs simultaneously.' },
      { q: 'Why is slide method not the gold standard?', a: 'Dries out quickly causing rouleaux; cannot do reverse grouping easily.' },
      { q: 'What is Bombay blood group?', a: 'Rare group lacking H-antigen (phenotype Oh). Types as O but possesses Anti-H.' },
      { q: 'Are ABO antibodies IgG or IgM?', a: 'Naturally occurring ABO antibodies are primarily IgM (cold reacting).' }
    ],
    mcq: [
      { q: 'Color of Anti-A antisera is:', options: ['Yellow', 'Colorless', 'Blue', 'Green'], answer: 2 },
      { q: 'Principle relies on:', options: ['Precipitation', 'Agglutination', 'Flocculation', 'Coagulation'], answer: 1 },
      { q: 'Agglutination with Anti-B only indicates:', options: ['A', 'B', 'AB', 'O'], answer: 1 },
      { q: 'Agglutination with both indicates:', options: ['A', 'B', 'AB', 'O'], answer: 2 },
      { q: 'Group O individuals have what antigens?', options: ['A', 'B', 'Neither', 'Both'], answer: 2 },
      { q: 'Drying of blood mimics agglutination due to:', options: ['True clumping', 'Rouleaux formation', 'Bacterial action', 'Lysis'], answer: 1 },
      { q: 'Who discovered ABO?', options: ['Pasteur', 'Koch', 'Landsteiner', 'Fleming'], answer: 2 },
      { q: 'Ig class highly efficient at direct agglutination?', options: ['IgG', 'IgA', 'IgE', 'IgM'], answer: 3 },
      { q: 'Color of Anti-B is:', options: ['Blue', 'Yellow', 'Red', 'Black'], answer: 1 },
      { q: 'NOT present in normal Group A plasma?', options: ['Anti-B', 'Anti-A', 'Fibrinogen', 'Albumin'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/ABO_blood_type.svg/640px-ABO_blood_type.svg.png'
    }
  },
  {
    id: 'bb-abo-tube',
    title: 'ABO Grouping (Tube Method)',
    isImportant: true,
    definition: 'Gold standard clinical method analyzing both cellular antigens and plasma antibodies.',
    principle: 'Involves both Forward (cell) and Reverse (serum) typing. Centrifugation brings cells and antibodies into extremely close physical contact, forcibly overcoming zeta potential, thereby enhancing lattice formation. Detects very weak subgroups and confirms results via cross-referencing plasma antibodies.',
    mechanism: 'Centrifugal force physically bridges the 20nm zeta gap allowing short-reach antibodies to bind efficiently.',
    types: ['Forward Grouping', 'Reverse Grouping'],
    specimen: 'Washed 5% RBC suspension and Patient Serum.',
    reagents: [
      { component: 'Known Antisera', function: 'Anti-A and Anti-B used for Forward Typing.' },
      { component: 'Known Reagent Red Cells', function: 'A1, B, and O cells used for Reverse Typing.' }
    ],
    equipment: ['Test tubes (10x75mm)', 'Centrifuge'],
    procedure: [
      'Forward: Add 1 drop 5% patient RBC suspension into A and B tubes. Add 2 drops Anti-A to A; Anti-B to B.',
      'Reverse: Add 2 drops patient serum to Ac, Bc, Oc tubes. Add 1 drop known A-cells to Ac, B-cells to Bc, O-cells to Oc.',
      'Mix all tubes gently.',
      'Centrifuge strictly at 1000 RPM for 1 minute.',
      'Gently resuspend button and grade macroscopic agglutination (4+ to Negative).'
    ],
    observation: 'Formation of 1+ to 4+ solid cell buttons indicating positive reaction.',
    result: 'Correlate Forward and Reverse. Forward Anti-A + Reverse B-Cells = Group A.',
    interpretation: 'A discrepancy between forward and reverse requires deep serological investigation before any transfusion.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Mandatory standard technique in all blood banks securing ABO absolute match.',
    sourcesOfError: ['Over-centrifugation packs the button too permanently, causing a false positive 4+ reading.'],
    precautions: ['Washing patient cells first is vital to remove Wharton\'s jelly (cord blood) and excess proteins.', 'Interpret using a lighted mirror reader.'],
    normalVsAbnormal: 'Reverse Grouping using O cells must always be negative (rules out cold alloantibodies).',
    applications: 'Donor center ABO validations.',
    limitations: 'Technical grading is subjective.',
    examPoints: 'Reverse grouping proves Landsteiner\'s law practically. 5% suspension prevents prozone.',
    viva: [
      { q: 'Why Tube superior to Slide?', a: 'Centrifugation forces cells together, avoids drying, allows grading, and performs reverse grouping.' },
      { q: 'What is Reverse Grouping?', a: 'Testing patient serum against known reagent RED CELLS to detect expected ABO antibodies.' },
      { q: 'Why use exactly a 5% RBC suspension?', a: 'Provides optimal antigen-antibody ratio (zone of equivalence) for maximum lattice.' },
      { q: 'If forward is AB, reverse is?', a: 'No agglutination, group AB plasma lacks Anti-A and Anti-B.' },
      { q: 'What is a 4+ reaction?', a: 'Single, solid large clump with a completely clear background.' }
    ],
    mcq: [
      { q: 'What confirms forward typing?', options: ['Repeating', 'Reverse typing', 'Microscopy', 'Direct Coombs test'], answer: 1 },
      { q: 'Reverse typing uses:', options: ['Patient cells+Anti', 'Patient serum+Known cells', 'Donor+Donor', 'Anti+Anti'], answer: 1 },
      { q: 'Optimal suspension percentage?', options: ['1%', '5%', '20%', '50%'], answer: 1 },
      { q: 'Centrifugation enhances by:', options: ['Heating', 'Forcing cells closer to overcome zeta potential', 'Lysing', 'Denaturing'], answer: 1 },
      { q: 'If forward is O, serum will contain:', options: ['Anti-A', 'Anti-B', 'No antibodies', 'Anti-A and Anti-B'], answer: 3 },
      { q: 'Single solid agglutinate with clear background graded as:', options: ['1+', '2+', '3+', '4+'], answer: 3 },
      { q: 'Failure to wash cord blood leaves what error source?', options: ['Fibrin', 'Wharton\'s Jelly', 'Glucose', 'Lipids'], answer: 1 },
      { q: 'In Group B patient, reverse tube Ac (A-cells) will show:', options: ['No agglutination', 'Heavy Agglutination', 'Hemolysis', 'Clotting'], answer: 1 },
      { q: 'Over-centrifugation causes:', options: ['False negative', 'Cells fly out', 'False positive (cell button won\'t resuspend)', 'Color change'], answer: 2 },
      { q: 'Gold Standard ABO typing method?', options: ['Slide', 'Microplate', 'Tube', 'Capillary'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tabletop_centrifuge.jpg/960px-Tabletop_centrifuge.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Four-point_ab_gradient_tube.jpg/960px-Four-point_ab_gradient_tube.jpg'
    }
  },
  {
    id: 'bb-reverse-group',
    title: 'ABO Reverse Grouping (Serum Typing)',
    isImportant: true,
    definition: 'Confirmatory blood grouping procedure identifying expected naturally occurring antibodies in patient serum.',
    principle: 'Testing the patient\'s serum/plasma against known pooled reagent red blood cells (A, B, and O cells). According to Landsteiner\'s law, individuals lack antigens on their cells and conversely possess corresponding antibodies in their serum. A-group serum will agglutinate B-cells but not A-cells.',
    mechanism: 'Direct agglutination of reagent cells by naturally occurring IgM iso-agglutinins.',
    types: ['Tube Method', 'Gel Card Method'],
    specimen: 'Patient Serum or Plasma.',
    reagents: [
      { component: 'Known A1 Cells', function: 'Reacts with Anti-A in Serum.' },
      { component: 'Known B Cells', function: 'Reacts with Anti-B in Serum.' },
      { component: 'Known O Cells', function: 'Serves as an auto-control to rule out cold alloantibodies.' }
    ],
    equipment: ['Test tubes (10x75mm)', 'Centrifuge'],
    procedure: [
      'Label three tubes as Ac, Bc, and Oc.',
      'Add 2 drops of patient serum to each tube.',
      'Add 1 drop of reagent A1 cells to Ac, B cells to Bc, and O cells to Oc.',
      'Mix gently and centrifuge at 1000 RPM for 1 minute.',
      'Gently resuspend the cell button and read macroscopically.',
      'Correlate the results with Forward Grouping.'
    ],
    observation: 'Strong agglutination in Ac suggests Group B; in Bc suggests Group A; in both suggests Group O.',
    result: 'Reverse group must perfectly match the Forward grouping results.',
    interpretation: 'Essential for cross-verification. Discrepancies may indicate weak subgroups, age-related antibody loss, or cold autoantibodies.',
    referenceRange: 'N/A',
    clinicalSignificance: 'ABO discrepancies are potential life-threatening safety alerts that stop the transfusion process immediately.',
    sourcesOfError: ['Using old reagent cells with low antigen expression.', 'Prozone sensation due to excess serum.'],
    precautions: ['Wait exactly 1 minute during centrifugation.', 'Always include O-cells to rule out pan-agglutination.'],
    normalVsAbnormal: 'Absence of expected antibodies in elderly or neonates is common and normal for those age groups.',
    applications: 'Compulsory part of routine donor and patient blood typing.',
    limitations: 'Cannot be performed on infants under 6 months due to maternal antibody interference or lack of neonate antibody production.',
    examPoints: 'Reverse grouping uses Serum. Reagent A1 cells are standard. O-cells = Control.',
    viva: [
      { q: 'Why is reverse grouping important?', a: 'To verify and confirm the forward cell grouping result and detect ABO discrepancies.' },
      { q: 'Why is it not done in newborns?', a: 'Antibodies in the newborn are usually maternal (IgG) and do not reflect the infant\'s own group; also neonates haven\'t yet produced their own IgM iso-agglutinins.' }
    ],
    mcq: [
      { q: 'Reverse grouping is also known as?', options: ['Cell grouping', 'Serum grouping', 'Minor crossmatch', 'Major crossmatch'], answer: 1 },
      { q: 'Which cells are used as a control in reverse grouping?', options: ['A cells', 'B cells', 'O cells', 'AB cells'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Four-point_ab_gradient_tube.jpg/960px-Four-point_ab_gradient_tube.jpg'
    }
  },
  {
    id: 'bb-rh-typing',
    title: 'Rh (D) Typing',
    isImportant: true,
    definition: 'Detection of the highly immunogenic Rh(D) antigen on red blood cells.',
    principle: 'Detects presence of Rh(D) using Anti-D antisera. Because most natural Anti-D antibodies are IgG (small reach), heavily modified reagents (high protein or chemically modified IgG) are used to physically bridge the gap between RBCs to cause macroscopic agglutination without Coombs serum.',
    mechanism: 'Polished or modified IgG directly binds D-polypeptides traversing the RBC membrane.',
    types: ['Forward Grouping Modification'],
    specimen: 'EDTA blood or 5% washed suspension.',
    reagents: [
      { component: 'Anti-D Reagent', function: 'Colorless reagent containing modified Anti-D IgG.' },
      { component: 'Rh Control Reagent', function: 'Evaluates false positive auto-agglutination.' }
    ],
    equipment: ['Slide or test tubes', 'Lighted view box (warmth)'],
    procedure: [
      'Take a slide; add one drop Anti-D to left side.',
      'Add one drop Rh-Control to right side.',
      'Add drop of patient blood to both.',
      'Mix and gently rock slide on lighted view box (warmth enhances IgG).',
      'Observe for agglutination.'
    ],
    observation: 'Distinct agglutination solely in the test drop.',
    result: 'Agglutination in Anti-D + Negative Control = Rh Positive.',
    interpretation: 'Positive requires Rh Positive blood; Negative strictly requires Rh Negative blood.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Prevents massive alloimmunization in D-negative individuals. Crucial in prenatal care to prevent Hemolytic Disease of the Newborn.',
    sourcesOfError: ['Cold agglutinins will cause both the test and the control to clump, rendering the test invalid.'],
    precautions: ['Always unconditionally use an Rh Control.', 'View box strictly provides necessary 37°C optimal binding temperature.'],
    normalVsAbnormal: 'A positive Rh Control makes the entire typing completely invalid.',
    applications: 'Maternity panels and blood donor centers.',
    limitations: 'Cannot natively detect Weak D (Du) variant on slide.',
    examPoints: 'Anti-D is largely an IgG antibody. Requires Weak D confirmation if negative in donors.',
    viva: [
      { q: 'Color of Anti-D reagent?', a: 'Colorless entirely/clear.' },
      { q: 'Why is Rh Control absolutely necessary?', a: 'Rules out spontaneous false agglutination caused by patient auto-antibodies.' },
      { q: 'If Rh is negative on slide, mandatory step for donors?', a: 'Perform the Du (Weak D) test via Indirect Coombs method.' },
      { q: 'Antibody class is Anti-D?', a: 'IgG (Warm reacting, placental crossing).' },
      { q: 'Condition if Rh- mom carries Rh+ fetus?', a: 'Hemolytic Disease of the Newborn (HDN) / Erythroblastosis Fetalis.' }
    ],
    mcq: [
      { q: 'Most immunogenic antigen in Rh system?', options: ['C', 'E', 'D', 'd'], answer: 2 },
      { q: 'Anti-D reagent color?', options: ['Blue', 'Yellow', 'Red', 'Colorless'], answer: 3 },
      { q: 'Anti-D antibodies are what class?', options: ['IgM', 'IgG', 'IgA', 'IgE'], answer: 1 },
      { q: 'If both Anti-D and Control agglutinate:', options: ['Rh Pos', 'Rh Neg', 'Invalid Test', 'Weak D'], answer: 2 },
      { q: 'Disease caused by Rh incompatibility with fetus?', options: ['Thalassemia', 'Hemophilia', 'Erythroblastosis fetalis (HDN)', 'Sickle'], answer: 2 },
      { q: 'Which antibody crosses placenta?', options: ['IgM', 'IgA', 'IgG', 'IgE'], answer: 2 },
      { q: 'Rh neg given to Rh pos develops:', options: ['Anti-A', 'Anti-D', 'Anti-H', 'No antibodies'], answer: 1 },
      { q: 'Slide testing for Rh best on:', options: ['Ice', 'Dark table', 'Warmed, lighted view box', 'Centrifuge'], answer: 2 },
      { q: 'Person with genotype dd is Rh Pos?', options: ['True', 'False', 'Only males', 'Only females'], answer: 1 },
      { q: 'Donor negative by rapid slide, next step?', options: ['Accept', 'Throw away', 'Perform Weak D (Du) test', 'Type AB'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Metaplastic_atrophic_gastritis_-_body_-_chromogranin_A_--_intermed_mag.jpg/960px-Metaplastic_atrophic_gastritis_-_body_-_chromogranin_A_--_intermed_mag.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Compatibility_testing_concerning_RBCs_2014-02-01_00-42.jpg/960px-Compatibility_testing_concerning_RBCs_2014-02-01_00-42.jpg'
    }
  },
  {
    id: 'bb-weak-d',
    title: 'Weak D (Du) Testing',
    isImportant: true,
    definition: 'Confirmatory test for individuals who appear Rh(D) negative by routine testing but possess a weak or partial expression of the D antigen.',
    principle: 'RBCs with weak D expression do not agglutinate directly with Anti-D during the saline phase. They are incubated with Anti-D at 37°C to allow sensitization (binding of IgG). After washing, AHG (Coombs reagent) is added. If cells are sensitized, AHG bridges them, causing macroscopic agglutination.',
    mechanism: 'Indirect Antiglobulin Test (IAT) methodology to detect low-density Rh antigens.',
    types: ['Indirect Antiglobulin Test for D'],
    specimen: '5% Washed RBC suspension.',
    reagents: [
      { component: 'Anti-D IgG Antisera', function: 'Sensitizes cells.' },
      { component: 'AHG (Coombs Reagent)', function: 'Causes agglutination of sensitized cells.' },
      { component: 'Saline', function: 'Washing agent.' }
    ],
    equipment: ['Incubator (37°C)', 'Centrifuge', 'Test tubes'],
    procedure: [
      'Take 2 drops of Anti-D IgG in a tube.',
      'Add 1 drop of 5% washed patient RBCs (which typed Rh negative by routine method).',
      'Incubate at 37°C for 30 minutes.',
      'Check for agglutination macroscopically (if positive now, it\'s NOT weak D, just a slow reactor).',
      'If negative, wash cells 3-4 times with large volumes of saline.',
      'Add 2 drops of AHG reagent.',
      'Centrifuge at 1000 RPM for 1 minute and read.',
      'If positive now, the patient/donor is Weak D Positive (Du Positive).'
    ],
    observation: 'Macroscopic agglutination after AHG addition.',
    result: 'Agglutination = Weak D Positive (Du Pos). No agglutination = True Rh Negative (after adding check cells).',
    interpretation: 'Weak D donors must be labeled as "Rh Positive" to prevent alloimmunization in Rh-negative recipients. Weak D patients are generally treated as "Rh Negative" to prevent exposure to the D-antigen.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Mandatory for all Rh-negative blood donors to prevent the sensitization of Rh-negative recipients with weak D units.',
    sourcesOfError: ['Inadequate washing resulting in AHG neutralization.', 'Omission of check cells in negative results.'],
    precautions: ['Always include an auto-control (Patient Cells + Saline + AHG) to rule out positive DAT.'],
    normalVsAbnormal: 'True Rh negative is far more common than Weak D variants.',
    applications: 'Compulsory donor screening.',
    limitations: 'Does not differentiate between "Weak D" (low antigen density) and "Partial D" (missing epitopes).',
    examPoints: 'Weak D test is basically an IAT. Donors = Rh Pos. Patients = Rh Neg.',
    viva: [
      { q: 'Why do we test Rh-negative donors for Weak D?', a: 'Because Weak D units can still cause alloimmunization (Anti-D production) in an Rh-negative patient.' },
      { q: 'Is a Weak D patient considered Rh positive or negative for receiving blood?', a: 'Usually considered Rh negative to be safe, although they rarely produce Anti-D.' }
    ],
    mcq: [
      { q: 'Weak D testing uses which principle?', options: ['Direct agglutination', 'Indirect Antiglobulin Test (IAT)', 'Precipitation', 'Neutralization'], answer: 1 },
      { q: 'A donor found Weak D positive should be labeled as?', options: ['Rh Negative', 'Rh Positive', 'O Positive', 'Invalid'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tabletop_centrifuge.jpg/960px-Tabletop_centrifuge.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blood_typing_by_manual_tube_method_-_type_O_positive.jpg/960px-Blood_typing_by_manual_tube_method_-_type_O_positive.jpg'
    }
  }
];
