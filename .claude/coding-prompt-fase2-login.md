# Fase 2: Login Screen - Siembra Pension Simulator

## Feature Description

Implementar la pantalla de Login con los estilos exactos del diseño HTML, incluyendo backgrounds con gradientes, card flotante, logos, campos de formulario estilizados, botones, y elementos decorativos. El HTML de `designs/login.html` es la única fuente de verdad.

## Problem Solving

**Problema:** La pantalla de Login de Fase 1 es funcional pero sin estilos. Necesitamos aplicar el diseño exacto del HTML para que la primera impresión del usuario sea profesional y coincida con la identidad visual de AFP Siembra.

**Requerimientos:**
- Background con 2 gradientes radiales (azul y coral/naranja)
- Imagen de fondo (familia feliz) - desde directorio `img/`
- Card flotante blanco con shadow y border-radius
- Logos de Siembra y Alcanza con separador vertical - desde directorio `img/`
- Tipografía Noto Sans con pesos específicos
- Campos de formulario con estilos custom
- Botón naranja principal con border-radius completo
- Link secundario azul
- Footer con información legal
- Chat bubble flotante naranja
- **Responsive design:** Respetar diseño desktop pero adaptarse a dispositivos móviles

## User Story

```
Como usuario nuevo del simulador,
Quiero ver una pantalla de bienvenida profesional y atractiva,
Para sentir confianza en el proceso y estar motivado a comenzar mi evaluación.
```

## Solution & Approach

**Enfoque elegido:** Implementar estilos con Tailwind CSS + estilos inline donde sea necesario para replicar exactamente el HTML

**Por qué:**
- ✅ Tailwind permite implementación rápida de la mayoría de estilos
- ✅ Estilos inline para valores específicos (gradientes personalizados)
- ✅ Mantiene consistencia con el resto del proyecto
- ✅ Fácil de ajustar en futuras iteraciones

## Relevant Files & Documentation

### Files to Modify

```
E:\Siembra/
├── src/
│   ├── pages/
│   │   └── Login.jsx              # Modificar: aplicar estilos exactos del HTML
│   ├── data/
│   │   └── mockData.js            # Verificar/corregir campos si es necesario
│   └── assets/                    # Crear si no existe
│       └── images/                # Para logos
└── public/
    └── images/                    # Alternativa para assets estáticos
```

### Assets Disponibles (Directorio: `img/`)

✅ Imágenes ya disponibles en `E:\Siembra\img\`:
- `login-bg.jpg` - Imagen de fondo (familia feliz)
- `login-logo-siembra.png` - Logo AFP Siembra
- `login-logo-alcanza.png` - Logo Alcanza

**Paths de acceso en código:**
```jsx
// Vite sirve la carpeta img/ desde la raíz
<img src="/img/login-bg.jpg" alt="Background" />
<img src="/img/login-logo-siembra.png" alt="AFP Siembra" />
<img src="/img/login-logo-alcanza.png" alt="Alcanza" />
```

### Reference Documentation

- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Utilities
- [Tailwind Gradients](https://tailwindcss.com/docs/gradient-color-stops) - Radial gradients
- HTML source: `designs/login.html` (ÚNICA FUENTE DE VERDAD)

## Implementation Plan

### 1. Análisis del HTML Source (designs/login.html)

**Estructura identificada:**

```html
<div> <!-- Container principal 1440x1024 -->
  <!-- Background gradiente azul (top-left) -->
  <!-- Background gradiente coral (bottom-right) -->
  <!-- Imagen de fondo -->

  <div> <!-- Card blanco flotante 566px + padding -->
    <!-- Logos con separador -->
    <!-- Título con pesos tipográficos mixtos -->
    <!-- 4 campos de formulario -->
    <!-- Texto legal -->
    <!-- Botón principal naranja -->
    <!-- Link secundario azul -->
  </div>

  <!-- Footer -->
  <!-- Chat bubble flotante -->
</div>
```

**Colores exactos extraídos:**
```css
/* Backgrounds */
--gradient-blue: radial-gradient(ellipse 50% 50%, #9EC2FF 0%, rgba(255,255,255,0) 100%)
--gradient-coral: radial-gradient(ellipse 50% 50%, #FFB09E 0%, rgba(255,255,255,0) 100%)

/* UI Colors */
--primary-orange: #FF7933
--primary-blue: #015FB8
--chat-yellow: #FDB216
--text-dark: #4C4C4C
--text-placeholder: #B3B3B3
--border-grey: #E4E6EE
--white: #FFFFFF
--shadow: rgba(0, 0, 0, 0.30)
```

**Tipografía:**
- Font: Noto Sans
- Título "Bienvenido:": 40px, weight 900
- Título "al simulador...": 40px, weight 300, letter-spacing 0.8px
- Labels: 16px, weight 400, line-height 20.8px
- Inputs: 14px, weight 400, line-height 18.2px
- Botón: 20px, weight 700, line-height 20px
- Link: 16px, weight 400, underline

**Espaciados/Dimensiones:**
- Card: width 566px, padding 42px, border-radius 24px
- Shadow: 0px 13px 24px rgba(0,0,0,0.3)
- Gaps entre elementos: 16px, 24px, 40px
- Input padding: 16px
- Input border-radius: 8px
- Botón border-radius: 75.31px (casi circular)

---

### 2. Correcciones al Modelo de Datos (mockData.js)

**Revisar campos según HTML:**

Del HTML extraemos que los campos son:
1. Nombre (text)
2. Documento de identidad (text con formato "000-0000000-0")
3. Fecha de nacimiento (date picker)
4. Correo (email)

**Verificar en `defaultUserData`:**

```javascript
export const defaultUserData = {
  // Login - CORRECTO según HTML
  name: '',
  documentId: '',      // ✅ Coincide
  birthDate: '',       // ✅ Coincide
  email: '',           // ✅ Coincide

  // ... resto de campos
}
```

**✅ No requiere correcciones** - Los campos ya están correctos en el plan de Fase 1.

**Agregar función helper para calcular edad:**

```javascript
// Helper: Calcular edad desde fecha de nacimiento
export function calculateAge(birthDate) {
  if (!birthDate) return null
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}
```

---

### 3. Implementación de Login.jsx con Estilos Exactos

**Archivo:** `src/pages/Login.jsx`

**Estructura completa:**

```jsx
import { useState } from 'react'
import { calculateAge } from '../data/mockData'

export default function Login({ onNext }) {
  const [formData, setFormData] = useState({
    name: '',
    documentId: '',
    birthDate: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const age = calculateAge(formData.birthDate)
    onNext({ ...formData, age })
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Background Gradient Azul (top-left) */}
      <div
        className="absolute w-[1685px] h-[1685px] rounded-full opacity-40"
        style={{
          left: '-827px',
          top: '-841px',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #9EC2FF 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      {/* Background Gradient Coral (bottom-right) */}
      <div
        className="absolute w-[1685px] h-[1685px] rounded-full opacity-40"
        style={{
          left: '566px',
          top: '225px',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #FFB09E 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      {/* Background Image */}
      <img
        src="/img/login-bg.jpg"
        alt="Familia feliz"
        className="absolute left-0 top-0 w-full h-full object-cover"
      />

      {/* Card Flotante */}
      <div
        className="absolute bg-white rounded-3xl shadow-2xl"
        style={{
          width: '566px',
          padding: '30px 42px',
          left: '774px',
          top: '61.5px',
          boxShadow: '0px 13px 24px rgba(0, 0, 0, 0.30)',
          borderRadius: '24px'
        }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Header: Logos */}
          <div className="flex items-center justify-center gap-2.5 py-6">
            <img
              src="/img/login-logo-siembra.png"
              alt="AFP Siembra"
              className="w-[124px] h-[61px]"
            />
            <div className="w-10 h-0 rotate-90 border border-[#E4E6EE]" />
            <img
              src="/img/login-logo-alcanza.png"
              alt="Alcanza"
              className="w-[169px] h-[55px]"
            />
          </div>

          {/* Título */}
          <h1 className="text-[#4C4C4C] text-[40px] leading-[40px]">
            <span className="font-black">Bienvenido:</span>
            <span className="font-light tracking-[0.8px]">
              {' '}al simulador para tu retiro
            </span>
          </h1>

          {/* Campos del Formulario */}
          <div className="flex flex-col gap-2">
            {/* Campo: Nombre */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 flex items-center justify-between text-[#4C4C4C] text-base leading-[20.8px]">
                ¿Cuál es tu nombre?
                <span className="text-[#4C4C4C] opacity-60 text-base">ℹ️</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alejandra"
                required
                className="w-full px-4 py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933]"
              />
            </div>

            {/* Campos: Documento + Fecha (fila) */}
            <div className="flex gap-6">
              {/* Campo: Documento */}
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1 text-[#4C4C4C] text-base leading-[20.8px]">
                  Documento de identidad:
                  <span className="text-[#4C4C4C] opacity-60 text-base">ℹ️</span>
                </label>
                <input
                  type="text"
                  name="documentId"
                  value={formData.documentId}
                  onChange={handleChange}
                  placeholder="000-0000000-0"
                  required
                  className="w-full px-4 py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933]"
                />
              </div>

              {/* Campo: Fecha */}
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 text-[#4C4C4C] text-base leading-[20.8px]">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933]"
                />
              </div>
            </div>

            {/* Campo: Correo */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C] text-base leading-[20.8px]">
                ¿Cuál es tu correo?
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Introduce tu correo"
                required
                className="w-full px-4 py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933]"
              />
            </div>
          </div>

          {/* Texto Legal */}
          <p className="text-center text-[#4C4C4C] text-base leading-[20.8px]">
            Al presionar el botón de{' '}
            <span className="font-bold">"Comenzar mi evaluación ahora"</span>{' '}
            aceptas nuestro{' '}
            <a href="#" className="text-[#FF7933] underline">términos y condiciones</a>{' '}
            de nuestro{' '}
            <span className="font-bold">"Simulador de pensión 360"</span>
          </p>

          {/* Botones */}
          <div className="flex flex-col gap-4">
            {/* Botón Principal */}
            <button
              type="submit"
              className="w-full px-6 py-6 bg-[#FF7933] text-white text-xl font-bold leading-5 text-center rounded-full hover:bg-[#FF6820] transition-colors"
            >
              Comenzar mi evaluación ahora
            </button>

            {/* Link Secundario */}
            <a
              href="#"
              className="w-full px-6 py-2 text-[#015FB8] text-base text-center underline hover:text-[#014A8F] transition-colors"
            >
              Glosario y metodología
            </a>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] flex items-center justify-center gap-2.5 text-white text-sm leading-[18.2px]">
        <span>Términos & condiciones</span>
        <span>•</span>
        <span>© 2025 AFP Siembra. Todos los derechos reservados.</span>
        <span>•</span>
        <span>Su información está protegida y será utilizada únicamente para generar su plan de pensiones personalizado</span>
      </div>

      {/* Chat Bubble Flotante */}
      <div
        className="absolute bottom-[100px] right-[32px] w-[73px] h-[73px] bg-[#FDB216] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#FCA500] transition-colors shadow-lg"
      >
        <span className="text-white text-[22px]">💬</span>
      </div>
    </div>
  )
}
```

**Detalles clave de implementación:**

1. **Backgrounds con gradientes:**
   - Usar style inline para radial-gradient (no soportado directamente en Tailwind)
   - Posiciones absolutas exactas del HTML

2. **Card flotante:**
   - Posición absoluta con left/top exactos
   - Shadow con style inline (valor específico)

3. **Tipografía:**
   - Usar font-black (900) y font-light (300) para título
   - Tamaños exactos con clases arbitrarias `text-[40px]`

4. **Inputs:**
   - Border color exacto `#E4E6EE`
   - Placeholder color `#B3B3B3`
   - Focus ring con color primary

5. **Botón:**
   - Border-radius completo (rounded-full)
   - Color exacto `#FF7933`

6. **Responsive:**
   - Por ahora diseño fijo 1440x1024 (responsive en Fase 3)

---

### 4. Implementar Responsive Design

**Estrategia:** Mobile-first con breakpoints de Tailwind

**Breakpoints:**
- `sm`: 640px (tablet pequeño)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop pequeño)
- `xl`: 1280px (desktop)
- `2xl`: 1536px (desktop grande)

**Ajustes por dispositivo:**

#### Mobile (< 768px):
- **Background:** Mantener gradientes pero ajustar tamaño
- **Imagen de fondo:** Ocultar o cambiar a portrait
- **Card:**
  - width: 100% con padding lateral 16px
  - Posición: relative (centrado vertical)
  - Padding interno reducido a 24px
- **Logos:** Escalar proporcionalmente o apilar verticalmente
- **Título:** Reducir a 28px
- **Campos:** Stack vertical siempre (documento + fecha en columna)
- **Footer:** Texto más pequeño, stack vertical
- **Chat bubble:** Mantener fixed bottom-right pero más pequeño

#### Tablet (768px - 1023px):
- **Card:** width 80% max 600px, centrado
- **Logos:** Mantener horizontal
- **Título:** 32px
- **Campos:** Mantener layout original

#### Desktop (>= 1024px):
- **Diseño original del HTML** (posición absoluta, tamaños fijos)

**Código responsive actualizado:**

```jsx
export default function Login({ onNext }) {
  // ... state

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Background Gradients - ajustados para responsive */}
      <div
        className="absolute w-[1200px] h-[1200px] lg:w-[1685px] lg:h-[1685px] rounded-full opacity-40"
        style={{
          left: '-600px',
          top: '-600px',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #9EC2FF 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      <div
        className="absolute w-[1200px] h-[1200px] lg:w-[1685px] lg:h-[1685px] rounded-full opacity-40"
        style={{
          right: '-600px',
          bottom: '-400px',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #FFB09E 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      {/* Background Image - oculta en mobile */}
      <img
        src="/img/login-bg.jpg"
        alt="Familia feliz"
        className="hidden lg:block absolute left-0 top-0 w-full h-full object-cover"
      />

      {/* Card Flotante - responsive */}
      <div className="
        relative lg:absolute
        mx-4 my-8 lg:mx-0 lg:my-0
        lg:left-[774px] lg:top-[61.5px]
        w-auto lg:w-[566px]
        p-6 lg:p-[42px]
        bg-white rounded-3xl lg:rounded-[24px]
        shadow-lg lg:shadow-login-card
      ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-10">
          {/* Logos - responsive */}
          <div className="flex items-center justify-center gap-2.5 py-4 lg:py-6">
            <img
              src="/img/login-logo-siembra.png"
              alt="AFP Siembra"
              className="w-[100px] lg:w-[124px] h-auto"
            />
            <div className="w-10 h-0 rotate-90 border border-[#E4E6EE]" />
            <img
              src="/img/login-logo-alcanza.png"
              alt="Alcanza"
              className="w-[140px] lg:w-[169px] h-auto"
            />
          </div>

          {/* Título - responsive */}
          <h1 className="text-[#4C4C4C] text-[28px] lg:text-[40px] leading-tight lg:leading-[40px]">
            <span className="font-black">Bienvenido:</span>
            <span className="font-light tracking-[0.8px]">
              {' '}al simulador para tu retiro
            </span>
          </h1>

          {/* Campos - responsive: stack en mobile */}
          <div className="flex flex-col gap-2">
            {/* Nombre */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 flex items-center justify-between text-[#4C4C4C] text-base leading-[20.8px]">
                ¿Cuál es tu nombre?
                <span className="text-[#4C4C4C] opacity-60 text-base">ℹ️</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alejandra"
                required
                className="w-full px-4 py-3 lg:py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933]"
              />
            </div>

            {/* Documento + Fecha - stack en mobile, row en desktop */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1 text-[#4C4C4C] text-base leading-[20.8px]">
                  Documento de identidad:
                  <span className="text-[#4C4C4C] opacity-60 text-base">ℹ️</span>
                </label>
                <input
                  type="text"
                  name="documentId"
                  value={formData.documentId}
                  onChange={handleChange}
                  placeholder="000-0000000-0"
                  required
                  className="w-full px-4 py-3 lg:py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933]"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 text-[#4C4C4C] text-base leading-[20.8px]">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 lg:py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933]"
                />
              </div>
            </div>

            {/* Correo */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C] text-base leading-[20.8px]">
                ¿Cuál es tu correo?
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Introduce tu correo"
                required
                className="w-full px-4 py-3 lg:py-4 bg-white rounded-lg border border-[#E4E6EE] text-sm leading-[18.2px] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#FF7933]"
              />
            </div>
          </div>

          {/* Texto Legal - texto más pequeño en mobile */}
          <p className="text-center text-[#4C4C4C] text-sm lg:text-base leading-[18px] lg:leading-[20.8px]">
            Al presionar el botón de{' '}
            <span className="font-bold">"Comenzar mi evaluación ahora"</span>{' '}
            aceptas nuestro{' '}
            <a href="#" className="text-[#FF7933] underline">términos y condiciones</a>{' '}
            de nuestro{' '}
            <span className="font-bold">"Simulador de pensión 360"</span>
          </p>

          {/* Botones */}
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full px-6 py-4 lg:py-6 bg-[#FF7933] text-white text-lg lg:text-xl font-bold leading-5 text-center rounded-full hover:bg-[#FF6820] transition-colors"
            >
              Comenzar mi evaluación ahora
            </button>

            <a
              href="#"
              className="w-full px-6 py-2 text-[#015FB8] text-base text-center underline hover:text-[#014A8F] transition-colors"
            >
              Glosario y metodología
            </a>
          </div>
        </form>
      </div>

      {/* Footer - responsive: stack en mobile */}
      <div className="
        absolute bottom-0 left-0 w-full
        px-4 py-6 lg:h-[100px]
        flex flex-col lg:flex-row
        items-center justify-center
        gap-1 lg:gap-2.5
        text-white text-xs lg:text-sm
        leading-tight lg:leading-[18.2px]
        text-center
      ">
        <span>Términos & condiciones</span>
        <span className="hidden lg:inline">•</span>
        <span>© 2025 AFP Siembra</span>
        <span className="hidden lg:inline">•</span>
        <span className="hidden md:inline">Su información está protegida</span>
      </div>

      {/* Chat Bubble - más pequeño en mobile */}
      <div className="
        fixed
        bottom-4 right-4 lg:bottom-[100px] lg:right-[32px]
        w-[60px] h-[60px] lg:w-[73px] lg:h-[73px]
        bg-[#FDB216] rounded-full
        flex items-center justify-center
        cursor-pointer hover:bg-[#FCA500]
        transition-colors shadow-lg
        z-50
      ">
        <span className="text-white text-lg lg:text-[22px]">💬</span>
      </div>
    </div>
  )
}
```

**Verificación responsive:**
```bash
# Test en diferentes tamaños
# Mobile: 375px, 414px
# Tablet: 768px, 1024px
# Desktop: 1280px, 1440px, 1920px
```

---

### 5. Actualizar Tailwind Config (si es necesario)

**Archivo:** `tailwind.config.js`

**Agregar colores custom:**

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
        primary: '#FF8243',      // Color original del proyecto
        secondary: '#1E5BA8',    // Color original del proyecto
        // Colores específicos de Login (del HTML)
        'siembra-orange': '#FF7933',
        'siembra-blue': '#015FB8',
        'siembra-yellow': '#FDB216',
        'siembra-grey': '#4C4C4C',
        'siembra-grey-light': '#B3B3B3',
        'siembra-border': '#E4E6EE',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        'login-card': '0px 13px 24px rgba(0, 0, 0, 0.30)',
      },
    },
  },
  plugins: [],
}
```

**Nota:** Tailwind ya incluye Noto Sans en la pila de fuentes por defecto, pero podemos asegurarnos importándola desde Google Fonts.

---

### 6. Verificar Assets en Directorio `img/`

**Ya configurado por el usuario:**

✅ `tailwind.config.js` - Colores custom agregados
✅ `index.html` - Google Fonts Noto Sans importado
✅ `img/` - Assets disponibles:
  - `login-bg.jpg`
  - `login-logo-siembra.png`
  - `login-logo-alcanza.png`

**No requiere acciones adicionales** - Todo está listo para implementar.

---

## Testing Strategy

### Visual Testing (Manual)

**Checklist de verificación:**

- [ ] **Background:**
  - [ ] Gradiente azul top-left visible
  - [ ] Gradiente coral bottom-right visible
  - [ ] Imagen de fondo carga correctamente
  - [ ] Opacidad de gradientes es 40%

- [ ] **Card:**
  - [ ] Posición centrada correctamente
  - [ ] Shadow visible y correcto
  - [ ] Border-radius 24px aplicado
  - [ ] Width 566px + padding 42px

- [ ] **Logos:**
  - [ ] Logo Siembra visible (124x61)
  - [ ] Separador vertical visible
  - [ ] Logo Alcanza visible (169x55)
  - [ ] Alineación centrada

- [ ] **Tipografía:**
  - [ ] Título "Bienvenido:" en bold (900)
  - [ ] Título "al simulador..." en light (300)
  - [ ] Tamaño 40px correcto
  - [ ] Letter-spacing 0.8px aplicado

- [ ] **Campos:**
  - [ ] Labels con tamaño 16px
  - [ ] Inputs con padding 16px
  - [ ] Border color #E4E6EE
  - [ ] Placeholder color #B3B3B3
  - [ ] Focus ring naranja visible

- [ ] **Botones:**
  - [ ] Botón naranja con color #FF7933
  - [ ] Border-radius completo (rounded-full)
  - [ ] Hover effect funciona
  - [ ] Link azul con underline

- [ ] **Footer:**
  - [ ] Texto blanco visible
  - [ ] Alineación centrada
  - [ ] Separadores "•" presentes

- [ ] **Chat Bubble:**
  - [ ] Posición bottom-right correcta
  - [ ] Color amarillo #FDB216
  - [ ] Border-radius circular
  - [ ] Hover effect funciona

### Functional Testing

**Tests de formulario:**

```bash
# Ejecutar tests existentes
npm run test

# Verificar que el submit funciona
# Verificar que la edad se calcula correctamente
```

### Responsive Testing

**Dispositivos a probar:**

- [ ] **Mobile (375px)** - iPhone SE, Galaxy S20
  - [ ] Card ocupa ancho completo con márgenes
  - [ ] Campos en columna (no row)
  - [ ] Título legible (28px)
  - [ ] Botones accesibles
  - [ ] Chat bubble no obstruye contenido

- [ ] **Mobile Large (414px)** - iPhone Pro Max
  - [ ] Layout similar a 375px
  - [ ] Espaciado correcto

- [ ] **Tablet (768px)** - iPad
  - [ ] Card centrado, max-width aplicado
  - [ ] Campos pueden ir en row
  - [ ] Imagen de fondo visible

- [ ] **Desktop (1024px+)** - Laptop/Desktop
  - [ ] Diseño original del HTML aplicado
  - [ ] Posiciones absolutas correctas
  - [ ] Gradientes visibles y correctos

**Herramientas:**
```bash
# Chrome DevTools
# Responsive mode: Toggle device toolbar (Cmd/Ctrl + Shift + M)
# Probar dimensiones custom

# Firefox Responsive Design Mode
# Ctrl + Shift + M
```

---

## Edge Cases

### Assets No Cargan

**Problema:** Imágenes desde `/img/` no cargan
**Solución:** Verificar que Vite está sirviendo correctamente la carpeta. Asegurar que las imágenes existen en `E:\Siembra\img\`

### Fuentes No Cargan

**Problema:** Google Fonts no carga (firewall, etc.)
**Solución:** Tailwind tiene fallback a system fonts (sans-serif stack)

### Gradientes No Visibles

**Problema:** Navegadores antiguos no soportan radial-gradient
**Solución:** Fallback a background color sólido

### Responsive Layout Roto

**Problema:** Card muy grande en mobile o muy pequeña en desktop
**Solución:** Revisar breakpoints de Tailwind (`lg:` prefix). Verificar que las clases responsive están aplicadas correctamente.

### Footer Oculto por Teclado Mobile

**Problema:** Teclado virtual oculta footer en mobile
**Solución:** Aceptable - footer no es crítico. Alternativa: usar `position: sticky` en lugar de `absolute`

### Chat Bubble Obstruye Botón Submit

**Problema:** En pantallas muy pequeñas, el chat bubble puede tapar el botón
**Solución:** Ajustar posición con `bottom-20` en mobile o reducir tamaño

---

## Acceptance Criteria

**Visual Desktop (>= 1024px):**
- ✅ Gradientes de fondo coinciden con diseño HTML
- ✅ Card flotante posicionado correctamente (left: 774px, top: 61.5px)
- ✅ Logos visibles con separador vertical
- ✅ Tipografía con pesos y tamaños exactos (40px título)
- ✅ Campos de formulario estilizados correctamente
- ✅ Botón naranja con border-radius completo
- ✅ Footer con texto legal visible
- ✅ Chat bubble flotante visible
- ✅ Imagen de fondo visible

**Visual Mobile (< 768px):**
- ✅ Card centrado con márgenes laterales
- ✅ Logos escalados proporcionalmente
- ✅ Título legible (28px)
- ✅ Campos apilados verticalmente
- ✅ Botón ocupa ancho completo
- ✅ Footer texto condensado
- ✅ Chat bubble más pequeño (60px)
- ✅ Imagen de fondo oculta

**Funcional:**
- ✅ Formulario valida campos requeridos
- ✅ Submit calcula edad correctamente desde birthDate
- ✅ Navegación a Step1 funciona
- ✅ Hover effects en botones funcionan
- ✅ Assets cargan desde `/img/` correctamente

**Responsive:**
- ✅ Layout adapta correctamente en 375px, 768px, 1024px, 1440px
- ✅ No hay overflow horizontal en ningún breakpoint
- ✅ Todos los elementos son accesibles en mobile

**Calidad:**
- ✅ No hay errores en consola
- ✅ Tests existentes pasan
- ✅ Build completa sin warnings
- ✅ Imágenes optimizadas y cargan rápido

---

## Validation Commands

```bash
# 1. Verificar que Login.jsx tiene estilos
cat src/pages/Login.jsx | grep "className="

# 2. Verificar assets existen
ls public/images/

# 3. Dev server
npm run dev
# Abrir http://localhost:5173/Siembra/
# Comparar visualmente con designs/login.html

# 4. Tests
npm run test

# 5. Build
npm run build

# 6. Screenshot para comparación
# Tomar screenshot del navegador
# Comparar con designs/Login.jpg
```

---

## Time Estimate

**Total: 1.5-2 horas**

- Analizar HTML y extraer estilos: 15 min ✅ (ya hecho en plan)
- Implementar Login.jsx con estilos desktop: 30 min
- Implementar responsive design (mobile/tablet): 25 min
- Verificar assets en `/img/`: 5 min ✅ (ya existen)
- Testing visual desktop: 10 min
- Testing responsive (3 breakpoints): 15 min
- Ajustes finales: 10 min

---

## Next Steps After Completion

**Fase 2 continuación:**
- Aplicar estilos a Step1.jsx
- Aplicar estilos a Step2.jsx
- Aplicar estilos a Step3.jsx (resultado base)
- Aplicar estilos a Step4.jsx (simulador avanzado)
- Aplicar estilos a Step5.jsx (modal foto)
- Aplicar estilos a Result.jsx

**Checkpoint Fase 2 Login:**
- ✅ Login visualmente idéntico al HTML en desktop
- ✅ Responsive design funcional (mobile, tablet, desktop)
- ✅ Funcionalidad mantiene intacta
- ✅ Assets reales cargando desde `/img/`

---

## Notes

- **Importante:** El HTML `designs/login.html` es la ÚNICA fuente de verdad para estilos desktop
- **Importante:** Usar valores exactos del HTML (colores hex, tamaños px, posiciones)
- **Importante:** Gradientes requieren style inline (no soportado directamente en Tailwind)
- **Importante:** Assets YA EXISTEN en `E:\Siembra\img/` - usar paths `/img/...`
- **Importante:** Responsive design incluido en esta fase (no Fase 3)
- **Importante:** Breakpoint principal: `lg:` (1024px) para aplicar diseño desktop
- Noto Sans con pesos 300, 400, 700, 900 ya importado en `index.html`
- Tailwind config ya tiene colores custom (`siembra-orange`, `siembra-blue`, etc.)
- Chat bubble puede ser funcional en fase futura (por ahora solo visual)
- Footer puede tener links reales en fase futura
- Mobile-first approach: estilos base para mobile, `lg:` prefix para desktop

---

**Regla de oro Fase 2 Login:** Pixel-perfect según HTML en desktop + Adaptable en mobile.
