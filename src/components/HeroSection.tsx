import { ArrowDown, MapPin, Mail, Linkedin } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-none mx-auto text-center">
          {/* Tagline */}
          <div className="animate-fade-up opacity-0 stagger-1">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary px-4 py-1.5 rounded-full mb-8">
              <MapPin className="w-3.5 h-3.5" />
              {t.hero.badge}
            </span>
          </div>

          {/* Main heading */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
            <figure className="mr-[32px] animate-fade-up opacity-0 stagger-1 border border-border shadow-card rounded-full flex items-center justify-center">
              <img src="/img/mvc.webp" alt="Marco Villegas" className="rounded-full w-64 h-64 mx-auto object-cover" />
            </figure>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight animate-fade-up opacity-0 stagger-2">
              {t.hero.headingLead}{" "}
              <span className="text-gradient-primary">{t.hero.headingHighlight}</span>
            </h1>
          </div>
          

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-up opacity-0 stagger-3">
            {t.hero.subtitle}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4 mt-10 animate-fade-up opacity-0 stagger-4">
            <a
              href="/pdf/CV-Marco-Villegas-UX-e2e.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-gradient-accent transition-opacity shadow-glow"
            >
              {t.hero.downloadCv}
            </a>
            <a
              href="https://www.linkedin.com/in/marcovillegasc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground border border-border hover:border-foreground/40 px-6 py-3.5 rounded-full transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Contact row */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground animate-fade-up opacity-0 stagger-5">
            <a href="mailto:contacto@mvc-ux.dev" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5" /> contacto@mvc-ux.dev
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
