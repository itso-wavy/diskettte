import { DropdownSvg, DoubleArrowSvg } from '/src/components/@svg'
import {
	StyledNav,
	StyledUl,
	StyledLink,
	StyledNumberLink,
} from './Pagination.style'
import PropTypes from 'prop-types'
import { useMemo } from 'react'

function PageNavigation({
	pageRange,
	currentPage,
	totalPages,
	theme = '#ddd',
	...props
}) {
	function NavigationItem({ page, ...props }) {
		const match = currentPage === page

		const onDisableHandler = e => {
			if (match) e.preventDefault()
		}

		return (
			<li {...props}>
				<StyledNumberLink
					to={`?page=${page}`}
					onClick={onDisableHandler}
					aria-current={match && 'page'}
					aria-label={`${page} page`}
					$theme={theme}
				>
					{page}
				</StyledNumberLink>
			</li>
		)
	}

	const currentArray = useMemo(() => {
		const chunkedArray = Array.from(
			{ length: Math.ceil(totalPages / pageRange) },
			(_, index) =>
				Array.from(
					{ length: Math.min(pageRange, totalPages - index * pageRange) },
					(_, subIndex) => index * pageRange + subIndex + 1
				)
		)

		return chunkedArray.filter(array => array.includes(currentPage))[0]
	}, [totalPages, currentPage, pageRange])

	return (
		<StyledUl {...props}>
			{currentArray.map(page => (
				<NavigationItem key={page} page={page} />
			))}
		</StyledUl>
	)
}

function PageController({
	title,
	currentPage,
	totalPages,
	children,
	...props
}) {
	const hasPrevPage = currentPage > 1
	const hasNextPage = currentPage < totalPages

	function ControlButton({ img, disabled, ...props }) {
		const onDisableHandler = e => {
			if (disabled) e.preventDefault()
		}

		return (
			<StyledLink disabled={disabled} onClick={onDisableHandler} {...props}>
				{img}
			</StyledLink>
		)
	}

	return (
		<StyledNav aria-label={`${title} navigation`} {...props}>
			<ControlButton
				to='./?page=1'
				img={<DoubleArrowSvg />}
				disabled={!hasPrevPage}
				aria-label='first page'
				className='flip'
			/>
			<ControlButton
				to={`./?page=${currentPage - 1}`}
				img={<DropdownSvg />}
				disabled={!hasPrevPage}
				aria-label='previous page'
				className='flip'
			/>
			{children}
			<ControlButton
				to={`./?page=${currentPage + 1}`}
				img={<DropdownSvg />}
				disabled={!hasNextPage}
				aria-label='next page'
			/>
			<ControlButton
				to={`./?page=${totalPages}`}
				img={<DoubleArrowSvg />}
				disabled={!hasNextPage}
				aria-label='last page'
			/>
		</StyledNav>
	)
}

function Pagination({
	title,
	theme,
	pageRange,
	currentPage,
	itemsPerPage,
	totalItemsCount,
	...props
}) {
	const totalPages = Math.ceil(totalItemsCount / itemsPerPage)

	return (
		<PageController
			title={title}
			currentPage={currentPage}
			totalPages={totalPages}
			{...props}
		>
			<PageNavigation
				pageRange={pageRange}
				currentPage={currentPage}
				totalPages={totalPages}
				theme={theme}
			/>
		</PageController>
	)
}

export { Pagination }

Pagination.propTypes = {
	pageRange: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	itemsPerPage: PropTypes.number.isRequired,
	totalItemsCount: PropTypes.number.isRequired,
}
