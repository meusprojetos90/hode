import { useState, useEffect, useCallback } from "react";

// ===== TYPES =====

export interface BioLink {
  id: string;
  title: string;
  url: string;
  icon: string; // lucide icon name
  enabled: boolean;
  order: number;
  clicks: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  published: boolean;
  readTime: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin"; // In case we want to add "editor" later
  createdAt: string;
  password?: string;
}

// ===== DEFAULT DATA =====

const defaultBioLinks: BioLink[] = [
  {
    id: "1",
    title: "🌐 Nosso Site",
    url: "https://hode.com.br",
    icon: "Globe",
    enabled: true,
    order: 1,
    clicks: 0,
  },
  {
    id: "2",
    title: "📱 WhatsApp — Agende sua Consultoria",
    url: "https://wa.me/5545984295124?text=Ol%C3%A1%2C%20vim%20pelo%20link%20da%20bio",
    icon: "MessageCircle",
    enabled: true,
    order: 2,
    clicks: 0,
  },
  {
    id: "3",
    title: "📸 Instagram @hodemkt",
    url: "https://www.instagram.com/hodemkt",
    icon: "Instagram",
    enabled: true,
    order: 3,
    clicks: 0,
  },
  {
    id: "4",
    title: "📝 Blog — Dicas de Marketing Gastronômico",
    url: "/blog",
    icon: "BookOpen",
    enabled: true,
    order: 4,
    clicks: 0,
  },
  {
    id: "5",
    title: "📧 Email — maiarafra@hode.com.br",
    url: "mailto:maiarafra@hode.com.br",
    icon: "Mail",
    enabled: true,
    order: 5,
    clicks: 0,
  },
  {
    id: "6",
    title: "📍 Localização — Foz do Iguaçu, PR",
    url: "https://maps.google.com/?q=Foz+do+Iguaçu+PR",
    icon: "MapPin",
    enabled: true,
    order: 6,
    clicks: 0,
  },
];

const defaultBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Erros Fatais que Restaurantes Cometem no Instagram",
    slug: "5-erros-fatais-restaurantes-instagram",
    excerpt:
      "Descubra os erros mais comuns que restaurantes cometem no Instagram e como evitá-los para atrair mais clientes e aumentar o faturamento.",
    content: `## Introdução

O Instagram é uma das ferramentas mais poderosas para restaurantes. Mas a maioria dos donos de restaurante comete erros que afastam clientes em vez de atraí-los.

## 1. Fotos Amadoras dos Pratos

O primeiro erro é postar fotos tiradas com o celular sem nenhuma preparação. A comida precisa parecer irresistível na tela. Invista em iluminação natural, ângulos estratégicos e, idealmente, em uma sessão fotográfica profissional.

## 2. Feed Sem Identidade Visual

Quando alguém visita seu perfil, precisa entender em segundos o que seu restaurante oferece. Um feed sem padrão visual transmite amadorismo. Defina uma paleta de cores, estilo de fontes e filtros consistentes.

## 3. Não Usar Stories

Stories são a ferramenta mais poderosa do Instagram para restaurantes. Mostre os bastidores, o preparo dos pratos, depoimentos de clientes. Stories geram conexão emocional.

## 4. Não Investir em Tráfego Pago

Depender apenas do orgânico é desperdiçar potencial. Com R$ 10 por dia em anúncios segmentados, você alcança milhares de pessoas na sua região que amam comer fora.

## 5. Ignorar os Comentários e DMs

Engajamento é via de mão dupla. Responda todos os comentários e mensagens rapidamente. Cada interação é uma oportunidade de conquistar um cliente.

## Conclusão

Evitar esses erros já coloca seu restaurante à frente de 90% da concorrência. Se precisa de ajuda profissional, conheça o Método SRR da Hode — a metodologia que já transformou mais de 30 restaurantes em marcas de sucesso.`,
    coverImage: "",
    category: "Redes Sociais",
    tags: ["instagram", "restaurantes", "marketing digital", "redes sociais"],
    author: "Maiara Fra",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    published: true,
    readTime: 5,
  },
  {
    id: "2",
    title: "Como o Tráfego Pago Pode Lotar Seu Restaurante em 30 Dias",
    slug: "trafego-pago-lotar-restaurante-30-dias",
    excerpt:
      "Aprenda como usar Facebook Ads e Instagram Ads para atrair clientes qualificados para seu restaurante e aumentar o movimento em apenas 30 dias.",
    content: `## Por que tráfego pago?

O tráfego pago é a forma mais rápida de colocar seu restaurante na frente das pessoas certas. Diferente do orgânico, que leva meses para dar resultado, com anúncios pagos você começa a receber clientes em dias.

## Passo 1: Defina seu Público

Quem é seu cliente ideal? Famílias? Casais? Executivos? Defina idade, localização (raio de km do restaurante), interesses e comportamentos.

## Passo 2: Crie Anúncios Irresistíveis

Use suas melhores fotos profissionais. Escreva textos que despertem desejo. Inclua uma oferta clara: "Reserve sua mesa", "Peça pelo delivery", "Conheça nosso novo prato".

## Passo 3: Configure o Pixel do Facebook

O Pixel rastreia quem visitou seu site ou interagiu com seus anúncios. Isso permite criar campanhas de remarketing para pessoas que já demonstraram interesse.

## Passo 4: Teste e Otimize

Comece com R$ 20/dia, teste diferentes públicos e criativos. Após 7 dias, analise os resultados e duplique o que funciona.

## Resultados Reais

Na Hode, já investimos mais de R$ 200.000 em tráfego pago para restaurantes. A média de custo por visita ao perfil é de R$ 0,06 — isso significa que com R$ 100, você alcança mais de 1.600 pessoas interessadas.

## Comece Agora

Se quiser implementar tráfego pago no seu restaurante com acompanhamento profissional, agende uma consultoria gratuita com a Hode.`,
    coverImage: "",
    category: "Tráfego Pago",
    tags: ["tráfego pago", "facebook ads", "instagram ads", "restaurantes"],
    author: "Maiara Fra",
    publishedAt: "2026-06-22",
    updatedAt: "2026-06-22",
    published: true,
    readTime: 6,
  },
  {
    id: "3",
    title: "O Guia Completo de Fotografia Gastronômica para Restaurantes",
    slug: "guia-completo-fotografia-gastronomica",
    excerpt:
      "Aprenda técnicas profissionais de fotografia gastronômica para fazer seus pratos parecerem irresistíveis nas redes sociais e cardápios digitais.",
    content: `## A Importância da Fotografia Gastronômica

Uma foto bem feita de um prato pode ser a diferença entre um cliente escolher seu restaurante ou o concorrente. Estudos mostram que 72% dos consumidores verificam fotos de comida antes de decidir onde comer.

## Iluminação é Tudo

Use luz natural sempre que possível. Posicione o prato próximo a uma janela, evitando luz direta do sol. Se precisar fotografar à noite, invista em um ring light ou softbox.

## Ângulos que Vendem

- **45 graus**: O mais versátil, funciona para a maioria dos pratos
- **Overhead (de cima)**: Perfeito para pizzas, bowls e mesas completas
- **Lateral**: Ideal para hambúrgueres, drinks e pratos com altura

## Composição

Menos é mais. Use complementos como talheres, guardanapos e ingredientes frescos para compor a cena, mas sem poluir a imagem.

## Edição

Ajuste brilho, contraste e saturação para realçar as cores naturais do prato. Cuidado para não exagerar — a comida precisa parecer real e apetitosa.

## Invista em Profissional

Para o banco de imagens principal do seu restaurante, invista em uma sessão profissional. Na Hode, incluímos sessões de fotografia gastronômica no Método SRR.`,
    coverImage: "",
    category: "Conteúdo",
    tags: ["fotografia", "gastronomia", "conteúdo visual", "redes sociais"],
    author: "Maiara Fra",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    published: true,
    readTime: 7,
  },
];

const defaultUsers: User[] = [
  {
    id: "1",
    email: "maiarafra5@gmail.com",
    name: "Maiara Fra",
    role: "admin",
    createdAt: "2026-07-01",
    password: "T3ch3xpr3ss@$@",
  },
];

// ===== HOOKS =====

function getStoredData<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error(`Error reading ${key} from localStorage:`, e);
  }
  return defaultValue;
}

export function useBioLinks() {
  const [links, setLinks] = useState<BioLink[]>(() =>
    getStoredData("hode_bio_links", defaultBioLinks)
  );

  useEffect(() => {
    localStorage.setItem("hode_bio_links", JSON.stringify(links));
  }, [links]);

  const addLink = useCallback((link: Omit<BioLink, "id" | "clicks">) => {
    setLinks((prev) => [
      ...prev,
      { ...link, id: Date.now().toString(), clicks: 0 },
    ]);
  }, []);

  const updateLink = useCallback((id: string, updates: Partial<BioLink>) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, ...updates } : link))
    );
  }, []);

  const deleteLink = useCallback((id: string) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  }, []);

  const trackClick = useCallback((id: string) => {
    setLinks((prev) =>
      prev.map((link) =>
        link.id === id ? { ...link, clicks: link.clicks + 1 } : link
      )
    );
  }, []);

  const reorderLinks = useCallback((reorderedLinks: BioLink[]) => {
    setLinks(reorderedLinks);
  }, []);

  return { links, addLink, updateLink, deleteLink, trackClick, reorderLinks };
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(() =>
    getStoredData("hode_blog_posts", defaultBlogPosts)
  );

  useEffect(() => {
    localStorage.setItem("hode_blog_posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = useCallback((post: Omit<BlogPost, "id">) => {
    setPosts((prev) => [{ ...post, id: Date.now().toString() }, ...prev]);
  }, []);

  const updatePost = useCallback((id: string, updates: Partial<BlogPost>) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, ...updates } : post))
    );
  }, []);

  const deletePost = useCallback((id: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }, []);

  return { posts, addPost, updatePost, deletePost };
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>(() =>
    getStoredData("hode_admin_users", defaultUsers)
  );

  useEffect(() => {
    localStorage.setItem("hode_admin_users", JSON.stringify(users));
  }, [users]);

  const addUser = useCallback((user: Omit<User, "id" | "createdAt">) => {
    setUsers((prev) => [
      ...prev,
      { ...user, id: Date.now().toString(), createdAt: new Date().toISOString().split("T")[0] },
    ]);
  }, []);

  const deleteUser = useCallback((id: string) => {
    // Prevent deleting the primary admin
    if (id === "1") return;
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }, []);

  return { users, addUser, deleteUser };
}

