export const serologyData4 = [
  {
    id: 'ser-hbsag-rapid',
    title: 'HBsAg Rapid Test',
    isImportant: true,
    definition: 'Immunochromatographic screening for the detection of Hepatitis B surface antigen (HBsAg) in human serum or plasma.',
    principle: 'Uses "Lateral Flow" technology. HBsAg in the sample reacts with gold-conjugated anti-HBsAg antibodies. This complex is captured by a second anti-HBsAg antibody immobilized at the Test (T) line, forming a colored band.',
    mechanism: 'Sandwich Immunoassay on a nitrocellulose membrane.',
    types: ['Rapid Diagnostic Test (RDT)'],
    specimen: 'Serum or Plasma.',
    reagents: [{ component: 'Colloidal Gold conjugated anti-HBsAg', function: 'Detection visualizer.' }],
    equipment: ['Test Kit', 'Buffer (if required)'],
    procedure: [
      'Dispense 100 µl of serum/plasma into the sample well.',
      'Allow the sample to migrate across the membrane.',
      'Wait for 15-20 minutes.',
      'Read the results in a bright area.'
    ],
    observation: 'Colored line at C = Valid; Colored line at T = Positive for HBsAg.',
    result: 'Reactive (C+T) or Non-Reactive (C only).',
    interpretation: 'A reactive result indicates the presence of Hepatitis B virus (Acute or Chronic infection).',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Primary screening tool for Hepatitis B infection. Mandatory for all blood donors and pregnant women to prevent transmission.',
    sourcesOfError: ['Using too much sample (causes flooding).', 'Reading past 30 minutes.'],
    precautions: ['Treat every reactive sample as highly infectious (Biohazard).', 'Confirm all reactive cases with ELISA or PCR.'],
    normalVsAbnormal: 'Provides rapid screening in high-risk settings.',
    applications: 'Blood bank screening, Prenatal screening, Pre-surgical check.',
    limitations: 'Cannot distinguish between acute and chronic states or determine viral load.',
    examPoints: 'Detects Surface Antigen (HBsAg). "Australia Antigen" is the old name.',
    viva: [
      { q: 'What was the previous name for HBsAg?', a: 'Australia Antigen (discovered in an Australian aborigine).' },
      { q: 'What does a reactive HBsAg result indicate?', a: 'It indicates that the person is infectious with Hepatitis B virus (either acute or chronic infection).' }
    ],
    mcq: [
      { q: 'HBsAg is commonly known as?', options: ['Australia Antigen', 'Rh Antigen', 'Vi Antigen', 'K Antigen'], answer: 0 },
      { q: 'The standard rapid test for HBsAg uses which principle?', options: ['Aggregation', 'Latex agglutination', 'Immunochromatography', 'Electrophoresis'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-hcv-rapid',
    title: 'Anti-HCV Rapid Test',
    isImportant: true,
    definition: 'Qualitative screening for antibodies against Hepatitis C Virus (HCV) in human serum or plasma.',
    principle: 'Utilizes a combination of recombinant HCV antigens (Core, NS3, NS4, NS5) immobilized on a membrane to capture anti-HCV antibodies in the patient\'s sample. The bound antibodies are then detected by protein A/G conjugated to gold.',
    mechanism: 'Indirect Immunoassay (Antigen capture of antibody).',
    types: ['Anti-HCV RDT'],
    specimen: 'Serum or Plasma.',
    reagents: [{ component: 'Gold-conjugated Protein A/G', function: 'Binds to the Fc portion of captured human antibodies.' }],
    equipment: ['Test Cassette'],
    procedure: [
      'Dispense 10 µl of serum into the sample well.',
      'Add 2 drops of assay buffer.',
      'Wait for 10-15 minutes.',
      'Check for colored lines at C and T.'
    ],
    observation: 'Colored line at C and T marks.',
    result: 'Reactive (C+T) or Non-Reactive (C only).',
    interpretation: 'A reactive result suggests exposure to Hepatitis C Virus.',
    referenceRange: 'Negative.',
    clinicalSignificance: 'Screening for Hepatitis C, which often leads to chronic liver disease, cirrhosis, and hepatocellular carcinoma.',
    sourcesOfError: ['Biological false positives in patients with high titers of Rheumatoid Factor.'],
    precautions: ['A reactive result MUST be confirmed by HCV RNA PCR to determine if the infection is current/active.'],
    normalVsAbnormal: 'Indicates the presence of circulating antibodies, not the virus itself.',
    applications: 'Health checkups and blood donor screening.',
    limitations: 'Lacks sensitivity in the early "Window Period" (first 6-8 weeks).',
    examPoints: 'Detects Antibodies (IgG/IgM). Confirm with PCR.',
    viva: [
      { q: 'Does a positive Anti-HCV test mean the patient has active Hepatitis C?', a: 'Not necessarily; it means the patient has been exposed to the virus. About 25% of people clear the virus naturally but remain antibody positive. A PCR test for HCV RNA is needed to confirm active infection.' },
      { q: 'Mention the antigens used in most HCV rapid tests.', a: 'Recombinant Core, NS3, NS4, and NS5 proteins.' }
    ],
    mcq: [
      { q: 'Anti-HCV rapid test detects?', options: ['Viral DNA', 'Viral RNA', 'Antibodies', 'Capsid antigens'], answer: 2 },
      { q: 'The confirmatory test for active HCV infection is?', options: ['Western Blot', 'HCV RNA PCR', 'ASO Titer', 'Widal'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-hiv-rapid',
    title: 'HIV-1/2 Screening (Rapid/Tri-dot)',
    isImportant: true,
    definition: 'Rapid flow-through or lateral flow assay for the simultaneous detection and differentiation of antibodies to HIV-1 and HIV-2.',
    principle: 'Antigens representitive of HIV-1 (gp120, gp41) and HIV-2 (gp36) are immobilized in separate spots/lines. Patient antibodies bind to these specific antigens and are visualized by gold or enzyme-linked conjugates.',
    mechanism: 'Differential capture immunoassay.',
    types: ['Lateral Flow (Strip)', 'Flow-through (Tri-dot)'],
    specimen: 'Serum, Plasma, or Whole Blood.',
    reagents: [{ component: 'HIV-1 and HIV-2 recombinant antigens', function: 'Specific capture ligands.' }],
    equipment: ['Test Kit', 'Buffer'],
    procedure: [
      'Dispense sample as per kit instructions.',
      'Add buffer to facilitate flow.',
      'Observe for colored dots or lines at C, 1, and 2 positions after 15 minutes.'
    ],
    observation: 'C line must be present. Lines at 1 or 2 indicate reactivity.',
    result: 'Reactive for HIV-1, HIV-2, or both.',
    interpretation: 'High sensitivity screening tool. A "Reactive" result is reported as "Reactive for HIV antibodies" and requires confirmation via two other different test methods or Western Blot.',
    referenceRange: 'Non-Reactive.',
    clinicalSignificance: 'Primary screening for the diagnosis of HIV/AIDS.',
    sourcesOfError: ['Window period (3-6 weeks post-exposure) where antibodies are not yet detectable.'],
    precautions: ['Strict confidentiality must be maintained.', 'Handle all samples as potentially lethal biohazards.'],
    normalVsAbnormal: 'A "Reactive" result requires counseling and confirmatory testing.',
    applications: 'VCT centers, Blood banks, Antenatal clinics.',
    limitations: 'False positives can occur in autoimmune diseases or post-vaccination.',
    examPoints: 'Detects antibodies to gp120, gp41 (HIV-1) and gp36 (HIV-2).',
    viva: [
      { q: 'What is the "Window Period" in HIV testing?', a: 'The time between initial infection and the point when antibodies become detectable by standard tests (usually 3 to 12 weeks).' },
      { q: 'What are the major antigens for HIV-1 and HIV-2?', a: 'HIV-1: gp120, gp41, p24. HIV-2: gp36, gp140.' }
    ],
    mcq: [
      { q: 'Which protein is specific for HIV-2 in rapid tests?', options: ['gp120', 'p24', 'gp36', 'gp41'], answer: 2 },
      { q: 'Initial reactive HIV results should be confirmed using?', options: ['CBC', 'Western Blot or 2 other different tests', 'Urine exam', 'Chest X-ray'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-weil-felix',
    title: 'Weil-Felix Reaction (Rickettsial Diagnosis)',
    isImportant: false,
    definition: 'Heterophile agglutination test used for the presumptive diagnosis of Rickettsial infections (Typhus and Spotted fevers).',
    principle: 'Rickettsiae share common heat-stable carbohydrate antigens with certain strains of Proteus bacteria (OX19, OX2, OXK). Patient antibodies against rickettsiae cross-react with these Proteus antigens, causing visible macroscopic agglutination.',
    mechanism: 'Heterophile agglutination (cross-reactivity between different species).',
    types: ['Slide Method (Screen)', 'Tube Method (Quantitative)'],
    specimen: 'Serum.',
    reagents: [
      { component: 'Proteus OX19 antigen', function: 'Detects Epidemic and Endemic Typhus.' },
      { component: 'Proteus OX2 antigen', function: 'Detects Spotted Fever group.' },
      { component: 'Proteus OXK antigen', function: 'Detects Scrub Typhus.' }
    ],
    equipment: ['Agglutination tile', 'Applicator sticks'],
    procedure: [
      'Mix 1 drop serum with each Proteus antigen (OX19, OX2, OXK) on a tile.',
      'Rock for 1 minute.',
      'Observe for clumping.'
    ],
    observation: 'Granular clumping with respective antigens.',
    result: 'Positive or Negative.',
    interpretation: 'Patterns: Typhus (OX19 positive), Scrub Typhus (OXK positive). High or rising titers are diagnostic.',
    referenceRange: 'Titer < 1:80.',
    clinicalSignificance: 'A simple, low-cost screening tool for Rickettsial diseases in resource-limited settings.',
    sourcesOfError: ['Proteus urinary tract infections (causes false positives).'],
    precautions: ['The test is non-specific and lacks high sensitivity; use more specific tests like IFA if available.'],
    normalVsAbnormal: 'A "Positive" result in a fever patient with a rash suggests Rickettsiae.',
    applications: 'Rickettsial screening.',
    limitations: 'Does not detect Q fever (Coxiella burnetii).',
    examPoints: 'Heterophile test. Antigens: Proteus strains. Detects Rickettsiae.',
    viva: [
      { q: 'What is a "Heterophile" test?', a: 'A test where antibodies against one antigen react with a completely different, unrelated antigen shareing similar epitopes.' },
      { q: 'Which Proteus antigen is positive in Scrub Typhus?', a: 'Proteus OXK.' }
    ],
    mcq: [
      { q: 'Weil-Felix reaction uses antigens from which bacteria?', options: ['Salmonella', 'Proteus', 'Shigella', 'E. coli'], answer: 1 },
      { q: 'Proteus OX19 is most strongly positive in?', options: ['Typhus fever', 'Scrub Typhus', 'Q fever', 'Enteric fever'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'ser-paul-bunnel',
    title: 'Paul Bunnel Test (Infectious Mononucleosis)',
    isImportant: false,
    definition: 'Heterophile agglutination test used for the diagnosis of Infectious Mononucleosis caused by EBV (Epstein-Barr Virus).',
    principle: 'Patients with Infectious Mononucleosis (IM) produce heterophile antibodies that agglutinate sheep or horse red blood cells. These antibodies can be distinguished from other heterophile antibodies (like Forssman antibodies) by their absorption patterns on guinea pig kidney and ox red cells.',
    mechanism: 'Heterophile agglutination (Serum antibodies reacting with animal RBCs).',
    types: ['Qualitative Screen', 'Monospot Test (Rapid)'],
    specimen: 'Serum.',
    reagents: [{ component: '1% Sheep RBC suspension', function: 'Detection particles.' }],
    equipment: ['Test tubes', 'Centrifuge'],
    procedure: [
      'Inactivate patient serum at 56°C.',
      'Perform serial dilutions of serum in saline.',
      'Add equal volume of 1% sheep RBC suspension.',
      'Incubate at 37°C for 2 hours.',
      'Check for macroscopic agglutination.'
    ],
    observation: 'Lattice formation of sheep RBCs.',
    result: 'Highest dilution showing agglutination is the titer.',
    interpretation: 'Titer > 1:128 is suggestive of Infectious Mononucleosis.',
    referenceRange: 'Titer < 1:64.',
    clinicalSignificance: 'Diagnosis of EBV infection, specially in adolescents with sore throat and lymphadenopathy.',
    sourcesOfError: ['Serum sickness (causes false positives).'],
    precautions: ['The differential absorption test (Davidsohn) is necessary to confirm true IM antibodies.'],
    normalVsAbnormal: 'IM antibodies are absorbed by Ox cells but NOT by guinea pig kidney cells.',
    applications: 'Diagnosis of "Glandular Fever".',
    limitations: 'May be negative in children under 5 years.',
    examPoints: 'Heterophile test. Uses Sheep RBCs. Diagnostic of IM (EBV).',
    viva: [
      { q: 'Which virus causes Infectious Mononucleosis?', a: 'Epstein-Barr Virus (EBV).' },
      { q: 'In the Paul Bunnel test, which cells are agglutinated?', a: 'Sheep Red Blood Cells.' }
    ],
    mcq: [
      { q: 'Paul Bunnel test detects antibodies against?', options: ['Salmonella', 'EBV (Infectious Mononucleosis)', 'Hepatitis', 'HIV'], answer: 1 },
      { q: 'Infectious Mononucleosis heterophile antibodies are absorbed by?', options: ['Guinea pig kidney', 'Ox RBCs', 'Human RBCs', 'Latex'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
