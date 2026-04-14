export const immunologyData1 = [
  {
    id: 'imm-elisa-sandwich',
    title: 'Enzyme-Linked Immunosorbent Assay (Sandwich ELISA)',
    isImportant: true,
    definition: 'Plate-based assay designed to quantify antigens.',
    principle: 'A capture antibody coats wells. Sample antigen binds. A detection enzyme-linked antibody binds the antigen forming a sandwich. Substrate reacts with the enzyme creating a colored product.',
    mechanism: 'Peroxidase cleaves TMB forming a blue derivative proportional to bound antigen.',
    types: ['Sandwich', 'Competitive', 'Indirect'],
    specimen: 'Serum or plasma.',
    reagents: [
      { component: 'Capture Antibody', function: 'Binds to plate to trap antigen.' },
      { component: 'Detection Antibody-Enzyme', function: 'Binds trapped antigen linking the enzyme.' },
      { component: 'TMB Substrate', function: 'Chromogenic substrate turning blue.' },
      { component: 'Stop Solution', function: 'Dilute acid stopping enzyme activity.' }
    ],
    equipment: ['ELISA Microtiter plate', 'ELISA Reader'],
    procedure: [
      'Coat wells with capture antibody and incubate.',
      'Wash to remove unbound antibodies.',
      'Block remaining active sites with BSA.',
      'Add patient serum and incubate.',
      'Wash thoroughly.',
      'Add enzyme-conjugated secondary antibody and incubate.',
      'Wash thoroughly.',
      'Add TMB substrate. Incubate in dark.',
      'Add Stop Solution.',
      'Read absorbance at 450 nm.'
    ],
    observation: 'Liquid turns blue then yellow after stop solution.',
    result: 'Optical Density measured. Unknown calculated using standard curve.',
    interpretation: 'Concentration calculated.',
    referenceRange: 'Test specific.',
    clinicalSignificance: 'Mandatory for viral diagnostics like HIV.',
    sourcesOfError: ['False positive from unbound conjugate.'],
    precautions: ['Washing steps are extremely critical.'],
    normalVsAbnormal: 'Abnormal shows high OD.',
    applications: 'Infectious diseases.',
    limitations: 'Prozone effect at high antigen concentration.',
    examPoints: 'TMB turns blue, then yellow on stopping.',
    viva: [
      { q: 'Why Sandwich ELISA?', a: 'Antigen is trapped between capture and detection antibodies.' },
      { q: 'Purpose of Stop Solution?', a: 'Denatures enzyme and shifts color to yellow.' }
    ],
    mcq: [
      { q: 'Sandwich ELISA detects:', options: ['Antibodies', 'Antigens', 'Enzymes', 'Water'], answer: 1 },
      { q: 'Common enzyme conjugate?', options: ['Catalase', 'Amylase', 'HRP (Horseradish Peroxidase)', 'Lipase'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microplate_reader.jpg/960px-Microplate_reader.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ELISA.svg/640px-ELISA.svg.png'
    }
  },
  {
    id: 'imm-ouchterlony',
    title: 'Ouchterlony Double Diffusion',
    isImportant: true,
    definition: 'Passive radial diffusion precipitation test in an agar gel.',
    principle: 'Antigen and antibody are placed in separate wells in agar. Both diffuse outward radially. Where they meet in optimal proportions (Zone of Equivalence), they form a visible precipitin line.',
    mechanism: 'Passive diffusion lattice formation.',
    types: ['Double diffusion in two dimensions'],
    specimen: 'Serum or isolated antigens.',
    reagents: [
      { component: 'Agarose Gel', function: 'Porous matrix for diffusion.' },
      { component: 'Antiserum', function: 'Specific antibody.' }
    ],
    equipment: ['Gel puncher', 'Moist chamber'],
    procedure: [
      'Pour heated 1% agarose onto a slide.',
      'Punch a central well and surrounding wells.',
      'Fill center with Antiserum.',
      'Fill surrounding with Antigen.',
      'Incubate in moist chamber for 24-48 hours.',
      'Observe precipitin lines.'
    ],
    observation: 'White precipitin lines between wells.',
    result: 'Identity: Smooth continuous arc. Non-identity: Crossed lines. Partial: Spur.',
    interpretation: 'Determines immunological relationship between antigens.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Identifying fungal antigens or autoimmune extractable nuclear antigens.',
    sourcesOfError: ['Overfilling wells spills over surface.'],
    precautions: ['Incubate in moist chamber to prevent cracking.'],
    normalVsAbnormal: 'Precipitation indicates positive cross-reactivity.',
    applications: 'Antigenic relationship studies.',
    limitations: 'Takes 48 hours for results.',
    examPoints: 'Zone of Equivalence forms the line.',
    viva: [
      { q: 'What is Zone of Equivalence?', a: 'Optimal ratio of Ag:Ab forming maximal precipitation.' },
      { q: 'What does a spur indicate?', a: 'Partial identity.' }
    ],
    mcq: [
      { q: 'Ouchterlony is an example of:', options: ['Agglutination', 'Flocculation', 'Double Diffusion', 'Immunofluorescence'], answer: 2 },
      { q: 'Spur indicates:', options: ['Identity', 'Non-identity', 'Partial identity', 'Failure'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/960px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png'
    }
  }
];
