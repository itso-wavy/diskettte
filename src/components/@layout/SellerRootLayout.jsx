import { useRedirect } from '../../hooks'
import { Outlet, useLoaderData } from 'react-router-dom'

export const sellerInfoLoader = () => {
	return null
}

export function SellerRootLayout() {
	const sellerInfo = useLoaderData()

	useRedirect('seller', 'product')

	return (
		<>
			SellerRootLayout
			<Outlet />
		</>
	)
}
