import { useContext, useEffect } from 'react'
import { Form } from 'react-router-dom'
import { FormContext } from '../../context/form-context'
import { CheckoutSummary } from '.'
import { ShippingInfoFieldset, PaymentMethodFieldset } from './Fieldsets'
import { Wrapper } from './CheckoutForm.style'

function CheckoutForm({ order, ...props }) {
	const { onManuallyValidateHandler } = useContext(FormContext)

	useEffect(() => {
		const providerValues = [
			'deliveryRequest',
			'order_kind',
			'productId',
			'quantity',
			'total_price',
		]

		providerValues.forEach(name =>
			onManuallyValidateHandler({ name, isValid: true })
		)
	}, [])

	return (
		<Form method='POST' {...props}>
			<Wrapper>
				<div>
					<ShippingInfoFieldset />
					<PaymentMethodFieldset />
				</div>
				<CheckoutSummary order={order} />
			</Wrapper>
		</Form>
	)
}

export { CheckoutForm }
