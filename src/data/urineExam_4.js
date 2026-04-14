export const urineExamData4 = [
  {
    id: 'urn-micro-prep',
    title: 'Microscopic Exam: Sediment Preparation',
    isImportant: true,
    definition: 'Standardized procedure to concentrate the insoluble elements of urine for microscopic analysis.',
    principle: 'Centrifugation of urine at a specific speed and time forces the solid components (cells, casts, crystals) to the bottom of the tube (sediment), allowing for detailed evaluation of pathology.',
    mechanism: 'Centrifugal sedimentation.',
    types: ['Routine Microscopy'],
    specimen: '10-15 ml of Fresh Mid-stream Urine.',
    reagents: [{ component: 'Sternheimer-Malbin stain (Optional)', function: 'Assists in identifying white cell types (Glitter cells).' }],
    equipment: ['Centrifuge', 'Conical centrifuge tubes', 'Microscope', 'Glass slides/coverslips'],
    procedure: [
      'Take 10-12 ml of well-mixed urine in a conical centrifuge tube.',
      'Centrifuge at 2000-2500 RPM for exactly 5 minutes.',
      'Discard the supernatant by inverting the tube quickly, leaving ~0.5 ml of sediment.',
      'Re-suspend the sediment by tapping the tube bottom.',
      'Place a small drop on a slide and cover with a coverslip.',
      'Examine under 10x (for casts) and 40x (for cells and crystals).'
    ],
    observation: 'Clear visualization of organized and unorganized sediments.',
    result: 'Report elements found per Low Power Field (LPF) or High Power Field (HPF).',
    interpretation: 'Concentrated view provides evidence of renal or urinary tract disease.',
    referenceRange: 'RBC: 0-2/HPF | Pus Cells: 0-5/HPF | Casts: Occasional Hyaline.',
    clinicalSignificance: 'Fundamental for differentiating between glomerular and lower urinary tract disorders.',
    sourcesOfError: ['Using non-fresh urine (cells lyse, casts dissolve).', 'Centrifuging too fast (RBCs break).'],
    precautions: ['Examine within 1 hour of collection.'],
    normalVsAbnormal: 'Pathological sediments are often missing from the superficial supernatant.',
    applications: 'Baseline urinalysis.',
    limitations: 'Highly dependent on the concentration of the urine (Specific Gravity).',
    examPoints: 'Centrifuge: 2000 RPM for 5 mins. Report: /HPF or /LPF.',
    viva: [
      { q: 'Why is centrifugation necessary for urine microscopy?', a: 'Because pathological elements like cells and casts are usually present in very small numbers; concentration is required to find them.' },
      { q: 'What is the standard volume of urine used for microscopic preparation?', a: 'Usually 10 to 12 ml.' }
    ],
    mcq: [
      { q: 'Standard speed for urine centrifugation is?', options: ['500 RPM', '2000-2500 RPM', '10000 RPM', 'Variable'], answer: 1 },
      { q: 'Under which objective should you search for casts?', options: ['10x (LPF)', '40x (HPF)', '100x (Oil)', 'Eye alone'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'urn-micro-cells',
    title: 'Microscopic Exam: Cells (RBC/Pus/Epithelial)',
    isImportant: true,
    definition: 'Identification and quantification of cellular elements in urine sediment.',
    principle: 'Cells migrate into urine due to injury, inflammation, or exfoliation. Their morphology indicates the site and nature of the lesion.',
    mechanism: 'Visual morphological differentiation.',
    types: ['RBCs, WBCs, Squamous/Renal Epithelial'],
    specimen: 'Urine sediment.',
    reagents: [{ component: '2% Acetic acid', function: 'Optional: Lysar RBCs to help identify WBCs.' }],
    equipment: ['Microscope'],
    procedure: [
      'Scan the slide under 40x objective.',
      'RBCs: Small, biconcave, pale discs (if dysmorphic, suggest glomerular source).',
      'Pus Cells (WBCs): Larger than RBCs, granular cytoplasm, lobed nucleus visible.',
      'Squamous Epithelium: Large, flat, flagstone-like cells with small nuclei.',
      'Renal Tubular Cells: Smaller, round/polyhedral (highly pathological).'
    ],
    observation: 'Normal urine has very few cells. Infection shows "sheets" of pus cells.',
    result: 'Report counts as Number per HPF.',
    interpretation: 'High WBCs (>5/HPF) = Pyuria (Infection). High RBCs (>2/HPF) = Hematuria (Stone, Tumor, Trauma).',
    referenceRange: 'WBC: <5/HPF | RBC: <2/HPF.',
    clinicalSignificance: 'Key diagnosis for UTI (Pus cells) and Renal calculi (RBCs).',
    sourcesOfError: ['Menstrual contamination (false RBCs in females).', 'Yeast cells mistaken for RBCs (Yeast usually show budding).'],
    precautions: ['Always look for motility in Trichomonas vaginalis if suspected.'],
    normalVsAbnormal: 'Dysmorphic (fragmented) RBCs are a hallmark of Glomerulonephritis.',
    applications: 'Renal and Urology.',
    limitations: 'Does not identify specific bacterial strains.',
    examPoints: 'Pyuria = WBCs in urine. Hematuria = RBCs in urine. HPF = High Power Field.',
    viva: [
      { q: 'How do you distinguish RBCs from Yeast in urine?', a: 'Add a drop of 2% acetic acid. RBCs will lyse (disappear), while yeast will remain intact.' },
      { q: 'What do Squamous Epithelial cells in the urine typically indicate?', a: 'Contamination from the skin or vagina, usually seen in non-midstream samples.' }
    ],
    mcq: [
      { q: 'Significant pyuria is defined as more than how many WBCs per HPF?', options: ['1', '5', '50', '100'], answer: 1 },
      { q: 'Large, flat cells with a small nucleus and abundant cytoplasm are?', options: ['RBCs', 'Pus cells', 'Squamous epithelial cells', 'Renal cells'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Urinary_sediment_sample.jpg/640px-Urinary_sediment_sample.jpg'
    }
  },
  {
    id: 'urn-micro-casts',
    title: 'Microscopic Exam: Urinary Casts',
    isImportant: true,
    definition: 'Cylindrical structures formed in the renal tubules due to protein precipitation.',
    principle: 'In conditions of slow urine flow or high acidity, Tamm-Horsfall glycoprotein precipitates in the Distal Convoluted Tubule and Collecting Duct. Cells or debris trapped in this "mold" form specific types of casts.',
    mechanism: 'Protein gelation and tubular molding.',
    types: ['Hyaline, Granular, RBC Casts, WBC Casts, Waxy Casts'],
    specimen: 'Urine sediment.',
    reagents: [{ component: 'None', function: 'Direct microscopy.' }],
    equipment: ['Microscope'],
    procedure: [
      'Search the edges of the coverslip under 10x objective (LPF).',
      'Identify the type under 40x (HPF).',
      'Hyaline: Transparent, cigar-shaped.',
      'RBC Cast: Contains distinct red cells (identifies glomerular bleeding).',
      'Granular: Coarse or fine particles (suggest tubular damage).'
    ],
    observation: 'Transparent or granular cylinders with rounded or blunt ends.',
    result: 'Report number per LPF (e.g., 0-1 Hyaline casts/LPF).',
    interpretation: 'Presence of casts (except occasional hyaline) always signifies intrinsic renal disease.',
    referenceRange: 'A few Hyaline casts/LPF is normal.',
    clinicalSignificance: 'Differentiation: RBC Cast = Glomerulonephritis. WBC Cast = Pyelonephritis (Basin infection). Waxy Cast = Chronic Renal Failure.',
    sourcesOfError: ['Vigorously shaking the tube (breaks the fragile casts).', 'Alkaline urine (dissolves casts).'],
    precautions: ['Use low light/closed diaphragm to see transparent hyaline casts.'],
    normalVsAbnormal: 'RBC casts are NEVER normal.',
    applications: 'Nephrology.',
    limitations: 'May be absent in highly diluted urine.',
    examPoints: 'RBC Cast = Glomerulonephritis. WBC Cast = Pyelonephritis. Waxy Cast = Renal Failure.',
    viva: [
      { q: 'What is the main protein component of all urinary casts?', a: 'Tamm-Horsfall Glycoprotein (Uromodulin).' },
      { q: 'What is the clinical significance of finding an RBC cast?', a: 'It is a definitive sign of bleeding from the glomerulus, characteristic of acute glomerulonephritis.' }
    ],
    mcq: [
      { q: 'Casts are formed in which part of the kidney?', options: ['Glomerulus', 'Distal tubules/Collecting duct', 'Ureter', 'Bladder'], answer: 1 },
      { q: 'Waxy casts are associated with?', options: ['Acute Exercise', 'Dehydration', 'Chronic Renal Failure', 'Pregnancy'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'urn-micro-crystals-acid',
    title: 'Crystals in Acid Urine',
    isImportant: false,
    definition: 'Identification of insoluble minerals that precipitate in acidic urine (pH < 7.0).',
    principle: 'Based on pH, temperature, and concentration, specific solutes form crystals. In acidic environments, Uric acid and Calcium Oxalate are the most common.',
    mechanism: 'Crystallization/Precipitation.',
    types: ['Uric Acid, Calcium Oxalate'],
    specimen: 'Urine sediment.',
    reagents: [{ component: 'None', function: 'Microscopy.' }],
    equipment: ['Microscope'],
    procedure: [
      'Examine sediment under 40x.',
      'Calcium Oxalate: "Envelope" shaped (dihydrate) or dumbbell (monohydrate).',
      'Uric Acid: Diamond, rhombic, or rosette shaped (Yellow-brown).',
      'Amorphous Urates: Pinkish/Brick-dust sediment (dissolves on heating).'
    ],
    observation: 'Small geometric shapes in the sediment.',
    result: 'Report crystal type and quantity.',
    interpretation: 'Excess Calcium Oxalate = Kidney stones. High Uric acid = Gout or tumor lysis.',
    referenceRange: 'Few are normal.',
    clinicalSignificance: 'Predicting the risk and composition of kidney stones.',
    sourcesOfError: ['Crystals forming in the refrigerator (not clinically significant).'],
    precautions: ['Always correlate with urinary pH.'],
    normalVsAbnormal: 'Calcium oxalate is common even in healthy individuals after eating spinach or tomatoes.',
    applications: 'Urolithiasis screening.',
    limitations: 'Crystals in voided urine do not always mean a stone is present in the body.',
    examPoints: 'Oxalate: Envelope. Uric Acid: Diamond/Yellow. pH: Acidic.',
    viva: [
      { q: 'What is the characteristic shape of Calcium Oxalate dihydrate crystals?', a: 'Envelope-shaped (square with an "X" in the center).' },
      { q: 'How do you differentiate Amorphous Urates from Amorphous Phosphates?', a: 'Amorphous urates precipitate in acid urine and look pink; they dissolve upon heating the urine.' }
    ],
    mcq: [
      { q: 'Envelope-shaped crystals in urine are?', options: ['Uric acid', 'Calcium oxalate', 'Phosphate', 'Leucine'], answer: 1 },
      { q: 'Crystals commonly seen in acid urine include all EXCEPT?', options: ['Uric acid', 'Calcium oxalate', 'Triple phosphate', 'Urinary urates'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'urn-micro-crystals-alkaline',
    title: 'Crystals in Alkaline Urine',
    isImportant: false,
    definition: 'Identification of crystals that precipitate in alkaline urine (pH > 7.0).',
    principle: 'Magnesium, Ammonium, and Calcium salts form insoluble complexes in an alkaline environment.',
    mechanism: 'Alkaline-dependent precipitation.',
    types: ['Triple Phosphate, Amorphous Phosphates, Calcium Carbonate'],
    specimen: 'Urine sediment.',
    reagents: [{ component: 'None', function: 'Microscopy.' }],
    equipment: ['Microscope'],
    procedure: [
      'Examine sediment under 40x.',
      'Triple Phosphate: "Coffin lid" appearance.',
      'Amorphous Phosphates: White/Granular sediment (dissolves in acetic acid).',
      'Calcium Carbonate: Small dumbbells or spheres.'
    ],
    observation: 'Colorless, "coffin-lid" prisms.',
    result: 'Report type and quantity.',
    interpretation: 'Triple phosphates are often associated with Urinary Tract Infections (especially Proteus species).',
    referenceRange: 'Few are normal.',
    clinicalSignificance: 'Linking crystal types to specific urea-splitting bacterial infections.',
    sourcesOfError: ['Urine turns alkaline on standing due to bacterial contamination.'],
    precautions: ['Examine fresh urine to avoid "standing" artifacts.'],
    normalVsAbnormal: 'Large amounts of Triple Phosphate suggest a staghorn calculus risk.',
    applications: 'Urological infection monitoring.',
    limitations: 'Phosphates are common in alkaline urine after a heavy meal ("Alkaline tide").',
    examPoints: 'Triple Phosphate: Coffin-lid. pH: Alkaline. Associated with: Proteus infection.',
    viva: [
      { q: 'What is the classic shape of Triple Phosphate crystals?', a: 'Coffin-lid (colorless prisms).' },
      { q: 'Why do Triple Phosphate crystals form during certain UTIs?', a: 'Bacteria like Proteus split urea into ammonia, raising the urinary pH to alkaline levels, which promotes phosphate precipitation.' }
    ],
    mcq: [
      { q: 'Coffin-lid shaped crystals in urine are?', options: ['Uric acid', 'Triple phosphate', 'Calcium oxalate', 'Cystine'], answer: 1 },
      { q: 'Which crystal is typically found in alkaline urine?', options: ['Amorphous Urates', 'Calcium Carbonate', 'Uric acid', 'Tyrosine'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
