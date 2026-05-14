import { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 'multitask-nlp',
    title: 'Multitask NLP Platform',
    category: 'AI/ML',
    description: 'Built a production-grade multitask NLP platform capable of handling text classification, sentiment analysis, summarization, and semantic search through a unified API architecture.',
    longDescription: 'Highlights:\n• Optimized inference using ONNX\n• MLflow model lifecycle tracking\n• Dockerized deployment pipeline\n• FastAPI backend handling scalable requests\n• Semantic search integration',
    image: '/projects/nlp-platform.svg',
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'ONNX', 'MLflow', 'Docker', 'PostgreSQL'],
    links: {
      github: 'https://github.com/Manirider/MULTITASK-NLP-API',
    },
    metrics: [
      { label: 'Latency', value: '-40%' },
      { label: 'Daily Req', value: '5K+' },
      { label: 'Deploy', value: 'Docker' },
    ],
    featured: true,
  },
  {
    id: 'vulnhunter',
    title: 'VulnHunter — AI Smart Contract Security',
    category: 'Security',
    description: 'Designed an AI-powered smart contract vulnerability analysis platform capable of detecting Solidity security flaws using LLM-assisted static analysis workflows.',
    longDescription: 'Highlights:\n• Smart contract vulnerability scanning\n• Solidity analysis engine\n• LLM-based risk explanations\n• Web3 security visualization dashboard\n• Automated audit reporting',
    image: '/projects/vulnhunter.svg',
    technologies: ['Python', 'Solidity', 'Web3', 'LLMs', 'FastAPI', 'React'],
    links: {
      github: 'https://github.com/Manirider/vulnhunter',
    },
    metrics: [
      { label: 'Detection', value: 'Auto' },
      { label: 'Effort', value: 'Reduced' },
      { label: 'Dashboard', value: 'Live' },
    ],
    featured: true,
  },
  {
    id: 'mlops-pipeline',
    title: 'End-to-End MLOps Pipeline',
    category: 'MLOps',
    description: 'Developed a complete end-to-end MLOps pipeline covering model training, tracking, versioning, deployment, monitoring, and reproducibility.',
    longDescription: 'Highlights:\n• MLflow experiment tracking\n• Docker-based deployments\n• CI/CD-ready workflow\n• FastAPI inference serving\n• Automated model lifecycle management',
    image: '/projects/mlops.svg',
    technologies: ['Python', 'MLflow', 'Docker', 'FastAPI', 'CI/CD'],
    links: {
      github: 'https://github.com/Manirider/enterprise-mlops-pipeline',
    },
    metrics: [
      { label: 'Consistency', value: 'High' },
      { label: 'Workflows', value: 'Auto' },
      { label: 'Infra', value: 'Prod' },
    ],
    featured: true,
  },
  {
    id: 'dao-governance',
    title: 'DAO Governance Platform',
    category: 'Blockchain',
    description: 'Built a decentralized governance platform enabling token-based proposal voting and DAO treasury management through smart contracts.',
    longDescription: 'Highlights:\n• ERC-20 governance integration\n• Proposal voting system\n• Smart contract automation\n• Wallet connectivity\n• DAO analytics dashboard',
    image: '/projects/dao.svg',
    technologies: ['Solidity', 'Hardhat', 'Next.js', 'Web3.js', 'Tailwind'],
    links: {
      github: 'https://github.com/Manirider/crypto-ventures-dao-gov-system',
    },
    metrics: [
      { label: 'Architecture', value: 'Secure' },
      { label: 'Voting', value: 'Real-time' },
      { label: 'Control', value: 'Treasury' },
    ],
    featured: true,
  },
  {
    id: 'omnichain-bridge',
    title: 'Omnichain Asset Bridge',
    category: 'Blockchain',
    description: 'Created an omnichain asset transfer prototype enabling cross-chain communication and asset movement simulation across blockchain ecosystems.',
    longDescription: 'Highlights:\n• Cross-chain architecture concepts\n• Web3 integrations\n• Transaction flow simulation\n• Blockchain interoperability concepts',
    image: '/projects/bridge.svg',
    technologies: ['JavaScript', 'SQLite', 'Web3'],
    links: {
      github: 'https://github.com/Manirider',
    },
    metrics: [
      { label: 'Transfers', value: 'Cross-chain' },
      { label: 'Pipeline', value: 'Simulated' },
    ],
    featured: true,
  },
  {
    id: 'enterprise-automation',
    title: 'Enterprise Automation System',
    category: 'Automation',
    description: 'Developed enterprise workflow automation systems using SharePoint and Power Automate to streamline approvals, notifications, and operational processes.',
    longDescription: 'Highlights:\n• Leave approval automation\n• Email notification workflows\n• Dashboard integration\n• Attendance and student workflow integration',
    image: '/projects/ai-assistant.svg',
    technologies: ['SharePoint', 'Power Automate', 'Excel'],
    links: {
      github: 'https://github.com/Manirider',
    },
    metrics: [
      { label: 'Effort', value: '-60%' },
      { label: 'Tracking', value: 'Auto' },
    ],
    featured: true,
  },
]

export const PROJECT_CATEGORIES = [
  'All',
  'AI/ML',
  'Blockchain',
  'MLOps',
  'Security',
  'Automation'
]
