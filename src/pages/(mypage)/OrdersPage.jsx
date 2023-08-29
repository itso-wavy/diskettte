import { useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'

export const authInfoLoader = ({ request }) => {
	return { request }
}

export function OrdersPage() {
	useTitle('주문 목록')

	console.log(useLoaderData())

	return <div>OrdersPage</div>
}
