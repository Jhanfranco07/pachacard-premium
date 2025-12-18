//src\app\components\FAQ.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function FAQ() {
  return (
    <section id="preguntas" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre PACHACARD PREMIUM
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-2 border-gray-200 rounded-xl px-6 bg-white hover:border-[#7E1515] transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="text-[#0F172A]">¿Qué es PACHACARD?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-5">
              PACHACARD es un programa municipal de beneficios creado por la Municipalidad Distrital de Pachacámac 
              para reconocer y premiar a los contribuyentes que están al día con sus obligaciones tributarias. 
              A través de esta tarjeta, puedes acceder a descuentos y promociones en negocios afiliados dentro del distrito.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-2 border-gray-200 rounded-xl px-6 bg-white hover:border-[#7E1515] transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="text-[#0F172A]">¿Qué es PACHACARD PREMIUM?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-5">
              PACHACARD PREMIUM es una categoría especial del programa destinada a contribuyentes destacados. 
              Los titulares PREMIUM tienen acceso a beneficios adicionales como descuentos exclusivos, 
              comunicados prioritarios y acceso al grupo oficial de WhatsApp donde se comparten promociones especiales, 
              eventos municipales y novedades importantes del distrito.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-2 border-gray-200 rounded-xl px-6 bg-white hover:border-[#7E1515] transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="text-[#0F172A]">¿Qué hago si mi DNI no aparece?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-5">
              Si tu DNI no aparece en el sistema, puede deberse a varias razones:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Tu tarjeta aún no ha sido impresa</li>
                <li>Hay información pendiente de actualización en tus datos de contribuyente</li>
                <li>Necesitas regularizar algún pago pendiente</li>
              </ul>
              <p className="mt-2">
                Te recomendamos acercarte a la Agencia C.P.R. Huertos de Manchay (Av. Malasquez con la Calle 36) 
                en horario de atención (lunes a viernes de 8:00 a.m. a 5:00 p.m.) para verificar tu situación 
                y recibir orientación personalizada.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-2 border-gray-200 rounded-xl px-6 bg-white hover:border-[#7E1515] transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="text-[#0F172A]">¿Dónde recojo mi tarjeta?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-5">
              Puedes recoger tu tarjeta PACHACARD en:
              <div className="mt-3 bg-[#F1F5F9] rounded-lg p-4 space-y-2">
                <p><strong>Lugar:</strong> Agencia C.P.R. Huertos de Manchay</p>
                <p><strong>Dirección:</strong> Av. Malasquez con la Calle 36, área de Licencias y Desarrollo Económico</p>
                <p><strong>Horario:</strong> Lunes a viernes de 8:00 a.m. a 5:00 p.m.</p>
                <p><strong>Requisitos:</strong> Traer tu DNI y mencionar el programa PACHACARD</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-2 border-[#FBBF24] rounded-xl px-6 bg-gradient-to-br from-[#FBBF24]/5 to-transparent hover:border-[#F59E0B] transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="text-[#0F172A] flex items-center gap-2">
                <span className="text-xl">⭐</span>
                ¿Para qué sirve el grupo de WhatsApp PREMIUM?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-5">
              El grupo oficial de WhatsApp PREMIUM es un canal exclusivo de comunicación directa entre la 
              municipalidad y los contribuyentes destacados. A través de este grupo recibirás:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Comunicados oficiales:</strong> Avisos importantes y novedades municipales de forma prioritaria</li>
                <li><strong>Promociones exclusivas:</strong> Descuentos especiales solo para miembros PREMIUM</li>
                <li><strong>Eventos y campañas:</strong> Invitaciones a actividades y sorteos exclusivos</li>
                <li><strong>Atención preferente:</strong> Canal directo para consultas relacionadas con el programa</li>
              </ul>
              <p className="mt-3 bg-[#FBBF24]/10 rounded-lg p-3 text-sm text-[#92400E]">
                🔒 <strong>Nota:</strong> El acceso a este grupo es exclusivo para titulares PREMIUM verificados. 
                El enlace de acceso se proporciona al momento de recoger tu tarjeta o a través del buscador de DNI en este sitio.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
