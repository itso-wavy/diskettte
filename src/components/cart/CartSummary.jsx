import { useSubmit } from 'react-router-dom'
import { Button } from '../@ui/Button'
import { formatNumber } from '../../lib/utils/number-formatter'
import { StyledArticle, Wrapper, StyledFlexbox } from './CartSummary.style'
import useStore from '../../store'

function CartSummary({ ...props }) {
	const submit = useSubmit()
	const { cartSummary } = useStore()
	const {
		totalProductPrice,
		totalShippingFee,
		totalDiscount,
		// totalPayment,
		totalQuantity,
	} = cartSummary
	const totalPayment = totalProductPrice + totalShippingFee - totalDiscount

	const orderHandler = e => {
		e.target.value = 'toCart'

		submit('data') // TODO:
	}

	return (
		<StyledArticle {...props}>
			<Wrapper>
				<StyledFlexbox>
					<h2>CART INFO</h2>
				</StyledFlexbox>
				<dl>
					<StyledFlexbox>
						<dt>총 주문 금액</dt>
						<dd>
							<strong>{formatNumber(totalProductPrice)}</strong>원
						</dd>
					</StyledFlexbox>
					<StyledFlexbox>
						<dt>총 배송비</dt>
						<dd>
							<strong>{formatNumber(totalShippingFee)}</strong>원
						</dd>
					</StyledFlexbox>
					<StyledFlexbox>
						<dt>총 할인 금액</dt>
						<dd>
							<strong>{formatNumber(totalDiscount)}</strong>원
						</dd>
					</StyledFlexbox>
				</dl>
				<dl>
					<StyledFlexbox>
						<dt>총 결제 금액</dt>
						<dd>
							<strong>{formatNumber(totalPayment)}</strong>원
						</dd>
					</StyledFlexbox>
				</dl>
			</Wrapper>
			<StyledFlexbox>
				<div className='amount-box'>
					총 <strong>{totalQuantity}</strong>개
				</div>
				<Button name='submitter' onClick={orderHandler}>
					주문하기
				</Button>
			</StyledFlexbox>
		</StyledArticle>
	)
}

export { CartSummary }
