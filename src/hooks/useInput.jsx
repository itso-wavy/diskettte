import { useState, useRef } from 'react'

export const useInput = options => {
	const inputRef = useRef()
	const [value, setValue] = useState('')

	const onInputHandler = e => {
		let input = e.target.value
		if (options && options.type === 'number') input = input.replace(/\D/g, '')

		setValue(input)
	}

	const clearInputHandler = () => {
		setValue('')
	}

	return {
		ref: inputRef,
		value,
		onInputHandler,
		clearInputHandler,
	}
}
