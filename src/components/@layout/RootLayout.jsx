import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SkipNav from '../@ui/SkipNav'
import { HeaderAside } from '../header'
import { HeaderCategories } from '../header'
import MobileNav from '../header/MobileNav'
import Footer from '../@layout/Footer'
import useStore from '../../store'
import styled from 'styled-components'

const StyledMain = styled.main`
	overflow: scroll;
`

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
			<Header openMobileNav={mobileNavToggleHandler}>
				<HeaderCategories />
				{isMobile && showMobileNav && (
					<MobileNav closeMobileNav={mobileNavToggleHandler} />
				)}
			</Header>
			<StyledMain id='main-content'>
				<Outlet />
			</StyledMain>
			<Footer />
		</>
	)
}
