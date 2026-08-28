import { glossary } from "./glossary.js";

// ── AUXILIAR ────────────────────────────────────────────────────────────────
const auxiliarItems = [
  // Información General (N0)
  { tipo: "Horarios de atención – día regular",   nivel: "N0", accion: "PDM: lun–dom 08:30–16:30 · Casa Aura: lun–vie 08:30–16:30, sáb 09:00–13:00" },
  { tipo: "Horarios de atención – feriados",      nivel: "N0", accion: "PDM: atención 08:30–12:30, visita 08:30–16:30 · Casa Aura: sin atención" },
  { tipo: "Direcciones",                          nivel: "N0", accion: "PDM: Av. Circunvalación Km 3.5 · Casa Aura: Av. Atahuallpa N° 2108 (zona Ciclovía)" },
  { tipo: "Información de eventos",               nivel: "N0", accion: "Ver pestaña Horarios de Atención" },
  { tipo: "Normas de ingreso",                    nivel: "N0", accion: "Ver pestaña Normas y Restricciones" },
  // Coordinación de Servicios (N1)
  { tipo: "Servicio funerario",                   nivel: "N1", accion: "Validar datos del titular y del fallecido. Escalar a N1 para activación del servicio." },
  { tipo: "Inhumación",                           nivel: "N1", accion: "Escalar a N1 para activación del servicio" },
  { tipo: "Exhumación",                           nivel: "N1", accion: "Escalar a N1 para activación del servicio" },
  { tipo: "Cremación",                            nivel: "N1", accion: "Escalar a N1 para activación del servicio" },
  { tipo: "Ceremonias conmemorativas o misas",    nivel: "N1", accion: "Identificar necesidad, detalles del servicio y horarios disponibles. Escalar a N1 para activación." },
  // Información de Servicios
  { tipo: "Planes de emergencia",                 nivel: "N1", accion: "Cotización de consulta por emergencia. Identificar necesidad, preferencia y presupuesto. Escalar a N1." },
  { tipo: "Planes de planificación",              nivel: "N2", accion: "Información general y concretar cita. Identificar necesidad, preferencia y presupuesto. Escalar a N2." },
  // Trámites Administrativos (N2)
  { tipo: "Cambio de nombre – cesión voluntaria",               nivel: "N2", accion: "Titular mayor de edad o venta. No obligatorio. Informar requisitos documentales." },
  { tipo: "Cambio de nombre – por fallecimiento del titular",   nivel: "N2", accion: "Obligatorio. Garantiza el derecho de uso a herederos. Informar requisitos." },
  { tipo: "Adición / modificación / eliminación de responsable",nivel: "N2", accion: "Para oficializar cambios en sistema, file y documentos. Explicar pasos y documentos requeridos." },
  { tipo: "Cambio de sector y sitio memorial",                  nivel: "N2", accion: "Escalar a N2 para casos especiales" },
  { tipo: "Adecuación de sitio memorial",                       nivel: "N2", accion: "Escalar a N2 para casos especiales" },
  // Certificaciones (N0)
  { tipo: "Certificado de óbito o inhumación",                  nivel: "N0", accion: "Certifica inhumación o custodia de restos. Solo al titular. Informar requisitos y precios." },
  { tipo: "Certificado de sitio",                               nivel: "N0", accion: "Certifica que el cliente cuenta con un sitio o espacio memorial. Solo al titular." },
  { tipo: "Recibo por servicio exequial prestado",              nivel: "N0", accion: "Para devolución en Mumanal, Gestora o Cossmil. Solo al titular. Si falleció: cert. descendencia + carta de herederos." },
  { tipo: "Nota aclaratoria por servicio exequial prestado",    nivel: "N0", accion: "Emitida únicamente a solicitud del titular. Mismas condiciones de autorización que el recibo." },
  // Otros Servicios Casa Aura (N1)
  { tipo: "Cambio de lápida · Pulido · Portafolio · Paquetes florales · Kit de limpieza", nivel: "N1", accion: "Informar precios, plazos de instalación y formas de pago. Escalar a N1 para cliente interesado." },
  // Soporte Básico (N0)
  { tipo: "Estado del servicio", nivel: "N0", accion: "Informar sobre la etapa actual. Referencia: páginas Casa Aura y Parque de las Memorias." },
  { tipo: "Estado del contrato", nivel: "N0", accion: "Verificar en Planiris y proporcionar información al titular." },
];

// ── NORMAS ──────────────────────────────────────────────────────────────────
const normasItems = [
  // Ingreso y Acceso
  { id: 1,  categoria: "Ingreso y Acceso",  pregunta: "¿Quiénes deben cumplir el Reglamento de Uso?", respuesta: "El Reglamento aplica a todos los clientes, visitantes, familiares, responsables autorizados, terceros y personas que ingresen o utilicen las instalaciones del Parque de las Memorias." },
  { id: 2,  categoria: "Ingreso y Acceso",  pregunta: "¿PDM puede negar el ingreso o pedir que una persona se retire?", respuesta: "Sí. PDM se reserva el derecho de admisión y puede solicitar el retiro de cualquier persona cuya presencia altere la paz, solemnidad, seguridad o armonía de las instalaciones." },
  { id: 3,  categoria: "Ingreso y Acceso",  pregunta: "¿Se puede ingresar con vehículo particular al Cementerio Jardín?", respuesta: "No, salvo excepciones previa coordinación: personas mayores de 65 años, con impedimento físico o discapacidad, y mujeres embarazadas." },
  { id: 4,  categoria: "Ingreso y Acceso",  pregunta: "¿Quién controla la circulación de vehículos dentro del Cementerio Jardín?", respuesta: "El personal de PDM supervisa la circulación interna y puede ordenar la detención, retiro o reubicación de vehículos." },
  { id: 5,  categoria: "Ingreso y Acceso",  pregunta: "¿El estacionamiento está garantizado para clientes y visitantes?", respuesta: "No. Es un servicio adicional gratuito pero no constituye un derecho adquirido. Cada visitante es responsable de la seguridad de su vehículo." },
  { id: 6,  categoria: "Ingreso y Acceso",  pregunta: "¿Pueden ingresar menores de edad?", respuesta: "Sí, pero PDM se reserva el derecho de aceptar el ingreso de menores de 10 años. Deben estar acompañados por un adulto responsable." },
  { id: 7,  categoria: "Ingreso y Acceso",  pregunta: "¿Se permite ingresar con mascotas?", respuesta: "Sí, con correa o transportadora, y el responsable debe llevar bolsa para recoger sus desechos." },
  // Prohibiciones
  { id: 8,  categoria: "Prohibiciones",     pregunta: "¿Está permitido ingresar en estado de ebriedad?", respuesta: "No. Está terminantemente prohibido el ingreso de personas en estado de ebriedad." },
  { id: 9,  categoria: "Prohibiciones",     pregunta: "¿Se puede consumir bebidas alcohólicas dentro de las instalaciones?", respuesta: "No. Está prohibido el consumo de bebidas alcohólicas dentro del Cementerio Jardín, oficinas o cualquier instalación de PDM." },
  { id: 10, categoria: "Prohibiciones",     pregunta: "¿Se puede ingresar con alimentos o bebidas?", respuesta: "No. El Reglamento prohíbe ingresar con alimentos o bebidas de cualquier tipo para consumo o manipulación." },
  { id: 11, categoria: "Prohibiciones",     pregunta: "¿Qué conductas están prohibidas dentro del Cementerio Jardín?", respuesta: "Está prohibida cualquier conducta que altere la solemnidad: gritos, música no autorizada, desorden, comportamientos irrespetuosos." },
  { id: 12, categoria: "Prohibiciones",     pregunta: "¿Se puede ingresar a cualquier área del Cementerio Jardín?", respuesta: "No. Está prohibido ingresar a áreas restringidas señalizadas o determinadas por PDM." },
  { id: 19, categoria: "Prohibiciones",     pregunta: "¿Está permitido encender velas, fuego o antorchas?", respuesta: "No, salvo autorización expresa en áreas permitidas. Está prohibido por razones de seguridad." },
  { id: 22, categoria: "Prohibiciones",     pregunta: "¿Se pueden instalar puestos comerciales dentro o fuera del Cementerio Jardín?", respuesta: "No. Está prohibido instalar puestos comerciales sin autorización expresa de PDM." },
  // Sitios Memoriales
  { id: 13, categoria: "Sitios Memoriales", pregunta: "¿Los clientes pueden plantar árboles, flores o plantas ornamentales?", respuesta: "No. Solo el personal autorizado de PDM puede realizar trabajos de ornamentación, paisajismo, poda y mantenimiento." },
  { id: 14, categoria: "Sitios Memoriales", pregunta: "¿Se pueden colocar adornos en los sitios memoriales?", respuesta: "No se permite colocar plaquetas, fotografías, stickers, monumentos u otros elementos no autorizados. Solo los aprobados por PDM." },
  { id: 15, categoria: "Sitios Memoriales", pregunta: "¿Se pueden modificar o delimitar los sitios memoriales?", respuesta: "No. Está prohibido amurallar, delimitar, ornamentar o alterar físicamente los sitios memoriales sin autorización expresa de PDM." },
  { id: 16, categoria: "Sitios Memoriales", pregunta: "¿Quién realiza trabajos en lápidas, sitios memoriales o áreas verdes?", respuesta: "Únicamente el personal autorizado de PDM puede realizar inhumaciones, exhumaciones, colocación de lápidas, poda, siembra y mantenimiento." },
  { id: 17, categoria: "Sitios Memoriales", pregunta: "¿Qué pasa si un cliente coloca objetos no autorizados?", respuesta: "PDM no se responsabiliza por pérdida, daño, retiro o deterioro de objetos no autorizados." },
  { id: 18, categoria: "Sitios Memoriales", pregunta: "¿PDM puede retirar flores o arreglos florales?", respuesta: "Sí. La Administración puede retirar flores o arreglos marchitos para conservar la armonía general del Cementerio Jardín." },
  { id: 20, categoria: "Sitios Memoriales", pregunta: "¿Los visitantes pueden usar agua dentro del Cementerio Jardín?", respuesta: "Sí, pero deben hacer uso racional del agua, cerrar las llaves y respetar las políticas de responsabilidad ambiental." },
  { id: 26, categoria: "Sitios Memoriales", pregunta: "¿Se permite colocar fotografías o apodos en las lápidas?", respuesta: "No. Las lápidas deben cumplir las características estandarizadas de PDM. No se permite insertar apodos ni sobrenombres." },
  { id: 27, categoria: "Sitios Memoriales", pregunta: "¿Quién autoriza los datos de la lápida provisional?", respuesta: "El titular o responsable autorizado debe validar los datos al momento de la inhumación." },
  { id: 28, categoria: "Sitios Memoriales", pregunta: "¿Cuándo se reemplaza la lápida provisional?", respuesta: "La lápida provisional será reemplazada por una definitiva en un periodo aproximado de quince días." },
  // Ceremonias
  { id: 21, categoria: "Ceremonias",        pregunta: "¿Se pueden realizar ceremonias religiosas o rituales?", respuesta: "Sí, con autorización expresa de Administración. No debe poner en riesgo la tranquilidad, seguridad, ley o buenas costumbres." },
  { id: 23, categoria: "Ceremonias",        pregunta: "¿Qué restricciones aplican en fechas recordatorias?", respuesta: "En fechas como Día de Difuntos, Noches de Luces, etc., está prohibido ingresar alimentos, bebidas alcohólicas u otros elementos no autorizados." },
  { id: 24, categoria: "Ceremonias",        pregunta: "¿PDM organiza actividades especiales en fechas conmemorativas?", respuesta: "Sí. PDM puede organizar actividades especiales y misas comunicadas mediante medios internos y canales habilitados." },
  { id: 25, categoria: "Ceremonias",        pregunta: "¿Se puede ingresar música o realizar actos especiales durante una ceremonia?", respuesta: "Solo con autorización previa de PDM para garantizar la solemnidad, seguridad y respeto del lugar." },
  // Responsabilidad
  { id: 29, categoria: "Responsabilidad",   pregunta: "¿Qué responsabilidad tiene PDM por objetos personales, vehículos o daños materiales?", respuesta: "PDM no se responsabiliza por pérdidas materiales o daños a objetos o vehículos. Puede coadyuvar sin que implique reposición o indemnización." },
  { id: 30, categoria: "Responsabilidad",   pregunta: "¿PDM responde por accidentes dentro de sus instalaciones?", respuesta: "No. Cada persona debe cuidar su integridad física y la de los menores que la acompañen." },
  { id: 31, categoria: "Responsabilidad",   pregunta: "¿Qué ocurre si alguien causa daños materiales a las instalaciones?", respuesta: "PDM tomará las acciones necesarias conforme a sus políticas internas ante daños por irresponsabilidad o mal uso." },
  // Servicios
  { id: 32, categoria: "Servicios",         pregunta: "¿Se pueden realizar inhumaciones, exhumaciones o cremaciones sin documentación completa?", respuesta: "No. No se aceptará ningún servicio cuya documentación no haya sido presentada conforme a normas y procedimientos internos." },
  { id: 33, categoria: "Servicios",         pregunta: "¿Con cuánta anticipación debe solicitarse un servicio?", respuesta: "Mínimo 24 horas de anticipación. Si no se cumple este plazo, puede aplicarse un cargo adicional." },
  { id: 34, categoria: "Servicios",         pregunta: "¿Qué horarios aplican para servicios de inhumación, cremación o celebraciones?", respuesta: "Entre las 09:00 y 16:00, salvo autorización expresa de Gerencia General para horarios excepcionales." },
  { id: 35, categoria: "Servicios",         pregunta: "¿Puede haber cobros adicionales por reprogramar o suspender un servicio?", respuesta: "Sí. Modificaciones, reprogramaciones o suspensiones pueden generar cobros adicionales conforme a la lista de precios vigente." },
  // Contratos
  { id: 36, categoria: "Contratos",         pregunta: "¿Quién puede solicitar el uso de un sitio memorial o servicio contratado?", respuesta: "El titular del contrato. En su ausencia, los responsables autorizados formalmente registrados." },
  { id: 37, categoria: "Contratos",         pregunta: "¿Un responsable autorizado puede modificar o transferir un contrato?", respuesta: "No. Solo puede solicitar el servicio contratado. No puede modificar, ceder ni transferir el sitio memorial o contrato." },
  { id: 38, categoria: "Contratos",         pregunta: "¿Qué pasa si fallece el titular del contrato?", respuesta: "Los herederos deben regularizar la titularidad. Plazo: 90 días desde la inhumación del titular para presentar documentación." },
  { id: 39, categoria: "Contratos",         pregunta: "¿PDM puede cambiar o alternar un sitio memorial?", respuesta: "Sí. Ante circunstancias de fuerza mayor, PDM puede reasignar un nuevo sitio con características equivalentes." },
  { id: 40, categoria: "Contratos",         pregunta: "¿Dónde pueden consultar los clientes sobre el Reglamento?", respuesta: "Línea gratuita 24h 800170087, WhatsApp 71722227, sitio web institucional, oficinas del Cementerio Jardín o punto de atención Casa Aura." },
];

// ── PREGUNTAS FRECUENTES ─────────────────────────────────────────────────────
const preguntasItems = [
  { tema: "Horarios de atención día regular", info: "PDM: lunes a domingo 08:30–16:30 · Casa Aura: lunes a viernes 08:30–16:30, sábado 09:00–13:00", categoria: "Información General" },
  { tema: "Horarios de atención feriados", info: "PDM: atención 08:30–12:30, visita 08:30–16:30 · Casa Aura: sin atención", categoria: "Información General" },
  { tema: "Direcciones", info: "PDM: Av. Circunvalación Km 3.5 · Casa Aura: Av. Atahuallpa N° 2108", categoria: "Información General" },
  { tema: "Servicio funerario", info: "Validar datos. Escalar a N1 para activación.", categoria: "Coordinación de Servicios" },
  { tema: "Inhumación / Exhumación / Cremación", info: "Escalar a N1 para activación del servicio.", categoria: "Coordinación de Servicios" },
  { tema: "Ceremonias conmemorativas o misas", info: "Identificar necesidad, detalles y horarios disponibles. Escalar a N1.", categoria: "Coordinación de Servicios" },
  { tema: "Planes de emergencia", info: "Cotización por emergencia. Identificar necesidad, preferencia y presupuesto. Escalar N1.", categoria: "Información de Servicios" },
  { tema: "Planes de planificación", info: "Información general y concretar cita. Escalar a N2.", categoria: "Información de Servicios" },
  { tema: "Cambio de nombre – cesión voluntaria", info: "Carta, CI de ambas partes, documento notariado. Escalar N2.", categoria: "Trámites Administrativos" },
  { tema: "Cambio de nombre – por fallecimiento del titular", info: "Declaración de herederos, carta notariada, CI del nuevo titular. Escalar N2.", categoria: "Trámites Administrativos" },
  { tema: "Adición/modificación/eliminación de responsable", info: "Carta de solicitud del titular + fotocopia CI. Escalar N2.", categoria: "Trámites Administrativos" },
  { tema: "Cambio de sector y sitio memorial", info: "Escalar a N2 para casos especiales.", categoria: "Trámites Administrativos" },
  { tema: "Certificado de óbito o inhumación", info: "Certifica inhumación o custodia. Solo al titular. ADDIUVA resuelve.", categoria: "Certificaciones" },
  { tema: "Certificado de sitio", info: "Certifica que el cliente tiene un espacio memorial. Solo al titular.", categoria: "Certificaciones" },
  { tema: "Recibo por servicio exequial prestado", info: "Para gestión en Mumanal, Gestora o Cossmil. ADDIUVA resuelve.", categoria: "Certificaciones" },
  { tema: "Cambio de lápida / Pulido / Portafolio / Florales / Kit de limpieza", info: "Informar precios y plazos. Escalar N1 para cliente interesado.", categoria: "Otros Servicios" },
  { tema: "Estado del servicio / Estado del contrato", info: "Informar etapa actual. Verificar en Planiris. ADDIUVA resuelve.", categoria: "Soporte Básico" },
];

// ── HORARIOS ─────────────────────────────────────────────────────────────────
const horariosItems = [
  { tema: "Horario Parque de las Memorias", info: "Lunes a domingo 08:30–16:30. Feriados: atención 08:30–12:30, visita 08:30–16:30." },
  { tema: "Horario Casa Aura", info: "Lunes a viernes 08:30–16:30, sábado 09:00–13:00. Feriados: cerrada." },
  { tema: "Planiris – credenciales Parque", info: "contactcenter@parquedelasmemorias.com · contraseña: 12345678" },
  { tema: "Feriados Bolivia", info: "1 ene, 22 ene, carnaval, viernes santo, 1 may, corpus christi, 6 ago, 2 nov, 25 dic y feriados locales." },
];

// ── MATRIZ ───────────────────────────────────────────────────────────────────
const matrizItems = [
  { nombre: "María Gutiérrez", rol: "Celebrante Casa Aura", tel: "74351672", nivel: "N1" },
  { nombre: "Maricela Ajhuacho", rol: "Celebrante Casa Aura", tel: "72209055", nivel: "N1" },
  { nombre: "Jose Nina", rol: "Celebrante Casa Aura", tel: "67406734", nivel: "N1" },
  { nombre: "Consejero familiar", rol: "Asesor línea 24 horas", tel: "71722227", nivel: "N1" },
  { nombre: "Paola Ramos", rol: "Supervisora memorial", tel: "67403513", nivel: "N1" },
  { nombre: "Jhade Cruz", rol: "ATC – Atención al cliente", tel: "67403515", nivel: "N1" },
  { nombre: "Mariana Canedo", rol: "ATC – Atención al cliente", tel: "67407688", nivel: "N1" },
  { nombre: "Alvaro Zuleta", rol: "Director Servicios Casa Aura", tel: "71724000", nivel: "N2" },
  { nombre: "Peter Andersen", rol: "Jefe Comercial", tel: "71411064", nivel: "N2" },
  { nombre: "Carolina Nassaf", rol: "Directora Procesos SGI", tel: "72236531", nivel: "N2" },
  { nombre: "Judith Camacho", rol: "Directora de Calidad", tel: "72244609", nivel: "N2" },
  { nombre: "Carmen Barral", rol: "Directora Cartera / Cobranzas", tel: "72236531", nivel: "N2" },
];

// ── ÍNDICE FINAL ──────────────────────────────────────────────────────────────
let _id = 0;
const id = () => ++_id;

export const searchIndex = [
  // Pestañas / secciones principales
  { id: id(), titulo: "Inicio",                    subtexto: "Guiones de atención, apertura, cierre, Llenar Aquí, Ticket", panel: "inicio",    panelLabel: "Inicio",                    tag: "Sección" },
  { id: id(), titulo: "AUXILIAR",                  subtexto: "Tipos de consulta, niveles N0 N1 N2, acción a tomar",        panel: "auxiliar",  panelLabel: "AUXILIAR",                  tag: "Sección" },
  { id: id(), titulo: "Horarios de Atención",      subtexto: "Horarios PDM y Casa Aura, feriados, Planiris",              panel: "horarios",  panelLabel: "Horarios de Atención",      tag: "Sección" },
  { id: id(), titulo: "Normas y Restricciones",    subtexto: "Normas de atención, registro, Planiris, escalamiento, conducta", panel: "normas", panelLabel: "Normas y Restricciones",  tag: "Sección" },
  { id: id(), titulo: "Glosario de Términos",      subtexto: "Definiciones de términos Casa Aura y Parque de las Memorias", panel: "glosario", panelLabel: "Glosario de Términos",    tag: "Sección" },
  { id: id(), titulo: "Matriz de Escalamiento",    subtexto: "Directorio de contactos N1 y N2, tabla RACI, Planiris",    panel: "matriz",    panelLabel: "Matriz de Escalamiento",    tag: "Sección" },
  { id: id(), titulo: "Preguntas Frecuentes",      subtexto: "Referencia de consultas frecuentes por tipo y escala",      panel: "preguntas", panelLabel: "Preguntas Frecuentes",      tag: "Sección" },
  { id: id(), titulo: "Empatía",                   subtexto: "Guía de comunicación empática, frases de apoyo, situaciones difíciles", panel: "empatia", panelLabel: "Empatía",         tag: "Sección" },

  // Glosario
  ...glossary.map((g) => ({
    id: id(),
    titulo: g.termino,
    subtexto: g.definicion,
    panel: "glosario",
    panelLabel: "Glosario de Términos",
    tag: g.seccion,
  })),

  // AUXILIAR
  ...auxiliarItems.map((a) => ({
    id: id(),
    titulo: a.tipo,
    subtexto: a.accion,
    panel: "auxiliar",
    panelLabel: "AUXILIAR",
    tag: a.nivel,
  })),

  // Normas
  ...normasItems.map((n) => ({
    id: id(),
    titulo: n.pregunta,
    subtexto: n.respuesta,
    panel: "normas",
    panelLabel: "Normas y Restricciones",
    tag: n.categoria,
  })),

  // Preguntas Frecuentes
  ...preguntasItems.map((p) => ({
    id: id(),
    titulo: p.tema,
    subtexto: p.info,
    panel: "preguntas",
    panelLabel: "Preguntas Frecuentes",
    tag: p.categoria,
  })),

  // Horarios
  ...horariosItems.map((h) => ({
    id: id(),
    titulo: h.tema,
    subtexto: h.info,
    panel: "horarios",
    panelLabel: "Horarios de Atención",
    tag: "Horarios",
  })),

  // Matriz – contactos
  ...matrizItems.map((m) => ({
    id: id(),
    titulo: m.nombre,
    subtexto: `${m.rol} · Tel: ${m.tel}`,
    panel: "matriz",
    panelLabel: "Matriz de Escalamiento",
    tag: m.nivel,
  })),
];
