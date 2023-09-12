import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { FormProvider } from '../../context/form-context'
import { CheckoutForm, CheckoutSummary } from '../../components/checkout'
import { getProduct } from '../../lib/api'
import { getOrderItems } from '../../lib/utils/storage'
import { Wrapper } from './CheckoutPage.style'

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
	}
	if (order_kind === 'direct_order' || order_kind === 'cart_one_order') {
		initialState.productId = product_id
		initialState.quantity = quantity
	}

	useTitle('결제')

	return (
		<FormProvider initialState={initialState}>
			<Wrapper>
				<CheckoutForm order={order} />
				<CheckoutSummary />
			</Wrapper>
		</FormProvider>
	)
}

export const checkoutAction = async ({ request, params }) => {}
