import axios from 'axios'
import { getAuthToken } from '../utils/storage'

const baseURL = {
	client: 'https://openmarket.weniv.co.kr/',
	firebase: 'https://diskettte-00-default-rtdb.firebaseio.com/',
}

const clientAPI = axios.create({
	baseURL: baseURL.client,
	headers: {
		'content-type': 'Application/json; charset=UTF=8',
	},
})

const clientFormAPI = axios.create({ ...clientAPI.defaults })

clientFormAPI.defaults.headers['content-type'] = 'multipart/form-data'

const firebaseAPI = axios.create({
	baseURL: baseURL.firebase,
})

const api = axiosInstance => {
	const request = async (success, error) => {
		try {
			const response = await axiosInstance

			if (response.status >= 200 && response.status < 300) {
				return success(response)
			}
			throw new Error()
		} catch (err) {
			return error(err)
		}
	}

	return request
}

export { api, clientAPI, clientFormAPI, firebaseAPI }

const requestAuth = [
	config => {
		// 요청 보내기 전 실행
		const token = getAuthToken()

		if (token) config.headers.Authorization = `JWT ${token}`

		return config
	},
	error => Promise.reject(error),
]

clientAPI.interceptors.request.use(...requestAuth)
clientFormAPI.interceptors.request.use(...requestAuth)

// clientAPI.interceptors.response.use(
// 	response => {
// 		// 응답 받은 후 실행
// 		return response
// 	},
// 	error => {
// 		// const isTokenMissing = error.response?.data.details === 'Token is missing'
// 		// if (isTokenMissing) {
// 		// 	// toast.dismiss();
// 		// 	// toast.clearWaitingQueue();
// 		// 	// toast.warning("로그인을 해주세요.");
// 		// } else {
// 		// 	// toast.dismiss();
// 		// 	// toast.clearWaitingQueue();
// 		// 	// toast.warning(error.response?.data.details);
// 		// }
// 		return Promise.reject(error)
// 	}
// )
