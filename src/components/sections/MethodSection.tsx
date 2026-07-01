import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowDown, Zap, Camera, Target, TrendingUp, ArrowRight } from "lucide-react";

const methodSteps = [
  {
    step: "01",
    icon: Zap,
    title: "Alinhamento Estratégico",
    description: "Definimos a identidade única do seu restaurante e o posicionamento ideal no mercado",
    details: ["Análise de concorrência", "Definição de personas", "Estratégia de diferenciação"],
  },
  {
    step: "02", 
    icon: Camera,
    title: "Fotos Profissionais",
    description: "Criamos um banco de imagens irresistível que desperta desejo nos clientes",
    details: ["Sessão fotográfica profissional", "Edição premium", "Banco de imagens exclusivo"],
  },
  {
    step: "03",
    icon: Target,
    title: "Tráfego Pago",
    description: "Direcionamos o público certo para seu restaurante com campanhas otimizadas",
    details: ["Facebook e Instagram Ads", "Google Ads", "Segmentação precisa"],
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Conteúdo Irresistível",
    description: "Produzimos conteúdo que engaja, converte e fideliza seus clientes",
    details: ["Copywriting persuasivo", "Stories que vendem", "Posts que convertem"],
  },
];

export const MethodSection = () => {
  return (
    <section id="metodo" className="py-20 bg-primary text-primary-foreground relative overflow-hidden" aria-label="Método SRR">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold bg-gold/10">
            Método Exclusivo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que é o Método
            <span className="text-gold"> SRR?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Nossa metodologia comprovada em 4 etapas que transforma restaurantes 
            em marcas <strong className="text-gold">sexy, rentáveis e reconhecidas</strong>
          </p>
        </div>
        
        <div className="space-y-8">
          {methodSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-card/10 border-gold/20 backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-12 gap-6 items-center">
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-2 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-gold text-gold bg-gold/10">
                        Etapa {step.step}
                      </Badge>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-6">
                      <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Details */}
                    <div className="lg:col-span-4">
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                            <span className="text-primary-foreground/80 text-sm">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow */}
              {index < methodSteps.length - 1 && (
                <div className="flex justify-center my-4" aria-hidden="true">
                  <ArrowDown className="w-8 h-8 text-gold" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gold mb-4">
              Por que o resultado é garantido?
            </h3>
            <p className="text-lg text-primary-foreground/90">
              Com o Método SRR, seu restaurante sai do anonimato e se torna uma referência, 
              atraindo mais clientes e aumentando o faturamento de forma consistente.
            </p>
          </div>
          <Button variant="gold" size="lg" asChild>
            <a href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20quero%20aplicar%20o%20M%C3%A9todo%20SRR%20no%20meu%20restaurante" target="_blank" rel="noopener noreferrer">
              Aplicar o Método no Meu Restaurante <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};