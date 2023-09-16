import { useEffect } from 'react'
import {
	Outlet,
	redirect,
	// useLoaderData,
	useNavigate,
} from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { MypageNav } from '../profile'
// import { getAccountType } from '../../lib/utils/storage'
import useStore from '../../store'
import { MinusPaddedWrapper } from './MypageRootLayout.style'

// export const mypageInfoLoader = () => {
// 	const isSignedIn = !!getAuthToken()
// 	const accountType = getAccountType()

// 	if (!isSignedIn) return redirect('/auth/signin')
// 	if (accountType === 'SELLER') {
// 		alert('구매 계정만 이용할 수 있는 서비스입니다.')
// 		return redirect('/')
// 	}

// 	return null
// }

export function MypageRootLayout() {
	// const navigate = useNavigate()
	// const { isSignedIn, accountType } = useStore()

	// useEffect(() => {
	// 	if (!isSignedIn) navigate('/auth/signin')
	// 	if (accountType === 'SELLER') {
	// 		alert('구매 계정만 이용할 수 있는 서비스입니다.')
	// 		navigate('/')
	// 	}
	// }, [isSignedIn, accountType])

	useRedirect('mypage', 'orders')

	return (
		<MinusPaddedWrapper>
			<MypageNav />
			<Outlet />
		</MinusPaddedWrapper>
	)
}
