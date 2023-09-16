import { json } from 'react-router-dom'
import { api, clientAPI } from '.'

const getOrder = async pageParam => {
	const client = clientAPI(`order/?page=${pageParam}`)

	const success = res => res.data

	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
	}

	return api(client)(success, error)
}

const createOrder = async (orderData, success) => {
	const client = clientAPI.post('order/', orderData)

	const error = err => {
		throw json(
			{ message: JSON.stringify(err.response.data) },
			{ status: err.response.status }
		)
	}

	return api(client)(success, error)
}

export { getOrder, createOrder }
