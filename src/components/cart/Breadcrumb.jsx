import { useLocation } from 'react-router-dom'
import { StyledOl, StyledLi } from './Breadcrumb.style'

function Breadcrumb({ crumbs, ...props }) {
	const { pathname } = useLocation()

	return (
		<nav aria-label='breadcrumb' {...props}>
			<StyledOl>
				{crumbs.map((crumb, index) => (
					<StyledLi
						key={index}
						aria-current={crumb.pathname === pathname ? 'page' : undefined}
					>
						{crumb.text}
					</StyledLi>
				))}
			</StyledOl>
		</nav>
	)
}

export { Breadcrumb }
