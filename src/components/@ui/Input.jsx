import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import Button from './Button'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import SearchImg from '/assets/icons/ion_search-outline.svg'
import { Wrapper } from './Input.style'
import styled from 'styled-components'

/**
 * @returns <Input ref >
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

export const SearchInput = forwardRef((props, ref) => {
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
					$img={SearchImg}
					onClick={searchKeyword}
					aria-label='search'
				/>
			}
			{...props}
		/>
	)
})

export default Input
