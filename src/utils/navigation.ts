import { NavigateFunction } from 'react-router-dom'

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    return true
  }
  return false
}

export const handleCalculateClick = (navigate?: NavigateFunction) => {
  // If we're not on the home page and have navigation, go there first
  if (navigate && window.location.pathname !== '/') {
    navigate('/')
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      scrollToSection('simulador')
    }, 100)
  } else {
    // If we're already on the home page, just scroll
    scrollToSection('simulador')
  }
}
