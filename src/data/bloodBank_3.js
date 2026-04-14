export const bloodBankData3 = [
  {
    id: 'bb-documentation',
    title: 'Blood Bank Documentation & Legal Requirements',
    isImportant: true,
    definition: 'Comprehensive system of record-keeping ensuring traceability, accountability, and legal compliance in blood banking operations (as per NACO/DGHS guidelines).',
    principle: 'Traceability: The ability to track a single unit of blood from the donor to the recipient and vice-versa ("Vein-to-Vein"). Accountability: Legal obligation to ensure every step is documented and authorized by qualified personnel.',
    mechanism: 'Standardized labeling and electronic/manual ledger systems prevent administrative errors that lead to transfusion disasters.',
    types: ['Donor Records', 'Traceability Records', 'Safety Records'],
    specimen: 'Consent Forms, Registers, Label Stickers.',
    reagents: [{ component: 'Indelible Ink', function: 'Permanent record keeping.' }],
    equipment: ['Donor ID Registry', 'Component Register', 'Issue Register', 'Adverse Reaction Forms'],
    procedure: [
      'Obtain written Informed Consent from every donor before procedure.',
      'Assign a unique Blood Unit Number (BUN) to the donor and all satellite bags.',
      'Maintain Donor Register (Name, ID, Age, Sex, Date, BUN).',
      'Record Deferral reasons in a separate Confidential Deferral Register.',
      'Fill the Primary Bag Label: BUN, Date of collection, Expiry, Group, Rh, Result of TTI screening (HIV, HBV, HCV, Syphilis, Malaria).',
      'Update Issue Register: Recipient name, hospital, ward, unique BUN issued, name of the cross-matching technician.'
    ],
    observation: 'Documentation must be legible, signed by a Medical Officer, and kept for a minimum of 5 years (some records up to 20 years).',
    result: 'Complete chain of custody for every blood unit.',
    interpretation: 'Incomplete documentation is a violation of the Drugs and Cosmetics Act (India) and can lead to license cancellation.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Legal protection in case of lawsuits and essential for auditing transfusion-related morbidity/mortality.',
    sourcesOfError: ['Clerical errors in BUN transcription.', 'Missing signatures on consent forms.'],
    precautions: ['Maintain Donor Confidentiality (especially TTI results).', 'Use double-verification for labeling.'],
    normalVsAbnormal: 'A "Missing Unit" in records is a major biosafety failure.',
    applications: 'Compliance with NACO (National AIDS Control Organization) standards.',
    limitations: 'Manual systems are prone to human transcription errors compared to Barcoding.',
    examPoints: 'Traceability is "Vein-to-Vein". Records must be kept for minimum 5 years. NACO handles standards in India.',
    viva: [
      { q: 'What is Informed Consent in blood banking?', a: 'A signed document where the donor voluntarily agrees to donate blood after understanding the procedure and risks.' },
      { q: 'How long should Blood Bank records be kept?', a: 'Standard registers for 5-10 years; certain documentation related to donors may be kept indefinitely.' },
      { q: 'What is BUN?', a: 'Blood Unit Number - a unique alphanumeric code assigned to a specific donation for traceability.' }
    ],
    mcq: [
      { q: 'The principle of tracking blood from donor to recipient is called?', options: ['Traceability', 'Transparency', 'Transition', 'Transfusion'], answer: 0 },
      { q: 'Blood Bank licensing in India is regulated by?', options: ['NACO', 'CDSCO / FDA', 'ISRO', 'ICMR'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'bb-donor-selection',
    title: 'Donor Selection and Physical Examination',
    isImportant: true,
    definition: 'Stringent screening process to ensure that blood donation is safe for both the donor and the recipient.',
    principle: 'Strict adherence to NACO/WHO criteria. The screening includes a detailed medical history and a basic physical examination to rule out anemia, infections, or underlying diseases.',
    mechanism: 'Risk assessment based on physical parameters and behavioral history.',
    types: ['Replacement Donor', 'Voluntary Donor (Preferred)'],
    specimen: 'Donor Medical Questionnaire.',
    reagents: [{ component: 'Copper Sulphate (Sp. Gr. 1.053)', function: 'Rapidly screening for Hemoglobin level (>12.5 g/dl).' }],
    equipment: ['Sphygmomanometer', 'Weighing scale', 'Thermometer', 'Hemoglobinometer'],
    procedure: [
      'Check Age: 18 - 65 years.',
      'Check Weight: Minimum 45 kg (for 350ml) or 55 kg (for 450ml).',
      'Measure Pulse: 60-100 bpm (Regular).',
      'Measure BP: Systolic 100-140 mmHg, Diastolic 60-90 mmHg.',
      'Check Temperature: Normal (Afebrille).',
      'Hemoglobin Estimation: Must be >12.5 g/dl (Standard NACO requirement).'
    ],
    observation: 'Donors failing any of these criteria are deferred (Temporarily or Permanently).',
    result: 'Donor accepted or deferred.',
    interpretation: 'Omission of screening can lead to donor syncope or transmission of infection to recipients.',
    referenceRange: 'Hb > 12.5 g/dl | Weight > 45 kg.',
    clinicalSignificance: 'First line of defense in ensuring a safe blood supply.',
    sourcesOfError: ['Untrue answers by donors.', 'Inaccurate hemoglobin estimation.'],
    precautions: ['Maintain privacy during medical interview.', 'Discard used lancets in sharps container.'],
    normalVsAbnormal: 'A voluntary donor is significantly safer than a replacement/professional donor.',
    applications: 'Mandatory before every donation.',
    limitations: 'Window period for some infections cannot be detected by history alone.',
    examPoints: 'Age: 18-65. Hb: >12.5 g/dl. Weight: >45kg. Interval: 90 days between donations.',
    viva: [
      { q: 'What is the minimum hemoglobin required for blood donation?', a: '12.5 g/dl.' },
      { q: 'What is the minimum weight required to donate 350ml of blood?', a: '45 kg.' },
      { q: 'Mention the interval between two whole blood donations.', a: '90 days (3 months).' }
    ],
    mcq: [
      { q: 'Minimum age for blood donation in India?', options: ['16', '18', '21', '25'], answer: 1 },
      { q: 'Specific gravity of Copper Sulphate used for Hb screening?', options: ['1.025', '1.050', '1.053', '1.060'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Complete_blood_count_and_differential.jpg/960px-Complete_blood_count_and_differential.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'bb-donor-deferral',
    title: 'Donor Deferral Criteria (NACO/WHO Standards)',
    isImportant: false,
    definition: 'Classification of health conditions or lifestyle factors that temporarily or permanently disqualify an individual from donating blood.',
    principle: 'Donor safety (protecting the donor from health risks) and Recipient safety (protecting the patient from transfusion-transmitted infections).',
    mechanism: 'Time-based (temporary) or condition-based (permanent) intervals.',
    types: ['Temporary Deferral', 'Permanent Deferral'],
    specimen: 'History Records.',
    reagents: [{ component: 'None', function: 'Registry management.' }],
    equipment: ['Deferral Register'],
    procedure: [
      'Evaluate history for Temporary Deferrals: Tattoos/Acupuncture (6 months), Surgery (6-12 months), Malaria (3 years post-recovery), Alcohol (24 hours), antibiotics (7 days).',
      'Evaluate history for Permanent Deferrals: HIV, Hepatitis B/C, Cancer, Heart disease, Insulin-dependent Diabetes, Chronic Kidney disease.'
    ],
    observation: 'Deferral period depends on the specific risk factor.',
    result: 'Communication of deferral to donor with appropriate counseling.',
    interpretation: 'Temporary deferral allows for future donation; permanent is absolute.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Ensures that donation does not harm the donor and that the blood is not infectious or ineffective.',
    sourcesOfError: ['Inaccurate recall by donor.', 'Language barriers during interview.'],
    precautions: ['Always explain the "reason" for deferral clearly to avoid discouraging future donations.'],
    normalVsAbnormal: 'A tattoo deferral is temporary; Hepatitis B is permanent.',
    applications: 'Routine donor screening.',
    limitations: 'Relies on donor honesty.',
    examPoints: 'Tattoo/Ear piercing = 6 months deferral. Alcohol = 24 hours. Post-delivery/Lactation = 12 months.',
    viva: [
      { q: 'Mention two permanent deferral criteria.', a: 'Cancer and HIV infection.' },
      { q: 'How long is the deferral after a tattoo or acupuncture?', a: '6 months (due to hepatitis risk).' }
    ],
    mcq: [
      { q: 'Which is a temporary deferral criterion?', options: ['Heart disease', 'Cancer', 'Tattoo', 'HIV'], answer: 2 },
      { q: 'Post-malaria recovery deferral period is?', options: ['1 month', '6 months', '1 year', '3 years'], answer: 3 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  },
  {
    id: 'bb-phlebotomy',
    title: 'Phlebotomy and Blood Collection Procedure',
    isImportant: false,
    definition: 'The clinical process of aseptic venous blood collection from a donor into a sterile blood bag.',
    principle: 'Safe and sterile venipuncture into a major vein (usually antecubital) to collect 350ml or 450ml of whole blood while maintaining donor comfort and bag integrity.',
    mechanism: 'Gravity-assisted flow into a bag containing anticoagulants.',
    types: ['350ml collection', '450ml collection'],
    specimen: 'Donor Whole Blood.',
    reagents: [{ component: '70% Isopropyl Alcohol / Betadine', function: 'Antiseptic preparation.' }],
    equipment: ['Blood collection bag', 'Automatic blood mixer/shaker', 'Tourniquet', 'Artery forceps', 'Aluminum clips / tube sealer'],
    procedure: [
      'Verify donor identity and label the bag clearly.',
      'Check for a suitable vein in the antecubital fossa.',
      'Apply tourniquet and clean site with "spiral motion" antiseptic (center outwards).',
      'Perform venipuncture with a 16-gauge needle.',
      'Ensure the bag is on a shaker to mix blood with anticoagulant continuously.',
      'Stop collection when the target volume (350/450 ml +/ - 10%) is reached.',
      'Apply pressure and provide post-donation refreshment.'
    ],
    observation: 'Constant monitoring of the donor for adverse reactions (dizziness, fainting).',
    result: 'A full, sterile, well-mixed blood unit.',
    interpretation: 'Flow rate should be steady; slow flow (<10 mins for 450ml) may lead to micro-clots in the bag.',
    referenceRange: '350ml or 450ml.',
    clinicalSignificance: 'The core physical act of blood procurement.',
    sourcesOfError: ['Hematoma at the site.', 'Under-filling the bag (Short Draw) resulting in anticoagulant toxicity for the cells.'],
    precautions: ['Use only one prick; "fishing" for a vein is forbidden.', 'Label the bag BEFORE start.'],
    normalVsAbnormal: 'A donation should complete within 8-10 minutes.',
    applications: 'Donor center operations.',
    limitations: 'Difficult in donors with poor venous access.',
    examPoints: 'Aseptic cleaning is "Spiral". Gauge: 16G needle. Volume: 350ml vs 450ml.',
    viva: [
      { q: 'Why is a blood shaker used during collection?', a: 'To ensure continuous mixing of blood with the anticoagulant to prevent clotting.' },
      { q: 'Which needle gauge is standard for blood donation bags?', a: '16 Gauge.' }
    ],
    mcq: [
      { q: 'Standard amount of blood collected in a small bag?', options: ['250ml', '350ml', '500ml', '1000ml'], answer: 1 },
      { q: 'Ideal time for a 450ml donation is?', options: ['< 3 mins', '8-10 mins', '20-30 mins', '1 hour'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FreshFrozenPlasma.JPG/960px-FreshFrozenPlasma.JPG'
    }
  },
  {
    id: 'bb-anticoagulants',
    title: 'Blood Bag Types and Anticoagulants (CPD, CPDA, SAGM)',
    isImportant: true,
    definition: 'Evaluation of the chemical preservatives used to maintain cell viability and prevent clotting during storage.',
    principle: 'Preservatives must prevent clotting (via Citrate), maintain pH (via Phosphate), provide energy (via Dextrose), and stabilize membrane (via Adenine).',
    mechanism: 'Chelation of Calcium icons to stop the coagulation cascade.',
    types: ['CPD (Citrate Phosphate Dextrose)', 'CPDA-1 (CPD + Adenine)', 'SAGM (Additive system)'],
    specimen: 'Preservative solutions.',
    reagents: [
      { component: 'Trisodium Citrate', function: 'Anticoagulant (binds Calcium).' },
      { component: 'Sodium Phosphate', function: 'Buffer (maintains pH).' },
      { component: 'Dextrose', function: 'Source of energy (ATP).' },
      { component: 'Adenine', function: 'Maintains high ATP levels/viability.' }
    ],
    equipment: ['Blood bags (Single, Double, Triple, Quadruple)'],
    procedure: [
      'Single bag: Used for whole blood only.',
      'Triple bag: Used to separate PRBC, FFP, and Platelets.',
      'Quadruple bag: Used for PRBC, FFP, Platelets, and Cryoprecipitate.',
      'Top-and-Bottom bags: Modern system for automated component separation.'
    ],
    observation: 'Check bag integrity and expiry of the anticoagulant solution.',
    result: 'Standardized shelf life for each preservative.',
    interpretation: 'CPD: 21 days | CPDA-1: 35 days | SAGM: 42 days.',
    referenceRange: 'N/A',
    clinicalSignificance: 'Determines the logistical shelf life of the hospital\'s blood supply.',
    sourcesOfError: ['Leaking bags.', 'Discolored anticoagulant (contamination).'],
    precautions: ['Store unused bags at room temperature.', 'Protect from sharp objects.'],
    normalVsAbnormal: 'Short draws (<300ml in 350ml bag) lead to excess citrate which can cause hypocalcemia in the recipient.',
    applications: 'Inventory management and supply chain.',
    limitations: 'Cells gradually lose 2,3-DPG over time regardless of preservative type.',
    examPoints: 'CPDA-1 shelf life: 35 days. Adenine increases shelf life. Citrate binds Calcium.',
    viva: [
      { q: 'What is the function of Dextrose in CPDA?', a: 'Provides nutrition to RBCs for ATP production via glycolysis.' },
      { q: 'Mention the shelf life of blood in CPDA-1 bag.', a: '35 days.' },
      { q: 'What is the role of Citrate?', a: 'It acts as an anticoagulant by chelating (binding) Calcium ions.' }
    ],
    mcq: [
      { q: 'Which ingredient in CPDA increases shelf life to 35 days?', options: ['Citrate', 'Phosphate', 'Dextrose', 'Adenine'], answer: 3 },
      { q: 'Shelf life of blood with SAGM additive is?', options: ['21 days', '35 days', '42 days', '120 days'], answer: 2 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/At_Manchester_2023_2023_006.jpg/960px-At_Manchester_2023_2023_006.jpg'
    }
  }
];
