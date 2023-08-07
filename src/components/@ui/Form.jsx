import { useContext } from 'react'
import { FormContext } from '../../context/form-context'
import { TextInput, Checkbox, PhonenumberInput } from '../@ui/Input'
import { HiddenLabel } from '../@ui/Label'
import { Button } from '../@ui/Button'
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

function SubmitButton({ children, ...props }) {
	const { ableSubmit } = useContext(FormContext)

	return (
		<Button type='submit' disabled={{ ableSubmit }} {...props}>
			{children}
		</Button>
	)
}

function FormValidationMessage({ text, ...props }) {
	return <Validation {...props}>{text}</Validation>
}
function FormInput({
	label,
	id,
	name,
	type = 'text',
	placeholder,
	onInput,
	children,
	info,
	...props
}) {
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
				<TextInput {...{ id, name, type, placeholder, ...props }} />
				{children}
			</Flexbox>
			<FormValidationMessage
				text={
					<>
						<span className={0 ? 'valid' : ''}>영문 ✓</span>
						<span className={0 ? 'valid' : ''}>숫자 ✓</span>
						<span className={0 ? 'valid' : ''}>특수문자 ✓</span>
						<span className={0 ? 'valid' : ''}>8-16자 ✓</span>
					</>
				}
			/>
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

export {
	FormSection,
	FormInput,
	FormValidationMessage,
	SubmitButton,
	Hr,
	SmallMenus,
	Flexbox,
}
