import { useState } from "react";
import { glossary } from "../../data/glossary";

const secciones = ["Todos", "Casa Aura", "Parque de las Memorias"];

export default function GlosarioPanel() {
  const [busqueda, setBusqueda] = useState("");
  const [seccion, setSeccion] = useState("Todos");

  const filtrados = glossary.filter(({ termino, definicion, seccion: s }) => {
    const matchSeccion = seccion === "Todos" || s === seccion;
    const q = busqueda.toLowerCase();
    const matchSearch = !q || termino.toLowerCase().includes(q) || definicion.toLowerCase().includes(q);
    return matchSeccion && matchSearch;
  });

  return (
    <div className="h-full flex flex-col space-y-3 max-w-5xl">
      <input
        type="text"
        placeholder="Buscar término..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]/30 focus:border-[#1a5c3a]"
      />
      <div className="flex gap-2">
        {secciones.map((s) => (
          <button
            key={s}
            onClick={() => setSeccion(s)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
              seccion === s
                ? "bg-[#1a5c3a] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 pr-0.5">
        {filtrados.length === 0 ? (
          <p className="text-sm text-gray-600 text-center py-8">Sin resultados</p>
        ) : (
          filtrados.map(({ termino, definicion, seccion: s }) => (
            <div key={`${s}-${termino}`} className="py-2.5">
              <div className="flex items-baseline gap-2">
                <p className="text-sm font-semibold text-gray-900">{termino}</p>
                <span className="text-xs text-gray-500 shrink-0">{s}</span>
              </div>
              <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{definicion}</p>
            </div>
          ))
        )}
      </div>

      <p className="text-xs text-gray-500 shrink-0">
        {filtrados.length} de {glossary.length} términos
      </p>
    </div>
  );
}
