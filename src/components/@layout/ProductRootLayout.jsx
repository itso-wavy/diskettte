import { Outlet } from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { getBanners, getAllProductsResults } from '../../lib/api'

export const productsLoader = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const banners = await getBanners()
	const allProductsResults = await getAllProductsResults()

	return { currentPage: pageParam, banners, allProductsResults }
}

export function ProductRootLayout() {
	useRedirect('categories', 'categories/all')

	return (
		<>
			<Outlet />
		</>
	)
}
