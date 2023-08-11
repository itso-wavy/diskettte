import { Wrapper, StyledP } from './Tag.style.jsx'

function TagBox({ $color = 'white', $size, children, ...props }) {
	return (
		<Wrapper $color={$color} $size={$size} {...props}>
			{children}
		</Wrapper>
	)
}

function Tag({ $color, children, ...props }) {
	return (
		<StyledP $color={$color} {...props}>
			{children}
		</StyledP>
	)
}

export { Tag, TagBox }
