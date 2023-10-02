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
	let allResultsCopy = [...allProductsResults]
	const { order, priceRange, freeShipping, excludeSoldOut } = sortOptions

	if (freeShipping) {
		allResultsCopy = allResultsCopy.filter(
			product => product.shipping_fee === 0
		)
	}

	if (excludeSoldOut) {
		allResultsCopy = allResultsCopy.filter(product => product.stock === 0)
	}

	if (priceRange.start && priceRange.end) {
		allResultsCopy = allResultsCopy.filter(
			product =>
				product.price >= priceRange.start && product.price <= priceRange.end
		)
	}

	if (order) {
		switch (order) {
			case 'price_asc':
				allResultsCopy.sort((a, b) => a.price - b.price)
				break
			case 'price_desc':
				allResultsCopy.sort((a, b) => b.price - a.price)
				break
			case 'oldest':
				allResultsCopy.sort((a, b) => a.product_id - b.product_id)
				break
			case 'newest':
				allResultsCopy.sort((a, b) => b.product_id - a.product_id)
				break
			default:
				allResultsCopy
		}
	}

	return allResultsCopy
}

const paginateProducts = (allProductsResults, sortOptions) => {
	const sortedProducts = sortProducts(allProductsResults, sortOptions)

	const chunkedProductsResults = sortedProducts.reduce((acc, cur, index) => {
		let ITEMS_PER_PAGE = 15 // 백엔드, 클라이언트 설정 통일
		const chunkedIndex = Math.floor(index / ITEMS_PER_PAGE)

		if (!acc[chunkedIndex]) acc[chunkedIndex] = []
		acc[chunkedIndex].push(cur)

		return acc
	}, [])

	const currentPage = sortOptions.currentPage

	const paginatedProducts = {
		count: allProductsResults.length,
		next: !!chunkedProductsResults[currentPage],
		results: chunkedProductsResults[currentPage - 1],
	}

	return paginatedProducts
}

const calculatePriceRange = allProductsResults => {
	const sortedProducts = [...allProductsResults].sort(
		(a, b) => a.price - b.price
	)

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
		priceRange: { start: minPrice, end: maxPrice },
	}
	const [sortOptions, setSortOptions] = useState(initialState)
	const [paginatedProducts, setPaginatedProducts] = useState(
		useMemo(() => paginateProducts(allProductsResults, sortOptions), [])
	)

	const sortChangeHandler = sortOptions => {
		sortOptions.priceRange.start = Number(sortOptions.priceRange.start)
		sortOptions.priceRange.end = Number(sortOptions.priceRange.end)

		setSortOptions(sortOptions)

		const newPaginatedProducts = paginateProducts(
			allProductsResults,
			sortOptions
		)

		setPaginatedProducts(newPaginatedProducts)
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
									totalItemsCount={paginatedProducts.count}
								/>
							}
						>
							{paginatedProducts.results.map(product => (
								<ProductItem key={product.product_id} product={product} />
							))}
						</ProductList>
					</section>
				</ContentsWrapper>
			</StyledSection>
		</>
	)
}
