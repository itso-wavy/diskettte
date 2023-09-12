import { useContext, useMemo } from 'react'
import { FormContext } from '../../context/form-context'
import { FormInput, FormValidationMessage } from '../@ui/Form'
import { StyledFieldset, Wrapper } from './Fieldsets.styled'

function ShippingInfoFieldset({ ...props }) {
	const { errorMessages } = useContext(FormContext)

	return (
		<StyledFieldset {...props}>
			<legend>배송 정보</legend>
			<Wrapper>
				<FormInput label='수령인' id='receiver' name='receiver' required />
				{errorMessages.receiver && (
					<FormValidationMessage
						text={errorMessages.receiver}
						className='invalid'
					/>
				)}
				<FormInput
					type='phonenumber'
					label='휴대폰'
					id='receiverPhoneNumber'
					name='receiverPhoneNumber'
					required
				/>
				{errorMessages.receiverPhoneNumber && (
					<FormValidationMessage
						text={errorMessages.receiverPhoneNumber}
						className='invalid'
					/>
				)}
			</Wrapper>
			<div>
				<FormInput
					type='address'
					label='배송지'
					id='address'
					name='address'
					placeholder='상세 주소 입력'
					required
				/>
				{errorMessages.address && (
					<FormValidationMessage
						text={errorMessages.address}
						className='invalid'
					/>
				)}
				<FormInput
					label='배송 요청 사항'
					id='deliveryRequest'
					name='deliveryRequest'
					placeholder='ex. 부재시 문 앞에 놓아주세요.'
				/>
			</div>
		</StyledFieldset>
	)
}

function PaymentMethodFieldset({ ...props }) {
	const methods = useMemo(
		() => [
			{ label: '신용/체크카드', value: 'credit_card' },
			{ label: '토스페이', value: 'toss_pay' },
			{ label: '네이버페이', value: 'naver_pay' },
			{ label: '카카오페이', value: 'kakao_pay' },
			{ label: '삼성페이', value: 'samsung_pay' },
			{ label: 'PAYCO', value: 'payco' },
			{ label: 'SSG 페이', value: 'ssg_pay' },
			{ label: '실시간 계좌이체', value: 'bank_transfer' },
			{ label: '무통장 입금', value: 'bank_deposit' },
			{ label: '휴대폰 결제', value: 'mobile_payment' },
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
