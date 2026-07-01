import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio de formulário
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-background" aria-label="Entre em Contato">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como podemos <span className="text-gold">ajudar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preencha o formulário abaixo ou utilize nossos canais diretos de atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Fale Conosco</h3>
              
              <div className="space-y-6">
                <a href="https://wa.me/5545984295124" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <div className="font-semibold text-foreground group-hover:text-gold transition-colors">(45) 9 8429-5124</div>
                  </div>
                </a>
                
                <a href="mailto:maiarafra@hode.com.br" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">E-mail</div>
                    <div className="font-semibold text-foreground group-hover:text-gold transition-colors">maiarafra@hode.com.br</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Localização</div>
                    <div className="font-semibold text-foreground">Toledo - Paraná, Brasil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-card border border-border p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors text-foreground"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors text-foreground"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="restaurant" className="block text-sm font-medium mb-1 text-foreground">Nome do Restaurante</label>
                <input 
                  type="text" 
                  id="restaurant" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors text-foreground"
                  placeholder="Opcional"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">Como podemos ajudar?</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none text-foreground"
                  placeholder="Descreva seu desafio atual..."
                ></textarea>
              </div>
              
              <Button type="submit" variant="gold" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : (
                  <>
                    Enviar Mensagem <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
