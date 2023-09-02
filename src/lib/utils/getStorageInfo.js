import { api, clientAPI } from '../api'

const getAuthToken = () => {
	const token = JSON.parse(localStorage.getItem('auth'))?.state.token

	return token
}

const getAccountType = () => {
	const accountType = JSON.parse(localStorage.getItem('auth'))?.state
		.accountType

	return accountType
}

const getCart = () => {
	const getServerCart = async () => {
		const client = clientAPI('cart')

		const success = res => res.data.results
		const error = err => {
			throw json({ message: err.message }, { status: err.response.status })
		}

		const cart = await api(client)(success, error)
		updateCart(cart)

		return cart
	}

	const cart = JSON.parse(localStorage.getItem('cart')) ?? getServerCart()

	return cart
}

const updateCart = newCart => {
	const cartJson = JSON.stringify(newCart)
	localStorage.setItem('cart', cartJson)
}

export { getAuthToken, getAccountType, getCart, updateCart }
