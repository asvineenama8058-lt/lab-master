export const clinicalPathologyData1 = [
  {
    id: 'cpa-csf',
    title: 'Routine Examination of Cerebrospinal Fluid (CSF)',
    isImportant: true,
    definition: 'Diagnostic evaluation of fluid surrounding the brain and spinal cord.',
    principle: 'CSF analysis involves Physical, Chemical, and Microscopic evaluation. Dramatic changes in parameters allow differentiation between bacterial, viral, and tubercular meningitis.',
    mechanism: 'Infections alter blood-brain barrier permeability, allowing proteins/cells to flood the CSF.',
    types: ['Physical Exam', 'Chemical Exam', 'Microscopic Exam'],
    specimen: 'Undiluted CSF sample.',
    reagents: [
      { component: 'Pandy Reagent', function: 'Saturated phenol detects increased globulin proteins.' }
    ],
    equipment: ['Neubauer chamber', 'Microscope', 'Centrifuge'],
    procedure: [
      'Physical: Note appearance (clear, turbid, completely bloody/xanthochromic).',
      'Microscopic: Charge Neubauer directly with undiluted CSF. Count cells in all 9 mm square zones.',
      'Chemical (Protein): Add 1 drop CSF to 1 ml Pandy reagent. Cloudiness = positive.',
      'Chemical (Glucose): Perform standard biochemical estimation.'
    ],
    observation: 'Normal CSF is crystal clear. Meningitis causes milky or heavy turbidity.',
    result: 'Total WBC count, DLC, Protein, and Glucose reported.',
    interpretation: 'Low glucose and high neutrophils signify severe bacterial meningitis.',
    referenceRange: 'Cells: 0-5 Lymphocytes/cumm. Protein: 15-45 mg/dl. Glucose: 50-80 mg/dl.',
    clinicalSignificance: 'Mandatory emergency diagnostic for meningitis or hemorrhagic stroke.',
    sourcesOfError: ['Traumatic tap adds false RBCs mimicking hemorrhage.'],
    precautions: ['Analyze STAT within 1 hour. Cells lyse rapidly in CSF.'],
    normalVsAbnormal: 'Xanthochromia strictly defines subarachnoid hemorrhage vs a traumatic tap.',
    applications: 'Neurology diagnostics.',
    limitations: 'Lumbar puncture contraindicated in severe elevated intracranial pressure.',
    examPoints: 'Bacterial = low glucose, high neutrophils. Viral = normal glucose, high lymphocytes.',
    viva: [
      { q: 'What is Xanthochromia?', a: 'Yellow/pink CSF supernatant from RBC breakdown following subarachnoid hemorrhage.' },
      { q: 'Classic CSF profile for Bacterial Meningitis?', a: 'Turbid fluid, massively high Neutrophils, low glucose.' }
    ],
    mcq: [
      { q: 'Yellowish CSF supernatant is termed:', options: ['Hematuria', 'Chylous', 'Xanthochromia', 'Turbidity'], answer: 2 },
      { q: 'Pandy reagent detects:', options: ['Glucose', 'Globulin', 'Albumin', 'Cells'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/1317_CFS_Circulation.jpg/960px-1317_CFS_Circulation.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'cpa-semen',
    title: 'Routine Semen Analysis',
    isImportant: true,
    definition: 'Evaluation of male ejaculate assessing primarily for fertility.',
    principle: 'Semen analysis tests macroscopic traits (volume, liquefaction, viscosity) and microscopic traits (concentration, motility, morphology). It identifies functional status of spermatozoa.',
    mechanism: 'Prostatic enzymes break down seminal vesicle coagulum allowing microscopic motility assessment.',
    types: ['Macroscopic', 'Microscopic', 'Vitality'],
    specimen: 'Ejaculated semen collected after 2-7 days abstinence.',
    reagents: [
      { component: 'Eosin-Nigrosin', function: 'Vitality stain separating live and dead sperm.' }
    ],
    equipment: ['Neubauer or Makler chamber', 'Microscope'],
    procedure: [
      'Note collection time. Let sample liquefy at Room Temperature (20-30 mins).',
      'Record volume, pH, and viscosity.',
      'Place small drop on pre-warmed slide. Grade motility per 100 sperms.',
      'Dilute semen 1:20 to kill sperms. Charge Neubauer chamber and count total.',
      'Stain with Eosin-Nigrosin for vitality.'
    ],
    observation: 'Live sperms actively swimming progressively across microscopic field.',
    result: 'Oligozoospermic, Azoospermic, or Normozoospermic.',
    interpretation: 'Vital for determining male factor infertility causes.',
    referenceRange: 'Volume: >1.5ml. Count: >15 Million/ml. Motility: >32% Progressive.',
    clinicalSignificance: 'Mandatory test for IVF prep and urological infertility consults.',
    sourcesOfError: ['Cold exposure actively kills sperm, ruining motility results.'],
    precautions: ['Must strictly observe 2 to 7 days sexual abstinence.'],
    normalVsAbnormal: 'Azoospermia indicates zero sperm production or total blockage.',
    applications: 'Infertility Clinics.',
    limitations: 'Does not fully assess strictly functional fertilization capacity (needs advanced functional assays).',
    examPoints: 'Azoospermia = No sperms. Asthenozoospermia = Poor motility.',
    viva: [
      { q: 'Define Azoospermia.', a: 'Absolute lack of any spermatozoa explicitly in ejaculate.' },
      { q: 'What does Eosin-Nigrosin show?', a: 'Dead sperms take up eosin (pink). Live remain white.' }
    ],
    mcq: [
      { q: 'Lower reference limit for sperm concentration according to WHO:', options: ['5 M/ml', '15 M/ml', '50 M/ml', '100 M/ml'], answer: 1 },
      { q: 'Poor sperm motility is technically termed:', options: ['Low count', 'No semen', 'Asthenozoospermia', 'Abnormal morphology'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Cryopreservation_USDA_Gene_Bank.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Mice_X_Y_chromosomes.jpg'
    }
  }
];
