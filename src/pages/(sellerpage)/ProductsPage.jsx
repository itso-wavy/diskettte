import { useMemo } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Table } from '../../components/@ui/Table'
import { Button } from '../../components/@ui/Button'
import { getSellerProducts } from '../../lib/api'
import { StyledSection } from './ProductsPage.style'
import useStore from '../../store'

export const sellerProductsLoader = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const products = await getSellerProducts(pageParam)

	return { currentPage: pageParam, products }
}

export function ProductsPage() {
	const navigate = useNavigate()
	const { currentPage, products } = useLoaderData()
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let itemsPerPage = 15 // 백엔드 설정

	console.log('products: ', products)

	const data = useMemo(
		() => [
			{ field: '상품 번호', header: '상품 번호', contents: [111, 222, 333] },
			{ field: '상품', header: '상품', contents: ['상품1', '상품2', '상품3'] },
			{ field: '가격', header: '가격', contents: [1000, 2000, 3000] },
			{ field: '재고', header: '재고', contents: [5, 5, 5] },
			{ field: '등록일', header: '등록일', contents: [17, 18, 19] },
		],
		[]
	)

	useTitle('상품 목록')

	return (
		<StyledSection aria-labelledby='orderList'>
			<h2 id='orderList'>
				주문 배송 조회
				<Button $size='md' onClick={() => navigate('create')}>
					상품 등록
				</Button>
			</h2>
			<Table $align='row' data={data} />

			{/* <Suspense fallback={<OrderLoading />}>
				<Await resolve={updatedOrders}>
					{updatedOrders => (
						<>
							<Table $align='row' ariaLabel='order list'>
								<ColumnTableHead headers={tableHeaders} />
								<ColumnTableBody
									contents={tableContents(updatedOrders.data.results)}
								/>
							</Table>
							<Pagination
								title='orders'
								theme='#f3d6e6'
								pageRange={pageRange}
								currentPage={Number(currentPage)}
								itemsPerPage={itemsPerPage}
								totalItemsCount={orders.count}
							/>
						</>
					)}
				</Await>
			</Suspense> */}
		</StyledSection>
	)
}
