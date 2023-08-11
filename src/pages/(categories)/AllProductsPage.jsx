import { Link } from 'react-router-dom'
import { useTitle, useHeaderHeight } from '../../hooks'
import {
	Carousel,
	CarouselItem,
	NavigationArrows,
	CarouselIndicator,
} from '../../components/@ui/Carousel'
import { Section } from '../../components/@ui/Section'
import { ProductList, ProductItem } from '../../components/product'
import { Heading } from './AllProductsPage.style'
import { banners, products } from '../../lib/utils/dummyData'

export function AllProductsPage() {
	useTitle('All')

	const headerHeight = useHeaderHeight()

	return (
		<>
			<Section
				sectionId='brandHero'
				sectionTitle='brand hero'
				$top={headerHeight}
			>
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
			</Section>
			<section aria-labelledby='product list'>
				<h2 className='sr-only' id='product list'>
					product list
				</h2>
				<ProductList>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</ProductList>
			</section>
		</>
	)
}
