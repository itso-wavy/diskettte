import { useRedirect } from '../../hooks'
import { Outlet } from 'react-router-dom'

export function SellerRootLayout() {
	useRedirect('seller', 'product')

	return (
		<>
			SellerRootLayout
			<Outlet />
		</>
	)
}
