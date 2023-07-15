import { ThemeProvider } from 'styled-components'
// import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

function App() {
	const theme = {}

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
