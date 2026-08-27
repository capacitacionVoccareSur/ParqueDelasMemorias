import { useState } from "react";

const normas = [
  // Atención al afiliado
  { id: 1, categoria: "Atención", norma: "Atender toda llamada dentro de los primeros 3 timbres." },
  { id: 2, categoria: "Atención", norma: "Identificarse con nombre propio al inicio de cada llamada." },
  { id: 3, categoria: "Atención", norma: "No interrumpir al afiliado mientras habla. Escuchar completamente antes de responder." },
  { id: 4, categoria: "Atención", norma: "Usar el guión de apertura y cierre en todas las llamadas sin excepción." },
  { id: 5, categoria: "Atención", norma: "Hablar con tono calmado y empático en todo momento, especialmente en casos de duelo." },
  { id: 6, categoria: "Atención", norma: "No poner en espera al afiliado más de 2 minutos sin retornar a la llamada con actualización." },
  { id: 7, categoria: "Atención", norma: "Si se transfiere la llamada, informar al afiliado a quién se transfiere y por qué." },
  { id: 8, categoria: "Atención", norma: "No colgar la llamada sin confirmar que el afiliado no tiene más preguntas." },

  // Registro
  { id: 9, categoria: "Registro", norma: "Completar el registro en 'Llenar Aquí' antes de cerrar cada llamada." },
  { id: 10, categoria: "Registro", norma: "No dejar campos vacíos en el formulario de registro. Si no aplica, escribir 'N/A'." },
  { id: 11, categoria: "Registro", norma: "Clasificar correctamente el tipo de consulta según el AUXILIAR." },
  { id: 12, categoria: "Registro", norma: "Abrir un ticket para toda consulta que no se resuelva en la misma llamada." },
  { id: 13, categoria: "Registro", norma: "Registrar el número de ticket y comunicarlo al afiliado cuando corresponda." },
  { id: 14, categoria: "Registro", norma: "Actualizar el estado del ticket tan pronto se reciba respuesta del área responsable." },

  // Planiris
  { id: 15, categoria: "Planiris", norma: "Ingresar a Planiris únicamente con las credenciales institucionales." },
  { id: 16, categoria: "Planiris", norma: "No compartir las credenciales de acceso a Planiris con personas externas al equipo." },
  { id: 17, categoria: "Planiris", norma: "Verificar la identidad del afiliado antes de consultar datos en Planiris." },
  { id: 18, categoria: "Planiris", norma: "No modificar datos del contrato en Planiris sin autorización del supervisor." },
  { id: 19, categoria: "Planiris", norma: "Reportar de inmediato cualquier error o inconsistencia encontrada en Planiris." },

  // Escalamiento
  { id: 20, categoria: "Escalamiento", norma: "Toda urgencia funeraria activa debe escalarse de inmediato (N2). No intentar resolver solo." },
  { id: 21, categoria: "Escalamiento", norma: "Usar los canales indicados en la Matriz de Escalamiento para cada tipo de caso." },
  { id: 22, categoria: "Escalamiento", norma: "No prometer tiempos de respuesta sin confirmar disponibilidad con el área responsable." },
  { id: 23, categoria: "Escalamiento", norma: "Al escalar por WhatsApp, incluir: nombre del afiliado, CI, teléfono, tipo de caso y número de ticket." },
  { id: 24, categoria: "Escalamiento", norma: "Si el responsable de escalamiento no responde en 10 minutos, notificar al supervisor." },

  // Restricciones
  { id: 25, categoria: "Restricciones", norma: "No ofrecer información de precios sin consultar tarifas vigentes. Los precios cambian." },
  { id: 26, categoria: "Restricciones", norma: "No confirmar disponibilidad de nichos, mausoleos o servicios sin verificar en Planiris." },
  { id: 27, categoria: "Restricciones", norma: "No dar información de otros afiliados a terceros sin verificar autorización." },
  { id: 28, categoria: "Restricciones", norma: "No emitir opiniones personales sobre servicios fúnebres, creencias religiosas o decisiones del afiliado." },
  { id: 29, categoria: "Restricciones", norma: "No prometer descuentos, excepciones o condiciones especiales sin aprobación de supervisión." },
  { id: 30, categoria: "Restricciones", norma: "Evitar frases que minimicen el dolor: 'Tranquilícese', 'No llore', 'Hay que seguir adelante'." },

  // Confidencialidad
  { id: 31, categoria: "Confidencialidad", norma: "La información del afiliado es confidencial. No compartir fuera de los sistemas autorizados." },
  { id: 32, categoria: "Confidencialidad", norma: "No guardar datos de afiliados en dispositivos personales." },
  { id: 33, categoria: "Confidencialidad", norma: "No hablar de casos de afiliados en espacios fuera del equipo de trabajo." },
  { id: 34, categoria: "Confidencialidad", norma: "Al finalizar el turno, cerrar sesión en Planiris y en el documento de Google." },

  // Conducta
  { id: 35, categoria: "Conducta", norma: "Mantener la calma ante afiliados agresivos o en estado emocional alterado." },
  { id: 36, categoria: "Conducta", norma: "Si el afiliado es irrespetuoso, informar cortésmente que se está registrando la llamada y derivar al supervisor." },
  { id: 37, categoria: "Conducta", norma: "No responder con el mismo tono si el afiliado levanta la voz. Bajar el tono propio." },
  { id: 38, categoria: "Conducta", norma: "Reportar al supervisor cualquier amenaza, situación inusual o llamada de emergencia real." },
  { id: 39, categoria: "Conducta", norma: "Pedir ayuda al supervisor ante cualquier duda sobre cómo proceder. Es preferible pausar que cometer un error." },
  { id: 40, categoria: "Conducta", norma: "El bienestar del agente también importa. Después de una llamada difícil, comunicarlo al supervisor." },
];

const categorias = ["Todas", "Atención", "Registro", "Planiris", "Escalamiento", "Restricciones", "Confidencialidad", "Conducta"];

export default function NormasPanel() {
  const [cat, setCat] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const filtradas = normas.filter(({ categoria, norma }) => {
    const matchCat = cat === "Todas" || categoria === cat;
    const q = busqueda.toLowerCase();
    const matchSearch = !q || norma.toLowerCase().includes(q) || categoria.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="h-full flex flex-col space-y-3 max-w-5xl">

      <p className="text-sm text-gray-700 shrink-0">
        Normas que rigen la atención y el uso de los sistemas. Aplican a todos los agentes en todo momento.
      </p>

      <input
        type="text"
        placeholder="Buscar norma..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]/30 focus:border-[#1a5c3a] shrink-0"
      />

      <div className="flex flex-wrap gap-1.5 shrink-0">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
              cat === c ? "bg-[#1a5c3a] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 pr-0.5">
        {filtradas.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">Sin resultados</p>
        ) : (
          filtradas.map(({ id, categoria, norma }) => {
            const bg = {
              Atención:        "bg-blue-50",
              Registro:        "bg-violet-50",
              Planiris:        "bg-cyan-50",
              Escalamiento:    "bg-orange-50",
              Restricciones:   "bg-rose-50",
              Confidencialidad:"bg-yellow-50",
              Conducta:        "bg-green-50",
            }[categoria] ?? "";
            return (
              <div key={id} className={`py-1 flex gap-2 items-baseline px-1 rounded ${bg}`}>
                <span className="text-[10px] font-mono text-gray-400 shrink-0 w-4 text-right">{id}.</span>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide shrink-0 w-24">{categoria}</span>
                <p className="text-xs text-gray-800 leading-snug">{norma}</p>
              </div>
            );
          })
        )}
      </div>

      <p className="text-xs text-gray-500 shrink-0">{filtradas.length} de {normas.length} normas</p>
    </div>
  );
}
