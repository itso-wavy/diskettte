import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import HeaderAside from '../@ui/HeaderAside'
import HeaderNav from '../@ui/HeaderNav'
import Footer from '../@layout/Footer'

export default function RootLayout() {
	const [showAside, setShowAside] = useState(
		sessionStorage.getItem('show_header_banner') ? false : true
	)

	console.log('showAside: ', showAside)

	const asideCloseHandler = () => {
		setShowAside(showAside => !showAside)
		sessionStorage.setItem('show_header_banner', 0)
	}

	return (
		<>
			<header>
				{showAside && <HeaderAside asideCloseHandler={asideCloseHandler} />}
				<HeaderNav />
			</header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
