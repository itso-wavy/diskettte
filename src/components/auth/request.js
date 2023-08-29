import axios from 'axios'

/* const TOKEN = localStorage.getItem('token') */

const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_API,
	timeout: import.meta.env.VITE_BASE_API_TIMEOUT,
	headers: {
		'Content-type': 'application/json',
	},
	// withCredentials: true,
})

service.interceptors.request.use(
	config => {
		config.headers.Authorization = 'JWT eyJ0eXAiOiJKV1Qi...'

		// config.headers['Access-Control-Allow-Origin'] = '*'
		// config.headers['Access-Control-Allow-Headers'] = '*'
		/* 
		if (!TOKEN) {
			config.headers['Authorization'] = `Bearer ${localStorage.getItem(
				'token'
			)}`
		}
     */
		return config
	},
	error => Promise.reject(error)
)

service.interceptors.response.use(
	response => {
		return response
	},
	error => {
		if (error.code === 'ECONNABORTED') {
			error.message = '서버 요청에 실패했습니다. 다시 시도해주세요.'
		}

		if (error.response) {
			return Promise.reject(error.response)
		}

		return Promise.reject(error)
	}
)

export default service
