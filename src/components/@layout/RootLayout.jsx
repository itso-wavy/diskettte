import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { FooterNav } from '../footer'
import { ScrollToTop } from '../@ui/ScrollToTop'

export default function RootLayout() {
	return (
		<>
			<Header />
			<main id='main-content'>
				<Outlet />
			</main>
			<Footer>
				<FooterNav />
			</Footer>
			<ScrollToTop />
		</>
	)
}
