export const serologyData2 = [
  {
    id: 'ser-aso',
    title: 'ASO Titre (Anti-Streptolysin O)',
    isImportant: true,
    definition: 'Test detecting antibodies against Streptolysin O toxin.',
    principle: 'Streptococcus pyogenes produces Streptolysin O (SLO) which lyses RBCs. Infected patients produce Anti-Streptolysin O (ASO) antibodies. Latex agglutination test uses latex beads coated with SLO. If patient serum has ASO, it agglutinates the beads.',
    mechanism: 'Antigen-antibody cross-linking of latex beads produces macroscopic clumping.',
    types: ['Qualitative Slide Test', 'Quantitative Tube Test'],
    specimen: 'Serum.',
    reagents: [
      { component: 'ASO Latex Reagent', function: 'Latex particles coated with purified SLO antigen.' }
    ],
    equipment: ['Test Slide with dark background', 'Applicator sticks'],
    procedure: [
      'Place 50 µl of patient serum inside a circle on the test slide.',
      'Add exactly 1 drop of ASO Latex Reagent next to the serum.',
      'Mix using a stirring stick.',
      'Rock the slide gently for exactly 2 minutes.',
      'Observe macroscopically for agglutination under bright light.'
    ],
    observation: 'Distinct visible clumping of white latex particles.',
    result: 'Agglutination = Positive (> 200 IU/ml). Smooth = Negative.',
    interpretation: 'Positive indicates recent infection by Group A Strep.',
    referenceRange: 'Adults: up to 200 IU/ml. Children: up to 333 IU/ml.',
    clinicalSignificance: 'Diagnoses post-streptococcal complications like Rheumatic Fever and Glomerulonephritis.',
    sourcesOfError: ['Highly lipemic or hemolyzed serum causes false positives.'],
    precautions: ['Do not read after 2 minutes; drying causes false positives.'],
    normalVsAbnormal: 'Elevated ASO titre strongly links to Rheumatic heart disease.',
    applications: 'Pediatric fever panels.',
    limitations: 'Skin infections (impetigo) do not heavily raise ASO titres due to skin lipids destroying SLO.',
    examPoints: 'Normal value is < 200 Todd Units. SLO causes Beta hemolysis.',
    viva: [
      { q: 'What does ASO detect?', a: 'Recent infection by Group A Beta-Hemolytic Streptococcus.' },
      { q: 'What clinical diseases are linked to elevated ASO?', a: 'Rheumatic Fever and Acute Glomerulonephritis.' }
    ],
    mcq: [
      { q: 'ASO test detects antibodies against an enzyme from:', options: ['Staph aureus', 'Salmonella typhi', 'Group A Strep', 'Neisseria'], answer: 2 },
      { q: 'Unit associated with the ASO titre historically:', options: ['Krebs units', 'Todd Units', 'Forssman', 'Mancini'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lab_glassware.jpg/960px-Lab_glassware.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Staphylococcus_aureus_VISA_2.jpg/960px-Staphylococcus_aureus_VISA_2.jpg'
    }
  },
  {
    id: 'ser-ra',
    title: 'Rheumatoid Factor (RA) Test',
    isImportant: false,
    definition: 'Rapid latex agglutination test for Rheumatoid Arthritis screening.',
    principle: 'Rheumatoid Factor is an auto-antibody (usually IgM) produced against the Fc portion of normal IgG antibodies. The test uses latex beads coated with human IgG. When patient serum is added, if RA is present, it attacks the coated IgG, causing visible agglutination.',
    mechanism: 'Latex agglutination driven by IgM reacting with coated IgG.',
    types: ['Latex Agglutination'],
    specimen: 'Serum.',
    reagents: [
      { component: 'RA Latex Reagent', function: 'Latex beads coated with Human IgG.' }
    ],
    equipment: ['Test slide with dark background', 'Applicator stick'],
    procedure: [
      'Pipette 1 drop of patient serum into a test circle.',
      'Add exactly 1 drop of well-mixed RA latex reagent.',
      'Mix spanning the whole circle.',
      'Rock gently for exactly 2 minutes.',
      'Examine for macroscopic agglutination.'
    ],
    observation: 'Granular white clumps on a black background.',
    result: 'Agglutination = Positive for Rheumatoid Factor.',
    interpretation: 'Elevated RA Factor indicates possible Rheumatoid Arthritis.',
    referenceRange: 'Normal is Negative (< 8 IU/ml).',
    clinicalSignificance: 'Primary screening test for systemic autoimmune arthritis.',
    sourcesOfError: ['Reading past 2 minutes creates false positives due to drying evaporation.'],
    precautions: ['Read exactly at 2 minutes.'],
    normalVsAbnormal: 'Positive dictates follow up with Anti-CCP for definitive diagnosis.',
    applications: 'Rheumatology panels.',
    limitations: '20-30% of RA patients are seronegative.',
    examPoints: 'RA factor is an IgM targeting the Fc portion of IgG.',
    viva: [
      { q: 'What actually IS Rheumatoid Factor (RA)?', a: 'Autoantibody (usually IgM) directed against the Fc region of patient IgG.' },
      { q: 'What coats the latex beads in the commercial kit?', a: 'Normal human or rabbit IgG molecules.' }
    ],
    mcq: [
      { q: 'Rheumatoid factor is principally an autoantibody of which class?', options: ['IgG', 'IgM', 'IgA', 'IgE'], answer: 1 },
      { q: 'What part of an antibody does RA attack?', options: ['Fab region', 'Fc region of IgG', 'Light chains', 'Hinge'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lab_glassware.jpg/960px-Lab_glassware.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Staphylococcus_aureus_VISA_2.jpg/960px-Staphylococcus_aureus_VISA_2.jpg'
    }
  }
];
