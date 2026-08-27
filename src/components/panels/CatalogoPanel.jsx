import { useState } from "react";
import { categorias, services } from "../../data/services";

export default function CatalogoPanel() {
  const [filtro, setFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const filtrados = services.filter((s) => {
    const matchCat = filtro === "Todos" || s.categoria === filtro;
    const matchSearch =
      busqueda === "" ||
      s.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      s.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-3 h-full flex flex-col">
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Buscar servicio..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]/40 focus:border-[#1a5c3a]"
        />
        <div className="flex flex-wrap gap-1.5">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                filtro === cat
                  ? "bg-[#1a5c3a] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-0.5">
        {filtrados.length === 0 ? (
          <p className="text-sm text-gray-600 text-center py-8">Sin resultados</p>
        ) : (
          filtrados.map((s) => (
            <div key={s.id} className="border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-white transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-gray-800">{s.nombre}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.descripcion}</p>
                </div>
                <span className="shrink-0 text-xs bg-[#1a5c3a]/10 text-[#1a5c3a] font-medium px-2 py-0.5 rounded-full">
                  {s.categoria}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-600">
                <span><span className="font-medium">Precio:</span> {s.precio}</span>
                <span className="text-gray-600">|</span>
                <span><span className="font-medium">Incluye:</span> {s.incluye}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
