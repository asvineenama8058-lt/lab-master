export const clinicalPathologyData6 = [
  {
    id: 'cpa-stool-flotation',
    title: 'Stool Concentration: Saturated Salt Flotation',
    isImportant: false,
    definition: 'Technique used to concentrate helminth eggs from a large volume of stool by letting them float to the surface of a high-density liquid.',
    principle: 'Uses a solution of saturated sodium chloride (S.G. 1.200). Most helminth eggs (like Hookworm, Ascaris) have a lower specific gravity and will float to the top, while heavier debris and some eggs (like Taenia/Operculated eggs) will sink.',
    mechanism: 'Buoyancy based on specific gravity differentiation.',
    types: ['Willis Flotation Method'],
    specimen: 'Stool (~1-2 grams).',
    reagents: [{ component: 'Saturated Sodium Chloride solution (S.G. 1.200)', function: 'High-density floating medium.' }],
    equipment: ['Small container/beaker', 'Slide', 'Cover glass'],
    procedure: [
      'Mix 1-2g of stool with a small amount of saturated salt solution to form a slurry.',
      'Fill the container to the brim with more salt solution until a positive meniscus forms.',
      'Carefully place a clean glass slide on top of the container, touching the meniscus.',
      'Let it stand for exactly 15-20 minutes.',
      'Lift the slide vertically, flip it, and cover with a coverslip.',
      'Examine under 10x and 40x.'
    ],
    observation: 'Concentrated parasite eggs localized on the surface.',
    result: 'Report eggs seen per slide.',
    interpretation: 'Much higher sensitivity than direct smear for light infections.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Diagnostic for Hookworm (Ancylostoma) and Ascaris lumbricoides when eggs are scarce in routine smears.',
    sourcesOfError: ['Leaving the slide for too long (>20 mins) causes eggs to burst or distort.', 'Using a solution with low specific gravity.'],
    precautions: ['The container must be completely full to ensure the slide touches the fluid.'],
    normalVsAbnormal: 'Provides a cleaner field than a direct wet mount.',
    applications: 'Epidemiological surveys.',
    limitations: 'Does not float heavy eggs (e.g., Taenia, Clonorchis) or larvae (Strongyloides).',
    examPoints: 'Reagent: Saturated NaCl. Goal: Float light eggs. Diagnostic for Hookworm.',
    viva: [
      { q: 'Why do hookworm eggs float in saturated salt solution?', a: 'Because they have a specific gravity (~1.05) which is lower than the specific gravity of the saturated salt solution (1.20).' },
      { q: 'What is the "meniscus" and why is it important here?', a: 'The meniscus is the curved upper surface of the liquid. A positive (bulging) meniscus is needed so the slide can touch the fluid without sinking.' }
    ],
    mcq: [
      { q: 'Saturated salt solution has a specific gravity of?', options: ['1.000', '1.050', '1.200', '1.500'], answer: 2 },
      { q: 'Which egg is usually NOT found by the flotation method?', options: ['Ascaris', 'Hookworm', 'Taenia', 'Enterobius'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-stool-sedimentation',
    title: 'Stool Concentration: Formal-Ether Sedimentation',
    isImportant: true,
    definition: 'Universal concentration technique used to recover a wide range of protozoan cysts and helminth eggs from feces.',
    principle: 'Fecal debris is dissolved and extracted by ether, while parasites are fixed by formalin and forced to the bottom by centrifugation due to their higher density.',
    mechanism: 'Chemical extraction of fat/debris followed by centrifugal sedimentation.',
    types: ['Ritchie Technical Modification'],
    specimen: 'Stool.',
    reagents: [
      { component: '10% Formalin', function: 'Fixes and preserves the parasites.' },
      { component: 'Ethyl Ether / Ethyl Acetate', function: 'Extracts fat and organic debris.' }
    ],
    equipment: ['Centrifuge', 'Centrifuge tubes', 'Gauze'],
    procedure: [
      'Mix 1g of stool with 10% formalin and strain through gauze into a centrifuge tube.',
      'Add 3 ml of ether and shake vigorously for 30 seconds.',
      'Centrifuge at 2000 RPM for 2 minutes.',
      'Four layers form: Ether (top), Debris plug, Formalin, and Sediment (bottom).',
      'Discard the top three layers by loosening the plug and inverted pouring.',
      'Examine the sediment under a microscope.'
    ],
    observation: 'Concentrated parasites (cysts and eggs) in the final droplet.',
    result: 'Detection of parasites even in low-density infections.',
    interpretation: 'The most reliable common concentration method for a general parasite screen.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Recovery of Schistosoma eggs, protozoal cysts, and Operculated eggs that are missed by flotation.',
    sourcesOfError: ['Using old fecal samples.', 'Improperly removing the debris plug.'],
    precautions: ['Ether is highly flammable; use only in a well-ventilated area without open flames.'],
    normalVsAbnormal: 'Provides the broadest range of parasite recovery.',
    applications: 'Comprehensive parasite profiling.',
    limitations: 'Trophozoites are killed by the formalin.',
    examPoints: 'Layers: Ether -> Debris -> Formalin -> Sediment. Excellent for Cysts & Operculated eggs.',
    viva: [
      { q: 'Name the four layers formed after centrifugation in the Formal-Ether method.', a: '1. Ether (top), 2. Plug of fecal debris, 3. Formalin, 4. Sediment (bottom).' },
      { q: 'In which layer are the parasites found?', a: 'In the Sediment (bottom layer).' }
    ],
    mcq: [
      { q: 'Which reagent extracts fat and debris in the sedimentation method?', options: ['Formalin', 'Ether', 'Saline', 'Acid'], answer: 1 },
      { q: 'Formal-Ether concentration is best for recovering?', options: ['Trophozoites', 'Motile larvae', 'Cysts and eggs', 'Bacteria'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-gastric-analysis',
    title: 'Gastric Analysis (Free & Total Acidity)',
    isImportant: false,
    definition: 'Laboratory procedure to measure the acid content of gastric secretions.',
    principle: 'Gastric juice contains Free HCl and Combined acidity (total). These are measured by titrating a known volume of gastric juice against 0.1 N Sodium Hydroxide using specific indicators (Topfer\'s for free acid, Phenolphthalein for total).',
    mechanism: 'Acid-base neutralization titration.',
    types: ['Fractional Test Meal (FTM)', 'Pentagastrin Stimulation'],
    specimen: 'Gastric juice (aspirated via Ryle\'s tube).',
    reagents: [
      { component: '0.1 N Sodium Hydroxide (NaOH)', function: 'Titrant.' },
      { component: 'Topfer\'s Reagent', function: 'Indicator for Free HCl (Red to Yellow).' },
      { component: 'Phenolphthalein', function: 'Indicator for Total Acidity (Colorless to Pink).' }
    ],
    equipment: ['Burette', 'Conical flask', 'Ryle\'s tube'],
    procedure: [
      'Pipette 5 ml of filtered gastric juice into a flask.',
      'Add 2 drops of Topfer\'s reagent. If it turns red, Free HCl is present.',
      'Titrate against 0.1 N NaOH until the red color turns Canary Yellow (Note reading - A).',
      'Add 2 drops of Phenolphthalein to the same flask.',
      'Continue titration until a faint pink color appears (Note final reading - B).',
      'Results expressed in mEq/L or Degrees.'
    ],
    observation: 'Sequential color changes: Red -> Yellow -> Pink.',
    result: 'Free Acidity = A x 20. Total Acidity = B x 20 (for 5ml sample).',
    interpretation: 'Achlorhydria (Absence of acid) is seen in Gastric Cancer and Pernicious Anemia. Hyperchlorhydria is seen in Peptic Ulcers.',
    referenceRange: 'Free Acid: 20-40 Units | Total Acid: 50-70 Units.',
    clinicalSignificance: 'Diagnosis of Zollinger-Ellison syndrome (massive acid) and Pernicious Anemia.',
    sourcesOfError: ['Saliva contamination (neutralizes acid).', 'Bile reflux.'],
    precautions: ['Patient must be fasting (12 hours).'],
    normalVsAbnormal: 'Abnormal: Total lack of acid even after stimulation (Pernicious Anemia).',
    applications: 'Gastroenterology (Mostly legacy).',
    limitations: 'Largely replaced by Endoscopy and pH-monitoring.',
    examPoints: 'Achlorhydria = No acid. Topfer\'s = Free HCl. Phenolphthalein = Total Acidity.',
    viva: [
      { q: 'Which indicator is used to detect Free HCl in gastric juice?', a: 'Topfer\'s reagent (Dimethyl-amino-azobenzene).' },
      { q: 'Define Achlorhydria.', a: 'The absolute absence of hydrochloric acid in gastric secretions, even after stimulation.' }
    ],
    mcq: [
      { q: 'Indicator used for Total Acidity in gastric analysis is?', options: ['Methyl orange', 'Phenolphthalein', 'Crystal violet', 'Iodine'], answer: 1 },
      { q: 'Decreased gastric acidity is called?', options: ['Hyperchlorhydria', 'Achlorhydria', 'Hypochlorhydria', 'Xerostomia'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-rut',
    title: 'Rapid Urease Test (RUT)',
    isImportant: true,
    definition: 'Rapid diagnostic test for the detection of Helicobacter pylori in gastric biopsy specimens.',
    principle: 'H. pylori produces a potent enzyme called Urease. When a gastric biopsy is placed in a medium containing urea and a pH indicator (Phenol Red), the urease breaks down urea into ammonia. The ammonia raises the pH, causing the color to change from yellow to pink.',
    mechanism: 'Enzymatic hydrolysis of urea creating alkaline shift.',
    types: ['CLO Test', 'Urea Breath Test (Alternative)'],
    specimen: 'Gastric antral biopsy (Fresh).',
    reagents: [{ component: 'Urea-Agar or Urea-Broth with Phenol Red', function: 'Reaction medium.' }],
    equipment: ['Biospy forceps', 'Test tube or Test well'],
    procedure: [
      'Obtain a fresh gastric biopsy through endoscopy.',
      'Immediately place the biopsy into the test medium.',
      'Incubate at room temperature or 37°C.',
      'Check for color change at 1 hour and 24 hours.'
    ],
    observation: 'Color change from Yellow (Negative) to bright Pink/Magenta (Positive).',
    result: 'Positive or Negative for H. pylori urease.',
    interpretation: 'A positive test indicates colonization of the stomach by H. pylori.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Provides the "Fastest" diagnosis of H. pylori during an endoscopy, allowing immediate prescription of treatment.',
    sourcesOfError: ['Presence of other urease-producing bacteria (very rare in the stomach).', 'Recent antibiotic or PPI use (suppresses H. pylori).'],
    precautions: ['Read the result within 24 hours to avoid false positives from bacterial overgrowth.'],
    normalVsAbnormal: 'Highly accurate (>95% sensitivity and specificity).',
    applications: 'Gastroenterology.',
    limitations: 'Requires an invasive endoscopy to obtain the sample.',
    examPoints: 'Enzyme: Urease. Indicator: Phenol Red. Result: Yellow to Pink.',
    viva: [
      { q: 'How does the Rapid Urease Test detect H. pylori?', a: 'By detecting the production of the enzyme urease, which breaks down urea into ammonia, raising the pH and changing the color of the indicator.' },
      { q: 'Name the color change in a positive RUT.', a: 'Yellow to Pinkish-red.' }
    ],
    mcq: [
      { q: 'H. pylori is a major cause of?', options: ['Diarrhea', 'Peptic Ulcers', 'Pneumonia', 'Malaria'], answer: 1 },
      { q: 'The enzyme detected in RUT is?', options: ['Amylase', 'Urease', 'Catalase', 'Oxidase'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
