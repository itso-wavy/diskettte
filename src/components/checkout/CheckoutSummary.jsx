import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../context/form-context'
import { FormInput, SubmitButton } from '../@ui/Form'
import { Accordion } from '../@ui/Accordion'
import { DropdownSvg } from '../@svg/DropdownSvg'
import { formatNumber } from '../../lib/utils/number-formatter'
import {
	StyledFieldset,
	StyledLi,
	Wrapper,
	StyledFlexbox,
	ButtonBox,
} from './CheckoutSummary.style'

function CheckoutItem({ item, ...props }) {
	const { quantity, image, price, product_name, store_name } = item

	return (
		<StyledLi {...props}>
			<div className='info-box'>
				<p className='store'>{store_name}</p>
				<p className='product'>{product_name}</p>
				<p>
					<span className='price'>{formatNumber(price * quantity)}</span>
					<span className='unit'>원</span>
					<span className='qty'>
						{' '}
						/ {quantity}
						<span className='unit'>개</span>
					</span>
				</p>
			</div>
			<div className='img-box'>
				<img src={image} alt={product_name} />
			</div>
		</StyledLi>
	)
}

function CheckoutSummary({ order, ...props }) {
	const initialState = {
		totalProductPrice: 0,
		totalShippingFee: 0,
		totalDiscount: 0,
		totalQuantity: 0,
		totalPayment: 0,
	}
	const [summary, setSummary] = useState(initialState)
	const { order_kind, cart, quantity } = order

	useEffect(() => {
		let {
			totalProductPrice,
			totalShippingFee,
			totalDiscount,
			totalQuantity,
			totalPayment,
		} = initialState

		if (order_kind === 'cart_order') {
			for (const productId in cart) {
				const product = cart[productId]

				totalProductPrice += product.price * product.quantity
				totalShippingFee += product.shipping_fee
				totalDiscount += 0
				totalQuantity += 1
			}
			totalPayment += totalProductPrice + totalShippingFee - totalDiscount

			setSummary({
				totalProductPrice,
				totalShippingFee,
				totalDiscount,
				totalQuantity,
				totalPayment,
			})
		} else if (
			order_kind === 'cart_one_order' ||
			order_kind === 'direct_order'
		) {
			totalProductPrice = cart.price * cart.quantity
			totalShippingFee = cart.shipping_fee
			totalDiscount = 0
			totalQuantity = 1
			totalPayment = totalProductPrice + totalShippingFee - totalDiscount

			setSummary({
				totalProductPrice,
				totalShippingFee,
				totalDiscount,
				totalQuantity,
				totalPayment,
			})
		}
	}, [cart])

	const { values } = useContext(FormContext)

	const checkoutHandler = e => {
		const {
			address,
			deliveryRequest,
			order_kind,
			paymentMethod,
			productId,
			receiver,
			receiverPhoneNumber,
		} = values

		// TODO:
		const availableMethod = [
			'CARD',
			'DEPOSIT',
			'PHONE_PAYMENT',
			'NAVERPAY',
			'KAKAOPAY',
		]
		const isAvailableMethod = availableMethod.find(
			method => paymentMethod === method
		)

		const orderData = {
			product_id: productId,
			quantity: quantity,
			order_kind: order_kind,
			total_price: summary.totalPayment,
			receiver: receiver,
			receiver_phone_number: '0' + receiverPhoneNumber,
			address: address,
			address_message: deliveryRequest || '​',
			payment_method: isAvailableMethod ? paymentMethod : 'NAVERPAY',
		}

		e.target.value = JSON.stringify(orderData)
	}

	return (
		<StyledFieldset {...props}>
			<Accordion
				collapsed={true}
				title={`주문 상품 정보 (${summary.totalQuantity}건)`}
				icon={[
					<DropdownSvg style={{ transform: 'rotate(90deg)' }} />,
					<DropdownSvg style={{ transform: 'rotate(270deg)' }} />,
				]}
				id='checkout-summary'
			>
				<ul>
					{order_kind !== 'cart_order' && <CheckoutItem item={cart} />}
					{order_kind === 'cart_order' &&
						Object.entries(cart).map(([key, item]) => (
							<CheckoutItem key={key} item={item} />
						))}
				</ul>
			</Accordion>
			<Wrapper>
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
			<ButtonBox>
				<FormInput
					required
					type='checkbox'
					id='termsAgree'
					name='termsAgree'
					info={
						<>
							주문 내용을 확인하였으며{' '}
							<Link to='' className='link'>
								필수 정보 제공
							</Link>
							에 동의합니다.
						</>
					}
				/>
				<SubmitButton name='submitter' onClick={checkoutHandler}>
					결제하기
				</SubmitButton>
			</ButtonBox>
		</StyledFieldset>
	)
}

export { CheckoutSummary }
