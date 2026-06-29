import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/Reveal";

const ExperienceTimeline = () => {
  const { t } = useLang();
  const experiences = t.experience.items;
  return (
    <section id="experiencia" className="py-24">
      <div className="container mx-auto px-6">
        <div className="w-12 h-px bg-accent mb-6" />
        <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">{t.experience.title}</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">{t.experience.intro}</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="relative pl-8 md:pl-20">
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
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
