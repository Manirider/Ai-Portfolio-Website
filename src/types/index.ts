export interface NavItem {
  id: string
  label: string
  href: string
}

export interface Skill {
  category: string
  items: SkillItem[]
}

export interface SkillItem {
  name: string
  icon?: string
  level?: 'expert' | 'advanced' | 'intermediate'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image?: string
  technologies: string[]
  links: {
    github?: string
    demo?: string
    website?: string
  }
  metrics?: {
    label: string
    value: string
  }[]
  featured?: boolean
  category?: string
}

export interface TimelineItem {
  id: string
  date: string
  dateEnd?: string
  title: string
  organization: string
  description: string
  type: 'education' | 'experience' | 'achievement'
  details?: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon?: string
  date?: string
  category?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  label: string
}

export interface NavbarState {
  isOpen: boolean
  activeSection: string
  isScrolled: boolean
}
