import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage, clearWizardData, removeLocalStorage } from '../useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear()
    vi.clearAllMocks()
  })

  describe('initialization', () => {
    it('debe usar initialValue si localStorage está vacío', () => {
      const { result } = renderHook(() => useLocalStorage('test-key', 'default'))
      expect(result.current[0]).toBe('default')
    })

    it('debe recuperar valor existente de localStorage', () => {
      window.localStorage.setItem('test-key', JSON.stringify('stored'))
      const { result } = renderHook(() => useLocalStorage('test-key', 'default'))
      expect(result.current[0]).toBe('stored')
    })

    it('debe manejar objetos complejos', () => {
      const testData = { name: 'Test', value: 42 }
      window.localStorage.setItem('complex-key', JSON.stringify(testData))
      const { result } = renderHook(() => useLocalStorage('complex-key', {}))
      expect(result.current[0]).toEqual(testData)
    })

    it('debe manejar arrays', () => {
      const testArray = [1, 2, 3]
      window.localStorage.setItem('array-key', JSON.stringify(testArray))
      const { result } = renderHook(() => useLocalStorage('array-key', []))
      expect(result.current[0]).toEqual(testArray)
    })
  })

  describe('actualización de valores', () => {
    it('debe actualizar estado cuando cambia el valor', () => {
      const { result } = renderHook(() => useLocalStorage('test-key', 0))

      act(() => {
        result.current[1](42)
      })

      expect(result.current[0]).toBe(42)
    })

    it('debe actualizar localStorage cuando cambia el valor', () => {
      const { result } = renderHook(() => useLocalStorage('test-key', 0))

      act(() => {
        result.current[1](42)
      })

      expect(window.localStorage.getItem('test-key')).toBe('42')
    })

    it('debe soportar función actualizadora (como useState)', () => {
      const { result } = renderHook(() => useLocalStorage('counter', 0))

      act(() => {
        result.current[1](prev => prev + 1)
      })

      expect(result.current[0]).toBe(1)
      expect(window.localStorage.getItem('counter')).toBe('1')
    })

    it('debe soportar múltiples actualizaciones secuenciales', () => {
      const { result } = renderHook(() => useLocalStorage('test-key', 0))

      act(() => {
        result.current[1](1)
      })
      expect(result.current[0]).toBe(1)

      act(() => {
        result.current[1](prev => prev * 2)
      })
      expect(result.current[0]).toBe(2)

      act(() => {
        result.current[1](prev => prev + 3)
      })
      expect(result.current[0]).toBe(5)
    })
  })

  describe('manejo de errores', () => {
    it('debe manejar datos corruptos en localStorage con fallback a initialValue', () => {
      window.localStorage.setItem('corrupt-key', '{invalid json}')
      const { result } = renderHook(() => useLocalStorage('corrupt-key', 'default'))
      expect(result.current[0]).toBe('default')
    })

    it('debe manejar QuotaExceededError gracefully', () => {
      const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('QuotaExceededError')
      })

      const { result } = renderHook(() => useLocalStorage('test-key', 'value'))

      // No debe lanzar error
      expect(() => {
        act(() => {
          result.current[1]('new value')
        })
      }).not.toThrow()

      spy.mockRestore()
    })

    it('debe loguear errores en consola sin crashear', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      window.localStorage.setItem('test-key', '{invalid}')

      renderHook(() => useLocalStorage('test-key', 'default'))

      expect(consoleSpy).toHaveBeenCalled()
      consoleSpy.mockRestore()
    })
  })

  describe('integración con wizard data', () => {
    it('debe persistir número de paso del wizard', () => {
      const { result } = renderHook(() => useLocalStorage('siembra-wizard-step', 0))

      act(() => {
        result.current[1](1)
      })

      // Nueva instancia del hook debe recuperar el valor
      const { result: result2 } = renderHook(() => useLocalStorage('siembra-wizard-step', 0))
      expect(result2.current[0]).toBe(1)
    })

    it('debe persistir datos de usuario del wizard', () => {
      const userData = {
        name: 'Juan',
        age: 30,
        email: 'juan@example.com'
      }

      const { result } = renderHook(() => useLocalStorage('siembra-wizard-data', {}))

      act(() => {
        result.current[1](userData)
      })

      const { result: result2 } = renderHook(() => useLocalStorage('siembra-wizard-data', {}))
      expect(result2.current[0]).toEqual(userData)
    })

    it('debe permitir actualizar parcialmente datos del wizard', () => {
      const initialData = {
        name: 'Juan',
        age: 30,
        email: 'juan@example.com'
      }

      window.localStorage.setItem('siembra-wizard-data', JSON.stringify(initialData))
      const { result } = renderHook(() => useLocalStorage('siembra-wizard-data', {}))

      act(() => {
        result.current[1](prev => ({
          ...prev,
          age: 31
        }))
      })

      expect(result.current[0]).toEqual({
        name: 'Juan',
        age: 31,
        email: 'juan@example.com'
      })
    })
  })
})

describe('removeLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('debe eliminar una clave de localStorage', () => {
    window.localStorage.setItem('test-key', 'value')
    expect(window.localStorage.getItem('test-key')).toBe('value')

    removeLocalStorage('test-key')
    expect(window.localStorage.getItem('test-key')).toBeNull()
  })

  it('debe manejar claves inexistentes sin error', () => {
    expect(() => {
      removeLocalStorage('nonexistent-key')
    }).not.toThrow()
  })
})

describe('clearWizardData', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('debe eliminar todas las keys del wizard', () => {
    window.localStorage.setItem('siembra-wizard-step', '3')
    window.localStorage.setItem('siembra-wizard-data', JSON.stringify({ name: 'Test' }))
    window.localStorage.setItem('siembra-user-photo', 'base64...')

    expect(window.localStorage.getItem('siembra-wizard-step')).not.toBeNull()
    expect(window.localStorage.getItem('siembra-wizard-data')).not.toBeNull()
    expect(window.localStorage.getItem('siembra-user-photo')).not.toBeNull()

    clearWizardData()

    expect(window.localStorage.getItem('siembra-wizard-step')).toBeNull()
    expect(window.localStorage.getItem('siembra-wizard-data')).toBeNull()
    expect(window.localStorage.getItem('siembra-user-photo')).toBeNull()
  })

  it('debe loguear mensaje de éxito', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    clearWizardData()

    expect(consoleSpy).toHaveBeenCalledWith('Wizard data cleared from localStorage')
    consoleSpy.mockRestore()
  })

  it('debe manejar error si alguna key no puede ser removida', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // Mock removeItem para lanzar error
    const spy = vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
      throw new Error('StorageError')
    })

    clearWizardData()

    expect(consoleSpy).toHaveBeenCalled()

    spy.mockRestore()
    consoleSpy.mockRestore()
  })
})
