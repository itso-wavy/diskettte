import axios from 'axios'

const baseURL = {
	client: 'https://openmarket.weniv.co.kr/',
	firebase: '/data',
}

const clientAPI = axios.create({
	baseURL: baseURL.client,
	headers: {
		// Authorization: `JWT ${token}`,
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
		const response = await axiosInstance

		try {
			if (response.status >= 200 && response.status < 300) {
				return success(response)
			}
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
		const token = localStorage.getItem('token')

		if (token) config.headers.Authorization = `JWT ${token}`

		return config
	},
	error => Promise.reject(error)
)

clientAPI.interceptors.response.use(
	response => {
		// 응답 받은 후 실행
		return response
	},
	error => {
		// const isTokenMissing = error.response?.data.details === 'Token is missing'
		// if (isTokenMissing) {
		// 	// toast.dismiss();
		// 	// toast.clearWaitingQueue();
		// 	// toast.warning("로그인을 해주세요.");
		// } else {
		// 	// toast.dismiss();
		// 	// toast.clearWaitingQueue();
		// 	// toast.warning(error.response?.data.details);
		// }
		return Promise.reject(error)
	}
)

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
