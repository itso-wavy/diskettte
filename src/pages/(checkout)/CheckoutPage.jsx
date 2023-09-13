import { useState } from 'react'
import {
	redirect,
	useActionData,
	useLoaderData,
	useNavigate,
} from 'react-router-dom'
import { useTitle } from '../../hooks'
import { FormProvider } from '../../context/form-context'
import { CheckoutForm } from '../../components/checkout'
import { getProduct, createOrder } from '../../lib/api'
import { getOrderItems } from '../../lib/utils/storage'
import { MinusPaddedWrapper } from './CheckoutPage.style.jsx'

export const checkoutLoader = async () => {
	const { product_id, quantity, order_kind, total_price, cart } =
		getOrderItems()

	if (order_kind === 'direct_order' || order_kind === 'cart_one_order') {
		const response = await getProduct(product_id)
		const price = response.price
		const totalPrice = total_price ? total_price : price * quantity

		return {
			order_kind,
			total_price: totalPrice,
			product_id,
			quantity,
			cart: { ...response, quantity },
		}
	}

	if (order_kind === 'cart_order') {
		const response = {}

		for (let [product_id, qty] of cart) {
			const product = await getProduct(product_id)
			response[product_id] = { ...product, quantity: qty }
		}

		return { order_kind, total_price, cart: response }
	}
}

export function CheckoutPage() {
	const navigate = useNavigate()
	const result = useActionData()

	if (result) {
		// result를 session에 저장

		return navigate('/checkout/confirm')

		/* address: "03048 서울 종로구 청와대로 1 (세종로)"
address_message: "."
buyer: 666
created_at: "2023-09-14T01:17:12.222503"
delivery_status: "COMPLETE_PAYMENT"
order_items: [620]
order_number: 649
order_quantity: [1]
payment_method: "NAVERPAY"
receiver: "김나나"
receiver_phone_number: "01011111111"
total_price: 12500 */
	}

	const order = useLoaderData()
	// 데이터 가져온 후 세션에서 데이터 삭제해야 함 TODO:
	const { order_kind, total_price, cart, product_id, quantity } = order
	const initialState = {
		order_kind,
		total_price,
		receiver: '',
		receiverPhoneNumber: '',
		address: '',
		deliveryRequest: '', // address_message
		paymentMethod: '',
		termsAgree: false,
	}
	if (order_kind === 'direct_order' || order_kind === 'cart_one_order') {
		initialState.productId = product_id
		initialState.quantity = quantity
	}

	useTitle('결제')

	return (
		<MinusPaddedWrapper>
			<FormProvider initialState={initialState}>
				<CheckoutForm order={order} />
			</FormProvider>
		</MinusPaddedWrapper>
	)
}

export const checkoutAction = async ({ request, params }) => {
	const data = await request.formData()
	const orderData = data.get('submitter')

	return createOrder(orderData)
}
