import { describe, it, expect } from 'vitest'

describe('Vitest Setup', () => {
  it('should run tests', () => {
    expect(1 + 1).toBe(2)
  })

  it('should have testing library', () => {
    expect(typeof expect).toBe('function')
  })
})
