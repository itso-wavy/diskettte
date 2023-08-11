import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import router from './routes'
import theme from './styles/Theme'
import GlobalStyle from './styles/GlobalStyle'
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
