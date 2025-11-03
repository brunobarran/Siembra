# Fase 1: Fundamentos - Siembra Pension Simulator

## Feature Description

Implementar el sistema de navegación (routing) básico y la capa de datos (mockData.js) del simulador de pensiones. Crear páginas placeholder para el wizard completo (Login → Step 1-5 → Result) con navegación funcional y persistencia de datos entre pasos.

## Problem Solving

**Problema:** Necesitamos una estructura funcional del wizard antes de implementar los diseños de Figma, para poder iterar rápidamente en las siguientes fases.

**Requerimientos:**
- Router simple con useState (no React Router)
- Mock data con lógica de cálculo de pensión proyectada
- Navegación forward/backward sin perder datos
- Validación básica de formularios
- Estructura escalable para agregar diseños después

## User Story

```
Como desarrollador del prototipo Siembra,
Quiero tener el wizard funcional con navegación y datos persistentes,
Para poder enfocarme en implementar los diseños de Figma en la Fase 2 sin preocuparme por la lógica de negocio.
```

## Solution & Approach

**Enfoque elegido:** Estado centralizado en App.jsx + Mock data separado

**Arquitectura:**
```
App.jsx (step, userData, handlers)
  ↓ props
Pages (Login, Step1, Step2, etc.)
  ↓ usa
mockData.js (calculatePension, formatCurrency, validations)
```

**Por qué:**
- ✅ Simple: Todo el estado en un lugar (App.jsx)
- ✅ Escalable: Fácil agregar nuevos steps
- ✅ Testable: Lógica de negocio separada en mockData.js
- ✅ Sin over-engineering: useState > Context/Zustand

**Alternativas descartadas:**
- ❌ React Router: Innecesario para 7 pantallas
- ❌ Context API: Overhead para prototipo
- ❌ LocalStorage: Datos no necesitan persistir entre sesiones

## Relevant Files & Documentation

### Files to Create/Modify

```
E:\Siembra/
├── src/
│   ├── App.jsx                      # Modificar: agregar router y estado
│   ├── pages/
│   │   ├── Login.jsx                # Crear: pantalla de bienvenida
│   │   ├── Step1.jsx                # Crear: info personal (edad, salario)
│   │   ├── Step2.jsx                # Crear: situación financiera
│   │   ├── Step3.jsx                # Crear: expectativas de retiro
│   │   ├── Step4.jsx                # Crear: preguntas avanzadas (opcional)
│   │   ├── Step5.jsx                # Crear: foto (placeholder)
│   │   └── Result.jsx               # Crear: resultado con score y chart
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
- [Conditional Rendering](https://react.dev/learn/conditional-rendering) - Rendering different pages based on state

## Implementation Plan

### Foundational Work

1. **Crear estructura de datos (mockData.js)**
   - Definir `defaultUserData` con campos: age, retirementAge, monthlySalary, monthlyExpenses, currentSavings, afp, desiredPension, lifestyleExpectation, etc.
   - Implementar validaciones básicas por step

2. **Implementar lógica de cálculo**
   - `calculatePension()` - Calcular pensión proyectada usando fórmula de valor futuro de anualidad
   - `calculateScore()` - Score 0-10 basado en % cobertura (proyectada vs deseada)
   - `formatCurrency()` - Formatear números como CLP usando Intl.NumberFormat
   - `generateChartData()` - Generar array de datos para gráfico Recharts

### Core Implementation

3. **Crear sistema de routing en App.jsx**
   - Estado: `step` (0-6: Login, Step1-5, Result)
   - Estado: `userData` (objeto con todos los datos del wizard)
   - Handler: `handleNext(data)` - Merge datos y avanzar step
   - Handler: `handleBack()` - Retroceder sin perder datos
   - Handler: `handleRestart()` - Reset y volver a Login
   - Renderizado condicional: array de componentes indexado por `step`

4. **Implementar páginas del wizard**
   - **Login.jsx** - Botón "Comenzar" que llama `onNext({})`
   - **Step1.jsx** - Form: edad actual, edad de retiro, salario mensual. Validar con `validateStep1()`
   - **Step2.jsx** - Form: gastos mensuales, ahorros actuales AFP, selector AFP. Validar con `validateStep2()`
   - **Step3.jsx** - Form: pensión deseada, radio buttons estilo de vida (básico/medio/alto)
   - **Step4.jsx** - Form: checkboxes inversiones/bienes raíces con inputs condicionales (opcional)
   - **Step5.jsx** - Placeholder "foto será implementada en Fase 2", botón "Continuar sin foto"
   - **Result.jsx** - Mostrar score, pensión proyectada vs deseada, métricas, gráfico Recharts

### Integration Work

5. **Conectar páginas con App.jsx**
   - Pasar props: `data={userData}`, `onNext={handleNext}`, `onBack={handleBack}`
   - En Result.jsx: `onRestart={handleRestart}`
   - Cada página debe usar local state para form, luego enviar datos via `onNext()`

6. **Implementar Result.jsx con Recharts**
   - Importar `LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer` de recharts
   - Usar `generateChartData()` para obtener datos
   - Eje X: edad, Eje Y: ahorros (formatear como millones)
   - Mostrar score en grande, pensión proyectada vs deseada, años para retiro, total ahorrado
   - Lista de recomendaciones condicionales según score

## Step-by-Step Task List

### 1. Crear mockData.js con lógica de negocio

**Archivo:** `src/data/mockData.js`

**Contenido clave:**

```javascript
// Estructura de datos
export const defaultUserData = {
  age: null,
  retirementAge: null,
  monthlySalary: null,
  monthlyExpenses: null,
  currentSavings: null,
  afp: null, // 'Modelo', 'Cuprum', 'Habitat', etc.
  desiredPension: null,
  lifestyleExpectation: null, // 'básico', 'medio', 'alto'
  hasInvestments: false,
  investmentValue: null,
  hasRealEstate: false,
  realEstateValue: null,
  photoUrl: null,
}

// Ejemplo de función de cálculo (simplificado)
export function calculatePension(userData) {
  // Usar fórmula de valor futuro de anualidad:
  // FV = PV(1+r)^n + PMT * [((1+r)^n - 1) / r]
  // Aporte AFP: 10% salario
  // Rentabilidad: 5% anual
  // Return: { totalSavings, projectedPension, yearsToRetirement }
}

// Ejemplo de validación
export function validateStep1(data) {
  const errors = {}
  if (!data.age || data.age < 18 || data.age > 100) {
    errors.age = 'Edad debe estar entre 18 y 100 años'
  }
  // ... más validaciones
  return errors
}
```

**Funciones a implementar:**
- `calculatePension(userData)` → `{ totalSavings, projectedPension, yearsToRetirement }`
- `calculateScore(userData)` → número 0-10
- `formatCurrency(amount)` → string formato chileno
- `generateChartData(userData)` → array `[{ age, savings }, ...]`
- `validateStep1/2/3(data)` → objeto con errores

**Verificación:** Archivo exporta todas las funciones correctamente

---

### 2. Modificar App.jsx para agregar routing

**Archivo:** `src/App.jsx`

**Cambios clave:**

```javascript
import { useState } from 'react'
import Login from './pages/Login'
import Step1 from './pages/Step1'
// ... importar todos los steps
import { defaultUserData } from './data/mockData'

export default function App() {
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState(defaultUserData)

  const handleNext = (data) => {
    setUserData({ ...userData, ...data })
    setStep(step + 1)
  }

  // ... handlers handleBack, handleRestart

  const pages = [
    <Login onNext={handleNext} />,
    <Step1 data={userData} onNext={handleNext} onBack={handleBack} />,
    // ... resto de páginas
  ]

  return pages[step]
}
```

**Verificación:** Router funciona, step cambia correctamente

---

### 3. Crear páginas placeholder del wizard

**Patrón común para todas las páginas con form:**

```javascript
// Ejemplo: Step1.jsx
import { useState } from 'react'
import { validateStep1 } from '../data/mockData'

export default function Step1({ data, onNext, onBack }) {
  const [formData, setFormData] = useState({
    age: data.age || '',
    // ... más campos
  })
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateStep1(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    onNext(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {/* Campos del form */}
        <div className="flex gap-3 pt-4">
          <button type="button" onClick={onBack}>Atrás</button>
          <button type="submit">Siguiente</button>
        </div>
      </form>
    </div>
  )
}
```

**Páginas a crear:**

- **Login.jsx** - Sin form, solo botón "Comenzar Simulación"
- **Step1.jsx** - Inputs: age (number), retirementAge (number), monthlySalary (number)
- **Step2.jsx** - Inputs: monthlyExpenses (number), currentSavings (number), afp (select)
- **Step3.jsx** - Inputs: desiredPension (number), lifestyleExpectation (radio buttons)
- **Step4.jsx** - Checkboxes + inputs condicionales para inversiones/bienes raíces
- **Step5.jsx** - Placeholder foto, botón "Continuar sin foto"
- **Result.jsx** - Mostrar resultados + gráfico Recharts

**Estilos:** Usar Tailwind utility classes (bg-white, rounded-lg, shadow-lg, p-8, etc.)

**Verificación:** Todas las páginas renderizan sin errores

---

### 4. Implementar Result.jsx con Recharts

**Archivo:** `src/pages/Result.jsx`

**Estructura:**

```javascript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { calculatePension, calculateScore, formatCurrency, generateChartData } from '../data/mockData'

export default function Result({ data, onRestart }) {
  const { projectedPension, totalSavings, yearsToRetirement } = calculatePension(data)
  const score = calculateScore({ ...data, projectedPension })
  const chartData = generateChartData(data)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Score grande y destacado */}
      {/* Comparación pensión proyectada vs deseada (2 cards) */}
      {/* Métricas: cobertura %, años para retiro, total ahorrado */}

      {/* Gráfico Recharts */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
          <Tooltip formatter={(value) => formatCurrency(value)} />
          <Legend />
          <Line type="monotone" dataKey="savings" stroke="#FF8243" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>

      {/* Recomendaciones condicionales */}
      {/* Botón "Realizar Nueva Simulación" que llama onRestart */}
    </div>
  )
}
```

**Verificación:** Gráfico renderiza, cálculos son correctos

---

### 5. Crear tests para mockData.js

**Archivo:** `src/data/__tests__/mockData.test.js`

**Tests a implementar:**

```javascript
import { describe, it, expect } from 'vitest'
import { calculatePension, calculateScore, formatCurrency, generateChartData, validateStep1 } from '../mockData'

describe('calculatePension', () => {
  it('calcula pensión proyectada correctamente', () => {
    const result = calculatePension({
      age: 35, retirementAge: 65, monthlySalary: 1000000, currentSavings: 5000000
    })
    expect(result.projectedPension).toBeGreaterThan(0)
    expect(result.yearsToRetirement).toBe(30)
  })

  it('maneja edge case: edad actual mayor a retiro', () => { /* ... */ })
  it('incluye inversiones adicionales en cálculo', () => { /* ... */ })
})

describe('calculateScore', () => {
  it('retorna 10 cuando pensión proyectada >= deseada', () => { /* ... */ })
  it('retorna score entre 0-10', () => { /* ... */ })
})

// ... más tests para formatCurrency, generateChartData, validations
```

**Cobertura esperada:** 80%+ en mockData.js

**Verificación:**
```bash
npm run test:unit
# Debe pasar todos los tests
```

---

### 6. Crear test de integración del wizard

**Archivo:** `src/__tests__/wizard-flow.test.jsx`

**Tests a implementar:**

```javascript
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

describe('Wizard Flow Integration', () => {
  it('navega desde Login hasta Step1', () => {
    render(<App />)
    fireEvent.click(screen.getByText(/Comenzar Simulación/i))
    expect(screen.getByText(/Paso 1/i)).toBeInTheDocument()
  })

  it('completa el wizard completo y muestra resultado', async () => {
    // Llenar todos los steps y verificar que llega a Result
  })

  it('permite navegar hacia atrás sin perder datos', async () => {
    // Llenar Step1, avanzar a Step2, volver atrás, verificar datos persisten
  })
})
```

**Verificación:**
```bash
npm run test
# Debe pasar todos los tests (unit + integration)
```

---

## Testing Strategy

### Unit Tests

**Archivo:** `src/data/__tests__/mockData.test.js`

**Qué testear:**
- ✅ `calculatePension()` - Casos normales y edge cases (edad > retiro, inversiones, etc.)
- ✅ `calculateScore()` - Rangos 0-10, cobertura 100%+
- ✅ `formatCurrency()` - Formatos correctos, decimales
- ✅ `generateChartData()` - Longitud correcta, crecimiento progresivo
- ✅ Validaciones - Errores cuando datos inválidos, pasa con datos correctos

**Cobertura esperada:** 80%+ en mockData.js

### Integration Tests

**Archivo:** `src/__tests__/wizard-flow.test.jsx`

**Qué testear:**
- ✅ Navegación Login → Step1-5 → Result
- ✅ Persistencia de datos entre pasos
- ✅ Navegación backward sin pérdida de datos
- ✅ Validación de formularios previene avanzar con datos inválidos

### Manual Testing Checklist

- [ ] Login → Step1 funciona
- [ ] Llenar todos los pasos y ver resultado
- [ ] Score se calcula correctamente
- [ ] Gráfico Recharts renderiza
- [ ] Botón "Atrás" mantiene datos
- [ ] Validaciones muestran errores
- [ ] Botón "Reiniciar" vuelve a Login
- [ ] No hay errores en consola

---

## Edge Cases

### Cálculos

- **Edad actual > edad de retiro:** `yearsToRetirement` puede ser negativo, mostrar mensaje apropiado
- **Salario o ahorros = 0:** Permitir 0, calcular proyección solo con aportes futuros
- **Pensión proyectada muy baja (score < 3):** Mostrar mensaje de alerta
- **División por cero:** Validar que `desiredPension > 0` antes de calcular score

### Navegación

- **Usuario vuelve atrás y modifica datos:** Datos se actualizan correctamente en `userData`
- **Formulario con valores extremos:** Agregar validación min/max en HTML5

### UI

- **Números de moneda muy grandes:** Usar `formatCurrency` consistentemente
- **Errores de validación:** Mostrar claramente debajo de cada campo

---

## Acceptance Criteria

**Funcionalidad:**
- ✅ Router con useState funciona (step 0-6)
- ✅ Usuario puede navegar forward/backward
- ✅ Datos persisten entre pasos
- ✅ Validaciones funcionan en Steps 1-3
- ✅ Cálculo de pensión es matemáticamente correcto
- ✅ Score (0-10) se calcula según cobertura
- ✅ Gráfico Recharts muestra proyección de ahorros
- ✅ Botón "Reiniciar" vuelve a Login

**Calidad:**
- ✅ Tests unit pasan (mockData.js) - mínimo 10 tests
- ✅ Tests integration pasan (wizard-flow) - mínimo 3 tests
- ✅ Cobertura 80%+ en mockData.js
- ✅ No hay errores en consola
- ✅ No hay warnings de React

**UX:**
- ✅ Formularios usan HTML5 validation (required, type="number")
- ✅ Mensajes de error claros y específicos
- ✅ Botones "Atrás" y "Siguiente" claramente visibles
- ✅ Resultado muestra métricas clave y gráfico

---

## Validation Commands

**Ejecutar en orden para validar Fase 1:**

```bash
# 1. Verificar estructura de archivos
ls src/pages/
# Debe mostrar: Login.jsx, Step1-5.jsx, Result.jsx

ls src/data/
# Debe mostrar: mockData.js, __tests__/

# 2. Ejecutar tests unitarios
npm run test:unit
# Debe pasar todos los tests de mockData.js

# 3. Ejecutar todos los tests
npm run test
# Debe pasar todos los tests (unit + integration)

# 4. Build de producción
npm run build
# Debe completar sin errores ni warnings

# 5. Dev server
npm run dev
# Abrir http://localhost:5173/Siembra/
# Completar wizard completo manualmente

# 6. Manual testing checklist
# - Completar wizard completo
# - Verificar cálculos son razonables
# - Probar navegación backward
# - Verificar gráfico renderiza
# - Verificar botón Reiniciar
```

**Validación exitosa si:**
- ✅ Todos los tests pasan (mínimo 13 tests)
- ✅ Build completa sin errores
- ✅ Wizard navega Login → Result correctamente
- ✅ Cálculos muestran números razonables
- ✅ Gráfico Recharts renderiza
- ✅ No hay errores en consola

---

## Time Estimate

**Total: 2-3 horas**

- Crear mockData.js con funciones de cálculo: 30 min
- Modificar App.jsx (router): 15 min
- Crear páginas Login + Steps 1-5: 60 min
- Crear Result.jsx con Recharts: 30 min
- Crear tests (unit + integration): 45 min
- Testing manual + ajustes: 30 min

---

## Next Steps After Completion

Una vez completada la Fase 1, proceder a:

1. **Fase 2: Diseños Figma** - Extraer diseños con Figma MCP y reemplazar páginas placeholder
2. **Fase 3: Polish & Deploy** - Refinamientos, deploy a GitHub Pages

**Checkpoint Fase 1:**
- ✅ Wizard funcional con navegación
- ✅ Lógica de cálculo implementada y testeada
- ✅ Tests pasan (unit + integration)
- ✅ Gráfico básico funcional

**Todavía NO implementado (se hará en Fase 2):**
- ❌ Diseños finales de Figma
- ❌ Responsive perfecto
- ❌ Animaciones
- ❌ Upload de foto real
- ❌ Pixel-perfect styling

---

## Notes

- **Importante:** Fórmula de cálculo de pensión es simplificada para MVP (no es cálculo actuarial real)
- **Importante:** Step5 (foto) es placeholder - upload real se implementa en Fase 2
- **Importante:** Gráfico usa datos proyectados mock - no es predicción financiera real
- **Importante:** AFPs listadas son ejemplos - verificar nombres reales en Fase 2
- **Importante:** Este MVP es para demostración, no para decisiones financieras reales
- Tailwind utility classes están hardcoded - componentes reutilizables se crean en Fase 2 si es necesario
- Validaciones son básicas (HTML5 + custom) - validación exhaustiva no es prioridad para prototipo

---

**Regla de oro Fase 1:** Funcionalidad > Diseño. El wizard debe funcionar completamente antes de aplicar diseños de Figma.
