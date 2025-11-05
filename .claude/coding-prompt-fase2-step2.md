# Fase 2: Step 2 Screen - Siembra Pension Simulator

## Feature Description

Implementar la pantalla Step2 (Información de Ingresos y Gastos) con los estilos exactos del diseño HTML. Esta pantalla incluye formularios complejos con campos de ingresos, gastos mensuales categorizados, resúmenes expandibles/colapsables, y campos relacionados con AFP. El HTML proporcionado es la única fuente de verdad.

---

## HTML de Referencia (Fuente de Verdad)

**IMPORTANTE:** Este HTML es la ÚNICA fuente de verdad para el diseño. Todos los estilos, colores, tipografía y layout deben extraerse directamente de aquí.

**Ubicación:** `E:\Siembra\designs\step2.html`

```html
<div class="w-[1440px] bg-white inline-flex flex-col justify-start items-start overflow-hidden">
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
      <!-- Progress Bar al 50% -->
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
        <!-- Step 2: Actual (50%) -->
        <div class="left-[235px] top-[-7.50px] absolute inline-flex flex-col justify-start items-center">
          <div data-property-1="current" class="w-10 h-12 relative">
            <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
            <div class="w-7 h-7 left-[6px] top-[12px] absolute bg-White"></div>
            <div class="w-5 h-5 left-[9px] top-[15px] absolute bg-Bost-Orange-100"></div>
          </div>
          <div class="px-4 py-2 bg-Bost-Orange-00 rounded-[30px] inline-flex justify-center items-center">
            <div class="justify-start text-White text-xs font-bold font-['Noto_Sans'] leading-3">50%</div>
          </div>
        </div>
        <!-- Steps 3 y 4: Pendientes -->
        <div class="left-[507px] top-[-7px] absolute inline-flex flex-col justify-start items-center">
          <div data-property-1="No-Fill" class="w-10 h-12 relative">
            <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
            <div class="w-7 h-7 left-[6px] top-[12px] absolute bg-White"></div>
          </div>
        </div>
        <div data-property-1="No-Fill" class="w-10 h-12 left-[760px] top-[-7px] absolute">
          <div class="w-10 h-10 left-0 top-[6px] absolute bg-Bost-Orange-00"></div>
          <div class="w-7 h-7 left-[6px] top-[12px] absolute bg-White"></div>
        </div>
      </div>

      <!-- Título -->
      <div class="self-stretch pt-8 pb-4 flex flex-col justify-start items-start gap-2">
        <div class="self-stretch inline-flex justify-between items-center">
          <div class="flex-1 justify-start"><span class="text-neutral-600 text-2xl font-black font-['Noto_Sans'] leading-6">Información:</span><span class="text-neutral-600 text-2xl font-bold font-['Noto_Sans'] leading-6"> </span><span class="text-neutral-600 text-2xl font-normal font-['Noto_Sans'] leading-6">Ingresos y gastos</span></div>
        </div>
        <div class="self-stretch inline-flex justify-between items-center">
          <div class="flex-1 justify-start"><span class="text-neutral-600 text-sm font-normal font-['Noto_Sans'] leading-4">Todos los campos marcados con (</span><span class="text-neutral-600 text-sm font-bold font-['Noto_Sans'] leading-4">*</span><span class="text-neutral-600 text-sm font-normal font-['Noto_Sans'] leading-4">) son obligatorios</span></div>
        </div>
      </div>

      <!-- Campos: Salario mensual + Otros ingresos -->
      <div class="self-stretch inline-flex justify-start items-start gap-6">
        <div data-type="Default" class="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
            <div class="justify-start"><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">¿Cuál es tu salario mensual?</span><span class="text-red-600 text-base font-bold font-['Noto_Sans'] leading-5">*</span></div>
            <div class="w-4 h-4 relative overflow-hidden">
              <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-neutral-600 text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
            </div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-lg shadow-[0px_0px_7px_0px_rgba(20,136,214,0.40)] outline outline-1 outline-offset-[-1px] outline-Bost-Blue-50 inline-flex justify-start items-start gap-2.5">
            <div class="flex-1 flex justify-start items-center gap-2.5">
              <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$100,000</div>
            </div>
          </div>
        </div>
        <div data-type="Default" class="w-96 inline-flex flex-col justify-start items-start gap-1">
          <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
            <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">¿Tienes otros ingresos?</div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-start gap-2.5">
            <div class="flex-1 flex justify-start items-center gap-2.5">
              <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$0</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resumen de Ingresos (expandible) -->
      <div class="self-stretch bg-white flex flex-col justify-start items-start gap-8">
        <div class="self-stretch p-8 bg-neutral-50 rounded-2xl flex flex-col justify-start items-start gap-1">
          <div class="self-stretch flex flex-col justify-start items-start">
            <div class="self-stretch inline-flex justify-center items-center gap-2">
              <div class="flex-1 justify-start text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">Resumen de ingresos</div>
              <div class="flex justify-start items-center gap-2">
                <div class="w-4 h-4 relative overflow-hidden">
                  <div class="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-Input-Label"></div>
                </div>
                <div class="justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Mostrar menos detalles</div>
              </div>
            </div>
            <div class="self-stretch pt-4 pb-2 flex flex-col justify-start items-start gap-4">
              <div class="self-stretch inline-flex justify-center items-center gap-2">
                <div class="flex-1 justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Salario mensual</div>
                <div class="w-48 text-right justify-start text-Black text-base font-bold font-['Noto_Sans'] leading-4">RD$100,000</div>
              </div>
              <div class="self-stretch inline-flex justify-center items-center gap-2">
                <div class="flex-1 justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Otros ingresos</div>
                <div class="w-48 text-right justify-start text-Black text-base font-bold font-['Noto_Sans'] leading-4">RD$0</div>
              </div>
            </div>
          </div>
          <div class="self-stretch pb-4 flex flex-col justify-start items-start gap-4">
            <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
            </div>
            <div class="self-stretch inline-flex justify-center items-center gap-2.5">
              <div class="flex-1 justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Resumen de ingresos totales</div>
              <div class="flex justify-center items-center gap-2.5">
                <div class="text-right justify-start text-zinc-800 text-xl font-bold font-['Noto_Sans'] leading-5">RD$100,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gastos Mensuales -->
      <div class="self-stretch flex flex-col justify-start items-start gap-6">
        <div class="self-stretch flex flex-col justify-start items-start gap-4">
          <div class="self-stretch inline-flex justify-start items-center gap-10">
            <div class="w-32 self-stretch justify-start text-neutral-400 text-base font-bold font-['Noto_Sans'] leading-4">Gastos Mensuales</div>
            <div class="flex-1 h-0 outline outline-2 outline-offset-[-1px] outline-gray-200"></div>
          </div>
          <div class="self-stretch justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-4">Completa los campos con el valor aproximado que gastas al mes en cada categoría.</div>
        </div>

        <!-- Tipo de Vivienda (radio) -->
        <div class="self-stretch p-4 bg-neutral-50 rounded-lg inline-flex justify-start items-start gap-6">
          <div class="flex-1 flex justify-start items-center gap-2">
            <div class="flex-1 justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Tipo de Vivienda</div>
            <div class="flex justify-start items-center gap-2">
              <div class="justify-start text-Bost-Orange-00 text-sm font-black font-['Font_Awesome_7_Free'] leading-5">circle-check</div>
              <div class="justify-start text-neutral-600 text-sm font-normal font-['Noto_Sans'] leading-5">Alquilada</div>
            </div>
            <div class="flex justify-start items-center gap-2">
              <div class="justify-start text-Bost-Orange-00 text-sm font-normal font-['Noto_Sans'] leading-5">circle</div>
              <div class="justify-start text-neutral-600 text-sm font-normal font-['Noto_Sans'] leading-5">Propia</div>
            </div>
          </div>
        </div>

        <!-- Campos de gastos (3 columnas) -->
        <div class="self-stretch h-24 inline-flex justify-start items-start gap-6">
          <!-- Vivienda -->
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Vivienda</div>
              <div class="w-4 h-4 relative overflow-hidden">
                <div class="left-0 top-[-1px] absolute opacity-60 text-right justify-start text-neutral-600 text-base font-black font-['Font_Awesome_7_Free'] leading-4">circle-exclamation</div>
              </div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 flex justify-start items-center gap-2.5">
                <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$ 50,000</div>
              </div>
            </div>
          </div>
          <!-- Gastos de hogar -->
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Gastos de hogar</div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$ 20,000</div>
            </div>
          </div>
          <!-- Educación -->
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Educación</div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
              <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$ 0</div>
            </div>
          </div>
        </div>

        <!-- Segunda fila de gastos (3 columnas con nota en pago deuda) -->
        <div class="self-stretch inline-flex justify-start items-start gap-6">
          <!-- Pago deuda (con nota) -->
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Pago deuda</div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
              <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$ 20,000</div>
            </div>
            <div class="self-stretch px-2.5 inline-flex justify-end items-start gap-2">
              <div class="flex-1 flex justify-start items-start gap-2">
                <div class="w-4 h-4 relative overflow-hidden">
                  <div class="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-1 outline-offset-[-0.50px] outline-Bost-Grey-00"></div>
                </div>
                <div class="flex-1 justify-start text-neutral-400 text-xs font-normal font-['Noto_Sans'] leading-4">Incluya solo los pagos mensuales de deudas: tarjetas, préstamos u otros</div>
              </div>
            </div>
          </div>
          <!-- Entretenimiento -->
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Entretenimiento</div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
              <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$ 0</div>
            </div>
          </div>
          <!-- Imprevistos -->
          <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
              <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">Imprevistos</div>
            </div>
            <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
              <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$ 0</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resumen de Gastos (expandible) -->
      <div class="self-stretch p-4 bg-neutral-50 rounded-2xl flex flex-col justify-start items-start gap-6">
        <div class="self-stretch px-6 flex flex-col justify-start items-start">
          <div class="self-stretch flex flex-col justify-start items-start gap-3">
            <div class="self-stretch inline-flex justify-start items-center gap-2">
              <div class="flex-1 justify-start text-Black text-2xl font-bold font-['Noto_Sans'] leading-6">Resumen de Gastos</div>
              <div class="flex justify-start items-center gap-2">
                <div class="w-4 h-4 relative overflow-hidden">
                  <div class="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-Input-Label"></div>
                </div>
                <div class="justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Mostrar menos detalles</div>
              </div>
            </div>
          </div>
          <!-- Detalle de gastos -->
          <div class="self-stretch pt-4 pb-2 flex flex-col justify-start items-start gap-4">
            <div class="self-stretch inline-flex justify-center items-center gap-2">
              <div class="flex-1 flex justify-start items-center gap-2">
                <div class="justify-start text-Input-Label text-base font-normal font-['Noto_Sans'] leading-4">Vivienda</div>
              </div>
              <div class="w-48 text-right justify-start text-Black text-base font-bold font-['Noto_Sans'] leading-4">RD$50,000</div>
            </div>
            <!-- Más líneas... -->
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <div class="self-stretch py-2 inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 h-0 opacity-10 outline outline-1 outline-offset-[-0.50px] outline-Black"></div>
            </div>
            <div class="self-stretch inline-flex justify-center items-center gap-2.5">
              <div class="flex-1 justify-start text-Black text-base font-normal font-['Noto_Sans'] leading-4">Total gastos mensuales</div>
              <div class="flex justify-center items-center gap-2.5">
                <div class="text-right justify-start text-zinc-800 text-xl font-bold font-['Noto_Sans'] leading-5">RD$90,000</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Capacidad de ahorro (2 tarjetas) -->
        <div class="self-stretch inline-flex justify-start items-start gap-4">
          <div class="flex-1 p-4 bg-rose-100 rounded-lg inline-flex flex-col justify-start items-start gap-2">
            <div class="self-stretch justify-start text-Black text-xs font-normal font-['Noto_Sans'] leading-4">Capacidad de ahorro</div>
            <div class="justify-start text-Black text-2xl font-extrabold font-['SF_Pro_Display'] leading-6">RD$0</div>
          </div>
          <div class="flex-1 self-stretch p-4 bg-rose-100 rounded-lg inline-flex flex-col justify-center items-start gap-2">
            <div class="self-stretch justify-center text-Black text-xs font-normal font-['Noto_Sans'] leading-4">Porcentaje de ahorro</div>
            <div class="justify-start text-Black text-2xl font-extrabold font-['SF_Pro_Display'] leading-6">0%</div>
          </div>
        </div>
      </div>

      <!-- Separador AFP -->
      <div class="self-stretch py-4 inline-flex justify-start items-center gap-10">
        <div class="justify-start text-neutral-400 text-base font-bold font-['Noto_Sans'] leading-4">Administradora de Fondos de Pensiones (AFP)</div>
        <div class="flex-1 h-0 outline outline-2 outline-offset-[-1px] outline-gray-200"></div>
      </div>

      <!-- Campos AFP -->
      <div class="self-stretch inline-flex justify-start items-start gap-6">
        <!-- ¿Cuál es tu AFP? (disabled) -->
        <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
            <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">¿Cuál es tú AFP?</div>
          </div>
          <div class="self-stretch p-4 bg-gray-200 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
            <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">AFP Siembra</div>
          </div>
        </div>
        <!-- Saldo en cuenta -->
        <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
            <div class="justify-start"><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">¿Cuál es tu saldo en cuenta?</span><span class="text-red-600 text-base font-bold font-['Noto_Sans'] leading-5">*</span></div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
            <div class="flex-1 justify-start text-Bost-Grey-00 text-sm font-normal font-['Noto_Sans'] leading-5">Ingresa tu monto en pesos</div>
          </div>
          <div class="self-stretch px-2.5 inline-flex justify-end items-center gap-2">
            <div class="flex-1 flex justify-start items-center gap-2">
              <div class="flex-1 justify-start text-Bost-Blue-50 text-xs font-normal font-['Noto_Sans'] underline leading-4">¿No sabes cuál es tu saldo?</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pensión deseada + Aportes voluntarios -->
      <div class="self-stretch inline-flex justify-start items-start gap-6">
        <div class="w-96 inline-flex flex-col justify-start items-start gap-1">
          <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
            <div class="justify-start"><span class="text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">¿Cuál seria la pensión que deseas a tu edad de retiro?</span><span class="text-red-600 text-base font-bold font-['Noto_Sans'] leading-5">*</span></div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
            <div class="flex-1 justify-start text-Black text-sm font-normal font-['Noto_Sans'] leading-5">RD$80,000</div>
          </div>
        </div>
        <div class="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div class="self-stretch px-2.5 inline-flex justify-start items-center gap-1">
            <div class="justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-5">¿Realizas aportes voluntarios mensuales ?</div>
          </div>
          <div class="self-stretch p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
            <div class="flex-1 justify-start text-Bost-Grey-00 text-sm font-normal font-['Noto_Sans'] leading-5">Ingresa tu monto en pesos</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botones -->
    <div class="w-full max-w-[800px] py-4 inline-flex justify-between items-start">
      <div class="px-6 py-4 rounded-3xl flex justify-center items-center gap-2.5">
        <div class="text-center justify-end text-orange-400 text-base font-bold font-['SF_Pro'] leading-5">Dejar para después</div>
      </div>
      <div class="flex justify-start items-center gap-6">
        <div class="px-6 py-4 rounded-3xl outline outline-2 outline-offset-[-2px] outline-orange-400 flex justify-center items-center gap-2.5">
          <div class="text-center justify-end text-orange-400 text-base font-bold font-['SF_Pro'] leading-5">Volver</div>
        </div>
        <div class="px-6 py-4 bg-orange-400 rounded-3xl flex justify-center items-center gap-2.5">
          <div class="text-center justify-end text-white text-base font-bold font-['SF_Pro'] leading-5">Continuar</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="w-[1440px] h-24 bg-white inline-flex justify-center items-center gap-2.5">
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

**Componentes Ya Creados (reutilizar de Step1)**:
- `src/components/Header.jsx` - Header con gradiente y usuario
- `src/components/ProgressBar.jsx` - Barra de progreso (actualizar a currentStep={2})
- `src/components/Footer.jsx` - Footer legal
- `src/components/ChatBubble.jsx` - Chat flotante

**Props de Entrada (desde Step1)**:
```javascript
// El componente Step2 recibe estas props:
{
  data: {
    name: string,
    documentId: string,
    age: number,
    retirementAge: number,
    currentlyWorking: boolean,
    // Campos nuevos de Step2:
    monthlySalary: number,
    otherIncome: number,
    housingType: 'rent' | 'own',
    housingExpense: number,
    householdExpense: number,
    educationExpense: number,
    debtPayment: number,
    entertainment: number,
    emergencies: number,
    afpName: string,          // Siempre "AFP Siembra" (disabled)
    afpBalance: number,
    desiredPension: number,
    voluntaryContributions: number
  },
  onNext: (formData) => void,
  onBack: () => void
}
```

**Colores Adicionales (ya en Tailwind Config)**:
- `#E4E6EE` - Bordes (siembra-border)
- `#FBFBFB` - Backgrounds claros
- `#F9A8A8` o `rose-100` - Capacidad de ahorro cards
- `#4C4C4C` - Texto principal (siembra-grey)
- `#949494` - Texto secundario (siembra-grey-light)

---

## Problem Solving

**Problema:** Step2 requiere un formulario complejo con múltiples campos de entrada, cálculos dinámicos (resumen ingresos/gastos, capacidad de ahorro), y secciones expandibles/colapsables.

**Requerimientos:**
- Reutilizar Header, ProgressBar (50%), Footer, ChatBubble de Step1
- 2 campos de ingresos (salario mensual*, otros ingresos)
- Resumen de ingresos expandible con total calculado
- 7 campos de gastos (vivienda, hogar, educación, deuda, entretenimiento, imprevistos)
- Radio button para tipo de vivienda (alquilada/propia)
- Resumen de gastos expandible con total calculado
- 2 tarjetas: capacidad de ahorro y porcentaje (ingresos - gastos)
- 4 campos AFP (AFP name disabled, saldo*, pensión deseada*, aportes voluntarios)
- Validación de campos obligatorios (*)
- Responsive design (desktop fiel + mobile adaptado)

---

## User Story

```
Como usuario del simulador,
Quiero ingresar mis ingresos, gastos mensuales e información de AFP,
Para que el sistema calcule automáticamente mi capacidad de ahorro y pueda continuar con la simulación.
```

---

## Solution & Approach

**Enfoque elegido:** Formulario con estado local + cálculos automáticos + componentes reutilizables

**Por qué:**
- ✅ Reutilizar Header, ProgressBar, Footer, ChatBubble ahorra tiempo
- ✅ useState para manejo simple de formulario
- ✅ useEffect para recalcular totales automáticamente cuando cambien inputs
- ✅ Secciones expandibles con useState simple (toggle)
- ✅ Validación de campos requeridos antes de onNext

---

## Implementation Plan

### 1. Análisis del HTML Source

**Estructura identificada:**

```
<Container>
  <Header /> <!-- Reutilizar -->
  <MainContent>
    <ProgressBar currentStep={2} /> <!-- 50% -->

    <!-- Sección: Ingresos -->
    <Título>Información: Ingresos y gastos</Título>
    <Campos>
      - Salario mensual* (con focus/hover azul)
      - Otros ingresos
    </Campos>
    <ResumenIngresos expandible>
      - Salario mensual: RD$X
      - Otros ingresos: RD$X
      --------
      - Total: RD$X
    </ResumenIngresos>

    <!-- Sección: Gastos -->
    <Separador>Gastos Mensuales</Separador>
    <TipoVivienda radio />
    <CamposGastos grid-3-columns>
      - Vivienda, Hogar, Educación
      - Deuda (con nota), Entretenimiento, Imprevistos
    </CamposGastos>
    <ResumenGastos expandible>
      - Detalles de cada gasto
      --------
      - Total gastos: RD$X
      <Tarjetas>
        - Capacidad de ahorro: RD$X
        - Porcentaje de ahorro: X%
      </Tarjetas>
    </ResumenGastos>

    <!-- Sección: AFP -->
    <Separador>AFP</Separador>
    <CamposAFP>
      - ¿Cuál es tu AFP? (disabled: "AFP Siembra")
      - Saldo en cuenta* (con link "¿No sabes tu saldo?")
      - Pensión deseada*
      - Aportes voluntarios
    </CamposAFP>

    <Botones>
      - Dejar / Volver / Continuar
    </Botones>
  </MainContent>
  <Footer /> <!-- Reutilizar -->
  <ChatBubble /> <!-- Reutilizar -->
</Container>
```

**Nuevos colores/estilos identificados:**

```css
/* Estados de input con focus */
--input-focus-shadow: 0px 0px 7px 0px rgba(20,136,214,0.40)
--input-focus-border: #1488D6 (Bost-Blue-50)

/* Resúmenes */
--bg-summary: #FBFBFB (neutral-50)
--border-radius-summary: 16px (rounded-2xl)

/* Capacidad de ahorro cards */
--bg-savings: #FDE8E8 (rose-100)

/* Texto de labels */
--text-input-label: #949494 (Input-Label)
```

**Componentes nuevos a considerar:**

1. **CollapsibleSection** (opcional):
   - Props: `title`, `isExpanded`, `onToggle`, `children`
   - Reusable para "Resumen de ingresos" y "Resumen de gastos"

2. **InputField** (opcional):
   - Props: `label`, `value`, `onChange`, `required`, `disabled`, `placeholder`, `note`
   - Estandariza inputs de texto/número

---

### 2. Crear Componente Step2.jsx

**Archivo:** `src/pages/Step2.jsx`

**Ejemplo de estructura (código ilustrativo):**

```jsx
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'

export default function Step2({ data, onNext, onBack }) {
  // Estado del formulario
  const [formData, setFormData] = useState({
    monthlySalary: data.monthlySalary || 0,
    otherIncome: data.otherIncome || 0,
    housingType: data.housingType || 'rent',
    housingExpense: data.housingExpense || 0,
    householdExpense: data.householdExpense || 0,
    educationExpense: data.educationExpense || 0,
    debtPayment: data.debtPayment || 0,
    entertainment: data.entertainment || 0,
    emergencies: data.emergencies || 0,
    afpName: 'AFP Siembra', // Siempre fijo
    afpBalance: data.afpBalance || 0,
    desiredPension: data.desiredPension || 0,
    voluntaryContributions: data.voluntaryContributions || 0
  })

  // Estados para secciones expandibles
  const [incomeExpanded, setIncomeExpanded] = useState(true)
  const [expensesExpanded, setExpensesExpanded] = useState(true)

  // Cálculos automáticos
  const totalIncome = formData.monthlySalary + formData.otherIncome
  const totalExpenses =
    formData.housingExpense +
    formData.householdExpense +
    formData.educationExpense +
    formData.debtPayment +
    formData.entertainment +
    formData.emergencies

  const savingsCapacity = totalIncome - totalExpenses
  const savingsPercentage = totalIncome > 0
    ? Math.round((savingsCapacity / totalIncome) * 100)
    : 0

  // Handler para cambios de input
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar campos requeridos
    if (!formData.monthlySalary || !formData.afpBalance || !formData.desiredPension) {
      alert('Por favor completa todos los campos obligatorios (*)')
      return
    }

    onNext(formData)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header userName={data.name} userDocument={data.documentId} />

      <div className="flex-1 px-6 lg:px-24 py-10 lg:py-14 bg-white flex flex-col items-center gap-2.5">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress Bar */}
          <ProgressBar currentStep={2} />

          {/* Título */}
          <div className="self-stretch pt-8 pb-4 flex flex-col gap-2">
            <h1 className="text-[#4C4C4C] text-xl lg:text-2xl leading-6">
              <span className="font-black">Información:</span>
              <span className="font-normal"> Ingresos y gastos</span>
            </h1>
            <p className="text-[#4C4C4C] text-sm leading-4">
              Todos los campos marcados con (
              <span className="text-red-600 font-bold">*</span>
              ) son obligatorios
            </p>
          </div>

          {/* Campos de Ingresos */}
          <div className="self-stretch flex flex-col lg:flex-row gap-6">
            {/* Salario mensual* */}
            <div className="flex-1 flex flex-col gap-1">
              <label className="px-2.5 flex items-center gap-1">
                <span className="text-[#4C4C4C] text-base">¿Cuál es tu salario mensual?</span>
                <span className="text-red-600 font-bold">*</span>
                <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
              </label>
              <input
                type="number"
                value={formData.monthlySalary}
                onChange={(e) => handleChange('monthlySalary', e.target.value)}
                placeholder="RD$"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200
                  focus:outline-[#1488D6] focus:shadow-[0px_0px_7px_0px_rgba(20,136,214,0.40)]
                  text-sm text-[#333333]"
              />
            </div>

            {/* Otros ingresos */}
            <div className="w-full lg:w-96 flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C] text-base">
                ¿Tienes otros ingresos?
              </label>
              <input
                type="number"
                value={formData.otherIncome}
                onChange={(e) => handleChange('otherIncome', e.target.value)}
                placeholder="RD$0"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
            </div>
          </div>

          {/* Resumen de Ingresos (expandible) */}
          <div className="self-stretch p-8 bg-neutral-50 rounded-2xl flex flex-col gap-1">
            <div className="flex items-center justify-between cursor-pointer"
                 onClick={() => setIncomeExpanded(!incomeExpanded)}>
              <h2 className="text-black text-2xl font-bold">Resumen de ingresos</h2>
              <div className="flex items-center gap-2">
                <span className="text-[#949494]">{incomeExpanded ? '▼' : '▶'}</span>
                <span className="text-[#949494] text-base">
                  {incomeExpanded ? 'Mostrar menos detalles' : 'Mostrar más detalles'}
                </span>
              </div>
            </div>

            {incomeExpanded && (
              <>
                <div className="pt-4 pb-2 flex flex-col gap-4">
                  <div className="flex justify-between">
                    <span className="text-[#949494]">Salario mensual</span>
                    <span className="text-black font-bold">RD${formData.monthlySalary.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#949494]">Otros ingresos</span>
                    <span className="text-black font-bold">RD${formData.otherIncome.toLocaleString()}</span>
                  </div>
                </div>
                <div className="border-t border-black/10 my-2" />
                <div className="flex justify-between">
                  <span className="text-black">Resumen de ingresos totales</span>
                  <span className="text-zinc-800 text-xl font-bold">RD${totalIncome.toLocaleString()}</span>
                </div>
              </>
            )}
          </div>

          {/* Separador Gastos */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-10">
              <span className="text-[#949494] font-bold">Gastos Mensuales</span>
              <div className="flex-1 h-0 border-t-2 border-gray-200" />
            </div>
            <p className="text-black text-sm">
              Completa los campos con el valor aproximado que gastas al mes en cada categoría.
            </p>
          </div>

          {/* Tipo de Vivienda (radio) */}
          <div className="p-4 bg-neutral-50 rounded-lg flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            <span className="flex-1 text-black text-base">Tipo de Vivienda</span>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="housingType"
                  checked={formData.housingType === 'rent'}
                  onChange={() => setFormData(prev => ({ ...prev, housingType: 'rent' }))}
                  className="hidden"
                />
                <span className="text-[#FF7933]">{formData.housingType === 'rent' ? '✓' : '○'}</span>
                <span className="text-[#4C4C4C] text-sm">Alquilada</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="housingType"
                  checked={formData.housingType === 'own'}
                  onChange={() => setFormData(prev => ({ ...prev, housingType: 'own' }))}
                  className="hidden"
                />
                <span className="text-[#FF7933]">{formData.housingType === 'own' ? '✓' : '○'}</span>
                <span className="text-[#4C4C4C] text-sm">Propia</span>
              </label>
            </div>
          </div>

          {/* Campos de Gastos (3 columnas) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Vivienda */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 flex items-center gap-1">
                <span className="text-[#4C4C4C]">Vivienda</span>
                <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
              </label>
              <input
                type="number"
                value={formData.housingExpense}
                onChange={(e) => handleChange('housingExpense', e.target.value)}
                placeholder="RD$"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
            </div>

            {/* Gastos de hogar */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C]">Gastos de hogar</label>
              <input
                type="number"
                value={formData.householdExpense}
                onChange={(e) => handleChange('householdExpense', e.target.value)}
                placeholder="RD$"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
            </div>

            {/* Educación */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C]">Educación</label>
              <input
                type="number"
                value={formData.educationExpense}
                onChange={(e) => handleChange('educationExpense', e.target.value)}
                placeholder="RD$"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
            </div>
          </div>

          {/* Segunda fila de gastos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pago deuda (con nota) */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C]">Pago deuda</label>
              <input
                type="number"
                value={formData.debtPayment}
                onChange={(e) => handleChange('debtPayment', e.target.value)}
                placeholder="RD$"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
              <div className="px-2.5 flex items-start gap-2">
                <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
                <p className="text-[#949494] text-xs">
                  Incluya solo los pagos mensuales de deudas: tarjetas, préstamos u otros
                </p>
              </div>
            </div>

            {/* Entretenimiento */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C]">Entretenimiento</label>
              <input
                type="number"
                value={formData.entertainment}
                onChange={(e) => handleChange('entertainment', e.target.value)}
                placeholder="RD$"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
            </div>

            {/* Imprevistos */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C]">Imprevistos</label>
              <input
                type="number"
                value={formData.emergencies}
                onChange={(e) => handleChange('emergencies', e.target.value)}
                placeholder="RD$"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
            </div>
          </div>

          {/* Resumen de Gastos con Capacidad de Ahorro */}
          <div className="self-stretch p-4 bg-neutral-50 rounded-2xl flex flex-col gap-6">
            <div className="px-6 flex flex-col">
              <div className="flex items-center justify-between cursor-pointer"
                   onClick={() => setExpensesExpanded(!expensesExpanded)}>
                <h2 className="text-black text-2xl font-bold">Resumen de Gastos</h2>
                <div className="flex items-center gap-2">
                  <span className="text-[#949494]">{expensesExpanded ? '▼' : '▶'}</span>
                  <span className="text-[#949494] text-base">
                    {expensesExpanded ? 'Mostrar menos detalles' : 'Mostrar más detalles'}
                  </span>
                </div>
              </div>

              {expensesExpanded && (
                <>
                  <div className="pt-4 pb-2 flex flex-col gap-4">
                    <div className="flex justify-between">
                      <span className="text-[#949494]">Vivienda</span>
                      <span className="text-black font-bold">RD${formData.housingExpense.toLocaleString()}</span>
                    </div>
                    {/* ... más líneas de gastos */}
                  </div>
                  <div className="border-t border-black/10 my-2" />
                  <div className="flex justify-between">
                    <span className="text-black">Total gastos mensuales</span>
                    <span className="text-zinc-800 text-xl font-bold">RD${totalExpenses.toLocaleString()}</span>
                  </div>
                </>
              )}
            </div>

            {/* Tarjetas de Capacidad de Ahorro */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 p-4 bg-rose-100 rounded-lg flex flex-col gap-2">
                <span className="text-black text-xs">Capacidad de ahorro</span>
                <span className="text-black text-2xl font-extrabold">
                  RD${savingsCapacity.toLocaleString()}
                </span>
              </div>
              <div className="flex-1 p-4 bg-rose-100 rounded-lg flex flex-col gap-2">
                <span className="text-black text-xs">Porcentaje de ahorro</span>
                <span className="text-black text-2xl font-extrabold">
                  {savingsPercentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Separador AFP */}
          <div className="py-4 flex items-center gap-10">
            <span className="text-[#949494] font-bold">Administradora de Fondos de Pensiones (AFP)</span>
            <div className="flex-1 h-0 border-t-2 border-gray-200" />
          </div>

          {/* Campos AFP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ¿Cuál es tu AFP? (disabled) */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C]">¿Cuál es tú AFP?</label>
              <input
                type="text"
                value="AFP Siembra"
                disabled
                className="p-4 bg-gray-200 rounded-lg outline outline-1 outline-gray-200
                  text-sm text-black cursor-not-allowed"
              />
            </div>

            {/* Saldo en cuenta* */}
            <div className="flex flex-col gap-1">
              <label className="px-2.5 flex items-center gap-1">
                <span className="text-[#4C4C4C]">¿Cuál es tu saldo en cuenta?</span>
                <span className="text-red-600 font-bold">*</span>
                <span className="text-[#4C4C4C] opacity-60">ℹ️</span>
              </label>
              <input
                type="number"
                value={formData.afpBalance}
                onChange={(e) => handleChange('afpBalance', e.target.value)}
                placeholder="Ingresa tu monto en pesos"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
              <a href="#" className="px-2.5 text-[#1488D6] text-xs underline">
                ¿No sabes cuál es tu saldo?
              </a>
            </div>
          </div>

          {/* Pensión deseada + Aportes voluntarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="px-2.5 flex items-center gap-1">
                <span className="text-[#4C4C4C]">¿Cuál seria la pensión que deseas a tu edad de retiro?</span>
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="number"
                value={formData.desiredPension}
                onChange={(e) => handleChange('desiredPension', e.target.value)}
                placeholder="RD$"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="px-2.5 text-[#4C4C4C]">
                ¿Realizas aportes voluntarios mensuales ?
              </label>
              <input
                type="number"
                value={formData.voluntaryContributions}
                onChange={(e) => handleChange('voluntaryContributions', e.target.value)}
                placeholder="Ingresa tu monto en pesos"
                className="p-4 bg-white rounded-lg outline outline-1 outline-gray-200 text-sm"
              />
            </div>
          </div>

          {/* Botones */}
          <div className="py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
            <button
              type="button"
              className="px-6 py-4 text-orange-400 text-base font-bold rounded-3xl
                hover:bg-orange-50 transition-colors"
            >
              Dejar para después
            </button>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={onBack}
                className="px-6 py-4 border-2 border-orange-400 text-orange-400 text-base font-bold
                  rounded-3xl hover:bg-orange-50 transition-colors"
              >
                Volver
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-4 bg-orange-400 text-white text-base font-bold rounded-3xl
                  hover:bg-orange-500 transition-colors"
              >
                Continuar
              </button>
            </div>
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

### 3. Implementar Responsive Design

**Estrategia Mobile-First:**

#### Mobile (< 768px):
- Campos de ingresos: stack vertical (flex-col)
- Grid de gastos: 1 columna
- Resúmenes: comprimir padding
- Tarjetas de ahorro: stack vertical

#### Tablet (768px - 1023px):
- Campos de ingresos: puede ser 2 columnas
- Grid de gastos: 2 columnas

#### Desktop (>= 1024px):
- Diseño original del HTML
- Campos ingresos: flex-row
- Grid de gastos: 3 columnas
- Padding completo (px-24, py-14)

**Código responsive clave:**

```jsx
{/* Ingresos: mobile vertical, desktop horizontal */}
<div className="flex flex-col lg:flex-row gap-6">
  <div className="flex-1">...</div>
  <div className="w-full lg:w-96">...</div>
</div>

{/* Gastos: mobile 1 col, desktop 3 cols */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>

{/* Tarjetas ahorro: mobile vertical, desktop horizontal */}
<div className="flex flex-col lg:flex-row gap-4">
  <div className="flex-1">...</div>
  <div className="flex-1">...</div>
</div>
```

---

## Testing Strategy

### Visual Testing (Manual)

**Checklist Desktop:**

- [ ] **Progress Bar:**
  - [ ] Step 1 completado (sin círculo amarillo interior)
  - [ ] Step 2 actual (con badge 50%, círculo triple)
  - [ ] Steps 3-4 pendientes

- [ ] **Formulario Ingresos:**
  - [ ] Salario mensual con focus azul (#1488D6)
  - [ ] Otros ingresos sin focus especial
  - [ ] Resumen de ingresos expandible/colapsable
  - [ ] Total calculado correctamente

- [ ] **Formulario Gastos:**
  - [ ] Radio buttons tipo vivienda funcionales
  - [ ] Grid 3 columnas alineado
  - [ ] Nota en "Pago deuda" visible
  - [ ] Resumen de gastos expandible
  - [ ] Capacidad de ahorro calculada (ingresos - gastos)
  - [ ] Porcentaje de ahorro calculado ((capacidad/ingresos)*100)

- [ ] **Sección AFP:**
  - [ ] Campo AFP disabled con "AFP Siembra"
  - [ ] Link "¿No sabes tu saldo?" en azul subrayado
  - [ ] Todos los campos funcionan

- [ ] **Botones:**
  - [ ] "Dejar" sin borde, hover naranja claro
  - [ ] "Volver" outline naranja, hover naranja claro
  - [ ] "Continuar" filled naranja, hover naranja oscuro

**Checklist Mobile:**

- [ ] Progress bar visible o simplificado
- [ ] Campos stack verticalmente
- [ ] Grid de gastos 1 columna
- [ ] Tarjetas ahorro stack verticalmente
- [ ] Botones stack verticalmente

### Functional Testing

```bash
npm run test

# Verificar:
# - Cálculo de totalIncome correcto
# - Cálculo de totalExpenses correcto
# - Cálculo de savingsCapacity correcto (income - expenses)
# - Cálculo de savingsPercentage correcto
# - Validación de campos requeridos
# - onNext envía datos correctos
# - onBack funciona
```

### Edge Cases

#### Gastos Mayores que Ingresos

**Problema:** Usuario ingresa gastos > ingresos
**Resultado:** Capacidad de ahorro negativa
**Solución:** Permitir negativo, cambiar color de tarjeta a rojo si < 0

```jsx
<div className={`p-4 rounded-lg ${savingsCapacity < 0 ? 'bg-red-100' : 'bg-rose-100'}`}>
  <span className="text-black text-2xl font-extrabold">
    RD${Math.abs(savingsCapacity).toLocaleString()}
  </span>
  {savingsCapacity < 0 && <span className="text-red-600 text-xs">(Déficit)</span>}
</div>
```

#### Ingresos = 0

**Problema:** Usuario deja salario en 0
**Resultado:** Division by zero en porcentaje
**Solución:** Ya implementado en ejemplo (ternario `totalIncome > 0 ? ... : 0`)

#### Valores Muy Grandes

**Problema:** Usuario ingresa números > 1,000,000,000
**Resultado:** UI se rompe por overflow
**Solución:** Validar max value en inputs

```jsx
<input
  type="number"
  max="999999999"
  ...
/>
```

#### Secciones Expandibles en Mobile

**Problema:** Secciones expandidas ocupan mucho espacio
**Solución:** Por defecto colapsadas en mobile

```jsx
const [incomeExpanded, setIncomeExpanded] = useState(window.innerWidth >= 1024)
const [expensesExpanded, setExpensesExpanded] = useState(window.innerWidth >= 1024)
```

---

## Acceptance Criteria

**Visual Desktop:**
- ✅ Progress bar al 50% con Step 1 completado, Step 2 actual
- ✅ Formulario de ingresos con 2 campos alineados horizontalmente
- ✅ Resumen de ingresos expandible con total calculado
- ✅ Separador "Gastos Mensuales" con línea gris
- ✅ Radio buttons tipo vivienda custom
- ✅ Grid 3x2 de campos de gastos
- ✅ Nota en campo "Pago deuda"
- ✅ Resumen de gastos expandible con total calculado
- ✅ 2 tarjetas de capacidad de ahorro lado a lado
- ✅ Separador "AFP" con línea gris
- ✅ Campo AFP disabled
- ✅ Link "¿No sabes tu saldo?" funcional
- ✅ 3 botones correctamente estilizados

**Visual Mobile:**
- ✅ Todos los campos stack verticalmente
- ✅ Grid de gastos 1 columna
- ✅ Tarjetas de ahorro stack verticalmente
- ✅ Secciones expandibles funcionan

**Funcional:**
- ✅ Total ingresos calcula automáticamente (salario + otros)
- ✅ Total gastos calcula automáticamente (suma de 6 campos)
- ✅ Capacidad de ahorro = ingresos - gastos
- ✅ Porcentaje de ahorro = (capacidad / ingresos) * 100
- ✅ Secciones expandibles toggle correctamente
- ✅ Radio buttons tipo vivienda cambian estado
- ✅ Validación de campos requeridos (*) funciona
- ✅ onNext envía todos los datos correctos
- ✅ onBack navega atrás sin perder datos

**Calidad:**
- ✅ No hay errores en consola
- ✅ Tests pasan
- ✅ Build sin warnings
- ✅ Reutiliza Header, ProgressBar, Footer, ChatBubble de Step1

---

## Validation Commands

```bash
# 1. Verificar Step2.jsx creado
ls src/pages/Step2.jsx

# 2. Dev server
npm run dev
# Navegar: Login → Step1 → Step2
# Verificar diseño desktop y mobile

# 3. Tests
npm run test

# 4. Build
npm run build

# 5. Verificar cálculos
# Ingresa valores conocidos:
# - Salario: 100,000
# - Otros: 0
# - Total ingresos: 100,000 ✓
# - Gastos: 50k + 20k + 0 + 20k + 0 + 0 = 90,000 ✓
# - Capacidad ahorro: 10,000 ✓
# - Porcentaje: 10% ✓
```

---

## Time Estimate

**Total: 3-4 horas**

- Estructura de formulario con estado: 30 min
- Campos de ingresos + resumen expandible: 30 min
- Campos de gastos (7 campos + radio + nota): 45 min
- Resumen de gastos + tarjetas de ahorro: 30 min
- Campos AFP (4 campos + link): 20 min
- Cálculos automáticos (useEffect): 15 min
- Validación de campos requeridos: 15 min
- Responsive design: 30 min
- Testing visual + ajustes: 20 min
- Testing funcional + edge cases: 15 min

---

## Next Steps After Completion

**Fase 2 continuación:**
- Reutilizar componentes en Step3.jsx (75% progress)
- Reutilizar componentes en Step4.jsx (100% progress)
- Implementar Step5.jsx (modal)
- Implementar Result.jsx

**Checkpoint Fase 2 Step2:**
- ✅ Step2 visualmente idéntico al HTML
- ✅ Cálculos automáticos funcionan
- ✅ Secciones expandibles funcionan
- ✅ Responsive funcional
- ✅ Validación de campos requeridos
- ✅ Componentes de Step1 reutilizados exitosamente

---

## Notes

- **Importante:** HTML proporcionado usa clases Tailwind directamente (facilita implementación)
- **Importante:** Step 1 debe estar marcado como "Complete" (sin círculo amarillo interior)
- **Importante:** Progress bar línea naranja ahora va hasta ~240px (paso 2)
- **Importante:** Input salario mensual tiene focus especial (shadow azul + border azul)
- **Importante:** Campo AFP siempre disabled con valor "AFP Siembra"
- **Importante:** Capacidad de ahorro puede ser negativa (mostrar en rojo si < 0)
- **Importante:** Secciones expandibles: icono chevron + texto "Mostrar más/menos detalles"
- **Importante:** Grid de gastos: 3 columnas en desktop, 1 en mobile
- **Importante:** Tarjetas de ahorro: bg-rose-100, font SF Pro Display extrabold
- **Importante:** Nota en "Pago deuda": icon + texto gris pequeño
- **Importante:** Link "¿No sabes tu saldo?": color azul #1488D6 con underline
- **Importante:** Validar campos requeridos antes de onNext: monthlySalary, afpBalance, desiredPension

---

**Regla de oro Fase 2 Step2:** Reutilizar componentes + Cálculos automáticos + Validación correcta + Responsive mobile-first.
