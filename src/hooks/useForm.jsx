import { useReducer } from 'react'
import validate from '../lib/validation'

export const ACTION_CREATOR = {
	INPUT: 'INPUT',
	BLUR: 'BLUR',
	CLEAR: 'CLEAR',
	CHECK: 'CHECK',
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

		if (options.type === 'number') value = value.replace(/\D/g, '')

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

		/* 값이 있어야 메시지를 보임... ==> values[name] && 

    1) '' : value.trim() x && validationMessage x
    1) ' ' : value.trim() x && validationMessage
    2) 'abc' : value.trim() o && validationMessage 
    */

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

	const onCheckHandler = e => {
		const { name } = e.target

		if (name) {
			dispatch({
				type: ACTION_CREATOR.CHECK,
				name,
			})
		}
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
		ableSubmit,
	}
}
