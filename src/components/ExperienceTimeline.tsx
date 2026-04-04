const experiences = [
  {
    role: "Senior UX",
    company: "Zenta Group",
    period: "2025 - 2026",
    description: "Proyecto a honorarios por 3 meses para Discovery en cliente (COPEC)",
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
    description: "Consultoría internacional. Proyectos para Banco Santander, BUPA, ETB Colombia. Lideré área UX en Chile, Perú y Colombia.",
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
];

const ExperienceTimeline = () => {
  return (
    <section id="experiencia" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Experiencia</h2>
        <p className="text-muted-foreground mb-16">
          Más de dos décadas construyendo productos digitales en consultoría, banca y tecnología.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1" />

                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <span className="text-sm text-muted-foreground font-mono whitespace-nowrap min-w-[120px]">
                    {exp.period}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
