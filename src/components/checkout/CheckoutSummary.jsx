import { useState } from 'react'
import { FormInput, SubmitButton } from '../@ui/Form'
import { Link } from 'react-router-dom'
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
	/*  quantity: 1
      created_at: "2023-09-03T16:10:16.136753"
      image: "https://openmarket.weniv.co.kr/media/products/2023/09/04/%E1%84%92%E1%85%A1%E1%84%8E%E1%85%B5%E1%84%8B%E1%85%AA%E1%84%85%E1%85%A6.jpeg"
      price: 10000
      product_id: 620
      product_info: "하치와레"
      product_name: "하치와레"
      seller: 653
      shipping_fee: 2500
      shipping_method: "DELIVERY"
      stock: 2
      store_name: "호두까기네"
      updated_at: "2023-09-10T22:06:01.549023" */
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
	const [summary, setSummary] = useState({})
	const { order_kind, total_price, cart, product_id, quantity } = order
	/* const 전체주문 = {
		order_kind: 'cart_order',
		total_price: 227500,
		cart: {
			620: {
        quantity: 1
				created_at: "2023-09-03T16:10:16.136753"
        image: "https://openmarket.weniv.co.kr/media/products/2023/09/04/%E1%84%92%E1%85%A1%E1%84%8E%E1%85%B5%E1%84%8B%E1%85%AA%E1%84%85%E1%85%A6.jpeg"
        price: 10000
        product_id: 620
        product_info: "하치와레"
        product_name: "하치와레"
        seller: 653
        shipping_fee: 2500
        shipping_method: "DELIVERY"
        stock: 2
        store_name: "호두까기네"
        updated_at: "2023-09-10T22:06:01.549023"
			},
		},
	} 
 
	const 바로주문 = {
		order_kind: 'cart_one_order', 또는 "direct_order"
    total_price: 10000,
    product_id: 620,
    quantity: 1,
		cart: {
      quantity: 1
      created_at: "2023-09-03T16:10:16.136753"
      image: "https://openmarket.weniv.co.kr/media/products/2023/09/04/%E1%84%92%E1%85%A1%E1%84%8E%E1%85%B5%E1%84%8B%E1%85%AA%E1%84%85%E1%85%A6.jpeg"
      price: 10000
      product_id: 620
      product_info: "하치와레"
      product_name: "하치와레"
      seller: 653
      shipping_fee: 2500
      shipping_method: "DELIVERY"
      stock: 2
      store_name: "호두까기네"
      updated_at: "2023-09-10T22:06:01.549023"
		},
	}
  */
	const orderQuantity =
		order_kind === 'cart_order' ? Object.keys(cart).length : 1

	return (
		<StyledFieldset>
			<Accordion
				collapsed={true}
				title={`주문 상품 정보 (${orderQuantity}건)`}
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
				<SubmitButton>결제하기</SubmitButton>
			</ButtonBox>
		</StyledFieldset>
	)
}

export { CheckoutSummary }
