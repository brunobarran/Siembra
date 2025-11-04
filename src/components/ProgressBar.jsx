export default function ProgressBar({ currentStep }) {
  const steps = [1, 2, 3, 4]
  const progressPercentage = (currentStep / steps.length) * 100

  return (
    <div className="relative w-full max-w-[800px] h-[75px] pb-[60px]">
      {/* Línea de fondo gris */}
      <div
        className="absolute top-[22px] left-0 h-0 border-t-[6px] border-[#E4E6EE]"
        style={{ width: '770px' }}
      />

      {/* Línea de progreso naranja */}
      <div
        className="absolute top-[22px] left-0 h-0 border-t-[6px] border-[#FF7933]"
        style={{ width: `${(currentStep - 1) * 256 + 166}px` }}
      />

      {/* Círculos de pasos */}
      {steps.map((step, index) => {
        const isCurrent = step === currentStep
        const isCompleted = step < currentStep
        const position = index * 256 - 10

        return (
          <div
            key={step}
            className="absolute flex flex-col items-center"
            style={{ left: `${position}px`, top: '-7.5px' }}
          >
            {/* Círculo */}
            <div className="relative w-10 h-[52px]">
              {/* Círculo exterior naranja */}
              <div className="absolute w-10 h-10 top-[6px] bg-[#FF7933] rounded-full" />
              {/* Círculo medio blanco */}
              <div className="absolute w-7 h-7 top-[12px] left-[6px] bg-white rounded-full" />
              {/* Círculo interior (solo si es actual) */}
              {isCurrent && (
                <div className="absolute w-[22px] h-[22px] top-[15px] left-[9px] bg-[#FDB216] rounded-full" />
              )}
            </div>

            {/* Badge de porcentaje (solo en paso actual) */}
            {isCurrent && (
              <div className="px-4 py-2 bg-[#FF7933] rounded-full mt-1">
                <span className="text-white text-[13px] font-bold leading-[13px]">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
