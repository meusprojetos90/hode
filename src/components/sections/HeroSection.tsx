import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.webp";
import { ArrowRight, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
      aria-label="Apresentação principal"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Prato gourmet elegante em restaurante premium — marketing gastronômico Hode"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <div className="animate-fade-in">
          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex" aria-label="Avaliação 5 estrelas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-gold font-medium">Método SRR comprovado</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transforme o seu restaurante em uma
            <span className="text-gold block">marca irresistível e rentável</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Marketing gastronômico com foco em resultados: 
            <span className="text-gold font-semibold"> Gestão de Redes, Tráfego Pago, Conteúdo e muito mais.</span>
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              variant="hero" 
              size="xl"
              className="animate-gold-pulse hover:animate-none"
              asChild
            >
              <a 
                href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                id="hero-cta"
              >
                Agende seu diagnóstico gratuito
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>+ de R$ 200.000,00 investido em tráfego pago</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>Consultoria rápida, sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};