export const histopathologyData3 = [
  {
    id: 'his-pas',
    title: 'Periodic Acid Schiff (PAS) Stain',
    isImportant: true,
    definition: 'Histochemical staining method used to detect polysaccharides, neutral mucomucins, and basement membranes in tissue sections.',
    principle: 'Periodic acid acts as an oxidizing agent that breaks the carbon-carbon bonds between 1,2-glycol groups in carbohydrates, creating dialdehydes. These aldehydes then react with Schiff\'s reagent (leuco-fuchsin) to form a bright magenta-colored complex.',
    mechanism: 'Oxidation of glycols to aldehydes followed by color development with Schiff\'s reagent.',
    types: ['Routine PAS', 'PAS with Diastase (PAS-D)'],
    specimen: 'Formalin-fixed paraffin-embedded (FFPE) tissue sections (4 µm).',
    reagents: [
      { component: '0.5% Periodic Acid', function: 'Oxidizing agent.' },
      { component: 'Schiff\'s Reagent', function: 'Detection reagent (leuco-fuchsin).' },
      { component: 'Mayer\'s Hematoxylin', function: 'Nuclear counterstain.' }
    ],
    equipment: ['Coplin jars', 'Microscope'],
    procedure: [
      'Deparaffinize and rehydrate sections to water.',
      'Oxidize in 0.5% Periodic Acid for 5-10 minutes.',
      'Rinse in distilled water.',
      'Place in Schiff\'s Reagent for 15-30 minutes (until magenta color appears).',
      'Wash in lukewarm running tap water for 10 minutes (color intensification).',
      'Counterstain with Hematoxylin for 1-2 minutes.',
      'Dehydrate, clear, and mount.'
    ],
    observation: 'Bright magenta/purple staining of carbohydrate-rich structures.',
    result: 'Glycogen/Mucin: Magenta. Nuclei: Blue. Fungi: Bright Magenta.',
    interpretation: 'Strong magenta staining indicates presence of neutral polysaccharides or fungal elements.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Diagnostic for Glycogen Storage Diseases, basement membrane thickening in Diabetic Nephropathy (Kimmelstiel-Wilson lesions), and detection of fungal organisms like Candida or Aspergillus.',
    sourcesOfError: ['Expired Schiff\'s reagent (should be colorless; if pink, discard).', 'Inadequate oxidation.'],
    precautions: ['Store Schiff\'s reagent in the dark at 4°C.', 'Always run a control slide (e.g., Liver for glycogen).'],
    normalVsAbnormal: 'Thckened basement membranes in the kidney are a key pathological hallmark.',
    applications: 'Renal pathology, Mycology, and Gastroenterology (mucin detection).',
    limitations: 'Does not distinguish between different types of neutral carbohydrates without diastase digestion.',
    examPoints: 'Stains: Glycogen, Fungi, Basement Membrane. Key color: Magenta. Oxidizer: Periodic Acid.',
    viva: [
      { q: 'What is the function of Periodic Acid in the PAS stain?', a: 'It oxidizes 1,2-glycol groups to produce dialdehydes.' },
      { q: 'Name three components stained magenta by PAS.', a: 'Glycogen, Neutral Mucins, and Fungal cell walls.' },
      { q: 'How do you check if Schiff\'s reagent is still good?', a: 'It should be a clear, colorless liquid. If it turns pink, it has been prematurely re-oxidized and must be discarded.' }
    ],
    mcq: [
      { q: 'PAS stain is primarily used to detect?', options: ['Lipids', 'Carbohydrates', 'DNA', 'Proteins'], answer: 1 },
      { q: 'What color do fungal elements appear in a PAS stain?', options: ['Blue', 'Black', 'Magenta/Pink', 'Green'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/H_e_stain.jpg/640px-H_e_stain.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kidney_PAS.jpg/640px-Kidney_PAS.jpg'
    }
  },
  {
    id: 'his-masson-trichrome',
    title: 'Masson\'s Trichrome Stain',
    isImportant: true,
    definition: 'Classic three-color staining protocol used to distinguish between collagen fibers and muscle tissue.',
    principle: 'Relies on the varying molecular sizes of dyes and the porosity of tissue components. Smaller dyes (Acid Fuchsin/Biebrich Scarlet) stain muscle and cytoplasm. Phosphomolybdic acid then acts as a mordant to remove dye from collagen and replace it with a larger-sized dye (Aniline Blue or Light Green).',
    mechanism: 'Differential permeability and dye-molecule size exclusion.',
    types: ['Aniline Blue variants', 'Light Green variants'],
    specimen: 'FFPE sections.',
    reagents: [
      { component: 'Bouin\'s Fluid', function: 'Secondary fixative (mordant) to intensify colors.' },
      { component: 'Weigert\'s Iron Hematoxylin', function: 'Resistant nuclear stain.' },
      { component: 'Biebrich Scarlet-Acid Fuchsin', function: 'Cytoplasmic/Muscle stain.' },
      { component: 'Aniline Blue', function: 'Collagen stain.' }
    ],
    equipment: ['Coplin jars', 'Water bath (56°C)'],
    procedure: [
      'Deparaffinize and rehydrate.',
      'Mordant in Bouin\'s fluid at 56°C for 1 hour.',
      'Stain nuclei with Weigert\'s Iron Hematoxylin (10 mins).',
      'Stain in Biebrich Scarlet (5-10 mins).',
      'Differentiate in Phosphomolybdic acid (until collagen is pale).',
      'Stain collagen in Aniline Blue (5 mins).',
      'Dehydrate, clear, and mount.'
    ],
    observation: 'Distinct color separation between connective tissue and muscle.',
    result: 'Collagen: Blue. Muscle/Cytoplasm: Red. Nuclei: Black/Dark Brown.',
    interpretation: 'Useful for quantifying fibrosis in organ biopsies.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Diagnostic for Cirrhosis of the liver, Pulmonary fibrosis, and differentiating smooth muscle tumors (Leiomyoma) from fibrous tumors (Fibroma).',
    sourcesOfError: ['Over-differentiation in phosphomolybdic acid removes red from muscle.'],
    precautions: ['Ensure Bouin\'s mordanting step is used, especially if the original fixative was Formalin.'],
    normalVsAbnormal: 'Normal liver has minimal blue collagen; Cirrhotic liver shows thick blue bands of fibrosis.',
    applications: 'Hepatopathology and Nephropathology.',
    limitations: 'Complex, time-consuming protocol.',
    examPoints: 'Collagen = Blue. Muscle = Red. Nuclei = Black. Reagent: Bouin\'s Fluid.',
    viva: [
      { q: 'What are the three colors in Masson\'s Trichrome?', a: 'Black (nuclei), Red (muscle/cytoplasm), and Blue (collagen).' },
      { q: 'Why is Weigert\'s Iron Hematoxylin used instead of Harris?', a: 'Because iron hematoxylin is much more resistant to the acidic dyes used later in the protocol.' }
    ],
    mcq: [
      { q: 'In Masson\'s Trichrome, collagen is stained?', options: ['Red', 'Yellow', 'Blue', 'Black'], answer: 2 },
      { q: 'Secondary fixative used as a mordant in Trichrome?', options: ['Formalin', 'Xylene', 'Bouin\'s Fluid', 'Alcohol'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Liver_cirrhosis_Masson_trichrome.JPG/640px-Liver_cirrhosis_Masson_trichrome.JPG'
    }
  },
  {
    id: 'his-reticulin',
    title: 'Reticulin Stain (Gordon & Sweets)',
    isImportant: true,
    definition: 'Silver impregnation technique used to visualize the fine connective tissue framework (Type III collagen) of organs.',
    principle: 'Reticulin fibers are "argyrophilic" (silver-loving). They are first oxidized, then sensitized with iron or potassium. Silver solution is added, which the fibers can bind but not reduce. A reducer (Formalin) is then added to convert bound silver into visible black metallic silver.',
    mechanism: 'Silver impregnation: Oxidation -> Sensitization -> Silver treatment -> Reduction -> Toning.',
    types: ['Gordon and Sweets', 'Gomori\'s Method'],
    specimen: 'FFPE sections.',
    reagents: [
      { component: 'Potassium Permanganate', function: 'Oxidizer.' },
      { component: 'Ammoniacal Silver Nitrate', function: 'Impregnation reagent.' },
      { component: '10% Formalin', function: 'Reducing agent (Developer).' },
      { component: 'Gold Chloride', function: 'Toning agent (changes color from brown to black).' }
    ],
    equipment: ['Acid-cleaned glassware (Essential)', 'Coplin jars'],
    procedure: [
      'Oxidize in Potassium Permanganate.',
      'Bleach in Oxalic acid.',
      'Sensitize in Iron Alum.',
      'Treat with Ammoniacal Silver solution.',
      'Reduce in Formalin.',
      'Tone in Gold Chloride.',
      'Fix in Sodium Thiosulfate (Hypo) to remove unreacted silver.'
    ],
    observation: 'Delicate black network of fibers in liver, spleen, or lymph nodes.',
    result: 'Reticulin fibers: Fine Black. Nuclei: Red/Grey (if counterstained).',
    interpretation: 'Normal organs show a delicate framework; collapse or loss of this network indicates malignancy.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Critical for diagnosing Cirrhosis (framework collapse) and differentiating Hepatocellular Carcinoma (loss of reticulin) from benign hyperplasia.',
    sourcesOfError: ['Metallic contamination in glassware causing "silver mirroring" or background soot.'],
    precautions: ['Always use chemically clean, acid-washed glassware and plastic forceps.'],
    normalVsAbnormal: 'Loss of reticulin pattern is a hallmark of many solid tumors.',
    applications: 'Hepatopathology and Lymph node pathology.',
    limitations: 'Argyrophilic staining is sensitive to pH and temperature.',
    examPoints: 'Stains Reticulin (Type III Collagen). Metal: Silver. Reducer: Formalin.',
    viva: [
      { q: 'What does "Argyrophilic" mean?', a: 'Tissues that can bind silver from a solution but require an external reducing agent to visualize it.' },
      { q: 'What is the role of Gold Chloride in silver stains?', a: 'It acts as a toner, replacing the brown silver with black gold and removing the yellow background.' }
    ],
    mcq: [
      { q: 'Reticulin fibers are mainly composed of?', options: ['Type I Collagen', 'Type III Collagen', 'Elastin', 'Keratin'], answer: 1 },
      { q: 'The reducing agent in Gordon & Sweet\'s stain is?', options: ['Acetic acid', 'Formalin', 'Alcohol', 'Periodic acid'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Normal_liver_reticulin_400x.jpg/640px-Normal_liver_reticulin_400x.jpg'
    }
  },
  {
    id: 'his-prussian-blue',
    title: 'Perl\'s Prussian Blue (Iron Stain)',
    isImportant: true,
    definition: 'Histochemical technique for the detection of ferric iron (hemosiderin) in tissue sections.',
    principle: 'Ferric iron present in the tissue (as hemosiderin) is released by dilute hydrochloric acid. It then reacts with potassium ferrocyanide to form an insoluble bright blue complex called Ferric Ferrocyanide (Prussian Blue).',
    mechanism: 'Acid-base histochemical reaction forming a colored pigment.',
    types: ['Perl\'s technique'],
    specimen: 'FFPE sections.',
    reagents: [
      { component: 'Potassium Ferrocyanide', function: 'Color forming reagent.' },
      { component: 'Hydrochloric Acid (HCl)', function: 'Release reagent.' },
      { component: 'Neutral Red or Safranin', function: 'Nuclear counterstain.' }
    ],
    equipment: ['Coplin jars'],
    procedure: [
      'Deparaffinize and rehydrate to water.',
      'Treat with freshly mixed equal parts of HCl and Potassium Ferrocyanide for 20-30 minutes.',
      'Wash thoroughly in distilled water.',
      'Counterstain with Neutral Red for 2 minutes.',
      'Dehydrate quickly, clear, and mount.'
    ],
    observation: 'Bright blue granular deposits within cells (macrophages) or extracellularly.',
    result: 'Ferric Iron: Bright Blue. Nuclei: Red/Pink.',
    interpretation: 'Presence of blue pigment indicates abnormal iron accumulation.',
    referenceRange: 'Minimal to none in most tissues.',
    clinicalSignificance: 'Diagnostic for Hemochromatosis (iron overload), Sideroblastic anemia (bone marrow), and identifying "Heart Failure Cells" in the lungs.',
    sourcesOfError: ['Using tap water (often contains iron) causing non-specific background blueing.'],
    precautions: ['Always use distilled/deionized water.', 'Always run a positive control (e.g., Spleen).'],
    normalVsAbnormal: 'Abnormal: Massive blue staining in liver hepatocytes or skin.',
    applications: 'Hepatology, Hematology (Bone marrow), and Autopsy pathology.',
    limitations: 'Detects ferric (Fe3+) iron only; does not detect ferrous (Fe2+) iron.',
    examPoints: 'Result: Prussian Blue color. Reactants: HCl + Potassium Ferrocyanide. Stains: Hemosiderin.',
    viva: [
      { q: 'What form of iron does Perl\'s stain detect?', a: 'Ferric iron (Fe3+), specifically in the form of hemosiderin.' },
      { q: 'Why is HCl used in the Perl\'s reaction?', a: 'To release the ferric ions from the protein (hemosiderin) so they can react with the ferrocyanide.' }
    ],
    mcq: [
      { q: 'Prussian blue reaction is used to demonstrate?', options: ['Calcium', 'Iron', 'Amyloid', 'Melanin'], answer: 1 },
      { q: 'The counterstain used in Perl\'s method is usually?', options: ['Eosin', 'Neutral Red', 'Methylene blue', 'Light green'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/H_e_stain.jpg/640px-H_e_stain.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
