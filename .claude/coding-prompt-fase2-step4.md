# Fase 2: Step 4 Screen - Siembra Pension Simulator

## Feature Description

Implementar la pantalla Step4 (Simulador Avanzado de Pensión) con los estilos exactos del diseño HTML. Esta es una pantalla **híbrida** (formulario + visualización) que permite al usuario ajustar parámetros avanzados (edad de retiro, aportes voluntarios, incremento salarial) y ver en tiempo real cómo mejora su proyección de pensión comparada con la proyección base de Step3. El HTML proporcionado es la única fuente de verdad.

---

## HTML de Referencia (Fuente de Verdad)

**IMPORTANTE:** Este HTML es la ÚNICA fuente de verdad para el diseño. Todos los estilos, colores, tipografía y layout deben extraerse directamente de aquí.

**Ubicación:** `E:\Siembra\designs\step4.html`

```html
<div class="w-[1440px] bg-white inline-flex flex-col justify-start items-start overflow-hidden">
  <!-- Header (igual que Step1, Step2, Step3) -->
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
      <!-- Progress Bar al 100% -->
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

        <!-- Step 3: Completado -->
        <div class="left-[489px] top-[-7px] absolute inline-flex flex-col justify-start items-center">
          <div data-property-1="Complete" class="w-10 h-12 relative">
            <div class="w-8 h-8 left-[3px] top-[9px] absolute bg-White"></div>
            <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
          </div>
        </div>

        <!-- Step 4: Actual (100%) -->
        <div class="left-[734px] top-[-7.50px] absolute inline-flex flex-col justify-start items-center">
          <div data-property-1="current" class="w-10 h-12 relative">
            <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
            <div class="w-7 h-7 left-[6px] top-[12px] absolute bg-White"></div>
            <div class="w-5 h-5 left-[9px] top-[15px] absolute bg-Bost-Orange-100"></div>
          </div>
          <div class="px-4 py-2 bg-Bost-Orange-00 rounded-[30px] inline-flex justify-center items-center">
            <div class="justify-start text-White text-xs font-bold font-['Noto_Sans'] leading-3">100%</div>
          </div>
        </div>
      </div>

      <!-- Título y Descripción -->
      <div class="self-stretch rounded-2xl flex flex-col justify-start items-start gap-6">
        <div class="self-stretch pt-8 pb-4 flex flex-col justify-start items-start gap-6">
          <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <div class="self-stretch flex flex-col justify-start items-start gap-1">
              <div class="self-stretch justify-start"><span class="text-neutral-600 text-2xl font-bold font-['Noto_Sans'] leading-6">Toma el Control: </span><span class="text-neutral-600 text-2xl font-normal font-['Noto_Sans'] leading-6">Tu Proyección de Pensión Avanzada</span></div>
              <div class="self-stretch justify-start"><span class="text-Black text-base font-normal font-['Noto_Sans'] leading-8">Tu proyección base es tu punto de partida. Utiliza el </span><span class="text-Black text-base font-bold font-['Noto_Sans'] leading-8">Simulador Avanzado </span><span class="text-Black text-base font-normal font-['Noto_Sans'] leading-8">y toma el control de tu futuro. </span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Banner con Gradiente -->
      <div class="self-stretch flex flex-col justify-start items-start gap-6">
        <div class="w-[800px] h-56 bg-[radial-gradient(ellipse_1764.18%_941.76%_at_-0.00%_0.00%,_rgba(0,_94,_184,_0.40)_27%,_rgba(140,_0,_117,_0.40)_92%)] rounded-3xl"></div>
        <div class="w-80 justify-start"><span class="text-white text-4xl font-bold font-['Noto_Sans'] leading-9 [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">Simulador avanzado</span><span class="text-white text-4xl font-normal font-['Noto_Sans'] leading-9 [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]"> de pensión</span></div>
        <div class="self-stretch justify-start"><span class="text-Black text-base font-normal font-['Noto_Sans'] leading-8">Llena los campos y descubre al instante tu </span><span class="text-Black text-base font-bold font-['Noto_Sans'] leading-8">Proyección Avanzada.</span></div>

        <!-- Campos de Entrada (2 filas x 2 columnas) -->
        <!-- Fila 1 -->
        <div class="self-stretch inline-flex justify-start items-start gap-6">
          <!-- Edad de retiro (con +/-) -->
          <div class="w-96 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start"><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Edad de retiro</span><span class="text-red-600 text-base font-normal font-['Noto_Sans'] leading-5">*</span></div>
              <div class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-neutral-600 text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-1">
                <div class="self-stretch inline-flex justify-start items-start gap-2.5">
                  <div class="w-3 opacity-40 text-right justify-start text-neutral-500 text-base font-black font-['Font_Awesome_5_Free'] leading-4">minus</div>
                  <div class="w-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-gray-200"></div>
                  <div class="flex-1 text-center justify-start text-black text-sm font-normal font-['Noto_Sans'] leading-5">60 Años</div>
                  <div class="w-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-gray-200"></div>
                  <div class="text-right justify-start text-neutral-600 text-base font-black font-['Font_Awesome_5_Free'] leading-4">plus</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Aporte voluntario mensual -->
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start"><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Aporte voluntario mensual</span><span class="text-red-600 text-base font-normal font-['Noto_Sans'] leading-5">*</span></div>
              <div class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-neutral-600 text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
              <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$10,000</div>
            </div>
          </div>
        </div>

        <!-- Fila 2 -->
        <div class="self-stretch inline-flex justify-start items-start gap-6">
          <!-- Incremento salarial anual (con +/-) -->
          <div class="w-96 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start"><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Incremento salarial anual</span><span class="text-red-600 text-base font-normal font-['Noto_Sans'] leading-5">*</span></div>
              <div class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-neutral-600 text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-1">
              <div class="self-stretch inline-flex justify-start items-start gap-2.5">
                <div class="w-3 opacity-40 text-right justify-start text-neutral-500 text-base font-black font-['Font_Awesome_5_Free'] leading-4">minus</div>
                <div class="w-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-gray-200"></div>
                <div class="flex-1 text-center justify-start text-black text-sm font-normal font-['Noto_Sans'] leading-5">8%</div>
                <div class="w-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-gray-200"></div>
                <div class="text-right justify-start text-neutral-600 text-base font-black font-['Font_Awesome_5_Free'] leading-4">plus</div>
              </div>
            </div>
          </div>

          <!-- Aporte extraordinario anual -->
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Aporte extraordinario anual</div>
              <div class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-neutral-600 text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
              <div class="flex-1 justify-start text-Bost-Grey-00 text-sm font-normal font-['Noto_Sans'] leading-5">Ingresa el monto en pesos RD$</div>
            </div>
          </div>
        </div>

        <!-- Gauge + Mensaje (Score Alto = 9) -->
        <div class="self-stretch rounded-2xl flex flex-col justify-start items-start gap-6">
          <div class="self-stretch px-12 py-6 bg-stone-50 rounded-lg inline-flex justify-start items-center gap-8">
            <!-- Gauge (Score 9) -->
            <div class="w-60 relative inline-flex flex-col justify-center items-center">
              <div class="w-60 h-28 bg-White"></div>
              <div class="w-11 h-0 origin-top-left rotate-[-22.52deg] outline outline-[10px] outline-offset-[-5px] outline-Black"></div>
              <div class="self-stretch inline-flex justify-center items-center gap-2.5">
                <div class="flex-1 justify-center text-Black text-base font-normal font-['Noto_Sans'] leading-6">0</div>
                <div class="flex-1 text-right justify-center text-Black text-base font-normal font-['Noto_Sans'] leading-6">10</div>
              </div>
              <div class="px-2 py-1 left-[99px] top-[75px] absolute bg-Bost-Brey-00 rounded flex flex-col justify-center items-center gap-2.5">
                <div class="text-center justify-center text-Black text-3xl font-black font-['Noto_Sans'] leading-6">9</div>
              </div>
            </div>

            <!-- Mensaje Positivo -->
            <div class="flex-1 inline-flex flex-col justify-center items-start gap-2">
              <div class="self-stretch inline-flex justify-start items-start gap-2">
                <div class="flex-1 inline-flex flex-col justify-center items-center gap-2">
                  <div class="self-stretch justify-center text-Black text-base font-normal font-['Noto_Sans'] leading-4">Resultado:</div>
                  <div class="self-stretch justify-center text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">¡Felicidades!</div>
                  <div class="self-stretch justify-center text-Black text-base font-normal font-['Noto_Sans'] leading-6">Con estos ajustes, tendrás el control para volver tu Proyección Avanzada una realidad para tu retiro.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 3 Tarjetas VERDES (emerald-50) -->
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

            <!-- Pensión Proyectada (AVANZADA - MAYOR) -->
            <div class="flex-1 p-4 bg-emerald-50 rounded-lg inline-flex flex-col justify-start items-start gap-1">
              <div class="self-stretch inline-flex justify-center items-center gap-2">
                <div class="flex-1 text-center justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Tu Pensión Proyectada</div>
              </div>
              <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
                <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
              </div>
              <div class="self-stretch text-center justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$120,000</div>
            </div>

            <!-- Diferencia A FAVOR (verde) -->
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
        </div>

        <!-- Separador: Gráfico Comparativo -->
        <div class="self-stretch flex flex-col justify-start items-start gap-2">
          <div class="self-stretch py-4 inline-flex justify-start items-center gap-10">
            <div class="justify-start text-neutral-400 text-base font-bold font-['Noto_Sans'] leading-4">Proyección de tus ahorros hasta el retiro</div>
            <div class="flex-1 h-0 outline outline-2 outline-offset-[-1px] outline-gray-200"></div>
          </div>
          <div class="self-stretch justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-5">Este gráfico compara tu Proyección de Pensión Base, lo que podrías obtener sin cambios y tu Proyección de Pensión Avanzada, lo que podrías lograr al aplicar los cambios que acabas de simular.</div>
        </div>

        <!-- Gráfico Recharts (2 áreas: Base + Avanzada) -->
        <div class="w-[810px] pr-24 pt-2.5 pb-12 flex flex-col justify-start items-start gap-2.5">
          <div class="self-stretch relative flex flex-col justify-start items-start gap-5">
            <!-- Grid (igual que Step3) -->
            <!-- Área naranja (base) -->
            <div class="w-[586px] h-56 origin-top-left rotate-180 bg-orange-100/70"></div>
            <div class="w-[575.17px] h-48 origin-top-left rotate-180 outline outline-[6px] outline-offset-[-3px] outline-Bost-Orange-Alcanza-00"></div>
            <!-- Área azul (avanzada) -->
            <div class="w-[703.50px] h-72 origin-top-left rotate-180 bg-blue-100/70"></div>
            <div class="w-[703.50px] h-64 origin-top-left rotate-180 outline outline-[6px] outline-offset-[-3px] outline-Bost--Blue-00"></div>
          </div>
        </div>

        <!-- Leyendas (2 tarjetas) -->
        <div class="self-stretch inline-flex justify-start items-start gap-6">
          <!-- Leyenda Base (naranja) -->
          <div class="flex-1 p-4 bg-gray-50 rounded-lg inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch inline-flex justify-start items-center gap-2">
              <div class="w-8 h-2 bg-Bost-Orange-Alcanza-50 rounded-[60px]"></div>
              <div class="justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Proyección de pensión base</div>
              <div class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-Black text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
            </div>
            <div class="self-stretch justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$102,422</div>
          </div>

          <!-- Leyenda Avanzada (azul con diferencia verde) -->
          <div class="flex-1 p-4 bg-gray-50 rounded-lg inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch inline-flex justify-start items-center gap-2">
              <div class="w-8 h-2 bg-Bost--Blue-00 rounded-[60px]"></div>
              <div class="justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Proyección de pensión avanzada</div>
              <div class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-Black text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
            </div>
            <div class="inline-flex justify-center items-center gap-4">
              <div class="justify-start text-Black text-xl font-black font-['Noto_Sans'] leading-5">RD$292,794</div>
              <div class="flex justify-start items-center gap-1">
                <div class="w-2.5 h-4 relative origin-top-left rotate-180">
                  <div class="left-0 top-0 absolute text-right justify-start text-green-700 text-base font-black font-['Font_Awesome_5_Free'] leading-4">caret-down</div>
                </div>
                <div class="justify-start text-green-700 text-xs font-normal font-['Noto_Sans'] leading-3">RD$114,282 Diferencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botón Único: "Finalizar" -->
    <div class="w-full max-w-[800px] py-4 inline-flex justify-end items-start gap-6">
      <div class="px-6 py-4 bg-orange-400 rounded-3xl flex justify-center items-center gap-2.5">
        <div class="text-center justify-end text-white text-base font-bold font-['SF_Pro'] leading-5">Finalizar</div>
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

**Componentes Ya Creados (reutilizar)**:
- `src/components/Header.jsx` - Header con gradiente y usuario
- `src/components/ProgressBar.jsx` - Barra de progreso (actualizar a currentStep={4})
- `src/components/Footer.jsx` - Footer legal
- `src/components/ChatBubble.jsx` - Chat flotante

**Props de Entrada (desde Step3)**:
```javascript
// El componente Step4 recibe estas props:
{
  data: {
    name: string,
    documentId: string,
    age: number,
    retirementAge: number,        // Valor original de Step1
    monthlySalary: number,
    afpBalance: number,
    desiredPension: number,
    voluntaryContributions: number,
    // Proyección base (de Step3)
    basePension: {
      projectedPension: number,
      score: number,
      totalSavingsAtRetirement: number
    },
    // ... otros campos
  },
  onNext: () => void  // Finalizar wizard
}
```

**Campos Nuevos de Step4 (simulación avanzada)**:
```javascript
{
  advancedRetirementAge: number,        // Nueva edad de retiro (ajustada)
  advancedVoluntaryContribution: number, // Nuevo aporte voluntario
  annualSalaryIncrease: number,         // Incremento salarial anual (%)
  annualExtraordinaryContribution: number // Aporte extraordinario anual
}
```

**Cálculos Necesarios (mockData.js)**:
```javascript
export function calculateAdvancedPension(userData, advancedParams) {
  // Calcula proyección avanzada con parámetros ajustados
  return {
    projectedPension: number,      // Ej: 120000 (MAYOR que base)
    score: number,                 // De 0-10 (ej: 9, ALTO)
    message: string,               // "¡Felicidades!"
    description: string,           // Mensaje positivo
    totalSavingsAtRetirement: number,
    differenceVsBase: number,      // Diferencia positiva vs base
    differenceVsDesired: number    // A favor (proyectada > deseada)
  }
}

export function generateComparisonChart(userData, advancedParams) {
  // Genera datos para 2 áreas: base + avanzada
  return [
    {
      age: 35,
      baseSavings: 10000,
      advancedSavings: 15000  // Siempre >= baseSavings
    },
    // ...
  ]
}
```

**Colores Nuevos Identificados**:
```css
--bg-success-cards: #ECFDF5 (emerald-50)
--banner-gradient: radial-gradient(ellipse 1764.18% 941.76% at 0% 0%, rgba(0,94,184,0.40) 27%, rgba(140,0,117,0.40) 92%)
--chart-advanced-fill: rgba(173, 216, 230, 0.7) (blue-100/70)
--chart-advanced-stroke: #1488D6 (Bost--Blue-00)
--text-success: #15803D (green-700)
```

---

## Problem Solving

**Problema:** Step4 es una pantalla **híbrida** (formulario + visualización) que permite al usuario simular cambios en parámetros avanzados y ver en tiempo real cómo mejora su proyección de pensión comparada con la proyección base de Step3.

**Requerimientos:**
- Reutilizar Header, ProgressBar (100%), Footer, ChatBubble
- Banner con gradiente semitransparente + título "Simulador avanzado de pensión"
- 4 campos de entrada (2 con +/-, 2 text inputs)
- Recalcular proyección avanzada en tiempo real (onChange)
- Gauge mejorado (score alto ~9)
- Mensaje positivo "¡Felicidades!"
- 3 tarjetas VERDES (emerald-50): Deseada / Proyectada (mayor) / Diferencia A FAVOR
- Gráfico comparativo con 2 áreas: Base (naranja) + Avanzada (azul)
- 2 leyendas: Base (valor simple) + Avanzada (valor + diferencia verde con icono ↑)
- Botón único: "Finalizar" (terminar wizard)
- Responsive design

---

## User Story

```
Como usuario del simulador,
Quiero ajustar parámetros avanzados (edad de retiro, aportes, incremento salarial),
Para ver en tiempo real cómo estas acciones pueden mejorar mi proyección de pensión y alcanzar mi meta.
```

---

## Solution & Approach

**Enfoque elegido:** Formulario interactivo + Recálculo automático + Visualización comparativa

**Por qué:**
- ✅ Reutilizar Header, ProgressBar, Footer, ChatBubble (coherencia total)
- ✅ useState para campos de simulación avanzada
- ✅ useEffect para recalcular automáticamente cuando cambien inputs
- ✅ Recharts con 2 áreas (base + avanzada) para comparación visual
- ✅ Tarjetas verdes (emerald-50) indican éxito/mejora
- ✅ Botón "Finalizar" completa el wizard

---

## Implementation Plan

### 1. Análisis del HTML Source

**Estructura identificada:**

```
<Container>
  <Header /> <!-- Reutilizar -->
  <MainContent>
    <ProgressBar currentStep={4} /> <!-- 100% -->

    <!-- Título -->
    <h1>"Toma el Control: Tu Proyección de Pensión Avanzada"</h1>
    <p>"Tu proyección base es tu punto de partida..."</p>

    <!-- Banner con Gradiente -->
    <BannerGradiente height={224px} />
    <h2 text-shadow>"Simulador avanzado de pensión"</h2>
    <p>"Llena los campos y descubre al instante..."</p>

    <!-- Formulario: 4 Campos (2x2) -->
    <CamposFila1>
      - Edad de retiro (+/-)
      - Aporte voluntario mensual (input)
    </CamposFila1>
    <CamposFila2>
      - Incremento salarial anual (+/-, en %)
      - Aporte extraordinario anual (input, opcional)
    </CamposFila2>

    <!-- Gauge + Mensaje (Score Alto = 9) -->
    <GaugeConMensaje>
      <Gauge score={9} />
      <Mensaje>
        - "Resultado:"
        - "¡Felicidades!"
        - "Con estos ajustes, tendrás el control..."
      </Mensaje>
    </GaugeConMensaje>

    <!-- 3 Tarjetas VERDES -->
    <Tarjetas3Columnas bgColor="emerald-50">
      - Pensión Deseada: RD$80,000
      - Pensión Proyectada: RD$120,000 (AVANZADA, MAYOR)
      - Diferencia A FAVOR: RD$20,000 (POSITIVA)
    </Tarjetas3Columnas>

    <!-- Separador: Gráfico Comparativo -->
    <Separador>"Proyección de tus ahorros hasta el retiro"</Separador>
    <p>"Este gráfico compara tu Proyección Base vs Avanzada..."</p>

    <!-- Gráfico Recharts: 2 Áreas -->
    <GráficoRecharts data={comparisonChartData}>
      <Área name="Base" color="naranja" />
      <Área name="Avanzada" color="azul" />
    </GráficoRecharts>

    <!-- Leyendas: 2 Tarjetas -->
    <Leyendas>
      - Base: badge naranja + valor simple
      - Avanzada: badge azul + valor + diferencia verde ↑
    </Leyendas>

    <BotónÚnico>"Finalizar"</BotónÚnico>
  </MainContent>
  <Footer /> <!-- Reutilizar -->
  <ChatBubble /> <!-- Reutilizar -->
</Container>
```

**Diferencias Clave con Step3:**

| Aspecto | Step3 (Base) | Step4 (Avanzado) |
|---------|--------------|------------------|
| **Formulario** | ❌ No hay inputs | ✅ 4 campos de entrada |
| **Score** | 3 (bajo) | 9 (alto) |
| **Tarjetas** | rose-100 (negativo) | emerald-50 (positivo) |
| **Mensaje** | "¡Atención!" | "¡Felicidades!" |
| **Gráfico** | 1 área (base) | 2 áreas (base + avanzada) |
| **Leyendas** | 1 tarjeta | 2 tarjetas con diferencia |
| **Botón** | "Ir al Simulador" | "Finalizar" |

---

### 2. Crear Lógica de Cálculo en mockData.js

**Archivo:** `src/data/mockData.js`

**Ejemplo de funciones (código ilustrativo):**

```javascript
// Cálculo de pensión avanzada (con parámetros ajustados)
export function calculateAdvancedPension(userData, advancedParams) {
  const {
    age,
    monthlySalary,
    afpBalance,
    desiredPension
  } = userData

  const {
    advancedRetirementAge,
    advancedVoluntaryContribution,
    annualSalaryIncrease,
    annualExtraordinaryContribution
  } = advancedParams

  const yearsToRetirement = advancedRetirementAge - age
  const monthsToRetirement = yearsToRetirement * 12

  // Cálculo con incremento salarial
  let currentSalary = monthlySalary
  let totalContributions = afpBalance
  const annualReturn = 0.05

  for (let year = 0; year < yearsToRetirement; year++) {
    // Aportes obligatorios + voluntarios
    const monthlyContribution = (currentSalary * 0.1029) + advancedVoluntaryContribution
    const annualContributions = monthlyContribution * 12

    // Aporte extraordinario
    const yearContributions = annualContributions + annualExtraordinaryContribution

    // Aplicar rentabilidad
    totalContributions = (totalContributions + yearContributions) * (1 + annualReturn)

    // Incremento salarial para próximo año
    currentSalary *= (1 + annualSalaryIncrease / 100)
  }

  // Pensión mensual (4% del saldo final)
  const projectedPension = Math.round(totalContributions * 0.04 / 12)

  // Calcular score (debería ser alto)
  const difference = projectedPension - desiredPension
  const gapPercentage = Math.abs(difference / desiredPension) * 100

  let score, message, description

  if (difference >= 0) {
    // Proyectada >= Deseada
    score = 9
    message = '¡Felicidades!'
    description = 'Con estos ajustes, tendrás el control para volver tu Proyección Avanzada una realidad para tu retiro.'
  } else if (gapPercentage <= 10) {
    score = 8
    message = '¡Casi perfecto!'
    description = 'Estás muy cerca de tu pensión deseada con estos ajustes.'
  } else {
    score = 6
    message = '¡Buen avance!'
    description = 'Has mejorado significativamente tu proyección.'
  }

  return {
    projectedPension,
    difference: Math.abs(difference),
    differenceIsPositive: difference >= 0,
    score,
    message,
    description,
    totalSavingsAtRetirement: Math.round(totalContributions),
    differenceVsBase: 0  // Se calculará comparando con base
  }
}

// Generar datos para gráfico comparativo (2 áreas)
export function generateComparisonChart(baseData, advancedData, userData) {
  const { age, retirementAge, advancedRetirementAge } = userData
  const maxAge = Math.max(retirementAge, advancedRetirementAge)
  const data = []

  // Crear datasets base y avanzado
  const baseChart = generateSavingsChart(userData) // De Step3
  const advancedChart = generateSavingsChart({
    ...userData,
    retirementAge: advancedRetirementAge,
    voluntaryContributions: advancedData.advancedVoluntaryContribution,
    // ... más parámetros
  })

  // Combinar en un solo dataset
  for (let currentAge = age; currentAge <= maxAge; currentAge++) {
    const basePoint = baseChart.find(p => p.age === currentAge)
    const advancedPoint = advancedChart.find(p => p.age === currentAge)

    data.push({
      age: currentAge,
      baseSavings: basePoint ? basePoint.savings : 0,
      advancedSavings: advancedPoint ? advancedPoint.savings : 0
    })
  }

  return data
}
```

---

### 3. Crear Componente Step4.jsx

**Archivo:** `src/pages/Step4.jsx`

**Ejemplo de estructura (código ilustrativo):**

```jsx
import { useState, useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'
import { calculateAdvancedPension, generateComparisonChart } from '../data/mockData'

export default function Step4({ data, onNext }) {
  // Estado de parámetros avanzados
  const [advancedParams, setAdvancedParams] = useState({
    advancedRetirementAge: data.retirementAge || 65,
    advancedVoluntaryContribution: data.voluntaryContributions || 0,
    annualSalaryIncrease: 5, // % por defecto
    annualExtraordinaryContribution: 0
  })

  // Calcular proyección avanzada automáticamente
  const advancedPensionData = calculateAdvancedPension(data, advancedParams)
  const comparisonChartData = generateComparisonChart(
    data.basePension,
    advancedPensionData,
    { ...data, ...advancedParams }
  )

  const {
    projectedPension,
    difference,
    differenceIsPositive,
    score,
    message,
    description,
    totalSavingsAtRetirement
  } = advancedPensionData

  // Handlers para campos con +/-
  const handleRetirementAgeChange = (delta) => {
    setAdvancedParams(prev => ({
      ...prev,
      advancedRetirementAge: Math.max(data.age + 1, Math.min(100, prev.advancedRetirementAge + delta))
    }))
  }

  const handleSalaryIncreaseChange = (delta) => {
    setAdvancedParams(prev => ({
      ...prev,
      annualSalaryIncrease: Math.max(0, Math.min(20, prev.annualSalaryIncrease + delta))
    }))
  }

  const handleFieldChange = (field, value) => {
    setAdvancedParams(prev => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const handleFinish = () => {
    // Guardar datos avanzados y finalizar
    onNext({ ...data, ...advancedParams, advancedPensionData })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header userName={data.name} userDocument={data.documentId} />

      <div className="flex-1 px-6 lg:px-24 py-10 lg:py-14 bg-white flex flex-col items-center gap-2.5">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress Bar */}
          <ProgressBar currentStep={4} />

          {/* Título */}
          <div className="self-stretch rounded-2xl flex flex-col gap-6">
            <div className="self-stretch pt-8 pb-4 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#4C4C4C] text-xl lg:text-2xl leading-6">
                    <span className="font-bold">Toma el Control: </span>
                    <span className="font-normal">Tu Proyección de Pensión Avanzada</span>
                  </h1>
                  <p className="text-black text-base leading-8">
                    <span>Tu proyección base es tu punto de partida. Utiliza el </span>
                    <span className="font-bold">Simulador Avanzado </span>
                    <span>y toma el control de tu futuro.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner con Gradiente */}
          <div className="flex flex-col gap-6">
            <div
              className="w-full h-56 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse 1764.18% 941.76% at 0% 0%, rgba(0, 94, 184, 0.40) 27%, rgba(140, 0, 117, 0.40) 92%)'
              }}
            />
            <h2 className="text-white text-3xl lg:text-4xl leading-9" style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <span className="font-bold">Simulador avanzado</span>
              <span className="font-normal"> de pensión</span>
            </h2>
            <p className="text-black text-base leading-8">
              <span>Llena los campos y descubre al instante tu </span>
              <span className="font-bold">Proyección Avanzada.</span>
            </p>

            {/* Formulario: Fila 1 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Edad de retiro (+/-) */}
              <div className="w-full lg:w-96 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1">
                  <span className="text-[#4C4C4C] text-base">Edad de retiro</span>
                  <span className="text-red-600">*</span>
                  <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                </label>
                <div className="p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleRetirementAgeChange(-1)}
                    className="w-3 text-neutral-500 opacity-40 hover:opacity-100 transition-opacity"
                  >
                    −
                  </button>
                  <div className="w-px h-full border-l border-gray-200" />
                  <div className="flex-1 text-center text-black text-sm">
                    {advancedParams.advancedRetirementAge} Años
                  </div>
                  <div className="w-px h-full border-l border-gray-200" />
                  <button
                    type="button"
                    onClick={() => handleRetirementAgeChange(1)}
                    className="text-[#4C4C4C] hover:text-[#FF7933] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Aporte voluntario mensual */}
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1">
                  <span className="text-[#4C4C4C] text-base">Aporte voluntario mensual</span>
                  <span className="text-red-600">*</span>
                  <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                </label>
                <input
                  type="number"
                  value={advancedParams.advancedVoluntaryContribution}
                  onChange={(e) => handleFieldChange('advancedVoluntaryContribution', e.target.value)}
                  placeholder="RD$"
                  className="p-4 bg-white rounded-lg border border-gray-200 text-sm"
                />
              </div>
            </div>

            {/* Formulario: Fila 2 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Incremento salarial anual (+/-) */}
              <div className="w-full lg:w-96 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1">
                  <span className="text-[#4C4C4C] text-base">Incremento salarial anual</span>
                  <span className="text-red-600">*</span>
                  <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                </label>
                <div className="p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleSalaryIncreaseChange(-1)}
                    className="w-3 text-neutral-500 opacity-40 hover:opacity-100 transition-opacity"
                  >
                    −
                  </button>
                  <div className="w-px h-full border-l border-gray-200" />
                  <div className="flex-1 text-center text-black text-sm">
                    {advancedParams.annualSalaryIncrease}%
                  </div>
                  <div className="w-px h-full border-l border-gray-200" />
                  <button
                    type="button"
                    onClick={() => handleSalaryIncreaseChange(1)}
                    className="text-[#4C4C4C] hover:text-[#FF7933] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Aporte extraordinario anual */}
              <div className="flex-1 flex flex-col gap-1">
                <label className="px-2.5 flex items-center gap-1">
                  <span className="text-[#4C4C4C] text-base">Aporte extraordinario anual</span>
                  <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                </label>
                <input
                  type="number"
                  value={advancedParams.annualExtraordinaryContribution || ''}
                  onChange={(e) => handleFieldChange('annualExtraordinaryContribution', e.target.value)}
                  placeholder="Ingresa el monto en pesos RD$"
                  className="p-4 bg-white rounded-lg border border-gray-200 text-sm placeholder:text-[#4C4C4C]"
                />
              </div>
            </div>

            {/* Gauge + Mensaje (Score Alto) */}
            <div className="self-stretch rounded-2xl flex flex-col gap-6">
              <div className="px-6 lg:px-12 py-6 bg-stone-50 rounded-lg flex flex-col lg:flex-row items-center gap-8">
                {/* Gauge SVG (Score Alto ~9) */}
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
                  <div className="flex justify-between w-full px-4">
                    <span className="text-black text-base">0</span>
                    <span className="text-black text-base">10</span>
                  </div>
                  <div className="absolute top-16 bg-gray-200 rounded px-2 py-1">
                    <span className="text-black text-3xl font-black">{score}</span>
                  </div>
                </div>

                {/* Mensaje Positivo */}
                <div className="flex-1 flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
                  <span className="text-black text-base">Resultado:</span>
                  <span className="text-black text-2xl font-bold">{message}</span>
                  <p className="text-black text-base leading-6">{description}</p>
                </div>
              </div>

              {/* 3 Tarjetas VERDES */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Pensión Deseada */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-center text-black text-base">Tu Pensión Deseada</span>
                  </div>
                  <div className="border-t border-black/10 my-2" />
                  <span className="text-center text-black text-xl font-black">
                    RD${data.desiredPension.toLocaleString()}
                  </span>
                </div>

                {/* Pensión Proyectada (AVANZADA) */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-center text-black text-base">Tu Pensión Proyectada</span>
                  </div>
                  <div className="border-t border-black/10 my-2" />
                  <span className="text-center text-black text-xl font-black">
                    RD${projectedPension.toLocaleString()}
                  </span>
                </div>

                {/* Diferencia A FAVOR */}
                <div className="flex-1 p-4 bg-emerald-50 rounded-lg flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-center text-black text-base">
                      {differenceIsPositive ? 'Diferencia a favor' : 'Diferencia a cubrir'}
                    </span>
                  </div>
                  <div className="border-t border-black/10 my-2" />
                  <span className="text-center text-black text-xl font-black">
                    RD${difference.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Separador: Gráfico Comparativo */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-10">
                <span className="text-[#949494] font-bold">Proyección de tus ahorros hasta el retiro</span>
                <div className="flex-1 h-0 border-t-2 border-gray-200" />
              </div>
              <p className="text-black text-base">
                Este gráfico compara tu Proyección de Pensión Base, lo que podrías obtener sin cambios y tu Proyección de Pensión Avanzada, lo que podrías lograr al aplicar los cambios que acabas de simular.
              </p>
            </div>

            {/* Gráfico Recharts: 2 Áreas */}
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={comparisonChartData}>
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
                  {/* Área Base (naranja) */}
                  <Area
                    type="monotone"
                    dataKey="baseSavings"
                    name="Proyección Base"
                    stroke="#FF7933"
                    strokeWidth={6}
                    fill="#FFE5D9"
                    fillOpacity={0.7}
                  />
                  {/* Área Avanzada (azul) */}
                  <Area
                    type="monotone"
                    dataKey="advancedSavings"
                    name="Proyección Avanzada"
                    stroke="#1488D6"
                    strokeWidth={6}
                    fill="#ADD8E6"
                    fillOpacity={0.7}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Leyendas: 2 Tarjetas */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Leyenda Base */}
              <div className="flex-1 p-4 bg-gray-50 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-[#FF7933] rounded-full" />
                  <span className="text-black text-base">Proyección de pensión base</span>
                  <span className="text-black opacity-60">ℹ️</span>
                </div>
                <div className="border-t border-black/10 my-2" />
                <span className="text-black text-xl font-black">
                  RD${data.basePension.totalSavingsAtRetirement.toLocaleString()}
                </span>
              </div>

              {/* Leyenda Avanzada (con diferencia verde) */}
              <div className="flex-1 p-4 bg-gray-50 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-[#1488D6] rounded-full" />
                  <span className="text-black text-base">Proyección de pensión avanzada</span>
                  <span className="text-black opacity-60">ℹ️</span>
                </div>
                <div className="border-t border-black/10 my-2" />
                <div className="flex items-center gap-4">
                  <span className="text-black text-xl font-black">
                    RD${totalSavingsAtRetirement.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-green-700 text-base">▲</span>
                    <span className="text-green-700 text-xs">
                      RD${(totalSavingsAtRetirement - data.basePension.totalSavingsAtRetirement).toLocaleString()} Diferencia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón Único: "Finalizar" */}
          <div className="py-4 flex justify-end">
            <button
              onClick={handleFinish}
              className="px-6 py-4 bg-orange-400 text-white text-base font-bold rounded-3xl
                hover:bg-orange-500 transition-colors"
            >
              Finalizar
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
- Banner gradiente: altura reducida (h-40)
- Campos: stack vertical (flex-col)
- Gauge + mensaje: stack vertical
- Tarjetas verdes: stack vertical
- Gráfico: altura reducida
- Leyendas: stack vertical

#### Desktop (>= 1024px):
- Banner: h-56
- Campos: 2x2 grid (flex-row)
- Gauge + mensaje: horizontal
- Tarjetas: 3 columnas
- Gráfico: altura completa
- Leyendas: 2 columnas

**Código responsive clave:**

```jsx
{/* Campos: mobile vertical, desktop 2x2 */}
<div className="flex flex-col lg:flex-row gap-6">
  <div className="w-full lg:w-96">...</div>
  <div className="flex-1">...</div>
</div>

{/* Tarjetas: mobile vertical, desktop 3 columnas */}
<div className="flex flex-col lg:flex-row gap-6">
  <div className="flex-1">...</div>
  <div className="flex-1">...</div>
  <div className="flex-1">...</div>
</div>
```

---

## Testing Strategy

### Visual Testing (Manual)

**Checklist Desktop:**

- [ ] **Progress Bar:**
  - [ ] Steps 1-3 completados
  - [ ] Step 4 actual (badge 100%, círculo triple)
  - [ ] Línea naranja completa hasta Step 4

- [ ] **Banner Gradiente:**
  - [ ] Gradiente azul-morado semitransparente
  - [ ] Altura 224px
  - [ ] Bordes redondeados (rounded-3xl)
  - [ ] Título con text-shadow

- [ ] **Formulario:**
  - [ ] 4 campos alineados en 2x2
  - [ ] Campos con +/- funcionan (edad, incremento)
  - [ ] Inputs de texto funcionan
  - [ ] Validación de rangos (edad, incremento 0-20%)

- [ ] **Gauge + Mensaje:**
  - [ ] Score alto (~9)
  - [ ] Mensaje "¡Felicidades!"
  - [ ] Descripción positiva

- [ ] **Tarjetas Verdes:**
  - [ ] Color emerald-50
  - [ ] Proyectada > Deseada
  - [ ] Diferencia A FAVOR

- [ ] **Gráfico Comparativo:**
  - [ ] 2 áreas visibles: naranja (base) + azul (avanzada)
  - [ ] Área avanzada >= área base
  - [ ] Tooltip funciona
  - [ ] Ejes correctos

- [ ] **Leyendas:**
  - [ ] 2 tarjetas
  - [ ] Badge naranja + badge azul
  - [ ] Diferencia verde con icono ▲

**Checklist Mobile:**

- [ ] Banner altura reducida
- [ ] Campos stack verticalmente
- [ ] Tarjetas verdes stack verticalmente
- [ ] Gráfico legible
- [ ] Leyendas stack verticalmente

### Functional Testing

```bash
npm run test

# Verificar:
# - calculateAdvancedPension devuelve score alto
# - generateComparisonChart genera 2 datasets
# - Recálculo automático al cambiar inputs (useEffect)
# - Valores avanzados >= valores base
# - onNext funciona con datos completos
```

---

## Edge Cases

#### Edad Avanzada Menor que Edad Actual

**Problema:** Usuario decrementa edad de retiro por debajo de edad actual
**Solución:** Validar en handler

```javascript
advancedRetirementAge: Math.max(data.age + 1, ...)
```

#### Incremento Salarial Negativo

**Problema:** Usuario decrementa incremento por debajo de 0%
**Solución:** Validar rango 0-20%

```javascript
annualSalaryIncrease: Math.max(0, Math.min(20, ...))
```

#### Proyección Avanzada Peor que Base

**Problema:** Usuario ingresa valores que empeoran proyección
**Resultado:** Score bajo, tarjetas deberían ser rose-100
**Solución:** Ajustar colores dinámicamente

```jsx
<div className={`p-4 ${differenceIsPositive ? 'bg-emerald-50' : 'bg-rose-100'} rounded-lg`}>
  ...
</div>
```

#### Gráfico sin Datos

**Problema:** comparisonChartData vacío
**Solución:** Mostrar mensaje alternativo

```jsx
{comparisonChartData.length > 0 ? (
  <ResponsiveContainer>...</ResponsiveContainer>
) : (
  <p className="text-center text-gray-500">Ajusta los parámetros para ver el gráfico.</p>
)}
```

---

## Acceptance Criteria

**Visual Desktop:**
- ✅ Progress bar al 100% con todos los steps completados
- ✅ Banner gradiente azul-morado semitransparente
- ✅ Título con text-shadow
- ✅ 4 campos en grid 2x2
- ✅ Campos con +/- funcionan
- ✅ Gauge score alto (~9)
- ✅ Mensaje positivo "¡Felicidades!"
- ✅ 3 tarjetas verdes (emerald-50)
- ✅ Valores proyectados > base
- ✅ Gráfico comparativo con 2 áreas (naranja + azul)
- ✅ Área avanzada >= área base
- ✅ 2 leyendas con badges de colores
- ✅ Diferencia verde con icono ▲
- ✅ Botón "Finalizar"

**Visual Mobile:**
- ✅ Banner altura reducida
- ✅ Todos los campos stack verticalmente
- ✅ Tarjetas verdes stack verticalmente
- ✅ Gráfico altura reducida pero legible

**Funcional:**
- ✅ calculateAdvancedPension calcula correctamente
- ✅ Score se calcula según mejora
- ✅ Mensaje cambia según score
- ✅ generateComparisonChart genera 2 datasets
- ✅ Gráfico muestra base + avanzada
- ✅ Recálculo automático al cambiar inputs
- ✅ Validación de rangos funciona
- ✅ onNext guarda datos avanzados
- ✅ "Finalizar" termina el wizard

**Calidad:**
- ✅ No hay errores en consola
- ✅ Tests pasan (mockData.js)
- ✅ Build sin warnings
- ✅ Reutiliza Header, ProgressBar, Footer, ChatBubble
- ✅ Coherencia total con Step1, Step2, Step3

---

## Validation Commands

```bash
# 1. Verificar Step4.jsx y funciones en mockData.js
ls src/pages/Step4.jsx
grep -n "calculateAdvancedPension\|generateComparisonChart" src/data/mockData.js

# 2. Dev server
npm run dev
# Navegar: Login → Step1 → Step2 → Step3 → Step4
# Verificar diseño desktop y mobile
# Ajustar parámetros y ver recálculo en tiempo real

# 3. Tests
npm run test src/data/__tests__/mockData.test.js

# 4. Build
npm run build

# 5. Verificar cálculos avanzados
# Ajustar:
# - Edad retiro: 60 → 65 (5 años más)
# - Aporte voluntario: 0 → 10,000
# - Incremento salarial: 5% → 8%
# - Aporte extraordinario: 0 → 50,000
# Resultado esperado:
# - Score: 8-9 (alto)
# - Mensaje: "¡Felicidades!" o "¡Casi perfecto!"
# - Proyectada > Deseada
# - Tarjetas verdes
# - Gráfico azul > naranja
```

---

## Time Estimate

**Total: 4-5 horas**

- Lógica calculateAdvancedPension (con incremento salarial): 50 min
- Lógica generateComparisonChart (2 áreas): 30 min
- Banner con gradiente semitransparente: 15 min
- Formulario 4 campos (2 con +/-, 2 inputs): 45 min
- Gauge + mensaje (reutilizar de Step3): 15 min
- 3 tarjetas verdes: 20 min
- Gráfico Recharts con 2 áreas: 45 min
- 2 leyendas con diferencia verde: 20 min
- Recálculo automático (useEffect): 20 min
- Responsive design: 30 min
- Testing visual + ajustes: 25 min
- Unit tests mockData.js: 20 min

---

## Next Steps After Completion

**Completar Fase 2:**
- Implementar modal Step5 (opcional, confirmación)
- Implementar pantalla Result (resumen final comparativo)
- Conectar flujo completo Login → Step1-4 → Result
- Testing end-to-end del wizard completo

**Checkpoint Fase 2 Step4:**
- ✅ Step4 visualmente idéntico al HTML
- ✅ Formulario con 4 campos funciona
- ✅ Cálculos avanzados correctos
- ✅ Recálculo automático funciona
- ✅ Gauge muestra score alto
- ✅ Tarjetas verdes indican éxito
- ✅ Gráfico comparativo con 2 áreas
- ✅ Leyendas con diferencia verde
- ✅ Responsive funcional
- ✅ Coherencia total con pasos anteriores
- ✅ Botón "Finalizar" funciona

---

## Notes

- **Importante:** Step4 es el último paso del wizard (100%)
- **Importante:** Progress bar TODOS los steps completados excepto el actual (4 completados, 4 es actual con badge 100%)
- **Importante:** Banner con gradiente SEMITRANSPARENTE (rgba con alpha 0.40)
- **Importante:** Título con text-shadow para contraste sobre gradiente
- **Importante:** Score ALTO (~9): indica que con ajustes, proyección mejora significativamente
- **Importante:** Tarjetas VERDES (emerald-50): indican éxito/mejora (vs rose-100 de Step3)
- **Importante:** "Diferencia A FAVOR": proyectada > deseada (positivo)
- **Importante:** Gráfico con 2 ÁREAS: Base (naranja) + Avanzada (azul)
- **Importante:** Área avanzada siempre >= área base (mejora)
- **Importante:** Leyenda avanzada incluye diferencia verde con icono ▲ (up arrow)
- **Importante:** Campos con +/-: separadores verticales internos (border-l)
- **Importante:** Incremento salarial en PORCENTAJE (8%)
- **Importante:** Aporte extraordinario es OPCIONAL (sin asterisco rojo)
- **Importante:** Recálculo automático con useEffect al cambiar inputs
- **Importante:** Botón "Finalizar" (no "Continuar") termina el wizard
- **Importante:** onNext debe guardar advancedParams para pantalla Result

---

**Regla de oro Fase 2 Step4:** Simulación interactiva + Recálculo automático + Visualización comparativa + Mensaje positivo + Coherencia total.
