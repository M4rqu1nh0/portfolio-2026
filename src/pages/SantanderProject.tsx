import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { value: "2 años", label: "Duración del proyecto" },
  { value: "5+", label: "Segmentos de clientes" },
  { value: "100%", label: "Renovación visual" },
  { value: "Angular", label: "Stack tecnológico" },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "Entrevistas con usuarios, análisis de métricas existentes y revisión de reclamos. Identificación de pain points clave en colaboración con el área de CX del banco.",
  },
  {
    number: "02",
    title: "Definición de Metodología",
    description:
      "Implementación de Design Thinking como marco de trabajo. Alineación con stakeholders y equipos de desarrollo sobre la importancia del proceso UX completo.",
  },
  {
    number: "03",
    title: "Benchmark & Ideación",
    description:
      "Análisis competitivo de plataformas bancarias. Propuesta y testeo de soluciones para diferentes segmentos de usuarios empresariales.",
  },
  {
    number: "04",
    title: "Design System & UI",
    description:
      "Adopción del Design System corporativo de Santander. Diseño de interfaces modernas, accesibles y consistentes con el nuevo estándar visual.",
  },
  {
    number: "05",
    title: "Desarrollo & Entrega",
    description:
      "Desarrollo frontend en Angular. Entrega del dashboard principal y definición de bases para la continuidad del proyecto por múltiples equipos.",
  },
];

const carouselImages = [
  "./../public/img/s-ob-car_01.webp",
  "./../public/img/s-ob-car_02.webp",
  "./../public/img/s-ob-car_03.webp",
  "./../public/img/s-ob-car_04.webp",
  "./../public/img/s-ob-car_05.webp",
  "./../public/img/s-ob-car_06.webp",
  "./../public/img/s-ob-car_07.webp",
];

const SantanderProject = () => {
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
              Banco Santander · 2021–2023
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-4">
              OfficeBanking
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              Transformación de la plataforma para clientes Empresa
            </p>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <span className="bg-secondary px-3 py-1 rounded-full">Diseñador UX</span>
              <span className="bg-secondary px-3 py-1 rounded-full">Frontend Developer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src="./../public/img/s-ob_01.webp"
              alt="OfficeBanking - Nueva plataforma"
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
                Banco Santander es uno de los bancos más grandes a nivel mundial. En Chile cuenta con un porcentaje mayoritario del mercado de clientes del Segmento Empresa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Este segmento incluye desde pequeños negocios hasta los holdings más grandes del país, todos transaccionando desde una misma plataforma: OfficeBanking.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">El Desafío</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Transformar una plataforma con años en el mercado, arquitectura compleja y múltiples funcionalidades, en una solución moderna, intuitiva y accesible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La diversidad de usuarios —desde microempresarios hasta equipos contables de holdings— hacía que un diseño único fuera insuficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before image */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="./../public/img/s-ob_02.webp"
                alt="Versión anterior de OfficeBanking"
                className="w-full"
              />
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-widest mb-2 block">Antes</span>
              <h2 className="font-heading text-2xl font-bold mb-4">Plataforma anterior</h2>
              <p className="text-muted-foreground leading-relaxed">
                La versión previa presentaba una interfaz anticuada con deuda técnica significativa. Santander decidió renovar tanto el stack tecnológico (Angular) como la experiencia de usuario completa.
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
            Una metodología completa de Design Thinking aplicada de principio a fin.
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
              src="./../public/img/s-ob_03.webp"
              alt="Proceso de diseño"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Resultados</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Pantallas y flujos diseñados para la nueva plataforma OfficeBanking.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {carouselImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border group">
                <img
                  src={img}
                  alt={`OfficeBanking pantalla ${i + 1}`}
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
              <strong className="text-foreground">Segmentación inteligente:</strong> Identificamos los puntos comunes entre todos los segmentos para responder globalmente, y separamos los flujos específicos para que usuarios que no los necesitaran nunca los vieran.
            </p>
            <p>
              <strong className="text-foreground">Metodología sobre decoración:</strong> Convencí a stakeholders de que el proyecto no era "diseñar pantallas", sino redefinir la experiencia completa. Esto permitió un Discovery profundo antes de cualquier diseño visual.
            </p>
            <p>
              <strong className="text-foreground">Bases escalables:</strong> El dashboard y los lineamientos de diseño sentaron las bases para que múltiples equipos pudieran continuar desarrollando flujos internos de manera consistente.
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

export default SantanderProject;
