import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import img from '/favicon.svg';
import favicon from '/assets/logo/logo_b.png';

function App() {
	const theme = {};

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<img src={img} alt="" />
				<img src={favicon} alt="" />
			</ThemeProvider>
		</>
	);
}

export default App;
