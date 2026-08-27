import { useState } from "react";

const eventosParque = [
  { motivo: "Día del Padre",        fecha: "Jueves 19 de marzo",      actividades: ["Misa comunitaria", "Concierto", "Árbol de los recuerdos"] },
  { motivo: "Día del Niño",         fecha: "Domingo 12 de abril",     actividades: ["Pintado con colores 08:30–12:00", "Pintacaritas 08:30–12:00", "Función de títeres 11:00–11:45"] },
  { motivo: "Día de la Madre",      fecha: "Miércoles 27 de mayo",    actividades: ["Misa comunitaria 11:30", "Concierto 12:15", "Árbol de los recuerdos 08:00–12:00"] },
  { motivo: "Noche de luces",       fecha: "Sábado 20 de junio",      actividades: ["Misa comunitaria", "Concierto", "Liberación de velas"] },
  { motivo: "Mundo Unido",          fecha: "Domingo 20 de septiembre",actividades: ["Misa comunitaria", "Concierto", "Escritura de mensajes en globos", "Liberación de globos"] },
  { motivo: "Día de Difuntos",      fecha: "Sábado 31 de octubre",    actividades: ["Misa comunitaria", "Concierto", "Armado Mast'aku comunitario"] },
  { motivo: "Día de Difuntos",      fecha: "Domingo 01 de noviembre", actividades: ["Misa comunitaria", "Concierto"] },
  { motivo: "Día de Difuntos",      fecha: "Lunes 02 de noviembre",   actividades: ["Misa comunitaria", "Concierto", "Habilitación Mast'aku individuales", "Elección de mejor Mast'aku"] },
  { motivo: "Cápsula de Memorias",  fecha: "Domingo 20 de diciembre", actividades: ["Misa comunitaria", "Concierto", "Apertura de cápsula de gestión anterior"] },
];

const eventosAura = [
  { motivo: "Árbol de la Memoria",  fecha: "Sábado 19 de diciembre",  actividades: ["Misa", "Concierto", "Entrega de esferas", "Decoración de sitio con flores"] },
];

function Bloque({ titulo, children, destacado = false, className = "" }) {
  return (
    <div className={`rounded-lg border px-3 py-2 ${destacado ? "border-[#1a5c3a]/40 bg-[#1a5c3a]/5" : "border-gray-200"} ${className}`}>
      <p className={`text-[10px] font-semibold uppercase tracking-widest mb-1.5 ${destacado ? "text-[#1a5c3a]" : "text-gray-400"}`}>
        {titulo}
      </p>
      {children}
    </div>
  );
}

function Fila({ label, valor, cerrado = false }) {
  return (
    <div className="flex justify-between items-center py-0.5 border-b border-gray-100 last:border-0">
      <span className="text-xs text-gray-600">{label}</span>
      <span className={`text-xs font-semibold ${cerrado ? "text-red-700" : "text-[#1a5c3a]"}`}>{valor}</span>
    </div>
  );
}

function TablaEventos({ eventos }) {
  return (
    <table className="w-full text-xs border-collapse">
      <thead>
        <tr className="bg-gray-50">
          <th className="text-left py-1.5 px-2 text-gray-500 font-semibold border-b border-gray-200 w-1/4">Motivo</th>
          <th className="text-left py-1.5 px-2 text-gray-500 font-semibold border-b border-gray-200 w-1/4">Fecha</th>
          <th className="text-left py-1.5 px-2 text-gray-500 font-semibold border-b border-gray-200">Actividades</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {eventos.map(({ motivo, fecha, actividades }, i) => (
          <tr key={i} className="align-top">
            <td className="py-1.5 px-2 font-semibold text-gray-800">{motivo}</td>
            <td className="py-1.5 px-2 text-gray-600">{fecha}</td>
            <td className="py-1.5 px-2 text-gray-600">{actividades.join(" · ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function HorariosAtencionPanel() {
  const [calendarioAbierto, setCalendarioAbierto] = useState(false);

  return (
    <div className="space-y-2 max-w-5xl">

      <p className="text-xs text-gray-500">
        Esta hoja contiene los accesos a Planiris, los horarios regulares de cada sede, los horarios en feriados y el calendario de eventos.
      </p>

      {/* Accesos Planiris */}
      <Bloque titulo="Accesos Planiris" destacado>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] text-gray-400 mb-1">Parque de las Memorias</p>
            <a href="https://planiris.parquedelasmemorias.com/signin" target="_blank" rel="noopener noreferrer"
              className="text-xs text-[#1a5c3a] font-medium underline block mb-1">
              planiris.parquedelasmemorias.com
            </a>
            <p className="text-xs text-gray-600">Usuario: <span className="font-mono text-gray-800">contactcenter@parquedelasmemorias.com</span></p>
            <p className="text-xs text-gray-600">Contraseña: <span className="font-mono text-gray-800">12345678</span></p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1">Casa Aura</p>
            <a href="https://planiris.casa-aura.bo/signin" target="_blank" rel="noopener noreferrer"
              className="text-xs text-[#1a5c3a] font-medium underline block mb-1">
              planiris.casa-aura.bo
            </a>
            <p className="text-xs text-gray-600">Credenciales: consultar con supervisión</p>
          </div>
        </div>
      </Bloque>

      {/* Horarios regulares */}
      <div className="grid grid-cols-2 gap-2">
        <Bloque titulo="Parque de las Memorias — Cementerio Jardín">
          <p className="text-[10px] text-gray-400 mb-1">Atención y/o visita día regular</p>
          <Fila label="Lunes a domingo" valor="08:30 – 16:30" />
        </Bloque>
        <Bloque titulo="Casa Aura — Casa de Homenajes">
          <p className="text-[10px] text-gray-400 mb-1">Atención y/o visita día regular</p>
          <Fila label="Lunes a viernes" valor="08:30 – 16:30" />
          <Fila label="Sábado" valor="09:00 – 13:00" />
          <p className="text-[10px] text-gray-400 mt-1">Ref: 103, 16, 010 (Av. Libertador)</p>
        </Bloque>
      </div>

      {/* Feriados */}
      <div className="grid grid-cols-2 gap-2">
        <Bloque titulo="Días con horario diferenciado">
          <p className="text-[10px] text-gray-400 mb-1">Feriados nacionales, locales y día del peatón</p>
          <div className="grid grid-cols-2 gap-x-3">
            {[
              "Estado plurinacional — 22 ene", "Día del trabajo — 1 may",
              "Carnaval — 16-17 feb",          "Corpus Christi — 4 jun",
              "Viernes santo — 3 abr",         "Año nuevo Aymara — 21 jun",
              "Independencia — 6 ago",          "Aniversario Cbba — 14 sep",
              "Prof. funerario — 3 nov",        "Día del peatón departamental",
            ].map((f) => (
              <p key={f} className="text-[10px] text-gray-600 py-0.5 border-b border-gray-100 last:border-0">· {f}</p>
            ))}
          </div>
        </Bloque>

        <div className="space-y-2">
          <Bloque titulo="Parque de las Memorias — En feriados">
            <Fila label="Atención al cliente" valor="08:30 – 12:30" />
            <Fila label="Visita" valor="08:30 – 16:30" />
          </Bloque>
          <Bloque titulo="Casa Aura — En feriados">
            <Fila label="Sede" valor="Cerrada" cerrado />
          </Bloque>
        </div>
      </div>

      {/* Calendario de eventos — desplegable */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => setCalendarioAbierto(!calendarioAbierto)}
          className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Calendario de eventos 2026</p>
          <svg
            className={`w-3.5 h-3.5 text-gray-400 transition-transform ${calendarioAbierto ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {calendarioAbierto && (
          <div className="px-3 py-2 space-y-3">
            <div>
              <p className="text-[10px] font-semibold text-[#1a5c3a] uppercase tracking-widest mb-1.5">Parque de las Memorias · Cementerio Jardín</p>
              <TablaEventos eventos={eventosParque} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#1a5c3a] uppercase tracking-widest mb-1.5">Casa Aura · Casa de Homenajes</p>
              <TablaEventos eventos={eventosAura} />
            </div>
            <p className="text-[10px] text-gray-400 text-right">Última actualización: 06 de mayo 2026</p>
          </div>
        )}
      </div>

    </div>
  );
}
