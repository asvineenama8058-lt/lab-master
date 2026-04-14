export const instrumentationData6 = [
  {
    id: 'ins-cell-counter',
    title: 'Automated Hematology Counter',
    isImportant: true,
    definition: 'Electronic system used to count and differentiate blood cells with high speed and accuracy.',
    principle: 'Coulter Principle (Electrical Impedance). Cells are non-conductive and suspended in a conductive fluid (diluent). As they pass through a tiny aperture, they momentarily increase electrical resistance. Each "pulse" represents a cell, and the pulse height correlates with cell volume.',
    mechanism: 'Hydrodynamic focusing and impedance pulse analysis.',
    components: ['Aspiration probe', 'Mixing chambers', 'Aperture tube', 'Internal vacuum pump', 'Colorimetric chamber (for Hb)', 'Digital display'],
    calibration: [
      'Daily calibration check with manufacturer-supplied "whole blood calibrators".',
      'Check of background counts (diluent alone) to ensure zero noise.',
      'Adjustment of "Gain" settings for each parameter.'
    ],
    maintenance: [
      'Daily "Startup" and "Shutdown" cleaning cycles using enzyme-based detergents.',
      'Manual cleaning of the aperture with a brush if "Clog" alerts persist.',
      'Check tubing for any leaks or air bubbles.',
      'Monthly cleaning of the transducer chambers.'
    ],
    qualityControl: 'Daily run of Low, Normal, and High controls. Monitoring of XB (Bull\'s Moving Average).',
    specimen: 'Whole blood (EDTA-anticoagulated).',
    reagents: [
      { component: 'Isotonic Diluent', function: 'Conductive carrier fluid.' },
      { component: 'Lytic Reagent', function: 'Lysar RBCs and releases hemoglobin.' },
      { component: 'Concentrated Cleaner', function: 'Proteolytic probe wash.' }
    ],
    procedure: [
      'Mix the EDTA blood tube thoroughly by inversion.',
      'Aspirate the sample through the probe.',
      'Machine splits the sample: One for RBC/Platelet count, one for WBC count/Hb.',
      'Results (CBC) are displayed in <60 seconds.',
      'Review histograms for any abnormality flags.'
    ],
    observation: 'Display of numerical data plus RBC/WBC/PLT Histograms.',
    result: 'Complete Blood Count (CBC) and Differential (3-part or 5-part).',
    interpretation: 'Aids in diagnosing anemia, infections, and leukemias.',
    referenceRange: 'Age and sex specific.',
    clinicalSignificance: 'Mandatory frontline screen for almost every hospitalized patient.',
    sourcesOfError: ['Clotted samples (completely ruins aspiration).', 'High WBC count falsely increasing Hb (turbidity error).', 'Platelet clumping.'],
    precautions: ['Always check the sample for clots using a wooden stick before analysis.', 'Do not use hemolyzed samples.'],
    normalVsAbnormal: 'A "Flag" on the display requires a manual smear review by a pathologist.',
    applications: 'Hospitals, Blood Banks.',
    limitations: 'Cannot identify immature cells (Blasts) accurately without manual microscopy.',
    examPoints: 'Principle: Electrical Impedance (Coulter). RBC/PLT are counted together by size. Lytic agent releases Hb.',
    viva: [
      { q: 'Explain the Coulter Principle used in cell counters.', a: 'Cells are poor conductors. As they pass through an aperture in a conductive diluent, they increase electrical resistance; the number of resistance pulses equals the cell count, and pulse height equals cell size.' },
      { q: 'Why is it necessary to lyse RBCs during a WBC count?', a: 'Because RBCs outnumber WBCs by about 1000 to 1. They must be destroyed (lysed) so that the much smaller number of white cells can be counted without interference.' }
    ],
    mcq: [
      { q: 'The most common principle used in hematology counters is?', options: ['Colorimetry', 'Electrical Impedance', 'ELISA', 'Radioactivity'], answer: 1 },
      { q: 'Lytic reagent is primarily used for the measurement of?', options: ['Platelets', 'WBCs and Hemoglobin', 'RBC volume', 'Glucose'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-elisa-reader',
    title: 'ELISA Reader & Washer',
    isImportant: true,
    definition: 'Specialized photometer designed to measure the absorbance of samples in a 96-well microplate.',
    principle: 'Vertically oriented spectrophotometer. Light passes through the bottom of each well of a microplate, and the absorbance of the colored enzyme-product is measured. The washer uses multiple needle manifolds to precisely dispense and aspirate wash buffer from the wells.',
    mechanism: 'Micro-well scanning colorimetry.',
    components: ['Plate transport carriage', 'Multi-channel fiber optics', '8 or 12-channel washer manifold', 'Wash/Waste bottles'],
    calibration: [
      'Verification of optical alignment across all 8/12 channels.',
      'Checking the volume precision of the washer needles using a gravimetric well-check.',
      'Absorbance verification using a "Test Plate" with known OD filters.'
    ],
    maintenance: [
      'Wash the manifold needles daily with distilled water to prevent salt crystallization.',
      'Check for blocked needles (causes uneven washing).',
      'Discard waste bottles daily.',
      'Clean the optical windows of the reader with a blower or lint-free paper.'
    ],
    qualityControl: 'Inclusion of "Internal Quality Controls" (Negative, Low-Positive, High-Positive) in every plate run.',
    specimen: 'Serum or Plasma (Diluted).',
    reagents: [{ component: 'Phosphate Buffered Saline (PBS) with Tween-20', function: 'Wash buffer.' }],
    procedure: [
      'Run the ELISA assay manually or on an automated platform.',
      'Place the final 96-well plate in the reader.',
      'Select the filter (e.g., 450 nm for TMB substrate).',
      'The reader scans all wells in seconds and calculates results based on the standard curve.',
      'Store data as OD (Optical Density) and concentration.'
    ],
    observation: 'Colored wells (usually blue or yellow).',
    result: 'Quantitative antibody or antigen levels.',
    interpretation: 'Determines positivity for infectious diseases (HIV, Hep B) or hormones.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Standard equipment for all high-sensitivity immunology and serology testing.',
    sourcesOfError: ['"Incomplete washing" causing high background (False positive).', 'Bubbles in the wells.', 'Drying out of the plate.'],
    precautions: ['Ensure washer needles are not touching the bottom of the wells to avoid scratching the antigen coating.', 'Keep the reader level.'],
    normalVsAbnormal: 'Consistent results across duplicate wells (CV < 10%) verifies system stability.',
    applications: 'Hepatitis screening, HIV, Hormones, Infectious serology.',
    limitations: 'Susceptible to "Edge effects" if the plate is not incubated evenly.',
    examPoints: 'Format: 96-well plate. Wavelength: 450/630 nm. Washer: Prevents non-specific binding.',
    viva: [
      { q: 'Why is efficient washing critical in an ELISA?', a: 'To remove any unbound antibodies or antigens. Incomplete washing leads to high "background noise" and false positive results.' },
      { q: 'How is a "Standard Curve" used in ELISA readers?', a: 'Known concentrations (standards) are plotted as Absorbance vs Concentration; the reader then calculates the concentration of unknown patient samples from this curve.' }
    ],
    mcq: [
      { q: 'Standard ELISA plates have how many wells?', options: ['12', '24', '48', '96'], answer: 3 },
      { q: 'Wavelength commonly used for TMB substrate in ELISA is?', options: ['200 nm', '450 nm', '700 nm', '1000 nm'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Benedicts_test.png/640px-Benedicts_test.png'
    }
  },
  {
    id: 'ins-fluo-micro',
    title: 'Fluorescence Microscope',
    isImportant: false,
    definition: 'Microscope using high-intensity light (UV) to excite fluorescent molecules in the specimen.',
    principle: 'Stokes Shift. The specimen is stained with a "Fluorochrome" (e.g., FITC). High-energy UV light (excitation) hits the specimen. The fluorochrome absorbs this energy and emits it back as lower-energy, longer-wavelength visible light (emission). A barrier filter ensures only the emitted light reaches the eye.',
    mechanism: 'Epifluorescence (Light shining from above).',
    components: ['Mercury or LED light source', 'Excitation filters', 'Dichroic mirror', 'Barrier filters', 'Darkroom environment'],
    calibration: [
      'Alignment of the mercury lamp arc.',
      'Verification of intensity using standardized fluorescent beads.'
    ],
    maintenance: [
      'Monitor bulb hours; Mercury lamps can explode if used beyond their rated lifespan.',
      'Never touch the UV lamp with bare hands (oils cause hot-spots).',
      'Keep the optical filters dry and dust-free.',
      'Allow the lamp to cool for 30 mins before restarting.'
    ],
    qualityControl: 'Daily use of known positive and negative Control Slides (e.g., for ANA).',
    specimen: 'Slides stained with fluorescent antibodies.',
    reagents: [{ component: 'Fluorescent Mounting Medium', function: 'Prevents "Photobleaching" (fading).' }],
    procedure: [
      'Prepare slides in a dark or dim room.',
      'Switch on the UV light source.',
      'Select the appropriate filter cube (e.g., Blue-Green for FITC).',
      'Focus the specimen looking for characteristic glowing patterns.',
      'Photograph immediately (fluorescence fades rapidly under light).'
    ],
    observation: 'Bright glowing structures (Apple-green or Red) against a pitch-black background.',
    result: 'Confirmation of specific antigen-antibody binding.',
    interpretation: 'Example: Homogeneous pattern in ANA = Systemic Lupus (SLE).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Mandatory for Autoimmune testing (ANA, ANCA) and specialized Microbiology (DFA for Rabies or Syphilis).',
    sourcesOfError: ['"Autofluorescence" of the tissue itself.', 'Photobleaching due to over-exposure.', 'Incorrect filter choice.'],
    precautions: ['Always use eye protection (built-in barriers) against UV light.', 'Read as soon as the stain is finished.'],
    normalVsAbnormal: 'A "Positive" result shows specific localized glowing (e.g. Nucleus or Cytoplasm).',
    applications: 'Immunopathology, Virology.',
    limitations: 'High cost and requirement for expensive, unstable reagents.',
    examPoints: 'Stokes Shift: Excitation < Emission wavelength. Light: Mercury. Filter: Barrier.',
    viva: [
      { q: 'What is the "Stokes Shift"?', a: 'The difference in wavelength between the absorbed excitation light and the emitted fluorescence light; the emitted light always has a longer wavelength and lower energy.' },
      { q: 'Why is ANA testing done in a dark room?', a: 'To maximize the contrast of the faint fluorescent signal against the background and to prevent the ambient light from fading (bleaching) the stain.' }
    ],
    mcq: [
      { q: 'In fluorescent microscopy, the result is seen against which background?', options: ['Bright white', 'Dull grey', 'Pitch Black', 'Red'], answer: 2 },
      { q: 'Most common light source for a fluorescence microscope is?', options: ['Tungsten bulb', 'Mercury vapor lamp', 'Laser', 'Ambient light'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-hplc',
    title: 'High Performance Liquid Chromatography (HPLC)',
    isImportant: false,
    definition: 'Sophisticated analytical technique used to separate, identify, and quantify each component in a mixture.',
    principle: 'A liquid solvent (Mobile Phase) carries the sample through a column filled with tiny particles (Stationary Phase). Different molecules move at different speeds depending on their chemical affinity for the stationary phase, leading to separation.',
    mechanism: 'High-pressure liquid mass transport and molecular partition.',
    components: ['Solvent reservoir', 'High-pressure pump', 'Injector', 'C18 Column', 'Detector (UV or Fluorescence)', 'Data integrator/PC'],
    calibration: [
      'Flow rate calibration of the pump.',
      'Check of "Retention Time" stability using a standard mixture.',
      'Detector linearity check.'
    ],
    maintenance: [
      'Always filter the mobile phase and sample through a 0.22-micron filter to prevent column clogging.',
      'Flush the column with an organic solvent (Methanol/Acetonitrile) after every run.',
      'Monitor "Back-pressure" readings; high pressure means a clogged column.',
      'Degas the solvent (remove air bubbles) before use.'
    ],
    qualityControl: 'Inclusion of a "Blank" and "Daily Standard" to check retention time.',
    specimen: 'Serum, Hemolysate, or Urine.',
    reagents: [{ component: 'Acetonitrile / Methanol / Burrer', function: 'Mobile phase.' }],
    procedure: [
      'Equilibrate the column with the mobile phase.',
      'Inject 10-20 µl of the prepared sample.',
      'Record the "Chromatogram".',
      'Identify peaks by their retention time.',
      'Calculate concentration from the "Area under the Peak".'
    ],
    observation: 'Series of peaks on a graph (Chromatogram).',
    result: 'Quantitative level of specific molecules.',
    interpretation: 'Identification of abnormal hemoglobin variants or drug levels.',
    referenceRange: 'Application specific.',
    clinicalSignificance: 'The Gold Standard for HbA1c (Diabetes) and measurement of Therapeutic Drug Levels (TDM).',
    sourcesOfError: ['Air bubbles in the pump.', 'Column contamination.', 'Incorrect mobile phase pH.'],
    precautions: ['Use only HPLC-grade reagents and ultra-pure water.'],
    normalVsAbnormal: 'Precise separation of HbA, HbF, and HbS peaks in sickle cell anemia.',
    applications: 'Pharmacology, Endocrinology (HbA1c).',
    limitations: 'High initial cost and expensive columns.',
    examPoints: 'Gold standard for HbA1c. Mobile phase: Liquid. Column: Stationary phase.',
    viva: [
      { q: 'What is the "Retention Time" in HPLC?', a: 'The specific time it takes for a molecule to travel through the column from injection to the detector.' },
      { q: 'What is the stationary phase typically used for routine reverse-phase HPLC?', a: 'C18 (Octadecylsilane) silica particles.' }
    ],
    mcq: [
      { q: 'Gold standard method for measuring HbA1c is?', options: ['Electrophoresis', 'HPLC', 'Dipstick', 'Titration'], answer: 1 },
      { q: 'Which phase moves through the column in HPLC?', options: ['Stationary phase', 'Mobile phase', 'Solid phase', 'Gas phase'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-pcr',
    title: 'Thermal Cycler (PCR Machine)',
    isImportant: true,
    definition: 'Laboratory apparatus used to amplify small segments of DNA via the Polymerase Chain Reaction (PCR).',
    principle: 'Uses precise temperature cycling to facilitate Denaturation (95°C), Annealing (55°C), and Extension (72°C). High-performance Peltier blocks allow rapid and extremely accurate temperature shifts needed for millions of DNA copies to be made.',
    mechanism: 'Peltier-based thermal cycling.',
    components: ['Heating block', 'Heated lid (prevents evaporation)', 'Microprocessor control', 'Interface screen'],
    calibration: [
      'Verification of temperature accuracy in each individual well using a multi-channel probe.',
      'Check of "Heating/Cooling ramp rates" to ensure speed of cycling.',
      'Diagnostic software self-test.'
    ],
    maintenance: [
      'Clean the wells of the thermal block with 10% bleach, then alcohol, to remove DNA contamination.',
      'Dust the heat-sink and fan filters monthly to prevent overheating.',
      'Check that the heated lid is applying even pressure to all tubes.',
      'Ensure the machine is in a vibration-free, clean environment.'
    ],
    qualityControl: 'Always include a Positive Control, a Negative Control, and a "No-Template Control" (NTC) in every PCR run.',
    specimen: 'Extracted DNA or RNA.',
    reagents: [{ component: 'Master Mix (Taq Polymerase, dNTPs, Buffer)', function: 'Reaction cocktail.' }],
    procedure: [
      'Place the PCR tubes containing the reaction mixture in the block.',
      'Close and lock the heated lid.',
      'Program the cycle: e.g., 95°C (1 min) -> 58°C (1 min) -> 72°C (1 min) for 30 cycles.',
      'Start the run.',
      'Confirm the amplified DNA by gel electrophoresis or Real-Time detection.'
    ],
    observation: 'Display showing current temperature and cycle number.',
    result: 'Amplified DNA product.',
    interpretation: 'Detection of pathogens at the molecular/genetic level.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Ultimate diagnosis for viral infections (HIV, HCV, COVID-19) and genetic disorders.',
    sourcesOfError: ['Contamination (even a single DNA molecule of contamination can cause a fake positive).', 'Poor primer design.', 'Inaccurate annealing temperature.'],
    precautions: ['Work in separate "Pre-PCR" and "Post-PCR" areas to avoid cross-contamination.', 'Always wear gloves.'],
    normalVsAbnormal: 'Presence of a band at the correct size confirms a positive infection.',
    applications: 'Infectious disease, Forensics, Genetics.',
    limitations: 'Highly sensitive to contamination; requires expensive reagents.',
    examPoints: 'Cycles: Denature (95), Anneal (50-60), Extend (72). Enzyme: Taq Polymerase.',
    viva: [
      { q: 'Why is the lid of a thermal cycler heated?', a: 'To prevent the sample from evaporating and condensing on the top of the tube, which would change the concentration of the reagents in the reaction.' },
      { q: 'Name the three basic temperature steps in a PCR cycle.', a: '1. Denaturation (~95°C), 2. Annealing (~55°C), 3. Extension (~72°C).' }
    ],
    mcq: [
      { q: 'The enzyme used in PCR that is stable at high temperatures is?', options: ['RNA Polymerase', 'Taq Polymerase', 'Ligase', 'Helicase'], answer: 1 },
      { q: 'Which step happens at usually 95°C?', options: ['Annealing', 'Extension', 'Denaturation', 'Priming'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
