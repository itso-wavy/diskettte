import { Outlet } from 'react-router-dom'
import MypageNav from './MypageNav'

export default function MypageRootLayout() {
	return (
		<>
			<MypageNav />
			<Outlet />
		</>
	)
}
