import { ArrowDown, Mail, Linkedin } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Soft warm wash */}
      <div className="absolute -top-32 right-0 w-[640px] h-[640px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Identity row */}
          <div className="flex items-center gap-4 mb-10 animate-fade-up opacity-0 stagger-1">
            <img
              src="/img/mvc.webp"
              alt="Marco Villegas"
              className="w-16 h-16 rounded-full object-cover border border-border shadow-card"
            />
            <span className="text-sm font-medium text-muted-foreground">{t.hero.badge}</span>
          </div>

          {/* Editorial headline */}
          <h1 className="font-heading text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight animate-fade-up opacity-0 stagger-2">
            {t.hero.headingLead}{" "}
            <em className="not-italic text-gradient-primary md:italic">{t.hero.headingHighlight}</em>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up opacity-0 stagger-3">
            {t.hero.subtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-10 animate-fade-up opacity-0 stagger-4">
            <a
              href="/pdf/CV-Marco-Villegas-UX-e2e.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-card"
            >
              {t.hero.downloadCv}
            </a>
            <a
              href="https://www.linkedin.com/in/marcovillegasc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground border border-border hover:border-foreground/40 px-6 py-3.5 rounded-full transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              {t.hero.linkedin}
            </a>
            <a
              href="mailto:contacto@mvc-ux.dev"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors ml-1"
            >
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
