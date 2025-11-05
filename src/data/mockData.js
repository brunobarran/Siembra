// Default user data structure
export const defaultUserData = {
  // Login
  name: '',
  documentId: '',
  birthDate: '',
  email: '',
  age: null,

  // Will be extended for other steps
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
