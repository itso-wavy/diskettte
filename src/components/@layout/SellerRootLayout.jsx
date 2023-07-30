import { Outlet } from 'react-router-dom'
import useRedirect from '../../hooks/useRedirect'

export function SellerRootLayout() {
	useRedirect('seller', 'product')

	return (
		<>
			SellerRootLayout
			<Outlet />
		</>
	)
}
