import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { value: "2 años", label: "de participación" },
  { value: "Figma", label: "Diseño y Prototipado" },
  { value: "NextJS", label: "Frontend Framework" },
  { value: "B2B", label: "Modelo de negocio" },
];

const processSteps = [
  {
    number: "01",
    title: "Colaboración con UX Lead",
    description:
      "Trabajo continuo con el UX Lead para definir detalles de interacción, jerarquía visual y comportamiento de componentes adaptables a múltiples marcas.",
  },
  {
    number: "02",
    title: "Validación Técnica",
    description:
      "Evaluación en conjunto con el equipo de Desarrollo para asegurar la viabilidad técnica de los diseños propuestos y su escalabilidad multimarca.",
  },
  {
    number: "03",
    title: "Análisis de Producto",
    description:
      "Análisis de cada vista desde una perspectiva de producto y sistema, no solo visual. Priorización de consistencia y mantenibilidad.",
  },
  {
    number: "04",
    title: "Desarrollo Frontend",
    description:
      "Desarrollo de vistas, landings internas y componentes en NextJS, estructurando en HTML5 y SASS, cuidando consistencia, mantenibilidad y performance. Uso de IA para optimizar tiempos de desarrollo.",
  },
  {
    number: "05",
    title: "Responsive & UX QA",
    description:
      "Validación constante de responsive design y soporte multinavegador, asegurando una experiencia sólida en todos los dispositivos. ",
  },
];

const galleryImages = [
  "/img/aibo-car_01.webp",
  "/img/aibo-car_02.webp",
  "/img/aibo-car_07.webp",
  "/img/aibo-car_03.webp",
  "/img/aibo-car_04.webp",
  // "/img/aibo-car_05.webp",
  "/img/aibo-car_06.webp",
];

const AibomarketProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>

          <div className="max-w-3xl">
            <span className="text-xs font-medium text-primary uppercase tracking-widest mb-3 block">
              Marsol S.A. · 2024 - 2025
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-4">
              Aibomarket
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              Marketplace gastronómico multimarca B2B
            </p>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <span className="bg-secondary px-3 py-1 rounded-full">UX/UI Designer</span>
              <span className="bg-secondary px-3 py-1 rounded-full">Frontend</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src="/img/aibo_01.webp"
              alt="Aibomarket - Marketplace gastronómico"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
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
              <h2 className="font-heading text-2xl font-bold mb-4">El Contexto</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aibomarket es un marketplace gastronómico cuyo foco principal es la venta en línea de equipamiento, suministros y servicios para negocios del área gastronómica.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Además, evolucionó para convertirse en una solución multimarca que permite la administración y customización de los componentes para cada una de las marcas asociadas.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">El Desafío</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Junto al UX Lead implementar mejoras de diseño y nuevos flujos de forma rápida y eficiente, en un contexto donde el producto debía escalar a múltiples marcas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Reducir la fricción entre diseño y producción, colaborando con la implementación de las mejoras de diseño en el aplicativo, formando parte  del equipo de frontend, de ésta forma las decisiones de UX se reflejaran en el producto final rápidamente y con el menor retrabajo posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge image */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="/img/aibo_02.webp"
                alt="Componentes multimarca"
                className="w-full"
              />
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-widest mb-2 block">Multimarca</span>
              <h2 className="font-heading text-2xl font-bold mb-4">Componentes escalables</h2>
              <p className="text-muted-foreground leading-relaxed">
                El producto se volvió multimarca y los componentes debían poder estilarse según cada una de ellas, manteniendo consistencia visual y experiencia de usuario coherente en todos los casos. Lo cual significó un desafío adicional, ya que no solo se trataba de diseñar y desarrollar componentes, sino de hacerlo pensando en su adaptabilidad y escalabilidad para múltiples marcas sin duplicar código sino que customizándolos a partir de clases, de manera tal que la funcionalidad estaba separada del estilo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-4xl font-bold mb-4">El Proceso</h2>
          <p className="text-muted-foreground mb-16 max-w-4x1">
            Colaboración estrecha entre diseño y desarrollo para lograr entregas rápidas y consistentes.
          </p>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group flex gap-6 md:gap-10 p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-3xl font-heading font-bold text-gradient-primary shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src="/img/aibo_03.webp"
              alt="Proceso de diseño Aibomarket"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Resultados</h2>
          <p className="text-muted-foreground mb-12 max-w-4x1">
            Interfaces integradas al desarrollo, listas para producción, alineadas a diseño y negocio.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border group">
                <img
                  src={img}
                  alt={`Aibomarket pantalla ${i + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key decisions */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Valor Entregado</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Interfaces listas para producción:</strong> Componentes desarrollados directamente en NextJS, eliminando la brecha entre diseño y código y reduciendo fricción entre equipos.
            </p>
            <p>
              <strong className="text-foreground">Sistema multimarca:</strong> Arquitectura de componentes que permite personalización visual por marca sin duplicar código, asegurando escalabilidad del producto.
            </p>
            <p>
              <strong className="text-foreground">Desarrollo asistido por IA:</strong> Uso estratégico de herramientas de IA para optimizar tiempos de desarrollo y asegurar resultados de alta calidad en plazos ajustados.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">¿Hablamos?</h2>
          <p className="text-muted-foreground mb-8">
            Me encantaría contarte más sobre este y otros proyectos.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:contacto@mvc-ux.dev"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-glow"
            >
              Contactar
            </a>
            <Link
              to="/#proyectos"
              className="text-muted-foreground hover:text-foreground border border-border px-6 py-3.5 rounded-full transition-colors"
            >
              Ver más proyectos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AibomarketProject;
