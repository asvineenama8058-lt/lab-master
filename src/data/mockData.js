import { hematologyData } from './hematology.js';
import { microbiologyData } from './microbiology.js';
import { biochemistryData } from './biochemistry.js';
import { bloodBankData } from './bloodBank.js';
import { histopathologyData } from './histopathology.js';

import { immunologyData } from './immunology.js';
import { serologyData } from './serology.js';
import { clinicalPathologyData } from './clinicalPathology.js';
import { urineExamData } from './urineExam.js';
import { instrumentationData } from './instrumentation.js';

export const subjectsList = [
  { id: 'hem', title: 'Hematology', icon: 'droplet', color: '#EF4444' }, // Red
  { id: 'bio', title: 'Clinical Biochemistry', icon: 'test-tube', color: '#EAB308' }, // Yellow
  { id: 'mic', title: 'Microbiology', icon: 'microscope', color: '#10B981' }, // Green
  { id: 'his', title: 'Histopathology', icon: 'layers', color: '#8B5CF6' }, // Purple
  { id: 'imm', title: 'Immunology', icon: 'shield', color: '#3B82F6' }, // Blue
  { id: 'bnk', title: 'Blood Bank', icon: 'heart', color: '#F43F5E' }, // Rose
  { id: 'urn', title: 'Urine Examination', icon: 'beaker', color: '#F59E0B' }, // Amber
  { id: 'cpa', title: 'Clinical Pathology', icon: 'activity', color: '#06B6D4' }, // Cyan
  { id: 'ins', title: 'Instrumentation', icon: 'settings', color: '#64748B' }, // Slate
  { id: 'ser', title: 'Serology', icon: 'flask-conical', color: '#EC4899' }, // Pink
];

export const practicalsData = {
  'hem': hematologyData,
  'bio': biochemistryData,
  'mic': microbiologyData,
  'his': histopathologyData,
  'bnk': bloodBankData,
  'imm': immunologyData,
  'ser': serologyData,
  'cpa': clinicalPathologyData,
  'urn': urineExamData,
  'ins': instrumentationData,
};

// Populate empty arrays for missing subjects to avoid crash
subjectsList.forEach(subj => {
  if (!practicalsData[subj.id]) {
    practicalsData[subj.id] = [];
  }
});

export const dailyTip = {
  title: 'Exam Tip: Calibration',
  content: 'Always remember to zero the spectrophotometer using a reagent blank before taking the test reading to negate any absorbance by the reagent itself.'
};
