import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <div className="text-center px-6 max-w-lg">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[10rem] md:text-[14rem] font-bold text-gold/10 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-bold text-gold">404</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Página não encontrada
        </h1>
        <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed">
          A página que você está procurando não existe ou foi movida. 
          Volte para o início e descubra como transformar seu restaurante.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gold" size="lg" asChild>
            <a href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Voltar ao Início
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-gold/30 text-gold hover:bg-gold/10" asChild>
            <a
              href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20preciso%20de%20ajuda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
