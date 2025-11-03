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
