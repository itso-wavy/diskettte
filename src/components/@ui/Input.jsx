import {
	useState,
	useContext,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from 'react'
import { FormContext } from '../../context/form-context'
import { useInput } from '../../hooks'
import { Button } from './Button'
import { Img } from './Img'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import CheckedImg from '/assets/icons/checked.svg'
import UncheckedImg from '/assets/icons/unchecked.svg'
import { InputWrapper, NumberWrapper, CheckboxWrapper } from './Input.style'

// (서버 밸리데이션)
// 아이디, 셀러 브랜드명 중복 확인
// (로그인)
// 전송 보낸 후, 일치하는 계정 없으면 메시지
// 전송 보낸 후, 유저 유형이 다를 때 메시지 */

/**
 * @returns <TextInput id name type validationFn />
 */
function TextInput({
	id,
	name,
	type = 'text',
	placeholder,
	validationFn,
	...props
}) {
	const { ref } = useInput()
	const { values, onInputHandler, onBlurHandler, clearInputHandler } =
		useContext(FormContext)

	const value = values[name]

	return (
		<>
			<InputWrapper>
				<input
					ref={ref}
					id={id}
					name={name}
					type={type}
					value={value || ''}
					placeholder={placeholder}
					onInput={e => onInputHandler(e, { type })}
					onBlur={onBlurHandler}
					{...props}
				/>
				<div className='btn-box'>
					{value && (
						<Button
							$type='icon'
							$size='1.3rem'
							$radius='50%'
							$img={EraseImg}
							type='button'
							onClick={() => clearInputHandler(ref)}
							aria-label='clear'
							className='clear'
							tabIndex='-1'
						/>
					)}
				</div>
			</InputWrapper>
		</>
	)
}

function NumberInput({ label, id, name, placeholder, ...props }) {
	const options = { type: 'number' }

	const { value: value1, onInputHandler: onInputHandler1 } = useInput(options)
	const { value: value2, onInputHandler: onInputHandler2 } = useInput(options)
	const { value: value3, onInputHandler: onInputHandler3 } = useInput(options)

	const event = { target: { name, value: `${value1}-${value2}-${value3}` } }

	const { onInputHandler, onBlurHandler } = useContext(FormContext)

	useEffect(() => {
		onInputHandler(event, options)
	}, [value1, value2, value3])

	return (
		<NumberWrapper {...props}>
			{label}
			<input
				id={id}
				name={name}
				value={value1}
				onInput={onInputHandler1}
				placeholder={placeholder}
			/>
			<span className='number-bar' />
			<input
				id={id + '2'}
				name={name + '2'}
				value={value2}
				onInput={onInputHandler2}
			/>
			<span className='number-bar' />
			<input
				id={id + '3'}
				name={name + '3'}
				value={value3}
				onInput={onInputHandler3}
				onBlur={() => onBlurHandler(event)}
			/>
		</NumberWrapper>
	)
}

function Checkbox(
	{ isActive = true, required, id, name, info, ...props },
	ref
) {
	const [selected, setSelected] = useState(isActive)

	let checked = selected
	let toggleCheckboxHandler = e => {
		window.scrollTo(0, window.scrollY)

		if (e.target.name) setSelected(selected => !selected)
	}

	if (required) {
		const { areValid, onCheckHandler } = useContext(FormContext)
		checked = areValid[name]
		toggleCheckboxHandler = e => onCheckHandler(e, required)
	}

	useImperativeHandle(ref, () => ({
		checked,
		setSelected: selected => setSelected(selected),
	}))

	return (
		<CheckboxWrapper {...props}>
			<label htmlFor={id} onClick={toggleCheckboxHandler}>
				<Img src={!checked ? UncheckedImg : CheckedImg} $size='1.1rem' />
				{info}
			</label>
			<input
				id={id}
				ref={ref}
				type='checkbox'
				name={name}
				checked={checked}
				onChange={toggleCheckboxHandler}
				className='sr-only'
			/>
		</CheckboxWrapper>
	)
}

const RefCheckbox = forwardRef(Checkbox)

export { TextInput, NumberInput, RefCheckbox as Checkbox }
