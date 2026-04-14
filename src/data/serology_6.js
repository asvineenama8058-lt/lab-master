export const serologyData6 = [
  {
    id: 'ser-cold-agglutination',
    title: 'Cold Agglutination Test',
    isImportant: false,
    definition: 'Laboratory test used to detect autoantibodies (usually IgM) that cause red blood cells to clump at low temperatures.',
    principle: 'Patients with Mycoplasma pneumoniae infection produce antibodies (Anti-I) that cross-react with human I-antigen on RBCs. These antibodies cause agglutination of human O-group RBCs at 4°C, which disappears (reverses) upon warming to 37°C.',
    mechanism: 'Thermal-dependent heterophile agglutination.',
    types: ['Qualitative', 'Quantitative Titer'],
    specimen: 'Serum (must be separated at 37°C to prevent auto-absorption).',
    reagents: [{ component: '1% Human Group O RBC suspension', function: 'Detection particles.' }],
    equipment: ['Refrigerator (4°C)', 'Water bath (37°C)', 'Test tubes'],
    procedure: [
      'Collect blood and allow it to clot at 37°C before centrifuging.',
      'Prepare serial dilutions of serum in saline.',
      'Add 1% Group O RBCs to each tube.',
      'Incubate tubes at 4°C overnight.',
      'Examine for agglutination immediately upon removal from the cold.',
      'Re-incubate positive tubes at 37°C for 30 mins and re-examine (agglutination must disappear).'
    ],
    observation: 'Clumping at 4°C that completely reverses at 37°C.',
    result: 'Report as the highest dilution showing agglutination at 4°C.',
    interpretation: 'Titers > 1:64 are suggesting Primary Atypical Pneumonia caused by Mycoplasma pneumoniae.',
    referenceRange: '< 1:32.',
    clinicalSignificance: 'Supportive evidence for Mycoplasma infection. High titers can also cause cold-agglutinin disease (autoimmune hemolytic anemia).',
    sourcesOfError: ['Serum separated from the clot at room temperature or cold (strips the antibodies).', 'Reading too slowly (warming causes reversal).'],
    precautions: ['Always keep the blood sample warm (37°C) until serum is separated.'],
    normalVsAbnormal: 'A "Positive" test that does not reverse at 37°C indicates a non-specific agglutinin.',
    applications: 'Respiratory infection workup.',
    limitations: 'Lacks high specificity; only ~50% of Mycoplasma patients are positive.',
    examPoints: 'Reversible at 37°C. Detects Mycoplasma pneumoniae. Antibody: IgM (Anti-I).',
    viva: [
      { q: 'Why must the blood be kept at 37°C before separating serum in this test?', a: 'Because if the blood cools, the cold agglutinins will bind to the patient\'s own RBCs in the clot and be removed from the serum, leading to a false negative result.' },
      { q: 'Is the cold agglutination test specific for Mycoplasma?', a: 'No, it is a heterophile test and can be positive in other viral infections and certain anemias.' }
    ],
    mcq: [
      { q: 'Cold agglutinins are typically of which immunoglobulin class?', options: ['IgG', 'IgM', 'IgA', 'IgE'], answer: 1 },
      { q: 'The cold agglutination test is most useful for which infection?', options: ['Typhoid', 'Syphilis', 'Mycoplasma pneumoniae', 'HIV'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-rk39',
    title: 'rK39 Rapid Diagnostic Test (Kala-azar)',
    isImportant: true,
    definition: 'Immunochromatographic strip test for the rapid diagnosis of Visceral Leishmaniasis (Kala-azar).',
    principle: 'Uses a recombinant antigen (rK39), which is a part of the Leishmania donovani kinesin-like protein. Patient antibodies against L. donovani are captured by the rK39 antigen on the test strip and visualized with a gold conjugate.',
    mechanism: 'Capture Immunoassay for Anti-Leishmania antibodies.',
    types: ['RDT for Kala-azar'],
    specimen: 'Serum or Whole Blood.',
    reagents: [{ component: 'rK39 recombinant antigen', function: 'Specific capture ligand.' }],
    equipment: ['Test Strip / Cassette'],
    procedure: [
      'Dispense a drop of serum onto the sample pad.',
      'Add 2-3 drops of buffer.',
      'Wait for 10-15 minutes.',
      'Check for two distinct colored lines.'
    ],
    observation: 'Colored line at C and T.',
    result: 'Positive or Negative for Anti-Leishmania antibodies.',
    interpretation: 'In a patient with prolonged fever and splenic enlargement (splenomegaly), a positive rK39 test is highly diagnostic of Visceral Leishmaniasis.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Primary screening tool for Kala-azar, especially in endemic regions (e.g., Bihar/West Bengal in India). Much less invasive than splenic or bone marrow aspiration.',
    sourcesOfError: ['False positive in perfectly healthy individuals living in endemic areas due to past exposure.', 'Low sensitivity in HIV-coinfected patients.'],
    precautions: ['Positive result must be correlated with clinical signs (fever, weight loss, splenomegaly).'],
    normalVsAbnormal: 'A "Positive" result allows for immediate initiation of treatment (e.g., Amphotericin B).',
    applications: 'Field diagnosis of Kala-azar.',
    limitations: 'The test remains positive for years after treatment; cannot be used to diagnose relapse.',
    examPoints: 'Target: Visceral Leishmaniasis. Antigen: rK39. High specificity.',
    viva: [
      { q: 'What is rK39?', a: 'A recombinant antigen derived from a protein of Leishmania donovani used specifically to detect Visceral Leishmaniasis.' },
      { q: 'In which Indian states is the rK39 test most commonly used?', a: 'Endemic states like Bihar, Jharkhand, and West Bengal.' }
    ],
    mcq: [
      { q: 'rK39 rapid test is used for the diagnosis of?', options: ['Malaria', 'Kala-azar', 'Dengue', 'Leptospirosis'], answer: 1 },
      { q: 'Kala-azar is caused by which parasite?', options: ['P. falciparum', 'Leishmania donovani', 'E. histolytica', 'W. bancrofti'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-hydatid',
    title: 'Hydatid (Echinococcus) Serology',
    isImportant: false,
    definition: 'Laboratory assays used to detect antibodies formed against the larval stage of the tapeworm Echinococcus granulosus.',
    principle: 'Uses crude or purified hydatid cyst fluid antigens (Antigen B) to capture specific IgG antibodies in patient serum. Methods include Indirect Hemagglutination (IHA) and ELISA.',
    mechanism: 'Antigen-antibody reaction signaling presence of tissue-invasive larvae.',
    types: ['IHA', 'ELISA'],
    specimen: 'Serum.',
    reagents: [{ component: 'Purified Hydatid Antigen (AgB)', function: 'Capture antigen.' }],
    equipment: ['ELISA Reader / Micro-well plates'],
    procedure: [
      'Perform serial dilutions of serum.',
      'Incubate with sensitized RBCs (IHA) or Ag-coated wells (ELISA).',
      'Wash and detect bound IgG.',
      'Determine the titer.'
    ],
    observation: 'Agglutination mat (IHA) or color intensity (ELISA).',
    result: 'Titer determination.',
    interpretation: 'IHA titer > 1:128 is considered positive and suggestive of hydatid cyst.',
    referenceRange: '< 1:128 (IHA).',
    clinicalSignificance: 'Supportive diagnosis for Hydatid Cyst (usually in the liver or lung). Especially useful when imaging is inconclusive.',
    sourcesOfError: ['Cross-reactivity with other tapeworms (Taenia).', 'False negatives in calcified or lung cysts.'],
    precautions: ['Monitor titers post-surgery; a drop in titer suggests successful removal.'],
    normalVsAbnormal: 'A "Positive" result in a patient with a "Water Lily" sign on imaging confirms the diagnosis.',
    applications: 'Tropical medicine and surgical workup.',
    limitations: 'Sensitivity varies by organ (Liver 80-90% | Lung 60-70%).',
    examPoints: 'Detects Echinococcus granulosus. Liver cysts give more positive results than lung cysts.',
    viva: [
      { q: 'What is the most common organ affected by hydatid cysts?', a: 'The Liver.' },
      { q: 'Why is serology less sensitive for lung hydatid cysts?', a: 'Intact lung cysts often don\'t release enough antigens to stimulate a strong systemic antibody response.' }
    ],
    mcq: [
      { q: 'Hydatid disease is caused by which parasite?', options: ['Taenia solium', 'Echinococcus granulosus', 'Ascaris', 'Hookworm'], answer: 1 },
      { q: 'The antigen-rich fluid found inside the hydatid cyst is called?', options: ['Ascitic fluid', 'Hydatid sand / fluid', 'CSF', 'Serum'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-anti-ccp',
    title: 'Anti-Cyclic Citrullinated Peptide (Anti-CCP)',
    isImportant: true,
    definition: 'High-specificity serological assay for the diagnosis and prognostic evaluation of Rheumatoid Arthritis.',
    principle: 'Detects IgG antibodies directed against cyclic citrullinated peptides. These antibodies are produced in the inflamed synovium of RA patients. Uses a second or third-generation ELISA.',
    mechanism: 'Enzyme-linked immunosorbent assay (ELISA).',
    types: ['Anti-CCP2', 'Anti-CCP3'],
    specimen: 'Serum.',
    reagents: [{ component: 'Citrullinated peptide-coated wells', function: 'Capture antigen.' }],
    equipment: ['ELISA system'],
    procedure: [
      'Standard ELISA protocol (Capture -> Wash -> Detect -> Signal).',
      'Results compared against a standard curve.'
    ],
    observation: 'Color development read at 450nm.',
    result: 'Report in Units/ml.',
    interpretation: 'Results > 20 U/ml are Positive. It is much more specific than RF for Rheumatoid Arthritis.',
    referenceRange: '< 20 U/ml (Negative).',
    clinicalSignificance: 'Superior to RF for the diagnosis of RA. It can be detected years before clinical symptoms appear and predicts aggressive, erosive joint disease.',
    sourcesOfError: ['Serum contamination.', 'Incomplete washing.'],
    precautions: ['Often tested together with RF to increase diagnostic pick-up.'],
    normalVsAbnormal: 'High titers (>60 U/ml) predict poor prognosis and joint destruction.',
    applications: 'Early Rheumatoid Arthritis diagnosis.',
    limitations: 'High cost compared to the RF latex test.',
    examPoints: 'Highly specific for Rheumatoid Arthritis (>95%). Predicts joint damage.',
    viva: [
      { q: 'Which is more specific for Rheumatoid Arthritis: RF or Anti-CCP?', a: 'Anti-CCP (Specificity > 95%).' },
      { q: 'Can Anti-CCP be positive before symptoms start?', a: 'Yes, it can appear in the blood years before clinical arthritis develops.' }
    ],
    mcq: [
      { q: 'Anti-CCP test is used for the diagnosis of?', options: ['SLE', 'Rheumatoid Arthritis', 'Osteoarthritis', 'Gout'], answer: 1 },
      { q: 'Anti-CCP antibodies target which protein modification?', options: ['Methylation', 'Citrullination', 'Phosphorylation', 'Acetylation'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microplate_reader.jpg/960px-Microplate_reader.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ELISA.svg/640px-ELISA.svg.png'
    }
  },
  {
    id: 'ser-ana-latex',
    title: 'ANA Screening (Latex Method)',
    isImportant: false,
    definition: 'Rapid screening for the qualitative detection of antinuclear antibodies in serum.',
    principle: 'Latex particles are coated with a wide range of purified human nuclear antigens. If patient serum has ANA, the particles agglutinate on a slide. It is a faster, simpler alternative to indirect immunofluorescence.',
    mechanism: 'Passive Agglutination.',
    types: ['Qualitative Screen'],
    specimen: 'Serum.',
    reagents: [{ component: 'Nuclear antigen-coated latex', function: 'Universal capture reagent.' }],
    equipment: ['Agglutination tile', 'Applicator sticks'],
    procedure: [
      'Mix 1 drop serum + 1 drop latex reagent.',
      'Rock for 2 minutes.',
      'Check for clumping.'
    ],
    observation: 'Macroscopic white clumps.',
    result: 'Positive or Negative.',
    interpretation: 'High sensitivity but provides no "Pattern" information (unlike IF). Positives must be followed by ANA-IF.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Rapid initial screen for connective tissue disorders (SLE, Scleroderma, etc.).',
    sourcesOfError: ['False negatives in low titers.', 'Over-reading drying artifacts.'],
    precautions: ['Always explain to the user that this does not provide a pattern (e.g. Speckled/Homogeneous).'],
    normalVsAbnormal: 'Provides quick "Yes/No" data.',
    applications: 'Primary rheumatology screening.',
    limitations: 'Lacks the diagnostic depth and sensitivity of HEp-2 Immunofluorescence.',
    examPoints: 'Screening only. No pattern. Uses Latex.',
    viva: [
      { q: 'What is the difference between ANA latex and ANA-IF?', a: 'ANA-IF (fluorescence) is the gold standard, providing both titer and pattern, while ANA-latex is a simple qualitative screening test.' },
      { q: 'Does a negative ANA-latex rule out SLE?', a: 'No, because it is less sensitive than the immunofluorescence method.' }
    ],
    mcq: [
      { q: 'ANA latex test provides which of the following information?', options: ['Titer', 'Pattern', 'Qualitative result (Pos/Neg)', 'Molecular weight'], answer: 2 },
      { q: 'Positive ANA latex test should always be followed by?', options: ['CBC', 'ANA-Indirect Immunofluorescence', 'Chest X-ray', 'Skin biopsy'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
