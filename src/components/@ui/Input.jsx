import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Button } from './Button'
import { Img } from '../@ui/Img'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import SearchImg from '/assets/icons/ion_search-outline.svg'
import CheckedImg from '/assets/icons/checked.svg'
import UncheckedImg from '/assets/icons/unchecked.svg'
import { Wrapper, CheckboxWrapper } from './Input.style'
import styled from 'styled-components'

/**
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
 * 포커스시 스타일 변화: outline 2px
 * 블러시 밸리데이션 함수 실행(입력 중엔 밸리데이션하지 않음)
 * 밸리데이션 불통시 스타일 변화: outline red
 * (+ 어떤 밸리데이션이 불통인지 메시지 안내)
 * 모든 인풋의 밸리데이션 통과시 form 전송 버튼 활성화됨
 * (밸리데이션과 무관하게 취소, 뒤로가기 등의 기능은 가능해야 함)
 * 데이터 전송 후 서버 밸리데이션 불통시 경고메시지 띄움
 * @returns <TextInput />
 */
function TextInput({
	label,
	id,
	name,
	type = 'text',
	placeholder,
	onBlur,
	// onValidate,
	extraBtn,
	children,
	...props
}) {
	//  onFocus={}
	//  onInvalid={}
	//  onError={}
	const inputRef = useRef()
	const [value, setValue] = useState('')
	const onChange = e => setValue(e.target.value)

	const clearInput = () => setValue('')

	const activate = () => {
		inputRef.current.focus()
	}

	const deactivate = () => {
		// validation
	}
	// useImperativeHandle(ref, () => {
	// 	return { focus: activate, blur: deactivate }
	// })

	return (
		<div>
			<Wrapper $extraBtn={extraBtn}>
				<input
					// ref={inputRef}
					id={id}
					type={type}
					name={name}
					value={value}
					onBlur={onBlur}
					onChange={onChange}
					placeholder={placeholder}
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
			{children}
		</div>
	)
}

function Checkbox({ info }) {
	const [isChecked, setIsChecked] = useState(false)

	const toggleCheckboxHandler = e => {
		e.preventDefault()
		setIsChecked(isChecked => !isChecked)
	}

	return (
		<CheckboxWrapper className='terms-checkbox'>
			<label htmlFor='termsAgree' onClick={toggleCheckboxHandler}>
				<Img src={!isChecked ? UncheckedImg : CheckedImg} $size='1.1rem' />
				{info}
			</label>
			<input
				id='termsAgree'
				type='checkbox'
				name='termsAgree'
				checked={isChecked}
				className='sr-only'
			/>
		</CheckboxWrapper>
	)
}

// const TextInput = forwardRef(
// 	(
// 		{ type = 'text', label, id, name, placeholder, extraBtn, ...props },
// 		ref
// 	) => {
// 		const inputRef = useRef()
// 		const [value, setValue] = useState('')
// 		const onChange = e => setValue(e.target.value)
// 		const clearInput = () => setValue('')

// 		const activate = () => {
// 			inputRef.current.focus()
// 		}
// 		const deactivate = () => {
// 			// inputRef.current.focus()
// 		}
// 		useImperativeHandle(ref, () => {
// 			return { focus: activate, blur: deactivate }
// 		})

// 		return (
// 			<Wrapper>
// 				<input
// 					ref={inputRef}
// 					id={id}
// 					type={type}
// 					name={name}
// 					value={value}
// 					// onBlur={onBlur}
// 					onChange={onChange}
// 					placeholder={placeholder}
// 					{...props}
// 				/>
// 				<div className='btn-box'>
// 					{value && (
// 						<Button
// 							$type='icon'
// 							$size='1.3rem'
// 							$radius='50%'
// 							$img={EraseImg}
// 							onClick={clearInput}
// 							aria-label='clear'
// 							className='clear'
// 						/>
// 					)}
// 					{extraBtn}
// 				</div>
// 			</Wrapper>
// 		)
// 	}
// )

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
