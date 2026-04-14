export const instrumentationData4 = [
  {
    id: 'ins-water-bath',
    title: 'Serological Water Bath',
    isImportant: false,
    definition: 'Apparatus used to keep samples at a constant temperature in a water-filled chamber.',
    principle: 'Utilizes a heating element and a thermostat to maintain a static temperature of the water. Water acts as a highly efficient heat transfer medium for submerged test tubes.',
    mechanism: 'Thermostatic convective heating.',
    components: ['Stainless steel tank', 'Heating coil', 'Thermostat', 'Gabled lid (to prevent condensation dripping into samples)', 'Perforated rack'],
    calibration: [
      'Use a NIST-traceable thermometer.',
      'Check temperature at three different points in the bath.',
      'Allow stabilized temperature for 30 minutes before taking readings.'
    ],
    maintenance: [
      'Always use distilled water to prevent scale (calcium) buildup on the heating element.',
      'Drain and clean the tank at least once a month.',
      'Check the water level daily; never operate while empty (burns out the heater).',
      'Discard water immediately if there is a spill/breakage of tubes.'
    ],
    qualityControl: 'Daily recording of the temperature during operational hours.',
    specimen: 'Test tubes containing serum, blood, or media.',
    reagents: [{ component: 'Distilled water', function: 'Heating medium.' }],
    procedure: [
      'Set the thermostat to the desired temperature (e.g., 37°C or 56°C).',
      'Fill with distilled water above the level of the samples.',
      'Once the temperature is reached, place the tubes in the rack.',
      'Cover with the lid to maintain thermal stability.'
    ],
    observation: 'Steady temperature maintained within ±0.5°C.',
    result: 'N/A',
    interpretation: 'Uniform incubation of large numbers of tubes.',
    referenceRange: 'Ambient to 95°C.',
    clinicalSignificance: 'Essential for blood banking (Compatibility testing) and serological tests like Widal where 37°C is needed.',
    sourcesOfError: ['Using tap water.', 'Insufficient water levels causing uneven heating.', 'Placing tubes too close together.'],
    precautions: ['Do not boil the water unless specialized "Boiling water bath" is used.', 'Empty and dry the bath if not using for long periods to prevent fungal growth.'],
    normalVsAbnormal: 'Deviations > 1.0°C indicate thermostat failure.',
    applications: 'Incubation, Antigen-Antibody reactions.',
    limitations: 'Susceptible to contamination; not for open cultures.',
    examPoints: 'Routine temp: 37°C. Inactivation of complement: 56°C for 30 mins.',
    viva: [
      { q: 'Why do we use a gabled (slanted) lid on a water bath?', a: 'To ensure that condensation runs down the sides instead of dripping into the open test tubes and contaminating the samples.' },
      { q: 'At what temperature and for how long is serum "inactivated" in a water bath?', a: '56°C for 30 minutes.' }
    ],
    mcq: [
      { q: 'Water bath used for complement inactivation is set at?', options: ['37°C', '56°C', '100°C', '25°C'], answer: 1 },
      { q: 'Which type of water should ideally be used in a water bath?', options: ['Tap water', 'Distilled water', 'Sea water', 'Saline'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-fridge',
    title: 'Laboratory Refrigerator & Freezer',
    isImportant: true,
    definition: 'Cold storage units used to preserve reagents, samples, and biological specimens.',
    principle: 'Uses a Vapor Compression Cycle with a refrigerant (like R134a) to remove heat from the internal chamber and dissipate it into the surrounding air through condenser coils.',
    mechanism: 'Thermodynamic heat exchange.',
    components: ['Compressor', 'Condenser', 'Evaporator coils', 'Thermometer/Data-logger', 'Alarm system'],
    calibration: [
      'Calibration of the internal temperature probe using a glycol-encased NIST thermometer (simulates liquid load temperature).',
      'Yearly preventive maintenance of the compressor and defrost cycle.'
    ],
    maintenance: [
      'Clean the condenser coils (at the back/bottom) every 6 months to ensure heat dissipation.',
      'Check magnetic door seals using the "paper tug test".',
      'Defrost the freezer if ice buildup exceeds 1 cm.',
      'Ensure clear space for air circulation.'
    ],
    qualityControl: 'Daily recording of High and Low temperatures (Min/Max thermometer).',
    specimen: 'Blood, serum, urine, reagents, and media.',
    reagents: [{ component: 'None', function: 'Storage.' }],
    procedure: [
      'Organize items by storage temperature requirements.',
      'Place sensitive items (like vaccines/controls) in the center, not in the door.',
      'Keep a log of all items stored.',
      'Monitor for "Power Failure" alarms.'
    ],
    observation: 'Constant temperature maintenance.',
    result: 'Prolonged shelf-life of biological components.',
    interpretation: 'N/A',
    referenceRange: 'Fridge: 2°C to 8°C | Freezer: -20°C | Deep Freezer: -40°C to -80°C.',
    clinicalSignificance: 'Absolutely critical for cold-chain management of reagents; failure ruins thousands of dollars of stock.',
    sourcesOfError: ['Over-filling shelves blocking cold air.', 'Storing food or drinks (cross-contamination hazard).'],
    precautions: ['Blood bags must be stored in specialized blood-bank fridges with continuous circular graph recorders.'],
    normalVsAbnormal: 'Rapid rise in temperature indicates gas leak or compressor failure.',
    applications: 'Cold storage.',
    limitations: 'Limited capacity; requires backup power (UPS/Generator).',
    examPoints: 'Routine Fridge: 2-8°C. Blood storage: 2-6°C. Reagent storage: per manufacturer.',
    viva: [
      { q: 'What is the temperature range of a routine laboratory refrigerator?', a: '2°C to 8°C.' },
      { q: 'Why is it forbidden to store food and patient samples in the same refrigerator?', a: 'To prevent cross-contamination and the risk of biological infection to the staff.' }
    ],
    mcq: [
      { q: 'Most routine laboratory reagents are stored at?', options: ['-80°C', '-20°C', '2-8°C', 'Room Temp'], answer: 2 },
      { q: 'Blood for transfusion is stored at what temperature?', options: ['-20°C', '10°C', '2-6°C', '37°C'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-pipette-cal',
    title: 'Micropipette Calibration',
    isImportant: true,
    definition: 'Validation of the accuracy and precision of adjustable air-displacement pipettes.',
    principle: 'Gravimetric method. Since 1 ml of distilled water weighs exactly 1 gram at 4°C (and has a known density at room temp), pipetting a set volume of water and weighing it on an analytical balance allows for the calculation of the actual volume delivered.',
    mechanism: 'Gravimetric verification.',
    components: ['Plunger', 'Volume adjustment dial', 'Ejector', 'Disposable tip'],
    calibration: [
      'Maintain stable room temperature (20-25°C).',
      'Weigh 10 repetitive pipetted volumes at 100%, 50%, and 10% of the maximum volume.',
      'Calculate the Mean, Standard Deviation (SD), and Coefficient of Variation (CV).',
      'Compare with ISO 8655 standards.'
    ],
    maintenance: [
      'Daily: Clean the exterior with 70% alcohol.',
      'Monthly: Lubricate the internal piston with silicone grease.',
      'Annual: Professional service and internal seal/O-ring replacement.',
      'Always store vertically on a pipette stand.'
    ],
    qualityControl: 'Periodic "Tip-check" to ensure no leaks.',
    specimen: 'Distilled water (for calibration).',
    reagents: [{ component: 'Distilled water', function: 'Calibration medium.' }],
    procedure: [
      'Set pipette to the desired volume.',
      'Attach a tip and pre-rinse by aspirating/expelling water 3 times.',
      'Aspirate vertically, then dispense into a weighing boat on an analytical balance.',
      'Record the weight.',
      'Convert weight to volume using the Z-factor (density correction).'
    ],
    observation: 'Balance readings should be extremely consistent.',
    result: 'Accuracy (Error %) and Precision (CV %).',
    interpretation: 'Acceptable error is usually <1%; CV should be <0.5%.',
    referenceRange: 'Depends on pipette volume (e.g. 1000 µl = 1000 mg ± 8 mg).',
    clinicalSignificance: 'The accuracy of every result in biochemistry and molecular biology depends on the accuracy of the pipette; wrong volume = wrong result.',
    sourcesOfError: ['Using non-fitting tips.', 'Holding the pipette at an angle during aspiration.', 'Temperature of the liquid (e.g. cold water vs warm water).'],
    precautions: ['Never turn the dial past the maximum or minimum volume limit.', 'Never lay a pipette with liquid in the tip horizontally.'],
    normalVsAbnormal: 'Presence of liquid inside the shaft indicates a seal leak.',
    applications: 'Crucial for PCR, ELISA, and RIA.',
    limitations: 'Requires a calibrated analytical balance.',
    examPoints: 'Method: Gravimetric. Liquid: Distilled water. Parameter: Accuracy and Precision.',
    viva: [
      { q: 'How do you calibrate a micropipette in the lab?', a: 'By the Gravimetric method: Weighing 10 repetitive volumes of distilled water on a precision analytical balance and calculating the error.' },
      { q: 'Why shouldn\'t you lay a pipette down while there is liquid in the tip?', a: 'The liquid can flow into the internal piston and shaft, causing corrosion and contamination.' }
    ],
    mcq: [
      { q: 'Micropipette calibration is based on the weight of?', options: ['Mercury', 'Normal Saline', 'Distilled water', 'Alcohol'], answer: 2 },
      { q: 'Accuracy of a pipette refers to?', options: ['Closeness to true value', 'Repeatability of results', 'Size of the tip', 'Brand name'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-distiller',
    title: 'Water Distillation Still',
    isImportant: false,
    definition: 'Laboratory equipment used to produce pure (distilled) water by boiling and condensation.',
    principle: 'Based on the evaporation of water. Impurities (minerals, sand, microbes) have higher boiling points and remain in the boiling flask, while the pure steam travels to a condenser where it is cooled back into high-purity liquid water.',
    mechanism: 'Phased evaporation-condensation.',
    components: ['Boiling chamber', 'Heating element', 'Cooling condenser coils', 'Collection reservoir', 'Automatic cut-off sensor'],
    calibration: [
      'Checking the conductivity of the output water using a Conductivity Meter.',
      'Distilled water should have conductivity < 5.0 µS/cm.'
    ],
    maintenance: [
      'Descaling: Use a dilute acid (HCl) to remove lime/calcium scale from the heating elements monthly.',
      'Check the flow rate of the cooling water.',
      'Clean the storage reservoir weekly with 70% alcohol to prevent biofilm.',
      'Replace carbon filters in pre-treatment units if applicable.'
    ],
    qualityControl: 'Daily testing of the final water for pH and conductivity.',
    specimen: 'Tap water (feedwater).',
    reagents: [{ component: 'Descaling solution', function: 'Scale removal.' }],
    procedure: [
      'Switch on the cold water feed to the condenser.',
      'Wait for the boiling chamber to fill completely.',
      'Switch on the heating element.',
      'Discard the first 500 ml of distilled water produced.',
      'Collect subsequent distillate in a clean, sterilized container.'
    ],
    observation: 'Clear, mineral-free water production.',
    result: 'Pure water (Type II or III).',
    interpretation: 'High conductivity (>10 µS/cm) means the unit needs maintenance.',
    referenceRange: 'Conductivity: < 5 µS/cm | pH: 5.4 - 7.0.',
    clinicalSignificance: 'Mandatory for preparing all laboratory reagents and standards; impure water ruins test accuracy.',
    sourcesOfError: ['"Carry over" (boiling too violently, splashing impure water into the condenser).', 'Dirty collection tubing.'],
    precautions: ['Never run the heater without water (safety risk and element burnout).', 'Wear thermal gloves when cleaning.'],
    normalVsAbnormal: 'Cloudy distillate indicates a major failure in the distillation process.',
    applications: 'Reagent prep, Glassware rinsing.',
    limitations: 'Distillation is energy intensive and uses a lot of cooling water.',
    examPoints: 'Principle: Evaporation and Condensation. Quality metric: Conductivity.',
    viva: [
      { q: 'What is the main parameter used to check the quality of distilled water?', a: 'Conductivity (measures dissolved ions).' },
      { q: 'What is "descaling" of a distiller?', a: 'Removing the hard white calcium/magnesium deposits that build up on the heating element over time.' }
    ],
    mcq: [
      { q: 'Distillation removes which of the following?', options: ['Dissolved gases', 'Dissolved minerals/ions', 'Bacteria', 'Both B and C'], answer: 3 },
      { q: 'Good quality distilled water has conductivity of?', options: ['< 5 µS/cm', '100 µS/cm', 'Zero', '500 µS/cm'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-vortex',
    title: 'Vortex Mixer & Magnetic Stirrer',
    isImportant: false,
    definition: 'Mixing devices used for homogenizing small volumes of liquids.',
    principle: 'Vortex: Uses an eccentric rotating motor to create a whirlpool (vortex) in a test tube. Stirrer: Uses a rotating magnetic field to turn a magnetic bar (flea) submerged in the liquid.',
    mechanism: 'Mechanical kinetic agitation.',
    components: ['Vortex: Rubber cup, Speed knob. Stirrer: Hotplate surface, Speed/Heat knobs, Magnetic bar.'],
    calibration: [
      'Vortex: Tachometer check for RPM accuracy (if strictly required).',
      'Stirrer: Visual check for stable rotation at low and high speeds.'
    ],
    maintenance: [
      'Vortex: Keep the rubber cup clean of spills (they can seize the motor).',
      'Stirrer: wipe the top plate after each use.',
      'Magnetic bars: Store together in a dedicated container and do not drop (can lose magnetism).'
    ],
    qualityControl: 'Periodic check of motor noise.',
    specimen: 'Liquid reagents, blood, or chemicals in tubes/beakers.',
    reagents: [{ component: 'Distilled water (for cleaning)', function: 'Hygiene.' }],
    procedure: [
      'Vortex: Press the test tube into the rubber cup. Adjust speed until a vortex forms.',
      'Stirrer: Place a magnetic bar in the beaker. Place beaker on the plate. Switch on and increase speed slowly until the bar spins smoothly.'
    ],
    observation: 'Rapid uniform mixing of the solution.',
    result: 'Homogenous liquid.',
    interpretation: 'N/A',
    referenceRange: 'N/A',
    clinicalSignificance: 'Ensures thorough mixing of reagents and samples, preventing "layering" errors.',
    sourcesOfError: ['Vortexing too violently (sample splashing out).', 'Magnetic bar "jumping" due to too high speed.'],
    precautions: ['Magnetic stirrers often have a "Heat" function; do not use it unless required.'],
    normalVsAbnormal: 'Excessive vibrating noise suggests motor bearing failure.',
    applications: 'Hema/Biochem/Micro mixing.',
    limitations: 'Magnetic stirrer cannot be used in thick, highly viscous liquids.',
    examPoints: 'Vortex: Rapid mixing. Stirrer: Uses a magnetic flea. Essential tool for homogeneity.',
    viva: [
      { q: 'What is a "magnetic flea"?', a: 'A small, PTFE-coated magnet placed inside a beaker to stir the liquid when placed on a magnetic stirrer.' },
      { q: 'When is a vortex mixer preferred over manual shaking?', a: 'When rapid, high-intensity mixing of a small volume (e.g. in a test tube) is required without introducing external contamination.' }
    ],
    mcq: [
      { q: 'Device that uses a rotating magnetic field to stir is a?', options: ['Vortex', 'Magnetic Stirrer', 'Centrifuge', 'Oven'], answer: 1 },
      { q: 'PTFE is used for magnetic bars because it is?', options: ['Magnetic', 'Chemically inert', 'Cheap', 'Heavy'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
