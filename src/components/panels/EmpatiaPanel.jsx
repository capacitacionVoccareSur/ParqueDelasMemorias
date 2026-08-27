function Bloque({ titulo, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#1a5c3a] mb-2">{titulo}</p>
      {children}
    </div>
  );
}

function Frase({ texto, etiqueta }) {
  return (
    <div className="border-l-4 border-[#1a5c3a] pl-3 py-0.5">
      {etiqueta && <p className="text-[10px] text-gray-500 mb-0.5">{etiqueta}</p>}
      <p className="text-sm font-semibold text-gray-800 leading-snug">"{texto}"</p>
    </div>
  );
}

function Evitar({ texto }) {
  return (
    <div className="border-l-4 border-red-300 pl-3 py-0.5">
      <p className="text-sm text-red-700 line-through">{texto}</p>
    </div>
  );
}

export default function EmpatiaPanel() {
  return (
    <div className="space-y-6 max-w-5xl">

      {/* Introducción */}
      <div className="bg-[#1a5c3a]/5 border border-[#1a5c3a]/20 rounded-lg px-4 py-3">
        <p className="text-sm text-gray-800 leading-relaxed">
          Los afiliados de Parque de las Memorias y Casa Aura llaman en algunos de los momentos más difíciles de su vida. Hablar con alguien que acaba de perder a un ser querido, o que está organizando todo para cuando ese momento llegue, requiere una preparación especial. Esta sección es una guía práctica para desarrollar esa habilidad.
        </p>
      </div>

      {/* El contexto del afiliado */}
      <Bloque titulo="Quién es el afiliado que llama">
        <div className="space-y-2 text-sm text-gray-700">
          <p>Los afiliados de un seguro exequial no son clientes comunes. Pueden llamar en tres momentos muy distintos:</p>
          <div className="space-y-1.5 ml-2">
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a5c3a] mt-1.5 shrink-0"></span>
              <p><span className="font-semibold">Antes del fallecimiento:</span> quieren entender su plan, verificar beneficiarios, conocer el proceso. Están tranquilos pero puede haber ansiedad anticipatoria.</p>
            </div>
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
              <p><span className="font-semibold">En el momento del fallecimiento:</span> están en duelo agudo. Pueden sonar confundidos, llorar, hablar entrecortado o al contrario, hablar muy rápido. Necesitan claridad y contención.</p>
            </div>
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
              <p><span className="font-semibold">Después del fallecimiento:</span> están agotados, pueden estar molestos si algo salió mal, o simplemente necesitan cerrar trámites pendientes.</p>
            </div>
          </div>
        </div>
      </Bloque>

      <hr className="border-gray-100" />

      {/* Qué es la empatía en este contexto */}
      <Bloque titulo="Qué significa ser empático aquí">
        <div className="space-y-2 text-sm text-gray-700">
          <p>La empatía no es fingir tristeza ni decir frases de consuelo de manual. Es reconocer lo que la persona está viviendo sin minimizarlo ni exagerarlo.</p>
          <p>En la práctica significa:</p>
          <div className="space-y-1.5 ml-2">
            {[
              "Escuchar sin apurarse a dar la solución.",
              "Nombrar lo que la persona siente antes de dar información.",
              "No asumir cómo se siente — preguntar y esperar.",
              "Ajustar el ritmo de la conversación al estado del afiliado.",
              "Recordar que detrás de cada llamada hay una familia real.",
            ].map((item) => (
              <div key={item} className="flex gap-2">
                <span className="text-[#1a5c3a] font-bold shrink-0">·</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Bloque>

      <hr className="border-gray-100" />

      {/* Frases que funcionan */}
      <Bloque titulo="Frases que funcionan">
        <div className="space-y-2">
          <Frase texto="Lamento mucho su pérdida. Estoy aquí para acompañarle en este proceso." etiqueta="Al abrir una llamada de duelo" />
          <Frase texto="Entiendo que este momento es muy difícil. Vamos a resolverlo juntos, paso a paso." etiqueta="Cuando hay que pedir información al afiliado" />
          <Frase texto="Tómese el tiempo que necesite. No hay prisa." etiqueta="Cuando el afiliado llora o no puede hablar" />
          <Frase texto="Gracias por contarme eso. Entiendo por qué está preocupado/a." etiqueta="Cuando el afiliado explica su situación" />
          <Frase texto="Voy a hacer lo posible para ayudarle ahora mismo." etiqueta="Antes de buscar información o escalar" />
          <Frase texto="No está solo/a. Estamos disponibles las 24 horas si necesita llamarnos nuevamente." etiqueta="Al cerrar la llamada" />
        </div>
      </Bloque>

      <hr className="border-gray-100" />

      {/* Frases que dañan */}
      <Bloque titulo="Frases que dañan — evitar siempre">
        <div className="space-y-2">
          <Evitar texto="Tranquilícese." />
          <Evitar texto="No se preocupe, eso pasa." />
          <Evitar texto="Hay que seguir adelante." />
          <Evitar texto="Todo pasa por algo." />
          <Evitar texto="No llore, que no ayuda." />
          <Evitar texto="Tiene que calmarse para que pueda escucharle." />
          <Evitar texto="Eso no es posible, no se puede hacer nada." />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Estas frases, aunque a veces bien intencionadas, invalidan el dolor de la persona y generan desconfianza en el servicio.
        </p>
      </Bloque>

      <hr className="border-gray-100" />

      {/* Manejo de situaciones difíciles */}
      <Bloque titulo="Situaciones difíciles y cómo manejarlas">
        <div className="space-y-4">

          <div className="rounded-lg border border-gray-200 px-3 py-2.5">
            <p className="text-xs font-semibold text-gray-700 mb-1">El afiliado llora y no puede hablar</p>
            <p className="text-sm text-gray-600">No llenar el silencio con preguntas. Esperar. Decir: <span className="font-semibold text-gray-800">"Aquí estoy, tómese su tiempo"</span>. Cuando pueda hablar, retomar desde donde quedó.</p>
          </div>

          <div className="rounded-lg border border-gray-200 px-3 py-2.5">
            <p className="text-xs font-semibold text-gray-700 mb-1">El afiliado está enojado por algo que salió mal</p>
            <p className="text-sm text-gray-600">No defenderse ni excusar al servicio. Decir: <span className="font-semibold text-gray-800">"Entiendo su molestia y tiene razón en estar preocupado/a. Vamos a registrar esto y dar seguimiento"</span>. Registrar y escalar.</p>
          </div>

          <div className="rounded-lg border border-gray-200 px-3 py-2.5">
            <p className="text-xs font-semibold text-gray-700 mb-1">El afiliado hace preguntas que no sé responder</p>
            <p className="text-sm text-gray-600">Ser honesto: <span className="font-semibold text-gray-800">"No tengo esa información ahora mismo, pero voy a derivar su consulta a quien pueda ayudarle"</span>. No inventar respuestas. Crear ticket.</p>
          </div>

          <div className="rounded-lg border border-gray-200 px-3 py-2.5">
            <p className="text-xs font-semibold text-gray-700 mb-1">El afiliado pide cosas que no están en el plan</p>
            <p className="text-sm text-gray-600">No decir "no se puede" sin verificar. Revisar Planiris. Si definitivamente no está cubierto: <span className="font-semibold text-gray-800">"Según su contrato actual eso no está incluido, pero puedo consultarle opciones adicionales"</span>. Derivar a ventas.</p>
          </div>

          <div className="rounded-lg border border-gray-200 px-3 py-2.5">
            <p className="text-xs font-semibold text-gray-700 mb-1">La llamada me afectó emocionalmente</p>
            <p className="text-sm text-gray-600">Es normal. Trabajar con duelo ajeno tiene un costo emocional real. Al terminar la llamada, si se siente afectado/a, comunicarlo al supervisor. No es debilidad — es parte de hacer bien el trabajo.</p>
          </div>

        </div>
      </Bloque>

      <hr className="border-gray-100" />

      {/* Cuidado del agente */}
      <Bloque titulo="Tu bienestar también importa">
        <div className="bg-[#1a5c3a]/5 border border-[#1a5c3a]/20 rounded-lg px-4 py-3 space-y-2 text-sm text-gray-700">
          <p>Atender este tipo de llamadas de manera continua puede generar fatiga emocional o empatía secundaria. Algunas señales de alerta:</p>
          <div className="space-y-1 ml-2">
            {[
              "Dificultad para desconectarte de las llamadas al terminar el turno.",
              "Sentirte abrumado/a o entristecido/a después de atender casos de duelo.",
              "Responder de forma más brusca o distante que lo habitual.",
              "Sentir que ya no te afecta nada — tampoco es saludable.",
            ].map((s) => (
              <div key={s} className="flex gap-2">
                <span className="text-[#1a5c3a] shrink-0">·</span>
                <p>{s}</p>
              </div>
            ))}
          </div>
          <p className="font-semibold text-gray-800 pt-1">Si identificas alguna de estas señales, habla con tu supervisor. Cuidarte a ti mismo/a te permite seguir cuidando a quienes llaman.</p>
        </div>
      </Bloque>

    </div>
  );
}
