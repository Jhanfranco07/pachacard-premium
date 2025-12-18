//src\app\components\PickupInfo.tsx
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Clock, FileText, CreditCard } from 'lucide-react';

interface PickupInfoProps {
  onConsultar: () => void;
}

export function PickupInfo({ onConsultar }: PickupInfoProps) {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Av.+Malasquez+con+Calle+36+Huertos+Manchay+Pachacamac', '_blank');
  };

  return (
    <section id="recojo" className="py-16 sm:py-20 bg-[#F1F5F9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">¿Dónde recojo mi tarjeta?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toda la información que necesitas para retirar tu PACHACARD PREMIUM
          </p>
        </div>

        {/* Card principal de información */}
        <Card className="p-8 sm:p-10 rounded-2xl shadow-xl border-2 border-[#7E1515] bg-white">
          {/* Grid de información */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Lugar */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-[#7E1515]">Lugar</h3>
                <p className="text-gray-600 text-sm">
                  Agencia C.P.R. Huertos de Manchay
                </p>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-[#7E1515]">Dirección</h3>
                <p className="text-gray-600 text-sm">
                  Av. Malasquez con la Calle 36, al área de Licencias y Desarrollo Económico
                </p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-[#7E1515]">Horario</h3>
                <p className="text-gray-600 text-sm">
                  Lunes a viernes de 8:00 a.m. a 5:00 p.m.
                </p>
              </div>
            </div>

            {/* Requisitos */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-[#7E1515]">Requisitos</h3>
                <p className="text-gray-600 text-sm">
                  Traer DNI y mencionar el programa PACHACARD
                </p>
              </div>
            </div>
          </div>

          {/* Texto institucional completo */}
          <div className="bg-[#F1F5F9] rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-[#7E1515] mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Para recoger su tarjeta, por favor acérquese a la <strong>Agencia C.P.R. Huertos de Manchay</strong>, 
                ubicada en: <strong>Av. Malasquez con la Calle 36</strong>, al área de <strong>Licencias y Desarrollo Económico</strong>, 
                para que podamos entregarle su tarjeta PACHACARD PREMIUM. Le recordamos llevar su <strong>DNI</strong> y mencionar 
                el <strong>programa PACHACARD</strong> al momento de la atención. Le informamos que nuestro horario de 
                atención es de <strong>lunes a viernes de 8:00 a.m. a 5:00 p.m.</strong>
              </p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleMapClick}
              className="bg-[#7E1515] hover:bg-[#9A1E1E] rounded-xl flex-1"
              size="lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Abrir ubicación en Google Maps
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

        {/* Card de nota adicional */}
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
