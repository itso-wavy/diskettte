import React from 'react'
import { Link } from 'react-router-dom'

function OrderConfirmPage() {
	return (
		<div>
			<Link to='/cart'>cart</Link>
			<Link to='/checkout'>checkout</Link>
			<Link to='/checkout/confirm'>confirm</Link>
		</div>
	)
}

export { OrderConfirmPage }
