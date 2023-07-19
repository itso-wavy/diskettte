import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SkipNav from '../@ui/SkipNav'
import HeaderAside from '../header/HeaderAside'
import HeaderCategories from '../header/HeaderCategories'
import Footer from '../@layout/Footer'

export default function RootLayout() {
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
			</Header>
			<main id='main-content'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
