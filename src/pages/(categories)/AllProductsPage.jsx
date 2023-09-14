import { Link, useRouteLoaderData } from 'react-router-dom'
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
import {
	HeroWrapper,
	Heading,
	StyledSection,
	ContentsWrapper,
	LNB,
} from './AllProductsPage.style'
import useStore from '../../store'

export function AllProductsPage() {
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
