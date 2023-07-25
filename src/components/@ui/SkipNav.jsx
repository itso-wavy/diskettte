import { StyledLink } from './SkipNav.style'

function SkipNav({ ...props }) {
	return (
		<StyledLink href='#main-content' aria-label='Skip links' {...props}>
			Skip to main content
		</StyledLink>
	)
}

export { SkipNav }
