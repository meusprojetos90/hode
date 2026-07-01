import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "O que é marketing gastronômico?",
    answer:
      "Marketing gastronômico é um conjunto de estratégias de marketing digital especializadas para restaurantes, bares, cafeterias e negócios do setor alimentício. Inclui gestão de redes sociais, fotografia profissional de pratos, tráfego pago segmentado, criação de conteúdo e branding — tudo focado em atrair mais clientes e aumentar o faturamento.",
  },
  {
    question: "O que é o Método SRR da Hode?",
    answer:
      "O Método SRR (Sexy, Rentável e Reconhecido) é a metodologia exclusiva da Hode que transforma restaurantes em marcas de sucesso em 4 etapas: Alinhamento Estratégico, Fotos Profissionais, Tráfego Pago e Conteúdo Irresistível. Já transformamos mais de 30 restaurantes com esta metodologia comprovada.",
  },
  {
    question: "Quanto custa contratar a Hode?",
    answer:
      "Cada projeto é personalizado de acordo com as necessidades do restaurante. Oferecemos uma consultoria gratuita e sem compromisso para entender seu negócio e apresentar a melhor proposta. Entre em contato pelo WhatsApp (45) 9 8429-5124 para agendar.",
  },
  {
    question: "A Hode atende apenas restaurantes em Toledo?",
    answer:
      "Não! Apesar de estar sediada em Toledo - PR, a Hode atende restaurantes em todo o Brasil. Nosso trabalho de gestão de redes sociais, tráfego pago e estratégia pode ser feito remotamente. Para sessões de fotografia, fazemos deslocamento conforme a necessidade.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer:
      "Os primeiros resultados começam a aparecer nas primeiras semanas, especialmente com tráfego pago. Resultados consistentes de branding e posicionamento se consolidam em 2 a 3 meses. Nossos clientes relatam em média um aumento de 800% no alcance das redes sociais.",
  },
  {
    question: "Quem é Maiara Fra?",
    answer:
      "Maiara Fra é a fundadora da Hode e criadora do Método SRR. Com anos de experiência em marketing gastronômico, já investiu mais de R$ 200.000 em tráfego pago e transformou dezenas de restaurantes em marcas reconhecidas e rentáveis.",
  },
  {
    question: "A consultoria é realmente gratuita?",
    answer:
      "Sim! A consultoria inicial é 100% gratuita e sem compromisso. Em uma conversa rápida de aproximadamente 30 minutos, analisamos a situação atual do seu restaurante e apresentamos as melhores estratégias para o seu caso. Você decide depois, sem pressão.",
  },
  {
    question: "Vocês fazem a fotografia profissional dos pratos?",
    answer:
      "Sim! Realizamos sessões de fotografia gastronômica profissional para criar um banco de imagens irresistível. As fotos são essenciais para despertar o desejo dos clientes nas redes sociais, cardápios digitais e plataformas como iFood.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted" aria-label="Perguntas Frequentes">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            <HelpCircle className="w-3 h-3 mr-1" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ainda tem dúvidas sobre como 
            <span className="text-gold"> funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de marketing gastronômico
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card border-2 border-border hover:border-gold/30 rounded-lg px-6 transition-all duration-300 data-[state=open]:border-gold/50 data-[state=open]:shadow-gold"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-gold py-6 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <a href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os" target="_blank" rel="noopener noreferrer">
              Falar com um Especialista no WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
