import { Link } from "react-router-dom";
import { ArrowLeft, Target, Trophy, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-gold hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Link>
          
          {/* Hero Section */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gold">Hode</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Nascemos com um propósito claro: transformar restaurantes, bares e negócios do setor alimentício em marcas irresistíveis, reconhecidas e altamente rentáveis através do marketing estratégico.
            </p>
          </section>

          {/* Stats/Credibility */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-card border border-border p-8 rounded-2xl">
              <Trophy className="w-10 h-10 text-gold mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">+30</div>
              <p className="text-muted-foreground">Restaurantes Transformados</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-2xl">
              <Target className="w-10 h-10 text-gold mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">R$ 200k+</div>
              <p className="text-muted-foreground">Gerenciados em Tráfego Pago</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-2xl">
              <Users className="w-10 h-10 text-gold mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">800%</div>
              <p className="text-muted-foreground">Aumento Médio de Alcance</p>
            </div>
          </section>

          {/* Founder Bio */}
          <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
              <img 
                src="https://hode.com.br/maiara-fra.jpg" 
                alt="Maiara Fra - Fundadora da Hode" 
                className="relative z-10 w-full rounded-2xl border border-gold/30 shadow-luxury object-cover aspect-[4/5]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80';
                }}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Maiara Fra</h2>
              <div className="text-gold font-medium uppercase tracking-wider text-sm">
                Fundadora & Especialista em Marketing Gastronômico
              </div>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Com anos de experiência no mercado digital, Maiara percebeu que muitos restaurantes excepcionais falhavam por um único motivo: <strong>ninguém os conhecia</strong>.
                </p>
                <p>
                  Não basta ter o melhor prato da cidade se a sua comunicação não transmite o valor real do seu negócio. Foi com essa visão que nasceu o <strong>Método SRR</strong> (Sexy, Rentável e Reconhecido).
                </p>
                <p>
                  Hoje, Maiara lidera a Hode com o objetivo de conectar a essência dos negócios gastronômicos aos clientes certos, utilizando fotografia que desperta desejo, tráfego pago de alta precisão e estratégias de conteúdo que convertem seguidores em clientes fiéis.
                </p>
              </div>
              <div className="pt-6 border-t border-border mt-8">
                <h3 className="font-semibold mb-4 text-foreground">Credenciais & Certificações:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Especialização em Gestão de Tráfego para Negócios Locais</li>
                  <li>✓ Mentoria O Novo Mercado</li>
                  <li>✓ Expertise em Branding e Fotografia Gastronômica</li>
                </ul>
              </div>
            </div>
          </section>

          {/* E-E-A-T Links */}
          <section className="bg-card/50 border border-border p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Nosso Compromisso com a Excelência</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossas metodologias são baseadas em dados e estudos de comportamento do consumidor das principais instituições do mundo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gold">
              <a href="https://www.sebrae.com.br" target="_blank" rel="noopener noreferrer" className="hover:underline">Metodologias Sebrae</a>
              <span>•</span>
              <a href="https://scholar.google.com.br/" target="_blank" rel="noopener noreferrer" className="hover:underline">Pesquisas Acadêmicas</a>
              <span>•</span>
              <a href="https://www.gov.br/empresas-e-negocios/pt-br" target="_blank" rel="noopener noreferrer" className="hover:underline">Dados do Setor (.gov)</a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
