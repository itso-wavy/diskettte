import { useState, useRef } from 'react'

export function useInput(validateFn = () => true, options) {
	// 1. onInput(onChange)시 입력 타입에 따라 값을 트리밍하고 value로 저장함
	// 2. onBlur시 클라이언트측 밸리데이션 함수로 양식을 검증하고 피드백을 줌
	// 2-1. 모든 인풋이 isValid여야 폼 전송이 가능함
	// 2-2. 현재 폼 내부가 필드셋 단위로 나뉘어져 있으므로 context 관리하자
	// 3. onSubmit시 서버측 밸리데이션, 중복값을 안내하고 피드백을 줌

	const inputRef = useRef()
	const [value, setValue] = useState('')
	// const [isTouched, setIsTouched] = useState(false)
	// const isValid = validateFn(value.trim())
	// const hasError = !isValid && isTouched

	const validate = () => {
		const isValid = validateFn(value.trim())

		return isValid
	}

	const processInput = e => {
		let input = e.target.value
		if (options.type === 'number') input = input.replace(/\D/g, '')

		setValue(input)
	}

	const clearInputHandler = () => {
		setValue('')
		// setIsTouched(false)
	}

	return {
		ref: inputRef,
		value,
		// isTouched,
		// isValid,
		// hasError,
		onBlurHandler: validate,
		onInputHandler: processInput,
		clearInputHandler,
	}
}

/* loading error + useEffect useCallback
useHttp-의존성 제거 */
