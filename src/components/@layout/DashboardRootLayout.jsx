import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { DashboardNav } from '../dashboard'
import { MinusPaddedWrapper } from './DashboardRootLayout.style'
import useStore from '../../store'

export function DashboardRootLayout() {
	useRedirect('mypage', 'orders')
	useRedirect('seller', 'product')

	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { isSignedIn, accountType } = useStore()

	let dashboardType
	if (/seller/.test(pathname)) dashboardType = 'SELLER'
	if (/mypage/.test(pathname)) dashboardType = 'BUYER'

	useEffect(() => {
		if (!isSignedIn) {
			return navigate('/auth/signin')
		}
		if (dashboardType !== accountType) {
			alert(
				dashboardType === 'SELLER'
					? '구매 계정만 이용할 수 있는 서비스입니다.'
					: '판매 계정만 이용할 수 있는 서비스입니다.'
			)
			return navigate('/')
		}
	}, [isSignedIn, accountType, dashboardType])

	return (
		<MinusPaddedWrapper>
			{isSignedIn && (
				<>
					<DashboardNav dashboardType={dashboardType} />
					<Outlet />
				</>
			)}
		</MinusPaddedWrapper>
	)
}
