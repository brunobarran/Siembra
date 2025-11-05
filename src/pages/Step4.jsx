import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'
import { calculateAdvancedPension, generateComparisonChart } from '../data/mockData'

export default function Step4({ data, onNext }) {
  // Estado de parámetros avanzados
  const [advancedParams, setAdvancedParams] = useState({
    advancedRetirementAge: data.retirementAge || 65,
    advancedVoluntaryContribution: data.voluntaryContributions || 0,
    annualSalaryIncrease: 5, // % por defecto
    annualExtraordinaryContribution: 0
  })

  // Calcular proyección avanzada automáticamente
  const advancedPensionData = calculateAdvancedPension(data, advancedParams)
  const comparisonChartData = generateComparisonChart(data, advancedParams)

  const {
    projectedPension,
    difference,
    differenceIsPositive,
    score,
    message,
    description,
    totalSavingsAtRetirement
  } = advancedPensionData

  // Handlers para campos con +/-
  const handleRetirementAgeChange = (delta) => {
    setAdvancedParams(prev => ({
      ...prev,
      advancedRetirementAge: Math.max(data.age + 1, Math.min(100, prev.advancedRetirementAge + delta))
    }))
  }

  const handleSalaryIncreaseChange = (delta) => {
    setAdvancedParams(prev => ({
      ...prev,
      annualSalaryIncrease: Math.max(0, Math.min(20, prev.annualSalaryIncrease + delta))
    }))
  }

  const handleFieldChange = (field, value) => {
    setAdvancedParams(prev => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const handleFinish = () => {
    onNext({ ...data, ...advancedParams, advancedPensionData })
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header userName={data.name || 'Usuario'} userDocument={data.documentId || '---'} />

      <div className="flex-1 px-4 lg:px-24 py-10 lg:py-14 bg-white flex flex-col items-center gap-2.5">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress Bar */}
          <div className="hidden lg:block">
            <ProgressBar currentStep={4} />
          </div>

          {/* Mobile Progress Badge */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="px-4 py-2 bg-[#FF7933] rounded-full">
              <span className="text-white text-sm font-bold">Paso 4 de 4 (100%)</span>
            </div>
          </div>

          {/* Título y Descripción */}
          <div className="rounded-2xl flex flex-col gap-6">
            <div className="pt-8 pb-4 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#4C4C4C] text-xl lg:text-2xl leading-6">
                    <span className="font-bold">Toma el Control: </span>
                    <span className="font-normal">Tu Proyección de Pensión Avanzada</span>
                  </h1>
                  <p className="text-black text-base leading-8">
                    <span>Tu proyección base es tu punto de partida. Utiliza el </span>
                    <span className="font-bold">Simulador Avanzado </span>
                    <span>y toma el control de tu futuro.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner con Imagen de Fondo y Gradiente */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-40 lg:h-56 relative rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: 'url(/Siembra/img/login-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse 1764.18% 941.76% at 0% 0%, rgba(0, 94, 184, 0.40) 27%, rgba(140, 0, 117, 0.40) 92%)'
                }}
              />
              {/* Text Content - Positioned Absolutely */}
              <div className="absolute inset-0 flex flex-col justify-center lg:justify-center lg:left-[30%] lg:top-1/2 lg:transform lg:-translate-y-1/2 px-6 lg:px-0">
                <h2 className="text-white text-3xl lg:text-4xl leading-9" style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                  <span className="font-bold">Simulador avanzado</span>
                  <span className="font-normal"> de pensión</span>
                </h2>
              </div>
            </div>
            <p className="text-black text-base leading-8">
              <span>Llena los campos y descubre al instante tu </span>
              <span className="font-bold">Proyección Avanzada.</span>
            </p>

            {/* Formulario: Fila 1 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Edad de retiro (+/-) */}
              <div className="w-full lg:w-96 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1">
                  <span className="text-[#4C4C4C] text-base">Edad de retiro</span>
                  <span className="text-red-600">*</span>
                  <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                </label>
                <div className="p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleRetirementAgeChange(-1)}
                    className="text-neutral-500 opacity-40 hover:opacity-100 transition-opacity"
                  >
                    −
                  </button>
                  <div className="w-px h-6 border-l border-gray-200" />
                  <div className="flex-1 text-center text-black text-sm">
                    {advancedParams.advancedRetirementAge} Años
                  </div>
                  <div className="w-px h-6 border-l border-gray-200" />
                  <button
                    type="button"
                    onClick={() => handleRetirementAgeChange(1)}
                    className="text-[#4C4C4C] hover:text-[#FF7933] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Aporte voluntario mensual */}
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1">
                  <span className="text-[#4C4C4C] text-base">Aporte voluntario mensual</span>
                  <span className="text-red-600">*</span>
                  <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                </label>
                <input
                  type="number"
                  value={advancedParams.advancedVoluntaryContribution || ''}
                  onChange={(e) => handleFieldChange('advancedVoluntaryContribution', e.target.value)}
                  placeholder="RD$"
                  className="p-4 bg-white rounded-lg border border-gray-200 text-sm"
                />
              </div>
            </div>

            {/* Formulario: Fila 2 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Incremento salarial anual (+/-) */}
              <div className="w-full lg:w-96 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1">
                  <span className="text-[#4C4C4C] text-base">Incremento salarial anual</span>
                  <span className="text-red-600">*</span>
                  <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                </label>
                <div className="p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleSalaryIncreaseChange(-1)}
                    className="text-neutral-500 opacity-40 hover:opacity-100 transition-opacity"
                  >
                    −
                  </button>
                  <div className="w-px h-6 border-l border-gray-200" />
                  <div className="flex-1 text-center text-black text-sm">
                    {advancedParams.annualSalaryIncrease}%
                  </div>
                  <div className="w-px h-6 border-l border-gray-200" />
                  <button
                    type="button"
                    onClick={() => handleSalaryIncreaseChange(1)}
                    className="text-[#4C4C4C] hover:text-[#FF7933] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Aporte extraordinario anual */}
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1">
                  <span className="text-[#4C4C4C] text-base">Aporte extraordinario anual</span>
                  <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                </label>
                <input
                  type="number"
                  value={advancedParams.annualExtraordinaryContribution || ''}
                  onChange={(e) => handleFieldChange('annualExtraordinaryContribution', e.target.value)}
                  placeholder="Ingresa el monto en pesos RD$"
                  className="p-4 bg-white rounded-lg border border-gray-200 text-sm placeholder:text-[#4C4C4C]"
                />
              </div>
            </div>

            {/* Gauge + Mensaje */}
            <div className="rounded-2xl flex flex-col gap-6">
              <div className="px-6 lg:px-12 py-6 bg-stone-50 rounded-lg flex flex-col lg:flex-row items-center gap-8">
                {/* Gauge con imagen de fondo */}
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
                      <g transform={`rotate(${(score / 10) * 180 - 90} 120 120)`}>
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

                  <div className="w-full flex justify-between px-2 text-xs lg:text-sm">
                    <span className="text-black font-normal">0</span>
                    <span className="text-black font-normal">10</span>
                  </div>
                </div>

                {/* Mensaje Positivo */}
                <div className="flex-1 flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
                  <span className="text-black text-sm lg:text-base">Resultado:</span>
                  <span className="text-black text-xl lg:text-2xl font-bold">{message}</span>
                  <p className="text-black text-sm lg:text-base leading-5 lg:leading-6">{description}</p>
                </div>
              </div>

              {/* 3 Tarjetas VERDES */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Pensión Deseada */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-center text-black text-base">Tu Pensión Deseada</span>
                  </div>
                  <div className="border-t border-black/10 my-2" />
                  <span className="text-center text-black text-xl font-black">
                    {formatCurrency(data.desiredPension)}
                  </span>
                </div>

                {/* Pensión Proyectada (AVANZADA) */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-center text-black text-base">Tu Pensión Proyectada</span>
                  </div>
                  <div className="border-t border-black/10 my-2" />
                  <span className="text-center text-black text-xl font-black">
                    {formatCurrency(projectedPension)}
                  </span>
                </div>

                {/* Diferencia A FAVOR */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-center text-black text-base">
                      {differenceIsPositive ? 'Diferencia a favor' : 'Diferencia a cubrir'}
                    </span>
                  </div>
                  <div className="border-t border-black/10 my-2" />
                  <span className="text-center text-black text-xl font-black">
                    {formatCurrency(difference)}
                  </span>
                </div>
              </div>
            </div>

            {/* Separador: Gráfico Comparativo */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-10">
                <span className="text-[#949494] font-bold text-sm lg:text-base">Proyección de tus ahorros hasta el retiro</span>
                <div className="flex-1 h-0 border-t-2 border-gray-200" />
              </div>
              <p className="text-black text-sm lg:text-base">
                Este gráfico compara tu Proyección de Pensión Base, lo que podrías obtener sin cambios y tu Proyección de Pensión Avanzada, lo que podrías lograr al aplicar los cambios que acabas de simular.
              </p>
            </div>

            {/* Gráfico Recharts: 2 Áreas */}
            {comparisonChartData.length > 0 ? (
              <div className="w-full h-64 lg:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={comparisonChartData}>
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
                    {/* Área Base (naranja) */}
                    <Area
                      type="monotone"
                      dataKey="baseSavings"
                      name="Proyección Base"
                      stroke="#FF7933"
                      strokeWidth={3}
                      fill="#FFE5D9"
                      fillOpacity={0.7}
                    />
                    {/* Área Avanzada (azul) */}
                    <Area
                      type="monotone"
                      dataKey="advancedSavings"
                      name="Proyección Avanzada"
                      stroke="#1488D6"
                      strokeWidth={3}
                      fill="#ADD8E6"
                      fillOpacity={0.7}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="w-full h-64 lg:h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">No hay datos suficientes para mostrar el gráfico.</p>
              </div>
            )}

            {/* Leyendas: 2 Tarjetas */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Leyenda Base */}
              <div className="flex-1 p-4 bg-gray-50 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-[#FF7933] rounded-full" />
                  <span className="text-black text-base">Proyección de pensión base</span>
                  <span className="text-black opacity-60">ℹ️</span>
                </div>
                <div className="border-t border-black/10 my-2" />
                <span className="text-black text-xl font-black">
                  {formatCurrency(data.projectedPension || 0)}
                </span>
              </div>

              {/* Leyenda Avanzada (con diferencia verde) */}
              <div className="flex-1 p-4 bg-gray-50 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-[#1488D6] rounded-full" />
                  <span className="text-black text-base">Proyección de pensión avanzada</span>
                  <span className="text-black opacity-60">ℹ️</span>
                </div>
                <div className="border-t border-black/10 my-2" />
                <div className="flex items-center gap-4">
                  <span className="text-black text-xl font-black">
                    {formatCurrency(totalSavingsAtRetirement)}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-green-700 text-base">▲</span>
                    <span className="text-green-700 text-xs">
                      {formatCurrency(totalSavingsAtRetirement - (data.projectedPension || 0))} Diferencia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón Único: "Finalizar" */}
          <div className="py-4 flex justify-end">
            <button
              onClick={handleFinish}
              className="px-6 py-4 bg-orange-400 text-white text-base font-bold rounded-3xl
                hover:bg-orange-500 transition-colors whitespace-nowrap"
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <ChatBubble />
    </div>
  )
}
