import { json } from 'react-router-dom'
import { api, firebaseAPI, clientAPI, clientFormAPI } from '../api'
import { debounce } from '../utils/debounce'

const getBanners = async () => {
	const brands = firebaseAPI('banners.json')

	const success = res => res.data
	const error = err => {
		// throw json(
		// 		{ message: err.message || err.response?.statusText },
		// 		{ status: err.response.status }
		// 	)
		const res = err.response
		throw json({ message: res.data.error }, { status: res.status })
	}

	return api(brands)(success, error)
}

const getBrands = async () => {
	const brands = firebaseAPI('brands.json')

	const success = res => res.data
	const error = err => {
		const res = err.response
		throw json({ message: res.data.error }, { status: res.status })
	}

	return api(brands)(success, error)
}

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

const getProducts = async (curPage, pageLimit) => {
	const client = page => clientAPI(`products/?page=${page}`)

	const success = res => res.data
	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
	}

	if (curPage) return api(client(curPage))(success, error)

	let page = 1
	const products = []
	const chunkedProducts = await api(client(1))(success, error)

	// 페이징 처리 제거하는 재귀 함수
	const getAllProducts = async response => {
		products.push(...response.results)

		if (!response.next || page === pageLimit) return products

		++page
		const newChunked = await api(client(page))(success, error)

		return getAllProducts(newChunked)
	}

	return getAllProducts(chunkedProducts)
}

const getSellerProducts = async pageParam => {
	const client = clientAPI(`seller/?page=${pageParam}`)

	const success = res => res.data
	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
	}

	return api(client)(success, error)
}

const createProduct = async (productData, success) => {
	const client = clientFormAPI.post('products/', productData)

	const error = err => {
		throw json(
			{ message: JSON.stringify(err.response.data) },
			{ status: err.response.status }
		)
	}

	return api(client)(success, error)
}

const updateProduct = async (productId, productData, success) => {
	const client = clientFormAPI.put(`products/${productId}/`, productData)

	const error = err => {
		throw json(
			{ message: JSON.stringify(err.response.data) },
			{ status: err.response.status }
		)
	}

	return api(client)(success, error)
}

const deleteProduct = async (productId, success) => {
	const client = clientAPI.delete(`products/${productId}`)

	const error = err => {
		throw json(
			{ message: JSON.stringify(err.response.data) },
			{ status: err.response.status }
		)
	}

	return api(client)(success, error)
}

const searchProduct = async (keyword, success, debounceTime) => {
	const client = clientAPI(`products/?search=${keyword}`)

	const error = err => console.log(err)

	debounce(api(client), debounceTime)(success, error)
}

export {
	getBanners,
	getBrands,
	getProducts,
	getProduct,
	getSellerProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	searchProduct,
}
