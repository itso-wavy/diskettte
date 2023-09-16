import { useMemo } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import { Table, TableBody, TableHead } from '../../components/@ui/Table'
import { Pagination } from '../../components/@ui/Pagination'
import { getOrder, getProduct } from '../../lib/api'
import {
	formatDate,
	formatNumber,
	formatOrderNumber,
} from '../../lib/utils/text-formatter'
import { Wrapper } from './OrdersPage.style'
import useStore from '../../store'

export const ordersLoader = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const orders = await getOrder(pageParam)

	for (let i = 0; i < orders.results.length; i++) {
		const receipt = orders.results[i]
		let firstProduct = {}

		if (receipt.order_items[0]) {
			const { product_name, image } = await getProduct(receipt.order_items[0])
			firstProduct = { product_name, image }
		}

		orders.results[i].firstProduct = firstProduct
	}

	return { currentPage: pageParam, orders }
}

export function OrdersPage() {
	const { currentPage, orders } = useLoaderData()
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let itemsPerPage = 15 // 백엔드 설정

	//   const orderList = useMemo(() =>[
	//     {
	//     field:'',
	//     header:'',
	//     content: ''
	//   },
	//     {
	//     field:'',
	//     header:'',
	//     content: ''
	//   },
	//     {
	//     field:'',
	//     header:'',
	//     content: ''
	//   },
	//     {
	//     field:'',
	//     header:'',
	//     content: ''
	//   },

	// ],[])

	useTitle('주문 목록')

	const tableHeaders = useMemo(
		() => [
			{ field: 'order_number', header: '주문 번호' },
			{ field: 'created_at', header: '주문 일시' },
			{ field: 'order_items', header: '주문 내역' },
			{ field: 'delivery_status', header: '주문 상태' },
			{ field: 'total_price', header: '결제 금액' },
		],
		[]
	)

	const tableContents = orders.results.map(order => {
		const {
			order_number,
			created_at,
			order_items,
			firstProduct,
			delivery_status,
			total_price,
		} = order

		return [
			formatOrderNumber(created_at, order_number),
			formatDate(created_at),
			<>
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
			</>,
			delivery_status === 'COMPLETE_PAYMENT' && '결제 완료',
			`${formatNumber(total_price)}원`,
		]
	})

	return (
		<Section
			sectionId='order-list'
			sectionTitle='주문 배송 조회'
			style={{ margin: '3.75rem 2.5rem 250px' }}
		>
			<Wrapper>
				<Table
					caption='주문 배송 조회'
					captionID='order-list'
					ariaLabel='order list'
				>
					<TableHead headers={tableHeaders} />
					<TableBody contents={tableContents} />
				</Table>
			</Wrapper>
			<Pagination
				title='orders'
				theme='#f3d6e6'
				pageRange={pageRange}
				currentPage={Number(currentPage)}
				itemsPerPage={itemsPerPage}
				totalItemsCount={orders.count}
			/>
		</Section>
	)
}
