export const microbiologyData8 = [
  {
    id: 'mic-nutbroth',
    title: 'Nutrient Broth / Agar Preparation',
    isImportant: true,
    definition: 'Preparation of basal microbiological culture media.',
    principle: 'Nutrient agar is a general-purpose medium giving baseline carbon and nitrogen. Agar solidifies it.',
    mechanism: 'Hydration and thermal dissolution of complex nutrients.',
    types: ['Broth', 'Agar'],
    specimen: 'Raw powder reagents.',
    reagents: [
      { component: 'Peptone', function: 'Nitrogen source.' },
      { component: 'Agar', function: 'Solidifying agent.' }
    ],
    equipment: ['Flask', 'Autoclave'],
    procedure: [
      'Weigh peptone and beef extract.',
      'Dissolve in distilled water.',
      'Adjust pH to 7.2.',
      'Autoclave at 121°C for 15 minutes.',
      'Cool to 50°C and pour.'
    ],
    observation: 'Clear pale yellow firm gel forms.',
    result: 'Sterile ready-to-use media plates.',
    interpretation: 'Supports non-fastidious bacteria cleanly.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Foundation for all culture routines.',
    sourcesOfError: ['Incorrect pH inhibits bacterial growth.'],
    precautions: ['Do not pour agar while boiling hot.'],
    normalVsAbnormal: 'Plates should be entirely crystal clear.',
    applications: 'General bacterial cultivation.',
    limitations: 'Cannot grow fastidious organisms.',
    examPoints: 'Agar provides NO nutrition.',
    viva: [
      { q: 'Role of Agar?', a: 'Solidifying agent.' }
    ],
    mcq: [
      { q: 'Agar is commercially extracted from:', options: ['Fungi', 'Red Algae', 'Beef bone', 'Bacteria'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Two_small_test_tubes_held_in_spring_clamps.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Methyl_Red_Test.jpg'
    }
  },
  {
    id: 'mic-LJ',
    title: 'Lowenstein-Jensen (LJ) Media',
    isImportant: true,
    definition: 'Specialized selective media natively for Mycobacteria.',
    principle: 'LJ media provides rich nutrition from egg yolk. Malachite green selectively inhibits normal flora.',
    mechanism: 'Nutritional enrichment with dye inhibition.',
    types: ['Enriched Selective Media'],
    specimen: 'Sputum concentrate.',
    reagents: [
      { component: 'Whole Egg', function: 'Rich lipids and proteins.' },
      { component: 'Malachite Green', function: 'Inhibitor dye.' }
    ],
    equipment: ['Inspissator'],
    procedure: [
      'Prepare mineral salt base and autoclave natively.',
      'Blend in strictly fresh eggs.',
      'Add Malachite green.',
      'Dispense into screw-cap tubes.',
      'Inspissate at 85°C to solidify.'
    ],
    observation: 'Distinct opaque pale-green slant.',
    result: 'Sterile LJ media notably.',
    interpretation: 'Ready for TB diagnostics.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Gold standard for cultivating Tuberculosis.',
    sourcesOfError: ['Autoclaving directly destroys the egg base.'],
    precautions: ['Always inspissate explicitly.'],
    normalVsAbnormal: 'Supports highly rough M. tuberculosis colonies.',
    applications: 'Tuberculosis completely.',
    limitations: 'Takes 8 weeks firmly to grow TB.',
    examPoints: 'Contains purely malachite green heavily.',
    viva: [
      { q: 'Why use malachite green?', a: 'To precisely inhibit normal flora explicitly.' }
    ],
    mcq: [
      { q: 'LJ media is positively:', options: ['Autoclaved', 'Inspissated', 'Boiled', 'Filtered'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bunsen_burner_flame_types.jpg/960px-Bunsen_burner_flame_types.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Indole_pos_E_coli.jpg'
    }
  }
];
