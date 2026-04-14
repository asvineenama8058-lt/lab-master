export const hematologyData9 = [
  {
    id: 'hem-hb-electro',
    title: 'Hemoglobin Electrophoresis: Pattern Interpretation',
    isImportant: true,
    definition: 'Specific laboratory methodology used to separate and identify different varieties of hemoglobin based on their distinct electrical charges.',
    principle: 'Hemoglobins are proteins with characteristic electrical charges. When placed in an alkaline buffer (pH 8.4 - 8.6) and subjected to an electric field, they migrate towards the positive anode at different speeds. Hemoglobin A (HbA) moves fastest, followed by F, S, and C.',
    mechanism: 'Charged molecules in an electric field move at velocities proportional to their surface charge density.',
    types: ['Alkaline Electrophoresis (Cellulose Acetate)', 'Acid Electrophoresis (Citrate Agar)'],
    specimen: 'Hemolysate prepared from EDTA whole blood.',
    reagents: [
      { component: 'Tris-EDTA-Borate Buffer (pH 8.4)', function: 'Maintains alkaline environment.' },
      { component: 'Ponceau S or Amido Black', function: 'Stains the hemoglobin bands.' },
      { component: 'Hemolysate Reagent (Saponin/Water)', function: 'Lyses RBCs to release hemoglobin.' }
    ],
    equipment: ['Electrophoresis Chamber', 'Power Supply', 'Densitometer', 'Cellulose Acetate Strips'],
    procedure: [
      'Prepare hemolysate from patient and control blood samples.',
      'Soak cellulose acetate strips in buffer.',
      'Apply tiny volumes of hemolysate at the cathode end.',
      'Run the electrophoresis at 250V for 15-20 minutes.',
      'Stain the strips to visualize the bands.',
      'Clear the strips and use a densitometer to quantify each band percentage.'
    ],
    observation: 'Distinct bands appear at specific distances from the origin (Start line).',
    result: 'Report percentages: HbA: __%, HbA2: __%, HbF: __%, Abnormal (S/C): __%.',
    interpretation: 'A: Normal adult. S: Sickle cell. F: Thalassemia or Newborn. A2 elevated (>3.5%): Beta Thalassemia Trait.',
    referenceRange: 'HbA: 95-98% | HbA2: 1.5-3.5% | HbF: <1%.',
    clinicalSignificance: 'The definitive "Gold Standard" for confirming sickle cell disease and classifying specific thalassemias.',
    sourcesOfError: ['Over-application of hemolysate causing merging of bands.', 'Buffer pH deviations altering migration speed.'],
    precautions: ['Always run a "Known Control" containing A, F, and S together for accurate comparison.'],
    normalVsAbnormal: 'Pattern "A, S" indicates Sickle Trait. Pattern "S, F" (no A) indicates Sickle Cell Disease.',
    applications: 'Prenatal diagnosis and newborn screening.',
    limitations: 'Alkaline electrophoresis cannot differentiate HbS from HbD or HbG; requires acid electrophoresis for confirmation.',
    examPoints: 'Order of migration (Fast to Slow): A, F, S, C (A Fat Santa Claus).',
    viva: [
      { q: 'In which buffer pH is routine electrophoresis performed?', a: 'Alkaline buffer (pH 8.4-8.6).' },
      { q: 'What does an HbA2 level of 5% indicate?', a: 'Beta-Thalassemia Trait.' }
    ],
    mcq: [
      { q: 'Which hemoglobin migrates fastest towards the anode at pH 8.6?', options: ['HbS', 'HbC', 'HbA', 'HbF'], answer: 2 },
      { q: 'HbA2 level above 3.5% is diagnostic for?', options: ['Sickle cell trait', 'Beta-Thalassemia trait', 'Iron deficiency', 'Lead poisoning'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gel_electrophoresis_2.jpg/640px-Gel_electrophoresis_2.jpg'
    }
  },
  {
    id: 'hem-methb',
    title: 'Methemoglobin Estimation Concept',
    isImportant: false,
    definition: 'Spectrophotometric assessment of hemoglobin where iron is in the ferric (Fe3+) state, rendering it incapable of oxygen transport.',
    principle: 'Methemoglobin has a characteristic absorption peak at 630 nm. Adding cyanide converts it to cyanmethemoglobin, which lacks this peak. The decrease in absorbance at 630 nm after cyanide addition is proportional to the methemoglobin concentration.',
    mechanism: 'Cyanide neutralization of the 630nm absorption peak of Fe3+ iron.',
    types: ['Evelyn-Malloy Method'],
    specimen: 'EDTA blood (must be fresh, as MetHb increases in vitro).',
    reagents: [
      { component: 'Phosphate Buffer (pH 6.8)', function: 'Standardizes reaction pH.' },
      { component: 'Potassium Ferricyanide', function: 'Standardizes the scale.' },
      { component: 'Sodium Cyanide', function: 'Neutralizes the MetHb peak.' }
    ],
    equipment: ['Spectrophotometer (630nm)', 'Cuvettes'],
    procedure: [
      'Dilute blood in phosphate buffer.',
      'Measure absorbance at 630 nm (Reading 1).',
      'Add sodium cyanide to neutralize methemoglobin.',
      'Wait 2 minutes and measure absorbance at 630 nm again (Reading 2).',
      'The difference (L1 - L2) represents the Methemoglobin level.'
    ],
    observation: 'Normal blood is bright red; Methemoglobin-rich blood appears chocolate brown/muddy.',
    result: 'Report as percentage of total hemoglobin.',
    interpretation: 'Values >1% are abnormal.',
    referenceRange: '0 - 1% of total hemoglobin.',
    clinicalSignificance: 'Diagnosis of methemoglobinemia caused by oxidant drugs (e.g., Nitrates, Sulfonamides) or congenital enzyme defects.',
    sourcesOfError: ['Using old blood samples.', 'Lipemic samples causing light scattering.'],
    precautions: ['Cyanide is extremely toxic; follow dedicated safety protocols.'],
    normalVsAbnormal: 'Clinical cyanosis "unresponsive to oxygen" occurs when MetHb exceeds 10-15%.',
    applications: 'Toxicology and industrial exposure screening.',
    limitations: 'Requires immediate processing.',
    examPoints: 'Absorbance peak at 630 nm is diagnostic. Changes blood color to chocolate brown.',
    viva: [
      { q: 'What is the characteristic color of blood in methemoglobinemia?', a: 'Chocolate brown or muddy appearance.' },
      { q: 'At what wavelength is methemoglobin measured?', a: '630 nm.' }
    ],
    mcq: [
      { q: 'Methemoglobin has a characteristic absorption peak at?', options: ['450 nm', '540 nm', '630 nm', '340 nm'], answer: 2 },
      { q: 'Which chemical is used to neutralize the MetHb absorption peak?', options: ['Ferricyanide', 'Sodium Cyanide', 'Hydrochloric acid', 'Acetic acid'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lab_glassware.jpg/960px-Lab_glassware.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'hem-ddimer',
    title: 'D-dimer Principle and Clinical Use',
    isImportant: true,
    definition: 'A specific marker measuring the presence of cross-linked fibrin degradation products (FDPs) in circulating blood.',
    principle: 'When a clot is dissolved by plasmin, it breaks down cross-linked fibrin into smaller fragments. One specific fragment, the D-dimer, contains two "D" domains of fibrin cross-linked by Factor XIII. Its presence proves both clot formation and subsequent lysis have occurred.',
    mechanism: 'Plasmin-mediated cleavage of stabilized cross-linked fibrin.',
    types: ['Latex Agglutination', 'ELISA (Quantitative)'],
    specimen: 'Citrated Plasma.',
    reagents: [{ component: 'Anti-D-dimer Monoclonal Antibodies', function: 'Specific detection of D-dimer neo-antigens.' }],
    equipment: ['Coagulation Analyzer or Latex slide'],
    procedure: [
      'Mix citrated plasma with latex particles coated with anti-D-dimer antibodies.',
      'Check for visible agglutination (Qualitative).',
      'For quantitative: Use automated immunoassays to measure light scattering intensity.'
    ],
    observation: 'Agglutination indicates high D-dimer levels.',
    result: 'Report in µg/L or FEU (Fibrinogen Equivalent Units).',
    interpretation: 'Normal D-dimer < 500 ng/mL FEU.',
    referenceRange: '< 500 ng/mL.',
    clinicalSignificance: 'Extremely high "Negative Predictive Value". A normal D-dimer result strictly "rules out" Deep Vein Thrombosis (DVT) and Pulmonary Embolism (PE). Elevated in DIC.',
    sourcesOfError: ['False positives in pregnancy, aging, trauma, and cancer (low specificity).'],
    precautions: ['Use only for ruling out thrombosis; a positive result doesn\'t confirm it directly (requires imaging).'],
    normalVsAbnormal: 'Massively elevated in Disseminated Intravascular Coagulation (DIC).',
    applications: 'Emergency department triage for suspected DVT/PE.',
    limitations: 'Not specific; many inflammatory conditions elevate D-dimer.',
    examPoints: 'D-dimer is specific for CROSS-LINKED fibrin. It has high negative predictive value.',
    viva: [
      { q: 'What does a positive D-dimer test signify?', a: 'It indicates that fibrin clots are being formed and subsequently broken down in the body.' },
      { q: 'Why is D-dimer useful in the Emergency Room?', a: 'Because a NEGATIVE result can safely rule out DVT and Pulmonary Embolism without expensive scans.' }
    ],
    mcq: [
      { q: 'D-dimer is a degradation product of?', options: ['Fibrinogen', 'Cross-linked Fibrin', 'Platelets', 'Prothrombin'], answer: 1 },
      { q: 'Which condition shows massively high D-dimer and low fibrinogen?', options: ['Hemophilia', 'DIC', 'Iron deficiency', 'Leukemia'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'hem-mixing',
    title: 'Coagulation Mixing Studies Overview',
    isImportant: true,
    definition: 'Diagnostic laboratory procedure used to differentiate whether a prolonged clotting time (PT/APTT) is due to a simple factor deficiency or a pathologic circulating inhibitor.',
    principle: 'Patient\'s prolonged plasma is mixed 1:1 with "Normal Pooled Plasma" (NPP) which contains 100% of all factors. If the clotting time "corrects" to normal, a factor deficiency exists. If it "fails to correct", an inhibitor (like Lupus Anticoagulant) is present.',
    mechanism: 'In vitro neutralization of factor deficiencies vs. persistence of circulating antibody activity.',
    types: ['Immediate Mix', 'Incubated Mix (to detect time-dependent inhibitors like Factor VIII inhibitors)'],
    specimen: 'Citrated Plasma (Platelet Poor).',
    reagents: [{ component: 'Normal Pooled Plasma (NPP)', function: 'Source of all coagulation factors.' }],
    equipment: ['Coagulometer or Water bath', 'Stopwatch'],
    procedure: [
      'Take 0.1 ml of Patient Plasma and 0.1 ml of NPP.',
      'Perform the test (PT or APTT) on the 1:1 mix immediately.',
      'Incubate another 1:1 mix at 37°C for 2 hours and re-test.',
      'Compare results with the original patient and NPP times.'
    ],
    observation: 'Timer record showing either a return to normal range or persistent prolongation.',
    result: 'Correction (Normal) or Failure to Correct (Abnormal 1:1 mix).',
    interpretation: 'Correction = Factor Deficiency. No Correction = Presence of Inhibitor.',
    referenceRange: '1:1 mix should be close to NPP baseline.',
    clinicalSignificance: 'Essential first step in the workup of a prolonged PT or APTT to decide between giving factor concentrates or managing an autoimmune inhibitor.',
    sourcesOfError: ['Using poorly prepared NPP lacking certain factors.', 'Residual platelets in plasma neutralizing inhibitors.'],
    precautions: ['Always perform an incubated mix as some inhibitors (e.g., Anti-Factor VIII) are time and temperature dependent.'],
    normalVsAbnormal: 'Persistence of prolongation after mixing confirms a dangerous pathological inhibitor.',
    applications: 'Diagnosing Lupus Anticoagulant and specific factor antibodies.',
    limitations: 'Does not identify exactly "which" factor is missing (requires specific factor assays).',
    examPoints: '1:1 mix helps differentiate Deficiency vs Inhibitor. Correction = Deficiency.',
    viva: [
      { q: 'What does "correction" in a mixing study mean?', a: 'It means the NPP provided enough missing factor to bring the clotting time back to normal.' },
      { q: 'If an APTT mix fails to correct after 2 hours of incubation, what does it suggest?', a: 'A time-dependent inhibitor, such as an antibody against Factor VIII.' }
    ],
    mcq: [
      { q: 'Correction of a prolonged clotting time by 1:1 mix indicates?', options: ['Presence of inhibitor', 'Factor deficiency', 'Heparin contamination', 'Vitamin K excess'], answer: 1 },
      { q: 'Which inhibitor is often detected by a non-correcting 1:1 mix?', options: ['Aspirin', 'Lupus Anticoagulant', 'Vitamin K', 'Dicoumarol'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  }
];
