import { useRef } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Pagination } from '../../components/@ui/Pagination'
import { ProductList, ProductItem } from '../../components/product'
import { getProducts } from '../../lib/api'
import { CarouselSection, ProductsSection } from './NewArrivalsPage.style'
import useStore from '../../store'
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
		// brandId: BRAND_ID,
		newArrivals: brandProductsResults,
		brandProducts: brandProducts,
	}
}

export function NewArrivalsPage() {
	const { currentPage } = useRouteLoaderData('all-products')
	const { brandName, newArrivals, brandProducts } = useLoaderData()

	const productsPerPage = brandProducts.results

	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let ITEMS_PER_PAGE = 15 // 클라이언트 설정

	const targetRef = useRef()
	const headerHeight = useHeaderHeight()
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})
	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-64%']) // FIXME: 61%

	useTitle('New Arrivals')

	return (
		<>
			<CarouselSection
				ref={targetRef}
				$top={headerHeight}
				aria-labelledby='newArrivals introduce'
			>
				<h2 className='sr-only' id='newArrivals introduce'>
					{brandName}
				</h2>
				<div className='sticky-box'>
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
						<Pagination
							title='products'
							theme='#D7D8F4'
							pageRange={pageRange}
							currentPage={Number(currentPage)}
							itemsPerPage={ITEMS_PER_PAGE}
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
