import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Blog } from "@/components/sections/Blog";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Villámvétel",
    description: "Ingatlanfelvásárlás készpénzért Budapesten és Pest megyében, 24–48 órán belüli ajánlattal.",
    url: "https://villamvetel.hu",
    areaServed: ["Budapest", "Pest megye"],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        <ServiceArea />
        <QuoteForm />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default Index;
