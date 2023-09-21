import { api, clientAPI } from '.'

const serverLogin = async (authData, success) => {
	const client = clientAPI.post('accounts/login/', authData)

	const error = err => {
		return err.response.data
	}

	return api(client)(success, error)
}

const serverLogout = async () => {
	const client = clientAPI.post('accounts/logout/')

	const success = res => res.data.detail
	const error = err => {
		return err.response.data
	}

	return api(client)(success, error)
}

const signupAsBuyer = async (authData, success) => {
	const client = clientAPI.post('accounts/signup/', authData)

	const error = err => {
		return err.response.data
	}

	return api(client)(success, error)
}

const signupAsSeller = async (authData, success) => {
	const client = clientAPI.post('accounts/signup_seller/', authData)

	const error = err => {
		return err.response.data
	}

	return api(client)(success, error)
}

const validateIdFromServer = async (username, callback) => {
	const client = clientAPI.post('accounts/signup/valid/username/', username)

	const success = () => callback(true, '사용 가능한 아이디입니다.')
	const error = err => callback(false, err.response.data.FAIL_Message)

	api(client)(success, error)
}

const validateBrandFromServer = async (brandNumber, callback) => {
	const client = clientAPI.post(
		'accounts/signup/valid/company_registration_number/',
		brandNumber
	)

	const success = () => callback(true, '사용 가능한 사업자등록번호입니다.')
	const error = err => callback(false, err.response.data.FAIL_Message)

	api(client)(success, error)
}

export {
	serverLogin,
	serverLogout,
	signupAsBuyer,
	signupAsSeller,
	validateIdFromServer,
	validateBrandFromServer,
}
