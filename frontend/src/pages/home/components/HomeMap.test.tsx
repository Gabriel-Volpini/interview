import { render } from '@testing-library/react'
import { HomeMap } from './HomeMap'
import { HomeContext } from '../Home'
import { describe, test, expect } from 'vitest'

const mockData = [
  {
    locationid: 1,
    Latitude: 37.78,
    Longitude: -122.4,
    Applicant: 'Truck 1'
  },
  {
    locationid: 2,
    Latitude: 37.79,
    Longitude: -122.41,
    Applicant: 'Truck 2'
  }
]

describe('HomeMap', () => {
  test('Should render the markers in the map', () => {
    const contextValue = {
      hoveredElementId: null,
      setHoveredElementId: () => {},
      data: mockData
    }

    const { container } = render(
      <HomeContext.Provider value={contextValue}>
        <HomeMap />
      </HomeContext.Provider>
    )

    const markers = container.querySelectorAll('.leaflet-marker-icon')
    expect(markers.length).toBe(2)
  })
})
