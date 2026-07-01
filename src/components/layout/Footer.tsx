import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import LogoHode from "@/assets/Logo-Hode.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4" itemScope itemType="https://schema.org/Organization">
            <div className="flex items-center gap-2">
              <img
                src={LogoHode}
                alt="Logo Hode - Soluções e Inovações Tecnológicas"
                className="w-40 h-auto"
                loading="lazy"
                width={160}
                height={53}
                itemProp="logo"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed" itemProp="description">
              Transformamos restaurantes em marcas irresistíveis e rentáveis através
              do nosso exclusivo Método SRR.
            </p>

            {/* SEO Local — NAP (Name, Address, Phone) */}
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Toledo</span> - <span itemProp="addressRegion">PR</span>, <span itemProp="addressCountry">Brasil</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span itemProp="telephone">(45) 9 8429-5124</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/hodemkt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Instagram da Hode"
              >
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a
                href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Hode"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="WhatsApp da Hode"
              >
                <MessageCircle className="w-5 h-5 text-gold" />
              </a>
              <a
                href="mailto:maiarafra@hode.com.br"
                className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Email da Hode"
              >
                <Mail className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Hode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90 group-hover:text-gold transition-colors">WhatsApp</span>
                  <span className="text-sm text-primary-foreground/70">(45) 9 8429-5124</span>
                </div>
              </a>
              <a
                href="mailto:maiarafra@hode.com.br"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90 group-hover:text-gold transition-colors">Email</span>
                  <span className="text-sm text-primary-foreground/70">maiarafra@hode.com.br</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/hodemkt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Instagram className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-primary-foreground/90 group-hover:text-gold transition-colors">Instagram</span>
                  <span className="text-sm text-primary-foreground/70">@hodemkt</span>
                </div>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Pronto para começar?</h4>
            <p className="text-primary-foreground/80 mb-4">
              Transforme seu restaurante em uma marca de sucesso hoje mesmo.
            </p>
            <Button variant="gold" className="w-full" asChild>
              <a
                href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chamar no WhatsApp
              </a>
            </Button>

            {/* Quick Links */}
            <div className="pt-4 space-y-2">
              <h5 className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider">Navegação</h5>
              <nav aria-label="Links do rodapé" className="grid grid-cols-2 gap-1">
                <Link to="/" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Início</Link>
                <Link to="/sobre-nos" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Sobre Nós</Link>
                <Link to="/blog" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Blog</Link>
                <Link to="/#metodo" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Método SRR</Link>
                <Link to="/#servicos" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Serviços</Link>
                <Link to="/#portfolio" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Portfólio</Link>
                <Link to="/#faq" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">FAQ</Link>
                <Link to="/politica-de-privacidade" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Privacidade (LGPD)</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Hode Soluções e Inovações Tecnológicas. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              CNPJ em processo de regularização • Toledo - PR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};