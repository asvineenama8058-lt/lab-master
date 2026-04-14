export const microbiologyData6 = [
  {
    id: 'mic-kirby',
    title: 'Kirby-Bauer Disk Diffusion Test',
    isImportant: true,
    definition: 'Test measuring bacterial susceptibility to antibiotics.',
    principle: 'Antibiotic disks are placed on inoculated agar. Antibiotic diffuses. Clear zones of inhibition form if bacteria is susceptible.',
    mechanism: 'Radial diffusion of antibiotic inhibiting active reproduction.',
    types: ['Disk Diffusion'],
    specimen: 'Bacterial suspension 0.5 McFarland.',
    reagents: [
      { component: 'Antibiotic Disks', function: 'Antibiotic formulations.' }
    ],
    equipment: ['Mueller-Hinton Agar', 'Cotton Swab', 'Ruler'],
    procedure: [
      'Prepare bacterial suspension matching 0.5 McFarland.',
      'Streak surface of Mueller-Hinton agar in 3 directions.',
      'Apply antibiotic disks firmware to surface.',
      'Incubate at 37°C for 16-18 hours.',
      'Measure diameter of clear zones in mm.'
    ],
    observation: 'Clear circular zones surrounding paper disks.',
    result: 'Zone diameters measured in mm.',
    interpretation: 'Compare diameter to CLSI guidelines.',
    referenceRange: 'Drug specific.',
    clinicalSignificance: 'Directs antibiotic therapy.',
    sourcesOfError: ['Heavy inoculum shrinks zones.'],
    precautions: ['Agar must be exactly 4mm deep.'],
    normalVsAbnormal: 'Large zone implies susceptibility.',
    applications: 'Clinical Antibiotic Stewardship.',
    limitations: 'Qualitative, not exact MIC.',
    examPoints: 'Agar is standardized Mueller-Hinton 4mm deep.',
    viva: [
      { q: 'What is 0.5 McFarland?', a: 'Turbidity standard.' }
    ],
    mcq: [
      { q: 'Agar used for Kirby-Bauer:', options: ['Blood Agar', 'MacConkey', 'Mueller-Hinton', 'Nutrient Agar'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Antibiotic_resistance.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Antibiotic_resistance.jpg'
    }
  },
  {
    id: 'mic-mic',
    title: 'Minimum Inhibitory Concentration (MIC) Test',
    isImportant: true,
    definition: 'Test identifying lowest concentration of antibiotic inhibiting growth.',
    principle: 'Serial dilutions of antibiotic prepared in broth. Standard bacteria added. Lowest concentration with zero turbidity is the MIC.',
    mechanism: 'Targeted dose-dependent inhibition.',
    types: ['Broth Micro-dilution', 'E-Test'],
    specimen: 'Standardized bacterial suspension.',
    reagents: [
      { component: 'Muller-Hinton Broth', function: 'Nutrient matrix.' },
      { component: 'Antibiotic Powder', function: 'For dilutions.' }
    ],
    equipment: ['Sterile test tubes', 'Pipettes'],
    procedure: [
      'Prepare serial dilutions of antibiotic.',
      'Add equal bacterial inoculum to every tube.',
      'Incubate at 37°C for 18 hours.',
      'Identify lowest clear concentration.'
    ],
    observation: 'High concentration tubes are clear. Lower are cloudy.',
    result: 'Report lowest clear concentration in mcg/ml.',
    interpretation: 'Defines exact susceptibility threshold.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Mandatory for severe systemic infections.',
    sourcesOfError: ['Contamination.'],
    precautions: ['Use exact dilutions.'],
    normalVsAbnormal: 'Lower MIC implies higher susceptibility.',
    applications: 'Pharmacokinetics.',
    limitations: 'Does not define Minimum Bactericidal Concentration (MBC).',
    examPoints: 'MIC is the lowest visibly clear tube.',
    viva: [
      { q: 'What is MIC?', a: 'Minimum Inhibitory Concentration.' }
    ],
    mcq: [
      { q: 'MIC measures:', options: ['Maximum size', 'Minimum Inhibitory Concentration', 'Medium density', 'Molecular weight'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Antibiotic_resistance.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Antibiotic_resistance.jpg'
    }
  }
];
