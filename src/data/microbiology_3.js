export const microbiologyData3 = [
  {
    id: 'mic-indole',
    title: 'Indole Test',
    isImportant: true,
    definition: 'Biochemical test identifying bacteria that produce tryptophanase.',
    principle: 'Bacteria possessing tryptophanase break down tryptophan into indole. Kovac reagent reacts with indole identifying forming a cherry-red rosindole dye.',
    mechanism: 'Hydrolytic cleavage of tryptophan side chain yields free indole.',
    types: ['Tube Method', 'Spot Indole'],
    specimen: 'Pure bacterial colony.',
    reagents: [
      { component: 'Tryptone Water', function: 'Broth rich in tryptophan.' },
      { component: 'Kovac Reagent', function: 'Contains p-dimethylaminobenzaldehyde to extract indole.' }
    ],
    equipment: ['Inoculating loop', 'Incubator'],
    procedure: [
      'Inoculate tryptone water with organism.',
      'Incubate at 37°C for 24 hours.',
      'Add 0.5 ml of Kovac liquid down inner wall of the tube.',
      'Observe surface layer for color change instantly.'
    ],
    observation: 'Colored alcohol ring floating on top of the broth.',
    result: 'Positive: Cherry Red ring. Negative: Yellow ring.',
    interpretation: 'Differentiates E. coli (Positive) from Klebsiella (Negative).',
    referenceRange: 'N/A',
    clinicalSignificance: 'Mandatory primary identifier distinguishing coliforms.',
    sourcesOfError: ['Testing cultures from MacConkey agar causes false color reactions.'],
    precautions: ['Do not shake the tube heavily after adding Kovac reagent.'],
    normalVsAbnormal: 'Red ring explicitly defines "I" in IMViC classification.',
    applications: 'Enterobacteriaceae Identification.',
    limitations: 'Proteus requires Ehrlich reagent due to low indole production.',
    examPoints: 'Enzyme: Tryptophanase. Reagent: Kovac.',
    viva: [
      { q: 'What is the substrate?', a: 'Tryptophan.' },
      { q: 'Indicator reagent?', a: 'Kovac reagent.' }
    ],
    mcq: [
      { q: 'Indole test detects which enzyme?', options: ['Catalase', 'Coagulase', 'Tryptophanase', 'Urease'], answer: 2 },
      { q: 'Positive Indole test produces what color ring?', options: ['Yellow', 'Blue', 'Cherry Red', 'Green'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Indole_pos_E_coli.jpg'
    }
  },
  {
    id: 'mic-mr',
    title: 'Methyl Red (MR) Test',
    isImportant: true,
    definition: 'Test identifying mixed-acid fermentation yielding acidic products.',
    principle: 'Bacteria producing massive mixed acids (lactic, acetic) lower pH below 4.4. Methyl Red indicator remains crimson red in extreme acid.',
    mechanism: 'Quantitative assessment of terminal buffered acid production.',
    types: ['Mixed Acid Fermentation Detection'],
    specimen: 'Pure bacterial colony.',
    reagents: [
      { component: 'MR-VP Broth', function: 'Contains pure glucose.' },
      { component: 'Methyl Red Indicator', function: 'Turns red below pH 4.4.' }
    ],
    equipment: ['Inoculating loop', 'Incubator'],
    procedure: [
      'Inoculate MR-VP broth heavily.',
      'Incubate at 37°C for 48 hours.',
      'Add 5 drops of Methyl Red indicator directly.'
    ],
    observation: 'Distinct color change natively.',
    result: 'Positive: Red. Negative: Yellow.',
    interpretation: 'Positive defines strong robust acid producers.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Differentiation primarily of enteric pathogen groups.',
    sourcesOfError: ['Reading early naturally causes false negatives.'],
    precautions: ['Must incubate broadly for 48 hours.'],
    normalVsAbnormal: 'E. coli is natively MR positive.',
    applications: 'Enteric classification clearly.',
    limitations: 'Not specific singularly.',
    examPoints: 'Detects mixed acid completely specifically.',
    viva: [
      { q: 'What does MR detect?', a: 'Mixed acid totally.' }
    ],
    mcq: [
      { q: 'MR detects:', options: ['Acid', 'Sugar', 'Gas', 'Protein'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  }
];
