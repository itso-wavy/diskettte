import { AuthForm } from '../../components/auth/AuthForm'

export function SigninPage() {
	return (
		<>
			<AuthForm type='signin' />
		</>
	)
}

export const signinAction = async ({ request, params }) => {
	const data = await request.formData()
	const authData = {
		id: data.get('id'),
		password: data.get('password'),
	}

	console.log(authData)
}
/* 
!isLogin? 이어야 진입 가능,
isLogin 상태이면 진입 불가, navigate(-1)
sns 로그인 콜백 페이지도 여기
*/

// async ({ request, params }) => {
//   const data = await request.formData();
//   const eventData = {
//     title: data.get('title'),
//     image: data.get('image'),
//     date: data.get('date'),
//     description: data.get('description'),
//   };

//   const response = await fetch('http://localhost:8080/events', {
//     method: 'POST',
//     body: JSON.stringify(eventData),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (!response.ok)
//     throw json({ message: 'could not save event!' }, { status: 500 });

//   return redirect('/events');
// };
