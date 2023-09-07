import { json } from 'react-router-dom'
import { api, clientAPI } from '.'

const getCart = async () => {
	let page = 1
	const client = page => clientAPI(`cart/?page=${page}`)

	const success = res => res.data
	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
		// console.error('😪' + err.message)
		// return
	}

	const cart = []
	const chunkedCart = await api(client(1))(success, error)

	// 페이징 처리 제거하는 재귀 함수
	const getAllCartItems = async response => {
		cart.push(...response.results)

		if (!response.next) return cart

		++page
		const newChunked = await api(client(page))(success, error)

		return getAllCartItems(newChunked)
	}

	return getAllCartItems(chunkedCart)
}

const addToCart = async productId => {
	const client = clientAPI.post('cart/', productId)

	const success = res => res.data
	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
	}

	const cart = api(client)(success, error)
	return cart
}

const removeFromCart = async () => {
	// let page = 1
	// const client = page => clientAPI(`cart/?page=${page}`)
	// const success = res => res.data
	// const error = err => {
	// 	throw json({ message: err.message }, { status: err.response.status })
	// 	// console.error('😪' + err.message)
	// 	// return
	// }
	// const cart = []
	// const chunkedCart = await api(client(1))(success, error)
	// // 페이징 처리 제거하는 재귀 함수
	// const getAllCartItems = async response => {
	// 	cart.push(...response.results)
	// 	if (!response.next) return cart
	// 	++page
	// 	const newChunked = await api(client(page))(success, error)
	// 	return getAllCartItems(newChunked)
	// }
	// return getAllCartItems(chunkedCart)
}

const clearCart = async () => {
	// let page = 1
	// const client = page => clientAPI(`cart/?page=${page}`)
	// const success = res => res.data
	// const error = err => {
	// 	throw json({ message: err.message }, { status: err.response.status })
	// 	// console.error('😪' + err.message)
	// 	// return
	// }
	// const cart = []
	// const chunkedCart = await api(client(1))(success, error)
	// // 페이징 처리 제거하는 재귀 함수
	// const getAllCartItems = async response => {
	// 	cart.push(...response.results)
	// 	if (!response.next) return cart
	// 	++page
	// 	const newChunked = await api(client(page))(success, error)
	// 	return getAllCartItems(newChunked)
	// }
	// return getAllCartItems(chunkedCart)
}

export { getCart, addToCart, removeFromCart, clearCart }

// addToCart: product =>
// 	set(state => {
// 		const newCart = state.cart.concat(product)
// 		return update(newCart)
// 	}),
// removeFromCart: productId =>
// 	set(state => {
// 		const newCart = state.cart.filter(item => item.product_id !== productId)
// 		return update(newCart)
// 	}),
// clearCart: () =>
// 	set(() => {
// 		const newCart = []
// 		return update(newCart)
// 	}),

// const cart ={
//   get: getSessionCart,
//   post: updateSessionCart,
//   delete: removeCartFromSession,
// }

// GET /cart/
// POST /cart/
// GET /cart/
// PUT /cart/
// DELETE /cart/
// DELETE /cart/<int:cart_item_id>/
