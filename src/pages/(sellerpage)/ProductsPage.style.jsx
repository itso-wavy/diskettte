import styled from 'styled-components'

export const StyledSection = styled.section`
	min-height: 300px;
	position: relative;
	text-underline-offset: 3px;
	overflow-x: auto;

	h2 {
		display: flex;
		align-items: start;
		margin-bottom: 1.67rem;
		font-size: 1.75rem;
		line-height: 1em;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-transform: uppercase;
	}

	h2 > button {
		margin-left: auto;
		width: fit-content;
	}
`
