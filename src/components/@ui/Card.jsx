import { Rotate } from '../../lib/utils/text-decorator'
import { Wrapper, StyledFigure } from './Card.style'

function Card({ $direction = 'column', children, ...props }) {
	return (
		<Wrapper $direction={$direction} {...props}>
			{children}
		</Wrapper>
	)
}

function RotatedFigureCard({ figcaption, src, alt, children, ...props }) {
	return (
		<StyledFigure {...props}>
			<Card $direction='row'>
				<figcaption>
					<Rotate>{children}</Rotate>
				</figcaption>
				<img src={src} alt={alt} />
			</Card>
		</StyledFigure>
	)
}

export { Card, RotatedFigureCard }
