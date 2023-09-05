import { useEffect } from 'react'
import {
	Outlet,
	useLoaderData,
	useNavigate,
	useRouteLoaderData,
} from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { MypageNav } from '../profile'
import useStore from '../../store'

export const mypageInfoLoader = () => {
	return null
}

export function MypageRootLayout() {
	const myInfo = useLoaderData()

	useRedirect('mypage', 'orders')

	const { isSignedIn } = useStore()
	const navigate = useNavigate()

	// useEffect(() => {
	// 	if (!isSignedIn) return navigate('/auth/signin')
	// }, [])

	return (
		<>
			<MypageNav />
			<Outlet />
		</>
	)
}
