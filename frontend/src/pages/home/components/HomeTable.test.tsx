import { render, screen, fireEvent, } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { HomeTable } from './HomeTable'
import { HomeContext } from '../Home'
import userEvent from '@testing-library/user-event'

const mockData = [
  {
    locationid: 1,
    Applicant: 'Fruity Truck',
    Address: '123 Market St',
    Status: 'APPROVED'
  },
  {
    locationid: 2,
    Applicant: 'Taco Mobile',
    Address: '456 Mission St',
    Status: 'EXPIRED'
  }
]

const mockSetHovered = vi.fn()

const contextValue = {
  data: mockData,
  setHoveredElementId: mockSetHovered
}

describe('HomeTable', () => {
  test('should render the table and the search fields', () => {
    render(
      <HomeContext.Provider value={contextValue}>
        <HomeTable />
      </HomeContext.Provider>
    )

    expect(screen.getByPlaceholderText('input search text')).toBeInTheDocument()
    expect(screen.getByText('All Status')).toBeInTheDocument()
    expect(screen.getByText('Fruity Truck')).toBeInTheDocument()
    expect(screen.getByText('Taco Mobile')).toBeInTheDocument()
  })

  test('Should filter the result by the name', async () => {
    render(
      <HomeContext.Provider value={contextValue}>
        <HomeTable />
      </HomeContext.Provider>
    )

    const searchInput = screen.getByPlaceholderText('input search text')
    await userEvent.type(searchInput, 'Fruity{enter}')

    expect(screen.getByText('Fruity Truck')).toBeInTheDocument()
    expect(screen.queryByText('Taco Mobile')).not.toBeInTheDocument()
  })

test('Should filter the result by status', async () => {
  render(
    <HomeContext.Provider value={contextValue}>
      <HomeTable />
    </HomeContext.Provider>
  )

  const select = screen.getByRole('combobox')
  await userEvent.click(select)

  const option = await screen.findByText('Expired') 
  await userEvent.click(option)

  const searchInput = screen.getByPlaceholderText('input search text')
  await userEvent.type(searchInput, 'Taco{enter}')

  expect(screen.getByText('Taco Mobile')).toBeInTheDocument()
  expect(screen.queryByText('Fruity Truck')).not.toBeInTheDocument()
})

  test('Should trigger setHoveredElementId on mouse over', () => {
    render(
      <HomeContext.Provider value={contextValue}>
        <HomeTable />
      </HomeContext.Provider>
    )

    const row = screen.getByText('Fruity Truck').closest('tr')!
    fireEvent.mouseEnter(row)

    expect(mockSetHovered).toHaveBeenCalledWith(1)
  })
})
