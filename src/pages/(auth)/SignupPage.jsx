import { json, redirect, useActionData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'
import axios from 'axios'

export function SignupPage() {
	useTitle('Sign Up')

	const response = useActionData()

	// const serverMessages = {
	// 	// id: response?.username[0] && '이미 사용 중인 아이디입니다.',
	// 	id: response?.username[0] === '해당 사용자 아이디는 이미 존재합니다.',
	// 	phoneNumber:
	// 		response?.phone_number[0] === '해당 사용자 전화번호는 이미 존재합니다',
	// 	// response?.phone_number[0] && '이미 사용 중인 핸드폰 번호입니다.',
	// 	brandName: response?.store_name[0] === '해당 스토어이름은 이미 존재합니다.',
	// 	businessNumber:
	// 		response?.company_registration_number[0] ===
	// 		'해당 사업자등록번호는 이미 존재합니다',
	// }

	return (
		<>
			<AuthForm type='signup' serverMessages='' />
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
			response = await axios({
				method: 'POST',
				url: 'https://openmarket.weniv.co.kr/accounts/signup/',
				data: authData,
			})
			// response = await axios.post(
			// 	'https://openmarket.weniv.co.kr/accounts/signup/',
			// 	authData
			// )
		} else if (!isBuyer) {
			authData.store_name = data.get('brandName')
			authData.company_registration_number = data.get('businessNumber')

			// response = await axios.post(
			// 	'https://openmarket.weniv.co.kr/accounts/signup_seller/',
			// 	authData
			// )
			response = await axios({
				method: 'POST',
				url: 'https://openmarket.weniv.co.kr/accounts/signup_seller/',
				data: authData,
			})
		}

		if (response.status === 200) return redirect('/signin')
	} catch (err) {
		return err.response.data
		// throw json({ message: err.response.data }, { status: 401 })
	}
}

/* 
구매자

brandName: null
businessNumber: null
email: "dms"
id: "myid"
name: "hello"
password: "123"
passwordConfirm: "123"
phoneNumber: "010"
phoneNumber2: "1234"
phoneNumber3: "5678"
termsAgree: "on" */

/* 
사업자

brandName: "samk"
businessNumber: "123"
email: "you.meet.vvavy@gmail.com"
id: "myid"
name: "wavy"
password: "123"
passwordConfirm: "123"
phoneNumber: "010"
phoneNumber2: "2423"
phoneNumber3: "3541"
termsAgree: null */
