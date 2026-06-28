import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

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
              <ProjectCard
                key={project.slug}
                title={project.title}
                subtitle={project.eyebrow}
                description={project.card.description}
                tags={project.card.tags}
                image={project.heroImage}
                link={`/proyecto/${project.slug}`}
                metrics={project.card.metrics}
                featured={project.card.featured}
              />
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
