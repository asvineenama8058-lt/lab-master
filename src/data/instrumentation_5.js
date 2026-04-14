export const instrumentationData5 = [
  {
    id: 'ins-spectrophotometer',
    title: 'UV-Visible Spectrophotometer',
    isImportant: true,
    definition: 'Advanced optical instrument used to measure the intensity of light as a function of wavelength.',
    principle: 'Uses a diffraction grating or prism (monochromator) to isolate a specific, narrow wavelength of light from a broad-spectrum light source. It can measure absorbance in both the Visible (340-700nm) and Ultraviolet (200-340nm) ranges.',
    mechanism: 'Photon detection by a photomultiplier tube (PMT).',
    components: ['Light sources (Tungsten and Deuterium)', 'Monochromator', 'Sample holder (Cuvette)', 'Detector', 'Digital processor'],
    calibration: [
      'Wavelength accuracy check using Didymium or Holmium Oxide filters.',
      'Photometric accuracy using Potassium Dichromate solutions.',
      'Stray light check.'
    ],
    maintenance: [
      'Warm up the lamps for at least 30 minutes before use.',
      'Clean the monochromator mirrors (by authorized service personnel only).',
      'Always use Quartz cuvettes for UV measurements (plastic/glass absorb UV).',
      'Change lamps when they reach their specified hours of use.'
    ],
    qualityControl: 'Daily measurement of a known standard solution.',
    specimen: 'Colored or colorless chemical solutions.',
    reagents: [{ component: 'Deionized water', function: 'Reagent blank.' }],
    procedure: [
      'Select the appropriate light source (Vis or UV).',
      'Set the required wavelength (e.g., 340 nm for NADH assays).',
      'Zero the instrument with a blank.',
      'Read the absorbance of the test sample.',
      'Construct a calibration curve if necessary.'
    ],
    observation: 'Display of Absorbance (A) or Transmittance (%T).',
    result: 'Precise measurement of molecular concentration.',
    interpretation: 'N/A',
    referenceRange: 'N/A',
    clinicalSignificance: 'Gold standard for kinetic enzymatic assays (ALT, AST, LDH) and DNA/RNA quantification.',
    sourcesOfError: ['Fingerprints on cuvette windows.', 'Drifting lamp intensity.', 'Inaccurate wavelength setting.'],
    precautions: ['Never touch the optical surfaces of cuvettes.', 'Ensure sample is homogeneous before reading.'],
    normalVsAbnormal: 'Linearity check is essential for high concentrations.',
    applications: 'Molecular biology and Clinical chemistry.',
    limitations: 'More complex and expensive than a colorimeter.',
    examPoints: 'UV source: Deuterium lamp. Vis source: Tungsten lamp. UV cuvette: Quartz.',
    viva: [
      { q: 'What light source is used for Ultraviolet (UV) measurements?', a: 'Deuterium lamp.' },
      { q: 'Why shouldn\'t you use glass cuvettes for UV light?', a: 'Because glass absorbs light in the UV spectrum (below 340nm), which would block the measurement of the sample.' }
    ],
    mcq: [
      { q: 'Wavelength range of Visible light is approx?', options: ['200-340 nm', '400-700 nm', '800-1200 nm', 'X-ray range'], answer: 1 },
      { q: 'Quartz cuvettes are essential for measurements at?', options: ['540 nm', '340 nm', '260 nm (UV)', '630 nm'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-semi-auto',
    title: 'Semi-Auto Biochemistry Analyzer',
    isImportant: true,
    definition: 'Computerized photometer equipped with aspiration and incubation systems for clinical chemistry assays.',
    principle: 'Combines a spectrophotometer with a microchip and software. The operator manually mixes reagents and samples, but the instrument automatically aspirates the fluid, measures absorbance, and calculates the concentration based on pre-programmed parameters.',
    mechanism: 'Flow-cell based colorimetry.',
    components: ['Aspiration probe', 'Flow cell', 'Peristaltic pump', 'LCD screen', 'Thermal printer', 'Incubator block'],
    calibration: [
      'Calibration of the peristaltic pump volume.',
      'Use of factor-based calculation or dynamic standard curves.',
      'Daily zeroing with distilled water.'
    ],
    maintenance: [
      'Wash the flow cell with a detergent (hypochlorite) daily to prevent protein buildup.',
      'Ensure the aspiration tube is not kinked.',
      'Replace the pump tubing every 6 months.',
      'Perform "Air-Water gap" check to ensure correct aspiration.'
    ],
    qualityControl: 'Daily run of Level 1 (Normal) and Level 2 (Pathological) control sera.',
    specimen: 'Serum, Plasma, or Urine.',
    reagents: [{ component: 'Specific Assay Kits', function: 'Chemical reaction.' }],
    procedure: [
      'Select the test from the menu (e.g., Glucose).',
      'Aspirate Distilled Water (Blanking).',
      'Mix sample and reagent in a test tube as per the kit insert.',
      'Incubate if required.',
      'Present the tube to the aspiration probe and press the trigger.',
      'Wait for the concentration result on the screen.'
    ],
    observation: 'Result displayed in biological units (e.g., mg/dl or U/L).',
    result: 'Quantitative clinical chemistry result.',
    interpretation: 'Directly aids in clinical diagnosis.',
    referenceRange: 'Assay specific.',
    clinicalSignificance: 'Standard instrument in medium-sized labs for measuring Glucose, Liver Profile, Kidney Profile, etc.',
    sourcesOfError: ['"Carryv-over" from the previous sample.', 'Air bubbles trapped in the flow cell.', 'Clogged probe.'],
    precautions: ['Always rinse between samples.', 'Check for reagent expiry.'],
    normalVsAbnormal: 'Out-of-range QC indicates the analyzer needs re-calibration.',
    applications: 'Routine Clinical Chemistry.',
    limitations: 'Labor-intensive (requires manual pipetting).',
    examPoints: 'Heart of machine: Flow cell. Maintenance: Daily wash. QC: Control sera.',
    viva: [
      { q: 'What is a "Flow Cell"?', a: 'A special type of cuvette that stays fixed inside the machine; the sample is sucked into it, measured, and then flushed out.' },
      { q: 'Why is a daily wash with detergent essential?', a: 'To remove any proteins or dye that might have stuck to the walls of the flow cell, which would cause inaccurate readings.' }
    ],
    mcq: [
      { q: 'In a semi-auto analyzer, which step is done manually?', options: ['Aspiration', 'Absorbance reading', 'Mixing of sample and reagent', 'Calculation of result'], answer: 2 },
      { q: 'Poor aspiration is usually caused by a fault in the?', options: ['Condenser', 'Peristaltic pump', 'Light source', 'Display monitor'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-full-auto',
    title: 'Fully Automated Biochemistry Analyzer',
    isImportant: true,
    definition: 'High-throughput robotic system that performs all laboratory steps automatically from pipetting to result reporting.',
    principle: 'Utilizes a "Random Access" system with robotic arms and probes. Multiple tests can be performed on multiple patients simultaneously using a disk or tray of reagents and samples.',
    mechanism: 'Robotic automation of all analytical phases.',
    components: ['Sample tray', 'Reagent tray', 'Reaction rotor', 'Incubator', 'Mixers/Stirrers', 'Wash station for cuvettes'],
    calibration: [
      'Multi-point calibration using certified calibrators for each parameter.',
      'Calibration is stored in the software and verified by QC runs.'
    ],
    maintenance: [
      'Daily: Clean sample and reagent probes; check wash solutions.',
      'Weekly: Acid/Alkali wash of the reaction rotor; rinse water change.',
      'Bi-annual: Professional service check of robotic moving parts.',
      'Monitoring of lamp energy levels.'
    ],
    qualityControl: 'Automatic QC scheduling and Levey-Jennings (LJ) chart monitoring.',
    specimen: 'Primary tubes (Barcoded serum/plasma).',
    reagents: [{ component: 'Dedicated reagents', function: 'Bulk supply for multiple tests.' }],
    procedure: [
      'Load barcoded patient tubes into the sample disk.',
      'Initiate "Run" on the computer.',
      'The machine automatically identifies the test needed from the barcode.',
      'Robotic probe picks sample and reagent, mixes them in a reaction cuvette.',
      'Absorbance is monitored over time (Kinetic) or at target time (Endpoint).',
      'Result is transmitted to the Laboratory Information System (LIS).'
    ],
    observation: 'Real-time monitoring of all reaction curves.',
    result: 'Large volume of precise patient data.',
    interpretation: 'Critical for large-scale clinical management.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Allows large hospitals to process thousands of samples per day with minimal human error.',
    sourcesOfError: ['Probe clogs due to fibrin clots.', 'Reagent depletion.', 'Mechanical robotic jams.'],
    precautions: ['Always ensure serum is well-centrifuged to avoid fibrin clots.', 'Never open the hood while the robotic arms are moving (safety risk).'],
    normalVsAbnormal: 'Machine automatically flags "Panic" or "Critical" values.',
    applications: 'Large diagnostic centers and hospitals.',
    limitations: 'High cost and complexity; needs specialized engineers.',
    examPoints: 'Random Access. High Throughput. Barcode compatibility. LIS integration.',
    viva: [
      { q: 'What does "Random Access" mean in automation?', a: 'It means the machine can perform any test for any patient at any time, regardless of the order they were loaded.' },
      { q: 'How does an automated analyzer prevent carry-over between patients?', a: 'By intensive washing of the sampling probe (internally and externally) with deionized water after every single pipetting step.' }
    ],
    mcq: [
      { q: 'Which system allows direct transfer of results to the hospital database?', options: ['Manual', 'Semi-auto', 'Laboratory Information System (LIS)', 'Paper record'], answer: 2 },
      { q: 'Automated analyzers use which type of logic?', options: ['Sequential', 'Random Access', 'Random only', 'Selective'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-ise',
    title: 'Electrolyte Analyzer (ISE)',
    isImportant: true,
    definition: 'Medical instrument used to determine the concentration of electrolytes like Sodium, Potassium, and Chloride in whole blood or serum.',
    principle: 'Based on Ion-Selective Electrodes (ISE). A membrane is designed to respond ONLY to one specific ion. When the sample flows over the electrode, a potential (voltage) is generated that is mathematically related to the concentration of that ion.',
    mechanism: 'Potentiometry via ion-specific membranes.',
    components: ['Sodium Electrode', 'Potassium Electrode', 'Chloride Electrode', 'Reference Electrode', 'Peristaltic pump', 'Reagent pack'],
    calibration: [
      'Two-point calibration (Standard A and Standard B) performed automatically every 4 or 8 hours.',
      'Slope verification for each electrode.'
    ],
    maintenance: [
      'Daily "Cleaning" cycle with a protein-removing agent.',
      'Check the reference electrode filling solution level.',
      'Replace the reagent pack before it reaches 0%.',
      'Replace the electrodes when the "Slope" falls below specified limits.'
    ],
    qualityControl: 'Three-level QC (Low, Mid, High) run daily.',
    specimen: 'Whole blood (Heparinized), Serum, or Plasma.',
    reagents: [{ component: 'Calibration Reagent Pack', function: 'Provides standards and waste container.' }],
    procedure: [
      'Select "Analyze Sample" on the touch screen.',
      'Aspirate the sample (using a syringe or tube) through the probe.',
      'The sample flows across the electrode series.',
      'Results are displayed in mEq/L or mmol/L.'
    ],
    observation: 'Immediate digital readout of Electrolyte levels.',
    result: 'Na+, K+, Cl- concentrations.',
    interpretation: 'Hyperkalemia (high K+) is a medical emergency.',
    referenceRange: 'Sodium: 135-145 mEq/L | Potassium: 3.5-5.0 mEq/L.',
    clinicalSignificance: 'Vital for monitoring patients on IV fluids, renal failure, and heart patients.',
    sourcesOfError: ['"Dead" electrodes.', 'Air bubbles in the sample.', 'Fibrin clot blocking the capillary tube.'],
    precautions: ['Ensure sample is not hemolyzed (hemolysis falsely increases Potassium results massively).'],
    normalVsAbnormal: 'Rapid notification of electrolyte imbalances to physicians.',
    applications: 'Emergency labs, ICUs.',
    limitations: 'Subject to interference by high lipids or proteins (pseudohyponatremia).',
    examPoints: 'Method: ISE (Ion Selective Electrode). Crucial: No Hemolysis. Unit: mEq/L.',
    viva: [
      { q: 'Why is it crucial that the blood sample is NOT hemolyzed for an electrolyte test?', a: 'Because Potassium is primarily an intracellular ion. If the RBCs burst (hemolysis), they release all their potassium into the serum, giving a falsely high and potentially dangerous result.' },
      { q: 'What is the "Reference electrode" doing?', a: 'It provides a stable, constant voltage against which the variable voltage of the ion-selective electrodes is compared.' }
    ],
    mcq: [
      { q: 'Electrolyte analyzers use which main principle?', options: ['Spectrophotometry', 'Ion-Selective Electrode (ISE)', 'ELISA', 'Centrifugation'], answer: 1 },
      { q: 'Normal serum Potassium range is?', options: ['0.5 - 1.0 mEq/L', '3.5 - 5.0 mEq/L', '135 - 145 mEq/L', '50-100 mEq/L'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ins-bga',
    title: 'Blood Gas Analyzer (ABG)',
    isImportant: true,
    definition: 'Point-of-care instrument measuring pH, pCO2, and pO2 in arterial blood.',
    principle: 'Uses three specific sensors: glass pH electrode, Severinghaus electrode (pCO2), and Clark polarographic electrode (pO2). It calculates acid-base balance and oxygenation status.',
    mechanism: 'Multi-parametric potentiometry and amperometry.',
    components: ['Teflon capillary series', 'Gas cylinders/Cartridge', 'Heated chamber (37°C)', 'Thermal printer'],
    calibration: [
      'Frequent "One-point" calibration (every 30 mins).',
      'Regular "Two-point" calibration using known gas mixtures.',
      'Electronic-liquid calibration (Modern cartridges).'
    ],
    maintenance: [
      'Replace the reagent cartridge when indicated.',
      'Monthly cleaning of the probe tip.',
      'Regular preventive replacement of O-rings and gas-selective membranes.',
      'Monitor for "Clot" alerts.'
    ],
    qualityControl: 'Daily "Ampoule-based" QC liquids.',
    specimen: 'Arterial Blood (collected in a heparinized syringe).',
    reagents: [{ component: 'Liquid-gas calibration pack', function: 'Standardization.' }],
    procedure: [
      'Aspirate 0.2 - 0.5 ml of heparinized arterial blood.',
      'Remove all air bubbles immediately.',
      'Inject into the analyzer probe (under anaerobic conditions).',
      'Results provided in <2 minutes.'
    ],
    observation: 'Display of pH, pO2, pCO2, HCO3-, and SaO2.',
    result: 'Complete acid-base and respiratory status.',
    interpretation: 'Identifies Respiratory or Metabolic Acidosis/Alkalosis.',
    referenceRange: 'pH: 7.35 - 7.45 | pCO2: 35-45 mmHg | pO2: 80-100 mmHg.',
    clinicalSignificance: 'Mandatory for managing patients on ventilators (ICU) and severe pulmonary disease.',
    sourcesOfError: ['Air bubbles in the syringe (increases pO2, decreases pCO2).', 'Using venous blood instead of arterial.', 'Delay in analysis (>15 mins without ice).'],
    precautions: ['Always use an airtight syringe.', 'Analyze STAT.'],
    normalVsAbnormal: 'Critical for weaning patients off respiratory support.',
    applications: 'ICU, Operation Theatre, ER.',
    limitations: 'Arterial puncture is painful and technique-sensitive.',
    examPoints: 'pCO2 sensor: Severinghaus. pO2 sensor: Clark. pH: Glass electrode. All kept at 37°C.',
    viva: [
      { q: 'Why is even a tiny air bubble in the ABG syringe dangerous?', a: 'The partial pressure of oxygen in air is higher than in blood, and CO2 is lower. The gas will exchange with the blood, giving a falsely high O2 and falsely low CO2 reading.' },
      { q: 'What is the "Clark electrode" measuring?', a: 'Partial pressure of Oxygen (pO2).' }
    ],
    mcq: [
      { q: 'pH of arterial blood is normally?', options: ['6.0 - 7.0', '7.35 - 7.45', '7.5 - 8.0', 'Neutral 7.0'], answer: 1 },
      { q: 'The pO2 electrode is also known as?', options: ['Glass electrode', 'Severinghaus electrode', 'Clark electrode', 'Calomel electrode'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
