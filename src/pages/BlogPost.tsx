import { useBlogPosts } from "@/hooks/use-store";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import LogoHode from "@/assets/Logo-Hode.png";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useBlogPosts();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug && p.published);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-6">
          <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Artigo não encontrado
          </h1>
          <p className="text-muted-foreground mb-6">
            O artigo que você procura não existe ou foi removido
          </p>
          <Button variant="gold" asChild>
            <Link to="/blog">Voltar ao Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = posts
    .filter((p) => p.id !== post.id && p.published && p.category === post.category)
    .slice(0, 2);

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para a área de transferência!");
      }
    } catch (err) {
      // User cancelled share
    }
  };

  // Simple markdown-to-html rendering
  const renderContent = (content: string) => {
    return content
      .split("\n\n")
      .map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-2xl font-bold text-foreground mt-10 mb-4"
            >
              {block.replace("## ", "")}
            </h2>
          );
        }
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={i} className="space-y-2 my-4">
              {items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>{item.replace("- ", "")}</span>
                </li>
              ))}
            </ul>
          );
        }
        // Bold text
        const parts = block.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={j} className="text-foreground font-semibold">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-gold group-hover:-translate-x-1 transition-transform" />
            <img
              src={LogoHode}
              alt="Hode"
              className="h-8"
              width={96}
              height={32}
            />
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Compartilhar
          </button>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="mb-8">
          <Badge
            variant="outline"
            className="mb-4 border-gold/30 text-gold bg-gold/10"
          >
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-gold" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold" />
              <span>{post.readTime} min de leitura</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs border-border text-muted-foreground"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-10 bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Gostou do conteúdo? <span className="text-gold">Vamos conversar!</span>
          </h3>
          <p className="text-primary-foreground/70 mb-6">
            Agende uma consultoria gratuita e descubra como aplicar essas
            estratégias no seu restaurante
          </p>
          <a
            href="https://wa.me/5545984295124?text=Ol%C3%A1%2C%20li%20o%20artigo%20e%20gostaria%20de%20agendar%20minha%20consultoria%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-bold rounded-lg hover:bg-gold-light transition-colors shadow-gold"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com a Hode
          </a>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group block bg-card rounded-xl p-6 border-2 border-border hover:border-gold/30 transition-all hover:shadow-luxury"
                >
                  <Badge
                    variant="outline"
                    className="mb-3 border-gold/30 text-gold text-xs"
                  >
                    {related.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors mb-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {related.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

export default BlogPost;
