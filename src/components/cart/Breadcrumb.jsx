import { useLocation } from 'react-router-dom'
import { StyledNav, StyledLi } from './Breadcrumb.style'

function Breadcrumb({ crumbs, ...props }) {
	const { pathname } = useLocation()

	return (
		<StyledNav aria-label='breadcrumb' {...props}>
			<ol>
				{crumbs.map((crumb, index) => (
					<StyledLi
						key={index}
						aria-current={crumb.pathname === pathname ? 'page' : undefined}
					>
						{crumb.text}
					</StyledLi>
				))}
			</ol>
		</StyledNav>
	)
}

export { Breadcrumb }
