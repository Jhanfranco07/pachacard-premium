import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { WhatIsPachacard } from "./components/sections/WhatIsPachacard";
import { BenefitsPremium } from "./components/sections/BenefitsPremium";
import { DNISearch } from "./components/sections/DNISearch";
import { PickupInfo } from "./components/sections/PickupInfo";
import { FAQ } from "./components/sections/FAQ";
import { Footer } from "./components/sections/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        onConsultar={() => scrollToSection("consultar")}
        onBeneficios={() => scrollToSection("beneficios")}
      />

      <WhatIsPachacard />
      <BenefitsPremium />
      <DNISearch />
      <PickupInfo onConsultar={() => scrollToSection("consultar")} />
      <FAQ />
      <Footer />
    </div>
  );
}
