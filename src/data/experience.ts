import { TimelineItem } from '../types'

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'education-1',
    date: '2019',
    dateEnd: '2023',
    title: 'Bachelor of Technology in Computer Science',
    organization: 'Indian Institute of Technology (IIT)',
    description: 'Graduated with honors in Computer Science & Engineering, focusing on AI/ML and system design.',
    type: 'education',
    details: [
      'GPA: 8.2/10',
      'Relevant coursework: Machine Learning, Deep Learning, Distributed Systems, Algorithms',
      'Thesis: Advanced NLP techniques for low-resource languages',
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
    date: '2021',
    dateEnd: '2022',
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
  {
    id: 'achievement-1',
    date: '2024',
    title: 'Open Source Contributor',
    organization: 'Community',
    description: 'Contributed to major open-source projects with 500+ stars.',
    type: 'achievement',
    details: [
      '200+ merged pull requests across projects',
      'Maintained 3 libraries with 10K+ weekly downloads',
    ],
  },
  {
    id: 'achievement-2',
    date: '2023',
    title: 'Hackathon Winner',
    organization: 'Multiple Events',
    description: 'Won several prestigious hackathons and competitions.',
    type: 'achievement',
    details: [
      '1st place - AI Innovation Hackathon 2023',
      '1st place - Web3 Developer Challenge 2023',
      'Top 10 - Global AI Competition 2023',
    ],
  },
]

export const ACHIEVEMENTS = TIMELINE_ITEMS.filter((item) => item.type === 'achievement')
export const EXPERIENCE = TIMELINE_ITEMS.filter((item) => item.type === 'experience')
export const EDUCATION = TIMELINE_ITEMS.filter((item) => item.type === 'education')
