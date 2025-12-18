import { Button } from "../ui/button";
import { CreditCard, Award } from "lucide-react";
import { PachacardCarousel } from "../sections/PachacardCarousel";

interface HeroProps {
  onConsultar: () => void;
  onBeneficios: () => void;
}

export function Hero({ onConsultar, onBeneficios }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#7E1515] via-[#9A1E1E] to-[#7E1515] text-white overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge oficial + logo PACHACARD (desde /public) */}
          <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
            <img
              src="/pachacard-logo.png"
              alt="PACHACARD"
              className="h-5 sm:h-6 w-auto object-contain"
            />
            <span className="text-sm">
              Sitio oficial – Municipalidad Distrital de Pachacámac
            </span>
          </div>

          {/* Título */}
          <h1 className="mb-6">
            <span className="block text-3xl sm:text-4xl lg:text-5xl mb-3">
              Tu PACHACARD PREMIUM
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              ya está lista para recoger
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Programa municipal de descuentos para contribuyentes al día. Verifica con tu DNI y recoge tu tarjeta.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={onConsultar}
              className="bg-white text-[#7E1515] hover:bg-gray-100 shadow-lg w-full sm:w-auto px-8"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Consultar con mi DNI
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={onBeneficios}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#7E1515] w-full sm:w-auto px-8"
            >
              <Award className="w-5 h-5 mr-2" />
              Ver beneficios PREMIUM
            </Button>
          </div>

          {/* Chips informativos (no parecen botones) */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80">
              <CreditCard className="w-4 h-4" />
              <span className="text-sm">Tarjeta física</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/30 text-white/90">
              <Award className="w-4 h-4 text-[#FBBF24]" />
              <span className="text-sm">Nivel PREMIUM</span>
            </div>
          </div>

          {/* Carrusel elegante */}
          <PachacardCarousel
            className="mt-10"
            images={[
              "/carrusel/pachacard-1.jpg",
              "/carrusel/pachacard-2.jpg",
              "/carrusel/pachacard-3.jpg",
              "/carrusel/pachacard-4.jpg",
            ]}
            autoPlayMs={4500}
          />
        </div>
      </div>
    </section>
  );
}
