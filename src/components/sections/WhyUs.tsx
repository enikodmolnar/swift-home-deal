import { Zap, MapPin, Handshake, ShieldCheck } from "lucide-react";

const items = [
  { icon: Zap, title: "Gyors ajánlatkészítés", desc: "Átlátható, kiszámítható folyamat. Ajánlatunkat legkésőbb 1 napon belül kézhez kapja." },
  { icon: MapPin, title: "Budapest és Pest megye", desc: "A teljes területen 24–48 órán belül helyszíni szemlét tartunk." },
  { icon: Handshake, title: "Közvetítés is, ha kell", desc: "Elutasítás esetén ingatlanközvetítőként segítjük az értékesítést." },
  { icon: ShieldCheck, title: "Tapasztalt szakértők", desc: "Megbízható, jogi és piaci ismeretekkel rendelkező csapat." },
];

export const WhyUs = () => (
  <section id="miert-minket" className="py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Miért válasszon minket?</p>
        <h2 className="text-3xl md:text-4xl">Megbízható partner az ingatlana gyors értékesítéséhez</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
