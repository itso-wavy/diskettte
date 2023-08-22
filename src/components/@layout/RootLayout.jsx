import { useEffect } from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { ScrollToTop, Loading } from '../common'
import { Header } from '../header'
import { Footer } from '../footer'
import { StyledMain } from './RootLayout.style'

export function RootLayout() {
	const { state } = useNavigation()
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<>
			<Header />
			<StyledMain id='main'>
				{state === 'loading' ? <Loading /> : <Outlet />}
			</StyledMain>
			<Footer />
			<ScrollToTop />
		</>
	)
}
