import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { value: "Bogotá", label: "Ubicación del cliente" },
  { value: "Fibra", label: "Producto principal" },
  { value: "Figma", label: "Herramienta principal" },
  { value: "2023", label: "Año" },
];

const processSteps = [
  {
    number: "01",
    title: "Levantamiento de Información",
    description:
      "Recabar información sobre el manejo actual del ingreso de direcciones, entender los mayores puntos de fricción y las particularidades del formato de direcciones colombiano.",
  },
  {
    number: "02",
    title: "Benchmark Competitivo",
    description:
      "Análisis de cómo otras empresas del rubro o similares enfrentaban la problemática de validación de direcciones y cobertura de servicios.",
  },
  {
    number: "03",
    title: "Alineación con Stakeholders",
    description:
      "Conversaciones con stakeholders para entender el ideal y los criterios de aceptación. Definición clara de objetivos y restricciones del proyecto.",
  },
  {
    number: "04",
    title: "Diseño de Flujo",
    description:
      "Diseño iterativo del flujo de validación, con validación técnica constante con contraparte en Colombia. Prioridad en geolocalización con fallback manual.",
  },
  {
    number: "05",
    title: "Diseño de Interfaces",
    description:
      "Diseño de interfaces intuitivas para un proceso complejo, permitiendo al usuario complementar o registrar manualmente su información cuando fuera necesario.",
  },
];

const galleryImages = [
  "/img/n-etb-car_01.webp",
  "/img/n-etb-car_02.webp",
  "/img/n-etb-car_03.webp",
  "/img/n-etb-car_04.webp",
  "/img/n-etb-car_05.webp",
  "/img/n-etb-car_06.webp",
  // "/img/n-etb-car_07.webp",
];

const EtbProject = () => {
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
              ETB Colombia · Neoris · 2023
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-4">
              Validación de Cobertura
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              Autovalidación de cobertura de fibra óptica para ETB en Bogotá
            </p>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <span className="bg-secondary px-3 py-1 rounded-full">Diseñador UX</span>
              <span className="bg-secondary px-3 py-1 rounded-full">Negocio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src="/img/n-etb_01.webp"
              alt="ETB - Validación de Cobertura"
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
                ETB es la principal empresa de telecomunicaciones de Bogotá, Colombia. Ofrece servicios de internet (fibra óptica), telefonía fija y móvil, y TV.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                El proyecto fue desarrollado a través de Neoris como socio tecnológico, y yo como UX trabajando de forma remota con contrapartes técnicas en Colombia.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">El Desafío</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Redefinir el flujo de autovalidación de cobertura para potenciales clientes de fibra óptica en Bogotá, donde las direcciones tienen un formato particular y complejo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Un dato incorrecto podía significar equivocar la evaluación de cobertura o no llegar al domicilio del cliente para la instalación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow image */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="/img/n-etb_02.webp"
                alt="Inicio del flujo de validación"
                className="w-full"
              />
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-widest mb-2 block">Flujo</span>
              <h2 className="font-heading text-2xl font-bold mb-4">Inicio de validación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se priorizó la geolocalización como primer paso del flujo, pero siempre permitiendo que el usuario pudiera complementar o registrar manualmente su información para máxima precisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">El Proceso</h2>
          <p className="text-muted-foreground mb-16 max-w-4x1">
            Investigación profunda y diseño iterativo para un problema de alta complejidad técnica.
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
            Pantallas del flujo de validación de cobertura para ETB Colombia.
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border group">
                <img
                  src={img}
                  alt={`ETB pantalla ${i + 1}`}
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
              <strong className="text-foreground">Geolocalización primero:</strong> Se priorizó la geolocalización como método principal de ingreso, reduciendo errores y facilitando el proceso para el usuario.
            </p>
            <p>
              <strong className="text-foreground">Fallback manual intuitivo:</strong> Para casos donde la geolocalización no fuera suficiente, se diseñó un sistema de ingreso manual que guía al usuario paso a paso.
            </p>
            <p>
              <strong className="text-foreground">Validación iterativa:</strong> Cada decisión de diseño fue validada con la contraparte técnica, asegurando factibilidad y cumplimiento del objetivo de negocio.
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

export default EtbProject;
