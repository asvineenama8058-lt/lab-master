export const microbiologyData10 = [
  {
    id: 'mic-vitek',
    title: 'VITEK 2 Automated Identification',
    isImportant: true,
    definition: 'Fully automated microbiology system for bacterial identification and susceptibility.',
    principle: 'The system uses specialized fluorogenic and colorimetric reagent cards. A standardized bacterial suspension is vacuum-loaded into the micro-wells. Changes in fluorescence or color are analyzed automatically by internal optics algorithmically comparing results to a massive database.',
    mechanism: 'Automated photometric tracking of metabolic substrate utilization.',
    types: ['VITEK 2 Compact'],
    specimen: 'Pure isolated colonies ONLY.',
    reagents: [
      { component: 'VITEK ID Cards', function: 'Contains 64 dried biochemical substrates.' },
      { component: 'Saline 0.45%', function: 'Used for creating 0.5 McFarland suspension.' }
    ],
    equipment: ['VITEK 2 Machine', 'DensiCHEK Plus'],
    procedure: [
      'Prepare pure bacterial suspension in 0.45% saline.',
      'Measure turbidity precisely to 0.5 McFarland using DensiCHEK.',
      'Place suspension tube and specific VITEK card in cassava rack.',
      'Load the rack into the VITEK vacuum chamber.',
      'System automatically fills, seals, incubates, and reads the card.'
    ],
    observation: 'Machine outputs a final printed report with organism name and MIC.',
    result: 'Identification reported with % Probability (e.g., E. coli 99%).',
    interpretation: 'Rapid confirmation of pathogen and specific antibiotic MICs.',
    referenceRange: 'Probability > 90% is acceptable.',
    clinicalSignificance: 'Gold standard for rapid tertiary care diagnostics.',
    sourcesOfError: ['Mixed cultures completely ruin the algorithmic reading.'],
    precautions: ['Suspensions must be exactly 0.5 McFarland.'],
    normalVsAbnormal: 'Abnormal profiles trigger software alerts.',
    applications: 'High-throughput microbiology.',
    limitations: 'Cannot identify entirely novel or non-database organisms.',
    examPoints: 'Relies solely on fluorogenic and colorimetric wells.',
    viva: [
      { q: 'What is the standard turbidity?', a: '0.5 McFarland.' }
    ],
    mcq: [
      { q: 'The Vitek 2 system operates primarily using:', options: ['PCR', 'Mass Spectrometry', 'Colorimetric/Fluorogenic micro-wells', 'Agglutination'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Vitek_2_Compact.jpg'
    }
  },
  {
    id: 'mic-bactec',
    title: 'BACTEC Blood Culture System',
    isImportant: true,
    definition: 'Continuous monitoring automated blood culture system.',
    principle: 'Blood is injected into a bottle containing enriched broth and a fluorescent sensor at the base. If bacteria grow, they produce CO2. The sensor reacts with CO2, increasing fluorescence. The machine reads the bottles every 10 minutes and alarms if positive.',
    mechanism: 'Continuous fluorometric detection of microbial CO2 production.',
    types: ['BACTEC FX', 'BACTEC 9050'],
    specimen: 'Venous Blood strictly drawn with aseptic technique.',
    reagents: [
      { component: 'BACTEC Aerobic/Anaerobic Vials', function: 'Contains resin to neutralize antibiotics and rich broth.' }
    ],
    equipment: ['BACTEC Machine', 'Syringe'],
    procedure: [
      'Disinfect patient skin thoroughly with Chlorhexidine.',
      'Draw 8-10 ml of blood purely cleanly.',
      'Inject immediately into BACTEC vial.',
      'Load vial into machine.',
      'Incubate up to 5 days; machine reads constantly.'
    ],
    observation: 'Machine flashes red and alarms if positive.',
    result: 'Positive (Growth detected) or Negative (No growth at 5 days).',
    interpretation: 'Positive bottles are immediately subcultured onto solid agar.',
    referenceRange: 'Negative for 5 days.',
    clinicalSignificance: 'Life-saving diagnostic for Septicemia and Endocarditis.',
    sourcesOfError: ['Skin contamination causes false positive coagulase-negative staph.'],
    precautions: ['Strict asepsis during phlebotomy is entirely mandatory.'],
    normalVsAbnormal: 'Normal blood is totally sterile.',
    applications: 'Sepsis diagnostics completely.',
    limitations: 'Volume of blood drawn heavily impacts sensitivity.',
    examPoints: 'Detects CO2 production strictly via fluorometry.',
    viva: [
      { q: 'What does the sensor detect?', a: 'Carbon dioxide produced by bacteria.' }
    ],
    mcq: [
      { q: 'Automated blood culture machines detect growth entirely by monitoring:', options: ['Oxygen generation', 'CO2 production linearly', 'Nitrogen', 'Heat'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
