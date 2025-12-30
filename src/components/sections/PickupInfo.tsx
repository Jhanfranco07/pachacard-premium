// src/app/components/PickupInfo.tsx
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Clock, FileText, CreditCard, Info } from "lucide-react";

interface PickupInfoProps {
  onConsultar: () => void;
}

export function PickupInfo({ onConsultar }: PickupInfoProps) {
  const handleMapClickMain = () => {
    window.open("https://maps.app.goo.gl/wRXrfmhzJ1bGHpsa8", "_blank");
  };

  const handleMapClickAlt = () => {
    window.open("https://maps.app.goo.gl/smZfm9w6A7CCoVfy9", "_blank");
  };

  return (
    <section id="recojo" className="py-16 sm:py-20 bg-[#F1F5F9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="mb-3 sm:mb-4">¿Dónde recojo mi tarjeta?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toda la información que necesitas para retirar tu PACHACARD PREMIUM
          </p>
        </div>

        {/* CARD PRINCIPAL */}
        <Card className="p-5 sm:p-10 rounded-2xl shadow-xl border-2 border-[#7E1515] bg-white">
          {/* Encabezado */}
          <div className="flex items-start gap-3 sm:gap-4 mb-6">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="text-[#7E1515] leading-tight">Punto principal de recojo</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Aquí se encuentran todas las tarjetas impresas y listas para entrega.
              </p>
            </div>
          </div>

          {/* Mini-grid de info (mejor en móvil) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8 mb-6 sm:mb-8">
            {/* Lugar */}
            <div className="rounded-xl border border-gray-200 p-4 sm:border-0 sm:p-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#7E1515] mb-1">Lugar</p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Agencia C.P.R. Huertos de Manchay
                  </p>
                </div>
              </div>
            </div>

            {/* Dirección */}
            <div className="rounded-xl border border-gray-200 p-4 sm:border-0 sm:p-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#7E1515] mb-1">Dirección</p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Av. Víctor Malásquez con la Calle 57, área de Licencias y Desarrollo Económico
                  </p>
                </div>
              </div>
            </div>

            {/* Horario */}
            <div className="rounded-xl border border-gray-200 p-4 sm:border-0 sm:p-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#7E1515] mb-1">Horario</p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Lunes a viernes de 8:00 a.m. a 5:00 p.m.
                  </p>
                </div>
              </div>
            </div>

            {/* Requisitos */}
            <div className="rounded-xl border border-gray-200 p-4 sm:border-0 sm:p-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#7E1515] mb-1">Requisitos</p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Traer DNI y mencionar el programa PACHACARD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje general (compacto en móvil, normal en PC) */}
          <div className="bg-[#F1F5F9] rounded-xl p-4 sm:p-6 mb-5 sm:mb-6">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-[#7E1515] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Para recoger su tarjeta, por favor acérquese a la{" "}
                <strong>Agencia C.P.R. Huertos de Manchay</strong>, ubicada en{" "}
                <strong>Av. Víctor Malásquez con la Calle 57</strong>, al área de{" "}
                <strong>Licencias y Desarrollo Económico</strong>, para que podamos entregarle su{" "}
                <strong>PACHACARD PREMIUM</strong>. Le recordamos llevar su <strong>DNI</strong> y
                mencionar el <strong>programa PACHACARD</strong>. Horario:{" "}
                <strong>lunes a viernes de 8:00 a.m. a 5:00 p.m.</strong>
              </p>
            </div>
          </div>

          {/* Botones (móvil: apilados, pc: fila) */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              onClick={handleMapClickMain}
              className="bg-[#7E1515] hover:bg-[#9A1E1E] rounded-xl flex-1"
              size="lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Abrir ubicación (principal)
            </Button>

            <Button
              onClick={onConsultar}
              variant="outline"
              className="border-2 border-[#7E1515] text-[#7E1515] hover:bg-[#7E1515] hover:text-white rounded-xl flex-1"
              size="lg"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Consultar mi DNI
            </Button>
          </div>
        </Card>

        {/* CARD ALTERNATIVA (más compacta y bonita en móvil) */}
        <div className="mt-6 bg-gradient-to-r from-[#FBBF24]/10 to-[#F59E0B]/10 border-2 border-[#FBBF24] rounded-2xl p-5 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#FBBF24] rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#92400E]" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-[#92400E]">Punto alternativo</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-[#FBBF24]/40 text-[#92400E] border border-[#FBBF24]/50">
                  Solo con previa coordinación
                </span>
              </div>

              <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                Oficina de Licencias y Desarrollo Económico – <strong>Pachacámac Cercado</strong>.
                Pasaje de los Incas (Jr. Paraíso), Pachacámac Cercado.
              </p>

              <div className="mt-3 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleMapClickAlt}
                  className="bg-[#92400E] hover:bg-[#7C350C] text-white rounded-xl"
                  size="lg"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Abrir ubicación (alternativa)
                </Button>

                <div className="inline-flex items-center gap-2 text-sm text-gray-700 px-3 py-3 sm:py-2 rounded-xl bg-white/70 border border-[#FBBF24]/40">
                  <Info className="w-4 h-4 text-[#92400E]" />
                  Si estás cerca al Cercado, podemos coordinar tu atención aquí.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nota premium (igual) */}
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
