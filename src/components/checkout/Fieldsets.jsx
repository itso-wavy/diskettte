import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../context/form-context'
import { Button } from '../@ui/Button'
import { FormInput, FormValidationMessage } from '../@ui/Form'
import { passwordSchema } from '../../lib/validation/auth-validation'
import { api, clientAPI } from '../../lib/api'

function ShippingInfoFieldset({ serverMessage, ...props }) {
	const [isValid, setIsValid] = useState({
		step1: false,
		step2: false,
		step3: false,
		step4: false,
	})

	const { values, errorMessages } = useContext(FormContext)
	const { password } = values

	useEffect(() => {
		for (let step in passwordSchema) {
			const { pattern } = passwordSchema[step]

			setIsValid(isValid => ({ ...isValid, [step]: pattern.test(password) }))
		}
	}, [password])

	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput label='아이디' id='id' name='id' placeholder='아이디' />
			{errorMessages.id && (
				<FormValidationMessage text={errorMessages.id} className='invalid' />
			)}
			<FormInput
				type='password'
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			<FormValidationMessage
				text={
					<>
						<span className={isValid.step1 ? 'valid' : ''}>영문 ✓</span>
						<span className={isValid.step2 ? 'valid' : ''}>숫자 ✓</span>
						<span className={isValid.step3 ? 'valid' : ''}>특수문자 ✓</span>
						<span className={isValid.step4 ? 'valid' : ''}>8-16자 ✓</span>
					</>
				}
			/>
			{serverMessage && (
				<FormValidationMessage text={serverMessage} className='invalid' />
			)}
		</fieldset>
	)
}

function ItemsInfoFieldset({ serverMessage, ...props }) {
	const [isValid, setIsValid] = useState({
		step1: false,
		step2: false,
		step3: false,
		step4: false,
		step5: false,
	})

	const { values, errorMessages, areValid, checkUniquenessHandler } =
		useContext(FormContext)
	const { password, passwordConfirm } = values

	useEffect(() => {
		for (let step in passwordSchema) {
			const { pattern } = passwordSchema[step]

			setIsValid(isValid => ({ ...isValid, [step]: pattern.test(password) }))
		}

		setIsValid(isValid => ({
			...isValid,
			step5: passwordConfirm && password === passwordConfirm,
		}))
	}, [password, passwordConfirm])

	const validateUniqueId = async e => {
		const updateErrorMessage = checkUniquenessHandler(e)

		const client = clientAPI.post('accounts/signup/valid/username/', {
			username: values.id,
		})

		const success = () => updateErrorMessage(true, '사용 가능한 아이디입니다.')
		const error = err =>
			updateErrorMessage(false, err.response.data.FAIL_Message)

		api(client)(success, error)

		// try {
		// 	const response = await axios.post(
		// 		'https://openmarket.weniv.co.kr/accounts/signup/valid/username/',
		// 		{ username: values.id }
		// 	)

		// 	if (response.status === 202) {
		// 		updateErrorMessage(true, '사용 가능한 아이디입니다.')
		// 	}
		// } catch (err) {
		// 	updateErrorMessage(false, err.response.data.FAIL_Message)
		// }
	}

	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput label='아이디' id='id' name='id' placeholder='아이디'>
				<Button
					style={{ position: 'relative', bottom: '0.25rem' }}
					name='id'
					onClick={validateUniqueId}
				>
					중복 확인
				</Button>
			</FormInput>
			{errorMessages.id && (
				<FormValidationMessage
					text={errorMessages.id}
					className={areValid.id ? 'valid' : 'invalid'}
				/>
			)}
			{serverMessage && (
				<FormValidationMessage text={serverMessage} className='invalid' />
			)}
			{/* {serverMessage && (
				<FormValidationMessage text={serverMessage} className='invalid' />
			)} */}
			<FormInput
				type='password'
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			<FormInput
				type='password'
				label='비밀번호 재확인'
				id='passwordConfirm'
				name='passwordConfirm'
				placeholder='비밀번호 재확인'
			/>
			<FormValidationMessage
				text={
					<>
						<span className={isValid.step1 ? 'valid' : ''}>영문 ✓</span>
						<span className={isValid.step2 ? 'valid' : ''}>숫자 ✓</span>
						<span className={isValid.step3 ? 'valid' : ''}>특수문자 ✓</span>
						<span className={isValid.step4 ? 'valid' : ''}>8-16자 ✓</span>
						<span className={isValid.step5 ? 'valid' : ''}>
							비밀번호 일치 ✓
						</span>
					</>
				}
			/>
		</fieldset>
	)
}

function PaymentMethodFieldset({ isBuyer, serverMessage, ...props }) {
	const { errorMessages } = useContext(FormContext)

	return (
		<fieldset {...props}>
			<legend className='sr-only'>개인 정보</legend>
			<FormInput
				label='이름'
				id='username'
				name='username'
				placeholder='이름'
			/>
			{errorMessages.username && (
				<FormValidationMessage
					text={errorMessages.username}
					className='invalid'
				/>
			)}
			<FormInput
				type='phonenumber'
				label='휴대폰'
				id='phoneNumber'
				name='phoneNumber'
				placeholder='휴대폰'
			/>
			{errorMessages.phoneNumber && (
				<FormValidationMessage
					text={errorMessages.phoneNumber}
					className='invalid'
				/>
			)}
			{serverMessage && (
				<FormValidationMessage text={serverMessage} className='invalid' />
			)}
			<FormInput label='이메일' id='email' name='email' placeholder='이메일' />
			{errorMessages.email && (
				<FormValidationMessage text={errorMessages.email} className='invalid' />
			)}
			{isBuyer && (
				<FormInput
					required
					type='checkbox'
					id='termsAgree'
					name='termsAgree'
					info={
						<>
							<Link to='' className='terms'>
								이용약관
							</Link>{' '}
							및{' '}
							<Link to='' className='terms'>
								개인정보처리방침
							</Link>
							에 대한 내용을 확인하였고 이에 동의합니다.
						</>
					}
				/>
			)}
		</fieldset>
	)
}

export { ShippingInfoFieldset, ItemsInfoFieldset, PaymentMethodFieldset }
