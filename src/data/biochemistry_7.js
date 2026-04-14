export const biochemistryData7 = [
  {
    id: 'bio-amylase',
    title: 'Estimation of Serum Amylase',
    isImportant: true,
    definition: 'Enzyme assay diagnosing acute pancreatitis.',
    principle: 'Amylase hydrolyzes 2-chloro-4-nitrophenyl-a-D-maltotrioside (CNP-G3) to release 2-chloro-4-nitrophenol (CNP). The rate of formation of the yellow CNP is proportional to amylase activity.',
    mechanism: 'Kinetic cleavage of oligosaccharides.',
    types: ['Kinetic Colorimetric Method'],
    specimen: 'Serum or Heparin Plasma.',
    reagents: [
      { component: 'CNP-G3 Substrate', function: 'Specific synthetic substrate for human amylase.' }
    ],
    equipment: ['Spectrophotometer (405nm)'],
    procedure: [
      'Mix 1.0 ml reagent with 20 µl serum.',
      'Read absorbance kinetically every minute for 3 minutes.',
      'Multiply ΔA/min by conversion factor.'
    ],
    observation: 'Gradual formation of yellow color.',
    result: 'Amylase Activity in U/L.',
    interpretation: 'Levels > 3x normal strongly indicate acute pancreatitis.',
    referenceRange: '28 - 100 U/L.',
    clinicalSignificance: 'Primary emergency marker for severe abdominal pain.',
    sourcesOfError: ['Salivary contamination from talking over the tube falsely elevates results.'],
    precautions: ['Avoid pipetting by mouth.'],
    normalVsAbnormal: 'Elevated in mumps (salivary amylase isoform).',
    applications: 'Gastroenterology emergencies.',
    limitations: 'Less specific than Lipase (can arise from salivary glands).',
    examPoints: 'Requires Calcium and Chloride as absolute activators.',
    viva: [
      { q: 'Why is Lipase better than Amylase?', a: 'Lipase is exclusively pancreatic. Amylase is also salivary.' }
    ],
    mcq: [
      { q: 'Amylase digests:', options: ['Proteins', 'Lipids', 'Starch', 'DNA'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  },
  {
    id: 'bio-lipase',
    title: 'Estimation of Serum Lipase',
    isImportant: true,
    definition: 'Gold standard enzymatic assay for acute pancreatitis.',
    principle: 'Lipase breaks down a synthetic chromogenic substrate (e.g. 1,2-o-dilauryl-rac-glycero-3-glutaric acid) releasing a dye that is measured photometrically.',
    mechanism: 'Hydrolase cleavage of fat esters.',
    types: ['Enzymatic Colorimetric Kinetic'],
    specimen: 'Serum.',
    reagents: [
      { component: 'Colipase', function: 'Essential co-factor preventing bile acid inhibition.' },
      { component: 'Chromogenic Substrate', function: 'Specific for pancreatic lipase.' }
    ],
    equipment: ['Spectrophotometer'],
    procedure: [
      'Mix working reagent with serum.',
      'Read absorbance kinetically.'
    ],
    observation: 'Color change measured kinetically.',
    result: 'Lipase Activity in U/L.',
    interpretation: 'Strictly specific for acute and chronic pancreatitis.',
    referenceRange: '13 - 60 U/L.',
    clinicalSignificance: 'Remains elevated longer than Amylase in pancreatitis.',
    sourcesOfError: ['Hemolysis interferes heavily.'],
    precautions: ['Process unhemolyzed serum.'],
    normalVsAbnormal: 'High specificity for pancreatic tissue damage.',
    applications: 'Emergency panels.',
    limitations: 'Reagents are sensitive and expensive.',
    examPoints: 'Lipase absolutely requires Colipase and Bile salts for action in vitro.',
    viva: [
      { q: 'Function of Colipase?', a: 'Anchors lipase to the lipid droplet surface.' }
    ],
    mcq: [
      { q: 'Most specific marker for acute pancreatitis?', options: ['ALT', 'AST', 'Amylase', 'Lipase'], answer: 3 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/AutoColorimeter.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  }
];
