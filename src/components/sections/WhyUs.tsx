import { Zap, Wallet, Wrench, EyeOff, CalendarClock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Akár 1 napon belüli ajánlat",
    desc: "Az adatok beérkezése után kollégáink rövid időn belül felveszik Önnel a kapcsolatot, és legkésőbb 1 munkanapon belül versenyképes vételi ajánlatot készítünk.",
  },
  {
    icon: Wallet,
    title: "Teljesen díjmentes eladás",
    desc: "Nincsenek rejtett költségek és nem terheli közvetítői jutalék sem. A teljes folyamat – a felméréstől a szerződéskötésig – az Ön számára ingyenes.",
  },
  {
    icon: Wrench,
    title: "Felújítás nélkül is megvesszük",
    desc: "Az ingatlant a jelenlegi, meglévő állapotában vásároljuk meg. Nem kell javításokra, takarításra vagy felújításra költenie az értékesítés előtt.",
  },
  {
    icon: EyeOff,
    title: "Diszkrét, biztonságos folyamat",
    desc: "Nincs szükség hirdetésre, idegenek bemutatására vagy nyilvános érdeklődőkre. Az ügyletet bizalmas keretek között, kiszámíthatóan bonyolítjuk le.",
  },
  {
    icon: CalendarClock,
    title: "Rugalmas kiköltözés",
    desc: "Nem kell kapkodnia: az adásvételt követően egyeztetett ütemezés szerint, akár több hónap türelmi idővel is biztosítjuk a kiköltözést.",
  },
  {
    icon: ShieldCheck,
    title: "Tapasztalt, megbízható csapat",
    desc: "Jogi, pénzügyi és piaci ismeretekkel rendelkező szakértőink minden lépést átláthatóan és precízen kezelnek Budapest és Pest megye területén.",
  },
];

export const WhyUs = () => (
  <section id="miert-minket" className="py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Miért válasszon minket?</p>
        <h2 className="text-3xl md:text-4xl">Megbízható partner az ingatlana gyors értékesítéséhez</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
