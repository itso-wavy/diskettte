import { createContext, useState } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

const ModeContext = createContext('light');

export const ModeProvide = ({ children }) => {
	const [mode, setMode] = useState('light');
	const changeThemeHandler = (theme) => setMode(theme);
	const usetheme = useTheme();
	const theme = {
		colors: {
			background: mode === 'light' ? '#222' : '#fff',
			text: mode === 'light' ? '#fff' : '#222',
		},
	};

	return (
		<ModeContext.Provider value={{ mode, changeThemeHandler }}>
			<ThemeProvider theme={(usetheme, theme)}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</ModeContext.Provider>
	);
};
