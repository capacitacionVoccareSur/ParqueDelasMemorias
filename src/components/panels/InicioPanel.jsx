function Script({ etiqueta, texto, principal = false }) {
  return (
    <div className={`border-l-4 pl-3 py-0.5 ${principal ? "border-[#1a5c3a]" : "border-gray-200"}`}>
      {etiqueta && <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">{etiqueta}</p>}
      <p className={`text-xs leading-snug ${principal ? "font-bold text-gray-900" : "font-semibold text-gray-700"}`}>
        "{texto}"
      </p>
    </div>
  );
}

export default function InicioPanel() {
  return (
    <div className="max-w-5xl space-y-3">

      {/* Guiones */}
      <div className="border border-[#1a5c3a]/30 rounded-lg overflow-hidden">
        <div className="bg-[#1a5c3a] px-4 py-1.5">
          <p className="text-white text-xs font-semibold uppercase tracking-widest">Guiones de atención</p>
        </div>

        {/* Apertura principal + duelo/crisis en grid */}
        <div className="px-4 py-2.5 grid grid-cols-2 gap-x-4 gap-y-2">
          <div className="col-span-2">
            <Script
              etiqueta="Apertura estándar"
              texto="Gracias por llamar a Parque de las Memorias – Casa Aura, mi nombre es [NOMBRE], ¿En qué puedo ayudarle?"
              principal
            />
          </div>
          <Script
            etiqueta="Si el afiliado está de duelo"
            texto="Lamento mucho su pérdida. Estoy aquí para ayudarle."
          />
          <Script
            etiqueta="Si suena afectado o en crisis"
            texto="Lamento mucho la situación que está atravesando. Estoy aquí para brindarle toda la ayuda necesaria. ¿Podría contarme qué necesita en este momento?"
          />
        </div>

        {/* Frases de apoyo + Evitar + Despedida en una fila */}
        <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 grid grid-cols-2 gap-x-4 items-start">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Frases de apoyo</p>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5">
              {["Entiendo, tómese su tiempo.", "Voy a ayudarle paso a paso.", "Gracias por explicármelo.", "No hay prisa."].map((f) => (
                <p key={f} className="text-[11px] font-semibold text-gray-700">"{f}"</p>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              <span className="text-red-700 font-semibold">Evitar:</span>{" "}
              "Tranquilícese" · "No se preocupe" · "Tiene que" · "No se puede"
            </p>
          </div>
          <Script
            etiqueta="Despedida"
            texto="Gracias por confiar en nosotros. Le acompañamos en este momento."
          />
        </div>
      </div>

      {/* Link al documento */}
      <a
        href="https://docs.google.com/spreadsheets/d/1kuyDD-eoKhCIZ1Luo31NpNMl0mwNqbu0n2-bYyYxGMk/edit?gid=0#gid=0"
        target="_blank"
        rel="noopener noreferrer"
        className="neon-glow flex items-center justify-between gap-3 bg-[#1a5c3a] hover:bg-[#2d7a52] text-white px-4 py-2.5 rounded-lg transition-colors group"
      >
        <div>
          <p className="text-[10px] text-white/60 uppercase tracking-widest mb-0.5">Abrir documento de trabajo</p>
          <p className="text-sm font-bold leading-tight">INFORMACIÓN PARQUE DE LAS MEMORIAS – ADDIUVA</p>
        </div>
        <svg className="w-5 h-5 shrink-0 text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* Llenar Aquí + Ticket */}
      <div className="grid grid-cols-2 gap-3">

        {/* Llenar Aquí */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Llenar Aquí</p>
            <p className="text-[10px] text-gray-400">Una fila por llamada · completar en orden</p>
          </div>
          <div className="px-3 py-2 space-y-1">
            {[
              { col: "A", nombre: "Ticket",                tipo: "manual", desc: "Se debe numerar en orden" },
              { col: "B", nombre: "Nombre contactante",    tipo: "manual", desc: "Quien llama" },
              { col: "C", nombre: "Teléfono",              tipo: "manual", desc: "Número del cliente — pedirlo en llamada" },
              { col: "D", nombre: "Descripción",           tipo: "manual", desc: "Qué solicitó el cliente" },
              { col: "E", nombre: "Servicio consultado",   tipo: "clave",  desc: "Dropdown — activa los auto-rellenos" },
              { col: "F", nombre: "Preguntas de descarte", tipo: "auto",   desc: "Se completa solo desde AUXILIAR" },
              { col: "G", nombre: "Obs. relevante",        tipo: "manual", desc: "Acuerdos o detalles clave" },
              { col: "H", nombre: "Prioridad",             tipo: "manual", desc: "NORMAL · ALTA · URGENTE" },
              { col: "I", nombre: "Acción",                tipo: "manual", desc: "INFORMACION BRINDADA · TICKET DERIVADO · TICKET DERIVADO CASOS ESPECIALES · TICKET DERIVADO CLIENTE INTERESADO" },
              { col: "J", nombre: "Responsable",           tipo: "auto",   desc: "Se completa solo desde AUXILIAR" },
              { col: "K", nombre: "Fecha",                 tipo: "manual", desc: "Día de la llamada" },
              { col: "L", nombre: "Hora",                  tipo: "manual", desc: "Hora de la llamada" },
            ].map(({ col, nombre, tipo, desc }) => (
              <div key={col} className={`grid items-center gap-x-2 px-1 rounded ${
                tipo === "clave" ? "bg-amber-50" : tipo === "auto" ? "bg-[#1a5c3a]/5" : ""
              }`} style={{ gridTemplateColumns: "12px 44px 140px 1fr" }}>
                <span className="text-[10px] font-mono font-bold text-gray-400">{col}</span>
                <span className={`text-[10px] font-semibold px-1 py-0.5 rounded text-center ${
                  tipo === "auto"  ? "bg-[#1a5c3a]/10 text-[#1a5c3a]" :
                  tipo === "clave" ? "bg-amber-100 text-amber-700" :
                                    "bg-gray-100 text-gray-500"
                }`}>{tipo === "auto" ? "AUTO" : tipo === "clave" ? "CLAVE" : "manual"}</span>
                <span className="text-xs font-semibold text-gray-800">{nombre}</span>
                <span className="text-[10px] text-gray-400">{desc}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-amber-100 bg-amber-50 px-3 py-1">
            <p className="text-[10px] text-amber-700 font-medium">Completar columna E primero — activa F y J automáticamente.</p>
          </div>
        </div>

        {/* Ticket */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Ticket</p>
            <p className="text-[10px] text-gray-400">Al poner el N.° en la fila pintada se autocompleta con los datos de Llenar Aquí</p>
          </div>
          <div className="px-3 py-2 space-y-1.5">
            {[
              ["1", "Número de ticket", "Colocar en la fila pintada — trae toda la información automáticamente"],
              ["2", "Copiar y derivar", "Copiar los datos y enviar al grupo de WhatsApp"],
            ].map(([num, accion, detalle]) => (
              <div key={num} className="flex gap-2">
                <div className="shrink-0 w-4 h-4 rounded-full bg-[#1a5c3a] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                  {num}
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-800">{accion}</span>
                  <span className="text-[10px] text-gray-400 ml-1.5">{detalle}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#1a5c3a]/20 bg-[#1a5c3a]/5 px-3 py-1.5">
            <p className="text-[10px] text-gray-500 font-medium mb-0.5">Grupo de WhatsApp — Derivación de tickets</p>
            <a
              href="https://chat.whatsapp.com/DxdcUm1d7siDApj8hl5Evq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#1a5c3a] font-semibold underline"
            >
              Abrir grupo de WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
