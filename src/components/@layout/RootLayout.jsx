import { useEffect } from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { ScrollToTop, Loading } from '../common'
import { Header } from '../header'
import { Footer } from '../footer'
// import { Popup } from '../@ui/Popup'
import { StyledMain } from './RootLayout.style'
// import useStore from '../../store'

export function RootLayout() {
	const { state } = useNavigation()
	const { pathname, search } = useLocation()
	// const { isPoppedUp } = useStore()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname, search])

	return (
		<>
			<Header />
			<StyledMain id='main'>
				{state === 'loading' ? <Loading /> : <Outlet />}
			</StyledMain>
			<Footer />
			<ScrollToTop />
			{/* {isPopped && <Popup />} */}
		</>
	)
}
