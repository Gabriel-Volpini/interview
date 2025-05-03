import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'

const customTheme = {
  token: {
    colorPrimary: '#89b4fa',
    colorBgBase: '#45475a',
    colorTextBase: '#fff',
    borderRadius: 8,
  },
  algorithm: theme.darkAlgorithm,
}

const routes = [
  { path: '/', element: <div>Home</div> },
  { path: '*', element: <div>Not Found</div> }
]

describe('Router', () => {
  test('Should redirect to NotFound when an invalid route is accessed', async () => {
    const testRouter = createMemoryRouter(routes)

    render(
      <ConfigProvider theme={customTheme}>
        <RouterProvider router={testRouter} />
      </ConfigProvider>
    )

    expect(await screen.findByText('Home')).toBeInTheDocument()
  })

  test('Should redirect to NotFound when an invalid route is accessed', async () => {
    const testRouter = createMemoryRouter(routes, {
      initialEntries: ['/rota-invalida']
    })

    render(
      <ConfigProvider theme={customTheme}>
        <RouterProvider router={testRouter} />
      </ConfigProvider>
    )

    expect(await screen.findByText('Not Found')).toBeInTheDocument()
  })
})
