import { Zap, Wallet, Wrench, FileWarning, ShieldCheck, CalendarClock } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Akár 1 napon belüli ajánlat",
    desc: "A megadott adatok beérkezése után rövid időn belül felvesszük Önnel a kapcsolatot, és legkésőbb 1 munkanapon belül versenyképes, reális vételi ajánlatot készítünk. A folyamat gyors, átlátható és kiszámítható.",
  },
  {
    icon: Wallet,
    title: "Teljesen díjmentes eladás",
    desc: "Nincsenek rejtett költségek, közvetítői díjak vagy váratlan kiadások. A teljes folyamat – az értékbecsléstől az adásvételi szerződésig – az Ön számára teljesen díjmentes.",
  },
  {
    icon: Wrench,
    title: "Felújítás nélkül is megvesszük",
    desc: "Az ingatlant a jelenlegi állapotában vásároljuk meg, akkor is, ha felújítandó vagy erősen elhasználódott. Nem kell felújításra, takarításra vagy felkészítésre költenie az eladás előtt.",
  },
  {
    icon: FileWarning,
    title: "Adóssággal terhelt ingatlant is megvásárolunk",
    desc: "Akkor is számíthat ránk, ha az ingatlan jelzáloggal terhelt, közüzemi tartozásai vannak, vagy akár végrehajtási eljárás van kilátásba helyezve. Szakértőink biztonságos és átlátható ügyintézést biztosítanak terhelt ingatlanok vásárlásakor is, így gyors, rendezett folyamatra számíthat.",
  },
  {
    icon: ShieldCheck,
    title: "Diszkrét és megbízható szakértői csapat",
    desc: "Tapasztalt, jogi és pénzügyi ismeretekkel rendelkező csapatunk minden ügyletet maximális diszkrécióval, bizalmasan és precízen kezel. Nem kell hirdetnie, idegeneket beengednie otthonába vagy hosszadalmas alkudozással foglalkoznia – a teljes folyamatot zárt, biztonságos keretek között bonyolítjuk le.",
  },
  {
    icon: CalendarClock,
    title: "Rugalmas kiköltözés",
    desc: "Nem szükséges kapkodnia: az adásvételt követően az Ön igényeihez igazodva előre egyeztetett határidőt biztosítunk a kiköltözésre. Kérésére akár 3 hónap türelmi időt is adunk a zökkenőmentes átmenet érdekében.",
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
