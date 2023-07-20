import { NavLink } from 'react-router-dom'
import SearchInput from '../@ui/SearchInput'
import useStore from '../../store'
import styled from 'styled-components'

export const Wrapper = styled.nav`
	border-bottom: 1px solid ${({ theme }) => theme.color.disabled};

	ul {
		display: flex;
		gap: 1em;
		font-size: 1.25rem;
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	a:hover,
	& .active {
		text-underline-offset: 4px;
		text-decoration: underline;
		text-decoration-thickness: 3px;
	}
`

const CategoriesItem = ({ url, ariaLabel, text, ...props }) => {
	return (
		<li>
			<NavLink
				to={url}
				aria-label={ariaLabel}
				className={({ isActive }) => (isActive ? 'active' : undefined)}
				{...props}
			>
				{text}
			</NavLink>
		</li>
	)
}

export function HeaderCategories() {
	const { isMobile } = useStore()

	if (isMobile) return <SearchInput />
	return (
		<Wrapper aria-label='Product Categories'>
			<ul>
				<CategoriesItem
					url='/categories/all'
					ariaLabel='go to all products categorie'
					text='All'
				/>
				<CategoriesItem
					url='/categories/new-arrivals'
					ariaLabel='go to new-arrivals categorie'
					text='New arrivals'
				/>
				<CategoriesItem
					url='/categories/exclusive'
					ariaLabel='go to exclusive
			categorie'
					text='Exclusive'
				/>
				<CategoriesItem
					url='/categories/event'
					ariaLabel='go to event
			categorie'
					text='Event'
				/>
			</ul>
		</Wrapper>
	)
}
