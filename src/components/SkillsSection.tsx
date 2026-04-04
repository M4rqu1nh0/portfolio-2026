import { Layers, Code, Users, Search, Palette, MonitorSmartphone } from "lucide-react";

const skills = [
  { icon: Search, label: "UX Research", desc: "Entrevistas, benchmarks, métricas" },
  { icon: Layers, label: "UX/UI Design", desc: "Figma, Sketch, Design Systems" },
  { icon: Code, label: "Frontend Dev", desc: "React, NextJS, HTML/CSS/JS" },
  { icon: Users, label: "Design Thinking", desc: "Workshops, ideación, co-creación" },
  { icon: MonitorSmartphone, label: "Responsive", desc: "Mobile-first, accesibilidad" },
  { icon: Palette, label: "Visual Design", desc: "Branding, multimedia, motion" },
];

const SkillsSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Habilidades</h2>
        <p className="text-muted-foreground mb-12 max-w-lg">
          Capacidades que combino para entregar productos digitales de punta a punta.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <skill.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-sm mb-1">{skill.label}</h3>
              <p className="text-xs text-muted-foreground">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
