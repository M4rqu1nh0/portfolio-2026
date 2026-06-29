import type { ProjectTranslation } from "./projects";

/**
 * English translation overlay, keyed by project slug.
 *
 * DRAFT — machine-assisted translation pending review by Marco.
 * Only translatable text lives here; structural fields (slug, images, step
 * numbers, featured flag) stay in projects.ts as the single source of truth.
 * Array lengths MUST match the Spanish base (metrics, process.steps,
 * outcomes.items) — enforced by projects.test.ts.
 */
export const projectsEn: Record<string, ProjectTranslation> = {
  "santander-officebanking": {
    subtitle: "Complete transformation of the platform for Banco Santander's enterprise-segment clients",
    roles: ["UX Designer", "Discovery", "Design", "Frontend"],
    metrics: [
      { value: "2 years", label: "Project duration" },
      { value: "Multiple", label: "Client segments" },
      { value: "100%", label: "Visual overhaul" },
      { value: "Angular", label: "Tech stack" },
    ],
    card: {
      description:
        "Complete transformation of Banco Santander's enterprise platform. From Discovery to frontend implementation.",
      tags: ["End to End", "Design Thinking", "UX/UI", "Research", "Angular"],
      metrics: [
        { value: "2 years", label: "Duration" },
        { value: "Multiple", label: "Segments" },
      ],
    },
    context: [
      "Banco Santander is one of the largest banks in the world. In Chile it holds a majority share of the enterprise-segment client market.",
      "This segment ranges from small businesses to the country's largest holdings, all transacting on a single platform: OfficeBanking.",
    ],
    challenge: [
      "Transform a platform with years in the market, a complex architecture carrying significant technical debt and many features, into a modern, intuitive and accessible solution.",
      "The diversity of users meant the platform had to be able to adapt to the different needs and behaviors of these very dissimilar users.",
    ],
    feature: {
      imageAlt: "Previous version of OfficeBanking",
      eyebrow: "Before",
      title: "Previous platform",
      paragraph:
        "The previous version had a dated interface with significant technical debt. Santander decided to renew both the tech stack and the entire user experience.",
    },
    process: {
      intro: "An end-to-end process from Discovery through development implementation.",
      steps: [
        {
          title: "Methodology Definition",
          description:
            "Implementing Design Thinking as the framework for the initial process. Aligning stakeholders and the development team on the importance of a full UX process for such a broad and complex project.",
        },
        {
          title: "Discovery & Research",
          description:
            "Interviews with users, stakeholders and the development team. Analysis of existing metrics and review of complaints. Identification of key pain points in collaboration with the bank's CX area.",
        },
        {
          title: "Benchmark, Ideation & Testing",
          description:
            "Competitive analysis of various banking platforms and their features for the enterprise segment. Proposing and testing solutions with different segments of business users.",
        },
        {
          title: "Flow Improvement, Design System & UI",
          description:
            "Improving flows and profiling for the different user segments. Adopting Santander's corporate Design System, designing modern, accessible interfaces consistent with the new visual standard.",
        },
        {
          title: "Layout, Handoff to Development & Continuous Delivery",
          description:
            "Once each flow's interfaces were approved, I built them out to hand them off ready to the development team and speed up the process. An MVP was defined and features were delivered in stages, enabling an incremental and efficient rollout.",
        },
      ],
    },
    gallery: {
      intro:
        "On the technical side, the tech stack was renewed and technical debt removed, delivering a more stable and scalable product that also became the foundation for the project's continuity by multiple teams evolving the rest of the internal flows. On the experience side, we achieved a modern, intuitive and accessible platform that adapts to the needs of the different enterprise client segments.",
    },
    outcomes: {
      title: "Key Decisions",
      items: [
        {
          label: "Methodology over aesthetics:",
          text: 'I argued to stakeholders that the project wasn\'t about "designing screens" but about redefining the entire experience. This allowed a deep Discovery before any visual design, which ended up resulting in a robust and successful project that became the foundation for the continuity of the Office Banking transformation.',
        },
        {
          label: "Smart segmentation:",
          text: "Identifying the common points across all segments to address them globally, and profiling the specific flows so users who didn't need them never saw them.",
        },
        {
          label: "Scalable foundations:",
          text: "The login, company-profile selection view, dashboard, etc. were built on design and development guidelines that laid the groundwork for multiple teams to keep building internal flows consistently.",
        },
      ],
    },
  },
  "marsol-aibomarket": {
    subtitle: "Multi-brand B2B food-service marketplace",
    roles: ["UX/UI Designer", "Frontend"],
    metrics: [
      { value: "2 years", label: "of involvement" },
      { value: "Figma", label: "Design & Prototyping" },
      { value: "NextJS", label: "Frontend Framework" },
      { value: "B2B", label: "Business model" },
    ],
    card: {
      description: "B2B food-service marketplace. Frontend development with NextJS and collaborative UX definition.",
      tags: ["UX/UI", "NextJS", "Figma", "Multi-brand"],
    },
    context: [
      "Aibomarket is a food-service marketplace whose main focus is the online sale of equipment, supplies and services for businesses in the gastronomy sector.",
      "It also evolved into a multi-brand solution that allows managing and customizing the components for each of the associated brands.",
    ],
    challenge: [
      "Alongside the UX Lead, implement design improvements and new flows quickly and efficiently, in a context where the product had to scale to multiple brands.",
      "Reduce the friction between design and production, collaborating on the implementation of design improvements in the app as part of the frontend team, so that UX decisions were reflected in the final product quickly and with the least possible rework.",
    ],
    feature: {
      imageAlt: "Multi-brand components",
      eyebrow: "Multi-brand",
      title: "Scalable components",
      paragraph:
        "The product became multi-brand and the components had to be styleable for each one, keeping visual consistency and a coherent user experience in every case. This was an added challenge, since it wasn't only about designing and developing components, but doing so with their adaptability and scalability for multiple brands in mind — without duplicating code, customizing them through classes so that functionality was separated from style.",
    },
    process: {
      intro: "Close collaboration between design and development to achieve fast, consistent deliveries.",
      steps: [
        {
          title: "Collaboration with UX Lead",
          description:
            "Continuous work with the UX Lead to define interaction details, visual hierarchy and the behavior of components adaptable to multiple brands.",
        },
        {
          title: "Technical Validation",
          description:
            "Joint assessment with the Development team to ensure the technical feasibility of the proposed designs and their multi-brand scalability.",
        },
        {
          title: "Product Analysis",
          description:
            "Analyzing each view from a product and systems perspective, not just visual. Prioritizing consistency and maintainability.",
        },
        {
          title: "Frontend Development",
          description:
            "Development of views, internal landings and components in NextJS, structured with HTML5 and SASS, caring for consistency, maintainability and performance. Use of AI to optimize development time.",
        },
        {
          title: "Responsive & UX QA",
          description:
            "Constant validation of responsive design and cross-browser support, ensuring a solid experience across all devices.",
        },
      ],
    },
    gallery: {
      intro: "Interfaces integrated into development, production-ready, aligned with design and business.",
    },
    outcomes: {
      title: "Value Delivered",
      items: [
        {
          label: "Production-ready interfaces:",
          text: "Components developed directly in NextJS, closing the gap between design and code and reducing friction between teams.",
        },
        {
          label: "Multi-brand system:",
          text: "A component architecture that allows per-brand visual customization without duplicating code, ensuring the product's scalability.",
        },
        {
          label: "AI-assisted development:",
          text: "Strategic use of AI tools to optimize development time and ensure high-quality results within tight deadlines.",
        },
      ],
    },
  },
  "neoris-wegrow": {
    subtitle: "Internal tool for evaluation, feedback and professional development",
    roles: ["UX Designer", "Internal Project", "Collaborative Work"],
    metrics: [
      { value: "MVP", label: "Delivery type" },
      { value: "Mexico", label: "Distributed team" },
      { value: "Figma", label: "Main tool" },
      { value: "2023", label: "Year" },
    ],
    card: {
      description: "Corporate feedback management platform with a collaborative approach for distributed teams.",
      tags: ["UX/UI", "Figma", "Collaborative"],
    },
    context: [
      "NEORIS is a global digital accelerator and technology partner that helps large companies transform digitally, offering solutions in consulting, AI and data management.",
      "WeGrow was born as an internal project to build a proprietary evaluation and feedback tool, with the vision of eventually turning it into a marketable product.",
    ],
    challenge: [
      "Create an easy-to-use, intuitive tool that would let users give and receive feedback effectively, adaptable to different teams and roles.",
      "Deliver an MVP in the shortest possible time with a team distributed across multiple cities in Mexico, coordinating tasks and flows among designers.",
    ],
    feature: {
      imageAlt: "WeGrow dashboard",
      eyebrow: "Dashboard",
      title: "Overview",
      paragraph:
        "The central dashboard lets each user see their status regarding pending evaluations, feedback received and professional progress in a clear and accessible way.",
    },
    process: {
      intro: "Agile coordination across distributed teams to deliver an MVP that met the needs of a highly complex project.",
      steps: [
        {
          title: "Team Organization",
          description:
            "Distributing tasks and flows among designers based in different cities of Mexico. Establishing a tracking methodology and constant coordination.",
        },
        {
          title: "Discovery with PO",
          description:
            "Regular remote meetings with the Product Owner to define the product. Gathering requirements and proposing flows based on the sessions.",
        },
        {
          title: "Interface Design",
          description:
            "Designing interfaces for multiple profiles with specific attributes: evaluators, evaluatees, administrators and team leads.",
        },
        {
          title: "Cross-team Coordination",
          description:
            "Ongoing contact among designers to share solutions that could be implemented across the board and keep consistency in every flow.",
        },
        {
          title: "MVP Delivery",
          description:
            "Delivering a functional MVP in record time, with the vision that it would eventually become a marketable product.",
        },
      ],
    },
    gallery: {
      intro: "Screens and flows designed for the WeGrow platform.",
    },
    outcomes: {
      title: "Key Decisions",
      items: [
        {
          label: "Effective distributed work:",
          text: "We established a clear coordination methodology that let a team across multiple cities move forward in parallel without losing consistency.",
        },
        {
          label: "Multiple profiles:",
          text: "We designed differentiated flows for evaluators, evaluatees, administrators and leads, each with their specific attributes and needs.",
        },
        {
          label: "MVP with product vision:",
          text: "Although the immediate goal was a fast MVP, every design decision was made with the product's future scalability in mind.",
        },
      ],
    },
  },
  "digisignage-pro": {
    eyebrow: "Personal Project · 2024–2025",
    subtitle: "SaaS platform to manage digital display networks from a centralized panel — no physical visits required",
    roles: ["Full Stack Developer", "Architecture", "UX/UI", "Electron"],
    metrics: [
      { value: "Multi-tenant", label: "SaaS architecture" },
      { value: "4 apps", label: "In a monorepo" },
      { value: "Electron", label: "Offline-first desktop client" },
      { value: "End-to-End TS", label: "Shared Zod contracts" },
    ],
    card: {
      description:
        "Digital signage SaaS: remote screen management, multi-zone layout editor and an Electron client that syncs content offline. Monorepo with React, Express and TypeScript.",
      tags: ["Full Stack", "React", "Electron", "TypeScript", "SaaS"],
      metrics: [
        { value: "Multi-tenant", label: "Architecture" },
        { value: "Monorepo", label: "Structure" },
      ],
    },
    context: [
      "Companies with physical display networks (retail, restaurants, airports, clinics) face the same problem: updating content on each screen means going on-site, plugging in a USB drive or remote-accessing each device individually. When you have dozens or hundreds of devices, that doesn't scale.",
      "DigiSignage Pro was born as a personal project to solve that problem at its root: a complete SaaS platform where content is managed from a central panel and each screen receives it automatically, with no manual intervention.",
    ],
    challenge: [
      "Design and build a system where the web panel, the server, the desktop client and the content player share data contracts without duplicating logic, operate independently and support multiple companies — each with their own isolated users, devices and content.",
      "The screen client (Electron) had to be offline-first: keep playing the last known content even when the server was unavailable, and sync automatically when the connection came back.",
    ],
    feature: {
      imageAlt: "Visual zone-based layout editor",
      eyebrow: "Layout editor",
      title: "Multiple content zones",
      paragraph:
        "The heart of the product is the visual device editor: each screen can be divided into 1, 2 or 4 independent zones. Each zone accepts a different widget (video, images, clock or weather) with its own playlist and settings. Content is dragged and reordered with drag-and-drop, and the player reflects it in real time.",
    },
    process: {
      intro: "From a concrete problem to a complete SaaS product, built with a monorepo architecture and end-to-end TypeScript.",
      steps: [
        {
          title: "Monorepo Architecture with Turborepo",
          description:
            "The project lives in a single repository with four applications (server, web, desktop, android) and three shared packages (shared, player, config). Turborepo orchestrates builds incrementally and in parallel. This made the data contracts, TypeScript config and ESLint rules a single source of truth for all apps.",
        },
        {
          title: "Shared Contracts with Zod",
          description:
            "The classic full-stack drift problem — server sends one shape, client expects another — is eliminated here. All domain schemas (devices, layouts, heartbeats, media) live in the shared package as Zod schemas. The server uses them to validate, the web client uses them to type, and the player consumes them directly. One schema change propagates safely to the entire system.",
        },
        {
          title: "REST API + Multi-tenant Auth",
          description:
            "The Express + TypeScript backend implements JWT auth in httpOnly cookies, per-company roles (super_admin, admin, operator) and strict empresaId isolation in every query. Media files are uploaded directly to R2/S3 with presigned URLs generated server-side, keeping file traffic off the API.",
        },
        {
          title: "React Web Panel with Visual Editor",
          description:
            "The admin panel is built with React 18, Vite, TanStack Query and shadcn/ui. It includes a device dashboard with real-time online/offline status, a media library with drag-drop upload and conflict detection on delete, a layout editor with @dnd-kit for playlist reordering, and user and company management.",
        },
        {
          title: "Offline-First Electron Client",
          description:
            "Each physical screen runs an Electron client that, on first boot, shows an 8-digit code to pair with the panel. Once paired, it syncs the layout and downloads media to local disk. Custom protocols (media://, img://) serve the files without CORS issues. If the server is unreachable, the device keeps playing the last known state.",
        },
        {
          title: "Framework-Free Vanilla JS Player",
          description:
            "The player running on screens is a vanilla JS module with no React or Vue. This makes it embeddable in the Electron client, in the web panel preview and eventually in an Android WebView — without any framework overhead. CSS Grid handles the layout zones, and the widgets (video, images, clock, weather) mount and unmount dynamically based on the received config.",
        },
      ],
    },
    gallery: {
      intro:
        "The result is a complete SaaS system covering the full cycle: company onboarding, screen pairing with a claim code, content upload, zone-based layout design and automatic distribution to every device. The monorepo architecture with shared Zod contracts ensures any domain change propagates safely across all four applications.",
    },
    outcomes: {
      title: "Key Decisions",
      items: [
        {
          label: "Monorepo from day zero:",
          text: "Starting with Turborepo and pnpm workspaces was the single most important architectural decision. It let the player, panel and server share logic without duplicating code and made builds incremental. The technical debt that a multi-repo setup would have accumulated was eliminated before it could exist.",
        },
        {
          label: "Zod as the single source of truth:",
          text: "Defining all domain contracts as shared Zod schemas — rather than separate TypeScript types per app — eliminated an entire category of frontend/backend desync bugs. Any schema change fails at compile time, not in production.",
        },
        {
          label: "Framework-free player:",
          text: "Writing the player in vanilla JS was counterintuitive but correct: the same code runs in Electron, in the web panel preview and is ready for an Android WebView without modifications. A React-based player would have required three separate adaptations.",
        },
      ],
    },
  },
  "retail-media-negociaciones": {
    subtitle: "Designing a module to centralize and bring traceability to the commercial negotiation lifecycle within an internal Retail Media platform",
    roles: ["Product Designer", "Discovery", "Research", "Flow Design"],
    metrics: [
      { value: "3 days", label: "Delivery time" },
      { value: "5 insights", label: "From exploratory research" },
      { value: "37% → <10%", label: "Discrepancy target" },
      { value: "2.5 h → <10 min", label: "To reconstruct a deal" },
    ],
    card: {
      description:
        "End-to-end proposal to eliminate fragmentation across Excel/email/WhatsApp and centralize commercial negotiations in a Retail Media internal platform.",
      tags: ["Product Design", "Research", "As-Is/To-Be Flows", "MVP Roadmap"],
      metrics: [
        { value: "3 days", label: "Delivery time" },
        { value: "E2E", label: "Process" },
      ],
    },
    context: [
      "Retail Media is an advertising strategy where retailers commercialize spaces within their own digital and physical channels, allowing brands to reach consumers using the retailer's own data to segment audiences and measure results with greater precision.",
      "The commercial team (Category Managers and Product Managers) operates on an internal platform that covers most of the campaign lifecycle, from creating commercial proposals to coordinating with operations for activation.",
    ],
    challenge: [
      "The platform had no structured flow for managing commercial negotiations. Conditions were agreed via email and WhatsApp, files were versioned manually and supervisor approvals happened verbally or through chat, with no record whatsoever.",
      "This created a critical gap: fragmented information, lack of traceability, errors in campaign activation and difficulties coordinating work across the involved teams.",
    ],
    feature: {
      imageAlt: "As-Is flow: negotiation outside the system",
      eyebrow: "The problem",
      title: "Negotiation outside the system",
      paragraph:
        "The negotiation process happened entirely outside the platform: proposals in Excel, iterations via email and WhatsApp, informal approvals through chat and, at the end, a manual transcription to the system. Every rejection created a loop with no traceability, and the data only reached the system at the last step — with a high risk of error.",
    },
    process: {
      intro: "A complete process from hypothesis to wireframe, delivered in 3 business days.",
      steps: [
        {
          title: "Hypothesis Definition",
          description:
            "Before talking to users, I formulated 5 hypotheses about the problem: management outside the system, errors reaching activation, informal approvals and the need for pipeline visibility. This focused the research and allowed each assumption to be validated or discarded with evidence.",
        },
        {
          title: "Exploratory Research",
          description:
            "Simulated research with a real method: 5 in-depth interviews, 2 contextual inquiries and a review of 8 closed negotiations with 7 participants (3 Category Managers, 2 Product Managers, 2 Supervisors). The goal was to map the real process and quantify the cost of managing it outside the system.",
        },
        {
          title: "Synthesis & Insights",
          description:
            "From the affinity clusters I identified 5 key insights: everyone had their own «version of the truth», approvals were informal and got lost, reconstructing a deal took ~2.5 hours, the handoff to operations was where errors occurred, and supervisors had no pipeline visibility.",
        },
        {
          title: "Opportunities & Validation",
          description:
            "I translated insights into 4 HMW questions: a single source of truth, traceable approvals, real-time status tracking and eliminating manual transcription. I validated all 5 hypotheses: 3 fully confirmed, 1 partial to be measured in testing and 1 new emerging hypothesis about pipeline visibility.",
        },
        {
          title: "Prioritization & MVP Roadmap",
          description:
            "I prioritized the epics by impact/effort and defined the scope with MoSCoW: the MVP (Now) includes a negotiation record, status management, version history, an approval workflow with reason and a basic audit trail. The plan is completed with Next and Later phases anchored to measurable research-based metrics.",
        },
        {
          title: "As-Is / To-Be Flows & Wireframes",
          description:
            "I documented the current flow (As-Is) with its 2 untraceable iteration loops and contrasted it with the proposed flow (To-Be), where every step is logged with its state, iterations automatically generate new versions and the handoff to operations is direct. I delivered lo-fi wireframes of the negotiations list, the conditions record, the version history and the approval flow.",
        },
      ],
    },
    gallery: {
      intro:
        "The proposed design brings the entire negotiation cycle inside the platform: from creating the negotiation to the automatic handoff to operations, with full traceability and a real-time state machine. The research baseline (3/8 discrepancies · 2.5 h reconstruction time · 0% formal approvals) defines the measurable success metrics post-launch.",
    },
    outcomes: {
      title: "Key Decisions",
      items: [
        {
          label: "Research before screens:",
          text: "I proposed designing no interfaces until the problem was validated with evidence. Research confirmed the gap wasn't visual but structural: the negotiation flow simply didn't exist inside the system. This shaped the entire MVP scope.",
        },
        {
          label: "Metrics anchored to the baseline:",
          text: "Every KPI in the roadmap has its counterpart in the research (discrepancies, reconstruction time, formal approvals), making it possible to demonstrate business impact post-launch, not just perceived improvement.",
        },
        {
          label: "An MVP that solves the root cause:",
          text: "Rather than adding features, the MVP tackles the 3 highest-impact, lowest-effort insights (single source of truth, approval traceability, status management). The automatic handoff is deferred to Next to avoid blocking the launch with complex integrations.",
        },
      ],
    },
  },
  "neoris-etb": {
    title: "Coverage Validation",
    subtitle: "Self-service fiber-optic coverage validation for ETB in Bogotá",
    roles: ["UX Designer", "Business"],
    metrics: [
      { value: "Bogotá", label: "Client location" },
      { value: "Fiber", label: "Main product" },
      { value: "Figma", label: "Main tool" },
      { value: "2023", label: "Year" },
    ],
    card: {
      description: "Self-service fiber-optic coverage validation for Bogotá's leading telecommunications operator.",
      tags: ["UX/UI", "Figma", "Business"],
    },
    context: [
      "ETB is the leading telecommunications company in Bogotá, Colombia. It offers internet (fiber optic), landline and mobile telephony, and TV.",
      "The project was carried out through Neoris as technology partner, with me as UX working remotely with technical counterparts in Colombia.",
    ],
    challenge: [
      "Redefine the self-service coverage validation flow for prospective fiber-optic customers in Bogotá, where addresses have a particular and complex format.",
      "An incorrect detail could mean getting the coverage assessment wrong or failing to reach the customer's home for installation.",
    ],
    feature: {
      imageAlt: "Start of the validation flow",
      eyebrow: "Flow",
      title: "Validation start",
      paragraph:
        "Geolocation was prioritized as the first step of the flow, while always letting the user complement or manually enter their information for maximum accuracy.",
    },
    process: {
      intro: "Deep research and iterative design for a problem of high technical complexity.",
      steps: [
        {
          title: "Information Gathering",
          description:
            "Collecting information on how address entry is currently handled, understanding the biggest friction points and the particularities of the Colombian address format.",
        },
        {
          title: "Competitive Benchmark",
          description:
            "Analyzing how other companies in the sector or similar ones tackled the problem of address validation and service coverage.",
        },
        {
          title: "Stakeholder Alignment",
          description:
            "Conversations with stakeholders to understand the ideal outcome and acceptance criteria. Clear definition of the project's objectives and constraints.",
        },
        {
          title: "Flow Design",
          description:
            "Iterative design of the validation flow, with constant technical validation with the counterpart in Colombia. Priority on geolocation with a manual fallback.",
        },
        {
          title: "Interface Design",
          description:
            "Designing intuitive interfaces for a complex process, letting the user complement or manually enter their information when needed.",
        },
      ],
    },
    gallery: {
      intro: "Screens from the coverage validation flow for ETB Colombia.",
    },
    outcomes: {
      title: "Key Decisions",
      items: [
        {
          label: "Geolocation first:",
          text: "Geolocation was prioritized as the primary entry method, reducing errors and making the process easier for the user.",
        },
        {
          label: "Intuitive manual fallback:",
          text: "For cases where geolocation wasn't enough, a manual entry system was designed to guide the user step by step.",
        },
        {
          label: "Iterative validation:",
          text: "Every design decision was validated with the technical counterpart, ensuring feasibility and fulfillment of the business objective.",
        },
      ],
    },
  },
};
