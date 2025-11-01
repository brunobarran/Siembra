import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText(/Siembra Pension Simulator/i)).toBeInTheDocument()
  })

  it('shows setup complete message', () => {
    render(<App />)
    expect(screen.getByText(/Fase 0 Setup Completo/i)).toBeInTheDocument()
  })
})
