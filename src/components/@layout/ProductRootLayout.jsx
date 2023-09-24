import { Outlet } from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { getBanners, getProducts } from '../../lib/api'

export const productsLoader = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const banners = await getBanners()
	const products = await getProducts(pageParam)

	return { currentPage: pageParam, banners, products }
}

export function ProductRootLayout() {
	useRedirect('categories', 'categories/all')

	return (
		<>
			<Outlet />
		</>
	)
}
