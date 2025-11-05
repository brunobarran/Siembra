import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Step6Result({ data, onShare, onDownload, onPrint, onReset }) {
  const [expandedSections, setExpandedSections] = useState({
    voluntarySavings: true,
    debtReduction: false,
    retirementPreparation: false
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 0,
    }).format(value)
  }

  // Calcular rotación de aguja según score (0-10)
  const needleRotation = (data.score / 10) * 180 - 90

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header
        userName={data.name || 'Usuario'}
        userDocument={data.documentId || '---'}
      />

      {/* Main Content */}
      <div className="flex-1 px-4 lg:px-80 py-8 lg:py-14 bg-white flex flex-col items-center gap-10">
        {/* Banner Superior */}
        <div
          className="w-full pt-10 lg:pt-14 rounded-[30px] flex flex-col items-center gap-6"
          style={{
            background: 'radial-gradient(ellipse 131.12% 131.12% at 50% -24.59%, #FFE7BA 0%, white 57%)'
          }}
        >
          {/* Foto + Medal Badge + Iconos Decorativos */}
          <div className="flex justify-center items-start gap-2.5 flex-wrap">
            {/* Foto con Medal */}
            <div className="relative w-32 h-32 lg:w-44 lg:h-44">
              {data.userPhoto ? (
                <img
                  src={data.userPhoto}
                  alt={data.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-fuchsia-700 flex items-center justify-center">
                  <span className="text-white text-5xl lg:text-6xl font-black">
                    {data.name ? data.name[0].toUpperCase() : '?'}
                  </span>
                </div>
              )}
              {/* Medal Badge */}
              <img
                src="/Siembra/img/medal.png"
                alt="Medalla"
                className="absolute object-contain"
                style={{
                  width: '5rem',
                  height: '5rem',
                  right: '-1rem',
                  bottom: '-1rem'
                }}
              />
            </div>
          </div>

          {/* Contenido del Banner */}
          <div className="w-full flex flex-col items-center gap-4 px-4 lg:px-12">
            {/* Título */}
            <h1 className="text-center text-black text-4xl lg:text-6xl font-black leading-tight lg:leading-[56px]">
              ¡Felicidades {data.name}!
            </h1>

            {/* Descripción */}
            <p className="text-center text-black text-lg lg:text-2xl font-normal leading-6 lg:leading-7 max-w-[800px]">
              Has completado tu planificación de retiro con éxito. Valoramos tu compromiso con una gestión financiera proactiva.
            </p>

            {/* Gauge con Score (mismo que Step4) */}
            <div className="w-full px-4 lg:px-12 py-6 rounded-lg flex flex-col items-center gap-8">
              <div className="w-48 lg:w-60 flex flex-col items-center gap-4">
                <div className="relative w-48 lg:w-60 h-28 lg:h-32">
                  {/* Imagen de fondo del gauge */}
                  <img
                    src="/Siembra/img/score.png"
                    alt="Score gauge"
                    className="w-full h-full object-contain"
                  />

                  {/* SVG con aguja indicadora */}
                  <svg
                    viewBox="0 0 240 140"
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: 'none' }}
                  >
                    {/* Aguja indicadora dinámica */}
                    <g transform={`rotate(${(data.score / 10) * 180 - 90} 120 120)`}>
                      <line
                        x1="120"
                        y1="120"
                        x2="120"
                        y2="50"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle cx="120" cy="120" r="4" fill="black" />
                    </g>
                  </svg>
                </div>

                {/* Etiquetas 0 y 10 */}
                <div className="w-full flex justify-between px-2 text-black text-sm lg:text-base font-normal">
                  <span>0</span>
                  <span>10</span>
                </div>
              </div>

              {/* Texto Resultado */}
              <div className="w-full max-w-[800px]">
                <p className="text-center text-black text-lg lg:text-2xl leading-6 lg:leading-8">
                  En base a tus decisiones obtuviste un resultado de{' '}
                  <span className="font-bold">{data.score}/10</span>,
                  demostrando que tienes el control para lograr el retiro que deseas.
                </p>
              </div>
            </div>

            {/* 3 Tarjetas VERDES (emerald-50) */}
            <div className="w-full max-w-[800px] p-6 lg:p-8 bg-stone-50 rounded-lg flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Pensión Deseada */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <p className="text-center text-black text-base font-normal leading-4">
                    Tu Pensión Deseada
                  </p>
                  <div className="w-full h-px bg-black opacity-10 my-2" />
                  <p className="text-center text-black text-xl font-black leading-5">
                    {formatCurrency(data.desiredPension)}
                  </p>
                </div>

                {/* Pensión Proyectada */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <p className="text-center text-black text-base font-normal leading-4">
                    Tu Pensión Proyectada
                  </p>
                  <div className="w-full h-px bg-black opacity-10 my-2" />
                  <p className="text-center text-black text-xl font-black leading-5">
                    {formatCurrency(data.projectedPension)}
                  </p>
                </div>

                {/* Diferencia A FAVOR */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <p className="text-center text-black text-base font-normal leading-4">
                    Diferencia a favor
                  </p>
                  <div className="w-full h-px bg-black opacity-10 my-2" />
                  <p className="text-center text-black text-xl font-black leading-5">
                    {formatCurrency(data.difference)}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-center text-black text-base leading-6">
                <span className="font-bold">Tu Proyección de Pensión Avanzada</span>
                {' '}es el plan que has diseñado. Ahora, solo deberás aplicar estas acciones recomendadas para volverla una realidad.
              </p>
            </div>
          </div>

          {/* Separador "Tu Plan de Acción" */}
          <div className="w-full max-w-[800px] py-4 flex items-center gap-4 px-4">
            <div className="flex-1 h-px bg-neutral-400 opacity-10" />
            <h2 className="text-neutral-400 text-xl lg:text-2xl font-bold leading-6 whitespace-nowrap">
              Tu Plan de Acción para el Retiro
            </h2>
            <div className="flex-1 h-px bg-neutral-400 opacity-10" />
          </div>
        </div>

        {/* Plan de Acción (3 Secciones Colapsables) */}
        <div className="w-full max-w-[800px] flex flex-col">
          {/* Sección 1: Gestión de ahorro voluntario */}
          <div className="px-4 py-8 bg-neutral-50 rounded-t-2xl flex flex-col gap-6">
            <div className="px-2 lg:px-6 flex flex-col gap-4">
              <button
                onClick={() => toggleSection('voluntarySavings')}
                className="w-full flex items-center gap-2 text-left hover:opacity-80 transition-opacity"
              >
                <h3 className="flex-1 text-black text-xl lg:text-2xl font-bold leading-6">
                  Gestión de ahorro voluntario
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[#4C4C4C] text-lg">
                    {expandedSections.voluntarySavings ? '▼' : '▶'}
                  </span>
                  <span className="text-[#4C4C4C] text-base font-normal leading-4 hidden lg:inline">
                    {expandedSections.voluntarySavings ? 'Mostrar menos' : 'Mostrar más'}
                  </span>
                </div>
              </button>

              {expandedSections.voluntarySavings && (
                <div className="flex flex-col gap-3">
                  {data.actionPlan?.voluntarySavings?.items?.map((item, idx) => (
                    <div key={idx} className="p-4 bg-neutral-100 rounded-2xl flex gap-4 lg:gap-6">
                      <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-base font-bold">{idx + 1}</span>
                      </div>
                      <p className="flex-1 text-neutral-600 text-sm lg:text-base leading-5">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sección 2: Reducción de deudas */}
          <div className="px-4 py-8 bg-neutral-50 border-t border-b border-zinc-300">
            <button
              onClick={() => toggleSection('debtReduction')}
              className="w-full px-2 lg:px-6 flex items-center gap-2 text-left hover:opacity-80 transition-opacity"
            >
              <h3 className="flex-1 text-black text-xl lg:text-2xl font-bold leading-6">
                Reducción de deudas
              </h3>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[#4C4C4C] text-lg">
                  {expandedSections.debtReduction ? '▼' : '▶'}
                </span>
                <span className="text-[#4C4C4C] text-base font-normal leading-4 hidden lg:inline">
                  {expandedSections.debtReduction ? 'Mostrar menos' : 'Mostrar más'}
                </span>
              </div>
            </button>

            {expandedSections.debtReduction && (
              <div className="mt-4 px-2 lg:px-6 flex flex-col gap-3">
                {data.actionPlan?.debtReduction?.items?.map((item, idx) => (
                  <div key={idx} className="p-4 bg-neutral-100 rounded-2xl flex gap-4 lg:gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-bold">{idx + 1}</span>
                    </div>
                    <p className="flex-1 text-neutral-600 text-sm lg:text-base leading-5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sección 3: Preparación para pensión obligatoria */}
          <div className="px-4 py-8 bg-neutral-50 border-t border-zinc-300 rounded-b-2xl lg:rounded-none">
            <button
              onClick={() => toggleSection('retirementPreparation')}
              className="w-full px-2 lg:px-6 flex items-center gap-2 text-left hover:opacity-80 transition-opacity"
            >
              <h3 className="flex-1 text-black text-xl lg:text-2xl font-bold leading-6">
                Preparación para pensión obligatoria
              </h3>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[#4C4C4C] text-lg">
                  {expandedSections.retirementPreparation ? '▼' : '▶'}
                </span>
                <span className="text-[#4C4C4C] text-base font-normal leading-4 hidden lg:inline">
                  {expandedSections.retirementPreparation ? 'Mostrar menos' : 'Mostrar más'}
                </span>
              </div>
            </button>

            {expandedSections.retirementPreparation && (
              <div className="mt-4 px-2 lg:px-6 flex flex-col gap-3">
                {data.actionPlan?.retirementPreparation?.items?.map((item, idx) => (
                  <div key={idx} className="p-4 bg-neutral-100 rounded-2xl flex gap-4 lg:gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-bold">{idx + 1}</span>
                    </div>
                    <p className="flex-1 text-neutral-600 text-sm lg:text-base leading-5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="w-full max-w-[800px] pt-6 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 lg:gap-6">
            {/* Compartir */}
            <button
              onClick={onShare}
              className="px-6 py-4 rounded-3xl border-2 border-orange-400 text-orange-400 text-base font-bold leading-5 flex items-center justify-center gap-2.5 hover:bg-orange-50 transition-colors"
            >
              <span>Compartir</span>
              <span className="text-xl">📤</span>
            </button>

            {/* Descargar */}
            <button
              onClick={onDownload}
              className="px-6 py-4 rounded-3xl border-2 border-orange-400 text-orange-400 text-base font-bold leading-5 flex items-center justify-center gap-2.5 hover:bg-orange-50 transition-colors"
            >
              <span>Descargar planificación</span>
              <span className="text-xl">📥</span>
            </button>

            {/* Imprimir */}
            <button
              onClick={onPrint}
              className="px-6 py-4 rounded-3xl border-2 border-[#FF7933] text-[#FF7933] text-base font-bold leading-5 flex items-center justify-center gap-2.5 hover:bg-orange-50 transition-colors"
            >
              <span>Imprimir planificación</span>
              <span className="text-xl">🖨️</span>
            </button>
          </div>
        </div>

        {/* Texto Final */}
        <p className="text-center text-black text-lg lg:text-2xl leading-6 lg:leading-7 max-w-[800px]">
          Listo: te enviamos por correo la evaluación, tu{' '}
          <span className="font-bold">Proyección Avanzada y tus recomendaciones.</span>
        </p>

        {/* Botón Reset */}
        <div className="pt-4">
          <button
            onClick={onReset}
            className="px-6 py-3 rounded-3xl border-2 border-red-500 text-red-500 text-sm lg:text-base font-bold leading-4 hover:bg-red-50 transition-colors"
          >
            <span>↻ Reiniciar Simulador</span>
          </button>
        </div>

        {/* Logos Siembra + Alcanza */}
        <div className="py-6 flex items-center justify-center gap-2.5">
          <img
            src="/Siembra/img/logo-siembra.png"
            alt="AFP Siembra"
            className="w-24 h-12 lg:w-32 lg:h-16 object-contain"
          />
          <div className="w-10 h-px rotate-90 border-t-2 border-gray-200" />
          <img
            src="/Siembra/img/logo-alcanza.png"
            alt="Alcanza"
            className="w-32 h-10 lg:w-44 lg:h-14 object-contain"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
