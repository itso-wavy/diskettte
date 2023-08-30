import { redirect, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { api, clientAPI } from '../../lib/api'
import { getAccountType } from '../../lib/utils/getAuthInfo'

export const cartLoader = () => {
	const accountType = getAccountType()
	if (accountType === 'SELLER') {
		alert('구매 계정만 이용할 수 있는 서비스입니다.')
		return redirect('/')
	}

	const client = clientAPI('cart')

	const success = res => res.data
	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
	}

	return api(client)(success, error)
}

export function CartPage() {
	useTitle('장바구니')

	const cart = useLoaderData()
	console.log('cart: ', cart)

	return <div>CartPage</div>
}
