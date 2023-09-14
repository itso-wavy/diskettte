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
				<h2 className='sr-only'>배송/결제 정보 입력</h2>
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
