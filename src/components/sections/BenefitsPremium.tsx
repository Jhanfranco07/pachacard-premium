//src\app\components\BenefitsPremium.tsx
import { Card } from '../ui/card';
import { Gift, Megaphone, MessageCircle, Award } from 'lucide-react';

export function BenefitsPremium() {
  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#92400E] rounded-full mb-4">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>PACHACARD PREMIUM</span>
            </span>
          </div>
          <h2 className="mb-4">Beneficios Exclusivos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Como titular PREMIUM tienes acceso a ventajas adicionales y comunicación directa con la municipalidad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Beneficio 1 */}
          <Card className="p-6 hover:shadow-xl transition-all rounded-2xl border-2 border-transparent hover:border-[#FBBF24] bg-white">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FBBF24]/20 to-[#F59E0B]/20 rounded-xl flex items-center justify-center mb-4">
              <Gift className="w-7 h-7 text-[#92400E]" />
            </div>
            <h3 className="mb-3 text-[#7E1515]">Descuentos exclusivos</h3>
            <p className="text-gray-600 text-sm">
              Accede a promociones especiales solo para miembros PREMIUM en comercios del distrito
            </p>
          </Card>

          {/* Beneficio 2 */}
          <Card className="p-6 hover:shadow-xl transition-all rounded-2xl border-2 border-transparent hover:border-[#FBBF24] bg-white">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FBBF24]/20 to-[#F59E0B]/20 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-[#92400E]" />
            </div>
            <h3 className="mb-3 text-[#7E1515]">Campañas y promociones</h3>
            <p className="text-gray-600 text-sm">
              Participa en sorteos y actividades exclusivas organizadas por la municipalidad
            </p>
          </Card>

          {/* Beneficio 3 */}
          <Card className="p-6 hover:shadow-xl transition-all rounded-2xl border-2 border-transparent hover:border-[#FBBF24] bg-white">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FBBF24]/20 to-[#F59E0B]/20 rounded-xl flex items-center justify-center mb-4">
              <Megaphone className="w-7 h-7 text-[#92400E]" />
            </div>
            <h3 className="mb-3 text-[#7E1515]">Comunicados directos</h3>
            <p className="text-gray-600 text-sm">
              Recibe información prioritaria sobre eventos, avisos municipales y novedades importantes
            </p>
          </Card>

          {/* Beneficio 4 - Destacado */}
          <Card className="p-6 transition-all rounded-2xl border-2 border-[#FBBF24] bg-gradient-to-br from-[#FBBF24]/10 via-white to-[#F59E0B]/5 shadow-xl relative overflow-hidden">
            {/* Badge destacado */}
            <div className="absolute top-0 right-0 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] text-[#92400E] text-xs px-3 py-1 rounded-bl-lg">
              ⭐ Destacado
            </div>
            
            <div className="w-14 h-14 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-xl flex items-center justify-center mb-4 shadow-md">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="mb-3 text-[#7E1515]">Acceso a Grupo oficial WhatsApp PREMIUM</h3>
            <p className="text-gray-600 text-sm mb-3">
              Únete al canal de comunicación exclusivo para titulares PREMIUM
            </p>
            <div className="flex items-center gap-2 text-xs text-[#92400E] bg-[#FBBF24]/20 rounded-lg px-3 py-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Solo para titulares PREMIUM</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
