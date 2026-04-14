export const instrumentationData3 = [
  {
    id: 'ins-microscope',
    title: 'Compound Light Microscope',
    isImportant: true,
    definition: 'Precision optical instrument used to magnify small objects not visible to the naked eye.',
    principle: 'Uses a combination of lenses (Objective and Eyepiece) to produce an enlarged image. Light passes through a condenser, through the specimen, and is magnified by the objective lens (primary image) and further by the ocular lens (virtual image).',
    mechanism: 'Double magnification system through refractive glass optics.',
    components: ['Eyepiece (10x)', 'Objective Lenses (10x, 40x, 100x)', 'Stage', 'Condenser', 'Diaphragm', 'Light source', 'Coarse/Fine adjustment knobs'],
    calibration: 'Calibrated using a Stage Micrometer and Ocular Micrometer (for measuring cell size in microns).',
    maintenance: [
      'Clean lenses only with specialized Lens Paper and Xylene/Ether mixture.',
      'Always cover the microscope when not in use to prevent dust accumulation.',
      'Lower the stage and set the lowest objective (10x) before storage.',
      'Check the bulb alignment periodically.'
    ],
    qualityControl: 'Regular check of resolution and focus using standard slides.',
    specimen: 'Fixed and stained microscopic slides.',
    reagents: [{ component: 'Immersion Oil (Cedar wood or Synthetic)', function: 'Increases resolution by matching the refractive index of glass.' }],
    procedure: [
      'Place slide on the stage and secure with clips.',
      'Start with the lowest objective (10x). Focus using coarse adjustment.',
      'Switch to 40x. Use only fine adjustment for sharp focus.',
      'For 100x: Apply a drop of immersion oil. Slowly submerge the 100x lens into the oil and focus strictly with fine adjustment.'
    ],
    observation: 'Magnified cellular detail (Total Magnification = Ocular x Objective).',
    result: 'Clear visualization of microbes, cells, and tissue structures.',
    interpretation: 'Identification of morphology leads to clinical diagnosis.',
    referenceRange: 'Total Magnification: 40x to 1000x.',
    clinicalSignificance: 'The core instrument ofทุก laboratory department (Micro, Hema, Patho).',
    sourcesOfError: ['Dirty lenses.', 'Incorrect condenser height (causes poor contrast).', 'Using 100x without oil (blurry image).'],
    precautions: ['Never let the objective lens touch the slide.', 'Never use coarse adjustment while on 40x or 100x power.'],
    normalVsAbnormal: 'Poor resolution signifies damaged or oily internal lenses.',
    applications: 'Cell counting, Differential counts, Histopathology.',
    limitations: 'Cannot visualize viruses or extremely small internal organelles (requires Electron Microscope).',
    examPoints: '100x lens = Oil Immersion. Total mag = Ocular x Objective. Resolution depends on Numerical Aperture (NA).',
    viva: [
      { q: 'Why is oil used with the 100x objective?', a: 'To prevent light refraction at the air-glass interface, thereby increasing the Numerical Aperture and resolution.' },
      { q: 'What is the function of the Condenser?', a: 'To concentrate and focus the light beam onto the specimen for better illumination.' }
    ],
    mcq: [
      { q: 'Total magnification using a 10x eyepiece and 40x objective is?', options: ['40x', '50x', '400x', '1000x'], answer: 2 },
      { q: 'Which part of the microscope controls the amount of light?', options: ['Condenser', 'Iris Diaphragm', 'Mirror', 'Stage'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'ins-incubator',
    title: 'Bacteriological Incubator',
    isImportant: true,
    definition: 'Insulated chamber that maintains a constant, optimal temperature for the growth of microorganisms.',
    principle: 'Operates on controlled dry heat. A thermostat regulates electric heating elements to maintain the chamber at a set temperature (usually 37°C), providing an ideal environment for enzymatic and metabolic activities of bacteria.',
    mechanism: 'Thermostatic thermal regulation.',
    components: ['Insulated double walls', 'Thermostat', 'Temperature display', 'Perforated shelves', 'Inner glass door'],
    calibration: [
      'Place a calibrated National Institute of Standards and Technology (NIST) thermometer in the center of the shelf.',
      'Check if the display temperature matches the thermometer after 2 hours.',
      'Adjust the thermostat offset if a deviation > 0.5°C is found.'
    ],
    maintenance: [
      'Wipe internal shelves with 70% Alcohol weekly.',
      'Check the water level (if using a CO2 or water-jacketed model).',
      'Verify that the door seal is airtight.',
      'Never overload shelves (allows air circulation).'
    ],
    qualityControl: 'Daily temperature logging (Morning and Evening).',
    specimen: 'Inoculated culture media (Petri dishes, Broth tubes).',
    reagents: [{ component: 'Disinfectant (70% Ethanol)', function: 'Cleaning.' }],
    procedure: [
      'Set the desired temperature (37°C for most human pathogens).',
      'Wait for the "Ready" light.',
      'Load samples and close both inner and outer doors.',
      'Incubate for 18-24 hours for most routine cultures.'
    ],
    observation: 'Bacterial colony growth on the media surface.',
    result: 'Successful cultivation of the target organism.',
    interpretation: 'N/A',
    referenceRange: 'Temperature range: Ambient +5°C to 60°C.',
    clinicalSignificance: 'Mandatory for all Microbiology culture and sensitivity (AST) testing.',
    sourcesOfError: ['Frequent opening of the door (causes temperature drops).', 'Placing hot media directly inside.'],
    precautions: ['Do not use for flammable substances.', 'Set over-temperature safety cut-off to prevent overheating.'],
    normalVsAbnormal: 'Growth appearing within the expected time verifies incubator function.',
    applications: 'Bacteriology, Cell Culture.',
    limitations: 'Cannot be used for sterilization (temperature is too low).',
    examPoints: 'Routine Temp: 37°C. Fungal Temp: 22-25°C. Principle: Thermostatic control.',
    viva: [
      { q: 'What is the standard temperature for cultivating human bacterial pathogens?', a: '37°C (Normal body temperature).' },
      { q: 'What is the purpose of the inner glass door?', a: 'To allow visualization of cultures without disturbing the internal temperature and atmosphere.' }
    ],
    mcq: [
      { q: 'Routine bacteriological incubation is performed at?', options: ['25°C', '37°C', '56°C', '100°C'], answer: 1 },
      { q: 'Daily temperature monitoring of an incubator should be done?', options: ['Weekly', 'Once a month', 'Twice daily', 'Never'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-hot-air-oven',
    title: 'Hot Air Oven',
    isImportant: true,
    definition: 'Electrical device used for dry heat sterilization of laboratory glassware and metal instruments.',
    principle: 'Employs conduction and convection of high-temperature dry heat. Heat kills microbes by oxidizing cellular components and through denaturation of proteins.',
    mechanism: 'High-temperature oxidative destruction.',
    components: ['Heating elements', 'Fan (for even air distribution)', 'Digital controller', 'Adjustable shelves', 'Asbestos/Glass wool insulation'],
    calibration: [
      'Six-point temperature mapping using thermocouple probes.',
      'Verification using biological indicators (Bacillus subtilis spores).'
    ],
    maintenance: [
      'Monthly cleaning of the interior.',
      'Check the fan motor for noise/vibration.',
      'Inspect seal gaskets for cracks.',
      'Replace heating elements if the oven fails to reach 160°C.'
    ],
    qualityControl: 'Use of "Brownes Tubes" or Chemical Indicator strips in every load.',
    specimen: 'Dry glassware, forceps, glass syringes.',
    reagents: [{ component: 'None', function: 'Physical sterilization.' }],
    procedure: [
      'Wrap glassware in Kraft paper or aluminum foil.',
      'Place items in the oven with spaces for air flow.',
      'Set temperature to 160°C.',
      'Once 160°C is reached, maintain for 1 hour (Holding period).',
      'Switch off and do not open until the temperature drops to <60°C (prevents glass cracking).'
    ],
    observation: 'Items are sterile and dry.',
    result: 'Total destruction of all life forms (including spores).',
    interpretation: 'Validated cycles ensure safe use of equipment.',
    referenceRange: '160°C for 1 hour | 170°C for 30 mins.',
    clinicalSignificance: 'Preferred method for items that can be damaged by moist heat (e.g., powders, some surgical tools).',
    sourcesOfError: ['Over-packing the oven.', 'Premature opening causing thermal shock.'],
    precautions: ['Never place inflammable materials (cotton, plastic, rubber) in a hot air oven.'],
    normalVsAbnormal: 'Indicator turning black confirms sterilization temperature was achieved.',
    applications: 'Glassware preparation in all labs.',
    limitations: 'Slow process; cannot be used for liquids (they would evaporate).',
    examPoints: 'Sterilization: 160°C for 1 hour. Bacillus subtilis is the biological control.',
    viva: [
      { q: 'What is the holding time and temperature for a Hot Air Oven?', a: '160°C for 60 minutes (1 hour).' },
      { q: 'Why shouldn\'t we put liquids in a Hot Air Oven?', a: 'Dry heat will cause the liquids to evaporate and build up pressure in containers, potentially causing an explosion.' }
    ],
    mcq: [
      { q: 'Biological indicator for dry heat sterilization is?', options: ['B. stearothermophilus', 'B. subtilis', 'E. coli', 'S. aureus'], answer: 1 },
      { q: 'What temperature is typically used for hot air ovens?', options: ['121°C', '160°C', '100°C', '37°C'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-balance',
    title: 'Electronic Analytical Balance',
    isImportant: true,
    definition: 'Highly precise instrument designed to measure small masses with extreme accuracy.',
    principle: 'Operates on the "Electromagnetic Force Restoration" principle. When a weight is placed on the pan, an electric current is generated to create an equal opposing force to return the pan to its original position. This current is converted into the displayed digital weight.',
    mechanism: 'Load cell / Force restoration system.',
    components: ['Weighing pan', 'Glass draft shield', 'Leveling indicator', 'Tare button', 'LCD display'],
    calibration: [
      'Internal calibration (built-in weights).',
      'External calibration using certified "Class E2" standard weights (e.g., 50g, 100g).',
      'Leveling: Adjust feet until the air bubble is centered in the spirit level.'
    ],
    maintenance: [
      'Clean the pan with a soft brush after every use.',
      'Minimize vibration; place on a heavy "anti-vibration" table.',
      'Place a desiccant (silica gel) inside the chamber in humid areas.',
      'Avoid placing next to air conditioners or direct sunlight.'
    ],
    qualityControl: 'Daily "Verification" using a check-weight before use.',
    specimen: 'Chemicals, reagents, or powders.',
    reagents: [{ component: 'Cleaning brush', function: 'Physical debris removal.' }],
    procedure: [
      'Switch on and allow 30-minute warm-up.',
      'Ensure the balance is perfectly level.',
      'Place a weighing paper or container on the pan.',
      'Press "TARE" to zero the display.',
      'Gently add the material until the required weight is achieved.',
      'Close the draft shield for the final stable reading.'
    ],
    observation: 'Stable digital read-out in grams/milligrams.',
    result: 'Precise mass measurement.',
    interpretation: 'N/A',
    referenceRange: 'Readability: 0.1 mg (0.0001 g).',
    clinicalSignificance: 'Accurate reagent preparation is the foundation of all quantitative chemistry.',
    sourcesOfError: ['Air drafts (if doors are open).', 'Static electricity on weighing paper.', 'Fingerprints on the sample container.'],
    precautions: ['Never exceed the maximum capacity.', 'Samples should be at room temperature before weighing.'],
    normalVsAbnormal: 'Fluctuating readings indicate vibration or unstable environment.',
    applications: 'Reagent and standard preparation.',
    limitations: 'Sensitivity to environment.',
    examPoints: 'Typical accuracy: 0.1 mg. Leveling is critical. Principle: Electromagnetic force restoration.',
    viva: [
      { q: 'What is the purpose of the "TARE" function?', a: 'To subtract the weight of the container or weighing paper so only the weight of the sample is displayed.' },
      { q: 'Why does an analytical balance have a glass draft shield?', a: 'To prevent air currents from affecting the highly sensitive weighing mechanism.' }
    ],
    mcq: [
      { q: 'The minimum readability of an analytical balance is typically?', options: ['0.1 g', '1.0 g', '0.1 mg', '0.01 mg'], answer: 2 },
      { q: 'Calibration should be performed using?', options: ['Stone weights', 'NIST Class certified weights', 'Water', 'Any coin'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-ph-meter',
    title: 'Digital pH Meter',
    isImportant: true,
    definition: 'Electronic instrument used to measure the hydrogen-ion activity (acidity or alkalinity) of a solution.',
    principle: 'Potentiometric method. Uses a glass electrode sensitive to hydrogen ions and a reference electrode. The potential difference (voltage) between them is proportional to the pH of the solution (Nernst Equation).',
    mechanism: 'Electrochemical Ion-selective sensing.',
    components: ['Glass electrode', 'Reference electrode', 'Temperature probe', 'Digital display meter'],
    calibration: [
      'Perform TWO-POINT or THREE-POINT calibration daily.',
      'Use standard buffer solutions: pH 4.0 (acidic), pH 7.0 (neutral), and pH 10.0 (alkaline).',
      'The slope of the calibration should be between 95-105%.'
    ],
    maintenance: [
      'Keep the electrode submerged in 3M KCl storage solution (NEVER in distilled water).',
      'Rinse with distilled water between measurements.',
      'Clean the electrode junction if the response becomes sluggish.',
      'Replace the filling solution regularly.'
    ],
    qualityControl: 'Measurement of an independent "QC buffer" after calibration.',
    specimen: 'Liquid reagents, urine, or physiological buffers.',
    reagents: [
      { component: 'Standard Buffer Capsules', function: 'Calibration standards.' },
      { component: '3M Potassium Chloride (KCl)', function: 'Electrode storage.' }
    ],
    procedure: [
      'Calibrate the meter using pH 7.0 and pH 4.0/10.0 buffers.',
      'Rinse the electrode with distilled water and blot dry gently.',
      'Immerse the electrode and temperature probe into the test solution.',
      'Stir gently and wait for the reading to stabilize.',
      'Record the values.'
    ],
    observation: 'Digital display showing pH value (1 to 14).',
    result: 'Precise pH measurement.',
    interpretation: 'pH < 7 is acidic; pH > 7 is alkaline; pH 7 is neutral.',
    referenceRange: 'Laboratory specific requirements.',
    clinicalSignificance: 'Ensures correct pH for enzymatic assays and microbiological media.',
    sourcesOfError: ['"Alkaline error" at very high pH.', 'Temperature variations (compensated by probe).', 'Clogged electrode junction.'],
    precautions: ['Do not touch the delicate glass bulb with fingers.', 'Rinse thoroughly between different solutions to prevent cross-contamination.'],
    normalVsAbnormal: 'Slow stabilization indicates a dirty or aging electrode.',
    applications: 'Biochemistry, Media preparation, Water testing.',
    limitations: 'Glass electrodes are fragile and expensive.',
    examPoints: 'Standard buffers: 4, 7, 10. Storage: 3M KCl. Principle: Potentiometric.',
    viva: [
      { q: 'Why must we never store a pH electrode in distilled water?', a: 'Because the ions will leach out of the glass membrane and the filling solution, damaging the electrode\'s sensitivity.' },
      { q: 'Why is temperature compensation needed for pH measurement?', a: 'Because the voltage generated by the electrode is temperature-dependent (Nernst effect).' }
    ],
    mcq: [
      { q: 'Neutral pH buffer has a value of?', options: ['4.0', '7.0', '9.2', '10.0'], answer: 1 },
      { q: 'The most common storage solution for pH electrodes is?', options: ['Tap water', '3M KCl', 'Distilled water', 'Sulfuric acid'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
