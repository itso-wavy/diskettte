import { Outlet, json } from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { api, clientAPI, firebaseAPI } from '../../lib/api'

export const productsLoader = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const firebase = firebaseAPI('banners.json')
	const client = clientAPI(`products/?page=${pageParam}`)

	const success = res => res.data // data || null
	const error = err => {
		throw json(
			{ message: err.message || err.response?.statusText },
			{ status: err.response.status }
		)
	}

	const banners = await api(firebase)(success, error)
	const products = await api(client)(success, error)

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
