import type { Lang } from "@/i18n/types";
import { projectsEn } from "./projects.en";

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
  /** Summary shown on the home page project card */
  card: {
    description: string;
    tags: string[];
    featured?: boolean;
    metrics?: Metric[];
  };
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

/**
 * Translatable text fields of a project, keyed by slug in projects.en.ts.
 * Structural fields (slug, images, step numbers, featured flag) are NOT here —
 * they live once in the Spanish source below and are shared across languages.
 */
export interface ProjectTranslation {
  title?: string;
  eyebrow?: string;
  heroAlt?: string;
  subtitle: string;
  roles: string[];
  metrics: Metric[];
  card: { description: string; tags: string[]; metrics?: Metric[] };
  context: string[];
  challenge: string[];
  feature: { imageAlt?: string; eyebrow: string; title: string; paragraph: string };
  process: { intro: string; steps: { title: string; description: string }[] };
  gallery: { intro: string };
  outcomes: { title: string; items: { label: string; text: string }[] };
}

export const projects: ProjectDetail[] = [
  {
    slug: "carteleria-digital",
    eyebrow: "Proyecto Personal · 2026",
    title: "Cartelería Digital",
    subtitle: "Plataforma SaaS para gestionar redes de pantallas digitales desde un panel centralizado, sin visitar cada dispositivo físicamente",
    roles: ["Diseño","Implementación", "Arquitectura", "UX/UI", "Claude AI"],
    heroImage: "/img/dsp_01.webp",
    heroAlt: "Cartelería Digital SaaS - Panel de administración",
    card: {
      description:
        "SaaS de cartelería digital. Aplicación alojada en Render, BD Neon PostgreSQL y Cloudflare R2 para almacenamiento",
      tags: ["End to end", "React", "Claude AI", "TypeScript", "SaaS"],
      metrics: [
        { value: "Multi-tenant", label: "Arquitectura" },
        { value: "Monorepo", label: "Estructura" },
      ],
    },
    metrics: [
      { value: "Multi-tenant", label: "Arquitectura SaaS" },
      { value: "4 apps", label: "En un monorepo" },
      { value: "Persistencia", label: "Clientes offline-first" },
      { value: "End-to-End", label: "diseño -> implementación" },
    ],
    context: [
      "Las empresas con redes de pantallas físicas (retail, restaurantes, aeropuertos, clínicas, etc.) enfrentan el mismo problema: actualizar el contenido de cada pantalla implica ir hasta el lugar, conectar un pendrive o acceder remotamente a cada equipo de forma individual. Cuando tienes múltiples dispositivos, eso no escala.",
      "DigiSignage nació como un proyecto personal para resolver ese problema de raíz: una plataforma SaaS completa donde el contenido se gestiona desde un panel central y cada pantalla lo recibe automáticamente, sin intervención manual.",
    ],
    challenge: [
      "Diseñar y construir un sistema donde el panel web, el servidor y los clientes reproductores de contenido (dispositivos de escritorio, android y smartTVs) compartan contratos de datos sin duplicar lógica, funcionen de manera independiente y soporten múltiples empresas con sus propios usuarios, dispositivos y contenidos aislados entre sí.",
      "El cliente de pantalla debía ser offline-first: seguir reproduciendo el último contenido conocido aunque no tenga conexión a internet, y sincronizar automáticamente cuando volviera la conexión.",
    ],
    feature: {
      image: "/img/dsp_02.webp",
      imageAlt: "Editor visual de layouts por zonas",
      eyebrow: "Editor de layouts",
      title: "Múltiples zonas de contenido",
      paragraph:
        "El corazón del producto es el editor visual de dispositivos: cada pantalla puede dividirse en 1, 2 o 4 zonas independientes. Cada zona acepta un widget distinto (video, imágenes, reloj o clima) con su propia playlist y configuración. El contenido se arrastra y reordena con drag-and-drop, y el reproductor lo refleja en tiempo real.",
    },
    process: {
      intro: "De un problema concreto a un producto SaaS completo, construido con arquitectura de monorepo y TypeScript end-to-end.",
      steps: [
        {
          number: "01",
          title: "Arquitectura Monorepo con Turborepo",
          description:
            "El proyecto vive en un único repositorio con cuatro aplicaciones (server, web, desktop, android) y tres paquetes compartidos (shared, player, config). Turborepo orquesta los builds de forma incremental y en paralelo. Esto permitió que los contratos de datos, la configuración de TypeScript y las reglas de ESLint sean un único source of truth para todas las apps.",
        },
        {
          number: "02",
          title: "Contratos compartidos con Zod",
          description:
            "El problema clásico de los proyectos full stack es el drift entre lo que el servidor envía y lo que el cliente espera. En DigiSignage Pro, todos los esquemas de dominio (dispositivos, layouts, heartbeats, medios) viven en el paquete shared como schemas Zod. El servidor los usa para validar, el cliente web los usa para tipar, y el reproductor los consume directamente. Un solo cambio de esquema propaga al sistema entero.",
        },
        {
          number: "03",
          title: "API REST + Autenticación Multi-tenant",
          description:
            "El backend en Express + TypeScript implementa autenticación con JWT en cookies httpOnly, roles por empresa (super_admin, admin, operador) y aislamiento estricto por empresaId en todas las queries. Los medios se suben directamente al bucket R2/S3 con presigned URLs generadas por el servidor, evitando que el tráfico de archivos pase por él.",
        },
        {
          number: "04",
          title: "Panel Web en React con editor visual",
          description:
            "El panel de administración está construido con React 18, Vite, TanStack Query y shadcn/ui. Incluye dashboard de dispositivos con estado online/offline en tiempo real, biblioteca de medios con carga por drag-drop y detección de conflictos al eliminar, editor de layouts con @dnd-kit para reordenar playlists, y gestión de usuarios y empresas.",
        },
        {
          number: "05",
          title: "Cliente Electron offline-first",
          description:
            "Cada pantalla física corre un cliente Electron que, al primer arranque, muestra un código de 8 dígitos para vincularse al panel. Una vez vinculado, sincroniza el layout y descarga los medios al disco local. Protocolos personalizados (media://, img://) sirven los archivos sin CORS. Si el servidor no está disponible, el dispositivo sigue reproduciendo el último estado conocido.",
        },
        {
          number: "06",
          title: "Reproductor vanilla JS sin dependencias de framework",
          description:
            "El reproductor que corre en las pantallas es un módulo vanilla JS sin React ni Vue. Esto lo hace embebible en el cliente Electron, en el preview del panel web y eventualmente en un WebView de Android, sin overhead de framework. CSS Grid maneja las zonas de layout, y los widgets (video, imágenes, reloj, clima) se montan y desmontan dinámicamente según la configuración recibida.",
        },
      ],
    },
    gallery: {
      intro:
        "El resultado es un sistema SaaS completo que cubre todo el ciclo: alta de empresa, vinculación de pantallas con código de emparejamiento, carga de contenido, diseño de layout por zonas y distribución automática a cada dispositivo. La arquitectura monorepo con contratos Zod garantiza que cualquier cambio de dominio se propague de forma segura a las cuatro aplicaciones.",
      images: [
        "/img/dsp-car_01.webp",
        "/img/dsp-car_02.webp",
        "/img/dsp-car_03.webp",
        "/img/dsp-car_04.webp",
        "/img/dsp-car_05.webp",
        "/img/dsp-car_06.webp",
      ],
    },
    outcomes: {
      title: "Decisiones Clave",
      items: [
        {
          label: "Monorepo desde el día cero:",
          text: "Arrancar con Turborepo y pnpm workspaces fue la decisión más importante del proyecto. Permitió que el reproductor, el panel y el servidor compartan lógica sin duplicar código y que los builds sean incrementales. La deuda técnica que hubiera acumulado un proyecto multi-repo se eliminó antes de existir.",
        },
        {
          label: "Zod como fuente única de verdad:",
          text: "Definir todos los contratos de dominio en schemas Zod compartidos —y no en tipos TypeScript separados por app— eliminó la categoría entera de bugs de desincronización entre frontend y backend. Cualquier cambio de esquema falla en compilación, no en producción.",
        },
        {
          label: "Reproductor sin framework:",
          text: "La decisión de escribir el reproductor en vanilla JS fue contraintuitiva pero correcta: el mismo código corre en Electron, en el preview del panel web y está listo para un WebView de Android sin modificaciones. Un reproductor con React hubiera requerido tres adaptaciones distintas.",
        },
      ],
    },
  },
  {
    slug: "retail-media-negociaciones",
    eyebrow: "Caso Práctico · 2026",
    title: "Módulo de Negociaciones",
    subtitle: "Diseño de un módulo para centralizar y dar trazabilidad al ciclo de vida de negociaciones comerciales dentro de una plataforma interna de Retail Media",
    roles: ["Product Designer", "Discovery", "Research", "Diseño de flujos", "Prototipo funcional"],
    heroImage: "/img/rm-neg_01.webp",
    heroAlt: "Módulo de Negociaciones - Listado con gestión de estados",
    card: {
      description:
        "Propuesta end-to-end para eliminar la fragmentación en Excel/email/WhatsApp y centralizar las negociaciones comerciales en la plataforma interna de Retail Media.",
      tags: ["Product Design", "Research", "Flujos As-Is/To-Be", "Roadmap MVP"],
      metrics: [
        { value: "3 días", label: "Tiempo de entrega" },
        { value: "E2E", label: "Proceso" },
      ],
    },
    metrics: [
      { value: "3 días", label: "Tiempo de entrega" },
      { value: "5 insights", label: "Del research exploratorio" },
      { value: "< 15%", label: "Meta de discrepancias" },
      { value: "< 10 min", label: "Para reconstruir un acuerdo" },
    ],
    context: [
      "Retail Media es una estrategia publicitaria donde los retailers comercializan espacios dentro de sus propios canales digitales y físicos, permitiendo a las marcas impactar a consumidores con datos propios para segmentar audiencias y medir resultados con mayor precisión.",
      "El equipo comercial (Category Managers y Product Managers) opera con una plataforma interna que cubre gran parte del ciclo de vida de las campañas, desde la creación de propuestas hasta la coordinación con operaciones para su activación.",
    ],
    challenge: [
      "La plataforma no contemplaba un flujo estructurado para gestionar las negociaciones comerciales. Las condiciones se acordaban por email y WhatsApp, los archivos se versionaban a mano y las aprobaciones del supervisor se daban de forma verbal o por chat, sin ningún registro.",
      "Esto generaba una brecha crítica: fragmentación de información, falta de trazabilidad, errores en la activación de campañas y dificultades para coordinar el trabajo entre las áreas involucradas.",
    ],
    feature: {
      image: "/img/rm-neg_02.webp",
      imageAlt: "Flujo As-Is: negociación fuera del sistema",
      eyebrow: "El problema",
      title: "Negociación fuera del sistema",
      paragraph:
        "El proceso de negociación ocurría completamente fuera de la plataforma: propuestas en Excel, iteraciones por email y WhatsApp, aprobaciones informales por chat y, al final, una transcripción manual al sistema. Cada rechazo generaba un loop sin trazabilidad, y el dato llegaba al sistema solo en el último paso, con alto riesgo de error.",
    },
    process: {
      intro: "Un proceso completo desde la hipótesis hasta el wireframe, entregado en 3 días hábiles.",
      steps: [
        {
          number: "01",
          title: "Definición de hipótesis",
          description:
            "Antes de hablar con usuarios, planteé 5 hipótesis sobre el problema: gestión fuera del sistema, errores que llegan a la activación, aprobaciones sin formalizar y necesidad de visibilidad del pipeline. Esto orientó el research y permitió validar o descartar cada supuesto con evidencia.",
        },
        {
          number: "02",
          title: "Research exploratorio",
          description:
            "Research simulado con método real: 5 entrevistas en profundidad, 2 contextual inquiries y revisión de 8 negociaciones cerradas con 7 participantes (3 Category Managers, 2 Product Managers, 2 Supervisores). El objetivo fue mapear el proceso real y cuantificar el costo de gestionarlo fuera del sistema.",
        },
        {
          number: "03",
          title: "Síntesis e insights",
          description:
            "A partir de los clusters de afinidad identifiqué 5 insights clave: cada persona tenía su propia «versión de la verdad», las aprobaciones eran informales y se perdían, reconstruir un acuerdo tomaba ~2,5 horas, el traspaso a operaciones era donde se cometían los errores, y los supervisores no tenían visibilidad del pipeline.",
        },
        {
          number: "04",
          title: "Oportunidades y validación",
          description:
            "Traduje los insights en 4 preguntas HMW: fuente única de verdad, aprobación trazable, seguimiento de estados en tiempo real y eliminación de la transcripción manual. Validé las 5 hipótesis: 3 completamente confirmadas, 1 parcial a medir en testing y 1 nueva hipótesis emergente sobre visibilidad del pipeline.",
        },
        {
          number: "05",
          title: "Priorización y Roadmap MVP",
          description:
            "Prioricé las épicas por impacto/esfuerzo y definí el alcance con MoSCoW: el MVP (Now) incluye ficha de negociación, gestión de estados, historial de versiones, workflow de aprobación con motivo y audit trail básico. El plan se completa con fases Next y Later ancladas a métricas medibles desde el research.",
        },
        {
          number: "06",
          title: "Flujos As-Is / To-Be y wireframes",
          description:
            "Documenté el flujo actual (As-Is) con sus 2 loops de iteración sin trazabilidad y lo contrasté con el flujo propuesto (To-Be), donde cada paso queda registrado con su estado, las iteraciones generan versiones automáticas y el traspaso a operaciones es directo. Entregué wireframes lo-fi del listado de negociaciones, ficha de condiciones, historial de versiones y flujo de aprobación.",
        },
      ],
    },
    gallery: {
      intro:
        "El diseño propuesto traslada todo el ciclo de negociación dentro de la plataforma: desde la creación de la negociación hasta el traspaso automático a operaciones, con trazabilidad completa y una máquina de estados visible en tiempo real. La línea base del research (3/8 discrepancias · 2,5 h por reconstrucción · 0% de aprobaciones formales) define las métricas de éxito medibles post-lanzamiento.",
      images: [
        "/img/rm-neg-car_01.webp",
        "/img/rm-neg-car_02.webp",
        "/img/rm-neg-car_03.webp",
        "/img/rm-neg-car_04.webp",
      ],
    },
    outcomes: {
      title: "Decisiones Clave",
      items: [
        {
          label: "Research antes que pantallas:",
          text: "Propuse no diseñar ninguna interfaz sin antes validar el problema con evidencia. El research confirmó que la brecha no era visual sino estructural: el flujo de negociación no existía dentro del sistema. Esto orientó todo el scope del MVP.",
        },
        {
          label: "Métricas ancladas a la línea base:",
          text: "Cada KPI del roadmap tiene su contraparte en el research (discrepancias, tiempo de reconstrucción, aprobaciones formales), lo que permite demostrar impacto de negocio post-lanzamiento y no solo mejora percibida.",
        },
        {
          label: "MVP que resuelve la causa raíz:",
          text: "En lugar de agregar features, el MVP ataca los 3 insights de mayor impacto y menor esfuerzo (fuente única de verdad, trazabilidad de aprobaciones, gestión de estados). El traspaso automático se difiere a Next para no bloquear el lanzamiento con integraciones complejas.",
        },
      ],
    },
  },
  {
    slug: "santander-officebanking",
    eyebrow: "Banco Santander · 2021–2023",
    title: "OfficeBanking",
    subtitle: "Transformación completa de la plataforma para clientes segmento empresas de Banco Santander",
    roles: ["Diseñador UX", "Discovery", "Diseño", "Frontend"],
    heroImage: "/img/s-ob_01.webp",
    heroAlt: "OfficeBanking - Nueva plataforma",
    card: {
      description:
        "Transformación completa de la plataforma para clientes segmento empresas de Banco Santander. Desde Discovery hasta implementación frontend.",
      tags: ["End to End", "Design Thinking", "UX/UI", "Research", "Angular"],
      featured: false,
      metrics: [
        { value: "2 años", label: "Duración" },
        { value: "Múltiples", label: "Segmentos" },
      ],
    },
    metrics: [
      { value: "2 años", label: "Duración del proyecto" },
      { value: "Múltiples", label: "Segmentos de clientes" },
      { value: "100%", label: "Renovación visual" },
      { value: "Angular", label: "Stack tecnológico" },
    ],
    context: [
      "Banco Santander es uno de los bancos más grandes a nivel mundial. En Chile cuenta con un porcentaje mayoritario del mercado de clientes del Segmento Empresa.",
      "Este segmento incluye desde pequeños negocios hasta los holdings más grandes del país, todos transaccionando desde una misma plataforma: OfficeBanking.",
    ],
    challenge: [
      "Transformar una plataforma con años en el mercado, arquitectura compleja con importante deuda técnica y múltiples funcionalidades, en una solución moderna, intuitiva y accesible.",
      "La diversidad de usuarios, implicaba que la plataforma debía ser capaz de adaptarse a las diferentes necesidades y comportamientos de estos usuarios tan disímiles.",
    ],
    feature: {
      image: "/img/s-ob_02.webp",
      imageAlt: "Versión anterior de OfficeBanking",
      eyebrow: "Antes",
      title: "Plataforma anterior",
      paragraph:
        "La versión previa presentaba una interfaz anticuada con deuda técnica significativa. Santander decidió renovar tanto el stack tecnológico como la experiencia de usuario completa.",
    },
    process: {
      intro: "Un proceso End to End desde Discovery hasta implementación en Desarrollo.",
      steps: [
        {
          number: "01",
          title: "Definición de Metodología",
          description:
            "Implementación de Design Thinking como marco de trabajo para el proceso inicial. Alineación con stakeholders y equipo de desarrollo sobre la importancia del proceso UX completo para este proyecto tan amplio y complejo.",
        },
        {
          number: "02",
          title: "Discovery & Research",
          description:
            "Entrevistas con usuarios, stakeholders y equipo de desarrollo. Análisis de métricas existentes y revisión de reclamos. Identificación de pain points clave en colaboración con el área de CX del banco.",
        },
        {
          number: "03",
          title: "Benchmark, Ideación y Testeo",
          description:
            "Análisis competitivo de diversas plataformas bancarias y sus funcionalidades para el segmento empresarial. Propuesta y testeo de soluciones con diferentes segmentos de usuarios empresariales.",
        },
        {
          number: "04",
          title: "Mejora de Flujos, Design System & UI",
          description:
            "Mejora de flujos y perfilamiento para los diversos segmentos de usuarios. Adopción del Design System corporativo de Santander, diseño de interfaces modernas, accesibles y consistentes con el nuevo estándar visual.",
        },
        {
          number: "05",
          title: "Maquetación, Handoff a Desarrollo & Entrega Contínua",
          description:
            "Una vez aprobadas las interfaces de cada flujo, las maqueteaba para entregarlas avanzadas al equipo de desarrollo y así acelerar el proceso. Se definió un MVP y se fueron entregando las funcionalidades por etapas, permitiendo una implementación incremental y eficiente.",
        },
      ],
    },
    gallery: {
      intro:
        "Desde lo técnico se renovó el stack tecnológico y se eliminó la deuda técnica, entregando un producto más estable y escalable, que además pasó a ser la base para la continuidad del proyecto por parte de múltiples equipos para la evolución del resto de los flujos internos. Desde la experiencia de usuario, se logró una plataforma moderna, intuitiva y accesible, que se adapta a las necesidades de los diversos segmentos de clientes empresa.",
      images: [
        "/img/s-ob-car_01.webp",
        "/img/s-ob-car_02.webp",
        "/img/s-ob-car_03.webp",
        "/img/s-ob-car_04.webp",
        "/img/s-ob-car_05.webp",
        "/img/s-ob-car_06.webp",
      ],
    },
    outcomes: {
      title: "Decisiones Clave",
      items: [
        {
          label: "Metodología sobre estética:",
          text: 'Argumenté frente a stakeholders de que el proyecto no era "diseñar pantallas", sino redefinir la experiencia completa. Esto permitió un Discovery profundo antes de cualquier diseño visual, lo cual terminó resultando en un proyecto robusto y exitoso que se terminó convirtiendo en la base para la continuidad de la transformación del Office Banking.',
        },
        {
          label: "Segmentación inteligente:",
          text: "Identificar los puntos comunes entre todos los segmentos para responder globalmente, y perfilar los flujos específicos para que usuarios que no los necesitaran nunca los vieran.",
        },
        {
          label: "Bases escalables:",
          text: "El login, vista selección perfil empresa, dashboard, etc. se realizaron en base a lineamientos de diseño y desarrollo que sentaron las bases para que múltiples equipos pudieran continuar desarrollando flujos internos de manera consistente.",
        },
      ],
    },
  },
  {
    slug: "marsol-aibomarket",
    eyebrow: "Marsol S.A. · 2024–2025",
    title: "Aibomarket",
    subtitle: "Marketplace gastronómico multimarca B2B",
    roles: ["UX/UI Designer", "Frontend"],
    heroImage: "/img/aibo_01.webp",
    heroAlt: "Aibomarket - Marketplace gastronómico",
    card: {
      description:
        "Marketplace gastronómico B2B. Desarrollo frontend con NextJS y definición UX colaborativa.",
      tags: ["UX/UI", "NextJS", "Figma", "Multimarca"],
    },
    metrics: [
      { value: "2 años", label: "de participación" },
      { value: "Figma", label: "Diseño y Prototipado" },
      { value: "NextJS", label: "Frontend Framework" },
      { value: "B2B", label: "Modelo de negocio" },
    ],
    context: [
      "Aibomarket es un marketplace gastronómico cuyo foco principal es la venta en línea de equipamiento, suministros y servicios para negocios del área gastronómica.",
      "Además, evolucionó para convertirse en una solución multimarca que permite la administración y customización de los componentes para cada una de las marcas asociadas.",
    ],
    challenge: [
      "Junto al UX Lead implementar mejoras de diseño y nuevos flujos de forma rápida y eficiente, en un contexto donde el producto debía escalar a múltiples marcas.",
      "Reducir la fricción entre diseño y producción, colaborando con la implementación de las mejoras de diseño en el aplicativo, formando parte del equipo de frontend, de ésta forma las decisiones de UX se reflejaran en el producto final rápidamente y con el menor retrabajo posible.",
    ],
    feature: {
      image: "/img/aibo_02.webp",
      imageAlt: "Componentes multimarca",
      eyebrow: "Multimarca",
      title: "Componentes escalables",
      paragraph:
        "El producto se volvió multimarca y los componentes debían poder estilarse según cada una de ellas, manteniendo consistencia visual y experiencia de usuario coherente en todos los casos. Lo cual significó un desafío adicional, ya que no solo se trataba de diseñar y desarrollar componentes, sino de hacerlo pensando en su adaptabilidad y escalabilidad para múltiples marcas sin duplicar código sino que customizándolos a partir de clases, de manera tal que la funcionalidad estaba separada del estilo.",
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
            "Desarrollo de vistas, landings internas y componentes en NextJS, estructurando en HTML5 y SASS, cuidando consistencia, mantenibilidad y performance. Uso de IA para optimizar tiempos de desarrollo.",
        },
        {
          number: "05",
          title: "Responsive & UX QA",
          description:
            "Validación constante de responsive design y soporte multinavegador, asegurando una experiencia sólida en todos los dispositivos.",
        },
      ],
      image: { src: "/img/aibo_03.webp", alt: "Proceso de diseño Aibomarket" },
    },
    gallery: {
      intro: "Interfaces integradas al desarrollo, listas para producción, alineadas a diseño y negocio.",
      images: [
        "/img/aibo-car_01.webp",
        "/img/aibo-car_02.webp",
        "/img/aibo-car_07.webp",
        "/img/aibo-car_03.webp",
        "/img/aibo-car_04.webp",
        "/img/aibo-car_06.webp",
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
    roles: ["Diseñador UX", "Proyecto Interno", "Trabajo Colaborativo"],
    heroImage: "/img/n-wg_01.webp",
    heroAlt: "WeGrow - Plataforma de feedback",
    card: {
      description:
        "Plataforma de gestión de feedback corporativo con enfoque colaborativo para equipos distribuidos.",
      tags: ["UX/UI", "Figma", "Colaborativo"],
    },
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
        "El dashboard central permite a cada usuario visualizar su estado en cuanto a evaluaciones por realizar, feedback recibido y progreso profesional de manera clara y accesible.",
    },
    process: {
      intro: "Coordinación ágil entre equipos distribuidos para entregar un MVP que cumpla con las necesidades de un proyecto de alta complejidad.",
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
    card: {
      description:
        "Autovalidación de cobertura de fibra óptica para la principal operadora de telecomunicaciones de Bogotá.",
      tags: ["UX/UI", "Figma", "Negocio"],
    },
    metrics: [
      { value: "Bogotá", label: "Ubicación del cliente" },
      { value: "Fibra", label: "Producto principal" },
      { value: "Figma", label: "Herramienta principal" },
      { value: "2023", label: "Año" },
    ],
    context: [
      "ETB es la principal empresa de telecomunicaciones de Bogotá, Colombia. Ofrece servicios de internet (fibra óptica), telefonía fija y móvil, y TV.",
      "El proyecto fue desarrollado a través de Neoris como socio tecnológico, y yo como UX trabajando de forma remota con contrapartes técnicas en Colombia.",
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
          text: "Para casos donde la geolocalización no fuera suficiente, se diseñó un sistema de ingreso manual que guía al usuario paso a paso.",
        },
        {
          label: "Validación iterativa:",
          text: "Cada decisión de diseño fue validada con la contraparte técnica, asegurando factibilidad y cumplimiento del objetivo de negocio.",
        },
      ],
    },
  },
];

/** Overlays the English translation onto the Spanish base, keeping structural fields shared. */
function mergeProject(base: ProjectDetail, t: ProjectTranslation): ProjectDetail {
  return {
    ...base,
    title: t.title ?? base.title,
    eyebrow: t.eyebrow ?? base.eyebrow,
    heroAlt: t.heroAlt ?? base.heroAlt,
    subtitle: t.subtitle,
    roles: t.roles,
    metrics: base.metrics.map((m, i) => ({ ...m, ...t.metrics[i] })),
    card: {
      ...base.card,
      description: t.card.description,
      tags: t.card.tags,
      metrics: t.card.metrics ?? base.card.metrics,
    },
    context: t.context,
    challenge: t.challenge,
    feature: {
      ...base.feature,
      imageAlt: t.feature.imageAlt ?? base.feature.imageAlt,
      eyebrow: t.feature.eyebrow,
      title: t.feature.title,
      paragraph: t.feature.paragraph,
    },
    process: {
      ...base.process,
      intro: t.process.intro,
      steps: base.process.steps.map((s, i) => ({
        ...s,
        title: t.process.steps[i].title,
        description: t.process.steps[i].description,
      })),
    },
    gallery: { ...base.gallery, intro: t.gallery.intro },
    outcomes: {
      title: t.outcomes.title,
      items: base.outcomes.items.map((item, i) => ({
        ...item,
        label: t.outcomes.items[i].label,
        text: t.outcomes.items[i].text,
      })),
    },
  };
}

function localize(base: ProjectDetail, lang: Lang): ProjectDetail {
  if (lang === "es") return base;
  const translation = projectsEn[base.slug];
  return translation ? mergeProject(base, translation) : base;
}

/** All projects in the requested language (Spanish is the source of truth). */
export function getProjects(lang: Lang = "es"): ProjectDetail[] {
  return projects.map((project) => localize(project, lang));
}

export function getProjectBySlug(slug: string | undefined, lang: Lang = "es"): ProjectDetail | undefined {
  const base = projects.find((project) => project.slug === slug);
  return base ? localize(base, lang) : undefined;
}
