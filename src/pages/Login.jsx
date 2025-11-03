import { useState } from 'react'
import { calculateAge } from '../data/mockData'

export default function Login({ onNext }) {
  const [formData, setFormData] = useState({
    name: '',
    documentId: '',
    birthDate: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const age = calculateAge(formData.birthDate)
    onNext({ ...formData, age })
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Background Gradient Azul (top-left) */}
      <div
        className="absolute w-[1200px] h-[1200px] lg:w-[1685px] lg:h-[1685px] rounded-full opacity-40"
        style={{
          left: '-600px',
          top: '-600px',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #9EC2FF 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      {/* Background Gradient Coral (bottom-right) */}
      <div
        className="absolute w-[1200px] h-[1200px] lg:w-[1685px] lg:h-[1685px] rounded-full opacity-40"
        style={{
          right: '-600px',
          bottom: '-400px',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #FFB09E 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      {/* Background Image - hidden on mobile */}
      <img
        src="/Siembra/img/login-bg.svg"
        alt="Familia feliz"
        className="hidden lg:block absolute left-0 top-0 w-full h-full object-cover"
      />

      {/* Card Flotante - responsive */}
      <div
        className="
          relative lg:absolute
          mx-4 my-8 lg:mx-0 lg:my-0
          lg:left-[774px] lg:top-[61.5px]
          w-auto lg:w-[566px]
          p-6 lg:p-[42px]
          bg-white rounded-3xl lg:rounded-[24px]
          shadow-lg lg:shadow-login-card
        "
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 13px 24px'
        }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-10">
          {/* Header: Logos */}
          <div className="flex items-center justify-center gap-2.5 py-4 lg:py-6">
            <img
              src="/Siembra/img/login-logo-siembra.svg"
              alt="AFP Siembra"
              className="w-[100px] lg:w-[124px] h-auto"
            />
            <div className="w-10 h-0 rotate-90 border border-[#E4E6EE]" />
            <img
              src="/Siembra/img/login-logo-alcanza.svg"
              alt="Alcanza"
              className="w-[140px] lg:w-[169px] h-auto"
            />
          </div>

          {/* Título */}
          <h1 className="text-[#4C4C4C] text-[28px] lg:text-[40px] leading-tight lg:leading-[40px]">
            <span className="font-black">Bienvenido:</span>
            <span className="font-light tracking-[0.8px]">
              {' '}al simulador para tu retiro
            </span>
          </h1>

          {/* Campos del Formulario */}
          <div className="flex flex-col gap-2">
            {/* Campo: Nombre */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 flex items-center justify-between text-[#4C4C4C] text-base leading-[20.8px]">
                ¿Cuál es tu nombre?
                <span className="text-[#4C4C4C] opacity-60 text-base">ℹ️</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alejandra"
                required
                className="w-full px-4 py-3 lg:py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933] transition-colors"
              />
            </div>

            {/* Campos: Documento + Fecha (fila) */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Campo: Documento */}
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1 text-[#4C4C4C] text-base leading-[20.8px]">
                  Documento de identidad:
                  <span className="text-[#4C4C4C] opacity-60 text-base">ℹ️</span>
                </label>
                <input
                  type="text"
                  name="documentId"
                  value={formData.documentId}
                  onChange={handleChange}
                  placeholder="000-0000000-0"
                  required
                  className="w-full px-4 py-3 lg:py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933] transition-colors"
                />
              </div>

              {/* Campo: Fecha */}
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 text-[#4C4C4C] text-base leading-[20.8px]">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 lg:py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933] transition-colors"
                />
              </div>
            </div>

            {/* Campo: Correo */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C] text-base leading-[20.8px]">
                ¿Cuál es tu correo?
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Introduce tu correo"
                required
                className="w-full px-4 py-3 lg:py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933] transition-colors"
              />
            </div>
          </div>

          {/* Texto Legal */}
          <p className="text-center text-[#4C4C4C] text-sm lg:text-base leading-[18px] lg:leading-[20.8px]">
            Al presionar el botón de{' '}
            <span className="font-bold">"Comenzar mi evaluación ahora"</span>{' '}
            aceptas nuestro{' '}
            <a href="#" className="text-[#FF7933] underline hover:text-[#FF6820] transition-colors">
              términos y condiciones
            </a>{' '}
            de nuestro{' '}
            <span className="font-bold">"Simulador de pensión 360"</span>
          </p>

          {/* Botones */}
          <div className="flex flex-col gap-4">
            {/* Botón Principal */}
            <button
              type="submit"
              className="w-full px-6 py-4 lg:py-6 bg-[#FF7933] text-white text-lg lg:text-xl font-bold leading-5 text-center rounded-full hover:bg-[#FF6820] transition-colors duration-200"
            >
              Comenzar mi evaluación ahora
            </button>

            {/* Link Secundario */}
            <a
              href="#"
              className="w-full px-6 py-2 text-[#015FB8] text-base text-center underline hover:text-[#014A8F] transition-colors"
            >
              Glosario y metodología
            </a>
          </div>
        </form>
      </div>

      {/* Footer - responsive: stack en mobile */}
      <div className="
        absolute bottom-0 left-0 w-full
        px-4 py-6 lg:h-[100px]
        flex flex-col lg:flex-row
        items-center justify-center
        gap-1 lg:gap-2.5
        text-white text-xs lg:text-sm
        leading-tight lg:leading-[18.2px]
        text-center
      ">
        <span>Términos & condiciones</span>
        <span className="hidden lg:inline">•</span>
        <span>© 2025 AFP Siembra</span>
        <span className="hidden lg:inline">•</span>
        <span className="hidden md:inline">Su información está protegida</span>
      </div>

      {/* Chat Bubble - responsive size */}
      <div className="
        fixed
        bottom-4 right-4 lg:bottom-[100px] lg:right-[32px]
        w-[60px] h-[60px] lg:w-[73px] lg:h-[73px]
        bg-[#FDB216] rounded-full
        flex items-center justify-center
        cursor-pointer hover:bg-[#FCA500]
        transition-colors shadow-lg
        z-50
      ">
        <span className="text-white text-lg lg:text-[22px]">💬</span>
      </div>
    </div>
  )
}
