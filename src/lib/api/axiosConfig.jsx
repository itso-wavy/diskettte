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

const firebaseAPI = axios.create({
	baseURL: baseURL.firebase,
})

// export const axiosInstanceMultiForm = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });

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

export { api, clientAPI, firebaseAPI }

clientAPI.interceptors.request.use(
	config => {
		// 요청 보내기 전 실행
		const token = getAuthToken()

		if (token) config.headers.Authorization = `JWT ${token}`

		return config
	},
	error => Promise.reject(error)
)

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

// axiosInstanceMultiForm.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config = { ...config };
//       config.headers = { ...config.headers } || {};
//       config.headers.Authorization = `JWT  ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );
