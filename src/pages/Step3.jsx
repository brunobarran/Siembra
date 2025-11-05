import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Footer from '../components/Footer'
import { calculateBasePension, generateSavingsChart } from '../data/mockData'

export default function Step3({ data, onNext }) {
  const [roadmapExpanded, setRoadmapExpanded] = useState(true)

  // Calcular proyección de pensión
  const pensionData = calculateBasePension(data)
  const chartData = generateSavingsChart(data)

  const {
    projectedPension,
    difference,
    score,
    message,
    description,
    totalSavingsAtRetirement
  } = pensionData

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const handleContinue = () => {
    onNext({
      ...data,
      projectedPension,
      pensionScore: score
    })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header userName={data.name || 'Usuario'} userDocument={data.documentId || '---'} />

      {/* Main Content */}
      <div className="flex-1 py-10 lg:py-[60px] px-4 lg:px-[100px] flex flex-col items-center gap-2.5 bg-white">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress Bar */}
          <div className="hidden lg:block">
            <ProgressBar currentStep={3} />
          </div>

          {/* Progress Bar - Mobile */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="px-4 py-2 bg-[#FF7933] rounded-full">
              <span className="text-white text-sm font-bold">
                Paso 3 de 4 (75%)
              </span>
            </div>
          </div>

          {/* Título */}
          <div className="flex flex-col gap-6">
            <h1 className="text-neutral-600 text-2xl lg:text-2xl leading-6">
              <span className="font-bold">Hacia donde te diriges: </span>
              <span className="font-normal">Tu Proyección de pensión base</span>
            </h1>

            {/* 3 Tarjetas: Deseada / Proyectada / Diferencia */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Tu Pensión Deseada */}
              <div className="flex-1 p-4 bg-zinc-100 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-black text-base font-normal">Tu Pensión Deseada</span>
                  <span className="text-black opacity-40 text-base">ℹ️</span>
                </div>
                <div className="border-t border-black/10 my-2" />
                <span className="text-black text-xl font-black">
                  {formatCurrency(data.desiredPension)}
                </span>
              </div>

              {/* Tu Pensión Proyectada */}
              <div className="flex-1 p-4 bg-zinc-100 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-black text-base font-normal">Tu Pensión Proyectada</span>
                  <span className="text-black opacity-40 text-base">ℹ️</span>
                </div>
                <div className="border-t border-black/10 my-2" />
                <span className="text-black text-xl font-black">
                  {formatCurrency(projectedPension)}
                </span>
              </div>

              {/* Diferencia a cubrir */}
              <div className="flex-1 p-4 bg-rose-100 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-black text-base font-normal">Diferencia a cubrir</span>
                  <span className="text-black opacity-40 text-base">ℹ️</span>
                </div>
                <div className="border-t border-green-950/10 my-2" />
                <span className="text-black text-xl font-black">
                  {formatCurrency(difference)}
                </span>
              </div>
            </div>

            {/* Gauge + Mensaje */}
            <div className="px-6 lg:px-12 py-6 bg-stone-50 rounded-lg flex flex-col lg:flex-row items-center gap-8">
              {/* Gauge con imagen de fondo */}
              <div className="w-48 lg:w-60 flex flex-col items-center gap-4">
                {/* Contenedor del gauge */}
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
                    {/* Aguja indicadora dinámica - rotación: -1 * (180 * score/10) */}
                    <g transform={`rotate(${(score / 10) * 180 - 90} 120 120)`}>
                      {/* Línea redondeada de la aguja - más corta y gruesa */}
                      <line
                        x1="120"
                        y1="120"
                        x2="120"
                        y2="50"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      {/* Círculo central */}
                      <circle cx="120" cy="120" r="4" fill="black" />
                    </g>
                  </svg>
                </div>

                {/* Etiquetas 0 y 10 */}
                <div className="w-full flex justify-between px-2 text-xs lg:text-sm">
                  <span className="text-black font-normal">0</span>
                  <span className="text-black font-normal">10</span>
                </div>
              </div>

              {/* Mensaje de Resultado */}
              <div className="flex-1 flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
                <span className="text-black text-sm lg:text-base">Resultado:</span>
                <span className="text-black text-xl lg:text-2xl font-bold">{message}</span>
                <p className="text-black text-sm lg:text-base leading-5 lg:leading-6">{description}</p>
              </div>
            </div>
          </div>

          {/* Separador: Gráfico */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-10">
              <span className="text-[#949494] font-bold text-sm lg:text-base">Proyección de tus ahorros hasta el retiro</span>
              <div className="flex-1 h-0 border-t-2 border-gray-200" />
            </div>
            <p className="text-black text-sm lg:text-base">
              Este gráfico muestra el crecimiento estimado de tus ahorros a lo largo del tiempo hasta que alcances la edad de retiro.
            </p>
          </div>

          {/* Gráfico Recharts */}
          {chartData.length > 0 ? (
            <div className="w-full h-64 lg:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                  <XAxis
                    dataKey="age"
                    label={{ value: 'Edad', position: 'insideBottom', offset: -5 }}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    label={{ value: 'Ahorros (RD$)', angle: -90, position: 'insideLeft', offset: 10 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value) => formatCurrency(value)}
                    labelFormatter={(label) => `Edad: ${label}`}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#FF7933"
                    strokeWidth={3}
                    fill="#FFE5D9"
                    fillOpacity={0.7}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">No hay datos suficientes para mostrar el gráfico.</p>
            </div>
          )}

          {/* Leyenda del Gráfico */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 p-4 bg-gray-50 rounded-lg flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-2 bg-[#FF7933] rounded-full" />
                <span className="text-black text-base font-normal">Proyección de pensión base</span>
                <span className="text-black opacity-60 text-base">ℹ️</span>
              </div>
              <div className="border-t border-black/10 my-2" />
              <span className="text-black text-xl font-black">
                {formatCurrency(totalSavingsAtRetirement)}
              </span>
            </div>
          </div>

          {/* Hoja de Ruta (expandible) */}
          <div className="flex flex-col gap-4">
            <div
              className="py-4 flex items-center gap-4 cursor-pointer"
              onClick={() => setRoadmapExpanded(!roadmapExpanded)}
            >
              <div className="flex-1">
                <span className="text-black text-xl lg:text-2xl font-bold">Tu Hoja de Ruta: </span>
                <span className="text-black text-xl lg:text-2xl font-normal">Vías para Mejorar tu Pensión</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[#949494] text-base">{roadmapExpanded ? '▼' : '▶'}</span>
                <span className="text-[#949494] text-xs lg:text-base">
                  {roadmapExpanded ? 'Mostrar menos detalles' : 'Mostrar más detalles'}
                </span>
              </div>
            </div>

            {roadmapExpanded && (
              <>
                <p className="text-black text-sm lg:text-base leading-5 lg:leading-5">
                  <span className="font-bold">¡Es momento de optimizar! </span>
                  <span>Debes tomar el control para llegar a tu pensión deseada, pero no te preocupes, esto tiene solución. Aplica estas vías de acción en el </span>
                  <span className="font-bold">Simulador avanzado de Pensión</span>
                  <span> y visualiza como mejora tu proyección para el futuro.</span>
                </p>

                {/* 3 Recomendaciones */}
                <div className="flex flex-col gap-6">
                  {/* Recomendación 1 */}
                  <div className="p-4 bg-neutral-100 rounded-2xl flex items-start gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-black">1</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#4C4C4C] text-base font-bold">Ahorro Voluntario: </span>
                      <span className="text-[#4C4C4C] text-sm lg:text-base">
                        Es clave destinar un monto mensual adicional a tu fondo. Esta es la forma más efectiva de disminuir la diferencia a cubrir y acercarte a tu pensión deseada.
                      </span>
                    </div>
                  </div>

                  {/* Recomendación 2 */}
                  <div className="p-4 bg-neutral-100 rounded-2xl flex items-start gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-black">2</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#4C4C4C] text-base font-bold">Impulsa tu Fondo! </span>
                      <span className="text-[#4C4C4C] text-sm lg:text-base">
                        Evalúa la posibilidad de hacer un aporte extraordinario (ej. un bono o regalía) una vez al año. Es una inyección de capital que puede acelerar drásticamente tu camino hacia tu pensión deseada.
                      </span>
                    </div>
                  </div>

                  {/* Recomendación 3 */}
                  <div className="p-4 bg-neutral-100 rounded-2xl flex items-start gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-black">3</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#4C4C4C] text-base font-bold">Estrategia de Retiro: </span>
                      <span className="text-[#4C4C4C] text-sm lg:text-base">
                        Analiza si posponer tu retiro 2 o 3 años es una opción viable. Verás en el simulador cómo el tiempo extra de aportes puede cambiar radicalmente tu proyección.
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Botón Único */}
          <div className="py-4 flex justify-end">
            <button
              onClick={handleContinue}
              className="px-6 py-4 bg-orange-400 text-white text-base font-bold rounded-3xl
                hover:bg-orange-500 transition-colors whitespace-nowrap"
            >
              Ir al Simulador y mejorar mi proyección
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
