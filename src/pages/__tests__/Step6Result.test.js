import { describe, it, expect } from 'vitest'
import { generateActionPlan } from '../../data/mockData'

describe('Step6Result - generateActionPlan', () => {
  const mockUserData = {
    name: 'Alejandra',
    documentId: '123-456789-0',
    desiredPension: 80000,
    projectedPension: 120000,
    difference: 40000,
    score: 9
  }

  const mockAdvancedParams = {
    advancedRetirementAge: 65,
    advancedVoluntaryContribution: 10000,
    annualSalaryIncrease: 5,
    annualExtraordinaryContribution: 0
  }

  describe('generateActionPlan structure', () => {
    it('should return plan with 3 sections', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan).toHaveProperty('voluntarySavings')
      expect(plan).toHaveProperty('debtReduction')
      expect(plan).toHaveProperty('retirementPreparation')
    })

    it('should have expanded=true for voluntarySavings', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.voluntarySavings.expanded).toBe(true)
    })

    it('should have expanded=false for debtReduction', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.debtReduction.expanded).toBe(false)
    })

    it('should have expanded=false for retirementPreparation', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.retirementPreparation.expanded).toBe(false)
    })
  })

  describe('generateActionPlan items', () => {
    it('should have 2 items in voluntarySavings', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.voluntarySavings.items.length).toBe(2)
    })

    it('should have 2 items in debtReduction', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.debtReduction.items.length).toBe(2)
    })

    it('should have 2 items in retirementPreparation', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.retirementPreparation.items.length).toBe(2)
    })

    it('should have description property for each item', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      plan.voluntarySavings.items.forEach(item => {
        expect(item).toHaveProperty('description')
        expect(typeof item.description).toBe('string')
        expect(item.description.length).toBeGreaterThan(0)
      })
    })
  })

  describe('generateActionPlan with different voluntary amounts', () => {
    it('should include voluntary amount in description when > 0', () => {
      const params = { ...mockAdvancedParams, advancedVoluntaryContribution: 15000 }
      const plan = generateActionPlan(mockUserData, params)

      expect(plan.voluntarySavings.items[0].description).toContain('15,000')
    })

    it('should handle zero voluntary contribution', () => {
      const params = { ...mockAdvancedParams, advancedVoluntaryContribution: 0 }
      const plan = generateActionPlan(mockUserData, params)

      expect(plan.voluntarySavings.items[0].description).toContain('una cantidad')
    })

    it('should handle missing advancedParams', () => {
      const plan = generateActionPlan(mockUserData, {})

      expect(plan).toBeDefined()
      expect(plan.voluntarySavings).toBeDefined()
      expect(plan.debtReduction).toBeDefined()
      expect(plan.retirementPreparation).toBeDefined()
    })

    it('should handle undefined advancedParams', () => {
      const plan = generateActionPlan(mockUserData)

      expect(plan).toBeDefined()
      expect(plan.voluntarySavings.items.length).toBe(2)
    })
  })

  describe('generateActionPlan content quality', () => {
    it('should have non-empty descriptions in all items', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)
      const allItems = [
        ...plan.voluntarySavings.items,
        ...plan.debtReduction.items,
        ...plan.retirementPreparation.items
      ]

      allItems.forEach(item => {
        expect(item.description.trim().length).toBeGreaterThan(10)
      })
    })

    it('should have meaningful descriptions in debtReduction', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.debtReduction.items[0].description).toContain('deudas')
      expect(plan.debtReduction.items[1].description).toContain('deudas')
    })

    it('should have meaningful descriptions in retirementPreparation', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.retirementPreparation.items[0].description).toContain('pensión obligatoria')
      expect(plan.retirementPreparation.items[1].description).toContain('pensión')
    })

    it('should mention ahorro in voluntarySavings items', () => {
      const plan = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan.voluntarySavings.items[0].description).toContain('ahorro')
    })
  })

  describe('generateActionPlan edge cases', () => {
    it('should handle very large voluntary contribution', () => {
      const params = { ...mockAdvancedParams, advancedVoluntaryContribution: 999999 }
      const plan = generateActionPlan(mockUserData, params)

      expect(plan.voluntarySavings.items[0].description).toContain('999,999')
    })

    it('should handle null userData gracefully', () => {
      const plan = generateActionPlan(null, mockAdvancedParams)

      expect(plan).toBeDefined()
      expect(plan.voluntarySavings).toBeDefined()
    })

    it('should return consistent plan structure across multiple calls', () => {
      const plan1 = generateActionPlan(mockUserData, mockAdvancedParams)
      const plan2 = generateActionPlan(mockUserData, mockAdvancedParams)

      expect(plan1.voluntarySavings.items.length).toBe(plan2.voluntarySavings.items.length)
      expect(plan1.debtReduction.items.length).toBe(plan2.debtReduction.items.length)
      expect(plan1.retirementPreparation.items.length).toBe(plan2.retirementPreparation.items.length)
    })
  })
})
