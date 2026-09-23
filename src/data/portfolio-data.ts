import type {
  Project,
  Experience,
  EducationItem,
  Certification,
  Testimonial,
  StatItem,
} from '@/types/portfolio';

export type {
  Project,
  Experience,
  EducationItem,
  Certification,
  Testimonial,
  StatItem,
};

export const PERSONAL_INFO_PT = {
  name: 'Guilherme Araujo',
  title: 'Desenvolvedor Full Stack Júnior',
  shortBio:
    'Formado em Análise e Desenvolvimento de Sistemas (UniDomBosco). Experiência prática desenvolvendo automações, otimizações de processos e aplicações web modernas no ecossistema TypeScript com React, Next.js, Node.js, NestJS e PostgreSQL/MySQL.',
  fullBio: [
    'Minha jornada na tecnologia começou pela necessidade de resolver problemas reais. Antes de mergulhar no código, atuei com eficiência operacional na indústria e com gestão de sistemas no Tribunal Regional Eleitoral do Paraná. Foi no setor público que comecei a criar automações, comprovando na prática como a tecnologia pode destravar processos e gerar melhorias contínuas.',
    'Essa vivência me deu uma base sólida: aprendi a mapear fluxos, identificar gargalos e ter forte disciplina operacional.',
    'Hoje, sou Desenvolvedor Full Stack graduado em Análise e Desenvolvimento de Sistemas, apaixonado pelo ecossistema TypeScript. Meu dia a dia é focado em construir soluções robustas utilizando React, Next.js, Node.js e NestJS, com modelagem de dados em PostgreSQL.',
    'Meu objetivo como Desenvolvedor Júnior é simples: unir minha capacidade analítica à excelência técnica para construir softwares que sejam não apenas funcionais, mas limpos, seguros e escaláveis.',
  ],
  avatar: '/profile.png',
  secondaryAvatar: '/profile.png',
  status: 'Disponível para oportunidades como Desenvolvedor Júnior',
  location: 'Curitiba, Paraná, Brasil (Disponível para Remoto e Presencial)',
  email: 'oldwestdeveloper@outlook.com',
  resumeDriveUrl: 'https://drive.google.com/file/d/1tEHotj4n4OUmzaUkIaiNCr-8YT_YTjlk/view?usp=sharing',
  github: 'https://github.com/Oldwestdeveloper',
  linkedin: 'https://www.linkedin.com/in/guilherme-araujo-lacerda',
  stats: [
    {
      value: '+6 Projetos Reais',
      label: 'Aplicações Full Stack e APIs REST',
      icon: 'projects',
      targetId: 'projects',
    },
    {
      value: 'Automação e Processos',
      label: 'Vivência Prática (TRE-PR e Indústria)',
      icon: 'automation',
      targetId: 'experience',
    },
    {
      value: 'Clean Code e Qualidade',
      label: 'TypeScript Estrito, Testes e Docker',
      icon: 'quality',
      targetId: 'about',
    },
    {
      value: 'Disponibilidade Imediata',
      label: 'Remoto ou Curitiba/PR',
      icon: 'availability',
      targetId: 'contact',
    },
  ],
  skills: {
    frontend: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'NextJS' },
      { name: 'TailwindCSS' },
    ],
    backend: [
      { name: 'NodeJS' },
      { name: 'NestJS' },
      { name: 'PrismaORM' },
      { name: 'PostgreSQL' },
      { name: 'Python' },
    ],
    devopsAndTools: [
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'GIT' },
      { name: 'GITBASH' },
      { name: 'GitHub' },
      { name: 'VSCODE' },
    ],
  },
};

export const PERSONAL_INFO_EN = {
  name: 'Guilherme Araujo',
  title: 'Junior Full Stack Developer',
  shortBio:
    'Degree in Systems Analysis and Development from UniDomBosco. Practical experience developing automations, workflow optimizations, and modern web applications across the TypeScript ecosystem with React, Next.js, Node.js, NestJS, and PostgreSQL/MySQL.',
  fullBio: [
    'My journey in technology began with the need to solve real-world problems. Before diving into code, I worked with operational efficiency in industry and systems management at the Regional Electoral Court of Paraná. It was in the public sector that I started creating automations, proving in practice how technology can streamline processes and drive continuous improvements.',
    'This experience gave me a solid foundation: I learned to map workflows, identify bottlenecks, and maintain strong operational discipline.',
    'Today, I am a Full Stack Developer with a degree in Systems Analysis and Development, passionate about the TypeScript ecosystem. My day-to-day focus is on building robust solutions using React, Next.js, Node.js, and NestJS, with relational data modeling in PostgreSQL.',
    'My goal as a Junior Developer is simple: combine my analytical mindset with technical excellence to build software that is not only functional, but clean, secure, and scalable.',
  ],
  avatar: '/profile.png',
  secondaryAvatar: '/profile.png',
  status: 'Available for Junior Developer opportunities',
  location: 'Curitiba, Paraná, Brazil (Available for Remote and On-site)',
  email: 'oldwestdeveloper@outlook.com',
  resumeDriveUrl: 'https://drive.google.com/file/d/1tEHotj4n4OUmzaUkIaiNCr-8YT_YTjlk/view?usp=sharing',
  github: 'https://github.com/Oldwestdeveloper',
  linkedin: 'https://www.linkedin.com/in/guilherme-araujo-lacerda/',
  stats: [
    {
      value: '6+ Live Projects',
      label: 'Full Stack Apps and REST APIs',
      icon: 'projects',
      targetId: 'projects',
    },
    {
      value: 'Automation and Workflows',
      label: 'Hands-on at TRE-PR and Industry',
      icon: 'automation',
      targetId: 'experience',
    },
    {
      value: 'Clean Code and Quality',
      label: 'Strict TypeScript, Testing and Docker',
      icon: 'quality',
      targetId: 'about',
    },
    {
      value: 'Immediate Availability',
      label: 'Remote or Curitiba, Brazil',
      icon: 'availability',
      targetId: 'contact',
    },
  ],
  skills: {
    frontend: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'NextJS' },
      { name: 'TailwindCSS' },
    ],
    backend: [
      { name: 'NodeJS' },
      { name: 'NestJS' },
      { name: 'PrismaORM' },
      { name: 'PostgreSQL' },
      { name: 'Python' },
    ],
    devopsAndTools: [
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'GIT' },
      { name: 'GITBASH' },
      { name: 'GitHub' },
      { name: 'VSCODE' },
    ],
  },
};

export const PROJECTS_PT: Project[] = [
  {
    id: 'proj-1',
    title: 'Enciclopédia de Dragões | House of the Dragon',
    category: 'Front-end',
    description:
      'Catálogo interativo e imersivo das maiores feras de Valíria, com foco em responsividade e otimização de partilha (SEO).',
    longDescription:
      'Desenvolvimento front-end construído com Next.js e TypeScript. O projeto destaca-se pela sua interface temática, totalmente adaptada a dispositivos móveis, e pela implementação avançada de metadados (Open Graph e Twitter Cards) para garantir pré-visualizações perfeitas em redes sociais e mensageiros como o WhatsApp e LinkedIn.',
    image: '/Project-hotd/og-image.png',
    // images: [
    //   '/Project-hotd/hotd_1.png',
    //   '/Project-hotd/hotd_2.png',
    //   '/Project-hotd/hotd_3.png',
    // ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO', 'Open Graph'],
    demoUrl: 'https://oldwestdeveloper-hotd.vercel.app',
    githubUrl: 'https://github.com/Oldwestdeveloper/HouseOfTheDragon-FanProject.git', 
    featured: true,
    metrics: 'SEO 100% otimizado e integração completa de Open Graph para links.',
  },
  {
    id: 'proj-2',
    title: 'Sistema de Gestão de Crachás',
    category: 'Full-stack',
    confidential: true,
    description:
      'Aplicação web construída para automatizar o fluxo de solicitação, confecção e entrega de credenciais, com integração de e-mails em tempo real.',
    longDescription:
      'Sistema corporativo serverless desenvolvido para substituir processos manuais descentralizados. Apresenta um dashboard interativo com cálculo automático de perdas, geração de relatórios logísticos em PDF e notificações automatizadas via Gmail com acompanhamento visual (stepper). Por se tratar de um sistema interno de empresa com dados sensíveis, o acesso público ao código e ao sistema é restrito (NDA), disponibilizando aqui as capturas de telas e a visão técnica.',
    image: '/Gestao-de-crachas/crachas.jpg',
    images: [
      '/Gestao-de-crachas/dashboard.png',
      '/Gestao-de-crachas/ConsultarColaboradores.png',
      '/Gestao-de-crachas/CadastarColaborador.png',
      '/Gestao-de-crachas/RegistrodeErro.png',
    ],
    tags: ['Vanilla JS', 'Google Apps Script', 'HTML/CSS', 'Google Sheets', 'jsPDF'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    metrics: 'Automação do controle de inventário com rastreabilidade total',
  },
];

export const PROJECTS_EN: Project[] = [
  {
    id: 'proj-1',
    title: 'Dragon Encyclopedia | House of the Dragon',
    category: 'Front-end',
    description:
      'Interactive and immersive encyclopedia of the beasts of Valyria, with focus on responsiveness and rich sharing metadata (SEO).',
    longDescription:
      'Front-end application engineered with Next.js and TypeScript. Features a thematic interface adapted to mobile devices and advanced metadata implementation (Open Graph and Twitter Cards) for previews on social networks and messengers.',
    image: '/Project-hotd/og-image.png',
    // images: [
    //   '/Project-hotd/hotd_1.png',
    //   '/Project-hotd/hotd_2.png',
    //   '/Project-hotd/hotd_3.png',
    // ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO', 'Open Graph'],
    demoUrl: 'https://oldwestdeveloper-hotd.vercel.app',
    githubUrl: 'https://github.com/Oldwestdeveloper/HouseOfTheDragon-FanProject.git',
    featured: true,
    metrics: '100% SEO optimization and full Open Graph integration for link sharing.',
  },
  {
    id: 'proj-2',
    title: 'Badge Management System',
    category: 'Full-stack',
    confidential: true,
    description:
      'Web application built to automate the request, production, and issuance flow of corporate badges with real-time email automation.',
    longDescription:
      'Serverless enterprise solution developed to replace decentralized manual spreadsheets. Includes an interactive analytics dashboard for loss calculations, automated logistics report generation in PDF, and automated status notifications via Gmail with a visual status stepper. As an internal corporate tool with sensitive workflow data, code and live URL are protected under NDA, with design and implementation illustrated via this gallery.',
    image: '/Gestao-de-crachas/crachas.jpg',
    images: [
      '/Gestao-de-crachas/dashboard.png',
      '/Gestao-de-crachas/ConsultarColaboradores.png',
      '/Gestao-de-crachas/CadastarColaborador.png',
      '/Gestao-de-crachas/RegistrodeErro.png',
    ],
    tags: ['Vanilla JS', 'Google Apps Script', 'HTML/CSS', 'Google Sheets', 'jsPDF'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    metrics: 'Inventory tracking automation with complete internal traceability',
  },
];

export const EXPERIENCES_PT: Experience[] = [
  {
    id: 'exp-1',
    role: 'Assistente Administrativo e Automação de Sistemas',
    company: 'Tribunal Regional Eleitoral do Paraná',
    period: 'Experiência Recente',
    location: 'Curitiba, PR, Brasil',
    type: 'Presencial / Tempo Integral',
    description:
      'Atuação voltada à criação de rotinas de automação administrativa, operação de sistemas internos e otimização de fluxos de trabalho com foco em eficiência operacional e soluções duráveis.',
    achievements: [
      'Desenvolveu rotinas e scripts de automação para tarefas repetitivas, reduzindo o tempo de execução operacional.',
      'Operou e validou informações em sistemas internos, garantindo conformidade, precisão e integridade de registros.',
      'Identificou gargalos operacionais e aplicou princípios de tecnologia para promover melhorias contínuas.',
    ],
    skills: ['Automação de Processos', 'Sistemas Internos', 'Gestão de Dados', 'Resolução de Problemas', 'Melhoria Contínua'],
  },
  {
    id: 'exp-2',
    role: 'Desenvolvedor Full Stack Júnior (Projetos e Portfólio)',
    company: 'Projetos Práticos e Ecossistema TypeScript',
    period: '2024 — 2026',
    location: 'Curitiba, PR, Brasil (Remoto / Híbrido)',
    type: 'Remoto',
    description:
      'Desenvolvimento prático e ponta a ponta de aplicações web modernas aplicando boas práticas de engenharia de software, tipagem estrita e padrões modernos de código.',
    achievements: [
      'Construção de aplicações full stack com React, Next.js, Node.js e NestJS, priorizando interfaces responsivas e carregamento rápido.',
      'Modelagem e integração com bancos de dados relacionais PostgreSQL e MySQL, criando esquemas estruturados e consultas otimizadas.',
      'Desenvolvimento de APIs RESTful estruturadas com validação de dados, tratamento robusto de erros e tipagem estrita de ponta a ponta.',
    ],
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 'exp-3',
    role: 'Eficiência de Processos e Operações Industriais',
    company: 'Setor Industrial',
    period: 'Experiência Anterior',
    location: 'Paraná, Brasil',
    type: 'Tempo Integral',
    description:
      'Atuação direcionada ao mapeamento de fluxos operacionais, implementação de melhorias contínuas e garantia de fluidez e produtividade no ambiente de trabalho.',
    achievements: [
      'Mapeamento metódico de etapas operacionais para eliminar retrabalho e ampliar a eficiência do time.',
      'Aplicação de metodologias de melhoria contínua e análise rigorosa de fluxos diários.',
      'Construção de uma base analítica e visão sistêmica indispensável para a modelagem lógica e desenvolvimento de software.',
    ],
    skills: ['Mapeamento de Processos', 'Melhoria Contínua', 'Eficiência Operacional', 'Pensamento Sistêmico'],
  },
];

export const EXPERIENCES_EN: Experience[] = [
  {
    id: 'exp-1',
    role: 'Administrative and Systems Automation Assistant',
    company: 'Regional Electoral Court of Paraná',
    period: 'Recent Experience',
    location: 'Curitiba, PR, Brazil',
    type: 'Full-time / On-site',
    description:
      'Responsible for administrative automation routines, internal systems management, and workflow optimization focused on process efficiency and reliable long-term solutions.',
    achievements: [
      'Built automation scripts and routines for repetitive tasks, accelerating daily workflow operations.',
      'Managed and validated data across internal systems, guaranteeing consistency, accuracy, and records integrity.',
      'Identified operational bottlenecks and applied technology principles to deliver continuous improvements.',
    ],
    skills: ['Process Automation', 'Internal Systems', 'Data Management', 'Problem Solving', 'Continuous Improvement'],
  },
  {
    id: 'exp-2',
    role: 'Junior Full Stack Developer (Projects and Portfolio)',
    company: 'Hands-on Projects and TypeScript Ecosystem',
    period: '2024 — 2026',
    location: 'Curitiba, PR, Brazil (Remote / Hybrid)',
    type: 'Remote',
    description:
      'Hands-on end-to-end development of modern web applications applying software engineering best practices, type safety, and modern coding standards.',
    achievements: [
      'Built full-stack applications with React, Next.js, Node.js, and NestJS, prioritizing responsive UI and fast load times.',
      'Modeled and connected relational databases with PostgreSQL and MySQL, writing structured schemas and optimized queries.',
      'Designed structured RESTful APIs with schema validation, robust error handling, and end-to-end TypeScript types.',
    ],
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 'exp-3',
    role: 'Process Efficiency and Industrial Operations',
    company: 'Industrial Sector',
    period: 'Previous Experience',
    location: 'Paraná, Brazil',
    type: 'Full-time',
    description:
      'Focused on operational workflow mapping, continuous improvement implementations, and ensuring smooth, productive day-to-day operations.',
    achievements: [
      'Systematically mapped operational stages to eliminate rework and improve overall team throughput.',
      'Applied continuous improvement methodologies and rigorous daily workflow analysis.',
      'Cultivated a strong analytical and systems-thinking mindset, now directly applied to software modeling and code design.',
    ],
    skills: ['Process Mapping', 'Continuous Improvement', 'Operational Efficiency', 'Systems Thinking'],
  },
];

export const EDUCATION_PT: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Graduação em Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário UniDomBosco',
    period: 'Concluído',
    status: 'Concluído',
    credentialUrl: 'https://drive.google.com/file/d/1AIg7rSkzgyLyvKFAsDIcT6GoVv74CPwB/view?usp=sharing',
    description:
      'Formação superior tecnológica com ênfase em engenharia de software, estruturas de dados, modelagem de banco de dados, arquitetura web e levantamento de requisitos.',
    honors: 'Foco prático em desenvolvimento Full Stack moderno e resolução de problemas computacionais.',
    courses: [
      'Desenvolvimento Web e Arquitetura de Software',
      'Modelagem de Banco de Dados Relacional (SQL)',
      'Estruturas de Dados e Algoritmos',
      'Engenharia de Requisitos e Processos de TI',
    ],
  },
];

export const EDUCATION_EN: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor’s Degree in Systems Analysis and Development',
    institution: 'UniDomBosco University Center',
    period: 'Graduated',
    status: 'Completed',
    credentialUrl: 'https://drive.google.com/file/d/1AIg7rSkzgyLyvKFAsDIcT6GoVv74CPwB/view?usp=sharing',
    description:
      'Higher education program focused on software engineering, data structures, database design, web architecture, and requirements engineering.',
    honors: 'Hands-on focus on modern Full Stack engineering and computational problem solving.',
    courses: [
      'Web Development and Software Architecture',
      'Database Modeling (SQL)',
      'Data Structures and Algorithms',
      'Requirements Engineering and IT Processes',
    ],
  },
];

export const CERTIFICATIONS_PT: Certification[] = [
  {
    id: 'cert-1',
    name: 'Full Stack Profissional (React, Next.js e Node.js)',
    issuer: 'Sujeito Programador',
    issueDate: 'Inicio: 2026',
    status: 'Em andamento',
    // credentialUrl: 'https://github.com/Oldwestdeveloper',
  },
  // {
  //   id: 'cert-2',
  //   name: 'Modelagem de Banco de Dados Relacional e Consultas SQL (PostgreSQL / MySQL)',
  //   issuer: 'Treinamento de Bancos de Dados SQL',
  //   issueDate: '2024',
  //   status: 'Concluído',
  //   // credentialUrl: 'https://github.com/Oldwestdeveloper',
  // },
  // {
  //   id: 'cert-3',
  //   name: 'Controle de Versão e Colaboração com Git e GitHub',
  //   issuer: 'Boas Práticas de Desenvolvimento',
  //   issueDate: '2024',
  //   status: 'Concluído',
  //   // credentialUrl: 'https://github.com/Oldwestdeveloper',
  // },
];

export const CERTIFICATIONS_EN: Certification[] = [
  {
    id: 'cert-1',
    name: 'Full Stack Professional (React, Next.js and Node.js)',
    issuer: 'Subject Programmer',
    issueDate: 'Start: 2026',
    status: 'In Progress',
    // credentialUrl: 'https://github.com/Oldwestdeveloper',
  },
  // {
  //   id: 'cert-2',
  //   name: 'Relational Database Modeling and SQL Queries (PostgreSQL / MySQL)',
  //   issuer: 'SQL Database Training',
  //   issueDate: '2024',
  //   status: 'Completed',
  //   // credentialUrl: 'https://github.com/Oldwestdeveloper',
  // },
  // {
  //   id: 'cert-3',
  //   name: 'Version Control and Team Collaboration with Git and GitHub',
  //   issuer: 'Software Development Best Practices',
  //   issueDate: '2024',
  //   status: 'Completed',
  //   // credentialUrl: 'https://github.com/Oldwestdeveloper',
  // },
];

export const TESTIMONIALS_PT: Testimonial[] = [
{
    id: 'test-1',
    name: 'Seção de Segurança Institucional e Inteligência',
    role: 'Chefe da Seção de Segurança',
    company: 'TRE-PR',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    content:
      'Extremamente proativo e com forte visão de negócio. O Guilherme identificou um gargalo no nosso fluxo e desenvolveu do zero uma solução full-stack que digitalizou toda a gestão de credenciais. A automação que ele estruturou eliminou os processos manuais e reduziu drasticamente o nosso tempo gasto com suporte.',
    rating: 5,
    projectRelation: 'Desenvolvimento do Sistema de Gestão de Crachás',
  },
];

export const TESTIMONIALS_EN: Testimonial[] = [
{
    id: 'test-1',
    name: 'Institutional Security and Intelligence Section',
    role: 'Head of Institutional Security',
    company: 'TRE-PR',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    content:
      'Extremely proactive with a strong business vision. Guilherme identified a bottleneck in our workflow and built a full-stack solution from scratch that completely digitized our credential management. The automation he structured eliminated manual processes and drastically reduced the time we spent on support.',
    rating: 5,
    projectRelation: 'Development of the ID Badge Management System',
  },
];

// Helper functions according to language
export function getPersonalInfo(lang: 'pt' | 'en') {
  return lang === 'en' ? PERSONAL_INFO_EN : PERSONAL_INFO_PT;
}

export function getProjects(lang: 'pt' | 'en') {
  return lang === 'en' ? PROJECTS_EN : PROJECTS_PT;
}

export function getExperiences(lang: 'pt' | 'en') {
  return lang === 'en' ? EXPERIENCES_EN : EXPERIENCES_PT;
}

export function getEducation(lang: 'pt' | 'en') {
  return lang === 'en' ? EDUCATION_EN : EDUCATION_PT;
}

export function getCertifications(lang: 'pt' | 'en') {
  return lang === 'en' ? CERTIFICATIONS_EN : CERTIFICATIONS_PT;
}

export function getTestimonials(lang: 'pt' | 'en') {
  return lang === 'en' ? TESTIMONIALS_EN : TESTIMONIALS_PT;
}

// Default export fallback for backward compatibility
export const PERSONAL_INFO = PERSONAL_INFO_PT;
export const PROJECTS = PROJECTS_PT;
export const EXPERIENCES = EXPERIENCES_PT;
export const EDUCATION = EDUCATION_PT;
export const CERTIFICATIONS = CERTIFICATIONS_PT;
export const TESTIMONIALS = TESTIMONIALS_PT;
