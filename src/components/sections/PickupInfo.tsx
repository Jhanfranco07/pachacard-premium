//src\app\components\PickupInfo.tsx
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Clock, FileText, CreditCard, Info } from 'lucide-react';

interface PickupInfoProps {
  onConsultar: () => void;
}

export function PickupInfo({ onConsultar }: PickupInfoProps) {
  // Punto principal (donde están todas las tarjetas)
  const handleMapClickPrincipal = () => {
    window.open('https://maps.app.goo.gl/wRXrfmhzJ1bGHpsa8', '_blank');
  };

  // Punto alternativo (solo con coordinación)
  const handleMapClickAlternativo = () => {
    window.open('https://maps.app.goo.gl/smZfm9w6A7CCoVfy9', '_blank');
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

        {/* ===================== PUNTO PRINCIPAL ===================== */}
        <Card className="p-8 sm:p-10 rounded-2xl shadow-xl border-2 border-[#7E1515] bg-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#7E1515] rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-[#7E1515]">Punto principal de recojo</h3>
              <p className="text-sm text-gray-600">
                Aquí se encuentran todas las tarjetas impresas y listas para entrega.
              </p>
            </div>
          </div>

          {/* Grid de información */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Lugar */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2 text-[#7E1515]">Lugar</h4>
                <p className="text-gray-600 text-sm">Agencia C.P.R. Huertos de Manchay</p>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2 text-[#7E1515]">Dirección</h4>
                <p className="text-gray-600 text-sm">
                  Av. Víctor Malásquez con la Calle 57, área de Licencias y Desarrollo Económico
                </p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2 text-[#7E1515]">Horario</h4>
                <p className="text-gray-600 text-sm">Lunes a viernes de 8:00 a.m. a 5:00 p.m.</p>
              </div>
            </div>

            {/* Requisitos */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2 text-[#7E1515]">Requisitos</h4>
                <p className="text-gray-600 text-sm">Traer DNI y mencionar el programa PACHACARD</p>
              </div>
            </div>
          </div>

          {/* Texto institucional */}
          <div className="bg-[#F1F5F9] rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-[#7E1515] mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Para recoger su tarjeta, por favor acérquese a la <strong>Agencia C.P.R. Huertos de Manchay</strong>,
                ubicada en: <strong>Av. Víctor Malásquez con la Calle 57</strong>, al área de{' '}
                <strong>Licencias y Desarrollo Económico</strong>, para que podamos entregarle su tarjeta{' '}
                <strong>PACHACARD PREMIUM</strong>. Le recordamos llevar su <strong>DNI</strong> y mencionar el{' '}
                <strong>programa PACHACARD</strong> al momento de la atención. Le informamos que nuestro horario de
                atención es de <strong>lunes a viernes de 8:00 a.m. a 5:00 p.m.</strong>
              </p>
            </div>
          </div>

          {/* Botones principal */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleMapClickPrincipal}
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

        {/* ===================== PUNTO ALTERNATIVO ===================== */}
        <Card className="mt-6 p-8 sm:p-10 rounded-2xl shadow-lg border-2 border-[#FBBF24] bg-gradient-to-r from-[#FBBF24]/10 to-[#F59E0B]/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FBBF24] rounded-xl flex items-center justify-center">
              <Info className="w-5 h-5 text-[#92400E]" />
            </div>
            <div>
              <h3 className="text-[#92400E]">Punto alternativo (solo con previa coordinación)</h3>
              <p className="text-sm text-gray-700">
                Si estás cerca al Cercado, podemos coordinar para llevar tu tarjeta a este punto antes de tu visita.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Lugar alternativo */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#92400E] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2 text-[#92400E]">Lugar</h4>
                <p className="text-gray-700 text-sm">
                  Oficina de Licencias y Desarrollo Económico – Pachacámac Cercado
                </p>
              </div>
            </div>

            {/* Dirección alternativo */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#92400E] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2 text-[#92400E]">Dirección</h4>
                <p className="text-gray-700 text-sm">
                  Pasaje de los Incas, Jr. Paraíso – Pachacámac Cercado
                </p>
              </div>
            </div>
          </div>

          {/* Nota importante */}
          <div className="bg-white/70 rounded-xl p-5 border border-[#FBBF24]/40 mb-6">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>Importante:</strong> Este punto es <strong>solo por coordinación previa</strong>. 
              Tu tarjeta se encuentra inicialmente en Huertos de Manchay; si coordinas con anticipación, 
              podemos trasladarla para que sea entregada por nuestro personal al momento de tu llegada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleMapClickAlternativo}
              className="bg-[#92400E] hover:bg-[#7a340a] text-white rounded-xl flex-1"
              size="lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Abrir ubicación (alternativa)
            </Button>

            <Button
              onClick={onConsultar}
              variant="outline"
              className="border-2 border-[#92400E] text-[#92400E] hover:bg-[#92400E] hover:text-white rounded-xl flex-1"
              size="lg"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Consultar mi DNI
            </Button>
          </div>
        </Card>

        {/* Card de nota adicional PREMIUM */}
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
