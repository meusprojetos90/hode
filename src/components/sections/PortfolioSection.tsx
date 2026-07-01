import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import portfolio images
import port01 from "@/assets/WhatsApp Image 2025-09-15 at 11.09.24.jpeg";
import port02 from "@/assets/493225387_999521952361741_3544196573852622498_n.jpg";
import port03 from "@/assets/WhatsApp Image 2025-09-15 at 11.10.05.jpeg";
import port04 from "@/assets/524313383_1330513898642270_3518510657312413185_n.jpeg";
import port05 from "@/assets/515261285_122134561562646294_3884133212634150045_n.jpg";
import port06 from "@/assets/525227038_1245353010163870_7484726853868161054_n.jpeg";
import port07 from "@/assets/527491329_640588108505784_2579422754669706461_n.jpeg";
import port08 from "@/assets/538707630_1260898365720215_8403619512964912049_n.jpeg";
import port09 from "@/assets/541927328_18480709543072631_5699123533142402201_n.jpeg";
import port10 from "@/assets/500638398_122130740858646294_1283211497516491960_n.jpg";
import port12 from "@/assets/300088113_462655472157367_8976583936738647604_n.jpg";
import port13 from "@/assets/312729220_863505334667745_2648735700587185451_n.jpg";
import port14 from "@/assets/314082984_1387149445147906_7903745209144810798_n.jpg";
import port15 from "@/assets/315215782_1814103208951097_6938941495076903462_n.jpg";
import port16 from "@/assets/325339614_932111751495867_7174732300965880526_n.jpg";
import port17 from "@/assets/326066952_1401009580728289_6948719931141127496_n.jpg";
import port18 from "@/assets/328983696_884556779520031_2129461374747728852_n.jpg";
import port19 from "@/assets/348324679_268255025866190_4901299154282808461_n.jpg";
import port20 from "@/assets/412577614_7311843648871990_1863323247989291846_n.jpg";
import port21 from "@/assets/412829544_392337496672746_470999024875008958_n.jpg";
import port22 from "@/assets/482064860_1462732084902621_8071797267442425751_n.jpg";
import port23 from "@/assets/485893024_1474888420353654_3314944214997336622_n.jpg";
import port24 from "@/assets/486152013_122122598306646294_2257236554993419406_n.jpg";
import port25 from "@/assets/487799318_1480851839757312_6692808036591749958_n.jpg";
import port26 from "@/assets/504000295_1814028409530603_1502872241359232095_n.jpeg";
import port27 from "@/assets/504611611_122206741322122896_2716548438318096609_n.jpg";
import port28 from "@/assets/504683424_658365527223544_242413902779984932_n.jpeg";
import port29 from "@/assets/517799506_1347936030674688_2397577237440617164_n.jpg";
import port30 from "@/assets/535069427_790669890410863_1046202333193987260_n.jpeg";

const portfolioItems = [
  { id: 1, image: port01, alt: "Design de post para restaurante gourmet — gestão de redes Hode", height: "h-80" },
  { id: 2, image: port02, alt: "Fotografia profissional de prato principal — cardápio digital", height: "h-64" },
  { id: 3, image: port03, alt: "Campanha de marketing para restaurante — feed Instagram", height: "h-72" },
  { id: 4, image: port04, alt: "Foto gastronômica profissional — sobremesa artesanal", height: "h-64" },
  { id: 5, image: port05, alt: "Identidade visual de restaurante — branding Hode", height: "h-80" },
  { id: 6, image: port06, alt: "Post promocional de restaurante — tráfego pago", height: "h-72" },
  { id: 7, image: port07, alt: "Design de cardápio digital — produção de conteúdo", height: "h-64" },
  { id: 8, image: port08, alt: "Fotografia de ambiente de restaurante — fotografia profissional", height: "h-96" },
  { id: 9, image: port09, alt: "Story criativo para restaurante — engajamento Instagram", height: "h-64" },
  { id: 10, image: port10, alt: "Campanha de lançamento de prato — marketing gastronômico", height: "h-80" },
  { id: 12, image: port12, alt: "Post de divulgação de restaurante — redes sociais", height: "h-64" },
  { id: 13, image: port13, alt: "Fotografia de prato executivo — ensaio fotográfico", height: "h-80" },
  { id: 14, image: port14, alt: "Material promocional de restaurante — design criativo", height: "h-72" },
  { id: 15, image: port15, alt: "Conteúdo para feed de restaurante — copywriting", height: "h-64" },
  { id: 16, image: port16, alt: "Banner promocional de restaurante — anúncio pago", height: "h-96" },
  { id: 17, image: port17, alt: "Post de engajamento para restaurante — stories", height: "h-72" },
  { id: 18, image: port18, alt: "Fotografia gastronômica de entrada — food photography", height: "h-64" },
  { id: 19, image: port19, alt: "Criação de conteúdo para restaurante — marca premium", height: "h-72" },
  { id: 20, image: port20, alt: "Design de cardápio para restaurante — identidade visual", height: "h-96" },
  { id: 21, image: port21, alt: "Post institucional de restaurante — presença digital", height: "h-72" },
  { id: 22, image: port22, alt: "Campanha especial de restaurante — data comemorativa", height: "h-64" },
  { id: 23, image: port23, alt: "Fotografia de drink artesanal — bar e restaurante", height: "h-64" },
  { id: 24, image: port24, alt: "Arte digital para restaurante — promoção semanal", height: "h-96" },
  { id: 25, image: port25, alt: "Post de resultado de cliente — case de sucesso Hode", height: "h-64" },
  { id: 26, image: port26, alt: "Fotografia profissional de buffet — evento gastronômico", height: "h-64" },
  { id: 27, image: port27, alt: "Conteúdo para iFood — otimização de delivery", height: "h-80" },
  { id: 28, image: port28, alt: "Criação visual para restaurante — branding premium", height: "h-80" },
  { id: 29, image: port29, alt: "Ensaio fotográfico de restaurante — fotos do chef", height: "h-64" },
  { id: 30, image: port30, alt: "Design de embalagem para delivery — identidade marca", height: "h-80" },
];

export const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-background" aria-label="Portfólio de trabalhos">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Nosso Portfólio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trabalhos que
            <span className="text-gold block">Transformam Marcas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. 
            Cada trabalho é único e focado em resultados reais.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className={`group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-6 ${item.height}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-gold/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 bg-primary/95 border-gold/20">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gold rounded-lg p-8 max-w-4xl mx-auto shadow-gold">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Seu Restaurante Pode Ser o Próximo Case de Sucesso
            </h3>
            <p className="text-lg text-primary/80 mb-6">
              Vamos criar um portfólio único que posicione sua marca como referência no mercado gastronômico
            </p>
            <Button variant="premium" size="lg" asChild>
              <a 
                href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Solicitar Orçamento Personalizado
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};