import { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'
import { signupAsBuyer, signupAsSeller } from '../../lib/api'
import useStore from '../../store'

export function SignupPage() {
	useTitle('Sign Up')

	const { isSignedIn } = useStore()
	const navigate = useNavigate()

	useEffect(() => {
		if (isSignedIn) return navigate(-1)
	}, [])

	return (
		<>
			<AuthForm type='signup' />
		</>
	)
}

export const signupAction = async ({ request }) => {
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

	// let client

	const success = () => {
		alert('회원가입에 성공했습니다.')
		return redirect('/auth/signin')
	}

	if (isBuyer) {
		return signupAsBuyer(authData, success)
	} else if (!isBuyer) {
		authData.store_name = data.get('brandName')
		authData.company_registration_number =
			data.get('businessNumber') +
			data.get('businessNumber2') +
			data.get('businessNumber3')

		return signupAsSeller(authData, success)
	}
}
