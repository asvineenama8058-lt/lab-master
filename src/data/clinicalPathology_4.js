export const clinicalPathologyData4 = [
  {
    id: 'cpa-stool-physical',
    title: 'Stool Physical Examination',
    isImportant: false,
    definition: 'Assessment of the macroscopic properties of human feces.',
    principle: 'Macroscopic changes in stool reflect the digestive efficiency and the presence of blood or parasites.',
    mechanism: 'Visual and olfactory assessment.',
    types: ['Routine Macroscopy'],
    specimen: 'Fresh stool sample.',
    reagents: [{ component: 'None', function: 'Physical evaluation.' }],
    equipment: ['Clean container', 'Applicator sticks'],
    procedure: [
      'Observe the color (Light brown is normal).',
      'Note the consistency (Formed, Semi-formed, Soft, or Watery).',
      'Check for the presence of blood, mucus, or pus.',
      'Look for visible parasites (e.g., Ascaris, Proglottids of Tapeworm).'
    ],
    observation: 'Normal stool is brown, formed, and has no visible blood.',
    result: 'Color, consistency, mucus, blood, parasites.',
    interpretation: 'Clay colored (acholic) stool = Obstructive Jaundice. Black/Tarry (Melena) stool = Upper GI bleeding. Rice-water stool = Cholera.',
    referenceRange: 'Formed, Brown.',
    clinicalSignificance: 'Provides immediate clues to malabsorption or gastrointestinal pathology.',
    sourcesOfError: ['Sample contamination with urine.', 'Recent ingestion of certain foods (e.g. beets) or iron supplements.'],
    precautions: ['Examine the sample as fresh as possible.'],
    normalVsAbnormal: 'Normal stool contains no visible mucus or life-forms.',
    applications: 'Gastroenterology screening.',
    limitations: 'Cannot detect microscopic pathogens.',
    examPoints: 'Black stool: Melena. Clay stool: Obstructive jaundice. Green stool: Fast transit/certain vegetables.',
    viva: [
      { q: 'What does black, tarry stool (Melena) indicate?', a: 'Upper gastrointestinal bleeding (e.g., stomach ulcer) where blood has been digested.' },
      { q: 'What is the cause of clay-colored stool?', a: 'Absence of stercobilin (bile pigment) due to obstruction of the biliary tract.' }
    ],
    mcq: [
      { q: 'Rice-water stool is characteristic of?', options: ['Typhoid', 'Cholera', 'Dysentery', 'Jaundice'], answer: 1 },
      { q: 'Clay-colored stool is seen in?', options: ['Diarrhea', 'Obstructive Jaundice', 'Hemorrhoids', 'Malaria'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bristol_Stool_Chart.png/640px-Bristol_Stool_Chart.png'
    }
  },
  {
    id: 'cpa-stool-saline',
    title: 'Stool Microscopic Exam (Saline Mount)',
    isImportant: true,
    definition: 'Laboratory method used to detect and identify protozoa, helminth eggs, and larvae in feces using normal saline.',
    principle: 'Normal saline provides an isotonic medium that preserves the motility of protozoal trophozoites and the natural appearance of helminth eggs.',
    mechanism: 'Isotonic suspension and direct wet-mount microscopy.',
    types: ['Direct Wet Mount'],
    specimen: 'Fresh stool.',
    reagents: [{ component: 'Normal Saline (0.85% NaCl)', function: 'Isotonic diluent.' }],
    equipment: ['Glass slide', 'Coverslip', 'Applicator sticks', 'Microscope'],
    procedure: [
      'Place a drop of normal saline on a clean glass slide.',
      'Using an applicator stick, pick a small amount of stool (especially from areas with mucus or blood).',
      'Mix thoroughly with the saline to form a uniform thin suspension.',
      'Cover with a coverslip carefully (no bubbles).',
      'Examine under 10x and 40x objectives.'
    ],
    observation: 'Motile trophozoites (e.g., E. histolytica, Giardia) and characteristically shaped helminth eggs.',
    result: 'Detection of parasites, RBCs (dysentery), and Pus cells.',
    interpretation: 'Identification of the specific parasitic pathogen to guide antimicrobial therapy.',
    referenceRange: 'No parasites, RBCs, or excess pus cells.',
    clinicalSignificance: 'Mandatory test for identifying causes of diarrhea and dysentery.',
    sourcesOfError: ['Smear too thick (cannot see through).', 'Old sample (trophozoites die and lyse).'],
    precautions: ['Sample must be less than 30 minutes old for trophozoite motility.'],
    normalVsAbnormal: 'Normal: Only fiber and debris. Abnormal: Moving parasites or many RBCs.',
    applications: 'Routine parasite screening.',
    limitations: 'Parasite shedding is intermittent; may require 3 consecutive samples.',
    examPoints: 'Saline is for MOTILITY and EGGS. Do not use tap water.',
    viva: [
      { q: 'Why is normal saline used for stool wet mounts?', a: 'To keep the trophozoites alive and maintain the natural appearance of parasite eggs.' },
      { q: 'How do you differentiate E. histolytica from E. coli trophozoites?', a: 'E. histolytica shows active directional movement and may contain ingested RBCs.' }
    ],
    mcq: [
      { q: 'Saline mount is primarily used to observe?', options: ['Staining', 'Motility of trophozoites', 'Fixed larvae', 'Nuclei'], answer: 1 },
      { q: 'Dumbbell-shaped eggs in stool belong to?', options: ['Hookworm', 'Ascaris', 'Enterobius', 'Trichuris'], answer: 3 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-stool-iodine',
    title: 'Stool Microscopic Exam (Iodine Mount)',
    isImportant: true,
    definition: 'Enhancement method for stool wet mounts using Lugol\'s iodine to visualize nuclear and cytoplasmic structures of parasite cysts.',
    principle: 'Iodine stains the nuclei and glycogen vacuoles of protozoal cysts, making them clearly visible against the background. It kills and fixes the organisms, so no motility can be seen.',
    mechanism: 'Staining and fixation by iodine.',
    types: ['Lugol\'s Iodine Wet Mount'],
    specimen: 'Stool.',
    reagents: [{ component: 'Lugol\'s Iodine', function: 'Vital stain and fixative.' }],
    equipment: ['Glass slide', 'Coverslip', 'Microscope'],
    procedure: [
      'In parallel with the saline mount, place a drop of Lugol\'s iodine on the slide.',
      'Mix a small amount of stool into the iodine.',
      'Cover with a coverslip.',
      'Examine under 40x objective.'
    ],
    observation: 'Cysts (e.g., E. histolytica, Giardia) with distinct brown-stained nuclei (up to 4 in E. histolytica).',
    result: 'Identification of protozoal cysts based on nuclear count and shape.',
    interpretation: 'Differential diagnosis between different amoebic species.',
    referenceRange: 'No parasites.',
    clinicalSignificance: 'Essential for diagnosing "Carrier" states where cysts are passed instead of trophozoites.',
    sourcesOfError: ['Over-staining (makesorganism too dark).', 'Old iodine solution (loses strength).'],
    precautions: ['Always correlate with the saline mount findings.'],
    normalVsAbnormal: 'Cysts are the infectious stage transmitted through contaminated water/food.',
    applications: 'Carrier screening.',
    limitations: 'Does not show motility.',
    examPoints: 'Iodine is for CYSTS and NUCLEI. Stains nuclei brown.',
    viva: [
      { q: 'What is the role of iodine in stool examination?', a: 'It stains the internal structures (nuclei and glycogen) of protozoal cysts, allowing for species identification.' },
      { q: 'How many nuclei are present in a mature E. histolytica cyst?', a: 'Four nuclei.' }
    ],
    mcq: [
      { q: 'Iodine mount is best suited for identifying?', options: ['Trophozoites', 'Motility', 'Cysts', 'Bacteria'], answer: 2 },
      { q: 'Mature cyst of E. coli (Entamoeba and not the bacteria) has how many nuclei?', options: ['2', '4', '8', '1'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-stool-occult',
    title: 'Stool Occult Blood (Benzidine Test)',
    isImportant: true,
    definition: 'Chemical screening for the presence of hidden (occult) blood in the stool that is not visible to the naked eye.',
    principle: 'Relies on the peroxidase-like activity of hemoglobin. Hemoglobin catalyzes the release of oxygen from hydrogen peroxide, which then oxidizes a chromogen (Benzidine) to form a blue/green color.',
    mechanism: 'Peroxidase-like catalytic oxidation.',
    types: ['Benzidine Test', 'Guaiac Test (Commercial)'],
    specimen: 'Stool (Patient must be on a meat-free diet for 3 days).',
    reagents: [
      { component: 'Benzidine powder in Glacial Acetic acid', function: 'Chromogenic indicator.' },
      { component: 'Hydrogen Peroxide (3%)', function: 'Oxygen source/Substrate.' }
    ],
    equipment: ['Glass slide', 'Applicator stick'],
    procedure: [
      'Take a small amount of stool and smear it on a clean glass slide.',
      'Add 2 drops of Benzidine reagent.',
      'Add 1 drop of Hydrogen Peroxide.',
      'Observe for immediate color change.'
    ],
    observation: 'Appearance of a blue or green color within 30 seconds.',
    result: 'Positive (Blue/Green) or Negative.',
    interpretation: 'A positive result suggests bleeding anywhere from the mouth to the colon.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Early screening for Colorectal Cancer, Gastric Ulcers, and Worm infestations (Hookworm).',
    sourcesOfError: ['False positives from ingestion of red meat, iron supplements, or peroxidase-rich vegetables (e.g. radish).', 'Blood from hemorrhoids or menstruation.'],
    precautions: ['Strict 3-day restriction of meat and green leafy vegetables before the test.'],
    normalVsAbnormal: 'A "Positive" result in an asymptomatic older adult warrants a colonoscopy.',
    applications: 'Colorectal cancer screening.',
    limitations: 'Lacks specificity for human blood (detects any hemoglobin).',
    examPoints: 'Reagent: Benzidine & H2O2. Principle: Peroxidase-like activity. False positive: Red meat.',
    viva: [
      { q: 'What does "Occult" blood mean?', a: 'Hidden blood that cannot be seen macroscopically but can be detected by chemical tests.' },
      { q: 'Why is a meat-free diet necessary before this test?', a: 'Because the test detects hemoglobin from any source, including animal meat, leading to a false positive result.' }
    ],
    mcq: [
      { q: 'The Benzidine test is based on which activity of hemoglobin?', options: ['Oxygen binding', 'Peroxidase-like activity', 'Iron content', 'Globin structure'], answer: 1 },
      { q: 'A positive occult blood test appears as what color?', options: ['Yellow', 'Blue/Green', 'White', 'Black'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-stool-sugars',
    title: 'Stool Reducing Sugars (Benedict\'s)',
    isImportant: false,
    definition: 'Test used to identify the presence of unabsorbed reducing carbohydrates in the stool.',
    principle: 'Normally, carbohydrates are absorbed in the small intestine. In cases of malabsorption (e.g., Lactase deficiency), unabsorbed sugars remain in the stool and are fermented by bacteria, lowering the stool pH and acting as reducing agents for Benedict\'s reagent.',
    mechanism: 'Carbohydrate reduction of Copper (II) to Copper (I).',
    types: ['Benedict\'s Qualitative Test'],
    specimen: 'Fresh liquid stool (Stool must be watery).',
    reagents: [{ component: 'Benedict\'s Quantitative/Qualitative Reagent', function: 'Cupric sulfate solution.' }],
    equipment: ['Test tubes', 'Bunsen burner'],
    procedure: [
      'Mix 1 part stool with 2 parts water. Centrifuge or filter to get a clear fluid.',
      'Take 5 ml of Benedict\'s reagent in a test tube.',
      'Add 8 drops of the stool extract.',
      'Boil for 2 minutes and observe the color.',
      'Also measure stool pH using pH paper.'
    ],
    observation: 'Color change from blue (negative) to green, yellow, orange, or brick-red.',
    result: 'Report in 1+ to 4+ scale.',
    interpretation: 'A positive result with an acidic stool pH (<5.5) indicates carbohydrate malabsorption (e.g., lactose intolerance in infants).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Diagnosis of disaccharidase deficiency and malabsorption syndromes in pediatric patients.',
    sourcesOfError: ['Using non-sugar reducing substances (e.g., antibiotics).'],
    precautions: ['Test the watery portion of the stool only.'],
    normalVsAbnormal: 'Abnormal: Acidic pH and positive for reducing sugars.',
    applications: 'Pediatric gastroenterology.',
    limitations: 'Does not detect non-reducing sugars like sucrose without acid hydrolysis.',
    examPoints: 'Used for Lactose Intolerance. Stool pH is usually acidic (<5.5). Color: Red/Green.',
    viva: [
      { q: 'In which condition are stool reducing sugars commonly positive?', a: 'Lactose intolerance (Lactase deficiency), especially in infants with diarrhea.' },
      { q: 'What happens to the stool pH in carbohydrate malabsorption?', a: 'It becomes acidic (pH < 5.5) due to the fermentation of sugars by colonic bacteria.' }
    ],
    mcq: [
      { q: 'Stool reducing sugar test is most useful in which age group?', options: ['Adults', 'Elderly', 'Infants', 'Teens'], answer: 2 },
      { q: 'Positive Benedict\'s test in stool and acidic pH suggests?', options: ['Fat malabsorption', 'Lactose intolerance', 'Bacterial infection', 'Constipation'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
