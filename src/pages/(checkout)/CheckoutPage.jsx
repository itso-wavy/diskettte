import { Link } from 'react-router-dom'
import { useTitle } from '../../hooks'

export function CheckoutPage() {
	useTitle('결제')

	return (
		<div>
			<Link to='/cart'>cart</Link>
			<Link to='/checkout'>checkout</Link>
			<Link to='/checkout/confirm'>confirm</Link>
		</div>
	)
}
