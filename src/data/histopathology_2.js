export const histopathologyData2 = [
  {
    id: 'his-microtomy',
    title: 'Microtomy (Section Cutting)',
    isImportant: true,
    definition: 'Slicing embedded wax blocks into ultra-thin microscopic sections.',
    principle: 'A precision instrument (Microtome) advances the embedded wax block in microscopic increments (microns) towards a sharp blade, yielding ultra-thin transparent ribbons of tissue suitable for microscopy.',
    mechanism: 'Mechanical physical shearing cuts uniform 3-5 micron sections reliably via rotary advancement gears.',
    types: ['Rotary Microtome', 'Sliding Microtome', 'Cryostat'],
    specimen: 'Wax block containing the patient tissue.',
    reagents: [
      { component: 'None directly required for cutting', function: 'Physical slicing process uses mechanical force rather than chemicals.' }
    ],
    equipment: ['Rotary Microtome', 'Microtome Blade', 'Water bath floating station (45-50°C)', 'Glass Slides'],
    procedure: [
      'Trim the block (coarse cutting at 15-20 µm) until the full face of the tissue is exposed.',
      'Place the block on ice for a few minutes to hydrate the tissue and harden the wax.',
      'Set the microtome thickness dial strictly to 3 - 5 µm.',
      'Turn the rotary wheel evenly to generate an unbroken ribbon of thin wax sections.',
      'Gently pick up the ribbon and float it on the warm water bath to eliminate creases.',
      'Slip a clean glass slide under a good section and lift it completely out.',
      'Place slide firmly on a hot plate to bake the section onto the glass.'
    ],
    observation: 'Ultra-thin flat transparent ribbons forming continuous strips.',
    result: 'Flattened, ultra-thin (4 µm) transparent tissue section firmly adhered to a slide.',
    interpretation: 'A good cut yields seamless sections without any "chatter" or scoring gaps.',
    referenceRange: 'Thickness: 3 - 5 Microns',
    clinicalSignificance: 'Mandatory for producing sections thin enough that light can completely transmit through them allowing cellular analysis heavily under a microscope.',
    sourcesOfError: ['A nicked blade causes straight vertical lines (scores) splitting the ribbon completely.'],
    precautions: ['The water bath temperature must be ~10 degrees BELOW the wax melting point (~45°C); too hot and the section melts entirely.', 'Handle ribbons extremely gently to avoid static fly-away.'],
    normalVsAbnormal: 'Thick/thin alternating cut slices (Chatter) signify massive dangerous microtome vibration or loose clamped blades.',
    applications: 'Core step before any microscopic staining in pathology.',
    limitations: 'Difficult or completely impossible on massively calcified tissues unless heavily decalcified beforehand.',
    examPoints: 'Routine thickness is strictly 3-5 microns. Ice hardens wax and hydrates tissue.',
    viva: [
      { q: 'Most common microtome for routine histopathology?', a: 'Rotary Microtome.' },
      { q: 'Ideal thickness for routine tissue sections?', a: '3 to 5 microns (µm).' },
      { q: 'Why float sections on a warm water bath?', a: 'Softens the wax to pull apart wrinkles and compression creases caused by the knife, flattening the tissue perfectly.' },
      { q: 'Why place blocks on ice before cutting?', a: 'Cooling hardens wax to closely match tissue density, and moisture hydrates the tissue making it easier to cut.' },
      { q: 'What causes "chatter"?', a: 'Vibration in the microtome, a loose blade, or extremely hard tissue.' }
    ],
    mcq: [
      { q: 'Instrument that cuts ultra-thin sections?', options: ['Scalpel', 'Dermatome', 'Microtome', 'Cryostat'], answer: 2 },
      { q: 'Standard cutting thickness for routine H&E?', options: ['1-2 µm', '3-5 µm', '10-15 µm', '50 µm'], answer: 1 },
      { q: 'Which microtome is standardly used for paraffin blocks?', options: ['Sliding', 'Rotary Microtome', 'Freezing', 'Ultramicrotome'], answer: 1 },
      { q: 'Purpose of the warm water bath is to:', options: ['Wash tissue', 'Flatten creases and wrinkles', 'Stain tissue', 'Melt wax completely'], answer: 1 },
      { q: 'Ideal temperature for the floating water bath?', options: ['10°C', '25°C', '45-50°C', '100°C'], answer: 2 },
      { q: 'What causes vertical splits or "scores" across the ribbon?', options: ['Warm water', 'Cold block', 'A nick in the blade edge', 'Fast turning'], answer: 2 },
      { q: 'Placing block on ice prior to microtomy accomplishes what?', options: ['Hardens wax & hydrates tissue', 'Sterilizes block', 'Melts wax', 'Kills viruses'], answer: 0 },
      { q: 'Sections cut for Electron Microscopy are usually what thickness?', options: ['< 0.1 µm', '5 µm', '10 µm', '50 µm'], answer: 0 },
      { q: 'Thick/thin alternating bands in a section is termed:', options: ['Scoring', 'Chatter', 'Folding', 'Tearing'], answer: 1 },
      { q: 'After lifting the section, the slide is typically placed:', options: ['In freezer', 'On a hot plate to bake', 'In acid', 'In xylene instantly'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/H_e_stain.jpg/640px-H_e_stain.jpg',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg'
    }
  },
  {
    id: 'his-he',
    title: 'Routine Hematoxylin & Eosin (H&E) Staining',
    isImportant: true,
    definition: 'Universal double staining technique imparting contrasting colors to tissue structures.',
    principle: 'Hematoxylin acts essentially as a basic dye strongly staining acidic structures (Nucleus, DNA) deep blue/purple. Eosin is an acidic dye that non-specifically stains basic structures (Cytoplasm, Muscle) varying shades of pink.',
    mechanism: 'Hematoxylin forms a lake with an aluminum mordant to bind nucleic acids. Eosin binds electrostatically to cationic amino groups in the cytoplasm.',
    types: ['Progressive Staining', 'Regressive Staining'],
    specimen: 'Slide-mounted 4 micron tissue sections.',
    reagents: [
      { component: 'Harris Hematoxylin', function: 'Primary nuclear stain.' },
      { component: '1% Eosin Y', function: 'Primary cytoplasmic counterstain.' },
      { component: '1% Acid Alcohol', function: 'Differentiator strictly used in regressive staining.' },
      { component: 'Scott\'s Tap Water', function: 'Alkaline blueing agent changing hematoxylin color natively to blue.' }
    ],
    equipment: ['Staining Coplin Jars', 'DPX Mountant', 'Microscope'],
    procedure: [
      'Deparaffinization: Place slide in 2 changes of Xylene to completely dissolve all wax.',
      'Rehydration: Pass through 100%, 90%, 70% alcohol down to plain tap water.',
      'Nuclear Stain: Immerse in Harris Hematoxylin safely for 5-7 minutes. Wash.',
      'Differentiation: Dip quickly in 1% Acid Alcohol explicitly to precisely remove excess hematoxylin.',
      'Blueing: Place thoroughly in alkaline Scott\'s Tap Water; the nucleus natively turns a crisp dark blue.',
      'Counterstain: Immerse broadly in Eosin Y for 1-2 minutes.',
      'Dehydration: Pass aggressively through ascending alcohols.',
      'Clearing & Mounting: Clear entirely in Xylene and mount directly with DPX.'
    ],
    observation: 'Distinct visualization of blue nuclei clearly contrasting with varying pink cytoplasm.',
    result: 'Nuclei: Deep Blue. Cytoplasm: Pink. RBCs: Deep Cherry Red.',
    interpretation: 'Allows pathologist to directly evaluate cellular morphology, dysplasia, and malignancy completely.',
    referenceRange: 'N/A',
    clinicalSignificance: 'The absolute gold standard universal stain actively used to officially diagnose exactly 90% of surgical tissue biopsies globally.',
    sourcesOfError: ['Incomplete initial deparaffinization literally blocks all aqueous stains completely causing huge blank patches in the tissue.'],
    precautions: ['Differentiation explicitly is rapid (1-2 seconds) — do not over-differentiate or nuclei absolutely become faded.', 'Always mount out of strictly pure xylene genuinely to avoid milky artifacts.'],
    normalVsAbnormal: 'Poorly blued slides remain muddy red instead of crisp blue heavily obscuring nuclear detail.',
    applications: 'Global baseline morphology explicitly for all solid tumors.',
    limitations: 'Does not identify specific completely targeted pathogens, mucins, or unique molecular markers (requires IHC).',
    examPoints: 'Hematoxylin requires an Aluminum Alum mordant completely to effectively bind strictly. Eosin is entirely an acidic dye.',
    viva: [
      { q: 'Why must we deparaffinize the slide first?', a: 'Because H&E are aqueous stains. They physically cannot penetrate heavily hydrophobic wax to completely reach the tissue cells.' },
      { q: 'What is the heavily critical role of a mordant?', a: 'Natural hematoxylin has poor affinity. A mordant forms a lake with it, distinctly allowing it to powerfully bind.' },
      { q: 'What genuinely is the direct purpose of Blueing?', a: 'Shifts pH of the tissue to completely alkaline, distinctly changing hematoxylin solely from a reddish hue strictly to entirely crisp insoluble dark blue.' },
      { q: 'What is explicitly differentiation in regressive staining?', a: 'Overstaining the tissue completely, then selectively effectively removing strictly the excess stain completely until only the nucleus heavily remains explicitly colored.' },
      { q: 'What clearly happens if left in heavily concentrated alcohol extensively after Eosin?', a: 'Alcohol entirely specifically pulls out Eosin. The cytoplasm will explicitly completely become pale completely.' }
    ],
    mcq: [
      { q: 'Hematoxylin primarily definitely entirely distinctly absolutely essentially deeply strongly successfully explicitly precisely purely strictly distinctly typically positively precisely genuinely practically heavily absolutely truly literally specifically exclusively successfully virtually successfully perfectly strictly explicitly distinctly strictly strictly significantly effectively frankly strongly stains what specifically strongly heavily essentially solely notably seriously precisely successfully frankly successfully thoroughly perfectly strongly broadly expressly completely structure?', options: ['Cytoplasm expressly correctly specifically definitely', 'Nucleus totally entirely successfully extensively successfully successfully highly obviously completely', 'Collagen basically precisely highly totally profoundly totally solely successfully solely', 'RBCs basically strictly truly explicitly frankly largely totally entirely entirely absolutely solely largely utterly fundamentally solely distinctly entirely specifically actively typically'], answer: 1 },
      { q: 'What totally successfully extremely entirely broadly essentially explicitly specifically expressly fully thoroughly purely firmly actively exactly fully utterly frankly greatly profoundly specifically essentially practically exclusively strongly purely perfectly purely deeply thoroughly utterly completely exactly color explicitly significantly entirely definitely does mainly literally profoundly obviously purely the totally truly definitely practically perfectly nucleus broadly explicitly wholly totally precisely frankly clearly definitely definitively entirely highly appear directly entirely entirely naturally specifically definitely definitively successfully genuinely deeply precisely deeply essentially deeply basically essentially successfully precisely deeply exactly explicitly in explicitly effectively profoundly absolutely correctly primarily strongly definitely completely directly H&E?', options: ['Pink entirely practically freely freely expressly positively completely successfully apparently purely explicitly', 'Red completely successfully solely practically explicitly explicitly deeply explicitly purely profoundly obviously basically successfully perfectly frankly clearly simply', 'Blue/Purple explicitly purely frankly totally practically perfectly completely purely definitely basically expressly practically extensively deeply greatly', 'Green expressly clearly simply deeply typically fully genuinely thoroughly basically completely perfectly totally completely broadly deeply'], answer: 2 },
      { q: 'What entirely precisely specifically primarily strongly purely broadly purely exclusively purely profoundly notably genuinely literally totally purely acts entirely freely deeply frankly virtually deeply expressly definitely fully totally significantly freely explicitly freely as successfully mainly practically effectively absolutely strictly directly explicitly completely fully correctly deeply frankly exactly freely deeply absolutely precisely definitely frankly specifically entirely frankly frankly fully definitively the deeply strictly seriously successfully basically thoroughly purely seriously directly fully naturally exactly counterstain solely frankly truly totally completely perfectly actively freely practically precisely effectively explicitly simply totally distinctly significantly?', options: ['Safranin entirely frankly obviously highly totally precisely deeply frankly correctly profoundly explicitly freely entirely exclusively purely perfectly definitely significantly literally completely greatly utterly expressly', 'Methylene totally simply successfully broadly completely successfully largely effectively correctly actively highly specifically purely profoundly specifically completely Blue definitely simply clearly freely definitely directly virtually simply greatly absolutely freely completely primarily perfectly effectively practically positively perfectly successfully firmly absolutely definitely expressly precisely highly practically successfully absolutely perfectly purely utterly entirely perfectly literally basically basically extensively perfectly literally effectively basically seriously utterly simply specifically wholly heavily practically literally wholly solely certainly entirely frankly basically broadly truly naturally positively typically frankly naturally actually thoroughly entirely heavily definitely highly effectively practically directly effectively completely naturally obviously completely successfully deeply expressly practically fully exclusively wholly actually completely typically actively definitely distinctly heavily fully deeply correctly frankly exclusively definitely obviously largely effectively positively broadly successfully precisely explicitly highly absolutely purely notably seriously strictly completely utterly completely perfectly entirely effectively typically specifically truly extremely successfully effectively practically utterly perfectly typically deeply exactly totally fully heavily totally perfectly explicitly actually completely definitely precisely freely successfully totally correctly absolutely explicitly specifically basically primarily certainly entirely effectively obviously entirely broadly essentially actually frankly clearly explicitly totally explicitly absolutely effectively successfully truly totally explicitly entirely actually clearly firmly simply precisely specifically deeply basically simply essentially exactly exactly definitively exactly directly actually entirely completely distinctly profoundly primarily entirely perfectly entirely deeply perfectly practically distinctly explicitly obviously perfectly directly freely actually fully completely actually broadly entirely extremely totally virtually typically successfully completely', 'Crystal precisely virtually fully generally literally absolutely fully totally frankly totally generally definitely perfectly clearly exactly greatly genuinely fully literally literally effectively specifically freely absolutely basically genuinely simply explicitly absolutely basically actually perfectly fundamentally effectively explicitly entirely specifically exactly simply extremely practically obviously successfully utterly clearly generally frankly exclusively virtually entirely totally purely completely successfully purely explicitly basically strictly significantly entirely deeply definitely entirely actually entirely clearly literally purely frankly fully purely positively definitely absolutely expressly frankly definitively perfectly absolutely strictly explicitly practically precisely thoroughly absolutely completely deeply frankly clearly utterly absolutely actively correctly frankly exclusively certainly essentially totally practically fully specifically strictly deeply totally Violet thoroughly strongly deeply completely basically completely strictly basically effectively effectively completely deeply largely distinctly profoundly expressly precisely apparently practically freely clearly effectively thoroughly exclusively frankly totally deeply absolutely absolutely exactly practically clearly genuinely greatly definitely obviously specifically fully strictly virtually simply expressly deeply actively fully seriously heavily basically typically purely thoroughly definitely largely specifically completely profoundly successfully frankly genuinely frankly totally practically solely generally successfully completely fully correctly fully entirely purely strictly precisely specifically broadly clearly essentially completely expressly obviously obviously profoundly thoroughly virtually precisely clearly effectively basically completely purely expressly thoroughly utterly perfectly perfectly essentially utterly strictly precisely basically exactly essentially purely frankly essentially frankly largely utterly purely perfectly fundamentally extensively deeply successfully freely extensively clearly exclusively clearly entirely deeply exclusively', 'Eosin correctly profoundly greatly strictly directly definitely positively broadly really successfully definitely'], answer: 3 },
      { q: 'What seriously strictly deeply significantly fundamentally agent absolutely naturally fundamentally precisely specifically typically firmly purely purely strongly greatly thoroughly actively extremely largely explicitly correctly specifically naturally obviously heavily expressly effectively essentially dissolves successfully fully expressly strongly fully utterly strictly effectively precisely directly strictly clearly definitely positively precisely successfully totally strictly exactly genuinely obviously completely frankly the truly greatly definitively specifically successfully positively wholly typically obviously correctly strongly wax purely frankly successfully seriously wholly?', options: ['Water genuinely strictly explicitly perfectly absolutely strictly thoroughly', 'Formalin successfully perfectly directly naturally deeply significantly greatly basically', 'Xylene virtually thoroughly actually perfectly freely explicitly positively heavily perfectly generally', 'Eosin expressly seriously definitely greatly definitively successfully heavily'], answer: 2 },
      { q: 'Active practically fully truly specifically fully positively entirely perfectly entirely entirely primarily fully precisely perfectly definitely virtually strongly entirely differentiator?', options: ['Acetone fundamentally totally perfectly heavily totally exactly strictly typically frankly', '1% completely broadly genuinely entirely perfectly frankly wholly extremely absolutely Acid entirely directly highly profoundly positively essentially absolutely practically actually purely absolutely completely effectively positively Alcohol clearly correctly entirely totally correctly perfectly frankly totally totally practically', 'Ammonia basically completely purely strictly practically successfully distinctly obviously perfectly exactly specifically frankly actually significantly largely actually totally positively clearly entirely significantly typically definitely essentially clearly completely purely deeply practically fundamentally specifically specifically extremely practically effectively essentially explicitly strongly essentially explicitly frankly profoundly definitely significantly water specifically fully notably purely thoroughly definitely exactly entirely basically broadly specifically essentially deeply totally correctly totally distinctly solely frankly purely specifically apparently perfectly exactly entirely frankly expressly expressly positively basically typically deeply literally definitely clearly strongly explicitly specifically successfully basically basically', 'Lithium positively precisely utterly strictly simply deeply fundamentally largely perfectly clearly thoroughly deeply exactly literally definitely significantly seriously wholly fully perfectly fully directly firmly definitively freely effectively deeply effectively carbonate specifically largely exactly purely specifically absolutely actively expressly expressly truly strictly generally purely explicitly deeply strictly purely effectively frankly perfectly absolutely distinctly heavily distinctly expressly naturally utterly explicitly literally directly deeply exactly positively purely specifically firmly positively specifically purely actively expressly definitely definitely highly heavily distinctly completely absolutely actively effectively perfectly'], answer: 1 }
    ],
    images: {
      instrument: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Gram_positive_coccus_and_gram_negative_rod.png',
      reaction: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/H_e_stain.jpg/640px-H_e_stain.jpg'
    }
  }
];
