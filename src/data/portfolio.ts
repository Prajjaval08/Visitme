export const personal = {
  name: 'Prajjaval Pandey',
  role: 'B.Tech Student — Computer Science & Engineering',
  email: 'prajjavalp@gmail.com',
  location: 'Varanasi / Chennai, India',
  education: 'B.Tech in Computer Science and Engineering — SRM Institute of Science and Technology (CGPA: 9.01)',
  experience: 'Student',
  availability: 'Open to opportunities',
  bio: [
    'Full‑stack student focusing on AI-powered web platforms, scalable web architectures, and practical ML integrations.',
    'Experience building end-to-end applications using React / Next.js, TypeScript, Node.js, PostgreSQL and modern deployment tooling.',
  ],
  stats: [
    { value: '3', label: 'Projects (highlighted)' },
    { value: '2023-2027', label: 'B.Tech duration' },
    { value: '9.01', label: 'CGPA' },
  ],
  social: {
    github: 'https://github.com/Prajjaval08',
    linkedin: 'https://linkedin.com/in/prajaval-pandey-583423234',
    leetcode: 'https://leetcode.com/u/PRAJJAVAL',
    twitter: "https://x.com/Prajjaval_p07"
  },
}

export const typedRoles = [
  'Full Stack Developer',
  'AI / ML Integration',
  'React & Next.js Engineer',
  'Systems & Backend',
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Nest.js', 'Spring Boot', 'Django'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'MySQL'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Git', 'GitHub', 'Firebase', 'CI/CD', 'Linux'],
  },
]

export const skillBars = [
  { label: 'Frontend Development', value: 95 },
  { label: 'Backend Development', value: 90 },
  { label: 'Database Design', value: 85 },
  { label: 'DevOps & Cloud', value: 78 },
]

export type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  github: string
  live: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'AI Image Generation Platform',
    description:
      'Full-stack text-to-image platform using OpenAI / API integrations, containerised deployment, user auth, and scalable image generation workflows.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Bun', 'PostgreSQL', 'Prisma', 'OpenAI', 'Docker'],
    github: 'https://github.com/Prajjaval08',
    live: '',
    featured: true,
  },
  {
    id: '02',
    title: 'AI Fitness Saarthi — AI-Powered Fitness & Wellness',
    description:
      'Personalised fitness platform delivering AI-powered workouts, real-time tracking, and nutrition recommendations with OAuth and WebSocket integrations.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'NextAuth.js', 'Socket.IO', 'BullMQ'],
    github: 'https://github.com/Prajjaval08',
    live: '',
  },
  {
    id: '03',
    title: 'Course Selling Platform',
    description:
      'RESTful course management platform with role-based authentication, JWT-protected endpoints, and a MongoDB-backed data model for users, courses, and transactions.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/Prajjaval08',
    live: '',
  },

]
