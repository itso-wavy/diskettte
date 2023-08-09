import { StyledSection } from './Section.style'

/**
 * @returns <Section sectionId? sectionTitle? $top? />
 */
function Section({ sectionId, sectionTitle, $top, children, ...props }) {
	return (
		<StyledSection aria-labelledby={sectionId} $top={$top} {...props}>
			{sectionId && (
				<h2 className='sr-only' id={sectionId}>
					{sectionTitle}
				</h2>
			)}
			{children}
		</StyledSection>
	)
}

export { Section }
