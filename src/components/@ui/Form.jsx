import { TextInput, Checkbox, PhonenumberInput } from '../@ui/Input'
import { HiddenLabel } from './Label'
import {
	StyledSection,
	Title,
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

// blur시 인풋 트리밍 값이 isEntered인지 확인, 전송 버튼 누르면 인풋 포커싱
// 키 입력할 때마다 비밀번호 양식 검사하고 아래 메시지 컬러(pw)
// 핸드폰 번호는 010으로 시작하는 10~11자리 숫자로만
// 이메일 양식에 맞아야 함
// (셀러) 사업자번호는 10자리로 이루어진 숫자
// (셀러) 브랜드명은 중복 불가
// 양식에 밸리데이션 문제 있으면 전송 불가함
// 전송 보낸 후, 일치하는 계정 없으면 메시지
// 전송 보낸 후, 유저 유형이 다를 때 메시지
function FormInput({
	label,
	id,
	name,
	type = 'text',
	placeholder,
	onInput,
	// onBlur,
	// onInvalid,
	// onValidate,
	extraBtn,
	children,
	info,
	...props
}) {
	// const inputRef = useRef()
	// useImperativeHandle(ref, () => {
	// 	return { focus: activate, blur: deactivate }
	// })

	if (type === 'checkbox') {
		return <Checkbox {...{ id, name, info, ...props }} />
	}

	if (type === 'phonenumber') {
		return (
			<PhonenumberInput
				label={
					<label htmlFor={id} className='sr-only'>
						{label}
					</label>
				}
				id={id}
				name={name}
				placeholder={placeholder}
			/>
		)
	}

	return (
		<>
			{label && <HiddenLabel {...{ id, label }} />}
			<Flexbox $direction='row'>
				<TextInput {...{ id, name, type, placeholder, extraBtn, ...props }} />
				{children}
			</Flexbox>
		</>
	)
}

function FormSection({ id, title, children, ...props }) {
	return (
		<StyledSection htmlFor={id} {...props}>
			<Title id={id}>{title}</Title>
			{children}
		</StyledSection>
	)
}

export { FormSection, FormInput, FormValidateMessage, Hr, SmallMenus, Flexbox }
