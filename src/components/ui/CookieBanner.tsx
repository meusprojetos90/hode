import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hode_cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hode_cookie_consent", "true");
    setIsVisible(false);
    
    // Here we would typically trigger GTM or GA4 to start tracking
    if (window.dataLayer) {
      window.dataLayer.push({ event: "cookie_consent_given" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom-5">
      <div className="max-w-4xl mx-auto bg-card border border-gold/20 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex-1 space-y-2 pr-6">
          <h3 className="font-semibold text-foreground">Nós valorizamos sua privacidade</h3>
          <p className="text-sm text-muted-foreground">
            Utilizamos cookies para personalizar conteúdos e melhorar a sua experiência no site. 
            Ao continuar navegando, você concorda com a nossa{" "}
            <Link to="/politica-de-privacidade" className="text-gold hover:underline">
              Política de Privacidade
            </Link>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => setIsVisible(false)}>
            Recusar
          </Button>
          <Button variant="gold" className="w-full sm:w-auto" onClick={handleAccept}>
            Aceitar e Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};
