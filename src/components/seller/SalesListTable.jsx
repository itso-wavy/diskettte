import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Table, ColumnTableHead, ColumnTableBody } from '../@ui/Table'
import { Button } from '../@ui/Button'
import { Pagination } from '../@ui/Pagination'
import { formatNumber } from '../../lib/utils/text-formatter'
import { Wrapper } from './SalesListTable.style'
import useStore from '../../store'

export function SalesListTable({ currentPage, products, ...props }) {
	const navigate = useNavigate()
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let itemsPerPage = 15 // 백엔드 설정

	const tableHeaders = [
		{ field: 'product_id', header: '상품 번호' },
		{ field: 'product_name', header: '상품명' },
		{ field: 'price', header: '판매가' },
		{ field: 'stock', header: '재고' },
		{ field: 'shipping_fee', header: '배송비' },
		{ field: 'product_menu', header: '수정/삭제' },
	]

	const tableContents = useMemo(
		() =>
			products.results.map(product => {
				const {
					product_id,
					image,
					product_name,
					price,
					stock,
					shipping_fee,
					shipping_method,
				} = product

				return [
					<Link to={`/product/${product_id}`}>{product_id}</Link>,
					<Link to={`/product/${product_id}`}>
						<img src={image} alt={product_name} />
						<p>{product_name}</p>
					</Link>,
					`${formatNumber(price)}원`,
					stock,
					<p className='shipping-info'>
						<span>{shipping_method === 'PARCEL' ? '직배송' : '택배배송'}</span>
						<span>
							/{' '}
							{shipping_fee ? (
								<strong>{formatNumber(shipping_fee)}</strong>
							) : (
								'무료'
							)}
						</span>
					</p>,
					<>
						<Button
							$size='sm'
							$style='secondary'
							onClick={() => navigate(`edit/${product_id}`)}
						>
							수정
						</Button>
						<Button $size='sm'>삭제</Button>
					</>,
				]
			}),
		[products]
	)

	return (
		<Wrapper>
			<Table $align='row' ariaLabel='sales List' {...props}>
				<ColumnTableHead headers={tableHeaders} />
				<ColumnTableBody contents={tableContents} />
			</Table>
			<Pagination
				title='products'
				theme='#f3d6e6'
				pageRange={pageRange}
				currentPage={Number(currentPage)}
				itemsPerPage={itemsPerPage}
				totalItemsCount={products.count}
			/>
		</Wrapper>
	)
}