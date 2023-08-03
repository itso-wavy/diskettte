import { useState, useRef } from 'react'
import { Button } from '../@ui/Button'
// import { TextInput } from '../@ui/Input'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import {
	StyledSection,
	InputWrapper,
	Validation,
	Flexbox,
	StyledSpan,
	SmallFlexbox,
} from './Form.style'

function SmallMenus({ children, ...props }) {
	return <SmallFlexbox {...props}>{children}</SmallFlexbox>
}

function Hr({ text, ...props }) {
	return (
		<StyledSpan className='hr' {...props}>
			{text}
		</StyledSpan>
	)
}

function FormValidateMessage({ text, ...props }) {
	return <Validation {...props}>{text}</Validation>
}

function FormInput({
	label,
	id,
	name,
	type = 'text',
	placeholder,
	onBlur,
	// onValidate,
	extraBtn,
	children,
	...props
}) {
	//  onFocus={}
	//  onInvalid={}
	//  onError={}
	const inputRef = useRef()
	const [value, setValue] = useState('')
	const onChange = e => setValue(e.target.value)

	const clearInput = () => setValue('')

	const activate = () => {
		inputRef.current.focus()
	}

	const deactivate = () => {
		// validation
	}
	// useImperativeHandle(ref, () => {
	// 	return { focus: activate, blur: deactivate }
	// })

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
		<div>
			{label && (
				<label htmlFor={id} className='sr-only'>
					{label}
				</label>
			)}
			<Flexbox $direction='row'>
				<InputWrapper extraBtn={extraBtn}>
					<input
						ref={inputRef}
						id={id}
						type={type}
						name={name}
						value={value}
						onBlur={onBlur}
						onChange={onChange}
						placeholder={placeholder}
						{...props}
					/>
					<div className='btn-box'>
						{value && (
							<Button
								$type='icon'
								$size='1.3rem'
								$radius='50%'
								$img={EraseImg}
								onClick={clearInput}
								aria-label='clear'
								className='clear'
							/>
						)}
						{extraBtn}
					</div>
				</InputWrapper>
				{children}
			</Flexbox>
		</div>
	)
}

function FormSection({ id, title, children, ...props }) {
	return (
		<StyledSection htmlFor={id} {...props}>
			<h2 id={id} className='title'>
				{title}
			</h2>
			{children}
		</StyledSection>
	)
}

export {
	FormSection,
	FormInput,
	FormValidateMessage,
	Hr,
	SmallMenus,
	InputWrapper,
	Flexbox,
}
