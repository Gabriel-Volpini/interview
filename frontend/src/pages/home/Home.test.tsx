import { Home } from './Home'
import { render, screen } from '@testing-library/react'
import { describe, expect, vi, test } from 'vitest'

vi.mock('./components/HomeMap', () => ({
  HomeMap: () => <div data-testid="home-map" />
}))
vi.mock('./components/HomeTable', () => ({
  HomeTable: () => <div data-testid="home-table" />
}))

describe('Home', () => {
  test('Should render the Home component', () => {
    expect(() => render(<Home />)).not.toThrow()
  })

test('Should render HomeMap component', () => {
    render(<Home />)
    const map = screen.getByTestId('home-map')
    expect(map).toBeInTheDocument()
  })
test('Should render HomeTable component', () => {
    render(<Home />)
    const table = screen.getByTestId('home-table')
    expect(table).toBeInTheDocument()
  })
})
