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

  const handleMapClick = () => {
    window.open(
      "https://maps.app.goo.gl/BQpUuWMbJxz5SM9A8",
      "_blank",
    );
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/?text=Solicitud%20de%20acceso%20al%20grupo%20PREMIUM",
      "_blank",
    );
  };

  return (
    <section id="consultar" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Consultar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Busca con <strong>tu código de contribuyente</strong> (recomendado), por DNI o RUC.
          </p>
        </div>

        <Card className="p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-gray-200">
          <div className="space-y-6">
            <div>
              <label htmlFor="q-input" className="block mb-2 text-[#0F172A]">
                Código Contribuyente / DNI / RUC
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  id="q-input"
                  type="text"
                  placeholder="Ej: 1065 (código) o 01234567 (DNI) o 20123456789 (RUC)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value.replace(/\D/g, ""))}
                  className="flex-1 h-12 text-lg border-2 focus:border-[#7E1515] rounded-xl"
                />

                <Button
                  onClick={handleSearch}
                  className="bg-[#7E1515] hover:bg-[#9A1E1E] h-12 px-8 rounded-xl whitespace-nowrap"
                  size="lg"
                  disabled={searchState === "loading"}
                >
                  {searchState === "loading" ? (
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
            </div>

            {searchState === "load-error" && (
              <Alert className="border-2 border-red-200 bg-red-50 rounded-xl">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <AlertDescription className="text-red-900">
                  No se pudo cargar el CSV. {loadErrorMsg}
                </AlertDescription>
              </Alert>
            )}

            {searchState === "format-error" && (
              <Alert className="border-2 border-orange-200 bg-orange-50 rounded-xl">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                <AlertDescription className="text-orange-900">
                  Ingresa solo números. (Código / DNI 8 / RUC 11)
                </AlertDescription>
              </Alert>
            )}

            {searchState === "not-found" && (
              <Alert className="border-2 border-gray-200 bg-gray-50 rounded-xl">
                <AlertCircle className="h-5 w-5 text-gray-600" />
                <AlertDescription className="text-gray-900">
                  No se encontró un registro para <strong>{query}</strong>.
                </AlertDescription>
              </Alert>
            )}

            {(searchState === "found-ready" || searchState === "found-not-ready") &&
              foundUser && (
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  {searchState === "found-ready" ? (
                    <Alert className="border-2 border-[#7E1515] bg-green-50 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <AlertDescription className="text-green-900">
                         Tu PACHACARD PREMIUM está lista para recoger
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert className="border-2 border-orange-200 bg-orange-50 rounded-xl">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      <AlertDescription className="text-orange-900">
                        ⏳ Registro encontrado, pero figura como <strong>NO impresa</strong>.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="bg-gradient-to-br from-[#FBBF24]/10 via-[#F1F5F9] to-[#FBBF24]/5 rounded-xl p-6 space-y-4 border-2 border-[#FBBF24]">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Nombre</p>
                      <p className="text-[#0F172A]">
                        {foundUser.nombre_completo || foundUser.nombre}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Código</p>
                        <p className="text-[#0F172A]">{foundUser.codigo}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">DNI/RUC</p>
                        <p className="text-[#0F172A]">{foundUser.dni_ruc || "—"}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
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

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#7E1515] mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="mb-2 text-[#7E1515]">Lugar de recojo</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Agencia C.P.R. Huertos de Manchay – Av. Malasquez con la Calle 36,
                          área de Licencias y Desarrollo Económico. Horario: lunes a viernes
                          8:00 a.m. a 5:00 p.m.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={handleMapClick}
                            variant="outline"
                            className="border-[#7E1515] text-[#7E1515] hover:bg-[#7E1515] hover:text-white rounded-lg"
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            Abrir Google Maps
                          </Button>

                          <Button
                            onClick={handleWhatsAppClick}
                            className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-lg"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp PREMIUM
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </Card>
      </div>
    </section>
  );
}
