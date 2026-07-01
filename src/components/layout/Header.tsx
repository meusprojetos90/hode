import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import LogoHode from "@/assets/Logo-Hode.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        role="navigation"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="flex items-center gap-2 z-50"
          aria-label="Hode - Voltar ao início"
        >
          <img
            src={LogoHode}
            alt="Logo Hode - Marketing Gastronômico"
            className="h-10 w-auto"
            width={120}
            height={40}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-gold bg-gold/10"
                  : "text-primary-foreground/80 hover:text-gold hover:bg-gold/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Button variant="gold" size="sm" asChild>
            <a
              href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Agendar Consultoria
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-primary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-primary/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-6 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl font-semibold transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </a>
          ))}

          <Button variant="gold" size="lg" className="mt-4" asChild>
            <a
              href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Agendar Consultoria
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};
