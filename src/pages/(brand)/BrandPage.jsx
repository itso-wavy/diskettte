import { json, useLoaderData } from 'react-router-dom'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import { ProductList, ProductItem } from '../../components/product'
import { StyledImg, StyledSection } from './BrandPage.style'
import { api, clientAPI, firebaseAPI } from '../../lib/api'
// import axios from 'axios'

export const brandLoader = async ({ request, params }) => {
	const { brandId } = params

	const firebase = firebaseAPI('banners.json')
	const client = clientAPI('products')

	const success = res => res.data // data || null
	const error = err => {
		throw json(
			{ message: err.message || err.response?.statusText },
			{ status: err.response.status }
		)
	}

	const banners = await api(firebase)(success, error)
	const products = await api(client)(success, error)
	const banner = banners.find(banner => banner.id === +brandId)

	return [banner, products]

	/* 	const client = clientAPI('seller')

	const success = res => res.data
	const error = () => {
		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	}

	return api(client)(success, error) */

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
	const headerHeight = useHeaderHeight()
	const [banner, products] = useLoaderData()
	const productsPerPage = products.results

	/* 
  count: 110
  next: "https://openmarket.weniv.co.kr/products/?page=2"
  previous: null
  results: Array(15)
 */

	useTitle(`Brand`) // 동적 업데이트 예정

	return (
		<>
			{banner && (
				// <section aria-labelledby={banner.ariaLabel}>
				// 	<h2 className='sr-only' id={banner.ariaLabel}>
				// 		brand banner
				// 	</h2>
				// 	<div>
				// 		<img src={banner.src} alt={banner.alt} />
				// 	</div>
				// </section>
				<Section
					sectionId={banner.ariaLabel}
					sectionTitle='brand banner'
					top={headerHeight * 2}
				>
					<StyledImg src={banner.src} alt={banner.alt} />
				</Section>
			)}

			<StyledSection aria-labelledby='product list'>
				{/* FIXME: */}
				<h2 id='product list'>{`brand name`}</h2>
				<ProductList>
					{productsPerPage.map(product => (
						<ProductItem key={product.product_id} product={product} />
					))}
				</ProductList>
			</StyledSection>
		</>
	)
}
