import { useContext } from 'react'
import { FormContext } from '../../context/form-context'
import { QuantitySpinner } from '.'
import { Button } from '../@ui/Button'
import { Flexbox } from '../@ui/Form'
import { formatNumber } from '../../lib/utils/number-formatter'
import { Wrapper, ShippingInfo } from './ProductForm.style.jsx'
import { useFetcher } from 'react-router-dom'

function ProductForm({ product, ...props }) {
	const {
		seller: brandId,
		store_name: brandName,
		product_name,
		price,
		shipping_fee,
		shipping_method,
		stock,
	} = product

	const fetcher = useFetcher()
	const { values } = useContext(FormContext)
	const name = 'qty'
	const qty = values[name]

	return (
		<Wrapper>
			<fetcher.Form method='POST' {...props}>
				<Flexbox $direction='row' className='amount-select'>
					<p className='title'>{product_name}</p>
					<QuantitySpinner name={name} stock={stock} />
				</Flexbox>
				<Flexbox $direction='row' className='total-price'>
					<p className='title'>총 상품 금액</p>
					<p>
						{formatNumber(price * qty)}
						<span className='currency'>원</span>
					</p>
				</Flexbox>

				<ShippingInfo>
					<p className='title'>배송 정보</p>
					<p>
						{shipping_method === 'PARCEL' ? '직배송' : '택배배송'} / 배송비{' '}
						{shipping_fee ? (
							<strong>{formatNumber(shipping_fee)}</strong>
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
							<Button
								$style='secondary'
								name='submitter'
								onClick={e => (e.target.value = 'toCart')}
							>
								카트 추가
							</Button>
							<Button
								name='submitter'
								onClick={e => (e.target.value = 'toOrder')}
							>
								바로 구매
							</Button>
						</>
					) : (
						<Button type='button'>재입고 알림 신청</Button>
					)}
				</Flexbox>
			</fetcher.Form>
		</Wrapper>
	)
}

export { ProductForm }
