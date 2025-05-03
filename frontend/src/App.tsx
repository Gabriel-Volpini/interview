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


function App() {
    return (
            <ConfigProvider theme={customTheme}>
                <RouterProvider router={router} />
            </ConfigProvider>
    )
}

export default App
