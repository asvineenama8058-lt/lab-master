/**
 * Resolves static, correct, and matching images for Lab Master tests.
 * This prevents Wikipedia/Automation artifacts from displaying random images.
 */

export const testImageMap = {
  // Hematology
  "estimation of hemoglobin (sahli's method)": "/images/sahli-instrument.jpg",
  "estimation of hemoglobin (cyanmethemoglobin method)": "/images/spectrophotometer.jpg",
  "total leukocyte count (tlc or wbc count)": "/images/neubauer-chamber.jpg",
  "differential leukocyte count (dlc)": "/images/dlc-smear.jpg",
  "total rbc count": "/images/rbc-count.jpg",
  "platelet count (direct manual method)": "/images/platelet-count.jpg",
  "reticulocyte count": "/images/reticulocytes.jpg",
  "erythrocyte sedimentation rate (westergren method)": "/images/esr-westergren.jpg",
  "erythrocyte sedimentation rate (wintrobe method)": "/images/esr-wintrobe.jpg",
  "packed cell volume (pcv / hematocrit)": "/images/pcv-centrifuge.jpg",
  "bleeding time (duke's method)": "/images/bleeding-time.jpg",
  "clotting time (capillary tube method)": "/images/clotting-time.jpg",
  "prothrombin time (pt & inr)": "/images/prothrombin-time.jpg",
  "red blood cell indices (mcv, mch, mchc)": "/images/rbc-indices.jpg",
  "sickling test (dithionite tube test)": "/images/sickling-test.jpg",

  // Microbiology
  "gram stain": "/images/gram-stain.jpg",
  "acid fast stain (ziehl-neelsen)": "/images/afb-stain.jpg",
  "culture media preparation": "/images/culture-media.jpg",
  "antibiotic susceptibility testing (kirby-bauer)": "/images/kirby-bauer.jpg",
  "hanging drop preparation": "/images/hanging-drop.jpg",

  // Biochemistry
  "blood glucose estimation": "/images/glucose-test.jpg",
  "serum urea estimation": "/images/urea-test.jpg",
  "serum creatinine estimation": "/images/creatinine-test.jpg",
  "serum bilirubin estimation": "/images/bilirubin-test.jpg",
  "lipid profile": "/images/lipid-profile.jpg",
  "diabetes": "/images/glucose-test.jpg"
};

export const getTestImageContext = (testName) => {
  if (!testName) return { primary: "/images/default-lab.jpg" };

  const normalized = testName.trim().toLowerCase();
  
  // Exact lookup
  if (testImageMap[normalized]) {
    return {
      primary: testImageMap[normalized]
    };
  }

  // Partial broad matches if exact fails
  if (normalized.includes("gram stain")) return { primary: "/images/gram-stain.jpg" };
  if (normalized.includes("esr") || normalized.includes("sedimentation")) return { primary: "/images/esr-westergren.jpg" };
  if (normalized.includes("glucose") || normalized.includes("diabetes")) return { primary: "/images/glucose-test.jpg" };
  if (normalized.includes("hemoglobin") || normalized.includes("hb")) return { primary: "/images/sahli-instrument.jpg" };
  if (normalized.includes("urine")) return { primary: "/images/urinalysis.jpg" };

  return { primary: "/images/default-lab.jpg" };
};
