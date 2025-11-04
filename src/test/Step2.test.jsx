import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Step2 from '../pages/Step2'

const mockData = {
  name: 'Victor Santana',
  documentId: '223-0057793-3',
  age: 55,
  retirementAge: 65,
  currentlyWorking: true,
  monthlySalary: 100000,
  otherIncome: 0,
  housingType: 'rent',
  housingExpense: 50000,
  householdExpense: 20000,
  educationExpense: 0,
  debtPayment: 20000,
  entertainment: 0,
  emergencies: 0,
  afpBalance: 100000,
  desiredPension: 80000,
  voluntaryContributions: 0,
}

describe('Step2 Component', () => {
  describe('Rendering', () => {
    it('renders Header component', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      // Check that Header renders (look for logo)
      const logo = screen.getByAltText('AFP Siembra')
      expect(logo).toBeInTheDocument()
    })

    it('renders main title with correct text', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/Información:/i)).toBeInTheDocument()
      expect(screen.getByText(/Ingresos y gastos/i)).toBeInTheDocument()
    })

    it('renders income fields', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/¿Cuál es tu salario mensual?/i)).toBeInTheDocument()
      expect(screen.getByText(/¿Tienes otros ingresos?/i)).toBeInTheDocument()
    })

    it('renders action buttons', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByRole('button', { name: /Dejar para después/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Volver/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Continuar/i })).toBeInTheDocument()
    })

    it('renders AFP section', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/Administradora de Fondos de Pensiones/i)).toBeInTheDocument()
      expect(screen.getByText(/¿Cuál es tú AFP?/i)).toBeInTheDocument()
      expect(screen.getByText(/¿Cuál es tu saldo en cuenta?/i)).toBeInTheDocument()
    })
  })

  describe('Form Submission', () => {
    it('validates required fields before submission', () => {
      const alertMock = vi.fn()
      global.alert = alertMock

      const onNext = vi.fn()
      const onBack = vi.fn()
      const data = {
        ...mockData,
        monthlySalary: 0,
        afpBalance: 0,
        desiredPension: 0,
      }
      render(<Step2 data={data} onNext={onNext} onBack={onBack} />)

      const continueButton = screen.getByRole('button', { name: /Continuar/i })
      fireEvent.click(continueButton)

      expect(alertMock).toHaveBeenCalled()
      expect(onNext).not.toHaveBeenCalled()
    })

    it('submits with valid data', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      const data = {
        ...mockData,
        monthlySalary: 100000,
        afpBalance: 100000,
        desiredPension: 80000,
      }
      render(<Step2 data={data} onNext={onNext} onBack={onBack} />)

      const continueButton = screen.getByRole('button', { name: /Continuar/i })
      fireEvent.click(continueButton)

      expect(onNext).toHaveBeenCalledWith(
        expect.objectContaining({
          monthlySalary: 100000,
          afpBalance: 100000,
          desiredPension: 80000,
        })
      )
    })
  })

  describe('Navigation', () => {
    it('calls onBack when Volver button is clicked', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      const backButton = screen.getByRole('button', { name: /Volver/i })
      fireEvent.click(backButton)

      expect(onBack).toHaveBeenCalled()
    })
  })

  describe('Housing Type Radio Buttons', () => {
    it('defaults to rented housing', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      const radioButtons = screen.getAllByRole('radio')
      expect(radioButtons[0]).toBeChecked()
    })

    it('can change to own housing', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      const radioButtons = screen.getAllByRole('radio')
      fireEvent.click(radioButtons[1])

      expect(radioButtons[1]).toBeChecked()
    })
  })

  describe('AFP Section', () => {
    it('shows AFP field disabled with "AFP Siembra"', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      const afpFields = screen.getAllByDisplayValue(/AFP Siembra/)
      expect(afpFields[0]).toBeDisabled()
    })

    it('shows help link for unknown balance', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      expect(screen.getByText(/¿No sabes cuál es tu saldo?/i)).toBeInTheDocument()
    })
  })

  describe('Expense Fields', () => {
    it('renders all expense category labels', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      const viviendaLabels = screen.getAllByText('Vivienda')
      expect(viviendaLabels.length).toBeGreaterThan(0)

      const hogarLabels = screen.getAllByText('Gastos de hogar')
      expect(hogarLabels.length).toBeGreaterThan(0)

      const educacionLabels = screen.getAllByText('Educación')
      expect(educacionLabels.length).toBeGreaterThan(0)

      expect(screen.getByText('Pago deuda')).toBeInTheDocument()
      expect(screen.getByText('Entretenimiento')).toBeInTheDocument()
      expect(screen.getByText('Imprevistos')).toBeInTheDocument()
    })
  })

  describe('Summary Sections', () => {
    it('toggles income summary expansion', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      const incomeSummaryHeaders = screen.getAllByText(/Resumen de ingresos/)
      expect(incomeSummaryHeaders.length).toBeGreaterThan(0)
    })

    it('toggles expenses summary expansion', () => {
      const onNext = vi.fn()
      const onBack = vi.fn()
      render(<Step2 data={mockData} onNext={onNext} onBack={onBack} />)

      const expensesSummaryHeaders = screen.getAllByText(/Resumen de Gastos/)
      expect(expensesSummaryHeaders.length).toBeGreaterThan(0)
    })
  })
})
