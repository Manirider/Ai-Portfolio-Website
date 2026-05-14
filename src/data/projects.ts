import { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 'multitask-nlp',
    title: 'Multitask NLP Platform',
    description: 'Advanced NLP platform processing multiple language tasks simultaneously with state-of-the-art transformers.',
    longDescription: 'A comprehensive NLP platform built with PyTorch and FastAPI that handles multiple concurrent NLP tasks including sentiment analysis, named entity recognition, text classification, and question answering. Deployed with Docker and Kubernetes for scalability.',
    image: '/projects/nlp-platform.svg',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'BERT', 'Docker', 'PostgreSQL', 'Redis'],
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    metrics: [
      { label: 'Accuracy', value: '94.2%' },
      { label: 'Throughput', value: '1K req/s' },
      { label: 'Latency', value: '45ms' },
    ],
    featured: true,
    category: 'AI/ML',
  },
  {
    id: 'vulnhunter',
    title: 'VulnHunter',
    description: 'Intelligent security vulnerability scanner using ML for automated threat detection in codebases.',
    longDescription: 'An advanced security analysis tool leveraging machine learning to detect vulnerabilities in source code. Features include real-time scanning, integration with CI/CD pipelines, and comprehensive reporting.',
    image: '/projects/vulnhunter.svg',
    technologies: ['Python', 'TensorFlow', 'AST Parsing', 'AWS Lambda', 'React', 'Node.js'],
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    metrics: [
      { label: 'Detection Rate', value: '98.5%' },
      { label: 'False Positives', value: '0.3%' },
      { label: 'Analysis Speed', value: '100 files/s' },
    ],
    featured: true,
    category: 'Security',
  },
  {
    id: 'dao-governance',
    title: 'DAO Governance Platform',
    description: 'Decentralized autonomous organization platform with smart contracts for transparent governance.',
    longDescription: 'A Web3-native governance platform enabling DAOs to manage voting, treasury, and proposals transparently. Built with Solidity smart contracts and React frontend.',
    image: '/projects/dao.svg',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'TypeScript', 'Hardhat'],
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    metrics: [
      { label: 'Gas Optimization', value: '-35%' },
      { label: 'Transactions', value: '50K+' },
      { label: 'Active DAOs', value: '100+' },
    ],
    featured: true,
    category: 'Web3',
  },
  {
    id: 'mlops-pipeline',
    title: 'End-to-End MLOps Pipeline',
    description: 'Production-ready ML pipeline with automated training, validation, and deployment capabilities.',
    longDescription: 'A comprehensive MLOps infrastructure enabling teams to manage the full ML lifecycle from data ingestion to model serving. Includes experiment tracking, model registry, and continuous integration.',
    image: '/projects/mlops.svg',
    technologies: ['MLflow', 'Kubernetes', 'Docker', 'Airflow', 'Prometheus', 'TensorFlow'],
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    metrics: [
      { label: 'Training Time', value: '-50%' },
      { label: 'Model Accuracy', value: '92.1%' },
      { label: 'Deployment Time', value: '5min' },
    ],
    featured: true,
    category: 'MLOps',
  },
  {
    id: 'omnichain-bridge',
    title: 'Omnichain Asset Bridge',
    description: 'Cross-chain asset bridge supporting multiple blockchains with atomic swaps and liquidity pools.',
    longDescription: 'A sophisticated cross-chain bridge protocol enabling seamless asset transfers between different blockchains. Features atomic swaps, liquidity management, and advanced security mechanisms.',
    image: '/projects/bridge.svg',
    technologies: ['Solidity', 'Go', 'Cosmos SDK', 'React', 'Web3.js', 'Tendermint'],
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    category: 'Web3',
  },
  {
    id: 'multimodal-assistant',
    title: 'Multimodal AI Assistant',
    description: 'Intelligent assistant processing text, images, and audio with advanced language understanding.',
    longDescription: 'An advanced AI assistant combining multiple modalities (text, image, audio) for comprehensive understanding and response generation. Built with transformer architectures and modern LLMs.',
    image: '/projects/ai-assistant.svg',
    technologies: ['Python', 'Transformers', 'FastAPI', 'React', 'OpenAI API', 'PostgreSQL'],
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    metrics: [
      { label: 'Understanding Accuracy', value: '96.3%' },
      { label: 'Response Time', value: '1.2s' },
      { label: 'Supported Languages', value: '50+' },
    ],
    featured: true,
    category: 'AI/ML',
  },
]

export const PROJECT_CATEGORIES = [
  'All',
  'AI/ML',
  'Web3',
  'MLOps',
  'Security',
]
