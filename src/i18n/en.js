export default {
  meta: {
    title: 'Arturo Corpas | Automation & Data',
    description: 'Portfolio of Arturo Fernando Corpas Ulloa: data analyst, process automation and software development.',
  },
  skip: 'Skip to content',
  newTab: 'opens in a new tab',
  langSwitch: 'Switch language to Spanish',
  nav: { label: 'Main', about: 'About me', services: 'Services', skills: 'Skills', experience: 'Experience', education: 'Education', route: 'Roadmap', projects: 'Projects', contact: 'Contact' },
  hero: {
    photoAlt: 'Portrait of Arturo Corpas',
    role: 'Data Analyst & Process Automation | Software Developer',
    summary: 'I automate processes and turn data into useful information for decision-making. I build Python tools, web applications and data analysis solutions that reduce repetitive manual work.',
    projects: 'View projects', cv: 'Download CV (PDF)', whatsapp: 'Message me on WhatsApp',
  },
  stats: [{ value: 30, suffix: '+', label: 'automation tools' }, { value: 9, suffix: '+', label: 'years in administrative and audit processes' }, { value: 40, suffix: '+', label: 'GitHub repositories' }],
  services: {
    title: 'What I can bring to your team',
    items: [
      { icon: '⚙️', title: 'Process automation', text: 'Python scripts and tools that replace manual tasks: file validation, reconciliations, email and document extraction.' },
      { icon: '📊', title: 'Data analysis & reporting', text: 'Cleaning, matching and visualizing data with Pandas, Power BI and advanced Excel to support decisions.' },
      { icon: '💻', title: 'Tools & web development', text: 'Internal applications and responsive sites with React, Node.js and REST APIs, designed mobile-first.' },
    ],
  },
  about: {
    title: 'About me',
    paragraphs: [
      'I am a **software developer and data analyst**. I build solutions that combine **web applications, process automation, data analysis and artificial intelligence**, always starting from a concrete business need.',
      'Before writing code I spent more than 9 years in billing and auditing in the healthcare sector, and that is my biggest advantage: I understand the process from the inside. Today I maintain more than 30 Python tools that validate, reconcile and fix electronic billing data, cutting processing time and operational errors.',
      'On the web, I connect interfaces with APIs and databases using React, Node.js and PHP/Laravel. In automation I work with Python and N8N, and I have **RPA knowledge from self-study**. I use **artificial intelligence** to automate tasks and analyze information. I am on a **continuous learning path**: I am progressing through the AWS path (I already hold Cloud Foundations and Generative AI Foundations) and keep expanding my profile with Automation Anywhere and Power Automate. I like to own the whole solution, from understanding the problem to maintaining it, and to build technology that **delivers value and has real impact**.',
    ],
  },
  skills: { title: 'Skills', learning: 'I am expanding my profile toward intelligent automation platforms and cloud.' },
  experience: { title: 'Experience' },
  education: { title: 'Education & certifications', degrees: 'Education', certs: 'Certifications and courses' },

  certificates: {
    title: 'Certifications', hint: 'Tap a certificate to see it in full.', viewer: 'Certificates',
    view: (title) => `View certificate: ${title}`,
    hours: (h) => `${h} h`,
    groups: { ai: 'AI & automation', cloud: 'Cloud', data: 'Data', dev: 'Development' },
    other: 'Other courses',
  },
  route: {
    title: 'Continuous learning path',
    intro: 'I keep strengthening my profile with steady training in cloud, artificial intelligence and automation. This is the road so far and what comes next.',
    listLabel: 'Learning timeline',
    status: { done: 'Completed', active: 'In progress', next: 'Next' },
  },
  projects: {
    title: 'Projects', all: 'All', automation: 'Automation', web: 'Web', code: 'Code', frontend: 'Frontend', backend: 'Backend',
    private: 'Private code because it handles sensitive information.', open: 'View images',
    filterLabel: 'Filter projects by category',
    results: (n) => `${n} ${n === 1 ? 'project shown' : 'projects shown'}`,
    practice: 'Practice & exercises',
    practiceText: 'Exercises I used to strengthen my JavaScript logic and CSS layout skills.',
  },
  showcase: { title: 'Responsive design: mobile-first', text: 'Mer.Store was designed for phones first and adapts to tablet and desktop. Tap an image to enlarge it.', mobile: 'Mobile', tablet: 'Tablet', desktop: 'Desktop' },
  contact: { title: 'Contact', text: 'Have a process to automate or data to analyze? Message me and let us talk.', whatsapp: 'WhatsApp', msg: 'Hi Arturo, I saw your portfolio and would like to talk with you.' },
  lightbox: { prev: 'Previous image', next: 'Next image', counter: (i, n) => `Image ${i} of ${n}` },
  footer: 'Built with React', close: 'Close', menu: 'Menu',
};