import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Button } from './Button'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import { SearchSvg } from '/src/components/@svg'
import { Wrapper } from './Input.style'
import styled from 'styled-components'

/**
 * 포커스시 스타일 변화: outline 2px
 * 블러시 밸리데이션 함수 실행(입력 중엔 밸리데이션하지 않음)
 * 밸리데이션 불통시 스타일 변화: outline red
 * (+ 어떤 밸리데이션이 불통인지 메시지 안내)
 * 모든 인풋의 밸리데이션 통과시 form 전송 버튼 활성화됨
 * (밸리데이션과 무관하게 취소, 뒤로가기 등의 기능은 가능해야 함)
 * 데이터 전송 후 서버 밸리데이션 불통시 경고메시지 띄움
 * @returns <Input />
 */
const Input = forwardRef(
	({ type = 'text', label, name, placeholder, extraBtn, ...props }, ref) => {
		const inputRef = useRef()
		const [value, setValue] = useState('')
		const onChange = e => setValue(e.target.value)
		const clearInput = () => setValue('')

		const activate = () => {
			inputRef.current.focus()
		}
		const deactivate = () => {
			// inputRef.current.focus()
		}
		useImperativeHandle(ref, () => {
			return { focus: activate, blur: deactivate }
		})

		return (
			<Wrapper>
				<label htmlFor={label}></label>
				<input
					ref={inputRef}
					id={label}
					type={type}
					name={name}
					value={value}
					// onBlur={onBlur}
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
		)
	}
)

const StyledInput = styled(Input)`
	background-color: ${({ theme }) => theme.color.lightgray};
	padding: 1rem calc(0.8rem + 2.9rem + 0.2rem) 1rem 0.8rem !important;
	border: 0 !important;
	height: 2.25rem !important;
`

const SearchInput = forwardRef((props, ref) => {
	const searchKeyword = e => {
		console.log(e.target)
	}

	return (
		<StyledInput
			ref={ref}
			placeholder='브랜드를 검색해보세요.'
			extraBtn={
				<Button
					$type='icon'
					$radius='50%'
					onClick={searchKeyword}
					aria-label='search'
				>
					<SearchSvg />
				</Button>
			}
			{...props}
		/>
	)
})

export { Input, SearchInput }
