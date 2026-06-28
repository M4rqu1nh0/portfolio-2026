import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "OfficeBanking",
    subtitle: "Banco Santander · 2021–2023",
    description:
      "Transformación completa de la plataforma para clientes segmento empresas de Banco Santander. Desde Discovery hasta implementación frontend.",
    tags: ["End to End", "Design Thinking", "UX/UI", "Research", "Angular"],
    image: "/img/s-ob_01.webp",
    link: "/proyecto/santander-officebanking",
    metrics: [
      { label: "Duración", value: "2 años" },
      { label: "Segmentos", value: "Múltiples" },    ],
    featured: true,
  },
  {
    title: "Aibomarket.com",
    subtitle: "Marsol · 2024–2025",
    description:
      "Marketplace gastronómico B2B. Desarrollo frontend con NextJS y definición UX colaborativa.",
    tags: ["UX/UI", "NextJS", "Figma", "Multimarca"],
    image: "/img/aibo_01.webp",
    link: "/proyecto/marsol-aibomarket",
  },
  {
    title: "Wegrow",
    subtitle: "Neoris · 2023",
    description:
      "Plataforma de gestión de feedback corporativo con enfoque colaborativo para equipos distribuidos.",
    tags: ["UX/UI", "Figma", "Colaborativo"],
    image: "/img/n-wg_01.webp",
    link: "/proyecto/neoris-wegrow",
  },
  {
    title: "Validación de Cobertura",
    subtitle: "ETB Colombia · 2023",
    description:
      "Autovalidación de cobertura de fibra óptica para la principal operadora de telecomunicaciones de Bogotá.",
    tags: ["UX/UI", "Figma", "Negocio"],
    image: "/img/n-etb_01.webp",
    link: "/proyecto/neoris-etb",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Projects */}
      <section id="proyectos" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-muted-foreground mb-12 ">
            Algunos casos que muestran distintas facetas de mi experiencia en diseño y desarrollo de productos digitales.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <ExperienceTimeline />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
