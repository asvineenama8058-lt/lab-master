export const hematologyData1 = [
  {
    id: 'hem-hb-sahli',
    title: 'Estimation of Hemoglobin (Sahli\'s Method)',
    isImportant: true,
    definition: 'A visual comparative method for estimating hemoglobin concentration by converting hemoglobin into acid hematin.',
    principle: 'Blood is added to N/10 hydrochloric acid (HCl), lysing erythrocytes and converting the hemoglobin into a brown-colored compound called acid hematin. The intensity of the color is directly proportional to the hemoglobin concentration. The mixture is diluted with distilled water until it visually matches a standard brown glass comparator.',
    mechanism: 'The heme group of hemoglobin reacts with the chloride ions of 0.1 N HCl yielding Acid Hematin.',
    types: ['Visual Comparators', 'Manual Acid Hematin'],
    specimen: 'Capillary blood or EDTA-anticoagulated venous blood.',
    reagents: [
      { component: 'N/10 (0.1 N) Hydrochloric Acid', function: 'Lyses RBCs and converts hemoglobin to acid hematin.' },
      { component: 'Distilled Water', function: 'Acts as a diluent to match the required color intensity.' }
    ],
    equipment: ['Sahli\'s Hemoglobinometer', 'Sahli\'s Pipette', 'Graduated diluting tube', 'Glass stirrer'],
    procedure: [
      'Fill graduated tube with N/10 HCl up to the lowest mark (2 g/dl).',
      'Draw blood exactly up to the 20 µl mark in the Sahli\'s pipette without trapping air bubbles.',
      'Wipe the exterior of the pipette tip and blow the blood into the HCl.',
      'Mix and allow to stand for exactly 10 minutes for maximum color development.',
      'Dilute the mixture with distilled water drop by drop, stirring continuously, until color perfectly matches the standard.',
      'Read the result at the lower meniscus.'
    ],
    observation: 'The reddish blood changes into a dark brown clear solution.',
    result: 'The hemoglobin concentration is ______ g/dl.',
    interpretation: 'Low levels indicate anemia, high levels indicate polycythemia or dehydration.',
    referenceRange: 'Male: 13-17 g/dl | Female: 12-15 g/dl',
    clinicalSignificance: 'Fundamental screening test for diagnosing and classifying anemias.',
    sourcesOfError: ['Air bubbles in the pipette', 'Inadequate wait time causing incomplete conversion', 'Subjective color matching errors'],
    precautions: ['Use exactly 0.1 N HCl', 'Wait exactly 10 minutes', 'Ensure pipette is completely dry before drawing blood'],
    normalVsAbnormal: 'Abnormal drop below 10g/dl indicates clinically significant anemia.',
    applications: 'Field surveys, primary healthcare centers.',
    limitations: 'Cannot measure inactive hemoglobins (carboxyhemoglobin, methemoglobin, sulfhemoglobin). Fetal hemoglobin resists conversion.',
    examPoints: 'Remember: Wait time is exactly 10 minutes (95% of Hb is converted in this period).',
    viva: [
      { q: 'Why is N/10 HCl used in Sahli\'s method?', a: 'To lyse RBCs and convert hemoglobin into brown acid hematin.' },
      { q: 'Why do we wait for 10 minutes?', a: 'To ensure maximum conversion of Hb to acid hematin.' },
      { q: 'What is the main disadvantage of Sahli\'s method?', a: 'It cannot estimate inactive hemoglobins like carboxyhemoglobin and methemoglobin.' },
      { q: 'What mark does the Sahli\'s pipette have?', a: 'It has only one mark at 20 µl (0.02 ml).' },
      { q: 'Which forms of Hb are not converted by this method?', a: 'Fetal hemoglobin is resistant; methemoglobin is not converted.' }
    ],
    mcq: [
      { q: 'Which method uses N/10 HCl?', options: ['Cyanmethemoglobin', 'Sahli\'s', 'Haldane\'s', 'Tallqvist'], answer: 1 },
      { q: 'What is the reading mark on Sahli\'s pipette?', options: ['10 µl', '20 µl', '50 µl', '100 µl'], answer: 1 },
      { q: 'What colored compound is formed in Sahli\'s method?', options: ['Cyanmethemoglobin', 'Alkaline hematin', 'Acid hematin', 'Carboxyhemoglobin'], answer: 2 },
      { q: 'What is the standard incubation time for color development?', options: ['2 mins', '5 mins', '10 mins', '20 mins'], answer: 2 },
      { q: 'Which hemoglobin escapes estimation by Sahli\'s method?', options: ['Oxyhemoglobin', 'Reduced hemoglobin', 'Carboxyhemoglobin', 'Adult hemoglobin'], answer: 2 },
      { q: 'What is normal Hemoglobin for males?', options: ['10-12 g/dl', '13-17 g/dl', '11-14 g/dl', '18-20 g/dl'], answer: 1 },
      { q: 'What type of meniscus is read in Sahli’s tube?', options: ['Upper meniscus', 'Lower meniscus', 'Middle', 'No specific meniscus'], answer: 1 },
      { q: 'Which acid is used to make acid hematin?', options: ['Nitric acid', 'Sulfuric acid', 'Hydrochloric acid', 'Acetic acid'], answer: 2 },
      { q: 'At what temperature should the visual matching strictly take place?', options: ['4 °C', '25 °C', 'Room temperature', '37 °C'], answer: 2 },
      { q: 'What visually matches the standard brown glass?', options: ['Plasma', 'Serum', 'Acid hematin', 'Lysed RBCs'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Haemoglobinometer_%28Sahli%27s_type%29.jpg/640px-Haemoglobinometer_%28Sahli%27s_type%29.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Urine_of_patient_with_porphyria.png'
    }
  },
  {
    id: 'hem-hb-cyan',
    title: 'Estimation of Hemoglobin (Cyanmethemoglobin Method)',
    isImportant: true,
    definition: 'The internationally recommended standard method for quantitative photometric hemoglobin estimation.',
    principle: 'Blood is mixed with Drabkin\'s reagent. Potassium ferricyanide oxidizes iron in hemoglobin from ferrous (Fe2+) to ferric (Fe3+) state, forming methemoglobin. This reacts with potassium cyanide to form stable cyanmethemoglobin. The color intensity is measured photometrically at 540 nm.',
    mechanism: 'Hb(Fe2+) + K3[Fe(CN)6] → MetHb(Fe3+). MetHb + KCN → Cyanmethemoglobin.',
    types: ['Photometric Analysis'],
    specimen: 'EDTA anticoagulated venous blood or capillary blood.',
    reagents: [
      { component: 'Potassium Ferricyanide', function: 'Oxidizes ferrous iron of Hb to ferric iron forming Methemoglobin.' },
      { component: 'Potassium Cyanide', function: 'Converts Methemoglobin to stable Cyanmethemoglobin.' },
      { component: 'Potassium Dihydrogen Phosphate', function: 'Maintains ideal pH.' },
      { component: 'Triton X-100', function: 'Enhances RBC lysis and prevents turbidity.' }
    ],
    equipment: ['Spectrophotometer/Colorimeter', 'Drabkin\'s Reagent', '20 µl pipettes', 'Test tubes'],
    procedure: [
      'Pipette 5.0 ml of Drabkin\'s reagent into a clean test tube.',
      'Add exactly 20 µl of well-mixed whole blood (Dilution 1:251).',
      'Mix the solution well and incubate at room temperature for 5 to 10 minutes.',
      'Measure the absorbance at 540 nm (Green filter) against a reagent blank.',
      'Calculate hemoglobin concentration using a calibration curve.'
    ],
    observation: 'Solution turns uniformly pinkish-red.',
    result: 'The hemoglobin concentration is ______ g/dl.',
    interpretation: 'Main determinant of target oxygen-carrying capacity.',
    referenceRange: 'Male: 13-17 g/dl | Female: 12-15 g/dl',
    clinicalSignificance: 'Considered the Gold Standard. Reliable for diagnosing and confirming degree of anemias.',
    sourcesOfError: ['Lipemic plasma or high WBC count causing turbidity', 'Using deteriorated light-exposed reagent'],
    precautions: ['Drabkin\'s contains toxic cyanide; never mouth pipette.', 'Store reagent in amber bottles.', 'Turbid samples must be centrifuged.'],
    normalVsAbnormal: 'Evaluated against distinct physiological norms based on gender and age.',
    applications: 'Routine hospital CBC counters (modified cyanide-free).',
    limitations: 'It cannot measure Sulfhemoglobin.',
    examPoints: 'Wavelength used is 540 nm. It measures ALL types of Hb EXCEPT Sulfhemoglobin.',
    viva: [
      { q: 'Why is Cyanmethemoglobin the standard method?', a: 'It estimates all forms of hemoglobin (except sulfhemoglobin) and the color is highly stable.' },
      { q: 'What is the composition of Drabkin\'s solution?', a: 'Potassium ferricyanide, Potassium cyanide, Potassium dihydrogen phosphate, and Triton X-100.' },
      { q: 'What specific wavelength is used?', a: '540 nm.' },
      { q: 'Which type of Hb is NOT measured?', a: 'Sulfhemoglobin.' },
      { q: 'Why use a non-ionic detergent in Drabkin\'s fluid?', a: 'To enhance RBC lysis and prevent lipemic turbidity.' }
    ],
    mcq: [
      { q: 'Recommended wavelength for Cyanmethemoglobin method?', options: ['450 nm', '505 nm', '540 nm', '630 nm'], answer: 2 },
      { q: 'Drabkin\'s solution converts hemoglobin initially to?', options: ['Acid hematin', 'Methemoglobin', 'Oxyhemoglobin', 'Carboxyhemoglobin'], answer: 1 },
      { q: 'Which compound is highly poisonous in Drabkin\'s?', options: ['Potassium ferricyanide', 'Potassium cyanide', 'Triton X-100', 'Phosphate'], answer: 1 },
      { q: 'Which method is recommended by ICSH?', options: ['Sahli\'s', 'Cyanmethemoglobin', 'Specific Gravity', 'Haldane\'s'], answer: 1 },
      { q: 'What hemoglobin form is NOT measured?', options: ['Methemoglobin', 'Carboxyhemoglobin', 'Sulfhemoglobin', 'Oxyhemoglobin'], answer: 2 },
      { q: 'What volume of blood is added to 5 ml of Drabkin\'s?', options: ['10 µl', '20 µl', '50 µl', '100 µl'], answer: 1 },
      { q: 'How long must the mixture sit before reading?', options: ['1 min', '3 mins', '5-10 mins', '30 mins'], answer: 2 },
      { q: 'Role of Triton X-100 in the reagent?', options: ['Color stabilizer', 'Preservative', 'Lyses RBCs and reduces turbidity', 'Prevents clotting'], answer: 2 },
      { q: 'Why is Drabkin\'s stored in amber bottles?', options: ['To prevent evaporation', 'It is light-sensitive', 'Prevents glass reaction', 'Toxicity control'], answer: 1 },
      { q: 'What color is produced by Cyanmethemoglobin?', options: ['Brown', 'Yellow', 'Reddish-pink', 'Blue'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lab_glassware.jpg/960px-Lab_glassware.jpg'
    }
  },
  {
    id: 'hem-tlc',
    title: 'Total Leukocyte Count (TLC or WBC Count)',
    isImportant: true,
    definition: 'Quantitative estimation of total white blood cells in a specific volume of blood.',
    principle: 'Blood is diluted with WBC diluting fluid (Turk\'s fluid), containing acetic acid to lyse RBCs and gentian violet to stain WBC nuclei. The intact WBCs are counted using a Neubauer chamber.',
    mechanism: 'Glacial acetic acid acts as an erythro-lytic agent leaving WBC membranes intact, while gentian violet acts as a nuclear stain.',
    types: ['Hemocytometry Counting'],
    specimen: 'EDTA blood or direct capillary puncture.',
    reagents: [
      { component: 'Glacial Acetic Acid (1.5-2%)', function: 'Lyses anucleated RBCs while preserving WBCs.' },
      { component: 'Gentian Violet', function: 'Stains the nuclei of leukocytes making them visible.' }
    ],
    equipment: ['Neubauer Counting Chamber', 'WBC Thoma Pipette', 'Microscope', 'Moist petri dish'],
    procedure: [
      'Draw EDTA blood exactly up to the 0.5 mark in the WBC pipette.',
      'Wipe the exterior of the tip.',
      'Draw WBC diluting fluid up to the 11 mark (1:20 dilution).',
      'Mix gently but thoroughly in a figure-eight motion for 2-3 minutes.',
      'Discard the first 2-3 drops from the tip of the pipette.',
      'Charge the Neubauer chamber by capillary action.',
      'Allow the chamber to rest for 2 minutes inside a moist petri dish.',
      'Count the WBCs in the four large corner squares using the 10x objective.'
    ],
    observation: 'Nucleated dark dots appear across a grid. No red blood cells visible.',
    result: 'The Total Leukocyte Count is ______ cells/cu.mm.',
    interpretation: 'TLC = (Number of cells counted x Dilution factor) / Volume. TLC = (N x 20) / 0.4 = N x 50.',
    referenceRange: '4,000 - 11,000 cells/cu.mm',
    clinicalSignificance: 'Determines presence of systemic infections, leukemias, and immune status.',
    sourcesOfError: ['Aspirating clots', 'Failing to discard first drops', 'Drying of fluid inside the chamber'],
    precautions: ['Do not overcharge the chamber.', 'Follow standardized L-shape counting rules on boundary lines.'],
    normalVsAbnormal: 'Below 4,000 is Leukopenia; above 11,000 is Leukocytosis.',
    applications: 'Baseline fever profiling, sepsis monitoring.',
    limitations: 'Nucleated RBCs are not lysed and can falsely elevate WBC counts.',
    examPoints: 'Remember the dilution factor is 1:20. Volume counted is 4 squares.',
    viva: [
      { q: 'What is the composition of Turk\'s fluid?', a: 'Glacial acetic acid (lyses RBCs), Gentian violet (stains WBC nuclei), and distilled water.' },
      { q: 'What is the dilution factor for TLC?', a: '1 in 20.' },
      { q: 'Which squares are counted for TLC in the Neubauer chamber?', a: 'The 4 large corner squares.' },
      { q: 'What causes Leukocytosis?', a: 'Infections, inflammation, leukemia, physiological stress.' },
      { q: 'Why do we discard the first few drops before charging?', a: 'Because the stem of the pipette contains only unmixed diluting fluid.' }
    ],
    mcq: [
      { q: 'What is the dilution factor in the WBC pipette when blood is taken to 0.5 mark?', options: ['1:10', '1:20', '1:100', '1:200'], answer: 1 },
      { q: 'Which chemical in Turk\'s fluid lyses the RBCs?', options: ['Gentian violet', 'Glacial acetic acid', 'Formalin', 'Sodium citrate'], answer: 1 },
      { q: 'How many squares are counted for TLC in a Neubauer chamber?', options: ['5 small squares', '4 large squares', 'Central large square', 'All 9 squares'], answer: 1 },
      { q: 'What is the normal TLC range?', options: ['1,000-3,000 /cumm', '4,000-11,000 /cumm', '15,000-20,000 /cumm', '150,000-400,000 /cumm'], answer: 1 },
      { q: 'Which dye visually stains WBC nuclei in Turk\'s fluid?', options: ['Eosin', 'Safranin', 'Gentian violet', 'Methylene blue'], answer: 2 },
      { q: 'To what mark is diluting fluid drawn in the WBC pipette?', options: ['0.5', '1', '11', '101'], answer: 2 },
      { q: 'What is the volume of one of the 4 large WBC squares?', options: ['0.1 cu.mm', '1.0 cu.mm', '0.04 cu.mm', '0.0025 cu.mm'], answer: 0 },
      { q: 'What is LEUKOPENIA?', options: ['Increase in WBCs', 'Decrease in WBCs', 'Decrease in Platelets', 'Increase in RBCs'], answer: 1 },
      { q: 'At what objective lens do we count TLC?', options: ['4x', '10x', '40x', '100x'], answer: 1 },
      { q: 'Why is a moist chamber used while settling cells?', options: ['To speed up cells', 'To prevent fluid evaporation', 'To make cells swell', 'To kill bacteria'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/MicroscopeSlides.jpg/960px-MicroscopeSlides.jpg',
      diagram: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'hem-dlc',
    title: 'Differential Leukocyte Count (DLC)',
    isImportant: true,
    definition: 'Microscopic identification and classification of 100 white blood cells into constituent subtypes.',
    principle: 'A thin blood smear is stained with a Romanowsky stain (Leishman\'s). Basic cellular components attract acidic Eosin dye, while acidic components (DNA) attract basic Methylene Blue dye. Morphological differences distinguish leukocyte types.',
    mechanism: 'Methanol initially fixes the proteins. Buffer addition actively ionizes the dye ensuring complete cellular conjugation.',
    types: ['Romanowsky Staining'],
    specimen: 'EDTA blood or direct capillary prick.',
    reagents: [
      { component: 'Methylene Blue (Basic Dye)', function: 'Stains acidic structures (DNA, RNA) deeply blue/purple.' },
      { component: 'Eosin (Acidic Dye)', function: 'Stains basic structures (eosinophilic granules) orange/pink.' },
      { component: 'Absolute Methanol', function: 'Cellular fixative preserving morphology.' },
      { component: 'Buffered Water (pH 6.8)', function: 'Triggers dye ionization.' }
    ],
    equipment: ['Glass slides', 'Spreader slide', 'Leishman\'s Stain', 'Microscope (100x Oil Immersion)'],
    procedure: [
      'Place a small drop of blood on a glass slide.',
      'Use a spreader slide at a 45-degree angle to create a thin, tongue-shaped smear.',
      'Allow the smear to air-dry rapidly.',
      'Flood the slide with Leishman\'s stain for exactly 2 minutes (Fixation).',
      'Add double the volume of buffered water (pH 6.8) and gently blow to mix until a green scum appears. Wait 8-10 minutes.',
      'Wash gently with tap water.',
      'Air-dry the slide, add cedarwood oil, and count 100 WBCs using a zig-zag (battlement) track near the feathered tail.'
    ],
    observation: 'Distinct multi-colored cells. Neutrophils: multilobed. Lymphocytes: large nucleus. Eosinophils: prominent orange granules. Monocytes: largest cell, kidney-bean nucleus.',
    result: 'Neutrophils: __%, Lymphocytes: __%, Eosinophils: __%, Monocytes: __%, Basophils: __%.',
    interpretation: 'Percentage shifts provide diagnostic clues to varying pathologies including allergies, viral attacks, and acute bacterial sepsis.',
    referenceRange: 'Neutrophils (40-75%), Lymphocytes (20-45%), Eosinophils (1-6%), Monocytes (2-10%), Basophils (0-1%)',
    clinicalSignificance: 'Neutrophilia points to bacterial infections; Lymphocytosis indicates viral infections. Eosinophilia correlates tightly with allergies and parasites.',
    sourcesOfError: ['Smears too thick or thin', 'Evaluating Extreme tail where cells distort', 'Incorrect buffer pH'],
    precautions: ['Do not blow on the slide directly to dry it as breath condensation destroys RBCs.', 'Always ensure spreader edge is smooth.'],
    normalVsAbnormal: 'Shifts outside norms denote immune system response signatures.',
    applications: 'Core component of Complete Blood Count (CBC).',
    limitations: 'Subjective visual assessment. Very difficult in severe leukopenia.',
    examPoints: 'A well-made smear has a head, body, and tail. Always count at the junction of body and tail.',
    viva: [
      { q: 'What is the composition of Leishman\'s stain?', a: 'Eosin (acidic), Methylene blue (basic), in absolute methanol.' },
      { q: 'Why do we wait for 2 minutes before adding buffer?', a: 'To allow methanol to fix the cells to the slide.' },
      { q: 'What is the characteristic feature of an Eosinophil?', a: 'Bilobed nucleus with coarse, orange-red granules.' },
      { q: 'Which is the largest WBC in peripheral blood?', a: 'Monocyte (kidney-shaped nucleus).' },
      { q: 'What conditions cause Eosinophilia?', a: 'Allergic reactions and parasitic infections.' }
    ],
    mcq: [
      { q: 'Which property of methanol is used in Leishman stain?', options: ['Lysis', 'Fixation', 'Staining', 'Clearing'], answer: 1 },
      { q: 'What is the ideal pH of the buffer water used for staining?', options: ['5.0', '6.8', '7.4', '8.2'], answer: 1 },
      { q: 'Which cells have a kidney-bean shaped nucleus?', options: ['Neutrophil', 'Lymphocyte', 'Monocyte', 'Basophil'], answer: 2 },
      { q: 'Which WBC is most abundant in a normal adult?', options: ['Eosinophil', 'Neutrophil', 'Lymphocyte', 'Monocyte'], answer: 1 },
      { q: 'What color are eosinophil granules?', options: ['Dark Blue/Purple', 'Orange/Red', 'Gray', 'Colorless'], answer: 1 },
      { q: 'What causes Neutrophilia?', options: ['Viral infections', 'Acute bacterial infections', 'Parasitic infections', 'Allergies'], answer: 1 },
      { q: 'What causes Lymphocytosis?', options: ['Acute bacterial infections', 'Allergies', 'Viral infections', 'Parasites'], answer: 2 },
      { q: 'How many total cells are typically counted in routine DLC?', options: ['50', '100', '200', '500'], answer: 1 },
      { q: 'Which counting pattern is used on the slide?', options: ['Straight line', 'Circular', 'Zig-zag / Battlement', 'Random'], answer: 2 },
      { q: 'Which WBC contains histamine-rich dark blue granules obscuring the nucleus?', options: ['Monocyte', 'Neutrophil', 'Eosinophil', 'Basophil'], answer: 3 }
    ],
    images: {
      slide: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      microscopic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/White_blood_cells_smear.jpg/640px-White_blood_cells_smear.jpg'
    }
  },
  {
    id: 'hem-rbc',
    title: 'Total RBC Count',
    isImportant: false,
    definition: 'Quantitative measurement of circulating erythrocytes in a unit volume of blood.',
    principle: 'Blood is diluted with an isotonic RBC diluting fluid (Dacie\'s or Hayem\'s) preventing hemolysis and rouleaux formation. RBCs are counted across a specific microscopic grid within a known volume.',
    mechanism: 'Isotonicity preserves cellular structure during counting.',
    types: ['Hemocytometry Counting'],
    specimen: 'EDTA blood or direct capillary blood.',
    reagents: [
      { component: 'Trisodium Citrate (Dacie\'s fluid)', function: 'Provides the exact isotonic osmotic pressure and prevents coagulation.' },
      { component: 'Formalin (Dacie\'s fluid)', function: 'Acts as a strict preservative stabilizing erythrocyte membranes.' }
    ],
    equipment: ['Neubauer Counting Chamber', 'RBC Thoma Pipette (Red bead)', 'Dacie\'s/Hayem\'s Fluid', 'Microscope'],
    procedure: [
      'Draw well-mixed EDTA blood perfectly up to the 0.5 mark in the RBC pipette.',
      'Draw RBC diluting fluid up to the exactly 101 mark (1:200 dilution).',
      'Mix the contents firmly for 3-5 minutes.',
      'Discard the first 2-3 drops containing pure diluting fluid.',
      'Charge the Neubauer chamber under a coverslip.',
      'Rest the chamber in a moist petri dish for 3 minutes.',
      'Count the RBCs located within 5 specific small squares inside the highly subdivided central square under the 40x objective.'
    ],
    observation: 'Hundreds of uniform, round circular pale/refractive disks sitting within the grid.',
    result: 'The Total RBC Count is ______ million/cu.mm.',
    interpretation: 'Count = Number of cells (N) x 10,000 cells per cubic mm. Multiply by 10,000 to get total count.',
    referenceRange: 'Male: 4.5-5.5 | Female: 4.0-5.0 million/cu.mm',
    clinicalSignificance: 'Mandatory for defining the exact degree of anemias or polycythemia.',
    sourcesOfError: ['Pipetting inaccuracies (1:200 amplifies errors massively)', 'Counting debris from un-filtered fluid', 'Uneven settling'],
    precautions: ['Filter diluting fluids regularly.', 'Ensure fluid isn\'t contaminated or evaporated.'],
    normalVsAbnormal: 'Low counts confirm anemia; high counts confirm polycythemia.',
    applications: 'Anemia typing, blood loss investigation.',
    limitations: 'High coefficient of manual variation (up to 20%).',
    examPoints: 'Remember the dilution in the Red bead pipette is 1:200. We count 5 specific small squares in the central block.',
    viva: [
      { q: 'What is the dilution factor for a routine RBC count?', a: '1 in 200.' },
      { q: 'What is the exact composition of Dacie\'s fluid?', a: 'Trisodium citrate (anticoagulant) and Formalin (preservative).' },
      { q: 'Why is Hayem\'s fluid less preferred now?', a: 'Mercuric chloride in it can cause severe rouleaux formation in hyperglobulinemia.' },
      { q: 'How many small squares are counted exactly for RBC?', a: '5 small squares within the central large square.' },
      { q: 'What is the simplified formula to calculate RBC count?', a: 'Count (N) x Dilution Factor (200) / Volume (0.02) = N x 10,000.' }
    ],
    mcq: [
      { q: 'What is the dilution factor for RBC count?', options: ['1:100', '1:200', '1:20', '1:50'], answer: 1 },
      { q: 'To what mark is RBC pipetted with blood?', options: ['0.5', '1', '10', '101'], answer: 0 },
      { q: 'To what mark is diluting fluid pipetted?', options: ['11', '20', '50', '101'], answer: 3 },
      { q: 'Which of the following is an RBC diluting fluid?', options: ['Turk\'s', 'Hayem\'s', 'Rees-Ecker', 'Drabkin\'s'], answer: 1 },
      { q: 'How many small squares are counted for RBC?', options: ['4', '5', '9', '25'], answer: 1 },
      { q: 'What objective lens is used to count RBCs?', options: ['10x', '40x', '100x', '4x'], answer: 1 },
      { q: 'Which chemical prevents rouleaux formation in Dacie\'s fluid?', options: ['Mercuric chloride', 'Formalin', 'Trisodium citrate', 'Sodium sulfate'], answer: 2 },
      { q: 'Multiplier for RBC count if 5 squares are counted?', options: ['1000', '10000', '50000', '50'], answer: 1 },
      { q: 'What is a decrease in RBC count called?', options: ['Erythrocytosis', 'Anemia', 'Polycythemia', 'Leukopenia'], answer: 1 },
      { q: 'In which condition is an increased RBC count prominently seen?', options: ['Anemia', 'Polycythemia Vera', 'Leukemia', 'Thrombocytopenia'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      microscopic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cobas_6000.ogv/500px--Cobas_6000.ogv.jpg'
    }
  },
  {
    id: 'hem-platelet',
    title: 'Platelet Count (Direct Manual Method)',
    isImportant: true,
    definition: 'Estimation of the total circulating thrombocytes in a unit volume of whole blood.',
    principle: 'Blood is diluted with a specific hypotonic fluid (1% Ammonium Oxalate) which rapidly lyses all RBCs while preserving platelets. Platelets are refractive and counted on the grid of a Neubauer chamber.',
    mechanism: 'Ammonium oxalate acts through osmotic lysis targeting erythrocytes.',
    types: ['Direct counting'],
    specimen: 'EDTA blood (must be fresh).',
    reagents: [
      { component: '1% Ammonium Oxalate', function: 'Selectively lyses RBCs giving a clear background, whilst perfectly preserving platelets.' }
    ],
    equipment: ['RBC Pipette', 'Neubauer Counting Chamber', 'Moist Petri dish', 'Microscope (40x)'],
    procedure: [
      'Draw EDTA blood exactly to the 0.5 mark in an RBC pipette.',
      'Draw the 1% Ammonium Oxalate diluting fluid up to the 101 mark (1:200 dilution).',
      'Mix the pipette contents mechanically for 3-5 minutes.',
      'Discard the first 2-3 drops completely.',
      'Charge the Neubauer counting chamber.',
      'Place the chamber inside a moist petri dish for a full 15-20 minutes to let the tiny platelets settle via gravity.',
      'Lower the condenser on the microscope to increase refractile contrast.',
      'Count all platelets inside all 25 small squares of the large central square.'
    ],
    observation: 'Highly refractile, silvery, tiny star-like dotted bodies against a grey background.',
    result: 'The Platelet Count is ______ /cu.mm.',
    interpretation: 'Count (N) = N x Dilution (200) / Volume (0.1) = N x 2000 cells per cu.mm.',
    referenceRange: '150,000 - 400,000 cells/cu.mm',
    clinicalSignificance: 'Mandatory investigation for bleeding tendencies, petechiae, purpura. Critical monitoring parameter in Dengue.',
    sourcesOfError: ['Counting dirt particles or yeast as platelets', 'Clumping due to poor EDTA mixing'],
    precautions: ['Filter diluting fluid to eliminate yeast which mimics platelets.', 'Wait full 15 mins for settling.'],
    normalVsAbnormal: 'Thrombocytopenia (low) risks massive bleeding. Thrombocytosis (high) risks clotting disorders.',
    applications: 'Dengue triage, coagulation profiling.',
    limitations: 'Platelets clump easily making manual counts tedious and error-prone.',
    examPoints: 'You must count ALL 25 squares of the central block. The multiplier is 2,000.',
    viva: [
      { q: 'What is the function of 1% Ammonium Oxalate?', a: 'It lyses the RBCs fully while preserving platelets.' },
      { q: 'Why do we keep the chamber inside a moist dish for 15-20 mins?', a: 'Platelets are exceptionally tiny and take a long time to settle completely.' },
      { q: 'Why must we rigidly lower the microscope condenser?', a: 'Dimming the light starkly increases their visual contrast.' },
      { q: 'What is Thrombocytopenia?', a: 'A dangerous decrease in platelet count (seen in Dengue, ITP).' },
      { q: 'How many small squares are ultimately counted for Platelets?', a: 'All 25 small squares located inside the central large square.' }
    ],
    mcq: [
      { q: 'Which diluting fluid is widely used for direct Platelet count?', options: ['Turk\'s fluid', 'Hayem\'s fluid', '1% Ammonium Oxalate', 'Drabkin\'s'], answer: 2 },
      { q: 'Why is ammonium oxalate explicitly preferred?', options: ['Stains platelets', 'Destroys RBCs leaving platelets intact', 'Lyses WBCs', 'Increases size of cells'], answer: 1 },
      { q: 'What is the dilution factor used for Platelet count with an RBC pipette?', options: ['1:10', '1:20', '1:100', '1:200'], answer: 3 },
      { q: 'How many squares are evaluated in the Neubauer chamber for Platelets?', options: ['4 corners', '5 of central', 'All 25 of central', '9 total squares'], answer: 2 },
      { q: 'Normal platelet count in healthy adults is?', options: ['50,000-100,000 /cumm', '150,000-400,000 /cumm', '4,000-11,000 /cumm', '500,000-1,000,000 /cumm'], answer: 1 },
      { q: 'How long should the chamber be allowed to settle before counting?', options: ['2 mins', '5 mins', '15-20 mins', '1 hour'], answer: 2 },
      { q: 'Which disease is classically associated with thrombocytopenia?', options: ['Tuberculosis', 'Dengue fever', 'Cholera', 'Typhoid'], answer: 1 },
      { q: 'What entities distinctly mimic platelets in unfiltered diluting fluid?', options: ['Dust and yeast', 'WBCs', 'RBC ghosts', 'Crystals'], answer: 0 },
      { q: 'What is the mathematical multiplier for platelet count if 25 squares are counted?', options: ['10,000', '2,000', '1,000', '500'], answer: 1 },
      { q: 'A condition with abnormally high platelets is called?', options: ['Thrombocytopenia', 'Anemia', 'Thrombocytosis', 'Leukocytosis'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      microscopic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'hem-retic',
    title: 'Reticulocyte Count',
    isImportant: false,
    definition: 'A test assessing the bone marrow\'s capacity and speed of producing new red blood cells.',
    principle: 'Reticulocytes are immature circulating erythrocytes containing fragments of ribosomal RNA. A supravital stain (like New Methylene Blue) is used on living, unfixed cells to physically precipitate the residual RNA into a highly visible blue meshwork (reticulum).',
    mechanism: 'The dye actively penetrates the living cell membrane, reacting directly with basophilic Ribonucleoprotein to form granular blue precipitations.',
    types: ['Supravital Manual Method'],
    specimen: 'EDTA blood.',
    reagents: [
      { component: 'New Methylene Blue (Supravital stain)', function: 'Penetrates living cells and precipitates RNA into a recognizable blue meshwork.' }
    ],
    equipment: ['Small test tubes', 'Incubator at 37°C', 'Glass slides', 'Microscope (100x Oil immersion)'],
    procedure: [
      'Take equal volumes (2 drops each) of whole blood and supravital stain and mix in a test tube.',
      'Incubate the tube exactly at 37°C for 10-15 minutes.',
      'Place a small drop of this mixture onto a glass slide and prepare a thin smear.',
      'Air dry the smear thoroughly. DO NOT FIX the smear with methanol.',
      'Examine the slide under the 100x oil immersion objective lens.',
      'Count 1,000 red blood cells, tallying those that exhibit at least two distinct blue granules or a network.'
    ],
    observation: 'Mature RBCs appear pale greenish-blue. Reticulocytes contain distinct deep-blue granular threads.',
    result: 'The Reticulocyte count is calculated as ______ %.',
    interpretation: 'An independent marker evaluating erythropoietic activity in the bone marrow.',
    referenceRange: 'Adults: 0.5 - 2.0% | Infants: 2.0 - 6.0%',
    clinicalSignificance: 'Reticulocytosis indicates active destruction/compensatory production (Hemolytic anemia). Depressed count indicates bone marrow failure (Aplastic anemia).',
    sourcesOfError: ['Fixing the slide with Leishman stains which destroys RNA', 'Confusing Howell-Jolly bodies with reticulum'],
    precautions: ['Always incubate at 37°C.', 'Stain must be regularly filtered.'],
    normalVsAbnormal: 'Patients responding to iron/B12 therapy show a sudden spike called a "Reticulocyte crisis".',
    applications: 'Monitoring therapy response in anemias.',
    limitations: 'High observer subjectivity. Manual counting is tedious.',
    examPoints: 'Supravital stain necessitates living cells—NO fixation! Ribosomal RNA takes up the stain.',
    viva: [
      { q: 'What fundamentally defines a Supravital stain?', a: 'A stain formulated to color structures within living cells before cellular death occurs.' },
      { q: 'Give examples of standard supravital stains.', a: 'New Methylene Blue and Brilliant Cresyl Blue.' },
      { q: 'What biological material forms the blue network?', a: 'Precipitated remnants of Ribosomal RNA (rRNA).' },
      { q: 'What does a high reticulocyte count pathologically indicate?', a: 'Increased bone marrow activity, classically in hemolytic anemias or blood loss.' },
      { q: 'Why strictly avoid using Leishman stains for true reticulocytes?', a: 'Methanol kills the cell immediately, altering RNA precipitability causing the reticulum to vanish.' }
    ],
    mcq: [
      { q: 'Which stain is exclusively used for reticulocyte counting?', options: ['Leishman', 'New Methylene Blue', 'Gram Stain', 'Eosin'], answer: 1 },
      { q: 'The specific stain used for reticulocyte is an example of:', options: ['Acid stain', 'Counterstain', 'Supravital stain', 'Fluorescent stain'], answer: 2 },
      { q: 'What internal organelle material forms the blue reticulum?', options: ['DNA fragments', 'Mitochondria', 'Ribosomal RNA', 'Golgi apparatus'], answer: 2 },
      { q: 'Normal reticulocyte count in healthy adults?', options: ['0.5 - 2.0 %', '5 - 10 %', '10 - 20 %', '0 %'], answer: 0 },
      { q: 'Which clinical condition frequently causes Reticulocytosis?', options: ['Aplastic anemia', 'Hemolytic anemia', 'Bone marrow failure', 'Renal failure'], answer: 1 },
      { q: 'How many total RBCs are continuously counted?', options: ['100', '500', '1000', '10000'], answer: 2 },
      { q: 'Should the smear for reticulocyte count be fixed in methanol?', options: ['Yes', 'No, never', 'Only for 1 min', 'Only for 10 mins'], answer: 1 },
      { q: 'Mandatory incubation time for the blood-stain solution?', options: ['1 min', '10-15 mins', '1 hour', '24 hours'], answer: 1 },
      { q: 'At what temperature must the mixture be incubated?', options: ['4°C', 'Room Temp', '37°C', '56°C'], answer: 2 },
      { q: 'Reticulocytes mature into adult RBCs in approximately:', options: ['1-2 days', '10-15 days', '120 days', '30 days'], answer: 0 }
    ],
    images: {
      slide: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      microscopic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Reticulocytes.jpg/640px-Reticulocytes.jpg'
    }
  }
];
