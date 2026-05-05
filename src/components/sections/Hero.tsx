import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-budapest.jpg";

export const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <img src={heroImg} alt="Budapest panoráma" className="w-full h-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
    </div>
    <div className="container grid lg:grid-cols-2 gap-12 items-center text-primary-foreground">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Készpénzes felvásárlás 24–48 órán belül
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
          Villámvétel – ingatlanfelvásárlás készpénzért, akár 24–48 órán belül.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl">
          Budapesten és Pest megyében vásárolunk ingatlanokat azonnali, korrekt készpénzes ajánlattal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="hero" size="xl">
            <a href="#ajanlatkeres">Kérjen gyors ajánlatot <ArrowRight /></a>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <a href="#hogyan-mukodik">Hogyan működik?</a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-6 mt-10 text-primary-foreground/80 text-sm">
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> 24 órás válaszidő</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Budapest + Pest megye</div>
        </div>
      </div>
    </div>
  </section>
);
