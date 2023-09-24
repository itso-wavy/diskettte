import { useMemo } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import { ConfiguredPagination } from '../../components/common'
import { ProductList, ProductItem } from '../../components/product'
import { getProducts } from '../../lib/api'
import { StyledImg, StyledSection } from './BrandPage.style'

export const brandLoader = async ({ request, params }) => {
	const brandId = params.brandId
	const productsOnFivePage = await getProducts(null, 5)
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const brandProductsResults = productsOnFivePage.filter(
		product => product.seller === Number(brandId)
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
		brandId,
		brandProducts,
	}
}

const getBrandBanner = ({ banners, brandId }) => {
	const noBanner = {
		ariaLabel: 'brand',
		src: '/assets/banners/banner7.png',
		alt: '.',
	}
	const banner =
		banners.find(banner => banner.id === Number(brandId)) ?? noBanner

	return banner
}

export function BrandPage() {
	const { currentPage, banners } = useRouteLoaderData('all-products')
	const { brandName, brandId, brandProducts } = useLoaderData()
	const productsPerPage = brandProducts.results
	const headerHeight = useHeaderHeight()

	const banner = useMemo(
		() => getBrandBanner({ banners, brandId }),
		[banners, brandId]
	)

	useTitle(brandName)

	return (
		<>
			<Section
				sectionId={banner.ariaLabel}
				sectionTitle='brand banner'
				top={headerHeight * 2}
			>
				<StyledImg src={banner.src} alt={banner.alt} />
			</Section>

			<StyledSection aria-labelledby='product list'>
				<h2 id='product list'>{brandName}</h2>
				<ProductList
					pagination={
						<ConfiguredPagination
							title='products'
							theme='#C4E8DB'
							currentPage={currentPage}
							totalItemsCount={brandProducts.count}
						/>
					}
				>
					{productsPerPage.map(product => (
						<ProductItem key={product.product_id} product={product} />
					))}
				</ProductList>
			</StyledSection>
		</>
	)
}
