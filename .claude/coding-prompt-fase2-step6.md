# Fase 2: Step 6 Screen - Siembra Pension Simulator

## Feature Description

Implementar la pantalla Step6 (**Pantalla Final de Resultados**) con los estilos exactos del diseño HTML. Esta es la pantalla de **éxito y cierre del wizard** donde el usuario ve su resultado final, score 9/10, proyecciones con diferencia A FAVOR (tarjetas verdes emerald-50), su plan de acción personalizado con recomendaciones expandibles, y opciones para compartir/descargar/imprimir su planificación. El HTML proporcionado es la única fuente de verdad.

**IMPORTANTE**: Esta NO es una pantalla de paso del wizard, sino la **pantalla final de resultados y éxito** después de completar todos los pasos.

---

## HTML de Referencia (Fuente de Verdad)

**IMPORTANTE:** Este HTML es la ÚNICA fuente de verdad para el diseño. Todos los estilos, colores, tipografía y layout deben extraerse directamente de aquí.

**Ubicación:** `E:\Siembra\designs\step6.html`
**Referencia visual:** `E:\Siembra\designs\Step_ end - with photo.jpg`

```html
<div class="w-[1440px] h-[2276px] bg-white inline-flex flex-col justify-start items-start overflow-hidden">
  <!-- Header (igual que Step1-5) -->
  <div class="w-[1440px] h-24 px-80 py-4 bg-[radial-gradient(ellipse_1764.18%_941.76%_at_-0.00%_0.00%,_#005EB8_27%,_#8C0075_92%)] inline-flex justify-between items-center">
    <img class="w-32 h-14" src="https://placehold.co/130x56" />
    <div class="flex justify-start items-center gap-2">
      <div class="justify-start text-white text-3xl font-black font-['Font_Awesome_7_Free'] leading-8">circle-user</div>
      <div class="w-6 h-0 origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-white"></div>
      <div class="inline-flex flex-col justify-start items-start gap-1">
        <div class="justify-start text-white text-sm font-bold font-['Noto_Sans'] leading-4">Victor Santana</div>
        <div class="justify-start text-white text-xs font-normal font-['Noto_Sans'] leading-3">223-0057793-3</div>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="w-[1440px] flex-1 px-80 py-14 bg-white flex flex-col justify-start items-center gap-10">
    <!-- Banner superior con gradiente suave -->
    <div class="self-stretch pt-14 bg-[radial-gradient(ellipse_131.12%_131.12%_at_50.00%_-24.59%,_#FFE7BA_0%,_white_57%)] rounded-[30px] flex flex-col justify-center items-center gap-6">

      <!-- Foto usuario + iconos decorativos -->
      <div class="self-stretch inline-flex justify-center items-start gap-2.5">
        <img class="w-44 h-44 rounded-full" src="https://placehold.co/176x176" />
        <div class="w-7 h-6 bg-gradient-to-b from-orange-400 to-fuchsia-700 shadow-[0px_0px_8px_0px_rgba(140,0,117,1.00)]"></div>
        <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full shadow-[0px_4px_13px_0px_rgba(0,0,0,0.25)] shadow-[0px_0px_8px_0px_rgba(249,132,1,1.00)]"></div>
        <div class="w-14 h-14 opacity-40 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full shadow-[inset_0px_0px_13px_0px_rgba(163,68,0,1.00)]"></div>
        <div class="w-9 h-8 opacity-50 bg-gradient-to-b from-yellow-400 to-yellow-400 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.14)]"></div>
      </div>

      <div class="self-stretch flex flex-col justify-start items-center gap-4">
        <!-- Título -->
        <div class="self-stretch text-center justify-start text-Black text-6xl font-black font-['Noto_Sans'] leading-[56px]">¡Felicidades Alejandra!</div>

        <!-- Descripción -->
        <div class="self-stretch text-center justify-center text-Black text-2xl font-normal font-['Noto_Sans'] leading-7">Has completado tu planificación de retiro con éxito. Valoramos tu compromiso con una gestión financiera proactiva.</div>

        <!-- Gauge con score 9/10 -->
        <div class="self-stretch px-12 py-6 rounded-lg flex flex-col justify-center items-center gap-8">
          <div class="w-96 relative flex flex-col justify-center items-center">
            <div class="w-96 h-44 bg-White"></div>
            <div class="w-16 h-0 origin-top-left rotate-[-22.52deg] outline outline-[13px] outline-offset-[-6.50px] outline-Black"></div>
            <div class="self-stretch inline-flex justify-center items-center gap-2.5">
              <div class="flex-1 justify-center text-Black text-2xl font-normal font-['Noto_Sans'] leading-6">0</div>
              <div class="flex-1 text-right justify-center text-Black text-2xl font-normal font-['Noto_Sans'] leading-6">10</div>
            </div>
            <div class="px-2 py-1 left-[162px] top-[127px] absolute bg-Bost-Brey-00 rounded flex flex-col justify-center items-center gap-2.5">
              <div class="text-center justify-center text-Black text-3xl font-black font-['Noto_Sans'] leading-6">9</div>
            </div>
          </div>

          <!-- Texto resultado -->
          <div class="self-stretch flex flex-col justify-center items-start gap-2">
            <div class="self-stretch inline-flex justify-start items-start gap-2">
              <div class="flex-1 inline-flex flex-col justify-center items-center gap-2">
                <div class="self-stretch text-center justify-center"><span class="text-Black text-2xl font-normal font-['Noto_Sans'] leading-8">En base a tus decisiones obtuviste un resultado de </span><span class="text-Black text-2xl font-bold font-['Noto_Sans'] leading-8">9/10</span><span class="text-Black text-2xl font-normal font-['Noto_Sans'] leading-8">, demostrando que tienes el control para lograr el retiro que deseas.</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 Tarjetas VERDES (emerald-50 - éxito) -->
        <div class="self-stretch p-8 bg-stone-50 rounded-lg flex flex-col justify-start items-start gap-6">
          <div class="self-stretch inline-flex justify-start items-start gap-6">
            <!-- Pensión Deseada -->
            <div class="flex-1 p-4 bg-emerald-50 rounded-lg inline-flex flex-col justify-start items-start gap-1">
              <div class="self-stretch inline-flex justify-center items-center gap-2">
                <div class="flex-1 text-center justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Tu Pensión Deseada</div>
              </div>
              <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
                <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
              </div>
              <div class="self-stretch text-center justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$80,000</div>
            </div>

            <!-- Pensión Proyectada -->
            <div class="flex-1 p-4 bg-emerald-50 rounded-lg inline-flex flex-col justify-start items-start gap-1">
              <div class="self-stretch inline-flex justify-center items-center gap-2">
                <div class="flex-1 text-center justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Tu Pensión Proyectada</div>
              </div>
              <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
                <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
              </div>
              <div class="self-stretch text-center justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$120,000</div>
            </div>

            <!-- Diferencia A FAVOR -->
            <div class="flex-1 p-4 bg-emerald-50 rounded-lg inline-flex flex-col justify-start items-start gap-1">
              <div class="self-stretch inline-flex justify-center items-center gap-2">
                <div class="flex-1 text-center justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Diferencia a favor</div>
              </div>
              <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
                <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
              </div>
              <div class="self-stretch text-center justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$20,000</div>
            </div>
          </div>

          <!-- Descripción -->
          <div class="self-stretch justify-center"><span class="text-Black text-base font-bold font-['Noto_Sans'] leading-6">Tu Proyección de Pensión Avanzada</span><span class="text-Black text-base font-normal font-['Noto_Sans'] leading-6"> es el plan que has diseñado. Ahora, solo deberás aplicar estas acciones recomendadas para volverla una realidad.</span></div>
        </div>
      </div>

      <!-- Separador "Tu Plan de Acción" -->
      <div class="w-full max-w-[800px] py-4 inline-flex justify-start items-center gap-4">
        <div class="flex-1 h-0 origin-top-left -rotate-180 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Bost-Purple-Alcanza-50"></div>
        <div class="justify-start text-neutral-400 text-2xl font-bold font-['Noto_Sans'] leading-6">Tu Plan de Acción para el Retiro</div>
        <div class="flex-1 h-0 origin-top-left -rotate-180 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Bost-Purple-Alcanza-50"></div>
      </div>
    </div>

    <!-- Plan de Acción (3 secciones expandibles) -->
    <div class="flex flex-col justify-start items-start">
      <!-- Sección 1: Gestión de ahorro voluntario (EXPANDIDA) -->
      <div class="w-[800px] px-4 py-8 bg-neutral-50 rounded-2xl flex flex-col justify-start items-start gap-6">
        <div class="self-stretch px-6 flex flex-col justify-start items-start gap-4">
          <div class="self-stretch inline-flex justify-start items-center gap-2">
            <div class="flex-1 justify-start text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">Gestión de ahorro voluntario</div>
            <div class="flex justify-start items-center gap-2">
              <div data-property-1="chevron-down" class="w-4 h-4 relative overflow-hidden">
                <div class="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-Input-Label"></div>
              </div>
              <div class="justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Mostrar menos detalles</div>
            </div>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-3">
            <!-- Item 1 -->
            <div class="self-stretch p-4 bg-neutral-100 rounded-2xl inline-flex justify-start items-start gap-6">
              <div class="flex justify-start items-center gap-6">
                <div class="w-10 h-10 bg-Bost-Orange-Alcanza-50 rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                  <div class="self-stretch text-center justify-start text-white text-base font-bold font-['Noto_Sans']">1</div>
                </div>
              </div>
              <div class="flex-1 justify-start"><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Destinar </span><span class="text-neutral-600 text-base font-bold font-['Noto_Sans'] leading-5">RD$ 500,000</span><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5"> mensuales a un fondo de ahorro voluntario, con el objetivo de acumular el capital necesario para complementar la pensión obligatoria.</span></div>
            </div>
            <!-- Item 2 -->
            <div class="self-stretch p-4 bg-neutral-100 rounded-2xl inline-flex justify-start items-start gap-6">
              <div class="flex justify-start items-center gap-6">
                <div class="w-10 h-10 bg-Bost-Orange-Alcanza-50 rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                  <div class="self-stretch text-center justify-start text-white text-base font-bold font-['Noto_Sans']">2</div>
                </div>
              </div>
              <div class="flex-1 justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Revisar y ajustar el plan de ahorro cada 6 meses, asegurando que la estrategia se mantenga alineada con las condiciones del mercado y con tus necesidades financieras.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 2: Reducción de deudas (COLAPSADA) -->
      <div class="w-[800px] px-4 py-8 bg-neutral-50 border-t border-b border-zinc-300 flex flex-col justify-start items-start gap-6">
        <div class="self-stretch px-6 flex flex-col justify-start items-start gap-4">
          <div class="self-stretch inline-flex justify-start items-center gap-2">
            <div class="flex-1 justify-start text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">Reducción de deudas</div>
            <div class="opacity-0 flex justify-start items-center gap-2">
              <div data-property-1="chevron-down" class="w-4 h-4 relative overflow-hidden">
                <div class="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-Input-Label"></div>
              </div>
              <div class="justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Mostrar mas detalles</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 3: Preparación para pensión obligatoria (COLAPSADA) -->
      <div class="w-[800px] px-4 py-8 bg-neutral-50 border-t border-zinc-300 flex flex-col justify-start items-start gap-6">
        <div class="self-stretch px-6 flex flex-col justify-start items-start gap-4">
          <div class="self-stretch inline-flex justify-start items-center gap-2">
            <div class="flex-1 justify-start text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">Preparación para pensión obligatoria</div>
            <div class="opacity-0 flex justify-start items-center gap-2">
              <div data-property-1="chevron-down" class="w-4 h-4 relative overflow-hidden">
                <div class="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-Input-Label"></div>
              </div>
              <div class="justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Mostrar mas detalles</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botones de acción -->
    <div class="self-stretch pt-6 flex flex-col justify-start items-start gap-4">
      <div class="w-full max-w-[800px] py-4 inline-flex justify-center items-start gap-6">
        <!-- Compartir -->
        <div class="px-6 py-4 rounded-3xl outline outline-2 outline-offset-[-2px] outline-orange-400 flex justify-center items-center gap-2.5">
          <div class="text-center justify-end text-orange-400 text-base font-bold font-['SF_Pro'] leading-5">Compartir </div>
          <div class="w-6 h-6 relative overflow-hidden">
            <div class="w-4 h-2.5 left-[4px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
            <div class="w-2 h-1 left-[8px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
            <div class="w-0 h-3 left-[12px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
          </div>
        </div>
        <!-- Descargar -->
        <div class="px-6 py-4 rounded-3xl outline outline-2 outline-offset-[-2px] outline-orange-400 flex justify-center items-center gap-2.5">
          <div class="text-center justify-end text-orange-400 text-base font-bold font-['SF_Pro'] leading-5">Descargar planificación</div>
          <div class="w-6 h-6 relative overflow-hidden">
            <div class="w-4 h-1.5 left-[3px] top-[15px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
            <div class="w-2.5 h-[5px] left-[7px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
            <div class="w-0 h-3 left-[12px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
          </div>
        </div>
        <!-- Imprimir -->
        <div class="px-6 py-4 rounded-3xl outline outline-2 outline-offset-[-2px] outline-Bost-Orange-00 flex justify-center items-center gap-2.5">
          <div class="text-center justify-end text-Bost-Orange-00 text-base font-bold font-['SF_Pro'] leading-5">Imprimir planificación</div>
          <div class="w-6 h-6 relative overflow-hidden">
            <div class="w-3 h-1.5 left-[6px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
            <div class="w-5 h-2 left-[2px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
            <div class="w-3 h-2 left-[6px] top-[14px] absolute outline outline-2 outline-offset-[-1px] outline-Bost-Orange-00"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Texto final -->
    <div class="self-stretch text-center justify-center"><span class="text-Black text-2xl font-normal font-['Noto_Sans'] leading-7">Listo: te enviamos por correo la evaluación, tu </span><span class="text-Black text-2xl font-bold font-['Noto_Sans'] leading-7">Proyección Avanzada y tus recomendaciones.</span></div>

    <!-- Logos Siembra + Alcanza -->
    <div class="self-stretch py-6 inline-flex justify-center items-center gap-2.5">
      <img class="w-32 h-16" src="https://placehold.co/124x61" />
      <div class="w-10 h-0 origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-gray-200"></div>
      <img class="w-44 h-14" src="https://placehold.co/169x55" />
    </div>
  </div>

  <!-- Footer (igual que Step1-5) -->
  <div class="w-[1440px] h-24 inline-flex justify-center items-center gap-2.5">
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">Términos & condiciones</div>
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">•</div>
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">© 2025 AFP Siembra. Todos los derechos reservados.</div>
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">•</div>
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">Su información está protegida y será utilizada únicamente para generar su plan de pensiones personalizado</div>
  </div>

  <!-- Chat bubble flotante -->
  <div class="w-20 h-20 bg-Bost-Orange-100"></div>
  <div class="w-20 h-20 bg-Bost-Orange-100 rounded-full"></div>
  <div class="justify-start text-White text-xl font-black font-['Font_Awesome_7_Free']">message</div>
  <div class="w-52 h-14 bg-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.14)]"></div>
  <div class="w-44 justify-start text-Black text-sm font-normal font-['Noto_Sans']">Hola! Soy Marcos tu asesor financiero</div>
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
// El componente Step6 (ResultScreen) recibe estas props:
{
  data: {
    name: string,                    // "Alejandra"
    documentId: string,
    userPhoto: string | null,        // URL de foto (opcional, de Step5 modal)

    // Proyecciones finales (de Step4)
    desiredPension: number,          // RD$80,000
    projectedPension: number,        // RD$120,000 (avanzada)
    difference: number,              // RD$20,000 (A FAVOR)
    score: number,                   // 9 (de 10)

    // Plan de acción (generado por mockData)
    actionPlan: {
      voluntarySavings: {
        expanded: boolean,
        items: Array<{ description: string }>
      },
      debtReduction: {
        expanded: boolean,
        items: Array<{ description: string }>
      },
      retirementPreparation: {
        expanded: boolean,
        items: Array<{ description: string }>
      }
    }
  },
  onShare: () => void,              // Callback compartir
  onDownload: () => void,           // Callback descargar PDF
  onPrint: () => void               // Callback imprimir
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
│   │   ├── Login.jsx           # EXISTE
│   │   ├── Step1.jsx           # EXISTE
│   │   ├── Step2.jsx           # EXISTE
│   │   ├── Step3.jsx           # EXISTE
│   │   ├── Step4.jsx           # EXISTE
│   │   └── Step6Result.jsx     # CREAR (pantalla final)
│   ├── components/
│   │   ├── Header.jsx          # EXISTE (reutilizable)
│   │   ├── Footer.jsx          # EXISTE (reutilizable)
│   │   ├── ChatBubble.jsx      # EXISTE (reutilizable)
│   │   └── AIPhotoModal.jsx    # EXISTE (Step5)
│   └── data/
│       └── mockData.js         # EXISTE (agregar generateActionPlan)
├── img/
│   ├── logo-siembra.png
│   └── logo-alcanza.png
└── designs/
    ├── step6.html              # HTML de referencia
    └── Step_ end - with photo.jpg  # Imagen de referencia
```

---

## Problem Solving

**Problema:** Después de completar el wizard (Step4 y opcionalmente Step5), el usuario necesita ver una pantalla de **éxito y cierre** que muestre:
- Su resultado final (score 9/10)
- Sus proyecciones exitosas (diferencia A FAVOR en tarjetas verdes)
- Su plan de acción personalizado
- Opciones para compartir/descargar/imprimir

**Requerimientos:**
- Header y Footer reutilizables (igual que Step1-4)
- Banner superior con gradiente suave amarillo-blanco
- Foto de usuario (si subió en Step5 modal)
- Iconos decorativos con gradientes (igual que Step5 modal)
- Título de felicitación personalizado con nombre del usuario
- Gauge visual con score 9/10 (semicírculo + aguja)
- 3 tarjetas **emerald-50** (VERDE - éxito): Pensión Deseada, Proyectada, Diferencia A FAVOR
- Plan de acción con 3 secciones expandibles/colapsables
- 3 botones: Compartir, Descargar, Imprimir
- Logos de Siembra + Alcanza
- Chat bubble con mensaje del asesor
- **NO hay botones de navegación** (es pantalla final)
- **Responsive design:** Ajustar layout en mobile

---

## User Story

```
Como usuario del simulador,
Quiero ver mi resultado final exitoso con mi plan de pensiones personalizado,
Para sentirme motivado y tener claridad sobre las acciones a seguir para lograr mi retiro deseado.

Acceptance Criteria:
- Veo mi score 9/10 en un gauge visual
- Veo mis proyecciones finales con diferencia A FAVOR (tarjetas verdes)
- Veo mi plan de acción con recomendaciones específicas
- Puedo expandir/colapsar las secciones del plan
- Puedo compartir mi resultado
- Puedo descargar mi planificación en PDF
- Puedo imprimir mi planificación
- El diseño es coherente con los pasos anteriores
- La pantalla celebra mi éxito (tone positivo)
```

---

## Solution & Approach

**Enfoque elegido:** Pantalla de resultados estática + Secciones colapsables + Actions

**Por qué:**
- ✅ Pantalla final de éxito (no es paso del wizard)
- ✅ Secciones expandibles mejoran UX (información progresiva)
- ✅ Botones de acción permiten guardar/compartir resultados
- ✅ Tarjetas verdes (emerald-50) celebran éxito vs tarjetas rojas (rose-100) de déficit
- ✅ Gauge visual refuerza score alto (9/10)
- ✅ Foto de usuario (si existe) personaliza experiencia

---

## Relevant Files & Documentation

### Files to Create/Modify

```
E:\Siembra/
├── src/
│   ├── pages/
│   │   └── Step6Result.jsx         # CREAR: pantalla final de resultados
│   ├── data/
│   │   └── mockData.js             # MODIFICAR: agregar generateActionPlan()
│   └── App.jsx                     # MODIFICAR: agregar Step6 después de Step4/5
└── img/
    ├── logo-siembra.png            # Logo principal
    └── logo-alcanza.png            # Logo secundario
```

### Reference Documentation

- HTML source (proporcionado) - ÚNICA FUENTE DE VERDAD
- Imagen visual (proporcionada) - Referencia visual
- [Tailwind Gradients](https://tailwindcss.com/docs/gradient-color-stops)
- [React useState for Collapsible](https://react.dev/reference/react/useState)

---

## Implementation Plan

### 1. Análisis del HTML Source

**Estructura identificada:**

```html
<div> <!-- Container -->
  <!-- Header (reutilizable) -->

  <!-- Main Content -->
  <div class="main">
    <!-- Banner superior con gradiente -->
    <div class="banner bg-[radial-gradient...]">
      <!-- Foto + iconos decorativos -->
      <!-- Título "¡Felicidades Alejandra!" -->
      <!-- Descripción -->

      <!-- Gauge con score 9/10 -->
      <!-- Texto resultado -->

      <!-- 3 tarjetas emerald-50 (verde - éxito) -->
      <!-- Descripción plan avanzado -->

      <!-- Separador "Tu Plan de Acción" -->
    </div>

    <!-- 3 secciones colapsables -->
    <!-- Botones: Compartir, Descargar, Imprimir -->
    <!-- Texto final -->
    <!-- Logos Siembra + Alcanza -->
  </div>

  <!-- Footer (reutilizable) -->
  <!-- Chat bubble (reutilizable) -->
</div>
```

**Colores exactos:**

```css
/* Banner superior */
--banner-gradient: radial-gradient(ellipse 131.12% 131.12% at 50% -24.59%, #FFE7BA 0%, white 57%)

/* Tarjetas ÉXITO (emerald-50) */
--card-success: #ECFDF5  /* emerald-50 */
--card-bg-outer: #F5F5F4 /* stone-50 */

/* Plan de acción */
--section-bg: #FAFAFA       /* neutral-50 */
--item-bg: #F5F5F5          /* neutral-100 */
--number-badge: #FF7933     /* Bost-Orange-Alcanza-50 */

/* Iconos decorativos (igual que Step5 modal) */
--gradient-1: linear-gradient(180deg, #FB923C 0%, #A21CAF 100%)
--gradient-2: linear-gradient(135deg, #F59E0B 0%, #F59E0B 100%)
--gradient-3: linear-gradient(180deg, #FACC15 0%, #FACC15 100%)

/* Gauge */
--gauge-needle: #000000
--gauge-score-bg: #4C4C4C  /* Bost-Brey-00 */

/* Texto */
--title-color: #000000          /* Black */
--text-color: #4C4C4C           /* neutral-600 */
--section-title: #9CA3AF       /* neutral-400 */
```

**Tipografía:**

- Título principal: 60px black (text-6xl font-black leading-[56px])
- Descripción: 24px regular (text-2xl font-normal leading-7)
- Score result: 24px regular + 24px bold (text-2xl)
- Tarjetas valores: 20px black (text-xl font-black)
- Section titles: 24px bold (text-2xl font-bold)
- Items: 16px regular (text-base font-normal)
- Botones: 16px bold (text-base font-bold)
- Texto final: 24px regular/bold (text-2xl)

**Componentes clave:**

1. **Banner Superior con Gradiente:**
   - Background: radial-gradient amarillo → blanco
   - Border-radius: 30px (rounded-[30px])
   - Padding: pt-14 (top), p-8 (general)

2. **Foto + Iconos Decorativos:**
   - Foto: 176x176px circular
   - 4 iconos con gradientes y efectos de brillo (igual que Step5 modal)

3. **Gauge Visual (Score 9/10):**
   - Semicírculo SVG con aguja negra
   - Aguja rotada -22.52deg (apuntando a 9)
   - Badge de score centrado: bg-[#4C4C4C], text 3xl black
   - Etiquetas 0 y 10 en extremos

4. **3 Tarjetas Éxito (emerald-50):**
   - Background: emerald-50 (verde suave - ÉXITO)
   - Border-radius: 8px (rounded-lg)
   - Divider: línea negra 10% opacity
   - Valores en text-xl font-black

5. **Secciones Colapsables:**
   - 3 secciones: Gestión ahorro, Reducción deudas, Preparación pensión
   - Primera sección expandida por defecto
   - Toggle icon: chevron-down
   - Items numerados con badge naranja
   - Background: neutral-50 para sección, neutral-100 para items

6. **Botones de Acción:**
   - 3 botones: Compartir, Descargar, Imprimir
   - Todos outline naranja (outline-2 outline-orange-400)
   - Iconos: share, download, print (Font Awesome o emojis: 📤, 📥, 🖨️)
   - Border-radius: rounded-3xl

---

### 2. Crear Componente Step6Result.jsx

**Archivo:** `src/pages/Step6Result.jsx`

```jsx
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'

export default function Step6Result({ data, onShare, onDownload, onPrint }) {
  const [expandedSections, setExpandedSections] = useState({
    voluntarySavings: true,
    debtReduction: false,
    retirementPreparation: false
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 0,
    }).format(value)
  }

  // Calcular rotación de aguja según score (0-10)
  const needleRotation = (data.score / 10) * 180 - 90

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header
        userName={data.name || 'Usuario'}
        userDocument={data.documentId || '---'}
      />

      {/* Main Content */}
      <div className="flex-1 px-4 lg:px-80 py-8 lg:py-14 bg-white flex flex-col items-center gap-10">
        {/* Banner Superior */}
        <div
          className="w-full pt-10 lg:pt-14 rounded-[30px] flex flex-col items-center gap-6"
          style={{
            background: 'radial-gradient(ellipse 131.12% 131.12% at 50% -24.59%, #FFE7BA 0%, white 57%)'
          }}
        >
          {/* Foto + Iconos Decorativos */}
          <div className="flex justify-center items-start gap-2.5">
            {data.userPhoto ? (
              <img
                src={data.userPhoto}
                alt={data.name}
                className="w-32 h-32 lg:w-44 lg:h-44 rounded-full object-cover"
              />
            ) : (
              <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-orange-400 to-fuchsia-700 flex items-center justify-center">
                <span className="text-white text-6xl">
                  {data.name ? data.name[0].toUpperCase() : '?'}
                </span>
              </div>
            )}
            {/* Iconos decorativos */}
            <div className="w-7 h-6 bg-gradient-to-b from-orange-400 to-fuchsia-700 shadow-[0px_0px_8px_rgba(140,0,117,1)]" />
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full shadow-[0px_4px_13px_rgba(0,0,0,0.25),0px_0px_8px_rgba(249,132,1,1)]" />
            <div className="w-10 h-10 lg:w-14 lg:h-14 opacity-40 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full shadow-[inset_0px_0px_13px_rgba(163,68,0,1)]" />
            <div className="w-7 h-6 lg:w-9 lg:h-8 opacity-50 bg-gradient-to-b from-yellow-400 to-yellow-400 shadow-[0px_0px_12px_rgba(0,0,0,0.14)]" />
          </div>

          {/* Contenido del Banner */}
          <div className="w-full flex flex-col items-center gap-4 px-4 lg:px-12">
            {/* Título */}
            <h1 className="text-center text-black text-4xl lg:text-6xl font-black leading-tight lg:leading-[56px]">
              ¡Felicidades {data.name}!
            </h1>

            {/* Descripción */}
            <p className="text-center text-black text-lg lg:text-2xl font-normal leading-6 lg:leading-7 max-w-[800px]">
              Has completado tu planificación de retiro con éxito. Valoramos tu compromiso con una gestión financiera proactiva.
            </p>

            {/* Gauge con Score */}
            <div className="w-full px-4 lg:px-12 py-6 rounded-lg flex flex-col items-center gap-8">
              <div className="w-full max-w-[384px] relative flex flex-col items-center">
                {/* SVG Gauge */}
                <svg
                  viewBox="0 0 384 176"
                  className="w-full h-44"
                  style={{ overflow: 'visible' }}
                >
                  {/* Semicírculo de fondo */}
                  <path
                    d="M 20 150 A 172 172 0 0 1 364 150"
                    fill="none"
                    stroke="#E5E5E5"
                    strokeWidth="8"
                  />

                  {/* Aguja indicadora */}
                  <g transform={`rotate(${needleRotation} 192 150)`}>
                    <line
                      x1="192"
                      y1="150"
                      x2="192"
                      y2="30"
                      stroke="black"
                      strokeWidth="13"
                      strokeLinecap="round"
                    />
                    <circle cx="192" cy="150" r="8" fill="black" />
                  </g>
                </svg>

                {/* Etiquetas 0 y 10 */}
                <div className="w-full flex justify-between px-2 text-black text-xl lg:text-2xl font-normal">
                  <span>0</span>
                  <span>10</span>
                </div>

                {/* Badge Score */}
                <div
                  className="absolute top-[127px] left-1/2 -translate-x-1/2 px-2 py-1 bg-[#4C4C4C] rounded flex items-center justify-center"
                >
                  <span className="text-black text-2xl lg:text-3xl font-black leading-6">
                    {data.score}
                  </span>
                </div>
              </div>

              {/* Texto Resultado */}
              <div className="w-full max-w-[800px]">
                <p className="text-center text-black text-lg lg:text-2xl leading-6 lg:leading-8">
                  En base a tus decisiones obtuviste un resultado de{' '}
                  <span className="font-bold">{data.score}/10</span>,
                  demostrando que tienes el control para lograr el retiro que deseas.
                </p>
              </div>
            </div>

            {/* 3 Tarjetas VERDES (emerald-50) */}
            <div className="w-full max-w-[800px] p-6 lg:p-8 bg-stone-50 rounded-lg flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Pensión Deseada */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <p className="text-center text-black text-base font-normal leading-4">
                    Tu Pensión Deseada
                  </p>
                  <div className="w-full h-px bg-black opacity-10 my-2" />
                  <p className="text-center text-black text-xl font-black leading-5">
                    {formatCurrency(data.desiredPension)}
                  </p>
                </div>

                {/* Pensión Proyectada */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <p className="text-center text-black text-base font-normal leading-4">
                    Tu Pensión Proyectada
                  </p>
                  <div className="w-full h-px bg-black opacity-10 my-2" />
                  <p className="text-center text-black text-xl font-black leading-5">
                    {formatCurrency(data.projectedPension)}
                  </p>
                </div>

                {/* Diferencia A FAVOR */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <p className="text-center text-black text-base font-normal leading-4">
                    Diferencia a favor
                  </p>
                  <div className="w-full h-px bg-black opacity-10 my-2" />
                  <p className="text-center text-black text-xl font-black leading-5">
                    {formatCurrency(data.difference)}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-center text-black text-base leading-6">
                <span className="font-bold">Tu Proyección de Pensión Avanzada</span>
                {' '}es el plan que has diseñado. Ahora, solo deberás aplicar estas acciones recomendadas para volverla una realidad.
              </p>
            </div>
          </div>

          {/* Separador "Tu Plan de Acción" */}
          <div className="w-full max-w-[800px] py-4 flex items-center gap-4 px-4">
            <div className="flex-1 h-px bg-neutral-400 opacity-10" />
            <h2 className="text-neutral-400 text-xl lg:text-2xl font-bold leading-6 whitespace-nowrap">
              Tu Plan de Acción para el Retiro
            </h2>
            <div className="flex-1 h-px bg-neutral-400 opacity-10" />
          </div>
        </div>

        {/* Plan de Acción (3 Secciones Colapsables) */}
        <div className="w-full max-w-[800px] flex flex-col">
          {/* Sección 1: Gestión de ahorro voluntario */}
          <div className="px-4 py-8 bg-neutral-50 rounded-t-2xl flex flex-col gap-6">
            <div className="px-2 lg:px-6 flex flex-col gap-4">
              <button
                onClick={() => toggleSection('voluntarySavings')}
                className="w-full flex items-center gap-2 text-left"
              >
                <h3 className="flex-1 text-black text-xl lg:text-2xl font-bold leading-6">
                  Gestión de ahorro voluntario
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#4C4C4C]">
                    {expandedSections.voluntarySavings ? '▼' : '▶'}
                  </span>
                  <span className="text-[#4C4C4C] text-base font-normal leading-4 hidden lg:inline">
                    {expandedSections.voluntarySavings ? 'Mostrar menos detalles' : 'Mostrar más detalles'}
                  </span>
                </div>
              </button>

              {expandedSections.voluntarySavings && (
                <div className="flex flex-col gap-3">
                  {/* Item 1 */}
                  <div className="p-4 bg-neutral-100 rounded-2xl flex gap-4 lg:gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-bold">1</span>
                    </div>
                    <p className="flex-1 text-neutral-600 text-sm lg:text-base leading-5">
                      Destinar <span className="font-bold">RD$ 500,000</span> mensuales a un fondo de ahorro voluntario, con el objetivo de acumular el capital necesario para complementar la pensión obligatoria.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="p-4 bg-neutral-100 rounded-2xl flex gap-4 lg:gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-bold">2</span>
                    </div>
                    <p className="flex-1 text-neutral-600 text-sm lg:text-base leading-5">
                      Revisar y ajustar el plan de ahorro cada 6 meses, asegurando que la estrategia se mantenga alineada con las condiciones del mercado y con tus necesidades financieras.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sección 2: Reducción de deudas */}
          <div className="px-4 py-8 bg-neutral-50 border-t border-b border-zinc-300">
            <button
              onClick={() => toggleSection('debtReduction')}
              className="w-full px-2 lg:px-6 flex items-center gap-2 text-left"
            >
              <h3 className="flex-1 text-black text-xl lg:text-2xl font-bold leading-6">
                Reducción de deudas
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[#4C4C4C]">
                  {expandedSections.debtReduction ? '▼' : '▶'}
                </span>
                <span className="text-[#4C4C4C] text-base font-normal leading-4 hidden lg:inline">
                  {expandedSections.debtReduction ? 'Mostrar menos detalles' : 'Mostrar más detalles'}
                </span>
              </div>
            </button>

            {expandedSections.debtReduction && (
              <div className="mt-4 px-2 lg:px-6 flex flex-col gap-3">
                {/* Items... (similar estructura) */}
              </div>
            )}
          </div>

          {/* Sección 3: Preparación para pensión obligatoria */}
          <div className="px-4 py-8 bg-neutral-50 border-t border-zinc-300 rounded-b-2xl lg:rounded-none">
            <button
              onClick={() => toggleSection('retirementPreparation')}
              className="w-full px-2 lg:px-6 flex items-center gap-2 text-left"
            >
              <h3 className="flex-1 text-black text-xl lg:text-2xl font-bold leading-6">
                Preparación para pensión obligatoria
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[#4C4C4C]">
                  {expandedSections.retirementPreparation ? '▼' : '▶'}
                </span>
                <span className="text-[#4C4C4C] text-base font-normal leading-4 hidden lg:inline">
                  {expandedSections.retirementPreparation ? 'Mostrar menos detalles' : 'Mostrar más detalles'}
                </span>
              </div>
            </button>

            {expandedSections.retirementPreparation && (
              <div className="mt-4 px-2 lg:px-6 flex flex-col gap-3">
                {/* Items... */}
              </div>
            )}
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="w-full max-w-[800px] pt-6 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 lg:gap-6">
            {/* Compartir */}
            <button
              onClick={onShare}
              className="px-6 py-4 rounded-3xl border-2 border-orange-400 text-orange-400 text-base font-bold leading-5 flex items-center justify-center gap-2.5 hover:bg-orange-50 transition-colors"
            >
              <span>Compartir</span>
              <span className="text-xl">📤</span>
            </button>

            {/* Descargar */}
            <button
              onClick={onDownload}
              className="px-6 py-4 rounded-3xl border-2 border-orange-400 text-orange-400 text-base font-bold leading-5 flex items-center justify-center gap-2.5 hover:bg-orange-50 transition-colors"
            >
              <span>Descargar planificación</span>
              <span className="text-xl">📥</span>
            </button>

            {/* Imprimir */}
            <button
              onClick={onPrint}
              className="px-6 py-4 rounded-3xl border-2 border-[#FF7933] text-[#FF7933] text-base font-bold leading-5 flex items-center justify-center gap-2.5 hover:bg-orange-50 transition-colors"
            >
              <span>Imprimir planificación</span>
              <span className="text-xl">🖨️</span>
            </button>
          </div>
        </div>

        {/* Texto Final */}
        <p className="text-center text-black text-lg lg:text-2xl leading-6 lg:leading-7 max-w-[800px]">
          Listo: te enviamos por correo la evaluación, tu{' '}
          <span className="font-bold">Proyección Avanzada y tus recomendaciones.</span>
        </p>

        {/* Logos Siembra + Alcanza */}
        <div className="py-6 flex items-center justify-center gap-2.5">
          <img
            src="/img/logo-siembra.png"
            alt="AFP Siembra"
            className="w-24 h-12 lg:w-32 lg:h-16 object-contain"
          />
          <div className="w-10 h-px rotate-90 border-t-2 border-gray-200" />
          <img
            src="/img/logo-alcanza.png"
            alt="Alcanza"
            className="w-32 h-10 lg:w-44 lg:h-14 object-contain"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Chat Bubble con mensaje */}
      <div className="fixed bottom-20 right-4 lg:bottom-24 lg:right-8 flex flex-col items-end gap-2 z-40">
        <div className="px-4 py-3 bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.14)] rounded-lg">
          <p className="text-black text-sm font-normal whitespace-nowrap">
            Hola! Soy Marcos tu asesor financiero
          </p>
        </div>
        <ChatBubble />
      </div>
    </div>
  )
}
```

---

### 3. Actualizar mockData.js

**Agregar función:** `generateActionPlan()`

```javascript
// Generar plan de acción personalizado
export function generateActionPlan(userData, advancedParams) {
  const plan = {
    voluntarySavings: {
      expanded: true,
      items: [
        {
          description: `Destinar RD$ ${advancedParams.advancedVoluntaryContribution.toLocaleString()} mensuales a un fondo de ahorro voluntario, con el objetivo de acumular el capital necesario para complementar la pensión obligatoria.`
        },
        {
          description: 'Revisar y ajustar el plan de ahorro cada 6 meses, asegurando que la estrategia se mantenga alineada con las condiciones del mercado y con tus necesidades financieras.'
        }
      ]
    },
    debtReduction: {
      expanded: false,
      items: [
        {
          description: 'Priorizar el pago de deudas con mayor tasa de interés (tarjetas de crédito).'
        },
        {
          description: 'Destinar al menos 20% de tus ingresos mensuales al pago de deudas hasta eliminarlas.'
        }
      ]
    },
    retirementPreparation: {
      expanded: false,
      items: [
        {
          description: 'Revisar anualmente tu proyección de pensión obligatoria con tu AFP.'
        },
        {
          description: 'Evaluar opciones de pensión mixta (obligatoria + voluntaria) para optimizar retiro.'
        }
      ]
    }
  }

  return plan
}
```

---

### 4. Integrar Step6 en App.jsx

```jsx
import Step6Result from './pages/Step6Result'
import { generateActionPlan } from './data/mockData'

export default function App() {
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState(defaultUserData)
  const [showAIModal, setShowAIModal] = useState(false)

  const handleNextStep = (newData) => {
    setUserData({ ...userData, ...newData })

    // Después de Step4, mostrar modal IA (opcional)
    if (step === 4) {
      setShowAIModal(true)
    }

    setStep(step + 1)
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
      {/* ... Steps 0-4 ... */}

      {/* Paso 5: Modal IA (opcional) */}
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
            actionPlan: generateActionPlan(userData, userData.advancedParams || {})
          }}
          onShare={handleShare}
          onDownload={handleDownload}
          onPrint={handlePrint}
        />
      )}
    </div>
  )
}
```

---

### 5. Implementar Responsive Design

**Ajustes por dispositivo:**

#### Mobile (< 768px):
- **Banner:**
  - Padding reducido: p-4
  - Foto usuario: 128x128px (w-32 h-32)
  - Iconos decorativos más pequeños (scale-75)
  - Título: text-4xl
  - Gauge: width 100%, height auto
- **Tarjetas:**
  - Stack verticalmente (flex-col)
  - Full width
- **Secciones:**
  - Padding reducido: p-4
  - Texto toggle oculto (solo icono)
- **Botones:**
  - Stack verticalmente (flex-col)
  - Full width

#### Tablet (768px - 1023px):
- Tamaños intermedios
- Foto: 160x160px
- Gauge: width 350px

#### Desktop (≥1024px):
- **Diseño original del HTML**
- Container max-w-[800px]
- Foto: 176x176px
- Gauge: width 384px

---

## Testing Strategy

### Visual Testing (Manual)

**Checklist Desktop:**

- [ ] **Banner Superior:**
  - [ ] Gradiente amarillo → blanco visible
  - [ ] Foto usuario circular (176x176px)
  - [ ] Iconos decorativos con gradientes y efectos de brillo
  - [ ] Título "¡Felicidades {name}!" centrado
  - [ ] Descripción legible

- [ ] **Gauge:**
  - [ ] Semicírculo visible
  - [ ] Aguja apuntando a score correcto (9/10)
  - [ ] Badge de score centrado
  - [ ] Etiquetas 0 y 10 en extremos

- [ ] **Tarjetas Éxito:**
  - [ ] 3 tarjetas emerald-50 (verde)
  - [ ] Valores formateados correctamente
  - [ ] Dividers visibles (línea negra 10% opacity)

- [ ] **Secciones Colapsables:**
  - [ ] Primera sección expandida por defecto
  - [ ] Toggle funciona al clickear
  - [ ] Icono chevron cambia (▼ ↔ ▶)
  - [ ] Items numerados con badge naranja
  - [ ] Texto legible

- [ ] **Botones:**
  - [ ] 3 botones outline naranja
  - [ ] Iconos visibles
  - [ ] Hover effects funcionan
  - [ ] Click llama a callbacks correctos

- [ ] **Footer:**
  - [ ] Logos Siembra + Alcanza visibles
  - [ ] Separador vertical visible
  - [ ] Footer legal visible

- [ ] **Chat Bubble:**
  - [ ] Mensaje "Hola! Soy Marcos..." visible
  - [ ] Flotante bottom-right
  - [ ] Clickeable

**Checklist Mobile:**

- [ ] Banner adaptado
- [ ] Foto más pequeña (128x128px)
- [ ] Iconos escalados
- [ ] Gauge responsive
- [ ] Tarjetas stack verticalmente
- [ ] Secciones scroll correctamente
- [ ] Botones stack verticalmente full width

### Functional Testing

```bash
# Verificar:
# - Secciones se expanden/colapsan correctamente
# - Botón Compartir llama a navigator.share (o fallback)
# - Botón Descargar genera PDF (mock)
# - Botón Imprimir abre diálogo de impresión
# - Chat bubble clickeable
# - Gauge aguja apunta a score correcto
# - Tarjetas muestran valores correctos
```

### Responsive Testing

- [ ] **Mobile (375px):** Layout correcto, todos elementos visibles
- [ ] **Tablet (768px):** Layout intermedio
- [ ] **Desktop (1440px):** Diseño original

---

## Edge Cases

### No User Photo

**Problema:** Usuario no subió foto en Step5 modal
**Solución:**
- Mostrar círculo con gradiente y inicial del nombre
- Mantener iconos decorativos

### Score Muy Bajo (< 5)

**Problema:** Usuario tiene score bajo
**Solución:**
- Mantener celebración (ya llegó al final)
- Ajustar mensaje (enfatizar mejora en lugar de éxito)
- Considerar tarjetas amarillas (amber-50) en lugar de verdes

### Plan de Acción Vacío

**Problema:** No hay items en alguna sección
**Solución:**
- Mostrar mensaje: "No hay recomendaciones específicas para esta categoría"
- Deshabilitar toggle

### Gauge Score = 0

**Problema:** Score 0 causa aguja en posición extraña
**Solución:**
- Clamp score entre 0-10
- Aguja rotación: -90deg para 0, 0deg para 5, 90deg para 10

### Share API No Disponible

**Problema:** Navegador no soporta navigator.share
**Solución:**
- Fallback: copiar URL al clipboard
- Mostrar toast: "Enlace copiado al portapapeles"

### Print Styling

**Problema:** Print incluye elementos no deseados (header, footer, chat)
**Solución:**
- Agregar media query @media print
- Ocultar header, footer, chat, botones
- Mostrar solo contenido principal

---

## Acceptance Criteria

**Visual Desktop:**
- ✅ Banner con gradiente amarillo-blanco correcto
- ✅ Foto usuario circular 176x176px
- ✅ Iconos decorativos con gradientes y brillo
- ✅ Título personalizado con nombre
- ✅ Gauge semicírculo con aguja apuntando a score
- ✅ 3 tarjetas emerald-50 (verde - éxito)
- ✅ Secciones colapsables funcionan
- ✅ 3 botones outline naranja con iconos
- ✅ Logos Siembra + Alcanza visibles
- ✅ Chat bubble con mensaje

**Visual Mobile:**
- ✅ Banner adaptado
- ✅ Foto más pequeña
- ✅ Gauge responsive
- ✅ Tarjetas stack verticalmente
- ✅ Botones stack verticalmente

**Funcional:**
- ✅ Secciones se expanden/colapsan
- ✅ Botón Compartir funciona (Web Share API o fallback)
- ✅ Botón Descargar genera PDF (mock o real)
- ✅ Botón Imprimir abre diálogo
- ✅ Gauge aguja apunta a score correcto
- ✅ Valores formateados correctamente
- ✅ Chat bubble clickeable

**Calidad:**
- ✅ No hay errores en consola
- ✅ Tests pasan
- ✅ Build sin warnings
- ✅ Print styling correcto (@media print)

---

## Validation Commands

```bash
# 1. Verificar componente creado
ls src/pages/Step6Result.jsx

# 2. Dev server
npm run dev
# Completar wizard hasta Step6
# Verificar diseño y funcionalidad

# 3. Tests
npm run test src/pages/__tests__/Step6Result.test.js

# 4. Build
npm run build

# 5. Test responsive
# Resize browser: 375px, 768px, 1440px

# 6. Test print
# Abrir DevTools → Ctrl+P → Preview
# Verificar que solo contenido principal se imprime
```

---

## Time Estimate

**Total: 3.5-4 horas**

- Crear componente Step6Result: 1.5 horas
  - Estructura y estilos del banner: 30 min
  - Gauge SVG con aguja dinámica: 20 min
  - Tarjetas emerald-50: 15 min
  - Secciones colapsables: 25 min
  - Botones de acción: 10 min
- Integrar en App.jsx: 20 min
- generateActionPlan() en mockData: 15 min
- Responsive design: 40 min
- Testing visual: 25 min
- Print styling (@media print): 15 min
- Callbacks (share, download, print): 20 min
- Ajustes finales: 15 min

---

## Next Steps After Completion

**Fase 2 continuación:**
- Implementar descarga de PDF real (jsPDF o html2canvas)
- Agregar animaciones de entrada (Framer Motion)
- Implementar envío de email con resultados
- Agregar analytics tracking (conversión exitosa)
- Crear variante de pantalla para score bajo (< 5)

**Checkpoint Fase 2 Step6:**
- ✅ Pantalla final visualmente idéntica al HTML
- ✅ Secciones colapsables funcionales
- ✅ Botones de acción implementados
- ✅ Responsive funcional
- ✅ Celebra éxito del usuario (tone positivo)
- ✅ Wizard completado end-to-end

---

## Notes

- **Importante:** HTML proporcionado es la ÚNICA fuente de verdad
- **Importante:** Esta es pantalla FINAL - no hay botones de navegación
- **Importante:** Tarjetas EMERALD-50 (verde - éxito) vs ROSE-100 (rojo - déficit en Step3)
- **Importante:** Gauge aguja rota dinámicamente según score (0-10)
- **Importante:** Primera sección expandida por defecto (UX best practice)
- **Importante:** Chat bubble incluye mensaje del asesor (nuevo vs Steps 1-5)
- **Importante:** Print styling con @media print para ocultar elementos no esenciales
- Foto de usuario es opcional (viene de Step5 modal)
- Iconos decorativos iguales a Step5 modal (coherencia visual)
- Botones pueden ser emojis o Font Awesome (📤 📥 🖨️)
- Web Share API solo disponible en mobile browsers modernos
- PDF generation puede ser mock inicial (console.log) y luego real con jsPDF

---

**Regla de oro Fase 2 Step6:** Pantalla de éxito + Celebración + Tarjetas verdes + Plan de acción + Responsive + Print ready.
