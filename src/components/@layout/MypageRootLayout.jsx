import { useRedirect } from '../../hooks'
import { Outlet } from 'react-router-dom'
import { MypageNav } from './'

export function MypageRootLayout() {
	useRedirect('mypage', 'orders')
	return (
		<>
			<MypageNav />
			<Outlet />
		</>
	)
}
