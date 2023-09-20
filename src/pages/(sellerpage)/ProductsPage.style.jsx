import styled from 'styled-components'

export const StyledSection = styled.section`
	/* width: 100%; */
	position: relative;
	text-underline-offset: 3px;

	h2 {
		margin-bottom: 1.67rem;
		display: flex;
		/* position: relative; */
		font-size: 1.75rem;
		line-height: 1em;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-transform: uppercase;
		align-items: start;
	}

	/* .upload { */
	h2 > button {
		margin-left: auto;
		width: fit-content;
	}
`
