import { useState, useRef } from 'react'
import { useScript } from './hooks/useScript'
import jwt_deocde from 'jwt-decode'

const App = () => {
	const googlebuttonref = useRef()
	const [user, setuser] = useState(false)

	const onGoogleSignIn = user => {
		const payload = jwt_deocde(user.credential)
		console.log(payload)
		setuser(payload)
	}

	useScript('https://accounts.google.com/gsi/client', () => {
		window.google.accounts.id.initialize({
			client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
			callback: onGoogleSignIn,
			auto_select: false,
		})

		window.google.accounts.id.renderButton(googlebuttonref.current, {
			size: 'medium',
		})
	})
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			{!user && <div ref={googlebuttonref}></div>}
			{user && (
				<div>
					<h1>{user.name}</h1>
					<img src={user.picture} alt='profile' />
					<p>{user.email}</p>

					<button
						onClick={() => {
							setuser(false)
						}}
					>
						Logout
					</button>
				</div>
			)}
		</div>
	)
}

export default App
