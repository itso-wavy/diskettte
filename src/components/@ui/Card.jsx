import { Wrapper, WrapperRotated } from './Card.style'

function Card({ $direction = 'column', children, ...props }) {
	return (
		<Wrapper $direction={$direction} {...props}>
			{children}
		</Wrapper>
	)
}

function CardRotated({ children, ...props }) {
	return <Wrapper {...props}>{children}</Wrapper>
}

export { Card, CardRotated }
