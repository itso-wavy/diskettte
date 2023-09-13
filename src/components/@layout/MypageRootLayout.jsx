import { useEffect } from 'react'
import {
	Outlet,
	redirect,
	useLoaderData,
	useNavigate,
	useRouteLoaderData,
} from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { MypageNav } from '../profile'
import { getAccountType, getAuthToken } from '../../lib/utils/storage'
import useStore from '../../store'

export const mypageInfoLoader = () => {
	// const isSignedIn = !!getAuthToken()
	const accountType = getAccountType()

	// if (!isSignedIn) return null
	if (accountType === 'SELLER') {
		alert('구매 계정만 이용할 수 있는 서비스입니다.')
		return redirect('/')
	}

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
