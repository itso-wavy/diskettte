import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SkipNav from '../@ui/SkipNav'
import Header from './Header'
import { HeaderAside, HeaderCategories, MobileNav } from '../header'
import Footer from '../@layout/Footer'
import { FooterNav } from '../footer'
import ScrollToTop from '../@ui/ScrollToTop'
import useStore from '../../store'

export default function RootLayout() {
	const { isMobile, isMobileNavOpen } = useStore()

	const [showAside, setShowAside] = useState(
		sessionStorage.getItem('show_header_banner') ? false : true
	)

	const asideCloseHandler = () => {
		setShowAside(showAside => !showAside)
		sessionStorage.setItem('show_header_banner', 0)
	}

	return (
		<>
			<SkipNav />
			{showAside && <HeaderAside asideCloseHandler={asideCloseHandler} />}
			<Header>
				<HeaderCategories />
				{isMobile && isMobileNavOpen && <MobileNav />}
			</Header>
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
