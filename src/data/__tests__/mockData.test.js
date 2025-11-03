import { describe, it, expect } from 'vitest'
import { calculateAge, formatCurrency } from '../mockData'

describe('mockData utilities', () => {
  describe('calculateAge', () => {
    it('should calculate age correctly', () => {
      const birthDate = '2000-01-01'
      const age = calculateAge(birthDate)
      expect(age).toBeGreaterThan(20)
      expect(age).toBeLessThan(30)
    })

    it('should return null for empty birthDate', () => {
      const age = calculateAge('')
      expect(age).toBeNull()
    })

    it('should return null for undefined', () => {
      const age = calculateAge(undefined)
      expect(age).toBeNull()
    })

    it('should handle birthday today correctly', () => {
      const today = new Date()
      const birthDate = `${today.getFullYear() - 30}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
      const age = calculateAge(birthDate)
      expect(age).toBe(30)
    })

    it('should handle birthday tomorrow correctly', () => {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      const birthDate = `${tomorrow.getFullYear() - 30}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`
      const age = calculateAge(birthDate)
      expect(age).toBe(29)
    })
  })

  describe('formatCurrency', () => {
    it('should format currency with CLP symbol', () => {
      const result = formatCurrency(1000000)
      expect(result).toContain('$')
      expect(result).toContain('1')
    })

    it('should format zero correctly', () => {
      const result = formatCurrency(0)
      expect(result).toBe('$0')
    })

    it('should handle large numbers', () => {
      const result = formatCurrency(1000000000)
      expect(result).toContain('$')
    })

    it('should return $0 for null', () => {
      const result = formatCurrency(null)
      expect(result).toBe('$0')
    })

    it('should return $0 for undefined', () => {
      const result = formatCurrency(undefined)
      expect(result).toBe('$0')
    })
  })
})
