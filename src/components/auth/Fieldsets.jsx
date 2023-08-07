import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks'
import { FormContext } from '../../context/form-context'
import { Button } from '../@ui/Button'
import { FormInput, FormValidationMessage } from '../@ui/Form'

function AccountLoginFieldset({ ...props }) {
	// blur시 인풋 트리밍 값이 isEntered인지 확인, 전송 버튼 누르면 인풋 포커싱
	// 입력할 때마다 비밀번호 양식 검사하고 아래 메시지 컬러(pw)
	// 양식에 밸리데이션 문제 있으면 전송 불가함
	// 전송 보낸 후, 일치하는 계정 없으면 메시지
	// 전송 보낸 후, 유저 유형이 다를 때 메시지
	// const {
	// 	values,
	// 	setValues,
	// 	areValid,
	// 	errorMessages,
	// 	setErrorMessages,
	// 	onInputHandler,
	// 	onBlurHandler,
	// 	clearInputHandler,
	// 	ableSubmit,
	// } = useForm()
	const { errorMessages } = useContext(FormContext)

	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput label='아이디' id='id' name='id' placeholder='아이디' />
			{/* <FormValidationMessage text={errorMessages.id} /> */}
			<FormInput
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			{Object.values(errorMessages).map((message, index) => (
				<FormValidationMessage text={message} key={index} />
			))}
			{/* <FormValidationMessage text={errorMessages.password} /> */}
		</fieldset>
	)
}

function AccountRegisterFieldset({ validationMessage, ...props }) {
	// blur시 인풋 트리밍 값이 isEntered인지 확인, 전송 버튼 누르면 인풋 포커싱
	// 키 입력할 때마다 비밀번호 양식 검사하고 아래 메시지 컬러(pw)
	// 핸드폰 번호는 010으로 시작하는 10~11자리 숫자로만
	// 이메일 양식에 맞아야 함
	// (셀러) 사업자번호는 10자리로 이루어진 숫자
	// (셀러) 브랜드명은 중복 불가
	// 양식에 밸리데이션 문제 있으면 전송 불가함
	// 전송 보낸 후, 일치하는 계정 없으면 메시지
	// 전송 보낸 후, 유저 유형이 다를 때 메시지
	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput label='아이디' id='id' name='id' placeholder='아이디'>
				<Button style={{ position: 'relative', bottom: '0.25rem' }}>
					중복 확인
				</Button>
			</FormInput>
			{/* <FormValidationMessage text={validationMessage.id} className='invalid' /> */}
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
			{/* <FormValidationMessage text={validationMessage.password} /> */}
		</fieldset>
	)
}

function PersonalInfoRegisterFieldset({ isBuyer, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>개인 정보</legend>
			<FormInput
				label='이름'
				id='username'
				name='username'
				placeholder='이름'
			/>
			<FormInput
				type='phonenumber'
				label='휴대폰'
				id='phoneNumber'
				name='phoneNumber'
				placeholder='휴대폰'
			/>
			<FormInput label='이메일' id='email' name='email' placeholder='이메일' />
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
			{/* <FormValidationMessage
				text={validationMessage.brand}
				className='invalid'
			/> */}
			<FormInput
				label='사업자등록번호'
				id='businessNumber'
				name='businessNumber'
				type='number'
				placeholder='사업자등록번호'
			/>
		</fieldset>
	)
}

export {
	AccountLoginFieldset,
	AccountRegisterFieldset,
	PersonalInfoRegisterFieldset,
	SellerInfoRegisterFieldset,
}
