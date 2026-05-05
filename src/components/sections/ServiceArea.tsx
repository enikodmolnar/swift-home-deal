import { MapPin } from "lucide-react";

export const ServiceArea = () => (
  <section id="szolgaltatasi-terulet" className="py-24 bg-background">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Szolgáltatási terület</p>
        <h2 className="text-3xl md:text-4xl mb-6">Kizárólag Budapesten és Pest megyében dolgozunk.</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Gyors kiszállást, pontos értékbecslést és személyes ügyintézést biztosítunk a főváros és Pest megye bármely településén.
        </p>
      </div>
      <div className="relative aspect-square rounded-3xl bg-gradient-accent shadow-elegant flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative text-center text-primary px-8">
          <MapPin className="w-16 h-16 mx-auto mb-4" />
          <p className="text-2xl font-bold">Budapest</p>
          <p className="text-lg">+ Pest megye teljes területe</p>
        </div>
      </div>
    </div>
  </section>
);
