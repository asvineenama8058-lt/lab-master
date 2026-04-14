export const bloodBankData2 = [
  {
    id: 'bb-cross-major',
    title: 'Major Crossmatch (Full Three-Phase Technique)',
    isImportant: true,
    definition: 'Definitive pre-transfusion compatibility test analyzing patient serum against donor red cells through various thermal and antiglobulin phases.',
    principle: 'Donor\'s red cells are tested against patient\'s serum/plasma. The multi-phase approach ensures detection of all clinically significant antibodies: Saline phase for IgM (cold-reacting), Albumin/Incubation phase for IgG sensitization, and AHG (Coombs) phase for visual macroscopic agglutination of sensitized IgG-coated cells.',
    mechanism: 'Thermal incubation at 37°C enhances IgG binding; AHG reagent (Anti-IgG) bridges bound antibodies to form visible lattices.',
    types: ['Saline Phase', 'Albumin/LISS Phase', 'AHG/Coombs Phase'],
    specimen: 'Patient Serum and 5% washed Donor Red Cells.',
    reagents: [
      { component: '22% Bovine Serum Albumin or LISS', function: 'Enhances antibody uptake by reducing zeta potential.' },
      { component: 'Polyspecific AHG', function: 'Bridges bound IgG/complement.' },
      { component: 'Coombs Check Cells', function: 'Validates negative AHG results.' }
    ],
    equipment: ['Water bath (37°C)', 'Centrifuge', 'Test tubes'],
    procedure: [
      'Label a tube as "Major". Add 2 drops patient serum and 1 drop donor 5% RBCs.',
      'Phase 1 (Saline): Centrifuge at 1000 RPM for 1 min. Read for agglutination/hemolysis (IgM detection).',
      'Phase 2 (Albumin): If negative, add 2 drops 22% BSA/LISS. Incubate at 37°C for 30 mins (15 mins for LISS). Centrifuge and read.',
      'Phase 3 (AHG): If negative, wash cells 3-4 times with saline. Add 2 drops AHG. Centrifuge and read.',
      'Validity: If AHG phase is negative, add 1 drop Check Cells. Must agglutinate to be valid.'
    ],
    observation: 'Hemolysis or agglutination at ANY phase indicates incompatibility.',
    result: 'Compatible = No reaction in any phase. Incompatible = Reaction in any phase.',
    interpretation: 'Only "Compatible" units can be safely issued for transfusion.',
    referenceRange: 'N/A',
    clinicalSignificance: 'The most critical procedure in the blood bank to prevent fatal Acute Hemolytic Transfusion Reactions.',
    sourcesOfError: ['Neutralization of AHG by poor washing.', 'Prozone sensation due to incorrect serum-to-cell ratio.'],
    precautions: ['Always include Check Cells for negative Coombs reactions.', 'Never ignore hemolysis (it is as significant as agglutination).'],
    normalVsAbnormal: 'ABO incompatibility usually shows in phase 1; Rh/Irregular antibodies show in phase 3.',
    applications: 'Standard pre-transfusion protocol.',
    limitations: 'Does not guarantee absolute safety; cannot prevent delayed reactions or allergic responses.',
    examPoints: 'Saline phase = IgM. AHG phase = IgG. Check cells MUST be positive in a valid test.',
    viva: [
      { q: 'What are the three phases of a major crossmatch?', a: 'Saline (Immediate spin), Albumin/Thermal (37°C), and Antiglobulin (AHG/Coombs phase).' },
      { q: 'Why do we wash the cells before adding AHG?', a: 'To remove unbound free globulins that would otherwise neutralize the AHG reagent and cause a false negative result.' }
    ],
    mcq: [
      { q: 'Which phase of crossmatch detects Rh antibodies?', options: ['Saline phase', 'AHG phase', 'Immediate spin', 'Cold phase'], answer: 1 },
      { q: 'Incompatibility at saline phase usually indicates mismatch in which system?', options: ['Rh system', 'ABO system', 'Kell system', 'Duffy system'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Compatibility_testing_concerning_RBCs_2014-02-01_00-42.jpg/960px-Compatibility_testing_concerning_RBCs_2014-02-01_00-42.jpg'
    }
  },
  {
    id: 'bb-cross-minor',
    title: 'Minor Crossmatch',
    isImportant: false,
    definition: 'In-vitro compatibility test analyzing Donor\'s Serum against Patient\'s Red Blood Cells.',
    principle: 'Testing donor plasma for the presence of antibodies directed against the patient\'s antigens. Although historically critical, it is rarely performed in modern blood banking because donor units are already screened for antibodies, and the volume of plasma in a packed RBC unit is too small to cause a clinical reaction.',
    mechanism: 'Interaction between donor iso-agglutinins/alloantibodies and recipient erythrocyte antigens.',
    types: ['Minor Crossmatch'],
    specimen: 'Donor Serum/Plasma and 5% washed Patient RBCs.',
    reagents: [{ component: 'Donor Serum', function: 'Source of antibodies.' }],
    equipment: ['Test tubes', 'Centrifuge'],
    procedure: [
      'Label tube as "Minor".',
      'Add 2 drops of donor serum and 1 drop of patient\'s 5% RBC suspension.',
      'Centrifuge at 1000 RPM for 1 minute.',
      'Gently resuspend and observe for agglutination or hemolysis.'
    ],
    observation: 'Absence or presence of clumping.',
    result: 'Agglutination = Minor match incompatibility.',
    interpretation: 'A positive minor crossmatch indicates the donor has antibodies against the patient; unit should generally not be used if the donor plasma volume is large.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Historically used to prevent "passive" sensitization of the patient from donor plasma.',
    sourcesOfError: ['Incorrect identification of donor/patient samples.'],
    precautions: ['Ensure patient cells are washed to remove autologous serum proteins.'],
    normalVsAbnormal: 'Largely replaced by routine donor antibody screening.',
    applications: 'Rarely used now; primarily in whole blood transfusions where large plasma volumes are involved.',
    limitations: 'Not useful for packed RBC units.',
    examPoints: 'Minor = DC-PS (Donor Cells - Patient Serum? No, it\'s Donor Serum - Patient Cells). Major = PS-DC.',
    viva: [
      { q: 'What is a minor crossmatch?', a: 'Donor\'s serum mixed with patient\'s RBCs.' },
      { q: 'Why is it rarely done today?', a: 'Because donor plasma is already screened for antibodies and most transfusions use PRBC (minimal plasma).' }
    ],
    mcq: [
      { q: 'Minor crossmatch constituents are?', options: ['Donor cells + Patient serum', 'Patient cells + Donor serum', 'Both Donor', 'Both Patient'], answer: 1 },
      { q: 'Minor crossmatch is essential for which component?', options: ['Packed cells', 'FFP', 'Whole blood', 'Platelets'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blood_typing_by_manual_tube_method_-_type_O_positive.jpg/960px-Blood_typing_by_manual_tube_method_-_type_O_positive.jpg'
    }
  },
  {
    id: 'bb-dat',
    title: 'Direct Antiglobulin Test (DAT / Coombs)',
    isImportant: true,
    definition: 'In-vivo antibody detection assay determining autoimmune or alloimmune erythrocyte sensitization.',
    principle: 'Detects strictly IgG antibodies or Complement components that have ALREADY coated/sensitized the patient\'s red blood cells IN VIVO (inside the body natively). Complete washing removes floating unbound proteins, and AHG explicitly bridges the already-sensitized cells, causing physical agglutination.',
    mechanism: 'Antihuman Globulin directly links Fc portions of human IgG currently adhered tightly to the red cell membrane.',
    types: ['Direct Antiglobulin Test'],
    specimen: 'Strictly EDTA un-clotted whole blood.',
    reagents: [
      { component: 'Polyspecific AHG Reagent', function: 'Contains Anti-IgG and Anti-C3d.' },
      { component: 'Coombs Control Cells', function: 'Known IgG-coated RBCs to validate negative outputs.' }
    ],
    equipment: ['Centrifuge', 'Saline dispenser'],
    procedure: [
      'Take patient\'s blood and aggressively wash RBCs 3-4 times with large volumes of saline.',
      'Prepare a 5% suspension of these completely washed cells.',
      'Take 1 drop of washed suspension in a test tube.',
      'Add 2 drops of AHG reagent directly.',
      'Centrifuge solidly at 1000 RPM for 1 minute.',
      'Gently resuspend and read macroscopically.'
    ],
    observation: 'Binding and resulting lattice formation yielding a macroscopic cell button.',
    result: 'Agglutination = Positive DAT (Cells were coated IN VIVO). Negative = Non-coated.',
    interpretation: 'Strictly proves that an immune response is currently actively destroying the patient\'s red cells.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Main diagnostic criteria for Autoimmune Hemolytic Anemia (AIHA), Drug-induced immune hemolysis, and Hemolytic Disease of the Newborn.',
    sourcesOfError: ['A clot in the sample causes non-specific complement uptake, creating massive false positives.'],
    precautions: ['Washing 4 times precisely removes entirely unbound globulins avoiding AHG complete neutralization.', 'Use purely EDTA samples.'],
    normalVsAbnormal: 'A positive DAT generally warrants a full antibody elution study.',
    applications: 'Investigation of active unexplained hemolysis.',
    limitations: 'A positive result merely proves coating, it does not identify the exact specificity of the attached antibody.',
    examPoints: 'DAT = In Vivo. IAT = In Vitro. EDTA prevents in-vitro complement binding.',
    viva: [
      { q: 'Positive DAT confirms?', a: 'Patient\'s RBCs have been bound by antibodies/complement IN VIVO.' },
      { q: 'Three clinical conditions with pos DAT?', a: 'HDN, Autoimmune Hemolytic Anemia (AIHA), Transfusion Reactions.' },
      { q: 'Why wash red cells 3-4 times?', a: 'Strips unbound plasma globulins. If left, they neutralize AHG reagent (false negative).' },
      { q: 'Why is EDTA blood strictly preferred?', a: 'EDTA binds calcium, preventing spontaneous non-specific binding of complement in the tube (false pos).' },
      { q: 'If DAT negative, final step?', a: 'Add IgG-coated Check Cells. Must agglutinate.' }
    ],
    mcq: [
      { q: 'DAT primarily detects:', options: ['Pre-formed in serum', 'In-Vivo sensitization of RBCs', 'In-Vitro', 'Blood groups'], answer: 1 },
      { q: 'Reagent used in Coombs test?', options: ['Anti-D', 'Anti-A', 'Antihuman Globulin (AHG)', 'Bovine albumin'], answer: 2 },
      { q: 'Done to patient RBCs before AHG?', options: ['Heat', 'Wash 3-4 times in saline', 'Lyse', 'Freeze'], answer: 1 },
      { q: 'Inadequate washing results in:', options: ['False pos', 'False neg (AHG neutralization)', 'Hemolysis', 'Clotting'], answer: 1 },
      { q: 'Disease classically diagnosed on infant cord blood?', options: ['Thalassemia', 'Hemolytic Disease of Newborn', 'Syphilis', 'HIV'], answer: 1 },
      { q: 'Preferred sample type?', options: ['Serum', 'EDTA whole blood', 'Citrated', 'Fluoride'], answer: 1 },
      { q: 'Why clotted blood avoided?', options: ['Lacks serum', 'Causes in-vitro complement binding (False +)', 'Destroys RBC', 'Too thick'], answer: 1 },
      { q: 'In AIHA, DAT is typically:', options: ['Pos', 'Neg', 'Invalid', 'Weak only'], answer: 0 },
      { q: 'Add to validate Negative DAT?', options: ['Saline', 'More AHG', 'Coombs Control Cells', 'Distilled water'], answer: 2 },
      { q: 'AHG reagent contains antibodies against:', options: ['Mouse', 'Human globulins (IgG/Complement)', 'RBCs directly', 'Hemoglobin'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tabletop_centrifuge.jpg/960px-Tabletop_centrifuge.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blood_typing_by_manual_tube_method_-_type_O_positive.jpg/960px-Blood_typing_by_manual_tube_method_-_type_O_positive.jpg'
    }
  },
  {
    id: 'bb-iat',
    title: 'Indirect Antiglobulin Test (IAT / Antibody Screening)',
    isImportant: true,
    definition: 'In-vitro diagnostic assay used to detect circulating free clinical antibodies in the patient\'s serum/plasma.',
    principle: 'Patient serum is incubated in vitro with reagent red cells of known antigenic composition (O-group screen cells). If the serum contains antibodies, they coat the reagent cells during incubation at 37°C. After washing, addition of AHG causes observable macroscopic agglutination.',
    mechanism: 'Two-step sensitization then bridge-formation process used to detect cold and warm alloantibodies.',
    types: ['Antibody Screening', 'Antibody Identification'],
    specimen: 'Fresh Patient Serum.',
    reagents: [
      { component: 'Reagent Screening Cells (O-group)', function: 'Provides various known antigens to catch irregular antibodies.' },
      { component: 'AHG / Coombs Reagent', function: 'Induces lattice formation.' }
    ],
    equipment: ['Incubator (37°C)', 'Centrifuge', 'Test tubes'],
    procedure: [
      'Take patient serum and mix with reagent red cells (usually 2-cell or 3-cell panels).',
      'Incubate at 37°C for 30-45 minutes (Thermal Phase).',
      'Wash the cells 3-4 times with saline to remove unbound IgG.',
      'Add 2 drops of AHG reagent (Antiglobulin Phase).',
      'Centrifuge and read macroscopically for agglutination.',
      'Validate negative results by adding Check Cells.'
    ],
    observation: 'Distinct clumping if significant alloantibodies are present.',
    result: 'Positive = Irregular antibodies detected. Negative = Irregular antibodies absent.',
    interpretation: 'A positive IAT warrants further "Antibody Identification" using an 11-cell panel to determine the exact antibody specificity (e.g., Anti-Kell, Anti-Duffy).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Mandatory for prenatal screening of pregnant women and for antibody screening of all blood donors.',
    sourcesOfError: ['Neutralization of AHG.', 'Omitting the 37°C incubation step.'],
    precautions: ['Always use fresh serum; storage at room temperature degrades complement required for some antibodies.'],
    normalVsAbnormal: 'Positive results may delay surgeries while compatible "antigen-negative" blood is sourced.',
    applications: 'Antenatal clinics, Donor centers, Cross-match workup.',
    limitations: 'Detects that an antibody exists, but not "which" one without further panel testing.',
    examPoints: 'IAT = In Vitro. Used for screening DONORS and PREGNANT women.',
    viva: [
      { q: 'What is the main difference between DAT and IAT?', a: 'DAT detects antibodies already on the cells (In-vivo); IAT detects free circulating antibodies in serum (In-vitro).' },
      { q: 'Mention two uses of IAT.', a: 'Antibody screening in pregnant women and antibody screening in blood donors.' }
    ],
    mcq: [
      { q: 'IAT detects antibodies in which phase?', options: ['In-vivo', 'In-vitro', 'Neither', 'Both'], answer: 1 },
      { q: 'Washing after incubation in IAT is necessary to?', options: ['Lyse cells', 'Remove unbound IgG', 'Clean the tube', 'Add color'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tabletop_centrifuge.jpg/960px-Tabletop_centrifuge.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Four-point_ab_gradient_tube.jpg/960px-Four-point_ab_gradient_tube.jpg'
    }
  },
  {
    id: 'bb-cross-saline',
    title: 'Emergency Saline Phase Crossmatch',
    isImportant: true,
    definition: 'A rapid, truncated version of the crossmatch used exclusively in life-threatening emergencies to verify ABO compatibility.',
    principle: 'Direct macroscopic agglutination test performed by immediate spin at room temperature. Detects primarily IgM antibodies (e.g., Anti-A or Anti-B). It skips the 37°C thermal and AHG phases to save time in high-acuity trauma cases.',
    mechanism: 'Fast bridging of RBCs by large pentameric IgM antibodies.',
    types: ['Immediate Spin Crossmatch'],
    specimen: 'Patient Serum and 5% washed Donor Red Cells.',
    reagents: [{ component: 'Saline', function: 'Medium for cell suspension.' }],
    equipment: ['Centrifuge', 'Test tubes'],
    procedure: [
      'Take 2 drops patient serum + 1 drop 5% donor RBCs.',
      'Mix and centrifuge immediately at 1000 RPM for 1 minute.',
      'Gently resuspend and read macroscopically.',
      'If negative, release unit as "Emergency Release - Crossmatch incomplete" if requested by the clinician.'
    ],
    observation: 'Solid clumping if ABO mismatched; smooth suspension if matched.',
    result: 'Compatible = No reaction. Incompatible = Agglutination.',
    interpretation: 'Ensures only that the patient is not being given ABO-incompatible blood.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Life-saving in massive hemorrhage where waiting 45 minutes for a full crossmatch would result in death. It catches clerical errors in ABO labeling.',
    sourcesOfError: ['Over-reading rouleaux as agglutination.'],
    precautions: ['Must strictly continue the full 3-phase crossmatch in the background while the blood is being issued.'],
    normalVsAbnormal: 'Does not detect Rh or Kell antibodies; hence, a "Delayed reaction" risk exists.',
    applications: 'Emergency Room, Massive Transfusion Protocol (MTP).',
    limitations: 'Completely misses clinically significant IgG antibodies.',
    examPoints: 'Detects ABO incompatibility ONLY. Phase is "Immediate Spin".',
    viva: [
      { q: 'What does an immediate spin crossmatch catch?', a: 'ABO incompatibility and clerical errors.' },
      { q: 'Why is it used?', a: 'To provide blood quickly in life-threatening emergencies (takes ~5 minutes).' }
    ],
    mcq: [
      { q: 'Immediate spin crossmatch primarily detects which Ig class?', options: ['IgG', 'IgA', 'IgM', 'IgE'], answer: 2 },
      { q: 'Emergency release blood should ideally be what group if crossmatch isn\'t done?', options: ['AB Positive', 'O Negative', 'A Positive', 'B Negative'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tabletop_centrifuge.jpg/960px-Tabletop_centrifuge.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blood_typing_by_manual_tube_method_-_type_O_positive.jpg/960px-Blood_typing_by_manual_tube_method_-_type_O_positive.jpg'
    }
  }
];
