import { useState } from "react";

const actividades = [
  { actividad: "Atender y clasificar llamada",                n0: "R", n1: "C", n2: "",  obs: "Se define motivo y prioridad" },
  { actividad: "Registrar ticket / bitácora",                 n0: "R", n1: "C", n2: "",  obs: "Siempre obligatorio" },
  { actividad: "Entregar información general",                n0: "R", n1: "C", n2: "",  obs: "Usar base de conocimiento" },
  { actividad: "Coordinar servicios funerarios / cremación",  n0: "C", n1: "R", n2: "",  obs: "N0 deriva y acompaña" },
  { actividad: "Cotización / derivación comercial (planes)",  n0: "C", n1: "",  n2: "R", obs: "N2 maneja cierres y seguimiento" },
  { actividad: "Trámites administrativos y certificaciones",  n0: "R", n1: "C", n2: "C", obs: "N0 informa requisitos y deriva" },
  { actividad: "Reclamos / quejas",                           n0: "R", n1: "C", n2: "R", obs: "SGI evalúa y define respuesta" },
  { actividad: "Monitoreo de calidad",                        n0: "C", n1: "R", n2: "A", obs: "" },
  { actividad: "Reportes de operación",                       n0: "R", n1: "A", n2: "C", obs: "N0 entrega, empresa valida" },
];

const contactos = [
  { nivel: "N1", rol: "Celebrante Casa Aura",          nombre: "María Gutiérrez",    email: "celebrantes@parquedelasmemorias.com",  tel: "74351672", horario: "24/7 según turno" },
  { nivel: "N1", rol: "Celebrante Casa Aura",          nombre: "Maricela Ajhuacho",  email: "celebrantes@parquedelasmemorias.com",  tel: "72209055", horario: "24/7 según turno" },
  { nivel: "N1", rol: "Celebrante Casa Aura",          nombre: "Jose Nina",          email: "celebrantes@parquedelasmemorias.com",  tel: "67406734", horario: "24/7 según turno" },
  { nivel: "N1", rol: "Asesor línea 24 horas",         nombre: "Consejero familiar", email: "contacto@parquedelasmemorias.com",     tel: "71722227", horario: "24/7" },
  { nivel: "N1", rol: "Supervisora memorial",          nombre: "Paola Ramos",        email: "coordinadores@parquedelasmemorias.com",tel: "67403513", horario: "08:30 – 17:00" },
  { nivel: "N1", rol: "ATC — Atención al cliente",    nombre: "Jhade Cruz",         email: "jcruz@parquedelasmemorias.com",        tel: "67403515", horario: "08:30 – 17:00 según turno" },
  { nivel: "N1", rol: "ATC — Atención al cliente",    nombre: "Mariana Canedo",     email: "mcanedo@parquedelasmemorias.com",      tel: "67407688", horario: "08:30 – 17:00 según turno" },
  { nivel: "N2", rol: "Director Servicios Casa Aura", nombre: "Alvaro Zuleta",      email: "azuleta@parquedelasmemorias.com",      tel: "71724000", horario: "En caso de emergencia" },
  { nivel: "N2", rol: "Jefe Comercial",               nombre: "Peter Andersen",     email: "pandersen@parquedelasmemorias.com",    tel: "71411064", horario: "08:30 – 22:00" },
  { nivel: "N2", rol: "Directora Procesos SGI",       nombre: "Carolina Nassaf",    email: "cnasaff@parquedelasmemorias.com",      tel: "72236531", horario: "08:30 – 17:00" },
  { nivel: "N2", rol: "Directora de Calidad",         nombre: "Judith Camacho",     email: "jcamacho@parquedelasmemorias.com",     tel: "72244609", horario: "08:30 – 17:00" },
  { nivel: "N2", rol: "Directora Cartera / Cobranzas",nombre: "Carmen Barral",      email: "cbarral@parquedelasmemorias.com",      tel: "72236531", horario: "08:30 – 17:00" },
];

const n1 = contactos.filter(c => c.nivel === "N1");
const n2 = contactos.filter(c => c.nivel === "N2");


function Badge({ val }) {
  if (!val) return <span className="text-gray-200">—</span>;
  const styles = { R: "bg-[#1a5c3a] text-white", C: "bg-blue-100 text-blue-700", A: "bg-amber-100 text-amber-700" };
  const labels = { R: "Responsable", C: "Consultado", A: "Aprobador" };
  return <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${styles[val]}`} title={labels[val]}>{val}</span>;
}

function ContactoCard({ nombre, rol, email, tel, horario }) {
  return (
    <div className="border border-gray-200 rounded-lg px-3 py-2">
      <p className="text-xs font-semibold text-gray-900">{nombre}</p>
      <p className="text-[10px] text-gray-400 mb-1.5">{rol}</p>
      <p className="text-[11px] text-gray-700 font-semibold">{tel}</p>
      <p className="text-[10px] text-gray-500">{email}</p>
      <p className="text-[10px] text-gray-400">{horario}</p>
    </div>
  );
}

export default function MatrizPanel() {
  const [tab, setTab] = useState("directorio");

  return (
    <div className="h-full flex flex-col gap-2.5 max-w-5xl">

      <p className="text-xs text-gray-500 shrink-0">Directorio de contactos N1 y N2 para escalamiento, acceso a Planiris y tabla de responsabilidades RACI por tipo de actividad.</p>
      <hr className="border-gray-100 shrink-0" />

      {/* Barra superior: tabs + botón directorio agentes */}
      <div className="flex items-center gap-1.5 shrink-0">
        {[["directorio", "Directorio de contactos"], ["raci", "Tabla de actividades (RACI)"]].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
              tab === id ? "bg-[#1a5c3a] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
        <a
          href="https://docs.google.com/spreadsheets/d/1kuyDD-eoKhCIZ1Luo31NpNMl0mwNqbu0n2-bYyYxGMk/edit?gid=90996418#gid=90996418"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Directorio agentes
        </a>
      </div>

      {/* DIRECTORIO */}
      {tab === "directorio" && (
        <div className="flex-1 overflow-y-auto space-y-3 pr-0.5">

          {/* Aviso canal único */}
          <div className="bg-[#1a5c3a] rounded-lg px-3 py-2">
            <p className="text-white text-xs font-bold">Toda derivación va al grupo: Coordinación Bolivia</p>
            <p className="text-white/70 text-[10px] mt-0.5">No escalar a teléfonos individuales ni a otros grupos de momento.</p>
          </div>

          {/* Planiris */}
          <div className="border border-[#1a5c3a]/30 bg-[#1a5c3a]/5 rounded-lg px-3 py-2">
            <p className="text-[10px] font-semibold text-[#1a5c3a] uppercase tracking-widest mb-1.5">Acceso Planiris</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] text-gray-400 mb-0.5">Parque de las Memorias</p>
                <a href="https://planiris.parquedelasmemorias.com/signin" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-[#1a5c3a] underline font-medium block mb-1">planiris.parquedelasmemorias.com</a>
                <p className="text-xs text-gray-600">contactcenter@parquedelasmemorias.com</p>
                <p className="text-xs font-mono text-gray-700">12345678</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 mb-0.5">Casa Aura</p>
                <a href="https://planiris.casa-aura.bo/signin" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-[#1a5c3a] underline font-medium block mb-1">planiris.casa-aura.bo</a>
                <p className="text-xs text-gray-600">Credenciales: consultar con supervisión</p>
              </div>
            </div>
          </div>

          {/* Referencia directorio agentes */}
          <div className="border border-gray-200 rounded-lg px-3 py-2.5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-gray-800">Directorio de agentes y contactos</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Nombres, roles y teléfonos actualizados en el documento oficial.</p>
            </div>
            <a
              href="https://docs.google.com/spreadsheets/d/1kuyDD-eoKhCIZ1Luo31NpNMl0mwNqbu0n2-bYyYxGMk/edit?gid=90996418#gid=90996418"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 bg-[#1a5c3a] hover:bg-[#2d7a52] text-white text-xs font-medium px-3 py-1.5 rounded transition-colors"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver directorio
            </a>
          </div>

        </div>
      )}

      {/* TABLA RACI */}
      {tab === "raci" && (
        <div className="flex-1 overflow-y-auto pr-0.5">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left px-3 py-1.5 text-gray-600 font-semibold">Actividad</th>
                  <th className="text-center px-2 py-1.5 text-gray-600 font-semibold w-10">N0</th>
                  <th className="text-center px-2 py-1.5 text-gray-600 font-semibold w-10">N1</th>
                  <th className="text-center px-2 py-1.5 text-gray-600 font-semibold w-10">N2</th>
                  <th className="text-left px-3 py-1.5 text-gray-500 font-semibold">Observación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {actividades.map(({ actividad, n0, n1, n2, obs }) => (
                  <tr key={actividad} className="hover:bg-gray-50">
                    <td className="px-3 py-1.5 text-gray-800 font-medium">{actividad}</td>
                    <td className="px-2 py-1.5 text-center"><Badge val={n0} /></td>
                    <td className="px-2 py-1.5 text-center"><Badge val={n1} /></td>
                    <td className="px-2 py-1.5 text-center"><Badge val={n2} /></td>
                    <td className="px-3 py-1.5 text-gray-500 text-[10px]">{obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-3 py-1.5 bg-gray-50 border-t border-gray-200 flex gap-4">
              {[["R","bg-[#1a5c3a] text-white","Responsable"],["C","bg-blue-100 text-blue-700","Consultado"],["A","bg-amber-100 text-amber-700","Aprobador"]].map(([k,cls,lbl]) => (
                <div key={k} className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${cls}`}>{k}</span>
                  <span className="text-[10px] text-gray-500">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
