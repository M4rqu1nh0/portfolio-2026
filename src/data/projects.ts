export interface Metric {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface KeyDecision {
  label: string;
  text: string;
}

export interface ProjectDetail {
  /** URL slug, e.g. "santander-officebanking" — matches the home card link */
  slug: string;
  /** Small uppercase line above the title, e.g. "Banco Santander · 2021–2023" */
  eyebrow: string;
  title: string;
  subtitle: string;
  roles: string[];
  heroImage: string;
  heroAlt: string;
  metrics: Metric[];
  /** "El Contexto" paragraphs */
  context: string[];
  /** "El Desafío" paragraphs */
  challenge: string[];
  /** Two-column feature section between context and process */
  feature: {
    image: string;
    imageAlt: string;
    eyebrow: string;
    title: string;
    paragraph: string;
  };
  process: {
    intro: string;
    steps: ProcessStep[];
    /** Optional full-width image shown after the process steps */
    image?: { src: string; alt: string };
  };
  gallery: {
    intro: string;
    images: string[];
  };
  /** Closing "Decisiones Clave" / "Valor Entregado" section */
  outcomes: {
    title: string;
    items: KeyDecision[];
  };
}

export const projects: ProjectDetail[] = [
  {
    slug: "santander-officebanking",
    eyebrow: "Banco Santander · 2021–2023",
    title: "OfficeBanking",
    subtitle: "Transformación de la plataforma para clientes Empresa",
    roles: ["Diseñador UX", "Frontend Developer"],
    heroImage: "/img/s-ob_01.webp",
    heroAlt: "OfficeBanking - Nueva plataforma",
    metrics: [
      { value: "2 años", label: "Duración del proyecto" },
      { value: "5+", label: "Segmentos de clientes" },
      { value: "100%", label: "Renovación visual" },
      { value: "Angular", label: "Stack tecnológico" },
    ],
    context: [
      "Banco Santander es uno de los bancos más grandes a nivel mundial. En Chile cuenta con un porcentaje mayoritario del mercado de clientes del Segmento Empresa.",
      "Este segmento incluye desde pequeños negocios hasta los holdings más grandes del país, todos transaccionando desde una misma plataforma: OfficeBanking.",
    ],
    challenge: [
      "Transformar una plataforma con años en el mercado, arquitectura compleja y múltiples funcionalidades, en una solución moderna, intuitiva y accesible.",
      "La diversidad de usuarios —desde microempresarios hasta equipos contables de holdings— hacía que un diseño único fuera insuficiente.",
    ],
    feature: {
      image: "/img/s-ob_02.webp",
      imageAlt: "Versión anterior de OfficeBanking",
      eyebrow: "Antes",
      title: "Plataforma anterior",
      paragraph:
        "La versión previa presentaba una interfaz anticuada con deuda técnica significativa. Santander decidió renovar tanto el stack tecnológico (Angular) como la experiencia de usuario completa.",
    },
    process: {
      intro: "Una metodología completa de Design Thinking aplicada de principio a fin.",
      steps: [
        {
          number: "01",
          title: "Discovery & Research",
          description:
            "Entrevistas con usuarios, análisis de métricas existentes y revisión de reclamos. Identificación de pain points clave en colaboración con el área de CX del banco.",
        },
        {
          number: "02",
          title: "Definición de Metodología",
          description:
            "Implementación de Design Thinking como marco de trabajo. Alineación con stakeholders y equipos de desarrollo sobre la importancia del proceso UX completo.",
        },
        {
          number: "03",
          title: "Benchmark & Ideación",
          description:
            "Análisis competitivo de plataformas bancarias. Propuesta y testeo de soluciones para diferentes segmentos de usuarios empresariales.",
        },
        {
          number: "04",
          title: "Design System & UI",
          description:
            "Adopción del Design System corporativo de Santander. Diseño de interfaces modernas, accesibles y consistentes con el nuevo estándar visual.",
        },
        {
          number: "05",
          title: "Desarrollo & Entrega",
          description:
            "Desarrollo frontend en Angular. Entrega del dashboard principal y definición de bases para la continuidad del proyecto por múltiples equipos.",
        },
      ],
      image: { src: "/img/s-ob_03.webp", alt: "Proceso de diseño" },
    },
    gallery: {
      intro: "Pantallas y flujos diseñados para la nueva plataforma OfficeBanking.",
      images: [
        "/img/s-ob-car_01.webp",
        "/img/s-ob-car_02.webp",
        "/img/s-ob-car_03.webp",
        "/img/s-ob-car_04.webp",
        "/img/s-ob-car_05.webp",
        "/img/s-ob-car_06.webp",
        "/img/s-ob-car_07.webp",
      ],
    },
    outcomes: {
      title: "Decisiones Clave",
      items: [
        {
          label: "Segmentación inteligente:",
          text: "Identificamos los puntos comunes entre todos los segmentos para responder globalmente, y separamos los flujos específicos para que usuarios que no los necesitaran nunca los vieran.",
        },
        {
          label: "Metodología sobre decoración:",
          text: 'Convencí a stakeholders de que el proyecto no era "diseñar pantallas", sino redefinir la experiencia completa. Esto permitió un Discovery profundo antes de cualquier diseño visual.',
        },
        {
          label: "Bases escalables:",
          text: "El dashboard y los lineamientos de diseño sentaron las bases para que múltiples equipos pudieran continuar desarrollando flujos internos de manera consistente.",
        },
      ],
    },
  },
  {
    slug: "marsol-aibomarket",
    eyebrow: "Marsol S.A. · 2024–2025",
    title: "Aibomarket",
    subtitle: "Marketplace gastronómico multimarca B2B",
    roles: ["Frontend Developer", "UX/UI"],
    heroImage: "/img/aibo_01.webp",
    heroAlt: "Aibomarket - Marketplace gastronómico",
    metrics: [
      { value: "1 año", label: "Duración del proyecto" },
      { value: "Multi", label: "Marcas soportadas" },
      { value: "NextJS", label: "Stack tecnológico" },
      { value: "B2B", label: "Modelo de negocio" },
    ],
    context: [
      "Aibomarket es un marketplace gastronómico cuyo foco principal es la venta en línea de equipamiento, suministros y servicios para negocios del área gastronómica.",
      "Además es una solución multimarca que permite la administración y customización de los componentes para cada una de las marcas asociadas.",
    ],
    challenge: [
      "Implementar mejoras de diseño y nuevos flujos de forma rápida y eficiente, en un contexto donde el producto debía escalar a múltiples marcas.",
      "Reducir la distancia entre diseño y producción, permitiendo que las decisiones de UX se reflejaran en el producto final con el menor retrabajo posible.",
    ],
    feature: {
      image: "/img/aibo_02.webp",
      imageAlt: "Componentes multimarca",
      eyebrow: "Multimarca",
      title: "Componentes escalables",
      paragraph:
        "El producto se volvió multimarca y los componentes debían poder estilarse según cada una de ellas, manteniendo consistencia visual y experiencia de usuario coherente en todos los casos.",
    },
    process: {
      intro: "Colaboración estrecha entre diseño y desarrollo para lograr entregas rápidas y consistentes.",
      steps: [
        {
          number: "01",
          title: "Colaboración con UX Lead",
          description:
            "Trabajo continuo con el UX Lead para definir detalles de interacción, jerarquía visual y comportamiento de componentes adaptables a múltiples marcas.",
        },
        {
          number: "02",
          title: "Validación Técnica",
          description:
            "Evaluación en conjunto con el equipo de Desarrollo para asegurar la viabilidad técnica de los diseños propuestos y su escalabilidad multimarca.",
        },
        {
          number: "03",
          title: "Análisis de Producto",
          description:
            "Análisis de cada vista desde una perspectiva de producto y sistema, no solo visual. Priorización de consistencia y mantenibilidad.",
        },
        {
          number: "04",
          title: "Desarrollo Frontend",
          description:
            "Desarrollo de vistas, landings internas y componentes en NextJS, estructurando en HTML5 y SASS, cuidando consistencia, mantenibilidad y performance.",
        },
        {
          number: "05",
          title: "Responsive & QA",
          description:
            "Validación constante de responsive design, asegurando una experiencia sólida en todos los dispositivos. Uso de IA para optimizar tiempos de desarrollo.",
        },
      ],
      image: { src: "/img/aibo_03.webp", alt: "Proceso de diseño Aibomarket" },
    },
    gallery: {
      intro: "Interfaces integradas al desarrollo, listas para producción, alineadas a diseño y negocio.",
      images: [
        "/img/aibo-car_01.webp",
        "/img/aibo-car_02.webp",
        "/img/aibo-car_03.webp",
        "/img/aibo-car_04.webp",
        "/img/aibo-car_05.webp",
        "/img/aibo-car_06.webp",
        "/img/aibo-car_07.webp",
      ],
    },
    outcomes: {
      title: "Valor Entregado",
      items: [
        {
          label: "Interfaces listas para producción:",
          text: "Componentes desarrollados directamente en NextJS, eliminando la brecha entre diseño y código y reduciendo fricción entre equipos.",
        },
        {
          label: "Sistema multimarca:",
          text: "Arquitectura de componentes que permite personalización visual por marca sin duplicar código, asegurando escalabilidad del producto.",
        },
        {
          label: "Desarrollo asistido por IA:",
          text: "Uso estratégico de herramientas de IA para optimizar tiempos de desarrollo y asegurar resultados de alta calidad en plazos ajustados.",
        },
      ],
    },
  },
  {
    slug: "neoris-wegrow",
    eyebrow: "Neoris · 2023",
    title: "WeGrow",
    subtitle: "Herramienta interna de evaluación, feedback y desarrollo profesional",
    roles: ["Diseñador UX", "Trabajo Colaborativo"],
    heroImage: "/img/n-wg_01.webp",
    heroAlt: "WeGrow - Plataforma de feedback",
    metrics: [
      { value: "MVP", label: "Tipo de entrega" },
      { value: "México", label: "Equipo distribuido" },
      { value: "Figma", label: "Herramienta principal" },
      { value: "2023", label: "Año" },
    ],
    context: [
      "NEORIS es un acelerador digital global y socio tecnológico que ayuda a grandes empresas a transformarse digitalmente, ofreciendo soluciones en consultoría, IA y gestión de datos.",
      "WeGrow nace como proyecto interno para generar una herramienta propia de evaluación y feedback, con la visión de convertirla eventualmente en un producto comercializable.",
    ],
    challenge: [
      "Crear una herramienta fácil de usar e intuitiva que permitiera a los usuarios dar y recibir feedback de manera efectiva, adaptable a diferentes equipos y roles.",
      "Generar un MVP en el menor tiempo posible con un equipo distribuido en múltiples ciudades de México, coordinando tareas y flujos entre diseñadores.",
    ],
    feature: {
      image: "/img/n-wg_02.webp",
      imageAlt: "Dashboard WeGrow",
      eyebrow: "Dashboard",
      title: "Vista general",
      paragraph:
        "El dashboard central permite a cada usuario visualizar su estado de evaluación, feedback pendiente y progreso profesional de manera clara y accesible.",
    },
    process: {
      intro: "Coordinación ágil entre equipos distribuidos para entregar un MVP de alta complejidad.",
      steps: [
        {
          number: "01",
          title: "Organización del Equipo",
          description:
            "Distribución de tareas y flujos entre diseñadores basados en distintas ciudades de México. Establecimiento de metodología de seguimiento y coordinación constante.",
        },
        {
          number: "02",
          title: "Levantamiento con PO",
          description:
            "Reuniones telemáticas regulares con la Product Owner para definir el producto. Levantamiento de requisitos y propuesta de flujos basados en las sesiones.",
        },
        {
          number: "03",
          title: "Diseño de Interfaces",
          description:
            "Diseño de interfaces para múltiples perfiles con atributos específicos: evaluadores, evaluados, administradores y líderes de equipo.",
        },
        {
          number: "04",
          title: "Coordinación Transversal",
          description:
            "Contacto permanente entre diseñadores para compartir soluciones implementables transversalmente y mantener consistencia en todos los flujos.",
        },
        {
          number: "05",
          title: "Entrega del MVP",
          description:
            "Entrega de un MVP funcional en tiempo récord, con la visión de que eventualmente se convirtiera en un producto comercializable.",
        },
      ],
    },
    gallery: {
      intro: "Pantallas y flujos diseñados para la plataforma WeGrow.",
      images: [
        "/img/n-wg-car_01.webp",
        "/img/n-wg-car_02.webp",
        "/img/n-wg-car_03.webp",
        "/img/n-wg-car_04.webp",
        "/img/n-wg-car_05.webp",
        "/img/n-wg-car_06.webp",
        "/img/n-wg-car_07.webp",
      ],
    },
    outcomes: {
      title: "Decisiones Clave",
      items: [
        {
          label: "Trabajo distribuido efectivo:",
          text: "Establecimos una metodología clara de coordinación que permitió a un equipo en múltiples ciudades avanzar en paralelo sin perder consistencia.",
        },
        {
          label: "Múltiples perfiles:",
          text: "Diseñamos flujos diferenciados para evaluadores, evaluados, administradores y líderes, cada uno con sus atributos y necesidades específicas.",
        },
        {
          label: "MVP con visión de producto:",
          text: "Aunque el objetivo inmediato era un MVP rápido, cada decisión de diseño se tomó pensando en la escalabilidad futura del producto.",
        },
      ],
    },
  },
  {
    slug: "neoris-etb",
    eyebrow: "ETB Colombia · Neoris · 2023",
    title: "Validación de Cobertura",
    subtitle: "Autovalidación de cobertura de fibra óptica para ETB en Bogotá",
    roles: ["Diseñador UX", "Negocio"],
    heroImage: "/img/n-etb_01.webp",
    heroAlt: "ETB - Validación de Cobertura",
    metrics: [
      { value: "Bogotá", label: "Ubicación del cliente" },
      { value: "Fibra", label: "Producto principal" },
      { value: "Figma", label: "Herramienta principal" },
      { value: "2023", label: "Año" },
    ],
    context: [
      "ETB es la principal empresa de telecomunicaciones de Bogotá, Colombia. Ofrece servicios de internet (fibra óptica), telefonía fija y móvil, y TV.",
      "El proyecto fue desarrollado a través de Neoris como socio tecnológico, con el equipo de diseño trabajando de forma remota con contrapartes técnicas en Colombia.",
    ],
    challenge: [
      "Redefinir el flujo de autovalidación de cobertura para potenciales clientes de fibra óptica en Bogotá, donde las direcciones tienen un formato particular y complejo.",
      "Un dato incorrecto podía significar equivocar la evaluación de cobertura o no llegar al domicilio del cliente para la instalación.",
    ],
    feature: {
      image: "/img/n-etb_02.webp",
      imageAlt: "Inicio del flujo de validación",
      eyebrow: "Flujo",
      title: "Inicio de validación",
      paragraph:
        "Se priorizó la geolocalización como primer paso del flujo, pero siempre permitiendo que el usuario pudiera complementar o registrar manualmente su información para máxima precisión.",
    },
    process: {
      intro: "Investigación profunda y diseño iterativo para un problema de alta complejidad técnica.",
      steps: [
        {
          number: "01",
          title: "Levantamiento de Información",
          description:
            "Recabar información sobre el manejo actual del ingreso de direcciones, entender los mayores puntos de fricción y las particularidades del formato de direcciones colombiano.",
        },
        {
          number: "02",
          title: "Benchmark Competitivo",
          description:
            "Análisis de cómo otras empresas del rubro o similares enfrentaban la problemática de validación de direcciones y cobertura de servicios.",
        },
        {
          number: "03",
          title: "Alineación con Stakeholders",
          description:
            "Conversaciones con stakeholders para entender el ideal y los criterios de aceptación. Definición clara de objetivos y restricciones del proyecto.",
        },
        {
          number: "04",
          title: "Diseño de Flujo",
          description:
            "Diseño iterativo del flujo de validación, con validación técnica constante con contraparte en Colombia. Prioridad en geolocalización con fallback manual.",
        },
        {
          number: "05",
          title: "Diseño de Interfaces",
          description:
            "Diseño de interfaces intuitivas para un proceso complejo, permitiendo al usuario complementar o registrar manualmente su información cuando fuera necesario.",
        },
      ],
    },
    gallery: {
      intro: "Pantallas del flujo de validación de cobertura para ETB Colombia.",
      images: [
        "/img/n-etb-car_01.webp",
        "/img/n-etb-car_02.webp",
        "/img/n-etb-car_03.webp",
        "/img/n-etb-car_04.webp",
        "/img/n-etb-car_05.webp",
        "/img/n-etb-car_06.webp",
        "/img/n-etb-car_07.webp",
      ],
    },
    outcomes: {
      title: "Decisiones Clave",
      items: [
        {
          label: "Geolocalización primero:",
          text: "Se priorizó la geolocalización como método principal de ingreso, reduciendo errores y facilitando el proceso para el usuario.",
        },
        {
          label: "Fallback manual intuitivo:",
          text: "Para casos donde la geolocalización no fuera suficiente, se diseñó un sistema de ingreso manual que guía al usuario paso a paso por el formato colombiano.",
        },
        {
          label: "Validación iterativa:",
          text: "Cada decisión de diseño fue validada con la contraparte técnica en Colombia, asegurando factibilidad y cumplimiento del objetivo de negocio.",
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string | undefined): ProjectDetail | undefined {
  return projects.find((project) => project.slug === slug);
}
