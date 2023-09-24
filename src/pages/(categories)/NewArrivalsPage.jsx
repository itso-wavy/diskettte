import { useRef } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { useHeaderHeight, useTitle } from '../../hooks'
import { ConfiguredPagination } from '../../components/common'
import { ProductList, ProductItem } from '../../components/product'
import { getProducts } from '../../lib/api'
import { CarouselSection, ProductsSection } from './NewArrivalsPage.style'
import { motion, useTransform, useScroll } from 'framer-motion'

export const newArrivalsLoader = async ({ request, params }) => {
	const BRAND_ID = 15 // brand: VINYL_LOVE
	const productsOnFivePage = await getProducts(5)
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const brandProductsResults = productsOnFivePage.filter(
		product => product.seller === Number(BRAND_ID)
	)

	const chunkedBrandProductsResults = brandProductsResults.reduce(
		(acc, cur, index) => {
			const chunkedIndex = Math.floor(index / 15)

			if (!acc[chunkedIndex]) acc[chunkedIndex] = []
			acc[chunkedIndex].push(cur)

			return acc
		},
		[]
	)

	const brandProducts = {
		count: brandProductsResults.length,
		next: chunkedBrandProductsResults[pageParam],
		results: chunkedBrandProductsResults[pageParam - 1],
	}

	return {
		brandName: brandProductsResults[0].store_name,
		newArrivals: brandProductsResults,
		brandProducts: brandProducts,
	}
}

export function NewArrivalsPage() {
	const { currentPage } = useRouteLoaderData('all-products')
	const { brandName, newArrivals, brandProducts } = useLoaderData()
	const productsPerPage = brandProducts.results

	const targetRef = useRef()
	const headerHeight = useHeaderHeight()
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})

	const outputRangeY = 95 - Math.floor((window.innerWidth - 230) / 124.3)
	const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${outputRangeY}%`])

	useTitle('New Arrivals')

	return (
		<>
			<CarouselSection
				ref={targetRef}
				$top={headerHeight}
				aria-labelledby='newArrivalsIntroduce'
			>
				<div className='sticky-box'>
					<h2 id='newArrivalsIntroduce'>{brandName}</h2>
					<motion.ul style={{ x }}>
						{newArrivals.map(product => (
							<li key={product.product_id}>
								<div
									className='img-box'
									style={{
										background: `no-repeat center/cover url('${product.image}')`,
									}}
								/>
								<div className='blur-box '>
									<p>{product.product_name}</p>
								</div>
							</li>
						))}
					</motion.ul>
				</div>
			</CarouselSection>
			<ProductsSection aria-labelledby='newArrivals list'>
				<h2 id='newArrivals list'>New Arrivals</h2>
				<ProductList
					pagination={
						<ConfiguredPagination
							title='products'
							theme='#D7D8F4'
							currentPage={currentPage}
							totalItemsCount={brandProducts.count}
						/>
					}
				>
					{productsPerPage.map(product => (
						<ProductItem key={product.product_id} product={product} />
					))}
				</ProductList>
			</ProductsSection>
		</>
	)
}
