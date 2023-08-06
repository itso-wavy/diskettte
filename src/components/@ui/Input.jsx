import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { useInput } from '../../hooks'
import { Button } from '../@ui/Button'
import { Img } from '../@ui/Img'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
// import SearchImg from '/assets/icons/ion_search-outline.svg'
import CheckedImg from '/assets/icons/checked.svg'
import UncheckedImg from '/assets/icons/unchecked.svg'
import {
	InputWrapper,
	// SearchInputWrapper,
	PhonenumberWrapper,
	CheckboxWrapper,
} from './Input.style'

// (서버 밸리데이션)
// 아이디, 셀러 브랜드명 중복 확인
// (로그인)
// 전송 보낸 후, 일치하는 계정 없으면 메시지
// 전송 보낸 후, 유저 유형이 다를 때 메시지 */

/**
 * @returns <TextInput id name type validateFn />
 */
function TextInput({
	id,
	name,
	type = 'text',
	placeholder,
	// onInput,
	validateFn,
	// options,
	...props
}) {
	/* 
  forwardRef
  
  useImperativeHandle(ref, () => {
		return { focus: ()=>{ref.current.focus}, blur: deactivate }
	})
  */

	// const {
	// 	ref,
	// 	value,
	// 	isTouched,
	// 	isValid,
	// 	hasError,
	// 	onBlurHandler,
	// 	onChangeHandler,
	// 	clearInputHandler,
	// } = useInput(validateFn, options)
	const { ref, value, onBlurHandler, onInputHandler, clearInputHandler } =
		useInput(validateFn, { type })

	return (
		<>
			<InputWrapper>
				<input
					ref={ref}
					id={id}
					// type={type}
					name={name}
					value={value}
					placeholder={placeholder}
					onInput={onInputHandler}
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

// function SearchInput({
// 	name,
// 	placeholder = '브랜드를 검색해보세요.',
// 	onInput,
// 	...props
// }) {
// 	const [value, setValue] = useState('')
// 	const onChange = e => setValue(e.target.value)
// 	const clearInput = () => setValue('')
// 	const searchKeyword = e => {
// 		console.log(e.target.value)
// 	}

// 	return (
// 		<SearchInputWrapper>
// 			<input
// 				name={name}
// 				value={value}
// 				placeholder={placeholder}
// 				onChange={onChange}
// 				onInput={searchKeyword}
// 				{...props}
// 			/>
// 			<div className='btn-box'>
// 				{value && (
// 					<Button
// 						$type='icon'
// 						$size='1.3rem'
// 						$radius='50%'
// 						$img={EraseImg}
// 						onClick={clearInput}
// 						aria-label='clear'
// 						className='clear'
// 					/>
// 				)}
// 				<Button
// 					$type='icon'
// 					$radius='50%'
// 					$img={SearchImg}
// 					onClick={searchKeyword}
// 					aria-label='search'
// 				/>
// 			</div>
// 		</SearchInputWrapper>
// 	)
// }

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
