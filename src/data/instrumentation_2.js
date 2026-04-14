export const instrumentationData2 = [
  {
    id: 'ins-autoclave',
    title: 'Autoclave (Steam under Pressure)',
    isImportant: true,
    definition: 'Apparatus guaranteeing absolute microbial sterility using pressurized superheated steam.',
    principle: 'Operates on moist heat sterilization. High pressure inside a sealed chamber dramatically raises boiling point of water to 121°C. Superheated steam rapidly coagulates all microbial proteins.',
    mechanism: 'Irreversible thermally induced denaturation of core enzymes.',
    types: ['Gravity Displacement', 'Pre-vacuum Autoclave'],
    specimen: 'Contaminated items exclusively.',
    reagents: [
      { component: 'Distilled Water', function: 'Generates pressurized steam.' }
    ],
    equipment: ['Indicator Tape', 'Biological Indicator'],
    procedure: [
      'Check water level inside bottom chamber.',
      'Load items loosely to explicitly allow steam to circulate.',
      'Close radial lid tightly.',
      'Switch on heater with discharge valve completely open.',
      'When continuous jet of pure steam escapes, CLOSE valve.',
      'Allow internal gauge to rise to exactly 15 psi.',
      'Maintain precisely for 15 minutes (Holding Time).',
      'Let cool completely before mechanically opening.'
    ],
    observation: 'Pressure safely returning to normal strictly.',
    result: 'Total destruction of bacterial endospores effectively.',
    interpretation: 'Biological indicators definitively killed confirming total sterility.',
    referenceRange: 'Standard: 121°C | 15 psi | 15 Minutes.',
    clinicalSignificance: 'Mandatory primarily for microbiology media prep.',
    sourcesOfError: ['Trapped air lowers actually achieved temperature deeply.'],
    precautions: ['NEVER open while pressure gauge is above zero.'],
    normalVsAbnormal: 'Indicator tape visibly darkens validating cycle completion.',
    applications: 'Surgical instrument sterilization.',
    limitations: 'Destroys heat-labile plastics permanently.',
    examPoints: '121C at 15 psi for 15 mins.',
    viva: [
      { q: 'Why is air expelled first?', a: 'Trapped air stops temperature from reaching 121C.' }
    ],
    mcq: [
      { q: 'Autoclave effectively functions on:', options: ['Dry heat', 'Radiation', 'Moist heat under pressure', 'Gas'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Rectangular-medical-autoclave-cutaway.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Indoor_Mold.jpg/960px-Indoor_Mold.jpg'
    }
  }
];
