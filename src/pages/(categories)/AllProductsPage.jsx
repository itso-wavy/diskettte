import { useMemo, useState } from 'react'
import { Link, useRouteLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import {
	Carousel,
	CarouselItem,
	NavigationArrows,
	CarouselIndicator,
} from '../../components/@ui/Carousel'
import { ConfiguredPagination } from '../../components/common'
import {
	ProductList,
	ProductItem,
	ProductFilter,
} from '../../components/product'
import {
	HeroWrapper,
	Heading,
	StyledSection,
	ContentsWrapper,
} from './AllProductsPage.style'

const sortProducts = (allProductsResults, sortOptions) => {
	// const pageParam = searchParams.get('page') ?? '1'
	const {
		currentPage,
		order,
		minPrice,
		maxPrice,
		freeShipping,
		excludeSoldOut,
	} = sortOptions

	// TODO: 솔팅!!

	const chunkedProductsResults = allProductsResults.reduce(
		(acc, cur, index) => {
			let ITEMS_PER_PAGE = 15 // 백엔드, 클라이언트 설정 통일
			const chunkedIndex = Math.floor(index / ITEMS_PER_PAGE)

			if (!acc[chunkedIndex]) acc[chunkedIndex] = []
			acc[chunkedIndex].push(cur)

			return acc
		},
		[]
	)

	const sortedProducts = {
		count: allProductsResults.length,
		next: chunkedProductsResults[currentPage],
		results: chunkedProductsResults[currentPage - 1],
	}

	return sortedProducts
}

const calculatePriceRange = allProductsResults => {
	const sortedProducts = allProductsResults.sort((a, b) => a.price - b.price)

	return {
		minPrice: sortedProducts[0].price,
		maxPrice: sortedProducts.at(-1).price,
	}
}

export function AllProductsPage() {
	const { currentPage, banners, allProductsResults } =
		useRouteLoaderData('all-products')

	const { minPrice, maxPrice } = useMemo(
		() => calculatePriceRange(allProductsResults),
		[allProductsResults]
	)
	const initialState = {
		currentPage,
		minPrice,
		maxPrice,
		order: null,
		freeShipping: false,
		excludeSoldOut: false,
	}
	const [sortOptions, setSortOptions] = useState(initialState)
	const [sortedProducts, setSortedProducts] = useState(
		sortProducts(allProductsResults, sortOptions)
	)

	const sortChangeHandler = newSortOptions => {
		setSortOptions(sortOptions => ({ ...sortOptions, ...newSortOptions }))

		const newSortedProducts = sortProducts(allProductsResults, sortOptions)

		setSortedProducts(newSortedProducts)
	}

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
					<ProductFilter
						initialState={initialState}
						// sortOptions={sortOptions}
						sortChangeHandler={sortChangeHandler}
					/>
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
									totalItemsCount={allProductsResults.length}
								/>
							}
						>
							{sortedProducts.results.map(product => (
								<ProductItem key={product.product_id} product={product} />
							))}
						</ProductList>
					</section>
				</ContentsWrapper>
			</StyledSection>
		</>
	)
}
