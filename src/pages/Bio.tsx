import { useBioLinks } from "@/hooks/use-store";
import { ExternalLink, Instagram, MessageCircle, Globe, Mail, MapPin, BookOpen } from "lucide-react";
import LogoHode from "@/assets/Logo-Hode.webp";
import MaiaraFra from "@/assets/maiara-fra.webp";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  MessageCircle,
  Instagram,
  BookOpen,
  Mail,
  MapPin,
  ExternalLink,
};

const Bio = () => {
  const { links, trackClick } = useBioLinks();

  const enabledLinks = links
    .filter((link) => link.enabled)
    .sort((a, b) => a.order - b.order);

  const handleClick = (link: typeof enabledLinks[0]) => {
    trackClick(link.id);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(45,100%,51%,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsla(45,100%,51%,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className="text-center mb-10">
          {/* Avatar */}
          <div className="relative inline-block mb-4">
            <div className="w-28 h-28 rounded-full bg-gradient-gold p-[3px] shadow-gold">
              <img
                src={MaiaraFra}
                alt="Maiara Fra — Hode Marketing Gastronômico"
                className="w-full h-full rounded-full object-cover"
                width={112}
                height={112}
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-[3px] border-primary" />
          </div>

          {/* Logo */}
          <img
            src={LogoHode}
            alt="Hode"
            className="h-8 mx-auto mb-3"
            width={96}
            height={32}
          />

          {/* Name & Bio */}
          <h1 className="text-xl font-bold text-primary-foreground mb-1">
            Maiara Fra
          </h1>
          <p className="text-sm text-primary-foreground/60 mb-1">
            Fundadora da Hode • Criadora do Método SRR
          </p>
          <p className="text-sm text-gold font-medium">
            Marketing Gastronômico que Transforma Restaurantes
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3 mb-10">
          {enabledLinks.map((link) => {
            const IconComponent = iconMap[link.icon] || ExternalLink;
            const isExternal = link.url.startsWith("http") || link.url.startsWith("mailto:");

            return (
              <a
                key={link.id}
                href={link.url}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={() => handleClick(link)}
                className="group flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-gold/20 bg-card/5 backdrop-blur-sm text-primary-foreground hover:bg-gold/10 hover:border-gold/50 hover:shadow-gold transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-gold" />
                </div>
                <span className="flex-1 text-sm font-medium text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                  {link.title}
                </span>
                <ExternalLink className="w-4 h-4 text-primary-foreground/30 group-hover:text-gold transition-colors" />
              </a>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="flex items-center justify-center gap-6 mb-10 py-4 border-t border-b border-gold/10">
          <div className="text-center">
            <div className="text-lg font-bold text-gold">30+</div>
            <div className="text-xs text-primary-foreground/50">Restaurantes</div>
          </div>
          <div className="w-px h-8 bg-gold/20" />
          <div className="text-center">
            <div className="text-lg font-bold text-gold">800%</div>
            <div className="text-xs text-primary-foreground/50">Alcance</div>
          </div>
          <div className="w-px h-8 bg-gold/20" />
          <div className="text-center">
            <div className="text-lg font-bold text-gold">4.9★</div>
            <div className="text-xs text-primary-foreground/50">Avaliação</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Hode Soluções e Inovações Tecnológicas
          </p>
          <a
            href="/"
            className="inline-block mt-2 text-xs text-gold/60 hover:text-gold transition-colors"
          >
            hode.com.br
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
