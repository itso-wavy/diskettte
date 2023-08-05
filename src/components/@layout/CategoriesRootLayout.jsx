import { useRedirect } from '../../hooks'
import { Outlet } from 'react-router-dom'

export function CategoriesRootLayout() {
	useRedirect('categories', 'all')

	return (
		<>
			<Outlet />
		</>
	)
}
