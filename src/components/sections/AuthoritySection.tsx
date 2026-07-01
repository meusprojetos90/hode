import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp } from "lucide-react";

import MaiaraFra from "@/assets/maiara-fra.webp";

export const AuthoritySection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted" aria-label="Sobre a Hode e Maiara Fra">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-gold rounded-2xl shadow-luxury p-1">
              <div className="w-full h-full bg-card rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src={MaiaraFra} 
                  alt="Maiara Fra — Fundadora da Hode e criadora do Método SRR de marketing gastronômico" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105 rounded-xl"
                  loading="lazy"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gold text-primary p-3 rounded-full shadow-gold" aria-hidden="true">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          
          {/* Content */}
          <article className="space-y-6" itemScope itemType="https://schema.org/Person">
            <div>
              <Badge variant="outline" className="mb-4 border-gold text-gold">
                Fundadora & Especialista
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Conheça a 
                <span className="text-gold" itemProp="name"> Maiara Fra</span>
              </h2>
              <h3 className="text-xl font-semibold text-gold mb-6" itemProp="jobTitle">
                Criadora do Método SRR
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed" itemProp="description">
              Com anos de experiência em marketing gastronômico, Maiara desenvolveu 
              o <strong className="text-foreground">Método SRR</strong> que já transformou 
              centenas de restaurantes em marcas reconhecidas e rentáveis.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-foreground">Especialista em Marketing Gastronômico</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-foreground">Mentorada por grandes nomes do setor</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-foreground">+ de R$ 200.000,00 investido em tráfego pago</span>
              </div>
            </div>
            
            <div className="pt-4">
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-gold pl-4">
                "Cada restaurante tem um potencial único de se tornar uma marca irresistível. 
                Meu trabalho é desbloquear esse potencial."
              </blockquote>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};