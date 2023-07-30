import { Outlet } from 'react-router-dom'
import useRedirect from '../../hooks/useRedirect'

export function CategoriesRootLayout() {
	useRedirect('categories', 'all')

	return (
		<>
			<Outlet />
		</>
	)
}
