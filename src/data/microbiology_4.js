export const microbiologyData4 = [
  {
    id: 'mic-urease',
    title: 'Urease Test',
    isImportant: true,
    definition: 'Diagnostic test evaluating bacterial urease production.',
    principle: 'Urease enzyme hydrolyzes urea into ammonia and CO2. Ammonia raises the pH. Phenol red turns bright pink in alkaline environments.',
    mechanism: 'Enzymatic urea hydrolysis driving alkaline color change.',
    types: ['Christensen Agar', 'Stuart Broth'],
    specimen: 'Bacterial colony.',
    reagents: [
      { component: 'Urea Agar', function: 'Contains urea substrate and phenol red.' }
    ],
    equipment: ['Inoculating loop', 'Incubator'],
    procedure: [
      'Heavily inoculate the agar slant.',
      'Incubate at 37°C for 24 hours.',
      'Observe for pink color change.'
    ],
    observation: 'Agar changes from pale yellow to bright magenta.',
    result: 'Positive: Intense pink. Negative: Yellow.',
    interpretation: 'Rapidly identifies Proteus and H. pylori.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Mandatory for Proteus identification.',
    sourcesOfError: ['Airing out caps yields false negatives.'],
    precautions: ['Do not melt urea agar; it denatures.'],
    normalVsAbnormal: 'Rapid pink dictates Proteus natively.',
    applications: 'Enteric diagnostics.',
    limitations: 'Klebsiella produces weak delayed positives.',
    examPoints: 'Substrate: Urea. Indicator: Phenol red.',
    viva: [
      { q: 'Indicator in Christensen agar?', a: 'Phenol red.' }
    ],
    mcq: [
      { q: 'Urease enzyme degrades urea into:', options: ['Nitrite', 'Ammonia and CO2', 'Uric acid', 'Nitrate'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Urease_Test.jpg'
    }
  },
  {
    id: 'mic-citrate',
    title: 'Citrate Utilization Test',
    isImportant: true,
    definition: 'Identifies bacteria utilizing citrate as sole carbon source.',
    principle: 'Bacteria possessing citratase extract carbon from sodium citrate. This extraction creates an alkaline carbonate byproduct. Bromothymol blue turns deep blue at alkaline pH.',
    mechanism: 'Enzymatic utilization of citrate generating basic byproducts.',
    types: ['Simmons Citrate Slant'],
    specimen: 'Bacterial colony.',
    reagents: [
      { component: 'Simmons Citrate Agar', function: 'Lacks glucose; exclusively uses citrate.' },
      { component: 'Bromothymol Blue', function: 'Alkaline indicator turning blue.' }
    ],
    equipment: ['Inoculating wire', 'Incubator'],
    procedure: [
      'Inoculate the slant broadly.',
      'Incubate at 37°C for up to 4 days.',
      'Observe carefully for color change.'
    ],
    observation: 'Distinct color change natively.',
    result: 'Positive: Blue. Negative: Green.',
    interpretation: 'Identifies Klebsiella and Enterobacter species.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Separates E. coli (Negative) from Klebsiella (Positive).',
    sourcesOfError: ['Heavy inoculum introduces carbon yielding a false positive.'],
    precautions: ['Use a light inoculum.'],
    normalVsAbnormal: 'Klebsiella acts strongly positive.',
    applications: 'IMViC series testing.',
    limitations: 'Must strictly incubate fully for up to 4 days.',
    examPoints: 'Indicator is specifically Bromothymol Blue.',
    viva: [
      { q: 'Indicator used?', a: 'Bromothymol blue.' }
    ],
    mcq: [
      { q: 'Positive citrate reaction color?', options: ['Red', 'Blue', 'Green', 'Black'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Simmons_Citrate_Agar.jpg'
    }
  }
];
