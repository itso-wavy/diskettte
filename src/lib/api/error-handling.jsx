const success = res => res.data

const error = err => {
	throw json(
		{ message: err.message || err.response?.statusText },
		{ status: err.response.status }
	)
}
