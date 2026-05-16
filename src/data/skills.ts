import { Skill } from '../types'

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: 'python', level: 'expert' },
      { name: 'Java', icon: 'java', level: 'advanced' },
      { name: 'JavaScript', icon: 'javascript', level: 'expert' },
      { name: 'TypeScript', icon: 'typescript', level: 'expert' },
      { name: 'Solidity', icon: 'solidity', level: 'advanced' },
      { name: 'C/C++', icon: 'cplusplus', level: 'advanced' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'react', level: 'expert' },
      { name: 'Next.js', icon: 'nextjs', level: 'expert' },
      { name: 'Tailwind CSS', icon: 'tailwind', level: 'expert' },
      { name: 'Framer Motion', icon: 'motion', level: 'advanced' },
      { name: 'GSAP', icon: 'gsap', level: 'advanced' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'FastAPI', icon: 'fastapi', level: 'expert' },
      { name: 'Flask', icon: 'python', level: 'advanced' },
      { name: 'Spring Boot', icon: 'java', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'Microservices', level: 'advanced' },
    ],
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'TensorFlow', icon: 'tensorflow', level: 'expert' },
      { name: 'Scikit-Learn', level: 'advanced' },
      { name: 'BERT', level: 'expert' },
      { name: 'Semantic Search', level: 'expert' },
      { name: 'NLP', level: 'expert' },
      { name: 'MLflow', level: 'advanced' },
      { name: 'ONNX', level: 'advanced' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: 'docker', level: 'expert' },
      { name: 'Git', icon: 'git', level: 'expert' },
      { name: 'GitHub', icon: 'github', level: 'expert' },
      { name: 'CI/CD', level: 'expert' },
      { name: 'Postman', level: 'expert' },
      { name: 'VS Code', level: 'expert' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MySQL', level: 'advanced' },
      { name: 'Redis', level: 'advanced' },
      { name: 'Firebase', level: 'advanced' },
    ],
  },
  {
    category: 'Blockchain',
    items: [
      { name: 'Smart Contracts', icon: 'solidity', level: 'advanced' },
      { name: 'Web3', level: 'advanced' },
      { name: 'DAO Governance', level: 'advanced' },
      { name: 'ERC-20/721', level: 'advanced' },
      { name: 'Omnichain Systems', level: 'intermediate' },
    ],
  },
]

export const ALL_TECHNOLOGIES = SKILLS.flatMap((skill) =>
  skill.items.map((item) => item.name)
)
