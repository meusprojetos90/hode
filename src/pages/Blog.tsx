import { useBlogPosts } from "@/hooks/use-store";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, BookOpen, Search } from "lucide-react";
import { useState } from "react";
import LogoHode from "@/assets/Logo-Hode.png";

const categoryColors: Record<string, string> = {
  "Redes Sociais": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Tráfego Pago": "bg-green-500/10 text-green-400 border-green-500/30",
  "Conteúdo": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "Branding": "bg-orange-500/10 text-orange-400 border-orange-500/30",
  "Estratégia": "bg-gold/10 text-gold border-gold/30",
};

const Blog = () => {
  const { posts } = useBlogPosts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const publishedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const categories = [...new Set(publishedPosts.map((p) => p.category))];

  const filteredPosts = publishedPosts.filter((post) => {
    const matchesSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-gold group-hover:-translate-x-1 transition-transform" />
            <img src={LogoHode} alt="Hode" className="h-8" width={96} height={32} />
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              to="/bio"
              className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
            >
              Bio
            </Link>
            <Link
              to="/"
              className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
            >
              Site
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsla(45,100%,51%,0.08),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-4 border-gold text-gold bg-gold/10">
            <BookOpen className="w-3 h-3 mr-1" />
            Blog Hode
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dicas de{" "}
            <span className="text-gold">Marketing Gastronômico</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Conteúdo exclusivo para donos de restaurantes que querem transformar seus
            negócios em marcas de sucesso
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/40" />
            <input
              type="search"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card/10 border border-gold/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !selectedCategory
                ? "bg-gold text-primary"
                : "bg-muted text-muted-foreground hover:bg-gold/10 hover:text-gold"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gold text-primary"
                  : "bg-muted text-muted-foreground hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Nenhum artigo encontrado
            </h2>
            <p className="text-muted-foreground">
              Tente buscar por outro termo ou categoria
            </p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group block mb-12"
              >
                <Card className="overflow-hidden border-2 hover:border-gold/30 transition-all duration-300 hover:shadow-luxury">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      {/* Image placeholder */}
                      <div className="bg-gradient-to-br from-primary via-secondary to-primary aspect-video md:aspect-auto flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(45,100%,51%,0.15),transparent_70%)]" />
                        <BookOpen className="w-20 h-20 text-gold/30" />
                        <Badge className={`absolute top-4 left-4 ${categoryColors[featuredPost.category] || "bg-gold/10 text-gold border-gold/30"}`}>
                          {featuredPost.category}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <Badge variant="outline" className="mb-3 border-gold text-gold bg-gold/10 self-start">
                          Destaque
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(featuredPost.publishedAt).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime} min</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all">
                          Ler artigo <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}

            {/* Other Posts Grid */}
            {otherPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <Card className="h-full border-2 hover:border-gold/30 transition-all duration-300 hover:shadow-luxury overflow-hidden">
                      {/* Image placeholder */}
                      <div className="bg-gradient-to-br from-primary via-secondary to-primary aspect-video flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(45,100%,51%,0.15),transparent_70%)]" />
                        <BookOpen className="w-12 h-12 text-gold/30" />
                        <Badge className={`absolute top-3 left-3 text-xs ${categoryColors[post.category] || "bg-gold/10 text-gold border-gold/30"}`}>
                          {post.category}
                        </Badge>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Quer resultados <span className="text-gold">reais</span> no seu restaurante?
          </h2>
          <p className="text-primary-foreground/70 mb-6">
            Agende uma consultoria gratuita e descubra como o Método SRR pode
            transformar seu negócio
          </p>
          <a
            href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20vim%20pelo%20blog%20e%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-bold rounded-lg hover:bg-gold-light transition-colors shadow-gold"
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Hode Soluções e Inovações Tecnológicas
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
