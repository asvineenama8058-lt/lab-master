export const clinicalPathologyData3 = [
  {
    id: 'cpa-semen-physical',
    title: 'Physical Examination of Semen',
    isImportant: false,
    definition: 'Assessment of the macroscopic characteristics of human ejaculate.',
    principle: 'Macroscopic parameters like volume, color, pH, and viscosity are influenced by the secretory activity of the accessory sex glands (prostate, seminal vesicles, and bulbourethral glands).',
    mechanism: 'Visual and physical monitoring of fluid properties.',
    types: ['Routine Macroscopy'],
    specimen: 'Semen (Freshly collected after 2-7 days abstinence).',
    reagents: [{ component: 'pH paper (range 6.0 - 10.0)', function: 'Measure acidity/alkalinity.' }],
    equipment: ['Graduated cylinder', 'Pipette', 'Timer'],
    procedure: [
      'Record the collection time and abstinence period.',
      'Allow the sample to liquefy at 37°C or room temperature (note the time taken).',
      'Measure the total volume using a graduated cylinder.',
      'Check the color and odor.',
      'Measure pH by placing a drop on pH paper.',
      'Assess viscosity (consistency) by observing the length of a thread formed when dropping from a pipette.'
    ],
    observation: 'Normal semen liquefies in <30 mins, has a grey-white opalescent color, and a pH of >7.2.',
    result: 'Volume (ml), pH, Liquefaction time (min).',
    interpretation: 'Low volume (<1.5ml) may indicate obstruction or retrograde ejaculation. High pH (>8.0) suggests infection.',
    referenceRange: 'Volume: >1.5 ml | pH: 7.2 - 8.0 | Liquefaction: < 60 mins.',
    clinicalSignificance: 'Initial assessment of the functional health of accessory glands.',
    sourcesOfError: ['Incomplete collection (first part of ejaculate is rich in sperm).', 'Delayed measurement (liquefaction artifacts).'],
    precautions: ['Keep the sample warm (20-37°C) to maintain sperm function.'],
    normalVsAbnormal: 'Yellow color indicates jaundice or drugs; Red/Brown indicates blood (hemospermia).',
    applications: 'Infertility workup.',
    limitations: 'Does not provide info on sperm quality.',
    examPoints: 'Normal pH: Alkaline (7.2-8.0). Main bulk of volume comes from Seminal Vesicles.',
    viva: [
      { q: 'What is the normal liquefaction time?', a: 'Within 30 to 60 minutes at room temperature.' },
      { q: 'Which gland contributes the most to the volume of semen?', a: 'Seminal Vesicles (~60-70%).' }
    ],
    mcq: [
      { q: 'The normal pH of human semen is?', options: ['Acidic (<6.0)', 'Alkaline (7.2-8.0)', 'Neutral (7.0)', 'Highly alkaline (>10.0)'], answer: 1 },
      { q: 'Grey-white opalescent appearance is?', options: ['Normal', 'Abnormal', 'Infectious', 'No sperm'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Cryopreservation_USDA_Gene_Bank.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-sperm-count',
    title: 'Microscopic Sperm Count (Neubauer)',
    isImportant: true,
    definition: 'Quantitative estimation of the total number of spermatozoa in 1 ml of semen.',
    principle: 'Semen is diluted with a spermicidal fluid (to immobilize sperm) and placed in a counting chamber of known dimensions (Neubauer). The number of sperm in a specific volume is counted and multiplied by the dilution factor to get the concentration.',
    mechanism: 'Hemocytometry (Volumetric dilution and counting).',
    types: ['Total Sperm Count'],
    specimen: 'Liquefied Semen.',
    reagents: [
      { component: 'Diluting Fluid (Sodium bicarbonate + Formalin)', function: 'Kills sperm (immobilizes) and preserves morphology.' }
    ],
    equipment: ['Improved Neubauer Chamber', 'WBC Pipette or Micropipette', 'Cover glass'],
    procedure: [
      'Dilute semen (usually 1:20) using diluting fluid.',
      'Mix thoroughly.',
      'Charge the Neubauer chamber.',
      'Allow cells to settle (3-5 mins).',
      'Count sperm in 4 large corner squares (WBC squares) or center squares depending on density.',
      'Calculate: Count x 20 / Volume counted.'
    ],
    observation: 'Stationary, clear spermatozoa visible under 40x objective.',
    result: 'Report in Million/ml.',
    interpretation: '< 15 Million/ml is Oligozoospermia. Zero is Azoospermia.',
    referenceRange: '> 15 Million/ml (WHO 2010/2021).',
    clinicalSignificance: 'Primary indicator of male fertility potential.',
    sourcesOfError: ['Using non-liquefied semen (clumps of sperm).', 'Poor mixing after dilution.'],
    precautions: ['Count only "heads" to avoid double counting tails.'],
    normalVsAbnormal: 'Azoospermia requires a centrifuged pellet check to confirm.',
    applications: 'Infertility and post-vasectomy check.',
    limitations: 'Does not measure motility or morphology.',
    examPoints: 'Dilution: 1:20. Lower limit: 15 Million/ml. Formula: (N x Dilution) / (Squares x 0.1).',
    viva: [
      { q: 'Define Oligozoospermia.', a: 'Sperm count less than 15 million per ml of semen.' },
      { q: 'Why is formalin added to the diluting fluid?', a: 'To kill the sperm and fix their morphology for accurate counting.' }
    ],
    mcq: [
      { q: 'Standard dilution for sperm count using a WBC pipette is?', options: ['1:10', '1:20', '1:100', '1:200'], answer: 1 },
      { q: 'Total lack of sperm in semen is called?', options: ['Oligospermia', 'Azoospermia', 'Polyzoospermia', 'Necrospermia'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-sperm-motility',
    title: 'Sperm Motility Assessment',
    isImportant: true,
    definition: 'Evaluation of the percentage and quality of semen movement.',
    principle: 'Live sperm show varying degrees of movement. Under a microscope, 100-200 sperm are observed, and their movement is graded according to global standards (WHO).',
    mechanism: 'Visual kinetic grading.',
    types: ['WHO 2021 Grading'],
    specimen: 'Liquefied Semen (Fresh).',
    reagents: [{ component: 'Normal Saline (if dilution is needed from thick samples)', function: 'Maintains isotonicity.' }],
    equipment: ['Glass slide', 'Coverslip', 'Phase Contrast microscope (preferred)'],
    procedure: [
      'Place 10 µl of semen on a pre-warmed slide and cover with a coverslip.',
      'Wait for 1 minute for movement to stabilize.',
      'Examine under 40x objective away from the edges.',
      'Grade 100 sperm as: PR (Progressive), NP (Non-Progressive), or IM (Immotile).',
      'Calculate percentage of each category.'
    ],
    observation: 'Sperm showing forward movement (PR) vs twitching (NP) vs static (IM).',
    result: 'Total motility (PR + NP) and Progressive motility (PR) in %.',
    interpretation: 'A low percentage of progressive sperm is termed Asthenozoospermia.',
    referenceRange: 'Total Motility: >40% | Progressive: >32%.',
    clinicalSignificance: 'Motility is critical because only progressively moving sperm can travel through the female reproductive tract to reach the egg.',
    sourcesOfError: ['Cold slides (kills or slows sperm).', 'Delayed examination (>1 hour after collection).'],
    precautions: ['Always maintain slide temperature at ~37°C for accurate motility.'],
    normalVsAbnormal: 'Abnormal: Mostly IM (Immotile) sperm - needs vitality test.',
    applications: 'Central to fertility evaluation.',
    limitations: 'Highly subjective; requires consistent training.',
    examPoints: 'PR = Progressive. NP = Non-progressive. IM = Immotile. PR > 32% is normal.',
    viva: [
      { q: 'What is Asthenozoospermia?', a: 'A condition where the percentage of progressively motile sperm is less than 32%.' },
      { q: 'How many sperm should you count for a motility assessment?', a: 'At least 200 sperm are recommended for statistical accuracy.' }
    ],
    mcq: [
      { q: 'Progressive motility is normal if it is above?', options: ['10%', '32%', '60%', '90%'], answer: 1 },
      { q: 'Non-progressive motility refers to sperm that are?', options: ['Moving forward fast', 'Twitching in place', 'Completely static', 'Dead'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-sperm-morphology',
    title: 'Sperm Morphology (Staining & Evaluation)',
    isImportant: false,
    definition: 'Detailed microscopic analysis of the shape and size of spermatozoa.',
    principle: 'Sperm are stained (e.g., Papanicolaou, Giemsa, or Bryan-Leishman) to visualize the Head, Midpiece, and Tail. Kruger\'s strict criteria define what a "Normal" sperm looks like.',
    mechanism: 'Differential staining of cell compartments.',
    types: ['Stained thin smear'],
    specimen: 'Semen.',
    reagents: [{ component: 'Giemsa or Papanicolaou stain', function: 'Vitalize structure.' }],
    equipment: ['Microscope (100x Oil Immersion)'],
    procedure: [
      'Prepare a thin smear of semen on a clean slide.',
      'Air-dry and fix with methanol.',
      'Stain using the chosen protocol.',
      'Observe under oil immersion.',
      'Count 100-200 sperm and classify individual defects (Head, Midpiece, Tail).',
      'Report % of "Normal" forms.'
    ],
    observation: 'Normal forms have an oval head with a smooth contour, a visible acrosome (40-70% of head), and a long straight tail.',
    result: 'Percentage of Normal Forms.',
    interpretation: 'Low percentage of normal forms is Teratozoospermia.',
    referenceRange: '> 4% Normal Forms (Kruger\'s strict criteria).',
    clinicalSignificance: 'Abnormal morphology interferes with the sperm\'s ability to penetrate the egg (zona pellucida).',
    sourcesOfError: ['Over-staining obscuring details.', 'Smeared too thickly.'],
    precautions: ['Evaluate only whole sperm (head + tail).'],
    normalVsAbnormal: 'Tapering heads, double tails, or absent acrosomes are counted as abnormal.',
    applications: 'Assessment of sperm quality and IVF success prediction.',
    limitations: 'Requires high level of morphological expertise.',
    examPoints: 'Teratozoospermia: <4% Normal forms. Criteria: Kruger\'s Rigid/Strict.',
    viva: [
      { q: 'What is Teratozoospermia?', a: 'Condition where less than 4% of sperm have normal morphological forms.' },
      { q: 'Which part of the sperm head contains the enzymes for egg penetration?', a: 'The Acrosome.' }
    ],
    mcq: [
      { q: 'Lower reference limit for normal sperm morphology is?', options: ['4%', '15%', '50%', '80%'], answer: 0 },
      { q: 'Abnormal sperm shapes are technically called?', options: ['Azoospermia', 'Teratozoospermia', 'Necrospermia', 'Oligospermia'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'cpa-semen-fructose',
    title: 'Semen Fructose Test (Resorcinol)',
    isImportant: true,
    definition: 'Chemical test to detect the sugar fructose in semen, which serves as a major nutrient for sperm.',
    principle: 'Fructose is produced by the seminal vesicles. In the presence of concentrated hydrochloric acid and heat, resorcinol reacts with fructose to form a red-colored compound (Seliwanoff\'s reaction).',
    mechanism: 'Ketose sugar colorimetric reaction.',
    types: ['Qualitative (Screening)'],
    specimen: 'Liquefied Semen.',
    reagents: [
      { component: 'Resorcinol reagent (0.1% in 33% HCl)', function: 'Color forming indicator.' }
    ],
    equipment: ['Boiling water bath', 'Test tubes'],
    procedure: [
      'Mix 0.5 ml of semen with 5 ml of resorcinol reagent.',
      'Place the tube in a boiling water bath for exactly 60 seconds.',
      'Observe for color change.'
    ],
    observation: 'Immediate appearance of an orange-red color indicates the presence of fructose.',
    result: 'Positive (Orange-red) or Negative (No change).',
    interpretation: 'Negative result suggests congenital absence of seminal vesicles or obstruction of the ejaculatory ducts.',
    referenceRange: 'Positive (>13 µmol per ejaculate).',
    clinicalSignificance: 'Crucial for investigating the cause of Azoospermia. If fructose is absent and count is zero, it strongly suggests a proximal anatomical obstruction or agenesis.',
    sourcesOfError: ['Over-boiling (may cause non-specific color).'],
    precautions: ['Resorcinol reagent is highly acidic; handle with care.'],
    normalVsAbnormal: 'Normal Azoospermia (Negative count, Positive Fructose) = High chance of obstruction/Vasectomy.',
    applications: 'Infertility and surgical workup.',
    limitations: 'Qualitative test does not quantify the exact amount of fructose.',
    examPoints: 'Antigen: Resorcinol. Detects Fructose. Negative in Seminal Vesicle Aplasia.',
    viva: [
      { q: 'What is the diagnostic significance of a negative fructose test in an azoospermic patient?', a: 'It suggests that either the seminal vesicles are absent or the ejaculatory ducts are obstructed, as both sperm and fructose are failing to reach the ejaculate.' },
      { q: 'Which gland produces most of the fructose in semen?', a: 'Seminal Vesicles.' }
    ],
    mcq: [
      { q: 'Semen fructose test uses which reagent?', options: ['Benedicts', 'Resorcinol', 'Barium', 'Silver'], answer: 1 },
      { q: 'A red color formation in 60 seconds indicates?', options: ['Negative', 'Positive', 'Inconclusive', 'Expired'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
