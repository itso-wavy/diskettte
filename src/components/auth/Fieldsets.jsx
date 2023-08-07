import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../../context/form-context'
import { Button } from '../@ui/Button'
import { FormInput, FormValidationMessage } from '../@ui/Form'

function AccountLoginFieldset({ ...props }) {
	const { errorMessages } = useContext(FormContext)

	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput label='아이디' id='id' name='id' placeholder='아이디' />
			{errorMessages.id && (
				<FormValidationMessage text={errorMessages.id} className='invalid' />
			)}
			<FormInput
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			{errorMessages.password && (
				<FormValidationMessage
					text={errorMessages.password}
					className='invalid'
				/>
			)}
		</fieldset>
	)
}

function AccountRegisterFieldset({ ...props }) {
	const { errorMessages } = useContext(FormContext)

	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput label='아이디' id='id' name='id' placeholder='아이디'>
				<Button style={{ position: 'relative', bottom: '0.25rem' }}>
					중복 확인
				</Button>
			</FormInput>
			{errorMessages.id && (
				<FormValidationMessage text={errorMessages.id} className='invalid' />
			)}
			<FormInput
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			<FormInput
				label='비밀번호 재확인'
				id='passwordConfirm'
				name='passwordConfirm'
				placeholder='비밀번호 재확인'
			/>
			{errorMessages.password && (
				<FormValidationMessage
					text={errorMessages.password}
					className='invalid'
				/>
			)}
			{errorMessages.passwordConfirm && (
				<FormValidationMessage
					text={errorMessages.passwordConfirm}
					className='invalid'
				/>
			)}
		</fieldset>
	)
}

function PersonalInfoRegisterFieldset({ isBuyer, ...props }) {
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
			<FormInput label='이메일' id='email' name='email' placeholder='이메일' />
			{errorMessages.email && (
				<FormValidationMessage text={errorMessages.email} className='invalid' />
			)}
			{isBuyer && (
				<FormInput
					type='checkbox'
					id='termsAgree'
					name='termsAgree'
					info={
						<>
							<Link to='.' className='terms'>
								이용약관
							</Link>{' '}
							및{' '}
							<Link to='.' className='terms'>
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

function SellerInfoRegisterFieldset({ validationMessage, ...props }) {
	const { errorMessages } = useContext(FormContext)

	return (
		<fieldset {...props}>
			<legend className='sr-only'>판매자 정보</legend>
			<FormInput
				label='브랜드명'
				id='brandName'
				name='brandName'
				placeholder='브랜드명'
			>
				<Button style={{ position: 'relative', bottom: '0.25rem' }}>
					중복 확인
				</Button>
			</FormInput>
			{errorMessages.brandName && (
				<FormValidationMessage
					text={errorMessages.brandName}
					className='invalid'
				/>
			)}
			<FormInput
				type='businessNumber'
				label='사업자등록번호'
				id='businessNumber'
				name='businessNumber'
				placeholder='사업자등록번호'
			/>
			{errorMessages.businessNumber && (
				<FormValidationMessage
					text={errorMessages.businessNumber}
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
