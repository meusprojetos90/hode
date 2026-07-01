import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useBioLinks,
  useBlogPosts,
  useUsers,
  type BioLink,
  type BlogPost,
  type User,
} from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Edit2,
  Eye,
  EyeOff,
  ExternalLink,
  Link2,
  BookOpen,
  BarChart3,
  Save,
  X,
  GripVertical,
  ArrowUp,
  ArrowDown,
  MousePointerClick,
  Globe,
  Lock,
  Wand2,
  Sparkles,
  Loader2,
  Users,
  UserPlus,
} from "lucide-react";
import LogoHode from "@/assets/Logo-Hode.png";

// ===== ADMIN AUTH =====
const AdminLogin = ({ onLogin }: { onLogin: (user: User) => void }) => {
  const { users } = useUsers();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      sessionStorage.setItem("hode_admin_auth", JSON.stringify(user));
      onLogin(user);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <Card className="w-full max-w-md bg-card/10 border-gold/20 backdrop-blur-sm shadow-luxury">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-primary-foreground mb-2">
            Painel Admin
          </h1>
          <p className="text-primary-foreground/60 mb-8">
            Entre com suas credenciais de acesso
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className={`w-full px-4 py-3 rounded-lg bg-card/10 border text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all ${
                error
                  ? "border-destructive shake"
                  : "border-gold/20 focus:border-gold/50"
              }`}
              autoFocus
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className={`w-full px-4 py-3 rounded-lg bg-card/10 border text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all ${
                error
                  ? "border-destructive shake"
                  : "border-gold/20 focus:border-gold/50"
              }`}
              required
            />
            {error && (
              <p className="text-destructive text-sm mt-1">E-mail ou senha incorretos</p>
            )}
            <Button variant="gold" className="w-full mt-2" type="submit">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

// ===== BIO LINKS MANAGER =====

const BioLinksManager = () => {
  const { links, addLink, updateLink, deleteLink } = useBioLinks();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    icon: "ExternalLink",
    enabled: true,
    order: 0,
  });

  const sorted = [...links].sort((a, b) => a.order - b.order);
  const totalClicks = links.reduce((sum, l) => sum + l.clicks, 0);

  const handleAdd = () => {
    addLink({ ...formData, order: links.length + 1 });
    setFormData({ title: "", url: "", icon: "ExternalLink", enabled: true, order: 0 });
    setShowForm(false);
  };

  const handleSaveEdit = (id: string) => {
    updateLink(id, formData);
    setEditingId(null);
    setFormData({ title: "", url: "", icon: "ExternalLink", enabled: true, order: 0 });
  };

  const startEdit = (link: BioLink) => {
    setEditingId(link.id);
    setFormData({
      title: link.title,
      url: link.url,
      icon: link.icon,
      enabled: link.enabled,
      order: link.order,
    });
  };

  const moveLink = (id: string, direction: "up" | "down") => {
    const idx = sorted.findIndex((l) => l.id === id);
    if (direction === "up" && idx > 0) {
      updateLink(sorted[idx].id, { order: sorted[idx - 1].order });
      updateLink(sorted[idx - 1].id, { order: sorted[idx].order });
    } else if (direction === "down" && idx < sorted.length - 1) {
      updateLink(sorted[idx].id, { order: sorted[idx + 1].order });
      updateLink(sorted[idx + 1].id, { order: sorted[idx].order });
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{links.length}</div>
            <div className="text-xs text-muted-foreground">Links</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gold">{links.filter((l) => l.enabled).length}</div>
            <div className="text-xs text-muted-foreground">Ativos</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{totalClicks}</div>
            <div className="text-xs text-muted-foreground">Cliques</div>
          </CardContent>
        </Card>
      </div>

      {/* Add Button */}
      <Button
        variant="gold"
        className="w-full"
        onClick={() => {
          setShowForm(true);
          setEditingId(null);
          setFormData({ title: "", url: "", icon: "ExternalLink", enabled: true, order: links.length + 1 });
        }}
      >
        <Plus className="w-4 h-4 mr-2" />
        Adicionar Link
      </Button>

      {/* Add Form */}
      {showForm && !editingId && (
        <Card className="bg-card border-gold/30">
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-foreground">Novo Link</h3>
            <input
              type="text"
              placeholder="Título do link"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
            />
            <input
              type="text"
              placeholder="URL (https://...)"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
            />
            <select
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
            >
              <option value="ExternalLink">Link Externo</option>
              <option value="Globe">Website</option>
              <option value="MessageCircle">WhatsApp</option>
              <option value="Instagram">Instagram</option>
              <option value="Mail">Email</option>
              <option value="MapPin">Localização</option>
              <option value="BookOpen">Blog</option>
            </select>
            <div className="flex gap-2">
              <Button variant="gold" size="sm" onClick={handleAdd} disabled={!formData.title || !formData.url}>
                <Save className="w-4 h-4 mr-1" />
                Salvar
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowForm(false)}>
                <X className="w-4 h-4 mr-1" />
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Links List */}
      <div className="space-y-2">
        {sorted.map((link) => (
          <Card key={link.id} className={`bg-card border transition-all ${link.enabled ? "border-border" : "border-border opacity-50"}`}>
            <CardContent className="p-4">
              {editingId === link.id ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  <input
                    type="text"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  <div className="flex gap-2">
                    <Button variant="gold" size="sm" onClick={() => handleSaveEdit(link.id)}>
                      <Save className="w-4 h-4 mr-1" />
                      Salvar
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setEditingId(null)}>
                      <X className="w-4 h-4 mr-1" />
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <GripVertical className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-foreground truncate">
                      {link.title}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {link.url}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs flex-shrink-0">
                    <MousePointerClick className="w-3 h-3 mr-1" />
                    {link.clicks}
                  </Badge>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button onClick={() => moveLink(link.id, "up")} className="p-1 text-muted-foreground hover:text-foreground">
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <button onClick={() => moveLink(link.id, "down")} className="p-1 text-muted-foreground hover:text-foreground">
                      <ArrowDown className="w-4 h-4" />
                    </button>
                    <button onClick={() => startEdit(link)} className="p-1 text-muted-foreground hover:text-gold">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => updateLink(link.id, { enabled: !link.enabled })}
                      className={`p-1 ${link.enabled ? "text-green-500" : "text-muted-foreground"}`}
                    >
                      {link.enabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                    <button onClick={() => deleteLink(link.id)} className="p-1 text-muted-foreground hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ===== BLOG POSTS MANAGER =====

const BlogPostsManager = () => {
  const { posts, addPost, updatePost, deletePost } = useBlogPosts();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showAIForm, setShowAIForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiInstructions, setAiInstructions] = useState("");
  const [aiCategory, setAiCategory] = useState("Estratégia");
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Estratégia",
    tags: [],
    author: "Maiara Fra",
    published: false,
    readTime: 5,
    coverImage: "",
  });

  const sorted = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleAdd = () => {
    const now = new Date().toISOString().split("T")[0];
    addPost({
      title: formData.title || "Novo Post",
      slug: formData.slug || generateSlug(formData.title || "novo-post"),
      excerpt: formData.excerpt || "",
      content: formData.content || "",
      coverImage: formData.coverImage || "",
      category: formData.category || "Estratégia",
      tags: formData.tags || [],
      author: formData.author || "Maiara Fra",
      publishedAt: now,
      updatedAt: now,
      published: formData.published || false,
      readTime: formData.readTime || 5,
    });
    resetForm();
  };

  const handleSaveEdit = (id: string) => {
    updatePost(id, {
      ...formData,
      slug: formData.slug || generateSlug(formData.title || ""),
      updatedAt: new Date().toISOString().split("T")[0],
    });
    setEditingId(null);
    resetForm();
  };

  const startEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setShowForm(false);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags,
      author: post.author,
      published: post.published,
      readTime: post.readTime,
      coverImage: post.coverImage,
    });
  };

  const resetForm = () => {
    setShowForm(false);
    setShowAIForm(false);
    setEditingId(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "Estratégia",
      tags: [],
      author: "Maiara Fra",
      published: false,
      readTime: 5,
      coverImage: "",
    });
  };

  const generatePostWithAI = () => {
    if (!aiInstructions.trim()) return;
    setIsGenerating(true);

    // Simulate API delay
    setTimeout(() => {
      const generatedTitle = `Como usar ${aiInstructions.substring(0, 30)} para Lotar seu Restaurante`;
      const generatedContent = `## O Problema que Você Ignora

A maioria dos restaurantes perde dinheiro diariamente porque não sabe aplicar ${aiInstructions}. Você gasta tempo com ações que não trazem retorno e vê os clientes indo para o concorrente.

## A Solução Comprovada

Para virar o jogo, você precisa de uma estratégia clara. Nossa análise mostra que focar em **${aiInstructions}** aumenta a conversão em até 300%.

- **Passo 1:** Analise seu público-alvo e veja como eles reagem a essa estratégia.
- **Passo 2:** Adapte sua comunicação visual e escrita.
- **Passo 3:** Invista de forma inteligente, mensurando cada resultado.

## O Método SRR na Prática

Com o **Método SRR** (Sexy, Rentável e Reconhecido), nós já validamos que ${aiInstructions} é essencial para o sucesso a longo prazo.

> "Não basta ter a melhor comida se ninguém conhece a sua marca."

Não deixe seu potencial na mesa. Agende uma consultoria com a Hode e vamos implementar isso hoje mesmo.`;

      setFormData({
        title: generatedTitle,
        slug: generateSlug(generatedTitle),
        excerpt: `Descubra a estratégia exata sobre ${aiInstructions} para transformar seu restaurante em uma máquina de vendas previsível.`,
        content: generatedContent,
        category: aiCategory,
        tags: ["marketing", aiCategory.toLowerCase(), "restaurante", "vendas"],
        author: "Maiara Fra (IA)",
        published: false,
        readTime: 4,
      });

      setIsGenerating(false);
      setShowAIForm(false);
      setShowForm(true);
    }, 2500);
  };

  const PostForm = ({ isEdit, id }: { isEdit?: boolean; id?: string }) => (
    <Card className="bg-card border-gold/30">
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground">
          {isEdit ? "Editar Post" : "Novo Post"}
        </h3>
        <input
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={(e) => {
            setFormData({
              ...formData,
              title: e.target.value,
              slug: generateSlug(e.target.value),
            });
          }}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
        <input
          type="text"
          placeholder="Slug (auto-gerado)"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
        <textarea
          placeholder="Resumo / Excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          rows={2}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none"
        />
        <textarea
          placeholder="Conteúdo (use ## para títulos, - para listas)"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={10}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 resize-y font-mono"
        />
        <div className="grid grid-cols-2 gap-3">
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
          >
            <option value="Estratégia">Estratégia</option>
            <option value="Redes Sociais">Redes Sociais</option>
            <option value="Tráfego Pago">Tráfego Pago</option>
            <option value="Conteúdo">Conteúdo</option>
            <option value="Branding">Branding</option>
          </select>
          <input
            type="number"
            placeholder="Tempo de leitura (min)"
            value={formData.readTime}
            onChange={(e) =>
              setFormData({ ...formData, readTime: parseInt(e.target.value) || 5 })
            }
            className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>
        <input
          type="text"
          placeholder="Tags (separadas por vírgula)"
          value={formData.tags?.join(", ")}
          onChange={(e) =>
            setFormData({
              ...formData,
              tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
            })
          }
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.published}
            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
            className="rounded border-border"
          />
          <span className="text-sm text-foreground">Publicado</span>
        </label>
        <div className="flex gap-2">
          <Button
            variant="gold"
            size="sm"
            onClick={isEdit && id ? () => handleSaveEdit(id) : handleAdd}
            disabled={!formData.title}
          >
            <Save className="w-4 h-4 mr-1" />
            Salvar
          </Button>
          <Button variant="outline" size="sm" onClick={resetForm}>
            <X className="w-4 h-4 mr-1" />
            Cancelar
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{posts.length}</div>
            <div className="text-xs text-muted-foreground">Posts</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">
              {posts.filter((p) => p.published).length}
            </div>
            <div className="text-xs text-muted-foreground">Publicados</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gold">
              {posts.filter((p) => !p.published).length}
            </div>
            <div className="text-xs text-muted-foreground">Rascunhos</div>
          </CardContent>
        </Card>
      </div>

      {/* Add Button */}
      {!showForm && !editingId && !showAIForm && (
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full border-border hover:bg-muted" onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Post Manual
          </Button>
          <Button variant="gold" className="w-full" onClick={() => setShowAIForm(true)}>
            <Wand2 className="w-4 h-4 mr-2" />
            Criar com IA
          </Button>
        </div>
      )}

      {/* AI Form */}
      {showAIForm && (
        <Card className="bg-card border-gold/30 shadow-gold relative overflow-hidden">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
          
          <CardContent className="p-6 space-y-4 relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <h3 className="font-semibold text-foreground text-lg">Gerador de Posts Estruturados (IA)</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Descreva sobre o que você quer falar. A IA vai estruturar o post usando técnicas avançadas de copywriting (AIDA/PAS) focadas em conversão.
            </p>
            
            <textarea
              placeholder="Ex: Quero um post falando sobre a importância de ter um cardápio digital bonito para aumentar as vendas no delivery..."
              value={aiInstructions}
              onChange={(e) => setAiInstructions(e.target.value)}
              rows={4}
              className="w-full px-3 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <select
                value={aiCategory}
                onChange={(e) => setAiCategory(e.target.value)}
                className="px-3 py-2 rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
              >
                <option value="Estratégia">Estratégia</option>
                <option value="Redes Sociais">Redes Sociais</option>
                <option value="Tráfego Pago">Tráfego Pago</option>
                <option value="Conteúdo">Conteúdo</option>
                <option value="Branding">Branding</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                variant="gold"
                onClick={generatePostWithAI}
                disabled={!aiInstructions.trim() || isGenerating}
                className="flex-1"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analisando e Gerando...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Gerar Post Estruturado
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={() => setShowAIForm(false)} disabled={isGenerating}>
                <X className="w-4 h-4 mr-1" />
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add/Edit Manual Form */}
      {showForm && <PostForm />}

      {/* Posts List */}
      <div className="space-y-2">
        {sorted.map((post) => (
          <div key={post.id}>
            {editingId === post.id ? (
              <PostForm isEdit id={post.id} />
            ) : (
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm text-foreground truncate">
                          {post.title}
                        </h4>
                        {post.published ? (
                          <Badge className="bg-green-500/10 text-green-500 border-green-500/30 text-[10px]">
                            Publicado
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px]">
                            Rascunho
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{new Date(post.publishedAt).toLocaleDateString("pt-BR")}</span>
                        <span>•</span>
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {post.published && (
                        <Link
                          to={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-1 text-muted-foreground hover:text-gold"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      )}
                      <button onClick={() => startEdit(post)} className="p-1 text-muted-foreground hover:text-gold">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => updatePost(post.id, { published: !post.published })}
                        className={`p-1 ${post.published ? "text-green-500" : "text-muted-foreground"}`}
                      >
                        {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                      <button onClick={() => deletePost(post.id)} className="p-1 text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== USERS MANAGER =====

const UsersManager = ({ currentUser }: { currentUser: User }) => {
  const { users, addUser, deleteUser } = useUsers();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({
      name: formData.name,
      email: formData.email,
      role: "admin",
      password: formData.password,
    });
    setFormData({ name: "", email: "", password: "" });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{users.length}</div>
            <div className="text-xs text-muted-foreground">Administradores</div>
          </CardContent>
        </Card>
      </div>

      {/* Add Button */}
      {!showForm && (
        <Button variant="gold" className="w-full" onClick={() => setShowForm(true)}>
          <UserPlus className="w-4 h-4 mr-2" />
          Novo Usuário
        </Button>
      )}

      {/* Add Form */}
      {showForm && (
        <Card className="bg-card border-gold/30">
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-foreground mb-2">Novo Administrador</h3>
            <form onSubmit={handleAdd} className="space-y-3">
              <input
                type="text"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
                required
              />
              <input
                type="password"
                placeholder="Senha de acesso"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
                required
                minLength={6}
              />
              <div className="flex gap-2">
                <Button variant="gold" size="sm" type="submit">
                  <Save className="w-4 h-4 mr-1" />
                  Salvar
                </Button>
                <Button variant="outline" size="sm" type="button" onClick={() => setShowForm(false)}>
                  <X className="w-4 h-4 mr-1" />
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Users List */}
      <div className="space-y-2">
        {users.map((user) => (
          <Card key={user.id} className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-foreground">{user.name}</h4>
                    {user.id === "1" && (
                      <Badge className="bg-gold/10 text-gold border-gold/30 text-xs">
                        Principal
                      </Badge>
                    )}
                    {user.id === currentUser.id && user.id !== "1" && (
                      <Badge variant="outline" className="text-xs">Você</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                {user.id !== "1" && user.id !== currentUser.id && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => {
                      if (window.confirm(`Tem certeza que deseja excluir o usuário ${user.name}?`)) {
                        deleteUser(user.id);
                      }
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ===== MAIN ADMIN PAGE =====

const Admin = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const stored = sessionStorage.getItem("hode_admin_auth");
    return stored ? JSON.parse(stored) : null;
  });

  if (!currentUser) {
    return <AdminLogin onLogin={(user) => setCurrentUser(user)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="group flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-gold group-hover:-translate-x-1 transition-transform" />
              <img
                src={LogoHode}
                alt="Hode"
                className="h-8"
                width={96}
                height={32}
              />
            </Link>
            <Badge variant="outline" className="border-gold text-gold bg-gold/10">
              Admin
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/bio"
              target="_blank"
              className="text-xs text-primary-foreground/60 hover:text-gold transition-colors flex items-center gap-1"
            >
              <Eye className="w-3 h-3" />
              Bio
            </Link>
            <Link
              to="/blog"
              target="_blank"
              className="text-xs text-primary-foreground/60 hover:text-gold transition-colors flex items-center gap-1"
            >
              <Eye className="w-3 h-3" />
              Blog
            </Link>
            <button
              onClick={() => {
                sessionStorage.removeItem("hode_admin_auth");
                setIsAuthenticated(false);
              }}
              className="text-xs text-primary-foreground/60 hover:text-destructive transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted">
            <TabsTrigger
              value="bio"
              className="flex items-center gap-2 data-[state=active]:bg-gold data-[state=active]:text-primary"
            >
              <Link2 className="w-4 h-4" />
              Bio Links
            </TabsTrigger>
            <TabsTrigger
              value="blog"
              className="flex items-center gap-2 data-[state=active]:bg-gold data-[state=active]:text-primary"
            >
              <BookOpen className="w-4 h-4" />
              Blog Posts
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="flex items-center gap-2 data-[state=active]:bg-gold data-[state=active]:text-primary"
            >
              <Users className="w-4 h-4" />
              Usuários
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bio">
            <BioLinksManager />
          </TabsContent>

          <TabsContent value="blog">
            <BlogPostsManager />
          </TabsContent>

          <TabsContent value="users">
            <UsersManager currentUser={currentUser} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
