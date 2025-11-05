# Fase 0: Setup Inicial - Siembra Pension Simulator

## Feature Description

Inicialización completa del proyecto Siembra Pension Simulator: configurar entorno de desarrollo con Vite + React + Tailwind CSS, instalar dependencias necesarias, configurar despliegue en GitHub Pages, y establecer estructura base del proyecto.

## Problem Solving

**Problema:** Necesitamos un entorno de desarrollo configurado correctamente para comenzar a desarrollar el prototipo MVP en 2-3 días.

**Requerimientos:**
- Build tool rápido (Vite) con HMR instantáneo
- Tailwind CSS configurado con colores del diseño
- Recharts para visualizaciones
- GitHub Pages deploy automatizado
- Testing setup (Vitest + Testing Library)
- Estructura de carpetas lista

## User Story

```
Como desarrollador del prototipo Siembra,
Quiero tener el proyecto inicializado con todas las herramientas necesarias,
Para poder empezar a implementar las páginas del wizard inmediatamente sin perder tiempo en configuración.
```

## Solution & Approach

**Enfoque elegido:** Vite + React (JavaScript)

**Por qué:**
- ✅ Vite: HMR instantáneo (<100ms), build rápido, zero-config
- ✅ JavaScript (no TypeScript): Velocidad de desarrollo para MVP
- ✅ Tailwind CSS: Copy-paste friendly para código de Figma
- ✅ GitHub Pages: Hosting gratuito, deploy simple
- ✅ Vitest: Compatible con Vite, setup mínimo

**Alternativas descartadas:**
- ❌ Next.js: Más complejo, innecesario para static site
- ❌ TypeScript: Overhead para prototipo de 2-3 días
- ❌ Create React App: Build lento, herramienta deprecada

## Relevant Files & Documentation

### Project Files to Create

```
E:\Siembra/                 # Root del proyecto
├── .claude/
│   ├── CLAUDE.md          # Global rules (ya existe)
│   └── coding-prompt.md   # Este documento (ya existe)
├── designs/               # Screenshots Figma (ya existe)
├── src/
│   ├── main.jsx           # Entry point (Vite lo crea)
│   ├── App.jsx            # Router principal (modificaremos)
│   ├── index.css          # Tailwind imports (modificaremos)
│   ├── pages/             # A crear
│   │   └── .gitkeep
│   ├── components/        # A crear
│   │   └── .gitkeep
│   ├── data/              # A crear
│   │   └── .gitkeep
│   └── test/              # A crear
│       └── setup.js
├── public/                # Vite lo crea
├── .gitignore             # Actualizar
├── index.html             # Vite lo crea
├── package.json           # Vite lo crea, modificaremos
├── vite.config.js         # Vite lo crea, modificaremos
├── tailwind.config.js     # A crear
├── postcss.config.js      # A crear
└── vitest.config.js       # A crear
```

### Reference Documentation

- [Vite Getting Started](https://vitejs.dev/guide/)
  - Quick start commands
  - Project structure
  - Configuration options

- [Tailwind Installation - Vite](https://tailwindcss.com/docs/guides/vite)
  - Setup con PostCSS
  - Configuración de purge
  - Custom colors

- [Vitest Getting Started](https://vitest.dev/guide/)
  - Setup con Vite
  - React Testing Library integration
  - Configuration

- [GitHub Pages - Vite](https://vitejs.dev/guide/static-deploy.html#github-pages)
  - Base path configuration
  - Deployment workflow

## Implementation Plan

### Foundational Work

1. **Inicializar proyecto Vite**
   - Crear proyecto con template React
   - Verificar estructura generada
   - Confirmar que dev server inicia

2. **Configurar sistema de estilos**
   - Instalar Tailwind CSS + PostCSS
   - Configurar `tailwind.config.js` con colores del diseño
   - Configurar `postcss.config.js`
   - Importar Tailwind en `index.css`

3. **Setup de testing**
   - Instalar Vitest + Testing Library
   - Crear `vitest.config.js`
   - Configurar scripts en `package.json`

### Core Implementation

4. **Instalar dependencias del proyecto**
   - Recharts (charts)
   - gh-pages (deployment)
   - @testing-library/react + @testing-library/jest-dom

5. **Configurar GitHub Pages deployment**
   - Actualizar `vite.config.js` con base path
   - Agregar script `deploy` en `package.json`
   - Instalar `gh-pages` CLI tool

6. **Crear estructura de carpetas**
   - Carpetas: `src/pages`, `src/components`, `src/data`
   - Archivos `.gitkeep` para mantener estructura
   - Crear archivos base vacíos

### Integration Work

7. **Setup Git + GitHub**
   - Inicializar repositorio Git
   - Crear `.gitignore` apropiado
   - Crear repositorio en GitHub
   - Primer commit y push

8. **Verificación final**
   - `npm run dev` funciona
   - `npm run build` ejecuta sin errores
   - `npm run test` corre (sin tests aún)
   - Hot reload funciona

## Step-by-Step Task List

### 1. Crear Proyecto Vite

```bash
# Ejecutar en: E:\Siembra\
# Crear proyecto directamente en carpeta actual (no subcarpeta)
npm create vite@latest . -- --template react

# Instalar dependencias
npm install
```

**Verificación:**
```bash
npm run dev
# Debe abrir en http://localhost:5173
# Debe mostrar página de bienvenida Vite
```

**Nota:** El proyecto se crea directamente en `E:\Siembra\`, no en subcarpeta.

---

### 2. Instalar Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configurar `tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8243',    // Naranja AFP Siembra
        secondary: '#1E5BA8',  // Azul
      },
    },
  },
  plugins: [],
}
```

**Actualizar `src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Verificación:**
- Modificar `App.jsx` para usar clase Tailwind: `className="text-primary"`
- Debe verse naranja (#FF8243)

---

### 3. Instalar Dependencias del Proyecto

```bash
npm install recharts
npm install -D gh-pages
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Verificar en `package.json`:**
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "recharts": "^2.12.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.x.x",
    "@testing-library/react": "^14.x.x",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "gh-pages": "^6.x.x",
    "jsdom": "^24.x.x",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.0",
    "vitest": "^1.x.x"
  }
}
```

---

### 4. Configurar Vitest

**Crear `vitest.config.js`:**
```javascript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
```

**Crear `src/test/setup.js`:**
```javascript
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(() => {
  cleanup()
})
```

---

### 5. Configurar GitHub Pages Deployment

**Actualizar `vite.config.js`:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/siembra/',  // Nombre del repo de GitHub
})
```

**Actualizar `package.json` scripts:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:unit": "vitest run src/data",
    "test:watch": "vitest",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

---

### 6. Crear Estructura de Carpetas

```powershell
# Desde raíz del proyecto (E:\Siembra\)
# Crear carpetas
New-Item -ItemType Directory -Force -Path src/pages, src/components, src/data, src/test

# Crear archivos .gitkeep
New-Item -ItemType File -Force -Path src/pages/.gitkeep, src/components/.gitkeep, src/data/.gitkeep
```

**Alternativa (cmd):**
```cmd
mkdir src\pages src\components src\data src\test
echo. > src\pages\.gitkeep
echo. > src\components\.gitkeep
echo. > src\data\.gitkeep
```

**Nota:** `public/` ya existe del setup de Vite.

**Crear archivos base:**

**`src/App.jsx`** (placeholder):
```jsx
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
```

**`src/main.jsx`** (ya existe, verificar):
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

### 7. Setup Git + GitHub

**Crear `.gitignore`:**
```
# dependencies
node_modules/

# production
dist/

# local env
.env
.env.local

# logs
npm-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
```

**Inicializar Git:**
```bash
git init
git add .
git commit -m "feat: initial setup - Vite + React + Tailwind + Vitest"
```

**Crear repo en GitHub:**
```bash
# Opción 1: Con GitHub CLI (si está instalado)
gh repo create siembra --public --source=. --remote=origin --push

# Opción 2: Manual
# 1. Ir a github.com/new
# 2. Crear repo "siembra" (público)
# 3. Copiar URL
git remote add origin https://github.com/TU-USUARIO/siembra.git
git branch -M main
git push -u origin main
```

**Nota:** Nombre del repo: `siembra` (sin `-demo`), ya que el proyecto está en carpeta `Siembra`.

---

### 8. Verificación Final

**Ejecutar todos los comandos clave:**

```bash
# Dev server (debe iniciar en <1 segundo)
npm run dev
# Abrir http://localhost:5173
# Debe mostrar "Siembra Pension Simulator" en naranja

# Build (debe completar sin errores)
npm run build
# Verificar que carpeta dist/ se creó

# Preview del build
npm run preview
# Debe abrir preview del build

# Tests (debe ejecutar pero sin tests aún)
npm run test
# Debe mostrar "No test files found"

# Verificar hot reload
# Modificar App.jsx, cambiar texto
# Debe actualizarse automáticamente en navegador
```

**Checklist de verificación:**
- [ ] `npm run dev` inicia en <2 segundos
- [ ] Página muestra título en color naranja (#FF8243)
- [ ] Tailwind clases funcionan
- [ ] `npm run build` completa sin errores
- [ ] `npm run test` ejecuta (aunque no haya tests)
- [ ] Hot reload funciona al editar archivos
- [ ] Repo está en GitHub
- [ ] `.gitignore` ignora `node_modules/` y `dist/`

---

## Testing Strategy

### Unit Tests

**Para Fase 0:** No hay tests específicos aún, pero verificamos que el sistema de testing funciona.

**Test de prueba en `src/test/sample.test.js`:**
```javascript
import { describe, it, expect } from 'vitest'

describe('Vitest Setup', () => {
  it('should run tests', () => {
    expect(1 + 1).toBe(2)
  })

  it('should have testing library', () => {
    expect(typeof expect).toBe('function')
  })
})
```

**Ejecutar:**
```bash
npm run test
# Debe pasar 2 tests
```

### Integration Tests

**Para Fase 0:** Verificar que React se renderiza correctamente.

**Test en `src/test/App.test.jsx`:**
```javascript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText(/Siembra Pension Simulator/i)).toBeInTheDocument()
  })

  it('shows setup complete message', () => {
    render(<App />)
    expect(screen.getByText(/Fase 0 Setup Completo/i)).toBeInTheDocument()
  })
})
```

**Ejecutar:**
```bash
npm run test
# Debe pasar 4 tests totales (2 + 2)
```

### End-to-End Verification

**Manual testing checklist:**
1. [ ] Navegar a `http://localhost:5173`
2. [ ] Ver título "Siembra Pension Simulator" en naranja
3. [ ] Abrir DevTools, no debe haber errores en consola
4. [ ] Modificar `App.jsx`, página se actualiza automáticamente
5. [ ] Build genera archivos en `dist/`
6. [ ] Preview muestra sitio correctamente

---

## Edge Cases

### Build Issues

**Edge case:** `npm run build` falla con errores de módulos
- **Solución:** Eliminar `node_modules/` y reinstalar:
  ```powershell
  Remove-Item -Recurse -Force node_modules
  npm install
  ```

**Edge case:** HMR no funciona, página no se actualiza
- **Solución:** Reiniciar dev server, limpiar cache:
  ```powershell
  Remove-Item -Recurse -Force node_modules\.vite
  # Reiniciar dev server
  ```

### Git Issues

**Edge case:** `.git` ya existe en carpeta padre
- **Solución:** Mover a subcarpeta limpia o eliminar `.git` existente

**Edge case:** Push a GitHub falla con authentication
- **Solución:** Usar GitHub CLI (`gh auth login`) o configurar SSH keys

### Tailwind Issues

**Edge case:** Clases Tailwind no aplican estilos
- **Solución:** Verificar `content` en `tailwind.config.js` incluye `./src/**/*.{js,jsx}`
- **Solución:** Verificar que `index.css` importa `@tailwind` directives
- **Solución:** Reiniciar dev server

---

## Acceptance Criteria

- ✅ Proyecto Vite inicializado y corriendo
- ✅ Tailwind CSS configurado con colores custom (primary, secondary)
- ✅ Recharts instalado (versión ^2.12.0)
- ✅ gh-pages instalado para deployment
- ✅ Vitest + Testing Library configurados
- ✅ Scripts en package.json: dev, build, test, deploy
- ✅ Estructura de carpetas creada: pages/, components/, data/
- ✅ Git inicializado con .gitignore apropiado
- ✅ Repositorio en GitHub creado y pusheado
- ✅ `npm run dev` inicia servidor en <2 segundos
- ✅ Hot reload funciona correctamente
- ✅ `npm run build` completa sin errores
- ✅ `npm run test` ejecuta tests de prueba
- ✅ Colores Tailwind custom funcionan
- ✅ No hay errores en consola del navegador

---

## Validation Commands

**Ejecutar en orden para validar setup completo:**

```bash
# 1. Verificar versiones instaladas
node --version    # Debe ser v18+
npm --version     # Debe ser v9+

# 2. Verificar dependencias
npm list --depth=0
# Debe mostrar react, react-dom, recharts, etc.

# 3. Dev server
npm run dev
# Debe iniciar sin errores, abrir http://localhost:5173
# Ctrl+C para detener

# 4. Build
npm run build
# Debe completar sin errores
# Verificar que dist/ existe y contiene archivos

# 5. Preview
npm run preview
# Debe servir el build, abrir http://localhost:4173

# 6. Tests
npm run test
# Debe ejecutar y pasar todos los tests

# 7. Verificar Git
git status
# Debe mostrar "On branch main, nothing to commit"

git remote -v
# Debe mostrar origin apuntando a GitHub

# 8. Verificar estructura (PowerShell)
Get-ChildItem src/
# Debe mostrar: pages/, components/, data/, App.jsx, main.jsx, index.css

# 9. Verificar config files (PowerShell)
Get-Content vite.config.js
Get-Content tailwind.config.js
Get-Content vitest.config.js
Get-Content package.json

# 10. Zero regressions - verificación manual
# Abrir http://localhost:5173 en navegador
# Verificar que muestra "Siembra Pension Simulator" en naranja
# Verificar que no hay errores en consola
```

**Validación final exitosa si:**
- ✅ Todos los comandos ejecutan sin errores
- ✅ Dev server inicia en <2 segundos
- ✅ Build genera dist/ con archivos
- ✅ Tests pasan (mínimo 2 tests de setup)
- ✅ Git repo conectado a GitHub
- ✅ Estructura de carpetas completa
- ✅ No warnings en consola

---

## Time Estimate

**Total: 30 minutos**

- Crear proyecto Vite: 2 min
- Instalar Tailwind: 3 min
- Instalar dependencias: 2 min
- Configurar Vitest: 3 min
- Configurar vite.config (base path): 2 min
- Crear estructura carpetas: 2 min
- Crear archivos base: 5 min
- Setup Git + GitHub: 5 min
- Verificación + tests: 6 min

**Blocker potencial:** Configurar GitHub repo puede tomar +5-10 min si no hay GitHub CLI configurado.

---

## Next Steps After Completion

Una vez completada la Fase 0, proceder a:

1. **Fase 1: Fundamentos** - Implementar router básico y mock data
2. **Fase 2: Extracción Figma** - Extraer diseños con Figma MCP
3. **Continuar según plan** en documento de planificación general

---

## Notes

- **Importante:** El `base` en `vite.config.js` debe ser `/siembra/` (nombre del repo GitHub)
- **Importante:** `.gitignore` debe incluir `node_modules/` y `dist/`
- **Importante:** El proyecto se crea directamente en `E:\Siembra\`, no en subcarpeta
- **Windows:** Usar PowerShell para comandos como `New-Item`, `Get-Content`, etc.
- Este setup es específico para prototipo MVP, no optimizado para producción
- Tailwind está configurado para purge automático en build
- Vitest usa jsdom para simular navegador en tests
