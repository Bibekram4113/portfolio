export type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  location?: string;
  description: string[];
  tags?: string[];
  kind: 'experience' | 'education' | 'milestone';
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  status?: string;
  featured?: boolean;
  link?: string;
  highlight?: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  doi: string;
  url: string;
};

export type ResearchInterest = {
  title: string;
  description: string;
  icon: string;
};

export type Achievement = {
  title: string;
  detail: string;
};

const publicBasePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export const profile = {
  name: 'Bibek Ram',
  role: 'Biomedical Engineering Researcher',
  focus:
    'Intelligent Medical Devices · Biomedical Signal Processing · Multimodal Sensing · Embedded & Edge AI',
  headline:
    'I am a Biomedical Engineering researcher working at the intersection of biomedical sensing, physiological signal processing, artificial intelligence, embedded systems, and medical-device development. My research interests focus on translating biomedical data and multimodal sensing into intelligent, deployable, and clinically relevant healthcare technologies.',
  positioning:
    'From biomedical data and algorithms to embedded systems, prototypes, validation, and translational medical technologies.',
  about: [
    'I am a B.Tech. Biomedical Engineering graduate with First Class with Distinction from SRM Institute of Science and Technology, working across biomedical signal processing, medical imaging, multimodal biomedical systems, and embedded/edge AI. My work spans the full research cycle — data acquisition, preprocessing, feature extraction, multimodal integration, computational model development, system prototyping, and experimental validation.',
    'I approach problems end-to-end: from literature and clinical context, through signal and image processing, to embedded implementation and performance evaluation. This work has produced two peer-reviewed IEEE conference publications — a multimodal emotion-recognition study (IEEE ICCSP 2025) and a universal plug-and-play edge-AI platform for privacy-preserving multimodal healthcare inference (IEEE ICETICS 2026).',
    'Alongside academic research, I work in medical-device R&D at Invitronics Medtech on patient-monitoring systems, and I completed a regulatory and technical internship at the Bureau of Indian Standards (BIS), contributing to the pre-standardization of dialyzer reprocessing machines. This combination — academic biomedical research plus standards-aware device engineering — shapes my translational research interests in patient monitoring, neuroengineering, and intelligent medical technologies.',
  ],
  location: 'Chennai, India',
  email: 'bibekram1212@gmail.com',
  phone: '+91 99391 37481',
  avatar: `${publicBasePath}/portrait.png`,
  cvUrl: `${publicBasePath}/Bibek-Ram-CV.pdf`,
  statusLine: 'Research enthusiast in biomedical engineering',

  social: {
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    researchgate: 'https://www.researchgate.net/profile/Bibek-Ram',
  },

  stats: [
    { value: 2, suffix: '', label: 'IEEE Publications' },
    { value: 7, suffix: '+', label: 'Research Projects' },
    { value: 12, suffix: '+', label: 'Certifications' },
  ] as Stat[],

  researchInterests: [
    {
      title: 'Biomedical Signal Processing',
      description:
        'Acquisition, preprocessing, and feature extraction from physiological signals such as ECG and EEG — turning raw biosignals into clinically meaningful information.',
      icon: 'waves',
    },
    {
      title: 'Multimodal Biomedical Sensing',
      description:
        'Combining physiological, imaging, and clinical data streams so that no single modality has to carry the full diagnostic picture.',
      icon: 'layers',
    },
    {
      title: 'Intelligent Medical Devices',
      description:
        'Integrating sensing, embedded intelligence, and control into medical hardware designed for reliability, safety, and real clinical workflows.',
      icon: 'cpu',
    },
    {
      title: 'Embedded & Edge AI for Healthcare',
      description:
        'Deploying healthcare AI models directly on embedded hardware for low-latency, privacy-preserving inference at the point of care.',
      icon: 'zap',
    },
    {
      title: 'Medical Imaging & AI',
      description:
        'Image preprocessing and computer vision applied to medical imagery for screening, classification, and diagnostic support.',
      icon: 'scan',
    },
    {
      title: 'Embedded Biomedical Systems',
      description:
        'Real-time firmware, serial communication, and hardware–software integration for dependable biomedical devices.',
      icon: 'circuit',
    },
    {
      title: 'Neuroengineering & Rehabilitation',
      description:
        'Wearable sensing and closed-loop feedback systems for neurological monitoring and rehabilitation technologies.',
      icon: 'hand',
    },
    {
      title: 'Translational Healthcare Technology',
      description:
        'Moving research from data and algorithms to validated prototypes and clinically relevant systems, aligned with regulatory expectations.',
      icon: 'repeat',
    },
  ] as ResearchInterest[],

  publications: [
    {
      title:
        'A Universal Plug-and-Play Edge-AI Platform for Privacy-Preserving Multimodal Healthcare Inference',
      venue:
        '2026 International Conference on Emerging Trends in Information, Communication & Systems (ICETICS)',
      year: '2026',
      doi: '10.1109/ICETICS69505.2026.11651080',
      url: 'https://doi.org/10.1109/ICETICS69505.2026.11651080',
    },
    {
      title:
        'Multimodal Emotion Recognition via Correlation of EEG, Thermal, and Digital Image Data',
      venue:
        'IEEE International Conference on Communication, Signal Processing and Computing (ICCSP)',
      year: '2025',
      doi: '10.1109/ICCSP64183.2025.11088814',
      url: 'https://doi.org/10.1109/ICCSP64183.2025.11088814',
    },
  ] as Publication[],

  researchExperience: {
    role: 'Research Assistant / Student Researcher',
    org: 'Department of Biomedical Engineering',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: '2022 – 2026',
    activities: [
      'Medical imaging analysis and preprocessing for research datasets',
      'Biomedical signal acquisition, preprocessing, and feature extraction',
      'Multimodal data integration and cross-modal correlation analysis',
      'Computational model development and performance evaluation',
      'System prototyping and experimental validation',
    ],
    streams: [
      {
        label: 'Research Stream A',
        title: 'Multimodal Emotion Recognition',
        points: [
          'Built a multimodal classification pipeline combining EEG, thermal imaging, and digital facial imagery.',
          'Investigated cross-modal relationships and correlation structure across physiological and imaging modalities.',
          'Handled data acquisition, preprocessing, and feature extraction across heterogeneous modalities.',
          'Published at IEEE ICCSP 2025 — DOI: 10.1109/ICCSP64183.2025.11088814.',
        ],
        tags: ['EEG', 'Thermal Imaging', 'Facial Imagery', 'Cross-Modal Correlation'],
      },
      {
        label: 'Research Stream B',
        title: 'Universal Plug-and-Play Edge-AI Healthcare Platform',
        points: [
          'Architected a modular platform for heterogeneous healthcare AI models — covering input handling, preprocessing, model management, inference, and post-processing.',
          'Deployed locally on embedded hardware (Raspberry Pi 4) for privacy-preserving, low-latency healthcare inference.',
          'Recognized with the Best Biomedical Engineering Project Award at BioEdge Expo 2026.',
          'Published at IEEE ICETICS 2026 — DOI: 10.1109/ICETICS69505.2026.11651080.',
        ],
        tags: ['Edge AI', 'Raspberry Pi 4', 'TensorFlow Lite', 'Privacy-Preserving Inference'],
      },
    ],
  },

  approach: [
    'Problem Definition',
    'Literature Review',
    'Data Acquisition',
    'Signal / Image Processing',
    'Feature Extraction',
    'Multimodal Integration',
    'Model Development',
    'Prototype / Embedded Implementation',
    'Experimental Validation',
    'Performance Evaluation',
    'Translational Deployment',
  ],

  education: [
    {
      period: '2022 – 2026',
      title: 'B.Tech. in Biomedical Engineering',
      org: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      description: [
          'First Class with Distinction',
        'Performance-Based Scholarship, Academic Year 2024–2025',
      ],
      kind: 'education' as const,
    },
    {
      period: '2019 – 2021',
      title: 'High School (+2 Science)',
      org: "St. Xavier's College",
      location: 'Kathmandu, Nepal',
      description: [],
      kind: 'education' as const,
    },
  ],

  experience: [
    {
      period: '2026 – Present',
      title: 'Biomedical R&D Engineer',
      org: 'Invitronics Medtech Pvt. Ltd.',
      location: 'Pune, India',
      description: [
        'Translational medical-device R&D on patient-monitoring systems — requirements-driven development across embedded firmware and device communication.',
        'Biomedical signal processing, system integration, and debugging through to system-level verification and risk management.',
        'Working within a regulatory-oriented engineering framework aligned with ISO 14971, IEC 60601, IEC 62304, ISO 13485, and the CDSCO Medical Device Rules.',
      ],
      tags: ['Patient Monitoring', 'Embedded Firmware', 'Signal Processing', 'ISO 14971', 'IEC 60601', 'IEC 62304', 'ISO 13485', 'CDSCO MDR'],
      kind: 'experience' as const,
    },
    {
      period: 'Jun – Jul 2025',
      title: 'Regulatory and Technical Intern',
      org: 'Bureau of Indian Standards (BIS)',
      location: 'Medical Equipment & Hospital Planning Dept., New Delhi',
      description: [
        'Conducted a systematic literature review and comparative technical evaluation of dialyzer reprocessing machines — establishing baseline performance metrics, safety analysis, and material/structural assessment.',
        'Assessed clinical workflows through hospital visits and stakeholder consultation with industry experts (GK Healthcare, GrayFalcon, Atlantic Biomedical), connecting research evidence to technical requirements, risk, and clinical practice.',
        'Performed technical benchmarking, hazard identification, and quality verification; contributed regulatory technical writing to Indian Standards (IS) drafts aligned with ISO 13485, ISO 14971, and CDSCO frameworks.',
      ],
      tags: ['ISO 13485', 'ISO 14971', 'CDSCO', 'Standardization', 'Risk Analysis', 'Technical Writing'],
      kind: 'experience' as const,
    },
    {
      period: '2025',
      title: 'Industrial Exposure',
      org: 'Panacea Medical Technologies Pvt. Ltd.',
      location: 'Bengaluru, India',
      description: [
        'Learned medical device manufacturing processes, quality control, and regulatory frameworks for complex electromechanical medical systems.',
      ],
      tags: ['Manufacturing', 'Quality Control', 'Regulatory'],
      kind: 'experience' as const,
    },
  ],

  achievements: [
    {
      title: 'Best Biomedical Engineering Project',
      detail: 'BioEdge Expo 2026 — Multimodal edge-AI healthcare platform',
    },
    {
      title: 'IEEE Research Presenter',
      detail: 'ICCSP 2025 — presented peer-reviewed multimodal emotion-recognition research',
    },
    {
      title: 'Two Peer-Reviewed IEEE Conference Publications',
      detail: 'IEEE ICCSP 2025 · IEEE ICETICS 2026',
    },
    {
      title: 'Performance-Based Academic Scholarship',
      detail: 'SRM Institute of Science and Technology',
    },
    {
      title: 'International Student Ambassador',
      detail: 'SRMIST International Relations',
    },
    {
      title: 'Student Ambassador',
      detail: 'TekMedica Club, SRMIST — mentored peers in biomedical device design',
    },
  ] as Achievement[],

  skills: [
    {
      category: 'Biomedical Engineering',
      items: ['Patient Monitoring', 'ECG', 'EEG', 'Biomedical Instrumentation', 'Biosensors', 'Physiological Signal Acquisition', 'Waveform Analysis'],
    },
    {
      category: 'Signal & Image Processing',
      items: ['MATLAB', 'Simulink', 'Biomedical Signal Processing', 'PSD Analysis', 'Medical Imaging', 'Image Preprocessing', 'Computer Vision', 'Acoustic Analysis', 'Librosa'],
    },
    {
      category: 'AI / Machine Learning',
      items: ['Python', 'TensorFlow', 'TensorFlow Lite', 'scikit-learn', 'OpenCV', 'Multimodal Learning', 'Feature Extraction', 'Classification', 'Edge Inference', 'Model Deployment'],
    },
    {
      category: 'Embedded Systems',
      items: ['C', 'Embedded Systems', 'ARM Cortex-M Concepts', 'UART / Serial Communication', 'Frame Extraction & Validation', 'Circular / Ring / Double Buffering', 'DMA', 'Interrupts', 'Packet / Command Dispatch', 'State Machines', 'Watchdogs', 'Embedded Debugging', 'TouchGFX'],
    },
    {
      category: 'Hardware / Prototyping',
      items: ['Raspberry Pi 4', 'Arduino', 'PCB Integration', 'Sensor Integration', 'IMU', 'Flex Sensors', 'Hardware–Software Integration', 'SolidWorks', 'AutoCAD', '3D / Medical Segmentation Workflows'],
    },
    {
      category: 'Medical Device / Regulatory',
      items: ['ISO 13485', 'ISO 14971', 'IEC 60601', 'IEC 62304', 'CDSCO MDR 2017', 'Risk Assessment', 'Technical Documentation', 'Medical-Device Standardization'],
    },
    {
      category: 'Research Tools',
      items: ['Git / GitHub', 'Jupyter Notebook', 'Google Colab', 'Flask'],
    },
  ],

  projects: [
    {
      title: 'Universal Plug-and-Play Edge-AI Healthcare Platform',
      description:
        'A modular edge-AI platform that runs heterogeneous healthcare AI models locally on embedded hardware — covering input handling, preprocessing, model management, inference, and post-processing. Designed for privacy-preserving, low-latency healthcare inference at the point of care.',
      tech: ['Raspberry Pi 4', 'TensorFlow Lite', 'Flask'],
      icon: 'cpu',
      featured: true,
      status: 'IEEE Published',
      highlight: 'IEEE ICETICS 2026 · Best Project Award',
    },
    {
      title: 'Multimodal Emotion Recognition System',
      description:
        'Multimodal classification pipeline combining EEG, thermal imaging, and facial imagery — investigating cross-modal relationships between physiological and imaging data streams.',
      tech: ['EEG', 'Thermal Imaging', 'Facial Imagery'],
      icon: 'brain',
      status: 'IEEE Published',
      highlight: 'IEEE ICCSP 2025',
    },
    {
      title: 'Multimodal Tuberculosis Screening System',
      description:
        'Developing a multimodal screening pipeline that combines cough-sound acoustic analysis, chest X-ray classification, and structured clinical information — with potential edge deployment for low-resource healthcare settings.',
      tech: ['Cough Audio', 'Chest X-ray', 'Clinical Data', 'Librosa', 'OpenCV', 'Raspberry Pi'],
      icon: 'lungs',
      status: 'Developing',
      highlight: 'Ongoing Research',
    },
    {
      title: 'AI-Driven Closed-Loop Insulin Delivery System',
      description:
        'Modeled glucose–insulin dynamics and implemented PID-based closed-loop dosing logic in simulation — connecting computational physiology, control engineering, and medical-device design.',
      tech: ['MATLAB / Simulink', 'PID Control', 'Physiological Modelling'],
      icon: 'syringe',
      status: 'Simulation Study',
    },
    {
      title: 'Smart Anti-Tremor Glove for Neuro-Rehabilitation',
      description:
        'Wearable concept combining tremor sensing with ML-based classification and closed-loop vibrotactile feedback, with remote monitoring for neuro-rehabilitation.',
      tech: ['Flex Sensors', 'IMU', 'Machine Learning', 'Vibrotactile Feedback'],
      icon: 'hand',
      status: 'Prototype',
    },
    {
      title: 'IoT Smart Helmet for Rider Safety',
      description:
        'Crash detection, GPS tracking, vital sensing, air-quality monitoring, and cloud alerts driven by a custom PCB.',
      tech: ['Arduino', 'IoT', 'Sensors', 'PCB Design'],
      icon: 'helmet',
      status: 'Developed',
    },
    {
      title: 'Temperature-Controlled Cooling System',
      description:
        'Automatic fan-speed control using real-time temperature sensing with live OLED display feedback.',
      tech: ['Arduino Uno', 'DS18B20', 'MOSFET'],
      icon: 'thermometer',
      status: 'Developed',
    },
  ],

  certificationGroups: [
    {
      category: 'Biomedical AI / Machine Learning / Programming',
      items: [
        'Machine Learning A–Z — Udemy (2025)',
        'Machine Learning Using Python — NIELIT Calicut (2024)',
        'Python Programming — University of Michigan (2023)',
        'MATLAB Onramp — MathWorks (2023)',
        'Mobile App Development with Kotlin — Udemy (2025)',
      ],
    },
    {
      category: 'Neuroengineering / Neuroscience',
      items: ['Fundamentals of Neuroscience for Neuroimaging — Johns Hopkins (2024)'],
    },
    {
      category: 'Healthcare / Medical Devices / Regulatory',
      items: [
        'Master Medical Device Regulatory Affairs — Udemy (2026)',
        'Introduction to Healthcare — Stanford University (2024)',
        'AI in Healthcare — Great Learning (2023)',
      ],
    },
    {
      category: 'Nanotechnology / Sensors',
      items: ['Nanotechnology & Nanosensors — Technion (2023)'],
    },
  ],
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];






