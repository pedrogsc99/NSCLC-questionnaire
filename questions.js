const questions = [
  {
    type: 1,
    difficulty: "easy",
    question: "Which stage of NSCLC does not typically require a detailed pretreatment pathological diagnosis?",
    options: [
      "Stage I",
      "Stage II",
      "Stage III",
      "Stage IV",
      "Stage 0"
    ],
    correct_answer: "Stage I"
  },
  {
    type: 3,
    difficulty: "medium",
    question: "True or False: Screening with LDCT should only be performed in clinical trial settings.",
    correct_answer: "False"
  },
  {
    type: 2,
    difficulty: "easy",
    question: "Which age group is typically recommended for lung cancer screening using LDCT?",
    correct_answer: "55-74 years"
  },
  {
    type: 1,
    difficulty: "hard",
    question: "Which of the following mutations is not a common driver mutation in NSCLC?",
    options: [
      "EGFR",
      "ALK",
      "KRAS",
      "BRAF",
      "BRCA1"
    ],
    correct_answer: "BRCA1"
  },
  {
    type: 3,
    difficulty: "easy",
    question: "True or False: Chest X-ray is the preferred method for lung cancer screening.",
    correct_answer: "False"
  },
  {
    type: 2,
    difficulty: "medium",
    question: "What is the recommended adjuvant treatment for resected stage II-III NSCLC?",
    correct_answer: "Platinum-based chemotherapy"
  },
  {
    type: 1,
    difficulty: "medium",
    question: "Which of the following is not a recommended method for screening lung cancer?",
    options: [
      "LDCT",
      "Chest X-ray",
      "Sputum analysis",
      "PET scan",
      "Biomarker analysis"
    ],
    correct_answer: "PET scan"
  },
  {
    type: 4,
    difficulty: "medium",
    question: "A patient with stage II NSCLC is considered for surgery. What factors should be evaluated before proceeding?",
    steps: [
      "Confirm staging with imaging and biopsy.",
      "Assess patient's cardiopulmonary function.",
      "Evaluate potential benefits of adjuvant chemotherapy post-surgery."
    ],
    correct_answer: [
      "Confirm staging",
      "Assess cardiopulmonary function",
      "Consider adjuvant chemotherapy"
    ]
  },
  {
    type: 2,
    difficulty: "hard",
    question: "What is the role of consolidation durvalumab in patients with stage III NSCLC after chemoradiotherapy?",
    correct_answer: "Improves progression-free survival"
  },
  {
    type: 1,
    difficulty: "easy",
    question: "What is the primary treatment for early-stage NSCLC?",
    options: [
      "Chemotherapy",
      "Radiotherapy",
      "Surgery",
      "Targeted therapy",
      "Immunotherapy"
    ],
    correct_answer: "Surgery"
  },
  {
    type: 3,
    difficulty: "medium",
    question: "True or False: PD-L1 expression is used to guide immunotherapy in NSCLC.",
    correct_answer: "True"
  },
  {
    type: 2,
    difficulty: "easy",
    question: "Which screening method is currently recommended to reduce lung cancer-related mortality?",
    correct_answer: "Low-dose computed tomography (LDCT)"
  },
  {
    type: 1,
    difficulty: "medium",
    question: "Which treatment is typically recommended for patients with locally advanced NSCLC?",
    options: [
      "Surgery",
      "Chemotherapy",
      "Radiotherapy",
      "Concurrent chemoradiotherapy",
      "Immunotherapy"
    ],
    correct_answer: "Concurrent chemoradiotherapy"
  },
  {
    type: 3,
    difficulty: "hard",
    question: "True or False: EGFR TKI resistance can develop due to T790M mutation.",
    correct_answer: "True"
  },
  {
    type: 2,
    difficulty: "medium",
    question: "What is the survival impact of LDCT screening according to the NLST trial?",
    correct_answer: "20% reduction in lung cancer-related death"
  },
  {
    type: 4,
    difficulty: "easy",
    question: "A 60-year-old former smoker with a 30 pack-year history presents for lung cancer screening. What screening test should be recommended according to current guidelines?",
    steps: [
      "Determine if the patient meets age and smoking history criteria for screening.",
      "Recommend low-dose computed tomography (LDCT) for screening.",
      "Discuss potential risks and benefits of LDCT screening."
    ],
    correct_answer: [
      "Patient meets criteria",
      "Recommend LDCT",
      "Discuss risks and benefits"
    ]
  },
  {
    type: 3,
    difficulty: "easy",
    question: "True or False: NSCLC is more common than small-cell lung cancer (SCLC).",
    correct_answer: "True"
  },
  {
    type: 2,
    difficulty: "hard",
    question: "What is the recommended treatment for patients with ALK-positive NSCLC?",
    correct_answer: "ALK inhibitor (e.g., alectinib)"
  },
  {
    type: 1,
    difficulty: "easy",
    question: "Which imaging modality is preferred for staging NSCLC?",
    options: [
      "MRI",
      "CT scan",
      "PET scan",
      "Ultrasound",
      "Bone scan"
    ],
    correct_answer: "PET scan"
  },
  {
    type: 3,
    difficulty: "medium",
    question: "True or False: Adjuvant chemotherapy is beneficial in all histological subtypes of NSCLC.",
    correct_answer: "False"
  },
  {
    type: 1,
    difficulty: "hard",
    question: "Which of the following is an uncommon side effect of chemoradiotherapy in NSCLC treatment?",
    options: [
      "Esophagitis",
      "Pneumonitis",
      "Pulmonary fibrosis",
      "Pericarditis",
      "Renal failure"
    ],
    correct_answer: "Renal failure"
  },
  {
    type: 2,
    difficulty: "medium",
    question: "Which biomarker is commonly tested in patients with NSCLC to guide targeted therapy?",
    correct_answer: "EGFR mutation"
  },
  {
    type: 3,
    difficulty: "easy",
    question: "True or False: Smoking cessation is a key part of lung cancer prevention strategies.",
    correct_answer: "True"
  },
  {
    type: 4,
    difficulty: "hard",
    question: "A patient with ALK-positive NSCLC progresses on alectinib. Describe the treatment options and decision-making process.",
    steps: [
      "Confirm progression with imaging.",
      "Consider a second-generation ALK inhibitor.",
      "Evaluate for clinical trial eligibility."
    ],
    correct_answer: [
      "Confirm progression",
      "Second-generation ALK inhibitor",
      "Evaluate for trials"
    ]
  },
  {
    type: 2,
    difficulty: "easy",
    question: "Which stage of NSCLC typically involves nodal involvement but no distant metastasis?",
    correct_answer: "Stage III"
  },
  {
    type: 1,
    difficulty: "medium",
    question: "Which of the following is a risk factor for developing NSCLC?",
    options: [
      "Smoking",
      "Asbestos exposure",
      "Radon exposure",
      "Genetic predisposition",
      "All of the above"
    ],
    correct_answer: "All of the above"
  },
  {
    type: 3,
    difficulty: "medium",
    question: "True or False: Stage III NSCLC can be treated with surgery alone.",
    correct_answer: "False"
  },
  {
    type: 2,
    difficulty: "hard",
    question: "What is the significance of high PD-L1 expression in advanced NSCLC?",
    correct_answer: "Predicts response to immunotherapy"
  },
  {
    type: 4,
    difficulty: "medium",
    question: "A patient is found to have stage IIIA NSCLC. Describe the decision-making process regarding the use of concurrent chemoradiotherapy.",
    steps: [
      "Confirm staging with imaging and pathology.",
      "Evaluate patient's ability to tolerate concurrent treatment.",
      "Plan for concurrent chemoradiotherapy as per guidelines."
    ],
    correct_answer: [
      "Confirm staging",
      "Assess tolerance",
      "Plan chemoradiotherapy"
    ]
  },
  {
    type: 2,
    difficulty: "medium",
    question: "What is a common histological subtype of adenocarcinoma with a lower tendency for metastasis?",
    correct_answer: "Lepidic predominant adenocarcinoma"
  },
  {
    type: 1,
    difficulty: "easy",
    question: "What is the most common diagnostic test for non-small-cell lung cancer (NSCLC)?",
    options: [
      "Chest X-ray",
      "Computed Tomography (CT)",
      "Magnetic Resonance Imaging (MRI)",
      "Fibreoptic bronchoscopy",
      "PET scan"
    ],
    correct_answer: "Fibreoptic bronchoscopy"
  },
  {
    type: 3,
    difficulty: "hard",
    question: "True or False: Consolidation durvalumab is recommended for all patients with stage III NSCLC post chemoradiotherapy.",
    correct_answer: "False"
  },
  {
    type: 2,
    difficulty: "easy",
    question: "Which histological subtype is the most common in NSCLC?",
    correct_answer: "Adenocarcinoma"
  },
  {
    type: 4,
    difficulty: "easy",
    question: "A patient diagnosed with stage I NSCLC is being considered for surgery. What is the recommended next step in treatment planning?",
    steps: [
      "Confirm the stage of the cancer with appropriate imaging.",
      "Consider the patient's overall health and surgical fitness.",
      "Plan for surgical resection as the primary treatment."
    ],
    correct_answer: [
      "Confirm cancer stage",
      "Assess health and fitness",
      "Plan for surgery"
    ]
  },
  {
    type: 1,
    difficulty: "medium",
    question: "In a patient with early-stage NSCLC, which molecular analysis is typically performed on EBUS-guided aspirations?",
    options: [
      "EGFR mutation analysis",
      "KRAS mutation analysis",
      "ALK rearrangement",
      "PD-L1 expression",
      "BRAF mutation analysis"
    ],
    correct_answer: "EGFR mutation analysis"
  },
  {
    type: 3,
    difficulty: "easy",
    question: "True or False: Surgery is the treatment of choice for all stages of NSCLC.",
    correct_answer: "False"
  },
  {
    type: 2,
    difficulty: "hard",
    question: "In EGFR-mutant NSCLC, what is the preferred first-line treatment?",
    correct_answer: "EGFR tyrosine kinase inhibitor (TKI)"
  },
  {
    type: 1,
    difficulty: "hard",
    question: "In the context of adjuvant chemotherapy for NSCLC, which platinum-based regimen is most commonly used?",
    options: [
      "Cisplatin/pemetrexed",
      "Cisplatin/gemcitabine",
      "Carboplatin/paclitaxel",
      "Cisplatin/vinorelbine",
      "Cisplatin/docetaxel"
    ],
    correct_answer: "Cisplatin/vinorelbine"
  },
  {
    type: 3,
    difficulty: "hard",
    question: "True or False: Surgical resection is the treatment of choice for all patients with ALK-positive NSCLC.",
    correct_answer: "False"
  },
  {
    type: 4,
    difficulty: "hard",
    question: "A patient with EGFR-mutant NSCLC is found to have disease progression on first-line therapy. Outline the decision-making process for selecting the next line of treatment.",
    steps: [
      "Confirm progression with imaging.",
      "Test for T790M mutation.",
      "Consider osimertinib if T790M positive."
    ],
    correct_answer: [
      "Confirm progression",
      "Test for T790M",
      "Consider osimertinib"
    ]
  }
];

const scoring = {
  correct_answer: 1,
  unanswered: 0,
  failed_type_1_or_4: -0.25,
  failed_type_2: -0.33,
  failed_type_3: -0.5
};

const pass_mark = 28;
