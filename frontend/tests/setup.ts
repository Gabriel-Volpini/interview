import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Mock necessário para bibliotecas que usam getComputedStyle
window.getComputedStyle = (elt) => {
  return ({
    getPropertyValue: () => '', // ou valor simulado ex: 'none'
  } as any as CSSStyleDeclaration)
}

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    media: '',
    onchange: null,
    addListener: () => {}, // obsoleto
    removeListener: () => {}, // obsoleto
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }
}

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
})
