import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/route'
import { ConfigProvider, theme } from 'antd';

const customTheme = {
    token: {
        colorPrimary: '#89b4fa',
        colorBgBase: '#45475a',
        colorTextBase: '#fff',
        borderRadius: 8,
    },
    algorithm: theme.darkAlgorithm,
};

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={customTheme}>
                <RouterProvider router={router} />
            </ConfigProvider>
        </QueryClientProvider>
    )
}

export default App
