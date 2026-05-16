import { TimelineItem } from '../types'

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'education-1',
    date: '2024',
    dateEnd: '2027',
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    organization: 'Aditya College, Surampalem',
    description: 'Currently pursuing Bachelor of Technology focusing on intelligent systems and modern software engineering.',
    type: 'education',
    details: [
      'CGPA: 8.80',
      'Relevant coursework: Artificial Intelligence, Machine Learning, Deep Learning, NLP, Data Analytics, Distributed Systems',
    ],
  },
  {
    id: 'education-2',
    date: '2021',
    dateEnd: '2024',
    title: 'Diploma in Computer Science & Engineering',
    organization: 'Godavari Institute, Rajahmundry',
    description: 'Focused on computer science fundamentals, algorithms, and software development.',
    type: 'education',
    details: [
      'Score: 84%',
      'Relevant coursework: C, C++, Java, Python, Computer Networking, Distributed Systems',
    ],
  },
  {
    id: 'education-3',
    date: '2020',
    dateEnd: '2021',
    title: 'Secondary Education',
    organization: 'S.V.S.M Z.P.P High School',
    description: 'Completed secondary education with top honors.',
    type: 'education',
    details: [
      'Score: 98%',
    ],
  },
  {
    id: 'exp-1',
    date: '2024',
    dateEnd: 'Present',
    title: 'Full Stack Developer Intern',
    organization: 'Anurag IT Solutions Pvt. Ltd',
    description: 'Building and scaling production-ready frontend systems, backend APIs, and enterprise workflows.',
    type: 'experience',
    details: [
      'Developed scalable application features and frontend systems',
      'Built and integrated backend APIs',
      'Designed and optimized enterprise workflows',
      'Implemented production-ready integrations',
    ],
  },
  {
    id: 'exp-2',
    date: '2023',
    dateEnd: '2023',
    title: 'AI/ML Intern',
    organization: 'APSCHE',
    description: 'Worked on building predictive systems and developing intelligent applications.',
    type: 'experience',
    details: [
      'Developed AI/ML workflows and predictive systems',
      'Conducted extensive model experimentation',
      'Built intelligent application features',
    ],
  },
  {
    id: 'exp-3',
    date: '2023',
    dateEnd: '2023',
    title: 'Data Analytics Intern',
    organization: 'THUB',
    description: 'Focused on building analytics pipelines and data visualization dashboards.',
    type: 'experience',
    details: [
      'Created data visualization dashboards',
      'Developed analytics systems and reporting pipelines',
    ],
  },
  {
    id: 'achieve-1',
    date: '2024',
    title: 'Awarded for Smart Transportation Prototype',
    description: 'Recognized for developing an innovative smart transportation prototype.',
    type: 'achievement',
  },
  {
    id: 'achieve-2',
    date: 'Present',
    title: 'Core EDC member',
    description: 'Mentoring juniors and fostering startup ideas within the Entrepreneurship Development Cell.',
    type: 'achievement',
  },
  {
    id: 'achieve-3',
    date: 'Present',
    title: 'Developing "Life OS"',
    description: 'Building a comprehensive startup ecosystem aimed at optimizing personal and professional workflows.',
    type: 'achievement',
  },
  {
    id: 'achieve-4',
    date: '2023',
    title: 'Enterprise Automation Impact',
    description: 'Developed automation systems reducing manual workflow effort significantly by 60%.',
    type: 'achievement',
  },
  {
    id: 'achieve-5',
    date: 'Ongoing',
    title: 'Continuous Learning',
    description: '15+ certifications in AI/ML, Cloud, and Data Science from Google, AWS, Coursera, and NPTEL.',
    type: 'achievement',
  },
]

export const ACHIEVEMENTS = TIMELINE_ITEMS.filter((item) => item.type === 'achievement')
export const EXPERIENCE = TIMELINE_ITEMS.filter((item) => item.type === 'experience')
export const EDUCATION = TIMELINE_ITEMS.filter((item) => item.type === 'education')
