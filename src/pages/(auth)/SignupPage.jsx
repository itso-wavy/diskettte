import { redirect, useActionData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'
import axios from 'axios'

export function SignupPage() {
	useTitle('Sign Up')

	const response = useActionData()

	const serverMessages = {
		id: response?.username?.[0],
		phoneNumber: response?.phone_number?.[0],
		businessNumber: response?.company_registration_number?.[0],
		brandName: response?.store_name?.[0],
	}

	return (
		<>
			<AuthForm type='signup' serverMessages={serverMessages} />
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

	try {
		let response

		if (isBuyer) {
			response = await axios.post(
				'https://openmarket.weniv.co.kr/accounts/signup/',
				authData
			)
		} else if (!isBuyer) {
			authData.store_name = data.get('brandName')
			authData.company_registration_number =
				data.get('businessNumber') +
				data.get('businessNumber2') +
				data.get('businessNumber3')

			response = await axios.post(
				'https://openmarket.weniv.co.kr/accounts/signup_seller/',
				authData
			)
		}

		if (response.status === 201) {
			return redirect('/auth/signin')
		}
	} catch (err) {
		return err.response.data
	}
}
