import { useContext } from 'react'
import { FormContext } from '../../context/form-context'
import { TextInput, Checkbox, NumberInput } from '../@ui/Input'
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
	const onSubmitHandler = e => {
		if (!ableSubmit) e.preventDefault()
	}

	return (
		<Button
			type='submit'
			disabled={!ableSubmit}
			onSubmit={onSubmitHandler}
			{...props}
		>
			{children}
		</Button>
	)
}

function FormValidationMessage({ text, ...props }) {
	return <Validation {...props}>{text}</Validation>
}

function FormInput({
	required,
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
	const { areTouched, areValid } = useContext(FormContext)
	const [isTouched, isValid] = [areTouched[name], areValid[name]]

	if (type === 'checkbox') {
		return <Checkbox {...{ required, id, name, info, ...props }} />
	}

	if (type === 'phonenumber' || type === 'businessNumber') {
		return (
			<NumberInput
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
				<TextInput
					{...{ id, name, type, placeholder, ...props }}
					className={isTouched && !isValid ? 'invalid' : ''}
				/>
				{children}
			</Flexbox>
		</>
	)
}

function FormSection({ id, title, children, ...props }) {
	return (
		<StyledSection htmlFor={id} {...props}>
			{title && <Title id={id}>{title}</Title>}
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
