import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/data/blog";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl mb-4">A keresett cikk nem található</h1>
          <Link to="/" className="text-primary underline">Vissza a főoldalra</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-3xl py-16">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/#blog"><ArrowLeft className="mr-2 h-4 w-4" /> Vissza</Link>
        </Button>
        <article>
          <p className="text-sm text-muted-foreground mb-2">{article.readTime} olvasás</p>
          <h1 className="text-4xl md:text-5xl mb-6">{article.title}</h1>
          <p className="text-xl text-muted-foreground mb-10">{article.excerpt}</p>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            {article.content.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </article>
      </div>
    </main>
  );
};

export default BlogPost;
