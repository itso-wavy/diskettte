import { useState, useEffect } from 'react'
import { StyledButton } from './ScrollToTop.style'

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 80 ? setIsVisible(true) : setIsVisible(false)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0 })
	}

	return (
		<StyledButton
			$show={isVisible}
			onClick={scrollToTop}
			aria-label='scroll to top button'
		/>
	)
}
