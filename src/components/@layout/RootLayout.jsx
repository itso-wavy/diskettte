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
	const { isMobile } = useStore()

	const [showAside, setShowAside] = useState(
		sessionStorage.getItem('show_header_banner') ? false : true
	)

	const [showMobileNav, setShowMobileNav] = useState(false)

	const asideCloseHandler = () => {
		setShowAside(showAside => !showAside)
		sessionStorage.setItem('show_header_banner', 0)
	}

	const mobileNavToggleHandler = () => {
		setShowMobileNav(showMobileNav => !showMobileNav)
	}

	return (
		<>
			<SkipNav />
			{showAside && <HeaderAside asideCloseHandler={asideCloseHandler} />}
			<Header
				showMobileNav={showMobileNav}
				openMobileNav={mobileNavToggleHandler}
			>
				<HeaderCategories />
				{isMobile && showMobileNav && (
					<MobileNav closeMobileNav={mobileNavToggleHandler} />
				)}
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
