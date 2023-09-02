import { useRedirect } from '../../hooks'
import { Outlet } from 'react-router-dom'
// import { Popup } from '../@ui/Popup'
import { Background, Wrapper, Decoration } from './AuthRootLayout.style'
// import useStore from '../../store'

export function AuthRootLayout() {
	useRedirect('auth', 'signin')

	// const { isPoppedUp } = useStore()

	return (
		<Background>
			<Wrapper>
				<Outlet />
				<Decoration>
					<div className='mesh-gradation'></div>
				</Decoration>
				{/* {isPoppedUp && <Popup />} */}
			</Wrapper>
		</Background>
	)
}
