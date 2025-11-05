import { describe, it, expect } from 'vitest'
import { calculateAge, formatCurrency, calculateBasePension, generateSavingsChart } from '../mockData'

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

  describe('calculateBasePension', () => {
    const mockUserData = {
      age: 55,
      retirementAge: 65,
      monthlySalary: 100000,
      afpBalance: 500000,
      desiredPension: 80000,
      voluntaryContributions: 0
    }

    it('should calculate projected pension correctly', () => {
      const result = calculateBasePension(mockUserData)

      expect(result).toHaveProperty('projectedPension')
      expect(result).toHaveProperty('difference')
      expect(result).toHaveProperty('score')
      expect(result).toHaveProperty('message')
      expect(result).toHaveProperty('description')
      expect(result).toHaveProperty('totalSavingsAtRetirement')

      expect(result.projectedPension).toBeGreaterThan(0)
      expect(result.projectedPension).toBeLessThan(mockUserData.desiredPension)
    })

    it('should calculate score between 0 and 10', () => {
      const result = calculateBasePension(mockUserData)

      expect(result.score).toBeGreaterThanOrEqual(0)
      expect(result.score).toBeLessThanOrEqual(10)
    })

    it('should show message "¡Atención!" when gap > 30%', () => {
      const poorData = {
        age: 55,
        retirementAge: 65,
        monthlySalary: 20000,
        afpBalance: 10000,
        desiredPension: 100000,
        voluntaryContributions: 0
      }

      const result = calculateBasePension(poorData)

      expect(result.score).toBeLessThan(4)
      expect(result.message).toBe('¡Atención!')
    })

    it('should have lower difference with higher savings', () => {
      const lowSavingsData = {
        age: 55,
        retirementAge: 65,
        monthlySalary: 50000,
        afpBalance: 100000,
        desiredPension: 60000,
        voluntaryContributions: 0
      }

      const highSavingsData = {
        age: 55,
        retirementAge: 65,
        monthlySalary: 100000,
        afpBalance: 1000000,
        desiredPension: 60000,
        voluntaryContributions: 10000
      }

      const lowResult = calculateBasePension(lowSavingsData)
      const highResult = calculateBasePension(highSavingsData)

      expect(highResult.difference).toBeLessThan(lowResult.difference)
    })

    it('should handle zero voluntary contributions', () => {
      const result = calculateBasePension(mockUserData)

      expect(result.projectedPension).toBeGreaterThan(0)
      expect(result.score).toBeGreaterThanOrEqual(0)
    })

    it('should handle years to retirement = 0', () => {
      const retiredData = {
        age: 65,
        retirementAge: 65,
        monthlySalary: 100000,
        afpBalance: 500000,
        desiredPension: 80000,
        voluntaryContributions: 0
      }

      const result = calculateBasePension(retiredData)

      expect(result.projectedPension).toBeGreaterThan(0)
      expect(result.score).toBe(5)
      expect(result.totalSavingsAtRetirement).toBe(500000)
    })

    it('should calculate difference correctly', () => {
      const result = calculateBasePension(mockUserData)

      expect(result.difference).toBe(Math.max(0, mockUserData.desiredPension - result.projectedPension))
    })

    it('should include future value calculation', () => {
      const result = calculateBasePension(mockUserData)

      expect(result.totalSavingsAtRetirement).toBeGreaterThan(mockUserData.afpBalance)
    })
  })

  describe('generateSavingsChart', () => {
    const mockUserData = {
      age: 55,
      retirementAge: 65,
      monthlySalary: 100000,
      afpBalance: 500000,
      voluntaryContributions: 0
    }

    it('should generate chart data from age to retirement age', () => {
      const chartData = generateSavingsChart(mockUserData)

      expect(chartData).toBeInstanceOf(Array)
      expect(chartData.length).toBe(11) // 55 to 65 = 11 points
      expect(chartData[0].age).toBe(55)
      expect(chartData[10].age).toBe(65)
    })

    it('should have increasing savings over time', () => {
      const chartData = generateSavingsChart(mockUserData)

      for (let i = 0; i < chartData.length - 1; i++) {
        expect(chartData[i + 1].savings).toBeGreaterThan(chartData[i].savings)
      }
    })

    it('should start with initial AFP balance', () => {
      const chartData = generateSavingsChart(mockUserData)

      expect(chartData[0].savings).toBe(Math.round(mockUserData.afpBalance))
    })

    it('should have savings property for each data point', () => {
      const chartData = generateSavingsChart(mockUserData)

      chartData.forEach((point) => {
        expect(point).toHaveProperty('age')
        expect(point).toHaveProperty('savings')
        expect(point.age).toBeGreaterThanOrEqual(55)
        expect(point.age).toBeLessThanOrEqual(65)
        expect(point.savings).toBeGreaterThan(0)
      })
    })

    it('should handle voluntary contributions', () => {
      const withContribData = {
        ...mockUserData,
        voluntaryContributions: 5000
      }

      const chartDataWithout = generateSavingsChart(mockUserData)
      const chartDataWith = generateSavingsChart(withContribData)

      expect(chartDataWith[chartDataWith.length - 1].savings).toBeGreaterThan(
        chartDataWithout[chartDataWithout.length - 1].savings
      )
    })

    it('should handle edge case of 1 year to retirement', () => {
      const nearRetirementData = {
        age: 64,
        retirementAge: 65,
        monthlySalary: 100000,
        afpBalance: 500000,
        voluntaryContributions: 0
      }

      const chartData = generateSavingsChart(nearRetirementData)

      expect(chartData.length).toBe(2)
      expect(chartData[0].age).toBe(64)
      expect(chartData[1].age).toBe(65)
    })
  })
})
