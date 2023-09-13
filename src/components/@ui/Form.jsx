import { useContext } from 'react'
import { FormContext } from '../../context/form-context'
import {
	TextInput,
	Checkbox,
	NumberInput,
	RadioInput,
	AddressInput,
} from '../@ui/Input'
import { Button } from '../@ui/Button'
import {
	StyledSection,
	Title,
	Validation,
	Flexbox,
	StyledSpan,
	SmallFlexbox,
	GridWrapper,
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
	label,
	id,
	name,
	type = 'text',
	placeholder,
	onInput,
	children,
	info,
	option,
	...props
}) {
	const { areTouched, areValid } = useContext(FormContext)
	const [isTouched, isValid] = [areTouched[name], areValid[name]]

	if (type === 'checkbox') {
		return <Checkbox {...{ id, name, info, ...props }} />
	}

	if (type === 'phonenumber' || type === 'businessNumber') {
		return (
			<Flexbox $direction='row'>
				<NumberInput
					id={id}
					name={name}
					label={label}
					placeholder={placeholder}
					{...props}
				/>
			</Flexbox>
		)
	}

	if (type === 'address') {
		return (
			<Flexbox $direction='row'>
				<AddressInput
					id={id}
					name={name}
					label={label}
					placeholder={placeholder}
				/>
			</Flexbox>
		)
	}

	if (type === 'radio') {
		return (
			<GridWrapper>
				<RadioInput option={option} name={name} {...props} />
			</GridWrapper>
		)
	}

	return (
		<>
			<Flexbox $direction='row'>
				<TextInput
					{...{ id, name, type, label, placeholder, ...props }}
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
