import { useEffect, useRef, useState } from 'react'
import { SkipNav } from '../@ui/SkipNav'
import { HeaderAside, HeaderMain, HeaderCategories, MobileNav } from '../header'
import { StyledHeader } from './Header.style'
import useStore from '../../store'

export default function Header() {
	const previousYPositionRef = useRef(0)
	const [isHeaderVisible, setIsHeaderVisible] = useState(true)
	const [isHeaderTransparent, setIsHeaderTransparent] = useState(false)

	const { isMobile, isMobileNavOpen } = useStore()

	const [showAside, setShowAside] = useState(
		sessionStorage.getItem('show_header_banner') ? false : true
	)

	useEffect(() => {
		const handleScroll = () => {
			const currentYPosition = window.scrollY

			// if (currentYPosition > previousYPositionRef.current) {
			// 	setIsHeaderVisible(false)
			// 	setIsHeaderTransparent(true)
			// } else {
			// 	setIsHeaderVisible(true)
			// 	setIsHeaderTransparent(false)
			// }
			currentYPosition > previousYPositionRef.current
				? setIsHeaderVisible(false)
				: setIsHeaderVisible(true)

			currentYPosition === 0
				? setIsHeaderTransparent(false)
				: setIsHeaderTransparent(true)

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
		<StyledHeader $visible={isHeaderVisible} $transparent={isHeaderTransparent}>
			<SkipNav />
			{showAside && <HeaderAside asideCloseHandler={asideCloseHandler} />}
			<HeaderMain $transparent={isHeaderTransparent}>
				<HeaderCategories />
				{isMobile && isMobileNavOpen && <MobileNav />}
			</HeaderMain>
		</StyledHeader>
	)
}
