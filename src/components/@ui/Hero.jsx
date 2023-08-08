import { StyledSection } from './Hero.style'

function Hero({ sectionTitle, children, ...props }) {
	return (
		<StyledSection aria-labelledby={sectionTitle} {...props}>
			<h2 className='sr-only' id={sectionTitle}>
				{sectionTitle}
			</h2>
			{children}
		</StyledSection>
	)
}

export { Hero }
