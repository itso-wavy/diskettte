import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/Theme'
import { ThemeProvider } from 'styled-components'
import useStore from './store'

function App() {
	const { recheckViewport } = useStore()

	useEffect(() => {
		window.addEventListener('resize', () => recheckViewport())
		return window.removeEventListener('resize', () => recheckViewport())
	}, [recheckViewport])

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{/* contents */}
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	)
}

export default App
