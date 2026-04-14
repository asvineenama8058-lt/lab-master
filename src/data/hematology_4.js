export const hematologyData4 = [
  {
    id: 'hem-rdw',
    title: 'Red Cell Distribution Width (RDW)',
    isImportant: true,
    definition: 'Quantitative parameter measuring the exact variation in physical volume (size) of circulating red blood cells.',
    principle: 'Computed entirely by automated hematology analyzers, RDW represents the Coefficient of Variation (CV) of the erythrocyte volume distribution curve. It mathematically defines the span of anisocytosis (variation in size) present in the blood.',
    mechanism: 'Algorithmic standard deviation derivation of the RBC plotted histogram.',
    types: ['RDW-CV (Coefficient of Variation)', 'RDW-SD (Standard Deviation)'],
    specimen: 'EDTA blood run through a CBC autoanalyzer.',
    reagents: [
      { component: 'None', function: 'Direct derivation from automated histogram data.' }
    ],
    equipment: ['Automated Hematology Cell Counter'],
    procedure: [
      'The automated analyzer physically counts and sizes millions of RBCs.',
      'It plots an RBC volume histogram (Number of cells vs Cell Volume in fL).',
      'The software calculates RDW-CV = (Standard Deviation of MCV ÷ MCV) × 100.'
    ],
    observation: 'A numerical percentage heavily indicating cellular heterogeneity.',
    result: 'RDW-CV is ______ %.',
    interpretation: 'A HIGH RDW means cells vary wildly in size (massively heterogeneous). A NORMAL RDW means cells are uniform in size.',
    referenceRange: '11.5 - 14.5 %',
    clinicalSignificance: 'Mandatory for differentiating Iron Deficiency Anemia (High RDW, cells are all different sizes as iron runs out) from strictly Thalassemia Trait (Normal RDW, cells are uniformly microcytic).',
    sourcesOfError: ['RBC agglutination forcibly generates massive fake red cells, falsely skyrocketing RDW.', 'Transfusion of blood introduces a massive dual-population, spiking RDW immediately.'],
    precautions: ['Always correlate a high RDW physically with the peripheral smear to visually confirm the anisocytosis.'],
    normalVsAbnormal: 'A high RDW strongly correlates directly with early nutritional deficiencies even before Hb sharply drops.',
    applications: 'Algorithmic Anemia tracking.',
    limitations: 'RDW cannot ever mathematically be pathological "Low". Cells can only be maximally uniform (normal CV).',
    examPoints: 'RDW measures ANISOCYTOSIS strictly. IDA heavily increases RDW. Thalassemia trait preserves normal RDW.',
    viva: [
      { q: 'What pathological term heavily correlates to an elevated RDW?', a: 'Anisocytosis (high variation in red blood cell size).' },
      { q: 'Why is RDW notoriously high in severe Iron deficiency?', a: 'As iron violently depletes, the marrow churns out smaller and smaller progressively starved cells, creating a massive dual population of normal and tiny cells.' },
      { q: 'Why is RDW completely normal in Thalassemia trait?', a: 'The genetic defect is structurally uniform across every single cell; thus, all cells are produced uniformly small, keeping the CV tightly normal.' }
    ],
    mcq: [
      { q: 'RDW is the mathematical coefficient of variation of the:', options: ['MCH', 'MCV', 'MCHC', 'Total RBC Count'], answer: 1 },
      { q: 'Which exact condition uniquely presents with a Low MCV but a severely High RDW?', options: ['Thalassemia Minima', 'Iron Deficiency Anemia', 'Aplastic Anemia', 'Acute Bleeding'], answer: 1 },
      { q: 'What is the precise morphological term for what RDW measures?', options: ['Poikilocytosis', 'Anisocytosis', 'Polychromasia', 'Hypochromia'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Complete_blood_count_and_differential.jpg'
    }
  },
  {
    id: 'hem-heinz',
    title: 'Heinz Body Stain',
    isImportant: false,
    definition: 'Special cytochemical stain detecting completely denatured, precipitated hemoglobin physically attached to the inner RBC membrane.',
    principle: 'Oxidative stress irreversibly denatures susceptible hemoglobin molecules. This useless hemoglobin physically precipitates and permanently aggregates onto the inner surface of the RBC lipid envelope, forming Heinz bodies. These are totally invisible on standard Romanowsky smears but aggressively take up basic supravital dyes.',
    mechanism: 'Supravital basic dyes vividly stain the denatured precipitated globin chains within the unfixed living cell.',
    types: ['Supravital Crystal Violet stain', 'New Methylene Blue'],
    specimen: 'Heparinized or EDTA blood.',
    reagents: [
      { component: '0.5% Crystal Violet in Saline', function: 'Vividly penetrates the living membrane to distinctly stain the precipitated denatured globin masses.' }
    ],
    equipment: ['Tubes', 'Microscope (100x Oil immersion)'],
    procedure: [
      'Mix equal equal fresh drops of blood and Crystal Violet completely in a tube.',
      'Incubate securely at room temperature for strictly 15 to 20 mins.',
      'Prepare a heavily wet mount or a thin air-dried smear.',
      'Examine closely under oil immersion.'
    ],
    observation: 'Distinct dark purple, highly rigid globular inclusions seen physically bulging protruding from the inner periphery of the RBC membrane.',
    result: 'Positive (Heinz bodies forcefully seen) or Negative.',
    interpretation: 'Strictly indicative of overwhelming oxidative damage specifically occurring to Hemoglobin.',
    referenceRange: 'Complete absence forcefully expected in normal individuals.',
    clinicalSignificance: 'Mandatory confirmatory finding for severe G6PD Enzyme Deficiency violently undergoing an active hemolytic crisis.',
    sourcesOfError: ['Using strongly aged blood where native autoxidation forms false bodies.', 'Mistaking Howell-Jolly bodies (DNA) for Heinz bodies (Denatured Hb).'],
    precautions: ['Do exactly NOT physically fix the slide absolutely with Methanol; it ruins the precipitation matrix instantly.'],
    normalVsAbnormal: 'Spleen macrophages brutally bite out these rigid Heinz bodies, forming "Bite Cells" seen physically on normal DLC smears.',
    applications: 'Oxidative hemolysis profiling.',
    limitations: 'The bodies physically disappear violently rapidly after the crisis since the spleen macrophages brutally extract them from circulation.',
    examPoints: 'Heinz bodies are DENATURED HEMOGLOBIN. Stain used is strictly Supravital. The related disease is fundamentally G6PD deficiency.',
    viva: [
      { q: 'What exact biochemical substance violently forms a Heinz body?', a: 'Precipitated, irreversibly denatured hemoglobin globin chains.' },
      { q: 'In what heavily tested clinical disease do thousands of Heinz bodies radically appear?', a: 'G6PD Deficiency (especially after ingesting extreme oxidant drugs heavily like primaquine).' },
      { q: 'What is a "Bite Cell"?', a: 'An RBC that had its stiff Heinz body forcefully plucked or "bitten" purely out by a splenic macrophage.' }
    ],
    mcq: [
      { q: 'Heinz bodies strictly physically consist entirely of:', options: ['Nuclear DNA fragments', 'Denatured Hemoglobin', 'Ribosomal RNA', 'Iron granules'], answer: 1 },
      { q: 'Which particular stain is exclusively required to visually demonstrate Heinz bodies?', options: ['Leishman Stain', 'Crystal Violet (Supravital)', 'Perls Prussian Blue', 'Sudan Black B'], answer: 1 },
      { q: 'Heinz bodies strongly heavily correlate with which fundamental biological defect?', options: ['G6PD Deficiency', 'Iron deficiency', 'B12 deficiency', 'Hemophilia'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/8/87/White_blood_cells_smear.jpg'
    }
  }
];
