import { useReducer } from 'react'
import validate from '../lib/validation'

const ACTION_CREATOR = {
	INPUT: 'INPUT',
	BLUR: 'BLUR',
	CLEAR: 'CLEAR',
}

const reducer = (state, action) => {
	const { values, areTouched, areValid, errorMessages } = action

	switch (action.type) {
		case ACTION_CREATOR.INPUT:
			return { ...state, values }
		case ACTION_CREATOR.BLUR:
			return {
				...state,
				areTouched,
				areValid,
				errorMessages,
			}
		case ACTION_CREATOR.CLEAR:
			return {
				...state,
				values,
				areTouched,
				errorMessages,
			}
		default:
			return state
	}
}

export function useForm(initialState) {
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

	// const [values, setValues] = useState([])
	// const [areTouched, setAreTouched] = useState([])
	// const [areValid, setAreValid] = useState([])
	// const [errorMessages, setErrorMessages] = useState([])

	const onInputHandler = (e, options) => {
		let { value, name } = e.target

		if (options.type === 'number') value = value.replace(/\D/g, '')

		dispatch({
			type: ACTION_CREATOR.INPUT,
			values: { ...state.values, [name]: value },
		})
		// setValues(values => ({ ...values, [name]: value }))
	}

	const onBlurHandler = e => {
		const { value, name } = e.target

		let validationMessage, isTouched

		const validationFn = validate(name)
		const trimmingValue = value.trim()
		if (value) validationMessage = validationFn(trimmingValue)

		/* 값이 있어야 메시지를 보임... ==> values[name] && 

    1) '' : value.trim() x && validationMessage x
    1) ' ' : value.trim() x && validationMessage
    2) 'abc' : value.trim() o && validationMessage 
    */

		isTouched = value ? true : false

		dispatch({
			type: ACTION_CREATOR.BLUR,
			errorMessages: { ...state.errorMessages, [name]: validationMessage },
			areTouched: { ...state.areTouched, [name]: isTouched },
			areValid: { ...state.areValid, [name]: isTouched && !validationMessage },
		})

		// setErrorMessages(errorMessages => ({
		// 	...errorMessages,
		// 	[name]: validationMessage,
		// }))

		// setAreValid(isValid => ({ ...isValid, [name]: !validationMessage }))
	}

	const clearInputHandler = ref => {
		const { name } = ref.current

		dispatch({
			type: ACTION_CREATOR.CLEAR,
			values: { ...state.values, [name]: '' },
			areTouched: { ...state.areTouched, [name]: false },
			errorMessages: { ...state.errorMessages, [name]: '' },
		})

		// setValues(values => ({ ...values, [e.target.name]: '' }))
	}
	const ableSubmit = Object.values(state.areValid).every(
		isValid => isValid === true
	)

	return {
		values: state.values,
		// setValues,
		areTouched: state.areTouched,
		areValid: state.areValid,
		errorMessages: state.errorMessages,
		// setErrorMessages,
		dispatch,
		onInputHandler,
		onBlurHandler,
		clearInputHandler,
		ableSubmit,
	}
}

/* loading error + useEffect useCallback
useHttp-의존성 제거 */
