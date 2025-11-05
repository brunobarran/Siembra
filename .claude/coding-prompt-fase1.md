# Fase 1: Fundamentos - Siembra Pension Simulator

## Feature Description

Implementar el sistema de navegación (routing) básico y la capa de datos (mockData.js) del simulador de pensiones. Crear páginas placeholder con los campos exactos de los diseños Figma para el wizard completo (Login → Step 1-4 → Step 5 → Result) con navegación funcional y persistencia de datos entre pasos.

## Problem Solving

**Problema:** Necesitamos una estructura funcional del wizard con los campos exactos de Figma antes de aplicar estilos finales, para poder iterar rápidamente en las siguientes fases.

**Requerimientos:**
- Router simple con useState (no React Router)
- Mock data con lógica de cálculo de pensión proyectada
- Navegación forward/backward sin perder datos
- Validación básica de formularios
- Campos exactos según diseños Figma
- Estructura escalable para agregar diseños después

## User Story

```
Como desarrollador del prototipo Siembra,
Quiero tener el wizard funcional con navegación y los campos exactos de Figma,
Para poder enfocarme en aplicar estilos finales en la Fase 2 sin preocuparme por la lógica de negocio.
```

## Solution & Approach

**Enfoque elegido:** Estado centralizado en App.jsx + Mock data separado

**Arquitectura:**
```
App.jsx (step, userData, handlers)
  ↓ props
Pages (Login, Step1-4, Step5, Result)
  ↓ usa
mockData.js (calculatePension, formatCurrency, validations)
```

**Por qué:**
- ✅ Simple: Todo el estado en un lugar (App.jsx)
- ✅ Escalable: Fácil agregar nuevos steps
- ✅ Testable: Lógica de negocio separada en mockData.js
- ✅ Sin over-engineering: useState > Context/Zustand

**Alternativas descartadas:**
- ❌ React Router: Innecesario para 6 pantallas
- ❌ Context API: Overhead para prototipo
- ❌ LocalStorage: Datos no necesitan persistir entre sesiones

## Relevant Files & Documentation

### Files to Create/Modify

```
E:\Siembra/
├── src/
│   ├── App.jsx                      # Modificar: agregar router y estado
│   ├── pages/
│   │   ├── Login.jsx                # Crear: pantalla bienvenida con form de registro
│   │   ├── Step1.jsx                # Crear: info personal y laboral
│   │   ├── Step2.jsx                # Crear: ingresos, gastos y AFP
│   │   ├── Step3.jsx                # Crear: resultado base + hoja de ruta
│   │   ├── Step4.jsx                # Crear: simulador avanzado
│   │   ├── Step5.jsx                # Crear: modal foto (placeholder)
│   │   └── Result.jsx               # Crear: resultado final con plan de acción
│   ├── data/
│   │   ├── mockData.js              # Crear: datos + lógica cálculo
│   │   └── __tests__/
│   │       └── mockData.test.js     # Crear: tests para lógica de negocio
│   └── __tests__/
│       └── wizard-flow.test.js      # Crear: test de integración del wizard
```

### Reference Documentation

- [React useState Hook](https://react.dev/reference/react/useState) - Managing form state, lifting state up
- [Recharts - Line Chart](https://recharts.org/en-US/api/LineChart) - Chart configuration, data format
- [Recharts - Gauge Chart](https://recharts.org/en-US/examples/SimpleRadialBarChart) - Radial chart for score
- [Conditional Rendering](https://react.dev/learn/conditional-rendering) - Rendering different pages based on state

## Implementation Plan

### Foundational Work

1. **Crear estructura de datos (mockData.js)**
   - Definir `defaultUserData` con campos exactos de Figma
   - Implementar validaciones básicas por step

2. **Implementar lógica de cálculo**
   - `calculateBasePension()` - Pensión base (Step 3)
   - `calculateAdvancedPension()` - Pensión avanzada (Step 4)
   - `calculateScore()` - Score 0-10 tipo gauge
   - `formatCurrency()` - Formatear como RD$ (pesos dominicanos)
   - `generateChartData()` - Datos para gráficos (base vs avanzado)

### Core Implementation

3. **Crear sistema de routing en App.jsx**
   - Estado: `step` (0-5: Login, Step1-4, Result)
   - Estado: `userData` (objeto con todos los datos del wizard)
   - Handler: `handleNext(data)` - Merge datos y avanzar step
   - Handler: `handleBack()` - Retroceder sin perder datos
   - Handler: `handleRestart()` - Reset y volver a Login
   - Renderizado condicional: array de componentes indexado por `step`

4. **Implementar páginas del wizard con campos exactos**
   - **Login.jsx** - Form registro: nombre, documento, fecha nacimiento, correo
   - **Step1.jsx** - Info personal: edad, edad retiro, ¿laboras?
   - **Step2.jsx** - Ingresos/gastos: salario, otros ingresos, gastos detallados, AFP, saldo cuenta, pensión deseada
   - **Step3.jsx** - Resultado base: gauge, cards comparación, gráfico, hoja de ruta
   - **Step4.jsx** - Simulador avanzado: edad retiro, aportes, incremento salarial, resultado mejorado
   - **Step5.jsx** - Modal foto (placeholder no funcional)
   - **Result.jsx** - Resultado final: foto, score, plan de acción

### Integration Work

5. **Conectar páginas con App.jsx**
   - Pasar props: `data={userData}`, `onNext={handleNext}`, `onBack={handleBack}`
   - En Result.jsx: `onRestart={handleRestart}`
   - Cada página debe usar local state para form, luego enviar datos via `onNext()`

6. **Implementar gráficos con Recharts**
   - Step3: LineChart con proyección base
   - Step4: LineChart comparativo (base vs avanzado)
   - Gauges: RadialBarChart para score 0-10

## Step-by-Step Task List

### 1. Crear mockData.js con lógica de negocio

**Archivo:** `src/data/mockData.js`

**Estructura de datos (campos exactos de Figma):**

```javascript
export const defaultUserData = {
  // Login
  name: '',
  documentId: '',
  birthDate: '',
  email: '',

  // Step 1
  age: null,
  retirementAge: null,
  currentlyWorking: true, // Boolean

  // Step 2
  monthlySalary: null,
  otherIncome: 0,
  // Gastos
  housingType: 'alquilada', // 'alquilada' | 'propia'
  housingExpense: 0,
  householdExpense: 0,
  educationExpense: 0,
  debtPayment: 0,
  entertainmentExpense: 0,
  unexpectedExpense: 0,
  // AFP
  afp: '', // 'AFP Siembra', etc.
  accountBalance: null,
  desiredPension: null,
  voluntaryContributions: false,
  voluntaryAmount: 0,

  // Step 4 (Simulador Avanzado)
  advancedRetirementAge: null,
  monthlyVoluntaryContribution: 0,
  annualSalaryIncrease: 8, // Porcentaje
  extraordinaryAnnualContribution: 0,

  // Step 5
  photoUrl: null,
}
```

**Funciones clave a implementar:**

```javascript
// Calcular resumen de ingresos/gastos
export function calculateFinancialSummary(userData) {
  const totalIncome = userData.monthlySalary + userData.otherIncome
  const totalExpenses = userData.housingExpense + userData.householdExpense +
                        userData.educationExpense + userData.debtPayment +
                        userData.entertainmentExpense + userData.unexpectedExpense
  const savingsCapacity = totalIncome - totalExpenses
  const savingsPercentage = totalIncome > 0 ? (savingsCapacity / totalIncome) * 100 : 0

  return { totalIncome, totalExpenses, savingsCapacity, savingsPercentage }
}

// Calcular pensión base (Step 3)
export function calculateBasePension(userData) {
  // Usar fórmula simplificada
  // Return: { projectedPension, totalSavings, yearsToRetirement }
}

// Calcular pensión avanzada (Step 4)
export function calculateAdvancedPension(userData) {
  // Incluir aportes voluntarios, incremento salarial, etc.
  // Return: { projectedPension, totalSavings, difference }
}

// Calcular score 0-10 para gauge
export function calculateScore(projected, desired) {
  const coverage = (projected / desired) * 100
  // Retornar número 0-10 basado en cobertura
}

// Formatear como pesos dominicanos
export function formatCurrency(amount) {
  return new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 0,
  }).format(amount)
}

// Generar datos para gráfico
export function generateChartData(userData, type = 'base') {
  // type: 'base' | 'advanced'
  // Return: [{ age, savings }, ...]
}

// Validaciones
export function validateLogin(data) { /* ... */ }
export function validateStep1(data) { /* ... */ }
export function validateStep2(data) { /* ... */ }
```

**Verificación:** Archivo exporta todas las funciones correctamente

---

### 2. Modificar App.jsx para agregar routing

**Archivo:** `src/App.jsx`

**Estructura:**

```javascript
import { useState } from 'react'
import Login from './pages/Login'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import Step5 from './pages/Step5'
import Result from './pages/Result'
import { defaultUserData } from './data/mockData'

export default function App() {
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState(defaultUserData)

  const handleNext = (data) => {
    setUserData({ ...userData, ...data })
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(Math.max(0, step - 1))
  }

  const handleRestart = () => {
    setStep(0)
    setUserData(defaultUserData)
  }

  const pages = [
    <Login key="login" onNext={handleNext} />,
    <Step1 key="step1" data={userData} onNext={handleNext} onBack={handleBack} />,
    <Step2 key="step2" data={userData} onNext={handleNext} onBack={handleBack} />,
    <Step3 key="step3" data={userData} onNext={handleNext} onBack={handleBack} />,
    <Step4 key="step4" data={userData} onNext={handleNext} onBack={handleBack} />,
    <Step5 key="step5" data={userData} onNext={handleNext} onBack={handleBack} />,
    <Result key="result" data={userData} onRestart={handleRestart} />,
  ]

  return pages[step]
}
```

**Verificación:** Router funciona, step cambia correctamente

---

### 3. Crear páginas con campos exactos

#### Login.jsx

**Campos exactos:**
- Título: "Bienvenido: al simulador para tu retiro"
- "¿Cuál es tu nombre?" - Input text
- "Documento de identidad:" - Input text con tooltip
- "Fecha de nacimiento" - Date input
- "¿Cuál es tu correo?" - Input email
- Texto legal sobre términos y condiciones
- Botón: "Comenzar mi evaluación ahora"
- Link: "Glosario y metodología"

```javascript
export default function Login({ onNext }) {
  const [formData, setFormData] = useState({
    name: '',
    documentId: '',
    birthDate: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Calcular edad desde birthDate
    onNext(formData)
  }

  return (
    // Form con campos exactos
  )
}
```

#### Step1.jsx

**Campos exactos:**
- Progress bar: 25%
- Título: "Información: Personal y laboral"
- Header usuario (placeholder)

**Sección: Información Personal**
- "Mi edad es:" - Display calculado desde fecha nacimiento
- "¿A que edad deseas retirarte?*" - Number input con botones +/-

**Sección: Información laboral y profesional**
- "¿Laboras actualmente?" - Radio buttons: Sí / No

Botones: "Dejar para después" | "Volver" | "Continuar"

```javascript
export default function Step1({ data, onNext, onBack }) {
  const [formData, setFormData] = useState({
    age: data.age || calculateAge(data.birthDate),
    retirementAge: data.retirementAge || 65,
    currentlyWorking: data.currentlyWorking ?? true
  })

  // Implementar lógica de +/- para retirementAge

  return (
    // Form con campos exactos
  )
}
```

#### Step2.jsx

**Campos exactos (muchos):**
- Progress bar: 50%
- Título: "Información: Ingresos y gastos"

**Ingresos:**
- "¿Cuál es tu salario mensual?*" - Input con formato RD$
- "¿Tienes otros ingresos?" - Input con formato RD$
- **Resumen de ingresos** (colapsable con cálculos automáticos)

**Gastos Mensuales:**
- "Tipo de Vivienda" - Radio: Alquilada / Propia
- Vivienda - Input RD$
- Gastos de hogar - Input RD$
- Educación - Input RD$
- Pago deuda - Input RD$ con checkbox explicativo
- Entretenimiento - Input RD$
- Imprevistos - Input RD$
- **Resumen de Gastos** (colapsable con cálculos automáticos)
- **Capacidad de ahorro** (calculado)
- **Porcentaje de ahorro** (calculado)

**AFP:**
- "¿Cuál es tu AFP?*" - Dropdown
- "¿Cuál es tu saldo en cuenta?*" - Input con link ayuda
- "¿Cuál sería la pensión que deseas a tu edad de retiro?*" - Input
- Checkbox "Realizas aportes voluntarios mensuales?" con input condicional

Botones: "Dejar para después" | "Volver" | "Continuar"

```javascript
export default function Step2({ data, onNext, onBack }) {
  const [formData, setFormData] = useState({
    monthlySalary: data.monthlySalary || 0,
    otherIncome: data.otherIncome || 0,
    housingType: data.housingType || 'alquilada',
    // ... todos los campos de gastos
    afp: data.afp || '',
    accountBalance: data.accountBalance || 0,
    desiredPension: data.desiredPension || 0,
    voluntaryContributions: data.voluntaryContributions || false,
    voluntaryAmount: data.voluntaryAmount || 0
  })

  // Calcular resúmenes automáticamente con useEffect
  const summary = calculateFinancialSummary(formData)

  return (
    // Form con TODOS los campos exactos + resúmenes colapsables
  )
}
```

#### Step3.jsx (Resultado Base)

**NO es un form, es pantalla de resultados:**
- Progress bar: 75%
- Título: "Hacia donde te diriges: Tu Proyección de pensión base"

**Contenido:**
- 3 cards: Pensión Deseada / Pensión Proyectada / Diferencia a cubrir
- Gauge con score 0-10 + mensaje de resultado
- Gráfico LineChart con proyección
- Sección "Tu Hoja de Ruta" colapsable con 3 recomendaciones numeradas
- Botón: "Ir al Simulador y mejorar mi proyección"

```javascript
export default function Step3({ data, onNext, onBack }) {
  const basePension = calculateBasePension(data)
  const score = calculateScore(basePension.projectedPension, data.desiredPension)
  const chartData = generateChartData(data, 'base')

  return (
    // Pantalla de resultados (no form)
    // Mostrar gauge, cards, gráfico Recharts
    // Botón onNext avanza a Step4 (simulador avanzado)
  )
}
```

#### Step4.jsx (Simulador Avanzado)

**Es form + resultados en vivo:**
- Progress bar: 100%
- Título: "Toma el Control: Tu Proyección de Pensión Avanzada"

**Inputs ajustables:**
- "Edad de retiro*" - Number con +/-
- "Aporte voluntario mensual*" - Input RD$
- "Incremento salarial anual*" - Number % con +/-
- "Aporte extraordinario anual" - Input RD$

**Resultados actualizados en tiempo real:**
- Gauge con nuevo score 0-10
- 3 cards: Pensión Deseada / Pensión Proyectada / Diferencia (a favor o cubrir)
- Gráfico comparativo con 2 líneas: base (naranja) vs avanzado (azul)

Botón: "Finalizar"

```javascript
export default function Step4({ data, onNext, onBack }) {
  const [formData, setFormData] = useState({
    advancedRetirementAge: data.advancedRetirementAge || data.retirementAge,
    monthlyVoluntaryContribution: data.monthlyVoluntaryContribution || 10000,
    annualSalaryIncrease: data.annualSalaryIncrease || 8,
    extraordinaryAnnualContribution: data.extraordinaryAnnualContribution || 0
  })

  // Calcular en tiempo real
  const advancedPension = calculateAdvancedPension({ ...data, ...formData })
  const basePension = calculateBasePension(data)
  const score = calculateScore(advancedPension.projectedPension, data.desiredPension)

  return (
    // Form con inputs ajustables + resultados en vivo
    // Gráfico comparativo con 2 líneas
  )
}
```

#### Step5.jsx (Modal Foto)

**Modal centrado (placeholder):**
- "¿Quieres ver el resultado de tus decisiones?"
- Subtítulo sobre IA y "Yo del Futuro"
- Input file "Sube tu foto" (no funcional todavía)
- Texto: "Tipo de archivo: jpg, png. Con un peso menor o igual a 5 MB"
- Botones: "Saltar" | "Subir imagen"

```javascript
export default function Step5({ data, onNext, onBack }) {
  const handleSkip = () => {
    onNext({ photoUrl: null })
  }

  const handleUpload = () => {
    // Placeholder - solo avanza
    onNext({ photoUrl: 'placeholder' })
  }

  return (
    // Modal centrado (placeholder no funcional)
  )
}
```

#### Result.jsx (Resultado Final)

**Pantalla de felicitación:**
- Foto circular con badge (si existe)
- Título: "¡Felicidades {nombre}!"
- Subtítulo personalizado
- Gauge con score final 9/10
- 3 cards: Pensión Deseada / Proyectada / Diferencia
- Texto explicativo

**Tu Plan de Acción para el Retiro:**
- Sección "Gestión de ahorro voluntario" colapsable con 2 items numerados
- "Reducción de deudas"
- "Preparación para pensión obligatoria"

**Botones de acción:**
- "Compartir" (outline)
- "Descargar planificación" (outline)
- "Imprimir planificación" (outline)

Texto final + logos

```javascript
export default function Result({ data, onRestart }) {
  const advancedPension = calculateAdvancedPension(data)
  const score = calculateScore(advancedPension.projectedPension, data.desiredPension)

  return (
    // Pantalla final con plan de acción
    // Botones de compartir/descargar/imprimir (placeholder)
  )
}
```

**Verificación:** Todas las páginas renderizan con campos correctos

---

### 4. Crear tests para mockData.js

**Archivo:** `src/data/__tests__/mockData.test.js`

**Tests clave:**

```javascript
import { describe, it, expect } from 'vitest'
import {
  calculateFinancialSummary,
  calculateBasePension,
  calculateAdvancedPension,
  calculateScore,
  formatCurrency,
  generateChartData
} from '../mockData'

describe('calculateFinancialSummary', () => {
  it('calcula resumen correctamente', () => {
    const result = calculateFinancialSummary({
      monthlySalary: 100000,
      otherIncome: 0,
      housingExpense: 50000,
      householdExpense: 20000,
      educationExpense: 0,
      debtPayment: 20000,
      entertainmentExpense: 0,
      unexpectedExpense: 0
    })

    expect(result.totalIncome).toBe(100000)
    expect(result.totalExpenses).toBe(90000)
    expect(result.savingsCapacity).toBe(10000)
    expect(result.savingsPercentage).toBe(10)
  })
})

describe('calculateBasePension', () => {
  it('calcula pensión base correctamente', () => { /* ... */ })
})

describe('calculateAdvancedPension', () => {
  it('incluye aportes voluntarios', () => { /* ... */ })
  it('calcula diferencia vs pensión deseada', () => { /* ... */ })
})

describe('calculateScore', () => {
  it('retorna 10 cuando proyección >= deseada', () => {
    expect(calculateScore(120000, 80000)).toBe(10)
  })

  it('retorna score bajo cuando diferencia es grande', () => {
    expect(calculateScore(30000, 80000)).toBeLessThan(5)
  })
})

describe('formatCurrency', () => {
  it('formatea como pesos dominicanos', () => {
    const formatted = formatCurrency(100000)
    expect(formatted).toContain('100,000') // o formato RD$
  })
})

// ... más tests
```

**Verificación:**
```bash
npm run test:unit
```

---

### 5. Crear test de integración del wizard

**Archivo:** `src/__tests__/wizard-flow.test.jsx`

```javascript
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

describe('Wizard Flow Integration', () => {
  it('navega desde Login hasta Step1', () => {
    render(<App />)

    // Llenar login
    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Alejandra' } })
    // ... llenar otros campos
    fireEvent.click(screen.getByText(/Comenzar mi evaluación ahora/i))

    expect(screen.getByText(/Información: Personal y laboral/i)).toBeInTheDocument()
  })

  it('completa flujo hasta resultado', async () => {
    // Test completo Login → Step1-4 → Step5 → Result
  })

  it('permite navegar hacia atrás sin perder datos', async () => {
    // Verificar persistencia de datos
  })
})
```

**Verificación:**
```bash
npm run test
```

---

## Testing Strategy

### Unit Tests

**Qué testear:**
- ✅ `calculateFinancialSummary()` - Resumen de ingresos/gastos
- ✅ `calculateBasePension()` - Pensión base correcta
- ✅ `calculateAdvancedPension()` - Incluye aportes voluntarios
- ✅ `calculateScore()` - Score 0-10 según cobertura
- ✅ `formatCurrency()` - Formato RD$ correcto
- ✅ `generateChartData()` - Datos correctos para gráficos
- ✅ Validaciones - Edge cases

**Cobertura esperada:** 80%+ en mockData.js

### Integration Tests

**Qué testear:**
- ✅ Navegación Login → Step1-4 → Step5 → Result
- ✅ Persistencia de datos entre pasos
- ✅ Navegación backward sin pérdida
- ✅ Cálculos se actualizan correctamente

### Manual Testing Checklist

- [ ] Login → Step1 con datos correctos
- [ ] Step2: resúmenes calculan automáticamente
- [ ] Step3: gauge y gráfico renderizan
- [ ] Step4: resultados actualizan en tiempo real
- [ ] Step5: botones funcionan
- [ ] Result: muestra plan de acción
- [ ] Botón "Volver" mantiene datos
- [ ] No hay errores en consola

---

## Edge Cases

### Cálculos

- **Gastos > Ingresos:** Capacidad ahorro negativa, mostrar alerta
- **Edad retiro < edad actual:** Validar y mostrar error
- **Pensión proyectada muy baja:** Score 0-3, mensaje de atención
- **División por cero:** Validar denominadores

### Navegación

- **Usuario salta Step5 (foto):** Permitir con botón "Saltar"
- **Datos incompletos en Step2:** Validar campos obligatorios antes de avanzar

### UI

- **Números muy grandes:** formatCurrency debe manejar millones
- **Resúmenes colapsables:** Estado local para show/hide

---

## Acceptance Criteria

**Funcionalidad:**
- ✅ Router con useState funciona (step 0-6)
- ✅ Usuario puede navegar forward/backward
- ✅ Datos persisten entre pasos
- ✅ Todos los campos de Figma implementados
- ✅ Resúmenes calculan automáticamente (Step2)
- ✅ Step3 muestra resultado base con gauge y gráfico
- ✅ Step4 actualiza resultados en tiempo real
- ✅ Step5 permite saltar foto
- ✅ Result muestra plan de acción

**Calidad:**
- ✅ Tests unit pasan (mockData.js) - mínimo 12 tests
- ✅ Tests integration pasan (wizard-flow) - mínimo 3 tests
- ✅ Cobertura 80%+ en mockData.js
- ✅ No hay errores en consola
- ✅ No hay warnings de React

**UX:**
- ✅ Formularios usan HTML5 validation
- ✅ Progress bar actualiza correctamente
- ✅ Botones +/- funcionan para edad retiro
- ✅ Secciones colapsables funcionan
- ✅ Formato RD$ consistente

---

## Validation Commands

```bash
# 1. Verificar estructura
ls src/pages/
# Debe mostrar: Login.jsx, Step1-4.jsx, Step5.jsx, Result.jsx

# 2. Tests unitarios
npm run test:unit

# 3. Todos los tests
npm run test

# 4. Build
npm run build

# 5. Dev server
npm run dev
# Completar wizard completo manualmente
```

**Validación exitosa si:**
- ✅ Tests pasan (mínimo 15 tests)
- ✅ Build sin errores
- ✅ Wizard completo funciona
- ✅ Cálculos son razonables
- ✅ Gráficos renderizan

---

## Time Estimate

**Total: 3-4 horas**

- Crear mockData.js: 45 min
- Modificar App.jsx: 15 min
- Login.jsx: 20 min
- Step1.jsx: 15 min
- Step2.jsx: 60 min (muchos campos)
- Step3.jsx: 30 min (gráfico)
- Step4.jsx: 40 min (simulador en vivo)
- Step5.jsx: 10 min (placeholder)
- Result.jsx: 25 min
- Tests: 60 min

---

## Next Steps After Completion

**Fase 2: Diseños Figma** - Aplicar estilos finales, colores, logos, tipografía

**Checkpoint Fase 1:**
- ✅ Wizard funcional con campos exactos
- ✅ Lógica de cálculo correcta
- ✅ Tests pasan

**Todavía NO (Fase 2):**
- ❌ Estilos finales de Figma
- ❌ Logos e imágenes
- ❌ Upload de foto real
- ❌ Responsive perfecto
- ❌ Animaciones

---

## Notes

- **Importante:** Campos deben ser EXACTAMENTE como en Figma
- **Importante:** Formato moneda es RD$ (República Dominicana)
- **Importante:** Step3 y Step4 son pantallas de resultados (no solo forms)
- **Importante:** Step5 es placeholder - foto real en Fase 2
- **Importante:** Progress bar: 25%, 50%, 75%, 100%
- Fórmulas de cálculo son simplificadas (MVP)
- Gráficos usan Recharts (LineChart + RadialBarChart)

---

**Regla de oro Fase 1:** Campos exactos + Funcionalidad > Diseño visual perfecto.
