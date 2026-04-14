export const bloodBankData6 = [
  {
    id: 'bb-hdn',
    title: 'Hemolytic Disease of the Newborn (HDN) Workup',
    isImportant: true,
    definition: 'Laboratory investigation of fetal or neonatal red cell destruction caused by maternal antibodies crossing the placenta.',
    principle: 'Maternal IgG antibodies (usually Anti-D) cross the placenta and bind to fetal RBCs that possess the corresponding antigen. This leads to fetal anemia and neonatal jaundice. Workup involves testing both mother (prenatal) and infant (postnatal).',
    mechanism: 'Type II Hypersensitivity; placental transport of IgG via Fc receptors.',
    types: ['Rh HDN (Severe)', 'ABO HDN (Common/Mild)', 'Minor group HDN (Kell, Duffy)'],
    specimen: 'Maternal Serum and Infant Cord Blood (EDTA).',
    reagents: [{ component: 'Polyspecific AHG', function: 'For infant DAT.' }],
    equipment: ['Centrifuge', 'Test tubes'],
    procedure: [
      'Maternal Screening: Perform ABO/Rh typing and Antibody Screening (IAT) during first trimester.',
      'If IAT positive, perform Antibody Titer (measure strength of antibody).',
      'Infant (Cord Blood): Perform ABO/Rh typing (beware of "Blocked D").',
      'Perform Direct Antiglobulin Test (DAT) on cord blood.',
      'Bilirubin: Monitor infant serum bilirubin levels continuously.'
    ],
    observation: 'Strongly positive DAT on infant cells confirms immunological sensitization.',
    result: 'Report as DAT positive/negative and maternal antibody titer level.',
    interpretation: 'A maternal Anti-D titer > 1:16 is often considered critical, requiring fetal monitoring (ultrasound).',
    referenceRange: 'DAT should be negative in newborns.',
    clinicalSignificance: 'Predicts the need for intrauterine transfusion or postnatal exchange transfusion to prevent Kernicterus (brain damage).',
    sourcesOfError: ['Blocked Rh: Heavy maternal Anti-D coating fetal cells, preventing routine Anti-D reagent from binding (False Rh Negative).'],
    precautions: ['Always wash cord blood 4-5 times to remove Wharton\'s Jelly, which causes massive false positive agglutination.'],
    normalVsAbnormal: 'ABO HDN usually occurs in Group O mothers with Group A or B infants; it can occur in the first pregnancy.',
    applications: 'Antenatal and Neonatal care.',
    limitations: 'Titer does not always correlate perfectly with fetal disease severity.',
    examPoints: 'Most severe HDN: Rh (Anti-D). Most common: ABO. Key infant test: DAT.',
    viva: [
      { q: 'Which antibody class causes HDN and why?', a: 'IgG, because it is the only antibody class that can actively cross the placenta.' },
      { q: 'Why is ABO HDN usually milder than Rh HDN?', a: 'Because ABO antigens are not well-developed on fetal cells and are also present on other tissues (acting as a "buffer").' }
    ],
    mcq: [
      { q: 'Which test is diagnostic for HDN on cord blood?', options: ['Indirect Coombs', 'Direct Coombs (DAT)', 'Bleeding time', 'Hb electrophoresis'], answer: 1 },
      { q: 'Anti-D prophylaxis (RhIg) is given to which mother?', options: ['Rh Positive', 'Rh Negative', 'Group O', 'Group AB'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'bb-rhig-kb',
    title: 'Rh Immune Globulin (RhIg) and Kleihauer-Betke Test',
    isImportant: true,
    definition: 'Methodologies to prevent Rh alloimmunization in mothers and quantify the amount of fetal blood in maternal circulation.',
    principle: 'RhIg (Anti-D) is given to Rh-negative mothers to clear any Rh-positive fetal cells before the mother\'s immune system can "see" them. The Kleihauer-Betke (KB) test uses the principle that Fetal Hemoglobin (HbF) is resistant to acid elution, while Adult Hemoglobin (HbA) is not.',
    mechanism: 'KB Test: Acid-mediated elution of adult hemoglobin leaving ghost cells.',
    types: ['RhIg Prophylaxis', 'Acid Elution Test (KB)'],
    specimen: 'Maternal EDTA blood (Post-delivery).',
    reagents: [
      { component: 'Citrate-Phosphate Buffer (pH 3.2)', function: 'Acid elution of HbA.' },
      { component: 'Eosin / Erythrosin', function: 'Stains the remaining HbF.' }
    ],
    equipment: ['Microscope', 'Water bath (37°C)'],
    procedure: [
      'Prepare a thin blood smear of maternal blood.',
      'Fix in 80% Ethanol.',
      'Incubate in acid buffer (pH 3.2) at 37°C for 5-10 minutes (HbA dissolves; HbF remains).',
      'Wash and stain with Eosin.',
      'Count 2000 total cells under the microscope.',
      'Calculate: % Fetal Cells = (Number of fetal cells / Total cells) x 100.'
    ],
    observation: 'Fetal cells appear dark pink/red; Maternal cells appear as pale "ghost cells".',
    result: 'Volume of Fetal-Maternal Hemorrhage (FMH) in ml = % Fetal Cells x 50.',
    interpretation: 'Used to calculate the exact dose of RhIg (Anti-D) required. One 300µg vial covers 30ml of fetal whole blood.',
    referenceRange: '< 0.01% (Normal maternal blood).',
    clinicalSignificance: 'Critical for preventing Rh sensitization in the next pregnancy.',
    sourcesOfError: ['Incorrect buffer pH (extremely sensitive).', 'Existing high HbF in mother (e.g., Thalassemia).'],
    precautions: ['Perform KB test within 2 hours of delivery if massive hemorrhage is suspected.'],
    normalVsAbnormal: 'A "large bleed" requires multiple vials of RhIg.',
    applications: 'Obstetric emergencies and Rh prophylaxis.',
    limitations: 'KB test is time-consuming and manual; replaced by flow cytometry in large centers.',
    examPoints: 'Standard RhIg dose is 300 µg. HbF is ACID RESISTANT.',
    viva: [
      { q: 'What is the standard dose of RhIg after delivery?', a: '300 micrograms (covers 30ml of fetal whole blood).' },
      { q: 'Why do fetal cells stay pink in the Kleihauer-Betke test?', a: 'Because fetal hemoglobin (HbF) is resistant to acid elution at pH 3.2.' }
    ],
    mcq: [
      { q: 'Kleihauer-Betke test is used to?', options: ['Type blood', 'Quantify fetal-maternal hemorrhage', 'Detect HIV', 'Measure HbA1c'], answer: 1 },
      { q: 'One 300µg vial of Anti-D neutralizes how much fetal whole blood?', options: ['5 ml', '15 ml', '30 ml', '50ml'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Basophilic_stippling_smear.jpg/640px-Basophilic_stippling_smear.jpg'
    }
  },
  {
    id: 'bb-gel-card',
    title: 'Gel Card Technology (Column Agglutination)',
    isImportant: true,
    definition: 'Modern semi-automated methodology for blood grouping and crossmatching using a dextran acrylamide gel matrix.',
    principle: 'Smaller complexes of non-agglutinated red cells pass through the gel pores during centrifugation, while large agglutinated lattices are trapped at the top or within the gel column. This provides a clear, stable, and objective result.',
    mechanism: 'Size-exclusion chromatography combined with centrifugation.',
    types: ['Neutral Gel (Grouping)', 'Specific Gel (Anti-A, Anti-B)', 'AHG Gel (Coombs/Crossmatch)'],
    specimen: 'Diluted 0.8% or 1% RBC suspension.',
    reagents: [{ component: 'Dextran Acrylamide Gel', function: 'Filter matrix.' }],
    equipment: ['Gel Card Centrifuge', 'Gel Card Incubator', 'Specific pipettes'],
    procedure: [
      'Prepare 0.8% RBC suspension in specific diluent.',
      'Dispense cells and antisera/serum into the micro-tubes of the card.',
      'Incubate the card (for AHG tests) at 37°C for 15 mins.',
      'Centrifuge at a fixed low speed for 10 minutes.',
      'Observe the position of the RBCs in the column.'
    ],
    observation: '4+: Solid band at the top. 0 (Negative): All cells at the bottom. Mixed Field: Cells at both top and bottom.',
    result: 'Stable for 24-48 hours; results can be photocopied or scanned.',
    interpretation: 'Highly objective compared to manual tube testing.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Reduces human error, eliminates the need for cell washing in Coombs tests, and allows for high-throughput automation.',
    sourcesOfError: ['Using too thick a cell suspension (>1%).', 'Using expired cards or damaged gel (bubbles).'],
    precautions: ['Cards must be stored upright at room temperature.', 'Pipette exactly as per manufacturer instructions.'],
    normalVsAbnormal: 'Provides very clear "Mixed Field" reactions (e.g., in A3 subgroup or post-transfusion).',
    applications: 'Standard of care in most modern tertiary care hospitals.',
    limitations: 'High cost of consumables compared to tubes.',
    examPoints: 'Gel card uses 0.8% suspension. Trapped at top = 4+. Bottom = Negative.',
    viva: [
      { q: 'Mention one advantage of Gel technology over Tube method.', a: 'It eliminates the need for washing red cells in the AHG/Coombs phase.' },
      { q: 'What is the strength of a reaction where all cells are at the bottom of the gel?', a: 'Negative (Zero).' }
    ],
    mcq: [
      { q: 'Standard RBC suspension used in Gel Card technology is?', options: ['0.8%', '5%', '20%', '50%'], answer: 0 },
      { q: 'In a 4+ reaction in a gel card, the cells are located?', options: ['At the bottom', 'In the middle', 'At the top', 'All over'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'bb-abs-screening',
    title: 'Antibody Screening (3-Cell Panel)',
    isImportant: false,
    definition: 'Comprehensive screening of a patient\'s serum against a set of fully typed reagent cells to detect non-ABO alloantibodies.',
    principle: 'The patient\'s serum is tested against three separate O-group reagent cells (SI, SII, SIII). These three cells together possess all clinically significant antigens (D, C, E, c, e, K, k, Fy, Jk, Le, M, N, S, s). If the IAT is positive for any cell, it means an "unexpected antibody" is present.',
    mechanism: 'Broad-spectrum antigen exposure in vitro.',
    types: ['3-Cell Panel', '11-Cell Identification Panel'],
    specimen: 'Patient Serum.',
    reagents: [{ component: 'Screening Cells I, II, III', function: 'Source of known antigens.' }],
    equipment: ['Incubator', 'Centrifuge'],
    procedure: [
      'Label 3 tubes. Add 2 drops of serum to each.',
      'Add 1 drop of SI to tube 1, SII to tube 2, SIII to tube 3.',
      'Perform IAT (Incubation -> Wash -> AHG).',
      'Read and record results.'
    ],
    observation: 'Recording which specific screening cell (I, II, or III) was positive helps in the initial identification.',
    result: 'Screen Positive or Screen Negative.',
    interpretation: 'If any cell is positive, the unit is not crossmatch-safe until the antibody is identified and antigen-negative blood is found.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Mandatory for all preoperative surgical patients and donors.',
    sourcesOfError: ['Cold-reacting clinically insignificant antibodies giving false concern.'],
    precautions: ['Check the "Antigram" provided by the manufacturer to see the antigen profile of the cells.'],
    normalVsAbnormal: 'Most regular patients are screen negative.',
    applications: 'Pre-transfusion safety.',
    limitations: 'Cannot identify the exact antibody alone; requires a full "Identification Panel".',
    examPoints: 'Screening cells are Group O. SI, SII, SIII must cover major antigens.',
    viva: [
      { q: 'Why are screening cells always Group O?', a: 'To prevent interference (false positive agglutination) by the naturally occurring Anti-A and Anti-B in the patient\'s serum.' },
      { q: 'What is an "antigram"?', a: 'A chart provided by the manufacturer showing the antigen configuration of each screening/identification cell.' }
    ],
    mcq: [
      { q: 'Antibody screening cells are of what ABO group?', options: ['A', 'B', 'AB', 'O'], answer: 3 },
      { q: 'Standard screening panel for patients usually contains how many cells?', options: ['1', '3', '11', '50'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'bb-qc-temp',
    title: 'Quality Control of Reagents and Temperature Monitoring',
    isImportant: true,
    definition: 'Standardized checks to ensure all blood bank reagents and storage equipment meet safety and performance criteria (NACO standards).',
    principle: 'Daily verification of reagent "Avidity" (strength) and "Specificity" (correctness), along with continuous monitoring of critical storage temperatures.',
    mechanism: 'Self-validation against known positive/negative controls.',
    types: ['Reagent QC', 'Equipment QC'],
    specimen: 'Antisera, Reagent Cells.',
    reagents: [{ component: 'Known A, B, and Rh+ cells', function: 'Controls for daily testing.' }],
    equipment: ['Thermometers', 'Agglutination grading mirror', 'Standard Operating Procedures (SOPs)'],
    procedure: [
      'Daily Reagent Check: Test Anti-A with A-cells (Pos) and B-cells (Neg).',
      'Avidity: Record time taken for 3+ agglutination on slide (should be <10 seconds).',
      'Daily Temperature: Record high/low temperature from refrigerators.',
      'Check alarms by deliberately changing the sensor temperature.',
      'Record Lot numbers and Expiry dates of all currently used reagents.'
    ],
    observation: 'Recording in specific QC Logbooks.',
    result: 'Reagents approved for use or discarded.',
    interpretation: 'Failure of QC means all patient results from that session are invalid.',
    referenceRange: 'Specificity 100% | Avidity < 10s.',
    clinicalSignificance: 'Ensures the reliability of every blood group and crossmatch result issued.',
    sourcesOfError: ['Using expired reagents.', 'Thermometer not calibrated.'],
    precautions: ['Avoid reagent contamination by separate pipettes.', 'Store reagents at 2-8°C when not in use.'],
    normalVsAbnormal: 'Abnormal: Anti-A reacting with B-cells (loss of specificity).',
    applications: 'Compulsory for laboratory accreditation (NABL/NABH).',
    limitations: 'Subject to observer bias in manual grading.',
    examPoints: 'Daily QC is mandatory. NACO standards: record temp twice daily.',
    viva: [
      { q: 'What is "avidity" of an antiserum?', a: 'The speed and strength with which the antiserum reacts with the corresponding antigen (usually measured in seconds to reach 3+ agglutination).' },
      { q: 'How often should the blood bank refrigerator temperature be recorded?', a: 'Minimum twice daily (morning and evening), plus continuous circular chart recording.' }
    ],
    mcq: [
      { q: 'Antisera must be stored at which temperature?', options: ['-20°C', '2-8°C', '22°C', '37°C'], answer: 1 },
      { q: 'QC of Anti-A reagent is done using which cells as a Negative control?', options: ['A-cells', 'B-cells', 'O-cells', 'Rh-cells'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
