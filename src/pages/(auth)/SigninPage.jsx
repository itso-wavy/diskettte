import { useEffect } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'
import { api, clientAPI } from '../../lib/api'
import useStore from '../../store'
// import axios from 'axios'

export function SigninPage() {
	useTitle('Sign In')

	const { signInHandler } = useStore()
	const authInfo = useActionData()
	const navigate = useNavigate()

	useEffect(() => {
		if (authInfo?.token) {
			signInHandler(authInfo)

			return navigate('/mypage')
		}
	}, [authInfo, navigate, signInHandler])

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

	const client = clientAPI.post('accounts/login/', authData)

	const success = res => {
		/* 
      id: 670
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2NzAsImVtYWlsIjoiIiwidXNlcm5hbWUiOiJidXllcjk5IiwiZXhwIjoxNjkzNTY3MTM2fQ.WKHr6x35Q2LDDcRtq7DAooiq-FFQNKgMyOC1HVeGgHA"
      user_type: "BUYER" 
    */
		alert(`${authData.username}님, 반갑습니다.`)

		return res.data

		// return redirect('/mypage')
		// window.location.href = '/auth/signin_success'
		// console.log(res.data)

		// const redirect = () => {
		// 	window.location.href = '/mypage/orders'
		// 	console.log(12345)
		// 	return res
		// }

		// return redirect()

		// new Response(JSON.stringify(res.data), {
		// 	status: 302,
		// 	headers: {
		// 		Location: '/mypage',
		// 	},
		// })
		// return toast.success('로그인 성공.')
	}
	const error = err => {
		return err.response.data
	}

	return api(client)(success, error)

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
