export const immunologyData6 = [
  {
    id: 'imm-ana-if',
    title: 'ANA by Indirect Immunofluorescence',
    isImportant: true,
    definition: 'Golden-standard screening test for detecting antinuclear antibodies against various nuclear antigens.',
    principle: 'Patient serum is incubated with a substrate containing nucleated cells (HEp-2 cell line). If ANA are present, they bind to the cell nuclei (Phase 1). After washing, an Anti-human IgG conjugated with Fluorescein Isothiocyanate (FITC) is added (Phase 2). If antibodies bind, the nuclei glow apple-green under a fluorescence microscope.',
    mechanism: 'Two-step "Sandwich" Fluorescence Immunoassay.',
    types: ['Indirect Immunofluorescence (IIF)'],
    specimen: 'Serum (Fresh).',
    reagents: [
      { component: 'HEp-2 Cell line substrate', function: 'Source of human nuclear antigens.' },
      { component: 'FITC-conjugated Anti-IgG', function: 'Fluorescent signal marker.' }
    ],
    equipment: ['Fluorescence Microscope (Mercury lamp)', 'Dark room'],
    procedure: [
      'Pipette 50 µl of diluted serum onto a HEp-2 substrate slide.',
      'Incubate at room temperature for 30 minutes in a dark, moist chamber.',
      'Wash thoroughly with PBS (Phosphate Buffered Saline).',
      'Add FITC-conjugated secondary antibody and incubate for 30 minutes.',
      'Wash again and mount with buffered glycerol.',
      'Observe under fluorescence microscope.'
    ],
    observation: 'Specific apple-green fluorescence patterns (Homogeneous, Speckled, Nucleolar, Centromere).',
    result: 'Report pattern and the highest dilution (titer) showing fluorescence.',
    interpretation: 'Homogeneous pattern = SLE; Speckled = Sjogren/SLE; Centromere = CREST syndrome.',
    referenceRange: 'Negative (Titer < 1:40 or 1:80).',
    clinicalSignificance: 'Mandatory screen for suspected systemic autoimmune diseases (Connective Tissue Disorders).',
    sourcesOfError: ['Over-washing (strips antibody).', 'Photobleaching (fading of fluorescence due to light exposure).'],
    precautions: ['Always read the slide immediately after staining.', 'Check for "non-specific" staining of the cytoplasm.'],
    normalVsAbnormal: 'Abnormal: Bright fluorescent nuclei against a dark background.',
    applications: 'Rheumatology diagnostics.',
    limitations: 'Subjective; requires expertise in pattern identification.',
    examPoints: 'Substrate: HEp-2 cells. Dye: FITC (Apple-green). Pattern = Clue to specific disease.',
    viva: [
      { q: 'What is the "Gold Standard" substrate for the ANA test?', a: 'HEp-2 cells (Human Epithelioma type 2).' },
      { q: 'Why is it called "Indirect" immunofluorescence?', a: 'Because the patient\'s antibody is not directly labeled; instead, a labeled secondary antibody is used for detection.' }
    ],
    mcq: [
      { q: 'The most common fluorescent dye used in ANA tests is?', options: ['Eosin', 'FITC', 'Methylene Blue', 'Crystal Violet'], answer: 1 },
      { q: 'A homogeneous (diffuse) ANA pattern is highly suggestive of?', options: ['Gout', 'SLE', 'HIV', 'Diabetes'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'imm-flow-cytometry',
    title: 'Flow Cytometry (CD4/CD8 Counting Principle)',
    isImportant: true,
    definition: 'Technique that uses lasers to count and characterize cells in a fluid stream based on physical and immunological properties.',
    principle: 'Cells are labeled with fluorescent-tagged monoclonal antibodies (e.g., Anti-CD4). Cells pass one-by-one through a laser beam. The laser scatter (Forward and Side scatter) determines cell size and complexity. The laser also excites the labels, and the emitted light is measured to identify specific cell types.',
    mechanism: 'Laser excitation and photoelectric detection of fluid-suspended particles.',
    types: ['CD4/CD8 T-cell enumeration'],
    specimen: 'EDTA whole blood (Fresh, <24 hours).',
    reagents: [{ component: 'Monoclonal antibody cocktail (CD3/CD4/CD8)', function: 'Specific marker binding.' }],
    equipment: ['Flow Cytometer (e.g. BD FACS)', 'Vortex mixer'],
    procedure: [
      'Incubate whole blood with specific fluorescent antibodies.',
      'Add RBC lysis buffer to remove erythrocytes.',
      'Wash and resuspend in buffer.',
      'Acquire sample on the Flow Cytometer.',
      'Perform "Gating" analysis on the computer to isolate the T-cell population.'
    ],
    observation: 'Digital dot plots and histograms.',
    result: 'Absolute count of cells per microliter and the percentage.',
    interpretation: 'Normal CD4 count is 500-1500 cells/µl. Levels < 200 define AIDS.',
    referenceRange: 'CD4: 500 - 1500/µl | CD4/CD8 Ratio: 2:1.',
    clinicalSignificance: 'The essential tool for monitoring HIV progression and determining when to start ARV therapy.',
    sourcesOfError: ['Clotted samples.', 'Delayed processing (>48 hrs) causing cell death.'],
    precautions: ['Proper "Compensating" for overlap between different fluorescent dyes.'],
    normalVsAbnormal: 'In AIDS, the CD4/CD8 ratio is "inverted" (<1.0).',
    applications: 'HIV monitoring, Leukemia/Lymphoma immunophenotyping.',
    limitations: 'High equipment and reagent cost; requires specialized training.',
    examPoints: 'Uses Laser. Forward Scatter = Size. Side Scatter = Granularity.',
    viva: [
      { q: 'What does "Forward Scatter" (FSC) measure in flow cytometry?', a: 'Cell size.' },
      { q: 'What level of CD4 count is used to define AIDS?', a: '< 200 cells/µl.' }
    ],
    mcq: [
      { q: 'In flow cytometry, granularity and complexity of a cell are measured by?', options: ['Forward scatter', 'Side scatter', 'Light absorption', 'Weight'], answer: 1 },
      { q: 'The most common marker used to monitor HIV patients is?', options: ['CD20', 'CD4', 'CD19', 'CD56'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-mantoux',
    title: 'Tuberculin Test (Mantoux)',
    isImportant: true,
    definition: 'In-vivo screening test for delayed-type hypersensitivity (DTH) against Mycobacterium tuberculosis antigens.',
    principle: 'Purified Protein Derivative (PPD) is injected intradermally. If the patient was previously exposed (infected/vaccinated), sensitized T-cells migrate to the site and release cytokines, causing a localized hard swelling (induration) after 48-72 hours.',
    mechanism: 'Type IV Hypersensitivity (Delayed T-cell mediated).',
    types: ['Tuberculin Skin Test (TST)'],
    specimen: 'N/A (Patient\'s skin).',
    reagents: [{ component: 'PPD (Purified Protein Derivative)', function: 'Standardized antigen (Usually 5 TU/0.1ml).' }],
    equipment: ['Tuberculin syringe', '26-gauge needle', 'Millimeter ruler'],
    procedure: [
      'Inject exactly 0.1 ml of PPD intradermally into the volar surface of the forearm.',
      'A small "wheal" (6-10mm) should form immediately.',
      'Mark the site but do not cover with a bandage.',
      'Ask the patient to return after 48 to 72 hours.',
      'Measure only the INDURATION (hardness), not the erythema (redness).'
    ],
    observation: 'A palpable, raised, hard area at the injection site.',
    result: 'Report in millimeters (mm) of induration.',
    interpretation: 'In healthy individuals, >10mm is considered positive. In HIV patients, >5mm is positive.',
    referenceRange: '< 5 mm.',
    clinicalSignificance: 'Indicates "Exposure" to TB; it does NOT distinguish between latent infection and active disease.',
    sourcesOfError: ['Subcutaneous injection instead of intradermal.', 'Measuring redness instead of hardness.'],
    precautions: ['Record the date and time of injection accurately.'],
    normalVsAbnormal: 'A "Positive" result does not mean the person has TB; it means their immune system recognizes the antigen.',
    applications: 'Screening for latent tuberculosis.',
    limitations: 'BCG vaccination can cause a false positive result.',
    examPoints: 'Type IV Hypersensitivity. Read after 48-72 hours. Measure induration only.',
    viva: [
      { q: 'Which type of hypersensitivity is involved in the Mantoux test?', a: 'Type IV (Delayed-type) hypersensitivity.' },
      { q: 'How is the result of the Mantoux test measured?', a: 'By measuring the diameter of the induration (hardness) using a ruler, perpendicular to the axis of the forearm.' }
    ],
    mcq: [
      { q: 'Mantoux test PPD is injected by which route?', options: ['IV', 'IM', 'Subcutaneous', 'Intradermal'], answer: 3 },
      { q: 'The standard time to read a Mantoux test is?', options: ['10 mins', '2 hours', '48-72 hours', '1 week'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-clia',
    title: 'Chemiluminescence Immunoassay (CLIA) Principle',
    isImportant: true,
    definition: 'Highly sensitive automated immunoassay technique that uses a chemical reaction to produce light as a signal.',
    principle: 'Similar to ELISA, but the enzyme or label (e.g., luminol or acridinium ester) produces light instead of color when stimulated by a trigger. The intensity of emitted light (photons) is measured by a photomultiplier tube and is proportional to the concentration.',
    mechanism: 'Emission of light energy from a chemical reaction (Electromagnetic radiation).',
    types: ['Direct CLIA', 'Enzyme Amplified CLIA'],
    specimen: 'Serum.',
    reagents: [{ component: 'Chemiluminescent tracer', function: 'Generates light signal.' }],
    equipment: ['Automated CLIA analyzer', 'Luminometer'],
    procedure: [
      'Load sample into the analyzer.',
      'Antigen-antibody binding occurs on magnetic beads or tubes.',
      'Wash steps remove unbound substances.',
      'Trigger reagent is added.',
      'Light emission is captured in a dark chamber.',
      'Digital result generated.'
    ],
    observation: 'Light output measured as RLU (Relative Light Units).',
    result: 'Quantitative digital result.',
    interpretation: 'Extremely high sensitivity (detects down to picograms/ml).',
    referenceRange: 'Test specific.',
    clinicalSignificance: 'Standard method for Thyroid hormones (T3/T4/TSH), Fertility hormones, and Troponin.',
    sourcesOfError: ['Air bubbles in reagent lines.', 'Light leaks in the measurement chamber.'],
    precautions: ['Maintain strict temperature control of reagents.'],
    normalVsAbnormal: 'More accurate and faster than ELISA.',
    applications: 'Hormone assays, Cardiac markers, Vitamin D.',
    limitations: 'High equipment cost; closed-system reagents.',
    examPoints: 'Uses Light (Photons). Signal is RLU. Highly sensitive.',
    viva: [
      { q: 'What is the advantage of CLIA over ELISA?', a: 'Much higher sensitivity (can detect extremely low concentrations) and faster turnaround time due to automation.' },
      { q: 'What is RLU?', a: 'Relative Light Units - the unit of measurement for light intensity in CLIA.' }
    ],
    mcq: [
      { q: 'Which method uses light emission as a signal?', options: ['Agglutination', 'ELISA', 'CLIA', 'Precipitation'], answer: 2 },
      { q: 'CLIA is commonly used for?', options: ['Glucose', 'Hormones', 'Urea', 'Uric acid'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'imm-ria',
    title: 'Radioimmunoassay (RIA) Concept',
    isImportant: false,
    definition: 'Pioneering ultra-sensitive analytical technique that uses radioactive isotopes to measure extremely low concentrations of substances.',
    principle: 'Based on competitive binding. A known amount of radioactive-labeled antigen ("Hot") competes with an unknown amount of unlabeled patient antigen ("Cold") for a limited number of antibody binding sites. The more patient antigen present, the less radioactive antigen can bind.',
    mechanism: 'Competitive isotopic binding.',
    types: ['Double antibody RIA', 'Solid phase RIA'],
    specimen: 'Serum.',
    reagents: [{ component: 'Radioactive Isotope (e.g. Iodine-125)', function: 'Tracer signal.' }],
    equipment: ['Gamma Counter', 'Lead-shielded containers'],
    procedure: [
      'Mix patient serum (unlabeled Ag) + Radioactive Labeled Ag + Specific Antibody.',
      'Incubate to allow competition.',
      'Separate Ag-Ab complexes from free Ag.',
      'Measure radioactivity in the bound fraction using a Gamma counter.',
      'Plot standard curve (Inversely proportional).'
    ],
    observation: 'Radioactivity counts per minute (CPM).',
    result: 'Inverse relationship: Higher radioactivity = Lower patient antigen.',
    interpretation: 'Allows detection of substances at nanoscale/picoscale.',
    referenceRange: 'Test specific.',
    clinicalSignificance: 'Historical gold standard for insulin, GH, and other trace hormones.',
    sourcesOfError: ['Isotopic decay (half-life issues).', 'Radiation shielding leaks.'],
    precautions: ['Strict regulatory compliance for radioactive material handling.', 'Risk of radiation exposure to staff.'],
    normalVsAbnormal: 'Replaced by non-radioactive CLIA in most modern labs.',
    applications: 'Endocrinology (Legacy).',
    limitations: 'Disposal of radioactive waste; short reagent shelf life.',
    examPoints: 'Uses Isotopes (I-125). Highly sensitive. Inversely proportional.',
    viva: [
      { q: 'In RIA, is radioactivity proportional or inversely proportional to the patient antigen?', a: 'Inversely proportional (More patient antigen = Less radioactive antigen binding).' },
      { q: 'Why is RIA rarely used today?', a: 'Due to the hazards of handling radioactive materials and the availability of safer, equally sensitive methods like CLIA.' }
    ],
    mcq: [
      { q: 'Which isotope is most commonly used in RIA?', options: ['Carbon-14', 'Iodine-125', 'Tritium', 'Lead-210'], answer: 1 },
      { q: 'Radioactivity is measured in which counter?', options: ['Geiger', 'Scintillation / Gamma counter', 'Colorimeter', 'ELISA reader'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
