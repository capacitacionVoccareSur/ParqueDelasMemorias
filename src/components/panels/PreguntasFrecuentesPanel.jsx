import { useState } from "react";

const ESC = {
  ADDIUVA: { label: "ADDIUVA resuelve", cls: "bg-[#1a5c3a] text-white" },
  N1:      { label: "Escalar N1",       cls: "bg-amber-100 text-amber-800" },
  N2:      { label: "Escalar N2",       cls: "bg-rose-100 text-rose-700" },
};

const secciones = [
  {
    num: "1", categoria: "Información General", escala: "ADDIUVA",
    items: [
      {
        tema: "Horarios de atención – día regular",
        info: "PDM: lunes a domingo 08:30–16:30 · Casa Aura: lunes a viernes 08:30–16:30, sábado 09:00–13:00",
      },
      {
        tema: "Horarios de atención – feriados",
        info: "PDM: atención al cliente 08:30–12:30, visita 08:30–16:30 · Casa Aura: sin atención",
      },
      {
        tema: "Direcciones",
        info: "PDM: Av. Circunvalación Km 3.5 (pasando el Puente Esteban Montaño) · Casa Aura: Av. Atahuallpa N° 2108, casi esquina Julio Rodríguez (zona de la Ciclovía)",
      },
      { tema: "Información de eventos",  info: "Ver pestaña Horarios de Atención" },
      { tema: "Normas de ingreso",        info: "Ver pestaña Normas y Restricciones" },
    ],
  },
  {
    num: "2", categoria: "Coordinación de Servicios – Servicio Funerario", escala: "N1",
    validacion: true,
    items: [
      {
        tema: "Servicio funerario",
        info: "Validar datos del titular y del fallecido. Escalar a N1 para activación del servicio.",
      },
    ],
  },
  {
    num: "3", categoria: "Coordinación de Servicios – Inhumación / Exhumación / Cremación", escala: "N1",
    validacion: true,
    items: [
      { tema: "Inhumación", info: "Escalar a N1 para activación del servicio" },
      { tema: "Exhumación", info: "Escalar a N1 para activación del servicio" },
      { tema: "Cremación",  info: "Escalar a N1 para activación del servicio" },
    ],
  },
  {
    num: "4", categoria: "Coordinación de Servicios – Ceremonias y Misas", escala: "N1",
    items: [
      {
        tema: "Ceremonias conmemorativas o misas",
        info: "Identificar necesidad, detalles del servicio y horarios disponibles. Escalar a N1 para activación.",
      },
    ],
  },
  {
    num: "5", categoria: "Información de Servicios – Planes de Emergencia", escala: "N1",
    items: [
      {
        tema: "Planes de emergencia",
        info: "Cotización de consulta por emergencia. Identificar necesidad, preferencia y presupuesto. Escalar a N1.",
      },
    ],
  },
  {
    num: "6", categoria: "Información de Servicios – Planes de Planificación", escala: "N2",
    items: [
      {
        tema: "Planes de planificación",
        info: "Información general y concretar cita. Identificar necesidad, preferencia y presupuesto. Escalar a N2 para envío de información o concretar cita.",
      },
    ],
  },
  {
    num: "7", categoria: "Trámites Administrativos", escala: "N2",
    validacion: true,
    items: [
      {
        tema: "Cambio de nombre – cesión voluntaria",
        info: "Motivo: titular mayor de edad o venta. No es obligatorio.",
        req: [
          "Carta simple de solicitud de cesión de derecho de uso (señalar motivo y datos del nuevo titular)",
          "Fotocopia CI del antiguo y nuevo titular (firma azul)",
          "Documento privado de cesión de derecho de uso, con firmas de ambas partes, notariado",
          "Pago posterior según tabla de categorías – área de cartera",
        ],
      },
      {
        tema: "Cambio de nombre – por fallecimiento del titular",
        info: "Obligatorio. Garantiza el derecho de uso a todos los herederos.",
        req: [
          "Fotocopia legalizada de la Declaración de Herederos",
          "Carta 'Solicitud de Cesión con Declaratoria' firmada por todos los herederos, con reconocimiento de firmas en Notaría",
          "Fotocopia CI del nuevo titular (firma azul)",
          "Pago posterior según tabla de categorías – área de cartera",
        ],
      },
      {
        tema: "Adición / modificación / eliminación de responsable",
        info: "Para oficializar cambios en sistema, file y documentos. Explicar pasos y documentos requeridos.",
        req: [
          "Carta de solicitud del titular",
          "Fotocopia de CI vigente",
        ],
      },
      { tema: "Cambio de sector y sitio memorial", info: "Escalar a N2 para casos especiales" },
      { tema: "Adecuación de sitio memorial",      info: "Escalar a N2 para casos especiales" },
    ],
  },
  {
    num: "8", categoria: "Certificaciones de Servicios", escala: "ADDIUVA",
    items: [
      {
        tema: "Certificado de óbito o inhumación",
        info: "Certifica la inhumación o custodia de restos en el cementerio jardín. Solo se emite al titular del sitio. Informar requisitos y precios.",
      },
      {
        tema: "Certificado de sitio",
        info: "Certifica que el cliente cuenta con un sitio o espacio memorial. Solo se emite al titular.",
      },
      {
        tema: "Recibo por servicio exequial prestado",
        info: "Para gestión de devolución en Mumanal, Gestora o Cossmil. Solo al titular. Si el titular falleció: certificado de descendencia y carta firmada por todos los herederos asignando un responsable.",
        req: [
          "Recibos para Gestora o Mumanal",
          "Nota aclaratoria para Mumanal o Cossmil",
          "Plan de pagos para Mumanal",
          "Si el titular está ausente: carta de autorización firmada por el titular",
          "Si el titular falleció: certificado de descendencia + carta de todos los herederos designando responsable",
        ],
      },
      {
        tema: "Nota aclaratoria por servicio exequial prestado",
        info: "Emitida únicamente a solicitud del titular. Mismas condiciones de autorización que el recibo.",
      },
    ],
  },
  {
    num: "9", categoria: "Otros Servicios (Casa Aura)", escala: "N1",
    items: [
      {
        tema: "Cambio de lápida · Pulido de lápida · Portafolio · Paquetes florales · Kit de limpieza",
        info: "Informar precios, estado actual, plazos de instalación, formas de adquisición y pago. Referencia: página Casa Aura – Servicios adicionales. Escalar a N1 para cliente interesado.",
      },
    ],
  },
  {
    num: "10", categoria: "Soporte Básico", escala: "ADDIUVA",
    validacion: true,
    items: [
      { tema: "Estado del servicio", info: "Informar sobre la etapa actual. Referencia: páginas Casa Aura y Parque de las Memorias." },
      { tema: "Estado del contrato", info: "Verificar en Planiris y proporcionar información al titular." },
    ],
  },
];

function EscalaBadge({ escala, small }) {
  const e = ESC[escala];
  return (
    <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap ${e.cls} ${small ? "" : ""}`}>
      {e.label}
    </span>
  );
}

function ItemRow({ tema, info, req, escala }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-1.5 border-b border-gray-100 last:border-0">
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-800 leading-snug">{tema}</p>
          <p className="text-[11px] text-gray-500 leading-snug mt-0.5">{info}</p>
        </div>
        {req && (
          <button
            onClick={() => setOpen(!open)}
            className="shrink-0 text-[10px] font-medium text-[#1a5c3a] hover:underline cursor-pointer mt-0.5"
          >
            {open ? "▲ docs" : "▼ docs"}
          </button>
        )}
      </div>
      {open && req && (
        <ul className="mt-1.5 ml-2 space-y-0.5">
          {req.map((r, i) => (
            <li key={i} className="flex gap-1.5 text-[10px] text-gray-600">
              <span className="shrink-0 text-[#1a5c3a] font-bold mt-px">·</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function PreguntasFrecuentesPanel() {
  const [filtroEscala, setFiltroEscala] = useState("Todas");

  const filtradas = secciones.filter(
    (s) => filtroEscala === "Todas" || s.escala === filtroEscala
  );

  return (
    <div className="h-full flex flex-col gap-2 max-w-5xl">

      {/* Filtro por escala */}
      <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
        {["Todas", "ADDIUVA", "N1", "N2"].map((f) => {
          const active = filtroEscala === f;
          const cls =
            f === "ADDIUVA" ? "bg-[#1a5c3a] text-white" :
            f === "N1"      ? "bg-amber-100 text-amber-800" :
            f === "N2"      ? "bg-rose-100 text-rose-700" :
                              "bg-gray-800 text-white";
          return (
            <button
              key={f}
              onClick={() => setFiltroEscala(f)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-all cursor-pointer border-2 ${
                active ? `${cls} border-transparent` : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
              }`}
            >
              {f === "ADDIUVA" ? "ADDIUVA resuelve" : f === "Todas" ? "Todas" : `Escalar ${f}`}
            </button>
          );
        })}
        <span className="ml-auto text-[10px] text-gray-400">{filtradas.length} categorías</span>
      </div>

      {/* Leyenda */}
      <div className="flex items-center gap-3 shrink-0 px-1">
        {Object.entries(ESC).map(([k, v]) => (
          <div key={k} className="flex items-center gap-1">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${v.cls}`}>{v.label}</span>
          </div>
        ))}
        <span className="text-[10px] text-gray-400 ml-1">· ▼ docs = ver requisitos documentales</span>
      </div>

      {/* Secciones */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-0.5">
        {filtradas.map((sec) => (
          <div key={sec.num} className={`border rounded-lg overflow-hidden ${
            sec.escala === "ADDIUVA" ? "border-[#1a5c3a]/20" :
            sec.escala === "N1"      ? "border-amber-200" :
                                       "border-rose-200"
          }`}>
            {/* Header de sección */}
            <div className={`px-3 py-1.5 flex items-center justify-between gap-2 ${
              sec.escala === "ADDIUVA" ? "bg-[#1a5c3a]/10" :
              sec.escala === "N1"      ? "bg-amber-100" :
                                         "bg-rose-100"
            }`}>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-gray-400">{sec.num}.</span>
                <p className="text-xs font-semibold text-gray-800">{sec.categoria}</p>
                {sec.validacion && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-200 text-gray-500 uppercase tracking-wide">Validación</span>
                )}
              </div>
              <EscalaBadge escala={sec.escala} />
            </div>
            {/* Items */}
            <div className={`px-3 divide-y ${
              sec.escala === "ADDIUVA" ? "bg-[#1a5c3a]/[0.03] divide-[#1a5c3a]/10" :
              sec.escala === "N1"      ? "bg-amber-50/60 divide-amber-100" :
                                         "bg-rose-50/60 divide-rose-100"
            }`}>
              {sec.items.map((item, i) => (
                <ItemRow key={i} {...item} escala={sec.escala} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
