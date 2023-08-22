import { useContext } from 'react'
// import { useSubmit } from 'react-router-dom'
import { FormContext } from '../../context/form-context'
import { QuantitySpinner } from '.'
import { Button } from '../@ui/Button'
import { Flexbox } from '../@ui/Form'
import { StyledForm, ShippingInfo } from './ProductForm.style.jsx'

function ProductForm({ product, ...props }) {
	const {
		seller,
		store_name,
		product_id,
		product_name,
		image,
		price,
		product_info,
		shipping_fee,
		shipping_method,
		stock,
		created_at,
		updated_at,
	} = product
	/* 
  seller: 405
  store_name: "anything else"
  product_id: 501
  product_name: "설산 아로마 디퓨저"
  image: "https://openmarket.weniv.co.kr/media/products/2023/04/18/B005189318.jpg"
  price: 18000
  product_info: "적은 용량으로 오랜 기간 동안 사용 가능한 고농축 프래그런스 오일입니다.\r\n- 은은한 발향: 2~3방울 (60일 사용 가능)\r\n- 넓은 발향: 4~5방울 (40일 사용 가능)"
  shipping_fee: 3000
  shipping_method: "PARCEL"
  stock: 0
  created_at: "2023-04-18T03:21:56.149250"
  updated_at: "2023-05-02T22:49:50.702972"
 */

	const { values } = useContext(FormContext)
	const name = 'qty'
	const value = values[name]
	// const submit = useSubmit()

	return (
		<StyledForm method='POST' {...props}>
			<Flexbox $direction='row' className='amount-select'>
				<p className='title'>{product_name}</p>
				<QuantitySpinner name={name} />
			</Flexbox>
			<Flexbox $direction='row' className='total-price'>
				<p className='title'>총 상품 금액</p>
				<p>
					{new Intl.NumberFormat('ko-KR', {
						style: 'decimal',
					}).format(price * value)}
					<span className='currency'>원</span>
				</p>
			</Flexbox>

			<ShippingInfo>
				<p className='title'>배송 정보</p>
				<p>
					{shipping_method === 'PARCEL' ? '직배송' : '택배배송'} / 배송비{' '}
					{shipping_fee ? (
						<strong>
							{new Intl.NumberFormat('ko-KR', {
								style: 'decimal',
							}).format(shipping_fee)}
						</strong>
					) : (
						'무료'
					)}
				</p>
				<p>
					<span>2일 이내</span> 출고 (주말, 공휴일 제외)
				</p>
			</ShippingInfo>
			<Flexbox $direction='row'>
				{stock > 0 ? (
					<>
						<Button $style='secondary'>카트 추가</Button>
						<Button>바로 구매</Button>
					</>
				) : (
					<Button type='button'>재입고 알림 신청</Button>
				)}
			</Flexbox>
		</StyledForm>
	)
}

export { ProductForm }
