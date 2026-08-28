import { useState } from "react";

const NIV = {
  N0: { label: "N0",  cls: "bg-[#1a5c3a] text-white",    hdr: "bg-[#1a5c3a]/10 border-[#1a5c3a]/20", bdr: "border-[#1a5c3a]/20" },
  N1: { label: "N1",  cls: "bg-amber-100 text-amber-800", hdr: "bg-amber-100 border-amber-200",        bdr: "border-amber-200"    },
  N2: { label: "N2",  cls: "bg-rose-100 text-rose-700",   hdr: "bg-rose-100 border-rose-200",          bdr: "border-rose-200"     },
};

const categorias = [
  {
    cat: "1. Información General", nivel: "N0",
    items: [
      { tipo: "Horarios de atención – día regular",   accion: "PDM: lun–dom 08:30–16:30 · Casa Aura: lun–vie 08:30–16:30, sáb 09:00–13:00" },
      { tipo: "Horarios de atención – feriados",      accion: "PDM: atención 08:30–12:30, visita 08:30–16:30 · Casa Aura: sin atención" },
      { tipo: "Direcciones",                          accion: "PDM: Av. Circunvalación Km 3.5 · Casa Aura: Av. Atahuallpa N° 2108 (zona Ciclovía)" },
      { tipo: "Información de eventos",               accion: "Ver pestaña Horarios de Atención" },
      { tipo: "Normas de ingreso",                    accion: "Ver pestaña Normas y Restricciones" },
    ],
  },
  {
    cat: "2. Coordinación de Servicios – Servicio Funerario", nivel: "N1", validacion: true,
    items: [
      { tipo: "Servicio funerario", accion: "Validar datos del titular y del fallecido. Escalar a N1 para activación del servicio." },
    ],
  },
  {
    cat: "3. Coordinación de Servicios – Inhumación / Exhumación / Cremación", nivel: "N1", validacion: true,
    items: [
      { tipo: "Inhumación", accion: "Escalar a N1 para activación del servicio" },
      { tipo: "Exhumación", accion: "Escalar a N1 para activación del servicio" },
      { tipo: "Cremación",  accion: "Escalar a N1 para activación del servicio" },
    ],
  },
  {
    cat: "4. Coordinación de Servicios – Ceremonias y Misas", nivel: "N1",
    items: [
      { tipo: "Ceremonias conmemorativas o misas", accion: "Identificar necesidad, detalles del servicio y horarios disponibles. Escalar a N1 para activación." },
    ],
  },
  {
    cat: "5. Información de Servicios – Planes de Emergencia", nivel: "N1",
    items: [
      { tipo: "Planes de emergencia", accion: "Cotización de consulta por emergencia. Identificar necesidad, preferencia y presupuesto. Escalar a N1." },
    ],
  },
  {
    cat: "6. Información de Servicios – Planes de Planificación", nivel: "N2",
    items: [
      { tipo: "Planes de planificación", accion: "Información general y concretar cita. Identificar necesidad, preferencia y presupuesto. Escalar a N2 para envío de información o cita." },
    ],
  },
  {
    cat: "7. Trámites Administrativos", nivel: "N2", validacion: true,
    items: [
      { tipo: "Cambio de nombre – cesión voluntaria",          accion: "Titular mayor de edad o venta. No obligatorio. Informar requisitos documentales." },
      { tipo: "Cambio de nombre – por fallecimiento del titular", accion: "Obligatorio. Garantiza el derecho de uso a herederos. Informar requisitos." },
      { tipo: "Adición / modificación / eliminación de responsable", accion: "Para oficializar cambios en sistema, file y documentos. Explicar pasos y documentos requeridos." },
      { tipo: "Cambio de sector y sitio memorial",             accion: "Escalar a N2 para casos especiales" },
      { tipo: "Adecuación de sitio memorial",                  accion: "Escalar a N2 para casos especiales" },
    ],
  },
  {
    cat: "8. Certificaciones de Servicios", nivel: "N0",
    items: [
      { tipo: "Certificado de óbito o inhumación",             accion: "Certifica inhumación o custodia de restos. Solo al titular. Informar requisitos y precios." },
      { tipo: "Certificado de sitio",                          accion: "Certifica que el cliente cuenta con un sitio o espacio memorial. Solo al titular." },
      { tipo: "Recibo por servicio exequial prestado",         accion: "Para devolución en Mumanal, Gestora o Cossmil. Solo al titular. Si falleció: cert. descendencia + carta de herederos." },
      { tipo: "Nota aclaratoria por servicio exequial prestado", accion: "Emitida únicamente a solicitud del titular. Mismas condiciones de autorización que el recibo." },
    ],
  },
  {
    cat: "9. Otros Servicios – Casa Aura", nivel: "N1",
    items: [
      { tipo: "Cambio de lápida · Pulido · Portafolio · Paquetes florales · Kit de limpieza", accion: "Informar precios, plazos de instalación y formas de pago. Escalar a N1 para cliente interesado." },
    ],
  },
  {
    cat: "10. Soporte Básico", nivel: "N0", validacion: true,
    items: [
      { tipo: "Estado del servicio", accion: "Informar sobre la etapa actual. Referencia: páginas Casa Aura y Parque de las Memorias." },
      { tipo: "Estado del contrato", accion: "Verificar en Planiris y proporcionar información al titular." },
    ],
  },
];

export default function AuxiliarPanel() {
  const [filtro, setFiltro] = useState("Todos");

  const filtradas = filtro === "Todos"
    ? categorias
    : categorias.filter((c) => c.nivel === filtro);

  const total = filtradas.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <div className="h-full flex flex-col gap-2 max-w-5xl">

      <p className="text-xs text-gray-500 shrink-0">Guía de clasificación y acción por tipo de consulta: qué hacer en llamada y a qué nivel derivar según la categoría.</p>
      <hr className="border-gray-100 shrink-0" />

      {/* Filtro */}
      <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
        {["Todos", "N0", "N1", "N2"].map((f) => {
          const active = filtro === f;
          const cls = f === "N0" ? "bg-[#1a5c3a] text-white" : f === "N1" ? "bg-amber-100 text-amber-800" : f === "N2" ? "bg-rose-100 text-rose-700" : "bg-gray-800 text-white";
          return (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-all cursor-pointer border-2 ${
                active ? `${cls} border-transparent` : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
              }`}
            >
              {f === "Todos" ? "Todas" : `Nivel ${f}`}
            </button>
          );
        })}
        <span className="ml-auto text-[10px] text-gray-400">{total} tipos · {filtradas.length} categorías</span>
      </div>

      {/* Leyenda */}
      <div className="flex items-center gap-3 shrink-0 px-1">
        {Object.entries(NIV).map(([k, v]) => (
          <div key={k} className="flex items-center gap-1">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${v.cls}`}>{k}</span>
            <span className="text-[10px] text-gray-400">{k === "N0" ? "ADDIUVA resuelve" : k === "N1" ? "Escalar N1" : "Escalar N2"}</span>
          </div>
        ))}
        <span className="text-[10px] text-gray-400 ml-1">· Validación = requiere verificar identidad del titular</span>
      </div>

      {/* Categorías */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-0.5">
        {filtradas.map((cat) => {
          const nv = NIV[cat.nivel];
          return (
            <div key={cat.cat} className={`border rounded-lg overflow-hidden ${nv.bdr}`}>
              {/* Header */}
              <div className={`px-3 py-1.5 flex items-center justify-between gap-2 border-b ${nv.hdr}`}>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold text-gray-800">{cat.cat}</p>
                  {cat.validacion && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-200 text-gray-500 uppercase tracking-wide">Validación</span>
                  )}
                </div>
                <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded ${nv.cls}`}>{nv.label}</span>
              </div>
              {/* Items */}
              <div className="divide-y divide-gray-100">
                {cat.items.map((item, i) => (
                  <div key={i} className="px-3 py-1.5">
                    <p className="text-xs font-semibold text-gray-800 leading-snug">{item.tipo}</p>
                    <p className="text-[11px] text-gray-500 leading-snug mt-0.5">{item.accion}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
