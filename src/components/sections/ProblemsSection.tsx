import { Card, CardContent } from "@/components/ui/card";
import { XCircle, Camera, Users, Target, TrendingDown, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Espera o cliente vir sozinho",
    description: "Sem estratégia de atração, depende apenas do boca a boca",
  },
  {
    icon: Camera,
    title: "Fotos amadoras",
    description: "Imagens que não despertam desejo nem transmitem qualidade",
  },
  {
    icon: AlertTriangle,
    title: "Instagram sem clareza",
    description: "Perfil confuso que não comunica o diferencial do restaurante",
  },
  {
    icon: Target,
    title: "Marketing sem foco",
    description: "Investe em ações dispersas sem medir resultados",
  },
  {
    icon: TrendingDown,
    title: "Vendas instáveis",
    description: "Faturamento que varia muito, sem previsibilidade",
  },
  {
    icon: XCircle,
    title: "Concorrência cresce",
    description: "Outros restaurantes ganhando espaço no mercado local",
  },
];

export const ProblemsSection = () => {
  return (
    <section id="problemas" className="py-20 bg-background" aria-label="Problemas comuns de restaurantes">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Seu restaurante está
            <span className="text-gold block">perdendo clientes</span>
            <span className="block">todos os dias?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A maioria dos restaurantes comete os mesmos erros que afastam clientes 
            e prejudicam o faturamento. Reconhece algum destes problemas?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="group hover:shadow-dark transition-all duration-300 border-2 hover:border-gold/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <problem.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gold/10 border border-gold/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gold mb-4">
              Resultado: Potencial desperdiçado e receita perdida
            </h3>
            <p className="text-lg text-muted-foreground">
              Enquanto isso, seus concorrentes que investem em marketing gastronômico 
              estão conquistando seus clientes e crescendo no mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};