import { useMemo } from 'react'
import { useParams, useRouteLoaderData } from 'react-router-dom'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import { Pagination } from '../../components/@ui/Pagination'
import { ProductList, ProductItem } from '../../components/product'
import { StyledImg, StyledSection } from './BrandPage.style'
import useStore from '../../store'

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
	const { currentPage, banners, products } = useRouteLoaderData('all-products')
	const { brandId } = useParams()
	const productsPerPage = products.results
	const headerHeight = useHeaderHeight()
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let itemsPerPage = 15 // 백엔드 설정

	const banner = useMemo(
		() => getBrandBanner({ banners, brandId }),
		[banners, brandId]
	)

	useTitle(`Brand`) // 동적 업데이트 예정

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
				{/* FIXME: */}
				<h2 id='product list'>{`brand`}</h2>
				<ProductList
					pagination={
						<Pagination
							title='products'
							theme='#AFCCF8'
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
			</StyledSection>
		</>
	)
}
