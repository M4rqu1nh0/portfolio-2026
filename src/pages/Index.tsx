import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import { getProjects } from "@/data/projects";
import { useLang } from "@/i18n/LanguageProvider";

const Index = () => {
  const { lang, t, localePath } = useLang();
  const projects = getProjects(lang);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Projects */}
      <section id="proyectos" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="w-12 h-px bg-accent mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">{t.home.projectsTitle}</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">{t.home.projectsIntro}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                subtitle={project.eyebrow}
                description={project.card.description}
                tags={project.card.tags}
                image={project.heroImage}
                link={localePath(`/proyecto/${project.slug}`)}
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
