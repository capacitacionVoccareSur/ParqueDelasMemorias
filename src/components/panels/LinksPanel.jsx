// Links a sistemas internos — credenciales a rellenar con info real
const links = [
  {
    nombre: "Planiris Parque",
    url: "https://planiris.com", // reemplazar con URL real
    descripcion: "Sistema de gestion de contratos y servicios",
    usuario: "usuario@parque",  // reemplazar con credencial real
    clave: "••••••••",
    color: "bg-[#1a5c3a]",
    hoverColor: "hover:bg-[#2d7a52]",
  },
  {
    nombre: "Casa Aura",
    url: "https://casaaura.com", // reemplazar con URL real
    descripcion: "Sistema de sala de velacion y servicios complementarios",
    usuario: "usuario@aura",    // reemplazar con credencial real
    clave: "••••••••",
    color: "bg-slate-700",
    hoverColor: "hover:bg-slate-600",
  },
];

export default function LinksPanel() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-md px-3 py-2">
        Los siguientes enlaces abren en una nueva pestana. Las credenciales mostradas son de referencia.
      </p>

      {links.map((link) => (
        <div key={link.nombre} className="border border-gray-200 rounded-lg overflow-hidden">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between px-4 py-3 text-white ${link.color} ${link.hoverColor} transition-colors`}
          >
            <div>
              <p className="font-bold text-sm">{link.nombre}</p>
              <p className="text-white/90 text-xs">{link.descripcion}</p>
            </div>
            <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <div className="bg-gray-50 px-4 py-2.5 space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 w-16">Usuario:</span>
              <span className="font-mono text-gray-800 bg-white border border-gray-200 rounded px-2 py-0.5">
                {link.usuario}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 w-16">Clave:</span>
              <span className="font-mono text-gray-800 bg-white border border-gray-200 rounded px-2 py-0.5">
                {link.clave}
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
        <p className="text-xs font-medium text-gray-600 mb-2">Otros recursos</p>
        <div className="space-y-1.5">
          <button
            onClick={() => navigator.clipboard?.writeText("800170087")}
            className="w-full text-left text-sm text-[#1a5c3a] hover:underline"
          >
            Copiar linea 800 170 087
          </button>
        </div>
      </div>
    </div>
  );
}
