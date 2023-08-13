import { Outlet } from 'react-router-dom'
import { Header, Footer, ScrollToTop } from '../common'
import { StyledMain } from './RootLayout.style'

export function RootLayout() {
	return (
		<>
			<Header />
			<StyledMain id='main'>
				<Outlet />
			</StyledMain>
			<Footer />
			<ScrollToTop />
		</>
	)
}
