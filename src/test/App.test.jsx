import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders Login component on initial load', () => {
    render(<App />)
    expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument()
    expect(screen.getByText(/al simulador para tu retiro/i)).toBeInTheDocument()
  })

  it('renders form fields in Login', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/Alejandra/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/000-0000000-0/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Introduce tu correo/i)).toBeInTheDocument()
  })

  it('has submit button with correct text', () => {
    render(<App />)
    const submitButton = screen.getByRole('button', { name: /Comenzar mi evaluación ahora/i })
    expect(submitButton).toBeInTheDocument()
  })
})
