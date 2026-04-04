import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { value: "MVP", label: "Tipo de entrega" },
  { value: "México", label: "Equipo distribuido" },
  { value: "Figma", label: "Herramienta principal" },
  { value: "2023", label: "Año" },
];

const processSteps = [
  {
    number: "01",
    title: "Organización del Equipo",
    description:
      "Distribución de tareas y flujos entre diseñadores basados en distintas ciudades de México. Establecimiento de metodología de seguimiento y coordinación constante.",
  },
  {
    number: "02",
    title: "Levantamiento con PO",
    description:
      "Reuniones telemáticas regulares con la Product Owner para definir el producto. Levantamiento de requisitos y propuesta de flujos basados en las sesiones.",
  },
  {
    number: "03",
    title: "Diseño de Interfaces",
    description:
      "Diseño de interfaces para múltiples perfiles con atributos específicos: evaluadores, evaluados, administradores y líderes de equipo.",
  },
  {
    number: "04",
    title: "Coordinación Transversal",
    description:
      "Contacto permanente entre diseñadores para compartir soluciones implementables transversalmente y mantener consistencia en todos los flujos.",
  },
  {
    number: "05",
    title: "Entrega del MVP",
    description:
      "Entrega de un MVP funcional en tiempo récord, con la visión de que eventualmente se convirtiera en un producto comercializable.",
  },
];

const galleryImages = [
  "/img/n-wg-car_01.webp",
  "/img/n-wg-car_02.webp",
  "/img/n-wg-car_03.webp",
  "/img/n-wg-car_04.webp",
  "/img/n-wg-car_05.webp",
  "/img/n-wg-car_06.webp",
  "/img/n-wg-car_07.webp",
];

const WegrowProject = () => {
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
              Neoris · 2023
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-4">
              WeGrow
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              Herramienta interna de evaluación, feedback y desarrollo profesional
            </p>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <span className="bg-secondary px-3 py-1 rounded-full">Diseñador UX</span>
              <span className="bg-secondary px-3 py-1 rounded-full">Trabajo Colaborativo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src="/img/n-wg_01.webp"
              alt="WeGrow - Plataforma de feedback"
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
                NEORIS es un acelerador digital global y socio tecnológico que ayuda a grandes empresas a transformarse digitalmente, ofreciendo soluciones en consultoría, IA y gestión de datos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                WeGrow nace como proyecto interno para generar una herramienta propia de evaluación y feedback, con la visión de convertirla eventualmente en un producto comercializable.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">El Desafío</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Crear una herramienta fácil de usar e intuitiva que permitiera a los usuarios dar y recibir feedback de manera efectiva, adaptable a diferentes equipos y roles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Generar un MVP en el menor tiempo posible con un equipo distribuido en múltiples ciudades de México, coordinando tareas y flujos entre diseñadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard image */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="/img/n-wg_02.webp"
                alt="Dashboard WeGrow"
                className="w-full"
              />
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-widest mb-2 block">Dashboard</span>
              <h2 className="font-heading text-2xl font-bold mb-4">Vista general</h2>
              <p className="text-muted-foreground leading-relaxed">
                El dashboard central permite a cada usuario visualizar su estado de evaluación, feedback pendiente y progreso profesional de manera clara y accesible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">El Proceso</h2>
          <p className="text-muted-foreground mb-16 max-w-lg">
            Coordinación ágil entre equipos distribuidos para entregar un MVP de alta complejidad.
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

      {/* Gallery */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Resultados</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Pantallas y flujos diseñados para la plataforma WeGrow.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border group">
                <img
                  src={img}
                  alt={`WeGrow pantalla ${i + 1}`}
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
          <h2 className="font-heading text-3xl font-bold mb-8">Decisiones Clave</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Trabajo distribuido efectivo:</strong> Establecimos una metodología clara de coordinación que permitió a un equipo en múltiples ciudades avanzar en paralelo sin perder consistencia.
            </p>
            <p>
              <strong className="text-foreground">Múltiples perfiles:</strong> Diseñamos flujos diferenciados para evaluadores, evaluados, administradores y líderes, cada uno con sus atributos y necesidades específicas.
            </p>
            <p>
              <strong className="text-foreground">MVP con visión de producto:</strong> Aunque el objetivo inmediato era un MVP rápido, cada decisión de diseño se tomó pensando en la escalabilidad futura del producto.
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
              to="/"
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

export default WegrowProject;
