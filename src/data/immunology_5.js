export const immunologyData5 = [
  {
    id: 'imm-electrophoresis',
    title: 'Immunoelectrophoresis (IEP)',
    isImportant: false,
    definition: 'Laboratory technique that combines gel electrophoresis with immunodiffusion to separate and identify complex protein mixtures.',
    principle: 'Proteins are first separated by electrophoresis in a gel. Then, a trough is cut parallel to the electrophoretic migration and filled with antiserum. Both antigen and antibody diffuse toward each other. Where they meet at equivalence, specific precipitin arcs form, identifying different proteins.',
    mechanism: 'Two-stage process: Electrophoretic separation based on charge, followed by passive diffusion precipitation.',
    types: ['Classical IEP', 'Grabar-Williams Method'],
    specimen: 'Serum or concentrated urine.',
    reagents: [
      { component: 'Agarose Gel', function: 'Medium for separation and diffusion.' },
      { component: 'Antiserum (Polyvalent)', function: 'Contains multiple antibodies.' }
    ],
    equipment: ['Electrophoresis chamber', 'Power supply', 'Trough cutter', 'Moist chamber'],
    procedure: [
      'Pour agarose gel on a slide and punch a central well.',
      'Electrophorese the antigen (serum) for 1-2 hours.',
      'Cut a longitudinal trough next to the migration path.',
      'Fill the trough with antiserum.',
      'Incubate in a moist chamber for 18-24 hours.',
      'Observe for precipitin arcs.'
    ],
    observation: 'Elliptical arcs of white precipitate between the trough and the protein path.',
    result: 'Identification of specific proteins (e.g., IgG, Altbumin, IgA).',
    interpretation: 'Abnormal arc shapes or positions indicate pathological proteins (e.g., M-protein).',
    referenceRange: 'N/A',
    clinicalSignificance: 'Diagnosis of monoclonal gammopathies (Multiple Myeloma) and immunodeficiencies.',
    sourcesOfError: ['Incorrect trough positioning.', 'Voltage fluctuations during electrophoresis.'],
    precautions: ['Use bar-shaped templates for consistent trough cutting.'],
    normalVsAbnormal: 'Thick, distorted arcs indicate high concentration (hyperexpression).',
    applications: 'Specialized protein analysis.',
    limitations: 'Subjective and requires expert interpretation of arc morphology.',
    examPoints: 'Combines Electrophoresis + Diffusion. Arcs identify proteins.',
    viva: [
      { q: 'What are the two phases of IEP?', a: '1. Electrophoresis of antigens. 2. Immunodiffusion against antibodies.' },
      { q: 'What does a bowing arc indicate?', a: 'High concentration or displacement of a specific protein.' }
    ],
    mcq: [
      { q: 'IEP was originally described by?', options: ['Mancini', 'Ouchterlony', 'Grabar and Williams', 'Widal'], answer: 2 },
      { q: 'Precipitin arcs in IEP resemble?', options: ['Rockets', 'Spikes', 'Ellipses/Arcs', 'Straight lines'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/DNAgel4wiki.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rocket_immunoelectrophoresis.jpg/640px-Rocket_immunoelectrophoresis.jpg'
    }
  },
  {
    id: 'imm-cciep',
    title: 'Counter Current Immunoelectrophoresis (CCIEP)',
    isImportant: true,
    definition: 'Rapid electrophoretic precipitation technique where antigen and antibody are driven toward each other by an electric field.',
    principle: 'Antigen and antibody are placed in wells opposite each other. The pH is chosen (usually 8.6) such that the antigen is negatively charged and moves toward the anode (+), while the antibody (gamma globulin) is less charged and is carried toward the cathode (-) by endosmotic flow. They meet and precipitate rapidly.',
    mechanism: 'Forced migration in opposite directions using electrical and endosmotic forces.',
    types: ['Counter Immunoelectrophoresis (CIE)'],
    specimen: 'Serum, CSF, or body fluids.',
    reagents: [{ component: 'Agarose Gel (pH 8.6)', function: 'Medium with specific endoosmotic properties.' }],
    equipment: ['Electrophoresis chamber', 'Power supply'],
    procedure: [
      'Prepare agarose gel. Punch two parallel rows of wells.',
      'Fill wells in the cathode row with Antigen.',
      'Fill wells in the anode row with Antiserum.',
      'Apply electric current for 30-60 minutes.',
      'Examine for precipitin lines between the wells.'
    ],
    observation: 'A straight white precipitin line between the wells.',
    result: 'Positive (line present) or Negative (no line).',
    interpretation: 'Much faster and more sensitive than Ouchterlony diffusion.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Rapid detection of bacterial antigens (e.g., Cryptococcus, H. influenzae) in CSF, or HBsAg in serum.',
    sourcesOfError: ['Incorrect reversal of polarity.', 'Using buffer with wrong pH (prevents charge difference).'],
    precautions: ['Ensure wells are perfectly aligned for antigens to meet their specific antibodies.'],
    normalVsAbnormal: 'Provides result in 1 hour compared to 24 hours in passive diffusion.',
    applications: 'Emergency detection of microbial antigens.',
    limitations: 'Sensitivity depends on the net charge of the antigen.',
    examPoints: 'Antigen moves to Anode; Antibody moves to Cathode (Endosmosis). FAST.',
    viva: [
      { q: 'Why is it called "Counter Current"?', a: 'Because antigen and antibody move against each other (in opposite directions) due to the electric field and endosmotic flow.' },
      { q: 'How long does CCIEP take?', a: 'Typically 30 to 60 minutes.' }
    ],
    mcq: [
      { q: 'In CCIEP, antibody moves toward the cathode due to?', options: ['Gravity', 'Negative charge', 'Endosmosis', 'Diffusion'], answer: 2 },
      { q: 'CCIEP stands for?', options: ['Cold Current', 'Counter Current', 'Cross Current', 'Central Current'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/DNAgel4wiki.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rocket_immunoelectrophoresis.jpg/640px-Rocket_immunoelectrophoresis.jpg'
    }
  },
  {
    id: 'imm-cft',
    title: 'Complement Fixation Test (CFT) Principle',
    isImportant: true,
    definition: 'Highly sensitive classical serological test used to detect small amounts of specific antibodies using the complement system.',
    principle: 'Consists of two systems: 1. Test system (Antigen + Patient Serum + Complement). 2. Indicator system (Sheep RBC + Anti-sheep RBC antibodies). If the patient has antibodies, they "fix" (consume) the complement. When indicator cells are added, no complement is free to lyse them. No lysis = Positive.',
    mechanism: 'Competitive consumption of complement by Ag-Ab complexes.',
    types: ['Wassermann Test (for Syphilitic reagin)'],
    specimen: 'Inactivated Serum (56°C for 30 mins).',
    reagents: [
      { component: 'Antigen', function: 'Specific target.' },
      { component: 'Guinea Pig Complement', function: 'Standardized source of complement.' },
      { component: 'Hemolytic system', function: 'Sheep RBCs + Amboceptor (hemolysin).' }
    ],
    equipment: ['Water baths', 'Incubator', 'Standardized pipettes'],
    procedure: [
      'Inactivate patient serum (56°C).',
      'Mix Serum + Antigen + standardized Complement. Incubate.',
      'Add Indicator system (Sensitized Sheep RBCs).',
      'Incubate at 37°C for 30-60 minutes.',
      'Check for hemolysis.'
    ],
    observation: 'No Hemolysis: Positive (Complement was used up). Hemolysis: Negative (Complement was free).',
    result: 'The highest dilution showing NO hemolysis is the titer.',
    interpretation: 'Counter-intuitive: Lysis means Negative; No Lysis means Positive.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Historically used for Syphilis, and still used for certain viral and fungal infections (e.g., Histoplasmosis).',
    sourcesOfError: ['Anti-complementary activity of the serum (spontaneous consumption).', 'Deteriorated complement.'],
    precautions: ['Always include multiple controls: Serum control, Antigen control, and Complement control.'],
    normalVsAbnormal: 'Requires precise titration of all components before the actual test.',
    applications: 'Viral and Fungal diagnostics.',
    limitations: 'Technically very demanding and complex to standardize.',
    examPoints: 'Indicator: Sheep RBC. Positive result: NO HEMOLYSIS.',
    viva: [
      { q: 'In CFT, what does no hemolysis signify?', a: 'A positive result (antibodies were present and consumed the complement).' },
      { q: 'Why is guinea pig serum preferred as a complement source?', a: 'It has high levels of c1-c9 and consistent activity.' }
    ],
    mcq: [
      { q: 'The indicator system in CFT consists of sensitized?', options: ['Human RBC', 'Sheep RBC', 'Rabbit WBC', 'Bacterial cells'], answer: 1 },
      { q: 'Positive CFT result is indicated by?', options: ['Precipitation', 'Agglutination', 'Inhibition of hemolysis', 'Complete lysis'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'imm-iha',
    title: 'Indirect Hemagglutination (IHA)',
    isImportant: false,
    definition: 'Passive agglutination technique where soluble antigens are coated onto red blood cells to detect antibodies.',
    principle: 'RBCs (usually sheep or human O) are used as passive carriers of antigens. Soluble antigens are chemically linked to the surface of the RBCs (tanning). When mixed with patient serum containing antibodies, the RBCs agglutinate.',
    mechanism: 'Passive agglutination enhanced by erythrocyte surface properties.',
    types: ['Tanned Red Cell Hemagglutination'],
    specimen: 'Serum.',
    reagents: [{ component: 'Sensitized RBCs', function: 'Antigen-coated carrier cells.' }],
    equipment: ['Micro-well plate', 'Pipettes'],
    procedure: [
      'Perform serial dilutions of patient serum in a micro-plate.',
      'Add a constant volume of sensitized RBC suspension to each well.',
      'Incubate at room temperature for 2 hours.',
      'Observe the settling pattern at the bottom of the wells.'
    ],
    observation: 'Positive: Smooth carpet/mat of cells. Negative: Sharp, compact button at the center.',
    result: 'Highest dilution showing a "mat" is the titer.',
    interpretation: 'More sensitive than standard precipitation for detecting trace antibodies.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Diagnosis of parasitic diseases (Amoebic liver abscess, Hydatid disease) and some bacterial infections.',
    sourcesOfError: ['Non-specific agglutination by heterophile antibodies.', 'Damaged reagent RBCs.'],
    precautions: ['Always include unsensitized RBCs as a negative control for each serum.'],
    normalVsAbnormal: 'Amoebic IHA > 1:128 is clinically significant.',
    applications: 'Parasitology serology.',
    limitations: 'Subjective end-point interpretation.',
    examPoints: 'RBC is a CARRIER. Positive = "Mat" formation. Negative = "Button".',
    viva: [
      { q: 'What is "Passive" agglutination?', a: 'When a soluble antigen is artificially attached to a carrier particle (like RBC or Latex) to make the reaction visible as agglutination.' },
      { q: 'In IHA, what does a central button signify?', a: 'A negative result.' }
    ],
    mcq: [
      { q: 'In IHA, which well pattern indicates a positive result?', options: ['Central button', 'Clear liquid', 'Diffuse mat/carpet', 'Clumped ring'], answer: 2 },
      { q: 'Standard carrier used in IHA is?', options: ['Bacteria', 'Latex', 'Red Blood Cells', 'Charcoal'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-western-blot',
    title: 'Western Blotting Principle',
    isImportant: true,
    definition: 'Analytical method used to identify and quantify specific proteins from a complex mixture after separation by gel electrophoresis.',
    principle: 'Proteins are separated by sodium dodecyl sulfate-polyacrylamide gel electrophoresis (SDS-PAGE) based on molecular weight. They are then transferred (blotted) onto a nitrocellulose membrane. The membrane is probed with specific enzyme-linked antibodies. The enzyme reacts with a substrate to produce a colored band at the exact site of the protein.',
    mechanism: 'Combined separation by size and detection by immunological specificity.',
    types: ['Protein Blotting'],
    specimen: 'Serum or tissue lysates.',
    reagents: [
      { component: 'SDS-PAGE Gel', function: 'Denatures and separates proteins.' },
      { component: 'Nitrocellulose Membrane', function: 'High affinity for proteins (the Blot).' },
      { component: 'Enzyme-linked Secondary Antibody', function: 'Detection signaling.' }
    ],
    equipment: ['SDS-PAGE apparatus', 'Trans-blot chamber', 'Power supply'],
    procedure: [
      'Separate proteins in sample using SDS-PAGE.',
      'Place gel against a nitrocellulose membrane and apply current to "transfer" proteins.',
      'Block non-specific sites on the membrane with dry milk/BSA.',
      'Incubate with specific primary antibody.',
      'Wash and incubate with enzyme-linked secondary antibody.',
      'Add chromogenic substrate.',
      'Identify specific bands (Wait for color development).'
    ],
    observation: 'Specific dark horizontal bands on the white membrane.',
    result: 'Detection of bands at specific molecular weights (kDa).',
    interpretation: 'Pattern recognition (e.g., p24, gp120, gp41 bands for HIV).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'The definitive confirmatory test for HIV and Lyme disease after a positive ELISA screening.',
    sourcesOfError: ['Incomplete transfer from gel to membrane.', 'Excessive background staining due to poor blocking.'],
    precautions: ['Use gloves to handle membrane; skin oils prevent protein binding.'],
    normalVsAbnormal: 'A "Positive" HIV blot requires bands from at least two different gene products (env, gag, pol).',
    applications: 'Research and confirmatory infectious disease testing.',
    limitations: 'Highly technical, expensive, and time-consuming.',
    examPoints: 'Separates by Size. Confirmatory for HIV. Membrane: Nitrocellulose.',
    viva: [
      { q: 'Why is Western Blotting called a "confirmatory" test?', a: 'Because it detects antibodies against multiple specific individual viral proteins (like gp41), providing much higher specificity than ELISA.' },
      { q: 'What is the function of SDS in SDS-PAGE?', a: 'It denatures proteins and gives them a uniform negative charge so they separate strictly based on molecular weight.' }
    ],
    mcq: [
      { q: 'Western blot is used to identify?', options: ['DNA', 'RNA', 'Protein', 'Carbohydrate'], answer: 2 },
      { q: 'Which membrane is commonly used for protein blotting?', options: ['Filter paper', 'Nitrocellulose', 'Charcoal', 'Glass fiber'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/DNAgel4wiki.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Western_blot.png/640px-Western_blot.png'
    }
  }
];
