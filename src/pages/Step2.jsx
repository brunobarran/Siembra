import { useState } from 'react'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'

export default function Step2({ data, onNext, onBack }) {
  const [formData, setFormData] = useState({
    monthlySalary: data.monthlySalary || 100000,
    otherIncome: data.otherIncome || 0,
    housingType: data.housingType || 'rent',
    housingExpense: data.housingExpense || 50000,
    householdExpense: data.householdExpense || 20000,
    educationExpense: data.educationExpense || 0,
    debtPayment: data.debtPayment || 20000,
    entertainment: data.entertainment || 0,
    emergencies: data.emergencies || 0,
    afpName: data.afpName || 'AFP Siembra',
    afpBalance: data.afpBalance || 0,
    desiredPension: data.desiredPension || 80000,
    voluntaryContributions: data.voluntaryContributions || 0,
  })

  const [expandedIncome, setExpandedIncome] = useState(true)
  const [expandedExpenses, setExpandedExpenses] = useState(true)

  const handleChange = (field, value) => {
    const numValue = field.includes('Type') ? value : Number(value) || 0
    setFormData(prev => ({ ...prev, [field]: numValue }))
  }

  const totalIncome = formData.monthlySalary + formData.otherIncome
  const totalExpenses =
    formData.housingExpense +
    formData.householdExpense +
    formData.educationExpense +
    formData.debtPayment +
    formData.entertainment +
    formData.emergencies

  const savingsCapacity = totalIncome - totalExpenses
  const savingsPercentage = totalIncome > 0 ? Math.round((savingsCapacity / totalIncome) * 100) : 0

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.monthlySalary || !formData.afpBalance || !formData.desiredPension) {
      alert('Por favor complete todos los campos obligatorios (*).')
      return
    }

    onNext({
      ...data,
      ...formData,
    })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header userName={data.name || 'Usuario'} userDocument={data.documentId || '---'} />

      {/* Main Content */}
      <div className="flex-1 py-10 lg:py-[60px] px-4 lg:px-[100px] flex flex-col items-center gap-2.5 bg-white">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress Bar - Full version on desktop */}
          <div className="hidden lg:block">
            <ProgressBar currentStep={2} />
          </div>

          {/* Progress Bar - Simple version on mobile */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="px-4 py-2 bg-[#FF7933] rounded-full">
              <span className="text-white text-sm font-bold">
                Paso 2 de 4 (50%)
              </span>
            </div>
          </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
          {/* Título */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-neutral-600">
              <span className="font-black">Información:</span> Ingresos y gastos
            </h1>
            <p className="text-sm text-neutral-600">
              Todos los campos marcados con (<span className="font-bold text-red-600">*</span>) son
              obligatorios
            </p>
          </div>

          {/* Sección de Ingresos */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-neutral-600 text-base font-normal mb-2">
                ¿Cuál es tu salario mensual?
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="number"
                value={formData.monthlySalary}
                onChange={(e) => handleChange('monthlySalary', e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="RD$"
                required
              />
            </div>
            <div className="w-96">
              <label className="block text-neutral-600 text-base font-normal mb-2">
                ¿Tienes otros ingresos?
              </label>
              <input
                type="number"
                value={formData.otherIncome || ''}
                onChange={(e) => handleChange('otherIncome', e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="RD$"
              />
            </div>
          </div>

          {/* Resumen de Ingresos */}
          <div className="p-8 bg-neutral-50 rounded-2xl">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setExpandedIncome(!expandedIncome)}
            >
              <h2 className="text-2xl font-bold text-black">Resumen de ingresos</h2>
              <button
                type="button"
                className="text-neutral-600 hover:text-black"
              >
                {expandedIncome ? '↑ Mostrar menos detalles' : '↓ Mostrar más detalles'}
              </button>
            </div>

            {expandedIncome && (
              <div className="mt-4 space-y-3 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Salario mensual</span>
                  <span className="font-bold text-black">{formatCurrency(formData.monthlySalary)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Otros ingresos</span>
                  <span className="font-bold text-black">{formatCurrency(formData.otherIncome)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-black font-bold">Resumen de ingresos totales</span>
                  <span className="text-xl font-bold text-zinc-800">
                    {formatCurrency(totalIncome)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Sección de Gastos */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-10 mb-4">
                <h3 className="text-neutral-400 font-bold">Gastos Mensuales</h3>
                <div className="flex-1 h-0 border-t-2 border-gray-200"></div>
              </div>
              <p className="text-sm text-black mb-4">
                Completa los campos con el valor aproximado que gastas al mes en cada categoría.
              </p>
            </div>

            {/* Tipo de Vivienda */}
            <div className="p-4 bg-neutral-50 rounded-lg">
              <label className="block text-base font-normal text-black mb-3">Tipo de Vivienda</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="housingType"
                    value="rent"
                    checked={formData.housingType === 'rent'}
                    onChange={(e) => handleChange('housingType', e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-neutral-600">Alquilada</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="housingType"
                    value="own"
                    checked={formData.housingType === 'own'}
                    onChange={(e) => handleChange('housingType', e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-neutral-600">Propia</span>
                </label>
              </div>
            </div>

            {/* Campos de Gastos */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">Vivienda</label>
                <input
                  type="number"
                  value={formData.housingExpense}
                  onChange={(e) => handleChange('housingExpense', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="RD$"
                />
              </div>
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">
                  Gastos de hogar
                </label>
                <input
                  type="number"
                  value={formData.householdExpense}
                  onChange={(e) => handleChange('householdExpense', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="RD$"
                />
              </div>
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">Educación</label>
                <input
                  type="number"
                  value={formData.educationExpense || ''}
                  onChange={(e) => handleChange('educationExpense', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="RD$"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">Pago deuda</label>
                <input
                  type="number"
                  value={formData.debtPayment}
                  onChange={(e) => handleChange('debtPayment', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="RD$"
                />
                <p className="text-xs text-neutral-400 mt-2">
                  Incluya solo los pagos mensuales de deudas: tarjetas, préstamos u otros
                </p>
              </div>
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">
                  Entretenimiento
                </label>
                <input
                  type="number"
                  value={formData.entertainment || ''}
                  onChange={(e) => handleChange('entertainment', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="RD$"
                />
              </div>
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">Imprevistos</label>
                <input
                  type="number"
                  value={formData.emergencies || ''}
                  onChange={(e) => handleChange('emergencies', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="RD$"
                />
              </div>
            </div>
          </div>

          {/* Resumen de Gastos */}
          <div className="p-4 bg-neutral-50 rounded-2xl">
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => setExpandedExpenses(!expandedExpenses)}
            >
              <h2 className="text-2xl font-bold text-black">Resumen de Gastos</h2>
              <button
                type="button"
                className="text-neutral-600 hover:text-black"
              >
                {expandedExpenses ? '↑ Mostrar menos detalles' : '↓ Mostrar más detalles'}
              </button>
            </div>

            {expandedExpenses && (
              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Vivienda</span>
                  <span className="font-bold text-black">{formatCurrency(formData.housingExpense)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Gastos de hogar</span>
                  <span className="font-bold text-black">
                    {formatCurrency(formData.householdExpense)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Educación</span>
                  <span className="font-bold text-black">{formatCurrency(formData.educationExpense)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Pago deuda mensual</span>
                  <span className="font-bold text-black">{formatCurrency(formData.debtPayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Entretenimiento e imprevistos</span>
                  <span className="font-bold text-black">
                    {formatCurrency(formData.entertainment + formData.emergencies)}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-black font-bold">Total gastos mensuales</span>
                  <span className="text-xl font-bold text-zinc-800">
                    {formatCurrency(totalExpenses)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Tarjetas de Ahorro */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-rose-100 rounded-lg">
              <p className="text-xs text-black mb-2">Capacidad de ahorro</p>
              <p className="text-2xl font-extrabold text-black">
                {savingsCapacity < 0 ? 'Déficit' : formatCurrency(savingsCapacity)}
              </p>
            </div>
            <div className="p-4 bg-rose-100 rounded-lg">
              <p className="text-xs text-black mb-2">Porcentaje de ahorro</p>
              <p className="text-2xl font-extrabold text-black">{savingsPercentage}%</p>
            </div>
          </div>

          {/* Sección AFP */}
          <div>
            <div className="flex items-center gap-10 mb-6">
              <h3 className="text-neutral-400 font-bold">Administradora de Fondos de Pensiones (AFP)</h3>
              <div className="flex-1 h-0 border-t-2 border-gray-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">
                  ¿Cuál es tú AFP?
                </label>
                <input
                  type="text"
                  value={formData.afpName}
                  disabled
                  className="w-full p-4 bg-gray-200 border border-gray-200 rounded-lg text-black cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">
                  ¿Cuál es tu saldo en cuenta?
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="number"
                  value={formData.afpBalance || ''}
                  onChange={(e) => handleChange('afpBalance', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="Ingresa tu monto en pesos"
                />
                <p className="text-xs text-blue-600 mt-2 underline cursor-pointer">
                  ¿No sabes cuál es tu saldo?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">
                  ¿Cuál seria la pensión que deseas a tu edad de retiro?
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="number"
                  value={formData.desiredPension || ''}
                  onChange={(e) => handleChange('desiredPension', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="RD$"
                />
              </div>
              <div>
                <label className="block text-neutral-600 text-base font-normal mb-2">
                  ¿Realizas aportes voluntarios mensuales?
                </label>
                <input
                  type="number"
                  value={formData.voluntaryContributions || ''}
                  onChange={(e) => handleChange('voluntaryContributions', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  placeholder="Ingresa tu monto en pesos"
                />
              </div>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex justify-between items-center gap-6 mt-8">
            <button
              type="button"
              className="px-6 py-4 text-primary font-bold"
            >
              Dejar para después
            </button>
            <div className="flex gap-6">
              <button
                type="button"
                onClick={onBack}
                className="px-6 py-4 border-2 border-primary text-primary font-bold rounded-3xl hover:bg-primary hover:text-white transition"
              >
                Volver
              </button>
              <button
                type="submit"
                className="px-6 py-4 bg-primary text-white font-bold rounded-3xl hover:bg-orange-500 transition"
              >
                Continuar
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>

      <Footer />
      <ChatBubble />
    </div>
  )
}
