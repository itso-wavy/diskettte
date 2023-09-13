import { json } from 'react-router-dom'
import { api, clientAPI } from '.'

// GET /order/
// POST /order/
// POST /order/
// POST /order/

const getOrder = async () => {
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

const createOrder = async orderData => {
	const client = clientAPI.post('order/', orderData)

	const success = res => res.data
	const error = err => {
		throw json(
			{ message: JSON.stringify(err.response.data) },
			{ status: err.response.status }
		)
	}

	return api(client)(success, error)
}

export { getOrder, createOrder }
