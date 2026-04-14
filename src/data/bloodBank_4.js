export const bloodBankData4 = [
  {
    id: 'bb-prbc',
    title: 'Preparation of Packed Red Blood Cells (PRBC)',
    isImportant: true,
    definition: 'A concentrated suspension of erythrocytes prepared by the partial removal of plasma from whole blood, while maintaining the original cellular count.',
    principle: 'Based on differential density. When whole blood is centrifuged at high speeds (Heavy Spin) or allowed to settle via gravity, the heavier erythrocytes sediment at the bottom and the lighter plasma stays on top. Removal of 70-80% of plasma results in PRBC with a Hematocrit (Hct) of 60-80%.',
    mechanism: 'Centrifugal sedimentation based on cell density.',
    types: ['Gravity Sedimentation', 'Centrifugation (Preferred)'],
    specimen: 'CPDA-1 or CPD/SAGM whole blood within 24 hours of collection.',
    reagents: [{ component: 'Additive solution (SAGM)', function: 'Optional; extends shelf life to 42 days.' }],
    equipment: ['Refrigerated Centrifuge', 'Plasma Expresser', 'Weighing scale'],
    procedure: [
      'Balance the triple/double blood bags accurately in centrifuge buckets.',
      'Centrifuge at 4000-5000 RPM (Heavy Spin) for 7-10 minutes at 4°C.',
      'Place the bag in the plasma expresser.',
      'Transfer the supernatant plasma into the satellite bag until only ~20% plasma remains with the cells.',
      'Hermetically seal the tubing with an aluminum clip or tube sealer.'
    ],
    observation: 'The final unit appears dark red, viscous, and contains ~200-250 ml volume.',
    result: 'Hematocrit of the final unit should be between 65-75%.',
    interpretation: 'One unit of PRBC typically raises a patient\'s hemoglobin by 1 g/dl or Hct by 3%.',
    referenceRange: 'Hct: 60 - 80%.',
    clinicalSignificance: 'Preferred for patients with anemia who do not require volume expansion (e.g., chronic anemia, heart failure) to prevent TACO (Transfusion Associated Circulatory Overload).',
    sourcesOfError: ['Over-centrifugation causing RBC lysis.', 'Failure to maintain cold chain (4°C) during processing.'],
    precautions: ['Maintain closed-system integrity to avoid bacterial contamination.', 'Ensure proper balancing of the centrifuge.'],
    normalVsAbnormal: 'Normal PRBC has no clots or visible hemolysis.',
    applications: 'Treatment of symptomatic anemia.',
    limitations: 'Does not provide clotting factors or functional platelets.',
    examPoints: 'Hct range: 60-80%. 1 unit raises Hb by 1 g/dl. Centrifuge at 4°C.',
    viva: [
      { q: 'What is the standard Hematocrit of a PRBC unit?', a: '65% to 75%.' },
      { q: 'Why is PRBC preferred over whole blood in heart patients?', a: 'To provide oxygen-carrying capacity without causing volume overload (edema).' }
    ],
    mcq: [
      { q: 'One unit of PRBC increases adult hemoglobin by approximately?', options: ['0.5 g/dl', '1.0 g/dl', '2.0 g/dl', '5.0 g/dl'], answer: 1 },
      { q: 'Storage temperature for PRBC is?', options: ['-20°C', '22°C', '2-6°C', '37°C'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tabletop_centrifuge.jpg/960px-Tabletop_centrifuge.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'bb-ffp',
    title: 'Preparation of Fresh Frozen Plasma (FFP)',
    isImportant: true,
    definition: 'The plasma portion of a whole blood donation that is separated and frozen within 6-8 hours to preserve labile coagulation factors.',
    principle: 'Centrifugation separates cells from plasma. Rapid freezing (Snap freezing) at -30°C or below preserves Factor V and Factor VIII, which are otherwise deactivated at higher temperatures.',
    mechanism: 'Thermal stabilization of labile proteins.',
    types: ['Fresh Frozen Plasma (FFP)', 'Frozen Plasma (FP) - frozen after 24 hrs.'],
    specimen: 'Whole blood collected in CPD/CPDA.',
    reagents: [{ component: 'None', function: 'Physical separation.' }],
    equipment: ['Refrigerated Centrifuge', 'Deep Freezer (-30°C to -80°C)', 'Plasma Expresser'],
    procedure: [
      'Centrifuge whole blood at 4000 RPM (Heavy Spin) for 7 mins at 4°C.',
      'Express the plasma into a satellite bag.',
      'Seal the bag and place it in the deep freezer immediately.',
      'Ensure the freezing temperature reaches -30°C within 6-8 hours of collection.'
    ],
    observation: 'Frozen FFP appears as a solid yellow block.',
    result: 'Unit contains ~200-250 ml of plasma.',
    interpretation: 'Rich in all coagulation factors, albumin, and globulins.',
    referenceRange: 'Factor VIII level should be >0.7 IU/ml.',
    clinicalSignificance: 'Treatment of massive hemorrhage, DIC, Liver disease, and multiple coagulation factor deficiencies.',
    sourcesOfError: ['Slow freezing allows factor degradation.', 'Thawing at >37°C denatures proteins.'],
    precautions: ['Store in a protective cardboard or plastic box to prevent bag breakage (frozen bags are brittle).'],
    normalVsAbnormal: 'Thawed FFP should be clear pale yellow; cloudiness may indicate high lipids or bacterial growth.',
    applications: 'Coagulopathy management.',
    limitations: 'Ineffective for specific factor deficiencies where concentrates (like Factor VIII) are available.',
    examPoints: 'Freeze within 6-8 hours. Storage: -30°C for 1 year. Thaw at 37°C.',
    viva: [
      { q: 'How soon after collection must FFP be frozen?', a: 'Within 6 to 8 hours.' },
      { q: 'What is the storage temperature and shelf life of FFP?', a: 'Stored at -30°C or colder for up to 1 year.' },
      { q: 'Which coagulation factors are "labile"?', a: 'Factor V and Factor VIII.' }
    ],
    mcq: [
      { q: 'FFP is rich in all coagulation factors except?', options: ['Factor II', 'Factor V', 'Factor VIII', 'None of the above'], answer: 3 },
      { q: 'Thawed FFP must be transfused within?', options: ['4 hours', '24 hours', '5 days', '35 days'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'bb-platelets',
    title: 'Preparation of Platelet Concentrates (RDP/SDP)',
    isImportant: true,
    definition: 'A concentrated suspension of functional platelets prepared from either a single unit of whole blood (RDP) or via apheresis (SDP).',
    principle: 'Soft Spin (Low Speed) centrifugation of whole blood results in Platelet Rich Plasma (PRP). A second Heavy Spin (High Speed) on the PRP sediments the platelets to the bottom. The supernatant plasma is expressed, leaving the platelet concentrate.',
    mechanism: 'Two-step differential centrifugation.',
    types: ['Random Donor Platelets (RDP)', 'Single Donor Platelets (SDP/Apheresis)'],
    specimen: 'Whole blood (for RDP) collected within 6 hours.',
    reagents: [{ component: 'None', function: 'Physical separation.' }],
    equipment: ['Refrigerated Centrifuge', 'Platelet Agitator (Incubator)', 'Plasma Expresser'],
    procedure: [
      'Step 1: Centrifuge Whole Blood at 2000 RPM (Soft Spin) at 22°C for 3-5 mins.',
      'Step 2: Transfer PRP to satellite bag.',
      'Step 3: Centrifuge PRP at 4000 RPM (Heavy Spin) for 7 mins.',
      'Step 4: Express the supernatant plasma (forming PPP) leaving ~50ml with the platelet button.',
      'Step 5: Leave the bag undisturbed for 1 hour, then place on an agitator at 22°C.'
    ],
    observation: 'Concentrate shows "Swirl" phenomenon when shaken (indicates functional, healthy, non-flat platelets).',
    result: 'RDP contains >5.5 x 10^10 platelets; SDP contains >3.0 x 10^11.',
    interpretation: 'One RDP unit typically raises platelet count by 5,000 to 10,000/µl in an adult.',
    referenceRange: 'Count: 5.5 x 10^10 per unit | Volume: 50-70 ml.',
    clinicalSignificance: 'Treatment of thrombocytopenia (e.g., Dengue, Leukemia, Chemotherapy).',
    sourcesOfError: ['Chilling the unit (Cold causes irreversible platelet activation).', 'Failure to agitate (causes pH drop and platelet death).'],
    precautions: ['Maintain strictly at 20-24°C.', 'Never refrigerate platelets.'],
    normalVsAbnormal: 'Absence of "swirl" usually indicates poor quality or bacterial contamination.',
    applications: 'Oncology and surgical support.',
    limitations: 'Short shelf life (only 5 days) due to risk of bacterial growth at room temperature.',
    examPoints: 'Storage: 20-24°C with continuous AGITATION. Shelf life: 5 days.',
    viva: [
      { q: 'Why are platelets stored at room temperature (22°C)?', a: 'Refrigeration at 4°C causes irrevirsible shape changes and activation of platelets, leading to their rapid clearance from circulation.' },
      { q: 'What is the purpose of a Platelet Agitator?', a: 'To maintain oxygen levels and prevent a drop in pH which kills the platelets.' }
    ],
    mcq: [
      { q: 'Shelf life of platelet concentrates is?', options: ['24 hours', '5 days', '35 days', '1 year'], answer: 1 },
      { q: 'Which spin is used to prepare PRP from Whole Blood?', options: ['Soft Spin', 'Heavy Spin', 'Ultra Spin', 'Cold Spin'], answer: 0 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'bb-cryo',
    title: 'Preparation of Cryoprecipitate',
    isImportant: false,
    definition: 'The cold-insoluble protein fraction that precipitates when Fresh Frozen Plasma (FFP) is thawed at 4°C.',
    principle: 'When FFP is thawed slowly at 1-6°C, certain proteins (Factor VIII, Fibrinogen, vWF, Factor XIII) remain insoluble. This "precipitate" is separated and re-frozen.',
    mechanism: 'Cryo-insolubility of large multimeric proteins.',
    types: ['Cryo-Poor Plasma (By-product)', 'Cryoprecipitate'],
    specimen: 'Standard FFP bag.',
    reagents: [{ component: 'None', function: 'Physical separation.' }],
    equipment: ['Refrigerated Centrifuge', 'Refrigerated circulating water bath (4°C)'],
    procedure: [
      'Thaw FFP in a 4°C refrigerator or circulating water bath until it reaches a "slushy" consistency.',
      'Centrifuge at 4000 RPM (Heavy Spin) at 4°C for 10-15 mins.',
      'Express the supernatant (Cryo-Poor Plasma) into a satellite bag, leaving ~10-15 ml with the precipitate.',
      'Immediately re-freeze at -30°C.'
    ],
    observation: 'Final unit is a small volume (10-15ml) of concentrated protein.',
    result: 'Must contain >80 IU of Factor VIII and >150 mg of Fibrinogen.',
    interpretation: 'A highly concentrated source of Fibrinogen.',
    referenceRange: 'Volume: 10-20 ml.',
    clinicalSignificance: 'Treatment of Hypofibrinogenemia, Von Willebrand Disease, and hemophilia A (if concentrates unavailable).',
    sourcesOfError: ['Thawing too quickly at room temperature.', 'Failure to re-freeze immediately.'],
    precautions: ['Handle frozen bags gently.'],
    normalVsAbnormal: 'Should appear as a white/yellowish sludge when frozen.',
    applications: 'DIC with low fibrinogen, post-surgical bleeding.',
    limitations: 'Small volume; usually requires pooling 5-10 units for an adult dose.',
    examPoints: 'Contains: Factor VIII, Fibrinogen, vWF, Factor XIII. Thaw FFP at 4°C.',
    viva: [
      { q: 'Name three components found in Cryoprecipitate.', a: 'Factor VIII, Fibrinogen, and Von Willebrand Factor (vWF).' },
      { q: 'In which clinical condition is it most commonly used today?', a: 'Hypofibrinogenemia (Low fibrinogen levels).' }
    ],
    mcq: [
      { q: 'Cryoprecipitate is prepared by thawing FFP at?', options: ['0°C', '4°C', '22°C', '37°C'], answer: 1 },
      { q: 'Which factor is NOT present in Cryoprecipitate?', options: ['Factor VIII', 'Fibrinogen', 'vWF', 'Albumin'], answer: 3 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'bb-storage',
    title: 'Storage and Transportation (Cold Chain Management)',
    isImportant: true,
    definition: 'Systematic maintenance of specific temperature ranges for blood and its components from collection to transfusion.',
    principle: 'Metabolic activity and protein stability are highly temperature-sensitive. Deviation from the "Cold Chain" leads to bacterial growth, cell lysis (RBC), or protein deactivation (FFP/Cryo).',
    mechanism: 'Enzyme stabilization via thermal regulation.',
    types: ['Coolers', 'Blood Refrigerators', 'Deep Freezers'],
    specimen: 'All blood components.',
    reagents: [{ component: 'Ice Packs / Coolant gels', function: 'Buffer against ambient Heat.' }],
    equipment: ['Blood Bank Refrigerator (2-6°C)', 'Platelet Incubator (20-24°C)', 'Deep Freezer (-30°C)', 'Temperature Loggers'],
    procedure: [
      'Store Whole Blood/PRBC at 2-6°C in monitored refrigerators with alarms.',
      'Store Platelets at 20-24°C with constant agitation.',
      'Store FFP/Cryo at -30°C or colder.',
      'During transport: Use insulated "Blood Boxes". PRBC must have ice packs; Platelets must NOT have ice packs.',
      'Log temperatures every 4-8 hours (NACO requirement).'
    ],
    observation: 'Visual inspection of temperature charts and digital monitors.',
    result: 'Stable components with minimal storage lesions.',
    interpretation: 'Any unit exposed to >10°C for more than 30 minutes must usually be discarded.',
    referenceRange: 'PRBC: 2-6°C | FFP: -30°C | Platelets: 22°C.',
    clinicalSignificance: 'Ensures the efficacy and safety of the final product.',
    sourcesOfError: ['Power failure.', 'Leaving the refrigerator door open.', 'Placing ice packs directly touching the blood bags (causes hemolysis).'],
    precautions: ['Always use dedicated blood refrigerators with circular chart recorders.', 'Never store food or infectious samples with blood.'],
    normalVsAbnormal: 'A "Cold Chain Break" renders the entire supply suspect and potentially dangerous.',
    applications: 'Quality control and logistics.',
    limitations: 'Transport in extreme climates (e.g., Indian summers) requires specialized validated shippers.',
    examPoints: 'PRBC: 2-6°C. FFP: -30°C. Platelets: 20-24°C. Agitation for platelets is MUST.',
    viva: [
      { q: 'What is the storage temperature of Whole Blood?', a: '2°C to 6°C.' },
      { q: 'Can platelets be stored in a refrigerator?', a: 'No, they must be stored at room temperature (22°C) with agitation.' },
      { q: 'What happens if RBCs are frozen by mistake?', a: 'They hemolyze (burst) upon thawing and can cause fatal reactions if transfused.' }
    ],
    mcq: [
      { q: 'Ideal storage temperature for Fresh Frozen Plasma?', options: ['0°C', '2-6°C', '-30°C or colder', '22°C'], answer: 2 },
      { q: 'Platelets must be transported at which temperature range?', options: ['-80°C', '2-6°C', '20-24°C', '37°C'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
