import { json, useLoaderData } from 'react-router-dom'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import { Pagination } from '../../components/@ui/Pagination'
import { ProductList, ProductItem } from '../../components/product'
import { StyledImg, StyledSection } from './BrandPage.style'
import { api, clientAPI, firebaseAPI } from '../../lib/api'
import useStore from '../../store'
// import axios from 'axios'

export const brandLoader = async ({ request, params }) => {
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'
	const { brandId } = params

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
	const noBanner = {
		ariaLabel: 'brand',
		src: '/assets/banners/banner7.png',
		alt: '.',
	}
	const banner =
		banners.find(banner => banner.id === Number(brandId)) ?? noBanner

	return { currentPage: pageParam, banner, products }
	// {
	// 	/* 	const client = clientAPI('seller')

	// 	const success = res => res.data
	// 	const error = () => {
	// 		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	// 	}

	// 	return api(client)(success, error) */

	// 	// const response = await axios(
	// 	// 	`https://openmarket.weniv.co.kr/seller/${brandId}`
	// 	// )

	// 	// try {
	// 	// 	if (response.status === 200) return response.data
	// 	// } catch (err) {
	// 	// 	throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	// 	// }
	// }
}

export function BrandPage() {
	const { currentPage, banner, products } = useLoaderData()
	const productsPerPage = products.results
	const headerHeight = useHeaderHeight()
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let itemsPerPage = 15 // 백엔드 설정

	useTitle(`Brand`) // 동적 업데이트 예정

	return (
		<>
			<Section
				sectionId={banner.ariaLabel}
				sectionTitle='brand banner'
				top={headerHeight * 2}
			>
				<StyledImg src={banner.src} alt={banner.alt} />
			</Section>

			<StyledSection aria-labelledby='product list'>
				{/* FIXME: */}
				<h2 id='product list'>{`brand`}</h2>
				<ProductList
					pagination={
						<Pagination
							title='products'
							theme='#AFCCF8'
							pageRange={pageRange}
							currentPage={Number(currentPage)}
							itemsPerPage={itemsPerPage}
							totalItemsCount={products.count}
						/>
					}
				>
					{productsPerPage.map(product => (
						<ProductItem key={product.product_id} product={product} />
					))}
				</ProductList>
			</StyledSection>
		</>
	)
}
