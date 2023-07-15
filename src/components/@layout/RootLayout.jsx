import { Outlet } from 'react-router-dom'
import MainAside from './MainAside'
import MainNav from './MainNav'

export default function RootLayout() {
	return (
		<>
			<MainAside />
			<MainNav />
			<main>
				<Outlet />
			</main>
		</>
	)
}
