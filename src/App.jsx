import { useState } from 'react'
import Login from './pages/Login'
import { defaultUserData } from './data/mockData'

export default function App() {
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState(defaultUserData)

  const handleNextStep = (newData) => {
    setUserData({ ...userData, ...newData })
    setStep(step + 1)
  }

  const handleBackStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div>
      {/* Paso 0: Login */}
      {step === 0 && (
        <Login onNext={handleNextStep} />
      )}

      {/* Placeholder for other steps */}
      {step > 0 && (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Paso {step}
            </h1>
            <p className="text-gray-600">
              Datos: {JSON.stringify(userData, null, 2)}
            </p>
            <button
              onClick={handleBackStep}
              className="mt-4 px-4 py-2 bg-secondary text-white rounded"
            >
              Atrás
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
