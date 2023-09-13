import { useContext, useMemo } from 'react'
import { FormContext } from '../../context/form-context'
import { FormInput, FormValidationMessage } from '../@ui/Form'
import { SpanLabel } from '../@ui/Label'
import { StyledFieldset, GridWrapper } from './Fieldsets.styled'

function ShippingInfoFieldset({ ...props }) {
	const { errorMessages } = useContext(FormContext)

	return (
		<StyledFieldset {...props}>
			<legend>배송 정보</legend>
			<GridWrapper>
				<SpanLabel id='receiver' label='수령인' className='required' />
				<div className='shrink'>
					<FormInput id='receiver' name='receiver' />
					{errorMessages.receiver && (
						<FormValidationMessage
							// text={errorMessages.receiver}
							text='error!'
							className='invalid'
						/>
					)}
				</div>

				<SpanLabel
					id='receiverPhoneNumber'
					label='휴대폰'
					className='required'
				/>
				<div className='shrink'>
					<FormInput
						type='phonenumber'
						id='receiverPhoneNumber'
						name='receiverPhoneNumber'
					/>
					{errorMessages.receiverPhoneNumber && (
						<FormValidationMessage
							text={errorMessages.receiverPhoneNumber}
							className='invalid'
						/>
					)}
				</div>

				<SpanLabel id='address' label='배송지' className='required' />
				<div>
					<FormInput
						type='address'
						id='address'
						name='address'
						placeholder='상세 주소 입력'
					/>
					{errorMessages.address && (
						<FormValidationMessage
							text={errorMessages.address}
							className='invalid'
						/>
					)}
				</div>

				<SpanLabel id='deliveryRequest' label='배송 요청 사항' />
				<div>
					<FormInput
						id='deliveryRequest'
						name='deliveryRequest'
						placeholder='ex. 부재시 문 앞에 놓아주세요.'
					/>
				</div>
			</GridWrapper>
		</StyledFieldset>
	)
}

function PaymentMethodFieldset({ ...props }) {
	const methods = useMemo(
		() => [
			{ label: '신용/체크카드', value: 'CARD' },
			{ label: '토스페이', value: 'toss_pay' },
			{ label: '네이버페이', value: 'NAVERPAY' },
			{ label: '카카오페이', value: 'KAKAOPAY' },
			{ label: '삼성페이', value: 'samsung_pay' },
			{ label: 'PAYCO', value: 'payco' },
			{ label: 'SSG 페이', value: 'ssg_pay' },
			{ label: '실시간 계좌이체', value: 'bank_transfer' },
			{ label: '무통장 입금', value: 'DEPOSIT' },
			{ label: '휴대폰 결제', value: 'PHONE_PAYMENT' },
			// { label: '신용/체크카드', value: 'credit_card' },
			// { label: '토스페이', value: 'toss_pay' },
			// { label: '네이버페이', value: 'naver_pay' },
			// { label: '카카오페이', value: 'kakao_pay' },
			// { label: '삼성페이', value: 'samsung_pay' },
			// { label: 'PAYCO', value: 'payco' },
			// { label: 'SSG 페이', value: 'ssg_pay' },
			// { label: '실시간 계좌이체', value: 'bank_transfer' },
			// { label: '무통장 입금', value: 'bank_deposit' },
			// { label: '휴대폰 결제', value: 'mobile_payment' },
		],
		[]
	)

	return (
		<StyledFieldset {...props}>
			<legend>결제 방법</legend>
			<FormInput type='radio' option={methods} name='paymentMethod' />
		</StyledFieldset>
	)
}

export { ShippingInfoFieldset, PaymentMethodFieldset }
