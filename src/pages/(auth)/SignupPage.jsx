import { redirect } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'
import { api, clientAPI } from '../../lib/api'
import axios from 'axios'

export function SignupPage() {
	useTitle('Sign Up')

	return (
		<>
			<AuthForm type='signup' />
		</>
	)
}

export const signupAction = async ({ request, params }) => {
	const searchParams = new URL(request.url).searchParams
	const userParam = searchParams.get('user')
	const isBuyer = userParam !== 'seller'

	const data = await request.formData()

	const authData = {
		username: data.get('id'),
		password: data.get('password'),
		password2: data.get('passwordConfirm'),
		name: data.get('username'),
		phone_number:
			data.get('phoneNumber') +
			data.get('phoneNumber2') +
			data.get('phoneNumber3'),
	}

	let client = clientAPI.post('accounts/signup/', authData)

	if (!isBuyer) {
		authData.store_name = data.get('brandName')
		authData.company_registration_number =
			data.get('businessNumber') +
			data.get('businessNumber2') +
			data.get('businessNumber3')

		client = clientAPI.post('accounts/signup_seller/', authData)
	}

	const success = () => {
		return redirect('/auth/signin')
	}
	const error = err => {
		return err.response.data
	}

	return api(client)(success, error)

	// try {
	// 	let response

	// 	if (isBuyer) {
	// 		response = await axios.post(
	// 			'https://openmarket.weniv.co.kr/accounts/signup/',
	// 			authData
	// 		)
	// 	} else if (!isBuyer) {
	// 		authData.store_name = data.get('brandName')
	// 		authData.company_registration_number =
	// 			data.get('businessNumber') +
	// 			data.get('businessNumber2') +
	// 			data.get('businessNumber3')

	// 		response = await axios.post(
	// 			'https://openmarket.weniv.co.kr/accounts/signup_seller/',
	// 			authData
	// 		)
	// 	}

	// 	if (response.status === 201) {
	// 		return redirect('/auth/signin')
	// 	}
	// } catch (err) {
	// 	return err.response.data
	// }
}
