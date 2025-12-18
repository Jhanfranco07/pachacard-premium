//src\app\components\WhatIsPachacard.tsx
import { Card } from '../ui/card';
import { CreditCard, Gift, Shield, MessageCircle, ChevronDown } from 'lucide-react';

export function WhatIsPachacard() {
  return (
    <section id="que-es" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">¿Qué es PACHACARD?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce cómo funciona el programa de beneficios municipales para contribuyentes responsables
          </p>
        </div>

        {/* Cards de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 border-2 hover:border-[#7E1515] transition-all hover:shadow-lg rounded-2xl">
            <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#7E1515]" />
            </div>
            <h3 className="mb-2">Programa municipal de beneficios</h3>
            <p className="text-gray-600 text-sm">
              Iniciativa oficial de la Municipalidad de Pachacámac para reconocer a sus contribuyentes
            </p>
          </Card>

          <Card className="p-6 border-2 hover:border-[#7E1515] transition-all hover:shadow-lg rounded-2xl">
            <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-[#7E1515]" />
            </div>
            <h3 className="mb-2">Descuentos en negocios afiliados</h3>
            <p className="text-gray-600 text-sm">
              Accede a promociones exclusivas en comercios y servicios dentro del distrito
            </p>
          </Card>

          <Card className="p-6 border-2 hover:border-[#7E1515] transition-all hover:shadow-lg rounded-2xl">
            <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-[#7E1515]" />
            </div>
            <h3 className="mb-2">Reconoce a contribuyentes al día</h3>
            <p className="text-gray-600 text-sm">
              Premiamos tu responsabilidad tributaria con beneficios tangibles
            </p>
          </Card>

          <Card className="p-6 border-2 border-[#FBBF24] bg-gradient-to-br from-[#FBBF24]/10 to-[#FBBF24]/5 transition-all hover:shadow-xl rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-xl flex items-center justify-center mb-4 shadow-md">
              <MessageCircle className="w-6 h-6 text-[#92400E]" />
            </div>
            <div className="inline-block px-3 py-1 bg-[#FBBF24] text-[#92400E] rounded-full text-xs mb-2">
              ⭐ PREMIUM
            </div>
            <h3 className="mb-2">Beneficios exclusivos + WhatsApp oficial</h3>
            <p className="text-gray-600 text-sm">
              Acceso prioritario al grupo oficial con comunicados y promociones especiales
            </p>
          </Card>
        </div>

        {/* Mini Stepper */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F1F5F9] rounded-2xl p-8 sm:p-10">
            <h3 className="text-center mb-8 text-[#7E1515]">¿Cómo funciona?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-4">
              {/* Paso 1 */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-[#7E1515] text-white rounded-full flex items-center justify-center mb-4 shadow-lg z-10">
                  <span className="text-2xl">1</span>
                </div>
                <p className="text-sm text-[#0F172A]">
                  Estás al día como contribuyente
                </p>
                {/* Connector line - hidden on mobile, shown on sm+ */}
                <div className="hidden sm:block absolute top-8 left-1/2 w-full h-0.5 bg-[#7E1515]/30"></div>
              </div>

              {/* Paso 2 */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-[#7E1515] text-white rounded-full flex items-center justify-center mb-4 shadow-lg z-10">
                  <span className="text-2xl">2</span>
                </div>
                <p className="text-sm text-[#0F172A]">
                  Se imprime tu tarjeta
                </p>
                <div className="hidden sm:block absolute top-8 left-1/2 w-full h-0.5 bg-[#7E1515]/30"></div>
              </div>

              {/* Paso 3 */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-[#7E1515] text-white rounded-full flex items-center justify-center mb-4 shadow-lg z-10">
                  <span className="text-2xl">3</span>
                </div>
                <p className="text-sm text-[#0F172A]">
                  La recoges en nuestras oficinas
                </p>
                <div className="hidden sm:block absolute top-8 left-1/2 w-full h-0.5 bg-[#7E1515]/30"></div>
              </div>

              {/* Paso 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] text-[#92400E] rounded-full flex items-center justify-center mb-4 shadow-lg z-10">
                  <span className="text-2xl">4</span>
                </div>
                <p className="text-sm text-[#0F172A]">
                  Accedes a descuentos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
