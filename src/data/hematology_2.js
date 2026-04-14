export const hematologyData2 = [
  {
    id: 'hem-esr-westergren',
    title: 'Erythrocyte Sedimentation Rate (Westergren Method)',
    isImportant: true,
    definition: 'A non-specific test that measures the rate at which red blood cells sediment in a period of one hour.',
    principle: 'When strictly vertically positioned, anticoagulated blood allows RBCs to settle down due to gravity. Inflammation increases acute-phase proteins (fibrinogen) in plasma, which neutralize the negative surface charge of RBCs. This causes RBCs to stick together like coins (Rouleaux formation), becoming heavier and settling faster.',
    mechanism: 'Rouleaux formation drastically reduces the surface area to volume ratio of the erythrocyte mass, accelerating sedimentation via Stokes\' Law.',
    types: ['Westergren Method (Gold Standard)', 'Modified Westergren'],
    specimen: 'Venous blood collected strictly in 3.8% Trisodium Citrate (Ratio 1:4).',
    reagents: [
      { component: '3.8% Trisodium Citrate', function: 'Acts as a liquid anticoagulant by chelating calcium, and specifically dilutes the blood to standard viscosity.' }
    ],
    equipment: ['Westergren Tube (open at both ends, 300 mm long)', 'Westergren Stand', 'Timer'],
    procedure: [
      'Mix 1.6 ml of venous blood with 0.4 ml of 3.8% Trisodium Citrate (exact 4 parts blood to 1 part anticoagulant).',
      'Draw the mixture into the Westergren tube exactly up to the 0 mark at the top.',
      'Place the tube strictly vertical in the Westergren stand.',
      'Keep away from direct sunlight, heating elements, and vibrations.',
      'Leave completely undisturbed for exactly 1 hour.',
      'Read the height of the clear plasma column from the 0 mark down to the top of the RBC column.'
    ],
    observation: 'A clear yellowish plasma column appears at the top, leaving a demarcated packed red cell layer below.',
    result: 'The ESR is ______ mm at end of 1st hour.',
    interpretation: 'Elevated values indicate the presence and intensity of an underlying inflammatory, infectious, or malignant process.',
    referenceRange: 'Male: 0-15 mm/hr | Female: 0-20 mm/hr',
    clinicalSignificance: 'Highly sensitive but completely non-specific marker for systemic inflammation. Used universally to track the progression of Rheumatoid Arthritis and Tuberculosis.',
    sourcesOfError: ['Tilting the tube artificially increases falling speed', 'High room temperatures accelerate sedimentation', 'Improper citrate to blood ratio alters viscosity'],
    precautions: ['The tube MUST be exactly vertical; a mere 3-degree tilt can falsely elevate ESR by up to 30%.', 'Ensure the correct 4:1 blood to anticoagulant ratio.'],
    normalVsAbnormal: 'Elevations >100 mm/hr are heavily associated with Multiple Myeloma, severe TB, or temporal arteritis.',
    applications: 'Monitoring chronic inflammatory diseases and chronic infections.',
    limitations: 'It cannot diagnose any specific disease. It can be falsely low in polycythemia or sickle cell anemia (abnormal RBC shapes prevent rouleaux).',
    examPoints: 'Ratio of Blood to Citrate is 4:1. The tube is 300mm long but graduated only from 0 to 200mm. Fibrinogen is the main protein increasing ESR.',
    viva: [
      { q: 'What is the blood to anticoagulant ratio in Westergren’s method?', a: '4 parts blood to 1 part 3.8% Trisodium citrate (4:1).' },
      { q: 'How long is the Westergren tube?', a: '300 mm long, but graduated from 0 to 200 mm.' },
      { q: 'What pathological factor drives elevated ESR?', a: 'Increased acute-phase proteins like fibrinogen which neutralize negative RBC charges, forcing Rouleaux formation.' },
      { q: 'Why must the tube be strictly vertical?', a: 'Because a tilt allows plasma to channel upwards along the higher side of the tube, drastically accelerating RBC descent.' },
      { q: 'Name conditions where ESR is massively elevated (>100mm/hr).', a: 'Tuberculosis, Rheumatoid Arthritis, Multiple Myeloma.' }
    ],
    mcq: [
      { q: 'What anticoagulant is used in Westergren ESR?', options: ['EDTA', 'Heparin', '3.8% Trisodium Citrate', 'Sodium Fluoride'], answer: 2 },
      { q: 'What is the ratio of blood to anticoagulant in Westergren?', options: ['1:4', '4:1', '9:1', '1:9'], answer: 1 },
      { q: 'What is the physical length of the Westergren pipette?', options: ['100 mm', '200 mm', '300 mm', '400 mm'], answer: 2 },
      { q: 'Westergren tube is graduated spanning from?', options: ['0 to 100', '100 to 0', '0 to 200', '0 to 300'], answer: 2 },
      { q: 'What is the physiological phenomenon driving ESR?', options: ['Platelet clumping', 'Rouleaux formation', 'WBC aggregation', 'Hemolysis'], answer: 1 },
      { q: 'Which acute-phase protein prominently accelerates ESR?', options: ['Albumin', 'Hemoglobin', 'Fibrinogen', 'Transferrin'], answer: 2 },
      { q: 'If the ESR tube is tilted slightly during the test, what happens?', options: ['ESR decreases', 'ESR significantly falsely increases', 'No change', 'Blood coagulates'], answer: 1 },
      { q: 'In which condition is ESR pathophysiologically reduced?', options: ['Tuberculosis', 'Rheumatoid arthritis', 'Polycythemia Vera', 'Pregnancy'], answer: 2 },
      { q: 'After what time interval is ESR standardly read?', options: ['15 mins', '30 mins', '1 hour', '2 hours'], answer: 2 },
      { q: 'What is considered a normal ESR range for young adult men?', options: ['0-15 mm', '20-40 mm', '50-100 mm', '0-5 mm'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/G%C3%A4vle_Hospital.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'hem-esr-wintrobe',
    title: 'Erythrocyte Sedimentation Rate (Wintrobe Method)',
    isImportant: false,
    definition: 'An alternative method for estimating ESR using a much shorter, closed-ended tube.',
    principle: 'Blood anticoagulated with dry EDTA is filled into a Wintrobe tube. RBCs settle down forming rouleaux. Since the tube is closed at one end and uses undiluted blood, it differs from the citrated Westergren method.',
    mechanism: 'Sedimentation of undiluted erythrocytes occurs through plasma under the influence of gravity.',
    types: ['Wintrobe Method'],
    specimen: 'EDTA Blood (undiluted).',
    reagents: [
      { component: 'EDTA (Ethylenediaminetetraacetic acid)', function: 'Chelates calcium avoiding clotting without physically diluting the plasma proteins.' }
    ],
    equipment: ['Wintrobe Tube (Closed at bottom, 110mm long)', 'Wintrobe Stand', 'Long Pasteur pipette'],
    procedure: [
      'Mix the EDTA venous blood thoroughly.',
      'Using a long Pasteur pipette, fill the Wintrobe tube from the bottom slowly upwards up to the exactly 0 mark.',
      'Strictly avoid trapping any air bubbles inside the column of blood.',
      'Place the tube strictly vertically in the Wintrobe stand.',
      'Leave completely undisturbed for exactly 1 hour.',
      'Read the ESR from the 0 mark down to the top of the packed red cell column.'
    ],
    observation: 'Clear plasma separates from the sedimented erythrocytes.',
    result: 'The ESR is ______ mm at end of 1st hour.',
    interpretation: 'Measures inflammatory states. Values cannot exceed 100mm due to tube design limit.',
    referenceRange: 'Male: 0-9 mm/hr | Female: 0-20 mm/hr',
    clinicalSignificance: 'Used historically for ESR; however, it is largely obsolete for severe inflammations because it "caps out" at 100mm.',
    sourcesOfError: ['Trapping air bubbles while filling from the bottom', 'Tube tilting', 'Using liquid EDTA (causes dilution errors)'],
    precautions: ['Must use a long Pasteur pipette to fill from the absolute bottom upwards.', 'Use only dry EDTA blood.'],
    normalVsAbnormal: 'Abnormal readings indicate inflammation but the method systematically underestimates highly elevated ESRs compared to Westergren.',
    applications: 'Rural clinics, pediatric cases (requires less blood). The same tube is later centrifuged for PCV measurement.',
    limitations: 'The tube is only 100 mm long. Extremely high ESRs (>100) seen in severe diseases cannot be tracked accurately.',
    examPoints: 'Wintrobe uses EDTA (undiluted blood). Westergren uses Citrate (diluted). Wintrobe goes up to 100mm. Dual purpose: ESR first, then centrifuge it for PCV.',
    viva: [
      { q: 'What is the characteristic marking scale on a Wintrobe tube?', a: '0 to 100 mm from top to bottom (used for ESR), and 100 to 0 mm from top to bottom (used for PCV).' },
      { q: 'What specific anticoagulant is used?', a: 'Dry EDTA (maintaining undiluted blood).' },
      { q: 'Why is Westergren overwhelmingly preferred over Wintrobe for severely high ESR?', a: 'Because the Wintrobe tube is physically only 100 mm tall and caps out. Westergren goes up to 200 mm.' },
      { q: 'How is the filling physically done?', a: 'Using a long, narrow Pasteur pipette filling progressively from the bottom upwards to prevent bubbles.' },
      { q: 'What is the main advantage of the Wintrobe method?', a: 'It requires far less blood, and the exact same tube can be instantly centrifuged to determine PCV.' }
    ],
    mcq: [
      { q: 'What is the physical length of the Wintrobe tube?', options: ['110 mm', '200 mm', '300 mm', '50 mm'], answer: 0 },
      { q: 'The graduation marks on the Wintrobe tube are?', options: ['0-10 on one side, 10-0 on other', '0-200', '0-300', '0-50'], answer: 0 },
      { q: 'Which anticoagulant is standardly enforced for Wintrobe ESR?', options: ['Citrate', 'EDTA', 'Fluoride', 'Heparin'], answer: 1 },
      { q: 'What dual clinical purpose does the Wintrobe tube serve?', options: ['TLC and DLC', 'ESR and PCV', 'Hb and ESR', 'Bleeding time and Clotting time'], answer: 1 },
      { q: 'Why is Westergren strictly preferred over Wintrobe?', options: ['It uses less blood', 'It accurately measures massively high ESR values', 'It takes less time', 'Can be done on capillary blood'], answer: 1 },
      { q: 'How is blood loaded safely into a narrow Wintrobe tube?', options: ['Drawn by mouth', 'Poured directly', 'Filled from bottom upward with Pasteur pipette', 'Filled with syringe needle'], answer: 2 },
      { q: 'A trapped air bubble in the tube will explicitly cause:', options: ['False high ESR', 'False low ESR', 'No change', 'Hemolysis'], answer: 1 },
      { q: 'Which end of the Wintrobe tube is sealed shut?', options: ['Top', 'Bottom', 'Both ends', 'Neither'], answer: 1 },
      { q: 'Wintrobe historically utilizes what ratio of blood to anticoagulant?', options: ['4:1', '9:1', '1:4', 'Undiluted blood'], answer: 3 },
      { q: 'Wintrobe stands must be placed rigidly in what orientation?', options: ['Horizontally', 'In incubator 37C', 'Vertically without vibration', 'In sunlight'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'hem-pcv',
    title: 'Packed Cell Volume (PCV / Hematocrit)',
    isImportant: true,
    definition: 'The proportion of whole blood volume that is physically occupied by red blood cells.',
    principle: 'When anticoagulated whole blood is subjected to strong centrifugal force for an extended period, the heavier erythrocytes pack tightly at the bottom. WBCs and platelets form a thin intermediate layer called the "buffy coat". The ratio of the packed RBC volume entirely to the total blood column volume is measured as the Packed Cell Volume.',
    mechanism: 'Centrifugal kinetic packing isolates cellular components strictly based on their specific gravities.',
    types: ['Macro method (Wintrobe)', 'Microhematocrit method (Capillary)'],
    specimen: 'EDTA blood for Wintrobe; Heparinized capillary blood for microhematocrit.',
    reagents: [
      { component: 'Heparin (in capillary method)', function: 'Coated inside the tube to instantly prevent capillary blood from clotting.' }
    ],
    equipment: ['Wintrobe Tube or Capillaries', 'Molding Clay', 'High-speed Centrifuge / Microhematocrit Centrifuge (10,000 RPM)'],
    procedure: [
      'For Macro Method: Fill Wintrobe tube with well-mixed EDTA blood perfectly up to the 100 mark.',
      'Centrifuge the tube at exactly 3000 RPM for 30 minutes in a balanced standard centrifuge.',
      'Extract the tube carefully and read the exact level of the red packed cells; ignore the buffy coat.',
      'For Micro Method: Fill a heparinized glass capillary tube with blood leaving 15mm empty at the top.',
      'Firmly seal the empty end with specialized sealing clay.',
      'Place in the microhematocrit centrifuge with the sealed end facing perfectly outwards against the rubber gasket.',
      'Centrifuge massively at 10,000 RPM for just 5 mins.',
      'Read the percentage using a specialized standard microhematocrit reader sliding scale.'
    ],
    observation: 'Three distinct visible layers: Dark red packed RBCs at the bottom, thin grayish-white buffy coat in the middle, and pale yellow plasma on top.',
    result: 'The Packed Cell Volume is strictly ______ %.',
    interpretation: 'PCV is roughly 3 times the Hemoglobin value. It assesses hydration and exact degree of anemia.',
    referenceRange: 'Male: 40-54% | Female: 36-47%',
    clinicalSignificance: 'Extremely accurate test. Crucial for diagnosing polycythemia vera, calculating blood transfusion requirements, and managing dengue shock syndrome (hemoconcentration).',
    sourcesOfError: ['Under-centrifugation leaving plasma trapped within the RBC layer', 'Reading the buffy coat as part of the RBC layer', 'Hemolysis of sample prior to testing'],
    precautions: ['Always balance the centrifuge precisely to prevent shattering.', 'The buffy coat MUST strictly be excluded from the reading.'],
    normalVsAbnormal: 'A PCV of 15% denotes profound life-threatening anemia. A PCV of 65% denotes severe hemoconcentration/polycythemia causing sludging of blood.',
    applications: 'Dengue Ward monitoring, pre-operative screening, sports doping control.',
    limitations: 'Trapped plasma (about 1-3%) constantly overestimates PCV slightly in manual methods compared to automated counters.',
    examPoints: 'The Buffy coat contains WBCs and Platelets. PCV represents only the RBCs! Micro method RPM is 10,000.',
    viva: [
      { q: 'What does PCV signify?', a: 'It indicates the exact percentage fraction of whole blood volume that structurally consists of red blood cells.' },
      { q: 'What is the heavily referenced Buffy Coat?', a: 'The thin grayish-white layer wedged between plasma and RBCs, containing all WBCs and Platelets.' },
      { q: 'At what RPM do we centrifuge Wintrobe tubes for Macro PCV?', a: 'Exactly 3000 RPM for 30 consecutive minutes.' },
      { q: 'In which critical pathophysiological conditions is PCV sharply increased?', a: 'Severe Dehydration, Polycythemia Vera, and Dengue Shock Syndrome (due to plasma capillary leakage).' },
      { q: 'Should the buffy coat be included when measuring the final PCV height?', a: 'No, it mathematically represents leukocytes and platelets, not erythrocytes.' }
    ],
    mcq: [
      { q: 'PCV is alternatively known worldwide as:', options: ['Erythrocyte count', 'Hematocrit', 'Mean cell volume', 'Cytocrit'], answer: 1 },
      { q: 'What does the distinct layer directly above packed RBCs precisely contain?', options: ['Plasma', 'Serum', 'WBCs and Platelets (Buffy Coat)', 'Fibrin'], answer: 2 },
      { q: 'What marking scale is dedicatedly used for PCV on the Wintrobe tube?', options: ['0-100 from top to bottom', '0-10 from bottom to top', '0-100 from bottom to top', 'No markings'], answer: 2 },
      { q: 'What time limit is strictly standard for Macro PCV centrifugation?', options: ['5 mins', '10 mins', '30 mins', '60 mins'], answer: 2 },
      { q: 'Microhematocrit capillary tubes are usually internally coated with:', options: ['EDTA', 'Citrate', 'Heparin', 'Fluoride'], answer: 2 },
      { q: 'Normal PCV for typical adult males is approximately:', options: ['20-25%', '30-35%', '40-54%', '60-70%'], answer: 2 },
      { q: 'In Dengue shock syndrome, PCV typically undergoes:', options: ['A sharp increase (Hemoconcentration)', 'A sharp decrease', 'No change', 'Drops to zero'], answer: 0 },
      { q: 'Why is obtaining PCV mathematically important?', options: ['Calculates blood group', 'Diagnoses infection type', 'Calculates exact RBC indices (MCV, MCHC)', 'Measures clotting factors'], answer: 2 },
      { q: 'The standardized speed for microhematocrit centrifuges is heavily set around:', options: ['3000 RPM', '5000 RPM', '10000+ RPM', '1000 RPM'], answer: 2 },
      { q: 'If the high-speed centrifuge is unbalanced, what catastrophic event can happen?', options: ['Glass tubes can violently shatter', 'Nothing', 'Faster packing', 'Slower packing'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tabletop_centrifuge.jpg/960px-Tabletop_centrifuge.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'hem-bt',
    title: 'Bleeding Time (Duke\'s Method)',
    isImportant: false,
    definition: 'An in-vivo test assessing the combined functional capability of platelets and capillary vasoconstriction to arrest bleeding.',
    principle: 'A standard, highly uniform superficial surgical incision is deliberately made on the skin (earlobe or fingertip). The exact time taken for bleeding to arrest completely through active platelet plug formation and micro-capillary constriction is measured.',
    mechanism: 'Endothelial collagen exposure triggers primary hemostasis: Platelet adhesion, activation, secretion, and aggregation forming a soft plug.',
    types: ['Duke\'s Method (Fingertip/Earlobe)', 'Ivy\'s Method (Forearm + BP cuff)'],
    specimen: 'Capillary blood issuing from an induced wound.',
    reagents: [
      { component: '70% Isopropyl Alcohol', function: 'Sterilizes the skin to prevent iatrogenic localized infections.' }
    ],
    equipment: ['Sterile disposable surgical lancet', 'Circular Whatman filter paper', 'Stopwatch', 'Spirit swab'],
    procedure: [
      'Rigidly sterilize the fingertip or earlobe with spirit and let it air dry completely.',
      'Make a quick, confident, deep prick (around 2-3mm deep) with the sterile lancet and start the stopwatch instantaneously upon the blood emerging.',
      'Using the circular filter paper, gently blot the expanding blood drop precisely every 30 seconds WITHOUT physically touching or wiping the wound directly.',
      'Continue this rotating blotting cycle until the filter paper absorbs absolutely no more blood.',
      'Stop the timer strictly when the last drop fails to stain the paper and record the time.'
    ],
    observation: 'Gradually shrinking red spots forming a spiral pattern on the white filter paper until no spot forms.',
    result: 'The Bleeding Time is ______ mins ______ secs.',
    interpretation: 'Prolonged times suggest quantitative or qualitative platelet defects or severe capillary fragility.',
    referenceRange: '1 to 5 minutes',
    clinicalSignificance: 'Primary screening test before major surgeries to prevent fatal intra-operative bleeding. Diagnostic for Von Willebrand Disease and Platelet disorders.',
    sourcesOfError: ['Touching the wound directly tears the platelet plug, drastically prolonging the time', 'Squeezing the finger mixes tissue factor and false-starts clotting, terminating the test prematurely'],
    precautions: ['Do NOT squeeze the finger violently to force bleeding.', 'The puncture depth must be strictly adequate for a spontaneous free flow of blood.'],
    normalVsAbnormal: 'Normal in Hemophilia (as secondary hemostasis is intact). Highly abnormal (>15 mins) in severe thrombocytopenia or Aspirin overdose.',
    applications: 'Pre-extraction dental screening, platelet function screening.',
    limitations: 'Highly operator-dependent. Not perfectly reproducible. Cannot diagnose deep coagulation factor deficiencies like Hemophilia.',
    examPoints: 'BT measures Primary Hemostasis. Aspirin massively artificially prolongs BT. Blotting is every 30 seconds.',
    viva: [
      { q: 'What precise physiological processes does Bleeding Time measure?', a: 'Capillary vessel constriction function and Platelet plug formation (Primary hemostasis).' },
      { q: 'What is Ivy\'s method?', a: 'A superior standardized BT method using a blood pressure cuff continuously inflated to 40mmHg on the arm.' },
      { q: 'In which classical conditions is Bleeding Time prolonged?', a: 'Thrombocytopenia, Von Willebrand Disease, Idiopathic Thrombocytopenic Purpura (ITP), and heavy Aspirin usage.' },
      { q: 'Why do we rigidly blot every 30 seconds?', a: 'To clear the pooled blood without disrupting the forming delicate plug, creating a standard time recording pattern.' },
      { q: 'Does Hemophilia significantly affect Bleeding Time?', a: 'No, BT is normal in hemophilia because it primarily affects the secondary clotting factor cascade, not the initial platelet plug.' }
    ],
    mcq: [
      { q: 'Bleeding Time accurately assesses:', options: ['Coagulation factors', 'Primary hemostasis (Platelets & Vessel wall)', 'Fibrinolysis', 'Intrinsic pathway'], answer: 1 },
      { q: 'Standard authorized site for Duke\'s method?', options: ['Forearm', 'Thigh', 'Earlobe/Fingertip', 'Heel'], answer: 2 },
      { q: 'How frequently is blood rigidly blotted on the filter paper?', options: ['Every 10 seconds', 'Every 30 seconds', 'Every 1 minute', 'Every 5 minutes'], answer: 1 },
      { q: 'Normal Bleeding Time (Duke\'s method) is?', options: ['1-5 mins', '5-10 mins', '10-15 mins', '15-20 mins'], answer: 0 },
      { q: 'Which advanced method forcefully uses a BP cuff inflated to exactly 40 mmHg?', options: ['Duke\'s', 'Ivy\'s', 'Lee & White', 'Capillary tube'], answer: 1 },
      { q: 'When assessing BT, aggressively squeezing the finger directly causes:', options: ['Tissue fluid release leading to inaccurate time', 'Nothing', 'Faster clotting', 'Better blood flow'], answer: 0 },
      { q: 'In which condition is BT drastically prolonged?', options: ['Hemophilia A', 'Vitamin K deficiency', 'Thrombocytopenia', 'Malaria'], answer: 2 },
      { q: 'Heavy Aspirin dosage physically prolongs BT by?', options: ['Inhibiting Factor VIII', 'Inhibiting Platelet aggregation (COX-1)', 'Destroying RBCs', 'Lysis of fibrin'], answer: 1 },
      { q: 'What equipment is strictly needed for the Duke\'s method?', options: ['BP cuff', 'Centrifuge', 'Filter paper & stopwatch', 'Water bath'], answer: 2 },
      { q: 'If blood consistently stains the paper every 30s for exactly 6 drops, what is the BT?', options: ['1 min', '2 mins', '3 mins', '4 mins'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Andrew_Wakefield_2019_%28cropped%29.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/250_mL_Erlenmeyer_flask.jpg/960px-250_mL_Erlenmeyer_flask.jpg'
    }
  },
  {
    id: 'hem-ct',
    title: 'Clotting Time (Capillary Tube Method)',
    isImportant: true,
    definition: 'An in-vitro test determining the time required for shed blood to form a solid fibrin clot.',
    principle: 'Blood drawn into a very fine uncoated glass capillary tube predictably clots as coagulation factors are intrinsically activated upon contact with the negatively charged glass surface (contact activation). Breaking the tube at fixed intervals physically reveals the polymerized fibrin threads, marking exactly when coagulation is complete.',
    mechanism: 'Activation of Factor XII by the glass surface initiates the Intrinsic Pathway concluding in thrombin generation and fibrin mesh formation.',
    types: ['Capillary Tube Method (Screening)', 'Lee and White Method (Diagnostic Gold Standard)'],
    specimen: 'Freely flowing capillary blood without any tissue juice mixing.',
    reagents: [
      { component: 'None', function: 'Relies entirely on the natural intrinsic agents present in whole blood.' }
    ],
    equipment: ['Non-heparinized fine glass capillary tubes', 'Sterile surgical lancet', 'Stopwatch', 'Spirit swab'],
    procedure: [
      'Vigorously clean the finger, let it dry, make a deep prick and start the stopwatch instantaneously.',
      'Wipe off the very first drop to remove tissue thromboplastin, then hold an uncoated capillary tube horizontally, plunging it into the emerging drop to let blood flow completely in without bubbles.',
      'Hold the tube closely between the palms to maintain warmth (approximating 37°C body temp).',
      'At precisely 2 minutes, snap off a 1 cm piece of the tube from one end.',
      'Repeat this snapping every exactly 30 seconds.',
      'Observe the broken gap carefully. The absolute end point is when a very fine, distinct physical fibrin thread spans across between the two broken pieces.',
      'Stop the watch immediately and record the cumulative time.'
    ],
    observation: 'Initial breaks reveal liquid blood. Final break reveals an elastic, rubbery thread spanning the glass pieces.',
    result: 'The Clotting Time structurally is ______ mins ______ secs.',
    interpretation: 'Tests the integrity of the Intrinsic and Common coagulation pathways.',
    referenceRange: '3 to 8 minutes',
    clinicalSignificance: 'A crude but essential bedside screening test for severe coagulation factor deficiencies, especially Hemophilia A and B.',
    sourcesOfError: ['Using a heparinized tube which totally destroys the test', 'Squeezing the finger which releases tissue factor (falsely shortening the result by forcing the extrinsic pathway)'] ,
    precautions: ['Exclusively use non-heparinized (plain glass) tubes.', 'The timer must synchronize perfectly with the exact moment the needle pricks the skin.', 'Keep the tube definitively warm; cold room temperatures massively slow down the clotting cascade kinetics.'],
    normalVsAbnormal: 'Normal in mild platelet defects. Massively prolonged in severe Hemophilia (e.g. 30-60 mins).',
    applications: 'Emergency snake bite screening (Russell\'s viper venom causes massive DIC and prolongs CT indefinitely).',
    limitations: 'Highly insensitive. Mild to moderate factor deficiencies will yield completely normal capillary tube CT times.',
    examPoints: 'A fibrin thread determines the test conclusion. Measures INTRINSIC pathway. Requires non-heparinized capillary.',
    viva: [
      { q: 'What specific cascade does the Clotting Time measure?', a: 'The intrinsic pathway of secondary hemostasis (Coagulation factors XII, XI, IX, VIII).' },
      { q: 'What signifies the definitive physical end point of the test?', a: 'The visible, elastic fibrin thread formation spanning across the broken ends of the glass capillary.' },
      { q: 'In which classical disease is CT drastically prolonged?', a: 'Hemophilia (Severe deficiency of Factor VIII or IX).' },
      { q: 'Why is it a catastrophic error to use a heparinized or red-banded tube?', a: 'Heparin is a powerful exogenous anticoagulant; using it would prevent the blood from clotting entirely, giving a failed infinite result.' },
      { q: 'What is the Lee & White test method?', a: 'It is a much more accurate test tube method of measuring CT utilizing venous blood kept at exactly 37°C in a water bath.' }
    ],
    mcq: [
      { q: 'Clotting Time broadly assesses which profound physiological mechanism?', options: ['Primary Hemostasis (platelets)', 'Intrinsic Coagulation Pathway', 'Extrinsic Coagulation Pathway', 'Vascular spasm'], answer: 1 },
      { q: 'What distinctively indicates the physiological end-point in Capillary CT?', options: ['Blood dries', 'Fibrin thread structurally seen', 'Color changes to dark red', 'Plasma separates'], answer: 1 },
      { q: 'At what strict interval is the capillary tube physically broken after the initial 2 minutes?', options: ['Every 10 secs', 'Every 30 secs', 'Every 1 min', 'Every 2 mins'], answer: 1 },
      { q: 'Which disease specifically overwhelmingly prolongs CT but keeps BT normal?', options: ['Von Willebrand', 'Hemophilia A', 'Dengue', 'ITP'], answer: 1 },
      { q: 'Normal CT by routine capillary method is approximately?', options: ['1-3 mins', '3-8 mins', '10-20 mins', '30-45 mins'], answer: 1 },
      { q: 'Why is the tube physically held tightly in the palm of the hand?', options: ['To hide it from light', 'To keep it near 37°C preventing cold thermal block', 'To apply pressure', 'To mix blood'], answer: 1 },
      { q: 'What is a distinctly more sensitive, standard gold diagnostic method for CT?', options: ['Duke\'s', 'Ivy\'s', 'Lee & White', 'Westergren'], answer: 2 },
      { q: 'What specific type of capillary tube is medically used?', options: ['Heparinized', 'Non-heparinized', 'EDTA coated', 'Citrated'], answer: 1 },
      { q: 'If CT is recorded as 15 minutes, it is formally considered:', options: ['Normal', 'Abnormally shortened', 'Abnormally prolonged and pathological', 'Invalid'], answer: 2 },
      { q: 'Which severe vitamin deficiency can clinically prolong Clotting Time?', options: ['Vitamin A', 'Vitamin C', 'Vitamin K', 'Vitamin D'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Capillary.svg/960px-Capillary.svg.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Joseph_Lister_1902.jpg'
    }
  },
  {
    id: 'hem-pt',
    title: 'Prothrombin Time (PT & INR)',
    isImportant: true,
    definition: 'A highly sensitive laboratory test that measures the time it takes for plasma to clot after adding tissue factor, assessing the Extrinsic pathway.',
    principle: 'Tissue thromboplastin (Tissue Factor) and calcium are forcefully added to citrated plasma. The citrate previously bound all endogenous calcium to prevent clotting. The added calcium overwhelms the citrate, while the thromboplastin rapidly activates Factor VII. The time taken for the plasma to clot evaluates the Extrinsic and Common pathways (Factors VII, X, V, II, I).',
    mechanism: 'TF + VIIa complex activates Factor X. Factor Xa + Va converts Prothrombin to Thrombin. Thrombin converts soluble Fibrinogen into solid Fibrin.',
    types: ['Manual Tilt Tube Method', 'Automated Coagulometer Analysis'],
    specimen: 'Plasma separated from blood strictly anticoagulated with 3.2% Sodium Citrate (Ratio exactly 9:1).',
    reagents: [
      { component: 'Tissue Thromboplastin Reagent', function: 'Provides exogenous Tissue Factor heavily mixed with optimal Calcium Chloride to violently initiate the extrinsic cascade.' }
    ],
    equipment: ['Water bath at exactly 37°C', 'Precision Micropipettes', 'Stopwatch', 'Clear glass test tubes'],
    procedure: [
      'Incubate the Thromboplastin reagent and the patient\'s plasma separately in a strictly 37°C water bath for a few minutes to reach optimal enzymatic temperature.',
      'Pipette exactly 0.1 ml (100 µl) of the pre-warmed patient test plasma into a clean test tube inside the bath.',
      'Forcefully blast 0.2 ml (200 µl) of the fully warmed Thromboplastin reagent exactly into the plasma drop and start the stopwatch simultaneously.',
      'Carefully mix and continuously tilt the tube horizontally and vertically within the water bath.',
      'Stop the watch immediately upon the very first microscopic sight of gelation or a fibrin clot web forming.'
    ],
    observation: 'The pale yellow liquid plasma suddenly solidifies into a cloudy gelatinous mass.',
    result: 'Patient PT: ______ secs. Control PT: ______ secs. INR: ______',
    interpretation: 'Results are often officially reported as an INR. INR = (Patient PT / Control PT) ^ ISI. High INR indicates dangerously slow clotting.',
    referenceRange: 'PT: 11 - 15 seconds. INR: 0.8 - 1.1 (Therapeutic target: 2.0 - 3.0)',
    clinicalSignificance: 'Mandatory test heavily utilized to rigorously monitor oral Warfarin (Coumadin) anticoagulant therapy. Crucial physiological marker of extensive severe liver disease.',
    sourcesOfError: ['Overfilling or underfilling the citrate tube throwing the 9:1 ratio off, causing false extreme results', 'Leaving plasma at room temperature or processing after 4 hours'],
    precautions: ['The blood drawing to citrate ratio MUST be exactly an uncompromising 9:1.', 'Incubation strictly at 37°C is fundamentally essential for optimal enzymatic cascade kinetics.'],
    normalVsAbnormal: 'Abnormal PTs (>20s) in non-medicated patients signal Vitamin K deficiency, severe obstructive jaundice, or outright liver failure.',
    applications: 'Pre-op clearance for abdominal surgery, diagnosing DIC.',
    limitations: 'Highly dependent on the ISI (International Sensitivity Index) of the specific thromboplastin reagent brand used.',
    examPoints: 'PT measures ExTrinsic pathway (Play Tennis Outside -> PT = Out/Extrinsic). Anticoagulant is 3.2% Citrate. Monitors Warfarin.',
    viva: [
      { q: 'Which exact physiological pathway does PT primarily measure?', a: 'Extrinsic and Common biological pathways.' },
      { q: 'Why do we uniquely use 3.2% sodium citrate as a specific coagulation anticoagulant?', a: 'Citrate binds calcium gently reversibly. We can biologically reintroduce massive calcium (in the reagent) to instantaneously initiate clotting under a controlled timer framework.' },
      { q: 'What does the calculation INR stand for and why is it used?', a: 'International Normalized Ratio. It mathematically standardizes PT results across varying global labs utilizing different reagent sensitivities.' },
      { q: 'In what heavily monitored clinical scenarios do we serially order PT/INR?', a: 'Patients strictly on Warfarin (oral anticoagulant) therapy, and in severe progressive liver diseases.' },
      { q: 'Why is the 9:1 ratio of blood to citrate absolutely critical?', a: 'Because under/over dilution drastically changes the free calcium binding, causing falsely severely prolonged or shortened analytical PTs.' }
    ],
    mcq: [
      { q: 'PT medically assesses which coagulation cascade pathway?', options: ['Intrinsic', 'Extrinsic', 'Primary', 'Fibrinolysis'], answer: 1 },
      { q: 'What is the absolute specific rigid ratio of blood to citrate for coagulation studies?', options: ['4:1', '9:1', '1:9', '1:4'], answer: 1 },
      { q: 'What critical reagent is blasted into the plasma in PT tests?', options: ['Calcium chloride alone', 'Tissue Thromboplastin + Calcium', 'Thrombin', 'Kaolin activated'], answer: 1 },
      { q: 'Normal Prothrombin time in a healthy unmedicated adult is approximately:', options: ['2-5 secs', '11-15 secs', '30-40 secs', '1-2 mins'], answer: 1 },
      { q: 'Which potent drug therapy is exclusively monitored via PT/INR?', options: ['Heparin', 'Warfarin (Coumadin)', 'Aspirin', 'Insulin'], answer: 1 },
      { q: 'Where are the vast majority of PT coagulation factors physically synthesized?', options: ['Bone marrow', 'Kidney', 'Liver', 'Spleen'], answer: 2 },
      { q: 'What does the advanced calculation INR formally stand for?', options: ['International Normalized Ratio', 'Internal Normalized Rate', 'Inter National Rating', 'Intrinsic Normalized Rate'], answer: 0 },
      { q: 'What exact body temperature must the testing water bath be set to?', options: ['25°C', '37°C', '42°C', '56°C'], answer: 1 },
      { q: 'Severe generalized deficiency of which vitamin significantly prolongs PT?', options: ['Vit A', 'Vit B12', 'Vit C', 'Vit K'], answer: 3 },
      { q: 'What constitutes the strict visual terminal end point of the manual PT test?', options: ['Color change to blue', 'Formation of a physical fibrin web or clot', 'Separation of serum', 'Bubbling stops'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lab_glassware.jpg/960px-Lab_glassware.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'hem-indices',
    title: 'Red Blood Cell Indices (MCV, MCH, MCHC)',
    isImportant: true,
    definition: 'Mathematical calculations providing average morphological measurements of red blood cells to highly accurately classify types of anemia.',
    principle: 'RBC indices reflect the average volumetric size and hemoglobin payload content of circulating red blood cells. They are calculated purely mathematically utilizing the absolutely precise results of Hb concentration, PCV (hematocrit), and Total RBC count parameters.',
    mechanism: 'Not applicable (pure computational derivations).',
    types: ['MCV (Volume)', 'MCH (Hemoglobin Weight)', 'MCHC (Hemoglobin Concentration)'],
    specimen: 'Data generated from high-quality whole blood parameters.',
    reagents: [
      { component: 'None', function: 'Requires existing analytical results of hemoglobin, hematocrit, and RBC count.' }
    ],
    equipment: ['Calculator', 'Highly accurate raw CBC data results'],
    procedure: [
      'Extract the perfectly accurate tested values for Hemoglobin in g/dl, PCV in %, and RBC count in millions.',
      'Calculate Mean Corpuscular Volume (MCV): Indicates the physical size of the cell. Formula: (PCV x 10) / RBC count.',
      'Calculate Mean Corpuscular Hemoglobin (MCH): Indicates the sheer physical weight of Hb inside one cell. Formula: (Hb x 10) / RBC count.',
      'Calculate Mean Corpuscular Hemoglobin Concentration (MCHC): Indicates the packed density or percentage of Hb within the given RBC mass. Formula: (Hb x 100) / PCV.'
    ],
    observation: 'Mathematical outputs providing structural insights.',
    result: 'MCV = ___ fL | MCH = ___ pg | MCHC = ___ g/dL',
    interpretation: 'A low MCV dictates microcytosis. A low MCHC dictates hypochromia. The combination definitively categorizes the anemia pathology.',
    referenceRange: 'MCV: 80-100 fL | MCH: 27-32 pg | MCHC: 32-36 g/dL',
    clinicalSignificance: 'Provides the morphological foundation for all anemia diagnoses. For instance, IDA is typically Microcytic Hypochromic (low MCV, low MCHC). B12 deficiency is Macrocytic (high MCV, normal MCHC).',
    sourcesOfError: ['Using poorly performed or inaccurate raw base hematology parameters; in mathematics, garbage in rigidly leads to garbage out'],
    precautions: ['Always cross-verify these mathematical figures manually forcefully against the visual peripheral smear to ensure no conflicting data exists.'],
    normalVsAbnormal: 'Values outside ranges warrant immediate iron profile testing, B12/folate investigations, or electrophoresis.',
    applications: 'Algorithmic clinical differential diagnosis in internal medicine.',
    limitations: 'These are purely average values. If a patient possesses a dimorphic dual population of both huge and tiny RBCs, the MCV might average out to deceptively "normal".',
    examPoints: 'Remember the formulas perfectly. MCV uses PCV and RBC. MCH uses Hb and RBC. MCHC uses Hb and PCV. MCV unit is fL.',
    viva: [
      { q: 'What exactly does the mathematical MCV clinically indicate?', a: 'The average physical volume or sheer microscopic size of a single red blood cell.' },
      { q: 'What does a significantly suppressed low MCV firmly indicate?', a: 'Microcytosis, most overwhelmingly commonly seen in fundamental Iron Deficiency Anemia (IDA).' },
      { q: 'What is the heavily monitored parameter MCHC?', a: 'The average density or concentration percentage of hemoglobin tightly packed in a given volume of red cells.' },
      { q: 'In which critical condition is MCV pathologically elevated (>100 fL)?', a: 'Macrocytic anemias, prominently such as severe Vitamin B12 or Folic Acid deficiency (Megaloblastic anemia).' },
      { q: 'What is the universally accepted unit of measurement for MCH?', a: 'Picograms (pg), representing extreme structural cellular weight.' }
    ],
    mcq: [
      { q: 'The absolute correct standard formula for MCV is?', options: ['Hb/PCV', '(PCV x 10)/RBC count', '(RBC x 10)/PCV', '(Hb x 10)/RBC'], answer: 1 },
      { q: 'The structural mathematical formula for MCH physically is?', options: ['(Hb x 100)/PCV', '(PCV x 10)/RBC', '(Hb x 10)/RBC count', 'RBC/Hb'], answer: 2 },
      { q: 'MCHC pure calculation heavily uses which two exact parameters?', options: ['RBC and Hb', 'PCV and RBC', 'Hb and PCV', 'MCV and MCH'], answer: 2 },
      { q: 'The clinical scientific unit of MCV is formally:', options: ['Femtoliters (fL)', 'Picograms (pg)', 'Percentage (%)', 'g/dL'], answer: 0 },
      { q: 'The clinical absolute unit of MCH is formally:', options: ['Femtoliters (fL)', 'Picograms (pg)', 'Percentage (%)', 'g/dL'], answer: 1 },
      { q: 'Normal healthy baseline value for MCV is strictly:', options: ['50-70 fL', '80-100 fL', '100-120 fL', '150-200 fL'], answer: 1 },
      { q: 'Which profound condition exhibits classic Microcytic Hypochromic anemia?', options: ['B12 deficiency', 'Iron deficiency anemia', 'Aplastic anemia', 'Folate deficiency'], answer: 1 },
      { q: 'Which parameter explicitly defines dangerous Macrocytosis?', options: ['MCV > 100 fL', 'MCV < 80 fL', 'MCHC < 32%', 'MCH < 27 pg'], answer: 0 },
      { q: 'Which index is biologically most uniquely useful for heavily detecting spherocytosis?', options: ['MCV', 'MCH', 'MCHC (it becomes pathologically elevated >36)', 'RDW'], answer: 2 },
      { q: 'Which laboratory component is necessarily needed to accurately compute MCHC?', options: ['Total WBC', 'RBC Count strictly', 'Hematocrit (PCV)', 'Platelet count mass'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Draper_Laboratory%2C_Cambridge%2C_Massachusetts.jpg/960px-Draper_Laboratory%2C_Cambridge%2C_Massachusetts.jpg',
      microscopic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'hem-sickling',
    title: 'Sickling Test (Dithionite Tube Test)',
    isImportant: true,
    definition: 'A rapid emergency screening test determining the presence of abnormal Sickle Hemoglobin (HbS).',
    principle: 'Sodium dithionite actively acts as a highly potent reducing agent. When violently added to blood, it aggressively deoxygenates the hemoglobin space. In the pathological presence of HbS (Sickle Hemoglobin), the suddenly deoxygenated HbS structurally polymerizes into massive tactoids, drastically turning the solution cloudy, opaque, and highly turbid. Normal HbA completely fails to polymerize and remains crystal clear.',
    mechanism: 'Deoxygenation induces hydrophobic interaction between the mutated Valine at position 6 on the HbS Beta chain and adjacent molecules, forming rigid, long, insoluble rod-like fibers.',
    types: ['Dithionite Tube Test (solubility)', 'Metabisulfite slide test'],
    specimen: 'EDTA blood heavily preferred.',
    reagents: [
      { component: 'Sodium Dithionite', function: 'Serves as an extreme deoxygenating chemical agent.' },
      { component: 'Saponin', function: 'Forces RBC lysis, releasing the mutated intracellular hemoglobin into direct testing suspension.' },
      { component: 'Phosphate buffer', function: 'Maintains ideal reaction pH and osmotic environment.' }
    ],
    equipment: ['Test tubes', 'Sickling Reagent', 'Reader scale with strongly printed thick black lines visually behind the tube'],
    procedure: [
      'Take 2.0 ml of heavily prepared sickling reagent in a test tube.',
      'Swiftly add 20 µl of whole well-mixed EDTA blood.',
      'Agitate and mix thoroughly, placing the tube in a rack to incubate at room temperature for exactly 5-10 minutes.',
      'Physically hold the test tube precisely 1 inch horizontally away from a white scale heavily printed with solid black lines.',
      'Observe for optical turbidity.'
    ],
    observation: 'Positive result yields a violently turbid, milky, grayish-pink solution completely occluding vision. Negative result yields a translucent, clear pinkish liquid.',
    result: 'Positive: Turbid (lines obscured) | Negative: Clear (lines visible)',
    interpretation: 'A turbid solution heavily dictates that Sickle Hemoglobin (HbS) is physically circulating in the patient.',
    referenceRange: 'Normally always Negative.',
    clinicalSignificance: 'Extremely vital screening protocol performed universally prior to general anesthesia to fundamentally prevent intra-operative fatal sickling crises triggered by anesthetic hypoxia.',
    sourcesOfError: ['Severe uncorrected anemia may give dangerous false negatives (if Hb < 7g/dl, double the blood volume is clinically required)', 'Using expired deactivated reagent'],
    precautions: ['The test categorically absolutely does NOT differentiate between the benign trait (HbAS) and the severe disease (HbSS).', 'Reagent must be freshly prepared strictly.'],
    normalVsAbnormal: 'Positives demand immediate follow-up via high-pressure liquid chromatography or Hb Electrophoresis for precise quantification and diagnosis.',
    applications: 'Emergency casualty screening, antenatal carrier detection in highly endemic zones.',
    limitations: 'Cannot differentiate Trait from Disease. False positives occur heavily in hyperproteinemia or rare Hb variants (HbC Harlem).',
    examPoints: 'Dithionite is a reducing agent. Valine replaces Glutamic acid at the 6th position. Turbidity = Positive.',
    viva: [
      { q: 'What is the intense chemical function of Sodium Dithionite?', a: 'It acts as a brutally strong reducing agent that physically violently removes oxygen from the biochemical blood system.' },
      { q: 'Why exactly does HbS become so turbid when violently deoxygenated?', a: 'HbS molecules abnormally polymerize into massively long, horribly stiff, insoluble tactoids or fibers when deoxygenated, heavily blocking light transmission.' },
      { q: 'Can this specific test clinically tell if a patient has sickle cell trait vs disease?', a: 'No, absolutely not. Both forms will display heavy turbidity. Confirmatory Gel electrophoresis is clinically mandated to differentiate.' },
      { q: 'What happens physically to the RBC visually under a microscope in sickle cell?', a: 'They brutally distort and physically collapse into a curved, rigid sickle, or crescent moon abnormal shape.' },
      { q: 'What is the defining genetic mutation that directly causes HbS?', a: 'A point mutation causing Substitution of Glutamic acid with Valine exclusively at the precise 6th position of the beta-globin protein chain.' }
    ],
    mcq: [
      { q: 'Which powerful reducing agent is standardly paramount for the Sickling Test?', options: ['Sodium Dithionite', 'Sodium Citrate', 'Potassium Cyanide', 'Ammonium Oxalate'], answer: 0 },
      { q: 'What is the defining physiological visual end-point of a critically positive Sickling test in a tube?', options: ['Clear translucent red solution', 'Bright Yellow color', 'Opaque Turbid/Cloudy solution', 'Complete cell clumping'], answer: 2 },
      { q: 'Fundamentally, HbS biochemically polymerizes strictly under which specific harsh condition?', options: ['High oxygen saturation', 'Severe Deoxygenation', 'High alkaline pH', 'Cold temperatures'], answer: 1 },
      { q: 'The basic sickling test can independently heavily differentiate between trait (AS) and disease (SS).', options: ['True', 'False', 'Only in kids', 'Only in males'], answer: 1 },
      { q: 'Which advanced diagnostic method strictly universally confirms HbS trait vs disease?', options: ['Sickling Tube Test', 'Rapid ESR', 'Hb Electrophoresis', 'Retic count'], answer: 2 },
      { q: 'Sickle cell is genetically violently caused by substitution of normal glutamate physically by:', options: ['Lysine', 'Valine', 'Arginine', 'Glycine'], answer: 1 },
      { q: 'The genetic point mutation for Sickle Cell is physically located precisely on which globin chain?', options: ['Alpha', 'Beta', 'Gamma', 'Delta'], answer: 1 },
      { q: 'Clinically severe anemia can unfortunately directly cause a highly dangerous false:', options: ['Positive', 'Negative', 'Turbidity', 'Clearance'], answer: 1 },
      { q: 'Sickled RBCs morphologically physically resemble which sharp shape?', options: ['Tiny Spheres', 'Targets', 'Crescent moon / Sharp Sickle', 'Teardrops'], answer: 2 },
      { q: 'If the black lines positioned closely behind the glass tube are completely purely visible, the test is firmly:', options: ['Invalid', 'Positive', 'Negative', 'Needs repeating'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/TurbidityStandards.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Tuberculous_peritonitis_%286544825621%29.jpg/960px-Tuberculous_peritonitis_%286544825621%29.jpg'
    }
  }
];
