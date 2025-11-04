import { useState } from 'react'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'
import { calculateAge } from '../data/mockData'

export default function Step1({ data, onNext, onBack }) {
  const [formData, setFormData] = useState({
    age: data.age || calculateAge(data.birthDate),
    retirementAge: data.retirementAge || 65,
    currentlyWorking: data.currentlyWorking ?? true
  })

  const handleIncrement = () => {
    setFormData({ ...formData, retirementAge: Math.min(100, formData.retirementAge + 1) })
  }

  const handleDecrement = () => {
    setFormData({ ...formData, retirementAge: Math.max(formData.age + 1, formData.retirementAge - 1) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext(formData)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header
        userName={data.name || 'Usuario'}
        userDocument={data.documentId || '---'}
      />

      {/* Main Content */}
      <div className="flex-1 py-10 lg:py-[60px] px-4 lg:px-[100px] flex flex-col items-center gap-2.5 bg-white">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress Bar - Full version on desktop */}
          <div className="hidden lg:block">
            <ProgressBar currentStep={1} />
          </div>

          {/* Progress Bar - Simple version on mobile */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="px-4 py-2 bg-[#FF7933] rounded-full">
              <span className="text-white text-sm font-bold">
                Paso 1 de 4 (25%)
              </span>
            </div>
          </div>

          {/* Título */}
          <div className="py-4 flex flex-col gap-2">
            <h1 className="text-[#4C4C4C] text-xl lg:text-2xl leading-6">
              <span className="font-black">Información:</span>
              <span className="font-normal"> Personal y laboral</span>
            </h1>
            <p className="text-[#4C4C4C] text-sm leading-[14px]">
              Todos los campos marcados con (
              <span className="text-[#FF0000] font-bold">*</span>
              ) son obligatorios
            </p>
          </div>

          {/* Separador: Información Personal */}
          <div className="py-4 flex items-center gap-10">
            <span className="text-[#949494] text-base font-bold leading-4">
              Información Personal
            </span>
            <div className="flex-1 h-0 border-t-2 border-[#E4E6EE]" />
          </div>

          {/* Campos: Edad + Edad Retiro */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Campo: Mi edad es (disabled) */}
            <div className="flex-1 flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C] text-base leading-[20.8px]">
                Mi edad es:
              </label>
              <input
                type="text"
                value={formData.age ? `${formData.age} Años` : '-- Años'}
                disabled
                className="w-full px-4 py-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded-lg text-sm text-[#333333] leading-[18.2px] cursor-not-allowed"
              />
            </div>

            {/* Campo: ¿A qué edad deseas retirarte? (+/-) */}
            <div className="flex-1 flex flex-col gap-1">
              <label className="px-2.5 flex items-center gap-1 text-[#4C4C4C] text-base leading-[20.8px]">
                ¿A que edad deseas retirarte?
                <span className="text-[#FF0000]">*</span>
                <span className="text-[#4C4C4C] opacity-60 text-base">ℹ️</span>
              </label>
              <div className="w-full px-4 py-4 bg-white border border-[#E4E6EE] rounded-lg flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-4 text-[#6F6F6F] opacity-40 hover:opacity-100 transition-opacity text-lg font-bold"
                >
                  −
                </button>
                <div className="flex-1 text-center text-[#333333] text-sm leading-[18.2px]">
                  {formData.retirementAge} Años
                </div>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-4 text-[#4C4C4C] hover:text-[#FF7933] transition-colors text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Separador: Información Laboral */}
          <div className="py-4 flex items-center gap-10">
            <span className="text-[#949494] text-base font-bold leading-4">
              Información laboral y profesional
            </span>
            <div className="flex-1 h-0 border-t-2 border-[#E4E6EE]" />
          </div>

          {/* Campo: ¿Laboras actualmente? */}
          <div className="p-4 bg-[#FBFBFB] rounded-lg flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            <span className="flex-1 text-[#333333] text-base leading-4">
              ¿Laboras actualmente?
            </span>
            <div className="flex items-center gap-6">
              {/* Opción: Sí */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="currentlyWorking"
                  checked={formData.currentlyWorking === true}
                  onChange={() => setFormData({ ...formData, currentlyWorking: true })}
                  className="hidden"
                />
                <span className="text-sm text-[#FF7933]">
                  {formData.currentlyWorking ? '✓' : '○'}
                </span>
                <span className="text-[#4C4C4C] text-sm leading-[18.2px]">Si</span>
              </label>

              {/* Opción: No */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="currentlyWorking"
                  checked={formData.currentlyWorking === false}
                  onChange={() => setFormData({ ...formData, currentlyWorking: false })}
                  className="hidden"
                />
                <span className="text-sm text-[#FF7933]">
                  {!formData.currentlyWorking ? '✓' : '○'}
                </span>
                <span className="text-[#4C4C4C] text-sm leading-[18.2px]">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="w-full max-w-[800px] py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Dejar para después */}
          <button
            type="button"
            className="px-6 py-4 text-[#FF7933] text-base font-bold leading-5 hover:bg-[#FFF5F0] rounded-[25px] transition-colors"
          >
            Dejar para después
          </button>

          {/* Volver + Continuar */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
            <button
              type="button"
              onClick={onBack}
              className="w-full lg:w-auto px-6 py-4 border-2 border-[#FF7933] text-[#FF7933] text-base font-bold leading-5 rounded-[25px] hover:bg-[#FFF5F0] transition-colors"
            >
              Volver
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full lg:w-auto px-6 py-4 bg-[#FF7933] text-white text-base font-bold leading-5 rounded-[25px] hover:bg-[#FF6820] transition-colors"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Chat Bubble */}
      <ChatBubble />
    </div>
  )
}
