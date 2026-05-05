import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-14">
    <div className="container grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-2 font-semibold text-lg mb-4">
          <span className="inline-block w-3 h-3 rounded-sm bg-accent" />
          Villámvétel
        </div>
        <p className="text-primary-foreground/75 text-sm leading-relaxed">
          Ingatlanfelvásárlás készpénzért Budapesten és Pest megyében, 24–48 órán belüli ajánlattal.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-primary-foreground">Kapcsolat</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> <a href="tel:+36208046297" className="hover:text-accent transition-smooth">+36 20 804 6297</a></li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> info@villamvetel.hu</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Budapest + Pest megye</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-primary-foreground">Jogi információk</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li><a href="#" className="hover:text-accent transition-smooth">Adatkezelési tájékoztató</a></li>
          <li><a href="#" className="hover:text-accent transition-smooth">Általános Szerződési Feltételek</a></li>
          <li><a href="#" className="hover:text-accent transition-smooth">Impresszum</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-primary-foreground/15 text-xs text-primary-foreground/60 text-center">
      © {new Date().getFullYear()} Villámvétel – villamvetel.hu. Minden jog fenntartva.
    </div>
  </footer>
);
