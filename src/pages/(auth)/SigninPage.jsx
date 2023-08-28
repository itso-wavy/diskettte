import { redirect } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'
import useStore from '../../store'
import { api, clientAPI } from '../../lib/api'
// import axios from 'axios'

export function SigninPage() {
	useTitle('Sign In')

	return (
		<>
			<AuthForm type='signin' />
		</>
	)
}

export const signinAction = async ({ request, params }) => {
	const { signInHandler, toast } = useStore()
	const searchParams = new URL(request.url).searchParams
	const userParam = searchParams.get('user')
	const isBuyer = userParam !== 'seller'

	const data = await request.formData()

	const authData = {
		username: data.get('id'),
		password: data.get('password'),
		login_type: isBuyer ? 'BUYER' : 'SELLER',
	}

	const client = clientAPI.post('accounts/login/', authData)

	const success = res => {
		signInHandler(res)
		redirect('/mypage')
		return toast.success('로그인 되었습니다.')
	}
	const error = err => {
		return err.response.data
	}

	return api(client)(success, error)

	/* 
      id: 670
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2NzAsImVtYWlsIjoiIiwidXNlcm5hbWUiOiJidXllcjk5IiwiZXhwIjoxNjkzNTY3MTM2fQ.WKHr6x35Q2LDDcRtq7DAooiq-FFQNKgMyOC1HVeGgHA"
      user_type: "BUYER" 
    */

	// try {
	// 	const response = await axios.post(
	// 		'https://openmarket.weniv.co.kr/accounts/login/',
	// 		authData
	// 	)

	// 	if (response.status === 200) {

	// 		signInHandler(response)
	// 		redirect('/mypage')
	// 		return toast.success('로그인 되었습니다.')
	// 	}
	// } catch (err) {
	// 	return err.response.data
	// }
}
