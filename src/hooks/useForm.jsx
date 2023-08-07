import { useState } from 'react'
import validate from '../lib/validation'

export function useForm(initialState) {
	const [values, setValues] = useState(initialState)
	const [areTouched, setAreTouched] = useState(initialState)
	const [areValid, setAreValid] = useState(initialState)
	const [errorMessages, setErrorMessages] = useState(initialState)

	const onInputHandler = e => {
		const { value, name } = e.target

		// if (options.type === 'number') value = value.replace(/\D/g, '')

		setValues(values => ({ ...values, [name]: value }))
	}

	const onBlurHandler = e => {
		const { value, name } = e.target

		const validationFn = validate(name)
		const trimmingValue = value.trim()
		const validationMessage = validationFn(trimmingValue)

		setErrorMessages(errorMessages => ({
			...errorMessages,
			[name]: validationMessage,
		}))

		setAreValid(isValid => ({ ...isValid, [name]: !validationMessage }))
	}

	const clearInputHandler = e => {
		setValues(values => ({ ...values, [e.target.name]: '' }))
	}

	const ableSubmit = Object.values(areValid).every(
		isValid => !!isValid === true
	)

	return {
		values,
		setValues,
		areValid,
		errorMessages,
		setErrorMessages,
		onInputHandler,
		onBlurHandler,
		clearInputHandler,
		ableSubmit,
	}
}
