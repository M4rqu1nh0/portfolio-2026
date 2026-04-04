const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Marco Villegas Caballería · UX Designer E2E
      </p>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="mailto:contacto@mvc-ux.dev" className="hover:text-foreground transition-colors">Email</a>
        <a href="https://www.linkedin.com/in/marcovillegasc/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        <a href="https://wa.me/+56991258660" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp</a>
      </div>
    </div>
  </footer>
);

export default Footer;
