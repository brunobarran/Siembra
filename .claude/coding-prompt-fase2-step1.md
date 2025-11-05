# Fase 2: Step 1 Screen - Siembra Pension Simulator

## Feature Description

Implementar la pantalla Step1 (Información Personal y Laboral) con los estilos exactos del diseño HTML, incluyendo header con gradiente y usuario, progress bar con 4 pasos, formulario con campos específicos, y footer. El HTML proporcionado es la única fuente de verdad.

---

## HTML de Referencia (Fuente de Verdad)

**IMPORTANTE:** Este HTML es la ÚNICA fuente de verdad para el diseño. Todos los estilos, colores, tipografía y layout deben extraerse directamente de aquí.

**Ubicación:** `E:\Siembra\designs\step1.html`

```html
<div style="width: 1440px; height: 1024px; min-height: 1024px; background: white; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
  <div style="width: 1440px; height: 100px; padding-left: 320px; padding-right: 320px; padding-top: 16px; padding-bottom: 16px; background: radial-gradient(ellipse 1764.18% 941.76% at -0.00% 0.00%, #005EB8 27%, #8C0075 92%); justify-content: space-between; align-items: center; display: inline-flex">
    <img style="width: 130px; height: 56px" src="https://placehold.co/130x56" />
    <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
      <div style="color: white; font-size: 32px; font-family: Font Awesome 7 Free; font-weight: 900; line-height: 32px; word-wrap: break-word">circle-user</div>
      <div style="width: 24px; height: 0px; transform: rotate(90deg); transform-origin: top left; outline: 1px white solid; outline-offset: -0.50px"></div>
      <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
        <div style="color: white; font-size: 14px; font-family: Noto Sans; font-weight: 700; line-height: 14px; word-wrap: break-word">Victor Santana</div>
        <div style="color: white; font-size: 13px; font-family: Noto Sans; font-weight: 400; line-height: 13px; word-wrap: break-word">223-0057793-3</div>
      </div>
    </div>
  </div>
  <div style="width: 1440px; flex: 1 1 0; padding-top: 60px; padding-bottom: 40px; padding-left: 100px; padding-right: 100px; background: white; flex-direction: column; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
    <div style="width: 100%; max-width: 800px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
      <div style="width: 800px; height: 75px; padding-bottom: 60px; position: relative; justify-content: flex-start; align-items: center; display: inline-flex">
        <div style="width: 770px; height: 0px; left: 0px; top: 22px; position: absolute; outline: 6px var(--Bost-Orange-00, #FF7933) solid; outline-offset: -3px"></div>
        <div style="width: 166px; height: 0px; left: 0px; top: 22px; position: absolute; outline: 6px var(--Bost-Orange-00, #FF7933) solid; outline-offset: -3px"></div>
        <div style="left: -10px; top: -7.50px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: center; display: inline-flex">
          <div data-property-1="current" style="width: 40px; height: 52px; position: relative">
            <div style="width: 40px; height: 40px; left: 0px; top: 6px; position: absolute; background: var(--Bost-Orange-00, #FF7933)"></div>
            <div style="width: 28px; height: 28px; left: 6px; top: 12px; position: absolute; background: var(--White, white)"></div>
            <div style="width: 22px; height: 22px; left: 9px; top: 15px; position: absolute; background: var(--Bost-Orange-100, #FDB216)"></div>
          </div>
          <div style="padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--Bost-Orange-00, #FF7933); border-radius: 30px; justify-content: center; align-items: center; display: inline-flex">
            <div style="color: var(--White, white); font-size: 13px; font-family: Noto Sans; font-weight: 700; line-height: 13px; word-wrap: break-word">25%</div>
          </div>
        </div>
        <div style="left: 258px; top: -7px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
          <div data-property-1="No-Fill" style="width: 40px; height: 52px; position: relative">
            <div style="width: 40px; height: 40px; left: 0px; top: 6px; position: absolute; background: var(--Bost-Orange-00, #FF7933)"></div>
            <div style="width: 28px; height: 28px; left: 6px; top: 12px; position: absolute; background: var(--White, white)"></div>
          </div>
        </div>
        <div data-property-1="No-Fill" style="width: 40px; height: 52px; left: 760px; top: -7px; position: absolute">
          <div style="width: 40px; height: 40px; left: 0px; top: 6px; position: absolute; background: var(--Bost-Orange-00, #FF7933)"></div>
          <div style="width: 28px; height: 28px; left: 6px; top: 12px; position: absolute; background: var(--White, white)"></div>
        </div>
        <div style="left: 507px; top: -7px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: center; display: inline-flex">
          <div data-property-1="No-Fill" style="width: 40px; height: 52px; position: relative">
            <div style="width: 40px; height: 40px; left: 0px; top: 6px; position: absolute; background: var(--Bost-Orange-00, #FF7933)"></div>
            <div style="width: 28px; height: 28px; left: 6px; top: 12px; position: absolute; background: var(--White, white)"></div>
          </div>
        </div>
      </div>
      <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
          <div style="flex: 1 1 0"><span style="color: #4C4C4C; font-size: 24px; font-family: Noto Sans; font-weight: 900; line-height: 24px; word-wrap: break-word">Información:</span><span style="color: #4C4C4C; font-size: 24px; font-family: Noto Sans; font-weight: 700; line-height: 24px; word-wrap: break-word"> </span><span style="color: #4C4C4C; font-size: 24px; font-family: Noto Sans; font-weight: 400; line-height: 24px; word-wrap: break-word">Personal y laboral</span></div>
        </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
          <div style="flex: 1 1 0"><span style="color: #4C4C4C; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 14px; word-wrap: break-word">Todos los campos marcados con (</span><span style="color: #FF0000; font-size: 14px; font-family: Noto Sans; font-weight: 700; line-height: 14px; word-wrap: break-word">*</span><span style="color: #4C4C4C; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 14px; word-wrap: break-word">) son obligatorios</span></div>
        </div>
      </div>
      <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex">
        <div style="color: #949494; font-size: 16px; font-family: Noto Sans; font-weight: 700; line-height: 16px; word-wrap: break-word">Información Personal</div>
        <div style="flex: 1 1 0; height: 0px; outline: 2px #E4E6EE solid; outline-offset: -1px"></div>
      </div>
      <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
          <div data-type="Default" style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
            <div data-show-label="true" data-type-label="Default" style="align-self: stretch; padding-left: 10px; padding-right: 10px; justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
              <div style="color: #4C4C4C; font-size: 16px; font-family: Noto Sans; font-weight: 400; line-height: 20.80px; word-wrap: break-word">Mi edad es:</div>
            </div>
            <div data-disable="Yes" data-fill="No" data-hover="No" data-type="Dropdown" data-typed="No" style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
              <div style="align-self: stretch; padding: 16px; background: #E4E6EE; border-radius: 8px; outline: 1px #E4E6EE solid; outline-offset: -1px; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
                <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                  <div style="flex: 1 1 0; color: var(--Black, #333333); font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">55 Años</div>
                </div>
              </div>
            </div>
            <div data-show-limit="No" data-show-note="false" data-type="Default + Icon" style="align-self: stretch; padding-left: 10px; padding-right: 10px; justify-content: flex-end; align-items: center; gap: 8px; display: inline-flex"></div>
          </div>
          <div style="width: 388px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
            <div data-show-label="true" data-type-label="Label+Info" style="align-self: stretch; padding-left: 10px; padding-right: 10px; justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
              <div><span style="color: #4C4C4C; font-size: 16px; font-family: Noto Sans; font-weight: 400; line-height: 20.80px; word-wrap: break-word">¿A que edad deseas retirarte?</span><span style="color: #FF0000; font-size: 16px; font-family: Noto Sans; font-weight: 400; line-height: 20.80px; word-wrap: break-word">*</span></div>
              <div data-error="No" data-type-icon="Fill" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                <div style="left: 0px; top: -1px; position: absolute; opacity: 0.60; text-align: right; color: #4C4C4C; font-size: 16px; font-family: Font Awesome 7 Free; font-weight: 900; line-height: 18px; word-wrap: break-word">circle-exclamation</div>
              </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
              <div style="align-self: stretch; padding: 16px; background: white; border-radius: 8px; outline: 1px #E4E6EE solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
                  <div style="width: 13px; opacity: 0.40; text-align: right; color: #6F6F6F; font-size: 16px; font-family: Font Awesome 5 Free; font-weight: 900; line-height: 18px; word-wrap: break-word">minus</div>
                  <div style="flex: 1 1 0; text-align: center; color: var(--Black, #333333); font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">55 Años</div>
                  <div style="text-align: right; color: #4C4C4C; font-size: 16px; font-family: Font Awesome 5 Free; font-weight: 900; line-height: 18px; word-wrap: break-word">plus</div>
                </div>
              </div>
            </div>
            <div data-show-limit="No" data-show-note="false" data-type="Default + Icon" style="align-self: stretch; padding-left: 10px; padding-right: 10px; justify-content: flex-end; align-items: center; gap: 8px; display: inline-flex"></div>
          </div>
        </div>
      </div>
      <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex">
        <div style="color: #949494; font-size: 16px; font-family: Noto Sans; font-weight: 700; line-height: 16px; word-wrap: break-word">Información laboral y profesional</div>
        <div style="flex: 1 1 0; height: 0px; outline: 2px #E4E6EE solid; outline-offset: -1px"></div>
      </div>
      <div style="align-self: stretch; padding: 16px; background: #FBFBFB; border-radius: 8px; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
        <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
          <div style="flex: 1 1 0; color: var(--Black, #333333); font-size: 16px; font-family: Noto Sans; font-weight: 400; line-height: 16px; word-wrap: break-word">¿Laboras actualmente?</div>
          <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
            <div style="color: var(--Bost-Orange-00, #FF7933); font-size: 14px; font-family: Font Awesome 7 Free; font-weight: 900; line-height: 18.20px; word-wrap: break-word">circle-check</div>
            <div style="color: #4C4C4C; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">Si</div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
            <div style="color: var(--Bost-Orange-00, #FF7933); font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">circle</div>
            <div style="color: #4C4C4C; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">No</div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; max-width: 800px; padding-top: 16px; padding-bottom: 16px; justify-content: space-between; align-items: flex-start; display: inline-flex">
      <div style="padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; border-radius: 25.31px; justify-content: center; align-items: center; gap: 10px; display: flex">
        <div style="text-align: center; justify-content: flex-end; display: flex; flex-direction: column; color: #FF7933; font-size: 16px; font-family: SF Pro; font-weight: 700; line-height: 20px; word-wrap: break-word">Dejar para después</div>
      </div>
      <div style="justify-content: flex-start; align-items: center; gap: 24px; display: flex">
        <div style="padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; border-radius: 25.31px; outline: 2px #FF7933 solid; outline-offset: -2px; justify-content: center; align-items: center; gap: 10px; display: flex">
          <div style="text-align: center; justify-content: flex-end; display: flex; flex-direction: column; color: #FF7933; font-size: 16px; font-family: SF Pro; font-weight: 700; line-height: 20px; word-wrap: break-word">Volver</div>
        </div>
        <div style="padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: #FF7933; border-radius: 25.31px; justify-content: center; align-items: center; gap: 10px; display: flex">
          <div style="text-align: center; justify-content: flex-end; display: flex; flex-direction: column; color: white; font-size: 16px; font-family: SF Pro; font-weight: 700; line-height: 20px; word-wrap: break-word">Continuar</div>
        </div>
      </div>
    </div>
  </div>
  <div style="width: 1440px; height: 100px; background: white; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
    <div style="color: #949494; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">Términos & condiciones</div>
    <div style="color: #949494; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">•</div>
    <div style="color: #949494; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">© 2025 AFP Siembra. Todos los derechos reservados.</div>
    <div style="color: #949494; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">•</div>
    <div style="color: #949494; font-size: 14px; font-family: Noto Sans; font-weight: 400; line-height: 18.20px; word-wrap: break-word">Su información está protegida y será utilizada únicamente para generar su plan de pensiones personalizado</div>
  </div>
  <div style="width: 75.22px; height: 73.70px; background: var(--Bost-Orange-100, #FDB216)"></div>
  <div style="width: 73px; height: 73px; background: var(--Bost-Orange-100, #FDB216); border-radius: 9999px"></div>
  <div style="color: var(--White, white); font-size: 22px; font-family: Font Awesome 7 Free; font-weight: 900; word-wrap: break-word">message</div>
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

**Fuentes Disponibles** (`index.html`):
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700;900&display=swap" rel="stylesheet">
```

Pesos disponibles: 300, 400, 700, 900

**Props de Entrada (desde Login)**:
```javascript
// El componente Step1 recibe estas props:
{
  data: {
    name: string,           // Ejemplo: "Victor Santana"
    documentId: string,     // Ejemplo: "223-0057793-3"
    birthDate: string,      // Formato: "YYYY-MM-DD"
    email: string
  },
  onNext: (formData) => void,  // Callback para avanzar
  onBack: () => void           // Callback para retroceder
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
│   │   └── Login.jsx     # EXISTE (implementado)
│   │   └── Step1.jsx     # EXISTE (placeholder, modificar)
│   ├── components/       # Vacío (crear componentes)
│   └── data/
│       └── mockData.js   # EXISTE (crear calculateAge si no existe)
├── img/
│   ├── login-bg.jpg
│   ├── login-logo-siembra.png
│   └── login-logo-alcanza.png
└── designs/
    └── step1.html        # HTML de referencia
```

**Assets Requeridos**:
- Logo header: Reutilizar `/img/login-logo-siembra.png` (130x56px)
- Iconos: Font Awesome (texto, usar emojis como fallback: 👤, ℹ️, ✓, ○, 💬)

---

## Problem Solving

**Problema:** Step1 de Fase 1 es funcional pero sin estilos. Necesitamos aplicar el diseño exacto del HTML incluyendo el header corporativo, progress bar visual, y un formulario limpio y profesional.

**Requerimientos:**
- Header azul-morado con gradiente radial
- Logo AFP Siembra en header
- Usuario y documento en header (top-right)
- Progress bar con 4 pasos (25% completado)
- Título con pesos tipográficos mixtos
- Separadores de sección con línea
- Campo edad (disabled, calculado)
- Campo edad retiro con botones +/-
- Radio buttons personalizados (¿Laboras actualmente?)
- 3 botones de acción (Dejar, Volver, Continuar)
- Footer con info legal
- Chat bubble flotante
- **Responsive design:** Desktop fiel al HTML + adaptación mobile

## User Story

```
Como usuario del simulador,
Quiero completar mi información personal y laboral en una interfaz clara y profesional,
Para avanzar en el proceso de simulación sintiendo confianza en el sistema.
```

## Solution & Approach

**Enfoque elegido:** Componentes reutilizables + Tailwind CSS

**Por qué:**
- ✅ Header será reutilizable en todos los steps
- ✅ Progress bar como componente separado
- ✅ Footer reutilizable
- ✅ Tailwind para estilos rápidos
- ✅ Mobile-first con breakpoints

## Relevant Files & Documentation

### Files to Create/Modify

```
E:\Siembra/
├── src/
│   ├── pages/
│   │   └── Step1.jsx              # Modificar: aplicar estilos exactos
│   ├── components/
│   │   ├── Header.jsx             # Crear: header reutilizable
│   │   ├── ProgressBar.jsx        # Crear: barra de progreso
│   │   ├── Footer.jsx             # Crear: footer reutilizable
│   │   └── ChatBubble.jsx         # Crear: chat flotante
│   ├── data/
│   │   └── mockData.js            # Verificar: función calculateAge
└── img/
    └── step1-logo.png             # Logo para header (si existe)
```

### Assets Disponibles

- Logo header (130x56px)
- Font Awesome icons (user, info, plus, minus, circle-check, circle)

### Reference Documentation

- HTML source (proporcionado) - ÚNICA FUENTE DE VERDAD
- [Tailwind Gradients](https://tailwindcss.com/docs/gradient-color-stops)
- [Font Awesome](https://fontawesome.com/icons) - Icons

## Implementation Plan

### 1. Análisis del HTML Source

**Estructura identificada:**

```html
<div> <!-- Container 1440x1024 -->
  <!-- Header con gradiente -->
  <!-- Main content centrado max-width 800px -->
    <!-- Progress bar -->
    <!-- Título + subtítulo -->
    <!-- Sección: Información Personal -->
      <!-- Campo: Edad (disabled) -->
      <!-- Campo: Edad retiro (+/-) -->
    <!-- Sección: Información Laboral -->
      <!-- Radio: ¿Laboras? -->
    <!-- Botones -->
  <!-- Footer -->
  <!-- Chat bubble -->
</div>
```

**Colores exactos:**

```css
/* Header */
--header-gradient: radial-gradient(ellipse 1764.18% 941.76% at -0% 0%, #005EB8 27%, #8C0075 92%)

/* Progress Bar */
--progress-orange: #FF7933
--progress-yellow: #FDB216

/* Texto */
--text-dark: #4C4C4C
--text-grey: #949494
--text-black: #333333
--border-grey: #E4E6EE
--bg-light: #FBFBFB
--disabled-bg: #E4E6EE

/* Estados */
--error-red: #FF0000
```

**Tipografía:**

- Header usuario: 14px bold, 13px regular
- Título: 24px (900 bold + 400 regular)
- Subtítulo: 14px, asterisco rojo
- Labels: 16px regular
- Inputs: 14px regular
- Botones: 16px bold (SF Pro font)
- Footer: 14px regular

**Componentes clave:**

1. **Header (100px alto):**
   - Gradiente radial azul → morado
   - Logo izquierda
   - Usuario + documento derecha con separador

2. **Progress Bar:**
   - 4 círculos (25%, 50%, 75%, 100%)
   - Línea naranja de conexión
   - Badge "25%" en paso actual
   - Paso actual: círculo triple (naranja + blanco + amarillo)

3. **Formulario:**
   - Max-width: 800px centrado
   - Separadores de sección con línea gris
   - Campo edad: disabled, bg gris
   - Campo edad retiro: input con botones +/- integrados
   - Radio buttons: custom con circle-check icon

4. **Botones:**
   - Dejar: texto naranja sin borde
   - Volver: outline naranja
   - Continuar: filled naranja

---

### 2. Crear Componentes Reutilizables

#### Header.jsx

**Props:** `userName`, `userDocument`

```jsx
export default function Header({ userName, userDocument }) {
  return (
    <div
      className="w-full h-[100px] px-8 lg:px-80 py-4 flex items-center justify-between"
      style={{
        background: 'radial-gradient(ellipse 1764.18% 941.76% at -0% 0%, #005EB8 27%, #8C0075 92%)'
      }}
    >
      {/* Logo */}
      <img
        src="/img/step1-logo.png"
        alt="AFP Siembra"
        className="w-[130px] h-[56px]"
      />

      {/* Usuario */}
      <div className="flex items-center gap-2">
        <span className="text-white text-[32px]">👤</span>
        <div className="w-6 h-0 rotate-90 border-t border-white" />
        <div className="flex flex-col gap-1">
          <span className="text-white text-sm font-bold leading-[14px]">
            {userName}
          </span>
          <span className="text-white text-[13px] leading-[13px]">
            {userDocument}
          </span>
        </div>
      </div>
    </div>
  )
}
```

#### ProgressBar.jsx

**Props:** `currentStep` (1-4)

```jsx
export default function ProgressBar({ currentStep }) {
  const steps = [1, 2, 3, 4]
  const progressPercentage = (currentStep / steps.length) * 100

  return (
    <div className="relative w-full max-w-[800px] h-[75px] pb-[60px]">
      {/* Línea de fondo gris */}
      <div
        className="absolute top-[22px] left-0 h-0 border-t-[6px] border-[#E4E6EE]"
        style={{ width: '770px' }}
      />

      {/* Línea de progreso naranja */}
      <div
        className="absolute top-[22px] left-0 h-0 border-t-[6px] border-[#FF7933]"
        style={{ width: `${(currentStep - 1) * 256}px` }}
      />

      {/* Círculos de pasos */}
      {steps.map((step, index) => {
        const isCurrent = step === currentStep
        const isCompleted = step < currentStep
        const position = index * 256 - 10

        return (
          <div
            key={step}
            className="absolute flex flex-col items-center"
            style={{ left: `${position}px`, top: '-7.5px' }}
          >
            {/* Círculo */}
            <div className="relative w-10 h-[52px]">
              {/* Círculo exterior naranja */}
              <div className="absolute w-10 h-10 top-[6px] bg-[#FF7933] rounded-full" />
              {/* Círculo medio blanco */}
              <div className="absolute w-7 h-7 top-[12px] left-[6px] bg-white rounded-full" />
              {/* Círculo interior (solo si es actual) */}
              {isCurrent && (
                <div className="absolute w-[22px] h-[22px] top-[15px] left-[9px] bg-[#FDB216] rounded-full" />
              )}
            </div>

            {/* Badge de porcentaje (solo en paso actual) */}
            {isCurrent && (
              <div className="px-4 py-2 bg-[#FF7933] rounded-full">
                <span className="text-white text-[13px] font-bold leading-[13px]">
                  {progressPercentage}%
                </span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
```

#### Footer.jsx

```jsx
export default function Footer() {
  return (
    <div className="w-full h-[100px] bg-white flex flex-wrap items-center justify-center gap-2.5 px-4 text-center">
      <span className="text-[#949494] text-sm">Términos & condiciones</span>
      <span className="text-[#949494] text-sm hidden md:inline">•</span>
      <span className="text-[#949494] text-sm">© 2025 AFP Siembra</span>
      <span className="text-[#949494] text-sm hidden md:inline">•</span>
      <span className="text-[#949494] text-sm hidden lg:inline">
        Su información está protegida y será utilizada únicamente para generar su plan de pensiones personalizado
      </span>
    </div>
  )
}
```

#### ChatBubble.jsx

```jsx
export default function ChatBubble() {
  return (
    <div className="
      fixed bottom-4 right-4 lg:bottom-8 lg:right-8
      w-[60px] h-[60px] lg:w-[73px] lg:h-[73px]
      bg-[#FDB216] rounded-full
      flex items-center justify-center
      cursor-pointer hover:bg-[#FCA500]
      transition-colors shadow-lg
      z-50
    ">
      <span className="text-white text-lg lg:text-[22px]">💬</span>
    </div>
  )
}
```

---

### 3. Implementar Step1.jsx con Estilos Exactos

**Archivo:** `src/pages/Step1.jsx`

```jsx
import { useState } from 'react'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'
import { calculateAge } from '../data/mockData'

export default function Step1({ data, onNext, onBack }) {
  const [formData, setFormData] = useState({
    age: data.age || calculateAge(data.birthDate),
    retirementAge: data.retirementAge || 65,
    currentlyWorking: data.currentlyWorking ?? true
  })

  const handleIncrement = () => {
    setFormData({ ...formData, retirementAge: Math.min(100, formData.retirementAge + 1) })
  }

  const handleDecrement = () => {
    setFormData({ ...formData, retirementAge: Math.max(formData.age + 1, formData.retirementAge - 1) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext(formData)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header
        userName={data.name || 'Usuario'}
        userDocument={data.documentId || '---'}
      />

      {/* Main Content */}
      <div className="flex-1 py-10 lg:py-[60px] px-4 lg:px-[100px] flex flex-col items-center gap-2.5 bg-white">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress Bar */}
          <ProgressBar currentStep={1} />

          {/* Título */}
          <div className="py-4 flex flex-col gap-2">
            <h1 className="text-[#4C4C4C] text-xl lg:text-2xl leading-6">
              <span className="font-black">Información:</span>
              <span className="font-normal"> Personal y laboral</span>
            </h1>
            <p className="text-[#4C4C4C] text-sm leading-[14px]">
              Todos los campos marcados con (
              <span className="text-[#FF0000] font-bold">*</span>
              ) son obligatorios
            </p>
          </div>

          {/* Separador: Información Personal */}
          <div className="py-4 flex items-center gap-10">
            <span className="text-[#949494] text-base font-bold leading-4">
              Información Personal
            </span>
            <div className="flex-1 h-0 border-t-2 border-[#E4E6EE]" />
          </div>

          {/* Campos: Edad + Edad Retiro */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Campo: Mi edad es (disabled) */}
            <div className="flex-1 flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C] text-base leading-[20.8px]">
                Mi edad es:
              </label>
              <input
                type="text"
                value={`${formData.age} Años`}
                disabled
                className="w-full px-4 py-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded-lg text-sm text-[#333333] leading-[18.2px] cursor-not-allowed"
              />
            </div>

            {/* Campo: ¿A qué edad deseas retirarte? (+/-) */}
            <div className="flex-1 flex flex-col gap-1">
              <label className="px-2.5 flex items-center gap-1 text-[#4C4C4C] text-base leading-[20.8px]">
                ¿A que edad deseas retirarte?
                <span className="text-[#FF0000]">*</span>
                <span className="text-[#4C4C4C] opacity-60 text-base">ℹ️</span>
              </label>
              <div className="w-full px-4 py-4 bg-white border border-[#E4E6EE] rounded-lg flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-4 text-[#6F6F6F] opacity-40 hover:opacity-100 transition-opacity"
                >
                  −
                </button>
                <div className="flex-1 text-center text-[#333333] text-sm leading-[18.2px]">
                  {formData.retirementAge} Años
                </div>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-4 text-[#4C4C4C] hover:text-[#FF7933] transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Separador: Información Laboral */}
          <div className="py-4 flex items-center gap-10">
            <span className="text-[#949494] text-base font-bold leading-4">
              Información laboral y profesional
            </span>
            <div className="flex-1 h-0 border-t-2 border-[#E4E6EE]" />
          </div>

          {/* Campo: ¿Laboras actualmente? */}
          <div className="p-4 bg-[#FBFBFB] rounded-lg flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            <span className="flex-1 text-[#333333] text-base leading-4">
              ¿Laboras actualmente?
            </span>
            <div className="flex items-center gap-6">
              {/* Opción: Sí */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="currentlyWorking"
                  checked={formData.currentlyWorking === true}
                  onChange={() => setFormData({ ...formData, currentlyWorking: true })}
                  className="hidden"
                />
                <span className={`text-sm ${formData.currentlyWorking ? 'text-[#FF7933]' : 'text-[#FF7933]'}`}>
                  {formData.currentlyWorking ? '✓' : '○'}
                </span>
                <span className="text-[#4C4C4C] text-sm leading-[18.2px]">Si</span>
              </label>

              {/* Opción: No */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="currentlyWorking"
                  checked={formData.currentlyWorking === false}
                  onChange={() => setFormData({ ...formData, currentlyWorking: false })}
                  className="hidden"
                />
                <span className={`text-sm ${!formData.currentlyWorking ? 'text-[#FF7933]' : 'text-[#FF7933]'}`}>
                  {!formData.currentlyWorking ? '✓' : '○'}
                </span>
                <span className="text-[#4C4C4C] text-sm leading-[18.2px]">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="w-full max-w-[800px] py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Dejar para después */}
          <button
            type="button"
            className="px-6 py-4 text-[#FF7933] text-base font-bold leading-5 hover:bg-[#FFF5F0] rounded-[25px] transition-colors"
          >
            Dejar para después
          </button>

          {/* Volver + Continuar */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-4 border-2 border-[#FF7933] text-[#FF7933] text-base font-bold leading-5 rounded-[25px] hover:bg-[#FFF5F0] transition-colors"
            >
              Volver
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-4 bg-[#FF7933] text-white text-base font-bold leading-5 rounded-[25px] hover:bg-[#FF6820] transition-colors"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Chat Bubble */}
      <ChatBubble />
    </div>
  )
}
```

---

### 4. Implementar Responsive Design

**Ajustes por dispositivo:**

#### Mobile (< 768px):
- **Header:**
  - Padding reducido px-8
  - Logo más pequeño
  - Usuario info más compacta
- **Progress bar:**
  - Ocultar o versión simplificada (solo número de paso)
- **Formulario:**
  - Campos stack verticalmente
  - Max-width 100%
- **Botones:**
  - Stack verticalmente
  - Full width

#### Tablet (768px - 1023px):
- Padding intermedio
- Progress bar visible
- Campos pueden ir en row

#### Desktop (>= 1024px):
- **Diseño original del HTML**
- Padding 100px lateral
- Max-width 800px

**Código responsive para Progress Bar simplificado (mobile):**

```jsx
// Version mobile del ProgressBar
<div className="lg:hidden w-full flex justify-center">
  <div className="px-4 py-2 bg-[#FF7933] rounded-full">
    <span className="text-white text-sm font-bold">
      Paso 1 de 4 (25%)
    </span>
  </div>
</div>

{/* Version desktop (ocultar en mobile) */}
<div className="hidden lg:block">
  <ProgressBar currentStep={1} />
</div>
```

---

### 5. Actualizar mockData.js

**Verificar función calculateAge existe:**

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

## Testing Strategy

### Visual Testing (Manual)

**Checklist Desktop:**

- [ ] **Header:**
  - [ ] Gradiente radial azul → morado visible
  - [ ] Logo AFP Siembra visible
  - [ ] Usuario y documento alineados derecha
  - [ ] Separador vertical visible

- [ ] **Progress Bar:**
  - [ ] 4 círculos visibles
  - [ ] Línea naranja hasta paso 1
  - [ ] Badge "25%" en primer círculo
  - [ ] Círculo actual triple (naranja + blanco + amarillo)

- [ ] **Formulario:**
  - [ ] Título con pesos correctos
  - [ ] Separadores con línea gris
  - [ ] Campo edad disabled con bg gris
  - [ ] Campo edad retiro con +/- funcionales
  - [ ] Radio buttons custom con iconos

- [ ] **Botones:**
  - [ ] "Dejar" sin borde
  - [ ] "Volver" con outline naranja
  - [ ] "Continuar" filled naranja
  - [ ] Hover effects funcionan

- [ ] **Footer + Chat:**
  - [ ] Footer centrado
  - [ ] Chat bubble flotante visible

**Checklist Mobile:**

- [ ] Header adaptado
- [ ] Progress bar simplificado o visible
- [ ] Campos verticales
- [ ] Botones stack verticalmente

### Functional Testing

```bash
npm run test

# Verificar:
# - Campo edad se calcula automáticamente
# - Botones +/- funcionan
# - Radio buttons cambian estado
# - onNext envía datos correctos
# - onBack funciona
```

### Responsive Testing

- [ ] **Mobile (375px):** Layout correcto
- [ ] **Tablet (768px):** Layout intermedio
- [ ] **Desktop (1440px):** Diseño original

---

## Edge Cases

### Edad No Calculada

**Problema:** `birthDate` no existe en data
**Solución:** Default a null, mostrar "-- Años"

### Edad Retiro Menor que Edad Actual

**Problema:** Usuario intenta decrementar por debajo de edad actual
**Solución:** `Math.max(formData.age + 1, ...)` en handleDecrement

### Edad Retiro Muy Alta

**Problema:** Usuario incrementa indefinidamente
**Solución:** `Math.min(100, ...)` en handleIncrement

### Progress Bar Overflow en Mobile

**Problema:** 4 círculos no caben en pantalla pequeña
**Solución:** Versión simplificada "Paso 1 de 4"

---

## Acceptance Criteria

**Visual Desktop:**
- ✅ Header con gradiente exacto
- ✅ Progress bar con 4 pasos, 25% completado
- ✅ Formulario max-width 800px centrado
- ✅ Campo edad disabled con bg gris
- ✅ Campo edad retiro con +/- integrados
- ✅ Radio buttons custom
- ✅ 3 botones correctamente estilizados

**Visual Mobile:**
- ✅ Header adaptado
- ✅ Progress bar simplificado
- ✅ Campos verticales
- ✅ Botones stack

**Funcional:**
- ✅ Edad se calcula desde birthDate
- ✅ Botones +/- incrementan/decrementan
- ✅ Radio buttons cambian estado
- ✅ onNext envía datos correctos
- ✅ onBack navega atrás

**Calidad:**
- ✅ No hay errores en consola
- ✅ Tests pasan
- ✅ Build sin warnings
- ✅ Componentes reutilizables (Header, Footer, ProgressBar, ChatBubble)

---

## Validation Commands

```bash
# 1. Verificar componentes creados
ls src/components/
# Debe mostrar: Header.jsx, ProgressBar.jsx, Footer.jsx, ChatBubble.jsx

# 2. Dev server
npm run dev
# Navegar desde Login hasta Step1
# Verificar diseño desktop y mobile

# 3. Tests
npm run test

# 4. Build
npm run build

# 5. Screenshot comparación
# Comparar con HTML original
```

---

## Time Estimate

**Total: 2-2.5 horas**

- Crear componentes reutilizables: 40 min
  - Header: 10 min
  - ProgressBar: 15 min
  - Footer: 5 min
  - ChatBubble: 5 min (copiar de Login)
- Implementar Step1.jsx con estilos: 40 min
- Responsive design: 20 min
- Testing visual: 15 min
- Ajustes finales: 10 min

---

## Next Steps After Completion

**Fase 2 continuación:**
- Reutilizar Header, ProgressBar, Footer, ChatBubble en Step2-5
- Aplicar estilos a Step2.jsx (50% progress)
- Aplicar estilos a Step3.jsx (75% progress)
- Aplicar estilos a Step4.jsx (100% progress)

**Checkpoint Fase 2 Step1:**
- ✅ Step1 visualmente idéntico al HTML
- ✅ Componentes reutilizables creados
- ✅ Responsive funcional
- ✅ Funcionalidad mantiene intacta

---

## Notes

- **Importante:** HTML proporcionado es la ÚNICA fuente de verdad
- **Importante:** Header, Footer, ProgressBar, ChatBubble se reutilizarán en todos los steps
- **Importante:** Progress bar tiene 4 pasos (no 5 como en Fase 1 plan)
- **Importante:** Font SF Pro para botones (puede usar Noto Sans como fallback)
- **Importante:** Radio buttons usan icons custom (circle-check, circle) no input nativo
- **Importante:** Campo edad es calculado y disabled (no editable)
- Progress bar paso actual: círculo triple anidado
- Gradiente header: radial, no linear
- Separadores de sección: texto + línea gris
- Mobile progress bar: considerar versión simplificada

---

**Regla de oro Fase 2 Step1:** Componentes reutilizables + Pixel-perfect desktop + Responsive mobile.
