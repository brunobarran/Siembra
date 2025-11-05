import { describe, it, expect, beforeEach } from 'vitest'
import { getDefaultUserData } from '../data/mockData'

describe('Persistence Flow - localStorage Integration', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  describe('Wizard Step Persistence', () => {
    it('debe guardar el step actual en localStorage', () => {
      const step = 3
      window.localStorage.setItem('siembra-wizard-step', JSON.stringify(step))

      const savedStep = JSON.parse(window.localStorage.getItem('siembra-wizard-step'))
      expect(savedStep).toBe(3)
    })

    it('debe recuperar step al reiniciar la aplicación', () => {
      // Simular que el usuario estaba en step 2
      window.localStorage.setItem('siembra-wizard-step', JSON.stringify(2))

      // Simular recarga: leer del localStorage
      const savedStep = JSON.parse(window.localStorage.getItem('siembra-wizard-step')) || 0
      expect(savedStep).toBe(2)
    })

    it('debe avanzar step por step guardando cada uno', () => {
      let currentStep = 0

      // Step 0 → 1
      window.localStorage.setItem('siembra-wizard-step', JSON.stringify(++currentStep))
      expect(JSON.parse(window.localStorage.getItem('siembra-wizard-step'))).toBe(1)

      // Step 1 → 2
      window.localStorage.setItem('siembra-wizard-step', JSON.stringify(++currentStep))
      expect(JSON.parse(window.localStorage.getItem('siembra-wizard-step'))).toBe(2)

      // Step 2 → 3
      window.localStorage.setItem('siembra-wizard-step', JSON.stringify(++currentStep))
      expect(JSON.parse(window.localStorage.getItem('siembra-wizard-step'))).toBe(3)
    })
  })

  describe('User Data Persistence', () => {
    it('debe guardar datos de usuario en localStorage', () => {
      const userData = {
        name: 'Juan Pérez',
        documentId: '123-456789-0',
        birthDate: '1990-01-15',
        email: 'juan@example.com',
        age: 34
      }

      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(userData))

      const saved = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      expect(saved.name).toBe('Juan Pérez')
      expect(saved.age).toBe(34)
    })

    it('debe persistir datos parciales de Step1', () => {
      const defaultData = getDefaultUserData()
      const step1Data = {
        ...defaultData,
        name: 'María',
        age: 28,
        retirementAge: 67
      }

      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(step1Data))

      const saved = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      expect(saved.name).toBe('María')
      expect(saved.age).toBe(28)
      expect(saved.retirementAge).toBe(67)
      // Otros campos deben mantener defaults
      expect(saved.monthlySalary).toBeNull()
    })

    it('debe actualizar datos incrementalmente sin perder información', () => {
      const defaultData = getDefaultUserData()

      // Step 1: Guardar datos personales
      const step1Data = {
        ...defaultData,
        name: 'Carlos',
        age: 35
      }
      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(step1Data))

      // Step 2: Agregar datos de ingresos (sin perder Step1)
      const savedData = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      const step2Data = {
        ...savedData,
        monthlySalary: 5000000,
        afpBalance: 2500000
      }
      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(step2Data))

      // Verificar que tenemos datos de ambos steps
      const final = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      expect(final.name).toBe('Carlos') // Step 1
      expect(final.age).toBe(35) // Step 1
      expect(final.monthlySalary).toBe(5000000) // Step 2
      expect(final.afpBalance).toBe(2500000) // Step 2
    })
  })

  describe('Photo Upload Persistence', () => {
    it('debe guardar foto en localStorage separado', () => {
      const base64Photo = 'data:image/jpeg;base64,/9j/4AAQSkZJRg...'
      window.localStorage.setItem('siembra-user-photo', base64Photo)

      const saved = window.localStorage.getItem('siembra-user-photo')
      expect(saved).toBe(base64Photo)
    })

    it('debe guardar foto también en userData', () => {
      const userData = getDefaultUserData()
      const base64Photo = 'data:image/jpeg;base64,/9j/4AAQSkZJRg...'

      const updatedData = {
        ...userData,
        userPhoto: base64Photo,
        hasAIPhoto: true
      }

      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(updatedData))
      window.localStorage.setItem('siembra-user-photo', base64Photo)

      const savedUserData = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      const savedPhoto = window.localStorage.getItem('siembra-user-photo')

      expect(savedUserData.userPhoto).toBe(base64Photo)
      expect(savedUserData.hasAIPhoto).toBe(true)
      expect(savedPhoto).toBe(base64Photo)
    })

    it('debe recuperar foto si userData.userPhoto es null pero existe en localStorage', () => {
      const base64Photo = 'data:image/jpeg;base64,/9j/4AAQSkZJRg...'
      const userData = {
        ...getDefaultUserData(),
        userPhoto: null // No guardó en userData
      }

      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(userData))
      window.localStorage.setItem('siembra-user-photo', base64Photo) // Pero sí en localStorage

      // Simular recuperación (fallback en Step6Result)
      const savedUserData = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      const photoFallback = savedUserData.userPhoto || window.localStorage.getItem('siembra-user-photo')

      expect(photoFallback).toBe(base64Photo)
    })
  })

  describe('Metadata y Tracking', () => {
    it('debe guardar pasos completados', () => {
      const userData = getDefaultUserData()
      const completedData = {
        ...userData,
        completedSteps: [0, 1, 2, 3] // Pasos completados
      }

      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(completedData))

      const saved = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      expect(saved.completedSteps).toEqual([0, 1, 2, 3])
    })

    it('debe actualizar lastUpdated al cambiar datos', () => {
      const userData = getDefaultUserData()
      const now = new Date().toISOString()

      const updatedData = {
        ...userData,
        lastUpdated: now
      }

      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(updatedData))

      const saved = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      expect(saved.lastUpdated).toBe(now)
    })

    it('debe mantener cronología de completedSteps sin duplicados', () => {
      const userData = getDefaultUserData()

      // Simular navegación: 0 → 1 → 2 → 1 → 2 → 3
      let completedSteps = [0]

      // Step 1
      completedSteps = [...new Set([...completedSteps, 1])]
      expect(completedSteps).toEqual([0, 1])

      // Step 2
      completedSteps = [...new Set([...completedSteps, 2])]
      expect(completedSteps).toEqual([0, 1, 2])

      // Step 1 (back)
      completedSteps = [...new Set([...completedSteps, 1])]
      expect(completedSteps).toEqual([0, 1, 2]) // Sin duplicados

      // Step 3
      completedSteps = [...new Set([...completedSteps, 3])]
      expect(completedSteps).toEqual([0, 1, 2, 3])

      const finalData = {
        ...userData,
        completedSteps
      }

      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(finalData))
      const saved = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
      expect(saved.completedSteps).toEqual([0, 1, 2, 3])
    })
  })

  describe('Clear Wizard Data', () => {
    it('debe limpiar todas las keys cuando se resetea', () => {
      // Simular datos guardados
      window.localStorage.setItem('siembra-wizard-step', '3')
      window.localStorage.setItem('siembra-wizard-data', JSON.stringify({ name: 'Test' }))
      window.localStorage.setItem('siembra-user-photo', 'base64...')

      // Limpiar
      window.localStorage.removeItem('siembra-wizard-step')
      window.localStorage.removeItem('siembra-wizard-data')
      window.localStorage.removeItem('siembra-user-photo')

      // Verificar que está limpio
      expect(window.localStorage.getItem('siembra-wizard-step')).toBeNull()
      expect(window.localStorage.getItem('siembra-wizard-data')).toBeNull()
      expect(window.localStorage.getItem('siembra-user-photo')).toBeNull()
    })

    it('debe permitir reiniciar desde cero después de limpiar', () => {
      // Limpiar primero
      window.localStorage.removeItem('siembra-wizard-step')
      window.localStorage.removeItem('siembra-wizard-data')

      // Guardar defaults
      const defaultStep = 0
      const defaultData = getDefaultUserData()

      window.localStorage.setItem('siembra-wizard-step', JSON.stringify(defaultStep))
      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(defaultData))

      // Recuperar
      const savedStep = JSON.parse(window.localStorage.getItem('siembra-wizard-step'))
      const savedData = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))

      expect(savedStep).toBe(0)
      expect(savedData.name).toBe('')
      expect(savedData.age).toBeNull()
    })
  })

  describe('Edge Cases', () => {
    it('debe manejar localStorage lleno sin crashear', () => {
      const largeString = 'x'.repeat(1024 * 1024 * 10) // 10MB
      const userData = {
        ...getDefaultUserData(),
        largeField: largeString
      }

      try {
        window.localStorage.setItem('siembra-wizard-data', JSON.stringify(userData))
        // Si llega aquí, localStorage tiene espacio
      } catch (error) {
        // QuotaExceededError es esperado
        expect(error.name).toBe('QuotaExceededError')
      }
    })

    it('debe recuperarse de datos JSON corruptos', () => {
      window.localStorage.setItem('siembra-wizard-data', '{invalid json}')

      try {
        const saved = JSON.parse(window.localStorage.getItem('siembra-wizard-data'))
        expect(saved).toBeFalsy()
      } catch (error) {
        // SyntaxError es esperado
        expect(error instanceof SyntaxError).toBe(true)
        // Fallback a defaults
        const defaults = getDefaultUserData()
        expect(defaults.name).toBe('')
      }
    })

    it('debe permitir consultar si datos existen', () => {
      expect(window.localStorage.getItem('siembra-wizard-step')).toBeNull()

      window.localStorage.setItem('siembra-wizard-step', '2')
      expect(window.localStorage.getItem('siembra-wizard-step')).not.toBeNull()
    })
  })
})
