import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { FooterNav } from '../footer'
import { ScrollToTop } from '../@ui/ScrollToTop'
import { StyledMain } from './RootLayout.style'

export default function RootLayout() {
	return (
		<>
			<Header />
			<StyledMain id='main-content'>
				<Outlet />
			</StyledMain>
			<Footer>
				<FooterNav />
			</Footer>
			<ScrollToTop />
		</>
	)
}
