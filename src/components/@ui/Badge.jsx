import { Img } from './Img.jsx'
import { Wrapper } from './Badge.style.jsx'

function Badge({ $style = 'primary', text, icon, children, ...props }) {
	return (
		<Wrapper {...props}>
			{text}
			{icon && <Img src={icon} aria-hidden />}
			{children}
		</Wrapper>
	)
}

export { Badge }
