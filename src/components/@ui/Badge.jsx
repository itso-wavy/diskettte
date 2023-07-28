import { Img } from './Img.jsx'
import { Wrapper } from './Badge.style.jsx'

/**
 * @param $style 'primary' || 'secondary'
 * @returns <Badge $style text icon? />
 */
function Badge({ $style = 'primary', text, icon, children, ...props }) {
	return (
		<Wrapper $style={$style} {...props}>
			<span>{text}</span>
			{icon && <Img src={icon} aria-hidden />}
			{children}
		</Wrapper>
	)
}

export { Badge }
