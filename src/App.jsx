import { useState } from 'react'

export default function App() {
  const [step, setStep] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Siembra Pension Simulator
        </h1>
        <p className="text-gray-600">
          Fase 0 Setup Completo ✅
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Step: {step}
        </p>
      </div>
    </div>
  )
}
