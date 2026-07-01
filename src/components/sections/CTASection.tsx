import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Clock, Gift } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-dark text-primary-foreground relative overflow-hidden" aria-label="Agendar consultoria gratuita">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-overlay opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Badge variant="outline" className="mb-6 border-gold text-gold bg-gold/10">
          Oferta Exclusiva
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Seu restaurante pode ser
          <span className="text-gold block">Sexy, Rentável e Reconhecido</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
          Agende agora seu <strong className="text-gold">diagnóstico gratuito</strong> e descubra 
          como transformar seu restaurante em uma marca irresistível
        </p>
        
        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <Gift className="w-8 h-8 text-gold mb-2" />
            <span className="font-semibold">Consultoria Gratuita</span>
            <span className="text-sm text-primary-foreground/70">Sem custo algum</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-8 h-8 text-gold mb-2" />
            <span className="font-semibold">Consulta Rápida</span>
            <span className="text-sm text-primary-foreground/70">30 minutos</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle className="w-8 h-8 text-gold mb-2" />
            <span className="font-semibold">Sem Compromisso</span>
            <span className="text-sm text-primary-foreground/70">Você decide depois</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mb-8">
          <Button 
            variant="hero" 
            size="xl"
            className="animate-gold-pulse hover:animate-none text-xl px-12 py-6"
            asChild
          >
            <a 
              href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              id="cta-bottom"
            >
              Agendar diagnóstico gratuito
              <ArrowRight className="w-6 h-6 ml-2" />
            </a>
          </Button>
        </div>
        
        {/* Guarantee */}
        <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <CheckCircle className="w-6 h-6 text-gold" />
            <span className="text-gold font-semibold text-lg">Garantia Total</span>
          </div>
          <p className="text-primary-foreground/90">
            Consulta rápida, focada e sem compromisso. Você só investe se acreditar 
            que podemos transformar seu restaurante em uma marca de sucesso.
          </p>
        </div>
        
        {/* Urgency */}
        <div className="mt-8">
          <p className="text-primary-foreground/70 text-sm">
            ⚡ Atendemos apenas 3 novos clientes por mês para garantir qualidade máxima
          </p>
        </div>
      </div>
    </section>
  );
};