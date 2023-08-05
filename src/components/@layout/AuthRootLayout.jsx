import { useRedirect } from '../../hooks'
import { Outlet } from 'react-router-dom'
import { Background, Wrapper, Decoration } from './AuthRootLayout.style'

export function AuthRootLayout() {
	useRedirect('auth', 'signin')

	return (
		<Background>
			<Wrapper>
				<Outlet />
				<Decoration>
					<div className='mesh-gradation'></div>
				</Decoration>
			</Wrapper>
		</Background>
	)
}
