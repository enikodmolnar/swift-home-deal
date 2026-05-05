import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/blog";

export const Blog = () => (
  <section id="blog" className="py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Blog</p>
        <h2 className="text-3xl md:text-4xl">Hasznos tudnivalók ingatlanértékesítésről</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <Link
            key={a.slug}
            to={`/blog/${a.slug}`}
            className="group p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth flex flex-col"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{a.readTime} olvasás</p>
            <h3 className="text-xl mb-3 group-hover:text-accent transition-smooth">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">{a.excerpt}</p>
            <span className="inline-flex items-center gap-2 mt-5 text-primary font-medium text-sm">
              Cikk olvasása <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
