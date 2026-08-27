import { useState, useEffect, useRef } from "react";
import { searchIndex } from "../data/searchIndex";

const PANEL_COLORS = {
  inicio:    "bg-gray-200 text-gray-700",
  glosario:  "bg-violet-100 text-violet-700",
  auxiliar:  "bg-[#1a5c3a]/10 text-[#1a5c3a]",
  normas:    "bg-blue-100 text-blue-700",
  preguntas: "bg-amber-100 text-amber-700",
  horarios:  "bg-cyan-100 text-cyan-700",
  matriz:    "bg-rose-100 text-rose-700",
  empatia:   "bg-pink-100 text-pink-700",
};

function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200 text-gray-900 rounded-[2px] px-[1px]">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function GlobalSearch({ open, onClose, onNavigate }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const q = query.trim().toLowerCase();
  const resultados = q.length < 2 ? [] : searchIndex
    .filter((item) =>
      item.titulo.toLowerCase().includes(q) ||
      item.subtexto.toLowerCase().includes(q) ||
      item.tag?.toLowerCase().includes(q)
    )
    .slice(0, 12);

  // Group by panel
  const grouped = resultados.reduce((acc, item) => {
    if (!acc[item.panel]) acc[item.panel] = { label: item.panelLabel, items: [] };
    acc[item.panel].items.push(item);
    return acc;
  }, {});

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar en toda la herramienta..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600 text-xs cursor-pointer">
              ✕
            </button>
          )}
          <kbd className="text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 font-mono">ESC</kbd>
        </div>

        {/* Resultados */}
        <div className="max-h-[60vh] overflow-y-auto">
          {q.length < 2 ? (
            <p className="text-xs text-gray-400 text-center py-8">Escribe al menos 2 caracteres para buscar</p>
          ) : resultados.length === 0 ? (
            <p className="text-xs text-gray-400 text-center py-8">Sin resultados para <strong className="text-gray-600">"{query}"</strong></p>
          ) : (
            Object.entries(grouped).map(([panel, { label, items }]) => (
              <div key={panel}>
                <div className="px-4 py-1.5 bg-gray-50 border-b border-gray-100">
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${PANEL_COLORS[panel] ?? "bg-gray-100 text-gray-500"}`}>
                    {label}
                  </span>
                </div>
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.panel)}
                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors cursor-pointer"
                  >
                    <p className="text-xs font-semibold text-gray-800 leading-snug">
                      {highlight(item.titulo, query)}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-snug mt-0.5 line-clamp-2">
                      {highlight(item.subtexto, query)}
                    </p>
                  </button>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {resultados.length > 0 && (
          <div className="px-4 py-2 border-t border-gray-100 flex justify-between items-center">
            <span className="text-[10px] text-gray-400">{resultados.length} resultado{resultados.length !== 1 ? "s" : ""}</span>
            <span className="text-[10px] text-gray-400">Clic en un resultado para navegar a la pestaña</span>
          </div>
        )}
      </div>
    </div>
  );
}
