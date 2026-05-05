import { Button } from "@/components/ui/button";

const steps = [
  { n: "01", title: "Adja meg az ingatlan adatait", desc: "Töltse ki online űrlapunkat néhány perc alatt." },
  { n: "02", title: "24 órán belül felhívjuk", desc: "Kollégánk telefonon egyeztet Önnel a részletekről." },
  { n: "03", title: "Helyszíni megtekintés", desc: "24–48 órán belül felmérjük az ingatlant Budapesten vagy Pest megyében." },
  { n: "04", title: "Ajánlat 1 napon belül", desc: "Korrekt, készpénzes árajánlatot küldünk Önnek írásban." },
  { n: "05", title: "Adásvétel 5–7 munkanap", desc: "Elfogadás esetén gyors, biztonságos szerződéskötés." },
];

export const HowItWorks = () => (
  <section id="hogyan-mukodik" className="py-24 bg-secondary/40">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Hogyan működik?</p>
        <h2 className="text-3xl md:text-4xl">Öt egyszerű lépés a készpénzes vételárig</h2>
      </div>
      <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        {steps.map((s) => (
          <li key={s.n} className="relative p-6 rounded-2xl bg-card border border-border">
            <span className="text-3xl font-bold text-accent">{s.n}</span>
            <h3 className="text-base mt-3 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 text-center">
        <Button asChild variant="hero" size="xl">
          <a href="#ajanlatkeres">Kérek ajánlatot</a>
        </Button>
      </div>
    </div>
  </section>
);
