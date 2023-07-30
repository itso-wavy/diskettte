import { Outlet } from 'react-router-dom'
import { Header, Footer } from './'
import { ScrollToTop } from '../@ui/ScrollToTop'
import { StyledMain } from './RootLayout.style'

export function RootLayout() {
	return (
		<>
			<Header />
			<StyledMain id='main-content'>
				<Outlet />
			</StyledMain>
			<Footer />
			<ScrollToTop />
		</>
	)
}
