import { Link, useRouteLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import {
	Carousel,
	CarouselItem,
	NavigationArrows,
	CarouselIndicator,
} from '../../components/@ui/Carousel'
import { Section } from '../../components/@motion'
import { ConfiguredPagination } from '../../components/common'
import { ProductList, ProductItem } from '../../components/product'
import {
	HeroWrapper,
	Heading,
	StyledSection,
	ContentsWrapper,
	LNB,
} from './AllProductsPage.style'

export function AllProductsPage() {
	const { currentPage, banners, products } = useRouteLoaderData('all-products')
	const productsPerPage = products.results

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
								<ConfiguredPagination
									title='products'
									theme='#C4DBE2'
									currentPage={currentPage}
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
