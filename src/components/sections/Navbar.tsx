// src/app/components/Navbar.tsx
import { useEffect, useMemo, useState } from "react";
import { Menu, X, HelpCircle, Gift, IdCard, MapPin, Info } from "lucide-react";
import { Button } from "../ui/button";

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ajusta este valor si tu navbar es más alto/bajo
  const NAV_OFFSET_PX = 84;

  const items: NavItem[] = useMemo(
    () => [
      { id: "que-es", label: "¿Qué es PACHACARD?", icon: <Info className="h-4 w-4" /> },
      { id: "beneficios", label: "Beneficios", icon: <Gift className="h-4 w-4" /> },
      { id: "consultar", label: "Consultar DNI", icon: <IdCard className="h-4 w-4" /> },
      { id: "recojo", label: "Recojo", icon: <MapPin className="h-4 w-4" /> },
      { id: "preguntas", label: "Preguntas", icon: <HelpCircle className="h-4 w-4" /> },
    ],
    []
  );

  // Bloquea el scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  // Cierra con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    // Si no encuentra el id, no “adivines”: así detectas rápido cuando hay id mal puesto.
    if (!el) {
      console.warn(`No se encontró la sección con id="${id}"`);
      setIsMenuOpen(false);
      return;
    }

    // Primero cerramos el menú para que no “mueva” el layout en móvil
    setIsMenuOpen(false);

    // Espera un toque para que cierre el drawer y luego scrollea fino
    window.setTimeout(() => {
      const y =
        el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;

      window.scrollTo({
        top: Math.max(0, y),
        behavior: "smooth",
      });
    }, 80);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logos */}
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/muni-pachacamac.png"
              alt="Municipalidad de Pachacámac"
              className="h-9 w-auto object-contain"
              loading="eager"
            />

            <div className="hidden sm:flex items-center gap-2 min-w-0">
              <img
                src="/pachacard-logo.png"
                alt="PACHACARD"
                className="h-9 w-auto object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {items.map((it) => (
              <Button
                key={it.id}
                variant="ghost"
                onClick={() => scrollToSection(it.id)}
                className="text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
              >
                {it.label}
              </Button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-gray-200 hover:bg-[#F1F5F9] transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5 text-[#0F172A]" />
          </button>
        </div>
      </div>

      {/* ===== Mobile Drawer ===== */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl border-l border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img
                  src="/muni-pachacamac.png"
                  alt="Municipalidad de Pachacámac"
                  className="h-8 w-auto object-contain"
                />
                <img
                  src="/pachacard-logo.png"
                  alt="PACHACARD"
                  className="h-8 w-auto object-contain"
                />
              </div>

              <button
                className="h-10 w-10 rounded-xl border border-gray-200 hover:bg-[#F1F5F9] transition-colors inline-flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5 text-[#0F172A]" />
              </button>
            </div>

            {/* Items */}
            <div className="p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500 px-2 mb-3">
                Navegación
              </p>

              <div className="space-y-2">
                {items.map((it) => (
                  <button
                    key={it.id}
                    onClick={() => scrollToSection(it.id)}
                    className={[
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl",
                      "border border-gray-200 bg-white",
                      "hover:border-[#7E1515]/30 hover:bg-[#F1F5F9]",
                      "transition-all",
                    ].join(" ")}
                  >
                    <span className="h-9 w-9 rounded-xl bg-[#7E1515] text-white flex items-center justify-center flex-shrink-0">
                      {it.icon}
                    </span>
                    <span className="text-sm font-medium text-[#0F172A]">
                      {it.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-gray-200 bg-[#F8FAFC] p-4">
                <p className="text-sm font-semibold text-[#0F172A]">
                  Consejo rápido
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Para buscar más rápido, usa tu <strong>código de contribuyente</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
