import { redirect, useActionData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'
import axios from 'axios'

export function SigninPage() {
	useTitle('Sign In')

	const response = useActionData()

	const serverMessages = {
		loginFail:
			response?.FAIL_Message &&
			'아이디, 비밀번호 또는 로그인 유형이 일치하지 않습니다.',
	}

	return (
		<>
			<AuthForm type='signin' serverMessages={serverMessages} />
		</>
	)
}

export const signinAction = async ({ request, params }) => {
	const searchParams = new URL(request.url).searchParams
	const userParam = searchParams.get('user')
	const isBuyer = userParam !== 'seller'

	const data = await request.formData()

	const authData = {
		username: data.get('id'),
		password: data.get('password'),
		login_type: isBuyer ? 'BUYER' : 'SELLER',
	}

	try {
		const response = await axios.post(
			'https://openmarket.weniv.co.kr/accounts/login/',
			authData
		)

		if (response.status === 200) {
			return redirect('/mypage')
		}
	} catch (err) {
		return err.response.data
	}
}
