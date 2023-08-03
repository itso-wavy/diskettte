import { Outlet } from 'react-router-dom'
import { MypageNav } from './'
import { useRedirect } from '../../hooks'

export function MypageRootLayout() {
	useRedirect('mypage', 'orders')
	return (
		<>
			<MypageNav />
			<Outlet />
		</>
	)
}
