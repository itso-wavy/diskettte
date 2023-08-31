import { NavLink, useMatch } from 'react-router-dom'
import { SearchInput } from '../common'
import { StyledNav, Wrapper } from './HeaderCategories.style'
import useStore from '../../store'

const CategoriesItem = ({ url, ariaLabel, text, ...props }) => {
	const match = useMatch(url)

	return (
		<li>
			<NavLink
				to={url}
				aria-label={ariaLabel}
				aria-current={match && 'page'}
				{...props}
			>
				{text}
			</NavLink>
		</li>
	)
}

export function HeaderCategories() {
	const { isMobile } = useStore()

	if (isMobile)
		return (
			<Wrapper>
				<SearchInput />
			</Wrapper>
		)
	return (
		<StyledNav aria-label='product categories'>
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
		</StyledNav>
	)
}
