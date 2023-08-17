import { Img } from './Img.jsx'
import { StyledSpan } from './Badge.style.jsx'

/**
 * @param $style 'primary' | 'secondary'
 * @returns <Badge $style text icon? />
 */
function Badge({ $style = 'primary', text, icon, children, ...props }) {
	return (
		<StyledSpan $style={$style} {...props}>
			<span>{text}</span>
			{icon && <Img src={icon} aria-hidden />}
			{children}
		</StyledSpan>
	)
}

export { Badge }
