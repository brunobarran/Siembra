import { describe, it, expect } from 'vitest'
import { calculateAge, formatCurrency, calculateBasePension, generateSavingsChart, calculateAdvancedPension, generateComparisonChart } from '../mockData'

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

  describe('calculateAdvancedPension', () => {
    const mockUserData = {
      age: 55,
      retirementAge: 65,
      monthlySalary: 100000,
      afpBalance: 500000,
      desiredPension: 80000,
      voluntaryContributions: 0
    }

    const advancedParams = {
      advancedRetirementAge: 65,
      advancedVoluntaryContribution: 10000,
      annualSalaryIncrease: 5,
      annualExtraordinaryContribution: 0
    }

    it('should calculate advanced pension correctly', () => {
      const result = calculateAdvancedPension(mockUserData, advancedParams)

      expect(result).toHaveProperty('projectedPension')
      expect(result).toHaveProperty('difference')
      expect(result).toHaveProperty('differenceIsPositive')
      expect(result).toHaveProperty('score')
      expect(result).toHaveProperty('message')
      expect(result).toHaveProperty('description')
      expect(result).toHaveProperty('totalSavingsAtRetirement')

      expect(result.projectedPension).toBeGreaterThan(0)
      expect(result.score).toBeGreaterThanOrEqual(0)
      expect(result.score).toBeLessThanOrEqual(10)
    })

    it('should return high score when projected pension is close to desired', () => {
      // First calculate what the projected pension will be
      const result = calculateAdvancedPension(mockUserData, advancedParams)

      // Then use a lower desired pension that we know the projection can exceed
      const highScore = Math.max(result.projectedPension * 0.8, 1000)
      const betterData = {
        ...mockUserData,
        desiredPension: Math.floor(highScore)
      }

      const betterResult = calculateAdvancedPension(betterData, advancedParams)

      expect(betterResult.score).toBeGreaterThanOrEqual(6)
      expect(betterResult.message).toMatch(/¡Felicidades!|¡Casi perfecto!|¡Buen avance!/)
    })

    it('should handle advanced params with extra contributions', () => {
      const paramsWithExtra = {
        ...advancedParams,
        annualExtraordinaryContribution: 50000
      }

      const result = calculateAdvancedPension(mockUserData, paramsWithExtra)

      expect(result.projectedPension).toBeGreaterThan(0)
      expect(result.score).toBeGreaterThanOrEqual(0)
    })

    it('should handle higher salary increase', () => {
      const paramsHighIncrease = {
        ...advancedParams,
        annualSalaryIncrease: 10
      }

      const resultLow = calculateAdvancedPension(mockUserData, advancedParams)
      const resultHigh = calculateAdvancedPension(mockUserData, paramsHighIncrease)

      expect(resultHigh.totalSavingsAtRetirement).toBeGreaterThan(resultLow.totalSavingsAtRetirement)
    })

    it('should calculate higher projected pension with more voluntary contributions', () => {
      const paramsMoreContrib = {
        ...advancedParams,
        advancedVoluntaryContribution: 20000
      }

      const resultLow = calculateAdvancedPension(mockUserData, advancedParams)
      const resultHigh = calculateAdvancedPension(mockUserData, paramsMoreContrib)

      expect(resultHigh.projectedPension).toBeGreaterThan(resultLow.projectedPension)
    })

    it('should handle postponed retirement age', () => {
      const paramsPostponed = {
        ...advancedParams,
        advancedRetirementAge: 70  // 5 años más
      }

      const resultNormal = calculateAdvancedPension(mockUserData, advancedParams)
      const resultPostponed = calculateAdvancedPension(mockUserData, paramsPostponed)

      expect(resultPostponed.totalSavingsAtRetirement).toBeGreaterThan(resultNormal.totalSavingsAtRetirement)
    })

    it('should handle zero advanced voluntary contribution', () => {
      const paramsZeroContrib = {
        ...advancedParams,
        advancedVoluntaryContribution: 0
      }

      const result = calculateAdvancedPension(mockUserData, paramsZeroContrib)

      expect(result.projectedPension).toBeGreaterThan(0)
    })
  })

  describe('generateComparisonChart', () => {
    const mockUserData = {
      age: 55,
      retirementAge: 65,
      monthlySalary: 100000,
      afpBalance: 500000,
      desiredPension: 80000,
      voluntaryContributions: 0
    }

    const advancedParams = {
      advancedRetirementAge: 65,
      advancedVoluntaryContribution: 10000,
      annualSalaryIncrease: 5,
      annualExtraordinaryContribution: 0
    }

    it('should generate comparison chart data', () => {
      const chartData = generateComparisonChart(mockUserData, advancedParams)

      expect(chartData).toBeInstanceOf(Array)
      expect(chartData.length).toBeGreaterThan(0)
    })

    it('should have baseSavings and advancedSavings for each point', () => {
      const chartData = generateComparisonChart(mockUserData, advancedParams)

      chartData.forEach((point) => {
        expect(point).toHaveProperty('age')
        expect(point).toHaveProperty('baseSavings')
        expect(point).toHaveProperty('advancedSavings')
        expect(point.baseSavings).toBeGreaterThanOrEqual(0)
        expect(point.advancedSavings).toBeGreaterThanOrEqual(0)
      })
    })

    it('should have advancedSavings >= baseSavings at each point', () => {
      const chartData = generateComparisonChart(mockUserData, advancedParams)

      chartData.forEach((point) => {
        expect(point.advancedSavings).toBeGreaterThanOrEqual(point.baseSavings)
      })
    })

    it('should show higher difference with extra contributions', () => {
      const paramsWithExtra = {
        ...advancedParams,
        annualExtraordinaryContribution: 50000
      }

      const chartNormal = generateComparisonChart(mockUserData, advancedParams)
      const chartWithExtra = generateComparisonChart(mockUserData, paramsWithExtra)

      const lastPointNormal = chartNormal[chartNormal.length - 1]
      const lastPointExtra = chartWithExtra[chartWithExtra.length - 1]

      expect(lastPointExtra.advancedSavings).toBeGreaterThan(lastPointNormal.advancedSavings)
    })

    it('should handle postponed retirement age in comparison', () => {
      const paramsPostponed = {
        ...advancedParams,
        advancedRetirementAge: 70
      }

      const chartData = generateComparisonChart(mockUserData, paramsPostponed)

      const lastAge = chartData[chartData.length - 1].age
      expect(lastAge).toBe(70)
    })

    it('should cover full range from current age to max retirement age', () => {
      const chartData = generateComparisonChart(mockUserData, advancedParams)

      expect(chartData[0].age).toBe(mockUserData.age)
      expect(chartData[chartData.length - 1].age).toBe(advancedParams.advancedRetirementAge)
    })
  })
})
