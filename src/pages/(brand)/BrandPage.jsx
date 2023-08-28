import { useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { ProductList, ProductItem } from '../../components/product'
import { api, clientAPI } from '../../lib/api'
// import axios from 'axios'

export const brandLoader = async ({ request, params }) => {
	const { brandId } = params

	const client = clientAPI(`seller/${brandId}`)

	const success = res => res.data
	const error = () => {
		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	}

	return api(client)(success, error)

	// const response = await axios(
	// 	`https://openmarket.weniv.co.kr/seller/${brandId}`
	// )

	// try {
	// 	if (response.status === 200) return response.data
	// } catch (err) {
	// 	throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	// }
}

export function BrandPage() {
	const products = useLoaderData()
	useTitle(`Brand`) // 동적 업데이트 예정

	return (
		<>
			<section aria-labelledby='brand banner'>
				<h2 className='sr-only' id='brand banner'>
					brand banner
				</h2>
				<div>
					<img
						src='/assets/images/eql/32_129_65_KOR_20230526112619.jpg'
						alt=''
					/>
				</div>
			</section>
			<section aria-labelledby='product list'>
				<h2 className='sr-only' id='product list'>
					product list
				</h2>
				<ProductList>
					{products.map(product => (
						<ProductItem key={product.product_id} product={product} />
					))}
				</ProductList>
			</section>
		</>
	)
}
