//src\app\components\Footer.tsx
export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y nombre */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#7E1515] rounded-xl flex items-center justify-center">
                <span className="text-white">MP</span>
              </div>
              <div>
                <div className="text-[#FBBF24]">PACHACARD PREMIUM</div>
                <div className="text-sm text-gray-400">Programa oficial</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Municipalidad Distrital de Pachacámac
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#que-es" className="text-gray-400 hover:text-[#FBBF24] transition-colors">
                  ¿Qué es PACHACARD?
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-[#FBBF24] transition-colors">
                  Beneficios PREMIUM
                </a>
              </li>
              <li>
                <a href="#consultar" className="text-gray-400 hover:text-[#FBBF24] transition-colors">
                  Consultar DNI
                </a>
              </li>
              <li>
                <a href="#recojo" className="text-gray-400 hover:text-[#FBBF24] transition-colors">
                  Lugar de recojo
                </a>
              </li>
              <li>
                <a href="#preguntas" className="text-gray-400 hover:text-[#FBBF24] transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="mb-4 text-white">Ubicación</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                Agencia C.P.R. Huertos de Manchay
              </p>
              <p>
                Av. Victor Malásquez con la Calle 57
              </p>
              <p>
                Área de Licencias y Desarrollo Económico
              </p>
              <p className="pt-2">
                <strong className="text-white">Horario:</strong><br />
                Lunes a viernes<br />
                8:00 a.m. - 5:00 p.m.
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Municipalidad Distrital de Pachacámac. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Beneficios sujetos a disponibilidad. Información oficial del programa.
            </p>
          </div>
          
          {/* Badge de verificación */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
              <svg className="w-4 h-4 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sitio oficial verificado</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
