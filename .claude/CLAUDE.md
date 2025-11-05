# Siembra Pension Simulator - Development Rules

## Project Context

**Prototipo demo MVP** - Simulador de pensiones AFP Siembra. Objetivo: diseños Figma → prototipo funcional en **2-3 días**.

**Hosting:** GitHub Pages (gratis)
**Source:** Figma via MCP (`XOYvCWN3S6KkiVv6Em8iHE`)

---

## Tech Stack

```javascript
{
  "framework": "Vite + React (JavaScript)",
  "styling": "Tailwind CSS",
  "state": "useState (simple)",
  "data": "Mock data hardcoded",
  "charts": "Recharts",
  "routing": "Conditional rendering",
  "hosting": "GitHub Pages"
}
```

---

## Core Principles

1. **SPEED > PERFECTION** - Es un prototipo demo, no producción
2. **KISS** - Simple > Complejo. useState > Zustand. Props > Context.
3. **YAGNI** - No agregues nada "por si acaso"
4. **FIGMA = SOURCE OF TRUTH** - Copy-paste código de Figma MCP directo

---

## Architecture

```
src/
├── App.jsx           # Router (useState step)
├── pages/            # 1 archivo = 1 pantalla Figma
├── components/       # Solo si se usa 3+ veces
└── data/
    └── mockData.js   # Datos + lógica cálculo
```

---

## Rules

### DO ✅

- Copy-paste código de Figma MCP
- Mock data hardcoded en `mockData.js`
- Tailwind directo, no abstracciones
- Props drilling simple (1 nivel)
- HTML5 validation (required, type="email")
- `console.log` para debug
- Commits directos a main

### DON'T ❌

- NO usar TypeScript
- NO usar React Router / Zustand / Redux
- NO crear componentes "por si acaso"
- NO validación compleja (Zod, etc)
- NO error boundaries
- NO optimizaciones prematuras

---

## File Conventions

```
Components: PascalCase.jsx  (Login.jsx, Paso1.jsx)
Utils:      camelCase.js    (mockData.js)
Config:     kebab-case.js   (vite.config.js)
```

---

## Key Configuration

### vite.config.js
```javascript
export default defineConfig({
  base: '/siembra-demo/'  // Tu repo name
})
```

### tailwind.config.js
```javascript
theme: {
  extend: {
    colors: {
      primary: '#FF8243',
      secondary: '#1E5BA8'
    }
  }
}
```

---

## Workflow

```bash
npm run dev        # Desarrollo
npm run test       # Run tests
npm run build      # Build
npm run deploy     # → GitHub Pages
```

**Iteración:** Figma → Copy JSX → Ajustar handlers → Test → Deploy (~20min/página)

---

## Component Pattern

```jsx
export default function PageName({ data, onNext, onBack }) {
  const [local, setLocal] = useState(data.field || defaultValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext({ local })
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

---

## Testing

### Setup

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

**Configuración mínima:** `vitest.config.js`

### Unit Tests

**QUÉ testear:**
- ✅ Lógica de negocio en `mockData.js`:
  - `calculatePension()` - casos normales y edge cases
  - `formatCurrency()` - formatos correctos
  - Validaciones de datos

**QUÉ NO testear:**
- ❌ Componentes UI (es prototipo, testing manual suficiente)
- ❌ Estilos Tailwind
- ❌ Navegación simple

**Estructura:**
```
src/data/__tests__/
└── mockData.test.js
```

**Ejemplo:**
```javascript
import { describe, it, expect } from 'vitest'
import { calculatePension } from '../mockData'

describe('calculatePension', () => {
  it('calcula pensión proyectada correctamente', () => {
    const result = calculatePension({
      age: 35,
      retirementAge: 65,
      salary: 50000,
      currentSavings: 100000
    })

    expect(result.projectedPension).toBeGreaterThan(0)
    expect(result.score).toBeGreaterThanOrEqual(0)
    expect(result.score).toBeLessThanOrEqual(10)
  })
})
```

### Integration Tests

**QUÉ testear:**
- ✅ Flujo completo del wizard (navegación)
- ✅ Datos persisten entre pasos
- ✅ Cálculos se ejecutan correctamente

**Estructura:**
```
src/__tests__/
└── wizard-flow.test.js
```

**Ejemplo:**
```javascript
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('Wizard Flow', () => {
  it('navega de login a paso 1', () => {
    render(<App />)

    const submitBtn = screen.getByText(/comenzar/i)
    fireEvent.click(submitBtn)

    expect(screen.getByText(/información personal/i)).toBeInTheDocument()
  })
})
```

### Comandos

```bash
npm run test           # Run all tests
npm run test:unit      # Solo unit tests
npm run test:watch     # Watch mode
```

**package.json scripts:**
```json
{
  "scripts": {
    "test": "vitest run",
    "test:unit": "vitest run src/data",
    "test:watch": "vitest"
  }
}
```

### Edge Cases a Testear

**Calculadora:**
- [ ] Edad actual > edad de retiro
- [ ] Salario = 0
- [ ] Gastos > Ingresos
- [ ] Valores negativos
- [ ] Números muy grandes (overflow)

**Navegación:**
- [ ] Back sin perder datos
- [ ] Forward con datos incompletos
- [ ] Saltar pasos directamente

### Cobertura Mínima

**No necesitamos 100% coverage** (es prototipo), pero:
- ✅ 80%+ coverage en `mockData.js` (lógica crítica)
- ✅ Tests de flujo principal (happy path)
- ✅ Tests de edge cases críticos (edad inválida, etc.)

---

## Success Criteria

- ✅ Navegación funciona (login → resultado)
- ✅ Se parece a Figma (~80%)
- ✅ Cálculos muestran números razonables
- ✅ Charts renderizan
- ✅ Tests unit pasan (calculadora)
- ✅ Tests integración pasan (flujo wizard)
- ✅ Live en GitHub Pages
- ✅ Completado en 2-3 días

**NO necesario:** Pixel-perfect, validación exhaustiva, responsive perfecto, 100% coverage, animaciones complejas

---

## Links

- **Vite Docs:** https://vitejs.dev/guide/
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Recharts Docs:** https://recharts.org/en-US/api
- **React Docs:** https://react.dev/learn
- **Vitest Docs:** https://vitest.dev/guide/
- **Testing Library:** https://testing-library.com/docs/react-testing-library/intro

---

**Regla de oro:** Cuando dudes entre simple y complejo, elige simple. Es un prototipo demo de 2-3 días.