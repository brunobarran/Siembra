# Plan de Implementación - Mock localStorage Persistence

## Objetivo

Implementar persistencia de datos del wizard usando **localStorage** con enfoque mock para el MVP, permitiendo:

1. **Guardar estado del wizard** al navegar entre pasos
2. **Persistir datos del usuario** al recargar la página
3. **Almacenar foto del usuario** como base64 para AIPhotoModal
4. **Recuperar estado** automáticamente al volver a la app
5. **Reset funcional** para reiniciar el wizard

**Filosofía**: Mock simple y funcional. No backend, no APIs. 100% client-side y compatible con GitHub Pages.

---

## Contexto Técnico

### ¿Por qué localStorage?

| Criterio | localStorage | sessionStorage | IndexedDB | Backend |
|----------|-------------|----------------|-----------|---------|
| **Persistencia** | ✅ Permanente | ❌ Solo sesión | ✅ Permanente | ✅ Permanente |
| **Complejidad** | ⭐ Simple | ⭐ Simple | ⭐⭐⭐ Complejo | ⭐⭐⭐⭐ Muy complejo |
| **GitHub Pages** | ✅ Funciona | ✅ Funciona | ✅ Funciona | ❌ No aplica |
| **Tiempo implementación** | ~1 hora | ~1 hora | ~4 horas | ~2 días |
| **Ideal para MVP** | ✅ Sí | ❌ No persiste | ❌ Overkill | ❌ Fuera de alcance |

**Decisión**: localStorage es la opción óptima para el MVP.

---

## Arquitectura de la Solución

```
┌─────────────────────────────────────────────────────────────┐
│                         App.jsx                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ useLocalStorage('siembra-wizard-step', 0)             │  │
│  │ useLocalStorage('siembra-wizard-data', defaultData)   │  │
│  │ useLocalStorage('siembra-user-photo', null)           │  │
│  └───────────────────────────────────────────────────────┘  │
│                           ▼                                  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │           localStorage Browser API                     │  │
│  │  • siembra-wizard-step: number                        │  │
│  │  • siembra-wizard-data: JSON object                   │  │
│  │  • siembra-user-photo: base64 string                  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  Page Reload / Return                        │
│  → Custom hook lee localStorage automáticamente             │
│  → Restaura step y userData al estado previo                │
│  → Usuario continúa desde donde quedó                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Estructura de Archivos

```
src/
├── hooks/
│   └── useLocalStorage.js        # Custom hook reutilizable
├── data/
│   └── mockData.js               # + Función defaultUserData()
├── components/
│   └── AIPhotoModal.jsx          # Upload → localStorage
├── pages/
│   └── Step6Result.jsx           # Display foto desde localStorage
└── App.jsx                       # Integración principal
```

**Archivos nuevos**: 1 (useLocalStorage.js)
**Archivos modificados**: 3 (App.jsx, AIPhotoModal.jsx, Step6Result.jsx)

---

## 1. Custom Hook: useLocalStorage.js

### Archivo: `src/hooks/useLocalStorage.js`

```javascript
import { useState, useEffect } from 'react'

/**
 * Custom hook para sincronizar estado con localStorage
 * @param {string} key - Clave en localStorage
 * @param {any} initialValue - Valor inicial si no existe en localStorage
 * @returns {[any, Function]} - [value, setValue] como useState
 */
export function useLocalStorage(key, initialValue) {
  // Estado inicial: intenta leer de localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Función para actualizar estado y localStorage
  const setValue = (value) => {
    try {
      // Permite pasar función como en useState
      const valueToStore = value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      // Guardar en localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

/**
 * Función helper para eliminar una clave de localStorage
 * @param {string} key - Clave a eliminar
 */
export function removeLocalStorage(key) {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error)
  }
}

/**
 * Función helper para limpiar todo el localStorage del wizard
 */
export function clearWizardData() {
  try {
    window.localStorage.removeItem('siembra-wizard-step')
    window.localStorage.removeItem('siembra-wizard-data')
    window.localStorage.removeItem('siembra-user-photo')
    console.log('Wizard data cleared from localStorage')
  } catch (error) {
    console.error('Error clearing wizard data:', error)
  }
}
```

**Características**:
- ✅ API idéntica a `useState` (drop-in replacement)
- ✅ Sincronización automática con localStorage
- ✅ Manejo robusto de errores (try-catch)
- ✅ Soporte para funciones actualizadoras `setValue(prev => ...)`
- ✅ Helpers para limpiar datos

---

## 2. Estructura de Datos a Persistir

### En `src/data/mockData.js`

Agregar función para valores por defecto:

```javascript
/**
 * Valores por defecto del usuario
 * Se usa como initialValue en useLocalStorage
 */
export function getDefaultUserData() {
  return {
    // Login (opcional)
    email: '',
    hasAccount: false,

    // Step1: Información Personal y Laboral
    name: '',
    age: null,
    retirementAge: 65,
    civilStatus: '',
    dependents: 0,
    profession: '',
    employmentYears: 0,

    // Step2: Ingresos y Gastos
    monthlySalary: null,
    otherIncome: 0,
    monthlyExpenses: null,
    monthlyDebts: 0,
    currentSavings: 0,

    // Step3: Proyección Base (calculados)
    projectedPension: null,
    score: null,
    deficit: null,

    // Step4: Simulador Avanzado
    voluntaryContribution: 0,
    investmentReturn: 5,
    inflationRate: 3,
    advancedProjection: null,

    // Step5: Foto IA (opcional)
    userPhoto: null,
    hasAIPhoto: false,

    // Meta
    completedSteps: [],
    lastUpdated: new Date().toISOString()
  }
}
```

**Keys en localStorage**:
1. `siembra-wizard-step` → Número del paso actual (0-6)
2. `siembra-wizard-data` → Objeto completo del usuario
3. `siembra-user-photo` → Base64 string de la foto (separado por tamaño)

---

## 3. Integración en App.jsx

### Modificaciones en `src/App.jsx`

```javascript
import { useState } from 'react'
import { useLocalStorage, clearWizardData } from './hooks/useLocalStorage'
import { getDefaultUserData } from './data/mockData'
import Login from './pages/Login'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import Step6Result from './pages/Step6Result'
import AIPhotoModal from './components/AIPhotoModal'

export default function App() {
  // ✅ ANTES: useState(0)
  // ✅ AHORA: useLocalStorage con persistencia automática
  const [step, setStep] = useLocalStorage('siembra-wizard-step', 0)

  // ✅ ANTES: useState({ ... })
  // ✅ AHORA: useLocalStorage con valores por defecto
  const [userData, setUserData] = useLocalStorage(
    'siembra-wizard-data',
    getDefaultUserData()
  )

  // Modal IA (estado local, no persiste)
  const [showAIModal, setShowAIModal] = useState(false)

  // Handlers para navegación (sin cambios en lógica)
  const handleNext = (data) => {
    setUserData(prev => ({
      ...prev,
      ...data,
      completedSteps: [...new Set([...prev.completedSteps, step])],
      lastUpdated: new Date().toISOString()
    }))
    setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
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

  // ✅ NUEVO: Handler para subir foto desde AIPhotoModal
  const handlePhotoUpload = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const base64Image = e.target.result

      // Guardar en userData
      setUserData(prev => ({
        ...prev,
        userPhoto: base64Image,
        hasAIPhoto: true,
        lastUpdated: new Date().toISOString()
      }))

      // Guardar separado en localStorage (por tamaño)
      window.localStorage.setItem('siembra-user-photo', base64Image)

      setShowAIModal(false)
    }
    reader.onerror = () => {
      console.error('Error reading file')
      alert('Error al cargar la imagen. Por favor, intenta de nuevo.')
    }
    reader.readAsDataURL(file)
  }

  // Renderizado condicional de pasos
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón debug para reset (solo en dev) */}
      {import.meta.env.DEV && (
        <button
          onClick={handleReset}
          className="fixed top-4 right-4 z-50 px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset Wizard
        </button>
      )}

      {step === 0 && <Login data={userData} onNext={handleNext} />}
      {step === 1 && <Step1 data={userData} onNext={handleNext} onBack={handleBack} />}
      {step === 2 && <Step2 data={userData} onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <Step3 data={userData} onNext={handleNext} onBack={handleBack} />}
      {step === 4 && (
        <Step4
          data={userData}
          onNext={handleNext}
          onBack={handleBack}
          onOpenAIModal={() => setShowAIModal(true)}
        />
      )}
      {step === 5 && (
        <Step6Result
          data={userData}
          onBack={handleBack}
          onReset={handleReset}
        />
      )}

      {/* Modal IA (Step5 opcional) */}
      {showAIModal && (
        <AIPhotoModal
          isOpen={showAIModal}
          onClose={() => setShowAIModal(false)}
          onUpload={handlePhotoUpload}
          data={userData}
        />
      )}
    </div>
  )
}
```

**Cambios clave**:
1. ✅ `useState` → `useLocalStorage` (2 líneas cambio)
2. ✅ `handlePhotoUpload` con FileReader + base64
3. ✅ `handleReset` para limpiar wizard
4. ✅ Botón debug en modo desarrollo
5. ✅ Metadata `lastUpdated` en cada actualización

---

## 4. Manejo de Foto en AIPhotoModal

### En `src/components/AIPhotoModal.jsx`

```javascript
import { useState } from 'react'
import ReactDOM from 'react-dom'

export default function AIPhotoModal({ isOpen, onClose, onUpload, data }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [error, setError] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  // Validación de archivo
  const validateFile = (file) => {
    if (!file) return 'Por favor selecciona una imagen'

    const validTypes = ['image/jpeg', 'image/png']
    if (!validTypes.includes(file.type)) {
      return 'Solo se permiten archivos JPG y PNG'
    }

    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return 'La imagen no debe superar 5MB'
    }

    return null
  }

  // Handler cambio de archivo
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setError('')

    if (!file) {
      setSelectedFile(null)
      setPreviewUrl(null)
      return
    }

    const validationError = validateFile(file)
    if (validationError) {
      setError(validationError)
      setSelectedFile(null)
      setPreviewUrl(null)
      return
    }

    setSelectedFile(file)

    // Preview inmediato
    const reader = new FileReader()
    reader.onload = (e) => setPreviewUrl(e.target.result)
    reader.readAsDataURL(file)
  }

  // Handler submit (mock)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!selectedFile) {
      setError('Por favor selecciona una imagen')
      return
    }

    setIsUploading(true)

    // Mock: Simula delay de "procesamiento IA"
    setTimeout(() => {
      onUpload(selectedFile) // App.jsx convierte a base64
      setIsUploading(false)
    }, 1000)
  }

  // Close handlers
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleEscKey = (e) => {
    if (e.key === 'Escape') onClose()
  }

  // ESC key listener
  useState(() => {
    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [])

  if (!isOpen) return null

  // React Portal para overlay
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="relative w-[90%] max-w-[600px] bg-white rounded-2xl shadow-2xl p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          disabled={isUploading}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            ¡Conoce a tu Yo del Futuro!
          </h2>
          <p className="text-gray-600">
            Sube tu foto y visualiza cómo disfrutarás tu jubilación
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* File input */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary transition-colors">
            <input
              type="file"
              id="photo-upload"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
              className="hidden"
              disabled={isUploading}
            />
            <label
              htmlFor="photo-upload"
              className="cursor-pointer block"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              )}
              <p className="text-sm font-medium text-gray-700 mb-1">
                {selectedFile ? selectedFile.name : 'Haz clic para seleccionar'}
              </p>
              <p className="text-xs text-gray-500">
                JPG o PNG, máximo 5MB
              </p>
            </label>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
              disabled={isUploading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedFile || isUploading}
            >
              {isUploading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Procesando...
                </span>
              ) : (
                'Generar'
              )}
            </button>
          </div>

          {/* Info footer */}
          <p className="text-xs text-center text-gray-500 mt-4">
            Tu foto se guarda solo en tu navegador. No se envía a ningún servidor.
          </p>
        </form>
      </div>
    </div>,
    document.body
  )
}
```

**Features**:
- ✅ Validación completa (tipo, tamaño)
- ✅ Preview inmediato con FileReader
- ✅ Mock loading state (1s delay)
- ✅ React Portal para overlay
- ✅ ESC key y click fuera para cerrar
- ✅ Mensaje de privacidad

---

## 5. Display de Foto en Step6Result

### En `src/pages/Step6Result.jsx`

```javascript
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Step6Result({ data, onBack, onReset }) {
  // Recuperar foto de localStorage
  const [userPhoto, setUserPhoto] = useState(null)

  useEffect(() => {
    // Intenta obtener foto desde userData o localStorage directo
    const photo = data.userPhoto || window.localStorage.getItem('siembra-user-photo')
    setUserPhoto(photo)
  }, [data.userPhoto])

  // ... resto del componente

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner celebración */}
      <div className="relative bg-gradient-radial from-[#FFE7BA] to-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* ✅ Foto del usuario si existe */}
          {userPhoto && (
            <div className="mb-6">
              <div className="relative inline-block">
                <img
                  src={userPhoto}
                  alt="Tu futuro"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-xl mx-auto"
                />
                {/* Overlay decorativo "futuro" */}
                <div className="absolute inset-0 rounded-full bg-primary/10 flex items-end justify-center pb-2">
                  <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full shadow-lg">
                    Yo del Futuro
                  </span>
                </div>
              </div>
            </div>
          )}

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {userPhoto ? '¡Así disfrutarás tu jubilación!' : '¡Felicidades!'}
          </h1>
          <p className="text-xl text-gray-600">
            Completaste tu plan de retiro
          </p>
        </div>
      </div>

      {/* ... resto del contenido (gauge, cards, etc.) ... */}

      {/* Botón reset en footer */}
      <div className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200">
        <button
          onClick={onReset}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Reiniciar simulador
        </button>
      </div>

      <Footer />
    </div>
  )
}
```

**Cambios**:
- ✅ `useEffect` para recuperar foto en mount
- ✅ Fallback: intenta `data.userPhoto` o `localStorage` directo
- ✅ Overlay decorativo "Yo del Futuro"
- ✅ Condicional: si no hay foto, solo muestra "¡Felicidades!"
- ✅ Botón reset en footer

---

## 6. Testing Strategy

### Unit Tests

#### `src/hooks/__tests__/useLocalStorage.test.js`

```javascript
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage, clearWizardData } from '../useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('usa initialValue si localStorage está vacío', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'))
    expect(result.current[0]).toBe('default')
  })

  it('recupera valor existente de localStorage', () => {
    window.localStorage.setItem('test-key', JSON.stringify('stored'))
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'))
    expect(result.current[0]).toBe('stored')
  })

  it('actualiza localStorage al cambiar valor', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 0))

    act(() => {
      result.current[1](42)
    })

    expect(result.current[0]).toBe(42)
    expect(window.localStorage.getItem('test-key')).toBe('42')
  })

  it('soporta función actualizadora', () => {
    const { result } = renderHook(() => useLocalStorage('counter', 0))

    act(() => {
      result.current[1](prev => prev + 1)
    })

    expect(result.current[0]).toBe(1)
  })

  it('maneja errores de localStorage gracefully', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError')
    })

    const { result } = renderHook(() => useLocalStorage('test-key', 'value'))

    act(() => {
      result.current[1]('new value')
    })

    // No debe lanzar error
    expect(() => result.current[1]('test')).not.toThrow()

    spy.mockRestore()
  })
})

describe('clearWizardData', () => {
  it('elimina todas las keys del wizard', () => {
    window.localStorage.setItem('siembra-wizard-step', '3')
    window.localStorage.setItem('siembra-wizard-data', '{}')
    window.localStorage.setItem('siembra-user-photo', 'base64...')

    clearWizardData()

    expect(window.localStorage.getItem('siembra-wizard-step')).toBeNull()
    expect(window.localStorage.getItem('siembra-wizard-data')).toBeNull()
    expect(window.localStorage.getItem('siembra-user-photo')).toBeNull()
  })
})
```

---

### Integration Tests

#### `src/__tests__/persistence-flow.test.js`

```javascript
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('Persistence Flow', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('persiste step al avanzar en wizard', () => {
    const { rerender } = render(<App />)

    // Avanzar a Step1
    const submitBtn = screen.getByText(/comenzar/i)
    fireEvent.click(submitBtn)

    // Verificar localStorage
    expect(window.localStorage.getItem('siembra-wizard-step')).toBe('1')

    // Simular reload
    rerender(<App />)

    // Debe estar en Step1
    expect(screen.getByText(/información personal/i)).toBeInTheDocument()
  })

  it('persiste userData entre pasos', () => {
    const { rerender } = render(<App />)

    // Ir a Step1
    fireEvent.click(screen.getByText(/comenzar/i))

    // Llenar datos
    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: 'Juan Pérez' }
    })
    fireEvent.change(screen.getByLabelText(/edad/i), {
      target: { value: '35' }
    })

    // Avanzar
    fireEvent.click(screen.getByText(/siguiente/i))

    // Simular reload
    rerender(<App />)

    // userData debe estar en localStorage
    const userData = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
    expect(userData.name).toBe('Juan Pérez')
    expect(userData.age).toBe(35)
  })

  it('botón reset limpia localStorage', () => {
    // Simular datos existentes
    window.localStorage.setItem('siembra-wizard-step', '3')
    window.localStorage.setItem('siembra-wizard-data', JSON.stringify({ name: 'Test' }))

    render(<App />)

    // Buscar botón reset (solo en dev)
    const resetBtn = screen.getByText(/reset wizard/i)

    // Mock window.confirm
    window.confirm = () => true

    fireEvent.click(resetBtn)

    // localStorage debe estar limpio
    expect(window.localStorage.getItem('siembra-wizard-step')).toBeNull()
    expect(window.localStorage.getItem('siembra-wizard-data')).toBeNull()
  })
})
```

---

### Manual Testing Checklist

**Persistencia básica**:
- [ ] Llenar Step1, recargar → Datos persisten
- [ ] Avanzar a Step3, recargar → Volver a Step3
- [ ] Cerrar browser, abrir → Estado guardado
- [ ] Botón reset limpia todo

**Foto usuario**:
- [ ] Subir foto en Step4 → Guardar en localStorage
- [ ] Ver foto en Step6 → Display correcto
- [ ] Foto persiste después de reload
- [ ] Foto > 5MB → Error validación

**Edge cases**:
- [ ] localStorage lleno → Manejo graceful
- [ ] Datos corruptos en localStorage → Fallback a default
- [ ] Navegador sin localStorage → App no crashea
- [ ] Foto no cargada → Step6 sin foto (sin error)

---

## 7. Edge Cases y Manejo de Errores

### localStorage QuotaExceededError

**Problema**: Foto muy grande + datos del wizard exceden límite (~5-10MB)

**Solución**:
```javascript
try {
  window.localStorage.setItem(key, value)
} catch (error) {
  if (error.name === 'QuotaExceededError') {
    alert('Espacio de almacenamiento lleno. Por favor, usa una foto más pequeña.')
    // Opcional: Comprimir imagen automáticamente
  }
  console.error('localStorage error:', error)
}
```

### Datos Corruptos en localStorage

**Problema**: Usuario manipula localStorage manualmente → JSON.parse falla

**Solución**:
```javascript
const [storedValue, setStoredValue] = useState(() => {
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
    console.error(`Corrupted data in localStorage key "${key}"`)
    window.localStorage.removeItem(key) // Limpiar dato corrupto
    return initialValue
  }
})
```

### Navegador sin localStorage (Modo Incógnito Estricto)

**Problema**: `window.localStorage` es `null` o lanza error al acceder

**Solución**:
```javascript
function isLocalStorageAvailable() {
  try {
    const test = '__storage_test__'
    window.localStorage.setItem(test, test)
    window.localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

// En useLocalStorage
if (!isLocalStorageAvailable()) {
  console.warn('localStorage not available, using memory only')
  return [initialValue, (value) => {
    // Fallback: solo actualiza estado, no persiste
    setStoredValue(value)
  }]
}
```

### Foto No Cargada en Step6

**Problema**: Usuario llega a Step6 sin subir foto

**Solución**: Ya implementado en Step6Result.jsx con condicional:
```javascript
{userPhoto && (
  <img src={userPhoto} alt="Tu futuro" />
)}
```

---

## 8. Optimizaciones Opcionales (Post-MVP)

### Auto-Save con Debounce

```javascript
import { useEffect, useRef } from 'react'

export function useAutoSave(data, key, delay = 2000) {
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Clear timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Nuevo timeout para guardar
    timeoutRef.current = setTimeout(() => {
      try {
        window.localStorage.setItem(key, JSON.stringify(data))
        console.log(`Auto-saved to ${key}`)
      } catch (error) {
        console.error('Auto-save failed:', error)
      }
    }, delay)

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [data, key, delay])
}

// Uso en App.jsx
useAutoSave(userData, 'siembra-wizard-data-backup', 3000)
```

### Versionado de Datos

```javascript
const STORAGE_VERSION = 1

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (!item) return initialValue

      const parsed = JSON.parse(item)

      // Check version
      if (parsed._version !== STORAGE_VERSION) {
        console.warn('Storage version mismatch, resetting data')
        return initialValue
      }

      return parsed.data
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value

    setStoredValue(valueToStore)

    const wrappedData = {
      _version: STORAGE_VERSION,
      _timestamp: Date.now(),
      data: valueToStore
    }

    window.localStorage.setItem(key, JSON.stringify(wrappedData))
  }

  return [storedValue, setValue]
}
```

### Expiración de Datos

```javascript
export function useLocalStorageWithExpiry(key, initialValue, expiryMinutes = 60) {
  // Similar a useLocalStorage pero con TTL
  // Check if data.timestamp + expiryMinutes < Date.now()
  // Si expiró, return initialValue
}
```

**Nota**: Estas optimizaciones NO son necesarias para el MVP. Solo implementar si el usuario las solicita explícitamente.

---

## 9. Resumen de Cambios

### Archivos Nuevos

| Archivo | Líneas | Descripción |
|---------|--------|-------------|
| `src/hooks/useLocalStorage.js` | ~80 | Custom hook + helpers |

### Archivos Modificados

| Archivo | Cambios | Líneas afectadas |
|---------|---------|------------------|
| `src/App.jsx` | useState → useLocalStorage | ~10 |
| | handlePhotoUpload | +20 |
| | handleReset | +10 |
| | Botón debug | +5 |
| `src/components/AIPhotoModal.jsx` | handleSubmit mock | ~5 |
| | Info footer privacidad | +3 |
| `src/pages/Step6Result.jsx` | useEffect foto | +10 |
| | Display condicional | +15 |
| | Botón reset | +5 |
| `src/data/mockData.js` | getDefaultUserData() | +35 |

**Total estimado**: ~200 líneas de código nuevo/modificado

---

## 10. Tiempo Estimado

| Tarea | Tiempo |
|-------|--------|
| ✅ Crear useLocalStorage.js | 15 min |
| ✅ Modificar App.jsx | 20 min |
| ✅ Actualizar AIPhotoModal.jsx | 10 min |
| ✅ Actualizar Step6Result.jsx | 10 min |
| ✅ Tests unitarios (useLocalStorage) | 20 min |
| ✅ Tests integración (persistence flow) | 15 min |
| ✅ Testing manual (checklist completo) | 15 min |
| ✅ Fix bugs encontrados | 15 min |

**Total**: ~2 horas

**Asunciones**:
- Componentes base (Step1-6, AIPhotoModal) ya existen
- mockData.js ya tiene estructura básica
- No necesitamos optimizaciones avanzadas (auto-save, versioning)

---

## 11. Checklist de Implementación

### Fase 1: Setup (15 min)
- [ ] Crear `src/hooks/useLocalStorage.js`
- [ ] Agregar `getDefaultUserData()` a mockData.js
- [ ] Instalar testing libraries si faltan

### Fase 2: Integración (40 min)
- [ ] Modificar App.jsx (useLocalStorage + handlers)
- [ ] Actualizar AIPhotoModal (handleSubmit mock)
- [ ] Actualizar Step6Result (display foto)
- [ ] Agregar botón reset en App.jsx

### Fase 3: Testing (50 min)
- [ ] Tests unitarios useLocalStorage
- [ ] Tests integración persistencia
- [ ] Manual testing con checklist
- [ ] Fix bugs encontrados

### Fase 4: Validación (15 min)
- [ ] Test en Chrome, Firefox, Safari
- [ ] Test en modo incógnito
- [ ] Test con localStorage deshabilitado
- [ ] Test con foto grande (>5MB)

---

## 12. Consideraciones Finales

### ✅ Ventajas del Approach Mock

1. **Simple**: 1 custom hook, sin dependencias externas
2. **Rápido**: ~2 horas de implementación
3. **Gratis**: No costo de API o backend
4. **Compatible**: 100% funciona en GitHub Pages
5. **Privacidad**: Datos nunca salen del navegador
6. **Offline**: Funciona sin conexión

### ⚠️ Limitaciones Conocidas

1. **No sincroniza entre dispositivos** - localStorage es local por navegador
2. **Límite de ~5-10MB** - Fotos muy grandes pueden exceder
3. **Usuario puede borrar** - Clear cookies = pierde datos
4. **No hay backup** - Si localStorage falla, datos se pierden
5. **No hay IA real** - "Yo del Futuro" es solo la foto subida

### 🚀 Upgrade Path (Post-MVP)

Si después del MVP se necesita más:

1. **Backend + DB**:
   - Migrar a Supabase (gratis hasta 500MB)
   - Sync automático entre dispositivos
   - Backup permanente

2. **IA Real**:
   - Integrar API de envejecimiento (FaceApp, DeepAI)
   - Procesar en backend (Vercel serverless function)
   - Costo ~$0.001 por imagen

3. **Optimizaciones**:
   - Auto-save con debounce
   - Versionado de datos
   - Compresión de imágenes automática

**Pero para el MVP**: Mock con localStorage es perfecto ✅

---

## 13. Referencias

**Documentación**:
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
- [React: Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

**Herramientas**:
- [Vitest](https://vitest.dev/) - Testing
- [Testing Library](https://testing-library.com/) - React testing

---

**Regla de oro**: Es un prototipo MVP. Mock simple > Backend complejo. Implementa lo mínimo que funcione, valida con usuarios, itera después.
