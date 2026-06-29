import type { Lang } from "./types";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillItem {
  label: string;
  desc: string;
}

export interface Dictionary {
  nav: {
    home: string;
    projects: string;
    experience: string;
    contact: string;
    back: string;
  };
  hero: {
    badge: string;
    headingLead: string;
    headingHighlight: string;
    subtitle: string;
    downloadCv: string;
    linkedin: string;
  };
  home: {
    projectsTitle: string;
    projectsIntro: string;
  };
  project: {
    backToHome: string;
    context: string;
    challenge: string;
    process: string;
    results: string;
    /** Used to build the gallery image alt text: `${title} ${screen} ${n}` */
    screen: string;
    ctaTitle: string;
    ctaText: string;
    ctaContact: string;
    ctaMoreProjects: string;
  };
  experience: {
    title: string;
    intro: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    intro: string;
    items: SkillItem[];
  };
  footer: {
    rights: string;
  };
}

const es: Dictionary = {
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    back: "Volver",
  },
  hero: {
    badge: "Valparaíso, Chile · 10+ años de experiencia",
    headingLead: "Construyo productos digitales que",
    headingHighlight: "logran objetivos",
    subtitle:
      "Senior UX Designer con enfoque end-to-end. Desde el discovery hasta el código, creo productos usables y que cumplen metas de negocio.",
    downloadCv: "Descargar CV",
    linkedin: "LinkedIn",
  },
  home: {
    projectsTitle: "Proyectos Destacados",
    projectsIntro:
      "Algunos casos que muestran distintas facetas de mi experiencia en diseño y desarrollo de productos digitales.",
  },
  project: {
    backToHome: "Volver al inicio",
    context: "El Contexto",
    challenge: "El Desafío",
    process: "El Proceso",
    results: "Resultados",
    screen: "pantalla",
    ctaTitle: "¿Hablamos?",
    ctaText: "Me encantaría contarte más sobre este y otros proyectos.",
    ctaContact: "Contactar",
    ctaMoreProjects: "Ver más proyectos",
  },
  experience: {
    title: "Experiencia",
    intro: "Más de dos décadas construyendo productos digitales en consultoría, banca y tecnología.",
    items: [
      {
        role: "Senior UX",
        company: "Zenta Group",
        period: "2025 - 2026",
        description: "Proyecto a honorarios por 3 meses para Discovery en cliente (COPEC).",
      },
      {
        role: "FrontEnd / UX",
        company: "Aibomarket.com",
        period: "2024 - 2025",
        description: "Marketplace gastronómico B2B. Frontend con NextJS y colaboración en definición UX.",
      },
      {
        role: "Líder Técnico UX · UX/UI · Frontend",
        company: "NEORIS",
        period: "2016 - 2023",
        description:
          "Consultoría internacional. Proyectos para Banco Santander, BUPA, ETB Colombia. Lideré área UX en Chile, Perú y Colombia.",
      },
      {
        role: "Desarrollador Web",
        company: "Filiales Chilquinta",
        period: "2008 - 2015",
        description: "Gestión de sitios web de 4 filiales. Desarrollo frontend, contenido multimedia y campañas.",
      },
      {
        role: "Desarrollador Web y Multimedia",
        company: "San Francisco Lodge",
        period: "2006 - 2008",
        description: "Desarrollo web, CDs multimedia y atención digital para hotel de montaña.",
      },
      {
        role: "Desarrollador Multimedia y Web",
        company: "Mito Consultores",
        period: "2000 - 2006",
        description: "Módulos interactivos EducActiva, CDs multimedia y sitios web corporativos.",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    intro: "Capacidades que combino para entregar productos digitales de punta a punta.",
    items: [
      { label: "UX Research", desc: "Entrevistas, benchmarks, métricas" },
      { label: "UX/UI Design", desc: "Figma, Sketch, Design Systems" },
      { label: "Frontend Dev", desc: "React, NextJS, HTML/CSS/JS" },
      { label: "Design Thinking", desc: "Workshops, ideación, co-creación" },
      { label: "Responsive", desc: "Mobile-first, accesibilidad" },
      { label: "Visual Design", desc: "Branding, multimedia, motion" },
    ],
  },
  footer: {
    rights: "© 2026 Marco Villegas Caballería · UX Designer E2E",
  },
};

// NOTE: Draft English translation — pending review by Marco.
const en: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    back: "Back",
  },
  hero: {
    badge: "Valparaíso, Chile · 10+ years of experience",
    headingLead: "I build digital products that",
    headingHighlight: "achieve goals",
    subtitle:
      "Senior UX Designer with an end-to-end approach. From discovery to code, I craft usable products that meet business goals.",
    downloadCv: "Download CV",
    linkedin: "LinkedIn",
  },
  home: {
    projectsTitle: "Featured Projects",
    projectsIntro:
      "A selection of cases showing different facets of my experience designing and building digital products.",
  },
  project: {
    backToHome: "Back to home",
    context: "The Context",
    challenge: "The Challenge",
    process: "The Process",
    results: "Results",
    screen: "screen",
    ctaTitle: "Let's talk?",
    ctaText: "I'd love to tell you more about this and other projects.",
    ctaContact: "Get in touch",
    ctaMoreProjects: "See more projects",
  },
  experience: {
    title: "Experience",
    intro: "Over two decades building digital products across consulting, banking and technology.",
    items: [
      {
        role: "Senior UX",
        company: "Zenta Group",
        period: "2025 - 2026",
        description: "3-month contract engagement for Discovery at client (COPEC).",
      },
      {
        role: "FrontEnd / UX",
        company: "Aibomarket.com",
        period: "2024 - 2025",
        description: "B2B food-service marketplace. Frontend with NextJS and collaboration on UX definition.",
      },
      {
        role: "UX Technical Lead · UX/UI · Frontend",
        company: "NEORIS",
        period: "2016 - 2023",
        description:
          "International consulting. Projects for Banco Santander, BUPA and ETB Colombia. Led the UX area across Chile, Peru and Colombia.",
      },
      {
        role: "Web Developer",
        company: "Filiales Chilquinta",
        period: "2008 - 2015",
        description: "Managed the websites of 4 subsidiaries. Frontend development, multimedia content and campaigns.",
      },
      {
        role: "Web & Multimedia Developer",
        company: "San Francisco Lodge",
        period: "2006 - 2008",
        description: "Web development, multimedia CDs and digital support for a mountain hotel.",
      },
      {
        role: "Multimedia & Web Developer",
        company: "Mito Consultores",
        period: "2000 - 2006",
        description: "EducActiva interactive modules, multimedia CDs and corporate websites.",
      },
    ],
  },
  skills: {
    title: "Skills",
    intro: "Capabilities I combine to deliver end-to-end digital products.",
    items: [
      { label: "UX Research", desc: "Interviews, benchmarks, metrics" },
      { label: "UX/UI Design", desc: "Figma, Sketch, Design Systems" },
      { label: "Frontend Dev", desc: "React, NextJS, HTML/CSS/JS" },
      { label: "Design Thinking", desc: "Workshops, ideation, co-creation" },
      { label: "Responsive", desc: "Mobile-first, accessibility" },
      { label: "Visual Design", desc: "Branding, multimedia, motion" },
    ],
  },
  footer: {
    rights: "© 2026 Marco Villegas Caballería · UX Designer E2E",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { es, en };
