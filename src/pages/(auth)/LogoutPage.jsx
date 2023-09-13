import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { serverLogout } from '../../lib/api'
import useStore from '../../store'

export const LogoutPage = () => {
	const { isSignedIn, logoutHandler } = useStore()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isSignedIn) return navigate('/auth/signin')

		serverLogout()
		logoutHandler()
		alert('로그아웃 되었습니다.')

		return navigate('/')
	}, [])
}
