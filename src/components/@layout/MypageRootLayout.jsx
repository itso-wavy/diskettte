import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { MypageNav } from '../profile'
import useStore from '../../store'

export function MypageRootLayout() {
	useRedirect('mypage', 'orders')

	const { isSignedIn } = useStore()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isSignedIn) return navigate('/auth/signin')
	}, [])

	return (
		<>
			<MypageNav />
			<Outlet />
		</>
	)
}
