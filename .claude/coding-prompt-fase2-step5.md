# Fase 2: Step 5 Modal - Siembra Pension Simulator

## Feature Description

Implementar un **modal opcional** de gamificación que aparece después de Step4 (o al finalizar el wizard). Este modal permite al usuario subir una foto para generar con IA una visualización de su "Yo del Futuro" al momento del retiro. El modal se superpone sobre el contenido existente con un fondo blur. El HTML proporcionado es la única fuente de verdad.

**IMPORTANTE**: Este NO es un paso adicional del wizard, sino una **funcionalidad opcional/gamificación** que se puede saltar.

---

## HTML de Referencia (Fuente de Verdad)

**IMPORTANTE:** Este HTML es la ÚNICA fuente de verdad para el diseño. Todos los estilos, colores, tipografía y layout deben extraerse directamente de aquí.

**Ubicación:** `E:\Siembra\designs\step5.html`

```html
<!-- Background de Step2 (visible pero blur) -->
<div class="w-[1440px] h-[1024px] relative bg-white inline-flex flex-col justify-start items-start overflow-hidden">
  <!-- Header, content, footer de fondo... -->

  <!-- Overlay con blur -->
  <div class="w-[1440px] h-[1024px] left-0 top-0 absolute bg-blue-950/60 backdrop-blur-3xl"></div>

  <!-- Modal centrado -->
  <div class="w-[600px] p-10 left-[420px] top-[248px] absolute bg-White rounded-2xl shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)] flex flex-col justify-end items-end gap-8">
    <div class="self-stretch flex flex-col justify-start items-start gap-3">
      <!-- Botón cerrar -->
      <div class="self-stretch inline-flex justify-center items-center gap-2">
        <div class="flex-1 text-right justify-start text-Black text-base font-black font-['Font_Awesome_7_Free'] leading-4">times</div>
      </div>

      <!-- Iconos decorativos con gradientes -->
      <div class="self-stretch inline-flex justify-center items-start gap-2.5">
        <div class="w-24 h-24 bg-gradient-to-b from-orange-400 to-fuchsia-700 rounded-full"></div>
        <div class="w-11 h-11 relative overflow-hidden">
          <div class="w-8 h-3 left-[7.67px] top-[28.75px] absolute bg-white/60"></div>
          <div class="w-5 h-5 left-[13px] top-[6px] absolute bg-white/40"></div>
        </div>
        <div class="w-4 h-3.5 bg-gradient-to-b from-orange-400 to-fuchsia-700 shadow-[0px_0px_8px_0px_rgba(140,0,117,1.00)]"></div>
        <div class="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full shadow-[0px_4px_13px_0px_rgba(0,0,0,0.25)] shadow-[0px_0px_8px_0px_rgba(249,132,1,1.00)]"></div>
        <div class="w-9 h-9 opacity-40 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full shadow-[inset_0px_0px_13px_0px_rgba(163,68,0,1.00)]"></div>
        <div class="w-5 h-5 opacity-50 bg-gradient-to-b from-yellow-400 to-yellow-400 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.14)]"></div>
      </div>

      <!-- Título -->
      <div class="self-stretch inline-flex justify-center items-center gap-2">
        <div class="flex-1 justify-start text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">¿Quieres ver el resultado de tus decisiones?</div>
      </div>

      <!-- Descripción -->
      <div class="self-stretch inline-flex justify-center items-center gap-2">
        <div class="flex-1 justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-5">Sube una foto y nuestra IA te mostrará cómo luciría tu "Yo del Futuro" al momento de tu retiro.</div>
      </div>

      <!-- Campo de upload -->
      <div data-type="Default" class="self-stretch flex flex-col justify-start items-start gap-1">
        <div data-disable="No" data-fill="No" data-hover="No" data-type="Dropdown" data-typed="No" class="self-stretch flex flex-col justify-start items-start gap-2.5">
          <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-start gap-2.5">
            <div class="flex-1 flex justify-start items-center gap-2.5">
              <div class="flex-1 justify-start text-Bost-Grey-00 text-sm font-normal font-['Noto_Sans'] leading-5">Sube tu foto</div>
              <div data-property-1="Upload" class="w-4 h-4 relative overflow-hidden">
                <div class="w-4 h-4 left-0 top-0 absolute overflow-hidden">
                  <div class="w-0 h-1.5 left-[8px] top-[8px] absolute outline outline-[0.80px] outline-offset-[-0.40px] outline-black"></div>
                  <div class="w-3.5 h-2.5 left-[0.66px] top-[2px] absolute outline outline-1 outline-offset-[-0.50px] outline-black"></div>
                  <div class="w-1.5 h-[2.67px] left-[5.33px] top-[8px] absolute outline outline-[0.80px] outline-offset-[-0.40px] outline-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nota sobre archivos -->
      <div class="self-stretch inline-flex justify-center items-center gap-2">
        <div class="flex-1 justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Tipo de archivo: jpg, png. Con un peso menor o igual a 5 MB</div>
      </div>
    </div>

    <!-- Botones -->
    <div class="inline-flex justify-start items-start gap-8">
      <div class="p-6 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-orange-400 flex justify-center items-center gap-2.5">
        <div class="text-center justify-end text-orange-400 text-xl font-bold font-['Noto_Sans'] leading-5">Saltar</div>
      </div>
      <div class="p-6 bg-orange-400 rounded-[100px] flex justify-center items-center gap-2.5">
        <div class="text-center justify-end text-white text-xl font-bold font-['Noto_Sans'] leading-5">Subir imagen</div>
      </div>
    </div>
  </div>
</div>
```

---

## Contexto del Proyecto

### Configuración Existente

**Tailwind Config** (`tailwind.config.js`):
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF8243',
        secondary: '#1E5BA8',
        'siembra-orange': '#FF7933',
        'siembra-blue': '#015FB8',
        'siembra-yellow': '#FDB216',
        'siembra-grey': '#4C4C4C',
        'siembra-border': '#E4E6EE',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**Props de Entrada**:
```javascript
// El componente AIPhotoModal (o Step5Modal) recibe estas props:
{
  isOpen: boolean,              // Controla visibilidad del modal
  onClose: () => void,          // Callback para cerrar (X o Saltar)
  onUpload: (file: File) => void, // Callback al subir imagen
  data: {                       // Datos del usuario (opcional para personalización)
    name: string,
    retirementAge: number
  }
}
```

**Estructura de Carpetas Actual**:
```
E:\Siembra/
├── src/
│   ├── App.jsx           # Router principal (useState step)
│   ├── main.jsx
│   ├── index.css
│   ├── pages/
│   │   ├── Login.jsx     # EXISTE
│   │   ├── Step1.jsx     # EXISTE
│   │   ├── Step2.jsx     # EXISTE
│   │   ├── Step3.jsx     # EXISTE
│   │   └── Step4.jsx     # EXISTE
│   ├── components/
│   │   ├── Header.jsx          # EXISTE (reutilizable)
│   │   ├── ProgressBar.jsx     # EXISTE (reutilizable)
│   │   ├── Footer.jsx          # EXISTE (reutilizable)
│   │   ├── ChatBubble.jsx      # EXISTE (reutilizable)
│   │   └── AIPhotoModal.jsx    # CREAR (nuevo componente)
│   └── data/
│       └── mockData.js         # EXISTE (no requiere cambios)
├── img/                        # Assets
└── designs/
    └── step5.html              # HTML de referencia
```

---

## Problem Solving

**Problema:** Después del wizard (Step4), queremos ofrecer una experiencia de gamificación opcional donde el usuario puede visualizar su "Yo del Futuro" mediante IA. Esto aumenta engagement sin ser obligatorio.

**Requerimientos:**
- Modal centrado sobre el contenido existente
- Fondo blur semi-transparente (blue-950/60 + backdrop-blur-3xl)
- Modal de 600px ancho con padding y shadow
- Botón cerrar (X) funcional
- Iconos decorativos con gradientes y efectos de brillo
- Campo de upload funcional (acepta jpg, png, max 5MB)
- 2 botones: "Saltar" (cierra modal) y "Subir imagen" (procesa upload)
- Modal se puede cerrar clickeando el overlay o botón X
- **Responsive design:** Ajustar tamaño del modal en mobile

---

## User Story

```
Como usuario del simulador,
Quiero visualizar de forma divertida mi "Yo del Futuro" al momento del retiro,
Para tener una conexión emocional más fuerte con mi plan de pensiones y motivarme a cumplir mis metas.

Acceptance Criteria:
- El modal se muestra automáticamente después de Step4 (opcional: puede ser condicional)
- Puedo cerrar el modal sin subir foto (botón X o "Saltar")
- Puedo subir una foto (jpg, png, max 5MB)
- El upload muestra feedback visual (loading, error, success)
- El modal desaparece después de "Saltar" o "Subir imagen"
- El diseño es coherente con los pasos anteriores
```

---

## Solution & Approach

**Enfoque elegido:** Componente modal reutilizable + React Portal

**Por qué:**
- ✅ React Portal permite renderizar el modal fuera del DOM tree principal
- ✅ Modal puede ser usado en cualquier punto del flujo
- ✅ Fondo blur con Tailwind backdrop-blur-3xl
- ✅ Estados: closed, open, uploading, success, error
- ✅ File validation con HTML5 + JavaScript
- ✅ Cierre con ESC key

---

## Relevant Files & Documentation

### Files to Create/Modify

```
E:\Siembra/
├── src/
│   ├── components/
│   │   └── AIPhotoModal.jsx    # CREAR: modal de upload IA
│   ├── App.jsx                 # MODIFICAR: mostrar modal después de Step4
│   └── index.css               # VERIFICAR: backdrop-blur support
```

### Reference Documentation

- HTML source (proporcionado) - ÚNICA FUENTE DE VERDAD
- [React Portal](https://react.dev/reference/react-dom/createPortal)
- [Tailwind Backdrop Blur](https://tailwindcss.com/docs/backdrop-blur)
- [HTML5 File API](https://developer.mozilla.org/en-US/docs/Web/API/File)

---

## Implementation Plan

### 1. Análisis del HTML Source

**Estructura identificada:**

```html
<div> <!-- Page background (Step2 visible pero blur) -->
  <!-- Overlay blur -->
  <div class="bg-blue-950/60 backdrop-blur-3xl" />

  <!-- Modal centrado -->
  <div class="modal-container">
    <!-- Header con X -->
    <!-- Iconos decorativos -->
    <!-- Título + descripción -->
    <!-- Campo upload -->
    <!-- Nota formato -->
    <!-- Botones (Saltar + Subir) -->
  </div>
</div>
```

**Colores exactos:**

```css
/* Overlay */
--overlay-bg: rgba(30, 58, 138, 0.6)  /* blue-950/60 */
--backdrop-blur: blur(48px)           /* backdrop-blur-3xl */

/* Modal */
--modal-bg: #FFFFFF
--modal-shadow: 0px 0px 24px rgba(0, 0, 0, 0.25)
--modal-radius: 16px  /* rounded-2xl */

/* Iconos decorativos (gradientes) */
--gradient-1: linear-gradient(180deg, #FB923C 0%, #A21CAF 100%)  /* orange-400 → fuchsia-700 */
--gradient-2: linear-gradient(135deg, #F59E0B 0%, #F59E0B 100%)  /* amber-500 → amber-500 */
--gradient-3: linear-gradient(180deg, #FACC15 0%, #FACC15 100%)  /* yellow-400 → yellow-400 */

/* Botones */
--btn-primary-bg: #FB923C       /* orange-400 */
--btn-primary-text: #FFFFFF
--btn-outline: 1px solid #FB923C
--btn-outline-text: #FB923C
--btn-radius: 100px

/* Texto */
--title-color: #000000          /* Black */
--description-color: #4C4C4C    /* Input-Label */
--placeholder-color: #949494    /* Bost-Grey-00 */
```

**Tipografía:**

- Título: 24px bold (font-bold leading-6)
- Descripción: 16px regular (leading-5)
- Nota formato: 16px regular (leading-4)
- Botones: 20px bold (text-xl font-bold leading-5)
- Placeholder upload: 14px regular (text-sm leading-5)

**Componentes clave:**

1. **Overlay con Blur:**
   - Fondo azul oscuro semi-transparente (blue-950/60)
   - backdrop-blur-3xl (48px)
   - Cubre toda la pantalla (fixed, inset-0)
   - Click en overlay cierra modal

2. **Modal Container:**
   - 600px ancho
   - Centrado vertical y horizontal
   - Padding 40px (p-10)
   - Border-radius 16px (rounded-2xl)
   - Box-shadow: 0 0 24px rgba(0,0,0,0.25)

3. **Iconos Decorativos:**
   - 6 elementos con gradientes
   - Efectos de brillo (shadow con color)
   - Posicionamiento horizontal flex con gap-2.5

4. **Campo Upload:**
   - Input file oculto
   - Label clickeable con estilo de input
   - Icono de upload a la derecha
   - Validation: jpg, png, max 5MB

5. **Botones:**
   - "Saltar": outline naranja, text naranja, rounded-[100px]
   - "Subir imagen": filled naranja, text blanco, rounded-[100px]
   - Padding: px-6 py-6 (p-6)
   - Gap entre botones: 32px (gap-8)

---

### 2. Crear Componente AIPhotoModal.jsx

**Archivo:** `src/components/AIPhotoModal.jsx`

```jsx
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function AIPhotoModal({ isOpen, onClose, onUpload, data }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  // Prevenir scroll cuando modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!validTypes.includes(file.type)) {
      return 'Solo se permiten archivos JPG o PNG'
    }

    if (file.size > maxSize) {
      return 'El archivo debe pesar menos de 5 MB'
    }

    return null
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const validationError = validateFile(file)
    if (validationError) {
      setError(validationError)
      setSelectedFile(null)
      return
    }

    setError('')
    setSelectedFile(file)
  }

  const handleUploadClick = async () => {
    if (!selectedFile) {
      setError('Por favor selecciona una foto primero')
      return
    }

    setIsUploading(true)
    try {
      await onUpload(selectedFile)
      // Modal se cierra automáticamente después de upload exitoso
      onClose()
    } catch (err) {
      setError('Error al subir la imagen. Intenta de nuevo.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/60 backdrop-blur-3xl"
      onClick={handleOverlayClick}
    >
      {/* Modal */}
      <div className="w-full max-w-[600px] mx-4 lg:w-[600px] p-10 bg-white rounded-2xl shadow-[0px_0px_24px_rgba(0,0,0,0.25)] flex flex-col gap-8">
        {/* Contenido */}
        <div className="flex flex-col gap-3">
          {/* Botón Cerrar */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-black text-base font-black hover:text-gray-600 transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {/* Iconos Decorativos */}
          <div className="flex justify-center items-start gap-2.5">
            <div className="w-24 h-24 bg-gradient-to-b from-orange-400 to-fuchsia-700 rounded-full" />
            <div className="w-11 h-11 relative overflow-hidden">
              <div className="w-8 h-3 absolute left-[7.67px] top-[28.75px] bg-white/60" />
              <div className="w-5 h-5 absolute left-[13px] top-[6px] bg-white/40" />
            </div>
            <div className="w-4 h-3.5 bg-gradient-to-b from-orange-400 to-fuchsia-700 shadow-[0px_0px_8px_rgba(140,0,117,1)]" />
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full shadow-[0px_4px_13px_rgba(0,0,0,0.25),0px_0px_8px_rgba(249,132,1,1)]" />
            <div className="w-9 h-9 opacity-40 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full shadow-[inset_0px_0px_13px_rgba(163,68,0,1)]" />
            <div className="w-5 h-5 opacity-50 bg-gradient-to-b from-yellow-400 to-yellow-400 shadow-[0px_0px_12px_rgba(0,0,0,0.14)]" />
          </div>

          {/* Título */}
          <h2 className="text-black text-2xl font-bold leading-6 text-center">
            ¿Quieres ver el resultado de tus decisiones?
          </h2>

          {/* Descripción */}
          <p className="text-[#4C4C4C] text-base leading-5 text-center">
            Sube una foto y nuestra IA te mostrará cómo luciría tu "Yo del Futuro" al momento de tu retiro.
          </p>

          {/* Campo Upload */}
          <div className="flex flex-col gap-1">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
              className="hidden"
              aria-label="Subir foto"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-2.5 hover:border-orange-400 transition-colors"
            >
              <span className="flex-1 text-left text-[#949494] text-sm leading-5">
                {selectedFile ? selectedFile.name : 'Sube tu foto'}
              </span>
              <span className="text-black">📤</span>
            </button>

            {/* Error message */}
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>

          {/* Nota sobre archivos */}
          <p className="text-[#4C4C4C] text-base leading-4 text-center">
            Tipo de archivo: jpg, png. Con un peso menor o igual a 5 MB
          </p>
        </div>

        {/* Botones */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={onClose}
            className="px-6 py-6 rounded-[100px] border border-orange-400 text-orange-400 text-xl font-bold leading-5 hover:bg-orange-50 transition-colors"
          >
            Saltar
          </button>
          <button
            onClick={handleUploadClick}
            disabled={isUploading || !selectedFile}
            className="px-6 py-6 bg-orange-400 rounded-[100px] text-white text-xl font-bold leading-5 hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? 'Subiendo...' : 'Subir imagen'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
```

---

### 3. Integrar Modal en App.jsx

**Modificar:** `src/App.jsx`

```jsx
import { useState } from 'react'
import Login from './pages/Login'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import AIPhotoModal from './components/AIPhotoModal'
import { defaultUserData } from './data/mockData'

export default function App() {
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState(defaultUserData)
  const [showAIModal, setShowAIModal] = useState(false)

  const handleNextStep = (newData) => {
    setUserData({ ...userData, ...newData })

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

  const handleUploadPhoto = async (file) => {
    // TODO: Implementar lógica de upload a API IA
    console.log('Uploading file:', file.name)

    // Mock: simulamos upload exitoso
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Aquí iría la llamada a la API de IA
    // const response = await fetch('/api/ai-future-me', { method: 'POST', body: formData })

    console.log('Upload successful!')
  }

  return (
    <div>
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

      {/* Paso 4: Simulador Avanzado */}
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

      {/* Placeholder for other steps */}
      {step > 4 && (
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
```

---

### 4. Implementar Responsive Design

**Ajustes por dispositivo:**

#### Mobile (< 768px):
- **Modal:**
  - Width: 90% viewport (mx-4)
  - Padding reducido: p-6
  - Iconos más pequeños (scale-75)
- **Botones:**
  - Stack verticalmente (flex-col)
  - Full width en mobile
  - Padding reducido: px-4 py-4

#### Tablet (768px - 1023px):
- Modal intermedio: max-w-[500px]
- Botones horizontal

#### Desktop (≥1024px):
- **Diseño original del HTML**
- Modal 600px
- Iconos tamaño completo

**Código responsive para Modal:**

```jsx
// Versión responsive del modal container
<div className="w-full max-w-[90%] lg:max-w-[600px] mx-4 lg:mx-0 p-6 lg:p-10 ...">
  {/* Iconos decorativos - escalar en mobile */}
  <div className="flex justify-center items-start gap-1.5 lg:gap-2.5 scale-75 lg:scale-100">
    {/* ... iconos ... */}
  </div>

  {/* Botones - stack en mobile */}
  <div className="flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-4 lg:gap-8 w-full lg:w-auto">
    <button className="w-full lg:w-auto px-4 lg:px-6 py-4 lg:py-6 ...">
      Saltar
    </button>
    <button className="w-full lg:w-auto px-4 lg:px-6 py-4 lg:py-6 ...">
      Subir imagen
    </button>
  </div>
</div>
```

---

## Testing Strategy

### Visual Testing (Manual)

**Checklist Desktop:**

- [ ] **Overlay:**
  - [ ] Fondo blur visible (backdrop-blur-3xl)
  - [ ] Color azul oscuro semi-transparente (blue-950/60)
  - [ ] Cubre toda la pantalla
  - [ ] Click en overlay cierra modal

- [ ] **Modal:**
  - [ ] Centrado vertical y horizontalmente
  - [ ] 600px ancho
  - [ ] Border-radius 16px (rounded-2xl)
  - [ ] Box-shadow correcto
  - [ ] Padding 40px (p-10)

- [ ] **Botón Cerrar (X):**
  - [ ] Posicionado arriba a la derecha
  - [ ] Hover effect funciona
  - [ ] Cierra modal al clickear

- [ ] **Iconos Decorativos:**
  - [ ] 6 elementos visibles
  - [ ] Gradientes correctos
  - [ ] Efectos de brillo (shadows) aplicados
  - [ ] Gap correcto entre iconos

- [ ] **Campo Upload:**
  - [ ] Input file oculto
  - [ ] Click abre file picker
  - [ ] Muestra nombre de archivo después de seleccionar
  - [ ] Hover effect en border

- [ ] **Botones:**
  - [ ] "Saltar" outline naranja
  - [ ] "Subir imagen" filled naranja
  - [ ] Hover effects funcionan
  - [ ] "Subir imagen" disabled sin archivo

**Checklist Mobile:**

- [ ] Modal adaptado (90% ancho)
- [ ] Iconos escalados (scale-75)
- [ ] Botones stack verticalmente
- [ ] Padding reducido

### Functional Testing

**Test Upload Validation:**

```javascript
// Tests unitarios para validateFile
describe('validateFile', () => {
  it('acepta archivos JPG válidos', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg', size: 1024 })
    expect(validateFile(file)).toBe(null)
  })

  it('acepta archivos PNG válidos', () => {
    const file = new File([''], 'test.png', { type: 'image/png', size: 1024 })
    expect(validateFile(file)).toBe(null)
  })

  it('rechaza archivos no permitidos (PDF)', () => {
    const file = new File([''], 'test.pdf', { type: 'application/pdf', size: 1024 })
    expect(validateFile(file)).toBe('Solo se permiten archivos JPG o PNG')
  })

  it('rechaza archivos mayores a 5MB', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg', size: 6 * 1024 * 1024 })
    expect(validateFile(file)).toBe('El archivo debe pesar menos de 5 MB')
  })
})
```

**Test Modal Interactions:**

```bash
# Verificar:
# - Modal se abre después de Step4
# - Botón X cierra modal
# - Click en overlay cierra modal
# - ESC key cierra modal
# - Scroll bloqueado cuando modal está abierto
# - Upload solo activo con archivo seleccionado
```

### Responsive Testing

- [ ] **Mobile (375px):** Modal 90%, iconos pequeños, botones verticales
- [ ] **Tablet (768px):** Modal 500px, iconos medios
- [ ] **Desktop (1440px):** Diseño original 600px

---

## Edge Cases

### No File Selected

**Problema:** Usuario clickea "Subir imagen" sin seleccionar archivo
**Solución:**
- Botón disabled sin archivo
- Mostrar mensaje de error si intenta subir sin archivo

### File Too Large

**Problema:** Usuario selecciona archivo > 5MB
**Solución:**
- Validar en `handleFileChange`
- Mostrar error: "El archivo debe pesar menos de 5 MB"
- Limpiar selectedFile

### Invalid File Type

**Problema:** Usuario selecciona archivo no válido (PDF, GIF, etc)
**Solución:**
- Validar type con `validTypes.includes(file.type)`
- Mostrar error: "Solo se permiten archivos JPG o PNG"

### Upload Failure

**Problema:** API de IA falla al procesar imagen
**Solución:**
- Catch error en handleUploadClick
- Mostrar mensaje: "Error al subir la imagen. Intenta de nuevo."
- No cerrar modal, permitir retry

### Modal Open During Page Refresh

**Problema:** Usuario refresca página con modal abierto
**Solución:**
- Modal state no persiste (está bien, es opcional)
- Modal se cierra automáticamente

### Body Scroll Leakage

**Problema:** Body scroll sigue activo con modal abierto
**Solución:**
- useEffect setea `document.body.style.overflow = 'hidden'`
- Cleanup restaura scroll en unmount

---

## Acceptance Criteria

**Visual Desktop:**
- ✅ Overlay blur correcto (blue-950/60 + backdrop-blur-3xl)
- ✅ Modal centrado 600px con shadow correcta
- ✅ Iconos decorativos con gradientes y efectos de brillo
- ✅ Botón X funcional arriba derecha
- ✅ Campo upload con estilo correcto
- ✅ 2 botones con estilos exactos (outline + filled)

**Visual Mobile:**
- ✅ Modal adaptado (90% ancho)
- ✅ Iconos escalados
- ✅ Botones verticales full width

**Funcional:**
- ✅ Modal se abre después de Step4 (o al finalizar)
- ✅ Upload valida formato (jpg, png) y tamaño (max 5MB)
- ✅ Botón "Saltar" cierra modal
- ✅ Botón X cierra modal
- ✅ Click en overlay cierra modal
- ✅ ESC key cierra modal
- ✅ Scroll bloqueado cuando modal está abierto
- ✅ "Subir imagen" llama a onUpload callback
- ✅ Modal muestra feedback visual (loading, error)

**Calidad:**
- ✅ No hay errores en consola
- ✅ Tests unitarios pasan (validation functions)
- ✅ Build sin warnings
- ✅ React Portal implementado correctamente

---

## Validation Commands

```bash
# 1. Verificar componente creado
ls src/components/AIPhotoModal.jsx

# 2. Dev server
npm run dev
# Completar wizard hasta Step4
# Verificar que modal aparece

# 3. Tests (crear archivo de tests)
npm run test src/components/__tests__/AIPhotoModal.test.js

# 4. Build
npm run build

# 5. Test responsive
# Resize browser: 375px, 768px, 1440px
```

---

## Time Estimate

**Total: 2.5-3 horas**

- Crear componente AIPhotoModal: 1 hora
  - Estructura y estilos: 30 min
  - Iconos decorativos con gradientes: 15 min
  - Upload logic + validation: 15 min
- Integrar en App.jsx: 20 min
- React Portal setup: 15 min
- Responsive design: 30 min
- Testing visual: 20 min
- Testing funcional (upload validation): 15 min
- Ajustes finales: 10 min

---

## Next Steps After Completion

**Fase 2 continuación:**
- Implementar API call real a servicio de IA (si existe)
- Crear pantalla de resultado con "Yo del Futuro" generado
- Agregar opción de compartir en redes sociales
- Implementar analytics para medir engagement del modal

**Checkpoint Fase 2 Step5:**
- ✅ Modal visualmente idéntico al HTML
- ✅ Upload funcional con validación
- ✅ Responsive funcional
- ✅ Integración con wizard completa
- ✅ Modal puede ser saltado sin afectar flujo

---

## Notes

- **Importante:** HTML proporcionado es la ÚNICA fuente de verdad
- **Importante:** Modal es OPCIONAL - no bloquea el flujo del wizard
- **Importante:** React Portal permite renderizar fuera del DOM tree principal
- **Importante:** backdrop-blur-3xl requiere Tailwind CSS 3.0+
- **Importante:** File validation debe ser en cliente Y servidor (por seguridad)
- **Importante:** Modal se puede mostrar condicionalmente (por ejemplo, solo si score < 7)
- Iconos decorativos son puramente visuales (no interactivos)
- Upload icon puede ser emoji 📤 o Font Awesome (dependiendo de disponibilidad)
- Modal no tiene animación de entrada/salida (puede agregarse con Framer Motion si se desea)
- ESC key cierra modal (UX best practice)
- Body scroll bloqueado con modal abierto (UX best practice)

---

**Regla de oro Fase 2 Step5:** Modal opcional + React Portal + Validación robusta + Responsive.
