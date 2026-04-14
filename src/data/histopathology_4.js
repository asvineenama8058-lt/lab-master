export const histopathologyData4 = [
  {
    id: 'his-zn-tissue',
    title: 'Ziehl-Neelsen (ZN) Stain for Tissue',
    isImportant: true,
    definition: 'Specialized acid-fast staining protocol used to identify Mycobacterium species in tissue sections.',
    principle: 'Mycobacteria have a waxy cell wall rich in mycolic acids. This waxy layer is resistant to routine stains but can be penetrated by Lipid-soluble dyes like Carbolic Fuchsin with the help of heat or detergents. Once stained, the bacilli resist decolorization by strong acids (Acid-fastness).',
    mechanism: 'Thermal penetration of waxy lipids followed by acid-resistance.',
    types: ['Routine ZN', 'Fite-Faraco (for Leprosy)'],
    specimen: 'FFPE sections.',
    reagents: [
      { component: 'Carbol Fuchsin', function: 'Primary stain.' },
      { component: '1% Acid Alcohol', function: 'Decolorizer.' },
      { component: 'Methylene Blue', function: 'Counterstain.' }
    ],
    equipment: ['Bunsen burner or microwave', 'Coplin jars'],
    procedure: [
      'Deparaffinize and rehydrate sections.',
      'Flood slide with Carbol Fuchsin and heat until steam rises (3-5 mins).',
      'Wash in tap water.',
      'Decolorize in 1% Acid Alcohol until pink color stops running.',
      'Wash thoroughly.',
      'Counterstain with Methylene Blue for 30 seconds.',
      'Dehydrate, clear and mount.'
    ],
    observation: 'Bright red, slender, beaded bacilli against a blue background.',
    result: 'Acid-Fast Bacilli (AFB): Red. Background: Blue.',
    interpretation: 'Presence of even a single AFB is highly significant.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Diagnostic for Tuberculosis (M. tuberculosis) and Leprosy (M. leprae). Note: Leprosy bacilli are "weakly" acid-fast and require the Fite-Faraco modification (using 1% H2SO4).',
    sourcesOfError: ['Over-decolorization removes stain from bacilli.', 'Inadequate heating prevents the primary stain from penetrating.'],
    precautions: ['Do not boil the stain; only steam should rise.', 'Check the water supply for contaminating environmental AFB.'],
    normalVsAbnormal: 'Abnormal: Seeing clusters of red bacilli in granulomatous inflammation.',
    applications: 'Infectious disease pathology.',
    limitations: 'Lacks high sensitivity; requires a high bacterial load for detection.',
    examPoints: 'Stains: Mycolic acid. Result: Red Bacilli. Mordant: Heat.',
    viva: [
      { q: 'Why are mycobacteria called "Acid Fast"?', a: 'Because once they are stained with Carbol Fuchsin, they resist decolorization by mineral acids due to the high mycolic acid content in their cell walls.' },
      { q: 'Which modification is used for staining M. leprae?', a: 'Fite-Faraco stain, which uses a weaker decolorizer (1% H2SO4) because leprosy bacilli are less acid-fast than TB bacilli.' }
    ],
    mcq: [
      { q: 'What is the primary stain in the ZN method?', options: ['Methylene Blue', 'Carbol Fuchsin', 'Crystal Violet', 'Eosin'], answer: 1 },
      { q: 'Acid-fastness is due to the presence of which substance in the cell wall?', options: ['Lipopolysaccharide', 'Mycolic Acid', 'Keratin', 'Calcium'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mycobacterium_tuberculosis_Ziehl-Neelsen_stain_02.jpg/640px-Mycobacterium_tuberculosis_Ziehl-Neelsen_stain_02.jpg'
    }
  },
  {
    id: 'his-gms',
    title: 'Grocott Methenamine Silver (GMS) Stain',
    isImportant: true,
    definition: 'Powerful silver-based staining method used primarily for the identification of fungal organisms in tissue.',
    principle: 'Polysaccharides in the fungal cell wall are oxidized by Chromic Acid to form aldehydes. These aldehydes then reduce the hexamine-silver complex (methenamine silver) to visible metallic silver. Gold chloride is used to tone the section.',
    mechanism: 'Induced Argentaffin reaction (Internal reduction of silver).',
    types: ['Grocott\'s Modification of Gomori\'s method'],
    specimen: 'FFPE sections.',
    reagents: [
      { component: '4% Chromic Acid', function: 'Strong oxidizing agent.' },
      { component: 'Methenamine Silver nitrate', function: 'Impregnation/Reduction solution.' },
      { component: 'Gold Chloride', function: 'Toner.' },
      { component: 'Light Green', function: 'Counterstain.' }
    ],
    equipment: ['Water bath (56°C)', 'Chemically clean glassware'],
    procedure: [
      'Oxidize in Chromic Acid for 1 hour.',
      'Treat with Sodium Bisulfite to remove excess chromic acid.',
      'Incubate in Methenamine Silver solution at 56°C for 60-90 minutes (until sections turn brown).',
      'Tone in Gold Chloride.',
      'Fix in Sodium Thiosulfate.',
      'Counterstain with Light Green.'
    ],
    observation: 'Fungi appear as sharply defined black silhouettes against a green background.',
    result: 'Fungi: Black. Background: Pale Green. Mucin: Grey/Black.',
    interpretation: 'Excellent for showing fungal morphology (hyphae, budding yeast, spores).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'The gold standard for diagnosing systemic fungal infections including Pneumocystis jirovecii, Aspergillus, and Cryptococcus.',
    sourcesOfError: ['Over-incubation in silver causes non-specific precipitation.', 'Metallic tools (forceps) cause silver mirroring.'],
    precautions: ['Consistently check the slide under a microscope during the silvering phase to avoid over-staining.'],
    normalVsAbnormal: 'Superior to PAS for detecting dead or degenerated fungal elements.',
    applications: 'Mycology and Autopsy pathology.',
    limitations: 'Reduces tissue morphology due to the harsh oxidation process.',
    examPoints: 'Result: Black Fungi. Oxidizer: Chromic Acid. Toning: Gold Chloride.',
    viva: [
      { q: 'Why is GMS preferred over PAS for fungi?', a: 'GMS is much more sensitive and provides better contrast, allowing even tiny fragments of fungi to be seen clearly as black silhouettes.' },
      { q: 'What is the oxidizing agent used in GMS?', a: 'Chromic Acid.' }
    ],
    mcq: [
      { q: 'GMS stain is specific for?', options: ['Bacteria', 'Fungi', 'Lipids', 'Amyloid'], answer: 1 },
      { q: 'The counterstain in Grocott\'s silver method is?', options: ['Eosin', 'Methylene blue', 'Light Green', 'Neutral Red'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'his-mucicarmine',
    title: 'Mayer\'s Mucicarmine Stain',
    isImportant: true,
    definition: 'Special stain used for the demonstration of acidic mucins and the identification of Cryptococcus capsule.',
    principle: 'Aluminum acts as a mordant that forms a complex with the dye Carmine. This positively charged complex binds specifically to the acidic groups in epithelial mucins.',
    mechanism: 'Mordant-dye complex binding to carboxylated and sulfonated mucins.',
    types: ['Southgate\'s modification'],
    specimen: 'FFPE sections.',
    reagents: [
      { component: 'Mucicarmine Concentrate', function: 'Primary stain.' },
      { component: 'Weigert\'s Iron Hematoxylin', function: 'Nuclear stain.' },
      { component: 'Metanil Yellow', function: 'Background counterstain.' }
    ],
    equipment: ['Coplin jars'],
    procedure: [
      'Deparaffinize and rehydrate.',
      'Stain with Weigert\'s Iron Hematoxylin (10 mins) - nuclei must be black.',
      'Wash and stain with Mucicarmine working solution for 1 hour.',
      'Rinse quickly with water.',
      'Counterstain with Metanil Yellow for 30 seconds.',
      'Dehydrate, clear and mount.'
    ],
    observation: 'Vivid red staining of mucin-producing cells.',
    result: 'Mucin: Deep Rose Red. Nuclei: Black. Capsule of Cryptococcus: Red. Background: Yellow.',
    interpretation: 'Determines the epithelial and acidic nature of the mucus.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Useful for diagnosing Adenocarcinomas (which produce mucin) and identifying Cryptococcus neoformans (the only fungus with a carminophilic capsule).',
    sourcesOfError: ['Over-counterstaining with yellow hides the red mucin.'],
    precautions: ['Mucicarmine solution is unstable; prepare fresh and store at 4°C.'],
    normalVsAbnormal: 'Identifies mucin-secreting signet ring cells in stomach cancer.',
    applications: 'Gastrointestinal and Pulmonary pathology.',
    limitations: 'Does not stain all types of mucins (e.g. neutral mucins).',
    examPoints: 'Stains: Acidic mucin & Cryptococcus. Result: Rose Red. Mordant: Aluminum.',
    viva: [
      { q: 'What is the diagnostic use of Mucicarmine in mycology?', a: 'To specifically identify Cryptococcus neoformans, because its polysaccharide capsule stains bright red.' },
      { q: 'What is the color of the background in a Mucicarmine stain?', a: 'Yellow (due to Metanil Yellow).' }
    ],
    mcq: [
      { q: 'Mayer\'s Mucicarmine is primarily used to demonstrate?', options: ['Glycogen', 'Epithelial Acidic Mucin', 'Collagen', 'Iron'], answer: 1 },
      { q: 'Which fungus has a capsule that stains with Mucicarmine?', options: ['Candida', 'Aspergillus', 'Cryptococcus', 'Mucor'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/H_e_stain.jpg/640px-H_e_stain.jpg'
    }
  },
  {
    id: 'his-giemsa-tissue',
    title: 'Giemsa Stain for Tissue (H. pylori)',
    isImportant: false,
    definition: 'Romanowsky-type stain modified for tissue sections to identify Helicobacter pylori and hematopoietic cells.',
    principle: 'A polychromatic stain containing Methylene Blue and Eosin. It relies on the varying affinity of different cell components for the basic and acidic dyes. In the stomach, Helicobacter bacilli take up the blue dye and stand out against the pale background.',
    mechanism: 'Differentiated binding of azure and eosin dyes.',
    types: ['May-Grunwald Giemsa (MGG)', 'Dilute Giemsa for tissue'],
    specimen: 'Gastric biopsy FFPE sections.',
    reagents: [
      { component: 'Giemsa Stock Solution', function: 'Primary polychromatic stain.' },
      { component: 'Buffered Water (pH 6.8)', function: 'Essential for correct color balance.' }
    ],
    equipment: ['Coplin jars'],
    procedure: [
      'Deparaffinize and rehydrate.',
      'Incurbate in working Giemsa solution overnight or 1 hour at 60°C.',
      'Differentiate in 1% Acetic Acid until the section is pale blue/pink.',
      'Dehydrate quickly, clear and mount.'
    ],
    observation: 'Small, curved blue bacilli on the surface of gastric mucus.',
    result: 'H. pylori: Dark Blue. Nuclei: Dark Blue. Cytoplasm: Pink.',
    interpretation: 'Identifies the causative agent of peptic ulcers and chronic gastritis.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Mandatory screen in gastric biopsies for H. pylori infection.',
    sourcesOfError: ['Incorrect pH of the water (pH must be exactly 6.8).', 'Over-differentiation in acid.'],
    precautions: ['Use only buffered distilled water.'],
    normalVsAbnormal: 'A "Positive" result linked with inflammation usually indicates a need for Triple Therapy (Antibiotics).',
    applications: 'Gastroenterology.',
    limitations: 'Lacks the sensitivity of the Warthin-Starry silver stain or IHC.',
    examPoints: 'Detects H. pylori. Polychromatic stain. pH: 6.8.',
    viva: [
      { q: 'What is H. pylori?', a: 'Helicobacter pylori is a spiral-shaped bacterium that lives in the stomach and is a major cause of ulcers and gastric cancer.' },
      { q: 'Why is the pH of the buffer critical for Giemsa?', a: 'Incorrect pH (e.g. too acidic) will cause the entire section to appear too pink, hiding the blue bacteria.' }
    ],
    mcq: [
      { q: 'Giemsa stain for tissue is most commonly used to detect?', options: ['TB bacilli', 'H. pylori', 'Cancer cells', 'Muscle'], answer: 1 },
      { q: 'Which color do H. pylori bacilli appear in a Giemsa stain?', options: ['Red', 'Dark Blue', 'Green', 'Yellow'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/H_pylori_giemsa.jpg/640px-H_pylori_giemsa.jpg'
    }
  }
];
