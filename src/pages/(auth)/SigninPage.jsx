import { useEffect } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'
import { serverLogin } from '../../lib/api'
import useStore from '../../store'

export function SigninPage() {
	const { signInHandler } = useStore()
	const authInfo = useActionData()
	const navigate = useNavigate()

	useEffect(() => {
		if (authInfo?.token) {
			signInHandler(authInfo)

			return navigate('/')
		}
	}, [authInfo, signInHandler, navigate])

	useTitle('Sign In')

	return (
		<>
			<AuthForm type='signin' />
		</>
	)
}

export const signinAction = async ({ request }) => {
	const searchParams = new URL(request.url).searchParams
	const userParam = searchParams.get('user')
	const isBuyer = userParam !== 'seller'

	const data = await request.formData()

	const authData = {
		username: data.get('id'),
		password: data.get('password'),
		login_type: isBuyer ? 'BUYER' : 'SELLER',
	}

	const success = res => {
		alert(`${authData.username}님, 반갑습니다.`)
		return res.data
	}

	return serverLogin(authData, success)
}
