import { useState } from "react";

const niveles = {
  N0: { label: "N0 — Resuelto en llamada",      color: "bg-[#1a5c3a] text-white",    dot: "bg-[#1a5c3a]" },
  N1: { label: "N1 — Derivado / seguimiento",   color: "bg-amber-100 text-amber-800", dot: "bg-amber-400" },
  N2: { label: "N2 — Urgente / escala inmediata", color: "bg-red-100 text-red-800",   dot: "bg-red-500" },
};

const tiposConsulta = [
  {
    tipo: "Información general del parque",
    nivel: "N0",
    preguntas: ["¿Horarios del parque?", "¿Dónde está ubicado?", "¿Qué servicios tienen?"],
    accion: "Responder en llamada con Horarios de Atención.",
    agente: "Agente de primer nivel",
  },
  {
    tipo: "Consulta de contrato / estado de cuenta",
    nivel: "N0",
    preguntas: ["¿Estado de mi contrato?", "¿Vigencia del plan?", "¿Quiénes son mis beneficiarios?"],
    accion: "Ingresar a Planiris y verificar datos del titular.",
    agente: "Agente de primer nivel",
  },
  {
    tipo: "Información de precios y planes",
    nivel: "N0",
    preguntas: ["¿Cuánto cuesta el plan?", "¿Planes sin afiliación?", "¿Qué cubre el plan exequial?"],
    accion: "Informar en llamada o derivar a ventas si pide cotización.",
    agente: "Agente de primer nivel",
  },
  {
    tipo: "Consulta sobre memorial / nicho",
    nivel: "N0",
    preguntas: ["¿Cómo visito el memorial?", "¿Puedo hacer cambios en el nicho?", "¿Horarios de visita?"],
    accion: "Responder en llamada. Derivar a administración si requiere gestión presencial.",
    agente: "Agente de primer nivel",
  },
  {
    tipo: "Solicitud de servicio exequial",
    nivel: "N1",
    preguntas: ["¿Cómo activo el plan?", "¿Qué documentos necesito?", "¿Cómo agendo la cremación?"],
    accion: "Registrar en Llenar Aquí y derivar a operaciones por WhatsApp.",
    agente: "Coordinador operativo",
  },
  {
    tipo: "Trámites administrativos",
    nivel: "N1",
    preguntas: ["Actualizar mis datos.", "Cambiar titular del contrato.", "Agregar un beneficiario."],
    accion: "Indicar documentos requeridos y derivar al área administrativa con ticket.",
    agente: "Área administrativa",
  },
  {
    tipo: "Reclamo o queja",
    nivel: "N1",
    preguntas: ["Problema con mi servicio.", "Cobro incorrecto.", "Mala atención a mi familiar."],
    accion: "Registrar ticket con todos los detalles y escalar a supervisión.",
    agente: "Supervisor de turno",
  },
  {
    tipo: "Urgencia funeraria activa",
    nivel: "N2",
    preguntas: ["Acaba de fallecer un familiar.", "Necesito traslado urgente.", "¿Cómo activo el plan ahora?"],
    accion: "Escalar de inmediato a Matriz de Escalamiento. No dejar en espera.",
    agente: "Coordinador de urgencias",
  },
];

export default function AuxiliarPanel() {
  const [filtroNivel, setFiltroNivel] = useState("Todos");

  const orden = { N0: 0, N1: 1, N2: 2 };
  const filtrados = (filtroNivel === "Todos"
    ? [...tiposConsulta]
    : tiposConsulta.filter((t) => t.nivel === filtroNivel)
  ).sort((a, b) => orden[a.nivel] - orden[b.nivel]);

  return (
    <div className="h-full flex flex-col gap-2.5 max-w-5xl">

      {/* Leyenda + filtros en una sola fila */}
      <div className="flex items-center gap-3 shrink-0 flex-wrap">
        {Object.entries(niveles).map(([k, { label, color }]) => (
          <span key={k} className={`rounded px-2 py-0.5 text-[10px] font-semibold ${color}`}>{label}</span>
        ))}
        <div className="ml-auto flex gap-1.5 items-center">
          {["Todos", "N0", "N1", "N2"].map((n) => (
            <button
              key={n}
              onClick={() => setFiltroNivel(n)}
              className={`px-2.5 py-0.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                filtroNivel === n ? "bg-[#1a5c3a] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {n}
            </button>
          ))}
          <span className="text-[10px] text-gray-400">{filtrados.length} tipos</span>
        </div>
      </div>

      {/* Grilla 2 columnas */}
      <div className="flex-1 overflow-y-auto pr-0.5">
        <div className="grid grid-cols-2 gap-2">
          {filtrados.map(({ tipo, nivel, preguntas, accion, agente }) => {
            const nv = niveles[nivel];
            return (
              <div key={tipo} className="border border-gray-200 rounded-lg px-3 py-2.5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${nv.dot}`}></span>
                  <p className="text-xs font-semibold text-gray-900 leading-tight">{tipo}</p>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ml-auto ${nv.color}`}>{nivel}</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-1.5">{preguntas.join(" · ")}</p>
                <p className="text-[11px] text-gray-700">
                  <span className="font-semibold text-[#1a5c3a]">Acción:</span> {accion}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">Derivar a: <span className="font-medium text-gray-600">{agente}</span></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
