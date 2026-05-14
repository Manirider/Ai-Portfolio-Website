import { NavItem, SocialLink } from '../types'

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Manirider',
    icon: 'github',
    label: 'Visit GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manikanta-suryasai-sunkara-60955b27b',
    icon: 'linkedin',
    label: 'Visit LinkedIn profile',
  },
  {
    name: 'Email',
    url: 'mailto:smanikanta713@gmail.com',
    icon: 'mail',
    label: 'Send an email',
  },
]

export const ROLE_TITLES = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'MLOps Engineer',
  'Blockchain Developer',
]

export const HERO_ROLES = [
  'Building intelligent systems',
  'Crafting elegant solutions',
  'Scaling machine learning',
  'Pushing technology forward',
  'Always eager to learn new things'
]

export const RESUME_URL = '/resume.pdf'
