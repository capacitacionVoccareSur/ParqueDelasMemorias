import { schedules } from "../../data/schedules";

function HorarioTable({ titulo, dias, nota }) {
  return (
    <div>
      <h3 className="text-[#1a5c3a] font-semibold text-sm mb-1 uppercase tracking-wide">{titulo}</h3>
      {nota && <p className="text-xs text-gray-500 mb-2">{nota}</p>}
      <table className="w-full text-sm border-collapse">
        <tbody>
          {dias.map(({ dia, horario }) => (
            <tr key={dia} className="border-b border-gray-100 last:border-0">
              <td className="py-1.5 text-gray-700">{dia}</td>
              <td className={`py-1.5 text-right font-medium ${horario === "Cerrado" ? "text-red-600" : "text-[#1a5c3a]"}`}>
                {horario}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HorariosPanel() {
  const { regular, feriados, peaton, contacto } = schedules;

  return (
    <div className="space-y-4">
      <div className="bg-[#1a5c3a]/10 border border-[#1a5c3a]/30 rounded-lg p-3">
        <p className="text-xs text-gray-600">
          <span className="font-semibold text-[#1a5c3a]">Linea de atencion:</span>{" "}
          {contacto.linea} — {contacto.horario_linea}
        </p>
      </div>

      <HorarioTable {...regular} />

      <HorarioTable {...feriados} />

      <div>
        <h3 className="text-[#1a5c3a] font-semibold text-sm mb-1 uppercase tracking-wide">
          {peaton.titulo}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{peaton.nota}</p>
        <ul className="space-y-1">
          {peaton.detalle.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700">
              <span className="text-[#1a5c3a] font-bold mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
