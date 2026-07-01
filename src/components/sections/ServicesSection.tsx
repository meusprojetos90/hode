import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  Instagram, 
  Target, 
  PenTool, 
  Type, 
  Palette, 
  Users, 
  BarChart3 
} from "lucide-react";
import { type SVGProps } from "react";

const IfoodIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z"/>
  </svg>
);

const services = [
  {
    icon: Instagram,
    title: "Gestão de Redes Sociais",
    description: "Transformamos seu perfil em uma vitrine irresistível que atrai e converte seguidores em clientes fiéis.",
    features: ["Stories estratégicos", "Feed alinhado", "Engajamento real"],
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas otimizadas que direcionam o público certo para seu restaurante, maximizando ROI.",
    features: ["Facebook Ads", "Instagram Ads", "Google Ads"],
  },
  {
    icon: PenTool,
    title: "Produção de Conteúdo",
    description: "Criamos conteúdo visual e textual que desperta desejo e gera resultados mensuráveis.",
    features: ["Foto profissional", "Vídeos promocionais", "Design exclusivo"],
  },
  {
    icon: Type,
    title: "Copywriting",
    description: "Textos persuasivos que conectam emocionalmente com seu público e geram mais vendas.",
    features: ["Headlines poderosas", "CTAs efetivos", "Storytelling gastronômico"],
  },
  {
    icon: Palette,
    title: "Design Criativo",
    description: "Identidade visual única que posiciona seu restaurante como referência premium no mercado.",
    features: ["Identidade visual", "Cardápios digitais", "Material promocional"],
  },
  {
    icon: Users,
    title: "Parcerias com Influenciadores",
    description: "Conectamos seu restaurante com influenciadores alinhados ao seu público-alvo.",
    features: ["Micro influencers", "Food bloggers", "Campanhas colaborativas"],
  },
  {
    icon: BarChart3,
    title: "Relatórios e Métricas",
    description: "Acompanhamento detalhado dos resultados com dados claros sobre ROI e performance.",
    features: ["Dashboard exclusivo", "Métricas detalhadas", "Relatórios mensais"],
  },
  {
    icon: IfoodIcon,
    title: "IFood",
    description: "Gestão estratégica da sua presença no IFood para aumentar pedidos, avaliações positivas e rentabilidade.",
    features: ["Organização", "Fotos atrativas", "Descrições que convertem"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-muted" aria-label="Serviços de marketing gastronômico">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Serviços
            <span className="text-gold"> Hode</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de marketing gastronômico para transformar 
            seu restaurante em uma marca de sucesso
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-300 border-2 hover:border-gold/30 bg-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gold rounded-lg p-8 max-w-4xl mx-auto shadow-gold">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Soluções Integradas para Máximo Resultado
            </h3>
            <p className="text-lg text-primary/80">
              Todos os nossos serviços trabalham em sinergia para potencializar 
              o crescimento e a visibilidade do seu restaurante
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};