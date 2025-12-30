// src/app/components/PickupInfo.tsx
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Clock, FileText, CreditCard } from "lucide-react";

interface PickupInfoProps {
  onConsultar: () => void;
}

export function PickupInfo({ onConsultar }: PickupInfoProps) {
  const openMainMap = () => {
    window.open("https://maps.app.goo.gl/wRXrfmhzJ1bGHpsa8", "_blank");
  };

  const openAltMap = () => {
    window.open("https://maps.app.goo.gl/smZfm9w6A7CCoVfy9", "_blank");
  };

  return (
    <section id="recojo" className="py-16 sm:py-20 bg-[#F1F5F9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">¿Dónde recojo mi tarjeta?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Te mostramos el punto principal y una alternativa (solo con previa coordinación).
          </p>
        </div>

        <Card className="p-8 sm:p-10 rounded-2xl shadow-xl border-2 border-[#7E1515] bg-white">
          {/* Header: 2 opciones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Principal */}
            <div className="rounded-2xl border border-[#7E1515]/20 bg-[#7E1515]/[0.04] p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[#7E1515] mb-1">Punto principal de recojo</h3>
                  <p className="text-gray-700 text-sm font-medium">
                    Agencia C.P.R. Huertos de Manchay
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Av. Víctor Malásquez con la Calle 57, área de Licencias y Desarrollo Económico
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#7E1515]" />
                    <span>Lunes a viernes de 8:00 a.m. a 5:00 p.m.</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4 text-[#7E1515]" />
                    <span>Traer DNI y mencionar el programa PACHACARD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternativo */}
            <div className="rounded-2xl border border-[#FBBF24]/40 bg-gradient-to-br from-[#FBBF24]/10 to-[#F59E0B]/[0.06] p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FBBF24] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#92400E]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[#92400E] mb-1">Punto alternativo</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#FBBF24]/30 text-[#92400E] border border-[#FBBF24]/40">
                      Solo con previa coordinación
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm font-medium">
                    Oficina de Licencias y Desarrollo Económico – Pachacámac Cercado
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Pasaje de los Incas (Jr. Paraíso), Pachacámac Cercado
                  </p>

                  {/* Nota corta (no tediosa) */}
                  <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                    Si estás cerca al Cercado, podemos coordinar para que tu tarjeta sea atendida en este punto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto institucional general (para ambos) */}
          <div className="bg-[#F1F5F9] rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-[#7E1515] mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Para recoger su tarjeta, por favor acérquese al <strong>punto de recojo indicado</strong> (principal o alternativo,
                según corresponda), al área de <strong>Licencias y Desarrollo Económico</strong>, para que podamos entregarle su tarjeta
                <strong> PACHACARD PREMIUM</strong>. Le recordamos llevar su <strong>DNI</strong> y mencionar el <strong>programa PACHACARD</strong>{" "}
                al momento de la atención. Le informamos que nuestro horario de atención es de{" "}
                <strong>lunes a viernes de 8:00 a.m. a 5:00 p.m.</strong>
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                onClick={openMainMap}
                className="bg-[#7E1515] hover:bg-[#9A1E1E] rounded-xl"
                size="lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Abrir ubicación (principal)
              </Button>

              <Button
                onClick={openAltMap}
                className="bg-[#92400E] hover:bg-[#7C350C] rounded-xl"
                size="lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Abrir ubicación (alternativa)
              </Button>
            </div>

            <Button
              onClick={onConsultar}
              variant="outline"
              className="border-2 border-[#7E1515] text-[#7E1515] hover:bg-[#7E1515] hover:text-white rounded-xl"
              size="lg"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Consultar mi DNI
            </Button>
          </div>
        </Card>

        {/* Nota premium (se queda igual, es buena) */}
        <div className="mt-6 bg-gradient-to-r from-[#FBBF24]/10 to-[#F59E0B]/10 border-2 border-[#FBBF24] rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#FBBF24] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">⭐</span>
            </div>
            <div>
              <h4 className="mb-2 text-[#92400E]">Titulares PREMIUM</h4>
              <p className="text-gray-700 text-sm">
                Si tu tarjeta es PREMIUM, al recogerla recibirás instrucciones adicionales para unirte
                al grupo oficial de WhatsApp y acceder a todos los beneficios exclusivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
