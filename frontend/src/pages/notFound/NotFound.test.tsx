import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import {NotFound} from './NotFound'

describe('NotFound', () => {
  test('Should render the NotFound component', () => {
    expect(() => render(<NotFound />)).not.toThrow()
  })
})
