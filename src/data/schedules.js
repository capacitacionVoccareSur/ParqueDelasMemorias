// Horarios de atención - rellenar con datos de "Horarios de atención...docx"
export const schedules = {
  regular: {
    titulo: "Horario Regular",
    dias: [
      { dia: "Lunes a Viernes", horario: "8:00 AM – 5:00 PM" },
      { dia: "Sábados", horario: "8:00 AM – 1:00 PM" },
      { dia: "Domingos y Festivos", horario: "8:00 AM – 12:00 PM" },
    ],
  },
  feriados: {
    titulo: "Feriados Especiales",
    nota: "Los siguientes días el parque opera con horario reducido o cerrado.",
    dias: [
      { dia: "1 de enero (Año Nuevo)", horario: "Cerrado" },
      { dia: "Semana Santa (Viernes Santo)", horario: "8:00 AM – 12:00 PM" },
      { dia: "1 de mayo (Día del Trabajo)", horario: "8:00 AM – 12:00 PM" },
      { dia: "20 de julio (Independencia)", horario: "8:00 AM – 12:00 PM" },
      { dia: "7 de agosto (Batalla de Boyacá)", horario: "8:00 AM – 12:00 PM" },
      { dia: "8 de diciembre (Inmaculada Concepción)", horario: "8:00 AM – 12:00 PM" },
      { dia: "25 de diciembre (Navidad)", horario: "Cerrado" },
    ],
  },
  peaton: {
    titulo: "Día del Peatón",
    nota: "En días de pico y placa peatonal no hay acceso vehicular al parque.",
    detalle: [
      "Únicamente acceso a pie o en transporte público.",
      "Servicios administrativos disponibles con horario normal.",
      "Servicios en campo pueden tener restricciones.",
      "Consultar calendario mensual para fechas específicas.",
    ],
  },
  contacto: {
    linea: "800 170 087",
    horario_linea: "Lunes a Viernes 7:00 AM – 7:00 PM / Sábados 8:00 AM – 1:00 PM",
    cola: "BO_PARQUE_MEMORIAS",
  },
};
