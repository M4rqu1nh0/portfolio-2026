import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

const ProjectCard = ({ title, subtitle, description, tags, image, link, metrics, featured }: ProjectCardProps) => {
  return (
    <Link
      to={link}
      className={`proyect-link group block rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-glow ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">{subtitle}</p>
        <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">{description}</p>

        {/* Metrics */}
        {metrics && (
          <div className="flex gap-6 mb-4">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-heading font-bold text-gradient-primary">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
