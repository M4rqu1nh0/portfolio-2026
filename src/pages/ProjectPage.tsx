import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import Reveal from "@/components/Reveal";
import PageTransition from "@/components/PageTransition";
import Seo from "@/components/Seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getProjectBySlug } from "@/data/projects";
import { useLang } from "@/i18n/LanguageProvider";

const ProjectPage = () => {
  const { slug } = useParams();
  const { lang, t, localePath } = useLang();
  const project = getProjectBySlug(slug, lang);
  const homeHash = `${localePath("/")}#proyectos`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <PageTransition>
    <Seo
      title={`${project.title} · Marco Villegas`}
      description={project.subtitle}
      image={project.heroImage}
      type="article"
    />
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <Link
            to={homeHash}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> {t.project.backToHome}
          </Link>

          <div className="max-w-6xl">
            <span className="text-xs font-medium text-primary uppercase tracking-widest mb-3 block">
              {project.eyebrow}
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              {project.subtitle}
            </p>
            <div className="flex gap-3 text-sm text-muted-foreground">
              {project.roles.map((role) => (
                <span key={role} className="bg-secondary px-3 py-1 rounded-full">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src={project.heroImage} alt={project.heroAlt} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-card border border-border rounded-xl p-6 text-center">
                <p className="text-3xl font-heading font-bold text-gradient-primary mb-1">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">{t.project.context}</h2>
              {project.context.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-muted-foreground leading-relaxed ${
                    i < project.context.length - 1 ? "mb-4" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">{t.project.challenge}</h2>
              {project.challenge.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-muted-foreground leading-relaxed ${
                    i < project.challenge.length - 1 ? "mb-4" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature (before / dashboard / flow) */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={project.feature.image} alt={project.feature.imageAlt} loading="lazy" decoding="async" className="w-full" />
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-widest mb-2 block">
                {project.feature.eyebrow}
              </span>
              <h2 className="font-heading text-2xl font-bold mb-4">{project.feature.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{project.feature.paragraph}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="w-12 h-px bg-accent mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">{t.project.process}</h2>
          <p className="text-muted-foreground mb-16 max-w-6xl">{project.process.intro}</p>

          <div className="space-y-8">
            {project.process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                <div className="group flex gap-6 md:gap-10 p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300">
                  <span className="text-3xl font-heading font-semibold text-gradient-primary shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-6xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process image (optional) */}
      {project.process.image && (
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={project.process.image.src}
                alt={project.process.image.alt}
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="w-12 h-px bg-accent mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">{t.project.results}</h2>
          <p className="text-muted-foreground mb-12 max-w-6xl">{project.gallery.intro}</p>

          <div className="grid md:grid-cols-2 gap-4">
            {project.gallery.images.map((img, i) => (
              <div key={img} className="rounded-xl overflow-hidden border border-border group">
                <img
                  src={img}
                  alt={`${project.title} ${t.project.screen} ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-heading text-3xl font-bold mb-8">{project.outcomes.title}</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {project.outcomes.items.map((item) => (
              <p key={item.label}>
                <strong className="text-foreground">{item.label}</strong> {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">{t.project.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8">{t.project.ctaText}</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://wa.me/+56991258660"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-glow flex items-center gap-2"
            >
              <WhatsAppIcon />
              {t.project.ctaContact}
            </a>
            <Link
              to={homeHash}
              className="text-muted-foreground hover:text-foreground border border-border px-6 py-3.5 rounded-full transition-colors"
            >
              {t.project.ctaMoreProjects}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default ProjectPage;
