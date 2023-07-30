import { Outlet } from 'react-router-dom'
import { Wrapper, Background } from './AuthRootLayout.style'

export function AuthRootLayout() {
	return (
		<Wrapper>
			<Outlet />
			<Background />
		</Wrapper>
	)
}
