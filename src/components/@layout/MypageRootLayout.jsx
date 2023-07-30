import { Outlet } from 'react-router-dom'
import MypageNav from './MypageNav'
import useRedirect from '../../hooks/useRedirect'

export function MypageRootLayout() {
	useRedirect('mypage', 'orders')

	return (
		<>
			<MypageNav />
			<Outlet />
		</>
	)
}
