import { StyledLink } from './SkipNav.style'

function SkipNav({ ...props }) {
	return (
		<StyledLink href='#main' aria-label='Skip links' {...props}>
			Skip to main content
		</StyledLink>
	)
}

export { SkipNav }
