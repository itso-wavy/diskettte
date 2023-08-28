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
import {
	HeroWrapper,
	Heading,
	StyledSection,
	ContentsWrapper,
	LNB,
} from './AllProductsPage.style'
import { api, clientAPI, firebaseAPI } from '../../lib/api'
// import axios from 'axios'

export const allProductsLoader = async () => {
	const firebase = firebaseAPI('banners.json')
	const client = clientAPI(`products`)

	const firebaseSuccess = res => res.data
	const clientSuccess = res => res.data.results
	const error = () => {
		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	}

	const banners = await api(firebase)(firebaseSuccess, error)
	const products = await api(client)(clientSuccess, error)

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
	useTitle('All')
	const [banners, products] = useLoaderData()

	return (
		<>
			<Section sectionId='adsBanner' sectionTitle='brands advertise banner'>
				<HeroWrapper>
					<Carousel
						items={banners}
						autoSlideInterval={3000}
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
										<p>{title}</p>
										<p>{description}</p>
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
