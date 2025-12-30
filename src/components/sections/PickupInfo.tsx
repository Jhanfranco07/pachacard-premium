// src/app/components/PickupInfo.tsx
import type { ReactNode } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  MapPin,
  Clock,
  IdCard,
  CreditCard,
  Building2,
  Briefcase,
  Info,
} from "lucide-react";

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
        <div className="text-center mb-12">
          <h2 className="mb-4">¿Dónde recojo mi tarjeta?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toda la información que necesitas para retirar tu PACHACARD PREMIUM
          </p>
        </div>

        <Card className="p-6 sm:p-10 rounded-2xl shadow-xl border-2 border-[#7E1515] bg-white">
          {/* ====== BLOQUE PRINCIPAL ====== */}
          <PointHeader
            tone="main"
            title="Punto principal de recojo"
            subtitle="Aquí se encuentran todas las tarjetas impresas y listas para entrega."
          />

          <div className="mt-5">
            <InfoList
              tone="main"
              items={[
                {
                  icon: <Building2 className="w-5 h-5 text-white" />,
                  title: "Lugar",
                  value: "Agencia C.P.R. Huertos de Manchay",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-white" />,
                  title: "Dirección exacta",
                  value: "Av. Víctor Malásquez con la Calle 57",
                },
                {
                  icon: <Briefcase className="w-5 h-5 text-white" />,
                  title: "Área",
                  value: "Licencias y Desarrollo Económico",
                },
                {
                  icon: <Clock className="w-5 h-5 text-white" />,
                  title: "Horario",
                  value: "Lunes a viernes de 8:00 a.m. a 5:00 p.m.",
                },
                {
                  icon: <IdCard className="w-5 h-5 text-white" />,
                  title: "Requisitos",
                  value: "Traer DNI y mencionar el programa PACHACARD",
                },
              ]}
            />
          </div>

          {/* ====== BLOQUE ALTERNATIVO ====== */}
          <div className="mt-8 sm:mt-10">
            <PointHeader
              tone="alt"
              title="Punto alternativo"
              subtitle="Solo con previa coordinación (si te queda más cerca al Cercado)."
            />

            <div className="mt-5">
              <InfoList
                tone="alt"
                items={[
                  {
                    icon: <Building2 className="w-5 h-5 text-white" />,
                    title: "Lugar",
                    value:
                      "Oficina de Licencias y Desarrollo Económico",
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-white" />,
                    title: "Dirección exacta",
                    value:
                      "Pasaje de los Incas, Jr. Paraíso – Pachacámac Cercado",
                  },
                  {
                    icon: <Briefcase className="w-5 h-5 text-white" />,
                    title: "Área",
                    value: "Licencias y Desarrollo Económico",
                  },
                  {
                    icon: <Info className="w-5 h-5 text-white" />,
                    title: "Condición",
                    value:
                      "Antes de ir, se coordina para trasladar tu tarjeta a este punto y entregártela cuando llegues.",
                  },
                ]}
              />
            </div>
          </div>

          {/* ====== MENSAJE GENERAL (UNO SOLO PARA TODO) ====== */}
          <div className="mt-8 bg-[#F1F5F9] rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-[#7E1515] mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Para recoger su tarjeta, por favor acérquese al área de{" "}
                <strong>Licencias y Desarrollo Económico</strong>. El punto principal de
                atención es la <strong>Agencia C.P.R. Huertos de Manchay</strong> (Av.{" "}
                <strong>Víctor Malásquez con la Calle 57</strong>). El horario de atención es de{" "}
                <strong>lunes a viernes de 8:00 a.m. a 5:00 p.m.</strong>. Lleve su{" "}
                <strong>DNI</strong> y mencione el <strong>programa PACHACARD</strong>.
                <br />
                <span className="text-gray-600">
                  Si te queda más cerca el Cercado, puedes solicitar atención en el punto alternativo{" "}
                  <strong>solo con previa coordinación</strong>.
                </span>
              </p>
            </div>
          </div>

          {/* ====== BOTONES (mobile: apilados / pc: 2 columnas) ====== */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              onClick={handleMapClickMain}
              className="bg-[#7E1515] hover:bg-[#9A1E1E] rounded-xl w-full"
              size="lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Abrir ubicación (principal)
            </Button>

            <Button
              onClick={handleMapClickAlt}
              variant="outline"
              className="border-2 border-[#7E1515] text-[#7E1515] hover:bg-[#7E1515] hover:text-white rounded-xl w-full"
              size="lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Abrir ubicación (alternativa)
            </Button>

            <Button
              onClick={onConsultar}
              variant="outline"
              className="sm:col-span-2 border-2 border-gray-300 text-[#0F172A] hover:bg-gray-50 rounded-xl w-full"
              size="lg"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Consultar mi DNI
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ===================== COMPONENTES UI ===================== */

function PointHeader({
  tone,
  title,
  subtitle,
}: {
  tone: "main" | "alt";
  title: string;
  subtitle: string;
}) {
  const isAlt = tone === "alt";

  return (
    <div className="flex items-start gap-3">
      <div
        className={[
          "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
          isAlt ? "bg-[#92400E]" : "bg-[#7E1515]",
        ].join(" ")}
      >
        <MapPin className="w-6 h-6 text-white" />
      </div>

      <div className="min-w-0">
        <h3
          className={[
            "font-semibold leading-tight",
            isAlt ? "text-[#92400E]" : "text-[#7E1515]",
          ].join(" ")}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

/**
 * Lista responsive:
 * - Mobile: filas compactas (menos scroll)
 * - Desktop: grid 2 columnas (mantiene vista “normal”)
 */
function InfoList({
  tone,
  items,
}: {
  tone: "main" | "alt";
  items: { icon: ReactNode; title: string; value: string }[];
}) {
  const isAlt = tone === "alt";
  const iconBg = isAlt ? "bg-[#92400E]" : "bg-[#7E1515]";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={[
              "flex gap-3 p-4 sm:p-5",
              "border-t border-gray-200",
              // Quita el borde superior del primero
              idx === 0 ? "border-t-0" : "",
              // En desktop, dibuja divisor vertical entre columnas
              "md:border-t-0 md:border-r",
              // En desktop, cada fila tiene 2 items, entonces el item de la derecha no lleva border-r
              "md:[&:nth-child(2n)]:border-r-0",
              // En desktop, separa filas (a partir del 3)
              "md:[&:nth-child(n+3)]:border-t",
            ].join(" ")}
          >
            <div
              className={[
                "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                iconBg,
              ].join(" ")}
            >
              {it.icon}
            </div>

            <div className="min-w-0">
              <p
                className={[
                  "text-sm font-semibold mb-1",
                  isAlt ? "text-[#92400E]" : "text-[#7E1515]",
                ].join(" ")}
              >
                {it.title}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{it.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
