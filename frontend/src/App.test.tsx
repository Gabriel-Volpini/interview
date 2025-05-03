import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from './App'

describe('App', () => {
  test('Should render the App component', () => {
    expect(() => render(<App />)).not.toThrow()
  })
})
