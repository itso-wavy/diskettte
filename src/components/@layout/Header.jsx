import { useEffect, useRef, useState } from 'react'
import SkipNav from '../@ui/SkipNav'
import { HeaderAside, HeaderMain, HeaderCategories, MobileNav } from '../header'
import useStore from '../../store'
import { StyledHeader } from './Header.style'

export default function Header() {
	const previousYPositionRef = useRef(0)
	const [isHeaderVisible, setIsHeaderVisible] = useState(true)

	const { isMobile, isMobileNavOpen } = useStore()

	const [showAside, setShowAside] = useState(
		sessionStorage.getItem('show_header_banner') ? false : true
	)

	useEffect(() => {
		const handleScroll = () => {
			const currentYPosition = window.scrollY

			currentYPosition > previousYPositionRef.current
				? setIsHeaderVisible(false)
				: setIsHeaderVisible(true)

			previousYPositionRef.current = currentYPosition
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const asideCloseHandler = () => {
		setShowAside(showAside => !showAside)
		sessionStorage.setItem('show_header_banner', 0)
	}

	return (
		<StyledHeader $visible={isHeaderVisible}>
			<SkipNav />
			{showAside && <HeaderAside asideCloseHandler={asideCloseHandler} />}
			<HeaderMain>
				<HeaderCategories />
				{isMobile && isMobileNavOpen && <MobileNav />}
			</HeaderMain>
		</StyledHeader>
	)
}
