export const histopathologyData5 = [
  {
    id: 'his-congo-red',
    title: 'Congo Red Stain (Amyloid)',
    isImportant: true,
    definition: 'Specific staining method used for the demonstration of amyloid deposits in tissue sections.',
    principle: 'Congo Red is a linear dye that binds specifically to the beta-pleated sheet structure of amyloid through non-polar hydrogen bonding. When viewed under polarized light, the bound dye exhibits a pathognomonic "Apple-green birefringence".',
    mechanism: 'Hydrogen bonding to beta-pleated sheets followed by optical polarization.',
    types: ['Bennhold\'s Method', 'Highman\'s Method'],
    specimen: 'FFPE sections (cut thicker, ~8-10 µm, to enhance birefringence).',
    reagents: [
      { component: 'Congo Red Solution', function: 'Primary stain.' },
      { component: 'Alkaline Alcohol', function: 'Differentiator.' },
      { component: 'Hematoxylin', function: 'Nuclear counterstain.' }
    ],
    equipment: ['Polarizing Microscope', 'Coplin jars'],
    procedure: [
      'Deparaffinize and rehydrate sections.',
      'Stain with Hematoxylin (2 mins).',
      'Pre-treat with alkaline salt solution (to release bound acid groups).',
      'Stain in Congo Red for 20-30 minutes.',
      'Differentiate quickly in alkaline alcohol.',
      'Dehydrate rapidly, clear and mount.'
    ],
    observation: 'Pink/Red deposits under light microscopy; Apple-green glow under polarized light.',
    result: 'Amyloid: Pink/Red (Light) | Apple-green (Polarized). Nuclei: Blue.',
    interpretation: 'Identification of amyloid is definitive for the diagnosis of Amyloidosis.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Diagnostic for Systemic Amyloidosis, Alzheimer\'s disease (brain plaques), and Medullary Thyroid Carcinoma.',
    sourcesOfError: ['Sections cut too thin (birefringence is weak).', 'Over-differentiation removes the dye.'],
    precautions: ['Always examine the slide under a polarizing microscope for confirmation.'],
    normalVsAbnormal: 'Apple-green birefringence is the "Gold Standard" for amyloid detection.',
    applications: 'Renal, Cardiac, and Neuropathology.',
    limitations: 'Does not distinguish between different types of amyloid (AL, AA, etc.).',
    examPoints: 'Birefringence: Apple-green. Structure: Beta-pleated sheet. Section thickness: 8-10 µm.',
    viva: [
      { q: 'What is the characteristic appearance of Congo red-stained amyloid under polarized light?', a: 'Apple-green birefringence.' },
      { q: 'Why are Congo red sections cut thicker (8-10 microns) than routine sections?', a: 'To provide enough amyloid thickness to produce visible and distinct birefringence.' }
    ],
    mcq: [
      { q: 'Congo red is used to demonstrate?', options: ['Lipids', 'Amyloid', 'Glycogen', 'Calcium'], answer: 1 },
      { q: 'The structural feature of amyloid that binds Congo red is?', options: ['Alpha helix', 'Random coil', 'Beta-pleated sheet', 'Double helix'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'his-oil-red-o',
    title: 'Oil Red O (Lipid Stain)',
    isImportant: true,
    definition: 'Physical staining method used to demonstrate neutral fats (lipids) in frozen tissue sections.',
    principle: 'A physical process of selective solubility. The dye (Oil Red O) is more soluble in the lipids within the tissue than it is in its own solvent (isopropanol). Therefore, the dye "migrates" and dissolves into the lipid droplets, coloring them red.',
    mechanism: 'Physical solubility (Dye absorption into lipids).',
    types: ['Solvent Red 27'],
    specimen: 'Frozen sections (Cryostat) exclusively (Paraffin processing dissolves all lipids).',
    reagents: [
      { component: 'Oil Red O in Isopropanol', function: 'Primary lipid-soluble dye.' },
      { component: 'Mayer\'s Hematoxylin', function: 'Nuclear counterstain.' },
      { component: 'Glycerol Jelly', function: 'Aqueous mounting medium (Essential).' }
    ],
    equipment: ['Cryostat (Freezing microtome)', 'Coplin jars'],
    procedure: [
      'Cut frozen sections at 8-10 µm and mount on slides.',
      'Fix briefly in 10% Formalin.',
      'Rinse in 60% Isopropanol.',
      'Stain in Oil Red O working solution for 15 minutes.',
      'Rinse in 60% Isopropanol.',
      'Counterstain nuclei with Hematoxylin.',
      'Mount directly in an aqueous medium (Glycerol jelly).'
    ],
    observation: 'Bright red droplets of varying size within the cytoplasm or interstitium.',
    result: 'Neutral lipids/Fats: Bright Red. Nuclei: Blue.',
    interpretation: 'Identifies fat emboli or intracellular lipid accumulation.',
    referenceRange: 'Minimal in non-adipose tissues.',
    clinicalSignificance: 'Diagnostic for Fat Embolism Syndrome (in lung/brain after bone fractures) and Fatty Liver Disease (Steatosis).',
    sourcesOfError: ['Using paraffin sections (gives total false negative).', 'Using xylene-based mountant (dissolves the red dye and the fat).'],
    precautions: ['Always use an aqueous mounting medium like Glycerol Jelly.'],
    normalVsAbnormal: 'Abnormal: Massive red droplet accumulation in liver hepatocytes.',
    applications: 'Hepatopathology and Autopsy pathology.',
    limitations: 'Limited to neutral fats; does not stain complex lipids or phospholipids well.',
    examPoints: 'Requires Frozen sections. Mountant: Glycerol Jelly. Result: Red Fat.',
    viva: [
      { q: 'Why can we not use routine paraffin sections for Oil Red O staining?', a: 'Because the xylene and alcohol used during routine processing completely dissolve and remove all lipids from the tissue.' },
      { q: 'What is the "staining" mechanism of Oil Red O?', a: 'It is a physical process where the dye is more soluble in fat than in its solvent, so it moves into the fat cells.' }
    ],
    mcq: [
      { q: 'Oil Red O stain requires which type of sections?', options: ['Paraffin', 'Frozen', 'Celloidin', 'Plastic'], answer: 1 },
      { q: 'Mounting medium for Oil Red O slides must be?', options: ['DPX', 'Canada Balsam', 'Aqueous (Glycerol Jelly)', 'Xylene'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'his-pas-d',
    title: 'PAS with Diastase (PAS-D)',
    isImportant: false,
    definition: 'Differential staining method used to distinguish glycogen from other PAS-positive substances.',
    principle: 'Diastase (amylase) is an enzyme that specifically digests and removes glycogen from tissue. Two slides are used: One is treated with diastase (PAS-D) and the other is not (PAS). Any magenta staining that is present in the "PAS" slide but missing in the "PAS-D" slide is confirmed to be glycogen.',
    mechanism: 'Enzymatic digestion followed by histochemical signaling.',
    types: ['Enzymatic Histochemistry'],
    specimen: 'FFPE sections (usually Liver).',
    reagents: [
      { component: 'Diastase or Saliva (source of amylase)', function: 'Glycogen digesting enzyme.' },
      { component: 'PAS reagents', function: 'Detection system.' }
    ],
    equipment: ['Water bath (37°C)', 'Coplin jars'],
    procedure: [
      'Take two slides (Slide A and Slide B).',
      'Incubate Slide A in Diastase solution for 30 mins at 37°C.',
      'Keep Slide B in distilled water (control).',
      'Perform routine PAS staining on both slides together.',
      'Compare the staining of the target area under a microscope.'
    ],
    observation: 'Slide B (Control): Bright magenta. Slide A (Diastase): Area is now clear/white.',
    result: 'Loss of magenta color after diastase treatment = Positive for Glycogen.',
    interpretation: 'Confirms the identity of PAS-positive material as glycogen specifically.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Diagnostic for Glycogen Storage Diseases (GSDs) and identifying glycogen in certain tumors (e.g., Clear cell carcinoma).',
    sourcesOfError: ['Inactive diastase enzyme.', 'Incomplete digestion.'],
    precautions: ['Always run the two slides side-by-side.'],
    normalVsAbnormal: 'Helps in the definitive identification of "Clear Cell" tumors.',
    applications: 'Hepatopathology and Oncopathology.',
    limitations: 'Does not affect neutral mucins or basement membranes.',
    examPoints: 'Used to identify Glycogen. Slide A (Diastase) vs Slide B (Control).',
    viva: [
      { q: 'What is the purpose of the diastase digestion in a PAS stain?', a: 'To specifically identify glycogen by removing it; if the magenta stain disappears after digestion, the substance was glycogen.' },
      { q: 'Where can you obtain diastase easily in a lab?', a: 'Amylase is present in human saliva, which can be used as a source if commercial diastase is unavailable.' }
    ],
    mcq: [
      { q: 'Diastase enzyme specifically breaks down?', options: ['Mucin', 'Glycogen', 'Lipid', 'Protein'], answer: 1 },
      { q: 'If a PAS-positive area remains magenta after diastase treatment, it is most likely?', options: ['Glycogen', 'Neutral Mucin', 'Water', 'Fat'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'his-van-gieson',
    title: 'Van Gieson\'s Stain',
    isImportant: false,
    definition: 'Simple differential stain used to distinguish between collagen and smooth muscle.',
    principle: 'Uses a mixture of Acid Fuchsin and Picric Acid. Collagen fibers have a high affinity for Acid Fuchsin in an acidic environment and stain red. Muscle and cytoplasm take up the smaller Picric acid molecules and stain yellow.',
    mechanism: 'Competitive differential staining based on dye affinity and molecular size.',
    types: ['HVG (Hematoxylin Van Gieson)'],
    specimen: 'FFPE sections.',
    reagents: [
      { component: 'Weigert\'s Iron Hematoxylin', function: 'Nuclear stain (acid resistant).' },
      { component: 'Van Gieson\'s Solution (Acid Fuchsin + Picric Acid)', function: 'Differential stain.' }
    ],
    equipment: ['Coplin jars'],
    procedure: [
      'Stain nuclei with Weigert\'s Iron Hematoxylin for 10 mins (must be black).',
      'Rinse in water.',
      'Stain with Van Gieson\'s solution for 3-5 minutes.',
      'Rinse quickly in distilled water (do not use tap water which removes picric acid).',
      'Dehydrate rapidly in 100% alcohol, clear and mount.'
    ],
    observation: 'Tri-color effect: Black nuclei, Red collagen, Yellow muscle.',
    result: 'Collagen: Bright Red. Muscle/Cytoplasm: Yellow. Nuclei: Black.',
    interpretation: 'Easier and faster than Masson\'s trichrome for basic collagen identification.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Identifying fibrosis in tissues and distinguishing smooth muscle (yellow) from fibrous tissue (red).',
    sourcesOfError: ['Over-washing in water after staining (removes the yellow picric acid).', 'Use of Harris Hematoxylin (decolorized by the picric acid).'],
    precautions: ['Dehydrate very quickly in absolute alcohol to preserve the yellow color.'],
    normalVsAbnormal: 'Normal connective tissue appears as distinct red streamers.',
    applications: 'Routine surgical pathology.',
    limitations: 'Fades over time; less permanent than Masson\'s trichrome.',
    examPoints: 'Collagen: Red. Muscle: Yellow. Nuclei: Black. Reagent: Picric Acid.',
    viva: [
      { q: 'What are the two dyes in Van Gieson\'s solution?', a: 'Acid Fuchsin (stains collagen red) and Picric Acid (stains muscle/cytoplasm yellow).' },
      { q: 'Why is Weigert\'s Iron Hematoxylin used in this stain?', a: 'Because the picric acid in the Van Gieson solution would decolorize Harris hematoxylin.' }
    ],
    mcq: [
      { q: 'In Van Gieson\'s stain, muscle is stained?', options: ['Red', 'Green', 'Yellow', 'Blue'], answer: 2 },
      { q: 'Which acid is used to stain collagen in the Van Gieson method?', options: ['Acetic acid', 'Picric acid', 'Acid Fuchsin', 'Hydrochloric acid'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
