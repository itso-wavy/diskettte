import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SkipNav from '../@ui/SkipNav'
import Header from './Header'
import { HeaderAside, HeaderCategories, MobileNav } from '../header'
import Footer from '../@layout/Footer'
import { FooterNav } from '../footer'
import useStore from '../../store'
import styled from 'styled-components'

const StyledMain = styled.main`
	/* overflow: scroll; */

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
	}
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
			<Header
				showMobileNav={showMobileNav}
				openMobileNav={mobileNavToggleHandler}
			>
				<HeaderCategories />
				{isMobile && showMobileNav && (
					<MobileNav closeMobileNav={mobileNavToggleHandler} />
				)}
			</Header>
			<StyledMain id='main-content'>
				<Outlet />
			</StyledMain>
			<Footer>
				<FooterNav />
			</Footer>
		</>
	)
}
