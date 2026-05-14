import { TimelineItem } from '../types'

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'education-1',
    date: '2021',
    dateEnd: '2024',
    title: 'Diploma in computer Science engineering',
    organization: 'Godavari Institute of Engineering and Technology (GIET)',
    description: 'Graduated with honors in Computer Science & Engineering, focusing on Computers languages and system design.',
    type: 'education',
    details: [
      'GPA: 8.46/10',
      'Relevant coursework: C++,Java ,Python ,Compter Networking, C, Distributed Systems, Algorithms',
      'Thesis: Advanced new inventaive ideas',
    ],
  },
  {
    id: 'education-2',
    date: '2024',
    dateEnd: '2027',
    title: 'Bachelor of Technology in Artificial Intelligence and Machine Learning',
    organization: 'Aditya College of Engineering and Technology',
    description: 'Graduated with honors in AIML, focusing on Ai and ML Technology and system design.',
    type: 'education',
    details: [
      'GPA: 8.80/10',
      'Relevant coursework: Ai ,ML ,DL ,NLP ,Data Analytics ,Distributed Systems, Algorithms',
      'Thesis: Advanced new Technologies and inventaive ideas',
    ],
  },
  {
    id: 'exp-1',
    date: '2023',
    dateEnd: '2024',
    title: 'Senior AI/ML Engineer',
    organization: 'Tech Startup',
    description: 'Led development of ML infrastructure and deployed production-grade AI systems.',
    type: 'experience',
    details: [
      'Architected and deployed ML pipelines serving 10M+ requests daily',
      'Reduced model inference latency by 60% through optimization',
      'Led team of 3 engineers in building NLP platform',
      'Implemented A/B testing framework resulting in 15% performance improvement',
    ],
  },
  {
    id: 'exp-2',
    date: '2022',
    dateEnd: '2023',
    title: 'Full Stack Developer',
    organization: 'Web3 Company',
    description: 'Built decentralized applications and smart contracts for DeFi protocols.',
    type: 'experience',
    details: [
      'Developed smart contracts processing $50M+ in daily transactions',
      'Built React frontend serving 100K+ monthly active users',
      'Implemented cross-chain bridge with atomic swaps',
      'Achieved 99.9% uptime for production systems',
    ],
  },
  {
    id: 'exp-3',
    date: '2023',
    dateEnd: '2024',
    title: 'Machine Learning Intern',
    organization: 'AI Research Lab',
    description: 'Conducted research on transformer models and attention mechanisms.',
    type: 'experience',
    details: [
      'Published 2 peer-reviewed papers on NLP',
      'Implemented novel attention mechanisms in PyTorch',
      'Achieved state-of-the-art results on multiple benchmarks',
    ],
  },

]

export const ACHIEVEMENTS = TIMELINE_ITEMS.filter((item) => item.type === 'achievement')
export const EXPERIENCE = TIMELINE_ITEMS.filter((item) => item.type === 'experience')
export const EDUCATION = TIMELINE_ITEMS.filter((item) => item.type === 'education')
