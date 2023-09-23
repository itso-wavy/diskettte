import { Suspense, useMemo } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { DashboardLoading } from '../../components/common'
import { OrderListTable } from '../../components/dashboard'
import { getOrder, getProduct } from '../../lib/api'
import { StyledSection } from './OrdersPage.style'

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
}

export function OrdersPage() {
	const { currentPage, orders } = useLoaderData()
	const updatedOrders = useMemo(() => updatedOrdersLoader(orders), [orders])

	useTitle('주문 목록')

	return (
		<StyledSection aria-labelledby='orderList'>
			<h2 id='orderList'>주문 배송 조회</h2>
			<Suspense fallback={<DashboardLoading />}>
				<Await resolve={updatedOrders}>
					{updatedOrders => (
						<OrderListTable
							orders={orders}
							currentPage={currentPage}
							updatedOrders={updatedOrders}
						/>
					)}
				</Await>
			</Suspense>
		</StyledSection>
	)
}
