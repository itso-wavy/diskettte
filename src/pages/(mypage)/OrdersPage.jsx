import { Suspense, useMemo } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { OrderLoading } from '../../components/common'
import {
	Table,
	ColumnTableHead,
	ColumnTableBody,
} from '../../components/@ui/Table'
import { Pagination } from '../../components/@ui/Pagination'
import { getOrder, getProduct } from '../../lib/api'
import {
	formatDate,
	formatNumber,
	formatOrderNumber,
} from '../../lib/utils/text-formatter'
import { StyledSection } from './OrdersPage.style'
import useStore from '../../store'

export const ordersLoader = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const orders = await getOrder(pageParam)

	return { currentPage: pageParam, orders }
}

const updatedOrdersLoader = async orders => {
	for (let i = 0; i < orders.results.length; i++) {
		const receipt = orders.results[i]
		let firstProduct = {}

		if (receipt.order_items[0]) {
			const { product_name, image } = await getProduct(receipt.order_items[0])
			firstProduct = { product_name, image }
		}

		orders.results[i].firstProduct = firstProduct
	}

	return defer(orders)
	// return orders
}

export function OrdersPage() {
	const { currentPage, orders } = useLoaderData()
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let itemsPerPage = 15 // 백엔드 설정

	const updatedOrders = useMemo(() => updatedOrdersLoader(orders), [orders])

	const tableHeaders = [
		{ field: 'order_number', header: '주문 번호' },
		{ field: 'created_at', header: '주문 일시' },
		{ field: 'order_items', header: '주문 내역' },
		{ field: 'delivery_status', header: '주문 상태' },
		{ field: 'total_price', header: '결제 금액' },
	]

	const tableContents = array => {
		return array.map(order => {
			const {
				order_number,
				created_at,
				order_items,
				firstProduct,
				delivery_status,
				total_price,
			} = order

			return [
				<Link to='' onClick={preventRedirectHandler}>
					{formatOrderNumber(created_at, order_number)}
				</Link>,
				formatDate(created_at),
				<Link to='' onClick={preventRedirectHandler}>
					<img
						src={firstProduct.image}
						alt={firstProduct.product_name}
						className='product-img'
					/>
					<p>
						{order_items.length > 1
							? `${firstProduct.product_name} 외 ${order_items.length - 1}종`
							: firstProduct.product_name}
					</p>
				</Link>,
				delivery_status === 'COMPLETE_PAYMENT' && '결제 완료',
				`${formatNumber(total_price)}원`,
			]
		})
	}

	const preventRedirectHandler = e => {
		e.preventDefault()
	}

	useTitle('주문 목록')

	return (
		<StyledSection aria-labelledby='orderList'>
			<h2 id='orderList'>주문 배송 조회</h2>
			<Suspense fallback={<OrderLoading />}>
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
			</Suspense>
		</StyledSection>
	)
}
