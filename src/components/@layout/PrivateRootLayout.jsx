import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { MypageNav } from '../profile'
import { MinusPaddedWrapper } from './PrivateRootLayout.style'
import useStore from '../../store'

export function PrivateRootLayout() {
	useRedirect('mypage', 'orders')
	useRedirect('seller', 'product')

	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { isSignedIn, accountType } = useStore()

	let privatePageType
	if (/seller/.test(pathname)) privatePageType = 'SELLER'
	if (/mypage/.test(pathname)) privatePageType = 'BUYER'

	useEffect(() => {
		if (!isSignedIn) {
			return navigate('/auth/signin')
		}
		if (privatePageType !== accountType) {
			alert(
				privatePageType === 'SELLER'
					? '구매 계정만 이용할 수 있는 서비스입니다.'
					: '판매 계정만 이용할 수 있는 서비스입니다.'
			)
			return navigate('/')
		}
	}, [isSignedIn, accountType, privatePageType])

	return (
		<MinusPaddedWrapper>
			{isSignedIn && (
				<>
					<MypageNav privatePageType={privatePageType} />
					<Outlet />
				</>
			)}
		</MinusPaddedWrapper>
	)
}
