import { json } from 'react-router-dom'
import { api, clientAPI } from '../api'

const getProducts = async () => {
	let page = 1
	const client = page => clientAPI(`products/?page=${page}`)

	const success = res => res.data
	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
	}

	const products = []
	const chunkedProducts = await api(client(1))(success, error)

	// 페이징 처리 제거하는 재귀 함수
	const getAllProducts = async response => {
		products.push(...response.results)

		if (!response.next) return products

		++page
		const newChunked = await api(client(page))(success, error)

		return getAllProducts(newChunked)
	}

	return getAllProducts(chunkedProducts)
}

// const ignorePaging = (page, firstPageResponse, success, error) => {
// 	const array = []

// 	const getAllItems = async response => {
// 		array.push(...response.results)

// 		if (!response.next) return array

// 		++page
// 		const newChunked = await api(client(page))(success, error)

// 		return getAllItems(newChunked)
// 	}

// 	return getAllItems(firstPageResponse)
// }

const getProduct = async product_id => {
	const client = clientAPI(`products/${product_id}`)

	const success = res => res.data
	const error = err => {
		throw json(
			{ message: err.response.statusText },
			{ status: err.response.status }
		)
	}

	return await api(client)(success, error)
}

export { getProducts, getProduct }

// GET /products/

// POST /products/
// GET /products/<int:product_id>/
// PUT /products/<int:product_id>/
// DELETE /products/<int:product_id>/
// GET /products/?search=입력값
