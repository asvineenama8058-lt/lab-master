export const instrumentationData1 = [
  {
    id: 'ins-centrifuge',
    title: 'Centrifuge',
    isImportant: true,
    definition: 'Machine separating liquid matrices fundamentally by density.',
    principle: 'Operates on centrifugal force. Rapid rotation outward/downward forces denser particles into a pellet, leaving lighter fluid (supernatant) at the top.',
    mechanism: 'Radial acceleration greatly multiplies gravitational settling.',
    types: ['Fixed-Angle Centrifuge', 'Swing-Bucket Centrifuge', 'Microhematocrit'],
    specimen: 'Blood, Urine, Body fluids.',
    reagents: [
      { component: 'None', function: 'Operates entirely physically based on mass.' }
    ],
    equipment: ['Balanced Centrifuge tubes'],
    procedure: [
      'Fill centrifuge tubes equally with sample.',
      'Place tubes precisely opposite each other in the rotor to physically balance weight.',
      'If odd number, use a water blank tube opposite the sample.',
      'Secure lid tightly.',
      'Set RPM and Timer (e.g., 3000 RPM for 10 mins).',
      'Wait for machine to stop naturally completely before opening lid.'
    ],
    observation: 'Distinct physical separation of distinct layers.',
    result: 'Packed solid pellet and transparent liquid supernatant.',
    interpretation: 'Separates plasma from whole blood, or sediment from urine.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Absolute prerequisite for 90% of clinical biochemistry testing.',
    sourcesOfError: ['Forcibly stopping rotor manually forcefully remixes the separated layers.'],
    precautions: ['NEVER run unbalanced. Uneven rotational force will violently shatter tubes.'],
    normalVsAbnormal: 'Pellet size dictates relative packed cell volume natively.',
    applications: 'Fractionation.',
    limitations: 'Generates significant heat which can heavily denature sensitive proteins.',
    examPoints: 'RCF (Relative Centrifugal Force) is the true applied force, not solely RPM.',
    viva: [
      { q: 'Why do we absolutely have to balance tubes?', a: 'An unbalanced rotor wobbles violently, causing severe mechanical damage and catastrophic shattering.' },
      { q: 'What is RCF?', a: 'Relative Centrifugal Force (g-force).' }
    ],
    mcq: [
      { q: 'What represents the actual force applied to particles?', options: ['RPM', 'RCF (g-force)', 'Radius', 'Viscosity'], answer: 1 },
      { q: 'Most critical safety feature required before starting is:', options: ['Proper balancing of tubes', 'Using cold tubes', 'Using plastic essentially', 'Setting max speed'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Beckman_Model_M_pH_Meter_2006.072.002.tif/lossy-page1-960px-Beckman_Model_M_pH_Meter_2006.072.002.tif.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Centrifugation_for_DNA_extraction.jpg/640px-Centrifugation_for_DNA_extraction.jpg'
    }
  },
  {
    id: 'ins-colorimeter',
    title: 'Photoelectric Colorimeter',
    isImportant: true,
    definition: 'Instrument measuring absorbance of specific distinctly colored light.',
    principle: 'Conforms to Beer-Lambert Law: The intensity of light absorbed by a colored solution is directly proportional to its concentration (Beer) and the path length (Lambert).',
    mechanism: 'Photodetector natively converts passed light into measurable electrical current.',
    types: ['Filter Colorimeter'],
    specimen: 'Colored chemical endpoint reaction fluids.',
    reagents: [
      { component: 'Blank Solution', function: 'Zeroes baseline intrinsic absorbance strictly.' }
    ],
    equipment: ['Color Filters', 'Optical Cuvette'],
    procedure: [
      'Switch on instrument for a 15-minute warmup phase.',
      'Select complementary colored glass filter.',
      'Fill cuvette with Blank solution.',
      'Wipe clear sides cleanly of fingerprints.',
      'Insert into chamber and adjust meter strictly to 0 Absorbance (100% T).',
      'Read Absorbance (OD) of Standard, then Test solution.'
    ],
    observation: 'Galvanometer displays an exact Optical Density value.',
    result: 'Report precisely calculated concentration vs. standard.',
    interpretation: 'Higher Optical Density confirms higher solute concentration natively.',
    referenceRange: 'Machine specific.',
    clinicalSignificance: 'Foundation of completely identifying substrate concentration (Glucose, Urea).',
    sourcesOfError: ['Air bubbles in cuvette massively scatter light falsely inflating absorbance.'],
    precautions: ['Insert cuvette with clear un-frosted sides strictly facing the light beam.'],
    normalVsAbnormal: 'Absorbance must be definitively linear within assay limits.',
    applications: 'Clinical Biochemistry Endpoints.',
    limitations: 'Cannot precisely read UV wavelengths (requires Spectrophotometer typically).',
    examPoints: 'A red solution precisely requires a green filter (complementary absorbance).',
    viva: [
      { q: 'What is the Beer-Lambert Law?', a: 'Absorbance relates proportionally to concentration and path length entirely.' },
      { q: 'Purpose of setting a Blank?', a: 'Zeroes background absorbance caused genuinely by reagents and glass.' }
    ],
    mcq: [
      { q: 'A pink/red solution is best read using which filter?', options: ['Red', 'Green', 'Yellow', 'Blue'], answer: 1 },
      { q: 'Zero Absorbance corresponds entirely to what % Transmittance?', options: ['0%', '50%', '100%', 'Infinity'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Mercury_Thermometer.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
