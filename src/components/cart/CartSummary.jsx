import { useEffect, useState } from 'react'
import { Button } from '../@ui/Button'
import { formatNumber } from '../../lib/utils/number-formatter'
import { StyledArticle, Wrapper, StyledFlexbox } from './CartSummary.style'
import useStore from '../../store'
import { useSubmit } from 'react-router-dom'

function CartSummary({ ...props }) {
	const initialState = {
		totalProductPrice: 0,
		totalShippingFee: 0,
		totalDiscount: 0,
		totalQuantity: 0,
		totalPayment: 0,
	}
	const { cart, isSelectAll } = useStore()
	const [summary, setSummary] = useState(initialState)
	const submit = useSubmit()

	useEffect(() => {
		let {
			totalProductPrice,
			totalShippingFee,
			totalDiscount,
			totalQuantity,
			totalPayment,
		} = initialState

		for (const productId in cart) {
			const product = cart[productId]
			if (product.isActive && !product.isSoldout) {
				totalProductPrice += product.price * product.qty
				totalShippingFee += product.shippingFee
				totalDiscount += product.discount
				totalQuantity += 1
				totalPayment += totalProductPrice + totalShippingFee - totalDiscount
			}
		}

		setSummary({
			totalProductPrice,
			totalShippingFee,
			totalDiscount,
			totalQuantity,
			totalPayment,
		})
	}, [cart, isSelectAll])

	const orderHandler = e => {
		submit() // TODO:
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
							<strong>{formatNumber(summary.totalProductPrice)}</strong>원
						</dd>
					</StyledFlexbox>
					<StyledFlexbox>
						<dt>총 배송비</dt>
						<dd>
							<strong>{formatNumber(summary.totalShippingFee)}</strong>원
						</dd>
					</StyledFlexbox>
					<StyledFlexbox>
						<dt>총 할인 금액</dt>
						<dd>
							<strong>{formatNumber(summary.totalDiscount)}</strong>원
						</dd>
					</StyledFlexbox>
				</dl>
				<dl>
					<StyledFlexbox>
						<dt>총 결제 금액</dt>
						<dd>
							<strong>{formatNumber(summary.totalPayment)}</strong>원
						</dd>
					</StyledFlexbox>
				</dl>
			</Wrapper>
			<StyledFlexbox>
				<div className='amount-box'>
					총 <strong>{summary.totalQuantity}</strong>개
				</div>
				<Button name='submitter' onClick={orderHandler}>
					주문하기
				</Button>
			</StyledFlexbox>
		</StyledArticle>
	)
}

export { CartSummary }
