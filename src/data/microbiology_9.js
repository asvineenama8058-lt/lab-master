export const microbiologyData9 = [
  {
    id: 'mic-gaspak',
    title: 'Anaerobic Culture (GasPak System)',
    isImportant: true,
    definition: 'Method cultivating bacteria requiring zero oxygen.',
    principle: 'Sodium borohydride reacts with water creating H2. Palladium catalyst combines H2 with oxygen making water, depleting oxygen.',
    mechanism: 'Catalytic reduction of oxygen to water.',
    types: ['GasPak Jar'],
    specimen: 'Pus, deep wound swab.',
    reagents: [
      { component: 'GasPak Envelope', function: 'Generates Hydrogen and CO2.' },
      { component: 'Methylene Blue Strip', function: 'Turns white when anaerobic.' }
    ],
    equipment: ['Polycarbonate Jar', 'Palladium catalyst'],
    procedure: [
      'Inoculate anaerobic media.',
      'Place plates in the jar.',
      'Cut GasPak envelope and add 10ml water.',
      'Seal jar tightly and incubate.',
      'Incubate at 37°C for 48 hours.'
    ],
    observation: 'Methylene blue strip turns from blue to white.',
    result: 'Anaerobic conditions generated successfully.',
    interpretation: 'Allows obligate anaerobes to grow.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Mandatory for Clostridium.',
    sourcesOfError: ['Worn out catalyst fails.'],
    precautions: ['Regenerate catalyst regularly.'],
    normalVsAbnormal: 'Indicator natively remaining blue implies leak.',
    applications: 'Deep wound analysis.',
    limitations: 'Takes 48 hours minimally.',
    examPoints: 'Catalyst is Palladium.',
    viva: [
      { q: 'Indicator used?', a: 'Methylene Blue.' }
    ],
    mcq: [
      { q: 'Catalyst heavily used in GasPak is:', options: ['Platinum', 'Palladium', 'Copper', 'Iron'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Antibiotic_resistance.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Antibiotic_resistance.jpg'
    }
  },
  {
    id: 'mic-lcb',
    title: 'Fungal Tease Mount (LPCB)',
    isImportant: true,
    definition: 'Rapid stain identifying fungal molds.',
    principle: 'Lactophenol cotton blue contains phenol to kill the fungus, lactic acid to preserve, and Cotton blue stains chitin cell walls deeply blue.',
    mechanism: 'Direct selective chitin staining.',
    types: ['Tease Mount'],
    specimen: 'Mold grown on Sabouraud Dextrose Agar.',
    reagents: [
      { component: 'LPCB', function: 'Stains chitin blue.' }
    ],
    equipment: ['Teasing needles', 'Microscope'],
    procedure: [
      'Place drop of LPCB on a slide.',
      'Retrieve a tiny piece of mold.',
      'Tease heavily to separate hyphae.',
      'Cover with coverslip.',
      'Observe basically cleanly under 40x.'
    ],
    observation: 'Blue stained fungal hyphae and conidia.',
    result: 'Fungi structurally identified.',
    interpretation: 'Recognizes Aspergillus and Penicillium.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Diagnostic for dermatophytes.',
    sourcesOfError: ['Teasing violently shatters conidiophores.'],
    precautions: ['Do not breathe spores.'],
    normalVsAbnormal: 'Fungi purely distinctly effectively naturally.',
    applications: 'Mycology entirely precisely cleanly.',
    limitations: 'Hazardous virtually fully.',
    examPoints: 'Lactic purely exclusively broadly.',
    viva: [
      { q: 'Function of phenol?', a: 'Kills effectively.' }
    ],
    mcq: [
      { q: 'Cotton blue stains:', options: ['Proteins', 'Chitin', 'Lipids', 'DNA'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Cryptococcus_neoformans.jpg'
    }
  }
];
