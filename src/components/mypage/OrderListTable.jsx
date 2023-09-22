import { Link } from 'react-router-dom'
import { Table, ColumnTableHead, ColumnTableBody } from '../@ui/Table'
import { Pagination } from '../@ui/Pagination'
import {
	formatDate,
	formatNumber,
	formatOrderNumber,
} from '../../lib/utils/text-formatter'
import { Wrapper } from './OrderListTable.style'
import useStore from '../../store'

export function OrderListTable({
	currentPage,
	orders,
	updatedOrders,
	...props
}) {
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let itemsPerPage = 15 // 백엔드 설정

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
					<img src={firstProduct.image} alt={firstProduct.product_name} />
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

	return (
		<Wrapper {...props}>
			<Table $align='row' ariaLabel='order list'>
				<ColumnTableHead headers={tableHeaders} />
				<ColumnTableBody contents={tableContents(updatedOrders.data.results)} />
			</Table>
			<Pagination
				title='orders'
				theme='#FFEAB0'
				pageRange={pageRange}
				currentPage={Number(currentPage)}
				itemsPerPage={itemsPerPage}
				totalItemsCount={orders.count}
			/>
		</Wrapper>
	)
}
