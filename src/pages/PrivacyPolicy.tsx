import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-gold hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para Home
        </Link>
        
        <div className="prose prose-invert prose-gold max-w-none">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 01 de Julho de 2026</p>
          
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
              <p>
                A Hode Soluções e Inovações Tecnológicas ("nós", "nosso", "nossa") respeita a sua privacidade e está comprometida em proteger os dados pessoais que você compartilha conosco. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações quando você visita nosso site hode.com.br.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dados que Coletamos</h2>
              <p>Podemos coletar as seguintes categorias de dados:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Dados de Contato:</strong> Nome, e-mail, número de telefone e empresa, fornecidos ao preencher formulários de contato.</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência, coletados automaticamente via cookies e ferramentas de analytics (como Google Analytics).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Como Usamos Seus Dados</h2>
              <p>Seus dados são utilizados exclusivamente para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Responder a dúvidas, orçamentos e solicitações de contato.</li>
                <li>Melhorar a experiência do usuário e otimizar nosso site.</li>
                <li>Enviar comunicações de marketing relevantes, desde que você tenha dado consentimento prévio.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Utilizamos cookies para personalizar conteúdo, anúncios e analisar o tráfego do site. Ao continuar navegando, você concorda com o uso de cookies. Você pode configurar seu navegador para recusar todos os cookies ou indicar quando um cookie está sendo enviado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartilhamento de Dados</h2>
              <p>
                Não vendemos nem alugamos seus dados pessoais para terceiros. Podemos compartilhar suas informações apenas com provedores de serviços de confiança que nos auxiliam na operação do site e na condução dos negócios (ex: Google Analytics, serviços de hospedagem), sempre sob estritos acordos de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
              <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Confirmar a existência de tratamento de dados.</li>
                <li>Acessar, corrigir ou atualizar seus dados.</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
                <li>Revogar o consentimento para o uso de seus dados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contato</h2>
              <p>
                Para exercer seus direitos ou tirar dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: <strong>maiarafra@hode.com.br</strong> ou pelo WhatsApp +55 (45) 98429-5124.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
