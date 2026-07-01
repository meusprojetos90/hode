import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "30+",
    label: "Restaurantes transformados",
  },
  {
    icon: TrendingUp,
    number: "800%",
    label: "Aumento médio no alcance",
  },
  {
    icon: Target,
    number: "R$ 0,06",
    label: "Media de custo de visita ao perfil",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Avaliação dos clientes",
  },
];

export const SocialProofSection = () => {
  return (
    <section id="resultados" className="py-20 bg-background" aria-label="Resultados e métricas">
      <div className="max-w-6xl mx-auto px-6">
        {/* Results Stats */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Resultados Comprovados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos resultados
            <span className="text-gold block">falam por nós</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Veja os resultados que obtivemos para restaurantes como o seu
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Before/After Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Transformações
              <span className="text-gold"> Reais</span>
            </h3>
            <p className="text-xl text-primary-foreground/80">
              Antes e depois do Método SRR
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-destructive text-destructive bg-destructive/10">
                Antes
              </Badge>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                  <span>Poucos seguidores e baixo engajamento</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                  <span>Fotos amadoras que não despertam desejo</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                  <span>Marketing sem direção ou resultados</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                  <span>Faturamento instável e imprevisível</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-gold text-gold bg-gold/10">
                Depois
              </Badge>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span>Crescimento e engajamento real</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span>Banco de imagens profissional irresistível</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span>Estratégia clara com ROI comprovado</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span>Crescimento consistente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};