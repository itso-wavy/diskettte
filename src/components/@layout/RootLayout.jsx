import { Outlet, useNavigation } from 'react-router-dom'
import { ScrollToTop, Loading } from '../common'
import { Header } from '../header'
import { Footer } from '../footer'
import { StyledMain } from './RootLayout.style'

export function RootLayout() {
	const { state } = useNavigation()

	return (
		<>
			<Header />
			<StyledMain id='main'>
				{state === 'loading' ? <Loading /> : <Outlet />}
			</StyledMain>
			<Footer />
			<ScrollToTop />
		</>
	)
}
