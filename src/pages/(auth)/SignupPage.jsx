import { useTitle } from '../../hooks'
import { AuthForm } from '../../components/auth/AuthForm'

export function SignupPage() {
	useTitle('Sign Up')

	return (
		<>
			<AuthForm type='signup' />
		</>
	)
}

export const signupAction = async ({ request }) => {
	const data = await request.formData()
	const authData = {
		id: data.get('id'),
		password: data.get('password'),
		passwordConfirm: data.get('passwordConfirm'),
		name: data.get('name'),
		phoneNumber: data.get('phoneNumber'),
		phoneNumber2: data.get('phoneNumber2'),
		phoneNumber3: data.get('phoneNumber3'),
		email: data.get('email'),
		termsAgree: data.get('termsAgree'),
		brandName: data.get('brandName'),
		businessNumber: data.get('businessNumber'),
	}

	console.log(authData)
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
