import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SkipNav from '../@ui/SkipNav'
import Header from '../@layout/Header'
import HeaderAside from '../@ui/HeaderAside'
import HeaderMain from '../@ui/HeaderMain'
// import HeaderCategories from '../@ui/HeaderCategories'
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
				<HeaderMain />
				{/* <HeaderCategories className='wrapper'>
					<li>
						<NavLink
							to='/categories/all'
							className={({ isActive }) => (isActive ? 'active' : undefined)}
						>
							All
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/categories/new-arrivals'
							className={({ isActive }) => (isActive ? 'active' : undefined)}
						>
							New arrivals
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/categories/exclusive'
							className={({ isActive }) => (isActive ? 'active' : undefined)}
						>
							Exclusive
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/categories/event'
							className={({ isActive }) => (isActive ? 'active' : undefined)}
						>
							Event
						</NavLink>
					</li>
				</HeaderCategories> */}
			</Header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
