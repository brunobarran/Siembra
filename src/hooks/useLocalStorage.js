import { useState, useEffect } from 'react'

/**
 * Custom hook para sincronizar estado con localStorage
 * @param {string} key - Clave en localStorage
 * @param {any} initialValue - Valor inicial si no existe en localStorage
 * @returns {[any, Function]} - [value, setValue] como useState
 */
export function useLocalStorage(key, initialValue) {
  // Estado inicial: intenta leer de localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Función para actualizar estado y localStorage
  const setValue = (value) => {
    try {
      // Permite pasar función como en useState
      const valueToStore = value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      // Guardar en localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

/**
 * Función helper para eliminar una clave de localStorage
 * @param {string} key - Clave a eliminar
 */
export function removeLocalStorage(key) {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error)
  }
}

/**
 * Función helper para limpiar todo el localStorage del wizard
 */
export function clearWizardData() {
  try {
    window.localStorage.removeItem('siembra-wizard-step')
    window.localStorage.removeItem('siembra-wizard-data')
    window.localStorage.removeItem('siembra-user-photo')
    console.log('Wizard data cleared from localStorage')
  } catch (error) {
    console.error('Error clearing wizard data:', error)
  }
}
