import { Link, json, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import {
	Carousel,
	CarouselItem,
	NavigationArrows,
	CarouselIndicator,
} from '../../components/@ui/Carousel'
import { Pagination } from '../../components/@ui/Pagination'
import { Section } from '../../components/@motion'
import { ProductList, ProductItem } from '../../components/product'
import { api, clientAPI, firebaseAPI } from '../../lib/api'
import {
	HeroWrapper,
	Heading,
	StyledSection,
	ContentsWrapper,
	LNB,
} from './AllProductsPage.style'
import useStore from '../../store'
// import axios from 'axios'

// export const productsLoader = async ({ request }) => {
// 	const searchParams = new URL(request.url).searchParams
// 	const pageParam = searchParams.get('page') ?? '1'

// 	const firebase = firebaseAPI('banners.json')
// 	const client = clientAPI(`products/?page=${pageParam}`)

// 	const success = res => res.data // data || null
// 	const error = err => {
// 		throw json(
// 			{ message: err.message || err.response?.statusText },
// 			{ status: err.response.status }
// 		)
// 	}
// 	// const firebaseSuccess = res => res.data
// 	// const clientSuccess = res => res.data
// 	// const error = err => {
// 	// 	const res = err.response
// 	// 	throw json({ message: res.data.error }, { status: res.status })
// 	// }
// 	//
// 	// const banners = await api(firebase)(firebaseSuccess, error)
// 	// const products = await api(client)(clientSuccess, error)

// 	const banners = await api(firebase)(success, error)
// 	const products = await api(client)(success, error)

// 	return { currentPage: pageParam, banners, products }

// 	// const banners = await axios('/data/banners.json')
// 	// const products = await axios(`https://openmarket.weniv.co.kr/products`)

// 	// try {
// 	// 	if (banners.status === 200 && products.status === 200)
// 	// 		return [banners.data, products.data.results]
// 	// } catch (err) {
// 	// 	throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
// 	// }
// }

export function AllProductsPage() {
	// const { currentPage, banners, products } = useLoaderData()
	const { currentPage, banners, products } = useRouteLoaderData('all-products')
	const productsPerPage = products.results
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let itemsPerPage = 15 // 백엔드 설정

	useTitle('All')

	return (
		<>
			<Section sectionId='adsBanner' sectionTitle='brands advertise banner'>
				<HeroWrapper>
					<Carousel
						items={banners}
						autoSlideInterval={3500}
						Arrows={NavigationArrows}
						Indicator={CarouselIndicator}
					>
						{banners.map(
							({ id, url, src, alt, ariaLabel, title, description }) => (
								<CarouselItem key={id} ariaLabel={ariaLabel}>
									<Link to={url}>
										<img src={src} alt={alt} draggable='false' />
									</Link>
									<Heading>
										<p>{description}</p>
										<p>{title}</p>
									</Heading>
								</CarouselItem>
							)
						)}
					</Carousel>
				</HeroWrapper>
			</Section>

			<StyledSection aria-labelledby='allCategory'>
				<h2 id='allCategory'>All Category</h2>
				<ContentsWrapper>
					<LNB className='lnb'>
						<Section sectionId='productFilter' sectionTitle='product filter'>
							LNB
						</Section>
					</LNB>

					<section aria-labelledby='productList'>
						<h3 className='sr-only' id='productList'>
							product list
						</h3>
						<ProductList
							pagination={
								<Pagination
									title='products'
									theme='#E8EAB1'
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
					</section>
				</ContentsWrapper>
			</StyledSection>
		</>
	)
}
