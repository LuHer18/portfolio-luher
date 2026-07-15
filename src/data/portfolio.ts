export type Language = 'es' | 'en';

type LocalizedText = Record<Language, string>;

export interface Project {
  name: string;
  image: string;
  description: LocalizedText;
  technologies: readonly string[];
  demoUrl: string;
  repositoryUrl: string;
}

export interface PortfolioContent {
  profile: {
    name: string;
    location: LocalizedText;
    role: LocalizedText;
    introduction: LocalizedText;
    about: LocalizedText;
  };
  experience: {
    company: string;
    role: LocalizedText;
    period: LocalizedText;
    location: LocalizedText;
    responsibilities: Record<Language, readonly string[]>;
  };
  projects: readonly Project[];
  skillGroups: readonly { title: LocalizedText; summary: LocalizedText; skills: readonly (string | LocalizedText)[] }[];
  social: { github: string; linkedin: string };
  resume: Record<Language, string>;
}

const content = {
  profile: {
    name: 'Luis Herrera Contreras',
    location: { es: 'Cartagena, Colombia', en: 'Cartagena, Colombia' },
    role: { es: 'Ingeniero de Software', en: 'Software Engineer' },
    introduction: {
      es: 'Construyo interfaces web, APIs, servicios backend e integraciones para procesos empresariales.',
      en: 'I build web interfaces, APIs, backend services, and integrations for business processes.',
    },
    about: {
      es: 'Soy ingeniero de software con experiencia en la construcción de interfaces web, APIs y servicios backend para procesos empresariales. He trabajado con React, Node.js, NestJS, Java y Spring Boot, integrando bases de datos y servicios REST/SOAP. Me interesa desarrollar soluciones claras y mantenibles, respaldadas por pruebas, documentación técnica y una comprensión concreta de las necesidades del negocio. También exploro prácticas de desarrollo asistido por IA para mejorar el análisis, el contexto y la consistencia del trabajo técnico.',
      en: 'I am a software engineer with experience building web interfaces, APIs, and backend services for business processes. I have worked with React, Node.js, NestJS, Java, and Spring Boot, integrating databases and REST/SOAP services. I focus on creating clear, maintainable solutions supported by testing, technical documentation, and a practical understanding of business needs. I also explore AI-assisted development practices to improve technical analysis, context, and consistency.',
    },
  },
  experience: {
    company: 'IT-TEAM CORP',
    role: { es: 'Desarrollador Full Stack', en: 'Full-Stack Developer' },
    period: { es: 'Enero 2024 - Actualidad', en: 'January 2024 - Present' },
    location: { es: 'Remoto · Empresa con sede en Perú', en: 'Remote · Company based in Peru' },
    responsibilities: {
      es: [
        'Desarrollo interfaces web y servicios backend conectados mediante APIs REST y bases de datos.',
        'Construyo componentes reutilizables, flujos de usuario, validaciones y manejo de errores.',
        'Implemento servicios modulares e integraciones REST/SOAP entre sistemas internos y externos.',
        'Contribuyo a pruebas funcionales y unitarias, además de documentación técnica.',
        'Promuevo flujos de desarrollo asistido por IA para mejorar el análisis y la consistencia técnica.',
      ],
      en: [
        'Develop web interfaces and backend services connected through REST APIs and databases.',
        'Build reusable components, user flows, validation, and error handling.',
        'Implement modular services and REST/SOAP integrations connecting internal and external systems.',
        'Contribute to functional and unit testing, as well as technical documentation.',
        'Promote AI-assisted development workflows to improve technical analysis and consistency.',
      ],
    },
  },
  projects: [
    {
      name: 'Calendar', image: '/assets/calendar.webp',
      description: { es: 'Agenda full stack para crear, consultar y actualizar eventos con autenticación.', en: 'A full-stack calendar for creating, reviewing, and updating events with authentication.' },
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoUrl: 'https://calendar-ebon-seven.vercel.app/', repositoryUrl: 'https://github.com/LuHer18/calendar',
    },
    {
      name: 'Viva Color', image: '/assets/viva-color.webp',
      description: { es: 'Generador de paletas de color para explorar y aplicar combinaciones visuales.', en: 'A color palette generator for exploring and applying visual combinations.' },
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://viva-color-app.netlify.app', repositoryUrl: 'https://github.com/LuHer18/viva-color-app',
    },
    {
      name: 'PopCorn Film', image: '/assets/popcorn-film.webp',
      description: { es: 'Explorador de películas y series construido con datos de la API de TMDB.', en: 'A movie and series explorer built with data from the TMDB API.' },
      technologies: ['React', 'Tailwind CSS', 'TMDB API'],
      demoUrl: 'https://popcorn-film.vercel.app', repositoryUrl: 'https://github.com/LuHer18/popcorn-film',
    },
    {
      name: 'Translator', image: '/assets/translator.webp',
      description: { es: 'Aplicación de traducción con detección de idioma y solicitudes optimizadas mediante debounce.', en: 'A translation app with language detection and debounced requests.' },
      technologies: ['React', 'TypeScript', 'DeepL API'],
      demoUrl: 'https://traslatorapp.vercel.app', repositoryUrl: 'https://github.com/LuHer18/translatorapp',
    },
  ],
  skillGroups: [
    { title: { es: 'Interfaces', en: 'Interfaces' }, summary: { es: 'Experiencias web accesibles, claras y adaptables desde el navegador.', en: 'Accessible, clear, and responsive web experiences in the browser.' }, skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { title: { es: 'Backend', en: 'Backend' }, summary: { es: 'Servicios modulares e integraciones que conectan procesos y sistemas.', en: 'Modular services and integrations connecting processes and systems.' }, skills: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'REST', 'SOAP'] },
    { title: { es: 'Datos y calidad', en: 'Data & quality' }, summary: { es: 'Persistencia, pruebas y prácticas que mantienen el software confiable.', en: 'Persistence, testing, and practices that keep software reliable.' }, skills: ['PostgreSQL', 'MongoDB', 'Testing', 'Git', { es: 'Documentación técnica', en: 'Technical documentation' }] },
  ],
  social: {
    github: 'https://github.com/LuHer18',
    linkedin: 'https://www.linkedin.com/in/luis-herrera-26b706161/',
  },
  resume: { es: '/assets/curriculum-spanish.pdf', en: '/assets/curriculum-english.pdf' },
} satisfies PortfolioContent;

function validateContent(value: PortfolioContent): PortfolioContent {
  if (!value.profile.name) throw new Error('Invalid portfolio profile');
  if (!value.projects.length || value.projects.some((project) => !project.demoUrl.startsWith('https://'))) {
    throw new Error('Invalid portfolio projects');
  }
  if (!value.experience.responsibilities.es.length || !value.experience.responsibilities.en.length) {
    throw new Error('Invalid portfolio experience');
  }
  return value;
}

export const portfolio = validateContent(content);
