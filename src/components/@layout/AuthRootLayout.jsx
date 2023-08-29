import { useRedirect } from '../../hooks'
import { Outlet } from 'react-router-dom'
import { Toast } from '../@ui/Toast'
import { Background, Wrapper, Decoration } from './AuthRootLayout.style'
import useStore from '../../store'

export function AuthRootLayout() {
	useRedirect('auth', 'signin')

	const { isToastVisible } = useStore()

	return (
		<Background>
			<Wrapper>
				<Outlet />
				<Decoration>
					<div className='mesh-gradation'></div>
				</Decoration>
				{isToastVisible && <Toast />}
			</Wrapper>
		</Background>
	)
}
