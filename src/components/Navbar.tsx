import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Menu, X, Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const scrollToSection = (id: string, closeMenu?: () => void) => {
  const element = document.getElementById(id);
  if (element) {
    closeMenu?.();
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, localePath, otherLang, otherLangPath } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isIndex = location.pathname === "/" || location.pathname === "/en";

  const langToggle = (
    <Link
      to={otherLangPath}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary uppercase"
      aria-label={`Switch language to ${otherLang}`}
    >
      <Globe className="w-4 h-4" />
      {otherLang}
    </Link>
  );

  const navLinks = (
    <>
      <Link to={localePath("/")} className="text-sm font-medium transition-colors hover:text-primary text-primary">
        {t.nav.home}
      </Link>
      <button
        onClick={() => scrollToSection("proyectos", () => setMobileMenuOpen(false))}
        className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
      >
        {t.nav.projects}
      </button>
      <button
        onClick={() => scrollToSection("experiencia", () => setMobileMenuOpen(false))}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {t.nav.experience}
      </button>
      {langToggle}
      <a
        href="https://wa.me/+56991258660"
        target="_blank"
        className="text-sm font-medium text-primary-foreground px-5 py-2 rounded-full flex items-center gap-1 bg-gradient-primary hover:bg-gradient-accent transition-colors"
      >
        <WhatsAppIcon />
        {t.nav.contact}
      </a>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to={localePath("/")} className="font-heading text-lg font-semibold tracking-tight">
          <span className="transition duration-500 text-gradient-primary hover:text-gradient-accent">
            &lt; Marco Villegas - UX /&gt;
          </span>
        </Link>

        {isIndex ? (
          <>
            <div className="menu-nav hidden md:flex items-center gap-8">{navLinks}</div>

            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div
              className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
                mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                <Link
                  to={localePath("/")}
                  className="text-sm font-medium transition-colors hover:text-primary text-primary py-2"
                >
                  {t.nav.home}
                </Link>
                <button
                  onClick={() => scrollToSection("proyectos", () => setMobileMenuOpen(false))}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground py-2 text-left"
                >
                  {t.nav.projects}
                </button>
                <button
                  onClick={() => scrollToSection("experiencia", () => setMobileMenuOpen(false))}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground py-2 text-left"
                >
                  {t.nav.experience}
                </button>
                <div className="py-2">{langToggle}</div>
                <a
                  href="https://wa.me/+56991258660"
                  target="_blank"
                  className="text-sm font-medium text-primary-foreground px-5 py-2 rounded-full flex items-center gap-2 bg-gradient-primary hover:bg-gradient-accent transition-colors w-fit"
                >
                  <WhatsAppIcon />
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-6">
            {langToggle}
            <Link
              to={localePath("/")}
              className="transition duration-300 volver inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" /> {t.nav.back}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
