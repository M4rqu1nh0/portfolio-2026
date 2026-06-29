import { ArrowDown, MapPin, Mail, Linkedin } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Soft warm wash */}
      <div className="absolute -top-32 right-0 w-[640px] h-[640px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary px-4 py-1.5 rounded-full mb-8 animate-fade-up opacity-0 stagger-1">
              <MapPin className="w-3.5 h-3.5" />
              {t.hero.badge}
            </span>

            <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight animate-fade-up opacity-0 stagger-2">
              {t.hero.headingLead}{" "}
              <em className="not-italic text-gradient-primary md:italic">{t.hero.headingHighlight}</em>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up opacity-0 stagger-3">
              {t.hero.subtitle}
            </p>

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
            </div>

          </div>

          {/* Portrait column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up opacity-0 stagger-2">
            <div className="relative">
              {/* Accent glow behind the portrait */}
              <div className="absolute -inset-4 bg-gradient-primary opacity-15 blur-3xl rounded-full pointer-events-none" />
              <img
                src="/img/mvc.webp"
                alt="Marco Villegas"
                className="relative w-64 h-80 md:w-80 md:h-[26rem] lg:w-full lg:h-auto lg:aspect-[4/5] object-cover rounded-3xl border border-border shadow-card"
              />
            </div>
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
