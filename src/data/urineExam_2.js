export const urineExamData2 = [
  {
    id: 'urn-fouchet',
    title: 'Fouchet\'s Test for Bile Pigments',
    isImportant: true,
    definition: 'Chemical test confirming the presence of bilirubin in urine.',
    principle: 'Barium chloride chemically reacts with urinary sulfates to form a heavy Barium Sulfate precipitate. Any bilirubin present clings to it. Ferric chloride (in Fouchet reagent) oxidizes the trapped bilirubin into vivid green biliverdin.',
    mechanism: 'Oxidation of bilirubin to biliverdin by Ferric Chloride.',
    types: ['Qualitative Chemical Test'],
    specimen: 'Fresh Urine exclusively.',
    reagents: [
      { component: '10% Barium Chloride', function: 'Reacts forming a precipitation trap.' },
      { component: 'Fouchet Reagent', function: 'Contains Trichloroacetic acid and Ferric chloride oxidizer.' }
    ],
    equipment: ['Filter paper', 'Glass funnel'],
    procedure: [
      'Take 5 ml of urine in a test tube.',
      'Add 2.5 ml of 10% Barium Chloride solution and mix well.',
      'Filter the complex through a filter paper cone.',
      'Unfold the filter paper onto a dry paper towel.',
      'Add 1-2 drops of Fouchet reagent directly onto precipitate.',
      'Observe for color change instantly.'
    ],
    observation: 'Immediate development of vivid blue or green color.',
    result: 'BLUE-GREEN color = Positive for Bilirubin.',
    interpretation: 'Conjugated bilirubin spilling confirms post-hepatic or hepatic jaundice.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Urine bilirubin dictates Obstructive Jaundice.',
    sourcesOfError: ['Testing old sun-exposed urine gives false negatives (bilirubin oxidizes naturally).'],
    precautions: ['Filter paper precipitate must be thick, or color is too faint.'],
    normalVsAbnormal: 'Normal urine contains zero intact bilirubin.',
    applications: 'Hepatology assessment.',
    limitations: 'Does not screen for Hemolytic jaundice (no conjugated bilirubin in urine).',
    examPoints: 'Barium chloride solely concentrates the pigment physically.',
    viva: [
      { q: 'Purpose of Barium Chloride?', a: 'Reacts with sulfates forming a precipitate that traps bilirubin.' },
      { q: 'What vividly colored compound is formed?', a: 'Green Biliverdin.' }
    ],
    mcq: [
      { q: 'Fouchet reagent predominantly contains:', options: ['Sulfuric Acid', 'Ferric chloride', 'Sodium Nitroprusside', 'Copper sulfate'], answer: 1 },
      { q: 'Bilirubin in the urine dictates what sort of jaundice?', options: ['Hemolytic', 'Obstructive', 'Physiological', 'Neonatal'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/HEPA_Filter_diagram_en.svg/960px-HEPA_Filter_diagram_en.svg.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venous_and_arterial_blood.jpg/960px-Venous_and_arterial_blood.jpg'
    }
  },
  {
    id: 'urn-hay',
    title: 'Hay\'s Test for Bile Salts',
    isImportant: false,
    definition: 'Test utilizing surface tension to detect urinary bile salts.',
    principle: 'Bile salts drastically lower fluid surface tension. When finely powdered sublimed sulfur is sprinkled onto urine containing bile salts, the reduced surface tension causes the powder to sink.',
    mechanism: 'Surfactant properties of Sodium taurocholate disrupt water hydrogen bonds.',
    types: ['Physical Surface Tension Test'],
    specimen: 'Fresh room-temperature Urine.',
    reagents: [
      { component: 'Sublimed Sulfur Powder', function: 'Light hydrophobic indicator powder.' }
    ],
    equipment: ['Glass beaker'],
    procedure: [
      'Take 10 ml of fresh clear urine in a clean glass beaker.',
      'Gently sprinkle a pinch of dry sublimed sulfur powder strictly on surface.',
      'Observe immediately without violently shaking.'
    ],
    observation: 'Powder rapidly dropping through the liquid column uniformly.',
    result: 'Positive: Sulfur particles sink. Negative: Sulfur particles float.',
    interpretation: 'Sinking confirms bile salts, linking to Obstructive Jaundice.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Confirms biliary obstruction.',
    sourcesOfError: ['Violently tapping the tube breaks surface tension artificially (false positive).'],
    precautions: ['Urine MUST be room temperature; hot urine has naturally low surface tension.'],
    normalVsAbnormal: 'Normal surface tension natively holds the powder floating infinitely.',
    applications: 'Hepatobiliary analysis.',
    limitations: 'Highly sensitive to mechanical vibrations.',
    examPoints: 'Bile salts act exactly like chemical detergents.',
    viva: [
      { q: 'What physical property does Hay\'s test rely on?', a: 'Surface tension.' },
      { q: 'Name the major bile salts.', a: 'Sodium Taurocholate and Sodium Glycocholate.' }
    ],
    mcq: [
      { q: 'The physical property assessed in Hay test is:', options: ['Specific Gravity', 'Surface Tension', 'Osmolality', 'Refractive Index'], answer: 1 },
      { q: 'What happens if you violently tap the tube?', options: ['True positive', 'False negative', 'False positive', 'Nothing'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sulfuric_acid.svg/960px-Sulfuric_acid.svg.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sulfuric_acid.svg/960px-Sulfuric_acid.svg.png'
    }
  }
];
