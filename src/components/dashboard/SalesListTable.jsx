import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Table, ColumnTableHead, ColumnTableBody } from '../@ui/Table'
import { Button } from '../@ui/Button'
import { ConfiguredPagination } from '../common'
import { formatPrice } from '../../lib/utils/text-formatter'
import { deleteProduct } from '../../lib/api'
import { Wrapper } from './SalesListTable.style'

export function SalesListTable({ currentPage, products, ...props }) {
	const navigate = useNavigate()

	const deleteHandler = product_id => {
		const success = () => navigate('/seller')
		deleteProduct(product_id, success)
	}

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
					`${formatPrice(price)}원`,
					stock,
					<p className='shipping-info'>
						<span>{shipping_method === 'PARCEL' ? '직배송' : '택배배송'}</span>
						<span>
							/{' '}
							{shipping_fee ? (
								<strong>{formatPrice(shipping_fee)}</strong>
							) : (
								'무료'
							)}
						</span>
					</p>,
					<>
						<Button
							type='button'
							$size='sm'
							$style='secondary'
							onClick={() => navigate(`edit/${product_id}`)}
						>
							수정
						</Button>
						<Button
							type='button'
							$size='sm'
							onClick={() => deleteHandler(product_id)}
						>
							삭제
						</Button>
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
			<ConfiguredPagination
				title='products'
				theme='#FFEAB0'
				currentPage={currentPage}
				totalItemsCount={products.count}
			/>
		</Wrapper>
	)
}
