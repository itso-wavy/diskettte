import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHeaderHeight, useInput } from '../../hooks'
import { Button } from '../@ui/Button'
import { CloseSvg } from '../@svg'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import SearchImg from '/assets/icons/ion_search-outline.svg'
import { searchProduct } from '../../lib/api'
import { SearchInputWrapper, StyledDialog, StyledUl } from './SearchInput.style'

function SearchResult({ results, closeSearchWindow, ...props }) {
	const headerHeight = useHeaderHeight()

	return (
		<StyledDialog id='searchWindow' $top={headerHeight} {...props}>
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
						<Link to={`/product/${result.product_id}`}>
							{result.product_name}
						</Link>
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
	const { ref: inputRef, value, onInputHandler, clearInputHandler } = useInput()
	const [results, setResults] = useState([])
	const searchInputRef = useRef()

	const clearInput = () => {
		clearInputHandler()
		setResults([])
	}
	const openSearchWindow = () => {
		searchWindow.show()
		inputRef.current.focus()
	}
	const closeSearchWindow = () => {
		searchWindow.close()
		clearInput()
	}

	const handleDocumentClick = e => {
		if (!searchInputRef.current.contains(e.target)) closeSearchWindow()
	}

	useEffect(() => {
		document.addEventListener('click', handleDocumentClick)

		return () => {
			document.removeEventListener('click', handleDocumentClick)
		}
	}, [])

	const searchKeyword = useCallback(e => {
		onInputHandler(e)

		const keyword = e.target.value.trim()
		const success = res => setResults(res?.data.results || [])

		searchProduct(keyword, success, 500)
	}, [])

	return (
		<>
			<SearchInputWrapper ref={searchInputRef}>
				<input
					ref={inputRef}
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onInputHandler}
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
