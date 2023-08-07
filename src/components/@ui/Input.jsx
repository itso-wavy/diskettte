import {
	useState,
	useRef,
	forwardRef,
	useImperativeHandle,
	useContext,
} from 'react'
import { useInput } from '../../hooks'
import { FormContext } from '../../context/form-context'
import { Button } from '../@ui/Button'
import { Img } from '../@ui/Img'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import CheckedImg from '/assets/icons/checked.svg'
import UncheckedImg from '/assets/icons/unchecked.svg'
import {
	InputWrapper,
	PhonenumberWrapper,
	CheckboxWrapper,
} from './Input.style'

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
	// onInput,
	validationFn,
	// options,
	...props
}) {
	/* 
  forwardRef
  
  useImperativeHandle(ref, () => {
		return { focus: ()=>{ref.current.focus}, blur: deactivate }
	})
  */

	const {
		ref,
		value,
		onInputHandler,
		// onBlurHandler,
		clearInputHandler,
	} = useInput({ type })

	const { onInputHandler: onFormInputHandler, onBlurHandler } =
		useContext(FormContext)

	return (
		<>
			<InputWrapper>
				<input
					ref={ref}
					id={id}
					name={name}
					value={value}
					placeholder={placeholder}
					onInput={e => {
						onInputHandler(e)
						onFormInputHandler(e)
					}}
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
							onClick={clearInputHandler}
							aria-label='clear'
							className='clear'
						/>
					)}
				</div>
			</InputWrapper>
		</>
	)
}

function PhonenumberInput({ label, id, name, placeholder, ...props }) {
	return (
		<PhonenumberWrapper {...props}>
			{label}
			<input id={id} name={name} placeholder={placeholder} />
			<span className='phonenumber-bar' />
			<input id={id + '2'} name={name} />
			<span className='phonenumber-bar' />
			<input id={id + '3'} name={name} />
		</PhonenumberWrapper>
	)
}

function Checkbox({ id, name, info, ...props }) {
	const [isChecked, setIsChecked] = useState(false)

	const toggleCheckboxHandler = e => {
		e.preventDefault()
		setIsChecked(isChecked => !isChecked)
	}

	return (
		<CheckboxWrapper {...props}>
			<label htmlFor={id} onClick={toggleCheckboxHandler}>
				<Img src={!isChecked ? UncheckedImg : CheckedImg} $size='1.1rem' />
				{info}
			</label>
			<input
				id={id}
				type='checkbox'
				name={name}
				onChange={toggleCheckboxHandler}
				checked={isChecked}
				className='sr-only'
			/>
		</CheckboxWrapper>
	)
}

export {
	TextInput,
	// SearchInput,
	PhonenumberInput,
	Checkbox,
}
