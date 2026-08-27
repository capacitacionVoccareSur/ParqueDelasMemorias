// Catálogo de servicios - rellenar con datos de "Catálogo de servicios.xlsx"
export const services = [
  {
    id: 1,
    categoria: "Memorial",
    nombre: "Memorial Básico",
    descripcion: "Servicio de inhumación en lote estándar con placa conmemorativa.",
    precio: "A consultar",
    incluye: "Lote, inhumación, placa",
  },
  {
    id: 2,
    categoria: "Memorial",
    nombre: "Memorial Premium",
    descripcion: "Lote en zona destacada con jardín y placa personalizada.",
    precio: "A consultar",
    incluye: "Lote premium, inhumación, placa personalizada, mantenimiento",
  },
  {
    id: 3,
    categoria: "Exequial",
    nombre: "Plan Exequial Individual",
    descripcion: "Cobertura de servicios funerarios para una persona.",
    precio: "A consultar",
    incluye: "Féretro, traslado, sala de velación, trámites legales",
  },
  {
    id: 4,
    categoria: "Exequial",
    nombre: "Plan Exequial Familiar",
    descripcion: "Cobertura de servicios funerarios para grupo familiar.",
    precio: "A consultar",
    incluye: "Cobertura familiar, féretro, traslado, sala de velación",
  },
  {
    id: 5,
    categoria: "Cremación",
    nombre: "Cremación Individual",
    descripcion: "Servicio de cremación con urna estándar.",
    precio: "A consultar",
    incluye: "Cremación, urna estándar, certificado",
  },
  {
    id: 6,
    categoria: "Cremación",
    nombre: "Cremación con Nicho",
    descripcion: "Cremación y asignación de nicho en columbario.",
    precio: "A consultar",
    incluye: "Cremación, urna, nicho en columbario, placa",
  },
  {
    id: 7,
    categoria: "Nicho",
    nombre: "Nicho Columbario",
    descripcion: "Espacio para urna en columbario cubierto.",
    precio: "A consultar",
    incluye: "Nicho, placa, mantenimiento",
  },
  {
    id: 8,
    categoria: "Osario",
    nombre: "Osario Familiar",
    descripcion: "Espacio para restos óseos familiares.",
    precio: "A consultar",
    incluye: "Osario, placa identificatoria",
  },
];

export const categorias = ["Todos", ...new Set(services.map((s) => s.categoria))];
