import { useState } from "react";

const normas = [
  // Ingreso y Acceso
  {
    id: 1, categoria: "Ingreso y Acceso",
    pregunta: "¿Quiénes deben cumplir el Reglamento de Uso?",
    respuesta: "El Reglamento aplica a todos los clientes, visitantes, familiares, responsables autorizados, terceros y personas que ingresen o utilicen las instalaciones del Parque de las Memorias, tanto en el Cementerio Jardín como en oficinas y demás ambientes de atención.",
  },
  {
    id: 2, categoria: "Ingreso y Acceso",
    pregunta: "¿PDM puede negar el ingreso o pedir que una persona se retire?",
    respuesta: "Sí. PDM se reserva el derecho de admisión y puede solicitar el retiro de cualquier persona cuya presencia altere la paz, solemnidad, seguridad o armonía de las instalaciones, o que incumpla el Reglamento.",
  },
  {
    id: 3, categoria: "Ingreso y Acceso",
    pregunta: "¿Se puede ingresar con vehículo particular al Cementerio Jardín?",
    respuesta: "Como regla general, no está permitido el ingreso de vehículos particulares al predio del Cementerio Jardín. Solo se permite en casos excepcionales, previa coordinación con Administración, para personas mayores de 65 años, personas con impedimento físico o discapacidad, y mujeres embarazadas.",
  },
  {
    id: 4, categoria: "Ingreso y Acceso",
    pregunta: "¿Quién controla la circulación de vehículos dentro del Cementerio Jardín?",
    respuesta: "La circulación interna es supervisada por el personal de PDM. El personal puede ordenar la detención, retiro o reubicación de vehículos cuando sea necesario para garantizar la seguridad de visitantes, clientes y ceremonias.",
  },
  {
    id: 5, categoria: "Ingreso y Acceso",
    pregunta: "¿El estacionamiento está garantizado para clientes y visitantes?",
    respuesta: "No. Las áreas de estacionamiento son un servicio adicional gratuito para comodidad de los visitantes, pero no constituyen un derecho adquirido ni una obligación de PDM de asegurar disponibilidad. Cada visitante es responsable de la seguridad de su vehículo.",
  },
  {
    id: 6, categoria: "Ingreso y Acceso",
    pregunta: "¿Pueden ingresar menores de edad?",
    respuesta: "Sí, pero PDM se reserva el derecho de aceptar el ingreso de menores de 10 años. En caso de ingresar, deben estar acompañados por un adulto responsable de su seguridad y comportamiento.",
  },
  {
    id: 7, categoria: "Ingreso y Acceso",
    pregunta: "¿Se permite ingresar con mascotas?",
    respuesta: "Sí, siempre que se cumplan medidas de protección e higiene. Las mascotas deben ingresar con correa o dentro de bolso/mochila transportadora, y el responsable debe llevar bolsa para recoger sus desechos.",
  },

  // Prohibiciones
  {
    id: 8, categoria: "Prohibiciones",
    pregunta: "¿Está permitido ingresar en estado de ebriedad?",
    respuesta: "No. Está terminantemente prohibido el ingreso de personas en estado de ebriedad a las instalaciones de PDM.",
  },
  {
    id: 9, categoria: "Prohibiciones",
    pregunta: "¿Se puede consumir bebidas alcohólicas dentro de las instalaciones?",
    respuesta: "No. Está prohibido el consumo de bebidas alcohólicas dentro del Cementerio Jardín, oficinas o cualquier instalación de PDM.",
  },
  {
    id: 10, categoria: "Prohibiciones",
    pregunta: "¿Se puede ingresar con alimentos o bebidas?",
    respuesta: "No. El Reglamento establece la prohibición de ingresar con alimentos o bebidas de cualquier tipo para consumo o manipulación por clientes o visitantes, tanto en el Cementerio Jardín como en oficinas.",
  },
  {
    id: 11, categoria: "Prohibiciones",
    pregunta: "¿Qué conductas están prohibidas dentro del Cementerio Jardín?",
    respuesta: "Está prohibida cualquier conducta que altere la solemnidad del lugar, como gritos, música no autorizada, acciones ofensivas, desorden, comportamientos irrespetuosos o cualquier acto que afecte la paz del ambiente memorial.",
  },
  {
    id: 12, categoria: "Prohibiciones",
    pregunta: "¿Se puede ingresar a cualquier área del Cementerio Jardín?",
    respuesta: "No. Está prohibido ingresar a áreas restringidas, ya sea en el Cementerio Jardín, zonas operativas, depósitos u otros espacios señalizados o determinados por PDM como restringidos.",
  },
  {
    id: 19, categoria: "Prohibiciones",
    pregunta: "¿Está permitido encender velas, fuego o antorchas?",
    respuesta: "No, salvo autorización expresa en áreas permitidas. Está prohibido encender fuego, velas, antorchas o elementos inflamables en áreas no autorizadas, por razones de seguridad.",
  },
  {
    id: 22, categoria: "Prohibiciones",
    pregunta: "¿Se pueden instalar puestos comerciales dentro o fuera del Cementerio Jardín?",
    respuesta: "No. Está prohibido instalar puestos comerciales de refrigerios, flores, plantas, lápidas, plaquetas u otros productos dentro o en el perímetro externo del Cementerio Jardín sin autorización expresa de PDM.",
  },

  // Sitios Memoriales
  {
    id: 13, categoria: "Sitios Memoriales",
    pregunta: "¿Los clientes pueden plantar árboles, flores o plantas ornamentales?",
    respuesta: "No. Está prohibido plantar, sembrar, podar árboles, modificar jardines o intervenir áreas verdes. La Administración de PDM es la única autorizada para realizar trabajos de ornamentación, paisajismo, poda, siembra y mantenimiento.",
  },
  {
    id: 14, categoria: "Sitios Memoriales",
    pregunta: "¿Se pueden colocar adornos en los sitios memoriales?",
    respuesta: "No se permite colocar plaquetas, fotografías, stickers, monumentos, floreros, macetas, estructuras metálicas, adornos u otros elementos no autorizados. Solo se permite el uso de elementos aprobados por PDM, como el florero proporcionado y el kit de limpieza recomendado.",
  },
  {
    id: 15, categoria: "Sitios Memoriales",
    pregunta: "¿Se pueden modificar o delimitar los sitios memoriales?",
    respuesta: "No. Está prohibido amurallar, delimitar, ornamentar o alterar físicamente los sitios memoriales sin autorización expresa de PDM.",
  },
  {
    id: 16, categoria: "Sitios Memoriales",
    pregunta: "¿Quién realiza trabajos en lápidas, sitios memoriales o áreas verdes?",
    respuesta: "Únicamente el personal autorizado de PDM puede realizar trabajos de inhumación, exhumación, apertura y cierre de sitios, colocación o retiro de lápidas, nivelación de terrenos, poda, siembra, mantenimiento, ornato y mejoras.",
  },
  {
    id: 17, categoria: "Sitios Memoriales",
    pregunta: "¿Qué pasa si un cliente coloca objetos no autorizados?",
    respuesta: "Los objetos colocados sin autorización no estarán bajo cuidado del personal de PDM. La empresa no se responsabiliza por pérdida, daño, retiro o deterioro ocasionado por mantenimiento, limpieza o exposición al clima.",
  },
  {
    id: 18, categoria: "Sitios Memoriales",
    pregunta: "¿PDM puede retirar flores o arreglos florales?",
    respuesta: "Sí. La Administración puede retirar y desechar flores o arreglos florales marchitos o en mal estado, con el fin de conservar la armonía y presentación general del Cementerio Jardín.",
  },
  {
    id: 20, categoria: "Sitios Memoriales",
    pregunta: "¿Los visitantes pueden usar agua dentro del Cementerio Jardín?",
    respuesta: "Sí, pero deben hacer uso racional del agua, cerrar las llaves después de usarlas y respetar las políticas de responsabilidad ambiental de PDM.",
  },
  {
    id: 26, categoria: "Sitios Memoriales",
    pregunta: "¿Se permite colocar fotografías o apodos en las lápidas?",
    respuesta: "No. Las lápidas deben cumplir las características técnicas y estandarizadas de PDM. El Reglamento establece que no se permite insertar apodos ni sobrenombres en las lápidas.",
  },
  {
    id: 27, categoria: "Sitios Memoriales",
    pregunta: "¿Quién autoriza los datos de la lápida provisional?",
    respuesta: "El titular o responsable autorizado debe validar los datos de la lápida provisional al momento de la inhumación, para evitar errores ortográficos o problemas futuros.",
  },
  {
    id: 28, categoria: "Sitios Memoriales",
    pregunta: "¿Cuándo se reemplaza la lápida provisional?",
    respuesta: "La lápida provisional será reemplazada por una lápida definitiva en un periodo aproximado de quince días, conforme al procedimiento de PDM.",
  },

  // Ceremonias
  {
    id: 21, categoria: "Ceremonias",
    pregunta: "¿Se pueden realizar ceremonias religiosas o rituales?",
    respuesta: "Sí, PDM respeta todas las creencias. Sin embargo, toda ceremonia religiosa, no religiosa o ritual dentro del Cementerio Jardín debe contar con autorización expresa de Administración y no debe poner en riesgo la tranquilidad, seguridad, ley o buenas costumbres.",
  },
  {
    id: 23, categoria: "Ceremonias",
    pregunta: "¿Qué restricciones aplican en fechas recordatorias?",
    respuesta: "Durante eventos como Día del Padre, Día de la Madre, Día de Difuntos, Noches de Luces, Mundo Unido por la Vida u otras fechas significativas, está prohibido ingresar con alimentos, bebidas alcohólicas, refrigerios u otros elementos no autorizados. PDM podrá habilitar áreas específicas para refrigerios o actividades relacionadas.",
  },
  {
    id: 24, categoria: "Ceremonias",
    pregunta: "¿PDM organiza actividades especiales en fechas conmemorativas?",
    respuesta: "Sí. PDM puede organizar actividades especiales y misas en fechas recordatorias. Estas actividades serán comunicadas mediante medios internos, oficinas, instalaciones del Cementerio Jardín y otros canales habilitados.",
  },
  {
    id: 25, categoria: "Ceremonias",
    pregunta: "¿Se puede ingresar música o realizar actos especiales durante una ceremonia?",
    respuesta: "Solo con autorización. Cualquier música, acto, ceremonia o actividad especial debe estar coordinada previamente con PDM para garantizar la solemnidad, seguridad y respeto del lugar.",
  },

  // Responsabilidad
  {
    id: 29, categoria: "Responsabilidad",
    pregunta: "¿Qué responsabilidad tiene PDM por objetos personales, vehículos o daños materiales?",
    respuesta: "PDM toma precauciones razonables para la seguridad de sus instalaciones, pero no se responsabiliza por pérdidas materiales, daños a objetos o vehículos de clientes o visitantes. Puede coadyuvar con la persona afectada, sin que ello implique reposición o indemnización.",
  },
  {
    id: 30, categoria: "Responsabilidad",
    pregunta: "¿PDM responde por accidentes dentro de sus instalaciones?",
    respuesta: "No. El Reglamento establece que PDM no será responsable por accidentes o lesiones que puedan sufrir clientes o visitantes dentro de sus predios. Cada persona debe cuidar su integridad física y la de los menores que la acompañen.",
  },
  {
    id: 31, categoria: "Responsabilidad",
    pregunta: "¿Qué ocurre si alguien causa daños materiales a las instalaciones?",
    respuesta: "PDM tomará las acciones necesarias conforme a sus políticas internas ante cualquier cliente, visitante o tercero que cause daños materiales por irresponsabilidad, mal manejo o mal uso de las instalaciones.",
  },

  // Servicios
  {
    id: 32, categoria: "Servicios",
    pregunta: "¿Se pueden realizar inhumaciones, exhumaciones o cremaciones sin documentación completa?",
    respuesta: "No. El Director de Operaciones o los Coordinadores de Servicios no aceptarán ningún servicio cuya documentación, orden o informes no hayan sido presentados conforme a normas vigentes, procedimientos internos y normativa aplicable.",
  },
  {
    id: 33, categoria: "Servicios",
    pregunta: "¿Con cuánta anticipación debe solicitarse un servicio?",
    respuesta: "El cliente debe solicitar el servicio con un mínimo de 24 horas de anticipación respecto a la fecha y hora requeridas. Si no se cumple este plazo, podrá aplicarse un cargo adicional según la lista de precios vigente.",
  },
  {
    id: 34, categoria: "Servicios",
    pregunta: "¿Qué horarios aplican para servicios de inhumación, cremación o celebraciones?",
    respuesta: "Los servicios deben coordinarse previamente y realizarse dentro del horario comprendido entre las 09:00 y 16:00, salvo autorización expresa de Gerencia General para horarios excepcionales.",
  },
  {
    id: 35, categoria: "Servicios",
    pregunta: "¿Puede haber cobros adicionales por reprogramar o suspender un servicio?",
    respuesta: "Sí. Cualquier modificación, reprogramación o suspensión solicitada por el cliente después de la programación inicial puede generar cobros adicionales, conforme a la lista de precios vigente.",
  },

  // Contratos
  {
    id: 36, categoria: "Contratos",
    pregunta: "¿Quién puede solicitar el uso de un sitio memorial o servicio contratado?",
    respuesta: "El titular del contrato es la persona autorizada para solicitar el servicio. En ausencia del titular, pueden hacerlo los responsables autorizados formalmente registrados, bajo las condiciones establecidas por PDM.",
  },
  {
    id: 37, categoria: "Contratos",
    pregunta: "¿Un responsable autorizado puede modificar o transferir un contrato?",
    respuesta: "No. El responsable autorizado solo puede solicitar el servicio contratado en ausencia del titular. No puede modificar, ceder, transferir ni disponer del sitio memorial o servicio contratado.",
  },
  {
    id: 38, categoria: "Contratos",
    pregunta: "¿Qué pasa si fallece el titular del contrato?",
    respuesta: "Los responsables autorizados o herederos deberán regularizar la titularidad mediante la documentación correspondiente. El Reglamento establece un plazo de 90 días desde la inhumación del titular para presentar documentación necesaria para la cesión del derecho de uso o prestación de servicios.",
  },
  {
    id: 39, categoria: "Contratos",
    pregunta: "¿PDM puede cambiar o alternar un sitio memorial?",
    respuesta: "Sí. PDM puede alternar o cambiar un sitio memorial ante circunstancias de fuerza mayor identificadas por la Administración, reasignando un nuevo sitio que cumpla con características y condiciones equivalentes a las contratadas.",
  },
  {
    id: 40, categoria: "Contratos",
    pregunta: "¿Dónde pueden consultar los clientes sobre el Reglamento?",
    respuesta: "Los clientes pueden realizar consultas mediante la línea gratuita 24 horas 800170087, WhatsApp 71722227, el sitio web institucional, oficinas del Cementerio Jardín o punto de atención en Casa Aura.",
  },
];

const categorias = ["Todas", "Ingreso y Acceso", "Prohibiciones", "Sitios Memoriales", "Ceremonias", "Responsabilidad", "Servicios", "Contratos"];

const CAT_BG = {
  "Ingreso y Acceso":  "bg-blue-50",
  "Prohibiciones":     "bg-rose-50",
  "Sitios Memoriales": "bg-green-50",
  "Ceremonias":        "bg-violet-50",
  "Responsabilidad":   "bg-orange-50",
  "Servicios":         "bg-cyan-50",
  "Contratos":         "bg-amber-50",
};

export default function NormasPanel() {
  const [cat, setCat] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const filtradas = normas.filter(({ categoria, pregunta, respuesta }) => {
    const matchCat = cat === "Todas" || categoria === cat;
    const q = busqueda.toLowerCase();
    const matchSearch = !q || pregunta.toLowerCase().includes(q) || respuesta.toLowerCase().includes(q) || categoria.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="h-full flex flex-col space-y-3 max-w-5xl">

      <p className="text-xs text-gray-500 shrink-0">Preguntas frecuentes sobre el Reglamento de Uso de Parque de las Memorias. Aplica a clientes, visitantes y familiares.</p>
      <hr className="border-gray-100 shrink-0" />

      <input
        type="text"
        placeholder="Buscar norma o restricción..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full border border-gray-200 rounded px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]/30 focus:border-[#1a5c3a] shrink-0"
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
          filtradas.map(({ id, categoria, pregunta, respuesta }) => (
            <div key={id} className={`py-1.5 px-1.5 rounded ${CAT_BG[categoria] ?? ""}`}>
              <div className="flex gap-2 items-baseline">
                <span className="text-[10px] font-mono text-gray-400 shrink-0 w-4 text-right">{id}.</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-800 leading-snug">{pregunta}</p>
                  <p className="text-[11px] text-gray-600 leading-snug mt-0.5">{respuesta}</p>
                </div>
                <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide shrink-0 hidden sm:block">{categoria}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <p className="text-xs text-gray-500 shrink-0">{filtradas.length} de {normas.length} normas</p>
    </div>
  );
}
