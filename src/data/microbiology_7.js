export const microbiologyData7 = [
  {
    id: 'mic-hao',
    title: 'Hot Air Oven (Dry Heat Sterilization)',
    isImportant: true,
    definition: 'Apparatus used to sterilize labware using high-temperature dry air.',
    principle: 'Dry heat destroys microorganisms through physical oxidation of essential cell constituents and proteins. It requires higher temperatures and longer times than moist heat because heat transfer by air is slow.',
    mechanism: 'Thermal oxidation of bio-molecules causing irreversible cell death.',
    types: ['Gravity Convection', 'Mechanical Convection'],
    specimen: 'Glassware, Powders, Oils.',
    reagents: [
      { component: 'None', function: 'Physical heat sterilization.' }
    ],
    equipment: ['Hot Air Oven', 'Kraft paper for wrapping'],
    procedure: [
      'Clean and dry all glassware completely.',
      'Wrap items in Kraft paper to maintain sterility post-cycle.',
      'Load oven loosely to allow air circulation.',
      'Heat to 160°C and maintain strictly for 2 hours natively.',
      'Allow oven to cool to room temperature before opening.'
    ],
    observation: 'Cycle completes safely.',
    result: 'Absolute microbial sterility.',
    interpretation: 'Items are perfectly sterile for microbiological work.',
    referenceRange: '160°C for 2 hours.',
    clinicalSignificance: 'Mandatory for preparing sterile Petri dishes and pipettes.',
    sourcesOfError: ['Overloading oven blocks air flow resulting in unsterile spots.'],
    precautions: ['Do not open oven while hot; glass will crack.'],
    normalVsAbnormal: 'Indicator tape darkens reliably.',
    applications: 'Sterilizing non-aqueous materials (oils/powders).',
    limitations: 'Destroys rubber, plastics, and culture media.',
    examPoints: '160°C for 2 hours. Kills by oxidation.',
    viva: [
      { q: 'Why use dry heat?', a: 'For items damaged by moisture like powders and oils.' }
    ],
    mcq: [
      { q: 'Hot air oven kills bacteria by:', options: ['Coagulation', 'Oxidation', 'Alkylation', 'Radiation'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Rectangular-medical-autoclave-cutaway.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Rectangular-medical-autoclave-cutaway.jpg'
    }
  },
  {
    id: 'mic-koch',
    title: 'Koch\'s Arnold / Inspissator',
    isImportant: false,
    definition: 'Sterilization of heat-sensitive media containing serum or egg.',
    principle: 'Intermittent steaming (Tyndallization) at 100°C for 3 successive days kills vegetative cells on day 1. Spores germinate overnight into cells, which are killed on day 2 and 3. Inspissation heats at 80-85°C to solidify protein media without denaturing nutrients.',
    mechanism: 'Fractional thermal denaturation.',
    types: ['Tyndallization', 'Inspissation'],
    specimen: 'Lowenstein-Jensen (LJ) Media, Loeffler Serum.',
    reagents: [
      { component: 'Water', function: 'Generates steam.' }
    ],
    equipment: ['Inspissator water bath'],
    procedure: [
      'Place tubed media slanted in the inspissator rack.',
      'Heat to 80-85°C for 45 minutes.',
      'Repeat process for 3 consecutive days for Tyndallization.'
    ],
    observation: 'Liquid serum media slowly solidifies into a firm slant.',
    result: 'Media is sterile and nutritionally intact.',
    interpretation: 'Safe for culturing delicate pathogens.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Essential for Tuberculosis diagnostics (LJ Media prep).',
    sourcesOfError: ['Heating above 90°C brutally fries the egg proteins ruinously.'],
    precautions: ['Maintain strict temperature control at exactly 80-85°C.'],
    normalVsAbnormal: 'Properly inspissated media is smooth and firm.',
    applications: 'Mycobacterium culture media preparation.',
    limitations: 'Highly time consuming (takes 3 days for sterility).',
    examPoints: 'Inspissation temperature is 80-85°C.',
    viva: [
      { q: 'What media is inspissated?', a: 'Lowenstein-Jensen Media and Loeffler Serum.' }
    ],
    mcq: [
      { q: 'Inspissator operates specifically at:', options: ['121°C', '160°C', '80°C to 85°C', '37°C'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bunsen_burner_flame_types.jpg/960px-Bunsen_burner_flame_types.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bunsen_burner_flame_types.jpg/960px-Bunsen_burner_flame_types.jpg'
    }
  }
];
