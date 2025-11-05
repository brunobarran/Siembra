import { useState } from 'react'
import { useLocalStorage, clearWizardData } from './hooks/useLocalStorage'
import Login from './pages/Login'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import Step6Result from './pages/Step6Result'
import AIPhotoModal from './components/AIPhotoModal'
import { getDefaultUserData, generateActionPlan } from './data/mockData'

export default function App() {
  // ✅ PERSISTENCIA: localStorage con recuperación automática
  const [step, setStep] = useLocalStorage('siembra-wizard-step', 0)
  const [userData, setUserData] = useLocalStorage(
    'siembra-wizard-data',
    getDefaultUserData()
  )
  const [showAIModal, setShowAIModal] = useState(false)

  const handleNextStep = (newData) => {
    // ✅ PERSISTENCIA: Guardar con metadata
    setUserData(prev => ({
      ...prev,
      ...newData,
      completedSteps: [...new Set([...prev.completedSteps, step])],
      lastUpdated: new Date().toISOString()
    }))

    // Mostrar modal IA después de Step4 (opcional)
    if (step === 4) {
      setShowAIModal(true)
    }

    setStep(step + 1)
  }

  const handleBackStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  // ✅ NUEVO: Handler para reset del wizard
  const handleReset = () => {
    if (window.confirm('¿Estás seguro de que quieres reiniciar el simulador?')) {
      clearWizardData()
      setStep(0)
      setUserData(getDefaultUserData())
      window.location.reload() // Fuerza recarga limpia
    }
  }

  const handleUploadPhoto = async (file) => {
    // Mock: simulamos upload exitoso
    console.log('Uploading file:', file.name)

    // Convertir archivo a data URL para guardar en userData
    const reader = new FileReader()
    reader.onload = (e) => {
      const photoDataUrl = e.target.result

      // ✅ PERSISTENCIA: Guardar en userData
      setUserData(prev => ({
        ...prev,
        userPhoto: photoDataUrl,
        hasAIPhoto: true,
        lastUpdated: new Date().toISOString()
      }))

      // ✅ PERSISTENCIA: Guardar separado en localStorage (por tamaño)
      window.localStorage.setItem('siembra-user-photo', photoDataUrl)

      setShowAIModal(false)
    }
    reader.onerror = () => {
      console.error('Error reading file')
      alert('Error al cargar la imagen. Por favor, intenta de nuevo.')
    }
    reader.readAsDataURL(file)

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Upload successful!')
  }

  const handleShare = () => {
    // Implementar Web Share API
    if (navigator.share) {
      navigator.share({
        title: 'Mi Plan de Pensiones - AFP Siembra',
        text: `¡Obtuve un score de ${userData.score}/10 en mi planificación de retiro!`,
        url: window.location.href
      })
    } else {
      alert('Compartir no disponible en este navegador')
    }
  }

  const handleDownload = () => {
    // Implementar descarga de PDF (usar jsPDF o html2canvas)
    console.log('Descargando PDF...')
    alert('Descarga de PDF (por implementar)')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div>
      {/* ✅ BOTÓN DEBUG: Reset wizard (solo en desarrollo) */}
      {import.meta.env.DEV && (
        <button
          onClick={handleReset}
          className="fixed top-4 right-4 z-50 px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset Wizard
        </button>
      )}

      {/* Paso 0: Login */}
      {step === 0 && (
        <Login onNext={handleNextStep} />
      )}

      {/* Paso 1: Información Personal y Laboral */}
      {step === 1 && (
        <Step1 data={userData} onNext={handleNextStep} onBack={handleBackStep} />
      )}

      {/* Paso 2: Información de Ingresos y Gastos */}
      {step === 2 && (
        <Step2 data={userData} onNext={handleNextStep} onBack={handleBackStep} />
      )}

      {/* Paso 3: Proyección de Pensión Base */}
      {step === 3 && (
        <Step3 data={userData} onNext={handleNextStep} />
      )}

      {/* Paso 4: Simulador Avanzado de Pensión */}
      {step === 4 && (
        <Step4 data={userData} onNext={handleNextStep} onBack={handleBackStep} />
      )}

      {/* Modal IA "Yo del Futuro" */}
      <AIPhotoModal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
        onUpload={handleUploadPhoto}
        data={userData}
      />

      {/* Paso 6: Pantalla Final de Resultados */}
      {step === 5 && (
        <Step6Result
          data={{
            ...userData,
            score: userData.advancedPensionData?.score || 5,
            projectedPension: userData.advancedPensionData?.projectedPension || 0,
            difference: userData.advancedPensionData?.difference || 0,
            actionPlan: generateActionPlan(userData, userData.advancedParams || {})
          }}
          onShare={handleShare}
          onDownload={handleDownload}
          onPrint={handlePrint}
        />
      )}

      {/* Placeholder for other steps */}
      {step > 5 && (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              ¡Wizard Completado! 🎉
            </h1>
            <p className="text-gray-600 mb-4">
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
