import { redirect, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { CartList, CartSummary } from '../../components/cart'
import { getCart, removeFromCart } from '../../lib/api'
import { getAuthToken, getAccountType } from '../../lib/utils/storage'
import { Wrapper } from './CartPage.style'

export const cartLoader = async () => {
	const isSignedIn = !!getAuthToken()
	const accountType = getAccountType()

	if (!isSignedIn) return null
	if (accountType === 'SELLER') {
		alert('구매 계정만 이용할 수 있는 서비스입니다.')
		return redirect('/')
	}

	const cart = await getCart()

	return cart
}

export function CartPage() {
	const cart = useLoaderData()

	useTitle('장바구니')

	return (
		<Wrapper>
			<CartList cart={cart} />
			<CartSummary />
		</Wrapper>
	)
}

export const cartAction = async ({ request, params }) => {
	const data = Object.fromEntries(await request.formData())

	if (request.method === 'DELETE') {
		const cartItemId = JSON.parse(data.cartItemId)

		cartItemId.forEach(cartItemId => removeFromCart(cartItemId))
	}

	return null
}
