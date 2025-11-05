# Fase 2: Step 3 Screen - Siembra Pension Simulator

## Feature Description

Implementar la pantalla Step3 (Proyección de Pensión Base) con los estilos exactos del diseño HTML. Esta es una pantalla de **resultados y visualización** (no formulario) que muestra la proyección de pensión del usuario, un medidor de score tipo gauge, gráfico de ahorros, y recomendaciones personalizadas. El HTML proporcionado es la única fuente de verdad.

---

## HTML de Referencia (Fuente de Verdad)

**IMPORTANTE:** Este HTML es la ÚNICA fuente de verdad para el diseño. Todos los estilos, colores, tipografía y layout deben extraerse directamente de aquí.

**Ubicación:** `E:\Siembra\designs\step3.html`

```html
<div class="w-[1440px] bg-white inline-flex flex-col justify-start items-start overflow-hidden">
  <!-- Header (igual que Step1 y Step2) -->
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

  <div class="w-[1440px] px-24 py-14 bg-white flex flex-col justify-start items-center gap-2.5">
    <div class="w-full max-w-[800px] flex flex-col justify-start items-start gap-6">
      <!-- Progress Bar al 75% -->
      <div class="w-[800px] h-20 pb-14 relative inline-flex justify-start items-center">
        <div class="w-[770px] h-0 left-0 top-[22px] absolute outline outline-[6px] outline-offset-[-3px] outline-Bost-Orange-00"></div>
        <div class="w-40 h-0 left-0 top-[22px] absolute outline outline-[6px] outline-offset-[-3px] outline-Bost-Orange-00"></div>

        <!-- Step 1: Completado -->
        <div class="left-[-1px] top-[-7px] absolute inline-flex flex-col justify-start items-center gap-2.5">
          <div data-property-1="Complete" class="w-10 h-12 relative">
            <div class="w-8 h-8 left-[3px] top-[9px] absolute bg-White"></div>
            <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
          </div>
        </div>

        <!-- Step 2: Completado -->
        <div class="left-[244px] top-[-7px] absolute inline-flex flex-col justify-start items-center">
          <div data-property-1="Complete" class="w-10 h-12 relative">
            <div class="w-8 h-8 left-[3px] top-[9px] absolute bg-White"></div>
            <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
          </div>
        </div>

        <!-- Step 3: Actual (75%) -->
        <div class="left-[482px] top-[-7.50px] absolute inline-flex flex-col justify-start items-center">
          <div data-property-1="current" class="w-10 h-12 relative">
            <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
            <div class="w-7 h-7 left-[6px] top-[12px] absolute bg-White"></div>
            <div class="w-5 h-5 left-[9px] top-[15px] absolute bg-Bost-Orange-100"></div>
          </div>
          <div class="px-4 py-2 bg-Bost-Orange-00 rounded-[30px] inline-flex justify-center items-center">
            <div class="justify-start text-White text-xs font-bold font-['Noto_Sans'] leading-3">75%</div>
          </div>
        </div>

        <!-- Step 4: Pendiente -->
        <div data-property-1="No-Fill" class="w-10 h-12 left-[760px] top-[-7px] absolute">
          <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
          <div class="w-7 h-7 left-[6px] top-[12px] absolute bg-White"></div>
        </div>
      </div>

      <!-- Título y Tarjetas de Proyección -->
      <div class="self-stretch rounded-2xl flex flex-col justify-start items-start gap-6">
        <div class="self-stretch justify-start"><span class="text-neutral-600 text-2xl font-bold font-['Noto_Sans'] leading-6">Hacia donde te diriges: </span><span class="text-neutral-600 text-2xl font-normal font-['Noto_Sans'] leading-6">Tu Proyección de pensión base</span></div>

        <!-- 3 Tarjetas: Deseada / Proyectada / Diferencia -->
        <div class="self-stretch inline-flex justify-start items-start gap-6">
          <!-- Tu Pensión Deseada -->
          <div class="flex-1 p-4 bg-zinc-100 rounded-lg inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch inline-flex justify-center items-center gap-2">
              <div class="flex-1 justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Tu Pensión Deseada</div>
              <div data-error="No" data-type-icon="Fill" class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-40 text-right justify-start text-Black text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
            </div>
            <div class="self-stretch justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$80,000</div>
          </div>

          <!-- Tu Pensión Proyectada -->
          <div class="flex-1 p-4 bg-zinc-100 rounded-lg inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch inline-flex justify-center items-center gap-2">
              <div class="flex-1 justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Tu Pensión Proyectada</div>
              <div data-error="No" data-type-icon="Fill" class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-40 text-right justify-start text-Black text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
            </div>
            <div class="self-stretch justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$29,842</div>
          </div>

          <!-- Diferencia a cubrir -->
          <div class="flex-1 p-4 bg-rose-100 rounded-lg inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch inline-flex justify-center items-center gap-2">
              <div class="flex-1 justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Diferencia a cubrir</div>
              <div data-error="No" data-type-icon="Fill" class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-40 text-right justify-start text-Black text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-green-950"></div>
            </div>
            <div class="self-stretch justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$50,158</div>
          </div>
        </div>

        <!-- Gauge/Speedometer + Mensaje de Resultado -->
        <div class="self-stretch px-12 py-6 bg-stone-50 rounded-lg inline-flex justify-start items-center gap-8">
          <!-- Gauge (0-10 con score 3) -->
          <div class="w-60 relative inline-flex flex-col justify-center items-center">
            <div class="w-60 h-28 bg-White"></div>
            <div class="w-0 h-[1456px] origin-top-left rotate-[-135deg] outline outline-[10px] outline-offset-[-5px] outline-Black"></div>
            <div class="self-stretch inline-flex justify-center items-center gap-2.5">
              <div class="flex-1 justify-center text-Black text-base font-normal font-['Noto_Sans'] leading-6">0</div>
              <div class="flex-1 text-right justify-center text-Black text-base font-normal font-['Noto_Sans'] leading-6">10</div>
            </div>
            <div class="px-2 py-1 left-[99px] top-[75px] absolute bg-Bost-Brey-00 rounded flex flex-col justify-center items-center gap-2.5">
              <div class="text-center justify-center text-Black text-3xl font-black font-['Noto_Sans'] leading-6">3</div>
            </div>
          </div>

          <!-- Mensaje de Resultado -->
          <div class="flex-1 inline-flex flex-col justify-center items-start gap-2">
            <div class="self-stretch inline-flex justify-start items-start gap-2">
              <div class="flex-1 inline-flex flex-col justify-center items-center gap-2">
                <div class="self-stretch justify-center text-Black text-base font-normal font-['Noto_Sans'] leading-4">Resultado:</div>
                <div class="self-stretch justify-center text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">!Atención¡</div>
                <div class="self-stretch justify-center text-Black text-base font-normal font-['Noto_Sans'] leading-6">Existe una diferencia significativa entre tu pensión deseada y tu pensión estimada.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gráfico de Proyección de Ahorros -->
      <div class="self-stretch flex flex-col justify-start items-start gap-6">
        <div class="self-stretch flex flex-col justify-start items-start gap-2">
          <div class="self-stretch py-4 inline-flex justify-start items-center gap-10">
            <div class="justify-start text-neutral-400 text-base font-bold font-['Noto_Sans'] leading-4">Proyección de tus ahorros hasta el retiro</div>
            <div class="flex-1 h-0 outline outline-2 outline-offset-[-1px] outline-gray-200"></div>
          </div>
          <div class="self-stretch justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-5">Este gráfico muestra el crecimiento estimado de tus ahorros a lo largo del tiempo hasta que alcances la edad de retiro..</div>
        </div>

        <!-- Chart Container (Recharts) -->
        <div class="w-[810px] pr-24 pt-2.5 pb-12 flex flex-col justify-start items-start gap-2.5">
          <div class="self-stretch relative flex flex-col justify-start items-start gap-5">
            <!-- Grid lines (X axis labels, Y axis labels) -->
            <!-- Chart data visualization -->
            <div class="w-[710px] h-56 origin-top-left rotate-180 bg-orange-100/70"></div>
            <div class="w-[706px] h-48 origin-top-left rotate-180 outline outline-[6px] outline-offset-[-3px] outline-Bost-Orange-Alcanza-00"></div>
          </div>
        </div>

        <!-- Leyenda del Gráfico -->
        <div class="self-stretch inline-flex justify-start items-start gap-6">
          <div class="flex-1 p-4 bg-gray-50 rounded-lg inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch inline-flex justify-start items-center gap-2">
              <div class="w-8 h-2 bg-Bost-Orange-Alcanza-50 rounded-[60px]"></div>
              <div class="justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Proyección de pensión base</div>
              <div data-error="No" data-type-icon="Fill" class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-Black text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
            </div>
            <div class="self-stretch justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$49,422</div>
          </div>
        </div>
      </div>

      <!-- Hoja de Ruta (expandible) -->
      <div class="w-[800px] flex flex-col justify-center items-center gap-4 overflow-hidden">
        <div class="w-full max-w-[800px] py-4 inline-flex justify-start items-center gap-4">
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-3">
            <div class="self-stretch inline-flex justify-center items-center gap-2">
              <div class="flex-1 justify-start"><span class="text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">Tu Hoja de Ruta: </span><span class="text-Black text-2xl font-normal font-['Noto_Sans'] leading-6">Vías para Mejorar tu Pensión</span></div>
              <div class="flex justify-start items-center gap-2">
                <div data-property-1="chevron-down" class="w-4 h-4 relative origin-top-left rotate-180 overflow-hidden">
                  <div class="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-Input-Label"></div>
                </div>
                <div class="justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Mostrar menos detalles</div>
              </div>
            </div>
          </div>
        </div>

        <div class="self-stretch justify-start"><span class="text-Black text-base font-bold font-['Noto_Sans'] leading-5">¡Es momento de optimizar! </span><span class="text-Black text-base font-normal font-['Noto_Sans'] leading-5">Debes tomar el control para llegar a tu pensión deseada, pero no te preocupes, esto tiene solución. Aplica estas vías de acción en el </span><span class="text-Black text-base font-bold font-['Noto_Sans'] leading-5">Simulador avanzado de Pensión</span><span class="text-Black text-base font-normal font-['Noto_Sans'] leading-5"> y visualiza como mejora tu proyección para el futuro.</span></div>

        <!-- 3 Tarjetas de Recomendaciones -->
        <div class="self-stretch flex flex-col justify-start items-start gap-3">
          <div class="self-stretch flex flex-col justify-center items-start gap-6">
            <!-- Recomendación 1 -->
            <div class="self-stretch p-4 bg-neutral-100 rounded-2xl inline-flex justify-start items-start gap-6">
              <div class="flex justify-start items-center gap-6">
                <div class="w-10 h-10 bg-Bost-Orange-Alcanza-50 rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                  <div class="self-stretch text-center justify-start text-white text-base font-black font-['Font_Awesome_7_Free']">1</div>
                </div>
              </div>
              <div class="flex-1 justify-start"><span class="text-neutral-600 text-base font-bold font-['Noto_Sans'] leading-5">Ahorro Voluntario: </span><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Es clave destinar un monto mensual adicional a tu fondo. Esta es la forma más efectiva de disminuir la diferencia a cubrir y acercarte a tu pensión deseada.</span></div>
            </div>

            <!-- Recomendación 2 -->
            <div class="self-stretch p-4 bg-neutral-100 rounded-2xl inline-flex justify-start items-start gap-6">
              <div class="flex justify-start items-center gap-6">
                <div class="w-10 h-10 bg-Bost-Orange-Alcanza-50 rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                  <div class="self-stretch text-center justify-start text-white text-base font-black font-['Font_Awesome_7_Free']">2</div>
                </div>
              </div>
              <div class="flex-1 justify-start"><span class="text-neutral-600 text-base font-bold font-['Noto_Sans'] leading-5">Impulsa tu Fondo! </span><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Evalúa la posibilidad de hacer un aporte extraordinario (ej. un bono o regalía) una vez al año. Es una inyección de capital que puede acelerar drásticamente tu camino hacia tu pensión deseada.</span></div>
            </div>

            <!-- Recomendación 3 -->
            <div class="self-stretch p-4 bg-neutral-100 rounded-2xl inline-flex justify-start items-start gap-6">
              <div class="flex justify-start items-center gap-6">
                <div class="w-10 h-10 bg-Bost-Orange-Alcanza-50 rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                  <div class="self-stretch text-center justify-start text-white text-base font-black font-['Font_Awesome_7_Free']">3</div>
                </div>
              </div>
              <div class="flex-1 justify-start"><span class="text-neutral-600 text-base font-bold font-['Noto_Sans'] leading-5">Estrategia de Retiro: </span><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Analiza si posponer tu retiro 2 o 3 años es una opción viable. Verás en el simulador cómo el tiempo extra de aportes puede cambiar radicalmente tu proyección.</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botón Único -->
    <div class="w-full max-w-[800px] py-4 inline-flex justify-end items-start gap-6">
      <div class="px-6 py-4 bg-orange-400 rounded-3xl flex justify-center items-center gap-2.5">
        <div class="text-center justify-end text-white text-base font-bold font-['SF_Pro'] leading-5">Ir al Simulador y mejorar mi proyección</div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="w-[1440px] h-24 inline-flex justify-center items-center gap-2.5">
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">Términos & condiciones</div>
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">•</div>
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">© 2025 AFP Siembra. Todos los derechos reservados.</div>
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">•</div>
    <div class="justify-start text-neutral-400 text-sm font-normal font-['Noto_Sans'] leading-5">Su información está protegida y será utilizada únicamente para generar su plan de pensiones personalizado</div>
  </div>

  <!-- Chat Bubble -->
  <div class="w-20 h-20 bg-Bost-Orange-100"></div>
  <div class="w-20 h-20 bg-Bost-Orange-100 rounded-full"></div>
  <div class="justify-start text-White text-xl font-black font-['Font_Awesome_7_Free']">message</div>
</div>
```

---

## Contexto del Proyecto

### Configuración Existente

**Componentes Ya Creados (reutilizar de Step1/Step2)**:
- `src/components/Header.jsx` - Header con gradiente y usuario
- `src/components/ProgressBar.jsx` - Barra de progreso (actualizar a currentStep={3})
- `src/components/Footer.jsx` - Footer legal
- `src/components/ChatBubble.jsx` - Chat flotante

**Props de Entrada (desde Step2)**:
```javascript
// El componente Step3 recibe estas props:
{
  data: {
    name: string,
    documentId: string,
    age: number,
    retirementAge: number,
    monthlySalary: number,
    otherIncome: number,
    afpBalance: number,
    desiredPension: number,
    voluntaryContributions: number,
    // ... otros campos de Step1 y Step2
  },
  onNext: () => void  // Solo avanzar, no hay back
}
```

**Cálculos Necesarios (desde mockData.js)**:
```javascript
// Funciones a crear/usar en mockData.js
export function calculateBasePension(userData) {
  // Calcula pensión proyectada base
  return {
    projectedPension: number,  // Ej: 29842
    score: number,             // De 0-10 (ej: 3)
    message: string,           // "¡Atención!" o "¡Bien!"
    description: string        // Mensaje de resultado
  }
}

export function generateSavingsChart(userData) {
  // Genera datos para Recharts
  return [
    { age: 35, savings: 10000 },
    { age: 40, savings: 25000 },
    // ...
    { age: 65, savings: 49422 }
  ]
}
```

**Colores Nuevos Identificados**:
```css
--bg-cards-grey: #E5E5E5 (zinc-100)
--bg-gauge: #F5F5F0 (stone-50)
--gauge-arc-color: #000000 (black)
--chart-bar-fill: #FFE5D9 (orange-100/70)
--chart-bar-stroke: #FF7933 (Bost-Orange-Alcanza-00)
--recommendation-bg: #E5E5E5 (neutral-100)
--recommendation-number-bg: #FF7933 (Bost-Orange-Alcanza-50)
```

**Librerías Adicionales Necesarias**:
- **Recharts** - Ya instalado (package.json lo confirma)
- **react-gauge-chart** o custom SVG - Para el gauge/speedometer

---

## Problem Solving

**Problema:** Step3 es una pantalla de resultados (no formulario) que requiere visualizaciones complejas: gauge de 0-10, gráfico de barras con Recharts, cálculos de pensión proyectada, y score de calidad.

**Requerimientos:**
- Reutilizar Header, ProgressBar (75%), Footer, ChatBubble
- Calcular pensión proyectada base desde datos de Step1+Step2
- Calcular score de 0-10 (diferencia entre deseada y proyectada)
- Mostrar 3 tarjetas: Pensión Deseada / Proyectada / Diferencia
- Gauge visual de 0-10 con puntero en score calculado
- Mensaje de resultado según score (¡Atención!, ¡Bien!, ¡Excelente!)
- Gráfico de barras: proyección de ahorros año por año
- Sección expandible: "Hoja de Ruta" con 3 recomendaciones
- Botón único: "Ir al Simulador avanzado"
- Responsive design

---

## User Story

```
Como usuario del simulador,
Quiero ver la proyección de mi pensión base calculada automáticamente,
Para entender si mi situación actual me acercará a mi pensión deseada y recibir recomendaciones personalizadas.
```

---

## Solution & Approach

**Enfoque elegido:** Pantalla de resultados + Visualizaciones + Cálculos en mockData.js

**Por qué:**
- ✅ Reutilizar Header, ProgressBar, Footer, ChatBubble (coherencia)
- ✅ mockData.js centraliza lógica de negocio (fácil de testear)
- ✅ Recharts para gráfico de barras (librería ya instalada)
- ✅ SVG custom para gauge (control total del diseño)
- ✅ useState para sección expandible (patrón de Step2)
- ✅ Sin formulario = sin validación = más simple

---

## Implementation Plan

### 1. Análisis del HTML Source

**Estructura identificada:**

```
<Container>
  <Header /> <!-- Reutilizar -->
  <MainContent>
    <ProgressBar currentStep={3} /> <!-- 75% -->

    <!-- Sección: Proyección -->
    <Título>"Hacia donde te diriges: Tu Proyección de pensión base"</Título>
    <Tarjetas3Columnas>
      - Pensión Deseada (zinc-100): RD$80,000
      - Pensión Proyectada (zinc-100): RD$29,842 (CALCULADO)
      - Diferencia (rose-100): RD$50,158 (CALCULADO: Deseada - Proyectada)
    </Tarjetas3Columnas>

    <GaugeConMensaje>
      <Gauge score={3} min={0} max={10} />
      <Mensaje>
        - "Resultado:"
        - "¡Atención!"
        - "Existe una diferencia significativa..."
      </Mensaje>
    </GaugeConMensaje>

    <!-- Sección: Gráfico -->
    <Separador>"Proyección de tus ahorros hasta el retiro"</Separador>
    <GráficoRecharts data={chartData} />
    <Leyenda>"Proyección de pensión base: RD$49,422"</Leyenda>

    <!-- Sección: Hoja de Ruta (expandible) -->
    <TítuloExpandible>"Tu Hoja de Ruta: Vías para Mejorar tu Pensión"</TítuloExpandible>
    {expanded && (
      <>
        <TextoIntro>"¡Es momento de optimizar! ..."</TextoIntro>
        <Recomendaciones>
          - Tarjeta 1: "Ahorro Voluntario"
          - Tarjeta 2: "Impulsa tu Fondo!"
          - Tarjeta 3: "Estrategia de Retiro"
        </Recomendaciones>
      </>
    )}

    <BotónÚnico>"Ir al Simulador y mejorar mi proyección"</BotónÚnico>
  </MainContent>
  <Footer /> <!-- Reutilizar -->
  <ChatBubble /> <!-- Reutilizar -->
</Container>
```

**Nuevos componentes a crear:**

1. **PensionCard** (opcional, reutilizable):
   - Props: `title`, `value`, `bgColor`, `showIcon`
   - Render: Tarjeta con título, separador, valor grande

2. **GaugeChart** (custom SVG):
   - Props: `score`, `min`, `max`
   - Render: SVG semicírculo con arco negro, puntero en score

3. **RecommendationCard**:
   - Props: `number`, `title`, `description`
   - Render: Tarjeta gris con círculo naranja numerado + texto

---

### 2. Crear Lógica de Cálculo en mockData.js

**Archivo:** `src/data/mockData.js`

**Ejemplo de funciones (código ilustrativo):**

```javascript
// Cálculo de pensión proyectada base
export function calculateBasePension(userData) {
  const {
    age,
    retirementAge,
    monthlySalary,
    afpBalance,
    voluntaryContributions
  } = userData

  const yearsToRetirement = retirementAge - age
  const monthsToRetirement = yearsToRetirement * 12

  // Simulación simple (ajustar con fórmula real AFP)
  const monthlyContribution = monthlySalary * 0.1029 // 10.29% aportes obligatorios
  const totalContributions = (monthlyContribution + voluntaryContributions) * monthsToRetirement
  const totalSavings = afpBalance + totalContributions

  // Rentabilidad promedio anual (ej: 5%)
  const annualReturn = 0.05
  const futureValue = totalSavings * Math.pow(1 + annualReturn, yearsToRetirement)

  // Pensión mensual (ej: 4% del saldo final)
  const projectedPension = Math.round(futureValue * 0.04 / 12)

  // Calcular score (0-10)
  const desiredPension = userData.desiredPension
  const difference = desiredPension - projectedPension
  const gapPercentage = (difference / desiredPension) * 100

  let score
  let message
  let description

  if (gapPercentage <= 10) {
    score = 9
    message = '¡Excelente!'
    description = 'Tu proyección está muy cerca de tu pensión deseada.'
  } else if (gapPercentage <= 30) {
    score = 6
    message = '¡Bien!'
    description = 'Tu proyección está en buen camino, pero hay margen de mejora.'
  } else {
    score = 3
    message = '¡Atención!'
    description = 'Existe una diferencia significativa entre tu pensión deseada y tu pensión estimada.'
  }

  return {
    projectedPension,
    difference: Math.abs(difference),
    score,
    message,
    description,
    totalSavingsAtRetirement: Math.round(futureValue)
  }
}

// Generar datos para gráfico Recharts
export function generateSavingsChart(userData) {
  const { age, retirementAge, afpBalance, monthlySalary, voluntaryContributions } = userData
  const data = []

  const monthlyContribution = monthlySalary * 0.1029 + voluntaryContributions
  const annualReturn = 0.05

  let currentSavings = afpBalance

  for (let currentAge = age; currentAge <= retirementAge; currentAge++) {
    data.push({
      age: currentAge,
      savings: Math.round(currentSavings)
    })

    // Agregar contribuciones del año + rentabilidad
    currentSavings += monthlyContribution * 12
    currentSavings *= (1 + annualReturn)
  }

  return data
}
```

---

### 3. Crear Componente Step3.jsx

**Archivo:** `src/pages/Step3.jsx`

**Ejemplo de estructura (código ilustrativo):**

```jsx
import { useState, useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'
import { calculateBasePension, generateSavingsChart } from '../data/mockData'

export default function Step3({ data, onNext }) {
  const [roadmapExpanded, setRoadmapExpanded] = useState(true)

  // Calcular proyección de pensión
  const pensionData = calculateBasePension(data)
  const chartData = generateSavingsChart(data)

  const {
    projectedPension,
    difference,
    score,
    message,
    description,
    totalSavingsAtRetirement
  } = pensionData

  const handleContinue = () => {
    onNext() // Ir a Step4 (simulador avanzado)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header userName={data.name} userDocument={data.documentId} />

      <div className="flex-1 px-6 lg:px-24 py-10 lg:py-14 bg-white flex flex-col items-center gap-2.5">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress Bar */}
          <ProgressBar currentStep={3} />

          {/* Título */}
          <div className="self-stretch rounded-2xl flex flex-col gap-6">
            <h1 className="text-[#4C4C4C] text-xl lg:text-2xl leading-6">
              <span className="font-bold">Hacia donde te diriges: </span>
              <span className="font-normal">Tu Proyección de pensión base</span>
            </h1>

            {/* 3 Tarjetas: Deseada / Proyectada / Diferencia */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Pensión Deseada */}
              <div className="flex-1 p-4 bg-zinc-100 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-black text-base">Tu Pensión Deseada</span>
                  <span className="text-black opacity-40">ℹ️</span>
                </div>
                <div className="border-t border-black/10 my-2" />
                <span className="text-black text-xl font-black">
                  RD${data.desiredPension.toLocaleString()}
                </span>
              </div>

              {/* Pensión Proyectada */}
              <div className="flex-1 p-4 bg-zinc-100 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-black text-base">Tu Pensión Proyectada</span>
                  <span className="text-black opacity-40">ℹ️</span>
                </div>
                <div className="border-t border-black/10 my-2" />
                <span className="text-black text-xl font-black">
                  RD${projectedPension.toLocaleString()}
                </span>
              </div>

              {/* Diferencia a cubrir */}
              <div className="flex-1 p-4 bg-rose-100 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-black text-base">Diferencia a cubrir</span>
                  <span className="text-black opacity-40">ℹ️</span>
                </div>
                <div className="border-t border-green-950/10 my-2" />
                <span className="text-black text-xl font-black">
                  RD${difference.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Gauge + Mensaje */}
            <div className="px-6 lg:px-12 py-6 bg-stone-50 rounded-lg flex flex-col lg:flex-row items-center gap-8">
              {/* Gauge SVG */}
              <div className="w-60 relative flex flex-col items-center">
                <svg viewBox="0 0 240 140" className="w-60 h-28">
                  {/* Arco de fondo */}
                  <path
                    d="M 20 120 A 100 100 0 0 1 220 120"
                    fill="none"
                    stroke="#E5E5E5"
                    strokeWidth="10"
                  />
                  {/* Arco de score (hasta el valor del score) */}
                  <path
                    d={`M 20 120 A 100 100 0 0 1 ${20 + (score / 10) * 200} 120`}
                    fill="none"
                    stroke="#000000"
                    strokeWidth="10"
                  />
                </svg>

                {/* Etiquetas 0 y 10 */}
                <div className="flex justify-between w-full px-4">
                  <span className="text-black text-base">0</span>
                  <span className="text-black text-base">10</span>
                </div>

                {/* Badge con score */}
                <div className="absolute top-16 bg-gray-200 rounded px-2 py-1">
                  <span className="text-black text-3xl font-black">{score}</span>
                </div>
              </div>

              {/* Mensaje de Resultado */}
              <div className="flex-1 flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
                <span className="text-black text-base">Resultado:</span>
                <span className="text-black text-2xl font-bold">{message}</span>
                <p className="text-black text-base leading-6">{description}</p>
              </div>
            </div>
          </div>

          {/* Separador: Gráfico */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-10">
              <span className="text-[#949494] font-bold">Proyección de tus ahorros hasta el retiro</span>
              <div className="flex-1 h-0 border-t-2 border-gray-200" />
            </div>
            <p className="text-black text-base">
              Este gráfico muestra el crecimiento estimado de tus ahorros a lo largo del tiempo hasta que alcances la edad de retiro.
            </p>
          </div>

          {/* Gráfico Recharts */}
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                <XAxis
                  dataKey="age"
                  label={{ value: 'Edad', position: 'insideBottom', offset: -5 }}
                />
                <YAxis
                  label={{ value: 'Ahorros (RD$)', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `RD$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(value) => `RD$${value.toLocaleString()}`}
                  labelFormatter={(label) => `Edad: ${label}`}
                />
                <Area
                  type="monotone"
                  dataKey="savings"
                  stroke="#FF7933"
                  strokeWidth={6}
                  fill="#FFE5D9"
                  fillOpacity={0.7}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Leyenda del Gráfico */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 p-4 bg-gray-50 rounded-lg flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-2 bg-[#FF7933] rounded-full" />
                <span className="text-black text-base">Proyección de pensión base</span>
                <span className="text-black opacity-60">ℹ️</span>
              </div>
              <div className="border-t border-black/10 my-2" />
              <span className="text-black text-xl font-black">
                RD${totalSavingsAtRetirement.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Hoja de Ruta (expandible) */}
          <div className="flex flex-col gap-4">
            <div className="py-4 flex items-center gap-4 cursor-pointer"
                 onClick={() => setRoadmapExpanded(!roadmapExpanded)}>
              <div className="flex-1">
                <span className="text-black text-xl lg:text-2xl font-bold">Tu Hoja de Ruta: </span>
                <span className="text-black text-xl lg:text-2xl">Vías para Mejorar tu Pensión</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#949494]">{roadmapExpanded ? '▼' : '▶'}</span>
                <span className="text-[#949494] text-base">
                  {roadmapExpanded ? 'Mostrar menos detalles' : 'Mostrar más detalles'}
                </span>
              </div>
            </div>

            {roadmapExpanded && (
              <>
                <p className="text-black text-base leading-5">
                  <span className="font-bold">¡Es momento de optimizar! </span>
                  <span>Debes tomar el control para llegar a tu pensión deseada, pero no te preocupes, esto tiene solución. Aplica estas vías de acción en el </span>
                  <span className="font-bold">Simulador avanzado de Pensión</span>
                  <span> y visualiza como mejora tu proyección para el futuro.</span>
                </p>

                {/* 3 Recomendaciones */}
                <div className="flex flex-col gap-6">
                  {/* Recomendación 1 */}
                  <div className="p-4 bg-neutral-100 rounded-2xl flex items-start gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-black">1</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#4C4C4C] text-base font-bold">Ahorro Voluntario: </span>
                      <span className="text-[#4C4C4C] text-base">
                        Es clave destinar un monto mensual adicional a tu fondo. Esta es la forma más efectiva de disminuir la diferencia a cubrir y acercarte a tu pensión deseada.
                      </span>
                    </div>
                  </div>

                  {/* Recomendación 2 */}
                  <div className="p-4 bg-neutral-100 rounded-2xl flex items-start gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-black">2</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#4C4C4C] text-base font-bold">Impulsa tu Fondo! </span>
                      <span className="text-[#4C4C4C] text-base">
                        Evalúa la posibilidad de hacer un aporte extraordinario (ej. un bono o regalía) una vez al año. Es una inyección de capital que puede acelerar drásticamente tu camino hacia tu pensión deseada.
                      </span>
                    </div>
                  </div>

                  {/* Recomendación 3 */}
                  <div className="p-4 bg-neutral-100 rounded-2xl flex items-start gap-6">
                    <div className="w-10 h-10 bg-[#FF7933] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base font-black">3</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#4C4C4C] text-base font-bold">Estrategia de Retiro: </span>
                      <span className="text-[#4C4C4C] text-base">
                        Analiza si posponer tu retiro 2 o 3 años es una opción viable. Verás en el simulador cómo el tiempo extra de aportes puede cambiar radicalmente tu proyección.
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Botón Único */}
          <div className="py-4 flex justify-end">
            <button
              onClick={handleContinue}
              className="px-6 py-4 bg-orange-400 text-white text-base font-bold rounded-3xl
                hover:bg-orange-500 transition-colors"
            >
              Ir al Simulador y mejorar mi proyección
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <ChatBubble />
    </div>
  )
}
```

---

### 4. Implementar Responsive Design

**Estrategia Mobile-First:**

#### Mobile (< 768px):
- Tarjetas de pensión: stack vertical (flex-col)
- Gauge + mensaje: stack vertical
- Gráfico: altura reducida, labels más pequeños
- Recomendaciones: stack vertical

#### Tablet (768px - 1023px):
- Tarjetas: puede ser 3 columnas
- Gauge + mensaje: horizontal

#### Desktop (>= 1024px):
- Diseño original del HTML
- Tarjetas: 3 columnas
- Gauge + mensaje: horizontal
- Gráfico: width completo

**Código responsive clave:**

```jsx
{/* Tarjetas: mobile vertical, desktop 3 columnas */}
<div className="flex flex-col lg:flex-row gap-6">
  <div className="flex-1">...</div>
  <div className="flex-1">...</div>
  <div className="flex-1">...</div>
</div>

{/* Gauge + Mensaje: mobile vertical, desktop horizontal */}
<div className="flex flex-col lg:flex-row items-center gap-8">
  <div className="w-60">...</div>
  <div className="flex-1">...</div>
</div>

{/* Gráfico: responsive container */}
<ResponsiveContainer width="100%" height={isMobile ? 250 : 320}>
  ...
</ResponsiveContainer>
```

---

## Testing Strategy

### Visual Testing (Manual)

**Checklist Desktop:**

- [ ] **Progress Bar:**
  - [ ] Steps 1-2 completados (sin círculo amarillo)
  - [ ] Step 3 actual (con badge 75%, círculo triple)
  - [ ] Step 4 pendiente

- [ ] **Tarjetas de Proyección:**
  - [ ] 3 tarjetas alineadas horizontalmente
  - [ ] Pensión Deseada: valor de data.desiredPension
  - [ ] Pensión Proyectada: valor calculado
  - [ ] Diferencia: color rose-100, valor correcto

- [ ] **Gauge + Mensaje:**
  - [ ] Gauge semicírculo de 0 a 10
  - [ ] Puntero/arco negro hasta score calculado
  - [ ] Badge con score centrado
  - [ ] Mensaje correcto según score (<3: Atención, 3-6: Bien, >6: Excelente)

- [ ] **Gráfico Recharts:**
  - [ ] Eje X: edades desde age hasta retirementAge
  - [ ] Eje Y: valores de ahorros
  - [ ] Área naranja con relleno semitransparente
  - [ ] Tooltip funciona al hover
  - [ ] Grid visible

- [ ] **Hoja de Ruta:**
  - [ ] Expandible/colapsable funciona
  - [ ] 3 recomendaciones con círculos naranja numerados
  - [ ] Texto con bold en títulos

- [ ] **Botón:**
  - [ ] Alineado a la derecha
  - [ ] Texto correcto
  - [ ] Hover funciona

**Checklist Mobile:**

- [ ] Tarjetas stack verticalmente
- [ ] Gauge + mensaje stack verticalmente
- [ ] Gráfico altura reducida
- [ ] Recomendaciones stack verticalmente

### Functional Testing

```bash
npm run test

# Verificar:
# - calculateBasePension devuelve valores correctos
# - generateSavingsChart genera array con datos año por año
# - Score se calcula correctamente (0-10)
# - Mensaje cambia según score
# - Gráfico renderiza sin errores
# - onNext funciona
```

### Unit Tests (mockData.js)

```javascript
describe('calculateBasePension', () => {
  it('calcula pensión proyectada correctamente', () => {
    const userData = {
      age: 55,
      retirementAge: 65,
      monthlySalary: 100000,
      afpBalance: 500000,
      desiredPension: 80000,
      voluntaryContributions: 0
    }

    const result = calculateBasePension(userData)

    expect(result.projectedPension).toBeGreaterThan(0)
    expect(result.score).toBeGreaterThanOrEqual(0)
    expect(result.score).toBeLessThanOrEqual(10)
    expect(result.difference).toBeGreaterThan(0)
    expect(['¡Atención!', '¡Bien!', '¡Excelente!']).toContain(result.message)
  })

  it('score es 0-3 cuando diferencia es > 30%', () => {
    const userData = {
      age: 55,
      retirementAge: 65,
      monthlySalary: 20000,
      afpBalance: 10000,
      desiredPension: 100000,
      voluntaryContributions: 0
    }

    const result = calculateBasePension(userData)
    expect(result.score).toBeLessThan(4)
    expect(result.message).toBe('¡Atención!')
  })
})

describe('generateSavingsChart', () => {
  it('genera datos de edad actual a edad de retiro', () => {
    const userData = {
      age: 55,
      retirementAge: 65,
      monthlySalary: 100000,
      afpBalance: 500000,
      voluntaryContributions: 5000
    }

    const chartData = generateSavingsChart(userData)

    expect(chartData).toHaveLength(11) // 55 a 65 = 11 años
    expect(chartData[0].age).toBe(55)
    expect(chartData[10].age).toBe(65)
    expect(chartData[0].savings).toBe(500000)
    expect(chartData[10].savings).toBeGreaterThan(chartData[0].savings)
  })
})
```

---

## Edge Cases

#### Score Fuera de Rango

**Problema:** Cálculo produce score < 0 o > 10
**Solución:** Clamp entre 0-10

```javascript
score = Math.max(0, Math.min(10, score))
```

#### Años hasta Retiro = 0

**Problema:** age === retirementAge
**Resultado:** División by zero, gráfico vacío
**Solución:** Validar en calculateBasePension

```javascript
if (yearsToRetirement <= 0) {
  return {
    projectedPension: afpBalance * 0.04 / 12,
    score: 0,
    message: '¡Atención!',
    description: 'Ya alcanzaste tu edad de retiro.'
  }
}
```

#### Datos de Gráfico Vacíos

**Problema:** generateSavingsChart devuelve []
**Resultado:** Recharts se rompe
**Solución:** Mostrar mensaje alternativo

```jsx
{chartData.length > 0 ? (
  <ResponsiveContainer>...</ResponsiveContainer>
) : (
  <p className="text-center text-gray-500">No hay datos suficientes para mostrar el gráfico.</p>
)}
```

#### Gauge Responsive en Mobile

**Problema:** SVG gauge no escala bien en mobile
**Solución:** Ajustar viewBox y width

```jsx
<svg viewBox="0 0 240 140" className="w-48 lg:w-60 h-24 lg:h-28">
  ...
</svg>
```

---

## Acceptance Criteria

**Visual Desktop:**
- ✅ Progress bar al 75% con Steps 1-2 completados, Step 3 actual
- ✅ 3 tarjetas de proyección alineadas horizontalmente
- ✅ Valores calculados correctamente (proyectada, diferencia)
- ✅ Gauge semicírculo de 0-10 con score visible
- ✅ Mensaje de resultado según score
- ✅ Gráfico Recharts renderiza correctamente
- ✅ Eje X: edades, Eje Y: ahorros
- ✅ Área naranja con relleno semitransparente
- ✅ Leyenda del gráfico con valor total
- ✅ Hoja de Ruta expandible/colapsable
- ✅ 3 recomendaciones con círculos numerados naranja
- ✅ Botón único alineado a la derecha

**Visual Mobile:**
- ✅ Tarjetas stack verticalmente
- ✅ Gauge + mensaje stack verticalmente
- ✅ Gráfico altura reducida pero legible
- ✅ Recomendaciones stack verticalmente

**Funcional:**
- ✅ calculateBasePension calcula proyección correctamente
- ✅ Score de 0-10 se calcula según diferencia %
- ✅ Mensaje cambia: ¡Atención!/¡Bien!/¡Excelente!
- ✅ generateSavingsChart genera datos año por año
- ✅ Gráfico Recharts muestra datos correctos
- ✅ Tooltip funciona en gráfico
- ✅ Sección Hoja de Ruta toggle correctamente
- ✅ onNext avanza a Step4
- ✅ No hay botones "Volver" o "Dejar" (solo avanzar)

**Calidad:**
- ✅ No hay errores en consola
- ✅ Tests pasan (mockData.js unit tests)
- ✅ Build sin warnings
- ✅ Reutiliza Header, ProgressBar, Footer, ChatBubble
- ✅ Coherencia visual con Step1 y Step2

---

## Validation Commands

```bash
# 1. Verificar Step3.jsx y funciones en mockData.js
ls src/pages/Step3.jsx
grep -n "calculateBasePension\|generateSavingsChart" src/data/mockData.js

# 2. Dev server
npm run dev
# Navegar: Login → Step1 → Step2 → Step3
# Verificar diseño desktop y mobile
# Verificar cálculos con datos reales

# 3. Tests
npm run test src/data/__tests__/mockData.test.js

# 4. Build
npm run build

# 5. Verificar cálculos con datos conocidos
# Ejemplo:
# - Edad: 55, Retiro: 65 (10 años)
# - Salario: 100,000
# - AFP Balance: 500,000
# - Deseada: 80,000
# Resultado esperado:
# - Proyectada: ~30,000 (depende fórmula)
# - Diferencia: ~50,000
# - Score: 3-5
# - Mensaje: "¡Atención!" o "¡Bien!"
```

---

## Time Estimate

**Total: 3.5-4.5 horas**

- Lógica calculateBasePension en mockData.js: 45 min
- Lógica generateSavingsChart en mockData.js: 30 min
- Estructura Step3.jsx (sin visualizaciones): 30 min
- 3 tarjetas de proyección: 20 min
- Gauge SVG custom: 30 min
- Gráfico Recharts + configuración: 45 min
- Sección Hoja de Ruta expandible + recomendaciones: 30 min
- Responsive design: 25 min
- Testing visual + ajustes: 20 min
- Unit tests mockData.js: 20 min

---

## Next Steps After Completion

**Fase 2 continuación:**
- Implementar Step4.jsx (Simulador Avanzado - 100% progress)
- Implementar Step5.jsx (Modal de confirmación)
- Implementar Result.jsx (Pantalla final con comparación)

**Checkpoint Fase 2 Step3:**
- ✅ Step3 visualmente idéntico al HTML
- ✅ Cálculos de pensión funcionan correctamente
- ✅ Gauge visual muestra score de 0-10
- ✅ Gráfico Recharts renderiza datos correctos
- ✅ Sección Hoja de Ruta expandible funciona
- ✅ Responsive funcional
- ✅ Componentes de Step1/Step2 reutilizados
- ✅ Unit tests pasan

---

## Notes

- **Importante:** Step3 es pantalla de **resultados**, no formulario
- **Importante:** Progress bar Steps 1-2 completados (sin círculo amarillo interior)
- **Importante:** Progress bar línea naranja ahora va hasta ~480px (paso 3)
- **Importante:** Score de 0-10: score bajo (<3) = ¡Atención!, medio (3-6) = ¡Bien!, alto (>6) = ¡Excelente!
- **Importante:** Gauge usa SVG custom (no librería externa para mantener diseño exacto)
- **Importante:** Gráfico Recharts: AreaChart con fill naranja semitransparente + stroke naranja
- **Importante:** Diferencia a cubrir: color rose-100 (rosa claro)
- **Importante:** Hoja de Ruta expandible: mismo patrón que resúmenes de Step2
- **Importante:** No hay botones "Volver" o "Dejar", solo "Continuar/Avanzar"
- **Importante:** Recomendaciones: círculos naranja con números blancos + texto con bold en títulos
- **Importante:** Leyenda del gráfico: tarjeta gris con badge naranja horizontal + valor total
- **Importante:** Fórmula de cálculo de pensión es simplificada (ajustar con fórmula real AFP si se requiere)
- **Importante:** generateSavingsChart: crear un punto por cada año desde age hasta retirementAge

---

**Regla de oro Fase 2 Step3:** Visualizaciones claras + Cálculos correctos + Responsive mobile-first + Coherencia con pasos anteriores.
