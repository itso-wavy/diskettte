import styled from 'styled-components'

export const StyledSection = styled.section`
	min-height: 300px;
	position: relative;
	text-underline-offset: 3px;
	overflow-x: auto;

	h2 {
		margin-bottom: 1.67rem;
		font-size: 1.75rem;
		line-height: 1em;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-transform: uppercase;
	}
`
