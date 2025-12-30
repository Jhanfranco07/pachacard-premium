// src/components/sections/DNISearch.tsx
import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";

import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription } from "../ui/alert";

import {
  Search,
  CheckCircle,
  MapPin,
  MessageCircle,
  AlertCircle,
  Loader2,
  Info,
  Hash,
  IdCard,
} from "lucide-react";

type Row = {
  codigo?: string;
  nombre?: string;
  nombre_completo?: string;
  dni_ruc?: string;
  distrito?: string;
  zona?: string;
  direccion?: string;
  impresos?: string; // SI/NO
};

type Contribuyente = {
  codigo: string;
  nombre: string;
  nombre_completo: string;
  dni_ruc: string;
  distrito: string;
  zona: string;
  direccion: string;
  impresos: "SI" | "NO" | "";
};

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vReMGhpLiYEsv_JbYlSiC7RG50z_HVkLWLIvmTQcVtD9uqs3pyLS5ELD_T3pMTLmviGGhpe_RFmqr-t/pub?output=csv";

type SearchState =
  | "initial"
  | "loading"
  | "load-error"
  | "format-error"
  | "not-found"
  | "found-ready"
  | "found-not-ready";

function clean(v?: string) {
  return (v ?? "").toString().trim();
}

function onlyDigits(s: string) {
  return /^\d+$/.test(s);
}

export function DNISearch() {
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState<SearchState>("initial");
  const [data, setData] = useState<Contribuyente[]>([]);
  const [foundUser, setFoundUser] = useState<Contribuyente | null>(null);
  const [loadErrorMsg, setLoadErrorMsg] = useState<string>("");

  // Carga CSV
  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setSearchState("loading");
        setLoadErrorMsg("");

        const res = await fetch(CSV_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const text = await res.text();
        const parsed = Papa.parse<Row>(text, {
          header: true,
          skipEmptyLines: true,
        });

        const normalized: Contribuyente[] = (parsed.data ?? [])
          .map((r) => {
            const impresos = clean(r.impresos).toUpperCase();
            return {
              codigo: clean(r.codigo),
              nombre: clean(r.nombre),
              nombre_completo: clean(r.nombre_completo),
              dni_ruc: clean(r.dni_ruc), // texto (mantiene ceros a la izquierda)
              distrito: clean(r.distrito),
              zona: clean(r.zona),
              direccion: clean(r.direccion),
              impresos: (impresos === "SI"
                ? "SI"
                : impresos === "NO"
                ? "NO"
                : "") as "SI" | "NO" | "",
            };
          })
          .filter((r) => r.codigo || r.dni_ruc || r.nombre_completo);

        if (!isMounted) return;

        setData(normalized);
        setSearchState("initial");
      } catch (e: any) {
        if (!isMounted) return;
        setLoadErrorMsg(e?.message ?? "No se pudo cargar el CSV.");
        setSearchState("load-error");
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  // Índices para búsqueda rápida
  const index = useMemo(() => {
    const byCodigo = new Map<string, Contribuyente>();
    const byDniRuc = new Map<string, Contribuyente>();

    for (const r of data) {
      const c = r.codigo.trim();
      const d = r.dni_ruc.trim();
      if (c) byCodigo.set(c, r);
      if (d) byDniRuc.set(d, r);
    }
    return { byCodigo, byDniRuc };
  }, [data]);

  const handleSearch = () => {
    const q = query.trim();

    if (!q || !onlyDigits(q)) {
      setSearchState("format-error");
      setFoundUser(null);
      return;
    }

    let user: Contribuyente | undefined;

    // DNI (8) / RUC (11) => busca por dni_ruc, sino por código contribuyente
    if (q.length === 8 || q.length === 11) {
      user = index.byDniRuc.get(q) ?? data.find((r) => r.dni_ruc === q);
    } else {
      user = index.byCodigo.get(q) ?? data.find((r) => r.codigo === q);
    }

    if (!user) {
      setSearchState("not-found");
      setFoundUser(null);
      return;
    }

    setFoundUser(user);
    setSearchState(user.impresos === "SI" ? "found-ready" : "found-not-ready");
  };

  // ENTER para buscar
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  // MAPS
  const handleMapClickMain = () => {
    window.open("https://maps.app.goo.gl/BQpUuWMbJxz5SM9A8", "_blank");
  };

  const handleMapClickAlt = () => {
    window.open("https://maps.app.goo.gl/smZfm9w6A7CCoVfy9", "_blank");
  };

  // WHATSAPP
  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/L3tpUjgxvwz4du2H0kIrGr", "_blank");
  };

  const isLoading = searchState === "loading";

  return (
    <section id="consultar" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="mb-3">Consultar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Busca con <strong>tu código de contribuyente</strong> (recomendado), por DNI o RUC.
          </p>
        </div>

        <Card className="p-5 sm:p-8 rounded-2xl shadow-lg border-2 border-gray-200">
          <div className="space-y-6">
            {/* Buscador */}
            <div>
              <label htmlFor="q-input" className="block mb-2 text-[#0F172A] font-medium">
                Código Contribuyente / DNI / RUC
              </label>

              {/* Input group más pro */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="q-input"
                    type="text"
                    inputMode="numeric"
                    placeholder="Ej: 217791 (código) o DNI/RUC"
                    value={query}
                    onKeyDown={onKeyDown}
                    onChange={(e) => setQuery(e.target.value.replace(/\D/g, ""))}
                    className="h-12 sm:h-12 pl-12 pr-4 text-base sm:text-lg border-2 focus:border-[#7E1515] rounded-xl"
                  />
                </div>

                <Button
                  onClick={handleSearch}
                  className="bg-[#7E1515] hover:bg-[#9A1E1E] h-12 px-8 rounded-xl whitespace-nowrap"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Cargando…
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Buscar
                    </>
                  )}
                </Button>
              </div>

              {/* mini helper (más discreto en mobile) */}
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                Tip: si tienes tu <strong>código</strong>, úsalo (es el más seguro). El DNI puede empezar con 0 y se respeta.
              </p>
            </div>

            {/* Alertas */}
            {searchState === "load-error" && (
              <Alert className="border-2 border-red-200 bg-red-50 rounded-xl">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <AlertDescription className="text-red-900 text-sm sm:text-base">
                  No se pudo cargar la base. {loadErrorMsg}
                </AlertDescription>
              </Alert>
            )}

            {searchState === "format-error" && (
              <Alert className="border-2 border-orange-200 bg-orange-50 rounded-xl">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                <AlertDescription className="text-orange-900 text-sm sm:text-base">
                  Ingresa solo números. (Código / DNI 8 / RUC 11)
                </AlertDescription>
              </Alert>
            )}

            {searchState === "not-found" && (
              <Alert className="border-2 border-gray-200 bg-gray-50 rounded-xl">
                <AlertCircle className="h-5 w-5 text-gray-600" />
                <AlertDescription className="text-gray-900 text-sm sm:text-base">
                  No se encontró un registro para <strong>{query}</strong>.
                </AlertDescription>
              </Alert>
            )}

            {/* Resultados */}
            {(searchState === "found-ready" || searchState === "found-not-ready") && foundUser && (
              <div className="pt-6 border-t border-gray-200 space-y-4">
                {/* Estado */}
                {searchState === "found-ready" ? (
                  <Alert className="border-2 border-[#7E1515]/30 bg-green-50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <AlertDescription className="text-green-900 text-sm sm:text-base">
                      Tu PACHACARD PREMIUM está lista para recoger
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="border-2 border-orange-200 bg-orange-50 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <AlertDescription className="text-orange-900 text-sm sm:text-base">
                      Registro encontrado, pero figura como <strong>NO impresa</strong>.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Data card */}
                <div className="bg-gradient-to-br from-[#FBBF24]/12 via-[#F1F5F9] to-[#FBBF24]/6 rounded-2xl p-5 sm:p-6 border-2 border-[#FBBF24]/70 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Titular</p>
                      <p className="text-[#0F172A] font-medium truncate">
                        {foundUser.nombre_completo || foundUser.nombre}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-end gap-2">
                      <Badge className="bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#92400E]">
                        ⭐ PREMIUM
                      </Badge>
                      {foundUser.impresos === "SI" ? (
                        <Badge className="bg-green-100 text-green-700">IMPRESA</Badge>
                      ) : (
                        <Badge className="bg-gray-200 text-gray-700">PENDIENTE</Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/70 border border-gray-200 p-3 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#7E1515]/10 flex items-center justify-center">
                        <Hash className="w-4 h-4 text-[#7E1515]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500">Código</p>
                        <p className="text-sm sm:text-base text-[#0F172A] font-medium truncate">
                          {foundUser.codigo}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-white/70 border border-gray-200 p-3 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#7E1515]/10 flex items-center justify-center">
                        <IdCard className="w-4 h-4 text-[#7E1515]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500">DNI / RUC</p>
                        <p className="text-sm sm:text-base text-[#0F172A] font-medium truncate">
                          {foundUser.dni_ruc || "—"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lugares de recojo: en PC 2 columnas, en móvil apilado */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Principal */}
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#7E1515] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[#7E1515] font-semibold mb-2">
                          Lugar de recojo (principal)
                        </h4>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          Agencia C.P.R. Huertos de Manchay – Av. Víctor Malásquez con la Calle 57,
                          Área de Licencias y Desarrollo Económico.
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Horario: lunes a viernes 8:00 a.m. a 5:00 p.m.
                        </p>

                        <div className="mt-4 flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={handleMapClickMain}
                            variant="outline"
                            className="border-[#7E1515] text-[#7E1515] hover:bg-[#7E1515] hover:text-white rounded-xl w-full sm:w-auto"
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            Abrir Google Maps
                          </Button>

                          {searchState === "found-ready" && (
                            <Button
                              onClick={handleWhatsAppClick}
                              className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl w-full sm:w-auto"
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              WhatsApp PREMIUM
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alternativo */}
                  <div className="bg-gradient-to-br from-[#FBBF24]/10 to-[#F59E0B]/[0.06] border-2 border-[#FBBF24]/40 rounded-2xl p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FBBF24] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#92400E]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className="text-[#92400E] font-semibold">
                            Lugar de recojo (alternativo)
                          </h4>
                          <span className="text-[11px] px-2 py-1 rounded-full bg-[#FBBF24]/30 text-[#92400E] border border-[#FBBF24]/40">
                            Previa coordinación
                          </span>
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed">
                          Pasaje de los Incas (Jr. Paraíso), Pachacámac Cercado – Oficina de Licencias y Desarrollo Económico.
                        </p>

                        <div className="mt-4 flex flex-col gap-3">
                          <Button
                            onClick={handleMapClickAlt}
                            className="bg-[#92400E] hover:bg-[#7C350C] text-white rounded-xl w-full"
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            Abrir Google Maps (alternativo)
                          </Button>

                          <div className="inline-flex items-start gap-2 text-sm text-gray-700 px-3 py-3 rounded-xl bg-white/70 border border-[#FBBF24]/30">
                            <Info className="w-4 h-4 text-[#92400E] mt-0.5" />
                            <span>
                              Si estás cerca al Cercado, podemos coordinar tu atención aquí.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nota mini (discreta) */}
                <div className="text-xs sm:text-sm text-gray-500">
                  Recuerda llevar tu DNI y mencionar el programa PACHACARD al momento de la atención.
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
