export const biochemistryData3 = [
  {
    id: 'bio-bili-total',
    title: 'Estimation of Serum Bilirubin (Diazo Method)',
    isImportant: true,
    definition: 'Quantitative assay measuring Total and Direct Bilirubin to assess jaundice.',
    principle: 'Bilirubin reacts with diazotized sulfanilic acid (Diazo reagent) to form a pink/purple azobilirubin complex. Direct (conjugated) bilirubin reacts quickly in water. Total bilirubin (conjugated + unconjugated) requires an accelerator (methanol or caffeine) to solubilize the unconjugated fraction before reacting.',
    mechanism: 'Diazotization of the tetrapyrrole rings creating a colored chromogen.',
    types: ['Malloy-Evelyn (Methanol)', 'Jendrassik-Grof (Caffeine)'],
    specimen: 'Serum heavily protected from direct sunlight.',
    reagents: [
      { component: 'Diazo Reagent', function: 'Sulfanilic acid & Sodium Nitrite forming diazonium ion.' },
      { component: 'Methanol / Caffeine', function: 'Accelerator dissolving water-insoluble unconjugated bilirubin.' }
    ],
    equipment: ['Spectrophotometer'],
    procedure: [
      'For Total: Add serum, Diazo reagent, and Methanol into tube.',
      'For Direct: Add serum, Diazo reagent, and ONLY distilled water (No Methanol).',
      'Mix and incubate at Room Temp for exactly 5 minutes (Direct) or 15 mins (Total).',
      'Read absorbance at 540 nm against respective Blanks.'
    ],
    observation: 'Development of an intense pink/purple color.',
    result: 'Total and Direct Bilirubin reported in mg/dL. Indirect = Total - Direct.',
    interpretation: 'Differential diagnosis of Pre-hepatic (Hemolytic), Hepatic, and Post-hepatic Jaundice.',
    referenceRange: 'Total: 0.2 - 1.0 mg/dL | Direct: 0.1 - 0.3 mg/dL',
    clinicalSignificance: 'Diagnostic foundation for all Liver Function Tests (LFTs).',
    sourcesOfError: ['Light exposure oxidizes bilirubin to biliverdin, causing false negatives.'],
    precautions: ['Process samples strictly in dim light and rapidly.'],
    normalVsAbnormal: 'High Direct = Obstructive Jaundice. High Indirect = Hemolytic Jaundice.',
    applications: 'Hepatobiliary profiling.',
    limitations: 'Severe hemolysis strongly interferes photometrically.',
    examPoints: 'Direct bilirubin is water-soluble (conjugated). Indirect requires an accelerator.',
    viva: [
      { q: 'What is Diazo reagent?', a: 'Sulfanilic acid + Sodium Nitrite + HCl.' },
      { q: 'Why use an accelerator?', a: 'To dissolve lipid-soluble unconjugated bilirubin.' },
      { q: 'What is conjugated bilirubin?', a: 'Bilirubin attached to glucuronic acid in the liver to make it water soluble.' }
    ],
    mcq: [
      { q: 'Diazo reagent actively reacts with bilirubin forming:', options: ['Azobilirubin', 'Biliverdin', 'Urobilin', 'Stercobilin'], answer: 0 },
      { q: 'Accelerator used in Malloy-Evelyn method?', options: ['Caffeine', 'Methanol', 'Acetic acid', 'DMSO'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Jaundice08.jpg'
    }
  },
  {
    id: 'bio-alt',
    title: 'Estimation of ALT / SGPT',
    isImportant: true,
    definition: 'Specific liver enzyme assay for identifying hepatocellular damage.',
    principle: 'Alanine Aminotransferase (ALT) transfers an amino group from L-Alanine to Alpha-ketoglutarate forming Pyruvate. Pyruvate reacts with 2,4-DNPH forming a hydrazone complex, which turns red/brown in an alkaline medium (NaOH).',
    mechanism: 'Transamination coupled completely with colorimetric dye condensation.',
    types: ['Reitman-Frankel End Point'],
    specimen: 'Serum.',
    reagents: [
      { component: 'ALT Substrate', function: 'Provides L-Alanine and Alpha-Ketoglutarate.' },
      { component: '2,4-DNPH Reagent', function: 'Color forming agent.' },
      { component: 'Sodium Hydroxide', function: 'Alkaline developer.' }
    ],
    equipment: ['Spectrophotometer', '37°C Water bath'],
    procedure: [
      'Incubate 0.5 ml ALT substrate at 37°C.',
      'Add 100 µl serum and incubate exactly 30 minutes.',
      'Add 2,4-DNPH, let stand for 20 minutes.',
      'Add NaOH, wait 5 minutes, read at 505 nm.'
    ],
    observation: 'Development of red-brown color.',
    result: 'ALT/SGPT Activity = U/L.',
    interpretation: 'Massive elevations strictly indicate viral hepatitis or toxic liver necrosis.',
    referenceRange: '5 - 40 U/L',
    clinicalSignificance: 'Most specific enzymatic marker purely for liver damage.',
    sourcesOfError: ['Not maintaining strictly 37°C destroys kinetic enzyme activity.'],
    precautions: ['Incubate exactly 30 minutes (unlike 60 min for AST).'],
    normalVsAbnormal: 'ALT is more liver-specific than AST.',
    applications: 'Hepatitis diagnostics.',
    limitations: 'Less useful for cardiac diagnostics (contains little ALT).',
    examPoints: 'Substrate is Alanine. Incubation is 30 mins.',
    viva: [
      { q: 'Why is ALT more specific to liver than AST?', a: 'AST is also heavily present in heart and muscle. ALT is predominantly in liver cytoplasm.' }
    ],
    mcq: [
      { q: 'SGPT is formally known as:', options: ['AST', 'ALT', 'ALP', 'LDH'], answer: 1 },
      { q: 'Direct product formed in ALT transamination?', options: ['Oxaloacetate', 'Pyruvate', 'Urea', 'Acetate'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Tartrazine-3D-vdW.png'
    }
  },
  {
    id: 'bio-alp',
    title: 'Estimation of Alkaline Phosphatase (ALP)',
    isImportant: true,
    definition: 'Enzyme assay measuring phosphatase activity in highly alkaline conditions.',
    principle: 'Alkaline Phosphatase hydrolyzes p-Nitrophenyl Phosphate (pNPP) in an alkaline buffer strictly yielding p-Nitrophenol and inorganic phosphate. p-Nitrophenol is natively intensely yellow in an alkaline pH. The rate of color formation is measured kinetically.',
    mechanism: 'Direct kinetic continuously reading an actively cleaving enzyme.',
    types: ['Kinetic UV/Visible (Optimized Standard)'],
    specimen: 'Fasting Serum.',
    reagents: [
      { component: 'pNPP Substrate', function: 'Colorless substrate cleaved by ALP.' },
      { component: 'DEA Buffer', function: 'Provides optimal pH 9.8 to 10.5.' }
    ],
    equipment: ['Spectrophotometer'],
    procedure: [
      'Mix strictly 1.0 ml working reagent with 20 µl serum.',
      'Read absorbance immediately at 405 nm.',
      'Take subsequent readings every exactly 1 minute for 3 minutes.',
      'Calculate change in absorbance per minute (ΔA/min).'
    ],
    observation: 'Solution turns progressively bright yellow over 3 minutes.',
    result: 'ALP = ΔA/min × Factor = IU/L.',
    interpretation: 'Elevations identify biliary tract obstruction or high active bone turnover.',
    referenceRange: 'Adults: 40 - 120 IU/L. Children: Much higher (due to bone growth).',
    clinicalSignificance: 'Mandatory for Obstructive Jaundice and Paget\'s Disease.',
    sourcesOfError: ['EDTA plasma completely inhibits ALP (binds native Zinc/Mg cofactors).'],
    precautions: ['Never use EDTA. Use heparin or plain serum.'],
    normalVsAbnormal: 'Elevated purely in third trimester of pregnancy (placental isoenzyme).',
    applications: 'Hepatobiliary blockages.',
    limitations: 'High temperature totally degrades the highly sensitive pNPP substrate rapidly.',
    examPoints: 'Requires Mg2+ as an activator. Optimal pH > 9.8.',
    viva: [
      { q: 'Why is ALP high in children?', a: 'Active bone building by osteoblasts produces high skeletal ALP isoenzymes.' },
      { q: 'Why cannot we use EDTA?', a: 'EDTA permanently chelates Magnesium and Zinc, which are absolutely essential co-factors for ALP.' }
    ],
    mcq: [
      { q: 'Product emitting yellow color in ALP assay?', options: ['Phenolphthalein', 'p-Nitrophenol', 'Bilirubin', 'Diazo'], answer: 1 },
      { q: 'Anticoagulant strictly forbidden for ALP?', options: ['Heparin', 'Sodium citrate', 'EDTA', 'Both B and C'], answer: 3 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  }
];
