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

	const cart = JSON.parse(sessionStorage.getItem('cart')) ?? getServerCart()

	return cart
}

const updateCart = newCart => {
	const cartJson = JSON.stringify(newCart)
	sessionStorage.setItem('cart', cartJson)
}

const setOrderItems = cartItem => {
	sessionStorage.setItem('order', JSON.stringify(cartItem))
}

const getOrderItems = () => {
	const orderItem = JSON.parse(sessionStorage.getItem('order'))

	return orderItem
}

export {
	getAuthToken,
	getAccountType,
	getCart,
	updateCart,
	setOrderItems,
	getOrderItems,
}
