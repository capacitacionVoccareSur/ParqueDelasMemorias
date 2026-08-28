import { useState } from "react";
import GlobalSearch from "./GlobalSearch";
import InicioPanel from "./panels/InicioPanel";
import AuxiliarPanel from "./panels/AuxiliarPanel";
import HorariosAtencionPanel from "./panels/HorariosAtencionPanel";
import NormasPanel from "./panels/NormasPanel";
import GlosarioPanel from "./panels/GlosarioPanel";
import MatrizPanel from "./panels/MatrizPanel";
import PreguntasFrecuentesPanel from "./panels/PreguntasFrecuentesPanel";
import EmpatiaPanel from "./panels/EmpatiaPanel";

const panelMap = {
  inicio: <InicioPanel />,
  auxiliar: <AuxiliarPanel />,
  horarios: <HorariosAtencionPanel />,
  normas: <NormasPanel />,
  glosario: <GlosarioPanel />,
  matriz: <MatrizPanel />,
  preguntas: <PreguntasFrecuentesPanel />,
  empatia: <EmpatiaPanel />,
};

const nav = [
  { id: "inicio",   label: "Inicio" },
  { id: "auxiliar", label: "AUXILIAR" },
  { id: "horarios", label: "Horarios de Atención" },
  { id: "normas",   label: "Normas y Restricciones" },
  { id: "glosario", label: "Glosario de Términos" },
  { id: "matriz",   label: "Matriz de Escalamiento" },
  { id: "preguntas",label: "Preguntas Frecuentes" },
  { id: "empatia",  label: "Empatía" },
];

export default function Layout({ activePanel, setActivePanel }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-[#f0f0ee] overflow-hidden">
      <GlobalSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={(panel) => { setActivePanel(panel); setSearchOpen(false); }}
      />

      {/* Header */}
      <header className="bg-[#1a5c3a] text-white px-5 py-3 flex items-center justify-between shrink-0">
        <div>
          <p className="font-bold text-sm leading-tight tracking-tight">Parque de las Memorias – Casa Aura</p>
          <p className="text-white/70 text-xs mt-0.5">ADDIUVA · Herramienta interna</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors cursor-pointer"
            title="Buscar en toda la herramienta (cualquier pestaña)"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            Buscar
          </button>
          <a
            href="https://drive.google.com/drive/folders/1lNF-98N9SpzoUsF6yhUDsMN6mLoZ_lWX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
            Documentación
          </a>
          <p className="font-bold text-base tracking-wide">800 170 087</p>
        </div>
      </header>

      {/* Tab bar */}
      <div className="flex px-4 pt-3 gap-1 shrink-0 overflow-x-auto scrollbar-none">
        {nav.map((item) => {
          const active = activePanel === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePanel(item.id)}
              className={`px-3 py-2 text-xs rounded-t-md border border-b-0 transition-colors duration-100 cursor-pointer whitespace-nowrap ${
                active
                  ? "bg-white text-[#1a5c3a] font-semibold border-gray-200 relative z-10"
                  : "bg-[#e0e0dd] text-gray-400 border-transparent hover:text-gray-600 hover:bg-[#d8d8d5]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Content panel — connected to active tab */}
      <div className="flex-1 mx-4 mb-2 bg-white border border-gray-200 rounded-b-md rounded-tr-md shadow-sm flex flex-col min-h-0 relative z-0">
        <div className="flex-1 overflow-hidden p-4 min-h-0 flex flex-col">
          {panelMap[activePanel]}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a5c3a] text-white px-5 py-2 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse"></span>
          <span className="text-xs text-white/70 font-mono">BO_PARQUE_MEMORIAS</span>
        </div>
        <p className="text-xs text-white/40">Solo uso interno</p>
      </footer>

    </div>
  );
}
