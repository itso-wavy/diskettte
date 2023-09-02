import { Outlet } from 'react-router-dom'
import { Breadcrumb } from '../cart/Breadcrumb'
import { Wrapper } from './CheckoutRootLayout.style.jsx'

export function CheckoutRootLayout() {
	const crumbs = [
		{ pathname: '/cart', text: '01 SHOPPING BAG' },
		{ pathname: '/checkout', text: '02 ORDER' },
		{ pathname: '/checkout/confirm', text: '03 ORDER CONFIRMED' },
	]

	return (
		<>
			<Wrapper>
				<Breadcrumb crumbs={crumbs} />
				<div>
					<Outlet />
				</div>
			</Wrapper>
		</>
	)
}
