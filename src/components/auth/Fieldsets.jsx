import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../context/form-context'
import { Button } from '../@ui/Button'
import { FormInput, FormValidationMessage } from '../@ui/Form'
import { passwordSchema } from '../../lib/validation/auth-validation'
import { validateBrandFromServer, validateIdFromServer } from '../../lib/api'

function AccountLoginFieldset({ serverMessage, ...props }) {
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
			<FormInput id='id' name='id' label='아이디' placeholder='아이디' />
			{errorMessages.id && (
				<FormValidationMessage text={errorMessages.id} className='invalid' />
			)}
			<FormInput
				type='password'
				id='password'
				name='password'
				label='비밀번호'
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

function AccountRegisterFieldset({ serverMessage, ...props }) {
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

	const validateUniqueId = e => {
		const updateErrorMessage = checkUniquenessHandler(e)

		validateIdFromServer({ username: values.id }, updateErrorMessage)
	}

	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput id='id' name='id' label='아이디' placeholder='아이디'>
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
			<FormInput
				type='password'
				id='password'
				name='password'
				label='비밀번호'
				placeholder='비밀번호'
			/>
			<FormInput
				type='password'
				id='passwordConfirm'
				name='passwordConfirm'
				label='비밀번호 재확인'
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

function PersonalInfoRegisterFieldset({ isBuyer, serverMessage, ...props }) {
	const { errorMessages } = useContext(FormContext)

	return (
		<fieldset {...props}>
			<legend className='sr-only'>개인 정보</legend>
			<FormInput
				id='username'
				name='username'
				label='이름'
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
				id='phoneNumber'
				name='phoneNumber'
				label='휴대폰'
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
			<FormInput id='email' name='email' label='이메일' placeholder='이메일' />
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
							<Link to='' className='link'>
								이용약관
							</Link>{' '}
							및{' '}
							<Link to='' className='link'>
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

function SellerInfoRegisterFieldset({
	validationMessage,
	serverMessage,
	...props
}) {
	const { values, areValid, errorMessages, checkUniquenessHandler } =
		useContext(FormContext)

	const validateUniqueBrandName = e => {
		const updateErrorMessage = checkUniquenessHandler(e)

		validateBrandFromServer(
			{ company_registration_number: values.businessNumber },
			updateErrorMessage
		)
	}

	return (
		<fieldset {...props}>
			<legend className='sr-only'>판매자 정보</legend>
			<FormInput
				type='businessNumber'
				id='businessNumber'
				name='businessNumber'
				label='사업자등록번호'
				placeholder='사업자등록번호'
			/>
			{errorMessages.businessNumber && (
				<FormValidationMessage
					text={errorMessages.businessNumber}
					className={areValid.businessNumber ? 'valid' : 'invalid'}
				/>
			)}
			{serverMessage.businessNumber && (
				<FormValidationMessage
					text={serverMessage.businessNumber}
					className='invalid'
				/>
			)}
			<FormInput
				id='brandName'
				name='brandName'
				label='브랜드명'
				placeholder='브랜드명'
			>
				<Button
					style={{ position: 'relative', bottom: '0.25rem' }}
					name='businessNumber'
					onClick={validateUniqueBrandName}
				>
					중복 확인
				</Button>
			</FormInput>
			{errorMessages.brandName && (
				<FormValidationMessage
					text={errorMessages.brandName}
					className='invalid'
				/>
			)}
			{serverMessage.brandName && (
				<FormValidationMessage
					text={serverMessage.brandName}
					className='invalid'
				/>
			)}
		</fieldset>
	)
}

export {
	AccountLoginFieldset,
	AccountRegisterFieldset,
	PersonalInfoRegisterFieldset,
	SellerInfoRegisterFieldset,
}
