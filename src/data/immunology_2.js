export const immunologyData2 = [
  {
    id: 'imm-rid',
    title: 'Radial Immunodiffusion (RID / Mancini Method)',
    isImportant: false,
    definition: 'Quantitative single diffusion technique measuring specific proteins.',
    principle: 'Antibody is uniformly mixed into agarose gel. Antigen placed in a central well diffuses radially outward outward. A precipitin ring forms where equivalence is reached. The square of the ring diameter is directly proportional to antigen concentration.',
    mechanism: 'Radial passive diffusion reaching zone of equivalence forming a stable lattice ring.',
    types: ['Mancini (Endpoint)', 'Fahey-McKelvey (Kinetic)'],
    specimen: 'Serum or body fluids.',
    reagents: [
      { component: 'Antibody-impregnated agarose', function: 'Matrix with uniform antibody.' },
      { component: 'Antigen Standards', function: 'Used to plot standard curve.' }
    ],
    equipment: ['Measuring ruler/caliper', 'Moist chamber'],
    procedure: [
      'Obtain plate with antiserum in agar.',
      'Apply exact volumes of standards to reference wells.',
      'Apply patient samples to test wells.',
      'Incubate in moist chamber for 48-72 hours.',
      'Measure diameter of precipitin rings.',
      'Plot standard curve to find unknown.'
    ],
    observation: 'Circular precipitin rings around wells.',
    result: 'Quantitative measurement of antigen.',
    interpretation: 'IgG, IgA, IgM levels quantified.',
    referenceRange: 'IgG: 700-1600 mg/dl',
    clinicalSignificance: 'Diagnosing immunodeficiencies and myelomas.',
    sourcesOfError: ['Damaging well edge causes asymmetric oval rings.'],
    precautions: ['Wells must be absolutely completely filled with exactly the same volume.'],
    normalVsAbnormal: 'Very large rings indicate high concentration (Myeloma).',
    applications: 'Immunoglobulin quantitation.',
    limitations: 'Takes 72 hours for Mancini endpoint.',
    examPoints: 'Diameter squared is proportional to concentration.',
    viva: [
      { q: 'Why is RID called Single Radial Diffusion?', a: 'Only the antigen diffuses; antibody is fixed.' },
      { q: 'Relationship between ring and concentration?', a: 'Square of the diameter is directly proportional to concentration.' }
    ],
    mcq: [
      { q: 'RID represents which type of diffusion?', options: ['Double', 'Single', 'Electro', 'Active'], answer: 1 },
      { q: 'Endpoint RID method is named after:', options: ['Ouchterlony', 'Mancini', 'Fahey', 'Widal'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Microplates.jpg/960px-Microplates.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'imm-rocket',
    title: 'Rocket Immunoelectrophoresis',
    isImportant: false,
    definition: 'Quantitative electro-immunodiffusion generating rocket-shaped precipitin lines.',
    principle: 'Combines single radial immunodiffusion with electrophoresis. Antigen is placed in wells cut into an antibody-containing agarose gel. Electric current accelerates antigen into the gel. Precipitation forms a rocket shape. Height linearly correlates to concentration.',
    mechanism: 'Electric field forcefully drives charged antigens through antibody matrix.',
    types: ['Electro-immunodiffusion'],
    specimen: 'Serum proteins.',
    reagents: [
      { component: 'Antibody-impregnated agarose', function: 'Matrix with uniform antibody.' },
      { component: 'Electrophoresis buffer', function: 'Maintains pH and conducts current.' }
    ],
    equipment: ['Electrophoresis chamber', 'Power supply'],
    procedure: [
      'Prepare agarose plate containing antiserum.',
      'Punch wells at the cathodic end.',
      'Load standards and unknowns.',
      'Apply electric current driving antigens to anode.',
      'Run for 2-4 hours until rockets stop extending.',
      'Measure peak height of rockets.'
    ],
    observation: 'Conical rocket-shaped precipitation lines.',
    result: 'Height proportional to antigen concentration.',
    interpretation: 'Quantitative levels of specific proteins determined rapidly.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Rapid quantification of proteins compared to standard RID.',
    sourcesOfError: ['High voltage melts the agarose gel.'],
    precautions: ['Current polarity must be correct.'],
    normalVsAbnormal: 'Taller rockets equal more antigen.',
    applications: 'Protein quantitation.',
    limitations: 'Limited to suitably charged antigens.',
    examPoints: 'Height is directly proportional to concentration.',
    viva: [
      { q: 'Why is it called Rocket?', a: 'Precipitin line resembles a conical rocket.' },
      { q: 'Advantage over RID?', a: 'Significantly faster due to electric field.' }
    ],
    mcq: [
      { q: 'Rocket uses what force to drive antigens?', options: ['Gravity', 'Capillary', 'Electric field', 'Magnetic'], answer: 2 },
      { q: 'Height of rocket is proportional to:', options: ['Voltage', 'Time', 'Antigen concentration', 'Antibody'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/DNAgel4wiki.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rocket_immunoelectrophoresis.jpg/640px-Rocket_immunoelectrophoresis.jpg'
    }
  }
];
