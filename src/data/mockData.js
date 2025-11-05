// Default user data structure - Legacy export (for backward compatibility)
export const defaultUserData = {
  // Login
  name: '',
  documentId: '',
  birthDate: '',
  email: '',
  age: null,

  // Will be extended for other steps
}

/**
 * Valores por defecto del usuario
 * Se usa como initialValue en useLocalStorage
 */
export function getDefaultUserData() {
  return {
    // Login (opcional)
    email: '',
    hasAccount: false,

    // Step1: Información Personal y Laboral
    name: '',
    documentId: '',
    birthDate: '',
    age: null,
    retirementAge: 65,
    civilStatus: '',
    dependents: 0,
    profession: '',
    employmentYears: 0,
    currentlyWorking: true,

    // Step2: Ingresos y Gastos
    monthlySalary: null,
    otherIncome: 0,
    housingType: 'rent',
    housingExpense: 0,
    householdExpense: 0,
    educationExpense: 0,
    debtPayment: 0,
    entertainment: 0,
    emergencies: 0,
    afpName: 'AFP Siembra',
    afpBalance: 0,
    desiredPension: 80000,
    voluntaryContributions: 0,

    // Step3: Proyección Base (calculados)
    projectedPension: null,
    score: null,
    difference: null,
    totalSavingsAtRetirement: null,

    // Step4: Simulador Avanzado
    advancedParams: {
      advancedRetirementAge: 65,
      advancedVoluntaryContribution: 0,
      annualSalaryIncrease: 5,
      annualExtraordinaryContribution: 0
    },
    advancedPensionData: null,

    // Step5: Foto IA (opcional)
    userPhoto: null,
    hasAIPhoto: false,

    // Meta
    completedSteps: [],
    lastUpdated: new Date().toISOString()
  }
}

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

// Helper: Format currency to CLP
export function formatCurrency(value) {
  if (!value && value !== 0) return '$0'
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}

// Calcular pensión base proyectada
export function calculateBasePension(userData) {
  const {
    age,
    retirementAge,
    monthlySalary,
    afpBalance,
    desiredPension,
    voluntaryContributions = 0
  } = userData

  // Validar que no esté en o pasada la edad de retiro
  const yearsToRetirement = retirementAge - age
  if (yearsToRetirement <= 0) {
    return {
      projectedPension: afpBalance * 0.04 / 12,
      difference: Math.max(0, desiredPension - (afpBalance * 0.04 / 12)),
      score: 5,
      message: '¡Atención!',
      description: 'Ya alcanzaste tu edad de retiro. Este es tu saldo actual mensualizado.',
      totalSavingsAtRetirement: afpBalance
    }
  }

  const monthsToRetirement = yearsToRetirement * 12

  // Aporte obligatorio AFP (10.29% en DO)
  const monthlyContribution = monthlySalary * 0.1029
  const totalContributions = (monthlyContribution + voluntaryContributions) * monthsToRetirement

  // Saldo total a invertir
  const totalToInvest = afpBalance + totalContributions

  // Rentabilidad promedio anual (5% conservador)
  const annualReturn = 0.05
  const futureValue = totalToInvest * Math.pow(1 + annualReturn, yearsToRetirement)

  // Pensión mensual estimada (4% del saldo final, estándar de retiro)
  const projectedPension = Math.round(futureValue * 0.04 / 12)

  // Calcular diferencia a cubrir
  const difference = Math.max(0, desiredPension - projectedPension)

  // Calcular score (0-10) basado en % de diferencia
  const gapPercentage = desiredPension > 0 ? (difference / desiredPension) * 100 : 0

  let score
  let message
  let description

  if (gapPercentage <= 10) {
    score = 9
    message = '¡Excelente!'
    description = 'Tu proyección está muy cerca de tu pensión deseada. ¡Vas en la dirección correcta!'
  } else if (gapPercentage <= 30) {
    score = 6
    message = '¡Bien!'
    description = 'Tu proyección está en buen camino, pero hay margen de mejora. Considera aumentar tus ahorros.'
  } else {
    score = 3
    message = '¡Atención!'
    description = 'Existe una diferencia significativa entre tu pensión deseada y tu pensión estimada. Necesitas optimizar tu estrategia.'
  }

  // Asegurar que score esté entre 0-10
  const clampedScore = Math.max(0, Math.min(10, score))

  return {
    projectedPension: Math.max(0, projectedPension),
    difference,
    score: clampedScore,
    message,
    description,
    totalSavingsAtRetirement: Math.round(futureValue)
  }
}

// Generar datos para gráfico de ahorros
export function generateSavingsChart(userData) {
  const { age, retirementAge, afpBalance, monthlySalary, voluntaryContributions = 0 } = userData

  const data = []

  // Aporte mensual total
  const monthlyContribution = monthlySalary * 0.1029 + voluntaryContributions
  const annualReturn = 0.05

  let currentSavings = afpBalance

  for (let currentAge = age; currentAge <= retirementAge; currentAge++) {
    data.push({
      age: currentAge,
      savings: Math.round(currentSavings)
    })

    // Agregar contribuciones del año + aplicar rentabilidad
    currentSavings += monthlyContribution * 12
    currentSavings *= (1 + annualReturn)
  }

  return data
}

// Calcular pensión avanzada con parámetros ajustados
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
    annualExtraordinaryContribution = 0
  } = advancedParams

  const yearsToRetirement = advancedRetirementAge - age

  // Si ya pasó la edad de retiro
  if (yearsToRetirement <= 0) {
    const basicPension = afpBalance * 0.04 / 12
    return {
      projectedPension: Math.round(basicPension),
      difference: Math.max(0, desiredPension - basicPension),
      differenceIsPositive: basicPension >= desiredPension,
      score: 5,
      message: '¡Atención!',
      description: 'Ya alcanzaste tu edad de retiro.',
      totalSavingsAtRetirement: afpBalance,
      differenceVsBase: 0
    }
  }

  let currentSalary = monthlySalary
  let totalSavings = afpBalance
  const annualReturn = 0.05

  // Simular año por año
  for (let year = 0; year < yearsToRetirement; year++) {
    // Aporte obligatorio + voluntario
    const monthlyContribution = (currentSalary * 0.1029) + advancedVoluntaryContribution
    const annualContributions = monthlyContribution * 12

    // Aporte extraordinario
    const yearContributions = annualContributions + annualExtraordinaryContribution

    // Aplicar rentabilidad
    totalSavings = (totalSavings + yearContributions) * (1 + annualReturn)

    // Incremento salarial para próximo año
    currentSalary *= (1 + annualSalaryIncrease / 100)
  }

  // Pensión mensual (4% del saldo final)
  const projectedPension = Math.round(totalSavings * 0.04 / 12)

  // Calcular diferencia vs deseada
  const difference = projectedPension - desiredPension
  const differenceIsPositive = difference >= 0

  let score, message, description

  if (differenceIsPositive) {
    // Proyectada >= Deseada
    score = 9
    message = '¡Felicidades!'
    description = 'Con estos ajustes, tendrás el control para volver tu Proyección Avanzada una realidad para tu retiro.'
  } else {
    const gapPercentage = Math.abs(difference / desiredPension) * 100

    if (gapPercentage <= 10) {
      score = 8
      message = '¡Casi perfecto!'
      description = 'Estás muy cerca de tu pensión deseada con estos ajustes.'
    } else {
      score = 6
      message = '¡Buen avance!'
      description = 'Has mejorado significativamente tu proyección.'
    }
  }

  return {
    projectedPension,
    difference: Math.abs(difference),
    differenceIsPositive,
    score: Math.max(0, Math.min(10, score)),
    message,
    description,
    totalSavingsAtRetirement: Math.round(totalSavings),
    differenceVsBase: 0  // Se calculará después
  }
}

// Generar datos para gráfico comparativo (2 áreas: base + avanzada)
export function generateComparisonChart(userData, advancedParams) {
  const { age, retirementAge } = userData
  const { advancedRetirementAge } = advancedParams

  const maxAge = Math.max(retirementAge, advancedRetirementAge)
  const data = []

  // Generar proyección base
  const baseChart = generateSavingsChart(userData)

  // Generar proyección avanzada
  let currentSalary = userData.monthlySalary
  let advancedSavings = userData.afpBalance
  const annualReturn = 0.05

  const advancedChartData = []
  for (let currentAge = age; currentAge <= advancedRetirementAge; currentAge++) {
    advancedChartData.push({
      age: currentAge,
      savings: Math.round(advancedSavings)
    })

    // Calcular contribuciones para próximo año
    if (currentAge < advancedRetirementAge) {
      const monthlyContribution = (currentSalary * 0.1029) + (advancedParams.advancedVoluntaryContribution || 0)
      const annualContributions = monthlyContribution * 12
      const yearContributions = annualContributions + (advancedParams.annualExtraordinaryContribution || 0)

      advancedSavings = (advancedSavings + yearContributions) * (1 + annualReturn)
      currentSalary *= (1 + (advancedParams.annualSalaryIncrease || 0) / 100)
    }
  }

  // Combinar en un solo dataset
  for (let currentAge = age; currentAge <= maxAge; currentAge++) {
    const basePoint = baseChart.find(p => p.age === currentAge)
    const advancedPoint = advancedChartData.find(p => p.age === currentAge)

    data.push({
      age: currentAge,
      baseSavings: basePoint ? basePoint.savings : 0,
      advancedSavings: advancedPoint ? advancedPoint.savings : 0
    })
  }

  return data
}

// Generar plan de acción personalizado para Step6
export function generateActionPlan(userData, advancedParams = {}) {
  const voluntaryAmount = advancedParams.advancedVoluntaryContribution || 0

  const plan = {
    voluntarySavings: {
      expanded: true,
      items: [
        {
          description: `Destinar ${voluntaryAmount > 0 ? `RD$ ${voluntaryAmount.toLocaleString()}` : 'una cantidad'} mensuales a un fondo de ahorro voluntario, con el objetivo de acumular el capital necesario para complementar la pensión obligatoria.`
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
