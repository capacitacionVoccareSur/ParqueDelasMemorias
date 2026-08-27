const tiposConsulta = [
  {
    tipo: "Información general",
    ejemplos: ["Horarios del parque", "Ubicación y acceso", "Tipos de servicios disponibles", "Tarifas generales"],
    accion: "Gestionar en llamada",
    dot: "bg-gray-400",
  },
  {
    tipo: "Consulta de contrato",
    ejemplos: ["Estado de cuenta", "Vigencia del plan", "Datos del titular", "Beneficiarios registrados"],
    accion: "Consultar en Planiris",
    dot: "bg-[#1a5c3a]",
  },
  {
    tipo: "Solicitud de servicio",
    ejemplos: ["Agendamiento de inhumación", "Solicitud de cremación", "Reserva de sala de velación"],
    accion: "Escalar por WhatsApp",
    dot: "bg-green-500",
  },
  {
    tipo: "Reclamación / queja",
    ejemplos: ["Inconformidad con el servicio", "Error en facturación", "Daño en memorial", "Demoras en atención"],
    accion: "Escalar por WhatsApp",
    dot: "bg-orange-400",
  },
  {
    tipo: "Urgencia funeraria",
    ejemplos: ["Fallecimiento reciente", "Traslado urgente", "Activación de plan exequial"],
    accion: "WhatsApp urgente",
    dot: "bg-red-500",
  },
];

export default function ManualPanel() {
  return (
    <div className="space-y-6">

      {/* Tipos de consulta */}
      <div>
        <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Tipo de consulta → acción</p>
        <div className="divide-y divide-gray-100">
          {tiposConsulta.map(({ tipo, ejemplos, accion, dot }) => (
            <div key={tipo} className="py-3 flex gap-3">
              <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${dot}`}></span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-gray-800">{tipo}</p>
                  <p className="text-xs text-gray-600 shrink-0">{accion}</p>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{ejemplos.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Guión de escalamiento */}
      <div>
        <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Escalamiento a WhatsApp</p>
        <div className="border-l-4 border-[#1a5c3a] pl-3">
          <p className="text-sm font-semibold text-gray-900 leading-snug">
            "Entiendo su solicitud. Para darle una mejor atención voy a trasladar su caso al equipo especializado. Le llegará un mensaje por WhatsApp al número registrado en breve. ¿Confirma que su número es [número]?"
          </p>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Despedida */}
      <div>
        <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Despedida protocolar</p>
        <div className="space-y-3">
          <div className="border-l-4 border-gray-300 pl-3">
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              "Gracias por confiar en nosotros. Le acompañamos en este momento."
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-3">
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              "Entiendo que este es un momento muy difícil. No está solo/a. Si necesita apoyo o información adicional, estamos disponibles para usted las 24 horas."
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
