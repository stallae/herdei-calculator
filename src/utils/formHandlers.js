import { calculateTaxes } from '../services/calculatorService'

export const handleClear = () => {
  window.location.reload()
}

export const handleCalculate = (formData, navigate) => {
  const results = calculateTaxes(formData)

  navigate('/output', { state: results })
}
