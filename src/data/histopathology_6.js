export const histopathologyData6 = [
  {
    id: 'his-decalcification',
    title: 'Decalcification of Tissue',
    isImportant: true,
    definition: 'Process of removing calcium salts from hard tissues like bone and teeth to make them soft enough for microtomy.',
    principle: 'Strong acids or chelating agents are used to dissolve calcium phosphate and carbonate salts. Once the mineral component is removed, the remaining organic matrix (collagen) becomes flexible and can be processed and cut like soft tissue.',
    mechanism: 'Ion exchange (Acids) or Chelation (EDTA).',
    types: ['Acid Decalcification (Nitric/HCl)', 'Chelating agents (EDTA)'],
    specimen: 'Bone, teeth, calcified tumors, or calcified arteries.',
    reagents: [
      { component: '5-10% Nitric Acid', function: 'Rapid acid decalcifier.' },
      { component: 'EDTA (10%)', function: 'Slow, gentle chelating agent (preserves DNA/Antigens).' }
    ],
    equipment: ['Glass containers', 'X-ray (for end-point determination)', 'Surgical saw'],
    procedure: [
      'Fix the tissue thoroughly (10% NBF) before decalcification.',
      'Submerge the specimen in decalcifying fluid (20x volume of tissue).',
      'Change the fluid daily.',
      'Periodically check the "End-point" using physical or chemical tests.',
      'Once soft, wash in running water for 24 hours to remove acid.',
      'Proceed to routine processing.'
    ],
    observation: 'Bone becomes flexible and can be easily pierced with a needle.',
    result: 'Softened tissue suitable for paraffin embedding and sectioning.',
    interpretation: 'Successful decalcification occurs when all mineral is removed without destroying cellular detail.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Mandatory for examining bone marrow biopsies, bone tumors (Osteosarcoma), and identifying metastatic cancer spread to bones.',
    sourcesOfError: ['Over-decalcification (destroys nuclear staining - "ghost cells").', 'Incomplete decalcification (destroys microtome blade).'],
    precautions: ['Always fix tissue before decalcifying.', 'Never use heat to speed up the process as it ruins morphology.'],
    normalVsAbnormal: 'Abnormal: Bone that is still "gritty" when cutting indicates incomplete removal of calcium.',
    applications: 'Orthopedic pathology and Hematopathology.',
    limitations: 'Acid decalcifiers often ruin DNA and antigens for IHC/PCR.',
    examPoints: 'End-point check: X-ray is best. Most used acid: Nitric Acid. EDTA preserves antigens.',
    viva: [
      { q: 'How do you determine the "end-point" of decalcification?', a: '1. Physical test (flexing/needle piercing). 2. Chemical test (calcium oxalate precipitation). 3. X-ray (most accurate - looks for opacity).' },
      { q: 'Why is EDTA preferred for research or IHC?', a: 'Because it is a gentle chelator that removes calcium slowly without high acidity, thereby preserving fragile cell proteins and DNA.' }
    ],
    mcq: [
      { q: 'The most rapid acting acid for decalcification is?', options: ['Acetic acid', 'Nitric acid', 'EDTA', 'Formic acid'], answer: 1 },
      { q: 'Which method is best for determining the end-point of decalcification?', options: ['Bending the bone', 'X-ray', 'Smelling', 'Tasting'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'his-pap-stain',
    title: 'Papanicolaou (Pap) Stain',
    isImportant: true,
    definition: 'Multichromatic staining protocol used primarily in exfoliative cytology for the detection of cancer cells.',
    principle: 'The stain uses a combination of Hematoxylin (nuclear) and two contrasting counterstains: OG-6 (stains keratinized cells orange) and EA-65/50 (stains metabolically active cells green/blue). It provides high nuclear detail and transparent cytoplasm.',
    mechanism: 'Polychromatic differential staining.',
    types: ['Routine Pap', 'Rapid Pap'],
    specimen: 'Cervical smears (Pap smears), sputum, or body fluids.',
    reagents: [
      { component: 'Harris Hematoxylin', function: 'Nuclear stain.' },
      { component: 'Orange G-6 (OG-6)', function: 'Stains mature/keratinized cells.' },
      { component: 'Eosin Azure (EA-50)', function: 'Stains metabolically active cells.' }
    ],
    equipment: ['Coplin jars', 'Microscope'],
    procedure: [
      'Fix smears immediately in 95% Ethanol (Wet fixation).',
      'Hydrate in alcohols to water.',
      'Stain with Harris Hematoxylin (Harris) for 2-4 mins.',
      'Blue in tap water or alkaline solution.',
      'Dehydrate in 95% Alcohol.',
      'Stain with OG-6 for 2 mins.',
      'Rinse in 95% Alcohol.',
      'Stain with EA-50 for 3 mins.',
      'Dehydrate through absolute alcohol, clear in xylene and mount.'
    ],
    observation: 'Nuclei are dark blue. Squamous cells are varying shades of blue, green, and orange.',
    result: 'Nuclei: Blue/Black. Cyanophil cells (basal): Blue-green. Eosinophil cells (superficial): Pink/Orange.',
    interpretation: 'Identification of dysplastic (pre-cancerous) or malignant cells.',
    referenceRange: 'Normal (NILM - Negative for Intraepithelial Lesion or Malignancy).',
    clinicalSignificance: 'The most successful cancer screening test in history, used globally for the early detection of Cervical Cancer.',
    sourcesOfError: ['Air-drying before fixation (causes "nuclear blowing" and loss of detail).', 'Exhausted reagents.'],
    precautions: ['Fix the slide AT ONCE while still wet. Delay of even seconds causes artifacts.'],
    normalVsAbnormal: 'Malignant cells show high Nucleus-to-Cytoplasm (N:C) ratio and irregular nuclear borders.',
    applications: 'Gynecological and Non-gynecological cytology.',
    limitations: 'Subjective screening; requires highly trained cytotechnologists.',
    examPoints: 'Fixative: 95% Ethanol. OG-6: Keratin. EA-50: Cytoplasm. Goal: Nuclear detail.',
    viva: [
      { q: 'Why is "Wet Fixation" critical in Pap staining?', a: 'To preserve the fine nuclear detail and chromatin pattern, which is essential for differentiating between normal and malignant cells.' },
      { q: 'What does OG-6 stain?', a: 'It stains keratinized (mature) squamous cells orange-red.' }
    ],
    mcq: [
      { q: 'The most common fixative for cytology smears is?', options: ['Formalin', '95% Ethanol', 'Xylene', 'Glutaraldehyde'], answer: 1 },
      { q: 'EA-50 stain contains which components?', options: ['Eosin Y and Light Green', 'Hematoxylin and OG-6', 'Carbol Fuchsin', 'Crystal Violet'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pap_Test_High_and_Low_Power.jpg/640px-Pap_Test_High_and_Low_Power.jpg'
    }
  },
  {
    id: 'his-fnac',
    title: 'Fine Needle Aspiration Cytology (FNAC)',
    isImportant: true,
    definition: 'Diagnostic procedure where a thin needle is inserted into a mass to sample individual cells for microscopic examination.',
    principle: 'Applies negative pressure (suction) through a fine-gauge needle (usually 22-25G) to "suck out" cells from a solid or cystic lesion. These cells are then smeared onto slides, fixed, and stained.',
    mechanism: 'Cellular aspiration and morphological evaluation.',
    types: ['Guided (Ultrasound/CT)', 'Non-guided (Palpable masses)'],
    specimen: 'Cellular aspirate from lymph nodes, thyroid, breast mass, etc.',
    reagents: [{ component: '95% Ethanol', function: 'Smear fixative.' }],
    equipment: ['22-25G Needle', 'Syringe (10ml)', 'Syringe holder (Cameco)', 'Glass slides'],
    procedure: [
      'Clean the skin at the site of the mass.',
      'Immobilize the mass with one hand.',
      'Insert the needle and apply suction while moving the needle in different directions.',
      'Release suction before withdrawing the needle.',
      'Expel the material onto a slide and spread it into a thin film.',
      'Fix immediately (for Pap/H&E) or air-dry (for Giemsa).'
    ],
    observation: 'Presence of groups or single epithelial/mesenchymal cells.',
    result: 'Cytological diagnosis (Benign, Malignant, or Suspicious).',
    interpretation: 'Rapid first-line evaluation of lumps and bumps.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Provides a "quick diagnosis" without the need for major surgery. Crucial for deciding if a patient needs an operation.',
    sourcesOfError: ['Inadequate sampling (sampling only blood or fiber).', 'Thick smears that cannot be visualized.'],
    precautions: ['Always release the suction before removing the needle to avoid aspirating the cells into the syringe barrel.'],
    normalVsAbnormal: 'High cellularity and loss of cohesion are markers of malignancy.',
    applications: 'Thyroid nodules, Breast lumps, Salivary glands, Lymphadenopathy.',
    limitations: 'Cannot evaluate the "architecture" of the tissue (like a biopsy can).',
    examPoints: 'Needle: 22-25G. Suction: Negative pressure. Goal: Cellular morphology.',
    viva: [
      { q: 'What gauge needle is routinely used for FNAC?', a: 'Typically 22 to 25 Gauge.' },
      { q: 'What is the main advantage of FNAC over a surgical biopsy?', a: 'It is minimally invasive, rapid, inexpensive, and does not requires anesthesia or stitches.' }
    ],
    mcq: [
      { q: 'FNAC stands for?', options: ['Fluid Needle Aspiration', 'Fine Needle Aspiration Cytology', 'Fast Nuclear Analysis', 'Fetal Needle Analysis'], answer: 1 },
      { q: 'Which of the following is an advantage of FNAC?', options: ['Evaluates architecture', 'Large tissue volume', 'Rapid and outpatient procedure', 'None'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'his-ihc',
    title: 'Immunohistochemistry (IHC) Principles',
    isImportant: true,
    definition: 'Technique used to localize specific proteins (antigens) in tissue sections using the principle of specific antigen-antibody binding.',
    principle: 'A primary antibody binds to a specific target protein in the tissue. A secondary antibody (linked to an enzyme like HRP) binds to the primary antibody. When a substrate (DAB) is added, the enzyme produces a brown precipitate at the exact location of the target protein.',
    mechanism: 'Antigen-Antibody-Enzyme reaction signaling.',
    types: ['Direct IHC', 'Indirect IHC (most common)'],
    specimen: 'FFPE sections (requires Heat Induced Epitope Retrieval - HIER).',
    reagents: [
      { component: 'Primary Antibody', function: 'Specific target binder (e.g., Anti-ER).' },
      { component: 'HRP-conjugated Secondary Antibody', function: 'Amplifier/Labeling system.' },
      { component: 'DAB (Diaminobenzidine)', function: 'Chromogen (forms brown color).' }
    ],
    equipment: ['Manual or automated IHC stainer', 'Microwave/Pressure cooker (for HIER)'],
    procedure: [
      'Deparaffinize and rehydrate.',
      'Antigen Retrieval: Heat the sections in buffer to "unmask" proteins hidden by formalin.',
      'Peroxidase Blocking: Neutralize endogenous enzymes with H2O2.',
      'Apply Primary Antibody. Incubate.',
      'Apply Secondary Antibody (Linker). Incubate.',
      'Apply DAB chromogen. Observe for brown color.',
      'Counterstain with Hematoxylin.'
    ],
    observation: 'Specific brown staining of nuclei, cytoplasm, or cell membranes.',
    result: 'Positive or Negative for a specific marker.',
    interpretation: 'Used to determine the origin of a cancer (e.g., CK7/CK20) or its hormone status (ER/PR).',
    referenceRange: 'N/A',
    clinicalSignificance: 'The most powerful tool in modern pathology for sub-typing cancers, identifying unknown primary tumors, and predicting response to targeted therapy (e.g., Her2/neu in breast cancer).',
    sourcesOfError: ['Over-heating during antigen retrieval.', 'Non-specific background staining.'],
    precautions: ['Always include a known Positive Control slide in every run.'],
    normalVsAbnormal: 'Brown staining = Expression of the protein. Blue only = Negative.',
    applications: 'Oncology, Research, and Infectious disease.',
    limitations: 'High cost of antibodies and requires rigorous quality control.',
    examPoints: 'Chromogen: DAB (Brown). Retrieval: HIER. Specificity: Provided by Primary Antibody.',
    viva: [
      { q: 'What is "Antigen Retrieval" (HIER) in IHC?', a: 'It is the process of heating tissue sections in a buffer to break the protein cross-links formed by formalin, thereby exposing the antigens so the antibody can bind to them.' },
      { q: 'Which chromogen is most commonly used to produce a brown color in IHC?', a: 'DAB (3,3\'-Diaminobenzidine).' }
    ],
    mcq: [
      { q: 'The most common color of a positive IHC reaction using DAB is?', options: ['Blue', 'Red', 'Brown', 'Green'], answer: 2 },
      { q: 'IHC is primarily used to identify?', options: ['Lipids', 'Antigens/Proteins', 'DNA sequences', 'Carbohydrates'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'his-frozen-section',
    title: 'Frozen Section Technique (Cryostat)',
    isImportant: true,
    definition: 'Fast surgical pathology procedure used for rapid microscopic analysis of a specimen while the patient is still on the operating table.',
    principle: 'Fresh tissue is rapidly frozen to -20°C using liquid CO2 or a cooling compressor. The frozen water inside the tissue acts as the embedding medium (instead of wax), allowing it to be cut into thin sections immediately.',
    mechanism: 'Thermal hardening of tissue for instant microtomy.',
    types: ['Intra-operative Triage'],
    specimen: 'Fresh, unfixed surgical tissue.',
    reagents: [{ component: 'OCT Compound', function: 'Embedding medium for freezing.' }],
    equipment: ['Cryostat (Refrigerated microtome)', 'Chuck (specimen holder)'],
    procedure: [
      'Receive fresh tissue from the OR.',
      'Place tissue on a chuck and cover with OCT compound.',
      'Freeze rapidly in the cryostat chamber (-20°C).',
      'Cut sections (usually 5-8 µm) and pick up on a room-temp slide.',
      'Fix immediately in 95% Ethanol.',
      'Perform a "Rapid H&E" stain (takes 2-3 mins).',
      'Report result to the surgeon via intercom.'
    ],
    observation: 'Microscopic morphology of frozen tissue cells.',
    result: 'Diagnosis within 15-20 minutes of receiving the sample.',
    interpretation: 'Purpose: Determine if a margin is clear, if a lesion is malignant, or if a specific organ (e.g. parathyroid) was sampled.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Guides the surgeon in immediate decision-making during an operation (e.g., whether to remove more tissue or stop).',
    sourcesOfError: ['"Ice crystal artifacts" caused by slow freezing, which distort the cells.', 'Thick sections.'],
    precautions: ['Never fix the tissue in formalin before freezing; it will not freeze properly.'],
    normalVsAbnormal: 'Abnormal: Positive margins require immediate further resection.',
    applications: 'Intra-operative consultation.',
    limitations: 'Morphology is slightly inferior to routine paraffin sections.',
    examPoints: 'Result time: 15-20 mins. Medium: OCT. Temperature: -20°C.',
    viva: [
      { q: 'What is the most important application of a frozen section?', a: 'To provide a rapid intra-operative diagnosis to guide the surgeon while the patient is under anesthesia.' },
      { q: 'What is the embedding medium used for frozen sections?', a: 'OCT (Optimal Cutting Temperature) compound.' }
    ],
    mcq: [
      { q: 'Standard temperature for a cryostat chamber is?', options: ['0°C', '-20°C', '-100°C', '+37°C'], answer: 1 },
      { q: 'The rapid stain used for frozen sections is usually?', options: ['H&E', 'PAS', 'Giemsa', 'Iron stain'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
