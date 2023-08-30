import { Link, json, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import {
	Carousel,
	CarouselItem,
	NavigationArrows,
	CarouselIndicator,
} from '../../components/@ui/Carousel'
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
// import axios from 'axios'

export const allProductsLoader = async () => {
	// const firebase = await axios('/data/data.json')
	const firebase = firebaseAPI('banners.json')
	const client = clientAPI(`products`)

	const firebaseSuccess = res => res.data
	const clientSuccess = res => res.data.results
	const error = err => {
		const res = err.response
		throw json({ message: res.data.error }, { status: res.status })
	}
	// const error = () => {
	// 	throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	// }

	const banners = await api(firebase)(firebaseSuccess, error)
	const products = await api(client)(clientSuccess, error)

	// return [banners.banners, products]
	return [banners, products]

	// const banners = await axios('/data/banners.json')
	// const products = await axios(`https://openmarket.weniv.co.kr/products`)

	// try {
	// 	if (banners.status === 200 && products.status === 200)
	// 		return [banners.data, products.data.results]
	// } catch (err) {
	// 	throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	// }
}

export function AllProductsPage() {
	const [banners, products] = useLoaderData()

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
										<p>{description.toUpperCase()}</p>
										<p>{title.toUpperCase()}</p>
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
						<ProductList>
							{products.map(product => (
								<ProductItem key={product.product_id} product={product} />
							))}
						</ProductList>
					</section>
				</ContentsWrapper>
			</StyledSection>
		</>
	)
}
