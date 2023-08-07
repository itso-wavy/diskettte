import { useState, useRef } from 'react'

export function useInput(options) {
	const inputRef = useRef()
	const [value, setValue] = useState('')

	const process = e => {
		let input = e.target.value
		if (options.type === 'number') input = input.replace(/\D/g, '')

		setValue(input)
	}

	const clearInputHandler = () => {
		setValue('')
	}

	return {
		ref: inputRef,
		value,
		onInputHandler: process,
		clearInputHandler,
	}
}
