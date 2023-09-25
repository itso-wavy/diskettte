import { useMemo } from 'react'
import {
	useRouteLoaderData,
	useParams,
	useSearchParams,
} from 'react-router-dom'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import { ConfiguredPagination } from '../../components/common'
import { ProductList, ProductItem } from '../../components/product'
import { StyledImg, StyledSection } from './BrandPage.style'

const getBrandProducts = ({ allProductsResults, brandId, pageParam }) => {
	const brandProductsResults = allProductsResults.filter(
		product => product.seller === Number(brandId)
	)

	const chunkedBrandProductsResults = brandProductsResults.reduce(
		(acc, cur, index) => {
			let ITEMS_PER_PAGE = 15 // 백엔드, 클라이언트 설정 통일
			const chunkedIndex = Math.floor(index / ITEMS_PER_PAGE)

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
	const { brandId } = useParams()
	const [searchParams] = useSearchParams()
	const pageParam = searchParams.get('page') ?? '1'
	const headerHeight = useHeaderHeight()
	const { currentPage, banners, allProductsResults } =
		useRouteLoaderData('all-products')

	const banner = useMemo(
		() => getBrandBanner({ banners, brandId }),
		[banners, brandId]
	)
	const { brandName, brandProducts } = useMemo(
		() => getBrandProducts({ allProductsResults, brandId, pageParam }),
		[allProductsResults, brandId, pageParam]
	)
	const productsPerPage = brandProducts.results

	useTitle(brandName)

	return (
		<>
			<Section
				sectionId={banner.ariaLabel}
				sectionTitle='brand banner'
				top={headerHeight * 2}
			>
				<StyledImg src={banner.src} alt={banner.alt} loading='lazy' />
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
