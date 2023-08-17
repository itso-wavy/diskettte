import { Form } from 'react-router-dom'
import { QuantitySpinner } from './QuantitySpinner'
import { ShippingInfo } from './ProductForm.style.jsx'
import { Flexbox } from '../@ui/Form.style'
import { SubmitButton } from '../@ui/Form'

function ProductForm({ productName, shippingMethod, shippingFee, ...props }) {
	return (
		<Form action='post' {...props}>
			<div>
				<p className='amount-select'>{productName}</p>
				<QuantitySpinner />
			</div>
			<div>
				<p className='total-price'>총 상품 금액</p>
			</div>

			<ShippingInfo>
				<p>배송 정보</p>
				<p>
					{shippingMethod === 'PARCEL' ? '직배송' : '택배배송'} / 배송비{' '}
					{shippingFee ? (
						<strong>
							{new Intl.NumberFormat('ko-KR', {
								style: 'decimal',
							}).format(shippingFee)}
						</strong>
					) : (
						'무료'
					)}
				</p>
				<p>
					<span>2일 이내</span> 출고 (주말, 공휴일 제외)
				</p>
			</ShippingInfo>
			<Flexbox>
				<SubmitButton>카트 추가</SubmitButton>
				<SubmitButton>바로 구매</SubmitButton>
			</Flexbox>
		</Form>
	)
}

export { ProductForm }
