import { useEffect } from 'react'
import { useRedirect } from '../../hooks'
import { Outlet, useLocation } from 'react-router-dom'
// import { Popup } from '../@ui/Popup'
import { Background, Wrapper, Decoration } from './AuthRootLayout.style'
// import useStore from '../../store'

export function AuthRootLayout() {
	const { pathname, search } = useLocation()
	// const { isPoppedUp } = useStore()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname, search])

	useRedirect('auth', 'signin')

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
