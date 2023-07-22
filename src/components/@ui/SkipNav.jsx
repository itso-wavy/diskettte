import { StyledLink } from './SkipNav.style'

export default function SkipNav({ ...props }) {
	return (
		<StyledLink href='#main-content' aria-label='Skip links' {...props}>
			Skip to main content
		</StyledLink>
	)
}
