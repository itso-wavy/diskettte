import { useLoaderData, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Button } from '../../components/@ui/Button'
import { SalesListTable } from '../../components/dashboard'
import { getSellerProducts } from '../../lib/api'
import { StyledSection } from './ProductsPage.style'

export const sellerProductsLoader = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const products = await getSellerProducts(pageParam)

	return { currentPage: pageParam, products }
}

export function ProductsPage() {
	const navigate = useNavigate()
	const { currentPage, products } = useLoaderData()

	useTitle('상품 목록')

	return (
		<StyledSection aria-labelledby='salesList'>
			<h2 id='salesList'>
				판매 상품 조회
				<Button $size='md' onClick={() => navigate('create')}>
					상품 등록
				</Button>
			</h2>
			<SalesListTable currentPage={currentPage} products={products} />
		</StyledSection>
	)
}
