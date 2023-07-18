import { ThemeProvider } from 'styled-components'
import theme from './styles/Theme'
import GlobalStyle from './styles/GlobalStyle'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import useStore from './store'
import { useEffect } from 'react'

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
