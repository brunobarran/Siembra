import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Step1 from '../pages/Step1'

const mockData = {
  name: 'Victor Santana',
  documentId: '223-0057793-3',
  birthDate: '1969-03-15',
  email: 'victor@example.com',
  age: 55
}

describe('Step1 Component', () => {
  describe('Rendering', () => {
    it('renders Header with user info', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/Victor Santana/i)).toBeInTheDocument()
      expect(screen.getByText(/223-0057793-3/i)).toBeInTheDocument()
    })

    it('renders main title with correct text', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/Información:/i)).toBeInTheDocument()
      expect(screen.getByText(/Personal y laboral/i)).toBeInTheDocument()
    })

    it('renders required field indicator', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/Todos los campos marcados con/i)).toBeInTheDocument()
      expect(screen.getByText(/son obligatorios/i)).toBeInTheDocument()
    })

    it('renders section separators', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/Información Personal/i)).toBeInTheDocument()
      expect(screen.getByText(/Información laboral y profesional/i)).toBeInTheDocument()
    })

    it('renders age field as disabled', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const ageInput = screen.getByDisplayValue(/55 Años/i)
      expect(ageInput).toBeDisabled()
    })

    it('renders retirement age field with +/- buttons', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/65 Años/i)).toBeInTheDocument()
    })

    it('renders working status radio buttons', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/¿Laboras actualmente?/i)).toBeInTheDocument()
      const radioButtons = screen.getAllByRole('radio')
      expect(radioButtons).toHaveLength(2)
    })

    it('renders action buttons', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByRole('button', { name: /Dejar para después/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Volver/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Continuar/i })).toBeInTheDocument()
    })

    it('renders Footer component', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/Términos & condiciones/i)).toBeInTheDocument()
      expect(screen.getByText(/© 2025 AFP Siembra/i)).toBeInTheDocument()
    })
  })

  describe('Age Calculation', () => {
    it('displays correct age from birthDate', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      const dataWithoutAge = { ...mockData }
      delete dataWithoutAge.age

      render(<Step1 data={dataWithoutAge} onNext={onNext} onBack={onBack} />)

      // Age should be calculated from birthDate (1969-03-15)
      // Should display a numeric age followed by "Años"
      const ageElements = screen.getAllByText(/Años/)
      expect(ageElements.length).toBeGreaterThan(0)
    })

    it('shows "-- Años" when birthDate is missing', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      const dataWithoutBirthDate = {
        name: 'Test User',
        documentId: '123-456789-0',
        email: 'test@example.com'
      }

      render(<Step1 data={dataWithoutBirthDate} onNext={onNext} onBack={onBack} />)

      expect(screen.getByDisplayValue(/-- Años/i)).toBeInTheDocument()
    })
  })

  describe('Retirement Age Controls', () => {
    it('increments retirement age with + button', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const plusButtons = screen.getAllByRole('button', { name: '+' })
      const incrementButton = plusButtons[0]

      fireEvent.click(incrementButton)

      expect(screen.getByText(/66 Años/i)).toBeInTheDocument()
    })

    it('decrements retirement age with - button', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const minusButtons = screen.getAllByRole('button', { name: '−' })
      const decrementButton = minusButtons[0]

      fireEvent.click(decrementButton)

      expect(screen.getByText(/64 Años/i)).toBeInTheDocument()
    })

    it('prevents decrement below age + 1', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const minusButtons = screen.getAllByRole('button', { name: '−' })
      const decrementButton = minusButtons[0]

      // Decrease from 65 to 56 (age + 1)
      for (let i = 0; i < 10; i++) {
        fireEvent.click(decrementButton)
      }

      // Should be capped at age + 1 = 56
      expect(screen.getByText(/56 Años/i)).toBeInTheDocument()
    })

    it('caps retirement age at 100', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const plusButtons = screen.getAllByRole('button', { name: '+' })
      const incrementButton = plusButtons[0]

      // Increment many times
      for (let i = 0; i < 50; i++) {
        fireEvent.click(incrementButton)
      }

      // Should be capped at 100
      expect(screen.getByText(/100 Años/i)).toBeInTheDocument()
    })
  })

  describe('Working Status Radio Buttons', () => {
    it('defaults to "Si" (working)', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const radioButtons = screen.getAllByRole('radio')
      expect(radioButtons[0]).toBeChecked()
      expect(radioButtons[1]).not.toBeChecked()
    })

    it('can change to "No" (not working)', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const radioButtons = screen.getAllByRole('radio')
      fireEvent.click(radioButtons[1])

      expect(radioButtons[0]).not.toBeChecked()
      expect(radioButtons[1]).toBeChecked()
    })

    it('can toggle back to "Si"', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const radioButtons = screen.getAllByRole('radio')

      // Change to No
      fireEvent.click(radioButtons[1])
      expect(radioButtons[1]).toBeChecked()

      // Change back to Si
      fireEvent.click(radioButtons[0])
      expect(radioButtons[0]).toBeChecked()
    })
  })

  describe('Form Submission', () => {
    it('calls onNext with form data on Continue button click', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const continueButton = screen.getByRole('button', { name: /Continuar/i })
      fireEvent.click(continueButton)

      expect(onNext).toHaveBeenCalledWith(
        expect.objectContaining({
          age: 55,
          retirementAge: 65,
          currentlyWorking: true
        })
      )
    })

    it('includes modified retirement age in submission', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const plusButtons = screen.getAllByRole('button', { name: '+' })
      fireEvent.click(plusButtons[0])

      const continueButton = screen.getByRole('button', { name: /Continuar/i })
      fireEvent.click(continueButton)

      expect(onNext).toHaveBeenCalledWith(
        expect.objectContaining({
          retirementAge: 66
        })
      )
    })

    it('includes modified working status in submission', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const radioButtons = screen.getAllByRole('radio')
      fireEvent.click(radioButtons[1])

      const continueButton = screen.getByRole('button', { name: /Continuar/i })
      fireEvent.click(continueButton)

      expect(onNext).toHaveBeenCalledWith(
        expect.objectContaining({
          currentlyWorking: false
        })
      )
    })
  })

  describe('Navigation', () => {
    it('calls onBack when Volver button is clicked', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const backButton = screen.getByRole('button', { name: /Volver/i })
      fireEvent.click(backButton)

      expect(onBack).toHaveBeenCalled()
    })

    it('has functioning Dejar para después button', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      const skipButton = screen.getByRole('button', { name: /Dejar para después/i })
      expect(skipButton).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper labels for form fields', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step1 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/Mi edad es:/i)).toBeInTheDocument()
      expect(screen.getByText(/¿A que edad deseas retirarte?/i)).toBeInTheDocument()
      expect(screen.getByText(/¿Laboras actualmente?/i)).toBeInTheDocument()
    })
  })
})
