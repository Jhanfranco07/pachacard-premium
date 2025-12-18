import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Altura un poco más grande para que el logo respire */}
        <div className="flex justify-between items-center h-20">
          {/* Logo Municipalidad (solo imagen) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className="flex items-center"
            aria-label="Inicio"
          >
            <img
              src="/muni-pachacamac.png"
              alt="Municipalidad de Pachacámac"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("que-es")}
              className="text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
            >
              ¿Qué es PACHACARD?
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("beneficios")}
              className="text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
            >
              Beneficios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("consultar")}
              className="text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
            >
              Consultar DNI
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("recojo")}
              className="text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
            >
              Recojo
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("preguntas")}
              className="text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
            >
              Preguntas
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#F1F5F9] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#0F172A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0F172A]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("que-es")}
                className="justify-start text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
              >
                ¿Qué es PACHACARD?
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("beneficios")}
                className="justify-start text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
              >
                Beneficios
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("consultar")}
                className="justify-start text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
              >
                Consultar DNI
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("recojo")}
                className="justify-start text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
              >
                Recojo
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("preguntas")}
                className="justify-start text-[#0F172A] hover:text-[#7E1515] hover:bg-[#F1F5F9]"
              >
                Preguntas
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
