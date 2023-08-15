import { useRouteLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'

export function ProductDeletePage() {
	useTitle('상품 삭제')
	const data = useRouteLoaderData('product-detail')
	console.log('data: ', data)

	return <div>ProductDeletePage</div>
}
