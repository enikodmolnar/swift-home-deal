import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#hero", label: "Főoldal" },
  { href: "#miert-minket", label: "Miért minket?" },
  { href: "#hogyan-mukodik", label: "Hogyan működik?" },
  { href: "#szolgaltatasi-terulet", label: "Szolgáltatási terület" },
  { href: "#ajanlatkeres", label: "Ajánlatkérés" },
  { href: "#blog", label: "Blog" },
  { href: "#gyik", label: "GYIK" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md shadow-soft transition-smooth">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2 font-semibold text-lg text-primary">
          <span className="inline-block w-3 h-3 rounded-sm bg-accent" />
          Villámvétel
        </a>
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/80 hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm">
            <a href="#ajanlatkeres">Kérjen ajánlatot</a>
          </Button>
        </div>
        <button
          aria-label="Menü megnyitása"
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <ul className="container py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/90 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild variant="hero" className="w-full">
                <a href="#ajanlatkeres" onClick={() => setOpen(false)}>Kérjen ajánlatot</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
