import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Mennyi idő alatt kapom kézhez a pénzt?", a: "A jelentkezést követően 24 órán belül kapcsolatba lépünk Önnel, majd 24–48 órán belül megtekintjük az ingatlant. A szemlét követő 1 napon belül ajánlatot készítünk. Elfogadás esetén az adásvételi szerződésre 5–7 munkanapon belül sor kerülhet, ezt követően érkezik meg a vételár." },
  { q: "Mennyi idő mire ajánlatot kapok?", a: "A helyszíni megtekintés után legfeljebb 1 napon belül megküldjük az ajánlatot." },
  { q: "Mennyi időn belül keresnek fel?", a: "Legkésőbb 24 órán belül felvesszük Önnel a kapcsolatot telefonon." },
  { q: "Szükséges-e helyszíni megtekintés?", a: "Igen, a korrekt árajánlathoz minden esetben helyszíni szemlére van szükség." },
  { q: "Milyen dokumentumok szükségesek?", a: "Tulajdoni lap, közüzemi igazolások, fennálló tartozásokról szóló dokumentumok." },
  { q: "Mi történik, ha nem fogadom el az ajánlott összeget?", a: "Ingatlanközvetítői megbízással átvállaljuk az ingatlan teljes körű értékesítését." },
];

export const Faq = () => (
  <section id="gyik" className="py-24 bg-secondary/40">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">GYIK</p>
        <h2 className="text-3xl md:text-4xl">Gyakran ismételt kérdések</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-medium hover:no-underline py-5">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
