/**
 * Schema.org JSON-LD — Dados Estruturados Completos para SEO, AEO, AIO
 * 
 * Inclui: Organization, LocalBusiness, WebSite, WebPage, FAQPage,
 * Service, Person, BreadcrumbList, AggregateRating, HowTo
 */

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization
    {
      "@type": "Organization",
      "@id": "https://hode.com.br/#organization",
      "name": "Hode Soluções e Inovações Tecnológicas",
      "alternateName": "Hode Marketing Gastronômico",
      "url": "https://hode.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hode.com.br/Logo-Hode.png",
        "width": 512,
        "height": 512
      },
      "image": "https://hode.com.br/og-image.png",
      "description": "Agência especializada em marketing gastronômico. Transformamos restaurantes em marcas irresistíveis e rentáveis com o Método SRR.",
      "foundingDate": "2022",
      "founder": {
        "@id": "https://hode.com.br/#founder"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+55-45-98429-5124",
          "contactType": "sales",
          "areaServed": "BR",
          "availableLanguage": "Portuguese"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/hodemkt",
        "https://www.linkedin.com/company/hode-marketing",
        "https://www.facebook.com/hodemkt",
        "https://wa.me/5545984295124"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toledo",
        "addressRegion": "PR",
        "addressCountry": "BR"
      }
    },

    // 2. ProfessionalService (SEO Local específico)
    {
      "@type": "ProfessionalService",
      "@id": "https://hode.com.br/#localbusiness",
      "name": "Hode Marketing Gastronômico",
      "image": "https://hode.com.br/Logo-Hode.png",
      "url": "https://hode.com.br",
      "sameAs": [
        "https://www.instagram.com/hodemkt",
        "https://www.linkedin.com/company/hode-marketing",
        "https://www.facebook.com/hodemkt"
      ],
      "telephone": "+55-45-98429-5124",
      "email": "maiarafra@hode.com.br",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toledo",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -25.5163,
        "longitude": -54.5854
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Toledo"
        },
        {
          "@type": "State",
          "name": "Paraná"
        },
        {
          "@type": "Country",
          "name": "Brasil"
        }
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "ratingCount": "30",
        "reviewCount": "30"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
    },

    // 3. WebSite
    {
      "@type": "WebSite",
      "@id": "https://hode.com.br/#website",
      "url": "https://hode.com.br",
      "name": "Hode - Marketing Gastronômico",
      "description": "Transformamos restaurantes em marcas irresistíveis e rentáveis com o Método SRR.",
      "publisher": {
        "@id": "https://hode.com.br/#organization"
      },
      "inLanguage": "pt-BR"
    },

    // 4. WebPage
    {
      "@type": "WebPage",
      "@id": "https://hode.com.br/#webpage",
      "url": "https://hode.com.br",
      "name": "Hode | Marketing Gastronômico que Transforma Restaurantes em Marcas de Sucesso",
      "isPartOf": {
        "@id": "https://hode.com.br/#website"
      },
      "about": {
        "@id": "https://hode.com.br/#organization"
      },
      "description": "A Hode é especialista em marketing gastronômico. Transformamos restaurantes em marcas irresistíveis e rentáveis com o Método SRR.",
      "inLanguage": "pt-BR",
      "datePublished": "2022-01-01",
      "dateModified": "2026-07-01",
      "breadcrumb": {
        "@id": "https://hode.com.br/#breadcrumb"
      }
    },

    // 5. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://hode.com.br/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://hode.com.br/"
        }
      ]
    },

    // 6. Person — Fundadora
    {
      "@type": "Person",
      "@id": "https://hode.com.br/#founder",
      "name": "Maiara Fra",
      "jobTitle": "Fundadora & Especialista em Marketing Gastronômico",
      "description": "Criadora do Método SRR, especialista em transformar restaurantes em marcas reconhecidas e rentáveis.",
      "worksFor": {
        "@id": "https://hode.com.br/#organization"
      },
      "knowsAbout": [
        "Marketing Gastronômico",
        "Gestão de Redes Sociais",
        "Tráfego Pago",
        "Fotografia Gastronômica",
        "Branding para Restaurantes"
      ]
    },

    // 7. Services
    {
      "@type": "Service",
      "name": "Gestão de Redes Sociais para Restaurantes",
      "description": "Transformamos o perfil do seu restaurante em uma vitrine irresistível que atrai e converte seguidores em clientes fiéis.",
      "provider": {
        "@id": "https://hode.com.br/#organization"
      },
      "areaServed": "BR",
      "serviceType": "Marketing Digital"
    },
    {
      "@type": "Service",
      "name": "Tráfego Pago para Restaurantes",
      "description": "Campanhas otimizadas em Facebook Ads, Instagram Ads e Google Ads que direcionam o público certo para seu restaurante.",
      "provider": {
        "@id": "https://hode.com.br/#organization"
      },
      "areaServed": "BR",
      "serviceType": "Publicidade Digital"
    },
    {
      "@type": "Service",
      "name": "Fotografia Gastronômica Profissional",
      "description": "Criamos um banco de imagens irresistível que desperta desejo nos clientes e eleva a percepção de qualidade do seu restaurante.",
      "provider": {
        "@id": "https://hode.com.br/#organization"
      },
      "areaServed": "BR",
      "serviceType": "Fotografia Profissional"
    },
    {
      "@type": "Service",
      "name": "Copywriting Gastronômico",
      "description": "Textos persuasivos que conectam emocionalmente com seu público e geram mais vendas para o seu restaurante.",
      "provider": {
        "@id": "https://hode.com.br/#organization"
      },
      "areaServed": "BR",
      "serviceType": "Criação de Conteúdo"
    },

    // 8. HowTo — Método SRR
    {
      "@type": "HowTo",
      "name": "Método SRR — Como transformar seu restaurante em uma marca irresistível",
      "description": "Metodologia comprovada em 4 etapas que transforma restaurantes em marcas sexy, rentáveis e reconhecidas.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Alinhamento Estratégico",
          "text": "Definimos a identidade única do seu restaurante e o posicionamento ideal no mercado. Inclui análise de concorrência, definição de personas e estratégia de diferenciação."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Fotos Profissionais",
          "text": "Criamos um banco de imagens irresistível que desperta desejo nos clientes. Inclui sessão fotográfica profissional, edição premium e banco de imagens exclusivo."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Tráfego Pago",
          "text": "Direcionamos o público certo para seu restaurante com campanhas otimizadas em Facebook Ads, Instagram Ads e Google Ads com segmentação precisa."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Conteúdo Irresistível",
          "text": "Produzimos conteúdo que engaja, converte e fideliza seus clientes. Inclui copywriting persuasivo, stories que vendem e posts que convertem."
        }
      ]
    },

    // 9. FAQPage
    {
      "@type": "FAQPage",
      "@id": "https://hode.com.br/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é marketing gastronômico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marketing gastronômico é um conjunto de estratégias de marketing digital especializadas para restaurantes, bares, cafeterias e negócios do setor alimentício. Inclui gestão de redes sociais, fotografia profissional de pratos, tráfego pago segmentado, criação de conteúdo e branding — tudo focado em atrair mais clientes e aumentar o faturamento."
          }
        },
        {
          "@type": "Question",
          "name": "O que é o Método SRR da Hode?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O Método SRR (Sexy, Rentável e Reconhecido) é a metodologia exclusiva da Hode que transforma restaurantes em marcas de sucesso. São 4 etapas: Alinhamento Estratégico, Fotos Profissionais, Tráfego Pago e Conteúdo Irresistível. Já transformamos mais de 30 restaurantes com esta metodologia comprovada."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto custa contratar a Hode?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cada projeto é personalizado de acordo com as necessidades do restaurante. Oferecemos uma consultoria gratuita e sem compromisso para entender seu negócio e apresentar a melhor proposta. Entre em contato pelo WhatsApp (45) 9 8429-5124 para agendar."
          }
        },
        {
          "@type": "Question",
          "name": "A Hode atende apenas restaurantes em Toledo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não! Apesar de estar sediada em Toledo - PR, a Hode atende restaurantes em todo o Brasil. Nosso trabalho de gestão de redes sociais, tráfego pago e estratégia pode ser feito remotamente. Para sessões de fotografia, fazemos deslocamento conforme a necessidade."
          }
        },
        {
          "@type": "Question",
          "name": "Em quanto tempo vejo resultados?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os primeiros resultados começam a aparecer nas primeiras semanas, especialmente com tráfego pago. Resultados consistentes de branding e posicionamento se consolidam em 2 a 3 meses. Nossos clientes relatam em média um aumento de 800% no alcance das redes sociais."
          }
        },
        {
          "@type": "Question",
          "name": "Quem é Maiara Fra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maiara Fra é a fundadora da Hode e criadora do Método SRR. Com anos de experiência em marketing gastronômico, já investiu mais de R$ 200.000 em tráfego pago e transformou dezenas de restaurantes em marcas reconhecidas. É mentorada por grandes nomes do setor de marketing digital."
          }
        }
      ]
    }
  ]
};

export const JsonLd = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};
