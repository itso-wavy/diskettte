import { redirect, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { FormProvider } from '../../context/form-context'
import { CheckoutForm } from '../../components/checkout'
import { Section } from '../../components/@motion'
import { getProduct, createOrder } from '../../lib/api'
import { getOrderItems, setOrderConfirm } from '../../lib/utils/storage'
import { MinusPaddedWrapper } from './CheckoutPage.style.jsx'

export const checkoutLoader = async () => {
	const orderItem = getOrderItems()

	const { product_id, quantity, order_kind, cart } = orderItem

	if (order_kind === 'direct_order' || order_kind === 'cart_one_order') {
		const response = await getProduct(product_id)

		return {
			order_kind,
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

		return {
			order_kind,
			cart: response,
		}
	}
}

export function CheckoutPage() {
	const order = useLoaderData()

	const { order_kind, product_id, quantity } = order

	const initialState = {
		order_kind,
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
			<Section sectionId='checkout' sectionTitle='배송/결제 정보 입력'>
				<FormProvider initialState={initialState}>
					<CheckoutForm order={order} />
				</FormProvider>
			</Section>
		</MinusPaddedWrapper>
	)
}

export const checkoutAction = async ({ request, params }) => {
	const data = await request.formData()
	const orderData = data.get('submitter')

	const success = res => {
		setOrderConfirm(res.data)

		return redirect('/checkout/confirm')
	}

	return createOrder(orderData, success)
}
