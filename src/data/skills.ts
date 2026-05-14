import { Skill } from '../types'

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'react', level: 'expert' },
      { name: 'Next.js', icon: 'nextjs', level: 'expert' },
      { name: 'TypeScript', icon: 'typescript', level: 'expert' },
      { name: 'Tailwind CSS', icon: 'tailwind', level: 'expert' },
      { name: 'Framer Motion', icon: 'motion', level: 'advanced' },
      { name: 'React Query', level: 'advanced' },
      { name: 'Redux', level: 'advanced' },
      { name: 'GraphQL', level: 'intermediate' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: 'python', level: 'expert' },
      { name: 'FastAPI', icon: 'fastapi', level: 'expert' },
      { name: 'Node.js', icon: 'nodejs', level: 'expert' },
      { name: 'TypeScript', icon: 'typescript', level: 'expert' },
      { name: 'Spring Boot', icon: 'java', level: 'advanced' },
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'Redis', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
    ],
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'TensorFlow', icon: 'tensorflow', level: 'expert' },
      { name: 'PyTorch', level: 'expert' },
      { name: 'Scikit-learn', level: 'advanced' },
      { name: 'Transformers', level: 'expert' },
      { name: 'NLP', level: 'expert' },
      { name: 'Computer Vision', level: 'advanced' },
      { name: 'MLflow', level: 'advanced' },
      { name: 'Pandas/NumPy', level: 'expert' },
    ],
  },
  {
    category: 'Blockchain',
    items: [
      { name: 'Solidity', icon: 'solidity', level: 'advanced' },
      { name: 'Web3.js', level: 'advanced' },
      { name: 'Ethers.js', level: 'advanced' },
      { name: 'Smart Contracts', level: 'advanced' },
      { name: 'DeFi', level: 'intermediate' },
      { name: 'Hardhat', level: 'advanced' },
      { name: 'OpenZeppelin', level: 'advanced' },
    ],
  },
  {
    category: 'DevOps/MLOps',
    items: [
      { name: 'Docker', icon: 'docker', level: 'expert' },
      { name: 'Kubernetes', icon: 'kubernetes', level: 'expert' },
      { name: 'CI/CD', level: 'expert' },
      { name: 'AWS', icon: 'aws', level: 'expert' },
      { name: 'Google Cloud', level: 'advanced' },
      { name: 'Terraform', level: 'advanced' },
      { name: 'Prometheus/Grafana', level: 'advanced' },
      { name: 'GitLab CI', level: 'advanced' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: 'git', level: 'expert' },
      { name: 'Linux', level: 'expert' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'System Design', level: 'advanced' },
      { name: 'Microservices', level: 'advanced' },
      { name: 'Agile/Scrum', level: 'advanced' },
      { name: 'JIRA', level: 'intermediate' },
    ],
  },
]

export const ALL_TECHNOLOGIES = SKILLS.flatMap((skill) =>
  skill.items.map((item) => item.name)
)
