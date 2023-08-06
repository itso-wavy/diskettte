import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../@ui/Button'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import SearchImg from '/assets/icons/ion_search-outline.svg'
import { CloseSvg } from '../@svg'
import { SearchInputWrapper, StyledDialog, StyledUl } from './SearchInput.style'

function SearchResult({ results, closeSearchWindow, ...props }) {
	const [dialogTop, setDialogTop] = useState(0)

	useEffect(() => {
		const headerHeight = document.querySelector('#header').clientHeight

		setDialogTop(headerHeight)
	}, [])

	return (
		<StyledDialog id='searchWindow' $top={dialogTop} {...props}>
			<Button
				$type='icon'
				$size='2.5em'
				onClick={closeSearchWindow}
				ariaLabel='close search window'
				className='close'
			>
				<CloseSvg className='close' />
			</Button>
			<StyledUl>
				{results.map(result => (
					<li key={result.product_id}>
						<Link to=''>{result.product_name}</Link>
					</li>
				))}
			</StyledUl>
		</StyledDialog>
	)
}

function SearchInput({
	name,
	placeholder = '상품을 검색해보세요.',
	onInput,
	...props
}) {
	const inputRef = useRef()
	// useInput 사용 가능할 듯
	const [value, setValue] = useState('')
	const [results, setResults] = useState([])
	const clearInput = () => {
		setValue('')
		setResults([])
	}
	const onChangeHandler = e => setValue(e.target.value)
	const openSearchWindow = () => {
		searchWindow.show()
		inputRef.current.focus()
	}
	const closeSearchWindow = () => {
		searchWindow.close()
		clearInput()
	}

	const searchKeyword = async e => {
		const keyword = e.target.value.trim()
		let response

		if (keyword)
			response = await axios.get(
				`https://openmarket.weniv.co.kr//products/?search=${keyword}`
			)
		setResults(response?.data.results || [])
		console.log(results)
	}

	return (
		<>
			<SearchInputWrapper>
				<input
					ref={inputRef}
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onChangeHandler}
					onClick={openSearchWindow}
					onInput={searchKeyword}
					{...props}
				/>
				<div className='btn-box'>
					{value ? (
						<Button
							$type='icon'
							$size='1.3rem'
							$radius='50%'
							$img={EraseImg}
							onClick={clearInput}
							aria-label='clear'
							className='clear'
						/>
					) : (
						<Button
							$type='icon'
							$radius='50%'
							$img={SearchImg}
							onClick={searchKeyword}
							aria-label='search'
						/>
					)}
				</div>
			</SearchInputWrapper>
			<SearchResult results={results} closeSearchWindow={closeSearchWindow} />
		</>
	)
}

export { SearchInput }

// product_id: 499
