import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Button } from '../@ui/Button'
import { Img } from '../@ui/Img'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import SearchImg from '/assets/icons/ion_search-outline.svg'
import CheckedImg from '/assets/icons/checked.svg'
import UncheckedImg from '/assets/icons/unchecked.svg'
import { Wrapper, CheckboxWrapper } from './Input.style'
import styled from 'styled-components'

// blur시 인풋 트리밍 값이 isEntered인지 확인, 전송 버튼 누르면 인풋 포커싱
// 키 입력할 때마다 비밀번호 양식 검사하고 아래 메시지 컬러(pw)
// 핸드폰 번호는 010으로 시작하는 10~11자리 숫자로만
// 이메일 양식에 맞아야 함
// (셀러) 사업자번호는 10자리로 이루어진 숫자
// (셀러) 브랜드명은 중복 불가
// 양식에 밸리데이션 문제 있으면 전송 불가함
// 전송 보낸 후, 일치하는 계정 없으면 메시지
// 전송 보낸 후, 유저 유형이 다를 때 메시지 */
/**
 * @returns <TextInput id name type onInput />
 */
function TextInput({
	id,
	name,
	type = 'text',
	placeholder,
	onInput,
	// onBlur,
	// onInvalid,
	// onValidate,
	extraBtn,
	...props
}) {
	const inputRef = useRef()
	const [value, setValue] = useState('')
	// const [isValid, setIsValid] = useState(false)
	const onChange = e => setValue(e.target.value)

	const clearInput = () => setValue('')
	// const onInvalidHandler = () => {
	// 	inputRef.current.focus()
	// }
	// const activate = () => {
	// 	inputRef.current.focus()
	// }

	// const deactivate = () => {
	// 	// validation
	// }
	/* 
  forwardRef
  
  useImperativeHandle(ref, () => {
		return { focus: activate, blur: deactivate }
	})
  */

	return (
		<>
			<Wrapper $extraBtn={extraBtn}>
				<input
					ref={inputRef}
					id={id}
					type={type}
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					onInput={onInput} // 비밀번호 검증시
					// onInvalid={onInvalidHandler}
					// onBlur={onBlurHandler}
					{...props}
				/>
				<div className='btn-box'>
					{value && (
						<Button
							$type='icon'
							$size='1.3rem'
							$radius='50%'
							$img={EraseImg}
							onClick={clearInput}
							aria-label='clear'
							className='clear'
						/>
					)}
					{extraBtn}
				</div>
			</Wrapper>
		</>
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

const StyledSearchInput = styled(TextInput)`
	background-color: ${({ theme }) => theme.color.lightgray};
	padding: 1rem calc(0.8rem + 2.9rem + 0.2rem) 1rem 0.8rem !important;
	border: 0 !important;
	height: 2.25rem !important;
`

// const SearchInput = (props, ref) => {
const SearchInput = props => {
	const searchKeyword = e => {
		console.log(e.target)
	}

	return (
		<StyledSearchInput
			// ref={ref}
			placeholder='브랜드를 검색해보세요.'
			extraBtn={
				<Button
					$type='icon'
					$radius='50%'
					$img={SearchImg}
					onClick={searchKeyword}
					aria-label='search'
				/>
			}
			{...props}
		/>
	)
}

export { TextInput, SearchInput, Checkbox }
