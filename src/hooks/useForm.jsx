import { useReducer } from 'react'
import validate from '../lib/validation'

export const ACTION_CREATOR = {
	INPUT: 'INPUT',
	BLUR: 'BLUR',
	CLEAR: 'CLEAR',
	CHECK: 'CHECK',
	CHECK_REQUIRED: 'CHECK_REQUIRED',
}

const reducer = (state, action) => {
	const { name, values, areTouched, areValid, errorMessages } = action

	switch (action.type) {
		case ACTION_CREATOR.INPUT:
			return { ...state, values }
		case ACTION_CREATOR.BLUR:
			return {
				...state,
				areTouched: { ...state.areTouched, ...areTouched },
				areValid: { ...state.areValid, ...areValid },
				errorMessages: { ...state.errorMessages, ...errorMessages },
			}
		case ACTION_CREATOR.CLEAR:
			return {
				...state,
				values: { ...state.values, [name]: '' },
				areTouched: { ...state.areTouched, [name]: false },
				errorMessages: { ...state.errorMessages, [name]: '' },
			}
		case ACTION_CREATOR.CHECK:
			return {
				...state,
				values: { ...state.values, [name]: !state.values[name] },
				areValid: { ...state.areValid, [name]: true },
			}
		case ACTION_CREATOR.CHECK_REQUIRED:
			return {
				...state,
				areValid: { ...state.areValid, [name]: !state.areValid[name] },
			}
		default:
			return state
	}
}

export const useForm = initialState => {
	const blankState = {}
	for (let key in initialState) {
		blankState[key] = false
	}

	const [state, dispatch] = useReducer(reducer, {
		values: initialState,
		areTouched: blankState,
		areValid: blankState,
		errorMessages: blankState,
	})

	const onInputHandler = (e, options) => {
		let { value, name } = e.target

		if (options.type === 'number') value = Number(value.replace(/\D/g, ''))

		dispatch({
			type: ACTION_CREATOR.INPUT,
			values: { ...state.values, [name]: value },
		})
	}

	const onBlurHandler = e => {
		const { value, name } = e.target

		const isTouched = value ? true : false
		let validationMessage = ''
		let validationResult = false

		const validationFn = validate(name)
		const trimmingValue = value.trim()
		if (value) validationResult = validationFn(trimmingValue)

		if (typeof validationResult !== 'boolean') {
			validationMessage = validationResult
			validationResult = false
		}

		dispatch({
			type: ACTION_CREATOR.BLUR,
			errorMessages: { [name]: validationMessage },
			areTouched: { [name]: isTouched },
			areValid: { [name]: isTouched && validationResult },
		})

		// 예외 처리
		if (name === 'passwordConfirm')
			dispatch({
				type: ACTION_CREATOR.BLUR,
				areValid: {
					[name]: isTouched && value === state.values.password,
				},
			})
	}

	const checkUniquenessHandler = e => {
		e.preventDefault()

		const { name } = e.target
		e.target.value = state.values[name] + ' '
		onBlurHandler(e)

		const updateErrorMessage = (isValid, serverMessage) => {
			if (!state.areValid[name]) return

			dispatch({
				type: ACTION_CREATOR.BLUR,
				errorMessages: { [name]: serverMessage },
				areTouched: { [name]: true },
				areValid: { [name]: isValid },
			})
		}

		return updateErrorMessage
	}

	const clearInputHandler = ref => {
		const { name } = ref.current

		dispatch({
			type: ACTION_CREATOR.CLEAR,
			name,
		})
	}

	const onCheckHandler = (e, required) => {
		window.scrollTo(0, window.scrollY)

		const { name } = e.target
		if (!name) return

		if (required)
			dispatch({
				type: ACTION_CREATOR.CHECK_REQUIRED,
				name,
			})
		else
			dispatch({
				type: ACTION_CREATOR.CHECK,
				name,
			})
	}

	const onRadioChangeHandler = e => {
		window.scrollTo(0, window.scrollY)

		const { name, value } = e.target

		dispatch({
			type: ACTION_CREATOR.INPUT,
			values: { ...state.values, [name]: value },
		})
	}

	const ableSubmit = Object.values(state.areValid).every(
		isValid => isValid === true
	)

	return {
		values: state.values,
		areTouched: state.areTouched,
		areValid: state.areValid,
		errorMessages: state.errorMessages,
		state,
		dispatch,
		onInputHandler,
		onBlurHandler,
		checkUniquenessHandler,
		clearInputHandler,
		onCheckHandler,
		onRadioChangeHandler,
		ableSubmit,
	}
}

// paymentMethod: {
//   pattern: /.*/,
//   message: '결제 방법을 선택해주세요.',
// }
