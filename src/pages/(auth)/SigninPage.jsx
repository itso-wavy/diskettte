import { AuthForm } from '../../components/auth/AuthForm'

export function SigninPage() {
	return (
		<>
			<AuthForm type='signin' />
		</>
	)
}

export const action = async ({ request }) => {
	// AuthForm 전송시 트리거 됨
	const data = await request.formData()
	const email = data.get('email')
	const password = data.get('password')
	console.log(email, password)
}
