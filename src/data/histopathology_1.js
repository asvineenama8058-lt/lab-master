export const histopathologyData1 = [
  {
    id: 'his-tissue',
    title: 'Routine Tissue Processing',
    isImportant: true,
    definition: 'Protocol designed to preserve, dehydrate, and impregnate gross tissue with a solid paraffin matrix.',
    principle: 'Living tissue must be structurally preserved via fixation, dehydrated cleanly, cleared of fluid, and infiltrated entirely with wax. This solid hydrophobic matrix supports delicate architecture, allowing the tissue to be sliced into micro-sections without decaying.',
    mechanism: 'Formalin cross-links proteins. Ascending alcohols extract water via osmosis. Xylene serves as a miscible bridge allowing molten paraffin to deeply penetrate voids left by water.',
    types: ['Manual Processing', 'Automated Tissue Processing'],
    specimen: 'Formalin-fixed gross surgical biopsies.',
    reagents: [
      { component: '10% Neutral Buffered Formalin', function: 'Primary fixative stopping autolysis.' },
      { component: 'Graded Alcohols (70%, 90%, 100%)', function: 'Dehydrates tissue gradually preventing violent shrinkage.' },
      { component: 'Xylene', function: 'Optical clearing agent; miscible with alcohol and wax.' },
      { component: 'Paraffin Wax (58-60°C)', function: 'Impregnation medium providing rigid matrix support.' }
    ],
    equipment: ['Tissue Cassettes', 'Automatic Tissue Processor'],
    procedure: [
      'Fixation: Submerge tissue in 10% NBF for 12-24 hours.',
      'Dehydration: Pass tissue through ascending alcohols (70%, 90%, 100%) for 1 hour each.',
      'Clearing: Pass through two fresh washes of Xylene for exactly 1 hour each.',
      'Impregnation: Submerge in molten Paraffin wax (60°C) for 2-3 changes to infiltrate all created voids.'
    ],
    observation: 'Tissue visually changes from soft and opaque to entirely rigid and translucent.',
    result: 'Fully infiltrated tissue cassette cleanly prepared for the embedding station.',
    interpretation: 'Successful processing yields tissues that cut incredibly smoothly without internal tearing.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Foundational step in diagnostic surgical pathology; ruined processing destroys the biopsy.',
    sourcesOfError: ['Rushing dehydration leaves water inside tissue, totally repelling paraffin wax (mushy blocks).'],
    precautions: ['Ascending alcohol grades MUST be used to prevent rapid distortion.', 'Paraffin temperature must never exceed 65°C.'],
    normalVsAbnormal: 'Abnormal processing yields chalky, sunken tissues smelling of formalin.',
    applications: 'All solid tissue biopsies targeting cancer or inflammation.',
    limitations: 'Dissolves all cellular lipids completely (rendering lipid stains useless).',
    examPoints: 'Xylene exclusively bridges alcohol and wax. Fixing prevents autolysis.',
    viva: [
      { q: 'Most widely used fixative?', a: '10% Neutral Buffered Formalin (NBF).' },
      { q: 'Purpose of dehydration?', a: 'To remove all water because water and specifically non-polar wax won\'t mix.' },
      { q: 'Why use graded alcohols?', a: 'Plunging watery tissue into absolute alcohol causes violent osmotic extraction of water.' },
      { q: 'What does a Clearing Agent do?', a: 'Removes alcohol, makes tissue transparent, and is miscible with both alcohol and paraffin.' },
      { q: 'Name a common clearing agent.', a: 'Xylene or Toluene.' }
    ],
    mcq: [
      { q: 'First and most critical step in tissue processing is?', options: ['Dehydration', 'Embedding', 'Fixation', 'Clearing'], answer: 2 },
      { q: 'Routine fixative used in labs?', options: ['Bouin fluid', '10% NBF', 'Glutaraldehyde', 'Carnoy fluid'], answer: 1 },
      { q: 'Removes water from fixed tissue?', options: ['Xylene', 'Formalin', 'Graded alcohols', 'Wax'], answer: 2 },
      { q: 'Why is absolute alcohol not used directly?', options: ['Too expensive', 'Causes violent tissue shrinkage', 'Fails to penetrate', 'Evaporates instantly'], answer: 1 },
      { q: 'Process removing alcohol using a solvent miscible with wax?', options: ['Dehydration', 'Fixation', 'Clearing', 'Embedding'], answer: 2 },
      { q: 'Most commonly used clearing agent is:', options: ['Acetone', 'Alcohol', 'Water', 'Xylene'], answer: 3 },
      { q: 'If tissue is left in Xylene for too long?', options: ['Too soft', 'Brittle/hard', 'Dissolves', 'Changes color'], answer: 1 },
      { q: 'Impregnation requires molten wax at what temperature?', options: ['37°C', '45°C', '58-60°C', '100°C'], answer: 2 },
      { q: 'Bridges gap between dehydrating agent and wax?', options: ['Water', 'Formalin', 'Clearing agent (Xylene)', 'Acetic acid'], answer: 2 },
      { q: 'Main goal of processing is to?', options: ['Stain tissue', 'Provide solid wax matrix for cutting', 'Kill bacteria', 'Make it liquid'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Medical_Laboratory_Scientist_US_NIH.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Siege_Philips_Amsterdam.jpg'
    }
  },
  {
    id: 'his-embed',
    title: 'Embedding and Block Making',
    isImportant: true,
    definition: 'Process of rigidly securing processed tissue precisely into a wax base for section cutting.',
    principle: 'Wax-infiltrated tissue is carefully placed in a distinct orientation totally within a metal mold filled deeply with molten paraffin. Rapidly cooled, it physically forms a completely solid, uniform wax block capturing the tissue permanently.',
    mechanism: 'Thermal phase transition of paraffin specifically crystallizes the matrix, locking tissue rigidly in position.',
    types: ['Leuckhart mold embedding', 'Tissue-Tek base mold system'],
    specimen: 'Wax-impregnated tissue within a cassette.',
    reagents: [
      { component: 'Molten Paraffin Wax', function: 'Acting as the primary solidifying casting medium.' }
    ],
    equipment: ['Heated Embedding Center', 'Base molds', 'Hot forceps', 'Cold plate'],
    procedure: [
      'Dispense a small layer of molten wax into the bottom of a steel mold.',
      'Use strictly heated forceps to carefully transfer tissue into the mold.',
      'Orient tissue accurately (cut edge facing absolutely strictly down).',
      'Fill mold completely with molten wax and place the plastic cassette back on top.',
      'Transfer quickly onto a freezing cold plate to solidify.'
    ],
    observation: 'Liquid hardens uniformly forming an opaque distinctly white geometric block.',
    result: 'Solid distinct purely rigid tissue block.',
    interpretation: 'Properly embedded block has absolutely no air bubbles surrounding the tissue.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Ensures the microtome blade hits the exact correct microscopic anatomical plane required for medical diagnosis.',
    sourcesOfError: ['Embedding tissue extremely wrongly (e.g. face-up instead of face-down) hiding the lesion.'],
    precautions: ['Forceps MUST be inherently hot; cold forceps solidly freeze wax causing tissue to tear.', 'Cool block quickly to uniquely guarantee completely tiny uniform wax crystals.'],
    normalVsAbnormal: 'Slow room-temp cooling causes deeply massive brittle wax crystals destroying slicing quality.',
    applications: 'Essential precursor step explicitly for microtomy.',
    limitations: 'Extremely tiny loose biopsies can be lost effectively during transfer.',
    examPoints: 'Tubular structures must be explicitly embedded cross-sectionally.',
    viva: [
      { q: 'Why is orientation so heavily important?', a: 'Ensures pathologist sees all layers. Improper embedding completely ruins diagnosis.' },
      { q: 'How should a tubular structure be oriented?', a: 'Cross-sectionally (on end).' },
      { q: 'Why cool rapidly on a cold plate?', a: 'Rapid cooling dictates the formation of very small wax crystals, yielding a smooth block.' },
      { q: 'What are Leuckhart\'s L-pieces?', a: 'Two L-shaped pieces forming an adjustable mold.' },
      { q: 'Why must forceps be entirely hot?', a: 'To prevent the molten wax from freezing onto the metal.' }
    ],
    mcq: [
      { q: 'The purpose of embedding is to:', options: ['Fix the tissue', 'Stain the tissue', 'Create a solid block for cutting', 'Remove water'], answer: 2 },
      { q: 'Tubular structures should be embedded:', options: ['Flat', 'Lengthwise', 'Cross-sectionally (on end)', 'Randomly'], answer: 2 },
      { q: 'Cooling the wax block rapidly provides:', options: ['Large brittle crystals', 'Small smooth crystals', 'Clear tissue', 'Tissue shrinkage'], answer: 1 },
      { q: 'If forceps are cold when handling the tissue:', options: ['Nothing happens', 'Wax freezes to forceps sticking to tissue', 'Tissue burns', 'Tissue dissolves'], answer: 1 },
      { q: 'Leuckhart pieces are used to:', options: ['Cut tissue', 'Hold tissues', 'Form adjustable embedding molds', 'Dehydrate'], answer: 2 },
      { q: 'The surface of the tissue that faces the bottom of the mold is:', options: ['Never cut', 'Surface cut FIRST by the microtome', 'Destroyed', 'Hidden'], answer: 1 },
      { q: 'Tissue orientation is the responsibility of:', options: ['Pathologist', 'Microtome', 'Histotechnologist', 'Surgeon'], answer: 2 },
      { q: 'Skin explicitly should be embedded:', options: ['Flat on epidermis', 'At a right angle showing all layers (Epidermis to dermis)', 'Rolled up', 'Crushed'], answer: 1 },
      { q: 'Embedding centers widely maintain wax at what temperature?', options: ['37°C', '60°C', '100°C', '0°C'], answer: 1 },
      { q: 'Which step immediately PRECEDES embedding?', options: ['Fixation', 'Microtomy', 'Impregnation', 'Staining'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DHCOM_Computer_On_Module_-_AM35x.jpg/960px-DHCOM_Computer_On_Module_-_AM35x.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/MI_with_contraction_bands_very_high_mag.jpg/960px-MI_with_contraction_bands_very_high_mag.jpg'
    }
  }
];
