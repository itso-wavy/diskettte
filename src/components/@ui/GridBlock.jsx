import { Wrapper } from './GridBlock.style.jsx'

function GridBlock({ children, ...props }) {
	return <Wrapper {...props}>{children}</Wrapper>
}

export { GridBlock }
