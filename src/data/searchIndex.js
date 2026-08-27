import { glossary } from "./glossary.js";

// ── AUXILIAR ────────────────────────────────────────────────────────────────
const auxiliarItems = [
  { tipo: "Información general del parque", nivel: "N0", preguntas: ["¿Horarios del parque?", "¿Dónde está ubicado?", "¿Qué servicios tienen?"], accion: "Responder en llamada con Horarios de Atención." },
  { tipo: "Consulta de contrato / estado de cuenta", nivel: "N0", preguntas: ["¿Estado de mi contrato?", "¿Vigencia del plan?", "¿Quiénes son mis beneficiarios?"], accion: "Ingresar a Planiris y verificar datos del titular." },
  { tipo: "Información de precios y planes", nivel: "N0", preguntas: ["¿Cuánto cuesta el plan?", "¿Planes sin afiliación?", "¿Qué cubre el plan exequial?"], accion: "Informar en llamada o derivar a ventas si pide cotización." },
  { tipo: "Consulta sobre memorial / nicho", nivel: "N0", preguntas: ["¿Cómo visito el memorial?", "¿Puedo hacer cambios en el nicho?", "¿Horarios de visita?"], accion: "Responder en llamada. Derivar a administración si requiere gestión presencial." },
  { tipo: "Solicitud de servicio exequial", nivel: "N1", preguntas: ["¿Cómo activo el plan?", "¿Qué documentos necesito?", "¿Cómo agendo la cremación?"], accion: "Registrar en Llenar Aquí y derivar a operaciones por WhatsApp." },
  { tipo: "Trámites administrativos", nivel: "N1", preguntas: ["Actualizar mis datos.", "Cambiar titular del contrato.", "Agregar un beneficiario."], accion: "Indicar documentos requeridos y derivar al área administrativa con ticket." },
  { tipo: "Reclamo o queja", nivel: "N1", preguntas: ["Problema con mi servicio.", "Cobro incorrecto.", "Mala atención a mi familiar."], accion: "Registrar ticket con todos los detalles y escalar a supervisión." },
  { tipo: "Urgencia funeraria activa", nivel: "N2", preguntas: ["Acaba de fallecer un familiar.", "Necesito traslado urgente.", "¿Cómo activo el plan ahora?"], accion: "Escalar de inmediato a Matriz de Escalamiento. No dejar en espera." },
];

// ── NORMAS ──────────────────────────────────────────────────────────────────
const normasItems = [
  { id: 1, categoria: "Atención", norma: "Atender toda llamada dentro de los primeros 3 timbres." },
  { id: 2, categoria: "Atención", norma: "Identificarse con nombre propio al inicio de cada llamada." },
  { id: 3, categoria: "Atención", norma: "No interrumpir al afiliado mientras habla." },
  { id: 4, categoria: "Atención", norma: "Usar el guión de apertura y cierre en todas las llamadas." },
  { id: 5, categoria: "Atención", norma: "Hablar con tono calmado y empático, especialmente en casos de duelo." },
  { id: 6, categoria: "Atención", norma: "No poner en espera más de 2 minutos sin retornar con actualización." },
  { id: 7, categoria: "Atención", norma: "Al transferir, informar al afiliado a quién y por qué." },
  { id: 8, categoria: "Atención", norma: "No colgar sin confirmar que el afiliado no tiene más preguntas." },
  { id: 9, categoria: "Registro", norma: "Completar el registro en 'Llenar Aquí' antes de cerrar cada llamada." },
  { id: 10, categoria: "Registro", norma: "No dejar campos vacíos. Si no aplica, escribir 'N/A'." },
  { id: 11, categoria: "Registro", norma: "Clasificar correctamente el tipo de consulta según el AUXILIAR." },
  { id: 12, categoria: "Registro", norma: "Abrir un ticket para toda consulta que no se resuelva en la misma llamada." },
  { id: 13, categoria: "Registro", norma: "Registrar el número de ticket y comunicarlo al afiliado cuando corresponda." },
  { id: 14, categoria: "Registro", norma: "Actualizar el estado del ticket tan pronto se reciba respuesta." },
  { id: 15, categoria: "Planiris", norma: "Ingresar a Planiris únicamente con las credenciales institucionales." },
  { id: 16, categoria: "Planiris", norma: "No compartir las credenciales de Planiris con personas externas." },
  { id: 17, categoria: "Planiris", norma: "Verificar la identidad del afiliado antes de consultar datos en Planiris." },
  { id: 18, categoria: "Planiris", norma: "No modificar datos del contrato sin autorización del supervisor." },
  { id: 19, categoria: "Planiris", norma: "Reportar de inmediato cualquier error o inconsistencia en Planiris." },
  { id: 20, categoria: "Escalamiento", norma: "Toda urgencia funeraria activa debe escalarse de inmediato (N2). No intentar resolver solo." },
  { id: 21, categoria: "Escalamiento", norma: "Usar los canales indicados en la Matriz de Escalamiento para cada tipo de caso." },
  { id: 22, categoria: "Escalamiento", norma: "No prometer tiempos de respuesta sin confirmar disponibilidad." },
  { id: 23, categoria: "Escalamiento", norma: "Al escalar por WhatsApp incluir: nombre, CI, teléfono, tipo de caso y ticket." },
  { id: 24, categoria: "Escalamiento", norma: "Si el responsable no responde en 10 minutos, notificar al supervisor." },
  { id: 25, categoria: "Restricciones", norma: "No ofrecer información de precios sin consultar tarifas vigentes." },
  { id: 26, categoria: "Restricciones", norma: "No confirmar disponibilidad de nichos o servicios sin verificar en Planiris." },
  { id: 27, categoria: "Restricciones", norma: "No dar información de afiliados a terceros sin verificar autorización." },
  { id: 28, categoria: "Restricciones", norma: "No emitir opiniones sobre servicios fúnebres, creencias o decisiones del afiliado." },
  { id: 29, categoria: "Restricciones", norma: "No prometer descuentos o condiciones especiales sin aprobación de supervisión." },
  { id: 30, categoria: "Restricciones", norma: "Evitar frases que minimicen el dolor: 'Tranquilícese', 'No llore', 'Hay que seguir adelante'." },
  { id: 31, categoria: "Confidencialidad", norma: "La información del afiliado es confidencial. No compartir fuera de los sistemas autorizados." },
  { id: 32, categoria: "Confidencialidad", norma: "No guardar datos de afiliados en dispositivos personales." },
  { id: 33, categoria: "Confidencialidad", norma: "No hablar de casos de afiliados en espacios fuera del equipo de trabajo." },
  { id: 34, categoria: "Confidencialidad", norma: "Al finalizar el turno, cerrar sesión en Planiris y en el documento de Google." },
  { id: 35, categoria: "Conducta", norma: "Mantener la calma ante afiliados agresivos o en estado emocional alterado." },
  { id: 36, categoria: "Conducta", norma: "Si el afiliado es irrespetuoso, informar cortésmente que se graba la llamada y derivar al supervisor." },
  { id: 37, categoria: "Conducta", norma: "No responder con el mismo tono si el afiliado levanta la voz. Bajar el tono propio." },
  { id: 38, categoria: "Conducta", norma: "Reportar al supervisor cualquier amenaza o situación inusual." },
  { id: 39, categoria: "Conducta", norma: "Pedir ayuda al supervisor ante cualquier duda. Es preferible pausar que cometer un error." },
  { id: 40, categoria: "Conducta", norma: "El bienestar del agente importa. Después de una llamada difícil, comunicarlo al supervisor." },
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
    subtexto: a.preguntas.join(" · ") + " → " + a.accion,
    panel: "auxiliar",
    panelLabel: "AUXILIAR",
    tag: a.nivel,
  })),

  // Normas
  ...normasItems.map((n) => ({
    id: id(),
    titulo: n.norma,
    subtexto: n.categoria,
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
