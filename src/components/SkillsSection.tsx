import { Layers, Code, Users, Search, Palette, MonitorSmartphone } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

// Icons stay in code, mapped by index to the localized skill items in the dictionary.
const skillIcons = [Search, Layers, Code, Users, MonitorSmartphone, Palette];

const SkillsSection = () => {
  const { t } = useLang();
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="w-12 h-px bg-accent mb-6" />
        <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">{t.skills.title}</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">{t.skills.intro}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.skills.items.map((skill, i) => {
            const Icon = skillIcons[i] ?? Layers;
            return (
              <div
                key={skill.label}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-sm mb-1">{skill.label}</h3>
                <p className="text-xs text-muted-foreground">{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
