import { useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { FormProvider } from '../../context/form-context'
import { CheckoutForm } from '../../components/checkout'
import { api, clientAPI } from '../../lib/api'
import { getOrderItems } from '../../lib/utils/storage'
import { Wrapper } from './CheckoutPage.style'

export const checkoutLoader = async () => {
	// 하나만 구매시...
	const { product_id, quantity, order_kind } = getOrderItems()

	const client = clientAPI(`products/${product_id}`)

	const success = res => res.data
	const error = err => {
		throw json(
			{ message: err.response.statusText },
			{ status: err.response.status }
		)
	}

	const response = await api(client)(success, error)

	return [{ ...response, quantity, order_kind }]
}

export function CheckoutPage() {
	useTitle('결제')

	const cartItems = useLoaderData()
	const [
		{
			image,
			price,
			product_id,
			product_name,
			quantity,
			seller: brandId,
			store_name: brandName,
			shipping_fee,
			shipping_method,
			stock,
			order_kind,
		},
	] = cartItems
	/* 
  created_at: "2023-09-04T14:49:03.334793"
image: "https://openmarket.weniv.co.kr/media/products/2023/09/04/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-03_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.24.29_LyloW9B.png"
order_kind: "direct_order"
price: 23000
product_id: 625
product_info: "우사기"
product_name: "우사기"
quantity: 1
seller: 653
shipping_fee: 2500
shipping_method: "DELIVERY"
stock: 10
store_name: "호두까기네"
updated_at: "2023-09-04T14:51:39.579995" */

	return (
		<Wrapper>
			<FormProvider
				initialState={{
					product_id: '',
					quantity: '',
					order_kind: '',
					total_price: 0,
					receiver: '',
					receiver_phone_number: '',
					address: '',
					address_message: '',
					payment_method: '',
				}}
			>
				<CheckoutForm cartItems={cartItems} />
			</FormProvider>
		</Wrapper>
	)
}

export const checkoutAction = async ({ request, params }) => {}
